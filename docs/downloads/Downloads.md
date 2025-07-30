# HEN Downloads
<span style="display: block; margin-left: 1em; font-weight: regular; font-size: 1.25em;">
    <div>
      My goal is to build a collection of short "how-tos" for those tasks we do often enough to matter, but not often enough to remember clearly.<br>
    </div>
</span>


## IM2 / SensorLab Steel Related

### Documents and Help Files

<ul style="list-style-type: disc; margin-left: 2em; font-size: 1.05em;">

  <li>
    <div>
      <strong>MetNet to SLS Light Set Conversion:</strong><br>
      Directions for the light set conversion wiring when changing over a MetNet to a SLS. Also contains a good illustration of the SLS connector wiring.<br>
      <a href="/downloads/sls/MetNet to SLS Light Set Conversion.pdf">
        MetNet to SLS Light Set Conversion.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Heraeus IM2 SensorLab to Receiver Box Wiring Guide:</strong><br>
      Heraeus IM2 SensorLab to Receiver Box Wiring Guide Using Cat 5/6 Extension and DB9-RJ45 Adapters.<br>
      <a href="/downloads/sls/Heraeus IM2 SensorLab to Receiver Box Wiring Guide.pdf">
        Heraeus IM2 SensorLab to Receiver Box Wiring Guide.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Disable QUBE Wireless Sleep Mode on SLS:</strong><br>
      Directions for disabling the QUBE wireless sleep mode on SLS.<br>
      <a href="/downloads/sls/Disable QUBE Wireless Sleep Mode on SLS.pdf">
        Disable QUBE Wireless Sleep Mode on SLS.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Disable QUBE Wireless Safety on SLS:</strong><br>
      Directions for disabling the QUBE wireless safety mode on SLS.<br>
      <a href="/downloads/sls/Disable QUBE Wireless Safety on SLS.pdf">
        Disable QUBE Wireless Safety on SLS.pdf
      </a>
    </div>
  </li>
  
    <li>
    <div>
      <strong>Change SLS Screen Resolution:</strong><br>
      Directions for changing the screen resolution from the operating system on SLS.<br>
      <a href="/downloads/sls/Change SLS Screen Resolution.pdf">
        Change SLS Screen Resolution.pdf
      </a>
    </div>
  </li>
  
  <li>
    <div>
      <strong>IM2 or SLS - Check for EIP Hardware:</strong><br>
      Directions for checking if the EIP hardware is installed in the SLS. This same approach works for other cards such as the ProfiNet also.<br>
      <a href="/downloads/sls/IM2 or SLS - Check for EIP Hardware.pdf">
        IM2 or SLS - Check for EIP Hardware.pdf
      </a>
    </div>
  </li>
  
 <li>
    <div>
      <strong>SLS Software Update:</strong><br>
      Directions for updating the SLS application version.<br>
      <a href="/downloads/sls/SLS Software Update _Draft.pdf">
        SLS Software Update _Draft.pdf
      </a>
    </div>
  </li>
  
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
      <strong>Set up SLS for EIP Output Registers:</strong><br>
      Directions for enabling the EtherNet/IP module and seting it up to used Output registers up the SLS .<br>
      <a href="/downloads/sls/sls_output_register_files_clx/Set up SLS for EIP Output Registers.pdf">
        Set up SLS for EIP Output Registers.pdf
      </a>
    </div>
  </li>

</ul>




---


## CasTemp Wireless (Windows Device) Related :

<span style="display: block; margin-left: 1em; font-weight: regular; font-size: 1.25em;">
Documents  

   <span style="display: block; margin-left: 2em; font-weight: regular; font-size: 1.1em;">
   1. This document provides detailed instructions for importing and using the CTWReadAssembler_CLX3x Add-On Instruction in Rockwell Studio5000, including tag setup, telegram parsing, and module connection options for Heraeus CasTemp Wireless instruments.  
   Parsed values include process measurements, diagnostics, and metadata from the wireless QUBE module:  
   </span> 

<span style="display: block; margin-left: 4em; font-weight: regular; font-size: 0.95em;  margin-bottom: 50px"> 
[CasTemp Wireless CTWReadAssembler_CLX3x AOI Setup and Use Rev1 (PDF)](/downloads/ctw/CasTemp Wireless CTWReadAssembler_CLX3x AOI Setup and Use Rev1.pdf)  



