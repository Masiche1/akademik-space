import type { Lesson } from "../../../types.ts";

export const exam15: Lesson = {
  id: "edpm2-u1-exam5",
  code: "1-X5",
  title: "Exam Practice 5: Number: Place Value and Addition/Subtraction",
  goal: "I CAN answer number: place value and addition/subtraction exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value and Addition/Subtraction",
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
      id: "edpm2-u1-exam5-concept",
      title: "Number: Place Value and Addition/Subtraction — exam practice",
      skill:
        "Apply number: place value and addition/subtraction techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value and addition/subtraction in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value and addition/subtraction.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u1-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "9 − 3 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                working: "6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "edpm2-u1-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 8 × 8?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64 }],
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
                working: "64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64",
          },
        },
        {
          id: "edpm2-u1-x5-q3",
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
          id: "edpm2-u1-x5-q4",
          difficulty: "challenge",
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
          id: "edpm2-u1-x5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many sides does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "square",
                statement: "4 straight sides.",
              },
            ],
            steps: [
              { reasoning: "A square has 4 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4",
          },
        },
        {
          id: "edpm2-u1-x5-q6",
          difficulty: "core",
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
          id: "edpm2-u1-x5-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number is hidden? 7 − ? = 3",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
      ],
    },
  ],
};
