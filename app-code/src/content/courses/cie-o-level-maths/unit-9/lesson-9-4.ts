import type { Lesson } from "../../../types.ts";

export const lesson94: Lesson = {
  id: "olm-u9-lesson-9-4",
  code: "9-4",
  title: "Vectors and Transformations",
  goal: "I CAN combine vector methods with geometric proofs and transformation problems.",
  standards: ["4024: vectors"],
  vocabulary: [
    { term: "Geometric proof", definition: "Using vectors to prove shape properties." },
    { term: "Vector equation of line", definition: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$." },
    { term: "Parallel lines", definition: "Lines with proportional direction vectors." },
    { term: "Intersection", definition: "Point where two lines/paths meet." },
  ],
  concepts: [
    {
      id: "olm-u9-s4-proofs",
      title: "Vector proofs",
      skill: "Use vectors for geometric proofs at O Level.",
      lesson: {
        sections: [
          { heading: "Proof strategy", body: "To prove two lines parallel: show their direction vectors are scalar multiples. To prove a point bisects a segment: show position vectors satisfy midpoint formula. To prove a quadrilateral is a parallelogram: show opposite sides have equal vectors ($\\vec{AB}=\\vec{DC}$). Vectors turn geometric statements into algebra — prove by manipulating components." },
          { heading: "Common proofs", body: "Midpoint of hypotenuse = circumcentre: show distance from midpoint to all three vertices equal. Diagonals of parallelogram bisect: position vectors of intersection equal for both diagonals. Vector proofs require expressing all points relative to one origin — usually a convenient vertex — then comparing." },
        ],
        keyFormulas: [
          { name: "Parallel", statement: "$\\mathbf{d}_1=k\\mathbf{d}_2$" },
          { name: "Parallelogram", statement: "$\\vec{AB}=\\vec{DC}$" },
        ],
        workedExample: { problem: "Prove diagonals of parallelogram ABCD bisect each other using vectors.", solution: "Let A be origin. $\\vec{AB}=\\mathbf{b}$, $\\vec{AD}=\\mathbf{d}$, C=$\\mathbf{b+d}$. Midpoint of AC: $\\frac{\\mathbf{b+d}}{2}$. Midpoint of BD: $\\frac{\\mathbf{d}+\\mathbf{b}}{2}$ — equal → bisect." },
      },
      questions: [
        {
          id: "olm-u9-s4-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Two lines are parallel if their direction vectors are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Scalar multiples" }, { id: "b", text: "Equal" }, { id: "c", text: "Perpendicular" }, { id: "d", text: "Unit vectors" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Parallel", statement: "Proportional directions." }], steps: [{ reasoning: "$\\mathbf{d}_1=k\\mathbf{d}_2$.", marks: 1, markCode: "A" }], finalAnswer: "Scalar multiples" },
        },
        {
          id: "olm-u9-s4-pr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "In parallelogram ABCD, $\\vec{AB}=\\begin{pmatrix}3\\\\2\\end{pmatrix}$. What is $\\vec{DC}$?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Parallelogram", statement: "$\\vec{AB}=\\vec{DC}$." }], steps: [
            { reasoning: "$\\vec{DC}=\\begin{pmatrix}3\\\\2\\end{pmatrix}$ — same direction and magnitude.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}3\\\\2\\end{pmatrix}$" },
        },
        {
          id: "olm-u9-s4-pr-q3", difficulty: "core", totalMarks: 3,
          stem: "Prove that the line through A(1,2) with direction $\\begin{pmatrix}2\\\\1\\end{pmatrix}$ is parallel to the line through B(4,5) with direction $\\begin{pmatrix}4\\\\2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel proof", statement: "Scalar multiple." }], steps: [
            { reasoning: "$\\begin{pmatrix}4\\\\2\\end{pmatrix}=2\\begin{pmatrix}2\\\\1\\end{pmatrix}$ — scalar multiple.", marks: 1, markCode: "M" },
            { reasoning: "Direction vectors parallel → lines parallel.", marks: 1, markCode: "M" },
            { reasoning: "Proof complete.", marks: 1, markCode: "A" },
          ], finalAnswer: "Parallel" },
        },
        {
          id: "olm-u9-s4-pr-q4", difficulty: "core", totalMarks: 4,
          stem: "Triangle ABC has A(0,0), B(4,0), C(2,3). Find the position vector of the centroid (intersection of medians).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Centroid", statement: "Average of vertices." }], steps: [
            { reasoning: "Centroid $=\\frac{\\vec{OA}+\\vec{OB}+\\vec{OC}}{3}=\\frac13\\left(\\begin{pmatrix}0\\\\0\\end{pmatrix}+\\begin{pmatrix}4\\\\0\\end{pmatrix}+\\begin{pmatrix}2\\\\3\\end{pmatrix}\\right)=\\frac13\\begin{pmatrix}6\\\\3\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\left(\\frac{0+4+2}{3},\\frac{0+0+3}{3}\\right)=(2,1)$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\begin{pmatrix}2\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\begin{pmatrix}2\\\\1\\end{pmatrix}$" },
        },
      ],
    },
    {
      id: "olm-u9-s4-lines",
      title: "Vector equations of lines",
      skill: "Use vector equations of lines at O Level.",
      lesson: {
        sections: [
          { heading: "Line equation", body: "A line through point A with direction vector $\\mathbf{d}$ has equation $\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$ where $\\mathbf{r}$ is any point on the line and $t$ is a parameter. Different $t$ values give different points; $t=0$ gives A itself. The direction vector can be any scalar multiple — $\\begin{pmatrix}2\\\\1\\end{pmatrix}$ and $\\begin{pmatrix}4\\\\2\\end{pmatrix}$ describe the same direction." },
          { heading: "Intersection of lines", body: "To find where two lines meet: write both equations, equate components, solve the simultaneous equations for $t$ and $s$. If the equations are inconsistent (no solution), the lines are parallel or skew; if consistent, substitute back to find the intersection point. This is a powerful alternative to coordinate geometry for line problems." },
        ],
        keyFormulas: [
          { name: "Line", statement: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$" },
          { name: "Intersection", statement: "Equate $\\mathbf{a}_1+t\\mathbf{d}_1=\\mathbf{a}_2+s\\mathbf{d}_2$" },
        ],
        workedExample: { problem: "Line 1: $\\mathbf{r}=\\begin{pmatrix}1\\\\0\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\end{pmatrix}$; Line 2: $\\mathbf{r}=\\begin{pmatrix}0\\\\3\\end{pmatrix}+s\\begin{pmatrix}1\\\\-1\\end{pmatrix}$. Find intersection.", solution: "$1+2t=s$ and $t=3-s$ → $t=3-(1+2t)=2-2t$ → $3t=2$ → $t=\\frac23$, $s=\\frac73$. Point: $\\begin{pmatrix}1+\\frac43\\\\\\frac23\\end{pmatrix}=\\begin{pmatrix}\\frac73\\\\\\frac23\\end{pmatrix}$." },
      },
      questions: [
        {
          id: "olm-u9-s4-li-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The vector equation $\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$ describes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A line through A in direction d" }, { id: "b", text: "A circle" }, { id: "c", text: "A plane" }, { id: "d", text: "A point" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Line equation", statement: "Point + direction." }], steps: [{ reasoning: "Standard form.", marks: 1, markCode: "A" }], finalAnswer: "A line through A in direction d" },
        },
        {
          id: "olm-u9-s4-li-q2", difficulty: "foundation", totalMarks: 2,
          stem: "For $\\mathbf{r}=\\begin{pmatrix}2\\\\1\\end{pmatrix}+t\\begin{pmatrix}3\\\\-2\\end{pmatrix}$, find the point when $t=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Point on line", statement: "Substitute t." }], steps: [
            { reasoning: "$\\begin{pmatrix}2\\\\1\\end{pmatrix}+2\\begin{pmatrix}3\\\\-2\\end{pmatrix}=\\begin{pmatrix}8\\\\-3\\end{pmatrix}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(8,-3)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(8,-3)$" },
        },
        {
          id: "olm-u9-s4-li-q3", difficulty: "core", totalMarks: 3,
          stem: "Do the lines $\\mathbf{r}=\\begin{pmatrix}0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\mathbf{r}=\\begin{pmatrix}3\\\\1\\end{pmatrix}+s\\begin{pmatrix}2\\\\4\\end{pmatrix}$ intersect?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel check", statement: "Direction vectors." }], steps: [
            { reasoning: "$\\begin{pmatrix}2\\\\4\\end{pmatrix}=2\\begin{pmatrix}1\\\\2\\end{pmatrix}$ — parallel directions.", marks: 1, markCode: "M" },
            { reasoning: "Check if same line: does $(3,1)$ lie on first? $t=3$ gives $(3,6)\\neq(3,1)$ → distinct parallel lines, no intersection.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no intersection (parallel).", marks: 1, markCode: "A" },
          ], finalAnswer: "No — parallel" },
        },
        {
          id: "olm-u9-s4-li-q4", difficulty: "core", totalMarks: 4,
          stem: "Find where $\\mathbf{r}=\\begin{pmatrix}1\\\\2\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\end{pmatrix}$ meets the x-axis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Axis intersection", statement: "Set y=0." }], steps: [
            { reasoning: "y-component: $2+t=0$ → $t=-2$.", marks: 1, markCode: "M" },
            { reasoning: "x-component: $1+(-2)=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Point: $(-1,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(-1,0)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-1,0)$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u9-s4-adv-notes", title: "Advanced vectors — notes", summary: "Proofs and line equations.",
      sections: [
        { heading: "Proofs", body: "Parallel = scalar multiple directions; parallelogram = $\\vec{AB}=\\vec{DC}$; centroid = vertex average." },
        { heading: "Lines", body: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$; intersect by equating components." },
      ] },
  ],
};
