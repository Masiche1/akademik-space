import type { Lesson } from "../../../types.ts";

export const exam11: Lesson = {
  id: "edpm5-u1-exam1",
  code: "1-X1",
  title: "Exam Practice 1: Number: Place Value, Operations and Number Types",
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
      id: "edpm5-u1-exam1-concept",
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
          id: "edpm5-u1-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 456 − 247.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 209 }],
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
                working: "209",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "209",
          },
        },
        {
          id: "edpm5-u1-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 8 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88 }],
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
                working: "88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "88",
          },
        },
        {
          id: "edpm5-u1-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/3 × 6/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9/5" },
              { id: "b", text: "4/5" },
              { id: "c", text: "5/5" },
              { id: "d", text: "4/6" },
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
                reasoning: "(2×6)/(3×5) = 12/15 = 4/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u1-x1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 20 kg 805 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20805, unit: "g" }],
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
                working: "20805",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20805 g",
          },
        },
        {
          id: "edpm5-u1-x1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 8 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "8×8=64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64 cm²",
          },
        },
        {
          id: "edpm5-u1-x1-q6",
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
          id: "edpm5-u1-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 9x + 14 = 68",
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
                reasoning: "Subtract 14, then divide by 9.",
                working: "(68-14)÷9=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "edpm5-u1-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 684 − 61.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 623 }],
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
                working: "623",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "623",
          },
        },
        {
          id: "edpm5-u1-x1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 14 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 98 }],
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
                working: "98",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "98",
          },
        },
      ],
    },
  ],
};
