import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edial-maths-u2-lesson-2-3",
  code: "2-3",
  title: "Advanced Calculus, Trigonometry and Numerical Methods",
  goal: "I CAN differentiate using the chain, product and quotient rules, differentiate implicitly, solve trigonometric equations and apply Newton-Raphson iteration.",
  standards: ["WMA12 P2", "Differentiation", "Trigonometry", "Numerical methods"],
  vocabulary: [
    { term: "Chain rule", definition: "If $y=f(g(x))$ then $\\frac{dy}{dx}=f'(g(x))\\,g'(x)$ — differentiate the outside, then the inside." },
    { term: "Product rule", definition: "If $y=uv$ then $\\frac{dy}{dx}=u\\frac{dv}{dx}+v\\frac{du}{dx}$." },
    { term: "Quotient rule", definition: "If $y=\\frac{u}{v}$ then $\\frac{dy}{dx}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$." },
    { term: "Implicit differentiation", definition: "Differentiating both sides of an equation involving $x$ and $y$, treating $y$ as a function of $x$ and using $\\frac{dy}{dx}$ for $y$ terms." },
    { term: "Newton-Raphson method", definition: "Iterating $x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$ to approximate a root of $f(x)=0$." },
  ],
  concepts: [
    {
      id: "edial-maths-u2-advanced-calculus",
      title: "Chain, product, quotient rules and implicit differentiation",
      skill: "Differentiate composite, product and quotient functions and implicitly defined curves.",
      lesson: {
        sections: [
          {
            heading: "The chain rule",
            body: "For a composite function, differentiate the outer function first (leaving the inside untouched), then multiply by the derivative of the inside. Example: $y=(3x+1)^5$ gives $\\frac{dy}{dx}=5(3x+1)^4\\times3=15(3x+1)^4$.",
          },
          {
            heading: "Product and quotient rules",
            body: "**Product:** $(uv)'=u'v+uv'$. **Quotient:** $\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$. For example $\\frac{d}{dx}\\left(\\frac{x^2}{x+1}\\right)=\\frac{2x(x+1)-x^2}{(x+1)^2}=\\frac{x^2+2x}{(x+1)^2}$.",
          },
          {
            heading: "Implicit differentiation",
            body: "When $y$ is not explicitly a function of $x$ (e.g. $x^2+y^2=25$), differentiate term by term with respect to $x$, writing $\\frac{d}{dx}(y^n)=ny^{n-1}\\frac{dy}{dx}$ and $\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$. Then solve for $\\frac{dy}{dx}$.",
          },
        ],
        keyFormulas: [
          { name: "Chain rule", statement: "$\\frac{dy}{dx}=f'(g(x))\\,g'(x)$" },
          { name: "Product rule", statement: "$(uv)'=u'v+uv'$" },
          { name: "Quotient rule", statement: "$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$" },
        ],
        workedExample: {
          problem: "Find $\\frac{dy}{dx}$ for $y=x^2e^x$.",
          solution: "Use the product rule with $u=x^2$ and $v=e^x$: $\\frac{dy}{dx}=2x\\,e^x+x^2e^x=x(x+2)e^x$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u2-calc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}\\left((2x-3)^4\\right)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8(2x-3)^3$" },
              { id: "b", text: "$4(2x-3)^3$" },
              { id: "c", text: "$(2x-3)^3$" },
              { id: "d", text: "$8x(2x-3)^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Chain rule", statement: "$\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)$." },
            ],
            steps: [
              { reasoning: "Outer derivative $4(2x-3)^3$ times inner derivative $2$.", working: "4(2x-3)^3\\times2=8(2x-3)^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8(2x-3)^3$",
            commonErrors: ["Forgetting to multiply by the inner derivative $2$."],
          },
        },
        {
          id: "edial-maths-u2-calc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\frac{dy}{dx}$ for $y=\\frac{x^2}{x+1}$. Give your answer as a single fraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quotient rule", statement: "$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$." },
            ],
            steps: [
              { reasoning: "Apply the quotient rule with $u=x^2$, $v=x+1$.", working: "\\frac{dy}{dx}=\\frac{2x(x+1)-x^2(1)}{(x+1)^2}", marks: 1, markCode: "M" },
              { reasoning: "Expand the numerator.", working: "\\frac{2x^2+2x-x^2}{(x+1)^2}=\\frac{x^2+2x}{(x+1)^2}", marks: 1, markCode: "M" },
              { reasoning: "State the single fraction.", working: "\\frac{x(x+2)}{(x+1)^2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{dy}{dx}=\\frac{x^2+2x}{(x+1)^2}$",
            commonErrors: ["Reversing the order in the numerator ($uv'-u'v$).", "Forgetting to square the denominator."],
          },
        },
        {
          id: "edial-maths-u2-calc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The curve has equation $x^2+y^2=25$. Find $\\frac{dy}{dx}$ at the point $(3,4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Implicit differentiation", statement: "$\\frac{d}{dx}(y^n)=ny^{n-1}\\frac{dy}{dx}$." },
            ],
            steps: [
              { reasoning: "Differentiate both sides with respect to $x$.", working: "2x+2y\\frac{dy}{dx}=0", marks: 1, markCode: "M" },
              { reasoning: "Solve for $\\frac{dy}{dx}$.", working: "\\frac{dy}{dx}=-\\frac{x}{y}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $(3,4)$.", working: "\\frac{dy}{dx}=-\\frac34", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{dy}{dx}=-\\frac34$",
            commonErrors: ["Writing $\\frac{d}{dx}(y^2)=2y$ without the $\\frac{dy}{dx}$ factor.", "Sign error when solving."],
          },
        },
        {
          id: "edial-maths-u2-calc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $y=\\frac{x^2+1}{x-1}$ for $x\\neq1$.",
          parts: [
            { label: "a", prompt: "Find $\\frac{dy}{dx}$, giving your answer as a single fraction.", marks: 3 },
            { label: "b", prompt: "Find the coordinates of any stationary points on the curve.", marks: 4 },
            { label: "c", prompt: "Determine the nature of each stationary point.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quotient rule", statement: "$\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$." },
              { kind: "theorem", name: "Second derivative test", statement: "$\\frac{d^2y}{dx^2}>0$ minimum; $<0$ maximum." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the quotient rule with $u=x^2+1$, $v=x-1$.", working: "\\frac{dy}{dx}=\\frac{2x(x-1)-(x^2+1)}{(x-1)^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand the numerator.", working: "\\frac{2x^2-2x-x^2-1}{(x-1)^2}=\\frac{x^2-2x-1}{(x-1)^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the derivative.", working: "\\frac{dy}{dx}=\\frac{x^2-2x-1}{(x-1)^2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the numerator of $\\frac{dy}{dx}$ to zero.", working: "x^2-2x-1=0\\Rightarrow x=1\\pm\\sqrt2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use the quadratic formula.", working: "x=\\frac{2\\pm\\sqrt{4+4}}{2}=1\\pm\\sqrt2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Find $y$ at each value.", working: "y=\\frac{x^2+1}{x-1};\\ x=1+\\sqrt2\\Rightarrow y=2+2\\sqrt2\\approx4.83;\\ x=1-\\sqrt2\\Rightarrow y=2-2\\sqrt2\\approx-0.83", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the coordinates.", working: "(1+\\sqrt2,\\,2+2\\sqrt2)\\text{ and }(1-\\sqrt2,\\,2-2\\sqrt2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate $\\frac{dy}{dx}$ or test values either side.", working: "\\text{Sign of }\\frac{d^2y}{dx^2}\\text{ or test }x=0,2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At $x=1+\\sqrt2\\approx2.41$ test gradient sign: derivative changes $+\\to-$ so maximum.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At $x=1-\\sqrt2\\approx-0.41$ derivative changes $-\\to+$ so minimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{dy}{dx}=\\frac{x^2-2x-1}{(x-1)^2}$ (b) $(1+\\sqrt2,\\,2+2\\sqrt2)$ and $(1-\\sqrt2,\\,2-2\\sqrt2)$ (c) maximum at $x=1+\\sqrt2$; minimum at $x=1-\\sqrt2$",
            commonErrors: ["Sign errors in the quotient rule numerator.", "Forgetting that $x=1$ is excluded from the domain.", "Misclassifying stationary points."],
            examinerNote: "Accept decimal coordinates; exact surd form preferred. Verify $y$ values: at $x=1+\\sqrt2$, $x^2=3+2\\sqrt2$, numerator $4+2\\sqrt2$, denominator $\\sqrt2$, giving $y=2+2\\sqrt2$ — check: $\\frac{4+2\\sqrt2}{\\sqrt2}=\\frac{4}{\\sqrt2}+2=2\\sqrt2+2$ ✓.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u2-trig-numerical",
      title: "Trigonometric equations and numerical methods",
      skill: "Solve trigonometric equations in radians and use Newton-Raphson iteration to approximate roots.",
      lesson: {
        sections: [
          {
            heading: "Trigonometric equations",
            body: "Solve in radians using exact values for $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$. For $\\sin\\theta=k$ there are generally two solutions in $[0,2\\pi)$: $\\theta=\\arcsin k$ and $\\pi-\\arcsin k$. Always state the interval asked for and give exact values where possible.",
          },
          {
            heading: "Newton-Raphson iteration",
            body: "To solve $f(x)=0$, iterate $x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$. Choose a starting value near the root; the method converges quickly when $f'(x)\\neq0$ near the root. Always check the final value by substitution or sign change.",
          },
          {
            heading: "When Newton-Raphson fails",
            body: "The method can fail if $f'(x_n)=0$, if the starting value is poor, or if the function is not well-behaved. A sign change (or a sketch) confirms a root exists; Newton-Raphson finds its value.",
          },
        ],
        keyFormulas: [
          { name: "Newton-Raphson", statement: "$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$" },
          { name: "Trig solutions", statement: "$\\sin\\theta=k$: $\\theta=\\arcsin k$ or $\\pi-\\arcsin k$ in $[0,2\\pi)$" },
        ],
        workedExample: {
          problem: "Use Newton-Raphson with $x_0=1$ to find the root of $x^3-x-2=0$ to 2 decimal places (one iteration shown).",
          solution: "$f(x)=x^3-x-2$, $f'(x)=3x^2-1$. $x_1=1-\\frac{1-1-2}{3-1}=1-\\frac{-2}{2}=2$. Then $x_2=2-\\frac{8-2-2}{12-1}=2-\\frac{4}{11}\\approx1.64$. Iterating converges to $x\\approx1.52$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u2-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $\\sin\\theta=\\frac{1}{2}$ for $0\\le\\theta\\le2\\pi$, giving exact answers.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\theta=\\frac{\\pi}{6}$ only" },
              { id: "b", text: "$\\theta=\\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$" },
              { id: "c", text: "$\\theta=\\frac{\\pi}{3}$ or $\\frac{2\\pi}{3}$" },
              { id: "d", text: "$\\theta=\\frac{\\pi}{6}$ or $\\frac{\\pi}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sine values", statement: "$\\sin\\frac{\\pi}{6}=\\frac12$; sine is positive in quadrants I and II." },
            ],
            steps: [
              { reasoning: "The principal value is $\\frac{\\pi}{6}$; the second solution in $[0,2\\pi)$ is $\\pi-\\frac{\\pi}{6}=\\frac{5\\pi}{6}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\theta=\\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$",
            commonErrors: ["Giving only the principal value.", "Using $\\frac{\\pi}{3}$ — that is where sine equals $\\frac{\\sqrt3}{2}$."],
          },
        },
        {
          id: "edial-maths-u2-trig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2\\cos\\theta+\\sqrt3=0$ for $0\\le\\theta\\le2\\pi$, giving exact answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cosine values", statement: "$\\cos\\frac{\\pi}{6}=\\frac{\\sqrt3}{2}$; cosine is negative in quadrants II and III." },
            ],
            steps: [
              { reasoning: "Rearrange.", working: "\\cos\\theta=-\\frac{\\sqrt3}{2}", marks: 1, markCode: "M" },
              { reasoning: "Find the reference angle: $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt3}{2}$, and cosine is negative in QII and QIII.", working: "\\theta=\\pi\\pm\\frac{\\pi}{6}", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "\\theta=\\frac{5\\pi}{6}\\text{ or }\\frac{7\\pi}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=\\frac{5\\pi}{6}$ or $\\frac{7\\pi}{6}$",
            commonErrors: ["Missing the third-quadrant solution.", "Sign error rearranging."],
          },
        },
        {
          id: "edial-maths-u2-trig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use Newton-Raphson iteration with $x_0=1$ to find the root of $f(x)=x^3-x-2$ to 2 decimal places. Show the first two iterations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton-Raphson", statement: "$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$." },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "f'(x)=3x^2-1", marks: 1, markCode: "M" },
              { reasoning: "First iteration from $x_0=1$.", working: "x_1=1-\\frac{-2}{2}=2", marks: 1, markCode: "M" },
              { reasoning: "Second iteration.", working: "x_2=2-\\frac{4}{11}=1.6363\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Continue iterating until stable: converges to $x\\approx1.52$; check $f(1.52)=1.52^3-1.52-2\\approx-0.009$ close to zero.", working: "x\\approx1.52", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx1.52$",
            commonErrors: ["Arithmetic slips in evaluating $f$ and $f'$.", "Stopping after one iteration.", "Using $f'(x)=3x^2$ (forgetting the $-1`)."],
            examinerNote: "Accept $1.52$; more iterations give $1.5214$.",
          },
        },
        {
          id: "edial-maths-u2-trig-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The equation $x^3-2x-5=0$ has a root near $x=2$.",
          parts: [
            { label: "a", prompt: "Show that $f(2)<0<f(3)$, confirming a root in $(2,3)$.", marks: 2 },
            { label: "b", prompt: "Use Newton-Raphson with $x_0=2$ to find the root correct to 3 decimal places, showing each iteration.", marks: 5 },
            { label: "c", prompt: "Solve $\\sin 2\\theta=\\frac{\\sqrt3}{2}$ for $0\\le\\theta\\le\\pi$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Intermediate value property", statement: "A continuous function changing sign on an interval has a root there." },
              { kind: "formula", name: "Newton-Raphson", statement: "$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate $f(2)$.", working: "f(2)=8-4-5=-1<0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate $f(3)$.", working: "f(3)=27-6-5=16>0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Differentiate.", working: "f'(x)=3x^2-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Iterate from $x_0=2$.", working: "x_1=2-\\frac{-1}{10}=2.1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Next iterations converge: $x_2\\approx2.0947$, $x_3\\approx2.0946$; root $\\approx2.095$.", working: "x\\approx2.095", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the root to 3 d.p. and note stability.", working: "x=2.095\\text{ (3 d.p.)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify: $f(2.095)\\approx9.19-4.19-5\\approx0$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Let $u=2\\theta$; solve $\\sin u=\\frac{\\sqrt3}{2}$ for $0\\le u\\le2\\pi$.", working: "u=\\frac{\\pi}{3}\\text{ or }\\frac{2\\pi}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert back: $\\theta=\\frac{u}{2}$, so $\\theta=\\frac{\\pi}{6}$ or $\\frac{\\pi}{3}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State both solutions within the interval.", working: "\\theta=\\frac{\\pi}{6}\\text{ or }\\frac{\\pi}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f(2)=-1<0$, $f(3)=16>0$ (b) $x\\approx2.095$ (c) $\\theta=\\frac{\\pi}{6}$ or $\\frac{\\pi}{3}$",
            commonErrors: ["Newton-Raphson arithmetic slips.", "Missing solutions of the trig equation in the restricted interval.", "Forgetting to halve the angle in (c)."],
            examinerNote: "In (b) accept 2.095; the exact root is irrational. In (c) both solutions lie in $[0,\\pi]$.",
          },
        },
      ],
    },
  ],
};
