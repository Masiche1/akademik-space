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
              { id: "a", text: "$(-4, -7)$" },
              { id: "b", text: "$(4, -7)$" },
              { id: "c", text: "$(7, 4)$" },
              { id: "d", text: "$(-4, 7)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "y-axis reflection", statement: "$(x,y) \\to (-x,y)$: $(-4,7)$." },
            ],
            steps: [
              { reasoning: "Reflect in y-axis flips x only: $(-4,7)$.", working: "(-4,7)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $(-4, 7)$",
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
        {
          id: "cilm-u7-ctx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a map grid, a tree at $(4, 7)$ is reflected in the x-axis. Where does the image appear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-4, 7)$" },
              { id: "b", text: "$(4, 7)$" },
              { id: "c", text: "$(-4, -7)$" },
              { id: "d", text: "$(4, -7)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "x-axis reflection", statement: "$(x,y) \\to (x,-y)$." },
            ],
            steps: [
              { reasoning: "Reflect in x-axis flips $y$: $(4,-7)$.", working: "(4,-7)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $(4, -7)$",
            commonErrors: ["Choosing (b) — that's y-axis reflection."],
          },
        },
        {
          id: "cilm-u7-ctx-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A robot at $(2, 3)$ moves $3$ units right and $2$ units up. Find the $x$-coordinate of its new position.",
          response: { type: "numeric", parts: [{ label: "x-coordinate", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "Right = $+x$: $2+3 = 5$." },
            ],
            steps: [
              { reasoning: "$x = 2+3 = 5$.", working: "5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["$-1$ — subtracted instead of adding."],
          },
        },
        {
          id: "cilm-u7-ctx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tile pattern repeats every $5$ units to the right, starting at $x = 1$. Where are the next two motifs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation pattern", statement: "Add $5$ each repeat: $x = 6$ and $x = 11$." },
            ],
            steps: [
              { reasoning: "$1+5 = 6$; $6+5 = 11$.", working: "6, 11", marks: 1, markCode: "M" },
              { reasoning: "Motifs at $x = 6$ and $x = 11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$ and $x = 11$",
            commonErrors: ["Multiplying $1\\times5$ — translations add the interval."],
          },
        },
        {
          id: "cilm-u7-ctx-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a map, two buildings on opposite sides of a river are mirror images of each other. What transformation relates them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enlargement" },
              { id: "b", text: "Translation" },
              { id: "c", text: "Rotation" },
              { id: "d", text: "Reflection in the river line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context reflection", statement: "Mirror images across a line = reflection in that line." },
            ],
            steps: [
              { reasoning: "Mirror-image buildings → reflection in the river's line.", working: "reflection", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Reflection in the river line",
            commonErrors: ["Choosing (a) — translation preserves orientation; mirror images flip."],
          },
        },
        {
          id: "cilm-u7-ctx-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Point $(3, -2)$ is translated by vector $\\begin{pmatrix}4\\\\1\\end{pmatrix}$. Find the $y$-coordinate of the image.",
          response: { type: "numeric", parts: [{ label: "y-coordinate", answer: -1 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Translation", statement: "Add vector components: $y = -2+1 = -1$." },
            ],
            steps: [
              { reasoning: "$-2+1 = -1$.", working: "-1", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$-1$",
            commonErrors: ["$-3$ — subtracted the $+1$ component."],
          },
        },
        {
          id: "cilm-u7-ctx-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A drone at grid position $(1, 1)$ flies to position $(4, 5)$. Describe this movement as a transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context transformation", statement: "Movement without turning = translation by vector $(3,4)$." },
            ],
            steps: [
              { reasoning: "Change: $4-1 = 3$ right, $5-1 = 4$ up.", working: "(3,4)", marks: 1, markCode: "M" },
              { reasoning: "Translation by vector $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.", working: "vector(3,4)", marks: 1, markCode: "M" },
              { reasoning: "Correct description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation by $\\begin{pmatrix}3\\\\4\\end{pmatrix}$",
            commonErrors: ["Saying rotation — the drone didn't turn."],
          },
        },
        {
          id: "cilm-u7-ctx-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A robot arm rotates $90°$ clockwise to pick up an object. Which transformation models this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection" },
              { id: "b", text: "Enlargement" },
              { id: "c", text: "Rotation of $90°$ clockwise" },
              { id: "d", text: "Translation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rotation", statement: "Turning about a centre models the arm's movement." },
            ],
            steps: [
              { reasoning: "Turning motion → rotation of $90°$ clockwise.", working: "rotation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Rotation of $90°$ clockwise",
            commonErrors: ["Choosing (a) — the arm turned, didn't slide."],
          },
        },
        {
          id: "cilm-u7-ctx-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A repeating pattern has motifs at $x = 0, 3, 6, 9$. At what $x$-value is the next motif?",
          response: { type: "numeric", parts: [{ label: "x-value", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation pattern", statement: "Spacing $3$ → next at $9+3 = 12$." },
            ],
            steps: [
              { reasoning: "$9+3 = 12$.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "$x = 12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 12$",
            commonErrors: ["$15$ — added $6$ instead of the $3$-unit interval."],
          },
        },
        {
          id: "cilm-u7-ctx-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two identical shopfronts face each other across a pedestrian street. What transformation maps one to the other?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation along the street" },
              { id: "b", text: "Rotation about a corner" },
              { id: "c", text: "Enlargement" },
              { id: "d", text: "Reflection in the street's centre line" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context reflection", statement: "Facing each other across a line → mirror reflection." },
            ],
            steps: [
              { reasoning: "Facing opposite directions across the street → reflection.", working: "reflection", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Reflection in the street's centre line",
            commonErrors: ["Choosing (a) — translation wouldn't reverse the facing direction."],
          },
        },
        {
          id: "cilm-u7-ctx-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "On a car park grid, the entrance is at $(0, 0)$ and the exit is at $(8, 6)$ (units = metres).",
          parts: [
            { label: "a", prompt: "Describe the car's journey from entrance to exit as a transformation.", marks: 2 },
            { label: "b", prompt: "If the exit were reflected in the x-axis, where would it be?", marks: 2 },
            { label: "c", prompt: "Give a real-world situation that could produce this reflection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context transformations", statement: "Journey = translation vector $(8,6)$; reflection flips position." },
            ],
            steps: [
              { part: "a", reasoning: "Translation by vector $\\begin{pmatrix}8\\\\6\\end{pmatrix}$.", working: "(8,6)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reflect in x-axis: $(8,-6)$.", working: "(8,-6)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "E.g. exit on opposite side of a horizontal road/river.", working: "mirror context", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) translation $(8,6)$ (b) $(8,-6)$ (c) e.g. mirrored location across a road",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid example.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["In (b) negating $x$ — x-axis reflection negates $y$."],
          },
        },
        {
          id: "cilm-u7-ctx-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A logo has a motif at $(2, 0)$ and its mirror image at $(-2, 0)$. What is the mirror line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The line $y = -x$" },
              { id: "b", text: "The y-axis ($x = 0$)" },
              { id: "c", text: "The line $y = x$" },
              { id: "d", text: "The x-axis ($y = 0$)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mirror line", statement: "x negated, y same → reflection in y-axis $x=0$." },
            ],
            steps: [
              { reasoning: "$(2,0) \\leftrightarrow (-2,0)$: only $x$ flipped → mirror line $x=0$.", working: "x=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The y-axis ($x = 0$)",
            commonErrors: ["Choosing (a) — x-axis would map $(2,0) \\to (2,0)$, not flip $x$."],
          },
        },
        {
          id: "cilm-u7-ctx-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A floor plan is drawn at scale $1:50$. Explain how enlargements model the relationship between the plan and the real room.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scale in context", statement: "Lengths scale by $50$; areas by $50^2 = 2500$." },
            ],
            steps: [
              { reasoning: "Every length on the plan is multiplied by $50$ to get real dimensions.", working: "\\times50", marks: 1, markCode: "M" },
              { reasoning: "Areas scale by $50^2 = 2500$ — area on plan is $2500$ times smaller.", working: "50^2=2500", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation of enlargement as scale model.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lengths $\\times 50$; areas $\\times 2500$ — the plan is an enlargement with SF $\\frac{1}{50}$ of reality.",
            commonErrors: ["Saying areas scale by $50$ — must square."],
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
              { id: "a", text: "Single reflection" },
              { id: "b", text: "Single rotation" },
              { id: "c", text: "Enlargement" },
              { id: "d", text: "Repeated translation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern generation", statement: "Translations repeat motifs along a direction." },
            ],
            steps: [
              { reasoning: "Repeated translations slide the motif along the border.", working: "\\text{translation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Repeated translation",
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
        {
          id: "cilm-u7-pat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A glide reflection combines which two transformations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A reflection followed by a translation" },
              { id: "b", text: "Two translations" },
              { id: "c", text: "An enlargement and a rotation" },
              { id: "d", text: "Two rotations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glide reflection", statement: "Reflect then translate along the mirror line." },
            ],
            steps: [
              { reasoning: "Glide reflection = reflection + translation.", working: "reflect+translate", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A reflection followed by a translation",
            commonErrors: ["Choosing (d) — no flipping occurs in pure translation."],
          },
        },
        {
          id: "cilm-u7-pat-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pattern has motifs at $x = 0, 5, 10$. At what $x$-value is the next motif?",
          response: { type: "numeric", parts: [{ label: "x-value", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation pattern", statement: "Interval $5$ → next at $15$." },
            ],
            steps: [
              { reasoning: "$10+5 = 15$.", working: "15", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$x = 15$",
            commonErrors: ["$20$ — doubled the interval."],
          },
        },
        {
          id: "cilm-u7-pat-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A border pattern repeats every $3$ units. A motif is at $x = 2$. Find the positions of the next two motifs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Translation pattern", statement: "Add $3$ each repeat: $x = 5$ and $x = 8$." },
            ],
            steps: [
              { reasoning: "$2+3 = 5$; $5+3 = 8$.", working: "5, 8", marks: 1, markCode: "M" },
              { reasoning: "Motifs at $x = 5$ and $x = 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$ and $x = 8$",
            commonErrors: ["$x=4$ — used wrong interval."],
          },
        },
        {
          id: "cilm-u7-pat-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pinwheel pattern where motifs turn around a central point is generated by repeated...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflections" },
              { id: "b", text: "Enlargements" },
              { id: "c", text: "Rotations" },
              { id: "d", text: "Translations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern generation", statement: "Rotations about a centre create pinwheel effects." },
            ],
            steps: [
              { reasoning: "Turning motifs around a centre → rotations.", working: "rotation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Rotations",
            commonErrors: ["Choosing (a) — translations don't turn motifs."],
          },
        },
        {
          id: "cilm-u7-pat-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $24$ cm border uses a $3$ cm motif with a $3$ cm gap between motifs. How many complete motifs fit?",
          response: { type: "numeric", parts: [{ label: "motifs", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern design", statement: "Repeat unit $= 3+3 = 6$ cm; $24\\div6 = 4$ motifs." },
            ],
            steps: [
              { reasoning: "$24\\div(3+3) = 4$ motifs.", working: "4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$4$ motifs",
            commonErrors: ["$8$ — forgot the gap; unit is $6$ cm not $3$ cm."],
          },
        },
        {
          id: "cilm-u7-pat-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pattern consists of a motif and copies rotated $180°$ about the same centre. Describe the transformation that generates it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern analysis", statement: "Repeated $180°$ rotations about the centre generate the pattern." },
            ],
            steps: [
              { reasoning: "Each copy is the previous rotated $180°$ about the centre.", working: "180°", marks: 1, markCode: "M" },
              { reasoning: "Repeated rotation by $180°$ about the fixed centre.", working: "repeat rotation", marks: 1, markCode: "M" },
              { reasoning: "Correct description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeated rotation of $180°$ about the centre",
            commonErrors: ["Saying translation — the copies are turned, not slid."],
          },
        },
        {
          id: "cilm-u7-pat-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature does a repeating border pattern of identical arrows pointing the same way have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No symmetry" },
              { id: "b", text: "Rotational symmetry" },
              { id: "c", text: "Translation symmetry" },
              { id: "d", text: "Line symmetry" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern symmetry", statement: "Identical repeated motifs → translation symmetry along the strip." },
            ],
            steps: [
              { reasoning: "Same-orientation repeats → translation symmetry.", working: "translation symmetry", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Translation symmetry",
            commonErrors: ["Choosing (a) — same-direction arrows aren't mirror images."],
          },
        },
        {
          id: "cilm-u7-pat-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A border is $30$ cm long. Each repeat unit is $6$ cm (motif $+$ gap). How many complete motifs fit?",
          response: { type: "numeric", parts: [{ label: "motifs", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern design", statement: "$30\\div6 = 5$ repeat units." },
            ],
            steps: [
              { reasoning: "$30\\div6 = 5$ motifs.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "$5$ motifs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ motifs",
            commonErrors: ["$30$ — divided by $1$ instead of unit size."],
          },
        },
        {
          id: "cilm-u7-pat-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A strip pattern alternates a motif and its mirror image along the strip. This is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single rotation" },
              { id: "b", text: "Enlargement" },
              { id: "c", text: "Glide reflection" },
              { id: "d", text: "Pure translation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glide reflection", statement: "Alternating motif/mirror along a strip = glide reflection." },
            ],
            steps: [
              { reasoning: "Alternate flipping while sliding = glide reflection.", working: "glide reflection", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Glide reflection",
            commonErrors: ["Choosing (a) — pure translation keeps orientation; alternation flips."],
          },
        },
        {
          id: "cilm-u7-pat-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design a $16$ cm border pattern using a $2$ cm motif with a $2$ cm gap between motifs.",
          parts: [
            { label: "a", prompt: "How many complete motifs fit?", marks: 2 },
            { label: "b", prompt: "Describe the translation that repeats the pattern.", marks: 2 },
            { label: "c", prompt: "If every second motif is mirrored, describe the full transformation sequence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern design", statement: "Repeat unit $=4$ cm; translation by $4$ cm; alternation = glide reflection." },
            ],
            steps: [
              { part: "a", reasoning: "$16\\div4 = 4$ motifs.", working: "4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Translation by $4$ cm repeated.", working: "4\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Translate $4$ cm then reflect alternately = glide reflection.", working: "glide reflection", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ motifs (b) translate $4$ cm repeatedly (c) glide reflection",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["In (a) using $2$ cm as unit — gap must be included."],
          },
        },
        {
          id: "cilm-u7-pat-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A completed border pattern has vertical lines of symmetry through each motif AND a horizontal line of symmetry along the strip. Which statement is true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a single motif" },
              { id: "b", text: "It has both line symmetries and translation symmetry" },
              { id: "c", text: "It has no symmetry" },
              { id: "d", text: "It only has translation symmetry" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern symmetry", statement: "Patterns can combine line symmetries with translation symmetry." },
            ],
            steps: [
              { reasoning: "Both line symmetries described plus repeat translations.", working: "both", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It has both line symmetries and translation symmetry",
            commonErrors: ["Choosing (c) — ignores the stated line symmetries."],
          },
        },
        {
          id: "cilm-u7-pat-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between translation symmetry and line symmetry in a pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Symmetry types", statement: "Translation symmetry = repeat by sliding; line symmetry = mirror-image halves." },
            ],
            steps: [
              { reasoning: "Translation symmetry: the pattern repeats when slid by a fixed vector.", working: "slide repeat", marks: 1, markCode: "M" },
              { reasoning: "Line symmetry: a mirror line divides the pattern into identical halves.", working: "mirror halves", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation = sliding repeat; line symmetry = mirror-image halves across a line.",
            commonErrors: ["Confusing the two — one is sliding, the other is flipping."],
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
