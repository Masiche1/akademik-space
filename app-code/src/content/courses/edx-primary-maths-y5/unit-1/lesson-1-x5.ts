import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edpm5-u1-exam5",
  code: "1-X5",
  title: "Exam Practice 5: Number: Place Value, Operations and Number Types",
  goal: "I CAN answer number: place value, operations and number types exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and Number Types",
  ],

  vocabulary: [
    {
      term: "Place value",
      definition: "The value of a digit depends on its position in the number.",
    },
    {
      term: "Inverse operation",
      definition:
        "The operation that undoes another, e.g. subtraction undoes addition.",
    },
    {
      term: "Mean",
      definition:
        "The average: sum of all values divided by how many there are.",
    },
    {
      term: "Perimeter",
      definition: "The total distance around the edge of a shape.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u1-exam5-concept",
      title: "Number: Place Value, Operations and Number Types — exam practice",
      skill:
        "Apply number: place value, operations and number types techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and number types in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and number types.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u1-x5-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 299 + 404.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 703 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Addition",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Add, carrying where needed.",
                working: "703",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "703",
          },
        },
        {
          id: "edpm5-u1-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 99 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Partition method.",
              },
            ],
            steps: [
              {
                reasoning: "Partition and multiply, or use a known fact.",
                working: "99",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "99",
          },
        },
        {
          id: "edpm5-u1-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/5 × 2/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9/5" },
              { id: "b", text: "4/5" },
              { id: "c", text: "8/10" },
              { id: "d", text: "4/6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction multiplication",
                statement:
                  "Multiply numerators and denominators; simplify by common factors.",
              },
            ],
            steps: [
              {
                reasoning: "(4×2)/(5×2) = 8/10 = 4/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u1-x5-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 4 kg 39 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4039, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 kg = 1000 g; 1 l = 1000 ml.",
              },
            ],
            steps: [
              {
                reasoning: "1 kg = 1000 g.",
                working: "4039",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4039 g",
          },
        },
        {
          id: "edpm5-u1-x5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 8 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "8×8=64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64 cm²",
          },
        },
        {
          id: "edpm5-u1-x5-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why use a spreadsheet for data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can calculate and sort automatically" },
              { id: "b", text: "It looks nice" },
              { id: "c", text: "It is free" },
              { id: "d", text: "It is faster than paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Spreadsheets automate calculations.",
              },
            ],
            steps: [
              {
                reasoning: "Spreadsheets automate calculations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** It can calculate and sort automatically",
          },
        },
        {
          id: "edpm5-u1-x5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 3x + 11 = 35",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Linear equation",
                statement: "Inverse operations in reverse order.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract 11, then divide by 3.",
                working: "(35-11)÷3=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm5-u1-x5-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 514 + 43.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 557 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Addition",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Add, carrying where needed.",
                working: "557",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "557",
          },
        },
      ],
    },
  ],
};
