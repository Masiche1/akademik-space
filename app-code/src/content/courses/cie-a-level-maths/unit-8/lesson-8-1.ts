import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cial-m-u8-lesson-8-1",
  code: "3-3",
  title: "Differentiation: rules and applications",
  goal: "I CAN differentiate functions using standard rules and apply differentiation to gradients and rates of change.",
  standards: ["9709 Pure Mathematics 1: differentiation"],
  vocabulary: [
    {
      term: "Derivative",
      definition:
        "The gradient function; $\\frac{dy}{dx}$ gives gradient at any point.",
    },
    {
      term: "Chain rule",
      definition:
        "Differentiate composite functions: $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$.",
    },
    {
      term: "Product rule",
      definition: "$\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.",
    },
    {
      term: "Quotient rule",
      definition:
        "$\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.",
    },
    {
      term: "Stationary point",
      definition:
        "Point where $\\frac{dy}{dx} = 0$ — maximum, minimum or point of inflexion.",
    },
    {
      term: "Rate of change",
      definition: "How fast a quantity changes with respect to another.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u8-diff-rules",
      title: "Differentiation rules",
      skill: "Apply power, product, quotient and chain rules.",
      lesson: {
        sections: [
          {
            heading: "Basic rules",
            body: "Power rule: $\\frac{d}{dx}(x^n) = nx^{n-1}$. For $(ax+b)^n$: multiply by n and reduce power by 1, then multiply by the derivative of the inner function (chain rule).",
          },
          {
            heading: "Product and quotient",
            body: "Product: $(uv)' = u'v + uv'$. Quotient: $(u/v)' = (u'v - uv')/v^2$. Memorise the patterns; label u and v first to avoid sign errors.",
          },
          {
            heading: "Chain rule",
            body: "For composite functions like $y = (3x+1)^5$ or $y = \\sin(2x)$, differentiate the outer function then multiply by the derivative of the inner function.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "$\\frac{d}{dx}(x^n) = nx^{n-1}$" },
          { name: "Product", statement: "$(uv)' = u'v + uv'$" },
          { name: "Quotient", statement: "$(u/v)' = (u'v - uv')/v^2$" },
          {
            name: "Chain",
            statement:
              "$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$",
          },
        ],
        workedExample: {
          problem: "Differentiate $y = x^2(3x - 1)$.",
          solution:
            "Product rule: $u=x^2, v=3x-1$. $y' = 2x(3x-1) + x^2(3) = 6x^2 - 2x + 3x^2 = 9x^2 - 2x$.",
        },
      },
      questions: [
        {
          id: "cial-m-u8-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Differentiate $y = x^5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5x^4$" },
              { id: "b", text: "$x^4$" },
              { id: "c", text: "$\\frac{1}{5}x^4$" },
              { id: "d", text: "$5x^6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power rule",
                statement: "$\\frac{d}{dx}(x^n) = nx^{n-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Bring down 5, reduce power to 4.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5x^4$",
            commonErrors: ["Not reducing the power."],
          },
        },
        {
          id: "cial-m-u8-dr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Differentiate $y = (2x + 3)^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "Outer derivative times inner derivative.",
              },
            ],
            steps: [
              {
                reasoning: "$y' = 4(2x+3)^3 \\times 2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 8(2x+3)^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8(2x+3)^3$",
            commonErrors: ["Missing the ×2 from the inner function."],
          },
        },
        {
          id: "cial-m-u8-dr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Differentiate $y = \\frac{x^2}{x+1}$ using the quotient rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotient rule",
                statement: "$\\frac{u'v - uv'}{v^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$u=x^2, u'=2x; v=x+1, v'=1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$y' = \\frac{2x(x+1) - x^2(1)}{(x+1)^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= \\frac{x^2 + 2x}{(x+1)^2}$ or $\\frac{x(x+2)}{(x+1)^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct simplified form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{x(x+2)}{(x+1)^2}$",
            commonErrors: ["Reversing numerator order in quotient rule."],
          },
        },
        {
          id: "cial-m-u8-dr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Differentiation rules.",
          parts: [
            { label: "a", prompt: "State the power rule.", marks: 1 },
            { label: "b", prompt: "Differentiate $y = x^3(2x-1)$.", marks: 3 },
            { label: "c", prompt: "Differentiate $y = (x^2+1)^3$.", marks: 3 },
            {
              label: "d",
              prompt: "Differentiate $y = \\frac{2x}{x-1}$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Differentiation",
                statement: "Power+product+chain+quotient rules.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$nx^{n-1}$.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Product rule applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$3x^2(2x-1) + 2x^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 8x^3 - 3x^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Chain rule applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$3(x^2+1)^2 \\times 2x$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 6x(x^2+1)^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Quotient rule applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\frac{2(x-1) - 2x}{(x-1)^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{-2}{(x-1)^2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) power rule (b) $8x^3-3x^2$ (c) $6x(x^2+1)^2$ (d) $-2/(x-1)^2$",
          },
        },
        {
          id: "cial-m-u8-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Differentiate $y = x^{-3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x^{-4}$" },
              { id: "b", text: "$-3x^{-2}$" },
              { id: "c", text: "$-\\frac{1}{3}x^{-4}$" },
              { id: "d", text: "$-3x^{-4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power rule",
                statement: "$\\frac{d}{dx}(x^n) = nx^{n-1}$.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply by $-3$, reduce power to $-4$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $-3x^{-4}$",
            commonErrors: ["Losing the minus sign on the power."],
          },
        },
        {
          id: "cial-m-u8-dr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Differentiate $y = (5x - 2)^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5(5x-2)^2$" },
              { id: "b", text: "$3(5x-2)^2$" },
              { id: "c", text: "$15(5x-2)^3$" },
              { id: "d", text: "$15(5x-2)^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "Outer derivative times inner derivative $5$.",
              },
            ],
            steps: [
              {
                reasoning: "$y' = 3(5x-2)^2 \\times 5 = 15(5x-2)^2$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $15(5x-2)^2$",
            commonErrors: ["Not multiplying by the inner derivative."],
          },
        },
        {
          id: "cial-m-u8-dr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Differentiate $y = \\frac{1}{x^2 + 4}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{2x}{x^2+4}$" },
              { id: "b", text: "$\\frac{2x}{(x^2+4)^2}$" },
              { id: "c", text: "$-\\frac{2x}{(x^2+4)^2}$" },
              { id: "d", text: "$-\\frac{x}{(x^2+4)^2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "Write as $(x^2+4)^{-1}$, then apply power rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$y' = -(x^2+4)^{-2} \\times 2x = -\\frac{2x}{(x^2+4)^2}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $-\\frac{2x}{(x^2+4)^2}$",
            commonErrors: ["Dropping the negative sign."],
          },
        },
        {
          id: "cial-m-u8-dr-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Differentiate $y = 4x^3 - 6x + 7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12x^2 - 6$" },
              { id: "b", text: "$12x^3 - 6$" },
              { id: "c", text: "$4x^2 - 6$" },
              { id: "d", text: "$12x^2 + 6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power rule",
                statement: "Term by term; constant differentiates to zero.",
              },
            ],
            steps: [
              {
                reasoning: "$y' = 12x^2 - 6$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $12x^2 - 6$",
            commonErrors: ["Differentiating the constant term."],
          },
        },
        {
          id: "cial-m-u8-dr-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The derivative of $y = x^2(3x + 1)$ is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x^2 + 2x$" },
              { id: "b", text: "$9x^2 + 2x$" },
              { id: "c", text: "$6x^2 + 6x$" },
              { id: "d", text: "$9x^2 - 2x$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Product rule",
                statement: "$u'v + uv'$ with $u=x^2$, $v=3x+1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$y' = 2x(3x+1) + 3x^2 = 6x^2+2x+3x^2 = 9x^2+2x$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $9x^2 + 2x$",
            commonErrors: ["Forgetting the $+uv'$ term."],
          },
        },
        {
          id: "cial-m-u8-dr-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y = x^3 + 4x^2 - x$, find $\\frac{dy}{dx}$ when $x = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 27 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power rule",
                statement: "Differentiate, then substitute $x = 2$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 3x^2 + 8x - 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 2$: $12 + 16 - 1 = 27$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$27$",
          },
        },
        {
          id: "cial-m-u8-dr-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Differentiate $y = (2x + 1)^3$ and find the gradient of the curve at $x = 1$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 54 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "Outer derivative times inner derivative $2$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 6(2x+1)^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 1$: $6 \\times 9 = 54$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$54$",
          },
        },
        {
          id: "cial-m-u8-dr-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $y = \\frac{x}{x - 3}$, find the gradient of the curve when $x = 4$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotient rule",
                statement: "$\\frac{u'v - uv'}{v^2}$ with $u = x$, $v = x - 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = \\frac{(x-3) - x}{(x-3)^2} = \\frac{-3}{(x-3)^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 4$: $\\frac{-3}{1} = -3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Gradient $= -3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3$",
          },
        },
        {
          id: "cial-m-u8-dr-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $y = x^2(2 - x)$, find $\\frac{dy}{dx}$ at $x = 3$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Product rule",
                statement: "$u'v + uv'$ with $u = x^2$, $v = 2 - x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 2x(2-x) - x^2 = 4x - 3x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 3$: $12 - 27$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\frac{dy}{dx} = -15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-15$",
          },
        },
        {
          id: "cial-m-u8-dr-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Differentiate $y = \\sqrt{9 - 4x}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chain rule",
                statement: "Rewrite as $(9-4x)^{1/2}$ and differentiate.",
              },
            ],
            steps: [
              {
                reasoning: "$y = (9-4x)^{1/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{dy}{dx} = \\frac{1}{2}(9-4x)^{-1/2} \\times (-4)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -2(9-4x)^{-1/2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= -\\frac{2}{\\sqrt{9-4x}}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac{2}{\\sqrt{9-4x}}$",
            commonErrors: ["Missing the factor $-4$ from the inner function."],
          },
        },
        {
          id: "cial-m-u8-dr-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Differentiate $y = x(4x - 3)^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Product and chain rules",
                statement: "$u'v + uv'$ with $v = (4x-3)^2$ needing chain rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = (4x-3)^2 + x \\cdot 2(4x-3) \\cdot 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$= (4x-3)^2 + 8x(4x-3) = (4x-3)(12x-3)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 48x^2 - 48x + 9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$48x^2 - 48x + 9$",
            commonErrors: ["Missing the $\\times 4$ inside the chain derivative of $v$."],
          },
        },
        {
          id: "cial-m-u8-dr-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Differentiation rules.",
          parts: [
            { label: "a", prompt: "State the chain rule.", marks: 1 },
            { label: "b", prompt: "Differentiate $y = x^3(5 - 2x)$.", marks: 3 },
            { label: "c", prompt: "Differentiate $y = (3 - x^2)^2$.", marks: 3 },
            { label: "d", prompt: "Differentiate $y = \\frac{4x}{x+2}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Differentiation",
                statement: "Chain+product+quotient rules.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{dy}{dx} = \\frac{dy}{du}\\frac{du}{dx}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Product rule applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$3x^2(5-2x) - 2x^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 15x^2 - 8x^3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Chain rule applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$2(3-x^2)(-2x)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 4x^3 - 12x$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Quotient rule applied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\frac{4(x+2) - 4x}{(x+2)^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{8}{(x+2)^2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) dy/dx = dy/du · du/dx (b) $15x^2-8x^3$ (c) $4x^3-12x$ (d) $8/(x+2)^2$",
          },
        },
      ],
    },
    {
      id: "cial-m-u8-diff-apps",
      title: "Applications of differentiation",
      skill: "Find stationary points, tangents and rates of change.",
      lesson: {
        sections: [
          {
            heading: "Stationary points",
            body: "Set $\\frac{dy}{dx} = 0$ and solve for x. Determine max/min by second derivative test: $\\frac{d^2y}{dx^2} > 0$ → minimum; $< 0$ → maximum. Or use sign of gradient either side.",
          },
          {
            heading: "Tangents and normals",
            body: "Gradient at point: substitute x into $\\frac{dy}{dx}$. Tangent: $y - y_1 = m(x - x_1)$. Normal: perpendicular, gradient $-1/m$.",
          },
          {
            heading: "Rates of change",
            body: "$\\frac{dy}{dx}$ measures rate of change of y with respect to x. Related rates: if y depends on x which depends on t, use chain rule: $\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Stationary",
            statement:
              "$\\frac{dy}{dx} = 0$; $\\frac{d^2y}{dx^2}>0$ min, $<0$ max",
          },
          { name: "Tangent", statement: "$y - y_1 = m(x - x_1)$" },
          {
            name: "Related rates",
            statement: "$\\frac{dy}{dt} = \\frac{dy}{dx}\\frac{dx}{dt}$",
          },
        ],
        workedExample: {
          problem: "Find stationary points of $y = x^3 - 3x$.",
          solution:
            "$\\frac{dy}{dx} = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $\\frac{d^2y}{dx^2} = 6x$: at x=1 positive (min), x=-1 negative (max).",
        },
      },
      questions: [
        {
          id: "cial-m-u8-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At a stationary point, what is the value of $\\frac{dy}{dx}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "Undefined" },
              { id: "c", text: "$1$" },
              { id: "d", text: "Maximum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stationary point",
                statement: "Where $\\frac{dy}{dx} = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "Stationary = zero gradient.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $0$",
            commonErrors: ["Confusing with y-value."],
          },
        },
        {
          id: "cial-m-u8-da-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of $y = x^2$ at $x = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "Substitute x into derivative.",
              },
            ],
            steps: [
              { reasoning: "$\\frac{dy}{dx} = 2x$.", marks: 1, markCode: "M" },
              {
                reasoning: "At $x=3$: gradient $= 6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Evaluating y instead of dy/dx."],
          },
        },
        {
          id: "cial-m-u8-da-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the coordinates of the stationary points of $y = x^3 - 3x^2 - 9x + 1$ and determine their nature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary points",
                statement:
                  "Set derivative to zero; use second derivative test.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 3x^2 - 6x - 9 = 0 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow x = 3, -1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "y-values: at x=3, y=-26; at x=-1, y=6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{d^2y}{dx^2} = 6x - 6$: positive at x=3 (min), negative at x=-1 (max).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(3, -26) minimum; (-1, 6) maximum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(3, -26) min; (-1, 6) max",
            commonErrors: ["Forgetting to find y-coordinates."],
          },
        },
        {
          id: "cial-m-u8-da-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Applications of differentiation.",
          parts: [
            {
              label: "a",
              prompt: "Condition for a stationary point?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find gradient of $y=x^2$ at $x=3$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find stationary points of $y = x^3 - 3x$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Equation of tangent to $y=x^2$ at $x=2$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Stationary+tangent+gradient.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{dy}{dx} = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{dy}{dx} = 2x$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Gradient at x=3 is 6.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$3x^2 - 3 = 0$, x = ±1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "y-values: -2, 2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Points (-1,2) and (1,-2).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Point (2,4); gradient = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$y - 4 = 4(x - 2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$y = 4x - 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct equation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) dy/dx=0 (b) 6 (c) (±1,∓2) (d) y=4x−4",
          },
        },
        {
          id: "cial-m-u8-da-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At a minimum point of a curve, $\\frac{d^2y}{dx^2}$ is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative" },
              { id: "b", text: "Positive" },
              { id: "c", text: "Zero" },
              { id: "d", text: "Undefined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Second derivative test",
                statement: "$\\frac{d^2y}{dx^2}>0$ → minimum; $<0$ → maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Curves upwards at a minimum, so second derivative positive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Positive",
            commonErrors: ["Confusing minimum with maximum."],
          },
        },
        {
          id: "cial-m-u8-da-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The normal to a curve is perpendicular to the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tangent" },
              { id: "b", text: "Asymptote" },
              { id: "c", text: "$y$-axis" },
              { id: "d", text: "$x$-axis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal",
                statement: "Line perpendicular to the tangent at the point.",
              },
            ],
            steps: [
              {
                reasoning: "Normal is perpendicular to tangent; gradient $-1/m_T$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Tangent",
            commonErrors: ["Confusing normal with tangent."],
          },
        },
        {
          id: "cial-m-u8-da-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The stationary point of $y = x^2 - 4x$ is at...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4, 0)$" },
              { id: "b", text: "$(2, -4)$" },
              { id: "c", text: "$(-2, 12)$" },
              { id: "d", text: "$(2, 0)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary point",
                statement: "Set $\\frac{dy}{dx}=0$ and find the $y$-coordinate too.",
              },
            ],
            steps: [
              {
                reasoning: "$2x - 4 = 0 \\Rightarrow x = 2$; $y = 4 - 8 = -4$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(2, -4)$",
            commonErrors: ["Giving only the x-coordinate."],
          },
        },
        {
          id: "cial-m-u8-da-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $y = x^3 - 3x^2$, $\\frac{d^2y}{dx^2} = 6x - 6$. The point at $x = 0$ is a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Minimum" },
              { id: "b", text: "Stationary point only" },
              { id: "c", text: "Point of inflexion" },
              { id: "d", text: "Maximum" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Second derivative test",
                statement: "$\\frac{d^2y}{dx^2} < 0$ → maximum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At $x = 0$: $\\frac{d^2y}{dx^2} = -6 < 0$, and $\\frac{dy}{dx}=0$ there, so maximum.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Maximum",
            commonErrors: ["Misreading the sign of the second derivative."],
          },
        },
        {
          id: "cial-m-u8-da-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$y = x^2$ and $x$ increases at $3$ units per second. Find the rate of change of $y$ when $x = 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Related rates",
                statement: "$\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 2x = 4$; $\\frac{dy}{dt} = 4 \\times 3 = 12$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $12$",
            commonErrors: ["Stopping at $\\frac{dy}{dx}$ without multiplying by $\\frac{dx}{dt}$."],
          },
        },
        {
          id: "cial-m-u8-da-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the gradient of $y = x^3 - 2x$ at $x = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "Substitute $x$ into $\\frac{dy}{dx}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 3x^2 - 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 2$: $12 - 2 = 10$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$",
          },
        },
        {
          id: "cial-m-u8-da-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the $x$-coordinate of the stationary point of $y = x^2 - 8x + 3$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary point",
                statement: "Solve $\\frac{dy}{dx} = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 2x - 8 = 0$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
          },
        },
        {
          id: "cial-m-u8-da-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the curve $y = 3x^2 - x$ at $x = 2$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Gradient",
                statement: "Differentiate then substitute $x = 2$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{dy}{dx} = 6x - 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $x = 2$: gradient $= 11$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$11$",
          },
        },
        {
          id: "cial-m-u8-da-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A particle has displacement $s = 4t^3 - 6t^2 + t$ metres. Find its velocity when $t = 1$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Kinematics",
                statement: "$v = \\frac{ds}{dt}$.",
              },
            ],
            steps: [
              {
                reasoning: "$v = \\frac{ds}{dt} = 12t^2 - 12t + 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $t = 1$: $12 - 12 + 1$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Velocity $= 1$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ m/s",
          },
        },
        {
          id: "cial-m-u8-da-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the stationary points of $y = 2x^3 - 3x^2 - 12x + 1$ and determine their nature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stationary points",
                statement: "Set derivative to zero; use second derivative test.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{dy}{dx} = 6x^2 - 6x - 12 = 6(x-2)(x+1) = 0 \\Rightarrow x = 2, -1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "y-values: at $x=2$, $y = -19$; at $x=-1$, $y = 8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{d^2y}{dx^2} = 12x - 6$: positive at $x=2$ (min), negative at $x=-1$ (max).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(2, -19)$ minimum; $(-1, 8)$ maximum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(2, -19) min; (-1, 8) max",
            commonErrors: ["Forgetting to find y-coordinates."],
          },
        },
        {
          id: "cial-m-u8-da-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the tangent and the equation of the normal to $y = x^2 - 4x + 1$ at the point where $x = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tangent and normal",
                statement: "$y - y_1 = m(x - x_1)$; normal gradient $-1/m$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point $(1, -2)$; $\\frac{dy}{dx} = 2x - 4 = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tangent: $y + 2 = -2(x - 1) \\Rightarrow y = -2x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Normal gradient $= \\frac{1}{2}$: $y + 2 = \\frac{1}{2}(x - 1) \\Rightarrow x - 2y - 5 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both equations correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tangent: $y = -2x$; normal: $x - 2y - 5 = 0$",
            commonErrors: ["Using the same gradient for the normal."],
          },
        },
        {
          id: "cial-m-u8-da-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Applications of differentiation.",
          parts: [
            {
              label: "a",
              prompt: "State the condition for a stationary point.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find the gradient of $y = x^3$ at $x = -2$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the stationary points of $y = x^3 - 3x^2$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find the equation of the tangent to $y = x^3$ at $x = -2$.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Applications",
                statement: "Stationary+tangent+gradient.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\frac{dy}{dx} = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{dy}{dx} = 3x^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Gradient at $x=-2$ is $12$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$3x^2 - 6x = 3x(x-2) = 0$, so $x = 0, 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "y-values: $0$ and $-4$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Points $(0,0)$ and $(2,-4)$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Point $(-2,-8)$; gradient $m = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$y + 8 = 12(x + 2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$y = 12x + 16$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct equation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) dy/dx=0 (b) 12 (c) (0,0), (2,−4) (d) y=12x+16",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u8-diff-notes",
      title: "Differentiation — revision notes",
      summary:
        "Power/product/quotient/chain rules, stationary points, tangents, rates of change.",
      sections: [
        {
          heading: "Rules",
          body: "Power: $nx^{n-1}$. Product: $u'v+uv'$. Quotient: $(u'v-uv')/v^2$. Chain: $\\frac{dy}{dx}=\\frac{dy}{du}\\frac{du}{dx}$.",
        },
        {
          heading: "Applications",
          body: "Stationary: dy/dx=0; second derivative test for nature. Tangent: $y-y_1=m(x-x_1)$. Related rates: chain rule through intermediate variable.",
        },
        {
          heading: "Exam checklist",
          body: "Label u and v before applying product/quotient. Check chain rule inner derivative. Verify stationary point nature.",
        },
      ],
    },
  ],
};
