import type { Lesson } from "../../../types.ts";

export const lesson612: Lesson = {
  id: "cial-m-u6-lesson-6-2",
  code: "6-2",
  title: "Discrete random variables and binomial distribution",
  goal: "I CAN find expectation, variance and binomial probabilities.",
  standards: ["9709: probability distributions"],
  vocabulary: [
    {
      term: "Random variable",
      definition: "Variable whose values are determined by chance.",
    },
    {
      term: "Expectation E(X)",
      definition: "Mean value of a random variable.",
    },
    {
      term: "Variance Var(X)",
      definition: "Measure of spread of a random variable.",
    },
    {
      term: "Binomial distribution",
      definition: "Distribution of number of successes in n trials.",
    },
    { term: "Trial", definition: "Single experiment with two outcomes." },
    {
      term: "Success probability p",
      definition: "Probability of success in each trial.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u6-random-variables",
      title: "Expectation and variance",
      skill: "Calculate E(X) and Var(X) for discrete random variables.",
      lesson: {
        sections: [
          {
            heading: "Probability distribution",
            body: "For discrete X: $P(X=x)$ for each value. Requirements: $0 \\leq P(X=x) \\leq 1$ and $\\sum P(X=x) = 1$.",
          },
          {
            heading: "Expectation",
            body: "$E(X) = \\sum xP(X=x)$ — the mean. $E(aX+b) = aE(X)+b$.",
          },
          {
            heading: "Variance",
            body: "$\\text{Var}(X) = E(X^2) - [E(X)]^2 = \\sum (x-\\mu)^2 P(X=x)$. $\\text{Var}(aX+b) = a^2\\text{Var}(X)$.",
          },
        ],
        keyFormulas: [
          { name: "Expectation", statement: "$E(X)=\\sum xP(X=x)$" },
          { name: "Variance", statement: "$\\text{Var}(X)=E(X^2)-[E(X)]^2$" },
        ],
        workedExample: {
          problem: "X: P(0)=0.2, P(1)=0.5, P(2)=0.3. Find E(X) and Var(X).",
          solution:
            "$E(X)=0(0.2)+1(0.5)+2(0.3)=1.1$. $E(X^2)=0+0.5+1.2=1.7$. Var $=1.7-1.21=0.49$.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-rv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is E(X) for a discrete random variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sum P(X=x)$" },
              { id: "b", text: "$\\sum xP(X=x)$" },
              { id: "c", text: "$\\prod xP(X=x)$" },
              { id: "d", text: "$\\max P(X=x)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expectation",
                statement: "$E(X)=\\sum xP(X=x)$.",
              },
            ],
            steps: [
              { reasoning: "Weighted mean formula.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $\\sum xP(X=x)$",
            commonErrors: ["Using sum of probabilities (=1)."],
          },
        },
        {
          id: "cial-m-u6-rv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "X has P(0)=0.4, P(1)=0.4, P(2)=0.2. Find E(X).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expectation",
                statement: "$E(X)=\\sum xP(X=x)$",
              },
            ],
            steps: [
              {
                reasoning: "$E(X)=0(0.4)+1(0.4)+2(0.2)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$=0+0.4+0.4=0.8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E(X)=0.8$",
            commonErrors: ["Multiplying probabilities only."],
          },
        },
        {
          id: "cial-m-u6-rv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the same X (P(0)=0.4, P(1)=0.4, P(2)=0.2), find Var(X).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variance",
                statement: "$\\text{Var}(X)=E(X^2)-[E(X)]^2$",
              },
            ],
            steps: [
              { reasoning: "$E(X)=0.8$.", marks: 1, markCode: "M" },
              { reasoning: "$E(X^2)=0+0.4+0.8=1.2$.", marks: 1, markCode: "M" },
              { reasoning: "$Var=1.2-0.64=0.56$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{Var}(X)=0.56$",
            commonErrors: ["Using wrong formula."],
          },
        },
        {
          id: "cial-m-u6-rv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Expectation and variance.",
          parts: [
            { label: "a", prompt: "E(X) formula?", marks: 1 },
            { label: "b", prompt: "Var(X) formula?", marks: 2 },
            {
              label: "c",
              prompt: "X: P(0)=0.4, P(1)=0.4, P(2)=0.2. E(X)?",
              marks: 2,
            },
            { label: "d", prompt: "Same X: Var(X)?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moments",
                statement: "Expectation+variance+calculation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\sum xP(X=x)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$E(X^2)-[E(X)]^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Alternative form.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "$0.8$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$E(X^2)=1.2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$[E(X)]^2=0.64$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "$Var=0.56$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\sum xP$ (b) Var formula (c) 0.8 (d) 0.56",
          },
        },
        {
          id: "cial-m-u6-rv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The formula for $\\text{Var}(X)$ is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$E(X)^2 - E(X^2)$" },
              { id: "b", text: "$E(X^2) - [E(X)]^2$" },
              { id: "c", text: "$E(X) + \\text{sd}(X)$" },
              { id: "d", text: "$\\sum xP(X=x)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variance",
                statement: "$\\text{Var}(X) = E(X^2) - [E(X)]^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Second moment minus mean squared.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $E(X^2)-[E(X)]^2$",
            commonErrors: ["Reversing the order of the terms."],
          },
        },
        {
          id: "cial-m-u6-rv-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "X has $P(1) = 0.4$ and $P(2) = 0.6$. Find $E(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expectation",
                statement: "$E(X) = \\sum xP(X=x)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(X) = 1(0.4) + 2(0.6)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.4 + 1.2 = 1.6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.6$",
            commonErrors: ["Multiplying probabilities only."],
          },
        },
        {
          id: "cial-m-u6-rv-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $E(X) = 4$ and $\\text{Var}(X) = 9$, find $E(3X - 1)$ and $\\text{Var}(3X - 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear transform",
                statement: "$E(aX+b)=aE(X)+b$; $\\text{Var}(aX+b)=a^2\\text{Var}(X)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(3X-1) = 3(4) - 1 = 11$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\text{Var}(3X-1) = 3^2 \\times 9 = 81$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E=11$, Var $=81$",
            commonErrors: ["Multiplying variance by 3 instead of 9."],
          },
        },
        {
          id: "cial-m-u6-rv-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a valid probability distribution of a discrete random variable, the probabilities must satisfy...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(X=x) > 1$ for some x" },
              { id: "b", text: "$E(X) = 0$" },
              { id: "c", text: "$\\sum P(X=x) = 0$" },
              { id: "d", text: "$\\sum P(X=x) = 1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probability distribution",
                statement: "Probabilities are non-negative and sum to 1.",
              },
            ],
            steps: [
              {
                reasoning: "Total probability must equal 1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** $\\sum P(X=x) = 1$",
            commonErrors: ["Thinking probabilities can exceed 1."],
          },
        },
        {
          id: "cial-m-u6-rv-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X has $P(0) = 0.2$, $P(1) = 0.3$, $P(2) = 0.5$. Find $\\text{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.61 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variance",
                statement: "$\\text{Var}(X) = E(X^2)-[E(X)]^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(X) = 0(0.2)+1(0.3)+2(0.5) = 1.3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E(X^2) = 0+0.3+4(0.5) = 2.3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\text{Var} = 2.3 - 1.69 = 0.61$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.61$",
            commonErrors: ["Using $E(X^2) - E(X)$ instead."],
          },
        },
        {
          id: "cial-m-u6-rv-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X has $P(0) = 0.3$, $P(1) = 0.5$ and $P(2) = k$. Find $k$ and $E(X)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "k", answer: 0.2 },
              { label: "E", answer: 0.9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distribution",
                statement: "Probabilities sum to 1; then apply $E(X)=\\sum xP$.",
              },
            ],
            steps: [
              {
                reasoning: "$k = 1 - 0.3 - 0.5 = 0.2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E(X) = 0(0.3)+1(0.5)+2(0.2) = 0.9$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$k$ correct.", marks: 1, markCode: "A" },
              { reasoning: "$E(X)$ correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=0.2$, $E(X)=0.9$",
            commonErrors: ["Forgetting $x=0$ contributes nothing to $E(X)$."],
          },
        },
        {
          id: "cial-m-u6-rv-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $E(X) = 5$, what is $E(2X + 3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$13$" },
              { id: "c", text: "$16$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear transform",
                statement: "$E(aX+b) = aE(X)+b$.",
              },
            ],
            steps: [
              { reasoning: "$2(5)+3 = 13$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $13$",
            commonErrors: ["Adding 3 to 5 instead of scaling first."],
          },
        },
        {
          id: "cial-m-u6-rv-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "X has $P(0) = 0.1$, $P(1) = 0.6$, $P(2) = 0.3$. Find $\\text{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.36 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variance",
                statement: "$\\text{Var}(X) = E(X^2)-[E(X)]^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(X) = 0.6 + 0.6 = 1.2$; $E(X^2) = 0.6 + 1.2 = 1.8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\text{Var} = 1.8 - 1.44 = 0.36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.36$",
            commonErrors: ["Arithmetic error in $[E(X)]^2$."],
          },
        },
        {
          id: "cial-m-u6-rv-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Let $Y = 2X + 3$ where $E(X) = 1.5$ and $\\text{Var}(X) = 2$. Find $E(Y)$ and $\\text{Var}(Y)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Linear transform",
                statement: "$E(aX+b)=aE(X)+b$; $\\text{Var}(aX+b)=a^2\\text{Var}(X)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(Y) = 2(1.5) + 3 = 6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\text{Var}(Y) = 2^2 \\times 2 = 8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$E(Y)$ correct.", marks: 1, markCode: "A" },
              { reasoning: "Constant 3 does not affect variance.", marks: 1, markCode: "M" },
              { reasoning: "$\\text{Var}(Y)$ correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E(Y)=6$, $\\text{Var}(Y)=8$",
            commonErrors: ["Including the +3 in the variance."],
          },
        },
        {
          id: "cial-m-u6-rv-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about $\\text{Var}(X)$ is always true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{Var}(X) = E(X)$" },
              { id: "b", text: "$\\text{Var}(X) \\le 0$" },
              { id: "c", text: "$\\text{Var}(X) \\ge 0$" },
              { id: "d", text: "$\\text{Var}(X)$ can be negative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variance",
                statement: "Average squared deviation — always non-negative.",
              },
            ],
            steps: [
              {
                reasoning: "Variance is a sum of squares, so $\\ge 0$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** $\\text{Var}(X) \\ge 0$",
            commonErrors: ["Thinking variance can be negative."],
          },
        },
        {
          id: "cial-m-u6-rv-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "X has $P(1) = 0.2$, $P(2) = 0.5$, $P(3) = k$. Find $k$ and $E(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distribution",
                statement: "Probabilities sum to 1; then $E(X)=\\sum xP$.",
              },
            ],
            steps: [
              {
                reasoning: "$k = 1 - 0.2 - 0.5 = 0.3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E(X) = 1(0.2)+2(0.5)+3(0.3) = 0.2+1+0.9$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 2.1$.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=0.3$, $E(X)=2.1$",
            commonErrors: ["Forgetting to include $x=3$ term."],
          },
        },
        {
          id: "cial-m-u6-rv-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Expectation and variance.",
          parts: [
            { label: "a", prompt: "State the formula for $E(X)$.", marks: 1 },
            {
              label: "b",
              prompt: "State the formula for $\\text{Var}(X)$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "X: $P(0)=0.4$, $P(1)=0.4$, $P(2)=0.2$. Find $E(X)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Same X: find $\\text{Var}(X)$.",
              marks: 4,
            },
            {
              label: "e",
              prompt: "State how $E$ and Var change for $Y = aX + b$.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moments",
                statement: "Formulas+calculation+transform.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$E(X) = \\sum xP(X=x)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\text{Var}(X) = E(X^2)-[E(X)]^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Alternative $\\sum(x-\\mu)^2P$ accepted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$E(X) = 0.4 + 0.4 = 0.8$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$E(X^2) = 0.4 + 0.8 = 1.2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$[E(X)]^2 = 0.64$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "$\\text{Var} = 0.56$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "e",
                reasoning: "$E(aX+b)=aE(X)+b$, Var$(aX+b)=a^2$Var$(X)$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) ΣxP (b) Var formula (c) 0.8 (d) 0.56 (e) linear rules",
          },
        },
      ],
    },
    {
      id: "cial-m-u6-binomial",
      title: "Binomial distribution",
      skill: "Calculate binomial probabilities, expectation and variance.",
      lesson: {
        sections: [
          {
            heading: "Binomial conditions",
            body: "$X \\sim B(n,p)$ when: fixed number of trials $n$; each trial independent; two outcomes; constant success probability $p$.",
          },
          {
            heading: "Binomial formula",
            body: "$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ for $k=0,1,...,n$.",
          },
          {
            heading: "Moments",
            body: "$E(X)=np$; $\\text{Var}(X)=np(1-p)$. Mode is at $\\lfloor (n+1)p \\rfloor$ or nearby.",
          },
        ],
        keyFormulas: [
          {
            name: "Binomial",
            statement:
              "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$; $E=np$, Var $=np(1-p)$",
          },
        ],
        workedExample: {
          problem: "X~B(10,0.3). Find P(X=3).",
          solution:
            "$\\binom{10}{3}(0.3)^3(0.7)^7 = 120 \\times 0.027 \\times 0.0824 \\approx 0.267$.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-bn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $X \\sim B(n,p)$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "X follows Poisson distribution" },
              {
                id: "b",
                text: "X follows binomial distribution with n trials and success prob p",
              },
              { id: "c", text: "X follows normal distribution" },
              { id: "d", text: "X is uniformly distributed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial notation",
                statement: "$B(n,p)$ = n trials, prob p.",
              },
            ],
            steps: [
              { reasoning: "n trials, prob p.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Binomial with n trials, prob p",
            commonErrors: ["Confusing parameters."],
          },
        },
        {
          id: "cial-m-u6-bn-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "X~B(20,0.4). Find E(X) and Var(X).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial moments",
                statement: "$E=np$, Var $=np(1-p)$",
              },
            ],
            steps: [
              { reasoning: "$E=20\\times0.4=8$.", marks: 1, markCode: "M" },
              {
                reasoning: "$Var=20\\times0.4\\times0.6=4.8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E=8$, Var $=4.8$",
            commonErrors: ["Using wrong formula."],
          },
        },
        {
          id: "cial-m-u6-bn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A biased coin has P(heads)=0.6. Tossed 5 times. Find P(exactly 3 heads).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial",
                statement:
                  "$X\\sim B(5,0.6)$; $P(X=3)=\\binom{5}{3}(0.6)^3(0.4)^2$",
              },
            ],
            steps: [
              {
                reasoning: "Identify $n=5$, $p=0.6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\binom{5}{3}=10$.", marks: 1, markCode: "M" },
              {
                reasoning: "$10\\times0.216\\times0.16=0.3456$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx0.346$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.346$",
            commonErrors: ["Forgetting combinations."],
          },
        },
        {
          id: "cial-m-u6-bn-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Binomial distribution.",
          parts: [
            { label: "a", prompt: "Binomial conditions?", marks: 2 },
            { label: "b", prompt: "P(X=k) formula?", marks: 1 },
            { label: "c", prompt: "X~B(20,0.4): E and Var?", marks: 2 },
            {
              label: "d",
              prompt: "Coin P(h)=0.6, 5 tosses: P(3 heads)?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial",
                statement: "Conditions+formula+moments+calculation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fixed n trials.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Independent+constant p.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\binom{n}{k}p^k(1-p)^{n-k}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "$E=8$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$Var=4.8$.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$n=5$, $p=0.6$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\binom{5}{3}=10$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$10\\times0.216\\times0.16$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\approx0.346$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) conditions (b) formula (c) 8, 4.8 (d) ~0.346",
          },
        },
        {
          id: "cial-m-u6-bn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a condition for a binomial distribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Success probability p is constant" },
              { id: "b", text: "Each trial has two outcomes" },
              { id: "c", text: "The number of trials must be infinite" },
              { id: "d", text: "Trials are independent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial conditions",
                statement: "Fixed n, independent trials, constant p.",
              },
            ],
            steps: [
              {
                reasoning: "n must be fixed and finite, not infinite.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Infinite trials",
            commonErrors: ["Thinking binomial allows unlimited trials."],
          },
        },
        {
          id: "cial-m-u6-bn-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "X ~ B(10, 0.4). Find $E(X)$ and $\\text{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "E", answer: 4 },
              { label: "Var", answer: 2.4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial moments",
                statement: "$E=np$, Var $=np(1-p)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E = 10 \\times 0.4 = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\text{Var} = 10 \\times 0.4 \\times 0.6 = 2.4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E=4$, Var $=2.4$",
            commonErrors: ["Using $np^2$ for variance."],
          },
        },
        {
          id: "cial-m-u6-bn-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "X ~ B(5, 0.5). Find $P(X = 2)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3125 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial formula",
                statement: "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(X=2) = \\binom{5}{2}(0.5)^2(0.5)^3 = 10 \\times 0.03125$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.3125$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.3125$",
            commonErrors: ["Forgetting the binomial coefficient."],
          },
        },
        {
          id: "cial-m-u6-bn-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim B(n, p)$, $P(X = k) = $",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{k}{n}$" },
              { id: "b", text: "$\\binom{n}{k}p^{n-k}(1-p)^k$" },
              { id: "c", text: "$\\binom{n}{k}p^k(1-p)^{n-k}$" },
              { id: "d", text: "$np(1-p)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial formula",
                statement: "$\\binom{n}{k}p^k(1-p)^{n-k}$.",
              },
            ],
            steps: [
              {
                reasoning: "k successes, n−k failures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** $\\binom{n}{k}p^k(1-p)^{n-k}$",
            commonErrors: ["Swapping $p$ and $1-p$."],
          },
        },
        {
          id: "cial-m-u6-bn-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ B(6, 0.5). Find $P(X = 4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.2344 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial formula",
                statement: "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\binom{6}{4} = 15$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$(0.5)^4(0.5)^2 = (0.5)^6 = \\frac{1}{64}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P = \\frac{15}{64}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.234$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{15}{64} \\approx 0.234$",
            commonErrors: ["Using $\\binom{6}{2}$ incorrectly — same value but wrong reasoning."],
          },
        },
        {
          id: "cial-m-u6-bn-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ B(4, 0.3). Find $P(X \\ge 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Complement",
                statement: "$P(X \\ge 1) = 1 - P(X = 0)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(X=0) = (0.7)^4 = 0.2401$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(X \\ge 1) = 1 - 0.2401$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.7599$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.7599$",
            commonErrors: ["Summing all four probabilities individually."],
          },
        },
        {
          id: "cial-m-u6-bn-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "The mode of $X \\sim B(n, p)$ is approximately at...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n - np$" },
              { id: "b", text: "$(n+1)p$" },
              { id: "c", text: "$\\frac{n}{p}$" },
              { id: "d", text: "$np(1-p)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement: "Mode near $(n+1)p$.",
              },
            ],
            steps: [
              {
                reasoning: "Mode ≈ $(n+1)p$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** $(n+1)p$",
            commonErrors: ["Confusing with mean $np$."],
          },
        },
        {
          id: "cial-m-u6-bn-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "X ~ B(20, 0.5). Find $P(X = 10)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.1762 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial formula",
                statement: "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(X=10) = \\binom{20}{10}(0.5)^{10}(0.5)^{10} = \\binom{20}{10}(0.5)^{20}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\binom{20}{10} = 184756$; $(0.5)^{20} = \\frac{1}{1048576}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.176$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.176$",
            commonErrors: ["Using calculator incorrectly for large binomial coefficient."],
          },
        },
        {
          id: "cial-m-u6-bn-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A fair die is rolled 3 times. Find the probability of obtaining exactly one six.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binomial",
                statement: "$X \\sim B(3, \\frac{1}{6})$; $P(X=1)=\\binom{3}{1}p(1-p)^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$n=3$, $p=\\frac{1}{6}$, $1-p=\\frac{5}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\binom{3}{1} = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P = 3 \\times \\frac{1}{6} \\times (\\frac{5}{6})^2 = 3 \\times \\frac{1}{6} \\times \\frac{25}{36}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{75}{216} = \\frac{25}{72}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.347$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{25}{72} \\approx 0.347$",
            commonErrors: ["Forgetting the 3 arrangements of one six."],
          },
        },
        {
          id: "cial-m-u6-bn-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a binomial experiment, the success probability p must...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change after each success" },
              { id: "b", text: "Equal the number of trials" },
              { id: "c", text: "Remain constant for every trial" },
              { id: "d", text: "Be greater than 0.5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial conditions",
                statement: "Constant p across trials.",
              },
            ],
            steps: [
              {
                reasoning: "p is the same in every trial.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** Constant p",
            commonErrors: ["Thinking p can vary between trials."],
          },
        },
        {
          id: "cial-m-u6-bn-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "X ~ B(n, p) has $E(X) = 8$ and $\\text{Var}(X) = 6$. Find n and p.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binomial moments",
                statement: "$np=8$, $np(1-p)=6$; divide to find p.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{np(1-p)}{np} = 1-p = \\frac{6}{8} = 0.75$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$p = 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n = \\frac{8}{0.25} = 32$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=32$, $p=0.25$",
            commonErrors: ["Solving $np=8$ and $npq=6$ independently without dividing."],
          },
        },
        {
          id: "cial-m-u6-bn-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Binomial distribution.",
          parts: [
            {
              label: "a",
              prompt: "State the four conditions for a binomial distribution.",
              marks: 2,
            },
            { label: "b", prompt: "Write $P(X=k)$.", marks: 1 },
            {
              label: "c",
              prompt: "State $E(X)$ and Var$(X)$ for $X \\sim B(n,p)$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "X ~ B(4, 0.5): find $P(X=2)$.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "X ~ B(3, 0.2): find $P(X \\ge 1)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial",
                statement: "Conditions+formula+moments+calculations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fixed n trials, independent, two outcomes, constant p.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All conditions stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\binom{n}{k}p^k(1-p)^{n-k}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "$E = np$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Var $= np(1-p)$.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$\\binom{4}{2}(0.5)^2(0.5)^2 = 6 \\times 0.0625$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= 0.375$.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "e",
                reasoning: "$P(X=0) = (0.8)^3 = 0.512$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "$P(X \\ge 1) = 1 - 0.512 = 0.488$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) conditions (b) formula (c) np, np(1−p) (d) 0.375 (e) 0.488",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u6-distributions-notes",
      title: "Random variables and binomial — revision notes",
      summary: "Expectation, variance, binomial distribution.",
      sections: [
        {
          heading: "Moments",
          body: "$E(X)=\\sum xP(X=x)$; Var $=E(X^2)-[E(X)]^2$. Linear: $E(aX+b)=aE(X)+b$, Var $(aX+b)=a^2$Var.",
        },
        {
          heading: "Binomial",
          body: "$B(n,p)$: fixed n, independent, constant p. $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$; $E=np$, Var $=np(1-p)$.",
        },
        {
          heading: "Exam checklist",
          body: "Can you find E and Var? Check binomial conditions? Apply formula correctly?",
        },
      ],
    },
  ],
};
