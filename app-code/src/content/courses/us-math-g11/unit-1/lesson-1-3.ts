import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m11-u1-lesson-1-3",
  code: "1-3",
  title: "Remainder and Factor Theorems",
  goal: "I CAN use synthetic division and the factor theorem to analyze polynomials.",
  standards: ["A-APR.6", "A-APR.7"],
  vocabulary: [
    { term: "Remainder theorem", definition: "The remainder of $f(x) \\div (x - c)$ equals $f(c)$." },
    { term: "Factor theorem", definition: "$f(c) = 0$ if and only if $(x - c)$ is a factor of $f(x)$." },
    { term: "Synthetic division", definition: "A shortcut for dividing a polynomial by $(x - c)$ using only coefficients." },
    { term: "Root / zero", definition: "A value $c$ where $f(c) = 0$; also an $x$-intercept of the graph." },
    { term: "Rational root theorem", definition: "Possible rational roots are $\\pm\\frac{\\text{factors of constant}}{\\text{factors of leading coefficient}}$." },
  ],
  concepts: [
    {
      id: "m11-u1-remainder-factor-theorems",
      title: "Remainder and factor theorems",
      skill: "Evaluate polynomials efficiently and test for factors.",
      lesson: {
        sections: [
          {
            heading: "The theorems",
            body: "Dividing $f(x)$ by $(x - c)$ leaves remainder $f(c)$ — the **remainder theorem**. If that remainder is $0$, then $(x - c)$ is a factor — the **factor theorem**. Together they link evaluation, roots and factors.",
          },
          {
            heading: "Synthetic division",
            body: "For divisor $(x - c)$, write coefficients in order (include zeros), bring down the first, multiply by $c$, add, repeat. The last number is the remainder; the rest is the quotient's coefficients. It is far faster than long division.",
          },
        ],
        keyFormulas: [
          { name: "Remainder", statement: "$f(x) \\div (x-c)$ has remainder $f(c)$" },
          { name: "Factor", statement: "$(x - c)$ is a factor $\\iff f(c) = 0$" },
          { name: "Synthetic division", statement: "Coefficients only; last entry = remainder" },
        ],
        workedExample: {
          problem: "Is $(x - 2)$ a factor of $f(x) = x^3 - 4x^2 + x + 6$?",
          solution: "$f(2) = 8 - 16 + 2 + 6 = 0$. Yes — $(x - 2)$ is a factor.",
        },
      },
      questions: [
        {
          id: "m11-u1-remainder-factor-theorems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The remainder when $f(x)$ is divided by $(x - 3)$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$f(3)$"
                    },
                    {
                              "id": "b",
                              "text": "$f(-3)$"
                    },
                    {
                              "id": "c",
                              "text": "$3$"
                    },
                    {
                              "id": "d",
                              "text": "$f(0)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Remainder",
                              "statement": "Remainder equals $f(c)$ for divisor $(x-c)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$c = 3$, so remainder $= f(3)$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $f(3)$",
          "commonErrors": [
                    "Using $f(-3)$ — the divisor is $(x - 3)$, so $c = 3$."
          ]
},
        },
        {
          id: "m11-u1-remainder-factor-theorems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(4) = 0$, which is true?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(x-4)$ is a factor of $f$"
                    },
                    {
                              "id": "b",
                              "text": "$(x+4)$ is a factor"
                    },
                    {
                              "id": "c",
                              "text": "$4$ is the degree"
                    },
                    {
                              "id": "d",
                              "text": "Nothing can be concluded"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Factor",
                              "statement": "$f(c) = 0 \\iff (x-c)$ factor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(4) = 0$ means $(x - 4)$ divides $f$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct conclusion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $(x-4)$ is a factor",
          "commonErrors": [
                    "Sign slip: $f(4)=0$ gives $(x-4)$, not $(x+4)$."
          ]
},
        },
        {
          id: "m11-u1-remainder-factor-theorems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use the remainder theorem: what is the remainder when $x^3 - 2x^2 + 5x - 1$ is divided by $(x - 1)$?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Remainder",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Evaluate",
                              "statement": "$f(1) = 1 - 2 + 5 - 1 = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(1) = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct remainder.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Evaluating $f(-1)$ instead."
          ]
},
        },
        {
          id: "m11-u1-remainder-factor-theorems-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Use synthetic division to divide $x^3 - 4x^2 + x + 6$ by $(x - 2)$. State the quotient and remainder.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Synthetic division",
                              "statement": "Coefficients $1, -4, 1, 6$ with $c = 2$."
                    },
                    {
                              "kind": "theorem",
                              "name": "Remainder",
                              "statement": "Last entry is $f(2)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bring down $1$; $\\times 2 = 2$, add to $-4$ gives $-2$; $\\times 2 = -4$, add to $1$ gives $-3$; $\\times 2 = -6$, add to $6$ gives $0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Quotient coefficients $1, -2, -3$ → $x^2 - 2x - 3$; remainder $0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: $(x-2)(x^2-2x-3) = x^3 -4x^2 +x +6$ ✓.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Quotient $x^2 - 2x - 3$, remainder $0$",
          "commonErrors": [
                    "Writing quotient degree equal to dividend degree — drop the last entry."
          ]
},
        },
      ],
    },
  ],
};
