import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m11-u3-lesson-3-3",
  code: "3-3",
  title: "Rational Functions and Asymptotes",
  goal: "I CAN graph rational functions and identify their asymptotes and discontinuities.",
  standards: ["F-IF.7", "F-BF.3", "A-APR.6"],
  vocabulary: [
    { term: "Rational function", definition: "A ratio of polynomials $f(x) = \\frac{P(x)}{Q(x)}$ with $Q(x) \\ne 0$." },
    { term: "Vertical asymptote", definition: "A vertical line $x = c$ where the denominator is zero (and numerator isn't)." },
    { term: "Horizontal asymptote", definition: "The end behavior line: compare degrees of numerator and denominator." },
    { term: "Hole / removable discontinuity", definition: "A missing point where numerator and denominator share a factor." },
    { term: "Degree comparison", definition: "$\\deg P < \\deg Q$: asymptote $y=0$; equal: ratio of leading coefficients; $\\deg P > \\deg Q$: no horizontal asymptote." },
  ],
  concepts: [
    {
      id: "m11-u3-rational-functions",
      title: "Rational functions",
      skill: "Find asymptotes, holes and end behavior of $\\frac{P(x)}{Q(x)}$.",
      lesson: {
        sections: [
          {
            heading: "Vertical asymptotes and holes",
            body: "Factor numerator and denominator. Zeros of the denominator that do **not** cancel give **vertical asymptotes**. Zeros that cancel with numerator factors give **holes** — removable points, not asymptotes. For $\\frac{x^2-4}{x-2}$, the $(x-2)$ cancels leaving $x+2$ with a hole at $x = 2$.",
          },
          {
            heading: "Horizontal asymptotes",
            body: "Compare degrees: numerator degree **less** → $y = 0$; **equal** → $y = \\frac{\\text{leading coeff of } P}{\\text{leading coeff of } Q}$; **greater** → no horizontal asymptote (end behavior follows a polynomial/oblique trend).",
          },
        ],
        keyFormulas: [
          { name: "Vertical asymptote", statement: "Uncancelled denominator zeros" },
          { name: "Horizontal asymptote", statement: "$\\deg P < \\deg Q$: $y=0$; equal: ratio of leading coefficients" },
          { name: "Hole", statement: "Cancelled common factor — point removed" },
        ],
        workedExample: {
          problem: "Find the asymptotes of $f(x) = \\frac{3x^2 + 1}{x^2 - 9}$.",
          solution: "Vertical: $x = \\pm 3$ (denominator zeros, no cancellation). Horizontal: equal degrees, so $y = \\frac{3}{1} = 3$.",
        },
      },
      questions: [
        {
          id: "m11-u3-rational-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The function $f(x) = \\frac{5}{x - 2}$ has a vertical asymptote at ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x = 2$"
                    },
                    {
                              "id": "b",
                              "text": "$x = -2$"
                    },
                    {
                              "id": "c",
                              "text": "$y = 2$"
                    },
                    {
                              "id": "d",
                              "text": "$x = 0$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vertical asymptote",
                              "statement": "Denominator zero with no cancellation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x - 2 = 0$ gives $x = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $x = 2$",
          "commonErrors": [
                    "Reporting $y = 2$ — asymptotes are named by their line."
          ]
},
        },
        {
          id: "m11-u3-rational-functions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the horizontal asymptote of $f(x) = \\frac{2x^2 - 1}{x^2 + 5}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$y = 0$"
                    },
                    {
                              "id": "b",
                              "text": "$y = 2$"
                    },
                    {
                              "id": "c",
                              "text": "$y = \\frac{2}{5}$"
                    },
                    {
                              "id": "d",
                              "text": "$y = x$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Equal degrees",
                              "statement": "Asymptote = ratio of leading coefficients $= \\frac{2}{1} = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Degrees both $2$: $y = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct asymptote.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $y = 2$",
          "commonErrors": [
                    "Using constant terms instead of leading coefficients."
          ]
},
        },
        {
          id: "m11-u3-rational-functions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Does $f(x) = \\frac{x^2 - 9}{x - 3}$ have a vertical asymptote? If it has a hole, at what $x$-value? Enter the $x$-value of the hole, or $0$ if there is an asymptote instead.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$-value",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Cancel factors",
                              "statement": "$x^2 - 9 = (x-3)(x+3)$ cancels with denominator — hole at $x = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hole at $x = 3$; simplified function is $x + 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 3$ (hole)",
          "commonErrors": [
                    "Calling $x = 3$ a vertical asymptote — it cancels."
          ]
},
        },
        {
          id: "m11-u3-rational-functions-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Analyze $f(x) = \\frac{x + 1}{x^2 - 4}$. State all vertical asymptotes, the horizontal asymptote, and the $x$-intercept.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Factor denominator",
                              "statement": "$x^2 - 4 = (x-2)(x+2)$ → asymptotes at $x = \\pm 2$."
                    },
                    {
                              "kind": "rule",
                              "name": "Degrees",
                              "statement": "Numerator degree $1 <$ denominator $2$ → $y = 0$."
                    },
                    {
                              "kind": "method",
                              "name": "Intercept",
                              "statement": "$x$-intercept where numerator $= 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vertical asymptotes: $x = 2$ and $x = -2$ (no cancellation).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Horizontal asymptote $y = 0$ since $\\deg P < \\deg Q$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$x$-intercept at $x = -1$ (numerator zero, denominator nonzero).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "VA: $x=\\pm2$; HA: $y=0$; $x$-intercept $-1$",
          "commonErrors": [
                    "Missing that numerator degree $1$ still gives $y=0$ asymptote."
          ]
},
        },
      ],
    },
  ],
};
