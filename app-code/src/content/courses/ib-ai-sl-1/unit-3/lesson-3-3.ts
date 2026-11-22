import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "aisl-u3-lesson-3-3",
  code: "3-3",
  title: "Circles and Voronoi Diagrams",
  goal: "I CAN find arc lengths, sector areas and perpendicular bisectors, and use Voronoi diagrams to solve nearest-site problems.",
  standards: ["SL 3.4", "SL 3.5", "SL 3.6"],
  vocabulary: [
    { term: "Arc length", definition: "The length of part of a circle's circumference: $l = \\dfrac{\\theta}{360}\\times 2\\pi r$." },
    { term: "Sector", definition: "The region bounded by two radii and an arc; its area is $\\dfrac{\\theta}{360}\\times \\pi r^2$." },
    { term: "Perpendicular bisector", definition: "The line through the midpoint of a segment at right angles to it; every point on it is equidistant from the two endpoints." },
    { term: "Voronoi diagram", definition: "A partition of the plane into cells, one per site, where each cell contains the points closer to its site than to any other." },
    { term: "Site", definition: "A given point (such as a school or fire station) that generates a cell of a Voronoi diagram." },
    { term: "Vertex (Voronoi)", definition: "A point where three or more edges meet; it is equidistant from the sites of the cells meeting there." },
  ],
  concepts: [
    {
      id: "aisl-u3-arcs-bisectors",
      title: "Arcs, sectors and perpendicular bisectors",
      skill: "Calculate arc length and sector area in degrees, and find the equation of a perpendicular bisector.",
      lesson: {
        sections: [
          {
            heading: "Arcs and sectors",
            body: "For a circle of radius $r$ and angle $\\theta$ at the centre (in degrees): arc length $l = \\frac{\\theta}{360}\\times 2\\pi r$ and sector area $A = \\frac{\\theta}{360}\\times \\pi r^2$. The perimeter of a sector is the arc length plus two radii. A segment is a sector minus a triangle, with triangle area $\\frac{1}{2}r^2\\sin\\theta$.",
          },
          {
            heading: "Midpoint and gradient",
            body: "The midpoint of $(x_1, y_1)$ and $(x_2, y_2)$ is $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$. The gradient of the segment is $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Perpendicular lines have gradients with product $-1$.",
          },
          {
            heading: "Equation of a perpendicular bisector",
            body: "Find the midpoint, find the gradient of the segment, take the negative reciprocal for the perpendicular gradient, then write $y - y_M = m_{\\perp}(x - x_M)$. Every point on this line is the same distance from both endpoints, which is the idea behind Voronoi diagrams.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$l = \\dfrac{\\theta}{360}\\times 2\\pi r$" },
          { name: "Sector area", statement: "$A = \\dfrac{\\theta}{360}\\times \\pi r^2$" },
          { name: "Perpendicular gradient", statement: "$m_1 m_2 = -1$" },
        ],
        workedExample: {
          problem: "Find the arc length of a sector with $r = 6$ cm and $\\theta = 60^\\circ$.",
          solution: "$l = \\frac{60}{360}\\times 2\\pi(6) = 2\\pi = 6.28$ cm.",
        },
      },
      questions: [
        {
          id: "aisl-u3-arcs-bisectors-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sector of a circle has radius $6$ cm and angle $60^\\circ$ at the centre. Find the arc length, to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$37.7$ cm" },
              { id: "b", text: "$3.14$ cm" },
              { id: "c", text: "$6.28$ cm" },
              { id: "d", text: "$18.8$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$l = \\frac{\\theta}{360}\\times 2\\pi r$" },
            ],
            steps: [
              { reasoning: "Substitute $\\theta = 60$, $r = 6$.", working: "l = \\frac{60}{360}\\times 2\\pi(6)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "l = 2\\pi = 6.28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $6.28$ cm",
            commonErrors: ["Using the area formula, giving $18.8$.", "Using $\\pi r$ instead of $2\\pi r$, giving $3.14$."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sector of a circle has radius $10$ cm and angle $72^\\circ$ at the centre. Find the area of the sector, in cm$^2$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Area (cm$^2$)", answer: 62.8, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$A = \\frac{\\theta}{360}\\times \\pi r^2$" },
            ],
            steps: [
              { reasoning: "Substitute into the sector area formula.", working: "A = \\frac{72}{360}\\times \\pi(10)^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify $\\frac{72}{360} = \\frac{1}{5}$.", working: "A = 20\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "62.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$62.8$ cm$^2$",
            commonErrors: ["Using the diameter as the radius.", "Using the arc length formula."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The points $A(1, 2)$ and $B(7, 10)$ are given. Find the equation of the perpendicular bisector of $AB$. Give your answer in the form $y = mx + c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "The line through the midpoint of $AB$ perpendicular to $AB$." },
              { kind: "property", name: "Perpendicular gradients", statement: "$m_1 m_2 = -1$." },
            ],
            steps: [
              { reasoning: "Find the midpoint of $AB$.", working: "M = \\left(\\frac{1+7}{2}, \\frac{2+10}{2}\\right) = (4, 6)", marks: 1, markCode: "M" },
              { reasoning: "Find the gradient of $AB$.", working: "m_{AB} = \\frac{10 - 2}{7 - 1} = \\frac{4}{3}", marks: 1, markCode: "A" },
              { reasoning: "The perpendicular gradient is the negative reciprocal.", working: "m_{\\perp} = -\\frac{3}{4}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $y - y_1 = m(x - x_1)$ and simplify.", working: "y - 6 = -\\frac{3}{4}(x - 4) \\Rightarrow y = -\\frac{3}{4}x + 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -\\frac{3}{4}x + 9$",
            commonErrors: ["Using the gradient of $AB$ instead of the negative reciprocal.", "Passing the line through $A$ instead of the midpoint."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A lawn sprinkler waters a sector of a circle with radius $8$ m and angle $120^\\circ$ at the centre $O$.",
          parts: [
            { label: "a", prompt: "Find the length of the curved edge (arc) of the watered region. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the area of the watered region. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the perimeter of the watered region. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "A straight path joins the two ends of the arc. Find the area of the region between the path and the arc (the segment). Give your answer to 3 significant figures.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$l = \\frac{\\theta}{360}\\times 2\\pi r$" },
              { kind: "formula", name: "Sector area", statement: "$A = \\frac{\\theta}{360}\\times \\pi r^2$" },
              { kind: "formula", name: "Triangle area", statement: "$A = \\frac{1}{2}r^2\\sin\\theta$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $\\theta = 120$, $r = 8$.", working: "l = \\frac{120}{360}\\times 2\\pi(8)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "l = \\frac{16\\pi}{3} = 16.8 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the sector area formula.", working: "A = \\frac{120}{360}\\times\\pi(8)^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "A = \\frac{64\\pi}{3} = 67.0 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Perimeter is the arc plus two radii.", working: "16.755 + 8 + 8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "32.8 \\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the area of the triangle formed by the two radii and the path.", working: "\\frac{1}{2}(8)^2\\sin 120^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "27.71 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The segment is the sector minus the triangle.", working: "67.02 - 27.71", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate to 3 significant figures.", working: "39.3 \\text{ m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $16.8$ m. (b) $67.0$ m$^2$. (c) $32.8$ m. (d) $39.3$ m$^2$.",
            commonErrors: ["Forgetting the two radii in the perimeter.", "Calculating the segment as the sector plus the triangle."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sector of a circle has radius $12$ cm and angle $90^\\circ$ at the centre. Find the area of the sector, in cm$^2$, to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$226$" },
              { id: "b", text: "$113$" },
              { id: "c", text: "$18.8$" },
              { id: "d", text: "$452$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$A = \\frac{\\theta}{360}\\times \\pi r^2$" },
            ],
            steps: [
              { reasoning: "Substitute $\\theta = 90$ and $r = 12$.", working: "A = \\frac{90}{360}\\times\\pi(12)^2 = 36\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "A = 113", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $113$ cm$^2$",
            commonErrors: ["Using the full circle area $\\pi r^2 = 452$.", "Using the arc length formula, giving $18.8$."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sector of a circle has radius $15$ cm and angle $48^\\circ$ at the centre. Find the length of its arc, in cm, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Arc length (cm)", answer: 12.6, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$l = \\frac{\\theta}{360}\\times 2\\pi r$" },
            ],
            steps: [
              { reasoning: "Substitute $\\theta = 48$ and $r = 15$.", working: "l = \\frac{48}{360}\\times 2\\pi(15)", marks: 1, markCode: "M" },
              { reasoning: "Simplify $\\frac{48}{360} = \\frac{2}{15}$.", working: "l = \\frac{2}{15} \\times 30\\pi = 4\\pi", marks: 1, markCode: "A" },
              { reasoning: "Evaluate to 3 significant figures.", working: "l = 12.6 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.6$ cm",
            commonErrors: ["Using the sector area formula instead of the arc length formula.", "Using $\\pi r$ instead of $2\\pi r$."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sector has radius $10$ cm and angle $60^\\circ$ at the centre. Find the length of the chord joining the two ends of the arc, in cm.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ cm" },
              { id: "b", text: "$10$ cm" },
              { id: "c", text: "$20$ cm" },
              { id: "d", text: "$17.3$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Chord length", statement: "$c = 2r\\sin\\frac{\\theta}{2}$" },
            ],
            steps: [
              { reasoning: "The chord is $2r\\sin\\frac{\\theta}{2}$ with $r = 10$ and $\\theta = 60^\\circ$.", working: "c = 2(10)\\sin 30^\\circ = 20 \\times 0.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "c = 10 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $10$ cm",
            commonErrors: ["Using the arc length $10.47$ or the diameter $20$.", "Using $\\sin 60^\\circ$ instead of $\\sin 30^\\circ$."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sector of a circle has radius $9$ m and angle $100^\\circ$ at the centre. Find the perimeter of the sector, in m, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Perimeter (m)", answer: 33.7, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$l = \\frac{\\theta}{360}\\times 2\\pi r$" },
            ],
            steps: [
              { reasoning: "Find the arc length.", working: "l = \\frac{100}{360}\\times 2\\pi(9) = 5\\pi = 15.708", marks: 1, markCode: "M" },
              { reasoning: "Add the two radii.", working: "15.708 + 9 + 9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "33.7 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$33.7$ m",
            commonErrors: ["Forgetting to add the two radii, giving $15.7$.", "Adding only one radius."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the equation of the perpendicular bisector of the segment joining $A(2, 4)$ and $B(6, 0)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = 2$" },
              { id: "b", text: "$y = -x + 6$" },
              { id: "c", text: "$y = x - 2$" },
              { id: "d", text: "$x = 4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Passes through the midpoint with gradient the negative reciprocal of the segment." },
            ],
            steps: [
              { reasoning: "Midpoint is $(4, 2)$ and $m_{AB} = \\frac{0-4}{6-2} = -1$, so the perpendicular gradient is $1$.", working: "y - 2 = 1(x - 4)", marks: 1, markCode: "M" },
              { reasoning: "Simplify to $y = mx + c$ form.", working: "y = x - 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $y = x - 2$",
            commonErrors: ["Writing $y = -x + 6$, which is the line through $A$ and $B$ itself.", "Using the midpoint as the gradient instead of a point."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A sector of a circle has radius $10$ cm and angle $90^\\circ$ at the centre. Find the area of the segment cut off by the chord, in cm$^2$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Segment area (cm$^2$)", answer: 28.5, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$A_{sector} = \\frac{\\theta}{360}\\times \\pi r^2$" },
              { kind: "formula", name: "Triangle area", statement: "$A = \\frac{1}{2}r^2\\sin\\theta$" },
            ],
            steps: [
              { reasoning: "Area of the sector.", working: "A_{sector} = \\frac{90}{360}\\times\\pi(10)^2 = 25\\pi = 78.54", marks: 1, markCode: "M" },
              { reasoning: "Area of the triangle formed by the two radii.", working: "A_{triangle} = \\frac{1}{2}(10)^2\\sin 90^\\circ = 50", marks: 1, markCode: "M" },
              { reasoning: "Subtract and round.", working: "78.54 - 50 = 28.5 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28.5$ cm$^2$",
            commonErrors: ["Adding the sector and triangle instead of subtracting.", "Using $\\sin 45^\\circ$ for the triangle area."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the equation of the perpendicular bisector of the segment joining $(1, 1)$ and $(1, 5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 1$" },
              { id: "b", text: "$y = 3$" },
              { id: "c", text: "$y = 1$" },
              { id: "d", text: "$x = 3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Passes through the midpoint perpendicular to the segment." },
            ],
            steps: [
              { reasoning: "The midpoint is $(1, 3)$ and the segment is vertical, so the bisector is horizontal.", working: "\\text{Midpoint} = (1, 3)", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $y = 3$",
            commonErrors: ["Writing $x = 1$, which is the line containing the segment itself."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The arc of a semicircle has radius $7$ cm. Find the length of the arc, in cm, to 3 significant figures.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$44.0$" },
              { id: "b", text: "$11.0$" },
              { id: "c", text: "$153.9$" },
              { id: "d", text: "$22.0$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$l = \\frac{\\theta}{360}\\times 2\\pi r$" },
            ],
            steps: [
              { reasoning: "A semicircle has $\\theta = 180^\\circ$, so the arc is half the circumference.", working: "l = \\frac{180}{360}\\times 2\\pi(7) = 7\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "l = 22.0 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $22.0$ cm",
            commonErrors: ["Using the full circumference $44.0$.", "Halving twice and getting $11.0$."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "A circular fountain has radius $5$ m. Two radii drawn from the centre enclose an angle of $150^\\circ$, forming a sectoral section of the fountain.",
          parts: [
            { label: "a", prompt: "Find the length of the curved edge of the section. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the area of the section. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the area of the rest of the circle. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "A straight path joins the two ends of the curved edge. Find the length of the path. Give your answer to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$l = \\frac{\\theta}{360}\\times 2\\pi r$" },
              { kind: "formula", name: "Sector area", statement: "$A = \\frac{\\theta}{360}\\times \\pi r^2$" },
              { kind: "formula", name: "Chord length", statement: "$c = 2r\\sin\\frac{\\theta}{2}$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $\\theta = 150$, $r = 5$ into the arc length formula.", working: "l = \\frac{150}{360}\\times 2\\pi(5) = \\frac{25\\pi}{6}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 significant figures.", working: "l = 13.1 \\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the sector area formula.", working: "A = \\frac{150}{360}\\times\\pi(5)^2 = \\frac{125\\pi}{12}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 3 significant figures.", working: "A = 32.7 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the area of the whole circle.", working: "\\pi(5)^2 = 25\\pi", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the sector area and evaluate.", working: "25\\pi - \\frac{125\\pi}{12} = \\frac{175\\pi}{12} = 45.8 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The chord is $2r\\sin\\frac{\\theta}{2}$.", working: "c = 2(5)\\sin 75^\\circ = 10\\sin 75^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate $\\sin 75^\\circ$.", working: "\\sin 75^\\circ = 0.9659", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the chord length.", working: "c = 9.66 \\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $13.1$ m. (b) $32.7$ m$^2$. (c) $45.8$ m$^2$. (d) $9.66$ m.",
            commonErrors: ["Forgetting that the chord uses half the central angle.", "Finding the segment area when the whole remaining circle is asked."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The perpendicular bisector of the segment joining $A(2, 1)$ and $B(8, 5)$ has gradient",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{3}$" },
              { id: "b", text: "$-\\frac{3}{2}$" },
              { id: "c", text: "$\\frac{3}{2}$" },
              { id: "d", text: "$-\\frac{2}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular gradients", statement: "$m_1 m_2 = -1$" },
            ],
            steps: [
              { reasoning: "Find the gradient of $AB$.", working: "m_{AB} = \\frac{5-1}{8-2} = \\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Take the negative reciprocal.", working: "m_{\\perp} = -\\frac{3}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $-\\frac{3}{2}$",
            commonErrors: ["Reciprocating without changing the sign, giving $\\frac{3}{2}$.", "Using the negative without reciprocating, giving $-\\frac{2}{3}$."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sector of a circle has radius $12$ cm and angle $60^\\circ$ at the centre.",
          parts: [
            { label: "a", prompt: "Find the area of the sector. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the area of the segment cut off by the chord. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "Sector area (cm$^2$)", answer: 75.4, tolerance: 0.05 },
              { label: "Segment area (cm$^2$)", answer: 13.0, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$A = \\frac{\\theta}{360}\\times \\pi r^2$" },
              { kind: "formula", name: "Triangle area", statement: "$A = \\frac{1}{2}r^2\\sin\\theta$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $\\theta = 60$, $r = 12$.", working: "A = \\frac{60}{360}\\times\\pi(12)^2 = 24\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "A = 75.4 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area of the triangle formed by the radii.", working: "\\frac{1}{2}(12)^2\\sin 60^\\circ = 72 \\times 0.8660 = 62.35", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract from the sector area.", working: "75.40 - 62.35 = 13.0 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $75.4$ cm$^2$. (b) $13.0$ cm$^2$.",
            commonErrors: ["Using $\\sin 30^\\circ$ instead of $\\sin 60^\\circ$ for the triangle.", "Adding instead of subtracting to find the segment."],
          },
        },
        {
          id: "aisl-u3-arcs-bisectors-q16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A sector has radius $18$ cm and angle $40^\\circ$ at the centre. Find the length of the chord joining the ends of the arc, in cm, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Chord (cm)", answer: 12.3, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Chord length", statement: "$c = 2r\\sin\\frac{\\theta}{2}$" },
            ],
            steps: [
              { reasoning: "Apply the chord formula with $r = 18$, $\\theta = 40^\\circ$.", working: "c = 2(18)\\sin 20^\\circ = 36 \\times 0.3420", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 significant figures.", working: "c = 12.3 \\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.3$ cm",
            commonErrors: ["Using $\\sin 40^\\circ$ instead of $\\sin 20^\\circ$.", "Finding the arc length instead of the chord."],
          },
        },
      ],
    },
    {
      id: "aisl-u3-voronoi",
      title: "Voronoi diagrams",
      skill: "Construct Voronoi edges and vertices from perpendicular bisectors, add a site, and find the largest empty circle.",
      lesson: {
        sections: [
          {
            heading: "Building a Voronoi diagram",
            body: "A Voronoi diagram divides the plane into cells so that every point in a cell is closer to that cell's site than to any other site. The boundary between two cells is part of the perpendicular bisector of the two sites. Where three edges meet is a vertex, equidistant from three sites.",
          },
          {
            heading: "Finding vertices",
            body: "To find a vertex, write the equations of two perpendicular bisectors (use the GDC to solve them simultaneously), then check it against a third. The distance from the vertex to any of its three sites is the radius of the circle through those sites.",
          },
          {
            heading: "Nearest site and largest empty circle",
            body: "To decide which site is nearest to a point, calculate distances to each site, or locate the point in the diagram. A new facility that must be as far as possible from all existing sites is placed at a Voronoi vertex, where the largest circle containing no site can be drawn. Adding a new site changes nearby edges because the new cell takes in the points closest to it.",
          },
        ],
        keyFormulas: [
          { name: "Distance between two points", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
          { name: "Edge between two sites", statement: "Part of the perpendicular bisector of the sites" },
        ],
        workedExample: {
          problem: "Sites are at $(1, 1)$ and $(5, 1)$. Find the equation of the Voronoi edge between them.",
          solution: "The sites have the same $y$-coordinate, so the bisector is vertical through the midpoint $(3, 1)$: $x = 3$.",
        },
      },
      questions: [
        {
          id: "aisl-u3-voronoi-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Two fire stations are at $(1, 1)$ and $(5, 1)$. Write down the equation of the line separating the points closer to one station from the points closer to the other.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$" },
              { id: "b", text: "$x = 1$" },
              { id: "c", text: "$y = 1$" },
              { id: "d", text: "$y = 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Points on it are equidistant from both sites." },
            ],
            steps: [
              { reasoning: "The sites lie on a horizontal line, so the bisector is vertical through the midpoint $(3, 1)$.", working: "x = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x = 3$",
            commonErrors: ["Giving the line through the sites, $y = 1$."],
          },
        },
        {
          id: "aisl-u3-voronoi-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Three schools are at $A(2, 2)$, $B(8, 2)$ and $C(5, 8)$. The Voronoi edge between $A$ and $C$ lies on the perpendicular bisector of $AC$. Find the $y$-intercept of this perpendicular bisector.",
          response: { type: "numeric", parts: [{ label: "$y$-intercept", answer: 6.75 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Passes through the midpoint with gradient the negative reciprocal." },
            ],
            steps: [
              { reasoning: "Midpoint of $AC$ and gradient of $AC$.", working: "M = (3.5, 5),\\quad m_{AC} = \\frac{8-2}{5-2} = 2", marks: 1, markCode: "M" },
              { reasoning: "The perpendicular gradient is $-\\frac{1}{2}$. Write the equation.", working: "y - 5 = -\\frac{1}{2}(x - 3.5)", marks: 1, markCode: "M" },
              { reasoning: "Set $x = 0$.", working: "y = 5 + 1.75 = 6.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.75$",
            commonErrors: ["Using the gradient $2$ instead of $-\\frac{1}{2}$.", "Using $A$ rather than the midpoint."],
          },
        },
        {
          id: "aisl-u3-voronoi-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Three schools are at $A(2, 2)$, $B(8, 2)$ and $C(5, 8)$. The Voronoi edges are the perpendicular bisectors $x = 5$ (between $A$ and $B$) and $y = -0.5x + 6.75$ (between $A$ and $C$). Find the $y$-coordinate of the Voronoi vertex, and the distance from the vertex to each school.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$-coordinate of the vertex", answer: 4.25 },
              { label: "Distance to each school", answer: 3.75 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Voronoi vertex", statement: "A vertex lies on all three bisectors and is equidistant from the three sites." },
              { kind: "formula", name: "Distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Substitute $x = 5$ into the second bisector.", working: "y = -0.5(5) + 6.75", marks: 1, markCode: "M" },
              { reasoning: "Evaluate; the vertex is $(5, 4.25)$.", working: "y = 4.25", marks: 1, markCode: "A" },
              { reasoning: "Find the distance from the vertex to $A(2,2)$.", working: "d = \\sqrt{(5-2)^2 + (4.25-2)^2} = \\sqrt{9 + 5.0625}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d = \\sqrt{14.0625} = 3.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 4.25$; distance $3.75$",
            commonErrors: ["Using the gradient $2$ in the bisector.", "Measuring the distance to the midpoint instead of the site."],
          },
        },
        {
          id: "aisl-u3-voronoi-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Three towns are at $A(2, 2)$, $B(8, 2)$ and $C(5, 8)$, with coordinates in km. A regional authority draws the Voronoi diagram for the towns to plan service areas.",
          parts: [
            { label: "a", prompt: "Write down the equation of the Voronoi edge between $A$ and $B$.", marks: 1 },
            { label: "b", prompt: "Find the equation of the perpendicular bisector of $AC$, in the form $y = mx + c$.", marks: 3 },
            { label: "c", prompt: "Hence find the coordinates of the Voronoi vertex.", marks: 2 },
            { label: "d", prompt: "A new facility must be placed as far as possible from all three towns. Find the radius of the largest empty circle centred at the vertex, and interpret this value.", marks: 2 },
            { label: "e", prompt: "A village is at $P(6, 3)$. Find, by calculating distances, which town is nearest to $P$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "The line of points equidistant from two sites." },
              { kind: "formula", name: "Distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "$A$ and $B$ share the $y$-coordinate $2$; the midpoint has $x = 5$.", working: "x = 5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Midpoint and gradient of $AC$.", working: "M = (3.5, 5),\\; m_{AC} = 2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perpendicular gradient.", working: "m_{\\perp} = -\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equation of the bisector.", working: "y = -0.5x + 6.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x = 5$ into the bisector of $AC$.", working: "y = -2.5 + 6.75", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the vertex.", working: "(5, 4.25)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The radius is the distance from the vertex to a town.", working: "\\sqrt{(5-2)^2 + (4.25-2)^2} = 3.75", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The facility at the vertex would be $3.75$ km from each of the three nearest towns, the greatest possible minimum distance.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Distances: $PA = \\sqrt{16 + 1} = 4.12$, $PB = \\sqrt{4 + 1} = 2.24$, $PC = \\sqrt{1 + 25} = 5.10$.", working: "PA = 4.12,\\; PB = 2.24,\\; PC = 5.10", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The smallest is $PB$.", working: "\\text{Nearest town is } B", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x = 5$. (b) $y = -0.5x + 6.75$. (c) $(5, 4.25)$. (d) $3.75$ km, the greatest distance from all towns. (e) Town $B$.",
            commonErrors: ["Using the wrong perpendicular gradient.", "Comparing squared distances to unsquared ones."],
          },
        },
        {
          id: "aisl-u3-voronoi-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Two sites are at $(1, 3)$ and $(7, 3)$. Write down the equation of the line separating the points closer to one site from the points closer to the other.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 4$" },
              { id: "b", text: "$y = 3$" },
              { id: "c", text: "$y = 4$" },
              { id: "d", text: "$x = 1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Points on it are equidistant from both sites." },
            ],
            steps: [
              { reasoning: "The midpoint of the sites is $(4, 3)$ and the segment joining them is horizontal, so the bisector is vertical.", working: "x = 4", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "x = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x = 4$",
            commonErrors: ["Giving $y = 3$, the line through the two sites."],
          },
        },
        {
          id: "aisl-u3-voronoi-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Sites $A(0, 0)$ and $B(6, 0)$ are given. A point $P(1, 5)$ is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "outside both cells" },
              { id: "b", text: "equidistant from $A$ and $B$" },
              { id: "c", text: "closer to $B$" },
              { id: "d", text: "closer to $A$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance between two points", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compare the distances $PA = \\sqrt{26} \\approx 5.10$ and $PB = \\sqrt{50} \\approx 7.07$.", working: "PA = 5.10,\\quad PB = 7.07", marks: 1, markCode: "M" },
              { reasoning: "The smaller distance is to $A$.", working: "PA < PB", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** closer to $A$",
            commonErrors: ["Comparing only the $x$-coordinates without computing distances."],
          },
        },
        {
          id: "aisl-u3-voronoi-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Two sites are at $(2, 1)$ and $(7, 5)$. Find the distance between them, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 6.40, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance between two points", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Find the coordinate differences.", working: "\\Delta x = 7 - 2 = 5,\\quad \\Delta y = 5 - 1 = 4", marks: 1, markCode: "M" },
              { reasoning: "Square and add.", working: "5^2 + 4^2 = 25 + 16 = 41", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "d = \\sqrt{41} = 6.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.40$",
            commonErrors: ["Adding the differences: $5 + 4 = 9$.", "Forgetting to take the square root."],
          },
        },
        {
          id: "aisl-u3-voronoi-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the $y$-intercept of the perpendicular bisector of the segment joining $(0, 0)$ and $(4, 6)$.",
          response: { type: "numeric", parts: [{ label: "$y$-intercept", answer: 4.33, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Passes through the midpoint with gradient the negative reciprocal." },
            ],
            steps: [
              { reasoning: "Midpoint is $(2, 3)$ and $m = \\frac{6}{4} = \\frac{3}{2}$, so the perpendicular gradient is $-\\frac{2}{3}$.", working: "m_{\\perp} = -\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "Write the equation of the bisector.", working: "y - 3 = -\\frac{2}{3}(x - 2) \\Rightarrow y = -\\frac{2}{3}x + \\frac{13}{3}", marks: 1, markCode: "M" },
              { reasoning: "Read off the $y$-intercept.", working: "\\frac{13}{3} = 4.33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.33$",
            commonErrors: ["Using the gradient $\\frac{3}{2}$ instead of $-\\frac{2}{3}$."],
          },
        },
        {
          id: "aisl-u3-voronoi-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which point is equidistant from the sites $(2, 0)$ and $(8, 0)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 5)$" },
              { id: "b", text: "$(4, 4)$" },
              { id: "c", text: "$(5, 3)$" },
              { id: "d", text: "$(8, 5)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Every point on the perpendicular bisector is equidistant from the two sites." },
            ],
            steps: [
              { reasoning: "The midpoint is $(5, 0)$ and the segment is horizontal, so the bisector is the vertical line $x = 5$.", working: "x = 5", marks: 1, markCode: "M" },
              { reasoning: "Select the point with $x = 5$.", working: "(5, 3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $(5, 3)$",
            commonErrors: ["Choosing the midpoint $(5, 0)$ is not offered; choosing a point on the segment itself."],
          },
        },
        {
          id: "aisl-u3-voronoi-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Three sites are at $A(0, 0)$, $B(6, 0)$ and $C(3, 4)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$-coordinate of the Voronoi vertex", answer: 0.875 },
              { label: "Distance from the vertex to each site", answer: 3.125 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Voronoi vertex", statement: "A vertex lies at the intersection of two perpendicular bisectors and is equidistant from the three sites." },
              { kind: "formula", name: "Distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "The edge between $A$ and $B$ is the perpendicular bisector $x = 3$.", working: "x = 3", marks: 1, markCode: "M" },
              { reasoning: "Midpoint of $BC$ is $(4.5, 2)$ with $m_{BC} = -\\frac{4}{3}$, so the perpendicular gradient is $\\frac{3}{4}$.", working: "m_{\\perp} = \\frac{3}{4}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 3$ into the bisector of $BC$.", working: "y = \\frac{3}{4}(3) - \\frac{11}{8} = 0.875", marks: 1, markCode: "A" },
              { reasoning: "Distance from the vertex $(3, 0.875)$ to $A(0,0)$.", working: "d = \\sqrt{3^2 + 0.875^2} = \\sqrt{9.7656} = 3.125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 0.875$; distance $3.125$",
            commonErrors: ["Using the gradient $-\\frac{4}{3}$ instead of the perpendicular $\\frac{3}{4}$.", "Finding the vertex of the wrong pair of edges."],
          },
        },
        {
          id: "aisl-u3-voronoi-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a Voronoi diagram, a vertex is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the midpoint of the segment joining two sites" },
              { id: "b", text: "equidistant from three or more sites" },
              { id: "c", text: "the point closest to exactly one site" },
              { id: "d", text: "any point on a Voronoi edge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Voronoi vertex", statement: "A point where three or more edges meet, equidistant from the sites of the cells meeting there." },
            ],
            steps: [
              { reasoning: "Recall the definition of a Voronoi vertex.", working: "\\text{equidistant from } \\geq 3 \\text{ sites}", marks: 1, markCode: "M" },
              { reasoning: "Select the matching option.", working: "\\text{Option (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** equidistant from three or more sites",
            commonErrors: ["Confusing a vertex with a point on an edge, which is equidistant from only two sites."],
          },
        },
        {
          id: "aisl-u3-voronoi-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 11,
          stem: "Three towns are at $A(0, 0)$, $B(8, 0)$ and $C(4, 6)$, with coordinates in km. A council draws the Voronoi diagram for the towns.",
          parts: [
            { label: "a", prompt: "Write down the equation of the Voronoi edge between $A$ and $B$.", marks: 1 },
            { label: "b", prompt: "Find the equation of the perpendicular bisector of $BC$, in the form $y = mx + c$.", marks: 3 },
            { label: "c", prompt: "Hence find the coordinates of the Voronoi vertex and the radius of the largest empty circle centred there.", marks: 3 },
            { label: "d", prompt: "A new fire station is to be placed at the vertex. State what the radius found in (c) represents for this station.", marks: 2 },
            { label: "e", prompt: "A village is at $P(9, 3)$. Find, by calculating distances, which town is nearest to $P$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "The line of points equidistant from two sites." },
              { kind: "formula", name: "Distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "$A$ and $B$ have the same $y$-coordinate; the midpoint is $(4, 0)$.", working: "x = 4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Midpoint of $BC$ and gradient of $BC$.", working: "M = (6, 3),\\quad m_{BC} = \\frac{6 - 0}{4 - 8} = -\\frac{3}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The perpendicular gradient is $\\frac{2}{3}$; write the equation.", working: "y - 3 = \\frac{2}{3}(x - 6)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify to $y = mx + c$.", working: "y = \\frac{2}{3}x - 1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x = 4$ into the bisector of $BC$.", working: "y = \\frac{8}{3} - 1 = \\frac{5}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the vertex.", working: "(4, \\frac{5}{3}) \\approx (4, 1.67) \\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Radius is the distance from the vertex to a site.", working: "d = \\sqrt{4^2 + \\left(\\frac{5}{3}\\right)^2} = \\frac{13}{3} = 4.33 \\text{ km}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The circle of radius $4.33$ km centred at the vertex contains no site; it is the largest empty circle.", working: "\\text{radius} = 4.33 \\text{ km}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The station at the vertex would be at least $4.33$ km from every town, the greatest possible minimum distance.", working: "\\text{maximum possible minimum distance}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Distances: $PA = \\sqrt{90} \\approx 9.49$, $PB = \\sqrt{10} \\approx 3.16$, $PC = \\sqrt{34} \\approx 5.83$.", working: "PA = 9.49,\\; PB = 3.16,\\; PC = 5.83", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The smallest distance is to $B$.", working: "\\text{Nearest town is } B", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x = 4$. (b) $y = \\frac{2}{3}x - 1$. (c) $(4, 1.67)$ km, radius $4.33$ km. (d) The greatest distance from all towns. (e) Town $B$.",
            commonErrors: ["Using the gradient $-\\frac{3}{2}$ instead of $\\frac{2}{3}$.", "Measuring distance to the midpoint rather than the site."],
          },
        },
        {
          id: "aisl-u3-voronoi-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Sites $A(0, 0)$ and $B(10, 0)$ are given, and a point $P(9, 1)$. Find the distance from $P$ to the nearest site, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 1.41, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance between two points", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute both distances: $PA = \\sqrt{82} \\approx 9.06$ and $PB = \\sqrt{2}$.", working: "PA = 9.06,\\quad PB = 1.414", marks: 1, markCode: "M" },
              { reasoning: "The nearest site is $B$; state the distance.", working: "d = 1.41", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.41$",
            commonErrors: ["Comparing squared distances incorrectly or giving the distance to $A$."],
          },
        },
        {
          id: "aisl-u3-voronoi-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(-2, 0)$ and $(2, 4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = -x + 2$" },
              { id: "b", text: "$y = -x$" },
              { id: "c", text: "$x = 0$" },
              { id: "d", text: "$y = x + 2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Passes through the midpoint with gradient the negative reciprocal." },
            ],
            steps: [
              { reasoning: "Midpoint is $(0, 2)$ and $m_{AB} = \\frac{4}{4} = 1$, so the perpendicular gradient is $-1$.", working: "y - 2 = -1(x - 0)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "y = -x + 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y = -x + 2$",
            commonErrors: ["Using gradient $1$ instead of $-1$.", "Passing through $(2, 4)$ instead of the midpoint."],
          },
        },
        {
          id: "aisl-u3-voronoi-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the perpendicular distance from the origin to the perpendicular bisector of the segment joining $(1, 1)$ and $(5, 3)$, to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 3.58, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "Passes through the midpoint with gradient the negative reciprocal." },
              { kind: "formula", name: "Distance from a point to a line", statement: "$d = \\frac{|ax + by + c|}{\\sqrt{a^2 + b^2}}$" },
            ],
            steps: [
              { reasoning: "Midpoint is $(3, 2)$ and $m_{AB} = \\frac{2}{4} = \\frac{1}{2}$, so the perpendicular gradient is $-2$.", working: "m_{\\perp} = -2", marks: 1, markCode: "M" },
              { reasoning: "Equation of the bisector: $y - 2 = -2(x - 3)$, i.e. $2x + y - 8 = 0$.", working: "2x + y - 8 = 0", marks: 1, markCode: "M" },
              { reasoning: "Distance from $(0, 0)$.", working: "d = \\frac{8}{\\sqrt{5}} = 3.58", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.58$",
            commonErrors: ["Using the gradient $\\frac{1}{2}$ instead of $-2$.", "Using the midpoint as the distance rather than the origin."],
          },
        },
        {
          id: "aisl-u3-voronoi-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 12,
          stem: "Three sites are at $A(1, 1)$, $B(7, 1)$ and $C(4, 7)$, with coordinates in km. A new depot $D(10, 4)$ is proposed.",
          parts: [
            { label: "a", prompt: "Write down the equation of the Voronoi edge between $A$ and $B$.", marks: 1 },
            { label: "b", prompt: "Find the equation of the perpendicular bisector of $AC$, in the form $y = mx + c$.", marks: 3 },
            { label: "c", prompt: "Hence find the coordinates of the Voronoi vertex and the radius of the largest empty circle centred there.", marks: 3 },
            { label: "d", prompt: "Find the equation of the perpendicular bisector of $BD$, in the form $y = mx + c$.", marks: 3 },
            { label: "e", prompt: "A village is at $P(9, 3)$. Find, by calculating distances, which site is nearest to $P$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perpendicular bisector", statement: "The line of points equidistant from two sites." },
              { kind: "formula", name: "Distance", statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "$A$ and $B$ share $y = 1$; the midpoint is $(4, 1)$.", working: "x = 4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Midpoint of $AC$ and gradient of $AC$.", working: "M = (2.5, 4),\\quad m_{AC} = \\frac{7 - 1}{4 - 1} = 2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perpendicular gradient is $-\\frac{1}{2}$; write the equation.", working: "y - 4 = -\\frac{1}{2}(x - 2.5)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify to $y = mx + c$.", working: "y = -0.5x + 5.25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x = 4$ into the bisector of $AC$.", working: "y = -2 + 5.25 = 3.25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the vertex.", working: "(4, 3.25) \\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Radius is the distance from the vertex to a site.", working: "d = \\sqrt{(4-1)^2 + (3.25-1)^2} = \\sqrt{14.0625} = 3.75 \\text{ km}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Midpoint of $BD$ and gradient of $BD$.", working: "M = (8.5, 2.5),\\quad m_{BD} = \\frac{4 - 1}{10 - 7} = 1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Perpendicular gradient is $-1$; write the equation.", working: "y - 2.5 = -1(x - 8.5)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify to $y = mx + c$.", working: "y = -x + 11", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Distances: $PA = \\sqrt{68} \\approx 8.25$, $PB = \\sqrt{8} \\approx 2.83$, $PC = \\sqrt{41} \\approx 6.40$, $PD = \\sqrt{2} \\approx 1.41$.", working: "PA = 8.25,\\; PB = 2.83,\\; PC = 6.40,\\; PD = 1.41", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The smallest distance is to $D$.", working: "\\text{Nearest site is } D", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x = 4$. (b) $y = -0.5x + 5.25$. (c) $(4, 3.25)$ km, radius $3.75$ km. (d) $y = -x + 11$. (e) Site $D$.",
            commonErrors: ["Using the gradient $2$ instead of $-\\frac{1}{2}$.", "Forgetting that the new site $D$ also generates an edge."],
          },
        },
      ],
    },
  ],
};
