import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cilm-u4-lesson-4-1",
  code: "4-1",
  title: "Coordinates and plotting points",
  goal: "I CAN plot coordinates on a grid, read coordinates, and understand the Cartesian plane.",
  standards: ["0862 Geometry: coordinates"],
  vocabulary: [
    { term: "Coordinate", definition: "An ordered pair $(x,y)$ locating a point on a grid." },
    { term: "Origin", definition: "The point $(0,0)$ where the axes cross." },
    { term: "x-axis", definition: "The horizontal axis — values increase to the right." },
    { term: "y-axis", definition: "The vertical axis — values increase upward." },
    { term: "Quadrant", definition: "One of four regions created by the axes, numbered I–IV anticlockwise from top-right." },
    { term: "Cartesian plane", definition: "The coordinate grid formed by two perpendicular number lines." },
  ],
  concepts: [
    {
      id: "cilm-u4-coordinates",
      title: "The coordinate plane",
      skill: "Plot and read coordinates, identify quadrants, and move between points.",
      lesson: {
        sections: [
          {
            heading: "How coordinates work",
            body: "$(x,y)$ means: go $x$ units **along** the x-axis first, then $y$ units **up** the y-axis. Order matters — $(3,5)$ and $(5,3)$ are different points.\n\n- $x>0$: right of origin; $x<0$: left.\n- $y>0$: above origin; $y<0$: below.",
          },
          {
            heading: "The four quadrants",
            body: "- **Quadrant I**: $x>0, y>0$ (top right)\n- **Quadrant II**: $x<0, y>0$ (top left)\n- **Quadrant III**: $x<0, y<0$ (bottom left)\n- **Quadrant IV**: $x>0, y<0$ (bottom right)\n\nPoints on axes belong to no quadrant.",
          },
          {
            heading: "Distance between points",
            body: "Count squares: from $(1,2)$ to $(4,6)$ move $3$ right and $4$ up — distance $=\\sqrt{3^2+4^2}=5$ (Pythagoras, previewed). For simple horizontal/vertical moves, just subtract coordinates.",
          },
        ],
        keyFormulas: [
          { name: "Coordinate order", statement: "$(x,y)$: $x$ = horizontal, $y$ = vertical. Always $x$ first." },
        ],
        workedExample: {
          problem: "Plot $(−2, 3)$, $(4, −1)$ and $(0, 0)$ and state the quadrant of each.",
          solution: "$(−2,3)$: left 2, up 3 → Quadrant II. $(4,−1)$: right 4, down 1 → Quadrant IV. $(0,0)$: origin, no quadrant.",
        },
      },
      questions: [
        {
          id: "cilm-u4-coord-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which point is in Quadrant II?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, −4)$" },
              { id: "b", text: "$(−3, 4)$" },
              { id: "c", text: "$(−3, −4)$" },
              { id: "d", text: "$(3, 4)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quadrants", statement: "QII: $x<0$, $y>0$." },
            ],
            steps: [
              { reasoning: "Quadrant II is top-left: negative $x$, positive $y$ → $(−3,4)$.", working: "x<0,y>0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(−3, 4)$",
            commonErrors: ["Choosing (d) — that's Quadrant III (both negative)."],
          },
        },
        {
          id: "cilm-u4-coord-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Point A is $(2, 5)$ and point B is $(2, −3)$. What is the distance between them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vertical distance", statement: "Same $x$ → distance is the difference in $y$ values." },
            ],
            steps: [
              { reasoning: "Same $x=2$, so vertical line: distance $=5-(-3)=8$.", working: "5-(-3)=8", marks: 1, markCode: "M" },
              { reasoning: "Distance $=8$ units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ units",
            commonErrors: ["$5-3=2$ — must subtract the negative: $5-(-3)=8$."],
          },
        },
        {
          id: "cilm-u4-coord-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plot the points $(1,1)$, $(1,4)$, $(4,4)$, $(4,1)$ and join them in order. What shape is formed and what is its perimeter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Coordinates to shape", statement: "Plot → join → identify shape → measure sides." },
            ],
            steps: [
              { reasoning: "Points form a square (or rectangle): sides $3$ units each ($1\\to4$).", working: "\\text{square}, s=3", marks: 1, markCode: "M" },
              { reasoning: "Each side $=4-1=3$ units.", working: "s=3", marks: 1, markCode: "M" },
              { reasoning: "Perimeter $=4\\times3=12$ units.", working: "4\\times3=12", marks: 1, markCode: "M" },
              { reasoning: "Shape: square; perimeter $12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Square with perimeter $12$ units",
            commonErrors: ["Joining in wrong order creates a bowtie — follow the listed order."],
          },
        },
        {
          id: "cilm-u4-coord-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Three towns are at coordinates A$(2,3)$, B$(8,3)$, C$(8,9)$ on a grid where $1$ unit $=2$ km.",
          parts: [
            { label: "a", prompt: "Find the distance AB in grid units and km.", marks: 3 },
            { label: "b", prompt: "Find the distance BC in grid units and km.", marks: 2 },
            { label: "c", prompt: "Is angle ABC a right angle? Justify.", marks: 2 },
            { label: "d", prompt: "Find the distance AC (straight line) using Pythagoras.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Coordinate geometry", statement: "Horizontal/vertical distances from coordinates; right angle check via perpendicular sides; Pythagoras for diagonals." },
            ],
            steps: [
              { part: "a", reasoning: "AB horizontal: $8-2=6$ units.", working: "6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$6 \\times 2 = 12$ km.", working: "12\\text{ km}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "BC vertical: $9-3=6$ units $=12$ km.", working: "6\\text{ units}=12\\text{ km}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "AB horizontal and BC vertical — they meet at $90°$; yes, right angle.", working: "90°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justification correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$AC=\\sqrt{6^2+6^2}=\\sqrt{72}=6\\sqrt{2}\\approx8.49$ units.", working: "\\sqrt{72}\\approx8.49", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct (Pythagoras on legs 6 and 6).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6$ units $=12$ km (b) $6$ units $=12$ km (c) yes — perpendicular sides (d) $\\approx8.49$ units ($\\approx17$ km)",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "AB correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "BC correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Right angle justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "AC via Pythagoras.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (d) adding $6+6=12$ — diagonal needs Pythagoras."],
          },
        },
        {
          id: "cilm-u4-coord-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which point lies on the x-axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, 4)$" },
              { id: "b", text: "$(0, 5)$" },
              { id: "c", text: "$(−2, −3)$" },
              { id: "d", text: "$(−4, 0)$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Axes", statement: "Points on the x-axis have $y=0$." },
            ],
            steps: [
              { reasoning: "Only $(−4,0)$ has $y=0$, so it lies on the x-axis.", working: "y=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(−4, 0)$",
            commonErrors: ["Choosing (b) — $(0,5)$ is on the y-axis because $x=0$."],
          },
        },
        {
          id: "cilm-u4-coord-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the horizontal distance between $P(−3, 2)$ and $Q(5, 2)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Horizontal distance", statement: "Same $y$ coordinate means the distance is the difference in $x$ values." },
            ],
            steps: [
              { reasoning: "The points have the same $y=2$, so the distance is $5-(-3)=8$.", working: "5-(-3)=8", marks: 1, markCode: "M" },
              { reasoning: "Distance $=8$ units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ units",
            commonErrors: ["Using $5-3=2$ — include the negative sign in the subtraction."],
          },
        },
        {
          id: "cilm-u4-coord-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about the point $(0, 4)$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is on the x-axis" },
              { id: "b", text: "It is on the y-axis" },
              { id: "c", text: "It is the origin" },
              { id: "d", text: "It is in Quadrant II" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Axes", statement: "A point with $x=0$ lies on the y-axis and belongs to no quadrant." },
            ],
            steps: [
              { reasoning: "$(0,4)$ has $x=0$, so it lies on the y-axis above the origin.", working: "x=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It is on the y-axis",
            commonErrors: ["Calling it Quadrant II — points on axes are not in a quadrant."],
          },
        },
        {
          id: "cilm-u4-coord-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $A(1, −2)$ and $B(4, 2)$ using Pythagoras' theorem.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "For a right-angled displacement, distance $=\sqrt{(\Delta x)^2+(\Delta y)^2}$." },
            ],
            steps: [
              { reasoning: "Horizontal change $=4-1=3$ and vertical change $=2-(-2)=4$.", working: "3,4", marks: 1, markCode: "M" },
              { reasoning: "Distance $=\sqrt{3^2+4^2}=\sqrt{25}=5$.", working: "\\sqrt{25}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ units",
            commonErrors: ["Subtracting $2-2=0$ for the vertical change — subtract the negative correctly."],
          },
        },
        {
          id: "cilm-u4-coord-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Starting at $(2, 3)$, a point moves $4$ units right and $1$ unit down. What are its new coordinates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6, 4)$" },
              { id: "b", text: "$(6, 2)$" },
              { id: "c", text: "$(2, 2)$" },
              { id: "d", text: "$(−2, 2)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coordinate movement", statement: "Right increases $x$; down decreases $y$." },
            ],
            steps: [
              { reasoning: "New $x=2+4=6$ and new $y=3-1=2$, giving $(6,2)$.", working: "(2+4,3-1)=(6,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(6, 2)$",
            commonErrors: ["Increasing $y$ when moving down — downward movement subtracts from $y$."],
          },
        },
        {
          id: "cilm-u4-coord-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the vertical distance between $M(−4, −1)$ and $N(−4, 6)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vertical distance", statement: "Same $x$ coordinate means the distance is the difference in $y$ values." },
            ],
            steps: [
              { reasoning: "The points have the same $x=-4$, so distance $=6-(-1)=7$.", working: "6-(-1)=7", marks: 1, markCode: "M" },
              { reasoning: "Distance $=7$ units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ units",
            commonErrors: ["Computing $6-1=5$ — subtracting a negative requires adding its absolute value."],
          },
        },
        {
          id: "cilm-u4-coord-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair of points are both in Quadrant III?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(−2, 5)$ and $(4, −3)$" },
              { id: "b", text: "$(2, −5)$ and $(−7, 1)$" },
              { id: "c", text: "$(−2, −5)$ and $(−7, −1)$" },
              { id: "d", text: "$(−2, 0)$ and $(0, −5)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quadrants", statement: "Quadrant III has $x<0$ and $y<0$." },
            ],
            steps: [
              { reasoning: "Both $(−2,−5)$ and $(−7,−1)$ have negative $x$ and negative $y$.", working: "x<0,y<0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(−2, −5)$ and $(−7, −1)$",
            commonErrors: ["Choosing (d) — points on axes do not belong to a quadrant."],
          },
        },
        {
          id: "cilm-u4-coord-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $R(1, 1)$ and $S(4, 5)$ using Pythagoras' theorem.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "Distance $=\sqrt{(\Delta x)^2+(\Delta y)^2}$." },
            ],
            steps: [
              { reasoning: "Horizontal change $=3$ and vertical change $=4$.", working: "3,4", marks: 1, markCode: "M" },
              { reasoning: "Distance $=\sqrt{3^2+4^2}=5$.", working: "\\sqrt{25}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ units",
            commonErrors: ["Adding the coordinate changes to get $7$ — diagonal distance requires Pythagoras."],
          },
        },
        {
          id: "cilm-u4-coord-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The vertices of a rectangle are $(0, 0)$, $(6, 0)$, $(6, 4)$ and $(0, 4)$. Work out its perimeter.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Coordinate perimeter", statement: "Horizontal and vertical side lengths come from coordinate differences." },
            ],
            steps: [
              { reasoning: "Width $=6-0=6$ and height $=4-0=4$.", working: "6,4", marks: 1, markCode: "M" },
              { reasoning: "Perimeter $=2(6+4)=20$ units.", working: "2(6+4)=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ units",
            commonErrors: ["Multiplying $6\\times4=24$ — that is the area, not the perimeter."],
          },
        },
        {
          id: "cilm-u4-coord-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plot and join $(−1, 2)$, $(3, 2)$, $(3, 6)$ and $(−1, 6)$ in order. Identify the shape and find its perimeter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Coordinates to shape", statement: "Joining ordered points forms a rectangle; side lengths come from coordinate differences." },
            ],
            steps: [
              { reasoning: "The points form a rectangle with width $3-(-1)=4$ and height $6-2=4$.", working: "w=4,h=4", marks: 1, markCode: "M" },
              { reasoning: "Each side length is found from the coordinate differences.", working: "4\\text{ and }4", marks: 1, markCode: "M" },
              { reasoning: "Perimeter $=2(4+4)=16$ units.", working: "2(4+4)=16", marks: 1, markCode: "M" },
              { reasoning: "Shape is a square; perimeter is $16$ units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Square with perimeter $16$ units",
            commonErrors: ["Joining points out of order can create crossed sides."],
          },
        },
        {
          id: "cilm-u4-coord-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the distance between $U(2, −5)$ and $V(2, −1)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vertical distance", statement: "Same $x$ coordinate means the distance is the difference in $y$ values." },
            ],
            steps: [
              { reasoning: "The points have the same $x=2$, so distance $=-1-(-5)=4$.", working: "-1-(-5)=4", marks: 1, markCode: "M" },
              { reasoning: "Distance $=4$ units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ units",
            commonErrors: ["Taking $5-1=4$ by accident gives the right magnitude here, but $-1-(-5)=4$ is the correct signed difference."],
          },
        },
        {
          id: "cilm-u4-coord-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point is farthest from the origin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6, 0)$" },
              { id: "b", text: "$(3, 4)$" },
              { id: "c", text: "$(0, 5)$" },
              { id: "d", text: "$(2, 2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance from origin", statement: "Distance from $(0,0)$ to $(x,y)$ is $\\sqrt{x^2+y^2}$." },
            ],
            steps: [
              { reasoning: "Distances from the origin are $5$, $6$, $5$ and about $2.83$, so $(6,0)$ is farthest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $(6, 0)$",
            commonErrors: ["Comparing only the coordinate values without calculating distance."],
          },
        },
      ],
    },
    {
      id: "cilm-u4-linear-graphs",
      title: "Linear graphs",
      skill: "Plot linear equations, find gradients and interpret what the line represents.",
      lesson: {
        sections: [
          {
            heading: "y = mx + c",
            body: "Every straight-line graph has equation $y = mx + c$:\n\n- $m$ = **gradient** (steepness) — rise over run\n- $c$ = **y-intercept** — where the line crosses the y-axis\n\n$y = 2x + 1$: gradient $2$, crosses y-axis at $(0,1)$.",
          },
          {
            heading: "Finding the gradient",
            body: "Pick two points on the line, measure vertical change (rise) and horizontal change (run):\n\n$$m = \\frac{\\text{rise}}{\\text{run}}$$\n\nFrom $(0,1)$ to $(2,5)$: rise $=4$, run $=2$, gradient $=2$.",
          },
          {
            heading: "Interpreting graphs",
            body: "Real-world linear graphs: distance-time (gradient = speed), cost vs quantity (gradient = unit price, intercept = fixed fee). The equation IS the story.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\frac{\\Delta y}{\\Delta x}$ — change in y over change in x." },
          { name: "Line equation", statement: "$y = mx + c$: $m$ gradient, $c$ y-intercept." },
        ],
        workedExample: {
          problem: "A line passes through $(0, 3)$ and $(4, 11)$. Find its equation.",
          solution: "Gradient $=\\frac{11-3}{4-0}=\\frac{8}{4}=2$. Y-intercept $c=3$. Equation: $y=2x+3$.",
        },
      },
      questions: [
        {
          id: "cilm-u4-lg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of $y = 3x - 2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$x$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gradient", statement: "In $y=mx+c$, $m$ is the coefficient of $x$." },
            ],
            steps: [
              { reasoning: "$m=3$ (coefficient of $x$); $-2$ is the intercept.", working: "m=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Choosing (b) — that's the y-intercept, not the gradient."],
          },
        },
        {
          id: "cilm-u4-lg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(1, 2)$ and $(5, 10)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gradient formula", statement: "$m=\\frac{\\Delta y}{\\Delta x}=\\frac{10-2}{5-1}=\\frac{8}{4}=2$." },
            ],
            steps: [
              { reasoning: "Rise $=10-2=8$; run $=5-1=4$.", working: "8/4", marks: 1, markCode: "M" },
              { reasoning: "Gradient $=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m = 2$",
            commonErrors: ["$\\frac{\\Delta x}{\\Delta y}=\\frac{4}{8}$ — gradient is rise/run, y over x."],
          },
        },
        {
          id: "cilm-u4-lg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A taxi charges $\\pounds4$ flagfall plus $\\pounds2$ per km. The cost $C$ against distance $d$ is linear. Write the equation and find the cost of a $15$ km journey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear modelling", statement: "Fixed fee = intercept; per-unit rate = gradient." },
            ],
            steps: [
              { reasoning: "Equation: $C = 2d + 4$ ($2$/km gradient, $4$ intercept).", working: "C=2d+4", marks: 1, markCode: "M" },
              { reasoning: "Cost for $15$ km: $C = 2(15)+4 = 34$.", working: "2\\times15+4=34", marks: 1, markCode: "M" },
              { reasoning: "$\\pounds34$.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation: $4$ is the flagfall, $2$ is the per-km rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 2d + 4$; $\\pounds34$ for $15$ km",
            commonErrors: ["$C=4d+2$ — swapping fixed fee and rate."],
          },
        },
        {
          id: "cilm-u4-lg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A water tank empties at a constant rate.",
          parts: [
            { label: "a", prompt: "After 2 hours, 90 litres remain; after 5 hours, 60 litres remain. Find the equation relating volume $V$ to time $t$.", marks: 4 },
            { label: "b", prompt: "What was the initial volume (at $t=0$)?", marks: 2 },
            { label: "c", prompt: "When will the tank be empty?", marks: 2 },
            { label: "d", prompt: "Interpret the gradient of your equation.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear graphs", statement: "Two points → gradient → intercept → equation → solve." },
            ],
            steps: [
              { part: "a", reasoning: "Gradient $=\\frac{60-90}{5-2}=\\frac{-30}{3}=-10$ litres/hour.", working: "m=-10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Using $(2,90)$: $90=-10(2)+c$ → $c=110$.", working: "c=110", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equation: $V = -10t + 110$.", working: "V=-10t+110", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Initial volume $=c=110$ litres.", working: "110\\text{ L}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$V=0$: $0=-10t+110$ → $t=11$ hours.", working: "t=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gradient $-10$ = emptying rate of $10$ litres per hour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $V=-10t+110$ (b) $110$ litres (c) $11$ hours (d) $-10$ = 10 litres/hour emptying rate",
            levels: [
              { level: "Level 3", marks: "3-4", descriptor: "Equation correct.", part: "a" },
              { level: "Level 2", marks: "2", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Initial volume correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Time correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Gradient interpreted.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (a) giving positive gradient — tank empties so volume decreases."],
          },
        },
        {
          id: "cilm-u4-lg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the y-intercept of $y = 5x + 7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-7$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$x$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "y-intercept", statement: "In $y=mx+c$, $c$ is where the line crosses the y-axis." },
            ],
            steps: [
              { reasoning: "$c=7$; the line crosses the y-axis at $(0,7)$.", working: "c=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7$",
            commonErrors: ["Choosing (a) — that's the gradient, not the intercept."],
          },
        },
        {
          id: "cilm-u4-lg-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(2, 5)$ and $(6, 13)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gradient formula", statement: "$m=\\frac{\\Delta y}{\\Delta x}$." },
            ],
            steps: [
              { reasoning: "Rise $=13-5=8$; run $=6-2=4$.", working: "8/4", marks: 1, markCode: "M" },
              { reasoning: "Gradient $=\\frac{8}{4}=2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m = 2$",
            commonErrors: ["$\\frac{4}{8}=0.5$ — gradient is rise over run, y change over x change."],
          },
        },
        {
          id: "cilm-u4-lg-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which point lies on the line $y = 2x + 1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1, 3)$" },
              { id: "b", text: "$(0, 2)$" },
              { id: "c", text: "$(3, 6)$" },
              { id: "d", text: "$(2, 4)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Points on a line", statement: "Substitute $x$ into the equation — the result must equal the point's $y$." },
            ],
            steps: [
              { reasoning: "For $(1,3)$: $2(1)+1=3$ ✓ — the only point that satisfies the equation.", working: "2(1)+1=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(1, 3)$",
            commonErrors: ["Choosing (b) — $2(2)+1=5 \\neq 4$, so $(2,4)$ is not on the line."],
          },
        },
        {
          id: "cilm-u4-lg-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(-1, 4)$ and $(3, -2)$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: -1.5, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Gradient formula", statement: "$m=\\frac{\\Delta y}{\\Delta x}=\\frac{-2-4}{3-(-1)}$ — include the negatives." },
            ],
            steps: [
              { reasoning: "Rise $=-2-4=-6$; run $=3-(-1)=4$.", working: "-6/4", marks: 1, markCode: "M" },
              { reasoning: "Gradient $=\\frac{-6}{4}=-1.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m = -1.5$",
            commonErrors: ["$\\frac{6}{4}$ — forgetting the rise is negative gives the wrong sign."],
          },
        },
        {
          id: "cilm-u4-lg-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the line through $(0, 4)$ and $(3, 10)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equation from two points", statement: "Gradient from two points; intercept from a point (here $(0,4)$ gives $c=4$ directly)." },
            ],
            steps: [
              { reasoning: "Gradient $=\\frac{10-4}{3-0}=\\frac{6}{3}=2$.", working: "m=2", marks: 1, markCode: "M" },
              { reasoning: "At $x=0$, $y=4$ so $c=4$.", working: "c=4", marks: 1, markCode: "M" },
              { reasoning: "Equation: $y = 2x + 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 2x + 4$",
            commonErrors: ["Writing $y=2x+10$ — the intercept is the $y$-value at $x=0$, which is $4$, not $10$."],
          },
        },
        {
          id: "cilm-u4-lg-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Where does the line $y = -2x + 5$ cross the y-axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5, 0)$" },
              { id: "b", text: "$(0, 5)$" },
              { id: "c", text: "$(0, -2)$" },
              { id: "d", text: "$(-2, 0)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "y-intercept", statement: "Set $x=0$: $y=-2(0)+5=5$, so the crossing point is $(0,5)$." },
            ],
            steps: [
              { reasoning: "At $x=0$, $y=5$ → crosses at $(0,5)$.", working: "(0,5)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(0, 5)$",
            commonErrors: ["Choosing (b) — $(5,0)$ is on the x-axis; the y-axis crossing needs $x=0$."],
          },
        },
        {
          id: "cilm-u4-lg-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels $150$ km in $2.5$ hours at constant speed. What is the gradient of the distance-time graph, in km per hour?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 60 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distance-time graphs", statement: "Gradient = speed $=\\frac{\\text{distance}}{\\text{time}}$." },
            ],
            steps: [
              { reasoning: "Gradient $=\\frac{150}{2.5}$.", working: "150/2.5", marks: 1, markCode: "M" },
              { reasoning: "Gradient $=60$ km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$ km/h",
            commonErrors: ["$\\frac{2.5}{150}$ — speed is distance over time, not time over distance."],
          },
        },
        {
          id: "cilm-u4-lg-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gym charges a $\\pounds15$ joining fee plus $\\pounds6$ per month. The cost $C$ against months $m$ is linear. Write the equation, find the cost for $12$ months, and interpret both constants in the equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear modelling", statement: "Fixed fee = intercept; per-unit rate = gradient." },
            ],
            steps: [
              { reasoning: "Equation: $C = 6m + 15$ ($6$/month gradient, $15$ intercept).", working: "C=6m+15", marks: 1, markCode: "M" },
              { reasoning: "Cost for $12$ months: $C = 6(12)+15 = 87$.", working: "6\\times12+15=87", marks: 1, markCode: "M" },
              { reasoning: "$\\pounds87$.", marks: 1, markCode: "M" },
              { reasoning: "Interpretation: $15$ is the one-off joining fee; $6$ is the monthly charge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C = 6m + 15$; $\\pounds87$ for $12$ months; $15$ = joining fee, $6$ = monthly rate",
            commonErrors: ["$C=15m+6$ — swapping the fixed fee and the monthly rate."],
          },
        },
        {
          id: "cilm-u4-lg-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the y-intercept of $y = 4x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "y-intercept", statement: "Here $c=0$, so the line passes through the origin $(0,0)$." },
            ],
            steps: [
              { reasoning: "At $x=0$, $y=4(0)=0$ → intercept is $0$.", working: "c=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0$",
            commonErrors: ["Choosing (a) — $4$ is the gradient, not the intercept."],
          },
        },
        {
          id: "cilm-u4-lg-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the line $y = 3x - 2$, find the value of $y$ when $x = 5$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Points on a line", statement: "Substitute $x=5$: $y=3(5)-2$." },
            ],
            steps: [
              { reasoning: "$y = 3(5)-2 = 15-2 = 13$.", working: "15-2=13", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["$3(5)-2$ mis-evaluated — multiply before subtracting."],
          },
        },
        {
          id: "cilm-u4-lg-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these lines is the steepest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = x + 7$" },
              { id: "b", text: "$y = 5x + 1$" },
              { id: "c", text: "$y = 0.5x + 4$" },
              { id: "d", text: "$y = 2x + 9$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gradient and steepness", statement: "Steepness depends on $|m|$ — larger gradient means steeper." },
            ],
            steps: [
              { reasoning: "Gradients are $5$, $2$, $0.5$, $1$ — $5$ is largest, so $y=5x+1$ is steepest.", working: "m=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $y = 5x + 1$",
            commonErrors: ["Choosing (b) because of the larger intercept — steepness depends on the gradient only."],
          },
        },
        {
          id: "cilm-u4-lg-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A delivery van leaves a depot and drives at constant speed. Its distance $d$ km from the depot after $t$ hours is linear. After $1$ hour it is $20$ km away; after $4$ hours it is $74$ km away.",
          parts: [
            { label: "a", prompt: "Find the equation relating $d$ to $t$.", marks: 3 },
            { label: "b", prompt: "Interpret the gradient of your equation.", marks: 2 },
            { label: "c", prompt: "When will the van be $110$ km from the depot?", marks: 2 },
            { label: "d", prompt: "Explain why the line does not pass through the origin.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear graphs", statement: "Two points → gradient → intercept → equation → solve; interpret in context." },
            ],
            steps: [
              { part: "a", reasoning: "Gradient $=\\frac{74-20}{4-1}=\\frac{54}{3}=18$ km/h.", working: "m=18", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Using $(1,20)$: $20=18(1)+c$ → $c=2$.", working: "c=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equation: $d = 18t + 2$.", working: "d=18t+2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient $18$ means the van travels at $18$ km/h.", working: "18\\text{ km/h}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interpretation correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$110=18t+2$ → $18t=108$ → $t=6$ hours.", working: "t=6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Intercept $c=2$ means the van was already $2$ km from the depot at $t=0$ (or started $2$ km away).", working: "c=2 \\Rightarrow 2\\text{ km at }t=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation links intercept to context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $d=18t+2$ (b) gradient $18$ = speed of $18$ km/h (c) $t=6$ hours (d) van started $2$ km from the depot",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Equation correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Gradient interpreted.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Time correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Intercept explained in context.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) finding gradient as $\\frac{4}{54}$ — rise over run, not run over rise."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u4-coords-graphs-notes",
      title: "Coordinates and linear graphs — revision notes",
      summary: "Plotting points, quadrants, gradient and y=mx+c.",
      sections: [
        {
          heading: "Coordinates",
          body: "$(x,y)$: x horizontal first, y vertical. QI $(+,+)$, QII $(-,+)$, QIII $(-,-)$, QIV $(+,-)$. Same $x$ or $y$ → straight-line distance.",
        },
        {
          heading: "Linear graphs",
          body: "$y=mx+c$: $m$=gradient (rise/run), $c$=y-intercept. Real contexts: gradient=rate, intercept=fixed value. Negative gradient = decreasing.",
        },
      ],
    },
  ],
};
