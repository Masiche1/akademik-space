import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apst-u3-lesson-3-2",
  code: "3-2",
  title: "Significance Tests",
  goal: "I CAN carry out a significance test and interpret p-values.",
  standards: ["INF-2"],
  vocabulary: [
    { term: "Null hypothesis", definition: "$H_0$: the statement of no effect, e.g., $p = p_0$." },
    { term: "Alternative hypothesis", definition: "$H_a$: what we suspect, e.g., $p > p_0$, $p < p_0$, or $p \\ne p_0$." },
    { term: "Test statistic", definition: "Standardized result: $z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$." },
    { term: "P-value", definition: "Probability of a result at least as extreme as observed, assuming $H_0$ is true." },
    { term: "Significance level", definition: "$\\alpha$ (usually $0.05$): reject $H_0$ if p-value $< \\alpha$." },
  ],
  concepts: [
    {
      id: "apst-u3-significance-tests",
      title: "Significance tests",
      skill: "Perform one- and two-proportion z-tests and interpret results.",
      lesson: {
        sections: [
          {
            heading: "Test structure",
            body: "State $H_0$ and $H_a$, check conditions, compute the test statistic using the **null** proportion $p_0$ in the SE, find the p-value, and compare to $\\alpha$. Reject $H_0$ only when the p-value is small enough — never \"accept\" $H_0$, only fail to reject it.",
          },
          {
            heading: "P-value meaning",
            body: "The p-value answers: \"If $H_0$ were true, how surprising is our data?\" A p-value of $0.03$ means results this extreme would occur $3\\%$ of the time by chance alone under $H_0$ — evidence against $H_0$ at the $5\\%$ level.",
          },
        ],
        keyFormulas: [
          { name: "z-test statistic", statement: "$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n}}}$" },
          { name: "Decision rule", statement: "Reject $H_0$ if p-value $< \\alpha$" },
        ],
        workedExample: {
          problem: "$H_0: p = 0.5$ vs $H_a: p > 0.5$; $\\hat{p} = 0.56$, $n = 400$. Test at $\\alpha = 0.05$.",
          solution: "$z = \\frac{0.56 - 0.5}{\\sqrt{0.25/400}} = \\frac{0.06}{0.025} = 2.4$. P-value $= P(Z > 2.4) \\approx 0.0082 < 0.05$ — reject $H_0$; significant evidence $p > 0.5$.",
        },
      },
      questions: [
        {
          id: "apst-u3-significance-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The p-value is the probability of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$H_0$ being true"
                    },
                    {
                              "id": "b",
                              "text": "data at least as extreme as observed, given $H_0$"
                    },
                    {
                              "id": "c",
                              "text": "making a Type I error"
                    },
                    {
                              "id": "d",
                              "text": "$H_a$ being true"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "P-value",
                              "statement": "Surprise level under the null."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "P-value conditions on $H_0$ being true and measures extremeness of the data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking p-value is the probability $H_0$ is true."
          ]
},
        },
        {
          id: "apst-u3-significance-tests-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If p-value $= 0.03$ and $\\alpha = 0.05$, the decision is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fail to reject $H_0$"
                    },
                    {
                              "id": "b",
                              "text": "Reject $H_0$"
                    },
                    {
                              "id": "c",
                              "text": "Accept $H_a$ with certainty"
                    },
                    {
                              "id": "d",
                              "text": "Retest with larger $\\alpha$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Decision",
                              "statement": "p-value $< \\alpha$ means reject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$0.03 < 0.05$, so we reject $H_0$ — statistically significant at the $5\\%$ level.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Reject $H_0$",
          "commonErrors": [
                    "Saying \"accept $H_a$\" — we only reject or fail to reject."
          ]
},
        },
        {
          id: "apst-u3-significance-tests-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "$H_0: p = 0.5$ vs $H_a: p < 0.5$; $\\hat{p} = 0.44$, $n = 500$. Compute the z-statistic. Round to 2 decimals.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$z$",
                              "answer": -2.68,
                              "tolerance": 0.05
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "z-test",
                              "statement": "$z = \\frac{0.44 - 0.5}{\\sqrt{0.25/500}} = \\frac{-0.06}{0.0224}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$z \\approx -2.68$ — about $2.7$ SDs below the null.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$z = -2.68$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-2.68$",
          "commonErrors": [
                    "Using $\\hat{p}$ in the SE instead of $p_0$."
          ]
},
        },
        {
          id: "apst-u3-significance-tests-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A drug trial: $n = 200$ patients, $38$ recover vs expected $30$ under standard care ($p_0 = 0.15$). Test $H_0: p = 0.15$ vs $H_a: p > 0.15$ at $\\alpha = 0.05$. State conclusions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "z-test",
                              "statement": "$\\hat{p} = 0.19$; $z = \\frac{0.19 - 0.15}{\\sqrt{0.15 \\times 0.85/200}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$SE = \\sqrt{0.0006375} \\approx 0.0252$; $z = \\frac{0.04}{0.0252} \\approx 1.59$; p-value $\\approx 0.056$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "P-value $0.056 > 0.05$ — fail to reject $H_0$ at the $5\\%$ level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conclusion: insufficient evidence the drug beats standard care, though result is marginal.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Fail to reject $H_0$ (p $\\approx 0.056$)",
          "commonErrors": [
                    "Rounding the p-value down to $0.05$ and rejecting prematurely."
          ]
},
        },
      ],
    },
  ],
};
