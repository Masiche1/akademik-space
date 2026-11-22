import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cialfm-u4-lesson-4-2",
  code: "4-2",
  title: "Hyperbolic functions",
  goal: "I CAN define and use hyperbolic functions and their identities.",
  standards: ["9231 P1: hyperbolic functions"],
  vocabulary: [
    { term: "Hyperbolic sine", definition: "$\\sinh x = \\frac{e^x - e^{-x}}{2}$." },
    { term: "Hyperbolic cosine", definition: "$\\cosh x = \\frac{e^x + e^{-x}}{2}$." },
    { term: "Hyperbolic tangent", definition: "$\\tanh x = \\frac{\\sinh x}{\\cosh x}$." },
    { term: "Hyperbolic identity", definition: "$\\cosh^2 x - \\sinh^2 x = 1$ (like $\\cos^2+\\sin^2=1$)." },
    { term: "Inverse hyperbolic", definition: "$\\sinh^{-1} x = \\ln(x + \\sqrt{x^2+1})$." },
  ],
  concepts: [
    {
      id: "cialfm-u4-s2-definitions",
      title: "Definitions and identities",
      skill: "Define hyperbolic functions and prove identities.",
      lesson: {
        sections: [
          {
            heading: "Definitions",
            body: "$\\sinh x = \\frac{e^x-e^{-x}}{2}$; $\\cosh x = \\frac{e^x+e^{-x}}{2}$; $\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x-e^{-x}}{e^x+e^{-x}}$.",
          },
          {
            heading: "Key identity",
            body: "$\\cosh^2 x - \\sinh^2 x = 1$. Also $\\operatorname{sech}^2 x = 1 - \\tanh^2 x$.",
          },
        ],
        keyFormulas: [
          { name: "Hyperbolic identity", statement: "$\\cosh^2 x - \\sinh^2 x = 1$" },
        ],
        workedExample: {
          problem: "Show $\\cosh^2 x - \\sinh^2 x = 1$.",
          solution: "Expand definitions: $\\frac{(e^x+e^{-x})^2 - (e^x-e^{-x})^2}{4} = \\frac{4}{4} = 1$.",
        },
      },
      questions: [
        {
          id: "cialfm-u4-s2-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\sinh x$ is defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{e^x+e^{-x}}{2}$" },
            { id: "b", text: "$\\frac{e^{-x}-e^x}{2}$" },
            { id: "c", text: "$e^x - e^{-x}$" },
            { id: "d", text: "$\\frac{e^x-e^{-x}}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "sinh", statement: "Standard definition." }],
            steps: [{ reasoning: "$\\sinh x = \\frac{e^x-e^{-x}}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{e^x-e^{-x}}{2}$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the hyperbolic Pythagorean identity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Hyperbolic identity", statement: "$\\cosh^2-\\sinh^2=1$." }],
            steps: [
              { reasoning: "$\\cosh^2 x - \\sinh^2 x = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\cosh^2 x - \\sinh^2 x = 1$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $\\tanh^2 x + \\operatorname{sech}^2 x = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identity proof", statement: "Divide main identity." }],
            steps: [
              { reasoning: "Divide $\\cosh^2-\\sinh^2=1$ by $\\cosh^2$: $1 - \\tanh^2 = \\operatorname{sech}^2$.", marks: 1, markCode: "M" },
              { reasoning: "Rearrange: $\\tanh^2 + \\operatorname{sech}^2 = 1$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Identity proved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved",
          },
        },
        {
          id: "cialfm-u4-s2-de-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Prove $\\sinh 2x = 2\\sinh x\\cosh x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double angle", statement: "Expand definitions." }],
            steps: [
              { reasoning: "$\\sinh 2x = \\frac{e^{2x}-e^{-2x}}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$2\\sinh x\\cosh x = 2\\cdot\\frac{e^x-e^{-x}}{2}\\cdot\\frac{e^x+e^{-x}}{2} = \\frac{e^{2x}-e^{-2x}}{2}$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Both equal — identity holds.", marks: 1, markCode: "M" },
              { reasoning: "QED.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Proved",
          },
        },
        {
          id: "cialfm-u4-s2-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\cosh x$ is defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{e^{-x}-e^x}{2}$" },
            { id: "b", text: "$e^x+e^{-x}$" },
            { id: "c", text: "$\\frac{e^x-e^{-x}}{2}$" },
            { id: "d", text: "$\\frac{e^x+e^{-x}}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "cosh", statement: "Standard definition." }],
            steps: [{ reasoning: "$\\cosh x = \\frac{e^x+e^{-x}}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{e^x+e^{-x}}{2}$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\sinh 0$ and $\\cosh 0$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0 }, { label: "b", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Values at 0", statement: "Direct substitution." }],
            steps: [
              { reasoning: "$\\sinh 0 = \\frac{1-1}{2}=0$; $\\cosh 0 = \\frac{1+1}{2}=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $0$ and $1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sinh 0 = 0$, $\\cosh 0 = 1$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the exact value of $\\sinh(\\ln 2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate at log", statement: "Use $e^{\\ln 2}=2$." }],
            steps: [
              { reasoning: "$\\sinh(\\ln 2) = \\frac{2 - \\frac12}{2} = \\frac{3/2}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac34$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.75$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac34$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $\\cosh x$ is an even function and $\\sinh x$ is an odd function.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parity", statement: "Replace $x$ by $-x$ in definitions." }],
            steps: [
              { reasoning: "$\\cosh(-x) = \\frac{e^{-x}+e^{x}}{2} = \\cosh x$ — even.", marks: 1, markCode: "M" },
              { reasoning: "$\\sinh(-x) = \\frac{e^{-x}-e^{x}}{2} = -\\sinh x$ — odd.", marks: 1, markCode: "M" },
              { reasoning: "Both properties proved.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\cosh$ even, $\\sinh$ odd",
          },
        },
        {
          id: "cialfm-u4-s2-de-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\tanh^2 x + \\operatorname{sech}^2 x = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "0" },
            { id: "c", text: "$\\sinh^2 x$" },
            { id: "d", text: "$\\cosh^2 x$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Hyperbolic identity", statement: "Divided form of main identity." }],
            steps: [{ reasoning: "Standard identity: sum equals 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u4-s2-de-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\cosh 0 = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "$e$" },
            { id: "c", text: "$\\frac12$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "cosh at 0", statement: "Direct substitution." }],
            steps: [{ reasoning: "$\\frac{1+1}{2}=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u4-s2-de-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Prove that $\\cosh(x+y) = \\cosh x\\cosh y + \\sinh x\\sinh y$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Addition formula", statement: "Expand both sides with exponentials." }],
            steps: [
              { reasoning: "LHS: $\\frac{e^{x+y}+e^{-(x+y)}}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "RHS expands to $\\frac{e^{x+y}+e^{-x-y}+e^{x-y}+e^{-x+y}}{4}\\times2 = \\frac{e^{x+y}+e^{-(x+y)}}{2}$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Both sides equal — identity holds.", marks: 1, markCode: "M" },
              { reasoning: "QED.", marks: 1, markCode: "A" }],
            finalAnswer: "Proved",
          },
        },
        {
          id: "cialfm-u4-s2-de-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\sinh(x+y) = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sinh x + \\sinh y$" },
            { id: "b", text: "$\\cosh x\\cosh y + \\sinh x\\sinh y$" },
            { id: "c", text: "$\\sinh x\\cosh y + \\cosh x\\sinh y$" },
            { id: "d", text: "$\\sinh x\\cosh y - \\cosh x\\sinh y$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Addition formula", statement: "Standard result." }],
            steps: [{ reasoning: "Correct addition formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sinh x\\cosh y + \\cosh x\\sinh y$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $\\sinh x = \\frac{5}{12}$, find $\\cosh x$ (take the positive value).",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.083, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Hyperbolic identity", statement: "$\\cosh^2 x = 1+\\sinh^2 x$." }],
            steps: [
              { reasoning: "$\\cosh^2 x = 1 + \\frac{25}{144} = \\frac{169}{144}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cosh x = \\frac{13}{12} \\approx 1.083$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{13}{12}$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the exact value of $\\tanh(\\ln 3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate tanh", statement: "Use exponential definitions." }],
            steps: [
              { reasoning: "$\\tanh(\\ln3) = \\frac{3-\\frac13}{3+\\frac13} = \\frac{8/3}{10/3}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{4}{5} = 0.8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.8$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac45$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is an even function?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\tanh x$" },
            { id: "b", text: "$\\sinh x$" },
            { id: "c", text: "$x\\sinh x$" },
            { id: "d", text: "$\\cosh x$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Parity", statement: "$\\cosh$ is even." }],
            steps: [{ reasoning: "$\\cosh(-x)=\\cosh x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\cosh x$",
          },
        },
        {
          id: "cialfm-u4-s2-de-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $x = \\ln 2$.",
          parts: [
            { label: "a", prompt: "State the identity relating $\\cosh^2 x$ and $\\sinh^2 x$.", marks: 1 },
            { label: "b", prompt: "Find $\\sinh x$ and $\\cosh x$.", marks: 2 },
            { label: "c", prompt: "Verify the identity numerically.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Verify identity", statement: "Compute values then check." }],
            steps: [
              { reasoning: "$\\cosh^2 x - \\sinh^2 x = 1$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$\\sinh(\\ln2)=\\frac{2-1/2}{2}=\\frac34$; $\\cosh(\\ln2)=\\frac{2+1/2}{2}=\\frac54$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answers: $\\frac34$ and $\\frac54$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$\\left(\\frac54\\right)^2-\\left(\\frac34\\right)^2 = \\frac{25-9}{16}=1$ ✓.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$\\sinh=\\frac34$, $\\cosh=\\frac54$; identity verified",
          },
        },
      ],
    },
    {
      id: "cialfm-u4-s2-calculus",
      title: "Calculus of hyperbolic functions",
      skill: "Differentiate and integrate hyperbolic functions.",
      lesson: {
        sections: [
          {
            heading: "Derivatives",
            body: "$\\frac{d}{dx}\\sinh x = \\cosh x$; $\\frac{d}{dx}\\cosh x = \\sinh x$; $\\frac{d}{dx}\\tanh x = \\operatorname{sech}^2 x$.",
          },
          {
            heading: "Integrals",
            body: "$\\int\\sinh x\\,dx = \\cosh x + c$; $\\int\\cosh x\\,dx = \\sinh x + c$; $\\int\\operatorname{sech}^2 x\\,dx = \\tanh x + c$.",
          },
        ],
        keyFormulas: [
          { name: "Derivatives", statement: "$\\sinh'=\\cosh$, $\\cosh'=\\sinh$, $\\tanh'=\\operatorname{sech}^2$" },
        ],
        workedExample: {
          problem: "Differentiate $y = \\sinh^2 x$.",
          solution: "$y' = 2\\sinh x\\cosh x = \\sinh 2x$.",
        },
      },
      questions: [
        {
          id: "cialfm-u4-s2-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\frac{d}{dx}\\sinh x$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\tanh x$" },
            { id: "b", text: "$\\cosh x$" },
            { id: "c", text: "$\\sinh x$" },
            { id: "d", text: "$\\operatorname{sech} x$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "Standard result." }],
            steps: [{ reasoning: "$\\frac{d}{dx}\\sinh x = \\cosh x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\cosh x$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\int \\cosh x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Integral", statement: "Standard result." }],
            steps: [
              { reasoning: "$\\int\\cosh x\\,dx = \\sinh x + c$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sinh x + c$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Differentiate $y = x\\sinh x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Product rule", statement: "Apply product rule." }],
            steps: [
              { reasoning: "$y' = \\sinh x + x\\cosh x$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Check: derivative of $x$ is 1, of $\\sinh$ is $\\cosh$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sinh x + x\\cosh x$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate $\\int_0^1 \\sinh x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Definite integral", statement: "Integrate and evaluate." }],
            steps: [
              { reasoning: "$\\int\\sinh x\\,dx = \\cosh x$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cosh 1 - \\cosh 0 = \\frac{e+e^{-1}}{2} - 1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 1.543 - 1 = 0.543$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{e+e^{-1}-2}{2} \\approx 0.543$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\frac{d}{dx}\\tanh x = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\tanh x$" },
            { id: "b", text: "$\\operatorname{sech} x$" },
            { id: "c", text: "$-\\operatorname{sech}^2 x$" },
            { id: "d", text: "$\\operatorname{sech}^2 x$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "Standard result." }],
            steps: [{ reasoning: "$\\frac{d}{dx}\\tanh x = \\operatorname{sech}^2 x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\operatorname{sech}^2 x$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^{\\ln 2} \\cosh x\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.75 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Definite integral", statement: "Integrate and substitute limits." }],
            steps: [
              { reasoning: "$\\int\\cosh x\\,dx = \\sinh x$; evaluate $\\sinh(\\ln2)-\\sinh0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sinh(\\ln2) = \\frac{2-1/2}{2} = \\frac34$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.75$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac34$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 \\cosh x\\,dx$, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.175, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Definite integral", statement: "Integrate and evaluate." }],
            steps: [
              { reasoning: "$\\int\\cosh x\\,dx = \\sinh x$; $\\sinh1 - \\sinh0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sinh 1 = \\frac{e-e^{-1}}{2} \\approx 1.175$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1.18$ (3 s.f.).", marks: 1, markCode: "A" }],
            finalAnswer: "1.18",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Differentiate $y = x\\tanh x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Product rule", statement: "Apply product rule." }],
            steps: [
              { reasoning: "$y' = \\tanh x + x\\operatorname{sech}^2 x$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Check both factors differentiated.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\tanh x + x\\operatorname{sech}^2 x$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\int \\tanh x\\,dx = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\operatorname{sech} x + c$" },
            { id: "b", text: "$\\ln(\\cosh x) + c$" },
            { id: "c", text: "$\\sinh x + c$" },
            { id: "d", text: "$\\tanh x + c$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Integral", statement: "Standard result." }],
            steps: [{ reasoning: "$\\int\\tanh x\\,dx = \\ln\\cosh x + c$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln(\\cosh x) + c$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The value of $\\frac{d}{dx}\\sinh x$ at $x = 0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "$e$" },
            { id: "c", text: "$\\sinh 0$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative at point", statement: "$\\cosh 0 = 1$." }],
            steps: [{ reasoning: "$\\frac{d}{dx}\\sinh x = \\cosh x$; at 0 gives $\\cosh0=1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Differentiate $y = \\sinh^2 x$ and simplify using a double-angle identity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chain rule + identity", statement: "Then use $2\\sinh\\cosh=\\sinh2x$." }],
            steps: [
              { reasoning: "$y' = 2\\sinh x\\cosh x$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\sinh 2x$.", marks: 1, markCode: "M" },
              { reasoning: "Identity applied correctly.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\sinh 2x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sinh 2x$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\int \\sinh 2x\\,dx = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\cosh 2x + c$" },
            { id: "b", text: "$\\frac12\\cosh 2x + c$" },
            { id: "c", text: "$\\sinh 2x + c$" },
            { id: "d", text: "$\\cosh 2x + c$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Inner factor 2 needs $\\frac12$." }],
            steps: [{ reasoning: "$\\int\\sinh2x\\,dx = \\frac12\\cosh2x + c$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac12\\cosh 2x + c$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^1 \\sinh x\\,dx$, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.543, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Definite integral", statement: "Integrate and evaluate." }],
            steps: [
              { reasoning: "$\\int\\sinh x\\,dx = \\cosh x$; $\\cosh1 - \\cosh0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\cosh1 = \\frac{e+e^{-1}}{2} \\approx 1.543$; $-1$ gives $0.543$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.543$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.543",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\int_0^{\\ln 2} \\operatorname{sech}^2 x\\,dx$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Definite integral", statement: "$\\int\\operatorname{sech}^2 = \\tanh$." }],
            steps: [
              { reasoning: "$\\int\\operatorname{sech}^2 x\\,dx = \\tanh x$; evaluate $\\tanh(\\ln2)-\\tanh0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tanh(\\ln2) = \\frac{2-1/2}{2+1/2} = \\frac{3/2}{5/2} = \\frac35 = 0.6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.6$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac35$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$\\int \\cosh^2 x\\,dx$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{x}{2} + \\frac{\\cosh 2x}{4} + c$" },
            { id: "b", text: "$\\sinh 2x + c$" },
            { id: "c", text: "$\\frac{\\cosh 2x}{2} + c$" },
            { id: "d", text: "$\\frac{x}{2} + \\frac{\\sinh 2x}{4} + c$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double-angle integration", statement: "$\\cosh^2x = \\frac{1+\\cosh2x}{2}$." }],
            steps: [{ reasoning: "Integrate $\\frac12 + \\frac12\\cosh2x$ → $\\frac{x}{2}+\\frac{\\sinh2x}{4}+c$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{x}{2}+\\frac{\\sinh2x}{4}+c$",
          },
        },
        {
          id: "cialfm-u4-s2-ca-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $f(x) = x\\cosh x$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$.", marks: 2 },
            { label: "b", prompt: "Evaluate $\\int_0^{\\ln 2} \\sinh x\\,dx$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Product rule + integral", statement: "Standard methods." }],
            steps: [
              { reasoning: "$f'(x) = \\cosh x + x\\sinh x$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Answer for (a) shown.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$\\int\\sinh x\\,dx = \\cosh x$; $\\cosh(\\ln2)-\\cosh0 = \\frac54-1 = \\frac14$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): $\\frac14$.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$f'=\\cosh x + x\\sinh x$; integral $=\\frac14$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u4-s2-hyp-notes",
      title: "Hyperbolic functions — revision notes",
      summary: "Definitions, identities, calculus.",
      sections: [
        { heading: "Definitions", body: "$\\sinh=\\frac{e^x-e^{-x}}2$, $\\cosh=\\frac{e^x+e^{-x}}2$. Identity: $\\cosh^2-\\sinh^2=1$." },
        { heading: "Calculus", body: "Derivatives cycle like trig but with + signs. Integrals are standard." },
      ],
    },
  ],
};
