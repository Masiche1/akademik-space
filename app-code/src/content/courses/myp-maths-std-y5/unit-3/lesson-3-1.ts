import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypms5-u3-lesson-3-1",
  code: "3-1",
  title: "Geometry and Trigonometry",
  goal: "I CAN apply circle theorems, coordinate geometry, trigonometric ratios, and Pythagoras to solve multi-step geometry problems.",
  standards: [
    "MYP Maths: Geometry & Trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Circle theorem", definition: "Properties such as angle in semicircle = 90°, angles in same segment equal, tangent perpendicular to radius." },
    { term: "Sine rule", definition: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$ for any triangle." },
    { term: "Cosine rule", definition: "$a^2=b^2+c^2-2bc\\cos A$; also $\\cos A=\\frac{b^2+c^2-a^2}{2bc}$." },
    { term: "Area of triangle", definition: "$\\frac{1}{2}ab\\sin C$ using two sides and included angle." },
    { term: "Bearing", definition: "Angle measured clockwise from north, used in navigation problems." },
  ],
  concepts: [
    {
      id: "mypms5-u3-circle",
      title: "Circle theorems and coordinate geometry",
      skill: "Apply circle theorems and use coordinate geometry to find lengths, midpoints, and equations of lines.",
      lesson: {
        sections: [
          {
            heading: "Key circle theorems",
            body: "Angle in a semicircle = 90°. Angles in the same segment are equal. Angle at centre = 2× angle at circumference. Tangent is perpendicular to radius at point of contact. Opposite angles of cyclic quadrilateral sum to 180°.",
          },
          {
            heading: "Coordinate geometry",
            body: "Distance: $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Midpoint: $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$. Gradient: $m=\\frac{y_2-y_1}{x_2-x_1}$. Parallel: same gradient; perpendicular: negative reciprocal.",
          },
          {
            heading: "Combining geometry and coordinates",
            body: "To prove a quadrilateral is a rectangle: show diagonals are equal and bisect each other, or show adjacent sides perpendicular. To find a circle's centre: perpendicular bisectors of two chords intersect at centre.",
          },
        ],
        keyFormulas: [
          { name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
          { name: "Angle at centre", statement: "$=2\\times$ angle at circumference" },
        ],
        workedExample: {
          problem: "Find the distance between $A(1,2)$ and $B(4,6)$.",
          solution: "$d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=\\sqrt{25}=5$.",
        },
      },
      questions: [
        {
          id: "mypms5-u3-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angle subtended by an arc at the centre is 80°. What is the angle at the circumference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20°" },
              { id: "b", text: "40°" },
              { id: "c", text: "160°" },
              { id: "d", text: "80°" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Angle at circumference = half angle at centre = 40°." },
            ],
            steps: [
              { reasoning: "$\\frac{80}{2}=40$°.", working: "40^{\\circ}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 40°",
            commonErrors: ["Doubling instead of halving."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u3-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of $A(-2,4)$ and $B(6,-2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,-1)$" },
              { id: "b", text: "$(4,3)$" },
              { id: "c", text: "$(2,1)$" },
              { id: "d", text: "$(4,1)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{-2+6}{2},\\frac{4+(-2)}{2}\\right)=\\left(\\frac{4}{2},\\frac{2}{2}\\right)=(2,1)$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{-2+6}{2}=2$; $y=\\frac{4-2}{2}=1$.", working: "(2,1)", marks: 1, markCode: "M" },
              { reasoning: "State the midpoint.", working: "(2,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,1)$",
            commonErrors: ["Adding coordinates without dividing by 2."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-circ-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a circle, chord $AB$ subtends 110° at the circumference. What is the angle subtended at the centre by the same chord?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "70°" },
              { id: "b", text: "220°" },
              { id: "c", text: "110°" },
              { id: "d", text: "55°" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Centre angle = 2× circumference angle = 220° (major arc)." },
            ],
            steps: [
              { reasoning: "$2\\times110=220$° (taking major arc; minor arc would be 140°).", working: "220^{\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Consider which arc — major vs minor.", working: "220^{\\circ}", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "220^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "220° (major arc)",
            commonErrors: ["Halving instead of doubling."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-circ-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A circle has centre $O(3,-1)$ and passes through $P(6,2)$.",
          parts: [
            { label: "a", prompt: "Find the radius.", marks: 2 },
            { label: "b", prompt: "Find the equation of the circle.", marks: 2 },
            { label: "c", prompt: "Determine whether $Q(0,-1)$ lies inside, on, or outside the circle.", marks: 2 },
            { label: "d", prompt: "Find the equation of the tangent to the circle at point $P$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circle equation", statement: "$(x-h)^2+(y-k)^2=r^2$." },
            ],
            steps: [
              { part: "a", reasoning: "$r=\\sqrt{(6-3)^2+(2-(-1))^2}=\\sqrt{9+9}=\\sqrt{18}=3\\sqrt{2}$.", working: "3\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the radius.", working: "3\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute centre $(3,-1)$ and $r^2=18$ into $(x-h)^2+(y-k)^2=r^2$.", working: "(x-3)^2+(y+1)^2=18", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equation.", working: "(x-3)^2+(y+1)^2=18", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Distance $OQ=\\sqrt{(0-3)^2+(-1+1)^2}=3$; $3<3\\sqrt{2}\\approx4.24$ → inside.", working: "\\text{inside}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State position.", working: "\\text{inside}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gradient $OP=\\frac{2-(-1)}{6-3}=1$; tangent gradient $=-1$; $y-2=-(x-6)$ → $y=-x+8$.", working: "y=-x+8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the equation.", working: "y=-x+8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3\\sqrt{2}$ (b) $(x-3)^2+(y+1)^2=18$ (c) inside (d) $y=-x+8$",
            commonErrors: ["In (d), using gradient of OP instead of its negative reciprocal."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u3-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angle in a semicircle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "180°" },
              { id: "b", text: "45°" },
              { id: "c", text: "90°" },
              { id: "d", text: "60°" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angle in semicircle", statement: "The angle subtended by a diameter is 90°." }],
            steps: [{ reasoning: "Apply the theorem.", working: "90^{\\circ}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 90°",
          },
        },
        {
          id: "mypms5-u3-circ-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the distance between $(0,0)$ and $(3,4)$.",
          response: { type: "numeric", parts: [{ label: "$d$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$d=\\sqrt{3^2+4^2}=\\sqrt{25}=5$." }],
            steps: [{ reasoning: "Use Pythagoras on coordinate differences.", working: "5", marks: 1, markCode: "B" }],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u3-circ-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of $(-1,2)$ and $(5,8)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,5)$" },
              { id: "b", text: "$(2,10)$" },
              { id: "c", text: "$(3,5)$" },
              { id: "d", text: "$(6,10)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{-1+5}{2},\\frac{2+8}{2}\\right)=(2,5)$." }],
            steps: [
              { reasoning: "Average the coordinates.", working: "(2,5)", marks: 1, markCode: "M" },
              { reasoning: "State the midpoint.", working: "(2,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,5)$",
          },
        },
        {
          id: "mypms5-u3-circ-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(1,2)$ and $(4,8)$.",
          response: { type: "numeric", parts: [{ label: "$m$", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Gradient", statement: "$m=\\frac{8-2}{4-1}=\\frac63=2$." }],
            steps: [
              { reasoning: "Compute rise over run.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "mypms5-u3-circ-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $(1,1)$ and $(4,5)$.",
          response: { type: "numeric", parts: [{ label: "$d$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$d=\\sqrt{3^2+4^2}=5$." }],
            steps: [
              { reasoning: "Compute differences: $\\Delta x=3$, $\\Delta y=4$.", working: "3,4", marks: 1, markCode: "M" },
              { reasoning: "$d=\\sqrt{9+16}=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u3-circ-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A tangent to a circle touches at point $P$. What is the relationship between the tangent and the radius $OP$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are perpendicular" },
              { id: "b", text: "No fixed relationship" },
              { id: "c", text: "They make 45°" },
              { id: "d", text: "They are parallel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "Tangent", statement: "The tangent is perpendicular to the radius at the point of contact." }],
            steps: [
              { reasoning: "Recall the tangent theorem.", working: "\\text{theorem}", marks: 1, markCode: "M" },
              { reasoning: "Therefore $OP\\perp$ tangent.", working: "\\perp", marks: 1, markCode: "M" },
              { reasoning: "State the relationship.", working: "\\text{perpendicular}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perpendicular",
          },
        },
        {
          id: "mypms5-u3-circ-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A circle has centre $(0,0)$ and passes through $(6,8)$. Find its radius.",
          response: { type: "numeric", parts: [{ label: "$r$", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Radius", statement: "$r=\\sqrt{6^2+8^2}=\\sqrt{100}=10$." }],
            steps: [
              { reasoning: "Compute distance from centre to point.", working: "\\sqrt{100}", marks: 1, markCode: "M" },
              { reasoning: "$r=10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "State the radius.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
          },
        },
        {
          id: "mypms5-u3-circ-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Use circle facts and coordinate geometry.",
          parts: [
            { label: "a", prompt: "An arc subtends 70° at the centre. Find the angle at the circumference.", marks: 1 },
            { label: "b", prompt: "Find the midpoint of $(2,-3)$ and $(8,5)$.", marks: 2 },
            { label: "c", prompt: "Find the distance between $(0,0)$ and $(5,12)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Circle and coordinates", statement: "Centre angle is twice circumference angle; use midpoint and distance formulas." }],
            steps: [
              { part: "a", reasoning: "Circumference angle $=35°$.", working: "35^{\\circ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Midpoint $=(\\frac{2+8}{2},\\frac{-3+5}{2})=(5,1)$.", working: "(5,1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the midpoint.", working: "(5,1)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$d=\\sqrt{25+144}=\\sqrt{169}=13$.", working: "13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the distance.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 35° (b) $(5,1)$ (c) 13",
          },
        },
        {
          id: "mypms5-u3-circ-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has centre $(2,3)$ and radius 4. Find $r^2$ for its equation.",
          response: { type: "numeric", parts: [{ label: "$r^2$", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Circle equation", statement: "$(x-h)^2+(y-k)^2=r^2$ uses $r^2=16$." }],
            steps: [{ reasoning: "$r^2=4^2=16$.", working: "16", marks: 1, markCode: "B" }],
            finalAnswer: "$16$",
          },
        },
        {
          id: "mypms5-u3-circ-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a cyclic quadrilateral, one angle is 75°. What is the opposite angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "90°" },
              { id: "b", text: "75°" },
              { id: "c", text: "15°" },
              { id: "d", text: "105°" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles sum to 180°." }],
            steps: [
              { reasoning: "$180-75=105$.", working: "105^{\\circ}", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "105^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "105°",
          },
        },
        {
          id: "mypms5-u3-circ-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the $x$-coordinate of the midpoint of $(-4,7)$ and $(8,-5)$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Midpoint", statement: "$x=\\frac{-4+8}{2}=2$." }],
            steps: [
              { reasoning: "Average the $x$-coordinates.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the coordinate.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "mypms5-u3-circ-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to find the equation of the tangent to a circle at a point on the circle, using perpendicularity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Tangent perpendicularity", statement: "Tangent is perpendicular to radius at contact point." }],
            steps: [
              { reasoning: "Find the gradient of the radius from centre to the point.", working: "m_{OP}", marks: 1, markCode: "M" },
              { reasoning: "Tangent gradient is the negative reciprocal.", working: "m_{\\tan}=-1/m_{OP}", marks: 1, markCode: "M" },
              { reasoning: "Use point-slope form with the contact point.", working: "y-y_1=m(x-x_1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use negative reciprocal radius gradient",
          },
        },
      ],
    },
    {
      id: "mypms5-u3-trig",
      title: "Trigonometry Rules",
      skill: "Apply sine and cosine rules, area formula, and solve bearing problems.",
      lesson: {
        sections: [
          {
            heading: "When to use which rule",
            body: "**Sine rule**: two angles + one side, or two sides + non-included angle. **Cosine rule**: two sides + included angle (find third side), or three sides (find angle). **Area**: $\\frac{1}{2}ab\\sin C$ needs two sides and included angle.",
          },
          {
            heading: "Bearings",
            body: "Bearings measured clockwise from north. For triangle problems, draw carefully and find angles using bearing differences. North-west = 315°, south-east = 135°.",
          },
          {
            heading: "Ambiguous case",
            body: "Sine rule can give two solutions when given two sides and a non-included angle (SSA). Check if the supplementary angle also works: if $\\sin\\theta=k$, then $\\theta$ and $180°-\\theta$ both possible.",
          },
        ],
        keyFormulas: [
          { name: "Sine rule", statement: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$" },
          { name: "Cosine rule", statement: "$a^2=b^2+c^2-2bc\\cos A$" },
          { name: "Area", statement: "$\\frac{1}{2}ab\\sin C$" },
        ],
        workedExample: {
          problem: "Triangle has $a=8$, $b=10$, $C=40°$. Find side $c$ and area.",
          solution: "$c^2=64+100-160\\cos40°=164-122.6=41.4$; $c=6.43$. Area $=\\frac{1}{2}(8)(10)\\sin40°=25.7$.",
        },
      },
      questions: [
        {
          id: "mypms5-u3-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has sides 5, 12, 13. Is it right-angled?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot determine" },
              { id: "b", text: "No" },
              { id: "c", text: "Yes, $5^2+12^2=13^2$" },
              { id: "d", text: "Yes, but only if angle is 60°" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras", statement: "$25+144=169=13^2$ → right-angled." },
            ],
            steps: [
              { reasoning: "$5^2+12^2=25+144=169=13^2$.", working: "25+144=169", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Yes",
            commonErrors: ["Checking $5^2+13^2$ instead of $5^2+12^2$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u3-trig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a triangle with sides 6 and 8 and included angle 30°.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "48" },
              { id: "b", text: "6" },
              { id: "c", text: "12" },
              { id: "d", text: "24" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area", statement: "$\\frac{1}{2}(6)(8)\\sin30°=24\\times0.5=12$." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}\\times6\\times8\\times\\sin30°=24\\times0.5=12$.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "State the area.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Forgetting the $\\frac{1}{2}$ factor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-trig-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In triangle $ABC$, $a=10$, $b=8$, $A=50°$. Find angle $B$ using the sine rule (one decimal place).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$37.8°$ or $142.2°$" },
              { id: "b", text: "$37.8°$ only" },
              { id: "c", text: "$52.2°$" },
              { id: "d", text: "$142.2°$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Ambiguous case", statement: "SSA can give two solutions: $B$ and $180°-B$." },
            ],
            steps: [
              { reasoning: "$\\frac{\\sin B}{8}=\\frac{\\sin50°}{10}$ → $\\sin B=\\frac{8\\sin50°}{10}=0.613$.", working: "\\sin B=0.613", marks: 1, markCode: "M" },
              { reasoning: "$B=\\sin^{-1}(0.613)=37.8°$; the supplementary value $142.2°$ would make $A+B>180°$, so it is rejected.", working: "B=37.8^{\\circ}", marks: 1, markCode: "M" },
              { reasoning: "Check angle sum for both possibilities.", working: "37.8^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$B=37.8°$ (only one valid — supplementary exceeds 180°)",
            commonErrors: ["Giving both answers without checking the angle sum."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-trig-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ship sails 15 km on bearing 060°, then 20 km on bearing 150°.",
          parts: [
            { label: "a", prompt: "Draw a diagram and find the angle between the two legs of the journey.", marks: 2 },
            { label: "b", prompt: "Find the straight-line distance from start to finish.", marks: 3 },
            { label: "c", prompt: "Find the bearing of the finish point from the start.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Bearings", statement: "Angle between paths = difference in bearings adjusted for turn." },
            ],
            steps: [
              { part: "a", reasoning: "The change in bearing is $150°-60°=90°$; the interior angle at the turning point is also 90°, so the two legs are perpendicular.", working: "90^{\\circ}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", working: "90^{\\circ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$d=\\sqrt{15^2+20^2}=\\sqrt{225+400}=\\sqrt{625}=25$ km.", working: "25\\text{ km}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply Pythagoras.", working: "\\sqrt{625}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the distance.", working: "25\\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Resolve the displacement: east $=15\\sin60°+20\\sin150°\\approx23.0$ km and north $=15\\cos60°+20\\cos150°\\approx-9.8$ km. Since north is negative, bearing $=180°-\\tan^{-1}\\left(\\frac{23.0}{9.8}\\right)\\approx113°$.", working: "113^{\\circ}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute components and bearing.", working: "113^{\\circ}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bearing.", working: "113^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 90° (b) 25 km (c) 113°",
            commonErrors: ["In (c), forgetting bearings are measured from north, not east."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms5-u3-trig-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\sin 30°$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$\\frac{\\sqrt2}{2}$" },
              { id: "c", text: "$\\frac{\\sqrt3}{2}$" },
              { id: "d", text: "$\\frac12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Special angle", statement: "$\\sin30°=\\frac12$." }],
            steps: [{ reasoning: "Recall the special angle value.", working: "\\frac12", marks: 1, markCode: "B" }],
            finalAnswer: "$\\frac12$",
          },
        },
        {
          id: "mypms5-u3-trig-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\cos 60°$?",
          response: { type: "numeric", parts: [{ label: "$\\cos60°$", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Special angle", statement: "$\\cos60°=\\frac12=0.5$." }],
            steps: [{ reasoning: "Use the special angle value.", working: "0.5", marks: 1, markCode: "B" }],
            finalAnswer: "$0.5$",
          },
        },
        {
          id: "mypms5-u3-trig-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "When is the sine rule most appropriate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right-angled triangles only" },
              { id: "b", text: "Two sides and the included angle only" },
              { id: "c", text: "Two sides and a non-included angle (SSA)" },
              { id: "d", text: "Three sides only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sine rule", statement: "Useful for AAS or SSA information." }],
            steps: [
              { reasoning: "Sine rule relates sides to opposite angles.", working: "\\sin", marks: 1, markCode: "M" },
              { reasoning: "SSA is a typical sine-rule case.", working: "SSA", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two sides and a non-included angle",
          },
        },
        {
          id: "mypms5-u3-trig-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a triangle with sides 5 and 7 and included angle 90°.",
          response: { type: "numeric", parts: [{ label: "area", answer: 17.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Area", statement: "$\\frac12(5)(7)\\sin90°=17.5$." }],
            steps: [
              { reasoning: "Use $\\frac12ab\\sin C$.", working: "\\frac12\\times35\\times1", marks: 1, markCode: "M" },
              { reasoning: "Area is 17.5.", working: "17.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17.5$",
          },
        },
        {
          id: "mypms5-u3-trig-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a right triangle, two legs are 3 and 4. Find the hypotenuse.",
          response: { type: "numeric", parts: [{ label: "$c$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Pythagoras", statement: "$c=\\sqrt{3^2+4^2}=5$." }],
            steps: [
              { reasoning: "Compute $9+16=25$.", working: "25", marks: 1, markCode: "M" },
              { reasoning: "$c=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u3-trig-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A bearing of due north is written as what angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "180°" },
              { id: "b", text: "0°" },
              { id: "c", text: "360°" },
              { id: "d", text: "90°" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Bearing", statement: "Bearings are measured clockwise from north; north is 0°." }],
            steps: [
              { reasoning: "Recall bearing convention.", working: "\\text{north}=0", marks: 1, markCode: "M" },
              { reasoning: "State the bearing.", working: "0^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0°",
          },
        },
        {
          id: "mypms5-u3-trig-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A triangle has angles $A=40°$, $B=60°$. Find angle $C$.",
          response: { type: "numeric", parts: [{ label: "$C$", answer: 80, unit: "degrees" }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angle sum", statement: "Angles in a triangle sum to 180°." }],
            steps: [
              { reasoning: "$C=180-40-60=80$.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "80^{\\circ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80°$",
          },
        },
        {
          id: "mypms5-u3-trig-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Apply trigonometry.",
          parts: [
            { label: "a", prompt: "Find $\\sin 45°$.", marks: 1 },
            { label: "b", prompt: "Find the area of a triangle with sides 4 and 6 and included angle 30°.", marks: 2 },
            { label: "c", prompt: "A right triangle has legs 5 and 12. Find the hypotenuse.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Trig and area", statement: "Use special angles, area formula and Pythagoras." }],
            steps: [
              { part: "a", reasoning: "$\\sin45°=\\frac{\\sqrt2}{2}$.", working: "\\frac{\\sqrt2}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\frac12(4)(6)\\sin30°=12(0.5)=6$.", working: "6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area.", working: "6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$c=\\sqrt{25+144}=\\sqrt{169}=13$.", working: "13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the hypotenuse.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{\\sqrt2}{2}$ (b) 6 (c) 13",
          },
        },
        {
          id: "mypms5-u3-trig-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the area of a triangle with sides 8 and 10 and included angle 30°.",
          response: { type: "numeric", parts: [{ label: "area", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Area", statement: "$\\frac12(8)(10)\\sin30°=40(0.5)=20$." }],
            steps: [{ reasoning: "Compute the area.", working: "20", marks: 1, markCode: "B" }],
            finalAnswer: "$20$",
          },
        },
        {
          id: "mypms5-u3-trig-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which formula is the sine rule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a^2=b^2+c^2-2bc\\cos A$" },
              { id: "b", text: "$a+b=c$" },
              { id: "c", text: "$\\frac12ab\\sin C$" },
              { id: "d", text: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sine rule", statement: "Sides are proportional to sines of opposite angles." }],
            steps: [
              { reasoning: "Identify the sine-rule proportion.", working: "a/sinA", marks: 1, markCode: "M" },
              { reasoning: "State the formula.", working: "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}$",
          },
        },
        {
          id: "mypms5-u3-trig-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A right triangle has legs 9 and 12. Find the hypotenuse.",
          response: { type: "numeric", parts: [{ label: "$c$", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Pythagoras", statement: "$c=\\sqrt{9^2+12^2}=\\sqrt{225}=15$." }],
            steps: [
              { reasoning: "Compute $81+144=225$.", working: "225", marks: 1, markCode: "M" },
              { reasoning: "$c=15$.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$",
          },
        },
        {
          id: "mypms5-u3-trig-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain when to use the cosine rule rather than the sine rule, and give one example of the information needed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Cosine rule", statement: "Use when you have two sides and the included angle, or three sides." }],
            steps: [
              { reasoning: "Cosine rule handles included-angle or three-side cases.", working: "\\text{SAS or SSS}", marks: 1, markCode: "M" },
              { reasoning: "Sine rule is better for two angles plus a side or SSA.", working: "\\text{AAS/SSA}", marks: 1, markCode: "M" },
              { reasoning: "State the distinction clearly.", working: "\\text{cosine vs sine}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cosine rule for included angle or three sides",
          },
        },
      ],
    },
    {
      id: "mypms5-u3-stats",
      title: "Statistics and Probability",
      skill: "Calculate measures of spread, interpret cumulative frequency, analyse scatter plots, and compute combined probabilities.",
      lesson: {
        sections: [
          {
            heading: "Measures of spread",
            body: "**Range**: max - min. **Interquartile range**: Q3 - Q1. **Standard deviation**: measure of how spread data is around mean; smaller = more consistent. Use IQR to identify outliers: values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR.",
          },
          {
            heading: "Cumulative frequency and box plots",
            body: "Cumulative frequency graph shows running total; read off median (at half total), quartiles (at quarter and three-quarter), and identify outliers. Box plot shows median, quartiles, whiskers, and outliers as dots.",
          },
          {
            heading: "Scatter plots and probability",
            body: "Scatter plot: positive/negative/no correlation; line of best fit for prediction. Combined probability: $P(A\\text{ or }B)=P(A)+P(B)-P(A\\cap B)$; independent events: $P(A\\cap B)=P(A)\\times P(B)$. Tree diagrams for sequential events.",
          },
        ],
        keyFormulas: [
          { name: "IQR", statement: "$Q_3-Q_1$" },
          { name: "Outlier", statement: "$<Q_1-1.5\\text{IQR}$ or $>Q_3+1.5\\text{IQR}$" },
          { name: "Combined probability", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
        ],
        workedExample: {
          problem: "Data: 2, 4, 5, 5, 7, 8, 10. Find median, Q1, Q3, IQR.",
          solution: "Median = 5; Q1 = 4; Q3 = 8; IQR = 4.",
        },
      },
      questions: [
        {
          id: "mypms5-u3-stats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Data: 3, 7, 8, 12, 15. What is the median?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "Middle value of ordered data = 8." },
            ],
            steps: [
              { reasoning: "Ordered: 3,7,8,12,15; middle (3rd) value = 8.", working: "8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Averaging 7 and 8 instead of taking middle value."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u3-stats-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 4 red, 6 blue, 5 green balls. Find P(red or blue).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{15}$" },
              { id: "b", text: "$\\frac{10}{9}$" },
              { id: "c", text: "$\\frac{2}{5}$" },
              { id: "d", text: "$\\frac{2}{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mutually exclusive", statement: "P(red or blue) = P(red)+P(blue) = \\frac{4+6}{15}=\\frac{10}{15}=\\frac{2}{3}$." },
            ],
            steps: [
              { reasoning: "$\\frac{4}{15}+\\frac{6}{15}=\\frac{10}{15}=\\frac{2}{3}$.", working: "\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{2}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{3}$",
            commonErrors: ["Adding numerators but forgetting denominator is total balls."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-stats-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two coins are tossed. Find P(at least one head).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{3}{4}$" },
              { id: "c", text: "$\\frac{1}{4}$" },
              { id: "d", text: "$\\frac{5}{8}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complement", statement: "P(at least one head) = 1 - P(both tails) = 1-\\frac{1}{4}=\\frac{3}{4}$." },
            ],
            steps: [
              { reasoning: "Sample space: HH, HT, TH, TT; 3 of 4 have at least one head.", working: "\\frac{3}{4}", marks: 1, markCode: "M" },
              { reasoning: "Or use complement: $1-\\frac{1}{4}=\\frac{3}{4}$.", working: "1-\\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{3}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{4}$",
            commonErrors: ["Computing P(exactly one head) instead of at least one."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-stats-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Test scores: 45, 52, 58, 61, 63, 67, 70, 72, 75, 78, 80, 82, 85, 88, 90, 95.",
          parts: [
            { label: "a", prompt: "Find the median and interquartile range.", marks: 3 },
            { label: "b", prompt: "Identify any outliers using the 1.5×IQR rule.", marks: 2 },
            { label: "c", prompt: "A second class has median 70 and IQR 15. Compare the two classes.", marks: 2 },
            { label: "d", prompt: "If the top score is removed, how does the mean change?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quartiles", statement: "Q1 = median of lower half, Q3 = median of upper half." },
            ],
            steps: [
              { part: "a", reasoning: "16 values; median = average of 8th and 9th = (72+75)/2 = 73.5.", working: "73.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Q1 = median of first 8 = (61+63)/2 = 62; Q3 = median of last 8 = (85+88)/2 = 86.5; IQR = 24.5.", working: "IQR=24.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State median and IQR.", working: "73.5,\\ 24.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lower fence: $62-1.5(24.5)=62-36.75=25.25$; upper fence: $86.5+36.75=123.25$; no values outside → no outliers.", working: "\\text{no outliers}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State conclusion.", working: "\\text{no outliers}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Class 2 median (70) is lower than class 1 (73.5), but IQR 15 < 24.5 means class 2 scores are more consistent.", working: "\\text{lower median, more consistent}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State comparison.", working: "\\text{lower median, more consistent}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Removing 95: new mean = (sum-95)/15; original mean = sum/16; mean decreases since 95 > mean.", working: "\\text{mean decreases}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) median 73.5, IQR 24.5 (b) no outliers (c) class 2 more consistent (d) mean decreases",
            commonErrors: ["In (a), using all 16 values for Q1/Q3 instead of splitting halves."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypms5-u3-stats-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of 2, 4, 6.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "12" },
              { id: "c", text: "6" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "$\\frac{2+4+6}{3}=4$." }],
            steps: [{ reasoning: "Sum is 12; divide by 3.", working: "4", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 4",
          },
        },
        {
          id: "mypms5-u3-stats-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the median of 1, 3, 5, 7, 9.",
          response: { type: "numeric", parts: [{ label: "median", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Median", statement: "Middle value of ordered data." }],
            steps: [{ reasoning: "The middle (3rd) value is 5.", working: "5", marks: 1, markCode: "B" }],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u3-stats-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the range of 4, 9, 15, 7.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "8.75" },
              { id: "c", text: "35" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Range", statement: "Range $=\\max-\\min=15-4=11$." }],
            steps: [
              { reasoning: "Identify max 15 and min 4.", working: "15,4", marks: 1, markCode: "M" },
              { reasoning: "Subtract: 11.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "mypms5-u3-stats-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fair coin is tossed once. Find P(head).",
          response: { type: "numeric", parts: [{ label: "P(head)", answer: 0.5 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "One favourable outcome out of two." }],
            steps: [
              { reasoning: "$P=\\frac12=0.5$.", working: "0.5", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
          },
        },
        {
          id: "mypms5-u3-stats-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game wins 5 with probability 0.2 and loses 1 with probability 0.8. Find the expected value.",
          response: { type: "numeric", parts: [{ label: "$E$", answer: 0.2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Expected value", statement: "$E=5(0.2)+(-1)(0.8)=1-0.8=0.2$." }],
            steps: [
              { reasoning: "Compute $1-0.8$.", working: "0.2", marks: 1, markCode: "M" },
              { reasoning: "State the expected value.", working: "0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.2$",
          },
        },
        {
          id: "mypms5-u3-stats-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which statement defines the interquartile range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Q_3+Q_1$" },
              { id: "b", text: "$Q_3-Q_1$" },
              { id: "c", text: "Mean minus median" },
              { id: "d", text: "Max minus min" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "IQR", statement: "IQR is the difference between upper and lower quartiles." }],
            steps: [
              { reasoning: "Recall quartile definitions.", working: "Q_3,Q_1", marks: 1, markCode: "M" },
              { reasoning: "IQR $=Q_3-Q_1$.", working: "Q_3-Q_1", marks: 1, markCode: "M" },
              { reasoning: "State the definition.", working: "Q_3-Q_1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q_3-Q_1$",
          },
        },
        {
          id: "mypms5-u3-stats-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two fair dice are rolled. How many ordered outcomes give a sum of 9?",
          response: { type: "numeric", parts: [{ label: "outcomes", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Counting", statement: "Pairs: (3,6),(4,5),(5,4),(6,3)." }],
            steps: [
              { reasoning: "List pairs summing to 9.", working: "(3,6),(4,5),(5,4),(6,3)", marks: 1, markCode: "M" },
              { reasoning: "Count them: 4.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "State the count.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "mypms5-u3-stats-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Analyse data and probability.",
          parts: [
            { label: "a", prompt: "Find the mean of 10, 20, 30, 40.", marks: 1 },
            { label: "b", prompt: "Find the median of 2, 4, 6, 8.", marks: 1 },
            { label: "c", prompt: "A bag has 3 red and 2 blue balls. Find P(blue).", marks: 2 },
            { label: "d", prompt: "State one measure of spread and how it is found.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Statistics", statement: "Mean uses sum/count; probability uses favourable/total." }],
            steps: [
              { part: "a", reasoning: "Mean $=\\frac{100}{4}=25$.", working: "25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Median $=\\frac{4+6}{2}=5$.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(blue)=\\frac25=0.4$.", working: "0.4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", working: "0.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "E.g. range $=\\max-\\min$ or IQR $=Q_3-Q_1$.", working: "\\text{spread}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25 (b) 5 (c) 0.4 (d) range or IQR",
          },
        },
        {
          id: "mypms5-u3-stats-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of 10, 20, 30, 40.",
          response: { type: "numeric", parts: [{ label: "mean", answer: 25 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "Sum 100 divided by 4." }],
            steps: [{ reasoning: "$\\frac{100}{4}=25$.", working: "25", marks: 1, markCode: "B" }],
            finalAnswer: "$25$",
          },
        },
        {
          id: "mypms5-u3-stats-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scatter plot shows points rising from left to right with a clear linear pattern. What type of correlation is shown?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Negative correlation" },
              { id: "b", text: "Causation is proven" },
              { id: "c", text: "Positive correlation" },
              { id: "d", text: "No correlation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Correlation", statement: "Rising trend indicates positive correlation." }],
            steps: [
              { reasoning: "As $x$ increases, $y$ tends to increase.", working: "\\text{rising}", marks: 1, markCode: "M" },
              { reasoning: "State positive correlation.", working: "\\text{positive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Positive correlation",
          },
        },
        {
          id: "mypms5-u3-stats-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 3 red and 2 blue balls. Find P(not red).",
          response: { type: "numeric", parts: [{ label: "P(not red)", answer: 0.4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Complement", statement: "P(not red) = P(blue) = $\\frac25=0.4$." }],
            steps: [
              { reasoning: "Non-red balls are the 2 blue balls.", working: "2/5", marks: 1, markCode: "M" },
              { reasoning: "Probability is 0.4.", working: "0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4$",
          },
        },
        {
          id: "mypms5-u3-stats-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the 1.5×IQR rule is used to identify outliers, and state the two fences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Outlier rule", statement: "Fences are $Q_1-1.5\\,\\text{IQR}$ and $Q_3+1.5\\,\\text{IQR}$." }],
            steps: [
              { reasoning: "Compute IQR $=Q_3-Q_1$.", working: "IQR", marks: 1, markCode: "M" },
              { reasoning: "Lower fence $=Q_1-1.5\\,\\text{IQR}$; upper fence $=Q_3+1.5\\,\\text{IQR}$.", working: "\\text{fences}", marks: 1, markCode: "M" },
              { reasoning: "Values outside the fences are outliers.", working: "\\text{outliers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outside $Q_1-1.5\\,\\text{IQR}$ or $Q_3+1.5\\,\\text{IQR}$",
          },
        },
      ],
    },
  ],
};
