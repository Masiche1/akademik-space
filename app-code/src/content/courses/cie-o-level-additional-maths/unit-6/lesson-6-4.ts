import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "olam-u6-lesson-6-4",
  code: "4-7",
  title: "Implicit Differentiation",
  goal: "I CAN differentiate equations where y is not isolated.",
  standards: ["4037: implicit differentiation"],
  vocabulary: [
    { term: "Implicit function", definition: "Relation between $x$ and $y$ not solved for $y$, e.g. $x^2+y^2=25$." },
    { term: "Chain rule on y", definition: "Terms in $y$ differentiate to include $\\frac{dy}{dx}$." },
    { term: "Product rule need", definition: "Terms like $xy$ need the product rule when differentiating implicitly." },
    { term: "Implicit curve", definition: "Curve defined by an equation in both $x$ and $y$." },
  ],
  concepts: [
    {
      id: "olam-u6-s4-basic",
      title: "Implicit differentiation",
      skill: "Differentiate implicit equations at O Level.",
      lesson: {
        sections: [
          { heading: "The rule", body: "When $y$ is not isolated, differentiate term by term with respect to $x$, treating $y$ as a function of $x$. The chain rule means every $y$-term picks up a factor of $\\frac{dy}{dx}$: $\\frac{d}{dx}(y^n)=ny^{n-1}\\frac{dy}{dx}$ and $\\frac{d}{dx}(y)=\\frac{dy}{dx}$. Terms in $x$ alone differentiate normally. Products like $xy$ need the product rule: $\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$." },
          { heading: "Circle example", body: "$x^2+y^2=25$ → $2x+2y\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac{x}{y}$. This gives the gradient of the circle at any point — at $(3,4)$ the gradient is $-\\frac34$, which is perpendicular to the radius gradient $\\frac43$ as expected for a tangent. Implicit differentiation is what makes curves like circles tractable without solving for $y$ first (which would give two branches)." },
        ],
        keyFormulas: [
          { name: "Chain on y", statement: "$\\frac{d}{dx}y^n=ny^{n-1}\\frac{dy}{dx}$" },
          { name: "Product xy", statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$" },
        ],
        workedExample: { problem: "Differentiate $x^2+y^2=25$ with respect to $x$.", solution: "$2x+2y\\frac{dy}{dx}=0$ → divide by $2y$: $\\frac{dy}{dx}=-\\frac{x}{y}$. At $(3,4)$: gradient $=-\\frac34$ ✓ perpendicular to radius." },
      },
      questions: [
        {
          id: "olam-u6-s4-im-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(y^2)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2y\\frac{dy}{dx}$" }, { id: "b", text: "$2y$" }, { id: "c", text: "$\\frac{dy}{dx}$" }, { id: "d", text: "$2x\\frac{dy}{dx}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "y is function of x." }], steps: [{ reasoning: "Chain rule: $2y\\cdot\\frac{dy}{dx}$.", marks: 1, markCode: "A" }], finalAnswer: "$2y\\frac{dy}{dx}$" },
        },
        {
          id: "olam-u6-s4-im-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Differentiate $x^2+y^2=25$ implicitly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Term by term." }], steps: [
            { reasoning: "$2x+2y\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac{x}{y}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{dy}{dx}=-\\frac{x}{y}$" },
        },
        {
          id: "olam-u6-s4-im-q3", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $xy=6$ implicitly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "$(xy)'=y+x y'$.", }], steps: [
            { reasoning: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}=0$ (derivative of constant 6 is 0).", marks: 1, markCode: "M" },
            { reasoning: "$x\\frac{dy}{dx}=-y$ → $\\frac{dy}{dx}=-\\frac{y}{x}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{dy}{dx}=-\\frac{y}{x}$" },
        },
        {
          id: "olam-u6-s4-im-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the gradient of $x^2+xy+y^2=7$ at $(1,2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit + evaluate", statement: "Differentiate then substitute." }], steps: [
            { reasoning: "$2x+(y+x\\frac{dy}{dx})+2y\\frac{dy}{dx}=0$ → $2x+y+(x+2y)\\frac{dy}{dx}=0$.", marks: 1, markCode: "M" },
            { reasoning: "At $(1,2)$: $2+2+(1+4)\\frac{dy}{dx}=0$ → $4+5\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac45$.", marks: 1, markCode: "M" },
            { reasoning: "Verify point on curve: $1+2+4=7$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: gradient $-\\frac45$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac45$" },
        },
      ],
    },
    {
      id: "olam-u6-s4-tangent",
      title: "Tangents to implicit curves",
      skill: "Find tangent equations to implicitly defined curves at O Level.",
      lesson: {
        sections: [
          { heading: "Gradient then equation", body: "Once you have $\\frac{dy}{dx}$ in terms of $x$ and $y$, evaluate it at the given point to get the tangent's gradient $m$, then write $y-y_1=m(x-x_1)$. The point must lie on the curve — verify by substituting into the original equation first. For curves like circles this reproduces the tangent-perpendicular-to-radius result, but implicit differentiation handles far more general curves." },
          { heading: "Normal lines", body: "The normal is perpendicular to the tangent, so its gradient is $-\\frac{1}{m}$ (negative reciprocal), provided $m\\neq0$. For a circle, the normal always passes through the centre — a useful check. If $m=0$ the tangent is horizontal and the normal is vertical ($x=x_1$); if the tangent is vertical, the normal is horizontal." },
        ],
        keyFormulas: [
          { name: "Normal gradient", statement: "$m_{\\text{normal}}=-\\frac{1}{m_{\\text{tangent}}}$" },
        ],
        workedExample: { problem: "Find the tangent to $x^2+y^2=25$ at $(3,4)$ using implicit differentiation.", solution: "$\\frac{dy}{dx}=-\\frac{x}{y}$ → at $(3,4)$, $m=-\\frac34$. Tangent: $y-4=-\\frac34(x-3)$ → $3x+4y=25$. Matches the geometric method ✓." },
      },
      questions: [
        {
          id: "olam-u6-s4-ta-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The normal to a curve is perpendicular to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The tangent" }, { id: "b", text: "The x-axis" }, { id: "c", text: "The y-axis" }, { id: "d", text: "The curve itself" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Normal", statement: "Perpendicular to tangent." }], steps: [{ reasoning: "Definition.", marks: 1, markCode: "A" }], finalAnswer: "The tangent" },
        },
        {
          id: "olam-u6-s4-ta-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of the normal to $x^2+y^2=25$ at $(3,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Normal gradient", statement: "Negative reciprocal." }], steps: [
            { reasoning: "Tangent gradient $-\\frac34$ → normal gradient $\\frac43$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac43$ (points towards centre — check: line from $(3,4)$ to $(0,0)$ has gradient $\\frac43$ ✓).", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac43$" },
        },
        {
          id: "olam-u6-s4-ta-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $xy=4$ at $(2,2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit tangent", statement: "Differentiate then line equation." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-\\frac{y}{x}$ → at $(2,2)$, $m=-1$.", marks: 1, markCode: "M" },
            { reasoning: "$y-2=-1(x-2)$ → $y=-x+4$ or $x+y=4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(2,2)$ on curve ($4=4$ ✓) and on line ($4=4$ ✓).", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+y=4$" },
        },
        {
          id: "olam-u6-s4-ta-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the normal to $x^2+y^2=25$ at $(3,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Normal equation", statement: "Perpendicular through point." }], steps: [
            { reasoning: "Normal gradient $\\frac43$; passes through $(3,4)$ and centre $(0,0)$.", marks: 1, markCode: "M" },
            { reasoning: "$y=\\frac43x$ (through origin with that gradient).", marks: 1, markCode: "M" },
            { reasoning: "Check: at $x=3$, $y=4$ ✓; perpendicular to tangent $3x+4y=25$ since $3(1)+4(\\frac43)=3+\\frac{16}{3}$... verify gradients: tangent $-\\frac34$, normal $\\frac43$, product $=-1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $y=\\frac43x$ or $4x-3y=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=\\frac43x$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u6-s4-impl-notes", title: "Implicit differentiation — notes", summary: "Chain rule on y, tangents and normals.",
      sections: [
        { heading: "Rule", body: "Differentiate term by term; every $y$-term gets $\\frac{dy}{dx}$ via chain rule; $xy$ needs product rule." },
        { heading: "Tangents", body: "Evaluate $\\frac{dy}{dx}$ at the point for gradient; normal gradient is negative reciprocal." },
      ] },
  ],
};
