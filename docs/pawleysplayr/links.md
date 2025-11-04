---
title: PawleysPlayr – Handy Links (Do Not Share)
hide:
  - navigation
  - toc
search:
  exclude: true
---

## IM2 / SensorLab Steel Related

### Documents and Help Files

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">


  <li>
    <div>
      <strong>SLS Internal Ethernet Wiring Diagram - For Different L2 Option:</strong><br>
      Internal Ethernet wiring reference for SensorLab Steel (SLS): shows LAN1/LAN2 routing on the BYT CPU, <br>
	  external LAN/option connectors, ADC/EK1100 backplane, and Beckhoff terminals for each L2 option—<br>
	  A) none, B) EtherNet/IP, C) Modbus TCP, D) Profinet (EL6631).<br>
      <a href="/downloads/sls/SLS Internal Ethernet Wiring Diagram - For Different L2 Option.pdf">
        SLS Internal Ethernet Wiring Diagram - For Different L2 Option.pdf
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>MetNet to SLS Light Set Conversion:</strong><br>
      Field guide for converting a MetNet light set to SensorLab Steel (SLS): pinouts, step-by-step re-termination <br>
	  from the green MetNet terminal to the SLS RD24 male connector, notes on horn/blue lamp wiring, an optional <br>
	  pre-terminated pigtail (Alpha 1898/7C + WAGO 221-2401), and a complete parts list.<br>
      <a href="/downloads/sls/MetNet to SLS Light Set Conversion.pdf">
        MetNet to SLS Light Set Conversion.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Heraeus IM2 SensorLab to Receiver Box Wiring Guide:</strong><br>
      Wiring guide for connecting Heraeus IM2 SensorLab to the Receiver Box using CAT5/6 and DB9–RJ45 adapters: clarifies <br>
	  that RJ45 pin 7 must map to DB9 pin 9 (not pin 4) to complete the 24 V DC return path, and includes male/female <br>
	  DB9 diagrams for correct terminations.<br>
      <a href="/downloads/sls/Heraeus IM2 SensorLab to Receiver Box Wiring Guide.pdf">
        Heraeus IM2 SensorLab to Receiver Box Wiring Guide.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Disable QUBE Wireless Sleep Mode on SLS:</strong><br>
      Step-by-step guide to disable QUBE Wireless sleep on SensorLab Steel (SLS)—includes the exact menu path <br>
	  (login 2448 → Settings → Configure → Basic Instrument Setup → Dual Station Setup), which option to check for <br>
	  “Wireless via Wireless 1,” and how to save and activate the new program..<br>
      <a href="/downloads/sls/Disable QUBE Wireless Sleep Mode on SLS.pdf">
        Disable QUBE Wireless Sleep Mode on SLS.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Disable QUBE Wireless Safety on SLS:</strong><br>
      Quick steps to disable QUBE Wireless Safety on SensorLab Steel (SLS): navigate to Settings → Wireless Safety, <br>
	  uncheck “Wireless safety mode enabled,” then Save and commit program changes—includes annotated screenshots..<br>
      <a href="/downloads/sls/Disable QUBE Wireless Safety on SLS.pdf">
        Disable QUBE Wireless Safety on SLS.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Change SLS Screen Resolution:</strong><br>
      Directions for changing the screen resolution from the operating system on SLS. <br>
	  Quick procedure to change the SensorLab Steel (SLS) screen resolution: log in with the Daily password, <br>
	  exit to the OS, run explorer.exe, open Control Panel → Display → Change display settings, adjust resolution, and save.<br>
      <a href="/downloads/sls/Change SLS Screen Resolution.pdf">
        Change SLS Screen Resolution.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Change SLS Screen Resolution BIOS Settings:</strong><br>
      Directions for changing the screen resolution from the BIOS on SLS. <br>
	  BIOS-level steps to set the SensorLab Steel (SLS) display to 1024×768: enter BIOS (DEL, password 478236), <br>
	  go to Chipset → North Bridge → IGD – LCD Control, disable Active LVDS (CH7511), <br>
	  set CH7511 EDID Panel Option to 1024x768 18/1, then F4 to save.<br>
      <a href="/downloads/sls/Change SLS Screen Resolution BIOS Settings.pdf">
        Change SLS Screen Resolution BIOS Settings.pdf
      </a>
    </div>
  </li>
  
  
  <li>
    <div>
      <strong>Set SLS To Display Time Interval Between Measurements:</strong><br>
      Directions for setting up the SLS to display the time interval between samples on the screen. <br>
	  Quick steps to show the time interval between measurements on SLS: <br>
	  log in (password 2448), open User Settings → Display settings → Edit, check “Display interval between measurements,” and Save. <br>
	  Note: this isn’t stored in the Settings File backup.<br>
      <a href="/downloads/sls/Set SLS To Display Time Interval Between Measurements.pdf">
        Set SLS To Display Time Interval Between Measurements.pdf
      </a>
    </div>
  </li>
  
  <li>
    <div>
      <strong>IM2 or SLS - Check for EIP Hardware:</strong><br>
      Directions for checking if the EIP hardware is installed in the SLS. <br>
	  This same approach works for other cards such as the ProfiNet also. <br>
	  Quick check to confirm IM2/SLS EtherNet/IP hardware is installed: <br>
	  log in (password 24816) → System Tools → Hardware Check → Start hardware check, then <br>
	  scroll to ETC EtherNet/IP switch port—Status: Operational confirms the option is present.<br>
      <a href="/downloads/sls/IM2 or SLS - Check for EIP Hardware.pdf">
        IM2 or SLS - Check for EIP Hardware.pdf
      </a>
    </div>
  </li>
  
 <li>
    <div>
      <strong>SLS Software Update:</strong><br>
      Directions for updating the SLS application version. <br>
	  How-to for updating SensorLab Steel (SLS) software: download and unzip the install package (e.g., SensorLab_v3.3.0.zip)<br>
	  , copy to USB, log in with the Daily password, go to System Tools → Update Software, select DeployAgent.exe from the USB, <br>
	  and follow the on-screen prompts<br>
      <a href="/downloads/sls/SLS Software Update _Draft.pdf">
        SLS Software Update _Draft.pdf
      </a>
	  
    </div>
  </li>
  
  
   <li>
    <div>
      <strong>SLS Remote Viewer Installation:</strong><br>
      Directions for installing the SLS Remote Viewer. <br>
	  Remote Viewer setup for IM2/SensorLab Steel: download and unzip SensorLab_v3.3.0, run DeployAgent.exe, <br>
	  apply the henmachine.reg license key, then connect (scan or by IP) over LAN—supports up to 4 remote PCs on Windows 7+.<br>
      <a href="/downloads/sls/SLS - Installing Remote Viewer.pdf">
        SLS - Installing Remote Viewer.pdf
      </a>
    </div>
  </li>
  

  <li>
    <div>
      <strong>iM2SensorLab SensorLabSteel SensorLabMultilance 8.3.1 Manual:</strong><br>
      IM2/SLS Manual .<br>
      <a href="https://pawleyslogic-downloads.s3.us-east-2.amazonaws.com/sls/iM2SensorLab_SensorLabSteel_SensorLabMultilance_8_3_1_EN_original.pdf">
        iM2SensorLab_SensorLabSteel_SensorLabMultilance_8_3_1_EN_original.pdf
      </a>
    </div>
  </li>





