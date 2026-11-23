import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edxpc-u1-lesson-1-1",
  code: "1-1",
  title: "Digital Devices and Technology",
  goal: "I CAN identify digital devices and explain what technology is used for.",
  standards: ["Y1-Y2 Digital literacy", "Technology around us"],
  vocabulary: [
    {
      term: "Digital device",
      definition:
        "A machine that uses electricity to do jobs, e.g. a tablet or phone.",
    },
    {
      term: "Technology",
      definition: "Tools, machines and systems people use to solve problems.",
    },
    {
      term: "Keyboard",
      definition: "The part of a computer with keys used to type.",
    },
    {
      term: "Screen",
      definition: "The part of a device that shows pictures and words.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u1-devices",
      title: "Digital Devices",
      skill: "Recognise devices and name their parts.",
      lesson: {
        sections: [
          {
            heading: "What is a digital device?",
            body: "A digital device uses electricity to do jobs. Examples: tablet, phone, laptop, smart speaker, games console. Devices have parts: a screen to see things, a keyboard or buttons to give instructions, and sometimes a microphone or camera. All digital devices need power from a battery or a plug.",
          },
          {
            heading: "What do devices do?",
            body: "Devices help us communicate, learn, play and create. A phone lets us call and message. A tablet can show stories and games. A smart speaker can answer questions and play music. Devices follow instructions — we tell them what to do by pressing buttons, tapping or speaking.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name two digital devices and one thing each does.",
          solution: "Phone — calls and messages; tablet — games and stories.",
        },
      },
      questions: [
        {
          id: "edxpc-u1-dev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a digital device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A pencil" },
              { id: "b", text: "A tablet" },
              { id: "c", text: "A book" },
              { id: "d", text: "A chair" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital device",
                statement: "A machine that uses electricity to do jobs.",
              },
            ],
            steps: [
              {
                reasoning: "A tablet uses electricity to do jobs.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A tablet",
            commonErrors: ["Choosing a book — books do not use electricity."],
          },
        },
        {
          id: "edxpc-u1-dev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the part of a computer you press keys on.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Keyboard",
                statement: "The part with keys used to type.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The keyboard has keys for typing letters and numbers.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "The keyboard",
            commonErrors: ["Saying the screen."],
          },
        },
        {
          id: "edxpc-u1-dev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of digital devices and say what each is used for.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Device uses",
                statement: "Each device has jobs it does well.",
              },
            ],
            steps: [
              {
                reasoning: "Example device with a correct use.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second example device with a correct use.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both uses are realistic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. Phone — calls; tablet — games",
            commonErrors: ["Naming non-digital objects like toys."],
          },
        },
        {
          id: "edxpc-u1-dev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a digital device knows what to do when you press a button.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Instructions",
                statement: "Devices follow instructions given by people.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pressing a button sends an instruction to the device.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The device follows a program of instructions stored inside.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The device then does the job, like opening an app or playing a sound.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Button press = instruction; device follows program",
            commonErrors: [
              "Saying the device thinks for itself like a person.",
            ],
          },
        },
      ],
    },
    {
      id: "edxpc-u1-technology",
      title: "Technology in Everyday Life",
      skill: "Identify where technology is used and what problems it solves.",
      lesson: {
        sections: [
          {
            heading: "Technology everywhere",
            body: "Technology is in our homes, schools and shops. Fridges keep food cold, lamps light rooms, and cars help us travel. Digital technology includes anything with a computer inside: phones, tablets, games consoles and smart TVs.",
          },
          {
            heading: "Solving problems",
            body: "Technology helps solve problems. A washing machine saves time on laundry. A calculator helps with big numbers. An alarm clock wakes us up. Think about a problem you have — could technology help solve it?",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name a problem technology solves at home.",
          solution: "A fridge keeps food fresh so it does not spoil.",
        },
      },
      questions: [
        {
          id: "edxpc-u1-tech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is technology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A tree" },
              { id: "b", text: "A washing machine" },
              { id: "c", text: "A cloud" },
              { id: "d", text: "A river" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Technology",
                statement: "Tools and machines people use to solve problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A washing machine is a machine that solves a problem.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A washing machine",
            commonErrors: ["Choosing natural things like trees."],
          },
        },
        {
          id: "edxpc-u1-tech-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one job a smartphone can do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Device jobs",
                statement: "Smartphones do many jobs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any correct job, e.g. calls, messages, photos, internet.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "e.g. make calls, send messages, take photos",
            commonErrors: ["Saying a phone can fly or cook dinner."],
          },
        },
        {
          id: "edxpc-u1-tech-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do people use technology instead of doing things by hand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Why technology",
                statement: "Technology saves time and effort.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Technology saves time — e.g. a washing machine washes clothes faster than by hand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can be more accurate — e.g. a calculator gets exact answers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It can do jobs people cannot — e.g. a phone can call someone far away.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Saves time, more accurate, does impossible jobs",
            commonErrors: ["Saying technology is only for fun."],
          },
        },
        {
          id: "edxpc-u1-tech-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Think of a problem at school or home. How could technology help solve it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology as a solution",
                statement: "Technology can solve real problems.",
              },
            ],
            steps: [
              {
                reasoning: "A clear, real problem is identified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A suitable digital device or technology is named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It explains how the technology solves the problem.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Problem + technology + how it helps",
            commonErrors: ["Naming a device without explaining how it helps."],
          },
        },
      ],
    },
  ],
};
