import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apst-u3-lesson-3-1",
  code: "3-1",
  title: "Confidence Intervals",
  goal: "I CAN construct and interpret confidence intervals for proportions and means.",
  standards: ["INF-1"],
  vocabulary: [
    { term: "Confidence interval", definition: "A range of plausible values for a parameter, e.g., $\\hat{p} \\pm z^* SE$." },
    { term: "Confidence level", definition: "The long-run success rate of the method, e.g., $95\\%$." },
    { term: "Margin of error", definition: "Half-width of the interval: $z^* \\times SE$." },
    { term: "Interpretation", definition: "We are $95\\%$ confident the interval captures the parameter — NOT that the parameter has a $95\\%$ chance of being in it." },
    { term: "Conditions", definition: "Random sample, large enough $n$ ($np \\ge 10$, $n(1-p) \\ge 10$ for proportions)." },
  ],
  concepts: [
    {
      id: "apst-u3-confidence-intervals",
      title: "Confidence intervals",
      skill: "Build and interpret intervals for proportions and means.",
      lesson: {
        sections: [
          {
            heading: "Interval structure",
            body: "A $95\\%$ CI for $p$ is $\\hat{p} \\pm 1.96\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$. The margin of error shrinks as $\\sqrt{n}$ grows — quadrupling $n$ halves the error. For means, use $\\bar{x} \\pm z^* \\frac{s}{\\sqrt{n}}$ when $\\sigma$ is unknown (or $t^*$ for small samples).",
          },
          {
            heading: "Interpretation",
            body: "Say: \"We are $95\\%$ confident the interval from $a$ to $b$ captures the true proportion/mean.\" Never say the parameter is \"$95\\%$ likely\" to be in a fixed interval — the parameter is fixed; the interval is what varies across samples.",
          },
        ],
        keyFormulas: [
          { name: "Proportion CI", statement: "$\\hat{p} \\pm z^*\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$" },
          { name: "Mean CI", statement: "$\\bar{x} \\pm z^*\\frac{s}{\\sqrt{n}}$ ($\\sigma$ unknown, large $n$)" },
        ],
        workedExample: {
          problem: "$\\hat{p} = 0.6$, $n = 400$. $95\\%$ CI?",
          solution: "$SE = \\sqrt{\\frac{0.6 \\times 0.4}{400}} = \\sqrt{0.0006} \\approx 0.0245$. CI: $0.6 \\pm 1.96(0.0245) = 0.6 \\pm 0.048$, i.e., $(0.552, 0.648)$.",
        },
      },
      questions: [
        {
          id: "apst-u3-confidence-intervals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $95\\%$ CI for $p$ is $(0.45, 0.55)$. The correct interpretation is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$p$ has a $95\\%$ chance of being between $0.45$ and $0.55$"
                    },
                    {
                              "id": "b",
                              "text": "We are $95\\%$ confident the interval captures $p$"
                    },
                    {
                              "id": "c",
                              "text": "$95\\%$ of samples give this interval"
                    },
                    {
                              "id": "d",
                              "text": "The margin of error is $0.55$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "CI interpretation",
                              "statement": "Confidence is in the method, not the parameter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The parameter is fixed; $95\\%$ of intervals from repeated sampling would capture it.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "The classic misinterpretation — parameter probability vs method confidence."
          ]
},
        },
        {
          id: "apst-u3-confidence-intervals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To halve the margin of error of a proportion CI, the sample size must ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "double"
                    },
                    {
                              "id": "b",
                              "text": "quadruple"
                    },
                    {
                              "id": "c",
                              "text": "stay the same"
                    },
                    {
                              "id": "d",
                              "text": "halve"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "MOE scaling",
                              "statement": "MOE $\\propto \\frac{1}{\\sqrt{n}}$; need $\\sqrt{n}$ to double."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Halving MOE requires $\\sqrt{n}$ to double, i.e., $n \\times 4$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Quadruple",
          "commonErrors": [
                    "Thinking MOE is inversely proportional to $n$."
          ]
},
        },
        {
          id: "apst-u3-confidence-intervals-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\hat{p} = 0.5$, $n = 100$. Compute the margin of error for a $95\\%$ CI ($z^* = 1.96$). Round to 3 decimals.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "MOE",
                              "answer": 0.098,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "MOE",
                              "statement": "$1.96 \\times \\sqrt{\\frac{0.25}{100}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$SE = \\sqrt{0.0025} = 0.05$; MOE $= 1.96 \\times 0.05 = 0.098$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MOE $\\approx 0.098$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.098$",
          "commonErrors": [
                    "Using $z^* = 2$ sloppily or forgetting the square root."
          ]
},
        },
        {
          id: "apst-u3-confidence-intervals-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A poll of $n = 500$ voters finds $\\hat{p} = 0.52$ supporting a measure. (a) Construct the $95\\%$ CI. (b) Does it suggest majority support? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "CI",
                              "statement": "$SE = \\sqrt{\\frac{0.52 \\times 0.48}{500}}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) $SE \\approx \\sqrt{0.000499} \\approx 0.0223$; CI $= 0.52 \\pm 1.96(0.0223) = 0.52 \\pm 0.044$, i.e., $(0.476, 0.564)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) The interval includes values below $0.5$ — it does NOT provide convincing evidence of majority support at $95\\%$ confidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct interval and cautious interpretation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "CI $(0.476, 0.564)$ — inconclusive on majority",
          "commonErrors": [
                    "Claiming majority support because $\\hat{p} > 0.5$ without checking the interval."
          ]
},
        },
      ],
    },
  ],
};
