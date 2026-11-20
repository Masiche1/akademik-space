import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipm-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 3 — Multiplication and Fractions",
  goal: "I CAN use times tables, multiply and divide, and recognise simple fractions.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 3: number",
  "Cambridge Primary Mathematics 0096 framework substrands: 3Ni, 3Nf"],
  stage: 3,
  vocabulary: [
    { term: "Times table", definition: "The multiplication facts for one number." },
    { term: "Product", definition: "The answer to a multiplication." },
    { term: "Multiple", definition: "A number in a times table." },
    { term: "Fraction", definition: "A part of a whole, written as a numerator over a denominator." },
    { term: "Half", definition: "One of two equal parts." },
  ],
  concepts: [
    {
      id: "cipm-u1-s3-times-tables",
      title: "Times tables and multiplication",
      skill: "Recall times tables to 12x12 and multiply at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Times tables",
            body: "At Stage 3 you learn all times tables up to 12. Multiplication is repeated addition: $4 \\times 3$ means four lots of three, or $3 + 3 + 3 + 3 = 12$.",
          },
          {
            heading: "Arrays and groups",
            body: "Multiplication can be shown with arrays: 3 rows of 4 dots is $3 \\times 4 = 12$. Division is the inverse: sharing 12 into groups of 4 gives 3 groups.",
          },
        ],
        keyFormulas: [
          { name: "Multiplication", statement: "$a \\times b$ = $b$ lots of $a$" },
          { name: "Division", statement: "$12 \\div 4 = 3$ (inverse of multiplication)" },
        ],
        workedExample: {
          problem: "Work out $7 \\times 8$.",
          solution: "$7 \\times 8 = 56$ — recall from the times tables.",
        },
      },
      questions: [
        {
          id: "cipm-u1-s3-tt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $6 \\times 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "36" }, { id: "b", text: "42" }, { id: "c", text: "48" }, { id: "d", text: "54" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Times table", statement: "Recall multiplication facts." }],
            steps: [{ reasoning: "$6 \\times 7 = 42$.", marks: 1, markCode: "A" }],
            finalAnswer: "42",
          },
        },
        {
          id: "cipm-u1-s3-tt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $9 \\times 4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Times tables", statement: "Use known facts; $10 \\times 4 = 40$ minus $1 \\times 4$." }],
            steps: [
              { reasoning: "$10 \\times 4 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "$40 - 4 = 36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36",
          },
        },
        {
          id: "cipm-u1-s3-tt-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "There are 8 rows of chairs with 5 chairs in each row. How many chairs are there?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication", statement: "Rows of equal groups = multiply." }],
            steps: [
              { reasoning: "Multiply rows by chairs: $8 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$8 \\times 5 = 40$ chairs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 chairs",
          },
        },
        {
          id: "cipm-u1-s3-tt-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 56 sweets equally between 7 children. How many sweets does each child get?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Equal sharing = divide." }],
            steps: [
              { reasoning: "Work out $56 \\div 7$.", marks: 1, markCode: "M" },
              { reasoning: "$7 \\times 8 = 56$, so $56 \\div 7 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Each child gets 8 sweets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 sweets",
          },
        },
      ],
    },
    {
      id: "cipm-u1-s3-fractions",
      title: "Simple fractions",
      skill: "Recognise and find halves, quarters and other simple fractions.",
      lesson: {
        sections: [
          {
            heading: "What is a fraction?",
            body: "A fraction shows a part of a whole. The bottom number (denominator) shows how many equal parts the whole is split into; the top number (numerator) shows how many parts you have.",
          },
          {
            heading: "Halves, thirds and quarters",
            body: "A half is 1 out of 2 equal parts ($\\frac{1}{2}$). A quarter is 1 out of 4 equal parts ($\\frac{1}{4}$). Finding a fraction of an amount means dividing: $\\frac{1}{4}$ of 20 is $20 \\div 4 = 5$.",
          },
        ],
        keyFormulas: [
          { name: "Fraction of an amount", statement: "$\\frac{1}{n}$ of $N = N \\div n$" },
        ],
        workedExample: {
          problem: "What is $\\frac{1}{3}$ of 12?",
          solution: "$12 \\div 3 = 4$. So $\\frac{1}{3}$ of 12 is 4.",
        },
      },
      questions: [
        {
          id: "cipm-u1-s3-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction shows one half?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{3}$" }, { id: "b", text: "$\\frac{1}{4}$" }, { id: "c", text: "$\\frac{1}{2}$" }, { id: "d", text: "$\\frac{2}{4}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Numerator over denominator; half = 1 of 2 parts." }],
            steps: [{ reasoning: "One half is written $\\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u1-s3-fr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $\\frac{1}{4}$ of 16?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide by the denominator." }],
            steps: [
              { reasoning: "$16 \\div 4 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{4}$ of 16 is 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u1-s3-fr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pizza is cut into 8 equal slices. Ben eats 3 slices. What fraction of the pizza has Ben eaten?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Parts eaten over total parts." }],
            steps: [
              { reasoning: "The whole pizza is 8 slices, so denominator is 8.", marks: 1, markCode: "M" },
              { reasoning: "Ben ate 3 slices, so numerator is 3.", marks: 1, markCode: "M" },
              { reasoning: "Ben ate $\\frac{3}{8}$ of the pizza.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}$",
          },
        },
        {
          id: "cipm-u1-s3-fr-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is $\\frac{1}{5}$ of 25?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide by denominator." }],
            steps: [
              { reasoning: "Divide 25 by 5.", marks: 1, markCode: "M" },
              { reasoning: "$25 \\div 5 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{5}$ of 25 is 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-s3-tt-notes",
      title: "Stage 3 times tables and fractions — revision notes",
      summary: "Times tables to 12, multiplication, division, simple fractions.",
      sections: [
        { heading: "Times tables", body: "Learn all tables to 12. Use related facts: if you know $7 \\times 6$ you know $6 \\times 7$. Division is the inverse of multiplication." },
        { heading: "Fractions", body: "A fraction is parts over whole. $\\frac{1}{n}$ of an amount means divide by $n$." },
      ],
    },
  ],
};
