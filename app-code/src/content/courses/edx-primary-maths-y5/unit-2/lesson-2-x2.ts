import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edpm5-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: Fractions, Decimals and Percentages",
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
      id: "edpm5-u2-exam2-concept",
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
          id: "edpm5-u2-x2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 87 − 73.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 14 }],
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
                working: "14",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "edpm5-u2-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 15 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 165 }],
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
                working: "165",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "165",
          },
        },
        {
          id: "edpm5-u2-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/2 × 5/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/5" },
              { id: "b", text: "5/4" },
              { id: "c", text: "9/4" },
              { id: "d", text: "6/4" },
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
                reasoning: "(1×5)/(2×2) = 5/4 = 5/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 5/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u2-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 3 kg 101 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3101, unit: "g" }],
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
                working: "3101",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3101 g",
          },
        },
        {
          id: "edpm5-u2-x2-q5",
          difficulty: "core",
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
          id: "edpm5-u2-x2-q6",
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
          id: "edpm5-u2-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 5x + 9 = 44",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                reasoning: "Subtract 9, then divide by 5.",
                working: "(44-9)÷5=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm5-u2-x2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 706 + 719.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1425 }],
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
                working: "1425",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1425",
          },
        },
        {
          id: "edpm5-u2-x2-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 7 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 28 }],
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
                working: "28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "28",
          },
        },
      ],
    },
  ],
};
