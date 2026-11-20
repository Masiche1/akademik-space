import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cipum-u3-lesson-3-2",
  code: "3-2",
  title: "Integration: Techniques and Applications",
  goal: "I CAN integrate functions using standard techniques and evaluate definite integrals for areas.",
  standards: ["Cambridge Pre-U Mathematics 9794", "Pure Mathematics: calculus"],
  vocabulary: [
    {
      term: "Integration",
      definition:
        "The reverse of differentiation — finding the antiderivative.",
    },
    {
      term: "Indefinite integral",
      definition: "∫f(x)dx = F(x) + C — family of antiderivatives.",
    },
    {
      term: "Definite integral",
      definition: "∫ₐᵇ f(x)dx — area under curve between limits.",
    },
    {
      term: "Substitution",
      definition: "Changing variable to simplify an integral, e.g. u = g(x).",
    },
    {
      term: "Constant of integration",
      definition:
        "The +C in indefinite integrals — infinitely many antiderivatives.",
    },
    {
      term: "Area between curves",
      definition:
        "Region enclosed by two functions — integrate the difference.",
    },
  ],
  concepts: [
    {
      id: "cipum-u3-s1-integral",
      title: "Integration techniques",
      skill:
        "Integrate polynomials, standard functions and use substitution; evaluate definite integrals.",
      lesson: {
        sections: [
          {
            heading: "Standard integrals",
            body: "∫xⁿdx = xⁿ⁺¹/(n+1) + C (n ≠ −1); ∫1/x dx = ln|x| + C; ∫eˣdx = eˣ + C; ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C; ∫sec²x dx = tan x + C. Always add +C for indefinite integrals — infinitely many antiderivatives differ by a constant.",
          },
          {
            heading: "Substitution",
            body: "When an integral contains a composite function, substitute u = g(x) and du = g'(x)dx. Example: ∫2x·eˣ²dx — let u = x², du = 2xdx, giving ∫eᵘdu = eᵘ + C = eˣ² + C. Choose u to simplify — usually the inner function of a chain-rule pattern.",
          },
          {
            heading: "Definite integrals",
            body: "∫ₐᵇf(x)dx = F(b) − F(a) — the +C cancels. Geometrically it gives the **signed area** between the curve and x-axis: positive above, negative below. For area between two curves, integrate the upper minus the lower function over their intersection points.",
          },
        ],
        keyFormulas: [
          {
            name: "Standard integrals",
            statement:
              "$\\int x^n dx=\\frac{x^{n+1}}{n+1}+C$; $\\int \\frac{1}{x}dx=\\ln|x|+C$; $\\int e^x dx=e^x+C$; $\\int \\sin x dx=-\\cos x+C$",
          },
          {
            name: "Definite integral",
            statement: "$\\int_a^b f(x)\\,dx = F(b)-F(a)$ — signed area",
          },
        ],
        workedExample: {
          problem: "Evaluate $\\int_0^1 (3x^2 + 2x)\\,dx$.",
          solution:
            "$F(x) = x^3 + x^2$; $F(1) - F(0) = (1+1) - 0 = 2$. The integral equals 2.",
        },
      },
      questions: [
        {
          id: "cipum-u3-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\int_0^2 3x^2\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "12" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Definite integral",
                statement: "$\\int_a^b f(x)dx = F(b) - F(a)$.",
              },
            ],
            steps: [
              {
                reasoning: "$F(x) = x^3$; $F(2) - F(0) = 8 - 0 = 8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipum-u3-int-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\int (4x^3 - \\frac{2}{x})\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Indefinite integration",
                statement: "Integrate term by term; add +C.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int 4x^3 dx = x^4$; $\\int -\\frac{2}{x}dx = -2\\ln|x|$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x^4 - 2\\ln|x| + C$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x^4 - 2\\ln|x| + C$",
          },
        },
        {
          id: "cipum-u3-int-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use substitution to find $\\int 2xe^{x^2}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "u-substitution",
                statement: "Let u = inner function; replace dx with du/g'(x).",
              },
            ],
            steps: [
              {
                reasoning: "Let $u = x^2$, then $du = 2x\\,dx$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\int e^u\\,du = e^u + C$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{x^2} + C$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$e^{x^2} + C$",
          },
        },
        {
          id: "cipum-u3-int-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area enclosed by $y = x^2$ and $y = x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area between curves",
                statement:
                  "Integrate (upper − lower) between intersection points.",
              },
            ],
            steps: [
              {
                reasoning: "Intersections: $x^2 = x \\Rightarrow x = 0, 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "On $[0,1]$, $x > x^2$ — integrate $\\int_0^1 (x - x^2)\\,dx$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area = $\\frac{1}{6}$ square units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Area = $\\frac{1}{6}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u3-integral-notes",
      title: "Integration — revision notes",
      summary:
        "Standard integrals, substitution, definite integrals as signed area.",
      sections: [
        {
          heading: "Key skills",
          body: "Memorise the standard integrals. For substitution, identify the composite pattern first — u is usually the inner function. For area, always find intersection points before integrating.",
        },
        {
          heading: "Exam tips",
          body: "Check whether the question wants indefinite (+C) or definite (no +C) integration. For areas below the x-axis, the integral gives a negative value — take the absolute value for area.",
        },
      ],
    },
  ],
};
