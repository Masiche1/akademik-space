import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "geo-u3-3-1",
  code: "3-1",
  title: "Rigid Transformations",
  goal: "I CAN describe and apply rigid transformations on the coordinate plane, compose them, and use them to reason about congruence and symmetry.",
  standards: ["HSG-CO.A.2", "HSG-CO.A.3", "HSG-CO.A.4", "HSG-CO.A.5", "HSG-CO.B.6"],
  vocabulary: [
    { term: "Rigid transformation", definition: "A transformation that preserves distances and angle measures, so the image is congruent to the original." },
    { term: "Translation", definition: "A transformation that moves every point the same directed distance, represented by a vector." },
    { term: "Reflection", definition: "A transformation that flips points across a line so the line is the perpendicular bisector of each point-image segment." },
    { term: "Rotation", definition: "A transformation that turns every point through the same angle about a fixed center." },
    { term: "Composition", definition: "The result of applying two or more transformations in a stated order." },
    { term: "Line of symmetry", definition: "A line that reflects a figure onto itself." },
  ],
  concepts: [
    {
      id: "geo-u3-rigid-coordinate-rules",
      title: "Coordinate rules for rigid motions",
      skill: "Use coordinate rules to translate, reflect, and rotate points and figures in the plane.",
      lesson: {
        sections: [
          {
            heading: "Translations and reflections",
            body: "A translation by vector $\\langle a,b\\rangle$ adds $a$ to each $x$-coordinate and $b$ to each $y$-coordinate: $(x,y)\\mapsto(x+a,y+b)$. The same vector moves every vertex, so side lengths and angles do not change.\n\nCommon reflection rules are across the $x$-axis, $(x,y)\\mapsto(x,-y)$; across the $y$-axis, $(x,y)\\mapsto(-x,y)$; and across $y=x$, $(x,y)\\mapsto(y,x)$. A reflection reverses orientation but preserves lengths and angle measures.",
          },
          {
            heading: "Rotations about the origin",
            body: "For a counterclockwise turn about the origin, a quarter-turn is $(x,y)\\mapsto(-y,x)$, a half-turn is $(x,y)\\mapsto(-x,-y)$, and a three-quarter-turn is $(x,y)\\mapsto(y,-x)$. Clockwise turns use the corresponding counterclockwise turn in the opposite direction.\n\nApply the rule to every vertex. Keep the coordinates in ordered-pair form and check the signs: a $90^\\circ$ clockwise rotation sends $(x,y)$ to $(y,-x)$.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x,y)\\mapsto(x+a,y+b)$" },
          { name: "Reflection rules", statement: "Across $x$-axis: $(x,-y)$; across $y$-axis: $(-x,y)$; across $y=x$: $(y,x)$" },
          { name: "Origin rotations", statement: "$90^\\circ$ counterclockwise: $(-y,x)$; $180^\\circ$: $(-x,-y)$; $90^\\circ$ clockwise: $(y,-x)$" },
        ],
        workedExample: {
          problem: "Point $P(-3,2)$ is rotated $90^\\circ$ clockwise about the origin, then translated by $\\langle 4,-1\\rangle$. Find its final image.",
          solution: "First rotate: $(x,y)\\mapsto(y,-x)$, so $P(-3,2)\\mapsto(2,3)$. Then add the translation vector: $(2+4,3-1)=(6,2)$. The final image is $P''(6,2)$.",
        },
      },
      questions: [
        {
          id: "geo-u3-rigid-coordinate-rules-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A point $P(-2,5)$ is translated by vector $\\langle 3,-4\\rangle$. Which are the coordinates of its image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1,1)$" },
              { id: "b", text: "$(-5,9)$" },
              { id: "c", text: "$(1,9)$" },
              { id: "d", text: "$(-6,1)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Translation rule", statement: "A translation by $\\langle a,b\\rangle$ sends $(x,y)$ to $(x+a,y+b)$." },
            ],
            steps: [
              { reasoning: "Add the horizontal component to the $x$-coordinate and the vertical component to the $y$-coordinate.", working: "(-2+3,5-4)=(1,1)", marks: 1, markCode: "M" },
              { reasoning: "The image is the ordered pair obtained from both coordinate changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(1,1)$",
            commonErrors: ["Subtracting 3 from $x$ or adding 4 to $y$ instead of following the signed vector."],
          },
        },
        {
          id: "geo-u3-rigid-coordinate-rules-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Reflect $A(4,-3)$ across the $y$-axis, then rotate the image $180^\\circ$ about the origin. Give the final image's $x$-coordinate.",
          response: { type: "numeric", parts: [{ label: "Final $x$-coordinate", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$y$-axis reflection", statement: "Reflection across the $y$-axis sends $(x,y)$ to $(-x,y)$." },
              { kind: "formula", name: "$180^\\circ$ rotation", statement: "A $180^\\circ$ rotation about the origin sends $(x,y)$ to $(-x,-y)$." },
            ],
            steps: [
              { reasoning: "Reflect the point by changing the sign of its $x$-coordinate only.", working: "A(4,-3)\\mapsto A'(-4,-3)", marks: 1, markCode: "M" },
              { reasoning: "The half-turn changes the signs of both coordinates of the reflected point.", working: "A'(-4,-3)\\mapsto A''(4,3)", marks: 1, markCode: "M" },
              { reasoning: "Read the first coordinate of the final ordered pair.", working: "x_{A''}=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The final image is $(4,3)$, so its $x$-coordinate is $4$.",
            commonErrors: ["Applying the rotation to the original point rather than to the reflected image."],
          },
        },
        {
          id: "geo-u3-rigid-coordinate-rules-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $Q(a,b)$ is reflected across $y=x$ and then rotated $90^\\circ$ clockwise about the origin. Its final image is $Q''(5,-2)$. Find $a$ and $b$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 5 }, { label: "$b$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reflection across $y=x$", statement: "$(x,y)\\mapsto(y,x)$." },
              { kind: "formula", name: "$90^\\circ$ clockwise rotation", statement: "$(x,y)\\mapsto(y,-x)$." },
            ],
            steps: [
              { reasoning: "Reflecting $(a,b)$ swaps the coordinates.", working: "Q'(b,a)", marks: 1, markCode: "M" },
              { reasoning: "Apply the clockwise rotation to the reflected coordinates, not the original point.", working: "Q''=(a,-b)", marks: 1, markCode: "M" },
              { reasoning: "Match the final coordinates to $(5,-2)$.", working: "a=5,\\quad -b=-2", marks: 1, markCode: "A" },
              { reasoning: "Solve for both original coordinates.", working: "a=5,\\quad b=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=5$ and $b=2$.",
            commonErrors: ["Using the coordinates from the intermediate reflected point as the final image."],
          },
        },
        {
          id: "geo-u3-rigid-coordinate-rules-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $ABC$ has vertices $A(-1,2)$, $B(2,2)$, and $C(1,4)$. Rotate the triangle $90^\\circ$ clockwise about the origin, then translate it by vector $\\langle 3,-1\\rangle$. A coordinate plane diagram is described as follows: the horizontal axis is the $x$-axis, the vertical axis is the $y$-axis, the three labeled vertices are at the stated coordinates, and no other points or lines are marked.",
          parts: [
            { label: "a", prompt: "Find the coordinates of $A'$ after the rotation only.", marks: 2 },
            { label: "b", prompt: "Find the final coordinates of $B''$ after both transformations.", marks: 2 },
            { label: "c", prompt: "Find the final coordinates of $C''$ after both transformations.", marks: 2 },
            { label: "d", prompt: "State the single coordinate rule for the combined transformation and use it to verify $A''$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Clockwise quarter-turn", statement: "$(x,y)\\mapsto(y,-x)$." },
              { kind: "formula", name: "Translation", statement: "A translation by $\\langle 3,-1\\rangle$ adds $(3,-1)$ to the point's coordinates." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the clockwise rotation rule to $A(-1,2)$.", working: "A'= (2,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The rotated coordinates are the requested intermediate image.", working: "A'(2,1)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rotate $B(2,2)$ clockwise, then add the translation vector.", working: "B'=(2,-2),\\quad B''=(2+3,-2-1)=(5,-3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the resulting ordered pair.", working: "B''=(5,-3)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rotate $C(1,4)$ clockwise, then add the translation vector.", working: "C'=(4,-1),\\quad C''=(4+3,-1-1)=(7,-2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the resulting ordered pair.", working: "C''=(7,-2)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute the clockwise rotation rule into the translation to combine the two actions.", working: "(x,y)\\mapsto(y,-x)\\mapsto(y+3,-x-1)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply the combined rule to $A$ to verify the result.", working: "A''=(2+3,-(-1)-1)=(5,0)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A'(2,1)$. (b) $B''(5,-3)$. (c) $C''(7,-2)$. (d) Combined rule $(x,y)\\mapsto(y+3,-x-1)$; $A''=(5,0)$.",
            commonErrors: ["Using the counterclockwise rule $(x,y)\\mapsto(-y,x)$ for the clockwise rotation.", "Applying the translation before the rotation despite the stated order."],
          },
        },
      ],
    },
    {
      id: "geo-u3-compositions-congruence-symmetry",
      title: "Compositions, congruence, and symmetry",
      skill: "Explain how compositions of rigid motions establish congruence and identify rotational or reflectional symmetry.",
      lesson: {
        sections: [
          {
            heading: "Composition and congruence",
            body: "A composition is performed in the order stated: $T_2\\circ T_1$ means do $T_1$ first, then $T_2$. A sequence of translations, rotations, and reflections is still a rigid motion. It preserves every distance and angle measure.\n\nTwo figures are **congruent** exactly when a sequence of rigid motions maps one figure onto the other. Corresponding vertices must match, and corresponding side lengths and angles are equal. A dilation is not a rigid motion unless its scale factor has absolute value $1$.",
          },
          {
            heading: "Symmetry as a motion onto itself",
            body: "A line of symmetry reflects a figure onto itself. Rotational symmetry occurs when a rotation of less than $360^\\circ$ about a center maps the figure onto itself. For a regular $n$-gon, the smallest positive rotational symmetry angle is $\\frac{360^\\circ}{n}$.\n\nUse coordinates to verify symmetry: apply the candidate motion to every vertex and check that the resulting set of points is the original set. For example, a square centered at the origin has quarter-turn rotational symmetry because the turn permutes its four vertices.",
          },
        ],
        keyFormulas: [
          { name: "Congruence by rigid motions", statement: "$F\\cong G$ if and only if a composition of translations, rotations, and reflections maps $F$ onto $G$." },
          { name: "Regular polygon rotation", statement: "Smallest positive rotational symmetry angle $=\\frac{360^\\circ}{n}$ for a regular $n$-gon." },
        ],
        workedExample: {
          problem: "A square has vertices $(2,0),(0,2),(-2,0),(0,-2)$. Describe why a $90^\\circ$ counterclockwise rotation maps it onto itself, and state its smallest positive rotational symmetry angle.",
          solution: "The rule $(x,y)\\mapsto(-y,x)$ sends the four vertices respectively to $(0,2),(-2,0),(0,-2),(2,0)$, the same set of vertices. Thus the rotation maps the square onto itself. The square is a regular 4-gon, so its smallest positive rotational symmetry angle is $360^\\circ/4=90^\\circ$.",
        },
      },
      questions: [
        {
          id: "geo-u3-compositions-congruence-symmetry-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement must be true when a sequence of translations, rotations, and reflections maps figure $F$ onto figure $G$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$F$ and $G$ have equal corresponding side lengths and angle measures, so they are congruent." },
              { id: "b", text: "$G$ must be larger than $F$." },
              { id: "c", text: "The order of the transformations does not matter." },
              { id: "d", text: "Only the area is guaranteed to be preserved." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rigid motion", statement: "Translations, rotations, and reflections preserve distances and angle measures." },
              { kind: "definition", name: "Congruence", statement: "Figures are congruent when a rigid motion maps one onto the other." },
            ],
            steps: [
              { reasoning: "Each motion in the sequence preserves lengths and angle measures, so their composition does too.", marks: 1, markCode: "R" },
              { reasoning: "A mapping by rigid motions is precisely the coordinate-free criterion for congruence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Corresponding side lengths and angle measures are equal, so the figures are congruent.",
            commonErrors: ["Assuming composition order is interchangeable; generally, changing the order changes the image."],
          },
        },
        {
          id: "geo-u3-compositions-congruence-symmetry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A regular hexagon is centered at the origin. What is its smallest positive angle of rotational symmetry, in degrees?",
          response: { type: "numeric", parts: [{ label: "Smallest positive angle", answer: 60, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Regular polygon rotational symmetry", statement: "For a regular $n$-gon, the smallest positive angle is $\\frac{360^\\circ}{n}$." },
            ],
            steps: [
              { reasoning: "A regular hexagon has six equally spaced vertices, so one symmetry step is one sixth of a full turn.", working: "\\frac{360^\\circ}{6}", marks: 1, markCode: "M" },
              { reasoning: "Divide a full turn by the number of vertices.", working: "360\\div 6=60", marks: 1, markCode: "A" },
              { reasoning: "State the angle with its degree unit.", working: "60^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60^\\circ$.",
            commonErrors: ["Giving $120^\\circ$, which is a rotational symmetry angle but not the smallest positive one."],
          },
        },
        {
          id: "geo-u3-compositions-congruence-symmetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle $ABC$ has coordinates $A(1,1)$, $B(4,1)$, and $C(2,3)$. A coordinate plane diagram consists of the $x$- and $y$-axes and these three labeled points connected by segments. Reflect the triangle across the $y$-axis, then translate it by $\\langle 5,0\\rangle$. Determine whether the final triangle is congruent to $ABC$ and give the final coordinates of the image of $C$.",
          response: { type: "numeric", parts: [{ label: "$x$-coordinate of $C''$", answer: 3 }, { label: "$y$-coordinate of $C''$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Rigid motions preserve congruence", statement: "A composition of reflections and translations preserves all lengths and angle measures." },
              { kind: "formula", name: "$y$-axis reflection", statement: "$(x,y)\\mapsto(-x,y)$." },
            ],
            steps: [
              { reasoning: "Reflect the vertex $C(2,3)$ by changing the sign of its $x$-coordinate.", working: "C'(-2,3)", marks: 1, markCode: "M" },
              { reasoning: "Translate by adding 5 to $x$ and 0 to $y$.", working: "C''=(-2+5,3)=(3,3)", marks: 1, markCode: "A" },
              { reasoning: "Both transformations are rigid motions, so each distance and angle is preserved by their composition.", marks: 1, markCode: "R" },
              { reasoning: "Therefore the image triangle is congruent to the original triangle.", working: "A''B''C''\\cong ABC", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The image of $C$ is $C''(3,3)$, and the triangles are congruent because reflection and translation preserve lengths and angles.",
            commonErrors: ["Claiming the figures are not congruent because the orientation has changed."],
          },
        },
        {
          id: "geo-u3-compositions-congruence-symmetry-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangle $ABCD$ has vertices $A(-3,2)$, $B(3,2)$, $C(3,-2)$, and $D(-3,-2)$ in order. A coordinate plane diagram is described as the four labeled points connected consecutively to form a rectangle centered at the origin, with both coordinate axes shown. Use the coordinates to analyze its symmetries and the rigid motions that relate it to a second congruent rectangle.",
          parts: [
            { label: "a", prompt: "Give the coordinates of the image of $A$ after a $180^\\circ$ rotation about the origin.", marks: 2 },
            { label: "b", prompt: "State one line of reflectional symmetry of $ABCD$ and explain briefly why it is a symmetry.", marks: 2 },
            { label: "c", prompt: "A second rectangle is obtained by translating $ABCD$ by $\\langle -2,5\\rangle$. Give the image of $C$.", marks: 2 },
            { label: "d", prompt: "Justify that the second rectangle is congruent to $ABCD$ and name the transformation that maps one onto the other.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$180^\\circ$ rotation", statement: "$(x,y)\\mapsto(-x,-y)$." },
              { kind: "definition", name: "Line symmetry", statement: "A line of symmetry reflects a figure onto itself." },
              { kind: "property", name: "Translation", statement: "A translation preserves all distances and angle measures." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the half-turn rule to $A(-3,2)$.", working: "A'=(-(-3),-2)=(3,-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the image coordinate.", working: "A'(3,-2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The $x$-axis is a symmetry line: reflection sends the top vertices to the bottom vertices and vice versa.", working: "(x,y)\\mapsto(x,-y)", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The reflected set of vertices is again the same rectangle.", working: "A\\leftrightarrow D,\\quad B\\leftrightarrow C", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the translation vector to $C(3,-2)$.", working: "C''=(3-2,-2+5)=(1,3)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the image coordinate.", working: "C''(1,3)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The stated translation maps every vertex by the same vector and preserves lengths and angles.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A rigid motion mapping the first rectangle to the second establishes congruence.", working: "A'B'C'D'\\cong ABCD", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A'(3,-2)$. (b) The $x$-axis; it swaps the top and bottom vertices. (c) $C''(1,3)$. (d) The translation by $\\langle-2,5\\rangle$ preserves lengths and angles, so the rectangles are congruent.",
            commonErrors: ["Calling the $y$-axis a reflection symmetry: this rectangle is wider than it is tall, so that reflection does not preserve its vertex set.", "Adding 2 to the $x$-coordinate in part (c) instead of translating left by 2."],
          },
        },
      ],
    },
  ],
};
