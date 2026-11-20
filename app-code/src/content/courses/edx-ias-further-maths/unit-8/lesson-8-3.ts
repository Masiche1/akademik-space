import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edxifm-u8-lesson-8-3",
  code: "8-3",
  title: "Sampling, Estimators and Confidence Intervals",
  goal: "I CAN describe sampling distributions, evaluate estimators and construct confidence intervals for a population mean.",
  standards: ["WST02 S2", "Sampling and inference"],
  vocabulary: [
    { term: "Sampling distribution", definition: "Distribution of a statistic (e.g. sample mean $\\bar X$) over repeated samples." },
    { term: "Unbiased estimator", definition: "Statistic whose expected value equals the population parameter: $E(\\hat\\theta)=\\theta$." },
    { term: "Confidence interval", definition: "Range likely to contain the parameter; e.g. $95\\%$ CI for $\\mu$: $\\bar x\\pm z_{0.025}\\frac{\\sigma}{\\sqrt n}$." },
    { term: "Standard error", definition: "$SE(\\bar X)=\\frac{\\sigma}{\\sqrt n}$; measures spread of sample means." },
  ],
  concepts: [
    {
      id: "edxifm-u8-sampling",
      title: "Sampling distributions and estimators",
      skill: "Describe the distribution of sample means and assess whether estimators are unbiased and efficient.",
      lesson: {
        sections: [
          {
            heading: "Distribution of $\\bar X$",
            body: "For samples of size $n$ from $N(\\mu,\\sigma^2)$: $\\bar X\\sim N\\left(\\mu,\\frac{\\sigma^2}{n}\\right)$. Mean unchanged; variance reduced by factor $n$. By CLT, approximately normal for large $n$ even for non-normal populations.",
          },
          {
            heading: "Estimators",
            body: "$\\bar X$ is unbiased for $\\mu$ since $E(\\bar X)=\\mu$. Sample variance $S^2=\\frac{1}{n-1}\\sum(x_i-\\bar x)^2$ is unbiased for $\\sigma^2$; using $\\frac1n$ gives biased estimator. Efficiency: lower variance preferred.",
          },
          {
            heading: "Standard error",
            body: "$SE(\\bar X)=\\frac{\\sigma}{\\sqrt n}$ (known $\\sigma$) or $\\frac{s}{\\sqrt n}$ (estimated). Doubling sample size reduces SE by factor $\\sqrt2$.",
          },
        ],
        keyFormulas: [
          { name: "Sample mean", statement: "$\\bar X\\sim N\\left(\\mu,\\frac{\\sigma^2}{n}\\right)$" },
          { name: "Standard error", statement: "$SE=\\frac{\\sigma}{\\sqrt n}$" },
        ],
        workedExample: {
          problem: "Population $N(50,100)$. Find distribution of mean of samples of size $25$ and $P(\\bar X>54)$.",
          solution: "$\\bar X\\sim N(50,4)$; $SE=2$; $P(\\bar X>54)=P(Z>2)=0.0228$.",
        },
      },
      questions: [
        {
          id: "edxifm-samp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The variance of the sample mean $\\bar X$ from $N(\\mu,\\sigma^2)$ with sample size $n$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sigma^2}{n}$" },
              { id: "b", text: "$\\sigma^2$" },
              { id: "c", text: "$\\frac{\\sigma^2}{n^2}$" },
              { id: "d", text: "$n\\sigma^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Sample mean", statement: "$\\text{Var}(\\bar X)=\\frac{\\sigma^2}{n}$." }],
            steps: [{ reasoning: "Standard result.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\frac{\\sigma^2}{n}$",
          },
        },
        {
          id: "edxifm-samp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Samples of size $16$ are taken from $N(80,64)$. Find $P(\\bar X<76)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sample mean dist", statement: "$\\bar X\\sim N(80,4)$." }],
            steps: [
              { reasoning: "$\\text{Var}(\\bar X)=\\frac{64}{16}=4$, $\\sigma_{\\bar X}=2$.", working: "sd=2", marks: 1, markCode: "M" },
              { reasoning: "$Z=\\frac{76-80}{2}=-2$; $P(Z<-2)=0.0228$.", working: "0.0228", marks: 1, markCode: "M" },
              { reasoning: "State probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.0228$",
            commonErrors: ["Using $\\sigma$ not $\\sigma/\\sqrt n$."],
          },
        },
        {
          id: "edxifm-samp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which is unbiased for $\\sigma^2$: $\\frac1n\\sum(x_i-\\bar x)^2$ or $\\frac{1}{n-1}\\sum(x_i-\\bar x)^2$? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Unbiased", statement: "$E(\\hat\\theta)=\\theta$." }],
            steps: [
              { reasoning: "$E\\left[\\frac{1}{n-1}\\sum(x_i-\\bar x)^2\\right]=\\sigma^2$ — unbiased.", working: "n-1 unbiased", marks: 1, markCode: "M" },
              { reasoning: "$E\\left[\\frac1n\\sum(x_i-\\bar x)^2\\right]=\\frac{n-1}{n}\\sigma^2<\\sigma^2$ — biased low.", working: "1/n biased", marks: 1, markCode: "M" },
              { reasoning: "State which is unbiased.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{n-1}\\sum(x_i-\\bar x)^2$ is unbiased",
            commonErrors: ["Thinking $\\frac1n$ is natural so unbiased."],
          },
        },
        {
          id: "edxifm-samp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A population has mean $\\mu$ and variance $\\sigma^2=36$. Samples of size $n$ are taken.",
          parts: [
            { label: "a", prompt: "Find the sample size needed so that $P(\\bar X<\\mu-3)<0.01$.", marks: 4 },
            { label: "b", prompt: "Explain what happens to $SE(\\bar X)$ if $n$ is quadrupled.", marks: 3 },
            { label: "c", prompt: "Why is $\\bar X$ a better estimator of $\\mu$ than a single observation?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sample size", statement: "$\\bar X\\sim N(\\mu,\\frac{36}{n})$." }],
            steps: [
              { part: "a", reasoning: "$SE=\\frac{6}{\\sqrt n}$; $P(\\bar X<\\mu-3)=P\\left(Z<-\\frac{3}{6/\\sqrt n}\\right)=P\\left(Z<-\\frac{\\sqrt n}{2}\\right)$.", working: "z", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Need $P(Z<-\\frac{\\sqrt n}{2})<0.01\\Rightarrow-\\frac{\\sqrt n}{2}<-2.326\\Rightarrow\\sqrt n>4.652\\Rightarrow n>21.6$.", working: "n>21.6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Minimum $n=22$.", working: "22", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State $n\\ge22$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$SE=\\frac{\\sigma}{\\sqrt n}$; quadrupling $n$ halves the standard error.", working: "halves", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State halving.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Because $\\sqrt{4n}=2\\sqrt n$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\bar X$ averages out random fluctuations; $\\text{Var}(\\bar X)=\\frac{\\sigma^2}{n}\\to0$ as $n$ grows.", working: "reason", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Single observation has variance $\\sigma^2$; mean has $\\frac{\\sigma^2}{n}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $n\\ge22$ (b) SE halves (c) averaging reduces variance",
            commonErrors: ["SE formula; z-value lookup."],
          },
        },
      ],
    },
    {
      id: "edxifm-u8-ci",
      title: "Confidence Intervals",
      skill: "Construct confidence intervals for a population mean and interpret them.",
      lesson: {
        sections: [
          {
            heading: "The interval",
            body: "For known $\\sigma$: $95\\%$ CI $=\\bar x\\pm1.96\\frac{\\sigma}{\\sqrt n}$. For unknown $\\sigma$, estimate with $s$: $\\bar x\\pm1.96\\frac{s}{\\sqrt n}$ (large $n$). Interpretation: $95\\%$ of such intervals contain $\\mu$.",
          },
          {
            heading: "Choosing z-values",
            body: "$90\\%$: $z=1.645$; $95\\%$: $z=1.96$; $99\\%$: $z=2.576$. Wider confidence level → wider interval.",
          },
          {
            heading: "Interpretation pitfalls",
            body: "A $95\\%$ CI does NOT mean $95\\%$ probability that $\\mu$ lies in this particular interval — $\\mu$ is fixed; the procedure captures it $95\\%$ of the time. Width depends on $n$ and confidence level, not on $\\bar x$.",
          },
        ],
        keyFormulas: [
          { name: "95% CI", statement: "$\\bar x\\pm1.96\\frac{\\sigma}{\\sqrt n}$" },
          { name: "99% CI", statement: "$\\bar x\\pm2.576\\frac{\\sigma}{\\sqrt n}$" },
        ],
        workedExample: {
          problem: "Sample $n=64$, $\\bar x=50$, $s=8$. Find $95\\%$ CI for $\\mu$.",
          solution: "$50\\pm1.96\\frac{8}{8}=50\\pm1.96$, i.e. $(48.04,51.96)$.",
        },
      },
      questions: [
        {
          id: "edxifm-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The $95\\%$ confidence interval for $\\mu$ uses critical value:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.96$" },
              { id: "b", text: "$1.645$" },
              { id: "c", text: "$2.576$" },
              { id: "d", text: "$3.29$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "z-values", statement: "$95\\%\\to1.96$." }],
            steps: [{ reasoning: "Standard value.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $1.96$",
          },
        },
        {
          id: "edxifm-ci-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sample $n=100$, $\\bar x=45$, $s=10$. Find the $95\\%$ CI for $\\mu$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "CI", statement: "$\\bar x\\pm1.96\\frac{s}{\\sqrt n}$." }],
            steps: [
              { reasoning: "$SE=\\frac{10}{10}=1$; $45\\pm1.96$.", working: "45±1.96", marks: 1, markCode: "M" },
              { reasoning: "CI: $(43.04,46.96)$.", working: "interval", marks: 1, markCode: "M" },
              { reasoning: "State interval.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(43.04,46.96)$",
            commonErrors: ["Using $\\sigma$ vs $s$ incorrectly."],
          },
        },
        {
          id: "edxifm-ci-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a $99\\%$ CI is wider than a $95\\%$ CI for the same data.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "CI width", statement: "Higher confidence needs larger critical value." }],
            steps: [
              { reasoning: "$z_{0.005}=2.576>1.96$, so margin of error larger.", working: "2.576>1.96", marks: 1, markCode: "M" },
              { reasoning: "Wider interval captures $\\mu$ more often.", marks: 1, markCode: "M" },
              { reasoning: "Trade-off: confidence vs precision.", marks: 1, markCode: "A" },
              { reasoning: "State explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Larger critical value → wider interval",
            commonErrors: ["Thinking data changed."],
          },
        },
        {
          id: "edxifm-ci-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A sample of $n=50$ observations gives $\\bar x=102$ and $s=12$. The population SD is unknown.",
          parts: [
            { label: "a", prompt: "Construct a $95\\%$ CI for $\\mu$.", marks: 3 },
            { label: "b", prompt: "A second sample gives $\\bar x=98$. Find its $95\\%$ CI (same $n$, $s$).", marks: 3 },
            { label: "c", prompt: "What sample size is needed to halve the width of the CI?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "CI construction", statement: "$\\bar x\\pm1.96\\frac{s}{\\sqrt n}$." }],
            steps: [
              { part: "a", reasoning: "$SE=\\frac{12}{\\sqrt{50}}=1.697$; $102\\pm1.96\\times1.697=102\\pm3.33$.", working: "margin", marks: 1, markCode: "M" },
              { part: "a", reasoning: "CI: $(98.67,105.33)$.", working: "interval", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State interval.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$98\\pm3.33$: $(94.67,101.33)$.", working: "interval", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State interval.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same width since same $n,s$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Width $\\propto\\frac{1}{\\sqrt n}$; halve width requires $n\\to4n=200$.", working: "200", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $n=200$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Because $\\frac{1}{\\sqrt{4n}}=\\frac{1}{2\\sqrt n}$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(98.67,105.33)$ (b) $(94.67,101.33)$ (c) $n=200$",
            commonErrors: ["CI formula; sample size scaling."],
          },
        },
      ],
    },
  ],
};
