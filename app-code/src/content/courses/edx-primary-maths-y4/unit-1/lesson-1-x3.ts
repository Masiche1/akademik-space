import type { Lesson } from "../../../types.ts";

export const exam13: Lesson = {
  id: "edpm4-u1-exam3",
  code: "1-X3",
  title: "Exam Practice 3: Number: Place Value, Operations and Number Types",
  goal: "I CAN answer number: place value, operations and number types exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and Number Types",
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
      id: "edpm4-u1-exam3-concept",
      title: "Number: Place Value, Operations and Number Types — exam practice",
      skill:
        "Apply number: place value, operations and number types techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and number types in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and number types.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u1-x3-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 135 + 114.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 249 }],
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
                working: "249",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "249",
          },
        },
        {
          id: "edpm4-u1-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 9 ÷ 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "edpm4-u1-x3-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 4/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.5 }],
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
                working: "8/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/16",
          },
        },
        {
          id: "edpm4-u1-x3-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 2 m 5 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 205, unit: "cm" }],
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
                working: "205",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "205 cm",
          },
        },
        {
          id: "edpm4-u1-x3-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A octagon has sides of length 3 cm each. Work out its perimeter.",
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
                working: "3×8=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24 cm",
          },
        },
        {
          id: "edpm4-u1-x3-q6",
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
          id: "edpm4-u1-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 4x = 40",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "40÷4=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 10",
          },
        },
        {
          id: "edpm4-u1-x3-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 42 + 109.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 151 }],
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
                working: "151",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "151",
          },
        },
        {
          id: "edpm4-u1-x3-q9",
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
      ],
    },
  ],
};
