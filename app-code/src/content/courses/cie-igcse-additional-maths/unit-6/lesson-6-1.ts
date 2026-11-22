import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciam-u6-lesson-6-1",
  code: "4-2",
  title: "Differentiation",
  goal: "I CAN differentiate polynomial functions and find gradients.",
  standards: ["0606: differentiation"],
  vocabulary: [
    { term: "Derivative", definition: "$\\frac{dy}{dx}$ — rate of change / gradient." },
    { term: "Power rule", definition: "$\\frac{d}{dx}x^n=nx^{n-1}$." },
    { term: "Stationary point", definition: "Where $\\frac{dy}{dx}=0$." },
    { term: "Second derivative", definition: "$\\frac{d^2y}{dx^2}$ — rate of change of gradient." },
  ],
  concepts: [
    {
      id: "ciam-u6-s1-rules",
      title: "Differentiation rules",
      skill: "Differentiate polynomials at IGCSE level.",
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
          id: "ciam-u6-s1-ru-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(x^3)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2$" },
            { id: "b", text: "$3x^3$" },
            { id: "c", text: "$3x^2$" },
            { id: "d", text: "$\\frac{x^4}{4}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "$nx^{n-1}$." }], steps: [{ reasoning: "$3x^{3-1}=3x^2$.", marks: 1, markCode: "A" }], finalAnswer: "$3x^2$" },
        },
        {
          id: "ciam-u6-s1-ru-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Differentiate $y=5x^2-3x+1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Term by term." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=10x-3$ (constant 1 → 0).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10x-3$" },
        },
        {
          id: "ciam-u6-s1-ru-q3", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=x^{-2}+4x^{\\frac12}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Fractional/negative powers." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-2x^{-3}+4\\times\\frac12 x^{-\\frac12}$.", marks: 1, markCode: "M" },
            { reasoning: "$=-\\frac{2}{x^3}+\\frac{2}{\\sqrt{x}}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{2}{x^3}+\\frac{2}{\\sqrt{x}}$" },
        },
        {
          id: "ciam-u6-s1-ru-q4", difficulty: "core", totalMarks: 4,
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
          id: "ciam-u6-s1-ru-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(x^5)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{x^6}{6}$" },
            { id: "b", text: "$5x^4$" },
            { id: "c", text: "$5x^5$" },
            { id: "d", text: "$x^4$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "$nx^{n-1}$." }], steps: [{ reasoning: "$5x^{5-1}=5x^4$.", marks: 1, markCode: "A" }], finalAnswer: "$5x^4$" },
        },
        {
          id: "ciam-u6-s1-ru-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ of $y=4x^3-2x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Term by term." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=12x^2-2$ → at $x=1$: $12-2=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "ciam-u6-s1-ru-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Differentiate $y=2x^4-5x^2+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Term by term." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=8x^3-10x$ (constant 3 → 0).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$8x^3-10x$" },
        },
        {
          id: "ciam-u6-s1-ru-q8", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(7)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$7x$" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "7" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Constant rule", statement: "Constants differentiate to 0." }], steps: [{ reasoning: "Rate of change of a constant is zero.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "ciam-u6-s1-ru-q9", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=\\sqrt{x}$ and find $\\frac{dy}{dx}$ at $x=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "$\\sqrt{x}=x^{1/2}$." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=\\frac12x^{-1/2}=\\frac{1}{2\\sqrt{x}}$ → at $x=4$: $\\frac{1}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.25.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "ciam-u6-s1-ru-q10", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $y=6x^{-2}+2x^{\\frac12}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Negative and fractional powers." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-12x^{-3}+x^{-\\frac12}$.", marks: 1, markCode: "M" },
            { reasoning: "$=-\\frac{12}{x^3}+\\frac{1}{\\sqrt{x}}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac{12}{x^3}+\\frac{1}{\\sqrt{x}}$" },
        },
        {
          id: "ciam-u6-s1-ru-q11", difficulty: "core", totalMarks: 1,
          stem: "$\\frac{dy}{dx}$ of $y=3x^2-12x+9$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6x-12$" },
            { id: "b", text: "$3(x-1)(x-3)$" },
            { id: "c", text: "$6x^2-12x+9$" },
            { id: "d", text: "$3x-12$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Term by term." }], steps: [{ reasoning: "$\\frac{dy}{dx}=6x-12$; note $3(x-1)(x-3)$ is the factorisation of $y$, not $\\frac{dy}{dx}$.", marks: 1, markCode: "A" }], finalAnswer: "$6x-12$" },
        },
        {
          id: "ciam-u6-s1-ru-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=x^3-6x^2+9x$ at $x=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2-12x+9$ → at $x=2$: $12-24+9=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3$" },
        },
        {
          id: "ciam-u6-s1-ru-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Differentiate $y=x^2(x+1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand then differentiate", statement: "Or use product rule later." }], steps: [
            { reasoning: "$y=x^3+x^2$ → $\\frac{dy}{dx}=3x^2+2x$.", marks: 1, markCode: "M" },
            { reasoning: "Check by product rule: $2x(x+1)+x^2=3x^2+2x$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x^2+2x$" },
        },
        {
          id: "ciam-u6-s1-ru-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ of $y=5x^4$ at $x=-1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -20 }] },
          markscheme: { principles: [{ kind: "technique", name: "Power rule", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=20x^3$ → at $x=-1$: $-20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-20$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-20$" },
        },
        {
          id: "ciam-u6-s1-ru-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $y=(x-2)^3$ by first expanding, and verify your answer at $x=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand then power rule", statement: "Polynomial form." }], steps: [
            { reasoning: "$y=x^3-6x^2+12x-8$ → $\\frac{dy}{dx}=3x^2-12x+12$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=3$: $27-36+12=3$.", marks: 1, markCode: "M" },
            { reasoning: "Check via chain rule: $3(x-2)^2$ at $x=3$ = $3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3x^2-12x+12$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x^2-12x+12$" },
        },
        {
          id: "ciam-u6-s1-ru-q16", difficulty: "challenge", totalMarks: 1,
          stem: "$\\frac{d}{dx}\\left(\\frac{4}{x}\\right)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{4}{x^2}$" },
            { id: "b", text: "$-\\frac{4}{x^2}$" },
            { id: "c", text: "0" },
            { id: "d", text: "$4x^{-2}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Power rule", statement: "$4x^{-1}\\to-4x^{-2}$." }], steps: [{ reasoning: "$\\frac{4}{x}=4x^{-1}$ → derivative $-4x^{-2}=-\\frac{4}{x^2}$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac{4}{x^2}$" },
        },
      ],
    },
    {
      id: "ciam-u6-s1-applications",
      title: "Gradients and tangents",
      skill: "Use derivatives to find gradients and equations of tangents at IGCSE level.",
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
          id: "ciam-u6-s1-ap-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of $y=x^2$ at $x=4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "16" },
            { id: "c", text: "4" },
            { id: "d", text: "8" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [{ reasoning: "$\\frac{dy}{dx}=2x$ → at $x=4$: 8.", marks: 1, markCode: "A" }], finalAnswer: "8" },
        },
        {
          id: "ciam-u6-s1-ap-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of $y=3x^2-2x$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Differentiate, substitute." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=6x-2$ → at $x=1$: $4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u6-s1-ap-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=x^2$ at the point $(2,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x$ → at $x=2$: $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=4(x-2)$ → $y=4x-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-4$" },
        },
        {
          id: "ciam-u6-s1-ap-q4", difficulty: "core", totalMarks: 4,
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
          id: "ciam-u6-s1-ap-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of $y=x^2$ at $x=-3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "$-6$" },
            { id: "c", text: "9" },
            { id: "d", text: "$-9$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [{ reasoning: "$\\frac{dy}{dx}=2x$ → at $x=-3$: $-6$.", marks: 1, markCode: "A" }], finalAnswer: "$-6$" },
        },
        {
          id: "ciam-u6-s1-ap-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of $y=2x^2-4x$ at $x=3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Differentiate, substitute." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=4x-4$ → at $x=3$: $12-4=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "ciam-u6-s1-ap-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=x^2$ at $(3,9)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x$ → at $x=3$: $m=6$.", marks: 1, markCode: "M" },
            { reasoning: "$y-9=6(x-3)$ → $y=6x-9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=6x-9$" },
        },
        {
          id: "ciam-u6-s1-ap-q8", difficulty: "core", totalMarks: 1,
          stem: "The gradient of the tangent to $y=x^2+1$ at $x=0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "undefined" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [{ reasoning: "$\\frac{dy}{dx}=2x$ → at $x=0$: 0 (horizontal tangent).", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "ciam-u6-s1-ap-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of $y=x^3$ at $x=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=3x^2$ → at $x=2$: $12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "ciam-u6-s1-ap-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=2x^2$ at the point where $x=1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "At $x=1$, $y=2$; $\\frac{dy}{dx}=4x$ → $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-2=4(x-1)$ → $y=4x-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-2$" },
        },
        {
          id: "ciam-u6-s1-ap-q11", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $y=x^2$ at $(-1,1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x$ → at $x=-1$: $m=-2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=-2(x+1)$ → $y=-2x-1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x-1$" },
        },
        {
          id: "ciam-u6-s1-ap-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the value of $x$ where the gradient of $y=x^2-2x$ equals 4.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient equation", statement: "Set derivative = value." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x-2=4$ → $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u6-s1-ap-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Find the $x$-coordinates of the points on $y=x^2$ where the gradient is 6.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Gradient equation", statement: "Set derivative = value." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=2x$; set $2x=6$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3$ (single solution).", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=3$, gradient $=6$ ✓. Answer: $x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "ciam-u6-s1-ap-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Find the gradient of $y=3x^2-12x+9$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Gradient", statement: "Evaluate derivative." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=6x-12$ → at $x=1$: $-6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-6$" },
        },
        {
          id: "ciam-u6-s1-ap-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to $y=x^2+2x$ at $x=1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point + gradient." }], steps: [
            { reasoning: "At $x=1$, $y=1+2=3$; $\\frac{dy}{dx}=2x+2$ → $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-3=4(x-1)$ → $y=4x-1$.", marks: 1, markCode: "M" },
            { reasoning: "Check: at $x=1$, $y=3$ ✓ and gradient 4 ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-1$" },
        },
        {
          id: "ciam-u6-s1-ap-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The tangent to $y=x^3$ at $x=1$ has equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=x$" },
            { id: "b", text: "$y=x^3$" },
            { id: "c", text: "$y=3x+2$" },
            { id: "d", text: "$y=3x-2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Point $(1,1)$, gradient 3." }], steps: [{ reasoning: "$m=3(1)^2=3$; $y-1=3(x-1)$ → $y=3x-2$.", marks: 1, markCode: "A" }], finalAnswer: "$y=3x-2$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u6-s1-diff-notes", title: "Differentiation — notes", summary: "Power rule, gradients, tangents.",
      sections: [
        { heading: "Rules", body: "$\\frac{d}{dx}x^n=nx^{n-1}$; constants → 0; sum term-by-term." },
        { heading: "Applications", body: "Gradient = $\\frac{dy}{dx}$; stationary when $=0$; tangent $y-y_1=m(x-x_1)$." },
      ] },
  ],
};
