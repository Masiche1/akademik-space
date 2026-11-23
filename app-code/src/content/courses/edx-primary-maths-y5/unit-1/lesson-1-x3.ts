import type { Lesson } from "../../../types.ts";

export const exam13: Lesson = {
  id: "edpm5-u1-exam3",
  code: "1-X3",
  title: "Exam Practice 3: Number: Place Value, Operations and Number Types",
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
      id: "edpm5-u1-exam3-concept",
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
          id: "edpm5-u1-x3-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 390 − 312.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 78 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subtraction",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract, borrowing where needed.",
                working: "78",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "78",
          },
        },
        {
          id: "edpm5-u1-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 96 ÷ 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact or short division.",
                working: "8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "edpm5-u1-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/3 × 1/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13/12" },
              { id: "b", text: "1/13" },
              { id: "c", text: "2/12" },
              { id: "d", text: "1/12" },
            ],
            correctChoiceId: "d",
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
                reasoning: "(1×1)/(3×4) = 1/12 = 1/12.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 1/12",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u1-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 3 kg 320 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3320, unit: "g" }],
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
                working: "3320",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3320 g",
          },
        },
        {
          id: "edpm5-u1-x3-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 14 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 196, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "14×14=196",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "196 cm²",
          },
        },
        {
          id: "edpm5-u1-x3-q6",
          difficulty: "challenge",
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
          id: "edpm5-u1-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 3x + 17 = 26",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                reasoning: "Subtract 17, then divide by 3.",
                working: "(26-17)÷3=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm5-u1-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 269 + 791.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1060 }],
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
                working: "1060",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1060",
          },
        },
        {
          id: "edpm5-u1-x3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 180 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact or short division.",
                working: "12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
      ],
    },
  ],
};
