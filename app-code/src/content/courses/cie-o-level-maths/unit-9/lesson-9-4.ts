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
            { id: "a", text: "Perpendicular" },
            { id: "b", text: "Scalar multiples" },
            { id: "c", text: "Equal" },
            { id: "d", text: "Unit vectors" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u9-s4-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "To prove that two points are equidistant from the ends of a segment, a vector proof should show…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The segment has zero length" },
            { id: "b", text: "The vectors are perpendicular" },
            { id: "c", text: "The relevant position vectors have equal magnitude" },
            { id: "d", text: "The points are collinear" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Distance proof", statement: "Equal distance means equal vector magnitude." }], steps: [{ reasoning: "Compare the lengths of the displacement vectors.", marks: 1, markCode: "A" }], finalAnswer: "Equal magnitudes" },
        },
        {
          id: "olm-u9-s4-pr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-coordinate of the centroid of triangle $A(0,0)$, $B(6,0)$ and $C(0,9)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Centroid", statement: "Average the three vertices." }], steps: [
            { reasoning: "$x=\\frac{0+6+0}{3}=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u9-s4-pr-q7", difficulty: "core", totalMarks: 3,
          stem: "Prove that the line through $A(0,0)$ with direction $(2,3)$ is parallel to the line through $B(1,1)$ with direction $(4,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel proof", statement: "Direction vectors must be scalar multiples." }], steps: [
            { reasoning: "First direction vector: $(2,3)$.", marks: 1, markCode: "M" },
            { reasoning: "Second direction vector: $(4,6)=2(2,3)$.", marks: 1, markCode: "M" },
            { reasoning: "The directions are proportional, so the lines are parallel.", marks: 1, markCode: "A" },
          ], finalAnswer: "Parallel" },
        },
        {
          id: "olm-u9-s4-pr-q8", difficulty: "core", totalMarks: 1,
          stem: "In quadrilateral $ABCD$, $\\vec{AB}=(3,1)$ and $\\vec{DC}=(3,1)$. Which property is shown for these opposite sides?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are negative vectors" },
            { id: "b", text: "They are perpendicular" },
            { id: "c", text: "They have different lengths" },
            { id: "d", text: "They are equal and parallel" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Parallelogram", statement: "Equal displacement vectors imply equal parallel sides." }], steps: [{ reasoning: "Identical vectors have the same direction and magnitude.", marks: 1, markCode: "A" }], finalAnswer: "Equal and parallel" },
        },
        {
          id: "olm-u9-s4-pr-q9", difficulty: "challenge", totalMarks: 4,
          stem: "For parallelogram $ABCD$, let $\\vec{OA}=(0,0)$, $\\vec{OB}=(2,1)$ and $\\vec{OD}=(1,3)$. Find $\\vec{OC}$ and prove that the diagonals have the same midpoint.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallelogram vectors", statement: "Use $\\vec{OC}=\\vec{OB}+\\vec{OD}$ and compare diagonal midpoints." }], steps: [
            { reasoning: "$\\vec{OC}=(2,1)+(1,3)=(3,4)$.", marks: 1, markCode: "M" },
            { reasoning: "Midpoint of $AC$: $((0+3)/2,(0+4)/2)=(1.5,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Midpoint of $BD$: $((2+1)/2,(1+3)/2)=(1.5,2)$.", marks: 1, markCode: "M" },
            { reasoning: "The midpoints are equal, so the diagonals bisect each other.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\vec{OC}=(3,4)$; diagonals bisect" },
        },
        {
          id: "olm-u9-s4-pr-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-coordinate of the centroid of triangle $A(1,1)$, $B(4,1)$ and $C(1,7)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "formula", name: "Centroid", statement: "Average the coordinates." }], steps: [
            { reasoning: "$x=(1+4+1)/3=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u9-s4-pr-q11", difficulty: "core", totalMarks: 2,
          stem: "In parallelogram $ABCD$, $A(0,0)$, $B(4,0)$, $C(5,3)$ and $D(1,3)$. Find the y-coordinate of the intersection of the diagonals.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Diagonal midpoint", statement: "Diagonals share the midpoint." }], steps: [
            { reasoning: "Midpoint of $AC$ has $y=(0+3)/2=1.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "1.5" },
        },
        {
          id: "olm-u9-s4-pr-q12", difficulty: "core", totalMarks: 1,
          stem: "In a vector proof involving several points, the clearest first step is usually to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Measure every angle with a protractor" },
            { id: "b", text: "Choose one point as the origin and write all position vectors from it" },
            { id: "c", text: "Assume the result before proving it" },
            { id: "d", text: "Use only scalar quantities" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Proof strategy", statement: "Use a common origin for position vectors." }], steps: [{ reasoning: "A common origin makes vector comparisons algebraic.", marks: 1, markCode: "A" }], finalAnswer: "Choose a common origin" },
        },
        {
          id: "olm-u9-s4-pr-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Find the y-coordinate of the centroid of triangle $A(0,0)$, $B(6,0)$ and $C(0,9)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Centroid", statement: "Average the vertices." }], steps: [
            { reasoning: "$y=(0+0+9)/3=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s4-pr-q14", difficulty: "foundation", totalMarks: 1,
          stem: "In parallelogram $ABCD$, which vector relationship is always true?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\vec{AB}=\\vec{CD}$" },
            { id: "b", text: "$\\vec{AB}=-\\vec{AD}$" },
            { id: "c", text: "$\\vec{AB}=\\vec{DC}$" },
            { id: "d", text: "$\\vec{AC}=\\vec{BD}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Parallelogram", statement: "Opposite sides have equal displacement vectors." }], steps: [{ reasoning: "$\\vec{AB}$ and $\\vec{DC}$ point the same way.", marks: 1, markCode: "A" }], finalAnswer: "$\\vec{AB}=\\vec{DC}$" },
        },
        {
          id: "olm-u9-s4-pr-q15", difficulty: "core", totalMarks: 3,
          stem: "Show that $M(3,4)$ is the midpoint of $A(1,2)$ and $B(5,6)$ using vectors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Midpoint proof", statement: "Show $\\vec{AM}=\\vec{MB}$." }], steps: [
            { reasoning: "$\\vec{AM}=(3-1,4-2)=(2,2)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{MB}=(5-3,6-4)=(2,2)$.", marks: 1, markCode: "M" },
            { reasoning: "$\\vec{AM}=\\vec{MB}$, so $M$ bisects $AB$.", marks: 1, markCode: "A" },
          ], finalAnswer: "M is the midpoint" },
        },
        {
          id: "olm-u9-s4-pr-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which condition proves that the diagonals of parallelogram $ABCD$ bisect each other?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\vec{AB}=\\vec{BC}$" },
            { id: "b", text: "All sides are equal" },
            { id: "c", text: "$AC=BD$ for every parallelogram" },
            { id: "d", text: "Midpoint of $AC$ equals midpoint of $BD$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Diagonal bisection", statement: "Equal midpoints prove bisection." }], steps: [{ reasoning: "The diagonals share the same midpoint.", marks: 1, markCode: "A" }], finalAnswer: "Equal diagonal midpoints" },
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
            { id: "a", text: "A plane" },
            { id: "b", text: "A point" },
            { id: "c", text: "A circle" },
            { id: "d", text: "A line through A in direction d" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u9-s4-li-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which is the vector equation of the line through $(1,2)$ in direction $(3,-1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r=(1,2)t(3,-1)$" },
            { id: "b", text: "$r=(3,-1)+t(1,2)$" },
            { id: "c", text: "$r=(1,2)+t(3,-1)$" },
            { id: "d", text: "$r=(1,2)+(3,-1)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Line equation", statement: "$r=a+td$." }], steps: [{ reasoning: "Use the point as $a$ and the direction as $d$.", marks: 1, markCode: "A" }], finalAnswer: "$r=(1,2)+t(3,-1)$" },
        },
        {
          id: "olm-u9-s4-li-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For $r=(2,1)+t(1,2)$, find the x-coordinate when $t=3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Point on line", statement: "Substitute the parameter value." }], steps: [
            { reasoning: "x-coordinate: $2+3\\times1=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u9-s4-li-q7", difficulty: "core", totalMarks: 3,
          stem: "Find the point on $r=(1,-1)+t(2,3)$ when $t=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Point on line", statement: "Add $t$ times the direction to the point." }], steps: [
            { reasoning: "x-coordinate: $1+2\\times2=5$.", marks: 1, markCode: "M" },
            { reasoning: "y-coordinate: $-1+2\\times3=5$.", marks: 1, markCode: "M" },
            { reasoning: "Point: $(5,5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5,5)$" },
        },
        {
          id: "olm-u9-s4-li-q8", difficulty: "core", totalMarks: 1,
          stem: "Which direction vector is parallel to the line $r=(0,0)+t(2,1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(1,2)$" },
            { id: "b", text: "$(2,-1)$" },
            { id: "c", text: "$(3,1)$" },
            { id: "d", text: "$(4,2)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Parallel directions", statement: "Scalar multiples have the same direction." }], steps: [{ reasoning: "$(4,2)=2(2,1)$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,2)$" },
        },
        {
          id: "olm-u9-s4-li-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Find the intersection of $r=(1,0)+t(1,1)$ and $r=(0,2)+s(1,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Equate components and solve for $t$ and $s$." }], steps: [
            { reasoning: "x-components: $1+t=s$.", marks: 1, markCode: "M" },
            { reasoning: "y-components: $t=2-s$; substitute $s=1+t$ to get $t=1/2$ and $s=3/2$.", marks: 1, markCode: "M" },
            { reasoning: "Point from first line: $(1+1/2,0+1/2)=(3/2,1/2)$.", marks: 1, markCode: "M" },
            { reasoning: "Check second line: $(0+3/2,2-3/2)=(3/2,1/2)$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3/2,1/2)$" },
        },
        {
          id: "olm-u9-s4-li-q10", difficulty: "foundation", totalMarks: 2,
          stem: "The point $(4,5)$ lies on $r=(1,2)+t(1,1)$. Find $t$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Point on line", statement: "Use either component to solve for $t$." }], steps: [
            { reasoning: "x-component: $1+t=4$, so $t=3$; check y: $2+3=5$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u9-s4-li-q11", difficulty: "core", totalMarks: 2,
          stem: "For $r=(2,1)+t(3,-1)$, find the value of $t$ where the line meets the x-axis.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Axis intersection", statement: "Set the y-component to $0$." }], steps: [
            { reasoning: "$1-t=0$, so $t=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u9-s4-li-q12", difficulty: "core", totalMarks: 1,
          stem: "To find where two vector lines intersect, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Equate corresponding components and solve the simultaneous equations" },
            { id: "b", text: "Choose any point on either line" },
            { id: "c", text: "Add the two direction vectors" },
            { id: "d", text: "Set both parameters equal to zero" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection method", statement: "Solve component equations for the parameters." }], steps: [{ reasoning: "Equating components gives two equations in $t$ and $s$.", marks: 1, markCode: "A" }], finalAnswer: "Equate components" },
        },
        {
          id: "olm-u9-s4-li-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the intersection of $r=(0,0)+t(1,1)$ and $r=(4,0)+s(1,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Equate x and y components." }], steps: [
            { reasoning: "x-components: $t=4+s$.", marks: 1, markCode: "M" },
            { reasoning: "y-components: $t=-s$; hence $-s=4+s$ gives $s=-2$ and $t=2$.", marks: 1, markCode: "M" },
            { reasoning: "Point: $(2,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Check second line: $(4-2,0+2)=(2,2)$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,2)$" },
        },
        {
          id: "olm-u9-s4-li-q14", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-component of the direction vector of the line through $(1,2)$ and $(5,8)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Direction vector", statement: "Subtract the points." }], steps: [
            { reasoning: "Direction: $(5-1,8-2)=(4,6)$.", marks: 1, markCode: "M" },
            { reasoning: "x-component: $4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u9-s4-li-q15", difficulty: "core", totalMarks: 1,
          stem: "Which vector equation describes the line through $(2,1)$ parallel to direction $(3,-2)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r=(3,-2)+t(2,1)$" },
            { id: "b", text: "$r=(2,1)+t(3,-2)$" },
            { id: "c", text: "$r=(2,1)+(3,-2)$" },
            { id: "d", text: "$r=(2,1)-t(3,-2)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Line equation", statement: "$r=a+td$." }], steps: [{ reasoning: "The point is $(2,1)$ and direction is $(3,-2)$.", marks: 1, markCode: "A" }], finalAnswer: "$r=(2,1)+t(3,-2)$" },
        },
        {
          id: "olm-u9-s4-li-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Where do $r=(1,1)+t(2,1)$ and $r=(3,2)+s(1,1)$ intersect?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3,2)$" },
            { id: "b", text: "$(4,3)$" },
            { id: "c", text: "$(1,1)$" },
            { id: "d", text: "$(2,1)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Solve the component equations." }], steps: [{ reasoning: "$t=1$, $s=0$ gives $(3,2)$ on both lines.", marks: 1, markCode: "A" }], finalAnswer: "$(3,2)$" },
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
