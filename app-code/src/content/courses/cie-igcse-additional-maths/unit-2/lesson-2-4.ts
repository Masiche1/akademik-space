import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "ciam-u2-lesson-2-4",
  code: "2-4",
  title: "Modulus Functions",
  goal: "I CAN graph and solve problems with modulus functions.",
  standards: ["0606: modulus functions"],
  vocabulary: [
    { term: "Modulus", definition: "$|x|$ = absolute value — distance from zero." },
    { term: "V-shape", definition: "Graph of $y=|x|$ — two straight lines meeting at origin." },
    { term: "Modulus equation", definition: "Equation containing $|\\cdot|$." },
    { term: "Critical point", definition: "Where expression inside modulus equals zero." },
  ],
  concepts: [
    {
      id: "ciam-u2-s4-graph",
      title: "Graphing modulus functions",
      skill: "Sketch $y=|f(x)|$ and $y=a|x-h|+k$ at IGCSE level.",
      lesson: {
        sections: [
          { heading: "The V-shape", body: "$|x|$ means 'distance from zero', so it equals $x$ when $x\\geq0$ and $-x$ when $x<0$ — producing a V-shape with vertex at the origin and arms of slope $\\pm1$. More generally $y=a|x-h|+k$ has its vertex at $(h,k)$, opens upward when $a>0$ (downward when $a<0$), and the steepness is controlled by $|a|$. To sketch, find the vertex, then pick two $x$-values either side and compute the outputs." },
          { heading: "Where the 'corner' comes from", body: "The sharp point of the V occurs where the expression inside the modulus changes sign — the critical point. Left of it one linear piece applies, right of it the reflected piece applies, and they meet at the vertex. This piecewise behaviour is why modulus graphs have corners rather than smooth curves, and why equations involving $|f(x)|$ split into cases at the critical point." },
        ],
        keyFormulas: [
          { name: "Vertex form", statement: "$y=a|x-h|+k$ → vertex $(h,k)$" },
          { name: "Definition", statement: "$|x|=x$ if $x\\geq0$, $-x$ if $x<0$" },
        ],
        workedExample: { problem: "Sketch $y=|x-2|+1$.", solution: "Vertex at $(2,1)$, opens upward with slopes $\\pm1$. Points: at $x=1$, $y=|{-1}|+1=2$; at $x=3$, $y=2$; at $x=0$, $y=3$; at $x=4$, $y=3$. V-shape with arms through $(0,3),(1,2),(2,1),(3,2),(4,3)$." },
      },
      questions: [
        {
          id: "ciam-u2-s4-gr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=|x|$ has vertex at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,0)$" }, { id: "b", text: "$(1,1)$" }, { id: "c", text: "$(0,1)$" }, { id: "d", text: "No vertex" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "V at origin." }], steps: [{ reasoning: "$|x|$ minimum at $x=0$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,0)$" },
        },
        {
          id: "ciam-u2-s4-gr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the vertex of $y=|x+3|-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "From form." }], steps: [
            { reasoning: "$h=-3$, $k=-2$ → vertex $(-3,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-3,-2)$" },
        },
        {
          id: "ciam-u2-s4-gr-q3", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=2|x-1|-3$, stating vertex and two points on each arm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus sketch", statement: "Vertex + slopes." }], steps: [
            { reasoning: "Vertex $(1,-3)$; slope $\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=0$: $y=2(1)-3=-1$; at $x=2$: $y=-1$; at $x=-1$: $y=2(2)-3=1$; at $x=3$: $y=1$.", marks: 1, markCode: "M" },
            { reasoning: "Correct V-shape shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(1,-3)$" },
        },
        {
          id: "ciam-u2-s4-gr-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $|x-2|=5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$x-2=5$ or $x-2=-5$.", marks: 1, markCode: "M" },
            { reasoning: "$x=7$ or $x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $|7-2|=5$ ✓; $|-3-2|=5$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=7$ or $x=-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=7$ or $x=-3$" },
        },
      ],
    },
    {
      id: "ciam-u2-s4-equations",
      title: "Modulus equations and inequalities",
      skill: "Solve equations and inequalities with modulus.",
      lesson: {
        sections: [
          { heading: "Equations", body: "$|f(x)|=a$ with $a>0$ splits into two cases: $f(x)=a$ or $f(x)=-a$ — solve each separately and combine the answers. If $|f(x)|=|g(x)|$, the cases are $f(x)=g(x)$ and $f(x)=-g(x)$. Always check each solution by substituting back, since extraneous solutions can appear if you square both sides carelessly." },
          { heading: "Inequalities", body: "The rules mirror the geometry: $|f(x)|<a$ means $f(x)$ is within distance $a$ of zero, so $-a<f(x)<a$ — a single interval. $|f(x)|>a$ means outside that range: $f(x)>a$ or $f(x)<-a$ — two regions. Get the direction right by testing a convenient value; for instance $|x|<2$ contains 0 but $|x|>2$ does not." },
        ],
        keyFormulas: [
          { name: "Modulus rules", statement: "$|f|=a$: $f=\\pm a$; $|f|<a$: $-a<f<a$; $|f|>a$: $f>a$ or $f<-a$" },
        ],
        workedExample: { problem: "Solve $|2x-1|<3$.", solution: "Between: $-3<2x-1<3$ → add 1: $-2<2x<4$ → divide by 2: $-1<x<2$. Check endpoints are excluded (strict inequality): test $x=-1$ gives $|-3|=3$ which is not $<3$ ✓, so open interval $(-1,2)$." },
      },
      questions: [
        {
          id: "ciam-u2-s4-eq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$|x|=4$ has solutions…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=4$ or $x=-4$" }, { id: "b", text: "$x=4$ only" }, { id: "c", text: "$x=-4$ only" }, { id: "d", text: "No solution" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [{ reasoning: "$x=\\pm4$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm4$" },
        },
        {
          id: "ciam-u2-s4-eq-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $|x+1|=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$x+1=3$ or $x+1=-3$ → $x=2$ or $x=-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$ or $x=-4$" },
        },
        {
          id: "ciam-u2-s4-eq-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $|2x-3|\\leq5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [
            { reasoning: "$-5\\leq2x-3\\leq5$ → $-2\\leq2x\\leq8$ → $-1\\leq x\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1\\leq x\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "Check endpoints included ($\\leq$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$-1\\leq x\\leq4$" },
        },
        {
          id: "ciam-u2-s4-eq-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $|x-1|=|2x+1|$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equality", statement: "Two cases." }], steps: [
            { reasoning: "Case 1: $x-1=2x+1$ → $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Case 2: $x-1=-(2x+1)$ → $x-1=-2x-1$ → $3x=0$ → $x=0$.", marks: 1, markCode: "M" },
            { reasoning: "Verify both: $|-2-1|=3$, $|2(-2)+1|=3$ ✓; $|0-1|=1$, $|1|=1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-2$ or $x=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2$ or $x=0$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u2-s4-mod-notes", title: "Modulus functions — notes", summary: "Graphs, equations, inequalities.",
      sections: [
        { heading: "Graph", body: "$|f|$ reflects negative parts above axis. $a|x-h|+k$ vertex form." },
        { heading: "Equations", body: "$|f|=a$: $f=\\pm a$. $|f|=|g|$: $f=\\pm g$." },
        { heading: "Inequalities", body: "$|f|<a$: $-a<f<a$; $|f|>a$: outside." },
      ] },
  ],
};
