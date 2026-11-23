import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apcbc-u1-lesson-1-3",
  code: "1-3",
  title: "Taylor and Power Series",
  goal: "I CAN construct Taylor polynomials and determine intervals of convergence.",
  standards: ["SER-3"],
  vocabulary: [
    { term: "Taylor polynomial", definition: "$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$ — approximates $f$ near $x = a$." },
    { term: "Maclaurin series", definition: "Taylor series centered at $a = 0$." },
    { term: "Radius of convergence", definition: "$R$ such that the series converges for $|x - a| < R$." },
    { term: "Interval of convergence", definition: "The actual $x$-values where the series converges, including endpoint checks." },
    { term: "Known series", definition: "$e^x = \\sum \\frac{x^n}{n!}$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, $\\frac{1}{1-x} = \\sum x^n$ for $|x|<1$." },
  ],
  concepts: [
    {
      id: "apcbc-u1-taylor-series",
      title: "Power series",
      skill: "Build Taylor polynomials and find intervals of convergence.",
      lesson: {
        sections: [
          {
            heading: "Taylor polynomials",
            body: "$T_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots$ matches $f$ and its derivatives at $a$. Higher $n$ means better approximation near $a$. For $e^x$ at $0$: $1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$.",
          },
          {
            heading: "Intervals of convergence",
            body: "Use the ratio test on the general term to get the radius $R$, then test the endpoints $x = a \\pm R$ separately — endpoints may converge or diverge independently. For $\\sum x^n$, $R = 1$ and the interval is $(-1, 1)$ since both endpoints diverge.",
          },
        ],
        keyFormulas: [
          { name: "Taylor polynomial", statement: "$T_n(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x-a)^k$" },
          { name: "Radius via ratio", statement: "$R = \\lim \\left|\\frac{a_n}{a_{n+1}}\\right|$ or from ratio test on terms" },
        ],
        workedExample: {
          problem: "Find the third-degree Maclaurin polynomial for $\\sin x$.",
          solution: "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$. Third degree: $T_3(x) = x - \\frac{x^3}{6}$ (only odd powers appear).",
        },
      },
      questions: [
        {
          id: "apcbc-u1-taylor-series-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Maclaurin series for $e^x$ begins ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$1 - x + \\frac{x^2}{2} - \\cdots$"
                    },
                    {
                              "id": "b",
                              "text": "$1 + x + \\frac{x^2}{2} + \\cdots$"
                    },
                    {
                              "id": "c",
                              "text": "$x + \\frac{x^2}{2} + \\cdots$"
                    },
                    {
                              "id": "d",
                              "text": "$1 + x + x^2 + \\cdots$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Maclaurin",
                              "statement": "$e^x = \\sum \\frac{x^n}{n!}$ at $a=0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All signs positive: $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$1 + x + \\frac{x^2}{2} + \\cdots$",
          "commonErrors": [
                    "Alternating signs — that is $\\sin x$ or $\\cos x$."
          ]
},
        },
        {
          id: "apcbc-u1-taylor-series-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the interval of convergence of $\\sum_{n=0}^{\\infty} x^n$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$[-1, 1]$"
                    },
                    {
                              "id": "b",
                              "text": "$(-1, 1)$"
                    },
                    {
                              "id": "c",
                              "text": "$(-\\infty, \\infty)$"
                    },
                    {
                              "id": "d",
                              "text": "$[0, 1)$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Geometric ratio",
                              "statement": "$|x| < 1$ converges; endpoints $x=\\pm1$ give $\\sum(\\pm1)^n$ which diverges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Radius $R=1$; endpoints fail, so interval is $(-1,1)$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$(-1, 1)$",
          "commonErrors": [
                    "Including endpoints without testing them."
          ]
},
        },
        {
          id: "apcbc-u1-taylor-series-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximate $e^{0.1}$ using the first three nonzero Maclaurin terms. Enter the value rounded to 4 decimals.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Approx",
                              "answer": 1.105,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Maclaurin",
                              "statement": "$e^x \\approx 1 + x + \\frac{x^2}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1 + 0.1 + \\frac{0.01}{2} = 1.105$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Approximation $1.105$ (true value $1.10517$).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1.105$",
          "commonErrors": [
                    "Using $x^2$ coefficient $\\frac{1}{2!}=\\frac12$ incorrectly."
          ]
},
        },
        {
          id: "apcbc-u1-taylor-series-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the radius and interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 3^n}$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ratio test",
                              "statement": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n}{n+1}\\cdot\\frac{|x-2|}{3} \\to \\frac{|x-2|}{3}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converges when $\\frac{|x-2|}{3} < 1$, i.e., $|x-2| < 3$, so $R = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Endpoints $x = -1$ and $x = 5$: series becomes $\\sum \\frac{(\\pm3)^n}{n\\,3^n} = \\sum \\frac{(\\pm1)^n}{n}$, which converges conditionally at both ends (alternating harmonic).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interval of convergence: $[-1, 5]$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$R=3$, interval $[-1,5]$",
          "commonErrors": [
                    "Stopping at the radius without endpoint checks."
          ]
},
        },
      ],
    },
  ],
};
