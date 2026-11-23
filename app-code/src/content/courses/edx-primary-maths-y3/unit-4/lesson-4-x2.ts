import type { Lesson } from "../../../types.ts";

export const exam42: Lesson = {
  id: "edpm3-u4-exam2",
  code: "4-X2",
  title: "Exam Practice 2: Algebra, Patterns and Problem Solving",
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
      id: "edpm3-u4-exam2-concept",
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
          id: "edpm3-u4-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 159 + 66.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 225 }],
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
                working: "225",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "225",
          },
        },
        {
          id: "edpm3-u4-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 4 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48 }],
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
                working: "48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "edpm3-u4-x2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/4 as an equivalent fraction with denominator 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.25 }],
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
                working: "2/8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/8",
          },
        },
        {
          id: "edpm3-u4-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 9 m 8 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 908, unit: "cm" }],
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
                working: "908",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "908 cm",
          },
        },
        {
          id: "edpm3-u4-x2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has sides of length 8 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32, unit: "cm" }],
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
                working: "8×4=32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32 cm",
          },
        },
        {
          id: "edpm3-u4-x2-q6",
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
          id: "edpm3-u4-x2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 6x = 36",
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
                reasoning: "Divide both sides by 6.",
                working: "36÷6=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "edpm3-u4-x2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 156 + 85.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 241 }],
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
                working: "241",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "241",
          },
        },
        {
          id: "edpm3-u4-x2-q9",
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
          id: "edpm3-u4-x2-q10",
          difficulty: "core",
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
      ],
    },
  ],
};
