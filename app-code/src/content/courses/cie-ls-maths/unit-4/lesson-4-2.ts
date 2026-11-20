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
              { id: "b", text: "The equations have no solution" },
              { id: "c", text: "The lines are parallel" },
              { id: "d", text: "Only one equation is satisfied" },
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
              { id: "a", text: "No solution — parallel lines" },
              { id: "b", text: "$x = 4$" },
              { id: "c", text: "Infinite solutions" },
              { id: "d", text: "$y = 6$" },
            ],
            correctChoiceId: "a",
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
