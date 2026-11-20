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
            { id: "a", text: "$5x^4$" }, { id: "b", text: "$6x^5$" }, { id: "c", text: "$5x^6$" }, { id: "d", text: "$x^5+x^6$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "$4(2x+1)$" }, { id: "b", text: "$2(2x+1)$" }, { id: "c", text: "$(2x+1)$" }, { id: "d", text: "$8(2x+1)^3$" },
          ], correctChoiceId: "a" },
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
