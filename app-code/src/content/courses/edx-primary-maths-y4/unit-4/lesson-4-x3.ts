import type { Lesson } from "../../../types.ts";

export const exam43: Lesson = {
  id: "edpm4-u4-exam3",
  code: "4-X3",
  title: "Exam Practice 3: Algebra, Angles and Problem Solving",
  goal: "I CAN answer algebra, angles and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Angles and Problem Solving",
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
      id: "edpm4-u4-exam3-concept",
      title: "Algebra, Angles and Problem Solving — exam practice",
      skill:
        "Apply algebra, angles and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, angles and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, angles and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm4-u4-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 199 + 59.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 258 }],
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
                working: "258",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "258",
          },
        },
        {
          id: "edpm4-u4-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 12 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48 }],
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
                working: "48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "edpm4-u4-x3-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 2/8 as an equivalent fraction with denominator 16.",
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
                working: "4/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/16",
          },
        },
        {
          id: "edpm4-u4-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 5 m 7 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 507, unit: "cm" }],
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
                working: "507",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "507 cm",
          },
        },
        {
          id: "edpm4-u4-x3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has sides of length 10 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 40, unit: "cm" }],
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
                working: "10×4=40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40 cm",
          },
        },
        {
          id: "edpm4-u4-x3-q6",
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
          id: "edpm4-u4-x3-q7",
          difficulty: "foundation",
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
          id: "edpm4-u4-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 66 + 114.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 180 }],
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
                working: "180",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "180",
          },
        },
        {
          id: "edpm4-u4-x3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 9 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 81 }],
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
                working: "81",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "81",
          },
        },
      ],
    },
  ],
};
