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
            { id: "a", text: "10" },
            { id: "b", text: "32" },
            { id: "c", text: "64" },
            { id: "d", text: "25" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciam-u2-s5-ex-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$3^4$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "12" },
            { id: "b", text: "27" },
            { id: "c", text: "81" },
            { id: "d", text: "64" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Exponent", statement: "Repeated multiplication." }], steps: [{ reasoning: "$3^4=81$.", marks: 1, markCode: "A" }], finalAnswer: "81" },
        },
        {
          id: "ciam-u2-s5-ex-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $4^x=64$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers or use logs." }], steps: [
            { reasoning: "$64=4^3$ → $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "ciam-u2-s5-ex-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $5^x=125$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [
            { reasoning: "$125=5^3$ → $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "ciam-u2-s5-ex-q8", difficulty: "core", totalMarks: 1,
          stem: "$2^x=32$ gives $x=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "10" },
            { id: "d", text: "16" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [{ reasoning: "$32=2^5$ → $x=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "ciam-u2-s5-ex-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve $10^x=1000$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [
            { reasoning: "$1000=10^3$ → $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s5-ex-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $2^x=20$, giving $x$ to 3 s.f.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Logarithmic solution", statement: "Take logs." }], steps: [
            { reasoning: "$x=\\frac{\\ln20}{\\ln2}=\\frac{2.9957}{0.6931}\\approx4.32$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\approx4.32$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2^{4.32}\\approx20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\approx4.32$" },
        },
        {
          id: "ciam-u2-s5-ex-q11", difficulty: "challenge", totalMarks: 1,
          stem: "$3^x=\\frac19$ gives $x=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2$" },
            { id: "b", text: "$-\\frac13$" },
            { id: "c", text: "2" },
            { id: "d", text: "$\\frac13$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Negative exponent", statement: "$a^{-n}=\\frac{1}{a^n}$." }], steps: [{ reasoning: "$\\frac19=3^{-2}$ → $x=-2$.", marks: 1, markCode: "A" }], finalAnswer: "$-2$" },
        },
        {
          id: "ciam-u2-s5-ex-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A population triples every 4 hours. Starting from 200, find the population after 8 hours.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1800 }] },
          markscheme: { principles: [{ kind: "technique", name: "Exponential model", statement: "$P=P_0\\cdot3^{t/4}$." }], steps: [
            { reasoning: "$P=200\\times3^{8/4}=200\\times3^2=200\\times9$.", marks: 1, markCode: "M" },
            { reasoning: "$=1800$.", marks: 1, markCode: "A" },
          ], finalAnswer: "1800" },
        },
        {
          id: "ciam-u2-s5-ex-q13", difficulty: "core", totalMarks: 3,
          stem: "Solve $2^{x+1}=32$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [
            { reasoning: "$32=2^5$ → $x+1=5$.", marks: 1, markCode: "M" },
            { reasoning: "$x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$" },
        },
        {
          id: "ciam-u2-s5-ex-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A quantity halves every 5 hours. What fraction remains after 15 hours?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac14$" },
            { id: "b", text: "$\\frac15$" },
            { id: "c", text: "$\\frac1{15}$" },
            { id: "d", text: "$\\frac18$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Exponential decay", statement: "Multiply by $\\frac12$ each period." }], steps: [{ reasoning: "Three half-lives: $\\left(\\frac12\\right)^3=\\frac18$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac18$" },
        },
        {
          id: "ciam-u2-s5-ex-q15", difficulty: "core", totalMarks: 2,
          stem: "Solve $5^{2x}=125$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Exponential equation", statement: "Match powers." }], steps: [
            { reasoning: "$125=5^3$ → $2x=3$.", marks: 1, markCode: "M" },
            { reasoning: "$x=1.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1.5$" },
        },
        {
          id: "ciam-u2-s5-ex-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The graph of $y=\\left(\\frac12\\right)^x$ shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Oscillation" },
            { id: "b", text: "Growth without bound" },
            { id: "c", text: "A straight line" },
            { id: "d", text: "Decay towards 0" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Growth/decay", statement: "$0<a<1$ decays." }], steps: [{ reasoning: "Base $\\frac12<1$, so values decrease towards 0.", marks: 1, markCode: "A" }], finalAnswer: "Decay" },
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
            { id: "a", text: "3" },
            { id: "b", text: "2" },
            { id: "c", text: "$\\frac13$" },
            { id: "d", text: "27" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciam-u2-s5-lo-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\log_2 8$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "8" },
            { id: "c", text: "2" },
            { id: "d", text: "4" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$a^y=x$." }], steps: [{ reasoning: "$2^3=8$ → $\\log_2 8=3$.", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s5-lo-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $\\log_{10} 1000$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [
            { reasoning: "$10^3=1000$ → $\\log_{10}1000=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s5-lo-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Simplify $\\log_3 54-\\log_3 2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log laws", statement: "Condense." }], steps: [
            { reasoning: "$\\log_3 54-\\log_3 2=\\log_3\\frac{54}{2}=\\log_3 27$.", marks: 1, markCode: "M" },
            { reasoning: "$\\log_3 27=3$ since $3^3=27$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s5-lo-q8", difficulty: "core", totalMarks: 1,
          stem: "$\\log_a a$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac1a$" },
            { id: "b", text: "0" },
            { id: "c", text: "1" },
            { id: "d", text: "$a$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$a^1=a$." }], steps: [{ reasoning: "$a^1=a$ → $\\log_a a=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "ciam-u2-s5-lo-q9", difficulty: "core", totalMarks: 2,
          stem: "Evaluate $\\log_4 64$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Log evaluation", statement: "Recognise power." }], steps: [
            { reasoning: "$4^3=64$ → $\\log_4 64=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s5-lo-q10", difficulty: "core", totalMarks: 4,
          stem: "Solve $\\log x+\\log(x+3)=1$ (base 10).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log equation", statement: "Combine and exponentiate." }], steps: [
            { reasoning: "$\\log[x(x+3)]=1$ → $x(x+3)=10$ → $x^2+3x-10=0$ → $(x+5)(x-2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ or $x=-5$; reject $-5$ since arguments must be positive.", marks: 1, markCode: "M" },
            { reasoning: "Check $x=2$: $\\log2+\\log5=\\log10=1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "ciam-u2-s5-lo-q11", difficulty: "challenge", totalMarks: 1,
          stem: "$\\log_2 x=5$ gives $x=$…",
          response: { type: "mcq", choices: [
            { id: "a", text: "25" },
            { id: "b", text: "32" },
            { id: "c", text: "10" },
            { id: "d", text: "5" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Log to exponential", statement: "$x=a^y$." }], steps: [{ reasoning: "$x=2^5=32$.", marks: 1, markCode: "A" }], finalAnswer: "32" },
        },
        {
          id: "ciam-u2-s5-lo-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Solve $\\log_3 x=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 81 }] },
          markscheme: { principles: [{ kind: "technique", name: "Log to exponential", statement: "$x=a^y$." }], steps: [
            { reasoning: "$x=3^4=81$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 81.", marks: 1, markCode: "A" },
          ], finalAnswer: "81" },
        },
        {
          id: "ciam-u2-s5-lo-q13", difficulty: "core", totalMarks: 3,
          stem: "Expand $\\log_2(8x^3)$ for $x>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Log laws", statement: "Product and power laws." }], steps: [
            { reasoning: "$\\log_2 8+\\log_2 x^3$.", marks: 1, markCode: "M" },
            { reasoning: "$=3+3\\log_2 x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3+3\\log_2 x$" },
        },
        {
          id: "ciam-u2-s5-lo-q14", difficulty: "challenge", totalMarks: 1,
          stem: "$\\log_b\\frac1b$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "$-1$" },
            { id: "c", text: "$\\frac1b$" },
            { id: "d", text: "0" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Log definition", statement: "$b^{-1}=\\frac1b$." }], steps: [{ reasoning: "$b^{-1}=\\frac1b$ → $\\log_b\\frac1b=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$-1$" },
        },
        {
          id: "ciam-u2-s5-lo-q15", difficulty: "core", totalMarks: 2,
          stem: "Evaluate $\\ln e^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "property", name: "Natural log", statement: "$\\ln e^x=x$." }], steps: [
            { reasoning: "$\\ln e^2=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u2-s5-lo-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which statement is a correct logarithm law for $x,y>0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\log(xy)=\\log x-\\log y$" },
            { id: "b", text: "$\\log x^2=(\\log x)^2$" },
            { id: "c", text: "$\\log(x+y)=\\log x+\\log y$" },
            { id: "d", text: "$\\log(xy)=\\log x+\\log y$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "law", name: "Product law", statement: "$\\log(ab)=\\log a+\\log b$." }], steps: [{ reasoning: "Product law applies to multiplication only.", marks: 1, markCode: "A" }], finalAnswer: "$\\log(xy)=\\log x+\\log y$" },
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
