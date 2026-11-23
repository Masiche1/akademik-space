import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edpm5-u6-lesson-6-2",
  code: "6.2",
  title: "Volume, Capacity and Temperature",
  goal: "I can volume, Capacity and Temperature with confidence.",
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
      id: "edpm5-u6-lesson-6-2-c1",
      title: "Volume, Capacity and Temperature — part 1",
      skill: "Apply volume, capacity and temperature skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore volume, capacity and temperature as part of ratio, proportion and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for volume, capacity and temperature.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u6-l2c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 624 + 139.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 763 }],
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
                working: "763",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "763",
          },
        },
        {
          id: "edpm5-u6-l2c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 13 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 104 }],
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
                working: "104",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "104",
          },
        },
        {
          id: "edpm5-u6-l2c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/3 × 1/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/3" },
              { id: "b", text: "6/18" },
              { id: "c", text: "4/3" },
              { id: "d", text: "1/3" },
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
                reasoning: "(6×1)/(3×6) = 6/18 = 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 1/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u6-l2c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 2 kg 80 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2080, unit: "g" }],
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
                working: "2080",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2080 g",
          },
        },
        {
          id: "edpm5-u6-l2c1q5",
          difficulty: "core",
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
      ],
    },
    {
      id: "edpm5-u6-lesson-6-2-c2",
      title: "Volume, Capacity and Temperature — part 2",
      skill: "Apply volume, capacity and temperature skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore volume, capacity and temperature as part of ratio, proportion and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for volume, capacity and temperature.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u6-l2c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 8 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 56 }],
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
                working: "56",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "56",
          },
        },
        {
          id: "edpm5-u6-l2c2q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/5 × 5/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/3" },
              { id: "b", text: "4/3" },
              { id: "c", text: "2/3" },
              { id: "d", text: "5/15" },
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
                reasoning: "(1×5)/(5×3) = 5/15 = 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u6-l2c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 18 kg 57 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 18057, unit: "g" }],
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
                working: "18057",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18057 g",
          },
        },
        {
          id: "edpm5-u6-l2c2q4",
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
        {
          id: "edpm5-u6-l2c2q5",
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
