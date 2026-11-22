import type { Lesson } from "../../../types.ts";

export const lesson46: Lesson = {
  id: "olm-u4-lesson-4-6",
  code: "4-6",
  title: "Symmetry",
  goal: "I CAN identify lines and planes of symmetry and rotational symmetry.",
  standards: ["4024: geometry"],
  vocabulary: [
    { term: "Line symmetry", definition: "Line dividing shape into mirror-image halves." },
    { term: "Rotational symmetry", definition: "Rotation mapping shape onto itself." },
    { term: "Order of symmetry", definition: "Number of rotations < 360° mapping shape to itself." },
    { term: "Plane symmetry", definition: "3D symmetry about a plane." },
  ],
  concepts: [
    {
      id: "olm-u4-s6-symmetry",
      title: "Lines and rotational symmetry",
      skill: "Identify symmetry at O Level.",
      lesson: {
        sections: [
          { heading: "Line symmetry", body: "A shape has line symmetry if a line divides it into two mirror-image halves. Regular polygons have n lines of symmetry (n = number of sides). Rectangles have 2; squares 4; isosceles triangle 1; scalene triangle 0; circle infinite. To find lines, look for axes where folding gives identical halves." },
          { heading: "Rotational symmetry", body: "A shape has rotational symmetry of order n if it maps onto itself after rotations of $\\frac{360°}{n}$. Square: order 4; rectangle: order 2; equilateral triangle: order 3; circle: infinite. A shape with no rotational symmetry has order 1 (only 360° rotation). Combine with line symmetry for complete symmetry description." },
        ],
        keyFormulas: [
          { name: "Order", statement: "$n=\\frac{360°}{\\text{rotation angle}}$" },
        ],
        workedExample: { problem: "Find lines and order of symmetry for a regular hexagon.", solution: "6 lines of symmetry; rotational order 6 (60° rotations)." },
      },
      questions: [
        {
          id: "olm-u4-s6-sy-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A rectangle has how many lines of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" },
            { id: "b", text: "4" },
            { id: "c", text: "2" },
            { id: "d", text: "1" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Rectangle", statement: "2 lines." }], steps: [{ reasoning: "Horizontal and vertical midlines.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olm-u4-s6-sy-q2", difficulty: "foundation", totalMarks: 2,
          stem: "What is the order of rotational symmetry of an equilateral triangle?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Order", statement: "$360/\\text{angle}$." }], steps: [
            { reasoning: "$360/120=3$ (or $360/60=6$? — vertex-to-vertex is 120° → order 3).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u4-s6-sy-q3", difficulty: "core", totalMarks: 3,
          stem: "A shape has rotational symmetry of order 4. Through what angle does it map onto itself?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Order", statement: "$360/n$." }], steps: [
            { reasoning: "$360/4=90°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 90°.", marks: 1, markCode: "M" },
            { reasoning: "Also 180°, 270°, 360° work.", marks: 1, markCode: "A" },
          ], finalAnswer: "$90°$" },
        },
        {
          id: "olm-u4-s6-sy-q4", difficulty: "core", totalMarks: 4,
          stem: "How many lines of symmetry does a regular octagon have? Describe its rotational symmetry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Regular polygon", statement: "n lines, order n." }], steps: [
            { reasoning: "8 lines of symmetry (through opposite vertices and midpoints of opposite sides).", marks: 1, markCode: "M" },
            { reasoning: "Rotational order 8 ($45°$ rotations).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 lines, order 8.", marks: 1, markCode: "M" },
            { reasoning: "General rule: regular n-gon → n lines, order n.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 lines, order 8" },
        },
        {
          id: "olm-u4-s6-sy-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A square has how many lines of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "2" },
            { id: "c", text: "Infinite" },
            { id: "d", text: "8" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Square", statement: "4 lines." }], steps: [{ reasoning: "Two diagonals + two midlines.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olm-u4-s6-sy-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The order of rotational symmetry of a square is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "8" },
            { id: "d", text: "4" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Square", statement: "Order 4." }], steps: [{ reasoning: "$90°$ rotations map it onto itself.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olm-u4-s6-sy-q7", difficulty: "foundation", totalMarks: 2,
          stem: "What is the order of rotational symmetry of a regular pentagon?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "property", name: "Regular polygon", statement: "Order = number of sides." }], steps: [
            { reasoning: "Regular pentagon → order 5 ($72°$ rotations).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u4-s6-sy-q8", difficulty: "core", totalMarks: 1,
          stem: "A scalene triangle has how many lines of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "0" },
            { id: "c", text: "6" },
            { id: "d", text: "1" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Scalene triangle", statement: "No symmetry." }], steps: [{ reasoning: "All sides different → no mirror line.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olm-u4-s6-sy-q9", difficulty: "core", totalMarks: 3,
          stem: "State the number of lines of symmetry and the order of rotational symmetry of a rectangle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Rectangle", statement: "2 lines, order 2." }], steps: [
            { reasoning: "Lines of symmetry: the two lines through midpoints of opposite sides → 2.", marks: 1, markCode: "M" },
            { reasoning: "Rotational symmetry: $180°$ rotation maps it onto itself → order 2.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2 lines, order 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 lines, order 2" },
        },
        {
          id: "olm-u4-s6-sy-q10", difficulty: "core", totalMarks: 2,
          stem: "A shape has rotational symmetry of order 6. Through what angle does it first map onto itself?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: { principles: [{ kind: "formula", name: "Order", statement: "$360/n$." }], steps: [
            { reasoning: "$360/6=60°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60°$" },
        },
        {
          id: "olm-u4-s6-sy-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following has infinitely many lines of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Square" },
            { id: "b", text: "Circle" },
            { id: "c", text: "Regular hexagon" },
            { id: "d", text: "Rectangle" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Circle", statement: "Infinite symmetry." }], steps: [{ reasoning: "Any diameter is a line of symmetry.", marks: 1, markCode: "A" }], finalAnswer: "Circle" },
        },
        {
          id: "olm-u4-s6-sy-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A regular hexagon is rotated about its centre. State its number of lines of symmetry, its order of rotational symmetry and the smallest angle of rotation that maps it onto itself.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Regular polygon", statement: "n lines, order n." }], steps: [
            { reasoning: "Lines of symmetry: 6 (through opposite vertices and midpoints of opposite sides).", marks: 1, markCode: "M" },
            { reasoning: "Order of rotational symmetry: 6.", marks: 1, markCode: "M" },
            { reasoning: "Smallest rotation: $360/6=60°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6 lines, order 6, $60°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 lines, order 6, 60°" },
        },
        {
          id: "olm-u4-s6-sy-q13", difficulty: "foundation", totalMarks: 2,
          stem: "How many lines of symmetry does an isosceles triangle (that is not equilateral) have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "property", name: "Isosceles triangle", statement: "1 line." }], steps: [
            { reasoning: "Only the axis through the apex and midpoint of the base.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u4-s6-sy-q14", difficulty: "core", totalMarks: 3,
          stem: "Explain the difference between line symmetry and rotational symmetry, giving an example of a shape with rotational symmetry but no line symmetry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Symmetry types", statement: "Mirror vs rotation." }], steps: [
            { reasoning: "Line symmetry: a mirror line divides the shape into identical halves; rotational symmetry: the shape maps onto itself after a rotation.", marks: 1, markCode: "M" },
            { reasoning: "A non-rectangular parallelogram has rotational symmetry of order 2 but no line of symmetry.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Parallelogram: order 2, no lines" },
        },
        {
          id: "olm-u4-s6-sy-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A 2D shape has exactly 3 lines of symmetry and rotational symmetry of order 3. Describe a shape that fits and justify your answer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Regular polygon", statement: "n sides → n lines, order n." }], steps: [
            { reasoning: "Order 3 suggests a shape with 3-fold rotational symmetry.", marks: 1, markCode: "M" },
            { reasoning: "Exactly 3 lines of symmetry matches a regular triangle (equilateral triangle).", marks: 1, markCode: "M" },
            { reasoning: "Equilateral triangle: 3 lines (through each vertex and opposite midpoint) and order 3 ($120°$ rotations).", marks: 1, markCode: "M" },
            { reasoning: "Answer: equilateral triangle.", marks: 1, markCode: "A" },
          ], finalAnswer: "Equilateral triangle" },
        },
        {
          id: "olm-u4-s6-sy-q16", difficulty: "core", totalMarks: 1,
          stem: "The order of rotational symmetry of a rectangle (not a square) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "4" },
            { id: "c", text: "2" },
            { id: "d", text: "0" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Rectangle", statement: "Order 2." }], steps: [{ reasoning: "$180°$ rotation maps it onto itself.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
      ],
    },
    {
      id: "olm-u4-s6-plane",
      title: "Plane symmetry in 3D",
      skill: "Identify planes of symmetry in solids at O Level.",
      lesson: {
        sections: [
          { heading: "Planes of symmetry", body: "A plane of symmetry divides a 3D solid into two mirror-image halves. Cuboid: 3 planes (through centres of opposite faces). Cube: 9 planes (3 face planes + 6 diagonal). Cylinder: infinite planes through the axis + 1 horizontal mid-plane. Cone: infinite through axis. Sphere: infinite." },
          { heading: "Counting carefully", body: "For cuboids count planes through face centres (3 for distinct dimensions) plus diagonal planes if square faces exist. For cylinders, any plane containing the central axis is a symmetry plane — infinitely many. Always visualize the solid and check both halves match." },
        ],
        keyFormulas: [
          { name: "Planes", statement: "Mirror planes dividing solid in half" },
        ],
        workedExample: { problem: "How many planes of symmetry does a cube have?", solution: "9: 3 through face centres + 6 through opposite edges." },
      },
      questions: [
        {
          id: "olm-u4-s6-pl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A cuboid has how many planes of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "6" },
            { id: "c", text: "Infinite" },
            { id: "d", text: "3" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Cuboid", statement: "3 planes." }], steps: [{ reasoning: "Through centres of opposite faces.", marks: 1, markCode: "A" }], finalAnswer: "3" },
        },
        {
          id: "olm-u4-s6-pl-q2", difficulty: "foundation", totalMarks: 2,
          stem: "How many planes of symmetry does a sphere have?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Sphere", statement: "Infinite." }], steps: [
            { reasoning: "Infinite — any plane through centre.", marks: 1, markCode: "M" },
            { reasoning: "Answer: infinite.", marks: 1, markCode: "A" },
          ], finalAnswer: "Infinite" },
        },
        {
          id: "olm-u4-s6-pl-q3", difficulty: "core", totalMarks: 3,
          stem: "A cylinder has how many planes of symmetry? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Cylinder", statement: "Infinite axial + 1 mid." }], steps: [
            { reasoning: "Infinite planes through the axis + horizontal mid-plane.", marks: 1, markCode: "M" },
            { reasoning: "Answer: infinite.", marks: 1, markCode: "M" },
            { reasoning: "Any plane through central axis divides it into mirror halves.", marks: 1, markCode: "A" },
          ], finalAnswer: "Infinite" },
        },
        {
          id: "olm-u4-s6-pl-q4", difficulty: "core", totalMarks: 4,
          stem: "How many planes of symmetry does a square-based pyramid have?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Pyramid", statement: "Through apex and base diagonals." }], steps: [
            { reasoning: "4 vertical planes through apex and each pair of opposite base vertices? — actually 4 planes through apex and each side midpoint pair.", marks: 1, markCode: "M" },
            { reasoning: "Correct count: 4 planes through apex and midpoints of opposite base edges.", marks: 1, markCode: "M" },
            { reasoning: "No horizontal plane (apex breaks symmetry).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u4-s6-pl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A cube has how many planes of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "Infinite" },
            { id: "c", text: "3" },
            { id: "d", text: "9" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Cube", statement: "9 planes." }], steps: [{ reasoning: "3 face planes + 6 diagonal planes.", marks: 1, markCode: "A" }], finalAnswer: "9" },
        },
        {
          id: "olm-u4-s6-pl-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A cone has how many planes of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "9" },
            { id: "c", text: "Infinite" },
            { id: "d", text: "3" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Cone", statement: "Infinite axial planes." }], steps: [{ reasoning: "Any plane through the axis works.", marks: 1, markCode: "A" }], finalAnswer: "Infinite" },
        },
        {
          id: "olm-u4-s6-pl-q7", difficulty: "foundation", totalMarks: 2,
          stem: "How many planes of symmetry does a cuboid have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Cuboid", statement: "3 planes." }], steps: [
            { reasoning: "Planes through the centres of opposite faces: 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u4-s6-pl-q8", difficulty: "core", totalMarks: 1,
          stem: "Which solid has NO plane of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A sphere" },
            { id: "b", text: "A cube" },
            { id: "c", text: "A cylinder" },
            { id: "d", text: "An irregular tetrahedron" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Plane symmetry", statement: "Mirror halves needed." }], steps: [{ reasoning: "Irregular tetrahedron has no mirror plane.", marks: 1, markCode: "A" }], finalAnswer: "Irregular tetrahedron" },
        },
        {
          id: "olm-u4-s6-pl-q9", difficulty: "core", totalMarks: 3,
          stem: "Explain why a cylinder has infinitely many planes of symmetry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Cylinder", statement: "Axial planes." }], steps: [
            { reasoning: "A cylinder is symmetric about its central axis.", marks: 1, markCode: "M" },
            { reasoning: "Any plane containing the axis cuts the cylinder into two identical halves.", marks: 1, markCode: "M" },
            { reasoning: "There are infinitely many such planes, plus the horizontal mid-plane.", marks: 1, markCode: "A" },
          ], finalAnswer: "Infinite planes through the axis" },
        },
        {
          id: "olm-u4-s6-pl-q10", difficulty: "core", totalMarks: 2,
          stem: "A cube has 9 planes of symmetry and a cuboid has 3. How many more planes of symmetry does a cube have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "property", name: "Cube vs cuboid", statement: "9 − 3." }], steps: [
            { reasoning: "$9-3=6$ more planes.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olm-u4-s6-pl-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A plane of symmetry of a solid is one that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Divides it into two mirror-image halves" },
            { id: "b", text: "Is parallel to a face" },
            { id: "c", text: "Passes through its centre" },
            { id: "d", text: "Contains an edge" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Plane of symmetry", statement: "Mirror halves." }], steps: [{ reasoning: "Standard definition.", marks: 1, markCode: "A" }], finalAnswer: "Divides into mirror-image halves" },
        },
        {
          id: "olm-u4-s6-pl-q12", difficulty: "challenge", totalMarks: 2,
          stem: "How many planes of symmetry does a square-based pyramid have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "property", name: "Pyramid", statement: "4 vertical planes." }], steps: [
            { reasoning: "4 planes through the apex and the midpoints of opposite pairs of base edges.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u4-s6-pl-q13", difficulty: "foundation", totalMarks: 3,
          stem: "Describe how you would test whether a given plane is a plane of symmetry of a solid.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Testing symmetry", statement: "Check mirror halves." }], steps: [
            { reasoning: "Imagine (or draw) the reflection of the solid in the plane.", marks: 1, markCode: "M" },
            { reasoning: "If the reflected solid coincides exactly with the original, the plane is a plane of symmetry.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reflect and check halves coincide" },
        },
        {
          id: "olm-u4-s6-pl-q14", difficulty: "core", totalMarks: 3,
          stem: "Why does a cylinder have infinitely many planes of symmetry while a cuboid has only 3?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Curved vs flat", statement: "Rotational vs reflection only." }], steps: [
            { reasoning: "The cylinder's circular cross-section is identical from every direction, so any plane through the axis works.", marks: 1, markCode: "M" },
            { reasoning: "The cuboid's rectangular faces only match when reflected through the three mid-planes; diagonal reflections do not coincide because the edge lengths differ.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cylinder has axial rotational symmetry" },
        },
        {
          id: "olm-u4-s6-pl-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A solid cuboid measures 4 cm × 2 cm × 2 cm. Find the number of planes of symmetry, explaining your count.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Counting planes", statement: "Mid-planes + diagonal planes in square faces." }], steps: [
            { reasoning: "Three mid-planes through centres of opposite faces always work.", marks: 1, markCode: "M" },
            { reasoning: "The two 2 cm × 2 cm faces are squares, giving 2 extra diagonal planes through opposite edges.", marks: 1, markCode: "M" },
            { reasoning: "Planes involving the 4 cm direction do not work because the other dimensions differ.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 planes.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u4-s6-pl-q16", difficulty: "core", totalMarks: 3,
          stem: "Describe a method for counting the planes of symmetry of a given solid.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Counting method", statement: "Systematic check." }], steps: [
            { reasoning: "List candidate planes: mid-planes through face centres, then diagonal planes through edges or vertices.", marks: 1, markCode: "M" },
            { reasoning: "For each candidate, check that reflection gives two identical halves — ignore planes that do not.", marks: 1, markCode: "M" },
            { reasoning: "Count the planes that pass the test.", marks: 1, markCode: "A" },
          ], finalAnswer: "Test each candidate plane for mirror halves" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u4-s6-sym-notes", title: "Symmetry — notes", summary: "Lines, rotational and plane symmetry.",
      sections: [
        { heading: "2D", body: "Regular n-gon: n lines, order n; rectangle 2 lines/order 2; circle infinite." },
        { heading: "3D", body: "Cuboid 3; cube 9; cylinder/cone/sphere infinite axial planes." },
      ] },
  ],
};
