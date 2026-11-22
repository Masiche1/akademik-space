import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "pc-u5-lesson-5-2",
  code: "5-2",
  title: "Parametric and Polar Equations",
  goal: "I CAN describe curves with parametric and polar equations, convert between forms, and model motion and polar graphs.",
  standards: ["HSF-TF.A.2", "HSF-TF.C.8", "HSN-CN.B.4", "HSA-REI.C.7"],
  vocabulary: [
    { term: "Parameter", definition: "A third variable, often $t$, on which both $x$ and $y$ depend in a parametric description of a curve." },
    { term: "Parametric equations", definition: "A pair of equations $x=f(t)$ and $y=g(t)$ that give the coordinates of a point as functions of a parameter." },
    { term: "Eliminating the parameter", definition: "Combining the parametric equations to obtain a single equation in $x$ and $y$ that describes the same curve." },
    { term: "Polar coordinates", definition: "A way to locate a point by its directed distance $r$ from the pole (origin) and the angle $\\theta$ from the polar axis (positive $x$-axis)." },
    { term: "Rose curve", definition: "A polar graph $r=a\\cos(n\\theta)$ or $r=a\\sin(n\\theta)$; it has $n$ petals when $n$ is odd and $2n$ petals when $n$ is even." },
    { term: "Cardioid", definition: "A heart-shaped polar curve of the form $r=a\\pm a\\cos\\theta$ or $r=a\\pm a\\sin\\theta$." },
    { term: "Pole", definition: "The origin of the polar coordinate system." },
  ],
  concepts: [
    {
      id: "pc-u5-parametric",
      title: "Parametric equations and projectile motion",
      skill: "Evaluate parametric equations, eliminate the parameter, and model projectile motion with parametric equations.",
      lesson: {
        sections: [
          {
            heading: "Describing motion with a parameter",
            body: "In parametric form, $x=f(t)$ and $y=g(t)$. As $t$ increases the point $(x,y)$ traces a curve and also records direction and timing, which a single equation $y=h(x)$ cannot. To find a point, substitute a value of $t$ into both equations.",
          },
          {
            heading: "Eliminating the parameter",
            body: "To find the rectangular equation, solve one equation for $t$ and substitute into the other. For trigonometric parametrizations, use an identity instead: if $x=a\\cos t$ and $y=b\\sin t$, then $\\cos t=x/a$, $\\sin t=y/b$, and $\\cos^2t+\\sin^2t=1$ gives $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$, an ellipse. Note that eliminating the parameter can lose restrictions on $x$ or $y$ and the direction of travel.",
          },
          {
            heading: "Projectile motion",
            body: "An object launched with speed $v_0$ at angle $\\alpha$ above the horizontal from the ground has $x=(v_0\\cos\\alpha)t$ and $y=(v_0\\sin\\alpha)t-\\frac12gt^2$, with $g=9.8\\text{ m/s}^2$. The horizontal velocity is constant, while the vertical motion is a quadratic in $t$. The flight ends when $y=0$ again, and the maximum height occurs at $t=\\frac{v_0\\sin\\alpha}{g}$.",
          },
        ],
        keyFormulas: [
          { name: "Ellipse parametrization", statement: "$x=a\\cos t,\\; y=b\\sin t \\Rightarrow \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$" },
          { name: "Projectile motion", statement: "$x=(v_0\\cos\\alpha)t,\\; y=(v_0\\sin\\alpha)t-\\tfrac12gt^2$" },
        ],
        workedExample: {
          problem: "Eliminate the parameter from $x=t+2$, $y=t^2-1$.",
          solution: "Solve the first equation for $t$: $t=x-2$. Substitute into the second: $y=(x-2)^2-1=x^2-4x+3$. The curve is a parabola with vertex $(2,-1)$ opening upward.",
        },
      },
      questions: [
        {
          id: "pc-u5-parametric-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A curve is given by $x=2t+1$ and $y=t-3$. What point on the curve corresponds to $t=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-1,5)$" },
              { id: "b", text: "$(5,-1)$" },
              { id: "c", text: "$(3,-1)$" },
              { id: "d", text: "$(5,-5)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parametric equations", statement: "Each value of $t$ gives the point $(x(t),y(t))$." },
            ],
            steps: [
              { reasoning: "Substitute $t=2$ into both equations.", working: "x=2(2)+1=5,\\quad y=2-3=-1", marks: 1, markCode: "M" },
              { reasoning: "Write the coordinates as an ordered pair $(x,y)$.", working: "(5,-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(5,-1)$",
            commonErrors: ["Using $x=2t$ and forgetting the $+1$.", "Swapping the order of $x$ and $y$."],
          },
        },
        {
          id: "pc-u5-parametric-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A curve is given by $x=2t-1$ and $y=t^2+3$. Eliminate the parameter to find $y$ in terms of $x$, then find $y$ when $x=7$.",
          response: { type: "numeric", parts: [{ label: "$y$ when $x=7$", answer: 19 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination of the parameter", statement: "Solve one parametric equation for $t$ and substitute into the other." },
            ],
            steps: [
              { reasoning: "Solve $x=2t-1$ for $t$.", working: "t=\\frac{x+1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $y=t^2+3$.", working: "y=\\left(\\frac{x+1}{2}\\right)^2+3", marks: 1, markCode: "A" },
              { reasoning: "Evaluate at $x=7$: $t=4$.", working: "y=4^2+3=19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=\\frac{(x+1)^2}{4}+3$; when $x=7$, $y=19$.",
            commonErrors: ["Substituting $t=x$ directly.", "Computing $t=(x-1)/2$ from a sign error."],
          },
        },
        {
          id: "pc-u5-parametric-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A point moves along the curve $x=3\\cos t$, $y=2\\sin t$. Eliminating the parameter gives $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$. Find $a$ and $b$, and find the positive $y$-coordinate of the point on the curve with $x=1.5$ (2 decimal places).",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 3 },
              { label: "$b$", answer: 2 },
              { label: "Positive $y$ when $x=1.5$", answer: 1.73, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagorean identity", statement: "$\\cos^2t+\\sin^2t=1$" },
            ],
            steps: [
              { reasoning: "Isolate the trigonometric functions.", working: "\\cos t=\\frac{x}{3},\\quad \\sin t=\\frac{y}{2}", marks: 1, markCode: "M" },
              { reasoning: "Apply the Pythagorean identity.", working: "\\frac{x^2}{9}+\\frac{y^2}{4}=1,\\quad a=3,\\ b=2", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=1.5$.", working: "\\frac{y^2}{4}=1-\\frac{2.25}{9}=0.75", marks: 1, markCode: "M" },
              { reasoning: "Solve for the positive $y$.", working: "y=\\sqrt{3}\\approx1.73", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x^2}{9}+\\frac{y^2}{4}=1$, so $a=3$, $b=2$; $y=\\sqrt3\\approx1.73$.",
            commonErrors: ["Writing $x^2/3+y^2/2=1$ (forgetting to square the semi-axes).", "Using $y^2/4=0.75$ then taking $y=0.75$."],
          },
        },
        {
          id: "pc-u5-parametric-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A ball is kicked from level ground with initial speed $20\\text{ m/s}$ at an angle of $30^\\circ$ above the horizontal. Ignoring air resistance and using $g=9.8\\text{ m/s}^2$, its position after $t$ seconds is $x=20\\cos(30^\\circ)\\,t=10\\sqrt3\\,t$ and $y=20\\sin(30^\\circ)\\,t-4.9t^2=10t-4.9t^2$, in meters.",
          parts: [
            { label: "a", prompt: "Find the time of flight, in seconds, to 2 decimal places.", marks: 2 },
            { label: "b", prompt: "Find the horizontal range, in meters, to 2 decimal places.", marks: 2 },
            { label: "c", prompt: "Find the maximum height, in meters, to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "Eliminate the parameter to write $y$ as a function of $x$, and state what type of curve the path is.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Projectile motion", statement: "Horizontal velocity is constant; vertical position is a quadratic in $t$." },
              { kind: "property", name: "Vertex of a parabola", statement: "$y=at^2+bt$ has its maximum at $t=-\\frac{b}{2a}$." },
            ],
            steps: [
              { part: "a", reasoning: "The ball lands when $y=0$ again, so factor out $t$.", working: "t(10-4.9t)=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reject $t=0$ (launch) and solve the other factor.", working: "t=\\frac{10}{4.9}\\approx2.04", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute the flight time into the horizontal equation.", working: "x=10\\sqrt3\\left(\\frac{10}{4.9}\\right)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "x\\approx35.35\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The maximum occurs halfway through the flight, at the vertex.", working: "t=\\frac{10}{9.8}\\approx1.0204", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute into $y$.", working: "y=10(1.0204)-4.9(1.0204)^2\\approx5.10\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Solve $x=10\\sqrt3\\,t$ for $t$ and square it.", working: "t=\\frac{x}{10\\sqrt3},\\quad t^2=\\frac{x^2}{300}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute into $y$ and simplify.", working: "y=\\frac{x}{\\sqrt3}-\\frac{4.9}{300}x^2\\approx0.577x-0.0163x^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The result is a quadratic in $x$ with a negative leading coefficient.", working: "\\text{A parabola opening downward}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2.04$ s. (b) $35.35$ m. (c) $5.10$ m. (d) $y=\\frac{x}{\\sqrt3}-\\frac{4.9}{300}x^2$, a downward-opening parabola.",
            commonErrors: ["Using $t=10/9.8$ as the time of flight (this is the time to the top).", "Using $30^\\circ$ with the wrong trig function for the components."],
          },
        },
      ],
    },
    {
      id: "pc-u5-polar",
      title: "Polar coordinates and graphs",
      skill: "Convert between polar and rectangular coordinates and equations, and recognize circles, roses, and cardioids.",
      lesson: {
        sections: [
          {
            heading: "Converting points",
            body: "A polar point $(r,\\theta)$ corresponds to the rectangular point $x=r\\cos\\theta$, $y=r\\sin\\theta$. Going the other way, $r^2=x^2+y^2$ and $\\tan\\theta=y/x$. Choose $\\theta$ in the correct quadrant by checking the signs of $x$ and $y$; a calculator's inverse tangent alone only gives quadrant I or IV angles.",
          },
          {
            heading: "Converting equations",
            body: "To convert a polar equation, substitute $r\\cos\\theta=x$, $r\\sin\\theta=y$, and $r^2=x^2+y^2$. Often multiplying both sides by $r$ helps: $r=6\\cos\\theta$ becomes $r^2=6r\\cos\\theta$, so $x^2+y^2=6x$, which is a circle. The curves $r=a\\cos\\theta$ and $r=a\\sin\\theta$ are circles of diameter $|a|$ through the pole.",
          },
          {
            heading: "Roses and cardioids",
            body: "The graph of $r=a\\cos(n\\theta)$ is a rose with $n$ petals if $n$ is odd and $2n$ petals if $n$ is even; each petal has length $|a|$. The graph of $r=a(1+\\cos\\theta)$ is a cardioid, symmetric about the polar axis, reaching $r=2a$ at $\\theta=0$ and passing through the pole at $\\theta=\\pi$.",
          },
        ],
        keyFormulas: [
          { name: "Polar to rectangular", statement: "$x=r\\cos\\theta,\\; y=r\\sin\\theta$" },
          { name: "Rectangular to polar", statement: "$r^2=x^2+y^2,\\; \\tan\\theta=\\frac{y}{x}$" },
        ],
        workedExample: {
          problem: "Convert the polar point $\\left(4,\\frac{\\pi}{6}\\right)$ to rectangular coordinates.",
          solution: "$x=4\\cos\\frac{\\pi}{6}=4\\cdot\\frac{\\sqrt3}{2}=2\\sqrt3$ and $y=4\\sin\\frac{\\pi}{6}=4\\cdot\\frac12=2$. The point is $(2\\sqrt3,2)\\approx(3.46,2)$.",
        },
      },
      questions: [
        {
          id: "pc-u5-polar-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which rectangular point corresponds to the polar point $\\left(4,\\frac{\\pi}{3}\\right)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,2\\sqrt3)$" },
              { id: "b", text: "$(4,\\sqrt3)$" },
              { id: "c", text: "$(2\\sqrt3,2)$" },
              { id: "d", text: "$(\\sqrt3,4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Polar to rectangular", statement: "$x=r\\cos\\theta,\\; y=r\\sin\\theta$" },
            ],
            steps: [
              { reasoning: "Evaluate $x=r\\cos\\theta$ with $\\cos\\frac{\\pi}{3}=\\frac12$.", working: "x=4\\cdot\\frac12=2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $y=r\\sin\\theta$ with $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt3}{2}$.", working: "y=4\\cdot\\frac{\\sqrt3}{2}=2\\sqrt3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(2,2\\sqrt3)$",
            commonErrors: ["Swapping sine and cosine values.", "Using the $\\frac{\\pi}{6}$ values."],
          },
        },
        {
          id: "pc-u5-polar-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert the rectangular point $(-1,1)$ to polar coordinates $(r,\\theta)$ with $r>0$ and $0\\le\\theta<2\\pi$. Give $r$ and $\\theta$ (in radians) to 2 decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$", answer: 1.41, tolerance: 0.01 },
              { label: "$\\theta$ (radians)", answer: 2.36, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangular to polar", statement: "$r=\\sqrt{x^2+y^2}$, $\\tan\\theta=y/x$, with $\\theta$ in the quadrant of the point." },
            ],
            steps: [
              { reasoning: "Compute the distance from the pole.", working: "r=\\sqrt{(-1)^2+1^2}=\\sqrt2\\approx1.41", marks: 1, markCode: "A" },
              { reasoning: "The reference angle comes from $\\tan\\theta=-1$, but the point is in quadrant II.", working: "\\theta=\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}", marks: 1, markCode: "M" },
              { reasoning: "Convert to decimals.", working: "\\theta\\approx2.36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\left(\\sqrt2,\\frac{3\\pi}{4}\\right)\\approx(1.41,\\,2.36)$",
            commonErrors: ["Using $\\theta=-\\frac{\\pi}{4}$ from the calculator, which is in quadrant IV.", "Using $r=2$."],
          },
        },
        {
          id: "pc-u5-polar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The polar equation $r=6\\cos\\theta$ describes a circle. Convert it to rectangular form and give the center and radius.",
          response: {
            type: "numeric",
            parts: [
              { label: "Center $x$-coordinate", answer: 3 },
              { label: "Center $y$-coordinate", answer: 0 },
              { label: "Radius", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Polar to rectangular", statement: "$r^2=x^2+y^2$ and $r\\cos\\theta=x$." },
              { kind: "principle", name: "Completing the square", statement: "$x^2-6x=(x-3)^2-9$." },
            ],
            steps: [
              { reasoning: "Multiply both sides by $r$ so that $r\\cos\\theta$ and $r^2$ appear.", working: "r^2=6r\\cos\\theta", marks: 1, markCode: "M" },
              { reasoning: "Substitute rectangular equivalents.", working: "x^2+y^2=6x", marks: 1, markCode: "A" },
              { reasoning: "Complete the square in $x$.", working: "(x-3)^2+y^2=9", marks: 1, markCode: "M" },
              { reasoning: "Read the center and radius.", working: "(3,0),\\quad r=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-3)^2+y^2=9$; center $(3,0)$, radius $3$.",
            commonErrors: ["Reporting radius $6$ from the coefficient.", "Not completing the square, so missing the center."],
          },
        },
        {
          id: "pc-u5-polar-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the cardioid with polar equation $r=2+2\\cos\\theta$.",
          parts: [
            { label: "a", prompt: "Find $r$ when $\\theta=0$, $\\theta=\\frac{\\pi}{2}$, and $\\theta=\\pi$.", marks: 2 },
            { label: "b", prompt: "Find the rectangular coordinates of the point with $\\theta=\\frac{\\pi}{3}$ (2 decimal places).", marks: 2 },
            { label: "c", prompt: "Explain why the graph is symmetric about the polar axis (the $x$-axis).", marks: 2 },
            { label: "d", prompt: "Show that the rectangular equation is $x^2+y^2=2\\sqrt{x^2+y^2}+2x$, and verify it with the point from part (a) where $\\theta=0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Polar to rectangular", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$." },
              { kind: "property", name: "Even cosine", statement: "$\\cos(-\\theta)=\\cos\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate the equation at the three angles.", working: "r(0)=4,\\quad r\\left(\\tfrac{\\pi}{2}\\right)=2,\\quad r(\\pi)=0", marks: 2, markCode: "A" },
              { part: "b", reasoning: "At $\\theta=\\frac{\\pi}{3}$, $r=2+2\\cdot\\frac12=3$.", working: "x=3\\cos\\tfrac{\\pi}{3}=1.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute $y$.", working: "y=3\\sin\\tfrac{\\pi}{3}=\\tfrac{3\\sqrt3}{2}\\approx2.60", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Replacing $\\theta$ by $-\\theta$ leaves $r$ unchanged because cosine is even.", working: "r(-\\theta)=2+2\\cos(-\\theta)=r(\\theta)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "So $(r,\\theta)$ and $(r,-\\theta)$ are both on the graph, and they are reflections across the polar axis.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Multiply by $r$ to create $r\\cos\\theta$ and $r^2$ terms.", working: "r^2=2r+2r\\cos\\theta", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute $r^2=x^2+y^2$, $r=\\sqrt{x^2+y^2}$, and $r\\cos\\theta=x$.", working: "x^2+y^2=2\\sqrt{x^2+y^2}+2x", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check the point $(4,0)$ from $\\theta=0$.", working: "16=2(4)+2(4)=16", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4,2,0$. (b) $(1.50,2.60)$. (c) $r(-\\theta)=r(\\theta)$. (d) $x^2+y^2=2\\sqrt{x^2+y^2}+2x$; $(4,0)$ satisfies it.",
            commonErrors: ["Forgetting that $r=\\sqrt{x^2+y^2}$ is not $x^2+y^2$.", "Using $r=4$ at $\\theta=\\pi$."],
          },
        },
      ],
    },
  ],
};
