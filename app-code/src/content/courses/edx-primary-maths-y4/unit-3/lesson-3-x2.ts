import type { Lesson } from "../../../types.ts";

export const exam32: Lesson = {
  id: "edpm4-u3-exam2",
  code: "3-X2",
  title: "Exam Practice 2: Geometry, Time and Statistics",
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
      id: "edpm4-u3-exam2-concept",
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
          id: "edpm4-u3-x2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 62 + 30.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 92 }],
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
                working: "92",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "92",
          },
        },
        {
          id: "edpm4-u3-x2-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 72 ÷ 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                working: "6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "edpm4-u3-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 5/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.8333333333333334 }],
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
                working: "10/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10/12",
          },
        },
        {
          id: "edpm4-u3-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 4 m 1 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 401, unit: "cm" }],
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
                working: "401",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "401 cm",
          },
        },
        {
          id: "edpm4-u3-x2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A octagon has sides of length 6 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48, unit: "cm" }],
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
                working: "6×8=48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48 cm",
          },
        },
        {
          id: "edpm4-u3-x2-q6",
          difficulty: "challenge",
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
          id: "edpm4-u3-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 6x = 18",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                reasoning: "Divide both sides by 6.",
                working: "18÷6=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm4-u3-x2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 87 + 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 94 }],
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
                working: "94",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "94",
          },
        },
        {
          id: "edpm4-u3-x2-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 99 }],
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
                working: "99",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "99",
          },
        },
      ],
    },
  ],
};
