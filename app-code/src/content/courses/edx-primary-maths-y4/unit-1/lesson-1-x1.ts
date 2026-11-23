import type { Lesson } from "../../../types.ts";

export const exam11: Lesson = {
  id: "edpm4-u1-exam1",
  code: "1-X1",
  title: "Exam Practice 1: Number: Place Value, Operations and Number Types",
  goal: "I CAN answer number: place value, operations and number types exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and Number Types",
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
      id: "edpm4-u1-exam1-concept",
      title: "Number: Place Value, Operations and Number Types — exam practice",
      skill:
        "Apply number: place value, operations and number types techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and number types in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and number types.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u1-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 44 + 42.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 86 }],
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
                working: "86",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "86",
          },
        },
        {
          id: "edpm4-u1-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 21 }],
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
                working: "21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21",
          },
        },
        {
          id: "edpm4-u1-x1-q3",
          difficulty: "foundation",
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
          id: "edpm4-u1-x1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 14 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1409, unit: "cm" }],
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
                working: "1409",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1409 cm",
          },
        },
        {
          id: "edpm4-u1-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has sides of length 9 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36, unit: "cm" }],
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
                working: "9×4=36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36 cm",
          },
        },
        {
          id: "edpm4-u1-x1-q6",
          difficulty: "foundation",
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
          id: "edpm4-u1-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 8x = 24",
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
                reasoning: "Divide both sides by 8.",
                working: "24÷8=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm4-u1-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 182 + 19.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 201 }],
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
                working: "201",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "201",
          },
        },
        {
          id: "edpm4-u1-x1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 24 ÷ 8.",
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
      ],
    },
  ],
};
