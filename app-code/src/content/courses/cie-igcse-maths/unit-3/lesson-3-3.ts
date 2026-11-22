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
              { id: "c", text: "$25$" },
              { id: "d", text: "$\\sqrt{7}$" },
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
        {
          id: "ciem-u3-distance-area-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the distance between the points $(0,0)$ and $(5,12)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "$\\sqrt{119}$" },
              { id: "c", text: "17" },
              { id: "d", text: "13" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$.", working: "d=13", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $13$",
            commonErrors: ["Computing $5^2+12^2=17^2$ confusion — check $\\sqrt{169}=13$."],
          },
        },
        {
          id: "ciem-u3-distance-area-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the area of the triangle with vertices $(0,0)$, $(4,0)$ and $(0,3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "12" },
              { id: "c", text: "6" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Base $=4$ along the $x$-axis, height $=3$; $A=\\frac{1}{2}\\times4\\times3=6$.", working: "A=6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $6$ square units",
            commonErrors: ["Forgetting the $\\frac{1}{2}$ factor to get 12."],
          },
        },
        {
          id: "ciem-u3-distance-area-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find the area of the triangle with vertices $(1,1)$, $(4,1)$ and $(2,5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24" },
              { id: "b", text: "12" },
              { id: "c", text: "6" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$ with $b$ horizontal and $h$ the vertical height." },
            ],
            steps: [
              { reasoning: "Base from $(1,1)$ to $(4,1)$ has length 3; height $=5-1=4$; $A=\\frac{1}{2}\\times3\\times4=6$.", working: "A=6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $6$ square units",
            commonErrors: ["Using height 5 instead of the difference $5-1=4$."],
          },
        },
        {
          id: "ciem-u3-distance-area-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between the points $(2,1)$ and $(6,4)$. Enter the distance.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the squared differences: $4^2+3^2$.", working: "\\sqrt{16+9}=\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Writing $\\sqrt{4+3}=\\sqrt{7}$."],
          },
        },
        {
          id: "ciem-u3-distance-area-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The rectangle $ABCD$ has vertices $A(2,1)$, $B(6,1)$, $C(6,4)$ and $D(2,4)$. Find its area. Enter the area in square units.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 12, unit: "square units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangle area", statement: "$A=\\text{length}\\times\\text{width}$" },
            ],
            steps: [
              { reasoning: "Length $=6-2=4$, width $=4-1=3$.", working: "4\\times3", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "A=12", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "12\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ square units",
            commonErrors: ["Using coordinates directly: $6\\times4=24$ without subtracting."],
          },
        },
        {
          id: "ciem-u3-distance-area-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the area of the triangle with vertices $(0,0)$, $(8,0)$ and $(3,4)$. Enter the area in square units.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 16, unit: "square units" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$; the base need not start at the origin." },
            ],
            steps: [
              { reasoning: "Base $AB$ on the $x$-axis has length 8; the height is the $y$-coordinate of $C$.", working: "b=8,\\ h=4", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "A=\\frac{1}{2}\\times8\\times4=16", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "16\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$ square units",
            commonErrors: ["Multiplying by the $x$-coordinate of $C$ instead of using the perpendicular height."],
          },
        },
        {
          id: "ciem-u3-distance-area-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The rectangle $ABCD$ has vertices $A(1,1)$, $B(7,1)$, $C(7,5)$ and $D(1,5)$.",
          parts: [
            { label: "a", prompt: "Find the perimeter of $ABCD$.", marks: 2 },
            { label: "b", prompt: "Find the area of $ABCD$.", marks: 2 },
            { label: "c", prompt: "Find the length of the diagonal $AC$.", marks: 2 },
            { label: "d", prompt: "Find the area of triangle $ABC$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) perimeter", answer: 20 },
              { label: "(b) area", answer: 24, unit: "square units" },
              { label: "(c) diagonal", answer: 7.21, tolerance: 0.01 },
              { label: "(d) area", answer: 12, unit: "square units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangle dimensions", statement: "Sides are coordinate differences: length $7-1=6$, width $5-1=4$." },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "Sides are 6 and 4; perimeter $=2(6+4)$.", working: "P=20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the perimeter.", working: "P=20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area $=6\\times4$.", working: "A=24\\text{ square units}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area.", working: "A=24", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the distance formula to $A$ and $C$.", working: "AC=\\sqrt{6^2+4^2}=\\sqrt{52}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 2 d.p.", working: "AC\\approx7.21", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Triangle $ABC$ is half the rectangle.", working: "A=\\frac{1}{2}\\times24", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Alternatively $\\frac{1}{2}\\times AB \\times$ height $=\\frac{1}{2}\\times6\\times4$.", working: "=12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the area.", working: "12\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ (b) $24$ sq units (c) $7.21$ (d) $12$ sq units",
            commonErrors: ["In (c) computing $6+4=10$ for the diagonal.", "In (d) forgetting the $\\frac{1}{2}$."],
          },
        },
        {
          id: "ciem-u3-distance-area-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would find the area of a triangle when you are given the coordinates of its three vertices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$; coordinates give base and perpendicular height." },
            ],
            steps: [
              { reasoning: "Choose a side as the base — ideally one parallel to a coordinate axis.", marks: 1, markCode: "M" },
              { reasoning: "Base length is a coordinate difference; the height is the perpendicular distance from the third vertex.", marks: 1, markCode: "M" },
              { reasoning: "Apply $A=\\frac{1}{2}bh$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Take a base from the coordinates, find the perpendicular height, then use $A=\\frac{1}{2}bh$.",
            commonErrors: ["Using a slanted side's length with a non-perpendicular 'height'."],
          },
        },
        {
          id: "ciem-u3-distance-area-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the area of the quadrilateral with vertices $(0,0)$, $(4,0)$, $(5,3)$ and $(1,3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trapezium area", statement: "$A=\\frac{1}{2}(a+b)h$ for parallel sides $a$, $b$ and height $h$." },
            ],
            steps: [
              { reasoning: "The top and bottom sides are parallel: lengths $4$ and $4$, separated by height $3$.", working: "a=4,\\ b=4,\\ h=3", marks: 1, markCode: "M" },
              { reasoning: "Recognise the shape as a trapezium (or split into a rectangle and triangle).", working: "\\text{trapezium}", marks: 1, markCode: "M" },
              { reasoning: "Apply the trapezium formula.", working: "A=\\frac{1}{2}(4+4)\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=12\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ square units",
            commonErrors: ["Using only one parallel side: $4\\times3=12$ coincidentally correct here but the method must be stated.", "Splitting incorrectly and double-counting."],
          },
        },
        {
          id: "ciem-u3-distance-area-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The triangle $ABC$ has vertices $A(1,2)$, $B(7,2)$ and $C(4,6)$.",
          parts: [
            { label: "a", prompt: "Find the lengths $AB$, $AC$ and $BC$.", marks: 2 },
            { label: "b", prompt: "State whether triangle $ABC$ is isosceles, with a reason.", marks: 1 },
            { label: "c", prompt: "Find the area of triangle $ABC$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
              { kind: "definition", name: "Isosceles triangle", statement: "A triangle with two equal sides." },
            ],
            steps: [
              { part: "a", reasoning: "$AB=7-1=6$; $AC=\\sqrt{3^2+4^2}=5$; $BC=\\sqrt{3^2+4^2}=5$.", working: "AB=6,\\ AC=BC=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three lengths.", working: "6,\\ 5,\\ 5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$AC=BC=5$, two sides equal.", working: "\\text{isosceles}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Base $AB=6$ is horizontal; height $=6-2=4$.", working: "A=\\frac{1}{2}\\times6\\times4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=12\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $AB=6$, $AC=BC=5$ (b) isosceles (c) $12$ square units",
            commonErrors: ["In (c) using the slant height $\\sqrt{34}$ instead of the vertical height."],
          },
        },
        {
          id: "ciem-u3-distance-area-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the area of the triangle with vertices $(2,3)$, $(6,3)$ and $(4,7)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "32" },
              { id: "c", text: "8" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Base from $(2,3)$ to $(6,3)$ has length 4; height $=7-3=4$; $A=\\frac{1}{2}\\times4\\times4=8$.", working: "A=8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $8$ square units",
            commonErrors: ["Forgetting the $\\frac{1}{2}$ factor to get 16."],
          },
        },
        {
          id: "ciem-u3-distance-area-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find the distance between the points $(1,1)$ and $(4,5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "5" },
              { id: "c", text: "4" },
              { id: "d", text: "$\\sqrt{7}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.", working: "d=5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $5$",
            commonErrors: ["Writing $3+4=7$ or $\\sqrt{3+4}$."],
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
              { id: "a", text: "$-\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel gradients", statement: "Parallel lines have equal gradients." },
            ],
            steps: [
              { reasoning: "Read the gradient from $y=mx+c$.", working: "m=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $2$",
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
        {
          id: "ciem-u3-lines-shapes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of a line perpendicular to $y=2x+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$-\\frac{1}{2}$" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular lines", statement: "$m_1\\times m_2=-1$; perpendicular to $m=2$ means $m=-\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Negative reciprocal of 2 is $-\\frac{1}{2}$.", working: "m=-\\frac{1}{2}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $m=-\\frac{1}{2}$",
            commonErrors: ["Writing $m=\\frac{1}{2}$ without the negative sign."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the equation of the line parallel to $y=x-3$ that passes through $(0,2)$. Give your answer in the form $y=mx+c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=x+2$" },
              { id: "b", text: "$y=-x+2$" },
              { id: "c", text: "$y=x-2$" },
              { id: "d", text: "$y=x+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel lines", statement: "Parallel lines have the same gradient $m=1$." },
            ],
            steps: [
              { reasoning: "Same gradient $m=1$; substitute $(0,2)$: $2=1(0)+c\\Rightarrow c=2$.", working: "y=x+2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $y=x+2$",
            commonErrors: ["Reusing $c=-3$ from the given line instead of using the new point."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find the gradient of the line through the points $(1,1)$ and $(3,7)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "8" },
              { id: "c", text: "6" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            ],
            steps: [
              { reasoning: "$m=\\frac{7-1}{3-1}=\\frac{6}{2}=3$.", working: "m=3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $m=3$",
            commonErrors: ["Inverting to $\\frac{2}{6}=\\frac{1}{3}$."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of the line segment joining $(2,4)$ and $(8,10)$. Enter the $x$-coordinate and the $y$-coordinate.",
          response: { type: "numeric", parts: [{ label: "x", answer: 5 }, { label: "y", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Average the coordinates.", working: "\\left(\\frac{2+8}{2},\\frac{4+10}{2}\\right)=(5,7)", marks: 1, markCode: "M" },
              { reasoning: "State both coordinates.", working: "(5,7)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(5,7)$",
            commonErrors: ["Adding coordinates without dividing by 2."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the length of the line segment joining $(1,2)$ and $(4,6)$. Enter the length.",
          response: { type: "numeric", parts: [{ label: "Length", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the differences: $\\Delta x=3$, $\\Delta y=4$.", working: "\\sqrt{3^2+4^2}", marks: 1, markCode: "M" },
              { reasoning: "Square and add.", working: "=\\sqrt{9+16}=\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Writing $3+4=7$ as the length."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the length of the line segment joining $(0,0)$ and $(6,8)$. Enter the length.",
          response: { type: "numeric", parts: [{ label: "Length", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Apply the distance formula.", working: "d=\\sqrt{6^2+8^2}=\\sqrt{100}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=10", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "d=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Computing $6^2+8^2=14$."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The triangle $ABC$ has vertices $A(0,0)$, $B(6,0)$ and $C(3,5)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of $AB$.", marks: 1 },
            { label: "b", prompt: "Find the gradient of $AC$.", marks: 2 },
            { label: "c", prompt: "Find the coordinates of the midpoint of $AB$.", marks: 2 },
            { label: "d", prompt: "Find the length of $AC$.", marks: 2 },
            { label: "e", prompt: "Find the area of triangle $ABC$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) midpoint x", answer: 3 },
              { label: "(c) midpoint y", answer: 0 },
              { label: "(d) length AC", answer: 5.83, tolerance: 0.01 },
              { label: "(e) area", answer: 15, unit: "square units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "$AB$ is horizontal: gradient $=\\frac{0-0}{6-0}=0$.", working: "m=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the gradient formula to $A$ and $C$.", working: "m=\\frac{5-0}{3-0}=\\frac{5}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the gradient.", working: "m=\\frac{5}{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Average the coordinates of $A$ and $B$.", working: "\\left(\\frac{0+6}{2},\\frac{0+0}{2}\\right)=(3,0)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the midpoint.", working: "(3,0)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply the distance formula.", working: "AC=\\sqrt{3^2+5^2}=\\sqrt{34}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate to 2 d.p.", working: "AC\\approx5.83", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Base $AB=6$, height $=5$ (the $y$-coordinate of $C$).", working: "A=\\frac{1}{2}\\times6\\times5", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate and state.", working: "=15\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0$ (b) $\\frac{5}{3}$ (c) $(3,0)$ (d) $5.83$ (e) $15$ square units",
            commonErrors: ["In (d) computing $\\sqrt{3+5}=\\sqrt{8}$.", "In (e) using $AC$ as base without the perpendicular height."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would prove that a triangle is isosceles when you are given the coordinates of its three vertices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isosceles triangle", statement: "A triangle with at least two equal sides." },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the length of each side using the distance formula.", marks: 1, markCode: "M" },
              { reasoning: "Compare the three lengths.", marks: 1, markCode: "M" },
              { reasoning: "If two are equal, the triangle is isosceles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Find all three side lengths with the distance formula; if two are equal, the triangle is isosceles.",
            commonErrors: ["Comparing gradients instead of side lengths — equal gradients prove parallel sides, not isosceles."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the line that passes through $(2,1)$ and is perpendicular to $y=-3x+2$. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular lines", statement: "$m_1\\times m_2=-1$; perpendicular to $m=-3$ means $m=\\frac{1}{3}$." },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Find the perpendicular gradient: negative reciprocal of $-3$ is $\\frac{1}{3}$.", working: "m=\\frac{1}{3}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the point.", working: "y-1=\\frac{1}{3}(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Expand and simplify.", working: "y=\\frac{1}{3}x+\\frac{1}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=\\frac{1}{3}x+\\frac{1}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=\\frac{1}{3}x+\\frac{1}{3}$",
            commonErrors: ["Using $m=-\\frac{1}{3}$ — the negative reciprocal of $-3$ is $+\\frac{1}{3}$."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The triangle $ABC$ has vertices $A(1,2)$, $B(5,2)$ and $C(3,6)$.",
          parts: [
            { label: "a", prompt: "Show that $AB$ is horizontal and find its length.", marks: 2 },
            { label: "b", prompt: "Find the perpendicular height of the triangle from $C$ to $AB$.", marks: 1 },
            { label: "c", prompt: "Find the area of triangle $ABC$.", marks: 1 },
            { label: "d", prompt: "State, with a reason, whether triangle $ABC$ is isosceles.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { part: "a", reasoning: "$A$ and $B$ have the same $y$-coordinate, so $AB$ is horizontal.", working: "y_A=y_B=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Length $=5-1=4$.", working: "AB=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Height is the vertical distance from $C$ to the line $y=2$.", working: "h=6-2=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply the area formula.", working: "A=\\frac{1}{2}\\times4\\times4=8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$AC=BC=\\sqrt{2^2+4^2}=\\sqrt{20}$ — two equal sides.", working: "\\text{isosceles}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) horizontal, $AB=4$ (b) $h=4$ (c) $8$ square units (d) isosceles since $AC=BC$",
            commonErrors: ["In (d) concluding isosceles without computing side lengths."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point lies on the line $y=2x-1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,5)$" },
              { id: "b", text: "$(3,5)$" },
              { id: "c", text: "$(1,3)$" },
              { id: "d", text: "$(4,6)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Point on a line", statement: "A point lies on the line if substituting its coordinates satisfies the equation." },
            ],
            steps: [
              { reasoning: "Check each: $2(3)-1=5$ ✓; $2(1)-1=1\\ne3$; $2(2)-1=3\\ne5$; $2(4)-1=7\\ne6$.", working: "(3,5)\\ \\checkmark", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $(3,5)$",
            commonErrors: ["Substituting $x$ and $y$ the wrong way round."],
          },
        },
        {
          id: "ciem-u3-lines-shapes-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The points $A(0,0)$ and $B(4,0)$ are joined by a line segment. What is the equation of the perpendicular bisector of $AB$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$" },
              { id: "b", text: "$y=0$" },
              { id: "c", text: "$x=4$" },
              { id: "d", text: "$y=2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular bisector locus", statement: "The perpendicular bisector passes through the midpoint and is perpendicular to $AB$." },
            ],
            steps: [
              { reasoning: "Midpoint is $(2,0)$; $AB$ is horizontal so its bisector is the vertical line $x=2$.", working: "x=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x=2$",
            commonErrors: ["Writing $y=2$ — that is parallel to $AB$, not perpendicular."],
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
