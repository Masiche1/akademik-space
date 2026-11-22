import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypme4-u3-lesson-3-2",
  code: "3-2",
  title: "Linear Programming and Discrete Mathematics",
  goal: "I CAN formulate linear programming problems, find feasible regions and optimal solutions, and apply discrete mathematics to networks and routes.",
  standards: [
    "MYP Maths: Discrete mathematics",
    "MYP Maths: Statistics and probability",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Linear programming", definition: "Optimising a linear objective function subject to linear constraints." },
    { term: "Objective function", definition: "The quantity to be maximised or minimised, e.g. $P=3x+2y$." },
    { term: "Constraint", definition: "A linear inequality limiting the feasible region, e.g. $x+y\\le10$." },
    { term: "Feasible region", definition: "The set of points satisfying all constraints." },
    { term: "Vertex", definition: "A corner point of the feasible region; optimal solutions occur at vertices." },
    { term: "Eulerian path", definition: "A path that uses every edge exactly once; exists when exactly 0 or 2 vertices have odd degree." },
  ],
  concepts: [
    {
      id: "mypme4-u3-lp",
      title: "Linear programming",
      skill: "Set up constraints, identify the feasible region, and find optimal solutions at vertices.",
      lesson: {
        sections: [
          {
            heading: "Setting up the problem",
            body: "Identify the **objective** (what to maximise/minimise) and the **constraints** (inequalities). For example: maximise $P=3x+2y$ subject to $x+y\\le10$, $x\\ge0$, $y\\ge0$, $x\\le6$.",
          },
          {
            heading: "The feasible region",
            body: "Plot each constraint on a graph; the **feasible region** is where all inequalities overlap. Shade the region that satisfies all constraints simultaneously.",
          },
          {
            heading: "Finding the optimum",
            body: "The optimal value of a linear objective occurs at a **vertex** (corner) of the feasible region. Evaluate the objective at each vertex and choose the maximum or minimum.",
          },
        ],
        keyFormulas: [
          { name: "Objective", statement: "$P=ax+by$ to maximise or minimise" },
          { name: "Constraints", statement: "Linear inequalities defining the feasible region" },
          { name: "Optimum", statement: "Occurs at a vertex of the feasible region" },
        ],
        workedExample: {
          problem: "Maximise $P=x+y$ subject to $x+y\\le4$, $x\\le3$, $x,y\\ge0$.",
          solution: "Vertices: $(0,0)$, $(3,0)$, $(3,1)$, $(0,4)$. Values: 0, 3, 4, 4. Maximum $P=4$ at $(3,1)$ and $(0,4)$.",
        },
      },
      questions: [
        {
          id: "mypme4-u3-lp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In linear programming, where does the optimal solution occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the origin" },
              { id: "b", text: "On the objective function line" },
              { id: "c", text: "At a vertex of the feasible region" },
              { id: "d", text: "Anywhere in the feasible region" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "LP optimum", statement: "Linear objective attains optimum at a vertex." },
            ],
            steps: [
              { reasoning: "Optimum is at a vertex.", working: "\\text{vertex}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** At a vertex",
            commonErrors: ["Thinking any point in the region works."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-lp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maximise $P=2x+y$ subject to $x+y\\le5$, $x,y\\ge0$. What is the maximum value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7.5" },
              { id: "b", text: "5" },
              { id: "c", text: "10" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Evaluate objective at vertices." },
            ],
            steps: [
              { reasoning: "Vertices: $(0,0)$, $(5,0)$, $(0,5)$. $P$ values: 0, 10, 5.", working: "P_{max}=10", marks: 1, markCode: "M" },
              { reasoning: "Maximum at $(5,0)$: $P=10$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Not checking all vertices."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-lp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A factory makes two products. Product A needs 2 hours machine time and 1 hour labour; product B needs 1 hour machine and 2 hours labour. Daily limits: 12 machine hours, 12 labour hours. Each A earns 30, each B earns 20. Maximise profit.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce 4 of A and 4 of B for profit 200" },
              { id: "b", text: "Produce 0 of A and 6 of B for profit 120" },
              { id: "c", text: "Produce 3 of A and 6 of B for profit 210" },
              { id: "d", text: "Produce 6 of A and 0 of B for profit 180" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP setup", statement: "Maximise $P=30a+20b$ subject to $2a+b\\le12$, $a+2b\\le12$, $a,b\\ge0$." },
            ],
            steps: [
              { reasoning: "Vertices: $(0,0)$, $(6,0)$, $(4,4)$, $(0,6)$.", working: "vertices", marks: 1, markCode: "M" },
              { reasoning: "$P$ values: 0, 180, 200, 120.", working: "P=200\\text{ at }(4,4)", marks: 1, markCode: "M" },
              { reasoning: "Maximum profit = 200 at $(4,4)$.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Produce 4 of A and 4 of B; profit 200",
            commonErrors: ["Not checking the intersection point of constraints."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-lp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A network has 5 vertices and 7 edges.",
          parts: [
            { label: "a", prompt: "State Euler's formula relating vertices, edges and faces for a connected planar graph.", marks: 1 },
            { label: "b", prompt: "If the network is planar, find the number of faces.", marks: 2 },
            { label: "c", prompt: "Explain the condition for an Eulerian circuit to exist.", marks: 2 },
            { label: "d", prompt: "If all vertices have even degree, does an Eulerian circuit exist? Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Euler's formula", statement: "$V-E+F=2$ for connected planar graphs." },
              { kind: "theorem", name: "Eulerian circuit", statement: "Exists iff all vertices have even degree." },
            ],
            steps: [
              { part: "a", reasoning: "$V-E+F=2$.", working: "V-E+F=2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F=2-V+E=2-5+7=4$.", working: "F=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the number of faces.", working: "4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "All vertices must have even degree for an Eulerian circuit.", working: "\\text{all even degree}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Explain the condition.", working: "\\text{even degrees}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Yes — all even degrees satisfy the condition.", working: "\\text{yes}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Justify using Euler's theorem.", working: "\\text{Eulerian circuit exists}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State conclusion.", working: "\\text{circuit exists}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $V-E+F=2$ (b) 4 faces (c) all vertices even degree (d) yes — condition satisfied",
            commonErrors: ["Confusing Eulerian circuit with Eulerian path."],
            examinerNote: "A1 for (a), M1 A1 for (b), R1 A1 for (c), R1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-lp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In linear programming, what defines the feasible region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All points satisfying every constraint simultaneously" },
              { id: "b", text: "The region outside all constraints" },
              { id: "c", text: "Only the vertices" },
              { id: "d", text: "The region above the objective function" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasible region", statement: "Set of points satisfying all constraints at once." },
            ],
            steps: [
              { reasoning: "The feasible region is where all inequalities overlap.", working: "\\text{all constraints}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** All points satisfying every constraint",
            commonErrors: ["Thinking only vertices count."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-lp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Maximise $P=x+y$ subject to $x+y\\le4$, $x,y\\ge0$. What is the maximum value of $P$?",
          response: { type: "numeric", parts: [{ label: "Maximum $P$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Optimum at a vertex; here $P=x+y\\le4$ everywhere in the region." },
            ],
            steps: [
              { reasoning: "The constraint $x+y\\le4$ means $P\\le4$; equality on the boundary." , working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Evaluating at a non-vertex or misreading the constraint."],
          },
        },
        {
          id: "mypme4-u3-lp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The feasible region is defined by $x\\le3$, $y\\le2$, $x+y\\le4$, $x,y\\ge0$. Which point is feasible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,2)$" },
              { id: "b", text: "$(3,1)$" },
              { id: "c", text: "$(4,1)$" },
              { id: "d", text: "$(2,3)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasible region", statement: "Check every constraint for each point." },
            ],
            steps: [
              { reasoning: "$(3,1)$: $3\\le3$ ✓, $1\\le2$ ✓, $3+1=4\\le4$ ✓ — feasible.", working: "(3,1)\\text{ feasible}", marks: 1, markCode: "M" },
              { reasoning: "Others fail: $(4,1)$ exceeds $x\\le3$; $(2,3)$ exceeds $y\\le2$; $(3,2)$ sums to 5.", working: "\\text{check all}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(3,1)$",
            commonErrors: ["Checking only one constraint."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-lp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maximise $P=2x+y$ subject to $x+y\\le5$, $x,y\\ge0$. What is the maximum value?",
          response: { type: "numeric", parts: [{ label: "Maximum $P$", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Evaluate $P$ at vertices $(0,0)$, $(5,0)$, $(0,5)$." },
            ],
            steps: [
              { reasoning: "Values: $P(0,0)=0$, $P(5,0)=10$, $P(0,5)=5$; maximum is 10.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Evaluating at $(2.5,2.5)$ or not checking all vertices."],
          },
        },
        {
          id: "mypme4-u3-lp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maximise $P=3x+2y$ subject to $x+y\\le6$, $x,y\\ge0$. What is the maximum value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "6" },
              { id: "c", text: "18" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Vertices $(0,0)$, $(6,0)$, $(0,6)$; $P$ values 0, 18, 12." },
            ],
            steps: [
              { reasoning: "$P(6,0)=3(6)=18$; $P(0,6)=12$; maximum 18.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Splitting evenly $(3,3)$ giving $P=15$ — not optimal since $x$ has higher coefficient."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-lp-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Maximise $P=x+3y$ subject to $x+y\\le8$, $x\\le5$, $x,y\\ge0$. What is the maximum value?",
          response: { type: "numeric", parts: [{ label: "Maximum $P$", answer: 24 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Vertices include $(0,8)$ where $y$ is maximised." },
            ],
            steps: [
              { reasoning: "Vertices: $(0,0)$, $(5,0)$, $(5,3)$, $(0,8)$; $P$ values 0, 5, 14, 24.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "Maximum is 24 at $(0,8)$.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$",
            commonErrors: ["Stopping at $(5,3)$ and missing the $(0,8)$ vertex."],
          },
        },
        {
          id: "mypme4-u3-lp-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A factory makes products A and B. A needs 2 machine-hours and 1 labour-hour; B needs 1 machine-hour and 2 labour-hours. Daily limits: 12 machine-hours and 12 labour-hours. Each A earns 30 and each B earns 20. What is the maximum daily profit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "120" },
              { id: "b", text: "180" },
              { id: "c", text: "240" },
              { id: "d", text: "200" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP setup", statement: "Maximise $P=30a+20b$ subject to $2a+b\\le12$, $a+2b\\le12$, $a,b\\ge0$." },
            ],
            steps: [
              { reasoning: "Vertices: $(0,0)$, $(6,0)$, $(4,4)$, $(0,6)$; profits 0, 180, 200, 120.", working: "P=200\\text{ at }(4,4)", marks: 1, markCode: "M" },
              { reasoning: "Maximum profit is 200 at $(4,4)$.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$",
            commonErrors: ["Not checking the intersection vertex $(4,4)$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-lp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Minimise $C=2x+y$ subject to $x+y\\ge6$, $x,y\\ge0$. What is the minimum value?",
          response: { type: "numeric", parts: [{ label: "Minimum $C$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "For $\\ge$ constraints the feasible region is unbounded; check vertices on the boundary $x+y=6$." },
            ],
            steps: [
              { reasoning: "Boundary vertices $(6,0)$ and $(0,6)$: $C=12$ and $C=6$.", working: "C=6\\text{ at }(0,6)", marks: 1, markCode: "M" },
              { reasoning: "Points beyond the boundary give larger $C$, so minimum is 6.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "State the minimum.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Minimising at $(0,0)$ which is infeasible for $\\ge$ constraints."],
          },
        },
        {
          id: "mypme4-u3-lp-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Maximise $P=2x+y$ subject to $x+y\\le6$, $x\\le4$, $x,y\\ge0$.",
          parts: [
            { label: "a", prompt: "List the vertices of the feasible region.", marks: 2 },
            { label: "b", prompt: "Find the maximum value of $P$ and where it occurs.", marks: 2 },
            { label: "c", prompt: "Find the minimum value of $P$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Evaluate objective at each vertex." },
            ],
            steps: [
              { part: "a", reasoning: "Vertices: $(0,0)$, $(4,0)$, $(4,2)$, $(0,6)$.", working: "(0,0),(4,0),(4,2),(0,6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four vertices correct.", working: "\\text{vertices}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P$ values: 0, 8, 10, 6; maximum 10 at $(4,2)$.", working: "P=10\\text{ at }(4,2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State max value and point.", working: "10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Minimum $P=0$ at $(0,0)$.", working: "0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the minimum.", working: "0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(0,0),(4,0),(4,2),(0,6)$ (b) max 10 at $(4,2)$ (c) min 0",
            commonErrors: ["Missing the vertex $(4,2)$ formed by the two constraints."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u3-lp-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A problem has constraints $x+y\\le10$, $x\\le6$, $x,y\\ge0$ and objective $P=x+2y$.",
          parts: [
            { label: "a", prompt: "State the four vertices of the feasible region.", marks: 2 },
            { label: "b", prompt: "Evaluate $P$ at each vertex.", marks: 2 },
            { label: "c", prompt: "Find the maximum value of $P$.", marks: 2 },
            { label: "d", prompt: "Interpret the result in terms of $x$ and $y$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Vertices: $(0,0)$, $(6,0)$, $(6,4)$, $(0,10)$." },
            ],
            steps: [
              { part: "a", reasoning: "Vertices: $(0,0)$, $(6,0)$, $(6,4)$, $(0,10)$.", working: "(0,0),(6,0),(6,4),(0,10)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All vertices correct.", working: "\\text{vertices}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P$ values: 0, 6, 14, 20.", working: "0,6,14,20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All evaluations correct.", working: "P\\text{ values}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Maximum $P=20$ at $(0,10)$.", working: "20", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the maximum.", working: "20", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Best solution is $x=0$, $y=10$ — produce only $y$.", working: "x=0,\\ y=10", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(0,0),(6,0),(6,4),(0,10)$ (b) 0, 6, 14, 20 (c) 20 (d) $x=0$, $y=10$",
            commonErrors: ["Missing the vertex $(6,4)$ at the constraint intersection."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme4-u3-lp-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bakery makes bread and cakes. Each loaf of bread needs 2 oven-hours and 1 labour-hour; each cake needs 1 oven-hour and 2 labour-hours. Daily limits: 10 oven-hours and 10 labour-hours. Profit: 25 per loaf, 15 per cake.",
          parts: [
            { label: "a", prompt: "Write the profit function $P(b,c)$ and the two constraints.", marks: 2 },
            { label: "b", prompt: "Find the vertices of the feasible region.", marks: 2 },
            { label: "c", prompt: "Evaluate $P$ at each vertex.", marks: 2 },
            { label: "d", prompt: "State the optimal production and profit.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP setup", statement: "Maximise $P=25b+15c$ subject to $2b+c\\le10$, $b+2c\\le10$, $b,c\\ge0$." },
            ],
            steps: [
              { part: "a", reasoning: "$P=25b+15c$; $2b+c\\le10$ and $b+2c\\le10$." , working: "P=25b+15c", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both constraints correct.", working: "2b+c\\le10,\\ b+2c\\le10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertices: $(0,0)$, $(5,0)$, $(\\frac{10}{3},\\frac{10}{3})$, $(0,5)$.", working: "vertices", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All four vertices correct including the intersection.", working: "(10/3,10/3)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P$ values: 0, 125, $\\frac{400}{3}\\approx133.3$, 75.", working: "0,125,133.3,75", marks: 1, markCode: "M" },
              { part: "c", reasoning: "All evaluations correct.", working: "P\\text{ values}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Maximum at $(\\frac{10}{3},\\frac{10}{3})$ — about 3 loaves and 3 cakes; profit $\\approx133$.", working: "\\approx133", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State optimal mix and profit.", working: "(3.33,3.33),\\ P\\approx133", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P=25b+15c$; $2b+c\\le10$, $b+2c\\le10$ (b) $(0,0),(5,0),(\\frac{10}{3},\\frac{10}{3}),(0,5)$ (c) 0, 125, ≈133.3, 75 (d) ≈3 loaves, ≈3 cakes, profit ≈133",
            commonErrors: ["Only checking axis vertices and missing the constraint intersection."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-lp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Maximise $P=4x+3y$ subject to $x+y\\le10$, $x,y\\ge0$. What is the maximum value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30" },
              { id: "b", text: "35" },
              { id: "c", text: "25" },
              { id: "d", text: "40" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP", statement: "Higher coefficient on $x$ → optimum at $(10,0)$." },
            ],
            steps: [
              { reasoning: "$P(10,0)=40$; $P(0,10)=30$; maximum 40.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "Check other vertices give less.", working: "40>30", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Splitting $x=y=5$ giving $P=35$ — not optimal."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u3-discrete",
      title: "Networks and routes",
      skill: "Apply discrete mathematics to networks, routes and counting problems.",
      lesson: {
        sections: [
          {
            heading: "Networks and graphs",
            body: "A **network** (graph) consists of **vertices** (nodes) connected by **edges**. Networks model transport systems, computer networks and social connections. Properties like degree (number of edges at a vertex) determine possible routes.",
          },
          {
            heading: "Counting routes",
            body: "The number of routes between two points can be counted systematically: list all possibilities or use multiplication for independent choices. For a network with choices at each step, multiply the number of options.",
          },
          {
            heading: "Shortest paths",
            body: "The **shortest path** problem asks for the minimum total distance or time between two vertices. Algorithms like Dijkstra's solve this systematically, but for small networks, trial and comparison works.",
          },
        ],
        keyFormulas: [
          { name: "Degree", statement: "Number of edges meeting at a vertex" },
          { name: "Handshaking lemma", statement: "Sum of all degrees = $2E$" },
        ],
        workedExample: {
          problem: "A network has 4 vertices. Vertex A connects to B and C; B connects to A, C, D; C connects to A, B, D; D connects to B, C. How many edges?",
          solution: "Edges: AB, AC, BC, BD, CD = 5 edges. Degrees: A=2, B=3, C=3, D=2. Sum = 10 = 2×5. ✓",
        },
      },
      questions: [
        {
          id: "mypme4-u3-disc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In graph theory, what is the degree of a vertex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of vertices in the graph" },
              { id: "b", text: "Number of edges meeting at that vertex" },
              { id: "c", text: "Number of faces" },
              { id: "d", text: "The weight of the vertex" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Degree", statement: "Number of edges incident to a vertex." },
            ],
            steps: [
              { reasoning: "Degree = edge count at vertex.", working: "\\text{edge count}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Number of edges meeting at that vertex",
            commonErrors: ["Confusing with number of vertices."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-disc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A graph has 6 vertices and 9 edges. What is the sum of all vertex degrees?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "18" },
              { id: "c", text: "9" },
              { id: "d", text: "54" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking lemma", statement: "Sum of degrees = $2E$." },
            ],
            steps: [
              { reasoning: "Sum = $2\\times9=18$.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Using $E$ instead of $2E$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A delivery driver must visit 4 locations. From the depot, there are 3 routes to location A, 2 routes from A to B, 4 routes from B to C, and 2 routes from C back to depot. How many complete routes are possible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "96" },
              { id: "c", text: "24" },
              { id: "d", text: "48" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting", statement: "Multiply independent choices at each stage." },
            ],
            steps: [
              { reasoning: "$3\\times2\\times4\\times2=48$.", working: "48", marks: 1, markCode: "M" },
              { reasoning: "Verify: $3\\times2=6$, $6\\times4=24$, $24\\times2=48$. ✓", working: "48", marks: 1, markCode: "M" },
              { reasoning: "State the number of routes.", working: "48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$ routes",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school has 4 teaching rooms connected by corridors. Room A connects to B and C; B connects to A, C, D; C connects to A, B, D; D connects to B and C only.",
          parts: [
            { label: "a", prompt: "Draw or describe the network.", marks: 1 },
            { label: "b", prompt: "Find the degree of each vertex.", marks: 2 },
            { label: "c", prompt: "Determine if an Eulerian circuit exists and justify.", marks: 2 },
            { label: "d", prompt: "If not, how many edges must be added to make an Eulerian circuit possible?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Eulerian", statement: "Circuit exists iff all degrees even." },
            ],
            steps: [
              { part: "a", reasoning: "Vertices A,B,C,D; edges AB, AC, BC, BD, CD.", working: "AB,AC,BC,BD,CD", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Degrees: A=2, B=3, C=3, D=2.", working: "2,3,3,2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All four degrees correct.", working: "\\text{all degrees}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "B and C have odd degree (3) — no Eulerian circuit.", working: "\\text{no circuit}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Justify using even-degree rule.", working: "\\text{odd degrees exist}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Need to make B and C even: add edge BC (or BD/CD) to make degrees 4,4,4,2? Adding BC: B=4,C=4 → all even except D=2 still even. Yes — adding one edge BC makes all degrees even.", working: "add BC", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check: B=4, C=4, A=2, D=2 — all even. ✓", working: "\\text{all even}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State minimum edges to add.", working: "1\\text{ edge}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) edges AB, AC, BC, BD, CD (b) A=2, B=3, C=3, D=2 (c) no — B and C odd (d) add 1 edge (BC)",
            commonErrors: ["Not realising only odd-degree vertices need fixing."],
            examinerNote: "A1 for (a), M1 A1 for (b), R1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-disc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In graph theory, what is the degree of a vertex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of faces" },
              { id: "b", text: "The weight of the vertex" },
              { id: "c", text: "The number of edges meeting at that vertex" },
              { id: "d", text: "The number of vertices in the graph" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Degree", statement: "Number of edges incident to a vertex." },
            ],
            steps: [
              { reasoning: "Degree counts edges at the vertex.", working: "\\text{edge count}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Number of edges meeting at that vertex",
            commonErrors: ["Confusing degree with the number of vertices."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u3-disc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A connected graph has 4 vertices and 6 edges. What is the sum of all vertex degrees?",
          response: { type: "numeric", parts: [{ label: "Sum of degrees", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking lemma", statement: "Sum of degrees $=2E=2\\times6=12$." },
            ],
            steps: [
              { reasoning: "$2\\times6=12$.", working: "12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Answering 6 — forgetting each edge counts twice."],
          },
        },
        {
          id: "mypme4-u3-disc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the condition for an Eulerian circuit to exist in a connected graph.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every vertex has even degree" },
              { id: "b", text: "Exactly two vertices have odd degree" },
              { id: "c", text: "Every vertex has odd degree" },
              { id: "d", text: "The graph has an even number of edges" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Eulerian circuit", statement: "Exists iff all vertices have even degree." },
            ],
            steps: [
              { reasoning: "All degrees must be even for a circuit.", working: "\\text{all even}", marks: 1, markCode: "M" },
              { reasoning: "State the condition.", working: "\\text{even degrees}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Every vertex has even degree",
            commonErrors: ["Confusing with the Eulerian path condition (exactly 2 odd)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A delivery route goes from the depot to town A (3 possible roads), then to town B (4 possible roads), then home (2 possible roads). How many complete routes are possible?",
          response: { type: "numeric", parts: [{ label: "Number of routes", answer: 24 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting", statement: "Multiply independent choices at each stage." },
            ],
            steps: [
              { reasoning: "$3\\times4\\times2=24$.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "State the number of routes.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$ routes",
            commonErrors: ["Adding 3+4+2=9 instead of multiplying."],
          },
        },
        {
          id: "mypme4-u3-disc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The sum of all vertex degrees in a graph is 20. How many edges does the graph have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "10" },
              { id: "c", text: "40" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking lemma", statement: "Sum of degrees $=2E$, so $E=\\frac{20}{2}=10$." },
            ],
            steps: [
              { reasoning: "$E=\\frac{20}{2}=10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "State the number of edges.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ edges",
            commonErrors: ["Dividing by 4 or using 20 directly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A graph has 5 vertices and the sum of all degrees is 16. How many edges does it have?",
          response: { type: "numeric", parts: [{ label: "Edges", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking lemma", statement: "$2E=16 \\Rightarrow E=8$." },
            ],
            steps: [
              { reasoning: "$E=\\frac{16}{2}=8$.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "State the number of edges.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ edges",
            commonErrors: ["Answering 16."],
          },
        },
        {
          id: "mypme4-u3-disc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of the following degree sequences is impossible for a graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1, 2, 3, 4, 2" },
              { id: "b", text: "3, 3, 2, 2, 2" },
              { id: "c", text: "2, 2, 2, 2" },
              { id: "d", text: "3, 3, 3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking lemma", statement: "Sum of degrees must be even (equals $2E$)." },
            ],
            steps: [
              { reasoning: "Sums: 9, 8, 12, 12.", working: "9\\text{ is odd}", marks: 1, markCode: "M" },
              { reasoning: "3+3+3=9 is odd — impossible since sum of degrees must be even.", working: "\\text{odd sum}", marks: 1, markCode: "M" },
              { reasoning: "Select the impossible sequence.", working: "3,3,3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 3, 3, 3",
            commonErrors: ["Not checking that the degree sum must be even."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A connected planar graph has 6 vertices and 10 edges. How many faces does it have?",
          response: { type: "numeric", parts: [{ label: "Faces", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Euler's formula", statement: "$V-E+F=2 \\Rightarrow F=2-6+10=6$." },
            ],
            steps: [
              { reasoning: "$F=2-V+E=2-6+10=6$.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "State the number of faces.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ faces",
            commonErrors: ["Computing $V+E-F=2$ incorrectly."],
          },
        },
        {
          id: "mypme4-u3-disc-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A network has vertices A, B, C, D with edges AB, AC, BC, BD, CD. Does an Eulerian circuit exist? Does an Eulerian path exist?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes circuit but no path" },
              { id: "b", text: "No circuit, but yes an Eulerian path" },
              { id: "c", text: "Yes circuit and yes path" },
              { id: "d", text: "No circuit and no path" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Eulerian", statement: "Circuit: all even degrees. Path: exactly 0 or 2 odd degrees." },
            ],
            steps: [
              { reasoning: "Degrees: A=2, B=3, C=3, D=2 — two odd degrees.", working: "2,3,3,2", marks: 1, markCode: "M" },
              { reasoning: "Not all even → no circuit; exactly 2 odd → Eulerian path exists.", working: "\\text{path yes}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct option.", working: "\\text{path only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** No circuit, but yes an Eulerian path",
            commonErrors: ["Thinking a path needs all even degrees too."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A school network has 4 rooms A, B, C, D with corridors AB, AC, BC, BD.",
          parts: [
            { label: "a", prompt: "List the edges of the network.", marks: 1 },
            { label: "b", prompt: "Find the degree of each vertex.", marks: 2 },
            { label: "c", prompt: "Determine whether an Eulerian circuit exists, justifying your answer.", marks: 2 },
            { label: "d", prompt: "If not, state the minimum number of corridors to add for a circuit to exist.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Eulerian", statement: "Circuit exists iff all degrees even." },
            ],
            steps: [
              { part: "a", reasoning: "Edges: AB, AC, BC, BD.", working: "AB,AC,BC,BD", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Degrees: A=2, B=3, C=2, D=1.", working: "2,3,2,1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All degrees correct.", working: "\\text{degrees}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "B and D have odd degree — no Eulerian circuit.", working: "\\text{no circuit}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Justify using the even-degree rule.", working: "\\text{odd degrees}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add a parallel corridor BD: D=2 and B=4, giving degrees 2,4,2,2 — all even.", working: "add BD", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check: degrees become 2,4,2,2 — all even. ✓", working: "\\text{all even}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) AB, AC, BC, BD (b) A=2, B=3, C=2, D=1 (c) no — odd degrees exist (d) add 1 corridor (BD)",
            commonErrors: ["Adding an edge that doesn't fix both odd-degree vertices."],
            examinerNote: "A1 for (a), M1 A1 for (b), R1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u3-disc-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A courier can take 4 routes from the depot to town A, 3 routes from A to town B, and 2 routes from B back to the depot. How many complete journeys are possible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "12" },
              { id: "c", text: "48" },
              { id: "d", text: "24" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting", statement: "Multiply choices at each stage: $4\\times3\\times2=24$." },
            ],
            steps: [
              { reasoning: "$4\\times3\\times2=24$.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "Check: $4\\times3=12$, $12\\times2=24$. ✓", working: "24", marks: 1, markCode: "M" },
              { reasoning: "State the number of journeys.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$ journeys",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u3-disc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A network has 5 vertices and 7 edges.",
          parts: [
            { label: "a", prompt: "Find the sum of all vertex degrees.", marks: 2 },
            { label: "b", prompt: "If the network is planar, find the number of faces.", marks: 2 },
            { label: "c", prompt: "The degrees are 3, 3, 4, 2, 2. Does an Eulerian circuit exist? Does an Eulerian path exist?", marks: 2 },
            { label: "d", prompt: "What is the minimum number of edges to add for an Eulerian circuit to exist?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking", statement: "Sum of degrees $=2E=14$." },
              { kind: "theorem", name: "Euler", statement: "$V-E+F=2$; circuit needs all even degrees." },
            ],
            steps: [
              { part: "a", reasoning: "Sum $=2\\times7=14$.", working: "14", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the sum.", working: "14", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F=2-V+E=2-5+7=4$.", working: "4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the faces.", working: "4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Degrees 3,3,4,2,2: two odd degrees → no circuit, but Eulerian path exists.", working: "\\text{path yes, circuit no}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "State both conclusions.", working: "\\text{path only}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Connect the two odd-degree vertices with one edge: degrees become 4,4,4,2,2 — all even.", working: "add 1 edge", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the minimum.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 14 (b) 4 faces (c) no circuit, yes path (d) 1 edge",
            commonErrors: ["In (d), adding edges at the wrong vertices."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), R1 A1 for (c), M1 A1 for (d).",
          },
        },
      ],
    },
  ],
};
