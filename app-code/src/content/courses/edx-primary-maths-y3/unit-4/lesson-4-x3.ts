import type { Lesson } from "../../../types.ts";

export const exam43: Lesson = {
  id: "edpm3-u4-exam3",
  code: "4-X3",
  title: "Exam Practice 3: Algebra, Patterns and Problem Solving",
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
      id: "edpm3-u4-exam3-concept",
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
          id: "edpm3-u4-x3-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 148 + 115.",
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
          id: "edpm3-u4-x3-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 63 }],
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
                working: "63",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "edpm3-u4-x3-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/4 as an equivalent fraction with denominator 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.75 }],
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
                working: "6/8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/8",
          },
        },
        {
          id: "edpm3-u4-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 4 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 404, unit: "cm" }],
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
                working: "404",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "404 cm",
          },
        },
        {
          id: "edpm3-u4-x3-q5",
          difficulty: "core",
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
          id: "edpm3-u4-x3-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'filter' do to data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows only matching items" },
              { id: "b", text: "Deletes all data" },
              { id: "c", text: "Sorts alphabetically" },
              { id: "d", text: "Prints data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Filter = select subset.",
              },
            ],
            steps: [
              { reasoning: "Filter = select subset.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Shows only matching items",
          },
        },
        {
          id: "edpm3-u4-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 7x = 63",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                working: "63÷7=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 9",
          },
        },
        {
          id: "edpm3-u4-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 149 − 94.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 55 }],
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
                working: "55",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "55",
          },
        },
        {
          id: "edpm3-u4-x3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 70 ÷ 7.",
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
          id: "edpm3-u4-x3-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 5/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.625 }],
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
                working: "10/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10/16",
          },
        },
      ],
    },
  ],
};
