import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m9-u3-lesson-3-2",
  code: "3-2",
  title: "Systems of Equations: Elimination",
  goal: "I CAN solve systems by eliminating a variable through adding or subtracting equations.",
  standards: ["A-REI.11"],
  vocabulary: [
    { term: "Elimination", definition: "Adding or subtracting equations to cancel one variable." },
    { term: "Coefficient matching", definition: "Multiplying an equation by a constant so a variable's coefficients are opposites or equal." },
    { term: "No solution", definition: "The result $0 = \\text{nonzero}$ means the lines are parallel." },
    { term: "Infinitely many", definition: "The result $0 = 0$ means the equations describe the same line." },
  ],
  concepts: [
    {
      id: "m9-u3-systems-elimination",
      title: "Elimination method",
      skill: "Multiply equations to align coefficients, then add or subtract to eliminate.",
      lesson: {
        sections: [
          {
            heading: "Aligning coefficients",
            body: "If coefficients of a variable are already opposites (e.g., $y$ and $-y$), just add the equations. Otherwise multiply one or both equations by constants so the coefficients become opposites, then add. For $2x + 3y = 12$ and $4x - 3y = 6$, adding eliminates $y$ directly: $6x = 18$.",
          },
          {
            heading: "Special cases",
            body: "If elimination produces $0 = \\text{nonzero}$ (like $0 = 5$), the system is **inconsistent** — parallel lines, no solution. If it produces $0 = 0$, the equations are **dependent** — the same line, infinitely many solutions.",
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "Multiply to match coefficients, then add or subtract" },
          { name: "$0 = \\text{nonzero}$", statement: "Inconsistent — no solution; $0 = 0$ — dependent, infinite solutions" },
        ],
        workedExample: {
          problem: "Solve $3x + 2y = 16$ and $5x - 2y = 8$.",
          solution: "Add the equations: $8x = 24$, so $x = 3$. Substitute: $3(3) + 2y = 16 \\Rightarrow 2y = 7 \\Rightarrow y = 3.5$. Solution $(3, 3.5)$.",
        },
      },
      questions: [
        {
          id: "m9-u3-systems-elimination-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To eliminate $y$ in $2x + 5y = 9$ and $4x - 5y = 3$, you should ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add the equations"
                    },
                    {
                              "id": "b",
                              "text": "subtract the second from the first"
                    },
                    {
                              "id": "c",
                              "text": "multiply the first by $2$"
                    },
                    {
                              "id": "d",
                              "text": "divide both by $5$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Opposite coefficients",
                              "statement": "$+5y$ and $-5y$ cancel when added."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The $y$-coefficients are already opposites, so adding eliminates $y$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** add the equations",
          "commonErrors": [
                    "Multiplying when coefficients already match."
          ]
},
        },
        {
          id: "m9-u3-systems-elimination-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x + y = 10$ and $2x - y = 5$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(3, 7)$"
                    },
                    {
                              "id": "b",
                              "text": "$(5, 5)$"
                    },
                    {
                              "id": "c",
                              "text": "$(4, 6)$"
                    },
                    {
                              "id": "d",
                              "text": "$(6, 4)$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add to eliminate",
                              "statement": "$3x = 15$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3x = 15 \\Rightarrow x = 5$; $y = 10 - 5 = 5$. Solution $(5, 5)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verified in both equations.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $(5, 5)$",
          "commonErrors": [
                    "Adding $y$-terms with the same sign instead of cancelling."
          ]
},
        },
        {
          id: "m9-u3-systems-elimination-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4x + 3y = 18$ and $2x + 3y = 10$. Enter $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$x$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract equations",
                              "statement": "Subtracting eliminates $y$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(4x+3y)-(2x+3y) = 18-10 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value; $y = 2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 4$",
          "commonErrors": [
                    "Subtracting only part of the second equation."
          ]
},
        },
        {
          id: "m9-u3-systems-elimination-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2x + 3y = 7$ and $4x + 6y = 14$. How many solutions does the system have and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare equations",
                              "statement": "Second equation is exactly $2 \\times$ the first."
                    },
                    {
                              "kind": "concept",
                              "name": "Dependent system",
                              "statement": "Same line — infinitely many solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The second equation equals twice the first, so both describe the same line.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Elimination gives $0 = 0$, confirming dependence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Infinitely many solutions — every point on the line works.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Infinitely many solutions (dependent system)",
          "commonErrors": [
                    "Reporting one solution without checking the equations' relationship."
          ]
},
        },
      ],
    },
  ],
};
