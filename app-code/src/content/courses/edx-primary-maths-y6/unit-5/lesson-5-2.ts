import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edpm6-u5-lesson-5-2",
  code: "5.2",
  title: "Indices and Order of Operations",
  goal: "I can indices and Order of Operations with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number Theory and Bidmas",
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
      term: "Factor",
      definition: "A number that divides exactly into another number.",
    },
    {
      term: "Multiple",
      definition: "The result of multiplying a number by an integer.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u5-lesson-5-2-c1",
      title: "Indices and Order of Operations — part 1",
      skill: "Apply indices and order of operations skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore indices and order of operations as part of number theory and bidmas. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
          },
          {
            heading: "How to succeed",
            body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Key idea",
            statement:
              "Apply the main methods and facts for indices and order of operations.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u5-l2c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 585 − 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 575 }],
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
                working: "575",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "575",
          },
        },
        {
          id: "edpm6-u5-l2c1q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 96 ÷ 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
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
                working: "12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "edpm6-u5-l2c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/2 × 3/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "3/12" },
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
                reasoning: "(1×3)/(2×6) = 3/12 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u5-l2c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 8 kg 837 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8837, unit: "g" }],
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
                working: "8837",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8837 g",
          },
        },
        {
          id: "edpm6-u5-l2c1q5",
          difficulty: "challenge",
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
      ],
    },
    {
      id: "edpm6-u5-lesson-5-2-c2",
      title: "Indices and Order of Operations — part 2",
      skill: "Apply indices and order of operations skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore indices and order of operations as part of number theory and bidmas. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
          },
          {
            heading: "How to succeed",
            body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Key idea",
            statement:
              "Apply the main methods and facts for indices and order of operations.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u5-l2c2q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 48 ÷ 12.",
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
          id: "edpm6-u5-l2c2q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/4 × 2/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/1" },
              { id: "b", text: "12/12" },
              { id: "c", text: "2/1" },
              { id: "d", text: "1/2" },
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
                reasoning: "(6×2)/(4×3) = 12/12 = 1/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u5-l2c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 16 kg 120 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16120, unit: "g" }],
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
                working: "16120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16120 g",
          },
        },
        {
          id: "edpm6-u5-l2c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 6 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "6×6=36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36 cm²",
          },
        },
        {
          id: "edpm6-u5-l2c2q5",
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
