import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apst-u2-lesson-2-2",
  code: "2-2",
  title: "Random Variables and Distributions",
  goal: "I CAN construct probability distributions and compute mean and SD of a random variable.",
  standards: ["PROB-2"],
  vocabulary: [
    { term: "Random variable", definition: "A numerical description of a random outcome, e.g., number of heads." },
    { term: "Probability distribution", definition: "Table of values $x_i$ with probabilities $P(x_i)$ summing to $1$." },
    { term: "Mean of RV", definition: "$\\mu = E[X] = \\sum x_i P(x_i)$ — center of the distribution." },
    { term: "Variance", definition: "$\\sigma^2 = \\text{Var}(X) = \\sum (x_i - \\mu)^2 P(x_i)$." },
    { term: "SD of RV", definition: "$\\sigma = \\sqrt{\\text{Var}(X)}$ — spread of the distribution." },
  ],
  concepts: [
    {
      id: "apst-u2-random-variables",
      title: "Random variables",
      skill: "Build distributions and compute their center and spread.",
      lesson: {
        sections: [
          {
            heading: "Distributions",
            body: "A discrete random variable $X$ takes values $x_1, \\ldots, x_k$ with probabilities $p_i$ where $\\sum p_i = 1$. The mean $\\mu = \\sum x_i p_i$ is the expected value; variance $\\sigma^2 = \\sum (x_i - \\mu)^2 p_i$ measures spread, and $\\sigma$ is its square root.",
          },
          {
            heading: "Binomial setting",
            body: "Fixed $n$ trials, two outcomes, constant success probability $p$, independence. Then $X \\sim B(n, p)$ with $\\mu = np$ and $\\sigma = \\sqrt{np(1-p)}$ — memorizing these makes binomial problems fast.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\mu = \\sum x_i p_i$" },
          { name: "Variance", statement: "$\\sigma^2 = \\sum (x_i - \\mu)^2 p_i$" },
          { name: "Binomial", statement: "$\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$" },
        ],
        workedExample: {
          problem: "Coin flip: $X = 1$ (heads, $p=0.5$) pays $\\$3$; $X=0$ pays $\\$0$. Two flips. Distribution and mean?",
          solution: "$X$ = number of heads $\\in \\{0,1,2\\}$ with probs $0.25, 0.5, 0.25$. $E = 0(0.25) + 1(0.5) + 2(0.25) = 1$ head expected; payout mean $= 3 \\times 1 = \\$3$.",
        },
      },
      questions: [
        {
          id: "apst-u2-random-variables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a valid probability distribution, the probabilities must ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "each be less than $0.5$"
                    },
                    {
                              "id": "b",
                              "text": "sum to $1$"
                    },
                    {
                              "id": "c",
                              "text": "be equal"
                    },
                    {
                              "id": "d",
                              "text": "sum to $0.5$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Distribution",
                              "statement": "Probabilities cover all outcomes exactly once."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sum p_i = 1$ is required — total probability is certain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sum to $1$",
          "commonErrors": [
                    "Thinking probabilities are independent values."
          ]
},
        },
        {
          id: "apst-u2-random-variables-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A binomial variable has $n = 20$, $p = 0.3$. Its mean is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$6$"
                    },
                    {
                              "id": "b",
                              "text": "$0.3$"
                    },
                    {
                              "id": "c",
                              "text": "$14$"
                    },
                    {
                              "id": "d",
                              "text": "$20$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binomial mean",
                              "statement": "$\\mu = np = 20 \\times 0.3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\mu = 6$ successes expected.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Using $n(1-p)$ or forgetting to multiply."
          ]
},
        },
        {
          id: "apst-u2-random-variables-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Random variable: $P(X=1)=0.4$, $P(X=2)=0.6$. Compute $E[X]$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$E[X]$",
                              "answer": 1.6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Expected value",
                              "statement": "$E = 1(0.4) + 2(0.6)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$E[X] = 0.4 + 1.2 = 1.6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$E[X] = 1.6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1.6$",
          "commonErrors": [
                    "Multiplying probabilities instead of weighting values."
          ]
},
        },
        {
          id: "apst-u2-random-variables-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A game: roll a die, win $\\$4$ on 5 or 6, lose $\\$1$ otherwise. (a) Build the distribution of net winnings. (b) Compute $E[X]$ and state whether the game is favorable.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Distribution",
                              "statement": "$P(\\text{win}) = \\frac{2}{6} = \\frac{1}{3}$, $P(\\text{lose}) = \\frac{2}{3}$."
                    },
                    {
                              "kind": "concept",
                              "name": "Fair game",
                              "statement": "$E[X] = 0$ break-even."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) $X = 4$ w.p. $\\frac{1}{3}$, $X = -1$ w.p. $\\frac{2}{3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) $E[X] = 4(\\frac{1}{3}) + (-1)(\\frac{2}{3}) = \\frac{4}{3} - \\frac{2}{3} = \\frac{2}{3} \\approx \\$0.67$ per roll — positive, favorable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Game is favorable since $E[X] > 0$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$E[X] \\approx \\$0.67$ — favorable",
          "commonErrors": [
                    "Using $\\frac{1}{6}$ per face instead of combined $\\frac{2}{6}$."
          ]
},
        },
      ],
    },
  ],
};
