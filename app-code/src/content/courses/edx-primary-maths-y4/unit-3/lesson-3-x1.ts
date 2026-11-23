import type { Lesson } from "../../../types.ts";

export const exam31: Lesson = {
  id: "edpm4-u3-exam1",
  code: "3-X1",
  title: "Exam Practice 1: Geometry, Time and Statistics",
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
      id: "edpm4-u3-exam1-concept",
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
          id: "edpm4-u3-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 192 − 77.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 115 }],
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
                working: "115",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "115",
          },
        },
        {
          id: "edpm4-u3-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 42 }],
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
                working: "42",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "edpm4-u3-x1-q3",
          difficulty: "core",
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
          id: "edpm4-u3-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 4 m 6 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 406, unit: "cm" }],
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
                working: "406",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "406 cm",
          },
        },
        {
          id: "edpm4-u3-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has sides of length 11 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 44, unit: "cm" }],
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
                working: "11×4=44",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "44 cm",
          },
        },
        {
          id: "edpm4-u3-x1-q6",
          difficulty: "core",
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
          id: "edpm4-u3-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 5x = 15",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                working: "15÷5=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm4-u3-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 41 − 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 35 }],
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
                working: "35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "edpm4-u3-x1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 11 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 77 }],
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
                working: "77",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "77",
          },
        },
      ],
    },
  ],
};
