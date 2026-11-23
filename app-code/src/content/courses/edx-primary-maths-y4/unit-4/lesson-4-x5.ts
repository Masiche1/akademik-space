import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edpm4-u4-exam5",
  code: "4-X5",
  title: "Exam Practice 5: Algebra, Angles and Problem Solving",
  goal: "I CAN answer algebra, angles and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Angles and Problem Solving",
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
      id: "edpm4-u4-exam5-concept",
      title: "Algebra, Angles and Problem Solving — exam practice",
      skill:
        "Apply algebra, angles and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, angles and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, angles and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u4-x5-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 153 + 124.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 277 }],
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
                working: "277",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "277",
          },
        },
        {
          id: "edpm4-u4-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 21 ÷ 7.",
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
          id: "edpm4-u4-x5-q3",
          difficulty: "core",
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
          id: "edpm4-u4-x5-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 2 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 204, unit: "cm" }],
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
                working: "204",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "204 cm",
          },
        },
        {
          id: "edpm4-u4-x5-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A triangle has sides of length 3 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9, unit: "cm" }],
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
                working: "3×3=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 cm",
          },
        },
        {
          id: "edpm4-u4-x5-q6",
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
          id: "edpm4-u4-x5-q7",
          difficulty: "foundation",
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
          id: "edpm4-u4-x5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 140 + 123.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 263 }],
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
                working: "263",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "263",
          },
        },
        {
          id: "edpm4-u4-x5-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 8 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 56 }],
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
                working: "56",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "56",
          },
        },
      ],
    },
  ],
};
