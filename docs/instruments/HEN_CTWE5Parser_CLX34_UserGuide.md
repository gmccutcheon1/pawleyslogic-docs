# HEN_CTWE5Parser_CLX34 Add-On Instruction (AOI) User Guide

## Overview
The `HEN_CTWE5Parser_CLX34` is a Studio5000 Add-On Instruction designed for CompactLogix and ControlLogix  controllers (v34 firmware). It parses the Ethernet/IP input data from the Heraeus CasTemp Wireless E5 (CTW5) instrument. Parsed values include process measurements, diagnostics, and metadata from the wireless QUBE module.

This document provides detailed setup, configuration, and usage instructions for installing and using the AOI in a CompactLogix project.

---



## 1. AOI Purpose and Function

The AOI:

- Accepts a `SINT[64]` array containing the 64-byte input portion of the 128-byte EIP telegram.
- Converts and maps the values into a structured `CTW5ResultsDataSet` tag.
- Handles byte-ordering (big-endian to little-endian) for floating point fields.
- Parses error bits and flags into individual BOOL tags for readability.
- Produces valid output only when all critical communication conditions are healthy.

**Supported Telegram:** CTW5 Output Telegram #10

---

## 2. Installation in Studio5000

###  - Import the AOI
1. Open your Studio5000 project.
2. Navigate to **Controller Organizer** > **Add-On Instructions**.
3. Right-click and select **Import Add-On Instruction**.
	<!--![AOI Import](\images\Instruments\ctw5_aoi_import\aoi_import_menu.png) -->
<img src="../docs/images/Instruments/ctw5_aoi_import/aoi_import_menu.png" alt="..." width="50%" >

<br>
<br>

4. Browse and select the file: `HEN_CTWE5Parser_CLX34_AOI.L5X`




<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_import_file_selection.png" alt="..." width="75%">
<br>
<br>

5. Click OK on the Import Configuration window.

<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_import_file_configuration.png" alt="..." width="75%">
<br>
<br>

###  - Confirm AOI Imports

After importing:

- "HEN_CTWE5Parser_CLX34" should appear in the Add-On Instructions folder.
- "CTW5ResultsDataSet" will appear in the User-Defined Data Types folder.




<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_successful_import.png" alt="..." width="35%">
<br>
<br>


---

## 3. Adding AOI to Ladder Logic

### - Create a Ladder Rung (if needed)
1. In your project, select the routine you wish to place the AOI into.
2. Right-click the Rung and select **Add Rung** (or reuse an existing one).


<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/ladder_create_rung.png" alt="..." width="55%">
<br>
<br>


<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/ladder_created_rung.png" alt="..." width="65%">
<br>
<br>

### - Insert the AOI into a Rung
1. Select the Add-On tab on the instructions bar.

<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/ladder_aio_tab.png" alt="..." width="85%">
<br>
<br>

2. Drag `HEN_CTWE5Parser_CLX34` from the Instruction toolbar or right-click to insert.


<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/ladder_drag_aoi.png" alt="..." width="85%">
<br>
<br>

---

## 4. Populating AOI Parameters

### Required Parameters:
| Parameter            | Description                                      | Example                        |
|---------------------|--------------------------------------------------|--------------------------------|
| `HEN_CTWE5Parser_CLX34`        | Datatype for AOI    | `CTW5Parser1`                |
| `CTW5Inputs`        | EIP SINT[64] data from CTW5 input connection    | `CTW5SINT:I.Data`                |
| `CTW5Results`       | UDT tag of type `CTW5ResultsDataSet`            | `CTW5`             |
| `CTW5ModuleFaulted` | BOOL indicating module fault from EIP status    | `CTW5SINT:I.ConnectionFaulted`     |


<br>
<br>
	


#### - HEN_CTWE5Parser_CLX34 field

1. Enter a tag name into the HEN_CTWE5Parser_CLX34 field of the AOI (e.g., CTW5Parser1).

