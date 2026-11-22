import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edm11-u3-lesson-3-3",
  code: "3-3",
  title: "Indices and Proof",
  goal: "I CAN evaluate and simplify expressions with fractional and negative indices, and construct short algebraic proofs.",
  standards: ["4MA1 1.7", "4MA1 2.1H"],
  vocabulary: [
    { term: "Index (power)", definition: "The small number showing how many times a base is multiplied by itself, as in $a^n$." },
    { term: "Reciprocal", definition: "The reciprocal of $a$ is $\\frac{1}{a}$. A negative index gives a reciprocal: $a^{-n} = \\frac{1}{a^n}$." },
    { term: "Fractional index", definition: "$a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^m$: the denominator is the root and the numerator is the power." },
    { term: "Consecutive integers", definition: "Integers that follow each other, such as $n, n+1, n+2$." },
    { term: "Algebraic proof", definition: "A logical argument using algebra that shows a statement is true for all numbers of a given type." },
    { term: "Counter-example", definition: "A single example that shows a statement is false." },
  ],
  concepts: [
    {
      id: "edm11-u3-indices",
      title: "Fractional and negative indices",
      skill: "Evaluate and simplify expressions involving fractional and negative indices and solve simple index equations.",
      lesson: {
        sections: [
          {
            heading: "Negative indices",
            body: "A negative index means a reciprocal: $a^{-n} = \\frac{1}{a^n}$. So $5^{-2} = \\frac{1}{25}$. For a fraction, flip it: $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.",
          },
          {
            heading: "Fractional indices",
            body: "The denominator of the index is the root and the numerator is the power: $a^{\\frac1n} = \\sqrt[n]{a}$ and $a^{\\frac mn} = \\left(\\sqrt[n]{a}\\right)^m$. Take the root first, since it keeps numbers small: $8^{\\frac23} = (\\sqrt[3]{8})^2 = 4$.",
          },
          {
            heading: "Index laws and equations",
            body: "The laws $a^m \\times a^n = a^{m+n}$, $a^m \\div a^n = a^{m-n}$ and $(a^m)^n = a^{mn}$ work for all indices. To solve equations such as $2^x = \\frac{1}{16}$, write both sides as powers of the same base: $2^x = 2^{-4}$ so $x = -4$.",
          },
        ],
        keyFormulas: [
          { name: "Negative index", statement: "$a^{-n} = \\frac{1}{a^n}$" },
          { name: "Fractional index", statement: "$a^{\\frac mn} = \\left(\\sqrt[n]{a}\\right)^m$" },
        ],
        workedExample: {
          problem: "Work out the value of $\\left(\\frac{27}{8}\\right)^{-\\frac23}$.",
          solution: "Flip for the negative index: $\\left(\\frac{8}{27}\\right)^{\\frac23}$. Cube root: $\\frac{2}{3}$. Square: $\\frac{4}{9}$.",
        },
      },
      questions: [
        {
          id: "edm11-u3-indices-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Work out the value of $9^{\\frac12}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$81$" },
              { id: "b", text: "$\\frac{1}{9}$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$4.5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac12} = \\sqrt{a}$" },
            ],
            steps: [
              { reasoning: "An index of one half means the square root.", working: "9^{\\frac12} = \\sqrt{9}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $3$",
            commonErrors: ["Halving the base to get $4.5$.", "Treating the index as negative and giving $\\frac19$."],
          },
        },
        {
          id: "edm11-u3-indices-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Work out the value of $8^{-\\frac23}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 0.25 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Negative and fractional index", statement: "$a^{-\\frac mn} = \\frac{1}{(\\sqrt[n]{a})^m}$" },
            ],
            steps: [
              { reasoning: "The negative sign means a reciprocal.", working: "8^{-\\frac23} = \\frac{1}{8^{\\frac23}}", marks: 1, markCode: "M" },
              { reasoning: "Cube root first, then square.", working: "8^{\\frac23} = (\\sqrt[3]{8})^2 = 2^2 = 4", marks: 1, markCode: "M" },
              { reasoning: "Write the reciprocal.", working: "\\frac14 = 0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac14$ (0.25)",
            commonErrors: ["Giving $-4$ for the negative index.", "Reading the index as $\\frac{2}{3}$ of $8$ and calculating $\\frac{16}{3}$."],
          },
        },
        {
          id: "edm11-u3-indices-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Work out the value of $\\left(\\frac{27}{8}\\right)^{-\\frac23}$ as a decimal, correct to $3$ decimal places.\n\nEnter your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 0.444, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Negative index of a fraction", statement: "$\\left(\\frac ab\\right)^{-n} = \\left(\\frac ba\\right)^n$" },
              { kind: "law", name: "Fractional index", statement: "$a^{\\frac mn} = (\\sqrt[n]{a})^m$" },
            ],
            steps: [
              { reasoning: "Invert the fraction to remove the negative sign.", working: "\\left(\\frac{8}{27}\\right)^{\\frac23}", marks: 1, markCode: "M" },
              { reasoning: "Take the cube root of the numerator and denominator.", working: "\\left(\\frac{2}{3}\\right)^2", marks: 1, markCode: "M" },
              { reasoning: "Square.", working: "\\frac49", marks: 1, markCode: "A" },
              { reasoning: "Convert to a decimal.", working: "0.444", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac49 = 0.444$",
            commonErrors: ["Inverting only one of numerator and denominator.", "Using $\\frac{3}{2}$ squared, giving $2.25$."],
          },
        },
        {
          id: "edm11-u3-indices-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "In this question $x$ is a positive number.",
          parts: [
            { label: "a", prompt: "Work out the value of $\\left(\\frac{16}{81}\\right)^{\\frac34}$. Enter as a decimal correct to $3$ decimal places.", marks: 2 },
            { label: "b", prompt: "Simplify fully $\\left(8x^6\\right)^{\\frac23}$. Write down the coefficient of $x^4$.", marks: 2 },
            { label: "c", prompt: "Solve $2^{x} = \\frac{1}{32}$.", marks: 2 },
            { label: "d", prompt: "Solve $9^{x} = 27^{x-1}$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) value", answer: 0.296, tolerance: 0.001 },
              { label: "(b) coefficient of $x^4$", answer: 4 },
              { label: "(c) $x$", answer: -5 },
              { label: "(d) $x$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(a^m)^n = a^{mn}$ and $(ab)^n = a^nb^n$" },
              { kind: "principle", name: "Equal bases", statement: "If $a^x = a^y$ then $x = y$." },
            ],
            steps: [
              { part: "a", reasoning: "Fourth root of $16$ is $2$ and of $81$ is $3$, then cube.", working: "\\left(\\frac23\\right)^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\frac{8}{27} = 0.296", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the power to each factor: $8^{\\frac23} = 4$.", working: "8^{\\frac23} \\times (x^6)^{\\frac23}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply the indices.", working: "4x^4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write $\\frac1{32}$ as a power of $2$.", working: "2^x = 2^{-5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equate the indices.", working: "x = -5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write both sides with base $3$.", working: "(3^2)^x = (3^3)^{x-1}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Equate the indices.", working: "2x = 3(x-1) = 3x - 3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "x = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{8}{27} = 0.296$. (b) $4x^4$, coefficient $4$. (c) $x = -5$. (d) $x = 3$.",
            commonErrors: ["Giving $8^{\\frac23}$ as $\\frac{16}{3}$ by multiplying.", "Equating indices without common bases."],
          },
        },
      ],
    },
    {
      id: "edm11-u3-proof",
      title: "Algebraic proof",
      skill: "Use algebra, including expressions for even, odd and consecutive numbers, to prove statements.",
      lesson: {
        sections: [
          {
            heading: "Representing types of number",
            body: "An even number is $2n$, an odd number is $2n+1$ (or $2n-1$), and three consecutive integers are $n$, $n+1$, $n+2$. Use a different letter for each different number: two even numbers are $2m$ and $2n$.",
          },
          {
            heading: "The structure of a proof",
            body: "Write the general expression, expand and simplify, then factorise to show the required factor. Finish with a sentence of conclusion such as 'this is a multiple of 4, so it is divisible by 4'. Substituting numbers is not a proof.",
          },
          {
            heading: "Counter-examples",
            body: "To show a statement is false, one example is enough. Choose a value that makes it clearly fail and state the calculation.",
          },
        ],
        keyFormulas: [
          { name: "Even / odd", statement: "Even: $2n$. Odd: $2n+1$. Consecutive: $n, n+1, n+2$." },
          { name: "Difference of two squares", statement: "$a^2 - b^2 = (a-b)(a+b)$" },
        ],
        workedExample: {
          problem: "Prove that the sum of three consecutive integers is a multiple of 3.",
          solution: "Let the integers be $n$, $n+1$, $n+2$. Their sum is $3n+3 = 3(n+1)$. This is $3$ times an integer, so it is a multiple of $3$.",
        },
      },
      questions: [
        {
          id: "edm11-u3-proof-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "$n$ is an integer. Which expression is always odd?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2n + 1$" },
              { id: "b", text: "$n^2$" },
              { id: "c", text: "$2n$" },
              { id: "d", text: "$n + 1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Odd number", statement: "An odd integer can be written as $2n+1$ for an integer $n$." },
            ],
            steps: [
              { reasoning: "$2n$ is always even, and adding $1$ to an even number gives an odd number.", working: "2n + 1", marks: 1, markCode: "M" },
              { reasoning: "The others can be even: $2n$ always, $n+1$ when $n$ is odd, $n^2$ when $n$ is even.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2n+1$",
            commonErrors: ["Choosing $n+1$ or $n^2$ after testing only one value."],
          },
        },
        {
          id: "edm11-u3-proof-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Prove that the sum of any three consecutive integers is a multiple of $3$.\n\nLet the integers be $n$, $n+1$, $n+2$. Show that their sum is $3(n+1)$, then write down the value of $n+1$ when the integers are $7, 8, 9$.",
          response: { type: "numeric", parts: [{ label: "Value of $n+1$ when $n=7$", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consecutive integers", statement: "Three consecutive integers can be written $n$, $n+1$, $n+2$." },
            ],
            steps: [
              { reasoning: "Add the three integers.", working: "n + (n+1) + (n+2) = 3n + 3", marks: 1, markCode: "M" },
              { reasoning: "Factorise and conclude, since $n+1$ is an integer.", working: "3(n+1)", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=7$: $3 \\times 8 = 24$, matching the sum above.", working: "n+1 = 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3(n+1)$, a multiple of $3$; when $n=7$, $n+1=8$",
            commonErrors: ["Using only numerical examples.", "Not concluding that $n+1$ is an integer."],
          },
        },
        {
          id: "edm11-u3-proof-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Prove that $(n+3)^2 - (n-3)^2$ is a multiple of $12$ for all integer values of $n$.\n\nWhen $n = 5$, work out the value of the expression divided by $12$.",
          response: { type: "numeric", parts: [{ label: "Value of the expression $\\div 12$ when $n=5$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference of two squares", statement: "$a^2 - b^2 = (a-b)(a+b)$" },
            ],
            steps: [
              { reasoning: "Expand both brackets.", working: "(n^2 + 6n + 9) - (n^2 - 6n + 9)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "12n", marks: 1, markCode: "A" },
              { reasoning: "Write as a multiple of $12$ and conclude since $n$ is an integer.", working: "12 \\times n", marks: 1, markCode: "R" },
              { reasoning: "Divide by $12$ for $n=5$: the expression is $60$, so the quotient is $5$.", working: "\\frac{60}{12} = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12n$, a multiple of $12$; answer $5$",
            commonErrors: ["Expanding $(n-3)^2$ as $n^2 - 9$.", "Failing to subtract the whole second bracket."],
          },
        },
        {
          id: "edm11-u3-proof-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "$n$ is a positive integer.",
          parts: [
            { label: "a", prompt: "Prove that the sum of the squares of two consecutive integers is always odd.", marks: 3 },
            { label: "b", prompt: "Prove that $(2n+1)^2 - 1$ is a multiple of $4$.", marks: 3 },
            { label: "c", prompt: "Show that the statement 'the sum of two prime numbers is always even' is false by giving a counter-example.", marks: 1 },
            { label: "d", prompt: "Prove that the product of an even number and an odd number is always even.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Algebraic proof", statement: "Use general expressions, simplify, and give a conclusion in words." },
              { kind: "definition", name: "Counter-example", statement: "One example that fails is enough to disprove a statement." },
            ],
            steps: [
              { part: "a", reasoning: "Let the integers be $n$ and $n+1$ and square.", working: "n^2 + (n+1)^2 = n^2 + n^2 + 2n + 1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify and factor.", working: "2n^2 + 2n + 1 = 2(n^2 + n) + 1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "This is $2\\times$ an integer plus $1$, so it is odd.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Expand the bracket.", working: "(2n+1)^2 - 1 = 4n^2 + 4n + 1 - 1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify and factorise.", working: "4n^2 + 4n = 4n(n+1)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State it is $4\\times$ an integer.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "$2$ and $3$ are prime and their sum is $5$, which is odd.", working: "2 + 3 = 5", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Let the even number be $2m$ and the odd number $2k+1$, then multiply.", working: "2m(2k+1)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "This has a factor $2$, so it is even.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2(n^2+n)+1$ is odd. (b) $4n(n+1)$ is a multiple of $4$. (c) $2+3=5$. (d) $2m(2k+1)$ is even.",
            commonErrors: ["Using the same letter for two different integers.", "Testing numbers instead of proving."],
          },
        },
      ],
    },
  ],
};
