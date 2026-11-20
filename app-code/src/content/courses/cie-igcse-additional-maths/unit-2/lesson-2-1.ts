import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ciam-u2-lesson-2-1",
  code: "2-1",
  title: "Domain and Range",
  goal: "I CAN determine the domain and range of functions.",
  standards: ["0606: functions"],
  vocabulary: [
    { term: "Domain", definition: "Set of input values $x$ for which $f(x)$ is defined." },
    { term: "Range", definition: "Set of output values $f(x)$." },
    { term: "Restricted domain", definition: "Domain limited by problem context or function type." },
    { term: "Natural domain", definition: "Largest set of $x$ where function is defined." },
  ],
  concepts: [
    {
      id: "ciam-u2-s1-domain",
      title: "Finding domains",
      skill: "Determine domains at IGCSE level.",
      lesson: {
        sections: [
          { heading: "The idea", body: "The domain is the set of inputs the function can actually accept — values that would make the function undefined are excluded. Different function types impose different restrictions: a fraction $\\frac{1}{g(x)}$ requires $g(x)\\neq0$; a square root $\\sqrt{g(x)}$ requires $g(x)\\geq0$; a logarithm $\\ln g(x)$ requires $g(x)>0$; $\\tan x$ is undefined at $x=\\frac{\\pi}{2}+k\\pi$. Polynomials accept every real number. When several restrictions apply, combine them — the domain is the intersection of all conditions." },
          { heading: "Checking your answer", body: "Always verify by substitution: pick values just inside and outside your claimed boundary and confirm the function behaves as expected. For example, if you claim $x\\geq1$ for $\\sqrt{x-1}$, test $x=0$ (should fail) and $x=1$ (should give 0). Writing the domain as an inequality, interval, or set — whichever the question asks for — matters for full marks." },
        ],
        keyFormulas: [
          { name: "Restrictions", statement: "$\\frac1{g(x)}$: $g(x)\\neq0$; $\\sqrt{g(x)}$: $g(x)\\geq0$; $\\ln g(x)$: $g(x)>0$" },
        ],
        workedExample: { problem: "Find domain of $f(x)=\\sqrt{4-x^2}$.", solution: "Need $4-x^2\\geq0$ → $x^2\\leq4$ → $-2\\leq x\\leq2$. Check endpoints: $x=\\pm2$ gives $\\sqrt0=0$ ✓; $x=3$ gives $\\sqrt{-5}$ undefined ✓. Domain: $[-2,2]$." },
      },
      questions: [
        {
          id: "ciam-u2-s1-do-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The domain of $f(x)=\\frac{1}{x-3}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\neq3$" }, { id: "b", text: "$x>3$" }, { id: "c", text: "$x\\geq3$" }, { id: "d", text: "All real $x$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Domain", statement: "Exclude zeros of denominator." }], steps: [{ reasoning: "$x=3$ makes denominator zero.", marks: 1, markCode: "A" }], finalAnswer: "$x\\neq3$" },
        },
        {
          id: "ciam-u2-s1-do-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the domain of $f(x)=\\sqrt{x+2}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Radicand $\\geq0$." }], steps: [
            { reasoning: "$x+2\\geq0$ → $x\\geq-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\geq-2$" },
        },
        {
          id: "ciam-u2-s1-do-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the domain of $f(x)=\\ln(x-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log domain", statement: "Argument $>0$." }], steps: [
            { reasoning: "$x-1>0$ → $x>1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x>1$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\ln$ undefined for $\\leq0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x>1$" },
        },
        {
          id: "ciam-u2-s1-do-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the domain of $f(x)=\\frac{\\sqrt{x}}{x-4}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined constraints", statement: "Apply all rules." }], steps: [
            { reasoning: "Need $x\\geq0$ (square root) AND $x\\neq4$ (denominator).", marks: 1, markCode: "M" },
            { reasoning: "Domain: $x\\geq0$, $x\\neq4$.", marks: 1, markCode: "M" },
            { reasoning: "Written as $[0,4)\\cup(4,\\infty)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\geq0, x\\neq4$" },
        },
      ],
    },
    {
      id: "ciam-u2-s1-range",
      title: "Finding ranges",
      skill: "Determine ranges of functions at IGCSE level.",
      lesson: {
        sections: [
          { heading: "What the range captures", body: "The range is the set of outputs the function actually produces — the y-values on its graph. For simple functions you can reason directly: a linear function $ax+b$ produces every real number; $x^2$ produces only non-negative values; $e^x$ produces only positive values; $\\sin x$ oscillates between $-1$ and $1$. For quadratics, completing the square reveals the vertex, which gives the minimum or maximum output." },
          { heading: "Strategy", body: "Work from the inside out: bound the inner expression first, then apply the outer function's effect. For $f(x)=\\frac{1}{x^2+1}$, note $x^2+1\\geq1$, so the reciprocal satisfies $0<\\frac{1}{x^2+1}\\leq1$. Watch for functions whose range is bounded by asymptotes or periodic behaviour — sketching the graph is often the fastest check." },
        ],
        keyFormulas: [
          { name: "Quadratic range", statement: "Vertex gives min or max" },
        ],
        workedExample: { problem: "Find range of $f(x)=2-x^2$.", solution: "$x^2\\geq0$ → $-x^2\\leq0$ → $2-x^2\\leq2$. Maximum is 2 (at $x=0$); as $x\\to\\infty$, $f\\to-\\infty$. Range: $(-\\infty,2]$." },
      },
      questions: [
        {
          id: "ciam-u2-s1-ra-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The range of $f(x)=x^2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[0,\\infty)$" }, { id: "b", text: "$\\mathbb{R}$" }, { id: "c", text: "$(-\\infty,0]$" }, { id: "d", text: "$[1,\\infty)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Range", statement: "Squares $\\geq0$." }], steps: [{ reasoning: "$x^2\\geq0$ always.", marks: 1, markCode: "A" }], finalAnswer: "$[0,\\infty)$" },
        },
        {
          id: "ciam-u2-s1-ra-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the range of $f(x)=3x+1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Linear range", statement: "All reals." }], steps: [
            { reasoning: "Linear function → all real outputs.", marks: 1, markCode: "M" },
            { reasoning: "Range: $\\mathbb{R}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\mathbb{R}$" },
        },
        {
          id: "ciam-u2-s1-ra-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the range of $f(x)=x^2-4x+7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=(x-2)^2+3$.", marks: 1, markCode: "M" },
            { reasoning: "Min value 3 → range $[3,\\infty)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$[3,\\infty)$" },
        },
        {
          id: "ciam-u2-s1-ra-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the range of $f(x)=\\frac{1}{x^2+1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reciprocal range", statement: "Bound the denominator." }], steps: [
            { reasoning: "$x^2+1\\geq1$ → $\\frac{1}{x^2+1}\\leq1$.", marks: 1, markCode: "M" },
            { reasoning: "Also $\\frac{1}{x^2+1}>0$ (numerator positive).", marks: 1, markCode: "M" },
            { reasoning: "Range: $(0,1]$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0,1]$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u2-s1-dr-notes", title: "Domain and range — notes", summary: "Rules for domains, methods for ranges.",
      sections: [
        { heading: "Domain", body: "Exclude: zeros of denominators, negative radicands, $\\ln$ args $\\leq0$, $\\tan$ asymptotes." },
        { heading: "Range", body: "Complete square for quadratics; consider bounds of component functions." },
      ] },
  ],
};
