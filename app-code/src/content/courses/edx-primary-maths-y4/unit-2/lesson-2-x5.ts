import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpm4-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Multiplication, Division, Fractions and Decimals",
  goal: "I CAN answer multiplication, division, fractions and decimals exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication, Division, Fractions and Decimals",
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
      id: "edpm4-u2-exam5-concept",
      title: "Multiplication, Division, Fractions and Decimals — exam practice",
      skill:
        "Apply multiplication, division, fractions and decimals techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise multiplication, division, fractions and decimals in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for multiplication, division, fractions and decimals.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u2-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 126 − 17.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 109 }],
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
                working: "109",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "109",
          },
        },
        {
          id: "edpm4-u2-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 12 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72 }],
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
                working: "72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72",
          },
        },
        {
          id: "edpm4-u2-x5-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 2/4 as an equivalent fraction with denominator 8.",
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
                working: "4/8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/8",
          },
        },
        {
          id: "edpm4-u2-x5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 14 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1404, unit: "cm" }],
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
                working: "1404",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1404 cm",
          },
        },
        {
          id: "edpm4-u2-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle has sides of length 3 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12, unit: "cm" }],
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
                working: "3×4=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 cm",
          },
        },
        {
          id: "edpm4-u2-x5-q6",
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
          id: "edpm4-u2-x5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 4x = 32",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8 }],
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
                working: "32÷4=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm4-u2-x5-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 118 − 72.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 46 }],
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
                working: "46",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "46",
          },
        },
        {
          id: "edpm4-u2-x5-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30 }],
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
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30",
          },
        },
      ],
    },
  ],
};
