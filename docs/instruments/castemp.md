# CasTemp Instrument

CasTemp is a consumable, wireless temperature measurement system used in steelmaking. It provides **real-time bath temperature** data with minimal disruption to process flow.

---

## Features

- ✅ Wireless signal transmission
- ⚡ Fast response time (< 1 second)
- 🔋 Battery-powered and disposable probes
- 📡 Compatible with Heraeus receivers and antenna systems
- 🏭 Designed for harsh steelmaking environments

---

## System Components

| Component        | Description                             |
|------------------|-----------------------------------------|
| Probe (CTE)      | Disposable temperature sensor           |
| Receiver         | Wireless signal receiver (up to 200 m)  |
| PLC Gateway      | Converts signals for automation systems |
| Software         | For diagnostics and logging             |

---

## Typical Workflow

1. Operator inserts CasTemp probe into molten steel.
2. Probe transmits temperature wirelessly.
3. Receiver picks up signal and relays to PLC.
4. Measurement is displayed in HMI or SCADA system.

---

## Integration with PLCs

You can use a **digital pulse decoder** or a **structured telegram parser** to extract temperature values. Example Siemens logic:

```scl
// Sample SCL code for parsing CasTemp message
IF NewMessage THEN
   TempValue := REAL_TO_INT(ExtractedData);
   TempReady := TRUE;
END_IF;
