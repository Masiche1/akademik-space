import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "pypm-u2-lesson-2-1",
  code: "2-1",
  title: "Shape and Position",
  goal: "I CAN name and describe 2D and 3D shapes, and use position and direction words to describe where things are.",
  standards: [
    "PYP Mathematics: Geometry",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "2D shape", definition: "A flat shape with length and width but no thickness, like a circle or triangle." },
    { term: "3D shape", definition: "A solid shape with length, width and height, like a cube or sphere." },
    { term: "Sides", definition: "The straight edges of a 2D shape — a triangle has $3$ sides." },
    { term: "Vertices", definition: "The corners where sides meet — a square has $4$ vertices." },
    { term: "Position", definition: "Where something is: 'The ball is under the chair', 'the shop is next to the school'." },
    { term: "Direction", definition: "Which way something faces or moves: left, right, forwards, backwards, north, south." },
  ],
  concepts: [
    {
      id: "pypm-u2l1-c1-shapes",
      title: "2D and 3D shapes",
      skill: "Name shapes and count their sides, vertices and faces.",
      lesson: {
        sections: [
          {
            heading: "Flat shapes (2D)",
            body: "**2D shapes** are flat. A **circle** has $0$ sides and $0$ vertices — it curves all the way round. A **triangle** has $3$ sides and $3$ vertices. A **square** has $4$ equal sides and $4$ vertices; a **rectangle** has $4$ sides with opposite sides equal. Polygons are shapes with straight sides.",
          },
          {
            heading: "Solid shapes (3D)",
            body: "**3D shapes** are solid — you can hold them. A **cube** has $6$ square faces (like a dice). A **cuboid** has $6$ rectangular faces (like a cereal box). A **sphere** is perfectly round (like a ball) with $0$ flat faces. A **cylinder** has $2$ flat circles and $1$ curved face (like a tin can). Count **faces** (flat surfaces), **edges** and **vertices** (corners) to describe a 3D shape.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "$3$ sides, $3$ vertices" },
          { name: "Square vs rectangle", statement: "Square: $4$ equal sides; rectangle: opposite sides equal" },
          { name: "Cube", statement: "$6$ square faces, $8$ vertices" },
        ],
        workedExample: {
          problem: "How many faces does a cube have?",
          solution: "A cube has $6$ faces — top, bottom, front, back, left and right — each a square.",
        },
      },
      questions: [
        {
          id: "pypm-q-u2l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Triangle", statement: "A triangle has $3$ straight sides and $3$ vertices." },
            ],
            steps: [
              { reasoning: "Tri- means three; a triangle has $3$ sides.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3$",
            commonErrors: ["Choosing $4$ — that is a square or rectangle."],
          },
        },
        {
          id: "pypm-q-u2l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular chocolate bar has 6 flat faces. What 3D shape is it most like?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cube" },
              { id: "b", text: "Cuboid" },
              { id: "c", text: "Sphere" },
              { id: "d", text: "Cylinder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cuboid", statement: "A cuboid has $6$ rectangular faces — like a box or chocolate bar." },
            ],
            steps: [
              { reasoning: "$6$ flat faces with rectangular sides = cuboid.", marks: 1, markCode: "M" },
              { reasoning: "A cube also has $6$ faces but they are all squares; a chocolate bar's faces are rectangles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cuboid",
            commonErrors: ["Choosing 'cube' — a cube's faces are all squares; a bar has rectangles."],
          },
        },
        {
          id: "pypm-q-u2l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Look at a square. How is it different from a rectangle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square vs rectangle", statement: "A square has $4$ equal sides; a rectangle has opposite sides equal but adjacent sides different." },
            ],
            steps: [
              { reasoning: "Both have $4$ sides and $4$ vertices.", marks: 1, markCode: "M" },
              { reasoning: "In a square all $4$ sides are equal; in a rectangle only opposite sides are equal.", marks: 1, markCode: "M" },
              { reasoning: "So every square is a rectangle, but not every rectangle is a square.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A square has 4 equal sides; a rectangle has only opposite sides equal.",
            commonErrors: ["Saying 'a square is not a rectangle' — a square meets the rectangle definition."],
          },
        },
        {
          id: "pypm-q-u2l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A toy box contains these solids: a dice (cube), a ball (sphere), a tin can (cylinder) and a cereal box (cuboid).",
          parts: [
            { label: "a", prompt: "How many flat faces does the dice have?", marks: 1 },
            { label: "b", prompt: "How many flat faces does the ball have?", marks: 1 },
            { label: "c", prompt: "How many flat faces does the tin can have?", marks: 1 },
            { label: "d", prompt: "Which shape has curved surfaces and no vertices? Explain.", marks: 2 },
            { label: "e", prompt: "Sort the four shapes into 'all faces flat' and 'has curved parts'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "3D shape properties", statement: "Count faces, edges, vertices; spheres have curved surfaces only." },
            ],
            steps: [
              { part: "a", reasoning: "A cube (dice) has $6$ square faces.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A sphere has $0$ flat faces — it is all curved.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A cylinder has $2$ flat circular faces (top and bottom).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The sphere (ball) — its surface is curved everywhere.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "It has no flat faces and no vertices.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "All flat: cube and cuboid. Curved: sphere and cylinder.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Both correctly sorted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6 (b) 0 (c) 2 (d) sphere — all curved (e) flat: cube, cuboid; curved: sphere, cylinder",
            commonErrors: ["In (c), counting the curved side as a flat face — only top and bottom are flat."],
          },
        },
        {
          id: "pypm-q-u2l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a square have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Square", statement: "A square has $4$ equal straight sides and $4$ vertices." },
            ],
            steps: [
              { reasoning: "A square has $4$ sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4$",
            commonErrors: ["Choosing $3$ — that is a triangle."],
          },
        },
        {
          id: "pypm-q-u2l1c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many flat faces does a cube have?",
          response: { type: "numeric", parts: [{ label: "Faces", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cube", statement: "A cube has $6$ square faces." },
            ],
            steps: [
              { reasoning: "Top, bottom, front, back, left and right — $6$ faces.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Answering $8$ — that is the number of vertices, not faces."],
          },
        },
        {
          id: "pypm-q-u2l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many straight sides does a circle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$ — it curves all the way round" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle", statement: "A circle is curved with no straight sides or vertices." },
            ],
            steps: [
              { reasoning: "A circle has no straight sides — it is one continuous curve.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0$",
            commonErrors: ["Choosing $1$ — a curve is not a straight side."],
          },
        },
        {
          id: "pypm-q-u2l1c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which 3D shape is a perfectly round ball?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cube" },
              { id: "b", text: "Sphere" },
              { id: "c", text: "Cylinder" },
              { id: "d", text: "Cuboid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sphere", statement: "A sphere is perfectly round with no flat faces." },
            ],
            steps: [
              { reasoning: "A ball is a sphere — all curved surface, no faces or edges.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sphere",
            commonErrors: ["Choosing 'cube' — a cube has flat square faces, not a round surface."],
          },
        },
        {
          id: "pypm-q-u2l1c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many vertices (corners) does a triangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertices", statement: "Vertices are the corners where sides meet." },
            ],
            steps: [
              { reasoning: "A triangle has $3$ sides meeting at $3$ corners.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3$ vertices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3$",
            commonErrors: ["Choosing $0$ — that is a circle, which has no corners."],
          },
        },
        {
          id: "pypm-q-u2l1c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many FLAT faces does a cylinder (like a tin can) have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$2$ — the top and bottom circles" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cylinder", statement: "A cylinder has $2$ flat circular faces and $1$ curved surface." },
            ],
            steps: [
              { reasoning: "The top and bottom are flat circles; the side is curved, not flat.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$ flat faces.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: ["Choosing $3$ — counting the curved side as a flat face."],
          },
        },
        {
          id: "pypm-q-u2l1c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many faces does a cuboid (like a cereal box) have?",
          response: { type: "numeric", parts: [{ label: "Faces", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cuboid", statement: "A cuboid has $6$ rectangular faces." },
            ],
            steps: [
              { reasoning: "Like a cube, a cuboid has $6$ faces — top, bottom, front, back, left, right.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Answering $8$ — that is the vertices of a cuboid."],
          },
        },
        {
          id: "pypm-q-u2l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the surface of a sphere (a ball). How many flat faces, edges and vertices does it have?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sphere properties", statement: "A sphere is perfectly curved with no flat faces, edges or vertices." },
            ],
            steps: [
              { reasoning: "The surface is curved everywhere — like an orange's skin.", marks: 1, markCode: "M" },
              { reasoning: "Flat faces: $0$; edges: $0$; vertices (corners): $0$.", marks: 1, markCode: "M" },
              { reasoning: "That is what makes a sphere different from a cube or cylinder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All curved — $0$ flat faces, $0$ edges, $0$ vertices.",
            commonErrors: ["Saying a sphere has faces — it has no flat surfaces at all."],
          },
        },
        {
          id: "pypm-q-u2l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A box holds a cube (dice) and a cylinder (tin). Explain how their faces are different.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "3D shape properties", statement: "Count flat faces and curved surfaces separately." },
            ],
            steps: [
              { reasoning: "The cube has $6$ flat square faces and no curved parts.", marks: 1, markCode: "M" },
              { reasoning: "The cylinder has $2$ flat circular faces plus $1$ curved surface around the side.", marks: 1, markCode: "M" },
              { reasoning: "So the cylinder has curved parts but fewer flat faces than the cube.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cube: 6 flat faces, no curve. Cylinder: 2 flat faces + curved side.",
            commonErrors: ["Counting the cylinder's curved side as a flat face."],
          },
        },
        {
          id: "pypm-q-u2l1c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sort these shapes into '2D (flat)' and '3D (solid)': triangle, cube, circle, sphere, square, cylinder.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2D: cube, sphere — 3D: triangle, circle, square, cylinder" },
              { id: "b", text: "All are 2D" },
              { id: "c", text: "2D: circle only — everything else is 3D" },
              { id: "d", text: "2D: triangle, circle, square — 3D: cube, sphere, cylinder" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "2D vs 3D", statement: "2D shapes are flat; 3D shapes are solid and can be held." },
            ],
            steps: [
              { reasoning: "Flat shapes: triangle, circle, square. Solid shapes: cube, sphere, cylinder.", marks: 1, markCode: "M" },
              { reasoning: "Check: can you hold a triangle? No — it is flat. Can you hold a cube? Yes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: split as in (a).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 2D: triangle, circle, square; 3D: cube, sphere, cylinder",
            commonErrors: ["Putting the circle in 3D — it is flat like other 2D shapes."],
          },
        },
        {
          id: "pypm-q-u2l1c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many vertices (corners) does a cuboid have?",
          response: { type: "numeric", parts: [{ label: "Vertices", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cuboid", statement: "A cuboid has $8$ vertices — like a box's corners." },
            ],
            steps: [
              { reasoning: "A cuboid is like a stretched cube: $4$ corners on top and $4$ on bottom.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $8$ vertices.", working: "4+4=8", marks: 1, markCode: "M" },
              { reasoning: "Confirm: $6$ faces, $12$ edges, $8$ vertices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Answering $6$ — that is the number of faces."],
          },
        },
        {
          id: "pypm-q-u2l1c1-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Look around a classroom. Name one object that is like a cuboid and one that is like a cylinder, and explain why.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Door = cuboid (flat rectangular faces); water bottle = cylinder (2 flat circles + curved side)" },
              { id: "b", text: "Door = cylinder; water bottle = cuboid" },
              { id: "c", text: "Door = sphere; water bottle = cube" },
              { id: "d", text: "Both are spheres" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Shapes in the world", statement: "Real objects resemble 3D shapes: boxes like cuboids, bottles like cylinders." },
            ],
            steps: [
              { reasoning: "A door is a flat box shape — $6$ rectangular faces = cuboid.", marks: 1, markCode: "M" },
              { reasoning: "A bottle has circular top/bottom and a curved side = cylinder.", marks: 1, markCode: "M" },
              { reasoning: "Answer: door = cuboid, bottle = cylinder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Door = cuboid; water bottle = cylinder",
            commonErrors: ["Choosing (c) — a door has no curved surface; it is not a cylinder."],
          },
        },
      ],
    },
    {
      id: "pypm-u2l1-c2-position-direction",
      title: "Position and direction",
      skill: "Describe where objects are and which way they face or move.",
      lesson: {
        sections: [
          {
            heading: "Describing position",
            body: "Position words tell where something is: **on, under, above, below, next to, between, inside, outside, in front of, behind**. 'The cat is **under** the table', 'the ball is **between** the two chairs'. Precise position words help others find things — a treasure map says 'walk $10$ steps forward, then turn left'.",
          },
          {
            heading: "Direction and turns",
            body: "**Direction** words: left, right, forwards, backwards, up, down. A **turn** can be a **quarter turn** ($90^\\circ$ — like turning from facing north to facing east), a **half turn** ($180^\\circ$) or a **full turn** ($360^\\circ$). On a map, **north** is usually at the top, **south** at the bottom, **east** right and **west** left.",
          },
        ],
        keyFormulas: [
          { name: "Position words", statement: "On, under, above, below, next to, between, inside, behind, in front of" },
          { name: "Turns", statement: "Quarter turn $= 90^\\circ$, half turn $= 180^\\circ$, full turn $= 360^\\circ$" },
        ],
        workedExample: {
          problem: "You face north and make a quarter turn clockwise. Which way do you face now?",
          solution: "Clockwise from north is east — a quarter turn ($90^\\circ$) takes you from north to east.",
        },
      },
      questions: [
        {
          id: "pypm-q-u2l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The ball is sitting on top of the box. Which position word describes this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Behind" },
              { id: "b", text: "On" },
              { id: "c", text: "Inside" },
              { id: "d", text: "Under" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position words", statement: "'On' means on top of a surface." },
            ],
            steps: [
              { reasoning: "On top of = on.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** On",
            commonErrors: ["Choosing 'above' — 'on' means touching the surface; 'above' means higher but not touching."],
          },
        },
        {
          id: "pypm-q-u2l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "You are facing north. You make a half turn. Which way are you facing now?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "West" },
              { id: "b", text: "South" },
              { id: "c", text: "Still north" },
              { id: "d", text: "East" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half turn", statement: "A half turn ($180^\\circ$) faces you in the opposite direction." },
            ],
            steps: [
              { reasoning: "Opposite of north is south.", marks: 1, markCode: "M" },
              { reasoning: "Half turn from north = south.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** South",
            commonErrors: ["Choosing east or west — those need a quarter turn, not a half turn."],
          },
        },
        {
          id: "pypm-q-u2l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A treasure map says: 'Start at the big tree. Walk forward to the river. Turn left and walk to the cave.' Describe the route using position words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Giving directions", statement: "Directions combine movement (forward, turn left) and position words." },
            ],
            steps: [
              { reasoning: "Start position: at the big tree.", marks: 1, markCode: "M" },
              { reasoning: "Move forward to the river — the river is in front of the tree.", marks: 1, markCode: "M" },
              { reasoning: "Turn left and walk to the cave — the cave is on the left side of the river.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "From the tree, go forward to the river, turn left — the cave is to the left of the river.",
            commonErrors: ["Mixing up left and right — 'turn left' means the cave is on the left side."],
          },
        },
        {
          id: "pypm-q-u2l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "On a school map: the hall is north of the classrooms, the playground is east of the classrooms, the office is between the hall and the classrooms.",
          parts: [
            { label: "a", prompt: "Where is the hall in relation to the classrooms?", marks: 1 },
            { label: "b", prompt: "Where is the playground in relation to the classrooms?", marks: 1 },
            { label: "c", prompt: "Is the office north or south of the classrooms?", marks: 1 },
            { label: "d", prompt: "A pupil walks from the playground to the office. Describe the route using direction words.", marks: 2 },
            { label: "e", prompt: "If the pupil then makes a quarter turn clockwise at the office, which way are they facing?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position and direction", statement: "Position words locate places; compass directions and turns describe movement." },
            ],
            steps: [
              { part: "a", reasoning: "The hall is north of (above) the classrooms.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The playground is east of (to the right of) the classrooms.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The office is between the hall (north) and classrooms, so it is north of the classrooms.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "From playground (east), walk west past classrooms to the office — go left/west.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Route: west along the classrooms' side until reaching the office.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Walking west and turning clockwise (quarter turn) faces north.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Clockwise from west is north.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) north (b) east (c) north (d) walk west to office (e) facing north",
            commonErrors: ["In (e), turning anticlockwise instead of clockwise — clockwise from west is north."],
          },
        },
        {
          id: "pypm-q-u2l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cat is hiding underneath the chair. Which position word describes this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inside" },
              { id: "b", text: "Behind" },
              { id: "c", text: "On" },
              { id: "d", text: "Under" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position words", statement: "'Under' means below something else." },
            ],
            steps: [
              { reasoning: "Underneath = under.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Under",
            commonErrors: ["Choosing 'behind' — under means below, behind means at the back."],
          },
        },
        {
          id: "pypm-q-u2l1c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many degrees is a quarter turn?",
          response: { type: "numeric", parts: [{ label: "Degrees", answer: 90, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turns", statement: "A quarter turn is $90^\\circ$ — a right-angle turn." },
            ],
            steps: [
              { reasoning: "A full circle is $360^\\circ$; a quarter of it is $90^\\circ$.", working: "360\\div4=90", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$90^\\circ$",
            commonErrors: ["Answering $45$ — that is an eighth turn."],
          },
        },
        {
          id: "pypm-q-u2l1c2-7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "You are facing south. You make a quarter turn clockwise. Which way do you face now?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Still south" },
              { id: "b", text: "North" },
              { id: "c", text: "East" },
              { id: "d", text: "West" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clockwise turns", statement: "Clockwise order is north → east → south → west → north." },
            ],
            steps: [
              { reasoning: "Clockwise order is north → east → south → west. From south, a quarter turn clockwise faces west.", marks: 1, markCode: "M" },
              { reasoning: "Answer: west.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** West",
            commonErrors: ["Choosing east — that is anticlockwise from south."],
          },
        },
        {
          id: "pypm-q-u2l1c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many degrees is a half turn?",
          response: { type: "numeric", parts: [{ label: "Degrees", answer: 180, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half turn", statement: "A half turn is $180^\\circ$ — facing the opposite way." },
            ],
            steps: [
              { reasoning: "Half of $360^\\circ$ is $180^\\circ$.", working: "360\\div2=180", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$180^\\circ$",
            commonErrors: ["Answering $90$ — that is a quarter turn."],
          },
        },
        {
          id: "pypm-q-u2l1c2-9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many quarter turns make one full turn?",
          response: { type: "numeric", parts: [{ label: "Quarter turns", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Turns", statement: "Four quarter turns ($4 \\times 90^\\circ$) make a full turn ($360^\\circ$)." },
            ],
            steps: [
              { reasoning: "$360 \\div 90 = 4$.", working: "360\\div90=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Answering $2$ — two quarter turns make only a half turn."],
          },
        },
        {
          id: "pypm-q-u2l1c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The pencil case is sitting between the book and the ruler. Which position word describes where it is?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Between" },
              { id: "b", text: "Inside" },
              { id: "c", text: "On" },
              { id: "d", text: "Under" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position words", statement: "'Between' means in the middle of two things." },
            ],
            steps: [
              { reasoning: "Between the book and the ruler = in the middle of the two.", marks: 1, markCode: "M" },
              { reasoning: "Answer: between.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Between",
            commonErrors: ["Choosing 'inside' — the case is not inside either object."],
          },
        },
        {
          id: "pypm-q-u2l1c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many degrees do you turn if you make two quarter turns clockwise?",
          response: { type: "numeric", parts: [{ label: "Degrees", answer: 180, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Turns add up", statement: "Two quarter turns $= 2 \\times 90^\\circ = 180^\\circ$ (a half turn)." },
            ],
            steps: [
              { reasoning: "$2 \\times 90 = 180$ degrees.", working: "2\\times90=180", marks: 1, markCode: "M" },
              { reasoning: "Answer: $180^\\circ$ — the same as a half turn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$180^\\circ$",
            commonErrors: ["Answering $90$ — forgetting to add both quarter turns."],
          },
        },
        {
          id: "pypm-q-u2l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to give directions from your classroom door to the school library using position and direction words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Giving directions", statement: "Combine movement words (forward, turn) with landmarks." },
            ],
            steps: [
              { reasoning: "Start at a clear point: the classroom door.", marks: 1, markCode: "M" },
              { reasoning: "Give movement steps: 'walk forward along the corridor, turn left at the stairs'.", marks: 1, markCode: "M" },
              { reasoning: "End with the position: 'the library is on your right / next to the hall'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "From the door, walk forward, turn left at the stairs — the library is on the right.",
            commonErrors: ["Giving directions without a starting point or landmarks."],
          },
        },
        {
          id: "pypm-q-u2l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a clockwise turn and an anticlockwise turn, using a clock face as your example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clockwise vs anticlockwise", statement: "Clockwise follows the direction clock hands move: 12 → 3 → 6 → 9." },
            ],
            steps: [
              { reasoning: "Clockwise is the direction clock hands move: from $12$ to $3$ to $6$.", marks: 1, markCode: "M" },
              { reasoning: "Anticlockwise is the opposite direction: from $12$ to $9$ to $6$.", marks: 1, markCode: "M" },
              { reasoning: "Same turn size, opposite direction — they end facing different ways.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clockwise = clock-hand direction; anticlockwise = the opposite way.",
            commonErrors: ["Mixing up the two — remember 'clock-wise' follows the clock."],
          },
        },
        {
          id: "pypm-q-u2l1c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You are facing north. Which single turn takes you to face east?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A full turn" },
              { id: "b", text: "A quarter turn clockwise" },
              { id: "c", text: "A quarter turn anticlockwise" },
              { id: "d", text: "A half turn" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compass turns", statement: "Clockwise from north is east — a quarter turn ($90^\\circ$)." },
            ],
            steps: [
              { reasoning: "Clockwise order: north → east → south → west.", marks: 1, markCode: "M" },
              { reasoning: "North to east is one quarter turn clockwise.", marks: 1, markCode: "M" },
              { reasoning: "Answer: quarter turn clockwise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A quarter turn clockwise",
            commonErrors: ["Choosing (c) — anticlockwise from north faces west."],
          },
        },
        {
          id: "pypm-q-u2l1c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A dancer faces north, makes a quarter turn anticlockwise, then a half turn. How many degrees did she turn in total?",
          response: { type: "numeric", parts: [{ label: "Total degrees", answer: 270, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Turns add up", statement: "Total turn = $90^\\circ + 180^\\circ = 270^\\circ$." },
            ],
            steps: [
              { reasoning: "Quarter turn $= 90^\\circ$; half turn $= 180^\\circ$.", working: "90+180", marks: 1, markCode: "M" },
              { reasoning: "Total: $90 + 180 = 270$ degrees.", working: "90+180=270", marks: 1, markCode: "M" },
              { reasoning: "Answer: $270^\\circ$.", working: "270", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$270^\\circ$",
            commonErrors: ["Answering $180$ — forgetting to add the quarter turn."],
          },
        },
        {
          id: "pypm-q-u2l1c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A treasure map says: 'Start at the flag pole. Walk forward to the big tree. Turn right and walk to the cave.' Describe the route using position and direction words, and say where the cave is in relation to the tree.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Giving directions", statement: "Directions combine movement and position words." },
            ],
            steps: [
              { reasoning: "Start position: at the flag pole.", marks: 1, markCode: "M" },
              { reasoning: "Walk forward to the tree — the tree is in front of the flag pole.", marks: 1, markCode: "M" },
              { reasoning: "Turn right and walk to the cave — the cave is on the right side of the tree.", marks: 1, markCode: "M" },
              { reasoning: "Full description: from the flag pole go forward to the tree, turn right — cave is to the right of the tree.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Forward to the tree, turn right — the cave is on the right of the tree.",
            commonErrors: ["Turning left instead of right — read the instruction carefully."],
          },
        },
      ],
    },
  ],
};
