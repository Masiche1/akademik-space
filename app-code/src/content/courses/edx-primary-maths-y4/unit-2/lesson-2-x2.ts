import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edpm4-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: Multiplication, Division, Fractions and Decimals",
  goal: "I CAN answer multiplication, division, fractions and decimals exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication, Division, Fractions and Decimals",
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
      id: "edpm4-u2-exam2-concept",
      title: "Multiplication, Division, Fractions and Decimals — exam practice",
      skill:
        "Apply multiplication, division, fractions and decimals techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise multiplication, division, fractions and decimals in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for multiplication, division, fractions and decimals.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u2-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 129 − 29.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 100 }],
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
                working: "100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "edpm4-u2-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 11 × 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 33 }],
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
                working: "33",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "33",
          },
        },
        {
          id: "edpm4-u2-x2-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.125 }],
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
                working: "2/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/16",
          },
        },
        {
          id: "edpm4-u2-x2-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 7 m 8 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 708, unit: "cm" }],
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
                working: "708",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "708 cm",
          },
        },
        {
          id: "edpm4-u2-x2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle has sides of length 8 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32, unit: "cm" }],
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
                working: "8×4=32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32 cm",
          },
        },
        {
          id: "edpm4-u2-x2-q6",
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
          id: "edpm4-u2-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 2x = 22",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                reasoning: "Divide both sides by 2.",
                working: "22÷2=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 11",
          },
        },
        {
          id: "edpm4-u2-x2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 16 + 120.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 136 }],
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
                working: "136",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "136",
          },
        },
        {
          id: "edpm4-u2-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 11 × 9.",
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