</ul>


### IM2/SLS Software Updates Related

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">
  <li>
    <div>
      <strong>SLS v3.3.0 Instrument Only Installer:</strong><br>
      SLS v3.3.0 Instrument Only Installer .<br>
      <a href="https://pawleyslogic-downloads.s3.us-east-2.amazonaws.com/sls/SensorLab_v3.3.0.zip">
        SensorLab_v3.3.0_InstumentOnly.zip
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>SLS v3.7.0 Instrument Only Installer:</strong><br>
      SLS v3.7.0 Instrument Only Installer .<br>
      <a href="https://pawleyslogic-downloads.s3.us-east-2.amazonaws.com/sls/SensorLab_v3.7.0_InstrumentOnly.zip">
        SensorLab_v3.7.0_InstrumentOnly.zip
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>SLS v3.8.0 Instrument Only Installer:</strong><br>
      SLS v3.8.0 Instrument Only Installer .<br>
      <a href="https://pawleyslogic-downloads.s3.us-east-2.amazonaws.com/sls/SensorLab_v3.8.0_InstrumentOnly.zip">
        SensorLab_v3.8.0_InstumentOnly.zip
      </a>
    </div>
  </li>
</ul>

---

### IM2/SLS ProfiNet Comms Related

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>Set up SLS for ProfiNet Output Registers:</strong><br>
      Directions for enabling the ProfiNet module and seting it up to used Output registers up the SLS .<br>
      <a href="/downloads/sls/sls_output_register_files_pnet/Set up SLS for ProfiNet Output Registers.pdf">
        Set up SLS for ProfiNet Output Registers.pdf
      </a>
    </div>
  </li>

    <li>
    <div>
      <strong>SLS Output Register Memory Organization Reference for ProfiNet :</strong><br>
      Illustration mapping Output register data from the SLS internalling using TIA Portal .<br>
      <a href="/downloads/sls/sls_output_register_files_pnet/SLS Output Register Memory Organization Reference- PNet.pdf">
        SLS Output Register Memory Organization Reference- PNet.pdf
      </a>
    </div>
  </li>



