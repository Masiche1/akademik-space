import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apcbc-u1-lesson-1-1",
  code: "1-1",
  title: "Sequences and Series Fundamentals",
  goal: "I CAN determine convergence of sequences and evaluate geometric series.",
  standards: ["SER-1"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of terms $a_1, a_2, a_3, \\ldots$ defined by a rule." },
    { term: "Series", definition: "The sum of the terms of a sequence: $S = a_1 + a_2 + \\cdots$." },
    { term: "Convergent sequence", definition: "Terms approach a finite limit $L$ as $n \\to \\infty$." },
    { term: "Geometric series", definition: "A series with constant ratio $r$ between terms." },
    { term: "Partial sum", definition: "$S_n = a_1 + \\cdots + a_n$ — the sum of the first $n$ terms." },
  ],
  concepts: [
    {
      id: "apcbc-u1-sequences-series",
      title: "Sequences and series",
      skill: "Find limits of sequences and sums of convergent geometric series.",
      lesson: {
        sections: [
          {
            heading: "Sequences",
            body: "A sequence converges if $\\lim_{n \\to \\infty} a_n$ exists and is finite. For $a_n = \\frac{3n+1}{n}$, divide: $a_n \\to 3$, so it converges to $3$. The terms must settle, not just be bounded.",
          },
          {
            heading: "Geometric series",
            body: "With first term $a$ and ratio $r$, the infinite sum converges iff $|r| < 1$, giving $S = \\frac{a}{1-r}$. Partial sums follow $S_n = a\\frac{1-r^n}{1-r}$. If $|r| \\ge 1$ the series diverges.",
          },
        ],
        keyFormulas: [
          { name: "Geometric sum", statement: "$S = \\frac{a}{1-r}$ for $|r| < 1$" },
          { name: "Partial sum", statement: "$S_n = a\\,\\frac{1 - r^n}{1 - r}$" },
        ],
        workedExample: {
          problem: "Find the sum of $3 + 1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots$.",
          solution: "First term $a = 3$, ratio $r = \\frac{1}{3}$. Since $|r| < 1$, $S = \\frac{3}{1 - \\frac{1}{3}} = \\frac{3}{\\frac{2}{3}} = \\frac{9}{2} = 4.5$.",
        },
      },
      questions: [
        {
          id: "apcbc-u1-sequences-series-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sequence $a_n = \\frac{5n}{n+1}$ converges to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0$"
                    },
                    {
                              "id": "b",
                              "text": "$5$"
                    },
                    {
                              "id": "c",
                              "text": "$\\infty$"
                    },
                    {
                              "id": "d",
                              "text": "Does not converge"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Limit of sequence",
                              "statement": "$\\frac{5n}{n+1} \\to 5$ as $n \\to \\infty$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide numerator and denominator by $n$: $\\frac{5}{1 + \\frac{1}{n}} \\to 5$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Comparing degrees incorrectly or treating $\\frac{n}{n+1}$ as $0$."
          ]
},
        },
        {
          id: "apcbc-u1-sequences-series-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the sum of $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$"
                    },
                    {
                              "id": "b",
                              "text": "$1$"
                    },
                    {
                              "id": "c",
                              "text": "$\\infty$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{1}{2}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Geometric sum",
                              "statement": "$a=1$, $r=\\frac{1}{2}$, $S = \\frac{1}{1-\\frac{1}{2}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$S = \\frac{1}{1/2} = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Using $r=2$ or misidentifying the first term."
          ]
},
        },
        {
          id: "apcbc-u1-sequences-series-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sum of $\\sum_{n=1}^{\\infty} 4 \\left(\\frac{1}{3}\\right)^{n-1}$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Geometric series",
                              "statement": "$a = 4$, $r = \\frac{1}{3}$; $S = \\frac{a}{1-r}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$S = \\frac{4}{1 - \\frac{1}{3}} = \\frac{4}{\\frac{2}{3}} = 6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sum $= 6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Off-by-one in the exponent shifting the first term."
          ]
},
        },
        {
          id: "apcbc-u1-sequences-series-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Determine whether $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$ converges, and if so whether absolutely or conditionally.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Alternating series test",
                              "statement": "Terms decrease in absolute value to $0$ — converges."
                    },
                    {
                              "kind": "concept",
                              "name": "Absolute convergence",
                              "statement": "Check $\\sum |a_n| = \\sum \\frac{1}{n}$ which diverges (harmonic)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$|a_n| = \\frac{1}{n}$ decreases to $0$, so the alternating series converges by AST.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "But $\\sum \\frac{1}{n}$ is the harmonic series, which diverges — so convergence is conditional, not absolute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conclusion: converges conditionally.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Converges conditionally",
          "commonErrors": [
                    "Claiming absolute convergence without checking $\\sum|a_n|$."
          ]
},
        },
      ],
    },
  ],
};
