import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edial-maths-u3-lesson-3-3",
  code: "3-3",
  title: "Calculus Techniques",
  goal: "I CAN differentiate using the chain, product and quotient rules and implicit differentiation, and integrate using substitution and by parts.",
  standards: ["WMA13 P3", "Differentiation", "Integration"],
  vocabulary: [
    { term: "Chain rule", definition: "$\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}$ for composite functions $y=f(g(x))$." },
    { term: "Product rule", definition: "$\\frac{d}{dx}[uv]=u\\frac{dv}{dx}+v\\frac{du}{dx}$." },
    { term: "Quotient rule", definition: "$\\frac{d}{dx}\\left[\\frac{u}{v}\\right]=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$." },
    { term: "Implicit differentiation", definition: "Differentiating both sides of an equation in $x$ and $y$, treating $y$ as a function of $x$." },
    { term: "Integration by parts", definition: "$\\int u\\,dv=uv-\\int v\\,du$ — the integration analogue of the product rule." },
  ],
  concepts: [
    {
      id: "edial-maths-u3-diff-techniques",
      title: "Advanced differentiation",
      skill: "Apply the chain, product and quotient rules and differentiate implicitly defined curves.",
      lesson: {
        sections: [
          {
            heading: "Choosing a rule",
            body: "Chain rule for composites $f(g(x))$ — introduce $u=g(x)$. Product rule for products $u(x)v(x)$. Quotient rule for fractions $\\frac{u}{v}$ (or rewrite as $uv^{-1}$ and use product rule).",
          },
          {
            heading: "Implicit differentiation",
            body: "For curves like $x^2+y^2=25$ or $xy=6$, differentiate term-by-term with respect to $x$: $\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$ and $\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$. Then solve for $\\frac{dy}{dx}$.",
          },
          {
            heading: "Tangents and normals",
            body: "The gradient of the tangent at a point is $\\frac{dy}{dx}$ evaluated there; the normal has gradient $-1/\\frac{dy}{dx}$. Use point-slope form $y-y_1=m(x-x_1)$.",
          },
        ],
        keyFormulas: [
          { name: "Product rule", statement: "$(uv)'=u'v+uv'$" },
          { name: "Implicit diff", statement: "$\\frac{d}{dx}F(x,y)=F_x+F_y\\frac{dy}{dx}$" },
        ],
        workedExample: {
          problem: "Find $\\frac{dy}{dx}$ for $x^2+xy+y^2=7$.",
          solution: "Differentiate: $2x+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0$. Collect: $(x+2y)\\frac{dy}{dx}=-(2x+y)$, so $\\frac{dy}{dx}=-\\frac{2x+y}{x+2y}$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u3-calcd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}(x^2\\sin x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x\\sin x+x^2\\cos x$" },
              { id: "b", text: "$x^2\\cos x$" },
              { id: "c", text: "$2x\\cos x$" },
              { id: "d", text: "$2x\\sin x-x^2\\cos x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=u'v+uv'$." },
            ],
            steps: [
              { reasoning: "Apply product rule with $u=x^2$, $v=\\sin x$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2x\\sin x+x^2\\cos x$",
            commonErrors: ["Differentiating only one factor."],
          },
        },
        {
          id: "edial-maths-u3-calcd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Differentiate $y=\\frac{x}{x+1}$ with respect to $x$.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quotient rule", statement: "$\\left(\\frac{u}{v}\\right)'=\\frac{vu'-uv'}{v^2}$." },
            ],
            steps: [
              { reasoning: "Quotient rule with $u=x$, $v=x+1$: numerator $(x+1)(1)-x(1)=1$.", working: "\\frac{(x+1)-x}{(x+1)^2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac{1}{(x+1)^2}", marks: 1, markCode: "M" },
              { reasoning: "State result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{dy}{dx}=\\frac{1}{(x+1)^2}$",
            commonErrors: ["Sign error in numerator.", "Squaring only part of denominator."],
          },
        },
        {
          id: "edial-maths-u3-calcd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the gradient of the curve $x^2+y^2=25$ at the point $(3,4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Implicit differentiation", statement: "$2x+2y\\frac{dy}{dx}=0$." },
            ],
            steps: [
              { reasoning: "Differentiate implicitly: $2x+2y\\frac{dy}{dx}=0$.", working: "\\frac{dy}{dx}=-\\frac{x}{y}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $(3,4)$.", working: "\\frac{dy}{dx}=-\\frac{3}{4}", marks: 1, markCode: "M" },
              { reasoning: "State gradient.", marks: 1, markCode: "A" },
              { reasoning: "Interpret: tangent slopes downwards at $-\\frac34$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\frac{dy}{dx}=-\\frac34$",
            commonErrors: ["Treating $y^2$ as constant.", "Not substituting the point."],
          },
        },
        {
          id: "edial-maths-u3-calcd-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The curve $C$ has equation $y=xe^{2x}$.",
          parts: [
            { label: "a", prompt: "Find $\\frac{dy}{dx}$.", marks: 3 },
            { label: "b", prompt: "Find the coordinates of the stationary point on $C$.", marks: 4 },
            { label: "c", prompt: "Determine its nature.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product rule", statement: "$(uv)'=u'v+uv'$ with $u=x$, $v=e^{2x}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{dy}{dx}=1\\cdot e^{2x}+x\\cdot2e^{2x}=e^{2x}(1+2x)$.", working: "e^{2x}(1+2x)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State derivative.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check chain rule on $e^{2x}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set $e^{2x}(1+2x)=0$; since $e^{2x}>0$, need $1+2x=0$, so $x=-\\frac12$.", working: "x=-0.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Find $y$: $y=(-\\frac12)e^{-1}=-\\frac{1}{2e}\\approx-0.184$.", working: "y\\approx-0.184", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State coordinates $(-\\frac12,-\\frac{1}{2e})$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify point lies on curve.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate again or test sign: for $x<-\\frac12$, $\\frac{dy}{dx}<0$; for $x>-\\frac12$, $>0$ — minimum.", working: "\\text{min}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alternatively $\\frac{d^2y}{dx^2}=e^{2x}(4+4x)>0$ at $x=-\\frac12$ (equals $2e^{-1}>0$).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude stationary point is a minimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{dy}{dx}=e^{2x}(1+2x)$ (b) $(-\\frac12,-\\frac{1}{2e})$ (c) minimum",
            commonErrors: ["Missing the chain-rule factor 2.", "Forgetting $e^{2x}>0$ when solving."],
          },
        },
      ],
    },
    {
      id: "edial-maths-u3-int-techniques",
      title: "Integration by substitution and parts",
      skill: "Integrate using $u$-substitution for composite forms and integration by parts for products, including definite integrals.",
      lesson: {
        sections: [
          {
            heading: "Substitution",
            body: "For $\\int f(g(x))g'(x)\\,dx$ choose $u=g(x)$, replace $dx$ via $du=g'(x)dx$, integrate in $u$, then substitute back. Works backwards from the chain rule. Watch for constants: $\\int 2x\\cos(x^2)\\,dx$ with $u=x^2$ gives $\\int\\cos u\\,du$.",
          },
          {
            heading: "Integration by parts",
            body: "$\\int u\\,dv=uv-\\int v\\,du$. Choose $u$ by LIATE (Log, Inverse trig, Algebraic, Trig, Exponential) — earlier types become $u$. For $\\int x e^x dx$: $u=x$, $dv=e^xdx$, giving $xe^x-e^x+c$. Sometimes apply twice (e.g. $\\int x^2e^x$).",
          },
          {
            heading: "Definite integrals",
            body: "Change limits when substituting, or substitute back before evaluating. For by parts on definite integrals, evaluate $[uv]$ at the limits then subtract the remaining integral.",
          },
        ],
        keyFormulas: [
          { name: "By parts", statement: "$\\int u\\,dv=uv-\\int v\\,du$" },
          { name: "Substitution", statement: "$\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du$" },
        ],
        workedExample: {
          problem: "Find $\\int x\\cos x\\,dx$.",
          solution: "$u=x$, $dv=\\cos x\\,dx$; $du=dx$, $v=\\sin x$. $\\int x\\cos x\\,dx=x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+c$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u3-intt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To evaluate $\\int 2x\\sin(x^2)\\,dx$ by substitution, the natural choice of $u$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2$" },
              { id: "b", text: "$2x$" },
              { id: "c", text: "$\\sin(x^2)$" },
              { id: "d", text: "$x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Substitution", statement: "Choose $u$ as the inner function whose derivative appears." },
            ],
            steps: [
              { reasoning: "$u=x^2$ gives $du=2x\\,dx$, matching the integrand.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^2$",
            commonErrors: ["Choosing $u=\\sin(x^2)$ which does not simplify."],
          },
        },
        {
          id: "edial-maths-u3-intt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^{\\pi/2} x\\cos x\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "integral", answer: 0.5708, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "By parts", statement: "$\\int u\\,dv=uv-\\int v\\,du$." },
            ],
            steps: [
              { reasoning: "$u=x$, $dv=\\cos x\\,dx$: $\\int x\\cos x\\,dx=x\\sin x+\\cos x$.", working: "[x\\sin x+\\cos x]", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: at $\\frac{\\pi}{2}$, $\\frac{\\pi}{2}\\sin\\frac{\\pi}{2}+\\cos\\frac{\\pi}{2}=\\frac{\\pi}{2}$; at $0$, $0+1=1$.", working: "\\frac{\\pi}{2}-1", marks: 1, markCode: "M" },
              { reasoning: "Subtract and state the exact value $\\frac{\\pi}{2}-1\\approx0.571$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{\\pi}{2}-1\\approx0.571$",
            commonErrors: ["Sign error on $\\cos x$ term."],
            examinerNote: "Answer is $\\frac{\\pi}{2}-1$, NOT 1 — the numeric part should read $0.5708$.",
          },
        },
        {
          id: "edial-maths-u3-intt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int \\frac{\\ln x}{x}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Substitution", statement: "$u=\\ln x$, $du=\\frac{1}{x}dx$." },
            ],
            steps: [
              { reasoning: "Let $u=\\ln x$, then $du=\\frac{dx}{x}$.", working: "u=\\ln x", marks: 1, markCode: "M" },
              { reasoning: "Integral becomes $\\int u\\,du=\\frac{u^2}{2}$.", working: "\\frac{u^2}{2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute back: $\\frac{(\\ln x)^2}{2}+c$.", marks: 1, markCode: "M" },
              { reasoning: "State result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{(\\ln x)^2}{2}+c$",
            commonErrors: ["Trying by parts unnecessarily."],
          },
        },
        {
          id: "edial-maths-u3-intt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $I=\\int_0^{\\pi/2} x\\sin x\\,dx$.",
          parts: [
            { label: "a", prompt: "Use integration by parts to find an expression for $I$.", marks: 4 },
            { label: "b", prompt: "Evaluate $I$ exactly.", marks: 3 },
            { label: "c", prompt: "Hence find the area enclosed by $y=x\\sin x$, the $x$-axis and $x=\\frac{\\pi}{2}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "By parts", statement: "$\\int u\\,dv=uv-\\int v\\,du$." },
            ],
            steps: [
              { part: "a", reasoning: "$u=x$, $dv=\\sin x\\,dx$, so $du=dx$, $v=-\\cos x$.", working: "u=x,v=-\\cos x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$I=[-x\\cos x]_0^{\\pi/2}+\\int_0^{\\pi/2}\\cos x\\,dx$.", working: "[-x\\cos x]+[\\sin x]", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the boundary term: $-x\\cos x$ equals $0$ at both $x=\\frac{\\pi}{2}$ and $x=0$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$I=\\int_0^{\\pi/2}\\cos x\\,dx=\\left[\\sin x\\right]_0^{\\pi/2}=1$.", working: "I=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State $I=1$ exactly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify numerically: integrand positive on $(0,\\frac{\\pi}{2})$, average height plausible.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Since $x\\sin x\\ge0$ on $[0,\\frac{\\pi}{2}]$, area $=I=1$.", working: "A=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State area $=1$ square unit.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interpret in context.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $I=[-x\\cos x]_0^{\\pi/2}+\\int\\cos x\\,dx$ (b) $I=1$ (c) area $=1$",
            commonErrors: ["Sign errors with $-\\cos x$.", "Evaluating boundary term incorrectly."],
          },
        },
      ],
    },
  ],
};
