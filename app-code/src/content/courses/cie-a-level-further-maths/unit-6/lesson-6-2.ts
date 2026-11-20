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
            { id: "a", text: "Direction vector" }, { id: "b", text: "Point on line" }, { id: "c", text: "Normal vector" }, { id: "d", text: "Position vector of origin" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "$\\begin{pmatrix}2\\\\3\\\\-1\\end{pmatrix}$" }, { id: "b", text: "$\\begin{pmatrix}2\\\\3\\\\1\\end{pmatrix}$" }, { id: "c", text: "$\\begin{pmatrix}5\\\\0\\\\0\\end{pmatrix}$" }, { id: "d", text: "$\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}$" },
          ], correctChoiceId: "a" },
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
