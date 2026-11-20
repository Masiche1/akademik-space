import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olcs-u3-lesson-3-2",
  code: "3-2",
  title: "Input, Output Devices and Sensors",
  goal: "I CAN classify input and output devices and explain how sensors feed data into automated systems.",
  standards: ["2210 3.2.1", "2210 3.2.2", "2210 3.2.3"],
  vocabulary: [
    { term: "Input device", definition: "Hardware that captures data for the computer (keyboard, mouse, scanner)." },
    { term: "Output device", definition: "Hardware that presents processed data to the user (monitor, printer, speaker)." },
    { term: "Sensor", definition: "Device that detects a physical property (temperature, light, motion) and converts it to an electrical signal." },
    { term: "Actuator", definition: "Device that converts an electrical signal into physical action (motor, buzzer, valve)." },
    { term: "Direct data entry", definition: "Capturing data automatically without human typing — e.g. barcodes, OCR, sensors." },
  ],
  concepts: [
    {
      id: "olcs-u3-io-devices",
      title: "Input and output devices",
      skill: "Classify common devices and match them to suitable tasks.",
      lesson: {
        sections: [
          { heading: "Input devices", body: "- **Keyboard/mouse**: manual entry and control.\n- **Scanner**: converts paper documents/images to digital.\n- **Microphone/webcam**: sound/video capture.\n- **Barcode reader/OCR/MICR**: direct data entry — no typing, fewer errors.\n- **Touchscreen**: combined input and output." },
          { heading: "Output devices", body: "- **Monitor**: visual output (soft copy).\n- **Printer/plotter**: permanent paper output (hard copy).\n- **Speakers/headphones**: audio.\n- **Projector**: large visual display.\n\nChoice depends on task: legal documents need printouts; presentations need projectors; accessibility may need audio." },
          { heading: "Choosing devices", body: "Match device to purpose: speed, accuracy, permanence of output, cost, user needs." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A warehouse needs to record stock codes quickly and accurately. Suggest a device.",
          solution: "A barcode scanner — direct data entry, fast and error-free compared to manual typing.",
        },
      },
      questions: [
        {
          id: "olcs-u3-io-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which is an output device?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printer" }, { id: "b", text: "Scanner" }, { id: "c", text: "Keyboard" }, { id: "d", text: "Microphone" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Output", statement: "Presents processed data." }], steps: [{ reasoning: "Printer outputs.", working: "\\text{printer}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Printer" },
        },
        {
          id: "olcs-u3-io-q2", difficulty: "core", totalMarks: 2,
          stem: "State one advantage of a barcode scanner over a keyboard for stock recording.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Direct entry", statement: "Automatic capture → faster, fewer errors." }], steps: [
            { reasoning: "Faster — no typing.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { reasoning: "Fewer input errors.", working: "\\text{accuracy}", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster and more accurate — direct data entry." },
        },
        {
          id: "olcs-u3-io-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A hospital wants to monitor patients' temperatures automatically and alert staff to fever. Recommend devices and explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sensor+actuator", statement: "Sense → process → act." }], steps: [
            { reasoning: "Temperature sensors to capture data.", working: "\\text{sensors}", marks: 1, markCode: "M" },
            { reasoning: "Computer/microprocessor to compare thresholds.", working: "\\text{processor}", marks: 1, markCode: "M" },
            { reasoning: "Alarm/buzzer as actuator to alert.", working: "\\text{buzzer}", marks: 1, markCode: "M" },
            { reasoning: "Automated, continuous monitoring.", marks: 1, markCode: "A" },
          ], finalAnswer: "Temperature sensors → processor → alarm actuator for automatic alerts." },
        },
        {
          id: "olcs-u3-io-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Input/output devices review.",
          parts: [
            { label: "a", prompt: "Classify: scanner, monitor, barcode reader, speaker.", marks: 2 },
            { label: "b", prompt: "Define a sensor with an example.", marks: 2 },
            { label: "c", prompt: "Define an actuator with an example.", marks: 2 },
            { label: "d", prompt: "Explain why a school might choose a plotter over a normal printer for architectural drawings.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Actuator", statement: "Signal → physical action." },
          ], steps: [
            { part: "a", reasoning: "Scanner/barcode=input; monitor/speaker=output.", working: "\\text{in/out}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All four correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Detects physical property → electrical signal.", working: "\\text{detect}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Example: temperature/light sensor.", working: "\\text{temp sensor}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Converts signal → physical action.", working: "\\text{act}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Example: motor/buzzer/valve.", working: "\\text{motor}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Plotters handle large-format drawings.", working: "\\text{large format}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Precise vector line drawing.", working: "\\text{precision}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Normal printers unsuitable for A0 drawings.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) in/out split (b) sensor detects (c) actuator acts (d) plotter: large precise drawings" },
        },
      ],
    },
    {
      id: "olcs-u3-sensors",
      title: "Sensors in automated systems",
      skill: "Explain the role of sensors, processors and actuators in automated and control systems.",
      lesson: {
        sections: [
          { heading: "The control loop", body: "Automated systems follow a loop:\n\n**Sense → Process → Act → (repeat)**\n\n- **Sensors** measure the environment (temperature, light, pressure, motion).\n- **Processor/microcontroller** compares readings to set values and decides.\n- **Actuators** change the physical world (switch heater on, move motor, open valve)." },
          { heading: "Examples", body: "- **Central heating**: thermostat sensor → controller → boiler actuator.\n- **Traffic lights**: light/timer sensors → controller → light actuators.\n- **Washing machine**: water level/temp sensors → controller → valves/motor.\n- **Security alarm**: motion sensor → controller → siren/light." },
          { heading: "Feedback", body: "Many systems use **feedback** — the output affects the next input, keeping the system at a set point (e.g. thermostat keeps temperature constant)." },
        ],
        keyFormulas: [
          { name: "Control loop", statement: "Sense → Process → Act" },
        ],
        workedExample: {
          problem: "Describe the control loop in an automatic greenhouse.",
          solution: "Light/temp/humidity sensors feed a microcontroller; when temperature drops it activates a heater actuator; readings update continuously.",
        },
      },
      questions: [
        {
          id: "olcs-u3-sen-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a control system, the role of a sensor is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Measure a physical property" }, { id: "b", text: "Store data" }, { id: "c", text: "Print reports" }, { id: "d", text: "Connect to the internet" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sensor", statement: "Detects physical property." }], steps: [{ reasoning: "Sensors measure.", working: "\\text{measure}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Measure property" },
        },
        {
          id: "olcs-u3-sen-q2", difficulty: "core", totalMarks: 2,
          stem: "State the three stages of an automated control loop.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Control loop", statement: "Sense → process → act." }], steps: [
            { reasoning: "Correct stages.", working: "\\text{sense-process-act}", marks: 1, markCode: "M" },
            { reasoning: "All three named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sense, process, act." },
        },
        {
          id: "olcs-u3-sen-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how feedback is used in a central heating system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Feedback", statement: "Output adjusts next input." }], steps: [
            { reasoning: "Thermostat sensor reads temperature.", working: "\\text{sensor}", marks: 1, markCode: "M" },
            { reasoning: "Controller compares to set point.", working: "\\text{compare}", marks: 1, markCode: "M" },
            { reasoning: "Heater actuator turns on/off.", working: "\\text{actuator}", marks: 1, markCode: "M" },
            { reasoning: "Continual feedback maintains set temperature.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sensor reads temp → controller decides → boiler acts; feedback keeps temperature at set point." },
        },
        {
          id: "olcs-u3-sen-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Sensors and control systems review.",
          parts: [
            { label: "a", prompt: "Name a sensor used in a security system and what it detects.", marks: 2 },
            { label: "b", prompt: "Name an actuator in a washing machine and what it does.", marks: 2 },
            { label: "c", prompt: "Explain the role of the processor in a control loop.", marks: 2 },
            { label: "d", prompt: "Describe how an automatic greenhouse uses the sense-process-act loop.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Control loop", statement: "Sense → process → act with feedback." },
          ], steps: [
            { part: "a", reasoning: "Motion sensor detects movement.", working: "\\text{motion}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct pairing.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Water inlet valve controls water.", working: "\\text{valve}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct actuator.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Compares readings to set values, decides action.", working: "\\text{decide}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct role.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Sensors measure temp/light/humidity.", working: "\\text{sensors}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Processor decides heater/lights/shade.", working: "\\text{process}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Actuators change environment; loop repeats.", working: "\\text{act}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) motion→detect (b) valve→control water (c) decides actions (d) sensors→processor→actuators loop" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u3-3-2-notes", title: "Devices and sensors — notes", summary: "Input/output classification, sensors, actuators, control loop.",
      sections: [
        { heading: "Devices", body: "Input captures (scanner, keyboard, sensor); output presents (monitor, printer, buzzer)." },
        { heading: "Control loop", body: "Sense → Process → Act. Sensors measure, processor decides, actuators change the physical world. Feedback keeps set points." },
      ] },
  ],
};
