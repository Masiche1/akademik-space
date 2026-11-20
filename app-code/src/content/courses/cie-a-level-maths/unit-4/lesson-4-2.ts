import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "cial-m-u4-lesson-4-2",
  code: "4-2",
  title: "Integration by substitution and partial fractions",
  goal: "I CAN integrate using substitution and partial fractions.",
  standards: ["9709 Pure Mathematics 1: integration techniques"],
  vocabulary: [
    {
      term: "Substitution",
      definition: "Replacing variable with u to simplify the integral.",
    },
    {
      term: "Partial fractions",
      definition:
        "Breaking rational function into simpler fractions that integrate easily.",
    },
    { term: "Rational function", definition: "Ratio of two polynomials." },
    {
      term: "Improper fraction",
      definition: "Fraction where numerator degree ≥ denominator degree.",
    },
    {
      term: "Cover-up method",
      definition: "Shortcut for finding partial fraction coefficients.",
    },
    {
      term: "Change of limits",
      definition:
        "Converting x-limits to u-limits when substituting in definite integrals.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u4-substitution",
      title: "Integration by substitution",
      skill: "Choose and apply substitutions to evaluate integrals.",
      lesson: {
        sections: [
          {
            heading: "Choosing u",
            body: "Look for a composite function where the inner function's derivative appears in the integrand. If $du$ is a constant multiple of part of the integrand, substitution works cleanly.",
          },
          {
            heading: "Substitution steps",
            body: "1) Identify u and du. 2) Rewrite integrand entirely in u. 3) Integrate. 4) Substitute back. For definite integrals, either change limits to u or revert to x before evaluating.",
          },
          {
            heading: "Common patterns",
            body: "$\\int f'(x)[f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1}$. Also $\\int \\frac{f'(x)}{f(x)}dx = \\ln|f(x)|$. Recognise these instantly.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "$u=g(x),\\ du=g'(x)dx$" },
          {
            name: "Pattern",
            statement: "$\\int f'(x)[f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1}+c$",
          },
        ],
        workedExample: {
          problem: "Find $\\int x(x^2+4)^5\\,dx$.",
          solution:
            "Let $u=x^2+4$, $du=2x\\,dx$. Integral $= \\frac{1}{2}\\int u^5\\,du = \\frac{u^6}{12} = \\frac{(x^2+4)^6}{12}+c$.",
        },
      },
      questions: [
        {
          id: "cial-m-u4-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step in integration by substitution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose u so that du appears in the integrand" },
              { id: "b", text: "Differentiate the integrand" },
              { id: "c", text: "Evaluate at limits" },
              { id: "d", text: "Expand the integrand" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Match du to part of integrand.",
              },
            ],
            steps: [
              {
                reasoning: "Choose u where du is present.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Choose u matching du",
            commonErrors: ["Choosing u arbitrarily."],
          },
        },
        {
          id: "cial-m-u4-sub-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\int 3x^2(x^3+1)^4\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "$u=x^3+1$, $du=3x^2dx$.",
              },
            ],
            steps: [
              {
                reasoning: "$= \\int u^4\\,du = \\frac{u^5}{5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{(x^3+1)^5}{5} + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{(x^3+1)^5}{5} + c$",
            commonErrors: ["Missing the perfect du match."],
          },
        },
        {
          id: "cial-m-u4-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\int_0^1 \\frac{2x}{x^2+1}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution definite",
                statement: "u = x²+1; change limits or revert.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^2+1$, $du = 2x\\,dx$; limits: u=1 to 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int_1^2 \\frac{du}{u} = [\\ln u]_1^2 = \\ln 2 - \\ln 1 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternative: $[\\ln(x^2+1)]_0^1 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\ln 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\ln 2$",
            commonErrors: ["Keeping x-limits while integrating in u."],
          },
        },
        {
          id: "cial-m-u4-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Integration by substitution.",
          parts: [
            { label: "a", prompt: "When does substitution work?", marks: 1 },
            { label: "b", prompt: "Find $\\int 4x(x^2+3)^3\\,dx$.", marks: 3 },
            {
              label: "c",
              prompt: "Find $\\int \\frac{x}{\\sqrt{x^2+1}}\\,dx$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Evaluate $\\int_0^2 \\frac{2x}{x^2+4}\\,dx$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Substitution",
                statement: "Condition+two integrals+definite.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "When du appears (as constant multiple) in integrand.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$u=x^2+3$, $du=2x dx$ → $2\\int u^3 du$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{(x^2+3)^4}{2} + c$ — factor check.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Correct: $2 \\cdot \\frac{u^4}{4} = \\frac{u^4}{2}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$u=x^2+1$, integrand $= \\frac{1}{2}u^{-1/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= u^{1/2} = \\sqrt{x^2+1}+c$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$u=x^2+4$, limits 4 to 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$[\\ln u]_4^8 = \\ln 8 - \\ln 4 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) du present (b) (x²+3)⁴/2+c (c) √(x²+1)+c (d) ln2",
          },
        },
      ],
    },
    {
      id: "cial-m-u4-partial",
      title: "Integration using partial fractions",
      skill: "Decompose rational functions and integrate them.",
      lesson: {
        sections: [
          {
            heading: "When to use partial fractions",
            body: "For $\\int \\frac{P(x)}{Q(x)}dx$ where deg P < deg Q and Q factorises: split into simpler fractions. First ensure fraction is proper — polynomial division if not.",
          },
          {
            heading: "Decomposition patterns",
            body: "Distinct linear: $\\frac{A}{x-a} + \\frac{B}{x-b}$. Repeated: include higher powers. Quadratic factor: $\\frac{Ax+B}{x^2+c}$. Use cover-up or substitution to find constants.",
          },
          {
            heading: "Integrating the result",
            body: "$\\int \\frac{A}{x-a}dx = A\\ln|x-a|$. For $\\frac{Ax+B}{x^2+c}$, split into derivative-of-denominator part ($\\ln$) and arctan part.",
          },
        ],
        keyFormulas: [
          {
            name: "Partial fractions",
            statement: "$\\frac{P(x)}{Q(x)} = \\sum \\frac{A_i}{x-a_i}$",
          },
          {
            name: "Integral",
            statement: "$\\int \\frac{A}{x-a}dx = A\\ln|x-a| + c$",
          },
        ],
        workedExample: {
          problem: "Find $\\int \\frac{1}{x^2-1}\\,dx$.",
          solution:
            "$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$. A=1/2, B=-1/2. Integral = $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + c$.",
        },
      },
      questions: [
        {
          id: "cial-m-u4-pf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should partial fractions be used?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "For rational functions with factorisable denominators",
              },
              { id: "b", text: "For all integrals" },
              { id: "c", text: "Only for polynomials" },
              { id: "d", text: "Only for trigonometric functions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement:
                  "Break rational function into simpler integrable parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Used for rational functions with factorisable denominators.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Rational functions with factorisable denominators",
            commonErrors: ["Using when substitution is simpler."],
          },
        },
        {
          id: "cial-m-u4-pf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Decompose $\\frac{3}{x^2-4}$ into partial fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "$\\frac{A}{x-2} + \\frac{B}{x+2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A(x+2) + B(x-2) = 3$; x=2: 4A=3, A=3/4; x=-2: -4B=3, B=-3/4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{3/4}{x-2} - \\frac{3/4}{x+2}$ or $\\frac{3}{4(x-2)} - \\frac{3}{4(x+2)}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{4(x-2)} - \\frac{3}{4(x+2)}$",
            commonErrors: ["Sign errors in cover-up."],
          },
        },
        {
          id: "cial-m-u4-pf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int \\frac{5}{x^2-9}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose then integrate each term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{5}{(x-3)(x+3)} = \\frac{A}{x-3} + \\frac{B}{x+3}$; A=5/6, B=-5/6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int = \\frac{5}{6}\\ln|x-3| - \\frac{5}{6}\\ln|x+3|$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{5}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "$\\frac{5}{6}\\ln\\left|\\frac{x-3}{x+3}\\right| + c$",
            commonErrors: ["Forgetting absolute values in ln."],
          },
        },
        {
          id: "cial-m-u4-pf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Partial fractions integration.",
          parts: [
            {
              label: "a",
              prompt: "When are partial fractions needed?",
              marks: 1,
            },
            { label: "b", prompt: "Decompose $\\frac{2}{x(x+1)}$.", marks: 3 },
            {
              label: "c",
              prompt: "Find $\\int \\frac{1}{x^2-1}dx$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find $\\int \\frac{x+3}{x^2-4}dx$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Partial fractions",
                statement: "Decompose+integrate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rational function, factorisable denominator.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{A}{x} + \\frac{B}{x+1}$; A=2, B=-2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{2}{x} - \\frac{2}{x+1}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "A=1/2, B=-1/2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1|$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$= \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + c$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Split: $\\frac{A}{x-2}+\\frac{B}{x+2}$; solve.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "A=5/4, B=-1/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{5}{4}\\ln|x-2| - \\frac{1}{4}\\ln|x+2| + c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) rational+factorisable (b) 2/x−2/(x+1) (c) ½ln|(x−1)/(x+1)|+c (d) 5/4 ln|x−2| − 1/4 ln|x+2| + c",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u4-techniques-notes",
      title: "Integration techniques — revision notes",
      summary: "Substitution and partial fractions for integration.",
      sections: [
        {
          heading: "Substitution",
          body: "Choose u where du appears in integrand. $\\int f'(x)[f(x)]^n dx = \\frac{[f(x)]^{n+1}}{n+1}$. For definite integrals change limits or revert to x.",
        },
        {
          heading: "Partial fractions",
          body: "For rational functions with factorisable denominators. Decompose, then integrate each term ($\\ln$ for linear factors).",
        },
        {
          heading: "Exam checklist",
          body: "Check fraction is proper first. Find all constants. Include absolute values in ln.",
        },
      ],
    },
  ],
};
