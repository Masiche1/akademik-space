import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m12-u1-lesson-1-3",
  code: "1-3",
  title: "Piecewise and Absolute Value Functions",
  goal: "I CAN evaluate and graph piecewise-defined functions and absolute value functions.",
  standards: ["F-IF.7", "F-BF.3"],
  vocabulary: [
    { term: "Piecewise function", definition: "A function defined by different rules on different intervals, e.g., $f(x) = \\begin{cases} x+1 & x<0 \\\\ -x & x \\ge 0 \\end{cases}$." },
    { term: "Domain interval", definition: "The set of $x$-values where each rule applies." },
    { term: "Continuity at the join", definition: "A piecewise function is continuous where the pieces meet if their values agree." },
    { term: "Absolute value", definition: "$|x|$ equals $x$ when $x \\ge 0$ and $-x$ when $x < 0$ — a V-shaped piecewise function." },
    { term: "Endpoint inclusion", definition: "Closed dot = endpoint included; open dot = excluded." },
  ],
  concepts: [
    {
      id: "m12-u1-piecewise-functions",
      title: "Piecewise functions",
      skill: "Choose the correct rule for each input and analyze the graph.",
      lesson: {
        sections: [
          {
            heading: "Reading piecewise notation",
            body: "Each rule applies only on its stated interval — check which interval the input falls in, including boundary conventions ($<$ vs $\\le$). At the boundary itself, the rule with $\\le$ or $\\ge$ wins; a closed dot on the graph marks an included endpoint.",
          },
          {
            heading: "Absolute value",
            body: "$|x - h|$ is the distance from $x$ to $h$, so its graph is a V with vertex at $(h, 0)$. $|x| + k$ shifts up $k$; $a|x - h| + k$ stretches by $a$. Piecewise thinking — right side slope $+a$, left side slope $-a$ — explains every absolute value graph.",
          },
        ],
        keyFormulas: [
          { name: "Piecewise", statement: "Apply the rule whose interval contains $x$" },
          { name: "Absolute value", statement: "$|x - h|$: V-shape, vertex $(h,0)$, slopes $\\pm a$" },
          { name: "Continuity", statement: "Pieces must agree at shared endpoints" },
        ],
        workedExample: {
          problem: "Evaluate $f(2)$ and $f(-3)$ for $f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 1 & x \\ge 0 \\end{cases}$.",
          solution: "$f(2) = 2(2) + 1 = 5$ (second rule, since $2 \\ge 0$). $f(-3) = (-3)^2 = 9$ (first rule, since $-3 < 0$).",
        },
      },
      questions: [
        {
          id: "m12-u1-piecewise-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x) = \\begin{cases} 5 & x < 0 \\\\ x + 2 & x \\ge 0 \\end{cases}$, $f(0)$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5$"
                    },
                    {
                              "id": "b",
                              "text": "$2$"
                    },
                    {
                              "id": "c",
                              "text": "$0$"
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
                              "kind": "rule",
                              "name": "Boundary",
                              "statement": "$x = 0$ satisfies $x \\ge 0$, so use $x + 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(0) = 0 + 2 = 2$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** $2$",
          "commonErrors": [
                    "Using the first rule — check the inequality at the boundary."
          ]
},
        },
        {
          id: "m12-u1-piecewise-functions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the vertex of $g(x) = |x + 3| - 2$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(-3, -2)$"
                    },
                    {
                              "id": "b",
                              "text": "$(3, -2)$"
                    },
                    {
                              "id": "c",
                              "text": "$(-3, 2)$"
                    },
                    {
                              "id": "d",
                              "text": "$(3, 2)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Absolute value",
                              "statement": "$|x - h| + k$ has vertex $(h, k)$; here $h = -3$, $k = -2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vertex $(-3, -2)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct vertex.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $(-3, -2)$",
          "commonErrors": [
                    "Sign error on $h$."
          ]
},
        },
        {
          id: "m12-u1-piecewise-functions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $f(4)$ for $f(x) = \\begin{cases} x - 1 & x \\le 3 \\\\ x^2 - 10 & x > 3 \\end{cases}$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$f(4)$",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Select rule",
                              "statement": "$4 > 3$, so use $x^2 - 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f(4) = 16 - 10 = 6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Using the wrong interval's rule."
          ]
},
        },
        {
          id: "m12-u1-piecewise-functions-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Graph $f(x) = |x - 1| + 2$ by describing its vertex, slopes on each side, and $y$-intercept. Then find all $x$ where $f(x) = 5$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Absolute value graph",
                              "statement": "Vertex at $(1, 2)$; slopes $-1$ left, $+1$ right."
                    },
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$|x-1| + 2 = 5 \\Rightarrow |x-1| = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vertex $(1, 2)$; slope $-1$ for $x < 1$, $+1$ for $x > 1$; $y$-intercept $f(0) = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$|x - 1| = 3$ gives $x - 1 = \\pm 3$, so $x = 4$ or $x = -2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both solutions verified: $f(4) = f(-2) = 5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Vertex $(1,2)$; $y$-int $3$; $x = -2$ or $4$",
          "commonErrors": [
                    "Solving $|x-1| = 5$ instead of $|x-1| = 3$."
          ]
},
        },
      ],
    },
  ],
};
