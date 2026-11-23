import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edpm6-u1-exam2",
  code: "1-X2",
  title: "Exam Practice 2: Number: Place Value, Operations and BIDMAS",
  goal: "I CAN answer number: place value, operations and bidmas exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and BIDMAS",
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
      id: "edpm6-u1-exam2-concept",
      title: "Number: Place Value, Operations and BIDMAS — exam practice",
      skill:
        "Apply number: place value, operations and bidmas techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and bidmas in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and bidmas.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u1-x2-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 797 − 560.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 237 }],
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
                working: "237",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "237",
          },
        },
        {
          id: "edpm6-u1-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 99 ÷ 9.",
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
          id: "edpm6-u1-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/2 × 2/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "6/12" },
              { id: "c", text: "2/2" },
              { id: "d", text: "1/3" },
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
                reasoning: "(3×2)/(2×6) = 6/12 = 1/2.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/2",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u1-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 8 kg 281 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8281, unit: "g" }],
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
                working: "8281",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8281 g",
          },
        },
        {
          id: "edpm6-u1-x2-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 10 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 100, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "10×10=100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "100 cm²",
          },
        },
        {
          id: "edpm6-u1-x2-q6",
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
          id: "edpm6-u1-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 2x + 2 = 16",
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
                reasoning: "Subtract 2, then divide by 2.",
                working: "(16-2)÷2=7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "edpm6-u1-x2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 508 + 293.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 801 }],
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
                working: "801",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "801",
          },
        },
        {
          id: "edpm6-u1-x2-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 12 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 144 }],
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
                working: "144",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "144",
          },
        },
        {
          id: "edpm6-u1-x2-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/3 × 1/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/7" },
              { id: "b", text: "7/6" },
              { id: "c", text: "2/12" },
              { id: "d", text: "1/6" },
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
                reasoning: "(2×1)/(3×4) = 2/12 = 1/6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 1/6",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
