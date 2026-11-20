import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cipum-u3-lesson-3-1",
  code: "3-1",
  title: "Differentiation: Rules and Applications",
  goal: "I CAN differentiate functions using standard rules and interpret derivatives as rates of change.",
  standards: ["Cambridge Pre-U Mathematics 9794", "Pure Mathematics: calculus"],
  vocabulary: [
    {
      term: "Derivative",
      definition:
        "The instantaneous rate of change of a function — gradient of the tangent.",
    },
    {
      term: "Differentiation",
      definition: "The process of finding a derivative.",
    },
    {
      term: "Stationary point",
      definition:
        "Point where the derivative is zero — maximum, minimum or point of inflection.",
    },
    {
      term: "Chain rule",
      definition: "Differentiating composite functions: dy/dx = dy/du × du/dx.",
    },
    {
      term: "Product rule",
      definition: "Differentiating products: (uv)' = u'v + uv'.",
    },
    {
      term: "Quotient rule",
      definition: "Differentiating quotients: (u/v)' = (u'v − uv')/v².",
    },
  ],
  concepts: [
    {
      id: "cipum-u3-s1-diff",
      title: "Differentiation techniques",
      skill:
        "Differentiate polynomials, products, quotients and composites; find stationary points.",
      lesson: {
        sections: [
          {
            heading: "Core rules",
            body: "Basic rules: d/dx(xⁿ) = nxⁿ⁻¹, d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, d/dx(cos x) = −sin x, d/dx(tan x) = sec²x. **Product rule** for uv, **quotient rule** for u/v, **chain rule** for f(g(x)) — substitute u = g(x), differentiate both parts, multiply.",
          },
          {
            heading: "Stationary points",
            body: "Set dy/dx = 0 and solve for x. Determine the nature using the **second derivative**: d²y/dx² > 0 → minimum; < 0 → maximum; = 0 → inconclusive (use first-derivative sign test or higher derivatives). For points of inflection, check sign change of dy/dx.",
          },
        ],
        keyFormulas: [
          {
            name: "Rules",
            statement:
              "$\\frac{d}{dx}(uv)=u'v+uv'$; $\\frac{d}{dx}\\left(\\frac{u}{v}\\right)=\\frac{u'v-uv'}{v^2}$; chain: $\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}$",
          },
          {
            name: "Second derivative test",
            statement: "$f''>0$ min; $f''<0$ max; $f''=0$ inconclusive",
          },
        ],
        workedExample: {
          problem: "Find and classify the stationary points of $y = x^3 - 3x$.",
          solution:
            "$\\frac{dy}{dx} = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $\\frac{d^2y}{dx^2} = 6x$: at $x=-1$, $f''=-6<0$ → maximum at $(-1, 2)$; at $x=1$, $f''=6>0$ → minimum at $(1, -2)$.",
        },
      },
      questions: [
        {
          id: "cipum-u3-dif-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Differentiate $y = 3x^4 - 2x^2 + 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12x^3 - 4x$" },
              { id: "b", text: "$3x^3 - 2x$" },
              { id: "c", text: "$12x^4 - 4x^2$" },
              { id: "d", text: "$\\frac{3}{4}x^5 - x^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Power rule",
                statement:
                  "d/dx(xⁿ) = nxⁿ⁻¹; constant terms differentiate to zero.",
              },
            ],
            steps: [
              {
                reasoning: "$12x^3 - 4x$; the constant 5 disappears.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = 12x^3 - 4x$",
          },
        },
        {
          id: "cipum-u3-dif-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Differentiate $y = x^2 e^x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Product rule",
                statement: "(uv)' = u'v + uv'.",
              },
            ],
            steps: [
              {
                reasoning: "$u = x^2, v = e^x$; $u' = 2x, v' = e^x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{dy}{dx} = 2xe^x + x^2e^x = e^x(x^2 + 2x)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = e^x(x^2 + 2x)$",
          },
        },
        {
          id: "cipum-u3-dif-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the stationary points of $y = x^3 - 3x^2 + 4$ and classify them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary points",
                statement:
                  "Set dy/dx = 0, solve, then classify via second derivative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 3x^2 - 6x = 3x(x-2) = 0 \\Rightarrow x = 0, 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{d^2y}{dx^2} = 6x - 6$: at $x=0$, $f''=-6<0$ → maximum at $(0,4)$; at $x=2$, $f''=6>0$ → minimum at $(2,0)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Points: maximum $(0,4)$, minimum $(2,0)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum $(0,4)$; minimum $(2,0)$.",
          },
        },
        {
          id: "cipum-u3-dif-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Differentiate $y = \\frac{\\sin x}{x^2}$ using the quotient rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotient rule",
                statement:
                  "$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$u = \\sin x, v = x^2$; $u' = \\cos x, v' = 2x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dy}{dx} = \\frac{x^2\\cos x - 2x\\sin x}{x^4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify: $\\frac{x\\cos x - 2\\sin x}{x^3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct simplification to lowest terms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = \\frac{x\\cos x - 2\\sin x}{x^3}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u3-diff-notes",
      title: "Differentiation — revision notes",
      summary:
        "Power rule, product/quotient/chain rules, stationary points, second derivative test.",
      sections: [
        {
          heading: "Key skills",
          body: "Choose the right rule: product for uv, quotient for u/v, chain for composites. For stationary points, always verify with the second derivative — set it to zero first.",
        },
        {
          heading: "Exam tips",
          body: "Write u and v explicitly before applying product/quotient rules. Check that your derivative of eˣ, ln x, sin x and cos x is correct — these are the most-tested results.",
        },
      ],
    },
  ],
};
