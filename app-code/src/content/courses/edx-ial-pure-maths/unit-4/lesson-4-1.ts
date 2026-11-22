import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edialpm-u4-lesson-4-1",
  code: "4-1",
  title: "Vectors in Three Dimensions",
  goal: "I CAN work with 3D vectors, use the scalar (dot) product to find angles and projections, and write vector equations of lines.",
  standards: ["WMA14 P4", "Vectors"],
  vocabulary: [
    { term: "Position vector", definition: "The vector $\\vec{OP}=\\mathbf{a}$ from the origin to point $P$." },
    { term: "Scalar (dot) product", definition: "$\\mathbf{a}\\cdot\\mathbf{b}=|\\mathbf{a}||\\mathbf{b}|\\cos\\theta=a_1b_1+a_2b_2+a_3b_3$." },
    { term: "Vector product (cross)", definition: "$\\mathbf{a}\\times\\mathbf{b}$ gives a vector perpendicular to both, with magnitude $|\\mathbf{a}||\\mathbf{b}|\\sin\\theta$." },
    { term: "Vector equation of a line", definition: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$ where $\\mathbf{a}$ is a point on the line and $\\mathbf{b}$ its direction." },
    { term: "Projection", definition: "The component of $\\mathbf{a}$ along $\\mathbf{b}$: $\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{b}|}$." },
  ],
  concepts: [
    {
      id: "edialpm-u4-dot-product",
      title: "The scalar product",
      skill: "Compute dot products, find angles between vectors and determine perpendicularity.",
      lesson: {
        sections: [
          {
            heading: "Definition and computation",
            body: "For $\\mathbf{a}=(a_1,a_2,a_3)$ and $\\mathbf{b}=(b_1,b_2,b_3)$: $\\mathbf{a}\\cdot\\mathbf{b}=a_1b_1+a_2b_2+a_3b_3$. It is commutative, distributive, and $\\mathbf{a}\\cdot\\mathbf{a}=|\\mathbf{a}|^2$.",
          },
          {
            heading: "Angles and perpendicularity",
            body: "$\\cos\\theta=\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$. Perpendicular vectors have $\\mathbf{a}\\cdot\\mathbf{b}=0$. The projection of $\\mathbf{a}$ on $\\mathbf{b}$ has length $\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{b}|}$.",
          },
          {
            heading: "Resolving forces",
            body: "In mechanics problems, resolve a vector into components parallel and perpendicular to a direction using the dot product.",
          },
        ],
        keyFormulas: [
          { name: "Dot product", statement: "$\\mathbf{a}\\cdot\\mathbf{b}=\\sum a_ib_i$" },
          { name: "Angle", statement: "$\\cos\\theta=\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$" },
        ],
        workedExample: {
          problem: "Find the angle between $\\mathbf{a}=(1,2,2)$ and $\\mathbf{b}=(2,-1,0)$.",
          solution: "$\\mathbf{a}\\cdot\\mathbf{b}=2-2+0=0$, so the vectors are perpendicular, $\\theta=90^\\circ$.",
        },
      },
      questions: [
        {
          id: "edialpm-u4-dot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\mathbf{a}=(1,0,2)$ and $\\mathbf{b}=(3,1,-1)$, what is $\\mathbf{a}\\cdot\\mathbf{b}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Dot product", statement: "$\\mathbf{a}\\cdot\\mathbf{b}=a_1b_1+a_2b_2+a_3b_3$." },
            ],
            steps: [
              { reasoning: "$1(3)+0(1)+2(-1)=3-2=1$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $1$",
            commonErrors: ["Arithmetic slips on the third component."],
          },
        },
        {
          id: "edialpm-u4-dot-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the angle between $\\mathbf{a}=(1,1,0)$ and $\\mathbf{b}=(0,1,1)$, giving your answer in degrees to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [{ label: "angle (degrees)", answer: 60.002, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle formula", statement: "$\\cos\\theta=\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$." },
            ],
            steps: [
              { reasoning: "$\\mathbf{a}\\cdot\\mathbf{b}=0+1+0=1$; $|\\mathbf{a}|=|\\mathbf{b}|=\\sqrt2$.", working: "\\cos\\theta=\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "$\\theta=\\arccos(0.5)=60^\\circ$.", working: "\\theta=60^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State $60.0^\\circ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60.0^\\circ$",
            commonErrors: ["Using radians answer without converting."],
          },
        },
        {
          id: "edialpm-u4-dot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find a vector perpendicular to both $\\mathbf{a}=(1,0,1)$ and $\\mathbf{b}=(0,1,1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cross product", statement: "$\\mathbf{a}\\times\\mathbf{b}$ is perpendicular to both." },
            ],
            steps: [
              { reasoning: "Compute $\\mathbf{a}\\times\\mathbf{b}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\1&0&1\\\\0&1&1\\end{vmatrix}$.", working: "\\mathbf{i}(0\\cdot1-1\\cdot1)-\\mathbf{j}(1\\cdot1-1\\cdot0)+\\mathbf{k}(1\\cdot1-0\\cdot0)", marks: 1, markCode: "M" },
              { reasoning: "$=(-1,-1,1)$.", working: "(-1,-1,1)", marks: 1, markCode: "M" },
              { reasoning: "Verify: $\\mathbf{a}\\cdot(-1,-1,1)=-1+0+1=0$; $\\mathbf{b}\\cdot(-1,-1,1)=0-1+1=0$.", marks: 1, markCode: "M" },
              { reasoning: "State the vector (any scalar multiple accepted).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-1,-1,1)$ or any multiple",
            commonErrors: ["Sign errors in the cross product."],
          },
        },
        {
          id: "edialpm-u4-dot-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Points $A(1,0,2)$ and $B(3,2,0)$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$.",
          parts: [
            { label: "a", prompt: "Find $\\overrightarrow{AB}$.", marks: 2 },
            { label: "b", prompt: "Find the midpoint $M$ of $AB$.", marks: 2 },
            { label: "c", prompt: "Find the angle $\\angle OAB$ where $O$ is the origin.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vector geometry", statement: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}$; midpoint $=\\frac{\\mathbf{a}+\\mathbf{b}}{2}$." },
              { kind: "formula", name: "Angle", statement: "$\\cos\\theta=\\frac{\\mathbf{u}\\cdot\\mathbf{v}}{|\\mathbf{u}||\\mathbf{v}|}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\overrightarrow{AB}=\\mathbf{b}-\\mathbf{a}=(3-1,2-0,0-2)=(2,2,-2)$.", working: "(2,2,-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State vector.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$M=\\frac{(1+3,0+2,2+0)}{2}=(2,1,1)$.", working: "(2,1,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State midpoint.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\overrightarrow{AO}=-\\mathbf{a}=(-1,0,-2)$; $\\overrightarrow{AB}=(2,2,-2)$.", working: "AO=(-1,0,-2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dot product: $(-1)(2)+0(2)+(-2)(-2)=-2+0+4=2$.", working: "\\cdot=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$|\\overrightarrow{AO}|=\\sqrt{1+0+4}=\\sqrt5$; $|\\overrightarrow{AB}|=\\sqrt{4+4+4}=\\sqrt{12}=2\\sqrt3$.", working: "\\sqrt5,\\ 2\\sqrt3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\cos\\theta=\\frac{2}{\\sqrt5\\cdot2\\sqrt3}=\\frac{1}{\\sqrt{15}}\\approx0.258$.", working: "\\cos\\theta\\approx0.258", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\theta=\\arccos(0.258)\\approx75.0^\\circ$.", working: "75.0^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State angle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(2,2,-2)$ (b) $(2,1,1)$ (c) $\\approx75.0^\\circ$",
            commonErrors: ["Using $\\mathbf{a}$ instead of $\\overrightarrow{AO}$.", "Forgetting magnitudes."],
          },
        },
      ],
    },
    {
      id: "edialpm-u4-lines",
      title: "Vector equations of lines",
      skill: "Write and interpret $\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$, find intersections of lines and determine when lines are parallel or skew.",
      lesson: {
        sections: [
          {
            heading: "Equation of a line",
            body: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$: $\\mathbf{a}$ is the position vector of any point on the line, $\\mathbf{b}$ the direction vector, $t\\in\\mathbb{R}$ the parameter. Cartesian form: $\\frac{x-x_1}{b_1}=\\frac{y-y_1}{b_2}=\\frac{z-z_1}{b_3}=t$.",
          },
          {
            heading: "Intersection of two lines",
            body: "Set $\\mathbf{a}_1+t\\mathbf{b}_1=\\mathbf{a}_2+s\\mathbf{b}_2$ and equate components to get three equations in $t$ and $s$. If a consistent $(t,s)$ exists the lines intersect; if the equations are inconsistent the lines are skew (or parallel if $\\mathbf{b}_1\\parallel\\mathbf{b}_2$).",
          },
          {
            heading: "Perpendicularity",
            body: "Two lines are perpendicular when $\\mathbf{b}_1\\cdot\\mathbf{b}_2=0$. The shortest distance between skew lines uses the cross product: $d=\\frac{|(\\mathbf{a}_2-\\mathbf{a}_1)\\cdot(\\mathbf{b}_1\\times\\mathbf{b}_2)|}{|\\mathbf{b}_1\\times\\mathbf{b}_2|}$.",
          },
        ],
        keyFormulas: [
          { name: "Line", statement: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$" },
          { name: "Perpendicular lines", statement: "$\\mathbf{b}_1\\cdot\\mathbf{b}_2=0$" },
        ],
        workedExample: {
          problem: "Do $\\mathbf{r}=(1,0,2)+t(1,1,0)$ and $\\mathbf{r}=(0,1,1)+s(0,1,1)$ intersect?",
          solution: "Equate: $1+t=0$, $t=1+s$, $2=s$. From first $t=-1$; check second: $-1=1+s\\Rightarrow s=-2$, but third gives $s=2$. Inconsistent — the lines do not intersect (skew or parallel; directions $(1,1,0)$ and $(0,1,1)$ are not parallel, so skew).",
        },
      },
      questions: [
        {
          id: "edialpm-u4-line-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The line $\\mathbf{r}=(2,1,0)+t(1,-1,2)$ passes through which point when $t=1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,0,2)$" },
              { id: "b", text: "$(1,2,-2)$" },
              { id: "c", text: "$(3,0,-2)$" },
              { id: "d", text: "$(2,1,0)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Line equation", statement: "Substitute $t$ into $\\mathbf{a}+t\\mathbf{b}$." },
            ],
            steps: [
              { reasoning: "$(2+1,1-1,0+2)=(3,0,2)$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(3,0,2)$",
            commonErrors: ["Subtracting the direction instead of adding."],
          },
        },
        {
          id: "edialpm-u4-line-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the value of $t$ at which the line $\\mathbf{r}=(1,2,3)+t(2,-1,1)$ meets the plane $z=5$.",
          response: {
            type: "numeric",
            parts: [{ label: "t", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parametric equation", statement: "Set the relevant component equal to the target value." },
            ],
            steps: [
              { reasoning: "$z$-component: $3+t=5$.", working: "t=2", marks: 1, markCode: "M" },
              { reasoning: "Solve.", marks: 1, markCode: "M" },
              { reasoning: "State $t=2$; point is $(5,0,5)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t=2$",
            commonErrors: ["Using the wrong component."],
          },
        },
        {
          id: "edialpm-u4-line-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Determine whether the lines $\\mathbf{r}=(0,1,2)+t(1,0,1)$ and $\\mathbf{r}=(2,0,1)+s(1,1,0)$ intersect, and find the point if they do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Line intersection", statement: "Equate components and solve for $t$ and $s$." },
            ],
            steps: [
              { reasoning: "Equate: $t=2+s$, $1=s$, $2+t=1$.", working: "t=2+s,\\ s=1", marks: 1, markCode: "M" },
              { reasoning: "From second $s=1$, so $t=3$; check third: $2+3=5\\ne1$ — inconsistent.", marks: 1, markCode: "M" },
              { reasoning: "Check directions $(1,0,1)$ and $(1,1,0)$ not parallel, so lines are skew.", marks: 1, markCode: "R" },
              { reasoning: "State conclusion: skew, no intersection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The lines are skew — they do not intersect",
            commonErrors: ["Forcing a solution with inconsistent parameters."],
          },
        },
        {
          id: "edialpm-u4-line-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Line $L_1$: $\\mathbf{r}=(1,0,1)+t(2,1,-1)$; line $L_2$: $\\mathbf{r}=(0,2,3)+s(1,-1,2)$.",
          parts: [
            { label: "a", prompt: "Determine whether $L_1$ and $L_2$ intersect, justifying your answer.", marks: 4 },
            { label: "b", prompt: "Find the position vector of the intersection point.", marks: 3 },
            { label: "c", prompt: "Find the acute angle between the two lines.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Intersection", statement: "Equate components of $\\mathbf{a}_1+t\\mathbf{b}_1$ and $\\mathbf{a}_2+s\\mathbf{b}_2$." },
              { kind: "formula", name: "Angle", statement: "$\\cos\\theta=\\frac{|\\mathbf{b}_1\\cdot\\mathbf{b}_2|}{|\\mathbf{b}_1||\\mathbf{b}_2|}$." },
            ],
            steps: [
              { part: "a", reasoning: "Equate components: $1+2t=s$, $t=2-s$, $1-t=3+2s$.", working: "three equations", marks: 1, markCode: "M" },
              { part: "a", reasoning: "From first two: $s=1+2t$ and $s=2-t$; equate: $1+2t=2-t$, so $3t=1$, $t=\\frac13$, $s=\\frac53$.", working: "t=\\tfrac13,s=\\tfrac53", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check third: $1-\\frac13=\\frac23$; $3+2(\\frac53)=3+\\frac{10}{3}=\\frac{19}{3}$ — NOT equal. Recheck equations: $z$: $1-t=3+2s$? $L_1$ z: $1+(-1)t=1-t$; $L_2$ z: $3+2s$. With $t=\\frac13,s=\\frac53$: LHS $\\frac23$, RHS $\\frac{19}{3}$. Inconsistent — lines do NOT intersect.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclusion: the lines are skew (directions $(2,1,-1)$, $(1,-1,2)$ not parallel).", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Since lines are skew there is no intersection — award for correct attempt: state 'no intersection point'.", working: "\\text{none}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Closest points could be found via skew-line formula.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State no intersection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\mathbf{b}_1\\cdot\\mathbf{b}_2=2(1)+1(-1)+(-1)(2)=2-1-2=-1$.", working: "\\cdot=-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$|\\mathbf{b}_1|=\\sqrt6$, $|\\mathbf{b}_2|=\\sqrt6$; $\\cos\\theta=\\frac{1}{6}$, $\\theta=80.4^\\circ$.", working: "80.4^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State acute angle $80.4^\\circ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lines are skew — do not intersect (b) no intersection point (c) $80.4^\\circ$",
            commonErrors: ["Assuming intersection without checking all three components."],
            examinerNote: "The lines are skew; candidates who claim intersection without checking all three components lose marks.",
          },
        },
      ],
    },
  ],
};
