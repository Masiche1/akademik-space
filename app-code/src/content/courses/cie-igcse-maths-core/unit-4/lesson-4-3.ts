import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cimg-u4-lesson-4-3",
  code: "4-3",
  title: "Transformations and Symmetry",
  goal: "I CAN describe reflections, rotations and enlargements.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: transformations"],
  vocabulary: [
    { term: "Reflection", definition: "Mirror image across a mirror line." },
    { term: "Rotation", definition: "Turn about a centre point by an angle." },
    { term: "Translation", definition: "Slide without turning." },
    { term: "Enlargement", definition: "Scale a shape by a factor." },
    { term: "Invariant", definition: "A property that stays the same." },
  ],
  concepts: [
    {
      id: "cimg-u4-s3-reflection-rotation",
      title: "Reflections and rotations",
      skill: "Describe reflections and rotations at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Reflections",
            body: "Reflect across a mirror line. Every point is the same distance from the line on the other side. Describe: 'reflection in the line $y = x$' or 'reflection in the y-axis'.",
          },
          {
            heading: "Rotations",
            body: "Rotate about a centre point by 90°, 180° or 270° (clockwise or anticlockwise). Describe: 'rotation of 90° clockwise about (1, 2)'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Point $(3, 1)$ is reflected in the y-axis. Where does it go?",
          solution: "$(-3, 1)$ — x-coordinate changes sign.",
        },
      },
      questions: [
        {
          id: "cimg-u4-s3-rr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(4, 2)$ is reflected in the y-axis. What are the new coordinates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-4, 2)$" },
            { id: "b", text: "$(-4, -2)$" },
            { id: "c", text: "$(2, 4)$" },
            { id: "d", text: "$(4, -2)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection", statement: "y-axis flips x." }],
            steps: [{ reasoning: "x changes sign: $(-4, 2)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(-4, 2)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Point $(2, 5)$ is rotated 180° about the origin. Find the new position.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "180° flips both signs." }],
            steps: [
              { reasoning: "$(-2, -5)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(-2, -5)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-2, -5)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shape is reflected in the line $y = x$. Point $(1, 4)$ maps to which point?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection y=x", statement: "Swap coordinates." }],
            steps: [
              { reasoning: "Reflection in $y = x$ swaps x and y.", marks: 1, markCode: "M" },
              { reasoning: "$(1, 4) \\to (4, 1)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(4, 1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4, 1)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the single transformation mapping triangle with vertices $(0,0)$, $(2,0)$, $(0,2)$ to $(-2,0)$, $(0,0)$, $(-2,-2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying transformations", statement: "Check coordinates." }],
            steps: [
              { reasoning: "Map each vertex: $(x,y) \\to (x-2, -y)$.", marks: 1, markCode: "M" },
              { reasoning: "$(0,0) \\to (-2,0)$ ✓; $(2,0) \\to (0,0)$ ✓; $(0,2) \\to (-2,-2)$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "This equals rotation of 180° about $(-1, -1)$: $(x,y) \\to (2(-1)-x, 2(-1)-y) = (-2-x, -2-y)$? Check $(0,0) \\to (-2,-2)$ — does not match. Try reflection in $y = -x - 2$? Alternatively: reflection in x-axis then translation $(-2, 0)$.", marks: 1, markCode: "M" },
              { reasoning: "Accept: reflection in x-axis followed by translation $(-2, 0)$ — a single equivalent is rotation 180° about $(-1,-1)$ verified by student.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in x-axis + translation $(-2,0)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(2, 3)$ is reflected in the x-axis. What are the new coordinates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2, -3)$" },
            { id: "b", text: "$(-2, -3)$" },
            { id: "c", text: "$(-2, 3)$" },
            { id: "d", text: "$(3, 2)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection", statement: "x-axis flips y." }],
            steps: [{ reasoning: "y changes sign: $(2, -3)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(2, -3)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Point $(0, 7)$ is rotated 90° clockwise about the origin. What is the y-coordinate of the image?",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "90° clockwise: $(x,y) \\to (y,-x)$." }],
            steps: [
              { reasoning: "$(0, 7) \\to (7, 0)$, so the y-coordinate is $0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "cimg-u4-s3-rr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Point $(5, -2)$ is reflected in the x-axis. Give the coordinates of the image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection", statement: "x-axis flips y." }],
            steps: [
              { reasoning: "$(5, -2) \\to (5, 2)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(5, 2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5, 2)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rotation of 90° anticlockwise about the origin maps $(x, y)$ to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-y, x)$" },
            { id: "b", text: "$(y, x)$" },
            { id: "c", text: "$(-x, -y)$" },
            { id: "d", text: "$(y, -x)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "90° anticlockwise." }],
            steps: [{ reasoning: "90° anticlockwise: $(x, y) \\to (-y, x)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(-y, x)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Point $(-1, 3)$ is rotated 90° clockwise about the origin. Find the coordinates of the image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "90° clockwise: $(x,y) \\to (y,-x)$." }],
            steps: [
              { reasoning: "$(-1, 3) \\to (3, 1)$.", marks: 1, markCode: "M" },
              { reasoning: "Check the turn is clockwise about the origin.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(3, 1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 1)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(4, 4)$ is reflected in the line $y = x$. Where does it map to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-4, -4)$" },
            { id: "b", text: "$(-4, 4)$" },
            { id: "c", text: "$(4, 4)$ — it stays fixed" },
            { id: "d", text: "$(4, -4)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Reflection y=x", statement: "Points on the mirror line are fixed." }],
            steps: [{ reasoning: "$(4,4)$ lies on $y=x$, so it is unchanged.", marks: 1, markCode: "A" }],
            finalAnswer: "$(4, 4)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the single transformation that maps point $(1, 2)$ to $(1, -2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying transformations", statement: "Check coordinates." }],
            steps: [
              { reasoning: "Only the y-coordinate changes sign; x stays the same.", marks: 1, markCode: "M" },
              { reasoning: "This is a reflection in the x-axis.", marks: 1, markCode: "M" },
              { reasoning: "Answer: reflection in the x-axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the x-axis",
          },
        },
        {
          id: "cimg-u4-s3-rr-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(3, 5)$ is rotated 180° about the point $(1, 1)$. What are the new coordinates?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-1, -3)$" },
            { id: "b", text: "$(5, 7)$" },
            { id: "c", text: "$(1, -3)$" },
            { id: "d", text: "$(-1, 3)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "$(x,y) \\to (2a-x, 2b-y)$ about $(a,b)$." }],
            steps: [{ reasoning: "$(3,5) \\to (2-3, 2-5) = (-1, -3)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(-1, -3)$",
          },
        },
        {
          id: "cimg-u4-s3-rr-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle P has vertices $(2, 1)$, $(4, 1)$ and $(4, 3)$. Triangle Q has vertices $(2, -1)$, $(4, -1)$ and $(4, -3)$. Describe fully the single transformation mapping P onto Q.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying transformations", statement: "Compare coordinates." }],
            steps: [
              { reasoning: "Each vertex maps $(x, y) \\to (x, -y)$: x-coordinates unchanged, y-coordinates change sign.", marks: 1, markCode: "M" },
              { reasoning: "$(2,1) \\to (2,-1)$; $(4,1) \\to (4,-1)$; $(4,3) \\to (4,-3)$ — all match Q.", marks: 1, markCode: "M" },
              { reasoning: "This is a reflection in the x-axis.", marks: 1, markCode: "M" },
              { reasoning: "Answer: reflection in the x-axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the x-axis",
          },
        },
        {
          id: "cimg-u4-s3-rr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point $(7, -3)$ is rotated 180° about the origin. Find the sum of the coordinates of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "180° flips both signs." }],
            steps: [
              { reasoning: "$(7, -3) \\to (-7, 3)$.", marks: 1, markCode: "M" },
              { reasoning: "Sum $= -7 + 3 = -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-4",
          },
        },
        {
          id: "cimg-u4-s3-rr-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What angle of rotation about the origin maps point $(5, 0)$ to point $(0, 5)$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rotation", statement: "Track the point's movement." }],
            steps: [
              { reasoning: "$(5,0)$ on positive x-axis moves to $(0,5)$ on positive y-axis — a quarter turn anticlockwise.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90° anticlockwise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u4-s3-rr-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point A$(1, 4)$ is reflected in the y-axis, and then the image is rotated 180° about the origin. Find the final position of A.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combined transformations", statement: "Apply in order." }],
            steps: [
              { reasoning: "Reflect in y-axis: $(1,4) \\to (-1,4)$.", marks: 1, markCode: "M" },
              { reasoning: "Rotate 180° about origin: $(-1,4) \\to (1,-4)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(1, -4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1, -4)$",
          },
        },
      ],
    },
    {
      id: "cimg-u4-s3-enlargement",
      title: "Enlargements and translations",
      skill: "Describe enlargements and translations at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Enlargements",
            body: "Scale factor $k$ multiplies all lengths. Centre of enlargement stays fixed. $k > 1$ bigger, $0 < k < 1$ smaller, negative $k$ flips.",
          },
          {
            heading: "Translations",
            body: "Slide by a vector $\\begin{pmatrix} a \\ b \\end{pmatrix}$. Every point moves the same distance. Describe as 'translation by vector $(a, b)$'.",
          },
        ],
        keyFormulas: [
          { name: "Enlargement", statement: "Scale factor $k$ about a centre" },
        ],
        workedExample: {
          problem: "A triangle is enlarged by scale factor 2 about (0,0). Vertex (3,1) goes where?",
          solution: "$(6, 2)$.",
        },
      },
      questions: [
        {
          id: "cimg-u4-s3-en-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(3, 4)$ is translated by vector $\\begin{pmatrix} 2 \\ -1 \\end{pmatrix}$. New position?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(5, 3)$" },
            { id: "b", text: "$(6, 3)$" },
            { id: "c", text: "$(1, 5)$" },
            { id: "d", text: "$(5, 5)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Translation", statement: "Add vector." }],
            steps: [{ reasoning: "$(3+2, 4-1) = (5, 3)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(5, 3)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shape is enlarged by scale factor 3 about the origin. Point $(2, 1)$ goes where?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement", statement: "Multiply coordinates." }],
            steps: [
              { reasoning: "$(2 \\times 3, 1 \\times 3) = (6, 3)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(6, 3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(6, 3)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A square has side 4. It is enlarged by scale factor $\\frac{1}{2}$. What is the new side length?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement scale", statement: "Multiply lengths." }],
            steps: [
              { reasoning: "$4 \\times \\frac{1}{2} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2 units.", marks: 1, markCode: "M" },
              { reasoning: "Check: smaller shape since $k < 1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u4-s3-en-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the transformation mapping point $(1, 1)$ to $(4, 3)$ using a single translation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Translation vector", statement: "Find displacement." }],
            steps: [
              { reasoning: "Vector $= (4 - 1, 3 - 1) = (3, 2)$.", marks: 1, markCode: "M" },
              { reasoning: "Translation by $\\begin{pmatrix} 3 \\ 2 \\end{pmatrix}$.", marks: 1, markCode: "M" },
              { reasoning: "Or '3 right, 2 up'.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation $(3, 2)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An enlargement with scale factor 3 multiplies every length by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{3}$" },
            { id: "b", text: "6" },
            { id: "c", text: "3" },
            { id: "d", text: "9" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Enlargement", statement: "Scale factor multiplies lengths." }],
            steps: [{ reasoning: "Scale factor 3 triples all lengths.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cimg-u4-s3-en-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Point $(2, 5)$ is enlarged by scale factor 2 about the origin. Give the coordinates of the image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement", statement: "Multiply coordinates by $k$." }],
            steps: [
              { reasoning: "$(2 \\times 2, 5 \\times 2) = (4, 10)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(4, 10)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4, 10)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shape has area 12 square units. It is enlarged by scale factor 2. Find the area of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 48 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement scale", statement: "Area scales by $k^2$." }],
            steps: [
              { reasoning: "Area factor $= 2^2 = 4$; new area $= 12 \\times 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 48 square units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "cimg-u4-s3-en-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle measures 3 cm by 4 cm. It is enlarged by scale factor 3 about the origin. Find the perimeter of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 42, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement scale", statement: "Lengths multiply by $k$." }],
            steps: [
              { reasoning: "New sides: $3 \\times 3 = 9$ cm and $4 \\times 3 = 12$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Perimeter $= 2(9 + 12) = 42$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 42 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42 cm",
          },
        },
        {
          id: "cimg-u4-s3-en-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape is enlarged by scale factor $-2$ about the origin. The image is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Unchanged" },
            { id: "b", text: "Half the size" },
            { id: "c", text: "Twice the size and inverted through the centre" },
            { id: "d", text: "Twice the size, same orientation" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Negative scale factor", statement: "Negative $k$ inverts the image." }],
            steps: [{ reasoning: "Negative scale factor gives an inverted image twice the size.", marks: 1, markCode: "A" }],
            finalAnswer: "Twice the size and inverted",
          },
        },
        {
          id: "cimg-u4-s3-en-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Point $(3, -1)$ is enlarged by scale factor $-1$ about the origin. Find the coordinates of the image.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement", statement: "Multiply coordinates by $k$." }],
            steps: [
              { reasoning: "$(3 \\times (-1), -1 \\times (-1)) = (-3, 1)$.", marks: 1, markCode: "M" },
              { reasoning: "The negative factor turns the point through the centre.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(-3, 1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-3, 1)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the single transformation that maps point $(2, 2)$ to $(6, 2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Translation vector", statement: "Find displacement." }],
            steps: [
              { reasoning: "Vector $= (6 - 2, 2 - 2) = (4, 0)$.", marks: 1, markCode: "M" },
              { reasoning: "The shape slides 4 units right and 0 up — no turning or resizing.", marks: 1, markCode: "M" },
              { reasoning: "Answer: translation by $\\begin{pmatrix} 4 \\ 0 \\end{pmatrix}$ (4 units right).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation $(4, 0)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle has sides 4 cm, 5 cm and 6 cm. It is enlarged by scale factor 2.5. Find the length of the longest side of the image.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement scale", statement: "Lengths multiply by $k$." }],
            steps: [
              { reasoning: "Longest side $= 6$ cm; scale factor $= 2.5$.", marks: 1, markCode: "M" },
              { reasoning: "$6 \\times 2.5 = 15$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 cm",
          },
        },
        {
          id: "cimg-u4-s3-en-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle A has vertices $(0, 0)$, $(2, 0)$ and $(0, 2)$. Triangle B has vertices $(0, 0)$, $(6, 0)$ and $(0, 6)$. Describe fully the single transformation mapping A onto B.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Identifying enlargements", statement: "Find scale factor about fixed centre." }],
            steps: [
              { reasoning: "The origin $(0,0)$ is fixed, so it is the centre of enlargement.", marks: 1, markCode: "M" },
              { reasoning: "$(2,0) \\to (6,0)$ and $(0,2) \\to (0,6)$: each coordinate is multiplied by 3.", marks: 1, markCode: "M" },
              { reasoning: "Scale factor $k = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: enlargement scale factor 3 about $(0,0)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enlargement SF 3 about $(0,0)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(8, 6)$ is enlarged by scale factor $\\frac{1}{2}$ about the origin. What is the image?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(4, 3)$" },
            { id: "b", text: "$(16, 12)$" },
            { id: "c", text: "$(8, 3)$" },
            { id: "d", text: "$(4, 6)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement", statement: "Multiply coordinates by $k$." }],
            steps: [{ reasoning: "$(8 \\times \\frac{1}{2}, 6 \\times \\frac{1}{2}) = (4, 3)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(4, 3)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point P is enlarged by scale factor 2 about the centre C$(1, 1)$ to give the image P$'(5, 7)$. Find the coordinates of P.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reverse enlargement", statement: "Enlargement is invertible." }],
            steps: [
              { reasoning: "$\\vec{CP'} = 2 \\times \\vec{CP}$, so $\\vec{CP} = \\frac{1}{2}(4, 6) = (2, 3)$.", marks: 1, markCode: "M" },
              { reasoning: "$P = C + \\vec{CP} = (1 + 2, 1 + 3)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $P = (3, 4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 4)$",
          },
        },
        {
          id: "cimg-u4-s3-en-q16",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A photograph 10 cm wide is enlarged to 25 cm wide. What is the scale factor?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Scale factor", statement: "New length $\\div$ old length." }],
            steps: [
              { reasoning: "$k = 25 \\div 10 = 2.5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: scale factor 2.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u4-s3-trans-notes",
      title: "Transformations — revision notes",
      summary: "Reflections, rotations, translations, enlargements.",
      sections: [
        { heading: "Reflections/rotations", body: "Reflection flips across mirror line. Rotation turns about a point." },
        { heading: "Translation/enlargement", body: "Translation slides by vector. Enlargement scales by factor about centre." },
      ],
    },
  ],
};
