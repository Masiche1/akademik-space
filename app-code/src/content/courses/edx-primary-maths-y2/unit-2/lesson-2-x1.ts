import type { Lesson } from "../../../types.ts";

export const exam21: Lesson = {
  id: "edpm2-u2-exam1",
  code: "2-X1",
  title: "Exam Practice 1: Multiplication, Division and Fractions",
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
      id: "edpm2-u2-exam1-concept",
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
          id: "edpm2-u2-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "12 + 3 = ?",
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
          id: "edpm2-u2-x1-q2",
          difficulty: "challenge",
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
          id: "edpm2-u2-x1-q3",
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
          id: "edpm2-u2-x1-q4",
          difficulty: "challenge",
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
          id: "edpm2-u2-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "7" },
              { id: "c", text: "3" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** 3",
          },
        },
        {
          id: "edpm2-u2-x1-q6",
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
          id: "edpm2-u2-x1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number is hidden? 10 − ? = 4",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
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
                working: "6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "edpm2-u2-x1-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "5 + 13 = ?",
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
          id: "edpm2-u2-x1-q9",
          difficulty: "challenge",
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
          id: "edpm2-u2-x1-q10",
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
