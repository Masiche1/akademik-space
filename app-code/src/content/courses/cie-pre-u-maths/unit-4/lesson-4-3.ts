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
              { id: "a", text: "£450" },
              { id: "b", text: "£500" },
              { id: "c", text: "£600" },
              { id: "d", text: "£411" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipum-u4-apl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Continuous compounding is described by the formula:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A = Pe^{r/t}$" },
              { id: "b", text: "$A = Pe^{rt}$" },
              { id: "c", text: "$A = P(1 + r)^t$" },
              { id: "d", text: "$A = Pe^{-rt}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continuous compounding",
                statement: "Interest calculated as $A = Pe^{rt}$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = Pe^{rt}$ is the continuous compounding formula.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A = Pe^{rt}$",
          },
        },
        {
          id: "cipum-u4-apl-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A quantity decays as $N = N_0 e^{-\\lambda t}$. Its half-life is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\ln 2}{\\lambda}$" },
              { id: "b", text: "$\\ln 2 \\cdot \\lambda$" },
              { id: "c", text: "$\\frac{\\lambda}{\\ln 2}$" },
              { id: "d", text: "$\\frac{1}{\\lambda}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Half-life",
                statement: "Half-life $= \\frac{\\ln 2}{\\lambda}$ for $N = N_0e^{-\\lambda t}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Setting $N = N_0/2$ gives $e^{-\\lambda t} = 1/2$, so $t = \\frac{\\ln 2}{\\lambda}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\ln 2}{\\lambda}$",
          },
        },
        {
          id: "cipum-u4-apl-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "£500 is invested at 6% per year, continuously compounded, for 8 years. Find its value.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 808, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Continuous compounding",
                statement: "$A = Pe^{rt}$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = 500e^{0.06 \\times 8} = 500e^{0.48}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{0.48} \\approx 1.6161 \\Rightarrow A \\approx £808$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ £808",
          },
        },
        {
          id: "cipum-u4-apl-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A radioactive sample follows $N = 2000e^{-0.1t}$. Find its half-life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Half-life",
                statement: "Half-life = ln2/λ for N = N₀e⁻λᵗ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Half-life occurs when $e^{-0.1t} = \\frac{1}{2}$, so $-0.1t = \\ln\\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = \\frac{\\ln 2}{0.1} \\approx 6.93$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 6.93",
          },
        },
        {
          id: "cipum-u4-apl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the same principal, interest rate and time, which investment grows the most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continuous compounding" },
              { id: "b", text: "Monthly compounding" },
              { id: "c", text: "Simple interest" },
              { id: "d", text: "Annual compounding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Compounding comparison",
                statement:
                  "Continuous compounding $Pe^{rt}$ is the limit of $P(1 + r/n)^{nt}$ as $n \\to \\infty$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "More frequent compounding gives more interest; continuous is the maximum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Continuous compounding",
          },
        },
        {
          id: "cipum-u4-apl-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A drink at 80°C cools in a room at 15°C with $k = 0.08$ per minute. Find its temperature after 10 minutes.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 44.2, tolerance: 0.1, unit: "°C" },
            ],
          },
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
                  "$T = 15 + (80 - 15)e^{-0.08 \\times 10} = 15 + 65e^{-0.8}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{-0.8} \\approx 0.4493$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$T \\approx 15 + 29.2 \\approx 44.2°\\text{C}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T \\approx 44.2°\\text{C}$",
          },
        },
        {
          id: "cipum-u4-apl-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In logistic growth $\\frac{dP}{dt} = kP(1 - P/K)$, the population grows fastest when $P =$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P_0$" },
              { id: "b", text: "0" },
              { id: "c", text: "$\\frac{K}{2}$" },
              { id: "d", text: "$K$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Logistic growth",
                statement: "Maximum growth rate occurs at $P = K/2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The product $P(1 - P/K)$ is maximised when $P = K/2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P = \\frac{K}{2}$",
          },
        },
        {
          id: "cipum-u4-apl-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "£2000 is invested at 5% per year, continuously compounded. Find its value after 15 years, and the interest earned.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Continuous compounding",
                statement: "$A = Pe^{rt}$; interest $= A - P$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = 2000e^{0.05 \\times 15} = 2000e^{0.75}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{0.75} \\approx 2.117$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A \\approx 2000 \\times 2.117 \\approx £4234$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interest $\\approx 4234 - 2000 = £2234$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A \\approx £4234$; interest $\\approx £2234$",
          },
        },
        {
          id: "cipum-u4-apl-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the present value of £1000 received in 4 years with continuous discounting at 5% per year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 818.7, tolerance: 0.1, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Present value",
                statement: "$PV = FV \\cdot e^{-rt}$ for continuous discounting.",
              },
            ],
            steps: [
              {
                reasoning: "$PV = 1000e^{-0.05 \\times 4} = 1000e^{-0.2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e^{-0.2} \\approx 0.8187 \\Rightarrow PV \\approx £818.7$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ £818.7",
          },
        },
        {
          id: "cipum-u4-apl-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Newton's law of cooling $\\frac{dT}{dt} = -k(T - T_{env})$ predicts that the temperature approaches:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$T_0$" },
              { id: "b", text: "0" },
              { id: "c", text: "$T_{env}$" },
              { id: "d", text: "infinity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Newton's cooling",
                statement:
                  "dT/dt = −k(T − T_env); equilibrium at ambient temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "As $T \\to T_{env}$, dT/dt → 0 — the object reaches ambient temperature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$T_{env}$",
          },
        },
        {
          id: "cipum-u4-apl-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A population is modelled by $P = 500e^{0.03t}$. Find the time for the population to triple.",
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
                reasoning:
                  "$1500 = 500e^{0.03t} \\Rightarrow e^{0.03t} = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$0.03t = \\ln 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = \\frac{\\ln 3}{0.03} \\approx \\frac{1.0986}{0.03} \\approx 36.6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t \\approx 36.6$",
          },
        },
        {
          id: "cipum-u4-apl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A radioactive sample follows $N = 500e^{-0.05t}$. Find the time at which $N = 50$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 46.05, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exponential decay model",
                statement: "N = N₀e⁻λᵗ; solve for t by taking logarithms.",
              },
            ],
            steps: [
              {
                reasoning: "$50 = 500e^{-0.05t} \\Rightarrow e^{-0.05t} = 0.1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-0.05t = \\ln 0.1 = -\\ln 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = \\frac{\\ln 10}{0.05} \\approx \\frac{2.3026}{0.05} \\approx 46.05$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$t \\approx 46.05$",
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
