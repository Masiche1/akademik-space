import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apcab-u2-lesson-2-2",
  code: "2-2",
  title: "Basic Differentiation Rules",
  goal: "I CAN differentiate polynomial, product, quotient, and trigonometric functions.",
  standards: ["DER-2"],
  vocabulary: [
    { term: "Constant rule", definition: "$\\frac{d}{dx}(c) = 0$." },
    { term: "Power rule", definition: "$\\frac{d}{dx} x^n = nx^{n-1}$." },
    { term: "Sum/difference rule", definition: "Derivatives add and subtract term by term." },
    { term: "Product rule", definition: "$(fg)' = f'g + fg'$." },
    { term: "Quotient rule", definition: "$\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$." },
    { term: "Trig derivatives", definition: "$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx}\\cos x = -\\sin x$, $\\frac{d}{dx}\\tan x = \\sec^2 x$." },
  ],
  concepts: [
    {
      id: "apcab-u2-derivative-rules",
      title: "Differentiation rules",
      skill: "Apply power, product, quotient and trig rules fluently.",
      lesson: {
        sections: [
          {
            heading: "Core rules",
            body: "The power rule handles $x^n$; the constant rule kills standalone constants; sums differentiate termwise. Combine them for any polynomial: $\\frac{d}{dx}(3x^4 - 2x^2 + 7) = 12x^3 - 4x$.",
          },
          {
            heading: "Product and quotient",
            body: "When two functions multiply, use $(fg)' = f'g + fg'$ — not $f'g'$. For quotients, $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ — the order matters: numerator's derivative times denominator MINUS function times denominator's derivative, all over $g^2$.",
          },
        ],
        keyFormulas: [
          { name: "Product rule", statement: "$(fg)' = f'g + fg'$" },
          { name: "Quotient rule", statement: "$\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$" },
        ],
        workedExample: {
          problem: "Find $\\frac{d}{dx}\\left(x^3 \\sin x\\right)$.",
          solution: "Product rule with $f = x^3$, $g = \\sin x$: $f' = 3x^2$, $g' = \\cos x$. Result: $3x^2 \\sin x + x^3 \\cos x$.",
        },
      },
      questions: [
        {
          id: "apcab-u2-derivative-rules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}(5x^3 - 2x + 9)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$15x^2 - 2$"
                    },
                    {
                              "id": "b",
                              "text": "$15x^2 + 9$"
                    },
                    {
                              "id": "c",
                              "text": "$5x^2 - 2$"
                    },
                    {
                              "id": "d",
                              "text": "$15x^3 - 2$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Power rule",
                              "statement": "Term-by-term: $15x^2 - 2 + 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{d}{dx}(5x^3) = 15x^2$, $\\frac{d}{dx}(-2x) = -2$, $\\frac{d}{dx}(9) = 0$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$15x^2 - 2$",
          "commonErrors": [
                    "Keeping the constant $9$ or misapplying the power rule."
          ]
},
        },
        {
          id: "apcab-u2-derivative-rules-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}(x \\cos x)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\cos x - x\\sin x$"
                    },
                    {
                              "id": "b",
                              "text": "$-\\sin x$"
                    },
                    {
                              "id": "c",
                              "text": "$\\cos x + x \\sin x$"
                    },
                    {
                              "id": "d",
                              "text": "$x\\sin x$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Product rule",
                              "statement": "$f=x$, $g=\\cos x$: $f'=1$, $g'=-\\sin x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(x)'\\cos x + x(\\cos x)' = \\cos x - x\\sin x$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\cos x - x\\sin x$",
          "commonErrors": [
                    "Sign error on the $\\cos x$ derivative."
          ]
},
        },
        {
          id: "apcab-u2-derivative-rules-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\frac{d}{dx}\\frac{x}{x+1}$ at $x = 0$. Enter the derivative value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Derivative",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quotient rule",
                              "statement": "$\\frac{(1)(x+1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quotient gives $\\frac{1}{(x+1)^2}$; at $x=0$ this is $1$.",
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
                    "Reversing the subtraction order in the quotient rule."
          ]
},
        },
        {
          id: "apcab-u2-derivative-rules-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find $\\frac{d}{dx}\\left(\\frac{\\sin x}{x^2}\\right)$ and simplify.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Quotient rule",
                              "statement": "$f=\\sin x$, $g=x^2$: $f'=\\cos x$, $g'=2x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{\\cos x \\cdot x^2 - \\sin x \\cdot 2x}{x^4} = \\frac{x\\cos x - 2\\sin x}{x^3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Factor $x$ from numerator and cancel one power of $x$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplified: $\\frac{x\\cos x - 2\\sin x}{x^3}$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\frac{x\\cos x - 2\\sin x}{x^3}$",
          "commonErrors": [
                    "Not canceling common factors or misplacing the $g^2$ denominator."
          ]
},
        },
      ],
    },
  ],
};
