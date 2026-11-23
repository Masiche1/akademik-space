import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpm3-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Algebra, Patterns and Problem Solving",
  goal: "I CAN answer algebra, patterns and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Patterns and Problem Solving",
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
      id: "edpm3-u4-exam4-concept",
      title: "Algebra, Patterns and Problem Solving — exam practice",
      skill:
        "Apply algebra, patterns and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, patterns and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, patterns and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u4-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 63 + 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 68 }],
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
                working: "68",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "68",
          },
        },
        {
          id: "edpm3-u4-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 20 ÷ 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Think of the times-table fact.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "edpm3-u4-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 5/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.625 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "10/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10/16",
          },
        },
        {
          id: "edpm3-u4-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 12 m 6 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1206, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 m = 100 cm = 1000 mm.",
              },
            ],
            steps: [
              {
                reasoning: "1 m = 100 cm.",
                working: "1206",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1206 cm",
          },
        },
        {
          id: "edpm3-u4-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A hexagon has sides of length 3 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 18, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Perimeter",
                statement: "Total distance around the edge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all the side lengths (or multiply side length by number of sides).",
                working: "3×6=18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18 cm",
          },
        },
        {
          id: "edpm3-u4-x4-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organised collection of data" },
              { id: "b", text: "A computer game" },
              { id: "c", text: "A type of cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Database = organised data.",
              },
            ],
            steps: [
              {
                reasoning: "Database = organised data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** An organised collection of data",
          },
        },
        {
          id: "edpm3-u4-x4-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 3x = 42",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 14 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Solve equation",
                statement: "Divide both sides by the coefficient.",
              },
            ],
            steps: [
              {
                reasoning: "Divide both sides by 3.",
                working: "42÷3=14",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 14",
          },
        },
        {
          id: "edpm3-u4-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 149 − 17.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 132 }],
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
                working: "132",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "132",
          },
        },
        {
          id: "edpm3-u4-x4-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 84 ÷ 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Think of the times-table fact.",
                working: "12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "edpm3-u4-x4-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 2/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "4/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/10",
          },
        },
      ],
    },
  ],
};
