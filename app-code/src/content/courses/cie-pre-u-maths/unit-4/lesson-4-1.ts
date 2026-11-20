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
              { id: "a", text: "5" },
              { id: "b", text: "12" },
              { id: "c", text: "32" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "a",
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
