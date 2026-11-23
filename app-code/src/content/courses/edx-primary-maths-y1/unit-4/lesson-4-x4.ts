import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpm1-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Patterns, Problem Solving and Data",
  goal: "I CAN answer patterns, problem solving and data exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Patterns, Problem Solving and Data",
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
      term: "Mean",
      definition:
        "The average: sum of all values divided by how many there are.",
    },
    {
      term: "Perimeter",
      definition: "The total distance around the edge of a shape.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u4-exam4-concept",
      title: "Patterns, Problem Solving and Data — exam practice",
      skill:
        "Apply patterns, problem solving and data techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise patterns, problem solving and data in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for patterns, problem solving and data.",
          },
        ],
      },
      questions: [
        {
          id: "edpm1-u4-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "15 + 5 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20 }],
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
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "edpm1-u4-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 8 × 3?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 24 }],
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
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "edpm1-u4-x4-q3",
          difficulty: "challenge",
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
          id: "edpm1-u4-x4-q4",
          difficulty: "foundation",
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
          id: "edpm1-u4-x4-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a hexagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** 6",
          },
        },
        {
          id: "edpm1-u4-x4-q6",
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
        {
          id: "edpm1-u4-x4-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number is hidden? 5 − ? = 4",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Missing number",
                statement: "Use the inverse operation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract: hidden number = 12 − answer? No — rearrange: ? = first number − result.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "edpm1-u4-x4-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "19 + 6 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 25 }],
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
                working: "25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25",
          },
        },
      ],
    },
  ],
};
