import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "olam-u7-lesson-7-2",
  code: "7-2",
  title: "Solving Polynomial Equations",
  goal: "I CAN solve cubic and higher-degree polynomial equations.",
  standards: ["Cambridge O Level Additional Mathematics 4037: factors of polynomials"],
  vocabulary: [
    { term: "Cubic equation", definition: "Polynomial equation of degree 3." },
    { term: "Root", definition: "Value of x satisfying the equation." },
    { term: "Multiplicity", definition: "Number of times a root is repeated." },
    { term: "Factorisation", definition: "Rewriting as a product to read off roots." },
  ],
  concepts: [
    {
      id: "olam-u7-s2-cubics",
      title: "Solving cubic equations",
      skill: "Find all roots of cubic equations using the factor theorem.",
      lesson: {
        sections: [
          {
            heading: "Strategy",
            body: "A cubic has up to 3 roots. Use the factor theorem to find one root (test ±1, ±2, ±3…), factorise out $(x - r)$, then solve the resulting quadratic with the discriminant or factorisation. Check the sum of roots $= -b/a$ as a sanity check.",
          },
          {
            heading: "Repeated roots and special forms",
            body: "If the quadratic factor has a repeated root or zero discriminant, the cubic has fewer distinct roots. Equations like $x^3 = k$ or $x^4 - 5x^2 + 4 = 0$ (quadratic in $x^2$) can be solved by substitution — treat $x^2$ as a single variable.",
          },
        ],
        keyFormulas: [
          { name: "Sum of roots", statement: "$r_1+r_2+r_3 = -b/a$" },
          { name: "Quadratic in disguise", statement: "Substitute $u = x^2$ for $x^4$ terms" },
        ],
        workedExample: {
          problem: "Solve $x^3 - 6x^2 + 11x - 6 = 0$.",
          solution: "$f(1) = 0$ ⇒ $(x-1)$ factor. $= (x-1)(x^2-5x+6) = (x-1)(x-2)(x-3)$. Roots: 1, 2, 3.",
        },
      },
      questions: [
        {
          id: "olam-u7-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many roots can a cubic equation have at most?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "Unlimited" },
            { id: "d", text: "2" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Degree", statement: "Degree n ⇒ at most n roots." }],
            steps: [{ reasoning: "Cubic = degree 3 ⇒ up to 3 roots.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "olam-u7-cb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x^3 - x = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factorise", statement: "Take out common factor." }],
            steps: [
              { reasoning: "$x(x^2 - 1) = x(x-1)(x+1) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $x = 0, 1, -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 0, 1, -1$",
          },
        },
        {
          id: "olam-u7-cb-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $x^3 - 2x^2 - 5x + 6 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise, solve quadratic." }],
            steps: [
              { reasoning: "$f(1) = 1-2-5+6 = 0$ ⇒ $(x-1)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)(x^2 - x - 6)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)(x-3)(x+2)$; roots $1, 3, -2$.", marks: 1, markCode: "M" },
              { reasoning: "All roots stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 1, 3, -2$",
          },
        },
        {
          id: "olam-u7-cb-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $x^4 - 5x^2 + 4 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Let $u = x^2$." }],
            steps: [
              { reasoning: "$u^2 - 5u + 4 = 0 \\Rightarrow (u-1)(u-4) = 0 \\Rightarrow u = 1, 4$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 = 1 \\Rightarrow x = \\pm 1$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 = 4 \\Rightarrow x = \\pm 2$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $x = \\pm 1, \\pm 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\pm 1, \\pm 2$",
          },
        },
        {
          id: "olam-u7-cb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a root of $x^3 - 6x + 5 = 0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = 2$" },
            { id: "b", text: "$x = 5$" },
            { id: "c", text: "$x = -1$" },
            { id: "d", text: "$x = 1$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Test small integers." }],
            steps: [{ reasoning: "$f(1) = 1 - 6 + 5 = 0$, so $x=1$ is a root.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = 1$",
          },
        },
        {
          id: "olam-u7-cb-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x^3 - x^2 - 4x + 4 = 0$ and state the largest root.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Factorise", statement: "Group or use factor theorem." }],
            steps: [
              { reasoning: "$x^2(x-1) - 4(x-1) = (x-1)(x-2)(x+2) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Largest root: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "olam-u7-cb-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $x^3 + 2x^2 - 5x - 6 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise, solve quadratic." }],
            steps: [
              { reasoning: "$f(-1) = -1 + 2 + 5 - 6 = 0$ ⇒ $(x+1)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x+1)(x^2 + x - 6)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x+1)(x+3)(x-2)$; roots $-1, -3, 2$.", marks: 1, markCode: "M" },
              { reasoning: "All roots stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -1, -3, 2$",
          },
        },
        {
          id: "olam-u7-cb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many distinct real roots does the equation $(x - 1)^2(x - 3) = 0$ have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "1" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Multiplicity", statement: "Repeated root counts once as distinct." }],
            steps: [{ reasoning: "Roots are $x=1$ (repeated) and $x=3$: 2 distinct roots.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "olam-u7-cb-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^3 - 3x^2 - 4x + 12 = 0$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: -2 }, { label: "b", answer: 2 }, { label: "c", answer: 3 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise fully." }],
            steps: [
              { reasoning: "$f(3) = 27 - 27 - 12 + 12 = 0$ ⇒ $(x-3)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-3)(x^2 - 4) = (x-3)(x-2)(x+2)$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $x = -2, 2, 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -2, 2, 3$",
          },
        },
        {
          id: "olam-u7-cb-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many real solutions does $x^3 = 8$ have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "3" },
            { id: "c", text: "2" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Real cube root", statement: "Each real has one real cube root." }],
            steps: [{ reasoning: "$x = \\sqrt[3]{8} = 2$; the other two cube roots are complex.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "olam-u7-cb-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x^3 - 3x^2 + 3x - 1 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated root", statement: "Recognise perfect cube form." }],
            steps: [
              { reasoning: "$f(1) = 1 - 3 + 3 - 1 = 0$ ⇒ $(x-1)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)(x^2 - 2x + 1)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)^3$; triple root $x = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 1$ (repeated three times).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 1$",
          },
        },
        {
          id: "olam-u7-cb-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The roots of $x^3 - 5x^2 + 3x - 7 = 0$ are $\\alpha$, $\\beta$ and $\\gamma$. Find $\\alpha + \\beta + \\gamma$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Sum of roots", statement: "$r_1+r_2+r_3 = -b/a$." }],
            steps: [
              { reasoning: "$\\alpha + \\beta + \\gamma = -\\frac{-5}{1} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olam-u7-cb-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $x^4 - 10x^2 + 9 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Let $u = x^2$." }],
            steps: [
              { reasoning: "$u^2 - 10u + 9 = 0 \\Rightarrow (u-1)(u-9) = 0 \\Rightarrow u = 1, 9$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 = 1 \\Rightarrow x = \\pm 1$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 = 9 \\Rightarrow x = \\pm 3$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $x = \\pm 1, \\pm 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\pm 1, \\pm 3$",
          },
        },
        {
          id: "olam-u7-cb-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^3 + 3x^2 - 4x - 12 = 0$ and give the largest root.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise." }],
            steps: [
              { reasoning: "$f(-3) = -27 + 27 + 12 - 12 = 0$ ⇒ $(x+3)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x+3)(x^2 - 4) = (x+3)(x-2)(x+2)$; roots $-3, -2, 2$.", marks: 1, markCode: "M" },
              { reasoning: "Largest root: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "olam-u7-cb-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For what value of $k$ does $x = 2$ satisfy $x^3 - 4x^2 + kx - 4 = 0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "-6" },
            { id: "b", text: "6" },
            { id: "c", text: "4" },
            { id: "d", text: "-4" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Set x=2 and solve for k." }],
            steps: [
              { reasoning: "$8 - 16 + 2k - 4 = 0 \\Rightarrow 2k = 12$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "olam-u7-cb-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The equation $x^3 + px^2 - 7x + q = 0$ has roots $1$, $2$ and $r$. Find the values of $p$, $q$ and $r$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Vieta's relations", statement: "Sum, sum of products and product of roots." }],
            steps: [
              { reasoning: "Sum of products two at a time: $1 \\cdot 2 + 1 \\cdot r + 2 \\cdot r = 2 + 3r = -7$.", marks: 1, markCode: "M" },
              { reasoning: "$3r = -9 \\Rightarrow r = -3$.", marks: 1, markCode: "M" },
              { reasoning: "Sum of roots: $1 + 2 - 3 = 0 = -p \\Rightarrow p = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Product: $1 \\cdot 2 \\cdot (-3) = -6 = -q \\Rightarrow q = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Equation is $x^3 - 7x + 6 = (x-1)(x-2)(x+3)$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $p=0$, $q=6$, $r=-3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p=0$, $q=6$, $r=-3$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u7-cb-notes",
      title: "Polynomial equations — revision notes",
      summary: "Factor theorem → quadratic → roots.",
      sections: [
        { heading: "Cubics", body: "Find one root by testing small integers; divide out; solve the quadratic." },
        { heading: "Disguised quadratics", body: "$x^4$ equations: substitute $u = x^2$, then take square roots (±)." },
      ],
    },
  ],
};
