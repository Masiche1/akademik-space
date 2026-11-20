import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edm11-u2-lesson-2-1",
  code: "2-1",
  title: "Transformations",
  goal: "I CAN carry out and describe reflections, rotations, translations and enlargements, including combined transformations.",
  standards: ["4MA1 4.7", "4MA1 4.8"],
  vocabulary: [
    { term: "Reflection", definition: "A transformation that flips a shape in a mirror line. Each point and its image are the same distance from the line." },
    { term: "Rotation", definition: "A turn about a fixed point (the centre) through a given angle and direction." },
    { term: "Translation", definition: "A slide of every point by the same column vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$." },
    { term: "Enlargement", definition: "A transformation with a centre and a scale factor that changes the size of a shape. A negative scale factor puts the image on the opposite side of the centre." },
    { term: "Scale factor", definition: "The number by which every length is multiplied in an enlargement." },
    { term: "Invariant point", definition: "A point that is mapped onto itself by a transformation." },
  ],
  concepts: [
    {
      id: "edm11-u2-transformations",
      title: "Carrying out transformations",
      skill: "Draw the image of a shape after a reflection, rotation, translation or enlargement, including fractional and negative scale factors.",
      lesson: {
        sections: [
          {
            heading: "Reflection, rotation and translation",
            body: "To reflect in a line, each point moves to the opposite side of the line at the same perpendicular distance. Reflection in the $y$-axis changes $(x,y)$ to $(-x,y)$; reflection in $y=x$ swaps the coordinates. A rotation of $90^\\circ$ anticlockwise about the origin maps $(x,y)$ to $(-y,x)$. A translation by $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ adds $a$ to $x$ and $b$ to $y$.",
          },
          {
            heading: "Enlargement",
            body: "For an enlargement with centre $C$ and scale factor $k$, the image of a point $P$ satisfies $\\overrightarrow{CP'} = k\\,\\overrightarrow{CP}$. If $0<k<1$ the shape gets smaller. If $k$ is negative the image is on the opposite side of the centre and is inverted. Lengths multiply by $|k|$ and areas by $k^2$.",
          },
          {
            heading: "Method for enlargements",
            body: "Find the vector from the centre to the point, multiply it by $k$, then add the result to the coordinates of the centre. Check the answer by confirming that centre, point and image lie on one straight line.",
          },
        ],
        keyFormulas: [
          { name: "Enlargement", statement: "$\\overrightarrow{CP'} = k\\,\\overrightarrow{CP}$" },
          { name: "Area of image", statement: "Area of image $= k^2 \\times$ area of object" },
        ],
        workedExample: {
          problem: "Enlarge the point $P(4,3)$ by scale factor $-2$, centre $(1,1)$.",
          solution: "$\\overrightarrow{CP} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$. Multiply by $-2$: $\\begin{pmatrix} -6 \\\\ -4 \\end{pmatrix}$. Add to the centre: $(1-6, 1-4) = (-5,-3)$.",
        },
      },
      questions: [
        {
          id: "edm11-u2-transformations-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "The point $P(3,2)$ is reflected in the $y$-axis.\n\nWhat are the coordinates of the image of P?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3,2)$" },
              { id: "b", text: "$(3,-2)$" },
              { id: "c", text: "$(-3,-2)$" },
              { id: "d", text: "$(2,3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Reflection in the y-axis", statement: "$(x,y)\\to(-x,y)$" }],
            steps: [{ reasoning: "P is 3 units to the right of the $y$-axis, so its image is 3 units to the left at the same height.", working: "(-3,2)", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $(-3,2)$",
            commonErrors: ["Reflecting in the $x$-axis, giving $(3,-2)$.", "Rotating by $180^\\circ$, giving $(-3,-2)$."],
          },
        },
        {
          id: "edm11-u2-transformations-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The point $P(2,3)$ is enlarged by scale factor 3 with centre $(1,1)$.\n\nWork out the coordinates of the image of P.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 4 },
              { label: "$y$-coordinate", answer: 7 },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enlargement", statement: "$\\overrightarrow{CP'}=k\\,\\overrightarrow{CP}$" }],
            steps: [
              { reasoning: "Find the vector from the centre to P.", working: "\\overrightarrow{CP}=\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the scale factor.", working: "3\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}=\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Add to the centre.", working: "(1+3,\\,1+6)=(4,7)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4,7)$",
            commonErrors: ["Multiplying the coordinates of P by 3 (centre at the origin), giving $(6,9)$.", "Adding 3 instead of multiplying by 3."],
          },
        },
        {
          id: "edm11-u2-transformations-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "The point $P(6,5)$ is enlarged by scale factor $-\\frac{1}{2}$ with centre $(2,1)$.\n\nWork out the coordinates of the image of P.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 0 },
              { label: "$y$-coordinate", answer: -1 },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enlargement", statement: "$\\overrightarrow{CP'}=k\\,\\overrightarrow{CP}$; a negative $k$ places the image on the opposite side of the centre." }],
            steps: [
              { reasoning: "Vector from the centre to P.", working: "\\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by $-\\frac12$.", working: "\\begin{pmatrix} -2 \\\\ -2 \\end{pmatrix}", marks: 1, markCode: "M" },
              { reasoning: "Add to the centre.", working: "(2-2,\\,1-2)=(0,-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(0,-1)$",
            commonErrors: ["Ignoring the negative sign and giving $(4,3)$.", "Using $\\overrightarrow{PC}$ instead of $\\overrightarrow{CP}$."],
          },
        },
        {
          id: "edm11-u2-transformations-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Triangle T has vertices at $A(1,1)$, $B(4,1)$ and $C(4,3)$.",
          parts: [
            { label: "a", prompt: "T is translated by the vector $\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$. Write down the coordinates of the image of C.", marks: 2 },
            { label: "b", prompt: "T is rotated through $90^\\circ$ clockwise about the origin $(0,0)$. Write down the coordinates of the image of C.", marks: 2 },
            { label: "c", prompt: "T is enlarged by scale factor $-2$ with centre $(1,1)$. Work out the coordinates of the image of C.", marks: 3 },
            { label: "d", prompt: "Work out the area of the image of T after the enlargement in part (c).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Rotation 90° clockwise about the origin", statement: "$(x,y)\\to(y,-x)$" },
              { kind: "formula", name: "Area scale factor", statement: "Area of image $=k^2\\times$ area of object" },
            ],
            steps: [
              { part: "a", reasoning: "Add the vector to the coordinates of C.", working: "(4-3,\\,3+2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the image.", working: "(1,5)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A $90^\\circ$ clockwise turn maps $(x,y)$ to $(y,-x)$.", working: "(3,-4)", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Vector from the centre to C.", working: "\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by $-2$.", working: "\\begin{pmatrix} -6 \\\\ -4 \\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add to the centre.", working: "(1-6,\\,1-4)=(-5,-3)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Area of T is $\\frac12\\times 3\\times 2=3$. The area scale factor is $(-2)^2=4$.", working: "3\\times 4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(1,5)$ (b) $(3,-4)$ (c) $(-5,-3)$ (d) 12 square units",
            commonErrors: ["Rotating anticlockwise, giving $(-3,4)$.", "Using area scale factor $-2$ or $2$ rather than $4$."],
            examinerNote: "In (b), award 1 mark (A1 ft) for $(-3,4)$ with a rotation in the wrong direction only if the method is clear.",
          },
        },
      ],
    },
    {
      id: "edm11-u2-combined-transformations",
      title: "Describing combined transformations",
      skill: "Describe fully a single transformation, and identify the single transformation equivalent to two transformations.",
      lesson: {
        sections: [
          {
            heading: "Describing fully",
            body: "A full description needs specific details. Reflection: the mirror line. Rotation: centre, angle and direction. Translation: the column vector. Enlargement: the centre and scale factor. Never use more than one type of transformation in a description.",
          },
          {
            heading: "How to identify the transformation",
            body: "If the shape stays the same size and orientation, it is a translation. If it is the same size but flipped, it is a reflection. If it is turned, it is a rotation. If the size changes, it is an enlargement. For an enlargement, join corresponding points: the lines meet at the centre.",
          },
          {
            heading: "Combining transformations",
            body: "Two reflections in perpendicular lines through a point give a rotation of $180^\\circ$ about that point. Two reflections in parallel lines give a translation. Reflection in $x=a$ maps $x$ to $2a-x$, which is useful for calculation.",
          },
        ],
        keyFormulas: [
          { name: "Reflection in x = a", statement: "$(x,y)\\to(2a-x,\\,y)$" },
          { name: "Reflection in y = b", statement: "$(x,y)\\to(x,\\,2b-y)$" },
        ],
        workedExample: {
          problem: "A shape is reflected in the $x$-axis and then in the $y$-axis. Describe the single transformation that does the same job.",
          solution: "$(x,y)\\to(x,-y)\\to(-x,-y)$. This is a rotation of $180^\\circ$ about the origin.",
        },
      },
      questions: [
        {
          id: "edm11-u2-combined-transformations-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A shape is reflected in the $x$-axis and then reflected in the $y$-axis.\n\nWhich single transformation is equivalent to these two reflections?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rotation of $180^\\circ$ about the origin" },
              { id: "b", text: "Reflection in the line $y=x$" },
              { id: "c", text: "Translation by $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$" },
              { id: "d", text: "Rotation of $90^\\circ$ about the origin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular reflections", statement: "Reflections in two perpendicular lines through a point give a $180^\\circ$ rotation about that point." }],
            steps: [{ reasoning: "The point $(x,y)$ goes to $(x,-y)$ and then to $(-x,-y)$.", working: "(x,y)\\to(-x,-y)", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Rotation of $180^\\circ$ about the origin",
            commonErrors: ["Thinking the shape returns to its original position."],
          },
        },
        {
          id: "edm11-u2-combined-transformations-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 2,
          stem: "Triangle P has vertices at $(1,2)$, $(3,2)$ and $(3,3)$. Triangle Q has vertices at $(1,-2)$, $(3,-2)$ and $(3,-3)$.\n\nDescribe fully the single transformation that maps triangle P onto triangle Q.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Reflection", statement: "Each point and its image are equidistant from the mirror line, joined by a line perpendicular to it." }],
            steps: [
              { reasoning: "Each $y$-coordinate changes sign and the $x$-coordinates are unchanged, so the shape is flipped.", working: "\\text{Reflection}", marks: 1, markCode: "B" },
              { reasoning: "The mirror line is the line $y=0$, the $x$-axis.", working: "\\text{in the } x\\text{-axis (}y=0\\text{)}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Reflection in the $x$-axis ($y=0$)",
            commonErrors: ["Describing it as a rotation of $180^\\circ$ without checking the $x$-coordinates.", "Describing it as 'a flip' with no mirror line."],
            examinerNote: "Award no marks if more than one transformation is described.",
          },
        },
        {
          id: "edm11-u2-combined-transformations-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Triangle A has vertices at $(1,1)$, $(3,1)$ and $(3,2)$. Triangle B has vertices at $(4,4)$, $(0,4)$ and $(0,2)$.\n\nDescribe fully the single transformation that maps triangle A onto triangle B.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Enlargement", statement: "Lines joining corresponding points pass through the centre, and $\\overrightarrow{CP'}=k\\,\\overrightarrow{CP}$." }],
            steps: [
              { reasoning: "The size has changed, and B is turned upside down, so it is an enlargement.", working: "\\text{Enlargement}", marks: 1, markCode: "B" },
              { reasoning: "Side $(1,1)$ to $(3,1)$ has length 2; its image has length 4, and the image is inverted, so $k=-2$.", working: "k=-2", marks: 1, markCode: "B" },
              { reasoning: "Lines from $(1,1)$ to $(4,4)$ and from $(3,1)$ to $(0,4)$ intersect at the centre.", working: "\\text{centre } (2,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Enlargement, scale factor $-2$, centre $(2,2)$",
            commonErrors: ["Giving scale factor $2$ and missing the inversion.", "Giving the wrong centre by joining non-corresponding points."],
            examinerNote: "Check: $(2,2)+(-2)\\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix}=(4,4)$.",
          },
        },
        {
          id: "edm11-u2-combined-transformations-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Triangle T has vertices at $(1,1)$, $(3,1)$ and $(3,2)$.\n\nT is reflected in the line $x=4$ to give triangle U. U is then reflected in the line $x=6$ to give triangle W.",
          parts: [
            { label: "a", prompt: "Write down the coordinates of the vertices of U.", marks: 2 },
            { label: "b", prompt: "Write down the coordinates of the vertices of W.", marks: 2 },
            { label: "c", prompt: "Describe fully the single transformation that maps T onto W.", marks: 2 },
            { label: "d", prompt: "T is instead reflected in the line $x=4$ and then in the line $x=9$. Work out the single transformation that maps T onto the final image.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reflection in x = a", statement: "$x\\to 2a-x$" },
              { kind: "property", name: "Parallel reflections", statement: "Two reflections in parallel lines are equivalent to a translation perpendicular to the lines." },
            ],
            steps: [
              { part: "a", reasoning: "Use $x\\to 8-x$ for each vertex.", working: "(1,1)\\to(7,1),\\; (3,1)\\to(5,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete the third vertex.", working: "(3,2)\\to(5,2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $x\\to 12-x$ on the vertices of U.", working: "(7,1)\\to(5,1),\\; (5,1)\\to(7,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete the third vertex.", working: "(5,2)\\to(7,2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Every vertex moves 4 units to the right with no change in $y$.", working: "\\text{Translation}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "State the vector.", working: "\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reflection in $x=4$ gives $x\\to 8-x$; reflection in $x=9$ gives $x\\to 18-x$.", working: "x\\to 8-x\\to 18-(8-x)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify.", working: "x\\to x+10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Identify the transformation.", working: "\\text{Translation by } \\begin{pmatrix} 10 \\\\ 0 \\end{pmatrix}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(7,1),(5,1),(5,2)$ (b) $(5,1),(7,1),(7,2)$ (c) translation by $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$ (d) translation by $\\begin{pmatrix} 10 \\\\ 0 \\end{pmatrix}$",
            commonErrors: ["Giving the translation as the distance between the lines (2) rather than twice the distance (4).", "Describing the combined transformation as a reflection."],
            examinerNote: "The translation is twice the distance between the parallel mirror lines, perpendicular to them. In (c), allow 'translation 4 right' (oe).",
          },
        },
      ],
    },
  ],
};
