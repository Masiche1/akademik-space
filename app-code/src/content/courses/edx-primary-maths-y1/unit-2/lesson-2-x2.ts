import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edpm1-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: Fractions, Shape, Measure, Time and Money",
  goal: "I CAN answer fractions, shape, measure, time and money exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Shape, Measure, Time and Money",
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
      id: "edpm1-u2-exam2-concept",
      title: "Fractions, Shape, Measure, Time and Money — exam practice",
      skill:
        "Apply fractions, shape, measure, time and money techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise fractions, shape, measure, time and money in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for fractions, shape, measure, time and money.",
          },
        ],
      },
      questions: [
        {
          id: "edpm1-u2-x2-q1",
          difficulty: "core",
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
          id: "edpm1-u2-x2-q2",
          difficulty: "core",
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
          id: "edpm1-u2-x2-q3",
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
          id: "edpm1-u2-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pencil is 16 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 160, unit: "mm" }],
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
                working: "160",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "160 mm",
          },
        },
        {
          id: "edpm1-u2-x2-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "3" },
              { id: "c", text: "7" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** 3",
          },
        },
        {
          id: "edpm1-u2-x2-q6",
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
          id: "edpm1-u2-x2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What number is hidden? 8 − ? = 6",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
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
                working: "2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "edpm1-u2-x2-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "8 + 7 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 15 }],
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
                working: "15",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "edpm1-u2-x2-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 2 × 10?",
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
          id: "edpm1-u2-x2-q10",
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
      ],
    },
  ],
};
