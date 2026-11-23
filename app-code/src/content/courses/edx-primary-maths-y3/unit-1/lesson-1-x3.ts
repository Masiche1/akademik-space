import type { Lesson } from "../../../types.ts";

export const exam13: Lesson = {
  id: "edpm3-u1-exam3",
  code: "1-X3",
  title:
    "Exam Practice 3: Number: Place Value and Addition/Subtraction to 1000",
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
      id: "edpm3-u1-exam3-concept",
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
          id: "edpm3-u1-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 118 − 58.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 60 }],
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
                working: "60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "edpm3-u1-x3-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 3 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 15 }],
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
                working: "15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "edpm3-u1-x3-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 1/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.16666666666666666 }],
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
                working: "2/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/12",
          },
        },
        {
          id: "edpm3-u1-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 10 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1004, unit: "cm" }],
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
                working: "1004",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1004 cm",
          },
        },
        {
          id: "edpm3-u1-x3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has sides of length 5 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20, unit: "cm" }],
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
                working: "5×4=20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20 cm",
          },
        },
        {
          id: "edpm3-u1-x3-q6",
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
          id: "edpm3-u1-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 5x = 20",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "20÷5=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 4",
          },
        },
        {
          id: "edpm3-u1-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 189 + 56.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 245 }],
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
                working: "245",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "245",
          },
        },
        {
          id: "edpm3-u1-x3-q9",
          difficulty: "challenge",
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
        {
          id: "edpm3-u1-x3-q10",
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
      ],
    },
  ],
};
