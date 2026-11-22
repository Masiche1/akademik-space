import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cialfm-u6-lesson-6-2",
  code: "6-2",
  title: "Lines and planes in 3D",
  goal: "I CAN find equations of lines and planes in 3D.",
  standards: ["9231 P1: vectors — lines and planes"],
  vocabulary: [
    { term: "Vector equation of line", definition: "$\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}$ where $\\mathbf{a}$ is a point and $\\mathbf{b}$ direction." },
    { term: "Cartesian equation", definition: "Line given as $\\frac{x-x_0}{l}=\\frac{y-y_0}{m}=\\frac{z-z_0}{n}$." },
    { term: "Plane equation", definition: "$\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$ or $ax+by+cz=d$." },
    { term: "Normal vector", definition: "Vector perpendicular to a plane." },
    { term: "Skew lines", definition: "Lines that don't intersect and aren't parallel." },
  ],
  concepts: [
    {
      id: "cialfm-u6-s2-lines",
      title: "Equations of lines",
      skill: "Write and interpret line equations in 3D.",
      lesson: {
        sections: [
          {
            heading: "Vector form",
            body: "$\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}$. Point $\\mathbf{a}$, direction $\\mathbf{b}$. Different values of $t$ give points on the line.",
          },
          {
            heading: "Cartesian form",
            body: "$\\frac{x-x_0}{l} = \\frac{y-y_0}{m} = \\frac{z-z_0}{n}$ where $\\mathbf{b}=\\begin{pmatrix}l\\\\m\\\\n\\end{pmatrix}$.",
          },
        ],
        keyFormulas: [
          { name: "Line", statement: "$\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}$" },
        ],
        workedExample: {
          problem: "Write vector equation of line through $(1,0,2)$ direction $\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$.",
          solution: "$\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} + t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-s2-li-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$, $\\mathbf{b}$ represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Point on line" },
            { id: "b", text: "Direction vector" },
            { id: "c", text: "Normal vector" },
            { id: "d", text: "Position vector of origin" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Line equation", statement: "$\\mathbf{b}$ = direction." }],
            steps: [{ reasoning: "Direction vector.", marks: 1, markCode: "A" }],
            finalAnswer: "Direction vector",
          },
        },
        {
          id: "cialfm-u6-s2-li-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the vector equation of the line through $(0,1,0)$ parallel to $\\mathbf{i}+\\mathbf{j}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line equation", statement: "Point + t×direction." }],
            steps: [
              { reasoning: "$\\mathbf{r} = \\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix} + t\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{r}=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s2-li-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the Cartesian equation of the line $\\mathbf{r}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\4\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian form", statement: "Equate components." }],
            steps: [
              { reasoning: "$x=1+2t$, $y=2-t$, $z=3+4t$ → $t=\\frac{x-1}{2}=2-y=\\frac{z-3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{x-1}{2} = 2-y = \\frac{z-3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Check signs: $y-2=-t$ → $\\frac{y-2}{-1}=t$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x-1}{2}=\\frac{y-2}{-1}=\\frac{z-3}{4}$",
          },
        },
        {
          id: "cialfm-u6-s2-li-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Does the point $(3,1,7)$ lie on the line $\\mathbf{r}=\\begin{pmatrix}1\\\\0\\\\3\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on line", statement: "Solve for consistent $t$." }],
            steps: [
              { reasoning: "$1+t=3$ → $t=2$; $0+t=1$ → $t=1$; inconsistent.", marks: 1, markCode: "M" },
              { reasoning: "Different $t$ values → point not on line.", marks: 1, markCode: "M" },
              { reasoning: "Answer: No.", marks: 1, markCode: "M" },
              { reasoning: "Check all three components.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No",
          },
        },
        {
          id: "cialfm-u6-s2-li-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the Cartesian equation $\\frac{x-x_0}{l}=\\frac{y-y_0}{m}=\\frac{z-z_0}{n}$, the values $l, m, n$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Normal vector components" },
            { id: "b", text: "Point coordinates" },
            { id: "c", text: "Parameter values" },
            { id: "d", text: "Direction vector components" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Cartesian line", statement: "Denominators = direction." }],
            steps: [{ reasoning: "Denominators give the direction vector $(l,m,n)$.", marks: 1, markCode: "A" }],
            finalAnswer: "Direction vector components",
          },
        },
        {
          id: "cialfm-u6-s2-li-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For the line $\\mathbf{r}=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}$, find the $y$-coordinate when $x=3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on line", statement: "Solve for $t$ then substitute." }],
            steps: [
              { reasoning: "$x = t = 3$; $y = 1 + 2(3) = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cialfm-u6-s2-li-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the Cartesian equation of $\\mathbf{r}=\\begin{pmatrix}0\\\\1\\\\-1\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian form", statement: "Equate components and eliminate $t$." }],
            steps: [
              { reasoning: "$x = 2t$, $y = 1-t$, $z = -1+3t$ → $t = \\frac{x}{2} = 1-y = \\frac{z+1}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{x}{2} = \\frac{y-1}{-1} = \\frac{z+1}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $y-1 = -t$ gives denominator $-1$. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x}{2}=\\frac{y-1}{-1}=\\frac{z+1}{3}$",
          },
        },
        {
          id: "cialfm-u6-s2-li-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two lines in 3D are parallel when their direction vectors are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always equal" },
            { id: "b", text: "Zero vectors" },
            { id: "c", text: "Perpendicular" },
            { id: "d", text: "Scalar multiples of each other" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel lines", statement: "Directions are scalar multiples." }],
            steps: [{ reasoning: "Parallel ⇔ direction vectors are scalar multiples.", marks: 1, markCode: "A" }],
            finalAnswer: "Scalar multiples",
          },
        },
        {
          id: "cialfm-u6-s2-li-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $t$ for which the point $(3,4,4)$ lies on $\\mathbf{r}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Parameter value", statement: "Equate a component and verify others." }],
            steps: [
              { reasoning: "$1+t=3$ → $t=2$; check: $y = 0+4=4$, $z = 2+2=4$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: $t=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u6-s2-li-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the vector equation of the line through $(2,-1,3)$ parallel to $\\begin{pmatrix}1\\\\0\\\\-2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line equation", statement: "Point + $t$ × direction." }],
            steps: [
              { reasoning: "$\\mathbf{r} = \\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix} + t\\begin{pmatrix}1\\\\0\\\\-2\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Direction copied exactly (parallel).", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{r}=\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}+t\\begin{pmatrix}1\\\\0\\\\-2\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s2-li-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The line $\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$ always passes through the point…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The origin" },
            { id: "b", text: "$\\mathbf{b}$" },
            { id: "c", text: "$(1,1,1)$" },
            { id: "d", text: "$\\mathbf{a}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Line equation", statement: "$t=0$ gives point $\\mathbf{a}$." }],
            steps: [{ reasoning: "At $t=0$, $\\mathbf{r}=\\mathbf{a}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\mathbf{a}$",
          },
        },
        {
          id: "cialfm-u6-s2-li-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the line $\\frac{x-1}{2}=\\frac{y+1}{1}=\\frac{z-2}{3}$, find the $z$-coordinate when $x=5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian line", statement: "Common value gives $t$." }],
            steps: [
              { reasoning: "$\\frac{5-1}{2} = 2$, so common value $= 2$; $z = 2 + 3(2) = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cialfm-u6-s2-li-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Determine whether the point $(3,2,5)$ lies on the line $\\mathbf{r}=\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on line", statement: "Consistent $t$ across all components." }],
            steps: [
              { reasoning: "$1+t=3$ → $t=2$; $0+t=2$ → $t=2$; $1+2t=5$ → $t=2$.", marks: 1, markCode: "M" },
              { reasoning: "All three give $t=2$ — consistent.", marks: 1, markCode: "M" },
              { reasoning: "Answer: Yes, the point lies on the line.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cialfm-u6-s2-li-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The direction vector of $\\frac{x-2}{3}=\\frac{y}{-1}=\\frac{z+1}{2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\-1\\\\2\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}-3\\\\1\\\\-2\\end{pmatrix}$ only" },
            { id: "c", text: "$\\begin{pmatrix}3\\\\1\\\\2\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}2\\\\0\\\\-1\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Cartesian line", statement: "Denominators = direction." }],
            steps: [{ reasoning: "Direction $= (3,-1,2)$; sign-flipped vectors are also valid but (a) is listed.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}3\\\\-1\\\\2\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s2-li-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $\\mathbf{r}=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}$, find the $y$-coordinate when $z=-3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on line", statement: "Solve for $t$ then substitute." }],
            steps: [
              { reasoning: "$z = -t = -3$ → $t=3$; $y = 1+2(3) = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cialfm-u6-s2-li-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert $\\frac{x-1}{2}=\\frac{y-2}{1}=\\frac{z+3}{-1}$ into vector form $\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian to vector", statement: "Point $(x_0,y_0,z_0)$ and direction $(l,m,n)$." }],
            steps: [
              { reasoning: "Point: $(1,2,-3)$; direction: $\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathbf{r} = \\begin{pmatrix}1\\\\2\\\\-3\\end{pmatrix} + t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Verify one component: $x = 1+2t$ matches $\\frac{x-1}{2}=t$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathbf{r}=\\begin{pmatrix}1\\\\2\\\\-3\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u6-s2-planes",
      title: "Equations of planes",
      skill: "Find and use plane equations in 3D.",
      lesson: {
        sections: [
          {
            heading: "Plane equation",
            body: "If $\\mathbf{n}$ is normal to plane through point $\\mathbf{a}$: $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$, i.e. $n_1x+n_2y+n_3z=d$.",
          },
          {
            heading: "Finding normal",
            body: "Normal = cross product of two direction vectors in the plane. For $ax+by+cz=d$, normal is $\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$.",
          },
        ],
        keyFormulas: [
          { name: "Plane", statement: "$\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$" },
        ],
        workedExample: {
          problem: "Find plane through $(1,0,0)$ with normal $\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}$.",
          solution: "$2(x-1)+y+3z=0$ → $2x+y+3z=2$.",
        },
      },
      questions: [
        {
          id: "cialfm-u6-s2-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The normal vector of plane $2x+3y-z=5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}5\\\\0\\\\0\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}2\\\\3\\\\1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}2\\\\3\\\\-1\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Normal", statement: "Coefficients = normal." }],
            steps: [{ reasoning: "Normal = coefficients $(2,3,-1)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}2\\\\3\\\\-1\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the plane $x+y+z=3$ at point…",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on plane", statement: "Substitute to verify." }],
            steps: [
              { reasoning: "Any point satisfying $x+y+z=3$, e.g. $(1,1,1)$, $(3,0,0)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: e.g. $(1,1,1)$ lies on plane.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,1,1)$ on plane",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the plane through $(1,2,3)$ parallel to $x=0$ plane (i.e. $yz$-plane).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Parallel plane", statement: "Same normal, different constant." }],
            steps: [
              { reasoning: "$yz$-plane has normal $\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$; parallel plane: $x=d$.", marks: 1, markCode: "M" },
              { reasoning: "Through $(1,2,3)$: $x=1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the plane through $(0,0,0)$ containing directions $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plane from directions", statement: "Normal = cross product." }],
            steps: [
              { reasoning: "$\\mathbf{n} = \\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\times\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix} = \\begin{pmatrix}1\\\\-1\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Plane: $x - y + z = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Check both direction vectors are perpendicular to normal. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x - y + z = 0$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The plane $3x-2y+5z=7$ has normal vector…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}3\\\\-2\\\\5\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}7\\\\0\\\\0\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Normal", statement: "Coefficients of $x,y,z$ form the normal." }],
            steps: [{ reasoning: "Normal $= (3,-2,5)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\begin{pmatrix}3\\\\-2\\\\5\\end{pmatrix}$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the value of $d$ for the plane $x+y+z=d$ that passes through $(2,1,0)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on plane", statement: "Substitute point into equation." }],
            steps: [
              { reasoning: "$2+1+0 = d$ → $d = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $d=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the plane through $(1,0,0)$ with normal vector $\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plane equation", statement: "$\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$." }],
            steps: [
              { reasoning: "$0(x-1)+1(y-0)+1(z-0)=0$.", marks: 1, markCode: "M" },
              { reasoning: "Simplifies to $y+z=0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y+z=0$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A plane parallel to the $yz$-plane has equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = k$" },
            { id: "b", text: "$x+y+z = k$" },
            { id: "c", text: "$z = k$" },
            { id: "d", text: "$y = k$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel planes", statement: "Same normal $(1,0,0)$." }],
            steps: [{ reasoning: "$yz$-plane normal is $(1,0,0)$, so parallel planes are $x=k$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=k$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $d$ so that the plane $2x+y-z=d$ passes through $(1,1,1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on plane", statement: "Substitute point." }],
            steps: [
              { reasoning: "$2(1)+1-1 = d$ → $d = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $d=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the plane through $(0,0,0)$, $(1,0,0)$ and $(0,1,0)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plane through points", statement: "Normal = cross product of direction vectors." }],
            steps: [
              { reasoning: "Directions: $\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\mathbf{n} = \\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}$; plane $z=0$.", marks: 1, markCode: "M" },
              { reasoning: "Check all three points satisfy $z=0$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: $z=0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z=0$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$, the vector $\\mathbf{n}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Normal to the plane" },
            { id: "b", text: "Direction of a line in the plane" },
            { id: "c", text: "The position vector of the origin" },
            { id: "d", text: "A point on the plane" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Plane equation", statement: "$\\mathbf{n}$ perpendicular to plane." }],
            steps: [{ reasoning: "$\\mathbf{n}$ is the normal vector.", marks: 1, markCode: "A" }],
            finalAnswer: "Normal to the plane",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the plane $3x-2y+z=5$, find $z$ when $x=1$ and $y=2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on plane", statement: "Substitute and solve." }],
            steps: [
              { reasoning: "$3(1)-2(2)+z=5$ → $3-4+z=5$ → $z=6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $z=6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the equation of the plane through $(1,0,0)$ containing the directions $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ and $\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plane from directions", statement: "Normal = cross product." }],
            steps: [
              { reasoning: "$\\mathbf{n} = \\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\times\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix} = \\begin{pmatrix}1\\\\-1\\\\1\\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "$1(x-1)-1(y-0)+1(z-0)=0$ → $x-y+z=1$.", marks: 1, markCode: "M" },
              { reasoning: "Check both direction vectors perpendicular to $\\mathbf{n}$. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x-y+z=1$",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two planes are parallel when their normal vectors are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always equal" },
            { id: "b", text: "Perpendicular" },
            { id: "c", text: "Zero" },
            { id: "d", text: "Scalar multiples of each other" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel planes", statement: "Normals are scalar multiples." }],
            steps: [{ reasoning: "Parallel planes share the same normal direction.", marks: 1, markCode: "A" }],
            finalAnswer: "Scalar multiples",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the $x$-intercept of the plane $x-y+z=2$ (set $y=z=0$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Intercept", statement: "Set other variables to zero." }],
            steps: [
              { reasoning: "$x-0+0=2$ → $x=2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x=2$ (point $(2,0,0)$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u6-s2-pl-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Verify that the point $(1,2,3)$ lies on the plane $2x-y+z=3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Point on plane", statement: "Substitute coordinates." }],
            steps: [
              { reasoning: "$2(1)-2+3 = 2-2+3 = 3$. ✓", marks: 1, markCode: "M" },
              { reasoning: "LHS equals RHS, so the point satisfies the equation.", marks: 1, markCode: "M" },
              { reasoning: "Answer: Yes, $(1,2,3)$ lies on the plane.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u6-s2-lines-planes-notes",
      title: "Lines and planes — revision notes",
      summary: "Vector/Cartesian line forms, plane equations.",
      sections: [
        { heading: "Lines", body: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{b}$ or Cartesian symmetric form. Point on line: consistent $t$." },
        { heading: "Planes", body: "$\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{a})=0$. Normal from cross product of directions." },
      ],
    },
  ],
};
