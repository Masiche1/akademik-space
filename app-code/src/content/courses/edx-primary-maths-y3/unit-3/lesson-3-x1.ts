import type { Lesson } from "../../../types.ts";

export const exam31: Lesson = {
  id: "edpm3-u3-exam1",
  code: "3-X1",
  title: "Exam Practice 1: Shape, Measure, Time, Money and Data",
  goal: "I CAN answer shape, measure, time, money and data exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Shape, Measure, Time, Money and Data",
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
      id: "edpm3-u3-exam1-concept",
      title: "Shape, Measure, Time, Money and Data — exam practice",
      skill:
        "Apply shape, measure, time, money and data techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise shape, measure, time, money and data in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for shape, measure, time, money and data.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u3-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 182 + 14.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 196 }],
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
                working: "196",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "196",
          },
        },
        {
          id: "edpm3-u3-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 12 × 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36 }],
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
                working: "36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36",
          },
        },
        {
          id: "edpm3-u3-x1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 4/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.6666666666666666 }],
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
                working: "8/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/12",
          },
        },
        {
          id: "edpm3-u3-x1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 6 m 8 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 608, unit: "cm" }],
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
                working: "608",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "608 cm",
          },
        },
        {
          id: "edpm3-u3-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A octagon has sides of length 3 cm each. Work out its perimeter.",
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
                working: "3×8=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24 cm",
          },
        },
        {
          id: "edpm3-u3-x1-q6",
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
          id: "edpm3-u3-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 7x = 70",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "70÷7=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 10",
          },
        },
        {
          id: "edpm3-u3-x1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 76 + 32.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 108 }],
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
                working: "108",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "108",
          },
        },
        {
          id: "edpm3-u3-x1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 9 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54 }],
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
                working: "54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54",
          },
        },
        {
          id: "edpm3-u3-x1-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 7/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.875 }],
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
                working: "14/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14/16",
          },
        },
      ],
    },
  ],
};
