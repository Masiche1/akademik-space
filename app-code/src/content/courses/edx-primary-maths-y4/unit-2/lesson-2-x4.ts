import type { Lesson } from "../../../types.ts";

export const exam24: Lesson = {
  id: "edpm4-u2-exam4",
  code: "2-X4",
  title: "Exam Practice 4: Multiplication, Division, Fractions and Decimals",
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
      id: "edpm4-u2-exam4-concept",
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
          id: "edpm4-u2-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 164 + 106.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 270 }],
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
                working: "270",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "270",
          },
        },
        {
          id: "edpm4-u2-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 4 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 44 }],
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
                working: "44",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "44",
          },
        },
        {
          id: "edpm4-u2-x4-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.1 }],
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
                working: "2/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/20",
          },
        },
        {
          id: "edpm4-u2-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 13 m 5 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1305, unit: "cm" }],
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
                working: "1305",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1305 cm",
          },
        },
        {
          id: "edpm4-u2-x4-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pentagon has sides of length 5 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 25, unit: "cm" }],
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
                working: "5×5=25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25 cm",
          },
        },
        {
          id: "edpm4-u2-x4-q6",
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
          id: "edpm4-u2-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 8x = 72",
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
                reasoning: "Divide both sides by 8.",
                working: "72÷8=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 9",
          },
        },
        {
          id: "edpm4-u2-x4-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 44 + 134.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 178 }],
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
                working: "178",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "178",
          },
        },
        {
          id: "edpm4-u2-x4-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 88 ÷ 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                working: "11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11",
          },
        },
      ],
    },
  ],
};
