import type { Lesson } from "../../../types.ts";

export const exam24: Lesson = {
  id: "edpm6-u2-exam4",
  code: "2-X4",
  title: "Exam Practice 4: Fractions, Decimals, Percentages, Ratio and Algebra",
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
      id: "edpm6-u2-exam4-concept",
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
          id: "edpm6-u2-x4-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 98 + 348.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 446 }],
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
                working: "446",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "446",
          },
        },
        {
          id: "edpm6-u2-x4-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 66 ÷ 6.",
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
          id: "edpm6-u2-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 1/3 × 1/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/6" },
              { id: "b", text: "7/6" },
              { id: "c", text: "2/6" },
              { id: "d", text: "1/7" },
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
                reasoning: "(1×1)/(3×2) = 1/6 = 1/6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/6",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u2-x4-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 7 kg 103 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7103, unit: "g" }],
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
                working: "7103",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7103 g",
          },
        },
        {
          id: "edpm6-u2-x4-q5",
          difficulty: "core",
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
          id: "edpm6-u2-x4-q6",
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
          id: "edpm6-u2-x4-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 9x + 13 = 76",
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
                reasoning: "Subtract 13, then divide by 9.",
                working: "(76-13)÷9=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm6-u2-x4-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 521 + 94.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 615 }],
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
                working: "615",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "615",
          },
        },
        {
          id: "edpm6-u2-x4-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 14 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 168 }],
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
                working: "168",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "168",
          },
        },
        {
          id: "edpm6-u2-x4-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 5/6 × 2/3. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14/9" },
              { id: "b", text: "10/18" },
              { id: "c", text: "5/9" },
              { id: "d", text: "5/10" },
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
                reasoning: "(5×2)/(6×3) = 10/18 = 5/9.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 5/9",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
