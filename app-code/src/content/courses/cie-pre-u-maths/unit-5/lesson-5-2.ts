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
              { id: "a", text: "99.7%" },
              { id: "b", text: "68%" },
              { id: "c", text: "50%" },
              { id: "d", text: "95%" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipum-u5-sta-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a normal distribution, approximately what proportion of values lie within $\\mu \\pm \\sigma$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "68%" },
              { id: "b", text: "95%" },
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
                statement: "μ±σ: ≈68%; μ±2σ: ≈95%; μ±3σ: ≈99.7%.",
              },
            ],
            steps: [
              {
                reasoning: "$\\mu \\pm \\sigma$ contains approximately 68% of values.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 68%",
          },
        },
        {
          id: "cipum-u5-sta-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $X \\sim N(50, 25)$, find $P(X > 55)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.158655, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$z = \\frac{x-\\mu}{\\sigma}$, then use $Z \\sim N(0,1)$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma = \\sqrt{25} = 5$; $z = \\frac{55-50}{5} = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(Z > 1) = 1 - 0.8413 = 0.1587$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 0.159",
          },
        },
        {
          id: "cipum-u5-sta-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample of 36 observations has mean $\\bar{x} = 10.5$ with known $\\sigma = 6$. Test $H_0: \\mu = 10$ against $H_1: \\mu > 10$ at the 5% significance level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "One-sample z-test",
                statement: "$z = \\frac{\\bar{x}-\\mu}{\\sigma/\\sqrt{n}}$; compare with critical value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$z = \\frac{10.5 - 10}{6/\\sqrt{36}} = \\frac{0.5}{1} = 0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One-tailed 5% critical value: $z_{0.05} = 1.645$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$0.5 < 1.645$ — do not reject $H_0$. Insufficient evidence that $\\mu > 10$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fail to reject $H_0$",
          },
        },
        {
          id: "cipum-u5-sta-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a two-tailed hypothesis test at the 5% significance level, the critical z-value is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.96" },
              { id: "b", text: "2.576" },
              { id: "c", text: "1.282" },
              { id: "d", text: "1.645" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical value",
                statement: "Two-tailed 5% splits α equally: 2.5% in each tail.",
              },
            ],
            steps: [
              {
                reasoning: "Two-tailed 5% test uses $z = 1.96$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.96",
          },
        },
        {
          id: "cipum-u5-sta-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $X \\sim N(70, 16)$, find the value of $x$ for which the z-score is $1.5$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 76 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$z = \\frac{x-\\mu}{\\sigma}$, so $x = \\mu + z\\sigma$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma = \\sqrt{16} = 4$; $x = 70 + 1.5 \\times 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 76$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "76",
          },
        },
        {
          id: "cipum-u5-sta-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by the power of a hypothesis test, and describe two ways to increase it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Power",
                statement: "Power = 1 − β = probability of correctly rejecting $H_0$ when $H_1$ is true.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Power is the probability of rejecting $H_0$ when it is false, i.e. $1 - \\beta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increasing the sample size reduces the standard error, making the test more sensitive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increasing the significance level α raises the rejection region but increases Type I error risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both changes increase power; the trade-off is a higher Type I error rate for the second.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Power = 1 − β; increase sample size or significance level.",
          },
        },
        {
          id: "cipum-u5-sta-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a z-test for a mean with known population standard deviation $\\sigma$ and sample size $n$, the standard error of the mean is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sigma}{\\sqrt{n}}$" },
              { id: "b", text: "$\\frac{\\sigma}{n}$" },
              { id: "c", text: "$\\sigma$" },
              { id: "d", text: "$\\sigma \\sqrt{n}$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Standard error",
                statement: "SE = $\\frac{\\sigma}{\\sqrt{n}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Standard error of the mean is $\\frac{\\sigma}{\\sqrt{n}}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\sigma}{\\sqrt{n}}$",
          },
        },
        {
          id: "cipum-u5-sta-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $X \\sim N(50, 100)$, what is $P(40 < X < 60)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.16" },
              { id: "b", text: "0.05" },
              { id: "c", text: "0.95" },
              { id: "d", text: "0.68" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$z = \\frac{x-\\mu}{\\sigma}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sigma = 10$; bounds give $z = -1$ and $z = 1$; $P(-1<Z<1) \\approx 0.68$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 0.68",
          },
        },
        {
          id: "cipum-u5-sta-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A sample of size 64 has mean $\\bar{x} = 96$ with known $\\sigma = 16$. Calculate the z-test statistic for $H_0: \\mu = 100$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "z-test statistic",
                statement: "$z = \\frac{\\bar{x}-\\mu}{\\sigma/\\sqrt{n}}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Standard error $= \\frac{16}{\\sqrt{64}} = \\frac{16}{8} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$z = \\frac{96 - 100}{2} = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Test statistic $z = -2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$z = -2$",
          },
        },
        {
          id: "cipum-u5-sta-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which change increases the power of a hypothesis test?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the sample size" },
              { id: "b", text: "Decreasing the sample size" },
              { id: "c", text: "Decreasing the significance level" },
              { id: "d", text: "Increasing the variance of the population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Power",
                statement: "Larger samples reduce the standard error and increase power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Increasing $n$ reduces $\\frac{\\sigma}{\\sqrt{n}}$, making the test more powerful.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Increasing the sample size",
          },
        },
        {
          id: "cipum-u5-sta-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If $X \\sim N(30, 49)$, find $P(X > 37)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.158655, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$z = \\frac{x-\\mu}{\\sigma}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma = 7$; $z = \\frac{37-30}{7} = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(Z > 1) = 1 - 0.8413 = 0.1587$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 0.159",
          },
        },
        {
          id: "cipum-u5-sta-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A manufacturer claims the mean mass of packets is 500 g with known $\\sigma = 8$ g. A sample of 64 packets has mean 498 g. Carry out a two-tailed z-test at the 5% significance level.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Two-tailed z-test",
                statement: "State hypotheses, compute z, compare with critical value, conclude in context.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$H_0: \\mu = 500$; $H_1: \\mu \\neq 500$; two-tailed, 5% level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$z = \\frac{498 - 500}{8/\\sqrt{64}} = \\frac{-2}{1} = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Critical value $= \\pm 1.96$; $|-2| = 2 > 1.96$, so reject $H_0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "There is sufficient evidence at the 5% level that the mean mass is not 500 g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reject $H_0$: mean is not 500 g",
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
