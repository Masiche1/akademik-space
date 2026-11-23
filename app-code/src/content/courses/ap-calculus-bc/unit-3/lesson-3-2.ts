import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apcbc-u3-lesson-3-2",
  code: "3-2",
  title: "Improper Integrals and Arc Length",
  goal: "I CAN evaluate improper integrals and compute arc length.",
  standards: ["INT-3"],
  vocabulary: [
    { term: "Type I improper", definition: "Infinite limit of integration: $\\int_a^\\infty f\\,dx = \\lim_{b\\to\\infty}\\int_a^b f\\,dx$." },
    { term: "Type II improper", definition: "Unbounded integrand near a point: $\\int_a^b \\frac{dx}{x}$ type singularities." },
    { term: "Convergence", definition: "Improper integral converges if the limit is finite; diverges if infinite or undefined." },
    { term: "Arc length", definition: "$L = \\int_a^b \\sqrt{1 + (f'(x))^2}\\,dx$ for $y = f(x)$." },
    { term: "Arc length parametric", definition: "$L = \\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$." },
  ],
  concepts: [
    {
      id: "apcbc-u3-improper-arc",
      title: "Improper integrals and arc length",
      skill: "Handle infinite/singular integrals and compute curve lengths.",
      lesson: {
        sections: [
          {
            heading: "Improper integrals",
            body: "Replace the problematic bound with a variable limit and take the limit. $\\int_1^\\infty \\frac{dx}{x^p}$ converges iff $p > 1$ (same as $p$-series). $\\int_0^1 \\frac{dx}{x^p}$ converges iff $p < 1$ — the inequality flips because the singularity is at the lower end.",
          },
          {
            heading: "Arc length",
            body: "The length of $y = f(x)$ from $a$ to $b$ is $L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$ — each tiny segment is the hypotenuse of a right triangle with legs $dx$ and $dy = f'dx$. For parametric curves use $\\sqrt{x'^2 + y'^2}\\,dt$ instead.",
          },
        ],
        keyFormulas: [
          { name: "Improper (infinite)", statement: "$\\int_a^\\infty f\\,dx = \\lim_{b\\to\\infty} \\int_a^b f\\,dx$" },
          { name: "Arc length", statement: "$L = \\int_a^b \\sqrt{1 + (f')^2}\\,dx$" },
        ],
        workedExample: {
          problem: "Find the length of $y = \\frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$.",
          solution: "$y' = x^{1/2}$, so $\\sqrt{1 + x}$. $L = \\int_0^3 \\sqrt{1+x}\\,dx = \\left[\\frac{2}{3}(1+x)^{3/2}\\right]_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$.",
        },
      },
      questions: [
        {
          id: "apcbc-u3-improper-arc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\int_0^1 \\frac{dx}{\\sqrt{x}}$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divergent"
                    },
                    {
                              "id": "b",
                              "text": "convergent, value $2$"
                    },
                    {
                              "id": "c",
                              "text": "convergent, value $1$"
                    },
                    {
                              "id": "d",
                              "text": "undefined"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Type II improper",
                              "statement": "$\\int_0^1 x^{-1/2}dx = [2x^{1/2}]_0^1 = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antiderivative $2\\sqrt{x}$; $2(1) - 2(0) = 2$ — converges to $2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Converges to $2$",
          "commonErrors": [
                    "Thinking $x^{-1/2}$ diverges like $1/x$ — the exponent $-\\frac12 > -1$ saves it."
          ]
},
        },
        {
          id: "apcbc-u3-improper-arc-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The arc length integrand for $y = f(x)$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\sqrt{1 + (f')^2}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\sqrt{1 + f^2}$"
                    },
                    {
                              "id": "c",
                              "text": "$1 + f'$"
                    },
                    {
                              "id": "d",
                              "text": "$\\sqrt{(f')^2}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Arc length",
                              "statement": "Hypotenuse of $dx$-$dy$ triangle: $\\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2}\\,dx$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$L = \\int \\sqrt{1 + (f')^2}\\,dx$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\sqrt{1 + (f')^2}$",
          "commonErrors": [
                    "Using $f$ instead of $f'$ inside the radical."
          ]
},
        },
        {
          id: "apcbc-u3-improper-arc-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_1^\\infty \\frac{dx}{x^3}$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Integral",
                              "answer": 0.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Improper integral",
                              "statement": "$\\int_1^b x^{-3}dx = \\left[-\\frac{1}{2}x^{-2}\\right]_1^b$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$= -\\frac{1}{2b^2} + \\frac{1}{2} \\to \\frac{1}{2}$ as $b \\to \\infty$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Value $0.5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.5$",
          "commonErrors": [
                    "Sign error in the antiderivative of $x^{-3}$."
          ]
},
        },
        {
          id: "apcbc-u3-improper-arc-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Set up and evaluate the arc length of $y = x^2$ from $x = 0$ to $x = 1$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Arc length",
                              "statement": "$y' = 2x$, so integrand $\\sqrt{1 + 4x^2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$L = \\int_0^1 \\sqrt{1 + 4x^2}\\,dx$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Using $u = 2x$: $L = \\frac{1}{2}\\int_0^2 \\sqrt{1+u^2}\\,du = \\frac{1}{2}\\left[\\frac{u}{2}\\sqrt{1+u^2} + \\frac{1}{2}\\ln|u + \\sqrt{1+u^2}|\\right]_0^2 \\approx \\frac{1}{2}(\\sqrt{5} + \\frac{1}{2}\\ln(2+\\sqrt{5})) \\approx 1.479$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Arc length $\\approx 1.479$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$L \\approx 1.479$",
          "commonErrors": [
                    "Forgetting the $\\frac12$ from the $u$-substitution."
          ]
},
        },
      ],
    },
  ],
};
