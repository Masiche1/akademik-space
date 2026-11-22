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
            { id: "a", text: "42" },
            { id: "b", text: "36" },
            { id: "c", text: "54" },
            { id: "d", text: "48" },
          ], correctChoiceId: "a" },
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
        {
          id: "cipm-u1-s3-tt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $8 \\times 6$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "48" },
            { id: "b", text: "46" },
            { id: "c", text: "42" },
            { id: "d", text: "56" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Times table", statement: "Recall multiplication facts." }],
            steps: [{ reasoning: "$8 \\times 6 = 48$.", marks: 1, markCode: "A" }],
            finalAnswer: "48",
          },
        },
        {
          id: "cipm-u1-s3-tt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $11 \\times 4$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 44 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Times tables", statement: "$10 \\times 4 + 1 \\times 4$." }],
            steps: [
              { reasoning: "$10 \\times 4 = 40$; $40 + 4 = 44$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 44.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "44",
          },
        },
        {
          id: "cipm-u1-s3-tt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the same as $5 \\times 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "seven 5s added together" },
            { id: "b", text: "$5 + 7$" },
            { id: "c", text: "half of 70" },
            { id: "d", text: "$7 - 5$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Multiplication", statement: "Repeated addition of equal groups." }],
            steps: [{ reasoning: "$5 \\times 7$ means seven lots of 5.", marks: 1, markCode: "A" }],
            finalAnswer: "seven 5s added together",
          },
        },
        {
          id: "cipm-u1-s3-tt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $72 \\div 8$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Use the inverse times table fact." }],
            steps: [
              { reasoning: "$8 \\times 9 = 72$, so $72 \\div 8 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipm-u1-s3-tt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which number is a multiple of 6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30" },
            { id: "b", text: "35" },
            { id: "c", text: "22" },
            { id: "d", text: "14" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Multiple", statement: "A number in the times table." }],
            steps: [{ reasoning: "$6 \\times 5 = 30$, so 30 is a multiple of 6.", marks: 1, markCode: "A" }],
            finalAnswer: "30",
          },
        },
        {
          id: "cipm-u1-s3-tt-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 6 boxes with 7 pencils in each box. (a) How many pencils altogether? (b) If the pencils are shared equally between 6 friends, how many does each friend get? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication and division", statement: "Groups multiply; sharing divides." }],
            steps: [
              { reasoning: "(a) $6 \\times 7 = 42$ pencils.", marks: 1, markCode: "M" },
              { reasoning: "(b) $42 \\div 6 = 7$ each.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 42 (b) 7",
          },
        },
        {
          id: "cipm-u1-s3-tt-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $12 \\times 12$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "124" },
            { id: "b", text: "121" },
            { id: "c", text: "132" },
            { id: "d", text: "144" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Times table", statement: "Recall to 12×12." }],
            steps: [{ reasoning: "$12 \\times 12 = 144$.", marks: 1, markCode: "A" }],
            finalAnswer: "144",
          },
        },
        {
          id: "cipm-u1-s3-tt-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which calculation gives the same answer as $9 \\times 8$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$9 \\times 9 - 9$" },
            { id: "b", text: "$8 \\times 8 + 8$" },
            { id: "c", text: "$8 \\times 9$" },
            { id: "d", text: "$9 + 8$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Commutativity", statement: "Order of factors does not matter." }],
            steps: [{ reasoning: "$9 \\times 8 = 8 \\times 9 = 72$.", marks: 1, markCode: "A" }],
            finalAnswer: "$8 \\times 9$",
          },
        },
        {
          id: "cipm-u1-s3-tt-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A hall has 9 rows of chairs with 8 chairs in each row. (a) How many chairs are there? (b) How many rows would be needed for 96 chairs at 8 per row? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Arrays and division", statement: "rows × chairs; divide to rearrange." }],
            steps: [
              { reasoning: "(a) $9 \\times 8 = 72$ chairs.", marks: 1, markCode: "M" },
              { reasoning: "(b) $96 \\div 8 = 12$ rows.", marks: 1, markCode: "M" },
              { reasoning: "Check: $12 \\times 8 = 96$. ✓", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 72 (b) 12 rows",
          },
        },
        {
          id: "cipm-u1-s3-tt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $7 \\times 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "42" },
            { id: "b", text: "45" },
            { id: "c", text: "56" },
            { id: "d", text: "49" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Times table", statement: "Recall facts." }],
            steps: [{ reasoning: "$7 \\times 7 = 49$.", marks: 1, markCode: "A" }],
            finalAnswer: "49",
          },
        },
        {
          id: "cipm-u1-s3-tt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $84 \\div 7$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Use the inverse times table fact." }],
            steps: [
              { reasoning: "$7 \\times 12 = 84$, so $84 \\div 7 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cipm-u1-s3-tt-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Work out $6 \\times 9$. (b) Work out $54 \\div 9$. (c) A shop sells stickers in packs of 7. How many packs are needed for 56 stickers? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Times tables", statement: "Recall facts; division as inverse; real-world division." }],
            steps: [
              { reasoning: "(a) $6 \\times 9 = 54$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $54 \\div 9 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $56 \\div 7 = 8$ packs.", marks: 1, markCode: "M" },
              { reasoning: "Check: $8 \\times 7 = 56$. ✓", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 54 (b) 6 (c) 8 packs",
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
            { id: "a", text: "$\\frac{1}{3}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{1}{4}$" },
            { id: "d", text: "$\\frac{2}{4}$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cipm-u1-s3-fr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction shows one quarter?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{4}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{2}{4}$" },
            { id: "d", text: "$\\frac{1}{3}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Quarter = 1 of 4 equal parts." }],
            steps: [{ reasoning: "One quarter is $\\frac{1}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cipm-u1-s3-fr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $\\frac{1}{2}$ of 10?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide by the denominator." }],
            steps: [
              { reasoning: "$10 \\div 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{2}$ of 10 is 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u1-s3-fr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the fraction $\\frac{3}{5}$, what does the 5 tell you?",
          response: { type: "mcq", choices: [
            { id: "a", text: "the size of each part" },
            { id: "b", text: "the total number of objects" },
            { id: "c", text: "how many equal parts the whole is split into" },
            { id: "d", text: "how many parts you have" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Denominator", statement: "Bottom number = number of equal parts." }],
            steps: [{ reasoning: "The denominator (bottom) shows how many equal parts the whole is divided into.", marks: 1, markCode: "A" }],
            finalAnswer: "how many equal parts the whole is split into",
          },
        },
        {
          id: "cipm-u1-s3-fr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $\\frac{1}{3}$ of 18?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide by the denominator." }],
            steps: [
              { reasoning: "$18 \\div 3 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{3}$ of 18 is 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u1-s3-fr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cake is cut into 6 equal slices. Sam eats 2 slices. What fraction of the cake did Sam eat?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{4}$" },
            { id: "b", text: "$\\frac{6}{2}$" },
            { id: "c", text: "$\\frac{2}{6}$" },
            { id: "d", text: "$\\frac{1}{6}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Parts eaten over total parts." }],
            steps: [{ reasoning: "2 slices out of 6 → $\\frac{2}{6}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2}{6}$",
          },
        },
        {
          id: "cipm-u1-s3-fr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ribbon is divided into 4 equal parts. (a) What fraction is one part? (b) What fraction is three parts? (c) What fraction is the whole ribbon? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Parts over equal parts of the whole." }],
            steps: [
              { reasoning: "(a) One part = $\\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Three parts = $\\frac{3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "(c) The whole = $\\frac{4}{4} = 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{1}{4}$ (b) $\\frac{3}{4}$ (c) $\\frac{4}{4}$ = whole",
          },
        },
        {
          id: "cipm-u1-s3-fr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these fractions is the largest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{3}$" },
            { id: "b", text: "$\\frac{1}{8}$" },
            { id: "c", text: "$\\frac{1}{4}$" },
            { id: "d", text: "$\\frac{1}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing unit fractions", statement: "Bigger denominator = smaller part." }],
            steps: [{ reasoning: "$\\frac{1}{2}$ is bigger than $\\frac{1}{3}$, $\\frac{1}{4}$ and $\\frac{1}{8}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u1-s3-fr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{1}{5}$ of 30?",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "150" },
            { id: "c", text: "25" },
            { id: "d", text: "6" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide by denominator." }],
            steps: [{ reasoning: "$30 \\div 5 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u1-s3-fr-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 12 counters. (a) What is $\\frac{1}{4}$ of 12? (b) What is $\\frac{1}{3}$ of 12? (c) Which is bigger? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fractions of amounts", statement: "Divide by denominator; compare." }],
            steps: [
              { reasoning: "(a) $12 \\div 4 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $12 \\div 3 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $\\frac{1}{3}$ of 12 (=4) is bigger than $\\frac{1}{4}$ of 12 (=3).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) 4 (c) $\\frac{1}{3}$ of 12 is bigger",
          },
        },
        {
          id: "cipm-u1-s3-fr-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is divided into 2 equal parts and 1 part is shaded. What fraction is shaded?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{3}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{1}{4}$" },
            { id: "d", text: "$\\frac{2}{1}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Shaded parts over total parts." }],
            steps: [{ reasoning: "1 shaded out of 2 equal parts = $\\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u1-s3-fr-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $\\frac{1}{6}$ of 24?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide by denominator." }],
            steps: [
              { reasoning: "$24 \\div 6 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{6}$ of 24 is 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u1-s3-fr-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) What is $\\frac{1}{2}$ of 20? (b) What is $\\frac{1}{4}$ of 20? (c) What is $\\frac{1}{5}$ of 20? (d) A chocolate bar has 8 squares. You eat 3 squares — what fraction is left? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fractions of amounts", statement: "Divide by denominator; parts over whole." }],
            steps: [
              { reasoning: "(a) $20 \\div 2 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $20 \\div 4 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $20 \\div 5 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "(d) 8 − 3 = 5 left, so $\\frac{5}{8}$ remains.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 (b) 5 (c) 4 (d) $\\frac{5}{8}$",
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
