import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cipum-u5-lesson-5-2",
  code: "5-2",
  title: "Statistics: Normal Distribution and Hypothesis Testing",
  goal: "I CAN use the normal distribution and carry out hypothesis tests.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Applications of Mathematics: statistics",
  ],
  vocabulary: [
    {
      term: "Normal distribution",
      definition:
        "Bell-shaped continuous distribution N(μ, σ²) — fully defined by mean and variance.",
    },
    {
      term: "Standardisation",
      definition: "Converting X ~ N(μ,σ²) to Z ~ N(0,1) via z = (x−μ)/σ.",
    },
    {
      term: "Hypothesis test",
      definition:
        "Statistical procedure to test a claim about a population parameter.",
    },
    {
      term: "Null hypothesis",
      definition:
        "H₀ — the default assumption (e.g. no difference, μ = value).",
    },
    {
      term: "Significance level",
      definition:
        "Probability of rejecting H₀ when it is true — typically 5% or 1%.",
    },
    {
      term: "p-value",
      definition:
        "Probability of observing a result as extreme as the sample, assuming H₀.",
    },
  ],
  concepts: [
    {
      id: "cipum-u5-s1-stats",
      title: "Normal distribution and inference",
      skill:
        "Standardise normal variables, find probabilities and carry out hypothesis tests.",
      lesson: {
        sections: [
          {
            heading: "Normal distribution",
            body: "X ~ N(μ, σ²) has pdf f(x) = (1/(σ√(2π)))e^(−(x−μ)²/2σ²). Properties: symmetric about μ; P(μ−σ < X < μ+σ) ≈ 0.68, P(μ−2σ < X < μ+2σ) ≈ 0.95, P(μ−3σ < X < μ+3σ) ≈ 0.997. Standardise: z = (x−μ)/σ, then use Z ~ N(0,1) tables or calculator.",
          },
          {
            heading: "Hypothesis testing procedure",
            body: "1) State H₀ and H₁ (one- or two-tailed). 2) Choose significance level α (usually 0.05). 3) Compute test statistic (z-score or t-score). 4) Find critical value or p-value. 5) Compare: if |z| > z_critical, reject H₀. 6) Conclude in context. For means with known σ: z = (x̄ − μ)/(σ/√n).",
          },
          {
            heading: "Types of errors",
            body: "Type I error: rejecting H₀ when it is true (false positive) — probability = α. Type II error: failing to reject H₀ when H₁ is true (false negative) — probability = β. Power = 1 − β = probability of correctly rejecting H₀. Increasing sample size reduces both error types.",
          },
        ],
        keyFormulas: [
          {
            name: "Standardisation",
            statement:
              "$z = \\frac{x - \\mu}{\\sigma}$; $z_{test} = \\frac{\\bar{x} - \\mu}{\\sigma/\\sqrt{n}}$",
          },
          {
            name: "Empirical rule",
            statement:
              "$\\mu\\pm\\sigma$: 68%; $\\mu\\pm 2\\sigma$: 95%; $\\mu\\pm 3\\sigma$: 99.7%$",
          },
        ],
        workedExample: {
          problem: "X ~ N(50, 9). Find P(X < 45).",
          solution:
            "$z = (45-50)/3 = -1.67$; $P(Z < -1.67) \\approx 0.0475$ — about 4.75%.",
        },
      },
      questions: [
        {
          id: "cipum-u5-sta-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For X ~ N(μ, σ²), approximately what proportion lies within μ ± 2σ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "95%" },
              { id: "b", text: "68%" },
              { id: "c", text: "99.7%" },
              { id: "d", text: "50%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Empirical rule",
                statement: "μ±σ: 68%; μ±2σ: 95%; μ±3σ: 99.7%.",
              },
            ],
            steps: [
              {
                reasoning: "μ ± 2σ contains ≈ 95% of the distribution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 95%",
          },
        },
        {
          id: "cipum-u5-sta-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "X ~ N(100, 16). Find P(96 < X < 104).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "Convert bounds to z-scores, then use N(0,1).",
              },
            ],
            steps: [
              {
                reasoning: "$z_1 = (96-100)/4 = -1$; $z_2 = (104-100)/4 = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(-1 < Z < 1) \\approx 0.6827$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 0.683 (68.3%)",
          },
        },
        {
          id: "cipum-u5-sta-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample of 25 has mean 52 with σ = 10. Test H₀: μ = 50 vs H₁: μ > 50 at 5% significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "One-sample z-test",
                statement:
                  "$z = (\\bar{x}-\\mu)/(\\sigma/\\sqrt{n})$; compare with critical value.",
              },
            ],
            steps: [
              {
                reasoning: "$z = (52-50)/(10/\\sqrt{25}) = 2/2 = 1.0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Critical value (one-tailed 5%): $z_{0.05} = 1.645$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$1.0 < 1.645$ — do not reject H₀. Insufficient evidence that μ > 50.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fail to reject H₀",
          },
        },
        {
          id: "cipum-u5-sta-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between Type I and Type II errors, and state which is controlled by the significance level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error types",
                statement:
                  "Type I = false rejection; Type II = false acceptance.",
              },
            ],
            steps: [
              {
                reasoning: "Type I: reject H₀ when true — probability α.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Type II: fail to reject H₀ when H₁ is true — probability β.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Significance level α directly controls Type I error rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reducing α decreases Type I but increases Type II — trade-off.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Type I controlled by α; trade-off with Type II.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u5-stats-notes",
      title: "Statistics — revision notes",
      summary:
        "Normal distribution, standardisation, hypothesis testing, error types.",
      sections: [
        {
          heading: "Key skills",
          body: "Always standardise before using normal tables. For hypothesis tests, write H₀ and H₁ explicitly, state the significance level, and conclude in context — not just 'reject H₀'.",
        },
        {
          heading: "Exam tips",
          body: "Check whether the test is one- or two-tailed before choosing the critical value. For z-tests, the standard error is σ/√n — forgetting √n is the most common error.",
        },
      ],
    },
  ],
};
