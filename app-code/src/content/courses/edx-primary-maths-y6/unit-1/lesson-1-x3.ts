import type { Lesson } from "../../../types.ts";

export const exam13: Lesson = {
  id: "edpm6-u1-exam3",
  code: "1-X3",
  title: "Exam Practice 3: Number: Place Value, Operations and BIDMAS",
  goal: "I CAN answer number: place value, operations and bidmas exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and BIDMAS",
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
      id: "edpm6-u1-exam3-concept",
      title: "Number: Place Value, Operations and BIDMAS — exam practice",
      skill:
        "Apply number: place value, operations and bidmas techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and bidmas in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and bidmas.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u1-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 795 + 158.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 953 }],
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
                working: "953",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "953",
          },
        },
        {
          id: "edpm6-u1-x3-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 6 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 24 }],
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
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "edpm6-u1-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/5 × 2/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7/25" },
              { id: "b", text: "6/25" },
              { id: "c", text: "6/26" },
              { id: "d", text: "31/25" },
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
                reasoning: "(3×2)/(5×5) = 6/25 = 6/25.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 6/25",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u1-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 16 kg 819 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16819, unit: "g" }],
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
                working: "16819",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16819 g",
          },
        },
        {
          id: "edpm6-u1-x3-q5",
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
          id: "edpm6-u1-x3-q6",
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
          id: "edpm6-u1-x3-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 8x + 20 = 116",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
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
                reasoning: "Subtract 20, then divide by 8.",
                working: "(116-20)÷8=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 12",
          },
        },
        {
          id: "edpm6-u1-x3-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 937 − 430.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 507 }],
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
                working: "507",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "507",
          },
        },
        {
          id: "edpm6-u1-x3-q9",
          difficulty: "challenge",
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
          id: "edpm6-u1-x3-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/2 × 4/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/1" },
              { id: "b", text: "5/1" },
              { id: "c", text: "4/1" },
              { id: "d", text: "24/6" },
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
                reasoning: "(6×4)/(2×3) = 24/6 = 4/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 4/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
