import type { Lesson } from "../../../types.ts";

export const exam32: Lesson = {
  id: "edpm2-u3-exam2",
  code: "3-X2",
  title: "Exam Practice 2: Shape, Measure, Time, Money and Data",
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
      id: "edpm2-u3-exam2-concept",
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
          id: "edpm2-u3-x2-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "12 + 6 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 18 }],
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
                working: "18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18",
          },
        },
        {
          id: "edpm2-u3-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 8 × 2?",
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
          id: "edpm2-u3-x2-q3",
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
          id: "edpm2-u3-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pencil is 12 cm long. How many millimetres is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 120, unit: "mm" }],
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
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120 mm",
          },
        },
        {
          id: "edpm2-u3-x2-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a pentagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "6" },
              { id: "c", text: "4" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** 5",
          },
        },
        {
          id: "edpm2-u3-x2-q6",
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
          id: "edpm2-u3-x2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is hidden? 17 − ? = 9",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8 }],
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
                working: "8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "edpm2-u3-x2-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "17 − 11 = ?",
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
          id: "edpm2-u3-x2-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 2 × 2?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "edpm2-u3-x2-q10",
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
