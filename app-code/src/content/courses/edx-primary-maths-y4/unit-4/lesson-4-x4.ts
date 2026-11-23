import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpm4-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Algebra, Angles and Problem Solving",
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
      id: "edpm4-u4-exam4-concept",
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
          id: "edpm4-u4-x4-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 96 + 107.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 203 }],
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
                working: "203",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "203",
          },
        },
        {
          id: "edpm4-u4-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3 × 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30 }],
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
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "edpm4-u4-x4-q3",
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
          id: "edpm4-u4-x4-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 14 m 5 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1405, unit: "cm" }],
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
                working: "1405",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1405 cm",
          },
        },
        {
          id: "edpm4-u4-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A octagon has sides of length 6 cm each. Work out its perimeter.",
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
                working: "6×8=48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48 cm",
          },
        },
        {
          id: "edpm4-u4-x4-q6",
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
          id: "edpm4-u4-x4-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 3x = 21",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                reasoning: "Divide both sides by 3.",
                working: "21÷3=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm4-u4-x4-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 133 − 90.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 43 }],
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
                working: "43",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "43",
          },
        },
        {
          id: "edpm4-u4-x4-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 99 }],
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
                working: "99",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "99",
          },
        },
      ],
    },
  ],
};
