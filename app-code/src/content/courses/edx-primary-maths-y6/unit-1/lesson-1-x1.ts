import type { Lesson } from "../../../types.ts";

export const exam11: Lesson = {
  id: "edpm6-u1-exam1",
  code: "1-X1",
  title: "Exam Practice 1: Number: Place Value, Operations and BIDMAS",
  goal: "I CAN answer number: place value, operations and bidmas exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and BIDMAS",
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
      id: "edpm6-u1-exam1-concept",
      title: "Number: Place Value, Operations and BIDMAS — exam practice",
      skill:
        "Apply number: place value, operations and bidmas techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and bidmas in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and bidmas.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u1-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 310 − 100.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 210 }],
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
                working: "210",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "210",
          },
        },
        {
          id: "edpm6-u1-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 12 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72 }],
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
                working: "72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72",
          },
        },
        {
          id: "edpm6-u1-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/5 × 4/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9/25" },
              { id: "b", text: "8/26" },
              { id: "c", text: "8/25" },
              { id: "d", text: "33/25" },
            ],
            correctChoiceId: "c",
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
                reasoning: "(2×4)/(5×5) = 8/25 = 8/25.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 8/25",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u1-x1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 5 kg 554 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5554, unit: "g" }],
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
                working: "5554",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5554 g",
          },
        },
        {
          id: "edpm6-u1-x1-q5",
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
          id: "edpm6-u1-x1-q6",
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
          id: "edpm6-u1-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 6x + 20 = 38",
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
                reasoning: "Subtract 20, then divide by 6.",
                working: "(38-20)÷6=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm6-u1-x1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 407 − 86.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 321 }],
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
                working: "321",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "321",
          },
        },
        {
          id: "edpm6-u1-x1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 7 × 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 70 }],
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
                working: "70",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "70",
          },
        },
        {
          id: "edpm6-u1-x1-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/6 × 3/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/8" },
              { id: "b", text: "9/24" },
              { id: "c", text: "4/8" },
              { id: "d", text: "11/8" },
            ],
            correctChoiceId: "a",
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
                reasoning: "(3×3)/(6×4) = 9/24 = 3/8.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 3/8",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
