import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edxifm-u8-lesson-8-2",
  code: "8-2",
  title: "The Normal Distribution and Hypothesis Testing",
  goal: "I CAN use the normal distribution for probabilities and carry out hypothesis tests including critical regions.",
  standards: ["WST02 S2", "Normal distribution"],
  vocabulary: [
    { term: "Normal distribution", definition: "$X\\sim N(\\mu,\\sigma^2)$: bell-shaped; standardised $Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1)$." },
    { term: "Critical region", definition: "Set of values of test statistic leading to rejection of $H_0$; defined by significance level." },
    { term: "Significance level", definition: "Probability of rejecting $H_0$ when true; commonly $5\\%$ or $1\\%$." },
    { term: "Type I/II error", definition: "Type I: reject true $H_0$; Type II: accept false $H_0$." },
  ],
  concepts: [
    {
      id: "edxifm-u8-normal",
      title: "Normal probabilities and approximation",
      skill: "Standardise normal variables and use the normal approximation to the binomial.",
      lesson: {
        sections: [
          {
            heading: "Standardisation",
            body: "$P(a<X<b)=\\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right)-\\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$ using $\\Phi$ tables for $N(0,1)$. Continuity correction: for integer-valued $X$, use $P(X\\le r)\\approx P(Y<r+0.5)$ with $Y\\sim N(np,npq)$.",
          },
          {
            heading: "Normal approximation to binomial",
            body: "When $np>5$ and $nq>5$, $B(n,p)\\approx N(np,npq)$. Apply continuity correction: $P(X\\le r)\\to P(Y\\le r+0.5)$, $P(X\\ge r)\\to P(Y\\ge r-0.5)$, $P(X=r)\\to P(r-0.5<Y<r+0.5)$.",
          },
          {
            heading: "Inverse normal",
            body: "Given probability, find $x$: $x=\\mu+\\sigma z$ where $z=\\Phi^{-1}(p)$. Used for confidence intervals and critical values.",
          },
        ],
        keyFormulas: [
          { name: "Standardisation", statement: "$Z=\\frac{X-\\mu}{\\sigma}$" },
          { name: "Continuity correction", statement: "$P(X\\le r)\\approx\\Phi\\left(\\frac{r+0.5-\\mu}{\\sigma}\\right)$" },
        ],
        workedExample: {
          problem: "For $X\\sim N(50,16)$, find $P(X>55)$.",
          solution: "$\\sigma=4$; $Z=\\frac{55-50}{4}=1.25$; $P(Z>1.25)=1-0.8944=0.1056$.",
        },
      },
      questions: [
        {
          id: "edxifm-norm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X\\sim N(\\mu,\\sigma^2)$, the standardised variable is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Z=\\frac{X-\\mu}{\\sigma}$" },
              { id: "b", text: "$Z=\\frac{X-\\mu}{\\sigma^2}$" },
              { id: "c", text: "$Z=\\frac{X}{\\sigma}$" },
              { id: "d", text: "$Z=X-\\mu$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Standardisation", statement: "$Z=\\frac{X-\\mu}{\\sigma}$." }],
            steps: [{ reasoning: "Definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $Z=\\frac{X-\\mu}{\\sigma}$",
          },
        },
        {
          id: "edxifm-norm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X\\sim N(100,25)$, find $P(90<X<110)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standardisation", statement: "$\\sigma=5$." }],
            steps: [
              { reasoning: "$Z_1=\\frac{90-100}{5}=-2$, $Z_2=\\frac{110-100}{5}=2$.", working: "z=-2,2", marks: 1, markCode: "M" },
              { reasoning: "$P=\\Phi(2)-\\Phi(-2)=0.9772-0.0228=0.9544$.", working: "0.9544", marks: 1, markCode: "M" },
              { reasoning: "State probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.954$",
            commonErrors: ["Variance vs SD confusion."],
          },
        },
        {
          id: "edxifm-norm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $X\\sim B(100,0.3)$, use normal approximation to find $P(X\\le45)$ with continuity correction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Normal approx", statement: "$X\\approx N(30,21)$ since $np=30$, $npq=21$." },
              { kind: "technique", name: "Continuity correction", statement: "$P(X\\le45)\\approx P(Y<45.5)$." },
            ],
            steps: [
              { reasoning: "$np=30>5$, $nq=70>5$ — approximation valid; $\\mu=30$, $\\sigma=\\sqrt{21}=4.58$.", working: "mu,sigma", marks: 1, markCode: "M" },
              { reasoning: "$Z=\\frac{45.5-30}{4.58}=3.385$; $P(Z<3.385)\\approx0.9996$.", working: "0.9996", marks: 1, markCode: "M" },
              { reasoning: "State probability.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.9996$",
            commonErrors: ["Missing continuity correction."],
          },
        },
        {
          id: "edxifm-norm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The mass of bags of sugar is normally distributed with mean $1000$ g and SD $20$ g.",
          parts: [
            { label: "a", prompt: "Find the probability a bag is underweight (<1000 g).", marks: 2 },
            { label: "b", prompt: "Find the probability a bag is between $980$ and $1020$ g.", marks: 3 },
            { label: "c", prompt: "In a box of $50$ bags, find expected number underweight.", marks: 2 },
            { label: "d", prompt: "A sample mean of $50$ bags is $995$ g. Is this significantly below $1000$ g? (Use $\\bar{X}\\sim N(1000,\\frac{400}{50})$.)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Normal problems", statement: "Standardise each." }],
            steps: [
              { part: "a", reasoning: "$P(X<1000)=P(Z<0)=0.5$.", working: "0.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $0.5$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Z=\\pm1$: $P=\\Phi(1)-\\Phi(-1)=0.8413-0.1587=0.6826$.", working: "0.6826", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$50\\times0.5=25$ bags.", working: "25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State expected number.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\bar{X}\\sim N(1000,8)$; $Z=\\frac{995-1000}{8}=-0.625$; $P(Z<-0.625)=0.266$.", working: "0.266", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $0.266>0.05$, not significant at $5\\%$ — consistent with $H_0$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Conclude not significant.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.5$ (b) $0.6826$ (c) $25$ (d) $p=0.266$, not significant",
            commonErrors: ["Variance of mean; significance interpretation."],
          },
        },
      ],
    },
    {
      id: "edxifm-u8-hypothesis",
      title: "Hypothesis Testing",
      skill: "Set up and carry out hypothesis tests, determining critical regions and making decisions.",
      lesson: {
        sections: [
          {
            heading: "Setting up the test",
            body: "State $H_0$ (null, e.g. $p=p_0$) and $H_1$ (alternative, one- or two-tailed). Choose significance level (usually $5\\%$). Determine critical region from the distribution under $H_0$.",
          },
          {
            heading: "Decision",
            body: "If observed value lies in critical region, reject $H_0$; otherwise do not reject. Report the conclusion in context. Compute $P(\\text{result at least as extreme}\\mid H_0)$ as p-value.",
          },
          {
            heading: "Critical regions",
            body: "For discrete distributions, critical region may not exactly achieve significance level — state actual probability. For one-tailed tests, all extreme values in one direction; two-tailed splits between both tails.",
          },
        ],
        keyFormulas: [
          { name: "p-value", statement: "$p=P(\\text{observed or more extreme}\\mid H_0)$" },
          { name: "Decision", statement: "Reject $H_0$ if $p<\\alpha$" },
        ],
        workedExample: {
          problem: "Test $H_0:p=0.5$ vs $H_1:p>0.5$ at $5\\%$ with $n=10$ coin tosses, 8 heads observed.",
          solution: "Critical region: $P(X\\ge k)<0.05$ under $B(10,0.5)$: $P(X\\ge9)=0.0107<0.05$, $P(X\\ge8)=0.0547>0.05$. Region: $X\\ge9$. Observed 8 not in region — do not reject $H_0$.",
        },
      },
      questions: [
        {
          id: "edxifm-ht-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A Type I error is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wrong significance level" },
              { id: "b", text: "Incorrect calculation" },
              { id: "c", text: "Rejecting $H_0$ when it is true" },
              { id: "d", text: "Accepting $H_0$ when false" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Type I", statement: "False rejection." }],
            steps: [{ reasoning: "Definition.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** rejecting true $H_0$",
          },
        },
        {
          id: "edxifm-ht-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X\\sim B(20,0.5)$, find the critical region for a one-tailed test at $5\\%$ significance (upper tail).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Critical region", statement: "Find smallest $k$ with $P(X\\ge k)<0.05$." }],
            steps: [
              { reasoning: "$P(X\\ge14)=0.0577>0.05$; $P(X\\ge15)=0.0207<0.05$.", working: "tail probs", marks: 1, markCode: "M" },
              { reasoning: "Critical region: $X\\ge15$.", working: "x>=15", marks: 1, markCode: "M" },
              { reasoning: "State region.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$X\\ge15$",
            commonErrors: ["Including value that exceeds 5%."],
          },
        },
        {
          id: "edxifm-ht-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A drug is claimed to cure $70\\%$ of patients. In a trial of $20$, $16$ are cured. Test at $5\\%$ whether the claim is supported (one-tailed, $H_1:p>0.7$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hypothesis test", statement: "$X\\sim B(20,0.7)$ under $H_0$." }],
            steps: [
              { reasoning: "Under $H_0$, $X\\sim B(20,0.7)$; p-value $=P(X\\ge16)=P(16)+\\cdots+P(20)\\approx0.130+0.072+0.028+0.007+0.001=0.238$.", working: "p=0.238", marks: 1, markCode: "M" },
              { reasoning: "Since $0.238>0.05$, the result is not significant — do not reject $H_0$.", marks: 1, markCode: "M" },
              { reasoning: "State conclusion: insufficient evidence that cure rate exceeds $70\\%$.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Do not reject $H_0$ ($p\\approx0.238>0.05$)",
            commonErrors: ["Direction of test; p-value computation."],
            examinerNote: "Accept p-value in range 0.23–0.24.",
          },
        },
        {
          id: "edxifm-ht-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A coin is suspected of bias. $H_0:p=0.5$, $H_1:p\\ne0.5$, significance $5\\%$ two-tailed. $10$ tosses give $7$ heads.",
          parts: [
            { label: "a", prompt: "Define the critical region.", marks: 3 },
            { label: "b", prompt: "State whether $H_0$ is rejected for $7$ heads.", marks: 2 },
            { label: "c", prompt: "Find the actual significance level of your critical region.", marks: 3 },
            { label: "d", prompt: "State a Type II error in context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Two-tailed test", statement: "Split 5% between tails." }],
            steps: [
              { part: "a", reasoning: "Each tail $2.5\\%$: $P(X\\le k)<0.025$ and $P(X\\ge10-k)<0.025$ under $B(10,0.5)$.", working: "tails", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$P(X\\le1)=0.0107<0.025$, $P(X\\le2)=0.0547>0.025$; so lower tail $X\\le1$; by symmetry upper $X\\ge9$.", working: "region", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Critical region: $X\\le1$ or $X\\ge9$.", working: "x<=1,x>=9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$7$ not in critical region — do not reject $H_0$.", working: "no reject", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State decision.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(X\\le1)=\\frac{1+10}{1024}=\\frac{11}{1024}=0.0107$; by symmetry $P(X\\ge9)=0.0107$; total significance $=0.0214$.", working: "0.0214", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State actual significance $\\approx0.0214$ (below nominal $5\\%$ since discrete).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Note it is below nominal 5%.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Type II error: coin is biased but test fails to reject $H_0$ (concludes fair when biased).", working: "type II", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $X\\le1$ or $X\\ge9$ (b) do not reject (c) $\\approx0.021$ (d) biased coin accepted as fair",
            commonErrors: ["Two-tailed region asymmetry; actual level."],
          },
        },
      ],
    },
  ],
};
