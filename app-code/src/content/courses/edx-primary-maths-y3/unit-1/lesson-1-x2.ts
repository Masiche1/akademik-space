import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edpm3-u1-exam2",
  code: "1-X2",
  title:
    "Exam Practice 2: Number: Place Value and Addition/Subtraction to 1000",
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
      id: "edpm3-u1-exam2-concept",
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
          id: "edpm3-u1-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 23 + 150.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 173 }],
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
                working: "173",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "173",
          },
        },
        {
          id: "edpm3-u1-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 4 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16 }],
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
                working: "16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "edpm3-u1-x2-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 7/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.7 }],
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
                working: "14/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14/20",
          },
        },
        {
          id: "edpm3-u1-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 5 m 0 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 500, unit: "cm" }],
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
                working: "500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "500 cm",
          },
        },
        {
          id: "edpm3-u1-x2-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A octagon has sides of length 10 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 80, unit: "cm" }],
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
                working: "10×8=80",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 cm",
          },
        },
        {
          id: "edpm3-u1-x2-q6",
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
          id: "edpm3-u1-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 9x = 99",
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
                reasoning: "Divide both sides by 9.",
                working: "99÷9=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 11",
          },
        },
        {
          id: "edpm3-u1-x2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 147 + 72.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 219 }],
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
                working: "219",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "219",
          },
        },
        {
          id: "edpm3-u1-x2-q9",
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
        {
          id: "edpm3-u1-x2-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 4/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.8 }],
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
                working: "8/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/10",
          },
        },
      ],
    },
  ],
};
