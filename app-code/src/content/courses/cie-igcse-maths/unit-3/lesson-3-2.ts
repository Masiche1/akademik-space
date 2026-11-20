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
              { id: "a", text: "$5$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$\\sqrt{25}$ only, not a number" },
              { id: "d", text: "$12.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circle equation", statement: "$x^2+y^2=r^2$; the right side is $r^2$, not $r$." },
            ],
            steps: [
              { reasoning: "Take the square root of 25.", working: "r=\\sqrt{25}=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
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
              { id: "a", text: "The radius $OP$" },
              { id: "b", text: "The tangent at a different point" },
              { id: "c", text: "The $x$-axis" },
              { id: "d", text: "Any chord through $P$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "The tangent at a point on a circle is perpendicular to the radius at that point." },
            ],
            steps: [
              { reasoning: "State the theorem.", working: "\\text{tangent} \\perp \\text{radius at }P", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The radius $OP$",
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
