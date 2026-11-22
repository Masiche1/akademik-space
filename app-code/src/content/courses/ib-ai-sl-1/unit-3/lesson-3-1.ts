import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "aisl-u3-lesson-3-1",
  code: "3-1",
  title: "Three-Dimensional Geometry",
  goal: "I CAN calculate distances, volumes, surface areas and angles in three-dimensional solids.",
  standards: ["SL 3.1"],
  vocabulary: [
    { term: "Distance in 3D", definition: "The distance between $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ is $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$." },
    { term: "Midpoint", definition: "The point halfway between two points, with coordinates the averages of the corresponding coordinates." },
    { term: "Volume", definition: "The amount of space inside a solid, measured in cubic units." },
    { term: "Surface area", definition: "The total area of all the faces of a solid." },
    { term: "Angle between a line and a plane", definition: "The angle between the line and its projection onto the plane." },
    { term: "Slant height", definition: "The distance along a sloping face of a cone or pyramid from the apex to the base edge." },
  ],
  concepts: [
    {
      id: "aisl-u3-solids",
      title: "3D distance, volume and surface area",
      skill: "Find distances and midpoints in 3D and the volume and surface area of prisms, pyramids, cylinders, spheres and cones.",
      lesson: {
        sections: [
          {
            heading: "Distance and midpoint",
            body: "For $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$: $AB = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$ and the midpoint is $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}, \\frac{z_1+z_2}{2}\\right)$.",
          },
          {
            heading: "Volume and surface area formulae",
            body: "The formula booklet gives: pyramid $V = \\frac{1}{3}Ah$; cylinder $V = \\pi r^2 h$; cone $V = \\frac{1}{3}\\pi r^2 h$, curved area $\\pi r l$; sphere $V = \\frac{4}{3}\\pi r^3$, $A = 4\\pi r^2$. Prisms use $V = Ah$. Composite solids are handled by adding or subtracting volumes.",
          },
          {
            heading: "Using right triangles inside solids",
            body: "The slant height $l$ and height $h$ of a cone satisfy $l^2 = r^2 + h^2$. The diagonal of a cuboid with sides $a, b, c$ is $\\sqrt{a^2+b^2+c^2}$. Sketch the solid, mark known lengths and pick out right-angled triangles.",
          },
        ],
        keyFormulas: [
          { name: "3D distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$" },
          { name: "Sphere", statement: "$V = \\frac{4}{3}\\pi r^3,\\; A = 4\\pi r^2$" },
          { name: "Cone", statement: "$V = \\frac{1}{3}\\pi r^2 h,\\; \\text{curved area} = \\pi r l$" },
        ],
        workedExample: {
          problem: "Find the volume of a cone with radius $6$ cm and height $10$ cm.",
          solution: "$V = \\frac{1}{3}\\pi (6)^2(10) = 120\\pi = 377$ cm$^3$ (3 s.f.).",
        },
      },
      questions: [
        {
          id: "aisl-u3-solids-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Points $A(1, 2, 3)$ and $B(5, 6, 9)$ are given. Find the coordinates of the midpoint of $AB$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 2, 3)$" },
              { id: "b", text: "$(6, 8, 12)$" },
              { id: "c", text: "$(4, 4, 6)$" },
              { id: "d", text: "$(3, 4, 6)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "Average each pair of coordinates." },
            ],
            steps: [
              { reasoning: "Average the corresponding coordinates.", working: "\\left(\\frac{1+5}{2}, \\frac{2+6}{2}, \\frac{3+9}{2}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "(3, 4, 6)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(3, 4, 6)$",
            commonErrors: ["Adding the coordinates without halving, giving $(6, 8, 12)$.", "Halving the differences instead of averaging."],
          },
        },
        {
          id: "aisl-u3-solids-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cone has base radius $6$ cm and vertical height $10$ cm. Find its volume, in cm$^3$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Volume (cm$^3$)", answer: 377, tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$" },
            ],
            steps: [
              { reasoning: "Substitute $r = 6$, $h = 10$.", working: "V = \\frac{1}{3}\\pi(6)^2(10)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "V = 120\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "377", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$377$ cm$^3$",
            commonErrors: ["Omitting the factor $\\frac{1}{3}$, giving $1130$.", "Using the slant height in place of the vertical height."],
          },
        },
        {
          id: "aisl-u3-solids-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A solid is made of a cylinder of radius $4$ cm and height $10$ cm with a hemisphere of radius $4$ cm attached on top. Find the total volume of the solid, in cm$^3$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Volume (cm$^3$)", answer: 637, tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder and sphere volumes", statement: "$V_{cyl} = \\pi r^2 h$, $V_{sph} = \\frac{4}{3}\\pi r^3$" },
            ],
            steps: [
              { reasoning: "Volume of the cylinder.", working: "\\pi(4)^2(10) = 160\\pi", marks: 1, markCode: "M" },
              { reasoning: "Volume of the hemisphere is half the sphere.", working: "\\frac{1}{2}\\times\\frac{4}{3}\\pi(4)^3 = \\frac{128\\pi}{3}", marks: 1, markCode: "M" },
              { reasoning: "Add the volumes.", working: "160\\pi + \\frac{128\\pi}{3} = \\frac{608\\pi}{3}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "637", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$637$ cm$^3$",
            commonErrors: ["Using the full sphere rather than a hemisphere.", "Using $\\frac{4}{3}\\pi r^2$."],
          },
        },
        {
          id: "aisl-u3-solids-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A tent is in the shape of a right pyramid with a square base $ABCD$ of side $6$ m. The vertex $V$ is directly above the centre of the base, and the vertical height is $4$ m. Use a coordinate system with $A(0,0,0)$, $B(6,0,0)$, $C(6,6,0)$, $D(0,6,0)$ and $V(3,3,4)$.",
          parts: [
            { label: "a", prompt: "Find the volume of the tent.", marks: 2 },
            { label: "b", prompt: "Find the length $VA$.", marks: 2 },
            { label: "c", prompt: "Find the height of one triangular face, measured from $V$ to the midpoint of $AB$.", marks: 3 },
            { label: "d", prompt: "Hence find the total area of the four triangular faces. Give your answer to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a pyramid", statement: "$V = \\frac{1}{3}Ah$" },
              { kind: "formula", name: "3D distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$" },
              { kind: "formula", name: "Triangle area", statement: "$A = \\frac{1}{2}bh$" },
            ],
            steps: [
              { part: "a", reasoning: "Base area is $36$; substitute into the pyramid formula.", working: "V = \\frac{1}{3}(36)(4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "V = 48 \\text{ m}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the 3D distance formula between $V(3,3,4)$ and $A(0,0,0)$.", working: "VA = \\sqrt{3^2 + 3^2 + 4^2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\sqrt{34} = 5.83 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The midpoint of $AB$ is $M(3, 0, 0)$.", working: "M(3, 0, 0)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find $VM$ using the distance formula.", working: "VM = \\sqrt{0^2 + 3^2 + 4^2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "VM = 5 \\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each face has base $6$ m and height $5$ m.", working: "\\frac{1}{2}(6)(5) = 15", marks: 1, markCode: "M" },
              { part: "d", reasoning: "There are four identical faces.", working: "4 \\times 15", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the area, exactly $60$.", working: "60.0 \\text{ m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $48$ m$^3$. (b) $5.83$ m. (c) $5$ m. (d) $60.0$ m$^2$.",
            commonErrors: ["Using the vertical height $4$ m as the height of a face.", "Forgetting the factor $\\frac{1}{3}$."],
          },
        },
        {
          id: "aisl-u3-solids-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The points $P(2, 4, 6)$ and $Q(8, 10, 3)$ are given. Find the distance $PQ$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$11$" },
              { id: "b", text: "$81$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$\\sqrt{14}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "3D distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$" },
            ],
            steps: [
              { reasoning: "Substitute the coordinate differences into the distance formula.", working: "PQ = \\sqrt{(8-2)^2 + (10-4)^2 + (3-6)^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the squares and take the square root.", working: "PQ = \\sqrt{36 + 36 + 9} = \\sqrt{81} = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $9$",
            commonErrors: ["Leaving the answer as $81$ without taking the square root.", "Adding the coordinate differences instead of squaring them."],
          },
        },
        {
          id: "aisl-u3-solids-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sphere has radius $3$ cm. Find its volume, in cm$^3$, in terms of $\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$108\\pi$" },
              { id: "b", text: "$36\\pi$" },
              { id: "c", text: "$12\\pi$" },
              { id: "d", text: "$27\\pi$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a sphere", statement: "$V = \\frac{4}{3}\\pi r^3$" },
            ],
            steps: [
              { reasoning: "Substitute $r = 3$ into the sphere volume formula.", working: "V = \\frac{4}{3}\\pi(3)^3", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "V = \\frac{4}{3}\\pi \\times 27 = 36\\pi", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $36\\pi$ cm$^3$",
            commonErrors: ["Using $r^2$ instead of $r^3$, giving $12\\pi$.", "Omitting the factor $\\frac{4}{3}$, giving $27\\pi$."],
          },
        },
        {
          id: "aisl-u3-solids-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cube has side length $5$ cm. Find its total surface area, in cm$^2$.",
          response: { type: "numeric", parts: [{ label: "Surface area (cm$^2$)", answer: 150, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surface area of a cube", statement: "$A = 6s^2$" },
            ],
            steps: [
              { reasoning: "A cube has $6$ identical square faces.", working: "6 \\text{ faces}", marks: 1, markCode: "M" },
              { reasoning: "Each face has area $s^2$.", working: "5^2 = 25 \\text{ cm}^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply to get the total surface area.", working: "6 \\times 25 = 150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ cm$^2$",
            commonErrors: ["Finding only the volume, $125$ cm$^3$.", "Using $5s^2$ or forgetting one pair of faces."],
          },
        },
        {
          id: "aisl-u3-solids-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cylinder has radius $4$ cm and height $10$ cm. Find its volume, in cm$^3$, to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$251$" },
              { id: "b", text: "$503$" },
              { id: "c", text: "$1005$" },
              { id: "d", text: "$314$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V = \\pi r^2 h$" },
            ],
            steps: [
              { reasoning: "Substitute $r = 4$ and $h = 10$.", working: "V = \\pi(4)^2(10) = 160\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "V = 160\\pi = 502.7 \\approx 503", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $503$ cm$^3$",
            commonErrors: ["Using the diameter $8$ as the radius, giving $1005$.", "Using $\\pi r h$ instead of $\\pi r^2 h$."],
          },
        },
        {
          id: "aisl-u3-solids-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cone has base radius $3$ cm and vertical height $7$ cm. Find its volume, in cm$^3$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Volume (cm$^3$)", answer: 66, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$" },
            ],
            steps: [
              { reasoning: "Substitute $r = 3$, $h = 7$.", working: "V = \\frac{1}{3}\\pi(3)^2(7)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "V = 21\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "V = 65.97 \\approx 66.0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$66.0$ cm$^3$",
            commonErrors: ["Omitting the factor $\\frac{1}{3}$, giving $198$.", "Using the slant height instead of the vertical height."],
          },
        },
        {
          id: "aisl-u3-solids-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A solid is made of a cylinder of radius $3$ cm and height $4$ cm with a hemisphere of radius $3$ cm attached on top. Find the total volume of the solid, in cm$^3$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Volume (cm$^3$)", answer: 170, tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder and sphere volumes", statement: "$V_{cyl} = \\pi r^2 h$, $V_{sph} = \\frac{4}{3}\\pi r^3$" },
            ],
            steps: [
              { reasoning: "Volume of the cylinder.", working: "V_{cyl} = \\pi(3)^2(4) = 36\\pi", marks: 1, markCode: "M" },
              { reasoning: "Volume of the hemisphere is half the sphere.", working: "V_{hemi} = \\frac{1}{2} \\times \\frac{4}{3}\\pi(3)^3 = 18\\pi", marks: 1, markCode: "M" },
              { reasoning: "Add the volumes.", working: "36\\pi + 18\\pi = 54\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "54\\pi = 169.6 \\approx 170", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$170$ cm$^3$",
            commonErrors: ["Using the full sphere rather than a hemisphere.", "Forgetting to add the cylinder volume."],
          },
        },
        {
          id: "aisl-u3-solids-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the distance from the origin to the point $(2, 3, 6)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$\\sqrt{14}$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "3D distance", statement: "$d = \\sqrt{x^2 + y^2 + z^2}$ for distance from the origin" },
            ],
            steps: [
              { reasoning: "Apply the distance formula with the origin $(0,0,0)$.", working: "d = \\sqrt{2^2 + 3^2 + 6^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $7$",
            commonErrors: ["Adding the coordinates: $2+3+6=11$.", "Using only two of the three coordinates."],
          },
        },
        {
          id: "aisl-u3-solids-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A hemisphere has radius $6$ cm. Find its volume, in cm$^3$, to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$226$" },
              { id: "b", text: "$905$" },
              { id: "c", text: "$113$" },
              { id: "d", text: "$452$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a hemisphere", statement: "$V = \\frac{2}{3}\\pi r^3$" },
            ],
            steps: [
              { reasoning: "A hemisphere is half a sphere, so halve the sphere volume.", working: "V = \\frac{1}{2} \\times \\frac{4}{3}\\pi(6)^3 = \\frac{2}{3}\\pi(216) = 144\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "144\\pi = 452.4 \\approx 452", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $452$ cm$^3$",
            commonErrors: ["Using the full sphere volume, giving $905$.", "Halving twice and getting $226$."],
          },
        },
        {
          id: "aisl-u3-solids-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A shipping crate is a cuboid with length $30$ cm, width $20$ cm and height $15$ cm.",
          parts: [
            { label: "a", prompt: "Find the volume of the crate.", marks: 2 },
            { label: "b", prompt: "Find the total surface area of the crate.", marks: 2 },
            { label: "c", prompt: "Find the length of the longest rod that can fit inside the crate, to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "The crate is packed with smaller cubes of side $5$ cm. Find the maximum number of small cubes that can fit.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V = lwh$" },
              { kind: "formula", name: "Surface area of a cuboid", statement: "$A = 2(lw + lh + wh)$" },
              { kind: "theorem", name: "Space diagonal", statement: "$d = \\sqrt{l^2 + w^2 + h^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the three dimensions.", working: "V = 30 \\times 20 \\times 15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "V = 9000 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the surface area formula with $l = 30$, $w = 20$, $h = 15$.", working: "A = 2(30 \\times 20 + 30 \\times 15 + 20 \\times 15)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "A = 2(600 + 450 + 300) = 2700 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The longest rod is the space diagonal.", working: "d = \\sqrt{30^2 + 20^2 + 15^2} = \\sqrt{1525}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 3 significant figures.", working: "d = 39.1 \\text{ cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide each dimension by the cube side.", working: "\\frac{30}{5} \\times \\frac{20}{5} \\times \\frac{15}{5} = 6 \\times 4 \\times 3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply the numbers of cubes along each dimension.", working: "6 \\times 4 = 24,\\quad 24 \\times 3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the number of cubes.", working: "72 \\text{ cubes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $9000$ cm$^3$. (b) $2700$ cm$^2$. (c) $39.1$ cm. (d) $72$ cubes.",
            commonErrors: ["Adding the three face areas once instead of twice.", "Using $\\sqrt{30+20+15}$ for the diagonal.", "Dividing the volume by $125$ instead of counting whole cubes per dimension."],
          },
        },
        {
          id: "aisl-u3-solids-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A square pyramid has a base of side $8$ cm and vertical height $9$ cm. Find its volume, in cm$^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$192$" },
              { id: "b", text: "$288$" },
              { id: "c", text: "$64$" },
              { id: "d", text: "$576$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a pyramid", statement: "$V = \\frac{1}{3}Ah$" },
            ],
            steps: [
              { reasoning: "The base area is $8^2 = 64$ cm$^2$.", working: "A = 64", marks: 1, markCode: "M" },
              { reasoning: "Apply the pyramid volume formula.", working: "V = \\frac{1}{3}(64)(9) = 192", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $192$ cm$^3$",
            commonErrors: ["Omitting the factor $\\frac{1}{3}$, giving $576$.", "Using $\\frac{1}{2}$ instead of $\\frac{1}{3}$."],
          },
        },
        {
          id: "aisl-u3-solids-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A rectangular box has dimensions $4$ cm by $5$ cm by $6$ cm. Find its volume, in cm$^3$.",
          response: { type: "numeric", parts: [{ label: "Volume (cm$^3$)", answer: 120, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V = lwh$" },
            ],
            steps: [
              { reasoning: "Multiply the three dimensions.", working: "V = 4 \\times 5 \\times 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$ cm$^3$",
            commonErrors: ["Adding the dimensions instead of multiplying.", "Multiplying only two dimensions."],
          },
        },
        {
          id: "aisl-u3-solids-q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 8,
          stem: "A cone has base radius $5$ cm and slant height $13$ cm.",
          parts: [
            { label: "a", prompt: "Find the vertical height of the cone.", marks: 2 },
            { label: "b", prompt: "Find the volume of the cone, in cm$^3$, to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the curved surface area of the cone, in cm$^2$, to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Find the total surface area of the cone, including the base, in cm$^2$, to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in a cone", statement: "$l^2 = r^2 + h^2$" },
              { kind: "formula", name: "Volume of a cone", statement: "$V = \\frac{1}{3}\\pi r^2 h$" },
              { kind: "formula", name: "Curved surface area of a cone", statement: "$A = \\pi r l$" },
            ],
            steps: [
              { part: "a", reasoning: "The radius, height and slant height form a right-angled triangle.", working: "h = \\sqrt{13^2 - 5^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "h = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the cone volume formula with $r = 5$, $h = 12$.", working: "V = \\frac{1}{3}\\pi(5)^2(12) = 100\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 3 significant figures.", working: "V = 314 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the curved surface area formula.", working: "A = \\pi(5)(13) = 65\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 3 significant figures.", working: "A = 204 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the area of the circular base.", working: "65\\pi + \\pi(5)^2 = 65\\pi + 25\\pi = 90\\pi", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate to 3 significant figures.", working: "A = 90\\pi = 283 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12$ cm. (b) $314$ cm$^3$. (c) $204$ cm$^2$. (d) $283$ cm$^2$.",
            commonErrors: ["Using the height $12$ instead of the slant height $13$ in the curved surface area.", "Using $2\\pi r l$ for the curved surface area."],
          },
        },
      ],
    },
    {
      id: "aisl-u3-3d-angles",
      title: "Angles between lines and planes",
      skill: "Find angles between lines and between a line and a plane in three-dimensional solids using right-angled triangles.",
      lesson: {
        sections: [
          {
            heading: "Angle between two lines",
            body: "Find the angle between two lines meeting at a point by building a triangle containing both lines and using trigonometry. If you know all three sides of the triangle, use the cosine rule $\\cos\\theta = \\frac{a^2 + b^2 - c^2}{2ab}$.",
          },
          {
            heading: "Angle between a line and a plane",
            body: "Drop a perpendicular from the top of the line to the plane. The angle between the line and the plane is the angle between the line and its shadow (projection) on the plane. In a right-angled triangle formed by the line, the perpendicular and the projection, $\\sin\\theta = \\frac{\\text{perpendicular height}}{\\text{line length}}$.",
          },
          {
            heading: "Method",
            body: "Sketch the solid. Identify the line and the plane, find the projection, label a right-angled triangle, compute the needed lengths with Pythagoras, then apply $\\sin$, $\\cos$ or $\\tan$. Give the angle to 3 significant figures in degrees.",
          },
        ],
        keyFormulas: [
          { name: "Cosine rule", statement: "$c^2 = a^2 + b^2 - 2ab\\cos C$" },
          { name: "Right-triangle trig", statement: "$\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}},\\; \\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}$" },
        ],
        workedExample: {
          problem: "A cuboid has base $8$ cm by $6$ cm and height $5$ cm. Find the angle the diagonal of the base makes with the line from a base corner to the opposite top corner.",
          solution: "The base diagonal is $\\sqrt{64+36} = 10$ and the vertical edge is $5$, so $\\tan\\theta = \\frac{5}{10}$, $\\theta = 26.6^\\circ$.",
        },
      },
      questions: [
        {
          id: "aisl-u3-3d-angles-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A cuboid has a rectangular base $ABCD$ with $AB = 8$ cm and $BC = 6$ cm. Find the length of the diagonal $AC$ of the base.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$ cm" },
              { id: "b", text: "$10$ cm" },
              { id: "c", text: "$7$ cm" },
              { id: "d", text: "$\\sqrt{28}$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$a^2 + b^2 = c^2$ in a right-angled triangle." },
            ],
            steps: [
              { reasoning: "Triangle $ABC$ is right-angled at $B$.", working: "AC^2 = 8^2 + 6^2 = 100", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "AC = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $10$ cm",
            commonErrors: ["Adding the sides: $14$.", "Subtracting the squares: $\\sqrt{28}$."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cuboid $ABCDEFGH$ has base $ABCD$ with $AB = 8$ cm, $BC = 6$ cm and vertical edge $AE = 5$ cm. The diagonal $AC$ of the base is $10$ cm. Find the angle between $AG$ and the base $ABCD$, where $G$ is vertically above $C$. Give your answer in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 26.6, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between a line and a plane", statement: "The angle between the line and its projection onto the plane. Here $AC$ is the projection of $AG$." },
            ],
            steps: [
              { reasoning: "Triangle $ACG$ is right-angled at $C$ with $CG = 5$ and $AC = 10$.", working: "\\tan\\theta = \\frac{CG}{AC} = \\frac{5}{10}", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse tangent.", working: "\\theta = \\tan^{-1}(0.5)", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "26.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$26.6^\\circ$",
            commonErrors: ["Using $AB$ instead of the diagonal $AC$ as the adjacent side.", "Using the sine ratio with the wrong sides."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A right pyramid has a square base of side $10$ cm and vertical height $12$ cm. Find the angle between a sloping edge of the pyramid and the base. Give your answer in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 59.5, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between a line and a plane", statement: "Use the right-angled triangle formed by the edge, the height and half the base diagonal." },
            ],
            steps: [
              { reasoning: "The base diagonal is $\\sqrt{10^2 + 10^2} = 14.142$.", working: "\\text{Diagonal} = 10\\sqrt{2}", marks: 1, markCode: "M" },
              { reasoning: "Half the diagonal is the projection of the sloping edge.", working: "\\frac{10\\sqrt{2}}{2} = 7.071", marks: 1, markCode: "A" },
              { reasoning: "Use the tangent ratio.", working: "\\tan\\theta = \\frac{12}{7.071}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\theta = 59.5^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$59.5^\\circ$",
            commonErrors: ["Using half the side $5$ rather than half the diagonal.", "Using the full diagonal."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A rectangular storage room $ABCDEFGH$ has a floor $ABCD$ with $AB = 12$ m and $BC = 9$ m, and height $AE = 5$ m, with $E, F, G, H$ vertically above $A, B, C, D$ respectively.",
          parts: [
            { label: "a", prompt: "Find the length of the floor diagonal $AC$.", marks: 2 },
            { label: "b", prompt: "Find the length of the space diagonal $AG$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the angle between $AG$ and the floor. Give your answer in degrees to 3 significant figures.", marks: 3 },
            { label: "d", prompt: "Find the angle $\\widehat{AGC}$ in triangle $ACG$. Give your answer in degrees to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$a^2 + b^2 = c^2$." },
              { kind: "principle", name: "Angle between a line and a plane", statement: "Use the line's projection on the plane." },
            ],
            steps: [
              { part: "a", reasoning: "Pythagoras in triangle $ABC$.", working: "AC = \\sqrt{12^2 + 9^2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "AC = 15 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pythagoras in triangle $ACG$, right-angled at $C$ with $CG = 5$.", working: "AG = \\sqrt{15^2 + 5^2} = \\sqrt{250}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "AG = 15.8 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The projection of $AG$ on the floor is $AC$.", working: "\\tan\\theta = \\frac{5}{15}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take the inverse tangent.", working: "\\theta = \\tan^{-1}\\left(\\frac{1}{3}\\right)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate.", working: "18.4^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The angle $\\widehat{AGC}$ is the angle at $G$ in the right-angled triangle $ACG$.", working: "\\tan\\widehat{AGC} = \\frac{AC}{CG} = \\frac{15}{5} = 3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Take the inverse tangent.", working: "\\widehat{AGC} = \\tan^{-1}(3)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate; it is the complement of the answer in (c).", working: "71.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $15$ m. (b) $15.8$ m. (c) $18.4^\\circ$. (d) $71.6^\\circ$.",
            commonErrors: ["Using $AB$ as the projection of $AG$.", "Mixing up which side is opposite in the tangent ratio."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A vertical pole of height $12$ m stands at one corner of a rectangular yard measuring $9$ m by $12$ m. A wire is fixed from the top of the pole to the opposite corner of the yard. Find the angle the wire makes with the ground, in degrees to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36.9^\\circ$" },
              { id: "b", text: "$38.7^\\circ$" },
              { id: "c", text: "$51.3^\\circ$" },
              { id: "d", text: "$53.1^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between a line and a plane", statement: "Use the projection of the line on the plane; here the projection is the base diagonal." },
            ],
            steps: [
              { reasoning: "The projection of the wire on the ground is the diagonal of the $9 \\times 12$ rectangle.", working: "\\sqrt{9^2 + 12^2} = 15 \\text{ m}", marks: 1, markCode: "M" },
              { reasoning: "Use the tangent ratio and evaluate.", working: "\\tan\\theta = \\frac{12}{15} \\Rightarrow \\theta = 38.7^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $38.7^\\circ$",
            commonErrors: ["Using $12$ as the adjacent side instead of the diagonal $15$.", "Giving the complement $51.3^\\circ$, the angle with the vertical."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A cube has side length $s$. The angle between a space diagonal of the cube and a face of the cube is approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60.0^\\circ$" },
              { id: "b", text: "$35.3^\\circ$" },
              { id: "c", text: "$54.7^\\circ$" },
              { id: "d", text: "$45.0^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Space diagonal of a cube", statement: "$d = s\\sqrt{3}$" },
              { kind: "principle", name: "Angle between a line and a plane", statement: "$\\sin\\theta = \\frac{\\text{perpendicular height}}{\\text{line length}}$" },
            ],
            steps: [
              { reasoning: "The space diagonal is $s\\sqrt{3}$ and its perpendicular height above the base is $s$.", working: "\\sin\\theta = \\frac{s}{s\\sqrt{3}} = \\frac{1}{\\sqrt{3}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\theta = 35.3^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $35.3^\\circ$",
            commonErrors: ["Giving $54.7^\\circ$, the angle between the diagonal and a vertical edge.", "Using the face diagonal $s\\sqrt{2}$ instead of $s\\sqrt{3}$."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cuboid has a rectangular base $5$ cm by $12$ cm and vertical height $8$ cm. Find the angle between the space diagonal and the base, in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 31.6, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$a^2 + b^2 = c^2$ in a right-angled triangle." },
              { kind: "principle", name: "Angle between a line and a plane", statement: "Use the line's projection on the plane." },
            ],
            steps: [
              { reasoning: "Find the base diagonal.", working: "\\sqrt{5^2 + 12^2} = 13 \\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "The projection of the space diagonal on the base is the base diagonal.", working: "\\tan\\theta = \\frac{8}{13}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\theta = 31.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$31.6^\\circ$",
            commonErrors: ["Using a side of the base instead of the diagonal.", "Using the space diagonal in place of the base diagonal."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cone has base radius $8$ cm and vertical height $6$ cm. Find the angle between the slant height and the base, in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 36.9, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between a line and a plane", statement: "The projection of the slant height on the base is the radius." },
            ],
            steps: [
              { reasoning: "The slant height projects onto the base as the radius $8$ cm, with perpendicular height $6$ cm.", working: "\\tan\\theta = \\frac{6}{8}", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse tangent.", working: "\\theta = \\tan^{-1}(0.75)", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "36.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36.9^\\circ$",
            commonErrors: ["Using the slant height $10$ cm instead of the radius as the projection.", "Finding the angle with the axis instead of the base."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A cuboid has a rectangular base $7$ cm by $24$ cm and height $12$ cm. Find the angle between the space diagonal and the diagonal of the base, in degrees to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25.6^\\circ$" },
              { id: "b", text: "$22.6^\\circ$" },
              { id: "c", text: "$64.4^\\circ$" },
              { id: "d", text: "$31.0^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between two lines", statement: "Build the right-angled triangle containing both lines and use trigonometry." },
            ],
            steps: [
              { reasoning: "The base diagonal is $\\sqrt{7^2 + 24^2} = 25$ and the height is $12$; the space diagonal projects onto the base diagonal.", working: "\\tan\\theta = \\frac{12}{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\theta = 25.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $25.6^\\circ$",
            commonErrors: ["Giving the complement $64.4^\\circ$, the angle with the vertical edge.", "Using the space diagonal $\\sqrt{769}$ as the adjacent side."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The angle between a line and a plane is defined as the angle between the line and",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the normal to the plane" },
              { id: "b", text: "its projection on the plane" },
              { id: "c", text: "the perpendicular from a point on the line to the plane" },
              { id: "d", text: "$90^\\circ$ minus the angle between the line and the normal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Angle between a line and a plane", statement: "The angle between the line and its orthogonal projection onto the plane." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\theta = \\angle(\\text{line}, \\text{projection})", marks: 1, markCode: "M" },
              { reasoning: "Select the matching option.", working: "\\text{Option (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** its projection on the plane",
            commonErrors: ["Confusing the angle with the plane for the angle with the normal, which are complementary."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A right pyramid has a square base of side $6$ cm and vertical height $9$ cm. Find the angle between a sloping edge of the pyramid and the base, in degrees to 3 significant figures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between a line and a plane", statement: "The projection of the sloping edge on the base is half the base diagonal." },
            ],
            steps: [
              { reasoning: "The base diagonal is $6\\sqrt{2}$, so half of it is the projection of the sloping edge.", working: "6\\sqrt{2} = 8.485,\\quad \\frac{8.485}{2} = 4.243 \\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Use the tangent ratio in the right-angled triangle formed by the height, the projection and the edge.", working: "\\tan\\theta = \\frac{9}{4.243}", marks: 1, markCode: "M" },
              { reasoning: "Take the inverse tangent.", working: "\\theta = \\tan^{-1}(2.121)", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "64.7^\\circ", marks: 1, markCode: "A" },
              { reasoning: "State the angle with units.", working: "\\theta = 64.7^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$64.7^\\circ$",
            commonErrors: ["Using half the side $3$ instead of half the diagonal.", "Using the full diagonal as the projection."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a cube, the angle between a face diagonal and an edge of that face is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$35.3^\\circ$" },
              { id: "b", text: "$30.0^\\circ$" },
              { id: "c", text: "$45.0^\\circ$" },
              { id: "d", text: "$54.7^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Face diagonal", statement: "A face diagonal has length $s\\sqrt{2}$ in a cube of side $s$." },
            ],
            steps: [
              { reasoning: "The face is a square, so the diagonal bisects the right angle.", working: "\\cos\\theta = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\theta = 45.0^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $45.0^\\circ$",
            commonErrors: ["Using the space diagonal $s\\sqrt{3}$, giving $35.3^\\circ$."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A right pyramid has a square base of side $10$ cm and vertical height $8$ cm. Find the angle between two adjacent sloping edges of the pyramid, in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 55.8, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cosine rule", statement: "$\\cos\\theta = \\frac{a^2 + b^2 - c^2}{2ab}$" },
            ],
            steps: [
              { reasoning: "Each sloping edge has projection equal to half the base diagonal $5\\sqrt{2}$ on the base.", working: "\\sqrt{(5\\sqrt{2})^2 + 8^2} = \\sqrt{114} = 10.7 \\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "The triangle formed by two adjacent sloping edges and a base side is isosceles with sides $\\sqrt{114}, \\sqrt{114}, 10$.", working: "\\cos\\theta = \\frac{114 + 114 - 100}{2 \\times 114}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the cosine.", working: "\\cos\\theta = 0.5614", marks: 1, markCode: "A" },
              { reasoning: "Take the inverse cosine.", working: "\\theta = \\cos^{-1}(0.5614)", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "55.8^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$55.8^\\circ$",
            commonErrors: ["Using the vertical height $8$ as the sloping edge length.", "Using the base side $10$ as a sloping edge."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A rectangular room $10$ m by $7$ m by $4$ m has a wire stretched from one bottom corner to the diagonally opposite top corner.",
          parts: [
            { label: "a", prompt: "Find the length of the wire, to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the angle the wire makes with the floor, in degrees to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "Find the angle the wire makes with the wall of size $10$ m by $4$ m, in degrees to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Space diagonal", statement: "$d = \\sqrt{l^2 + w^2 + h^2}$" },
              { kind: "principle", name: "Angle between a line and a plane", statement: "$\\sin\\theta = \\frac{\\text{perpendicular distance}}{\\text{line length}}$" },
            ],
            steps: [
              { part: "a", reasoning: "The wire is the space diagonal of the room.", working: "d = \\sqrt{10^2 + 7^2 + 4^2} = \\sqrt{165}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 significant figures.", working: "d = 12.8 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The perpendicular distance from the wire to the floor is the height $4$ m.", working: "\\sin\\theta = \\frac{4}{12.845}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take the inverse sine.", working: "\\theta = \\sin^{-1}(0.3114)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate to 3 significant figures.", working: "18.1^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The perpendicular distance from the wire to the $10 \\times 4$ wall is the width $7$ m.", working: "\\sin\\theta = \\frac{7}{12.845}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take the inverse sine.", working: "\\theta = \\sin^{-1}(0.5450)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate to 3 significant figures.", working: "33.0^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12.8$ m. (b) $18.1^\\circ$. (c) $33.0^\\circ$.",
            commonErrors: ["Using the tangent ratio with the projection instead of the sine ratio.", "Using $10$ m as the perpendicular distance to the wall."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A rod of length $13$ cm rests with one end on a horizontal plane. The other end is $5$ cm above the plane. The angle $\\theta$ the rod makes with the plane satisfies",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\cos\\theta = \\frac{5}{13}$" },
              { id: "b", text: "$\\sin\\theta = \\frac{5}{13}$" },
              { id: "c", text: "$\\tan\\theta = \\frac{5}{13}$" },
              { id: "d", text: "$\\sin\\theta = \\frac{12}{13}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle between a line and a plane", statement: "$\\sin\\theta = \\frac{\\text{perpendicular height}}{\\text{line length}}$" },
            ],
            steps: [
              { reasoning: "The perpendicular height $5$ is opposite the angle and the rod $13$ is the hypotenuse.", working: "\\sin\\theta = \\frac{5}{13}", marks: 1, markCode: "M" },
              { reasoning: "Select the matching option.", working: "\\theta = 22.6^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\sin\\theta = \\frac{5}{13}$",
            commonErrors: ["Using cosine, which would give the angle with the normal."],
          },
        },
        {
          id: "aisl-u3-3d-angles-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A cone has base radius $8$ cm and slant height $17$ cm. Find the angle between the slant height and the base, in degrees to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Angle ($^\\circ$)", answer: 61.9, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras in a cone", statement: "$l^2 = r^2 + h^2$" },
            ],
            steps: [
              { reasoning: "Find the vertical height from $l^2 = r^2 + h^2$.", working: "h = \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15 \\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "The slant height projects onto the base as the radius $8$ cm.", working: "\\tan\\theta = \\frac{15}{8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\theta = 61.9^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$61.9^\\circ$",
            commonErrors: ["Using the slant height $17$ as the perpendicular height.", "Finding the angle with the axis instead of the base."],
          },
        },
      ],
    },
  ],
};
