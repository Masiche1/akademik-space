import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m11-u2-lesson-2-2",
  code: "2-2",
  title: "Completing the Square",
  goal: "I CAN rewrite quadratics in vertex form and solve equations by completing the square.",
  standards: ["A-REI.4", "A-SSE.3"],
  vocabulary: [
    { term: "Completing the square", definition: "Adding $(\\frac{b}{2})^2$ to both sides to form a perfect square." },
    { term: "Half the coefficient", definition: "Take half of $b$, square it — the number to add." },
    { term: "Vertex form result", definition: "$ax^2 + bx + c \\rightarrow a(x + \\frac{b}{2a})^2 + (c - \\frac{b^2}{4a})$." },
    { term: "Solving", definition: "Complete the square, then take square roots of both sides." },
  ],
  concepts: [
    {
      id: "m11-u2-completing-the-square",
      title: "Completing the square",
      skill: "Transform $ax^2 + bx + c$ into vertex form and solve quadratics.",
      lesson: {
        sections: [
          {
            heading: "The technique",
            body: "For $x^2 + bx$, add $(\\frac{b}{2})^2$ to complete $(x + \\frac{b}{2})^2$. For $ax^2 + bx + c$ with $a \\ne 1$, first divide through by $a$ or factor it out. Example: $x^2 - 6x + 2 = (x - 3)^2 - 7$ — half of $-6$ is $-3$, squared is $9$, and $2 - 9 = -7$.",
          },
          {
            heading: "Solving equations",
            body: "To solve $x^2 + bx + c = 0$ by completing the square: move $c$, add $(b/2)^2$ to both sides, factor the left as a square, take square roots, solve for $x$. This derives the quadratic formula and handles equations the factoring method cannot.",
          },
        ],
        keyFormulas: [
          { name: "Key step", statement: "Add $\\left(\\frac{b}{2}\\right)^2$ to complete the square" },
          { name: "Vertex form", statement: "$a\\left(x + \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)$" },
        ],
        workedExample: {
          problem: "Solve $x^2 + 6x - 7 = 0$ by completing the square.",
          solution: "$x^2 + 6x = 7$; add $9$: $x^2 + 6x + 9 = 16$; $(x+3)^2 = 16$; $x + 3 = \\pm 4$; $x = 1$ or $x = -7$.",
        },
      },
      questions: [
        {
          id: "m11-u2-completing-the-square-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To complete the square for $x^2 + 8x$, you add ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$16$"
                    },
                    {
                              "id": "b",
                              "text": "$8$"
                    },
                    {
                              "id": "c",
                              "text": "$4$"
                    },
                    {
                              "id": "d",
                              "text": "$64$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Half then square",
                              "statement": "Half of $8$ is $4$; $4^2 = 16$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add $16$ to get $(x+4)^2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $16$",
          "commonErrors": [
                    "Adding $8$ or $4$ instead of $4^2$."
          ]
},
        },
        {
          id: "m11-u2-completing-the-square-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $x^2 - 10x + 21$ in vertex form.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(x-5)^2 - 4$"
                    },
                    {
                              "id": "b",
                              "text": "$(x-5)^2 + 4$"
                    },
                    {
                              "id": "c",
                              "text": "$(x+5)^2 - 4$"
                    },
                    {
                              "id": "d",
                              "text": "$(x-5)^2 - 25$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Complete the square",
                              "statement": "$x^2 - 10x + 25 - 25 + 21 = (x-5)^2 - 4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add and subtract $25$: $(x-5)^2 - 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct form.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $(x-5)^2 - 4$",
          "commonErrors": [
                    "Forgetting to subtract the added $25$."
          ]
},
        },
        {
          id: "m11-u2-completing-the-square-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2 - 4x - 5 = 0$ by completing the square. Enter the larger solution.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Larger $x$",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Complete and solve",
                              "statement": "$(x-2)^2 = 9$, so $x - 2 = \\pm 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x = 5$ or $x = -1$; larger is $5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 5$",
          "commonErrors": [
                    "Dropping the $\\pm$ and losing a solution."
          ]
},
        },
        {
          id: "m11-u2-completing-the-square-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2x^2 + 8x - 10 = 0$ by completing the square.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Normalize first",
                              "statement": "Divide by $2$: $x^2 + 4x - 5 = 0$."
                    },
                    {
                              "kind": "method",
                              "name": "Complete the square",
                              "statement": "$(x+2)^2 = 9$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x^2 + 4x = 5$; add $4$: $(x+2)^2 = 9$; $x + 2 = \\pm 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$x = 1$ or $x = -5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both solutions verified.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 1$ or $x = -5$",
          "commonErrors": [
                    "Completing the square before dividing by $a = 2$."
          ]
},
        },
      ],
    },
  ],
};
