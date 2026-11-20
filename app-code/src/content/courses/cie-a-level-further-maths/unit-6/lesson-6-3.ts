import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cialfm-u6-lesson-6-3",
  code: "6-3",
  title: "Discrete probability distributions",
  goal: "I CAN work with discrete random variables, expectation and variance.",
  standards: ["9231 P1: probability"],
  vocabulary: [
    { term: "Random variable", definition: "Quantity whose value depends on chance, e.g. number of heads." },
    { term: "Probability distribution", definition: "Table of $P(X=x)$ values for all $x$." },
    { term: "Expectation", definition: "$E(X) = \\sum xP(X=x)$ — long-run mean." },
    { term: "Variance", definition: "$\\operatorname{Var}(X) = E(X^2) - [E(X)]^2$." },
    { term: "Standard deviation", definition: "$\\sqrt{\\operatorname{Var}(X)}$." },
  ],
  concepts: [
    {
      id: "cialfm-u6-s3-expectation",
      title: "Expectation and variance",
      skill: "Calculate $E(X)$ and $\\operatorname{Var}(X)$ at A Level.",
      lesson: {
        sections: [
          {
            heading: "Expectation",
            body: "$E(X) = \\sum x_i P(X=x_i)$. It's the weighted average — what you'd expect over many trials.",
          },
          {
            heading: "Variance",
            body: "$\\operatorname{Var}(X) = \\sum (x_i - E(X))^2 P(X=x_i) = E(X^2) - [E(X)]^2$. Measures spread.",
          },
        ],
        keyFormulas: [
          { name: "E(X)", statement: "$\\sum xP(X=x)$" },
          { name: "Var(X)", statement: "$E(X^2)-[E(X)]^2$" },
        ],
        workedExample: {
          problem: "Die roll: $X$ = value. Find $E(X)$.",
          solution: "$E(X) = \\frac{1+2+3+4+5+6}{6} = 3.5$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-s3-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$E(X)$ is calculated by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sum xP(X=x)$" }, { id: "b", text: "$\\sum P(X=x)$" }, { id: "c", text: "$\\max x$" }, { id: "d", text: "$\\frac{1}{n}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Expectation", statement: "Weighted sum." }],
            steps: [{ reasoning: "$E(X)=\\sum xP(X=x)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sum xP(X=x)$",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $P(X=1)=0.5$, $P(X=2)=0.5$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Expectation", statement: "Weighted average." }],
            steps: [
              { reasoning: "$E(X) = 1(0.5)+2(0.5) = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the distribution $P(X=0)=0.3$, $P(X=1)=0.4$, $P(X=2)=0.3$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Expectation", statement: "Compute weighted sum." }],
            steps: [
              { reasoning: "$E(X) = 0(0.3)+1(0.4)+2(0.3) = 0.4+0.6 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "M" },
              { reasoning: "Check probabilities sum to 1. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $P(X=1)=0.2$, $P(X=2)=0.5$, $P(X=3)=0.3$, find $\\operatorname{Var}(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Variance", statement: "$E(X^2)-[E(X)]^2$." }],
            steps: [
              { reasoning: "$E(X) = 0.2+1.0+0.9 = 2.1$; $E(X^2) = 0.2+2.0+2.7 = 4.9$.", marks: 1, markCode: "M" },
              { reasoning: "$\\operatorname{Var}(X) = 4.9 - 4.41 = 0.49$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.49.", marks: 1, markCode: "M" },
              { reasoning: "Standard deviation $= 0.7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.49",
          },
        },
      ],
    },
    {
      id: "cialfm-u6-s3-binomial",
      title: "Binomial distribution",
      skill: "Use the binomial distribution at A Level.",
      lesson: {
        sections: [
          {
            heading: "Binomial model",
            body: "$X \\sim B(n,p)$: $n$ independent trials, success probability $p$. $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.",
          },
          {
            heading: "Mean and variance",
            body: "$E(X) = np$; $\\operatorname{Var}(X) = np(1-p)$.",
          },
        ],
        keyFormulas: [
          { name: "Binomial", statement: "$P(X=k)=\\binom{n}{k}p^kq^{n-k}$, $E(X)=np$, $\\operatorname{Var}=npq$" },
        ],
        workedExample: {
          problem: "10 coin tosses, P(heads)=0.5. Find P(exactly 3 heads).",
          solution: "$\\binom{10}{3}(0.5)^{10} = 120 \\times \\frac{1}{1024} \\approx 0.117$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-s3-bi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim B(n,p)$, $E(X)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$np$" }, { id: "b", text: "$n$" }, { id: "c", text: "$p$" }, { id: "d", text: "$np^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Binomial mean", statement: "$np$." }],
            steps: [{ reasoning: "$E(X)=np$.", marks: 1, markCode: "A" }],
            finalAnswer: "$np$",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $B(10, 0.3)$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "$np$." }],
            steps: [
              { reasoning: "$E(X) = 10 \\times 0.3 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A biased coin has P(heads)=0.6. In 5 tosses, find P(exactly 2 heads).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial probability", statement: "Apply formula." }],
            steps: [
              { reasoning: "$P(X=2) = \\binom{5}{2}(0.6)^2(0.4)^3 = 10 \\times 0.36 \\times 0.064$.", marks: 1, markCode: "M" },
              { reasoning: "$= 10 \\times 0.02304 = 0.2304$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.2304.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2304",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $X \\sim B(20, 0.25)$, find $E(X)$ and $\\operatorname{Var}(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Binomial stats", statement: "$np$ and $npq$." }],
            steps: [
              { reasoning: "$E(X) = 20 \\times 0.25 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$\\operatorname{Var}(X) = 20 \\times 0.25 \\times 0.75 = 3.75$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "M" },
              { reasoning: "SD $= \\sqrt{3.75} \\approx 1.94$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E=5$, $\\operatorname{Var}=3.75$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u6-s3-prob-notes",
      title: "Probability distributions — revision notes",
      summary: "$E(X)$, $\\operatorname{Var}(X)$, binomial distribution.",
      sections: [
        { heading: "Discrete", body: "$E(X)=\\sum xP(x)$; $\\operatorname{Var}=E(X^2)-E(X)^2$. Probabilities must sum to 1." },
        { heading: "Binomial", body: "$B(n,p)$: $E=np$, $\\operatorname{Var}=np(1-p)$. $P(X=k)=\\binom{n}{k}p^kq^{n-k}$." },
      ],
    },
  ],
};
