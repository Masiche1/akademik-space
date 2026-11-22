import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olm-u3-lesson-3-2",
  code: "3-2",
  title: "Quadratic Graphs",
  goal: "I CAN sketch and interpret quadratic graphs $y=ax^2+bx+c$.",
  standards: ["4024: graphs"],
  vocabulary: [
    { term: "Parabola", definition: "U-shaped curve of a quadratic function." },
    { term: "Vertex", definition: "Turning point (maximum or minimum) of parabola." },
    { term: "Axis of symmetry", definition: "Vertical line through vertex." },
    { term: "Turning point", definition: "Maximum or minimum point." },
  ],
  concepts: [
    {
      id: "olm-u3-s2-sketch",
      title: "Sketching quadratics",
      skill: "Sketch parabolas showing key features at O Level.",
      lesson: {
        sections: [
          { heading: "Key features", body: "A quadratic $y=ax^2+bx+c$ produces a parabola. Direction: $a>0$ opens upward (minimum), $a<0$ opens downward (maximum). Vertex: complete the square or use $x=-\\frac{b}{2a}$. y-intercept: $(0,c)$. x-intercepts: solve $ax^2+bx+c=0$ if real roots exist ($\\Delta\\geq0$). The curve is symmetric about the vertical line through the vertex." },
          { heading: "Reading graphs", body: "From a sketch you can read: where the function equals zero (x-intercepts = roots of equation), maximum/minimum values (vertex), and approximate solutions to equations like $ax^2+bx+c=k$ by drawing a horizontal line at height $k$ and counting intersections. Graphs solve equations visually — two intersections means two solutions." },
        ],
        keyFormulas: [
          { name: "Vertex x", statement: "$x=-\\frac{b}{2a}$" },
          { name: "Axis", statement: "$x=-\\frac{b}{2a}$" },
        ],
        workedExample: { problem: "Sketch $y=x^2-4x+3$.", solution: "Vertex at $x=\\frac{4}{2}=2$; $y=4-8+3=-1$ → $(2,-1)$ minimum. y-intercept $(0,3)$. Roots: $(x-1)(x-3)=0$ → $x=1,3$ → $(1,0),(3,0)$. Opens upward through these points." },
      },
      questions: [
        {
          id: "olm-u3-s2-sk-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=x^2$ has vertex at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,1)$" },
            { id: "b", text: "$(1,1)$" },
            { id: "c", text: "$(0,0)$" },
            { id: "d", text: "No vertex" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "Minimum at origin." }], steps: [{ reasoning: "$x^2$ minimum at $x=0$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,0)$" },
        },
        {
          id: "olm-u3-s2-sk-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Does $y=-x^2+4$ open upward or downward?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Opening", statement: "Sign of a." }], steps: [
            { reasoning: "$a=-1<0$ → opens downward (maximum).", marks: 1, markCode: "M" },
            { reasoning: "Answer: downward.", marks: 1, markCode: "A" },
          ], finalAnswer: "Downward" },
        },
        {
          id: "olm-u3-s2-sk-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the vertex of $y=x^2-6x+5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "$x=-b/2a$." }], steps: [
            { reasoning: "$x=\\frac{6}{2}=3$; $y=9-18+5=-4$ → vertex $(3,-4)$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(3-1)(3-5)=-4$? $(x-1)(x-5)$ at $x=3$: $2\\times(-2)=-4$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(3,-4)$ minimum.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,-4)$" },
        },
        {
          id: "olm-u3-s2-sk-q4", difficulty: "core", totalMarks: 4,
          stem: "Sketch $y=x^2-2x-3$, stating vertex, intercepts and axis of symmetry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Full sketch", statement: "All features." }], steps: [
            { reasoning: "Vertex: $x=1$, $y=1-2-3=-4$ → $(1,-4)$; axis $x=1$.", marks: 1, markCode: "M" },
            { reasoning: "y-intercept $(0,-3)$; x-intercepts: $(x-3)(x+1)=0$ → $(3,0),(-1,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Opens upward through these points.", marks: 1, markCode: "M" },
            { reasoning: "Correct smooth parabola shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(1,-4)$; intercepts $(-1,0),(3,0),(0,-3)$; axis $x=1$" },
        },
        {
          id: "olm-u3-s2-sk-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The axis of symmetry of $y=x^2-4x+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=1$" },
            { id: "b", text: "$x=4$" },
            { id: "c", text: "$x=-2$" },
            { id: "d", text: "$x=2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Axis", statement: "$x=-b/2a$." }], steps: [{ reasoning: "$x=\\frac{4}{2}=2$.", marks: 1, markCode: "A" }], finalAnswer: "$x=2$" },
        },
        {
          id: "olm-u3-s2-sk-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of $y=x^2-3x+2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intercept", statement: "Set $x=0$." }], steps: [
            { reasoning: "At $x=0$: $y=2$ → $(0,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u3-s2-sk-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Does $y=-2x^2+3$ have a maximum or a minimum point?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Maximum" },
            { id: "b", text: "Minimum" },
            { id: "c", text: "Both" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Opening", statement: "Sign of $a$." }], steps: [{ reasoning: "$a=-2<0$ → opens downward → maximum.", marks: 1, markCode: "A" }], finalAnswer: "Maximum" },
        },
        {
          id: "olm-u3-s2-sk-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The graph of $y=(x-2)^2$ has vertex at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,2)$" },
            { id: "b", text: "$(2,0)$" },
            { id: "c", text: "$(0,4)$" },
            { id: "d", text: "$(0,0)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "Squared term zero." }], steps: [{ reasoning: "$y=0$ at $x=2$ → vertex $(2,0)$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,0)$" },
        },
        {
          id: "olm-u3-s2-sk-q9", difficulty: "core", totalMarks: 2,
          stem: "For $y=x^2+6x+5$, find the x-coordinate of the vertex.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Vertex", statement: "$x=-b/2a$." }], steps: [
            { reasoning: "$x=-\\frac{6}{2}=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3$" },
        },
        {
          id: "olm-u3-s2-sk-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the x-intercepts of $y=x^2-5x+6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Roots", statement: "Set $y=0$ and factorise." }], steps: [
            { reasoning: "$x^2-5x+6=0$ → $(x-2)(x-3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ and $x=3$ → intercepts $(2,0),(3,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,0),(3,0)$" },
        },
        {
          id: "olm-u3-s2-sk-q11", difficulty: "core", totalMarks: 1,
          stem: "The parabola $y=x^2-2x-8$ crosses the y-axis at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(0,8)$" },
            { id: "b", text: "$(0,-8)$" },
            { id: "c", text: "$(0,-2)$" },
            { id: "d", text: "$(0,0)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "y-intercept", statement: "$(0,c)$." }], steps: [{ reasoning: "$c=-8$ → $(0,-8)$.", marks: 1, markCode: "A" }], finalAnswer: "$(0,-8)$" },
        },
        {
          id: "olm-u3-s2-sk-q12", difficulty: "core", totalMarks: 2,
          stem: "For $y=2x^2-8x+3$, find the minimum value of $y$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Vertex", statement: "$x=-b/2a$ then substitute." }], steps: [
            { reasoning: "$x=\\frac{8}{4}=2$; $y=8-16+3=-5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-5$" },
        },
        {
          id: "olm-u3-s2-sk-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Sketch $y=-x^2+4x-3$: state the vertex, the intercepts, and the direction of opening.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Full sketch", statement: "All features." }], steps: [
            { reasoning: "Vertex: $x=\\frac{-4}{-2}=2$; $y=-4+8-3=1$ → $(2,1)$ maximum.", marks: 1, markCode: "M" },
            { reasoning: "y-intercept $(0,-3)$; x-intercepts: $x^2-4x+3=0$ → $(1,0),(3,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Axis $x=2$; opens downward.", marks: 1, markCode: "M" },
            { reasoning: "Correct smooth parabola shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(2,1)$; intercepts $(0,-3),(1,0),(3,0)$; axis $x=2$" },
        },
        {
          id: "olm-u3-s2-sk-q14", difficulty: "challenge", totalMarks: 2,
          stem: "The curve $y=x^2-6x+11$ has minimum value $k$. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Vertex", statement: "Minimum value at vertex." }], steps: [
            { reasoning: "$x=3$; $y=9-18+11=2$ → $k=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u3-s2-sk-q15", difficulty: "challenge", totalMarks: 1,
          stem: "How many x-intercepts does $y=x^2+2x+5$ have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None" },
            { id: "b", text: "Two" },
            { id: "c", text: "Three" },
            { id: "d", text: "One" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "$b^2-4ac<0$." }], steps: [{ reasoning: "$4-20=-16<0$ → no real roots.", marks: 1, markCode: "A" }], finalAnswer: "None" },
        },
        {
          id: "olm-u3-s2-sk-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the value of $k$ for which the graph of $y=x^2-4x+k$ touches the x-axis at exactly one point.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "$b^2-4ac=0$." }], steps: [
            { reasoning: "One x-intercept → discriminant zero: $16-4k=0$.", marks: 1, markCode: "M" },
            { reasoning: "$4k=16$ → $k=4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $y=x^2-4x+4=(x-2)^2$ touches at $(2,0)$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=4$" },
        },
      ],
    },
    {
      id: "olm-u3-s2-solve",
      title: "Graphs and equations",
      skill: "Use graphs to solve equations at O Level.",
      lesson: {
        sections: [
          { heading: "Intersections = solutions", body: "The solutions of $f(x)=g(x)$ are the x-coordinates where the graphs of $y=f(x)$ and $y=g(x)$ intersect. For $x^2-2x-3=0$, the solutions are where $y=x^2-2x-3$ crosses the x-axis ($y=0$). For $x^2=x+3$, sketch both curves and find intersection x-values. Number of intersections = number of solutions." },
          { heading: "Reading values", body: "To solve $x^2-2x-3=2$ graphically, either shift the curve up 2 or draw $y=2$ and find intersections — approximately $x=-1.4$ and $x=3.4$. For inequalities like $x^2-2x-3<0$, the solution is where the curve is below the x-axis: between the roots, $-1<x<3$. Always label axes and indicate the solution region clearly." },
        ],
        keyFormulas: [
          { name: "Intersection", statement: "Solutions of $f(x)=g(x)$ at intersection x-values" },
        ],
        workedExample: { problem: "Use the graph of $y=x^2-4$ to solve $x^2-4=0$.", solution: "Roots where curve meets x-axis: $x=\\pm2$. For $x^2-4=5$ ($y=5$ line): intersections at $x=\\pm3$." },
      },
      questions: [
        {
          id: "olm-u3-s2-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The solutions of $x^2-9=0$ are the x-coordinates where $y=x^2-9$ meets…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=9$" },
            { id: "b", text: "The y-axis" },
            { id: "c", text: "$y=x$" },
            { id: "d", text: "The x-axis" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Roots", statement: "$y=0$ intercepts." }], steps: [{ reasoning: "Setting expression =0 means y=0, the x-axis.", marks: 1, markCode: "A" }], finalAnswer: "The x-axis" },
        },
        {
          id: "olm-u3-s2-so-q2", difficulty: "foundation", totalMarks: 2,
          stem: "How many solutions does $x^2+1=0$ have?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "No real roots", statement: "Always positive." }], steps: [
            { reasoning: "$x^2+1\\geq1>0$ always → never equals 0 → no real solutions.", marks: 1, markCode: "M" },
            { reasoning: "Answer: none (0 solutions).", marks: 1, markCode: "A" },
          ], finalAnswer: "No real solutions" },
        },
        {
          id: "olm-u3-s2-so-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-3x=0$ using factorisation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Common factor." }], steps: [
            { reasoning: "$x(x-3)=0$ → $x=0$ or $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "These are the x-intercepts of $y=x^2-3x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=0,3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=0,3$" },
        },
        {
          id: "olm-u3-s2-so-q4", difficulty: "core", totalMarks: 4,
          stem: "The graph of $y=x^2-2x-8$ is drawn. Write down the solution of $x^2-2x-8<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality from graph", statement: "Below x-axis." }], steps: [
            { reasoning: "Roots: $(x-4)(x+2)=0$ → $x=-2,4$.", marks: 1, markCode: "M" },
            { reasoning: "$y<0$ between roots (parabola opens up).", marks: 1, markCode: "M" },
            { reasoning: "Solution: $-2<x<4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-2<x<4$" },
        },
        {
          id: "olm-u3-s2-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The solutions of $x^2-25=0$ are the x-coordinates where $y=x^2-25$ meets…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The y-axis" },
            { id: "b", text: "The x-axis" },
            { id: "c", text: "$y=x$" },
            { id: "d", text: "$y=25$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Roots", statement: "$y=0$ intercepts." }], steps: [{ reasoning: "Setting expression = 0 means $y=0$, the x-axis.", marks: 1, markCode: "A" }], finalAnswer: "The x-axis" },
        },
        {
          id: "olm-u3-s2-so-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x+3=0$ and write down the x-intercept of $y=x+3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear equation", statement: "Set $y=0$." }], steps: [
            { reasoning: "$x=-3$ → intercept $(-3,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3$" },
        },
        {
          id: "olm-u3-s2-so-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-9=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=3$ only" },
            { id: "b", text: "$x=\\pm9$" },
            { id: "c", text: "$x=\\pm3$" },
            { id: "d", text: "$x=\\pm\\sqrt3$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Difference of squares." }], steps: [{ reasoning: "$(x-3)(x+3)=0$ → $x=\\pm3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm3$" },
        },
        {
          id: "olm-u3-s2-so-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The equation $x^2+2x+1=0$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One repeated solution" },
            { id: "b", text: "Three solutions" },
            { id: "c", text: "No real solutions" },
            { id: "d", text: "Two distinct solutions" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Repeated root", statement: "Perfect square." }], steps: [{ reasoning: "$(x+1)^2=0$ → $x=-1$ (repeated).", marks: 1, markCode: "A" }], finalAnswer: "$x=-1$ (repeated)" },
        },
        {
          id: "olm-u3-s2-so-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve $x^2-4x=0$ and give the larger solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Common factor." }], steps: [
            { reasoning: "$x(x-4)=0$ → $x=0,4$; larger is 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u3-s2-so-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+5x+6=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Quadratic." }], steps: [
            { reasoning: "$(x+2)(x+3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-2$ or $x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=-2,-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2,-3$" },
        },
        {
          id: "olm-u3-s2-so-q11", difficulty: "core", totalMarks: 1,
          stem: "The graphs of $y=x^2$ and $y=x$ intersect at $x=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=1$ only" },
            { id: "b", text: "$x=0$ only" },
            { id: "c", text: "$x=0$ and $x=1$" },
            { id: "d", text: "They do not intersect" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "$x^2=x$." }], steps: [{ reasoning: "$x^2=x$ → $x(x-1)=0$ → $x=0,1$.", marks: 1, markCode: "A" }], finalAnswer: "$x=0,1$" },
        },
        {
          id: "olm-u3-s2-so-q12", difficulty: "core", totalMarks: 2,
          stem: "Solve $x^2=16$ and give the positive solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Square root", statement: "Both signs." }], steps: [
            { reasoning: "$x=\\pm4$; positive solution is 4.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u3-s2-so-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $x^2-2x-3=0$ and hence solve $x^2-2x-3=5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous equations", statement: "Shift the RHS." }], steps: [
            { reasoning: "$x^2-2x-3=0$ → $(x-3)(x+1)=0$ → $x=3,-1$.", marks: 1, markCode: "M" },
            { reasoning: "$x^2-2x-3=5$ → $x^2-2x-8=0$ → $(x-4)(x+2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=4,-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=3,-1$ and $x=4,-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3,-1$; $x=4,-2$" },
        },
        {
          id: "olm-u3-s2-so-q14", difficulty: "challenge", totalMarks: 2,
          stem: "The graphs of $y=x^2$ and $y=2x+3$ intersect. Find the x-coordinate of the positive intersection.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Set expressions equal." }], steps: [
            { reasoning: "$x^2=2x+3$ → $x^2-2x-3=0$ → $(x-3)(x+1)=0$ → $x=3,-1$; positive is 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u3-s2-so-q15", difficulty: "challenge", totalMarks: 1,
          stem: "The equation $x^2+x+1=0$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Two solutions" },
            { id: "b", text: "One solution" },
            { id: "c", text: "No real solutions" },
            { id: "d", text: "A repeated solution" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "$1-4=-3<0$." }], steps: [{ reasoning: "Discriminant negative → no real solutions.", marks: 1, markCode: "A" }], finalAnswer: "No real solutions" },
        },
        {
          id: "olm-u3-s2-so-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Use the graph of $y=x^2-4x$ to solve $x^2-4x=-3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Graphical solution", statement: "Intersections with $y=-3$." }], steps: [
            { reasoning: "Draw $y=-3$; intersections where $x^2-4x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Rewrite: $x^2-4x+3=0$ → $(x-1)(x-3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "Intersections at $x=1$ and $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=1,3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1,3$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u3-s2-quad-notes", title: "Quadratic graphs — notes", summary: "Features and solving via graphs.",
      sections: [
        { heading: "Features", body: "Vertex $x=-b/2a$; y-intercept $(0,c)$; roots from $y=0$; opening by sign of $a$." },
        { heading: "Equations", body: "Intersections give solutions; below-axis region gives negative inequality." },
      ] },
  ],
};
