import type { Lesson } from "../../../types.ts";

export const exam21: Lesson = {
  id: "edpm6-u2-exam1",
  code: "2-X1",
  title: "Exam Practice 1: Fractions, Decimals, Percentages, Ratio and Algebra",
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
      id: "edpm6-u2-exam1-concept",
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
          id: "edpm6-u2-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 687 − 592.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 95 }],
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
                working: "95",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "95",
          },
        },
        {
          id: "edpm6-u2-x1-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 13 × 11.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 143 }],
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
                working: "143",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "143",
          },
        },
        {
          id: "edpm6-u2-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/5 × 6/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18/25" },
              { id: "b", text: "18/26" },
              { id: "c", text: "19/25" },
              { id: "d", text: "43/25" },
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
                reasoning: "(3×6)/(5×5) = 18/25 = 18/25.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 18/25",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u2-x1-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 2 kg 614 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2614, unit: "g" }],
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
                working: "2614",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2614 g",
          },
        },
        {
          id: "edpm6-u2-x1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 8 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "8×8=64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64 cm²",
          },
        },
        {
          id: "edpm6-u2-x1-q6",
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
          id: "edpm6-u2-x1-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 3x + 3 = 15",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
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
                reasoning: "Subtract 3, then divide by 3.",
                working: "(15-3)÷3=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 4",
          },
        },
        {
          id: "edpm6-u2-x1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 641 − 505.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 136 }],
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
                working: "136",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "136",
          },
        },
        {
          id: "edpm6-u2-x1-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 165 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                working: "11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "edpm6-u2-x1-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/6 × 2/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/24" },
              { id: "b", text: "2/4" },
              { id: "c", text: "1/4" },
              { id: "d", text: "5/4" },
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
                reasoning: "(3×2)/(6×4) = 6/24 = 1/4.",
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
