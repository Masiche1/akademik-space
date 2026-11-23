import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edpm4-u1-exam4",
  code: "1-X4",
  title: "Exam Practice 4: Number: Place Value, Operations and Number Types",
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
      id: "edpm4-u1-exam4-concept",
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
          id: "edpm4-u1-x4-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 196 + 36.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 232 }],
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
                working: "232",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "232",
          },
        },
        {
          id: "edpm4-u1-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 36 ÷ 9.",
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
          id: "edpm4-u1-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 6/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.6 }],
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
                working: "12/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12/20",
          },
        },
        {
          id: "edpm4-u1-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 8 m 5 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 805, unit: "cm" }],
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
                working: "805",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "805 cm",
          },
        },
        {
          id: "edpm4-u1-x4-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pentagon has sides of length 8 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 40, unit: "cm" }],
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
                working: "8×5=40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40 cm",
          },
        },
        {
          id: "edpm4-u1-x4-q6",
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
          id: "edpm4-u1-x4-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 7x = 84",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
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
                working: "84÷7=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 12",
          },
        },
        {
          id: "edpm4-u1-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 157 + 111.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 268 }],
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
                working: "268",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "268",
          },
        },
        {
          id: "edpm4-u1-x4-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 4 × 7.",
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
      ],
    },
  ],
};
