import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m12-u3-lesson-3-2",
  code: "3-2",
  title: "Infinite Geometric Series",
  goal: "I CAN determine convergence and sum infinite geometric series.",
  standards: ["F-BF.2", "F-LE.2"],
  vocabulary: [
    { term: "Infinite series", definition: "The sum of infinitely many terms $a_1 + a_2 + a_3 + \\cdots$." },
    { term: "Convergent", definition: "The partial sums approach a finite limit." },
    { term: "Divergent", definition: "The partial sums grow without bound or fail to settle." },
    { term: "Convergence condition", definition: "Infinite geometric series converges iff $|r| < 1$." },
    { term: "Sum formula", definition: "$S_\\infty = \\frac{a_1}{1 - r}$ for $|r| < 1$." },
  ],
  concepts: [
    {
      id: "m12-u3-infinite-series",
      title: "Infinite sums",
      skill: "Test convergence and compute $S_\\infty$ for geometric series.",
      lesson: {
        sections: [
          {
            heading: "When does it converge?",
            body: "An infinite geometric series $\\sum a_1 r^{n-1}$ converges **only** when $|r| < 1$ — the terms must shrink toward zero. If $|r| \\ge 1$, terms don't vanish and the sum diverges (or is undefined). This is why $0.999\\ldots = 1$: it is $\\frac{9}{10} + \\frac{9}{100} + \\cdots$ with $r = 0.1$, summing to $\\frac{0.9}{0.9} = 1$.",
          },
          {
            heading: "Computing the sum",
            body: "For convergent series, $S_\\infty = \\frac{a_1}{1 - r}$. Always verify $|r| < 1$ first. For $3 + 1 + \\frac{1}{3} + \\cdots$: $r = \\frac{1}{3}$, so $S = \\frac{3}{1 - 1/3} = \\frac{3}{2/3} = 4.5$.",
          },
        ],
        keyFormulas: [
          { name: "Converges", statement: "$|r| < 1$" },
          { name: "Infinite sum", statement: "$S_\\infty = \\frac{a_1}{1 - r}$" },
        ],
        workedExample: {
          problem: "Does $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ converge? Find its sum.",
          solution: "$r = \\frac{1}{2}$, $|r| < 1$ — converges. $S_\\infty = \\frac{1}{1 - 1/2} = 2$.",
        },
      },
      questions: [
        {
          id: "m12-u3-infinite-series-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An infinite geometric series converges when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$r > 1$"
                    },
                    {
                              "id": "b",
                              "text": "$|r| < 1$"
                    },
                    {
                              "id": "c",
                              "text": "$r = 1$"
                    },
                    {
                              "id": "d",
                              "text": "always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Convergence",
                              "statement": "Terms must shrink: $|r| < 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converges iff $|r| < 1$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** $|r| < 1$",
          "commonErrors": [
                    "Thinking any geometric series has a finite sum."
          ]
},
        },
        {
          id: "m12-u3-infinite-series-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sum of $4 + 2 + 1 + \\frac{1}{2} + \\cdots$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$8$"
                    },
                    {
                              "id": "b",
                              "text": "$6$"
                    },
                    {
                              "id": "c",
                              "text": "$4$"
                    },
                    {
                              "id": "d",
                              "text": "diverges"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Infinite sum",
                              "statement": "$r = \\frac{1}{2}$; $S = \\frac{4}{1/2} = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$S_\\infty = \\frac{4}{0.5} = 8$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct sum.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $8$",
          "commonErrors": [
                    "Using $a_1 \\cdot r$ as first term."
          ]
},
        },
        {
          id: "m12-u3-infinite-series-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Does the series $1 + \\frac{3}{2} + \\frac{9}{4} + \\cdots$ converge? Enter $1$ for yes, $0$ for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Converges?",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "test",
                              "name": "Ratio",
                              "statement": "$r = \\frac{3}{2}$; $|r| > 1$ — diverges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$r = 1.5 > 1$: terms grow, series diverges.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "No — diverges",
          "commonErrors": [
                    "Applying the sum formula without checking $|r|$."
          ]
},
        },
        {
          id: "m12-u3-infinite-series-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ball dropped from $81$ cm rebounds to $\\frac{2}{3}$ of its previous height each bounce. Find the total distance traveled (up and down) until it stops.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Two series",
                              "statement": "Fall $81$ once; each subsequent up+down pair is $2 \\cdot 81(\\frac{2}{3})^n$."
                    },
                    {
                              "kind": "method",
                              "name": "Sum",
                              "statement": "Total $= 81 + 2 \\cdot \\frac{81 \\cdot \\frac{2}{3}}{1 - \\frac{2}{3}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First fall: $81$ cm. Bounce heights form geometric series with $a = 54$, $r = \\frac{2}{3}$; each bounce contributes up $+$ down $= 2 \\times$ height.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Total bounce travel $= 2 \\times \\frac{54}{1 - 2/3} = 2 \\times 162 = 324$ cm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Grand total $= 81 + 324 = 405$ cm.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$405$ cm",
          "commonErrors": [
                    "Counting only upward travel or forgetting the initial drop."
          ]
},
        },
      ],
    },
  ],
};
