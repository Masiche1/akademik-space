import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cipum-u6-lesson-6-2",
  code: "6-2",
  title: "Hyperbolic Functions and Numerical Methods",
  goal: "I CAN use hyperbolic functions and apply numerical methods to solve equations.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics 3: numerical methods, hyperbolic functions",
  ],
  vocabulary: [
    { term: "sinh x", definition: "(e^x − e^(−x))/2 — hyperbolic sine." },
    { term: "cosh x", definition: "(e^x + e^(−x))/2 — hyperbolic cosine." },
    { term: "tanh x", definition: "sinh x / cosh x — hyperbolic tangent." },
    {
      term: "Identity",
      definition: "cosh²x − sinh²x = 1 — analogue of cos²+sin²=1.",
    },
    {
      term: "Iteration",
      definition: "Repeated application of x_{n+1} = g(x_n) to converge.",
    },
    {
      term: "Newton-Raphson",
      definition: "x_{n+1} = x_n − f(x_n)/f′(x_n) — fast convergence.",
    },
    {
      term: "Sign change",
      definition: "f(a) and f(b) opposite signs → root between (IVT).",
    },
    {
      term: "Bisection",
      definition: "Halve interval repeatedly using sign change.",
    },
    {
      term: "Rate of convergence",
      definition: "Linear vs quadratic — how fast errors shrink.",
    },
    { term: "Stationary point", definition: "Where f′(x) = 0." },
  ],
  concepts: [
    {
      id: "cipum-u6-hyp",
      title: "Hyperbolic functions",
      skill: "Use definitions and identities of hyperbolic functions.",
      lesson: {
        sections: [
          {
            heading: "Definitions",
            body: "**sinh x** = (e^x − e^(−x))/2 — odd function. **cosh x** = (e^x + e^(−x))/2 — even function. **tanh x** = sinh x/cosh x. **coth, sech, csch** defined analogously. All defined for all real x.",
          },
          {
            heading: "Key identities",
            body: "**cosh²x − sinh²x = 1** (analogue of cos²+sin²=1). **1 − tanh²x = sech²x** (analogue of sec² = 1+tan²). **sinh(2x) = 2 sinh x cosh x**. **cosh(2x) = cosh²x + sinh²x = 2cosh²x−1 = 1+2sinh²x**.",
          },
          {
            heading: "Graphs and calculus",
            body: "sinh x: S-shaped through origin. cosh x: U-shaped, minimum 1 at x=0. tanh x: S-shaped, asymptotes ±1. Derivatives: d/dx sinh = cosh, cosh = sinh, tanh = sech².",
          },
        ],
        keyFormulas: [
          { name: "sinh x", statement: "(e^x − e^(−x))/2" },
          { name: "cosh x", statement: "(e^x + e^(−x))/2" },
          { name: "Identity", statement: "cosh²x − sinh²x = 1" },
          { name: "Derivative", statement: "d/dx sinh x = cosh x" },
        ],
        workedExample: {
          problem: "Show cosh²x − sinh²x = 1.",
          solution:
            "cosh²x − sinh²x = [(e^x+e^(−x))/2]² − [(e^x−e^(−x))/2]² = (1/4)[(e^x+e^(−x))² − (e^x−e^(−x))²] = (1/4)(4) = 1.",
        },
      },
      questions: [
        {
          id: "cipum-u6-h1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "sinh x is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(e^x − e^(−x))/2" },
              { id: "b", text: "(e^x + e^(−x))/2" },
              { id: "c", text: "e^x" },
              { id: "d", text: "(e^x − e^(−x))/x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "sinh",
                statement: "(e^x − e^(−x))/2.",
              },
            ],
            steps: [
              { reasoning: "sinh = difference/2.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a).",
          },
        },
        {
          id: "cipum-u6-h1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "cosh x is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(e^x + e^(−x))/2" },
              { id: "b", text: "(e^x − e^(−x))/2" },
              { id: "c", text: "e^x" },
              { id: "d", text: "e^(−x)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "cosh",
                statement: "(e^x + e^(−x))/2.",
              },
            ],
            steps: [{ reasoning: "cosh = sum/2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a).",
          },
        },
        {
          id: "cipum-u6-h1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "tanh x equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sinh x / cosh x" },
              { id: "b", text: "cosh x / sinh x" },
              { id: "c", text: "sinh x · cosh x" },
              { id: "d", text: "1/sinh x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "tanh", statement: "sinh/cosh." },
            ],
            steps: [
              { reasoning: "tanh = sinh/cosh.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a).",
          },
        },
        {
          id: "cipum-u6-h1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "cosh²x − sinh²x =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "−1" },
              { id: "d", text: "2" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity",
                statement: "cosh²−sinh²=1.",
              },
            ],
            steps: [{ reasoning: "= 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-h1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "sinh x is an:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Odd function — sinh(−x) = −sinh x" },
              { id: "b", text: "Even function" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Constant" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "sinh parity",
                statement: "Odd function.",
              },
            ],
            steps: [{ reasoning: "sinh is odd.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Odd.",
          },
        },
        {
          id: "cipum-u6-h1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "cosh x is an:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Even function — cosh(−x) = cosh x" },
              { id: "b", text: "Odd function" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Constant" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "cosh parity",
                statement: "Even function.",
              },
            ],
            steps: [{ reasoning: "cosh is even.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Even.",
          },
        },
        {
          id: "cipum-u6-h1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Minimum value of cosh x is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 (at x = 0)" },
              { id: "b", text: "0" },
              { id: "c", text: "−1" },
              { id: "d", text: "No minimum" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "cosh min", statement: "cosh x ≥ 1." },
            ],
            steps: [{ reasoning: "cosh min = 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-h1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "d/dx sinh x =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cosh x" },
              { id: "b", text: "sinh x" },
              { id: "c", text: "−cosh x" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Derivative",
                statement: "d/dx sinh = cosh.",
              },
            ],
            steps: [{ reasoning: "= cosh x.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) cosh x.",
          },
        },
        {
          id: "cipum-u6-h1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "d/dx cosh x =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sinh x" },
              { id: "b", text: "cosh x" },
              { id: "c", text: "−sinh x" },
              { id: "d", text: "1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Derivative",
                statement: "d/dx cosh = sinh.",
              },
            ],
            steps: [{ reasoning: "= sinh x.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) sinh x.",
          },
        },
        {
          id: "cipum-u6-h1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "sinh(0) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "−1" },
              { id: "d", text: "Undefined" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "sinh(0)", statement: "(1−1)/2 = 0." },
            ],
            steps: [{ reasoning: "= 0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 0.",
          },
        },
        {
          id: "cipum-u6-h1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "cosh(0) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "−1" },
              { id: "d", text: "Undefined" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "cosh(0)", statement: "(1+1)/2 = 1." },
            ],
            steps: [{ reasoning: "= 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-h1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "tanh x approaches as x → ∞:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 (horizontal asymptote)" },
              { id: "b", text: "0" },
              { id: "c", text: "∞" },
              { id: "d", text: "−1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "tanh asymptote",
                statement: "tanh → ±1.",
              },
            ],
            steps: [{ reasoning: "Asymptote y = 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-h1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "sinh(2x) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 sinh x cosh x" },
              { id: "b", text: "sinh²x + cosh²x" },
              { id: "c", text: "2 sinh x" },
              { id: "d", text: "cosh²x − sinh²x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Double angle",
                statement: "sinh 2x = 2 sinh x cosh x.",
              },
            ],
            steps: [
              { reasoning: "= 2 sinh x cosh x.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a).",
          },
        },
        {
          id: "cipum-u6-h1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "cosh(2x) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cosh²x + sinh²x" },
              { id: "b", text: "2 sinh x cosh x" },
              { id: "c", text: "cosh²x − sinh²x" },
              { id: "d", text: "2 cosh x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Double angle",
                statement: "cosh 2x = cosh²x + sinh²x.",
              },
            ],
            steps: [
              { reasoning: "= cosh²x + sinh²x.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a).",
          },
        },
        {
          id: "cipum-u6-h1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "1 − tanh²x =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sech²x" },
              { id: "b", text: "csch²x" },
              { id: "c", text: "−sech²x" },
              { id: "d", text: "tanh²x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity",
                statement: "1 − tanh²x = sech²x.",
              },
            ],
            steps: [{ reasoning: "= sech²x.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) sech²x.",
          },
        },
        {
          id: "cipum-u6-h1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "sech x is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/cosh x" },
              { id: "b", text: "1/sinh x" },
              { id: "c", text: "cosh x/sinh x" },
              { id: "d", text: "cosh x · sinh x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "sech", statement: "1/cosh x." },
            ],
            steps: [{ reasoning: "sech = 1/cosh.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1/cosh.",
          },
        },
        {
          id: "cipum-u6-h1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "csch x is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/sinh x" },
              { id: "b", text: "1/cosh x" },
              { id: "c", text: "sinh x/cosh x" },
              { id: "d", text: "cosh x/sinh x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "csch", statement: "1/sinh x." },
            ],
            steps: [{ reasoning: "csch = 1/sinh.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1/sinh.",
          },
        },
        {
          id: "cipum-u6-h1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "coth x is defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cosh x/sinh x" },
              { id: "b", text: "sinh x/cosh x" },
              { id: "c", text: "1/cosh x" },
              { id: "d", text: "1/sinh x" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "coth", statement: "cosh/sinh." },
            ],
            steps: [
              { reasoning: "coth = cosh/sinh.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) cosh/sinh.",
          },
        },
        {
          id: "cipum-u6-h1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "tanh(0) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "−1" },
              { id: "d", text: "Undefined" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "tanh(0)", statement: "0/1 = 0." },
            ],
            steps: [{ reasoning: "= 0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 0.",
          },
        },
        {
          id: "cipum-u6-h1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the fundamental hyperbolic identity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Identity",
                statement: "cosh²−sinh²=1.",
              },
            ],
            steps: [
              { reasoning: "cosh²x − sinh²x = 1.", marks: 1, markCode: "M" },
              {
                reasoning: "Analogue of cos²θ + sin²θ = 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "cosh²x − sinh²x = 1.",
          },
        },
        {
          id: "cipum-u6-h1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why cosh x has a minimum value of 1.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "cosh min",
                statement: "e^x + e^(−x) ≥ 2.",
              },
            ],
            steps: [
              {
                reasoning: "e^x + e^(−x) ≥ 2 by AM-GM (equality at x=0).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "cosh x = (e^x + e^(−x))/2 ≥ 1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "AM-GM → cosh x ≥ 1.",
          },
        },
        {
          id: "cipum-u6-h1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Derive sinh(2x) = 2 sinh x cosh x from definitions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Derivation",
                statement: "From exponential definitions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "sinh(2x) = (e^(2x) − e^(−2x))/2 = (e^x − e^(−x))(e^x + e^(−x))/2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "= 2·[(e^x − e^(−x))/2]·[(e^x + e^(−x))/2] = 2 sinh x cosh x.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result confirmed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "sinh 2x = 2 sinh x cosh x.",
          },
        },
        {
          id: "cipum-u6-h1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve cosh x = 2 for x (give exact form).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solve cosh",
                statement: "e^x + e^(−x) = 4.",
              },
            ],
            steps: [
              {
                reasoning: "(e^x + e^(−x))/2 = 2 → e^x + e^(−x) = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Let u = e^x: u + 1/u = 4 → u² − 4u + 1 = 0 → u = 2 ± √3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "x = ln(2 + √3) or x = ln(2 − √3) = −ln(2 + √3).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = ±ln(2 + √3).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = ±ln(2+√3).",
          },
        },
        {
          id: "cipum-u6-h1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "coth x approaches as x → ∞:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "∞" },
              { id: "d", text: "−1" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "coth asymptote",
                statement: "coth → ±1.",
              },
            ],
            steps: [{ reasoning: "→ 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-h1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sketch the graph of tanh x.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "tanh graph",
                statement: "S-shape, asymptotes ±1.",
              },
            ],
            steps: [
              {
                reasoning: "S-shaped curve through origin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Horizontal asymptotes y = 1 and y = −1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "S-curve, asymptotes ±1.",
          },
        },
        {
          id: "cipum-u6-h1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the analogy between trigonometric and hyperbolic identities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analogy",
                statement: "cos²+sin²=1 vs cosh²−sinh²=1.",
              },
            ],
            steps: [
              {
                reasoning: "Trig: cos²θ + sin²θ = 1; hyp: cosh²x − sinh²x = 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trig: sec²θ = 1+tan²θ; hyp: sech²x = 1−tanh²x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sign differences arise from i in definitions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Similar structure, sign differences.",
          },
        },
        {
          id: "cipum-u6-h1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "sech(0) =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "0" },
              { id: "c", text: "−1" },
              { id: "d", text: "Undefined" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "sech(0)",
                statement: "1/cosh(0) = 1/1 = 1.",
              },
            ],
            steps: [{ reasoning: "= 1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.",
          },
        },
        {
          id: "cipum-u6-h1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate sinh(ln 2).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluate",
                statement: "(e^x − e^(−x))/2.",
              },
            ],
            steps: [
              {
                reasoning: "e^(ln2) = 2, e^(−ln2) = 1/2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "sinh(ln2) = (2 − 0.5)/2 = 0.75.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.75.",
          },
        },
        {
          id: "cipum-u6-h1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve sinh x = 3/4 for x (exact form).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Solve sinh",
                statement: "e^x − e^(−x) = 3/2.",
              },
            ],
            steps: [
              {
                reasoning: "(e^x − e^(−x))/2 = 3/4 → e^x − e^(−x) = 3/2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "u − 1/u = 3/2 → 2u² − 3u − 2 = 0 → u = (3 ± 5)/4 → u = 2 or u = −1/2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "u = e^x = 2 → x = ln 2 (u = −1/2 rejected).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = ln 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = ln 2.",
          },
        },
        {
          id: "cipum-u6-h1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are hyperbolic functions useful in calculus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Usefulness",
                statement: "Simple derivatives, integrals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Derivatives cycle: sinh→cosh→sinh, like sin→cos→−sin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Useful for integrals involving √(x²±1) substitutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Simple derivatives, useful integrals.",
          },
        },
      ],
    },
    {
      id: "cipum-u6-num",
      title: "Numerical methods",
      skill: "Apply iteration, Newton-Raphson, and bisection to find roots.",
      lesson: {
        sections: [
          {
            heading: "Iteration",
            body: "Rewrite equation f(x) = 0 as x = g(x). Iterate x_{n+1} = g(x_n) starting from x₀. If converging, x_n → root. Convergence depends on |g′(root)| < 1.",
          },
          {
            heading: "Newton-Raphson",
            body: "**x_{n+1} = x_n − f(x_n)/f′(x_n)**. Quadratic convergence — very fast. Needs f and f′. May fail if f′(x_n) = 0 or poor initial guess.",
          },
          {
            heading: "Sign change / bisection",
            body: "If f(a) and f(b) have opposite signs, root in (a,b) (Intermediate Value Theorem). **Bisection**: evaluate midpoint, keep subinterval with sign change — halves error each step. Slow but guaranteed.",
          },
        ],
        keyFormulas: [
          { name: "Iteration", statement: "x_{n+1} = g(x_n)" },
          { name: "Newton-Raphson", statement: "x_{n+1} = x_n − f/f′" },
          { name: "Bisection", statement: "Halve interval each step" },
          { name: "IVT", statement: "Sign change → root exists" },
        ],
        workedExample: {
          problem: "Find root of x² − 2 = 0 using Newton-Raphson from x₀ = 1.",
          solution:
            "f(x) = x²−2, f′(x) = 2x. x₁ = 1 − (−1)/2 = 1.5. x₂ = 1.5 − 0.25/3 = 1.4167 → √2 ≈ 1.4142.",
        },
      },
      questions: [
        {
          id: "cipum-u6-n1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Iteration solves f(x) = 0 by rewriting as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "x = g(x)" },
              { id: "b", text: "x = f(x)" },
              { id: "c", text: "g(x) = 0" },
              { id: "d", text: "f(x) = g(x)" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Iteration", statement: "x = g(x)." },
            ],
            steps: [{ reasoning: "x = g(x).", marks: 1, markCode: "M" }],
            finalAnswer: "(a) x = g(x).",
          },
        },
        {
          id: "cipum-u6-n1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton-Raphson formula is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "x_{n+1} = x_n − f(x_n)/f′(x_n)" },
              { id: "b", text: "x_{n+1} = x_n + f/f′" },
              { id: "c", text: "x_{n+1} = f/f′" },
              { id: "d", text: "x_{n+1} = x_n²" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton-Raphson",
                statement: "x − f/f′.",
              },
            ],
            steps: [
              { reasoning: "x_{n+1} = x_n − f/f′.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a).",
          },
        },
        {
          id: "cipum-u6-n1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bisection method relies on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sign change indicating a root" },
              { id: "b", text: "Derivative" },
              { id: "c", text: "Tangents" },
              { id: "d", text: "No conditions" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bisection",
                statement: "Sign change → root.",
              },
            ],
            steps: [{ reasoning: "Sign change.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Sign change.",
          },
        },
        {
          id: "cipum-u6-n1-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton-Raphson has convergence order:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quadratic (order 2)" },
              { id: "b", text: "Linear" },
              { id: "c", text: "Cubic" },
              { id: "d", text: "None" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergence",
                statement: "Quadratic.",
              },
            ],
            steps: [
              { reasoning: "Quadratic convergence.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Quadratic.",
          },
        },
        {
          id: "cipum-u6-n1-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Iteration x_{n+1} = g(x_n) converges if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "|g′(root)| < 1" },
              { id: "b", text: "|g′(root)| > 1" },
              { id: "c", text: "g′ = 0" },
              { id: "d", text: "Always converges" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergence",
                statement: "|g′| < 1.",
              },
            ],
            steps: [{ reasoning: "|g′| < 1 needed.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) |g′|<1.",
          },
        },
        {
          id: "cipum-u6-n1-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Intermediate Value Theorem states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sign change → root exists between" },
              { id: "b", text: "No root" },
              { id: "c", text: "Derivative exists" },
              { id: "d", text: "Function continuous only" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IVT",
                statement: "Sign change → root.",
              },
            ],
            steps: [{ reasoning: "IVT.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Root exists.",
          },
        },
        {
          id: "cipum-u6-n1-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In bisection, each step:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Halves the interval" },
              { id: "b", text: "Doubles it" },
              { id: "c", text: "Keeps it same" },
              { id: "d", text: "Removes it" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bisection",
                statement: "Halves interval.",
              },
            ],
            steps: [
              { reasoning: "Halves each step.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Halves.",
          },
        },
        {
          id: "cipum-u6-n1-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton-Raphson uses:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tangent line approximation" },
              { id: "b", text: "Secant only" },
              { id: "c", text: "Bisection" },
              { id: "d", text: "No geometry" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Newton-Raphson",
                statement: "Tangent approximation.",
              },
            ],
            steps: [{ reasoning: "Tangent line.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Tangent.",
          },
        },
        {
          id: "cipum-u6-n1-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A root of f(x) = 0 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Value of x where f(x) = 0" },
              { id: "b", text: "f(0)" },
              { id: "c", text: "y-intercept" },
              { id: "d", text: "Maximum" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Root", statement: "f(x) = 0." },
            ],
            steps: [{ reasoning: "Root = f(x)=0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) f(x)=0.",
          },
        },
        {
          id: "cipum-u6-n1-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Iteration may fail to converge if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "|g′(root)| ≥ 1" },
              { id: "b", text: "|g′(root)| < 1" },
              { id: "c", text: "g is linear" },
              { id: "d", text: "Never fails" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divergence",
                statement: "|g′| ≥ 1 fails.",
              },
            ],
            steps: [
              { reasoning: "|g′| ≥ 1 → diverge.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) |g′|≥1.",
          },
        },
        {
          id: "cipum-u6-n1-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Newton-Raphson for f(x) = x² − 2 from x₀=1: x₁ =",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.5" },
              { id: "b", text: "2" },
              { id: "c", text: "0.5" },
              { id: "d", text: "1.25" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Newton step",
                statement: "1 − (−1)/2 = 1.5.",
              },
            ],
            steps: [{ reasoning: "x₁ = 1.5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.5.",
          },
        },
        {
          id: "cipum-u6-n1-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "For f(x) = x³ − x − 2, Newton-Raphson needs:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "f(x) and f′(x) = 3x² − 1" },
              { id: "b", text: "Only f(x)" },
              { id: "c", text: "Only f′" },
              { id: "d", text: "Neither" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Newton needs", statement: "f and f′." },
            ],
            steps: [{ reasoning: "Need f and f′.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) f + f′.",
          },
        },
        {
          id: "cipum-u6-n1-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bisection on [1, 2] for root: first midpoint is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.5" },
              { id: "b", text: "1.25" },
              { id: "c", text: "1.75" },
              { id: "d", text: "2" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bisection", statement: "(1+2)/2 = 1.5." },
            ],
            steps: [{ reasoning: "Midpoint = 1.5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1.5.",
          },
        },
        {
          id: "cipum-u6-n1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "After one bisection step on [1,2], interval width becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.5" },
              { id: "b", text: "1" },
              { id: "c", text: "0.25" },
              { id: "d", text: "2" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bisection",
                statement: "Halves: 1 → 0.5.",
              },
            ],
            steps: [{ reasoning: "Width = 0.5.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 0.5.",
          },
        },
        {
          id: "cipum-u6-n1-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Newton-Raphson fails when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "f′(x_n) = 0 at some iterate" },
              { id: "b", text: "f is continuous" },
              { id: "c", text: "Root exists" },
              { id: "d", text: "Always works" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NR failure",
                statement: "f′ = 0 → division by zero.",
              },
            ],
            steps: [{ reasoning: "f′ = 0 → fail.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) f′=0.",
          },
        },
        {
          id: "cipum-u6-n1-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fixed point of x = g(x) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Value where x = g(x)" },
              { id: "b", text: "g(0)" },
              { id: "c", text: "Maximum" },
              { id: "d", text: "Minimum" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed point",
                statement: "x = g(x).",
              },
            ],
            steps: [
              { reasoning: "Fixed point = x=g(x).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) x=g(x).",
          },
        },
        {
          id: "cipum-u6-n1-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sign change method requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "f(a)·f(b) < 0" },
              { id: "b", text: "f(a)·f(b) > 0" },
              { id: "c", text: "f′ exists" },
              { id: "d", text: "No conditions" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sign change",
                statement: "Opposite signs.",
              },
            ],
            steps: [{ reasoning: "f(a)·f(b) < 0.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) f(a)f(b)<0.",
          },
        },
        {
          id: "cipum-u6-n1-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Newton-Raphson converges faster than bisection because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Uses derivative information — quadratic convergence",
              },
              { id: "b", text: "Uses more points" },
              { id: "c", text: "Slower" },
              { id: "d", text: "Same speed" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NR advantage",
                statement: "Derivative → quadratic.",
              },
            ],
            steps: [
              { reasoning: "Quadratic convergence.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Quadratic.",
          },
        },
        {
          id: "cipum-u6-n1-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Staircase/cobweb diagram is used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Visualising iteration convergence" },
              { id: "b", text: "Bisection" },
              { id: "c", text: "Newton-Raphson" },
              { id: "d", text: "No method" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cobweb",
                statement: "Iteration visualisation.",
              },
            ],
            steps: [
              { reasoning: "Cobweb = iteration.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Iteration.",
          },
        },
        {
          id: "cipum-u6-n1-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between iteration and Newton-Raphson.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Methods",
                statement: "Fixed point vs tangent.",
              },
            ],
            steps: [
              {
                reasoning: "Iteration: x_{n+1} = g(x_n) — needs |g′|<1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Newton-Raphson: uses f′ — quadratic convergence, needs f′.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Iteration = g(x); NR = tangent.",
          },
        },
        {
          id: "cipum-u6-n1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the Intermediate Value Theorem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IVT",
                statement: "Continuous + sign change → root.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If f continuous on [a,b] and f(a), f(b) opposite signs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then ∃c ∈ (a,b) with f(c) = 0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sign change + continuity → root.",
          },
        },
        {
          id: "cipum-u6-n1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Newton-Raphson converges quadratically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quadratic",
                statement: "Error squared each step.",
              },
            ],
            steps: [
              {
                reasoning: "Tangent approximation error ~ f″(ξ)/2f′(x_n)·e_n².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New error proportional to square of old error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e_{n+1} ≈ C·e_n² → quadratic convergence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Error ~ e² each step.",
          },
        },
        {
          id: "cipum-u6-n1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use Newton-Raphson to find root of f(x) = x³ − x − 2 from x₀ = 1.5 (two iterations).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Newton-Raphson",
                statement: "x_{n+1} = x_n − f/f′.",
              },
            ],
            steps: [
              {
                reasoning: "f(1.5) = 3.375 − 1.5 − 2 = −0.125; f′(1.5) = 5.75.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "x₁ = 1.5 − (−0.125)/5.75 = 1.5 + 0.0217 = 1.5217.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "f(1.5217) ≈ 0.0034; f′ ≈ 5.946; x₂ ≈ 1.5217 − 0.00057 ≈ 1.5211.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Root ≈ 1.521 (true ≈ 1.5214).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x ≈ 1.521.",
          },
        },
        {
          id: "cipum-u6-n1-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bisection is guaranteed to converge if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sign change exists on interval" },
              { id: "b", text: "f′ exists" },
              { id: "c", text: "f is linear" },
              { id: "d", text: "Never guaranteed" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bisection guarantee",
                statement: "Sign change → converges.",
              },
            ],
            steps: [
              {
                reasoning: "Guaranteed with sign change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sign change.",
          },
        },
        {
          id: "cipum-u6-n1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a stationary point of iteration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stationary point",
                statement: "g′(x) = 0.",
              },
            ],
            steps: [
              {
                reasoning: "Point where g′(x) = 0 — iteration stalls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can cause slow convergence or failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Where g′(x) = 0.",
          },
        },
        {
          id: "cipum-u6-n1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between linear and quadratic convergence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Convergence rates",
                statement: "Error reduction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Linear: e_{n+1} ≈ k·e_n — constant factor reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Quadratic: e_{n+1} ≈ C·e_n² — error squared each step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Quadratic much faster near root.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Linear ~k·e; quadratic ~e².",
          },
        },
        {
          id: "cipum-u6-n1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To use Newton-Raphson you need:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "f(x) and its derivative" },
              { id: "b", text: "Only f(x)" },
              { id: "c", text: "Only f′" },
              { id: "d", text: "Neither" },
            ],
          correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NR requirement",
                statement: "f and f′.",
              },
            ],
            steps: [{ reasoning: "Need f and f′.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) f + f′.",
          },
        },
        {
          id: "cipum-u6-n1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find root of x² = 3 by Newton-Raphson from x₀ = 1 (first iteration).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "NR", statement: "x₁ = x₀ − f/f′." },
            ],
            steps: [
              {
                reasoning: "f(x) = x² − 3, f′(x) = 2x. f(1) = −2, f′(1) = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "x₁ = 1 − (−2)/2 = 1 + 1 = 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x₁ = 2.",
          },
        },
        {
          id: "cipum-u6-n1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that iteration x_{n+1} = (x_n + 2/x_n)/2 converges to √2 and find x₃ from x₀ = 1.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Iteration",
                statement: "Fixed point √2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fixed point: x = (x + 2/x)/2 → 2x = x + 2/x → x = 2/x → x² = 2 → x = √2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x₁ = (1 + 2)/2 = 1.5.", marks: 1, markCode: "M" },
              {
                reasoning: "x₂ = (1.5 + 2/1.5)/2 = (1.5 + 1.333)/2 = 1.4167.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "x₃ = (1.4167 + 1.4118)/2 ≈ 1.4142 ≈ √2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "x₃ ≈ 1.4142 = √2.",
          },
        },
        {
          id: "cipum-u6-n1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "When would you choose bisection over Newton-Raphson?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Method choice",
                statement: "Bisection when no derivative.",
              },
            ],
            steps: [
              {
                reasoning: "When f′ unavailable or expensive to compute.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When guaranteed convergence needed (sign change exists).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No derivative or need guarantee.",
          },
        },
      ],
    },
  ],
};
