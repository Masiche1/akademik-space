import type { Lesson } from "../../../types.ts";

export const exam24: Lesson = {
  id: "edpm5-u2-exam4",
  code: "2-X4",
  title: "Exam Practice 4: Fractions, Decimals and Percentages",
  goal: "I CAN answer fractions, decimals and percentages exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Decimals and Percentages",
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
      id: "edpm5-u2-exam4-concept",
      title: "Fractions, Decimals and Percentages — exam practice",
      skill:
        "Apply fractions, decimals and percentages techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise fractions, decimals and percentages in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for fractions, decimals and percentages.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u2-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 915 − 511.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 404 }],
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
                working: "404",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "404",
          },
        },
        {
          id: "edpm5-u2-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 56 ÷ 14.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "edpm5-u2-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/3 × 3/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "1/5" },
              { id: "c", text: "5/4" },
              { id: "d", text: "2/4" },
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
                reasoning: "(1×3)/(3×4) = 3/12 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u2-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 2 kg 545 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2545, unit: "g" }],
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
                working: "2545",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2545 g",
          },
        },
        {
          id: "edpm5-u2-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 14 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 196, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "14×14=196",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "196 cm²",
          },
        },
        {
          id: "edpm5-u2-x4-q6",
          difficulty: "foundation",
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
          id: "edpm5-u2-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 8x + 15 = 39",
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
                reasoning: "Subtract 15, then divide by 8.",
                working: "(39-15)÷8=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm5-u2-x4-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 19 + 98.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 117 }],
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
                working: "117",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "117",
          },
        },
        {
          id: "edpm5-u2-x4-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 63 ÷ 9.",
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
      ],
    },
  ],
};
