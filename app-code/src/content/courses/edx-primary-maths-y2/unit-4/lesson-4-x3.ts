import type { Lesson } from "../../../types.ts";

export const exam43: Lesson = {
  id: "edpm2-u4-exam3",
  code: "4-X3",
  title: "Exam Practice 3: Geometry, Fractions and Problem Solving",
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
      id: "edpm2-u4-exam3-concept",
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
          id: "edpm2-u4-x3-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "13 − 13 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0 }],
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
                working: "0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "edpm2-u4-x3-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 2 × 8?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16 }],
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
                working: "16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "edpm2-u4-x3-q3",
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
          id: "edpm2-u4-x3-q4",
          difficulty: "foundation",
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
          id: "edpm2-u4-x3-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a octagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "4" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** 8",
          },
        },
        {
          id: "edpm2-u4-x3-q6",
          difficulty: "challenge",
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
        {
          id: "edpm2-u4-x3-q7",
          difficulty: "foundation",
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
        {
          id: "edpm2-u4-x3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "20 + 7 = ?",
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
          id: "edpm2-u4-x3-q9",
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
          id: "edpm2-u4-x3-q10",
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
      ],
    },
  ],
};