</ul>

---


### IM2/SLS EIP Comms Related

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>Set up SLS for EIP Output Registers :</strong><br>
      Step-by-step setup to enable EtherNet/IP Output Registers on SensorLab Steel / IM2: covers network prerequisites, <br>
	  login (24816), LAN configuration, enabling EtherNet/IP in the active program, selecting Use Registers, Low byte first, <br>
	  Single precision Float, and saving/activating the program<br>
      <a href="/downloads/sls/Set up SLS for EIP Output Registers.pdf">
        Set up SLS for EIP Output Registers.pdf
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>Set up PLC for EIP Generic Ethernet Module Communication to SLS :</strong><br>
      Step-by-step setup for connecting SensorLab Steel (SLS) to an Allen-Bradley CompactLogix/ControlLogix via a <br>
	  Generic Ethernet Module in Studio 5000: includes example IP settings, exact connection parameters, the “don’t use unicast” <br>
	  checkbox, offline download note, and how to view raw data (hex) in the input array, plus a Loom video link..<br>
      <a href="/downloads/sls/Set up PLC for EIP Generic Ethernet Module Communication to SLS.pdf">
        Set up PLC for EIP Generic Ethernet Module Communication to SLS.pdf
      </a>
    </div>
  </li>



</ul>

---

</ul>

### IM2/SLS AOI
<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">


  <li>
    <div>
      <strong>SLS Example PLC Output Register AOI Use Rev2:</strong><br>
      Hands-on guide to using the SLSRegisterAssembler_CLX34 AOI with CompactLogix/ControlLogix: shows how to import the AOI, <br>
	  map the SLS 130-byte :I.Data array, create SLSParsedDataSet result tags (per station), verify parsed fields, and configure <br>
	  a Generic EtherNet/IP module—includes a Loom demo link..<br>
      <a href="/downloads/sls/SLS Example PLC Output Register AOI Use Rev2.pdf">
        SLS Example PLC Output Register AOI Use Rev2.pdf
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>HEN_CTWE5Parser_CLX34_AOI.zip:</strong><br>
      Studio 5000 v34 Add-On Instruction pack for SensorLab Steel (SLS) to CompactLogix/ControlLogix: includes AOI + UDTs <br>
	  to parse the Generic EtherNet/IP input array into structured tags (measurements, status/alarms, timestamp, IDs), <br>
	  with a sample project/rungs and a brief tag-mapping guide for fast drop-in integration.<br>
      <a href="/downloads/sls/SLS CLX Add-On Instruction/SLS_INT130_RegisterAssembler_CLX34_AOI.zip">
        SLS_INT130_RegisterAssembler_CLX34_AOI.zip
      </a>
    </div>
  </li>
  
  <li>
    <div>
      <strong>HEN_CTWE5Parser_CLX32_AOI.zip:</strong><br>
      Studio 5000 v32 Add-On Instruction pack for SensorLab Steel (SLS) to CompactLogix/ControlLogix: includes AOI + UDTs <br>
	  to parse the Generic EtherNet/IP input array into structured tags (measurements, status/alarms, timestamp, IDs), <br>
	  with a sample project/rungs and a brief tag-mapping guide for fast drop-in integration.<br>
      <a href="/downloads/sls/SLS CLX Add-On Instruction/SLS_INT130_RegisterAssembler_CLX32_AOI.zip">
        SLS_INT130_RegisterAssembler_CLX32_AOI.zip
      </a>
    </div>
  </li>

</ul>


---

## Hydris / HydroVAS Related

