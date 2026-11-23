import type { Lesson } from "../../../types.ts";

export const exam21: Lesson = {
  id: "edpm5-u2-exam1",
  code: "2-X1",
  title: "Exam Practice 1: Fractions, Decimals and Percentages",
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
      id: "edpm5-u2-exam1-concept",
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
          id: "edpm5-u2-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 634 − 252.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 382 }],
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
                working: "382",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "382",
          },
        },
        {
          id: "edpm5-u2-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 9 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 63 }],
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
                working: "63",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "edpm5-u2-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/6 × 1/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10/9" },
              { id: "b", text: "1/9" },
              { id: "c", text: "2/9" },
              { id: "d", text: "2/18" },
            ],
            correctChoiceId: "b",
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
                reasoning: "(2×1)/(6×3) = 2/18 = 1/9.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 1/9",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u2-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 5 kg 790 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5790, unit: "g" }],
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
                working: "5790",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5790 g",
          },
        },
        {
          id: "edpm5-u2-x1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 7 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 49, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "7×7=49",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "49 cm²",
          },
        },
        {
          id: "edpm5-u2-x1-q6",
          difficulty: "core",
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
          id: "edpm5-u2-x1-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 9x + 4 = 85",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                reasoning: "Subtract 4, then divide by 9.",
                working: "(85-4)÷9=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 9",
          },
        },
        {
          id: "edpm5-u2-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 203 + 173.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 376 }],
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
                working: "376",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "376",
          },
        },
        {
          id: "edpm5-u2-x1-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 14 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 154 }],
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
                working: "154",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "154",
          },
        },
      ],
    },
  ],
};
