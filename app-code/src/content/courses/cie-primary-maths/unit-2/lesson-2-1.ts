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
            { id: "a", text: "39" },
            { id: "b", text: "34" },
            { id: "c", text: "33" },
            { id: "d", text: "36" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-s4-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $15 \\times 4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "19" },
            { id: "b", text: "45" },
            { id: "c", text: "50" },
            { id: "d", text: "60" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Times table", statement: "Recall multiplication facts." }],
            steps: [{ reasoning: "$15 \\times 4 = 60$.", marks: 1, markCode: "A" }],
            finalAnswer: "60",
          },
        },
        {
          id: "cipm-u2-s4-md-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $58 \\div 6$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 9 }, { label: "b", answer: 4 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division with remainder", statement: "Find quotient and remainder." }],
            steps: [
              { reasoning: "$6 \\times 9 = 54$; $58 - 54 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$58 \\div 6 = 9$ remainder $4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 remainder 4",
          },
        },
        {
          id: "cipm-u2-s4-md-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the same as $17 \\times 5$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$10 \\times 5 + 7$" },
            { id: "b", text: "$17 + 5$" },
            { id: "c", text: "$17 \\times 10 - 5$" },
            { id: "d", text: "$10 \\times 5 + 7 \\times 5$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Splitting", statement: "Split the two-digit number." }],
            steps: [{ reasoning: "$17 \\times 5 = 10 \\times 5 + 7 \\times 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "$10 \\times 5 + 7 \\times 5$",
          },
        },
        {
          id: "cipm-u2-s4-md-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $63 \\times 3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 189 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Splitting multiplication", statement: "Split into tens and ones." }],
            steps: [
              { reasoning: "$60 \\times 3 = 180$; $3 \\times 3 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "$180 + 9 = 189$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "189",
          },
        },
        {
          id: "cipm-u2-s4-md-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the remainder when $45$ is divided by $6$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "3" },
            { id: "d", text: "6" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Remainder", statement: "$45 = 6 \\times 7 + 3$." }],
            steps: [{ reasoning: "$6 \\times 7 = 42$; $45 - 42 = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cipm-u2-s4-md-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bus holds 40 passengers. How many buses are needed for 130 passengers? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division word problem", statement: "Divide and interpret remainder." }],
            steps: [
              { reasoning: "$130 \\div 40 = 3$ remainder $10$ ($40 \\times 3 = 120$).", marks: 1, markCode: "M" },
              { reasoning: "3 full buses carry 120; 10 passengers remain.", marks: 1, markCode: "M" },
              { reasoning: "4 buses are needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 buses",
          },
        },
        {
          id: "cipm-u2-s4-md-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which calculation is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$38 \\times 4 = 152$" },
            { id: "b", text: "$38 \\times 4 = 162$" },
            { id: "c", text: "$38 \\times 4 = 124$" },
            { id: "d", text: "$38 \\times 4 = 142$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Splitting multiplication", statement: "$30 \\times 4 = 120$; $8 \\times 4 = 32$; total 152." }],
            steps: [{ reasoning: "$38 \\times 4 = 120 + 32 = 152$.", marks: 1, markCode: "A" }],
            finalAnswer: "$38 \\times 4 = 152$",
          },
        },
        {
          id: "cipm-u2-s4-md-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $96 \\div 8$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "11" },
            { id: "b", text: "12" },
            { id: "c", text: "14" },
            { id: "d", text: "13" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Use times table facts." }],
            steps: [{ reasoning: "$8 \\times 12 = 96$.", marks: 1, markCode: "A" }],
            finalAnswer: "12",
          },
        },
        {
          id: "cipm-u2-s4-md-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Work out (a) $35 \\times 7$ and (b) $89 \\div 4$. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication and division", statement: "Split to multiply; quotient and remainder for division." }],
            steps: [
              { reasoning: "(a) $30 \\times 7 = 210$; $5 \\times 7 = 35$; total $245$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $4 \\times 22 = 88$; $89 - 88 = 1$ → 22 remainder 1.", marks: 1, markCode: "M" },
              { reasoning: "Check (a): $245 \\div 7 = 35$; check (b): $4 \\times 22 + 1 = 89$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 245 (b) 22 remainder 1",
          },
        },
        {
          id: "cipm-u2-s4-md-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A remainder must always be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "equal to the divisor" },
            { id: "b", text: "zero" },
            { id: "c", text: "smaller than the divisor" },
            { id: "d", text: "bigger than the divisor" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Remainder", statement: "What is left is less than the divisor." }],
            steps: [{ reasoning: "The remainder is always smaller than the number you divide by.", marks: 1, markCode: "A" }],
            finalAnswer: "smaller than the divisor",
          },
        },
        {
          id: "cipm-u2-s4-md-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $42 \\div 7$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Use times table facts." }],
            steps: [
              { reasoning: "$7 \\times 6 = 42$, so $42 \\div 7 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u2-s4-md-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Work out $27 \\times 4$. (b) Work out $75 \\div 8$. (c) A farmer packs 64 eggs into boxes of 6 — how many full boxes and how many eggs left over? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication, division and remainders", statement: "Split to multiply; quotient and remainder for division." }],
            steps: [
              { reasoning: "(a) $20 \\times 4 = 80$; $7 \\times 4 = 28$; total 108.", marks: 1, markCode: "M" },
              { reasoning: "(b) $8 \\times 9 = 72$; $75 - 72 = 3$ → 9 remainder 3.", marks: 1, markCode: "M" },
              { reasoning: "(c) $64 \\div 6 = 10$ remainder 4 ($6 \\times 10 = 60$).", marks: 1, markCode: "M" },
              { reasoning: "10 full boxes with 4 eggs left over.", marks: 1, markCode: "A" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 108 (b) 9 remainder 3 (c) 10 boxes, 4 left",
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
            { id: "a", text: "$\\frac{1}{10}$" },
            { id: "b", text: "$\\frac{5}{10}$" },
            { id: "c", text: "$\\frac{1}{5}$" },
            { id: "d", text: "$\\frac{1}{2}$" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-s4-dec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $0.25$ as a fraction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{10}$" },
            { id: "b", text: "$\\frac{2}{5}$" },
            { id: "c", text: "$\\frac{1}{4}$" },
            { id: "d", text: "$\\frac{1}{2}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decimal", statement: "$0.25$ = 25 hundredths = one quarter." }],
            steps: [{ reasoning: "$0.25$ is twenty-five hundredths, which equals $\\frac{1}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is larger: $0.4$ or $0.04$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing decimals", statement: "Compare tenths first." }],
            steps: [
              { reasoning: "$0.4$ has 4 tenths; $0.04$ has 0 tenths and 4 hundredths.", marks: 1, markCode: "M" },
              { reasoning: "$0.4 > 0.04$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the decimal $0.36$, what does the 6 represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6 hundredths" },
            { id: "b", text: "6 tenths" },
            { id: "c", text: "3 tenths" },
            { id: "d", text: "36 hundredths" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decimal places", statement: "First digit = tenths; second = hundredths." }],
            steps: [{ reasoning: "The 6 is in the hundredths place.", marks: 1, markCode: "A" }],
            finalAnswer: "6 hundredths",
          },
        },
        {
          id: "cipm-u2-s4-dec-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{7}{10}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Tenths go in first decimal place." }],
            steps: [
              { reasoning: "$\\frac{7}{10}$ is 7 tenths.", marks: 1, markCode: "M" },
              { reasoning: "7 tenths is written $0.7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.7$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which decimal is the smallest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.13$" },
            { id: "b", text: "$0.3$" },
            { id: "c", text: "$0.33$" },
            { id: "d", text: "$0.03$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing decimals", statement: "Compare place values from the left." }],
            steps: [{ reasoning: "$0.03$ has 0 tenths, the smallest tenths digit.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.03$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sweet costs $\\$0.25$ and a drink costs $\\$0.40$. How much change from $\\$1.00$? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimals and change", statement: "Add then subtract decimals." }],
            steps: [
              { reasoning: "Total $= 0.25 + 0.40 = 0.65$.", marks: 1, markCode: "M" },
              { reasoning: "Change $= 1.00 - 0.65 = 0.35$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\$0.35$ (35p).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$0.35$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write $\\frac{1}{4}$ as a decimal.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.05$" },
            { id: "b", text: "$0.4$" },
            { id: "c", text: "$0.14$" },
            { id: "d", text: "$0.25$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "$\\frac{1}{4} = 25$ hundredths." }],
            steps: [{ reasoning: "$\\frac{1}{4} = \\frac{25}{100} = 0.25$.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.25$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the same as $0.5$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.05$" },
            { id: "b", text: "$\\frac{1}{5}$" },
            { id: "c", text: "$\\frac{5}{10}$" },
            { id: "d", text: "$5.0$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equivalent forms", statement: "$0.5 = \\frac{5}{10} = \\frac{1}{2}$." }],
            steps: [{ reasoning: "$0.5$ is five tenths, equal to $\\frac{5}{10}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{5}{10}$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Write $0.6$ as a fraction in its simplest form. (b) Write $\\frac{2}{10}$ as a decimal. (c) Which is bigger, $0.45$ or $0.5$? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimals and fractions", statement: "Tenths/hundredths; simplify." }],
            steps: [
              { reasoning: "(a) $0.6 = \\frac{6}{10} = \\frac{3}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $\\frac{2}{10} = 0.2$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $0.5 = 0.50 > 0.45$.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{3}{5}$ (b) $0.2$ (c) $0.5$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Money is written using decimals. $\\$3.40$ means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3 pounds and 4 pence" },
            { id: "b", text: "3 pounds and 400 pence" },
            { id: "c", text: "3 pounds and 40 pence" },
            { id: "d", text: "34 pounds" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decimal money", statement: "Digits after the point are pence." }],
            steps: [{ reasoning: "$\\$3.40$ = 3 pounds and 40 pence.", marks: 1, markCode: "A" }],
            finalAnswer: "3 pounds and 40 pence",
          },
        },
        {
          id: "cipm-u2-s4-dec-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add $0.35$ and $0.45$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding decimals", statement: "Line up decimal points." }],
            steps: [
              { reasoning: "$0.35 + 0.45 = 0.80$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.8$ (or $0.80$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.8$",
          },
        },
        {
          id: "cipm-u2-s4-dec-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Write $\\frac{7}{10}$ as a decimal. (b) Write $0.08$ as a fraction. (c) Order these from smallest to largest: $0.9$, $0.09$, $0.99$, $0.19$. (d) A book costs $\\$4.60$ and you pay $\\$5$ — how much change? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimals", statement: "Convert forms; order by place value; change." }],
            steps: [
              { reasoning: "(a) $\\frac{7}{10} = 0.7$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $0.08 = \\frac{8}{100} = \\frac{2}{25}$ or $\\frac{8}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $0.09 < 0.19 < 0.9 < 0.99$.", marks: 1, markCode: "M" },
              { reasoning: "(d) $5.00 - 4.60 = 0.40$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.7$ (b) $\\frac{8}{100}$ (c) $0.09, 0.19, 0.9, 0.99$ (d) $\\$0.40$",
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
