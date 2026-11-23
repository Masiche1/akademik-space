import type { Lesson } from "../../../types.ts";

export const exam23: Lesson = {
  id: "edpm4-u2-exam3",
  code: "2-X3",
  title: "Exam Practice 3: Multiplication, Division, Fractions and Decimals",
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
      id: "edpm4-u2-exam3-concept",
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
          id: "edpm4-u2-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 125 + 139.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 264 }],
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
                working: "264",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "264",
          },
        },
        {
          id: "edpm4-u2-x3-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 42 ÷ 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                working: "7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "edpm4-u2-x3-q3",
          difficulty: "foundation",
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
          id: "edpm4-u2-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 10 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1004, unit: "cm" }],
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
                working: "1004",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1004 cm",
          },
        },
        {
          id: "edpm4-u2-x3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hexagon has sides of length 12 cm each. Work out its perimeter.",
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
                working: "12×6=72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72 cm",
          },
        },
        {
          id: "edpm4-u2-x3-q6",
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
          id: "edpm4-u2-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 5x = 65",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 13 }],
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
                working: "65÷5=13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 13",
          },
        },
        {
          id: "edpm4-u2-x3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 144 + 31.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 175 }],
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
                working: "175",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "175",
          },
        },
        {
          id: "edpm4-u2-x3-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 64 ÷ 8.",
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
      ],
    },
  ],
};
