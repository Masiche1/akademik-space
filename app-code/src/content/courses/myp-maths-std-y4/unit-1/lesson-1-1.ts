import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypms4-u1-lesson-1-1",
  code: "1-1",
  title: "Surds and Indices",
  goal: "I CAN simplify surds, apply the laws of indices with integer and negative powers, and work with numbers in different forms.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Surd", definition: "An irrational number written as the root of a rational number, e.g. $\\sqrt{12}=2\\sqrt{3}$." },
    { term: "Index (power)", definition: "The small number showing how many times a base is multiplied by itself." },
    { term: "Negative index", definition: "A power that means 'one over': $a^{-n}=\\frac{1}{a^n}$." },
    { term: "Zero index", definition: "Any non-zero number to the power 0 equals 1: $a^0=1$." },
    { term: "Like surds", definition: "Surds with the same radicand that can be added or subtracted, e.g. $3\\sqrt{5}+2\\sqrt{5}=5\\sqrt{5}$." },
  ],
  concepts: [
    {
      id: "mypms4-u1-surds",
      title: "Simplifying surds",
      skill: "Simplify square roots by extracting square factors and add or subtract like surds.",
      lesson: {
        sections: [
          {
            heading: "What is a surd?",
            body: "A **surd** is an exact way of writing an irrational root, such as $\\sqrt{2}$ or $\\sqrt{12}$. We simplify surds by finding the largest square factor: $\\sqrt{12}=\\sqrt{4\\times3}=\\sqrt{4}\\times\\sqrt{3}=2\\sqrt{3}$.",
          },
          {
            heading: "Adding and subtracting surds",
            body: "Only **like surds** (same radicand) can be combined: $5\\sqrt{3}-2\\sqrt{3}=3\\sqrt{3}$. Unlike surds such as $\\sqrt{2}$ and $\\sqrt{3}$ cannot be added directly. First simplify each surd, then combine like terms.",
          },
          {
            heading: "Multiplying surds",
            body: "Multiply the numbers outside and inside the roots separately: $2\\sqrt{3}\\times4\\sqrt{5}=8\\sqrt{15}$. If the product inside is a perfect square, simplify: $\\sqrt{3}\\times\\sqrt{12}=\\sqrt{36}=6$.",
          },
        ],
        keyFormulas: [
          { name: "Simplifying", statement: "$\\sqrt{ab}=\\sqrt{a}\\times\\sqrt{b}$" },
          { name: "Combining", statement: "$a\\sqrt{c}+b\\sqrt{c}=(a+b)\\sqrt{c}$" },
        ],
        workedExample: {
          problem: "Simplify $\\sqrt{50}+\\sqrt{8}$.",
          solution: "$\\sqrt{50}=5\\sqrt{2}$ and $\\sqrt{8}=2\\sqrt{2}$, so the sum is $5\\sqrt{2}+2\\sqrt{2}=7\\sqrt{2}$.",
        },
      },
      questions: [
        {
          id: "mypms4-u1-surd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\sqrt{18}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\sqrt{2}$" },
              { id: "b", text: "$9\\sqrt{2}$" },
              { id: "c", text: "$6\\sqrt{3}$" },
              { id: "d", text: "$2\\sqrt{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd simplification", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$; extract the largest square factor." },
            ],
            steps: [
              { reasoning: "$\\sqrt{18}=\\sqrt{9\\times2}=3\\sqrt{2}$.", working: "\\sqrt{18}=3\\sqrt{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3\\sqrt{2}$",
            commonErrors: ["Writing $\\sqrt{18}=9\\sqrt{2}$ — dividing instead of extracting the square factor."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u1-surd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $4\\sqrt{3}+5\\sqrt{12}$, giving your answer in the form $a\\sqrt{b}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9\\sqrt{12}$" },
              { id: "b", text: "$14\\sqrt{3}$" },
              { id: "c", text: "$9\\sqrt{3}$" },
              { id: "d", text: "$24\\sqrt{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like surds", statement: "Simplify first, then combine terms with the same radicand." },
            ],
            steps: [
              { reasoning: "$\\sqrt{12}=2\\sqrt{3}$, so $5\\sqrt{12}=10\\sqrt{3}$.", working: "5\\sqrt{12}=10\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "$4\\sqrt{3}+10\\sqrt{3}=14\\sqrt{3}$.", working: "4\\sqrt{3}+10\\sqrt{3}=14\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14\\sqrt{3}$",
            commonErrors: ["Adding radicands: $4\\sqrt{3}+5\\sqrt{12}\\neq9\\sqrt{15}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rationalise the denominator: $\\frac{6}{\\sqrt{3}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\sqrt{2}$" },
              { id: "b", text: "$2\\sqrt{3}$" },
              { id: "c", text: "$\\sqrt{18}$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rationalising", statement: "Multiply numerator and denominator by the surd." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by $\\sqrt{3}$: $\\frac{6\\sqrt{3}}{3}=2\\sqrt{3}$.", working: "\\frac{6\\sqrt{3}}{\\sqrt{3}\\sqrt{3}}=\\frac{6\\sqrt{3}}{3}=2\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the fraction.", working: "2\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "2\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{3}$",
            commonErrors: ["Leaving the denominator as $\\sqrt{3}$ without multiplying through."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student is simplifying expressions involving surds.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{72}$.", marks: 2 },
            { label: "b", prompt: "Simplify $7\\sqrt{2}-3\\sqrt{8}$.", marks: 3 },
            { label: "c", prompt: "Work out $\\sqrt{6}\\times\\sqrt{24}$, giving an exact answer.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd rules", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$; combine only like surds." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt{72}=\\sqrt{36\\times2}=6\\sqrt{2}$.", working: "\\sqrt{72}=6\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified surd.", working: "6\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\sqrt{8}=2\\sqrt{2}$ so $3\\sqrt{8}=6\\sqrt{2}$.", working: "3\\sqrt{8}=6\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract like surds.", working: "7\\sqrt{2}-6\\sqrt{2}=\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", working: "\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\sqrt{6}\\times\\sqrt{24}=\\sqrt{144}$.", working: "\\sqrt{6}\\times\\sqrt{24}=\\sqrt{144}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\sqrt{144}=12$.", working: "12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Give the exact answer.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6\\sqrt{2}$ (b) $\\sqrt{2}$ (c) $12$",
            commonErrors: ["In (c), writing $\\sqrt{6}\\times\\sqrt{24}=\\sqrt{30}$ — must multiply radicands."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u1-surd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\sqrt{48}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\sqrt{12}$" },
              { id: "b", text: "$8\\sqrt{3}$" },
              { id: "c", text: "$4\\sqrt{3}$" },
              { id: "d", text: "$6\\sqrt{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd simplification", statement: "$\\sqrt{ab}=\\sqrt{a}\\times\\sqrt{b}$; extract the largest square factor." },
            ],
            steps: [
              { reasoning: "$\\sqrt{48}=\\sqrt{16\\times3}=4\\sqrt{3}$.", working: "\\sqrt{48}=4\\sqrt{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4\\sqrt{3}$",
            commonErrors: ["Writing $\\sqrt{48}=8\\sqrt{3}$ — confusing $\\sqrt{48}$ with $\\sqrt{16}\\times3$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u1-surd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $\\sqrt{98}$ in the form $k\\sqrt{2}$. State the value of $k$.",
          response: {
            type: "numeric",
            parts: [{ label: "$k$", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd simplification", statement: "Extract the largest square factor." },
            ],
            steps: [
              { reasoning: "$\\sqrt{98}=\\sqrt{49\\times2}=7\\sqrt{2}$, so $k=7$.", working: "\\sqrt{98}=7\\sqrt{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$k=7$",
            commonErrors: ["Giving $98$ or $\\sqrt{49}$ instead of the coefficient $7$."],
            examinerNote: "B1 for $k=7$.",
          },
        },
        {
          id: "mypms4-u1-surd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $3\\sqrt{5}-\\sqrt{20}$, giving your answer in the form $a\\sqrt{b}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{45}$" },
              { id: "b", text: "$\\sqrt{15}$" },
              { id: "c", text: "$\\sqrt{5}$" },
              { id: "d", text: "$5\\sqrt{5}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like surds", statement: "Simplify first, then combine terms with the same radicand." },
            ],
            steps: [
              { reasoning: "$\\sqrt{20}=2\\sqrt{5}$, so $\\sqrt{20}=2\\sqrt{5}$.", working: "\\sqrt{20}=2\\sqrt{5}", marks: 1, markCode: "M" },
              { reasoning: "$3\\sqrt{5}-2\\sqrt{5}=\\sqrt{5}$.", working: "3\\sqrt{5}-2\\sqrt{5}=\\sqrt{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{5}$",
            commonErrors: ["Subtracting radicands: $3\\sqrt{5}-\\sqrt{20}\\neq\\sqrt{-15}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\sqrt{5}\\times\\sqrt{45}$, giving an exact answer.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 15 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surd multiplication", statement: "$\\sqrt{a}\\times\\sqrt{b}=\\sqrt{ab}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{5}\\times\\sqrt{45}=\\sqrt{225}$.", working: "\\sqrt{5}\\times\\sqrt{45}=\\sqrt{225}", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{225}=15$.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
            commonErrors: ["Adding radicands to get $\\sqrt{50}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rationalise the denominator: $\\frac{4}{\\sqrt{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$2\\sqrt{2}$" },
              { id: "c", text: "$4\\sqrt{2}$" },
              { id: "d", text: "$\\sqrt{8}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rationalising", statement: "Multiply numerator and denominator by the surd." },
            ],
            steps: [
              { reasoning: "Multiply top and bottom by $\\sqrt{2}$: $\\frac{4\\sqrt{2}}{2}=2\\sqrt{2}$.", working: "\\frac{4\\sqrt{2}}{2}=2\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "State the simplified answer.", working: "2\\sqrt{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{2}$",
            commonErrors: ["Multiplying only the numerator by $\\sqrt{2}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $\\sqrt{8}\\times\\sqrt{18}$, giving an exact answer.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 12 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surd multiplication", statement: "$\\sqrt{a}\\times\\sqrt{b}=\\sqrt{ab}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{8}\\times\\sqrt{18}=\\sqrt{144}$.", working: "\\sqrt{8}\\times\\sqrt{18}=\\sqrt{144}", marks: 1, markCode: "M" },
              { reasoning: "Simplify each surd first as a check: $2\\sqrt{2}\\times3\\sqrt{2}=6\\times2=12$.", working: "2\\sqrt{2}\\times3\\sqrt{2}=12", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Multiplying radicands as $8\\times18$ without the root: $144$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Simplify $\\sqrt{75}+\\sqrt{12}$. Give your answer in the form $a\\sqrt{b}$ and state the value of $a$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$ in $a\\sqrt{b}$", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like surds", statement: "Simplify each surd, then combine like terms." },
            ],
            steps: [
              { reasoning: "$\\sqrt{75}=5\\sqrt{3}$ and $\\sqrt{12}=2\\sqrt{3}$, so the sum is $7\\sqrt{3}$.", working: "5\\sqrt{3}+2\\sqrt{3}=7\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "The coefficient is $a=7$.", working: "a=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7\\sqrt{3}$, so $a=7$",
            commonErrors: ["Writing $\\sqrt{87}$ — adding radicands."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand and simplify $(\\sqrt{2}+\\sqrt{3})^2$, giving your answer in the form $a+b\\sqrt{6}$. Find the value of $a+b$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a+b$", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial expansion", statement: "$(x+y)^2=x^2+2xy+y^2$." },
            ],
            steps: [
              { reasoning: "$(\\sqrt{2}+\\sqrt{3})^2=2+2\\sqrt{6}+3$.", working: "2+2\\sqrt{6}+3", marks: 1, markCode: "M" },
              { reasoning: "Combine: $5+2\\sqrt{6}$, so $a=5$ and $b=2$.", working: "a=5,\\ b=2", marks: 1, markCode: "M" },
              { reasoning: "$a+b=5+2=7$.", working: "a+b=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a+b=7$",
            commonErrors: ["Writing $(\\sqrt{2}+\\sqrt{3})^2=2+3=5$ — forgetting the middle term."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student is simplifying expressions involving surds.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{200}$.", marks: 2 },
            { label: "b", prompt: "Simplify $5\\sqrt{2}+3\\sqrt{8}$.", marks: 2 },
            { label: "c", prompt: "Rationalise $\\frac{9}{\\sqrt{3}}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd rules", statement: "$\\sqrt{ab}=\\sqrt{a}\\sqrt{b}$; combine only like surds; rationalise by multiplying by the surd." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt{200}=\\sqrt{100\\times2}=10\\sqrt{2}$.", working: "10\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified surd.", working: "10\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\sqrt{8}=2\\sqrt{2}$, so $3\\sqrt{8}=6\\sqrt{2}$.", working: "3\\sqrt{8}=6\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$5\\sqrt{2}+6\\sqrt{2}=11\\sqrt{2}$.", working: "11\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply top and bottom by $\\sqrt{3}$: $\\frac{9\\sqrt{3}}{3}$.", working: "\\frac{9\\sqrt{3}}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\frac{9\\sqrt{3}}{3}=3\\sqrt{3}$.", working: "3\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10\\sqrt{2}$ (b) $11\\sqrt{2}$ (c) $3\\sqrt{3}$",
            commonErrors: ["In (c), writing $\\frac{9}{\\sqrt{3}}=3$ — must keep the surd."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u1-surd-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Simplify $6\\sqrt{2}+4\\sqrt{18}$. Write your answer in the form $a\\sqrt{b}$ and state the value of $a$.",
          response: {
            type: "numeric",
            parts: [{ label: "$a$ in $a\\sqrt{b}$", answer: 18 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like surds", statement: "Simplify each surd, then combine like terms." },
            ],
            steps: [
              { reasoning: "$\\sqrt{18}=3\\sqrt{2}$, so $4\\sqrt{18}=12\\sqrt{2}$.", working: "4\\sqrt{18}=12\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "$6\\sqrt{2}+12\\sqrt{2}=18\\sqrt{2}$.", working: "18\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "The coefficient is $a=18$.", working: "a=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18\\sqrt{2}$, so $a=18$",
            commonErrors: ["Failing to simplify $\\sqrt{18}$ before combining."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $\\sqrt{2}$ and $\\sqrt{8}$ are like surds, and hence simplify $\\sqrt{8}+\\sqrt{2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like surds", statement: "Like surds have the same radicand after simplification." },
            ],
            steps: [
              { reasoning: "$\\sqrt{8}=\\sqrt{4\\times2}=2\\sqrt{2}$, which has the same radicand 2 as $\\sqrt{2}$.", working: "\\sqrt{8}=2\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Since both are multiples of $\\sqrt{2}$, they are like surds and can be added.", working: "2\\sqrt{2}+\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "$2\\sqrt{2}+\\sqrt{2}=3\\sqrt{2}$.", working: "3\\sqrt{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{8}+\\sqrt{2}=3\\sqrt{2}$",
            commonErrors: ["Claiming $\\sqrt{8}$ and $\\sqrt{2}$ are unlike surds without simplifying first."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-surd-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which expression is equal to $\\sqrt{27}+\\sqrt{12}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{39}$" },
              { id: "b", text: "$13\\sqrt{3}$" },
              { id: "c", text: "$7\\sqrt{3}$" },
              { id: "d", text: "$5\\sqrt{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd simplification", statement: "$\\sqrt{27}=3\\sqrt{3}$ and $\\sqrt{12}=2\\sqrt{3}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{27}=3\\sqrt{3}$ and $\\sqrt{12}=2\\sqrt{3}$.", working: "3\\sqrt{3}+2\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Combine like surds: $3\\sqrt{3}+2\\sqrt{3}=5\\sqrt{3}$.", working: "5\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "5\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $5\\sqrt{3}$",
            commonErrors: ["Adding radicands to get $\\sqrt{39}$ or $13\\sqrt{3}$."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u1-indices",
      title: "Laws of indices",
      skill: "Apply index laws including negative and zero powers, and evaluate expressions with indices.",
      lesson: {
        sections: [
          {
            heading: "Index laws",
            body: "The laws of indices let us simplify expressions without evaluating every power:\n\n- $a^m\\times a^n=a^{m+n}$\n- $a^m\\div a^n=a^{m-n}$\n- $(a^m)^n=a^{mn}$\n- $a^0=1$ (for $a\\ne0$)\n- $a^{-n}=\\frac{1}{a^n}$",
          },
          {
            heading: "Negative indices",
            body: "A negative index means 'reciprocal': $2^{-3}=\\frac{1}{2^3}=\\frac{1}{8}$. This lets us write fractions as powers: $\\frac{1}{x^2}=x^{-2}$. Negative indices follow the same laws: $x^3\\times x^{-1}=x^{3+(-1)}=x^2$.",
          },
          {
            heading: "Working with powers",
            body: "Evaluate step by step. For $\\left(\\frac{1}{2}\\right)^{-2}$, first rewrite as $2^2=4$. For expressions like $\\frac{6^4}{6^2}$, subtract indices: $6^{4-2}=6^2=36$.",
          },
        ],
        keyFormulas: [
          { name: "Product", statement: "$a^m\\times a^n=a^{m+n}$" },
          { name: "Quotient", statement: "$a^m\\div a^n=a^{m-n}$" },
          { name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
          { name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{x^5\\times x^{-2}}{x^3}$, giving your answer with a positive index.",
          solution: "Numerator: $x^{5-2}=x^3$. Then $\\frac{x^3}{x^3}=x^{3-3}=x^0=1$.",
        },
      },
      questions: [
        {
          id: "mypms4-u1-index-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $3^{-2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$-9$" },
              { id: "c", text: "$-6$" },
              { id: "d", text: "$\\frac{1}{9}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { reasoning: "$3^{-2}=\\frac{1}{3^2}=\\frac{1}{9}$.", working: "3^{-2}=\\frac{1}{9}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{9}$",
            commonErrors: ["Writing $-9$ — confusing negative index with negative number."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u1-index-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $y^7\\div y^3$, giving your answer with a positive index.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y^4$" },
              { id: "b", text: "$y^{10}$" },
              { id: "c", text: "$y^{-4}$" },
              { id: "d", text: "$y^{21}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quotient law", statement: "$a^m\\div a^n=a^{m-n}$." },
            ],
            steps: [
              { reasoning: "Subtract the indices.", working: "y^{7-3}=y^4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "y^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y^4$",
            commonErrors: ["Adding indices instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\left(\\frac{1}{4}\\right)^{-2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$" },
              { id: "b", text: "$\\frac{1}{16}$" },
              { id: "c", text: "$-16$" },
              { id: "d", text: "$8$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative index", statement: "$(\\frac{1}{a})^{-n}=a^n$." },
            ],
            steps: [
              { reasoning: "Flip the fraction and make the index positive: $4^2$.", working: "\\left(\\frac{1}{4}\\right)^{-2}=4^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power.", working: "4^2=16", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Giving $\\frac{1}{16}$ — forgetting to flip the fraction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student simplifies expressions using index laws.",
          parts: [
            { label: "a", prompt: "Simplify $a^4\\times a^3$.", marks: 2 },
            { label: "b", prompt: "Simplify $b^9\\div b^4$.", marks: 2 },
            { label: "c", prompt: "Simplify $(c^2)^5$.", marks: 2 },
            { label: "d", prompt: "Write $\\frac{1}{d^3}$ using a negative index.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "$a^m\\times a^n=a^{m+n}$; $a^m\\div a^n=a^{m-n}$; $(a^m)^n=a^{mn}$; $a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Add the indices.", working: "a^{4+3}=a^7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer.", working: "a^7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the indices.", working: "b^{9-4}=b^5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", working: "b^5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the indices.", working: "c^{2\\times5}=c^{10}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "c^{10}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the negative index rule.", working: "d^{-3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the answer.", working: "d^{-3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a^7$ (b) $b^5$ (c) $c^{10}$ (d) $d^{-3}$",
            commonErrors: ["In (c), adding indices instead of multiplying."],
            examinerNote: "M1 A1 per part.",
          },
        },
        {
          id: "mypms4-u1-index-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $7^0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$49$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Zero index", statement: "$a^0=1$ for $a\\ne0$." },
            ],
            steps: [
              { reasoning: "Any non-zero number to the power 0 equals 1.", working: "7^0=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $1$",
            commonErrors: ["Answering 0 — confusing $a^0$ with $a\\times0$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u1-index-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Express $\\frac{1}{16}$ as $2^n$. State the value of $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$n$", answer: -4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{16}=\\frac{1}{2^4}=2^{-4}$, so $n=-4$.", working: "2^{-4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$n=-4$",
            commonErrors: ["Writing $n=4$ — forgetting the index is negative for a reciprocal."],
            examinerNote: "B1 for $n=-4$.",
          },
        },
        {
          id: "mypms4-u1-index-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $x^6\\times x^2$, giving your answer with a positive index.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{12}$" },
              { id: "b", text: "$x^4$" },
              { id: "c", text: "$x^8$" },
              { id: "d", text: "$x^3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product law", statement: "$a^m\\times a^n=a^{m+n}$." },
            ],
            steps: [
              { reasoning: "Add the indices: $x^{6+2}=x^8$.", working: "x^{6+2}=x^8", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "x^8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^8$",
            commonErrors: ["Multiplying indices instead of adding."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $10^{-2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { reasoning: "$10^{-2}=\\frac{1}{10^2}=\\frac{1}{100}$.", working: "\\frac{1}{100}", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{100}=0.01$.", working: "0.01", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.01$",
            commonErrors: ["Writing $-100$ or $0.1$ — misplacing the decimal point."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $(x^3)^4$, giving your answer with a positive index.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^7$" },
              { id: "b", text: "$x^{64}$" },
              { id: "c", text: "$x^{81}$" },
              { id: "d", text: "$x^{12}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$." },
            ],
            steps: [
              { reasoning: "Multiply the indices: $x^{3\\times4}=x^{12}$.", working: "x^{12}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "x^{12}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^{12}$",
            commonErrors: ["Adding indices to get $x^7$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Simplify $x^5\\div x^{-2}$, giving your answer with a positive index.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{-7}$" },
              { id: "b", text: "$x^7$" },
              { id: "c", text: "$x^{10}$" },
              { id: "d", text: "$x^3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quotient law", statement: "$a^m\\div a^n=a^{m-n}$." },
            ],
            steps: [
              { reasoning: "Subtract indices: $x^{5-(-2)}=x^{5+2}=x^7$.", working: "x^{5-(-2)}=x^7", marks: 1, markCode: "M" },
              { reasoning: "Check the sign: subtracting a negative adds.", working: "5+2=7", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "x^7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^7$",
            commonErrors: ["Computing $x^{5-2}=x^3$ — ignoring the negative index."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\left(\\frac{1}{2}\\right)^{-3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 8 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative index", statement: "$(\\frac{1}{a})^{-n}=a^n$." },
            ],
            steps: [
              { reasoning: "Flip the fraction and make the index positive: $2^3$.", working: "2^3", marks: 1, markCode: "M" },
              { reasoning: "$2^3=8$.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Writing $\\frac{1}{8}$ — forgetting to flip the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{a^7\\times a^{-3}}{a^2}$, giving your answer in the form $a^n$. State the value of $n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$n$", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "$a^m\\times a^n=a^{m+n}$; $a^m\\div a^n=a^{m-n}$." },
            ],
            steps: [
              { reasoning: "Numerator: $a^{7+(-3)}=a^4$.", working: "a^{7-3}=a^4", marks: 1, markCode: "M" },
              { reasoning: "Divide: $\\frac{a^4}{a^2}=a^{4-2}=a^2$.", working: "a^{4-2}=a^2", marks: 1, markCode: "M" },
              { reasoning: "So $n=2$.", working: "n=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=2$",
            commonErrors: ["Adding all three indices: $7-3+2=6$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student simplifies expressions using index laws.",
          parts: [
            { label: "a", prompt: "Simplify $p^4\\times p^5$.", marks: 2 },
            { label: "b", prompt: "Simplify $q^9\\div q^6$.", marks: 1 },
            { label: "c", prompt: "Evaluate $2^{-3}$.", marks: 1 },
            { label: "d", prompt: "Write $\\frac{1}{r^2}$ using a negative index.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "$a^m\\times a^n=a^{m+n}$; $a^m\\div a^n=a^{m-n}$; $a^{-n}=\\frac{1}{a^n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Add the indices: $p^{4+5}=p^9$.", working: "p^9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer.", working: "p^9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the indices: $q^{9-6}=q^3$.", working: "q^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2^{-3}=\\frac{1}{2^3}=\\frac{1}{8}$.", working: "\\frac{1}{8}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the negative index rule: $\\frac{1}{r^2}=r^{-2}$.", working: "r^{-2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the answer.", working: "r^{-2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $p^9$ (b) $q^3$ (c) $\\frac{1}{8}$ (d) $r^{-2}$",
            commonErrors: ["In (d), writing $r^2$ instead of $r^{-2}$."],
            examinerNote: "M1 A1 for (a), A1 each for (b) and (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u1-index-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $(3^2)^2\\times3^{-2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 9 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "$(a^m)^n=a^{mn}$; $a^m\\times a^n=a^{m+n}$." },
            ],
            steps: [
              { reasoning: "$(3^2)^2=3^4$; then $3^4\\times3^{-2}=3^{4-2}=3^2$.", working: "3^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $3^2=9$.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["Computing $3^{2+2-2}=3^2$ correctly but evaluating wrongly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $x^0=1$ for any $x\\ne0$, using the laws of indices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Index laws", statement: "$a^m\\div a^n=a^{m-n}$; equal powers give a zero index." },
            ],
            steps: [
              { reasoning: "Consider $\\frac{x^n}{x^n}$: it equals 1 because any non-zero number divided by itself is 1.", working: "\\frac{x^n}{x^n}=1", marks: 1, markCode: "M" },
              { reasoning: "By the quotient law, $\\frac{x^n}{x^n}=x^{n-n}=x^0$.", working: "x^{n-n}=x^0", marks: 1, markCode: "M" },
              { reasoning: "Therefore $x^0=1$.", working: "x^0=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^0=1$ follows from $\\frac{x^n}{x^n}=1$ and $\\frac{x^n}{x^n}=x^0$.",
            commonErrors: ["Stating $x^0=1$ without justification."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u1-index-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which expression is equal to $\\frac{x^8}{x^3}\\times x^{-2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^7$" },
              { id: "b", text: "$x^{-3}$" },
              { id: "c", text: "$x^{10}$" },
              { id: "d", text: "$x^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "$a^m\\div a^n=a^{m-n}$; $a^m\\times a^n=a^{m+n}$." },
            ],
            steps: [
              { reasoning: "$\\frac{x^8}{x^3}=x^5$.", working: "x^5", marks: 1, markCode: "M" },
              { reasoning: "$x^5\\times x^{-2}=x^{5-2}=x^3$.", working: "x^{5-2}=x^3", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "x^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x^3$",
            commonErrors: ["Adding all indices to get $x^{10}$."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
