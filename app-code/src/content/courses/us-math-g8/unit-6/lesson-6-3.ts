import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m8-u6-lesson-6-3",
  code: "6-3",
  title: "Systems of Linear Equations",
  goal: "I CAN solve systems of linear equations by graphing, substitution, and elimination, and interpret solutions.",
  standards: ["8.EE.C.7", "8.EE.C.8", "8.EE.C.8a", "8.EE.C.8b", "8.EE.C.8c"],
  vocabulary: [
    {
      term: "System of equations",
      definition: "Two or more equations with the same variables.",
    },
    {
      term: "Solution",
      definition: "The point that satisfies all equations in the system.",
    },
    {
      term: "Substitution",
      definition: "Solving by replacing one variable with an expression.",
    },
    {
      term: "Elimination",
      definition:
        "Solving by adding or subtracting equations to eliminate a variable.",
    },
    {
      term: "Consistent system",
      definition: "A system with at least one solution.",
    },
    {
      term: "Inconsistent system",
      definition: "A system with no solution (parallel lines).",
    },
  ],
  concepts: [
    {
      id: "m8-u6-systems-graphing",
      title: "Solving systems by graphing",
      skill:
        "Solve systems of linear equations by graphing and identifying intersection points.",
      lesson: {
        sections: [
          {
            heading: "Graphical method",
            body: "To solve a system by graphing: graph both lines on the same coordinate plane; the intersection point is the solution. For $y = x + 1$ and $y = -x + 3$: they intersect at $(1, 2)$.",
          },
          {
            heading: "Types of solutions",
            body: "**One solution**: lines intersect at one point. **No solution**: parallel lines (same slope, different intercepts). **Infinite solutions**: same line (identical equations).",
          },
          {
            heading: "Checking solutions",
            body: "Verify by substituting the solution into both equations. For $(1, 2)$ in $y = x + 1$: $2 = 1 + 1$ ✓; in $y = -x + 3$: $2 = -1 + 3$ ✓.",
          },
        ],
        keyFormulas: [
          {
            name: "Intersection",
            statement: "Solution = point where lines meet",
          },
          {
            name: "Parallel",
            statement: "Same slope, different intercept → no solution",
          },
          {
            name: "Same line",
            statement: "Identical equations → infinite solutions",
          },
        ],
        workedExample: {
          problem: "Solve $y = 2x$ and $y = x + 3$ by graphing.",
          solution:
            "Lines intersect at $(3, 6)$: check $6 = 2(3)$ ✓ and $6 = 3 + 3$ ✓.",
        },
      },
      questions: [
        {
          id: "m8-u6-systems-graphing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution to $y = x$ and $y = 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 2)$" },
              { id: "b", text: "$(1, 2)$" },
              { id: "c", text: "$(2, 1)$" },
              { id: "d", text: "No solution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Graphing",
                statement: "Find intersection.",
              },
            ],
            steps: [
              {
                reasoning: "$y = x$ and $y = 2$ intersect at $(2, 2)$.",
                evidence: "(2,2)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(2, 2)$",
            commonErrors: ["Not checking both equations."],
          },
        },
        {
          id: "m8-u6-systems-graphing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Do $y = 2x + 1$ and $y = 2x - 3$ have a solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, one solution" },
              { id: "b", text: "No, parallel lines" },
              { id: "c", text: "Infinite solutions" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "System types",
                statement: "Same slope = parallel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both have slope $2$ but different intercepts → parallel → no solution.",
                evidence: "parallel",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** No, parallel lines",
            commonErrors: ["Not checking slopes."],
          },
        },
        {
          id: "m8-u6-systems-graphing-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each system by graphing.",
          parts: [
            { label: "a", prompt: "$y = x$ and $y = 3$", marks: 1 },
            { label: "b", prompt: "$y = x + 1$ and $y = -x + 5$", marks: 1 },
            { label: "c", prompt: "$y = 2x$ and $y = x + 4$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Graphing",
                statement: "Find intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Intersection at $(3, 3)$.",
                evidence: "(3,3)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$x + 1 = -x + 5$ → $2x = 4$ → $x = 2$, $y = 3$; intersection $(2, 3)$.",
                evidence: "(2,3)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$2x = x + 4$ → $x = 4$, $y = 8$; intersection $(4, 8)$.",
                evidence: "(4,8)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(3, 3)$ (b) $(2, 3)$ (c) $(4, 8)$",
            commonErrors: ["In (b), not setting equations equal."],
          },
        },
        {
          id: "m8-u6-systems-graphing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each system.",
          parts: [
            { label: "a", prompt: "$y = 3x - 2$ and $y = x + 4$", marks: 2 },
            { label: "b", prompt: "$y = -x + 6$ and $y = 2x - 3$", marks: 2 },
            {
              label: "c",
              prompt: "$y = \\frac{1}{2}x + 1$ and $y = -\\frac{1}{2}x + 5$",
              marks: 2,
            },
            { label: "d", prompt: "$y = 4x$ and $y = 4x - 2$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Graphing",
                statement: "Find intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$3x - 2 = x + 4$ → $2x = 6$ → $x = 3$, $y = 7$; $(3, 7)$.",
                evidence: "(3,7)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$-x + 6 = 2x - 3$ → $9 = 3x$ → $x = 3$, $y = 3$; $(3, 3)$.",
                evidence: "(3,3)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\frac{1}{2}x + 1 = -\\frac{1}{2}x + 5$ → $x = 4$, $y = 3$; $(4, 3)$.",
                evidence: "(4,3)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Same slope $4$, different intercepts → parallel → no solution.",
                evidence: "no solution",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $(3, 7)$ (b) $(3, 3)$ (c) $(4, 3)$ (d) No solution",
            commonErrors: ["In (d), not recognizing parallel lines."],
          },
        },
      ],
    },
    {
      id: "m8-u6-systems-substitution",
      title: "Solving systems by substitution",
      skill: "Solve systems by substituting one equation into another.",
      lesson: {
        sections: [
          {
            heading: "Substitution method",
            body: "Solve one equation for one variable, then substitute into the other equation. For $y = x + 1$ and $2x + y = 7$: substitute $y = x + 1$ into second: $2x + (x + 1) = 7$ → $3x + 1 = 7$ → $3x = 6$ → $x = 2$, $y = 3$.",
          },
          {
            heading: "When to use substitution",
            body: "Substitution works well when one equation is already solved for a variable, or when coefficients are simple. For $y = 3x$ and $x + y = 8$: substitute $y = 3x$: $x + 3x = 8$ → $4x = 8$ → $x = 2$, $y = 6$.",
          },
          {
            heading: "Checking solutions",
            body: "Always verify by substituting into both original equations. For $(2, 3)$: $y = x + 1$ → $3 = 2 + 1$ ✓; $2x + y = 7$ → $4 + 3 = 7$ ✓.",
          },
        ],
        keyFormulas: [
          { name: "Substitute", statement: "Replace variable with expression" },
          { name: "Solve", statement: "Isolate remaining variable" },
          { name: "Back-substitute", statement: "Find second variable" },
        ],
        workedExample: {
          problem: "Solve $y = 2x - 1$ and $x + y = 5$.",
          solution:
            "Substitute: $x + (2x - 1) = 5$ → $3x - 1 = 5$ → $3x = 6$ → $x = 2$; $y = 2(2) - 1 = 3$.",
        },
      },
      questions: [
        {
          id: "m8-u6-systems-substitution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $y = x$ and $x + y = 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 2)$" },
              { id: "b", text: "$(1, 3)$" },
              { id: "c", text: "$(3, 1)$" },
              { id: "d", text: "$(4, 0)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement: "Replace and solve.",
              },
            ],
            steps: [
              {
                reasoning: "$x + x = 4$ → $2x = 4$ → $x = 2$, $y = 2$.",
                evidence: "(2,2)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(2, 2)$",
            commonErrors: ["Not substituting correctly."],
          },
        },
        {
          id: "m8-u6-systems-substitution-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $y = 2x + 1$ and $x + y = 7$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement: "Replace and solve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x + (2x + 1) = 7$ → $3x + 1 = 7$ → $3x = 6$ → $x = 2$.",
                working: "x = 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 2$, $y = 5$",
            commonErrors: ["Not back-substituting for y."],
          },
        },
        {
          id: "m8-u6-systems-substitution-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each system by substitution.",
          parts: [
            { label: "a", prompt: "$y = x + 2$ and $2x + y = 8$", marks: 1 },
            { label: "b", prompt: "$y = 3x$ and $x + y = 8$", marks: 1 },
            { label: "c", prompt: "$x = y - 1$ and $x + y = 7$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement: "Replace and solve.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$2x + (x + 2) = 8$ → $3x = 6$ → $x = 2$, $y = 4$.",
                evidence: "(2,4)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$x + 3x = 8$ → $4x = 8$ → $x = 2$, $y = 6$.",
                evidence: "(2,6)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(y - 1) + y = 7$ → $2y = 8$ → $y = 4$, $x = 3$.",
                evidence: "(3,4)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(2, 4)$ (b) $(2, 6)$ (c) $(3, 4)$",
            commonErrors: ["In (c), not substituting x correctly."],
          },
        },
        {
          id: "m8-u6-systems-substitution-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each system by substitution.",
          parts: [
            { label: "a", prompt: "$y = 3x - 1$ and $2x + y = 9$", marks: 2 },
            { label: "b", prompt: "$x = 2y + 3$ and $x + y = 9$", marks: 2 },
            { label: "c", prompt: "$y = -x + 5$ and $3x + y = 7$", marks: 2 },
            { label: "d", prompt: "$2x = y + 4$ and $y = x + 1$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement: "Replace and solve.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$2x + (3x - 1) = 9$ → $5x = 10$ → $x = 2$, $y = 5$.",
                evidence: "(2,5)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(2y + 3) + y = 9$ → $3y = 6$ → $y = 2$, $x = 7$.",
                evidence: "(7,2)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$3x + (-x + 5) = 7$ → $2x = 2$ → $x = 1$, $y = 4$.",
                evidence: "(1,4)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$2x = (x + 1) + 4$ → $2x = x + 5$ → $x = 5$, $y = 6$.",
                evidence: "(5,6)",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(2, 5)$ (b) $(7, 2)$ (c) $(1, 4)$ (d) $(5, 6)$",
            commonErrors: ["In (d), not distributing correctly."],
          },
        },
      ],
    },
    {
      id: "m8-u6-systems-elimination",
      title: "Solving systems by elimination",
      skill:
        "Solve systems by adding or subtracting equations to eliminate a variable.",
      lesson: {
        sections: [
          {
            heading: "Elimination method",
            body: "To eliminate $x$: add or subtract equations so $x$ terms cancel. For $x + y = 5$ and $x - y = 1$: add them: $2x = 6$ → $x = 3$; substitute back: $y = 2$.",
          },
          {
            heading: "Multiplying to eliminate",
            body: "If coefficients don't match, multiply one or both equations. For $2x + 3y = 12$ and $4x - y = 10$: multiply second by $3$: $12x - 3y = 30$; add to first: $14x = 42$ → $x = 3$, $y = 2$.",
          },
          {
            heading: "Choosing method",
            body: "Use substitution when a variable is isolated or coefficients are 1. Use elimination when coefficients are similar or opposite. Graphing is best for visual understanding.",
          },
        ],
        keyFormulas: [
          {
            name: "Add/subtract",
            statement: "Make variable coefficients cancel",
          },
          {
            name: "Multiply",
            statement: "Scale equations to match coefficients",
          },
          { name: "Back-substitute", statement: "Find second variable" },
        ],
        workedExample: {
          problem: "Solve $2x + y = 7$ and $x - y = 2$.",
          solution: "Add equations: $3x = 9$ → $x = 3$; substitute: $y = 1$.",
        },
      },
      questions: [
        {
          id: "m8-u6-systems-elimination-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + y = 5$ and $x - y = 1$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 2)$" },
              { id: "b", text: "$(2, 3)$" },
              { id: "c", text: "$(4, 1)$" },
              { id: "d", text: "$(1, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Elimination",
                statement: "Add to eliminate.",
              },
            ],
            steps: [
              {
                reasoning: "Add: $2x = 6$ → $x = 3$; $y = 2$.",
                evidence: "(3,2)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(3, 2)$",
            commonErrors: ["Not adding equations correctly."],
          },
        },
        {
          id: "m8-u6-systems-elimination-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2x + y = 8$ and $x - y = 1$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 3 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Elimination",
                statement: "Add to eliminate.",
              },
            ],
            steps: [
              {
                reasoning: "Add: $3x = 9$ → $x = 3$.",
                working: "x = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 3$, $y = 2$",
            commonErrors: ["Not adding equations correctly."],
          },
        },
        {
          id: "m8-u6-systems-elimination-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each system by elimination.",
          parts: [
            { label: "a", prompt: "$x + y = 7$ and $x - y = 3$", marks: 1 },
            { label: "b", prompt: "$2x + y = 9$ and $x + y = 5$", marks: 1 },
            { label: "c", prompt: "$3x - y = 8$ and $x + y = 4$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Elimination",
                statement: "Add/subtract to eliminate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Add: $2x = 10$ → $x = 5$, $y = 2$.",
                evidence: "(5,2)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Subtract: $x = 4$, $y = 1$.",
                evidence: "(4,1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Add: $4x = 12$ → $x = 3$, $y = 1$.",
                evidence: "(3,1)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(5, 2)$ (b) $(4, 1)$ (c) $(3, 1)$",
            commonErrors: ["In (b), not subtracting correctly."],
          },
        },
        {
          id: "m8-u6-systems-elimination-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each system by elimination.",
          parts: [
            {
              label: "a",
              prompt: "$2x + 3y = 12$ and $4x - y = 10$",
              marks: 2,
            },
            { label: "b", prompt: "$3x + 2y = 12$ and $x - y = 1$", marks: 2 },
            {
              label: "c",
              prompt: "$5x + 2y = 16$ and $3x - 2y = 8$",
              marks: 2,
            },
            { label: "d", prompt: "$4x + 3y = 10$ and $2x - y = 3$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Elimination",
                statement: "Multiply and add/subtract.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Multiply second by $3$: $12x - 3y = 30$; add: $14x = 42$ → $x = 3$, $y = 2$.",
                evidence: "(3,2)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Multiply second by $2$: $2x - 2y = 2$; add to first: $5x = 14$ → $x = \\frac{14}{5}$; $y = \\frac{14}{5} - 1 = \\frac{9}{5}$.",
                evidence: "(14/5, 9/5)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Add: $8x = 24$ → $x = 3$; substitute: $5(3) + 2y = 16$ → $15 + 2y = 16$ → $y = 0.5$.",
                evidence: "(3,0.5)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Multiply second by $3$: $6x - 3y = 9$; add to first: $10x = 19$ → $x = \\frac{19}{10}$; $y = 2x - 3 = \\frac{38}{10} - 3 = \\frac{8}{10} = \\frac{4}{5}$.",
                evidence: "(19/10, 4/5)",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $(3, 2)$ (b) $(2.8, 1.8)$ (c) $(3, 0.5)$ (d) $(1.9, 0.8)$",
            commonErrors: ["In (b) and (d), arithmetic errors."],
          },
        },
      ],
    },
  ],
};
