import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "alg1-u4-4-3",
  code: "4-3",
  title: "Quadratic Functions and Their Graphs",
  goal: "I CAN interpret key features of a quadratic graph and solve quadratic equations by factoring or using the graph, including in context.",
  standards: ["HSA-SSE.B.3a", "HSF-IF.B.4", "HSF-IF.C.7a", "HSA-REI.B.4b"],
  vocabulary: [
    { term: "Quadratic function", definition: "A function that can be written as $y=ax^2+bx+c$ with $a\\ne0$." },
    { term: "Vertex", definition: "The turning point of a parabola; it is a minimum when the parabola opens upward and a maximum when it opens downward." },
    { term: "Axis of symmetry", definition: "The vertical line through a parabola's vertex that divides the graph into mirror-image halves." },
    { term: "$y$-intercept", definition: "The point where a graph crosses the $y$-axis; for $y=ax^2+bx+c$, it is $(0,c)$." },
    { term: "Zero (root or solution)", definition: "An input value where a function equals zero; it corresponds to an $x$-intercept on the graph." },
    { term: "Maximum and minimum", definition: "The greatest or least output of a function on its domain; for a parabola over all real inputs, it occurs at the vertex when it opens down or up, respectively." },
    { term: "Zero product property", definition: "If a product of real numbers is zero, then at least one factor is zero." },
  ],
  concepts: [
    {
      id: "alg1-u4-quadratic-features",
      title: "Read key features of quadratic functions",
      skill: "Find and interpret a quadratic's vertex, axis of symmetry, intercepts, and maximum or minimum value.",
      lesson: {
        sections: [
          {
            heading: "The shape and direction of a parabola",
            body: "A quadratic function $y=ax^2+bx+c$ has a graph called a parabola. If $a>0$, the parabola opens upward and its vertex is a minimum; if $a<0$, it opens downward and its vertex is a maximum. The constant term $c$ gives the $y$-intercept $(0,c)$.",
          },
          {
            heading: "Find the vertex and symmetry line",
            body: "The axis of symmetry is $x=-\\frac{b}{2a}$. Substitute this $x$-value into the function to find the vertex's $y$-coordinate. The vertex is therefore $\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$. Points with inputs equally far from the axis have equal outputs.",
          },
          {
            heading: "Intercepts and graph interpretation",
            body: "The $x$-intercepts occur where $y=0$, so solve $ax^2+bx+c=0$ when possible. On a graph, the vertex gives the maximum or minimum output, while intercepts and other points describe where the function crosses the axes and how it changes. In a context, check which inputs are meaningful and state units for quantities such as time or height.",
          },
        ],
        keyFormulas: [
          { name: "Axis of symmetry", statement: "$x=-\\frac{b}{2a}$" },
          { name: "$y$-intercept", statement: "$y=ax^2+bx+c$ crosses the $y$-axis at $(0,c)$." },
          { name: "Vertex form", statement: "$y=a(x-h)^2+k$ has vertex $(h,k)$ and axis of symmetry $x=h$." },
        ],
        workedExample: {
          problem: "Find the vertex, axis of symmetry, $y$-intercept, and maximum or minimum of $f(x)=-x^2+4x+5$.",
          solution: "Here $a=-1$ and $b=4$, so the axis is $x=-\\frac{4}{2(-1)}=2$. Then $f(2)=-4+8+5=9$, giving vertex $(2,9)$. Since $a<0$, the graph opens downward and has maximum value 9. At $x=0$, $f(0)=5$, so the $y$-intercept is $(0,5)$.",
        },
      },
      questions: [
        {
          id: "alg1-u4-quadratic-features-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $y=2x^2-8x+3$, which statement gives the axis of symmetry and the direction the parabola opens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Axis $x=4$; opens upward" },
              { id: "b", text: "Axis $x=2$; opens downward" },
              { id: "c", text: "Axis $x=2$; opens upward" },
              { id: "d", text: "Axis $x=-2$; opens upward" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "For $y=ax^2+bx+c$, the axis is $x=-\\frac{b}{2a}$." },
              { kind: "property", name: "Opening direction", statement: "$a>0$ means a parabola opens upward; $a<0$ means it opens downward." },
            ],
            steps: [
              { reasoning: "Use $a=2$ and $b=-8$ in the axis formula.", working: "x=-\\frac{-8}{2(2)}=2", marks: 1, markCode: "M" },
              { reasoning: "The leading coefficient is positive, so the parabola opens upward.", working: "a=2>0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Axis $x=2$; opens upward.",
            commonErrors: ["Using $-b$ without dividing by $2a$.", "Determining the opening from the sign of $b$ rather than $a$."],
          },
        },
        {
          id: "alg1-u4-quadratic-features-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the vertex and state whether it is a maximum or minimum for $f(x)=x^2-6x+5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis and vertex", statement: "The vertex's $x$-coordinate is $-\\frac{b}{2a}$, and its $y$-coordinate is $f\\left(-\\frac{b}{2a}\\right)$." },
              { kind: "property", name: "Extremum", statement: "An upward-opening parabola has its minimum at its vertex." },
            ],
            steps: [
              { reasoning: "Find the axis, which gives the vertex's $x$-coordinate.", working: "x=-\\frac{-6}{2(1)}=3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the function at this input.", working: "f(3)=9-18+5=-4", marks: 1, markCode: "A" },
              { reasoning: "Since the leading coefficient is positive, the vertex is a minimum.", working: "\\text{vertex }(3,-4);\\quad \\text{minimum value }-4", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Vertex $(3,-4)$; minimum value $-4$.",
            commonErrors: ["Reporting the axis value $x=3$ as the full vertex.", "Calling the vertex a maximum even though $a>0$."],
          },
        },
        {
          id: "alg1-u4-quadratic-features-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball's height in feet after $t$ seconds is modeled by $h(t)=-t^2+6t+7$. Find the time and height of the maximum, the initial height, and the axis of symmetry.",
          response: {
            type: "numeric",
            parts: [
              { label: "Time of maximum (seconds)", answer: 3 },
              { label: "Maximum height (feet)", answer: 16 },
              { label: "Initial height (feet)", answer: 7 },
              { label: "Axis x-coordinate", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "For $at^2+bt+c$, the axis is $t=-\\frac{b}{2a}$." },
              { kind: "property", name: "Vertex maximum", statement: "If $a<0$, the vertex gives the function's maximum value." },
              { kind: "property", name: "Initial value", statement: "At time $t=0$, the function value is its initial height." },
            ],
            steps: [
              { reasoning: "Find the axis and vertex time using $a=-1$ and $b=6$.", working: "t=-\\frac{6}{2(-1)}=3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the height at the vertex time.", working: "h(3)=-9+18+7=16", marks: 1, markCode: "A" },
              { reasoning: "The initial height is the value at $t=0$.", working: "h(0)=7", marks: 1, markCode: "B" },
              { reasoning: "The vertex's input is also the axis-of-symmetry coordinate.", working: "t=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Maximum at $t=3$ seconds, height $16$ feet; initial height $7$ feet; axis $t=3$.",
            commonErrors: ["Using $b/(2a)$ without the negative sign.", "Giving the maximum height as $h(0)$ rather than evaluating at the vertex."],
          },
        },
        {
          id: "alg1-u4-quadratic-features-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A community garden models the weekly net value of a planting plan, in dollars, by $V(x)=-2x^2+12x+14$, where $x$ is the number of planting beds added. Use the quadratic model to interpret its key features.",
          parts: [
            { label: "a", prompt: "Find the axis of symmetry and the vertex of $V$.", marks: 3 },
            { label: "b", prompt: "State the maximum net value and the number of beds at which it occurs. Explain why it is a maximum.", marks: 3 },
            { label: "c", prompt: "Find the $y$-intercept and interpret it in this context.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "For $V(x)=ax^2+bx+c$, the axis is $x=-\\frac{b}{2a}$." },
              { kind: "property", name: "Vertex", statement: "The vertex is found by evaluating the function at the axis input." },
              { kind: "property", name: "Opening and maximum", statement: "A quadratic with negative leading coefficient opens downward and has a maximum at its vertex." },
              { kind: "definition", name: "$y$-intercept", statement: "The $y$-intercept is the output when the input is zero." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the axis formula with $a=-2$ and $b=12$.", working: "x=-\\frac{12}{2(-2)}=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the function at the axis input to find the vertex output.", working: "V(3)=-2(9)+36+14=32", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State both coordinates of the vertex.", working: "(3,32)", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The vertex output is the model's maximum, and its input is the bed count.", working: "\\text{maximum }\\$32\\text{ at }3\\text{ beds}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "The leading coefficient $-2$ is negative, so the graph opens downward and the vertex is a maximum.", working: "a=-2<0", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Set $x=0$; the constant term gives the vertical intercept.", working: "V(0)=14", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the intercept as an ordered pair.", working: "(0,14)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interpret it as the modeled net value when no beds have been added.", working: "\\text{With 0 added beds, net value is }\\$14.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Axis $x=3$, vertex $(3,32)$. (b) Maximum net value $\\$32$ at 3 beds because the parabola opens downward. (c) $y$-intercept $(0,14)$; the modeled value with no added beds is $\\$14$.",
            commonErrors: ["Reversing the sign in the axis formula and obtaining $x=-3$.", "Calling the vertex a minimum despite the negative leading coefficient.", "Interpreting the $y$-intercept as the value at one bed."],
          },
        },
      ],
    },
    {
      id: "alg1-u4-solve-quadratics",
      title: "Solve quadratic equations by factoring and graphing",
      skill: "Find quadratic solutions from factors or graph intercepts and interpret roots in context using the zero product property.",
      lesson: {
        sections: [
          {
            heading: "Make one side zero, then factor",
            body: "To solve a quadratic equation by factoring, first write it in the form $ax^2+bx+c=0$. Factor the left side completely. Then apply the zero product property: if $(x-r)(x-s)=0$, then $x-r=0$ or $x-s=0$, so $x=r$ or $x=s$. Check each solution in the original equation.",
          },
          {
            heading: "Read solutions from a graph",
            body: "The solutions to $f(x)=0$ are the $x$-coordinates where the graph of $y=f(x)$ crosses or touches the $x$-axis. These are the zeros and $x$-intercepts. A graph can show approximate solutions when exact factoring is not available; report estimates at the precision requested.",
          },
          {
            heading: "Interpret roots in context",
            body: "A quadratic model can have two, one, or no real zeros. In a context, each root must be checked against the situation: a negative time may solve the equation algebraically but not describe an event after a launch. State both mathematical solutions when asked, then identify the contextual solution separately.",
          },
        ],
        keyFormulas: [
          { name: "Zero product property", statement: "If $AB=0$, then $A=0$ or $B=0$." },
          { name: "Factored quadratic solutions", statement: "$(x-r)(x-s)=0 \\iff x=r$ or $x=s$." },
          { name: "Graph and zeros", statement: "$f(x)=0$ solutions are the $x$-coordinates of the graph's $x$-intercepts." },
        ],
        workedExample: {
          problem: "Solve $x^2-x-12=0$ by factoring, then describe the graph's $x$-intercepts.",
          solution: "Find two numbers with product $-12$ and sum $-1$: $-4$ and 3. Thus $x^2-x-12=(x-4)(x+3)$. By the zero product property, $x-4=0$ or $x+3=0$, so $x=4$ or $x=-3$. The graph has $x$-intercepts $(4,0)$ and $(-3,0)$.",
        },
      },
      questions: [
        {
          id: "alg1-u4-solve-quadratics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The graph of $y=(x-2)(x+5)$ crosses the $x$-axis at which $x$-values?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-2$ and $x=5$" },
              { id: "b", text: "$x=2$ and $x=-5$" },
              { id: "c", text: "$x=2$ only" },
              { id: "d", text: "$x=-5$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zero product property", statement: "If a product is zero, at least one factor must be zero." },
              { kind: "definition", name: "X-intercept", statement: "An $x$-intercept occurs where $y=0$." },
            ],
            steps: [
              { reasoning: "Set the factored function equal to zero and make each factor zero.", working: "x-2=0\\quad\\text{or}\\quad x+5=0", marks: 1, markCode: "M" },
              { reasoning: "Solve both linear equations; their values are the graph's $x$-intercepts.", working: "x=2\\quad\\text{or}\\quad x=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=2$ and $x=-5$",
            commonErrors: ["Reporting the constants in the factors without solving, giving $-2$ and 5.", "Only reporting one of the two intercepts."],
          },
        },
        {
          id: "alg1-u4-solve-quadratics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x^2+x-20=0$ by factoring. Give both solutions.",
          response: { type: "numeric", parts: [{ label: "Solution 1", answer: -5 }, { label: "Solution 2", answer: 4 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "property", name: "Factoring a monic trinomial", statement: "For $x^2+bx+c$, find $m,n$ such that $m+n=b$ and $mn=c$." },
              { kind: "property", name: "Zero product property", statement: "If $AB=0$, then $A=0$ or $B=0$." },
            ],
            steps: [
              { reasoning: "Find two integers whose product is $-20$ and sum is 1.", working: "5(-4)=-20,\\quad 5+(-4)=1", marks: 1, markCode: "M" },
              { reasoning: "Write the trinomial as a product of two binomials.", working: "(x+5)(x-4)=0", marks: 1, markCode: "M" },
              { reasoning: "Set each factor equal to zero and solve.", working: "x=-5\\quad\\text{or}\\quad x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-5$ or $x=4$",
            commonErrors: ["Using 5 and 4, which have the wrong product sign.", "Setting the product equal to 1 instead of 0."],
          },
        },
        {
          id: "alg1-u4-solve-quadratics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The graph of $y=x^2-2x-8$ has two $x$-intercepts. Use factoring to find the intercepts and state the solutions to $x^2-2x-8=0$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller x-intercept", answer: -2 },
              { label: "Larger x-intercept", answer: 4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monic trinomial factoring", statement: "For $x^2+bx+c$, choose integers whose sum is $b$ and product is $c$." },
              { kind: "property", name: "Zero product property", statement: "If a product equals zero, at least one factor equals zero." },
              { kind: "definition", name: "X-intercept and solution", statement: "The solutions to $f(x)=0$ are the $x$-coordinates of the graph's $x$-intercepts." },
            ],
            steps: [
              { reasoning: "Find integers with product $-8$ and sum $-2$.", working: "(-4)(2)=-8,\\quad -4+2=-2", marks: 1, markCode: "M" },
              { reasoning: "Factor and set each factor to zero.", working: "(x-4)(x+2)=0", marks: 1, markCode: "M" },
              { reasoning: "Solve the two linear equations from the zero product property.", working: "x=4\\quad\\text{or}\\quad x=-2", marks: 1, markCode: "A" },
              { reasoning: "Translate the solutions to points on the x-axis and note their equivalence.", working: "(4,0),\\;(-2,0);\\quad \\text{solutions }x=4,-2", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Solutions $x=-2$ and $x=4$; the $x$-intercepts are $(-2,0)$ and $(4,0)$.",
            commonErrors: ["Writing $x=-4$ and $x=2$ from the factor constants without reversing their signs.", "Giving the roots but not identifying the corresponding intercepts."],
          },
        },
        {
          id: "alg1-u4-solve-quadratics-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A ball is launched upward from a platform. Its height above the ground, in meters, after $t$ seconds is modeled by $h(t)=-5t^2+20t+25$. Assume the model applies from launch until the ball first reaches the ground.",
          parts: [
            { label: "a", prompt: "Set the height equal to zero and factor the resulting equation.", marks: 3 },
            { label: "b", prompt: "Use the zero product property to find both mathematical solutions for $t$.", marks: 3 },
            { label: "c", prompt: "Identify the physically meaningful time when the ball reaches the ground, and explain why the other solution is not used.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ground-level height", statement: "The ball reaches the ground when its height is zero." },
              { kind: "law", name: "Factoring out a GCF", statement: "A common factor can be removed from every term without changing the equation's solutions." },
              { kind: "property", name: "Zero product property", statement: "If $AB=0$, then $A=0$ or $B=0$." },
              { kind: "principle", name: "Contextual domain", statement: "Elapsed time after launch cannot be negative." },
            ],
            steps: [
              { part: "a", reasoning: "Set height to zero to model the instant the ball is at ground level.", working: "-5t^2+20t+25=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factor out the common factor $-5$.", working: "-5(t^2-4t-5)=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factor the trinomial using factors with product $-5$ and sum $-4$.", working: "-5(t-5)(t+1)=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Since $-5$ is nonzero, set each binomial factor equal to zero.", working: "t-5=0\\quad\\text{or}\\quad t+1=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve both equations.", working: "t=5\\quad\\text{or}\\quad t=-1", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The negative solution is before the launch time and is not in the modeled time interval.", working: "-1<0\\text{, so it is not physically meaningful after launch}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Select the nonnegative solution as the time the ball returns to the ground.", working: "t=5\\text{ seconds}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $-5(t-5)(t+1)=0$. (b) $t=5$ or $t=-1$. (c) The ball reaches the ground after 5 seconds; $t=-1$ is before launch and is excluded by the context.",
            commonErrors: ["Dividing by $-5$ and losing the zero equation structure.", "Reporting only the positive solution without showing both roots requested in part (b).", "Treating negative elapsed time as a valid event after launch."],
            examinerNote: "The mathematical roots must both be given in part (b); the context restriction is assessed separately in part (c).",
          },
        },
      ],
    },
  ],
};
