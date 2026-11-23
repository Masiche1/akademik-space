import type { Lesson } from "../../../types.ts";

export const exam35: Lesson = {
  id: "edpm3-u3-exam5",
  code: "3-X5",
  title: "Exam Practice 5: Shape, Measure, Time, Money and Data",
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
      id: "edpm3-u3-exam5-concept",
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
          id: "edpm3-u3-x5-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 42 + 71.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 113 }],
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
                working: "113",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "113",
          },
        },
        {
          id: "edpm3-u3-x5-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 9 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72 }],
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
                working: "72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72",
          },
        },
        {
          id: "edpm3-u3-x5-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 9/10 as an equivalent fraction with denominator 20.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.9 }],
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
                working: "18/20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18/20",
          },
        },
        {
          id: "edpm3-u3-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 15 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1509, unit: "cm" }],
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
                working: "1509",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1509 cm",
          },
        },
        {
          id: "edpm3-u3-x5-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A octagon has sides of length 11 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88, unit: "cm" }],
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
                working: "11×8=88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "88 cm",
          },
        },
        {
          id: "edpm3-u3-x5-q6",
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
      ],
    },
  ],
};
