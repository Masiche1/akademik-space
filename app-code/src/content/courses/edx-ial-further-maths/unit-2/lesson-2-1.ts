import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edialfm-u2-lesson-2-1",
  code: "2-1",
  title: "Hyperbolic Functions",
  goal: "I CAN define and manipulate hyperbolic functions, use their identities, and differentiate and integrate them.",
  standards: ["WFM02 FP2", "Hyperbolic functions"],
  vocabulary: [
    { term: "Hyperbolic sine", definition: "$\\sinh x=\\frac{e^x-e^{-x}}{2}$; odd function, $\\sinh 0=0$." },
    { term: "Hyperbolic cosine", definition: "$\\cosh x=\\frac{e^x+e^{-x}}{2}$; even function, $\\cosh 0=1$." },
    { term: "Hyperbolic tangent", definition: "$\\tanh x=\\frac{\\sinh x}{\\cosh x}$; range $(-1,1)$." },
    { term: "Hyperbolic identity", definition: "$\\cosh^2x-\\sinh^2x=1$ — analogous to $\\cos^2+\\sin^2=1$ but with a minus sign." },
    { term: "Inverse hyperbolic", definition: "$\\text{arsinh}\\,x=\\ln(x+\\sqrt{x^2+1})$, $\\text{arcosh}\\,x=\\ln(x+\\sqrt{x^2-1})$ ($x\\ge1$), $\\text{artanh}\\,x=\\frac12\\ln\\frac{1+x}{1-x}$ ($|x|<1$)." },
  ],
  concepts: [
    {
      id: "edialfm-u2-hyp-defs",
      title: "Definitions, identities and calculus",
      skill: "Derive hyperbolic identities from exponential definitions and differentiate/integrate hyperbolic functions.",
      lesson: {
        sections: [
          {
            heading: "From exponentials to identities",
            body: "Write $\\sinh x$ and $\\cosh x$ in terms of $e^x$ and $e^{-x}$, then expand products like $\\cosh^2x-\\sinh^2x=\\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=\\frac{4}{4}=1$. Similar expansions give $\\sinh2x=2\\sinh x\\cosh x$ and $\\cosh2x=\\cosh^2x+\\sinh^2x=2\\cosh^2x-1=1+2\\sinh^2x$.",
          },
          {
            heading: "Calculus",
            body: "$\\frac{d}{dx}\\sinh x=\\cosh x$, $\\frac{d}{dx}\\cosh x=\\sinh x$, $\\frac{d}{dx}\\tanh x=\\text{sech}^2x=1-\\tanh^2x$. Integrals reverse these: $\\int\\cosh x\\,dx=\\sinh x$, $\\int\\sinh x\\,dx=\\cosh x$.",
          },
          {
            heading: "Solving equations",
            body: "Equations like $\\cosh x=2$ give $x=\\pm\\text{arcosh}\\,2=\\pm\\ln(2+\\sqrt3)$. Equations in $\\sinh x$ are single-valued since $\\sinh$ is one-to-one; $\\cosh$ is even so gives $\\pm$ solutions.",
          },
        ],
        keyFormulas: [
          { name: "Identity", statement: "$\\cosh^2x-\\sinh^2x=1$" },
          { name: "Derivatives", statement: "$\\frac{d}{dx}\\sinh x=\\cosh x$, $\\frac{d}{dx}\\cosh x=\\sinh x$" },
          { name: "Double angle", statement: "$\\cosh2x=2\\cosh^2x-1=1+2\\sinh^2x$" },
        ],
        workedExample: {
          problem: "Solve $\\cosh x=3$.",
          solution: "$x=\\pm\\text{arcosh}\\,3=\\pm\\ln(3+\\sqrt{9-1})=\\pm\\ln(3+2\\sqrt2)\\approx\\pm1.763$.",
        },
      },
      questions: [
        {
          id: "edialfm-hyp2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}\\cosh x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sinh x$" },
              { id: "b", text: "$\\text{sech}^2x$" },
              { id: "c", text: "$\\cosh x$" },
              { id: "d", text: "$\\tanh x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "$\\frac{d}{dx}\\cosh x=\\sinh x$." }],
            steps: [{ reasoning: "Direct from exponential definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\sinh x$",
          },
        },
        {
          id: "edialfm-hyp2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $\\cosh^2x-\\sinh^2x=1$ using the exponential definitions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Definitions", statement: "$\\cosh x=\\frac{e^x+e^{-x}}{2}$, $\\sinh x=\\frac{e^x-e^{-x}}{2}$." }],
            steps: [
              { reasoning: "Write difference of squares: $\\cosh^2x-\\sinh^2x=(\\cosh x-\\sinh x)(\\cosh x+\\sinh x)$.", working: "factorised", marks: 1, markCode: "M" },
              { reasoning: "$\\cosh x-\\sinh x=e^{-x}$ and $\\cosh x+\\sinh x=e^x$.", working: "e^{-x}\\cdot e^x", marks: 1, markCode: "M" },
              { reasoning: "Product $=e^{-x}e^x=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\cosh^2x-\\sinh^2x=1$",
            commonErrors: ["Expanding incorrectly."],
          },
        },
        {
          id: "edialfm-hyp2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\sinh x=\\frac{3}{4}$, giving exact and approximate answers.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "arsinh", statement: "$\\text{arsinh}\\,x=\\ln(x+\\sqrt{x^2+1})$." }],
            steps: [
              { reasoning: "$x=\\text{arsinh}\\,\\frac34=\\ln\\left(\\frac34+\\sqrt{\\frac{9}{16}+1}\\right)=\\ln\\left(\\frac34+\\frac54\\right)=\\ln2$.", working: "ln2", marks: 1, markCode: "M" },
              { reasoning: "Exact: $x=\\ln2\\approx0.693$.", working: "0.693", marks: 1, markCode: "M" },
              { reasoning: "Since $\\sinh$ is one-to-one, single solution.", marks: 1, markCode: "R" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\ln2\\approx0.693$",
            commonErrors: ["Missing the square root simplification."],
          },
        },
        {
          id: "edialfm-hyp2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $y=\\sinh x$.",
          parts: [
            { label: "a", prompt: "Show that $\\frac{dy}{dx}=\\cosh x$ and hence find $\\frac{d^2y}{dx^2}$.", marks: 3 },
            { label: "b", prompt: "Use the identity to express $\\frac{d^2y}{dx^2}$ in terms of $y$ only.", marks: 3 },
            { label: "c", prompt: "Verify that $y=\\sinh x$ satisfies $\\frac{d^2y}{dx^2}=y$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Derivatives", statement: "$\\frac{d}{dx}\\sinh x=\\cosh x$, $\\frac{d}{dx}\\cosh x=\\sinh x$." },
              { kind: "definition", name: "Hyperbolic identity", statement: "$\\cosh^2x-\\sinh^2x=1$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{dy}{dx}=\\cosh x$ by definition of derivative.", working: "dy/dx=cosh x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\frac{d^2y}{dx^2}=\\frac{d}{dx}\\cosh x=\\sinh x$.", working: "d2y=sinh x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both derivatives.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Since $\\sinh x=y$, $\\frac{d^2y}{dx^2}=\\sinh x=y$ directly.", working: "d2y/dx2=y", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alternatively $\\cosh x=\\sqrt{1+\\sinh^2x}=\\sqrt{1+y^2}$ if needed.", working: "sqrt(1+y^2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "From (b), $\\frac{d^2y}{dx^2}=y$ — the DE is satisfied.", working: "verified", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Confirm $\\sinh$ solves $y''=y$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Similarly $\\cosh$ also satisfies it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y'=\\cosh x$, $y''=\\sinh x$ (b) $y''=y$ (c) verified",
            commonErrors: ["Confusing $\\frac{d}{dx}\\sinh$ and $\\frac{d}{dx}\\cosh$."],
          },
        },
      ],
    },
    {
      id: "edialfm-u2-hyp-inverse",
      title: "Inverse hyperbolic functions",
      skill: "Differentiate and integrate inverse hyperbolic functions and use logarithmic forms.",
      lesson: {
        sections: [
          {
            heading: "Logarithmic forms",
            body: "$\\text{arsinh}\\,x=\\ln(x+\\sqrt{x^2+1})$ for all $x$; $\\text{arcosh}\\,x=\\ln(x+\\sqrt{x^2-1})$ for $x\\ge1$; $\\text{artanh}\\,x=\\frac12\\ln\\frac{1+x}{1-x}$ for $|x|<1$. Derive them by writing $y=\\text{arsinh}\\,x$, so $x=\\sinh y=\\frac{e^y-e^{-y}}{2}$, solving the quadratic in $e^y$.",
          },
          {
            heading: "Derivatives",
            body: "$\\frac{d}{dx}\\text{arsinh}\\,x=\\frac{1}{\\sqrt{x^2+1}}$, $\\frac{d}{dx}\\text{arcosh}\\,x=\\frac{1}{\\sqrt{x^2-1}}$ ($x>1$), $\\frac{d}{dx}\\text{artanh}\\,x=\\frac{1}{1-x^2}$ ($|x|<1$). Note the sign difference from inverse trig.",
          },
          {
            heading: "Integrals",
            body: "Standard results: $\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\text{arsinh}\\frac{x}{a}+c$; $\\int\\frac{dx}{\\sqrt{x^2-a^2}}=\\text{arcosh}\\frac{x}{a}+c$ ($x>a$); $\\int\\frac{dx}{a^2-x^2}=\\frac{1}{a}\\text{artanh}\\frac{x}{a}+c$ ($|x|<a$).",
          },
        ],
        keyFormulas: [
          { name: "Derivatives", statement: "$\\frac{d}{dx}\\text{arsinh}\\,x=\\frac{1}{\\sqrt{x^2+1}}$, $\\frac{d}{dx}\\text{artanh}\\,x=\\frac{1}{1-x^2}$" },
          { name: "Standard integrals", statement: "$\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\text{arsinh}\\frac{x}{a}+c$" },
        ],
        workedExample: {
          problem: "Differentiate $y=\\text{artanh}(2x)$.",
          solution: "Chain rule: $\\frac{dy}{dx}=\\frac{1}{1-(2x)^2}\\cdot2=\\frac{2}{1-4x^2}$, valid for $|x|<\\frac12$.",
        },
      },
      questions: [
        {
          id: "edialfm-hypi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}\\text{arsinh}\\,x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{x^2+1}$" },
              { id: "b", text: "$\\frac{1}{1+x^2}$" },
              { id: "c", text: "$\\frac{1}{\\sqrt{1-x^2}}$" },
              { id: "d", text: "$\\frac{1}{\\sqrt{x^2+1}}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "$\\frac{d}{dx}\\text{arsinh}\\,x=\\frac{1}{\\sqrt{x^2+1}}$." }],
            steps: [{ reasoning: "Standard result.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\frac{1}{\\sqrt{x^2+1}}$",
          },
        },
        {
          id: "edialfm-hypi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 \\frac{dx}{\\sqrt{x^2+4}}$.",
          response: {
            type: "numeric",
            parts: [{ label: "integral", answer: 0.48121, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard integral", statement: "$\\int\\frac{dx}{\\sqrt{x^2+a^2}}=\\text{arsinh}\\frac{x}{a}$." }],
            steps: [
              { reasoning: "$a=2$: $\\left[\\text{arsinh}\\frac{x}{2}\\right]_0^1=\\text{arsinh}\\frac12-0$.", working: "arsinh(0.5)", marks: 1, markCode: "M" },
              { reasoning: "$\\text{arsinh}\\,0.5=\\ln(0.5+\\sqrt{1.25})=\\ln(0.5+1.118)=\\ln1.618\\approx0.481$.", working: "0.481", marks: 1, markCode: "M" },
              { reasoning: "State value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.481$",
            commonErrors: ["Using wrong $a$; forgetting lower limit."],
          },
        },
        {
          id: "edialfm-hypi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $\\int \\frac{dx}{4-x^2}$ for $|x|<2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard integral", statement: "$\\int\\frac{dx}{a^2-x^2}=\\frac{1}{a}\\text{artanh}\\frac{x}{a}$." }],
            steps: [
              { reasoning: "$a=2$: $\\int\\frac{dx}{4-x^2}=\\frac12\\text{artanh}\\frac{x}{2}+c$.", working: "(1/2)artanh(x/2)", marks: 1, markCode: "M" },
              { reasoning: "State domain $|x|<2$.", marks: 1, markCode: "A" },
              { reasoning: "Verify by differentiating: $\\frac12\\cdot\\frac{1}{1-x^2/4}\\cdot\\frac12=\\frac{1}{4-x^2}$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac12\\text{artanh}\\frac{x}{2}+c$, $|x|<2$",
            commonErrors: ["Confusing with $\\text{arctanh}$ vs $\\frac{1}{1-x^2}$ forms."],
          },
        },
        {
          id: "edialfm-hypi-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Derive the logarithmic form of $\\text{arsinh}\\,x$.",
          parts: [
            { label: "a", prompt: "Let $y=\\text{arsinh}\\,x$, so $x=\\sinh y$. Write this in exponentials.", marks: 3 },
            { label: "b", prompt: "Rearrange to a quadratic in $e^y$ and solve.", marks: 4 },
            { label: "c", prompt: "Hence show $\\text{arsinh}\\,x=\\ln(x+\\sqrt{x^2+1})$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivation", statement: "Set $x=\\sinh y$, solve for $e^y$." }],
            steps: [
              { part: "a", reasoning: "$x=\\frac{e^y-e^{-y}}{2}$; multiply by $2e^y$: $2xe^y=e^{2y}-1$.", working: "2xe^y=e^{2y}-1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange: $e^{2y}-2xe^y-1=0$ — quadratic in $e^y$.", working: "quadratic", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State equation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$e^y=\\frac{2x\\pm\\sqrt{4x^2+4}}{2}=x\\pm\\sqrt{x^2+1}$.", working: "roots", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reject $x-\\sqrt{x^2+1}<0$ since $e^y>0$; take $+$ root.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So $e^y=x+\\sqrt{x^2+1}$.", working: "e^y", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State solution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y=\\ln(x+\\sqrt{x^2+1})$; since $y=\\text{arsinh}\\,x$, result follows.", working: "arsinh=ln(...)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State logarithmic form.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude derivation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\text{arsinh}\\,x=\\ln(x+\\sqrt{x^2+1})$",
            commonErrors: ["Taking the negative root.", "Algebra slips in quadratic formula."],
          },
        },
      ],
    },
  ],
};
