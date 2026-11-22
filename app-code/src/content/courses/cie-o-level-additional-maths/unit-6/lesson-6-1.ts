import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olam-u6-lesson-6-1",
  code: "4-2",
  title: "Differentiation",
  goal: "I CAN differentiate polynomial functions and find gradients.",
  standards: ["4037: differentiation"],
  vocabulary: [
    { term: "Derivative", definition: "$\\frac{dy}{dx}$ — rate of change / gradient." },
    { term: "Power rule", definition: "$\\frac{d}{dx}x^n=nx^{n-1}$." },
    { term: "Stationary point", definition: "Where $\\frac{dy}{dx}=0$." },
    { term: "Second derivative", definition: "$\\frac{d^2y}{dx^2}$ — rate of change of gradient." },
  ],
  concepts: [
    {
      id: "olam-u6-s1-rules",
      title: "Differentiation rules",
      skill: "Differentiate polynomials at O Level.",
      lesson: {
        sections: [
          { heading: "The power rule", body: "Differentiation measures the instantaneous rate of change — the gradient of the tangent to the curve at each point. The power rule says: to differentiate $x^n$, bring the power down as a multiplier and reduce the power by 1: $\\frac{d}{dx}x^n=nx^{n-1}$. It works for any real exponent, including fractions and negatives — e.g. $\\frac{d}{dx}x^{1/2}=\\frac12x^{-1/2}=\\frac{1}{2\\sqrt{x}}$ and $\\frac{d}{dx}x^{-2}=-2x^{-3}$. Constants differentiate to zero, and you differentiate sums term by term." },
          { heading: "What the derivative means", body: "$\\frac{dy}{dx}$ evaluated at a point gives the gradient of the curve there — the same as the gradient of the tangent line. Where $\\frac{dy}{dx}=0$ the curve has a horizontal tangent: a maximum, minimum or point of inflection (stationary point). The derivative also gives velocity from displacement and rate of change in applied problems, which connects directly to kinematics later in this unit." },
        ],
        keyFormulas: [
          { name: "Power rule", statement: "$\\frac{d}{dx}x^n=nx^{n-1}$" },
          { name: "Stationary", statement: "$\\frac{dy}{dx}=0$ at stationary points" },
        ],
        workedExample: { problem: "Differentiate $y=3x^4-2x+7$.", solution: "Term by term: $\\frac{d}{dx}3x^4=12x^3$; $\\frac{d}{dx}(-2x)=-2$; $\\frac{d}{dx}7=0$. So $\\frac{dy}{dx}=12x^3-2$. The constant vanishes because its rate of change is zero." },
      },
      questions: [
        {
          id: "olam-u6-s1-ru-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(x^3)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{x^4}{4}$" },
            { id: "b", text: "$3x^3$" },
            { id: "c", text: "$x^2$" },
            { id: "d", text: "$3x^2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "$nx^{n-1}$." }], steps: [{ reasoning: "$3x^{3-1}=3x^2$.", marks: 1, markCode: "A" }], finalAnswer: "$3x^2$" },
        },
        {
          id: "olam-u6-s1-ru-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Differentiate $y=5x^2-3x+1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Term by term." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=10x-3$ (constant 1 → 0).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10x-3$" },
        },
        {
          id: "olam-u6-s1-ru-q3", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=x^{-2}+4x^{\\frac12}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Fractional/negative powers." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-2x^{-3}+4\\times\\frac12 x^{-\\frac12}$.", marks: 1, markCode: "M" },
            { reasoning: "$=-\\frac{2}{x^3}+\\frac{2}{\\sqrt{x}}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{2}{x^3}+\\frac{2}{\\sqrt{x}}$" },
        },
        {
          id: "olam-u6-s1-ru-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $y=x^3-6x^2+9x$, find $\\frac{dy}{dx}$ and the $x$-coordinates of stationary points.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Derivative + stationary", statement: "Set $\\frac{dy}{dx}=0$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2-12x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Set $=0$: $3(x^2-4x+3)=0$ → $3(x-1)(x-3)=0$ → $x=1,3$.", marks: 1, markCode: "M" },
            { reasoning: "Both are stationary point x-coordinates.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{dy}{dx}=3x^2-12x+9$; $x=1$ or $x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1$ or $x=3$" },
        },
        {
          id: "olam-u6-s1-ru-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(7x^3)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$21x^2$" },
            { id: "b", text: "$21x^3$" },
            { id: "c", text: "$7x^2$" },
            { id: "d", text: "$\\frac{7x^4}{4}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "$nx^{n-1}$." }], steps: [{ reasoning: "$7\\times3x^{3-1}=21x^2$.", marks: 1, markCode: "A" }], finalAnswer: "$21x^2$" },
        },
        {
          id: "olam-u6-s1-ru-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=4x^2+3x-2$ at $x=-1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Differentiate then substitute." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=8x+3$; at $x=-1$: $-8+3=-5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-5$" },
        },
        {
          id: "olam-u6-s1-ru-q7", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(9)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$9x$" },
            { id: "b", text: "9" },
            { id: "c", text: "0" },
            { id: "d", text: "1" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Constant", statement: "Rate of change of constant is 0." }], steps: [{ reasoning: "Constants differentiate to 0.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olam-u6-s1-ru-q8", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=2x^4-5x^2+3x-7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Term by term." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=8x^3-10x+3$ (constant $-7$ → 0).", marks: 1, markCode: "M" },
            { reasoning: "Each term checked: $2x^4\\to8x^3$; $-5x^2\\to-10x$; $3x\\to3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$8x^3-10x+3$" },
        },
        {
          id: "olam-u6-s1-ru-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the $x$-coordinate of the stationary point of $y=x^2-4x+1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Stationary", statement: "Set $\\frac{dy}{dx}=0$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x-4=0$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u6-s1-ru-q10", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{d}{dx}\\left(\\sqrt{x}\\right)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{\\sqrt{x}}$" },
            { id: "b", text: "$2\\sqrt{x}$" },
            { id: "c", text: "$\\frac{x^{3/2}}{3}$" },
            { id: "d", text: "$\\frac{1}{2\\sqrt{x}}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "$x^{1/2}\\to\\frac12x^{-1/2}$." }], steps: [{ reasoning: "$\\frac12x^{-1/2}=\\frac{1}{2\\sqrt{x}}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{2\\sqrt{x}}$" },
        },
        {
          id: "olam-u6-s1-ru-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Given $y=x^3-3x^2-9x+1$, find $\\frac{dy}{dx}$ and the $x$-coordinates of the stationary points.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Derivative + stationary", statement: "Set $\\frac{dy}{dx}=0$ and factor." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2-6x-9=3(x^2-2x-3)=3(x-3)(x+1)$.", marks: 1, markCode: "M" },
            { reasoning: "Set $=0$: $x=3$ or $x=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Both give horizontal tangents (stationary points).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{dy}{dx}=3x^2-6x-9$; $x=-1$ or $x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-1$ or $x=3$" },
        },
        {
          id: "olam-u6-s1-ru-q12", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{d^2y}{dx^2}$ for $y=x^3+4x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Second derivative", statement: "Differentiate twice." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2+4$ → $\\frac{d^2y}{dx^2}=6x$; at $x=1$: 6.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olam-u6-s1-ru-q13", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{d}{dx}\\left(x^{-1}\\right)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{x^2}$" },
            { id: "b", text: "$x^{-2}$" },
            { id: "c", text: "$-x^{-2}$" },
            { id: "d", text: "$-\\ln x$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "Works for negative powers." }], steps: [{ reasoning: "$-1\\cdot x^{-2}=-x^{-2}$.", marks: 1, markCode: "A" }], finalAnswer: "$-x^{-2}$" },
        },
        {
          id: "olam-u6-s1-ru-q14", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=(x+1)(x-2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand then differentiate", statement: "Or product rule." }], steps: [
            { reasoning: "$y=x^2-x-2$ → $\\frac{dy}{dx}=2x-1$.", marks: 1, markCode: "M" },
            { reasoning: "Product check: $(x-2)+(x+1)=2x-1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x-1$" },
        },
        {
          id: "olam-u6-s1-ru-q15", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $y=x^{3/2}$ at $x=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "Fractional powers allowed." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=\\frac32x^{1/2}$; at $x=4$: $\\frac32\\times2=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u6-s1-ru-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the $x$-coordinates of the stationary points of $y=x^4-8x^2+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Stationary", statement: "Factor the derivative." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=4x^3-16x=4x(x^2-4)=4x(x-2)(x+2)$.", marks: 1, markCode: "M" },
            { reasoning: "Set $=0$: $x=0$, $x=2$, $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "All three are stationary point $x$-coordinates.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-2, 0, 2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2, 0, 2$" },
        },
      ],
    },
    {
      id: "olam-u6-s1-applications",
      title: "Gradients and tangents",
      skill: "Use derivatives to find gradients and equations of tangents at O Level.",
      lesson: {
        sections: [
          { heading: "Gradient at a point", body: "The derivative is a function, so you can evaluate it anywhere: at $x=a$ the value $\\frac{dy}{dx}\\big|_{x=a}$ is the gradient of the curve at that point — identical to the gradient of the tangent. This links calculus back to straight-line coordinate geometry: once you have the gradient and the point, the tangent's equation follows from $y-y_1=m(x-x_1)$." },
          { heading: "Finding the tangent", body: "Recipe: (1) differentiate to get $\\frac{dy}{dx}$, (2) substitute the point's $x$-coordinate to get the gradient $m$, (3) substitute the point into $y-y_1=m(x-x_1)$. For 'find where the gradient equals $k$' questions, set $\\frac{dy}{dx}=k$ and solve — the solutions are the $x$-coordinates where tangents have that gradient. Always simplify fractions and surds in your final gradient." },
        ],
        keyFormulas: [
          { name: "Tangent", statement: "$y-y_1=m(x-x_1)$ with $m=\\frac{dy}{dx}$ at the point" },
        ],
        workedExample: { problem: "Find the equation of the tangent to $y=x^2$ at $(2,4)$.", solution: "$\\frac{dy}{dx}=2x$ → at $x=2$, $m=4$. Point is $(2,4)$, so $y-4=4(x-2)$ → $y=4x-4$. Check: at $x=2$, $y=4$ ✓ and gradient matches $\\frac{dy}{dx}=4$ ✓." },
      },
      questions: [
        {
          id: "olam-u6-s1-ap-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of $y=x^2$ at $x=4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "16" },
            { id: "b", text: "2" },
            { id: "c", text: "4" },
            { id: "d", text: "8" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [{ reasoning: "$\\frac{dy}{dx}=2x$ → at $x=4$: 8.", marks: 1, markCode: "A" }], finalAnswer: "8" },
        },
        {
          id: "olam-u6-s1-ap-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of $y=3x^2-2x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Differentiate, substitute." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=6x-2$ → at $x=1$: $4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u6-s1-ap-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=x^2$ at the point $(2,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x$ → at $x=2$: $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=4(x-2)$ → $y=4x-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-4$" },
        },
        {
          id: "olam-u6-s1-ap-q4", difficulty: "core", totalMarks: 4,
          stem: "Find where the gradient of $y=x^3-3x$ equals 1.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient equation", statement: "Set derivative = value." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2-3=1$ → $3x^2=4$ → $x=\\pm\\frac{2}{\\sqrt3}$.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\pm\\frac{2\\sqrt3}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=\\frac{2}{\\sqrt3}$, $3\\times\\frac43-3=1$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\pm\\frac{2\\sqrt3}{3}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\pm\\frac{2\\sqrt3}{3}$" },
        },
        {
          id: "olam-u6-s1-ap-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of $y=x^2$ at $x=-3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "$-9$" },
            { id: "c", text: "$-6$" },
            { id: "d", text: "6" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate $\\frac{dy}{dx}$." }], steps: [{ reasoning: "$\\frac{dy}{dx}=2x$ → at $x=-3$: $-6$.", marks: 1, markCode: "A" }], finalAnswer: "$-6$" },
        },
        {
          id: "olam-u6-s1-ap-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of $y=2x^2-x$ at $x=3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Differentiate, substitute." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=4x-1$; at $x=3$: $12-1=11$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 11.", marks: 1, markCode: "A" },
          ], finalAnswer: "11" },
        },
        {
          id: "olam-u6-s1-ap-q7", difficulty: "core", totalMarks: 1,
          stem: "The tangent to $y=x^2$ at $(1,1)$ has equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=x$" },
            { id: "b", text: "$y=2x+1$" },
            { id: "c", text: "$y=-2x+3$" },
            { id: "d", text: "$y=2x-1$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [{ reasoning: "$m=2x=2$ at $x=1$; $y-1=2(x-1)$ → $y=2x-1$.", marks: 1, markCode: "A" }], finalAnswer: "$y=2x-1$" },
        },
        {
          id: "olam-u6-s1-ap-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=x^2+1$ at $(2,5)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x$ → at $x=2$: $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-5=4(x-2)$ → $y=4x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-3$" },
        },
        {
          id: "olam-u6-s1-ap-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=x^3$ at $x=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Differentiate, substitute." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2$; at $x=2$: $3(4)=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olam-u6-s1-ap-q10", difficulty: "core", totalMarks: 1,
          stem: "The gradient of $y=x^2$ equals $4$ at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\pm2$" },
            { id: "b", text: "$x=-2$" },
            { id: "c", text: "$x=2$" },
            { id: "d", text: "$x=4$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient equation", statement: "Set derivative = value." }], steps: [{ reasoning: "$2x=4$ → $x=2$ only.", marks: 1, markCode: "A" }], finalAnswer: "$x=2$" },
        },
        {
          id: "olam-u6-s1-ap-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to $y=3x^2-2x$ at $x=1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Find point, gradient, then line." }], steps: [
            { reasoning: "At $x=1$: $y=3-2=1$, so point is $(1,1)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=6x-2$ → at $x=1$: $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=4(x-1)$ → $y=4x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-3$" },
        },
        {
          id: "olam-u6-s1-ap-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=\\frac{1}{x}$ at $x=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Write as $x^{-1}$." }], steps: [
            { reasoning: "$y=x^{-1}$ → $\\frac{dy}{dx}=-x^{-2}$; at $x=2$: $-\\frac14=-0.25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-0.25$" },
        },
        {
          id: "olam-u6-s1-ap-q13", difficulty: "core", totalMarks: 1,
          stem: "The tangent to $y=x^2$ at the origin has equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=2x$" },
            { id: "b", text: "$x=0$" },
            { id: "c", text: "$y=0$" },
            { id: "d", text: "$y=x$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent at origin", statement: "Gradient 0 → horizontal." }], steps: [{ reasoning: "$m=2(0)=0$ → $y=0$.", marks: 1, markCode: "A" }], finalAnswer: "$y=0$" },
        },
        {
          id: "olam-u6-s1-ap-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=x^2$ where the gradient is $6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient then point", statement: "Solve $\\frac{dy}{dx}=6$ first." }], steps: [
            { reasoning: "$2x=6$ → $x=3$ → point $(3,9)$.", marks: 1, markCode: "M" },
            { reasoning: "$y-9=6(x-3)$ → $y=6x-9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=6x-9$" },
        },
        {
          id: "olam-u6-s1-ap-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=\\sqrt{x}$ at $x=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Differentiate $x^{1/2}$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=\\frac{1}{2\\sqrt{x}}$; at $x=4$: $\\frac{1}{4}=0.25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.25" },
        },
        {
          id: "olam-u6-s1-ap-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to $y=x^3-3x$ at the point where $x=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point, gradient, line." }], steps: [
            { reasoning: "At $x=2$: $y=8-6=2$, point $(2,2)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=3x^2-3$ → at $x=2$: $m=9$.", marks: 1, markCode: "M" },
            { reasoning: "$y-2=9(x-2)$ → $y=9x-16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=9x-16$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u6-s1-diff-notes", title: "Differentiation — notes", summary: "Power rule, gradients, tangents.",
      sections: [
        { heading: "Rules", body: "$\\frac{d}{dx}x^n=nx^{n-1}$; constants → 0; sum term-by-term." },
        { heading: "Applications", body: "Gradient = $\\frac{dy}{dx}$; stationary when $=0$; tangent $y-y_1=m(x-x_1)$." },
      ] },
  ],
};
