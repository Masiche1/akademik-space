import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edpm2-u6-lesson-6-2",
  code: "6.2",
  title: "Position, Direction and Turns",
  goal: "I can position, Direction and Turns with confidence.",
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
      id: "edpm2-u6-lesson-6-2-c1",
      title: "Position, Direction and Turns — part 1",
      skill: "Apply position, direction and turns skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore position, direction and turns as part of fractions, position and data. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for position, direction and turns.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u6-l2c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "14 + 5 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 19 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Addition",
                statement: "Combine or find the difference.",
              },
            ],
            steps: [
              {
                reasoning: "Add the two numbers.",
                working: "19",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "19",
          },
        },
        {
          id: "edpm2-u6-l2c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 7 × 6?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 42 }],
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
                working: "42",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "edpm2-u6-l2c1q3",
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
          id: "edpm2-u6-l2c1q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pencil is 14 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 140, unit: "mm" }],
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
                working: "140",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "140 mm",
          },
        },
        {
          id: "edpm2-u6-l2c1q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "triangle",
                statement: "3 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A triangle has 3 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 3",
          },
        },
      ],
    },
    {
      id: "edpm2-u6-lesson-6-2-c2",
      title: "Position, Direction and Turns — part 2",
      skill: "Apply position, direction and turns skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore position, direction and turns as part of fractions, position and data. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for position, direction and turns.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u6-l2c2q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 6 × 2?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 12 }],
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
                working: "12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "edpm2-u6-l2c2q2",
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
          id: "edpm2-u6-l2c2q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pencil is 11 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 110, unit: "mm" }],
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
                working: "110",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "110 mm",
          },
        },
        {
          id: "edpm2-u6-l2c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "triangle",
                statement: "3 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A triangle has 3 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 3",
          },
        },
        {
          id: "edpm2-u6-l2c2q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of names" },
              { id: "b", text: "A computer" },
              { id: "c", text: "A cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Data = information.",
              },
            ],
            steps: [
              { reasoning: "Data = information.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A list of names",
          },
        },
      ],
    },
  ],
};
