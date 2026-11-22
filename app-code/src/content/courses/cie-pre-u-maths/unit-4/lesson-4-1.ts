import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cipum-u4-lesson-4-1",
  code: "4-1",
  title: "Exponential and Logarithmic Functions",
  goal: "I CAN work with exponential and logarithmic functions and solve equations involving them.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: exponentials and logarithms",
  ],
  vocabulary: [
    {
      term: "Exponential function",
      definition: "Function of form aˣ where a > 0, a ≠ 1.",
    },
    {
      term: "Logarithm",
      definition: "Inverse of exponentiation: logₐb = c means aᶜ = b.",
    },
    {
      term: "Natural logarithm",
      definition: "ln x = logₑx — logarithm base e.",
    },
    {
      term: "Change of base",
      definition: "logₐb = ln b / ln a — converting between bases.",
    },
    {
      term: "Exponential growth",
      definition: "Modelled by A = A₀eᵏᵗ — continuous compounding.",
    },
    {
      term: "Doubling time",
      definition:
        "Time for a quantity to double — t = ln 2 / k for exponential growth.",
    },
  ],
  concepts: [
    {
      id: "cipum-u4-s1-explog",
      title: "Exponentials and logarithms",
      skill:
        "Simplify log expressions, solve exponential equations and model growth/decay.",
      lesson: {
        sections: [
          {
            heading: "Logarithm laws",
            body: "Three laws: logₐ(xy) = logₐx + logₐy; logₐ(x/y) = logₐx − logₐy; logₐxⁿ = n·logₐx. Also logₐa = 1, logₐ1 = 0, a^(logₐx) = x, and logₐx = ln x / ln a (change of base). The natural exponential eˣ has derivative eˣ — making it central to calculus.",
          },
          {
            heading: "Exponential equations",
            body: "To solve aˣ = b: take logs — x = ln b / ln a. For equations like 3ˣ = 5·2ˣ, divide to isolate then take logs. For equations like e²ˣ − 3eˣ + 2 = 0, substitute u = eˣ to get a quadratic in u. Always check that logarithm arguments are positive.",
          },
          {
            heading: "Growth and decay models",
            body: "Exponential growth: N = N₀eᵏᵗ (k > 0); decay: N = N₀e⁻ᵏᵗ. Doubling time T = ln2/k; half-life T½ = ln2/k. Compound interest uses A = P(1 + r/n)ⁿᵗ or continuous A = Peʳᵗ. Population, radioactivity and finance all use these models.",
          },
        ],
        keyFormulas: [
          {
            name: "Log laws",
            statement:
              "$\\log_a(xy)=\\log_a x+\\log_a y$; $\\log_a x^n = n\\log_a x$; $\\log_a b = \\frac{\\ln b}{\\ln a}$",
          },
          {
            name: "Exponential model",
            statement:
              "$N = N_0 e^{kt}$; doubling/half-life $= \\frac{\\ln 2}{|k|}$",
          },
        ],
        workedExample: {
          problem: "Solve $2^{x+1} = 5$.",
          solution:
            "$(x+1)\\ln 2 = \\ln 5 \\Rightarrow x + 1 = \\frac{\\ln 5}{\\ln 2} \\approx 2.32 \\Rightarrow x \\approx 1.32$.",
        },
      },
      questions: [
        {
          id: "cipum-u4-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\log_2 8 + \\log_2 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "32" },
              { id: "b", text: "12" },
              { id: "c", text: "6" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Log product law",
                statement: "$\\log_a(xy) = \\log_a x + \\log_a y$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\log_2 32 = 5$ since $2^5 = 32$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipum-u4-exp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $e^{2x} = 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential equation",
                statement: "Take natural logs of both sides.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = \\ln 7 \\Rightarrow x = \\frac{\\ln 7}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x \\approx 0.973$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\frac{\\ln 7}{2} \\approx 0.973$",
          },
        },
        {
          id: "cipum-u4-exp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $3^{x} = 5 \\times 2^{x}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential equation",
                statement: "Divide to isolate, then take logarithms.",
              },
            ],
            steps: [
              {
                reasoning: "$\\left(\\frac{3}{2}\\right)^x = 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = \\frac{\\ln 5}{\\ln(3/2)}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x \\approx \\frac{1.609}{0.405} \\approx 3.97$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\frac{\\ln 5}{\\ln 1.5} \\approx 3.97$",
          },
        },
        {
          id: "cipum-u4-exp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A population grows as $P = 500e^{0.03t}$. Find the doubling time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Doubling time",
                statement: "Set P = 2P₀ and solve for t.",
              },
            ],
            steps: [
              {
                reasoning: "$2P_0 = P_0 e^{0.03t} \\Rightarrow 2 = e^{0.03t}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$0.03t = \\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0.03}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$t \\approx \\frac{0.693}{0.03} \\approx 23.1$ years.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Doubling time ≈ 23.1 years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 23.1 years",
          },
        },
        {
          id: "cipum-u4-exp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_3 81$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "27" },
              { id: "c", text: "4" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logarithm",
                statement: "$\\log_a b = c$ means $a^c = b$.",
              },
            ],
            steps: [
              {
                reasoning: "$3^4 = 81$, so $\\log_3 81 = 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipum-u4-exp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $4^x = 64$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential equation",
                statement: "Take logarithms of both sides.",
              },
            ],
            steps: [
              {
                reasoning: "$x\\ln 4 = \\ln 64$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = \\frac{\\ln 64}{\\ln 4} = \\frac{\\ln(4^3)}{\\ln 4} = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$",
          },
        },
        {
          id: "cipum-u4-exp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $\\log_3 54 - \\log_3 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "3" },
              { id: "c", text: "27" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Log quotient law",
                statement: "$\\log_a(x/y) = \\log_a x - \\log_a y$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\log_3 54 - \\log_3 2 = \\log_3 27 = 3$ since $3^3 = 27$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipum-u4-exp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $\\log_9 27$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{2}$" },
              { id: "b", text: "3" },
              { id: "c", text: "9" },
              { id: "d", text: "$\\frac{2}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Change of base",
                statement: "$\\log_a b = \\frac{\\ln b}{\\ln a}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\log_9 27 = \\frac{\\ln 27}{\\ln 9} = \\frac{3\\ln 3}{2\\ln 3} = \\frac{3}{2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{2}$",
          },
        },
        {
          id: "cipum-u4-exp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $e^x = 5$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.6094, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential equation",
                statement: "Take natural logarithms of both sides.",
              },
            ],
            steps: [
              {
                reasoning: "$x = \\ln 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x \\approx 1.6094$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = \\ln 5 \\approx 1.6094$",
          },
        },
        {
          id: "cipum-u4-exp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\log_2(x - 1) + \\log_2(x + 1) = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Log product law",
                statement: "$\\log_a(xy) = \\log_a x + \\log_a y$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\log_2[(x-1)(x+1)] = 3 \\Rightarrow (x-1)(x+1) = 2^3 = 8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x^2 - 1 = 8 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x = -3$ gives $\\log_2(-4)$ — invalid; so $x = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$",
          },
        },
        {
          id: "cipum-u4-exp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_e 1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "undefined" },
              { id: "d", text: "$e$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Logarithm of 1",
                statement: "$\\log_a 1 = 0$ for any valid base $a$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\ln 1 = 0$ since $e^0 = 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "cipum-u4-exp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\log_2 x + \\log_4 x = 9$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 64 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Change of base",
                statement: "$\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{1}{2}\\log_2 x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\log_2 x + \\frac{1}{2}\\log_2 x = \\frac{3}{2}\\log_2 x = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\log_2 x = 6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 2^6 = 64$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 64$",
          },
        },
        {
          id: "cipum-u4-exp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A quantity follows $N = 800e^{-0.05t}$. Its half-life is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.93" },
              { id: "b", text: "10.0" },
              { id: "c", text: "20.0" },
              { id: "d", text: "13.9" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Half-life",
                statement: "Half-life $= \\frac{\\ln 2}{|k|}$ for $N = N_0e^{kt}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{\\ln 2}{0.05} \\approx \\frac{0.693}{0.05} \\approx 13.9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 13.9",
          },
        },
        {
          id: "cipum-u4-exp-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A population is modelled by $P = 2000e^{0.02t}$. Find the time taken for the population to reach 3000.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential model",
                statement: "Set $P$ equal to the target value and solve for $t$.",
              },
            ],
            steps: [
              {
                reasoning: "$3000 = 2000e^{0.02t} \\Rightarrow e^{0.02t} = 1.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$0.02t = \\ln 1.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = \\frac{\\ln 1.5}{0.02}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t \\approx \\frac{0.4055}{0.02} \\approx 20.3$ years.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t \\approx 20.3$ years",
          },
        },
        {
          id: "cipum-u4-exp-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The value of $e^{\\ln 4}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "16" },
              { id: "c", text: "$\\ln 4$" },
              { id: "d", text: "$e^4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inverse functions",
                statement: "$a^{\\log_a x} = x$ and $e^{\\ln x} = x$.",
              },
            ],
            steps: [
              {
                reasoning: "$e^{\\ln 4} = 4$ — exponential and natural log are inverses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipum-u4-exp-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3^x = \\frac{1}{9}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential equation",
                statement: "Express both sides with the same base.",
              },
            ],
            steps: [
              {
                reasoning: "$3^x = 3^{-2}$ since $\\frac{1}{9} = 3^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = -2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = -2$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u4-explog-notes",
      title: "Exponentials and logarithms — revision notes",
      summary: "Log laws, solving exponential equations, growth/decay models.",
      sections: [
        {
          heading: "Key skills",
          body: "Memorise the three log laws and change-of-base formula. For exponential equations, isolate the exponential then take logs — check domain restrictions on log arguments.",
        },
        {
          heading: "Exam tips",
          body: "For growth models, identify k first (positive = growth, negative = decay). Doubling time uses ln2/k; half-life uses ln2/|k|. In finance, distinguish discrete compounding from continuous.",
        },
      ],
    },
  ],
};
