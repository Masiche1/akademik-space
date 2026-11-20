import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cilm-u7-lesson-7-3",
  code: "7-3",
  title: "Transformations in context",
  goal: "I CAN apply transformations to real-world situations and interpret the results.",
  standards: ["0862 Geometry: transformations in context"],
  vocabulary: [
    { term: "Map transformation", definition: "Using coordinate grids to model real locations." },
    { term: "Floor plan", definition: "Scale drawing of a room or building layout." },
    { term: "Symmetry operation", definition: "Transformations that create symmetric patterns." },
    { term: "Tile pattern", definition: "Repeated transformed shapes forming a pattern." },
    { term: "Frieze pattern", definition: "A repeating pattern along a line using translations and reflections." },
    { term: "Robot motion", definition: "Transformations modelling movement in programming/robotics." },
  ],
  concepts: [
    {
      id: "cilm-u7-context",
      title: "Transformations in real contexts",
      skill: "Apply transformations to maps, patterns, designs and navigation problems.",
      lesson: {
        sections: [
          {
            heading: "Maps and grids",
            body: "Coordinate grids model streets, fields, rooms. Translations = moving objects; reflections = mirror images; rotations = turning; enlargements = scaling models.",
          },
          {
            heading: "Patterns and tiling",
            body: "Repeated transformations create patterns: translations repeat a motif; reflections create bilateral symmetry; rotations create pinwheel effects.",
          },
          {
            heading: "Navigation",
            body: "Bearings and transformations combine: a ship sailing a bearing can be modelled as translation; turning changes bearing by rotation angle.",
          },
        ],
        keyFormulas: [
          { name: "Pattern transformations", statement: "Translations repeat; reflections mirror; rotations turn; enlargements scale." },
        ],
        workedExample: {
          problem: "A robot at $(2,3)$ moves to $(5,3)$ then turns $90°$ clockwise about its position. Describe using transformations.",
          solution: "Translation $\\begin{pmatrix}3\\\\0\\end{pmatrix}$ then $90°$ clockwise rotation about $(5,3)$.",
        },
      },
      questions: [
        {
          id: "cilm-u7-ctx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a map grid, a tree at $(4,7)$ is reflected in the y-axis. Where does the image appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-4, 7)$" },
              { id: "b", text: "$(4, -7)$" },
              { id: "c", text: "$(-4, -7)$" },
              { id: "d", text: "$(7, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "y-axis reflection", statement: "$(x,y) \\to (-x,y)$: $(-4,7)$." },
            ],
            steps: [
              { reasoning: "Reflect in y-axis flips x only: $(-4,7)$.", working: "(-4,7)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(-4, 7)$",
            commonErrors: ["Choosing (b) — that's x-axis reflection."],
          },
        },
        {
          id: "cilm-u7-ctx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tile pattern repeats every $4$ units to the right. If one motif is at $x=2$, where are the next two motifs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation pattern", statement: "Repeated translations by $4$: motifs at $x=6$ and $x=10$." },
            ],
            steps: [
              { reasoning: "Add $4$ each time: $2+4=6$, $6+4=10$.", working: "6, 10", marks: 1, markCode: "M" },
              { reasoning: "Motifs at $x=6$ and $x=10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$ and $x = 10$",
            commonErrors: ["Multiplying instead of adding — translations add the vector each repeat."],
          },
        },
        {
          id: "cilm-u7-ctx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A company logo has a shape at $(1,2)$ and its mirror image at $(-1,2)$. Describe the transformation and find the mirror line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symmetry in design", statement: "x-coordinates negated, y same → reflection in y-axis." },
            ],
            steps: [
              { reasoning: "$(1,2) \\leftrightarrow (-1,2)$: x flipped, y same → reflection in y-axis.", working: "y-axis", marks: 1, markCode: "M" },
              { reasoning: "Mirror line: $x=0$ (y-axis).", working: "x=0", marks: 1, markCode: "M" },
              { reasoning: "Reflection in y-axis.", marks: 1, markCode: "M" },
              { reasoning: "Correct identification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection in the y-axis ($x=0$)",
            commonErrors: ["Saying x-axis — that would flip y, not x."],
          },
        },
        {
          id: "cilm-u7-ctx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A drone starts at position $(2,4)$ on a grid (units = metres).",
          parts: [
            { label: "a", prompt: "It flies $3$ m east and $2$ m north. Give the translation vector and new position.", marks: 3 },
            { label: "b", prompt: "It then rotates $90°$ clockwise about its current position. What changes?", marks: 2 },
            { label: "c", prompt: "It returns home by the reverse path. Describe the transformations needed.", marks: 2 },
            { label: "d", prompt: "Explain why the drone's 'shadow' on the ground is a translation of its position.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Transformations in context", statement: "Movement = translation; turning = rotation; reverse = inverse transformations." },
            ],
            steps: [
              { part: "a", reasoning: "Vector $\\begin{pmatrix}3\\\\2\\end{pmatrix}$; new position $(5,6)$.", working: "(5,6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vector correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rotation about $(5,6)$ changes orientation but position stays.", working: "\\text{orientation only}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inverse rotation ($90°$ anticlockwise) then translation $\\begin{pmatrix}-3\\\\-2\\end{pmatrix}$.", working: "\\text{inverse ops}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct reverse sequence.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Shadow position = horizontal projection — translation preserves shape, projection shifts it.", working: "\\text{projection}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasonable explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\begin{pmatrix}3\\\\2\\end{pmatrix}$, $(5,6)$ (b) orientation changes, position same (c) reverse rotation + inverse translation (d) shadow is projected translation",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Inverse correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) reversing order — must undo last transformation first."],
          },
        },
      ],
    },
    {
      id: "cilm-u7-patterns",
      title: "Patterns and symmetry",
      skill: "Create and analyse patterns using transformations and lines of symmetry.",
      lesson: {
        sections: [
          {
            heading: "Creating patterns",
            body: "Patterns arise from repeated transformations:\n- **Translation**: motif repeats at intervals\n- **Reflection**: mirror-image pairs\n- **Rotation**: motifs turn around a centre\n- **Glide reflection**: reflect + translate (common in wallpaper)",
          },
          {
            heading: "Symmetry in patterns",
            body: "Regular patterns have multiple symmetry lines. A border pattern might have vertical reflection symmetry at each motif and horizontal translation symmetry along the strip.",
          },
          {
            heading: "Analysing patterns",
            body: "To describe a pattern: identify the motif, the transformation(s) generating it, and the symmetry elements.",
          },
        ],
        keyFormulas: [
          { name: "Pattern generation", statement: "Motif + repeated transformation = pattern." },
        ],
        workedExample: {
          problem: "A border has motif 'L' repeated every 3 units with alternating orientation. Describe the transformations.",
          solution: "Translations by $3$ units plus reflections to alternate orientation — a glide-reflection pattern.",
        },
      },
      questions: [
        {
          id: "cilm-u7-pat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What transformation creates a repeating border pattern along a line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated translation" },
              { id: "b", text: "Single reflection" },
              { id: "c", text: "Single rotation" },
              { id: "d", text: "Enlargement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern generation", statement: "Translations repeat motifs along a direction." },
            ],
            steps: [
              { reasoning: "Repeated translations slide the motif along the border.", working: "\\text{translation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Repeated translation",
            commonErrors: ["Choosing (b) — single reflection creates one mirror pair, not a repeating pattern."],
          },
        },
        {
          id: "cilm-u7-pat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pattern has motifs at positions $x=0, 4, 8, 12$. What transformation generates this pattern?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern analysis", statement: "Equal spacing $4$ → translation by $4$ units repeatedly." },
            ],
            steps: [
              { reasoning: "Positions differ by $4$ each time → translation by $\\begin{pmatrix}4\\\\0\\end{pmatrix}$.", working: "vector(4,0)", marks: 1, markCode: "M" },
              { reasoning: "Repeated translation by $4$ units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation by $4$ units, repeated",
            commonErrors: ["Saying 'rotation' — positions are collinear, no turning."],
          },
        },
        {
          id: "cilm-u7-pat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A logo uses a motif and its mirror image alternately along a strip. Describe the full set of transformations used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern description", statement: "Alternating motif/mirror = translation + reflection (glide reflection)." },
            ],
            steps: [
              { reasoning: "Motif then mirror image alternating.", working: "\\text{alternating}", marks: 1, markCode: "M" },
              { reasoning: "Translation moves along strip; reflection flips each pair.", working: "\\text{translate+reflect}", marks: 1, markCode: "M" },
              { reasoning: "Glide reflection pattern.", marks: 1, markCode: "M" },
              { reasoning: "Correct description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glide reflection: translate along strip, reflect alternately",
            commonErrors: ["Missing the reflection — alternation requires flipping."],
          },
        },
        {
          id: "cilm-u7-pat-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design a border pattern $20$ cm long using a $2$ cm motif.",
          parts: [
            { label: "a", prompt: "How many motifs fit if each is $2$ cm and gap is $2$ cm?", marks: 2 },
            { label: "b", prompt: "Describe the translation needed to repeat the pattern.", marks: 3 },
            { label: "c", prompt: "If alternating mirrored motifs, describe the full transformation sequence.", marks: 2 },
            { label: "d", prompt: "State two lines of symmetry the completed border might have.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern design", statement: "Motif + gap = repeat unit; translations repeat; reflections create alternation." },
            ],
            steps: [
              { part: "a", reasoning: "Each unit $=4$ cm; $20\\div4=5$ motifs.", working: "5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Translation by $4$ cm per repeat.", working: "4\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vector/magnitude stated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Translate $4$ cm then reflect in vertical line for each alternate.", working: "\\text{glide reflection}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sequence described.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. vertical lines through each motif centre; horizontal line along strip.", working: "\\text{symmetry lines}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid symmetry lines.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5$ motifs (b) translate $4$ cm repeatedly (c) glide reflection (d) vertical lines through motifs + horizontal midline",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Translation described.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Sequence correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid lines.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["In (a) forgetting the gap — repeat unit is motif+gap."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u7-context-notes",
      title: "Transformations in context — revision notes",
      summary: "Maps, patterns, robots — applying transformations to real situations.",
      sections: [
        {
          heading: "Contexts",
          body: "Maps/grids: translation=move, reflection=mirror, rotation=turn. Patterns: motif + repeated transformation. Robots: same maths as coordinates.",
        },
        {
          heading: "Design",
          body: "Border patterns use translations; alternating orientations use glide reflections; symmetry lines through repeated motifs.",
        },
      ],
    },
  ],
};
