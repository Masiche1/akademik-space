import type { Lesson } from "../../../types.ts";

export const exam23: Lesson = {
  id: "edpm5-u2-exam3",
  code: "2-X3",
  title: "Exam Practice 3: Fractions, Decimals and Percentages",
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
      id: "edpm5-u2-exam3-concept",
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
          id: "edpm5-u2-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 611 − 144.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 467 }],
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
                working: "467",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "467",
          },
        },
        {
          id: "edpm5-u2-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 12 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48 }],
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
                working: "48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "edpm5-u2-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/5 × 3/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "31/25" },
              { id: "b", text: "7/25" },
              { id: "c", text: "6/25" },
              { id: "d", text: "6/26" },
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
                reasoning: "(2×3)/(5×5) = 6/25 = 6/25.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 6/25",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u2-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 3 kg 65 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3065, unit: "g" }],
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
                working: "3065",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3065 g",
          },
        },
        {
          id: "edpm5-u2-x3-q5",
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
          id: "edpm5-u2-x3-q6",
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
          id: "edpm5-u2-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 3x + 10 = 28",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                reasoning: "Subtract 10, then divide by 3.",
                working: "(28-10)÷3=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "edpm5-u2-x3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 646 + 525.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1171 }],
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
                working: "1171",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1171",
          },
        },
        {
          id: "edpm5-u2-x3-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 77 ÷ 7.",
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
