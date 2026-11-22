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
            { id: "a", text: "$\\frac12\\ln\\frac{1+x}{1-x}$" },
            { id: "b", text: "$\\ln x$" },
            { id: "c", text: "$\\ln(x+\\sqrt{x^2+1})$" },
            { id: "d", text: "$\\ln(x+\\sqrt{x^2-1})$" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u4-s3-inv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\cosh^{-1} x$ is defined for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x \\geq 1$" },
            { id: "b", text: "$x > 0$" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "$|x| < 1$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Domain", statement: "Range of $\\cosh$ is $[1,\\infty)$." }],
            steps: [{ reasoning: "$\\cosh x \\geq 1$ so inverse needs $x \\geq 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x \\geq 1$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\sinh^{-1}(0)$ and $\\cosh^{-1}(1)$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0 }, { label: "b", answer: 0 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Use log forms." }],
            steps: [
              { reasoning: "$\\sinh^{-1}0 = \\ln(0+1) = 0$; $\\cosh^{-1}1 = \\ln(1+0) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Both answers are 0.", marks: 1, markCode: "A" }],
            finalAnswer: "0 and 0",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\sinh^{-1}(1)$, giving your answer in logarithmic form.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.881, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate inverse", statement: "$\\ln(x+\\sqrt{x^2+1})$." }],
            steps: [
              { reasoning: "$\\sinh^{-1}1 = \\ln(1+\\sqrt2)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx \\ln(2.414) \\approx 0.881$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln(1+\\sqrt2) \\approx 0.881$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\frac{d}{dx}\\cosh^{-1}x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "Standard result." }],
            steps: [
              { reasoning: "$\\frac{d}{dx}\\cosh^{-1}x = \\frac{1}{\\sqrt{x^2-1}}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{\\sqrt{x^2-1}}$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\frac{d}{dx}\\sinh^{-1}x = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{1-x^2}$" },
            { id: "b", text: "$\\sqrt{x^2+1}$" },
            { id: "c", text: "$\\frac{1}{\\sqrt{x^2+1}}$" },
            { id: "d", text: "$\\frac{1}{\\sqrt{x^2-1}}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "Standard result." }],
            steps: [{ reasoning: "$\\frac{d}{dx}\\sinh^{-1}x = \\frac{1}{\\sqrt{x^2+1}}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{\\sqrt{x^2+1}}$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $\\tanh^{-1}\\left(\\frac12\\right)$, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.549, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate inverse", statement: "$\\frac12\\ln\\frac{1+x}{1-x}$." }],
            steps: [
              { reasoning: "$\\tanh^{-1}\\frac12 = \\frac12\\ln\\frac{1.5}{0.5} = \\frac12\\ln 3$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac12\\times1.099 = 0.549$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.549$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.549",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Differentiate $y = \\tanh^{-1}(3x)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chain rule", statement: "Apply chain rule." }],
            steps: [
              { reasoning: "$y' = \\frac{1}{1-(3x)^2}\\times3$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{3}{1-9x^2}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{3}{1-9x^2}$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\tanh^{-1} x$ is defined for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$|x| < 1$" },
            { id: "b", text: "$x > 0$" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "$x \\geq 1$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Domain", statement: "Range of $\\tanh$ is $(-1,1)$." }],
            steps: [{ reasoning: "Need $|x|<1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$|x|<1$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\cosh^{-1}(2)$, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.317, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate inverse", statement: "$\\ln(x+\\sqrt{x^2-1})$." }],
            steps: [
              { reasoning: "$\\cosh^{-1}2 = \\ln(2+\\sqrt3)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx \\ln(3.732) \\approx 1.317$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln(2+\\sqrt3) \\approx 1.317$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$\\sinh^{-1}(-1) = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\ln(1+\\sqrt2)$" },
            { id: "b", text: "$0$" },
            { id: "c", text: "Undefined" },
            { id: "d", text: "$\\ln(1+\\sqrt2)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Odd function", statement: "$\\sinh^{-1}$ is odd." }],
            steps: [{ reasoning: "$\\sinh^{-1}$ is odd, so value is $-\\ln(1+\\sqrt2)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\ln(1+\\sqrt2)$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the correct derivative of $\\cosh^{-1}x$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{\\sqrt{x^2-1}}$" },
            { id: "b", text: "$\\sqrt{x^2-1}$" },
            { id: "c", text: "$\\frac{1}{\\sqrt{x^2+1}}$" },
            { id: "d", text: "$\\frac{1}{1-x^2}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Derivative", statement: "Standard result." }],
            steps: [{ reasoning: "$\\frac{d}{dx}\\cosh^{-1}x = \\frac{1}{\\sqrt{x^2-1}}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{\\sqrt{x^2-1}}$",
          },
        },
        {
          id: "cialfm-u4-s3-inv-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $y = \\cosh^{-1}(2x)$.",
          parts: [
            { label: "a", prompt: "State the domain of $y$.", marks: 1 },
            { label: "b", prompt: "Find $\\frac{dy}{dx}$.", marks: 2 },
            { label: "c", prompt: "Evaluate $y$ when $x = \\frac12$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse function analysis", statement: "Domain, chain rule, substitution." }],
            steps: [
              { reasoning: "Need $2x \\geq 1$ → $x \\geq \\frac12$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$y' = \\frac{1}{\\sqrt{(2x)^2-1}}\\times2 = \\frac{2}{\\sqrt{4x^2-1}}$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b) shown.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$x=\\frac12$ → $\\cosh^{-1}1 = 0$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$x\\geq\\frac12$; $y'=\\frac{2}{\\sqrt{4x^2-1}}$; $y=0$",
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
            { id: "a", text: "Trigonometric equation" },
            { id: "b", text: "Polynomial in x" },
            { id: "c", text: "Exponential equation" },
            { id: "d", text: "Logarithmic only" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u4-s3-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The equation $\\sinh x = 0$ has solution…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = \\pm 1$" },
            { id: "b", text: "$x = 0$" },
            { id: "c", text: "$x = \\ln 2$" },
            { id: "d", text: "No solution" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic solve", statement: "$\\sinh$ is odd, zero at 0." }],
            steps: [{ reasoning: "$e^x = e^{-x}$ only when $x=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=0$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Solve $\\sinh x = \\frac{3}{4}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.693, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "Quadratic in $e^x$." }],
            steps: [
              { reasoning: "$e^x - e^{-x} = \\frac32$ → $2e^{2x} - 3e^x - 2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(2e^x+1)(e^x-2)=0$ → $e^x=2$ (positive root).", marks: 1, markCode: "M" },
              { reasoning: "$x = \\ln 2 \\approx 0.693$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln 2$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\cosh x = \\frac{13}{12}$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.405, tolerance: 0.001 }, { label: "b", answer: -0.405, tolerance: 0.001 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "Quadratic in $e^x$." }],
            steps: [
              { reasoning: "$e^x + e^{-x} = \\frac{13}{6}$ → $6e^{2x} - 13e^x + 6 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(3e^x-2)(2e^x-3)=0$ → $e^x = \\frac32$ or $\\frac23$.", marks: 1, markCode: "M" },
              { reasoning: "$x = \\ln\\frac32 \\approx 0.405$ or $x = \\ln\\frac23 \\approx -0.405$.", marks: 1, markCode: "M" },
              { reasoning: "Both answers (cosh is even).", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\pm\\ln\\frac32$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\sinh x = 1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.881, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential form", statement: "Quadratic in $e^x$." }],
            steps: [
              { reasoning: "$e^{2x} - 2e^x - 1 = 0$ → $e^x = 1+\\sqrt2$ (positive root).", marks: 1, markCode: "M" },
              { reasoning: "$x = \\ln(1+\\sqrt2)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 0.881$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln(1+\\sqrt2)$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\sinh x + \\cosh x = $",
          response: { type: "mcq", choices: [
            { id: "a", text: "$e^{x}$" },
            { id: "b", text: "$\\cosh 2x$" },
            { id: "c", text: "$\\frac{e^x}{2}$" },
            { id: "d", text: "$e^{-x}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simplification", statement: "Add the definitions." }],
            steps: [{ reasoning: "$\\frac{e^x-e^{-x}+e^x+e^{-x}}{2} = e^x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$e^x$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The equation $\\tanh x = 0$ has solution…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = \\ln 2$" },
            { id: "b", text: "$x = 0$" },
            { id: "c", text: "Infinitely many" },
            { id: "d", text: "No solution" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Basic solve", statement: "$\\sinh x = 0$ at $x=0$." }],
            steps: [{ reasoning: "$\\tanh x = \\frac{\\sinh x}{\\cosh x} = 0$ when $\\sinh x = 0$ → $x=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=0$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that the equation $\\sinh x = \\cosh x$ has no real solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Range of tanh", statement: "$\\tanh x < 1$ for all real $x$." }],
            steps: [
              { reasoning: "Divide by $\\cosh x > 0$: equation becomes $\\tanh x = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$\\tanh x = \\frac{e^x-e^{-x}}{e^x+e^{-x}} < 1$ for all real $x$ since $e^{-x} > 0$.", marks: 1, markCode: "M" },
              { reasoning: "Alternatively $\\cosh x - \\sinh x = e^{-x} > 0$ always, so $\\sinh x \\neq \\cosh x$.", marks: 1, markCode: "M" },
              { reasoning: "No real solution.", marks: 1, markCode: "A" }],
            finalAnswer: "No solution",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When solving a hyperbolic equation by substituting $u = e^x$, the valid solutions for $u$ must satisfy…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Any real $u$" },
            { id: "b", text: "$u > 0$" },
            { id: "c", text: "$u \\geq 0$" },
            { id: "d", text: "$u < 0$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential substitution", statement: "$e^x > 0$ always." }],
            steps: [{ reasoning: "Reject any negative or zero roots for $u$.", marks: 1, markCode: "A" }],
            finalAnswer: "$u > 0$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $3\\cosh x - 4\\sinh x = 1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.606, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Linear combination", statement: "Combine into single exponential." }],
            steps: [
              { reasoning: "$3\\cdot\\frac{e^x+e^{-x}}2 - 4\\cdot\\frac{e^x-e^{-x}}2 = \\frac{-e^x+7e^{-x}}2 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$-e^{2x} + 7 = 2e^x$ → $e^{2x} + 2e^x - 7 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$e^x = \\frac{-2+\\sqrt{32}}{2} = 2\\sqrt2 - 1$ (positive root).", marks: 1, markCode: "M" },
              { reasoning: "$x = \\ln(2\\sqrt2-1) \\approx 0.606$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\ln(2\\sqrt2-1)$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\sinh^2 x = 8$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Square root cases", statement: "$\\sinh x = \\pm 2\\sqrt2$." }],
            steps: [
              { reasoning: "$\\sinh x = 2\\sqrt2$ or $\\sinh x = -2\\sqrt2$.", marks: 1, markCode: "M" },
              { reasoning: "For $+2\\sqrt2$: $e^{2x} - 4\\sqrt2 e^x - 1 = 0$ → $e^x = 3+2\\sqrt2$ → $x = \\ln(3+2\\sqrt2)$.", marks: 1, markCode: "M" },
              { reasoning: "For $-2\\sqrt2$: $e^x = 3-2\\sqrt2$ → $x = \\ln(3-2\\sqrt2)$.", marks: 1, markCode: "M" },
              { reasoning: "Two solutions (note $\\ln(3-2\\sqrt2) = -\\ln(3+2\\sqrt2)$).", marks: 1, markCode: "A" }],
            finalAnswer: "$x = \\pm\\ln(3+2\\sqrt2)$",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The equation $\\cosh x = \\frac12$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One solution" },
            { id: "b", text: "Infinitely many" },
            { id: "c", text: "Two solutions" },
            { id: "d", text: "No real solution" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Range of cosh", statement: "$\\cosh x \\geq 1$." }],
            steps: [{ reasoning: "$\\cosh x \\geq 1 > \\frac12$ for all real $x$.", marks: 1, markCode: "A" }],
            finalAnswer: "No real solution",
          },
        },
        {
          id: "cialfm-u4-s3-eq-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider the expressions $\\sinh x$, $\\cosh x$ and $e^x$.",
          parts: [
            { label: "a", prompt: "Show that $\\sinh x + \\cosh x = e^x$.", marks: 1 },
            { label: "b", prompt: "Hence solve $\\sinh x + \\cosh x = 5$.", marks: 2 },
            { label: "c", prompt: "State the number of solutions of $\\sinh x - \\cosh x = -\\frac12$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exponential shortcuts", statement: "$\\sinh\\pm\\cosh$ collapse to exponentials." }],
            steps: [
              { reasoning: "$\\sinh x + \\cosh x = \\frac{(e^x-e^{-x})+(e^x+e^{-x})}{2} = e^x$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$e^x = 5$ → $x = \\ln 5$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): $x=\\ln5$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$\\sinh x - \\cosh x = e^{-x} = -\\frac12$ has no solution since $e^{-x}>0$ — zero solutions.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$x=\\ln5$; no solution for part (c)",
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
