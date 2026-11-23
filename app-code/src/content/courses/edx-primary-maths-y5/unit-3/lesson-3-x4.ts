import type { Lesson } from "../../../types.ts";

export const exam34: Lesson = {
  id: "edpm5-u3-exam4",
  code: "3-X4",
  title: "Exam Practice 4: Measurement, Geometry and Statistics",
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
      id: "edpm5-u3-exam4-concept",
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
          id: "edpm5-u3-x4-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 347 + 771.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1118 }],
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
                working: "1118",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1118",
          },
        },
        {
          id: "edpm5-u3-x4-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 7 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 35 }],
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
                working: "35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "edpm5-u3-x4-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 6/2 × 6/5. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18/5" },
              { id: "b", text: "19/5" },
              { id: "c", text: "36/10" },
              { id: "d", text: "23/5" },
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
                reasoning: "(6×6)/(2×5) = 36/10 = 18/5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 18/5",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm5-u3-x4-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parcel weighs 9 kg 928 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 9928, unit: "g" }],
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
                working: "9928",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9928 g",
          },
        },
        {
          id: "edpm5-u3-x4-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 14 cm. Work out its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 196, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of square", statement: "A = s²." },
            ],
            steps: [
              {
                reasoning: "Area of square = side × side.",
                working: "14×14=196",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "196 cm²",
          },
        },
        {
          id: "edpm5-u3-x4-q6",
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
          id: "edpm5-u3-x4-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve: 6x + 13 = 25",
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
                reasoning: "Subtract 13, then divide by 6.",
                working: "(25-13)÷6=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 2",
          },
        },
        {
          id: "edpm5-u3-x4-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work out 906 + 604.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1510 }],
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
                working: "1510",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1510",
          },
        },
        {
          id: "edpm5-u3-x4-q9",
          difficulty: "core",
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
