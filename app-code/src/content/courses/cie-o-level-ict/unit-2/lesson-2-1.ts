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
            { id: "a", text: "Presents processed data to the user" }, { id: "b", text: "Captures data" }, { id: "c", text: "Stores data" }, { id: "d", text: "Processes data" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Projector" }, { id: "b", text: "Plotter" }, { id: "c", text: "Speakers" }, { id: "d", text: "Barcode reader" },
          ], correctChoiceId: "a" },
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
