import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edpm5-u6-lesson-6-1",
  code: "6.1",
  title: "Ratios, Proportion and Percentages",
  goal: "I can ratios, Proportion and Percentages with confidence.",
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
      id: "edpm5-u6-lesson-6-1-c1",
      title: "Ratios, Proportion and Percentages — part 1",
      skill: "Apply ratios, proportion and percentages skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore ratios, proportion and percentages as part of ratio, proportion and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for ratios, proportion and percentages.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u6-l1c1q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 621 + 430.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1051 }],
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
                working: "1051",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1051",
          },
        },
        {
          id: "edpm5-u6-l1c1q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 15 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 90 }],
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
                working: "90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "90",
          },
        },
        {
          id: "edpm5-u6-l1c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 5/4 × 2/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/6" },
              { id: "b", text: "10/12" },
              { id: "c", text: "5/7" },
              { id: "d", text: "5/6" },
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
                reasoning: "(5×2)/(4×3) = 10/12 = 5/6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 5/6",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u6-l1c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 8 kg 578 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8578, unit: "g" }],
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
                working: "8578",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8578 g",
          },
        },
        {
          id: "edpm5-u6-l1c1q5",
          difficulty: "challenge",
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
      ],
    },
    {
      id: "edpm5-u6-lesson-6-1-c2",
      title: "Ratios, Proportion and Percentages — part 2",
      skill: "Apply ratios, proportion and percentages skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore ratios, proportion and percentages as part of ratio, proportion and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for ratios, proportion and percentages.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u6-l1c2q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 13 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 52 }],
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
                working: "52",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "52",
          },
        },
        {
          id: "edpm5-u6-l1c2q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/3 × 5/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/7" },
              { id: "b", text: "10/12" },
              { id: "c", text: "5/6" },
              { id: "d", text: "11/6" },
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
                reasoning: "(2×5)/(3×4) = 10/12 = 5/6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 5/6",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u6-l1c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 3 kg 863 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3863, unit: "g" }],
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
                working: "3863",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3863 g",
          },
        },
        {
          id: "edpm5-u6-l1c2q4",
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
          id: "edpm5-u6-l1c2q5",
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