### Documents and Help Files

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>Hydris V1.4.2 Manual:</strong><br>
      Hydris Manual .<br>
      <a href="https://pawleyslogic-downloads.s3.us-east-2.amazonaws.com/hyd/Hydris_V1.4.2_EN_original.pdf">
        Hydris_V1.4.2_EN_original.pdf
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>HydroVAS v1.4.0 Manual:</strong><br>
      HydroVAS Manual .<br>
      <a href="https://pawleyslogic-downloads.s3.us-east-2.amazonaws.com/hyd/HydroVAS_User_Manual_EN_v1.4.0_original.pdf">
        HydroVAS_User_Manual_EN_v1.4.0_original.pdf
      </a>
    </div>
  </li>


</ul>

---


---

## CasTemp / CasTip Related

### CTW E5

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>CTW E5 EtherNet/IP Commissioning (Rev 1, 2025-11-03):</strong><br>
      Step-by-step guide and links for connecting a CasTemp Wireless E5 to ControlLogix/CompactLogix in Studio 5000: <br>
	  install the Anybus M40 EDS, create the module, and set PLC sizes (Input 128 bytes, Output 64 bytes). <br>
	  Includes an optional AOI for parsing Output Telegram #10, instrument-side tips, and a quick PLC checklist..<br>  
      <a href="/downloads/ctw5/CTW-E5_EIP_Commissioning_Rev1_2025-11-03.pdf">
        CTW-E5_EIP_Commissioning_Rev1_2025-11-03.pdf
      </a>
    </div>
  </li>


  <li>
    <div>
      <strong>CTW_E5_EthernetIP_Config.pdf:</strong><br>
      Short guide to configure the CasTemp Wireless E5 (CTW E5) for EtherNet/IP using the Anybus B40: includes <br>
	  exact Level-2 menu paths, station value, I/O sizes (64 in / 128 out), recommended telegram selections (e.g., <br>
	  Output Telegram 10 for AOI), trigger options, and save steps for Allen-Bradley/Studio 5000 integrations.<br>  
      <a href="/downloads/ctw5/CTW_E5_EthernetIP_Config.pdf">
        CTW_E5_EthernetIP_Config.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>CTW_E5_EthernetIP_Config_DocImage.pdf:</strong><br>
      Visual quick-start for configuring the CasTemp Wireless E5 (CTW E5) on EtherNet/IP: annotated screenshots of <br>
	  the Level-2 menus, IP/network setup, I/O sizes, telegram selection, trigger/save steps, and a Studio 5000 mapping <br>
	  example—ideal as a one-page setup reference.<br>  
      <a href="/downloads/ctw5/CTW_E5_EthernetIP_Config_DocImage.pdf">
        CTW_E5_EthernetIP_Config_DocImage.pdf
      </a>
    </div>
  </li>

  <li>
    <div>
      <strong>E5_Castemp_Telegram_10.pdf:</strong><br>
      Field-by-field reference for CasTemp Wireless E5 Superheat Output Telegram #10: lists each element <br>
	  (e.g., MODID, BAT, DATETIME, TMP, SH, TL, PRSH, ROC, ERR/ERRLIST, RSSI, HN, GN), data types and lengths, <br>
	  byte order (high-byte first for floats/time), plus complete sample frames in ASCII and HEX with total byte<br>
	  counts for PLC parsing.<br>  
      <a href="/downloads/ctw5/E5_Castemp_Telegram_10.pdf">
        E5_Castemp_Telegram_10.pdf
      </a>
    </div>
  </li>


  <li>
    <div>
      <strong>HEN_CTWE5Parser_CLX34_UserGuide:</strong><br>
      This document provides detailed instructions for importing and using the HEN_CTWE5Parser_CLX3x Add-On Instruction <br>
	  in Rockwell Studio5000, including tag setup, telegram parsing, and module connection options for Heraeus CasTemp Wireless E5 (CTW5) instruments.<br>  
      Parsed values include process measurements, diagnostics, and metadata from the wireless QUBE module::<br>
      <a href="/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf">
        HEN_CTWE5Parser_CLX34_UserGuide.pdf
      </a>
    </div>
  </li>


  <li>
    <div>
      <strong>CTW E5 EIP Comms Configuration and EDS Installation Rev1:</strong><br>
      Step-by-step setup for CasTemp Wireless E5 on EtherNet/IP in Studio 5000, including installing the Anybus CompactCom 40 EDS via the <br>
	  EIP Hardware Installation Tool, creating the module, setting 128-byte Input / 64-byte Output (SINT) assemblies, and noting key tags like CTWE5:I.Data <br>
	  and ConnectionFaulted.:<br>
      <a href="/downloads/ctw5/CTW E5 EIP Comms Configuration and EDS Installation Rev1.pdf">
        CTW E5 EIP Comms Configuration and EDS Installation Rev1.pdf
      </a>
    </div>
  </li>

