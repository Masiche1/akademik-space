import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edpm3-u6-lesson-6-1",
  code: "6.1",
  title: "Equivalent Fractions and Fractions of Amounts",
  goal: "I can equivalent Fractions and Fractions of Amounts with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Measure and Problem Solving",
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
      id: "edpm3-u6-lesson-6-1-c1",
      title: "Equivalent Fractions and Fractions of Amounts — part 1",
      skill:
        "Apply equivalent fractions and fractions of amounts skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore equivalent fractions and fractions of amounts as part of fractions, measure and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for equivalent fractions and fractions of amounts.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u6-l1c1q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 126 + 82.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 208 }],
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
                working: "208",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "208",
          },
        },
        {
          id: "edpm3-u6-l1c1q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 12 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact.",
                working: "60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "edpm3-u6-l1c1q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 2/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.3333333333333333 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "4/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/12",
          },
        },
        {
          id: "edpm3-u6-l1c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 9 m 2 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 902, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 m = 100 cm = 1000 mm.",
              },
            ],
            steps: [
              {
                reasoning: "1 m = 100 cm.",
                working: "902",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "902 cm",
          },
        },
        {
          id: "edpm3-u6-l1c1q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hexagon has sides of length 9 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Perimeter",
                statement: "Total distance around the edge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all the side lengths (or multiply side length by number of sides).",
                working: "9×6=54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54 cm",
          },
        },
      ],
    },
    {
      id: "edpm3-u6-lesson-6-1-c2",
      title: "Equivalent Fractions and Fractions of Amounts — part 2",
      skill:
        "Apply equivalent fractions and fractions of amounts skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore equivalent fractions and fractions of amounts as part of fractions, measure and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for equivalent fractions and fractions of amounts.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u6-l1c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 ÷ 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Think of the times-table fact.",
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "edpm3-u6-l1c2q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 3/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.375 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "6/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/16",
          },
        },
        {
          id: "edpm3-u6-l1c2q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ribbon is 5 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 504, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 m = 100 cm = 1000 mm.",
              },
            ],
            steps: [
              {
                reasoning: "1 m = 100 cm.",
                working: "504",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "504 cm",
          },
        },
        {
          id: "edpm3-u6-l1c2q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A octagon has sides of length 9 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 72, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Perimeter",
                statement: "Total distance around the edge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all the side lengths (or multiply side length by number of sides).",
                working: "9×8=72",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "72 cm",
          },
        },
        {
          id: "edpm3-u6-l1c2q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organised collection of data" },
              { id: "b", text: "A computer game" },
              { id: "c", text: "A type of cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Database = organised data.",
              },
            ],
            steps: [
              {
                reasoning: "Database = organised data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** An organised collection of data",
          },
        },
      ],
    },
  ],
};
