import type { Lesson } from "../../../types.ts";

export const exam41: Lesson = {
  id: "edpm3-u4-exam1",
  code: "4-X1",
  title: "Exam Practice 1: Algebra, Patterns and Problem Solving",
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
      id: "edpm3-u4-exam1-concept",
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
          id: "edpm3-u4-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 60 + 105.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 165 }],
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
                working: "165",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "165",
          },
        },
        {
          id: "edpm3-u4-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 24 ÷ 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8 }],
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
                working: "8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "edpm3-u4-x1-q3",
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
        {
          id: "edpm3-u4-x1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 7 m 2 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 702, unit: "cm" }],
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
                working: "702",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "702 cm",
          },
        },
        {
          id: "edpm3-u4-x1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A octagon has sides of length 7 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 56, unit: "cm" }],
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
                working: "7×8=56",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "56 cm",
          },
        },
        {
          id: "edpm3-u4-x1-q6",
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
          id: "edpm3-u4-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 9x = 135",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 15 }],
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
                reasoning: "Divide both sides by 9.",
                working: "135÷9=15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 15",
          },
        },
        {
          id: "edpm3-u4-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 40 + 41.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 81 }],
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
                working: "81",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "81",
          },
        },
        {
          id: "edpm3-u4-x1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 40 ÷ 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "edpm3-u4-x1-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 5/10 as an equivalent fraction with denominator 20.",
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
                working: "10/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10/20",
          },
        },
      ],
    },
  ],
};
