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
              { id: "a", text: "$(6, 4)$" },
              { id: "b", text: "$(1, 6)$" },
              { id: "c", text: "$(5, 4)$" },
              { id: "d", text: "$(5, 6)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "Add vector: $(3+2, 5-1) = (5,4)$." },
            ],
            steps: [
              { reasoning: "$x: 3+2=5$; $y: 5+(-1)=4$ → $(5,4)$.", working: "(5,4)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(5, 4)$",
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
        {
          id: "cilm-u7-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(2, -3)$ is translated by vector $(4, 1)$. Where does it go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6, -2)$" },
              { id: "b", text: "$(-2, -2)$" },
              { id: "c", text: "$(2, 4)$" },
              { id: "d", text: "$(6, -4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Translation", statement: "Add the vector to both coordinates." }],
            steps: [{ reasoning: "$(2+4, -3+1) = (6,-2)$.", working: "(6,-2)", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $(6, -2)$",
            commonErrors: ["Subtracted the vertical component instead of adding it."],
          },
        },
        {
          id: "cilm-u7-trans-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(-1, 4)$ is translated by vector $(-2, 3)$. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Translation", statement: "Image coordinates are object plus vector." }],
            steps: [{ reasoning: "$-1 + (-2) = -3$.", working: "-3", marks: 1, markCode: "M" }],
            finalAnswer: "$-3$",
            commonErrors: ["Adding $2$ instead of $-2$ to the $x$-coordinate."],
          },
        },
        {
          id: "cilm-u7-trans-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $P(1, 5)$ maps to $P'(4, 2)$ under a translation. Find the translation vector.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Find vector", statement: "Vector = image − object." }],
            steps: [
              { reasoning: "Horizontal change: $4-1=3$; vertical change: $2-5=-3$.", working: "(3,-3)", marks: 1, markCode: "M" },
              { reasoning: "The translation vector is $(3,-3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, -3)$",
            commonErrors: ["Finding object − image instead of image − object."],
          },
        },
        {
          id: "cilm-u7-trans-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is translated. Which property is NOT changed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Location on the grid" },
              { id: "b", text: "Size" },
              { id: "c", text: "Coordinates of vertices" },
              { id: "d", text: "Position" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Translation", statement: "A translation preserves shape, size and orientation." }],
            steps: [{ reasoning: "Only position changes; size is invariant.", working: "size", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Size",
            commonErrors: ["Thinking every feature changes — only position changes."],
          },
        },
        {
          id: "cilm-u7-trans-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(5, -2)$ is translated by vector $(-4, 3)$. Find the $y$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "y-coordinate", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Translation", statement: "Add the vertical component to the $y$-coordinate." }],
            steps: [{ reasoning: "$-2+3=1$.", working: "1", marks: 1, markCode: "M" }],
            finalAnswer: "$1$",
            commonErrors: ["Using $-3$ instead of $+3$ for the vertical component."],
          },
        },
        {
          id: "cilm-u7-trans-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(1, 2)$ is translated by $(3, 0)$ and then by $(-1, 4)$. What is the final position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 6)$" },
              { id: "b", text: "$(3, 6)$" },
              { id: "c", text: "$(4, 2)$" },
              { id: "d", text: "$(3, 2)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Combined translations", statement: "Add both vectors to the point." }],
            steps: [{ reasoning: "$(1+3-1, 2+0+4)=(3,6)$.", working: "(3,6)", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $(3, 6)$",
            commonErrors: ["Applying only one of the two translations."],
          },
        },
        {
          id: "cilm-u7-trans-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A point is translated by $(2, -1)$ and then by $(1, 4)$. Find the single equivalent translation vector.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Equivalent translation", statement: "Combined vector is the sum of the two vectors." }],
            steps: [
              { reasoning: "Horizontal: $2+1=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Vertical: $-1+4=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Equivalent vector is $(3,3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 3)$",
            commonErrors: ["Subtracting the vectors instead of adding them."],
          },
        },
        {
          id: "cilm-u7-trans-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The origin $(0, 0)$ is translated by vector $(-2, 5)$. Find the $y$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "y-coordinate", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Translation", statement: "From the origin, the image is the vector itself." }],
            steps: [{ reasoning: "$0+5=5$.", working: "5", marks: 1, markCode: "M" }],
            finalAnswer: "$5$",
            commonErrors: ["Giving the whole vector instead of the requested coordinate."],
          },
        },
        {
          id: "cilm-u7-trans-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $A(2, 3)$ maps to $A'(5, 1)$ under a translation. Which vector describes the movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, -2)$" },
              { id: "b", text: "$(-3, 2)$" },
              { id: "c", text: "$(3, 2)$" },
              { id: "d", text: "$(-3, -2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Find vector", statement: "Vector = image − object = $(5-2,1-3)=(3,-2)$." }],
            steps: [{ reasoning: "The changes are $+3$ horizontally and $-2$ vertically.", working: "(3,-2)", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $(3, -2)$",
            commonErrors: ["Reversing the subtraction order."],
          },
        },
        {
          id: "cilm-u7-trans-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Under a translation, $(4, 6)$ maps to $(7, 2)$. Find the horizontal component of the translation vector.",
          response: { type: "numeric", parts: [{ label: "horizontal component", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Vector component", statement: "Horizontal component = image $x$ − object $x$." }],
            steps: [{ reasoning: "$7-4=3$.", working: "3", marks: 1, markCode: "M" }],
            finalAnswer: "$3$",
            commonErrors: ["Finding the vertical component instead."],
          },
        },
        {
          id: "cilm-u7-trans-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle has vertices $(1, 1)$, $(4, 1)$ and $(2, 5)$. Translate it by vector $(1, -2)$ and give all image vertices.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Translate vertices", statement: "Add the vector to every vertex." }],
            steps: [
              { reasoning: "$(1,1) \\to (2,-1)$ and $(4,1) \\to (5,-1)$.", working: "(2,-1),(5,-1)", marks: 1, markCode: "M" },
              { reasoning: "$(2,5) \\to (3,3)$.", working: "(3,3)", marks: 1, markCode: "M" },
              { reasoning: "Image vertices: $(2,-1)$, $(5,-1)$, $(3,3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,-1)$, $(5,-1)$, $(3,3)$",
            commonErrors: ["Applying the vector to only one vertex."],
          },
        },
        {
          id: "cilm-u7-trans-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A shape is translated by $(2, 1)$. Explain what stays the same and describe the inverse transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Translation properties", statement: "Translation preserves shape, size and orientation; the inverse subtracts the vector." }],
            steps: [
              { reasoning: "Shape, size, orientation and area stay the same.", working: "invariants", marks: 1, markCode: "M" },
              { reasoning: "The inverse translation vector is $(-2,-1)$.", working: "(-2,-1)", marks: 1, markCode: "M" },
              { reasoning: "Applying $(-2,-1)$ returns every point to its original position.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Size/shape/orientation preserved; inverse vector $(-2,-1)$",
            commonErrors: ["Using $(2,1)$ for the inverse instead of reversing signs."],
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
              { id: "b", text: "$(3, 4)$" },
              { id: "c", text: "$(-4, 3)$" },
              { id: "d", text: "$(-4, -3)$" },
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
        {
          id: "cilm-u7-refl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(-3, 4)$ is reflected in the x-axis. Where is the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3, -4)$" },
              { id: "b", text: "$(3, -4)$" },
              { id: "c", text: "$(3, 4)$" },
              { id: "d", text: "$(-4, 3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "x-axis reflection", statement: "$(x,y) \\to (x,-y)$." }],
            steps: [{ reasoning: "Only the $y$-coordinate changes sign.", working: "(-3,-4)", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $(-3, -4)$",
            commonErrors: ["Changing the $x$-coordinate as well."],
          },
        },
        {
          id: "cilm-u7-refl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(5, -2)$ is reflected in the y-axis. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "y-axis reflection", statement: "$(x,y) \\to (-x,y)$." }],
            steps: [{ reasoning: "The $x$-coordinate becomes $-5$; the $y$-coordinate stays $-2$.", working: "-5", marks: 1, markCode: "M" }],
            finalAnswer: "$-5$",
            commonErrors: ["Changing the $y$-coordinate instead of the $x$-coordinate."],
          },
        },
        {
          id: "cilm-u7-refl-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(2, 3)$ is reflected in the line $y=x$. Find the image point.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "y=x reflection", statement: "Reflection in $y=x$ swaps the coordinates." }],
            steps: [
              { reasoning: "Swap $x$ and $y$: $(2,3) \\to (3,2)$.", working: "(3,2)", marks: 1, markCode: "M" },
              { reasoning: "Image point is $(3,2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, 2)$",
            commonErrors: ["Negating coordinates instead of swapping them."],
          },
        },
        {
          id: "cilm-u7-refl-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a point is reflected in the x-axis, which coordinate changes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither coordinate" },
              { id: "b", text: "Both coordinates" },
              { id: "c", text: "Only the $x$-coordinate" },
              { id: "d", text: "Only the $y$-coordinate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "x-axis reflection", statement: "The horizontal coordinate is unchanged and the vertical coordinate is negated." }],
            steps: [{ reasoning: "Reflection in $y=0$ changes only the $y$-coordinate.", working: "y changes", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Only the $y$-coordinate",
            commonErrors: ["Confusing the x-axis with the y-axis."],
          },
        },
        {
          id: "cilm-u7-refl-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(-4, 1)$ is reflected in the line $y=2$. Find the $y$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "y-coordinate", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Reflect in horizontal line", statement: "For line $y=b$, the image is $(x,2b-y)$." }],
            steps: [{ reasoning: "$2(2)-1=3$.", working: "3", marks: 1, markCode: "M" }],
            finalAnswer: "$3$",
            commonErrors: ["Using $b-y$ instead of $2b-y$."],
          },
        },
        {
          id: "cilm-u7-refl-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(3, -2)$ is reflected in the x-axis and then in the y-axis. What is the final position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 2)$" },
              { id: "b", text: "$(-3, -2)$" },
              { id: "c", text: "$(2, -3)$" },
              { id: "d", text: "$(-3, 2)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Combined reflections", statement: "Apply reflections in order: $(3,-2) \\to (3,2) \\to (-3,2)$." }],
            steps: [{ reasoning: "Both coordinates change sign after the two reflections.", working: "(-3,2)", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $(-3, 2)$",
            commonErrors: ["Applying the y-axis reflection before the x-axis reflection."],
          },
        },
        {
          id: "cilm-u7-refl-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point $(5, 3)$ is reflected in the line $x=1$. Find the image point and explain the method.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reflect in vertical line", statement: "For line $x=a$, image is $(2a-x,y)$." }],
            steps: [
              { reasoning: "The $x$-coordinate becomes $2(1)-5=-3$; $y$ stays $3$.", working: "(-3,3)", marks: 1, markCode: "M" },
              { reasoning: "The image is $(-3,3)$, the same distance on the other side of $x=1$.", marks: 1, markCode: "M" },
              { reasoning: "Final answer with mirror-line reasoning is complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-3, 3)$",
            commonErrors: ["Reflecting in $y=1$ or forgetting to double the line position."],
          },
        },
        {
          id: "cilm-u7-refl-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(6, -7)$ is reflected in the y-axis. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -6 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "y-axis reflection", statement: "$(x,y) \\to (-x,y)$." }],
            steps: [{ reasoning: "$-6$ is the reflected $x$-coordinate.", working: "-6", marks: 1, markCode: "M" }],
            finalAnswer: "$-6$",
            commonErrors: ["Changing the $y$-coordinate instead."],
          },
        },
        {
          id: "cilm-u7-refl-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(2, 5)$ is reflected to $(2, -5)$. Which is the mirror line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The line $y=x$" },
              { id: "b", text: "The line $x=2$" },
              { id: "c", text: "The y-axis" },
              { id: "d", text: "The x-axis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Identify mirror line", statement: "Same $x$ and opposite $y$ values indicate reflection in the x-axis." }],
            steps: [{ reasoning: "$x$ is unchanged and $y$ changes sign, so the mirror line is $y=0$.", working: "x-axis", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** The x-axis",
            commonErrors: ["Choosing the y-axis because the point moved vertically."],
          },
        },
        {
          id: "cilm-u7-refl-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(-1, 4)$ is reflected in the line $y=x$. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "y=x reflection", statement: "Reflection in $y=x$ swaps the coordinates." }],
            steps: [{ reasoning: "The image is $(4,-1)$, so its $x$-coordinate is $4$.", working: "4", marks: 1, markCode: "M" }],
            finalAnswer: "$4$",
            commonErrors: ["Keeping the original $x$-coordinate unchanged."],
          },
        },
        {
          id: "cilm-u7-refl-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle has vertices $(1, 2)$, $(5, 2)$ and $(-2, 4)$. Reflect it in the x-axis and give the image vertices.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reflect vertices", statement: "Apply $(x,y) \\to (x,-y)$ to every vertex." }],
            steps: [
              { reasoning: "$(1,2) \\to (1,-2)$ and $(5,2) \\to (5,-2)$.", working: "(1,-2),(5,-2)", marks: 1, markCode: "M" },
              { reasoning: "$(-2,4) \\to (-2,-4)$.", working: "(-2,-4)", marks: 1, markCode: "M" },
              { reasoning: "Image vertices: $(1,-2)$, $(5,-2)$, $(-2,-4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,-2)$, $(5,-2)$, $(-2,-4)$",
            commonErrors: ["Negating only the first coordinate."],
          },
        },
        {
          id: "cilm-u7-refl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A point is reflected in the x-axis and then in the line $y=x$. Describe the single equivalent transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Combined reflections", statement: "$(x,y) \\to (x,-y) \\to (-y,x)$, which is a $90°$ anticlockwise rotation about the origin." }],
            steps: [
              { reasoning: "After the x-axis reflection, the point is $(x,-y)$.", working: "(x,-y)", marks: 1, markCode: "M" },
              { reasoning: "Reflecting in $y=x$ swaps coordinates to give $(-y,x)$.", working: "(-y,x)", marks: 1, markCode: "M" },
              { reasoning: "This is equivalent to rotation $90°$ anticlockwise about $(0,0)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rotation $90°$ anticlockwise about the origin",
            commonErrors: ["Describing only the two reflections instead of the single equivalent."],
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
              { id: "a", text: "$(2, -3)$" },
              { id: "b", text: "$(-3, 2)$" },
              { id: "c", text: "$(3, 2)$" },
              { id: "d", text: "$(-3, -2)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "180° rotation", statement: "$(x,y) \\to (-x,-y)$ — both signs flip." },
            ],
            steps: [
              { reasoning: "$(-3, 2)$ — both coordinates negated.", working: "(-3,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(-3, 2)$",
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
        {
          id: "cilm-u7-rot-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(2, 5)$ is rotated $90°$ anticlockwise about the origin. Where does it go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-5, 2)$" },
              { id: "b", text: "$(-2, 5)$" },
              { id: "c", text: "$(5, -2)$" },
              { id: "d", text: "$(2, -5)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "90° anticlockwise", statement: "$(x,y) \\to (-y,x)$ about the origin." },
            ],
            steps: [
              { reasoning: "$(-5, 2)$ — swap coordinates and negate the new $x$.", working: "(-5,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(-5, 2)$",
            commonErrors: ["Choosing (b) — that is the clockwise result $(y,-x)$."],
          },
        },
        {
          id: "cilm-u7-rot-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(4, -1)$ is enlarged by scale factor $3$ about the origin. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Enlargement", statement: "$(x,y) \\to (kx,ky)$ — multiply both coordinates by $k$." },
            ],
            steps: [
              { reasoning: "$3 \\times 4 = 12$.", working: "3\\times4=12", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Adding $3$ instead of multiplying — scale factor multiplies."],
          },
        },
        {
          id: "cilm-u7-rot-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(2, 3)$ is rotated $90°$ clockwise about the origin. Where does it go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3, 2)$" },
              { id: "b", text: "$(2, 3)$" },
              { id: "c", text: "$(-2, -3)$" },
              { id: "d", text: "$(3, -2)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "90° clockwise", statement: "$(x,y) \\to (y,-x)$ about the origin." },
            ],
            steps: [
              { reasoning: "$(y,-x) = (3,-2)$.", working: "(3,-2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $(3, -2)$",
            commonErrors: ["Choosing (b) — that is the anticlockwise result $(-y,x)$."],
          },
        },
        {
          id: "cilm-u7-rot-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(3, -2)$ is rotated $180°$ about the origin, then the image is enlarged by scale factor $2$ about the origin. Find the final coordinates.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -6 }, { label: "y-coordinate", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined transformations", statement: "Apply in order: rotate $180°$ gives $(-x,-y)$, then multiply by $2$." },
            ],
            steps: [
              { reasoning: "After $180°$ rotation: $(-3, 2)$.", working: "(-3,2)", marks: 1, markCode: "M" },
              { reasoning: "After enlargement by $2$: $(-6, 4)$.", working: "(-6,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-6, 4)$",
            commonErrors: ["Applying enlargement first — order matters for combined transformations."],
          },
        },
        {
          id: "cilm-u7-rot-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has vertices $(1, 1)$, $(3, 1)$ and $(1, 4)$. It is enlarged by scale factor $3$ about the origin. Give the image vertices and describe the enlargement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enlargement", statement: "$(x,y) \\to (3x,3y)$; shape and angles preserved, size tripled." },
            ],
            steps: [
              { reasoning: "$(1,1) \\to (3,3)$; $(3,1) \\to (9,3)$; $(1,4) \\to (3,12)$.", working: "(3,3),(9,3),(3,12)", marks: 1, markCode: "M" },
              { reasoning: "All three vertices correct.", marks: 1, markCode: "M" },
              { reasoning: "Scale factor $3$, centre origin; shape and angles unchanged, size $3$ times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,3)$, $(9,3)$, $(3,12)$; enlargement, scale factor $3$ about $(0,0)$",
            commonErrors: ["Adding $3$ to each coordinate instead of multiplying by $3$."],
          },
        },
        {
          id: "cilm-u7-rot-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(1, -3)$ is enlarged by scale factor $-1$ about the origin. Where does it go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, -1)$" },
              { id: "b", text: "$(1, -3)$" },
              { id: "c", text: "$(-1, 3)$" },
              { id: "d", text: "$(-3, 1)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Negative scale factor", statement: "$k=-1$ multiplies both coordinates by $-1$ — equivalent to $180°$ rotation." },
            ],
            steps: [
              { reasoning: "Multiply each coordinate by $-1$: $(1,-3) \\to (-1, 3)$.", working: "(-1,3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(-1, 3)$",
            commonErrors: ["Choosing (d) — that swaps coordinates; scale factor multiplies each coordinate separately."],
          },
        },
        {
          id: "cilm-u7-rot-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "An enlargement about the origin maps $(2, 5)$ to $(8, 20)$. What is the scale factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$16$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Find scale factor", statement: "$k = \\frac{\\text{image}}{\\text{object}} = \\frac{8}{2} = \\frac{20}{5} = 4$." },
            ],
            steps: [
              { reasoning: "$\\frac{8}{2}=4$ (and $\\frac{20}{5}=4$ confirms).", working: "8/2=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4$",
            commonErrors: ["Choosing (d) — $16$ is the product $4\\times4$, not the scale factor."],
          },
        },
        {
          id: "cilm-u7-rot-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle $A(1, 2)$, $B(4, 2)$, $C(4, 6)$ is rotated $90°$ clockwise about the origin. Give the image vertices and fully describe the transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rotation", statement: "$90°$ clockwise: $(x,y) \\to (y,-x)$; describe angle, direction and centre." },
            ],
            steps: [
              { reasoning: "$A(2,-1)$, $B(2,-4)$, $C(6,-4)$.", working: "(2,-1),(2,-4),(6,-4)", marks: 1, markCode: "M" },
              { reasoning: "All three vertices correct.", marks: 1, markCode: "M" },
              { reasoning: "Accurate coordinates.", marks: 1, markCode: "M" },
              { reasoning: "Description: rotation $90°$ clockwise about $(0,0)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,-1)$, $(2,-4)$, $(6,-4)$; rotation $90°$ clockwise about the origin",
            commonErrors: ["Using the anticlockwise rule — check the direction stated in the question."],
          },
        },
        {
          id: "cilm-u7-rot-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which property is invariant under an enlargement with scale factor $2$ about the origin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Size" },
              { id: "b", text: "Position" },
              { id: "c", text: "Distance from the origin" },
              { id: "d", text: "Shape and angles" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enlargement invariants", statement: "Enlargement preserves shape, angles and orientation; size and distances change." },
            ],
            steps: [
              { reasoning: "Shape and angles are preserved; distances double and size changes.", working: "shape, angles", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Shape and angles",
            commonErrors: ["Choosing (a) — an enlargement with $k \\neq 1$ changes size."],
          },
        },
        {
          id: "cilm-u7-rot-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(6, -3)$ is rotated $90°$ anticlockwise about the origin. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "90° anticlockwise", statement: "$(x,y) \\to (-y,x)$ — the new $x$ is $-y$." },
            ],
            steps: [
              { reasoning: "New $x = -(-3) = 3$.", working: "3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Using the clockwise rule — anticlockwise is $(-y,x)$."],
          },
        },
        {
          id: "cilm-u7-rot-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A square has vertices $(0, 0)$, $(2, 0)$, $(2, 1)$ and $(0, 1)$. It is enlarged by scale factor $4$ about the origin. Give the image vertices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enlargement", statement: "$(x,y) \\to (4x,4y)$ for every vertex." },
            ],
            steps: [
              { reasoning: "$(0,0) \\to (0,0)$; $(2,0) \\to (8,0)$; $(2,1) \\to (8,4)$; $(0,1) \\to (0,4)$.", working: "(0,0),(8,0),(8,4),(0,4)", marks: 1, markCode: "M" },
              { reasoning: "All four vertices correct.", marks: 1, markCode: "M" },
              { reasoning: "Image vertices: $(0,0)$, $(8,0)$, $(8,4)$, $(0,4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(0,0)$, $(8,0)$, $(8,4)$, $(0,4)$",
            commonErrors: ["Leaving the origin vertex unmoved incorrectly — $(0,0)$ stays $(0,0)$ but all others must be multiplied by $4$."],
          },
        },
        {
          id: "cilm-u7-rot-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Triangle $P(3, 1)$, $Q(7, 1)$, $R(7, 5)$.",
          parts: [
            { label: "a", prompt: "Rotate the triangle $180°$ about the origin. Give the image vertices.", marks: 3 },
            { label: "b", prompt: "Enlarge the ORIGINAL triangle by scale factor $3$ about the origin. Give the image vertices.", marks: 2 },
            { label: "c", prompt: "State the full description of the transformation in part (a).", marks: 2 },
            { label: "d", prompt: "Which of the two transformations preserves orientation? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rotation vs enlargement", statement: "$180°$ rotation maps $(x,y) \\to (-x,-y)$; enlargement $(x,y) \\to (kx,ky)$; positive scale factor preserves orientation." },
            ],
            steps: [
              { part: "a", reasoning: "$P'(-3,-1)$, $Q'(-7,-1)$, $R'(-7,-5)$.", working: "(-x,-y)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P'(9,3)$, $Q'(21,3)$, $R'(21,15)$.", working: "3x,3y", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rotation $180°$ about $(0,0)$ — angle, direction irrelevant for $180°$, centre stated.", working: "180°\\text{ about }(0,0)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Enlargement preserves orientation; rotation by $180°$ reverses it.", working: "\\text{enlargement preserves}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justification correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(-3,-1),(-7,-1),(-7,-5)$ (b) $(9,3),(21,3),(21,15)$ (c) rotation $180°$ about origin (d) enlargement — positive scale factor preserves orientation",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Vertices correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Description complete.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Incomplete.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (a) applying the $90°$ rule — $180°$ negates both coordinates."],
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
