import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ciam-u8-lesson-8-1",
  code: "8-1",
  title: "Simultaneous Equations",
  goal: "I CAN solve simultaneous equations algebraically and graphically.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: simultaneous equations"],
  vocabulary: [
    { term: "Simultaneous equations", definition: "Set of equations solved together." },
    { term: "Substitution", definition: "Replacing a variable using another equation." },
    { term: "Elimination", definition: "Adding/subtracting equations to remove a variable." },
    { term: "Linear × quadratic", definition: "One linear and one quadratic equation in two unknowns." },
  ],
  concepts: [
    {
      id: "ciam-u8-s1-simultaneous",
      title: "Solving simultaneous equations",
      skill: "Solve linear-linear and linear-quadratic systems.",
      lesson: {
        sections: [
          {
            heading: "Two linear equations",
            body: "Use elimination (add/subtract to cancel a variable) or substitution (rearrange one equation and substitute into the other). Graphically, the solution is the intersection point of the two lines — one solution if gradients differ, none if parallel, infinitely many if identical.",
          },
          {
            heading: "Linear and quadratic",
            body: "From the linear equation, express one variable (e.g. $y = mx + c$) and substitute into the quadratic to get a quadratic in one variable — solve, then back-substitute for the other variable. There can be 0, 1 or 2 solutions depending on whether the line misses, touches or cuts the curve.",
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "Add/subtract equations to cancel a variable" },
          { name: "Substitution", statement: "$y = mx + c$ into the quadratic" },
        ],
        workedExample: {
          problem: "Solve $y = x + 1$ and $y = x^2 - 3$ simultaneously.",
          solution: "$x + 1 = x^2 - 3 \\Rightarrow x^2 - x - 4 = 0 \\Rightarrow x = \\frac{1 \\pm \\sqrt{17}}{2}$.",
        },
      },
      questions: [
        {
          id: "ciam-u8-sq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + y = 7$ and $x - y = 1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "$x=3, y=4$" },
            { id: "c", text: "$x=4, y=3$" },
            { id: "d", text: "$x=5, y=2$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add equations." }],
            steps: [{ reasoning: "Adding: $2x = 8 \\Rightarrow x = 4$, $y = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=4, y=3$",
          },
        },
        {
          id: "ciam-u8-sq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $2x + y = 8$ and $x - y = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add to cancel y." }],
            steps: [
              { reasoning: "Adding: $3x = 9 \\Rightarrow x = 3$, then $y = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(3, 2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 2)$",
          },
        },
        {
          id: "ciam-u8-sq-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $y = 2x$ and $y = x^2 - 3x + 4$ simultaneously.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Equate and solve quadratic." }],
            steps: [
              { reasoning: "$2x = x^2 - 3x + 4 \\Rightarrow x^2 - 5x + 4 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(x-1)(x-4) = 0 \\Rightarrow x = 1, 4$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 2x \\Rightarrow y = 2, 8$.", marks: 1, markCode: "M" },
              { reasoning: "Solutions: $(1,2)$ and $(4,8)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,2)$ and $(4,8)$",
          },
        },
        {
          id: "ciam-u8-sq-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How many solutions do $y = x + 2$ and $y = x^2$ have? Explain geometrically.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection", statement: "Solve then interpret." }],
            steps: [
              { reasoning: "$x + 2 = x^2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 2, -1$; two solutions $(2,4)$ and $(-1,1)$.", marks: 1, markCode: "M" },
              { reasoning: "Two intersection points of line and parabola.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two solutions",
          },
        },
        {
          id: "ciam-u8-sq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + y = 9$ and $x - y = 3$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=6, y=3$" },
            { id: "b", text: "$x=3, y=6$" },
            { id: "c", text: "$x=5, y=4$" },
            { id: "d", text: "$x=4, y=5$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add equations." }],
            steps: [{ reasoning: "Adding: $2x = 12 \\Rightarrow x = 6$, then $y = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=6, y=3$",
          },
        },
        {
          id: "ciam-u8-sq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $3x + y = 12$ and $x + y = 4$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Subtract equations." }],
            steps: [
              { reasoning: "Subtracting: $2x = 8 \\Rightarrow x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 4$ (and $y = 0$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciam-u8-sq-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2x + y = 10$ and $x - 2y = -5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Rearrange and substitute." }],
            steps: [
              { reasoning: "$y = 10 - 2x$; substitute: $x - 2(10 - 2x) = -5$.", marks: 1, markCode: "M" },
              { reasoning: "$5x - 20 = -5 \\Rightarrow x = 3$, then $y = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Solution: $(3, 4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,4)$",
          },
        },
        {
          id: "ciam-u8-sq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many solutions do $y = x + 1$ and $y = x^2 - 5$ have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Infinitely many" },
            { id: "b", text: "One" },
            { id: "c", text: "Two" },
            { id: "d", text: "None" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection", statement: "Solve the resulting quadratic." }],
            steps: [{ reasoning: "$x + 1 = x^2 - 5 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x-3)(x+2) = 0$: two solutions.", marks: 1, markCode: "A" }],
            finalAnswer: "Two solutions",
          },
        },
        {
          id: "ciam-u8-sq-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $y = 2x - 1$ and $y = x^2 - 2x + 3$ simultaneously.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Equate expressions for y." }],
            steps: [
              { reasoning: "$2x - 1 = x^2 - 2x + 3$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 - 4x + 4 = 0 \\Rightarrow (x - 2)^2 = 0 \\Rightarrow x = 2$ (repeated root).", marks: 1, markCode: "M" },
              { reasoning: "$y = 2(2) - 1 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "One solution: $(2, 3)$ — the line touches the parabola.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,3)$",
          },
        },
        {
          id: "ciam-u8-sq-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What can be said about the equations $x + y = 5$ and $x + y = 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "Two solutions" },
            { id: "c", text: "Infinitely many solutions" },
            { id: "d", text: "One solution" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Consistency", statement: "Parallel lines never meet." }],
            steps: [{ reasoning: "Subtracting gives $0 = -2$, impossible — the lines are parallel with no solution.", marks: 1, markCode: "A" }],
            finalAnswer: "No solution",
          },
        },
        {
          id: "ciam-u8-sq-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $y = x^2$ and $y = 2x + 3$. Give the $x$-coordinates of the intersection points.",
          response: { type: "numeric", unordered: true, parts: [{ label: "a", answer: 3 }, { label: "b", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Equate and factorize." }],
            steps: [
              { reasoning: "$x^2 = 2x + 3 \\Rightarrow x^2 - 2x - 3 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(x - 3)(x + 1) = 0 \\Rightarrow x = 3$ or $x = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 3, -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ and $x=-1$",
          },
        },
        {
          id: "ciam-u8-sq-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Solve $y = x^2 - 4$ and $y = 2x - 1$ simultaneously.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Equate and solve quadratic." }],
            steps: [
              { reasoning: "$x^2 - 4 = 2x - 1$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 - 2x - 3 = 0 \\Rightarrow (x - 3)(x + 1) = 0 \\Rightarrow x = 3, -1$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 3 \\Rightarrow y = 2(3) - 1 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$x = -1 \\Rightarrow y = 2(-1) - 1 = -3$.", marks: 1, markCode: "M" },
              { reasoning: "Solutions: $(3, 5)$ and $(-1, -3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,5)$ and $(-1,-3)$",
          },
        },
        {
          id: "ciam-u8-sq-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $3x + y = 11$ and $x + y = 5$, find $y$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "4" },
            { id: "c", text: "3" },
            { id: "d", text: "5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Subtract equations." }],
            steps: [{ reasoning: "Subtracting: $2x = 6 \\Rightarrow x = 3$, then $y = 5 - 3 = 2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$y=2$",
          },
        },
        {
          id: "ciam-u8-sq-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x + 2y = 12$ and $x - 2y = -4$. Find $y$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add equations to cancel y." }],
            steps: [
              { reasoning: "Adding: $4x = 8 \\Rightarrow x = 2$; then $2 - 2y = -4 \\Rightarrow y = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y = 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciam-u8-sq-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two numbers have sum 9 and product 20. Find the larger number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "Use sum and product to form a quadratic." }],
            steps: [
              { reasoning: "Let the numbers be $t$ and $9 - t$: $t(9 - t) = 20$.", marks: 1, markCode: "M" },
              { reasoning: "$t^2 - 9t + 20 = 0 \\Rightarrow (t - 4)(t - 5) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$t = 4$ or $t = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: the larger number is 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciam-u8-sq-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $x + 2y = 8$ and $3x - y = 3$. The solution is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(1, 3)$" },
            { id: "b", text: "$(3, 2)$" },
            { id: "c", text: "$(2, 3)$" },
            { id: "d", text: "$(4, 2)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Check each pair or solve." }],
            steps: [{ reasoning: "$y = 3x - 3$; substituting: $x + 2(3x - 3) = 8 \\Rightarrow x = 2$, $y = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(2,3)$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u8-sq-notes",
      title: "Simultaneous equations — revision notes",
      summary: "Eliminate or substitute; line × curve gives up to 2 solutions.",
      sections: [
        { heading: "Linear pairs", body: "Eliminate a variable or substitute; graphical solution = intersection." },
        { heading: "Linear × quadratic", body: "Substitute $y=mx+c$ into the quadratic; up to 2 solutions." },
      ],
    },
  ],
};
