import type { Lesson } from "../../../types.ts";

export const exam31: Lesson = {
  id: "edpm6-u3-exam1",
  code: "3-X1",
  title: "Exam Practice 1: Measurement, Statistics and Problem Solving",
  goal: "I CAN answer measurement, statistics and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Measurement, Statistics and Problem Solving",
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
      id: "edpm6-u3-exam1-concept",
      title: "Measurement, Statistics and Problem Solving — exam practice",
      skill:
        "Apply measurement, statistics and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise measurement, statistics and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for measurement, statistics and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u3-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 855 + 710.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1565 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Addition",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Add, carrying where needed.",
                working: "1565",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1565",
          },
        },
        {
          id: "edpm6-u3-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 15 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 135 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Partition method.",
              },
            ],
            steps: [
              {
                reasoning: "Partition and multiply, or use a known fact.",
                working: "135",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "135",
          },
        },
        {
          id: "edpm6-u3-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/5 × 4/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8/15" },
              { id: "b", text: "16/30" },
              { id: "c", text: "9/15" },
              { id: "d", text: "8/16" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction multiplication",
                statement:
                  "Multiply numerators and denominators; simplify by common factors.",
              },
            ],
            steps: [
              {
                reasoning: "(4×4)/(5×6) = 16/30 = 8/15.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 8/15",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u3-x1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 17 kg 998 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17998, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 kg = 1000 g; 1 l = 1000 ml.",
              },
            ],
            steps: [
              {
                reasoning: "1 kg = 1000 g.",
                working: "17998",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17998 g",
          },
        },
        {
          id: "edpm6-u3-x1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 5 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 25, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "5×5=25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25 cm²",
          },
        },
        {
          id: "edpm6-u3-x1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why use a spreadsheet for data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It can calculate and sort automatically" },
              { id: "b", text: "It looks nice" },
              { id: "c", text: "It is free" },
              { id: "d", text: "It is faster than paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Spreadsheets automate calculations.",
              },
            ],
            steps: [
              {
                reasoning: "Spreadsheets automate calculations.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** It can calculate and sort automatically",
          },
        },
        {
          id: "edpm6-u3-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 8x + 4 = 52",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Linear equation",
                statement: "Inverse operations in reverse order.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract 4, then divide by 8.",
                working: "(52-4)÷8=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 6",
          },
        },
        {
          id: "edpm6-u3-x1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 490 + 581.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1071 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Addition",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Add, carrying where needed.",
                working: "1071",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1071",
          },
        },
        {
          id: "edpm6-u3-x1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 15 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 120 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Partition method.",
              },
            ],
            steps: [
              {
                reasoning: "Partition and multiply, or use a known fact.",
                working: "120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "120",
          },
        },
        {
          id: "edpm6-u3-x1-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/4 × 1/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/12" },
              { id: "b", text: "1/5" },
              { id: "c", text: "1/4" },
              { id: "d", text: "2/4" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction multiplication",
                statement:
                  "Multiply numerators and denominators; simplify by common factors.",
              },
            ],
            steps: [
              {
                reasoning: "(3×1)/(4×3) = 3/12 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
