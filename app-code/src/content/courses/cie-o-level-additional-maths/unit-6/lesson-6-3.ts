import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olam-u6-lesson-6-3",
  code: "4-5",
  title: "Further Differentiation",
  goal: "I CAN use product, quotient and chain rules to differentiate.",
  standards: ["4037: differentiation rules"],
  vocabulary: [
    { term: "Product rule", definition: "$(uv)'=u'v+uv'$ for product of functions." },
    { term: "Quotient rule", definition: "$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$." },
    { term: "Chain rule", definition: "Derivative of composite $f(g(x))$ is $f'(g(x))\\cdot g'(x)$." },
    { term: "Composite", definition: "Function of a function, e.g. $(2x+1)^3$." },
  ],
  concepts: [
    {
      id: "olam-u6-s3-product",
      title: "Product and quotient rules",
      skill: "Differentiate products and quotients at O Level.",
      lesson: {
        sections: [
          { heading: "Product rule", body: "When differentiating a product $y=u(x)v(x)$ you cannot just multiply the derivatives — the product rule says $\\frac{dy}{dx}=u'v+uv'$. Think of it as: differentiate the first factor keeping the second fixed, add the first factor times the derivative of the second. For example, $y=x^2\\sin x$ needs both terms because both factors depend on $x$." },
          { heading: "Quotient rule", body: "For a quotient $y=\\frac{u}{v}$, the derivative is $\\frac{u'v-uv'}{v^2}$ — top times derivative of bottom minus bottom times derivative of top, all over bottom squared. Note the order: it is $u'v - uv'$, not the other way round, and the denominator is squared." },
        ],
        keyFormulas: [
          { name: "Product", statement: "$(uv)'=u'v+uv'$" },
          { name: "Quotient", statement: "$\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$" },
        ],
        workedExample: { problem: "Differentiate $y=x^2(3x-1)$.", solution: "Expand first: $y=3x^3-x^2$ → $\\frac{dy}{dx}=9x^2-2x$. (Or product rule: $2x(3x-1)+x^2(3)=6x^2-2x+3x^2=9x^2-2x$ — same answer.)" },
      },
      questions: [
        {
          id: "olam-u6-s3-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(x^3\\cdot x^2)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6x^5$" },
            { id: "b", text: "$5x^4$" },
            { id: "c", text: "$5x^6$" },
            { id: "d", text: "$x^5+x^6$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Simplify first", statement: "Combine powers." }], steps: [{ reasoning: "$x^3\\cdot x^2=x^5$ → $\\frac{d}{dx}=5x^4$.", marks: 1, markCode: "A" }], finalAnswer: "$5x^4$" },
        },
        {
          id: "olam-u6-s3-pr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Use the product rule to differentiate $y=x^2e^x$ at $x=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "$(uv)'=u'v+uv'$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x\\cdot e^x+x^2\\cdot e^x=e^x(x^2+2x)$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=0$: $e^0(0+0)=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "olam-u6-s3-pr-q3", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=\\frac{x^2+1}{x}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quotient rule", statement: "Or simplify first." }], steps: [
            { reasoning: "Simplify: $y=x+\\frac1x=x+x^{-1}$ → $\\frac{dy}{dx}=1-x^{-2}$.", marks: 1, markCode: "M" },
            { reasoning: "Quotient check: $\\frac{2x\\cdot x-(x^2+1)\\cdot1}{x^2}=\\frac{2x^2-x^2-1}{x^2}=\\frac{x^2-1}{x^2}=1-\\frac{1}{x^2}$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1-\\frac{1}{x^2}$ or $\\frac{x^2-1}{x^2}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1-\\frac{1}{x^2}$" },
        },
        {
          id: "olam-u6-s3-pr-q4", difficulty: "core", totalMarks: 4,
          stem: "Differentiate $y=x^3\\ln x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "With $\\frac{d}{dx}\\ln x=\\frac1x$." }], steps: [
            { reasoning: "$u=x^3$, $v=\\ln x$; $u'=3x^2$, $v'=\\frac1x$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=3x^2\\ln x+x^3\\cdot\\frac1x=3x^2\\ln x+x^2$.", marks: 1, markCode: "M" },
            { reasoning: "Factor: $x^2(3\\ln x+1)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^2(3\\ln x+1)$" },
        },
        {
          id: "olam-u6-s3-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(x \\cdot \\ln x)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\ln x$" },
            { id: "b", text: "$1$" },
            { id: "c", text: "$\\ln x + 1$" },
            { id: "d", text: "$\\frac{1}{x}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "$(uv)'=u'v+uv'$." }], steps: [{ reasoning: "$1\\cdot\\ln x+x\\cdot\\frac1x=\\ln x+1$.", marks: 1, markCode: "A" }], finalAnswer: "$\\ln x+1$" },
        },
        {
          id: "olam-u6-s3-pr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=xe^x$ at $x=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "$(uv)'=u'v+uv'$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=e^x+xe^x=e^x(1+x)$; at $x=0$: $1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u6-s3-pr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The quotient rule states that $\\left(\\frac{u}{v}\\right)'$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{u'v-uv'}{v^2}$" },
            { id: "b", text: "$\\frac{u'v-uv'}{v}$" },
            { id: "c", text: "$\\frac{u'v+uv'}{v^2}$" },
            { id: "d", text: "$\\frac{uv'-u'v}{v}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Quotient rule", statement: "$\\frac{u'v-uv'}{v^2}$." }], steps: [{ reasoning: "Top×bottom' minus bottom×top', over bottom squared.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{u'v-uv'}{v^2}$" },
        },
        {
          id: "olam-u6-s3-pr-q8", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=\\frac{x}{x^2+1}$ using the quotient rule.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quotient rule", statement: "$\\frac{u'v-uv'}{v^2}$." }], steps: [
            { reasoning: "$u=x$, $v=x^2+1$; $u'=1$, $v'=2x$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=\\frac{1(x^2+1)-x(2x)}{(x^2+1)^2}=\\frac{1-x^2}{(x^2+1)^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{1-x^2}{(x^2+1)^2}$" },
        },
        {
          id: "olam-u6-s3-pr-q9", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=x\\ln x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=\\ln x+1$; at $x=1$: $0+1=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u6-s3-pr-q10", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{d}{dx}(x^2 \\cdot x^3)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x\\cdot3x^2=6x^3$" },
            { id: "b", text: "$5x^5$" },
            { id: "c", text: "$x^5$" },
            { id: "d", text: "$5x^4$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Simplify first", statement: "Combine powers before differentiating." }], steps: [{ reasoning: "$x^5$ → $5x^4$.", marks: 1, markCode: "A" }], finalAnswer: "$5x^4$" },
        },
        {
          id: "olam-u6-s3-pr-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $y=x^2e^x$ fully.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "$(uv)'=u'v+uv'$ with $v=e^x$." }], steps: [
            { reasoning: "$u=x^2$, $v=e^x$; $u'=2x$, $v'=e^x$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=2xe^x+x^2e^x$.", marks: 1, markCode: "M" },
            { reasoning: "Factor: $e^x(x^2+2x)=xe^x(x+2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$xe^x(x+2)$" },
        },
        {
          id: "olam-u6-s3-pr-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=x^3\\ln x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2\\ln x+x^2$; at $x=1$: $0+1=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u6-s3-pr-q13", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{d}{dx}\\left(\\frac{x}{x+1}\\right)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{x+1}$" },
            { id: "b", text: "$\\frac{x}{(x+1)^2}$" },
            { id: "c", text: "$\\frac{1}{(x+1)^2}$" },
            { id: "d", text: "$\\frac{-1}{(x+1)^2}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Quotient rule", statement: "$\\frac{u'v-uv'}{v^2}$." }], steps: [{ reasoning: "$\\frac{(x+1)-x}{(x+1)^2}=\\frac{1}{(x+1)^2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{(x+1)^2}$" },
        },
        {
          id: "olam-u6-s3-pr-q14", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=(2x+1)(x-3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand then differentiate", statement: "Or product rule." }], steps: [
            { reasoning: "$y=2x^2-5x-3$ → $\\frac{dy}{dx}=4x-5$.", marks: 1, markCode: "M" },
            { reasoning: "Product check: $2(x-3)+(2x+1)=4x-5$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4x-5$" },
        },
        {
          id: "olam-u6-s3-pr-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=x^2\\ln x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x\\ln x+x$; at $x=1$: $0+1=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u6-s3-pr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $y=\\frac{x+1}{x-1}$ using the quotient rule.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quotient rule", statement: "$\\frac{u'v-uv'}{v^2}$." }], steps: [
            { reasoning: "$u=x+1$, $v=x-1$; $u'=1$, $v'=1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=\\frac{(x-1)-(x+1)}{(x-1)^2}=\\frac{-2}{(x-1)^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Simplify check: $y=1+\\frac{2}{x-1}$ → $\\frac{dy}{dx}=-\\frac{2}{(x-1)^2}$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{2}{(x-1)^2}$" },
        },
      ],
    },
    {
      id: "olam-u6-s3-chain",
      title: "Chain rule",
      skill: "Differentiate composite functions at O Level.",
      lesson: {
        sections: [
          { heading: "Chain rule", body: "When a function is a function of another function — like $(2x+1)^3$ or $\\sin(3x)$ — differentiate the outer function first, then multiply by the derivative of the inner function. Symbolically, if $y=f(g(x))$ then $\\frac{dy}{dx}=f'(g(x))\\cdot g'(x)$. It is often described as 'differentiate the outside, leave the inside, then multiply by the derivative of the inside'." },
          { heading: "Recognising composites", body: "Look for a 'big' function wrapped around a 'small' one: powers of linear expressions, trig of multiples of $x$, exponentials of expressions, logs of expressions. The inner function is whatever is inside the outer operation. Always finish by multiplying by the derivative of the inner part — the most common error is forgetting this final factor." },
        ],
        keyFormulas: [
          { name: "Chain rule", statement: "$\\frac{dy}{dx}=f'(g(x))\\cdot g'(x)$" },
          { name: "Power of linear", statement: "$\\frac{d}{dx}(ax+b)^n=an(ax+b)^{n-1}$" },
        ],
        workedExample: { problem: "Differentiate $y=(3x-2)^4$.", solution: "Outer: $u^4$ with $u=3x-2$. $\\frac{dy}{dx}=4(3x-2)^3\\cdot3=12(3x-2)^3$." },
      },
      questions: [
        {
          id: "olam-u6-s3-ch-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(2x+1)^2$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2(2x+1)$" },
            { id: "b", text: "$4(2x+1)$" },
            { id: "c", text: "$(2x+1)$" },
            { id: "d", text: "$8(2x+1)^3$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Outer × inner derivative." }], steps: [{ reasoning: "$2(2x+1)\\cdot2=4(2x+1)$.", marks: 1, markCode: "A" }], finalAnswer: "$4(2x+1)$" },
        },
        {
          id: "olam-u6-s3-ch-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Differentiate $y=\\sin(3x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Trig composite." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=\\cos(3x)\\cdot3=3\\cos(3x)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3\\cos(3x)$" },
        },
        {
          id: "olam-u6-s3-ch-q3", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=(x^2+3)^5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Inner is $x^2+3$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=5(x^2+3)^4\\cdot2x$.", marks: 1, markCode: "M" },
            { reasoning: "$=10x(x^2+3)^4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10x(x^2+3)^4$" },
        },
        {
          id: "olam-u6-s3-ch-q4", difficulty: "core", totalMarks: 4,
          stem: "Differentiate $y=e^{2x^2}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Exponential composite." }], steps: [
            { reasoning: "Inner $u=2x^2$, outer $e^u$; $u'=4x$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=e^{2x^2}\\cdot4x=4xe^{2x^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Verify by expansion intuition: derivative of $e^{g(x)}$ is $g'(x)e^{g(x)}$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$4xe^{2x^2}$" },
        },
        {
          id: "olam-u6-s3-ch-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(3x+2)^5$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$15(3x+2)^5$" },
            { id: "b", text: "$\\frac{5}{3}(3x+2)^4$" },
            { id: "c", text: "$15(3x+2)^4$" },
            { id: "d", text: "$5(3x+2)^4$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Outer derivative × inner derivative." }], steps: [{ reasoning: "$5(3x+2)^4\\cdot3=15(3x+2)^4$.", marks: 1, markCode: "A" }], finalAnswer: "$15(3x+2)^4$" },
        },
        {
          id: "olam-u6-s3-ch-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=(2x-1)^3$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3(2x-1)^2\\cdot2=6(2x-1)^2$; at $x=1$: $6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olam-u6-s3-ch-q7", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(\\cos 2x)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\sin 2x$" },
            { id: "b", text: "$-\\sin 2x$" },
            { id: "c", text: "$2\\cos 2x$" },
            { id: "d", text: "$-2\\sin 2x$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Trig composite." }], steps: [{ reasoning: "$-\\sin(2x)\\cdot2=-2\\sin 2x$.", marks: 1, markCode: "A" }], finalAnswer: "$-2\\sin 2x$" },
        },
        {
          id: "olam-u6-s3-ch-q8", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=(4x-3)^2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Power of linear." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2(4x-3)\\cdot4$.", marks: 1, markCode: "M" },
            { reasoning: "$=8(4x-3)=32x-24$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$8(4x-3)$" },
        },
        {
          id: "olam-u6-s3-ch-q9", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=e^{3x}$ at $x=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Exponential composite." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3e^{3x}$; at $x=0$: $3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u6-s3-ch-q10", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{d}{dx}(\\ln 2x)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{x}$" },
            { id: "b", text: "$\\frac{2}{x}$" },
            { id: "c", text: "$\\ln 2$" },
            { id: "d", text: "$\\frac{1}{2x}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Log composite." }], steps: [{ reasoning: "$\\frac{1}{2x}\\cdot2=\\frac1x$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{x}$" },
        },
        {
          id: "olam-u6-s3-ch-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $y=\\sin(x^2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Inner is $x^2$." }], steps: [
            { reasoning: "Outer $\\sin u$ with $u=x^2$: $\\frac{dy}{dx}=\\cos(x^2)\\cdot2x$.", marks: 1, markCode: "M" },
            { reasoning: "$=2x\\cos(x^2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Verify: derivative of $\\sin g(x)$ is $g'(x)\\cos g(x)$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x\\cos(x^2)$" },
        },
        {
          id: "olam-u6-s3-ch-q12", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=(x^2+1)^3$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3(x^2+1)^2\\cdot2x=6x(x^2+1)^2$; at $x=1$: $6\\cdot4=24$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
          ], finalAnswer: "24" },
        },
        {
          id: "olam-u6-s3-ch-q13", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{d}{dx}\\left(\\sqrt{x+1}\\right)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{\\sqrt{x+1}}$" },
            { id: "b", text: "$\\frac{1}{2\\sqrt{x+1}}$" },
            { id: "c", text: "$\\frac{1}{\\sqrt{x+1}}$" },
            { id: "d", text: "$\\sqrt{x+1}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Power $\\frac12$ of linear." }], steps: [{ reasoning: "$\\frac12(x+1)^{-1/2}\\cdot1=\\frac{1}{2\\sqrt{x+1}}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{2\\sqrt{x+1}}$" },
        },
        {
          id: "olam-u6-s3-ch-q14", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=(3x^2-x)^4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Inner is $3x^2-x$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=4(3x^2-x)^3\\cdot(6x-1)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $4(6x-1)(3x^2-x)^3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4(6x-1)(3x^2-x)^3$" },
        },
        {
          id: "olam-u6-s3-ch-q15", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=e^{x^2}$ at $x=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2xe^{x^2}$; at $x=0$: 0.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "olam-u6-s3-ch-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $y=\\ln(x^2+1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Log of composite." }], steps: [
            { reasoning: "Inner $u=x^2+1$: $\\frac{dy}{dx}=\\frac{1}{x^2+1}\\cdot2x$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac{2x}{x^2+1}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Verify: derivative of $\\ln g(x)$ is $\\frac{g'(x)}{g(x)}$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2x}{x^2+1}$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u6-s3-rules-notes", title: "Further differentiation — notes", summary: "Product, quotient, chain rules.",
      sections: [
        { heading: "Product", body: "$(uv)'=u'v+uv'$. Don't just multiply derivatives." },
        { heading: "Quotient", body: "$\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$ — order matters." },
        { heading: "Chain", body: "$f(g(x))'=f'(g(x))\\cdot g'(x)$ — outside derivative times inside derivative." },
      ] },
  ],
};
