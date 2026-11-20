import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ciam-u2-lesson-2-5",
  code: "2-5",
  title: "Exponential and Logarithmic Functions",
  goal: "I CAN work with exponential and logarithmic functions and their laws.",
  standards: ["0606: exponential and logarithmic functions"],
  vocabulary: [
    { term: "Exponential function", definition: "$f(x)=a^x$ — grows by constant factor." },
    { term: "Logarithm", definition: "$\\log_a x$ = power to which $a$ must be raised to give $x$." },
    { term: "Natural log", definition: "$\\ln x=\\log_e x$ where $e\\approx2.718$." },
    { term: "Laws of logs", definition: "$\\log(ab)=\\log a+\\log b$; $\\log\\frac{a}{b}=\\log a-\\log b$; $\\log a^n=n\\log a$." },
  ],
  concepts: [
    {
      id: "ciam-u2-s5-exp",
      title: "Exponential functions",
      skill: "Evaluate and interpret exponential functions at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Growth and decay", body: "In $y=a^x$, each increase of 1 in $x$ multiplies $y$ by $a$. When $a>1$ the function grows without bound (growth); when $0<a<1$ it decays towards zero. Exponential models appear wherever a quantity changes by a fixed percentage — population growth, compound interest, radioactive decay." },
          { heading: "Solving", body: "Equations like $a^x=b$ are solved using logarithms: take $\\log$ of both sides and use $x=\\frac{\\log b}{\\log a}$. Equations where the unknown appears in the exponent always need logs; equations where it appears linearly can be solved directly." },
        ],
        keyFormulas: [
          { name: "Solve", statement: "$a^x=b$ → $x=\\frac{\\log b}{\\log a}$" },
          { name: "Growth factor", statement: "$y=a^x$: multiply by $a$ each step" },
        ],
        workedExample: { problem: "Solve $3^x=81$.", solution: "Either recognise $81=3^4$ so $x=4$, or use logs: $x=\\frac{\\log 81}{\\log 3}=\\frac{4\\log 3}{\\log 3}=4$." },
      },
      questions: [
        {
          id: "ciam-u2-s5-ex-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$2^5$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" }, { id: "b", text: "10" }, { id: "c", text: "25" }, { id: "d", text: "64" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Exponent", statement: "Repeated multiplication." }], steps: [{ reasoning: "$2^5=2\\times2\\times2\\times2\\times2=32$.", marks: 1, markCode: "A" }], finalAnswer: "32" },
        },
        {
          id: "ciam-u2-s5-ex-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $5^x=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers or use logs." }], steps: [
            { reasoning: "$25=5^2$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "ciam-u2-s5-ex-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $2^x=10$, giving $x$ to 3 s.f.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Logarithmic solution", statement: "Take logs." }], steps: [
            { reasoning: "$x=\\frac{\\log 10}{\\log 2}=\\frac{1}{0.30103}\\approx3.32$.", marks: 1, markCode: "M" },
            { reasoning: "Using $\\ln$: $x=\\frac{\\ln10}{\\ln2}=\\frac{2.3026}{0.6931}\\approx3.32$. Same result.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\approx3.32$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\approx3.32$" },
        },
        {
          id: "ciam-u2-s5-ex-q4", difficulty: "core", totalMarks: 4,
          stem: "A population doubles every 3 hours. Starting from 500, find the population after 10 hours.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential model", statement: "$P=P_0\\cdot2^{t/3}$." }], steps: [
            { reasoning: "$P=500\\times2^{10/3}$.", marks: 1, markCode: "M" },
            { reasoning: "$2^{10/3}=2^3\\times2^{1/3}=8\\times1.2599\\approx10.08$.", marks: 1, markCode: "M" },
            { reasoning: "$P\\approx500\\times10.08=5040$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: approximately 5040.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\approx5040$" },
        },
      ],
    },
    {
      id: "ciam-u2-s5-logs",
      title: "Logarithms",
      skill: "Apply laws of logarithms at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Definition", body: "$\\log_a x=y$ means $a^y=x$. This is just the inverse of exponentiation: logarithms undo powers. The base must be positive and not equal to 1, and the argument $x$ must be positive. $\\log_a a=1$ and $\\log_a 1=0$ follow directly from the definition." },
          { heading: "Laws", body: "Three laws do all the work: $\\log(ab)=\\log a+\\log b$ turns multiplication into addition; $\\log\\frac{a}{b}=\\log a-\\log b$ turns division into subtraction; $\\log a^n=n\\log a$ brings powers down as multipliers. Together they let you expand, condense and solve logarithmic equations." },
        ],
        keyFormulas: [
          { name: "Definition", statement: "$\\log_a x=y \\iff a^y=x$" },
          { name: "Product law", statement: "$\\log(ab)=\\log a+\\log b$" },
          { name: "Power law", statement: "$\\log a^n=n\\log a$" },
        ],
        workedExample: { problem: "Solve $\\log_2 x+\\log_2(x-2)=3$.", solution: "$\\log_2[x(x-2)]=3$ → $x(x-2)=8$ → $x^2-2x-8=0$ → $(x-4)(x+2)=0$ → $x=4$ (reject $x=-2$ since argument must be positive)." },
      },
      questions: [
        {
          id: "ciam-u2-s5-lo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\log_3 9$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" }, { id: "b", text: "3" }, { id: "c", text: "$\\frac13$" }, { id: "d", text: "27" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$a^y=x$." }], steps: [{ reasoning: "$3^2=9$ → $\\log_3 9=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "ciam-u2-s5-lo-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $\\log_5 125$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [
            { reasoning: "$125=5^3$ → $\\log_5 125=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s5-lo-q3", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\log 12-\\log 3+\\log 5$ (any base).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log laws", statement: "Condense." }], steps: [
            { reasoning: "$\\log 12-\\log 3=\\log\\frac{12}{3}=\\log4$.", marks: 1, markCode: "M" },
            { reasoning: "$\\log4+\\log5=\\log20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\log20$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\log20$" },
        },
        {
          id: "ciam-u2-s5-lo-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $\\log_2 x+\\log_2(x+6)=4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log equation", statement: "Combine, exponentiate, check domain." }], steps: [
            { reasoning: "$\\log_2[x(x+6)]=4$ → $x(x+6)=16$ → $x^2+6x-16=0$ → $(x+8)(x-2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ or $x=-8$; reject $-8$ (log argument must be positive).", marks: 1, markCode: "M" },
            { reasoning: "Check $x=2$: $\\log_2 2+\\log_2 8=1+3=4$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u2-s5-elog-notes", title: "Exponentials and logarithms — notes", summary: "Definitions, laws, solving.",
      sections: [
        { heading: "Exponentials", body: "$a^x=b$ → $x=\\frac{\\log b}{\\log a}$. Growth if $a>1$, decay if $0<a<1$." },
        { heading: "Log laws", body: "$\\log(ab)=\\log a+\\log b$; $\\log\\frac ab=\\log a-\\log b$; $\\log a^n=n\\log a$. Always check arguments are positive." },
      ] },
  ],
};
