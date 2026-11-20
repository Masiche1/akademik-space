import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cialfm-u1-lesson-1-3",
  code: "1-3",
  title: "Partial fractions advanced",
  goal: "I CAN decompose fractions with repeated and quadratic factors.",
  standards: ["9231 P1: partial fractions"],
  vocabulary: [
    { term: "Partial fractions", definition: "Breaking a fraction into simpler fractions that sum to it." },
    { term: "Repeated factor", definition: "A factor appearing more than once, e.g. $(x-1)^2$." },
    { term: "Irreducible quadratic", definition: "A quadratic that doesn't factorise over the reals." },
    { term: "Cover-up method", definition: "Quick substitution trick for finding constants." },
  ],
  concepts: [
    {
      id: "cialfm-u1-s3-repeated",
      title: "Repeated linear factors",
      skill: "Decompose fractions with repeated linear factors.",
      lesson: {
        sections: [
          {
            heading: "Form",
            body: "$\\frac{f(x)}{(x-a)^2(x-b)} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\frac{C}{x-b}$. Include ALL powers of the repeated factor.",
          },
          {
            heading: "Method",
            body: "Multiply through by denominator, substitute convenient $x$ values, then compare coefficients or substitute again for remaining constants.",
          },
        ],
        keyFormulas: [
          { name: "Repeated form", statement: "$\\frac{A}{x-a} + \\frac{B}{(x-a)^2}$" },
        ],
        workedExample: {
          problem: "Express $\\frac{3x+1}{(x-1)^2(x+2)}$ in partial fractions.",
          solution: "$= \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+2}$; solve for A, B, C.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s3-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\frac{1}{x(x-1)^2}$ the partial fraction form includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$" }, { id: "b", text: "$\\frac{A}{x} + \\frac{B}{(x-1)^2}$" }, { id: "c", text: "$\\frac{A}{x(x-1)^2}$" }, { id: "d", text: "$\\frac{A}{x} + \\frac{B}{x-1}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated factors", statement: "All powers included." }],
            steps: [{ reasoning: "Repeated factor needs both $x-1$ and $(x-1)^2$ terms.", marks: 1, markCode: "A" }],
            finalAnswer: "Form (a)",
          },
        },
        {
          id: "cialfm-u1-s3-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{5}{x(x+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "$\\frac{A}{x}+\\frac{B}{x+1}$." }],
            steps: [
              { reasoning: "$5 = A(x+1) + Bx$; $x=0: A=5$; $x=-1: B=-5$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{5}{x} - \\frac{5}{x+1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{x} - \\frac{5}{x+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{2}{(x-1)^2}$ — trivially — and then $\\frac{x+3}{(x-1)(x-2)^2}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "PF setup", statement: "Correct form then solve." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x-1} + \\frac{B}{x-2} + \\frac{C}{(x-2)^2}$.", marks: 1, markCode: "M" },
              { reasoning: "Multiply: $x+3 = A(x-2)^2 + B(x-1)(x-2) + C(x-1)$; substitute $x=1,2$.", marks: 1, markCode: "M" },
              { reasoning: "$x=1: 4 = A$; $x=2: 5 = C$; compare $x^2$: $0 = A+B$ → $B=-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{x-1} - \\frac{4}{x-2} + \\frac{5}{(x-2)^2}$",
          },
        },
        {
          id: "cialfm-u1-s3-re-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $\\frac{7x-5}{(x-1)^2(x+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeated PF", statement: "Full decomposition." }],
            steps: [
              { reasoning: "Form: $\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+1}$.", marks: 1, markCode: "M" },
              { reasoning: "$7x-5 = A(x-1)(x+1) + B(x+1) + C(x-1)^2$; $x=1: 2 = 2B$ → $B=1$; $x=-1: -12 = 4C$ → $C=-3$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0 = A + C$ → $A = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{x-1} + \\frac{1}{(x-1)^2} - \\frac{3}{x+1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{x-1} + \\frac{1}{(x-1)^2} - \\frac{3}{x+1}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u1-s3-quadratic",
      title: "Irreducible quadratic factors",
      skill: "Decompose fractions with quadratic factors.",
      lesson: {
        sections: [
          {
            heading: "Form",
            body: "For $\\frac{f(x)}{(x-a)(x^2+bx+c)}$ with irreducible quadratic: $\\frac{A}{x-a} + \\frac{Bx+C}{x^2+bx+c}$.",
          },
          {
            heading: "Method",
            body: "Same approach — multiply through, substitute roots of linear factor, compare coefficients for the rest.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Express $\\frac{3}{(x-1)(x^2+1)}$ in partial fractions.",
          solution: "$= \\frac{A}{x-1} + \\frac{Bx+C}{x^2+1}$; solve.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s3-qu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\frac{1}{x(x^2+4)}$ the PF form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{A}{x} + \\frac{Bx+C}{x^2+4}$" }, { id: "b", text: "$\\frac{A}{x} + \\frac{B}{x^2+4}$" }, { id: "c", text: "$\\frac{A}{x(x^2+4)}$" }, { id: "d", text: "$\\frac{A}{x} + \\frac{B}{x+4}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Numerator is linear." }],
            steps: [{ reasoning: "Quadratic factor needs $Bx+C$ numerator.", marks: 1, markCode: "A" }],
            finalAnswer: "Form (a)",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Express $\\frac{4}{(x-1)(x+3)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic PF", statement: "Standard decomposition." }],
            steps: [
              { reasoning: "$4 = A(x+3) + B(x-1)$; $x=1: A=1$; $x=-3: B=-1$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{1}{x-1} - \\frac{1}{x+3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{x-1} - \\frac{1}{x+3}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\frac{5x-4}{(x-2)(x^2+1)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Quadratic PF", statement: "Solve 3 unknowns." }],
            steps: [
              { reasoning: "$5x-4 = A(x^2+1) + (Bx+C)(x-2)$.", marks: 1, markCode: "M" },
              { reasoning: "$x=2: 6 = 5A$ → $A=\\frac{6}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "Compare: $x^2: 0=A+B$ → $B=-\\frac{6}{5}$; $x^0: -4=A-2C$ → $C=\\frac{7}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{6/5}{x-2} + \\frac{(-6x/5 + 7/5)}{x^2+1}$",
          },
        },
        {
          id: "cialfm-u1-s3-qu-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $\\frac{2x+1}{x(x^2+2x+2)}$ in partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Full PF", statement: "Complete solution." }],
            steps: [
              { reasoning: "$2x+1 = A(x^2+2x+2) + (Bx+C)x$.", marks: 1, markCode: "M" },
              { reasoning: "$x=0: 1 = 2A$ → $A=\\frac12$.", marks: 1, markCode: "M" },
              { reasoning: "Compare $x^2$: $0=A+B$ → $B=-\\frac12$; compare $x$: $2=2A+C$ → $C=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1/2}{x} + \\frac{(-x/2+1)}{x^2+2x+2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2x} + \\frac{1-x/2}{x^2+2x+2}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u1-s3-pf-notes",
      title: "Advanced partial fractions — revision notes",
      summary: "Repeated linear and irreducible quadratic factors.",
      sections: [
        { heading: "Repeated", body: "Include every power: $\\frac{A}{x-a}+\\frac{B}{(x-a)^2}$. Substitute roots first." },
        { heading: "Quadratic", body: "Use $\\frac{Bx+C}{x^2+bx+c}$. Compare coefficients for remaining constants." },
      ],
    },
  ],
};
