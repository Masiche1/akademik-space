import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m9-u2-lesson-2-1",
  code: "2-1",
  title: "Functions, Domain and Range",
  goal: "I CAN identify functions and state their domain and range.",
  standards: ["F-IF.1", "F-IF.3"],
  vocabulary: [
    { term: "Relation", definition: "Any set of ordered pairs $(x, y)$." },
    { term: "Function", definition: "A relation where each input $x$ has exactly one output $y$." },
    { term: "Domain", definition: "The set of all input values $x$." },
    { term: "Range", definition: "The set of all output values $y$." },
    { term: "Vertical line test", definition: "A graph represents a function if no vertical line crosses it more than once." },
  ],
  concepts: [
    {
      id: "m9-u2-functions-domain-range",
      title: "Functions",
      skill: "Test whether a relation is a function and identify domain and range.",
      lesson: {
        sections: [
          {
            heading: "What makes a function",
            body: "A **function** assigns exactly one output to each input. In ordered pairs, no two pairs may share the same $x$ with different $y$ values. On a graph, the **vertical line test** checks this: if any vertical line hits the graph twice, it is not a function. A circle fails the test; a parabola $y = x^2$ passes.",
          },
          {
            heading: "Domain and range",
            body: "The **domain** is every $x$-value that appears (or is allowed), and the **range** is every $y$-value produced. For $y = x^2$ with no restrictions, the domain is all real numbers and the range is $y \\ge 0$. For a table of pairs, list the $x$-values for domain and $y$-values for range, removing duplicates.",
          },
        ],
        keyFormulas: [
          { name: "Function test", statement: "Each input $x$ has exactly one output $y$" },
          { name: "Domain / range", statement: "Domain = set of inputs; range = set of outputs" },
        ],
        workedExample: {
          problem: "Is $\\{(1, 3), (2, 5), (3, 3), (4, 7)\\}$ a function? State its domain and range.",
          solution: "Yes — each $x$ appears once. Domain: $\\{1, 2, 3, 4\\}$. Range: $\\{3, 5, 7\\}$ ($3$ repeats, so it is listed once).",
        },
      },
      questions: [
        {
          id: "m9-u2-functions-domain-range-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which relation is a function?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\{(1,2),(1,3)\\}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\{(1,2),(2,3),(3,2)\\}$"
                    },
                    {
                              "id": "c",
                              "text": "$x^2 + y^2 = 25$"
                    },
                    {
                              "id": "d",
                              "text": "A vertical line"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Function",
                              "statement": "Each input has exactly one output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Option (b) has distinct $x$-values. (a) repeats $x=1$; (c) fails the vertical line test; (d) is not a function.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** $\\{(1,2),(2,3),(3,2)\\}$",
          "commonErrors": [
                    "Thinking repeated $y$-values break the function rule — repeated $x$-values do."
          ]
},
        },
        {
          id: "m9-u2-functions-domain-range-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the domain of $y = \\sqrt{x - 2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x \\ge 0$"
                    },
                    {
                              "id": "b",
                              "text": "$x \\ge 2$"
                    },
                    {
                              "id": "c",
                              "text": "$x \\le 2$"
                    },
                    {
                              "id": "d",
                              "text": "All real numbers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Square roots",
                              "statement": "The radicand must be non-negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x - 2 \\ge 0$ requires $x \\ge 2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $x \\ge 2$",
          "commonErrors": [
                    "Ignoring the restriction inside the radical."
          ]
},
        },
        {
          id: "m9-u2-functions-domain-range-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A function has ordered pairs $(2, 5), (4, 9), (6, 13)$. State its domain and range.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Domain and range",
                              "statement": "Domain = inputs $x$; range = outputs $y$. "
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Domain is $\\{2, 4, 6\\}$ — the $x$-values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Range is $\\{5, 9, 13\\}$ — the $y$-values.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Domain $\\{2,4,6\\}$, range $\\{5,9,13\\}$",
          "commonErrors": [
                    "Listing the $x$-values as the range."
          ]
},
        },
        {
          id: "m9-u2-functions-domain-range-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A parking garage charges $\\$3$ for the first hour and $\\$2$ for each additional hour. Write the cost $C$ as a function of hours $h$ for $h \\ge 1$, state its domain and range, and find the cost of $4.5$ hours.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Piecewise/linear model",
                              "statement": "$C = 3 + 2(h-1) = 2h + 1$ for $h \\ge 1$."
                    },
                    {
                              "kind": "skill",
                              "name": "Domain and range",
                              "statement": "Domain $h \\ge 1$; range $C \\ge 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost function: $C = 2h + 1$ for $h \\ge 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Domain: $h \\ge 1$; range: $C \\ge 3$ (cost never below $\\$3$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$C(4.5) = 2(4.5) + 1 = \\$10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$C = 2h+1$, domain $h\\ge1$, range $C\\ge3$, cost \\$10",
          "commonErrors": [
                    "Charging $\\$2 \\times 4.5$ and forgetting the first-hour premium."
          ]
},
        },
      ],
    },
  ],
};
