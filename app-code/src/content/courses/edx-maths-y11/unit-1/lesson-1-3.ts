import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edm11-u1-lesson-1-3",
  code: "1-3",
  title: "Calculus",
  goal: "I CAN differentiate powers of x, find gradients, tangents and turning points, and use differentiation in kinematics.",
  standards: ["4MA1 3.18H", "4MA1 3.19H", "4MA1 3.20H"],
  vocabulary: [
    { term: "Derivative", definition: "The function $\\frac{dy}{dx}$ that gives the gradient of the curve $y=f(x)$ at any point." },
    { term: "Tangent", definition: "A straight line that touches a curve at a point and has the same gradient as the curve there." },
    { term: "Normal", definition: "A straight line through a point on a curve that is perpendicular to the tangent at that point." },
    { term: "Stationary point", definition: "A point on a curve where $\\frac{dy}{dx}=0$." },
    { term: "Second derivative", definition: "The derivative of the derivative, $\\frac{d^2y}{dx^2}$. It is positive at a minimum and negative at a maximum." },
    { term: "Velocity and acceleration", definition: "If displacement is $s$ at time $t$, velocity is $v=\\frac{ds}{dt}$ and acceleration is $a=\\frac{dv}{dt}$." },
  ],
  concepts: [
    {
      id: "edm11-u1-differentiation",
      title: "Differentiating ax^n, gradients and tangents",
      skill: "Differentiate powers of x and use the derivative to find gradients and equations of tangents.",
      lesson: {
        sections: [
          {
            heading: "The rule",
            body: "To differentiate $y=ax^n$, multiply by the power and reduce the power by one: $\\frac{dy}{dx}=anx^{n-1}$. A constant differentiates to 0 and $y=ax$ gives $a$. Write terms with $x$ in the denominator as negative powers first: $\\frac{8}{x}=8x^{-1}$.",
          },
          {
            heading: "Gradients",
            body: "The gradient of the curve at a point is the value of $\\frac{dy}{dx}$ there. Substitute the $x$-coordinate of the point into the derivative.",
          },
          {
            heading: "Tangents and normals",
            body: "The tangent at $(x_1,y_1)$ has gradient $m=\\frac{dy}{dx}$ at $x_1$, so its equation is $y-y_1=m(x-x_1)$. The normal has gradient $-\\frac{1}{m}$.",
          },
        ],
        keyFormulas: [
          { name: "Power rule", statement: "$y=ax^n \\Rightarrow \\frac{dy}{dx}=anx^{n-1}$" },
          { name: "Tangent", statement: "$y-y_1=m(x-x_1)$ with $m=\\frac{dy}{dx}$ at $x_1$" },
        ],
        workedExample: {
          problem: "Find the gradient of $y=x^3+2x^2-5$ at the point where $x=1$.",
          solution: "$\\frac{dy}{dx}=3x^2+4x$. When $x=1$: $3+4=7$.",
        },
      },
      questions: [
        {
          id: "edm11-u1-differentiation-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 1,
          stem: "$y=3x^4$\n\nWhat is $\\frac{dy}{dx}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12x^3$" },
              { id: "b", text: "$12x^4$" },
              { id: "c", text: "$3x^3$" },
              { id: "d", text: "$4x^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}(ax^n)=anx^{n-1}$" }],
            steps: [{ reasoning: "Multiply the coefficient by the power and reduce the power by 1.", working: "3 \\times 4 x^{3}=12x^3", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $12x^3$",
            commonErrors: ["Forgetting to reduce the power.", "Forgetting to multiply by the coefficient 3."],
          },
        },
        {
          id: "edm11-u1-differentiation-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "$y=2x^3-5x$\n\nWork out the gradient of the curve at the point where $x=2$.",
          response: { type: "numeric", parts: [{ label: "Gradient", answer: 19 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Gradient of a curve", statement: "The gradient at a point is the value of $\\frac{dy}{dx}$ there." }],
            steps: [
              { reasoning: "Differentiate each term.", working: "\\frac{dy}{dx}=6x^2-5", marks: 2, markCode: "M" },
              { reasoning: "Substitute $x=2$.", working: "6(4)-5=19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$19$",
            commonErrors: ["Substituting $x=2$ into $y$ instead of $\\frac{dy}{dx}$, giving $6$.", "Differentiating $-5x$ to $-5x$ or $0$."],
            examinerNote: "Award M1 for one correct term differentiated and M2 for both correct; A1 for 19 cao.",
          },
        },
        {
          id: "edm11-u1-differentiation-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "The curve C has equation $y=x^3-4x^2+5$. The point $P(2,-3)$ lies on C.\n\nThe tangent to C at P has equation $y=mx+c$. Work out the values of $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: -4 },
              { label: "$c$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent gradient", statement: "The gradient of the tangent equals $\\frac{dy}{dx}$ at the point." },
              { kind: "formula", name: "Equation of a line", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "\\frac{dy}{dx}=3x^2-8x", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=2$ to find the gradient.", working: "3(4)-16=-4", marks: 1, markCode: "A" },
              { reasoning: "Use the point $(2,-3)$ in the equation of a line.", working: "y+3=-4(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "y=-4x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=-4$, $c=5$",
            commonErrors: ["Using the $y$-value of 5 incorrectly (e.g. giving $c=-3$).", "Using the normal gradient $\\frac14$."],
            examinerNote: "Check: at $x=2$, $-4(2)+5=-3$, so the line passes through P.",
          },
        },
        {
          id: "edm11-u1-differentiation-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "The curve C has equation $y=x^2+\\frac{16}{x}$ for $x>0$. The point P lies on C where $x=1$.",
          parts: [
            { label: "a", prompt: "Show that the coordinates of P are $(1,17)$.", marks: 1 },
            { label: "b", prompt: "Work out the gradient of C at P.", marks: 3 },
            { label: "c", prompt: "Find the equation of the tangent to C at P. Give your answer in the form $y=mx+c$.", marks: 2 },
            { label: "d", prompt: "Find the coordinates of the point on C where the gradient is zero.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\frac{d}{dx}(ax^n)=anx^{n-1}$, including negative $n$." },
              { kind: "definition", name: "Stationary point", statement: "A stationary point has $\\frac{dy}{dx}=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=1$.", working: "y=1^2+\\frac{16}{1}=17", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rewrite $\\frac{16}{x}$ as $16x^{-1}$.", working: "y=x^2+16x^{-1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Differentiate.", working: "\\frac{dy}{dx}=2x-16x^{-2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=1$.", working: "2-16=-14", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $y-y_1=m(x-x_1)$ with $m=-14$ and $(1,17)$.", working: "y-17=-14(x-1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange.", working: "y=-14x+31", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the derivative to zero.", working: "2x-\\frac{16}{x^2}=0 \\;\\Rightarrow\\; 2x^3=16", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $x$.", working: "x^3=8 \\;\\Rightarrow\\; x=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find $y$ when $x=2$.", working: "y=4+8=12 \\;\\Rightarrow\\; (2,12)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=17$ (b) $-14$ (c) $y=-14x+31$ (d) $(2,12)$",
            commonErrors: ["Differentiating $\\frac{16}{x}$ as $\\frac{16}{x^2}$ with a positive sign.", "Giving only the $x$-coordinate in (d)."],
          },
        },
      ],
    },
    {
      id: "edm11-u1-turning-points",
      title: "Turning points and kinematics",
      skill: "Find and classify stationary points, and use differentiation for velocity and acceleration.",
      lesson: {
        sections: [
          {
            heading: "Stationary points",
            body: "At a maximum or minimum the tangent is horizontal, so $\\frac{dy}{dx}=0$. Solve this to find the $x$-coordinates, then substitute into $y$ for the $y$-coordinates.",
          },
          {
            heading: "Nature of a stationary point",
            body: "Find $\\frac{d^2y}{dx^2}$. If it is positive the point is a minimum; if negative, a maximum. Alternatively, check the sign of the gradient either side of the point.",
          },
          {
            heading: "Kinematics",
            body: "For a particle moving in a straight line with displacement $s$: velocity $v=\\frac{ds}{dt}$ and acceleration $a=\\frac{dv}{dt}$. The particle is instantaneously at rest when $v=0$.",
          },
        ],
        keyFormulas: [
          { name: "Stationary point", statement: "$\\frac{dy}{dx}=0$" },
          { name: "Kinematics", statement: "$v=\\frac{ds}{dt}$, $a=\\frac{dv}{dt}$" },
        ],
        workedExample: {
          problem: "Find the stationary point of $y=x^2-6x+5$ and state its nature.",
          solution: "$\\frac{dy}{dx}=2x-6=0$ gives $x=3$, and $y=9-18+5=-4$. $\\frac{d^2y}{dx^2}=2>0$, so $(3,-4)$ is a minimum.",
        },
      },
      questions: [
        {
          id: "edm11-u1-turning-points-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "A curve has equation $y=x^2-6x+5$.\n\nAt which value of $x$ does the curve have a stationary point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$" },
              { id: "b", text: "$x=-3$" },
              { id: "c", text: "$x=6$" },
              { id: "d", text: "$x=5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stationary point", statement: "$\\frac{dy}{dx}=0$" }],
            steps: [
              { reasoning: "Differentiate and set equal to zero.", working: "2x-6=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=3$",
            commonErrors: ["Solving $x^2-6x+5=0$ instead, giving $x=1$ or $5$.", "A sign error giving $x=-3$."],
          },
        },
        {
          id: "edm11-u1-turning-points-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A particle moves in a straight line. At time $t$ seconds its displacement from a fixed point O is $s$ metres, where $s=t^3-3t^2+5$.\n\nWork out the velocity of the particle when $t=3$.",
          response: { type: "numeric", parts: [{ label: "Velocity", answer: 9, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Velocity", statement: "$v=\\frac{ds}{dt}$" }],
            steps: [
              { reasoning: "Differentiate displacement to obtain velocity.", working: "v=3t^2-6t", marks: 2, markCode: "M" },
              { reasoning: "Substitute $t=3$.", working: "27-18=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$ m/s",
            commonErrors: ["Substituting $t=3$ into $s$, giving $5$.", "Differentiating $-3t^2$ as $-3t$."],
          },
        },
        {
          id: "edm11-u1-turning-points-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A curve has equation $y=x^3-12x+5$. The curve has a minimum point.\n\nWork out the coordinates of the minimum point.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 2 },
              { label: "$y$-coordinate", answer: -11 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stationary point", statement: "$\\frac{dy}{dx}=0$" },
              { kind: "principle", name: "Second derivative test", statement: "$\\frac{d^2y}{dx^2}>0$ indicates a minimum." },
            ],
            steps: [
              { reasoning: "Differentiate and set to zero.", working: "3x^2-12=0 \\;\\Rightarrow\\; x=\\pm2", marks: 2, markCode: "M" },
              { reasoning: "The second derivative $6x$ is positive only when $x=2$, so this is the minimum.", working: "\\frac{d^2y}{dx^2}=6x=12>0", marks: 1, markCode: "R" },
              { reasoning: "Substitute $x=2$ into the equation.", working: "y=8-24+5=-11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,-11)$",
            commonErrors: ["Choosing $x=-2$, which is the maximum with $y=21$.", "Stopping after finding $x$."],
            examinerNote: "Check $x=-2$: $y=-8+24+5=21$, which is the maximum.",
          },
        },
        {
          id: "edm11-u1-turning-points-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A particle P moves in a straight line. At time $t$ seconds, $0\\le t\\le 6$, its displacement from a fixed point O is $s$ metres, where $s=t^3-9t^2+24t$.",
          parts: [
            { label: "a", prompt: "Find an expression for the velocity of P at time $t$.", marks: 2 },
            { label: "b", prompt: "Find the times when P is instantaneously at rest.", marks: 3 },
            { label: "c", prompt: "Work out the acceleration of P when $t=2$.", marks: 2 },
            { label: "d", prompt: "Work out the distance P travels between the two times it is at rest, and state its direction of motion in this interval.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Velocity and acceleration", statement: "$v=\\frac{ds}{dt}$ and $a=\\frac{dv}{dt}$." },
              { kind: "principle", name: "At rest", statement: "P is instantaneously at rest when $v=0$." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate $s$ with respect to $t$.", working: "v=3t^2-18t+24", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Set $v=0$ and divide by 3.", working: "t^2-6t+8=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise.", working: "(t-2)(t-4)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "t=2,\\; t=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate velocity.", working: "a=6t-18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $t=2$.", working: "a=-6 \\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the displacements at the two times.", working: "s(2)=8-36+48=20,\\quad s(4)=64-144+96=16", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Distance is the difference.", working: "20-16=4 \\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "At $t=3$, $v=27-54+24=-3<0$, so P moves in the negative direction (back towards O).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $3t^2-18t+24$ (b) $t=2$ and $t=4$ (c) $-6$ m/s$^2$ (d) 4 m, in the negative direction",
            commonErrors: ["Substituting the times into velocity rather than displacement.", "Forgetting to state the direction of motion."],
            examinerNote: "Accept 'towards O' for the direction.",
          },
        },
      ],
    },
  ],
};
