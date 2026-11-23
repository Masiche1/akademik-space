import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpm6-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Algebra, Number Theory and Problem Solving",
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
      id: "edpm6-u4-exam4-concept",
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
          id: "edpm6-u4-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 920 + 408.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1328 }],
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
                working: "1328",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1328",
          },
        },
        {
          id: "edpm6-u4-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 88 ÷ 8.",
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
        {
          id: "edpm6-u4-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/5 × 4/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/5" },
              { id: "b", text: "4/5" },
              { id: "c", text: "16/20" },
              { id: "d", text: "4/6" },
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
                reasoning: "(4×4)/(5×4) = 16/20 = 4/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u4-x4-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 20 kg 148 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20148, unit: "g" }],
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
                working: "20148",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20148 g",
          },
        },
        {
          id: "edpm6-u4-x4-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 4 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "4×4=16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 cm²",
          },
        },
        {
          id: "edpm6-u4-x4-q6",
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
          id: "edpm6-u4-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 3x + 1 = 25",
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
                reasoning: "Subtract 1, then divide by 3.",
                working: "(25-1)÷3=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm6-u4-x4-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 552 + 339.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 891 }],
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
                working: "891",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "891",
          },
        },
        {
          id: "edpm6-u4-x4-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 6 × 8.",
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
          id: "edpm6-u4-x4-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/4 × 3/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/8" },
              { id: "b", text: "3/9" },
              { id: "c", text: "3/8" },
              { id: "d", text: "11/8" },
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
                reasoning: "(3×3)/(4×6) = 9/24 = 3/8.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 3/8",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
