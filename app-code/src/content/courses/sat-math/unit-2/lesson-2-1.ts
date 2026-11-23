import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "satm-u2-lesson-2-1",
  code: "2-1",
  title: "Quadratic Functions",
  goal: "I CAN solve and analyze quadratic equations and functions.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Quadratic", definition: "$ax^2 + bx + c$ — degree 2 polynomial." },
    { term: "Vertex", definition: "Maximum or minimum point of parabola." },
    { term: "Axis of symmetry", definition: "Vertical line through vertex: $x = -b/2a$." },
    { term: "Factoring", definition: "Rewriting as $(x-r_1)(x-r_2)$ to find roots." },
    { term: "Quadratic formula", definition: "$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$." },
    { term: "Discriminant", definition: "$b^2 - 4ac$ — determines number of real roots." },
  ],
  concepts: [
    {
      id: "satm-u2-quadratics",
      title: "Quadratics",
      skill: "Solve quadratics and analyze parabola properties.",
      lesson: {
        sections: [
          {
            heading: "Solving methods",
            body: "**Factoring**: fastest when factors are nice — $x^2 + 5x + 6 = (x+2)(x+3) = 0$ → $x = -2, -3$. **Quadratic formula**: always works — $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$. **Completing square**: converts to vertex form $(x-h)^2 + k$. Choose method based on the equation's form.",
          },
          {
            heading: "Vertex and axis",
            body: "Vertex form $y = a(x-h)^2 + k$ gives vertex $(h, k)$ directly. Standard form $y = ax^2 + bx + c$: axis of symmetry $x = -\\frac{b}{2a}$, vertex at that $x$. $a > 0$ opens up (min), $a < 0$ opens down (max). Discriminant $b^2 - 4ac$: positive = 2 real roots, zero = 1 (repeated), negative = 0 real roots.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$" },
          { name: "Vertex", statement: "$x = -\\frac{b}{2a}$; $y = a(x-h)^2+k$ vertex $(h,k)$" },
        ],
        workedExample: {
          problem: "Find the vertex of $y = x^2 - 6x + 5$.",
          solution: "Axis: $x = -\\frac{-6}{2(1)} = 3$. Vertex $y = 9 - 18 + 5 = -4$. Vertex $(3, -4)$. Check by completing square: $y = (x-3)^2 - 4$. ✓",
        },
      },
      questions: [
        {
          id: "satm-u2-quadratics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The quadratic formula solves equations of the form ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$ax + b = 0$"
                    },
                    {
                              "id": "b",
                              "text": "$ax^2 + bx + c = 0$"
                    },
                    {
                              "id": "c",
                              "text": "$a^x = b$"
                    },
                    {
                              "id": "d",
                              "text": "$ax^3 + bx = 0$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quadratic",
                              "statement": "Degree 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quadratic formula applies to $ax^2 + bx + c = 0$ where $a \\ne 0$ — degree-2 polynomial equations.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$ax^2+bx+c=0$",
          "commonErrors": [
                    "Applying to wrong degree."
          ]
},
        },
        {
          id: "satm-u2-quadratics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the discriminant of $x^2 - 4x + 4 = 0$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$-4$"
                    },
                    {
                              "id": "b",
                              "text": "$0$"
                    },
                    {
                              "id": "c",
                              "text": "$4$"
                    },
                    {
                              "id": "d",
                              "text": "$16$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compute b²-4ac",
                              "statement": "$16 - 16$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0$ — one repeated root.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Sign errors in discriminant."
          ]
},
        },
        {
          id: "satm-u2-quadratics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2 - 5x + 6 = 0$ by factoring. Enter the larger root.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Larger root",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Factor",
                              "statement": "$(x-2)(x-3) = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(x-2)(x-3) = 0$ → $x = 2$ or $x = 3$. Larger: 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 3.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Sign errors when factoring."
          ]
},
        },
        {
          id: "satm-u2-quadratics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $y = -2x^2 + 8x - 3$, find the vertex and state whether it's a max or min.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Vertex + direction",
                              "statement": "$a < 0$ opens down → max."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Axis: $x = -\\frac{8}{2(-2)} = -\\frac{8}{-4} = 2$. Vertex $y = -2(4) + 8(2) - 3 = -8 + 16 - 3 = 5$. Vertex $(2, 5)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Since $a = -2 < 0$, parabola opens DOWN → vertex is a MAXIMUM.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Context: this could model profit maximization or projectile peak — the vertex gives optimal value.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Vertex (2,5), maximum",
          "commonErrors": [
                    "Wrong sign on axis formula or misidentifying max/min."
          ]
},
        },
      ],
    },
  ],
};
