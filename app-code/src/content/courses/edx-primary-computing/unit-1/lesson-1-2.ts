import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edxpc-u1-lesson-1-2",
  code: "1-2",
  title: "Using a Computer or Tablet",
  goal: "I CAN describe how to use a computer or tablet safely and correctly.",
  standards: ["Y1-Y3 Digital literacy", "Using devices"],
  vocabulary: [
    {
      term: "Login",
      definition: "Entering a name and password to open an account.",
    },
    {
      term: "App",
      definition:
        "A program on a device that does a job, like games or stories.",
    },
    {
      term: "Touchscreen",
      definition: "A screen you can tap or swipe with your finger.",
    },
    {
      term: "Charging",
      definition: "Giving a device power so its battery lasts longer.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u1-using",
      title: "Using a Device",
      skill: "Explain how to start, use and close apps.",
      lesson: {
        sections: [
          {
            heading: "Starting and using",
            body: "To use a tablet, press the power button, then tap your user icon and enter your PIN if asked. Tap an app icon to open it — the app opens on the screen. To close an app, press the home button or swipe up to the home screen. Tap the icon again to reopen it.",
          },
          {
            heading: "Looking after your device",
            body: "Keep devices clean and dry. Charge them when the battery is low — a flat battery means the device will not work. Do not drop them or leave them in hot places. Turn devices off when you have finished, especially at bedtime.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Describe how to open a game on a tablet.",
          solution:
            "Power on, tap your icon, tap the game icon — the game opens.",
        },
      },
      questions: [
        {
          id: "edxpc-u1-use-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do you tap on a tablet to open a game?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The power cable" },
              { id: "b", text: "The game's icon" },
              { id: "c", text: "The back of the tablet" },
              { id: "d", text: "The speaker" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Opening apps",
                statement: "Tap the app icon to open it.",
              },
            ],
            steps: [
              {
                reasoning: "Icons open apps when tapped.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** The game's icon",
            commonErrors: ["Choosing parts that cannot be tapped."],
          },
        },
        {
          id: "edxpc-u1-use-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should you charge a tablet when the battery is low?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Battery",
                statement: "A flat battery means the device stops working.",
              },
            ],
            steps: [
              {
                reasoning: "A flat battery stops the device working.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "So it keeps working / does not run out of power",
            commonErrors: ["Saying charging makes it faster."],
          },
        },
        {
          id: "edxpc-u1-use-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the steps to open a drawing app on a tablet, in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Steps to open an app",
                statement: "Power on → choose user → tap icon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First step correct, e.g. press power / wake the tablet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second step correct, e.g. tap your user icon or enter PIN.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Third step correct — tap the drawing app icon.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Power on → choose user → tap app icon",
            commonErrors: ["Steps out of order."],
          },
        },
        {
          id: "edxpc-u1-use-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your tablet freezes and stops responding. Describe two things you could try.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Troubleshooting",
                statement: "Try simple fixes first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sensible first fix, e.g. wait a moment or close the app.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second sensible fix, e.g. restart the tablet or ask an adult.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains why these help or when to ask for help.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. close app and reopen; restart; ask adult",
            commonErrors: ["Saying to hit it or throw it away immediately."],
          },
        },
      ],
    },
    {
      id: "edxpc-u1-care",
      title: "Looking After Technology",
      skill: "Describe how to keep devices safe and working well.",
      lesson: {
        sections: [
          {
            heading: "Physical care",
            body: "Keep devices away from water, food and hot surfaces. Wipe screens gently with a soft dry cloth. Do not press hard on the screen or bend the device. Store devices somewhere safe when not in use so they do not get knocked over or lost.",
          },
          {
            heading: "Digital care",
            body: "Do not download things from websites you do not trust. Do not share passwords. Tell an adult if something strange happens on a device, like a strange message or a pop-up asking for money.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How should you carry a tablet to school?",
          solution:
            "In a padded case or bag, held carefully so it does not drop.",
        },
      },
      questions: [
        {
          id: "edxpc-u1-care-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should you keep a tablet away from water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water makes it faster" },
              { id: "b", text: "Water can damage it" },
              { id: "c", text: "Water cleans it" },
              { id: "d", text: "Water is fun" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water and devices",
                statement: "Water can damage electronic devices.",
              },
            ],
            steps: [
              {
                reasoning: "Water damages the inside parts of a device.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Water can damage it",
            commonErrors: ["Thinking water cleans devices like clothes."],
          },
        },
        {
          id: "edxpc-u1-care-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why should you never share your password?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Passwords",
                statement: "Passwords keep accounts private and safe.",
              },
            ],
            steps: [
              {
                reasoning: "Anyone with the password could use your account.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "So nobody else can use your account",
            commonErrors: ["Saying passwords are only for grown-ups."],
          },
        },
        {
          id: "edxpc-u1-care-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three ways to look after a tablet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Device care",
                statement: "Care keeps devices working longer.",
              },
            ],
            steps: [
              {
                reasoning: "Keep it dry / away from water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Keep it charged / do not let battery die.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Store it safely / do not drop it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. keep dry, keep charged, store safely",
            commonErrors: [
              "Answers that are not about looking after the device.",
            ],
          },
        },
        {
          id: "edxpc-u1-care-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A strange pop-up appears asking you to pay money on a game. What should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Online safety",
                statement: "Never pay or share details from strange pop-ups.",
              },
            ],
            steps: [
              {
                reasoning: "Do not pay or enter any details.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Close the pop-up or leave the app.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tell a trusted adult about it.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Do not pay, close it, tell an adult",
            commonErrors: ["Paying because the game says it is needed."],
          },
        },
      ],
    },
  ],
};
