import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edpm5-u5-lesson-5-3",
  code: "5.3",
  title: "Large Numbers and Negative Numbers",
  goal: "I can large Numbers and Negative Numbers with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Powers, Roots and Large Numbers",
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
      id: "edpm5-u5-lesson-5-3-c1",
      title: "Large Numbers and Negative Numbers — part 1",
      skill: "Apply large numbers and negative numbers skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore large numbers and negative numbers as part of powers, roots and large numbers. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for large numbers and negative numbers.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u5-l3c1q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 587 − 517.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 70 }],
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
                working: "70",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "70",
          },
        },
        {
          id: "edpm5-u5-l3c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 75 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "edpm5-u5-l3c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/6 × 2/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/6" },
              { id: "b", text: "1/7" },
              { id: "c", text: "1/6" },
              { id: "d", text: "7/6" },
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
                reasoning: "(2×2)/(6×4) = 4/24 = 1/6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 1/6",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u5-l3c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 2 kg 339 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2339, unit: "g" }],
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
                working: "2339",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2339 g",
          },
        },
        {
          id: "edpm5-u5-l3c1q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 4 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "4×4=16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 cm²",
          },
        },
      ],
    },
    {
      id: "edpm5-u5-lesson-5-3-c2",
      title: "Large Numbers and Negative Numbers — part 2",
      skill: "Apply large numbers and negative numbers skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore large numbers and negative numbers as part of powers, roots and large numbers. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for large numbers and negative numbers.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u5-l3c2q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 49 ÷ 7.",
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
          id: "edpm5-u5-l3c2q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 5/6 × 2/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11/6" },
              { id: "b", text: "6/6" },
              { id: "c", text: "5/6" },
              { id: "d", text: "5/7" },
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
                reasoning: "(5×2)/(6×2) = 10/12 = 5/6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 5/6",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u5-l3c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 12 kg 314 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12314, unit: "g" }],
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
                working: "12314",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12314 g",
          },
        },
        {
          id: "edpm5-u5-l3c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 10 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 100, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "10×10=100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100 cm²",
          },
        },
        {
          id: "edpm5-u5-l3c2q5",
          difficulty: "foundation",
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
      ],
    },
  ],
};
