import type { Lesson } from "../../../types.ts";

export const exam43: Lesson = {
  id: "edpm6-u4-exam3",
  code: "4-X3",
  title: "Exam Practice 3: Algebra, Number Theory and Problem Solving",
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
      id: "edpm6-u4-exam3-concept",
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
          id: "edpm6-u4-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 892 + 670.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1562 }],
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
                working: "1562",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1562",
          },
        },
        {
          id: "edpm6-u4-x3-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 15 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 120 }],
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
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120",
          },
        },
        {
          id: "edpm6-u4-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/6 × 6/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/2" },
              { id: "b", text: "4/2" },
              { id: "c", text: "3/3" },
              { id: "d", text: "5/2" },
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
                reasoning: "(6×6)/(6×4) = 36/24 = 3/2.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 3/2",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u4-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 17 kg 597 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17597, unit: "g" }],
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
                working: "17597",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17597 g",
          },
        },
        {
          id: "edpm6-u4-x3-q5",
          difficulty: "challenge",
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
          id: "edpm6-u4-x3-q6",
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
          id: "edpm6-u4-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 4x + 9 = 45",
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
                reasoning: "Subtract 9, then divide by 4.",
                working: "(45-9)÷4=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 9",
          },
        },
        {
          id: "edpm6-u4-x3-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 372 + 168.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 540 }],
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
                working: "540",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "540",
          },
        },
        {
          id: "edpm6-u4-x3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 7 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 28 }],
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
                working: "28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "edpm6-u4-x3-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/6 × 2/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/3" },
              { id: "b", text: "2/3" },
              { id: "c", text: "5/3" },
              { id: "d", text: "12/18" },
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
                reasoning: "(6×2)/(6×3) = 12/18 = 2/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 2/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