<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_populate_HEN_CTWE5Parser_CLX34.png" alt="..." width="50%">
<br>
<br>


2.Right-click and define the new tag using the default settings.

<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_define_CTW5Parser1_new.png" alt="..." width="70%">
<br>
<br>


<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_define_CTW5Parser1_create.png" alt="..." width="70%">
<br>
<br>
<br>
<br>


#### - CTW5Results field

1. Enter a tag name into the CTW5Results field of the AOI (e.g., CTW5).

<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_populate_CTW5.png" alt="..." width="50%">
<br>
<br>

2. Right-click and define the new tag using the default settings. In this case it is UDT type "CTW5ResultsDataSet".

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_define_CTW5_new.png" alt="..." width="65%">
	<br>
	<br>

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_define_CTW5_create.png" alt="..." width="45%">
	<br>
	<br>
<br>
<br>

#### - CTW5Inputs field

1. Note the name of the EIP communication module connection to the CTW5 device. In this case it is "CTW5SINT".
	

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_eip_module_name.png" alt="..." width="45%">
	<br>
	<br>

2. Select the I:Data array from the CTW5Inputs dropdown list that matches the name of the EIP communications module connected to the CTW5 instrument. 

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_populate_ctw5inputs.png" alt="..." width="70%">
	<br>
	<br>

 

#### - CTW5ModuleFaulted field

1. From the CTW5ModuleFaulted dropdown list, select the I:ConnectionFaulted Boolean that corresponds to the EIP communications module connected to the CTW5 instrument.
NOTE: If a Generic Ethernet Module is used, this field can be set to 0, as the I:ConnectionFaulted value is not available in that case.

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_populate_modulefaulted.png" alt="..." width="70%">
	<br>
	<br>
	
	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_populated_parameters.png" alt="..." width="70%">
	<br>
	<br>	

2. This completes the configuration of the required fields for AOI operation. 


3. If these changes were made offline, download them to the PLC. If made online, test and accept the edits as needed.



---

## 5. Viewing Results

### Parsed Outputs:
The AOI populates values such as:

- `Temperature` (REAL)
- `QUBE_CJTemp` (REAL)
- `Superheat`, `CasTipLiquidous`, `PredictedSuperheat`, `RateOfChange` (REAL) - CasTip Only
- `QUBE_Charge` and `QUBE_RFSignal` (% SINTs)
- `QUBE_ID`, `Heatnumber`, `StationID`, `DateTime` (STRINGs)
- Diagnostic Flags: `ERR_OpenCircuit`, `ERR_LowSignal`, etc.

### To View Results:
1. With Studio5000 online with the PLC, right-click the tag in the AOI’s CTW5Results field and select Monitor.
In this example, the tag name is 'CTW5'.

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_monitor_menu.png" alt="..." width="55%">
	<br>
	<br>


2. This will open the Controller Tags window, where the values can be viewed updating in real time. 

	<img src="/pawleyslogic-docs/images/Instruments/ctw5_aoi_import/aoi_monitor_tags.png" alt="..." width="90%">
	<br>
	<br>

---

## 6. Notes
- The AOI automatically ignores data when the connection is faulted, open circuit, not paired, or data is invalid.
- Sentinel value `-999` is used when values are out of range or unavailable.
- If a Generic Ethernet Module is used, the CTW5ModuleFaulted field can be set to 0, as the I:ConnectionFaulted value is not available in that case.

---

## Appendix: 

| Issue                           | Possible Cause                                      |
|--------------------------------|-----------------------------------------------------|
| All results = -999             | Telegram not active, CTW5 not paired, faulted       |
| RF signal = 0                  | Poor antenna position or interference               |
| QUBE Charge = 0%              | QUBE not fully charged or measurement not started   |
| `CTW5ModuleFaulted = 1`       | Loss of communication from EIP device               |



---


