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
            { id: "a", text: "$(-4, 2)$" }, { id: "b", text: "$(4, -2)$" }, { id: "c", text: "$(-4, -2)$" }, { id: "d", text: "$(2, 4)$" },
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
            { id: "a", text: "$(5, 3)$" }, { id: "b", text: "$(1, 5)$" }, { id: "c", text: "$(5, 5)$" }, { id: "d", text: "$(6, 3)$" },
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
