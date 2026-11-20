import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ciem-u7-lesson-7-2",
  code: "7-2",
  title: "Identifying Transformations",
  goal: "I CAN describe a single transformation mapping one shape to another, including finding centres and scale factors, and write inverse transformations.",
  standards: ["0580 7.3"],
  vocabulary: [
    { term: "Inverse transformation", definition: "The transformation that undoes another; e.g. inverse of translation $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ is $\\begin{pmatrix}-a\\\\-b\\end{pmatrix}$." },
    { term: "Invariant point", definition: "A point that stays fixed under a transformation." },
    { term: "Corresponding points", definition: "Pairs of points on object and image related by the transformation." },
    { term: "Centre of rotation", definition: "The fixed point about which a rotation occurs; equidistant from object and image points." },
    { term: "Mirror line", definition: "The line of reflection; the perpendicular bisector of segments joining corresponding points." },
  ],
  concepts: [
    {
      id: "ciem-u7-identifying",
      title: "Describing transformations",
      skill: "Identify the type, centre, angle, direction or scale factor of a transformation from object–image pairs.",
      lesson: {
        sections: [
          {
            heading: "Translation",
            body: "Find the vector by subtracting an object's coordinates from its image: $\\vec{v}=\\text{image}-\\text{object}$. Same vector for every point.",
          },
          {
            heading: "Reflection",
            body: "Corresponding points are equidistant from the mirror line. Find two or three midpoints of object–image segments — they all lie on the mirror line. The line through them is the mirror line.",
          },
          {
            heading: "Rotation",
            body: "The centre is equidistant from each object point and its image. Find the perpendicular bisector of one object–image segment and of another — their intersection is the centre. Then measure the angle turned.",
          },
          {
            heading: "Enlargement",
            body: "Object, image and centre are collinear. Find the centre from intersecting lines through corresponding pairs; scale factor = image distance ÷ object distance from centre.",
          },
        ],
        keyFormulas: [
          { name: "Translation vector", statement: "$\\vec{v}=\\text{image}-\\text{object}$" },
          { name: "Scale factor", statement: "$k=\\frac{\\text{image distance from centre}}{\\text{object distance from centre}}$" },
        ],
        workedExample: {
          problem: "Point $(2,1)\\to(4,3)$. Describe the transformation.",
          solution: "Vector $=(4-2,3-1)=(2,2)$ for every point — translation by $\\begin{pmatrix}2\\\\2\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "ciem-u7-identifying-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Every point of a shape moves 3 units left and 2 units up. What transformation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$" },
              { id: "b", text: "Reflection in the $y$-axis" },
              { id: "c", text: "Rotation $180^\\circ$" },
              { id: "d", text: "Enlargement scale factor $-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translation", statement: "Every point moves by the same vector." },
            ],
            steps: [
              { reasoning: "All points move identically — a translation.", working: "\\begin{pmatrix}-3\\\\2\\end{pmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$",
            commonErrors: ["Writing the vector in row form $(-3,2)$ — column form is standard."],
          },
        },
        {
          id: "ciem-u7-identifying-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Point $P(5,2)$ maps to $P'(3,6)$ under a reflection. The midpoint of $PP'$ lies on the mirror line. Find the midpoint and hence the direction of the mirror line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection", statement: "Mirror line is the perpendicular bisector of object–image segments." },
            ],
            steps: [
              { reasoning: "Find the midpoint of $PP'$.", working: "M=\\left(\\frac{5+3}{2},\\frac{2+6}{2}\\right)=(4,4)", marks: 1, markCode: "M" },
              { reasoning: "The mirror line passes through $(4,4)$.", marks: 1, markCode: "M" },
              { reasoning: "The mirror line is perpendicular to $PP'$; $PP'$ direction is $(-2,4)$ so mirror direction is $(4,2)$ i.e. slope $\\frac12$ — state the line.", working: "y-4=\\frac12(x-4)\\Rightarrow y=\\frac12x+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Midpoint $(4,4)$; mirror line $y=\\frac12x+2$",
            commonErrors: ["Using the segment $PP'$ itself as the mirror line."],
          },
        },
        {
          id: "ciem-u7-identifying-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $A(4,1)$ maps to $A'(1,4)$ under a rotation about the origin. Describe the rotation fully.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotation about origin", statement: "$90^\\circ$ anticlockwise: $(x,y)\\to(-y,x)$; $90^\\circ$ clockwise: $(x,y)\\to(y,-x)$." },
            ],
            steps: [
              { reasoning: "Check which rotation rule maps $(4,1)$ to $(1,4)$.", working: "(-y,x)=(-1,4)\\neq(1,4);\\ (y,-x)=(1,-4)\\neq(1,4)", marks: 1, markCode: "M" },
              { reasoning: "Try reflection? No — test $180^\\circ$: $(-4,-1)\\neq(1,4)$. The mapping $(4,1)\\to(1,4)$ is reflection in $y=x$.", working: "(x,y)\\to(y,x)", marks: 1, markCode: "M" },
              { reasoning: "Conclude it is a reflection, not a rotation.", marks: 1, markCode: "M" },
              { reasoning: "State the full description.", working: "\\text{reflection in the line }y=x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the line $y=x$ (not a rotation)",
            commonErrors: ["Forcing a rotation answer when the mapping is a reflection."],
          },
        },
        {
          id: "ciem-u7-identifying-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Shape $S$ has vertices $A(2,1)$, $B(4,1)$, $C(2,3)$. Its image $S'$ has vertices $A'(3,2)$, $B'(7,2)$, $C'(3,6)$.",
          parts: [
            { label: "a", prompt: "Show that the transformation is an enlargement and find its centre.", marks: 4 },
            { label: "b", prompt: "Find the scale factor.", marks: 2 },
            { label: "c", prompt: "Write the inverse transformation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enlargement", statement: "$\\vec{CP'}=k\\vec{CP}$" },
              { kind: "definition", name: "Inverse", statement: "Inverse enlargement has scale factor $\\frac1k$ about the same centre." },
            ],
            steps: [
              { part: "a", reasoning: "The centre is where the lines through corresponding pairs meet. Line $AA'$ through $(2,1),(3,2)$: $y=x-1$. Line $BB'$ through $(4,1),(7,2)$: $y=\\frac13x-\\frac13$.", working: "y=x-1,\\ y=\\frac13x-\\frac13", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Intersect: $x-1=\\frac13x-\\frac13 \\Rightarrow \\frac23x=\\frac23 \\Rightarrow x=1$, $y=0$.", working: "C=(1,0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify $CC'$ passes through $(1,0)$: line through $(2,3),(3,6)$ is $y=3x-3$, and $3(1)-3=0$ ✓.", working: "y=3x-3 \\text{ at } x=1 \\Rightarrow y=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the centre.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Scale factor = image distance ÷ object distance from centre.", working: "k=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the scale factor.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inverse enlargement: same centre, reciprocal scale factor.", working: "k^{-1}=\\frac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State centre and factor.", working: "\\text{centre }(1,0),\\ k=\\frac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write the inverse transformation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) enlargement, centre $(1,0)$ (b) $k=2$ (c) enlargement, centre $(1,0)$, scale factor $\\frac12$",
            commonErrors: ["Finding the centre from only two pairs without verifying the third.", "In (c) using $k=2$ instead of $\\frac12$."],
            examinerNote: "Accept centre found graphically; the algebraic route uses two pairs then verifies the third.",
          },
        },
      ],
    },
    {
      id: "ciem-u7-inverse-combined",
      title: "Inverse and combined transformations",
      skill: "Write inverse transformations and describe combined transformations as a single transformation where possible.",
      lesson: {
        sections: [
          {
            heading: "Inverse transformations",
            body: "- Translation $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ → inverse $\\begin{pmatrix}-a\\\\-b\\end{pmatrix}$\n- Reflection → itself (self-inverse)\n- Rotation $\\theta$ → rotation $-\\theta$ (same centre)\n- Enlargement $k$ → enlargement $\\frac1k$ (same centre)",
          },
          {
            heading: "Combined transformations",
            body: "When two transformations are applied in sequence, describe the result as a **single** transformation if possible. Two reflections in parallel lines = a translation by twice the perpendicular distance. Reflection + rotation often = another single transformation.",
          },
          {
            heading: "Checking your answer",
            body: "Apply the combined transformation to one known point and verify it lands where the sequential transformations would put it.",
          },
        ],
        keyFormulas: [
          { name: "Inverse translation", statement: "$\\begin{pmatrix}-a\\\\-b\\end{pmatrix}$" },
          { name: "Inverse rotation", statement: "Same centre, opposite angle" },
          { name: "Inverse enlargement", statement: "Same centre, $k\\to\\frac1k$" },
          { name: "Two reflections", statement: "Parallel mirror lines → translation by $2\\times$ gap" },
        ],
        workedExample: {
          problem: "A shape is translated by $\\begin{pmatrix}3\\\\1\\end{pmatrix}$ then reflected in the $x$-axis. Write the inverse of the combined transformation.",
          solution: "Inverse of the reflection is itself; inverse of the translation is $\\begin{pmatrix}-3\\\\-1\\end{pmatrix}$. Undo in reverse order: reflect in $x$-axis, then translate by $\\begin{pmatrix}-3\\\\-1\\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "ciem-u7-inverse-combined-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the inverse of a reflection in the line $y=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection in the line $y=2$ (it is self-inverse)" },
              { id: "b", text: "Reflection in the $x$-axis" },
              { id: "c", text: "Translation by $(0,4)$" },
              { id: "d", text: "Rotation $180^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Self-inverse", statement: "Every reflection is its own inverse." },
            ],
            steps: [
              { reasoning: "Recall reflections are self-inverse.", working: "\\text{same reflection}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Reflection in $y=2$",
            commonErrors: ["Thinking the inverse is a different line."],
          },
        },
        {
          id: "ciem-u7-inverse-combined-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write down the inverse of the transformation 'rotation $90^\\circ$ anticlockwise about $(2,3)$'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inverse rotation", statement: "Same centre, opposite direction/angle." },
            ],
            steps: [
              { reasoning: "Reverse the direction, keep the centre.", working: "90^\\circ\\text{ clockwise about }(2,3)", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Rotation $90^\\circ$ clockwise about $(2,3)$",
            commonErrors: ["Changing the centre or using $270^\\circ$ without specifying direction clearly — accept $270^\\circ$ anticlockwise."],
          },
        },
        {
          id: "ciem-u7-inverse-combined-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape is reflected in the line $x=1$, then reflected in the line $x=4$. Describe the single transformation equivalent to this combination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Two reflections", statement: "Reflections in parallel lines combine to a translation by twice the perpendicular distance." },
            ],
            steps: [
              { reasoning: "The lines $x=1$ and $x=4$ are parallel, $3$ units apart.", working: "\\text{gap}=3", marks: 1, markCode: "M" },
              { reasoning: "Combined effect is a translation by $2\\times3=6$ units in the direction from first to second mirror.", working: "6\\text{ units right}", marks: 1, markCode: "M" },
              { reasoning: "State the single transformation.", working: "\\text{translation by }\\begin{pmatrix}6\\\\0\\end{pmatrix}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Translation by $\\begin{pmatrix}6\\\\0\\end{pmatrix}$ (6 units to the right)",
            commonErrors: ["Translating by $3$ instead of $6$."],
          },
        },
        {
          id: "ciem-u7-inverse-combined-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Point $P(5,2)$ is transformed by: (1) reflection in the $x$-axis, (2) translation by $\\begin{pmatrix}1\\\\3\\end{pmatrix}$, (3) enlargement centre $(0,0)$ scale factor $2$.",
          parts: [
            { label: "a", prompt: "Find the final image $P'''$.", marks: 4 },
            { label: "b", prompt: "Write the inverse of the combined transformation.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse order", statement: "Undo transformations in reverse order." },
            ],
            steps: [
              { part: "a", reasoning: "Step 1: reflect in $x$-axis: $(5,-2)$.", working: "(5,-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Step 2: translate: $(5+1,-2+3)=(6,1)$.", working: "(6,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Step 3: enlarge by $2$ from origin: $(12,2)$.", working: "(12,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the final image.", working: "P'''=(12,2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Inverse of enlargement $k=2$ is $k=\\frac12$ about $(0,0)$ — apply first.", working: "\\times\\frac12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inverse of translation is $\\begin{pmatrix}-1\\\\-3\\end{pmatrix}$.", working: "\\begin{pmatrix}-1\\\\-3\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inverse of reflection in $x$-axis is itself — apply last.", working: "\\text{reflect in }x\\text{-axis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the sequence.", working: "\\text{enlarge }\\frac12,\\ \\text{translate }\\begin{pmatrix}-1\\\\-3\\end{pmatrix},\\ \\text{reflect}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete the description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(12,2)$ (b) enlargement $\\frac12$ about $(0,0)$, then translation $\\begin{pmatrix}-1\\\\-3\\end{pmatrix}$, then reflection in $x$-axis",
            commonErrors: ["In (b) reversing the order — inverses must undo in reverse sequence."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u7-inverse-notes",
      title: "Identifying and inverse transformations — revision notes",
      summary: "Describing transformations from object–image pairs, inverse transformations, and combined transformations.",
      sections: [
        {
          heading: "Identifying",
          body: "- Translation: same vector for every point\n- Reflection: mirror line = perpendicular bisector of object–image segments\n- Rotation: centre = intersection of perpendicular bisectors\n- Enlargement: centre on lines through corresponding pairs",
        },
        {
          heading: "Inverses",
          body: "- Translation $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ → $\\begin{pmatrix}-a\\\\-b\\end{pmatrix}$\n- Reflection → itself\n- Rotation $\\theta$ → $-\\theta$ same centre\n- Enlargement $k$ → $\\frac1k$ same centre",
        },
        {
          heading: "Combined",
          body: "Two reflections in parallel lines → translation by $2\\times$ gap. Always undo combined transformations in reverse order.",
        },
      ],
    },
  ],
};
