import type { Lesson } from "../../../types.ts";

export const exam33: Lesson = {
  id: "edpm6-u3-exam3",
  code: "3-X3",
  title: "Exam Practice 3: Measurement, Statistics and Problem Solving",
  goal: "I CAN answer measurement, statistics and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Measurement, Statistics and Problem Solving",
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
      id: "edpm6-u3-exam3-concept",
      title: "Measurement, Statistics and Problem Solving — exam practice",
      skill:
        "Apply measurement, statistics and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise measurement, statistics and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for measurement, statistics and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u3-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 847 − 92.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 755 }],
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
                working: "755",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "755",
          },
        },
        {
          id: "edpm6-u3-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 8 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64 }],
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
                working: "64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64",
          },
        },
        {
          id: "edpm6-u3-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/2 × 6/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/1" },
              { id: "b", text: "4/1" },
              { id: "c", text: "36/12" },
              { id: "d", text: "3/2" },
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
                reasoning: "(6×6)/(2×6) = 36/12 = 3/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 3/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u3-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 3 kg 938 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3938, unit: "g" }],
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
                working: "3938",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3938 g",
          },
        },
        {
          id: "edpm6-u3-x3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 6 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "6×6=36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36 cm²",
          },
        },
        {
          id: "edpm6-u3-x3-q6",
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
          id: "edpm6-u3-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 5x + 3 = 48",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                reasoning: "Subtract 3, then divide by 5.",
                working: "(48-3)÷5=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 9",
          },
        },
        {
          id: "edpm6-u3-x3-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 497 + 646.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1143 }],
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
                working: "1143",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1143",
          },
        },
        {
          id: "edpm6-u3-x3-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 65 ÷ 13.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "edpm6-u3-x3-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/4 × 2/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1/3" },
              { id: "c", text: "2/2" },
              { id: "d", text: "3/2" },
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
                reasoning: "(3×2)/(4×3) = 6/12 = 1/2.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/2",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
