import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edpm5-u4-exam5",
  code: "4-X5",
  title: "Exam Practice 5: Algebra, Fractions and Problem Solving",
  goal: "I CAN answer algebra, fractions and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Fractions and Problem Solving",
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
      id: "edpm5-u4-exam5-concept",
      title: "Algebra, Fractions and Problem Solving — exam practice",
      skill:
        "Apply algebra, fractions and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, fractions and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, fractions and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u4-x5-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 977 + 29.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1006 }],
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
                working: "1006",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1006",
          },
        },
        {
          id: "edpm5-u4-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 8 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Partition method.",
              },
            ],
            steps: [
              {
                reasoning: "Partition and multiply, or use a known fact.",
                working: "32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "edpm5-u4-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/3 × 4/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8/4" },
              { id: "b", text: "24/9" },
              { id: "c", text: "8/3" },
              { id: "d", text: "11/3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction multiplication",
                statement:
                  "Multiply numerators and denominators; simplify by common factors.",
              },
            ],
            steps: [
              {
                reasoning: "(6×4)/(3×3) = 24/9 = 8/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 8/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u4-x5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 12 kg 848 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12848, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 kg = 1000 g; 1 l = 1000 ml.",
              },
            ],
            steps: [
              {
                reasoning: "1 kg = 1000 g.",
                working: "12848",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12848 g",
          },
        },
        {
          id: "edpm5-u4-x5-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 9 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 81, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "9×9=81",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "81 cm²",
          },
        },
        {
          id: "edpm5-u4-x5-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why use a spreadsheet for data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can calculate and sort automatically" },
              { id: "b", text: "It looks nice" },
              { id: "c", text: "It is free" },
              { id: "d", text: "It is faster than paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Spreadsheets automate calculations.",
              },
            ],
            steps: [
              {
                reasoning: "Spreadsheets automate calculations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** It can calculate and sort automatically",
          },
        },
        {
          id: "edpm5-u4-x5-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 4x + 3 = 15",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Linear equation",
                statement: "Inverse operations in reverse order.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract 3, then divide by 4.",
                working: "(15-3)÷4=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm5-u4-x5-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 605 + 611.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1216 }],
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
                working: "1216",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1216",
          },
        },
      ],
    },
  ],
};
