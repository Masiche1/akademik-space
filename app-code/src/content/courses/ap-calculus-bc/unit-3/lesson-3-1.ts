import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apcbc-u3-lesson-3-1",
  code: "3-1",
  title: "Integration Techniques",
  goal: "I CAN integrate using substitution, parts, and partial fractions.",
  standards: ["INT-2"],
  vocabulary: [
    { term: "Integration by substitution", definition: "Reverse chain rule: $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$ with $u = g(x)$." },
    { term: "Integration by parts", definition: "$\\int u\\,dv = uv - \\int v\\,du$ — the product rule in reverse." },
    { term: "LIATE", definition: "Choosing $u$ in parts: Log, Inverse trig, Algebraic, Trig, Exponential (earlier = $u$)." },
    { term: "Partial fractions", definition: "Decompose $\\frac{P(x)}{(x-a)(x-b)}$ into simpler fractions to integrate." },
    { term: "Trigonometric integrals", definition: "Use identities like $\\sin^2 x = \\frac{1-\\cos 2x}{2}$ to simplify powers." },
  ],
  concepts: [
    {
      id: "apcbc-u3-integration-techniques",
      title: "Advanced integration",
      skill: "Select and apply substitution, parts, and partial fractions.",
      lesson: {
        sections: [
          {
            heading: "Integration by parts",
            body: "From the product rule: $\\int u\\,dv = uv - \\int v\\,du$. Choose $u$ by LIATE (Log before Inverse trig before Algebraic before Trig before Exponential). For $\\int x e^x\\,dx$: $u = x$, $dv = e^x dx$, giving $xe^x - e^x + C$.",
          },
          {
            heading: "Partial fractions",
            body: "For rational functions with factorable denominators, split $\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$ and solve for $A, B$. Each piece integrates to a logarithm. Improper integrals with infinite bounds are evaluated as limits.",
          },
        ],
        keyFormulas: [
          { name: "By parts", statement: "$\\int u\\,dv = uv - \\int v\\,du$" },
          { name: "Partial fractions", statement: "$\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$" },
        ],
        workedExample: {
          problem: "Evaluate $\\int x \\cos x\\,dx$.",
          solution: "Parts with $u = x$, $dv = \\cos x\\,dx$: $du = dx$, $v = \\sin x$. Result: $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.",
        },
      },
      questions: [
        {
          id: "apcbc-u3-integration-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $\\int x e^x\\,dx$ by parts, the better choice for $u$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$e^x$"
                    },
                    {
                              "id": "b",
                              "text": "$x$"
                    },
                    {
                              "id": "c",
                              "text": "either works equally"
                    },
                    {
                              "id": "d",
                              "text": "neither — use substitution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "LIATE",
                              "statement": "Algebraic ($x$) comes before Exponential ($e^x$) — $u = x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LIATE picks $u = x$ since algebraic precedes exponential.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$u = x$",
          "commonErrors": [
                    "Choosing $u = e^x$ leads to a circular integral."
          ]
},
        },
        {
          id: "apcbc-u3-integration-techniques-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\int \\frac{dx}{x^2 - 1}$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\ln|x-1| - \\ln|x+1| + C$"
                    },
                    {
                              "id": "b",
                              "text": "$\\ln|x^2 - 1| + C$"
                    },
                    {
                              "id": "c",
                              "text": "$-\\frac{1}{x} + C$"
                    },
                    {
                              "id": "d",
                              "text": "$\\arctan x + C$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Partial fractions",
                              "statement": "$\\frac{1}{(x-1)(x+1)} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integrates to $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$ — equivalent to (a) up to constant.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$",
          "commonErrors": [
                    "Forgetting partial fractions and trying $u$-substitution directly."
          ]
},
        },
        {
          id: "apcbc-u3-integration-techniques-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\int_0^1 x e^x\\,dx$. Enter the value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Integral",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Parts + evaluate",
                              "statement": "$\\int x e^x = xe^x - e^x = e^x(x-1)$; evaluate $0$ to $1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F(1) = e(0) = 0$; $F(0) = 1(-1) = -1$; $0 - (-1) = 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Value $1$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1$",
          "commonErrors": [
                    "Sign error in $F(b) - F(a)$."
          ]
},
        },
        {
          id: "apcbc-u3-integration-techniques-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Determine whether $\\int_1^\\infty \\frac{dx}{x^2}$ converges, and if so find its value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Improper integral",
                              "statement": "Evaluate as $\\lim_{b\\to\\infty}\\int_1^b$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\int_1^b x^{-2}\\,dx = [-x^{-1}]_1^b = -\\frac{1}{b} + 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\lim_{b\\to\\infty}(1 - \\frac{1}{b}) = 1$ — converges to $1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Convergent with value $1$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1$ (converges)",
          "commonErrors": [
                    "Treating the infinite bound as a regular number."
          ]
},
        },
      ],
    },
  ],
};
