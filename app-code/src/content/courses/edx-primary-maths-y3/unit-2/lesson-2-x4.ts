import type { Lesson } from "../../../types.ts";

export const exam24: Lesson = {
  id: "edpm3-u2-exam4",
  code: "2-X4",
  title: "Exam Practice 4: Multiplication, Division and Fractions",
  goal: "I CAN answer multiplication, division and fractions exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication, Division and Fractions",
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
      id: "edpm3-u2-exam4-concept",
      title: "Multiplication, Division and Fractions — exam practice",
      skill:
        "Apply multiplication, division and fractions techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise multiplication, division and fractions in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for multiplication, division and fractions.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u2-x4-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 110 − 88.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 22 }],
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
                working: "22",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "22",
          },
        },
        {
          id: "edpm3-u2-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 4 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 28 }],
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
                working: "28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "edpm3-u2-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.375 }],
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
                working: "6/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/16",
          },
        },
        {
          id: "edpm3-u2-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 3 m 7 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 307, unit: "cm" }],
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
                working: "307",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "307 cm",
          },
        },
        {
          id: "edpm3-u2-x4-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hexagon has sides of length 6 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36, unit: "cm" }],
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
                working: "6×6=36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36 cm",
          },
        },
        {
          id: "edpm3-u2-x4-q6",
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
          id: "edpm3-u2-x4-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 8x = 104",
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
                reasoning: "Divide both sides by 8.",
                working: "104÷8=13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 13",
          },
        },
        {
          id: "edpm3-u2-x4-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 91 − 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 76 }],
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
                working: "76",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "76",
          },
        },
        {
          id: "edpm3-u2-x4-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 7 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 28 }],
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
                working: "28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "edpm3-u2-x4-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/4 as an equivalent fraction with denominator 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.25 }],
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
                working: "2/8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/8",
          },
        },
      ],
    },
  ],
};
