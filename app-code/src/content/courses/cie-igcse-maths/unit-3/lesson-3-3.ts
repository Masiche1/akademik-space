import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ciem-u3-lesson-3-3",
  code: "3-3",
  title: "Coordinate Problem Solving",
  goal: "I CAN use the distance formula, find areas of triangles from coordinates, and solve multi-step problems involving lines and shapes on the coordinate plane.",
  standards: ["0580 3.1", "0580 3.2", "0580 3.3"],
  vocabulary: [
    { term: "Distance formula", definition: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, derived from Pythagoras." },
    { term: "Area of a triangle from coordinates", definition: "Half the magnitude of the determinant: $\\frac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$." },
    { term: "Isosceles triangle", definition: "A triangle with two equal sides; found by checking which pair of vertices are equidistant from the third." },
    { term: "Locus", definition: "The set of all points satisfying a given condition, e.g. all points equidistant from two fixed points." },
    { term: "Vertex", definition: "A corner point of a polygon, given by coordinates." },
  ],
  concepts: [
    {
      id: "ciem-u3-distance-area",
      title: "Distance and area from coordinates",
      skill: "Calculate distances between points and areas of triangles using coordinates.",
      lesson: {
        sections: [
          {
            heading: "Distance between two points",
            body: "The distance formula $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ is Pythagoras applied to the horizontal and vertical differences. For $(1,2)$ and $(4,6)$: $d=\\sqrt{3^2+4^2}=5$.",
          },
          {
            heading: "Area of a triangle",
            body: "For vertices $(x_1,y_1)$, $(x_2,y_2)$, $(x_3,y_3)$:\n\n$$\\text{Area}=\\frac12\\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\right|$$\n\nThe absolute value ensures a positive area regardless of vertex order. Alternatively, enclose the triangle in a rectangle and subtract the surrounding right-angled triangles — useful as a check.",
          },
          {
            heading: "Recognising shapes",
            body: "Equal distances reveal isosceles or equilateral triangles; equal gradients reveal parallel sides; perpendicular gradients reveal right angles. Combining distance and gradient checks identifies the shape before computing anything.",
          },
        ],
        keyFormulas: [
          { name: "Distance", statement: "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
          { name: "Triangle area", statement: "$\\frac12\\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\right|$" },
        ],
        workedExample: {
          problem: "Find the area of the triangle with vertices $A(1,1)$, $B(4,1)$, $C(4,5)$.",
          solution: "This is a right-angled triangle with base $AB=3$ and height $=4$, so area $=\\frac12\\times3\\times4=6$. Check with the formula: $\\frac12|1(1-5)+4(5-1)+4(1-1)|=\\frac12|-4+16+0|=6$ ✓",
        },
      },
      questions: [
        {
          id: "ciem-u3-distance-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the distance between the points $(1,2)$ and $(4,6)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$\\sqrt{7}$" },
              { id: "d", text: "$25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Apply the formula: differences 3 and 4.", working: "d=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Adding differences to get 7."],
          },
        },
        {
          id: "ciem-u3-distance-area-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of the triangle with vertices $(0,0)$, $(6,0)$ and $(0,4)$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 12, unit: "square units" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Right-angled triangle area", statement: "Area $=\\frac12\\times\\text{base}\\times\\text{height}$; the legs lie on the axes." },
            ],
            steps: [
              { reasoning: "The triangle is right-angled with base 6 and height 4.", working: "A=\\frac12\\times6\\times4", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ square units",
            commonErrors: ["Forgetting the factor $\\frac12$."],
          },
        },
        {
          id: "ciem-u3-distance-area-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the area of the triangle with vertices $A(2,1)$, $B(6,1)$ and $C(4,5)$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 8, unit: "square units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area from coordinates", statement: "$\\frac12\\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\right|$" },
            ],
            steps: [
              { reasoning: "Apply the coordinate area formula.", working: "\\frac12|2(1-5)+6(5-1)+4(1-1)|", marks: 1, markCode: "M" },
              { reasoning: "Evaluate inside the modulus.", working: "\\frac12|-8+24+0|=\\frac12(16)", marks: 1, markCode: "M" },
              { reasoning: "State the area.", working: "=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ square units",
            commonErrors: ["Dropping the absolute value and getting a negative area.", "Using only two vertices."],
          },
        },
        {
          id: "ciem-u3-distance-area-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The points $A(1,2)$, $B(5,2)$, $C(5,6)$ and $D(1,6)$ are the vertices of a quadrilateral.",
          parts: [
            { label: "a", prompt: "Show that $ABCD$ is a rectangle.", marks: 3 },
            { label: "b", prompt: "Find the area of $ABCD$.", marks: 2 },
            { label: "c", prompt: "Find the length of the diagonal $AC$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Rectangle criteria", statement: "Opposite sides equal and parallel; adjacent sides perpendicular." },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "Check gradients of adjacent sides: $AB$ horizontal ($m=0$), $BC$ vertical (undefined) — so they are perpendicular.", working: "m_{AB}=0,\\ m_{BC}\\text{ undefined}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute all four side lengths: horizontal/vertical sides are differences of coordinates.", working: "AB=CD=4,\\ BC=DA=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All sides equal with perpendicular adjacent sides — a square, which is a rectangle.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Area = length $\\times$ width.", working: "A=4\\times4=16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area.", working: "16\\text{ square units}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the distance formula to $A(1,2)$ and $C(5,6)$.", working: "AC=\\sqrt{(5-1)^2+(6-2)^2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the differences.", working: "=\\sqrt{16+16}=\\sqrt{32}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify if desired.", working: "=4\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the length.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown — all sides 4 with right angles (a square) (b) $16$ (c) $\\sqrt{32}=4\\sqrt{2}$",
            commonErrors: ["In (a) only checking one pair of opposite sides.", "In (c) using $A$ to $D$ instead of $A$ to $C$."],
            examinerNote: "The quadrilateral is actually a square; 'rectangle' is acceptable since a square is a rectangle.",
          },
        },
      ],
    },
    {
      id: "ciem-u3-lines-shapes",
      title: "Lines and shapes on the coordinate plane",
      skill: "Solve problems involving equations of parallel lines, isosceles triangles and loci.",
      lesson: {
        sections: [
          {
            heading: "Parallel lines through a point",
            body: "To find the equation of a line parallel to a given line through a point: keep the same gradient, then use point-gradient form with the given point. For a line parallel to $y=2x+1$ through $(3,4)$: $y-4=2(x-3)$, so $y=2x-2$.",
          },
          {
            heading: "Isosceles and equilateral triangles",
            body: "Check pairwise distances: if two sides from a vertex are equal, the triangle is isosceles. For $A(0,0)$, $B(4,0)$, $C(2,3)$: $AB=4$, $AC=BC=\\sqrt{4+9}=\\sqrt{13}$ — isosceles with apex $C$.",
          },
          {
            heading: "Loci",
            body: "A locus is the set of points satisfying a condition. 'Equidistant from $A$ and $B$' is the perpendicular bisector of $AB$. 'Fixed distance $r$ from $O$' is a circle. Combining conditions (e.g. equidistant and on a line) gives specific points — solve the two equations simultaneously.",
          },
        ],
        keyFormulas: [
          { name: "Parallel through a point", statement: "Same gradient; substitute the point into $y-y_1=m(x-x_1)$." },
          { name: "Perpendicular bisector locus", statement: "Points equidistant from $A$ and $B$ lie on the perpendicular bisector of $AB$." },
        ],
        workedExample: {
          problem: "Find the equation of the line parallel to $y=2x+1$ that passes through $(3,4)$.",
          solution: "Parallel lines share gradient $m=2$. Point-gradient: $y-4=2(x-3)$, so $y=2x-2$.",
        },
      },
      questions: [
        {
          id: "ciem-u3-lines-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of a line parallel to $y=2x+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$-2$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "$-\\frac{1}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel gradients", statement: "Parallel lines have equal gradients." },
            ],
            steps: [
              { reasoning: "Read the gradient from $y=mx+c$.", working: "m=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Using the negative reciprocal (that's for perpendicular)."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the equation of the line parallel to $y=2x+1$ that passes through $(3,4)$. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel gradients", statement: "Same gradient $m=2$." },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Use point-gradient form with the given point.", working: "y-4=2(x-3)", marks: 1, markCode: "M" },
              { reasoning: "Expand to $y=mx+c$.", working: "y=2x-6+4=2x-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x-2$",
            commonErrors: ["Changing the gradient instead of the intercept."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The points $A(0,0)$, $B(4,0)$ and $C(2,3)$ form a triangle. Show that it is isosceles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isosceles triangle", statement: "A triangle with at least two equal sides." },
            ],
            steps: [
              { reasoning: "Compute the three side lengths.", working: "AB=4,\\ AC=BC=\\sqrt{2^2+3^2}=\\sqrt{13}", marks: 1, markCode: "M" },
              { reasoning: "Identify the equal pair.", working: "AC=BC", marks: 1, markCode: "M" },
              { reasoning: "Conclude the triangle is isosceles with apex $C$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isosceles — $AC=BC=\\sqrt{13}$",
            commonErrors: ["Only computing one side length."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The points $A(1,1)$ and $B(5,3)$ are fixed.",
          parts: [
            { label: "a", prompt: "Find the coordinates of the midpoint of $AB$.", marks: 2 },
            { label: "b", prompt: "Find the equation of the perpendicular bisector of $AB$ in the form $y=mx+c$.", marks: 4 },
            { label: "c", prompt: "The point $P$ is equidistant from $A$ and $B$ and lies on the line $y=0$. Find the coordinates of $P$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x", answer: 3 },
              { label: "(a) y", answer: 2 },
              { label: "(c) x", answer: 4 },
              { label: "(c) y", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "law", name: "Perpendicular bisector locus", statement: "Points equidistant from $A$ and $B$ lie on the perpendicular bisector." },
            ],
            steps: [
              { part: "a", reasoning: "Average the coordinates.", working: "M=\\left(\\frac{1+5}{2},\\frac{1+3}{2}\\right)=(3,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the midpoint.", working: "(3,2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient of $AB$.", working: "m_{AB}=\\frac{3-1}{5-1}=\\frac12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perpendicular gradient.", working: "m_{\\perp}=-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Point-gradient form through $(3,2)$.", working: "y-2=-2(x-3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand to $y=mx+c$.", working: "y=-2x+8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equidistant from $A$ and $B$ means $P$ lies on the perpendicular bisector $y=-2x+8$.", working: "y=-2x+8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Also $P$ lies on $y=0$; substitute.", working: "0=-2x+8\\Rightarrow x=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the point.", working: "P=(4,0)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(3,2)$ (b) $y=-2x+8$ (c) $P=(4,0)$",
            commonErrors: ["In (c) solving $y=0$ in the wrong equation or forgetting $P$ must satisfy both conditions."],
            examinerNote: "Part (c) requires using the perpendicular bisector from (b) together with y=0.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u3-problem-solving-notes",
      title: "Coordinate problem solving — revision notes",
      summary: "Distance formula, triangle areas from coordinates, parallel lines through points, isosceles triangles and loci.",
      sections: [
        {
          heading: "Distance and area",
          body: "Distance: $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ — Pythagoras on coordinate differences.\n\nTriangle area: $\\frac12\\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\right|$. The modulus keeps it positive.\n\n**Worked example.** $A(2,1)$, $B(6,1)$, $C(4,5)$: $\\frac12|2(1-5)+6(5-1)+4(1-1)|=\\frac12|-8+24|=8$.",
        },
        {
          heading: "Recognising shapes",
          body: "Equal side lengths → isosceles/equilateral. Equal gradients → parallel sides. Perpendicular gradients → right angles. Always compute distances/gradients before claiming a shape.",
        },
        {
          heading: "Parallel lines through a point",
          body: "Keep the gradient; substitute the point into $y-y_1=m(x-x_1)$.\n\n**Worked example.** Parallel to $y=2x+1$ through $(3,4)$: $y-4=2(x-3) \\Rightarrow y=2x-2$.",
        },
        {
          heading: "Loci",
          body: "'Equidistant from $A$ and $B$' → perpendicular bisector of $AB$. 'Distance $r$ from $O$' → circle. Two conditions together → solve simultaneously.\n\n**Worked example.** $P$ equidistant from $A(1,1)$, $B(5,3)$ and on $y=0$: bisector is $y=-2x+8$; with $y=0$, $x=4$, so $P=(4,0)$.",
        },
        {
          heading: "Exam technique",
          body: "- 'Show that' a shape has a property: compute the relevant distances/gradients explicitly.\n- For area, the coordinate formula is reliable; the enclosing-rectangle method is a good check.\n- Locus problems: identify which two equations define the point, then solve them together.",
        },
      ],
    },
  ],
};
