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
            { id: "a", text: "$3x^2$" }, { id: "b", text: "$x^2$" }, { id: "c", text: "$3x^3$" }, { id: "d", text: "$\\frac{x^4}{4}$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "8" }, { id: "b", text: "4" }, { id: "c", text: "16" }, { id: "d", text: "2" },
          ], correctChoiceId: "a" },
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
