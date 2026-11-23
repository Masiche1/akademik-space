import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "satm-u1-lesson-1-3",
  code: "1-3",
  title: "Systems of Equations",
  goal: "I CAN solve systems by substitution and elimination.",
  standards: ["SAT M 1.x"],
  vocabulary: [
    { term: "System", definition: "Two or more equations with shared variables." },
    { term: "Substitution", definition: "Solve one equation for a variable, plug into other." },
    { term: "Elimination", definition: "Add/subtract equations to cancel a variable." },
    { term: "No solution", definition: "Parallel lines — equations inconsistent." },
    { term: "Infinite solutions", definition: "Same line — equations dependent." },
    { term: "Graphical solution", definition: "Intersection point of lines." },
  ],
  concepts: [
    {
      id: "satm-u1-systems",
      title: "Systems of equations",
      skill: "Solve systems algebraically and interpret solutions.",
      lesson: {
        sections: [
          {
            heading: "Substitution",
            body: "Best when a variable has coefficient 1 or is easy to isolate. Solve one equation for $x$ (or $y$), substitute into the other, solve for the remaining variable, back-substitute. Example: $y = 2x + 1$ and $3x + y = 11$ → substitute: $3x + (2x+1) = 11$ → $5x = 10$ → $x = 2$, $y = 5$.",
          },
          {
            heading: "Elimination",
            body: "Best when coefficients are similar. Multiply equations to match coefficients, add or subtract to eliminate a variable. $2x + 3y = 12$ and $4x - 3y = 6$: add → $6x = 18$ → $x = 3$, then solve for $y$. Check solution count: one solution (lines intersect), no solution (parallel), infinite (same line).",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "Isolate variable → plug into other equation" },
          { name: "Elimination", statement: "Match coefficients → add/subtract to cancel" },
        ],
        workedExample: {
          problem: "Solve $x + y = 10$ and $x - y = 4$.",
          solution: "Add equations: $2x = 14$ → $x = 7$. Substitute: $7 + y = 10$ → $y = 3$. Check: $7 - 3 = 4$. ✓",
        },
      },
      questions: [
        {
          id: "satm-u1-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A system of equations has ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one equation"
                    },
                    {
                              "id": "b",
                              "text": "two or more equations with shared variables"
                    },
                    {
                              "id": "c",
                              "text": "only linear terms"
                    },
                    {
                              "id": "d",
                              "text": "no variables"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "System",
                              "statement": "Multiple equations, shared variables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A system is multiple equations that must ALL be satisfied simultaneously — the solution is where they intersect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Multiple equations",
          "commonErrors": [
                    "Thinking one equation suffices."
          ]
},
        },
        {
          id: "satm-u1-systems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $y = x + 2$ and $2x + y = 8$, substitution gives ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2x + x + 2 = 8$"
                    },
                    {
                              "id": "b",
                              "text": "$2x + x = 8$"
                    },
                    {
                              "id": "c",
                              "text": "$x + 2 + y = 8$"
                    },
                    {
                              "id": "d",
                              "text": "$2y + x = 8$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitute y",
                              "statement": "Replace y with x+2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $y = x+2$ into $2x + y = 8$: $2x + (x+2) = 8$ → $3x + 2 = 8$ → $x = 2$, $y = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$2x + x + 2 = 8$",
          "commonErrors": [
                    "Substituting into wrong equation or wrong variable."
          ]
},
        },
        {
          id: "satm-u1-systems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve the system $2x + y = 7$ and $x - y = 2$. What is $x + y$?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x+y",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Elimination",
                              "statement": "Add equations to cancel y."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Add: $3x = 9$ → $x = 3$. Substitute into $x - y = 2$: $3 - y = 2$ → $y = 1$. So $x + y = 3 + 1 = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: $2(3)+1 = 7$ ✓ and $3-1 = 2$ ✓.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Arithmetic slip — verify by substitution."
          ]
},
        },
        {
          id: "satm-u1-systems-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many solutions does the system $2x + 4y = 8$ and $x + 2y = 4$ have? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Dependent equations",
                              "statement": "Same line = infinite solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide first equation by 2: $x + 2y = 4$ — IDENTICAL to second equation; they're the same line → infinitely many solutions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Any point on the line satisfies both — e.g., $(0,2)$: $0+4=4$ ✓ and $0+4=4$ ✓.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Contrast: parallel lines (same slope, different intercept) → no solution; intersecting → one solution.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Infinite solutions — same line",
          "commonErrors": [
                    "Assuming every system has exactly one solution."
          ]
},
        },
      ],
    },
  ],
};
