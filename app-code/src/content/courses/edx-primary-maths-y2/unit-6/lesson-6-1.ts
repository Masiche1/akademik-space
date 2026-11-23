import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edpm2-u6-lesson-6-1",
  code: "6.1",
  title: "Halves, Quarters and Thirds",
  goal: "I can halves, Quarters and Thirds with confidence.",
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
      id: "edpm2-u6-lesson-6-1-c1",
      title: "Halves, Quarters and Thirds — part 1",
      skill: "Apply halves, quarters and thirds skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore halves, quarters and thirds as part of fractions, position and data. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for halves, quarters and thirds.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u6-l1c1q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "14 + 9 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 23 }],
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
                working: "23",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "23",
          },
        },
        {
          id: "edpm2-u6-l1c1q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 × 4?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 40 }],
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
                working: "40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "edpm2-u6-l1c1q3",
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
          id: "edpm2-u6-l1c1q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pencil is 7 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 70, unit: "mm" }],
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
                working: "70",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "70 mm",
          },
        },
        {
          id: "edpm2-u6-l1c1q5",
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
      id: "edpm2-u6-lesson-6-1-c2",
      title: "Halves, Quarters and Thirds — part 2",
      skill: "Apply halves, quarters and thirds skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore halves, quarters and thirds as part of fractions, position and data. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for halves, quarters and thirds.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u6-l1c2q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 7 × 5?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 35 }],
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
                working: "35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "edpm2-u6-l1c2q2",
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
          id: "edpm2-u6-l1c2q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pencil is 8 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 80, unit: "mm" }],
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
                working: "80",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 mm",
          },
        },
        {
          id: "edpm2-u6-l1c2q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a hexagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "hexagon",
                statement: "6 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A hexagon has 6 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 6",
          },
        },
        {
          id: "edpm2-u6-l1c2q5",
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
