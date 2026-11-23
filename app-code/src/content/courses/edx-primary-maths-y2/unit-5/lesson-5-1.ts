import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edpm2-u5-lesson-5-1",
  code: "5.1",
  title: "The 3, 4 and 8 Times Tables",
  goal: "I can the 3, 4 and 8 Times Tables with confidence.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication and Division Facts",
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
      id: "edpm2-u5-lesson-5-1-c1",
      title: "The 3, 4 and 8 Times Tables — part 1",
      skill: "Apply the 3, 4 and 8 times tables skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore the 3, 4 and 8 times tables as part of multiplication and division facts. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for the 3, 4 and 8 times tables.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u5-l1c1q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "14 + 7 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 21 }],
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
                working: "21",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21",
          },
        },
        {
          id: "edpm2-u5-l1c1q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 10 × 2?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20 }],
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
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "edpm2-u5-l1c1q3",
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
          id: "edpm2-u5-l1c1q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pencil is 13 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 130, unit: "mm" }],
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
                working: "130",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "130 mm",
          },
        },
        {
          id: "edpm2-u5-l1c1q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a hexagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "3" },
              { id: "c", text: "5" },
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
      ],
    },
    {
      id: "edpm2-u5-lesson-5-1-c2",
      title: "The 3, 4 and 8 Times Tables — part 2",
      skill: "Apply the 3, 4 and 8 times tables skills and knowledge.",
      lesson: {
        sections: [
          {
            heading: "What you will learn",
            body: "In this lesson you will explore the 3, 4 and 8 times tables as part of multiplication and division facts. You will learn the key ideas, see worked examples and then answer questions to check your understanding.",
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
              "Apply the main methods and facts for the 3, 4 and 8 times tables.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u5-l1c2q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3 × 3?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9 }],
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
                working: "9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "edpm2-u5-l1c2q2",
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
          id: "edpm2-u5-l1c2q3",
          difficulty: "core",
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
          id: "edpm2-u5-l1c2q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a octagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "8" },
              { id: "c", text: "4" },
              { id: "d", text: "3" },
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
          id: "edpm2-u5-l1c2q5",
          difficulty: "core",
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
