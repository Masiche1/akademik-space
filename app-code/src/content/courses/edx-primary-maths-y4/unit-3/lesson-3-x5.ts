import type { Lesson } from "../../../types.ts";

export const exam35: Lesson = {
  id: "edpm4-u3-exam5",
  code: "3-X5",
  title: "Exam Practice 5: Geometry, Time and Statistics",
  goal: "I CAN answer geometry, time and statistics exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Geometry, Time and Statistics",
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
      id: "edpm4-u3-exam5-concept",
      title: "Geometry, Time and Statistics — exam practice",
      skill:
        "Apply geometry, time and statistics techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise geometry, time and statistics in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for geometry, time and statistics.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u3-x5-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 105 + 75.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 180 }],
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
                working: "180",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "180",
          },
        },
        {
          id: "edpm4-u3-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 110 ÷ 11.",
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
          id: "edpm4-u3-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 4/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.4 }],
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
                working: "8/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/20",
          },
        },
        {
          id: "edpm4-u3-x5-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 9 m 3 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 903, unit: "cm" }],
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
                working: "903",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "903 cm",
          },
        },
        {
          id: "edpm4-u3-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle has sides of length 12 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48, unit: "cm" }],
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
                working: "12×4=48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48 cm",
          },
        },
        {
          id: "edpm4-u3-x5-q6",
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
          id: "edpm4-u3-x5-q7",
          difficulty: "challenge",
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
          id: "edpm4-u3-x5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 146 + 52.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 198 }],
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
                working: "198",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "198",
          },
        },
        {
          id: "edpm4-u3-x5-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 80 ÷ 8.",
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
      ],
    },
  ],
};
