import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edpm6-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: Measurement, Statistics and Problem Solving",
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
      id: "edpm6-u3-exam4-concept",
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
          id: "edpm6-u3-x4-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 411 − 30.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 381 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subtraction",
                statement: "Column method with carrying/borrowing.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract, borrowing where needed.",
                working: "381",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "381",
          },
        },
        {
          id: "edpm6-u3-x4-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 70 ÷ 14.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact or short division.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "edpm6-u3-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/3 × 4/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25/9" },
              { id: "b", text: "17/9" },
              { id: "c", text: "16/10" },
              { id: "d", text: "16/9" },
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
                reasoning: "(4×4)/(3×3) = 16/9 = 16/9.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 16/9",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u3-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 5 kg 815 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5815, unit: "g" }],
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
                working: "5815",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5815 g",
          },
        },
        {
          id: "edpm6-u3-x4-q5",
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
          id: "edpm6-u3-x4-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the difference between data and information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Information is data with meaning/context" },
              { id: "b", text: "They are the same" },
              { id: "c", text: "Data is always numbers" },
              { id: "d", text: "Information is always text" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Data → processed → information.",
              },
            ],
            steps: [
              {
                reasoning: "Data → processed → information.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Information is data with meaning/context",
          },
        },
        {
          id: "edpm6-u3-x4-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 9x + 16 = 34",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
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
                reasoning: "Subtract 16, then divide by 9.",
                working: "(34-16)÷9=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 2",
          },
        },
        {
          id: "edpm6-u3-x4-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 333 + 464.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 797 }],
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
                working: "797",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "797",
          },
        },
        {
          id: "edpm6-u3-x4-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 42 ÷ 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Division",
                statement: "Inverse of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "Use the times-table fact or short division.",
                working: "7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "edpm6-u3-x4-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/2 × 5/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/4" },
              { id: "b", text: "9/4" },
              { id: "c", text: "5/5" },
              { id: "d", text: "5/4" },
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
                reasoning: "(3×5)/(2×6) = 15/12 = 5/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 5/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
