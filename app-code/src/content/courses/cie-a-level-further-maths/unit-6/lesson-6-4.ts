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
            { id: "a", text: "Mean λ, variance λ²" },
            { id: "b", text: "Both equal n" },
            { id: "c", text: "Mean 0, variance λ" },
            { id: "d", text: "Both equal λ" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u6-ps-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Poisson probability mass function is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(X=k)=\\binom{n}{k}p^k$" },
            { id: "b", text: "$P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}$" },
            { id: "c", text: "$P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k}" },
            { id: "d", text: "$P(X=k)=e^{-\\lambda}k!$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Poisson pmf", statement: "$e^{-\\lambda}\\lambda^k/k!$." }],
            steps: [{ reasoning: "Standard Poisson formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$P(X=k)=\\frac{e^{-\\lambda}\\lambda^k}{k!}$",
          },
        },
        {
          id: "cialfm-u6-ps-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For a Poisson distribution with $\\lambda=2$, find $P(X=0)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.1353, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Poisson pmf", statement: "$e^{-\\lambda}\\lambda^k/k!$." }],
            steps: [
              { reasoning: "$P(X=0) = e^{-2} \\approx 0.1353$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$e^{-2} \\approx 0.135$",
          },
        },
        {
          id: "cialfm-u6-ps-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calls arrive at a rate of $\\lambda=4$ per hour. Find the probability of exactly 2 calls in an hour.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Poisson pmf", statement: "$e^{-\\lambda}\\lambda^k/k!$." }],
            steps: [
              { reasoning: "$P(X=2) = \\frac{e^{-4} \\cdot 4^2}{2!} = \\frac{16e^{-4}}{2} = 8e^{-4}$.", marks: 1, markCode: "M" },
              { reasoning: "$8e^{-4} \\approx 8 \\times 0.01832 \\approx 0.1465$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 0.147.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8e^{-4} \\approx 0.147$",
          },
        },
        {
          id: "cialfm-u6-ps-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim \\text{Poisson}(\\lambda)$, which statement is true?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mean = variance = $\\lambda$" },
            { id: "b", text: "Mean = $\\lambda$, variance = $\\lambda^2$" },
            { id: "c", text: "Mean = $n$, variance = $np$" },
            { id: "d", text: "Mean = 0, variance = $\\lambda$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Poisson moments", statement: "$E(X)=\\mathrm{Var}(X)=\\lambda$." }],
            steps: [{ reasoning: "Both moments equal $\\lambda$.", marks: 1, markCode: "A" }],
            finalAnswer: "Mean = variance = $\\lambda$",
          },
        },
        {
          id: "cialfm-u6-ps-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For Poisson $\\lambda=1$, find $P(X \\le 1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.7358, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative probability", statement: "Sum terms or use tables." }],
            steps: [
              { reasoning: "$P(X \\le 1) = e^{-1}(1+1) = 2e^{-1} \\approx 0.7358$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2e^{-1} \\approx 0.736$",
          },
        },
        {
          id: "cialfm-u6-ps-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For Poisson $\\lambda=2$, find $P(X \\ge 2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1 - P(X \\le 1)$." }],
            steps: [
              { reasoning: "$P(X=0) = e^{-2}$, $P(X=1) = 2e^{-2}$.", marks: 1, markCode: "M" },
              { reasoning: "$P(X \\le 1) = 3e^{-2} \\approx 0.4060$.", marks: 1, markCode: "M" },
              { reasoning: "$P(X \\ge 2) = 1 - 0.4060 \\approx 0.594$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1-3e^{-2} \\approx 0.594$",
          },
        },
        {
          id: "cialfm-u6-ps-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Poisson distribution is most appropriate for modelling…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Continuous measurements" },
            { id: "b", text: "Rare events occurring randomly in a fixed interval" },
            { id: "c", text: "Normally distributed data" },
            { id: "d", text: "Exactly $n$ fixed trials" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Poisson model", statement: "Random rare events, constant rate." }],
            steps: [{ reasoning: "Poisson models rare random events in a fixed interval.", marks: 1, markCode: "A" }],
            finalAnswer: "Rare events in a fixed interval",
          },
        },
        {
          id: "cialfm-u6-ps-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Defects occur at a rate of $\\lambda=1.5$ per square metre. Find the probability of no defects in an area of $2$ m².",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.0498, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Scaling λ", statement: "New $\\lambda = 1.5 \\times 2 = 3$." }],
            steps: [
              { reasoning: "For 2 m², $\\lambda = 3$; $P(X=0) = e^{-3} \\approx 0.0498$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$e^{-3} \\approx 0.0498$",
          },
        },
        {
          id: "cialfm-u6-ps-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Events $A$ and $B$ occur independently with Poisson rates $\\lambda_A=2$ and $\\lambda_B=3$ per hour. Find $E(X)$ and $\\mathrm{Var}(X)$ for the total number of events $X$ in an hour.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Sum of Poissons", statement: "Independent Poissons add: $\\lambda_A+\\lambda_B$." }],
            steps: [
              { reasoning: "Total $X \\sim \\text{Poisson}(5)$ since independent Poisson counts add.", marks: 1, markCode: "M" },
              { reasoning: "$E(X) = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Var}(X) = 5$ (equal to mean).", marks: 1, markCode: "M" },
              { reasoning: "Answers stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E(X)=5$, $\\mathrm{Var}(X)=5$",
          },
        },
        {
          id: "cialfm-u6-ps-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a Poisson distribution, the most likely value of $X$ is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1 always" },
            { id: "b", text: "0 always" },
            { id: "c", text: "$\\lambda$" },
            { id: "d", text: "$\\lambda^2$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Poisson mode", statement: "Mode near $\\lambda$." }],
            steps: [{ reasoning: "The distribution peaks near $k \\approx \\lambda$.", marks: 1, markCode: "A" }],
            finalAnswer: "Approximately $\\lambda$",
          },
        },
        {
          id: "cialfm-u6-ps-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For Poisson $\\lambda=2.5$, find $P(X=1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.2052, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Poisson pmf", statement: "$e^{-\\lambda}\\lambda^k/k!$." }],
            steps: [
              { reasoning: "$P(X=1) = e^{-2.5} \\times 2.5 \\approx 0.0821 \\times 2.5 \\approx 0.2052$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5e^{-2.5} \\approx 0.205$",
          },
        },
        {
          id: "cialfm-u6-ps-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a binomial distribution $B(n,p)$ with large $n$ and small $p$ can be approximated by a Poisson distribution, and state the approximating parameter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Poisson approximation", statement: "$\\lambda = np$ moderate." }],
            steps: [
              { reasoning: "When $n$ is large and $p$ small with $np$ moderate, individual successes are rare and nearly independent.", marks: 1, markCode: "M" },
              { reasoning: "The binomial approaches Poisson with $\\lambda = np$.", marks: 1, markCode: "M" },
              { reasoning: "Example rule of thumb: $n \\ge 20$ and $p \\le 0.05$ (or $np \\le 10$).", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximate by Poisson($np$)",
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
            { id: "a", text: "Uniform" },
            { id: "b", text: "N(μ, σ²)" },
            { id: "c", text: "N(0, 1)" },
            { id: "d", text: "N(1, 0)" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u6-nm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim N(\\mu,\\sigma^2)$, $P(X < \\mu)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.5" },
            { id: "b", text: "0" },
            { id: "c", text: "$\\mu$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Symmetry", statement: "Half the distribution below the mean." }],
            steps: [{ reasoning: "By symmetry, $P(X<\\mu)=0.5$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cialfm-u6-nm-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "For $X \\sim N(20, 9)$, find $P(X < 23)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.8413, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Standardise", statement: "$z=(x-\\mu)/\\sigma$." }],
            steps: [
              { reasoning: "$\\sigma = 3$; $z = \\frac{23-20}{3} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\Phi(1) \\approx 0.8413$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.841$",
          },
        },
        {
          id: "cialfm-u6-nm-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $X \\sim N(100, 16)$, find $P(96 < X < 104)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Interval probability", statement: "$\\Phi(z_2)-\\Phi(z_1)$." }],
            steps: [
              { reasoning: "$\\sigma = 4$; $z_1 = \\frac{96-100}{4} = -1$, $z_2 = \\frac{104-100}{4} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\Phi(1) - \\Phi(-1) = 0.8413 - 0.1587$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.6826$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.683$",
          },
        },
        {
          id: "cialfm-u6-nm-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the standard normal distribution, $\\Phi(-z)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1+\\Phi(z)$" },
            { id: "b", text: "$\\Phi(z)$" },
            { id: "c", text: "$1-\\Phi(z)$" },
            { id: "d", text: "$-\\Phi(z)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Symmetry", statement: "$\\Phi(-z)=1-\\Phi(z)$." }],
            steps: [{ reasoning: "Symmetry of the normal curve.", marks: 1, markCode: "A" }],
            finalAnswer: "$1-\\Phi(z)$",
          },
        },
        {
          id: "cialfm-u6-nm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $Z \\sim N(0,1)$, find $P(Z > 1.96)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.025, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Upper tail", statement: "$1-\\Phi(z)$." }],
            steps: [
              { reasoning: "$P(Z>1.96) = 1-0.975 = 0.025$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.025",
          },
        },
        {
          id: "cialfm-u6-nm-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$X \\sim N(\\mu, 16)$ and $P(X < 40) = 0.9772$ (corresponding to $z=2$). Find $\\mu$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse normal", statement: "$x=\\mu+z\\sigma$." }],
            steps: [
              { reasoning: "$\\sigma = 4$ and $z = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$40 = \\mu + 2(4)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mu = 40 - 8 = 32$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\mu = 32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mu = 32$",
          },
        },
        {
          id: "cialfm-u6-nm-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim N(\\mu, \\sigma^2)$, the variance is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\sigma$" },
            { id: "b", text: "$\\sigma^2$" },
            { id: "c", text: "$\\sigma$" },
            { id: "d", text: "$\\mu$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Normal parameters", statement: "Second parameter is variance." }],
            steps: [{ reasoning: "$N(\\mu,\\sigma^2)$ notation uses variance $\\sigma^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sigma^2$",
          },
        },
        {
          id: "cialfm-u6-nm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $X \\sim N(10, 4)$, find $P(X > 14)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.0228, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Upper tail", statement: "$1-\\Phi(z)$." }],
            steps: [
              { reasoning: "$\\sigma = 2$; $z = \\frac{14-10}{2} = 2$; $P = 1-\\Phi(2) = 1-0.9772 = 0.0228$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.0228",
          },
        },
        {
          id: "cialfm-u6-nm-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A binomial variable $X \\sim B(100, 0.5)$ is approximated by $Y \\sim N(50, 25)$. Explain how to use the continuity correction to estimate $P(X \\le 52)$, and write the corrected normal probability.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Continuity correction", statement: "Integer bounds shift by 0.5." }],
            steps: [
              { reasoning: "$X \\le 52$ becomes $Y < 52.5$ (upper bound +0.5).", marks: 1, markCode: "M" },
              { reasoning: "$P \\approx P(Y < 52.5) = \\Phi\\left(\\frac{52.5-50}{5}\\right) = \\Phi(0.5)$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.6915$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(Y<52.5)=\\Phi(0.5)\\approx0.692$",
          },
        },
        {
          id: "cialfm-u6-nm-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To standardise $X \\sim N(\\mu,\\sigma^2)$, we compute…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$Z=\\frac{X-\\mu}{\\sigma}$" },
            { id: "b", text: "$Z=\\frac{X+\\mu}{\\sigma}$" },
            { id: "c", text: "$Z=X-\\mu$" },
            { id: "d", text: "$Z=\\frac{\\mu}{\\sigma}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Standardisation", statement: "$Z=(X-\\mu)/\\sigma$." }],
            steps: [{ reasoning: "Correct standardisation formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$Z=\\frac{X-\\mu}{\\sigma}$",
          },
        },
        {
          id: "cialfm-u6-nm-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X \\sim N(5, 4)$, find $P(1 < X < 9)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9544, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Interval probability", statement: "$\\Phi(z_2)-\\Phi(z_1)$." }],
            steps: [
              { reasoning: "$\\sigma=2$; $z_1=\\frac{1-5}{2}=-2$, $z_2=\\frac{9-5}{2}=2$.", marks: 1, markCode: "M" },
              { reasoning: "$P = \\Phi(2)-\\Phi(-2) = 0.9772-0.0228 = 0.9544$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.9544",
          },
        },
        {
          id: "cialfm-u6-nm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Exam scores are $N(60, 100)$. The top 10% receive a distinction. Find the minimum score needed (use $z_{0.90}=1.2816$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse normal", statement: "$x=\\mu+z\\sigma$." }],
            steps: [
              { reasoning: "$\\sigma = 10$; top 10% means $z = 1.2816$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 60 + 1.2816 \\times 10 = 60 + 12.816$.", marks: 1, markCode: "M" },
              { reasoning: "$= 72.816$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 72.8 marks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 72.8",
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
