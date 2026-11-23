import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edpm1-u5-lesson-5-2",
  code: "5.2",
  title: "Doubling, Halving and Counting Patterns",
  goal: "I can doubling, Halving and Counting Patterns with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number Bonds and Quick Recall",
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
      id: "edpm1-u5-lesson-5-2-c1",
      title: "Doubling, Halving and Counting Patterns — part 1",
      skill:
        "Apply doubling, halving and counting patterns skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore doubling, halving and counting patterns as part of number bonds and quick recall. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for doubling, halving and counting patterns.",
          },
        ],
      },
      questions: [
        {
          id: "edpm1-u5-l2c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "14 − 3 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                working: "11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "edpm1-u5-l2c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 2 × 3?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                working: "6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "edpm1-u5-l2c1q3",
          difficulty: "foundation",
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
          id: "edpm1-u5-l2c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pencil is 18 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 180, unit: "mm" }],
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
                working: "180",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "180 mm",
          },
        },
        {
          id: "edpm1-u5-l2c1q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a pentagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "3" },
              { id: "c", text: "5" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "pentagon",
                statement: "5 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A pentagon has 5 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 5",
          },
        },
      ],
    },
    {
      id: "edpm1-u5-lesson-5-2-c2",
      title: "Doubling, Halving and Counting Patterns — part 2",
      skill:
        "Apply doubling, halving and counting patterns skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore doubling, halving and counting patterns as part of number bonds and quick recall. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for doubling, halving and counting patterns.",
          },
        ],
      },
      questions: [
        {
          id: "edpm1-u5-l2c2q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 9 × 7?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 63 }],
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
                working: "63",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "edpm1-u5-l2c2q2",
          difficulty: "foundation",
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
          id: "edpm1-u5-l2c2q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pencil is 12 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 120, unit: "mm" }],
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
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120 mm",
          },
        },
        {
          id: "edpm1-u5-l2c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a octagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "8" },
              { id: "c", text: "6" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "octagon",
                statement: "8 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A octagon has 8 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 8",
          },
        },
        {
          id: "edpm1-u5-l2c2q5",
          difficulty: "challenge",
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
