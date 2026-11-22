import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olict-u1-lesson-1-2",
  code: "1-2",
  title: "Input Devices",
  goal: "I CAN describe common input devices and match them to suitable tasks.",
  standards: ["7014 1.2"],
  vocabulary: [
    { term: "Input device", definition: "Hardware that captures data and sends it to the computer." },
    { term: "Keyboard", definition: "Text and command entry device." },
    { term: "Mouse", definition: "Pointing device for selecting and clicking." },
    { term: "Scanner", definition: "Converts paper documents/images into digital data." },
    { term: "Digital camera", definition: "Captures still images digitally." },
    { term: "Microphone", definition: "Captures sound as digital audio." },
    { term: "Sensor", definition: "Device measuring physical quantities (temperature, light, motion)." },
  ],
  concepts: [
    {
      id: "olict-u1-inputs",
      title: "Common input devices",
      skill: "Identify input devices and their uses.",
      lesson: {
        sections: [
          { heading: "Manual input", body: "- **Keyboard**: typing text, numbers, commands.\n- **Mouse/trackball**: pointing, clicking, selecting.\n- **Touch screen**: direct finger input on displays.\n- **Joystick/gamepad**: control in games and simulations." },
          { heading: "Capturing input", body: "- **Scanner**: paper → digital images/PDFs.\n- **Digital camera/webcam**: photos and video.\n- **Microphone**: sound recording.\n- **Barcode reader**: reads product codes." },
          { heading: "Sensors", body: "Sensors automatically measure the physical world: temperature sensors in weather stations, motion sensors for security lights, pressure sensors in machinery." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A supermarket wants faster checkout. Suggest an input device.",
          solution: "Barcode scanner — scans product codes instantly instead of typing prices.",
        },
      },
      questions: [
        {
          id: "olict-u1-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An input device…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Displays results" },
            { id: "b", text: "Connects networks" },
            { id: "c", text: "Sends data into the computer" },
            { id: "d", text: "Stores files" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Input device", statement: "Data into computer." }], steps: [{ reasoning: "Input = into computer.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sends data in" },
        },
        {
          id: "olict-u1-in-q2", difficulty: "core", totalMarks: 2,
          stem: "Match: scanner, microphone, barcode reader — to their uses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Input devices", statement: "Each captures different data." }], steps: [
            { reasoning: "Scanner: paper→digital; mic: sound; barcode: product codes.", marks: 1, markCode: "M" },
            { reasoning: "Correct matches.", marks: 1, markCode: "A" },
          ], finalAnswer: "Scanner→documents; microphone→sound; barcode reader→product codes." },
        },
        {
          id: "olict-u1-in-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a sensor is an input device, using a motion sensor example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sensors", statement: "Measure physical world." }], steps: [
            { reasoning: "Sensor measures physical quantity.", marks: 1, markCode: "M" },
            { reasoning: "Converts measurement to digital data.", marks: 1, markCode: "M" },
            { reasoning: "Sends data to computer = input.", marks: 1, markCode: "M" },
            { reasoning: "Motion sensor example.", marks: 1, markCode: "A" },
          ], finalAnswer: "Motion sensor detects movement and sends it as data to the computer — input." },
        },
        {
          id: "olict-u1-in-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Input devices review.",
          parts: [
            { label: "a", prompt: "Define input device.", marks: 2 },
            { label: "b", prompt: "Name three manual input devices.", marks: 3 },
            { label: "c", prompt: "Name three capturing input devices.", marks: 3 },
            { label: "d", prompt: "Why is a barcode reader better than a keyboard for checkout?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Input devices", statement: "Manual and capturing types." },
          ], steps: [
            { part: "a", reasoning: "Sends data to computer.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Keyboard.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Mouse.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Touch screen (or joystick).", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Scanner.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Microphone.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Barcode reader/camera.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Faster, fewer errors.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sends data in (b) keyboard/mouse/touch (c) scanner/mic/barcode (d) faster+accurate" },
        },
        {
          id: "olict-u1-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which input device captures sound?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Projector" },
            { id: "b", text: "Plotter" },
            { id: "c", text: "Scanner" },
            { id: "d", text: "Microphone" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Microphone", statement: "Captures sound." }], steps: [{ reasoning: "Microphone captures audio.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Microphone" },
        },
        {
          id: "olict-u1-in-q6", difficulty: "core", totalMarks: 1,
          stem: "A touch screen is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An input device" },
            { id: "b", text: "A network device" },
            { id: "c", text: "An output device only" },
            { id: "d", text: "A storage device" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Touch screen", statement: "Finger input device." }], steps: [{ reasoning: "Finger touches send input to computer.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** An input device" },
        },
        {
          id: "olict-u1-in-q7", difficulty: "core", totalMarks: 2,
          stem: "Name two capturing input devices.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Capturing devices", statement: "Convert real world to digital." }], steps: [
            { reasoning: "e.g. scanner.", marks: 1, markCode: "M" },
            { reasoning: "e.g. digital camera/microphone.", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. scanner, digital camera, microphone, barcode reader." },
        },
        {
          id: "olict-u1-in-q8", difficulty: "core", totalMarks: 2,
          stem: "Why is a scanner classed as an input device?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Scanner", statement: "Paper to digital." }], steps: [
            { reasoning: "Converts paper documents/images into digital data.", marks: 1, markCode: "M" },
            { reasoning: "Sends that data into the computer.", marks: 1, markCode: "A" },
          ], finalAnswer: "It captures paper documents as digital data and sends them into the computer." },
        },
        {
          id: "olict-u1-in-q9", difficulty: "core", totalMarks: 1,
          stem: "To digitise old printed photographs, the best input device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Barcode reader" },
            { id: "b", text: "Microphone" },
            { id: "c", text: "Scanner" },
            { id: "d", text: "Joystick" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Scanner for paper images." }], steps: [{ reasoning: "Scanner converts paper to digital.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Scanner" },
        },
        {
          id: "olict-u1-in-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a barcode reader reduces errors at a supermarket checkout compared with typing prices.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Barcode reader", statement: "Automatic accurate entry." }], steps: [
            { reasoning: "Scans code instantly — faster than typing.", marks: 1, markCode: "M" },
            { reasoning: "No manual price entry so fewer mistakes.", marks: 1, markCode: "M" },
            { reasoning: "Price looked up automatically from database.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Scanning is instant and reads the exact product code, avoiding typing errors and wrong prices." },
        },
        {
          id: "olict-u1-in-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A joystick is mainly used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printing" },
            { id: "b", text: "Storing data" },
            { id: "c", text: "Games and simulations" },
            { id: "d", text: "Scanning documents" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Joystick", statement: "Game control input." }], steps: [{ reasoning: "Joystick controls games/simulations.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Games and simulations" },
        },
        {
          id: "olict-u1-in-q12", difficulty: "core", totalMarks: 2,
          stem: "Give one example of a sensor used as an input device and what it measures.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sensors", statement: "Measure physical quantities." }], steps: [
            { reasoning: "e.g. temperature sensor.", marks: 1, markCode: "M" },
            { reasoning: "Measures temperature (or light/motion/pressure).", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. temperature sensor measures temperature; motion sensor detects movement." },
        },
        {
          id: "olict-u1-in-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is NOT an input device?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keyboard" },
            { id: "b", text: "Scanner" },
            { id: "c", text: "Microphone" },
            { id: "d", text: "Printer" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Input device", statement: "Sends data in." }], steps: [{ reasoning: "Printer outputs data — not input.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Printer" },
        },
        {
          id: "olict-u1-in-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Compare manual input devices with capturing input devices, giving one example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Manual vs capturing", statement: "Typed vs automated capture." }], steps: [
            { reasoning: "Manual: user types/points — e.g. keyboard.", marks: 1, markCode: "M" },
            { reasoning: "Capturing: converts real-world data — e.g. scanner.", marks: 1, markCode: "M" },
            { reasoning: "Manual needs user action; capturing is automatic/accurate.", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Manual devices (keyboard) need the user to enter data; capturing devices (scanner) convert physical data automatically." },
        },
        {
          id: "olict-u1-in-q15", difficulty: "challenge", totalMarks: 9,
          stem: "Input devices extended review.",
          parts: [
            { label: "a", prompt: "Define input device.", marks: 2 },
            { label: "b", prompt: "Name two manual input devices.", marks: 2 },
            { label: "c", prompt: "Name two capturing input devices.", marks: 2 },
            { label: "d", prompt: "A factory wants to count items on a conveyor belt automatically. Suggest a device and justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Input devices", statement: "Manual and capturing types." },
          ], steps: [
            { part: "a", reasoning: "Sends data to computer.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Keyboard.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Mouse/touch screen.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Scanner.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Camera/microphone/barcode.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Sensor or barcode scanner.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Automatic counting justification.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reasonable choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sends data in (b) keyboard/mouse (c) scanner/camera (d) sensor, automatic" },
        },
        {
          id: "olict-u1-in-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A self-service ticket kiosk is placed outdoors in a busy station. Suggest an input device and explain your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Environment matters." }], steps: [
            { reasoning: "Touch screen suggested.", marks: 1, markCode: "M" },
            { reasoning: "No keyboard/mouse needed — hygienic, intuitive.", marks: 1, markCode: "M" },
            { reasoning: "Weatherproof options available.", marks: 1, markCode: "M" },
            { reasoning: "Clear justification.", marks: 1, markCode: "A" },
          ], finalAnswer: "Touch screen — intuitive for public users, no loose peripherals, can be weatherproofed." },
        },
      ],
    },
    {
      id: "olict-u1-choosing",
      title: "Choosing suitable input devices",
      skill: "Select appropriate input devices for given situations.",
      lesson: {
        sections: [
          { heading: "Matching device to task", body: "Consider: what data needs capturing? volume? accuracy needed? user skill? environment?\n\n- Typing documents → keyboard\n- Editing photos → mouse + graphics tablet\n- Digitising paper records → scanner\n- Recording lectures → microphone\n- Counting items on a conveyor → sensor" },
          { heading: "Evaluating suitability", body: "Ask: does it capture the right data type? Is it fast enough? Is it reliable in the environment? Can users operate it? Cost matters too." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A warehouse needs to track packages moving on a conveyor belt. Suggest an input device.",
          solution: "Barcode scanner or RFID sensor — automatically reads package codes without manual entry.",
        },
      },
      questions: [
        {
          id: "olict-u1-ch-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To input text quickly, the best device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keyboard" },
            { id: "b", text: "Scanner" },
            { id: "c", text: "Microphone" },
            { id: "d", text: "Joystick" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Match device to task." }], steps: [{ reasoning: "Keyboard for text.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Keyboard" },
        },
        {
          id: "olict-u1-ch-q2", difficulty: "core", totalMarks: 2,
          stem: "A clinic wants to digitise paper patient files. Suggest a device and justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Scanner for paper→digital." }], steps: [
            { reasoning: "Scanner suggested.", marks: 1, markCode: "M" },
            { reasoning: "Justified: converts paper to digital.", marks: 1, markCode: "A" },
          ], finalAnswer: "Scanner — converts paper documents into digital files efficiently." },
        },
        {
          id: "olict-u1-ch-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain three factors to consider when choosing an input device.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Factors", statement: "Data type, speed, environment." }], steps: [
            { reasoning: "Type of data captured.", marks: 1, markCode: "M" },
            { reasoning: "Speed/volume needed.", marks: 1, markCode: "M" },
            { reasoning: "Environment/user skill/cost.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Data type, required speed/accuracy, environment, user skill and cost." },
        },
        {
          id: "olict-u1-ch-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Choosing input devices review.",
          parts: [
            { label: "a", prompt: "Best device for typing a letter?", marks: 1 },
            { label: "b", prompt: "Best device for photographing products for a website?", marks: 1 },
            { label: "c", prompt: "Best device for recording a podcast?", marks: 1 },
            { label: "d", prompt: "List three selection factors.", marks: 3 },
            { label: "e", prompt: "A factory wants automatic temperature logging. Which device and why?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Device selection", statement: "Match task to device." },
          ], steps: [
            { part: "a", reasoning: "Keyboard.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Digital camera.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Microphone.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Data type.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Speed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Environment/cost.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Temperature sensor.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Automatic continuous measurement.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct justification.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) keyboard (b) camera (c) mic (d) type/speed/cost (e) temperature sensor — automatic logging" },
        },
        {
          id: "olict-u1-ch-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A graphic designer needs precise control when editing photos. The best input device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Joystick" },
            { id: "b", text: "Graphics tablet" },
            { id: "c", text: "Barcode reader" },
            { id: "d", text: "Microphone" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Match device to task." }], steps: [{ reasoning: "Graphics tablet gives precise drawing control.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Graphics tablet" },
        },
        {
          id: "olict-u1-ch-q6", difficulty: "core", totalMarks: 1,
          stem: "Which is NOT a factor to consider when choosing an input device?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed required" },
            { id: "b", text: "Printer model" },
            { id: "c", text: "User skill" },
            { id: "d", text: "Type of data needed" },
          ], correctChoiceIb: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Selection factors", statement: "Data, speed, environment, cost." }], steps: [{ reasoning: "Printer model is irrelevant to input choice.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Printer model" },
        },
        {
          id: "olict-u1-ch-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Keyboards cost $25 each. How much do 40 keyboards cost in total?",
          response: { type: "numeric", parts: [{ label: "dollars", answer: 1000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost calculation", statement: "Unit price × quantity." }], steps: [
            { reasoning: "25 × 40.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $1000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1000" },
        },
        {
          id: "olict-u1-ch-q8", difficulty: "core", totalMarks: 2,
          stem: "A journalist wants to record voice interviews for a podcast. Suggest an input device and justify your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Microphone for sound." }], steps: [
            { reasoning: "Microphone suggested.", marks: 1, markCode: "M" },
            { reasoning: "Justified: captures sound digitally.", marks: 1, markCode: "A" },
          ], finalAnswer: "Microphone — it captures the interviews as digital audio for editing." },
        },
        {
          id: "olict-u1-ch-q9", difficulty: "core", totalMarks: 1,
          stem: "To digitise a stack of handwritten letters into computer files, the most suitable device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Joystick" },
            { id: "b", text: "Plotter" },
            { id: "c", text: "Scanner" },
            { id: "d", text: "Microphone" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Scanner for paper→digital." }], steps: [{ reasoning: "Scanner converts paper documents to digital files.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Scanner" },
        },
        {
          id: "olict-u1-ch-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a barcode scanner is a better choice than a keyboard for a supermarket checkout.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Barcode scanner", statement: "Automatic accurate entry." }], steps: [
            { reasoning: "Scans codes instantly — faster than typing.", marks: 1, markCode: "M" },
            { reasoning: "Price looked up automatically.", marks: 1, markCode: "M" },
            { reasoning: "No manual entry so fewer errors.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Scanning is faster and reads the exact product code, avoiding typing errors and wrong prices." },
        },
        {
          id: "olict-u1-ch-q11", difficulty: "core", totalMarks: 2,
          stem: "A warehouse buys barcode scanners at $85 each for 12 tills. Calculate the total cost.",
          response: { type: "numeric", parts: [{ label: "dollars", answer: 1020 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost calculation", statement: "Unit price × quantity." }], steps: [
            { reasoning: "85 × 12.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $1020.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1020" },
        },
        {
          id: "olict-u1-ch-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A library wants readers to check out books using a screen they can touch directly. The best input device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Microphone" },
            { id: "b", text: "Joystick" },
            { id: "c", text: "Touch screen" },
            { id: "d", text: "Plotter" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Touch screen for direct finger input." }], steps: [{ reasoning: "Touch screen accepts direct finger input.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Touch screen" },
        },
        {
          id: "olict-u1-ch-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A company needs 3 scanners and 25 keyboards. Keyboards cost $20 each and scanners cost $120 each. How many dollars are spent on keyboards?",
          response: { type: "numeric", parts: [{ label: "dollars", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost calculation", statement: "Unit price × quantity." }], steps: [
            { reasoning: "20 × 25.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $500.", marks: 1, markCode: "A" },
          ], finalAnswer: "$500" },
        },
        {
          id: "olict-u1-ch-q14", difficulty: "core", totalMarks: 3,
          stem: "A school wants to record students reading aloud for assessment. Suggest an input device and give two reasons for your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Microphone for audio capture." }], steps: [
            { reasoning: "Microphone suggested.", marks: 1, markCode: "M" },
            { reasoning: "Captures sound digitally.", marks: 1, markCode: "M" },
            { reasoning: "Suitable for recording speech.", marks: 1, markCode: "A" },
          ], finalAnswer: "Microphone — captures the reading as digital audio that can be stored and replayed." },
        },
        {
          id: "olict-u1-ch-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A factory floor is noisy and workers wear protective gloves. Suggest a suitable input device for entering production data and justify your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Environment affects suitability." }], steps: [
            { reasoning: "Touch screen or barcode scanner suggested.", marks: 1, markCode: "M" },
            { reasoning: "Gloves make typing hard — touch input easier.", marks: 1, markCode: "M" },
            { reasoning: "Noisy environment rules out voice input.", marks: 1, markCode: "M" },
            { reasoning: "Clear justification.", marks: 1, markCode: "A" },
          ], finalAnswer: "Touch screen or barcode scanner — gloves make a keyboard impractical and noise makes a microphone unreliable." },
        },
        {
          id: "olict-u1-ch-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Choosing input devices — extended review.",
          parts: [
            { label: "a", prompt: "Best device for typing a report?", marks: 1 },
            { label: "b", prompt: "Best device for photographing artwork for a website?", marks: 1 },
            { label: "c", prompt: "Best device for automatic continuous temperature logging?", marks: 2 },
            { label: "d", prompt: "List three factors to consider when choosing an input device.", marks: 3 },
            { label: "e", prompt: "A small café wants customers to order on a screen at the counter. Suggest a device and justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Device selection", statement: "Match task to device." },
          ], steps: [
            { part: "a", reasoning: "Keyboard.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Digital camera.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Temperature sensor.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Automatic continuous measurement.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Type of data.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Speed/volume.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Environment/cost/user skill.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Touch screen suggested.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Intuitive for customers, hygienic.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) keyboard (b) camera (c) temperature sensor — automatic (d) data/speed/cost (e) touch screen — intuitive" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u1-1-2-notes", title: "Input devices — notes", summary: "Manual and capturing input devices plus selection factors.",
      sections: [
        { heading: "Devices", body: "Manual: keyboard, mouse, touch. Capturing: scanner, camera, mic, barcode. Sensors measure the physical world." },
        { heading: "Selection", body: "Match data type, speed, environment and cost to the task." },
      ] },
  ],
};
