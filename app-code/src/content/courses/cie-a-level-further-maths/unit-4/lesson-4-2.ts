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
            { id: "a", text: "$\\frac{e^x-e^{-x}}{2}$" }, { id: "b", text: "$\\frac{e^x+e^{-x}}{2}$" }, { id: "c", text: "$\\frac{e^{-x}-e^x}{2}$" }, { id: "d", text: "$e^x - e^{-x}$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "$\\cosh x$" }, { id: "b", text: "$\\sinh x$" }, { id: "c", text: "$\\tanh x$" }, { id: "d", text: "$\\operatorname{sech} x$" },
          ], correctChoiceId: "a" },
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
