import type { Lesson } from "../../../types.ts";

export const exam41: Lesson = {
  id: "edpm4-u4-exam1",
  code: "4-X1",
  title: "Exam Practice 1: Algebra, Angles and Problem Solving",
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
      id: "edpm4-u4-exam1-concept",
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
          id: "edpm4-u4-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 71 − 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 51 }],
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
                working: "51",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "51",
          },
        },
        {
          id: "edpm4-u4-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 84 ÷ 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
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
                working: "12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "edpm4-u4-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 3/5 as an equivalent fraction with denominator 10.",
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
                working: "6/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/10",
          },
        },
        {
          id: "edpm4-u4-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 5 m 0 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 500, unit: "cm" }],
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
                working: "500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "500 cm",
          },
        },
        {
          id: "edpm4-u4-x1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has sides of length 5 cm each. Work out its perimeter.",
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
          id: "edpm4-u4-x1-q6",
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
          id: "edpm4-u4-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 6x = 48",
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
                reasoning: "Divide both sides by 6.",
                working: "48÷6=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "edpm4-u4-x1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 5 + 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20 }],
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
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "edpm4-u4-x1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 66 ÷ 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                working: "11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11",
          },
        },
      ],
    },
  ],
};
