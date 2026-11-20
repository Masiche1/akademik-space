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
            { id: "a", text: "2" }, { id: "b", text: "4" }, { id: "c", text: "1" }, { id: "d", text: "0" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "3" }, { id: "b", text: "6" }, { id: "c", text: "9" }, { id: "d", text: "Infinite" },
          ], correctChoiceId: "a" },
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
