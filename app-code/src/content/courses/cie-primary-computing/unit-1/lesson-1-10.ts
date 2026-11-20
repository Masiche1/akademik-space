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
                              "text": "A photo app"
                    },
                    {
                              "id": "c",
                              "text": "A game program"
                    },
                    {
                              "id": "d",
                              "text": "An operating system"
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
