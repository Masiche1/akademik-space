import type { Lesson } from "../../../types.ts";

export const exam31: Lesson = {
  id: "edpm5-u3-exam1",
  code: "3-X1",
  title: "Exam Practice 1: Measurement, Geometry and Statistics",
  goal: "I CAN answer measurement, geometry and statistics exam-style questions under timed conditions.",
  standards: [
    "Pearson Edexcel International Primary Curriculum: Measurement, Geometry and Statistics",
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
      id: "edpm5-u3-exam1-concept",
      title: "Measurement, Geometry and Statistics — exam practice",
      skill:
        "Apply measurement, geometry and statistics techniques to exam-style questions.",
      lesson: {
        sections: [
          {
            heading: "Practice technique",
            body: "These questions practise measurement, geometry and statistics in the style of the Pearson Edexcel International Primary Curriculum. Read each question carefully, show your working where needed, and check your answer makes sense. For English answers, write in full sentences with correct punctuation; for maths, give exact answers unless told otherwise.",
          },
        ],
        keyFormulas: [
          {
            name: "Key ideas",
            statement:
              "Apply the main methods and facts for measurement, geometry and statistics.",
          },
        ],
      },
      questions: [
        {
          id: "edpm5-u3-x1-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 784 − 466.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 318 }],
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
                working: "318",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "318",
          },
        },
        {
          id: "edpm5-u3-x1-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 9 × 12.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 108 }],
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
                working: "108",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "108",
          },
        },
        {
          id: "edpm5-u3-x1-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 2/4 × 5/6. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6/12" },
              { id: "b", text: "5/13" },
              { id: "c", text: "10/24" },
              { id: "d", text: "5/12" },
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
                reasoning: "(2×5)/(4×6) = 10/24 = 5/12.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 5/12",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u3-x1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 6 kg 890 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6890, unit: "g" }],
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
                working: "6890",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6890 g",
          },
        },
        {
          id: "edpm5-u3-x1-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A square has side length 11 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 121, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "11×11=121",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "121 cm²",
          },
        },
        {
          id: "edpm5-u3-x1-q6",
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
          id: "edpm5-u3-x1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 5x + 15 = 40",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5 }],
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
                reasoning: "Subtract 15, then divide by 5.",
                working: "(40-15)÷5=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 5",
          },
        },
        {
          id: "edpm5-u3-x1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 874 − 512.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 362 }],
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
                working: "362",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "362",
          },
        },
        {
          id: "edpm5-u3-x1-q9",
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
      ],
    },
  ],
};
