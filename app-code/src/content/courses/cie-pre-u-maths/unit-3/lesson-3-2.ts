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
              { id: "a", text: "8" },
              { id: "b", text: "6" },
              { id: "c", text: "4" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cipum-u3-int-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\int 3x^2\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6x + C$" },
              { id: "b", text: "$x^2 + C$" },
              { id: "c", text: "$\\frac{x^3}{3} + C$" },
              { id: "d", text: "$x^3 + C$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Indefinite integration",
                statement: "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ for $n \\neq -1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int 3x^2\\,dx = x^3 + C$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x^3 + C$",
          },
        },
        {
          id: "cipum-u3-int-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^1 (2x + 1)\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
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
                reasoning: "$F(x) = x^2 + x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$F(1) - F(0) = (1 + 1) - 0 = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipum-u3-int-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\int (x^3 - 4x)\\,dx$.",
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
                reasoning: "$\\int x^3 dx = \\frac{x^4}{4}$; $\\int -4x\\,dx = -2x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine: $\\frac{x^4}{4} - 2x^2 + C$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Include the constant of integration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{x^4}{4} - 2x^2 + C$",
          },
        },
        {
          id: "cipum-u3-int-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\int \\frac{1}{x}\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\ln x + C$ only (no absolute value)" },
              { id: "b", text: "$\\frac{1}{x^2} + C$" },
              { id: "c", text: "$\\frac{\\ln x}{x} + C$" },
              { id: "d", text: "$\\ln|x| + C$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Standard integrals",
                statement: "$\\int \\frac{1}{x}dx = \\ln|x| + C$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\int \\frac{1}{x}dx = \\ln|x| + C$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln|x| + C$",
          },
        },
        {
          id: "cipum-u3-int-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 \\frac{2x}{x^2 + 1}\\,dx$ using substitution.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.693147, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "u-substitution",
                statement: "Let $u$ be the denominator; $du = 2x\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let $u = x^2 + 1$, $du = 2x\\,dx$; limits become $u = 1$ to $u = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\int_1^2 \\frac{du}{u} = [\\ln u]_1^2 = \\ln 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\ln 2 \\approx 0.693$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\ln 2 \\approx 0.693$",
          },
        },
        {
          id: "cipum-u3-int-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area enclosed by the curves $y = x^2$ and $y = 2x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area between curves",
                statement: "Integrate (upper − lower) between intersection points.",
              },
            ],
            steps: [
              {
                reasoning: "Intersections: $x^2 = 2x \\Rightarrow x(x-2) = 0 \\Rightarrow x = 0, 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "On $[0,2]$, $2x \\geq x^2$; integrate $\\int_0^2 (2x - x^2)\\,dx$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area $= \\frac{4}{3}$ square units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Area $= \\frac{4}{3}$",
          },
        },
        {
          id: "cipum-u3-int-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The value of $\\int_{-1}^{1} x^3\\,dx$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "0" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Odd function symmetry",
                statement: "The integral of an odd function over a symmetric interval is 0.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x^3$ is odd and the interval $[-1,1]$ is symmetric, so the integral is 0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "cipum-u3-int-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $\\int_0^{\\frac{\\pi}{2}} \\cos x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "$-1$" },
              { id: "c", text: "$\\frac{\\pi}{2}$" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standard integrals",
                statement: "$\\int \\cos x\\,dx = \\sin x + C$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[\\sin x]_0^{\\pi/2} = 1 - 0 = 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cipum-u3-int-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^2 (x^2 - x)\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.666667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Definite integration",
                statement: "Integrate term by term, then apply limits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int (x^2 - x)dx = \\frac{x^3}{3} - \\frac{x^2}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At $x = 2$: $\\frac{8}{3} - 2 = \\frac{2}{3}$; at $x = 0$: $0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integral $= \\frac{2}{3} \\approx 0.667$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{2}{3}$",
          },
        },
        {
          id: "cipum-u3-int-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "To evaluate $\\int x\\sqrt{x^2 + 1}\\,dx$ by substitution, the best choice of $u$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$u = x$" },
              { id: "b", text: "$u = \\sqrt{x^2+1}$" },
              { id: "c", text: "$u = x^2$" },
              { id: "d", text: "$u = x^2 + 1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "u-substitution",
                statement: "Choose $u$ so that $du$ absorbs the remaining factor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With $u = x^2 + 1$, $du = 2x\\,dx$ absorbs the $x$ factor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$u = x^2 + 1$",
          },
        },
        {
          id: "cipum-u3-int-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^1 e^x\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.718282, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Standard integrals",
                statement: "$\\int e^x dx = e^x + C$.",
              },
            ],
            steps: [
              {
                reasoning: "$[e^x]_0^1 = e - 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e - 1 \\approx 1.718$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$e - 1 \\approx 1.718$",
          },
        },
        {
          id: "cipum-u3-int-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area enclosed by the curves $y = x^2 - 4$ and $y = 4 - x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area between curves",
                statement: "Find intersections, then integrate the difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intersections: $x^2 - 4 = 4 - x^2 \\Rightarrow 2x^2 = 8 \\Rightarrow x = \\pm 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Between $-2$ and $2$, $4 - x^2 \\geq x^2 - 4$; difference $= 8 - 2x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\int_{-2}^{2} (8 - 2x^2)dx = \\left[8x - \\frac{2x^3}{3}\\right]_{-2}^{2} = \\left(16 - \\frac{16}{3}\\right) - \\left(-16 + \\frac{16}{3}\\right) = \\frac{64}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area $= \\frac{64}{3}$ square units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Area $= \\frac{64}{3}$",
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
