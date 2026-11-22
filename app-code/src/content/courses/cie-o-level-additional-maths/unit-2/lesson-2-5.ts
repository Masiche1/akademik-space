import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "olam-u2-lesson-2-5",
  code: "2-5",
  title: "Exponential and Logarithmic Functions",
  goal: "I CAN work with exponential and logarithmic functions and their laws.",
  standards: ["4037: exponential and logarithmic functions"],
  vocabulary: [
    { term: "Exponential function", definition: "$f(x)=a^x$ — grows by constant factor." },
    { term: "Logarithm", definition: "$\\log_a x$ = power to which $a$ must be raised to give $x$." },
    { term: "Natural log", definition: "$\\ln x=\\log_e x$ where $e\\approx2.718$." },
    { term: "Laws of logs", definition: "$\\log(ab)=\\log a+\\log b$; $\\log\\frac{a}{b}=\\log a-\\log b$; $\\log a^n=n\\log a$." },
  ],
  concepts: [
    {
      id: "olam-u2-s5-exp",
      title: "Exponential functions",
      skill: "Evaluate and interpret exponential functions at O Level.",
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
          id: "olam-u2-s5-ex-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$2^5$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" },
            { id: "b", text: "64" },
            { id: "c", text: "10" },
            { id: "d", text: "25" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Exponent", statement: "Repeated multiplication." }], steps: [{ reasoning: "$2^5=2\\times2\\times2\\times2\\times2=32$.", marks: 1, markCode: "A" }], finalAnswer: "32" },
        },
        {
          id: "olam-u2-s5-ex-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $5^x=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers or use logs." }], steps: [
            { reasoning: "$25=5^2$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "olam-u2-s5-ex-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $2^x=10$, giving $x$ to 3 s.f.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Logarithmic solution", statement: "Take logs." }], steps: [
            { reasoning: "$x=\\frac{\\log 10}{\\log 2}=\\frac{1}{0.30103}\\approx3.32$.", marks: 1, markCode: "M" },
            { reasoning: "Using $\\ln$: $x=\\frac{\\ln10}{\\ln2}=\\frac{2.3026}{0.6931}\\approx3.32$. Same result.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\approx3.32$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\approx3.32$" },
        },
        {
          id: "olam-u2-s5-ex-q4", difficulty: "core", totalMarks: 4,
          stem: "A population doubles every 3 hours. Starting from 500, find the population after 10 hours.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential model", statement: "$P=P_0\\cdot2^{t/3}$." }], steps: [
            { reasoning: "$P=500\\times2^{10/3}$.", marks: 1, markCode: "M" },
            { reasoning: "$2^{10/3}=2^3\\times2^{1/3}=8\\times1.2599\\approx10.08$.", marks: 1, markCode: "M" },
            { reasoning: "$P\\approx500\\times10.08=5040$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: approximately 5040.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\approx5040$" },
        },
        {
          id: "olam-u2-s5-ex-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$3^4$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "81" },
            { id: "b", text: "27" },
            { id: "c", text: "12" },
            { id: "d", text: "64" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Exponent", statement: "Repeated multiplication." }], steps: [{ reasoning: "$3^4=3\\times3\\times3\\times3=81$.", marks: 1, markCode: "A" }], finalAnswer: "81" },
        },
        {
          id: "olam-u2-s5-ex-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The solution of $4^x=64$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=4$" },
            { id: "b", text: "$x=3$" },
            { id: "c", text: "$x=16$" },
            { id: "d", text: "$x=8$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [{ reasoning: "$64=4^3$ → $x=3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3$" },
        },
        {
          id: "olam-u2-s5-ex-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The solution of $2^x=32$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=16$" },
            { id: "b", text: "$x=4$" },
            { id: "c", text: "$x=5$" },
            { id: "d", text: "$x=6$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [{ reasoning: "$32=2^5$ → $x=5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=5$" },
        },
        {
          id: "olam-u2-s5-ex-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\left(\\frac{1}{2}\\right)^3$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac{1}{8}$" },
            { id: "b", text: "$\\frac{1}{6}$" },
            { id: "c", text: "$8$" },
            { id: "d", text: "$\\frac{1}{8}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Exponent", statement: "Negative base powers." }], steps: [{ reasoning: "$\\frac{1}{2^3}=\\frac{1}{8}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{8}$" },
        },
        {
          id: "olam-u2-s5-ex-q9", difficulty: "core", totalMarks: 1,
          stem: "The graph of $y=2^x$ passes through the point…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,0)$" },
            { id: "b", text: "$(1,0)$" },
            { id: "c", text: "$(0,2)$" },
            { id: "d", text: "$(0,1)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Exponential graph", statement: "$a^0=1$." }], steps: [{ reasoning: "At $x=0$, $y=2^0=1$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,1)$" },
        },
        {
          id: "olam-u2-s5-ex-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $3^x=243$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [
            { reasoning: "$243=3^5$ → $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=5$" },
        },
        {
          id: "olam-u2-s5-ex-q11", difficulty: "core", totalMarks: 3,
          stem: "Solve $2^x=20$, giving $x$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.32, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "technique", name: "Logarithmic solution", statement: "Take logs." }], steps: [
            { reasoning: "$x=\\frac{\\ln20}{\\ln2}=\\frac{2.9957}{0.6931}\\approx4.32$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\approx4.32$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2^{4.32}\\approx20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\approx4.32$" },
        },
        {
          id: "olam-u2-s5-ex-q12", difficulty: "core", totalMarks: 3,
          stem: "A quantity is modelled by $P=200\\times1.5^t$. Find $P$ when $t=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 450 }] },
          markscheme: { principles: [{ kind: "technique", name: "Exponential model", statement: "Substitute." }], steps: [
            { reasoning: "$P=200\\times1.5^2=200\\times2.25$.", marks: 1, markCode: "M" },
            { reasoning: "$=450$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 450.", marks: 1, markCode: "A" },
          ], finalAnswer: "450" },
        },
        {
          id: "olam-u2-s5-ex-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $e^x=10$, giving $x$ to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.3, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "technique", name: "Natural exponential", statement: "$x=\\ln10$." }], steps: [
            { reasoning: "$x=\\ln10\\approx2.3026$.", marks: 1, markCode: "M" },
            { reasoning: "To 3 s.f.: $x\\approx2.30$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\approx2.30$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\approx2.30$" },
        },
        {
          id: "olam-u2-s5-ex-q14", difficulty: "core", totalMarks: 3,
          stem: "Solve $9^x=27$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Same base", statement: "Write as powers of 3." }], steps: [
            { reasoning: "$9^x=3^{2x}$ and $27=3^3$.", marks: 1, markCode: "M" },
            { reasoning: "$3^{2x}=3^3$ → $2x=3$ → $x=\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac32$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac32$" },
        },
        {
          id: "olam-u2-s5-ex-q15", difficulty: "core", totalMarks: 3,
          stem: "Solve $5^{x+1}=125$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [
            { reasoning: "$125=5^3$ → $x+1=3$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "olam-u2-s5-ex-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A bacterial culture triples every 2 hours. Starting from 100 bacteria, find the population after 8 hours.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential model", statement: "$P=P_0\\cdot3^{t/2}$." }], steps: [
            { reasoning: "$P=100\\times3^{8/2}=100\\times3^4$.", marks: 1, markCode: "M" },
            { reasoning: "$3^4=81$ → $P=100\\times81=8100$.", marks: 1, markCode: "M" },
            { reasoning: "Check: 4 doublings of the tripling cycle in 8 h. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8100 bacteria.", marks: 1, markCode: "A" },
          ], finalAnswer: "8100" },
        },
      ],
    },
    {
      id: "olam-u2-s5-logs",
      title: "Logarithms",
      skill: "Apply laws of logarithms at O Level.",
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
          id: "olam-u2-s5-lo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$\\log_3 9$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "$\\frac13$" },
            { id: "c", text: "3" },
            { id: "d", text: "27" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$a^y=x$." }], steps: [{ reasoning: "$3^2=9$ → $\\log_3 9=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olam-u2-s5-lo-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $\\log_5 125$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [
            { reasoning: "$125=5^3$ → $\\log_5 125=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u2-s5-lo-q3", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\log 12-\\log 3+\\log 5$ (any base).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log laws", statement: "Condense." }], steps: [
            { reasoning: "$\\log 12-\\log 3=\\log\\frac{12}{3}=\\log4$.", marks: 1, markCode: "M" },
            { reasoning: "$\\log4+\\log5=\\log20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\log20$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\log20$" },
        },
        {
          id: "olam-u2-s5-lo-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $\\log_2 x+\\log_2(x+6)=4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log equation", statement: "Combine, exponentiate, check domain." }], steps: [
            { reasoning: "$\\log_2[x(x+6)]=4$ → $x(x+6)=16$ → $x^2+6x-16=0$ → $(x+8)(x-2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ or $x=-8$; reject $-8$ (log argument must be positive).", marks: 1, markCode: "M" },
            { reasoning: "Check $x=2$: $\\log_2 2+\\log_2 8=1+3=4$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "olam-u2-s5-lo-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\log_2 8$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "8" },
            { id: "c", text: "2" },
            { id: "d", text: "3" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$2^y=8$." }], steps: [{ reasoning: "$2^3=8$ → $\\log_2 8=3$.", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "olam-u2-s5-lo-q6", difficulty: "foundation", totalMarks: 1,
          stem: "$\\log_4 16$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "1" },
            { id: "c", text: "2" },
            { id: "d", text: "4" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$4^y=16$." }], steps: [{ reasoning: "$4^2=16$ → $\\log_4 16=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olam-u2-s5-lo-q7", difficulty: "core", totalMarks: 1,
          stem: "$\\ln e$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "e" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "$\\frac{1}{e}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Natural log", statement: "$\\ln e=1$." }], steps: [{ reasoning: "$e^1=e$ → $\\ln e=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u2-s5-lo-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\log_2 32$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "16" },
            { id: "c", text: "2" },
            { id: "d", text: "6" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [{ reasoning: "$32=2^5$ → $\\log_2 32=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olam-u2-s5-lo-q9", difficulty: "core", totalMarks: 1,
          stem: "$\\log_3 1$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "undefined" },
            { id: "b", text: "3" },
            { id: "c", text: "1" },
            { id: "d", text: "0" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Log of 1", statement: "$a^0=1$." }], steps: [{ reasoning: "$3^0=1$ → $\\log_3 1=0$.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olam-u2-s5-lo-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $\\log_3 27$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [
            { reasoning: "$27=3^3$ → $\\log_3 27=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u2-s5-lo-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $\\log_2 64$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [
            { reasoning: "$64=2^6$ → $\\log_2 64=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olam-u2-s5-lo-q12", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $\\log_{10} 0.01$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Negative logs", statement: "$10^{-2}=0.01$." }], steps: [
            { reasoning: "$0.01=10^{-2}$ → $\\log_{10}0.01=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\log 0.01=\\log 1-\\log 100=0-2=-2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-2$" },
        },
        {
          id: "olam-u2-s5-lo-q13", difficulty: "core", totalMarks: 3,
          stem: "If $\\log_2 x=5$, find the value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 32 }] },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "Convert to index form." }], steps: [
            { reasoning: "$x=2^5=32$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 32.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\log_2 32=5$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "32" },
        },
        {
          id: "olam-u2-s5-lo-q14", difficulty: "core", totalMarks: 3,
          stem: "Express $\\log 18$ in terms of $\\log 2$ and $\\log 3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log laws", statement: "Expand using laws." }], steps: [
            { reasoning: "$18=2\\times3^2$.", marks: 1, markCode: "M" },
            { reasoning: "$\\log 18=\\log2+\\log9=\\log2+2\\log3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\log2+2\\log3$" },
        },
        {
          id: "olam-u2-s5-lo-q15", difficulty: "core", totalMarks: 4,
          stem: "Solve $\\log_3 x+\\log_3(x-6)=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log equation", statement: "Combine, exponentiate, check." }], steps: [
            { reasoning: "$\\log_3[x(x-6)]=3$ → $x(x-6)=27$ → $x^2-6x-27=0$ → $(x-9)(x+3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=9$ or $x=-3$; reject $-3$ (arguments must be positive).", marks: 1, markCode: "M" },
            { reasoning: "Check $x=9$: $\\log_3 9+\\log_3 3=2+1=3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=9$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=9$" },
        },
        {
          id: "olam-u2-s5-lo-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $\\log_2(x+1)+\\log_2(x-1)=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log equation", statement: "Combine then solve." }], steps: [
            { reasoning: "$\\log_2[(x+1)(x-1)]=3$ → $x^2-1=8$ → $x^2=9$ → $x=\\pm3$.", marks: 1, markCode: "M" },
            { reasoning: "Need $x-1>0$ → $x>1$, so reject $x=-3$; $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\log_2 4+\\log_2 2=2+1=3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u2-s5-elog-notes", title: "Exponentials and logarithms — notes", summary: "Definitions, laws, solving.",
      sections: [
        { heading: "Exponentials", body: "$a^x=b$ → $x=\\frac{\\log b}{\\log a}$. Growth if $a>1$, decay if $0<a<1$." },
        { heading: "Log laws", body: "$\\log(ab)=\\log a+\\log b$; $\\log\\frac ab=\\log a-\\log b$; $\\log a^n=n\\log a$. Always check arguments are positive." },
      ] },
  ],
};
