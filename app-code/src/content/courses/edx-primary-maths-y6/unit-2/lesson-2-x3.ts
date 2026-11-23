import type { Lesson } from "../../../types.ts";

export const exam23: Lesson = {
  id: "edpm6-u2-exam3",
  code: "2-X3",
  title: "Exam Practice 3: Fractions, Decimals, Percentages, Ratio and Algebra",
  goal: "I CAN answer fractions, decimals, percentages, ratio and algebra exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Fractions, Decimals, Percentages, Ratio and Algebra",
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
      id: "edpm6-u2-exam3-concept",
      title:
        "Fractions, Decimals, Percentages, Ratio and Algebra — exam practice",
      skill:
        "Apply fractions, decimals, percentages, ratio and algebra techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise fractions, decimals, percentages, ratio and algebra in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for fractions, decimals, percentages, ratio and algebra.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u2-x3-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 721 − 465.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 256 }],
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
                working: "256",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "256",
          },
        },
        {
          id: "edpm6-u2-x3-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 15 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 180 }],
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
                working: "180",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "180",
          },
        },
        {
          id: "edpm6-u2-x3-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/5 × 6/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/5" },
              { id: "b", text: "18/30" },
              { id: "c", text: "3/5" },
              { id: "d", text: "8/5" },
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
                reasoning: "(3×6)/(5×6) = 18/30 = 3/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 3/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u2-x3-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 11 kg 711 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11711, unit: "g" }],
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
                working: "11711",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11711 g",
          },
        },
        {
          id: "edpm6-u2-x3-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 15 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 225, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "15×15=225",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "225 cm²",
          },
        },
        {
          id: "edpm6-u2-x3-q6",
          difficulty: "foundation",
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
          id: "edpm6-u2-x3-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 4x + 2 = 30",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7 }],
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
                reasoning: "Subtract 2, then divide by 4.",
                working: "(30-2)÷4=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm6-u2-x3-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 717 − 139.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 578 }],
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
                working: "578",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "578",
          },
        },
        {
          id: "edpm6-u2-x3-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 7 × 6.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 42 }],
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
                working: "42",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "edpm6-u2-x3-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/3 × 3/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/18" },
              { id: "b", text: "1/3" },
              { id: "c", text: "1/4" },
              { id: "d", text: "2/3" },
            ],
            correctChoiceId: "b",
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
                reasoning: "(2×3)/(3×6) = 6/18 = 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 1/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
