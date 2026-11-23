import type { Lesson } from "../../../types.ts";

export const exam41: Lesson = {
  id: "edpm6-u4-exam1",
  code: "4-X1",
  title: "Exam Practice 1: Algebra, Number Theory and Problem Solving",
  goal: "I CAN answer algebra, number theory and problem solving exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Algebra, Number Theory and Problem Solving",
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
      id: "edpm6-u4-exam1-concept",
      title: "Algebra, Number Theory and Problem Solving — exam practice",
      skill:
        "Apply algebra, number theory and problem solving techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise algebra, number theory and problem solving in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for algebra, number theory and problem solving.",
          },
        ],
      },
      questions: [
        {
          id: "edpm6-u4-x1-q1",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 24 − 22.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
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
                working: "2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "edpm6-u4-x1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 6 × 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 54 }],
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
                working: "54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "54",
          },
        },
        {
          id: "edpm6-u4-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 4/6 × 6/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/1" },
              { id: "b", text: "1/2" },
              { id: "c", text: "24/24" },
              { id: "d", text: "2/1" },
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
                reasoning: "(4×6)/(6×4) = 24/24 = 1/1.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1/1",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u4-x1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parcel weighs 10 kg 541 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10541, unit: "g" }],
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
                working: "10541",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10541 g",
          },
        },
        {
          id: "edpm6-u4-x1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has side length 7 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 49, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "7×7=49",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "49 cm²",
          },
        },
        {
          id: "edpm6-u4-x1-q6",
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
          id: "edpm6-u4-x1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 2x + 14 = 36",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 11 }],
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
                reasoning: "Subtract 14, then divide by 2.",
                working: "(36-14)÷2=11",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 11",
          },
        },
        {
          id: "edpm6-u4-x1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 585 + 408.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 993 }],
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
                working: "993",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "993",
          },
        },
        {
          id: "edpm6-u4-x1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 35 ÷ 7.",
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
          id: "edpm6-u4-x1-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/4 × 1/2. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/5" },
              { id: "b", text: "1/4" },
              { id: "c", text: "5/4" },
              { id: "d", text: "2/4" },
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
                reasoning: "(2×1)/(4×2) = 2/8 = 1/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 1/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
      ],
    },
  ],
};
