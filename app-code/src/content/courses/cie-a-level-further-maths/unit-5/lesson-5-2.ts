import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cialfm-u5-lesson-5-2",
  code: "5-2",
  title: "Maclaurin series",
  goal: "I CAN derive Maclaurin series for standard functions.",
  standards: ["9231 P1: Maclaurin series"],
  vocabulary: [
    { term: "Maclaurin series", definition: "$f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots$" },
    { term: "Taylor series", definition: "Expansion about a point $a$ (Maclaurin is $a=0$)." },
    { term: "Valid for", definition: "Range of $x$ where series converges to $f(x)$." },
    { term: "Coefficient", definition: "$\\frac{f^{(n)}(0)}{n!}$ in the series." },
  ],
  concepts: [
    {
      id: "cialfm-u5-s2-standard",
      title: "Standard Maclaurin series",
      skill: "Recall and use standard Maclaurin expansions.",
      lesson: {
        sections: [
          {
            heading: "Key series",
            body: "$e^x = 1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\cdots$; $\\sin x = x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots$; $\\cos x = 1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots$; $\\ln(1+x) = x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$.",
          },
          {
            heading: "Usage",
            body: "For small $x$, truncate series for approximation. Substitute to find series for composites like $e^{2x}$ or $\\sin x^2$.",
          },
        ],
        keyFormulas: [
          { name: "Maclaurin", statement: "$f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(0)}{n!}x^n$" },
        ],
        workedExample: {
          problem: "Find Maclaurin series for $e^{2x}$ to $x^3$.",
          solution: "Replace $x$ with $2x$: $1+2x+2x^2+\\frac{4x^3}{3}+\\cdots$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-s2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Maclaurin series for $e^x$ starts…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1+x+\\frac{x^2}{2!}+\\cdots$" }, { id: "b", text: "$x+x^2+x^3+\\cdots$" }, { id: "c", text: "$1-x+\\frac{x^2}{2!}-\\cdots$" }, { id: "d", text: "$\\frac{1}{1-x}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "e^x series", statement: "Standard expansion." }],
            steps: [{ reasoning: "$e^x = \\sum x^n/n!$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1+x+\\frac{x^2}{2!}+\\cdots$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the first three terms of the Maclaurin series for $\\sin x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "sin series", statement: "Odd powers only." }],
            steps: [
              { reasoning: "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x - \\frac{x^3}{6} + \\frac{x^5}{120}$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the Maclaurin series for $e^{3x}$ up to $x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace $x$ with $3x$." }],
            steps: [
              { reasoning: "$e^{3x} = 1 + 3x + \\frac{(3x)^2}{2} + \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + 3x + \\frac{9x^2}{2} + \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 + 3x + \\frac{9x^2}{2}$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the Maclaurin series for $\\ln(1+x)$ up to $x^3$ and state validity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "ln series", statement: "Alternating series." }],
            steps: [
              { reasoning: "$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Valid for $-1 < x \\leq 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Check: at $x=0$, $\\ln 1 = 0$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x - \\frac{x^2}{2} + \\frac{x^3}{3}$, $-1<x\\leq1$",
          },
        },
      ],
    },
    {
      id: "cialfm-u5-s2-derive",
      title: "Deriving Maclaurin series",
      skill: "Derive series using the formula at A Level.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "Compute $f(0), f'(0), f''(0), \\ldots$ then substitute into $f(x) = \\sum \\frac{f^{(n)}(0)}{n!}x^n$.",
          },
          {
            heading: "Example",
            body: "$f(x) = \\frac{1}{1-x}$: $f(0)=1, f'(0)=1, f''(0)=2$ → $1+x+x^2+\\cdots$.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Find Maclaurin series for $f(x) = \\frac{1}{1-x}$.",
          solution: "$1 + x + x^2 + x^3 + \\cdots$ for $|x|<1$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-s2-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Maclaurin series, the coefficient of $x^n$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{f^{(n)}(0)}{n!}$" }, { id: "b", text: "$f^{(n)}(0)$" }, { id: "c", text: "$\\frac{f(0)}{n!}$" }, { id: "d", text: "$f(n)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Coefficient", statement: "Standard formula." }],
            steps: [{ reasoning: "$a_n = \\frac{f^{(n)}(0)}{n!}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{f^{(n)}(0)}{n!}$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $f'(0)$ for $f(x) = e^x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivative", statement: "Evaluate at 0." }],
            steps: [
              { reasoning: "$f'(x) = e^x$ → $f'(0) = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u5-s2-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the Maclaurin series for $f(x) = \\frac{1}{1+x}$ up to $x^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derive series", statement: "Compute derivatives." }],
            steps: [
              { reasoning: "$f(0)=1, f'(0)=-1, f''(0)=2, f'''(0)=-6$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 - x + x^2 - x^3 + \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown, valid $|x|<1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 - x + x^2 - x^3$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the Maclaurin series for $f(x) = \\arctan x$ up to $x^5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derive series", statement: "Differentiate and integrate." }],
            steps: [
              { reasoning: "$f'(x) = \\frac{1}{1+x^2} = 1 - x^2 + x^4 - \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Integrate term by term: $f(x) = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown, valid $|x|\\leq1$.", marks: 1, markCode: "M" },
              { reasoning: "Check $f(0)=0$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x - \\frac{x^3}{3} + \\frac{x^5}{5}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u5-s2-maclaurin-notes",
      title: "Maclaurin series — revision notes",
      summary: "Standard expansions and derivation.",
      sections: [
        { heading: "Standard", body: "Memorise $e^x, \\sin x, \\cos x, \\ln(1+x), \\frac{1}{1-x}$. Substitute for composites." },
        { heading: "Derive", body: "Compute $f^{(n)}(0)$ values, plug into formula. Or differentiate known series and integrate." },
      ],
    },
  ],
};
