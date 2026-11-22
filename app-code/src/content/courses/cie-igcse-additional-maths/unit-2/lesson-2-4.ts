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
            { id: "a", text: "No vertex" },
            { id: "b", text: "$(0,0)$" },
            { id: "c", text: "$(1,1)$" },
            { id: "d", text: "$(0,1)$" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciam-u2-s4-gr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=|x-4|+2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-4,2)$" },
            { id: "b", text: "$(4,2)$" },
            { id: "c", text: "$(4,-2)$" },
            { id: "d", text: "$(2,4)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "Vertex form." }], steps: [{ reasoning: "$h=4$, $k=2$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,2)$" },
        },
        {
          id: "ciam-u2-s4-gr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of $y=|x-1|+3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x=0$." }], steps: [
            { reasoning: "$y=|0-1|+3=1+3=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u2-s4-gr-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Sketch $y=|x+2|-1$, stating the vertex and two points on each arm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus sketch", statement: "Vertex + slopes." }], steps: [
            { reasoning: "Vertex $(-2,-1)$; slopes $\\pm1$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=-3$: $y=0$; at $x=-1$: $y=0$; at $x=0$: $y=1$; at $x=-4$: $y=1$.", marks: 1, markCode: "M" },
            { reasoning: "Correct V-shape shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(-2,-1)$" },
        },
        {
          id: "ciam-u2-s4-gr-q8", difficulty: "core", totalMarks: 1,
          stem: "The vertex of $y=|x|+1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,0)$" },
            { id: "b", text: "$(1,1)$" },
            { id: "c", text: "$(0,1)$" },
            { id: "d", text: "$(1,0)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "Vertex form." }], steps: [{ reasoning: "$h=0$, $k=1$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,1)$" },
        },
        {
          id: "ciam-u2-s4-gr-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the value of $y=3|x-2|-4$ when $x=5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$y=3|5-2|-4=3(3)-4=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u2-s4-gr-q10", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=2|x|-3$, stating the vertex and y-intercept.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus sketch", statement: "Vertex + slopes." }], steps: [
            { reasoning: "Vertex $(0,-3)$; slopes $\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "y-intercept is $-3$; points $(1,-1),(-1,-1),(2,1),(-2,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Correct V-shape shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(0,-3)$, y-intercept $-3$" },
        },
        {
          id: "ciam-u2-s4-gr-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The graph of $y=-|x-1|+4$ has vertex…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(1,4)$" },
            { id: "b", text: "$(4,1)$" },
            { id: "c", text: "$(-1,4)$" },
            { id: "d", text: "$(1,-4)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "Vertex form; opens downward." }], steps: [{ reasoning: "$a=-1<0$, vertex $(1,4)$ is a maximum.", marks: 1, markCode: "A" }], finalAnswer: "$(1,4)$" },
        },
        {
          id: "ciam-u2-s4-gr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Find the value of $y=|x+3|-2$ when $x=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Substitute." }], steps: [
            { reasoning: "$y=|0+3|-2=3-2=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "ciam-u2-s4-gr-q13", difficulty: "core", totalMarks: 4,
          stem: "Write $y=|x-2|$ as a piecewise function and state its vertex.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Piecewise", statement: "Split at critical point." }], steps: [
            { reasoning: "For $x\\geq2$: $y=x-2$.", marks: 1, markCode: "M" },
            { reasoning: "For $x<2$: $y=2-x$.", marks: 1, markCode: "M" },
            { reasoning: "Vertex where pieces meet: $(2,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=x-2$ for $x\\geq2$; $y=2-x$ for $x<2$; vertex $(2,0)$" },
        },
        {
          id: "ciam-u2-s4-gr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which modulus graph has vertex $(-2,3)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=|x+2|+3$" },
            { id: "b", text: "$y=|x-2|+3$" },
            { id: "c", text: "$y=|x-2|-3$" },
            { id: "d", text: "$y=|x+2|-3$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "$a|x-h|+k$." }], steps: [{ reasoning: "$h=-2$, $k=3$ gives $y=|x+2|+3$.", marks: 1, markCode: "A" }], finalAnswer: "$y=|x+2|+3$" },
        },
        {
          id: "ciam-u2-s4-gr-q15", difficulty: "core", totalMarks: 2,
          stem: "For $x>1$, what is the gradient of the right arm of $y=2|x-1|-3$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "property", name: "Modulus graph", statement: "Right arm uses positive branch." }], steps: [
            { reasoning: "For $x>1$, $|x-1|=x-1$, so $y=2(x-1)-3=2x-5$.", marks: 1, markCode: "M" },
            { reasoning: "Gradient is 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u2-s4-gr-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The vertex of $y=|2x-4|+1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(4,1)$" },
            { id: "b", text: "$(2,1)$" },
            { id: "c", text: "$(1,2)$" },
            { id: "d", text: "$(2,-1)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Critical point", statement: "Inside modulus = 0." }], steps: [{ reasoning: "$2x-4=0$ → $x=2$, $y=1$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,1)$" },
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
            { id: "a", text: "$x=-4$ only" },
            { id: "b", text: "No solution" },
            { id: "c", text: "$x=4$ or $x=-4$" },
            { id: "d", text: "$x=4$ only" },
          ], correctChoiceId: "c" },
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
        {
          id: "ciam-u2-s4-eq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$|x|=7$ has solutions…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "$x=7$ only" },
            { id: "c", text: "$x=7$ or $x=-7$" },
            { id: "d", text: "$x=-7$ only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [{ reasoning: "$x=\\pm7$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm7$" },
        },
        {
          id: "ciam-u2-s4-eq-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $|x-4|=6$ and give the smaller solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$x-4=6$ or $x-4=-6$ → $x=10$ or $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Smaller solution is $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2$" },
        },
        {
          id: "ciam-u2-s4-eq-q7", difficulty: "foundation", totalMarks: 3,
          stem: "Solve $|3x+1|=8$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$3x+1=8$ → $x=\\frac73$; $3x+1=-8$ → $x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $|3(-3)+1|=8$ ✓ and $|3(\\frac73)+1|=8$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=\\frac73$ or $x=-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac73$ or $x=-3$" },
        },
        {
          id: "ciam-u2-s4-eq-q8", difficulty: "core", totalMarks: 1,
          stem: "$|x+2|=5$ has solutions…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=3$ or $x=-7$" },
            { id: "b", text: "$x=-7$ only" },
            { id: "c", text: "$x=3$ only" },
            { id: "d", text: "$x=7$ or $x=-3$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [{ reasoning: "$x+2=\\pm5$ → $x=3$ or $x=-7$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3$ or $x=-7$" },
        },
        {
          id: "ciam-u2-s4-eq-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve $|2x-5|=3$ and give the larger solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$2x-5=3$ or $2x-5=-3$ → $x=4$ or $x=1$.", marks: 1, markCode: "M" },
            { reasoning: "Larger solution is 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u2-s4-eq-q10", difficulty: "core", totalMarks: 4,
          stem: "Solve $|x-1|=|x+3|$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equality", statement: "Two cases." }], steps: [
            { reasoning: "Case 1: $x-1=x+3$ gives no solution.", marks: 1, markCode: "M" },
            { reasoning: "Case 2: $x-1=-(x+3)$ → $2x=-2$ → $x=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $|-1-1|=2$ and $|-1+3|=2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-1$" },
        },
        {
          id: "ciam-u2-s4-eq-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The solution of $|2x-1|<5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2<x<3$" },
            { id: "b", text: "$x\\neq\\frac12$" },
            { id: "c", text: "$x<-2$ or $x>3$" },
            { id: "d", text: "$-3<x<2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [{ reasoning: "$-5<2x-1<5$ → $-4<2x<6$ → $-2<x<3$.", marks: 1, markCode: "A" }], finalAnswer: "$-2<x<3$" },
        },
        {
          id: "ciam-u2-s4-eq-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Solve $|x+4|=|2x-1|$ and give the larger solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equality", statement: "Two cases." }], steps: [
            { reasoning: "$x+4=2x-1$ → $x=5$; $x+4=-(2x-1)$ → $x=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Larger solution is 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u2-s4-eq-q13", difficulty: "core", totalMarks: 4,
          stem: "Solve $|3x-2|\\geq4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Outside interval." }], steps: [
            { reasoning: "$3x-2\\geq4$ → $x\\geq2$.", marks: 1, markCode: "M" },
            { reasoning: "$3x-2\\leq-4$ → $x\\leq-\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "Solution: $x\\leq-\\frac23$ or $x\\geq2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq-\\frac23$ or $x\\geq2$" },
        },
        {
          id: "ciam-u2-s4-eq-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The solution of $|x-2|\\leq3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\leq-1$ or $x\\geq5$" },
            { id: "b", text: "$x\\neq5$" },
            { id: "c", text: "$-1\\leq x\\leq5$" },
            { id: "d", text: "$-5\\leq x\\leq1$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Between negatives." }], steps: [{ reasoning: "$-3\\leq x-2\\leq3$ → $-1\\leq x\\leq5$.", marks: 1, markCode: "A" }], finalAnswer: "$-1\\leq x\\leq5$" },
        },
        {
          id: "ciam-u2-s4-eq-q15", difficulty: "core", totalMarks: 2,
          stem: "Solve $|5-x|=2$ and give the smaller solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Modulus equation", statement: "Two cases." }], steps: [
            { reasoning: "$5-x=2$ or $5-x=-2$ → $x=3$ or $x=7$.", marks: 1, markCode: "M" },
            { reasoning: "Smaller solution is 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s4-eq-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The inequality $|x-1|>4$ is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3<x<5$" },
            { id: "b", text: "$x<-3$ only" },
            { id: "c", text: "$x<-3$ or $x>5$" },
            { id: "d", text: "$x>5$ only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus inequality", statement: "Outside interval." }], steps: [{ reasoning: "$x-1>4$ or $x-1<-4$ → $x>5$ or $x<-3$.", marks: 1, markCode: "A" }], finalAnswer: "$x<-3$ or $x>5$" },
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
