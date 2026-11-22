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
              { id: "a", text: "Rotation $180^\\circ$" },
              { id: "b", text: "Reflection in the $y$-axis" },
              { id: "c", text: "Translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$" },
              { id: "d", text: "Enlargement scale factor $-1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translation", statement: "Every point moves by the same vector." },
            ],
            steps: [
              { reasoning: "All points move identically — a translation.", working: "\\begin{pmatrix}-3\\\\2\\end{pmatrix}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$",
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
        {
          id: "ciem-u7-identifying-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Every point of a shape moves by the same vector. What type of transformation is this?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reflection" },
            { id: "b", text: "Translation" },
            { id: "c", text: "Rotation" },
            { id: "d", text: "Enlargement" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Translation", statement: "Every point moves by the same vector." } ],
            steps: [ { reasoning: "Equal displacement for all points indicates translation.", working: "\\text{translation}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** Translation", commonErrors: ["Confusing with enlargement."] },
        },
        {
          id: "ciem-u7-identifying-q6", difficulty: "core", totalMarks: 1,
          stem: "Points $(1,1)\\to(1,-1)$ and $(2,1)\\to(2,-1)$. Describe the transformation.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reflection in the $x$-axis" },
            { id: "b", text: "Translation by $\\begin{pmatrix}0\\\\-2\\end{pmatrix}$" },
            { id: "c", text: "Rotation $180^\\circ$" },
            { id: "d", text: "Reflection in the $y$-axis" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Reflection", statement: "Only the $y$-coordinates change sign." } ],
            steps: [ { reasoning: "The mapping is $(x,y)\\to(x,-y)$.", working: "\\text{reflection in }x\\text{-axis}", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** Reflection in the $x$-axis", commonErrors: ["Choosing reflection in the $y$-axis."] },
        },
        {
          id: "ciem-u7-identifying-q7", difficulty: "core", totalMarks: 2,
          stem: "Point $P(5,2)$ maps to $P'(2,7)$. Find the translation vector.",
          response: { type: "numeric", parts: [ { label: "x", answer: -3 }, { label: "y", answer: 5 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Translation vector", statement: "$\\vec{v}=\\text{image}-\\text{object}$" } ],
            steps: [
              { reasoning: "Subtract object from image.", working: "(2-5,7-2)=(-3,5)", marks: 1, markCode: "M" },
              { reasoning: "State the vector components.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\begin{pmatrix}-3\\\\5\\end{pmatrix}$", commonErrors: ["Reversing the subtraction."] },
        },
        {
          id: "ciem-u7-identifying-q8", difficulty: "challenge", totalMarks: 1,
          stem: "Point $(4,1)$ maps to $(1,4)$ and $(2,5)$ maps to $(5,2)$. Describe the transformation.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reflection in the $x$-axis" },
            { id: "b", text: "Rotation $90^\\circ$ anticlockwise" },
            { id: "c", text: "Translation by $\\begin{pmatrix}-3\\\\3\\end{pmatrix}$" },
            { id: "d", text: "Reflection in the line $y=x$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" } ],
            steps: [ { reasoning: "Both pairs swap coordinates.", working: "(x,y)\\to(y,x)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** Reflection in $y=x$", commonErrors: ["Forcing a rotation."] },
        },
        {
          id: "ciem-u7-identifying-q9", difficulty: "core", totalMarks: 2,
          stem: "Point $P(2,6)$ is reflected to $P'(6,2)$. Find the midpoint of $PP'$.",
          response: { type: "numeric", parts: [ { label: "x", answer: 4 }, { label: "y", answer: 4 } ] },
          markscheme: { principles: [ { kind: "property", name: "Reflection", statement: "The mirror line is the perpendicular bisector of $PP'$." } ],
            steps: [
              { reasoning: "Average the coordinates.", working: "M=\\left(\\frac{2+6}{2},\\frac{6+2}{2}\\right)=(4,4)", marks: 1, markCode: "M" },
              { reasoning: "State the midpoint.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(4,4)$", commonErrors: ["Finding the midpoint of the wrong segment."] },
        },
        {
          id: "ciem-u7-identifying-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Under an enlargement with centre $(0,0)$, point $(2,3)$ maps to $(4,6)$. Find the scale factor.",
          response: { type: "numeric", parts: [ { label: "k", answer: 2 }] },
          markscheme: { principles: [ { kind: "formula", name: "Scale factor", statement: "$k=\\frac{\\text{image distance}}{\\text{object distance}}$" } ],
            steps: [
              { reasoning: "Both coordinates double.", working: "k=\\frac42=\\frac63=2", marks: 1, markCode: "M" },
              { reasoning: "State the scale factor.", marks: 1, markCode: "A" } ],
            finalAnswer: "$k=2$", commonErrors: ["Adding instead of multiplying."] },
        },
        {
          id: "ciem-u7-identifying-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A shape and its image have the same size and orientation, and the vectors joining corresponding points are equal and parallel. What is the transformation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Enlargement" },
            { id: "b", text: "Rotation" },
            { id: "c", text: "Reflection" },
            { id: "d", text: "Translation" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Translation", statement: "Equal parallel displacement vectors identify a translation." } ],
            steps: [ { reasoning: "Equal vectors mean the same slide for every point.", working: "\\text{translation}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Translation", commonErrors: ["Choosing rotation."] },
        },
        {
          id: "ciem-u7-identifying-q12", difficulty: "core", totalMarks: 4,
          stem: "Point $A(6,1)$ maps to $A'(1,6)$ under a transformation. Point $B(2,4)$ maps to $B'(4,2)$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" } ],
            steps: [
              { reasoning: "Test the $y=x$ reflection on $A$.", working: "(y,x)=(1,6)", marks: 1, markCode: "M" },
              { reasoning: "Test the same rule on $B$.", working: "(y,x)=(4,2)", marks: 1, markCode: "M" },
              { reasoning: "Both mappings match.", marks: 1, markCode: "M" },
              { reasoning: "State the transformation.", marks: 1, markCode: "A" } ],
            finalAnswer: "Reflection in the line $y=x$", commonErrors: ["Describing it as a rotation."] },
        },
        {
          id: "ciem-u7-identifying-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Under an enlargement with centre $(0,0)$, point $(3,2)$ maps to $(9,6)$. Find the scale factor.",
          response: { type: "numeric", parts: [ { label: "k", answer: 3 }] },
          markscheme: { principles: [ { kind: "formula", name: "Scale factor", statement: "$k=\\frac{\\text{image distance}}{\\text{object distance}}$" } ],
            steps: [
              { reasoning: "Both coordinates triple.", working: "k=\\frac93=\\frac62=3", marks: 1, markCode: "M" },
              { reasoning: "State the scale factor.", marks: 1, markCode: "A" } ],
            finalAnswer: "$k=3$", commonErrors: ["Subtracting coordinates."] },
        },
        {
          id: "ciem-u7-identifying-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Describe the transformation that maps $(2,5)\\to(5,2)$ and $(-1,3)\\to(3,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Reflect y=x", statement: "$(x,y)\\to(y,x)$" } ],
            steps: [
              { reasoning: "Check the first pair.", working: "(y,x)=(5,2)", marks: 1, markCode: "M" },
              { reasoning: "Check the second pair.", working: "(y,x)=(3,-1)", marks: 1, markCode: "M" },
              { reasoning: "State the transformation.", marks: 1, markCode: "A" } ],
            finalAnswer: "Reflection in the line $y=x$", commonErrors: ["Giving only one coordinate mapping."] },
        },
        {
          id: "ciem-u7-identifying-q15", difficulty: "core", totalMarks: 1,
          stem: "To find the centre of an enlargement from object–image pairs, which lines should be drawn?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perpendicular bisectors of object–image segments" },
            { id: "b", text: "Lines joining corresponding object and image points" },
            { id: "c", text: "The coordinate axes" },
            { id: "d", text: "Horizontal lines through the images" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "property", name: "Enlargement centre", statement: "Object, image and centre are collinear." } ],
            steps: [ { reasoning: "The centre lies at the intersection of lines through corresponding pairs.", working: "\\text{join pairs}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** Lines joining corresponding points", commonErrors: ["Using perpendicular bisectors (that is for rotations/reflections)."] },
        },
        {
          id: "ciem-u7-identifying-q16", difficulty: "challenge", totalMarks: 8,
          stem: "Triangle $S$ has vertices $A(1,1)$, $B(3,1)$ and $C(1,4)$. Its image $S'$ has vertices $A'(2,2)$, $B'(6,2)$ and $C'(2,8)$.",
          parts: [
            { label: "a", prompt: "Show that the transformation is an enlargement with centre $(0,0)$.", marks: 3 },
            { label: "b", prompt: "Find the scale factor.", marks: 2 },
            { label: "c", prompt: "Write the inverse transformation.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" }, { kind: "definition", name: "Inverse", statement: "Inverse enlargement: same centre, $k\\to\\frac1k$." } ],
            steps: [
              { part: "a", reasoning: "Each image vector from the origin is twice the object vector.", working: "\\vec{OA'}=2\\vec{OA}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify a second pair.", working: "B'(6,2)=2(3,1),\\ C'(2,8)=2(1,4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclude centre and type.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Scale factor is the coordinate multiplier.", working: "k=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the scale factor.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inverse uses reciprocal scale factor and same centre.", working: "k^{-1}=\\frac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State centre and factor.", working: "\\text{centre }(0,0),\\ k=\\frac12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write the inverse transformation.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) enlargement, centre $(0,0)$ (b) $k=2$ (c) enlargement, centre $(0,0)$, scale factor $\\frac12$",
            commonErrors: ["Using $k=2$ for the inverse."] },
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
              { id: "a", text: "Translation by $(0,4)$" },
              { id: "b", text: "Reflection in the line $y=2$ (it is self-inverse)" },
              { id: "c", text: "Rotation $180^\\circ$" },
              { id: "d", text: "Reflection in the $x$-axis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Self-inverse", statement: "Every reflection is its own inverse." },
            ],
            steps: [
              { reasoning: "Recall reflections are self-inverse.", working: "\\text{same reflection}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reflection in $y=2$",
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
        {
          id: "ciem-u7-inverse-combined-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What is the inverse of a translation by vector $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Translation by $\\begin{pmatrix}3\\\\2\\end{pmatrix}$" },
            { id: "b", text: "Translation by $\\begin{pmatrix}-3\\\\-2\\end{pmatrix}$" },
            { id: "c", text: "Reflection in the $x$-axis" },
            { id: "d", text: "Translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Inverse translation", statement: "$\\begin{pmatrix}-a\\\\-b\\end{pmatrix}$" } ],
            steps: [ { reasoning: "Negate both components.", working: "\\begin{pmatrix}-3\\\\2\\end{pmatrix}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$", commonErrors: ["Negating only one component."] },
        },
        {
          id: "ciem-u7-inverse-combined-q6", difficulty: "core", totalMarks: 1,
          stem: "What is the inverse of a rotation $90^\\circ$ clockwise about the origin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reflection in the $x$-axis" },
            { id: "b", text: "Rotation $90^\\circ$ clockwise about $(0,0)$" },
            { id: "c", text: "Rotation $90^\\circ$ anticlockwise about $(0,0)$" },
            { id: "d", text: "Rotation $180^\\circ$ about $(0,0)$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Inverse rotation", statement: "Same centre, opposite direction." } ],
            steps: [ { reasoning: "Reverse clockwise to anticlockwise.", working: "90^\\circ\\text{ acw}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(c)** Rotation $90^\\circ$ anticlockwise about $(0,0)$", commonErrors: ["Using $180^\\circ$."] },
        },
        {
          id: "ciem-u7-inverse-combined-q7", difficulty: "core", totalMarks: 2,
          stem: "Write down the inverse of an enlargement with centre $(0,0)$ and scale factor $4$.",
          response: { type: "numeric", parts: [ { label: "k", answer: 0.25 }] },
          markscheme: { principles: [ { kind: "definition", name: "Inverse enlargement", statement: "Same centre, $k\\to\\frac1k$." } ],
            steps: [
              { reasoning: "Take the reciprocal of the scale factor.", working: "k^{-1}=\\frac14=0.25", marks: 1, markCode: "M" },
              { reasoning: "State the inverse scale factor.", marks: 1, markCode: "A" } ],
            finalAnswer: "Enlargement, centre $(0,0)$, scale factor $\\frac14$", commonErrors: ["Using $-\\frac14$."] },
        },
        {
          id: "ciem-u7-inverse-combined-q8", difficulty: "challenge", totalMarks: 1,
          stem: "Which transformation is self-inverse?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reflection in the line $y=x$" },
            { id: "b", text: "Enlargement scale factor $2$" },
            { id: "c", text: "Rotation $90^\\circ$ clockwise" },
            { id: "d", text: "Translation by $(1,1)$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Self-inverse", statement: "Reflections are their own inverses." } ],
            steps: [ { reasoning: "Applying the same reflection twice returns the original.", working: "\\text{reflection}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Reflection in $y=x$", commonErrors: ["Thinking rotations are self-inverse."] },
        },
        {
          id: "ciem-u7-inverse-combined-q9", difficulty: "core", totalMarks: 3,
          stem: "Point $P(3,4)$ is translated by $\\begin{pmatrix}1\\\\-2\\end{pmatrix}$ and then reflected in the $x$-axis. Find the final position.",
          response: { type: "numeric", parts: [ { label: "x", answer: 4 }, { label: "y", answer: -2 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" }, { kind: "formula", name: "Reflect x-axis", statement: "$(x,y)\\to(x,-y)$" } ],
            steps: [
              { reasoning: "Apply the translation first.", working: "(3+1,4-2)=(4,2)", marks: 1, markCode: "M" },
              { reasoning: "Reflect in the $x$-axis.", working: "(4,-2)", marks: 1, markCode: "M" },
              { reasoning: "State the final position.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(4,-2)$", commonErrors: ["Reflecting before translating."] },
        },
        {
          id: "ciem-u7-inverse-combined-q10", difficulty: "foundation", totalMarks: 2,
          stem: "A point is reflected in the line $y=0$ and then in the line $y=4$. What single translation is equivalent?",
          response: { type: "numeric", parts: [ { label: "x", answer: 0 }, { label: "y", answer: 8 } ] },
          markscheme: { principles: [ { kind: "property", name: "Two reflections", statement: "Parallel mirror lines give a translation by twice the gap." } ],
            steps: [
              { reasoning: "The gap is $4$, so the translation is $2\\times4$ vertically.", working: "(0,8)", marks: 1, markCode: "M" },
              { reasoning: "State the vector.", marks: 1, markCode: "A" } ],
            finalAnswer: "Translation by $\\begin{pmatrix}0\\\\8\\end{pmatrix}$", commonErrors: ["Using the gap once instead of twice."] },
        },
        {
          id: "ciem-u7-inverse-combined-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A shape is translated by $\\begin{pmatrix}2\\\\0\\end{pmatrix}$ and then by $\\begin{pmatrix}3\\\\1\\end{pmatrix}$. Which single translation is equivalent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\begin{pmatrix}1\\\\1\\end{pmatrix}$" },
            { id: "b", text: "$\\begin{pmatrix}5\\\\1\\end{pmatrix}$" },
            { id: "c", text: "$\\begin{pmatrix}6\\\\0\\end{pmatrix}$" },
            { id: "d", text: "$\\begin{pmatrix}5\\\\-1\\end{pmatrix}$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Combined translations", statement: "Add the vectors." } ],
            steps: [ { reasoning: "Add the components.", working: "(2+3,0+1)=(5,1)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $\\begin{pmatrix}5\\\\1\\end{pmatrix}$", commonErrors: ["Subtracting vectors."] },
        },
        {
          id: "ciem-u7-inverse-combined-q12", difficulty: "core", totalMarks: 4,
          stem: "A transformation is: enlargement with centre $(0,0)$ and scale factor $3$, followed by reflection in the $x$-axis. Write the inverse transformation.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "definition", name: "Inverse order", statement: "Undo in reverse order; reflection is self-inverse, enlargement inverse has $k=\\frac13$." } ],
            steps: [
              { reasoning: "Inverse of the reflection is itself.", working: "\\text{reflect in }x\\text{-axis}", marks: 1, markCode: "M" },
              { reasoning: "Inverse of the enlargement uses $\\frac13$ about the same centre.", working: "k=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "State the reverse order.", working: "\\text{reflect, then enlarge }\\frac13", marks: 1, markCode: "M" },
              { reasoning: "Write the full inverse.", marks: 1, markCode: "A" } ],
            finalAnswer: "Reflection in the $x$-axis, then enlargement centre $(0,0)$ scale factor $\\frac13$",
            commonErrors: ["Using scale factor $3$ or the wrong order."] },
        },
        {
          id: "ciem-u7-inverse-combined-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Point $(2,3)$ is enlarged with centre $(0,0)$ and scale factor $2$, then translated by $\\begin{pmatrix}-1\\\\1\\end{pmatrix}$. Find the final position.",
          response: { type: "numeric", parts: [ { label: "x", answer: 3 }, { label: "y", answer: 7 } ] },
          markscheme: { principles: [ { kind: "formula", name: "Enlargement", statement: "$\\vec{OP'}=k\\vec{OP}$" }, { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" } ],
            steps: [
              { reasoning: "Enlarge first.", working: "(2,3)\\to(4,6)", marks: 1, markCode: "M" },
              { reasoning: "Apply the translation.", working: "(4-1,6+1)=(3,7)", marks: 1, markCode: "M" },
              { reasoning: "State the final position.", marks: 1, markCode: "A" } ],
            finalAnswer: "$(3,7)$", commonErrors: ["Translating before enlarging."] },
        },
        {
          id: "ciem-u7-inverse-combined-q14", difficulty: "foundation", totalMarks: 3,
          stem: "A shape is reflected in the $y$-axis and then in the $x$-axis. Show that the combined transformation is a rotation $180^\\circ$ about the origin.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Composition of reflections", statement: "Reflect $y$-axis then $x$-axis gives $(x,y)\\to(-x,-y)$." } ],
            steps: [
              { reasoning: "Reflect in the $y$-axis.", working: "(x,y)\\to(-x,y)", marks: 1, markCode: "M" },
              { reasoning: "Reflect the result in the $x$-axis.", working: "(-x,y)\\to(-x,-y)", marks: 1, markCode: "M" },
              { reasoning: "Identify the single transformation.", marks: 1, markCode: "A" } ],
            finalAnswer: "Rotation $180^\\circ$ about $(0,0)$", commonErrors: ["Leaving it as two reflections."] },
        },
        {
          id: "ciem-u7-inverse-combined-q15", difficulty: "core", totalMarks: 1,
          stem: "What is the inverse of a rotation $60^\\circ$ clockwise about $(1,1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rotation $60^\\circ$ clockwise about $(1,1)$" },
            { id: "b", text: "Rotation $120^\\circ$ anticlockwise about $(0,0)$" },
            { id: "c", text: "Reflection in $y=x$" },
            { id: "d", text: "Rotation $60^\\circ$ anticlockwise about $(1,1)$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Inverse rotation", statement: "Same centre, opposite direction." } ],
            steps: [ { reasoning: "Reverse the direction and keep the centre.", working: "60^\\circ\\text{ acw about }(1,1)", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Rotation $60^\\circ$ anticlockwise about $(1,1)$", commonErrors: ["Changing the centre."] },
        },
        {
          id: "ciem-u7-inverse-combined-q16", difficulty: "challenge", totalMarks: 8,
          stem: "Transformation $T_1$ is a translation by $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$. Transformation $T_2$ is a rotation $90^\\circ$ clockwise about the origin. Point $P(1,2)$ is transformed by $T_1$ then $T_2$.",
          parts: [
            { label: "a", prompt: "Find the final position of $P$.", marks: 3 },
            { label: "b", prompt: "Write the inverse of $T_1$.", marks: 2 },
            { label: "c", prompt: "Write the inverse of $T_2$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Translation", statement: "$(x,y)\\to(x+a,y+b)$" }, { kind: "formula", name: "Rotate 90° cw", statement: "$(x,y)\\to(y,-x)$" }, { kind: "definition", name: "Inverses", statement: "Translation inverse negates the vector; rotation inverse reverses direction." } ],
            steps: [
              { part: "a", reasoning: "Apply $T_1$.", working: "(1+3,2-2)=(4,0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Apply $T_2$ clockwise.", working: "(y,-x)=(0,-4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the final position.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Negate the translation vector.", working: "\\begin{pmatrix}-3\\\\2\\end{pmatrix}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inverse translation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reverse clockwise to anticlockwise about the same centre.", working: "90^\\circ\\text{ acw about }(0,0)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State centre and direction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write the inverse rotation.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $(0,-4)$ (b) translation by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$ (c) rotation $90^\\circ$ anticlockwise about $(0,0)$",
            commonErrors: ["Applying $T_2$ before $T_1$.", "Using $180^\\circ$ for the inverse rotation."] },
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
