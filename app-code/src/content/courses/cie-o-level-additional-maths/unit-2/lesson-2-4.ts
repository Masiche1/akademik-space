import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "olam-u2-lesson-2-4",
  code: "2-4",
  title: "Modulus Functions",
  goal: "I CAN graph and solve problems with modulus functions.",
  standards: ["4037: modulus functions"],
  vocabulary: [
    { term: "Modulus", definition: "$|x|$ = absolute value — distance from zero." },
    { term: "V-shape", definition: "Graph of $y=|x|$ — two straight lines meeting at origin." },
    { term: "Modulus equation", definition: "Equation containing $|\\cdot|$." },
    { term: "Critical point", definition: "Where expression inside modulus equals zero." },
  ],
  concepts: [
    {
      id: "olam-u2-s4-graph",
      title: "Graphing modulus functions",
      skill: "Sketch $y=|f(x)|$ and $y=a|x-h|+k$ at O Level.",
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
          id: "olam-u2-s4-gr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=|x|$ has vertex at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,1)$" },
            { id: "b", text: "$(0,0)$" },
            { id: "c", text: "$(1,1)$" },
            { id: "d", text: "No vertex" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "V at origin." }], steps: [{ reasoning: "$|x|$ minimum at $x=0$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,0)$" },
        },
        {
          id: "olam-u2-s4-gr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the vertex of $y=|x+3|-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "From form." }], steps: [
            { reasoning: "$h=-3$, $k=-2$ → vertex $(-3,-2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-3,-2)$" },
        },
        {
          id: "olam-u2-s4-gr-q3", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=2|x-1|-3$, stating vertex and two points on each arm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus sketch", statement: "Vertex + slopes." }], steps: [
            { reasoning: "Vertex $(1,-3)$; slope $\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=0$: $y=2(1)-3=-1$; at $x=2$: $y=-1$; at $x=-1$: $y=2(2)-3=1$; at $x=3$: $y=1$.", marks: 1, markCode: "M" },
            { reasoning: "Correct V-shape shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(1,-3)$" },
        },
        {
          id: "olam-u2-s4-gr-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $|x-2|=5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$x-2=5$ or $x-2=-5$.", marks: 1, markCode: "M" },
            { reasoning: "$x=7$ or $x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $|7-2|=5$ ✓; $|-3-2|=5$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=7$ or $x=-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=7$ or $x=-3$" },
        },
        {
          id: "olam-u2-s4-gr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=|x|-3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3,0)$" },
            { id: "b", text: "$(0,3)$" },
            { id: "c", text: "$(0,-3)$" },
            { id: "d", text: "$(-3,0)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Modulus vertex", statement: "$a|x-h|+k$." }], steps: [{ reasoning: "$h=0$, $k=-3$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,-3)$" },
        },
        {
          id: "olam-u2-s4-gr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=|x-4|$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,-4)$" },
            { id: "b", text: "$(-4,0)$" },
            { id: "c", text: "$(4,0)$" },
            { id: "d", text: "$(0,4)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Modulus vertex", statement: "$(h,k)$." }], steps: [{ reasoning: "$h=4$, $k=0$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,0)$" },
        },
        {
          id: "olam-u2-s4-gr-q7", difficulty: "core", totalMarks: 1,
          stem: "The gradient of the right-hand arm of $y=|x|$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "-1" },
            { id: "c", text: "1" },
            { id: "d", text: "2" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "Slopes $\\pm1$." }], steps: [{ reasoning: "For $x>0$, $y=x$ → gradient 1.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u2-s4-gr-q8", difficulty: "core", totalMarks: 1,
          stem: "The value of $y$ when $x=-3$ on $y=2|x|+1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-5" },
            { id: "b", text: "5" },
            { id: "c", text: "1" },
            { id: "d", text: "7" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate modulus", statement: "$|-3|=3$." }], steps: [{ reasoning: "$y=2(3)+1=7$.", marks: 1, markCode: "A" }], finalAnswer: "7" },
        },
        {
          id: "olam-u2-s4-gr-q9", difficulty: "core", totalMarks: 1,
          stem: "The graph of $y=-|x-2|$ opens…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sideways" },
            { id: "b", text: "It has no corner" },
            { id: "c", text: "Upward" },
            { id: "d", text: "Downward" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "$a<0$ → inverted V." }], steps: [{ reasoning: "Negative sign flips the V upside down.", marks: 1, markCode: "A" }], finalAnswer: "Downward" },
        },
        {
          id: "olam-u2-s4-gr-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the minimum value of $y=|x+2|-5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -5 }] },
          markscheme: { principles: [{ kind: "property", name: "Minimum", statement: "$k$ at vertex." }], steps: [
            { reasoning: "Vertex $(-2,-5)$; minimum value $=-5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-5" },
        },
        {
          id: "olam-u2-s4-gr-q11", difficulty: "foundation", totalMarks: 2,
          stem: "For $y=3|x-1|+2$, find the $y$-coordinate of the vertex.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "$k$ in form." }], steps: [
            { reasoning: "$k=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u2-s4-gr-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the value of $y$ when $x=5$ on $y=|x|-4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$y=|5|-4=5-4=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u2-s4-gr-q13", difficulty: "challenge", totalMarks: 3,
          stem: "For $y=2|x+1|-3$, find the value of $y$ when $x=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$y=2|0+1|-3=2(1)-3$.", marks: 1, markCode: "M" },
            { reasoning: "$=2-3=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-1" },
        },
        {
          id: "olam-u2-s4-gr-q14", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=|x-3|+2$, giving the vertex and two points on each arm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus sketch", statement: "Vertex + slopes." }], steps: [
            { reasoning: "Vertex $(3,2)$; slopes $\\pm1$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=2$: $y=2$; at $x=4$: $y=2$; at $x=1$: $y=4$; at $x=5$: $y=4$.", marks: 1, markCode: "M" },
            { reasoning: "Correct V-shape shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(3,2)$" },
        },
        {
          id: "olam-u2-s4-gr-q15", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=-|x+1|+3$, giving the vertex and the y-intercept.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus sketch", statement: "Vertex + intercept." }], steps: [
            { reasoning: "Vertex $(-1,3)$; opens downward; slopes $\\mp1$.", marks: 1, markCode: "M" },
            { reasoning: "y-intercept: $x=0$ → $y=-|1|+3=2$ → $(0,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Correct inverted V shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(-1,3)$; y-intercept $(0,2)$" },
        },
        {
          id: "olam-u2-s4-gr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the coordinates of the point(s) where $y=|x-2|$ meets the line $y=x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Solve $|x-2|=x$." }], steps: [
            { reasoning: "$|x-2|=x$ requires $x\\geq0$ (RHS must be non-negative).", marks: 1, markCode: "M" },
            { reasoning: "Case $x\\geq2$: $x-2=x$ → impossible.", marks: 1, markCode: "M" },
            { reasoning: "Case $0\\leq x<2$: $-(x-2)=x$ → $2-x=x$ → $x=1$ → $y=1$.", marks: 1, markCode: "M" },
            { reasoning: "Intersection at $(1,1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(1,1)$" },
        },
      ],
    },
    {
      id: "olam-u2-s4-equations",
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
          id: "olam-u2-s4-eq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$|x|=4$ has solutions…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "$x=-4$ only" },
            { id: "c", text: "$x=4$ or $x=-4$" },
            { id: "d", text: "$x=4$ only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [{ reasoning: "$x=\\pm4$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm4$" },
        },
        {
          id: "olam-u2-s4-eq-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $|x+1|=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$x+1=3$ or $x+1=-3$ → $x=2$ or $x=-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$ or $x=-4$" },
        },
        {
          id: "olam-u2-s4-eq-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $|2x-3|\\leq5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [
            { reasoning: "$-5\\leq2x-3\\leq5$ → $-2\\leq2x\\leq8$ → $-1\\leq x\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1\\leq x\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "Check endpoints included ($\\leq$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$-1\\leq x\\leq4$" },
        },
        {
          id: "olam-u2-s4-eq-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $|x-1|=|2x+1|$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equality", statement: "Two cases." }], steps: [
            { reasoning: "Case 1: $x-1=2x+1$ → $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Case 2: $x-1=-(2x+1)$ → $x-1=-2x-1$ → $3x=0$ → $x=0$.", marks: 1, markCode: "M" },
            { reasoning: "Verify both: $|-2-1|=3$, $|2(-2)+1|=3$ ✓; $|0-1|=1$, $|1|=1$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-2$ or $x=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2$ or $x=0$" },
        },
        {
          id: "olam-u2-s4-eq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The solutions of $|x|=7$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=7$ or $x=-7$" },
            { id: "b", text: "$x=-7$ only" },
            { id: "c", text: "$x=49$" },
            { id: "d", text: "$x=7$ only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [{ reasoning: "$x=\\pm7$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm7$" },
        },
        {
          id: "olam-u2-s4-eq-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The solutions of $|x-3|=2$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\pm2$" },
            { id: "b", text: "$x=5$ or $x=1$" },
            { id: "c", text: "$x=1$ only" },
            { id: "d", text: "$x=5$ only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [{ reasoning: "$x-3=\\pm2$ → $x=5$ or $x=1$.", marks: 1, markCode: "A" }], finalAnswer: "$x=5,1$" },
        },
        {
          id: "olam-u2-s4-eq-q7", difficulty: "core", totalMarks: 1,
          stem: "The solutions of $|2x|=8$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=16$" },
            { id: "b", text: "$x=4$ only" },
            { id: "c", text: "$x=4$ or $x=-4$" },
            { id: "d", text: "$x=\\pm16$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Factor first." }], steps: [{ reasoning: "$|x|=4$ → $x=\\pm4$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm4$" },
        },
        {
          id: "olam-u2-s4-eq-q8", difficulty: "core", totalMarks: 1,
          stem: "The solution set of $|x+4|<3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-7,-1)$" },
            { id: "b", text: "$x<-7$ or $x>-1$" },
            { id: "c", text: "$(-7,-1]$" },
            { id: "d", text: "$[-7,-1]$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [{ reasoning: "$-3<x+4<3$ → $-7<x<-1$.", marks: 1, markCode: "A" }], finalAnswer: "$(-7,-1)$" },
        },
        {
          id: "olam-u2-s4-eq-q9", difficulty: "core", totalMarks: 1,
          stem: "The solution set of $|x-1|>2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x>3$ only" },
            { id: "b", text: "$-1<x<3$" },
            { id: "c", text: "$x<-1$ only" },
            { id: "d", text: "$x<-1$ or $x>3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Outside interval." }], steps: [{ reasoning: "$x-1>2$ or $x-1<-2$ → $x>3$ or $x<-1$.", marks: 1, markCode: "A" }], finalAnswer: "$x<-1$ or $x>3$" },
        },
        {
          id: "olam-u2-s4-eq-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $|x+5|=9$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }, { label: "b", answer: -14 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$x+5=9$ → $x=4$; $x+5=-9$ → $x=-14$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $|4+5|=9$ ✓; $|-14+5|=9$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$ or $x=-14$" },
        },
        {
          id: "olam-u2-s4-eq-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $|3x-6|=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "property", name: "Modulus zero", statement: "$|f|=0$ → $f=0$." }], steps: [
            { reasoning: "$3x-6=0$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "olam-u2-s4-eq-q12", difficulty: "core", totalMarks: 3,
          stem: "Solve $|x-2|\\leq4$ and state the upper bound of the solution set.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [
            { reasoning: "$-4\\leq x-2\\leq4$ → $-2\\leq x\\leq6$.", marks: 1, markCode: "M" },
            { reasoning: "Endpoints included ($\\leq$).", marks: 1, markCode: "M" },
            { reasoning: "Upper bound $=6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\in[-2,6]$; upper bound 6" },
        },
        {
          id: "olam-u2-s4-eq-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $|2x+1|<5$ and state the lower bound of the solution set.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [
            { reasoning: "$-5<2x+1<5$ → $-6<2x<4$ → $-3<x<2$.", marks: 1, markCode: "M" },
            { reasoning: "Strict inequality → open interval.", marks: 1, markCode: "M" },
            { reasoning: "Lower bound $=-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\in(-3,2)$; lower bound $-3$" },
        },
        {
          id: "olam-u2-s4-eq-q14", difficulty: "core", totalMarks: 3,
          stem: "Solve $|x-4|=|x+2|$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equality", statement: "Two cases." }], steps: [
            { reasoning: "Case 1: $x-4=x+2$ → impossible ($-4=2$).", marks: 1, markCode: "M" },
            { reasoning: "Case 2: $x-4=-(x+2)$ → $x-4=-x-2$ → $2x=2$ → $x=1$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $|1-4|=3=|1+2|$ ✓. Answer: $x=1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1$" },
        },
        {
          id: "olam-u2-s4-eq-q15", difficulty: "core", totalMarks: 3,
          stem: "Solve $|2x-1|\\geq3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Outside interval." }], steps: [
            { reasoning: "$2x-1\\geq3$ → $x\\geq2$; or $2x-1\\leq-3$ → $x\\leq-1$.", marks: 1, markCode: "M" },
            { reasoning: "Solution: $x\\leq-1$ or $x\\geq2$.", marks: 1, markCode: "M" },
            { reasoning: "Check endpoints included ($\\geq$): $x=2$ gives $|3|=3$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq-1$ or $x\\geq2$" },
        },
        {
          id: "olam-u2-s4-eq-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $|x^2-4|=3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus with quadratic", statement: "Two cases." }], steps: [
            { reasoning: "Case 1: $x^2-4=3$ → $x^2=7$ → $x=\\pm\\sqrt7$.", marks: 1, markCode: "M" },
            { reasoning: "Case 2: $x^2-4=-3$ → $x^2=1$ → $x=\\pm1$.", marks: 1, markCode: "M" },
            { reasoning: "Verify each: $|7-4|=3$ ✓; $|1-4|=3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\pm1,\\pm\\sqrt7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\pm1,\\pm\\sqrt7$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u2-s4-mod-notes", title: "Modulus functions — notes", summary: "Graphs, equations, inequalities.",
      sections: [
        { heading: "Graph", body: "$|f|$ reflects negative parts above axis. $a|x-h|+k$ vertex form." },
        { heading: "Equations", body: "$|f|=a$: $f=\\pm a$. $|f|=|g|$: $f=\\pm g$." },
        { heading: "Inequalities", body: "$|f|<a$: $-a<f<a$; $|f|>a$: outside." },
      ] },
  ],
};
