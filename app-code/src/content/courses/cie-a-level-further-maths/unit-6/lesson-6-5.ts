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
            { id: "a", text: "Wrong sample size" },
            { id: "b", text: "Accepting $H_0$ when it is false" },
            { id: "c", text: "Rejecting $H_0$ when it is true" },
            { id: "d", text: "Using wrong σ" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u6-ht-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The null hypothesis $H_0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always false" },
            { id: "b", text: "The statement assumed true unless evidence suggests otherwise" },
            { id: "c", text: "The alternative claim" },
            { id: "d", text: "The sample mean" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Null hypothesis", statement: "Assumed true; tested for rejection." }],
            steps: [{ reasoning: "$H_0$ is assumed true unless the data provide evidence against it.", marks: 1, markCode: "A" }],
            finalAnswer: "Statement assumed true unless rejected",
          },
        },
        {
          id: "cialfm-u6-ht-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "For $H_0: \\mu=50$ vs $H_1: \\mu \\neq 50$, $\\sigma=8$, $n=16$, $\\bar{x}=53$. Find the test statistic $Z$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Z statistic", statement: "$Z=(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$." }],
            steps: [
              { reasoning: "$\\sigma/\\sqrt{n} = 8/4 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$Z = \\frac{53-50}{2} = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $Z=1.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Z=1.5$",
          },
        },
        {
          id: "cialfm-u6-ht-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "One-tailed test at 5% significance (critical value 1.645). The test statistic is $Z=1.8$ for $H_1: \\mu > \\mu_0$. State the decision and conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decision", statement: "$Z >$ critical ⇒ reject $H_0$." }],
            steps: [
              { reasoning: "$Z = 1.8 > 1.645$.", marks: 1, markCode: "M" },
              { reasoning: "$Z$ lies in the critical region.", marks: 1, markCode: "M" },
              { reasoning: "Reject $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "Sufficient evidence that $\\mu > \\mu_0$ at the 5% level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reject $H_0$",
          },
        },
        {
          id: "cialfm-u6-ht-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a two-tailed test at the 1% significance level, the critical value of $|Z|$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1.96" },
            { id: "b", text: "2.576" },
            { id: "c", text: "2.33" },
            { id: "d", text: "1.645" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Critical value", statement: "Two-tailed 1% ⇒ $z_{0.995}=2.576$." }],
            steps: [{ reasoning: "Each tail has area 0.005, giving $z=2.576$.", marks: 1, markCode: "A" }],
            finalAnswer: "2.576",
          },
        },
        {
          id: "cialfm-u6-ht-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $H_0: \\mu=100$, $\\sigma=15$, $n=25$, $\\bar{x}=106$. Find $Z$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Z statistic", statement: "$Z=(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$." }],
            steps: [
              { reasoning: "$Z = \\frac{106-100}{15/5} = \\frac{6}{3} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $Z=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Z=2$",
          },
        },
        {
          id: "cialfm-u6-ht-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define a Type II error and give an example context.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Type II error", statement: "Failing to reject a false $H_0$." }],
            steps: [
              { reasoning: "Type II error = accepting $H_0$ when it is actually false.", marks: 1, markCode: "M" },
              { reasoning: "Example: a drug truly works but the test fails to detect it.", marks: 1, markCode: "M" },
              { reasoning: "Its probability depends on the true parameter value; larger n reduces it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Failing to reject a false $H_0$",
          },
        },
        {
          id: "cialfm-u6-ht-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The significance level of a test equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The power of the test" },
            { id: "b", text: "1 minus the p-value" },
            { id: "c", text: "The probability of a Type II error" },
            { id: "d", text: "The probability of a Type I error" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Significance level", statement: "$P(\\text{Type I}) = \\alpha$." }],
            steps: [{ reasoning: "Significance level is the probability of rejecting a true $H_0$.", marks: 1, markCode: "A" }],
            finalAnswer: "P(Type I error)",
          },
        },
        {
          id: "cialfm-u6-ht-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the standard error of the mean for $\\sigma=12$, $n=36$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Standard error", statement: "$\\sigma/\\sqrt{n}$." }],
            steps: [
              { reasoning: "$12/\\sqrt{36} = 12/6 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u6-ht-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Carry out a full test: $H_0: \\mu=20$ vs $H_1: \\mu>20$, $\\sigma=5$, $n=25$, $\\bar{x}=22$, one-tailed 5% (critical value 1.645).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Z-test", statement: "Compute $Z$, compare to critical value." }],
            steps: [
              { reasoning: "$Z = \\frac{22-20}{5/5} = \\frac{2}{1} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$Z = 2 > 1.645$, so $Z$ is in the critical region.", marks: 1, markCode: "M" },
              { reasoning: "Reject $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "There is sufficient evidence at the 5% level that $\\mu > 20$.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reject $H_0$: evidence $\\mu>20$",
          },
        },
        {
          id: "cialfm-u6-ht-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A small p-value leads to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rejecting $H_0$" },
            { id: "b", text: "Increasing $\\alpha$" },
            { id: "c", text: "Accepting $H_0$" },
            { id: "d", text: "A larger sample" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "p-value", statement: "Small p ⇒ result unlikely under $H_0$." }],
            steps: [{ reasoning: "Small p-value means the observed result is unlikely if $H_0$ is true → reject.", marks: 1, markCode: "A" }],
            finalAnswer: "Rejecting $H_0$",
          },
        },
        {
          id: "cialfm-u6-ht-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $H_0: \\mu=10$, $\\sigma=4$, $n=25$, find the sample mean $\\bar{x}$ that would give $Z=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 11.6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Invert Z", statement: "$\\bar{x}=\\mu_0+Z(\\sigma/\\sqrt{n})$." }],
            steps: [
              { reasoning: "$\\bar{x} = 10 + 2(4/5) = 10 + 1.6 = 11.6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 11.6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11.6",
          },
        },
        {
          id: "cialfm-u6-ht-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State the assumptions needed for the z-test on a population mean with known $\\sigma$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Test assumptions", statement: "Normal sampling distribution of $\\bar{X}$." }],
            steps: [
              { reasoning: "The sample is random.", marks: 1, markCode: "M" },
              { reasoning: "The population is normally distributed (or $n$ large enough for CLT).", marks: 1, markCode: "M" },
              { reasoning: "$\\sigma$ is known; $\\bar{X} \\sim N(\\mu_0, \\sigma^2/n)$ under $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "Assumptions stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Random sample; normal population; known $\\sigma$",
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
