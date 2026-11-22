import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cilm-u4-lesson-4-2",
  code: "4-2",
  title: "Solving equations graphically",
  goal: "I CAN solve equations by finding where graphs intersect, and interpret simultaneous equations.",
  standards: ["0862 Algebra: graphical solutions"],
  vocabulary: [
    { term: "Intersection", definition: "The point where two graphs cross — same $x$ and $y$ values." },
    { term: "Simultaneous equations", definition: "Two equations with two unknowns solved together." },
    { term: "Graphical solution", definition: "Finding the answer by reading where lines cross on a graph." },
    { term: "Estimate", definition: "A graphical solution is usually approximate — read to nearest unit." },
    { term: "Substitution check", definition: "Verify a graphical solution by substituting into the original equations." },
    { term: "Parallel lines", definition: "Lines with equal gradients that never intersect — no solution." },
  ],
  concepts: [
    {
      id: "cilm-u4-graphical-solving",
      title: "Graphical solutions",
      skill: "Solve equations by graphing and finding intersection points, understanding accuracy limits.",
      lesson: {
        sections: [
          {
            heading: "Solving by intersection",
            body: "To solve $2x + 1 = x + 4$ graphically:\n\n1. Draw $y = 2x + 1$ (gradient 2, intercept 1)\n2. Draw $y = x + 4$ (gradient 1, intercept 4)\n3. Where they cross, read the $x$-coordinate — that's the solution.\n\nThe intersection point $(x, y)$ satisfies BOTH equations.",
          },
          {
            heading: "Accuracy",
            body: "Graphical solutions are estimates — you can only read to the nearest grid square. $x \\approx 3$ might really be $x=2.9$ or $3.1$. Always state the answer as approximate unless the intersection lands exactly on a grid point.",
          },
          {
            heading: "Special cases",
            body: "- **One intersection**: one solution.\n- **Parallel lines**: no solution — equations are inconsistent.\n- **Same line**: infinitely many solutions — equations are identical.",
          },
        ],
        keyFormulas: [
          { name: "Graphical solution", statement: "Intersection point satisfies both equations; read x-coordinate (approximate)." },
        ],
        workedExample: {
          problem: "Solve $y = x + 1$ and $y = 3x - 5$ graphically.",
          solution: "Lines cross where $x+1 = 3x-5$ → $x=3$, $y=4$. Intersection $(3,4)$ — solution $x=3, y=4$.",
        },
      },
      questions: [
        {
          id: "cilm-u4-gs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lines intersect at $(4, 7)$. What does this tell you about the equations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both equations are satisfied at $x=4, y=7$" },
              { id: "b", text: "Only one equation is satisfied" },
              { id: "c", text: "The equations have no solution" },
              { id: "d", text: "The lines are parallel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "The crossing point satisfies both equations simultaneously." },
            ],
            steps: [
              { reasoning: "At $(4,7)$ both lines have the same $x$ and $y$ — both equations hold.", working: "both satisfied", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Both equations are satisfied at $x=4, y=7$",
            commonErrors: ["Choosing (d) — intersection means BOTH equations are true there."],
          },
        },
        {
          id: "cilm-u4-gs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x + 2 = 2x - 1$ by graphing $y = x + 2$ and $y = 2x - 1$. What is the solution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical solving", statement: "Intersection where $x+2=2x-1$ → $x=3$, $y=5$." },
            ],
            steps: [
              { reasoning: "Set equal: $x+2=2x-1$ → $x=3$; $y=3+2=5$.", working: "x=3,y=5", marks: 1, markCode: "M" },
              { reasoning: "Intersection $(3,5)$ — solution $x=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$ (intersection at $(3, 5)$)",
            commonErrors: ["Reading only the $y$-coordinate — the solution to $x+2=2x-1$ is the $x$-value."],
          },
        },
        {
          id: "cilm-u4-gs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When solving $y = 2x + 1$ and $y = 2x - 3$ graphically, the lines don't intersect. Explain what this means and verify algebraically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel lines", statement: "Equal gradients → parallel → no intersection → no solution." },
            ],
            steps: [
              { reasoning: "Both gradients are $2$ — parallel lines never meet.", working: "m=2 both", marks: 1, markCode: "M" },
              { reasoning: "Algebraically: $2x+1 = 2x-3$ → $1=-3$, contradiction.", working: "1=-3", marks: 1, markCode: "M" },
              { reasoning: "No solution exists — equations are inconsistent.", marks: 1, markCode: "M" },
              { reasoning: "Graphical and algebraic methods agree.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No solution — parallel lines (same gradient 2); algebra confirms $1=-3$ is impossible",
            commonErrors: ["Saying 'infinite solutions' — that's when lines coincide, not when parallel."],
          },
        },
        {
          id: "cilm-u4-gs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shop's profit $P$ and a competitor's profit $Q$ are modelled by lines on a graph.",
          parts: [
            { label: "a", prompt: "Explain what the intersection point of the two profit lines represents.", marks: 2 },
            { label: "b", prompt: "If the lines intersect at $(5, 120)$, state the solution to the simultaneous equations.", marks: 2 },
            { label: "c", prompt: "Before the intersection, which business has higher profit? Explain using the graph.", marks: 2 },
            { label: "d", prompt: "Why might a graphical solution be less accurate than algebraic solving?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpreting intersections", statement: "Intersection = equal values = break-even point; graphical = approximate." },
            ],
            steps: [
              { part: "a", reasoning: "Intersection = point where both profits are equal — break-even.", working: "\\text{break-even}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear interpretation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x=5, y=120$ (or whatever variables) — the intersection coordinates.", working: "(5,120)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Whichever line is higher before $x=5$ — read from graph position.", working: "\\text{higher line}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct comparison.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Graph reading limited by grid resolution — can't read exact values.", working: "\\text{grid limits}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Algebraic gives exact answer.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation of accuracy difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) break-even point where profits equal (b) $x=5, y=120$ (c) higher line before intersection (d) grid resolution limits precision",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Intersection interpreted.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Solution stated.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Accuracy explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'graphs are always wrong' — they're approximations, not wrong."],
          },
        },
        {
          id: "cilm-u4-gs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lines intersect at the point $(2, 5)$. What does this tell you about the equations they represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The equations have no solution" },
              { id: "b", text: "Only one equation is satisfied" },
              { id: "c", text: "Both equations are satisfied at $x=2, y=5$" },
              { id: "d", text: "The lines are parallel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "The crossing point satisfies both equations simultaneously." },
            ],
            steps: [
              { reasoning: "At $(2,5)$ both lines share the same coordinates — both equations hold there.", working: "both satisfied", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Both equations are satisfied at $x=2, y=5$",
            commonErrors: ["Choosing (d) — intersection means BOTH equations are true."],
          },
        },
        {
          id: "cilm-u4-gs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $y = x + 2$ and $y = 2x - 1$ by finding their intersection. What is the value of $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 2$" },
              { id: "b", text: "$x = 1$" },
              { id: "c", text: "$x = 3$" },
              { id: "d", text: "$x = 5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical solving", statement: "Set expressions equal: $x+2=2x-1$ → $x=3$." },
            ],
            steps: [
              { reasoning: "$x+2=2x-1$ → $x=3$; $y=5$ — intersection $(3,5)$.", working: "x=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 3$",
            commonErrors: ["Choosing (b) — reading the $y$-coordinate instead of the $x$-coordinate."],
          },
        },
        {
          id: "cilm-u4-gs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The lines $y = 3x + 1$ and $y = 3x - 4$ are drawn on a graph. What can you conclude?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One solution at the origin" },
              { id: "b", text: "One solution at $(1, -3)$" },
              { id: "c", text: "No solution — the lines are parallel" },
              { id: "d", text: "Infinite solutions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Parallel lines", statement: "Equal gradients $3$ → parallel → never intersect → no solution." },
            ],
            steps: [
              { reasoning: "Both gradients are $3$; $3x+1=3x-4$ gives $1=-4$, impossible.", working: "1=-4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No solution — parallel lines",
            commonErrors: ["Choosing (c) — different intercepts mean different lines, not the same line."],
          },
        },
        {
          id: "cilm-u4-gs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a solution found by reading a graph usually described as 'approximate'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because equations have no exact solutions" },
              { id: "b", text: "Because lines never actually intersect" },
              { id: "c", text: "Because graphs are always drawn inaccurately" },
              { id: "d", text: "Because you can only read to the nearest grid square" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Graphical accuracy", statement: "Grid resolution limits precision — the true intersection may lie between grid lines." },
            ],
            steps: [
              { reasoning: "You can only estimate to the nearest unit/grid division.", working: "grid resolution", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Grid resolution limits precision",
            commonErrors: ["Choosing (b) — the graph isn't 'wrong', it's just less precise than algebra."],
          },
        },
        {
          id: "cilm-u4-gs-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two equations produce the SAME line on a graph. What does this mean for their solutions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infinitely many solutions" },
              { id: "b", text: "Two solutions" },
              { id: "c", text: "No solution" },
              { id: "d", text: "Exactly one solution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Coincident lines", statement: "Identical equations → every point satisfies both → infinite solutions." },
            ],
            steps: [
              { reasoning: "Same line = equations are equivalent (e.g. $y=2x+3$ and $2y=4x+6$).", working: "equivalent equations", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Infinitely many solutions",
            commonErrors: ["Choosing (c) — coincident lines DO intersect, at every point."],
          },
        },
        {
          id: "cilm-u4-gs-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lines $y = 2x$ and $y = x + 3$ intersect. Find the $x$-coordinate of the intersection.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical solving", statement: "Set equal: $2x=x+3$ → $x=3$." },
            ],
            steps: [
              { reasoning: "$x=3$ (and $y=6$).", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$",
            commonErrors: ["$6$ — that's the $y$-coordinate, not $x$."],
          },
        },
        {
          id: "cilm-u4-gs-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the intersection $x$-coordinates for: (a) $y = x + 1$ and $y = 2x - 2$ (b) $y = 3x$ and $y = x + 4$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 3 }, { label: "(b)", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical solving", statement: "Set the two $y$ expressions equal and solve." },
            ],
            steps: [
              { reasoning: "(a) $x+1=2x-2$ → $x=3$.", working: "x=3", marks: 1, markCode: "A" },
              { reasoning: "(b) $3x=x+4$ → $2x=4$ → $x=2$.", working: "x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=3$ (b) $x=2$",
            commonErrors: ["In (a) $x=-3$ — sign error moving terms."],
          },
        },
        {
          id: "cilm-u4-gs-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lines cross at the point $(4, 9)$. Write down the solution of the simultaneous equations they represent.",
          response: { type: "numeric", parts: [{ label: "x", answer: 4 }, { label: "y", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "The intersection coordinates ARE the solution." },
            ],
            steps: [
              { reasoning: "$x=4$, $y=9$.", working: "(4,9)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4, y=9$",
            commonErrors: ["Giving only one coordinate — both are needed."],
          },
        },
        {
          id: "cilm-u4-gs-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x + 4 = 2x - 1$ by sketching/describing the graphs $y = x + 4$ and $y = 2x - 1$ and finding their intersection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical solving", statement: "The solution is the $x$-coordinate where the lines cross." },
            ],
            steps: [
              { reasoning: "Set expressions equal: $x+4=2x-1$ → $x=5$.", working: "x=5", marks: 1, markCode: "M" },
              { reasoning: "$y=5+4=9$ — intersection $(5,9)$.", working: "(5,9)", marks: 1, markCode: "M" },
              { reasoning: "Solution: $x=5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$ (intersection at $(5, 9)$)",
            commonErrors: ["Reading the wrong coordinate — the equation's solution is the $x$-value."],
          },
        },
        {
          id: "cilm-u4-gs-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a solution found graphically is only approximate, and how you could improve its accuracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical accuracy", statement: "Grid limits precision; zooming in or algebraic check improves it." },
            ],
            steps: [
              { reasoning: "You can only read to the nearest grid square — the true intersection may lie between lines.", working: "grid limits", marks: 1, markCode: "M" },
              { reasoning: "Improvement: use a finer grid/larger scale, or verify by substituting into the equations.", marks: 1, markCode: "M" },
              { reasoning: "Clear, accurate explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximate due to grid resolution; improve with finer grid or algebraic check",
            commonErrors: ["Saying 'graphs are inaccurate' — the method is sound but limited by reading precision."],
          },
        },
        {
          id: "cilm-u4-gs-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two companies' costs are modelled by $C_1 = 20 + 2n$ and $C_2 = 15 + 3n$ where $n$ is the number of units.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpreting intersections", statement: "Set costs equal to find break-even." },
            ],
            steps: [
              { reasoning: "Break-even where costs equal: $20+2n=15+3n$ → $n=5$.", working: "n=5", marks: 1, markCode: "M" },
              { reasoning: "$C=20+2(5)=30$ — intersection at $(5, 30)$.", working: "(5,30)", marks: 1, markCode: "M" },
              { reasoning: "Below 5 units company 2 is cheaper; above 5, company 1.", working: "\\text{comparison}", marks: 1, markCode: "M" },
              { reasoning: "Answers: $n=5$, $C=30$; interpretation correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Break-even at $n=5$, $C=\\pounds30$ (or 30 units)",
            commonErrors: ["$n=35$ — subtracting wrongly when collecting terms."],
          },
        },
        {
          id: "cilm-u4-gs-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two lines on a graph represent a pair of equations.",
          parts: [
            { label: "a", prompt: "Explain what the intersection point tells you about the equations.", marks: 2 },
            { label: "b", prompt: "Describe the three possible outcomes when two lines are graphed (one crossing, parallel, coincident).", marks: 3 },
            { label: "c", prompt: "Why might a graphical solution differ slightly from the exact algebraic answer?", marks: 1 },
            { label: "d", prompt: "How would you verify a graphical solution?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Graphical solutions", statement: "Intersection = solution; parallel = none; coincident = infinite; grid limits precision." },
            ],
            steps: [
              { part: "a", reasoning: "The point satisfies BOTH equations — it's the simultaneous solution.", working: "both satisfied", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One crossing: one solution; parallel: no solution; coincident: infinite solutions.", working: "1/0/infinite", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three cases named.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct descriptions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Grid resolution — you read approximate coordinates, not exact values.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute the coordinates back into both original equations to check.", working: "substitution check", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid verification method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) intersection satisfies both (b) 1/0/infinite solutions (c) grid limits precision (d) substitute back",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Intersection explained.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "All cases correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Accuracy explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Verification described.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) confusing parallel with coincident lines."],
          },
        },
      ],
    },
    {
      id: "cilm-u4-simultaneous",
      title: "Simultaneous equations",
      skill: "Solve pairs of linear equations using substitution or elimination, and interpret results.",
      lesson: {
        sections: [
          {
            heading: "What simultaneous means",
            body: "Two equations, two unknowns — solve them together.\n\n$y = x + 3$ and $y = 2x - 1$\n\nSince both equal $y$, set them equal: $x + 3 = 2x - 1$ → $x = 4$, then $y = 7$.",
          },
          {
            heading: "Elimination method",
            body: "If equations aren't in $y=$ form, align them and eliminate one variable:\n\n$2x + y = 10$\n$3x - y = 5$\n\nAdd the equations: $5x = 15$ → $x = 3$. Substitute back: $y = 4$.",
          },
          {
            heading: "Checking",
            body: "Always verify BOTH equations with your answer. If it satisfies one but not the other, you made an error.",
          },
        ],
        keyFormulas: [
          { name: "Substitution", statement: "If both give $y$, set expressions equal and solve for $x$ first." },
          { name: "Elimination", statement: "Add or subtract equations to cancel one variable." },
        ],
        workedExample: {
          problem: "Solve $y = 3x - 2$ and $2x + y = 8$.",
          solution: "Substitute: $2x + (3x-2) = 8$ → $5x - 2 = 8$ → $5x = 10$ → $x = 2$, $y = 4$. Check: $2(2)+4=8$ ✓.",
        },
      },
      questions: [
        {
          id: "cilm-u4-sim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $y = x + 1$ and $y = x + 5$. What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 6$" },
              { id: "b", text: "Infinite solutions" },
              { id: "c", text: "$x = 4$" },
              { id: "d", text: "No solution — parallel lines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inconsistent equations", statement: "$x+1=x+5$ → $1=5$ contradiction — parallel lines, no solution." },
            ],
            steps: [
              { reasoning: "Setting equal gives $1=5$ — impossible; both gradients are 1, lines parallel.", working: "1=5 contradiction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No solution — parallel lines",
            commonErrors: ["Choosing (c) — different intercepts mean different lines, not the same line."],
          },
        },
        {
          id: "cilm-u4-sim-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $y = 2x$ and $y = x + 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution", statement: "Set equal: $2x = x+3$ → $x=3$, $y=6$." },
            ],
            steps: [
              { reasoning: "$2x = x+3$ → $x = 3$; $y = 2(3) = 6$.", working: "x=3,y=6", marks: 1, markCode: "M" },
              { reasoning: "Check both: $y=2(3)=6$ ✓ and $y=3+3=6$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3, y = 6$",
            commonErrors: ["Finding only $x$ — simultaneous equations need both values."],
          },
        },
        {
          id: "cilm-u4-sim-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $3x + y = 12$ and $x + y = 8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Elimination", statement: "Subtract equations to eliminate $y$: $(3x+y)-(x+y)=12-8$ → $2x=4$." },
            ],
            steps: [
              { reasoning: "Subtract: $2x = 4$ → $x = 2$.", working: "2x=4; x=2", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $2 + y = 8$ → $y = 6$.", working: "y=6", marks: 1, markCode: "M" },
              { reasoning: "Check first equation: $3(2)+6=12$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Solution: $x=2, y=6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2, y = 6$",
            commonErrors: ["Subtracting wrong direction — must subtract whole equations consistently."],
          },
        },
        {
          id: "cilm-u4-sim-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A cinema sells adult tickets ($\\pounds12$) and child tickets ($\\pounds8$). One day sells 200 tickets for $\\pounds2080$.",
          parts: [
            { label: "a", prompt: "Write two equations for adult tickets $a$ and child tickets $c$.", marks: 3 },
            { label: "b", prompt: "Solve the simultaneous equations.", marks: 3 },
            { label: "c", prompt: "State how many of each ticket type were sold.", marks: 2 },
            { label: "d", prompt: "Verify your answer makes sense in context.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simultaneous equations in context", statement: "Quantity equation + money equation → solve → interpret." },
            ],
            steps: [
              { part: "a", reasoning: "$a + c = 200$ (total tickets).", working: "a+c=200", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$12a + 8c = 2080$ (total money).", working: "12a+8c=2080", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both equations correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "From first: $c = 200 - a$; substitute: $12a + 8(200-a) = 2080$.", working: "12a+8(200-a)=2080", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$12a + 1600 - 8a = 2080$ → $4a = 480$ → $a = 120$.", working: "a=120", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$c = 80$.", working: "c=80", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$120$ adult, $80$ child tickets.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct interpretation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$120+80=200$ ✓ and $12(120)+8(80)=1440+640=2080$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $a+c=200$, $12a+8c=2080$ (b) $a=120, c=80$ (c) 120 adult, 80 child (d) both equations check",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Both equations correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Solution correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Interpretation correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Verified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (a) writing $12a+8c=200$ — mixing quantity and money equations."],
          },
        },
        {
          id: "cilm-u4-sim-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $y = x + 2$ and $y = x + 5$. What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Infinite solutions" },
              { id: "b", text: "$y = 7$" },
              { id: "c", text: "No solution — parallel lines" },
              { id: "d", text: "$x = 3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inconsistent equations", statement: "$x+2=x+5$ → $2=5$ contradiction; gradients both 1." },
            ],
            steps: [
              { reasoning: "Setting equal gives contradiction; both gradients 1 → parallel → no solution.", working: "2=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No solution — parallel lines",
            commonErrors: ["Choosing (c) — different intercepts mean different lines."],
          },
        },
        {
          id: "cilm-u4-sim-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $y = 2x + 1$ and $y = x + 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 1, y = 5$" },
              { id: "b", text: "$x = 3, y = 7$" },
              { id: "c", text: "$x = 5, y = 9$" },
              { id: "d", text: "$x = 3, y = 4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution", statement: "Set equal: $2x+1=x+4$ → $x=3$, $y=7$." },
            ],
            steps: [
              { reasoning: "$x=3$; $y=2(3)+1=7$.", working: "x=3,y=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 3, y = 7$",
            commonErrors: ["Choosing (c) — using the second equation's intercept as $y$ without computing."],
          },
        },
        {
          id: "cilm-u4-sim-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $y = 3x - 1$ and $y = x + 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3, y = 8$" },
              { id: "b", text: "$x = 4, y = 11$" },
              { id: "c", text: "$x = 3, y = 5$" },
              { id: "d", text: "$x = 2, y = 7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution", statement: "Set equal: $3x-1=x+5$ → $2x=6$ → $x=3$, $y=8$." },
            ],
            steps: [
              { reasoning: "$x=3$; $y=3(3)-1=8$.", working: "x=3,y=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 3, y = 8$",
            commonErrors: ["Choosing (c) — $y$ must satisfy BOTH equations; check $3(3)-1=8$ and $3+5=8$."],
          },
        },
        {
          id: "cilm-u4-sim-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Use elimination to solve $2x + y = 7$ and $x + y = 5$. What is $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 6$" },
              { id: "b", text: "$x = 2$" },
              { id: "c", text: "$x = 1$" },
              { id: "d", text: "$x = 3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Elimination", statement: "Subtract equations: $x=2$; then $y=3$." },
            ],
            steps: [
              { reasoning: "$(2x+y)-(x+y)=7-5$ → $x=2$; $y=5-2=3$.", working: "x=2,y=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 2$",
            commonErrors: ["Choosing (d) — $7-5=2$, not 6; subtraction of equations eliminates $y$."],
          },
        },
        {
          id: "cilm-u4-sim-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $y = 2x + 3$ and $2y = 4x + 6$. What happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 0$" },
              { id: "b", text: "No solution" },
              { id: "c", text: "$x = 1$" },
              { id: "d", text: "Infinitely many solutions — same line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equivalent equations", statement: "Second equation is $2\\times$ the first — identical line." },
            ],
            steps: [
              { reasoning: "$2y=4x+6$ simplifies to $y=2x+3$ — same equation, infinite solutions.", working: "y=2x+3 \\text{ both}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Infinitely many solutions",
            commonErrors: ["Choosing (b) — proportional equations are the same line, not parallel."],
          },
        },
        {
          id: "cilm-u4-sim-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $y = x + 3$ and $y = 2x - 3$. Give the value of $x$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution", statement: "$x+3=2x-3$ → $x=6$." },
            ],
            steps: [
              { reasoning: "$6=6$; $x=6$ (and $y=9$).", working: "x=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["$9$ — that's $y$, not $x$."],
          },
        },
        {
          id: "cilm-u4-sim-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve (a) $y = x - 2$ and $y = 3x - 6$ (b) $y = 2x + 1$ and $y = x + 4$. Give the value of $x$ in each case.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution", statement: "Set the $y$ expressions equal and solve." },
            ],
            steps: [
              { reasoning: "(a) $x-2=3x-6$ → $2x=4$ → $x=2$.", working: "x=2", marks: 1, markCode: "A" },
              { reasoning: "(b) $2x+1=x+4$ → $x=3$.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=2$ (b) $x=3$",
            commonErrors: ["In (a) $x=-2$ — moving $-6$ across wrongly."],
          },
        },
        {
          id: "cilm-u4-sim-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $x + y = 10$ and $x - y = 4$ by adding the equations. Give the value of $x$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Elimination", statement: "Add: $2x=14$ → $x=7$." },
            ],
            steps: [
              { reasoning: "$2x=14$ → $x=7$; $y=3$.", working: "x=7,y=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 7$",
            commonErrors: ["$5$ — subtracting equations eliminates $x$ instead of $y$."],
          },
        },
        {
          id: "cilm-u4-sim-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x + y = 9$ and $x - y = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Elimination", statement: "Add equations to eliminate $y$: $2x=10$." },
            ],
            steps: [
              { reasoning: "Add: $2x = 10$ → $x = 5$.", working: "2x=10; x=5", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $5+y=9$ → $y=4$.", working: "y=4", marks: 1, markCode: "M" },
              { reasoning: "Check both: $5+4=9$ ✓, $5-4=1$ ✓. Solution $x=5, y=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5, y = 4$",
            commonErrors: ["Finding only $x$ — simultaneous questions need both values."],
          },
        },
        {
          id: "cilm-u4-sim-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $y = 2x$ and $3x + y = 10$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Substitution", statement: "Substitute $y=2x$ into the second equation." },
            ],
            steps: [
              { reasoning: "$3x+2x=10$ → $5x=10$ → $x=2$.", working: "5x=10; x=2", marks: 1, markCode: "M" },
              { reasoning: "$y=2(2)=4$.", working: "y=4", marks: 1, markCode: "M" },
              { reasoning: "Check: $3(2)+4=10$ ✓. Solution $x=2, y=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2, y = 4$",
            commonErrors: ["$3x+y=10$ → substituting $y=2x$ gives $5x=10$ — easy to slip to $6x$."],
          },
        },
        {
          id: "cilm-u4-sim-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two numbers have a sum of $20$ and a difference of $6$. Find the numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simultaneous in context", statement: "Let numbers be $x$ and $y$: $x+y=20$, $x-y=6$." },
            ],
            steps: [
              { reasoning: "Add equations: $2x=26$ → $x=13$.", working: "2x=26; x=13", marks: 1, markCode: "M" },
              { reasoning: "$y=20-13=7$.", working: "y=7", marks: 1, markCode: "M" },
              { reasoning: "Numbers: $13$ and $7$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $13+7=20$ ✓, $13-7=6$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$ and $7$",
            commonErrors: ["Assuming equal shares ($10$ and $10$) — difference is 6, not 0."],
          },
        },
        {
          id: "cilm-u4-sim-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A café sells coffees for $\\pounds2.50$ and cakes for $\\pounds3.50$. On one day it sells $150$ items and takes $\\pounds465$.",
          parts: [
            { label: "a", prompt: "Write two equations for the number of coffees $c$ and cakes $k$.", marks: 3 },
            { label: "b", prompt: "Solve the simultaneous equations.", marks: 3 },
            { label: "c", prompt: "State how many of each item were sold.", marks: 1 },
            { label: "d", prompt: "Verify your answer.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simultaneous in context", statement: "Quantity equation + money equation; substitute and solve." },
            ],
            steps: [
              { part: "a", reasoning: "$c+k=150$ (total items).", working: "c+k=150", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$2.5c+3.5k=465$ (total money).", working: "2.5c+3.5k=465", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both equations correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$k=150-c$; $2.5c+3.5(150-c)=465$.", working: "2.5c+3.5(150-c)=465", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$525-c=465$ → $c=60$; $k=90$.", working: "c=60,k=90", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct solution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$60$ coffees and $90$ cakes.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$60+90=150$ ✓; $2.5(60)+3.5(90)=150+315=465$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $c+k=150$, $2.5c+3.5k=465$ (b) $c=60, k=90$ (c) 60 coffees, 90 cakes (d) both check",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Both equations correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Solution correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Interpretation correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Verified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (a) writing $2.5c+3.5k=150$ — mixing quantity and money equations."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u4-graphical-notes",
      title: "Graphical and simultaneous equations — revision notes",
      summary: "Intersection solutions, graphical accuracy, substitution and elimination.",
      sections: [
        {
          heading: "Graphical solving",
          body: "Intersection satisfies both equations. Graphical answers are approximate — limited by grid size. Parallel = no solution; coincident = infinite solutions.",
        },
        {
          heading: "Simultaneous equations",
          body: "Substitution: set $y$ expressions equal. Elimination: add/subtract to cancel a variable. Always check BOTH equations. Context problems need two equations: quantity + value.",
        },
      ],
    },
  ],
};
