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
            { id: "a", text: "$x>3$" },
            { id: "b", text: "$x\\neq3$" },
            { id: "c", text: "$x\\geq3$" },
            { id: "d", text: "All real $x$" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciam-u2-s1-do-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The domain of $f(x)=\\frac{1}{x+2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\neq-2$" },
            { id: "b", text: "$x\\geq-2$" },
            { id: "c", text: "$x>-2$" },
            { id: "d", text: "All real $x$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Domain", statement: "Exclude zeros of denominator." }], steps: [{ reasoning: "$x=-2$ makes the denominator zero.", marks: 1, markCode: "A" }], finalAnswer: "$x\\neq-2$" },
        },
        {
          id: "ciam-u2-s1-do-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the largest value of $x$ in the domain of $f(x)=\\sqrt{5-x}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Radicand $\\geq0$." }], steps: [
            { reasoning: "$5-x\\geq0$ → $x\\leq5$.", marks: 1, markCode: "M" },
            { reasoning: "Largest allowed value is 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq5$" },
        },
        {
          id: "ciam-u2-s1-do-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the domain of $f(x)=\\sqrt{3-x}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Radicand $\\geq0$." }], steps: [
            { reasoning: "$3-x\\geq0$ → $x\\leq3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq3$" },
        },
        {
          id: "ciam-u2-s1-do-q8", difficulty: "core", totalMarks: 1,
          stem: "The domain of $f(x)=\\ln(2x-4)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x>2$" },
            { id: "b", text: "$x\\neq2$" },
            { id: "c", text: "$x\\geq2$" },
            { id: "d", text: "$x>4$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Log domain", statement: "Argument $>0$." }], steps: [{ reasoning: "$2x-4>0$ → $x>2$.", marks: 1, markCode: "A" }], finalAnswer: "$x>2$" },
        },
        {
          id: "ciam-u2-s1-do-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the positive value excluded from the domain of $f(x)=\\frac{1}{x^2-4}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Denominator non-zero." }], steps: [
            { reasoning: "$x^2-4=0$ → $x=\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "Positive excluded value is 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u2-s1-do-q10", difficulty: "core", totalMarks: 4,
          stem: "Find the domain of $f(x)=\\frac{\\sqrt{x-1}}{x-3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Combined constraints", statement: "Apply all rules." }], steps: [
            { reasoning: "Need $x-1\\geq0$ → $x\\geq1$ and $x-3\\neq0$ → $x\\neq3$.", marks: 1, markCode: "M" },
            { reasoning: "Domain: $x\\geq1$, $x\\neq3$.", marks: 1, markCode: "M" },
            { reasoning: "Written as $[1,3)\\cup(3,\\infty)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\geq1,\\ x\\neq3$" },
        },
        {
          id: "ciam-u2-s1-do-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The domain of $f(x)=\\frac{\\sqrt{x}}{x-2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\geq0,\\ x\\neq2$" },
            { id: "b", text: "$x\\neq2$" },
            { id: "c", text: "$x>0,\\ x\\neq2$" },
            { id: "d", text: "$x\\geq0$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Combined constraints", statement: "Radicand and denominator." }], steps: [{ reasoning: "$x\\geq0$ and $x\\neq2$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\geq0,\\ x\\neq2$" },
        },
        {
          id: "ciam-u2-s1-do-q12", difficulty: "challenge", totalMarks: 2,
          stem: "What is the lower bound (not included) of the domain of $f(x)=\\ln(x-4)$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Log domain", statement: "Argument $>0$." }], steps: [
            { reasoning: "$x-4>0$ → $x>4$.", marks: 1, markCode: "M" },
            { reasoning: "Lower bound is 4, excluded.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u2-s1-do-q13", difficulty: "core", totalMarks: 4,
          stem: "Find the domain of $f(x)=\\sqrt{4-x^2}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Radicand $\\geq0$." }], steps: [
            { reasoning: "$4-x^2\\geq0$ → $x^2\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "$-2\\leq x\\leq2$.", marks: 1, markCode: "M" },
            { reasoning: "Check endpoints give $\\sqrt0=0$." , marks: 1, markCode: "M" },
            { reasoning: "Domain: $[-2,2]$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-2\\leq x\\leq2$" },
        },
        {
          id: "ciam-u2-s1-do-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The domain of $f(x)=\\frac{1}{\\sqrt{x}-2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x>0,\\ x\\neq4$" },
            { id: "b", text: "$x\\geq0,\\ x\\neq4$" },
            { id: "c", text: "$x>4$" },
            { id: "d", text: "$x\\geq4$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Combined constraints", statement: "$\\sqrt{x}\\neq2$." }], steps: [{ reasoning: "$x\\geq0$ and $\\sqrt{x}\\neq2$ → $x\\neq4$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\geq0,\\ x\\neq4$" },
        },
        {
          id: "ciam-u2-s1-do-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the lower bound of the domain of $f(x)=\\sqrt{2x-6}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Domain", statement: "Radicand $\\geq0$." }], steps: [
            { reasoning: "$2x-6\\geq0$ → $x\\geq3$.", marks: 1, markCode: "M" },
            { reasoning: "Lower bound is 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\geq3$" },
        },
        {
          id: "ciam-u2-s1-do-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The domain of $f(x)=\\ln(x^2-4)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2<x<2$" },
            { id: "b", text: "$x<-2$ or $x>2$" },
            { id: "c", text: "$x>2$" },
            { id: "d", text: "$x\\neq\\pm2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Log domain", statement: "Argument $>0$." }], steps: [{ reasoning: "$x^2-4>0$ → $x<-2$ or $x>2$.", marks: 1, markCode: "A" }], finalAnswer: "$x<-2$ or $x>2$" },
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
            { id: "a", text: "$[0,\\infty)$" },
            { id: "b", text: "$[1,\\infty)$" },
            { id: "c", text: "$\\mathbb{R}$" },
            { id: "d", text: "$(-\\infty,0]$" },
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
        {
          id: "ciam-u2-s1-ra-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The range of $f(x)=x^2+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[3,\\infty)$" },
            { id: "b", text: "$(-\\infty,3]$" },
            { id: "c", text: "$\\mathbb{R}$" },
            { id: "d", text: "$[0,\\infty)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Range", statement: "Squares $\\geq0$." }], steps: [{ reasoning: "$x^2+3\\geq3$.", marks: 1, markCode: "A" }], finalAnswer: "$[3,\\infty)$" },
        },
        {
          id: "ciam-u2-s1-ra-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the minimum value of $f(x)=x^2-6x+10$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=(x-3)^2+1$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum value is 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "ciam-u2-s1-ra-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Find the range of $f(x)=-x^2+4x-1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=-(x-2)^2+3$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum value is 3; as $x\\to\\infty$, $f\\to-\\infty$.", marks: 1, markCode: "M" },
            { reasoning: "Range: $(-\\infty,3]$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-\\infty,3]$" },
        },
        {
          id: "ciam-u2-s1-ra-q8", difficulty: "core", totalMarks: 1,
          stem: "The range of $f(x)=\\frac{1}{x^2+4}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,\\infty)$" },
            { id: "b", text: "$[\\frac14,\\infty)$" },
            { id: "c", text: "$(0,\\frac14]$" },
            { id: "d", text: "$[0,\\frac14]$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Reciprocal range", statement: "Bound denominator." }], steps: [{ reasoning: "$x^2+4\\geq4$ → $0<\\frac{1}{x^2+4}\\leq\\frac14$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,\\frac14]$" },
        },
        {
          id: "ciam-u2-s1-ra-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the minimum value of $f(x)=x^2-2x+6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=(x-1)^2+5$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum value is 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u2-s1-ra-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the range of $f(x)=3-x^2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Quadratic range", statement: "Maximum at vertex." }], steps: [
            { reasoning: "$x^2\\geq0$ → $-x^2\\leq0$ → $3-x^2\\leq3$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum is 3 at $x=0$; range unbounded below.", marks: 1, markCode: "M" },
            { reasoning: "Range: $(-\\infty,3]$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-\\infty,3]$" },
        },
        {
          id: "ciam-u2-s1-ra-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The range of $f(x)=(x-1)^2+2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[2,\\infty)$" },
            { id: "b", text: "$\\mathbb{R}$" },
            { id: "c", text: "$(-\\infty,2]$" },
            { id: "d", text: "$[1,\\infty)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Range", statement: "Minimum value." }], steps: [{ reasoning: "Minimum is 2, so range is $[2,\\infty)$.", marks: 1, markCode: "A" }], finalAnswer: "$[2,\\infty)$" },
        },
        {
          id: "ciam-u2-s1-ra-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Find the maximum value of $f(x)=-2x^2+8x-3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=-2(x-2)^2+5$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum value is 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u2-s1-ra-q13", difficulty: "core", totalMarks: 4,
          stem: "Find the range of $f(x)=x^2+4x+1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=(x+2)^2-3$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum value is $-3$.", marks: 1, markCode: "M" },
            { reasoning: "As $x\\to\\pm\\infty$, $f\\to\\infty$.", marks: 1, markCode: "M" },
            { reasoning: "Range: $[-3,\\infty)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$[-3,\\infty)$" },
        },
        {
          id: "ciam-u2-s1-ra-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The range of $f(x)=-x^2-6x-5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-\\infty,4]$" },
            { id: "b", text: "$\\mathbb{R}$" },
            { id: "c", text: "$[4,\\infty)$" },
            { id: "d", text: "$(-\\infty,-4]$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Read maximum." }], steps: [{ reasoning: "$f(x)=-(x+3)^2+4$, so range is $(-\\infty,4]$.", marks: 1, markCode: "A" }], finalAnswer: "$(-\\infty,4]$" },
        },
        {
          id: "ciam-u2-s1-ra-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the maximum value of $f(x)=4-x^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "property", name: "Quadratic range", statement: "Maximum at vertex." }], steps: [
            { reasoning: "$x^2\\geq0$ → $4-x^2\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum value is 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u2-s1-ra-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The range of $f(x)=\\frac{1}{(x-2)^2}+1$ (for $x\\neq2$) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[1,\\infty)$" },
            { id: "b", text: "$(0,\\infty)$" },
            { id: "c", text: "$\\mathbb{R}$" },
            { id: "d", text: "$(1,\\infty)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Reciprocal range", statement: "Bound denominator." }], steps: [{ reasoning: "$(x-2)^2>0$ → $\\frac{1}{(x-2)^2}>0$ → $f(x)>1$.", marks: 1, markCode: "A" }], finalAnswer: "$(1,\\infty)$" },
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
