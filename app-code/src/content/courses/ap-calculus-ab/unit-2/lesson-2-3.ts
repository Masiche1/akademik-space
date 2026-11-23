import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apcab-u2-lesson-2-3",
  code: "2-3",
  title: "Chain Rule and Implicit Differentiation",
  goal: "I CAN apply the chain rule and differentiate implicitly defined relations.",
  standards: ["DER-3", "DER-4"],
  vocabulary: [
    { term: "Chain rule", definition: "$\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)$ — derivative of outside times derivative of inside." },
    { term: "Nested chain", definition: "Apply repeatedly: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2) \\cdot 2x$." },
    { term: "Implicit function", definition: "A relation like $x^2 + y^2 = 25$ where $y$ is not isolated." },
    { term: "Implicit differentiation", definition: "Differentiate both sides with respect to $x$, treating $y$ as a function of $x$ and multiplying $y$-terms by $\\frac{dy}{dx}$." },
    { term: "$\\frac{dy}{dx}$", definition: "The derivative of an implicitly defined $y$ with respect to $x$." },
  ],
  concepts: [
    {
      id: "apcab-u2-chain-implicit",
      title: "Chain rule and implicit differentiation",
      skill: "Differentiate composite functions and relations defined implicitly.",
      lesson: {
        sections: [
          {
            heading: "Chain rule",
            body: "For a composite $f(g(x))$, differentiate the outer function, keep the inner function unchanged, then multiply by the inner derivative: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2) \\cdot 2x$. Every 'inside' function — parentheses, powers of expressions — triggers another factor.",
          },
          {
            heading: "Implicit differentiation",
            body: "When $y$ is defined by an equation like $x^2 + y^2 = 25$, differentiate both sides w.r.t. $x$. Every $y$-term picks up a factor of $\\frac{dy}{dx}$ (since $\\frac{d}{dx}y^2 = 2y\\frac{dy}{dx}$), then solve for $\\frac{dy}{dx}$.",
          },
        ],
        keyFormulas: [
          { name: "Chain rule", statement: "$\\frac{d}{dx}f(g(x)) = f'(g(x))\\,g'(x)$" },
          { name: "Implicit", statement: "$\\frac{d}{dx}y^n = ny^{n-1}\\frac{dy}{dx}$; solve for $\\frac{dy}{dx}$" },
        ],
        workedExample: {
          problem: "Find $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$.",
          solution: "Differentiate: $2x + 2y\\frac{dy}{dx} = 0$. Solve: $\\frac{dy}{dx} = -\\frac{x}{y}$. At $(3,4)$ the slope is $-\\frac{3}{4}$.",
        },
      },
      questions: [
        {
          id: "apcab-u2-chain-implicit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}\\sin(3x)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\cos(3x)$"
                    },
                    {
                              "id": "b",
                              "text": "$3\\cos(3x)$"
                    },
                    {
                              "id": "c",
                              "text": "$-3\\cos(3x)$"
                    },
                    {
                              "id": "d",
                              "text": "$3\\sin(3x)$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Chain rule",
                              "statement": "Outer derivative $\\cos(3x)$ times inner derivative $3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\cos(3x) \\cdot 3 = 3\\cos(3x)$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$3\\cos(3x)$",
          "commonErrors": [
                    "Dropping the inner derivative factor of $3$."
          ]
},
        },
        {
          id: "apcab-u2-chain-implicit-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $y^2 = x^3 + 1$, what is $\\frac{dy}{dx}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{3x^2}{2y}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{2y}{3x^2}$"
                    },
                    {
                              "id": "c",
                              "text": "$3x^2$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{3x^2}{y}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Implicit differentiation",
                              "statement": "$2y\\frac{dy}{dx} = 3x^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solve: $\\frac{dy}{dx} = \\frac{3x^2}{2y}$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\frac{3x^2}{2y}$",
          "commonErrors": [
                    "Forgetting the factor $2y$ on the left side."
          ]
},
        },
        {
          id: "apcab-u2-chain-implicit-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\frac{dy}{dx}$ for $xy + y^2 = 6$ at the point $(2, 1)$. Enter the slope value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Slope",
                              "answer": -0.8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Implicit + product",
                              "statement": "$y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Differentiate: $y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$, so $(x + 2y)\\frac{dy}{dx} = -y$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "At $(2,1)$: $(2 + 2)\\frac{dy}{dx} = -1$, giving slope $-0.25$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-0.25$",
          "commonErrors": [
                    "Sign error collecting $y'$ terms."
          ]
},
        },
        {
          id: "apcab-u2-chain-implicit-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find $\\frac{dy}{dx}$ for $\\sin y = x^2 + y$ using implicit differentiation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Implicit differentiation",
                              "statement": "Left side: $\\cos y \\cdot \\frac{dy}{dx}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Differentiate: $\\cos y \\cdot y' = 2x + y'$. Group $y'$ terms: $y'(\\cos y - 1) = 2x$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solve: $\\frac{dy}{dx} = \\frac{2x}{\\cos y - 1}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct expression stated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\frac{dy}{dx} = \\frac{2x}{\\cos y - 1}$",
          "commonErrors": [
                    "Treating $\\sin y$ derivative as $\\cos y$ without the $y'$ factor."
          ]
},
        },
      ],
    },
  ],
};
