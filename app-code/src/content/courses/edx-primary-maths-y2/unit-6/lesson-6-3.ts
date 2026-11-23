import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edpm2-u6-lesson-6-3",
  code: "6.3",
  title: "Reading and Drawing Simple Graphs",
  goal: "I can reading and Drawing Simple Graphs with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Position and Data",
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
      id: "edpm2-u6-lesson-6-3-c1",
      title: "Reading and Drawing Simple Graphs — part 1",
      skill: "Apply reading and drawing simple graphs skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore reading and drawing simple graphs as part of fractions, position and data. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for reading and drawing simple graphs.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u6-l3c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "14 − 13 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subtraction",
                statement: "Combine or find the difference.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the smaller from the larger.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "edpm2-u6-l3c1q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 4 × 8?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 32 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Repeated addition / times-table fact.",
              },
            ],
            steps: [
              {
                reasoning: "Count in steps or use a known times-table fact.",
                working: "32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "edpm2-u6-l3c1q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction shows one half?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1/3" },
              { id: "c", text: "2/3" },
              { id: "d", text: "1/4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fraction",
                statement: "Part of a whole.",
              },
            ],
            steps: [
              {
                reasoning: "Half means split into 2 equal parts, take 1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/2",
          },
        },
        {
          id: "edpm2-u6-l3c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pencil is 3 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30, unit: "mm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric units",
                statement: "1 cm = 10 mm; 1 m = 100 cm.",
              },
            ],
            steps: [
              {
                reasoning: "1 cm = 10 mm, so multiply by 10.",
                working: "30",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30 mm",
          },
        },
        {
          id: "edpm2-u6-l3c1q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "3" },
              { id: "c", text: "7" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "square",
                statement: "4 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A square has 4 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 4",
          },
        },
      ],
    },
    {
      id: "edpm2-u6-lesson-6-3-c2",
      title: "Reading and Drawing Simple Graphs — part 2",
      skill: "Apply reading and drawing simple graphs skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore reading and drawing simple graphs as part of fractions, position and data. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for reading and drawing simple graphs.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u6-l3c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 6 × 8?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 48 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Repeated addition / times-table fact.",
              },
            ],
            steps: [
              {
                reasoning: "Count in steps or use a known times-table fact.",
                working: "48",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "edpm2-u6-l3c2q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction shows one half?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1/3" },
              { id: "c", text: "2/3" },
              { id: "d", text: "1/4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fraction",
                statement: "Part of a whole.",
              },
            ],
            steps: [
              {
                reasoning: "Half means split into 2 equal parts, take 1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/2",
          },
        },
        {
          id: "edpm2-u6-l3c2q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pencil is 15 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 150, unit: "mm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric units",
                statement: "1 cm = 10 mm; 1 m = 100 cm.",
              },
            ],
            steps: [
              {
                reasoning: "1 cm = 10 mm, so multiply by 10.",
                working: "150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "150 mm",
          },
        },
        {
          id: "edpm2-u6-l3c2q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "square",
                statement: "4 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A square has 4 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 4",
          },
        },
        {
          id: "edpm2-u6-l3c2q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do you sort data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Put it in order" },
              { id: "b", text: "Delete it" },
              { id: "c", text: "Hide it" },
              { id: "d", text: "Copy it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Sort = arrange in order.",
              },
            ],
            steps: [
              {
                reasoning: "Sort = arrange in order.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Put it in order",
          },
        },
      ],
    },
  ],
};
