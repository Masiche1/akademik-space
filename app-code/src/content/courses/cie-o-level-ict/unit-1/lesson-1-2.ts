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
            { id: "a", text: "Sends data into the computer" }, { id: "b", text: "Displays results" }, { id: "c", text: "Stores files" }, { id: "d", text: "Connects networks" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Keyboard" }, { id: "b", text: "Scanner" }, { id: "c", text: "Joystick" }, { id: "d", text: "Microphone" },
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
          ], finalAnswer: "(a) keyboard (b) camera (c) mic (d) type/speed/cost (e) temp sensor, automatic" },
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
