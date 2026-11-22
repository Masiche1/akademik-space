import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ciem-u3-lesson-3-2",
  code: "3-2",
  title: "Circles in Coordinate Geometry",
  goal: "I CAN recognise and use the equations of circles, find centres and radii, and solve problems involving tangents and distances from the centre.",
  standards: ["0580 3.3"],
  vocabulary: [
    { term: "Circle equation", definition: "The relationship satisfied by every point on a circle; centred at the origin it is $x^2+y^2=r^2$." },
    { term: "Centre", definition: "The fixed point inside a circle equidistant from every point on it." },
    { term: "Radius", definition: "The distance from the centre to any point on the circle." },
    { term: "Tangent", definition: "A line that touches a circle at exactly one point; it is perpendicular to the radius at that point." },
    { term: "Concentric circles", definition: "Circles with the same centre but different radii." },
    { term: "Chord", definition: "A line segment joining two points on a circle." },
  ],
  concepts: [
    {
      id: "ciem-u3-circle-equation",
      title: "Equation, centre and radius of a circle",
      skill: "Read centre and radius from circle equations and test whether points lie on a circle.",
      lesson: {
        sections: [
          {
            heading: "Circle centred at the origin",
            body: "A circle with centre $(0,0)$ and radius $r$ has equation $x^2+y^2=r^2$. For example $x^2+y^2=25$ has radius $\\sqrt{25}=5$.",
          },
          {
            heading: "Circle with centre (a, b)",
            body: "Shifting the centre gives $(x-a)^2+(y-b)^2=r^2$. For $(x-1)^2+(y-2)^2=25$: centre $(1,2)$, radius $5$. The signs inside the brackets are **opposite** to the centre coordinates: $(x-1)$ means centre $x=1$, $(y+3)$ means centre $y=-3$.",
          },
          {
            heading: "Testing points",
            body: "A point $(x,y)$ lies on the circle exactly when substituting into the left side gives $r^2$. For $(x-1)^2+(y-2)^2=25$, the point $(4,6)$ gives $(4-1)^2+(6-2)^2=9+16=25$ — so it lies on the circle.",
          },
        ],
        keyFormulas: [
          { name: "Origin centre", statement: "$x^2+y^2=r^2$" },
          { name: "General centre", statement: "$(x-a)^2+(y-b)^2=r^2$ with centre $(a,b)$" },
        ],
        workedExample: {
          problem: "Write down the centre and radius of $(x-2)^2+(y+3)^2=16$.",
          solution: "Comparing with $(x-a)^2+(y-b)^2=r^2$: $a=2$, $b=-3$ (since $y+3=y-(-3)$), $r^2=16$ so $r=4$. Centre $(2,-3)$, radius 4.",
        },
      },
      questions: [
        {
          id: "ciem-u3-circle-equation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the radius of the circle $x^2+y^2=25$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$" },
              { id: "b", text: "$\\sqrt{25}$ only, not a number" },
              { id: "c", text: "$12.5$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$x^2+y^2=r^2$; the right side is $r^2$, not $r$." },
            ],
            steps: [
              { reasoning: "Take the square root of 25.", working: "r=\\sqrt{25}=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $5$",
            commonErrors: ["Answering 25 by forgetting the square root."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write down the centre and radius of the circle $(x-2)^2+(y+3)^2=16$. Enter the $x$-coordinate and $y$-coordinate of the centre, and the radius.",
          response: {
            type: "numeric",
            parts: [
              { label: "Centre x", answer: 2 },
              { label: "Centre y", answer: -3 },
              { label: "Radius", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "General circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$ has centre $(a,b)$; $(y+3)=(y-(-3))$ gives $b=-3$." },
            ],
            steps: [
              { reasoning: "Read off $a$, $b$ and $r^2$.", working: "a=2,\\ b=-3,\\ r^2=16", marks: 1, markCode: "M" },
              { reasoning: "State centre and radius.", working: "(2,-3),\\ r=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Centre $(2,-3)$, radius $4$",
            commonErrors: ["Giving centre $(2,3)$ — forgetting the sign flip on $y+3$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the equation of the circle with centre $(0,0)$ that passes through the point $(6,8)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle through a point", statement: "The radius equals the distance from the centre to the point." },
            ],
            steps: [
              { reasoning: "Find the radius as the distance from $(0,0)$ to $(6,8)$.", working: "r=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10", marks: 1, markCode: "M" },
              { reasoning: "Write the equation $x^2+y^2=r^2$.", working: "x^2+y^2=100", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+y^2=100$",
            commonErrors: ["Writing $x^2+y^2=10$ instead of $=100$ (using $r$ not $r^2$)."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle $C$ has equation $(x-1)^2+(y-2)^2=25$.",
          parts: [
            { label: "a", prompt: "Write down the centre and radius of $C$.", marks: 2 },
            { label: "b", prompt: "Show that the point $(4,6)$ lies on $C$.", marks: 3 },
            { label: "c", prompt: "Find the equation of the circle concentric with $C$ that has radius 13.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "General circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$ has centre $(a,b)$ and radius $r$." },
              { kind: "definition", name: "Concentric circles", statement: "Same centre, different radii." },
            ],
            steps: [
              { part: "a", reasoning: "Read off centre and radius.", working: "\\text{centre }(1,2),\\ r=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $(4,6)$ into the left side.", working: "(4-1)^2+(6-2)^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=9+16=25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude it equals $r^2=25$, so the point lies on $C$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Concentric means same centre $(1,2)$.", working: "(x-1)^2+(y-2)^2=r^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use radius 13, so $r^2=169$.", working: "r^2=13^2=169", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write the equation.", working: "(x-1)^2+(y-2)^2=169", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Confirm the centre is unchanged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) centre $(1,2)$, radius $5$ (b) shown (c) $(x-1)^2+(y-2)^2=169$",
            commonErrors: ["In (c) writing $=13$ instead of $=169$.", "Changing the centre when asked for a concentric circle."],
            examinerNote: "Part (b) is 'show that' — the substitution must be visible.",
          },
        },
        {
          id: "ciem-u3-circle-equation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the radius of the circle $(x-1)^2+(y-2)^2=49$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "49" },
              { id: "c", text: "$\\sqrt{49}=7.5$" },
              { id: "d", text: "24.5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$ has centre $(a,b)$ and radius $r=\\sqrt{\\text{RHS}}$." },
            ],
            steps: [
              { reasoning: "The right side is $r^2=49$, so $r=\\sqrt{49}=7$.", working: "r=7", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $r=7$",
            commonErrors: ["Answering 49 — forgetting to take the square root."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point lies on the circle $x^2+y^2=25$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5,5)$" },
              { id: "b", text: "$(1,1)$" },
              { id: "c", text: "$(0,6)$" },
              { id: "d", text: "$(3,4)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "A point $(x,y)$ lies on the circle if substituting gives $x^2+y^2=r^2$." },
            ],
            steps: [
              { reasoning: "Check each: $3^2+4^2=9+16=25$.", working: "(3,4)\\ \\checkmark", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $(3,4)$",
            commonErrors: ["Choosing $(5,5)$ without checking $25+25=50\\ne25$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write down the equation of the circle with centre $(2,-1)$ and radius $3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-2)^2+(y+1)^2=3$" },
              { id: "b", text: "$(x-2)^2+(y-1)^2=9$" },
              { id: "c", text: "$(x-2)^2+(y+1)^2=9$" },
              { id: "d", text: "$(x+2)^2+(y-1)^2=9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$; signs of $a,b$ are reversed in the brackets." },
            ],
            steps: [
              { reasoning: "Centre $(2,-1)$ gives $(x-2)^2$ and $(y-(-1))^2=(y+1)^2$; $r^2=9$.", working: "(x-2)^2+(y+1)^2=9", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $(x-2)^2+(y+1)^2=9$",
            commonErrors: ["Writing $(y-1)^2$ instead of $(y+1)^2$ — the sign of the centre coordinate flips.", "Writing $=3$ instead of $r^2=9$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the radius of the circle $(x+4)^2+(y-5)^2=20$. Enter the radius, giving your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Radius", answer: 4.47, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$r=\\sqrt{\\text{RHS of the equation}}$." },
            ],
            steps: [
              { reasoning: "$r^2=20$, so $r=\\sqrt{20}$.", working: "r=\\sqrt{20}=2\\sqrt{5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 2 d.p.", working: "\\approx4.47", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r=2\\sqrt{5}\\approx4.47$",
            commonErrors: ["Answering $\\sqrt{20}=20$ or $10$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the circle $(x-1)^2+(y-2)^2=1$, compute the value of $(x-1)^2+(y-2)^2$ at the point $(1,1)$. Enter the value.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "A point lies on the circle when the left side equals $r^2$." },
            ],
            steps: [
              { reasoning: "Substitute $x=1$, $y=1$.", working: "(1-1)^2+(1-2)^2=0+1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$ — the point lies on the circle",
            commonErrors: ["Computing $(1-2)^2$ as $-1$ instead of $1$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The circle $x^2+y^2=25$ meets the line $y=3$. Find the $x$-coordinates of the intersection points. Enter the smaller and larger values.",
          response: { type: "numeric", parts: [{ label: "Smaller x", answer: -4 }, { label: "Larger x", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Circle-line intersection", statement: "Substitute the line equation into the circle equation and solve." },
            ],
            steps: [
              { reasoning: "Substitute $y=3$ into $x^2+y^2=25$.", working: "x^2+9=25", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x^2$.", working: "x^2=16\\Rightarrow x=\\pm4", marks: 1, markCode: "M" },
              { reasoning: "State both values.", working: "x=-4\\ \\text{and}\\ x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-4$ and $x=4$",
            commonErrors: ["Writing $x^2=25+9=34$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle $C$ has equation $(x-3)^2+(y+2)^2=25$.",
          parts: [
            { label: "a", prompt: "Write down the centre and radius of $C$.", marks: 2 },
            { label: "b", prompt: "Determine whether the point $(0,2)$ lies on, inside or outside the circle.", marks: 3 },
            { label: "c", prompt: "Find the $y$-coordinates of the points where $C$ meets the vertical line $x=0$.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) centre x", answer: 3 },
              { label: "(a) centre y", answer: -2 },
              { label: "(a) radius", answer: 5 },
              { label: "(c) smaller y", answer: -6 },
              { label: "(c) larger y", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$ has centre $(a,b)$, radius $r$; substitute points to test position." },
            ],
            steps: [
              { part: "a", reasoning: "Read off centre and radius, remembering sign flips.", working: "\\text{centre }(3,-2),\\ r=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three values.", working: "(3,-2),\\ 5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $(0,2)$ into the left side.", working: "(0-3)^2+(2+2)^2=9+16=25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare with $r^2=25$ — equal, so the point is on the circle.", working: "25=25\\Rightarrow\\text{on the circle}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conclusion.", working: "\\text{on }C", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $x=0$.", working: "(0-3)^2+(y+2)^2=25\\Rightarrow(y+2)^2=16", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $y+2$.", working: "y+2=\\pm4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $y$.", working: "y=2\\ \\text{or}\\ y=-6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both values.", working: "y=-6,\\ y=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) centre $(3,-2)$, radius $5$ (b) on the circle (c) $y=-6$ and $y=2$",
            commonErrors: ["In (b) computing $(2+2)^2$ as $2^2+2^2=8$.", "In (c) writing $(y+2)^2=25-9=34$.", "Missing the negative root in (c)."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to write down the equation of a circle when you are given its centre $(a,b)$ and radius $r$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$ for centre $(a,b)$ and radius $r$." },
            ],
            steps: [
              { reasoning: "Substitute the centre coordinates into the brackets, reversing their signs.", working: "(x-a)^2+(y-b)^2", marks: 1, markCode: "M" },
              { reasoning: "Square the radius for the right-hand side.", working: "=r^2", marks: 1, markCode: "M" },
              { reasoning: "State the complete equation.", working: "(x-a)^2+(y-b)^2=r^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-a)^2+(y-b)^2=r^2$",
            commonErrors: ["Writing $(x+a)^2$ when the centre's $x$-coordinate is negative — the sign always flips."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the circle that has the line segment joining $(0,0)$ and $(6,8)$ as a diameter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "The centre is the midpoint of the diameter." },
              { kind: "formula", name: "Distance formula", statement: "The radius is half the diameter length." },
            ],
            steps: [
              { reasoning: "Centre = midpoint of $(0,0)$ and $(6,8)$.", working: "\\left(\\frac{0+6}{2},\\frac{0+8}{2}\\right)=(3,4)", marks: 1, markCode: "M" },
              { reasoning: "Diameter length = distance between endpoints.", working: "d=\\sqrt{6^2+8^2}=\\sqrt{100}=10", marks: 1, markCode: "M" },
              { reasoning: "Radius = half the diameter: $r=5$, so $r^2=25$.", working: "r=5", marks: 1, markCode: "M" },
              { reasoning: "Write the equation.", working: "(x-3)^2+(y-4)^2=25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-3)^2+(y-4)^2=25$",
            commonErrors: ["Using the full diameter 10 as the radius.", "Placing the centre at $(6,8)$ instead of the midpoint."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The circle $C$ has equation $(x-2)^2+(y-1)^2=9$.",
          parts: [
            { label: "a", prompt: "Write down the centre and radius of $C$.", marks: 2 },
            { label: "b", prompt: "Write down the equation of the horizontal line through the centre of $C$.", marks: 1 },
            { label: "c", prompt: "Find the $x$-coordinates where $C$ meets the line $y=1$.", marks: 1 },
            { label: "d", prompt: "Find the $x$-coordinates where $C$ meets the $x$-axis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$ has centre $(a,b)$ and radius $r$." },
            ],
            steps: [
              { part: "a", reasoning: "Read off centre and radius.", working: "\\text{centre }(2,1),\\ r=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", working: "(2,1),\\ 3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Horizontal line through $(2,1)$ has equation $y=1$.", working: "y=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $y=1$: $(x-2)^2=9$, so $x-2=\\pm3$.", working: "x=5\\ \\text{or}\\ x=-1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Set $y=0$: $(x-2)^2+(0-1)^2=9$, so $(x-2)^2=8$.", working: "x-2=\\pm\\sqrt{8}=\\pm2\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $x$.", working: "x=2\\pm2\\sqrt{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) centre $(2,1)$, radius $3$ (b) $y=1$ (c) $x=-1$ and $x=5$ (d) $x=2\\pm2\\sqrt{2}$",
            commonErrors: ["In (c) giving only $x=5$ — both roots required.", "In (d) writing $(x-2)^2=9$ instead of $9-1=8$."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The point $(6,8)$ is tested against the circle $x^2+y^2=25$. Where does it lie?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Outside the circle" },
              { id: "b", text: "On the circle" },
              { id: "c", text: "At the centre" },
              { id: "d", text: "Inside the circle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "Left side $>r^2$ means outside; $<r^2$ means inside; $=r^2$ means on." },
            ],
            steps: [
              { reasoning: "$6^2+8^2=36+64=100>25$.", working: "100>25\\Rightarrow\\text{outside}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Outside the circle",
            commonErrors: ["Computing $6^2+8^2=14$ and concluding 'inside'."],
          },
        },
        {
          id: "ciem-u3-circle-equation-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which equation represents the circle with centre $(-2,3)$ and radius $4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-2)^2+(y-3)^2=16$" },
              { id: "b", text: "$(x+2)^2+(y-3)^2=16$" },
              { id: "c", text: "$(x+2)^2+(y-3)^2=4$" },
              { id: "d", text: "$(x+2)^2+(y+3)^2=16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$(x-a)^2+(y-b)^2=r^2$; the signs of the centre coordinates are reversed in the brackets." },
            ],
            steps: [
              { reasoning: "Centre $(-2,3)$ gives $(x+2)^2$ and $(y-3)^2$; $r^2=16$.", working: "(x+2)^2+(y-3)^2=16", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $(x+2)^2+(y-3)^2=16$",
            commonErrors: ["Keeping the centre's signs: $(x-2)^2$ instead of $(x+2)^2$.", "Writing $=4$ instead of $r^2=16$."],
          },
        },
      ],
    },
    {
      id: "ciem-u3-tangents-distances",
      title: "Tangents and distances from the centre",
      skill: "Use the perpendicularity of tangent and radius, and distance from centre, to solve coordinate geometry problems.",
      lesson: {
        sections: [
          {
            heading: "Tangent perpendicular to radius",
            body: "A tangent touches the circle at exactly one point and is perpendicular to the radius at that point. If $P$ is on the circle and $O$ is the centre, the tangent at $P$ has gradient equal to the negative reciprocal of the gradient of $OP$.",
          },
          {
            heading: "Distance from centre to a point",
            body: "Use the distance formula $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. A point lies on the circle when this distance equals $r$; inside when less than $r$; outside when greater.",
          },
          {
            heading: "Putting it together",
            body: "Typical exam problem: circle centre $O(0,0)$ radius 10, point $P(6,8)$ on it. Show $OP=10$, find gradient of $OP$ ($\\frac{8}{6}=\\frac{4}{3}$), tangent gradient ($-\\frac{3}{4}$), then the tangent equation through $P$.",
          },
        ],
        keyFormulas: [
          { name: "Tangent condition", statement: "Tangent at $P$ is perpendicular to radius $OP$." },
          { name: "Distance", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
        ],
        workedExample: {
          problem: "Find the gradient of the tangent to the circle $x^2+y^2=100$ at the point $(6,8)$.",
          solution: "Gradient of radius $OP$ is $\\frac{8}{6}=\\frac{4}{3}$. The tangent is perpendicular, so its gradient is $-\\frac{3}{4}$.",
        },
      },
      questions: [
        {
          id: "ciem-u3-tangents-distances-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tangent to a circle at point $P$ is perpendicular to which of the following?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any chord through $P$" },
              { id: "b", text: "The radius $OP$" },
              { id: "c", text: "The $x$-axis" },
              { id: "d", text: "The tangent at a different point" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "The tangent at a point on a circle is perpendicular to the radius at that point." },
            ],
            steps: [
              { reasoning: "State the theorem.", working: "\\text{tangent} \\perp \\text{radius at }P", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The radius $OP$",
            commonErrors: ["Thinking the tangent is perpendicular to a chord."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance from the centre $(0,0)$ of a circle to the point $(5,12)$.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Apply the distance formula.", working: "d=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["Adding 5 and 12 to get 17."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A circle has centre $(1,1)$ and radius 5. Find the distance from the centre to the point $(4,5)$, and state whether the point lies on, inside or outside the circle.",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Apply the distance formula.", working: "d=\\sqrt{(4-1)^2+(5-1)^2}=\\sqrt{9+16}=\\sqrt{25}=5", marks: 1, markCode: "M" },
              { reasoning: "Compare with radius.", working: "d=r=5", marks: 1, markCode: "M" },
              { reasoning: "Conclude the point lies on the circle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$; the point lies **on** the circle",
            commonErrors: ["Comparing distance to $r^2$ instead of $r$."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle has centre $O(0,0)$ and radius 10. The point $P(6,8)$ lies on the circle.",
          parts: [
            { label: "a", prompt: "Show that $OP=10$.", marks: 2 },
            { label: "b", prompt: "Find the gradient of $OP$ and hence the gradient of the tangent at $P$.", marks: 3 },
            { label: "c", prompt: "Find the equation of the tangent at $P$ in the form $ax+by=c$ with integer coefficients.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "The tangent at $P$ is perpendicular to radius $OP$." },
              { kind: "law", name: "Perpendicular gradients", statement: "$m_1\\times m_2=-1$." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the distance formula.", working: "OP=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclude $OP=10$, equal to the radius.", working: "OP=10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient of $OP$.", working: "m_{OP}=\\frac{8-0}{6-0}=\\frac{4}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perpendicular gradient is the negative reciprocal.", working: "m_{\\perp}=-\\frac{3}{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both gradients.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use point-gradient form through $P(6,8)$ with $m=-\\frac34$.", working: "y-8=-\\frac{3}{4}(x-6)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply through by 4 and expand.", working: "4y-32=-3x+18", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange into $ax+by=c$.", working: "3x+4y=50", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verify $P$ satisfies it: $18+32=50$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $OP=10$ (b) $m_{OP}=\\frac43$, tangent gradient $-\\frac34$ (c) $3x+4y=50$",
            commonErrors: ["Using gradient $\\frac43$ for the tangent instead of $-\\frac34$.", "Sign error when rearranging to $ax+by=c$."],
            examinerNote: "Part (a) 'show that' needs the distance calculation visible.",
          },
        },
        {
          id: "ciem-u3-tangents-distances-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tangent to a circle touches the circle at point $P$. What is the angle between the tangent and the radius $OP$ at $P$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90^\\circ$" },
              { id: "b", text: "$45^\\circ$" },
              { id: "c", text: "$0^\\circ$" },
              { id: "d", text: "$180^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "A tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "The tangent is perpendicular to the radius, so the angle is $90^\\circ$.", working: "90^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $90^\\circ$",
            commonErrors: ["Answering $0^\\circ$ — confusing 'touches at one point' with the angle."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the distance between the points $(0,0)$ and $(8,15)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "23" },
              { id: "b", text: "7" },
              { id: "c", text: "$\\sqrt{23}\\approx4.8$" },
              { id: "d", text: "17" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{8^2+15^2}=\\sqrt{64+225}=\\sqrt{289}=17$.", working: "d=17", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $17$",
            commonErrors: ["Computing $\\sqrt{8+15}=\\sqrt{23}$ — forgetting to square first."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the distance between the points $(0,0)$ and $(6,-8)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "10" },
              { id: "c", text: "$\\sqrt{14}$" },
              { id: "d", text: "$-10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$; square removes the sign of $\\Delta y$." },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{6^2+(-8)^2}=\\sqrt{36+64}=\\sqrt{100}=10$.", working: "d=10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $10$",
            commonErrors: ["Computing $6-8=-2$ inside the root instead of $(-8)^2=64$."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between the points $(2,3)$ and $(5,7)$. Enter the distance.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the squared differences.", working: "\\sqrt{3^2+4^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\sqrt{25}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Using $\\sqrt{3+4}=\\sqrt{7}$."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the distance between the points $(1,-2)$ and $(-2,2)$. Enter the distance, giving your answer to 2 decimal places if necessary.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the differences: $\\Delta x=-3$, $\\Delta y=4$.", working: "\\sqrt{(-3)^2+4^2}", marks: 1, markCode: "M" },
              { reasoning: "Square each difference.", working: "=\\sqrt{9+16}=\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Writing $(-3)^2=-9$ — squaring removes the sign."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A circle has centre $(0,0)$ and radius $10$. Find the distance from the centre to the point $(6,8)$, and state whether the point lies on, inside or outside the circle.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
              { kind: "definition", name: "Circle test", statement: "Distance $=r$ means on the circle; $<r$ inside; $>r$ outside." },
            ],
            steps: [
              { reasoning: "Apply the distance formula.", working: "d=\\sqrt{6^2+8^2}=\\sqrt{100}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "d=10", marks: 1, markCode: "M" },
              { reasoning: "Compare with $r=10$: equal, so the point lies on the circle.", working: "10=10\\Rightarrow\\text{on the circle}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$d=10$; the point lies on the circle",
            commonErrors: ["Computing $6^2+8^2=14$ and answering 14."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle has centre $C(3,4)$ and radius $5$.",
          parts: [
            { label: "a", prompt: "Find the distance from $C$ to the origin $O(0,0)$.", marks: 2 },
            { label: "b", prompt: "Find the distance from $C$ to the point $D(3,10)$, and state whether $D$ is inside, on or outside the circle.", marks: 3 },
            { label: "c", prompt: "Find the distance from $C$ to the point $E(0,4)$, and state whether $E$ is inside, on or outside the circle.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) distance CO", answer: 5 },
              { label: "(b) distance CD", answer: 6 },
              { label: "(c) distance CE", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
              { kind: "definition", name: "Circle test", statement: "Distance $=r$ means on; $<r$ inside; $>r$ outside." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the distance formula to $C(3,4)$ and $O(0,0)$.", working: "CO=\\sqrt{3^2+4^2}=\\sqrt{25}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same $x$-coordinate: distance is $|10-4|=6$.", working: "CD=6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compare with $r=5$: $6>5$ so outside.", working: "6>5\\Rightarrow\\text{outside}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State distance and position.", working: "6,\\ \\text{outside}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Same $y$-coordinate: distance is $|3-0|=3$.", working: "CE=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare with $r=5$: $3<5$ so inside.", working: "3<5\\Rightarrow\\text{inside}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State distance and position.", working: "3,\\ \\text{inside}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Award for correctly applying the comparison.", working: "\\text{position stated correctly}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $5$ (b) $6$, outside (c) $3$, inside",
            commonErrors: ["Comparing distance to $r^2=25$ instead of $r=5$.", "Forgetting that smaller distance means inside."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a tangent to a circle is perpendicular to the radius at the point of contact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "A tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "A tangent touches the circle at exactly one point.", marks: 1, markCode: "M" },
              { reasoning: "If it were not perpendicular to the radius, it would cut into or away from the circle at a second point (or leave a gap).", marks: 1, markCode: "M" },
              { reasoning: "Hence perpendicularity is required for a single point of contact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The tangent must be perpendicular to the radius so that it meets the circle at exactly one point.",
            commonErrors: ["Describing the tangent as 'parallel' to the radius."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two tangents are drawn from an external point $T$ to a circle, touching it at points $P$ and $Q$. Explain why $TP=TQ$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent properties", statement: "Tangents from the same external point are equal in length." },
              { kind: "theorem", name: "Tangent-radius theorem", statement: "A tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "Join $T$ to the centre $O$: $OP=OQ=r$ and $OP\\perp TP$, $OQ\\perp TQ$, so angles $OPT$ and $OQT$ are $90^\\circ$.", marks: 1, markCode: "M" },
              { reasoning: "Triangles $OPT$ and $OQT$ share hypotenuse $OT$ and have equal legs $OP=OQ=r$.", marks: 1, markCode: "M" },
              { reasoning: "By RHS (or Pythagoras), the triangles are congruent.", marks: 1, markCode: "M" },
              { reasoning: "Corresponding sides give $TP=TQ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$TP=TQ$ — tangents from the same external point are equal.",
            commonErrors: ["Asserting $TP=TQ$ without justification — marks require the congruence argument."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A circle has centre $O$ and radius $r=6$. An external point $T$ is a distance $10$ from $O$, and $PT$ is a tangent touching the circle at $P$.",
          parts: [
            { label: "a", prompt: "State the angle between $PT$ and $OP$, with a reason.", marks: 1 },
            { label: "b", prompt: "Use Pythagoras in triangle $OPT$ to show that $PT=8$.", marks: 3 },
            { label: "c", prompt: "State the length of $PT$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "A tangent is perpendicular to the radius at the point of contact." },
              { kind: "formula", name: "Pythagoras", statement: "$a^2+b^2=c^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Tangent $PT$ is perpendicular to radius $OP$ at $P$.", working: "\\angle OPT=90^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply Pythagoras: $OT^2=OP^2+PT^2$.", working: "10^2=6^2+PT^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $PT^2$.", working: "PT^2=100-36=64", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take the positive root.", working: "PT=8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the tangent length.", working: "PT=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\angle OPT=90^\\circ$; $PT=8$",
            commonErrors: ["Computing $PT^2=100+36=136$ instead of subtracting.", "Giving $PT=\\sqrt{64}=16$ or forgetting the root."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tangent is drawn from a point $P$ to a circle of radius $5$. If $P$ is $13$ units from the centre, what is the length of the tangent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "$\\sqrt{194}\\approx13.9$" },
              { id: "c", text: "18" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "Tangent $\\perp$ radius; Pythagoras gives tangent length $\\sqrt{OP^2-r^2}$." },
            ],
            steps: [
              { reasoning: "$PT=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12$.", working: "PT=12", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $12$",
            commonErrors: ["Computing $13-5=8$ — distances must go through Pythagoras."],
          },
        },
        {
          id: "ciem-u3-tangents-distances-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A tangent from point $P$ touches a circle of radius $5$ at $T$. The tangent length $PT=12$. What is the distance $OP$ from $P$ to the centre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "17" },
              { id: "b", text: "13" },
              { id: "c", text: "7" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$OP^2=OT^2+PT^2=5^2+12^2$" },
            ],
            steps: [
              { reasoning: "$OP=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$.", working: "OP=13", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $13$",
            commonErrors: ["Adding $5+12=17$ instead of using Pythagoras."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u3-circles-notes",
      title: "Circles in coordinate geometry — revision notes",
      summary: "Circle equations, centres and radii, points on circles, tangents and distances from the centre.",
      sections: [
        {
          heading: "Circle equations",
          body: "- Centre $(0,0)$: $x^2+y^2=r^2$\n- Centre $(a,b)$: $(x-a)^2+(y-b)^2=r^2$\n\nThe right side is $r^2$, **not** $r$. For $(x-1)^2+(y-2)^2=25$: centre $(1,2)$, radius 5.\n\n**Trap:** $(y+3)$ means centre $y=-3$ — the sign inside the bracket is opposite to the centre coordinate.",
        },
        {
          heading: "Points on a circle",
          body: "A point $(x,y)$ is on the circle when substitution gives exactly $r^2$.\n\n**Worked example.** Is $(4,6)$ on $(x-1)^2+(y-2)^2=25$?\n\n$(4-1)^2+(6-2)^2=9+16=25=r^2$ — yes, on the circle.\n\nLess than $r^2$ = inside; greater = outside.",
        },
        {
          heading: "Tangents",
          body: "A tangent touches at one point and is **perpendicular to the radius** there.\n\n**Worked example.** Circle $x^2+y^2=100$, point $P(6,8)$:\n\n- $OP=\\sqrt{36+64}=10$ ✓ (confirms $P$ on circle)\n- Gradient $OP=\\frac86=\\frac43$, so tangent gradient $=-\\frac34$\n- Equation: $y-8=-\\frac34(x-6) \\Rightarrow 3x+4y=50$",
        },
        {
          heading: "Distance from centre",
          body: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Compare $d$ with $r$: equal = on, less = inside, greater = outside. This single check answers many 'show that' and position questions.",
        },
        {
          heading: "Exam technique",
          body: "- 'Show that $P$ lies on the circle': compute the distance or substitute — show every step.\n- Concentric circles keep the same centre; only $r^2$ changes.\n- When finding a tangent equation, the chain is: radius gradient → negative reciprocal → point-gradient form through $P$.",
        },
      ],
    },
  ],
};
