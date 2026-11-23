import type { Lesson } from "../../../types.ts";

export const exam35: Lesson = {
  id: "edpm5-u3-exam5",
  code: "3-X5",
  title: "Exam Practice 5: Measurement, Geometry and Statistics",
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
      id: "edpm5-u3-exam5-concept",
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
          id: "edpm5-u3-x5-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 293 + 423.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 716 }],
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
                working: "716",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "716",
          },
        },
        {
          id: "edpm5-u3-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 14 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 168 }],
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
                working: "168",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "168",
          },
        },
        {
          id: "edpm5-u3-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/6 × 2/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/9" },
              { id: "b", text: "2/9" },
              { id: "c", text: "4/36" },
              { id: "d", text: "1/10" },
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
                reasoning: "(2×2)/(6×6) = 4/36 = 1/9.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/9",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u3-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 4 kg 283 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4283, unit: "g" }],
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
                working: "4283",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4283 g",
          },
        },
        {
          id: "edpm5-u3-x5-q5",
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
          id: "edpm5-u3-x5-q6",
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
          id: "edpm5-u3-x5-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 7x + 3 = 52",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                reasoning: "Subtract 3, then divide by 7.",
                working: "(52-3)÷7=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm5-u3-x5-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 407 − 346.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 61 }],
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
                working: "61",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "61",
          },
        },
      ],
    },
  ],
};
