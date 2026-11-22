import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypme5-u3-lesson-3-3",
  code: "3-3",
  title: "Discrete Mathematics and Extended Statistics",
  goal: "I CAN apply graph theory to networks and pathways, and use extended statistical methods including regression and probability distributions.",
  standards: [
    "MYP Maths: Discrete Mathematics",
    "MYP Maths: Statistics & Probability",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Graph", definition: "A set of vertices connected by edges; models networks, maps, and relationships." },
    { term: "Eulerian path/circuit", definition: "A path using every edge exactly once; circuit starts and ends at same vertex. Exists iff exactly 0 or 2 vertices have odd degree." },
    { term: "Hamiltonian path", definition: "A path visiting every vertex exactly once (not necessarily every edge)." },
    { term: "Degree", definition: "Number of edges meeting at a vertex." },
    { term: "Binomial distribution", definition: "Distribution of number of successes in $n$ independent trials with probability $p$: $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$." },
  ],
  concepts: [
    {
      id: "mypme5-u3-graphs",
      title: "Graph theory and networks",
      skill: "Apply graph theory concepts — vertices, edges, degrees, Eulerian paths — to model and solve network problems.",
      lesson: {
        sections: [
          {
            heading: "Graphs and networks",
            body: "Vertices = points/locations; edges = connections/routes. Degree = number of edges at a vertex. Sum of degrees = 2 × number of edges (handshaking theorem).",
          },
          {
            heading: "Eulerian paths and circuits",
            body: "**Eulerian circuit**: uses every edge once, starts/ends same vertex — exists iff all degrees even. **Eulerian path**: uses every edge once — exists iff exactly 2 vertices have odd degree (start/end at those). **Neither**: more than 2 odd-degree vertices.",
          },
          {
            heading: "Applications",
            body: "Route inspection (postman problem), network reliability, social networks, and game boards. Hamiltonian paths visit each vertex once — harder problem, no simple degree rule.",
          },
        ],
        keyFormulas: [
          { name: "Handshaking", statement: "$\\sum\\deg=2E$" },
          { name: "Eulerian circuit", statement: "All degrees even" },
          { name: "Eulerian path", statement: "Exactly 2 odd-degree vertices" },
        ],
        workedExample: {
          problem: "Graph has vertices A,B,C,D with edges AB,BC,CD,DA,AC. Can it have an Eulerian circuit?",
          solution: "Degrees: A=3,B=2,C=3,D=2. Two odd vertices (A,C) → Eulerian path exists (A to C), not circuit.",
        },
      },
      questions: [
        {
          id: "mypme5-u3-graph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a graph with 8 edges, what is the sum of all vertex degrees?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "32" },
              { id: "c", text: "4" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking", statement: "Sum of degrees = 2 × edges = 16." },
            ],
            steps: [
              { reasoning: "$2\\times8=16$.", working: "16", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 16",
            commonErrors: ["Not doubling the edge count."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-graph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A connected graph has vertices with degrees 3, 3, 4, 4, 4. How many edges does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18" },
              { id: "b", text: "8" },
              { id: "c", text: "11" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshaking", statement: "Sum degrees $=3+3+4+4+4=18$; edges $=18/2=9$." },
            ],
            steps: [
              { reasoning: "Sum $=18$; $E=9$.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "State the edge count.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 edges",
            commonErrors: ["Forgetting to halve the degree sum."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A graph has 5 vertices with degrees 2, 4, 3, 3, 4. Does an Eulerian path exist? If so, where does it start and end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, from degree-2 to degree-4 vertex" },
              { id: "b", text: "Yes, it's a circuit" },
              { id: "c", text: "No, too many odd vertices" },
              { id: "d", text: "Yes, from vertex with degree 3 to the other degree-3 vertex" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Euler", statement: "Odd-degree vertices: two vertices with degree 3 → Eulerian path between them." },
            ],
            steps: [
              { reasoning: "Odd degrees: 3 and 3 (two vertices) → Eulerian path exists between them.", working: "\\text{2 odd vertices}", marks: 1, markCode: "M" },
              { reasoning: "Start/end at the two odd-degree vertices.", working: "\\text{degree-3 vertices}", marks: 1, markCode: "M" },
              { reasoning: "State conclusion.", working: "\\text{Eulerian path exists}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, between the two degree-3 vertices",
            commonErrors: ["Counting degree-4 vertices as odd."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A postal worker must deliver to 6 houses connected by paths: A-B, A-C, B-C, B-D, C-D, C-E, D-E, D-F, E-F.",
          parts: [
            { label: "a", prompt: "Draw the graph and find each vertex's degree.", marks: 2 },
            { label: "b", prompt: "Determine if an Eulerian circuit exists.", marks: 1 },
            { label: "c", prompt: "If not, find the minimum number of paths to duplicate (repeat) to make an Eulerian circuit possible.", marks: 3 },
            { label: "d", prompt: "Find a Hamiltonian path visiting all 6 vertices.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Euler's theorem", statement: "Circuit needs all even degrees; path needs exactly 2 odd." },
            ],
            steps: [
              { part: "a", reasoning: "Degrees: A=2,B=3,C=4,D=4,E=3,F=2. Odd vertices: B and E.", working: "A=2,B=3,C=4,D=4,E=3,F=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all degrees.", working: "\\text{degrees}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two odd vertices (B,E) → Eulerian path exists but NOT circuit.", working: "\\text{path only}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "To make circuit, need all even: duplicate one path connecting B and E... duplicating edge BE would make B,E degree 4 — but BE doesn't exist as edge; duplicating any path B-...-E effectively adds 1 to degree of B and E if we duplicate a path from B to E. Simplest: duplicate path B-C-E (edges BC,CE) → B,E become degree 4, C stays even? C gains +2 → still even. Total added degree: B+1? Path B-C-E: B+1, C+2, E+1 → B=4,E=4,C=6 all even ✓. So duplicate 2 edges (BC and CE).", working: "2\\text{ edges}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify all degrees become even.", working: "B=4,E=4,C=6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State minimum.", working: "2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Hamiltonian path: A-B-D-F-E-C... check edges: A-B✓,B-D✓,D-F✓,F-E✓,E-C✓ — visits A,B,D,F,E,C all once. Or A-C-E-F-D-B. Valid: A-B-D-F-E-C.", working: "A-B-D-F-E-C", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Verify each consecutive pair is an edge.", working: "\\text{valid path}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) degrees 2,3,4,4,3,2 (b) no circuit (c) duplicate 2 edges (d) A-B-D-F-E-C",
            commonErrors: ["In (c), duplicating a single edge incident to B — need to fix both odd vertices."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-graph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In graph theory, what is the degree of a vertex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of connected components" },
              { id: "b", text: "The number of edges meeting that vertex" },
              { id: "c", text: "The length of the longest path" },
              { id: "d", text: "The number of vertices in the graph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Degree", statement: "Degree of a vertex = number of edges incident to it (loops count twice)." },
            ],
            steps: [
              { reasoning: "Degree counts incident edges.", working: "\\text{incident edges}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Number of edges meeting the vertex",
            commonErrors: ["Confusing degree with the number of vertices."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-graph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A graph has 5 vertices and 7 edges. What is the sum of all vertex degrees?",
          response: { type: "numeric", parts: [{ label: "Sum of degrees", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshake lemma", statement: "Sum of degrees $=2\\times$ number of edges $=14$." },
            ],
            steps: [
              { reasoning: "$2\\times7=14$.", working: "14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "14",
            commonErrors: ["Answering 7 (forgetting each edge contributes 2)."],
          },
        },
        {
          id: "mypme5-u3-graph-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why can a graph never have exactly one vertex of odd degree?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loops are not allowed" },
              { id: "b", text: "The sum of degrees must be even (handshaking), so odd-degree vertices come in pairs" },
              { id: "c", text: "Graphs must have an even number of edges" },
              { id: "d", text: "All vertices must have even degree" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Handshake lemma", statement: "Sum of degrees $=2E$ is even; an odd number of odd-degree vertices would make the sum odd — impossible." },
            ],
            steps: [
              { reasoning: "One odd degree would make the sum odd, contradicting $2E$ even.", working: "\\text{odd count impossible}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Odd-degree vertices come in pairs",
            commonErrors: ["Thinking all degrees must be even — Euler paths allow exactly two."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many edges does the complete graph $K_4$ have?",
          response: { type: "numeric", parts: [{ label: "Edges", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complete graph", statement: "$K_n$ has $\\frac{n(n-1)}{2}$ edges; $K_4$: $\\frac{4\\times3}{2}=6$." },
            ],
            steps: [
              { reasoning: "$\\frac{4\\times3}{2}=6$ edges.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "State the number.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Computing $4\\times3=12$ without dividing by 2."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A connected graph has an Eulerian path but not an Eulerian circuit. How many vertices of odd degree does it have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exactly 0" },
              { id: "b", text: "Exactly 2" },
              { id: "c", text: "Exactly 1" },
              { id: "d", text: "Any even number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Euler's theorem", statement: "Eulerian circuit needs all even degrees; Eulerian path (not circuit) needs exactly 2 odd degrees." },
            ],
            steps: [
              { reasoning: "Path but not circuit → exactly two odd-degree vertices (the endpoints).", working: "2\\text{ odd}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Exactly 2",
            commonErrors: ["Confusing the conditions for path and circuit."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many edges does the complete graph $K_5$ have?",
          response: { type: "numeric", parts: [{ label: "Edges", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complete graph", statement: "$\\frac{5\\times4}{2}=10$ edges." },
            ],
            steps: [
              { reasoning: "$\\frac{20}{2}=10$.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 20."],
          },
        },
        {
          id: "mypme5-u3-graph-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tree has 8 vertices. How many edges does it have?",
          response: { type: "numeric", parts: [{ label: "Edges", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tree property", statement: "A tree on $n$ vertices has exactly $n-1$ edges." },
            ],
            steps: [
              { reasoning: "$8-1=7$ edges.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "State the number.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
            commonErrors: ["Answering 8 or 16."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A road network has towns $A,B,C,D$ with roads $AB=3$, $BC=4$, $AC=8$, $BD=2$, $CD=5$ km. Find the shortest path from $A$ to $D$.",
          response: { type: "numeric", parts: [{ label: "Shortest distance (km)", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Shortest path", statement: "Compare routes: $A\\to B\\to D=3+2=5$; $A\\to B\\to C\\to D=3+4+5=12$; $A\\to C\\to D=8+5=13$." },
            ],
            steps: [
              { reasoning: "Enumerate paths and sum weights: 5, 12, 13.", working: "5,12,13", marks: 1, markCode: "M" },
              { reasoning: "Minimum is 5 via $A\\to B\\to D$.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "State the distance.", working: "5\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 km",
            commonErrors: ["Choosing the direct-looking $A\\to C\\to D$ without comparing."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school has 5 buildings connected by paths: hall–canteen 4, canteen–library 3, library–hall 6, hall–gym 5, gym–library 2, canteen–gym 7 (units arbitrary).",
          parts: [
            { label: "a", prompt: "List the edges of the graph.", marks: 1 },
            { label: "b", prompt: "Find the degree of each vertex.", marks: 1 },
            { label: "c", prompt: "Does an Eulerian path exist? Justify.", marks: 2 },
            { label: "d", prompt: "Find the shortest path from hall to gym.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Graph analysis", statement: "Eulerian path needs 0 or 2 odd-degree vertices; shortest path compares route sums." },
            ],
            steps: [
              { part: "a", reasoning: "Edges: HC, CN, NL, HG, GL, CG (H=hall, C=canteen, N=library, G=gym).", working: "6\\text{ edges}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Degrees: hall 3, canteen 3, library 3, gym 3 — all odd!", working: "3,3,3,3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Four odd-degree vertices → no Eulerian path (needs exactly 0 or 2).", working: "4\\text{ odd}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude no Eulerian path exists.", working: "\\text{no Eulerian path}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Routes: H–G direct 5; H–C–N–G=4+3+2=9; H–N–G=6+2=8; min is 5.", working: "5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the shortest path distance.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6 edges (b) all degree 3 (c) no — 4 odd vertices (d) 5 via direct hall–gym",
            commonErrors: ["In (b), miscounting degrees — each building has 3 paths."],
            examinerNote: "B1 for (a), M1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-graph-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does an adjacency matrix represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of all vertex degrees" },
              { id: "b", text: "The weights of all edges in order" },
              { id: "c", text: "A square matrix where entry $(i,j)$ gives the number of edges between vertices $i$ and $j$" },
              { id: "d", text: "A matrix of shortest path distances only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adjacency matrix", statement: "Rows/columns = vertices; entry $(i,j)$ = number (or weight) of edges $ij$." },
            ],
            steps: [
              { reasoning: "Adjacency matrix encodes edge counts between vertex pairs.", working: "\\text{edge counts}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Matrix of edge counts",
            commonErrors: ["Confusing adjacency matrix with distance matrix."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the minimum number of edges needed to connect 6 vertices into a single connected graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "15" },
              { id: "c", text: "12" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Spanning tree", statement: "Minimum connected graph on $n$ vertices is a tree with $n-1$ edges." },
            ],
            steps: [
              { reasoning: "$6-1=5$ edges (a spanning tree).", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Computing $\\frac{6\\times5}{2}=15$ (that's $K_6$, the maximum)."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-graph-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Four towns $A,B,C,D$ must be connected by cable. Distances: $AB=3$, $AC=5$, $AD=9$, $BC=4$, $BD=6$, $CD=2$ km.",
          parts: [
            { label: "a", prompt: "List the possible cables in order of increasing length.", marks: 1 },
            { label: "b", prompt: "Apply Kruskal's algorithm: select edges that do not form a cycle until all towns are connected.", marks: 2 },
            { label: "c", prompt: "Find the minimum total cable length.", marks: 1 },
            { label: "d", prompt: "Verify the selected network is connected and has no cycle.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Minimum spanning tree", statement: "Kruskal: add cheapest edge that doesn't form a cycle." },
            ],
            steps: [
              { part: "a", reasoning: "Order: $CD=2$, $AB=3$, $BC=4$, $AC=5$, $BD=6$, $AD=9$.", working: "2,3,4,5,6,9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Select $CD$ (2), $AB$ (3), $BC$ (4): connects $D-C-B-A$; next $AC$ would form cycle $A-B-C-A$? Check: adding $AC$ creates cycle $A-B-C-A$ — skip; $BD$ also creates cycle — skip; $AD$ creates cycle — skip. Done with 3 edges.", working: "CD,AB,BC", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State selected edges.", working: "CD,AB,BC", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total $=2+3+4=9$ km.", working: "9\\text{ km}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Path $A-B-C-D$ visits all 4 towns with 3 edges and no cycle → valid spanning tree.", working: "\\text{tree, connected}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 2,3,4,5,6,9 (b) $CD,AB,BC$ (c) 9 km (d) valid tree",
            commonErrors: ["Selecting $AC$ after $AB,BC$ — it would close a cycle."],
            examinerNote: "M1 for (a), M1 A1 for (b), M1 for (c), R1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypme5-u3-binomial",
      title: "Extended Probability and Statistics",
      skill: "Apply binomial probability, interpret regression output, and use statistical inference concepts.",
      lesson: {
        sections: [
          {
            heading: "Binomial distribution",
            body: "For $n$ independent trials, each success prob $p$: $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$. Mean $=np$, variance $=np(1-p)$. Conditions: fixed $n$, constant $p$, independence.",
          },
          {
            heading: "Regression and correlation",
            body: "Pearson's $r$ measures linear correlation strength/direction. Regression line $\\hat{y}=a+bx$ where $b=\\frac{s_{xy}}{s_{xx}}$. Residuals = actual − predicted; pattern in residuals indicates poor fit.",
          },
          {
            heading: "Statistical inference basics",
            body: "Sample vs population; random sampling reduces bias. Margin of error decreases with sample size. Confidence intervals give range likely to contain true parameter.",
          },
        ],
        keyFormulas: [
          { name: "Binomial", statement: "$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$" },
          { name: "Mean/variance", statement: "$\\mu=np$, $\\sigma^2=np(1-p)$" },
          { name: "Correlation", statement: "$r\\in[-1,1]$" },
        ],
        workedExample: {
          problem: "Coin flipped 10 times. Find P(exactly 3 heads).",
          solution: "$P(X=3)=\\binom{10}{3}(0.5)^{10}=120(0.000977)=0.117$.",
        },
      },
      questions: [
        {
          id: "mypme5-u3-bin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A biased coin has P(heads)=0.6. Flipped 5 times. Find P(exactly 3 heads).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.5" },
              { id: "b", text: "$\\binom{5}{3}(0.6)^5=0.2592$" },
              { id: "c", text: "$\\binom{5}{3}(0.6)^3(0.4)^2=0.3466$" },
              { id: "d", text: "$(0.6)^3=0.216$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial", statement: "$P(X=3)=\\binom{5}{3}(0.6)^3(0.4)^2=10(0.216)(0.16)=0.3456$." },
            ],
            steps: [
              { reasoning: "$10\\times0.216\\times0.16=0.3456$.", working: "0.3456", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 0.3466",
            commonErrors: ["Forgetting the $(1-p)^{n-k}$ factor."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-bin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For binomial with $n=20$, $p=0.3$, find the mean and variance.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean 20, variance 4.2" },
              { id: "b", text: "Mean 0.3, variance 0.21" },
              { id: "c", text: "Mean 6, variance 4.2" },
              { id: "d", text: "Mean 6, variance 6" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial moments", statement: "$\\mu=np=6$; $\\sigma^2=np(1-p)=20(0.3)(0.7)=4.2$." },
            ],
            steps: [
              { reasoning: "$\\mu=6$, $\\sigma^2=4.2$.", working: "6,4.2", marks: 1, markCode: "M" },
              { reasoning: "State both.", working: "6,4.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean 6, variance 4.2",
            commonErrors: ["Using $np^2$ for variance."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A die is rolled 4 times. Find P(at least one six).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4(\\frac{1}{6})=0.667$" },
              { id: "b", text: "$1-(\\frac{1}{6})^4=0.999$" },
              { id: "c", text: "$1-(\\frac{5}{6})^4=0.518$" },
              { id: "d", text: "$\\frac{4}{6}=0.667$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complement", statement: "P(at least one) = 1 − P(none) = $1-(\\frac{5}{6})^4=1-0.4823=0.5177$." },
            ],
            steps: [
              { reasoning: "P(no six in 4 rolls) $=(\\frac{5}{6})^4=0.4823$.", working: "0.4823", marks: 1, markCode: "M" },
              { reasoning: "$1-0.4823=0.5177\\approx0.518$.", working: "0.518", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.518", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.518",
            commonErrors: ["Adding single-trial probabilities instead of using complement."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A factory produces items with 5% defect rate. A sample of 50 items is taken.",
          parts: [
            { label: "a", prompt: "State the distribution and its parameters.", marks: 1 },
            { label: "b", prompt: "Find expected number of defective items.", marks: 1 },
            { label: "c", prompt: "Find P(exactly 2 defective).", marks: 3 },
            { label: "d", prompt: "Find P(more than 2 defective).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial", statement: "$X\\sim B(50,0.05)$; use complement for 'more than'." },
            ],
            steps: [
              { part: "a", reasoning: "$X\\sim B(50,0.05)$ — binomial with $n=50$, $p=0.05$.", working: "B(50,0.05)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$E(X)=np=50(0.05)=2.5$.", working: "2.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(X=2)=\\binom{50}{2}(0.05)^2(0.95)^{48}=1225(0.0025)(0.0856)=0.261$.", working: "0.261", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute binomial coefficient and powers.", working: "1225\\times0.0025\\times0.0856", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", working: "0.261", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P(X>2)=1-P(X\\le2)=1-[P(0)+P(1)+P(2)]$; $P(0)=0.95^{50}=0.0769$; $P(1)=50(0.05)(0.95)^{49}=0.2025$; $P(2)=0.261$ (approx); sum $=0.540$; $P(X>2)=0.460$.", working: "0.460", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use complement: compute $P(X\\le2)$ first.", working: "1-0.540", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the probability.", working: "0.460", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $B(50,0.05)$ (b) 2.5 (c) 0.261 (d) 0.460",
            commonErrors: ["In (d), computing P(X=3) instead of P(X>2)."],
            examinerNote: "A1 for (a), A1 for (b), M1 M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-bin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\binom{5}{2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "5" },
              { id: "c", text: "10" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial coefficient", statement: "$\\binom{5}{2}=\\frac{5!}{2!3!}=\\frac{5\\times4}{2}=10$." },
            ],
            steps: [
              { reasoning: "$\\frac{5\\times4}{2\\times1}=10$.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 10",
            commonErrors: ["Computing $5\\times4=20$ without dividing."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-bin-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fair coin is flipped 3 times. Find the probability of exactly 2 heads.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.375, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$P(X=2)=\\binom{3}{2}(0.5)^2(0.5)^1=3\\times0.125=0.375$." },
            ],
            steps: [
              { reasoning: "$\\binom{3}{2}=3$ arrangements; each has probability $0.125$.", working: "3\\times0.125", marks: 1, markCode: "M" },
              { reasoning: "$P=0.375$.", working: "0.375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.375",
            commonErrors: ["Forgetting the $\\binom{3}{2}=3$ arrangements."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which conditions must hold for a random variable $X$ to follow a binomial distribution $B(n,p)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any number of trials with changing probabilities" },
              { id: "b", text: "Trials must be dependent" },
              { id: "c", text: "Fixed number $n$ of independent trials, each with two outcomes and constant success probability $p$" },
              { id: "d", text: "Outcomes must be equally likely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binomial distribution", statement: "$B(n,p)$: $n$ independent trials, success prob $p$ constant, two outcomes per trial." },
            ],
            steps: [
              { reasoning: "Binomial requires fixed $n$, independence, constant $p$.", working: "\\text{B(n,p) conditions}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Fixed $n$, independent, constant $p$",
            commonErrors: ["Thinking $p$ must be 0.5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coin is flipped 5 times. Find the probability of exactly 4 heads.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.1563, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$P(X=4)=\\binom{5}{4}(0.5)^4(0.5)=5(0.03125)=0.15625$." },
            ],
            steps: [
              { reasoning: "$\\binom{5}{4}=5$; $5\\times0.03125=0.15625$.", working: "0.15625", marks: 1, markCode: "M" },
              { reasoning: "State the probability: $0.1563$ (4 s.f.).", working: "0.1563", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.1563",
            commonErrors: ["Using $\\binom{5}{4}=4$ instead of 5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $X\\sim B(10,0.3)$, what is the expected number of successes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "7" },
              { id: "c", text: "0.3" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial mean", statement: "$E(X)=np=10\\times0.3=3$." },
            ],
            steps: [
              { reasoning: "$np=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 3",
            commonErrors: ["Computing $n+p=10.3$."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X\\sim B(20,0.25)$, find the mean $E(X)$.",
          response: { type: "numeric", parts: [{ label: "$E(X)$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial mean", statement: "$E(X)=np=20\\times0.25=5$." },
            ],
            steps: [
              { reasoning: "$np=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Computing variance $np(1-p)=3.75$ instead of mean."],
          },
        },
        {
          id: "mypme5-u3-bin-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $X\\sim B(4,0.1)$, find $P(X\\ge1)$.",
          response: { type: "numeric", parts: [{ label: "$P(X\\ge1)$", answer: 0.3439, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Complement rule", statement: "$P(X\\ge1)=1-P(X=0)=1-0.9^4=1-0.6561=0.3439$." },
            ],
            steps: [
              { reasoning: "$P(X=0)=0.9^4=0.6561$; $P(X\\ge1)=1-0.6561=0.3439$.", working: "0.3439", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.3439", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3439",
            commonErrors: ["Computing $1-0.9=0.1$ instead of using $0.9^4$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $X\\sim B(10,0.2)$, find $P(X=3)$.",
          response: { type: "numeric", parts: [{ label: "$P(X=3)$", answer: 0.2013, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$P(X=3)=\\binom{10}{3}(0.2)^3(0.8)^7=120\\times0.008\\times0.2097=0.2013$." },
            ],
            steps: [
              { reasoning: "$\\binom{10}{3}=120$; $0.2^3=0.008$; $0.8^7=0.20972$.", working: "120\\times0.008\\times0.20972", marks: 1, markCode: "M" },
              { reasoning: "$P=0.20133\\approx0.2013$.", working: "0.2013", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.2013", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2013",
            commonErrors: ["Using $0.8^3$ instead of $0.8^7$ for the failures."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A factory produces items with a $5\\%$ defect rate. An inspector randomly checks 20 items.",
          parts: [
            { label: "a", prompt: "Find the probability of exactly 1 defective item.", marks: 2 },
            { label: "b", prompt: "Find the probability of at least 1 defective item.", marks: 2 },
            { label: "c", prompt: "Find the expected number of defective items.", marks: 1 },
            { label: "d", prompt: "State whether the binomial model is appropriate and justify.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial model", statement: "$X\\sim B(20,0.05)$ assuming independent items with constant defect probability." },
            ],
            steps: [
              { part: "a", reasoning: "$P(X=1)=\\binom{20}{1}(0.05)(0.95)^{19}=20\\times0.05\\times0.37735=0.3774$.", working: "0.3774", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", working: "0.3774", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(X\\ge1)=1-0.95^{20}=1-0.35849=0.6415$.", working: "0.6415", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", working: "0.6415", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E(X)=np=20\\times0.05=1$ defective item.", working: "1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Appropriate if items are independent with constant $p=0.05$ — reasonable for large production runs.", working: "\\text{yes, if independent}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 0.3774 (b) 0.6415 (c) 1 (d) yes if independent trials",
            commonErrors: ["In (b), summing $P(X=1),P(X=2),\\dots$ instead of using the complement."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme5-u3-bin-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A correlation coefficient of $r=-0.85$ indicates what kind of relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect positive relationship" },
              { id: "b", text: "Strong positive linear relationship" },
              { id: "c", text: "No relationship" },
              { id: "d", text: "Strong negative linear relationship" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Correlation", statement: "$r\\in[-1,1]$; negative values indicate inverse relationship; $|r|$ near 1 = strong." },
            ],
            steps: [
              { reasoning: "$r=-0.85$: negative and close to $-1$ → strong negative correlation.", working: "r=-0.85", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Strong negative",
            commonErrors: ["Reading only the sign, ignoring the magnitude."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A regression line is $y=2.5x+10$. What does the slope $2.5$ mean in context?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The correlation is 2.5" },
              { id: "b", text: "$x$ increases by 2.5 for each unit of $y$" },
              { id: "c", text: "For each unit increase in $x$, $y$ increases by 2.5 on average" },
              { id: "d", text: "$y$ starts at 2.5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Regression slope", statement: "Slope $=\\frac{\\Delta y}{\\Delta x}$: rate of change of $y$ per unit $x$." },
            ],
            steps: [
              { reasoning: "Slope 2.5 → $y$ increases by 2.5 per unit increase in $x$.", working: "2.5\\text{ per unit}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y$ increases by 2.5 per unit of $x$",
            commonErrors: ["Interpreting 2.5 as the intercept (which is 10)."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-bin-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Let $X\\sim B(15,0.4)$.",
          parts: [
            { label: "a", prompt: "Find the mean and variance of $X$.", marks: 2 },
            { label: "b", prompt: "Find $P(X=6)$.", marks: 2 },
            { label: "c", prompt: "State the value of $k$ for which $P(X=k)$ is greatest.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial distribution", statement: "$E(X)=np=6$, $\\text{Var}(X)=np(1-p)=3.6$; mode at $\\lfloor(n+1)p\\rfloor=6$." },
            ],
            steps: [
              { part: "a", reasoning: "$E(X)=15\\times0.4=6$; $\\text{Var}=15\\times0.4\\times0.6=3.6$.", working: "6,3.6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State mean and variance.", working: "\\mu=6,\\sigma^2=3.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(X=6)=\\binom{15}{6}(0.4)^6(0.6)^9=5005\\times0.004096\\times0.010078=0.2066$.", working: "0.2066", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", working: "0.2066", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mode $=\\lfloor(n+1)p\\rfloor=\\lfloor16\\times0.4\\rfloor=\\lfloor6.4\\rfloor=6$.", working: "k=6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\mu=6$, $\\sigma^2=3.6$ (b) 0.2066 (c) $k=6$",
            commonErrors: ["Using variance formula $np^2$ instead of $np(1-p)$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), R1 for (c).",
          },
        },
      ],
    },
  ],
};
