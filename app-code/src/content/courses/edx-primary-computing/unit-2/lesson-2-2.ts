import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edxpc-u2-lesson-2-2",
  code: "2-2",
  title: "Loops and Repetition",
  goal: "I CAN recognise and use repetition to repeat instructions.",
  standards: ["Y3-Y5 Coding basics", "Loops"],
  vocabulary: [
    { term: "Loop", definition: "Instructions that repeat again and again." },
    { term: "Repeat", definition: "To do something again and again." },
    { term: "Iteration", definition: "One single run-through of a loop." },
    {
      term: "Counted loop",
      definition: "A loop that repeats a set number of times.",
    },
  ],
  concepts: [
    {
      id: "edxpc-u2-loops",
      title: "What is a Loop?",
      skill: "Spot repetition and use loops to shorten programs.",
      lesson: {
        sections: [
          {
            heading: "Repeating tasks",
            body: "Some tasks need the same instruction many times. If you clap your hands 10 times, you do not write 'clap' 10 times — you just clap 10 times. A loop in programming does the same: it repeats instructions. 'Repeat 4 times: jump' makes the character jump 4 times with one instruction.",
          },
          {
            heading: "Why use loops?",
            body: "Loops make programs shorter and easier to change. Instead of writing 'move forward' 100 times, you write 'repeat 100 times: move forward'. If you want to change it to 200 times, you only change one number — not 100 lines of code.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a loop for clapping hands 6 times.",
          solution: "Repeat 6 times: clap hands.",
        },
      },
      questions: [
        {
          id: "edxpc-u2-loop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a loop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of computer" },
              { id: "b", text: "Instructions that repeat" },
              { id: "c", text: "A file" },
              { id: "d", text: "A game" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Loop",
                statement: "Instructions that repeat again and again.",
              },
            ],
            steps: [
              {
                reasoning: "A loop repeats instructions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Instructions that repeat",
            commonErrors: ["Thinking a loop is a physical object."],
          },
        },
        {
          id: "edxpc-u2-loop-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which instruction uses a loop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jump once" },
              { id: "b", text: "Repeat 5 times: jump" },
              { id: "c", text: "Walk to the door" },
              { id: "d", text: "Open the door" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loop syntax",
                statement: "Loops repeat an instruction a set number of times.",
              },
            ],
            steps: [
              {
                reasoning: "'Repeat 5 times' is a loop.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Repeat 5 times: jump",
            commonErrors: ["Choosing single instructions."],
          },
        },
        {
          id: "edxpc-u2-loop-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why would a programmer use a loop instead of writing 'move forward' 50 times?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loop benefits",
                statement:
                  "Loops shorten programs and make them easier to change.",
              },
            ],
            steps: [
              {
                reasoning: "Shorter program — one line instead of 50.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Easier to change — change one number, not 50 lines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less chance of mistakes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shorter, easier to change, fewer mistakes",
            commonErrors: ["Saying loops are only for speed."],
          },
        },
        {
          id: "edxpc-u2-loop-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A character needs to hop 10 times. Write the loop instruction, then explain what happens if you change 10 to 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Writing loops",
                statement: "Repeat N times: action.",
              },
            ],
            steps: [
              {
                reasoning: "Correct loop written: 'Repeat 10 times: hop'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Changing to 3 means the character hops 3 times instead of 10.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Only one number changed — shows why loops are useful.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Repeat 10 times: hop → change to 3 = 3 hops",
            commonErrors: [
              "Not understanding the repeat count controls repetitions.",
            ],
          },
        },
      ],
    },
    {
      id: "edxpc-u2-conditions",
      title: "Making Decisions: If and Else",
      skill: "Understand simple decisions in programs.",
      lesson: {
        sections: [
          {
            heading: "If statements",
            body: "Programs can make decisions using 'if'. 'If it is raining, take a coat' — the action only happens when the condition is true. In code: 'if score > 10: play fanfare'. The fanfare only plays when the score is over 10.",
          },
          {
            heading: "If-else statements",
            body: "'If-else' gives two choices: 'If it is sunny, wear sunglasses; else wear a coat'. One condition is checked — if true, do the first action; if false, do the second. This lets programs react differently to different situations.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Write an if statement: if temperature is below 0, show 'ice'.",
          solution: "if temperature < 0: show 'ice'",
        },
      },
      questions: [
        {
          id: "edxpc-u2-cond-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an 'if' statement do in a program?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeats forever" },
              { id: "b", text: "Makes a decision" },
              { id: "c", text: "Deletes files" },
              { id: "d", text: "Prints text" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "If statements",
                statement: "If statements let programs make decisions.",
              },
            ],
            steps: [{ reasoning: "If = decision.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Makes a decision",
            commonErrors: ["Confusing if with loops."],
          },
        },
        {
          id: "edxpc-u2-cond-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'if score > 10: show star', when does the star appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always" },
              { id: "b", text: "Only when score is over 10" },
              { id: "c", text: "Never" },
              { id: "d", text: "Only at the start" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "If condition",
                statement:
                  "The action only happens when the condition is true.",
              },
            ],
            steps: [
              {
                reasoning: "Star only shows when score > 10.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Only when score is over 10",
            commonErrors: ["Thinking the action always happens."],
          },
        },
        {
          id: "edxpc-u2-cond-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an if-else instruction for this rule: if it is raining take a coat, otherwise take sunglasses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "If-else",
                statement: "If condition true do X, else do Y.",
              },
            ],
            steps: [
              {
                reasoning: "Correct if condition, e.g. 'if raining'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct action for true case — take coat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct else action — take sunglasses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "if raining: take coat; else: take sunglasses",
            commonErrors: ["Missing the else part."],
          },
        },
        {
          id: "edxpc-u2-cond-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A game gives a bonus if lives > 0 AND score > 100. Explain what this condition means in plain words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound conditions",
                statement: "AND means both conditions must be true.",
              },
            ],
            steps: [
              {
                reasoning: "Explains both parts — lives and score.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains AND = both must be true.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Gives example, e.g. bonus only if player still has lives AND high score.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Bonus only when player has lives left AND score over 100",
            commonErrors: ["Thinking only one condition is needed."],
          },
        },
      ],
    },
  ],
};
