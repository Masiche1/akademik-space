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
            { id: "a", text: "A tablet" },
            { id: "b", text: "A pencil" },
            { id: "c", text: "A football" },
            { id: "d", text: "A wooden chair" },
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
        {
          id: "cipc-u1-cw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an output from a computer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pressing a key" },
            { id: "b", text: "Tapping the screen" },
            { id: "c", text: "A picture on the screen" },
            { id: "d", text: "Clicking a mouse" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Output", statement: "What the computer gives back." }],
            steps: [{ reasoning: "A picture on screen is produced by the computer; taps, keys and clicks are inputs.", marks: 1, markCode: "M" }],
            finalAnswer: "**(c)** A picture on the screen",
          },
        },
        {
          id: "cipc-u1-cw-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one example of an input you could give a computer, and the output it would produce.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Input/output", statement: "Given vs produced." }],
            steps: [
              { reasoning: "e.g. tapping an app icon / pressing a key.", marks: 1, markCode: "M" },
              { reasoning: "e.g. app opens / letter appears on screen.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. screen tap → app opens",
          },
        },
        {
          id: "cipc-u1-cw-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A robot vacuum only cleans when someone presses its button. What does this show about computers?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Computers need no instructions" },
            { id: "b", text: "Computers only do what they are instructed to do" },
            { id: "c", text: "Computers cannot store data" },
            { id: "d", text: "Computers decide for themselves" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Instruction following", statement: "Computers only follow programmed instructions." }],
            steps: [
              { reasoning: "The vacuum waits for a button press — it only acts when instructed.", marks: 1, markCode: "M" },
              { reasoning: "Shows computers do not decide for themselves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Computers only do what they are instructed to do",
          },
        },
        {
          id: "cipc-u1-cw-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a computer cannot think for itself. Use the words 'instructions' and 'program' in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "No own decisions", statement: "Computers only follow instructions." }],
            steps: [
              { reasoning: "A computer only does what instructions tell it.", marks: 1, markCode: "M" },
              { reasoning: "A program is the set of instructions humans write.", marks: 1, markCode: "M" },
              { reasoning: "Without a program telling it what to do, the computer cannot decide — with clear example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Computers only follow instructions in programs; they cannot decide alone.",
          },
        },
        {
          id: "cipc-u1-cw-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game gives 5 points each time you press the button. You press it 6 times. How many points do you get in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Repeated addition", statement: "5 points x 6 presses." }],
            steps: [
              { reasoning: "Each press gives 5 points; 6 presses.", marks: 1, markCode: "M" },
              { reasoning: "5 x 6 = 30 points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 points",
          },
        },
        {
          id: "cipc-u1-cw-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what happens between you pressing a key and a letter appearing on the screen.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Input to output", statement: "Key press -> processing -> letter shown." }],
            steps: [
              { reasoning: "Key press is the input — it tells the computer which letter.", marks: 1, markCode: "M" },
              { reasoning: "The computer processes the instruction and chooses the letter.", marks: 1, markCode: "M" },
              { reasoning: "The letter appears on screen as the output.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Key press (input) → computer processes → letter shown (output).",
          },
        },
        {
          id: "cipc-u1-cw-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which statement about computers is TRUE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Computers only do what people program them to do" },
            { id: "b", text: "Computers can think for themselves" },
            { id: "c", text: "Computers make their own decisions" },
            { id: "d", text: "Computers never need input" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Programmed behaviour", statement: "Humans write the instructions." }],
            steps: [
              { reasoning: "Only (b) is true — the others claim computers think or act alone.", marks: 1, markCode: "M" },
              { reasoning: "Programs are written by people; computers follow them exactly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Computers only do what people program them to do",
          },
        },
        {
          id: "cipc-u1-cw-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A smart speaker answers your question out loud. Identify the input, the processing and the output.",
          response: { type: "mcq", choices: [
            { id: "a", text: "There is no input or output" },
            { id: "b", text: "Input: the answer; output: your question" },
            { id: "c", text: "Input: your voice; processing: the program; output: spoken answer" },
            { id: "d", text: "Input: the speaker; output: your voice" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Input/output flow", statement: "Voice in, answer out." }],
            steps: [
              { reasoning: "Your spoken question is the input; the spoken reply is the output.", marks: 1, markCode: "M" },
              { reasoning: "The stored program processes the question in between.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Input: your voice; processing: the program; output: spoken answer",
          },
        },
        {
          id: "cipc-u1-cw-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A program has 3 instructions that each run once, plus 1 instruction that runs 4 times. How many instructions run in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Total runs", statement: "3 x 1 + 1 x 4." }],
            steps: [
              { reasoning: "3 instructions run once each: 3 runs.", marks: 1, markCode: "M" },
              { reasoning: "1 instruction runs 4 times: 4 runs.", marks: 1, markCode: "M" },
              { reasoning: "3 + 4 = 7 instructions in total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipc-u1-cw-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is NOT something a computer can do on its own?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Decide what to do without instructions" },
            { id: "b", text: "Play music" },
            { id: "c", text: "Store photos" },
            { id: "d", text: "Show a video" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "No own decisions", statement: "Needs instructions for every action." }],
            steps: [
              { reasoning: "Storing, playing and showing are all programmed tasks.", marks: 1, markCode: "M" },
              { reasoning: "Computers cannot decide without instructions — that is what (c) says.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Decide what to do without instructions",
          },
        },
        {
          id: "cipc-u1-cw-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A photo slideshow has 8 pictures. Each picture is shown for 2 seconds. How many seconds does the whole slideshow take?",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Total time", statement: "8 pictures x 2 seconds." }],
            steps: [
              { reasoning: "Each of the 8 pictures takes 2 seconds.", marks: 1, markCode: "M" },
              { reasoning: "8 x 2 = 16 seconds.", marks: 1, markCode: "M" },
              { reasoning: "The slideshow takes 16 seconds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16 seconds",
          },
        },
        {
          id: "cipc-u1-cw-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name three devices that are computers. (b) What is an input? Give an example. (c) What is an output? Give an example. (d) What is a program? (e) You tap a music app — describe the steps from your tap to hearing the song. (f) Why can't a computer decide what to do by itself? (g) Is a calculator a computer? Explain. (h) Name one thing computers do very well and one thing only humans can do.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Computer systems", statement: "Devices, inputs/outputs, programs, instruction following." }],
            steps: [
              { reasoning: "(a) Three valid devices (tablet, phone, laptop, console).", marks: 1, markCode: "M" },
              { reasoning: "(b) Input = something given to the computer, e.g. key press.", marks: 1, markCode: "M" },
              { reasoning: "(c) Output = what computer gives back, e.g. sound/picture.", marks: 1, markCode: "M" },
              { reasoning: "(d) Program = set of instructions the computer follows.", marks: 1, markCode: "M" },
              { reasoning: "(e) Tap icon → stored instructions run → music plays as output.", marks: 1, markCode: "M" },
              { reasoning: "(f) Only follows instructions; cannot make own decisions.", marks: 1, markCode: "M" },
              { reasoning: "(g) Reasoned answer (it follows programmed instructions to calculate).", marks: 1, markCode: "M" },
              { reasoning: "(h) e.g. computers store/process fast; humans think creatively/feel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Devices, input/output definitions, program definition, tap-to-sound flow, instruction following, calculator reasoning, strengths comparison.",
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
