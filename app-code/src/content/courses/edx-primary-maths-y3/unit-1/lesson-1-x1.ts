import type { Lesson } from "../../../types.ts";

export const exam11: Lesson = {
  id: "edpm3-u1-exam1",
  code: "1-X1",
  title:
    "Exam Practice 1: Number: Place Value and Addition/Subtraction to 1000",
  goal: "I CAN answer number: place value and addition/subtraction to 1000 exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value and Addition/Subtraction to 1000",
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
      id: "edpm3-u1-exam1-concept",
      title:
        "Number: Place Value and Addition/Subtraction to 1000 — exam practice",
      skill:
        "Apply number: place value and addition/subtraction to 1000 techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value and addition/subtraction to 1000 in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value and addition/subtraction to 1000.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u1-x1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 34 + 127.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 161 }],
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
                working: "161",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "161",
          },
        },
        {
          id: "edpm3-u1-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 9 × 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 27 }],
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
                working: "27",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "27",
          },
        },
        {
          id: "edpm3-u1-x1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 3/6 as an equivalent fraction with denominator 12.",
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
                working: "6/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/12",
          },
        },
        {
          id: "edpm3-u1-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 2 m 5 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 205, unit: "cm" }],
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
                working: "205",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "205 cm",
          },
        },
        {
          id: "edpm3-u1-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has sides of length 9 cm each. Work out its perimeter.",
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
          id: "edpm3-u1-x1-q6",
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
          id: "edpm3-u1-x1-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 7x = 49",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                reasoning: "Divide both sides by 7.",
                working: "49÷7=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm3-u1-x1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 21 − 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 15 }],
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
                working: "15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "edpm3-u1-x1-q9",
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
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact.",
                working: "28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "edpm3-u1-x1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.1 }],
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
                working: "2/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/20",
          },
        },
      ],
    },
  ],
};
