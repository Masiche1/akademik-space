import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ciam-u7-lesson-7-2",
  code: "7-2",
  title: "Solving Polynomial Equations",
  goal: "I CAN solve cubic and higher-degree polynomial equations.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: factors of polynomials"],
  vocabulary: [
    { term: "Cubic equation", definition: "Polynomial equation of degree 3." },
    { term: "Root", definition: "Value of x satisfying the equation." },
    { term: "Multiplicity", definition: "Number of times a root is repeated." },
    { term: "Factorisation", definition: "Rewriting as a product to read off roots." },
  ],
  concepts: [
    {
      id: "ciam-u7-s2-cubics",
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
          id: "ciam-u7-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many roots can a cubic equation have at most?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unlimited" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Degree", statement: "Degree n ⇒ at most n roots." }],
            steps: [{ reasoning: "Cubic = degree 3 ⇒ up to 3 roots.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "ciam-u7-cb-q2",
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
          id: "ciam-u7-cb-q3",
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
          id: "ciam-u7-cb-q4",
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
          id: "ciam-u7-cb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the roots of $2x^3 - 4x^2 + x - 5 = 0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "$-2$" },
            { id: "c", text: "2" },
            { id: "d", text: "$-4$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Sum of roots", statement: "$r_1+r_2+r_3 = -b/a$." }],
            steps: [{ reasoning: "Sum $= -(-4)/2 = 2$.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "ciam-u7-cb-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x^3 = 27$ for real values of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Factorise", statement: "Difference of cubes." }],
            steps: [
              { reasoning: "$x^3 - 27 = (x-3)(x^2 + 3x + 9) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 + 3x + 9$ has discriminant $9 - 36 < 0$, so only real root is $x = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$",
          },
        },
        {
          id: "ciam-u7-cb-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x^3 + 2x = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factorise", statement: "Take out common factor." }],
            steps: [
              { reasoning: "$x(x^2 + 2) = 0 \\Rightarrow x = 0$ (since $x^2 + 2 > 0$ for real $x$).", marks: 1, markCode: "M" },
              { reasoning: "Only real root: $x = 0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 0$",
          },
        },
        {
          id: "ciam-u7-cb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The cubic $x^3 + px^2 - 7x + 6$ has $(x - 1)$ as a factor. What is the value of $p$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "0" },
            { id: "c", text: "2" },
            { id: "d", text: "$-1$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "f(1) = 0." }],
            steps: [{ reasoning: "$f(1) = 1 + p - 7 + 6 = p = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "ciam-u7-cb-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^3 - 2x^2 - x + 2 = 0$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2 },
            { label: "b", answer: 1 },
            { label: "c", answer: -1 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise, solve quadratic." }],
            steps: [
              { reasoning: "$f(2) = 8 - 8 - 2 + 2 = 0$ ⇒ $(x-2)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-2)(x^2 - 1) = (x-2)(x-1)(x+1)$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $x = 2, 1, -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2, 1, -1$",
          },
        },
        {
          id: "ciam-u7-cb-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $x^3 - 7x^2 + 14x - 8 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise, solve quadratic." }],
            steps: [
              { reasoning: "$f(1) = 1 - 7 + 14 - 8 = 0$ ⇒ $(x-1)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)(x^2 - 6x + 8)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)(x-2)(x-4)$; roots $1, 2, 4$.", marks: 1, markCode: "M" },
              { reasoning: "All roots stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 1, 2, 4$",
          },
        },
        {
          id: "ciam-u7-cb-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which set gives all the roots of $x^4 - 13x^2 + 36 = 0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = \\pm 3, \\pm 6$" },
            { id: "b", text: "$x = \\pm 2, \\pm 3$" },
            { id: "c", text: "$x = \\pm 2, \\pm 4$" },
            { id: "d", text: "$x = \\pm 2, \\pm 6$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Let $u = x^2$." }],
            steps: [{ reasoning: "$u^2 - 13u + 36 = 0 \\Rightarrow u = 4, 9$ ⇒ $x = \\pm 2, \\pm 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\pm 2, \\pm 3$",
          },
        },
        {
          id: "ciam-u7-cb-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^3 + 3x^2 - 4x - 12 = 0$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: -3 },
            { label: "b", answer: 2 },
            { label: "c", answer: -2 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find one root, factorise." }],
            steps: [
              { reasoning: "$f(-3) = -27 + 27 + 12 - 12 = 0$ ⇒ $(x+3)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x+3)(x-2)(x+2)$.", marks: 1, markCode: "M" },
              { reasoning: "Roots: $x = -3, 2, -2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -3, 2, -2$",
          },
        },
        {
          id: "ciam-u7-cb-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x^3 - 3x^2 + 3x - 1 = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated root", statement: "Recognise $(x-1)^3$." }],
            steps: [
              { reasoning: "$f(1) = 1 - 3 + 3 - 1 = 0$ ⇒ $(x-1)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-1)(x^2 - 2x + 1) = (x-1)^3$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 - 2x + 1 = (x-1)^2$ — repeated root.", marks: 1, markCode: "M" },
              { reasoning: "Triple root: $x = 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 1$ (repeated three times)",
          },
        },
        {
          id: "ciam-u7-cb-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The equation $x^3 + ax^2 + bx + c = 0$ has roots 1, 2 and 3. What is the value of $a$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "11" },
            { id: "b", text: "6" },
            { id: "c", text: "$-11$" },
            { id: "d", text: "$-6$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Sum of roots", statement: "$r_1+r_2+r_3 = -b/a$." }],
            steps: [{ reasoning: "$a = -(1+2+3) = -6$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-6$",
          },
        },
        {
          id: "ciam-u7-cb-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What are the roots of $x^4 - 17x^2 + 16 = 0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = \\pm 1, \\pm 4$" },
            { id: "b", text: "$x = \\pm 2, \\pm 8$" },
            { id: "c", text: "$x = \\pm 1, \\pm 16$" },
            { id: "d", text: "$x = \\pm 4, \\pm 16$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Let $u = x^2$." }],
            steps: [{ reasoning: "$u^2 - 17u + 16 = 0 \\Rightarrow u = 1, 16$ ⇒ $x = \\pm 1, \\pm 4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\pm 1, \\pm 4$",
          },
        },
        {
          id: "ciam-u7-cb-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The equation $x^3 + kx^2 - 4x + 4 = 0$ has $x = 2$ as a root. Find the other roots.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Use root to find k, then factorise." }],
            steps: [
              { reasoning: "$f(2) = 8 + 4k - 8 + 4 = 4k + 4 = 0 \\Rightarrow k = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Equation becomes $x^3 - x^2 - 4x + 4 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-2)(x^2 + x - 2) = (x-2)(x+2)(x-1)$.", marks: 1, markCode: "M" },
              { reasoning: "Factorising the quadratic $x^2 + x - 2 = (x+2)(x-1)$.", marks: 1, markCode: "M" },
              { reasoning: "Other roots: $x = -2$ and $x = 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -2, 1$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u7-cb-notes",
      title: "Polynomial equations — revision notes",
      summary: "Factor theorem → quadratic → roots.",
      sections: [
        { heading: "Cubics", body: "Find one root by testing small integers; divide out; solve the quadratic." },
        { heading: "Disguised quadratics", body: "$x^4$ equations: substitute $u = x^2$, then take square roots (±)." },
      ],
    },
  ],
};
