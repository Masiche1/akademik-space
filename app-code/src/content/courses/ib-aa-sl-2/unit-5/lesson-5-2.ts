import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "aasl-u5-lesson-5-2",
  code: "5-2",
  title: "Further Differentiation",
  goal: "I CAN differentiate trigonometric, exponential and logarithmic functions using the chain, product and quotient rules, and use the second derivative to classify stationary points and find points of inflection.",
  standards: ["SL 5.6", "SL 5.7", "SL 5.8"],
  vocabulary: [
    { term: "Chain rule", definition: "For a composite $y=f(g(x))$: $\\dfrac{dy}{dx}=f'(g(x))\\,g'(x)$." },
    { term: "Product rule", definition: "$\\dfrac{d}{dx}(uv)=u\\dfrac{dv}{dx}+v\\dfrac{du}{dx}$." },
    { term: "Quotient rule", definition: "$\\dfrac{d}{dx}\\left(\\dfrac uv\\right)=\\dfrac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$." },
    { term: "Second derivative", definition: "The derivative of the derivative, $f''(x)$, which gives the rate of change of the gradient." },
    { term: "Point of inflection", definition: "A point where the concavity of the curve changes, so $f''(x)$ changes sign (and $f''(x)=0$ there)." },
    { term: "Concave up / down", definition: "A curve is concave up where $f''(x)>0$ and concave down where $f''(x)<0$." },
  ],
  concepts: [
    {
      id: "aasl-u5-rules",
      title: "Chain, product and quotient rules",
      skill: "Differentiate sin, cos, e^x and ln x, composites, products and quotients.",
      lesson: {
        sections: [
          {
            heading: "Standard derivatives",
            body: "$\\dfrac{d}{dx}\\sin x=\\cos x$, $\\dfrac{d}{dx}\\cos x=-\\sin x$, $\\dfrac{d}{dx}e^x=e^x$ and $\\dfrac{d}{dx}\\ln x=\\dfrac1x$ (with $x$ in radians). Combined with the chain rule: $\\dfrac{d}{dx}\\sin(ax+b)=a\\cos(ax+b)$, $\\dfrac{d}{dx}e^{kx}=ke^{kx}$ and $\\dfrac{d}{dx}\\ln(g(x))=\\dfrac{g'(x)}{g(x)}$.",
          },
          {
            heading: "Choosing the rule",
            body: "Use the **chain rule** for a function of a function (differentiate the outer function, keep the inner one, then multiply by the derivative of the inner function). Use the **product rule** when two functions of $x$ are multiplied, and the **quotient rule** when one is divided by another. Always look for simplification afterwards, such as a common factor $e^{2x}$.",
          },
        ],
        keyFormulas: [
          { name: "Chain rule", statement: "$\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\times\\dfrac{du}{dx}$" },
          { name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
          { name: "Quotient rule", statement: "$\\left(\\dfrac uv\\right)'=\\dfrac{vu'-uv'}{v^2}$" },
        ],
        workedExample: {
          problem: "Differentiate $y=x\\,e^{3x}$.",
          solution: "Let $u=x$, $v=e^{3x}$. Then $u'=1$, $v'=3e^{3x}$ and $\\frac{dy}{dx}=x(3e^{3x})+e^{3x}(1)=e^{3x}(3x+1)$.",
        },
      },
      questions: [
        {
          id: "aasl-u5-rules-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\sin(3x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3\\cos(3x)$" },
              { id: "b", text: "$3\\sin(3x)$" },
              { id: "c", text: "$3\\cos(3x)$" },
              { id: "d", text: "$\\cos(3x)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chain rule", statement: "$\\dfrac{d}{dx}\\sin(ax)=a\\cos(ax)$" },
            ],
            steps: [
              { reasoning: "The derivative of $\\sin u$ is $\\cos u$.", working: "\\cos(3x)", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the derivative of the inner function $3x$, which is $3$.", working: "3\\cos(3x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3\\cos(3x)$",
            commonErrors: ["Omitting the factor from the chain rule.", "Differentiating $\\sin$ to $-\\cos$."],
          },
        },
        {
          id: "aasl-u5-rules-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x^2e^{x}$. Find $f'(x)$, and hence find the exact value of $f'(1)$ in terms of $e$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $e$ in $f'(1)$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
            ],
            steps: [
              { reasoning: "Take $u=x^2$, $v=e^x$ so $u'=2x$, $v'=e^x$.", working: "f'(x)=x^2e^x+2xe^x", marks: 1, markCode: "M" },
              { reasoning: "Factorise.", working: "f'(x)=xe^x(x+2)", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=1$.", working: "f'(1)=1\\cdot e\\cdot3=3e", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=e^x(x^2+2x)$; $f'(1)=3e$",
            commonErrors: ["Differentiating each factor separately and multiplying: $2x\\cdot e^x$ only."],
          },
        },
        {
          id: "aasl-u5-rules-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=\\dfrac{\\ln x}{x}$ for $x>0$.\n\nFind $f'(x)$ and hence find $f'(1)$. Find also the value of $x$ for which $f'(x)=0$, giving your answer to 3 decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(1)$", answer: 1 },
              { label: "$x$ where $f'(x)=0$ (3 d.p.)", answer: 2.718, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quotient rule", statement: "$\\left(\\dfrac uv\\right)'=\\dfrac{vu'-uv'}{v^2}$" },
            ],
            steps: [
              { reasoning: "Take $u=\\ln x$, $v=x$, so $u'=\\frac1x$, $v'=1$.", working: "f'(x)=\\frac{x\\cdot\\frac1x-\\ln x\\cdot1}{x^2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "f'(x)=\\frac{1-\\ln x}{x^2}", marks: 1, markCode: "A" },
              { reasoning: "At $x=1$, $\\ln1=0$.", working: "f'(1)=\\frac{1-0}{1}=1", marks: 1, markCode: "A" },
              { reasoning: "A fraction is zero when the numerator is zero.", working: "1-\\ln x=0\\Rightarrow x=e", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=\\dfrac{1-\\ln x}{x^2}$; $f'(1)=1$; $x=e\\approx2.718$",
            commonErrors: ["Reversing the order in the numerator of the quotient rule.", "Differentiating $\\ln x$ to $x$."],
          },
        },
        {
          id: "aasl-u5-rules-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 10,
          stem: "Let $f(x)=e^{2x}\\sin x$ for $0\\le x\\le\\pi$.",
          parts: [
            { label: "a", prompt: "Show that $f'(x)=e^{2x}(2\\sin x+\\cos x)$.", marks: 3 },
            { label: "b", prompt: "Find the exact gradient of the graph of $f$ at $x=\\dfrac\\pi2$.", marks: 2 },
            { label: "c", prompt: "Find the exact value of $f''(0)$.", marks: 3 },
            { label: "d", prompt: "Hence write down the equation of the tangent to the graph at $x=0$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Gradient at $x=\\frac\\pi2$ (coefficient of $e^\\pi$)", answer: 2 },
              { label: "(c) $f''(0)$", answer: 4 },
              { label: "(d) Gradient of tangent at $x=0$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
              { kind: "theorem", name: "Chain rule", statement: "$\\dfrac{d}{dx}e^{2x}=2e^{2x}$" },
            ],
            steps: [
              { part: "a", reasoning: "Take $u=e^{2x}$, $v=\\sin x$, with $u'=2e^{2x}$ and $v'=\\cos x$.", working: "f'(x)=e^{2x}\\cos x+2e^{2x}\\sin x", marks: 2, markCode: "M" },
              { part: "a", reasoning: "Factorise $e^{2x}$ (AG).", working: "f'(x)=e^{2x}(2\\sin x+\\cos x)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=\\frac\\pi2$ where $\\sin=1$, $\\cos=0$.", working: "f'\\left(\\tfrac\\pi2\\right)=e^{\\pi}(2+0)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=2e^{\\pi}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate $f'$ using the product rule with $u=e^{2x}$, $v=2\\sin x+\\cos x$.", working: "f''(x)=2e^{2x}(2\\sin x+\\cos x)+e^{2x}(2\\cos x-\\sin x)", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Substitute $x=0$: $\\sin0=0$, $\\cos0=1$.", working: "f''(0)=2(1)(1)+1(2)=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "At $x=0$: $f(0)=e^0\\sin0=0$ and $f'(0)=1(0+1)=1$.", working: "f(0)=0,\\quad f'(0)=1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write the tangent through the origin.", working: "y=x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $2e^\\pi$ (c) $4$ (d) $y=x$",
            commonErrors: ["Forgetting the chain rule factor $2$ when differentiating $e^{2x}$.", "Working in degrees instead of radians."],
            examinerNote: "Part (c) can also be obtained by expanding first: $f''(x)=e^{2x}(3\\sin x+4\\cos x)$, giving $4$ at $x=0$.",
          },
        },
        {
          id: "aasl-u5-rules-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\cos(4x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\cos(4x)$" },
              { id: "b", text: "$4\\sin(4x)$" },
              { id: "c", text: "$-4\\sin(4x)$" },
              { id: "d", text: "$-\\sin(4x)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chain rule", statement: "$\\dfrac{d}{dx}\\cos(ax)=-a\\sin(ax)$" },
            ],
            steps: [
              { reasoning: "The derivative of $\\cos u$ is $-\\sin u$.", working: "-\\sin(4x)", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the derivative of the inner function $4x$.", working: "-4\\sin(4x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=-4\\sin(4x)$",
            commonErrors: ["Dropping the negative sign from $\\frac{d}{dx}\\cos x=-\\sin x$.", "Omitting the chain rule factor $4$."],
          },
        },
        {
          id: "aasl-u5-rules-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=e^{5x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25e^{5x}$" },
              { id: "b", text: "$5e^{5x}$" },
              { id: "c", text: "$e^{5x}$" },
              { id: "d", text: "$5xe^{5x}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chain rule", statement: "$\\dfrac{d}{dx}e^{kx}=ke^{kx}$" },
            ],
            steps: [
              { reasoning: "The derivative of $e^{u}$ is $e^{u}$.", working: "e^{5x}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the derivative of the inner function $5x$.", working: "5e^{5x}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=5e^{5x}$",
            commonErrors: ["Omitting the factor $5$ from the chain rule.", "Differentiating $e^{5x}$ to $5xe^{5x-1}$ as if it were a power of $x$."],
          },
        },
        {
          id: "aasl-u5-rules-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=\\ln(x^2)$ for $x>0$. Find $f'(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{1}{2x}$" },
              { id: "b", text: "$\\dfrac{1}{x}$" },
              { id: "c", text: "$2x$" },
              { id: "d", text: "$\\dfrac{2}{x}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chain rule for logarithms", statement: "$\\dfrac{d}{dx}\\ln(g(x))=\\dfrac{g'(x)}{g(x)}$" },
            ],
            steps: [
              { reasoning: "Apply the chain rule with $g(x)=x^2$, $g'(x)=2x$.", working: "\\frac{2x}{x^2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{2}{x}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=\\dfrac{2}{x}$",
            commonErrors: ["Differentiating $\\ln(x^2)$ to $\\frac{1}{x^2}\\cdot 2x$ incorrectly or forgetting to simplify.", "Writing $\\ln(x^2)=2\\ln x$ is valid but must then give $\\frac{2}{x}$."],
          },
        },
        {
          id: "aasl-u5-rules-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=x^2\\sin x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x\\sin x-x^2\\cos x$" },
              { id: "b", text: "$\\sin x+x^2\\cos x$" },
              { id: "c", text: "$2x\\cos x$" },
              { id: "d", text: "$2x\\sin x+x^2\\cos x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
            ],
            steps: [
              { reasoning: "Take $u=x^2$, $v=\\sin x$ so $u'=2x$, $v'=\\cos x$.", working: "x^2\\cos x+2x\\sin x", marks: 1, markCode: "M" },
              { reasoning: "This is already in simplest form; the order of terms does not matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=2x\\sin x+x^2\\cos x$",
            commonErrors: ["Differentiating each factor and multiplying: $2x\\cos x$ only.", "Wrong sign on the $\\cos x$ term."],
          },
        },
        {
          id: "aasl-u5-rules-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=e^x\\cos x$. Find $f'(x)$ and hence find the exact value of $f'(0)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(0)$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
            ],
            steps: [
              { reasoning: "Take $u=e^x$, $v=\\cos x$ so $u'=e^x$, $v'=-\\sin x$.", working: "f'(x)=e^x\\cos x-e^x\\sin x", marks: 1, markCode: "M" },
              { reasoning: "Factorise $e^x$.", working: "f'(x)=e^x(\\cos x-\\sin x)", marks: 1, markCode: "A" },
              { reasoning: "At $x=0$: $\\cos0=1$, $\\sin0=0$.", working: "f'(0)=1(1-0)=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=e^x(\\cos x-\\sin x)$; $f'(0)=1$",
            commonErrors: ["Using $+\\sin x$ for the derivative of $\\cos x$.", "Forgetting that $e^0=1$."],
          },
        },
        {
          id: "aasl-u5-rules-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x\\ln x$ for $x>0$. Find $f'(x)$ and hence find the exact value of $f'(e)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(e)$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
            ],
            steps: [
              { reasoning: "Take $u=x$, $v=\\ln x$ so $u'=1$, $v'=\\frac1x$.", working: "f'(x)=x\\cdot\\frac1x+\\ln x\\cdot1", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "f'(x)=1+\\ln x", marks: 1, markCode: "A" },
              { reasoning: "Use $\\ln e=1$.", working: "f'(e)=1+1=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=1+\\ln x$; $f'(e)=2$",
            commonErrors: ["Differentiating $\\ln x$ to $x$.", "Evaluating $\\ln e$ as $0$ instead of $1$."],
          },
        },
        {
          id: "aasl-u5-rules-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Show, using the product rule, that the derivative of $f(x)=x\\cos x$ is $f'(x)=\\cos x-x\\sin x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
            ],
            steps: [
              { reasoning: "Identify $u=x$, $v=\\cos x$ with $u'=1$, $v'=-\\sin x$.", working: "u=x,\\ v=\\cos x,\\ u'=1,\\ v'=-\\sin x", marks: 1, markCode: "M" },
              { reasoning: "Apply the product rule.", working: "f'(x)=x(-\\sin x)+\\cos x(1)", marks: 1, markCode: "M" },
              { reasoning: "Expand.", working: "f'(x)=-x\\sin x+\\cos x", marks: 1, markCode: "A" },
              { reasoning: "Rearrange into the required form. (AG)", working: "f'(x)=\\cos x-x\\sin x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=\\cos x-x\\sin x$",
            commonErrors: ["Using $+\\sin x$ for the derivative of $\\cos x$.", "Multiplying the derivatives: $1\\times(-\\sin x)$."],
          },
        },
        {
          id: "aasl-u5-rules-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Show, using the product rule, that the derivative of $f(x)=x^2e^x$ is $f'(x)=e^x(x^2+2x)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
            ],
            steps: [
              { reasoning: "Identify $u=x^2$, $v=e^x$ with $u'=2x$, $v'=e^x$.", working: "u=x^2,\\ v=e^x,\\ u'=2x,\\ v'=e^x", marks: 1, markCode: "M" },
              { reasoning: "Apply the product rule.", working: "f'(x)=x^2e^x+2xe^x", marks: 1, markCode: "A" },
              { reasoning: "Factorise $e^x$. (AG)", working: "f'(x)=e^x(x^2+2x)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=e^x(x^2+2x)$",
            commonErrors: ["Differentiating each factor and multiplying: $2x\\cdot e^x$ only.", "Forgetting to factorise in the final line."],
          },
        },
        {
          id: "aasl-u5-rules-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Let $f(x)=e^x\\cos x$ for $-\\pi\\le x\\le\\pi$.",
          parts: [
            { label: "a", prompt: "Show that $f'(x)=e^x(\\cos x-\\sin x)$.", marks: 3 },
            { label: "b", prompt: "Hence show that the gradient of the graph of $f$ at $x=\\dfrac\\pi4$ is zero.", marks: 2 },
            { label: "c", prompt: "Find $f''(x)$.", marks: 3 },
            { label: "d", prompt: "Write down the equation of the tangent to the graph of $f$ at $x=0$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(d) $y$-intercept of the tangent", answer: 1 },
              { label: "(d) Gradient of the tangent", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
              { kind: "theorem", name: "Standard derivatives", statement: "$\\frac{d}{dx}\\cos x=-\\sin x$, $\\frac{d}{dx}e^x=e^x$." },
            ],
            steps: [
              { part: "a", reasoning: "Take $u=e^x$, $v=\\cos x$ with $u'=e^x$, $v'=-\\sin x$.", working: "f'(x)=e^x\\cos x-e^x\\sin x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both product-rule terms present with correct signs.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Factorise $e^x$. (AG)", working: "f'(x)=e^x(\\cos x-\\sin x)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At $x=\\frac\\pi4$, $\\cos x=\\sin x=\\frac{\\sqrt2}{2}$, so the bracket is zero.", working: "\\cos\\tfrac\\pi4-\\sin\\tfrac\\pi4=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hence $f'\\left(\\tfrac\\pi4\\right)=0$. (AG)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate $f'$ using the product rule with $u=e^x$, $v=\\cos x-\\sin x$.", working: "f''(x)=e^x(\\cos x-\\sin x)+e^x(-\\sin x-\\cos x)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Expand the second factor's derivative.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Simplify: the $\\cos x$ and $-\\sin x$ terms cancel in pairs.", working: "f''(x)=-2e^x\\sin x", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate $f(0)=1$ and $f'(0)=1(1-0)=1$.", working: "f(0)=1,\\quad f'(0)=1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write the tangent through $(0,1)$ with gradient $1$.", working: "y-1=1(x-0)\\Rightarrow y=x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) shown (c) $f''(x)=-2e^x\\sin x$ (d) $y=x+1$",
            commonErrors: ["Sign error on $\\frac{d}{dx}\\sin x$ when differentiating $f'$.", "Forgetting the factor $e^x$ when differentiating $f'$ the second time."],
          },
        },
        {
          id: "aasl-u5-rules-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=\\ln(3x+1)$ for $x>-\\frac13$. Find $f'(x)$ and the exact value of $f'(1)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(1)$", answer: 0.75 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chain rule for logarithms", statement: "$\\dfrac{d}{dx}\\ln(g(x))=\\dfrac{g'(x)}{g(x)}$" },
            ],
            steps: [
              { reasoning: "Apply the chain rule with $g(x)=3x+1$, $g'(x)=3$.", working: "f'(x)=\\frac{3}{3x+1}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=1$.", working: "f'(1)=\\frac{3}{4}", marks: 1, markCode: "A" },
              { reasoning: "Give the exact value.", working: "f'(1)=\\frac34=0.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=\\dfrac{3}{3x+1}$; $f'(1)=\\dfrac34$",
            commonErrors: ["Writing $f'(x)=\\frac{1}{3x+1}$ (forgetting $g'(x)=3$).", "Differentiating $\\ln(3x+1)$ to $\\frac{1}{x}$ by analogy with $\\ln x$."],
          },
        },
        {
          id: "aasl-u5-rules-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\cos(3x-1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\sin(3x-1)$" },
              { id: "b", text: "$3\\cos(3x-1)$" },
              { id: "c", text: "$-\\sin(3x-1)$" },
              { id: "d", text: "$-3\\sin(3x-1)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chain rule", statement: "$\\dfrac{d}{dx}\\cos(ax+b)=-a\\sin(ax+b)$" },
            ],
            steps: [
              { reasoning: "The derivative of $\\cos u$ is $-\\sin u$.", working: "-\\sin(3x-1)", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the derivative of the inner function $3x-1$, which is $3$.", working: "-3\\sin(3x-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=-3\\sin(3x-1)$",
            commonErrors: ["Dropping the negative sign.", "Forgetting the chain rule factor $3$."],
          },
        },
        {
          id: "aasl-u5-rules-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=\\sin x\\cos x$. Find $f'\\left(\\dfrac\\pi6\\right)$, giving your answer exactly.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'\\left(\\frac\\pi6\\right)$", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
              { kind: "property", name: "Double angle", statement: "$\\cos^2x-\\sin^2x=\\cos 2x$" },
            ],
            steps: [
              { reasoning: "Product rule with $u=\\sin x$, $v=\\cos x$.", working: "f'(x)=\\sin x(-\\sin x)+\\cos x(\\cos x)", marks: 1, markCode: "M" },
              { reasoning: "Simplify using the double-angle identity.", working: "f'(x)=\\cos^2x-\\sin^2x=\\cos 2x", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $x=\\frac\\pi6$: $\\cos\\frac\\pi3=\\frac12$.", working: "f'\\left(\\tfrac\\pi6\\right)=\\frac12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'\\left(\\frac\\pi6\\right)=\\frac12$",
            commonErrors: ["Using $\\sin x\\cos x=\\frac12\\sin 2x$ and differentiating incorrectly.", "Evaluating in degrees."],
          },
        },
      ],
    },
    {
      id: "aasl-u5-second-derivative",
      title: "Stationary points and concavity",
      skill: "Use the first and second derivatives to find and classify stationary points and points of inflection.",
      lesson: {
        sections: [
          {
            heading: "Classifying stationary points",
            body: "Stationary points occur where $f'(x)=0$. If $f''(x)>0$ there the point is a local **minimum**; if $f''(x)<0$ it is a local **maximum**. If $f''(x)=0$ the test is inconclusive and you must examine the sign of $f'$ either side of the point (a **sign test**).",
          },
          {
            heading: "Concavity and inflection",
            body: "The curve is concave up where $f''>0$ and concave down where $f''<0$. A **point of inflection** is where the concavity changes: $f''(x)=0$ **and** $f''$ changes sign. Having $f''(x)=0$ alone is not enough: $y=x^4$ has $f''(0)=0$ but no inflection. A point of inflection with $f'(x)=0$ is a stationary point of inflection.",
          },
        ],
        keyFormulas: [
          { name: "Minimum", statement: "$f'(a)=0$ and $f''(a)>0$" },
          { name: "Maximum", statement: "$f'(a)=0$ and $f''(a)<0$" },
          { name: "Inflection", statement: "$f''(a)=0$ with a sign change of $f''$" },
        ],
        workedExample: {
          problem: "Classify the stationary point of $f(x)=x^2-4x$.",
          solution: "$f'(x)=2x-4=0$ gives $x=2$. $f''(x)=2>0$, so $(2,-4)$ is a local minimum.",
        },
      },
      questions: [
        {
          id: "aasl-u5-second-derivative-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "At a point on a curve $f'(a)=0$ and $f''(a)=-3$. What is the nature of the point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Local maximum" },
              { id: "b", text: "Point of inflection" },
              { id: "c", text: "Local minimum" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "If $f'(a)=0$ and $f''(a)<0$ then $f$ has a local maximum at $a$." },
            ],
            steps: [
              { reasoning: "A negative second derivative means the curve is concave down at a stationary point.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Local maximum",
            commonErrors: ["Thinking a negative second derivative indicates a minimum."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The function $f$ is defined by $f(x)=x^3-3x^2-9x$.\n\nFind the $x$-coordinates of the stationary points and use the second derivative to determine the nature of each. Enter the $x$-coordinates (smaller first) and the value of $f''$ at the larger one.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller $x$", answer: -1 },
              { label: "Larger $x$", answer: 3 },
              { label: "$f''$ at the larger $x$", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "$f'(a)=0$: $f''(a)>0$ gives a local minimum, $f''(a)<0$ a local maximum." },
            ],
            steps: [
              { reasoning: "Differentiate and set equal to zero.", working: "f'(x)=3x^2-6x-9=3(x-3)(x+1)=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=-1,\\ x=3", marks: 1, markCode: "A" },
              { reasoning: "Second derivative.", working: "f''(x)=6x-6", marks: 1, markCode: "A" },
              { reasoning: "$f''(-1)=-12<0$ so a local maximum at $x=-1$; $f''(3)=12>0$ so a local minimum at $x=3$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x=-1$ (local maximum) and $x=3$ (local minimum), with $f''(3)=12$",
            commonErrors: ["Mixing up which sign gives the maximum.", "Substituting stationary points into $f'$ rather than $f''$."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "The function $f$ is defined by $f(x)=x^4-4x^3$.\n\nFind the $x$-coordinates of the two points where $f''(x)=0$. Justify that exactly one of them is a point of inflection that is also a stationary point, and find the $x$-coordinate of the point of inflection that is not stationary.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller $x$ with $f''=0$", answer: 0 },
              { label: "Larger $x$ with $f''=0$", answer: 2 },
              { label: "$x$ of the non-stationary inflection", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point of inflection", statement: "A point where $f''(x)=0$ and $f''$ changes sign." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "f'(x)=4x^3-12x^2,\\quad f''(x)=12x^2-24x=12x(x-2)", marks: 1, markCode: "A" },
              { reasoning: "Solve $f''(x)=0$.", working: "x=0,\\ x=2", marks: 1, markCode: "A" },
              { reasoning: "$f''$ is a positive-leading quadratic, so it is positive for $x<0$, negative for $0<x<2$ and positive for $x>2$. It changes sign at both, so both are points of inflection.", marks: 1, markCode: "R" },
              { reasoning: "At $x=0$: $f'(0)=0$ so it is a stationary point of inflection.", marks: 1, markCode: "A" },
              { reasoning: "At $x=2$: $f'(2)=32-48=-16\\ne0$, so it is a non-stationary point of inflection.", working: "x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f''=0$ at $x=0$ (stationary inflection) and $x=2$ (non-stationary inflection)",
            commonErrors: ["Assuming $f''=0$ always gives an inflection without checking the sign change.", "Believing every inflection point is stationary."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Let $f(x)=x\\,e^{-x}$ for $x\\ge0$.",
          parts: [
            { label: "a", prompt: "Show that $f'(x)=e^{-x}(1-x)$.", marks: 2 },
            { label: "b", prompt: "Find the coordinates of the stationary point, giving the $y$-coordinate to 3 significant figures, and show that it is a maximum.", marks: 4 },
            { label: "c", prompt: "Find $f''(x)$ and the exact $x$-coordinate of the point of inflection.", marks: 3 },
            { label: "d", prompt: "Write down the interval on which $f$ is concave up.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$-coordinate of maximum", answer: 1 },
              { label: "(b) $y$-coordinate of maximum", answer: 0.368, tolerance: 0.001 },
              { label: "(c) $x$-coordinate of inflection", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
              { kind: "theorem", name: "Second derivative test", statement: "At a stationary point, $f''<0$ gives a maximum." },
              { kind: "definition", name: "Inflection", statement: "$f''=0$ with sign change." },
            ],
            steps: [
              { part: "a", reasoning: "With $u=x$, $v=e^{-x}$: $v'=-e^{-x}$.", working: "f'(x)=x(-e^{-x})+e^{-x}(1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise (AG).", working: "f'(x)=e^{-x}(1-x)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$e^{-x}>0$ always, so $f'(x)=0$ only when $1-x=0$.", working: "x=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate $f(1)$.", working: "f(1)=e^{-1}=0.368", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate $f''(1)$ using part (c): $f''(1)=e^{-1}(1-2)<0$.", working: "f''(1)=-e^{-1}<0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude.", working: "(1,\\,0.368)\\text{ is a local maximum}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Differentiate $f'$ with the product rule ($u=e^{-x}$, $v=1-x$).", working: "f''(x)=-e^{-x}(1-x)+e^{-x}(-1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "f''(x)=e^{-x}(x-2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $f''=0$; the sign changes from negative to positive.", working: "x=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$f''>0$ for $x>2$.", working: "x>2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) maximum at $(1,\\,0.368)$ (c) $f''(x)=e^{-x}(x-2)$, inflection at $x=2$ (d) $x>2$",
            commonErrors: ["Failing to apply the chain rule to $e^{-x}$ so that the sign is lost.", "Stating a minimum because $f''$ has a factor $e^{-x}$."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "At a point on a curve, $f'(a)=0$ and $f''(a)=7$. What is the nature of the point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Local maximum" },
              { id: "b", text: "Local minimum" },
              { id: "c", text: "Point of inflection" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "If $f'(a)=0$ and $f''(a)>0$ then $f$ has a local minimum at $a$." },
            ],
            steps: [
              { reasoning: "A positive second derivative at a stationary point means the curve is concave up.", marks: 1, markCode: "A" },
              { reasoning: "Concave up at a stationary point gives a local minimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Local minimum",
            commonErrors: ["Associating a positive second derivative with a maximum."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the function $f(x)=x^3-3x^2$, the graph is concave up for which values of $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<1$" },
              { id: "b", text: "All real $x$" },
              { id: "c", text: "$x>0$" },
              { id: "d", text: "$x>1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Concavity", statement: "The curve is concave up where $f''(x)>0$." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "f''(x)=6x-6", marks: 1, markCode: "M" },
              { reasoning: "Solve $f''(x)>0$.", working: "6x-6>0\\Rightarrow x>1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Concave up for $x>1$",
            commonErrors: ["Solving $f''(x)=0$ and reporting $x=1$ as an interval.", "Confusing concave up with $f'>0$."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which condition is sufficient to guarantee that a point on a curve is a point of inflection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f'(a)=0$ and $f''(a)=0$" },
              { id: "b", text: "$f'''(a)\\neq0$" },
              { id: "c", text: "$f''(a)=0$" },
              { id: "d", text: "$f''(a)=0$ and $f''$ changes sign at $a$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point of inflection", statement: "A point where the concavity changes: $f''(a)=0$ with a sign change of $f''$." },
            ],
            steps: [
              { reasoning: "A point of inflection requires a change of concavity, i.e. a sign change of $f''$.", marks: 1, markCode: "A" },
              { reasoning: "$f''(a)=0$ alone is not sufficient, as $y=x^4$ shows at the origin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $f''(a)=0$ and $f''$ changes sign at $a$",
            commonErrors: ["Believing $f''(a)=0$ is enough without checking the sign change."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^3-6x^2+9x$.\n\nFind the $x$-coordinates of the stationary points and use the second derivative to determine the nature of each.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller $x$", answer: 1 },
              { label: "Larger $x$", answer: 3 },
              { label: "$f''$ at the smaller $x$", answer: -6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "$f'(a)=0$: $f''(a)>0$ gives a local minimum, $f''(a)<0$ a local maximum." },
            ],
            steps: [
              { reasoning: "Differentiate and solve $f'(x)=0$.", working: "f'(x)=3x^2-12x+9=3(x-1)(x-3)=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=1,\\ x=3", marks: 1, markCode: "A" },
              { reasoning: "Differentiate again and evaluate at $x=1$.", working: "f''(x)=6x-12\\Rightarrow f''(1)=-6<0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ (local maximum, since $f''(1)=-6<0$) and $x=3$ (local minimum, since $f''(3)=6>0$)",
            commonErrors: ["Mixing up which sign gives the maximum.", "Substituting into $f'$ instead of $f''$ for the classification."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=2x^3-3x^2-12x+5$.\n\nFind the $x$-coordinate of the local maximum and the value of $f''$ there, using the second derivative test.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$ of the local maximum", answer: -1 },
              { label: "$f''$ at the local maximum", answer: -12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "At a stationary point, $f''<0$ gives a local maximum." },
            ],
            steps: [
              { reasoning: "Differentiate and solve $f'(x)=0$.", working: "f'(x)=6x^2-6x-12=6(x-2)(x+1)=0", marks: 1, markCode: "M" },
              { reasoning: "The stationary points are $x=-1$ and $x=2$; test each with $f''(x)=6x-6$.", working: "f''(-1)=-12<0,\\quad f''(2)=6>0", marks: 1, markCode: "A" },
              { reasoning: "The maximum is at $x=-1$ where $f''=-12$.", working: "x=-1,\\ f''(-1)=-12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Local maximum at $x=-1$ with $f''(-1)=-12$",
            commonErrors: ["Reporting $x=2$ (the minimum) as the maximum.", "Forgetting to check both stationary points."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^4-2x^3$.\n\nFind the larger value of $x$ for which $f'(x)=0$, and find the value of $f''$ at this point.",
          response: {
            type: "numeric",
            parts: [
              { label: "Larger value of $x$", answer: 1.5 },
              { label: "$f''$ at this point", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "At a stationary point, $f''>0$ gives a local minimum." },
            ],
            steps: [
              { reasoning: "Differentiate and solve $f'(x)=0$.", working: "f'(x)=4x^3-6x^2=2x^2(2x-3)=0", marks: 1, markCode: "M" },
              { reasoning: "The solutions are $x=0$ and $x=\\frac32$; the larger is $\\frac32$.", working: "x=0\\ \\text{or}\\ x=\\frac32", marks: 1, markCode: "A" },
              { reasoning: "Evaluate $f''$ there: $f''(x)=12x^2-12x$.", working: "f''\\left(\\tfrac32\\right)=12\\left(\\tfrac94\\right)-18=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Larger $x=\\frac32$; $f''\\left(\\frac32\\right)=9>0$, so a local minimum",
            commonErrors: ["Reporting $x=0$ as the larger solution.", "Differentiating $f'$ incorrectly."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=x^3-3x$. Show that the graph of $f$ has a point of inflection at $x=0$, and state whether it is a stationary point of inflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point of inflection", statement: "A point where $f''(x)=0$ and $f''$ changes sign." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "f'(x)=3x^2-3,\\quad f''(x)=6x", marks: 1, markCode: "M" },
              { reasoning: "$f''(0)=0$ and $f''$ is negative for $x<0$, positive for $x>0$, so the sign changes.", marks: 1, markCode: "A" },
              { reasoning: "Check stationarity.", working: "f'(0)=-3\\neq0", marks: 1, markCode: "A" },
              { reasoning: "Conclude: a non-stationary point of inflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point of inflection at $x=0$; it is not stationary since $f'(0)=-3\\neq0$",
            commonErrors: ["Claiming it is stationary because $f''(0)=0$.", "Not checking the sign change of $f''$."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why the curve $y=x^4$ does not have a point of inflection at the origin, even though $f''(0)=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point of inflection", statement: "A point where the concavity changes, so $f''$ must change sign." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "f'(x)=4x^3,\\quad f''(x)=12x^2", marks: 1, markCode: "M" },
              { reasoning: "$f''(0)=0$, but $f''(x)=12x^2\\ge0$ on both sides of $0$.", marks: 1, markCode: "A" },
              { reasoning: "Since $f''$ does not change sign, the concavity does not change, so there is no point of inflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f''=12x^2$ is non-negative on both sides of $0$, so there is no sign change and hence no point of inflection.",
            commonErrors: ["Assuming $f''(0)=0$ automatically gives an inflection."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Let $f(x)=xe^x$ for all real $x$.",
          parts: [
            { label: "a", prompt: "Show that $f'(x)=e^x(x+1)$.", marks: 2 },
            { label: "b", prompt: "Find the coordinates of the stationary point of $f$, giving the $y$-coordinate to 3 significant figures, and show that it is a minimum.", marks: 3 },
            { label: "c", prompt: "Find $f''(x)$.", marks: 2 },
            { label: "d", prompt: "Find the exact $x$-coordinate of the point of inflection of $f$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$-coordinate of the stationary point", answer: -1 },
              { label: "(b) $y$-coordinate of the stationary point", answer: -0.368, tolerance: 0.001 },
              { label: "(d) $x$-coordinate of inflection", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=uv'+vu'$" },
              { kind: "theorem", name: "Second derivative test", statement: "At a stationary point, $f''>0$ gives a minimum." },
              { kind: "definition", name: "Inflection", statement: "$f''=0$ with a sign change." },
            ],
            steps: [
              { part: "a", reasoning: "Product rule with $u=x$, $v=e^x$.", working: "f'(x)=x e^x+e^x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise. (AG)", working: "f'(x)=e^x(x+1)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$e^x>0$ always, so $f'(x)=0$ only when $x+1=0$.", working: "x=-1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate $f(-1)$.", working: "f(-1)=-e^{-1}=-0.368", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Since $f''(-1)=0$ is inconclusive, use a sign test on $f'$: $f'<0$ for $x<-1$ and $f'>0$ for $x>-1$, so $f$ decreases then increases — a minimum.", working: "f'(x)<0\\ \\text{for}\\ x<-1,\\ f'(x)>0\\ \\text{for}\\ x>-1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate $f'=e^x(x+1)$ using the product rule.", working: "f''(x)=e^x(x+1)+e^x", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "f''(x)=e^x(x+2)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $f''(x)=0$; since $e^x>0$, $x+2=0$.", working: "x=-2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$f''$ changes from negative to positive at $x=-2$, confirming an inflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) minimum at $(-1,\\,-0.368)$ (c) $f''(x)=e^x(x+2)$ (d) $x=-2$",
            commonErrors: ["Claiming a minimum from $f''(-1)=0$ without a sign test.", "Forgetting the chain rule when differentiating $e^x$ factors."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^3-3x^2-9x$.\n\nFind the value of $x$ for which $f''(x)=0$, and find $f''(4)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$ where $f''(x)=0$", answer: 1 },
              { label: "$f''(4)$", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Second derivative", statement: "$f''$ is the derivative of $f'$." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "f'(x)=3x^2-6x-9,\\quad f''(x)=6x-6", marks: 1, markCode: "A" },
              { reasoning: "Solve $f''(x)=0$.", working: "6x-6=0\\Rightarrow x=1", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=4$.", working: "f''(4)=24-6=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$; $f''(4)=18$",
            commonErrors: ["Solving $f'(x)=0$ instead of $f''(x)=0$."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "For the function $f(x)=x^3-3x$, which statement about the point where $x=0$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A local maximum" },
              { id: "b", text: "Not a point of inflection" },
              { id: "c", text: "A stationary point of inflection" },
              { id: "d", text: "A non-stationary point of inflection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point of inflection", statement: "$f''=0$ with a sign change; stationary requires $f'=0$." },
            ],
            steps: [
              { reasoning: "$f''(x)=6x$ changes sign at $x=0$, so it is a point of inflection.", marks: 1, markCode: "A" },
              { reasoning: "$f'(0)=-3\\neq0$, so it is not stationary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A non-stationary point of inflection",
            commonErrors: ["Assuming every inflection point is stationary."],
          },
        },
        {
          id: "aasl-u5-second-derivative-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^4-8x^2+3$.\n\nFind the $x$-coordinate of the local maximum and the value of $f''(2)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of the local maximum", answer: 0 },
              { label: "$f''(2)$", answer: 32 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Second derivative test", statement: "At a stationary point, $f''<0$ gives a maximum and $f''>0$ a minimum." },
            ],
            steps: [
              { reasoning: "Differentiate twice.", working: "f'(x)=4x^3-16x,\\quad f''(x)=12x^2-16", marks: 1, markCode: "A" },
              { reasoning: "Stationary points satisfy $4x(x^2-4)=0$, so $x=0,\\pm2$; $f''(0)=-16<0$ gives the maximum at $x=0$ and $f''(2)=48-16=32>0$ a minimum.", working: "x=0,\\ \\pm2;\\quad f''(0)=-16<0,\\quad f''(2)=32", marks: 1, markCode: "A" },
              { reasoning: "Report the required values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Local maximum at $x=0$; $f''(2)=32$",
            commonErrors: ["Reporting $x=2$ as the maximum — it is a minimum since $f''(2)>0$."],
          },
        },
      ],
    },
  ],
};
