import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edpm5-u6-lesson-6-3",
  code: "6.3",
  title: "Complex Problem Solving and Reasoning",
  goal: "I can complex Problem Solving and Reasoning with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Ratio, Proportion and Problem Solving",
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
      id: "edpm5-u6-lesson-6-3-c1",
      title: "Complex Problem Solving and Reasoning — part 1",
      skill:
        "Apply complex problem solving and reasoning skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore complex problem solving and reasoning as part of ratio, proportion and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for complex problem solving and reasoning.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u6-l3c1q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 970 − 251.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 719 }],
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
                working: "719",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "719",
          },
        },
        {
          id: "edpm5-u6-l3c1q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 8 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72 }],
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
                working: "72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72",
          },
        },
        {
          id: "edpm5-u6-l3c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/6 × 2/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/3" },
              { id: "b", text: "8/24" },
              { id: "c", text: "1/4" },
              { id: "d", text: "4/3" },
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
                reasoning: "(4×2)/(6×4) = 8/24 = 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u6-l3c1q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 14 kg 669 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 14669, unit: "g" }],
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
                working: "14669",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14669 g",
          },
        },
        {
          id: "edpm5-u6-l3c1q5",
          difficulty: "foundation",
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
      ],
    },
    {
      id: "edpm5-u6-lesson-6-3-c2",
      title: "Complex Problem Solving and Reasoning — part 2",
      skill:
        "Apply complex problem solving and reasoning skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore complex problem solving and reasoning as part of ratio, proportion and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for complex problem solving and reasoning.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u6-l3c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 126 ÷ 14.",
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
        {
          id: "edpm5-u6-l3c2q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/5 × 2/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/5" },
              { id: "b", text: "2/5" },
              { id: "c", text: "1/6" },
              { id: "d", text: "6/5" },
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
                reasoning: "(1×2)/(5×2) = 2/10 = 1/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u6-l3c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 13 kg 39 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 13039, unit: "g" }],
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
                working: "13039",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13039 g",
          },
        },
        {
          id: "edpm5-u6-l3c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 3 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "3×3=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 cm²",
          },
        },
        {
          id: "edpm5-u6-l3c2q5",
          difficulty: "foundation",
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
