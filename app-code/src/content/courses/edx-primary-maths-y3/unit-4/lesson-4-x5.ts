import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edpm3-u4-exam5",
  code: "4-X5",
  title: "Exam Practice 5: Algebra, Patterns and Problem Solving",
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
      id: "edpm3-u4-exam5-concept",
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
          id: "edpm3-u4-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 134 − 46.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88 }],
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
                working: "88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "88",
          },
        },
        {
          id: "edpm3-u4-x5-q2",
          difficulty: "foundation",
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
          id: "edpm3-u4-x5-q3",
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
          id: "edpm3-u4-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 8 m 7 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 807, unit: "cm" }],
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
                working: "807",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "807 cm",
          },
        },
        {
          id: "edpm3-u4-x5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pentagon has sides of length 7 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 35, unit: "cm" }],
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
                working: "7×5=35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35 cm",
          },
        },
        {
          id: "edpm3-u4-x5-q6",
          difficulty: "foundation",
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
