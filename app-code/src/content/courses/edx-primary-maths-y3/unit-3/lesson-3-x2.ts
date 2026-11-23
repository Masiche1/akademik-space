import type { Lesson } from "../../../types.ts";

export const exam32: Lesson = {
  id: "edpm3-u3-exam2",
  code: "3-X2",
  title: "Exam Practice 2: Shape, Measure, Time, Money and Data",
  goal: "I CAN answer shape, measure, time, money and data exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Shape, Measure, Time, Money and Data",
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
      id: "edpm3-u3-exam2-concept",
      title: "Shape, Measure, Time, Money and Data — exam practice",
      skill:
        "Apply shape, measure, time, money and data techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise shape, measure, time, money and data in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for shape, measure, time, money and data.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u3-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 125 + 98.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 223 }],
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
                working: "223",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "223",
          },
        },
        {
          id: "edpm3-u3-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 7 × 6.",
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
          id: "edpm3-u3-x2-q3",
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
          id: "edpm3-u3-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 7 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 709, unit: "cm" }],
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
                working: "709",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "709 cm",
          },
        },
        {
          id: "edpm3-u3-x2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rectangle has sides of length 6 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 24, unit: "cm" }],
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
                working: "6×4=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24 cm",
          },
        },
        {
          id: "edpm3-u3-x2-q6",
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
          id: "edpm3-u3-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 8x = 32",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "32÷8=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 4",
          },
        },
        {
          id: "edpm3-u3-x2-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 158 + 41.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 199 }],
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
                working: "199",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "199",
          },
        },
        {
          id: "edpm3-u3-x2-q9",
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
          id: "edpm3-u3-x2-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 4/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.6666666666666666 }],
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
                working: "8/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/12",
          },
        },
      ],
    },
  ],
};
