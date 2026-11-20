import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cialfm-u4-lesson-4-3",
  code: "4-3",
  title: "Inverse hyperbolic functions and equations",
  goal: "I CAN use inverse hyperbolic functions and solve hyperbolic equations.",
  standards: ["9231 P1: inverse hyperbolic functions"],
  vocabulary: [
    { term: "Inverse hyperbolic", definition: "Functions that undo $\\sinh, \\cosh, \\tanh$." },
    { term: "arsinh", definition: "$\\sinh^{-1} x = \\ln(x+\\sqrt{x^2+1})$." },
    { term: "arcosh", definition: "$\\cosh^{-1} x = \\ln(x+\\sqrt{x^2-1})$, $x \\geq 1$." },
    { term: "artanh", definition: "$\\tanh^{-1} x = \\frac{1}{2}\\ln\\frac{1+x}{1-x}$, $|x|<1$." },
  ],
  concepts: [
    {
      id: "cialfm-u4-s3-inverse",
      title: "Inverse hyperbolic functions",
      skill: "Evaluate and differentiate inverse hyperbolic functions.",
      lesson: {
        sections: [
          {
            heading: "Logarithmic forms",
            body: "$\\sinh^{-1} x = \\ln(x+\\sqrt{x^2+1})$; $\\cosh^{-1} x = \\ln(x+\\sqrt{x^2-1})$ ($x\\geq1$); $\\tanh^{-1} x = \\frac12\\ln\\frac{1+x}{1-x}$ ($|x|<1$).",
          },
          {
            heading: "Derivatives",
            body: "$\\frac{d}{dx}\\sinh^{-1}x = \\frac{1}{\\sqrt{x^2+1}}$; $\\frac{d}{dx}\\cosh^{-1}x = \\frac{1}{\\sqrt{x^2-1}}$; $\\frac{d}{dx}\\tanh^{-1}x = \\frac{1}{1-x^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Inverse derivatives", statement: "$\\frac{d}{dx}\\sinh^{-1}x=\\frac{1}{\\sqrt{x^2+1}}$" },
        ],
        workedExample: {
          problem: "Evaluate $\\sinh^{-1}(0)$.",
          solution: "$\\ln(0+1) = 0$.",
        },
      },
      questions: [
        {
          id: "cialfm-u4-s3-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\sinh^{-1} x$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\ln(x+\\sqrt{x^2+1})$" }, { id: "b", text: "$\\ln(x+\\sqrt{x^2-1})$" }, { id: "c", text: "$\\frac12\\ln\\frac{1+x}{1-x}$" }, { id: "d", text: "$\\ln x$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "arsinh", statement: "Standard form." }],
            steps: [{ reasoning: "$\\sinh^{-1}x = \\ln(x+\\sqrt{x^2+1})$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln(x+\\sqrt{x^2+1})$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $\\frac{d}{dx}\\tanh^{-1}x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "Standard result." }],
            steps: [
              { reasoning: "$\\frac{d}{dx}\\tanh^{-1}x = \\frac{1}{1-x^2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{1-x^2}$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\cosh^{-1}(1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Use log form." }],
            steps: [
              { reasoning: "$\\cosh^{-1}(1) = \\ln(1+0) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\cosh 0 = 1$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Differentiate $y = \\sinh^{-1}(2x)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chain rule", statement: "Apply chain rule." }],
            steps: [
              { reasoning: "$y' = \\frac{1}{\\sqrt{(2x)^2+1}} \\times 2$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{2}{\\sqrt{4x^2+1}}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Simplify if needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{\\sqrt{4x^2+1}}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u4-s3-equations",
      title: "Hyperbolic equations",
      skill: "Solve equations involving hyperbolic functions.",
      lesson: {
        sections: [
          {
            heading: "Basic equations",
            body: "Convert to exponential form using definitions. $\\sinh x = k$ → $e^x - e^{-x} = 2k$ → quadratic in $e^x$.",
          },
          {
            heading: "Identities",
            body: "Use $\\cosh^2-\\sinh^2=1$ and addition formulas to simplify before solving.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Solve $\\cosh x = 2$.",
          solution: "$\\frac{e^x+e^{-x}}{2}=2$ → $e^{2x}-4e^x+1=0$ → $e^x = 2\\pm\\sqrt3$ → $x = \\ln(2\\pm\\sqrt3)$.",
        },
      },
      questions: [
        {
          id: "cialfm-u4-s3-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve $\\sinh x = k$ you convert to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exponential equation" }, { id: "b", text: "Trigonometric equation" }, { id: "c", text: "Polynomial in x" }, { id: "d", text: "Logarithmic only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hyperbolic solve", statement: "Use exponential form." }],
            steps: [{ reasoning: "Convert via $e^x$ definition.", marks: 1, markCode: "A" }],
            finalAnswer: "Exponential",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $\\sinh x = 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic solve", statement: "$e^x=e^{-x}$ → $x=0$." }],
            steps: [
              { reasoning: "$\\frac{e^x-e^{-x}}{2}=0$ → $e^{2x}=1$ → $x=0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\cosh x = \\frac{5}{4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "Quadratic in $e^x$." }],
            steps: [
              { reasoning: "$e^x + e^{-x} = \\frac{5}{2}$ → $2e^{2x} - 5e^x + 2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(2e^x-1)(e^x-2)=0$ → $e^x = \\frac12$ or $2$.", marks: 1, markCode: "M" },
              { reasoning: "$x = \\ln 2$ or $x = -\\ln 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\pm\\ln 2$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\sinh x + \\cosh x = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simplify first", statement: "$\\sinh+\\cosh = e^x$." }],
            steps: [
              { reasoning: "$\\sinh x + \\cosh x = \\frac{e^x-e^{-x}+e^x+e^{-x}}{2} = e^x$.", marks: 1, markCode: "M" },
              { reasoning: "$e^x = 3$ → $x = \\ln 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "Verify: $\\sinh(\\ln3)+\\cosh(\\ln3) = 3$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = \\ln 3$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u4-s3-hypinv-notes",
      title: "Inverse hyperbolic functions — revision notes",
      summary: "Log forms, derivatives, solving equations.",
      sections: [
        { heading: "Inverses", body: "Log forms for $\\sinh^{-1}, \\cosh^{-1}, \\tanh^{-1}$. Derivatives similar to trig inverses." },
        { heading: "Equations", body: "Convert to exponential, solve quadratic in $e^x$. Look for simplifications like $\\sinh+\\cosh=e^x$." },
      ],
    },
  ],
};
