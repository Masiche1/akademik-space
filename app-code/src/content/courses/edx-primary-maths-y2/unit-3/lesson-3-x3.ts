import type { Lesson } from "../../../types.ts";

export const exam33: Lesson = {
  id: "edpm2-u3-exam3",
  code: "3-X3",
  title: "Exam Practice 3: Shape, Measure, Time, Money and Data",
  goal: "I CAN answer shape, measure, time, money and data exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Shape, Measure, Time, Money and Data",
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
      id: "edpm2-u3-exam3-concept",
      title: "Shape, Measure, Time, Money and Data — exam practice",
      skill:
        "Apply shape, measure, time, money and data techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise shape, measure, time, money and data in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for shape, measure, time, money and data.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u3-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "20 − 9 = ?",
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
          id: "edpm2-u3-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 8 × 5?",
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
          id: "edpm2-u3-x3-q3",
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
          id: "edpm2-u3-x3-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pencil is 19 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 190, unit: "mm" }],
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
                working: "190",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "190 mm",
          },
        },
        {
          id: "edpm2-u3-x3-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** 3",
          },
        },
        {
          id: "edpm2-u3-x3-q6",
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
        {
          id: "edpm2-u3-x3-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number is hidden? 4 − ? = 2",
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
          id: "edpm2-u3-x3-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "15 − 5 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "edpm2-u3-x3-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 × 9?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 90 }],
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
                working: "90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "90",
          },
        },
        {
          id: "edpm2-u3-x3-q10",
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
