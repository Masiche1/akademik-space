import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "satm-u1-lesson-1-1",
  code: "1-1",
  title: "Linear Equations and Inequalities",
  goal: "I CAN solve linear equations and inequalities.",
  standards: ["SAT M 1.x"],
  vocabulary: [
    { term: "Linear equation", definition: "Equation where variable appears to power 1 — straight-line graph." },
    { term: "Solution", definition: "Value(s) of variable making equation true." },
    { term: "Isolate variable", definition: "Undo operations to get variable alone." },
    { term: "Inequality", definition: "Relation showing <, >, ≤, ≥ instead of =." },
    { term: "Flip inequality", definition: "When multiplying/dividing by negative, flip the sign." },
    { term: "No solution", definition: "Equation that simplifies to contradiction like $0 = 5$." },
  ],
  concepts: [
    {
      id: "satm-u1-linear-equations",
      title: "Linear equations",
      skill: "Solve linear equations and inequalities algebraically.",
      lesson: {
        sections: [
          {
            heading: "Solving linear equations",
            body: "Goal: isolate the variable. Undo operations in reverse order — add/subtract constants first, then multiply/divide by coefficients. Check by substituting back. For $ax + b = c$: subtract $b$, then divide by $a$ → $x = (c-b)/a$.",
          },
          {
            heading: "Inequalities",
            body: "Same process BUT when you multiply or divide by a NEGATIVE number, FLIP the inequality sign: $-2x < 6$ → $x > -3$ (flipped from < to >). Forgetting to flip is the most common error. Compound inequalities like $-3 < 2x + 1 le 7$ solve by isolating $x$ in the middle.",
          },
        ],
        keyFormulas: [
          { name: "Linear equation", statement: "$ax + b = c \\Rightarrow x = \\frac{c-b}{a}$" },
          { name: "Inequality flip", statement: "Multiply/divide by negative → flip $<$ to $>$, $\\le$ to $\\ge$" },
        ],
        workedExample: {
          problem: "Solve $3x - 7 = 14$.",
          solution: "Add 7: $3x = 21$. Divide by 3: $x = 7$. Check: $3(7) - 7 = 21 - 7 = 14$. ✓",
        },
      },
      questions: [
        {
          id: "satm-u1-linear-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve $2x + 5 = 13$, first ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divide by 2"
                    },
                    {
                              "id": "b",
                              "text": "subtract 5"
                    },
                    {
                              "id": "c",
                              "text": "add 5"
                    },
                    {
                              "id": "d",
                              "text": "multiply by 2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reverse order",
                              "statement": "Undo addition first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Isolate $x$: undo $+5$ first by subtracting 5 → $2x = 8$, then divide by 2 → $x = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x = 4$",
          "commonErrors": [
                    "Dividing first — must undo addition before multiplication."
          ]
},
        },
        {
          id: "satm-u1-linear-equations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $-3x < 12$. The solution is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x < -4$"
                    },
                    {
                              "id": "b",
                              "text": "$x > -4$"
                    },
                    {
                              "id": "c",
                              "text": "$x < 4$"
                    },
                    {
                              "id": "d",
                              "text": "$x > 4$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Flip inequality",
                              "statement": "Negative division flips sign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide by $-3$ (negative) → flip $<$ to $>$: $x > -4$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x > -4$",
          "commonErrors": [
                    "Forgetting to flip — most common error."
          ]
},
        },
        {
          id: "satm-u1-linear-equations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $5(x - 2) = 3x + 4$. Enter the value of $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Distribute then isolate",
                              "statement": "Expand left side first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Distribute: $5x - 10 = 3x + 4$. Subtract $3x$: $2x - 10 = 4$. Add 10: $2x = 14$. Divide: $x = 7$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: $5(7-2) = 25$; $3(7)+4 = 25$. ✓",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 7$",
          "commonErrors": [
                    "Sign errors when distributing or moving terms."
          ]
},
        },
        {
          id: "satm-u1-linear-equations-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve the compound inequality $-4 \\le 2x - 3 < 7$ and express the answer as an interval or inequality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Isolate x in middle",
                              "statement": "Add 3 to all parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add 3 to all three parts: $-1 \\le 2x < 10$. Divide by 2 (positive, no flip): $-0.5 \\le x < 5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $-0.5 \\le x < 5$ (or $[-0.5, 5)$ in interval notation — note $-0.5$ included, $5$ excluded).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Watch the inequality directions carefully — the compound inequality preserves the relationships through each operation.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$-0.5 \\le x < 5$",
          "commonErrors": [
                    "Flipping signs when dividing by positive 2 — no flip needed."
          ]
},
        },
      ],
    },
  ],
};
