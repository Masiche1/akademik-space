import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edpm6-u5-lesson-5-1",
  code: "5.1",
  title: "Prime Factorisation, HCF and LCM",
  goal: "I can prime Factorisation, HCF and LCM with confidence.",
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
      id: "edpm6-u5-lesson-5-1-c1",
      title: "Prime Factorisation, HCF and LCM — part 1",
      skill: "Apply prime factorisation, hcf and lcm skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore prime factorisation, hcf and lcm as part of number theory and bidmas. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for prime factorisation, hcf and lcm.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u5-l1c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 582 + 302.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 884 }],
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
                working: "884",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "884",
          },
        },
        {
          id: "edpm6-u5-l1c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 130 ÷ 13.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "edpm6-u5-l1c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/3 × 4/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/2" },
              { id: "b", text: "4/1" },
              { id: "c", text: "24/6" },
              { id: "d", text: "5/1" },
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
                reasoning: "(6×4)/(3×2) = 24/6 = 4/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u5-l1c1q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 14 kg 335 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 14335, unit: "g" }],
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
                working: "14335",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14335 g",
          },
        },
        {
          id: "edpm6-u5-l1c1q5",
          difficulty: "core",
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
      id: "edpm6-u5-lesson-5-1-c2",
      title: "Prime Factorisation, HCF and LCM — part 2",
      skill: "Apply prime factorisation, hcf and lcm skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore prime factorisation, hcf and lcm as part of number theory and bidmas. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for prime factorisation, hcf and lcm.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u5-l1c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 150 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "edpm6-u5-l1c2q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/2 × 2/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "2/8" },
              { id: "c", text: "2/4" },
              { id: "d", text: "5/4" },
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
                reasoning: "(1×2)/(2×4) = 2/8 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u5-l1c2q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 2 kg 927 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2927, unit: "g" }],
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
                working: "2927",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2927 g",
          },
        },
        {
          id: "edpm6-u5-l1c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 14 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 196, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "14×14=196",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "196 cm²",
          },
        },
        {
          id: "edpm6-u5-l1c2q5",
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
