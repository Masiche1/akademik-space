import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m9-u3-lesson-3-1",
  code: "3-1",
  title: "Systems of Equations: Substitution",
  goal: "I CAN solve a system of two linear equations by substitution.",
  standards: ["A-REI.11", "A-REI.6"],
  vocabulary: [
    { term: "System of equations", definition: "Two or more equations with the same variables; a solution satisfies all of them." },
    { term: "Substitution", definition: "Solve one equation for a variable, then substitute into the other." },
    { term: "Consistent system", definition: "A system with exactly one solution." },
    { term: "Inconsistent system", definition: "A system with no solution — parallel lines." },
    { term: "Dependent system", definition: "A system with infinitely many solutions — same line." },
  ],
  concepts: [
    {
      id: "m9-u3-systems-substitution",
      title: "Substitution method",
      skill: "Isolate a variable, substitute, solve, then back-substitute.",
      lesson: {
        sections: [
          {
            heading: "When substitution works best",
            body: "Substitution is easiest when one equation already isolates a variable or has a coefficient of $1$. Solve that equation for the variable, substitute the expression into the other equation, solve for the remaining variable, then back-substitute to find the first.",
          },
          {
            heading: "Checking the solution",
            body: "A system's solution is an ordered pair $(x, y)$ that makes **both** equations true. Always verify in both original equations — an algebra slip can produce a pair that satisfies only one.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "Solve for one variable, plug into the other equation" },
          { name: "Solution check", statement: "The pair must satisfy every equation in the system" },
        ],
        workedExample: {
          problem: "Solve $y = 2x + 1$ and $3x + y = 11$.",
          solution: "Substitute: $3x + (2x + 1) = 11$, so $5x + 1 = 11$, $x = 2$. Then $y = 2(2) + 1 = 5$. Solution: $(2, 5)$. Check: $3(2)+5 = 11$. ✓",
        },
      },
      questions: [
        {
          id: "m9-u3-systems-substitution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The system $y = x + 2$ and $y = 2x - 1$ has solution ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(5, 3)$"
                    },
                    {
                              "id": "b",
                              "text": "$(3, 5)$"
                    },
                    {
                              "id": "c",
                              "text": "$(1, 3)$"
                    },
                    {
                              "id": "d",
                              "text": "$(3, 1)$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitute",
                              "statement": "Set the two expressions for $y$ equal and solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x + 2 = 2x - 1$ gives $x = 3$, then $y = 3 + 2 = 5$. Check: $2(3) - 1 = 5$ ✓.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** $(3, 5)$",
          "commonErrors": [
                    "Not checking the pair in both equations."
          ]
},
        },
        {
          id: "m9-u3-systems-substitution-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x + y = 7$ and $x - y = 1$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(3, 4)$"
                    },
                    {
                              "id": "b",
                              "text": "$(4, 3)$"
                    },
                    {
                              "id": "c",
                              "text": "$(2, 5)$"
                    },
                    {
                              "id": "d",
                              "text": "$(5, 2)$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add equations",
                              "statement": "Adding eliminates $y$: $2x = 8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2x = 8$, $x = 4$; then $y = 7 - 4 = 3$. Solution $(4, 3)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verified: $4 + 3 = 7$ and $4 - 3 = 1$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $(4, 3)$",
          "commonErrors": [
                    "Substituting incorrectly after finding $x$."
          ]
},
        },
        {
          id: "m9-u3-systems-substitution-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2x + y = 10$ and $x = y - 1$. Enter $x$ and $y$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$",
                              "answer": 3
                    },
                    {
                              "label": "$y$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitute",
                              "statement": "$2(y-1) + y = 10$ gives $3y = 12$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $x = y - 1$: $2(y-1) + y = 10$, so $3y = 12$ and $y = 4$, giving $x = 3$. Check: $2(3) + 4 = 10$ ✓.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct pair $(3,4)$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$(3, 4)$",
          "commonErrors": [
                    "Arithmetic slip when combining like terms."
          ]
},
        },
        {
          id: "m9-u3-systems-substitution-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A theater sells adult tickets for $\\$12$ and child tickets for $\\$7$. One night $240$ tickets sold for $\\$2{,}310$. How many of each were sold? Set up and solve a system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Define variables",
                              "statement": "$a$ = adult tickets, $c$ = child tickets."
                    },
                    {
                              "kind": "method",
                              "name": "System",
                              "statement": "$a + c = 240$; $12a + 7c = 2310$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "From first equation $a = 240 - c$; substitute: $12(240 - c) + 7c = 2310$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$2880 - 5c = 2310 \\Rightarrow c = 114$, so $a = 126$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: $126 + 114 = 240$ and $12(126) + 7(114) = 1512 + 798 = 2310$ ✓.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "126 adult, 114 child tickets",
          "commonErrors": [
                    "Swapping the two ticket prices in the revenue equation."
          ]
},
        },
      ],
    },
  ],
};
