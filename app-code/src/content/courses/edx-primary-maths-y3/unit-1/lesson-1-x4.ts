import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edpm3-u1-exam4",
  code: "1-X4",
  title:
    "Exam Practice 4: Number: Place Value and Addition/Subtraction to 1000",
  goal: "I CAN answer number: place value and addition/subtraction to 1000 exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value and Addition/Subtraction to 1000",
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
      id: "edpm3-u1-exam4-concept",
      title:
        "Number: Place Value and Addition/Subtraction to 1000 — exam practice",
      skill:
        "Apply number: place value and addition/subtraction to 1000 techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value and addition/subtraction to 1000 in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value and addition/subtraction to 1000.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u1-x4-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 21 + 77.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 98 }],
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
                working: "98",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "98",
          },
        },
        {
          id: "edpm3-u1-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 32 ÷ 4.",
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
          id: "edpm3-u1-x4-q3",
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
          id: "edpm3-u1-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 12 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1209, unit: "cm" }],
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
                working: "1209",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1209 cm",
          },
        },
        {
          id: "edpm3-u1-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A octagon has sides of length 9 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72, unit: "cm" }],
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
                working: "9×8=72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72 cm",
          },
        },
        {
          id: "edpm3-u1-x4-q6",
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
          id: "edpm3-u1-x4-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 4x = 36",
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
                reasoning: "Divide both sides by 4.",
                working: "36÷4=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 9",
          },
        },
        {
          id: "edpm3-u1-x4-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 158 − 89.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 69 }],
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
                working: "69",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "69",
          },
        },
        {
          id: "edpm3-u1-x4-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 36 ÷ 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                working: "9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "edpm3-u1-x4-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 1/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.16666666666666666 }],
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
                working: "2/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/12",
          },
        },
      ],
    },
  ],
};
