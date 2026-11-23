import type { Lesson } from "../../../types.ts";

export const exam43: Lesson = {
  id: "edpm5-u4-exam3",
  code: "4-X3",
  title: "Exam Practice 3: Algebra, Fractions and Problem Solving",
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
      id: "edpm5-u4-exam3-concept",
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
          id: "edpm5-u4-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 770 − 504.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 266 }],
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
                working: "266",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "266",
          },
        },
        {
          id: "edpm5-u4-x3-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 52 ÷ 13.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "edpm5-u4-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/5 × 5/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/3" },
              { id: "b", text: "2/4" },
              { id: "c", text: "20/30" },
              { id: "d", text: "3/3" },
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
                reasoning: "(4×5)/(5×6) = 20/30 = 2/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 2/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u4-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 20 kg 381 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20381, unit: "g" }],
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
                working: "20381",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20381 g",
          },
        },
        {
          id: "edpm5-u4-x3-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 7 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 49, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "7×7=49",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "49 cm²",
          },
        },
        {
          id: "edpm5-u4-x3-q6",
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
          id: "edpm5-u4-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 2x + 6 = 22",
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
                reasoning: "Subtract 6, then divide by 2.",
                working: "(22-6)÷2=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm5-u4-x3-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 839 + 155.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 994 }],
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
                working: "994",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "994",
          },
        },
        {
          id: "edpm5-u4-x3-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 108 }],
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
                working: "108",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "108",
          },
        },
      ],
    },
  ],
};
