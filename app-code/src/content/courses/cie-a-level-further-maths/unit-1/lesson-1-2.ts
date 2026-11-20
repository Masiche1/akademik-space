import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cialfm-u1-lesson-1-2",
  code: "1-2",
  title: "Binomial series for any index",
  goal: "I CAN expand $(a+bx)^n$ for fractional and negative $n$.",
  standards: ["9231 P1: binomial expansion"],
  vocabulary: [
    { term: "Binomial series", definition: "Infinite expansion of $(1+x)^n$ for any real $n$." },
    { term: "Convergent", definition: "Series whose terms tend to a finite sum; valid for $|x|<1$." },
    { term: "Coefficient", definition: "The numerical multiplier of each term." },
    { term: "General term", definition: "$\\binom{n}{r}x^r$ in the expansion." },
  ],
  concepts: [
    {
      id: "cialfm-u1-s2-expand",
      title: "Expanding for general n",
      skill: "Write binomial expansions for fractional and negative indices.",
      lesson: {
        sections: [
          {
            heading: "The formula",
            body: "$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\cdots$ valid for $|x|<1$, any real $n$.",
          },
          {
            heading: "Negative powers",
            body: "For $(1+x)^{-1}$: $1 - x + x^2 - x^3 + \\cdots$. For $(1-2x)^{1/2}$: substitute carefully and check signs.",
          },
        ],
        keyFormulas: [
          { name: "Binomial series", statement: "$(1+x)^n = \\sum_{r=0}^{\\infty} \\binom{n}{r}x^r$, $|x|<1$" },
        ],
        workedExample: {
          problem: "Expand $(1+x)^{-1}$ up to $x^3$.",
          solution: "$1 - x + x^2 - x^3 + \\cdots$.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s2-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The binomial expansion of $(1+x)^n$ is valid for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$|x| < 1$" }, { id: "b", text: "$|x| > 1$" }, { id: "c", text: "All $x$" }, { id: "d", text: "$x < 1$ only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Convergence", statement: "$|x|<1$." }],
            steps: [{ reasoning: "Series converges for $|x|<1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$|x|<1$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the first three terms of $(1+x)^{-1}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expansion", statement: "Apply formula." }],
            steps: [
              { reasoning: "$1 - x + x^2 - \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Answer correct to $x^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 - x + x^2$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand $(1+x)^{1/2}$ up to the $x^2$ term.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial", statement: "Use general formula." }],
            steps: [
              { reasoning: "$1 + \\frac{1}{2}x + \\frac{(\\frac{1}{2})(-\\frac{1}{2})}{2}x^2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + \\frac{1}{2}x - \\frac{1}{8}x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 + \\frac{x}{2} - \\frac{x^2}{8}$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the coefficient of $x^3$ in the expansion of $(1-2x)^{1/2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "General term evaluation." }],
            steps: [
              { reasoning: "Term: $\\binom{1/2}{3}(-2x)^3$.", marks: 1, markCode: "M" },
              { reasoning: "$\\binom{1/2}{3} = \\frac{(\\frac12)(-\\frac12)(-\\frac32)}{6} = \\frac{3}{48} = \\frac{1}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient: $\\frac{1}{16} \\times (-8) = -\\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-\\frac{1}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{1}{2}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u1-s2-approx",
      title: "Approximation and validity",
      skill: "Use binomial series for approximations and state validity.",
      lesson: {
        sections: [
          {
            heading: "Approximation",
            body: "Substitute small $x$ into truncated series. First neglected term estimates error. E.g. $\\sqrt{1.02} \\approx 1 + \\frac{0.02}{2} - \\frac{0.02^2}{8}$.",
          },
          {
            heading: "Validity",
            body: "Always state $|x|<1$ or the specific condition. For $(1+\\frac{x}{a})^n$ require $|x/a|<1$.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Use the series to approximate $\\sqrt{1.04}$ to 3 s.f.",
          solution: "$x=0.04$: $1+0.02-0.0002 \\approx 1.02$.",
        },
      },
      questions: [
        {
          id: "cialfm-u1-s2-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To approximate $\\sqrt{1+x}$ you use the expansion of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(1+x)^{1/2}$" }, { id: "b", text: "$(1+x)^2$" }, { id: "c", text: "$(1+x)^{-1}$" }, { id: "d", text: "$(1-x)^{1/2}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Binomial approx", statement: "$\\sqrt{u}=(u)^{1/2}$." }],
            steps: [{ reasoning: "Square root = power $\\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(1+x)^{1/2}$",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Use $(1+x)^{-1} \\approx 1-x+x^2$ to estimate $(1.01)^{-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9901, tolerance: 0.0001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "Substitute $x=0.01$." }],
            steps: [
              { reasoning: "$1 - 0.01 + 0.0001 = 0.9901$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.9901.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9901",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand $(1+\\frac{x}{4})^{-1}$ up to the $x^2$ term, valid for $|x|<4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Scaled expansion", statement: "Substitute $x/4$." }],
            steps: [
              { reasoning: "$1 - \\frac{x}{4} + \\frac{x^2}{16} - \\cdots$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $(\\frac{x}{4})^2 = \\frac{x^2}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown with validity $|x|<4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 - \\frac{x}{4} + \\frac{x^2}{16}$",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the first three terms in the expansion of $\\frac{1}{\\sqrt{1-2x}}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Negative fractional power", statement: "$(1-2x)^{-1/2}$." }],
            steps: [
              { reasoning: "$(1+u)^{-1/2} \\approx 1 - \\frac{u}{2} + \\frac{3u^2}{8}$ with $u=-2x$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + x + \\frac{3 \\cdot 4x^2}{8} = 1 + x + \\frac{3x^2}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1 + x + \\frac{3}{2}x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Valid for $|x|<\\frac{1}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 + x + \\frac{3}{2}x^2$, $|x|<\\frac12$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u1-s2-bin-notes",
      title: "Binomial series — revision notes",
      summary: "General-n expansion, convergence, approximation.",
      sections: [
        { heading: "Formula", body: "$(1+x)^n = \\sum \\binom{n}{r}x^r$ for any real $n$, converges $|x|<1$." },
        { heading: "Use", body: "For $\\sqrt{1+ax}$ use $n=\\frac12$; for $1/(1+ax)$ use $n=-1$. State validity." },
      ],
    },
  ],
};
