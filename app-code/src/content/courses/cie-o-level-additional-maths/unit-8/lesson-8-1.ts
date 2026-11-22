import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "olam-u8-lesson-8-1",
  code: "8-1",
  title: "Simultaneous Equations",
  goal: "I CAN solve simultaneous equations algebraically and graphically.",
  standards: ["Cambridge O Level Additional Mathematics 4037: simultaneous equations"],
  vocabulary: [
    { term: "Simultaneous equations", definition: "Set of equations solved together." },
    { term: "Substitution", definition: "Replacing a variable using another equation." },
    { term: "Elimination", definition: "Adding/subtracting equations to remove a variable." },
    { term: "Linear × quadratic", definition: "One linear and one quadratic equation in two unknowns." },
  ],
  concepts: [
    {
      id: "olam-u8-s1-simultaneous",
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
          id: "olam-u8-sq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + y = 7$ and $x - y = 1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=5, y=2$" },
            { id: "b", text: "$x=3, y=4$" },
            { id: "c", text: "$x=4, y=3$" },
            { id: "d", text: "No solution" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add equations." }],
            steps: [{ reasoning: "Adding: $2x = 8 \\Rightarrow x = 4$, $y = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=4, y=3$",
          },
        },
        {
          id: "olam-u8-sq-q2",
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
          id: "olam-u8-sq-q3",
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
          id: "olam-u8-sq-q4",
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
          id: "olam-u8-sq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + y = 10$ and $x - y = 4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=6, y=4$" },
            { id: "b", text: "$x=3, y=7$" },
            { id: "c", text: "$x=8, y=2$" },
            { id: "d", text: "$x=7, y=3$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add equations." }],
            steps: [{ reasoning: "Adding: $2x = 14 \\Rightarrow x = 7$, then $y = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** $x=7, y=3$",
          },
        },
        {
          id: "olam-u8-sq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve the simultaneous equations $3x + y = 14$ and $x + y = 6$. Give your answer as the values of $x$ and $y$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4 }, { label: "b", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Subtract to cancel $y$." }],
            steps: [
              { reasoning: "Subtracting: $2x = 8 \\Rightarrow x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 6 - 4 = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4, y=2$",
          },
        },
        {
          id: "olam-u8-sq-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $2x + y = 9$ and $x - y = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Elimination", statement: "Add to cancel $y$." }],
            steps: [
              { reasoning: "Adding: $3x = 12 \\Rightarrow x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$y = 1$; answer $(4, 1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4, 1)$",
          },
        },
        {
          id: "olam-u8-sq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $x + 2y = 7$ and $3x - y = 1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=3, y=2$" },
            { id: "b", text: "$x=2, y=2$" },
            { id: "c", text: "$x=1, y=3$" },
            { id: "d", text: "$x=1, y=2$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "From first: $x = 7 - 2y$; substitute." }],
            steps: [{ reasoning: "$3(7-2y) - y = 1 \\Rightarrow 21 - 7y = 1 \\Rightarrow y = 3$, $x = 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** $x=1, y=3$",
          },
        },
        {
          id: "olam-u8-sq-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $y = 2x$ and $y = x^2 - x$ simultaneously. Give the values of $x$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0 }, { label: "b", answer: 3 },
          ], unordered: true },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Equate and solve quadratic." }],
            steps: [
              { reasoning: "$2x = x^2 - x \\Rightarrow x^2 - 3x = 0 \\Rightarrow x(x-3)=0$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 0$.", marks: 1, markCode: "A" },
              { reasoning: "$x = 3$ (then $y = 6$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0$ or $x=3$",
          },
        },
        {
          id: "olam-u8-sq-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $y = x^2 - 2x$ and $y = x - 2$ simultaneously.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Equate expressions for $y$." }],
            steps: [
              { reasoning: "$x - 2 = x^2 - 2x \\Rightarrow x^2 - 3x + 2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$(x-1)(x-2)=0 \\Rightarrow x = 1, 2$.", marks: 1, markCode: "M" },
              { reasoning: "$y = x - 2 \\Rightarrow y = -1, 0$.", marks: 1, markCode: "M" },
              { reasoning: "Solutions: $(1,-1)$ and $(2,0)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,-1)$ and $(2,0)$",
          },
        },
        {
          id: "olam-u8-sq-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many solutions do the equations $y = 0$ and $y = x^2 + 1$ have when solved simultaneously?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "Two solutions" },
            { id: "c", text: "One solution" },
            { id: "d", text: "Infinitely many solutions" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Graphical interpretation", statement: "Line below the parabola never meets it." }],
            steps: [{ reasoning: "$x^2 + 1 = 0$ has no real solution since $x^2 + 1 \\geq 1 > 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** No solution",
          },
        },
        {
          id: "olam-u8-sq-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the value of $k$ for which the line $y = 2x + k$ touches the curve $y = x^2$ at exactly one point.",
          response: { type: "numeric", parts: [
            { label: "a", answer: -1 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Tangency condition", statement: "Substitute and set discriminant to zero." }],
            steps: [
              { reasoning: "$x^2 = 2x + k \\Rightarrow x^2 - 2x - k = 0$.", marks: 1, markCode: "M" },
              { reasoning: "One solution requires $b^2 - 4ac = 4 + 4k = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$k = -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k = -1$",
          },
        },
        {
          id: "olam-u8-sq-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve the simultaneous equations $x^2 + y = 6$ and $x + y = 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Rearrange linear equation and substitute." }],
            steps: [
              { reasoning: "$y = 4 - x$ substituted: $x^2 + 4 - x = 6$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1)=0 \\Rightarrow x = 2, -1$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$y = 2, 5$ respectively.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Solutions: $(2,2)$ and $(-1,5)$.", marks: 1, markCode: "A", part: "b" },
            ],
            parts: [
              { label: "a", prompt: "Find the values of $x$.", marks: 2 },
              { label: "b", prompt: "Hence find the corresponding values of $y$ and state the solutions.", marks: 2 },
            ],
            finalAnswer: "$(2,2)$ and $(-1,5)$",
          },
        },
        {
          id: "olam-u8-sq-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution of $x + 2y = 3$ and $2x + 4y = 5$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "$(3, 0)$" },
            { id: "c", text: "$(1, 1)$" },
            { id: "d", text: "Infinitely many solutions" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parallel lines", statement: "Same gradient, different intercepts." }],
            steps: [{ reasoning: "Second equation is $2 \\times$ first on the left but $5 \\ne 6$; lines are parallel and distinct.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** No solution",
          },
        },
        {
          id: "olam-u8-sq-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x = 2y + 3$ and $x + y = 9$. Give the values of $x$ and $y$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 7 }, { label: "b", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace $x$ in second equation." }],
            steps: [
              { reasoning: "$(2y+3) + y = 9 \\Rightarrow 3y = 6 \\Rightarrow y = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 2(2) + 3 = 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7, y=2$",
          },
        },
        {
          id: "olam-u8-sq-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x^2 + y^2 = 25$ and $x - y = 1$ simultaneously.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Circle meets a line; substitute $y = x - 1$." }],
            steps: [
              { reasoning: "$y = x - 1$; substitute: $x^2 + (x-1)^2 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "$2x^2 - 2x - 24 = 0 \\Rightarrow x^2 - x - 12 = 0 \\Rightarrow (x-4)(x+3)=0$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 4, -3$ giving $y = 3, -4$.", marks: 1, markCode: "M" },
              { reasoning: "Solutions: $(4,3)$ and $(-3,-4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4,3)$ and $(-3,-4)$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u8-sq-notes",
      title: "Simultaneous equations — revision notes",
      summary: "Eliminate or substitute; line × curve gives up to 2 solutions.",
      sections: [
        { heading: "Linear pairs", body: "Eliminate a variable or substitute; graphical solution = intersection." },
        { heading: "Linear × quadratic", body: "Substitute $y=mx+c$ into the quadratic; up to 2 solutions." },
      ],
    },
  ],
};
