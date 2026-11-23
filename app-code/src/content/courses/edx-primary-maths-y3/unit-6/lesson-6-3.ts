import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edpm3-u6-lesson-6-3",
  code: "6.3",
  title: "Multi-Step Word Problems and Reasoning",
  goal: "I can multi-Step Word Problems and Reasoning with confidence.",
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
      id: "edpm3-u6-lesson-6-3-c1",
      title: "Multi-Step Word Problems and Reasoning — part 1",
      skill:
        "Apply multi-step word problems and reasoning skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore multi-step word problems and reasoning as part of fractions, measure and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for multi-step word problems and reasoning.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u6-l3c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 127 − 122.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "edpm3-u6-l3c1q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 6 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54 }],
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
                working: "54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54",
          },
        },
        {
          id: "edpm3-u6-l3c1q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 1/8 as an equivalent fraction with denominator 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.125 }],
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
                working: "2/16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2/16",
          },
        },
        {
          id: "edpm3-u6-l3c1q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ribbon is 3 m 9 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 309, unit: "cm" }],
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
                working: "309",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "309 cm",
          },
        },
        {
          id: "edpm3-u6-l3c1q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A octagon has sides of length 4 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32, unit: "cm" }],
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
                working: "4×8=32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32 cm",
          },
        },
      ],
    },
    {
      id: "edpm3-u6-lesson-6-3-c2",
      title: "Multi-Step Word Problems and Reasoning — part 2",
      skill:
        "Apply multi-step word problems and reasoning skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore multi-step word problems and reasoning as part of fractions, measure and problem solving. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for multi-step word problems and reasoning.",
          },
        ],
      },
      questions: [
        {
          id: "edpm3-u6-l3c2q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 4 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20 }],
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
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "edpm3-u6-l3c2q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 4/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.6666666666666666 }],
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
                working: "8/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8/12",
          },
        },
        {
          id: "edpm3-u6-l3c2q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 14 m 6 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1406, unit: "cm" }],
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
                working: "1406",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1406 cm",
          },
        },
        {
          id: "edpm3-u6-l3c2q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A hexagon has sides of length 3 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 18, unit: "cm" }],
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
                working: "3×6=18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18 cm",
          },
        },
        {
          id: "edpm3-u6-l3c2q5",
          difficulty: "challenge",
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
