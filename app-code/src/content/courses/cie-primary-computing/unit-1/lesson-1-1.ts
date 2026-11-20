import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipc-u1-lesson-1-1",
  code: "1-1",
  title: "Stage 1 — What Computers Do",
  goal: "I CAN identify what computers are used for and describe how they follow instructions to complete tasks.",
  standards: ["Cambridge Primary Computing 0059 Stage 1: computer systems",
  "Cambridge Primary Computing 0059 framework strands: Computer systems"],
  stage: 1,
  vocabulary: [
    { term: "Computer", definition: "A machine that follows instructions to do tasks." },
    { term: "Instruction", definition: "A command that tells the computer what to do." },
    { term: "Input", definition: "Something you give the computer, like a key press or tap." },
    { term: "Output", definition: "What the computer gives back, like a picture or sound." },
    { term: "Program", definition: "A set of instructions that a computer follows." },
    { term: "Device", definition: "A machine like a tablet, phone or laptop." },
  ],
  concepts: [
    {
      id: "cipc-u1-s1-systems",
      title: "Computers and instructions",
      skill: "Identify computer uses and explain that computers only do what they are told.",
      lesson: {
        sections: [
          {
            heading: "What is a computer?",
            body: "A computer is a machine that follows instructions to complete tasks. Tablets, phones, laptops and games consoles are all computers. They can store pictures, play music, show videos and help us learn — but only because people give them instructions called programs.",
          },
          {
            heading: "Inputs and outputs",
            body: "Everything a computer does starts with an input — tapping a screen, pressing a key, clicking a mouse. The computer processes the instruction and produces an output — a picture on screen, a sound, a message. Computers cannot think for themselves; they only follow what humans program them to do.",
          },
        ],
        keyFormulas: [
          { name: "Computer", statement: "follows instructions (programs) to do tasks" },
          { name: "Input → output", statement: "input given → computer processes → output produced" },
        ],
        workedExample: {
          problem: "You tap an app icon on a tablet. Identify the input and the output.",
          solution: "Input: your tap on the icon. Output: the app opens on screen. The tablet followed the stored instruction for that icon.",
        },
      },
      questions: [
        {
          id: "cipc-u1-cw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a computer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A tablet" }, { id: "b", text: "A wooden chair" }, { id: "c", text: "A pencil" }, { id: "d", text: "A football" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Computer", statement: "Machine that follows instructions." }],
            steps: [{ reasoning: "A tablet follows instructions; the others do not.", marks: 1, markCode: "M" }],
            finalAnswer: "A tablet",
          },
        },
        {
          id: "cipc-u1-cw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one thing a computer can do and one input you could give it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Uses and inputs", statement: "Tasks and commands." }],
            steps: [
              { reasoning: "e.g. show a video / play music.", marks: 1, markCode: "M" },
              { reasoning: "e.g. tapping the screen, pressing a key.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. video + screen tap",
          },
        },
        {
          id: "cipc-u1-cw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a program is, and describe the difference between an input and an output using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Programs, inputs, outputs", statement: "Instructions vs what is given/produced." }],
            steps: [
              { reasoning: "Program = set of instructions the computer follows.", marks: 1, markCode: "M" },
              { reasoning: "Input = what you give (tap/key press).", marks: 1, markCode: "M" },
              { reasoning: "Output = what computer gives back (picture/sound) — with example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Program=instructions; input→output flow explained",
          },
        },
        {
          id: "cipc-u1-cw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Name four devices that are computers. (b) Explain why a computer cannot decide what to do by itself. (c) Give an example of an input and the output it produces. (d) What is a program? (e) You want the computer to play a song — describe the steps from your action to the sound. (f) Why do people write programs? (g) Is a remote-controlled car a computer? Explain. (h) Name one thing computers cannot do that humans can.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Computer systems", statement: "Devices, instructions, input/output." }],
            steps: [
              { reasoning: "(a) Four valid devices (tablet, phone, laptop, console).", marks: 1, markCode: "M" },
              { reasoning: "(b) Only follows instructions; no own decisions.", marks: 1, markCode: "M" },
              { reasoning: "(c) Valid input/output pair with example.", marks: 1, markCode: "M" },
              { reasoning: "(d) Set of instructions.", marks: 1, markCode: "M" },
              { reasoning: "(e) Tap icon → instruction runs → sound output.", marks: 1, markCode: "M" },
              { reasoning: "(f) To make computers do useful tasks.", marks: 1, markCode: "M" },
              { reasoning: "(g) Reasoned answer (it follows programmed instructions).", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. think creatively / understand feelings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Devices, instruction-following, input/output flow, programs' purpose.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-cw-notes",
      title: "What computers do — notes",
      summary: "Computers follow programs (instructions). Input given → output produced. They cannot think for themselves.",
      sections: [
        { heading: "Key idea", body: "Every computer action starts with an input and ends with an output." },
        { heading: "Remember", body: "Computers only do what humans program them to do." },
      ],
    },
  ],
};
