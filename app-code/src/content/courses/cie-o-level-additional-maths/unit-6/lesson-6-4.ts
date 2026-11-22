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
            { id: "a", text: "$2y$" },
            { id: "b", text: "$2y\\frac{dy}{dx}$" },
            { id: "c", text: "$\\frac{dy}{dx}$" },
            { id: "d", text: "$2x\\frac{dy}{dx}$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olam-u6-s4-im-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(y^3)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y^2\\frac{dy}{dx}$" },
            { id: "b", text: "$3x^2\\frac{dy}{dx}$" },
            { id: "c", text: "$3y^2$" },
            { id: "d", text: "$3y^2\\frac{dy}{dx}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Power of $y$ picks up $\\frac{dy}{dx}$." }], steps: [{ reasoning: "$3y^2\\cdot\\frac{dy}{dx}$.", marks: 1, markCode: "A" }], finalAnswer: "$3y^2\\frac{dy}{dx}$" },
        },
        {
          id: "olam-u6-s4-im-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of $x^2+y^2=25$ at $(3,4)$ using implicit differentiation.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.75 }] },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "$\\frac{dy}{dx}=-\\frac{x}{y}$." }], steps: [
            { reasoning: "$2x+2y\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac{x}{y}$; at $(3,4)$: $-\\frac34=-0.75$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.75$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-0.75$" },
        },
        {
          id: "olam-u6-s4-im-q7", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac{d}{dx}(xy)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{dy}{dx}$" },
            { id: "b", text: "$y+x\\frac{dy}{dx}$" },
            { id: "c", text: "$x\\frac{dy}{dx}$" },
            { id: "d", text: "$y$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Product rule", statement: "$(uv)'=u'v+uv'$." }], steps: [{ reasoning: "$1\\cdot y+x\\cdot\\frac{dy}{dx}$.", marks: 1, markCode: "A" }], finalAnswer: "$y+x\\frac{dy}{dx}$" },
        },
        {
          id: "olam-u6-s4-im-q8", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $x^2-y^2=9$ implicitly with respect to $x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Term by term; $y^2\\to2y\\frac{dy}{dx}$." }], steps: [
            { reasoning: "$2x-2y\\frac{dy}{dx}=0$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=\\frac{x}{y}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{dy}{dx}=\\frac{x}{y}$" },
        },
        {
          id: "olam-u6-s4-im-q9", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $x^2+y=4$ at $x=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Differentiate term by term." }], steps: [
            { reasoning: "$2x+\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-2x$; at $x=1$: $-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-2$" },
        },
        {
          id: "olam-u6-s4-im-q10", difficulty: "core", totalMarks: 1,
          stem: "When differentiating $y^2$ implicitly with respect to $x$, the result is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2y\\frac{dy}{dx}$" },
            { id: "b", text: "$\\frac{dy}{dx}$" },
            { id: "c", text: "$2x\\frac{dy}{dx}$" },
            { id: "d", text: "$2y$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Chain rule", statement: "Every $y$-term gets $\\frac{dy}{dx}$." }], steps: [{ reasoning: "Chain rule on $y$: $2y\\frac{dy}{dx}$.", marks: 1, markCode: "A" }], finalAnswer: "$2y\\frac{dy}{dx}$" },
        },
        {
          id: "olam-u6-s4-im-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $x^2+2xy+y^2=4$ implicitly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Product rule on $2xy$; chain rule on $y^2$." }], steps: [
            { reasoning: "$2x+2(y+x\\frac{dy}{dx})+2y\\frac{dy}{dx}=0$ → $2x+2y+2(x+y)\\frac{dy}{dx}=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(x+y)\\frac{dy}{dx}=-(x+y)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=-1$ (where $x+y\\neq0$).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{dy}{dx}=-1$" },
        },
        {
          id: "olam-u6-s4-im-q12", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $xy=8$ at $(2,4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "$\\frac{dy}{dx}=-\\frac{y}{x}$." }], steps: [
            { reasoning: "$y+x\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac{y}{x}$; at $(2,4)$: $-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-2$" },
        },
        {
          id: "olam-u6-s4-im-q13", difficulty: "core", totalMarks: 1,
          stem: "In implicit differentiation, every term containing $y$ must be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Differentiated as a constant" },
            { id: "b", text: "Ignored" },
            { id: "c", text: "Multiplied by $\\frac{dy}{dx}$ via the chain rule" },
            { id: "d", text: "Replaced by $x$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Treat $y$ as function of $x$." }], steps: [{ reasoning: "Chain rule applies to every $y$-term.", marks: 1, markCode: "A" }], finalAnswer: "Multiplied by $\\frac{dy}{dx}$" },
        },
        {
          id: "olam-u6-s4-im-q14", difficulty: "core", totalMarks: 3,
          stem: "Differentiate $x^3+y^3=8$ implicitly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Term by term." }], steps: [
            { reasoning: "$3x^2+3y^2\\frac{dy}{dx}=0$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=-\\frac{x^2}{y^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{dy}{dx}=-\\frac{x^2}{y^2}$" },
        },
        {
          id: "olam-u6-s4-im-q15", difficulty: "core", totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $x^2+y^2=100$ at $(6,8)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.75 }] },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Evaluate at point." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-\\frac{x}{y}$; at $(6,8)$: $-\\frac{6}{8}=-0.75$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.75$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-0.75$" },
        },
        {
          id: "olam-u6-s4-im-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Differentiate $x^2y+y^2=6$ implicitly and find $\\frac{dy}{dx}$ in terms of $x$ and $y$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit", statement: "Product rule on $x^2y$; chain rule on $y^2$." }], steps: [
            { reasoning: "$2xy+x^2\\frac{dy}{dx}+2y\\frac{dy}{dx}=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(x^2+2y)\\frac{dy}{dx}=-2xy$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{dy}{dx}=-\\frac{2xy}{x^2+2y}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{dy}{dx}=-\\frac{2xy}{x^2+2y}$" },
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
            { id: "a", text: "The tangent" },
            { id: "b", text: "The y-axis" },
            { id: "c", text: "The curve itself" },
            { id: "d", text: "The x-axis" },
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
        {
          id: "olam-u6-s4-ta-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of the normal to a curve is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The negative reciprocal of the tangent gradient" },
            { id: "b", text: "The same as the tangent gradient" },
            { id: "c", text: "Always zero" },
            { id: "d", text: "The tangent gradient squared" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Normal gradient", statement: "$-\\frac{1}{m}$." }], steps: [{ reasoning: "Normal is perpendicular to tangent.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac{1}{m}$" },
        },
        {
          id: "olam-u6-s4-ta-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of the normal to $x^2+y^2=25$ at $(4,3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: { principles: [{ kind: "technique", name: "Normal gradient", statement: "Negative reciprocal." }], steps: [
            { reasoning: "Tangent gradient $-\\frac{4}{3}$ → normal gradient $\\frac{3}{4}=0.75$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.75.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.75" },
        },
        {
          id: "olam-u6-s4-ta-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The normal to a circle at a point on the circumference always passes through…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The centre of the circle" },
            { id: "b", text: "Nowhere in particular" },
            { id: "c", text: "The point of contact only" },
            { id: "d", text: "The x-axis" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Circle normal", statement: "Normal = radius line." }], steps: [{ reasoning: "Normal is along the radius, so it passes through the centre.", marks: 1, markCode: "A" }], finalAnswer: "The centre" },
        },
        {
          id: "olam-u6-s4-ta-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the tangent to $x^2+y^2=25$ at $(4,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit tangent", statement: "Differentiate, evaluate, line equation." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-\\frac{x}{y}$ → at $(4,3)$: $m=-\\frac43$.", marks: 1, markCode: "M" },
            { reasoning: "$y-3=-\\frac43(x-4)$ → $4x+3y=25$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $16+9=25$ ✓ on circle; $16+9=25$ ✓ on line.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4x+3y=25$" },
        },
        {
          id: "olam-u6-s4-ta-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of the normal to $xy=4$ at $(1,4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Normal gradient", statement: "Negative reciprocal of tangent." }], steps: [
            { reasoning: "$\\frac{dy}{dx}=-\\frac{y}{x}$ → at $(1,4)$: $-4$; normal gradient $\\frac14=0.25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.25" },
        },
        {
          id: "olam-u6-s4-ta-q10", difficulty: "core", totalMarks: 1,
          stem: "If the tangent to a curve is horizontal, the normal is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Undefined" },
            { id: "b", text: "Horizontal" },
            { id: "c", text: "Also horizontal" },
            { id: "d", text: "Vertical" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Normal", statement: "Perpendicular to tangent." }], steps: [{ reasoning: "Horizontal tangent ⇒ vertical normal.", marks: 1, markCode: "A" }], finalAnswer: "Vertical" },
        },
        {
          id: "olam-u6-s4-ta-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to $x^2+y^2=10$ at $(1,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit tangent", statement: "Differentiate then line equation." }], steps: [
            { reasoning: "Check: $1+9=10$ ✓; $\\frac{dy}{dx}=-\\frac{x}{y}$ → at $(1,3)$: $m=-\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "$y-3=-\\frac13(x-1)$ → $x+3y=10$.", marks: 1, markCode: "M" },
            { reasoning: "Check on line: $1+9=10$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+3y=10$" },
        },
        {
          id: "olam-u6-s4-ta-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of the tangent to $x^2+y^2=50$ at $(5,5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Implicit tangent", statement: "$\\frac{dy}{dx}=-\\frac{x}{y}$." }], steps: [
            { reasoning: "Check: $25+25=50$ ✓; $m=-\\frac55=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-1$" },
        },
        {
          id: "olam-u6-s4-ta-q13", difficulty: "core", totalMarks: 1,
          stem: "The normal to a circle at a point on the circumference is the same line as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The tangent" },
            { id: "b", text: "A chord" },
            { id: "c", text: "The x-axis" },
            { id: "d", text: "The radius through that point" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Circle normal", statement: "Normal coincides with radius." }], steps: [{ reasoning: "Normal is perpendicular to tangent = along radius.", marks: 1, markCode: "A" }], finalAnswer: "The radius" },
        },
        {
          id: "olam-u6-s4-ta-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the normal to $x^2+y^2=25$ at $(4,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Normal equation", statement: "Through point and centre." }], steps: [
            { reasoning: "Normal gradient $\\frac34$; passes through $(4,3)$ and centre $(0,0)$.", marks: 1, markCode: "M" },
            { reasoning: "$y=\\frac34x$ → $3x-4y=0$.", marks: 1, markCode: "M" },
            { reasoning: "Check: at $x=4$, $y=3$ ✓; gradient product $-\\frac43\\times\\frac34=-1$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x-4y=0$" },
        },
        {
          id: "olam-u6-s4-ta-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of the tangent to $x^2+y^2=29$ at $(2,5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Implicit tangent", statement: "$\\frac{dy}{dx}=-\\frac{x}{y}$." }], steps: [
            { reasoning: "Check: $4+25=29$ ✓; $m=-\\frac25=-0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-0.4$" },
        },
        {
          id: "olam-u6-s4-ta-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to $x^2+xy+y^2=7$ at $(1,2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Implicit tangent", statement: "Differentiate then line equation." }], steps: [
            { reasoning: "$2x+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0$ → $\\frac{dy}{dx}=-\\frac{2x+y}{x+2y}$.", marks: 1, markCode: "M" },
            { reasoning: "At $(1,2)$: $m=-\\frac{2+2}{1+4}=-\\frac45$.", marks: 1, markCode: "M" },
            { reasoning: "$y-2=-\\frac45(x-1)$ → $4x+5y=14$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $1+2+4=7$ ✓ on curve; $4+10=14$ ✓ on line.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4x+5y=14$" },
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
