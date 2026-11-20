import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cialfm-u5-lesson-5-3",
  code: "5-3",
  title: "Advanced integration techniques",
  goal: "I CAN integrate using substitution, parts and partial fractions.",
  standards: ["9231 P1: further calculus — integration"],
  vocabulary: [
    { term: "Integration by parts", definition: "$\\int u\\,dv = uv - \\int v\\,du$." },
    { term: "Substitution", definition: "Replacing variable to simplify integral." },
    { term: "Partial fractions", definition: "Splitting fraction into simpler terms before integrating." },
    { term: "Standard integral", definition: "$\\int x^n dx = \\frac{x^{n+1}}{n+1}+c$ ($n\\neq-1$)." },
  ],
  concepts: [
    {
      id: "cialfm-u5-s3-parts",
      title: "Integration by parts",
      skill: "Apply integration by parts at A Level.",
      lesson: {
        sections: [
          {
            heading: "Formula",
            body: "$\\int u\\,dv = uv - \\int v\\,du$. Choose $u$ by LIATE (Log, Inverse trig, Algebraic, Trig, Exponential) — earlier letters are $u$.",
          },
          {
            heading: "Example",
            body: "$\\int x e^x\\,dx$: $u=x$, $dv=e^x dx$ → $xe^x - \\int e^x dx = xe^x - e^x + c$.",
          },
        ],
        keyFormulas: [
          { name: "By parts", statement: "$\\int u\\,dv = uv - \\int v\\,du$" },
        ],
        workedExample: {
          problem: "Evaluate $\\int x\\sin x\\,dx$.",
          solution: "$u=x$, $dv=\\sin x dx$ → $-x\\cos x + \\int\\cos x dx = -x\\cos x + \\sin x + c$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-s3-pa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Integration by parts uses…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\int u\\,dv = uv - \\int v\\,du$" }, { id: "b", text: "$\\int u\\,dv = uv + \\int v\\,du$" }, { id: "c", text: "$\\int u\\,dv = u/v$" }, { id: "d", text: "$\\int u\\,dv = \\int u + \\int v$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "By parts", statement: "Standard formula." }],
            steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$uv - \\int v\\,du$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\int x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Power rule", statement: "Standard integral." }],
            steps: [
              { reasoning: "$\\int x\\,dx = \\frac{x^2}{2} + c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x^2}{2}+c$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int x e^{2x}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts", statement: "$u=x$, $dv=e^{2x}dx$." }],
            steps: [
              { reasoning: "$= \\frac{x e^{2x}}{2} - \\int \\frac{e^{2x}}{2}dx = \\frac{xe^{2x}}{2} - \\frac{e^{2x}}{4} + c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Check by differentiating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{e^{2x}(2x-1)}{4}+c$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $\\int x\\ln x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts", statement: "$u=\\ln x$, $dv=x\\,dx$." }],
            steps: [
              { reasoning: "$u=\\ln x$, $dv=x dx$ → $v=\\frac{x^2}{2}$, $du=\\frac{1}{x}dx$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2}\\cdot\\frac{1}{x}dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{x^2}{4}(2\\ln x - 1)+c$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x^2}{4}(2\\ln x-1)+c$",
          },
        },
      ],
    },
    {
      id: "cialfm-u5-s3-substitution",
      title: "Integration by substitution",
      skill: "Use substitution to simplify integrals.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "Let $u = g(x)$, then $du = g'(x)dx$ and $\\int f(g(x))g'(x)dx = \\int f(u)du$.",
          },
          {
            heading: "Example",
            body: "$\\int 2x\\cos(x^2)dx$: let $u=x^2$, $du=2x\\,dx$ → $\\int\\cos u\\,du = \\sin u + c = \\sin(x^2)+c$.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "$\\int f(g(x))g'(x)dx = \\int f(u)du$" },
        ],
        workedExample: {
          problem: "Evaluate $\\int \\frac{\\ln x}{x}dx$.",
          solution: "$u=\\ln x$, $du=\\frac{1}{x}dx$ → $\\int u\\,du = \\frac{u^2}{2}+c = \\frac{(\\ln x)^2}{2}+c$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-s3-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\int f(g(x))g'(x)dx$, substitution $u=g(x)$ gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\int f(u)du$" }, { id: "b", text: "$\\int f(g(u))du$" }, { id: "c", text: "$\\int f(x)dx$" }, { id: "d", text: "$\\int g(u)du$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Substitution", statement: "Standard rule." }],
            steps: [{ reasoning: "$\\int f(u)du$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\int f(u)du$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\int 2x\\,dx$ using $u=x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Recognise derivative." }],
            steps: [
              { reasoning: "$u=x^2$, $du=2x dx$ → $\\int du = u+c = x^2+c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+c$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int \\frac{e^x}{1+e^x}dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "$u=1+e^x$." }],
            steps: [
              { reasoning: "$u=1+e^x$, $du=e^x dx$ → $\\int\\frac{du}{u} = \\ln|u|+c$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\ln(1+e^x)+c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\ln(1+e^x)+c$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $\\int_0^{\\pi/2} \\sin^2 x\\cos x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution definite", statement: "$u=\\sin x$." }],
            steps: [
              { reasoning: "$u=\\sin x$, $du=\\cos x dx$ → $\\int_0^1 u^2 du$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\left[\\frac{u^3}{3}\\right]_0^1 = \\frac{1}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Check limits transformed correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{3}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u5-s3-int-notes",
      title: "Advanced integration — revision notes",
      summary: "By parts, substitution, standard forms.",
      sections: [
        { heading: "Parts", body: "$\\int u\\,dv = uv - \\int v\\,du$. LIATE for choosing $u$." },
        { heading: "Substitution", body: "Spot $g'(x)$ inside integrand. Change limits for definite integrals." },
      ],
    },
  ],
};
