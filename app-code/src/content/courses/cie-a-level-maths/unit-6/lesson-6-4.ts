import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "cial-m-u6-lesson-6-4",
  code: "6-4",
  title: "Hypothesis Testing and Correlation",
  goal: "I CAN carry out a hypothesis test and interpret correlation and regression.",
  standards: ["Cambridge A Level Mathematics 9709: statistics"],
  vocabulary: [
    { term: "Hypothesis test", definition: "Statistical procedure testing a claim about a population." },
    { term: "Null hypothesis", definition: "$H_0$: the claim being tested (e.g. no difference)." },
    { term: "p-value", definition: "Probability of observing the result if $H_0$ is true." },
    { term: "Correlation coefficient", definition: "$r$: strength of linear relationship, $-1 \\le r \\le 1$." },
    { term: "Regression line", definition: "Least-squares line $y = a + bx$ predicting y from x." },
  ],
  concepts: [
    {
      id: "cial-m-u6-hypothesis",
      title: "Hypothesis testing",
      skill: "Set up and interpret a one-sample z-test for a mean.",
      lesson: {
        sections: [
          {
            heading: "The test procedure",
            body: "State $H_0: \\mu = \\mu_0$ and $H_1$ (one- or two-tailed). For a sample mean $\\bar{x}$ from a normal population with known $\\sigma$: test statistic $z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$. Compare |z| to the critical value at your significance level: reject $H_0$ if |z| exceeds it.",
          },
          {
            heading: "Interpreting the result",
            body: "A small p-value (probability of the observed result if $H_0$ true) gives evidence against $H_0$. State the conclusion in context: 'there is sufficient evidence at the 5% level that…'. Significance level is the probability of wrongly rejecting $H_0$.",
          },
        ],
        keyFormulas: [
          { name: "Test statistic", statement: "$z = \\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}$" },
          { name: "Critical region", statement: "|z| > z_{crit} ⇒ reject $H_0$" },
        ],
        workedExample: {
          problem: "Test $H_0: \\mu = 50$ vs $H_1: \\mu > 50$ given $\\bar{x}=52$, $\\sigma=10$, n=25, at 5% level.",
          solution: "$z = \\frac{52-50}{10/5} = 1.0 < 1.645$ — do not reject $H_0$.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-hy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the null hypothesis $H_0$ represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The claim being tested" }, { id: "b", text: "Always false" }, { id: "c", text: "The alternative" }, { id: "d", text: "The sample mean" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "H₀", statement: "Statement assumed true unless evidence rejects it." }],
            steps: [{ reasoning: "$H_0$ is the claim under test (e.g. $\\mu=\\mu_0$).", marks: 1, markCode: "A" }],
            finalAnswer: "The claim being tested",
          },
        },
        {
          id: "cial-m-u6-hy-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "For a z-test, $\\bar{x}=48$, $\\mu_0=50$, $\\sigma=8$, n=16. Find the test statistic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "z statistic", statement: "$(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$." }],
            steps: [
              { reasoning: "$\\sigma/\\sqrt{n} = 8/4 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$z = \\frac{48-50}{2} = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $z = -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z = -1$",
          },
        },
        {
          id: "cial-m-u6-hy-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "At the 5% level (critical z = 1.645), a test gives z = 2.1 for a one-tailed test. State the conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decision", statement: "Compare |z| to critical value." }],
            steps: [
              { reasoning: "$|z| = 2.1 > 1.645$.", marks: 1, markCode: "M" },
              { reasoning: "z lies in the critical region.", marks: 1, markCode: "M" },
              { reasoning: "Reject $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reject $H_0$",
          },
        },
        {
          id: "cial-m-u6-hy-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Data gives correlation coefficient r = −0.85. Describe the relationship and state what the regression line predicts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "r", statement: "−1 to 1; negative = inverse relation." }],
            steps: [
              { reasoning: "Strong negative correlation — as x increases, y tends to decrease.", marks: 1, markCode: "M" },
              { reasoning: "$|r|$ close to 1 ⇒ strong linear relationship.", marks: 1, markCode: "M" },
              { reasoning: "Regression line $y=a+bx$ predicts y for a given x (interpolation).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong negative correlation; regression predicts y from x",
          },
        },
      ],
    },
    {
      id: "cial-m-u6-regression",
      title: "Correlation and regression",
      skill: "Interpret r and use the least-squares regression line.",
      lesson: {
        sections: [
          {
            heading: "Correlation coefficient",
            body: "$r$ measures linear association: $+1$ perfect positive, $-1$ perfect negative, $0$ none. Values near ±1 indicate strong correlation. Correlation does not imply causation.",
          },
          {
            heading: "Least-squares regression",
            body: "The regression line $y = a + bx$ minimises the sum of squared vertical deviations. $b = \\frac{S_{xy}}{S_{xx}}$, $a = \\bar{y} - b\\bar{x}$. Use it to predict y from x — reliable for interpolation, less so for extrapolation.",
          },
        ],
        keyFormulas: [
          { name: "r", statement: "$r = \\frac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$" },
          { name: "Regression", statement: "$y = \\bar{y} + b(x - \\bar{x})$" },
        ],
        workedExample: {
          problem: "Given $S_{xx}=10$, $S_{xy}=20$, $S_{yy}=50$, find r.",
          solution: "$r = \\frac{20}{\\sqrt{10 \\times 50}} = \\frac{20}{\\sqrt{500}} \\approx 0.894$ — strong positive.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-rg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What value of r indicates perfect positive linear correlation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" }, { id: "b", text: "0" }, { id: "c", text: "−1" }, { id: "d", text: "0.5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "r = 1", statement: "Perfect positive linear." }],
            steps: [{ reasoning: "$r = 1$ is perfect positive correlation.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cial-m-u6-rg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "r = 0.2 for a data set. Describe the correlation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Weak correlation", statement: "|r| near 0 ⇒ weak." }],
            steps: [
              { reasoning: "Positive but weak — slight tendency for y to rise with x.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak positive correlation",
          },
        },
        {
          id: "cial-m-u6-rg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Regression line is $y = 3 + 2x$. Predict y when x = 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Regression", statement: "Substitute x." }],
            steps: [
              { reasoning: "$y = 3 + 2(5) = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Substitution correct.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cial-m-u6-rg-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Given $\\bar{x}=10$, $\\bar{y}=20$, $b=0.5$, write the regression line $y = a + bx$ and explain why extrapolation is risky.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Regression line", statement: "$a = \\bar{y} - b\\bar{x}$." }],
            steps: [
              { reasoning: "$a = 20 - 0.5(10) = 15$; line $y = 15 + 0.5x$.", marks: 1, markCode: "M" },
              { reasoning: "Equation correct.", marks: 1, markCode: "M" },
              { reasoning: "Extrapolation assumes the linear trend continues beyond observed data.", marks: 1, markCode: "M" },
              { reasoning: "Risk explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 15 + 0.5x$; extrapolation unreliable",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u6-stats-notes",
      title: "Hypothesis testing and regression — revision notes",
      summary: "z-test procedure; r and least-squares line.",
      sections: [
        { heading: "Testing", body: "$z=(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$; reject $H_0$ if |z| > critical." },
        { heading: "Regression", body: "$r\\in[-1,1]$; $y=\\bar{y}+b(x-\\bar{x})$; interpolate reliably, extrapolate cautiously." },
      ],
    },
  ],
};
