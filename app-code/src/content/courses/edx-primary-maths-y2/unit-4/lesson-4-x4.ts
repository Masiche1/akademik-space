import type { Lesson } from "../../../types.ts";

export const exam44: Lesson = {
  id: "edpm2-u4-exam4",
  code: "4-X4",
  title: "Exam Practice 4: Geometry, Fractions and Problem Solving",
  goal: "I CAN answer geometry, fractions and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Geometry, Fractions and Problem Solving",
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
      id: "edpm2-u4-exam4-concept",
      title: "Geometry, Fractions and Problem Solving — exam practice",
      skill:
        "Apply geometry, fractions and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise geometry, fractions and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for geometry, fractions and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u4-x4-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "19 + 8 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 27 }],
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
                working: "27",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "27",
          },
        },
        {
          id: "edpm2-u4-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 9 × 6?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54 }],
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
                working: "54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54",
          },
        },
        {
          id: "edpm2-u4-x4-q3",
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
          id: "edpm2-u4-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pencil is 20 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 200, unit: "mm" }],
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
                working: "200",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "200 mm",
          },
        },
        {
          id: "edpm2-u4-x4-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a rectangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "7" },
              { id: "c", text: "8" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "rectangle",
                statement: "4 straight sides.",
              },
            ],
            steps: [
              {
                reasoning: "A rectangle has 4 sides.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 4",
          },
        },
        {
          id: "edpm2-u4-x4-q6",
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
          id: "edpm2-u4-x4-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is hidden? 9 − ? = 2",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                working: "7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "edpm2-u4-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "6 − 5 = ?",
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
          id: "edpm2-u4-x4-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 6 × 6?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36 }],
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
                working: "36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36",
          },
        },
        {
          id: "edpm2-u4-x4-q10",
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
      ],
    },
  ],
};
