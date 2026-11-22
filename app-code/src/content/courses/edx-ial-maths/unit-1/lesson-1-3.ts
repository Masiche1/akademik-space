import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edial-maths-u1-lesson-1-3",
  code: "1-3",
  title: "Differentiation and Integration",
  goal: "I CAN differentiate polynomial functions, find tangents and stationary points, and integrate to find areas under curves.",
  standards: ["WMA11 P1", "Differentiation", "Integration"],
  vocabulary: [
    { term: "Derivative", definition: "The rate of change of a function; $\\frac{dy}{dx}$ gives the gradient of the curve at each point." },
    { term: "Tangent", definition: "The straight line touching a curve at a point with the same gradient as the curve there." },
    { term: "Normal", definition: "The line perpendicular to the tangent at a point on the curve." },
    { term: "Stationary point", definition: "A point where $\\frac{dy}{dx}=0$ — a maximum, minimum or point of inflection." },
    { term: "Indefinite integral", definition: "The family of anti-derivatives, written $\\int f(x)\\,dx$, defined up to a constant $+c$." },
    { term: "Definite integral", definition: "$\\int_a^b f(x)\\,dx$ gives the signed area between the curve and the $x$-axis from $x=a$ to $x=b$." },
  ],
  concepts: [
    {
      id: "edial-maths-u1-differentiation",
      title: "Differentiation: gradients, tangents and stationary points",
      skill: "Differentiate polynomial functions and use derivatives to find gradients, equations of tangents and normals, and stationary points.",
      lesson: {
        sections: [
          {
            heading: "The power rule",
            body: "If $y=x^n$ then $\\frac{dy}{dx}=nx^{n-1}$. Differentiate term by term: the derivative of a constant is $0$, and constant multiples carry through. For example $\\frac{d}{dx}\\left(3x^4-2x^2+7\\right)=12x^3-4x$.",
          },
          {
            heading: "Tangents and normals",
            body: "To find the tangent at $x=a$: evaluate $\\frac{dy}{dx}$ at $a$ for the gradient $m$, then use $y-y_1=m(x-a)$. The normal is perpendicular, so its gradient is $-\\frac{1}{m}$ (unless $m=0$ or undefined).",
          },
          {
            heading: "Stationary points",
            body: "Set $\\frac{dy}{dx}=0$ and solve. To classify each stationary point, use the second derivative $\\frac{d^2y}{dx^2}$: positive means minimum, negative means maximum. Or test values of $x$ on either side.",
          },
        ],
        keyFormulas: [
          { name: "Power rule", statement: "$\\frac{d}{dx}x^n=nx^{n-1}$" },
          { name: "Normal gradient", statement: "$m_{\\text{normal}}=-\\frac{1}{m_{\\text{tangent}}}$" },
          { name: "Second derivative test", statement: "$\\frac{d^2y}{dx^2}>0$ minimum; $<0$ maximum" },
        ],
        workedExample: {
          problem: "Find the equation of the tangent to $y=x^3-3x$ at the point where $x=2$.",
          solution: "$\\frac{dy}{dx}=3x^2-3$, so at $x=2$ the gradient is $9$. Also $y=8-6=2$. Tangent: $y-2=9(x-2)$, i.e. $y=9x-16$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u1-diff-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{d}{dx}\\left(4x^3-5x+2\\right)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12x^2-5$" },
              { id: "b", text: "$4x^2-5$" },
              { id: "c", text: "$12x^3-5$" },
              { id: "d", text: "$12x^2+2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}x^n=nx^{n-1}$; derivative of a constant is $0$." },
            ],
            steps: [
              { reasoning: "Differentiate term by term: $4x^3\\to12x^2$, $-5x\\to-5$, $2\\to0$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $12x^2-5$",
            commonErrors: ["Leaving the constant as $2$ instead of $0$.", "Differentiating $4x^3$ to $4x^2$ without multiplying by the power."],
          },
        },
        {
          id: "edial-maths-u1-diff-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The curve $y=x^2-4x+1$ has a point $P$ where the gradient is $6$. Find the coordinates of $P$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\frac{dy}{dx}=nx^{n-1}$." },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "\\frac{dy}{dx}=2x-4", marks: 1, markCode: "M" },
              { reasoning: "Set the derivative equal to $6$ and solve.", working: "2x-4=6\\Rightarrow x=5", marks: 1, markCode: "M" },
              { reasoning: "Find $y$ at $x=5$.", working: "y=25-20+1=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P=(5,6)$",
            commonErrors: ["Setting $\\frac{dy}{dx}=0$ (finding a stationary point instead).", "Solving $2x-4=6$ as $x=2$."],
          },
        },
        {
          id: "edial-maths-u1-diff-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the coordinates of the stationary point of $y=x^3-3x^2-9x+5$ and state whether it is a maximum or minimum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}x^n=nx^{n-1}$." },
              { kind: "theorem", name: "Second derivative test", statement: "$\\frac{d^2y}{dx^2}>0$ minimum; $<0$ maximum at a stationary point." },
            ],
            steps: [
              { reasoning: "Differentiate and set $\\frac{dy}{dx}=0$.", working: "\\frac{dy}{dx}=3x^2-6x-9=0", marks: 1, markCode: "M" },
              { reasoning: "Solve the quadratic.", working: "x^2-2x-3=0\\Rightarrow(x-3)(x+1)=0\\Rightarrow x=3\\text{ or }x=-1", marks: 1, markCode: "M" },
              { reasoning: "Differentiate again and test.", working: "\\frac{d^2y}{dx^2}=6x-6;\\ \\text{at }x=3:12>0\\ (\\min);\\ \\text{at }x=-1:-12<0\\ (\\max)", marks: 1, markCode: "M" },
              { reasoning: "Find the $y$-coordinates.", working: "y(3)=27-27-27+5=-22;\\ y(-1)=-1-3+9+5=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum at $(3,-22)$; maximum at $(-1,10)$.",
            commonErrors: ["Reporting only one stationary point.", "Misclassifying max/min.", "Arithmetic error evaluating $y(-1)$."],
          },
        },
        {
          id: "edial-maths-u1-diff-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The curve $C$ has equation $y=x^3-6x^2+9x+1$.",
          parts: [
            { label: "a", prompt: "Find $\\frac{dy}{dx}$ and the coordinates of the points on $C$ where the gradient is $0$.", marks: 3 },
            { label: "b", prompt: "Find the equation of the tangent to $C$ at the point where $x=1$.", marks: 3 },
            { label: "c", prompt: "Find the equation of the normal to $C$ at the point where $x=3$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}x^n=nx^{n-1}$." },
              { kind: "property", name: "Normal gradient", statement: "$m_{\\text{normal}}=-\\frac{1}{m_{\\text{tangent}}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate.", working: "\\frac{dy}{dx}=3x^2-12x+9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Set the derivative to zero and solve.", working: "3(x^2-4x+3)=0\\Rightarrow(x-1)(x-3)=0\\Rightarrow x=1\\text{ or }3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Find the corresponding $y$-values.", working: "y(1)=1-6+9+1=5;\\ y(3)=27-54+27+1=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient at $x=1$ is $0$, so the tangent is horizontal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the equation.", working: "y=5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Confirm the point $(1,5)$ lies on $y=5$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At $x=3$ the gradient is also $0$ (from part (a)), so the tangent is horizontal and the normal is vertical.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The point is $(3,1)$ and a vertical line has equation $x=3$.", working: "x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State that the normal is perpendicular to a horizontal tangent.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Give the final equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{dy}{dx}=3x^2-12x+9$; stationary points $(1,5)$ and $(3,1)$ (b) $y=5$ (c) $x=3$",
            commonErrors: ["Differentiating $9x$ to $9x$ instead of $9$.", "Trying to find a normal gradient when the tangent gradient is $0$ — the normal is vertical.", "Arithmetic slips in $y(3)$."],
            examinerNote: "In (c) recognise $x=3$ is a stationary point from (a); ft applies if (a) was wrong.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u1-integration",
      title: "Integration: areas and kinematics",
      skill: "Integrate polynomial functions, evaluate definite integrals as areas, and apply integration to kinematics.",
      lesson: {
        sections: [
          {
            heading: "Reverse differentiation",
            body: "Integration reverses differentiation: $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$ for $n\\neq-1$. Always include $+c$ in an indefinite integral. For example $\\int(6x^2-4x+1)\\,dx=2x^3-2x^2+x+c$.",
          },
          {
            heading: "Definite integrals and area",
            body: "The definite integral $\\int_a^b f(x)\\,dx=F(b)-F(a)$ where $F$ is any anti-derivative (the $+c$ cancels). It gives the area between the curve and the $x$-axis, counting area below the axis as negative. For the area between two curves, integrate the top minus the bottom.",
          },
          {
            heading: "Kinematics",
            body: "If $s$ is displacement, $v=\\frac{ds}{dt}$ and $a=\\frac{dv}{dt}$. So $v=\\int a\\,dt+c$ and $s=\\int v\\,dt+c$; constants are fixed by initial conditions.",
          },
        ],
        keyFormulas: [
          { name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$" },
          { name: "Definite integral", statement: "$\\int_a^b f(x)\\,dx=F(b)-F(a)$" },
          { name: "Kinematics", statement: "$v=\\int a\\,dt$, $s=\\int v\\,dt$" },
        ],
        workedExample: {
          problem: "Find the area enclosed by $y=x^2$ and the $x$-axis between $x=0$ and $x=3$.",
          solution: "$\\int_0^3 x^2\\,dx=\\left[\\frac{x^3}{3}\\right]_0^3=\\frac{27}{3}-0=9$ square units.",
        },
      },
      questions: [
        {
          id: "edial-maths-u1-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\int 6x^2\\,dx$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{6x^3}{3}+c$" },
              { id: "b", text: "$2x^3+c$" },
              { id: "c", text: "$12x+c$" },
              { id: "d", text: "$2x^2+c$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule for integration", statement: "$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+c$." },
            ],
            steps: [
              { reasoning: "Raise the power by 1 and divide by the new power: $\\int6x^2\\,dx=6\\times\\frac{x^3}{3}+c=2x^3+c$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2x^3+c$",
            commonErrors: ["Differentiating instead of integrating.", "Forgetting $+c$.", "Dividing by $n$ instead of $n+1$."],
          },
        },
        {
          id: "edial-maths-u1-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area enclosed by the curve $y=x^2+1$, the $x$-axis and the lines $x=0$ and $x=2$.",
          response: {
            type: "numeric",
            parts: [{ label: "area", answer: 5.3333, tolerance: 0.001, unit: "square units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Definite integral as area", statement: "Area $=\\int_a^b f(x)\\,dx$ when $f(x)\\ge0$ on $[a,b]$." },
            ],
            steps: [
              { reasoning: "Set up the definite integral.", working: "\\int_0^2(x^2+1)\\,dx=\\left[\\frac{x^3}{3}+x\\right]_0^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate at both limits.", working: "\\left(\\frac{8}{3}+2\\right)-0=\\frac{14}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the area.", working: "\\frac{14}{3}\\approx5.33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{14}{3}\\approx5.33$ square units",
            commonErrors: ["Evaluating only at the upper limit.", "Differentiating instead of integrating."],
            examinerNote: "Accept $5.33$; exact $\\frac{14}{3}$ preferred.",
          },
        },
        {
          id: "edial-maths-u1-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle moves along a straight line with acceleration $a=6t-2$ m/s$^2$. Its initial velocity is $3$ m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinematics", statement: "$v=\\int a\\,dt+c$; $c$ is fixed by the initial velocity." },
            ],
            steps: [
              { reasoning: "Integrate the acceleration to get velocity.", working: "v=\\int(6t-2)\\,dt=3t^2-2t+c", marks: 1, markCode: "M" },
              { reasoning: "Use $v=3$ when $t=0$ to find $c$.", working: "3=0-0+c\\Rightarrow c=3", marks: 1, markCode: "M" },
              { reasoning: "State the velocity function.", working: "v=3t^2-2t+3", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $t=2$.", working: "v(2)=12-4+3=11\\text{ m/s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v=3t^2-2t+3$ m/s; at $t=2$, $v=11$ m/s.",
            commonErrors: ["Forgetting the constant of integration.", "Using $v=\\frac{ds}{dt}$ direction wrongly — integrate acceleration to get velocity."],
          },
        },
        {
          id: "edial-maths-u1-int-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The curve $y=x^2-4x+3$ crosses the $x$-axis at $x=1$ and $x=3$.",
          parts: [
            { label: "a", prompt: "Sketch or describe the shape of the curve and state the coordinates of its vertex.", marks: 2 },
            { label: "b", prompt: "Find the area enclosed by the curve and the $x$-axis between $x=1$ and $x=3$.", marks: 4 },
            { label: "c", prompt: "A second curve is $y=-x^2+4x-3$. Find the total area enclosed between the two curves.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area between curves", statement: "Area $=\\int_a^b\\left[(\\text{upper})-(\\text{lower})\\right]dx$; the curves meet where they are equal." },
              { kind: "formula", name: "Definite integral", statement: "$\\int_a^b f(x)\\,dx=F(b)-F(a)$." },
            ],
            steps: [
              { part: "a", reasoning: "The coefficient of $x^2$ is positive, so the parabola opens upwards.", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Vertex at $x=-\\frac{b}{2a}=2$, $y=4-8+3=-1$: $(2,-1)$.", working: "y(2)=4-8+3=-1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The curve is below the axis between 1 and 3, so take the absolute value of the integral.", working: "\\int_1^3(x^2-4x+3)\\,dx", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Integrate.", working: "\\left[\\frac{x^3}{3}-2x^2+3x\\right]_1^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate at both limits.", working: "\\left(9-18+9\\right)-\\left(\\frac13-2+3\\right)=0-\\frac43=-\\frac43", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area is the absolute value.", working: "\\frac43\\text{ square units}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The curves meet where $x^2-4x+3=0$, i.e. $x=1$ and $x=3$, so the region is closed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Between $x=1$ and $x=3$ the second curve lies above the first, so integrate (upper $-$ lower).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The difference is $-2x^2+8x-6$, whose integral from 1 to 3 is $\\frac83$ — equivalently twice the area in (b) by symmetry.", working: "\\int_1^3(-2x^2+8x-6)\\,dx=\\frac83", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the total area.", working: "\\frac83\\approx2.67\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) upward parabola, vertex $(2,-1)$ (b) $\\frac43$ square units (c) $\\frac83$ square units",
            commonErrors: ["Giving a negative area in (b) — area must be positive.", "Integrating only one curve in (c) and forgetting the factor 2.", "Wrong vertex $x$-coordinate."],
            examinerNote: "In (c) the symmetry observation earns R1; direct integration of the difference also scores full marks.",
          },
        },
      ],
    },
  ],
};
