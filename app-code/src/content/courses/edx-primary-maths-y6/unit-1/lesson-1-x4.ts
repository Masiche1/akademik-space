import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edpm6-u1-exam4",
  code: "1-X4",
  title: "Exam Practice 4: Number: Place Value, Operations and BIDMAS",
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
      id: "edpm6-u1-exam4-concept",
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
          id: "edpm6-u1-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 780 − 666.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 114 }],
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
                working: "114",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "114",
          },
        },
        {
          id: "edpm6-u1-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 8 × 9.",
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
          id: "edpm6-u1-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/3 × 5/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20/18" },
              { id: "b", text: "19/9" },
              { id: "c", text: "10/9" },
              { id: "d", text: "10/10" },
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
                reasoning: "(4×5)/(3×6) = 20/18 = 10/9.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 10/9",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u1-x4-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 8 kg 391 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8391, unit: "g" }],
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
                working: "8391",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8391 g",
          },
        },
        {
          id: "edpm6-u1-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 13 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 169, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "13×13=169",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "169 cm²",
          },
        },
        {
          id: "edpm6-u1-x4-q6",
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
          id: "edpm6-u1-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 9x + 11 = 119",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
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
                reasoning: "Subtract 11, then divide by 9.",
                working: "(119-11)÷9=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 12",
          },
        },
        {
          id: "edpm6-u1-x4-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 709 + 522.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1231 }],
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
                working: "1231",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1231",
          },
        },
        {
          id: "edpm6-u1-x4-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 12 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 96 }],
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
                working: "96",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "96",
          },
        },
        {
          id: "edpm6-u1-x4-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/4 × 5/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/5" },
              { id: "b", text: "5/4" },
              { id: "c", text: "5/20" },
              { id: "d", text: "1/4" },
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
                reasoning: "(1×5)/(4×5) = 5/20 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
