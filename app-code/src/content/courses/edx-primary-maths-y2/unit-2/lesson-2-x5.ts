import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpm2-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Multiplication, Division and Fractions",
  goal: "I CAN answer multiplication, division and fractions exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Multiplication, Division and Fractions",
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
      id: "edpm2-u2-exam5-concept",
      title: "Multiplication, Division and Fractions — exam practice",
      skill:
        "Apply multiplication, division and fractions techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise multiplication, division and fractions in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for multiplication, division and fractions.",
          },
        ],
      },
      questions: [
        {
          id: "edpm2-u2-x5-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "19 − 5 = ?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 14 }],
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
                working: "14",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "edpm2-u2-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 9 × 7?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 63 }],
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
                working: "63",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "63",
          },
        },
        {
          id: "edpm2-u2-x5-q3",
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
          id: "edpm2-u2-x5-q4",
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
          id: "edpm2-u2-x5-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a rectangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "4" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** 4",
          },
        },
        {
          id: "edpm2-u2-x5-q6",
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
          id: "edpm2-u2-x5-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What number is hidden? 5 − ? = 2",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
      ],
    },
  ],
};
