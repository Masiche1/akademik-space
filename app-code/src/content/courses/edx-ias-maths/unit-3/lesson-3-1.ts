import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edias-maths-u3-lesson-3-1",
  code: "3-1",
  title: "Vectors and Kinematics in One Dimension",
  goal: "I CAN use vectors in mechanics, apply the constant-acceleration equations and interpret motion graphs.",
  standards: ["WME01 M1", "Vectors in mechanics", "Kinematics"],
  vocabulary: [
    { term: "Vector", definition: "A quantity with magnitude and direction, written $\\mathbf{r}=xi+yj$ where $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular unit vectors." },
    { term: "Displacement", definition: "The change in position of a particle, a vector; distance is its magnitude." },
    { term: "Velocity", definition: "Rate of change of displacement; $\\mathbf{v}=\\frac{d\\mathbf{r}}{dt}$." },
    { term: "Acceleration", definition: "Rate of change of velocity; $\\mathbf{a}=\\frac{d\\mathbf{v}}{dt}$." },
    { term: "SUVAT", definition: "The constant-acceleration equations relating displacement $s$, initial velocity $u$, final velocity $v$, acceleration $a$ and time $t$." },
  ],
  concepts: [
    {
      id: "edias-maths-u3-vectors",
      title: "Vectors in mechanics",
      skill: "Use $\\mathbf{i}$ and $\\mathbf{j}$ vectors for displacement, velocity and acceleration, and find magnitudes and directions.",
      lesson: {
        sections: [
          {
            heading: "Position, velocity and acceleration vectors",
            body: "A particle's position is $\\mathbf{r}(t)=x(t)\\mathbf{i}+y(t)\\mathbf{j}$. Then $\\mathbf{v}=\\frac{d\\mathbf{r}}{dt}=\\dot{x}\\mathbf{i}+\\dot{y}\\mathbf{j}$ and $\\mathbf{a}=\\frac{d\\mathbf{v}}{dt}=\\ddot{x}\\mathbf{i}+\\ddot{y}\\mathbf{j}$. Differentiate component by component.",
          },
          {
            heading: "Speed and direction",
            body: "The speed is the magnitude $|\\mathbf{v}|=\\sqrt{\\dot{x}^2+\\dot{y}^2}$. The direction can be given as a bearing, a compass direction, or the angle $\\theta=\\arctan\\frac{\\dot{y}}{\\dot{x}}$ measured from the positive $x$-direction (adjust for the quadrant).",
          },
          {
            heading: "When the particle is instantaneously at rest",
            body: "Set both components of $\\mathbf{v}$ to zero — or the magnitude to zero — to find times when the particle stops. For projectile-like motion under gravity, only the vertical component is zero at the top.",
          },
        ],
        keyFormulas: [
          { name: "Velocity", statement: "$\\mathbf{v}=\\dot{x}\\mathbf{i}+\\dot{y}\\mathbf{j}$" },
          { name: "Speed", statement: "$|\\mathbf{v}|=\\sqrt{\\dot{x}^2+\\dot{y}^2}$" },
          { name: "Acceleration", statement: "$\\mathbf{a}=\\ddot{x}\\mathbf{i}+\\ddot{y}\\mathbf{j}$" },
        ],
        workedExample: {
          problem: "A particle has position $\\mathbf{r}=t^2\\mathbf{i}+(3t-2)\\mathbf{j}$. Find its velocity and speed at $t=2$.",
          solution: "$\\mathbf{v}=2t\\mathbf{i}+3\\mathbf{j}$, so at $t=2$, $\\mathbf{v}=4\\mathbf{i}+3\\mathbf{j}$ and speed $=\\sqrt{16+9}=5$ m/s.",
        },
      },
      questions: [
        {
          id: "edias-maths-u3-vec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A particle has velocity $\\mathbf{v}=3\\mathbf{i}-4\\mathbf{j}$. What is its speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector magnitude", statement: "$|\\mathbf{v}|=\\sqrt{v_x^2+v_y^2}$." },
            ],
            steps: [
              { reasoning: "Speed is the magnitude: $\\sqrt{3^2+(-4)^2}=\\sqrt{25}=5$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Adding components instead of using Pythagoras.", "Forgetting to square the components."],
          },
        },
        {
          id: "edias-maths-u3-vec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle's position is $\\mathbf{r}(t)=(t^2-2t)\\mathbf{i}+(t^3-3t)\\mathbf{j}$ metres, where $t$ is in seconds. Find its velocity vector at $t=1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Velocity from position", statement: "$\\mathbf{v}=\\frac{d\\mathbf{r}}{dt}$, differentiated component by component." },
            ],
            steps: [
              { reasoning: "Differentiate each component.", working: "\\mathbf{v}=(2t-2)\\mathbf{i}+(3t^2-3)\\mathbf{j}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $t=1$.", working: "\\mathbf{v}(1)=(0)\\mathbf{i}+(0)\\mathbf{j}=\\mathbf{0}", marks: 1, markCode: "M" },
              { reasoning: "State the velocity vector.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{v}(1)=\\mathbf{0}$ m/s (the particle is instantaneously at rest)",
            commonErrors: ["Differentiating $t^2-2t$ as $2t$ only (dropping the $-2$).", "Using $\\mathbf{r}$ instead of differentiating."],
            examinerNote: "Accept $0\\mathbf{i}+0\\mathbf{j}$ or 'at rest'.",
          },
        },
        {
          id: "edias-maths-u3-vec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A particle moves with velocity $\\mathbf{v}(t)=(6t-2)\\mathbf{i}+(t^2-4)\\mathbf{j}$ m/s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Instantaneously at rest", statement: "The particle is at rest when $\\mathbf{v}=\\mathbf{0}$, i.e. both components vanish." },
            ],
            steps: [
              { reasoning: "Set the $\\mathbf{i}$ component to zero.", working: "6t-2=0\\Rightarrow t=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "Set the $\\mathbf{j}$ component to zero.", working: "t^2-4=0\\Rightarrow t=\\pm2", marks: 1, markCode: "M" },
              { reasoning: "The particle is at rest only when both are zero simultaneously — check $t=\\frac13$: $j$-component is $\\frac19-4\\neq0$; at $t=\\pm2$: $i$-component is $10$ or $-14\\neq0$.", marks: 1, markCode: "R" },
              { reasoning: "Conclude the particle is never instantaneously at rest for $t\\ge0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The particle is never instantaneously at rest (for $t\\ge0$).",
            commonErrors: ["Setting only one component to zero.", "Claiming $t=\\frac13$ is a rest time without checking the other component."],
          },
        },
        {
          id: "edias-maths-u3-vec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle $P$ moves so that its position at time $t$ seconds is $\\mathbf{r}(t)=(t^2-4t)\\mathbf{i}+(2t^2-8)\\mathbf{j}$ metres, for $t\\ge0$.",
          parts: [
            { label: "a", prompt: "Find the velocity vector $\\mathbf{v}(t)$.", marks: 2 },
            { label: "b", prompt: "Find the speed of $P$ when $t=3$.", marks: 3 },
            { label: "c", prompt: "Find the acceleration vector $\\mathbf{a}(t)$ and its magnitude.", marks: 3 },
            { label: "d", prompt: "Find the time(s) at which $P$ is instantaneously at rest.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinematics vectors", statement: "$\\mathbf{v}=\\dot{\\mathbf{r}}$, $\\mathbf{a}=\\dot{\\mathbf{v}}$; speed $=|\\mathbf{v}|$." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate each component.", working: "\\mathbf{v}(t)=(2t-4)\\mathbf{i}+(4t)\\mathbf{j}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the velocity vector.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate $\\mathbf{v}(3)$.", working: "\\mathbf{v}(3)=(2)\\mathbf{i}+(12)\\mathbf{j}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute the magnitude.", working: "|\\mathbf{v}(3)|=\\sqrt{4+144}=\\sqrt{148}=2\\sqrt{37}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the speed.", working: "2\\sqrt{37}\\approx12.2\\text{ m/s}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Differentiate the velocity.", working: "\\mathbf{a}(t)=2\\mathbf{i}+4\\mathbf{j}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The acceleration is constant.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Magnitude: $\\sqrt{4+16}=\\sqrt{20}=2\\sqrt5\\approx4.47$ m/s$^2$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $\\mathbf{v}=\\mathbf{0}$: need $2t-4=0$ and $4t=0$ simultaneously.", working: "t=2\\text{ and }t=0\\text{ — impossible}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclude $P$ is never instantaneously at rest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathbf{v}=(2t-4)\\mathbf{i}+4t\\mathbf{j}$ (b) $2\\sqrt{37}\\approx12.2$ m/s (c) $\\mathbf{a}=2\\mathbf{i}+4\\mathbf{j}$, magnitude $2\\sqrt5\\approx4.47$ m/s$^2$ (d) never",
            commonErrors: ["Differentiating $-8$ to $-8$ instead of $0$.", "Using $|\\mathbf{v}|=v_x+v_y$.", "In (d) solving only one component."],
            examinerNote: "In (b) accept $\\sqrt{148}$ or $2\\sqrt{37}$ or $12.2$; in (c) the acceleration is constant so its magnitude is time-independent.",
          },
        },
      ],
    },
    {
      id: "edias-maths-u3-kinematics",
      title: "Constant acceleration and motion graphs",
      skill: "Apply the SUVAT equations and interpret displacement–time, velocity–time and acceleration–time graphs.",
      lesson: {
        sections: [
          {
            heading: "The SUVAT equations",
            body: "For constant acceleration $a$ in one dimension: $v=u+at$, $s=ut+\\frac12at^2$, $v^2=u^2+2as$, and $s=\\frac{u+v}{2}t$. Choose the equation that avoids the missing variable. Take the direction of motion as positive; upward motion against gravity has $a=-9.8$ m/s$^2$ (or $-10$ if the question uses $g=10$).",
          },
          {
            heading: "Motion graphs",
            body: "On a **velocity–time** graph: gradient $=$ acceleration, area under the graph $=$ displacement. On a **displacement–time** graph: gradient $=$ velocity, and a stationary point (zero gradient) means the particle is momentarily at rest. On an **acceleration–time** graph: area $=$ change in velocity.",
          },
          {
            heading: "Free fall",
            body: "A particle projected vertically has $a=-g$ throughout (ignoring air resistance). At the highest point $v=0$; the time up equals the time down for the same height.",
          },
        ],
        keyFormulas: [
          { name: "SUVAT", statement: "$v=u+at$; $s=ut+\\frac12at^2$; $v^2=u^2+2as$; $s=\\frac{u+v}{2}t$" },
          { name: "Graph rules", statement: "v–t: gradient $=a$, area $=s$; s–t: gradient $=v$" },
          { name: "Free fall", statement: "$a=-g$ (take upward positive)" },
        ],
        workedExample: {
          problem: "A stone is projected vertically upwards at $15$ m/s. Find the maximum height reached ($g=9.8$).",
          solution: "At the top $v=0$. Use $v^2=u^2+2as$: $0=225+2(-9.8)s$, so $s=\\frac{225}{19.6}\\approx11.5$ m.",
        },
      },
      questions: [
        {
          id: "edias-maths-u3-kin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car accelerates uniformly from $10$ m/s to $22$ m/s in $4$ seconds. What is its acceleration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$ m/s$^2$" },
              { id: "b", text: "$4.8$ m/s$^2$" },
              { id: "c", text: "$48$ m/s$^2$" },
              { id: "d", text: "$0.75$ m/s$^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "SUVAT", statement: "$v=u+at$." },
            ],
            steps: [
              { reasoning: "$a=\\frac{v-u}{t}=\\frac{22-10}{4}=3$ m/s$^2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$ m/s$^2$",
            commonErrors: ["Dividing by the wrong time or forgetting to subtract $u$."],
          },
        },
        {
          id: "edias-maths-u3-kin-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A particle moves with constant acceleration. Its initial velocity is $4$ m/s and after $5$ seconds its velocity is $19$ m/s. Find the distance travelled in those $5$ seconds.",
          response: {
            type: "numeric",
            parts: [{ label: "distance", answer: 57.5, unit: "m" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "SUVAT", statement: "$s=\\frac{u+v}{2}t$ for constant acceleration." },
            ],
            steps: [
              { reasoning: "Use the average-velocity equation — no need to find $a$.", working: "s=\\frac{4+19}{2}\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "s=11.5\\times5=57.5\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "State the distance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$57.5$ m",
            commonErrors: ["Using $s=ut+\\frac12at^2$ without first finding $a$ — acceptable but longer.", "Using $v=19$ as the initial velocity."],
          },
        },
        {
          id: "edias-maths-u3-kin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is thrown vertically upwards with initial speed $20$ m/s. Take $g=9.8$ m/s$^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "SUVAT", statement: "$v=u+at$ with $a=-9.8$; at the top $v=0$." },
            ],
            steps: [
              { reasoning: "Find the time to reach the top using $v=u+at$.", working: "0=20-9.8t\\Rightarrow t=\\frac{20}{9.8}\\approx2.04\\text{ s}", marks: 1, markCode: "M" },
              { reasoning: "Find the maximum height.", working: "s=ut+\\frac12at^2=20(2.04)-4.9(2.04)^2", marks: 1, markCode: "M" },
              { reasoning: "Or use $v^2=u^2+2as$ directly.", working: "0=400-19.6s\\Rightarrow s=\\frac{400}{19.6}\\approx20.4\\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "State the maximum height.", working: "s_{\\max}\\approx20.4\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maximum height $\\approx20.4$ m (reached after $\\approx2.04$ s)",
            commonErrors: ["Using $a=+9.8$ (sign error).", "Forgetting that $v=0$ at the top."],
          },
        },
        {
          id: "edias-maths-u3-kin-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A particle moves in a straight line. Its velocity $v$ m/s at time $t$ seconds is given by $v=3t^2-12t+9$ for $0\\le t\\le4$.",
          parts: [
            { label: "a", prompt: "Find the times at which the particle is instantaneously at rest.", marks: 3 },
            { label: "b", prompt: "Find the acceleration at $t=1$.", marks: 2 },
            { label: "c", prompt: "Find the displacement of the particle between $t=0$ and $t=4$.", marks: 3 },
            { label: "d", prompt: "Explain, with reference to the sign of $v$, whether the particle changes direction during the motion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Kinematics", statement: "$v=\\frac{ds}{dt}$, $a=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}$; displacement $=\\int v\\,dt$." },
            ],
            steps: [
              { part: "a", reasoning: "Set $v=0$.", working: "3t^2-12t+9=0\\Rightarrow t^2-4t+3=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Factorise and solve.", working: "(t-1)(t-3)=0\\Rightarrow t=1\\text{ or }t=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both times lie in $[0,4]$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Differentiate $v$.", working: "a=\\frac{dv}{dt}=6t-12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate at $t=1$.", working: "a(1)=6-12=-6\\text{ m/s}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integrate $v$.", working: "s=\\int(3t^2-12t+9)\\,dt=t^3-6t^2+9t+c", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Displacement is $s(4)-s(0)$.", working: "s(4)=64-96+36=4;\\ s(0)=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the displacement.", working: "s=4\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Factorise $v=3(t-1)(t-3)$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sign analysis: $v>0$ on $[0,1)$, $v<0$ on $(1,3)$, $v>0$ on $(3,4]$ — the particle changes direction at $t=1$ and $t=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $t=1$ and $t=3$ s (b) $-6$ m/s$^2$ (c) $4$ m (d) yes — direction changes at $t=1$ and $t=3$",
            commonErrors: ["Differentiating $v$ incorrectly in (b).", "Using distance instead of displacement in (c) — must integrate signed $v$.", "Missing a sign change in (d)."],
            examinerNote: "In (c) displacement $=\\int_0^4 v\\,dt=4$ m even though the particle travels further — distance would be larger.",
          },
        },
      ],
    },
  ],
};
