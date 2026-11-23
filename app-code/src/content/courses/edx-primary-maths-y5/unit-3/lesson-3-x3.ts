import type { Lesson } from "../../../types.ts";

export const exam33: Lesson = {
  id: "edpm5-u3-exam3",
  code: "3-X3",
  title: "Exam Practice 3: Measurement, Geometry and Statistics",
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
      id: "edpm5-u3-exam3-concept",
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
          id: "edpm5-u3-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 429 + 480.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 909 }],
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
                working: "909",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "909",
          },
        },
        {
          id: "edpm5-u3-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 7 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 42 }],
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
                working: "42",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "edpm5-u3-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/3 × 3/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/1" },
              { id: "b", text: "2/2" },
              { id: "c", text: "3/1" },
              { id: "d", text: "2/1" },
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
                reasoning: "(4×3)/(3×2) = 12/6 = 2/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 2/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u3-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 10 kg 540 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10540, unit: "g" }],
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
                working: "10540",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10540 g",
          },
        },
        {
          id: "edpm5-u3-x3-q5",
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
          id: "edpm5-u3-x3-q6",
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
          id: "edpm5-u3-x3-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 5x + 17 = 57",
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
                reasoning: "Subtract 17, then divide by 5.",
                working: "(57-17)÷5=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm5-u3-x3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 873 − 349.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 524 }],
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
                working: "524",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "524",
          },
        },
        {
          id: "edpm5-u3-x3-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 9 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 63 }],
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
                working: "63",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "63",
          },
        },
      ],
    },
  ],
};
