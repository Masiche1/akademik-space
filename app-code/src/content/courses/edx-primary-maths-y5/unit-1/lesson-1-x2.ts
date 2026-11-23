import type { Lesson } from "../../../types.ts";

export const exam12: Lesson = {
  id: "edpm5-u1-exam2",
  code: "1-X2",
  title: "Exam Practice 2: Number: Place Value, Operations and Number Types",
  goal: "I CAN answer number: place value, operations and number types exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Number: Place Value, Operations and Number Types",
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
      id: "edpm5-u1-exam2-concept",
      title: "Number: Place Value, Operations and Number Types — exam practice",
      skill:
        "Apply number: place value, operations and number types techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise number: place value, operations and number types in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for number: place value, operations and number types.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u1-x2-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 923 − 67.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 856 }],
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
                working: "856",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "856",
          },
        },
        {
          id: "edpm5-u1-x2-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 65 ÷ 13.",
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
          id: "edpm5-u1-x2-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 3/3 × 4/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/1" },
              { id: "b", text: "12/12" },
              { id: "c", text: "1/1" },
              { id: "d", text: "2/1" },
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
                reasoning: "(3×4)/(3×4) = 12/12 = 1/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 1/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u1-x2-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 10 kg 632 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10632, unit: "g" }],
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
                working: "10632",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10632 g",
          },
        },
        {
          id: "edpm5-u1-x2-q5",
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
          id: "edpm5-u1-x2-q6",
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
          id: "edpm5-u1-x2-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 6x + 3 = 21",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
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
                reasoning: "Subtract 3, then divide by 6.",
                working: "(21-3)÷6=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 3",
          },
        },
        {
          id: "edpm5-u1-x2-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 451 − 152.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 299 }],
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
                working: "299",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "299",
          },
        },
        {
          id: "edpm5-u1-x2-q9",
          difficulty: "challenge",
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
      ],
    },
  ],
};
