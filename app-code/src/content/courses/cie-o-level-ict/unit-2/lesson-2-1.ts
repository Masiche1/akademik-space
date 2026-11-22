import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olict-u2-lesson-2-1",
  code: "2-1",
  title: "Output Devices",
  goal: "I CAN describe common output devices and match them to suitable tasks.",
  standards: ["7014 2.1"],
  vocabulary: [
    { term: "Output device", definition: "Hardware that presents processed data to the user." },
    { term: "Monitor/VDU", definition: "Visual display for text, images and video." },
    { term: "Printer", definition: "Produces hard copy on paper." },
    { term: "Speaker/headphones", definition: "Audio output devices." },
    { term: "Plotter", definition: "Large-format printer for drawings/blueprints." },
    { term: "Projector", definition: "Displays computer output on a large screen." },
  ],
  concepts: [
    {
      id: "olict-u2-outputs",
      title: "Common output devices",
      skill: "Identify output devices and their uses.",
      lesson: {
        sections: [
          { heading: "Visual output", body: "- **Monitor/VDU**: standard screen output.\n- **Projector**: large-screen display for presentations.\n- **Plotter**: precision large-format printing for engineering drawings." },
          { heading: "Printed output", body: "- **Inkjet/laser printer**: documents and photos on paper.\n- **3D printer**: builds physical objects from digital designs." },
          { heading: "Audio and other", body: "- **Speakers/headphones**: sound output.\n- **Actuators**: convert signals into physical movement — e.g. robot arms, valve controllers in automated systems." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An architect needs to print a large building plan. Which device?",
          solution: "Plotter — designed for large-format precise drawings.",
        },
      },
      questions: [
        {
          id: "olict-u2-od-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An output device…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Captures data" },
            { id: "b", text: "Processes data" },
            { id: "c", text: "Presents processed data to the user" },
            { id: "d", text: "Stores data" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Output device", statement: "Presents data." }], steps: [{ reasoning: "Output = presents data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Presents data" },
        },
        {
          id: "olict-u2-od-q2", difficulty: "core", totalMarks: 2,
          stem: "Match: plotter, projector, speakers — to uses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Output devices", statement: "Visual, print, audio." }], steps: [
            { reasoning: "Plotter: large drawings; projector: big screen; speakers: audio.", marks: 1, markCode: "M" },
            { reasoning: "Correct matches.", marks: 1, markCode: "A" },
          ], finalAnswer: "Plotter→large-format; projector→presentations; speakers→sound." },
        },
        {
          id: "olict-u2-od-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what an actuator is and give an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Actuator", statement: "Signal→physical movement." }], steps: [
            { reasoning: "Converts computer signals into movement.", marks: 1, markCode: "M" },
            { reasoning: "Example: robot arm/valve.", marks: 1, markCode: "M" },
            { reasoning: "Used in automated systems.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Actuator converts signals into physical movement — e.g. robot arm in a factory." },
        },
        {
          id: "olict-u2-od-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Output devices review.",
          parts: [
            { label: "a", prompt: "Define output device.", marks: 2 },
            { label: "b", prompt: "Name three visual output devices.", marks: 3 },
            { label: "c", prompt: "What is a plotter used for?", marks: 2 },
            { label: "d", prompt: "Give one non-visual output device and its use.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Output devices", statement: "Visual, print, audio, actuators." },
          ], steps: [
            { part: "a", reasoning: "Presents processed data.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Monitor.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Projector.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Plotter (or VDU).", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Large-format precise drawings.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct use.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Speakers/printer/actuator.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct use stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) presents data (b) monitor/projector/plotter (c) large drawings (d) speakers=audio" },
        },
        {
          id: "olict-u2-od-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is an output device?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Scanner" },
            { id: "b", text: "Microphone" },
            { id: "c", text: "Printer" },
            { id: "d", text: "Keyboard" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Output device", statement: "Presents data." }], steps: [{ reasoning: "Printer produces hard copy — output.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Printer" },
        },
        {
          id: "olict-u2-od-q6", difficulty: "core", totalMarks: 1,
          stem: "A 3D printer produces…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Physical objects from digital designs" },
            { id: "b", text: "Screen images only" },
            { id: "c", text: "Sound recordings" },
            { id: "d", text: "Paper receipts" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "3D printer", statement: "Builds physical objects." }], steps: [{ reasoning: "3D printer builds objects layer by layer.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Physical objects from digital designs" },
        },
        {
          id: "olict-u2-od-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A printer prints 12 pages per minute. How many pages does it print in 30 minutes?",
          response: { type: "numeric", parts: [{ label: "pages", answer: 360 }] },
          markscheme: { principles: [{ kind: "principle", name: "Print rate", statement: "Pages per minute × time." }], steps: [
            { reasoning: "12 × 30.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 360 pages.", marks: 1, markCode: "A" },
          ], finalAnswer: "360 pages" },
        },
        {
          id: "olict-u2-od-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two audio output devices.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Audio output", statement: "Sound devices." }], steps: [
            { reasoning: "e.g. speakers.", marks: 1, markCode: "M" },
            { reasoning: "e.g. headphones.", marks: 1, markCode: "A" },
          ], finalAnswer: "Speakers and headphones (or earphones)." },
        },
        {
          id: "olict-u2-od-q9", difficulty: "core", totalMarks: 2,
          stem: "A projector lamp lasts 2000 hours. If it is used for 4 hours each day, how many days does the lamp last?",
          response: { type: "numeric", parts: [{ label: "days", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Lamp life", statement: "Hours ÷ daily use." }], steps: [
            { reasoning: "2000 ÷ 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 500 days.", marks: 1, markCode: "A" },
          ], finalAnswer: "500 days" },
        },
        {
          id: "olict-u2-od-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why an actuator is classed as an output device, using a robot arm example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Actuator", statement: "Signal → physical movement." }], steps: [
            { reasoning: "Receives signal from computer.", marks: 1, markCode: "M" },
            { reasoning: "Converts it into physical movement.", marks: 1, markCode: "M" },
            { reasoning: "Robot arm example.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Actuator converts computer signals into movement — a robot arm moves parts as instructed." },
        },
        {
          id: "olict-u2-od-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A plotter is most suitable for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Scanning photos" },
            { id: "b", text: "Large-format engineering drawings" },
            { id: "c", text: "Typing documents" },
            { id: "d", text: "Playing music" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Plotter", statement: "Large-format printing." }], steps: [{ reasoning: "Plotter prints large precise drawings.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Large-format engineering drawings" },
        },
        {
          id: "olict-u2-od-q12", difficulty: "core", totalMarks: 1,
          stem: "Which output device would suit a visually impaired user who cannot see the screen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plotter" },
            { id: "b", text: "3D printer" },
            { id: "c", text: "Screen reader with audio output" },
            { id: "d", text: "Projector" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Accessible output", statement: "Audio for visually impaired." }], steps: [{ reasoning: "Audio output suits visually impaired users.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Screen reader with audio output" },
        },
        {
          id: "olict-u2-od-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A cinema has 6 screens. Each screen shows 5 films per day, each lasting 90 minutes. How many minutes of film are shown per day in total?",
          response: { type: "numeric", parts: [{ label: "minutes", answer: 2700 }] },
          markscheme: { principles: [{ kind: "principle", name: "Screen time", statement: "Screens × shows × length." }], steps: [
            { reasoning: "5 × 90 = 450 minutes per screen.", marks: 1, markCode: "M" },
            { reasoning: "450 × 6.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 2700 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "2700 minutes" },
        },
        {
          id: "olict-u2-od-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is NOT an output device?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speaker" },
            { id: "b", text: "Monitor" },
            { id: "c", text: "Plotter" },
            { id: "d", text: "Keyboard" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Output device", statement: "Presents data." }], steps: [{ reasoning: "Keyboard is an input device.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Keyboard" },
        },
        {
          id: "olict-u2-od-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why audio output devices are important for accessibility.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Accessible output", statement: "Audio for visually impaired." }], steps: [
            { reasoning: "Visually impaired users cannot see screens.", marks: 1, markCode: "M" },
            { reasoning: "Speakers/screen readers convert data to sound.", marks: 1, markCode: "M" },
            { reasoning: "Allows equal access to information.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Audio output lets visually impaired users access information through sound instead of sight." },
        },
        {
          id: "olict-u2-od-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Output devices — extended review.",
          parts: [
            { label: "a", prompt: "Define output device.", marks: 1 },
            { label: "b", prompt: "Name two visual output devices.", marks: 2 },
            { label: "c", prompt: "Name two printed output devices.", marks: 2 },
            { label: "d", prompt: "Give an example of an actuator and explain what it does.", marks: 2 },
            { label: "e", prompt: "What does a 3D printer produce and for what purpose?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Output devices", statement: "Visual, print, audio, actuators." },
          ], steps: [
            { part: "a", reasoning: "Presents processed data.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Monitor/VDU.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Projector/plotter.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Inkjet/laser printer.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Plotter/3D printer.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "e.g. robot arm.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Converts signal to movement.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Physical objects.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Prototyping/manufacturing.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) presents data (b) monitor/projector (c) inkjet/plotter (d) robot arm=movement (e) objects for prototyping" },
        },
      ],
    },
    {
      id: "olict-u2-choosing",
      title: "Choosing output devices",
      skill: "Select suitable output devices for given situations.",
      lesson: {
        sections: [
          { heading: "Matching output to need", body: "- Reports for managers → printer or PDF\n- Class presentation → projector\n- Engineering drawings → plotter\n- Music/alerts → speakers\n- Accessibility → screen reader/audio output" },
          { heading: "Factors", body: "Quality needed, volume of output, cost, space, user needs (e.g. visually impaired users need audio)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A school hall needs to show slides to 200 students. Which output device?",
          solution: "Projector connected to the computer — large-screen display visible to all.",
        },
      },
      questions: [
        {
          id: "olict-u2-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For a presentation to a large audience, use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Barcode reader" },
            { id: "b", text: "Projector" },
            { id: "c", text: "Plotter" },
            { id: "d", text: "Speakers" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Match output to audience." }], steps: [{ reasoning: "Projector for large screen.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Projector" },
        },
        {
          id: "olict-u2-co-q2", difficulty: "core", totalMarks: 2,
          stem: "Suggest an output device for printing exam certificates and justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Printer for hard copy." }], steps: [
            { reasoning: "Printer suggested.", marks: 1, markCode: "M" },
            { reasoning: "Justified: produces paper copies.", marks: 1, markCode: "A" },
          ], finalAnswer: "Laser/inkjet printer — produces physical certificates." },
        },
        {
          id: "olict-u2-co-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a plotter is preferred over a normal printer for architectural drawings.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Plotter", statement: "Large-format precision." }], steps: [
            { reasoning: "Handles large paper sizes.", marks: 1, markCode: "M" },
            { reasoning: "High precision for technical drawings.", marks: 1, markCode: "M" },
            { reasoning: "Normal printers too small/inaccurate.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Plotters print large-format with precision needed for technical drawings." },
        },
        {
          id: "olict-u2-co-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Choosing output devices review.",
          parts: [
            { label: "a", prompt: "Best device for a cinema?", marks: 1 },
            { label: "b", prompt: "Best device for printing photos?", marks: 1 },
            { label: "c", prompt: "Best device for a visually impaired user?", marks: 2 },
            { label: "d", prompt: "List three selection factors.", marks: 3 },
            { label: "e", prompt: "Factory robot arm moves parts — what device type is it?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Output selection", statement: "Match need to device." },
          ], steps: [
            { part: "a", reasoning: "Projector/screen.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Inkjet printer.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Screen reader/audio output.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Accessible alternative.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Quality needed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Volume/cost.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "User needs/space.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Actuator.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Converts signal to movement.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) projector (b) inkjet (c) audio/screen reader (d) quality/volume/user (e) actuator" },
        },
        {
          id: "olict-u2-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "To give printed exam results to parents, the best output device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printer" },
            { id: "b", text: "Projector" },
            { id: "c", text: "Joystick" },
            { id: "d", text: "Speakers" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Printer for hard copy." }], steps: [{ reasoning: "Printer produces paper copies.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Printer" },
        },
        {
          id: "olict-u2-co-q6", difficulty: "core", totalMarks: 1,
          stem: "A user who cannot see the screen needs which type of output?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plotter" },
            { id: "b", text: "Audio output" },
            { id: "c", text: "3D printer" },
            { id: "d", text: "Projector" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Accessible output", statement: "Audio for visually impaired." }], steps: [{ reasoning: "Audio output suits non-visual users.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Audio output" },
        },
        {
          id: "olict-u2-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Printers cost $180 each. How much do 4 printers cost in total?",
          response: { type: "numeric", parts: [{ label: "dollars", answer: 720 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cost calculation", statement: "Unit price × quantity." }], steps: [
            { reasoning: "180 × 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $720.", marks: 1, markCode: "A" },
          ], finalAnswer: "$720" },
        },
        {
          id: "olict-u2-co-q8", difficulty: "core", totalMarks: 2,
          stem: "A shop wants to display live weather data on its window. Suggest an output device and justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Monitor for public display." }], steps: [
            { reasoning: "Monitor or large display suggested.", marks: 1, markCode: "M" },
            { reasoning: "Justified: visible to passers-by, updates live.", marks: 1, markCode: "A" },
          ], finalAnswer: "Large monitor — displays live data visibly to the public." },
        },
        {
          id: "olict-u2-co-q9", difficulty: "core", totalMarks: 2,
          stem: "A projector lamp lasts 3000 hours and is used for 6 hours each day. How many days does it last?",
          response: { type: "numeric", parts: [{ label: "days", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Lamp life", statement: "Hours ÷ daily use." }], steps: [
            { reasoning: "3000 ÷ 6.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 500 days.", marks: 1, markCode: "A" },
          ], finalAnswer: "500 days" },
        },
        {
          id: "olict-u2-co-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a projector is better than a standard monitor for a lecture to 200 students.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Projector", statement: "Large-screen display." }], steps: [
            { reasoning: "Projector shows image on large screen.", marks: 1, markCode: "M" },
            { reasoning: "Visible to whole audience.", marks: 1, markCode: "M" },
            { reasoning: "Monitor too small for 200 people.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Projector enlarges the image for all 200 students; a monitor would only be visible to those nearby." },
        },
        {
          id: "olict-u2-co-q11", difficulty: "foundation", totalMarks: 1,
          stem: "For printing large-format engineering plans, the best output device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Joystick" },
            { id: "b", text: "Plotter" },
            { id: "c", text: "Microphone" },
            { id: "d", text: "Speakers" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Plotter for large drawings." }], steps: [{ reasoning: "Plotter handles large-format precise output.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Plotter" },
        },
        {
          id: "olict-u2-co-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A museum wants visitors to hear spoken descriptions of exhibits. The best output device is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Scanner" },
            { id: "b", text: "Barcode reader" },
            { id: "c", text: "Speakers or headphones" },
            { id: "d", text: "Plotter" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Device choice", statement: "Audio output for descriptions." }], steps: [{ reasoning: "Audio output devices produce sound.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Speakers or headphones" },
        },
        {
          id: "olict-u2-co-q13", difficulty: "challenge", totalMarks: 3,
          stem: "An inkjet printer prints 8 colour pages per minute. How many pages can it print in 45 minutes?",
          response: { type: "numeric", parts: [{ label: "pages", answer: 360 }] },
          markscheme: { principles: [{ kind: "principle", name: "Print rate", statement: "Pages per minute × time." }], steps: [
            { reasoning: "8 × 45.", marks: 1, markCode: "M" },
            { reasoning: "= 360.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 360 pages.", marks: 1, markCode: "A" },
          ], finalAnswer: "360 pages" },
        },
        {
          id: "olict-u2-co-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A factory robot arm that moves parts on instruction is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An actuator" },
            { id: "b", text: "A projector" },
            { id: "c", text: "A plotter" },
            { id: "d", text: "A scanner" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Actuator", statement: "Signal → movement." }], steps: [{ reasoning: "Robot arm converts signals to movement.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** An actuator" },
        },
        {
          id: "olict-u2-co-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A company must produce 500 copies of a report each week. Discuss whether printing or distributing PDFs is more suitable.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Print vs digital", statement: "Cost, convenience, volume." }], steps: [
            { reasoning: "PDFs are cheaper and instant.", marks: 1, markCode: "M" },
            { reasoning: "Printing gives hard copies for those without devices.", marks: 1, markCode: "M" },
            { reasoning: "Consider user needs and environment.", marks: 1, markCode: "M" },
            { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
          ], finalAnswer: "PDFs save cost and time for digital users; printing suits recipients without devices — a mix may be best." },
        },
        {
          id: "olict-u2-co-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Choosing output devices — scenario review.",
          parts: [
            { label: "a", prompt: "Best device to show slides to a whole school hall?", marks: 1 },
            { label: "b", prompt: "Best device for printing family photographs?", marks: 1 },
            { label: "c", prompt: "Best device type for controlling a robot arm in a factory?", marks: 2 },
            { label: "d", prompt: "List three factors to consider when choosing an output device.", marks: 3 },
            { label: "e", prompt: "A library wants audio guides for visually impaired readers. Suggest a device and justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Output selection", statement: "Match need to device." },
          ], steps: [
            { part: "a", reasoning: "Projector.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Inkjet printer.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Actuator.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Converts signals to movement.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Quality needed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Volume/cost.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "User needs/space.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Speakers/headphones or screen reader.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Audio suits non-visual users.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) projector (b) inkjet (c) actuator (d) quality/volume/user (e) audio output — accessible" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u2-2-1-notes", title: "Output devices — notes", summary: "Visual, printed and audio output devices plus selection.",
      sections: [
        { heading: "Devices", body: "Monitor, projector, plotter (visual); printers (paper); speakers (audio); actuators (movement)." },
        { heading: "Selection", body: "Match quality, volume, cost and user needs — e.g. audio output for accessibility." },
      ] },
  ],
};
