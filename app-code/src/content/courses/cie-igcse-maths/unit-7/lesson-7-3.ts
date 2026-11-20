import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ciem-u7-lesson-7-3",
  code: "7-3",
  title: "Symmetry and Combined Transformations",
  goal: "I CAN identify lines and centres of symmetry, describe combined transformations as single transformations, and solve transformation problems.",
  standards: ["0580 7.4", "0580 7.5"],
  vocabulary: [
    { term: "Line symmetry", definition: "A line where reflecting the shape in it gives an identical image." },
    { term: "Rotational symmetry", definition: "The shape looks identical after rotation about a centre through a given angle." },
    { term: "Order of rotational symmetry", definition: "The number of positions in a full turn where the shape looks identical." },
    { term: "Combined transformation", definition: "Two or more transformations applied in sequence." },
    { term: "Equivalent single transformation", definition: "One transformation producing the same result as a combination." },
  ],
  concepts: [
    {
      id: "ciem-u7-symmetry",
      title: "Symmetry",
      skill: "Identify lines of symmetry and centres/order of rotational symmetry in shapes.",
      lesson: {
        sections: [
          {
            heading: "Line symmetry",
            body: "A shape has line symmetry if a mirror line divides it into two matching halves. Count all such lines: a square has 4, a rectangle has 2, an equilateral triangle has 3, a circle has infinitely many.",
          },
          {
            heading: "Rotational symmetry",
            body: "A shape has rotational symmetry of **order $n$** if it maps onto itself $n$ times in a full $360^\\circ$ turn about a centre. Order 1 means no rotational symmetry (only identity). A square has order 4; a rectangle has order 2; a scalene triangle has order 1.",
          },
          {
            heading: "Combining with transformations",
            body: "Symmetry helps check transformation answers: if a shape has a line of symmetry, reflecting in that line leaves it unchanged. Rotational symmetry means certain rotations map the shape to itself.",
          },
        ],
        keyFormulas: [
          { name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{\\text{smallest rotation angle}}$" },
        ],
        workedExample: {
          problem: "A regular hexagon — how many lines of symmetry and what order of rotational symmetry?",
          solution: "6 lines of symmetry (through opposite vertices and midpoints of opposite sides); order 6 rotational symmetry ($360^\\circ/6=60^\\circ$ rotations).",
        },
      },
      questions: [
        {
          id: "ciem-u7-symmetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines of symmetry does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Square symmetry", statement: "A square has 4 lines of symmetry." },
            ],
            steps: [
              { reasoning: "Count the mirror lines.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Counting only the horizontal and vertical lines (missing the diagonals)."],
          },
        },
        {
          id: "ciem-u7-symmetry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shape maps onto itself after rotations of $90^\\circ$, $180^\\circ$ and $270^\\circ$ about a centre. What is its order of rotational symmetry?",
          response: { type: "numeric", parts: [{ label: "Order", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotational symmetry order", statement: "$n=\\frac{360^\\circ}{\\text{smallest angle}}$" },
            ],
            steps: [
              { reasoning: "Smallest rotation is $90^\\circ$.", working: "n=\\frac{360}{90}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Order $4$",
            commonErrors: ["Counting the listed rotations (3) instead of including identity."],
          },
        },
        {
          id: "ciem-u7-symmetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An isosceles trapezium (not a rectangle) has one line of symmetry. Describe that line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Isosceles trapezium symmetry", statement: "The perpendicular bisector of the parallel sides through the midpoints is the line of symmetry." },
            ],
            steps: [
              { reasoning: "Identify the symmetry axis.", working: "\\text{perpendicular bisector of the parallel sides}", marks: 1, markCode: "M" },
              { reasoning: "State it passes through the midpoints of both parallel sides.", marks: 1, markCode: "M" },
              { reasoning: "Describe the line fully.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "The perpendicular bisector of the two parallel sides (through their midpoints)",
            commonErrors: ["Saying 'the diagonal' — diagonals are not symmetry lines."],
          },
        },
        {
          id: "ciem-u7-symmetry-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shape is transformed by a reflection in the $x$-axis followed by a reflection in the $y$-axis.",
          parts: [
            { label: "a", prompt: "Find the single transformation equivalent to this combination.", marks: 4 },
            { label: "b", prompt: "What is the inverse of the combined transformation?", marks: 2 },
            { label: "c", prompt: "A point $(3,4)$ undergoes the combined transformation. Find its final position.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Composition of reflections", statement: "Reflect $x$-axis then $y$-axis = rotation $180^\\circ$ about origin." },
            ],
            steps: [
              { part: "a", reasoning: "First reflection in the $x$-axis: $(x,y)\\to(x,-y)$.", working: "(x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Then reflect the result in the $y$-axis: $(x,-y)\\to(-x,-y)$.", working: "(-x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The combined map $(x,y)\\to(-x,-y)$ is rotation $180^\\circ$ about the origin.", working: "(-x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the single transformation.", working: "\\text{rotation }180^\\circ\\text{ about }(0,0)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rotation $180^\\circ$ is self-inverse.", working: "\\text{itself}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inverse.", working: "180^\\circ\\text{ rotation about }(0,0)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply $180^\\circ$ rotation: negate both coordinates.", working: "(-3,-4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Or sequentially: reflect $x$-axis → $(3,-4)$; reflect $y$-axis → $(-3,-4)$.", working: "(3,-4)\\to(-3,-4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the final position.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rotation $180^\\circ$ about origin (b) itself (c) $(-3,-4)$",
            commonErrors: ["Applying reflections in the wrong order — order matters for the intermediate steps though not the final result here.", "In (a) writing two reflections instead of a single transformation."],
          },
        },
      ],
    },
    {
      id: "ciem-u7-transformation-problems",
      title: "Transformation problem solving",
      skill: "Solve multi-step problems involving transformations on coordinate grids.",
      lesson: {
        sections: [
          {
            heading: "Strategy",
            body: "For any transformation problem: (1) identify the type from the object–image relationship, (2) find the defining elements (vector, mirror line, centre+angle, centre+scale factor), (3) verify with a second point.",
          },
          {
            heading: "Describing fully",
            body: "Marks are lost for incomplete descriptions. A rotation needs centre + angle + direction; an enlargement needs centre + scale factor; a reflection needs the mirror line; a translation needs the vector.",
          },
          {
            heading: "Inverse problems",
            body: "To find what transformation maps image back to object, either apply the inverse or swap object/image roles and describe the reverse transformation.",
          },
        ],
        keyFormulas: [
          { name: "Full description checklist", statement: "Type + all defining elements" },
        ],
        workedExample: {
          problem: "Point $(1,2)\\to(3,2)$. What single transformation maps object to image?",
          solution: "Only $x$ changes by $+2$ — could be translation $\\begin{pmatrix}2\\\\0\\end{pmatrix}$ or reflection in $x=2$. With one point both fit; a second point distinguishes them.",
        },
      },
      questions: [
        {
          id: "ciem-u7-transformation-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is unchanged by reflection in a line. What does this tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The line is a line of symmetry of the shape" },
              { id: "b", text: "The transformation failed" },
              { id: "c", text: "The shape has no symmetry" },
              { id: "d", text: "The shape is a circle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Line symmetry", statement: "Reflecting in a symmetry line gives an identical image." },
            ],
            steps: [
              { reasoning: "Connect unchanged image to symmetry.", working: "\\text{line of symmetry}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The line is a line of symmetry",
            commonErrors: ["Thinking the transformation did nothing."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Point $A(3,5)$ maps to $A'(3,-1)$ under a reflection. Find the equation of the mirror line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mirror line", statement: "Mirror line is perpendicular bisector of object–image segment." },
            ],
            steps: [
              { reasoning: "Midpoint of $AA'$: $\\left(\\frac{3+3}{2},\\frac{5+(-1)}{2}\\right)=(3,2)$.", working: "M=(3,2)", marks: 1, markCode: "M" },
              { reasoning: "$AA'$ is vertical (same $x$), so mirror line is horizontal through $(3,2)$.", working: "y=2", marks: 1, markCode: "M" },
              { reasoning: "State the mirror line.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2$",
            commonErrors: ["Giving $x=3$ (that's the segment, not the mirror)."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $P(6,2)$ is rotated $180^\\circ$ about point $C(2,4)$. Find $P'$.",
          response: { type: "numeric", parts: [{ label: "x", answer: -2 }, { label: "y", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotation 180°", statement: "Image is the point reflection of object through the centre: $C$ is midpoint of $PP'$." },
            ],
            steps: [
              { reasoning: "$C$ is the midpoint: $C=\\frac{P+P'}{2}$, so $P'=2C-P$.", working: "P'=2(2,4)-(6,2)", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=(4,8)-(6,2)=(-2,6)", marks: 2, markCode: "M" },
              { reasoning: "State the image.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-2,6)$",
            commonErrors: ["Rotating about the origin instead of $C$."],
          },
        },
        {
          id: "ciem-u7-transformation-problems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Rectangle $R$ has vertices $(0,0)$, $(4,0)$, $(4,3)$, $(0,3)$. It is mapped to $R'$ with vertices $(6,-2)$, $(2,-2)$, $(2,-5)$, $(6,-5)$, where $(0,0)\\to(6,-2)$, $(4,0)\\to(2,-2)$, $(4,3)\\to(2,-5)$ and $(0,3)\\to(6,-5)$.",
          parts: [
            { label: "a", prompt: "Describe the single transformation mapping $R$ to $R'$.", marks: 5 },
            { label: "b", prompt: "Write the inverse transformation.", marks: 2 },
            { label: "c", prompt: "Find the image of the centre of $R$ under the transformation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rotation 180°", statement: "About centre $C$: $P'=2C-P$, i.e. $(x,y)\\to(2c_1-x,\\,2c_2-y)$." },
            ],
            steps: [
              { part: "a", reasoning: "Check for translation: vectors differ per vertex, so not a translation. Check reflection: corresponding segments are not mirror images. The map $(x,y)\\to(6-x,-2-y)$ fits all four pairs.", working: "(0,0)\\to(6,-2),\\ (4,3)\\to(2,-5)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Identify the transformation: $(x,y)\\to(6-x,-2-y)$ is rotation $180^\\circ$ about $(3,-1)$.", working: "2C=(6,-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify with a second pair: $(4,0)\\to(2,-2)$ ✓ and $(0,3)\\to(6,-5)$ ✓.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State type and centre.", working: "\\text{rotation }180^\\circ\\text{ about }(3,-1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Include direction/angle completeness.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A $180^\\circ$ rotation is self-inverse.", working: "\\text{same rotation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inverse.", working: "180^\\circ\\text{ about }(3,-1)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Centre of $R$ is $(2,1.5)$; apply $P'=2C-P$ with $C=(3,-1)$.", working: "(6-2,\\,-2-1.5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute and state.", working: "=(4,-3.5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) rotation $180^\\circ$ about $(3,-1)$ (b) itself — rotation $180^\\circ$ about $(3,-1)$ (c) $(4,-3.5)$",
            commonErrors: ["Describing only 'rotation' without centre and angle.", "In (c) using the centre of $R'$ instead of applying the transformation to the centre of $R$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u7-problem-solving-notes",
      title: "Transformation problem solving — revision notes",
      summary: "Symmetry, identifying transformations, inverses and combined transformations.",
      sections: [
        {
          heading: "Symmetry",
          body: "Line symmetry: mirror lines (square=4, rectangle=2). Rotational symmetry order $=\\frac{360^\\circ}{\\text{smallest angle}}$.",
        },
        {
          heading: "Identifying",
          body: "Translation: same vector. Reflection: perpendicular bisector of pairs. Rotation: centre from bisectors. Enlargement: collinear centre.",
        },
        {
          heading: "Combined and inverse",
          body: "Two reflections in parallel lines → translation by $2\\times$ gap. Inverses undo in reverse order. Rotation $180^\\circ$ about $C$: $P'=2C-P$.",
        },
      ],
    },
  ],
};
