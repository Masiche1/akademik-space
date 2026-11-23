import type { Lesson } from "../../../types.ts";

export const exam25: Lesson = {
  id: "edpm6-u2-exam5",
  code: "2-X5",
  title: "Exam Practice 5: Fractions, Decimals, Percentages, Ratio and Algebra",
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
      id: "edpm6-u2-exam5-concept",
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
          id: "edpm6-u2-x5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 850 − 161.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 689 }],
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
                working: "689",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "689",
          },
        },
        {
          id: "edpm6-u2-x5-q2",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 150 ÷ 15.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 10 }],
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
                working: "10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "edpm6-u2-x5-q3",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Work out 5/2 × 6/4. Give your answer in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30/8" },
              { id: "b", text: "15/5" },
              { id: "c", text: "16/4" },
              { id: "d", text: "15/4" },
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
                reasoning: "(5×6)/(2×4) = 30/8 = 15/4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 15/4",
            commonErrors: ["Adding denominators instead of multiplying them."],
          },
        },
        {
          id: "edpm6-u2-x5-q4",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A parcel weighs 17 kg 94 g. Write its mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17094, unit: "g" }],
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
                working: "17094",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17094 g",
          },
        },
        {
          id: "edpm6-u2-x5-q5",
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
          id: "edpm6-u2-x5-q6",
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
      ],
    },
  ],
};
