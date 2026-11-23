import type { Lesson } from "../../../types.ts";

export const exam42: Lesson = {
  id: "edpm6-u4-exam2",
  code: "4-X2",
  title: "Exam Practice 2: Algebra, Number Theory and Problem Solving",
  goal: "I CAN answer algebra, number theory and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Number Theory and Problem Solving",
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
      id: "edpm6-u4-exam2-concept",
      title: "Algebra, Number Theory and Problem Solving — exam practice",
      skill:
        "Apply algebra, number theory and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, number theory and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, number theory and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u4-x2-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 273 + 370.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 643 }],
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
                working: "643",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "643",
          },
        },
        {
          id: "edpm6-u4-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 14 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 112 }],
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
                working: "112",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "112",
          },
        },
        {
          id: "edpm6-u4-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/3 × 2/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/3" },
              { id: "b", text: "1/4" },
              { id: "c", text: "2/3" },
              { id: "d", text: "4/3" },
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
                reasoning: "(2×2)/(3×4) = 4/12 = 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u4-x2-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 16 kg 87 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16087, unit: "g" }],
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
                working: "16087",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16087 g",
          },
        },
        {
          id: "edpm6-u4-x2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 3 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "3×3=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 cm²",
          },
        },
        {
          id: "edpm6-u4-x2-q6",
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
          id: "edpm6-u4-x2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 7x + 18 = 53",
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
                reasoning: "Subtract 18, then divide by 7.",
                working: "(53-18)÷7=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 5",
          },
        },
        {
          id: "edpm6-u4-x2-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 566 − 543.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 23 }],
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
                working: "23",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "23",
          },
        },
        {
          id: "edpm6-u4-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 14 × 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 140 }],
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
                working: "140",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "140",
          },
        },
        {
          id: "edpm6-u4-x2-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/3 × 2/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/1" },
              { id: "b", text: "1/2" },
              { id: "c", text: "2/1" },
              { id: "d", text: "6/6" },
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
                reasoning: "(3×2)/(3×2) = 6/6 = 1/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
