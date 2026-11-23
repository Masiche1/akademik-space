import type { Lesson } from "../../../types.ts";

export const exam42: Lesson = {
  id: "edpm4-u4-exam2",
  code: "4-X2",
  title: "Exam Practice 2: Algebra, Angles and Problem Solving",
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
      id: "edpm4-u4-exam2-concept",
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
          id: "edpm4-u4-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 80 + 112.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 192 }],
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
                working: "192",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "192",
          },
        },
        {
          id: "edpm4-u4-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 44 ÷ 4.",
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
        {
          id: "edpm4-u4-x2-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 1/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.2 }],
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
                working: "2/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/10",
          },
        },
        {
          id: "edpm4-u4-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 7 m 8 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 708, unit: "cm" }],
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
                working: "708",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "708 cm",
          },
        },
        {
          id: "edpm4-u4-x2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has sides of length 7 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 28, unit: "cm" }],
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
                working: "7×4=28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28 cm",
          },
        },
        {
          id: "edpm4-u4-x2-q6",
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
          id: "edpm4-u4-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve for x: 5x = 15",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                working: "15÷5=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm4-u4-x2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 158 + 56.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 214 }],
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
                working: "214",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "214",
          },
        },
        {
          id: "edpm4-u4-x2-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3 × 11.",
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
      ],
    },
  ],
};
