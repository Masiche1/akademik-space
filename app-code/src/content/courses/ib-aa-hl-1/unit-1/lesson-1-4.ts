import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "aahl-u1-lesson-1-4",
  code: "1-4",
  title: "Systems of Linear Equations",
  goal: "I CAN solve systems of two or three linear equations, determine whether the solution is unique, infinite or nonexistent, and interpret systems geometrically.",
  standards: ["AHL 1.16"],
  vocabulary: [
    { term: "System of linear equations", definition: "A set of equations in the same variables that must be satisfied simultaneously, e.g. $ax+by=e$ and $cx+dy=f$." },
    { term: "Unique solution", definition: "Exactly one ordered triple (or pair) satisfies every equation — the equations are independent and consistent." },
    { term: "Infinitely many solutions", definition: "A whole line or plane of solutions — one equation is a combination of the others (dependent but consistent)." },
    { term: "No solution", definition: "The equations contradict each other — inconsistent; geometrically the lines or planes never meet." },
    { term: "Elimination", definition: "Adding or subtracting a multiple of one equation to another to remove a variable." },
    { term: "Coefficient matrix", definition: "The array of coefficients of the variables; whether it is singular determines if a unique solution exists." },
  ],
  concepts: [
    {
      id: "aahl-u1-systems-solving",
      title: "Solving systems of equations",
      skill: "Solve two- and three-variable linear systems by substitution or elimination, and classify the solution set.",
      lesson: {
        sections: [
          {
            heading: "Two equations, two unknowns",
            body: "For $ax+by=e$ and $cx+dy=f$, eliminate one variable: multiply equations by constants so the $x$ (or $y$) coefficients match, then add or subtract. Check by substituting back into BOTH equations. A quick test for uniqueness: if $ad-bc\\neq0$ there is exactly one solution.",
          },
          {
            heading: "Three equations, three unknowns",
            body: "Eliminate one variable from two pairs of equations to get two equations in two unknowns, solve those, then back-substitute. Alternatively eliminate to triangular form: reduce to one equation in one variable, then work upwards. Always verify all three original equations.",
          },
          {
            heading: "Classifying the solutions",
            body: "If elimination produces a contradiction like $0=5$, there is NO solution. If it produces $0=0$, one equation was redundant — there are infinitely many solutions, and one variable stays free. If it produces a definite value for every variable, the solution is unique.",
          },
        ],
        keyFormulas: [
          { name: "Unique solution test (2x2)", statement: "$ad-bc\\neq0$ gives a unique solution" },
          { name: "Elimination", statement: "Add a multiple of one equation to another to remove a variable" },
          { name: "Contradiction", statement: "$0=k$ with $k\\neq0$ means no solution; $0=0$ means infinitely many" },
        ],
        workedExample: {
          problem: "Solve $x+y+z=6$, $x+2y+z=8$, $2x+y+3z=14$.",
          solution: "Subtract equation 1 from equation 2: $y=2$. Subtract equation 1 from equation 3: $x+2z=8$. With $y=2$, equation 1 gives $x+z=4$. Solving $x+z=4$ and $x+2z=8$ gives $z=4$, $x=0$. Check: $0+2+4=6$ ✓. Solution: $(0,2,4)$.",
        },
      },
      questions: [
        {
          id: "aahl-u1-sys-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the system $x+y=5$ and $x-y=1$. Which pair $(x,y)$ satisfies both?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,3)$" },
              { id: "b", text: "$(3,2)$" },
              { id: "c", text: "$(4,1)$" },
              { id: "d", text: "$(1,4)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add the equations to eliminate $y$." },
            ],
            steps: [
              { reasoning: "Adding gives $2x=6$, so $x=3$; then $y=5-3=2$.", working: "x=3,\\ y=2", marks: 1, markCode: "M" },
              { reasoning: "Only $(3,2)$ satisfies both equations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(3,2)$",
            commonErrors: ["Subtracting instead of adding, giving $y=2$ but then mis-solving for $x$."],
          },
        },
        {
          id: "aahl-u1-sys-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the system $2x+3y=12$ and $4x-3y=6$. Find $x$ and $y$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }, { label: "$y$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "The $y$ coefficients are already opposite, so add the equations." },
            ],
            steps: [
              { reasoning: "Add the equations to eliminate $y$.", working: "6x=18", marks: 1, markCode: "M" },
              { reasoning: "$x=3$; substitute into $2x+3y=12$.", working: "6+3y=12 \\Rightarrow y=2", marks: 1, markCode: "M" },
              { reasoning: "Check in the second equation: $12-6=6$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$, $y=2$",
            commonErrors: ["Sign error when adding: $-3y+(-3y)$ treated as cancelling."],
          },
        },
        {
          id: "aahl-u1-sys-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Determine whether the system $x+y+z=6$, $x+2y+z=8$, $2x+2y+2z=13$ has a unique solution, infinitely many solutions, or no solution. Justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination and consistency", statement: "Reduce the system; a contradiction $0=k$ means no solution, $0=0$ means infinitely many." },
            ],
            steps: [
              { reasoning: "Subtract equation 1 from equation 2: $y=2$.", marks: 1, markCode: "M" },
              { reasoning: "Twice equation 1 is $2x+2y+2z=12$, but equation 3 says it equals 13 — a contradiction.", marks: 2, markCode: "M" },
              { reasoning: "No values of $x,y,z$ can satisfy both, so the system is inconsistent.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: no solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No solution — the equations are inconsistent ($12\\neq13$).",
            commonErrors: ["Assuming a solution must exist and forcing numbers.", "Not noticing equation 3 is twice equation 1's left side."],
          },
        },
        {
          id: "aahl-u1-sys-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Consider the system $x+y+z=3$, $x+2y+z=5$, $x+y+kz=k+2$, where $k$ is a constant.",
          parts: [
            { label: "a", prompt: "By eliminating variables, show that the system reduces to $y=2$ and $(k-1)z=k-1$.", marks: 4 },
            { label: "b", prompt: "Find the value of $k$ for which the system has infinitely many solutions, and state the solution set.", marks: 3 },
            { label: "c", prompt: "Find the unique solution when $k=2$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Subtract equations to remove variables systematically." },
              { kind: "principle", name: "Parameter cases", statement: "The coefficient of $z$ decides whether the solution is unique, infinite or none." },
            ],
            steps: [
              { part: "a", reasoning: "Eq2 $-$ Eq1 gives $y=2$.", working: "y=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Eq3 $-$ Eq1 gives $(k-1)z=k-1$ after substituting $y=2$.", working: "(k-1)z=k-1", marks: 2, markCode: "M" },
              { part: "a", reasoning: "Both reductions verified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Infinitely many solutions when $k-1=0$ (and the right side is also 0), i.e. $k=1$; then the third equation equals the first.", working: "k=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At $k=1$ the third equation is identical to the first, so $z$ is free: with $y=2$ and $x+z=1$, solutions are $(1-z,\\,2,\\,z)$.", working: "x=1-z,\\ y=2,\\ z\\ \\text{free}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "For $k=2$: $(k-1)z=k-1$ gives $z=1$.", working: "z=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Eq1 with $y=2,z=1$: $x=3-2-1=0$.", working: "x=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solution $(0,2,1)$; verify in all three equations.", working: "(0,2,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=2$, $(k-1)z=k-1$ (b) $k=1$: infinitely many, $(1-z,2,z)$ (c) $k=2$: $(0,2,1)$.",
            commonErrors: ["Claiming $k=1$ gives no solution — it gives infinitely many.", "Forgetting that $z$ is free when $k=1$."],
            examinerNote: "For every $k\\neq1$, $z=1$ and the unique solution is $(0,2,1)$; only at $k=1$ does the third equation collapse onto the first.",
          },
        },
        {
          id: "aahl-u1-sys-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Solve the system $x+y=7$ and $x-y=3$. Which pair $(x,y)$ satisfies both?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4,3)$" },
              { id: "b", text: "$(5,2)$" },
              { id: "c", text: "$(6,1)$" },
              { id: "d", text: "$(3,4)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add the equations to eliminate $y$." },
            ],
            steps: [
              { reasoning: "Adding gives $2x=10$, so $x=5$; then $y=7-5=2$.", working: "x=5,\\ y=2", marks: 1, markCode: "M" },
              { reasoning: "Only $(5,2)$ satisfies both equations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(5,2)$",
            commonErrors: ["Adding to get $2x=10$ but then writing $y=7-5=3$ by mis-subtracting."],
          },
        },
        {
          id: "aahl-u1-sys-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve the system $3x+2y=16$ and $x+2y=8$. Find $x$ and $y$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }, { label: "$y$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "The $y$ coefficients are equal, so subtract one equation from the other." },
            ],
            steps: [
              { reasoning: "Subtract the second equation from the first to eliminate $y$.", working: "2x=8", marks: 1, markCode: "M" },
              { reasoning: "$x=4$; substitute into $x+2y=8$.", working: "4+2y=8 \\Rightarrow y=2", marks: 1, markCode: "M" },
              { reasoning: "Check in the first equation: $12+4=16$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$, $y=2$",
            commonErrors: ["Adding the equations instead of subtracting, giving $4x+4y=24$."],
          },
        },
        {
          id: "aahl-u1-sys-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many solutions does the system $2x+4y=6$ and $x+2y=3$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exactly one" },
              { id: "b", text: "Exactly two" },
              { id: "c", text: "Infinitely many" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dependent equations", statement: "If one equation is a constant multiple of the other, the system is consistent with infinitely many solutions." },
            ],
            steps: [
              { reasoning: "The first equation is twice the second: $2(x+2y)=2x+4y=6$.", working: "2(x+2y)=2x+4y", marks: 1, markCode: "M" },
              { reasoning: "Both equations describe the same line, so every point on it is a solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Infinitely many",
            commonErrors: ["Eliminating to get $0=0$ but then concluding 'no solution'."],
          },
        },
        {
          id: "aahl-u1-sys-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Solve the system $x+y+z=9$, $x-y+z=3$ and $x+y-z=5$. Find $x$, $y$ and $z$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }, { label: "$y$", answer: 3 }, { label: "$z$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Add or subtract pairs of equations to remove one variable at a time." },
            ],
            steps: [
              { reasoning: "Add equations 1 and 2 to eliminate $y$.", working: "2x+2z=12 \\Rightarrow x+z=6", marks: 1, markCode: "M" },
              { reasoning: "Add equations 1 and 3 to eliminate $z$.", working: "2x+2y=14 \\Rightarrow x+y=7", marks: 1, markCode: "M" },
              { reasoning: "From $x+y+z=9$ with $x+z=6$: $y=3$; with $x+y=7$: $x=4$.", working: "y=3,\\ x=4", marks: 1, markCode: "M" },
              { reasoning: "Then $z=6-4=2$; check $4+3+2=9$ ✓.", working: "z=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$, $y=3$, $z=2$",
            commonErrors: ["Sign error when adding equations 1 and 3: $-z+(-z)$ should become elimination of $z$ giving $2x+2y=14$."],
          },
        },
        {
          id: "aahl-u1-sys-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "For which value of $k$ does the system $x+2y=3$ and $2x+4y=k$ have NO solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$k=3$" },
              { id: "b", text: "$k=6$" },
              { id: "c", text: "$k=8$" },
              { id: "d", text: "$k=12$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel lines", statement: "If the left sides are proportional but the right sides are not, the lines are parallel and there is no solution." },
            ],
            steps: [
              { reasoning: "The second left side is twice the first, so a unique solution requires $k=2\\times3=6$; any other $k$ gives parallel lines.", working: "k\\neq6 \\Rightarrow \\text{no solution}", marks: 1, markCode: "M" },
              { reasoning: "Of the options, only $k=8$ differs from 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $k=8$",
            commonErrors: ["Choosing $k=6$, which makes the equations identical — infinitely many solutions, not none."],
          },
        },
        {
          id: "aahl-u1-sys-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Determine whether the system $x+y+z=2$, $x+2y+3z=5$ and $2x+3y+4z=9$ has a unique solution, infinitely many solutions, or no solution. Justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination and consistency", statement: "Reduce pairs of equations; a contradiction $0=k$ ($k\\neq0$) means no solution." },
            ],
            steps: [
              { reasoning: "Subtract equation 1 from equation 2.", working: "y+2z=3", marks: 1, markCode: "M" },
              { reasoning: "Subtract twice equation 1 from equation 3.", working: "y+2z=5", marks: 1, markCode: "M" },
              { reasoning: "Both reduced equations involve only $y$ and $z$, but give $y+2z=3$ and $y+2z=5$ — a contradiction.", marks: 2, markCode: "M" },
              { reasoning: "No values of $x,y,z$ satisfy all three equations, so the system is inconsistent.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: no solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No solution — the equations are inconsistent.",
            commonErrors: ["Stopping after finding $y+2z=3$ and assuming a solution exists.", "Arithmetic slip in $2\\times$ equation 1."],
          },
        },
        {
          id: "aahl-u1-sys-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The system $x+y=4$ and $2x+2y=8$ has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A unique solution" },
              { id: "b", text: "No solution" },
              { id: "c", text: "Infinitely many solutions" },
              { id: "d", text: "Exactly two solutions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dependent equations", statement: "The second equation is twice the first, so both describe the same line." },
            ],
            steps: [
              { reasoning: "$2(x+y)=2x+2y=8$ matches the second equation exactly.", working: "2x+2y=8", marks: 1, markCode: "M" },
              { reasoning: "Every point on the line $x+y=4$ satisfies both equations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Infinitely many solutions",
            commonErrors: ["Eliminating to $0=0$ and reporting 'no solution'."],
          },
        },
        {
          id: "aahl-u1-sys-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Two numbers have a sum of $20$ and a difference of $4$. Enter the larger of the two numbers.",
          response: { type: "numeric", parts: [{ label: "Larger number", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model then solve", statement: "Write $x+y=20$ and $x-y=4$, then eliminate." },
            ],
            steps: [
              { reasoning: "Adding the equations eliminates $y$.", working: "2x=24", marks: 1, markCode: "M" },
              { reasoning: "$x=12$ (and $y=8$; check $12-8=4$ ✓).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Reporting $8$, the smaller number, or giving $x=24$ without halving."],
          },
        },
        {
          id: "aahl-u1-sys-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Consider the system $x+y+z=6$, $x-y+z=2$ and $x+y+kz=9$, where $k$ is a constant.",
          parts: [
            { label: "a", prompt: "By eliminating variables, show that the system reduces to $y=2$ and $(k-1)z=3$.", marks: 4 },
            { label: "b", prompt: "Find the value of $k$ for which the system has no solution, and justify your answer.", marks: 3 },
            { label: "c", prompt: "Find the unique solution when $k=3$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Subtract equations to remove variables systematically." },
              { kind: "principle", name: "Parameter cases", statement: "The reduced equation $(k-1)z=3$ decides consistency: $k=1$ gives $0=3$." },
            ],
            steps: [
              { part: "a", reasoning: "Eq1 $-$ Eq2 eliminates $x$ and $z$.", working: "2y=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "So $y=2$.", working: "y=2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Eq3 $-$ Eq1 eliminates $x$ and $y$ once $y=2$ is used.", working: "(k-1)z=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both reductions verified against the original equations.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "No solution requires $(k-1)z=3$ to be impossible, i.e. $k-1=0$ while the right side is $3\\neq0$.", working: "k=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At $k=1$ the reduced equation reads $0=3$, a contradiction.", working: "0=3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion: for $k=1$ the system is inconsistent — no solution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For $k=3$: $2z=3$, so $z=\\frac32$.", working: "z=\\tfrac32", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Eq1 with $y=2$, $z=\\frac32$: $x=6-2-\\frac32=\\frac52$.", working: "x=\\tfrac52", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solution $\\left(\\frac52,2,\\frac32\\right)$; check Eq2: $\\frac52-2+\\frac32=2$ ✓.", working: "\\left(\\tfrac52,2,\\tfrac32\\right)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=2$, $(k-1)z=3$ (b) $k=1$: no solution ($0=3$) (c) $k=3$: $\\left(\\frac52,2,\\frac32\\right)$.",
            commonErrors: ["Claiming $k=1$ gives infinitely many solutions — the right side is $3$, not $0$.", "Forgetting to substitute $y=2$ back into equation 1."],
            examinerNote: "For every $k\\neq1$, $z=\\frac{3}{k-1}$ and the solution is unique; only at $k=1$ does the system become inconsistent.",
          },
        },
      ],
    },
    {
      id: "aahl-u1-systems-geometry",
      title: "Geometric interpretation and applications",
      skill: "Interpret each equation as a line or plane, classify intersections, and solve contextual problems with systems.",
      lesson: {
        sections: [
          {
            heading: "Lines and planes",
            body: "Each linear equation in two variables describes a line; in three variables it describes a plane. The solution of a 2x2 system is the intersection point of two lines: one point (unique), no point (parallel lines), or coincident lines (infinitely many). For 3x3 systems, three planes can meet at a point, along a line, coincide, or never meet.",
          },
          {
            heading: "Applications",
            body: "Mixture, pricing and allocation problems reduce to systems: define variables, write one equation per condition, solve, then check that answers are physically sensible (non-negative, etc.). For example, three prices from three totals, or two alloys from two component equations.",
          },
        ],
        keyFormulas: [
          { name: "2D interpretation", statement: "Two lines: point / parallel / coincident" },
          { name: "3D interpretation", statement: "Three planes: point / line / plane / empty" },
          { name: "Application pattern", statement: "One equation per given condition; solve; sanity-check." },
        ],
        workedExample: {
          problem: "Adult tickets cost $x$ and child tickets cost $y$. Four adult and three child tickets cost $47; two adult and seven child tickets cost $51. Find the prices.",
          solution: "Equations: $4x+3y=47$ and $2x+7y=51$. Multiply the first by 7 and the second by 3: $28x+21y=329$ and $6x+21y=153$. Subtracting gives $22x=176$, so $x=8$. Then $3y=47-32=15$, so $y=5$. Check: $2(8)+7(5)=51$ ✓. Adult $8, child $5.",
        },
      },
      questions: [
        {
          id: "aahl-u1-geom-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The lines $y=2x+1$ and $y=2x-3$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intersecting at one point" },
              { id: "b", text: "Parallel — the system has no solution" },
              { id: "c", text: "Coincident — infinitely many solutions" },
              { id: "d", text: "Perpendicular" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Parallel lines", statement: "Equal gradients, different intercepts → never meet → no solution." },
            ],
            steps: [
              { reasoning: "Both gradients are 2 but intercepts differ, so the lines are parallel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the corresponding system has no solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Parallel — no solution",
            commonErrors: ["Solving anyway and reporting a false intersection."],
          },
        },
        {
          id: "aahl-u1-geom-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Adult tickets cost $x$ and child tickets cost $y$. Four adult and three child tickets cost $47; two adult and seven child tickets cost $51. Find $x$ and $y$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 8 }, { label: "$y$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model then solve", statement: "Write one equation per condition, then eliminate." },
            ],
            steps: [
              { reasoning: "Equations: $4x+3y=47$ and $2x+7y=51$.", marks: 1, markCode: "M" },
              { reasoning: "Eliminate $y$: multiply the first by 7 and the second by 3, then subtract.", working: "28x+21y=329,\\ 6x+21y=153 \\Rightarrow 22x=176", marks: 1, markCode: "M" },
              { reasoning: "$x=8$; substitute into $4x+3y=47$: $32+3y=47$, so $y=5$.", working: "x=8, y=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=8$, $y=5$ (adult $8, child $5)",
            commonErrors: ["Swapping the variables when forming equations."],
            examinerNote: "Verify: $4(8)+3(5)=47$ ✓ and $2(8)+7(5)=51$ ✓.",
          },
        },
        {
          id: "aahl-u1-geom-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Three planes have equations $x+y+z=6$, $x+2y+z=8$ and $2x+y+3z=14$. Find their point of intersection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "3D intersection", statement: "The solution of the system is the point where the three planes meet." },
            ],
            steps: [
              { reasoning: "Subtract equation 1 from equation 2: $y=2$.", marks: 1, markCode: "M" },
              { reasoning: "Equation 1 then gives $x+z=4$; subtracting equation 1 from equation 3 gives $x+2z=8$.", marks: 1, markCode: "M" },
              { reasoning: "Solving $x+z=4$ and $x+2z=8$ gives $z=4$, then $x=0$.", marks: 1, markCode: "M" },
              { reasoning: "Point $(0,2,4)$; check in equation 2: $0+4+4=8$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(0,2,4)$",
            commonErrors: ["Arithmetic slip when adding equations — check each equation afterwards."],
          },
        },
        {
          id: "aahl-u1-geom-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A company makes two products, $X$ and $Y$. Each unit of $X$ needs 2 hours of machine time and 1 hour of labour; each unit of $Y$ needs 1 hour of machine time and 3 hours of labour. In a week there are 100 machine hours and 120 labour hours available.",
          parts: [
            { label: "a", prompt: "Write down two equations for the numbers $x$ and $y$ of units produced if all available time is used.", marks: 2 },
            { label: "b", prompt: "Solve the system to find $x$ and $y$.", marks: 3 },
            { label: "c", prompt: "Interpret the solution and state whether it is feasible.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Constraints as equations", statement: "Each resource gives one linear equation in the decision variables." },
            ],
            steps: [
              { part: "a", reasoning: "Machine time: $2x+y=100$; labour: $x+3y=120$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both equations correct with variables defined.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Eliminate $y$: multiply first by 3, second by 1, subtract.", working: "6x+3y=300,\\ x+3y=120 \\Rightarrow 5x=180", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$x=36$; then $y=100-72=28$.", working: "x=36,\\ y=28", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check labour: $36+84=120$ ✓.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Producing 36 units of $X$ and 28 of $Y$ uses all resources exactly.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Both values are non-negative integers, so the solution is feasible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It is the only production plan that uses every available hour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2x+y=100$, $x+3y=120$ (b) $x=36$, $y=28$ (c) feasible, uses all resources.",
            commonErrors: ["Forgetting units must be whole numbers when interpreting."],
          },
        },
        {
          id: "aahl-u1-geom-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the point of intersection of the lines $y=3x+2$ and $y=-x+6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1,5)$" },
              { id: "b", text: "$(2,4)$" },
              { id: "c", text: "$(1,4)$" },
              { id: "d", text: "$(5,1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intersection", statement: "The intersection point satisfies both equations simultaneously." },
            ],
            steps: [
              { reasoning: "Set the equations equal: $3x+2=-x+6$ gives $4x=4$, so $x=1$ and $y=5$.", working: "3x+2=-x+6 \\Rightarrow x=1,\\ y=5", marks: 1, markCode: "M" },
              { reasoning: "Only $(1,5)$ satisfies both equations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(1,5)$",
            commonErrors: ["Solving $3x+2=-x+6$ as $4x=8$, giving $x=2$."],
          },
        },
        {
          id: "aahl-u1-geom-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A café sells coffee at $x$ dollars and cake at $y$ dollars. Two coffees and three cakes cost $23; one coffee and one cake cost $10$. Find $x$ and $y$.",
          response: { type: "numeric", parts: [{ label: "$x$ (coffee)", answer: 7 }, { label: "$y$ (cake)", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model then solve", statement: "Write one equation per condition, then substitute or eliminate." },
            ],
            steps: [
              { reasoning: "Equations: $2x+3y=23$ and $x+y=10$, so $x=10-y$.", working: "x=10-y", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $2(10-y)+3y=23$ gives $y=3$, hence $x=7$.", working: "20+y=23 \\Rightarrow y=3,\\ x=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $2(7)+3(3)=23$ ✓ and $7+3=10$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$, $y=3$",
            commonErrors: ["Swapping the prices when forming the equations."],
          },
        },
        {
          id: "aahl-u1-geom-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The lines $y=2x+1$ and $y=-\\frac12x+4$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallel" },
              { id: "b", text: "Perpendicular" },
              { id: "c", text: "Coincident" },
              { id: "d", text: "Intersecting but not at right angles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perpendicular gradients", statement: "Two lines are perpendicular when the product of their gradients is $-1$." },
            ],
            steps: [
              { reasoning: "The gradients are $2$ and $-\\frac12$, and $2\\times\\left(-\\frac12\\right)=-1$.", working: "2\\times\\left(-\\tfrac12\\right)=-1", marks: 1, markCode: "M" },
              { reasoning: "The intercepts differ, so the lines meet at right angles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Perpendicular",
            commonErrors: ["Comparing intercepts instead of checking the product of gradients."],
          },
        },
        {
          id: "aahl-u1-geom-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "An alloy is made by mixing $a$ grams of an alloy that is $60\\%$ copper with $b$ grams of an alloy that is $80\\%$ copper. The mixture has a total mass of $100$ g and is $70\\%$ copper. Find $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "$a$ (grams of 60% alloy)", answer: 50 }, { label: "$b$ (grams of 80% alloy)", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mixture model", statement: "Total mass and total copper each give one linear equation." },
            ],
            steps: [
              { reasoning: "Total mass: $a+b=100$; copper content: $0.6a+0.8b=70$.", working: "a+b=100,\\ 0.6a+0.8b=70", marks: 1, markCode: "M" },
              { reasoning: "Substitute $b=100-a$ into the copper equation.", working: "0.6a+0.8(100-a)=70", marks: 1, markCode: "M" },
              { reasoning: "Solve: $80-0.2a=70$ gives $a=50$, then $b=50$.", working: "a=50,\\ b=50", marks: 1, markCode: "M" },
              { reasoning: "Check copper: $0.6(50)+0.8(50)=30+40=70$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=50$ g, $b=50$ g",
            commonErrors: ["Using percentages $60$ and $80$ directly instead of decimals $0.6$ and $0.8$."],
          },
        },
        {
          id: "aahl-u1-geom-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A system of three linear equations in three variables is consistent but the three planes share a common line. How many solutions does the system have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exactly one" },
              { id: "b", text: "Exactly two" },
              { id: "c", text: "Infinitely many — one for each point on the line" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "3D interpretation", statement: "Planes meeting along a line correspond to a dependent but consistent system — infinitely many solutions." },
            ],
            steps: [
              { reasoning: "Consistency means solutions exist; a shared line means every point of that line satisfies all three equations.", working: "\\text{consistent} + \\text{dependent} \\Rightarrow \\text{infinitely many}", marks: 1, markCode: "M" },
              { reasoning: "There are infinitely many points on a line.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Infinitely many",
            commonErrors: ["Answering 'none' by confusing dependence with inconsistency."],
          },
        },
        {
          id: "aahl-u1-geom-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "At a cinema, 4 adult tickets and 3 child tickets cost $41, while 2 adult tickets and 5 child tickets cost $45. Find the price of an adult ticket and the price of a child ticket.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Model then solve", statement: "Write one equation per condition, then eliminate a variable." },
            ],
            steps: [
              { reasoning: "Let $x$ be the adult price and $y$ the child price: $4x+3y=41$ and $2x+5y=45$.", working: "4x+3y=41,\\ 2x+5y=45", marks: 1, markCode: "M" },
              { reasoning: "Eliminate $y$: multiply the first equation by 5 and the second by 3.", working: "20x+15y=205,\\ 6x+15y=135", marks: 1, markCode: "M" },
              { reasoning: "Subtract the second from the first: $14x=70$, so $x=5$.", working: "14x=70 \\Rightarrow x=5", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=5$ into $4x+3y=41$: $20+3y=41$, so $y=7$.", working: "3y=21 \\Rightarrow y=7", marks: 1, markCode: "M" },
              { reasoning: "Check in the second equation: $2(5)+5(7)=10+35=45$. ✓", marks: 1, markCode: "A" },
              { reasoning: "State both prices clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adult ticket $5, child ticket $7",
            commonErrors: ["Sign error when subtracting the scaled equations.", "Swapping $x$ and $y$ in the final answer."],
          },
        },
      ],
    },
  ],
};
