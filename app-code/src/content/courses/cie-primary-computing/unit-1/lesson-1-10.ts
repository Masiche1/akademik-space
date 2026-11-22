import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "cipc-u1-lesson-1-10",
  code: "1-10",
  title: "Stage 3 — Computer Systems: Hardware and Software",
  goal: "I CAN describe the main parts of a computer system and explain hardware vs software.",
  standards: ["Cambridge Primary Computing 0059 Stage 3: computer systems", "Cambridge Primary Computing 0059 framework strands: Computer systems"],
  stage: 3,
  vocabulary: [
    { term: "Hardware", definition: "The physical parts of a computer you can touch." },
    { term: "Software", definition: "The programs and apps that run on hardware." },
    { term: "CPU", definition: "The processor — the 'brain' that follows instructions." },
    { term: "Memory", definition: "Storage that holds data and programs while running." },
    { term: "Input device", definition: "Hardware that sends data in — keyboard, mouse." },
    { term: "Output device", definition: "Hardware that shows results — screen, printer." },
  ],
  concepts: [
    {
      id: "cipc-u1-s3-systems",
      title: "Hardware, software and system parts",
      skill: "Identify hardware/software components and their jobs at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Hardware and software",
            body: "Hardware is the physical machine — screen, keyboard, processor. Software is the programs — apps, games, the operating system. Hardware without software does nothing; software needs hardware to run.",
          },
          {
            heading: "Inside the system",
            body: "The CPU (central processing unit) is the brain — it follows instructions fast. Memory (RAM) holds the programs and data currently in use. Input devices (keyboard, mouse, touchscreen) send data in; output devices (screen, speakers, printer) show results.",
          },
        ],
        keyFormulas: [
          { name: "Hardware", statement: "physical parts you can touch" },
          { name: "Software", statement: "programs/apps that run" },
          { name: "CPU/memory", statement: "brain that processes / workspace holding data" },
        ],
        workedExample: {
          problem: "Is a keyboard hardware or software? Is the photo app hardware or software?",
          solution: "Keyboard = hardware (physical). Photo app = software (program). The app needs the keyboard? No — the app needs the screen/CPU to display; keyboard is just an input.",
        },
      },
      questions: [
        {
          id: "cipc-u1-hw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is hardware?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The screen"
                    },
                    {
                              "id": "b",
                              "text": "A game program"
                    },
                    {
                              "id": "c",
                              "text": "An operating system"
                    },
                    {
                              "id": "d",
                              "text": "A photo app"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hardware",
                              "statement": "Physical parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Screen is physical; apps and OS are software.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "The screen"
},
        },
        {
          id: "cipc-u1-hw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the 'brain' of the computer and one input device.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CPU and inputs",
                              "statement": "Processor + input hardware."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CPU/processor.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Keyboard/mouse/touchscreen.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "CPU; e.g. keyboard"
},
        },
        {
          id: "cipc-u1-hw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why hardware alone cannot do useful work, and what role memory plays.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Systems",
                              "statement": "Hardware+software+memory roles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hardware needs software/programs to give instructions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Memory holds programs/data while in use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "CPU processes instructions using that data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Needs software; memory holds active data"
},
        },
        {
          id: "cipc-u1-hw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define hardware and software with examples. (b) What is the CPU and what does it do? (c) What is memory used for? (d) Name two input and two output devices. (e) Is a printer input or output? Explain. (f) Why does software need hardware? (g) What does the operating system do? (h) Sort these: mouse, game, keyboard, spreadsheet app, screen, OS.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Computer systems",
                              "statement": "Hw/sw, CPU, memory, devices, OS."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Hardware=physical (screen); software=programs (app).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Brain; follows/processes instructions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Holds data/programs in use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Inputs: keyboard/mouse; outputs: screen/printer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Output — produces paper copy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Software needs hardware to run on.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Manages hardware and runs other software.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Hardware: mouse, keyboard, screen; software: game, spreadsheet, OS.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hw/sw, CPU, memory, devices, OS, sorting exercise."
},
        },
        {
          id: "cipc-u1-hw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is software?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The mouse" },
            { id: "b", text: "The screen" },
            { id: "c", text: "A web browser" },
            { id: "d", text: "The keyboard" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Software", statement: "Programs/apps that run." }],
            steps: [
              { reasoning: "A web browser is a program; the rest are physical hardware.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** A web browser",
          },
        },
        {
          id: "cipc-u1-hw-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two output devices.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Output devices", statement: "Show or produce results." }],
            steps: [
              { reasoning: "First valid output: screen/monitor, printer, speakers.", marks: 1, markCode: "M" },
              { reasoning: "Second valid output device.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. screen and printer.",
          },
        },
        {
          id: "cipc-u1-hw-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A computer has 3 input devices and 2 output devices connected. How many devices are connected in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Counting devices", statement: "3 + 2." }],
            steps: [
              { reasoning: "3 + 2 = 5 devices.", marks: 1, markCode: "M" },
              { reasoning: "5 devices connected in total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipc-u1-hw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the CPU do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Displays images on screen" },
            { id: "b", text: "Follows and processes instructions — the 'brain'" },
            { id: "c", text: "Connects to Wi-Fi" },
            { id: "d", text: "Stores photos forever" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "CPU", statement: "Processor that follows instructions." }],
            steps: [
              { reasoning: "The CPU processes instructions fast — it is the computer's brain.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Follows and processes instructions",
          },
        },
        {
          id: "cipc-u1-hw-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the roles of hardware and software in a computer system, using the words 'program' and 'physical'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Hardware vs software", statement: "Physical parts vs programs." }],
            steps: [
              { reasoning: "Hardware = the physical parts you can touch (screen, keyboard, CPU).", marks: 1, markCode: "M" },
              { reasoning: "Software = the programs/apps that give instructions.", marks: 1, markCode: "M" },
              { reasoning: "They work together: software needs hardware to run; hardware does nothing useful without software.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hardware is physical; software is programs; they need each other.",
          },
        },
        {
          id: "cipc-u1-hw-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does a computer need BOTH hardware and software to be useful?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only software matters" },
            { id: "b", text: "Hardware can think by itself" },
            { id: "c", text: "Software can run without any machine" },
            { id: "d", text: "Software gives instructions; hardware physically runs them" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Hw+sw together", statement: "Programs need machines to run." }],
            steps: [
              { reasoning: "Software holds the instructions/programs.", marks: 1, markCode: "M" },
              { reasoning: "Hardware physically executes them; neither alone is useful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Software gives instructions; hardware runs them",
          },
        },
        {
          id: "cipc-u1-hw-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sort these into hardware or software: monitor, spreadsheet app, mouse, operating system, keyboard, game program. How many items are software?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sorting hw/sw", statement: "Physical vs programs." }],
            steps: [
              { reasoning: "Hardware: monitor, mouse, keyboard (3 items).", marks: 1, markCode: "M" },
              { reasoning: "Software: spreadsheet app, operating system, game program.", marks: 1, markCode: "M" },
              { reasoning: "3 items are software.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Software: spreadsheet, OS, game = 3 items.",
          },
        },
        {
          id: "cipc-u1-hw-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the operating system? Give one example of what it does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Operating system", statement: "Software that manages the computer." }],
            steps: [
              { reasoning: "OS = the main software that manages hardware and runs other programs.", marks: 1, markCode: "M" },
              { reasoning: "Example job: opens files, manages memory, runs apps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Main managing software; e.g. runs apps, manages files.",
          },
        },
        {
          id: "cipc-u1-hw-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is a printer an input or output device? Explain in one sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Input vs output", statement: "Direction of data flow." }],
            steps: [
              { reasoning: "Output device.", marks: 1, markCode: "M" },
              { reasoning: "It produces a physical copy — data flows OUT of the computer to paper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Output — produces paper copies.",
          },
        },
        {
          id: "cipc-u1-hw-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name one input device and one output device, and describe the data flow for each in one sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Data flow", statement: "Inputs send in, outputs send out." }],
            steps: [
              { reasoning: "Input e.g. keyboard: sends key presses INTO the computer.", marks: 1, markCode: "M" },
              { reasoning: "Output e.g. screen: shows results OUT of the computer.", marks: 1, markCode: "M" },
              { reasoning: "Both directions described correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. keyboard sends data in; screen shows results out.",
          },
        },
        {
          id: "cipc-u1-hw-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is memory (RAM) different from storage? What happens to data in memory when the computer is switched off?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Memory vs storage", statement: "RAM temporary; storage permanent." }],
            steps: [
              { reasoning: "Memory/RAM holds programs and data currently in use — fast but temporary.", marks: 1, markCode: "M" },
              { reasoning: "Storage keeps files permanently even when powered off.", marks: 1, markCode: "M" },
              { reasoning: "Data in memory is lost when the computer switches off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RAM is temporary workspace; data lost on shutdown.",
          },
        },
        {
          id: "cipc-u1-hw-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define hardware and software with examples. (b) What is the CPU and what does it do? (c) What is memory used for? (d) Name two input and two output devices. (e) Is a printer input or output? Explain. (f) Why does software need hardware? (g) What does the operating system do? (h) Sort these: mouse, game, keyboard, spreadsheet app, screen, OS.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Computer systems", statement: "Hw/sw, CPU, memory, devices, OS, sorting." }],
            steps: [
              { reasoning: "(a) Hardware=physical (screen); software=programs (app).", marks: 1, markCode: "M" },
              { reasoning: "(b) Brain; follows/processes instructions.", marks: 1, markCode: "M" },
              { reasoning: "(c) Holds data/programs in use.", marks: 1, markCode: "M" },
              { reasoning: "(d) Inputs: keyboard/mouse; outputs: screen/printer.", marks: 1, markCode: "M" },
              { reasoning: "(e) Output — produces paper copy.", marks: 1, markCode: "M" },
              { reasoning: "(f) Software needs hardware to run on.", marks: 1, markCode: "M" },
              { reasoning: "(g) Manages hardware and runs other software.", marks: 1, markCode: "M" },
              { reasoning: "(h) Hardware: mouse, keyboard, screen; software: game, spreadsheet, OS.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hw/sw, CPU, memory, devices, OS, sorting exercise.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-hw-notes",
      title: "Hardware and software — notes",
      summary: "Hardware = physical; software = programs. CPU processes, memory holds data, OS manages everything.",
      sections: [
        { heading: "Key idea", body: "Hardware without software is useless; software needs hardware to run." },
        { heading: "Devices", body: "Inputs send data in (keyboard); outputs show results (screen, printer)." },
      ],
    },
  ],
};
