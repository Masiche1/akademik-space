import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m12-u1-lesson-1-1",
  code: "1-1",
  title: "Transformations of Functions",
  goal: "I CAN describe how shifts, stretches and reflections transform a parent function's graph.",
  standards: ["F-BF.3", "F-IF.7"],
  vocabulary: [
    { term: "Parent function", definition: "A basic function like $f(x) = x^2$, $\\sqrt{x}$, $\\frac{1}{x}$ or $|x|$ used as a template." },
    { term: "Vertical shift", definition: "$f(x) + k$ moves the graph $k$ units up ($k>0$) or down ($k<0$)." },
    { term: "Horizontal shift", definition: "$f(x - h)$ moves the graph $h$ units right — the shift is opposite the sign inside." },
    { term: "Vertical stretch", definition: "$a \\cdot f(x)$ with $|a|>1$ stretches; $|a|<1$ compresses; negative $a$ reflects." },
    { term: "Horizontal stretch", definition: "$f(bx)$ with $|b|>1$ compresses horizontally by factor $b$." },
  ],
  concepts: [
    {
      id: "m12-u1-function-transformations",
      title: "Transformations",
      skill: "Read $a \\cdot f(b(x - h)) + k$ and predict the transformed graph.",
      lesson: {
        sections: [
          {
            heading: "The master form",
            body: "$g(x) = a \\cdot f(b(x - h)) + k$ encodes everything: $h$ shifts horizontally (right if positive), $k$ shifts vertically (up if positive), $a$ scales vertically and reflects across the $x$-axis if negative, $b$ scales horizontally. The **inside** change acts opposite to intuition: $f(x - h)$ shifts **right** by $h$.",
          },
          {
            heading: "Order matters",
            body: "Apply transformations in a consistent order — typically horizontal shift, horizontal scale, vertical scale, vertical shift — and track key points (vertex, intercepts) rather than the whole curve. For $f(x) = x^2$, the vertex $(0,0)$ of $2(x-3)^2 + 1$ lands at $(3, 1)$.",
          },
        ],
        keyFormulas: [
          { name: "Master form", statement: "$g(x) = a f(b(x-h)) + k$" },
          { name: "Inside vs outside", statement: "$f(x-h)$ shifts right; $f(x)+k$ shifts up" },
        ],
        workedExample: {
          problem: "Describe the transformations from $f(x) = x^2$ to $g(x) = -2(x + 1)^2 + 3$.",
          solution: "Shift left $1$, reflect across $x$-axis, vertical stretch by $2$, shift up $3$. Vertex moves from $(0,0)$ to $(-1, 3)$ and opens downward.",
        },
      },
      questions: [
        {
          id: "m12-u1-function-transformations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The graph of $y = (x - 4)^2$ is the graph of $y = x^2$ shifted ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "left $4$"
                    },
                    {
                              "id": "b",
                              "text": "right $4$"
                    },
                    {
                              "id": "c",
                              "text": "up $4$"
                    },
                    {
                              "id": "d",
                              "text": "down $4$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Inside shift",
                              "statement": "$f(x - h)$ shifts right by $h$ — opposite the sign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$h = 4$: shift right $4$ units.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** right $4$",
          "commonErrors": [
                    "Shifting left because the $4$ looks negative — it is $x - 4$."
          ]
},
        },
        {
          id: "m12-u1-function-transformations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $g(x) = 3f(x - 2) + 1$, the graph of $f$ is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stretched by $3$, shifted right $2$, up $1$"
                    },
                    {
                              "id": "b",
                              "text": "compressed by $3$, shifted left $2$, down $1$"
                    },
                    {
                              "id": "c",
                              "text": "stretched by $3$, shifted left $2$, up $1$"
                    },
                    {
                              "id": "d",
                              "text": "reflected, shifted right $2$, up $1$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Decode master form",
                              "statement": "$a=3$ stretch, $h=2$ right, $k=1$ up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vertical stretch by $3$, horizontal shift right $2$, vertical shift up $1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct description.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** stretched $3$, right $2$, up $1$",
          "commonErrors": [
                    "Reversing the horizontal shift direction."
          ]
},
        },
        {
          id: "m12-u1-function-transformations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $(1, 5)$ is on $f(x) = x^2 - x$. Find the corresponding point on $g(x) = f(x - 2) + 3$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inverse transform",
                              "statement": "Input $x = 3$ gives $f(1) = 5$; output $5 + 3 = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$g(3) = f(3-2) + 3 = f(1) + 3 = 8$; point $(3, 8)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct point.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$(3, 8)$",
          "commonErrors": [
                    "Adding the shift to the input instead of the output."
          ]
},
        },
        {
          id: "m12-u1-function-transformations-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Starting from $f(x) = \\sqrt{x}$, write the equation of the graph shifted left $4$, stretched vertically by $2$, and shifted down $1$. Then find the domain of the new function.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Build transformation",
                              "statement": "$g(x) = 2f(x + 4) - 1 = 2\\sqrt{x+4} - 1$."
                    },
                    {
                              "kind": "concept",
                              "name": "Domain",
                              "statement": "Radicand must stay non-negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$g(x) = 2\\sqrt{x + 4} - 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Domain: $x + 4 \\ge 0 \\Rightarrow x \\ge -4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The left shift moves the domain endpoint from $0$ to $-4$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$g(x) = 2\\sqrt{x+4} - 1$; domain $x \\ge -4$",
          "commonErrors": [
                    "Writing $\\sqrt{x} + 4$ inside the radical — the shift is outside the radicand argument but inside the function input."
          ]
},
        },
      ],
    },
  ],
};
