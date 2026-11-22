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
            { id: "a", text: "All $x$" },
            { id: "b", text: "$|x| < 1$" },
            { id: "c", text: "$x < 1$ only" },
            { id: "d", text: "$|x| > 1$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u1-s2-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the expansion of $(1+x)^{-2}$, the coefficient of $x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-1$" },
            { id: "b", text: "$1$" },
            { id: "c", text: "$2$" },
            { id: "d", text: "$-2$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Binomial coefficient", statement: "Coefficient of $x^r$ is $\\binom{n}{r}$." }],
            steps: [{ reasoning: "$n=-2$, so the linear coefficient is $-2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-2$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $(1+x)^n = 1 + nx + \\cdots$, the coefficient of $x^2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{n^2}{2}$" },
            { id: "b", text: "$n$" },
            { id: "c", text: "$\\frac{n(n+1)}{2}$" },
            { id: "d", text: "$\\frac{n(n-1)}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "General term", statement: "$\\binom{n}{r}x^r$." }],
            steps: [{ reasoning: "$\\binom{n}{2} = \\frac{n(n-1)}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{n(n-1)}{2}$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The expansion of $(1-3x)^{-1}$ is valid for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x < \\frac{1}{3}$ only" },
            { id: "b", text: "$|x| < 3$" },
            { id: "c", text: "$|x| < 1$" },
            { id: "d", text: "$|x| < \\frac{1}{3}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Convergence", statement: "$|u|<1$ where $u=-3x$." }],
            steps: [{ reasoning: "Need $|-3x|<1$ i.e. $|x|<\\frac13$.", marks: 1, markCode: "A" }],
            finalAnswer: "$|x|<\\frac13$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in the expansion of $(1+x)^{3/2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.375 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "Use $\\binom{n}{r}$ with $n=\\frac32$." }],
            steps: [
              { reasoning: "$\\binom{3/2}{2} = \\frac{(3/2)(1/2)}{2} = \\frac{3}{8} = 0.375$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.375.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the coefficient of $x$ in the expansion of $(1-2x)^{1/3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.6667, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "Coefficient of $x$ is $n \\times (-2)$." }],
            steps: [
              { reasoning: "$n=\\frac13$; coefficient $= \\frac13 \\times (-2) = -\\frac23 \\approx -0.667$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{2}{3}$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand $(1+x)^{-2}$ up to the $x^3$ term.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expansion", statement: "Apply general formula." }],
            steps: [
              { reasoning: "$1 + (-2)x + \\frac{(-2)(-3)}{2}x^2 + \\frac{(-2)(-3)(-4)}{6}x^3$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 - 2x + 3x^2 - 4x^3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown; valid for $|x|<1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 - 2x + 3x^2 - 4x^3$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand $(1+2x)^{1/2}$ up to the $x^2$ term.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial", statement: "Substitute $2x$ for $x$." }],
            steps: [
              { reasoning: "$1 + \\frac12(2x) + \\frac{(1/2)(-1/2)}{2}(2x)^2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + x - \\frac12 x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1 + x - \\frac{1}{2}x^2$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the coefficient of $x^3$ in the expansion of $(1+\\frac{x}{2})^{-1}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "General term evaluation." }],
            steps: [
              { reasoning: "Coefficient of $x^3$ in $(1+u)^{-1}$ is $(-1)^3 = -1$ with $u=\\frac{x}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Term: $-\\left(\\frac{x}{2}\\right)^3 = -\\frac{x^3}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient $= -\\frac18$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-\\frac18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{1}{8}$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The general term in the expansion of $(1+x)^n$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\binom{n}{r}x^r$" },
            { id: "b", text: "$\\binom{r}{n}x^r$" },
            { id: "c", text: "$\\frac{n}{r!}x^r$" },
            { id: "d", text: "$n x^r$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "General term", statement: "$\\binom{n}{r}x^r$ for any real $n$." }],
            steps: [{ reasoning: "Correct general term.", marks: 1, markCode: "M" }, { reasoning: "Answer: option a.", marks: 1, markCode: "A" }],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the coefficient of $x^3$ in the expansion of $(1-2x)^{-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "$(1-2x)^{-1} = \\sum (2x)^r$." }],
            steps: [
              { reasoning: "Coefficient of $x^3$ is $2^3 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the coefficient of $x^3$ in the expansion of $(1+x)^{-3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "Generalised binomial coefficient." }],
            steps: [
              { reasoning: "Coefficient: $\\binom{-3}{3} = \\frac{(-3)(-4)(-5)}{6} = -10$.", marks: 1, markCode: "M" },
              { reasoning: "Sign: $(-1)^3$ factor already in the $-10$.", marks: 1, markCode: "M" },
              { reasoning: "Coefficient $= -10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-10$",
          },
        },
        {
          id: "cialfm-u1-s2-ex-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the coefficient of $x^2$ in the expansion of $(1+3x)^{-2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 27 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Coefficient", statement: "$\\binom{-2}{2}(3x)^2$." }],
            steps: [
              { reasoning: "$\\binom{-2}{2} = \\frac{(-2)(-3)}{2} = 3$; times $3^2=9$ gives $27$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 27.", marks: 1, markCode: "M" },
              { reasoning: "Check sign: positive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27",
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
            { id: "a", text: "$(1+x)^2$" },
            { id: "b", text: "$(1+x)^{-1}$" },
            { id: "c", text: "$(1-x)^{1/2}$" },
            { id: "d", text: "$(1+x)^{1/2}$" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u1-s2-ap-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When using a truncated binomial series for approximation, the first neglected term is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Find the exact value" },
            { id: "b", text: "Determine the index $n$" },
            { id: "c", text: "Check convergence of all terms" },
            { id: "d", text: "Estimate the error" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Error estimate", statement: "First neglected term bounds the error." }],
            steps: [{ reasoning: "First neglected term estimates the size of the error.", marks: 1, markCode: "A" }],
            finalAnswer: "Estimate the error",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The approximation $(1+x)^{1/2} \\approx 1 + \\frac{x}{2} - \\frac{x^2}{8}$ is valid for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All real $x$" },
            { id: "b", text: "$|x| < \\frac{1}{8}$" },
            { id: "c", text: "$|x| < 1$" },
            { id: "d", text: "$x < 1$ only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Validity", statement: "Series converges for $|x|<1$." }],
            steps: [{ reasoning: "Standard condition $|x|<1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$|x|<1$",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Use $(1+x)^{-1} \\approx 1 - x$ to estimate $(1.02)^{-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.98, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "Substitute $x=0.02$." }],
            steps: [
              { reasoning: "$1 - 0.02 = 0.98$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.98.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.98",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Use $(1+x)^{1/2} \\approx 1 + \\frac{x}{2} - \\frac{x^2}{8}$ to estimate $\\sqrt{1.08}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.0392, tolerance: 0.0001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "$x=0.08$." }],
            steps: [
              { reasoning: "$1 + 0.04 - \\frac{0.0064}{8} = 1 + 0.04 - 0.0008 = 1.0392$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.0392.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.0392",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the range of values of $x$ for which the expansion of $(1+\\frac{x}{10})^{-2}$ is valid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Validity", statement: "Require $|x/10|<1$." }],
            steps: [
              { reasoning: "$|x/10| < 1$.", marks: 1, markCode: "M" },
              { reasoning: "So $|x| < 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$|x| < 10$",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use the binomial expansion of $(1+x)^{1/2}$ to find $\\sqrt{1.02}$ correct to 4 significant figures.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "Series to $x^2$ term with $x=0.02$." }],
            steps: [
              { reasoning: "$1 + \\frac{0.02}{2} - \\frac{0.02^2}{8} = 1 + 0.01 - 0.00005$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1.00995 \\approx 1.010$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\sqrt{1.02} \\approx 1.010$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.010",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Use $(1+x)^{-1} \\approx 1 - x + x^2 - x^3$ to estimate $\\frac{1}{1.05}$ to 4 d.p.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "Substitute $x=0.05$." }],
            steps: [
              { reasoning: "$1 - 0.05 + 0.0025 - 0.000125 = 0.952375$.", marks: 1, markCode: "M" },
              { reasoning: "Rounded: $0.9524$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.9524$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9524",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate $(1.01)^{-2}$ using the first three terms of the expansion of $(1+x)^{-2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9803, tolerance: 0.0001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "$x=0.01$ in $1-2x+3x^2$." }],
            steps: [
              { reasoning: "$1 - 0.02 + 0.0003 = 0.9803$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.9803.", marks: 1, markCode: "M" },
              { reasoning: "Compare exact $\\approx 0.9803$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9803",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important to state the validity condition when giving a binomial approximation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is required for all answers" },
            { id: "b", text: "The approximation is only accurate when the series converges" },
            { id: "c", text: "It changes the value of $x$" },
            { id: "d", text: "It determines the number of terms" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "concept", name: "Validity", statement: "Truncated series only valid where convergent." }],
            steps: [
              { reasoning: "The series diverges outside $|x|<1$, so approximation fails.", marks: 1, markCode: "M" },
              { reasoning: "Answer: option a.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Option a",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Estimate $\\sqrt{1.001}$ to 5 d.p. using the binomial series.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.0005, tolerance: 0.00001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "$x=0.001$; terms beyond $x^2$ negligible." }],
            steps: [
              { reasoning: "$1 + \\frac{0.001}{2} - \\frac{0.001^2}{8} = 1 + 0.0005 - 0.000000125$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1.000499875 \\approx 1.00050$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.00050.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.00050",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the range of validity and an approximation for $\\sqrt{1+\\frac{x}{5}}$ when $x=0.5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Validity + approx", statement: "Substitute $u=x/5$ then evaluate." }],
            steps: [
              { reasoning: "Validity: $|x/5|<1$ → $|x|<5$.", marks: 1, markCode: "M" },
              { reasoning: "$x=0.5$ gives $u=0.1$: $1 + 0.05 - \\frac{0.01}{8} = 1.04875$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 1.0488$ to 4 d.p.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $|x|<5$, approx 1.0488.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$|x|<5$; $\\approx 1.0488$",
          },
        },
        {
          id: "cialfm-u1-s2-ap-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use $(1+x)^{-1/2} \\approx 1 - \\frac{x}{2} + \\frac{3x^2}{8}$ to estimate $\\frac{1}{\\sqrt{1.04}}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9806, tolerance: 0.0001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Approximation", statement: "Substitute $x=0.04$." }],
            steps: [
              { reasoning: "$1 - 0.02 + \\frac{3 \\times 0.0016}{8} = 1 - 0.02 + 0.0006 = 0.9806$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.9806.", marks: 1, markCode: "M" },
              { reasoning: "Exact value $\\approx 0.9806$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9806",
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
