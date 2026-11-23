import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edpm3-u1-exam5",
  code: "1-X5",
  title:
    "Exam Practice 5: Number: Place Value and Addition/Subtraction to 1000",
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
      id: "edpm3-u1-exam5-concept",
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
          id: "edpm3-u1-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 115 − 91.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 24 }],
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
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "edpm3-u1-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 66 }],
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
                working: "66",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "66",
          },
        },
        {
          id: "edpm3-u1-x5-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.3 }],
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
                working: "6/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/20",
          },
        },
        {
          id: "edpm3-u1-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 6 m 1 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 601, unit: "cm" }],
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
                working: "601",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "601 cm",
          },
        },
        {
          id: "edpm3-u1-x5-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A hexagon has sides of length 9 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54, unit: "cm" }],
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
                working: "9×6=54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54 cm",
          },
        },
        {
          id: "edpm3-u1-x5-q6",
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
      ],
    },
  ],
};