</ul>

### CTW E5 AOI
<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">


  <li>
    <div>
      <strong>HEN_CTWE5Parser_CLX34_AOI.zip:</strong><br>
      Studio 5000 v34 Add-On Instruction (L5X) for CasTemp Wireless E5 — built specifically for Output Telegram #10: <br>
	  parses the 128-byte CTWE5:I.Data array into typed tags (datetime, temperature, superheat, TL, PRSH, ROC, <br>
	  battery %, RSSI, error code/list, heat #, group #, module ID), with Valid/NewData/Fault status bits, included UDTs, <br>
	  and a sample rung for quick drop-in mapping on CompactLogix/ControlLogix.<br>
      <a href="/downloads/ctw5/HEN_CTWE5Parser_CLX34_AOI.zip">
        HEN_CTWE5Parser_CLX34_AOI.zip
      </a>
    </div>
  </li>
  
  <li>
    <div>
      <strong>HEN_CTWE5Parser_CLX32_AOI.zip:</strong><br>
      Studio 5000 v32 Add-On Instruction (L5X) for CasTemp Wireless E5 — built specifically for Output Telegram #10: <br>
	  parses the 128-byte CTWE5:I.Data array into typed tags (datetime, temperature, superheat, TL, PRSH, ROC, <br>
	  battery %, RSSI, error code/list, heat #, group #, module ID), with Valid/NewData/Fault status bits, included UDTs, <br>
	  and a sample rung for quick drop-in mapping on CompactLogix/ControlLogix.<br>
      <a href="/downloads/ctw5/HEN_CTWE5Parser_CLX32_AOI.zip">
        HEN_CTWE5Parser_CLX32_AOI.zip
      </a>
    </div>
  </li>


</ul>


---
---

## CoreTemp / OOD Related

### Documents and Help Files

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

</ul>

---

---

## EDS/GSDML Related

### Allen-Bradley

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>Anybus CompactCom M30 EDS File 005A0000002E0100:</strong><br>
       The Anybus ABCC CompactCom EtherNet/IP (M30) EDS File 005A0000002E0100 for EIP communication..<br>
	     <ul>Instruments:
			<li>CasTemp (Windows)</li>
			<li>DTE/Celox E4</li>
		 </ul>
      <a href="/downloads/eds/m30/005A0000002E0100.zip">
        Anybus CompactCom M30 EDS File 005A0000002E0100.zip
      </a>

    </div>
  </li>

  <li>
    <div>
      <strong>Anybus CompactCom M40 EDS File 005A002B00370100:</strong><br>
       The Anybus ABCC CompactCom 40 EtherNet/IP EDS File 005A002B00370100 for EIP communication..<br>
	     <ul>Instruments:
			<li>CoreTemp</li>
			<li>Hydris/HydroVAS</li>
			<li>CasTemp E5</li>
			<li>DTE E5</li>
		 </ul>
      <a href="/downloads/eds/m40/005A002B00370100.zip">
        Anybus CompactCom M40 EDS File 005A002B00370100.zip
      </a>

    </div>
  </li>

</ul>

### Siemens
<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>Anybus CompactCom PROFINET M40 module File gsdml-v2.33-heraeus-abcc40-pir-20180907.xml:</strong><br>
       The Anybus ABCC40-PIR CompactCom PROFINET M40 module File gsdml-v2.33-heraeus-abcc40-pir-20180907.xml for ProfiNet communication..<br>
	     <ul>Instruments:
			<li>CoreTemp</li>
			<li>Hydris/HydroVAS</li>
			<li>CasTemp E5</li>
			<li>DTE E5</li>
		 </ul>	   
      <a href="/downloads/gsdml/GSDML-V2.33-Heraeus-ABCC40-PIR-20180907.zip">
        GSDML-V2.33-Heraeus-ABCC40-PIR-20180907.zip
      </a>

    </div>
  </li>



</ul>
---