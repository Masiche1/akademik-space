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
            { id: "a", text: "$\\max x$" },
            { id: "b", text: "$\\frac{1}{n}$" },
            { id: "c", text: "$\\sum P(X=x)$" },
            { id: "d", text: "$\\sum xP(X=x)$" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u6-s3-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\operatorname{Var}(X)$ is calculated by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$E(X^2)$" },
            { id: "b", text: "$E(X^2)-[E(X)]^2$" },
            { id: "c", text: "$[E(X)]^2-E(X^2)$" },
            { id: "d", text: "$E(X)^2$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Variance", statement: "$E(X^2)-[E(X)]^2$." }],
            steps: [{ reasoning: "Correct formula is $E(X^2)-[E(X)]^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$E(X^2)-[E(X)]^2$",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $P(X=0)=0.25$, $P(X=1)=0.5$, $P(X=2)=0.25$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Expectation", statement: "$\\sum xP(X=x)$." }],
            steps: [
              { reasoning: "$E(X) = 0(0.25)+1(0.5)+2(0.25) = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $P(X=1)=0.2$, $P(X=2)=0.3$, $P(X=3)=0.5$, find $E(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expectation", statement: "Weighted sum." }],
            steps: [
              { reasoning: "$E(X) = 1(0.2)+2(0.3)+3(0.5) = 0.2+0.6+1.5$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2.3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.3",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For any discrete probability distribution, the probabilities must…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sum to 0" },
            { id: "b", text: "Be less than $E(X)$" },
            { id: "c", text: "Sum to 1" },
            { id: "d", text: "All be equal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Probability distribution", statement: "$\\sum P(X=x)=1$." }],
            steps: [{ reasoning: "Probabilities sum to 1.", marks: 1, markCode: "A" }],
            finalAnswer: "Sum to 1",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $P(X=1)=0.5$, $P(X=3)=0.5$, find $E(X^2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "E(X²)", statement: "$\\sum x^2P(X=x)$." }],
            steps: [
              { reasoning: "$E(X^2) = 1^2(0.5)+3^2(0.5) = 0.5+4.5 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "For $P(X=0)=0.4$, $P(X=1)=0.4$, $P(X=2)=0.2$, find $\\operatorname{Var}(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Variance", statement: "$E(X^2)-[E(X)]^2$." }],
            steps: [
              { reasoning: "$E(X) = 0(0.4)+1(0.4)+2(0.2) = 0.8$.", marks: 1, markCode: "M" },
              { reasoning: "$E(X^2) = 0+0.4+4(0.2) = 1.2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\operatorname{Var}(X) = 1.2 - 0.64 = 0.56$.", marks: 1, markCode: "M" },
              { reasoning: "Check probabilities sum to 1. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.56.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.56",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $Y = aX+b$, then $E(Y)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$aE(X)$" },
            { id: "b", text: "$aE(X)+b$" },
            { id: "c", text: "$E(X)+b$" },
            { id: "d", text: "$a^2E(X)$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Linear transform", statement: "$E(aX+b)=aE(X)+b$." }],
            steps: [{ reasoning: "Expectation is linear.", marks: 1, markCode: "A" }],
            finalAnswer: "$aE(X)+b$",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $\\operatorname{Var}(X)=2$, find $\\operatorname{Var}(3X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Variance transform", statement: "$\\operatorname{Var}(aX)=a^2\\operatorname{Var}(X)$." }],
            steps: [
              { reasoning: "$\\operatorname{Var}(3X) = 9 \\times 2 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 18.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$P(X=1)=0.4$, $P(X=2)=k$, $P(X=3)=0.2$ and $E(X)=1.8$. Find $k$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solve for probability", statement: "Use $E(X)$; check sum = 1." }],
            steps: [
              { reasoning: "$E(X) = 1(0.4)+2k+3(0.2) = 0.4+2k+0.6 = 1+2k = 1.8$.", marks: 1, markCode: "M" },
              { reasoning: "$2k = 0.8$ → $k = 0.4$.", marks: 1, markCode: "M" },
              { reasoning: "Check sum: $0.4+0.4+0.2 = 1$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=0.4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=0.4$",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The standard deviation of $X$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\operatorname{Var}(X)^2$" },
            { id: "b", text: "$\\sqrt{\\operatorname{Var}(X)}$" },
            { id: "c", text: "$E(X^2)$" },
            { id: "d", text: "$1/\\operatorname{Var}(X)$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Standard deviation", statement: "$\\sqrt{\\operatorname{Var}}$." }],
            steps: [{ reasoning: "SD $= \\sqrt{\\operatorname{Var}(X)}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt{\\operatorname{Var}(X)}$",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $P(X=2)=0.5$, $P(X=4)=0.5$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Expectation", statement: "Weighted average." }],
            steps: [
              { reasoning: "$E(X) = 2(0.5)+4(0.5) = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u6-s3-ex-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $P(X=0)=0.4$, $P(X=1)=0.4$, $P(X=2)=0.2$, find the standard deviation of $X$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "SD", statement: "$\\sqrt{E(X^2)-[E(X)]^2}$." }],
            steps: [
              { reasoning: "$E(X) = 0.4+0.4 = 0.8$ and $E(X^2) = 0.4+0.8 = 1.2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\operatorname{Var}(X) = 1.2-0.64 = 0.56$.", marks: 1, markCode: "M" },
              { reasoning: "$\\text{SD} = \\sqrt{0.56} \\approx 0.748$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.748$",
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
            { id: "a", text: "$p$" },
            { id: "b", text: "$np^2$" },
            { id: "c", text: "$n$" },
            { id: "d", text: "$np$" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u6-s3-bi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which conditions are required for $X \\sim B(n,p)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A continuous outcome" },
            { id: "b", text: "Trials with changing probabilities" },
            { id: "c", text: "Dependent trials" },
            { id: "d", text: "$n$ independent trials, each with success probability $p$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binomial conditions", statement: "Fixed $n$, independent, constant $p$." }],
            steps: [{ reasoning: "Binomial needs $n$ independent trials with constant success probability $p$.", marks: 1, markCode: "A" }],
            finalAnswer: "Independent trials, constant $p$",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $X \\sim B(8, 0.5)$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "$np$." }],
            steps: [
              { reasoning: "$E(X) = 8 \\times 0.5 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X \\sim B(5, 0.4)$, find $P(X=2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial probability", statement: "$\\binom{n}{k}p^kq^{n-k}$." }],
            steps: [
              { reasoning: "$P(X=2) = \\binom{5}{2}(0.4)^2(0.6)^3 = 10 \\times 0.16 \\times 0.216$.", marks: 1, markCode: "M" },
              { reasoning: "$= 10 \\times 0.03456 = 0.3456$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.3456.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3456",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim B(n,p)$, $\\operatorname{Var}(X)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$np(1-p)$" },
            { id: "b", text: "$np^2$" },
            { id: "c", text: "$p(1-p)$" },
            { id: "d", text: "$n(1-p)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Binomial variance", statement: "$npq$ where $q=1-p$." }],
            steps: [{ reasoning: "$\\operatorname{Var}(X)=np(1-p)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$np(1-p)$",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $X \\sim B(10, 0.2)$, find $\\operatorname{Var}(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Variance", statement: "$np(1-p)$." }],
            steps: [
              { reasoning: "$\\operatorname{Var}(X) = 10 \\times 0.2 \\times 0.8 = 1.6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.6",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $X \\sim B(4, 0.3)$, find $P(X \\ge 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complement", statement: "$1-P(X=0)$." }],
            steps: [
              { reasoning: "$P(X=0) = (0.7)^4 = 0.2401$.", marks: 1, markCode: "M" },
              { reasoning: "$P(X \\ge 1) = 1 - 0.2401$.", marks: 1, markCode: "M" },
              { reasoning: "$= 0.7599$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.7599.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.7599",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The binomial probability $P(X=k)$ for $X \\sim B(n,p)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$np$" },
            { id: "b", text: "$p^k$" },
            { id: "c", text: "$\\binom{n}{k}p^k(1-p)^{n-k}$" },
            { id: "d", text: "$\\binom{n}{k}p^{n-k}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Binomial pmf", statement: "$\\binom{n}{k}p^kq^{n-k}$." }],
            steps: [{ reasoning: "Standard binomial formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\binom{n}{k}p^k(1-p)^{n-k}$",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $X \\sim B(6, 0.5)$, find $P(X=3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.3125 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial probability", statement: "Apply formula." }],
            steps: [
              { reasoning: "$P(X=3) = \\binom{6}{3}(0.5)^6 = 20 \\times \\frac{1}{64} = 0.3125$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.3125.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3125",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A quality inspector samples 10 items from a batch of 1000 without replacement, where 5% are defective. Explain whether the binomial model is appropriate, and what adjustment could be made.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Binomial conditions", statement: "Independence and constant $p$ required." }],
            steps: [
              { reasoning: "Sampling without replacement makes trials dependent (probabilities change slightly).", marks: 1, markCode: "M" },
              { reasoning: "Since sample (10) is small relative to batch (1000), dependence is negligible — binomial is a good approximation.", marks: 1, markCode: "M" },
              { reasoning: "Alternatively use hypergeometric for exact probabilities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximately appropriate — small sample fraction",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The mean of $B(n,p)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n$" },
            { id: "b", text: "$p/n$" },
            { id: "c", text: "$np^2$" },
            { id: "d", text: "$np$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Binomial mean", statement: "$np$." }],
            steps: [{ reasoning: "$E(X)=np$.", marks: 1, markCode: "A" }],
            finalAnswer: "$np$",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $X \\sim B(15, 0.4)$, find $E(X)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "$np$." }],
            steps: [
              { reasoning: "$E(X) = 15 \\times 0.4 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cialfm-u6-s3-bi-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A machine produces items with a 5% defect rate. In a batch of 20 items, find the probability of exactly one defective item.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial probability", statement: "$X \\sim B(20, 0.05)$." }],
            steps: [
              { reasoning: "$P(X=1) = \\binom{20}{1}(0.05)^1(0.95)^{19} = 20 \\times 0.05 \\times 0.95^{19}$.", marks: 1, markCode: "M" },
              { reasoning: "$0.95^{19} \\approx 0.3774$; $P(X=1) \\approx 1 \\times 0.3774$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.377$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 0.377.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 0.377",
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
