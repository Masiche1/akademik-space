import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cipum-u4-lesson-4-3",
  code: "4-3",
  title: "Applications of Exponentials and Differential Equations",
  goal: "I CAN apply exponential and differential equation models to real-world problems.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: applications",
  ],
  vocabulary: [
    {
      term: "Continuous compounding",
      definition:
        "Interest calculated as A = Peʳᵗ — limit of discrete compounding.",
    },
    {
      term: "Half-life",
      definition: "Time for a quantity to halve — ln2/λ for exponential decay.",
    },
    {
      term: "Newton's law of cooling",
      definition: "dT/dt = −k(T − T_env) — temperature approaches ambient.",
    },
    {
      term: "Logistic growth",
      definition:
        "S-shaped growth limited by carrying capacity — dP/dt = kP(1 − P/K).",
    },
    {
      term: "Marginal analysis",
      definition: "Using derivatives to find optimal production/sales levels.",
    },
    {
      term: "Present value",
      definition: "Current worth of a future sum — PV = FV/(1+r)ⁿ or FV·e⁻ʳᵗ.",
    },
  ],
  concepts: [
    {
      id: "cipum-u4-s1-applications",
      title: "Real-world models",
      skill:
        "Apply exponential and differential equation models to finance, physics and population problems.",
      lesson: {
        sections: [
          {
            heading: "Finance",
            body: "Compound interest: A = P(1 + r/n)^(nt) for n compounding periods; continuous: A = Peʳᵗ. Present value: PV = FV/(1+r)ⁿ. Loan repayments use annuity formulas. The choice between discrete and continuous compounding depends on the problem — continuous is the mathematical idealisation.",
          },
          {
            heading: "Physics: cooling and decay",
            body: "Newton's cooling: dT/dt = −k(T − T_env) → T = T_env + (T₀ − T_env)e⁻ᵏᵗ. Radioactive decay: N = N₀e⁻λᵗ, half-life = ln2/λ. Both approach an equilibrium — temperature reaches ambient, substance decays to zero. The rate constant determines the timescale.",
          },
          {
            heading: "Population models",
            body: "Exponential growth P = P₀eᵏᵗ assumes unlimited resources. Logistic growth dP/dt = kP(1 − P/K) produces S-shaped curve approaching carrying capacity K. Real populations often start exponential then slow as resources limit — logistic is more realistic but harder to solve analytically.",
          },
        ],
        keyFormulas: [
          {
            name: "Continuous compounding",
            statement: "$A = Pe^{rt}$; $PV = FV \\cdot e^{-rt}$",
          },
          {
            name: "Cooling/decay",
            statement:
              "$T = T_{env} + (T_0 - T_{env})e^{-kt}$; half-life $= \\frac{\\ln 2}{\\lambda}$",
          },
        ],
        workedExample: {
          problem:
            "A £1000 investment earns 5% continuously compounded interest. Find its value after 10 years.",
          solution:
            "$A = 1000e^{0.05 \\times 10} = 1000e^{0.5} \\approx 1000 \\times 1.6487 = £1649$.",
        },
      },
      questions: [
        {
          id: "cipum-u4-apl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The present value of £500 received in 5 years at 4% interest is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£411" },
              { id: "b", text: "£600" },
              { id: "c", text: "£500" },
              { id: "d", text: "£450" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Present value",
                statement: "$PV = FV/(1+r)^n$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$PV = 500/(1.04)^5 \\approx 500/1.2167 \\approx £411$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ £411",
          },
        },
        {
          id: "cipum-u4-apl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A substance has half-life 5 days. What fraction remains after 15 days?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Half-life",
                statement: "Each half-life halves the quantity.",
              },
            ],
            steps: [
              {
                reasoning: "15 days = 3 half-lives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(1/2)^3 = 1/8$ remains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{8}$ remains",
          },
        },
        {
          id: "cipum-u4-apl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cup of coffee at 90°C cools in a 20°C room with $k = 0.1$ per minute. Find its temperature after 10 minutes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Newton's cooling",
                statement: "$T = T_{env} + (T_0 - T_{env})e^{-kt}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$T = 20 + (90-20)e^{-0.1 \\times 10} = 20 + 70e^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{-1} \\approx 0.368$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$T \\approx 20 + 25.7 = 45.7°\\text{C}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T \\approx 45.7°\\text{C}$",
          },
        },
        {
          id: "cipum-u4-apl-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A population follows logistic growth $\\frac{dP}{dt} = 0.5P(1 - P/1000)$ with $P(0) = 100$. Explain why the population approaches 1000, and find the approximate growth rate at $P = 500$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logistic growth",
                statement: "dP/dt = kP(1 − P/K); K is carrying capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "As $P \\to 1000$, $(1 - P/1000) \\to 0$, so dP/dt → 0 — population stabilises at K.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For $P < 1000$, growth is positive but slowing; for $P > 1000$, negative — K is stable equilibrium.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At $P = 500$: $\\frac{dP}{dt} = 0.5 \\times 500 \\times (1 - 0.5) = 125$ per unit time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Growth rate at P = 500 is 125 — maximum rate occurs at P = K/2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Population → 1000; rate at P = 500 is 125.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u4-applications-notes",
      title: "Applications — revision notes",
      summary: "Continuous compounding, half-life, cooling, logistic growth.",
      sections: [
        {
          heading: "Key skills",
          body: "Identify the model type first: exponential (constant rate), logistic (limited growth), cooling (approaches equilibrium). Extract parameters from the given equation before substituting.",
        },
        {
          heading: "Exam tips",
          body: "For half-life problems, count the number of half-lives rather than computing e^(−λt). For cooling, always subtract ambient temperature — the decay applies to the temperature difference, not the temperature itself.",
        },
      ],
    },
  ],
};
