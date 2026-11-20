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
            { id: "a", text: "3" }, { id: "b", text: "2" }, { id: "c", text: "4" }, { id: "d", text: "Unlimited" },
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
