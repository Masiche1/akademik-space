import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apcab-u1-lesson-1-2",
  code: "1-2",
  title: "Limit Laws and Algebraic Techniques",
  goal: "I CAN apply limit laws and evaluate limits algebraically.",
  standards: ["LIM-2"],
  vocabulary: [
    { term: "Sum law", definition: "$\\lim(f + g) = \\lim f + \\lim g$ when both limits exist." },
    { term: "Product law", definition: "$\\lim(f \\cdot g) = \\lim f \\cdot \\lim g$." },
    { term: "Quotient law", definition: "$\\lim\\frac{f}{g} = \\frac{\\lim f}{\\lim g}$ provided $\\lim g \\ne 0$." },
    { term: "Squeeze theorem", definition: "If $h(x) \\le f(x) \\le k(x)$ and $\\lim h = \\lim k = L$, then $\\lim f = L$." },
    { term: "Standard trig limit", definition: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$." },
  ],
  concepts: [
    {
      id: "apcab-u1-limit-laws",
      title: "Evaluating limits algebraically",
      skill: "Use limit laws and algebraic manipulation to find limits that substitution cannot.",
      lesson: {
        sections: [
          {
            heading: "Limit laws",
            body: "When the individual limits exist, limits respect sums, differences, products, quotients (with nonzero denominator) and constant multiples. These laws justify splitting complicated expressions into simpler pieces.",
          },
          {
            heading: "Beyond $\\frac{0}{0}$",
            body: "For $\\frac{0}{0}$ forms: factor polynomials, cancel common factors, rationalize with conjugates, or combine fractions over a common denominator. For $\\frac{\\sin x}{x}$ as $x \\to 0$, the standard limit is $1$.",
          },
        ],
        keyFormulas: [
          { name: "Standard limit", statement: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$" },
          { name: "Squeeze example", statement: "$-x^2 \\le x\\sin\\frac{1}{x} \\le x^2 \\Rightarrow \\lim_{x \\to 0} x\\sin\\frac{1}{x} = 0$" },
        ],
        workedExample: {
          problem: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$.",
          solution: "Rewrite as $3 \\cdot \\frac{\\sin 3x}{3x}$. As $x \\to 0$, $3x \\to 0$ and $\\frac{\\sin 3x}{3x} \\to 1$, so the limit is $3 \\cdot 1 = 3$.",
        },
      },
      questions: [
        {
          id: "apcab-u1-limit-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\lim_{x \\to 5} (3x + 2)$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$17$"
                    },
                    {
                              "id": "b",
                              "text": "$2$"
                    },
                    {
                              "id": "c",
                              "text": "$15$"
                    },
                    {
                              "id": "d",
                              "text": "Does not exist"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Direct substitution",
                              "statement": "The function is continuous, so substitute $x = 5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3(5) + 2 = 17$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$17$",
          "commonErrors": [
                    "Adding instead of substituting into the whole expression."
          ]
},
        },
        {
          id: "apcab-u1-limit-laws-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin 5x}{x}$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$1$"
                    },
                    {
                              "id": "b",
                              "text": "$5$"
                    },
                    {
                              "id": "c",
                              "text": "$0$"
                    },
                    {
                              "id": "d",
                              "text": "Does not exist"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Standard limit",
                              "statement": "$\\frac{\\sin 5x}{x} = 5 \\cdot \\frac{\\sin 5x}{5x} \\to 5 \\cdot 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The limit is $5$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Forgetting the factor of $5$ from the coefficient."
          ]
},
        },
        {
          id: "apcab-u1-limit-laws-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x \\to \\infty} \\frac{4x^2 + x}{2x^2 - 3}$. Enter the limit value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Limit",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Highest-degree terms",
                              "statement": "Divide numerator and denominator by $x^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{4 + \\frac{1}{x}}{2 - \\frac{3}{x^2}} \\to \\frac{4}{2} = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limit value $2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Comparing wrong-degree terms or mishandling signs."
          ]
},
        },
        {
          id: "apcab-u1-limit-laws-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use the squeeze theorem to evaluate $\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x}$. State the bounding functions and the limit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Squeeze theorem",
                              "statement": "Bound $f$ between two functions with the same limit."
                    },
                    {
                              "kind": "concept",
                              "name": "Bound on sine",
                              "statement": "$-1 \\le \\sin\\theta \\le 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Since $-1 \\le \\sin\\frac{1}{x} \\le 1$, multiply by $x^2 \\ge 0$: $-x^2 \\le x^2\\sin\\frac{1}{x} \\le x^2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both bounds $\\to 0$, so by the squeeze theorem the limit is $0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct bounding functions and conclusion stated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Bounding with functions whose limits differ."
          ]
},
        },
      ],
    },
  ],
};
