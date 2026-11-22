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
            { id: "a", text: "$\\int u\\,dv = uv - \\int v\\,du$" },
            { id: "b", text: "$\\int u\\,dv = u/v$" },
            { id: "c", text: "$\\int u\\,dv = uv + \\int v\\,du$" },
            { id: "d", text: "$\\int u\\,dv = \\int u + \\int v$" },
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
        {
          id: "cialfm-u5-s3-pa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Using LIATE to choose $u$ in $\\int x\\ln x\\,dx$, $u$ should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\ln x$" },
            { id: "b", text: "Either" },
            { id: "c", text: "$dx$" },
            { id: "d", text: "$x$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "LIATE", statement: "Log comes before Algebraic." }],
            steps: [{ reasoning: "$\\ln x$ is chosen as $u$ since L precedes A.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln x$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^1 x^2\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.333, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Power rule", statement: "Standard integral." }],
            steps: [
              { reasoning: "$\\left[\\frac{x^3}{3}\\right]_0^1 = \\frac13 \\approx 0.333$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac13$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 xe^x\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts definite", statement: "$u=x$, $dv=e^x dx$." }],
            steps: [
              { reasoning: "Indefinite: $xe^x - e^x$.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate 0 to 1: $(e-e)-(0-1) = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $\\int x^2 e^x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts twice", statement: "Reduce power of $x$ each time." }],
            steps: [
              { reasoning: "$u=x^2$, $dv=e^x dx$ → $x^2e^x - 2\\int xe^x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$\\int xe^x dx = xe^x - e^x$.", marks: 1, markCode: "M" },
              { reasoning: "$= x^2e^x - 2xe^x + 2e^x + c = e^x(x^2-2x+2)+c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$e^x(x^2-2x+2)+c$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\int x\\ln x\\,dx$, the correct choice of $u$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{x}$" },
            { id: "b", text: "$x$" },
            { id: "c", text: "Impossible" },
            { id: "d", text: "$\\ln x$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "LIATE", statement: "Log before algebraic." }],
            steps: [{ reasoning: "$u = \\ln x$ simplifies $du = \\frac{1}{x}dx$ with the $x$ factor.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln x$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\int_0^1 e^x\\,dx = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "$e+1$" },
            { id: "c", text: "$e-1$" },
            { id: "d", text: "$e$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Exponential integral", statement: "$\\int e^x dx = e^x$." }],
            steps: [{ reasoning: "$e^1 - e^0 = e-1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$e-1$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate $\\int x^2\\sin x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts twice", statement: "Two rounds needed." }],
            steps: [
              { reasoning: "$u=x^2$, $dv=\\sin x dx$ → $-x^2\\cos x + 2\\int x\\cos x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$\\int x\\cos x dx = x\\sin x + \\cos x$.", marks: 1, markCode: "M" },
              { reasoning: "$= -x^2\\cos x + 2x\\sin x + 2\\cos x + c$.", marks: 1, markCode: "M" },
              { reasoning: "Collect terms: $\\cos x(2-x^2) + 2x\\sin x + c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$-x^2\\cos x + 2x\\sin x + 2\\cos x + c$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\int e^x\\sin x\\,dx$, integration by parts must be applied…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Three times" },
            { id: "b", text: "Twice, producing the same integral again" },
            { id: "c", text: "Never" },
            { id: "d", text: "Once only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cyclic integral", statement: "Integral reappears after two applications." }],
            steps: [{ reasoning: "Solve by letting $I$ = integral, applying parts twice, and rearranging.", marks: 1, markCode: "A" }],
            finalAnswer: "Twice",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\int_0^1 x\\ln x\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.25 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts definite", statement: "$u=\\ln x$, $dv=x dx$." }],
            steps: [
              { reasoning: "Indefinite: $\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=1$: $0 - \\frac14$; at $x=0$: limit is 0.", marks: 1, markCode: "M" },
              { reasoning: "$= -\\frac14$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-0.25$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac14$",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 \\ln x\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts", statement: "$u=\\ln x$, $dv=dx$." }],
            steps: [
              { reasoning: "$\\int\\ln x\\,dx = x\\ln x - \\int 1\\,dx = x\\ln x - x$.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate 0 to 1: $(0-1) - (0-0) = -1$ (using $\\lim_{x\\to0}x\\ln x = 0$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In $\\int u\\,dv = uv - \\int v\\,du$, the sign before the second integral is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Either" },
            { id: "b", text: "Minus" },
            { id: "c", text: "Depends on $u$" },
            { id: "d", text: "Plus" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "By parts", statement: "Standard formula." }],
            steps: [{ reasoning: "It is $uv - \\int v\\,du$.", marks: 1, markCode: "A" }],
            finalAnswer: "Minus",
          },
        },
        {
          id: "cialfm-u5-s3-pa-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $I = \\int x\\cos x\\,dx$.",
          parts: [
            { label: "a", prompt: "Find $I$ using integration by parts.", marks: 2 },
            { label: "b", prompt: "Hence evaluate $\\int_0^{\\pi/2} x\\cos x\\,dx$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "By parts + limits", statement: "$u=x$, $dv=\\cos x dx$." }],
            steps: [
              { reasoning: "$I = x\\sin x - \\int\\sin x\\,dx = x\\sin x + \\cos x + c$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a) shown.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Evaluate: $(\\frac{\\pi}{2}\\cdot1 + 0) - (0 + 1) = \\frac{\\pi}{2} - 1 \\approx 0.571$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): $\\frac{\\pi}{2}-1$.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$x\\sin x + \\cos x + c$; $\\frac{\\pi}{2}-1$",
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
            { id: "a", text: "$\\int f(g(u))du$" },
            { id: "b", text: "$\\int f(x)dx$" },
            { id: "c", text: "$\\int f(u)du$" },
            { id: "d", text: "$\\int g(u)du$" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u5-s3-su-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\int x^2\\sqrt{1+x^3}\\,dx$, the natural substitution is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$u = 1+x^3$" },
            { id: "b", text: "$u = x$" },
            { id: "c", text: "$u = x^2$" },
            { id: "d", text: "$u = \\sqrt{1+x^3}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Spotting substitution", statement: "$3x^2$ is derivative of $x^3$." }],
            steps: [{ reasoning: "$u = 1+x^3$ gives $du = 3x^2\\,dx$, matching the $x^2$ factor.", marks: 1, markCode: "A" }],
            finalAnswer: "$u = 1+x^3$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^1 \\frac{2x}{1+x^2}\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.693, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "$u=1+x^2$." }],
            steps: [
              { reasoning: "$u=1+x^2$, $du=2x dx$ → $\\int_1^2 \\frac{du}{u} = [\\ln u]_1^2$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\ln 2 \\approx 0.693$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln 2$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 xe^{x^2}\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.859, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution definite", statement: "$u=x^2$." }],
            steps: [
              { reasoning: "$u=x^2$, $du=2x dx$ → $\\frac12\\int_0^1 e^u du = \\frac12[e^u]_0^1$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{e-1}{2} \\approx 0.859$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{e-1}{2}$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int 2x\\cos(x^2)\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "$u=x^2$." }],
            steps: [
              { reasoning: "$u=x^2$, $du=2x dx$ → $\\int\\cos u\\,du = \\sin u + c$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\sin(x^2)+c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sin(x^2)+c$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\int_0^1 \\frac{3x^2}{1+x^3}\\,dx$, choose $u =$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1+x^3$" },
            { id: "b", text: "$x$" },
            { id: "c", text: "$x^3$" },
            { id: "d", text: "$\\frac{1}{1+x^3}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Derivative of denominator." }],
            steps: [{ reasoning: "$du = 3x^2 dx$ matches numerator when $u = 1+x^3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1+x^3$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^{\\pi/2} \\sin x\\cos x\\,dx$ using $u=\\sin x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution definite", statement: "New limits 0 to 1." }],
            steps: [
              { reasoning: "$\\int_0^1 u\\,du = \\left[\\frac{u^2}{2}\\right]_0^1 = \\frac12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac12$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\int \\frac{x}{1+x^2}\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "$u=1+x^2$." }],
            steps: [
              { reasoning: "$u=1+x^2$, $du=2x dx$ → $\\frac12\\int\\frac{du}{u}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac12\\ln u + c$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac12\\ln(1+x^2)+c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac12\\ln(1+x^2)+c$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When using substitution in a definite integral, the limits must be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Transformed using $u=g(x)$" },
            { id: "b", text: "Left unchanged" },
            { id: "c", text: "Doubled" },
            { id: "d", text: "Reversed always" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Definite substitution", statement: "Change limits to $u$-values." }],
            steps: [{ reasoning: "New limits are $g(a)$ and $g(b)$.", marks: 1, markCode: "A" }],
            finalAnswer: "Transformed using $u=g(x)$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\int_0^1 x\\sqrt{1+x^2}\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.609, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution definite", statement: "$u=1+x^2$." }],
            steps: [
              { reasoning: "$u=1+x^2$, $du=2x dx$ → $\\frac12\\int_1^2 u^{1/2}du$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac12\\cdot\\frac23\\left[u^{3/2}\\right]_1^2 = \\frac13(2\\sqrt2-1)$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{2\\sqrt2-1}{3} \\approx 0.276$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2\\sqrt2-1}{3}$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 e^{3x}\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6.362, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Exponential integral", statement: "$\\int e^{3x}dx = \\frac{e^{3x}}{3}$." }],
            steps: [
              { reasoning: "$\\left[\\frac{e^{3x}}{3}\\right]_0^1 = \\frac{e^3-1}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$e^3 \\approx 20.086$ → $\\frac{19.086}{3} \\approx 6.362$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{e^3-1}{3}$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For $\\int \\frac{\\ln x}{x}\\,dx$, the natural substitution is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$u = (\\ln x)^2$" },
            { id: "b", text: "$u = \\frac{1}{x}$" },
            { id: "c", text: "$u = \\ln x$" },
            { id: "d", text: "$u = x$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "$du = \\frac{1}{x}dx$." }],
            steps: [{ reasoning: "$u = \\ln x$ gives $du = \\frac{dx}{x}$, matching the integrand.", marks: 1, markCode: "A" }],
            finalAnswer: "$u = \\ln x$",
          },
        },
        {
          id: "cialfm-u5-s3-su-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $I = \\int_0^1 3x^2(1+x^3)^2\\,dx$.",
          parts: [
            { label: "a", prompt: "Use the substitution $u = 1+x^3$ to rewrite $I$.", marks: 2 },
            { label: "b", prompt: "Hence evaluate $I$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution definite", statement: "Change limits too." }],
            steps: [
              { reasoning: "$u=1+x^3$, $du=3x^2dx$; limits 1 to 2 → $I = \\int_1^2 u^2\\,du$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a): $\\int_1^2 u^2\\,du$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$= \\left[\\frac{u^3}{3}\\right]_1^2 = \\frac{8-1}{3} = \\frac73$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): $\\frac73$.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$\\int_1^2 u^2\\,du$; $\\frac73$",
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
