# Set up SLS/IM2 for ProfiNet

---

## Network



- Connect an Ethernet cable to the RJ45 ProfiNet port.  
  (This port may be labeled “Options”.)

---

## Log In


<img src="/images/sls_pnet_or_cfg/sls_profinet_login.png" alt="..." width="50%" >
<br>

- Log in using the password: `24816`

---

## Settings


<img src="/images/sls_pnet_or_cfg/sls_settings.png" alt="..." width="100%" >
<br>

- Click **Settings**

<br>



<img src="/images/sls_pnet_or_cfg/sls_settings_lightbulb.png" alt="..." width="100%" >
<br>



- The program with the **light bulb icon** is the active program
- Select the active program and click **Edit**


---

## Settings Overview



<img src="/images/sls_pnet_or_cfg/sls_profinet_settings_overview.png" alt="..." width="100%" >
<br>


- If the ProfiNet module is installed and configured correctly, the **"Profinet #1"** item will appear in the **Communication** section under the **Available** tab.
- Click the **edit** icon on the right side of the **"Profinet #1"** item in the list.






---

## ProfiNet Communication

<img src="/images/sls_pnet_or_cfg/sls_profinet_communication.png" alt="..." width="100%" >
<br>

- Under the **ProfiNet Configuration** section:  
    - Enable the checkbox for **"Use Registers"**
    - In the **Telegram** section:  

        - Select **"High byte first"** in the first dropdown 
        - Select **"Single precision Float"** in the second dropdown  

	- Click **Done** to save and exit

---

## ProfiNet Activation

<img src="/images/sls_pnet_or_cfg/sls_profinet_activation.png" alt="..." width="100%" >
<br>

- Check the “Profinet” item in the Communication section to activate it
- Optionally, add a description in the **Comments** textbox
- Click **Save** to apply the changes

---

## Save to Set


<img src="/images/sls_pnet_or_cfg/sls_profinet_save.png" alt="..." width="100%" >
<br>

- Click **Save** to save the updated program to the same set as the original
- The original program will not be affected

---

## Activating the New Program


<img src="/images/sls_pnet_or_cfg/sls_profinet_activate.png" alt="..." width="100%" >
<br>

- The updated program is saved, but not yet active
- The **original program** still shows the light bulb indicator
- To activate the new program:
  - Select its checkbox
  - Click the **Activate** button

---

## Completion


<img src="/images/sls_pnet_or_cfg/sls_profinet_complete.png" alt="..." width="100%" >
<br>


- If activation is successful, the **light bulb** will appear next to the newly activated program

