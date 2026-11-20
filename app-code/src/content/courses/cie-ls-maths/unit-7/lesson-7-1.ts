import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cilm-u7-lesson-7-1",
  code: "7-1",
  title: "Transformations: reflection and translation",
  goal: "I CAN describe and perform reflections and translations on coordinate grids.",
  standards: ["0862 Geometry: transformations"],
  vocabulary: [
    { term: "Transformation", definition: "A movement that changes a shape's position, size or orientation." },
    { term: "Translation", definition: "A slide — every point moves the same distance in the same direction." },
    { term: "Reflection", definition: "A flip over a mirror line — creates a mirror image." },
    { term: "Image", definition: "The shape after transformation; original is the 'object'." },
    { term: "Vector", definition: "Describes translation: horizontal then vertical, e.g. $\\begin{pmatrix}3\\\\-2\\end{pmatrix}$ means 3 right, 2 down." },
    { term: "Invariant", definition: "A property unchanged by transformation — shape, size, angles." },
  ],
  concepts: [
    {
      id: "cilm-u7-translations",
      title: "Translations",
      skill: "Translate shapes by vectors and describe translations between object and image.",
      lesson: {
        sections: [
          {
            heading: "Translation vectors",
            body: "A translation moves every point the same amount. Vector $\\begin{pmatrix}a\\\\b\\end{pmatrix}$: $a$ = horizontal (right positive), $b$ = vertical (up positive).\n\nPoint $(2,3)$ translated by $\\begin{pmatrix}4\\\\-1\\end{pmatrix}$ → $(6,2)$.",
          },
          {
            heading: "Describing translations",
            body: "From object point to image point, find the change in $x$ and $y$. If all points change by the same vector, it's a translation.",
          },
          {
            heading: "Invariants",
            body: "Translation preserves: shape, size, orientation, area, angles. Only position changes.",
          },
        ],
        keyFormulas: [
          { name: "Translation", statement: "Image $=$ object $+\\begin{pmatrix}a\\\\b\\end{pmatrix}$ — add vector to every coordinate." },
        ],
        workedExample: {
          problem: "Triangle has vertices $(1,1), (3,1), (2,4)$. Translate by $\\begin{pmatrix}-2\\\\3\\end{pmatrix}$.",
          solution: "New vertices: $(-1,4), (1,4), (0,7)$.",
        },
      },
      questions: [
        {
          id: "cilm-u7-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(3, 5)$ is translated by vector $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$. Where does it go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5, 4)$" },
              { id: "b", text: "$(1, 6)$" },
              { id: "c", text: "$(5, 6)$" },
              { id: "d", text: "$(6, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "Add vector: $(3+2, 5-1) = (5,4)$." },
            ],
            steps: [
              { reasoning: "$x: 3+2=5$; $y: 5+(-1)=4$ → $(5,4)$.", working: "(5,4)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(5, 4)$",
            commonErrors: ["Choosing (c) — forgot the $-1$ vertical component."],
          },
        },
        {
          id: "cilm-u7-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $A(2,7)$ maps to $A'(5,4)$ under a translation. Find the translation vector.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Find vector", statement: "Vector $=$ image $-$ object $= (5-2, 4-7) = (3,-3)$." },
            ],
            steps: [
              { reasoning: "$\\Delta x = 5-2=3$; $\\Delta y = 4-7=-3$.", working: "(3,-3)", marks: 1, markCode: "M" },
              { reasoning: "Vector $\\begin{pmatrix}3\\\\-3\\end{pmatrix}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\begin{pmatrix}3\\\\-3\\end{pmatrix}$",
            commonErrors: ["Object − image — must be image minus object."],
          },
        },
        {
          id: "cilm-u7-trans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape is translated by $\\begin{pmatrix}-3\\\\2\\end{pmatrix}$. One vertex was at $(6,-1)$. Where is the image vertex? Describe what stays the same.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation + invariants", statement: "Image $(3,1)$; size, shape, orientation preserved." },
            ],
            steps: [
              { reasoning: "$(6-3, -1+2) = (3,1)$.", working: "(3,1)", marks: 1, markCode: "M" },
              { reasoning: "Image vertex $(3,1)$.", marks: 1, markCode: "M" },
              { reasoning: "Shape, size, orientation, area unchanged.", working: "\\text{invariants}", marks: 1, markCode: "M" },
              { reasoning: "Correct invariants listed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,1)$; size/shape/orientation preserved",
            commonErrors: ["Flipping signs — vector components add as signed values."],
          },
        },
        {
          id: "cilm-u7-trans-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A triangle has vertices $A(1,2)$, $B(4,2)$, $C(4,6)$.",
          parts: [
            { label: "a", prompt: "Translate by $\\begin{pmatrix}2\\\\3\\end{pmatrix}$. Give all image vertices.", marks: 3 },
            { label: "b", prompt: "Find the translation vector from original to image.", marks: 1 },
            { label: "c", prompt: "State two properties that remain unchanged.", marks: 2 },
            { label: "d", prompt: "Translate the IMAGE back by $\\begin{pmatrix}-2\\\\-3\\end{pmatrix}$. What do you get?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation", statement: "Add vector to each vertex; inverse translation returns original." },
            ],
            steps: [
              { part: "a", reasoning: "$A'(3,5), B'(6,5), C'(6,9)$.", working: "(3,5),(6,5),(6,9)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\begin{pmatrix}2\\\\3\\end{pmatrix}$.", working: "vector", marks: 1, markCode: "M" },
              { part: "c", reasoning: "E.g. side lengths and angles unchanged.", working: "\\text{lengths, angles}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid invariants.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Returns to $A(1,2), B(4,2), C(4,6)$ — original triangle.", working: "\\text{original}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Inverse vector correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusion correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(3,5),(6,5),(6,9)$ (b) $\\begin{pmatrix}2\\\\3\\end{pmatrix}$ (c) lengths/angles unchanged (d) returns to original vertices",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Vertices correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Invariants valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Inverse correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) adding instead of subtracting the inverse vector."],
          },
        },
      ],
    },
    {
      id: "cilm-u7-reflections",
      title: "Reflections",
      skill: "Reflect shapes in mirror lines (axes and diagonal lines) and describe the transformation.",
      lesson: {
        sections: [
          {
            heading: "Reflecting in axes",
            body: "- In **x-axis** ($y=0$): $(x,y) \\to (x,-y)$\n- In **y-axis** ($x=0$): $(x,y) \\to (-x,y)$\n- In line $y=x$: $(x,y) \\to (y,x)$\n\nEach point is the same perpendicular distance on the other side.",
          },
          {
            heading: "Reflecting in other lines",
            body: "For line $x=a$: $(x,y) \\to (2a-x, y)$. For line $y=b$: $(x,y) \\to (x, 2b-y)$.\n\nCount squares perpendicular to the mirror line — image is mirror-distance away.",
          },
          {
            heading: "Reflection properties",
            body: "Mirror line is the perpendicular bisector of segments joining object to image points. Shape, size preserved; orientation REVERSED (clockwise becomes anticlockwise).",
          },
        ],
        keyFormulas: [
          { name: "Axis reflections", statement: "x-axis: $(x,-y)$; y-axis: $(-x,y)$; $y=x$: $(y,x)$." },
        ],
        workedExample: {
          problem: "Reflect point $(3,2)$ in the x-axis, then in the y-axis.",
          solution: "x-axis: $(3,-2)$. Then y-axis: $(-3,-2)$ — equivalent to rotation by $180°$.",
        },
      },
      questions: [
        {
          id: "cilm-u7-refl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(4, 3)$ is reflected in the x-axis. Where is the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4, -3)$" },
              { id: "b", text: "$(-4, 3)$" },
              { id: "c", text: "$(-4, -3)$" },
              { id: "d", text: "$(3, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "x-axis reflection", statement: "$(x,y) \\to (x,-y)$ — flip y sign only." },
            ],
            steps: [
              { reasoning: "Reflect in x-axis: y-coordinate negates → $(4,-3)$.", working: "(4,-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(4, -3)$",
            commonErrors: ["Choosing (b) — that's reflection in y-axis."],
          },
        },
        {
          id: "cilm-u7-refl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(-2, 5)$ is reflected in the y-axis. Find the image.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "y-axis reflection", statement: "$(x,y) \\to (-x,y)$ — flip x sign only." },
            ],
            steps: [
              { reasoning: "$x$-coordinate negates: $(-(-2), 5) = (2, 5)$.", working: "(2,5)", marks: 1, markCode: "M" },
              { reasoning: "Image $(2,5)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2, 5)$",
            commonErrors: ["Negating both coordinates — y-axis only flips x."],
          },
        },
        {
          id: "cilm-u7-refl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has vertices $(1,1), (4,1), (2,5)$. Reflect it in the line $y = x$ and give the image vertices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "y=x reflection", statement: "$(x,y) \\to (y,x)$ — swap coordinates." },
            ],
            steps: [
              { reasoning: "Swap each pair: $(1,1) \\to (1,1)$; $(4,1) \\to (1,4)$; $(2,5) \\to (5,2)$.", working: "swap x,y", marks: 1, markCode: "M" },
              { reasoning: "Image vertices: $(1,1), (1,4), (5,2)$.", working: "(1,1),(1,4),(5,2)", marks: 1, markCode: "M" },
              { reasoning: "All three correct.", marks: 1, markCode: "M" },
              { reasoning: "Correct transformation applied.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,1), (1,4), (5,2)$",
            commonErrors: ["Negating instead of swapping — $y=x$ swaps, doesn't negate."],
          },
        },
        {
          id: "cilm-u7-refl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shape is reflected in the x-axis, then the image is translated by $\\begin{pmatrix}0\\\\4\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Point $(3,-2)$ undergoes both transformations. Find the final position.", marks: 3 },
            { label: "b", prompt: "Describe the combined transformation in one sentence.", marks: 2 },
            { label: "c", prompt: "Is the final shape congruent to the original? Explain.", marks: 2 },
            { label: "d", prompt: "What single transformation would reverse both steps?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined transformations", statement: "Apply sequentially; congruence preserved under rigid motions." },
            ],
            steps: [
              { part: "a", reasoning: "Reflect in x-axis: $(3,2)$. Translate $+4$ in y: $(3,6)$.", working: "(3,6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct final position.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reflection then vertical slide — combined transformation.", working: "\\text{reflect+translate}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Yes — reflection and translation preserve size and shape.", working: "\\text{congruent}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justification correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Translate by $\\begin{pmatrix}0\\\\-4\\end{pmatrix}$ then reflect in x-axis again.", working: "inverse steps", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct inverse order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(3,6)$ (b) reflection in x-axis then translation up 4 (c) yes, congruent (d) translate down 4 then reflect in x-axis",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Position correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Description clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Congruent justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Inverse correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) reversing order — inverse transformations must undo in reverse order."],
          },
        },
      ],
    },
    {
      id: "cilm-u7-rotation",
      title: "Rotation and enlargement",
      skill: "Rotate shapes about a centre and enlarge by scale factors.",
      lesson: {
        sections: [
          {
            heading: "Rotation",
            body: "Rotation turns a shape around a fixed centre point.\n\n- $90°$ clockwise: $(x,y) \\to (y,-x)$ about origin\n- $90°$ anticlockwise: $(x,y) \\to (-y,x)$\n- $180°$: $(x,y) \\to (-x,-y)$\n\nAlways state: angle, direction, centre.",
          },
          {
            heading: "Enlargement",
            body: "Scale factor $k$ multiplies all distances from centre: $(x,y) \\to (kx, ky)$ about origin.\n\n- $k>1$: bigger; $k=1$: same; $0<k<1$: smaller\n- Negative $k$: enlargement + rotation $180°$",
          },
          {
            heading: "Describing transformations",
            body: "Full description needs: type, angle (rotation), direction, centre point, or scale factor + centre (enlargement).",
          },
        ],
        keyFormulas: [
          { name: "Rotation 180°", statement: "$(x,y) \\to (-x,-y)$ about origin." },
          { name: "Enlargement", statement: "$(x,y) \\to (kx,ky)$ — scale factor times coordinates." },
        ],
        workedExample: {
          problem: "Enlarge triangle $(1,1), (2,1), (1,3)$ by scale factor $2$ about origin.",
          solution: "Image: $(2,2), (4,2), (2,6)$ — all coordinates doubled.",
        },
      },
      questions: [
        {
          id: "cilm-u7-rot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(3, -2)$ is rotated $180°$ about the origin. Where does it go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3, 2)$" },
              { id: "b", text: "$(3, 2)$" },
              { id: "c", text: "$(-3, -2)$" },
              { id: "d", text: "$(2, -3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "180° rotation", statement: "$(x,y) \\to (-x,-y)$ — both signs flip." },
            ],
            steps: [
              { reasoning: "$(-3, 2)$ — both coordinates negated.", working: "(-3,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(-3, 2)$",
            commonErrors: ["Choosing (b) — only one sign flipped."],
          },
        },
        {
          id: "cilm-u7-rot-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A shape is enlarged by scale factor $3$ about the origin. Point $(2, -1)$ maps to where?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Enlargement", statement: "$(x,y) \\to (3x,3y) = (6,-3)$." },
            ],
            steps: [
              { reasoning: "Multiply both coordinates by 3: $(6,-3)$.", working: "(6,-3)", marks: 1, markCode: "M" },
              { reasoning: "Image $(6,-3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(6, -3)$",
            commonErrors: ["Adding 3 instead of multiplying — scale factor multiplies."],
          },
        },
        {
          id: "cilm-u7-rot-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle with vertices $(1,1), (4,1), (4,3), (1,3)$ is enlarged by scale factor $\\frac{1}{2}$ about the origin. Find image vertices and describe what changed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractional enlargement", statement: "Multiply by $\\frac{1}{2}$: image is half size." },
            ],
            steps: [
              { reasoning: "$(0.5,0.5), (2,0.5), (2,1.5), (0.5,1.5)$.", working: "halve coords", marks: 1, markCode: "M" },
              { reasoning: "All four correct.", marks: 1, markCode: "M" },
              { reasoning: "Size halved; shape and angles preserved.", working: "\\text{smaller, same shape}", marks: 1, markCode: "M" },
              { reasoning: "Description accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(0.5,0.5), (2,0.5), (2,1.5), (0.5,1.5)$ — half-size, same shape",
            commonErrors: ["Dividing only one coordinate — scale factor applies to both."],
          },
        },
        {
          id: "cilm-u7-rot-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $ABC$: $A(2,1)$, $B(6,1)$, $C(6,5)$.",
          parts: [
            { label: "a", prompt: "Rotate $90°$ anticlockwise about origin. Give image vertices.", marks: 3 },
            { label: "b", prompt: "State angle, direction and centre of rotation.", marks: 2 },
            { label: "c", prompt: "Enlarge original by scale factor $2$ about origin instead. Give image vertices.", marks: 2 },
            { label: "d", prompt: "Compare: which transformation preserves orientation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rotation vs enlargement", statement: "Rotation changes orientation; enlargement preserves it (positive k)." },
            ],
            steps: [
              { part: "a", reasoning: "$90°$ ACW: $(x,y) \\to (-y,x)$: $A'(-1,2), B'(-1,6), C'(-5,6)$.", working: "(-y,x)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$90°$ anticlockwise about $(0,0)$.", working: "90° ACW, origin", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All elements stated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$A'(4,2), B'(12,2), C'(12,10)$.", working: "double coords", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Enlargement preserves orientation; rotation reverses it.", working: "\\text{enlargement preserves}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(-1,2),(-1,6),(-5,6)$ (b) $90°$ ACW about origin (c) $(4,2),(12,2),(12,10)$ (d) enlargement preserves orientation",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Vertices correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Description complete.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Incomplete.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (a) using clockwise rule — direction matters."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u7-transformations-notes",
      title: "Transformations — revision notes",
      summary: "Translations, reflections, rotations, enlargements on coordinate grids.",
      sections: [
        {
          heading: "Translation",
          body: "Add vector $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ to every point. Image − object = vector. Preserves everything except position.",
        },
        {
          heading: "Reflection",
          body: "x-axis: $(x,-y)$; y-axis: $(-x,y)$; $y=x$: $(y,x)$. Mirror line bisects object-image segments. Reverses orientation.",
        },
        {
          heading: "Rotation & enlargement",
          body: "$180°$: $(-x,-y)$. Enlargement: $(kx,ky)$. State angle+direction+centre for rotations; scale factor+centre for enlargements.",
        },
      ],
    },
  ],
};
