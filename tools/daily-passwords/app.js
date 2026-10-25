"use strict";

(() => {
  const GROUPS = Object.freeze({
    "hydris-sls": {title:"Hydris & SLS", fields:[{id:"hydris",label:"Hydris"},{id:"sls",label:"SensorLab / SLS (iM2)"}]},
    "coretemp": {title:"CoreTemp", fields:[{id:"coretemp",label:"CoreTemp"}]}
  });
  const IDS = Object.keys(GROUPS);
  const DATA_CACHE = "pawleys-password-data-v1";
  const ENVELOPE_FORMAT = "pawleys-daily-passwords.v1";
  const KEY_DB = "pawleys-password-trusted-devices-v1";
  const KEY_STORE = "remembered-group-keys";
  const UTF8 = new TextEncoder();
  const state = {activeGroup:null, unlocked:new Map(), restoring:false};
  const $ = id => document.getElementById(id);

  function localToday() {
    const now=new Date();
    return [now.getFullYear(),String(now.getMonth()+1).padStart(2,"0"),String(now.getDate()).padStart(2,"0")].join("-");
  }
  function dateAdd(iso,days) {
    const [year,month,day]=iso.split("-").map(Number);
    const next=new Date(Date.UTC(year,month-1,day+days));
    return [next.getUTCFullYear(),String(next.getUTCMonth()+1).padStart(2,"0"),String(next.getUTCDate()).padStart(2,"0")].join("-");
  }
  function dateHuman(iso) {
    if(!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
    const [year,month,day]=iso.split("-").map(Number);
    return new Intl.DateTimeFormat(undefined,{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"}).format(new Date(Date.UTC(year,month-1,day)));
  }
  function dataUrl(group) {
    const path=window.PAWLEYS_CONFIG?.dataUrls?.[group];
    if(!path) throw new Error("The encrypted data location is missing.");
    const url=new URL(path,window.location.href);
    if(url.protocol!=="https:" && url.origin!==window.location.origin) throw new Error("External password data must use HTTPS.");
    return url.href;
  }
  function notice(element,text,kind="error") {
    element.textContent=text;
    element.classList.toggle("info",kind==="info");
    element.hidden=!text;
  }
  function clearNotices() {
    for(const id of ["loginNotice","resultNotice","addNotice"]) notice($(id),"");
  }
  function refreshNetworkBadge() {
    const node=$("connectionBadge"), online=navigator.onLine;
    node.classList.toggle("online",online);node.classList.toggle("offline",!online);
    node.lastElementChild.textContent=online?"Online":"Offline";
  }
  function fromBase64(text) {
    const raw=atob(text),bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++) bytes[i]=raw.charCodeAt(i);
    return bytes;
  }
  async function keyFromPassphrase(phrase) {
    // This non-extractable browser key can derive decryption keys but its raw
    // passphrase bytes cannot be exported by the application.
    return crypto.subtle.importKey("raw",UTF8.encode(phrase),"PBKDF2",false,["deriveKey"]);
  }
  async function decrypt(envelope,baseKey,group) {
    if(envelope.format!==ENVELOPE_FORMAT || envelope.group!==group ||
       envelope.cipher!=="AES-256-GCM" || envelope.kdf!=="PBKDF2-SHA256" ||
       !Number.isInteger(envelope.iterations) || envelope.iterations<310000 || envelope.iterations>2000000)
      throw new Error("Encrypted password data has an unsupported format.");
    const key=await crypto.subtle.deriveKey({name:"PBKDF2",salt:fromBase64(envelope.salt),iterations:envelope.iterations,hash:"SHA-256"},
      baseKey,{name:"AES-GCM",length:256},false,["decrypt"]);
    const plaintext=await crypto.subtle.decrypt({name:"AES-GCM",iv:fromBase64(envelope.iv),
      additionalData:UTF8.encode(`${ENVELOPE_FORMAT}|${group}`),tagLength:128},key,fromBase64(envelope.ciphertext));
    const payload=JSON.parse(new TextDecoder().decode(plaintext));
    if(payload.version!==1 || payload.group!==group || !payload.records || typeof payload.records!=="object")
      throw new Error("Decrypted data has an unsupported format.");
    return payload;
  }
  async function obtainData(group,baseKey) {
    const url=dataUrl(group);
    let networkError=null;
    if(navigator.onLine) {
      const abort=new AbortController();
      const timeout=setTimeout(()=>abort.abort(),6500);
      try {
        const response=await fetch(url,{signal:abort.signal,cache:"no-store",mode:"cors"});
        if(!response.ok) throw new Error(`Data download failed (HTTP ${response.status}).`);
        const envelope=await response.json();
        const content=await decrypt(envelope,baseKey,group);
        let cached=false;
        try {
          const cache=await caches.open(DATA_CACHE);
          await cache.put(url,new Response(JSON.stringify(envelope),{headers:{"Content-Type":"application/json"}}));
          cached=true;
        } catch { /* Online operation works even where Cache Storage is unavailable. */ }
        return {content,source:"Online update",cached};
      } catch(error) {
        // If a dataset was updated with a different passphrase, do not silently
        // fall back to the older cached dataset while online.
        if(error?.name==="OperationError" || /unsupported format/i.test(error?.message||"")) throw error;
        networkError=error;
      } finally {clearTimeout(timeout);}
    }
    try {
      const cache=await caches.open(DATA_CACHE);
      const response=await cache.match(url);
      if(response) {
        const content=await decrypt(await response.json(),baseKey,group);
        return {content,source:"Saved offline copy",cached:true};
      }
    } catch(error) {
      throw error;
    }
    if(networkError) throw new Error("Cannot download password data. An internet connection may be needed.");
    throw new Error("This group's encrypted data has not been downloaded for offline use.");
  }

  function openKeyDb() {
    return new Promise((resolve,reject)=>{
      if(!("indexedDB" in window)) return reject(new Error("This browser does not support remembering access."));
      const request=indexedDB.open(KEY_DB,1);
      request.onupgradeneeded=()=>request.result.createObjectStore(KEY_STORE);
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error||new Error("Browser storage is unavailable."));
      request.onblocked=()=>reject(new Error("Browser access storage is blocked by another tab."));
    });
  }
  async function keyDbAction(action,mode="readonly") {
    const db=await openKeyDb();
    try {
      return await new Promise((resolve,reject)=>{
        const tx=db.transaction(KEY_STORE,mode);
        const request=action(tx.objectStore(KEY_STORE));
        tx.oncomplete=()=>resolve(request?.result);
        tx.onerror=()=>reject(tx.error||new Error("Browser storage failed."));
        tx.onabort=()=>reject(tx.error||new Error("Browser storage was interrupted."));
      });
    } finally {db.close();}
  }
  const readRememberedKey=group=>keyDbAction(store=>store.get(group));
  const saveRememberedKey=(group,key)=>keyDbAction(store=>store.put(key,group),"readwrite");
  const removeRememberedKey=group=>keyDbAction(store=>store.delete(group),"readwrite");
  const removeAllRememberedKeys=()=>keyDbAction(store=>store.clear(),"readwrite");

  async function showCacheStatus() {
    try {
      const cache=await caches.open(DATA_CACHE);
      const matches=await Promise.all(IDS.map(group=>cache.match(dataUrl(group))));
      $("cachedMessage").textContent=matches.some(Boolean)
        ?"Encrypted offline data is available for a previously used group."
        :"First use needs an internet connection. Afterwards, saved data works offline.";
    } catch {$("cachedMessage").textContent="Offline data storage is not available in this browser.";}
  }
  function updateScreen() {
    const unlocked=state.unlocked.size>0;
    $("unlockPanel").hidden=unlocked;
    $("resultsPanel").hidden=!unlocked;
    document.body.classList.toggle("has-results",unlocked);
    $("continueButton").hidden=true;
    if(unlocked) renderResults();
    else void updateContinueButton();
  }
  async function updateContinueButton() {
    try {
      const keys=await Promise.all(IDS.map(readRememberedKey));
      $("continueButton").hidden=!keys.some(Boolean) || state.unlocked.size>0;
    } catch {$("continueButton").hidden=true;}
  }
  function setActiveGroup(group) {
    if(!state.unlocked.has(group)) return;
    state.activeGroup=group;
    clearNotices();
    renderResults();
  }
  function renderGroupTabs() {
    const container=$("groupTabs");container.replaceChildren();
    const entries=IDS.filter(group=>state.unlocked.has(group));
    container.hidden=entries.length<2;
    for(const group of entries) {
      const button=document.createElement("button");
      button.type="button";button.className="group-tab";
      button.textContent=GROUPS[group].title;
      button.setAttribute("role","tab");
      button.setAttribute("aria-selected",String(group===state.activeGroup));
      button.classList.toggle("active",group===state.activeGroup);
      button.addEventListener("click",()=>setActiveGroup(group));
      container.append(button);
    }
    $("addGroupButton").hidden=entries.length===IDS.length;
  }
  function renderResults() {
    if(!state.unlocked.has(state.activeGroup)) state.activeGroup=IDS.find(group=>state.unlocked.has(group))||null;
    if(!state.activeGroup) return;
    const entry=state.unlocked.get(state.activeGroup);
    $("resultsTitle").textContent=GROUPS[state.activeGroup].title;
    $("rememberCurrentGroup").checked=entry.remembered;
    $("rememberGroupLabel").textContent=`Remember ${GROUPS[state.activeGroup].title} on this device`;
    renderGroupTabs();
    const content=entry.content;
    const created=content.createdAt?new Date(content.createdAt).toLocaleDateString():"unknown";
    $("dataDetails").replaceChildren();
    const info=document.createElement("div");
    info.textContent=`${entry.source} · ${content.dateMin} through ${content.dateMax} · Updated ${created}`;
    $("dataDetails").append(info);
    const offline=document.createElement("div");
    offline.textContent=entry.cached?"● Encrypted copy available offline":"Offline copy unavailable on this device.";
    if(entry.cached)offline.className="ready-mark";
    $("dataDetails").append(offline);
    renderPasswords();
  }
  function renderPasswords() {
    const content=state.unlocked.get(state.activeGroup)?.content;
    if(!content)return;
    const date=$("instrumentDate").value;
    const container=$("passwordCards");container.replaceChildren();
    $("displayDateShort").textContent=date?dateHuman(date):"";
    $("todayNote").textContent=date===localToday()?"Today":"Selected date";
    const passwords=content.records[date];
    if(!passwords) {
      const msg=document.createElement("div");msg.className="no-data";
      const title=document.createElement("strong");title.textContent="No password for this date";
      msg.append(title,document.createTextNode(`The loaded file covers ${dateHuman(content.dateMin)} through ${dateHuman(content.dateMax)}. Try another instrument date.`));
      container.append(msg);return;
    }
    for(const field of GROUPS[state.activeGroup].fields) {
      if(!Object.prototype.hasOwnProperty.call(passwords,field.id)) continue;
      const value=String(passwords[field.id]);
      const card=document.createElement("div");card.className="password-card";
      const block=document.createElement("div");
      const label=document.createElement("span");label.className="password-label";label.textContent=field.label;
      const display=document.createElement("span");display.className="password-value";display.textContent=value;
      const button=document.createElement("button");button.className="copy-button";button.type="button";
      button.textContent="Copy";button.setAttribute("aria-label",`Copy ${field.label} password`);
      button.addEventListener("click",()=>{void copyPassword(value,button);});
      block.append(label,display);card.append(block,button);container.append(card);
    }
    if(!container.children.length) {
      const msg=document.createElement("div");msg.className="no-data";
      msg.textContent="No passwords were recorded for this group on this date.";
      container.append(msg);
    }
  }
  async function copyPassword(value,button) {
    try {
      if(navigator.clipboard&&window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const field=document.createElement("textarea");field.value=value;
        field.style.cssText="position:fixed;left:-10000px;top:0;opacity:0";
        document.body.append(field);
        try {field.focus();field.select();if(!document.execCommand("copy"))throw new Error("Clipboard unavailable");}
        finally {field.remove();}
      }
      button.textContent="Copied";button.classList.add("copied");
      setTimeout(()=>{if(button.isConnected){button.textContent="Copy";button.classList.remove("copied");}},1800);
    } catch {notice($("resultNotice"),"Clipboard unavailable. You can select the password to copy it manually.","info");}
  }
  async function unlockWithCode(phrase,remember,candidates) {
    if(!window.isSecureContext)throw new Error("Use HTTPS or localhost to unlock encrypted password data.");
    const baseKey=await keyFromPassphrase(phrase);
    // Encryption authenticates the group, so no group-selection step is needed.
    // Unsuccessful groups are NOT cached for offline use.
    const results=await Promise.all(candidates.map(async group=>{
      try {return {group,data:await obtainData(group,baseKey)};}
      catch(error) {return {group,error};}
    }));
    const matches=results.filter(item=>item.data);
    if(!matches.length) {
      const connectivity=results.every(item=>item.error?.name!=="OperationError") && results.some(item=>/connection|offline|download|network|fetch/i.test(item.error?.message||""));
      throw new Error(connectivity
        ?"Unable to unlock. Check your internet connection if this is the first use on this device, and verify your access code."
        :"That access code wasn't recognized. Please check it and try again.");
    }
    const warnings=[];
    for(const {group,data} of matches) {
      const existing=state.unlocked.get(group);
      const entry={...data,key:baseKey,remembered:existing?.remembered||false};
      if(remember) {
        try {await saveRememberedKey(group,baseKey);entry.remembered=true;}
        catch {warnings.push(`Could not remember ${GROUPS[group].title}. You can still use it this session.`);}
      }
      state.unlocked.set(group,entry);
      state.activeGroup=group;
    }
    updateScreen();
    if(warnings.length)notice($("resultNotice"),warnings.join(" "),"info");
    return matches.length;
  }
  async function unlockFormSubmitted(event) {
    event.preventDefault();clearNotices();
    const phrase=$("passphrase").value;
    if(!phrase)return;
    $("unlockButton").disabled=true;
    $("unlockButtonText").textContent="Opening lookup…";
    try {
      await unlockWithCode(phrase,$("rememberDevice").checked,IDS.filter(group=>!state.unlocked.has(group)));
      $("passphrase").value="";$("passphrase").type="password";$("togglePassphrase").textContent="Show";$("togglePassphrase").setAttribute("aria-label","Show access code");
    } catch(error) {notice($("loginNotice"),error.message||"Unable to unlock.");}
    finally {$("unlockButton").disabled=false;$("unlockButtonText").textContent="Open password lookup";}
  }
  function openAddGroupDialog() {
    $("settingsMenu").open=false;
    if(state.unlocked.size>=IDS.length)return;
    $("addPassphrase").value="";$("addRememberDevice").checked=false;
    notice($("addNotice"),"");
    $("addGroupDialog").showModal();
    $("addPassphrase").focus();
  }
  async function addGroupSubmitted(event) {
    event.preventDefault();
    const phrase=$("addPassphrase").value;
    if(!phrase)return;
    notice($("addNotice"),"");
    $("addCodeButton").disabled=true;
    $("addCodeButton").textContent="Checking…";
    try {
      await unlockWithCode(phrase,$("addRememberDevice").checked,IDS.filter(group=>!state.unlocked.has(group)));
      $("addPassphrase").value="";
      $("addGroupDialog").close();
    } catch(error) {notice($("addNotice"),error.message||"Unable to add access.");}
    finally {$("addCodeButton").disabled=false;$("addCodeButton").textContent="Add access";}
  }
  async function restoreRememberedAccess() {
    state.restoring=true;
    $("unlockButton").disabled=true;
    $("continueButton").disabled=true;
    $("unlockButtonText").textContent="Checking saved access…";
    const remembered=[];
    try {
      for(const group of IDS) {
        const key=await readRememberedKey(group);
        if(key)remembered.push({group,key});
      }
    } catch { /* Unavailable private-mode storage is not an unlock error. */ }
    if(remembered.length) {
      const attempts=await Promise.all(remembered.map(async ({group,key})=>{
        try {return {group,key,data:await obtainData(group,key)};}
        catch(error) {return {group,error};}
      }));
      for(const item of attempts) {
        if(item.data) state.unlocked.set(item.group,{...item.data,key:item.key,remembered:true});
        else if(item.error?.name==="OperationError" || /unsupported format/i.test(item.error?.message||"")) {
          // Server-side re-encryption invalidated this device's remembered key.
          try {await removeRememberedKey(item.group);} catch {}
          notice($("loginNotice"),`Saved access for ${GROUPS[item.group].title} has changed. Enter the current access code.`,"info");
        }
      }
      if(state.unlocked.size) {
        state.activeGroup=IDS.find(group=>state.unlocked.has(group));
        updateScreen();
      } else if(!$("loginNotice").textContent) {
        notice($("loginNotice"),"Saved access could not open. Connect to the internet or enter your access code.","info");
      }
    }
    state.restoring=false;
    $("unlockButton").disabled=false;$("continueButton").disabled=false;
    $("unlockButtonText").textContent="Open password lookup";
    await updateContinueButton();
  }
  function hideLookup() {
    $("settingsMenu").open=false;
    state.unlocked.clear();state.activeGroup=null;
    $("passwordCards").replaceChildren();$("dataDetails").replaceChildren();
    clearNotices();updateScreen();
    $("passphrase").value="";
    $("rememberDevice").checked=false;
  }
  async function forgetDevice() {
    $("settingsMenu").open=false;
    if(!window.confirm("Forget saved access and remove downloaded password data from this browser? You will need to download the data again to work offline."))return;
    try {
      await removeAllRememberedKeys();
      await caches.delete(DATA_CACHE);
      hideLookup();
      await showCacheStatus();
      notice($("loginNotice"),"Saved access and offline password data were removed from this browser.","info");
    } catch(error) {notice($("resultNotice"),"Could not remove saved access. Use your browser's site-data settings to clear it.");}
  }
  async function changeRememberCurrent(checked) {
    const group=state.activeGroup;
    const entry=state.unlocked.get(group);
    if(!entry)return;
    try {
      if(checked)await saveRememberedKey(group,entry.key);
      else await removeRememberedKey(group);
      entry.remembered=checked;
      notice($("resultNotice"),checked
        ?`${GROUPS[group].title} will open automatically on this device.`
        :`${GROUPS[group].title} will require its access code next time.`,"info");
    } catch {
      $("rememberCurrentGroup").checked=entry.remembered;
      notice($("resultNotice"),"The browser could not change its saved-access setting.");
    }
    $("settingsMenu").open=false;
  }
  function wirePassphraseToggle(buttonId,inputId) {
    $(buttonId).addEventListener("click",()=>{
      const field=$(inputId),nowHidden=field.type==="text";
      field.type=nowHidden?"password":"text";
      $(buttonId).textContent=nowHidden?"Show":"Hide";
      $(buttonId).setAttribute("aria-label",nowHidden?"Show access code":"Hide access code");
    });
  }
  async function init() {
    $("instrumentDate").value=localToday();
    $("unlockForm").addEventListener("submit",unlockFormSubmitted);
    $("addGroupForm").addEventListener("submit",addGroupSubmitted);
    wirePassphraseToggle("togglePassphrase","passphrase");
    wirePassphraseToggle("toggleAddPassphrase","addPassphrase");
    $("addGroupButton").addEventListener("click",openAddGroupDialog);
    $("closeAddDialog").addEventListener("click",()=>$("addGroupDialog").close());
    $("hidePasswordsButton").addEventListener("click",hideLookup);
    $("forgetDeviceButton").addEventListener("click",()=>{void forgetDevice();});
    $("rememberCurrentGroup").addEventListener("change",event=>{void changeRememberCurrent(event.target.checked);});
    $("continueButton").addEventListener("click",()=>{void restoreRememberedAccess();});
    $("instrumentDate").addEventListener("change",renderPasswords);
    $("previousDate").addEventListener("click",()=>{$("instrumentDate").value=dateAdd($("instrumentDate").value||localToday(),-1);renderPasswords();});
    $("nextDate").addEventListener("click",()=>{$("instrumentDate").value=dateAdd($("instrumentDate").value||localToday(),1);renderPasswords();});
    $("todayButton").addEventListener("click",()=>{$("instrumentDate").value=localToday();renderPasswords();});
    document.addEventListener("click",event=>{if(!$("settingsMenu").contains(event.target))$("settingsMenu").open=false;});
    window.addEventListener("online",refreshNetworkBadge);
    window.addEventListener("offline",refreshNetworkBadge);
    refreshNetworkBadge();
    if("serviceWorker" in navigator && window.isSecureContext) {
      try {await navigator.serviceWorker.register("./sw.js",{scope:"./"});}
      catch { /* An online preview is still useful without a service worker. */ }
    }
    await showCacheStatus();
    await restoreRememberedAccess();
  }
  void init();
})();
