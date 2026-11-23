import type { Lesson } from "../../../types.ts";

export const exam33: Lesson = {
  id: "edpm3-u3-exam3",
  code: "3-X3",
  title: "Exam Practice 3: Shape, Measure, Time, Money and Data",
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
      id: "edpm3-u3-exam3-concept",
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
          id: "edpm3-u3-x3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 190 + 110.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 300 }],
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
                working: "300",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "300",
          },
        },
        {
          id: "edpm3-u3-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 3 × 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30 }],
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
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "edpm3-u3-x3-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 5/10 as an equivalent fraction with denominator 20.",
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
                working: "10/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10/20",
          },
        },
        {
          id: "edpm3-u3-x3-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 5 m 1 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 501, unit: "cm" }],
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
                working: "501",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "501 cm",
          },
        },
        {
          id: "edpm3-u3-x3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A octagon has sides of length 6 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48, unit: "cm" }],
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
                working: "6×8=48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48 cm",
          },
        },
        {
          id: "edpm3-u3-x3-q6",
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
          id: "edpm3-u3-x3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 4x = 28",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                working: "28÷4=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm3-u3-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 82 + 51.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 133 }],
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
                working: "133",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "133",
          },
        },
        {
          id: "edpm3-u3-x3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 11 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88 }],
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
                working: "88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "88",
          },
        },
        {
          id: "edpm3-u3-x3-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 3/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.6 }],
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
                working: "6/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/10",
          },
        },
      ],
    },
  ],
};
