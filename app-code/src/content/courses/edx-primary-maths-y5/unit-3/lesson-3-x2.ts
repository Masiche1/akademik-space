import type { Lesson } from "../../../types.ts";

export const exam32: Lesson = {
  id: "edpm5-u3-exam2",
  code: "3-X2",
  title: "Exam Practice 2: Measurement, Geometry and Statistics",
  goal: "I CAN answer measurement, geometry and statistics exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Measurement, Geometry and Statistics",
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
      id: "edpm5-u3-exam2-concept",
      title: "Measurement, Geometry and Statistics — exam practice",
      skill:
        "Apply measurement, geometry and statistics techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise measurement, geometry and statistics in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for measurement, geometry and statistics.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u3-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 608 − 467.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 141 }],
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
                working: "141",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "141",
          },
        },
        {
          id: "edpm5-u3-x2-q2",
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
          id: "edpm5-u3-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/2 × 4/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/2" },
              { id: "b", text: "4/1" },
              { id: "c", text: "4/1" },
              { id: "d", text: "3/1" },
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
                reasoning: "(3×4)/(2×2) = 12/4 = 3/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 3/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u3-x2-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 13 kg 557 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 13557, unit: "g" }],
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
                working: "13557",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13557 g",
          },
        },
        {
          id: "edpm5-u3-x2-q5",
          difficulty: "foundation",
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
          id: "edpm5-u3-x2-q6",
          difficulty: "foundation",
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
          id: "edpm5-u3-x2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 4x + 7 = 39",
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
                reasoning: "Subtract 7, then divide by 4.",
                working: "(39-7)÷4=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm5-u3-x2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 636 − 345.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 291 }],
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
                working: "291",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "291",
          },
        },
        {
          id: "edpm5-u3-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 165 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                working: "11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11",
          },
        },
      ],
    },
  ],
};
