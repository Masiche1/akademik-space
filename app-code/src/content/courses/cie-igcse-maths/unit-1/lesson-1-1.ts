import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ciem-u1-lesson-1-1",
  code: "1-1",
  title: "Types of Numbers and the Laws of Indices",
  goal: "I CAN classify numbers, use prime factorisation to find HCF and LCM, convert recurring decimals to fractions, and apply the laws of indices including fractional and negative indices.",
  standards: ["0580 1.1", "0580 1.2"],
  vocabulary: [
    { term: "Prime number", definition: "A whole number greater than 1 whose only factors are 1 and itself, such as 7 or 13." },
    { term: "Prime factorisation", definition: "Writing a whole number as a product of prime numbers, usually in index form, e.g. $72=2^3\\times3^2$." },
    { term: "Highest common factor (HCF)", definition: "The largest number that divides exactly into each of two or more numbers." },
    { term: "Lowest common multiple (LCM)", definition: "The smallest positive number that is a multiple of each of two or more numbers." },
    { term: "Recurring decimal", definition: "A decimal in which one or more digits repeat forever, e.g. $0.\\dot{3}=0.333\\ldots$" },
    { term: "Irrational number", definition: "A real number that cannot be written as a fraction of two integers; its decimal expansion never ends or repeats, e.g. $\\pi$ or $\\sqrt{2}$." },
    { term: "Index law", definition: "A rule for combining powers, e.g. $a^m \\times a^n=a^{m+n}$, valid for integer, fractional and negative indices." },
  ],
  concepts: [
    {
      id: "ciem-u1-number-types",
      title: "Number types, prime factorisation and recurring decimals",
      skill: "Classify numbers, factorise into primes, find HCF and LCM, and write recurring decimals as fractions.",
      lesson: {
        sections: [
          {
            heading: "Sets of numbers",
            body: "The number sets nest inside each other: natural numbers $\\subset$ integers $\\subset$ rational numbers $\\subset$ real numbers.\n\n- **Natural numbers**: 1, 2, 3, ...\n- **Integers**: natural numbers, their negatives, and 0.\n- **Rational numbers**: any number that can be written as $\\frac{a}{b}$ where $a$ and $b$ are integers and $b\\ne0$. This includes fractions, terminating decimals and **recurring decimals**.\n- **Irrational numbers**: real numbers that cannot be written as a fraction, such as $\\pi$ and $\\sqrt{2}$. Their decimals never end or repeat.\n\nEvery rational number has a decimal expansion that either terminates or recurs; every irrational number's expansion does neither.",
          },
          {
            heading: "Prime factorisation, HCF and LCM",
            body: "Break each number into primes using a factor tree or repeated division, then write it in index form. For example $252=2^2\\times3^2\\times7$.\n\nFor two numbers in prime factorised form:\n\n- the **HCF** takes each **common** prime to its **lowest** power\n- the **LCM** takes **every** prime that appears to its **highest** power\n\nCheck your answer: $\\text{HCF}\\times\\text{LCM}=\\text{product of the two numbers}$.",
          },
          {
            heading: "Recurring decimals as fractions",
            body: "Let $x$ be the recurring decimal and multiply by a power of 10 so the repeating tails line up, then subtract. For $x=0.\\dot{3}$: $10x=3.333\\ldots$, so $9x=3$ and $x=\\frac{1}{3}$.\n\nIf a non-repeating digit comes first, e.g. $x=0.1\\dot{3}$, use $10x=1.333\\ldots$ and $100x=13.333\\ldots$; subtracting gives $90x=12$, so $x=\\frac{2}{15}$.",
          },
        ],
        keyFormulas: [
          { name: "HCF", statement: "Product of common primes, each to the lowest power." },
          { name: "LCM", statement: "Product of all primes, each to the highest power." },
          { name: "Recurring decimal", statement: "Multiply by $10^n$ so the repeats align, subtract, divide." },
          { name: "Check", statement: "$\\text{HCF}\\times\\text{LCM}=\\text{number}_1\\times\\text{number}_2$" },
        ],
        workedExample: {
          problem: "Write $0.2\\dot{7}$ as a fraction in its simplest form.",
          solution: "Let $x=0.2777\\ldots$. Then $10x=2.777\\ldots$ and $100x=27.777\\ldots$. Subtracting, $90x=25$, so $x=\\frac{25}{90}=\\frac{5}{18}$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-number-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following numbers is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.375$" },
              { id: "b", text: "$\\sqrt{4}$" },
              { id: "c", text: "$\\pi$" },
              { id: "d", text: "$\\frac{7}{9}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "A number that can be written as $\\frac{a}{b}$ with integers $a$, $b$ and $b\\ne0$; its decimal terminates or recurs." },
              { kind: "definition", name: "Irrational number", statement: "A real number that cannot be written as $\\frac{a}{b}$; its decimal never ends or repeats." },
            ],
            steps: [
              { reasoning: "$0.375=\\frac{3}{8}$, $\\sqrt{4}=2$ and $\\frac{7}{9}$ is already a fraction, so all three are rational.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\pi$",
            commonErrors: ["Choosing $\\sqrt{4}$, forgetting that $\\sqrt{4}=2$ is rational.", "Thinking all decimals are irrational — only non-terminating, non-recurring ones are."],
            examinerNote: "Award the mark for identifying $\\pi$ as the only number that cannot be written as a fraction.",
          },
        },
        {
          id: "ciem-u1-number-types-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the recurring decimal $0.\\dot{7}$ as a fraction in its simplest form. Enter the numerator and the denominator.",
          response: {
            type: "numeric",
            parts: [
              { label: "Numerator", answer: 7 },
              { label: "Denominator", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recurring decimal method", statement: "Multiply by $10^n$ so the recurring parts match, subtract to remove the infinite tail, then divide." },
            ],
            steps: [
              { reasoning: "Let $x=0.777\\ldots$; then $10x=7.777\\ldots$ and $x$ subtracted leaves a terminating decimal.", working: "10x-x=7.777\\ldots-0.777\\ldots\\Rightarrow 9x=7", marks: 1, markCode: "M" },
              { reasoning: "Divide and simplify — 7 and 9 share no factor.", working: "x=\\frac{7}{9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{9}$",
            commonErrors: ["Writing $\\frac{7}{10}$ by treating it as a terminating decimal.", "Forgetting to subtract $x$ from $10x$."],
          },
        },
        {
          id: "ciem-u1-number-types-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the number of factors of 36, including 1 and 36 itself.",
          response: { type: "numeric", parts: [{ label: "Number of factors", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Number of factors", statement: "If $n=p_1^{a_1}p_2^{a_2}\\cdots p_k^{a_k}$ then $n$ has $(a_1+1)(a_2+1)\\cdots(a_k+1)$ factors." },
            ],
            steps: [
              { reasoning: "Factorise 36 into primes.", working: "36=2^2\\times3^2", marks: 1, markCode: "M" },
              { reasoning: "Increase each power by 1 and multiply.", working: "(2+1)(2+1)=9", marks: 1, markCode: "M" },
              { reasoning: "The factors are 1, 2, 3, 4, 6, 9, 12, 18, 36 — nine in total, confirming the count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 factors",
            commonErrors: ["Listing only factors greater than 1 and forgetting 1 and 36.", "Counting prime factors only."],
          },
        },
        {
          id: "ciem-u1-number-types-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two ropes have lengths 252 cm and 378 cm. Each rope is cut into pieces of equal length, and the pieces are to be as long as possible.",
          parts: [
            { label: "a", prompt: "Write 252 as a product of its prime factors.", marks: 2 },
            { label: "b", prompt: "Write 378 as a product of its prime factors. Hence write down the HCF and the LCM of 252 and 378.", marks: 3 },
            { label: "c", prompt: "Find the length of each piece of rope.", marks: 2 },
            { label: "d", prompt: "Find the total number of pieces obtained from both ropes.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) HCF", answer: 126, unit: "cm" },
              { label: "(b) LCM", answer: 756 },
              { label: "(c) piece length", answer: 126, unit: "cm" },
              { label: "(d) total pieces", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "HCF from primes", statement: "Multiply the common primes, each to its lowest power." },
              { kind: "principle", name: "LCM from primes", statement: "Multiply all the primes, each to its highest power." },
              { kind: "principle", name: "Largest equal pieces", statement: "The longest equal piece length dividing both ropes is their HCF." },
            ],
            steps: [
              { part: "a", reasoning: "Repeated division by primes.", working: "252=2\\times126=2^2\\times63=2^2\\times3^2\\times7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Index form.", working: "252=2^2\\times3^2\\times7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise 378.", working: "378=2\\times189=2\\times3^3\\times7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "HCF: lowest powers of the common primes 2, 3 and 7.", working: "2\\times3^2\\times7=126", marks: 1, markCode: "A" },
              { part: "b", reasoning: "LCM: highest power of every prime.", working: "2^2\\times3^3\\times7=756", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The longest possible equal pieces have length equal to the HCF.", working: "\\text{piece}=126\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the length with units.", working: "126\\text{ cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide each rope length by the piece length.", working: "252\\div126=2,\\quad 378\\div126=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the two counts.", working: "2+3=5\\text{ pieces}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2^2\\times3^2\\times7$ (b) HCF $=126$, LCM $=756$ (c) $126$ cm (d) $5$ pieces",
            commonErrors: ["Using the LCM instead of the HCF for the piece length.", "Swapping lowest and highest powers.", "Forgetting to add the piece counts from both ropes."],
            examinerNote: "Check in (b): $126\\times756=95256=252\\times378$.",
          },
        },
      ],
    },
    {
      id: "ciem-u1-laws-of-indices",
      title: "The laws of indices",
      skill: "Apply the index laws to simplify expressions and solve equations with integer, fractional and negative indices.",
      lesson: {
        sections: [
          {
            heading: "The index laws",
            body: "For $a\\ne0$ and rational $m,n$:\n\n- $a^m\\times a^n=a^{m+n}$\n- $a^m\\div a^n=a^{m-n}$\n- $(a^m)^n=a^{mn}$\n- $a^0=1$\n- $a^{-n}=\\frac{1}{a^n}$\n- $a^{\\frac{1}{n}}=\\sqrt[n]{a}$, so $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$\n\nThese laws let you rewrite every expression with the same base, or the same power, before combining.",
          },
          {
            heading: "Choosing a common base",
            body: "To simplify a quotient or product of powers with different bases, rewrite each base as a power of a common number. For example $8=2^3$ and $4=2^2$, so $\\frac{8^2}{4^3}=\\frac{(2^3)^2}{(2^2)^3}=\\frac{2^6}{2^6}=1$.",
          },
          {
            heading: "Solving index equations",
            body: "If both sides can be written with the same base, equate the indices. For example $5^{2x-1}=125=5^3$ gives $2x-1=3$, so $x=2$. If the bases cannot be matched, take logarithms — but at IGCSE, matching bases is the expected method.",
          },
        ],
        keyFormulas: [
          { name: "Product", statement: "$a^m\\times a^n=a^{m+n}$" },
          { name: "Quotient", statement: "$a^m\\div a^n=a^{m-n}$" },
          { name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
          { name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$" },
          { name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Evaluate $27^{-\\frac{2}{3}}$.",
          solution: "$27=3^3$, so $27^{-\\frac{2}{3}}=(3^3)^{-\\frac{2}{3}}=3^{-2}=\\frac{1}{9}$.",
        },
      },
      questions: [
        {
          id: "ciem-u1-laws-of-indices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(2^3)^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$36$" },
              { id: "c", text: "$64$" },
              { id: "d", text: "$216$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$." },
            ],
            steps: [
              { reasoning: "Multiply the indices: $(2^3)^2=2^{3\\times2}=2^6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $64$",
            commonErrors: ["Multiplying the base by the outer index to get 12.", "Adding indices inside to get $2^5=32$.", "Computing $6^3=216$ by multiplying bases."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{3^8}{3^5}$. Enter the answer as a single number.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient law", statement: "$a^m\\div a^n=a^{m-n}$ for $a\\ne0$." },
            ],
            steps: [
              { reasoning: "Subtract the indices with the same base.", working: "3^{8-5}=3^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power.", working: "3^3=27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
            commonErrors: ["Subtracting to get $3^3$ but evaluating as $3\\times3=9$.", "Dividing the indices: $3^{8\\div5}$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $5^{2x-1}=125$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index equation method", statement: "If $a^m=a^n$ with $a\\ne0,1$ then $m=n$; rewrite both sides with the same base first." },
            ],
            steps: [
              { reasoning: "Write 125 as a power of 5.", working: "125=5^3", marks: 1, markCode: "M" },
              { reasoning: "Equate the indices.", working: "2x-1=3", marks: 1, markCode: "M" },
              { reasoning: "Solve the linear equation.", working: "2x=4\\Rightarrow x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$",
            commonErrors: ["Equating $2x-1$ to 125 instead of to the index 3.", "Sign error: $2x-1=3$ giving $x=1$."],
          },
        },
        {
          id: "ciem-u1-laws-of-indices-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate each expression, giving exact answers.",
          parts: [
            { label: "a", prompt: "Evaluate $27^{\\frac{2}{3}}$.", marks: 3 },
            { label: "b", prompt: "Evaluate $16^{-\\frac{3}{4}}$.", marks: 3 },
            { label: "c", prompt: "Solve $2^{x+1}=32$ for $x$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 9 },
              { label: "(b)", answer: 0.125 },
              { label: "(c) x", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m=(a^m)^{\\frac{1}{n}}$" },
              { kind: "law", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$" },
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n=a^{mn}$" },
            ],
            steps: [
              { part: "a", reasoning: "Write 27 as a power of 3.", working: "27=3^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply the fractional index: cube root then square (or power then root).", working: "27^{\\frac{2}{3}}=(\\sqrt[3]{27})^2=3^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "3^2=9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write 16 as a power of 2 and apply the negative fractional index.", working: "16^{-\\frac{3}{4}}=(2^4)^{-\\frac{3}{4}}=2^{-3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the negative index law.", working: "2^{-3}=\\frac{1}{2^3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{1}{8}=0.125", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write 32 as a power of 2.", working: "32=2^5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equate the indices.", working: "x+1=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $9$ (b) $\\frac{1}{8}$ (c) $x=4$",
            commonErrors: ["Reading $a^{\\frac{m}{n}}$ as $\\frac{a^m}{a^n}$ or $\\frac{a^m}{n}$.", "In (b) computing $2^{-3}$ as $-8$ instead of $\\frac{1}{8}$.", "In (c) equating $x+1$ to 32 rather than to 5."],
            examinerNote: "Exact answers are required in (a) and (b); $0.125$ is accepted for (b) but $\\frac{1}{8}$ is preferred.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u1-number-indices-notes",
      title: "Number types, factors and indices — revision notes",
      summary: "Number sets, prime factorisation, HCF/LCM, recurring decimals and every index law with worked examples.",
      sections: [
        {
          heading: "Number sets at a glance",
          body: "Memorise the nesting: naturals $\\subset$ integers $\\subset$ rationals $\\subset$ reals. Irrationals sit inside the reals alongside the rationals.\n\nA quick test for rational: can it be written $\\frac{a}{b}$? Terminating decimals and recurring decimals are rational; $\\pi$, $\\sqrt{2}$, $\\sqrt{3}$ are not. Perfect squares and perfect cubes of integers are rational even though they look like roots: $\\sqrt{4}=2$, $\\sqrt[3]{8}=2$.",
        },
        {
          heading: "Prime factorisation, HCF and LCM",
          body: "Write each number in index form first — it makes the comparison mechanical.\n\n- **HCF**: for each prime that appears in *both* factorizations, take the *lowest* power.\n- **LCM**: for *every* prime that appears in *either* factorization, take the *highest* power.\n\nSanity check that almost always catches errors: $\\text{HCF}\\times\\text{LCM}$ should equal the product of the two numbers.\n\n**Worked example.** Find the HCF and LCM of $252=2^2\\times3^2\\times7$ and $378=2\\times3^3\\times7$.\n\n- HCF $=2^1\\times3^2\\times7=126$\n- LCM $=2^2\\times3^3\\times7=756$\n- Check: $126\\times756=95\\,256=252\\times378$ ✓",
        },
        {
          heading: "Recurring decimals",
          body: "The method is always the same: multiply by $10^n$ until two copies have identical repeating tails, subtract, divide.\n\n- $0.\\dot{7}$: $10x=7.777\\ldots$, $9x=7$, $x=\\frac{7}{9}$\n- $0.1\\dot{3}$: $100x=13.333\\ldots$, $90x=12$, $x=\\frac{2}{15}$\n- $0.2\\dot{7}$: $100x=27.777\\ldots$, $90x=25$, $x=\\frac{5}{18}$\n\nCommon trap: if the repeat has $k$ digits, you need $10^k$ (or $10^{k+1}$ when a non-repeating digit leads).",
        },
        {
          heading: "Laws of indices — the complete set",
          body: "For $a\\ne0$:\n\n| Law | Rule | Example |\n|---|---|---|\n| Product | $a^m\\times a^n=a^{m+n}$ | $2^3\\times2^4=2^7$ |\n| Quotient | $a^m\\div a^n=a^{m-n}$ | $\\frac{3^8}{3^5}=3^3$ |\n| Power | $(a^m)^n=a^{mn}$ | $(2^3)^2=2^6=64$ |\n| Zero | $a^0=1$ | $5^0=1$ |\n| Negative | $a^{-n}=\\frac{1}{a^n}$ | $2^{-3}=\\frac18$ |\n| Fractional | $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$ | $27^{\\frac23}=(\\sqrt[3]{27})^2=9$ |\n\n**Worked example.** Evaluate $16^{-\\frac34}$.\n\n$16=2^4$, so $16^{-\\frac34}=(2^4)^{-\\frac34}=2^{-3}=\\frac{1}{8}$.\n\n**Worked example.** Solve $5^{2x-1}=125$.\n\n$125=5^3$, so $2x-1=3$, giving $x=2$.",
        },
        {
          heading: "Exam technique",
          body: "- In 'show that' and 'hence' questions, every algebraic step must be visible — don't jump to the answer.\n- For HCF/LCM questions, write the prime factorisations even if the question only asks for the answers; the method marks depend on them.\n- For index equations, always rewrite the constant as a power of the same base before equating indices.\n- Fractional indices: denominator = root, numerator = power. $a^{\\frac{m}{n}}$ means 'take the $n$th root, then raise to the $m$'.",
        },
      ],
    },
  ],
};
