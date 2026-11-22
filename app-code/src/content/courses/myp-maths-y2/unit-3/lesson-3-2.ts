import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypm2-u3-lesson-3-2",
  code: "3-2",
  title: "Transformations and Constructions",
  goal: "I CAN reflect, rotate, translate and enlarge shapes, describe transformations, use similarity, bearings and scale drawings, and find angles in parallel lines with reasons.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
    "Criterion C: Communicating",
    "MYP Maths: Geometry and trigonometry",
  ],
  vocabulary: [
    { term: "Transformation", definition: "A rule that moves or changes a shape: reflection, rotation, translation or enlargement." },
    { term: "Column vector", definition: "A pair of numbers written one above the other that gives a translation: the top number is the move right (negative for left), the bottom number is the move up (negative for down)." },
    { term: "Scale factor", definition: "The number by which every length of a shape is multiplied in an enlargement." },
    { term: "Congruent", definition: "Exactly the same shape and size. One shape can be moved onto the other by reflection, rotation or translation." },
    { term: "Similar", definition: "The same shape but possibly a different size. Corresponding angles are equal and corresponding sides are in the same ratio." },
    { term: "Bearing", definition: "A direction given as an angle measured clockwise from north, written with three figures, for example 045 degrees." },
    { term: "Co-interior angles", definition: "Two angles between parallel lines on the same side of a transversal. They add up to 180 degrees." },
  ],
  concepts: [
    {
      id: "mypm2-u3-transformations",
      title: "Reflection, rotation, translation and enlargement",
      skill: "Transform shapes and points using reflections, rotations, translations with column vectors and enlargements, and describe them in words and coordinates.",
      lesson: {
        sections: [
          {
            heading: "Reflection, rotation and translation",
            body: "A **reflection** needs a mirror line, such as the $x$-axis or $y$-axis. In the $x$-axis, $(x,y)\\to(x,-y)$. In the $y$-axis, $(x,y)\\to(-x,y)$. A **rotation** needs a centre, an angle and a direction. A $90^\\circ$ clockwise turn about the origin sends $(x,y)$ to $(y,-x)$. A **translation** by the column vector $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ moves every point $a$ right and $b$ up, so $(x,y)\\to(x+a,y+b)$. These three transformations keep the size and shape, so the image is congruent to the object.",
          },
          {
            heading: "Enlargement",
            body: "An **enlargement** needs a centre and a scale factor $k$. Each point moves so that its distance from the centre is multiplied by $k$. Lengths are multiplied by $k$ and angles stay the same. Areas are multiplied by $k^2$. A scale factor between 0 and 1 makes the shape smaller.",
          },
          {
            heading: "Describing a transformation",
            body: "To describe a transformation fully, name it and give all of its details: for a reflection the mirror line, for a rotation the centre, angle and direction, for a translation the vector, and for an enlargement the centre and scale factor.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "$(x,y)\\to(x+a,\\,y+b)$ for the vector $\\begin{pmatrix}a\\\\b\\end{pmatrix}$" },
          { name: "Enlargement, lengths", statement: "image length $=k\\times$ object length" },
          { name: "Enlargement, areas", statement: "image area $=k^2\\times$ object area" },
        ],
        workedExample: {
          problem: "Point $P(2,5)$ is reflected in the $y$-axis and then translated by $\\begin{pmatrix}1\\\\-3\\end{pmatrix}$. Find the final position.",
          solution: "Reflection in the $y$-axis: $(2,5)\\to(-2,5)$. Translation: $(-2+1,\\,5-3)=(-1,2)$.",
        },
      },
      questions: [
        {
          id: "mypm2-u3-transformations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(3,2)$ is reflected in the $y$-axis. What are the coordinates of its image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3,-2)$" },
              { id: "b", text: "$(2,3)$" },
              { id: "c", text: "$(-3,2)$" },
              { id: "d", text: "$(3,-2)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection in the y-axis", statement: "A reflection in the $y$-axis changes the sign of the $x$-coordinate and keeps the $y$-coordinate: $(x,y)\\to(-x,y)$." },
            ],
            steps: [
              { reasoning: "The point is the same distance from the $y$-axis on the other side, so only $x$ changes sign.", working: "(3,2)\\to(-3,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(-3,2)$",
            commonErrors: ["Reflecting in the $x$-axis instead (answer a).", "Changing both signs, which is a rotation of $180^\\circ$ (answer c).", "Swapping the coordinates, which is a reflection in $y=x$ (answer d)."],
          },
        },
        {
          id: "mypm2-u3-transformations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $A(2,-1)$ is translated by the column vector $\\begin{pmatrix}-3\\\\4\\end{pmatrix}$. Find the coordinates of the image of $A$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: -1 },
              { label: "y-coordinate", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Column vector", statement: "The top number is the horizontal move (right positive) and the bottom number is the vertical move (up positive)." },
            ],
            steps: [
              { reasoning: "Move 3 left and 4 up by adding the vector to the coordinates.", working: "(2+(-3),\\,-1+4)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "(-1,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-1,3)$",
            commonErrors: ["Subtracting the vector instead of adding it, giving $(5,-5)$.", "Using the top number for the vertical move."],
          },
        },
        {
          id: "mypm2-u3-transformations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The point $A(3,2)$ is enlarged with scale factor $3$ about the centre $C(1,1)$. Find the coordinates of the image of $A$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: 7 },
              { label: "y-coordinate", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enlargement", statement: "The vector from the centre to the image is the scale factor times the vector from the centre to the object." },
            ],
            steps: [
              { reasoning: "Find the vector from the centre $C$ to $A$.", working: "(3-1,\\,2-1)=(2,1)", marks: 1, markCode: "M" },
              { reasoning: "Multiply this vector by the scale factor 3.", working: "3\\times(2,1)=(6,3)", marks: 1, markCode: "M" },
              { reasoning: "Add the result to the coordinates of the centre.", working: "(1+6,\\,1+3)=(7,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(7,4)$",
            commonErrors: ["Multiplying the coordinates of $A$ by 3 directly, giving $(9,6)$, which is only correct for a centre at the origin.", "Forgetting to add the centre back, giving $(6,3)$."],
          },
        },
        {
          id: "mypm2-u3-transformations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Triangle $ABC$ has vertices $A(1,1)$, $B(3,1)$ and $C(3,4)$. It is transformed in several different ways. In each part, start again from triangle $ABC$.",
          parts: [
            { label: "a", prompt: "Triangle $ABC$ is reflected in the $x$-axis. Write down the coordinates of the image of $C$.", marks: 2 },
            { label: "b", prompt: "Triangle $ABC$ is rotated $90^\\circ$ clockwise about the origin. Write down the coordinates of the image of $C$.", marks: 2 },
            { label: "c", prompt: "Triangle $ABC$ is enlarged with scale factor $2$ about the origin. Work out the area of the image.", marks: 2 },
            { label: "d", prompt: "Investigate how the area of the image depends on the scale factor $k$. Use your pattern to find the area of the image for $k=5$, and explain the pattern.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x-coordinate of C'", answer: 3 },
              { label: "(a) y-coordinate of C'", answer: -4 },
              { label: "(b) x-coordinate of C'", answer: 4 },
              { label: "(b) y-coordinate of C'", answer: -3 },
              { label: "(c) Area of enlarged triangle", answer: 12, unit: "square units" },
              { label: "(d) Area when k = 5", answer: 75, unit: "square units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection in the x-axis", statement: "$(x,y)\\to(x,-y)$." },
              { kind: "property", name: "Rotation of 90 degrees clockwise about the origin", statement: "$(x,y)\\to(y,-x)$." },
              { kind: "property", name: "Area scale factor", statement: "An enlargement with scale factor $k$ multiplies areas by $k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "A reflection in the $x$-axis changes the sign of the $y$-coordinate.", working: "(3,4)\\to(3,-4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the image of $C$.", working: "C'=(3,-4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "For a $90^\\circ$ clockwise turn about the origin, $(x,y)\\to(y,-x)$.", working: "(3,4)\\to(4,-3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the image of $C$.", working: "C'=(4,-3)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The original triangle has base $AB=2$ and height $BC=3$, so its area is $\\frac12\\times2\\times3=3$. Lengths double, so the area is multiplied by $2^2=4$.", working: "3\\times4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The areas for $k=1,2,3$ are $3,12,27$, which are $3k^2$. For $k=5$ the area is $3\\times25=75$.", working: "3\\times5^2=75", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Both the base and the height are multiplied by $k$, so the area is multiplied by $k\\times k=k^2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(3,-4)$ (b) $(4,-3)$ (c) $12$ square units (d) $75$ square units, because area scales by $k^2$",
            commonErrors: ["Rotating anticlockwise and getting $(-4,3)$.", "Doubling the area to 6 instead of multiplying by 4.", "Saying the area is $3k$."],
            examinerNote: "In (d) the R mark needs a reason that refers to both dimensions being multiplied by k.",
          },
        },
        {
          id: "mypm2-u3-transformations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(-4,3)$ is reflected in the $x$-axis. What are the coordinates of its image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-4,3)$" },
              { id: "b", text: "$(4,-3)$" },
              { id: "c", text: "$(4,3)$" },
              { id: "d", text: "$(-4,-3)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection in the x-axis", statement: "$(x,y)\\to(x,-y)$." },
            ],
            steps: [
              { reasoning: "Reflection in the $x$-axis changes the sign of $y$ only.", working: "(-4,3)\\to(-4,-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $(-4,-3)$",
            commonErrors: ["Changing the $x$-coordinate instead (answer b).", "Changing both signs, a $180^\\circ$ rotation (answer c)."],
          },
        },
        {
          id: "mypm2-u3-transformations-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The point $A(1,5)$ is translated by the column vector $\\begin{pmatrix}4\\\\-2\\end{pmatrix}$. Find the coordinates of the image of $A$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: 5 },
              { label: "y-coordinate", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Column vector", statement: "The top number is the horizontal move (right positive); the bottom number is the vertical move (up positive)." },
            ],
            steps: [
              { reasoning: "Add the vector: right 4 and down 2.", working: "(1+4,\\,5-2)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "(5,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5,3)$",
            commonErrors: ["Moving up 2 instead of down, giving $(5,7)$."],
          },
        },
        {
          id: "mypm2-u3-transformations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point $P(2,3)$ is rotated $90^\\circ$ clockwise about the origin. What are the coordinates of its image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,2)$" },
              { id: "b", text: "$(3,-2)$" },
              { id: "c", text: "$(2,-3)$" },
              { id: "d", text: "$(-3,2)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rotation of 90 degrees clockwise", statement: "About the origin, $(x,y)\\to(y,-x)$." },
            ],
            steps: [
              { reasoning: "Apply $(x,y)\\to(y,-x)$: $(2,3)\\to(3,-2)$.", working: "(3,-2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(3,-2)$",
            commonErrors: ["Rotating anticlockwise, giving $(-3,2)$ (answer a).", "Reflecting instead of rotating (answer c)."],
          },
        },
        {
          id: "mypm2-u3-transformations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape is enlarged with scale factor $2$ about the centre $(0,0)$. The image has an area of $48\\ \\text{cm}^2$. What is the area of the original shape?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$48\\ \\text{cm}^2$" },
              { id: "b", text: "$12\\ \\text{cm}^2$" },
              { id: "c", text: "$24\\ \\text{cm}^2$" },
              { id: "d", text: "$6\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Area scale factor", statement: "An enlargement with scale factor $k$ multiplies areas by $k^2$." },
            ],
            steps: [
              { reasoning: "Areas multiply by $2^2=4$, so divide $48$ by 4 to get $12$.", working: "48\\div4=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $12\\ \\text{cm}^2$",
            commonErrors: ["Dividing by 2 instead of $2^2$ (answer a).", "Multiplying instead of dividing (answer d)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-transformations-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The point $B(-2,4)$ is reflected in the $y$-axis and then translated by the column vector $\\begin{pmatrix}3\\\\1\\end{pmatrix}$. Find the final coordinates of the image.",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: 5 },
              { label: "y-coordinate", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection in the y-axis", statement: "$(x,y)\\to(-x,y)$." },
            ],
            steps: [
              { reasoning: "Reflect in the $y$-axis: $(-2,4)\\to(2,4)$.", working: "(2,4)", marks: 1, markCode: "M" },
              { reasoning: "Translate by $(3,1)$: $(2+3,\\,4+1)$.", working: "(5,5)", marks: 1, markCode: "M" },
              { reasoning: "State the final image.", working: "B'=(5,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5,5)$",
            commonErrors: ["Doing the translation first, or forgetting that the second transformation starts from the image of the first."],
          },
        },
        {
          id: "mypm2-u3-transformations-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a translation does not change the orientation of a shape, but a reflection does.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Orientation", statement: "The order of the vertices around the boundary (clockwise or anticlockwise) determines orientation." },
            ],
            steps: [
              { reasoning: "A translation moves every point by the same vector; the shape is picked up and put down without being flipped, so clockwise stays clockwise.", marks: 1, markCode: "R" },
              { reasoning: "A reflection turns the shape over like a mirror image, so clockwise becomes anticlockwise.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Translation preserves orientation; reflection reverses it.",
            commonErrors: ["Confusing congruence with orientation — a reflected shape is still congruent."],
            examinerNote: "The R marks require a reason, not just a statement.",
          },
        },
        {
          id: "mypm2-u3-transformations-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The point $P(1,2)$ is enlarged with scale factor $-2$ about the centre $(0,0)$. What are the coordinates of the image?",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: -2 },
              { label: "y-coordinate", answer: -4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative scale factor", statement: "A negative scale factor also reflects the shape through the centre." },
            ],
            steps: [
              { reasoning: "Multiply the distance from the centre by $-2$: the image is on the opposite side of the centre.", working: "-2\\times(1,2)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "(-2,-4)", marks: 1, markCode: "A" },
              { reasoning: "Note the point has been reflected through the origin as well as enlarged.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$(-2,-4)$",
            commonErrors: ["Treating $-2$ as scale factor 2, giving $(2,4)$.", "Giving $(2,-4)$ or $(-2,4)$."],
            examinerNote: "R1 for recognising the reflection component.",
          },
        },
        {
          id: "mypm2-u3-transformations-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Triangle $ABC$ with $A(0,0)$, $B(4,0)$ and $C(0,3)$ is enlarged with scale factor $3$ about the origin. Which is true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The image is congruent to the object" },
              { id: "b", text: "The image has $9$ times the area" },
              { id: "c", text: "The image has $3$ times the perimeter" },
              { id: "d", text: "Both b and c are true" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Enlargement scale factors", statement: "Lengths multiply by $k$, areas by $k^2$, perimeters by $k$." },
            ],
            steps: [
              { reasoning: "With $k=3$: area $\\times3^2=9$, perimeter $\\times3$, so both (b) and (c) are true.", working: "9\\times\\text{area};\\ 3\\times\\text{perimeter}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Both b and c are true",
            commonErrors: ["Thinking area also multiplies by 3."],
          },
        },
        {
          id: "mypm2-u3-transformations-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how you would describe the single transformation that maps triangle $PQR$ onto triangle $P'Q'R'$, given that $P'Q'R'$ is the mirror image of $PQR$ across the line $y=x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection", statement: "A reflection is described by its mirror line; the image is congruent but reversed." },
            ],
            steps: [
              { reasoning: "Identify the type of transformation: the triangles are mirror images, so it is a reflection.", marks: 1, markCode: "R" },
              { reasoning: "Identify the mirror line: points are equidistant from $y=x$, and the line $y=x$ swaps the coordinates of each point.", marks: 1, markCode: "R" },
              { reasoning: "Full description: 'reflection in the line $y=x$'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A reflection in the line $y=x$.",
            commonErrors: ["Describing it as a rotation or translation.", "Naming the line $y=-x$."],
            examinerNote: "The description must include both the type (reflection) and the mirror line.",
          },
        },
        {
          id: "mypm2-u3-transformations-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The point $A(3,-1)$ is transformed by two steps. First it is reflected in the line $y=-x$, then the image is rotated $180^\\circ$ about the origin. Find the final coordinates of the image.",
          response: {
            type: "numeric",
            parts: [
              { label: "x-coordinate", answer: -1 },
              { label: "y-coordinate", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflection in y = -x", statement: "$(x,y)\\to(-y,-x)$." },
              { kind: "property", name: "Rotation of 180 degrees about the origin", statement: "$(x,y)\\to(-x,-y)$." },
            ],
            steps: [
              { reasoning: "Reflect in $y=-x$: $(x,y)\\to(-y,-x)$, so $(3,-1)\\to(1,-3)$.", working: "(1,-3)", marks: 1, markCode: "M" },
              { reasoning: "Rotate $180^\\circ$ about the origin: $(x,y)\\to(-x,-y)$, so $(1,-3)\\to(-1,3)$.", working: "(-1,3)", marks: 1, markCode: "M" },
              { reasoning: "State the final image.", working: "A'=(-1,3)", marks: 1, markCode: "A" },
              { reasoning: "Alternatively, the two transformations together send $(x,y)$ to $(y,x)$, a reflection in $y=x$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$(-1,3)$",
            commonErrors: ["Forgetting that the second transformation acts on the image of the first.", "Using the wrong reflection rule for $y=-x$."],
          },
        },
        {
          id: "mypm2-u3-transformations-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Triangle $ABC$ has vertices $A(1,1)$, $B(4,1)$ and $C(1,3)$.",
          parts: [
            { label: "a", prompt: "Find the coordinates of the image of each vertex after a translation by $\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", marks: 2 },
            { label: "b", prompt: "Find the area of the original triangle.", marks: 1 },
            { label: "c", prompt: "The triangle is then enlarged with scale factor $2$ about the origin. Work out the area of the enlarged triangle.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Image of A", answer: 3, tolerance: 0.01 },
              { label: "(a) Image of A y", answer: 4 },
              { label: "(b) Area of original", answer: 3, unit: "square units" },
              { label: "(c) Area of enlarged", answer: 12, unit: "square units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translation", statement: "$(x,y)\\to(x+2,y+3)$ for the vector $\\begin{pmatrix}2\\\\3\\end{pmatrix}$." },
              { kind: "property", name: "Area scale factor", statement: "Areas multiply by $k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Add 2 to each $x$ and 3 to each $y$: $A'=(3,4)$, $B'=(6,4)$, $C'=(3,6)$.", working: "(3,4),(6,4),(3,6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three images.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Right-angled triangle with base 3 and height 2.", working: "\\frac12\\times3\\times2=3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Lengths double, so area multiplies by $2^2=4$.", working: "3\\times4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Note: the enlargement is about the origin applied to the original triangle (or to the translated one — same area either way).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A'(3,4)$, $B'(6,4)$, $C'(3,6)$ (b) $3$ square units (c) $12$ square units",
            commonErrors: ["Multiplying the area by 2 instead of 4.", "Adding 3 to $x$ and 2 to $y$ (swapping vector components)."],
            examinerNote: "In (a) award M1 for one correct image and A1 for all three.",
          },
        },
        {
          id: "mypm2-u3-transformations-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The square $WXYZ$ has vertices $W(1,1)$, $X(3,1)$, $Y(3,3)$ and $Z(1,3)$. It undergoes a sequence of transformations.",
          parts: [
            { label: "a", prompt: "Find the image of $W$ after a rotation of $90^\\circ$ anticlockwise about the origin.", marks: 2 },
            { label: "b", prompt: "Find the image of $W$ after the square is reflected in the line $y=x$.", marks: 2 },
            { label: "c", prompt: "Work out the area of the original square.", marks: 1 },
            { label: "d", prompt: "The square is enlarged with scale factor $k$ about the centre $(1,1)$. Write down the image area in terms of $k$, and find $k$ if the image area is $36\\ \\text{units}^2$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x-coordinate of W'", answer: -1 },
              { label: "(a) y-coordinate of W'", answer: 1 },
              { label: "(b) x-coordinate of W''", answer: 1 },
              { label: "(b) y-coordinate of W''", answer: 1 },
              { label: "(c) Area of square", answer: 4, unit: "square units" },
              { label: "(d) k", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rotation of 90 degrees anticlockwise", statement: "About the origin, $(x,y)\\to(-y,x)$." },
              { kind: "property", name: "Reflection in y = x", statement: "$(x,y)\\to(y,x)$." },
              { kind: "property", name: "Area scale factor", statement: "Image area $=k^2\\times$ object area." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $(x,y)\\to(-y,x)$: $W(1,1)\\to(-1,1)$.", working: "(-1,1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the image.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply $(x,y)\\to(y,x)$: $W(1,1)\\to(1,1)$.", working: "(1,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the image (it lies on the mirror line, so it is unchanged).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Side length 2, so area $=2^2=4$.", working: "4", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Image area $=4k^2$; set equal to 36.", working: "4k^2=36", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve: $k^2=9$, so $k=3$ (scale factor positive).", working: "k=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the image area formula $4k^2$ units$^2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(-1,1)$ (b) $(1,1)$ (c) $4$ square units (d) image area $=4k^2$; $k=3$",
            commonErrors: ["In (a) rotating clockwise and getting $(1,-1)$.", "In (d) giving $k=\\pm3$ without noting the scale factor is positive."],
            examinerNote: "In (d) accept $k=3$; $k=-3$ is unusual at this level.",
          },
        },
      ],
    },
    {
      id: "mypm2-u3-similarity-bearings",
      title: "Similarity, bearings, scale drawings and parallel lines",
      skill: "Use similar shapes, bearings, scale drawings and the angle rules for parallel lines, giving reasons.",
      lesson: {
        sections: [
          {
            heading: "Symmetry, congruence and similarity",
            body: "A shape has **line symmetry** if a mirror line splits it into two matching halves, and **rotational symmetry** if it fits onto itself in a turn of less than $360^\\circ$. **Congruent** shapes are identical in size and shape. **Similar** shapes have equal corresponding angles and all lengths in the same ratio, the scale factor. If two similar shapes have corresponding sides $a$ and $b$, the scale factor is $b\\div a$.",
          },
          {
            heading: "Bearings and scale drawings",
            body: "A **bearing** is measured clockwise from north and is written with three figures, for example $065^\\circ$. The bearing of $B$ from $A$ and the bearing of $A$ from $B$ differ by $180^\\circ$. A map scale of $1:50\\,000$ means that $1\\ \\text{cm}$ on the map is $50\\,000\\ \\text{cm}=500\\ \\text{m}$ in real life.",
          },
          {
            heading: "Angles in parallel lines",
            body: "When a straight line crosses two parallel lines: **corresponding** angles are equal (F shape), **alternate** angles are equal (Z shape), and **co-interior** angles add up to $180^\\circ$ (C or U shape). Always state the rule you used as the reason.",
          },
        ],
        keyFormulas: [
          { name: "Similar shapes", statement: "scale factor $=\\dfrac{\\text{image length}}{\\text{object length}}$" },
          { name: "Back bearing", statement: "If the bearing is less than $180^\\circ$, add $180^\\circ$. Otherwise subtract $180^\\circ$." },
          { name: "Parallel lines", statement: "Corresponding and alternate angles are equal. Co-interior angles sum to $180^\\circ$." },
        ],
        workedExample: {
          problem: "The bearing of a lighthouse from a boat is $030^\\circ$. What is the bearing of the boat from the lighthouse?",
          solution: "Add $180^\\circ$ because $030^\\circ$ is less than $180^\\circ$: $30^\\circ+180^\\circ=210^\\circ$. The bearing is $210^\\circ$.",
        },
      },
      questions: [
        {
          id: "mypm2-u3-similarity-bearings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two parallel lines are crossed by a straight line. Two angles lie between the parallel lines, on the same side of the crossing line. What is true about these two angles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They add up to $360^\\circ$ because they are angles at a point." },
              { id: "b", text: "They add up to $180^\\circ$ because they are co-interior angles." },
              { id: "c", text: "They are equal because they are corresponding angles." },
              { id: "d", text: "They are equal because they are alternate angles." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Co-interior angles", statement: "Co-interior angles between parallel lines add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Angles between the parallel lines on the same side of the transversal are co-interior, and they add up to $180^\\circ$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They add up to $180^\\circ$ because they are co-interior angles.",
            commonErrors: ["Confusing co-interior angles with alternate or corresponding angles, which are equal."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ship sails from port $P$ on a bearing of $070^\\circ$ to reach a buoy $B$. What is the bearing of $P$ from $B$? Give your answer in degrees (three figures).",
          response: { type: "numeric", parts: [{ label: "Bearing of P from B", answer: 250, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The bearing of $A$ from $B$ differs from the bearing of $B$ from $A$ by $180^\\circ$, because north lines are parallel and co-interior angles add up to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "The original bearing is less than $180^\\circ$, so add $180^\\circ$.", working: "70+180", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250^\\circ$",
            commonErrors: ["Subtracting $180^\\circ$ and getting a negative angle.", "Giving $110^\\circ$, the angle measured from south."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Triangles $ABC$ and $PQR$ are similar. $AB=4\\ \\text{cm}$ corresponds to $PQ=10\\ \\text{cm}$, and $BC=6\\ \\text{cm}$ corresponds to $QR$. Work out the length of $QR$, in centimetres.",
          response: { type: "numeric", parts: [{ label: "QR", answer: 15, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Similar shapes", statement: "Corresponding lengths of similar shapes are in the same ratio, the scale factor." },
            ],
            steps: [
              { reasoning: "Find the scale factor from the pair of known corresponding sides.", working: "10\\div4=2.5", marks: 1, markCode: "M" },
              { reasoning: "Multiply $BC$ by the scale factor.", working: "6\\times2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "QR=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$QR=15\\ \\text{cm}$",
            commonErrors: ["Adding the difference, $10-4=6$, to get 12.", "Dividing by the scale factor instead of multiplying."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A map has a scale of $1:50\\,000$. A hiking path runs from $A$ to $B$. On the map, $AB=6\\ \\text{cm}$, and the bearing of $B$ from $A$ is $060^\\circ$. Separately, two parallel roads $PQ$ and $RS$ are crossed by a straight road $XY$, where $X$ lies on $PQ$ and $Y$ lies on $RS$. $Q$ and $S$ are on the same side of $XY$ and angle $QXY=72^\\circ$. Triangle $KLM$ is similar to a triangle $UVW$ with $KL=5\\ \\text{cm}$, $LM=8\\ \\text{cm}$ and $UV=7.5\\ \\text{cm}$, where $UV$ corresponds to $KL$ and $VW$ corresponds to $LM$.",
          parts: [
            { label: "a", prompt: "Work out the real distance from $A$ to $B$, in kilometres.", marks: 2 },
            { label: "b", prompt: "Work out the bearing of $A$ from $B$.", marks: 2 },
            { label: "c", prompt: "Work out angle $XYS$ and give a reason.", marks: 2 },
            { label: "d", prompt: "Work out the length of $VW$, in centimetres.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Real distance AB", answer: 3, unit: "km" },
              { label: "(b) Bearing of A from B", answer: 240, unit: "°" },
              { label: "(c) Angle XYS", answer: 108, unit: "°" },
              { label: "(d) VW", answer: 12, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Map scale", statement: "A scale of $1:n$ means real length $=n\\times$ map length." },
              { kind: "property", name: "Back bearing", statement: "Add $180^\\circ$ to a bearing less than $180^\\circ$." },
              { kind: "theorem", name: "Co-interior angles", statement: "Co-interior angles between parallel lines add up to $180^\\circ$." },
              { kind: "property", name: "Similar shapes", statement: "Corresponding sides are in the same ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the map length by the scale, then convert centimetres to kilometres ($100\\,000\\ \\text{cm}=1\\ \\text{km}$).", working: "6\\times50\\,000=300\\,000\\ \\text{cm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert.", working: "300\\,000\\div100\\,000=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The bearing $060^\\circ$ is less than $180^\\circ$, so add $180^\\circ$.", working: "60+180", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "240", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angles $QXY$ and $XYS$ are co-interior angles between parallel lines, so they add up to $180^\\circ$.", working: "180-72", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and state the reason (co-interior angles).", working: "108", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the scale factor from the corresponding sides $KL$ and $UV$.", working: "7.5\\div5=1.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply $LM$ by the scale factor.", working: "8\\times1.5=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3\\ \\text{km}$ (b) $240^\\circ$ (c) $108^\\circ$, co-interior angles (d) $12\\ \\text{cm}$",
            commonErrors: ["Leaving the answer to (a) as 300 000 without converting units.", "Giving $120^\\circ$ for (b) by subtracting from 180.", "Treating $QXY$ and $XYS$ as alternate angles and giving $72^\\circ$."],
            examinerNote: "In (c) the A mark requires the reason co-interior angles (or equivalent).",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The bearing of point $B$ from point $A$ is $140^\\circ$. What is the bearing of $A$ from $B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$220^\\circ$" },
              { id: "b", text: "$40^\\circ$" },
              { id: "c", text: "$320^\\circ$" },
              { id: "d", text: "$140^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "The bearing of $A$ from $B$ differs by $180^\\circ$." },
            ],
            steps: [
              { reasoning: "$140^\\circ$ is less than $180^\\circ$, so add $180^\\circ$.", working: "140+180=320", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $320^\\circ$",
            commonErrors: ["Subtracting $180^\\circ$ to get $40^\\circ$ (a), which would be measured from south."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two similar triangles have corresponding sides $3\\ \\text{cm}$ and $9\\ \\text{cm}$. What is the scale factor from the smaller to the larger triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$\\frac12$" },
              { id: "c", text: "$\\frac13$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Similar shapes", statement: "Scale factor $=$ image length $\\div$ object length." },
            ],
            steps: [
              { reasoning: "Divide the larger by the smaller: $9\\div3=3$.", working: "9\\div3=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Subtracting to get 6 (c).", "Using smaller $\\div$ larger (b)."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The bearing of $C$ from $D$ is $290^\\circ$. What is the bearing of $D$ from $C$?",
          response: { type: "numeric", parts: [{ label: "Bearing", answer: 110, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "Subtract $180^\\circ$ when the bearing is greater than $180^\\circ$." },
            ],
            steps: [
              { reasoning: "$290^\\circ$ is greater than $180^\\circ$, so subtract $180^\\circ$.", working: "290-180", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "110", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$110^\\circ$",
            commonErrors: ["Adding $180^\\circ$ to get $470^\\circ$ (then $110^\\circ$ by luck, but wrong method)."],
            examinerNote: "Accept the correct answer 110 either way, but the method matters for reasoning marks.",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two rectangles are similar. The first has sides $4\\ \\text{cm}$ and $6\\ \\text{cm}$. The second has a side of $10\\ \\text{cm}$ corresponding to the side of $4\\ \\text{cm}$. What is the length of the other side of the second rectangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\ \\text{cm}$" },
              { id: "b", text: "$10\\ \\text{cm}$" },
              { id: "c", text: "$15\\ \\text{cm}$" },
              { id: "d", text: "$16\\ \\text{cm}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Similar shapes", statement: "All corresponding sides are in the same ratio." },
            ],
            steps: [
              { reasoning: "Scale factor $=10\\div4=2.5$; other side $=6\\times2.5=15$.", working: "6\\times2.5=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $15\\ \\text{cm}$",
            commonErrors: ["Adding 6 to 10 to get 16 (answer a).", "Using scale factor $\\frac45$ and dividing (answer d)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plane flies from airport $A$ to airport $B$ on a bearing of $045^\\circ$. At $B$ it turns and flies back to $A$. Which bearing does it use for the return journey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$135^\\circ$" },
              { id: "b", text: "$045^\\circ$" },
              { id: "c", text: "$225^\\circ$" },
              { id: "d", text: "$315^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Back bearing", statement: "Add $180^\\circ$ to the original bearing." },
            ],
            steps: [
              { reasoning: "The return bearing is the back bearing: $45+180=225$.", working: "45+180=225", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $225^\\circ$",
            commonErrors: ["Thinking the return bearing is the same as the outward bearing (a)."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the bearing of $A$ from $B$ differs from the bearing of $B$ from $A$ by $180^\\circ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Co-interior angles", statement: "The two north-pointing lines at $A$ and $B$ are parallel, so co-interior angles add to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "The north lines at $A$ and $B$ are parallel, so the two bearings are co-interior angles between these parallel lines.", marks: 1, markCode: "R" },
              { reasoning: "Co-interior angles sum to $180^\\circ$, so the two bearings differ by $180^\\circ$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The north lines are parallel and the bearings are co-interior angles, so they differ by $180^\\circ$.",
            commonErrors: ["Saying 'they point in opposite directions' without the parallel-lines reason."],
            examinerNote: "The R marks need the co-interior/parallel reasoning.",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two similar pentagons have corresponding sides $5\\ \\text{cm}$ and $8\\ \\text{cm}$. The area of the smaller pentagon is $30\\ \\text{cm}^2$. Work out the area of the larger pentagon.",
          response: { type: "numeric", parts: [{ label: "Area of larger pentagon", answer: 76.8, tolerance: 0.1, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Similar shapes, areas", statement: "Areas scale by the square of the length scale factor." },
            ],
            steps: [
              { reasoning: "Scale factor $=8\\div5=1.6$.", working: "8\\div5=1.6", marks: 1, markCode: "M" },
              { reasoning: "Area factor $=1.6^2=2.56$.", working: "1.6^2=2.56", marks: 1, markCode: "M" },
              { reasoning: "Multiply: $30\\times2.56=76.8$.", working: "30\\times2.56=76.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$76.8\\ \\text{cm}^2$",
            commonErrors: ["Multiplying the area by 1.6 instead of $1.6^2$."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two parallel lines are crossed by a transversal. One angle is $65^\\circ$. Which angle is NOT necessarily equal to $65^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The co-interior angle on the same side" },
              { id: "b", text: "The alternate angle" },
              { id: "c", text: "The corresponding angle" },
              { id: "d", text: "The vertically opposite angle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle rules for parallel lines", statement: "Corresponding, alternate and vertically opposite angles are equal; co-interior angles sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Corresponding, alternate and vertically opposite angles equal $65^\\circ$; the co-interior angle equals $180-65=115^\\circ$.", working: "180-65=115", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The co-interior angle on the same side",
            commonErrors: ["Confusing co-interior with alternate angles."],
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "On a map with scale $1:25\\,000$, two towns are $8\\ \\text{cm}$ apart. Explain how you would find the real distance in kilometres, including the unit conversion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Map scale", statement: "A scale of $1:n$ means $1\\ \\text{cm}$ on the map is $n\\ \\text{cm}$ in real life." },
            ],
            steps: [
              { reasoning: "Multiply the map distance by the scale: $8\\times25\\,000=200\\,000\\ \\text{cm}$.", working: "200\\,000\\ \\text{cm}", marks: 1, markCode: "M" },
              { reasoning: "Convert centimetres to kilometres: divide by $100\\,000$ ($1\\ \\text{km}=100\\,000\\ \\text{cm}$).", working: "200\\,000\\div100\\,000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $2\\ \\text{km}$.", working: "2\\ \\text{km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{km}$",
            commonErrors: ["Forgetting the cm-to-km conversion, giving 200 000 as the answer."],
            examinerNote: "The R-style explanation requires the conversion step.",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A hiker walks from camp $C$ to a lake $L$ on a bearing of $120^\\circ$, then from $L$ to a summit $S$ on a bearing of $030^\\circ$. The distance $CL=4\\ \\text{km}$ and $LS=3\\ \\text{km}$. Explain why the bearing of $C$ from $S$ is not simply found by averaging, and what information you would need to find it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bearing", statement: "A bearing is measured clockwise from north at the point where it is taken." },
            ],
            steps: [
              { reasoning: "Bearings are measured from north at each point, not from each other, so there is no simple average.", marks: 1, markCode: "R" },
              { reasoning: "To find the bearing of $C$ from $S$ you need the angle at $S$ between north and the line $SC$, which depends on the shape of triangle $CLS$.", marks: 1, markCode: "R" },
              { reasoning: "You would need either the bearing of $L$ from $S$ (the back bearing of $LS$, which is $210^\\circ$) plus the angle $CSL$, or to construct the triangle to scale.", marks: 1, markCode: "M" },
              { reasoning: "With distances $CL=4$ and $LS=3$ and the two given bearings, the triangle is determined, so the bearing can in principle be found.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Bearings are local to each point; the bearing of $C$ from $S$ needs the angle at $S$, found from the triangle formed by the two legs and their bearings.",
            commonErrors: ["Averaging $120^\\circ$ and $030^\\circ$ to get $075^\\circ$."],
            examinerNote: "This is a reasoning question; full marks need the 'bearings are measured at each point' idea.",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two parallel lines $m$ and $n$ are crossed by a transversal. Angle $A$ is $x^\\circ$ and its co-interior angle is $y^\\circ$. Separately, similar triangles $PQR$ and $XYZ$ have $PQ=6\\ \\text{cm}$, $QR=9\\ \\text{cm}$, $PR=12\\ \\text{cm}$ and $XY=4\\ \\text{cm}$, $YZ=6\\ \\text{cm}$, where $XY$ corresponds to $PQ$ and $YZ$ to $QR$.",
          parts: [
            { label: "a", prompt: "Given $x=115$, work out $y$ and state the rule used.", marks: 2 },
            { label: "b", prompt: "Work out the scale factor from triangle $PQR$ to triangle $XYZ$.", marks: 1 },
            { label: "c", prompt: "Work out the length of $XZ$, in centimetres.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) y", answer: 65, unit: "°" },
              { label: "(b) Scale factor", answer: 0.6667, tolerance: 0.01 },
              { label: "(c) XZ", answer: 8, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Co-interior angles", statement: "Co-interior angles between parallel lines sum to $180^\\circ$." },
              { kind: "property", name: "Similar shapes", statement: "Corresponding sides are in the same ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Co-interior angles add to $180^\\circ$: $y=180-115=65$.", working: "180-115=65", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value and the rule (co-interior angles).", working: "y=65^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Scale factor $=XY\\div PQ=4\\div6$.", working: "\\frac23", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Check consistency: $YZ\\div QR=6\\div9=\\frac23$, matching. Now find $XZ$ from $PR=12$: $XZ=PR\\times\\frac23$.", working: "12\\times\\frac23", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Note $PR$ corresponds to $XZ$ since both are the side opposite the equal-angle vertex pattern (or by the ratio of the two known sides).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $y=65^\\circ$, co-interior angles (b) $\\frac23$ (c) $XZ=8\\ \\text{cm}$",
            commonErrors: ["In (c) multiplying $PR$ by $\\frac32$ instead of $\\frac23$."],
            examinerNote: "In (b) accept $0.67$ or $\\frac23$.",
          },
        },
        {
          id: "mypm2-u3-similarity-bearings-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangular park is $120\\ \\text{m}$ by $80\\ \\text{m}$. A scale drawing uses $1\\ \\text{cm}$ to represent $10\\ \\text{m}$. A path crosses the park from corner $A$ to the opposite corner $C$. Separately, a flagpole of height $6\\ \\text{m}$ casts a shadow $4\\ \\text{m}$ long, and a nearby tree casts a shadow $10\\ \\text{m}$ long at the same time.",
          parts: [
            { label: "a", prompt: "Work out the dimensions of the park on the scale drawing, in centimetres.", marks: 2 },
            { label: "b", prompt: "Work out the length of $AC$ in real life, in metres, correct to the nearest metre.", marks: 2 },
            { label: "c", prompt: "Use similar triangles to work out the height of the tree, in metres.", marks: 3 },
            { label: "d", prompt: "Explain why the sun's rays can be treated as parallel lines for this problem.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Length on drawing", answer: 12, unit: "cm" },
              { label: "(a) Width on drawing", answer: 8, unit: "cm" },
              { label: "(b) AC", answer: 144, unit: "m" },
              { label: "(c) Height of tree", answer: 15, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale drawing", statement: "$1\\ \\text{cm}$ represents $10\\ \\text{m}$, so divide real lengths by 10." },
              { kind: "property", name: "Similar shapes", statement: "The flagpole/shadow and tree/shadow triangles are similar because the sun's rays are parallel." },
              { kind: "theorem", name: "Pythagoras", statement: "$AC^2=120^2+80^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide each real length by 10: $120\\div10=12$ cm and $80\\div10=8$ cm.", working: "12\\ \\text{cm}\\times8\\ \\text{cm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both dimensions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diagonal: $AC=\\sqrt{120^2+80^2}=\\sqrt{14400+6400}=\\sqrt{20800}$.", working: "\\sqrt{20800}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round: $\\sqrt{20800}\\approx144.2\\to144$ m.", working: "144", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Triangles are similar: height $\\div$ shadow is the same. Scale factor $=10\\div4=2.5$.", working: "10\\div4=2.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Tree height $=6\\times2.5$.", working: "6\\times2.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The sun is very far away, so its rays arrive at the ground as (effectively) parallel lines, making the two right-angled triangles similar.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $12\\ \\text{cm}$ by $8\\ \\text{cm}$ (b) $144\\ \\text{m}$ (c) $15\\ \\text{m}$ (d) the sun's rays are effectively parallel",
            commonErrors: ["In (c) multiplying the shadow instead of the height, or using 10 as the height.", "In (b) adding 120 and 80 instead of using Pythagoras."],
            examinerNote: "In (b) accept 144 m; in (c) the method must use the ratio of corresponding sides.",
          },
        },
      ],
    },
  ],
};
