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
              { id: "a", text: "$(3, 4)$" },
              { id: "b", text: "$(−3, 4)$" },
              { id: "c", text: "$(3, −4)$" },
              { id: "d", text: "$(−3, −4)$" },
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
              { id: "b", text: "$-2$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$x$" },
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
