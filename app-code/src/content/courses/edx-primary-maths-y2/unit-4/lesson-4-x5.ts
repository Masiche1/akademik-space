import type { Lesson } from "../../../types.ts";

export const exam45: Lesson = {
  id: "edpm2-u4-exam5",
  code: "4-X5",
  title: "Exam Practice 5: Geometry, Fractions and Problem Solving",
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
      id: "edpm2-u4-exam5-concept",
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
          id: "edpm2-u4-x5-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "13 + 3 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16 }],
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
                working: "16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "edpm2-u4-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 8 × 7?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 56 }],
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
                working: "56",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "56",
          },
        },
        {
          id: "edpm2-u4-x5-q3",
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
          id: "edpm2-u4-x5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pencil is 9 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 90, unit: "mm" }],
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
                working: "90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "90 mm",
          },
        },
        {
          id: "edpm2-u4-x5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a octagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "8" },
              { id: "c", text: "6" },
              { id: "d", text: "4" },
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
          id: "edpm2-u4-x5-q6",
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
        {
          id: "edpm2-u4-x5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is hidden? 10 − ? = 5",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
      ],
    },
  ],
};
