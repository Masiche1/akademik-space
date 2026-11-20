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
              { id: "a", text: "Translation" },
              { id: "b", text: "Reflection" },
              { id: "c", text: "Rotation" },
              { id: "d", text: "Enlargement" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Yes, sometimes" },
              { id: "b", text: "No, never" },
              { id: "c", text: "Only for translations" },
              { id: "d", text: "Only for reflections" },
            ],
            correctChoiceId: "a",
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
