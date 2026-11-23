import type { Lesson } from "../../../types.ts";

export const exam41: Lesson = {
  id: "edpm5-u4-exam1",
  code: "4-X1",
  title: "Exam Practice 1: Algebra, Fractions and Problem Solving",
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
      id: "edpm5-u4-exam1-concept",
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
          id: "edpm5-u4-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 948 + 576.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1524 }],
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
                working: "1524",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1524",
          },
        },
        {
          id: "edpm5-u4-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 12 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 144 }],
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
                working: "144",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "144",
          },
        },
        {
          id: "edpm5-u4-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/4 × 1/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/16" },
              { id: "b", text: "2/16" },
              { id: "c", text: "1/17" },
              { id: "d", text: "17/16" },
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
                reasoning: "(1×1)/(4×4) = 1/16 = 1/16.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/16",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u4-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 19 kg 433 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 19433, unit: "g" }],
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
                working: "19433",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "19433 g",
          },
        },
        {
          id: "edpm5-u4-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 12 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 144, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "12×12=144",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "144 cm²",
          },
        },
        {
          id: "edpm5-u4-x1-q6",
          difficulty: "core",
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
          id: "edpm5-u4-x1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 7x + 6 = 76",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                reasoning: "Subtract 6, then divide by 7.",
                working: "(76-6)÷7=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 10",
          },
        },
        {
          id: "edpm5-u4-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 969 + 338.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1307 }],
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
                working: "1307",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1307",
          },
        },
        {
          id: "edpm5-u4-x1-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 64 ÷ 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8 }],
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
                working: "8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
      ],
    },
  ],
};
