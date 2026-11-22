import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "alg1-u2-lesson-2-3",
  code: "2-3",
  title: "Linear Inequalities and Systems of Inequalities",
  goal: "I CAN graph linear inequalities, interpret boundary lines and half-planes, and use a feasible region to analyze constraints.",
  standards: ["HSA-REI.D.12"],
  vocabulary: [
    { term: "Linear inequality in two variables", definition: "An inequality such as $y>mx+b$ whose solutions are ordered pairs in a region of the coordinate plane." },
    { term: "Boundary line", definition: "The line obtained by replacing the inequality symbol with an equals sign; it separates the plane into two half-planes." },
    { term: "Half-plane", definition: "One of the two regions on either side of a boundary line; it contains the points that satisfy one side of the inequality." },
    { term: "Test point", definition: "A point substituted into an inequality to determine which side of the boundary line is the solution region; the origin is convenient unless it lies on the line." },
    { term: "Feasible region", definition: "The set of points that satisfy every inequality in a system of constraints, represented by the overlap of their solution regions." },
    { term: "Constraint", definition: "A mathematical condition, often an inequality, limiting the possible values of variables in a model." },
  ],
  concepts: [
    {
      id: "alg1-u2-graph-inequalities",
      title: "Graphing a linear inequality",
      skill: "Draw the correct boundary line and shade the half-plane containing all ordered pairs that satisfy a linear inequality.",
      lesson: {
        sections: [
          {
            heading: "Draw the boundary line",
            body: `Replace the inequality symbol with $=$ to make the boundary line. For $y>mx+b$, the boundary is $y=mx+b$. Use a **dashed** line for $<$ or $>$ because points on the boundary do not satisfy a strict inequality. Use a **solid** line for $\\le$ or $\\ge$ because equality is included.

Graph the boundary accurately using its slope and intercept, or by finding two points. The line separates the coordinate plane into two half-planes. The line itself is included only when the inequality includes equality.`,
          },
          {
            heading: "Choose the solution half-plane",
            body: `Use a test point not on the boundary line, often $(0,0)$. Substitute its coordinates into the original inequality. If the statement is true, shade the half-plane containing the test point; if it is false, shade the opposite side. If the origin lies on the boundary, choose another point such as $(0,1)$.

For inequalities already solved as $y>mx+b$ or $y<mx+b$, the graph also gives a visual shortcut: shade above for $y>$ or $y\\ge$, and below for $y<$ or $y\\le$. A test point remains a reliable check and works for inequalities in other forms, such as $2x+y\\le 4$.`,
          },
        ],
        keyFormulas: [
          { name: "Boundary line", statement: "Replace $<, >, \\le,$ or $\\ge$ with $=$ to find the boundary." },
          { name: "Boundary style", statement: "$<$ or $>$: dashed boundary; $\\le$ or $\\ge$: solid boundary." },
          { name: "Half-plane test", statement: "A point is a solution exactly when its coordinates make the original inequality true." },
        ],
        workedExample: {
          problem: "Graph $y\\le -2x+3$. Describe the boundary and solution region.",
          solution: "The boundary is $y=-2x+3$. Because the inequality includes equality, draw a **solid** line; it passes through $(0,3)$ and $(1,1)$. Test $(0,0)$: $0\\le 3$ is true, so shade the half-plane containing the origin. Equivalently, shade below the line. The line is part of the solution set.",
        },
      },
      questions: [
        {
          id: "alg1-u2-ineq-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $y>-x+2$, what boundary should be drawn, and what style should it use?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=-x+2$, dashed" },
            { id: "b", text: "$y=-x+2$, solid" },
            { id: "c", text: "$y=-x-2$, solid" },
            { id: "d", text: "$y=x+2$, dashed" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Boundary line", statement: "The boundary is found by replacing the inequality symbol with equality." },
              { kind: "principle", name: "Strict inequality boundary", statement: "A strict inequality excludes points on the boundary, so its graph uses a dashed line." },
            ],
            steps: [
              { reasoning: "Replace $>$ with $=$ without changing the expression on the right.", working: "y=-x+2", marks: 1, markCode: "M" },
              { reasoning: "Since $>$ is strict, points on the line are excluded and the boundary is dashed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=-x+2$, dashed.",
            commonErrors: ["Using a solid boundary for a strict inequality.", "Changing the sign of the slope while copying the boundary equation."],
          },
        },
        {
          id: "alg1-u2-ineq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Does the point $(1,2)$ satisfy $2x+y\\le 5$? Enter 1 for yes or 0 for no.",
          response: { type: "numeric", parts: [{ label: "Yes = 1; no = 0", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solution point", statement: "An ordered pair is a solution when substituting its coordinates makes the inequality true." },
              { kind: "property", name: "Order of operations", statement: "Evaluate multiplication before addition, then compare the result with the stated bound." },
            ],
            steps: [
              { reasoning: "Substitute $x=1$ and $y=2$ into the left-hand side.", working: "2(1)+2=4", marks: 1, markCode: "M" },
              { reasoning: "Compare the result with 5 using the original inequality symbol.", working: "4\\le 5", marks: 1, markCode: "A" },
              { reasoning: "The statement is true, so the point is in the solution half-plane.", working: "\\text{yes}=1", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Yes; enter $1$.",
            commonErrors: ["Testing only the $x$-coordinate, or reversing the inequality sign when substituting."],
          },
        },
        {
          id: "alg1-u2-ineq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Graph $y<2x-1$. In words, state the boundary-line style and which side is shaded. Explain how a test point confirms the shading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Boundary line", statement: "The boundary is the graph of the corresponding equation, found by replacing the inequality symbol with equality." },
              { kind: "principle", name: "Strict inequality", statement: "A strict inequality uses a dashed boundary because points on the boundary are not included." },
              { kind: "principle", name: "Test-point method", statement: "A test point satisfying the inequality lies in the solution half-plane; a point that fails lies in the opposite half-plane." },
            ],
            steps: [
              { reasoning: "Write the boundary equation and identify its style.", working: "y=2x-1 \\quad \\text{(dashed)}", marks: 1, markCode: "M" },
              { reasoning: "Test the origin, which is not on the boundary.", working: "(0,0): \\quad 0<2(0)-1 \\implies 0<-1 \\quad \\text{(false)}", marks: 1, markCode: "A" },
              { reasoning: "Because the origin fails, shade the half-plane on the opposite side; as $y$ is less than the line, this is below it.", marks: 1, markCode: "R" },
              { reasoning: "State that boundary points are excluded.", working: "\\text{Dashed boundary; shade below; line not included.}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Draw a dashed line $y=2x-1$ and shade below it; $(0,0)$ fails the inequality, so shade the side opposite the origin.",
            commonErrors: ["Shading the side containing the origin because it is a common test point, without evaluating the inequality.", "Including the boundary despite the strict symbol $<$."],
            examinerNote: "A correct verbal description must state both the test-point conclusion and the inclusion status of the boundary.",
          },
        },
        {
          id: "alg1-u2-ineq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student has at most $\\$60$ to spend at a school fair. A ride ticket costs $\\$8$ and a snack costs $\\$4$. If $x$ is the number of ride tickets and $y$ the number of snacks, the budget condition is $8x+4y\\le60$.",
          parts: [
            { label: "a", prompt: "Rewrite the inequality as $y\\le mx+b$ and state the slope and $y$-intercept of the boundary line.", marks: 2 },
            { label: "b", prompt: "State the style of the boundary line and which side is shaded. Use the test point $(0,0)$ to justify.", marks: 2 },
            { label: "c", prompt: "Decide whether each purchase is within budget: $(5,5)$ and $(4,8)$.", marks: 2 },
            { label: "d", prompt: "The student buys 3 ride tickets. Find the greatest number of snacks that can be bought.", marks: 2 },
          ],
          response: { type: "numeric", parts: [
            { label: "(a) Slope of the boundary", answer: -2 },
            { label: "(a) $y$-intercept of the boundary", answer: 15 },
            { label: "(d) Greatest number of snacks", answer: 9 },
          ] },
          markscheme: {
            principles: [
              { kind: "property", name: "Properties of inequalities", statement: "Subtracting the same value from both sides, or dividing by a positive number, preserves the inequality direction." },
              { kind: "principle", name: "Boundary style", statement: "A solid boundary is used for $\\le$ or $\\ge$ because points on the line satisfy the inequality." },
              { kind: "principle", name: "Test-point method", statement: "A test point that satisfies the inequality lies in the solution half-plane." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract $8x$ from both sides.", working: "4y\\le60-8x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by positive 4 (no reversal); read off slope and intercept.", working: "y\\le-2x+15,\\quad m=-2,\\ b=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The symbol $\\le$ includes equality, so draw a solid boundary. Test the origin, which is not on the line.", working: "8(0)+4(0)=0\\le60\\ \\text{(true)}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The origin satisfies the inequality, so shade the side containing it (below the line).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Test $(5,5)$: it lies exactly on the boundary, which is included.", working: "8(5)+4(5)=60\\le60\\ \\text{(true)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Test $(4,8)$: the cost exceeds the budget.", working: "8(4)+4(8)=64>60\\ \\text{(false)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=3$.", working: "8(3)+4y\\le60 \\implies 4y\\le36", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by 4; the greatest whole number of snacks is 9.", working: "y\\le9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y\\le-2x+15$, slope $-2$, intercept $15$; (b) solid line, shade below; (c) $(5,5)$ is within budget, $(4,8)$ is not; (d) $9$ snacks.",
            commonErrors: ["Using a dashed line even though $\\le$ includes the boundary.", "Reversing the inequality when dividing by positive 4.", "Treating a purchase exactly at $\\$60$ as out of budget."],
          },
        },
      ],
    },
    {
      id: "alg1-u2-feasible-regions",
      title: "Systems, feasible regions, and constraints",
      skill: "Graph a system of linear inequalities, identify its feasible region, and evaluate a simple objective function at its vertices.",
      lesson: {
        sections: [
          {
            heading: "The overlap is feasible",
            body: `A system of inequalities imposes several conditions at once. Graph each boundary and shade the half-plane for that inequality. The **feasible region** is the overlap: every point in it satisfies all the constraints simultaneously. A point in only one shaded half-plane is not feasible for the system.

In context, define variables with units before writing constraints. A workshop might have $x$ and $y$ represent the number of two products. Conditions such as $x\\ge0$, $y\\ge0$, $x+y\\le 12$, and $2x+y\\le 16$ limit which production plans are possible. Nonnegative constraints restrict the feasible region to the first quadrant. Solid lines include their boundary values; strict constraints exclude their boundaries.`,
          },
          {
            heading: "Use vertices to compare plans",
            body: `When a feasible region is a bounded polygon and a linear objective is being maximized or minimized, the best value occurs at at least one vertex of that polygon. Find the corner coordinates by solving the boundary equations in pairs, retain only feasible corners, and evaluate the objective at each one. Then interpret the result in context.

This procedure identifies the best value for the stated linear model; it does not remove practical conditions such as whole-number product counts. If variables count items, a fractional vertex may not be a usable plan, so check whether the context requires integer values before choosing a final recommendation.`,
          },
        ],
        keyFormulas: [
          { name: "Feasible region", statement: "\\text{Feasible region}=\\bigcap \\text{(solution half-planes of all constraints)}" },
          { name: "Objective function", statement: "$P=ax+by$ assigns a value to each feasible point; compare its values at feasible vertices of a bounded polygon." },
        ],
        workedExample: {
          problem: "A plan must satisfy $x\\ge0$, $y\\ge0$, $x+y\\le6$, and $x+2y\\le8$. The objective is $P=3x+2y$. Find the greatest possible value of $P$ over the feasible region.",
          solution: "The feasible polygon has vertices $(0,0)$, $(6,0)$, $(4,2)$, and $(0,4)$. The two slanted boundaries intersect where $x+y=6$ and $x+2y=8$: subtracting gives $y=2$, so $x=4$. Evaluate the objective: $P(0,0)=0$, $P(6,0)=18$, $P(4,2)=16$, and $P(0,4)=8$. The greatest value is $18$ at $(6,0)$. Each listed vertex satisfies all four constraints.",
        },
      },
      questions: [
        {
          id: "alg1-u2-feasible-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A point lies in the shaded region for $y\\ge x$ but not in the shaded region for $x+y\\le 6$. Is it in the feasible region of the system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yes, because it satisfies at least one inequality." },
            { id: "b", text: "No, because a feasible point must satisfy every inequality." },
            { id: "c", text: "Yes, if it is on either boundary." },
            { id: "d", text: "No, because feasible regions contain only points in the first quadrant." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasible region", statement: "The feasible region is the intersection of the solution sets of every inequality in the system." },
              { kind: "principle", name: "System constraint", statement: "A feasible point must satisfy all constraints simultaneously, not merely one of them." },
            ],
            steps: [
              { reasoning: "The point satisfies the first inequality but fails the second.", marks: 1, markCode: "B" },
              { reasoning: "Because every condition must hold, a point failing one constraint is outside the feasible region.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** No; a feasible point must satisfy every inequality.",
            commonErrors: ["Treating the shaded half-planes as alternatives rather than finding their overlap."],
          },
        },
        {
          id: "alg1-u2-feasible-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A feasible region has vertices $(0,0)$, $(4,0)$, $(0,3)$, and $(2,2)$. For the objective $P=2x+3y$, what is the greatest vertex value?",
          response: { type: "numeric", parts: [{ label: "Maximum $P$", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linear objective at vertices", statement: "For a linear objective on a bounded polygonal feasible region, a maximum or minimum occurs at a vertex." },
              { kind: "formula", name: "Objective function", statement: "$P=2x+3y$; substitute each vertex's coordinates to evaluate the objective." },
            ],
            steps: [
              { reasoning: "Evaluate the objective at the listed vertices.", working: "P(0,0)=0,\\quad P(4,0)=8,\\quad P(0,3)=9,\\quad P(2,2)=10", marks: 1, markCode: "M" },
              { reasoning: "Compare the values; the largest is 10 at $(2,2)$.", working: "\\max\\{0,8,9,10\\}=10", marks: 1, markCode: "A" },
              { reasoning: "Report the requested objective value, not just the vertex coordinates.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The greatest vertex value is $10$, at $(2,2)$.",
            commonErrors: ["Adding the coordinates without applying the coefficients in the objective function."],
          },
        },
        {
          id: "alg1-u2-feasible-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A maker produces item A ($x$) and item B ($y$). The constraints are $x\\ge0$, $y\\ge0$, $x+y\\le8$, and $2x+y\\le10$. For objective $P=3x+2y$, determine the greatest value of $P$ and the corresponding feasible vertex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasible region", statement: "A feasible point satisfies every constraint simultaneously." },
              { kind: "theorem", name: "Vertex principle for linear objectives", statement: "A linear objective over a bounded polygonal feasible region reaches its maximum at a vertex." },
              { kind: "principle", name: "Intersection of boundaries", statement: "A vertex where two boundary lines meet is found by solving their equations as a system." },
            ],
            steps: [
              { reasoning: "Identify the feasible corner points from the axes and the intersection of the two upper-bound constraints.", working: "(0,0),\\quad (5,0),\\quad (0,8),\\quad x+y=8,\\;2x+y=10", marks: 1, markCode: "M" },
              { reasoning: "Solve the two boundary equations to find their intersection.", working: "(2x+y)-(x+y)=10-8 \\\\ x=2,\\quad y=6", marks: 1, markCode: "A" },
              { reasoning: "Evaluate $P$ at all feasible vertices.", working: "P(0,0)=0,\\quad P(5,0)=15,\\quad P(0,8)=16,\\quad P(2,6)=18", marks: 1, markCode: "M" },
              { reasoning: "Choose the greatest value and state its feasible vertex.", working: "\\max\\{0,15,16,18\\}=18", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The greatest value is $P=18$, attained at the feasible vertex $(2,6)$.",
            commonErrors: ["Using the intersection of the two constraint lines without checking that it satisfies every inequality.", "Evaluating the objective at boundary intercepts but omitting the intersection vertex."],
            examinerNote: "The point $(2,6)$ meets both upper-bound constraints exactly and has nonnegative coordinates, so it is feasible.",
          },
        },
        {
          id: "alg1-u2-feasible-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bakery makes $x$ loaves of bread and $y$ cakes per batch. The constraints are $x\\ge0$, $y\\ge0$, $x+y\\le10$ (oven space) and $x+2y\\le14$ (preparation time). The profit per batch is $P=4x+5y$ dollars.",
          parts: [
            { label: "a", prompt: "Show that the plan $(6,4)$ is feasible and that it lies on both boundary lines.", marks: 2 },
            { label: "b", prompt: "Show by solving $x+y=10$ and $x+2y=14$ that $(6,4)$ is their intersection.", marks: 2 },
            { label: "c", prompt: "The other vertices of the feasible region are $(0,0)$, $(10,0)$ and $(0,7)$. Evaluate $P$ at all four vertices.", marks: 3 },
            { label: "d", prompt: "State the maximum profit and the plan that gives it. The owner suggests $(8,3)$; explain why this plan is not allowed.", marks: 3 },
          ],
          response: { type: "numeric", parts: [
            { label: "(b) $x$-coordinate of the intersection", answer: 6 },
            { label: "(b) $y$-coordinate of the intersection", answer: 4 },
            { label: "(c) Profit at $(0,7)$, in dollars", answer: 35 },
            { label: "(d) Maximum profit, in dollars", answer: 44 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasible region", statement: "A feasible plan satisfies every constraint simultaneously." },
              { kind: "theorem", name: "Vertex principle for linear objectives", statement: "A linear objective over a bounded polygonal feasible region reaches its maximum at a vertex." },
              { kind: "principle", name: "Intersection of boundaries", statement: "A vertex formed by two boundary lines is found by solving their equations as a system." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $(6,4)$ into both constraints; both hold with equality, and the coordinates are nonnegative.", working: "6+4=10\\le10,\\quad 6+2(4)=14\\le14", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equality in both means the point lies on both boundary lines; it is feasible.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Subtract the first equation from the second to eliminate $x$.", working: "(x+2y)-(x+y)=14-10 \\implies y=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute into $x+y=10$.", working: "x=10-4=6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate $P=4x+5y$ at the three vertices on the axes.", working: "P(0,0)=0,\\quad P(10,0)=40,\\quad P(0,7)=35", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate at the intersection vertex.", working: "P(6,4)=24+20=44", marks: 1, markCode: "M" },
              { part: "c", reasoning: "List all values together.", working: "\\{0,\\,40,\\,35,\\,44\\}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The maximum occurs at the largest vertex value.", working: "\\max=44\\text{ at }(6,4)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Interpret: make 6 loaves and 4 cakes per batch for $\\$44$ profit.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Test $(8,3)$ against the oven-space constraint: it fails, so the plan is outside the feasible region.", working: "8+3=11>10", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) both constraints hold with equality; (b) $(6,4)$; (c) $0,\\ 40,\\ 35,\\ 44$; (d) maximum profit $\\$44$ with 6 loaves and 4 cakes; $(8,3)$ breaks $x+y\\le10$.",
            commonErrors: ["Using the vertex $(0,10)$, which violates $x+2y\\le14$.", "Swapping the coefficients so that $P=5x+4y$.", "Finding the vertex values correctly but not stating the plan that achieves the maximum."],
            examinerNote: "Award the (d) accuracy mark for the maximum value and the corresponding vertex together.",
          },
        },
      ],
    },
  ],
};
