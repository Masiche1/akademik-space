import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edxpc-u2-lesson-2-3",
  code: "2-3",
  title: "Debugging and Fixing Programs",
  goal: "I CAN find and fix mistakes in programs.",
  standards: ["Y3-Y6 Coding basics", "Debugging"],
  vocabulary: [
    {
      term: "Bug",
      definition: "A mistake in a program that makes it behave wrongly.",
    },
    { term: "Debug", definition: "To find and fix bugs in a program." },
    {
      term: "Error",
      definition: "Something wrong — a bug or a mistake in code.",
    },
    {
      term: "Test",
      definition: "To try a program and check it works correctly.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u2-debug",
      title: "What is a Bug?",
      skill: "Recognise bugs and their effects.",
      lesson: {
        sections: [
          {
            heading: "Bugs happen",
            body: "Every programmer writes bugs — mistakes in code. A bug might make a character walk through walls, make a score count down instead of up, or make a game crash. Bugs are normal; the skill is finding and fixing them.",
          },
          {
            heading: "Types of bugs",
            body: "Some bugs are obvious — the program will not start. Some are sneaky — the program runs but does the wrong thing, like a character moving the wrong way. Some only appear in certain situations — the game works until you reach level 5, then crashes.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A game should add 10 points per coin but adds 1. What type of bug?",
          solution: "A logic bug — wrong value in the code.",
        },
      },
      questions: [
        {
          id: "edxpc-u2-bug-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a bug in programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of computer" },
              { id: "b", text: "A mistake in a program" },
              { id: "c", text: "A fast computer" },
              { id: "d", text: "A game level" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bug",
                statement: "A mistake in a program.",
              },
            ],
            steps: [
              {
                reasoning: "A bug is a programming mistake.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A mistake in a program",
            commonErrors: [
              "Thinking bugs are insects or viruses on computers.",
            ],
          },
        },
        {
          id: "edxpc-u2-bug-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'debugging' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing new code" },
              { id: "b", text: "Finding and fixing bugs" },
              { id: "c", text: "Deleting programs" },
              { id: "d", text: "Playing games" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Debug",
                statement: "To find and fix bugs.",
              },
            ],
            steps: [
              {
                reasoning: "Debugging = fixing bugs.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Finding and fixing bugs",
            commonErrors: ["Confusing debugging with coding."],
          },
        },
        {
          id: "edxpc-u2-bug-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program is supposed to show 'Well done!' when score reaches 100, but it shows it at 10. Describe the bug.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Spotting bugs",
                statement: "Compare what happens vs what should happen.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies the bug — message shows at wrong score.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Likely cause — wrong number in the condition (10 instead of 100).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Fix — change 10 to 100.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bug: shows at 10 not 100; fix: change condition to 100",
            commonErrors: ["Not identifying what is wrong."],
          },
        },
        {
          id: "edxpc-u2-bug-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe two steps you would take to debug a program that crashes when you press a button.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Debugging steps",
                statement: "Reproduce → isolate → fix → test.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reproduce — try pressing the button again to confirm the crash.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Isolate — check the code for that button to find the problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix and test — correct the code and press the button again.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reproduce crash → check button code → fix → test again",
            commonErrors: ["Randomly changing code without checking."],
          },
        },
      ],
    },
    {
      id: "edxpc-u2-testing",
      title: "Testing Programs",
      skill: "Explain why and how to test programs.",
      lesson: {
        sections: [
          {
            heading: "Why test?",
            body: "Even careful programmers make mistakes. Testing means trying a program to check it works correctly before other people use it. A game developer tests every level, every button and every feature. If they do not test, users will find the bugs — and that is embarrassing!",
          },
          {
            heading: "How to test",
            body: "Test by doing what a real user would do. Play through the whole game. Try normal actions and weird actions — like pressing buttons fast or in strange orders. Check edge cases: what happens at score 0? What if you press two buttons at once? Write down what went wrong and fix it.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How would you test a new maths quiz app?",
          solution:
            "Try every question, check answers are marked right, try wrong answers, check the score adds up.",
        },
      },
      questions: [
        {
          id: "edxpc-u2-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do programmers test their programs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make them slower" },
              { id: "b", text: "To find and fix bugs" },
              { id: "c", text: "To delete them" },
              { id: "d", text: "To print them" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Testing",
                statement: "Testing finds bugs before users do.",
              },
            ],
            steps: [
              {
                reasoning: "Testing finds problems early.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** To find and fix bugs",
            commonErrors: ["Thinking testing is just for fun."],
          },
        },
        {
          id: "edxpc-u2-test-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'edge case' in testing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The easiest level" },
              {
                id: "b",
                text: "An unusual situation that might break the program",
              },
              { id: "c", text: "The final boss" },
              { id: "d", text: "A type of bug" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Edge case",
                statement: "Unusual situations that can break programs.",
              },
            ],
            steps: [
              {
                reasoning: "Edge cases are unusual situations.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Unusual situation",
            commonErrors: ["Thinking edge case means the hardest level."],
          },
        },
        {
          id: "edxpc-u2-test-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two things you should test in a simple game.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Testing games",
                statement: "Test normal use and unusual situations.",
              },
            ],
            steps: [
              {
                reasoning: "Normal action, e.g. playing through a level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unusual action, e.g. pressing buttons quickly or at odd times.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Boundary check, e.g. what happens at score 0 or max lives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. play a level; press buttons fast; check score limits",
            commonErrors: ["Only testing the happy path."],
          },
        },
        {
          id: "edxpc-u2-test-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a bug you find in testing and one users find after release.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Testing value",
                statement: "Testing catches bugs before real users do.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Test bugs are found before release — cheaper to fix.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "User-found bugs damage reputation and lose trust.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Testing is about quality — a product that works well.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Test bugs = caught early; user bugs = reputation damage",
            commonErrors: ["No real difference explained."],
          },
        },
      ],
    },
  ],
};
