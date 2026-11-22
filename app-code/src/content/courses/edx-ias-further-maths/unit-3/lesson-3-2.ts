import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edxifm-u3-lesson-3-2",
  code: "3-2",
  title: "3D Vectors and Complex Loci",
  goal: "I CAN use scalar and vector products in 3D, find equations of lines and planes, and solve complex loci problems on Argand diagrams.",
  standards: ["WFM03 FP3", "Vectors and loci"],
  vocabulary: [
    { term: "Scalar triple product", definition: "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ = signed volume; zero iff coplanar." },
    { term: "Vector product", definition: "$\\mathbf{a}\\times\\mathbf{b}$ is perpendicular to both vectors with magnitude = parallelogram area." },
    { term: "Locus", definition: "Set of points satisfying a geometric condition, e.g. $|z-a|=r$ (circle) or $\\arg(z-a)=\\theta$ (ray)." },
  ],
  concepts: [
    {
      id: "edxifm-u3-vectors3d",
      title: "Vectors in Three Dimensions",
      skill: "Use vector algebra in 3D including scalar and vector products, equations of lines and planes.",
      lesson: {
        sections: [
          {
            heading: "Vector operations",
            body: "$\\mathbf{a}\\cdot\\mathbf{b}=a_1b_1+a_2b_2+a_3b_3$ (scalar), $\\mathbf{a}\\times\\mathbf{b}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\a_1&a_2&a_3\\\\b_1&b_2&b_3\\end{vmatrix}$ (vector, perpendicular to both). $|\\mathbf{a}\\times\\mathbf{b}|$ = area of parallelogram.",
          },
          {
            heading: "Lines and planes",
            body: "Line through $A$ with direction $\\mathbf{d}$: $\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$ or $\\frac{x-x_1}{d_1}=\\frac{y-y_1}{d_2}=\\frac{z-z_1}{d_3}$. Plane through $A$ with normal $\\mathbf{n}$: $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$, i.e. $n_1x+n_2y+n_3z=d$.",
          },
          {
            heading: "Scalar triple product",
            body: "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ = signed volume of parallelepiped; zero iff vectors are coplanar. Cyclic permutations preserve value; swapping two vectors negates it.",
          },
        ],
        keyFormulas: [
          { name: "Cross product", statement: "$\\mathbf{a}\\times\\mathbf{b}=\\begin{pmatrix}a_2b_3-a_3b_2\\\\a_3b_1-a_1b_3\\\\a_1b_2-a_2b_1\\end{pmatrix}$" },
          { name: "Plane", statement: "$n_1x+n_2y+n_3z=d$" },
          { name: "Triple product", statement: "$\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ = volume" },
        ],
        workedExample: {
          problem: "Find the plane through $(1,0,2)$ with normal $\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$.",
          solution: "$\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$: $2(x-1)-(y-0)+3(z-2)=0$, i.e. $2x-y+3z=8$.",
        },
      },
      questions: [
        {
          id: "edxifm-v3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The vector product $\\mathbf{i}\\times\\mathbf{j}$ equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\mathbf{k}$" },
              { id: "b", text: "$\\mathbf{i}$" },
              { id: "c", text: "$\\mathbf{0}$" },
              { id: "d", text: "$\\mathbf{k}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Cross product", statement: "$\\mathbf{i}\\times\\mathbf{j}=\\mathbf{k}$ (cyclic)." }],
            steps: [{ reasoning: "Standard result.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\mathbf{k}$",
          },
        },
        {
          id: "edxifm-v3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $\\mathbf{a}\\times\\mathbf{b}$ for $\\mathbf{a}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cross product", statement: "Component formula." }],
            steps: [
              { reasoning: "$\\mathbf{a}\\times\\mathbf{b}=\\begin{pmatrix}0\\cdot1-2\\cdot1\\\\2\\cdot0-1\\cdot1\\\\1\\cdot1-0\\cdot0\\end{pmatrix}=\\begin{pmatrix}-2\\\\-1\\\\1\\end{pmatrix}$.", working: "(-2,-1,1)", marks: 1, markCode: "M" },
              { reasoning: "State vector.", marks: 1, markCode: "M" },
              { reasoning: "Verify perpendicular to both (dot products zero).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}-2\\\\-1\\\\1\\end{pmatrix}$",
            commonErrors: ["Component order/sign errors."],
          },
        },
        {
          id: "edxifm-v3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the plane through $(1,2,3)$, $(2,0,1)$ and $(0,1,0)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plane through 3 points", statement: "Normal = cross product of two edge vectors." }],
            steps: [
              { reasoning: "$\\vec{AB}=\\begin{pmatrix}1\\\\-2\\\\-2\\end{pmatrix}$, $\\vec{AC}=\\begin{pmatrix}-1\\\\-1\\\\-3\\end{pmatrix}$.", working: "edges", marks: 1, markCode: "M" },
              { reasoning: "$\\mathbf{n}=\\vec{AB}\\times\\vec{AC}=\\begin{pmatrix}(-2)(-3)-(-2)(-1)\\\\(-2)(-1)-1(-3)\\\\1(-1)-(-2)(-1)\\end{pmatrix}=\\begin{pmatrix}4\\\\5\\\\-3\\end{pmatrix}$.", working: "n=(4,5,-3)", marks: 1, markCode: "M" },
              { reasoning: "Plane: $4(x-1)+5(y-2)-3(z-3)=0$, i.e. $4x+5y-3z=-5$? Compute: $4x+5y-3z=4+10-9=5$.", working: "4x+5y-3z=5", marks: 1, markCode: "M" },
              { reasoning: "State $4x+5y-3z=5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4x+5y-3z=5$",
            commonErrors: ["Cross product sign errors."],
          },
        },
        {
          id: "edxifm-v3-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For $\\mathbf{a}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$, $\\mathbf{b}=\\begin{pmatrix}0\\\\1\\\\-1\\end{pmatrix}$, $\\mathbf{c}=\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}$:",
          parts: [
            { label: "a", prompt: "Find $\\mathbf{b}\\times\\mathbf{c}$.", marks: 3 },
            { label: "b", prompt: "Evaluate the scalar triple product $\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$.", marks: 3 },
            { label: "c", prompt: "State what this value represents geometrically.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cross product", statement: "Component formula." },
              { kind: "property", name: "Triple product", statement: "Signed volume of parallelepiped." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathbf{b}\\times\\mathbf{c}=\\begin{pmatrix}1\\cdot0-(-1)\\cdot1\\\\(-1)\\cdot2-0\\cdot0\\\\0\\cdot1-1\\cdot2\\end{pmatrix}=\\begin{pmatrix}1\\\\-2\\\\-2\\end{pmatrix}$.", working: "(1,-2,-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State vector.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify perpendicular to $\\mathbf{b}$ and $\\mathbf{c}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\mathbf{a}\\cdot\\begin{pmatrix}1\\\\-2\\\\-2\\end{pmatrix}=1-4-6=-9$.", working: "-9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State value $-9$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Negative sign indicates orientation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Absolute value $9$ = volume of parallelepiped formed by the three vectors.", working: "volume 9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Nonzero means vectors are not coplanar.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sign indicates handedness of the triple.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix}1\\\\-2\\\\-2\\end{pmatrix}$ (b) $-9$ (c) volume $9$, non-coplanar",
            commonErrors: ["Cross product component errors."],
          },
        },
      ],
    },
    {
      id: "edxifm-u3-complex-loci",
      title: "Complex Loci and Argand Diagrams",
      skill: "Represent complex loci on Argand diagrams and solve problems involving modulus and argument conditions.",
      lesson: {
        sections: [
          {
            heading: "Modulus loci",
            body: "$|z-a|=r$ is a circle centre $a$ radius $r$. $|z-a|=|z-b|$ is the perpendicular bisector of segment $AB$. $|z-a|+|z-b|=k$ is an ellipse with foci $a,b$.",
          },
          {
            heading: "Argument loci",
            body: "$\\arg(z-a)=\\theta$ is a half-line/ray from $a$ at angle $\\theta$. $\\arg\\frac{z-a}{z-b}=\\alpha$ relates to angle subtended; conditions like $\\arg z=\\frac{\\pi}{4}$ give lines through origin.",
          },
          {
            heading: "Combined loci",
            body: "Problems often ask for points satisfying two conditions simultaneously — sketch both loci and find intersections geometrically or algebraically.",
          },
        ],
        keyFormulas: [
          { name: "Circle", statement: "$|z-a|=r$" },
          { name: "Perpendicular bisector", statement: "$|z-a|=|z-b|$" },
          { name: "Ray", statement: "$\\arg(z-a)=\\theta$" },
        ],
        workedExample: {
          problem: "Describe the locus $|z-1|=|z+1|$.",
          solution: "Perpendicular bisector of $1$ and $-1$ on real axis — the imaginary axis ($x=0$).",
        },
      },
      questions: [
        {
          id: "edxifm-loc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The locus $|z-2i|=3$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circle centre $2i$ radius $3$" },
              { id: "b", text: "Line $x=2$" },
              { id: "c", text: "Ray from $2i$" },
              { id: "d", text: "Circle centre $0$ radius $3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Modulus locus", statement: "$|z-a|=r$ is a circle." }],
            steps: [{ reasoning: "Centre $2i$, radius $3$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** circle centre $2i$ radius $3$",
          },
        },
        {
          id: "edxifm-loc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the locus $|z-1|=|z-i|$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Bisector", statement: "$|z-a|=|z-b|$ is perpendicular bisector of $AB$." }],
            steps: [
              { reasoning: "Points equidistant from $1$ and $i$.", working: "equidistant", marks: 1, markCode: "M" },
              { reasoning: "Perpendicular bisector of segment from $(1,0)$ to $(0,1)$: line $y=x$? Midpoint $(\\frac12,\\frac12)$, segment slope $-1$, bisector slope $1$ through midpoint: $y=x$.", working: "y=x", marks: 1, markCode: "M" },
              { reasoning: "State $y=x$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Line $y=x$",
            commonErrors: ["Wrong midpoint or slope."],
          },
        },
        {
          id: "edxifm-loc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the point(s) satisfying $|z|=2$ and $\\arg z=\\frac{\\pi}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection", statement: "Circle meets ray." }],
            steps: [
              { reasoning: "$|z|=2$ circle radius $2$; $\\arg z=\\frac{\\pi}{3}$ ray at $60°$.", working: "conditions", marks: 1, markCode: "M" },
              { reasoning: "Point: $z=2\\text{cis}\\frac{\\pi}{3}=2(\\cos60°+i\\sin60°)=1+i\\sqrt3$.", working: "1+i√3", marks: 1, markCode: "M" },
              { reasoning: "Check $|z|=\\sqrt{1+3}=2$ ✓, $\\arg=\\frac{\\pi}{3}$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "State $z=1+i\\sqrt3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z=1+i\\sqrt3$",
            commonErrors: ["Wrong angle conversion."],
          },
        },
        {
          id: "edxifm-loc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The locus $L_1$ is $|z-1|=1$ and $L_2$ is $|z-i|=1$.",
          parts: [
            { label: "a", prompt: "Describe each locus.", marks: 3 },
            { label: "b", prompt: "Find the points of intersection of $L_1$ and $L_2$.", marks: 4 },
            { label: "c", prompt: "Find the area of the overlap region.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Circle intersection", statement: "Solve simultaneous modulus equations." }],
            steps: [
              { part: "a", reasoning: "$L_1$: circle centre $(1,0)$ radius $1$; $L_2$: circle centre $(0,1)$ radius $1$.", working: "centres", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both loci.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Both pass through origin.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Let $z=x+iy$: $(x-1)^2+y^2=1$ and $x^2+(y-1)^2=1$.", working: "eqns", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand: $x^2-2x+1+y^2=1\\Rightarrow x^2+y^2=2x$; similarly $x^2+y^2=2y$. So $2x=2y\\Rightarrow x=y$.", working: "x=y", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute: $2x^2=2x\\Rightarrow x=0$ or $x=1$; points $(0,0)$ and $(1,1)$.", working: "(0,0),(1,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State intersections.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Overlap = lens of two unit circles distance $\\sqrt2$ apart: area $=2\\cos^{-1}(\\frac{\\sqrt2}{2})-\\frac{\\sqrt2}{2}\\sqrt{4-2}=2\\cdot\\frac{\\pi}{4}-\\frac{\\sqrt2}{2}\\cdot\\sqrt2=\\frac{\\pi}{2}-1$.", working: "pi/2-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State area $\\frac{\\pi}{2}-1\\approx0.571$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) circles (b) $0$ and $1+i$ (c) $\\frac{\\pi}{2}-1$",
            commonErrors: ["Algebra slips expanding modulus."],
          },
        },
      ],
    },

  ],
};
