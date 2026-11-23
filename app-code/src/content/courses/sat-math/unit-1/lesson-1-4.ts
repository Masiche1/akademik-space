import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "satm-u1-lesson-1-4",
  code: "1-4",
  title: "Linear Inequalities in Context",
  goal: "I CAN model and solve inequality word problems.",
  standards: ["SAT M 1.x"],
  vocabulary: [
    { term: "Inequality in context", definition: "Real-world constraint expressed as inequality." },
    { term: "Boundary", definition: "The limit value — included or excluded." },
    { term: "Feasible region", definition: "Values satisfying all constraints." },
    { term: "Model", definition: "Translating words to inequality." },
    { term: "At least/at most", definition: "≥ and ≤ respectively." },
    { term: "Interpretation", definition: "What the solution means in context." },
  ],
  concepts: [
    {
      id: "satm-u1-linear-inequalities",
      title: "Inequalities in context",
      skill: "Translate word problems into and solve inequalities.",
      lesson: {
        sections: [
          {
            heading: "Modeling inequalities",
            body: "Translate phrases: 'at least' → $\\ge$, 'at most' → $\\le$, 'more than' → $>$, 'less than' → $<$. Set up the inequality from the scenario, solve, then INTERPRET — the answer must make sense in context (can't buy negative items, can't exceed budget).",
          },
          {
            heading: "Boundary interpretation",
            body: "Whether the boundary is included depends on the problem — 'at least 5' includes 5 ($\\ge$); 'more than 5' excludes 5 ($>$). In context, check if the boundary value is achievable — 'at most $50' means $50 is OK.",
          },
        ],
        keyFormulas: [
          { name: "Translate", statement: "at least=$\\ge$; at most=$\\le$; more than=$>$; less than=$<$" },
          { name: "Interpret", statement: "Solution must be feasible in context" },
        ],
        workedExample: {
          problem: "A gym charges $\\$30$ membership plus $\\$10$/month. You have $\\$150$. Write and solve the inequality for months $m$.",
          solution: "$30 + 10m \\le 150$ → $10m \\le 120$ → $m \\le 12$. You can afford at most 12 months.",
        },
      },
      questions: [
        {
          id: "satm-u1-linear-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'At least 5' translates to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$> 5$"
                    },
                    {
                              "id": "b",
                              "text": "$\\ge 5$"
                    },
                    {
                              "id": "c",
                              "text": "$< 5$"
                    },
                    {
                              "id": "d",
                              "text": "$\\le 5$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "At least",
                              "statement": "Minimum included."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'At least 5' means 5 or more → $\\ge 5$ (includes boundary).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\ge 5$",
          "commonErrors": [
                    "Confusing with 'more than'."
          ]
},
        },
        {
          id: "satm-u1-linear-inequalities-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'At most $40' means you can spend ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "less than $40"
                    },
                    {
                              "id": "b",
                              "text": "$40 or less"
                    },
                    {
                              "id": "c",
                              "text": "exactly $40"
                    },
                    {
                              "id": "d",
                              "text": "more than $40"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "At most",
                              "statement": "Maximum included."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'At most $40' = $\\le 40$ — $40 is allowed, $40.01 is not.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$40 or less",
          "commonErrors": [
                    "Excluding the boundary incorrectly."
          ]
},
        },
        {
          id: "satm-u1-linear-inequalities-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A taxi charges $\\$3$ base plus $\\$2$/mile. You have $\\$15$. Write inequality for miles $m$ and solve.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "m ≤",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Model then solve",
                              "statement": "$3 + 2m \\le 15$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3 + 2m \\le 15$ → $2m \\le 12$ → $m \\le 6$. Max 6 miles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $m \\le 6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$m \\le 6$",
          "commonErrors": [
                    "Setting up equation instead of inequality."
          ]
},
        },
        {
          id: "satm-u1-linear-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A company produces widgets. Each costs $\\$4$ to make and sells for $\\$7$. Fixed costs are $\\$500$/day. How many widgets $w$ must be sold to break even or profit?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Break-even inequality",
                              "statement": "Revenue ≥ cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cost: $500 + 4w$; Revenue: $7w$. Profit when $7w \\ge 500 + 4w$ → $3w \\ge 500$ → $w \\ge 166.67$ → $w \\ge 167$ (whole widgets).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Must sell at least 167 widgets to break even — 166 gives $3(166) = 498 < 500$ (loss of $2), 167 gives $501$ (profit of $1$).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Context matters — $w$ must be a whole number; round UP to 167, not down to 166.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$w \\ge 167$ widgets",
          "commonErrors": [
                    "Rounding down — 166 doesn't break even."
          ]
},
        },
      ],
    },
  ],
};
