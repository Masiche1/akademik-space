import type { Lesson } from "../../../types.ts";

export const exam42: Lesson = {
  id: "edpm5-u4-exam2",
  code: "4-X2",
  title: "Exam Practice 2: Algebra, Fractions and Problem Solving",
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
      id: "edpm5-u4-exam2-concept",
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
          id: "edpm5-u4-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 623 − 421.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 202 }],
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
                working: "202",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "202",
          },
        },
        {
          id: "edpm5-u4-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 91 ÷ 13.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact or short division.",
                working: "7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "edpm5-u4-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/3 × 4/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/3" },
              { id: "b", text: "5/3" },
              { id: "c", text: "24/18" },
              { id: "d", text: "7/3" },
            ],
            correctChoiceId: "a",
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
                reasoning: "(6×4)/(3×6) = 24/18 = 4/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 4/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u4-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 17 kg 779 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17779, unit: "g" }],
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
                working: "17779",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17779 g",
          },
        },
        {
          id: "edpm5-u4-x2-q5",
          difficulty: "foundation",
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
          id: "edpm5-u4-x2-q6",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between data and information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Information is data with meaning/context" },
              { id: "b", text: "They are the same" },
              { id: "c", text: "Data is always numbers" },
              { id: "d", text: "Information is always text" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Data → processed → information.",
              },
            ],
            steps: [
              {
                reasoning: "Data → processed → information.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Information is data with meaning/context",
          },
        },
        {
          id: "edpm5-u4-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 4x + 18 = 42",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                reasoning: "Subtract 18, then divide by 4.",
                working: "(42-18)÷4=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "edpm5-u4-x2-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 552 + 737.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1289 }],
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
                working: "1289",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1289",
          },
        },
        {
          id: "edpm5-u4-x2-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 135 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact or short division.",
                working: "9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
      ],
    },
  ],
};
