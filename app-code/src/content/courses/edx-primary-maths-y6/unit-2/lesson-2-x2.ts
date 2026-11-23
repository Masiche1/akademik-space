import type { Lesson } from "../../../types.ts";

export const exam22: Lesson = {
  id: "edpm6-u2-exam2",
  code: "2-X2",
  title: "Exam Practice 2: Fractions, Decimals, Percentages, Ratio and Algebra",
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
      id: "edpm6-u2-exam2-concept",
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
          id: "edpm6-u2-x2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 480 + 696.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1176 }],
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
                working: "1176",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1176",
          },
        },
        {
          id: "edpm6-u2-x2-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 14 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 70 }],
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
                working: "70",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "70",
          },
        },
        {
          id: "edpm6-u2-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/3 × 2/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/3" },
              { id: "b", text: "3/3" },
              { id: "c", text: "5/3" },
              { id: "d", text: "2/4" },
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
                reasoning: "(6×2)/(3×6) = 12/18 = 2/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 2/3",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u2-x2-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 17 kg 151 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17151, unit: "g" }],
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
                working: "17151",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17151 g",
          },
        },
        {
          id: "edpm6-u2-x2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 4 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "4×4=16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 cm²",
          },
        },
        {
          id: "edpm6-u2-x2-q6",
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
          id: "edpm6-u2-x2-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 3x + 16 = 22",
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
                reasoning: "Subtract 16, then divide by 3.",
                working: "(22-16)÷3=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 2",
          },
        },
        {
          id: "edpm6-u2-x2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 603 + 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 608 }],
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
                working: "608",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "608",
          },
        },
        {
          id: "edpm6-u2-x2-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 8 × 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 56 }],
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
                working: "56",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "56",
          },
        },
        {
          id: "edpm6-u2-x2-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/4 × 1/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/20" },
              { id: "b", text: "3/11" },
              { id: "c", text: "4/10" },
              { id: "d", text: "3/10" },
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
                reasoning: "(6×1)/(4×5) = 6/20 = 3/10.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 3/10",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
