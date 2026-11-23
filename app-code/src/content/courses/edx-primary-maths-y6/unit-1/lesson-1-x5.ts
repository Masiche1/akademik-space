import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edpm6-u1-exam5",
  code: "1-X5",
  title: "Exam Practice 5: Number: Place Value, Operations and BIDMAS",
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
      id: "edpm6-u1-exam5-concept",
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
          id: "edpm6-u1-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 840 + 537.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1377 }],
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
                working: "1377",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1377",
          },
        },
        {
          id: "edpm6-u1-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 56 ÷ 8.",
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
          id: "edpm6-u1-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/5 × 2/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/5" },
              { id: "b", text: "2/6" },
              { id: "c", text: "3/5" },
              { id: "d", text: "8/20" },
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
                reasoning: "(4×2)/(5×4) = 8/20 = 2/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 2/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u1-x5-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 13 kg 349 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 13349, unit: "g" }],
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
                working: "13349",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13349 g",
          },
        },
        {
          id: "edpm6-u1-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 15 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 225, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "15×15=225",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "225 cm²",
          },
        },
        {
          id: "edpm6-u1-x5-q6",
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
      ],
    },
  ],
};
