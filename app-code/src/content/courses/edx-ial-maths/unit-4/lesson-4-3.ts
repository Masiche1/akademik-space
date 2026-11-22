import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edial-maths-u4-lesson-4-3",
  code: "4-3",
  title: "Differential Equations, Hyperbolic Functions and Improper Integrals",
  goal: "I CAN solve first-order differential equations by separation of variables, use hyperbolic identities and evaluate improper integrals.",
  standards: ["WMA14 P4", "Differential equations", "Hyperbolic functions", "Improper integrals"],
  vocabulary: [
    { term: "Separation of variables", definition: "Rearranging $\\frac{dy}{dx}=f(x)g(y)$ into $\\frac{dy}{g(y)}=f(x)\\,dx$ and integrating both sides." },
    { term: "Particular solution", definition: "The specific solution obtained after applying an initial condition to the general solution." },
    { term: "Hyperbolic sine/cosine", definition: "$\\sinh x=\\frac{e^x-e^{-x}}{2}$, $\\cosh x=\\frac{e^x+e^{-x}}{2}$, with $\\cosh^2x-\\sinh^2x=1$." },
    { term: "Improper integral", definition: "An integral with an infinite limit or discontinuity, evaluated as a limit, e.g. $\\int_0^\\infty=\\lim_{a\\to\\infty}\\int_0^a$." },
    { term: "Convergent integral", definition: "An improper integral whose limit exists and is finite." },
  ],
  concepts: [
    {
      id: "edial-maths-u4-diffeq",
      title: "First-order differential equations",
      skill: "Solve separable differential equations, find particular solutions from initial conditions and interpret them in context.",
      lesson: {
        sections: [
          {
            heading: "Separation of variables",
            body: "For $\\frac{dy}{dx}=f(x)g(y)$: write $\\frac{dy}{g(y)}=f(x)\\,dx$, integrate both sides, and include $+c$. Always check for equilibrium solutions where $g(y)=0$ separately.",
          },
          {
            heading: "Particular solutions",
            body: "Apply the initial/boundary condition to find $c$, giving the particular solution. For exponential-type equations the solution often has form $y=Ae^{kx}+B$.",
          },
          {
            heading: "Modelling",
            body: "Differential equations model rates of change: population growth, cooling (Newton's law), mixing problems. Identify $\\frac{dy}{dx}$ as a rate, translate the verbal description into an equation, then solve.",
          },
        ],
        keyFormulas: [
          { name: "Separation", statement: "$\\int\\frac{dy}{g(y)}=\\int f(x)\\,dx+c$" },
          { name: "Hyperbolic identity", statement: "$\\cosh^2x-\\sinh^2x=1$" },
        ],
        workedExample: {
          problem: "Solve $\\frac{dy}{dx}=2xy$ with $y(0)=3$.",
          solution: "Separate: $\\frac{dy}{y}=2x\\,dx$, so $\\ln|y|=x^2+c$, $y=Ae^{x^2}$. At $x=0$: $A=3$, so $y=3e^{x^2}$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u4-diffeq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The equation $\\frac{dy}{dx}=3x^2$ is solved by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Separating variables" },
              { id: "b", text: "Substituting $y=e^{x^3}$" },
              { id: "c", text: "Integrating both sides with respect to $x$" },
              { id: "d", text: "Differentiating again" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Direct integration", statement: "$y=\\int 3x^2\\,dx=x^3+c$." },
            ],
            steps: [
              { reasoning: "This is a direct integration problem.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Integrating both sides",
            commonErrors: ["Overcomplicating a direct integration."],
          },
        },
        {
          id: "edial-maths-u4-diffeq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{dy}{dx}=\\frac{y}{x}$ for $x>0$, $y>0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Separation", statement: "$\\frac{dy}{y}=\\frac{dx}{x}$." },
            ],
            steps: [
              { reasoning: "Separate: $\\frac{dy}{y}=\\frac{dx}{x}$.", working: "\\ln y=\\ln x+c", marks: 1, markCode: "M" },
              { reasoning: "Exponentiate: $y=e^c x=A x$.", working: "y=Ax", marks: 1, markCode: "M" },
              { reasoning: "State $y=Ax$ (or $y=kx$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=Ax$ for constant $A$",
            commonErrors: ["Dropping the constant of integration."],
          },
        },
        {
          id: "edial-maths-u4-diffeq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A population $P$ grows according to $\\frac{dP}{dt}=0.1P(1000-P)$ with $P(0)=100$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Separation", statement: "Partial fractions needed for $\\frac{1}{P(1000-P)}$." },
            ],
            steps: [
              { reasoning: "Separate: $\\int\\frac{dP}{P(1000-P)}=\\int0.1\\,dt$; partial fractions $\\frac{1}{P(1000-P)}=\\frac{1}{1000}\\left(\\frac{1}{P}+\\frac{1}{1000-P}\\right)$.", working: "PF", marks: 1, markCode: "M" },
              { reasoning: "Integrate: $\\frac{1}{1000}\\ln\\left|\\frac{P}{1000-P}\\right|=0.1t+c$.", working: "ln|P/(1000-P)|=100t+c'", marks: 1, markCode: "M" },
              { reasoning: "Apply $P(0)=100$: $\\frac{100}{900}=\\frac19=e^{c'}$, so $c'=-\\ln9$.", working: "c'=-ln9", marks: 1, markCode: "M" },
              { reasoning: "Solve for $P$: $P=\\frac{1000}{1+9e^{-100t}}$ (logistic curve).", working: "P=1000/(1+9e^{-100t})", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P=\\frac{1000}{1+9e^{-100t}}$",
            commonErrors: ["Algebraic slips in partial fractions."],
            examinerNote: "Award method marks for correct separation and PF even if final form differs.",
          },
        },
        {
          id: "edial-maths-u4-diffeq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The temperature $T$ of an object in a room at $20^\\circ$C obeys Newton's law of cooling $\\frac{dT}{dt}=-k(T-20)$.",
          parts: [
            { label: "a", prompt: "Solve the differential equation to find $T$ in terms of $t$.", marks: 4 },
            { label: "b", prompt: "Given $T(0)=80$ and $T(10)=50$, find $k$ and the particular solution.", marks: 4 },
            { label: "c", prompt: "Find the temperature after a long time.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Separation", statement: "$\\frac{dT}{T-20}=-k\\,dt$." },
            ],
            steps: [
              { part: "a", reasoning: "Separate: $\\frac{dT}{T-20}=-k\\,dt$.", working: "\\ln|T-20|=-kt+c", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Exponentiate: $T-20=Ae^{-kt}$, so $T=20+Ae^{-kt}$.", working: "T=20+Ae^{-kt}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State general solution.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check equilibrium $T=20$ is a valid steady state.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$T(0)=80$: $80=20+A$, so $A=60$; $T=20+60e^{-kt}$.", working: "T=20+60e^{-kt}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$T(10)=50$: $50=20+60e^{-10k}$, so $e^{-10k}=\\frac12$.", working: "e^{-10k}=1/2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$-10k=\\ln\\frac12=-\\ln2$, $k=\\frac{\\ln2}{10}\\approx0.0693$.", working: "k=0.0693", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State $T=20+60e^{-0.0693t}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "As $t\\to\\infty$, $e^{-kt}\\to0$, so $T\\to20^\\circ$C.", working: "T\\to20", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interpret: object approaches room temperature.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $T=20+Ae^{-kt}$ (b) $k=\\frac{\\ln2}{10}\\approx0.0693$, $T=20+60e^{-0.0693t}$ (c) $20^\\circ$C",
            commonErrors: ["Sign error in separation.", "Using $T(10)$ incorrectly."],
          },
        },
      ],
    },
    {
      id: "edial-maths-u4-hyperbolic",
      title: "Hyperbolic functions and improper integrals",
      skill: "Use hyperbolic identities and evaluate convergent improper integrals.",
      lesson: {
        sections: [
          {
            heading: "Hyperbolic functions",
            body: "$\\sinh x=\\frac{e^x-e^{-x}}{2}$, $\\cosh x=\\frac{e^x+e^{-x}}{2}$, $\\tanh x=\\frac{\\sinh x}{\\cosh x}$. Key identities: $\\cosh^2x-\\sinh^2x=1$ (like $\\cos^2+\\sin^2=1$ but with a minus), $\\frac{d}{dx}\\sinh x=\\cosh x$, $\\frac{d}{dx}\\cosh x=\\sinh x$.",
          },
          {
            heading: "Improper integrals — infinite limits",
            body: "$\\int_a^\\infty f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx$. Converges if the limit is finite. Classic: $\\int_0^\\infty e^{-x}dx=1$.",
          },
          {
            heading: "Improper integrals — discontinuities",
            body: "If $f$ is undefined at $c$ inside $[a,b]$, split: $\\int_a^b=\\int_a^c+\\int_c^b$ with one-sided limits. $\\int_0^1\\frac{dx}{\\sqrt{x}}=2$ converges despite the singularity at $0$.",
          },
        ],
        keyFormulas: [
          { name: "Hyperbolic identity", statement: "$\\cosh^2x-\\sinh^2x=1$" },
          { name: "Improper limit", statement: "$\\int_a^\\infty f\\,dx=\\lim_{b\\to\\infty}\\int_a^b f\\,dx$" },
        ],
        workedExample: {
          problem: "Evaluate $\\int_0^\\infty e^{-2x}\\,dx$.",
          solution: "$\\lim_{b\\to\\infty}\\left[-\\frac12e^{-2x}\\right]_0^b=\\lim_{b\\to\\infty}\\left(-\\frac12e^{-2b}+\\frac12\\right)=\\frac12$ — convergent.",
        },
      },
      questions: [
        {
          id: "edial-maths-u4-hyp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\cosh^2x-\\sinh^2x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$e^{2x}$" },
              { id: "b", text: "$\\cos 2x$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hyperbolic identity", statement: "$\\cosh^2x-\\sinh^2x=1$." },
            ],
            steps: [
              { reasoning: "Direct from definitions: $\\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=\\frac{4}{4}=1$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $1$",
            commonErrors: ["Confusing with $\\cos^2+\\sin^2$ sign."],
          },
        },
        {
          id: "edial-maths-u4-hyp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_1^\\infty \\frac{1}{x^2}\\,dx$.",
          response: {
            type: "numeric",
            parts: [{ label: "integral", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Improper integral", statement: "$\\lim_{b\\to\\infty}\\int_1^b x^{-2}dx$." },
            ],
            steps: [
              { reasoning: "$\\int x^{-2}dx=-\\frac{1}{x}$; evaluate $[-\\frac1x]_1^b=1-\\frac1b$.", working: "1-1/b", marks: 1, markCode: "M" },
              { reasoning: "Take limit: $\\lim_{b\\to\\infty}(1-\\frac1b)=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Converges to $1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ (convergent)",
            commonErrors: ["Forgetting the limit."],
          },
        },
        {
          id: "edial-maths-u4-hyp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Determine whether $\\int_0^1 \\frac{dx}{x}$ converges or diverges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Improper integral", statement: "Split at the singularity: $\\lim_{a\\to0^+}\\int_a^1\\frac{dx}{x}$." },
            ],
            steps: [
              { reasoning: "Integrand undefined at $0$; write as limit.", working: "lim a->0+", marks: 1, markCode: "M" },
              { reasoning: "$\\int_a^1\\frac{dx}{x}=[\\ln x]_a^1=0-\\ln a=-\\ln a$.", working: "-ln a", marks: 1, markCode: "M" },
              { reasoning: "$\\lim_{a\\to0^+}(-\\ln a)=+\\infty$.", marks: 1, markCode: "M" },
              { reasoning: "The integral diverges.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diverges",
            commonErrors: ["Treating it as a proper integral."],
          },
        },
        {
          id: "edial-maths-u4-hyp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider $I_n=\\int_0^{\\infty} x^n e^{-x}\\,dx$ for integer $n\\ge0$.",
          parts: [
            { label: "a", prompt: "Evaluate $I_0$.", marks: 2 },
            { label: "b", prompt: "Use integration by parts to show $I_n=nI_{n-1}$ for $n\\ge1$.", marks: 5 },
            { label: "c", prompt: "Hence find $I_3$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "By parts", statement: "$\\int u\\,dv=uv-\\int v\\,du$." },
            ],
            steps: [
              { part: "a", reasoning: "$I_0=\\int_0^\\infty e^{-x}dx=\\lim_{b\\to\\infty}[-e^{-x}]_0^b=1$.", working: "I_0=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $I_0=1$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Let $u=x^n$, $dv=e^{-x}dx$, so $du=nx^{n-1}dx$, $v=-e^{-x}$.", working: "u,v", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$I_n=\\left[-x^ne^{-x}\\right]_0^\\infty+n\\int_0^\\infty x^{n-1}e^{-x}dx$.", working: "boundary+nI_{n-1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Boundary term: at $\\infty$, $x^ne^{-x}\\to0$; at $0$, $0$ (for $n\\ge1$). So boundary $=0$.", working: "0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude $I_n=nI_{n-1}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Justify $x^ne^{-x}\\to0$ as $x\\to\\infty$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "$I_1=1\\cdot I_0=1$, $I_2=2I_1=2$, $I_3=3I_2=6$.", working: "6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $I_3=6$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Recognise $I_n=n!$ pattern.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $I_0=1$ (b) $I_n=nI_{n-1}$ (c) $I_3=6$",
            commonErrors: ["Boundary term mishandled at infinity.", "Index errors in recursion."],
          },
        },
      ],
    },
  ],
};
