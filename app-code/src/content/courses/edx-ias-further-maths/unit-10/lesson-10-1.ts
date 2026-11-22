import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxifm-u10-lesson-10-1",
  code: "5-1",
  title: "Algorithms and Networks",
  goal: "I CAN apply Dijkstra's algorithm, construct minimum spanning trees and find maximum flows in networks.",
  standards: ["WDM11 D1", "Algorithms", "Networks"],
  vocabulary: [
    { term: "Dijkstra's algorithm", definition: "A labelling algorithm that finds the shortest path from a start node to every other node in a weighted network." },
    { term: "Minimum spanning tree", definition: "A connected subgraph containing every vertex exactly once with minimum total weight; found by Prim's or Kruskal's algorithm." },
    { term: "Maximum flow", definition: "The greatest total flow that can pass through a network respecting arc capacities; equals the capacity of the minimum cut." },
    { term: "Minimum cut", definition: "The smallest total capacity of arcs whose removal disconnects the source from the sink." },
    { term: "Critical path", definition: "The longest path through an activity network; any delay on it delays the whole project." },
  ],
  concepts: [
    {
      id: "edxifm-u10-shortest-path",
      title: "Shortest paths and spanning trees",
      skill: "Use Dijkstra's algorithm to find shortest paths and apply Prim's or Kruskal's algorithm to build minimum spanning trees.",
      lesson: {
        sections: [
          {
            heading: "Dijkstra's algorithm",
            body: "Label the start node $0$ and all others $\\infty$. Repeatedly: make the smallest-labelled unvisited node permanent, then update its neighbours' labels by adding the edge weight if that gives a smaller label. Stop when the destination is permanent. The permanent label is the shortest distance.",
          },
          {
            heading: "Minimum spanning trees",
            body: "**Prim's algorithm**: start at any vertex, repeatedly add the cheapest arc connecting the tree to a new vertex until all vertices are included. **Kruskal's algorithm**: sort all arcs by weight, add the cheapest arc that does not form a cycle, until $n-1$ arcs are chosen. Both give a minimum spanning tree.",
          },
          {
            heading: "Reading the result",
            body: "For a spanning tree the total weight is the sum of its $n-1$ arcs. For shortest paths, trace permanent labels backwards from the destination to recover the route.",
          },
        ],
        keyFormulas: [
          { name: "Dijkstra update", statement: "$\\text{new label}=\\min(\\text{old label},\\ \\text{node label}+w)$" },
          { name: "Spanning tree size", statement: "$n$ vertices require exactly $n-1$ arcs" },
        ],
        workedExample: {
          problem: "A network has vertices $A,B,C,D$ with arcs $AB=3$, $AC=6$, $BC=2$, $BD=5$, $CD=1$. Use Dijkstra from $A$ to find shortest distances.",
          solution: "$A=0$ permanent; update $B=3$, $C=6$. Next permanent $B=3$; update $C=\\min(6,3+2)=5$, $D=3+5=8$. Next permanent $C=5$; update $D=\\min(8,5+1)=6$. Distances: $B=3$, $C=5$, $D=6$.",
        },
      },
      questions: [
        {
          id: "edxifm-u10-net-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spanning tree on $n$ vertices contains how many arcs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n$" },
              { id: "b", text: "$2n$" },
              { id: "c", text: "$\\frac{n(n-1)}{2}$" },
              { id: "d", text: "$n-1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Spanning tree", statement: "A tree connecting $n$ vertices has exactly $n-1$ edges." },
            ],
            steps: [
              { reasoning: "A spanning tree on $n$ vertices has $n-1$ arcs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $n-1$",
            commonErrors: ["Confusing a tree with a complete graph."],
          },
        },
        {
          id: "edxifm-u10-net-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A network has vertices $S,A,B,T$ with arcs $SA=4$, $SB=6$, $AB=2$, $AT=3$, $BT=5$. Use Dijkstra's algorithm from $S$ to find the shortest distance to $T$.",
          response: {
            type: "numeric",
            parts: [{ label: "distance", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dijkstra", statement: "Make smallest label permanent; update neighbours." },
            ],
            steps: [
              { reasoning: "$S=0$ permanent; $A=4$, $B=6$.", working: "A=4,\\ B=6", marks: 1, markCode: "M" },
              { reasoning: "$A=4$ permanent; update $B=\\min(6,4+2)=6$, $T=4+3=7$.", working: "T=7", marks: 1, markCode: "M" },
              { reasoning: "$T=7$ permanent before $B$ is processed, so shortest distance to $T$ is $7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Processing $B$ before $T$ and getting a longer route."],
          },
        },
        {
          id: "edxifm-u10-net-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A minimum spanning tree is being built on vertices $\\{1,2,3,4\\}$ with candidate arcs $12=5$, $13=2$, $14=6$, $23=3$, $24=4$, $34=1$. Apply Kruskal's algorithm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Kruskal", statement: "Add arcs in increasing weight order, skipping any that form a cycle, until $n-1$ arcs are chosen." },
            ],
            steps: [
              { reasoning: "Sorted arcs: $34=1$, $13=2$, $23=3$, $24=4$, $12=5$, $14=6$.", marks: 1, markCode: "M" },
              { reasoning: "Take $34=1$ and $13=2$; $23=3$ connects vertex $2$ without forming a cycle, so take it — the tree now spans all four vertices.", working: "34,13,23", marks: 1, markCode: "M" },
              { reasoning: "Tree connects vertices 1, 3, 4, 2 via $34,13,23$ — that is $3$ arcs = $n-1$; stop.", marks: 1, markCode: "A" },
              { reasoning: "Total weight $=1+2+3=6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arcs $34$, $13$, $23$; total weight $6$",
            commonErrors: ["Taking an arc that closes a cycle.", "Not checking connectivity."],
            examinerNote: "Verify no cycle: $34,13,23$ connects all four vertices with three arcs — valid.",
          },
        },
        {
          id: "edxifm-u10-net-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A road network connects depot $S$ to site $T$ through junctions $A$ and $B$. Arcs: $SA=6$, $SB=8$, $AB=2$, $AT=5$, $BT=4$, with capacities equal to the numbers shown.",
          parts: [
            { label: "a", prompt: "Use Dijkstra's algorithm to find the shortest path from $S$ to $T$.", marks: 4 },
            { label: "b", prompt: "List all paths from $S$ to $T$ and their total weights.", marks: 2 },
            { label: "c", prompt: "If arc $AB$ is removed, find the new shortest path and distance.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dijkstra", statement: "Permanent labels give shortest distances." },
            ],
            steps: [
              { part: "a", reasoning: "$S=0$; update $A=6$, $B=8$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$A=6$ permanent; update $B=\\min(8,6+2)=8$ (unchanged), $T=6+5=11$.", working: "T=11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$B=8$ permanent; update $T=\\min(11,8+4)=11$ (unchanged).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shortest path $S\\to A\\to T$ with distance $11$.", working: "S-A-T,\\ d=11", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Paths: $SAT=6+5=11$, $SBT=8+4=12$, $SABT=6+2+4=12$.", working: "11,\\ 12,\\ 12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all three path lengths.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With $AB$ removed, routes $SAT$ and $SBT$ remain with lengths $11$ and $12$.", working: "11\\text{ vs }12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$S\\to A\\to T$ uses only $SA$ and $AT$, so it survives; the shortest path is unchanged at $11$.", working: "S-A-T=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the path and distance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude that removing $AB$ does not change the shortest path.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $S\\to A\\to T$, $d=11$ (b) $SAT=11$, $SBT=12$, $SABT=12$ (c) unchanged: $S\\to A\\to T$, $d=11$",
            commonErrors: ["Forgetting $AB$ creates a third route.", "Recomputing labels incorrectly after removal."],
            examinerNote: "The network is undirected? Assume directed as stated; accept either interpretation if consistent.",
          },
        },
      ],
    },
    {
      id: "edxifm-u10-flows-cuts",
      title: "Maximum flow and minimum cut",
      skill: "Apply the max-flow min-cut theorem to find maximum flows and identify bottleneck cuts in networks.",
      lesson: {
        sections: [
          {
            heading: "Flows and capacities",
            body: "A **flow** assigns a value $f$ to each arc with $0\\le f\\le c$ (capacity), and flow is conserved at every intermediate vertex: inflow = outflow. The **value** of the flow is the net flow out of the source.",
          },
          {
            heading: "Max-flow min-cut theorem",
            body: "The maximum flow value equals the capacity of the minimum cut — the smallest total capacity of arcs whose removal disconnects source from sink. To find it, either augment flows along paths or evaluate all $s$-$t$ cuts.",
          },
          {
            heading: "Finding cuts",
            body: "A cut partitions vertices into two sets $S\\ni s$ and $T\\ni t$; its capacity is the sum of capacities of arcs from $S$ to $T$. Check candidate cuts systematically.",
          },
        ],
        keyFormulas: [
          { name: "Flow conservation", statement: "Inflow = outflow at every vertex except source and sink" },
          { name: "Max-flow min-cut", statement: "Max flow value = capacity of minimum cut" },
        ],
        workedExample: {
          problem: "Network: $S\\to A$ cap $5$, $S\\to B$ cap $3$, $A\\to T$ cap $4$, $B\\to T$ cap $4$, $A\\to B$ cap $2$. Find the maximum flow.",
          solution: "Send $4$ along $S\\to A\\to T$ (limited by $A\\to T=4$). $A$ still has $1$ unit of unused supply but no spare outlet capacity. Send $3$ along $S\\to B\\to T$ (limited by $S\\to B=3$; $B\\to T$ has spare capacity). Total flow $=4+3=7$. The cut $\\{S,A\\}|\\{B,T\\}$ has capacity $S\\to B+ A\\to T=3+4=7$, confirming by max-flow min-cut that $7$ is maximal.",
        },
      },
      questions: [
        {
          id: "edxifm-u10-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a flow network, what must be true at every intermediate vertex?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inflow exceeds outflow" },
              { id: "b", text: "Flow equals zero" },
              { id: "c", text: "Inflow equals outflow" },
              { id: "d", text: "Outflow equals capacity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Flow conservation", statement: "Inflow = outflow at intermediate vertices." },
            ],
            steps: [
              { reasoning: "Flow conservation requires inflow = outflow at each intermediate vertex.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Inflow equals outflow",
            commonErrors: ["Thinking flow accumulates at vertices."],
          },
        },
        {
          id: "edxifm-u10-flow-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A network has $S\\to A$ (cap $6$), $A\\to T$ (cap $4$), $S\\to B$ (cap $3$), $B\\to T$ (cap $5$). What is the maximum flow from $S$ to $T$?",
          response: {
            type: "numeric",
            parts: [{ label: "max flow", answer: 7 }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Max-flow min-cut", statement: "Max flow = capacity of minimum cut." },
            ],
            steps: [
              { reasoning: "Path $S\\to A\\to T$ limited by $A\\to T=4$; path $S\\to B\\to T$ limited by $S\\to B=3$.", working: "4+3", marks: 1, markCode: "M" },
              { reasoning: "Total flow $=4+3=7$; check cut $\\{S,A,B\\}|\\{T\\}$ capacity $=4+5=9$, cut $\\{S\\}|rest=6+3=9$ — but bottleneck is into $T$? Recheck: max flow limited by $A\\to T$ and $B\\to T$ total $4+5=9$; limited by source arcs $6+3=9$; but $A$ only receives $6$ and can send at most $4$ to $T$. Push $4$ via $A$, remaining $2$ at $A$ has no outlet. So flow $=4+3=7$.", marks: 1, markCode: "M" },
              { reasoning: "State maximum flow $=7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Ignoring the $A\\to T$ bottleneck."],
            examinerNote: "The minimum cut is $\\{S,A\\}|\\{B,T\\}$? Capacity $=S\\to B(3)+A\\to T(4)=7$ — yes, min cut $=7$ confirms max flow.",
          },
        },
        {
          id: "edxifm-u10-flow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the network in Question 2, identify the minimum cut and its capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Max-flow min-cut", statement: "Minimum cut capacity equals maximum flow." },
            ],
            steps: [
              { reasoning: "Candidate cuts separating $S$ from $T$.", marks: 1, markCode: "M" },
              { reasoning: "Cut $\\{S,A\\}|\\{B,T\\}$: arcs $S\\to B$ ($3$) and $A\\to T$ ($4$), capacity $7$.", working: "3+4=7", marks: 1, markCode: "M" },
              { reasoning: "No smaller cut exists since max flow is $7$.", marks: 1, markCode: "M" },
              { reasoning: "State the minimum cut.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cut $\\{S,A\\}|\\{B,T\\}$ with capacity $7$",
            commonErrors: ["Choosing a cut that includes arcs in both directions."],
          },
        },
        {
          id: "edxifm-u10-flow-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A distribution network: warehouse $W$ supplies shops $P$, $Q$, $R$ via depots. Arcs (capacity): $WP=8$, $WQ=6$, $WR=5$, $PQ=3$, $PR=2$, $QR=4$, $PT=10$, $QT=8$, $RT=7$ where $T$ is the terminal.",
          parts: [
            { label: "a", prompt: "Find the maximum flow from $W$ to $T$.", marks: 4 },
            { label: "b", prompt: "Identify a minimum cut and its capacity.", marks: 3 },
            { label: "c", prompt: "State which arcs are saturated in a maximum flow.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Max-flow min-cut", statement: "Max flow = min cut capacity." },
              { kind: "definition", name: "Saturated arc", statement: "An arc carrying flow equal to its capacity." },
            ],
            steps: [
              { part: "a", reasoning: "Source arcs total $8+6+5=19$; sink arcs total $10+8+7=25$; inter-depot arcs allow redistribution.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Push $8$ via $P$: $P$ can send $10$ to $T$ but only receives $8$; push $6$ via $Q$, $5$ via $R$ — check $Q$ sends $8$ max to $T$, receives $6$; $R$ sends $7$ max, receives $5$.", working: "f(WP)=8,f(WQ)=6,f(WR)=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All source arcs saturated; total flow $=19$; verify no augmenting path remains (all $W$ arcs at capacity).", working: "19", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Max flow $=19$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cut $\\{W\\}|\\{P,Q,R,T\\}$ has capacity $8+6+5=19$ — the minimum cut.", working: "19", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confirm no smaller cut: sink-side cut $\\{W,P,Q,R\\}|\\{T\\}$ has $10+8+7=25>19$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the minimum cut.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Saturated arcs: $WP$, $WQ$, $WR$ (all at source capacity).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check others: $PT=8<10$, $QT=6<8$, $RT=5<7$ — not saturated.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude only the three source arcs are saturated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) max flow $=19$ (b) min cut $\\{W\\}|\\{P,Q,R,T\\}$, capacity $19$ (c) $WP$, $WQ$, $WR$ saturated",
            commonErrors: ["Forgetting flow conservation at $P,Q,R$.", "Claiming inter-depot arcs must carry flow."],
            examinerNote: "Inter-depot arcs are unused in this solution; accept alternative max flows using them if conservation holds.",
          },
        },
      ],
    },
    {
      id: "edxifm-u10-critpath-sim",
      title: "Critical path and simulation",
      skill: "Construct activity networks, find the critical path and float, and apply simple Monte Carlo simulation.",
      lesson: {
        sections: [
          {
            heading: "Activity networks",
            body: "Represent a project as nodes (events) and arcs (activities with durations). The **forward pass** finds earliest start times; the **backward pass** finds latest start times. **Float** = latest start − earliest start; zero float identifies the critical path.",
          },
          {
            heading: "Critical path",
            body: "The critical path is the longest route through the network and determines the minimum project duration. Activities on it have zero float; delaying any delays the project.",
          },
          {
            heading: "Monte Carlo simulation",
            body: "When activity times are random, simulate many runs: assign each activity a sampled duration, compute the project length each run, and estimate the probability of finishing by a deadline or the expected duration.",
          },
        ],
        keyFormulas: [
          { name: "Float", statement: "$\\text{float}=\\text{latest start}-\\text{earliest start}$" },
          { name: "Project duration", statement: "Length of the critical path" },
        ],
        workedExample: {
          problem: "Activities: $A=3$, $B=2$, $C=4$ (after $A$), $D=1$ (after $B$ and $C$). Find the critical path.",
          solution: "Path via $A,C,D$: $3+4+1=8$; via $B,D$: $2+1=3$ but $D$ waits for $C$ so total still $8$. Critical path $A\\to C\\to D$, duration $8$ days.",
        },
      },
      questions: [
        {
          id: "edxifm-u10-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An activity on the critical path has how much float?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depends on duration" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "Half the project length" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical path", statement: "Activities with zero float lie on the critical path." },
            ],
            steps: [
              { reasoning: "Critical activities have zero float.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0$",
            commonErrors: ["Thinking float equals duration."],
          },
        },
        {
          id: "edxifm-u10-cp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Activities: $A=4$ days, $B=3$ days (starts after $A$), $C=5$ days (starts after $A$), $D=2$ days (after both $B$ and $C$). Find the project duration and critical path.",
          response: {
            type: "numeric",
            parts: [{ label: "duration", answer: 11 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Critical path", statement: "Longest path through the network." },
            ],
            steps: [
              { reasoning: "Paths to $D$: via $B$: $4+3+2=9$; via $C$: $4+5+2=11$.", working: "9\\text{ vs }11", marks: 1, markCode: "M" },
              { reasoning: "Longest is via $C$.", working: "A-C-D=11", marks: 1, markCode: "M" },
              { reasoning: "Project duration $=11$ days; critical path $A\\to C\\to D$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$ days; critical path $A\\to C\\to D$",
            commonErrors: ["Adding all activities instead of the longest path."],
          },
        },
        {
          id: "edxifm-u10-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In the network above, activity $B$ has earliest start day $4$ and latest start day $6$. Find its float and state whether it is critical.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Float", statement: "$\\text{float}=\\text{latest start}-\\text{earliest start}$." },
            ],
            steps: [
              { reasoning: "Compute float.", working: "6-4=2", marks: 1, markCode: "M" },
              { reasoning: "State float $=2$ days.", marks: 1, markCode: "A" },
              { reasoning: "Since float $>0$, $B$ is not critical.", marks: 1, markCode: "R" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Float $=2$ days; not critical",
            commonErrors: ["Confusing float with duration."],
          },
        },
        {
          id: "edxifm-u10-cp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A project has activities $A,B,C,D,E$ with durations $A=2$, $B=3$, $C=1$, $D=4$, $E=2$. Dependencies: $B$ and $C$ start after $A$; $D$ starts after $B$; $E$ starts after $C$ and $D$.",
          parts: [
            { label: "a", prompt: "Draw the activity network and find the earliest start times.", marks: 3 },
            { label: "b", prompt: "Find the project duration and critical path.", marks: 4 },
            { label: "c", prompt: "In a simulation, activity $D$'s duration is equally likely to be $3$, $4$ or $5$ days. Estimate the probability that the project takes more than $11$ days using 3 sample runs of your choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Earliest start", statement: "ES of an activity = max of EF of its predecessors." },
              { kind: "theorem", name: "Monte Carlo", statement: "Repeated random sampling estimates probabilities." },
            ],
            steps: [
              { part: "a", reasoning: "$A$: ES $0$, EF $2$; $B$: ES $2$, EF $5$; $C$: ES $2$, EF $3$; $D$: ES $5$, EF $9$; $E$: ES $\\max(3,9)=9$, EF $11$.", working: "ES/EF: A0-2,B2-5,C2-3,D5-9,E9-11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Draw or describe the network correctly.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State all earliest start times.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Paths: via $B,D,E$: $2+3+4+2=11$; via $C,E$ blocked by $D$ — longest is $11$.", working: "11", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Project duration $=11$ days.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Critical path $A\\to B\\to D\\to E$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State critical path and duration.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Project exceeds $11$ days only if $D>4$, i.e. $D=5$; probability $=\\frac13$ per run.", working: "P(D=5)=\\tfrac13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Three sample runs might give e.g. $D=3,5,4$ → one exceedance → estimate $\\frac13$.", working: "e.g.\\ 1/3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State estimate near $\\frac13$ (accept reasonable simulation results).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ES/EF as computed (b) duration $11$, critical path $A\\to B\\to D\\to E$ (c) estimate $\\approx\\frac13$",
            commonErrors: ["Ignoring dependencies when computing EF.", "Treating simulation as exact calculation."],
            examinerNote: "Accept any reasonable simulation; the theoretical probability is $\\frac13$.",
          },
        },
      ],
    },
  ],
};
