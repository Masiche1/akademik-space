import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edm8-u3-lesson-3-3",
  code: "3-3",
  title: "Transformations and Constructions",
  goal: "I CAN transform shapes on a coordinate grid, use bearings and scale drawings, and describe constructions.",
  standards: ["Y8 Geometry and Measures"],
  vocabulary: [
    { term: "Reflection", definition: "A transformation that flips a shape in a mirror line; each point is the same distance from the mirror line as its image." },
    { term: "Rotation", definition: "A turn about a fixed point (the centre) through a given angle and direction." },
    { term: "Translation", definition: "A transformation that slides every point by the same column vector $\\begin{pmatrix}x\\\\y\\end{pmatrix}$ without turning." },
    { term: "Enlargement", definition: "A transformation that changes the size of a shape by a scale factor from a centre of enlargement." },
    { term: "Bearing", definition: "A direction measured clockwise from north, written with three figures, for example $045^\\circ$." },
    { term: "Scale", definition: "The ratio between a length on a drawing or map and the real length, for example $1:50\\,000$." },
    { term: "Perpendicular bisector", definition: "A line that cuts a line segment in half at right angles." },
  ],
  concepts: [
    {
      id: "edm8-u3-transformations",
      title: "Reflection, rotation, translation and enlargement",
      skill: "Carry out reflections, rotations, translations and enlargements on a coordinate grid.",
      lesson: {
        sections: [
          {
            heading: "Reflection and translation",
            body: "Reflection in the $y$-axis changes $(x,y)$ to $(-x,y)$. Reflection in the $x$-axis changes $(x,y)$ to $(x,-y)$. A translation by $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ moves each point $a$ units right and $b$ units up (negative values mean left and down). Reflections and translations keep the shape the same size.",
          },
          {
            heading: "Rotation",
            body: "To describe or carry out a rotation you need the centre, the angle and the direction. About the origin, a $90^\\circ$ clockwise turn changes $(x,y)$ to $(y,-x)$ and a $90^\\circ$ anticlockwise turn changes $(x,y)$ to $(-y,x)$. A $180^\\circ$ turn changes $(x,y)$ to $(-x,-y)$. Tracing paper helps.",
          },
          {
            heading: "Enlargement",
            body: "An enlargement with scale factor $k$ and centre $C$ multiplies the distance of every point from $C$ by $k$. All lengths are multiplied by $k$ and angles stay the same. The area is multiplied by $k^2$. A scale factor between $0$ and $1$ makes the shape smaller.",
          },
        ],
        keyFormulas: [
          { name: "Reflection in the y-axis", statement: "$(x,y)\\to(-x,y)$" },
          { name: "Rotation 90 degrees clockwise about O", statement: "$(x,y)\\to(y,-x)$" },
          { name: "Area after enlargement", statement: "Area scale factor $=k^2$" },
        ],
        workedExample: {
          problem: "Point $P(4,1)$ is translated by $\\begin{pmatrix}-3\\\\5\\end{pmatrix}$. Find the image of $P$.",
          solution: "Add the vector to the coordinates: $(4-3,\\;1+5)=(1,6)$.",
        },
      },
      questions: [
        {
          id: "edm8-u3-transformations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $A(3,2)$ is reflected in the $y$-axis. What are the coordinates of the image of $A$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(-3,-2)$" },
              { id: "b", text: "$(3,-2)$" },
              { id: "c", text: "$(2,3)$" },
              { id: "d", text: "$(-3,2)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Reflection", statement: "Reflection in the $y$-axis changes the sign of the $x$-coordinate only." }],
            steps: [{ reasoning: "Change the sign of the $x$-coordinate.", working: "(3,2)\\to(-3,2)", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $(-3,2)$",
            commonErrors: ["Reflecting in the $x$-axis, giving $(3,-2)$.", "Swapping the coordinates (reflection in $y=x$)."],
          },
        },
        {
          id: "edm8-u3-transformations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The point $B(2,1)$ is rotated $90^\\circ$ clockwise about the origin $O$. Write down the coordinates of the image of $B$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 1 },
              { label: "$y$-coordinate", answer: -2 },
            ],
          },
          markscheme: {
            principles: [{ kind: "property", name: "Rotation about the origin", statement: "A $90^\\circ$ clockwise turn about $O$ maps $(x,y)$ to $(y,-x)$." }],
            steps: [
              { reasoning: "Apply $(x,y)\\to(y,-x)$ with $x=2$, $y=1$.", working: "(2,1)\\to(1,-2)", marks: 1, markCode: "M" },
              { reasoning: "State the coordinates.", working: "(1,-2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,-2)$",
            commonErrors: ["Turning anticlockwise, giving $(-1,2)$.", "Turning through $180^\\circ$, giving $(-2,-1)$."],
            examinerNote: "Award M1 for a correct rotation of $90^\\circ$ in either direction or the correct pattern, oe.",
          },
        },
        {
          id: "edm8-u3-transformations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The point $P(3,2)$ is enlarged with scale factor $3$ about the centre of enlargement $(1,1)$. Work out the coordinates of the image of $P$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 7 },
              { label: "$y$-coordinate", answer: 4 },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enlargement", statement: "Each point moves to $k$ times its distance from the centre, along the line from the centre through the point." }],
            steps: [
              { reasoning: "Find the vector from the centre to $P$.", working: "(3-1,\\;2-1)=(2,1)", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the scale factor $3$.", working: "3\\times(2,1)=(6,3)", marks: 1, markCode: "M" },
              { reasoning: "Add to the centre.", working: "(1+6,\\;1+3)=(7,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(7,4)$",
            commonErrors: ["Multiplying the coordinates of $P$ by $3$ and ignoring the centre, giving $(9,6)$."],
          },
        },
        {
          id: "edm8-u3-transformations-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Triangle $T$ has vertices $A(1,1)$, $B(3,1)$ and $C(3,4)$. It has a right angle at $B$.",
          parts: [
            { label: "a", prompt: "$T$ is translated by $\\begin{pmatrix}-4\\\\2\\end{pmatrix}$. Write down the coordinates of the image of $C$.", marks: 2 },
            { label: "b", prompt: "$T$ is reflected in the $x$-axis. Write down the coordinates of the image of $C$.", marks: 2 },
            { label: "c", prompt: "$T$ is enlarged with scale factor $2$ about the origin. Write down the coordinates of the image of $C$.", marks: 2 },
            { label: "d", prompt: "Work out the area of $T$ and the area of the enlarged triangle from part (c). Hence write down how many times larger the area is, and explain how this relates to the scale factor.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Translation", statement: "A translation by $\\begin{pmatrix}a\\\\b\\end{pmatrix}$ adds $a$ to $x$ and $b$ to $y$." },
              { kind: "property", name: "Enlargement and area", statement: "Lengths multiply by $k$ and area multiplies by $k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Add the vector to $C(3,4)$.", working: "(3-4,\\;4+2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the image.", working: "(-1,6)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reflection in the $x$-axis changes the sign of $y$.", working: "(3,4)\\to(3,-4)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the image.", working: "(3,-4)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply each coordinate by $2$ (centre is the origin).", working: "(2\\times3,\\;2\\times4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the image.", working: "(6,8)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$T$ has base $AB=2$ and height $BC=3$.", working: "\\tfrac12\\times2\\times3=3", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The enlarged triangle has base $4$ and height $6$.", working: "\\tfrac12\\times4\\times6=12", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Compare the areas.", working: "12\\div3=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The area is multiplied by $4=2^2$, the square of the scale factor.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(-1,6)$ (b) $(3,-4)$ (c) $(6,8)$ (d) areas $3$ and $12$, so $4$ times larger $=2^2$",
            commonErrors: ["Subtracting the vector instead of adding.", "Saying the area is multiplied by $2$."],
          },
        },
      ],
    },
    {
      id: "edm8-u3-bearings-scale-constructions",
      title: "Bearings, scale drawings and constructions",
      skill: "Use bearings and scales, and describe the standard ruler-and-compass constructions.",
      lesson: {
        sections: [
          {
            heading: "Bearings",
            body: "A bearing is an angle measured clockwise from north and always written with three figures, such as $045^\\circ$ or $270^\\circ$. To find the bearing of B from A, stand at A, face north and turn clockwise until you face B. The back bearing is found by adding or subtracting $180^\\circ$: if B is on a bearing of $070^\\circ$ from A, then A is on a bearing of $250^\\circ$ from B.",
          },
          {
            heading: "Scale drawings",
            body: "A scale such as $1:50\\,000$ means $1$ cm on the map represents $50\\,000$ cm in real life, which is $0.5$ km. To find a real distance multiply the map distance by the scale; to draw, divide the real distance by the scale. Convert units carefully: $100\\,000$ cm $=1$ km.",
          },
          {
            heading: "Constructions",
            body: "Use a pair of compasses and a ruler, and leave your construction arcs showing. To construct the perpendicular bisector of $AB$, draw arcs of the same radius (more than half of $AB$) from $A$ and from $B$, then join the two crossing points. To bisect an angle, draw an arc across both arms from the vertex, draw equal arcs from those two points, then join the vertex to where the arcs cross.",
          },
        ],
        keyFormulas: [
          { name: "Back bearing", statement: "Add or subtract $180^\\circ$" },
          { name: "Real distance", statement: "Real distance $=$ map distance $\\times$ scale" },
        ],
        workedExample: {
          problem: "A map has scale $1:50\\,000$. Two villages are $4.2$ cm apart on the map. Work out the real distance in km.",
          solution: "$4.2\\times50\\,000=210\\,000$ cm $=2100$ m $=2.1$ km.",
        },
      },
      questions: [
        {
          id: "edm8-u3-bearings-scale-constructions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The bearing of $B$ from $A$ is $070^\\circ$. What is the bearing of $A$ from $B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$290^\\circ$" },
              { id: "b", text: "$110^\\circ$" },
              { id: "c", text: "$070^\\circ$" },
              { id: "d", text: "$250^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Back bearing", statement: "The back bearing differs by $180^\\circ$." }],
            steps: [{ reasoning: "Add $180^\\circ$ to $70^\\circ$.", working: "70+180=250", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $250^\\circ$",
            commonErrors: ["Subtracting from $180^\\circ$, giving $110^\\circ$.", "Subtracting from $360^\\circ$, giving $290^\\circ$."],
          },
        },
        {
          id: "edm8-u3-bearings-scale-constructions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A map has a scale of $1:50\\,000$. A lake is $3.4$ cm long on the map. Work out the real length of the lake in km.",
          response: { type: "numeric", parts: [{ label: "Real length", answer: 1.7, tolerance: 0.01, unit: "km" }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Scale", statement: "$1$ cm on the map represents $50\\,000$ cm in real life." }],
            steps: [
              { reasoning: "Multiply by the scale.", working: "3.4\\times50000=170000\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Convert to km: $100\\,000$ cm $=1$ km.", working: "1.7\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.7$ km",
            commonErrors: ["Dividing by $100$ and $1000$ instead of $100\\,000$.", "Dividing by the scale instead of multiplying."],
          },
        },
        {
          id: "edm8-u3-bearings-scale-constructions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ship sails $8$ km due east and then $6$ km due south. Work out (i) the distance of the ship from its starting point and (ii) the bearing of the ship from its starting point. Give the bearing to 1 decimal place.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Distance (km)", answer: 10 },
              { label: "(ii) Bearing (degrees)", answer: 126.9, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$ in a right-angled triangle." },
              { kind: "principle", name: "Bearings", statement: "Bearings are measured clockwise from north." },
            ],
            steps: [
              { reasoning: "Use Pythagoras' theorem for the straight-line distance.", working: "\\sqrt{8^2+6^2}=\\sqrt{100}=10\\text{ km}", marks: 1, markCode: "M" },
              { reasoning: "Find the angle south of east using $\\tan$.", working: "\\tan^{-1}\\!\\left(\\tfrac{6}{8}\\right)=36.87^\\circ", marks: 1, markCode: "M" },
              { reasoning: "The bearing is $90^\\circ$ (east) plus this angle turned towards south.", working: "90+36.87", marks: 1, markCode: "M" },
              { reasoning: "Round.", working: "126.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $10$ km (ii) $126.9^\\circ$ (written $126.9^\\circ$)",
            commonErrors: ["Giving the angle $36.9^\\circ$ without adding $90^\\circ$.", "Using $\\tan^{-1}(8/6)$."],
          },
        },
        {
          id: "edm8-u3-bearings-scale-constructions-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A boat leaves harbour $A$ and sails $15$ km due east to buoy $B$. It then sails $20$ km due north to a lighthouse $C$. Angle $ABC$ is a right angle.",
          parts: [
            { label: "a", prompt: "Work out the direct distance $AC$ in km.", marks: 3 },
            { label: "b", prompt: "Work out the bearing of $C$ from $A$, correct to 1 decimal place.", marks: 3 },
            { label: "c", prompt: "Work out the bearing of $A$ from $C$, correct to 1 decimal place.", marks: 2 },
            { label: "d", prompt: "Anna makes a scale drawing using the scale $1$ cm to $5$ km. Work out the lengths, in cm, of $AB$ and $BC$ on her drawing.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $AC$ (km)", answer: 25 },
              { label: "(b) Bearing of $C$ from $A$ (degrees)", answer: 36.9, tolerance: 0.1 },
              { label: "(c) Bearing of $A$ from $C$ (degrees)", answer: 216.9, tolerance: 0.1 },
              { label: "(d) $AB$ on drawing (cm)", answer: 3 },
              { label: "(d) $BC$ on drawing (cm)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$AC^2=AB^2+BC^2$" },
              { kind: "principle", name: "Bearings", statement: "Measured clockwise from north; back bearing differs by $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Use Pythagoras' theorem.", working: "AC^2=15^2+20^2=225+400=625", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the square root.", working: "AC=25", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State the unit.", working: "25\\text{ km}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The angle at $A$ between east and $AC$ is found with tan: $\\tan^{-1}(20/15)=53.13^\\circ$.", working: "\\tan^{-1}\\!\\left(\\tfrac{20}{15}\\right)=53.13^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "North is $90^\\circ$ anticlockwise from east, so the bearing is $90^\\circ$ minus this angle.", working: "90-53.13", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round.", working: "36.9^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add $180^\\circ$ to the bearing from $A$ to $C$.", working: "36.87+180", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round.", working: "216.9^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the real distance by $5$.", working: "15\\div5=3\\text{ cm}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Same for $BC$.", working: "20\\div5=4\\text{ cm}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $25$ km (b) $036.9^\\circ$ (c) $216.9^\\circ$ (d) $AB=3$ cm, $BC=4$ cm",
            commonErrors: ["Using $53.1^\\circ$ as the bearing.", "Subtracting $180^\\circ$ for part (c), giving a negative value."],
          },
        },
      ],
    },
  ],
};
