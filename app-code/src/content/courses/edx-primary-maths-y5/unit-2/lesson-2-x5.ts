import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpm5-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Fractions, Decimals and Percentages",
  goal: "I CAN answer fractions, decimals and percentages exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Decimals and Percentages",
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
      id: "edpm5-u2-exam5-concept",
      title: "Fractions, Decimals and Percentages — exam practice",
      skill:
        "Apply fractions, decimals and percentages techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise fractions, decimals and percentages in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for fractions, decimals and percentages.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u2-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 76 + 389.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 465 }],
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
                working: "465",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "465",
          },
        },
        {
          id: "edpm5-u2-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 6 × 12.",
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
          id: "edpm5-u2-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/3 × 6/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7/1" },
              { id: "b", text: "6/1" },
              { id: "c", text: "36/6" },
              { id: "d", text: "6/2" },
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
                reasoning: "(6×6)/(3×2) = 36/6 = 6/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 6/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u2-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 20 kg 336 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20336, unit: "g" }],
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
                working: "20336",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20336 g",
          },
        },
        {
          id: "edpm5-u2-x5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 12 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 144, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "12×12=144",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "144 cm²",
          },
        },
        {
          id: "edpm5-u2-x5-q6",
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
          id: "edpm5-u2-x5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 6x + 7 = 67",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                reasoning: "Subtract 7, then divide by 6.",
                working: "(67-7)÷6=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 10",
          },
        },
        {
          id: "edpm5-u2-x5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 511 − 432.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 79 }],
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
                working: "79",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "79",
          },
        },
      ],
    },
  ],
};
