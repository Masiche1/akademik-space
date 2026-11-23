import type { Lesson } from "../../../types.ts";

export const exam33: Lesson = {
  id: "edpm4-u3-exam3",
  code: "3-X3",
  title: "Exam Practice 3: Geometry, Time and Statistics",
  goal: "I CAN answer geometry, time and statistics exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Geometry, Time and Statistics",
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
      id: "edpm4-u3-exam3-concept",
      title: "Geometry, Time and Statistics — exam practice",
      skill:
        "Apply geometry, time and statistics techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise geometry, time and statistics in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for geometry, time and statistics.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u3-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 61 + 113.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 174 }],
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
                working: "174",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "174",
          },
        },
        {
          id: "edpm4-u3-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 9 ÷ 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "edpm4-u3-x3-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 5/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.5 }],
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
                working: "10/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10/20",
          },
        },
        {
          id: "edpm4-u3-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 11 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1109, unit: "cm" }],
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
                working: "1109",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1109 cm",
          },
        },
        {
          id: "edpm4-u3-x3-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pentagon has sides of length 11 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 55, unit: "cm" }],
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
                working: "11×5=55",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "55 cm",
          },
        },
        {
          id: "edpm4-u3-x3-q6",
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
          id: "edpm4-u3-x3-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 4x = 24",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                reasoning: "Divide both sides by 4.",
                working: "24÷4=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "edpm4-u3-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 143 − 138.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "edpm4-u3-x3-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 11 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact.",
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
