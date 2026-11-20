import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "cialfm-u6-lesson-6-5",
  code: "6-5",
  title: "Hypothesis Testing",
  goal: "I CAN carry out hypothesis tests on means and proportions.",
  standards: ["Cambridge A Level Further Mathematics 9231: probability"],
  vocabulary: [
    { term: "Null hypothesis", definition: "$H_0$: statement assumed true unless rejected." },
    { term: "Alternative hypothesis", definition: "$H_1$: what we suspect instead." },
    { term: "Critical region", definition: "Values of the test statistic leading to rejection of $H_0$." },
    { term: "Significance level", definition: "Probability of Type I error (rejecting true $H_0$)." },
    { term: "p-value", definition: "Probability of the observed result if $H_0$ is true." },
  ],
  concepts: [
    {
      id: "cialfm-u6-s5-testing",
      title: "Hypothesis testing for means",
      skill: "Perform a z-test on a population mean.",
      lesson: {
        sections: [
          {
            heading: "Setting up the test",
            body: "State $H_0: \\mu = \\mu_0$ and $H_1$ ($\\mu > \\mu_0$, $\\mu < \\mu_0$, or $\\mu \\neq \\mu_0$). For a random sample of size n from N(μ, σ²) with known σ: under $H_0$, $\\bar{X} \\sim N(\\mu_0, \\sigma^2/n)$. The test statistic $Z = \\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}} \\sim N(0,1)$.",
          },
          {
            heading: "Decision and errors",
            body: "Reject $H_0$ when |Z| exceeds the critical value for your significance level (one-tailed: z_{1-α}; two-tailed: z_{1-α/2}). Type I error: rejecting a true $H_0$ — its probability IS the significance level. Type II error: failing to reject a false $H_0$.",
          },
        ],
        keyFormulas: [
          { name: "Test statistic", statement: "$Z = \\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}$" },
          { name: "Critical value", statement: "$z_{1-\\alpha}$ one-tailed; $z_{1-\\alpha/2}$ two-tailed" },
        ],
        workedExample: {
          problem: "Test $H_0: \\mu=100$ vs $H_1: \\mu<100$; $\\bar{x}=97$, $\\sigma=12$, n=36, 5% level.",
          solution: "$Z = \\frac{97-100}{12/6} = -1.5$; critical $= -1.645$; $-1.5 > -1.645$ ⇒ do not reject.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-ht-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a Type I error in hypothesis testing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rejecting $H_0$ when it is true" }, { id: "b", text: "Accepting $H_0$ when it is false" }, { id: "c", text: "Wrong sample size" }, { id: "d", text: "Using wrong σ" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Type I error", statement: "False rejection of true $H_0$." }],
            steps: [{ reasoning: "Type I = reject true null; probability = significance level.", marks: 1, markCode: "A" }],
            finalAnswer: "Rejecting true $H_0$",
          },
        },
        {
          id: "cialfm-u6-ht-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "For $H_0: \\mu = 50$ vs $H_1: \\mu \\neq 50$, $\\sigma=10$, n=25, $\\bar{x}=54$. Find Z.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Z statistic", statement: "$(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$." }],
            steps: [
              { reasoning: "$\\sigma/\\sqrt{n} = 10/5 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$Z = \\frac{54-50}{2} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $Z = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Z = 2$",
          },
        },
        {
          id: "cialfm-u6-ht-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two-tailed test at 5% (critical |Z| = 1.96): sample gives Z = 2.3. State the decision and interpret.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decision", statement: "|Z| > critical ⇒ reject." }],
            steps: [
              { reasoning: "$|Z| = 2.3 > 1.96$.", marks: 1, markCode: "M" },
              { reasoning: "Z in critical region.", marks: 1, markCode: "M" },
              { reasoning: "Reject $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "Sufficient evidence μ ≠ 50 at 5% level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reject $H_0$",
          },
        },
        {
          id: "cialfm-u6-ht-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why does increasing sample size n make a test more powerful (for fixed effect size)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Power", statement: "Larger n ⇒ smaller standard error." }],
            steps: [
              { reasoning: "Standard error $\\sigma/\\sqrt{n}$ decreases as n grows.", marks: 1, markCode: "M" },
              { reasoning: "The sampling distribution of $\\bar{X}$ concentrates around μ.", marks: 1, markCode: "M" },
              { reasoning: "A true difference produces a larger |Z|, more likely to reject.", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Larger n reduces standard error, increasing power",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u6-hypothesis-notes",
      title: "Hypothesis testing — revision notes",
      summary: "Z-test on mean; critical regions; error types.",
      sections: [
        { heading: "Test", body: "$Z=(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$; reject if |Z| > critical." },
        { heading: "Errors", body: "Type I = reject true H₀ (prob = α); Type II = accept false H₀." },
      ],
    },
  ],
};
