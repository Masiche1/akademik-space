import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipm-u2-lesson-2-1",
  code: "2-1",
  title: "Stage 4 — Multiplication, Division and Decimals",
  goal: "I CAN multiply and divide larger numbers and recognise decimals.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: number",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Ni, 4Nf"],
  stage: 4,
  vocabulary: [
    { term: "Factor", definition: "A number that divides another exactly." },
    { term: "Multiple", definition: "A number in a times table." },
    { term: "Remainder", definition: "What is left after dividing." },
    { term: "Decimal", definition: "A number with a decimal point, showing tenths or hundredths." },
    { term: "Tenths", definition: "The first digit after the decimal point." },
  ],
  concepts: [
    {
      id: "cipm-u2-s4-multiply-divide",
      title: "Multiplying and dividing larger numbers",
      skill: "Multiply and divide at Stage 4 level using times tables and place value.",
      lesson: {
        sections: [
          {
            heading: "Multiplying",
            body: "To multiply a two-digit number by a one-digit number, split the two-digit number: $23 \\times 4 = (20 \\times 4) + (3 \\times 4) = 80 + 12 = 92$.",
          },
          {
            heading: "Dividing with remainders",
            body: "Division may not be exact. $29 \\div 4 = 7$ remainder $1$, because $4 \\times 7 = 28$ and $29 - 28 = 1$.",
          },
        ],
        keyFormulas: [
          { name: "Splitting", statement: "$23 \\times 4 = 20 \\times 4 + 3 \\times 4$" },
          { name: "Division", statement: "$a \\div b = q$ remainder $r$ means $a = bq + r$" },
        ],
        workedExample: {
          problem: "Work out $34 \\times 6$.",
          solution: "$30 \\times 6 = 180$; $4 \\times 6 = 24$; $180 + 24 = 204$.",
        },
      },
      questions: [
        {
          id: "cipm-u2-s4-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $12 \\times 3$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "33" }, { id: "b", text: "34" }, { id: "c", text: "36" }, { id: "d", text: "39" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Times table", statement: "Recall multiplication facts." }],
            steps: [{ reasoning: "$12 \\times 3 = 36$.", marks: 1, markCode: "A" }],
            finalAnswer: "36",
          },
        },
        {
          id: "cipm-u2-s4-md-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $47 \\div 5$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 9 }, { label: "b", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division with remainder", statement: "Find quotient and remainder." }],
            steps: [
              { reasoning: "$5 \\times 9 = 45$; $47 - 45 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$47 \\div 5 = 9$ remainder $2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 remainder 2",
          },
        },
        {
          id: "cipm-u2-s4-md-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A box holds 6 eggs. How many boxes are needed for 50 eggs?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division word problem", statement: "Divide and interpret remainder." }],
            steps: [
              { reasoning: "Work out $50 \\div 6$.", marks: 1, markCode: "M" },
              { reasoning: "$6 \\times 8 = 48$ remainder $2$, so 8 full boxes plus a remainder.", marks: 1, markCode: "M" },
              { reasoning: "9 boxes are needed (the last box holds the remaining 2 eggs).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 boxes",
          },
        },
        {
          id: "cipm-u2-s4-md-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $26 \\times 4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 104 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Splitting multiplication", statement: "Split into tens and ones." }],
            steps: [
              { reasoning: "$20 \\times 4 = 80$; $6 \\times 4 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "$80 + 24 = 104$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 104.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "104",
          },
        },
      ],
    },
    {
      id: "cipm-u2-s4-decimals",
      title: "Decimals — tenths and hundredths",
      skill: "Recognise and order decimals at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "What are decimals?",
            body: "Decimals show parts of a whole. $0.5$ means 5 tenths, the same as $\\frac{1}{2}$. $0.25$ means 25 hundredths, the same as $\\frac{1}{4}$.",
          },
          {
            heading: "Money and decimals",
            body: "Money uses decimals: $\\$3.40$ means 3 pounds and 40 pence. The digits after the decimal point show tenths and hundredths of a pound.",
          },
        ],
        keyFormulas: [
          { name: "Decimal places", statement: "First digit after point = tenths; second = hundredths." },
          { name: "Decimal to fraction", statement: "$0.5 = \\frac{1}{2}$; $0.25 = \\frac{1}{4}$" },
        ],
        workedExample: {
          problem: "Write $\\frac{3}{10}$ as a decimal.",
          solution: "Three tenths is $0.3$.",
        },
      },
      questions: [
        {
          id: "cipm-u2-s4-dec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $0.5$ as a fraction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{5}$" }, { id: "b", text: "$\\frac{1}{2}$" }, { id: "c", text: "$\\frac{5}{10}$" }, { id: "d", text: "$\\frac{1}{10}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decimal", statement: "0.5 = five tenths = one half." }],
            steps: [{ reasoning: "$0.5$ is five tenths, which equals $\\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is larger: $0.7$ or $0.07$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing decimals", statement: "Compare tenths first." }],
            steps: [
              { reasoning: "$0.7$ has 7 tenths; $0.07$ has 0 tenths and 7 hundredths.", marks: 1, markCode: "M" },
              { reasoning: "$0.7 > 0.07$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.7$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $\\frac{3}{10}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Tenths go in first decimal place." }],
            steps: [
              { reasoning: "$\\frac{3}{10}$ is 3 tenths.", marks: 1, markCode: "M" },
              { reasoning: "3 tenths is written $0.3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.3$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pencil costs $\\$0.45$ and a rubber costs $\\$0.30$. How much do they cost together?",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding decimals", statement: "Line up decimal points and add." }],
            steps: [
              { reasoning: "Add hundredths: $5 + 0 = 5$; tenths: $4 + 3 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "$0.45 + 0.30 = 0.75$.", marks: 1, markCode: "M" },
              { reasoning: "Total cost is $\\$0.75$ (75p).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$0.75$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-s4-mult-notes",
      title: "Stage 4 multiplication and decimals — revision notes",
      summary: "Multiplying two-digit numbers, division with remainders, tenths and hundredths.",
      sections: [
        { heading: "Multiplication", body: "Split two-digit numbers: $23 \\times 4 = 20 \\times 4 + 3 \\times 4$. Division may leave a remainder — check it is smaller than the divisor." },
        { heading: "Decimals", body: "$0.5 = \\frac{1}{2}$, $0.25 = \\frac{1}{4}$. First decimal place is tenths, second is hundredths." },
      ],
    },
  ],
};
