import type { Lesson } from "../../../types.ts";

export const exam14: Lesson = {
  id: "edpm5-u1-exam4",
  code: "1-X4",
  title: "Exam Practice 4: Number: Place Value, Operations and Number Types",
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
      id: "edpm5-u1-exam4-concept",
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
          id: "edpm5-u1-x4-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 377 + 163.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 540 }],
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
                working: "540",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "540",
          },
        },
        {
          id: "edpm5-u1-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 13 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 156 }],
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
                working: "156",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "156",
          },
        },
        {
          id: "edpm5-u1-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/4 × 5/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/4" },
              { id: "b", text: "1/5" },
              { id: "c", text: "5/4" },
              { id: "d", text: "1/4" },
            ],
            correctChoiceId: "d",
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
                reasoning: "(1×5)/(4×5) = 5/20 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u1-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 20 kg 461 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20461, unit: "g" }],
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
                working: "20461",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20461 g",
          },
        },
        {
          id: "edpm5-u1-x4-q5",
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
          id: "edpm5-u1-x4-q6",
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
          id: "edpm5-u1-x4-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 2x + 12 = 34",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                reasoning: "Subtract 12, then divide by 2.",
                working: "(34-12)÷2=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 11",
          },
        },
        {
          id: "edpm5-u1-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 949 + 164.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1113 }],
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
                working: "1113",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1113",
          },
        },
        {
          id: "edpm5-u1-x4-q9",
          difficulty: "core",
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
