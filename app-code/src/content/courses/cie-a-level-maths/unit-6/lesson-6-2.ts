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
              { id: "a", text: "$\\sum xP(X=x)$" },
              { id: "b", text: "$\\sum P(X=x)$" },
              { id: "c", text: "$\\prod xP(X=x)$" },
              { id: "d", text: "$\\max P(X=x)$" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** $\\sum xP(X=x)$",
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
              {
                id: "a",
                text: "X follows binomial distribution with n trials and success prob p",
              },
              { id: "b", text: "X follows normal distribution" },
              { id: "c", text: "X follows Poisson distribution" },
              { id: "d", text: "X is uniformly distributed" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Binomial with n trials, prob p",
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
