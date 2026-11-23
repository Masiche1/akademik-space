import type { Lesson } from "../../../types.ts";

export const exam35: Lesson = {
  id: "edpm6-u3-exam5",
  code: "3-X5",
  title: "Exam Practice 5: Measurement, Statistics and Problem Solving",
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
      id: "edpm6-u3-exam5-concept",
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
          id: "edpm6-u3-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 861 + 583.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1444 }],
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
                working: "1444",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1444",
          },
        },
        {
          id: "edpm6-u3-x5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 9 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36 }],
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
                working: "36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "36",
          },
        },
        {
          id: "edpm6-u3-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/3 × 4/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/3" },
              { id: "b", text: "4/12" },
              { id: "c", text: "2/3" },
              { id: "d", text: "1/3" },
            ],
            correctChoiceId: "d",
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
                reasoning: "(1×4)/(3×4) = 4/12 = 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 1/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u3-x5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 20 kg 839 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 20839, unit: "g" }],
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
                working: "20839",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20839 g",
          },
        },
        {
          id: "edpm6-u3-x5-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 3 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "3×3=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 cm²",
          },
        },
        {
          id: "edpm6-u3-x5-q6",
          difficulty: "core",
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
      ],
    },
  ],
};
