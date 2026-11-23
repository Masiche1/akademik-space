import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m9-u1-lesson-1-3",
  code: "1-3",
  title: "Solving and Graphing Linear Inequalities",
  goal: "I CAN solve linear inequalities and graph their solutions on a number line.",
  standards: ["A-REI.3", "A-CED.1"],
  vocabulary: [
    { term: "Inequality", definition: "A statement that two expressions are not equal, using $<$, $>$, $\\le$, or $\\ge$." },
    { term: "Solution set", definition: "All values of the variable that make the inequality true." },
    { term: "Flip the sign", definition: "When multiplying or dividing both sides by a negative number, reverse the inequality symbol." },
    { term: "Boundary point", definition: "The value where the two sides are equal; the inequality is strict if it is not included." },
  ],
  concepts: [
    {
      id: "m9-u1-linear-inequalities",
      title: "Inequalities",
      skill: "Solve like equations, remembering to flip the sign when multiplying or dividing by a negative.",
      lesson: {
        sections: [
          {
            heading: "Solving inequalities",
            body: "Linear inequalities are solved with the same inverse operations as equations, but the answer is a range of values, not a single number. The critical rule: multiplying or dividing both sides by a **negative** number reverses the inequality symbol — $-2x < 8$ becomes $x > -4$, not $x < -4$.",
          },
          {
            heading: "Graphing on a number line",
            body: "Use an **open circle** for $<$ or $>$ (boundary not included) and a **closed circle** for $\\le$ or $\\ge$ (boundary included), then shade the ray in the direction of the solutions. For $x \\le 3$, shade left from a closed circle at $3$; for $x > -1$, shade right from an open circle at $-1$.",
          },
        ],
        keyFormulas: [
          { name: "Sign flip rule", statement: "Multiply or divide by a negative $\\Rightarrow$ reverse $<$ and $>$" },
          { name: "Boundary", statement: "Closed circle for $\\le, \\ge$; open circle for $<, >$" },
        ],
        workedExample: {
          problem: "Solve $-3x + 6 \\ge 15$ and describe its graph.",
          solution: "Subtract $6$: $-3x \\ge 9$. Divide by $-3$ and flip: $x \\le -3$. Graph: closed circle at $-3$, shaded left.",
        },
      },
      questions: [
        {
          id: "m9-u1-linear-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x - 5 < 8$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x < 13$"
                    },
                    {
                              "id": "b",
                              "text": "$x > 13$"
                    },
                    {
                              "id": "c",
                              "text": "$x < 3$"
                    },
                    {
                              "id": "d",
                              "text": "$x > 3$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inverse operations",
                              "statement": "Add $5$ to both sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x < 8 + 5 = 13$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $x < 13$",
          "commonErrors": [
                    "Subtracting instead of adding $5$."
          ]
},
        },
        {
          id: "m9-u1-linear-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-2x + 4 \\le 10$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x \\le -3$"
                    },
                    {
                              "id": "b",
                              "text": "$x \\ge -3$"
                    },
                    {
                              "id": "c",
                              "text": "$x \\le 3$"
                    },
                    {
                              "id": "d",
                              "text": "$x \\ge 3$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Sign flip",
                              "statement": "Dividing by $-2$ reverses $\\le$ to $\\ge$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtract $4$: $-2x \\le 6$. Divide by $-2$ and flip: $x \\ge -3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct flipped inequality.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $x \\ge -3$",
          "commonErrors": [
                    "Forgetting to flip the sign after dividing by $-2$."
          ]
},
        },
        {
          id: "m9-u1-linear-inequalities-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the inequality $3x - 7 > 8$, what is the smallest integer value of $x$ that works?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Smallest $x$",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve then test integers",
                              "statement": "$3x > 15$, so $x > 5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x > 5$ means the smallest integer is $6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct integer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 6$",
          "commonErrors": [
                    "Answering $5$, which does not satisfy the strict inequality."
          ]
},
        },
        {
          id: "m9-u1-linear-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone plan costs $\\$20$ plus $\\$0.10$ per text. You can spend at most $\\$35$. Write and solve an inequality for the number of texts $t$, then state whether $t = 160$ is allowed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Write the inequality",
                              "statement": "$20 + 0.10t \\le 35$."
                    },
                    {
                              "kind": "skill",
                              "name": "Interpret",
                              "statement": "Check the boundary case."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$0.10t \\le 15$, so $t \\le 150$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The plan allows at most $150$ texts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$t = 160$ gives cost $20 + 16 = \\$36 > \\$35$ — not allowed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$t \\le 150$; $160$ texts is not allowed",
          "commonErrors": [
                    "Using $<$ instead of $\\le$ and excluding exactly $150$."
          ]
},
        },
      ],
    },
  ],
};