</span>

   <span style="display: block; margin-left: 2em; font-weight: regular; font-size: 1.1em;">
   2. This document includes a short excerpt from the main manual outlining the process for licensing the CasTemp Wireless (Windows) version for CasTip functionality:  
   </span>   
   
   <span style="display: block; margin-left: 3em; font-weight: regular; font-size: 0.95em;  margin-bottom: 50px">
  [CTW CasTip Licensing Instructions (zip)](/downloads/ctw/CTW Licensing.pdf)  

   </span>


</span>



<span style="display: block; margin-left: 1em; font-weight: regular; font-size: 1.25em;">
AOIs

   <span style="display: block; margin-left: 2em; font-weight: regular; font-size: 1.1em;">
   1. The AOIs are designed to parse the CTW telegram format shown in the "CasTemp Wireless CTWReadAssembler_CLX3x AOI Setup and Use Rev1.pdf" linked above.  
   </span>   
   
   <span style="display: block; margin-left: 3em; font-weight: regular; font-size: 0.95em;  margin-bottom: 50px">
  [CTW ControlLogix/CompactLogix Add-On Instruction v34(zip)](/downloads/ctw/CTWReadAssembler_CLX34_AOI.zip)  
  [CTW ControlLogix/CompactLogix Add-On Instruction v32(zip)](/downloads/ctw/CTWReadAssembler_CLX32_AOI.zip)
   </span>
</span>




<span style="display: block; margin-left: 1em; font-weight: regular; font-size: 1.25em;">
Rockwell EDS Files

   <span style="display: block; margin-left: 2em; font-weight: regular; font-size: 1.1em;">
   Both the M30 and M40 modules are compatible with these CTW units.  
   To determine which driver EDS is required, the module must be removed, as the identification label is located on its underside.  
   </span>   
   
   <span style="display: block; margin-left: 3em; font-weight: regular; font-size: 0.95em;  margin-bottom: 50px">
  [Anybus CompactCom M40 EDS File (zip)](/downloads/eds/m40/005A002B00370100.zip)  
  [Anybus CompactCom M30 EDS File (zip)](/downloads/eds/m30/005A0000002E0100.zip)
   </span>
   
</span>


---





## CasTemp Wireless E5 Related :

<span style="display: block; margin-left: 1em; font-weight: regular; font-size: 1.25em;">
Documents

   <span style="display: block; margin-left: 2em; font-weight: regular; font-size: 1.1em;">
   This document provides detailed instructions for importing and using the HEN_CTWE5Parser_CLX3x Add-On Instruction in Rockwell Studio5000, including tag setup, telegram parsing, and module connection options for Heraeus CasTemp Wireless E5 (CTW5) instruments.  
   Parsed values include process measurements, diagnostics, and metadata from the wireless QUBE module:  
   </span>   
   
   <span style="display: block; margin-left: 3em; font-weight: regular; font-size: 0.95em;  margin-bottom: 50px">
  [CTWE5 Add-On User Guide (PDF)](/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf)  
  
   </span>
   
</span>

<span style="display: block; margin-left: 1em; font-weight: regular; font-size: 1.25em;">
Rockwell EDS Files

   <span style="display: block; margin-left: 2em; font-weight: regular; font-size: 1.1em;">
   The CTW E5 units utilize the M40 modules for EIP communication.  
 
   </span>   
   
   <span style="display: block; margin-left: 3em; font-weight: regular; font-size: 0.95em;  margin-bottom: 50px">
  [Anybus CompactCom M40 EDS File (zip)](/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf)  
  
   </span>
   
</span>



---







<!-- Begin CommentBlock
## Hydris / HydroVAS Related :

📄 [Download HEN_CTWE5Parser_CLX34 AOI User Guide (PDF)](/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf)

---

## DTE4 Related :

📄 [Download HEN_CTWE5Parser_CLX34 AOI User Guide (PDF)](/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf)

---

## DTE5 Related :

📄 [Download HEN_CTWE5Parser_CLX34 AOI User Guide (PDF)](/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf)

---

## CoreTemp Related :

📄 [Download HEN_CTWE5Parser_CLX34 AOI User Guide (PDF)](/downloads/ctw5/HEN_CTWE5Parser_CLX34_UserGuide.pdf)

---



## IM2 / SensorLab Steel Related :

---





	

 




---



## Appendix: 

| Issue                           | Possible Cause                                      |
|--------------------------------|-----------------------------------------------------|
| All results = -999             | Telegram not active, CTW5 not paired, faulted       |
| RF signal = 0                  | Poor antenna position or interference               |
| QUBE Charge = 0%              | QUBE not fully charged or measurement not started   |
| `CTW5ModuleFaulted = 1`       | Loss of communication from EIP device               |



---


End Comment Block -->
