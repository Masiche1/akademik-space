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
            { id: "a", text: "$1+x+\\frac{x^2}{2!}+\\cdots$" },
            { id: "b", text: "$\\frac{1}{1-x}$" },
            { id: "c", text: "$x+x^2+x^3+\\cdots$" },
            { id: "d", text: "$1-x+\\frac{x^2}{2!}-\\cdots$" },
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
        {
          id: "cialfm-u5-s2-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Maclaurin series for $\\cos x$ begins…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1-x+\\frac{x^2}{2!}-\\cdots$" },
            { id: "b", text: "$1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots$" },
            { id: "c", text: "$x-\\frac{x^3}{3!}+\\cdots$" },
            { id: "d", text: "$1+x+\\frac{x^2}{2!}+\\cdots$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "cos series", statement: "Even powers, alternating." }],
            steps: [{ reasoning: "$\\cos x = \\sum (-1)^n \\frac{x^{2n}}{(2n)!}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Find the coefficient of $x^3$ in the Maclaurin series for $\\sin(2x)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1.333, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace $x$ with $2x$." }],
            steps: [
              { reasoning: "$\\sin 2x = 2x - \\frac{(2x)^3}{6} + \\cdots = 2x - \\frac{8x^3}{6}+\\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient of $x^3$: $-\\frac{8}{6} = -\\frac{4}{3} \\approx -1.333$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac{4}{3}$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in the Maclaurin series for $\\cos 2x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace $x$ with $2x$." }],
            steps: [
              { reasoning: "$\\cos 2x = 1 - \\frac{(2x)^2}{2} + \\cdots = 1 - 2x^2 + \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient: $-2$.", marks: 1, markCode: "A" }],
            finalAnswer: "-2",
          },
        },
        {
          id: "cialfm-u5-s2-st-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the Maclaurin series for $\\sin^2 x$ up to $x^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identity", statement: "$\\sin^2 x = \\frac{1-\\cos 2x}{2}$." }],
            steps: [
              { reasoning: "$\\sin^2 x = \\frac{1}{2}(1-\\cos 2x)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cos 2x = 1 - \\frac{(2x)^2}{2} + \\frac{(2x)^4}{24}-\\cdots = 1-2x^2+\\frac{2x^4}{3}-\\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sin^2 x = \\frac12(2x^2 - \\frac{2x^4}{3}+\\cdots) = x^2 - \\frac{x^4}{3}+\\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^2 - \\frac{x^4}{3}$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The series $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$ is valid for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All $x$" },
            { id: "b", text: "$|x| < 1$" },
            { id: "c", text: "$-1 < x \\leq 1$" },
            { id: "d", text: "$x \\geq 0$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Validity", statement: "Standard result." }],
            steps: [{ reasoning: "Converges for $-1 < x \\leq 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-1<x\\leq1$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The coefficient of $x^3$ in the Maclaurin series for $e^x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{6}$" },
            { id: "b", text: "$\\frac{1}{3}$" },
            { id: "c", text: "$\\frac{1}{2}$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "e^x series", statement: "$\\frac{x^3}{3!}$." }],
            steps: [{ reasoning: "$\\frac{1}{3!} = \\frac16$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac16$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the Maclaurin series for $xe^x$ up to $x^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiply series", statement: "$x\\times(1+x+\\frac{x^2}{2}+\\cdots)$." }],
            steps: [
              { reasoning: "$xe^x = x\\left(1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\cdots\\right)$.", marks: 1, markCode: "M" },
              { reasoning: "$= x + x^2 + \\frac{x^3}{2} + \\frac{x^4}{6}+\\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Up to $x^3$: $x + x^2 + \\frac{x^3}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$x + x^2 + \\frac{x^3}{2}$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Maclaurin series for $\\sin x$ contains…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only odd powers" },
            { id: "b", text: "Only even powers" },
            { id: "c", text: "Only constant terms" },
            { id: "d", text: "All powers" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Odd function", statement: "$\\sin$ is odd." }],
            steps: [{ reasoning: "Odd function → odd powers only.", marks: 1, markCode: "A" }],
            finalAnswer: "Only odd powers",
          },
        },
        {
          id: "cialfm-u5-s2-st-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use the Maclaurin series for $\\ln(1+x)$ (first three terms) to estimate $\\ln(1.1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.0953, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "Truncate series at small $x$." }],
            steps: [
              { reasoning: "$\\ln(1.1) \\approx 0.1 - \\frac{0.01}{2} + \\frac{0.001}{3} = 0.1 - 0.005 + 0.000333$.", marks: 1, markCode: "M" },
              { reasoning: "$= 0.0953$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.0953$ (true value $\\approx 0.0953$).", marks: 1, markCode: "A" }],
            finalAnswer: "0.0953",
          },
        },
        {
          id: "cialfm-u5-s2-st-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Maclaurin series for $\\frac{1}{1-x^2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1+x^2+x^4+x^6+\\cdots$" },
            { id: "b", text: "$1-x^2+x^4-\\cdots$" },
            { id: "c", text: "$1+x+x^2+x^3+\\cdots$" },
            { id: "d", text: "$1+2x+3x^2+\\cdots$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Geometric series", statement: "Substitute $x^2$ for $x$." }],
            steps: [{ reasoning: "$\\frac{1}{1-x^2} = \\sum x^{2n} = 1+x^2+x^4+\\cdots$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1+x^2+x^4+\\cdots$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which series equals $e^{-x}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1-x+\\frac{x^2}{2}-\\frac{x^3}{6}+\\cdots$" },
            { id: "b", text: "$x-x^3+x^5-\\cdots$" },
            { id: "c", text: "$1-x-x^2-x^3-\\cdots$" },
            { id: "d", text: "$1+x+\\frac{x^2}{2}+\\cdots$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace $x$ with $-x$." }],
            steps: [{ reasoning: "Alternating signs with same magnitudes.", marks: 1, markCode: "A" }],
            finalAnswer: "$1-x+\\frac{x^2}{2}-\\frac{x^3}{6}+\\cdots$",
          },
        },
        {
          id: "cialfm-u5-s2-st-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $f(x) = e^{2x}$ and $g(x) = \\ln(1+x)$.",
          parts: [
            { label: "a", prompt: "Find the Maclaurin series for $f$ up to $x^3$.", marks: 2 },
            { label: "b", prompt: "Find the coefficient of $x^3$ in the series for $\\sin 3x$.", marks: 1 },
            { label: "c", prompt: "State the validity range of the $\\ln(1+x)$ series.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Series manipulation", statement: "Substitute and read coefficients." }],
            steps: [
              { reasoning: "$e^{2x} = 1 + 2x + \\frac{(2x)^2}{2} + \\frac{(2x)^3}{6} = 1+2x+2x^2+\\frac{4x^3}{3}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a) shown.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$\\sin 3x = 3x - \\frac{(3x)^3}{6}+\\cdots$; coefficient of $x^3$ is $-\\frac{27}{6} = -\\frac92$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Valid for $-1 < x \\leq 1$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$1+2x+2x^2+\\frac{4x^3}{3}$; $-\\frac92$; $-1<x\\leq1$",
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
            { id: "a", text: "$f^{(n)}(0)$" },
            { id: "b", text: "$\\frac{f(0)}{n!}$" },
            { id: "c", text: "$\\frac{f^{(n)}(0)}{n!}$" },
            { id: "d", text: "$f(n)$" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u5-s2-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the Maclaurin formula $f(x)=\\sum\\frac{f^{(n)}(0)}{n!}x^n$, the coefficient of $x^n$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{f(0)}{n}$" },
            { id: "b", text: "$f^{(n)}(0)$" },
            { id: "c", text: "$\\frac{f^{(n)}(0)}{n!}$" },
            { id: "d", text: "$n f(0)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Maclaurin coefficient", statement: "Standard formula." }],
            steps: [{ reasoning: "$a_n = \\frac{f^{(n)}(0)}{n!}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{f^{(n)}(0)}{n!}$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $f(x) = x^3$, find $f'''(0)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivatives", statement: "Differentiate and evaluate." }],
            steps: [
              { reasoning: "$f'(x)=3x^2$, $f''(x)=6x$, $f'''(x)=6$.", marks: 1, markCode: "M" },
              { reasoning: "$f'''(0)=6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cialfm-u5-s2-de-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x) = \\cos x$, find $f''(0)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivatives", statement: "Differentiate twice." }],
            steps: [
              { reasoning: "$f'(x)=-\\sin x$, $f''(x)=-\\cos x$ → $f''(0)=-1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: -1.", marks: 1, markCode: "A" }],
            finalAnswer: "-1",
          },
        },
        {
          id: "cialfm-u5-s2-de-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the Maclaurin series for $f(x) = e^{x^2}$ up to $x^4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace $x$ by $x^2$ in $e^x$ series." }],
            steps: [
              { reasoning: "$e^{x^2} = 1 + x^2 + \\frac{(x^2)^2}{2!} + \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + x^2 + \\frac{x^4}{2} + \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Only even powers appear.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$1 + x^2 + \\frac{x^4}{2}$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Maclaurin series is a Taylor series expanded about…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = -1$" },
            { id: "b", text: "$x = 0$" },
            { id: "c", text: "$x = 1$" },
            { id: "d", text: "Any point" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Maclaurin", statement: "Expansion about 0." }],
            steps: [{ reasoning: "Maclaurin = Taylor about $a=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=0$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x) = \\arctan x$, $f'(0)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "Undefined" },
            { id: "c", text: "0" },
            { id: "d", text: "$\\frac12$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivative", statement: "$f'(x)=\\frac{1}{1+x^2}$." }],
            steps: [{ reasoning: "$f'(0) = \\frac{1}{1+0} = 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u5-s2-de-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the Maclaurin series for $f(x) = \\frac{1}{(1+x)^2}$ up to $x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Differentiate known series", statement: "Derivative of $\\frac{1}{1+x}$." }],
            steps: [
              { reasoning: "$\\frac{1}{1+x} = 1-x+x^2-x^3+\\cdots$; its derivative is $-\\frac{1}{(1+x)^2}$.", marks: 1, markCode: "M" },
              { reasoning: "Differentiate term by term: $-1+2x-3x^2+\\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "So $\\frac{1}{(1+x)^2} = 1-2x+3x^2-\\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown, valid $|x|<1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1 - 2x + 3x^2$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find the Maclaurin series for $f(g(x))$ you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Integrate $f$ first" },
            { id: "b", text: "Substitute $g(x)$ for $x$ in the series for $f$" },
            { id: "c", text: "Differentiate $f(g(x))$ directly" },
            { id: "d", text: "Multiply the series for $f$ and $g$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite series", statement: "Substitution rule." }],
            steps: [{ reasoning: "Replace $x$ by $g(x)$ in $f$'s series (when valid).", marks: 1, markCode: "A" }],
            finalAnswer: "Substitute $g(x)$ for $x$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the coefficient of $x^3$ in the Maclaurin series for $f(x) = xe^x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "$\\frac{f'''(0)}{3!}$." }],
            steps: [
              { reasoning: "$f(x) = x + x^2 + \\frac{x^3}{2}+\\cdots$; coefficient of $x^3$ is $\\frac12$.", marks: 1, markCode: "M" },
              { reasoning: "(Check: $f'''(x) = (x+3)e^x$, $f'''(0)=3$, $3/6=\\frac12$.)", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.5$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac12$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the coefficient of $x^5$ in the Maclaurin series for $f(x) = \\sinh x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.00833, tolerance: 0.0001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Odd function series", statement: "Coefficient is $\\frac{f^{(5)}(0)}{5!}$." }],
            steps: [
              { reasoning: "$\\sinh$ is odd; $f^{(5)}(x)=\\cosh x$ → $f^{(5)}(0)=1$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient $= \\frac{1}{5!} = \\frac{1}{120} \\approx 0.00833$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{120}$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The Maclaurin series for $\\ln(1+x)$ converges for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-1 < x \\leq 1$" },
            { id: "b", text: "All real $x$" },
            { id: "c", text: "$|x| < 1$" },
            { id: "d", text: "$x > 0$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Validity", statement: "Standard result." }],
            steps: [{ reasoning: "Converges for $-1 < x \\leq 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-1<x\\leq1$",
          },
        },
        {
          id: "cialfm-u5-s2-de-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x) = \\frac{1}{1+x}$.",
          parts: [
            { label: "a", prompt: "Find $f(0)$, $f'(0)$ and $f''(0)$.", marks: 2 },
            { label: "b", prompt: "Hence write the Maclaurin series up to $x^2$.", marks: 1 },
            { label: "c", prompt: "State the validity range.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivation", statement: "Compute derivatives then substitute." }],
            steps: [
              { reasoning: "$f(0)=1$; $f'(x)=-\\frac{1}{(1+x)^2}$ → $f'(0)=-1$; $f''(x)=\\frac{2}{(1+x)^3}$ → $f''(0)=2$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answers: $1, -1, 2$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$1 - x + \\frac{2}{2}x^2 = 1 - x + x^2$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Valid for $|x| < 1$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$f(0)=1,f'(0)=-1,f''(0)=2$; $1-x+x^2$; $|x|<1$",
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
