import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "cialfm-u6-lesson-6-4",
  code: "6-4",
  title: "Poisson and Normal Distributions",
  goal: "I CAN use the Poisson and normal distributions.",
  standards: ["Cambridge A Level Further Mathematics 9231: probability"],
  vocabulary: [
    { term: "Poisson distribution", definition: "Model for rare events in a fixed interval; parameter λ." },
    { term: "Normal distribution", definition: "$N(\\mu, \\sigma^2)$; bell-shaped continuous distribution." },
    { term: "Continuity correction", definition: "Adjusting discrete bounds by 0.5 for normal approximations." },
    { term: "Standardisation", definition: "$Z = \\frac{X-\\mu}{\\sigma}$ transforming to $N(0,1)$." },
  ],
  concepts: [
    {
      id: "cialfm-u6-s4-poisson",
      title: "Poisson distribution",
      skill: "Calculate Poisson probabilities and use tables.",
      lesson: {
        sections: [
          {
            heading: "The model",
            body: "If events occur randomly at average rate λ per interval, the count X is Poisson: $P(X=k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$ for $k = 0, 1, 2, \\ldots$. Mean = variance = λ. Use for rare events: defects, arrivals, accidents.",
          },
          {
            heading: "Using Poisson",
            body: "Cumulative probabilities: $P(X \\le k)$ sums terms or reads tables. For 'at least' questions use $1 - P(X \\le k-1)$. When λ is large, Poisson approximates binomial; the normal approximation uses continuity correction $\\pm 0.5$.",
          },
        ],
        keyFormulas: [
          { name: "Poisson pmf", statement: "$P(X=k) = \\frac{e^{-\\lambda}\\lambda^k}{k!}$" },
          { name: "Mean & variance", statement: "$E(X) = \\mathrm{Var}(X) = \\lambda$" },
        ],
        workedExample: {
          problem: "Calls arrive at λ = 3 per hour. Find P(exactly 2 calls in an hour).",
          solution: "$P(X=2) = \\frac{e^{-3} \\cdot 9}{2} \\approx 0.224$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the mean and variance of a Poisson(λ) distribution?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both equal λ" }, { id: "b", text: "Mean λ, variance λ²" }, { id: "c", text: "Mean 0, variance λ" }, { id: "d", text: "Both equal n" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Poisson moments", statement: "E(X) = Var(X) = λ." }],
            steps: [{ reasoning: "Both equal λ — a distinctive Poisson property.", marks: 1, markCode: "A" }],
            finalAnswer: "Mean = variance = λ",
          },
        },
        {
          id: "cialfm-u6-ps-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "For Poisson λ = 2, find P(X = 0).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Poisson pmf", statement: "$e^{-\\lambda}\\lambda^k/k!$." }],
            steps: [
              { reasoning: "$P(X=0) = e^{-2} \\cdot \\frac{2^0}{0!} = e^{-2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.1353$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$e^{-2} \\approx 0.135$",
          },
        },
        {
          id: "cialfm-u6-ps-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Accidents occur at λ = 1.5 per week. Find P(at least one accident in a week).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(X=0)$." }],
            steps: [
              { reasoning: "$P(X=0) = e^{-1.5} \\approx 0.223$.", marks: 1, markCode: "M" },
              { reasoning: "$P(X \\ge 1) = 1 - 0.223$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.777$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.777$",
          },
        },
        {
          id: "cialfm-u6-ps-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is the normal distribution a poor model for counting accidents per hour?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Discrete vs continuous", statement: "Counts are discrete; normal is continuous." }],
            steps: [
              { reasoning: "Counts take integer values only; normal allows any real value.", marks: 1, markCode: "M" },
              { reasoning: "Counts are bounded below by 0; normal extends to negatives.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Counts are discrete and non-negative",
          },
        },
      ],
    },
    {
      id: "cialfm-u6-s4-normal",
      title: "Normal distribution",
      skill: "Standardise and find normal probabilities.",
      lesson: {
        sections: [
          {
            heading: "Standardising",
            body: "For $X \\sim N(\\mu, \\sigma^2)$, transform to $Z = \\frac{X-\\mu}{\\sigma} \\sim N(0,1)$ and use tables. $P(a < X < b) = \\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$. Symmetry: $\\Phi(-z) = 1 - \\Phi(z)$.",
          },
          {
            heading: "Finding unknown parameters",
            body: "Given a probability, work backwards: find the z-value from tables, then $x = \\mu + z\\sigma$. For 'at least/at most' use the complement. Continuity correction: when approximating a discrete variable, use $P(X \\le k) \\approx P(Y \\le k + 0.5)$.",
          },
        ],
        keyFormulas: [
          { name: "Standardisation", statement: "$Z = \\frac{X-\\mu}{\\sigma}$" },
          { name: "Interval", statement: "$\\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right)-\\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$" },
        ],
        workedExample: {
          problem: "X ~ N(50, 36). Find P(45 < X < 60).",
          solution: "$\\sigma = 6$; $P = \\Phi(\\frac{10}{6}) - \\Phi(\\frac{-5}{6}) = \\Phi(1.67) - \\Phi(-0.83) \\approx 0.9525 - 0.2033 = 0.749$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-nm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If X ~ N(μ, σ²), what is the distribution of Z = (X−μ)/σ?",
          response: { type: "mcq", choices: [
            { id: "a", text: "N(0, 1)" }, { id: "b", text: "N(μ, σ²)" }, { id: "c", text: "N(1, 0)" }, { id: "d", text: "Uniform" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Standard normal", statement: "Z ~ N(0,1)." }],
            steps: [{ reasoning: "Standardisation gives Z ~ N(0,1).", marks: 1, markCode: "A" }],
            finalAnswer: "N(0,1)",
          },
        },
        {
          id: "cialfm-u6-nm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "X ~ N(10, 4). Find P(X < 10).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Symmetry", statement: "Median = mean; half below." }],
            steps: [
              { reasoning: "10 is the mean; by symmetry half the distribution lies below.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u6-nm-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "X ~ N(100, 64). Find P(90 < X < 110). (σ = 8)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standardise", statement: "z = (x−μ)/σ." }],
            steps: [
              { reasoning: "$z_1 = \\frac{90-100}{8} = -1.25$; $z_2 = \\frac{110-100}{8} = 1.25$.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\Phi(1.25) - \\Phi(-1.25) = 0.8944 - 0.1056$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.789$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.789$",
          },
        },
        {
          id: "cialfm-u6-nm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Heights are N(170, 64) cm. The top 5% qualify for a team. Find the qualifying height (z_{0.95} = 1.645).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse normal", statement: "$x = \\mu + z\\sigma$." }],
            steps: [
              { reasoning: "$\\sigma = 8$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 170 + 1.645 \\times 8 = 170 + 13.16$.", marks: 1, markCode: "M" },
              { reasoning: "$= 183.16$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 183 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 183 cm",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u6-dist-notes",
      title: "Poisson and normal — revision notes",
      summary: "P(X=k)=e^{−λ}λ^k/k!; Z=(X−μ)/σ.",
      sections: [
        { heading: "Poisson", body: "Rare events; mean = variance = λ; complement for 'at least'." },
        { heading: "Normal", body: "Standardise then use tables; inverse via $x=\\mu+z\\sigma$; continuity correction ±0.5." },
      ],
    },
  ],
};
