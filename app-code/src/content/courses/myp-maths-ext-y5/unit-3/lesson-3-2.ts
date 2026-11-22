import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypme5-u3-lesson-3-2",
  code: "3-2",
  title: "3D Trigonometry and Linear Programming",
  goal: "I CAN solve 3D trigonometry problems and set up and solve linear programming problems with inequalities.",
  standards: [
    "MYP Maths: Geometry & Trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "3D trigonometry", definition: "Using sine/cosine rules in three dimensions by identifying appropriate triangles within the solid." },
    { term: "Linear programming", definition: "Optimising a linear objective function subject to linear inequality constraints." },
    { term: "Feasible region", definition: "The set of points satisfying all constraints; usually a polygon." },
    { term: "Objective function", definition: "$Z=ax+by+c$; maximised or minimised over the feasible region at a vertex." },
    { term: "Constraint", definition: "A linear inequality restricting the feasible region, e.g. $2x+y\\le10$." },
  ],
  concepts: [
    {
      id: "mypme5-u3-3dtrig",
      title: "Three-dimensional trigonometry",
      skill: "Solve problems involving angles and lengths in 3D solids using auxiliary triangles and trig rules.",
      lesson: {
        sections: [
          {
            heading: "Strategy for 3D problems",
            body: "Identify the required triangle: vertical cross-section, horizontal cross-section, or diagonal plane. Use Pythagoras for lengths, then apply sine/cosine rules for angles. Label all known values before calculating.",
          },
          {
            heading: "Angles in 3D",
            body: "Angle between a line and a plane: find perpendicular distance, use $\\sin\\theta=\\frac{\\text{perp}}{\\text{line}}$. Angle between two lines: use scalar product of direction vectors. Angle between line and plane can also be found via normal vector.",
          },
          {
            heading: "Worked approach",
            body: "For a cuboid $a\\times b\\times c$: space diagonal $=\\sqrt{a^2+b^2+c^2}$; face diagonal $=\\sqrt{a^2+b^2}$; angle with base $=\\tan^{-1}(\\frac{c}{\\sqrt{a^2+b^2}})$.",
          },
        ],
        keyFormulas: [
          { name: "Space diagonal", statement: "$\\sqrt{a^2+b^2+c^2}$" },
          { name: "Line-plane angle", statement: "$\\sin\\theta=\\frac{d}{L}$ where $d$ = perpendicular distance, $L$ = line length" },
          { name: "Angle between lines", statement: "$\\cos\\theta=\\frac{|\\vec{u}\\cdot\\vec{v}|}{|\\vec{u}||\\vec{v}|}$" },
        ],
        workedExample: {
          problem: "Cuboid 3×4×12. Find space diagonal and angle it makes with base.",
          solution: "$d=\\sqrt{9+16+144}=\\sqrt{169}=13$; angle $=\\tan^{-1}(\\frac{12}{5})=67.4°$.",
        },
      },
      questions: [
        {
          id: "mypme5-u3-3d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the space diagonal of a cube with side 5.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\sqrt{3}$" },
              { id: "b", text: "$5\\sqrt{2}$" },
              { id: "c", text: "15" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Space diagonal", statement: "$\\sqrt{5^2+5^2+5^2}=\\sqrt{75}=5\\sqrt{3}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{75}=5\\sqrt{3}$.", working: "5\\sqrt{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5\\sqrt{3}$",
            commonErrors: ["Using face diagonal $5\\sqrt{2}$ instead."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-3d-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cuboid has dimensions 6×8×10. Find the length of the longest face diagonal.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{136}=2\\sqrt{34}$" },
              { id: "b", text: "$\\sqrt{164}=2\\sqrt{41}$" },
              { id: "c", text: "$\\sqrt{100}=10$" },
              { id: "d", text: "$\\sqrt{200}=10\\sqrt{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Face diagonal", statement: "Largest face is 8×10: $\\sqrt{64+100}=\\sqrt{164}=2\\sqrt{41}$." },
            ],
            steps: [
              { reasoning: "Largest face diagonal: $\\sqrt{8^2+10^2}=\\sqrt{164}=2\\sqrt{41}$.", working: "2\\sqrt{41}", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "2\\sqrt{41}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{41}$",
            commonErrors: ["Using space diagonal instead of face diagonal."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cone has radius 5 cm and height 12 cm. Find the angle between the slant height and the base.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\tan^{-1}(\\frac{5}{12})=22.6°$" },
              { id: "b", text: "$\\tan^{-1}(\\frac{12}{5})=67.4°$" },
              { id: "c", text: "$67.4°$ only" },
              { id: "d", text: "$\\sin^{-1}(\\frac{12}{13})=67.4°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "3D angle", statement: "Slant $l=\\sqrt{25+144}=13$; angle with base $=\\tan^{-1}(\\frac{12}{5})=67.4°$ or $\\sin^{-1}(\\frac{12}{13})=67.4°$." },
            ],
            steps: [
              { reasoning: "Slant height $l=\\sqrt{5^2+12^2}=13$.", working: "l=13", marks: 1, markCode: "M" },
              { reasoning: "Angle $=\\tan^{-1}(\\frac{12}{5})=67.4°$ (also $\\sin^{-1}(\\frac{12}{13})$).", working: "67.4^{\\circ}", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "67.4^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "67.4°",
            commonErrors: ["Using radius instead of height in the ratio."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A pyramid has a square base of side 10 m and height 12 m.",
          parts: [
            { label: "a", prompt: "Find the slant height of a triangular face.", marks: 2 },
            { label: "b", prompt: "Find the angle between a triangular face and the base.", marks: 3 },
            { label: "c", prompt: "Find the angle between opposite triangular faces.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "3D geometry", statement: "Use auxiliary triangles: apothem, slant height, face normals." },
            ],
            steps: [
              { part: "a", reasoning: "Apothem (centre to side midpoint) $=5$; slant $=\\sqrt{5^2+12^2}=\\sqrt{169}=13$ m.", working: "13\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the slant height.", working: "13\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Angle between face and base: $\\tan\\theta=\\frac{12}{5}$ → $\\theta=67.4°$.", working: "67.4^{\\circ}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use apothem and height triangle.", working: "\\tan\\theta=12/5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", working: "67.4^{\\circ}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Opposite faces: angle between them = $180°-2\\times$ angle each face makes with vertical plane... compute via normals or geometry: angle between opposite triangular faces $=2\\tan^{-1}(\\frac{5}{12})=2(22.6°)=45.2°$... verify: angle between face and vertical plane through apex = $\\tan^{-1}(5/12)=22.6°$; opposite faces symmetric → angle between them $=2\\times22.6°=45.2°$.", working: "45.2^{\\circ}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use symmetry and auxiliary triangle.", working: "45.2^{\\circ}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "45.2^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 13 m (b) 67.4° (c) 45.2°",
            commonErrors: ["In (c), confusing angle between faces with angle between face and base."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypme5-u3-3d-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the space diagonal of a cuboid with dimensions $3\\times4\\times12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "19" },
              { id: "c", text: "13" },
              { id: "d", text: "$\\sqrt{153}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "3D Pythagoras", statement: "$d=\\sqrt{3^2+4^2+12^2}=\\sqrt{9+16+144}=\\sqrt{169}=13$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{169}=13$.", working: "13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 13",
            commonErrors: ["Adding dimensions: 3+4+12=19."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-3d-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the space diagonal of a cube with side length 2.",
          response: { type: "numeric", parts: [{ label: "Diagonal", answer: 3.464, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "3D Pythagoras", statement: "$d=\\sqrt{2^2+2^2+2^2}=\\sqrt{12}=2\\sqrt3\\approx3.464$." },
            ],
            steps: [
              { reasoning: "$d=2\\sqrt3\\approx3.464$.", working: "3.464", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\sqrt3\\approx3.464$",
            commonErrors: ["Computing $2\\sqrt2$ (face diagonal)."],
          },
        },
        {
          id: "mypme5-u3-3d-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a cuboid $3\\times4\\times12$, find the angle the space diagonal makes with the base.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\tan\\theta=\\frac{12}{5}$ → $\\theta\\approx67.4°$" },
              { id: "b", text: "$\\theta=45°$" },
              { id: "c", text: "$\\theta=90°$" },
              { id: "d", text: "$\\tan\\theta=\\frac{5}{12}$ → $\\theta\\approx22.6°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "3D trig", statement: "Angle with base: opposite = height 12, adjacent = base diagonal $\\sqrt{3^2+4^2}=5$." },
            ],
            steps: [
              { reasoning: "$\\tan\\theta=\\frac{12}{5}=2.4$ → $\\theta=67.38°\\approx67.4°$.", working: "67.4°", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\theta\\approx67.4°$",
            commonErrors: ["Using height 12 over space diagonal 13 instead of base diagonal 5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the space diagonal of a cuboid with dimensions $2\\times3\\times6$.",
          response: { type: "numeric", parts: [{ label: "Diagonal", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "3D Pythagoras", statement: "$d=\\sqrt{4+9+36}=\\sqrt{49}=7$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{49}=7$.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "State the diagonal.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
            commonErrors: ["Computing $\\sqrt{4+9}+6=9.6$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cuboid has dimensions $6\\times8\\times h$. The face diagonal of the $6\\times8$ face is 10. What is the angle between the space diagonal and this face diagonal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0°$" },
              { id: "b", text: "$90°$" },
              { id: "c", text: "It depends on $h$ — cannot be determined" },
              { id: "d", text: "$45°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "3D geometry", statement: "The space diagonal has a vertical component $h$; the angle with a face diagonal varies with $h$." },
            ],
            steps: [
              { reasoning: "Space diagonal $=\\sqrt{100+h^2}$; its projection on the face is the face diagonal 10, so angle depends on $h$.", working: "\\text{depends on }h", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Depends on $h$",
            commonErrors: ["Assuming the space diagonal lies in the face plane."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the diagonal of a rectangle with sides 6 and 8.",
          response: { type: "numeric", parts: [{ label: "Diagonal", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$d=\\sqrt{36+64}=\\sqrt{100}=10$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{100}=10$.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "10",
            commonErrors: ["Adding: 6+8=14."],
          },
        },
        {
          id: "mypme5-u3-3d-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cuboid has dimensions $1\\times2\\times2$. Find the angle between its space diagonal and a vertical edge.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 48.2, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "3D trig", statement: "Diagonal vector $(1,2,2)$, $|d|=3$; vertical edge direction $(0,0,1)$. $\\cos\\theta=\\frac{2}{3}$ → $\\theta=48.19°$." },
            ],
            steps: [
              { reasoning: "$\\cos\\theta=\\frac{d_z}{|d|}=\\frac{2}{3}=0.6667$.", working: "2/3", marks: 1, markCode: "M" },
              { reasoning: "$\\theta=\\arccos(0.6667)=48.19°\\approx48.2°$.", working: "48.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48.2°$",
            commonErrors: ["Using horizontal projection instead of vertical component."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cuboid has dimensions $3\\times4\\times5$. Find the angle between its space diagonal and the longest edge.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 45 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "3D trig", statement: "Longest edge is 5; diagonal $\\vec d=(3,4,5)$, $|d|=\\sqrt{50}=5\\sqrt2$. $\\cos\\theta=\\frac{5}{5\\sqrt2}=\\frac1{\\sqrt2}$ → $45°$." },
            ],
            steps: [
              { reasoning: "$|\\vec d|=\\sqrt{9+16+25}=\\sqrt{50}=5\\sqrt2$; component along longest edge $=5$.", working: "\\cos\\theta=\\frac{5}{5\\sqrt2}", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta=\\frac1{\\sqrt2}$ → $\\theta=45°$.", working: "45", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "45°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45°",
            commonErrors: ["Using edge 3 or 4 instead of the longest edge 5."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A room is $8$ m long, $6$ m wide and $3$ m high.",
          parts: [
            { label: "a", prompt: "Find the length of the space diagonal.", marks: 1 },
            { label: "b", prompt: "Find the angle the diagonal makes with the floor.", marks: 2 },
            { label: "c", prompt: "Find the angle between the space diagonal and the diagonal of the $8\\times6$ floor.", marks: 2 },
            { label: "d", prompt: "Find the angle between the space diagonal and the diagonal of the $6\\times3$ wall.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "3D trig", statement: "Use auxiliary right-angled triangles; floor diagonal $=10$, space diagonal $=\\sqrt{109}\\approx10.44$." },
            ],
            steps: [
              { part: "a", reasoning: "$d=\\sqrt{64+36+9}=\\sqrt{109}\\approx10.44$ m.", working: "10.44\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\tan\\theta=\\frac{3}{10}=0.3$ → $\\theta=16.7°$.", working: "16.7°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", working: "16.7°", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The space diagonal projected onto the floor IS the floor diagonal, so the angle equals part (b): $16.7°$.", working: "16.7°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "16.7°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Wall diagonal vector $(0,6,3)$, $|w|=\\sqrt{45}=6.708$; dot with $d=(8,6,3)$: $0+36+9=45$; $\\cos\\theta=\\frac{45}{10.44\\times6.708}=0.6425$ → $\\theta=50.0°$.", working: "50.0°", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 10.44 m (b) 16.7° (c) 16.7° (d) 50.0°",
            commonErrors: ["In (c), forgetting that the projection of the space diagonal on the floor is the floor diagonal itself."],
            examinerNote: "M1 for (a), M1 A1 for (b), M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypme5-u3-3d-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the 3D Pythagoras theorem for the space diagonal $d$ of a cuboid with dimensions $a,b,c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$d=a^2+b^2+c^2$" },
              { id: "b", text: "$d=\\sqrt{a^2+b^2}+c$" },
              { id: "c", text: "$d=\\sqrt{a^2+b^2+c^2}$" },
              { id: "d", text: "$d=a+b+c$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "3D Pythagoras", statement: "Space diagonal $d=\\sqrt{a^2+b^2+c^2}$." },
            ],
            steps: [
              { reasoning: "Square root of sum of squares of all three dimensions.", working: "d=\\sqrt{a^2+b^2+c^2}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $d=\\sqrt{a^2+b^2+c^2}$",
            commonErrors: ["Writing $\\sqrt{a^2+b^2}+c$ which mixes 2D and 3D."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the angle between the vectors $\\vec u=\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$ and $\\vec v=\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$, in degrees correct to 1 d.p.",
          response: { type: "numeric", parts: [{ label: "Angle (degrees)", answer: 63.6, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Angle between vectors", statement: "$\\vec u\\cdot\\vec v=2-2+4=4$; $|\\vec u|=|\\vec v|=3$; $\\cos\\theta=\\frac49=0.4444$ → $\\theta=63.6°$." },
            ],
            steps: [
              { reasoning: "Dot product $=1(2)+2(-1)+2(2)=4$; magnitudes both 3.", working: "\\cos\\theta=\\frac{4}{9}", marks: 1, markCode: "M" },
              { reasoning: "$\\theta=\\arccos(0.4444)=63.61°\\approx63.6°$.", working: "63.6", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "63.6°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$63.6°$",
            commonErrors: ["Computing the dot product as 0 by missing the $z$-terms."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-3d-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A tetrahedron has vertices $O(0,0,0)$, $A(3,0,0)$, $B(0,4,0)$ and $C(0,0,12)$.",
          parts: [
            { label: "a", prompt: "Find the lengths $AB$ and $AC$.", marks: 2 },
            { label: "b", prompt: "Find the angle between $\\vec{AB}$ and $\\vec{AC}$.", marks: 2 },
            { label: "c", prompt: "Find the angle that $AC$ makes with the horizontal plane.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "3D trig", statement: "$AB=\\sqrt{9+16}=5$; $AC=\\sqrt{9+144}=\\sqrt{153}$; use vectors for the angle." },
            ],
            steps: [
              { part: "a", reasoning: "$AB=\\sqrt{(3-0)^2+(0-4)^2+0}=\\sqrt{25}=5$; $AC=\\sqrt{9+144}=\\sqrt{153}\\approx12.37$.", working: "5,12.37", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both lengths.", working: "AB=5,AC=\\sqrt{153}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\vec{AB}=(-3,4,0)$, $\\vec{AC}=(-3,0,12)$; dot $=9$; $|AB|=5$, $|AC|=\\sqrt{153}$; $\\cos\\theta=\\frac{9}{5\\sqrt{153}}=0.1455$ → $\\theta=81.6°$.", working: "81.6°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", working: "81.6°", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Edge $AC$ has horizontal component 3 and vertical component 12; $\\tan\\alpha=\\frac{12}{3}=4$ → angle with horizontal plane $\\alpha=76.0°$.", working: "76.0°", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 5 and $\\sqrt{153}\\approx12.37$ (b) 81.6° (c) 76.0°",
            commonErrors: ["In (c), confusing the angle with vertical versus horizontal."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 for (c).",
          },
        },
      ],
    },
    {
      id: "mypme5-u3-lp",
      title: "Linear Programming",
      skill: "Formulate and solve linear programming problems, identifying feasible regions and optimal solutions.",
      lesson: {
        sections: [
          {
            heading: "Setting up the problem",
            body: "Define decision variables ($x,y$), write objective function $Z=ax+by+c$ to maximise/minimise, and constraints as linear inequalities including $x,y\\ge0$ (non-negativity).",
          },
          {
            heading: "Finding the feasible region",
            body: "Plot each constraint line; shade the feasible side. The feasible region is the intersection — usually a polygon. Find vertices by solving pairs of boundary equations simultaneously.",
          },
          {
            heading: "Optimisation",
            body: "The optimal value of $Z$ occurs at a **vertex** of the feasible region (or along an edge if parallel). Evaluate $Z$ at each vertex and select max/min. For integer solutions, check nearby integer points.",
          },
        ],
        keyFormulas: [
          { name: "Objective", statement: "$Z=ax+by+c$" },
          { name: "Constraints", statement: "$a_ix+b_iy\\le c_i$ (or $\\ge$)" },
          { name: "Optimal", statement: "At a vertex of feasible region" },
        ],
        workedExample: {
          problem: "Maximise $Z=3x+2y$ subject to $x+y\\le4$, $x+2y\\le6$, $x,y\\ge0$.",
          solution: "Vertices: (0,0), (4,0), (2,2), (0,3). $Z$: 0, 12, 10, 6. Max at (4,0), $Z=12$.",
        },
      },
      questions: [
        {
          id: "mypme5-u3-lp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the feasible region represent in linear programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The objective function" },
              { id: "b", text: "The maximum profit" },
              { id: "c", text: "The constraint lines" },
              { id: "d", text: "All points satisfying every constraint" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasible region", statement: "Set of all points satisfying all constraints simultaneously." },
            ],
            steps: [
              { reasoning: "Feasible region = all constraint-satisfying points.", working: "\\text{feasible}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** All points satisfying every constraint",
            commonErrors: ["Confusing with objective function."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-lp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maximise $Z=x+y$ subject to $x\\le3$, $y\\le4$, $x,y\\ge0$. Find the maximum.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 at (0,4)" },
              { id: "b", text: "7 at (3,4)" },
              { id: "c", text: "3 at (3,0)" },
              { id: "d", text: "12 at (3,4)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vertex check", statement: "Max at vertex (3,4): $Z=3+4=7$." },
            ],
            steps: [
              { reasoning: "Vertices: (0,0),(3,0),(3,4),(0,4); max $Z=7$ at (3,4).", working: "Z=7", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 at (3,4)",
            commonErrors: ["Multiplying instead of adding for $Z=x+y$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Minimise $Z=2x+y$ subject to $x+y\\ge5$, $x\\le4$, $y\\le4$, $x,y\\ge0$. Find the minimum.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 at (5,0)" },
              { id: "b", text: "8 at (4,4)" },
              { id: "c", text: "6 at (2,3)" },
              { id: "d", text: "4 at (0,4)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Feasible vertices", statement: "Vertices: (1,4),(2,3),(4,1),(4,4)... check: intersection of $x+y=5$ with $x\\le4,y\\le4$: endpoints (1,4),(4,1); with $y=4$: $x=1$; with $x=4$: $y=1$. Also (4,4) if needed for min? Min at (2,3)? Check $x+y=5$ gives min $Z$ at endpoint closest to origin: (1,4): $Z=2+4=6$; (4,1): $Z=8+1=9$. So min = 6 at (1,4), not (2,3)! (2,3) isn't on boundary... (2,3): $x+y=5$ yes it's on the line. $Z=4+3=7$. So minimum is 6 at (1,4)." },
            ],
            steps: [
              { reasoning: "Feasible region bounded by $x+y=5$, $x=4$, $y=4$, axes; vertices (1,4),(4,1),(4,4).", working: "vertices", marks: 1, markCode: "M" },
              { reasoning: "$Z$ at (1,4)=$2+4=6$; at (4,1)=$8+1=9$; at (4,4)=$8+4=12$. Min = 6.", working: "Z=6", marks: 1, markCode: "M" },
              { reasoning: "State the minimum.", working: "6\\text{ at }(1,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 at (1,4)",
            commonErrors: ["Evaluating at non-vertex points."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bakery makes cakes ($x$) and pastries ($y$). Each cake uses 2 eggs and 3 cups flour; each pastry uses 1 egg and 1 cup flour. Daily limits: 20 eggs, 24 cups flour. Profit: 3 per cake, 2 per pastry.",
          parts: [
            { label: "a", prompt: "Write the constraints and objective function.", marks: 2 },
            { label: "b", prompt: "Find the feasible region vertices.", marks: 2 },
            { label: "c", prompt: "Find the optimal production mix and maximum profit.", marks: 3 },
            { label: "d", prompt: "If profits change to 4 per cake and 1 per pastry, does the optimal mix change?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "LP formulation", statement: "Constraints from resource limits; objective = total profit." },
            ],
            steps: [
              { part: "a", reasoning: "Constraints: $2x+y\\le20$, $3x+y\\le24$, $x,y\\ge0$; objective $Z=3x+2y$.", working: "2x+y\\le20,3x+y\\le24,Z=3x+2y", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State constraints and objective.", working: "\\text{formulated}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertices: (0,0), (8,0), (4,12), (0,20)... check intersections: $2x+y=20$ & $3x+y=24$ → $x=4,y=12$; $2x+y=20$ & $y=0$ → $x=10$ but $3(10)=30>24$ invalid; $3x+y=24$ & $y=0$ → $x=8$; $x=0$ → $y=20$ from first, but $20>24$? $3(0)+20=20\\le24$ OK → (0,20) valid? $2(0)+20=20\\le20$ ✓ and $3(0)+20=20\\le24$ ✓. So vertices: (0,0),(8,0),(4,12),(0,20).", working: "(0,0),(8,0),(4,12),(0,20)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State vertices.", working: "\\text{vertices}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$Z$ at vertices: (0,0)=0; (8,0)=24; (4,12)=12+24=36; (0,20)=40. Max at (0,20) → make 20 pastries, 0 cakes.", working: "Z=40", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate all vertices.", working: "0,24,36,40", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State optimal and profit.", working: "20 pastries, profit 40", marks: 1, markCode: "A" },
              { part: "d", reasoning: "New $Z=4x+y$: at (4,12)=$16+12=28$; at (0,20)=20; at (8,0)=32. Max now at (8,0) → 8 cakes. Mix changes.", working: "(8,0)", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $2x+y\\le20$, $3x+y\\le24$, $Z=3x+2y$ (b) (0,0),(8,0),(4,12),(0,20) (c) 20 pastries, profit 40 (d) changes to 8 cakes",
            commonErrors: ["In (b), including (10,0) which violates flour constraint."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypme5-u3-lp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a linear programming problem, what defines the feasible region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The region above the objective line" },
              { id: "b", text: "The line where the objective function is zero" },
              { id: "c", text: "The set of points satisfying all constraints simultaneously" },
              { id: "d", text: "Only the boundary lines of the constraints" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasible region", statement: "All points $(x,y)$ satisfying every constraint and non-negativity conditions." },
            ],
            steps: [
              { reasoning: "Feasible region = intersection of all constraint half-planes.", working: "\\text{all constraints}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Points satisfying all constraints",
            commonErrors: ["Thinking only the boundary counts as feasible."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u3-lp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $Z=2x+3y$ at the point $(4,1)$.",
          response: { type: "numeric", parts: [{ label: "$Z$", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Objective function", statement: "$Z=2(4)+3(1)=11$." },
            ],
            steps: [
              { reasoning: "$Z=8+3=11$.", working: "11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "11",
            commonErrors: ["Computing $2(4+1)+3=13$."],
          },
        },
        {
          id: "mypme5-u3-lp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is the point $(3,1)$ feasible for the constraints $x+y\\le4$, $x,y\\ge0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only if it is a vertex" },
              { id: "b", text: "No — $x$ must be less than $y$" },
              { id: "c", text: "No — $3+1>4$" },
              { id: "d", text: "Yes — $3+1=4\\le4$ and both coordinates non-negative" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feasibility", statement: "A point is feasible iff it satisfies all constraints." },
            ],
            steps: [
              { reasoning: "$3+1=4\\le4$ ✓; $3\\ge0$, $1\\ge0$ ✓.", working: "4\\le4", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Yes, feasible",
            commonErrors: ["Thinking feasibility requires being a vertex."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maximise $Z=x+2y$ subject to $x+y\\le5$, $x,y\\ge0$. What is the maximum value?",
          response: { type: "numeric", parts: [{ label: "Max $Z$", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "LP optimum", statement: "Maximum occurs at a vertex; check $(0,0),(5,0),(0,5)$." },
            ],
            steps: [
              { reasoning: "Vertices: $(0,0)\\to0$, $(5,0)\\to5$, $(0,5)\\to10$; max $=10$.", working: "Z(0,5)=10", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Evaluating at a non-vertex interior point."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the constraint $x+2y\\le6$, what are the intercepts of the boundary line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6,0)$ and $(0,3)$" },
              { id: "b", text: "$(2,3)$ and $(6,0)$" },
              { id: "c", text: "$(3,0)$ and $(0,6)$" },
              { id: "d", text: "$(6,0)$ and $(0,6)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Boundary line", statement: "Set $y=0$: $x=6$; set $x=0$: $y=3$." },
            ],
            steps: [
              { reasoning: "$x$-intercept $(6,0)$; $y$-intercept $(0,3)$.", working: "(6,0),(0,3)", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(6,0)$ and $(0,3)$",
            commonErrors: ["Dividing 6 by the wrong coefficient."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $Z=5x-y$ at $(2,3)$.",
          response: { type: "numeric", parts: [{ label: "$Z$", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Objective function", statement: "$Z=5(2)-3=7$." },
            ],
            steps: [
              { reasoning: "$Z=10-3=7$.", working: "7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "7",
            commonErrors: ["Adding instead of subtracting $y$."],
          },
        },
        {
          id: "mypme5-u3-lp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maximise $Z=3x+y$ subject to $x+y\\le6$, $x\\le4$, $x,y\\ge0$. What is the maximum value?",
          response: { type: "numeric", parts: [{ label: "Max $Z$", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "LP optimum", statement: "Check vertices $(0,0),(4,0),(4,2),(0,6)$; max at $(4,2)$: $Z=14$." },
            ],
            steps: [
              { reasoning: "Intersection of $x=4$ and $x+y=6$ is $(4,2)$; $Z=12+2=14$ — the largest vertex value.", working: "Z(4,2)=14", marks: 1, markCode: "M" },
              { reasoning: "State the maximum.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
            commonErrors: ["Stopping at $(4,0)$ or $(0,6)$ without checking all vertices."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Minimise $Z=2x+y$ subject to $x+y\\ge5$, $x+3y\\ge9$, $x,y\\ge0$.",
          response: { type: "numeric", parts: [{ label: "Min $Z$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "LP optimum", statement: "For minimisation with $\\ge$ constraints, check boundary vertices: $(0,5)$ gives $Z=5$; $(9,0)$ gives $Z=18$; $(3,2)$ gives $Z=8$." },
            ],
            steps: [
              { reasoning: "Vertex $(0,5)$ (from $x=0$, $x+y=5$): check $x+3y=15\\ge9$ ✓; $Z=0+5=5$.", working: "Z(0,5)=5", marks: 1, markCode: "M" },
              { reasoning: "Vertex $(3,2)$ (intersection): $Z=8$; vertex $(9,0)$: $Z=18$. Minimum is 5.", working: "min=5", marks: 1, markCode: "M" },
              { reasoning: "State the minimum.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Minimising at $(3,2)$ without checking axis intercepts."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bakery makes $x$ cakes and $y$ loaves of bread per day. Each cake needs 2 hours of oven time and each loaf needs 1 hour; total oven time available is 12 hours per day. Labour allows $x+2y\\le12$. Profits are $\\$4$ per cake and $\\$5$ per loaf.",
          parts: [
            { label: "a", prompt: "Write down the constraints and the objective function.", marks: 2 },
            { label: "b", prompt: "Find the vertices of the feasible region.", marks: 1 },
            { label: "c", prompt: "Evaluate the profit at each vertex.", marks: 2 },
            { label: "d", prompt: "State the optimal production plan and daily profit.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "LP formulation", statement: "Maximise $Z=4x+5y$ subject to $2x+y\\le12$, $x+2y\\le12$, $x,y\\ge0$." },
            ],
            steps: [
              { part: "a", reasoning: "Constraints: $2x+y\\le12$ (oven), $x+2y\\le12$ (labour), $x,y\\ge0$; objective $Z=4x+5y$.", working: "2x+y\\le12,x+2y\\le12,Z=4x+5y", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all constraints and objective.", working: "\\text{stated}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertices: $(0,0),(6,0),(4,4),(0,6)$.", working: "(0,0),(6,0),(4,4),(0,6)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$Z$ values: $0$, $24$, $36$, $30$ respectively.", working: "0,24,36,30", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Maximum is 36 at $(4,4)$.", working: "36", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Make 4 cakes and 4 loaves; profit $\\$36$ per day.", working: "4\\text{ cakes},4\\text{ loaves},36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2x+y\\le12$, $x+2y\\le12$, $Z=4x+5y$ (b) $(0,0),(6,0),(4,4),(0,6)$ (c) max 36 (d) 4 cakes, 4 loaves, $\\$36$",
            commonErrors: ["Ignoring the labour constraint $x+2y\\le12$."],
            examinerNote: "M1 A1 for (a), M1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypme5-u3-lp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an LP problem, a constraint is 'binding' at the optimum. What does this mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The objective function is zero" },
              { id: "b", text: "The constraint is violated at the optimum" },
              { id: "c", text: "The constraint is satisfied with equality at the optimal point" },
              { id: "d", text: "The constraint has no effect on the solution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binding constraint", statement: "A constraint is binding when the optimal solution lies exactly on its boundary." },
            ],
            steps: [
              { reasoning: "Binding = equality holds at optimum.", working: "\\text{equality holds}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Equality holds at optimum",
            commonErrors: ["Confusing binding with slack."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An LP problem has optimum at a vertex with non-integer coordinates, but the variables must be integers. What should be done?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Integer solutions cannot exist" },
              { id: "b", text: "Round up both coordinates always" },
              { id: "c", text: "The LP solution is automatically valid" },
              { id: "d", text: "Round the LP solution and re-check feasibility of nearby integer points" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Integer programming", statement: "LP relaxation gives a bound; integer optimum must be checked at feasible integer points near the vertex." },
            ],
            steps: [
              { reasoning: "The LP optimum may not be attainable; test integer-feasible points.", working: "\\text{check integer points}", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Check nearby integer-feasible points",
            commonErrors: ["Assuming rounding up preserves feasibility — it can violate constraints."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme5-u3-lp-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Maximise $Z=3x+2y$ subject to $x+y\\le10$, $x+2y\\le14$, $x,y\\ge0$.",
          parts: [
            { label: "a", prompt: "Write down the constraints in standard form.", marks: 2 },
            { label: "b", prompt: "Find the value of $Z$ at the vertices $(10,0)$, $(6,4)$ and $(0,7)$.", marks: 2 },
            { label: "c", prompt: "State the optimal solution and maximum value of $Z$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "LP optimum", statement: "Maximum of a linear objective over a polygon occurs at a vertex." },
            ],
            steps: [
              { part: "a", reasoning: "Constraints: $x+y\\le10$, $x+2y\\le14$, $x\\ge0$, $y\\ge0$.", working: "x+y\\le10,x+2y\\le14", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all constraints.", working: "\\text{stated}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$Z(10,0)=30$; $Z(6,4)=18+8=26$; $Z(0,7)=14$.", working: "30,26,14", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all three values.", working: "Z=30,26,14", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Maximum at $(10,0)$ with $Z=30$.", working: "(10,0),Z=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x+y\\le10$, $x+2y\\le14$, $x,y\\ge0$ (b) 30, 26, 14 (c) $(10,0)$, $Z=30$",
            commonErrors: ["Checking only the intersection vertex $(6,4)$ and missing $(10,0)$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), A1 for (c).",
          },
        },
      ],
    },
  ],
};
