import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m11-u2-lesson-2-1",
  code: "2-1",
  title: "Forms of Quadratic Functions",
  goal: "I CAN identify vertex, axis of symmetry, roots and direction from each form.",
  standards: ["A-SSE.1", "F-IF.7", "F-LE.1"],
  vocabulary: [
    { term: "Standard form", definition: "$f(x) = ax^2 + bx + c$; $a$ controls width/direction, $c$ is the $y$-intercept." },
    { term: "Vertex form", definition: "$f(x) = a(x - h)^2 + k$; vertex at $(h, k)$ — the most useful form for graphing." },
    { term: "Factored form", definition: "$f(x) = a(x - r_1)(x - r_2)$; roots at $r_1, r_2$ — the $x$-intercepts." },
    { term: "Axis of symmetry", definition: "The vertical line $x = h$ through the vertex." },
    { term: "Leading coefficient", definition: "$a > 0$ opens up (minimum), $a < 0$ opens down (maximum)." },
  ],
  concepts: [
    {
      id: "m11-u2-quadratic-forms",
      title: "Three forms, three views",
      skill: "Extract key features from standard, vertex and factored forms.",
      lesson: {
        sections: [
          {
            heading: "Vertex form",
            body: "$f(x) = a(x - h)^2 + k$ shows everything at a glance: vertex $(h, k)$, axis $x = h$, and since the squared term is never negative, $k$ is the **minimum** when $a > 0$ or **maximum** when $a < 0$. The vertex is found by **completing the square** from standard form.",
          },
          {
            heading: "Factored and standard",
            body: "$f(x) = a(x - r_1)(x - r_2)$ gives roots directly — set each factor to zero. Standard form $ax^2 + bx + c$ gives the $y$-intercept $c$ immediately but hides the vertex. Converting between forms is a core Algebra 2 skill.",
          },
        ],
        keyFormulas: [
          { name: "Vertex form", statement: "$f(x) = a(x-h)^2 + k$; vertex $(h,k)$" },
          { name: "Factored form", statement: "$f(x) = a(x-r_1)(x-r_2)$; roots $r_1, r_2$" },
          { name: "Axis", statement: "$x = \\frac{-b}{2a}$ from standard form" },
        ],
        workedExample: {
          problem: "Find the vertex of $f(x) = 2(x - 3)^2 - 8$ and state whether it is a max or min.",
          solution: "Vertex $(3, -8)$. Since $a = 2 > 0$, the parabola opens up and the vertex is a **minimum**.",
        },
      },
      questions: [
        {
          id: "m11-u2-quadratic-forms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The vertex of $f(x) = (x + 4)^2 - 7$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(-4, -7)$"
                    },
                    {
                              "id": "b",
                              "text": "$(4, -7)$"
                    },
                    {
                              "id": "c",
                              "text": "$(-4, 7)$"
                    },
                    {
                              "id": "d",
                              "text": "$(4, 7)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vertex form",
                              "statement": "$(x - h)^2 + k$ has vertex $(h, k)$; here $h = -4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x + 4 = x - (-4)$, so $h = -4$, $k = -7$: vertex $(-4, -7)$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $(-4, -7)$",
          "commonErrors": [
                    "Reading $h$ as $+4$ — watch the sign."
          ]
},
        },
        {
          id: "m11-u2-quadratic-forms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the roots of $f(x) = (x - 2)(x + 5)$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x = 2$ and $x = -5$"
                    },
                    {
                              "id": "b",
                              "text": "$x = -2$ and $x = 5$"
                    },
                    {
                              "id": "c",
                              "text": "$x = 2$ and $x = 5$"
                    },
                    {
                              "id": "d",
                              "text": "$x = -2$ and $x = -5$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Zero product",
                              "statement": "Set each factor equal to zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x - 2 = 0 \\Rightarrow x = 2$; $x + 5 = 0 \\Rightarrow x = -5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct roots.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $x = 2, -5$",
          "commonErrors": [
                    "Keeping the sign inside the factor instead of solving."
          ]
},
        },
        {
          id: "m11-u2-quadratic-forms-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $f(x) = x^2 - 6x + 5$, what is the axis of symmetry?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Axis",
                              "statement": "$x = \\frac{-b}{2a} = \\frac{6}{2} = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 3$",
          "commonErrors": [
                    "Using $\\frac{b}{2a}$ without the negative sign."
          ]
},
        },
        {
          id: "m11-u2-quadratic-forms-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Convert $f(x) = x^2 - 4x - 5$ to vertex form and state the vertex and whether it opens up or down.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Complete the square",
                              "statement": "$x^2 - 4x = (x-2)^2 - 4$."
                    },
                    {
                              "kind": "concept",
                              "name": "Vertex form",
                              "statement": "$(x-h)^2 + k$ reveals the vertex."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(x) = (x^2 - 4x + 4) - 4 - 5 = (x - 2)^2 - 9$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Vertex $(2, -9)$; $a = 1 > 0$ so it opens up — vertex is a minimum.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct form and features.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$f(x) = (x-2)^2 - 9$; vertex $(2,-9)$, opens up",
          "commonErrors": [
                    "Adding $4$ without subtracting it back."
          ]
},
        },
      ],
    },
  ],
};
