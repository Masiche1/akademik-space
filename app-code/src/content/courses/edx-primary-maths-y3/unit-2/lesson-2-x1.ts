import type { Lesson } from "../../../types.ts";

export const exam21: Lesson = {
  id: "edpm3-u2-exam1",
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
      id: "edpm3-u2-exam1-concept",
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
          id: "edpm3-u2-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 108 + 71.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 179 }],
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
                working: "179",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "179",
          },
        },
        {
          id: "edpm3-u2-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 11 × 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 88 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact.",
                working: "88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "88",
          },
        },
        {
          id: "edpm3-u2-x1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 3/6 as an equivalent fraction with denominator 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "6/12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6/12",
          },
        },
        {
          id: "edpm3-u2-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ribbon is 8 m 4 cm long. Write its length in centimetres.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 804, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Metric conversion",
                statement: "1 m = 100 cm = 1000 mm.",
              },
            ],
            steps: [
              {
                reasoning: "1 m = 100 cm.",
                working: "804",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "804 cm",
          },
        },
        {
          id: "edpm3-u2-x1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pentagon has sides of length 5 cm each. Work out its perimeter.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 25, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Perimeter",
                statement: "Total distance around the edge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add all the side lengths (or multiply side length by number of sides).",
                working: "5×5=25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25 cm",
          },
        },
        {
          id: "edpm3-u2-x1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organised collection of data" },
              { id: "b", text: "A computer game" },
              { id: "c", text: "A type of cable" },
              { id: "d", text: "A screen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Database = organised data.",
              },
            ],
            steps: [
              {
                reasoning: "Database = organised data.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** An organised collection of data",
          },
        },
        {
          id: "edpm3-u2-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve for x: 6x = 60",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Solve equation",
                statement: "Divide both sides by the coefficient.",
              },
            ],
            steps: [
              {
                reasoning: "Divide both sides by 6.",
                working: "60÷6=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 10",
          },
        },
        {
          id: "edpm3-u2-x1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 31 + 136.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 167 }],
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
                working: "167",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "167",
          },
        },
        {
          id: "edpm3-u2-x1-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 9 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplication",
                statement: "Inverse operations.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact.",
                working: "54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54",
          },
        },
        {
          id: "edpm3-u2-x1-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write 2/5 as an equivalent fraction with denominator 10.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 0.4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent fractions",
                statement: "Multiply top and bottom by the same number.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by 2.",
                working: "4/10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4/10",
          },
        },
      ],
    },
  ],
};
