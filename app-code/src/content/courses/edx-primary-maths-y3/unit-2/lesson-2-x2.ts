import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edpm3-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: Multiplication, Division and Fractions",
  goal: "I CAN answer multiplication, division and fractions exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication, Division and Fractions",
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
      id: "edpm3-u2-exam2-concept",
      title: "Multiplication, Division and Fractions — exam practice",
      skill:
        "Apply multiplication, division and fractions techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise multiplication, division and fractions in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for multiplication, division and fractions.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u2-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 112 − 103.",
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
          id: "edpm3-u2-x2-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 4 × 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 40 }],
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
                working: "40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "edpm3-u2-x2-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 1/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.2 }],
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
                working: "2/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/10",
          },
        },
        {
          id: "edpm3-u2-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 15 m 6 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1506, unit: "cm" }],
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
                working: "1506",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1506 cm",
          },
        },
        {
          id: "edpm3-u2-x2-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has sides of length 6 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 24, unit: "cm" }],
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
                working: "6×4=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24 cm",
          },
        },
        {
          id: "edpm3-u2-x2-q6",
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
          id: "edpm3-u2-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 5x = 65",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 13 }],
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
                reasoning: "Divide both sides by 5.",
                working: "65÷5=13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 13",
          },
        },
        {
          id: "edpm3-u2-x2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 191 + 19.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 210 }],
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
                working: "210",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "210",
          },
        },
        {
          id: "edpm3-u2-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 16 ÷ 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "edpm3-u2-x2-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.375 }],
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
                working: "6/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/16",
          },
        },
      ],
    },
  ],
};
