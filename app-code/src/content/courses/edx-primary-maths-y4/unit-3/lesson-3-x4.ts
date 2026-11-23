import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edpm4-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: Geometry, Time and Statistics",
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
      id: "edpm4-u3-exam4-concept",
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
          id: "edpm4-u3-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 186 − 34.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 152 }],
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
                working: "152",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "152",
          },
        },
        {
          id: "edpm4-u3-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 8 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32 }],
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
                working: "32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "edpm4-u3-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 2/5 as an equivalent fraction with denominator 10.",
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
                working: "4/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/10",
          },
        },
        {
          id: "edpm4-u3-x4-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 3 m 1 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 301, unit: "cm" }],
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
                working: "301",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "301 cm",
          },
        },
        {
          id: "edpm4-u3-x4-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hexagon has sides of length 11 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 66, unit: "cm" }],
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
                working: "11×6=66",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "66 cm",
          },
        },
        {
          id: "edpm4-u3-x4-q6",
          difficulty: "foundation",
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
          id: "edpm4-u3-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 7x = 21",
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
                reasoning: "Divide both sides by 7.",
                working: "21÷7=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm4-u3-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 117 − 96.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 21 }],
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
                working: "21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21",
          },
        },
        {
          id: "edpm4-u3-x4-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 7 × 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 21 }],
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
                working: "21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21",
          },
        },
      ],
    },
  ],
};
