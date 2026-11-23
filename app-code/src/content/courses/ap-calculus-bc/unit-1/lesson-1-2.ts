import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apcbc-u1-lesson-1-2",
  code: "1-2",
  title: "Convergence Tests for Series",
  goal: "I CAN apply the integral, comparison, ratio, and alternating series tests.",
  standards: ["SER-2"],
  vocabulary: [
    { term: "Divergence test", definition: "If $\\lim a_n \\ne 0$, the series diverges." },
    { term: "Integral test", definition: "If $f$ is positive, decreasing, continuous and $a_n = f(n)$, then $\\sum a_n$ and $\\int_1^\\infty f$ share convergence." },
    { term: "Comparison test", definition: "If $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges." },
    { term: "Limit comparison", definition: "If $\\lim \\frac{a_n}{b_n} = c > 0$, both series share behavior." },
    { term: "Ratio test", definition: "Compute $L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$: $L<1$ converges, $L>1$ diverges, $L=1$ inconclusive." },
  ],
  concepts: [
    {
      id: "apcbc-u1-convergence-tests",
      title: "Series convergence tests",
      skill: "Choose and apply the right convergence test.",
      lesson: {
        sections: [
          {
            heading: "Choosing a test",
            body: "Start with the divergence test (cheap to check), then match the series type: $p$-series $\\sum \\frac{1}{n^p}$ converges iff $p > 1$; geometric converges iff $|r|<1$; factorials and exponentials suit the ratio test; alternating series suits AST. When unsure, comparison or limit comparison against a known $p$-series works.",
          },
          {
            heading: "The ratio test",
            body: "For $\\sum a_n$, compute $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$. Factorials collapse beautifully: $\\frac{(n+1)!}{n!} = n+1$. If $L < 1$ the series converges absolutely; $L > 1$ diverges; $L = 1$ tells nothing.",
          },
        ],
        keyFormulas: [
          { name: "$p$-series", statement: "$\\sum \\frac{1}{n^p}$ converges iff $p > 1$" },
          { name: "Ratio test", statement: "$L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$: $<1$ converge, $>1$ diverge, $=1$ inconclusive" },
        ],
        workedExample: {
          problem: "Does $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$ converge?",
          solution: "Ratio test: $\\frac{a_{n+1}}{a_n} = \\frac{n+1}{2^{n+1}} \\cdot \\frac{2^n}{n} = \\frac{n+1}{2n} \\to \\frac{1}{2} < 1$. The series converges.",
        },
      },
      questions: [
        {
          id: "apcbc-u1-convergence-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converge?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Yes — $p$-series with $p = 2 > 1$"
                    },
                    {
                              "id": "b",
                              "text": "No — terms go to $0$"
                    },
                    {
                              "id": "c",
                              "text": "No — harmonic series"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "$p$-series",
                              "statement": "Converges iff $p > 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{1}{n^2}$ is a $p$-series with $p=2 > 1$ — converges (to $\\frac{\\pi^2}{6}$).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Converges",
          "commonErrors": [
                    "Confusing $\\sum \\frac{1}{n^2}$ with the harmonic $\\sum \\frac{1}{n}$."
          ]
},
        },
        {
          id: "apcbc-u1-convergence-tests-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $\\sum \\frac{n!}{10^n}$, the ratio test gives $L = $. What is it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{1}{10}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\infty$"
                    },
                    {
                              "id": "d",
                              "text": "$1$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ratio test",
                              "statement": "$\\frac{(n+1)!}{10^{n+1}} \\cdot \\frac{10^n}{n!} = \\frac{n+1}{10} \\to \\infty$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$L = \\infty > 1$, so the series diverges.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\infty$ (diverges)",
          "commonErrors": [
                    "Thinking factorials are beaten by exponentials — they are not."
          ]
},
        },
        {
          id: "apcbc-u1-convergence-tests-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.5}}$ converge? Answer 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Converges?",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "$p$-series",
                              "statement": "$p = 1.5 > 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sum n^{-1.5}$ is a $p$-series with $p = 1.5 > 1$, so it converges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: converges (1).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Converges",
          "commonErrors": [
                    "Comparing $1.5$ to $1$ incorrectly."
          ]
},
        },
        {
          id: "apcbc-u1-convergence-tests-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Classify $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ as convergent or divergent, justifying with the integral test.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Integral test",
                              "statement": "$f(x) = \\frac{1}{x \\ln x}$ is positive, decreasing, continuous for $x \\ge 2$."
                    },
                    {
                              "kind": "method",
                              "name": "Evaluate integral",
                              "statement": "$\\int \\frac{dx}{x \\ln x} = \\ln(\\ln x)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\int_2^\\infty \\frac{dx}{x\\ln x} = \\lim_{b\\to\\infty} [\\ln(\\ln x)]_2^b = \\infty$ — the integral diverges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "By the integral test, $\\sum \\frac{1}{n \\ln n}$ diverges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conditions for the test verified and conclusion stated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Diverges",
          "commonErrors": [
                    "Ignoring the $\\ln x$ factor or mis-evaluating the antiderivative."
          ]
},
        },
      ],
    },
  ],
};
