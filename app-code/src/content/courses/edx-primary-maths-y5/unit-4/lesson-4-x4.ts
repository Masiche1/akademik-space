import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpm5-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Algebra, Fractions and Problem Solving",
  goal: "I CAN answer algebra, fractions and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Fractions and Problem Solving",
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
      id: "edpm5-u4-exam4-concept",
      title: "Algebra, Fractions and Problem Solving — exam practice",
      skill:
        "Apply algebra, fractions and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, fractions and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, fractions and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u4-x4-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 264 + 353.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 617 }],
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
                working: "617",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "617",
          },
        },
        {
          id: "edpm5-u4-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 13 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 117 }],
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
                working: "117",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "117",
          },
        },
        {
          id: "edpm5-u4-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/2 × 5/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15/8" },
              { id: "b", text: "23/8" },
              { id: "c", text: "16/8" },
              { id: "d", text: "15/9" },
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
                reasoning: "(3×5)/(2×4) = 15/8 = 15/8.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 15/8",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u4-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 9 kg 420 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9420, unit: "g" }],
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
                working: "9420",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9420 g",
          },
        },
        {
          id: "edpm5-u4-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 9 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 81, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "9×9=81",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "81 cm²",
          },
        },
        {
          id: "edpm5-u4-x4-q6",
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
          id: "edpm5-u4-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 6x + 4 = 34",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                reasoning: "Subtract 4, then divide by 6.",
                working: "(34-4)÷6=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 5",
          },
        },
        {
          id: "edpm5-u4-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 258 − 249.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                working: "9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "edpm5-u4-x4-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 8 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88 }],
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
                working: "88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "88",
          },
        },
      ],
    },
  ],
};
