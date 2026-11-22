import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ciem-u7-lesson-7-1",
  code: "7-1",
  title: "Reflections, Rotations and Translations",
  goal: "I CAN describe and perform reflections, rotations and translations on a coordinate grid, including finding image coordinates.",
  standards: ["0580 7.1", "0580 7.2"],
  vocabulary: [
    { term: "Translation", definition: "A slide; every point moves by the same vector $\\begin{pmatrix}a\\\\b\\end{pmatrix}$." },
    { term: "Reflection", definition: "A flip in a mirror line; corresponding points are equidistant from the line." },
    { term: "Rotation", definition: "A turn about a fixed centre through a given angle (clockwise or anticlockwise)." },
    { term: "Image", definition: "The shape produced after a transformation is applied." },
    { term: "Object", definition: "The original shape before transformation." },
  ],
  concepts: [
    {
      id: "ciem-u7-basic-transformations",
      title: "Translations, reflections and rotations",
      skill: "Apply and describe translations, reflections and rotations on the coordinate plane.",
      lesson: {
        sections: [
          {
            heading: "Translations",
            body: "A translation moves every point by the same vector. In column form $\\begin{pmatrix}a\\\\b\\end{pmatrix}$: add $a$ to each $x$-coordinate and $b$ to each $y$-coordinate. E.g. $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ moves 3 right, 2 down.",
          },
          {
            heading: "Reflections",
            body: "Reflecting in a line:\n\n- **x-axis**: $(x,y)\\to(x,-y)$\n- **y-axis**: $(x,y)\\to(-x,y)$\n- **line $y=x$**: $(x,y)\\to(y,x)$\n- **line $y=-x$**: $(x,y)\\to(-y,-x)$\n\nFor other mirror lines, count perpendicular distance from each point to the line and mark the image the same distance on the other side.",
          },
          {
            heading: "Rotations",
            body: "A rotation is defined by **centre**, **angle** and **direction** (clockwise/anticlockwise). Common cases:\n\n- $90^\\circ$ clockwise about origin: $(x,y)\\to(y,-x)$\n- $90^\\circ$ anticlockwise: $(x,y)\\to(-y,x)$\n- $180^\\circ$: $(x,y)\\to(-x,-y)$\n\nFor other centres, translate the centre to the origin, rotate, then translate back.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" },
          { name: "Reflect x-axis", statement: "$(x,y)\\to(x,-y)$" },
          { name: "Reflect y-axis", statement: "$(x,y)\\to(-x,y)$" },
          { name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" },
          { name: "Rotate 90° cw", statement: "$(x,y)\\to(y,-x)$" },
          { name: "Rotate 180°", statement: "$(x,y)\\to(-x,-y)$" },
        ],
        workedExample: {
          problem: "Point $P(3,1)$ is reflected in the $x$-axis, then translated by $\\begin{pmatrix}2\\\\0\\end{pmatrix}$. Find the final position.",
          solution: "Reflect: $(3,-1)$. Translate: $(3+2,-1+0)=(5,-1)$.",
        },
      },
      questions: [
        {
          id: "ciem-u7-basic-transformations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $A(2,5)$ is translated by vector $\\begin{pmatrix}3\\\\-1\\end{pmatrix}$. What are the coordinates of the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1,4)$" },
              { id: "b", text: "$(5,6)$" },
              { id: "c", text: "$(6,5)$" },
              { id: "d", text: "$(5,4)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" },
            ],
            steps: [
              { reasoning: "Add the vector components.", working: "(2+3,5-1)=(5,4)", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $(5,4)$",
            commonErrors: ["Subtracting instead of adding the vector."],
          },
        },
        {
          id: "ciem-u7-basic-transformations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $B(4,-2)$ is reflected in the $y$-axis. Write down the coordinates of the image.",
          response: { type: "numeric", parts: [{ label: "x", answer: -4 }, { label: "y", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reflect y-axis", statement: "$(x,y)\\to(-x,y)$" },
            ],
            steps: [
              { reasoning: "Negate the $x$-coordinate only.", working: "(-4,-2)", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$(-4,-2)$",
            commonErrors: ["Negating both coordinates (that's $180^\\circ$ rotation)."],
          },
        },
        {
          id: "ciem-u7-basic-transformations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $C(2,3)$ is rotated $90^\\circ$ clockwise about the origin. Find the image coordinates.",
          response: { type: "numeric", parts: [{ label: "x", answer: 3 }, { label: "y", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotate 90° cw", statement: "$(x,y)\\to(y,-x)$" },
            ],
            steps: [
              { reasoning: "Apply the rotation rule.", working: "(y,-x)=(3,-2)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", working: "(3,-2)", marks: 3, markCode: "A" },
            ],
            finalAnswer: "$(3,-2)$",
            commonErrors: ["Using anticlockwise rule $(x,y)\\to(-y,x)$ giving $(-3,2)$."],
          },
        },
        {
          id: "ciem-u7-basic-transformations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$ has vertices $A(1,1)$, $B(4,1)$, $C(1,4)$.",
          parts: [
            { label: "a", prompt: "Write down the coordinates of the image $A'B'C'$ after reflection in the line $y=x$.", marks: 3 },
            { label: "b", prompt: "Find the area of triangle $A'B'C'$.", marks: 2 },
            { label: "c", prompt: "The image is then translated by $\\begin{pmatrix}-2\\\\3\\end{pmatrix}$. Find the final coordinates of $C''$ (image of $C$).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" },
              { kind: "property", name: "Congruence", statement: "Reflections and translations preserve area." },
            ],
            steps: [
              { part: "a", reasoning: "Swap coordinates for each vertex.", working: "A'=(1,1),\\ B'=(1,4),\\ C'=(4,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three images.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Reflections preserve area; original is right-angled with legs $3$.", working: "A=\\frac12\\times3\\times3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "=4.5\\text{ square units}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply translation to $C'=(4,1)$.", working: "(4-2,1+3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=(2,4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the final point.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $A'(1,1)$, $B'(1,4)$, $C'(4,1)$ (b) $4.5$ (c) $C''=(2,4)$",
            commonErrors: ["In (a) swapping only some coordinates.", "In (c) translating the original $C$ instead of $C'$."],
          },
        },
        {
          id: "ciem-u7-basic-transformations-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Point $(4,1)$ is translated by vector $\\begin{pmatrix}-2\\\\3\\end{pmatrix}$. What are the image coordinates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,4)$" },
            { id: "b", text: "$(2,-2)$" },
            { id: "c", text: "$(6,-2)$" },
            { id: "d", text: "$(6,4)$" }
 ],
            aorrectChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" } ],
            steps: [ { reasoning: "Add the vector components.", working: "(4-2,1+3)=(2,4)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** $(2,4)$", commonErrors: ["Subtracting the vector instead of adding."] },
        },
        {
          id: "ciem-u7-basic-transformations-q6", difficulty: "core", totalMarks: 1,
          stem: "Point $(5,-2)$ is reflected in the line $y=x$. What are the image coordinates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-5,2)$" },
            { id: "b", text: "$(-2,5)$" },
            { id: "c", text: "$(2,-5)$" },
            { id: "d", text: "$(5,2)$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" } ],
            steps: [ { reasoning: "Swap the coordinates.", working: "(y,x)=(-2,5)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $(-2,5)$", commonErrors: ["Negating coordinates instead of swapping."] },
        },
        {
          id: "ciem-u7-basic-transformations-q7", difficulty: "core", totalMarks: 2,
          stem: "Point $(3,-4)$ is rotated $90^\\circ$ anticlockwise about the origin. Find the image coordinates.",
          response: { type: "numeric", parts: [ { label: "x", answer: 4 }, { label: "y", answer: 3 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Rotate 90° acw", statement: "$(x,y)\\to(-y,x)$" } ],
            steps: [
              { reasoning: "Apply the anticlockwise rule.", working: "(-(-4),3)=(4,3)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(4,3)$", commonErrors: ["Using the clockwise rule."] },
        },
        {
          id: "ciem-u7-basic-transformations-q8", difficulty: "challenge", totalMarks: 1,
          stem: "Point $(-3,2)$ is rotated $180^\\circ$ about the origin. What are the image coordinates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-3,-2)$" },
            { id: "b", text: "$(3,2)$" },
            { id: "c", text: "$(3,-2)$" },
            { id: "d", text: "$(2,-3)$" }
 ],
            correctChoiceIc: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Rotate 180°", statement: "$(x,y)\\to(-x,-y)$" } ],
            steps: [ { reasoning: "Negate both coordinates.", working: "(3,-2)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** $(3,-2)$", commonErrors: ["Negating only one coordinate."] },
        },
        {
          id: "ciem-u7-basic-transformations-q9", difficulty: "core", totalMarks: 2,
          stem: "Point $(7,5)$ is reflected in the $x$-axis. Find the image coordinates.",
          response: { type: "numeric", parts: [ { label: "x", answer: 7 }, { label: "y", answer: -5 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Reflect x-axis", statement: "$(x,y)\\to(x,-y)$" } ],
            steps: [
              { reasoning: "Negate the $y$-coordinate only.", working: "(7,-5)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(7,-5)$", commonErrors: ["Negating both coordinates."] },
        },
        {
          id: "ciem-u7-basic-transformations-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Point $(2,-1)$ is translated by vector $\\begin{pmatrix}-4\\\\0\\end{pmatrix}$. Find the image.",
          response: { type: "numeric", parts: [ { label: "x", answer: -2 }, { label: "y", answer: -1 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" } ],
            steps: [
              { reasoning: "Add the vector components.", working: "(2-4,-1+0)=(-2,-1)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(-2,-1)$", commonErrors: ["Changing the $y$-coordinate."] },
        },
        {
          id: "ciem-u7-basic-transformations-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which transformation maps $(1,2)$ to $(2,1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Translation by $\\begin{pmatrix}1\\\\-1\\end{pmatrix}$" },
            { id: "b", text: "Reflection in the line $y=x$" },
            { id: "c", text: "Reflection in the $x$-axis" },
            { id: "d", text: "Rotation $90^\\circ$ clockwise" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" } ],
            steps: [ { reasoning: "Check which rule swaps the coordinates.", working: "(y,x)=(2,1)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** Reflection in $y=x$", commonErrors: ["Choosing reflection in the $x$-axis."] },
        },
        {
          id: "ciem-u7-basic-transformations-q12", difficulty: "core", totalMarks: 3,
          stem: "Point $P(2,3)$ is reflected in the $x$-axis and then translated by $\\begin{pmatrix}1\\\\-2\\end{pmatrix}$. Find the final position.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect x-axis", statement: "$(x,y)\\to(x,-y)$" }, { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" } ],
            steps: [
              { reasoning: "Reflect in the $x$-axis.", working: "(2,-3)", marks: 1, markCode: "M" },
              { reasoning: "Apply the translation.", working: "(2+1,-3-2)", marks: 1, markCode: "M" },
              { reasoning: "State the final position.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(3,-5)$", commonErrors: ["Translating before reflecting."] },
        },
        {
          id: "ciem-u7-basic-transformations-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Point $(-5,1)$ is rotated $90^\\circ$ clockwise about the origin. Find the image coordinates.",
          response: { type: "numeric", parts: [ { label: "x", answer: 1 }, { label: "y", answer: 5 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Rotate 90° cw", statement: "$(x,y)\\to(y,-x)$" } ],
            steps: [
              { reasoning: "Apply the clockwise rule.", working: "(y,-x)=(1,5)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(1,5)$", commonErrors: ["Using the anticlockwise rule."] },
        },
        {
          id: "ciem-u7-basic-transformations-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Describe the single transformation that maps $(3,4)$ to $(4,-3)$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Rotate 90° cw", statement: "$(x,y)\\to(y,-x)$" } ],
            steps: [
              { reasoning: "Test the clockwise rotation rule.", working: "(y,-x)=(4,-3)", marks: 1, markCode: "M" },
              { reasoning: "The coordinates match a $90^\\circ$ clockwise rotation about the origin.", marks: 1, markCode: "M" },
              { reasoning: "State the transformation fully.", marks: 1, markCode: "A" } ],
            finalAnswer: "Rotation $90^\\circ$ clockwise about $(0,0)$", commonErrors: ["Describing it as a translation."] },
        },
        {
          id: "ciem-u7-basic-transformations-q15", difficulty: "core", totalMarks: 1,
          stem: "Which property is preserved by translations, reflections and rotations?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Direction of sides" },
            { id: "b", text: "Position" },
            { id: "c", text: "Orientation" },
            { id: "d", text: "Area" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Isometry", statement: "These transformations preserve shape and area." } ],
            steps: [ { reasoning: "Recall that reflections/rotations/translations are congruence transformations.", working: "\\text{area preserved}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Area", commonErrors: ["Thinking position is preserved."] },
        },
        {
          id: "ciem-u7-basic-transformations-q16", difficulty: "challenge", totalMarks: 8,
          stem: "Triangle $ABC$ has vertices $A(1,1)$, $B(4,1)$ and $C(1,3)$.",
          parts: [
            { label: "a", prompt: "Write down the image $A'B'C'$ after reflection in the $y$-axis.", marks: 3 },
            { label: "b", prompt: "The image is then translated by $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$. Find the final coordinates of $C''$.", marks: 3 },
            { label: "c", prompt: "State the area of the final triangle.", marks: 2 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y-axis", statement: "$(x,y)\\to(-x,y)$" }, { kind: "property", name: "Congruence", statement: "Reflections and translations preserve area." } ],
            steps: [
              { part: "a", reasoning: "Negate each $x$-coordinate.", working: "A'(-1,1),\\ B'(-4,1),\\ C'(-1,3)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three images.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Translate $C'(-1,3)$ by $(2,-1)$.", working: "(-1+2,3-1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute and state.", working: "=(1,2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Give the final point.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Transformations preserve area; original area $=\\frac12\\times3\\times2=3$.", working: "3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $A'(-1,1)$, $B'(-4,1)$, $C'(-1,3)$ (b) $C''=(1,2)$ (c) $3$ square units",
            commonErrors: ["In (b) translating the original $C$ instead of $C'$."] },
        },
      ],
    },
    {
      id: "ciem-u7-enlargements",
      title: "Enlargements",
      skill: "Perform enlargements with positive and negative scale factors and describe them fully.",
      lesson: {
        sections: [
          {
            heading: "Enlargement basics",
            body: "An enlargement needs a **centre** and a **scale factor** $k$. Every point $P$ maps to $P'$ such that $\\vec{OP'}=k\\vec{OP}$ (measured from the centre $O$).",
          },
          {
            heading: "Positive vs negative scale factors",
            body: "- $k>1$: bigger, same orientation\n- $0<k<1$: smaller, same orientation\n- $k<0$: bigger or smaller **and rotated $180^\\circ$** about the centre\n\nE.g. $k=-2$ doubles all distances from the centre and flips to the opposite side.",
          },
          {
            heading: "Describing an enlargement",
            body: "Full description: 'enlargement, centre $(h,k)$, scale factor $n$'. All three parts are required for full marks.",
          },
        ],
        keyFormulas: [
          { name: "Image position", statement: "$\\vec{OP'}=k\\vec{OP}$ from centre $O$" },
          { name: "Area scale", statement: "Area multiplies by $k^2$" },
        ],
        workedExample: {
          problem: "Point $P(2,1)$ is enlarged with centre $(0,0)$ and scale factor $3$. Find $P'$.",
          solution: "$\\vec{OP'}=3\\begin{pmatrix}2\\\\1\\end{pmatrix}=\\begin{pmatrix}6\\\\3\\end{pmatrix}$, so $P'=(6,3)$.",
        },
      },
      questions: [
        {
          id: "ciem-u7-enlargements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An enlargement has scale factor $-2$. What happens to a point's distance from the centre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Halves and stays on same side" },
              { id: "b", text: "Doubles and stays on same side" },
              { id: "c", text: "Unchanged" },
              { id: "d", text: "Doubles and moves to the opposite side" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Negative scale factor", statement: "Negative $k$ reverses direction; $|k|$ scales distance." },
            ],
            steps: [
              { reasoning: "Interpret $k=-2$.", working: "|k|=2\\text{, opposite side}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Doubles and moves to opposite side",
            commonErrors: ["Ignoring the negative sign."],
          },
        },
        {
          id: "ciem-u7-enlargements-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $P(3,2)$ is enlarged with centre $(0,0)$ and scale factor $-1$. Find $P'$.",
          response: { type: "numeric", parts: [{ label: "x", answer: -3 }, { label: "y", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" },
            ],
            steps: [
              { reasoning: "Multiply coordinates by $-1$.", working: "(-3,-2)", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$(-3,-2)$",
            commonErrors: ["Treating $k=-1$ as a reflection only — it gives the same result here but the reasoning differs."],
          },
        },
        {
          id: "ciem-u7-enlargements-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $P(4,2)$ is enlarged with centre $(1,1)$ and scale factor $2$. Find $P'$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 7 }, { label: "y", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enlargement about a point", statement: "Vector from centre scales by $k$: $\\vec{CP'}=k\\vec{CP}$." },
            ],
            steps: [
              { reasoning: "Vector from centre to $P$.", working: "\\vec{CP}=(4-1,2-1)=(3,1)", marks: 1, markCode: "M" },
              { reasoning: "Scale by $k=2$.", working: "\\vec{CP'}=(6,2)", marks: 1, markCode: "M" },
              { reasoning: "Add back the centre.", working: "P'=(1+6,1+2)=(7,3)", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$(7,3)$",
            commonErrors: ["Scaling from the origin instead of the centre."],
          },
        },
        {
          id: "ciem-u7-enlargements-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $T$ has vertices $(2,1)$, $(4,1)$, $(2,3)$. It is enlarged to $T'$ with vertices $(3,1)$, $(7,1)$, $(3,5)$.",
          parts: [
            { label: "a", prompt: "Find the centre of enlargement.", marks: 4 },
            { label: "b", prompt: "Find the scale factor.", marks: 2 },
            { label: "c", prompt: "Describe the enlargement fully.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enlargement", statement: "$\\vec{CP'}=k\\vec{CP}$ — the centre lies on the line through each object–image pair." },
            ],
            steps: [
              { part: "a", reasoning: "The centre lies at the intersection of lines joining corresponding vertices. Pairs: $(2,1)\\to(3,1)$, $(4,1)\\to(7,1)$, $(2,3)\\to(3,5)$.", working: "\\text{lines through pairs}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "First two pairs both lie on the horizontal line $y=1$; the third pair's line is $y=2x-1$, which meets $y=1$ at $x=1$.", working: "y=1\\ \\cap\\ y=2x-1 \\Rightarrow (1,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Centre is $(1,1)$; verify all three pairs are collinear with it.", working: "C=(1,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the centre.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ratio of distances from centre: $(2,1)-C=(1,0)$ and $(3,1)-C=(2,0)$.", working: "k=\\frac{2}{1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the scale factor.", working: "k=2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State all three elements of the description.", working: "\\text{enlargement, centre }(1,1),\\ k=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Give centre and scale factor explicitly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) centre $(1,1)$ (b) $k=2$ (c) enlargement, centre $(1,1)$, scale factor $2$",
            commonErrors: ["Assuming the centre is the origin.", "Using only one pair of points to find the centre."],
          },
        },
        {
          id: "ciem-u7-enlargements-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An enlargement has scale factor $-2$. What happens to a point's distance from the centre?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It doubles and stays on the same side" },
            { id: "b", text: "It halves and stays on the same side" },
            { id: "c", text: "It doubles and moves to the opposite side" },
            { id: "d", text: "It is unchanged" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Negative scale factor", statement: "$|k|$ scales distance; negative $k$ reverses direction." } ],
            steps: [ { reasoning: "Interpret $k=-2$.", working: "|k|=2\\text{, opposite side}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Doubles and moves to the opposite side", commonErrors: ["Ignoring the negative sign."] },
        },
        {
          id: "ciem-u7-enlargements-q6", difficulty: "core", totalMarks: 1,
          stem: "Point $(2,1)$ is enlarged with centre $(0,0)$ and scale factor $3$. What is the image?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(6,3)$" },
            { id: "b", text: "$(3,1)$" },
            { id: "c", text: "$(6,1)$" },
            { id: "d", text: "$(5,4)$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" } ],
            steps: [ { reasoning: "Multiply coordinates by $3$.", working: "(6,3)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $(6,3)$", commonErrors: ["Adding $3$ instead of multiplying."] },
        },
        {
          id: "ciem-u7-enlargements-q7", difficulty: "core", totalMarks: 2,
          stem: "Point $(5,3)$ is enlarged with centre $(1,1)$ and scale factor $2$. Find the image.",
          response: { type: "numeric", parts: [ { label: "x", answer: 9 }, { label: "y", answer: 5 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement about a point", statement: "$\\vec{CP'}=k\\vec{CP}$" } ],
            steps: [
              { reasoning: "Vector from centre $=(4,2)$; scale by $2$ gives $(8,4)$; add centre.", working: "(1+8,1+4)=(9,5)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(9,5)$", commonErrors: ["Scaling from the origin."] },
        },
        {
          id: "ciem-u7-enlargements-q8", difficulty: "challenge", totalMarks: 1,
          stem: "An enlargement has centre $C$ and scale factor $-1$. Which single transformation has the same effect?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reflection in a line through $C$" },
            { id: "b", text: "Translation" },
            { id: "c", text: "Rotation $180^\\circ$ about $C$" },
            { id: "d", text: "Enlargement scale factor $1$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Negative scale factor", statement: "$k=-1$ reverses every vector from the centre." } ],
            steps: [ { reasoning: "A scale factor of $-1$ maps each point to the opposite side of $C$ at the same distance.", working: "\\text{rotation }180^\\circ", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** Rotation $180^\\circ$ about $C$", commonErrors: ["Thinking it is a reflection."] },
        },
        {
          id: "ciem-u7-enlargements-q9", difficulty: "core", totalMarks: 2,
          stem: "Point $(1,-2)$ is enlarged with centre $(0,0)$ and scale factor $-3$. Find the image.",
          response: { type: "numeric", parts: [ { label: "x", answer: -3 }, { label: "y", answer: 6 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" } ],
            steps: [
              { reasoning: "Multiply coordinates by $-3$.", working: "(-3,6)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(-3,6)$", commonErrors: ["Ignoring the negative sign."] },
        },
        {
          id: "ciem-u7-enlargements-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Point $(8,6)$ is enlarged with centre $(0,0)$ and scale factor $\\frac12$. Find the image.",
          response: { type: "numeric", parts: [ { label: "x", answer: 4 }, { label: "y", answer: 3 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" } ],
            steps: [
              { reasoning: "Multiply coordinates by $\\frac12$.", working: "(4,3)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(4,3)$", commonErrors: ["Doubling instead of halving."] },
        },
        {
          id: "ciem-u7-enlargements-q11", difficulty: "challenge", totalMarks: 1,
          stem: "An enlargement has scale factor $3$. By what factor is the area of a shape multiplied?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$27$" },
            { id: "b", text: "$6$" },
            { id: "c", text: "$3$" },
            { id: "d", text: "$9$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Area scale", statement: "Area multiplies by $k^2$." } ],
            steps: [ { reasoning: "Square the scale factor.", working: "3^2=9", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $9$", commonErrors: ["Multiplying area by $k$."] },
        },
        {
          id: "ciem-u7-enlargements-q12", difficulty: "core", totalMarks: 3,
          stem: "Point $P(2,1)$ maps to $P'(6,3)$ under an enlargement with centre $(0,0)$. Describe the enlargement fully.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" } ],
            steps: [
              { reasoning: "Find the scale factor from corresponding coordinates.", working: "k=\\frac63=\\frac31=3", marks: 1, markCode: "M" },
              { reasoning: "State centre and scale factor.", working: "\\text{centre }(0,0),\\ k=3", marks: 1, markCode: "M" },
              { reasoning: "Write the full description.", marks: 1, markCode: "A" } ],
            finalAnswer: "Enlargement, centre $(0,0)$, scale factor $3$", commonErrors: ["Omitting the centre."] },
        },
        {
          id: "ciem-u7-enlargements-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Point $(3,4)$ is enlarged with centre $(2,2)$ and scale factor $-2$. Find the image.",
          response: { type: "numeric", parts: [ { label: "x", answer: 0 }, { label: "y", answer: -2 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement about a point", statement: "$\\vec{CP'}=k\\vec{CP}$" } ],
            steps: [
              { reasoning: "Vector from centre $=(1,2)$; scale by $-2$ gives $(-2,-4)$.", working: "\\vec{CP'}=(-2,-4)", marks: 1, markCode: "M" },
              { reasoning: "Add the centre back.", working: "P'=(2-2,2-4)=(0,-2)", marks: 1, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(0,-2)$", commonErrors: ["Scaling from the origin."] },
        },
        {
          id: "ciem-u7-enlargements-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Points $(1,1)\\to(3,3)$ and $(2,1)\\to(6,3)$ under an enlargement. Describe the enlargement.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" } ],
            steps: [
              { reasoning: "Corresponding vectors from the origin are scalar multiples.", working: "k=3", marks: 1, markCode: "M" },
              { reasoning: "State centre and scale factor.", working: "\\text{centre }(0,0),\\ k=3", marks: 1, markCode: "M" },
              { reasoning: "Write the full description.", marks: 1, markCode: "A" } ],
            finalAnswer: "Enlargement, centre $(0,0)$, scale factor $3$", commonErrors: ["Missing the centre."] },
        },
        {
          id: "ciem-u7-enlargements-q15", difficulty: "core", totalMarks: 1,
          stem: "An enlargement has scale factor $\\frac12$. By what factor is the area multiplied?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac14$" },
            { id: "b", text: "$2$" },
            { id: "c", text: "$\\frac18$" },
            { id: "d", text: "$\\frac12$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Area scale", statement: "Area multiplies by $k^2$." } ],
            steps: [ { reasoning: "Square the scale factor.", working: "\\left(\\frac12\\right)^2=\\frac14", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $\\frac14$", commonErrors: ["Multiplying area by $\\frac12$."] },
        },
        {
          id: "ciem-u7-enlargements-q16", difficulty: "challenge", totalMarks: 8,
          stem: "Triangle $T$ has vertices $(2,1)$, $(4,1)$ and $(2,3)$. It is enlarged with centre $(1,0)$ and scale factor $2$.",
          parts: [
            { label: "a", prompt: "Write down the coordinates of the three image vertices.", marks: 4 },
            { label: "b", prompt: "Explain how the area changes.", marks: 2 },
            { label: "c", prompt: "Find the area of the image triangle.", marks: 2 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{CP'}=k\\vec{CP}$" }, { kind: "formula", name: "Area scale", statement: "Area multiplies by $k^2=4$." } ],
            steps: [
              { part: "a", reasoning: "Vector from centre to $(2,1)$ is $(1,1)$; scaled by $2$ gives $(2,2)$, image $(3,2)$.", working: "(3,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Image of $(4,1)$.", working: "(1+6,0+2)=(7,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Image of $(2,3)$.", working: "(1+2,0+6)=(3,6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three images.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area scale factor is $k^2$.", working: "2^2=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the multiplier.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Original area $=\\frac12\\times2\\times2=2$; image area $=4\\times2$.", working: "=8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the image area.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $(3,2)$, $(7,2)$, $(3,6)$ (b) multiplied by $4$ (c) $8$ square units",
            commonErrors: ["Scaling from the origin instead of centre $(1,0)$."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u7-transformations-notes",
      title: "Transformations — revision notes",
      summary: "Translations, reflections, rotations and enlargements on the coordinate plane.",
      sections: [
        {
          heading: "Coordinate rules",
          body: "- Translation $\\begin{pmatrix}a\\\\b\\end{pmatrix}$: $(x,y)\\to(x+a,y+b)$\n- Reflect $x$-axis: $(x,-y)$; $y$-axis: $(-x,y)$; $y=x$: $(y,x)$; $y=-x$: $(-y,-x)$\n- Rotate $90^\\circ$ cw: $(y,-x)$; $90^\\circ$ acw: $(-y,x)$; $180^\\circ$: $(-x,-y)$",
        },
        {
          heading: "Enlargements",
          body: "$\\vec{CP'}=k\\vec{CP}$ from centre $C$. $k<0$ flips to opposite side. Full description needs centre + scale factor.",
        },
        {
          heading: "Exam technique",
          body: "- For combined transformations, apply them in order.\n- Reflections/rotations/translations preserve area; enlargements scale area by $k^2$.\n- Negative scale factor = enlargement + $180^\\circ$ rotation about the centre.",
        },
      ],
    },
  ],
};
