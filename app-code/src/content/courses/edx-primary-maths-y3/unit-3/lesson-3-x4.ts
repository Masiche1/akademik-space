import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edpm3-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: Shape, Measure, Time, Money and Data",
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
      id: "edpm3-u3-exam4-concept",
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
          id: "edpm3-u3-x4-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 47 + 142.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 189 }],
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
                working: "189",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "189",
          },
        },
        {
          id: "edpm3-u3-x4-q2",
          difficulty: "foundation",
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
        {
          id: "edpm3-u3-x4-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/6 as an equivalent fraction with denominator 12.",
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
                working: "6/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/12",
          },
        },
        {
          id: "edpm3-u3-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 10 m 6 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1006, unit: "cm" }],
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
                working: "1006",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1006 cm",
          },
        },
        {
          id: "edpm3-u3-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pentagon has sides of length 6 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30, unit: "cm" }],
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
                working: "6×5=30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30 cm",
          },
        },
        {
          id: "edpm3-u3-x4-q6",
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
          id: "edpm3-u3-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve for x: 6x = 90",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 15 }],
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
                reasoning: "Divide both sides by 6.",
                working: "90÷6=15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 15",
          },
        },
        {
          id: "edpm3-u3-x4-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 158 − 141.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17 }],
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
                working: "17",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "edpm3-u3-x4-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 9 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 45 }],
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
                working: "45",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "45",
          },
        },
        {
          id: "edpm3-u3-x4-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 6/10 as an equivalent fraction with denominator 20.",
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
                working: "12/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12/20",
          },
        },
      ],
    },
  ],
};
