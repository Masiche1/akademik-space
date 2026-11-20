import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "aahl-u4-lesson-4-2",
  code: "4-2",
  title: "Random Variables",
  goal: "I CAN find expectation and variance of transformed variables and analyse continuous random variables using probability density functions.",
  standards: ["AHL 4.14"],
  vocabulary: [
    {
      term: "Expected value",
      definition:
        "The mean of a random variable: $\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$ for discrete $X$, and $\\mathrm{E}(X)=\\int x f(x)\\,dx$ for continuous $X$.",
    },
    {
      term: "Variance",
      definition:
        "$\\mathrm{Var}(X)=\\mathrm{E}\\left((X-\\mu)^2\\right)=\\mathrm{E}(X^2)-\\left(\\mathrm{E}(X)\\right)^2$.",
    },
    {
      term: "Probability density function (pdf)",
      definition:
        "A function $f\\ge 0$ for a continuous variable with $\\int f(x)\\,dx=1$ over the support, where $\\mathrm{P}(a\\le X\\le b)=\\int_a^b f(x)\\,dx$.",
    },
    {
      term: "Mode",
      definition: "The value of $x$ at which the pdf is maximal.",
    },
    {
      term: "Median",
      definition: "The value $m$ with $\\int_{-\\infty}^m f(x)\\,dx=\\frac12$.",
    },
    {
      term: "Linear transformation",
      definition:
        "A new variable $aX+b$ formed from $X$ using constants $a$ and $b$.",
    },
  ],
  concepts: [
    {
      id: "aahl-u4-discrete-variance",
      title: "Discrete variance and linear transformations",
      skill:
        "Compute $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$ for discrete variables and use $\\mathrm{E}(aX+b)$ and $\\mathrm{Var}(aX+b)$.",
      lesson: {
        sections: [
          {
            heading: "Expectation and variance",
            body: "For a discrete variable, $\\mathrm{E}(X)=\\sum x p$ and $\\mathrm{E}(X^2)=\\sum x^2 p$. The computational form $\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$ avoids subtracting the mean from every value. Variance cannot be negative; a negative answer signals an arithmetic slip.",
          },
          {
            heading: "Linear transformations",
            body: "Adding a constant shifts every value, so it changes the mean but not the spread. Multiplying by $a$ scales the mean by $a$ and the variance by $a^2$: $\\mathrm{E}(aX+b)=a\\mathrm{E}(X)+b$ and $\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$. Standard deviation scales by $|a|$. In a game with payout $aX$ and entry fee $b$, the game is fair when $\\mathrm{E}(aX-b)=0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Variance",
            statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
          },
          {
            name: "Linear transformation",
            statement:
              "$\\mathrm{E}(aX+b)=a\\mathrm{E}(X)+b,\\quad \\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$",
          },
        ],
        workedExample: {
          problem:
            "$\\mathrm{E}(X)=4$, $\\mathrm{Var}(X)=3$. Find $\\mathrm{E}(5-2X)$ and $\\mathrm{Var}(5-2X)$.",
          solution:
            "$\\mathrm{E}(5-2X)=5-2(4)=-3$. $\\mathrm{Var}(5-2X)=(-2)^2(3)=12$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-discrete-variance-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ has $\\mathrm{E}(X)=3$ and $\\mathrm{Var}(X)=4$. Find $\\mathrm{Var}(2X+5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$13$" },
              { id: "d", text: "$21$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Variance of a linear transformation",
                statement: "$\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The constant $5$ does not affect variance; the factor $2$ is squared.",
                working: "\\mathrm{Var}(2X+5)=2^2\\,\\mathrm{Var}(X)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "4\\times4=16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $16$",
            commonErrors: [
              "Using $2\\mathrm{Var}(X)$, giving $8$.",
              "Adding $5$ to the variance, giving $13$ or $21$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The discrete random variable $X$ has $\\mathrm{P}(X=x)=\\dfrac{x}{10}$ for $x=1,2,3,4$. Find $\\mathrm{Var}(3X-2)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\mathrm{Var}(3X-2)$", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
              {
                kind: "law",
                name: "Linear transformation",
                statement: "$\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the mean.",
                working: "\\mathrm{E}(X)=\\frac{1+4+9+16}{10}=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the mean of squares.",
                working: "\\mathrm{E}(X^2)=\\frac{1+8+27+64}{10}=10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the squared mean.",
                working: "\\mathrm{Var}(X)=10-9=1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Scale by $3^2$.",
                working: "\\mathrm{Var}(3X-2)=9\\times1=9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9$",
            commonErrors: [
              "Using $\\mathrm{E}(X^2)=[\\mathrm{E}(X)]^2$.",
              "Forgetting to square the multiplier.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "The random variable $X$ has $\\mathrm{E}(X)=5$ and $\\mathrm{E}(X^2)=29$. The variable $Y=aX+b$, where $a>0$, has $\\mathrm{E}(Y)=17$ and $\\mathrm{Var}(Y)=36$. Find the value of $a$ and the value of $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 3 },
              { label: "$b$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
              {
                kind: "law",
                name: "Linear transformation",
                statement:
                  "$\\mathrm{E}(aX+b)=a\\mathrm{E}(X)+b,\\ \\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$",
              },
            ],
            steps: [
              {
                reasoning: "Find the variance of $X$.",
                working: "\\mathrm{Var}(X)=29-25=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equate the variance of $Y$.",
                working: "a^2(4)=36",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the positive root as $a>0$.",
                working: "a=3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Use the mean of $Y$.",
                working: "3(5)+b=17",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solve.", working: "b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=3,\\ b=2$",
            commonErrors: [
              "Using $\\mathrm{Var}(X)=29-5=24$.",
              "Giving $a=\\pm3$ ignoring $a>0$.",
            ],
            examinerNote: "FT is allowed for $b$ from an incorrect $a$.",
          },
        },
        {
          id: "aahl-u4-discrete-variance-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "The discrete random variable $X$ has probability distribution $\\mathrm{P}(X=x)=k(x+1)$ for $x=0,1,2,3$. In a game, a player pays $\\$t$ to play and then receives $\\$4X$.",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{Var}(X)$.", marks: 2 },
            {
              label: "d",
              prompt: "Determine the value of $t$ for which the game is fair.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Find the variance of the player's net gain, and explain why it does not depend on $t$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $k$", answer: 0.1 },
              { label: "(b) $\\mathrm{E}(X)$", answer: 2 },
              { label: "(c) $\\mathrm{Var}(X)$", answer: 1 },
              { label: "(d) $t$", answer: 8 },
              { label: "(e) variance of net gain", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probability distribution",
                statement: "$\\sum \\mathrm{P}(X=x)=1$",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
              {
                kind: "definition",
                name: "Fair game",
                statement: "A game is fair when the expected net gain is zero.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Probabilities sum to 1.",
                working: "k(1+2+3+4)=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Solve.",
                working: "k=0.1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Probabilities are $0.1,0.2,0.3,0.4$; compute $\\sum xp$.",
                working: "0(0.1)+1(0.2)+2(0.3)+3(0.4)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\mathrm{E}(X)=2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Find $\\mathrm{E}(X^2)$.",
                working: "0+0.2+4(0.3)+9(0.4)=5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Subtract the squared mean.",
                working: "\\mathrm{Var}(X)=5-4=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Net gain is $4X-t$; set its mean to zero.",
                working: "4\\mathrm{E}(X)-t=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve.",
                working: "t=8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Apply the variance law.",
                working: "\\mathrm{Var}(4X-t)=16\\times1=16",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Subtracting a constant shifts every outcome equally and so does not change the spread.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $0.1$. (b) $2$. (c) $1$. (d) $\\$8$. (e) $16$; a constant shift does not alter variance.",
            commonErrors: [
              "Using $k=\\frac14$ (counting four outcomes).",
              "Computing $\\mathrm{Var}(4X-t)=16-t^2$ or $4-t$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ has $\\mathrm{E}(X)=2$ and $\\mathrm{Var}(X)=5$. Find $\\mathrm{Var}(3X-1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45$" },
              { id: "b", text: "$15$" },
              { id: "c", text: "$16$" },
              { id: "d", text: "$46$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Variance of a linear transformation",
                statement: "$\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The constant $-1$ does not affect variance; the factor $3$ is squared.",
                working: "\\mathrm{Var}(3X-1)=3^2\\,\\mathrm{Var}(X)=9\\times5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "=45",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $45$",
            commonErrors: [
              "Using $3\\mathrm{Var}(X)=15$.",
              "Adding the constant: $9\\times5+1=46$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The discrete random variable $X$ has $\\mathrm{P}(X=0)=0.2$, $\\mathrm{P}(X=1)=0.5$ and $\\mathrm{P}(X=2)=0.3$. Find $\\mathrm{Var}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.49$" },
              { id: "b", text: "$1.7$" },
              { id: "c", text: "$0.6$" },
              { id: "d", text: "$1.21$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compute $\\mathrm{E}(X)=0(0.2)+1(0.5)+2(0.3)=1.1$ and $\\mathrm{E}(X^2)=0+0.5+4(0.3)=1.7$; variance is $1.7-1.21=0.49$.",
                working: "\\mathrm{Var}(X)=1.7-(1.1)^2=1.7-1.21=0.49",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.49$",
            commonErrors: [
              "Reporting $\\mathrm{E}(X^2)=1.7$ as the variance.",
              "Computing $\\mathrm{E}(X)^2=1.21$ and stopping there.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "The discrete random variable $X$ has $\\mathrm{P}(X=1)=0.2$, $\\mathrm{P}(X=2)=0.3$ and $\\mathrm{P}(X=3)=0.5$. Find $\\mathrm{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\mathrm{Var}(X)$", answer: 0.61 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expectation",
                statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the mean.",
                working: "\\mathrm{E}(X)=1(0.2)+2(0.3)+3(0.5)=2.3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the mean of squares.",
                working: "\\mathrm{E}(X^2)=1(0.2)+4(0.3)+9(0.5)=5.9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the squared mean.",
                working: "\\mathrm{Var}(X)=5.9-(2.3)^2=5.9-5.29=0.61",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.61$",
            commonErrors: [
              "Using $\\mathrm{E}(X^2)=[\\mathrm{E}(X)]^2$.",
              "Forgetting that $\\mathrm{Var}(X)\\ge0$; a negative result signals an error.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The random variable $X$ has $\\mathrm{E}(X)=4$ and $\\mathrm{Var}(X)=6$. The variable $Y=2X+3$ is defined. Find $\\mathrm{E}(Y)$ and $\\mathrm{Var}(Y)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{E}(Y)$", answer: 11 },
              { label: "$\\mathrm{Var}(Y)$", answer: 24 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Linear transformation",
                statement:
                  "$\\mathrm{E}(aX+b)=a\\mathrm{E}(X)+b,\\quad \\mathrm{Var}(aX+b)=a^2\\mathrm{Var}(X)$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the mean rule with $a=2$, $b=3$.",
                working: "\\mathrm{E}(Y)=2(4)+3=11",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Apply the variance rule; the constant does not contribute.",
                working: "\\mathrm{Var}(Y)=2^2(6)=24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both results.",
                working: "\\mathrm{E}(Y)=11,\\quad \\mathrm{Var}(Y)=24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\mathrm{E}(Y)=11$, $\\mathrm{Var}(Y)=24$",
            commonErrors: [
              "Computing $\\mathrm{Var}(Y)=2(6)+3=15$ or $24+3=27$.",
              "Using $a^2$ on the mean: $2^2(4)+3=19$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ has $\\mathrm{E}(X^2)=20$ and $\\mathrm{E}(X)=3$. Find $\\mathrm{Var}(2X+1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$44$" },
              { id: "b", text: "$22$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$41$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2=20-9=11$",
              },
              {
                kind: "law",
                name: "Linear transformation",
                statement: "$\\mathrm{Var}(2X+1)=2^2\\mathrm{Var}(X)=4(11)=44$",
              },
            ],
            steps: [
              {
                reasoning:
                  "First recover $\\mathrm{Var}(X)$, then scale by $2^2$.",
                working:
                  "\\mathrm{Var}(X)=20-9=11,\\quad \\mathrm{Var}(2X+1)=4\\times11=44",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $44$",
            commonErrors: [
              "Using $\\mathrm{Var}(X)=20-3=17$.",
              "Computing $2\\mathrm{Var}(X)=22$ instead of $4\\mathrm{Var}(X)$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The discrete random variable $X$ has probability distribution $\\mathrm{P}(X=x)=kx$ for $x=1,2,3,4,5$, where $k$ is a constant.",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{Var}(X)$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $k$", answer: 0.067, tolerance: 0.001 },
              {
                label: "(b) $\\mathrm{E}(X)$",
                answer: 3.667,
                tolerance: 0.001,
              },
              {
                label: "(c) $\\mathrm{Var}(X)$",
                answer: 1.556,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probability distribution",
                statement: "$\\sum \\mathrm{P}(X=x)=1$",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Probabilities sum to 1.",
                working: "k(1+2+3+4+5)=15k=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Solve.",
                working: "k=\\frac1{15}\\approx0.067",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Compute $\\sum xp$ with probabilities $\\frac1{15},\\frac2{15},\\dots,\\frac5{15}$.",
                working:
                  "\\mathrm{E}(X)=\\frac{1+4+9+16+25}{15}=\\frac{55}{15}=\\frac{11}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the value.",
                working: "\\mathrm{E}(X)=\\frac{11}{3}\\approx3.667",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Compute $\\mathrm{E}(X^2)=\\frac{1+8+27+64+125}{15}=\\frac{225}{15}=15$.",
                working: "\\mathrm{E}(X^2)=15",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Subtract the squared mean.",
                working:
                  "\\mathrm{Var}(X)=15-\\left(\\frac{11}{3}\\right)^2=15-\\frac{121}{9}=\\frac{14}{9}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\frac{14}{9}\\approx1.556",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac1{15}\\approx0.067$. (b) $\\frac{11}{3}\\approx3.667$. (c) $\\frac{14}{9}\\approx1.556$.",
            commonErrors: [
              "Using $k=\\frac15$ (one over the number of outcomes).",
              "Forgetting that $\\mathrm{E}(X^2)\\neq[\\mathrm{E}(X)]^2$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "In a game a player pays $\\$5$ to play and then receives $\\$3X$, where $X$ is a random variable with $\\mathrm{E}(X)=2$ and $\\mathrm{Var}(X)=4$. Let $G$ be the player's net gain.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{E}(G)$", answer: 1, unit: "dollars" },
              { label: "$\\mathrm{Var}(G)$", answer: 36 },
              { label: "$\\mathrm{SD}(G)$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Linear transformation",
                statement:
                  "$G=3X-5$, so $\\mathrm{E}(G)=3\\mathrm{E}(X)-5$ and $\\mathrm{Var}(G)=9\\mathrm{Var}(X)$",
              },
              {
                kind: "definition",
                name: "Standard deviation",
                statement: "$\\mathrm{SD}(G)=\\sqrt{\\mathrm{Var}(G)}$",
              },
            ],
            steps: [
              {
                reasoning: "Express the net gain as a linear transformation.",
                working: "G=3X-5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the expected gain.",
                working: "\\mathrm{E}(G)=3(2)-5=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the variance of the gain.",
                working: "\\mathrm{Var}(G)=9(4)=36",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Take the square root for the standard deviation.",
                working: "\\mathrm{SD}(G)=\\sqrt{36}=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\mathrm{E}(G)=\\$1$, $\\mathrm{Var}(G)=36$, $\\mathrm{SD}(G)=6$",
            commonErrors: [
              "Writing $G=3X+5$ (sign error on the fee).",
              "Taking $\\mathrm{SD}(G)=36$ instead of $\\sqrt{36}$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "The discrete random variable $X$ takes values $1,2,3,4$ with $\\mathrm{P}(X=x)=c(5-x)$, where $c$ is a constant. Let $Y=X^2$.",
          parts: [
            { label: "a", prompt: "Find the value of $c$.", marks: 1 },
            {
              label: "b",
              prompt: "Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find $\\mathrm{E}(Y)$ and $\\mathrm{Var}(Y)$.",
              marks: 4,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $c$", answer: 0.1 },
              { label: "(b) $\\mathrm{E}(X)$", answer: 2 },
              { label: "(b) $\\mathrm{Var}(X)$", answer: 1 },
              { label: "(c) $\\mathrm{E}(Y)$", answer: 5 },
              { label: "(c) $\\mathrm{Var}(Y)$", answer: 10.4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Probability distribution",
                statement:
                  "The probabilities are $0.4,0.3,0.2,0.1$ and sum to 1.",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
              {
                kind: "principle",
                name: "Function of a variable",
                statement:
                  "$\\mathrm{E}(g(X))=\\sum g(x)\\mathrm{P}(X=x)$ applies to any function $g$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Weights are $4+3+2+1=10$, so $c=\\frac1{10}$.",
                working: "10c=1\\Rightarrow c=0.1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Compute $\\mathrm{E}(X)$.",
                working: "\\mathrm{E}(X)=1(0.4)+2(0.3)+3(0.2)+4(0.1)=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Compute $\\mathrm{E}(X^2)$.",
                working: "\\mathrm{E}(X^2)=1(0.4)+4(0.3)+9(0.2)+16(0.1)=5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Subtract the squared mean.",
                working: "\\mathrm{Var}(X)=5-4=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Since $Y=X^2$, $\\mathrm{E}(Y)=\\mathrm{E}(X^2)=5$.",
                working: "\\mathrm{E}(Y)=5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Compute $\\mathrm{E}(Y^2)=\\mathrm{E}(X^4)$.",
                working:
                  "\\mathrm{E}(X^4)=1(0.4)+16(0.3)+81(0.2)+256(0.1)=35.4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Set up the variance of $Y$.",
                working: "\\mathrm{Var}(Y)=35.4-5^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\mathrm{Var}(Y)=35.4-25=10.4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.1$. (b) $\\mathrm{E}(X)=2$, $\\mathrm{Var}(X)=1$. (c) $\\mathrm{E}(Y)=5$, $\\mathrm{Var}(Y)=10.4$.",
            commonErrors: [
              "Using $\\mathrm{Var}(Y)=\\mathrm{Var}(X)^2=1$ — squaring the variable does not square the variance in that way.",
              "Computing $\\mathrm{E}(X^4)$ with the wrong powers of $x$.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ has $\\mathrm{E}(X)=1$ and $\\mathrm{Var}(X)=4$. Find the standard deviation of $2X-3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Standard deviation of a linear transformation",
                statement: "$\\mathrm{SD}(aX+b)=|a|\\,\\mathrm{SD}(X)$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathrm{SD}(X)=\\sqrt4=2$ and the factor is $|2|=2$; the constant $-3$ does not affect spread.",
                working: "\\mathrm{SD}(2X-3)=2\\times2=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $6$",
            commonErrors: [
              "Reporting $\\mathrm{Var}(2X-3)=16$ instead of taking the square root.",
              "Adding the constant: $4+3=7$ or similar.",
            ],
          },
        },
        {
          id: "aahl-u4-discrete-variance-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The discrete random variable $X$ has $\\mathrm{P}(X=x)=\\frac{x}{10}$ for $x=1,2,3,4$. Find $\\mathrm{Var}(5X-2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$26$" },
              { id: "d", text: "$21$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{E}(X)=3$, $\\mathrm{E}(X^2)=10$, so $\\mathrm{Var}(X)=10-9=1$",
              },
              {
                kind: "law",
                name: "Linear transformation",
                statement: "$\\mathrm{Var}(5X-2)=25\\,\\mathrm{Var}(X)=25$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compute $\\mathrm{Var}(X)=1$ from the distribution, then scale by $5^2$.",
                working: "\\mathrm{Var}(X)=1,\\quad \\mathrm{Var}(5X-2)=25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $25$",
            commonErrors: [
              "Using $5\\mathrm{Var}(X)=5$.",
              "Adding the constant $-2$ to the variance.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u4-continuous-rv",
      title: "Continuous random variables",
      skill:
        "Use a pdf to find constants, probabilities, mode, median, mean and variance.",
      lesson: {
        sections: [
          {
            heading: "From pdf to probability",
            body: "A pdf $f$ satisfies $f(x)\\ge0$ and total area 1. Probabilities are areas: $\\mathrm{P}(a<X<b)=\\int_a^b f(x)\\,dx$, and $\\mathrm{P}(X=a)=0$. Use the total area to find unknown constants.",
          },
          {
            heading: "Measures of centre and spread",
            body: "The mean is $\\mathrm{E}(X)=\\int x f(x)\\,dx$ and $\\mathrm{E}(X^2)=\\int x^2f(x)\\,dx$, giving $\\mathrm{Var}(X)=\\mathrm{E}(X^2)-\\mu^2$. The mode is where $f$ is largest (use $f'(x)=0$ or check endpoints). The median $m$ solves $\\int_{-\\infty}^m f(x)\\,dx=\\frac12$. Only integrate over the support of $f$.",
          },
        ],
        keyFormulas: [
          { name: "Total area", statement: "$\\int f(x)\\,dx=1$" },
          {
            name: "Mean and variance",
            statement:
              "$\\mu=\\int xf(x)\\,dx,\\quad \\sigma^2=\\int x^2f(x)\\,dx-\\mu^2$",
          },
          {
            name: "Median",
            statement: "$\\int_{-\\infty}^m f(x)\\,dx=\\tfrac12$",
          },
        ],
        workedExample: {
          problem:
            "$f(x)=kx$ on $0\\le x\\le 2$, zero elsewhere. Find $k$ and $\\mathrm{E}(X)$.",
          solution:
            "$\\int_0^2 kx\\,dx=2k=1$, so $k=\\frac12$. $\\mathrm{E}(X)=\\int_0^2\\frac{x^2}{2}\\,dx=\\left[\\frac{x^3}{6}\\right]_0^2=\\frac43$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-continuous-rv-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx$ for $0\\le x\\le 2$ and $f(x)=0$ otherwise. Find $k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac12$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\dfrac14$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int f(x)\\,dx=1$ over the support.",
              },
            ],
            steps: [
              {
                reasoning: "Set the integral equal to 1.",
                working:
                  "\\int_0^2 kx\\,dx=\\left[\\frac{kx^2}{2}\\right]_0^2=2k=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "k=\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac12$",
            commonErrors: [
              "Forgetting the factor $\\frac12$ when integrating $x$, obtaining $k=1$ from $\\int_0^2 kx=2k$ wrongly as $4k$ or $k/2$.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{3x^2}{8}$ for $0\\le x\\le 2$ and $f(x)=0$ otherwise. Find $\\mathrm{E}(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\mathrm{E}(X)$", answer: 1.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int x f(x)\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Write the integral for the mean.",
                working: "\\mathrm{E}(X)=\\int_0^2 \\frac{3x^3}{8}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working: "\\left[\\frac{3x^4}{32}\\right]_0^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute limits.",
                working: "\\frac{3\\times16}{32}=\\frac32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac32$",
            commonErrors: ["Integrating $f(x)$ rather than $xf(x)$."],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{x^2}{9}$ for $0\\le x\\le 3$ and $f(x)=0$ otherwise. Find (i) the median of $X$ to 3 significant figures, (ii) $\\mathrm{P}(X>2)$ as a decimal to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) median", answer: 2.38, tolerance: 0.005 },
              {
                label: "(ii) $\\mathrm{P}(X>2)$",
                answer: 0.704,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Median",
                statement: "$\\int_0^m f(x)\\,dx=\\frac12$",
              },
              {
                kind: "property",
                name: "Probability as area",
                statement: "$\\mathrm{P}(X>2)=\\int_2^3 f(x)\\,dx$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set the cumulative area up to $m$ equal to one half.",
                working:
                  "\\int_0^m \\frac{x^2}{9}\\,dx=\\frac{m^3}{27}=\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $m^3$.",
                working: "m^3=13.5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Take the cube root.",
                working: "m\\approx2.38",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Subtract the area below 2 from 1.",
                working: "1-\\frac{2^3}{27}=\\frac{19}{27}\\approx0.704",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(i) $2.38$. (ii) $\\frac{19}{27}\\approx0.704$.",
            commonErrors: [
              "Setting $\\frac{m^3}{27}=1$, giving the upper endpoint.",
              "Using $\\frac{m^2}{9}=\\frac12$ (not integrating).",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For each integer $n\\ge0$, the continuous random variable $X_n$ has pdf $f_n(x)=kx^n$ for $0\\le x\\le1$ and $f_n(x)=0$ otherwise, where $k$ depends on $n$.",
          parts: [
            { label: "a", prompt: "Show that $k=n+1$.", marks: 2 },
            {
              label: "b",
              prompt: "Show that $\\mathrm{E}(X_n)=\\dfrac{n+1}{n+2}$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that $\\mathrm{Var}(X_n)=\\dfrac{n+1}{(n+2)^2(n+3)}$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find an expression for the median of $X_n$ in terms of $n$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Hence, or otherwise, prove that for all integers $n\\ge1$ the mean of $X_n$ is less than its median.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int f_n=1$.",
              },
              {
                kind: "formula",
                name: "Mean and variance",
                statement: "$\\mu=\\int xf$, $\\sigma^2=\\int x^2f-\\mu^2$.",
              },
              {
                kind: "theorem",
                name: "Binomial theorem",
                statement:
                  "$(1+y)^m\\ge1+my+\\binom m2y^2$ for $y>0$ and integer $m\\ge2$ (all terms are positive).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set the area equal to 1.",
                working:
                  "\\int_0^1 kx^n\\,dx=\\left[\\frac{kx^{n+1}}{n+1}\\right]_0^1=\\frac{k}{n+1}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Solve.",
                working: "k=n+1\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set up $\\int xf$.",
                working: "\\mathrm{E}(X_n)=\\int_0^1 (n+1)x^{n+1}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Integrate and evaluate.",
                working:
                  "(n+1)\\left[\\frac{x^{n+2}}{n+2}\\right]_0^1=\\frac{n+1}{n+2}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Find $\\mathrm{E}(X_n^2)$.",
                working: "\\int_0^1(n+1)x^{n+2}\\,dx=\\frac{n+1}{n+3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Subtract the squared mean and use a common denominator.",
                working:
                  "\\mathrm{Var}=\\frac{n+1}{n+3}-\\frac{(n+1)^2}{(n+2)^2}=\\frac{(n+1)\\left[(n+2)^2-(n+1)(n+3)\\right]}{(n+3)(n+2)^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Expand: $(n^2+4n+4)-(n^2+4n+3)=1$.",
                working: "=\\frac{n+1}{(n+2)^2(n+3)}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Median $m$ satisfies half the area.",
                working: "\\int_0^m(n+1)x^n\\,dx=m^{n+1}=\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve for $m$.",
                working: "m=2^{-\\frac{1}{n+1}}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Let $s=n+1\\ge2$. Mean $<$ median means $\\frac{s}{s+1}<2^{-1/s}$, equivalent (taking reciprocals, then $s$th powers) to $\\left(1+\\frac1s\\right)^s>2$.",
                working:
                  "\\frac{s+1}{s}>2^{1/s}\\iff\\left(1+\\frac1s\\right)^s>2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Binomial expansion: the first terms are $1+s\\cdot\\frac1s+\\binom s2\\frac1{s^2}$ and all other terms are positive.",
                working: "\\left(1+\\frac1s\\right)^s\\ge2+\\frac{s-1}{2s}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "For $s\\ge2$, $\\frac{s-1}{2s}>0$, so the expression exceeds 2. The reversed steps are valid since all quantities are positive; hence mean $<$ median.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a)-(c) shown. (d) $m=2^{-1/(n+1)}$. (e) proved using the binomial theorem.",
            commonErrors: [
              "Using $\\int_0^1 x^{n}\\,dx$ without the factor $n+1$ in (b), (c).",
              "In (e), testing a few values of $n$ instead of proving for all $n$.",
            ],
            examinerNote:
              "For $n=0$ the distribution is uniform and mean equals median $\\frac12$, which is why the result requires $n\\ge1$. Check: $n=1$ gives mean $\\frac23\\approx0.667$ and median $\\frac1{\\sqrt2}\\approx0.707$.",
          },
        },
        {
          id: "aahl-u4-continuous-rv-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx$ for $0\\le x\\le 3$ and $f(x)=0$ otherwise. Find $k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{2}{9}$" },
              { id: "b", text: "$\\dfrac{1}{3}$" },
              { id: "c", text: "$\\dfrac{3}{2}$" },
              { id: "d", text: "$\\dfrac{1}{9}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int f(x)\\,dx=1$ over the support.",
              },
            ],
            steps: [
              {
                reasoning: "Set the integral equal to 1.",
                working:
                  "\\int_0^3 kx\\,dx=\\left[\\frac{kx^2}{2}\\right]_0^3=\\frac{9k}{2}=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve.",
                working: "k=\\frac{2}{9}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{2}{9}$",
            commonErrors: [
              "Using $\\int_0^3 kx\\,dx=3k$ instead of $\\frac{9k}{2}$.",
              "Choosing the reciprocal $\\frac92$.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{3x^2}{8}$ for $0\\le x\\le 2$ and $f(x)=0$ otherwise. Find $\\mathrm{E}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{3}{2}$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$\\dfrac{4}{3}$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Set up and evaluate the mean integral.",
                working:
                  "\\mathrm{E}(X)=\\int_0^2 \\frac{3x^3}{8}\\,dx=\\left[\\frac{3x^4}{32}\\right]_0^2=\\frac{3\\times16}{32}=\\frac32",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac32$",
            commonErrors: [
              "Integrating $f(x)$ rather than $xf(x)$.",
              "Using degree mode on the calculator.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{2x}{9}$ for $0\\le x\\le 3$ and $f(x)=0$ otherwise. Find $\\mathrm{E}(X)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\mathrm{E}(X)$", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Write the mean integral over the support.",
                working: "\\mathrm{E}(X)=\\int_0^3 \\frac{2x^2}{9}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working: "\\left[\\frac{2x^3}{27}\\right]_0^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate at the limits.",
                working: "\\frac{2\\times27}{27}=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$",
            commonErrors: [
              "Integrating $f$ instead of $xf$.",
              "Evaluating at $x=3$ as $\\frac{2\\cdot9}{9}$ with the wrong power.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{x}{8}$ for $0\\le x\\le 4$ and $f(x)=0$ otherwise. Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{E}(X)$", answer: 2.667, tolerance: 0.001 },
              { label: "$\\mathrm{Var}(X)$", answer: 0.889, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the mean integral.",
                working:
                  "\\mathrm{E}(X)=\\int_0^4 \\frac{x^2}{8}\\,dx=\\left[\\frac{x^3}{24}\\right]_0^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\mathrm{E}(X)=\\frac{64}{24}=\\frac83\\approx2.667",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Set up $\\mathrm{E}(X^2)$.",
                working:
                  "\\mathrm{E}(X^2)=\\int_0^4 \\frac{x^3}{8}\\,dx=\\left[\\frac{x^4}{32}\\right]_0^4=\\frac{256}{32}=8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the squared mean.",
                working:
                  "\\mathrm{Var}(X)=8-\\left(\\frac83\\right)^2=8-\\frac{64}{9}=\\frac{8}{9}\\approx0.889",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\mathrm{E}(X)=\\frac83\\approx2.667$, $\\mathrm{Var}(X)=\\frac89\\approx0.889$",
            commonErrors: [
              "Using $\\mathrm{E}(X^2)=[\\mathrm{E}(X)]^2$.",
              "Integrating beyond the support $[0,4]$.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=6x(1-x)$ for $0\\le x\\le1$ and $f(x)=0$ otherwise. Find the median of $X$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.6$" },
              { id: "c", text: "$0.4$" },
              { id: "d", text: "$0.25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Symmetry",
                statement:
                  "$f$ is symmetric about $x=\\frac12$, so half the area lies on each side.",
              },
              {
                kind: "definition",
                name: "Median",
                statement: "$\\int_0^m f(x)\\,dx=\\frac12$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The pdf is symmetric about $x=\\frac12$, hence the median equals the mean of the symmetry axis.",
                working: "m=\\frac12",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Verify: $\\int_0^{1/2}6x(1-x)\\,dx=\\left[3x^2-2x^3\\right]_0^{1/2}=\\frac34-\\frac14=\\frac12$.",
                working: "=\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.5$",
            commonErrors: [
              "Solving $6x(1-x)=\\frac12$ for the mode rather than the median.",
              "Assuming median equals mode for a skewed pdf; here symmetry makes them equal.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx^2$ for $1\\le x\\le 2$ and $f(x)=0$ otherwise, where $k$ is a constant.",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 2 },
            {
              label: "b",
              prompt:
                "Find $\\mathrm{P}(1<X<1.5)$, giving your answer to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find $\\mathrm{E}(X)$, giving your answer to 3 significant figures.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $k$", answer: 0.429, tolerance: 0.001 },
              { label: "(b) probability", answer: 0.339, tolerance: 0.001 },
              {
                label: "(c) $\\mathrm{E}(X)$",
                answer: 1.607,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int_1^2 kx^2\\,dx=1$",
              },
              {
                kind: "property",
                name: "Probability as area",
                statement: "$\\mathrm{P}(1<X<1.5)=\\int_1^{1.5}kx^2\\,dx$",
              },
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Set the area equal to 1.",
                working:
                  "k\\left[\\frac{x^3}{3}\\right]_1^2=k\\left(\\frac83-\\frac13\\right)=\\frac{7k}{3}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Solve.",
                working: "k=\\frac37\\approx0.429",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Integrate the pdf from 1 to 1.5.",
                working:
                  "\\int_1^{1.5}\\frac37x^2\\,dx=\\frac17\\left(1.5^3-1\\right)=\\frac{2.375}{7}=\\frac{19}{56}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "\\frac{19}{56}\\approx0.339",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Set up the mean integral.",
                working:
                  "\\mathrm{E}(X)=\\int_1^2 \\frac37x^3\\,dx=\\frac37\\left[\\frac{x^4}{4}\\right]_1^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate the bracket.",
                working:
                  "\\frac37\\left(4-\\frac14\\right)=\\frac37\\times\\frac{15}{4}=\\frac{45}{28}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the value.",
                working: "\\mathrm{E}(X)=\\frac{45}{28}\\approx1.607",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac37\\approx0.429$. (b) $\\frac{19}{56}\\approx0.339$. (c) $\\frac{45}{28}\\approx1.607$.",
            commonErrors: [
              "Using $\\int_0^{1.5}$ instead of $\\int_1^{1.5}$ — the pdf is zero below 1.",
              "In (c), integrating $f$ rather than $xf$.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{x+1}{4}$ for $0\\le x\\le 2$ and $f(x)=0$ otherwise. Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$, giving your answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{E}(X)$", answer: 1.167, tolerance: 0.001 },
              { label: "$\\mathrm{Var}(X)$", answer: 0.306, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
              {
                kind: "formula",
                name: "Variance",
                statement:
                  "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check the pdf is valid: $\\int_0^2\\frac{x+1}{4}\\,dx=\\frac14\\left[\\frac{x^2}{2}+x\\right]_0^2=\\frac14(2+2)=1$.",
                working: "\\text{area}=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the mean.",
                working:
                  "\\mathrm{E}(X)=\\int_0^2\\frac{x(x+1)}{4}\\,dx=\\frac14\\left(\\frac{8}{3}+2\\right)=\\frac{7}{6}\\approx1.167",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute $\\mathrm{E}(X^2)$.",
                working:
                  "\\mathrm{E}(X^2)=\\int_0^2\\frac{x^2(x+1)}{4}\\,dx=\\frac14\\left(\\frac{8}{3}+4\\right)=\\frac{5}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the squared mean.",
                working:
                  "\\mathrm{Var}(X)=\\frac53-\\left(\\frac76\\right)^2=\\frac{60-49}{36}=\\frac{11}{36}\\approx0.306",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\mathrm{E}(X)=\\frac76\\approx1.167$, $\\mathrm{Var}(X)=\\frac{11}{36}\\approx0.306$",
            commonErrors: [
              "Computing $\\mathrm{E}(X)$ as $\\int f(x)\\,dx$ (which is 1).",
              "Arithmetic slip in $\\mathrm{E}(X^2)$: forgetting the $x^3$ term contributes $\\frac{8}{3}$, not $\\frac{4}{3}$.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The continuous random variable $X$ has pdf $f(x)=kx(2-x)$ for $0\\le x\\le2$ and $f(x)=0$ otherwise, where $k$ is a constant.",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 1 },
            { label: "b", prompt: "Find $\\mathrm{P}(X<1)$.", marks: 2 },
            { label: "c", prompt: "Find the median of $X$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $k$", answer: 0.75 },
              { label: "(b) $\\mathrm{P}(X<1)$", answer: 0.5 },
              { label: "(c) median", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Total area",
                statement: "$\\int_0^2 k(2x-x^2)\\,dx=1$",
              },
              {
                kind: "definition",
                name: "Median",
                statement: "$\\int_0^m f(x)\\,dx=\\frac12$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The integral of $x(2-x)$ over $[0,2]$ is $\\frac43$, so $k=\\frac34$.",
                working: "k\\cdot\\frac43=1\\Rightarrow k=\\frac34",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Integrate from 0 to 1.",
                working:
                  "\\int_0^1\\frac34(2x-x^2)\\,dx=\\frac34\\left[x^2-\\frac{x^3}{3}\\right]_0^1=\\frac34\\times\\frac23=\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the probability.",
                working: "\\mathrm{P}(X<1)=\\frac12=0.5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The median satisfies $\\int_0^m f(x)\\,dx=\\frac12$; by part (b) this holds at $m=1$.",
                working: "\\int_0^1 f(x)\\,dx=\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Confirm by solving $\\frac34\\left(m^2-\\frac{m^3}{3}\\right)=\\frac12$, i.e. $m^3-3m^2+2=0$, which factorises as $(m-1)(m^2-2m-2)=0$; only $m=1$ lies in $[0,2]$.",
                working: "(m-1)(m^2-2m-2)=0\\Rightarrow m=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "State the median (equivalently, symmetry about $x=1$).",
                working: "m=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $\\frac34$. (b) $\\frac12=0.5$. (c) $1$.",
            commonErrors: [
              "In (b), evaluating the integral at $x=2$ instead of $x=1$.",
              "In (c), solving $\\frac34(m^2-\\frac{m^3}{3})=1$ instead of $\\frac12$, or reporting a root outside $[0,2]",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac34\\left(1-x^2\\right)$ for $-1\\le x\\le1$ and $f(x)=0$ otherwise. Find $\\mathrm{P}(X>0)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.25$" },
              { id: "c", text: "$0.75$" },
              { id: "d", text: "$0.4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Symmetry",
                statement:
                  "$f(-x)=f(x)$, so the pdf is symmetric about $x=0$ and half the area lies on each side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Since $f$ is even, $\\mathrm{P}(X>0)=\\mathrm{P}(X<0)$ and they sum to 1.",
                working: "\\mathrm{P}(X>0)=\\frac12",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.5$",
            commonErrors: [
              "Computing $\\int_0^1 f$ with an arithmetic slip.",
              "Assuming the mean or median is 0 without checking symmetry — here it is justified.",
            ],
          },
        },
        {
          id: "aahl-u4-continuous-rv-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The continuous random variable $X$ has pdf $f(x)=\\dfrac{x^3}{4}$ for $0\\le x\\le2$ and $f(x)=0$ otherwise. Find $\\mathrm{E}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.6$" },
              { id: "b", text: "$1.2$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$0.8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean of a continuous variable",
                statement: "$\\mathrm{E}(X)=\\int xf(x)\\,dx$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up and evaluate: $\\mathrm{E}(X)=\\int_0^2\\frac{x^4}{4}\\,dx=\\left[\\frac{x^5}{20}\\right]_0^2=\\frac{32}{20}=1.6$.",
                working: "\\frac{32}{20}=1.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The correct choice is (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1.6$",
            commonErrors: [
              "Integrating $f$ instead of $xf$.",
              "Using $\\frac{x^5}{20}$ evaluated incorrectly as $\\frac{32}{4}=8$.",
            ],
          },
        },
      ],
    },
  ],
};
