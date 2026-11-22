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
              { id: "c", text: "$\\frac{3}{4}x^5 - x^3$" },
              { id: "d", text: "$12x^4 - 4x^2$" },
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
        {
          id: "cipum-u3-dif-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Differentiate $y = x^5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x^6}{6}$" },
              { id: "b", text: "$5x^4$" },
              { id: "c", text: "$x^6$" },
              { id: "d", text: "$5x^5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Power rule",
                statement: "d/dx($x^n$) = $nx^{n-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 5x^4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = 5x^4$",
          },
        },
        {
          id: "cipum-u3-dif-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $\\frac{dy}{dx}$ for $y = x^3 - 4x$ when $x = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Power rule",
                statement: "d/dx($x^n$) = $nx^{n-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 3x^2 - 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 2$: $3(4) - 4 = 8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipum-u3-dif-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Differentiate $y = (2x + 1)^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "If $y = f(u)$ and $u = g(x)$, $\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$.",
              },
            ],
            steps: [
              {
                reasoning: "Let $u = 2x + 1$, so $\\frac{du}{dx} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{dy}{du} = 4u^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dy}{dx} = 4(2x+1)^3 \\times 2 = 8(2x+1)^3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = 8(2x+1)^3$",
          },
        },
        {
          id: "cipum-u3-dif-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The derivative of $\\ln x$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\ln x$" },
              { id: "b", text: "$\\frac{1}{x}$" },
              { id: "c", text: "$e^x$" },
              { id: "d", text: "$\\frac{1}{x^2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Standard derivatives",
                statement: "d/dx($\\ln x$) = $\\frac{1}{x}$.",
              },
            ],
            steps: [
              {
                reasoning: "d/dx($\\ln x$) = $\\frac{1}{x}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{x}$",
          },
        },
        {
          id: "cipum-u3-dif-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The curve $y = x^2 - 6x + 5$ has a stationary point at $x = ?$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 2$" },
              { id: "b", text: "$x = 5$" },
              { id: "c", text: "$x = 3$" },
              { id: "d", text: "$x = -3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary points",
                statement: "Solve $\\frac{dy}{dx} = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 2x - 6 = 0 \\Rightarrow x = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$",
          },
        },
        {
          id: "cipum-u3-dif-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Differentiate $y = \\frac{3x - 2}{x + 1}$ using the quotient rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotient rule",
                statement: "$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$u = 3x - 2$, $v = x + 1$; $u' = 3$, $v' = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dy}{dx} = \\frac{3(x+1) - (3x-2)(1)}{(x+1)^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Numerator: $3x + 3 - 3x + 2 = 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{dy}{dx} = \\frac{5}{(x+1)^2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx} = \\frac{5}{(x+1)^2}$",
          },
        },
        {
          id: "cipum-u3-dif-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $f''(x) > 0$ at a stationary point, the point is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A maximum" },
              { id: "b", text: "Cannot be determined" },
              { id: "c", text: "A minimum" },
              { id: "d", text: "A point of inflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Second derivative test",
                statement: "$f'' > 0$ → minimum; $f'' < 0$ → maximum.",
              },
            ],
            steps: [
              {
                reasoning: "$f''(x) > 0$ indicates a minimum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Minimum",
          },
        },
        {
          id: "cipum-u3-dif-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $\\frac{dy}{dx}$ for $y = \\sin x + \\cos x$ at $x = \\frac{\\pi}{2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Trig derivatives",
                statement: "d/dx($\\sin x$) = $\\cos x$; d/dx($\\cos x$) = $-\\sin x$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = \\cos x - \\sin x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At $x = \\frac{\\pi}{2}$: $0 - 1 = -1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "-1",
          },
        },
        {
          id: "cipum-u3-dif-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the $x$-coordinate of the stationary point of $y = x^3 - 3x^2 + 3x$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary points",
                statement: "Solve $\\frac{dy}{dx} = 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 3x^2 - 6x + 3 = 3(x-1)^2 = 0 \\Rightarrow x = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stationary point at $x = 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 1$",
          },
        },
        {
          id: "cipum-u3-dif-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The derivative of $e^{2x}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2e^{2x}$" },
              { id: "b", text: "$e^{2x}$" },
              { id: "c", text: "$2e^x$" },
              { id: "d", text: "$\\frac{1}{2}e^{2x}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "d/dx($e^{u}$) = $e^{u} \\cdot \\frac{du}{dx}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "d/dx($e^{2x}$) = $e^{2x} \\times 2 = 2e^{2x}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2e^{2x}$",
          },
        },
        {
          id: "cipum-u3-dif-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the value of $\\frac{dy}{dx}$ for $y = xe^x$ at $x = 0$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
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
                reasoning:
                  "$u = x$, $v = e^x$; $\\frac{dy}{dx} = e^x + xe^x = e^x(1+x)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 0$: $e^0(1) = 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cipum-u3-dif-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find and classify all stationary points of $y = x^4 - 4x^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary points",
                statement: "Set dy/dx = 0; classify via second derivative or sign test.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 4x^3 - 12x^2 = 4x^2(x - 3) = 0 \\Rightarrow x = 0, 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{d^2y}{dx^2} = 12x^2 - 24x$; at $x = 3$: $f'' = 36 > 0$ → minimum at $(3, -27)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At $x = 0$, $f'' = 0$ — inconclusive; $\\frac{dy}{dx} = 4x^2(x-3)$ is negative on both sides of 0, so $(0,0)$ is a stationary point of inflection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Minimum at $(3, -27)$; stationary point of inflection at $(0, 0)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Minimum $(3,-27)$; point of inflection $(0,0)$",
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
