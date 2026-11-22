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
            { id: "a", text: "Scanner" },
            { id: "b", text: "Microphone" },
            { id: "c", text: "Keyboard" },
            { id: "d", text: "Printer" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u3-io-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A touchscreen is unusual because it is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only an output device" },
            { id: "b", text: "Only an input device" },
            { id: "c", text: "Neither input nor output" },
            { id: "d", text: "Both an input and an output device" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Touchscreen", statement: "Combined input + output." }], steps: [{ reasoning: "Displays output and senses touch input.", working: "\\text{both}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Both input and output" },
        },
        {
          id: "olcs-u3-io-q6", difficulty: "core", totalMarks: 2,
          stem: "Of these devices — keyboard, monitor, scanner, printer — how many are input devices?",
          response: { type: "numeric", parts: [{ label: "Devices", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Input", statement: "Keyboard and scanner capture data." }], steps: [
            { reasoning: "Keyboard + scanner = input; monitor + printer = output.", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u3-io-q7", difficulty: "foundation", totalMarks: 1,
          stem: "OCR (Optical Character Recognition) is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Convert scanned text images into editable digital text" },
            { id: "b", text: "Connect to a network" },
            { id: "c", text: "Encrypt files" },
            { id: "d", text: "Print documents" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "OCR", statement: "Image → digital text." }], steps: [{ reasoning: "OCR reads characters from images.", working: "\\text{OCR}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Image to editable text" },
        },
        {
          id: "olcs-u3-io-q8", difficulty: "core", totalMarks: 2,
          stem: "A temperature sensor logs a reading every 0.5 seconds for 10 seconds. How many readings are recorded?",
          response: { type: "numeric", parts: [{ label: "Readings", answer: 20 }] },
          markscheme: { principles: [{ kind: "formula", name: "Samples", statement: "readings = time $\\div$ interval." }], steps: [
            { reasoning: "$10/0.5=20$.", working: "20", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "20", marks: 1, markCode: "A" },
          ], finalAnswer: "20" },
        },
        {
          id: "olcs-u3-io-q9", difficulty: "core", totalMarks: 2,
          stem: "Give one advantage of using a barcode scanner instead of a keyboard for recording stock codes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Direct entry", statement: "Automatic capture → fast, accurate." }], steps: [
            { reasoning: "Much faster — no manual typing.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { reasoning: "Fewer input errors.", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster and more accurate — it captures data directly without typing errors." },
        },
        {
          id: "olcs-u3-io-q10", difficulty: "core", totalMarks: 1,
          stem: "A printer producing a permanent paper copy is producing…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hard copy" },
            { id: "b", text: "Firmware" },
            { id: "c", text: "Cloud data" },
            { id: "d", text: "Soft copy" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Hard copy", statement: "Permanent physical output." }], steps: [{ reasoning: "Paper = hard copy.", working: "\\text{hard copy}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Hard copy" },
        },
        {
          id: "olcs-u3-io-q11", difficulty: "core", totalMarks: 2,
          stem: "A barcode scanner reads 5 codes per second. How many codes can it scan in 2 minutes?",
          response: { type: "numeric", parts: [{ label: "Codes", answer: 600 }] },
          markscheme: { principles: [{ kind: "formula", name: "Total", statement: "rate × time (seconds)." }], steps: [
            { reasoning: "$5\\times120=600$.", working: "600", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "600", marks: 1, markCode: "A" },
          ], finalAnswer: "600" },
        },
        {
          id: "olcs-u3-io-q12", difficulty: "core", totalMarks: 2,
          stem: "Which output device is best for producing large architectural drawings?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A plotter" },
            { id: "b", text: "A microphone" },
            { id: "c", text: "A keyboard" },
            { id: "d", text: "A scanner" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Plotter", statement: "Large-format precise output." }], steps: [{ reasoning: "Plotters handle large drawings.", working: "\\text{plotter}", marks: 1, markCode: "M" }, { reasoning: "Others are input or unsuitable.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Plotter" },
        },
        {
          id: "olcs-u3-io-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A supermarket is designing a self-checkout till. Recommend suitable input and output devices and justify your choices.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Match device to task: speed, accuracy, customer needs." }], steps: [
            { reasoning: "Barcode scanner for fast accurate item entry.", working: "\\text{scanner}", marks: 1, markCode: "M" },
            { reasoning: "Touchscreen for customer interaction.", working: "\\text{touchscreen}", marks: 1, markCode: "M" },
            { reasoning: "Receipt printer for proof of purchase.", working: "\\text{printer}", marks: 1, markCode: "M" },
            { reasoning: "Justifications: speed, accuracy, usability.", marks: 1, markCode: "A" },
          ], finalAnswer: "Barcode scanner (fast/accurate input), touchscreen (customer interface), receipt printer (hard copy output)." },
        },
        {
          id: "olcs-u3-io-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A microphone is classified as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Storage" },
            { id: "b", text: "An output device" },
            { id: "c", text: "An input device" },
            { id: "d", text: "A processor" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Input", statement: "Captures data for the computer." }], steps: [{ reasoning: "Microphone captures sound.", working: "\\text{input}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Input device" },
        },
        {
          id: "olcs-u3-io-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A motion sensor in a security system samples every 100 ms for 5 seconds. How many samples are taken?",
          response: { type: "numeric", parts: [{ label: "Samples", answer: 50 }] },
          markscheme: { principles: [{ kind: "formula", name: "Samples", statement: "time $\\div$ interval = $5000/100$." }], steps: [
            { reasoning: "$5\\text{ s}=5000$ ms; $5000/100=50$.", working: "50", marks: 1, markCode: "M" },
            { reasoning: "Correct conversion.", working: "5000\\div100", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "50", marks: 1, markCode: "A" },
          ], finalAnswer: "50" },
        },
        {
          id: "olcs-u3-io-q16", difficulty: "foundation", totalMarks: 1,
          stem: "A speaker is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A storage device" },
            { id: "b", text: "An input device" },
            { id: "c", text: "An output device" },
            { id: "d", text: "A sensor" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Output", statement: "Presents data to the user." }], steps: [{ reasoning: "Speaker produces sound output.", working: "\\text{output}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Output device" },
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
            { id: "a", text: "Store data" },
            { id: "b", text: "Print reports" },
            { id: "c", text: "Connect to the internet" },
            { id: "d", text: "Measure a physical property" },
          ], correctChoiceId: "d" },
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
        {
          id: "olcs-u3-sen-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An actuator is a device that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Displays images" },
            { id: "b", text: "Stores data" },
            { id: "c", text: "Converts an electrical signal into physical action" },
            { id: "d", text: "Measures temperature" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Actuator", statement: "Signal → physical action." }], steps: [{ reasoning: "Actuators cause movement/action.", working: "\\text{act}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Signal to action" },
        },
        {
          id: "olcs-u3-sen-q6", difficulty: "core", totalMarks: 2,
          stem: "A thermostat is set to 21 °C and currently reads 19 °C. By how many degrees is it below the set point?",
          response: { type: "numeric", parts: [{ label: "Degrees", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Set point", statement: "Difference = set point − reading." }], steps: [
            { reasoning: "$21-19=2$ °C.", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Correct difference.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "2 °C" },
        },
        {
          id: "olcs-u3-sen-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Feedback in a control system means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The output affects the next input to keep a set point" },
            { id: "b", text: "The processor is switched off" },
            { id: "c", text: "Data is sent backwards only" },
            { id: "d", text: "The system ignores sensors" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Feedback", statement: "Output adjusts next input." }], steps: [{ reasoning: "Feedback maintains set points.", working: "\\text{feedback}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Output adjusts next input" },
        },
        {
          id: "olcs-u3-sen-q8", difficulty: "core", totalMarks: 2,
          stem: "A controller samples sensor data at 2 readings per second. How many readings does it take in 60 seconds?",
          response: { type: "numeric", parts: [{ label: "Readings", answer: 120 }] },
          markscheme: { principles: [{ kind: "formula", name: "Samples", statement: "rate × time." }], steps: [
            { reasoning: "$2\\times60=120$.", working: "120", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "120", marks: 1, markCode: "A" },
          ], finalAnswer: "120" },
        },
        {
          id: "olcs-u3-sen-q9", difficulty: "core", totalMarks: 2,
          stem: "What is the role of the processor in an automated control loop?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Processor role", statement: "Compares readings to set values and decides." }], steps: [
            { reasoning: "It compares sensor readings with set points.", working: "\\text{compare}", marks: 1, markCode: "M" },
            { reasoning: "It decides which actuators to activate.", marks: 1, markCode: "A" },
          ], finalAnswer: "It processes sensor data, compares it to set values, and decides what action the actuators should take." },
        },
        {
          id: "olcs-u3-sen-q10", difficulty: "core", totalMarks: 1,
          stem: "In a washing machine, the water level detector is an example of a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Actuator (output)" },
            { id: "b", text: "Printer" },
            { id: "c", text: "Monitor" },
            { id: "d", text: "Sensor (input)" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Sensor", statement: "Detects physical property." }], steps: [{ reasoning: "Level detector senses water.", working: "\\text{sensor}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sensor" },
        },
        {
          id: "olcs-u3-sen-q11", difficulty: "core", totalMarks: 2,
          stem: "A control loop runs once every 250 ms. How many complete loops occur in 1 second?",
          response: { type: "numeric", parts: [{ label: "Loops", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Loops", statement: "$1000/250=4$." }], steps: [
            { reasoning: "$1000\\text{ ms}/250\\text{ ms}=4$.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u3-sen-q12", difficulty: "core", totalMarks: 2,
          stem: "A 'set point' in a control system is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An error message" },
            { id: "b", text: "A type of sensor" },
            { id: "c", text: "The target value the system tries to maintain" },
            { id: "d", text: "The maximum file size" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Set point", statement: "Target value to maintain." }], steps: [{ reasoning: "Set point = desired value.", working: "\\text{target}", marks: 1, markCode: "M" }, { reasoning: "System acts to reach/keep it.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** Target value" },
        },
        {
          id: "olcs-u3-sen-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe how a set of traffic lights uses the sense-process-act control loop.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Control loop", statement: "Sense → process → act, repeatedly." }], steps: [
            { reasoning: "Sensors/timers detect traffic or time intervals.", working: "\\text{sensors}", marks: 1, markCode: "M" },
            { reasoning: "Controller decides which light should show.", working: "\\text{controller}", marks: 1, markCode: "M" },
            { reasoning: "Actuators switch the red/amber/green lights.", working: "\\text{lights}", marks: 1, markCode: "M" },
            { reasoning: "Loop repeats continuously.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sensors detect conditions → controller decides → light actuators change → loop repeats." },
        },
        {
          id: "olcs-u3-sen-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A home security alarm typically uses a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Webcam only" },
            { id: "b", text: "Barcode reader" },
            { id: "c", text: "Plotter" },
            { id: "d", text: "Motion sensor" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Security", statement: "Motion sensors trigger alarms." }], steps: [{ reasoning: "Motion sensor detects intruders.", working: "\\text{motion}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Motion sensor" },
        },
        {
          id: "olcs-u3-sen-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A sensor logs data every 0.2 seconds for 30 seconds. How many readings are taken?",
          response: { type: "numeric", parts: [{ label: "Readings", answer: 150 }] },
          markscheme: { principles: [{ kind: "formula", name: "Samples", statement: "time $\\div$ interval = $30/0.2$." }], steps: [
            { reasoning: "$30/0.2=150$.", working: "150", marks: 1, markCode: "M" },
            { reasoning: "Correct division.", working: "150", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "150", marks: 1, markCode: "A" },
          ], finalAnswer: "150" },
        },
        {
          id: "olcs-u3-sen-q16", difficulty: "foundation", totalMarks: 1,
          stem: "The correct order of an automated control loop is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Process → act → sense" },
            { id: "b", text: "Act → process → sense" },
            { id: "c", text: "Sense → process → act" },
            { id: "d", text: "Sense → act → process" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Control loop", statement: "Sense first, then decide, then act." }], steps: [{ reasoning: "Measure → decide → change.", working: "\\text{s-p-a}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sense → process → act" },
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
