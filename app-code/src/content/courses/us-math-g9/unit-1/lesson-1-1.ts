import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m9-u1-lesson-1-1",
  code: "1-1",
  title: "Solving Multi-Step Linear Equations",
  goal: "I CAN solve multi-step linear equations and check my solutions.",
  standards: ["A-REI.3", "8.EE.C.7"],
  vocabulary: [
    { term: "Variable", definition: "A letter that stands for an unknown number, such as $x$." },
    { term: "Coefficient", definition: "The number multiplied by a variable, such as the $3$ in $3x$." },
    { term: "Inverse operations", definition: "Operations that undo each other: addition and subtraction, multiplication and division." },
    { term: "Solution", definition: "A value of the variable that makes the equation true." },
    { term: "Distributive property", definition: "$a(b + c) = ab + ac$ — used to remove parentheses." },
  ],
  concepts: [
    {
      id: "m9-u1-multi-step-equations",
      title: "Multi-step equations",
      skill: "Isolate the variable using inverse operations in the correct order.",
      lesson: {
        sections: [
          {
            heading: "The solving strategy",
            body: "To solve an equation, undo operations in reverse order of how they were applied to the variable. First simplify each side — distribute, combine like terms — then use inverse operations to isolate the variable, and always check by substituting back.",
          },
          {
            heading: "Equations with variables on both sides",
            body: "When variables appear on both sides, collect variable terms on one side first by adding or subtracting. For $3x + 4 = 2x + 10$, subtract $2x$ from both sides to get $x + 4 = 10$, then $x = 6$. Check: $3(6)+4 = 22$ and $2(6)+10 = 22$.",
          },
        ],
        keyFormulas: [
          { name: "Inverse operations", statement: "Add $\\leftrightarrow$ subtract, multiply $\\leftrightarrow$ divide" },
          { name: "Check a solution", statement: "Substitute the value back into the original equation" },
        ],
        workedExample: {
          problem: "Solve $5x - 7 = 2x + 11$.",
          solution: "Subtract $2x$ from both sides: $3x - 7 = 11$. Add $7$: $3x = 18$. Divide by $3$: $x = 6$. Check: $5(6) - 7 = 23$ and $2(6) + 11 = 23$.",
        },
      },
      questions: [
        {
          id: "m9-u1-multi-step-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve $4x + 9 = 25$, the first step is to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add $9$ to both sides"
                    },
                    {
                              "id": "b",
                              "text": "subtract $9$ from both sides"
                    },
                    {
                              "id": "c",
                              "text": "divide both sides by $4$"
                    },
                    {
                              "id": "d",
                              "text": "multiply both sides by $4$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inverse operations",
                              "statement": "Undo addition with subtraction first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$9$ is added to $4x$, so subtract $9$ from both sides to isolate the term with $x$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** subtract $9$ from both sides",
          "commonErrors": [
                    "Dividing first leaves $x + \\frac{9}{4} = \\frac{25}{4}$ — harder to finish."
          ]
},
        },
        {
          id: "m9-u1-multi-step-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3(x - 2) = 2x + 5$. What is $x$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x = 5$"
                    },
                    {
                              "id": "b",
                              "text": "$x = 11$"
                    },
                    {
                              "id": "c",
                              "text": "$x = -1$"
                    },
                    {
                              "id": "d",
                              "text": "$x = 1$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Distribute then isolate",
                              "statement": "Expand $3(x-2) = 3x - 6$, then collect terms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Distribute: $3x - 6 = 2x + 5$. Subtract $2x$: $x - 6 = 5$. Add $6$: $x = 11$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct solution $x = 11$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $x = 11$",
          "commonErrors": [
                    "Forgetting to distribute to both terms."
          ]
},
        },
        {
          id: "m9-u1-multi-step-equations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\frac{x}{3} + 4 = 10$. Enter the value of $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Clear the fraction",
                              "statement": "Subtract $4$ first, then multiply by $3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{x}{3} = 6$, so $x = 18$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 18$",
          "commonErrors": [
                    "Adding $4$ instead of subtracting, or forgetting to multiply by $3$."
          ]
},
        },
        {
          id: "m9-u1-multi-step-equations-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2(3x - 1) - 4 = 5x + 7$ and check your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Order of operations",
                              "statement": "Simplify both sides before collecting variable terms."
                    },
                    {
                              "kind": "skill",
                              "name": "Check",
                              "statement": "Substitute the solution back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Distribute: $6x - 2 - 4 = 5x + 7$, so $6x - 6 = 5x + 7$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subtract $5x$ and add $6$: $x = 13$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: $2(3 \\cdot 13 - 1) - 4 = 72$ and $5 \\cdot 13 + 7 = 72$ — solution verified.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 13$ (verified by substitution)",
          "commonErrors": [
                    "Sign error when distributing $-1$ inside parentheses."
          ]
},
        },
      ],
    },
  ],
};
