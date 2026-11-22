import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cilm-u7-lesson-7-2",
  code: "7-2",
  title: "Describing transformations",
  goal: "I CAN identify and fully describe transformations mapping one shape to another.",
  standards: ["0862 Geometry: describing transformations"],
  vocabulary: [
    { term: "Object", definition: "The original shape before transformation." },
    { term: "Image", definition: "The shape after transformation." },
    { term: "Centre of enlargement", definition: "Fixed point distances are measured from." },
    { term: "Centre of rotation", definition: "The point the shape turns around." },
    { term: "Mirror line", definition: "The line of reflection." },
    { term: "Corresponding points", definition: "Object and image points that match under the transformation." },
  ],
  concepts: [
    {
      id: "cilm-u7-describe",
      title: "Identifying transformations",
      skill: "Compare object and image to identify the transformation type and its parameters.",
      lesson: {
        sections: [
          {
            heading: "Decision guide",
            body: "- Same orientation, shifted → **translation** (find vector)\n- Mirrored → **reflection** (find mirror line)\n- Turned → **rotation** (angle, direction, centre)\n- Bigger/smaller, same orientation → **enlargement** (scale factor, centre)",
          },
          {
            heading: "Finding the centre",
            body: "For enlargement: draw lines from centre through object and image points — they intersect at the centre. For rotation: find point equidistant from corresponding points.",
          },
          {
            heading: "Multiple transformations",
            body: "Sometimes one transformation can't map object to image — describe as a combination (e.g. reflection then translation).",
          },
        ],
        keyFormulas: [
          { name: "Enlargement centre", statement: "Lines joining corresponding points pass through the centre." },
        ],
        workedExample: {
          problem: "Object point $(2,2)$ maps to image $(6,6)$. Original also had $(4,2) \\to (12,6)$. Guess the enlargement.",
          solution: "Distances from origin triple: scale factor $3$, centre $(0,0)$ — check $(4,2)\\to(12,6)$ ✓.",
        },
      },
      questions: [
        {
          id: "cilm-u7-desc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape moves 5 right and 2 up, keeping the same orientation. What transformation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rotation" },
              { id: "b", text: "Enlargement" },
              { id: "c", text: "Reflection" },
              { id: "d", text: "Translation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translation", statement: "Slide without turning or flipping — orientation preserved." },
            ],
            steps: [
              { reasoning: "Same orientation, uniform shift → translation by $\\begin{pmatrix}5\\\\2\\end{pmatrix}$.", working: "translation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Translation",
            commonErrors: ["Choosing (c) — no turning occurred."],
          },
        },
        {
          id: "cilm-u7-desc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An image is the same shape but upside-down relative to the object. Which transformation could this be?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify type", statement: "Orientation reversed → reflection or $180°$ rotation or negative enlargement." },
            ],
            steps: [
              { reasoning: "Upside-down = orientation reversed.", working: "\\text{reversed}", marks: 1, markCode: "M" },
              { reasoning: "Could be reflection, $180°$ rotation, or negative scale enlargement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection, $180°$ rotation, or enlargement with negative scale factor.",
            commonErrors: ["Saying only reflection — rotation $180°$ also reverses orientation."],
          },
        },
        {
          id: "cilm-u7-desc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point $P(2,3)$ maps to $P'(4,6)$ under an enlargement. Point $Q(4,3)$ maps to $Q'(8,6)$. Find the scale factor and centre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enlargement parameters", statement: "Scale factor from distance ratio; centre where lines through corresponding points meet." },
            ],
            steps: [
              { reasoning: "Both coordinates doubled → scale factor $2$.", working: "k=2", marks: 1, markCode: "M" },
              { reasoning: "Lines through $P,P'$ and $Q,Q'$ meet at origin $(0,0)$.", working: "centre=(0,0)", marks: 1, markCode: "M" },
              { reasoning: "Scale factor $2$, centre origin.", marks: 1, markCode: "M" },
              { reasoning: "Correct parameters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scale factor $2$, centre $(0,0)$",
            commonErrors: ["Finding scale factor from one point only — use ratios of distances."],
          },
        },
        {
          id: "cilm-u7-desc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Object triangle: $A(1,1), B(3,1), C(1,4)$. Image triangle: $A'(1,-1), B'(3,-1), C'(1,-4)$.",
          parts: [
            { label: "a", prompt: "Identify the transformation type.", marks: 2 },
            { label: "b", prompt: "Find the mirror line or describe fully.", marks: 3 },
            { label: "c", prompt: "Verify with one point.", marks: 2 },
            { label: "d", prompt: "What happens to orientation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify reflection", statement: "y-coordinates negated, x unchanged → reflection in x-axis." },
            ],
            steps: [
              { part: "a", reasoning: "Reflection — orientation reversed, shape/size preserved.", working: "\\text{reflection}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct type.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mirror line is x-axis ($y=0$): $(x,y)\\to(x,-y)$.", working: "y=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mirror line identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Full description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$A(1,1)\\to(1,-1)=A'$ ✓.", working: "verified", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verification correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Orientation reversed (anticlockwise ↔ clockwise).", working: "\\text{reversed}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reflection (b) in x-axis $y=0$ (c) $A\\to A'$ verified (d) orientation reversed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Type correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Fully described.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Verified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (b) saying 'y-axis' — coordinates show x unchanged, y flipped → x-axis."],
          },
        },
        {
          id: "cilm-u7-desc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An image is a mirror-image flip of the object with the same size. Which transformation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Enlargement" },
              { id: "d", text: "Rotation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection", statement: "Mirror flip — orientation reversed, size preserved." },
            ],
            steps: [
              { reasoning: "Mirror-image flip → reflection.", working: "reflection", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reflection",
            commonErrors: ["Choosing (c) — rotation turns, doesn't flip."],
          },
        },
        {
          id: "cilm-u7-desc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(2, 5)$ is reflected in the x-axis. Find the $y$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "y-coordinate", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "x-axis reflection", statement: "$(x,y) \\to (x,-y)$." },
            ],
            steps: [
              { reasoning: "$y$-coordinate becomes $-5$.", working: "-5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$-5$",
            commonErrors: ["Giving $5$ — sign must flip."],
          },
        },
        {
          id: "cilm-u7-desc-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(3, 1)$ maps to $(3, -1)$. Describe the transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify reflection", statement: "x unchanged, y negated → reflection in x-axis." },
            ],
            steps: [
              { reasoning: "Only $y$ changes sign → reflection in the x-axis ($y=0$).", working: "y=0", marks: 1, markCode: "M" },
              { reasoning: "Reflection in x-axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the x-axis",
            commonErrors: ["Saying translation — the point flipped sides of the axis."],
          },
        },
        {
          id: "cilm-u7-desc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An image is the same shape, same orientation, but three times larger. Which transformation is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rotation" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Enlargement, scale factor $3$" },
              { id: "d", text: "Reflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enlargement", statement: "Same orientation, scaled size → enlargement with positive SF." },
            ],
            steps: [
              { reasoning: "Bigger, same orientation → enlargement SF $3$.", working: "k=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Enlargement, scale factor $3$",
            commonErrors: ["Choosing (a) — size changed, so not a translation."],
          },
        },
        {
          id: "cilm-u7-desc-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(0, 4)$ is translated by vector $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "Add vector components to coordinates." },
            ],
            steps: [
              { reasoning: "$0+2 = 2$.", working: "2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["$-2$ — sign error on the vector component."],
          },
        },
        {
          id: "cilm-u7-desc-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point $P(1, 2)$ maps to $P'(3, 6)$ and point $Q(2, 1)$ maps to $Q'(6, 3)$ under an enlargement. Find the scale factor and centre of enlargement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Enlargement parameters", statement: "Distances triple from origin → SF $3$, centre $(0,0)$." },
            ],
            steps: [
              { reasoning: "Both coordinates triple: $(1,2)\\to(3,6)$ and $(2,1)\\to(6,3)$ → SF $3$.", working: "k=3", marks: 1, markCode: "M" },
              { reasoning: "Lines through corresponding points meet at $(0,0)$.", working: "(0,0)", marks: 1, markCode: "M" },
              { reasoning: "SF $=3$, centre $(0,0)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scale factor $3$, centre $(0,0)$",
            commonErrors: ["Using only one point pair — verify with both."],
          },
        },
        {
          id: "cilm-u7-desc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transformation preserves size and shape but reverses orientation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enlargement with SF $>1$" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Rotation by $90°$" },
              { id: "d", text: "Reflection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isometries", statement: "Translation/rotation preserve orientation; reflection reverses it; enlargement changes size." },
            ],
            steps: [
              { reasoning: "Reflection reverses orientation while keeping size.", working: "reflection", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reflection",
            commonErrors: ["Choosing (d) — rotation preserves orientation."],
          },
        },
        {
          id: "cilm-u7-desc-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(5, -2)$ is rotated $90°$ clockwise about the origin. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "90° clockwise", statement: "$(x,y) \\to (y,-x)$: $(5,-2) \\to (-2,-5)$." },
            ],
            steps: [
              { reasoning: "$(x,y)\\to(y,-x)$ gives $(-2,-5)$; $x$-coordinate $=-2$.", working: "-2", marks: 1, markCode: "M" },
              { reasoning: "$x$-coordinate is $-2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2$",
            commonErrors: ["$5$ — swapped coordinates incorrectly."],
          },
        },
        {
          id: "cilm-u7-desc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An object maps to an image that is turned through a right angle with the same size. This is most likely...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An enlargement" },
              { id: "b", text: "A translation" },
              { id: "c", text: "A reflection" },
              { id: "d", text: "A rotation of $90°$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation", statement: "Turning about a centre — right angle turn = $90°$ rotation." },
            ],
            steps: [
              { reasoning: "Turned a right angle → rotation of $90°$.", working: "90°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A rotation of $90°$",
            commonErrors: ["Choosing (a) — a flip isn't a turn."],
          },
        },
        {
          id: "cilm-u7-desc-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Segment $AB$ from $A(1, 2)$ to $B(4, 2)$ maps to segment $A'B'$ from $A'(1, -2)$ to $B'(4, -2)$.",
          parts: [
            { label: "a", prompt: "Identify the transformation type.", marks: 2 },
            { label: "b", prompt: "State the mirror line or full parameters.", marks: 2 },
            { label: "c", prompt: "Describe what happens to the orientation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify transformation", statement: "y-coordinates negated, x unchanged → reflection in x-axis." },
            ],
            steps: [
              { part: "a", reasoning: "Reflection — orientation reversed, size preserved.", working: "reflection", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mirror line is the x-axis $y=0$: $(x,y)\\to(x,-y)$.", working: "y=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Orientation is reversed (clockwise ↔ anticlockwise).", working: "reversed", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reflection (b) x-axis $y=0$ (c) orientation reversed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Saying 'y-axis' — x stayed the same, y flipped."],
          },
        },
        {
          id: "cilm-u7-desc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(3, 4)$ is enlarged by scale factor $2$ about the origin. What is the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6, 8)$" },
              { id: "b", text: "$(5, 6)$" },
              { id: "c", text: "$(1.5, 2)$" },
              { id: "d", text: "$(6, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Enlargement", statement: "SF $k$ about origin multiplies both coordinates by $k$." },
            ],
            steps: [
              { reasoning: "$(3,4) \\times 2 = (6,8)$.", working: "(6,8)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(6, 8)$",
            commonErrors: ["Choosing (a) — added 2 instead of multiplying."],
          },
        },
        {
          id: "cilm-u7-desc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points $(2, 1)$ and $(5, 3)$ map to $(2, -1)$ and $(5, -3)$. Describe the transformation fully.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Identify transformation", statement: "x unchanged, y negated → reflection in x-axis." },
            ],
            steps: [
              { reasoning: "Both points keep $x$ and negate $y$: $(x,y)\\to(x,-y)$.", working: "(x,-y)", marks: 1, markCode: "M" },
              { reasoning: "This is reflection in the x-axis ($y=0$).", working: "y=0", marks: 1, markCode: "M" },
              { reasoning: "Full description: reflection in x-axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the x-axis",
            commonErrors: ["Only checking one point — verify both correspondences."],
          },
        },
      ],
    },
    {
      id: "cilm-u7-combined",
      title: "Combined transformations",
      skill: "Describe sequences of transformations and find single equivalents.",
      lesson: {
        sections: [
          {
            heading: "Sequences",
            body: "Transformations can be combined: e.g. reflect then translate, or rotate then enlarge. Order matters — apply in sequence.",
          },
          {
            heading: "Single equivalents",
            body: "Some combinations equal a single transformation:\n- Reflect x-axis then y-axis = rotate $180°$\n- Two reflections in parallel lines = translation\n- Reflect then reflect in perpendicular lines = rotation $180°$",
          },
          {
            heading: "Describing fully",
            body: "For sequences, state each step: \"Reflection in x-axis followed by translation $\\begin{pmatrix}2\\\\0\\end{pmatrix}$.\"",
          },
        ],
        keyFormulas: [
          { name: "Order matters", statement: "Apply transformations in the stated sequence; different orders can give different results." },
        ],
        workedExample: {
          problem: "Point $(2,3)$ is reflected in x-axis then translated by $\\begin{pmatrix}1\\\\0\\end{pmatrix}$. Find final position.",
          solution: "Reflect: $(2,-3)$. Translate: $(3,-3)$.",
        },
      },
      questions: [
        {
          id: "cilm-u7-comb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Does the order of transformations matter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only for translations" },
              { id: "b", text: "No, never" },
              { id: "c", text: "Only for reflections" },
              { id: "d", text: "Yes, sometimes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order", statement: "Some sequences commute; most don't — always apply in order." },
            ],
            steps: [
              { reasoning: "Order can matter — e.g. reflect-then-translate differs from translate-then-reflect.", working: "\\text{sometimes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Yes, sometimes",
            commonErrors: ["Choosing (b) — most transformation sequences are order-dependent."],
          },
        },
        {
          id: "cilm-u7-comb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(1,4)$ is translated by $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$, then reflected in the x-axis. Find the final position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Translate: $(3,3)$; reflect x-axis: $(3,-3)$." },
            ],
            steps: [
              { reasoning: "After translation $(3,3)$; after x-axis reflection $(3,-3)$.", working: "(3,-3)", marks: 1, markCode: "M" },
              { reasoning: "Final $(3,-3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3, -3)$",
            commonErrors: ["Applying in wrong order — translate first, then reflect."],
          },
        },
        {
          id: "cilm-u7-comb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the single transformation equivalent to: reflect in x-axis, then reflect in y-axis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined equivalent", statement: "$(x,y)\\to(x,-y)\\to(-x,-y)$ = rotation $180°$." },
            ],
            steps: [
              { reasoning: "x-axis: $(x,-y)$; y-axis: $(-x,-y)$.", working: "(-x,-y)", marks: 1, markCode: "M" },
              { reasoning: "Equivalent to rotation $180°$ about origin.", working: "180°", marks: 1, markCode: "M" },
              { reasoning: "$180°$ rotation.", marks: 1, markCode: "M" },
              { reasoning: "Correct identification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rotation of $180°$ about the origin",
            commonErrors: ["Saying 'two reflections' — the question asks for single equivalent."],
          },
        },
        {
          id: "cilm-u7-comb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Point $P(4,2)$ undergoes: enlarge by SF $2$ about origin, then reflect in y-axis.",
          parts: [
            { label: "a", prompt: "Find position after enlargement.", marks: 2 },
            { label: "b", prompt: "Find position after reflection.", marks: 2 },
            { label: "c", prompt: "Describe the combined transformation as a single enlargement.", marks: 3 },
            { label: "d", prompt: "Find the image of $Q(1,3)$ under the same sequence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined transformations", statement: "Enlarge then reflect = enlarge with negative scale factor $-2$." },
            ],
            steps: [
              { part: "a", reasoning: "$P \\to (8,4)$.", working: "(8,4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reflect y-axis: $(-8,4)$.", working: "(-8,4)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Net effect: $(x,y)\\to(-2x,2y)$ = enlargement SF $-2$.", working: "k=-2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Negative SF includes rotation $180°$.", working: "\\text{neg SF}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$Q(1,3)\\to(2,6)\\to(-2,6)$.", working: "(-2,6)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(8,4)$ (b) $(-8,4)$ (c) enlargement SF $-2$ (d) $(-2,6)$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Single equivalent found.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) missing the negative sign — reflection adds the flip."],
          },
        },
        {
          id: "cilm-u7-comb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two reflections in parallel lines are together equivalent to a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation" },
              { id: "b", text: "Enlargement" },
              { id: "c", text: "Rotation" },
              { id: "d", text: "Single reflection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equivalent transformations", statement: "Two reflections in parallel lines = translation." },
            ],
            steps: [
              { reasoning: "Parallel mirror lines → net translation.", working: "translation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Translation",
            commonErrors: ["Choosing (a) — parallel reflections don't rotate."],
          },
        },
        {
          id: "cilm-u7-comb-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Point $(1, 2)$ is reflected in the x-axis, then translated by $\\begin{pmatrix}3\\\\0\\end{pmatrix}$. Find the $x$-coordinate of the final image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Reflect: $(1,-2)$; translate: $(4,-2)$." },
            ],
            steps: [
              { reasoning: "$x$: $1+3 = 4$.", working: "4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["$-2$ — forgot the reflection flips $y$, not $x$."],
          },
        },
        {
          id: "cilm-u7-comb-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(2, 3)$ is translated by $\\begin{pmatrix}1\\\\-1\\end{pmatrix}$, then reflected in the y-axis. Find the final position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Translate: $(3,2)$; reflect y-axis: $(-3,2)$." },
            ],
            steps: [
              { reasoning: "After translation $(3,2)$; y-axis reflection negates $x$: $(-3,2)$.", working: "(-3,2)", marks: 1, markCode: "M" },
              { reasoning: "Final position $(-3,2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(-3, 2)$",
            commonErrors: ["Applying reflection first — order matters."],
          },
        },
        {
          id: "cilm-u7-comb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A reflection in the x-axis followed by a reflection in the y-axis is equivalent to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A translation" },
              { id: "b", text: "An enlargement" },
              { id: "c", text: "A rotation of $180°$" },
              { id: "d", text: "Nothing — they cancel" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equivalent transformations", statement: "$(x,y)\\to(x,-y)\\to(-x,-y)$ = rotation $180°$." },
            ],
            steps: [
              { reasoning: "Both coordinates negate = $180°$ rotation about origin.", working: "180°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A rotation of $180°$",
            commonErrors: ["Choosing (d) — reflections in perpendicular axes don't cancel."],
          },
        },
        {
          id: "cilm-u7-comb-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(4, 1)$ is enlarged by SF $2$ about the origin, then reflected in the y-axis. Find the $x$-coordinate of the final image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -8 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Enlarge: $(8,2)$; reflect y-axis: $(-8,2)$." },
            ],
            steps: [
              { reasoning: "$x = 4\\times2 = 8$, then negated: $-8$.", working: "-8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$-8$",
            commonErrors: ["$8$ — forgot the y-axis reflection negates $x$."],
          },
        },
        {
          id: "cilm-u7-comb-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Point $(2, 5)$ is reflected in the x-axis, then translated by $\\begin{pmatrix}0\\\\3\\end{pmatrix}$. Find the final position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Reflect: $(2,-5)$; translate: $(2,-2)$." },
            ],
            steps: [
              { reasoning: "Reflect x-axis: $(2,-5)$.", working: "(2,-5)", marks: 1, markCode: "M" },
              { reasoning: "Translate: $(2,-5)+(0,3) = (2,-2)$.", working: "(2,-2)", marks: 1, markCode: "M" },
              { reasoning: "Final position $(2,-2)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2, -2)$",
            commonErrors: ["Translating before reflecting — wrong order."],
          },
        },
        {
          id: "cilm-u7-comb-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property is NOT preserved by a translation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shape" },
              { id: "b", text: "Size" },
              { id: "c", text: "Orientation" },
              { id: "d", text: "Position" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Translation", statement: "Only position changes; size, shape, orientation preserved." },
            ],
            steps: [
              { reasoning: "Position changes — everything else is preserved.", working: "position", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Position",
            commonErrors: ["Choosing (c) — orientation IS preserved."],
          },
        },
        {
          id: "cilm-u7-comb-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point $(3, -2)$ is rotated $180°$ about the origin, then reflected in the x-axis. Find the $x$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Rotate $180°$: $(-3,2)$; reflect x-axis: $(-3,-2)$." },
            ],
            steps: [
              { reasoning: "$x$: $3\\to-3$ under $180°$ rotation; reflection in x-axis doesn't change $x$.", working: "-3", marks: 1, markCode: "M" },
              { reasoning: "$x$-coordinate $=-3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3$",
            commonErrors: ["$3$ — forgot the $180°$ rotation negates both coordinates."],
          },
        },
        {
          id: "cilm-u7-comb-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(3, 4)$ is reflected in the y-axis, then translated by $\\begin{pmatrix}1\\\\0\\end{pmatrix}$. What is the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4, 4)$" },
              { id: "b", text: "$(2, 4)$" },
              { id: "c", text: "$(-2, 4)$" },
              { id: "d", text: "$(-3, 4)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Reflect y-axis: $(-3,4)$; translate: $(-2,4)$." },
            ],
            steps: [
              { reasoning: "$(-3,4)+(1,0) = (-2,4)$.", working: "(-2,4)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(-2, 4)$",
            commonErrors: ["Choosing (d) — forgot the y-axis reflection negates $x$ first."],
          },
        },
        {
          id: "cilm-u7-comb-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Point $P(2, 1)$ is enlarged by scale factor $3$ about the origin, then translated by $\\begin{pmatrix}-4\\\\0\\end{pmatrix}$.",
          parts: [
            { label: "a", prompt: "Find the position after the enlargement.", marks: 2 },
            { label: "b", prompt: "Find the final position after the translation.", marks: 2 },
            { label: "c", prompt: "Find the image of $Q(1, 2)$ under the same sequence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combined transformations", statement: "Apply in order: enlarge then translate." },
            ],
            steps: [
              { part: "a", reasoning: "$P \\to (6,3)$ after enlargement.", working: "(6,3)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$(6,3)+(-4,0) = (2,3)$.", working: "(2,3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$Q(1,2)\\to(3,6)\\to(-1,6)$.", working: "(-1,6)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(6,3)$ (b) $(2,3)$ (c) $(-1,6)$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Applying translation before enlargement — wrong order."],
          },
        },
        {
          id: "cilm-u7-comb-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Point $(5, 3)$ is reflected in the x-axis, then translated by $\\begin{pmatrix}2\\\\0\\end{pmatrix}$. What is the image?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(7, 3)$" },
              { id: "b", text: "$(3, 3)$" },
              { id: "c", text: "$(3, -3)$" },
              { id: "d", text: "$(7, -3)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequence", statement: "Reflect: $(5,-3)$; translate: $(7,-3)$." },
            ],
            steps: [
              { reasoning: "$(5,-3)+(2,0) = (7,-3)$.", working: "(7,-3)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(7, -3)$",
            commonErrors: ["Choosing (a) — forgot the x-axis reflection flips $y$."],
          },
        },
        {
          id: "cilm-u7-comb-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain, with an example, why the order of transformations can matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Order matters", statement: "Some sequences give different results in different orders." },
            ],
            steps: [
              { reasoning: "Example: point $(1,2)$, translate by $(1,0)$ gives $(2,2)$, then reflect in y-axis gives $(-2,2)$.", working: "(-2,2)", marks: 1, markCode: "M" },
              { reasoning: "Reverse order: reflect first $(-1,2)$, then translate $(0,2)$ — different result.", working: "(0,2)", marks: 1, markCode: "M" },
              { reasoning: "Therefore order matters — must apply in stated sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Different orders can give different images; e.g. translate-then-reflect gave $(-2,2)$ vs reflect-then-translate $(0,2)$.",
            commonErrors: ["Claiming order never matters — counterexamples exist."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u7-describe-notes",
      title: "Describing transformations — revision notes",
      summary: "Identify type, find parameters, combine sequences.",
      sections: [
        {
          heading: "Identifying",
          body: "Slide=translation; flip=reflection; turn=rotation; resize=enlargement. Full description needs all parameters.",
        },
        {
          heading: "Combining",
          body: "Apply in order. Some combos = single transformations (two axis reflections = 180° rotation). Negative SF = enlarge + rotate.",
        },
      ],
    },
  ],
};
