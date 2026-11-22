import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypms4-u3-lesson-3-1",
  code: "3-1",
  title: "Geometry and Coordinate Geometry",
  goal: "I CAN use circle theorems, find distances and midpoints on the coordinate plane, and calculate gradients.",
  standards: [
    "MYP Maths: Geometry and trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Radius", definition: "A line from the centre of a circle to its circumference; all radii are equal." },
    { term: "Chord", definition: "A straight line joining two points on a circle's circumference." },
    { term: "Tangent", definition: "A line that touches a circle at exactly one point; perpendicular to the radius at that point." },
    { term: "Perpendicular bisector", definition: "A line that cuts a line segment at 90° through its midpoint." },
    { term: "Midpoint", definition: "The point exactly halfway along a line segment." },
    { term: "Distance formula", definition: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
  ],
  concepts: [
    {
      id: "mypms4-u3-circles",
      title: "Circle geometry",
      skill: "Apply circle theorems about angles, tangents and chords.",
      lesson: {
        sections: [
          {
            heading: "Angle in a semicircle",
            body: "The **angle in a semicircle** is always 90°: if $AB$ is a diameter and $C$ is any point on the circumference, then $\\angle ACB=90°$.",
          },
          {
            heading: "Angles at the centre and circumference",
            body: "The **angle at the centre** is twice the **angle at the circumference** subtended by the same arc. If the centre angle is 100°, the circumference angle is 50°.",
          },
          {
            heading: "Tangents and chords",
            body: "A tangent is perpendicular to the radius at the point of contact. The two tangents from an external point are equal in length. The perpendicular from the centre to a chord bisects the chord.",
          },
        ],
        keyFormulas: [
          { name: "Semicircle", statement: "Angle in a semicircle = $90°$" },
          { name: "Centre vs circumference", statement: "Centre angle = 2 × circumference angle" },
          { name: "Tangent", statement: "Tangent ⊥ radius at point of contact" },
        ],
        workedExample: {
          problem: "Points $A$, $B$, $C$ lie on a circle with $AB$ as diameter. $\\angle CAB=35°$. Find $\\angle ABC$.",
          solution: "Angle in a semicircle: $\\angle ACB=90°$. Triangle angles sum to 180°: $\\angle ABC=180-90-35=55°$.",
        },
      },
      questions: [
        {
          id: "mypms4-u3-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angle in a semicircle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$180°$" },
              { id: "b", text: "$45°$" },
              { id: "c", text: "$90°$" },
              { id: "d", text: "Depends on the circle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Semicircle theorem", statement: "Angle in a semicircle = $90°$." },
            ],
            steps: [
              { reasoning: "The angle subtended by a diameter is always $90°$.", working: "90°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $90°$",
            commonErrors: ["Thinking it depends on the circle size."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u3-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An angle at the centre is 80°. What is the angle at the circumference subtended by the same arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20°$" },
              { id: "b", text: "$160°$" },
              { id: "c", text: "$40°$" },
              { id: "d", text: "$80°$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre-circumference", statement: "Centre angle = 2 × circumference angle." },
            ],
            steps: [
              { reasoning: "Circumference angle = $\\frac{80}{2}=40°$.", working: "40°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "40°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40°$",
            commonErrors: ["Doubling instead of halving."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A tangent touches a circle at point $T$. The radius to $T$ has length 5 cm. What is the angle between the tangent and the radius at $T$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90°$" },
              { id: "b", text: "$0°$" },
              { id: "c", text: "Cannot be determined" },
              { id: "d", text: "$45°$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius", statement: "Tangent is perpendicular to radius at point of contact." },
            ],
            steps: [
              { reasoning: "Tangent ⊥ radius, so angle = $90°$.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "Radius length is irrelevant to the angle.", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "90°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90°$",
            commonErrors: ["Using the radius length to compute an angle."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a circle, $AB$ is a diameter and $C$ is on the circumference. $\\angle BAC=40°$.",
          parts: [
            { label: "a", prompt: "Find $\\angle ACB$.", marks: 1 },
            { label: "b", prompt: "Find $\\angle ABC$.", marks: 2 },
            { label: "c", prompt: "The centre is $O$. Find $\\angle AOC$ (the angle at the centre subtended by arc $AC$).", marks: 3 },
            { label: "d", prompt: "Explain why $\\angle AOC$ is twice $\\angle ABC$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Semicircle", statement: "Angle in a semicircle = $90°$." },
              { kind: "theorem", name: "Centre-circumference", statement: "Centre angle = 2 × circumference angle." },
            ],
            steps: [
              { part: "a", reasoning: "Angle in a semicircle: $\\angle ACB=90°$.", working: "90°", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Angles in triangle sum to 180°: $\\angle ABC=180-90-40=50°$.", working: "50°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", working: "50°", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Arc $AC$ subtends $\\angle ABC=50°$ at circumference.", working: "\\angle ABC=50°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Centre angle = $2\\times50=100°$.", working: "\\angle AOC=100°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "100°", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Centre angle is twice the circumference angle for the same arc.", working: "\\text{centre}=2\\times\\text{circumference}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Both subtend arc $AC$.", working: "\\text{same arc }AC", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90°$ (b) $50°$ (c) $100°$ (d) centre angle is double the circumference angle for the same arc",
            commonErrors: ["In (c), using $\\angle BAC$ instead of $\\angle ABC$ as the circumference angle."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypms4-u3-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tangent touches a circle at point $T$. Which statement is true?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tangent is perpendicular to the radius at $T$" },
              { id: "b", text: "The tangent bisects the radius at $T$" },
              { id: "c", text: "The tangent is parallel to the radius at $T$" },
              { id: "d", text: "The tangent passes through the centre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius", statement: "Tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "By the tangent theorem, tangent $\\perp$ radius at $T$.", working: "\\perp", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The tangent is perpendicular to the radius at $T$",
            commonErrors: ["Confusing 'touches at one point' with parallel."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms4-u3-circ-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle at the centre of a circle is 120°. What is the angle at the circumference subtended by the same arc?",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 60, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre-circumference", statement: "Circumference angle $=\\frac{1}{2}$ centre angle." },
            ],
            steps: [
              { reasoning: "$\\frac{120}{2}=60°$.", working: "60°", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$60°$",
            commonErrors: ["Doubling instead of halving."],
            examinerNote: "B1 for 60.",
          },
        },
        {
          id: "mypms4-u3-circ-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two tangents are drawn to a circle from an external point $P$, touching at $T_1$ and $T_2$. What can you say about $PT_1$ and $PT_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$PT_1=PT_2$" },
              { id: "b", text: "No relationship" },
              { id: "c", text: "$PT_1+PT_2$ equals the diameter" },
              { id: "d", text: "$PT_1=2PT_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangents from a point", statement: "The two tangents from an external point are equal in length." },
            ],
            steps: [
              { reasoning: "Tangents from the same external point are equal: $PT_1=PT_2$.", working: "PT_1=PT_2", marks: 1, markCode: "M" },
              { reasoning: "Select the correct statement.", working: "PT_1=PT_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$PT_1=PT_2$",
            commonErrors: ["Thinking the tangents sum to the diameter."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An angle at the centre is 70°. Find the angle at the circumference subtended by the same arc.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 35, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre-circumference", statement: "Centre angle = 2 × circumference angle." },
            ],
            steps: [
              { reasoning: "$\\frac{70}{2}=35°$.", working: "35°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "35°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35°$",
            commonErrors: ["Halving incorrectly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The perpendicular from the centre of a circle to a chord always...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "passes through the circumference at two points" },
              { id: "b", text: "is parallel to the chord" },
              { id: "c", text: "equals the chord's length" },
              { id: "d", text: "bisects the chord" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Chord bisector", statement: "The perpendicular from the centre to a chord bisects the chord." },
            ],
            steps: [
              { reasoning: "By the chord theorem, it bisects the chord.", working: "\\text{bisects}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct answer.", working: "\\text{bisects the chord}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** bisects the chord",
            commonErrors: ["Confusing with the perpendicular bisector of a segment."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$AB$ is a diameter of a circle and $C$ is on the circumference. $\\angle CAB=30°$. Find $\\angle ABC$.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 60, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Semicircle", statement: "Angle in a semicircle $\\angle ACB=90°$." },
            ],
            steps: [
              { reasoning: "$\\angle ACB=90°$ (angle in a semicircle).", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "Angles in triangle sum to 180°: $\\angle ABC=180-90-30=60°$.", working: "60°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "60°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60°$",
            commonErrors: ["Forgetting the semicircle angle is 90°."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An angle at the centre is 140°. Find the angle at the circumference subtended by the same arc.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 70, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre-circumference", statement: "Circumference angle = half the centre angle." },
            ],
            steps: [
              { reasoning: "$\\frac{140}{2}=70°$.", working: "70°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "70°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70°$",
            commonErrors: ["Halving incorrectly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "$AB$ is a diameter and $C$ is on the circumference. Given $\\angle ABC=25°$, find $\\angle BAC$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\angle BAC$", answer: 65, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Semicircle", statement: "$\\angle ACB=90°$; triangle angles sum to 180°." },
            ],
            steps: [
              { reasoning: "$\\angle ACB=90°$ (angle in a semicircle).", working: "90°", marks: 1, markCode: "M" },
              { reasoning: "$\\angle BAC=180-90-25=65°$.", working: "65°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "65°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65°$",
            commonErrors: ["Using $\\angle ABC$ where $\\angle ACB$ is needed."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "$AB$ is a diameter of a circle with centre $O$, and $C$ is on the circumference. $\\angle CAB=35°$.",
          parts: [
            { label: "a", prompt: "State the theorem that gives $\\angle ACB$.", marks: 1 },
            { label: "b", prompt: "Find $\\angle ABC$.", marks: 2 },
            { label: "c", prompt: "Find $\\angle AOC$, the angle at the centre subtended by arc $AC$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Semicircle", statement: "Angle in a semicircle = $90°$." },
              { kind: "theorem", name: "Centre-circumference", statement: "Centre angle = 2 × circumference angle for the same arc." },
            ],
            steps: [
              { part: "a", reasoning: "Angle in a semicircle theorem: angle subtended by a diameter is $90°$.", working: "\\text{semicircle theorem}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\angle ACB=90°$; angles sum to 180°: $\\angle ABC=180-90-35=55°$.", working: "55°", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the angle.", working: "55°", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Arc $AC$ subtends $\\angle ABC=55°$ at the circumference.", working: "55°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Centre angle $=2\\times55=110°$.", working: "110°", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "110°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) angle in a semicircle (b) $55°$ (c) $110°$",
            commonErrors: ["In (c), using $\\angle BAC$ instead of $\\angle ABC$ as the circumference angle."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms4-u3-circ-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A tangent $PT$ touches a circle of radius 5 cm at $T$. The distance from $P$ to the centre $O$ is 13 cm. Find the length of $PT$.",
          response: {
            type: "numeric",
            parts: [{ label: "$PT$", answer: 12, unit: "cm" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius", statement: "Tangent $\\perp$ radius, so $\\triangle OTP$ is right-angled at $T$." },
            ],
            steps: [
              { reasoning: "$\\triangle OTP$ is right-angled: $OT=5$, $OP=13$, hypotenuse $OP$.", working: "OT=5,\\ OP=13", marks: 1, markCode: "M" },
              { reasoning: "$PT=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12$ cm.", working: "\\sqrt{144}=12", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "12\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ cm",
            commonErrors: ["Using $OT$ as the hypotenuse."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the angle in a semicircle is always 90°, using the fact that radii to the same point are equal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Semicircle", statement: "Angle in a semicircle = $90°$." },
            ],
            steps: [
              { reasoning: "Let $AB$ be the diameter and $C$ on the circumference; $OA=OB=OC$ (radii).", working: "OA=OB=OC", marks: 1, markCode: "M" },
              { reasoning: "Triangles $OAC$ and $OBC$ are isosceles, so base angles are equal; the angles at $C$ sum to half of the straight angle $180°$ at $O$.", working: "\\text{isosc. triangles}", marks: 1, markCode: "M" },
              { reasoning: "Therefore $\\angle ACB=\\frac{180°}{2}=90°$.", working: "90°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The two isosceles triangles formed by the radii make $\\angle ACB$ half of the straight angle at the centre, so it is always $90°$.",
            commonErrors: ["No justification using equal radii."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-circ-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An angle at the centre of a circle is 110°. What is the angle at the circumference subtended by the same arc?",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 55, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre-circumference", statement: "Circumference angle = half the centre angle." },
            ],
            steps: [
              { reasoning: "$\\frac{110}{2}=55°$.", working: "55°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "55°", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "55°", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$55°$",
            commonErrors: ["Doubling to get $220°$."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypms4-u3-coords",
      title: "Coordinate geometry",
      skill: "Calculate distance, midpoint and gradient between points, and find equations of lines.",
      lesson: {
        sections: [
          {
            heading: "Distance and midpoint",
            body: "The **distance** between $(x_1,y_1)$ and $(x_2,y_2)$ is $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ — this comes from Pythagoras. The **midpoint** is $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$.",
          },
          {
            heading: "Gradient",
            body: "Gradient $m=\\frac{y_2-y_1}{x_2-x_1}$. A **horizontal line** has gradient 0; a **vertical line** has undefined gradient. Parallel lines share the same gradient; perpendicular lines have gradients multiplying to $-1$.",
          },
          {
            heading: "Equation of a line",
            body: "Given a point and gradient, use $y-y_1=m(x-x_1)$ or rearrange to $y=mx+c$. Given two points, find $m$ first, then substitute one point to find $c$.",
          },
        ],
        keyFormulas: [
          { name: "Distance", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
        ],
        workedExample: {
          problem: "Find the distance and midpoint between $A(1,2)$ and $B(7,10)$.",
          solution: "Distance: $\\sqrt{(7-1)^2+(10-2)^2}=\\sqrt{36+64}=\\sqrt{100}=10$. Midpoint: $\\left(\\frac{1+7}{2},\\frac{2+10}{2}\\right)=(4,6)$.",
        },
      },
      questions: [
        {
          id: "mypms4-u3-coord-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the midpoint of $(2,4)$ and $(8,10)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(6,7)$" },
              { id: "b", text: "$(5,6)$" },
              { id: "c", text: "$(5,7)$" },
              { id: "d", text: "$(4,7)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "Average the coordinates." },
            ],
            steps: [
              { reasoning: "$\\left(\\frac{2+8}{2},\\frac{4+10}{2}\\right)=(5,7)$.", working: "(5,7)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(5,7)$",
            commonErrors: ["Adding without dividing by 2."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u3-coord-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $(0,0)$ and $(6,8)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "48" },
              { id: "c", text: "$\\sqrt{14}$" },
              { id: "d", text: "14" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{36+64}=\\sqrt{100}=10$.", working: "\\sqrt{100}=10", marks: 1, markCode: "M" },
              { reasoning: "State the distance.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Forgetting the square root."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the equation of the line through $(2,3)$ and $(6,11)$ in the form $y=mx+c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4x-5$" },
              { id: "b", text: "$y=x+1$" },
              { id: "c", text: "$y=2x-1$" },
              { id: "d", text: "$y=2x+1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{11-3}{6-2}=2$." },
            ],
            steps: [
              { reasoning: "$m=2$; substitute $(2,3)$: $3=4+c$, $c=-1$.", working: "m=2,\\ c=-1", marks: 1, markCode: "M" },
              { reasoning: "Verify with $(6,11)$: $2(6)-1=11$. ✓", working: "2(6)-1=11", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=2x-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x-1$",
            commonErrors: ["Sign error when solving for $c$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Points $A(1,2)$, $B(5,6)$ and $C(7,2)$ form a triangle.",
          parts: [
            { label: "a", prompt: "Find the midpoint of $AB$.", marks: 2 },
            { label: "b", prompt: "Find the length of $AB$.", marks: 2 },
            { label: "c", prompt: "Find the gradient of $AB$ and of $AC$.", marks: 2 },
            { label: "d", prompt: "Determine whether triangle $ABC$ is right-angled, justifying your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "Average coordinates." },
              { kind: "formula", name: "Distance", statement: "Pythagoras in coordinates." },
              { kind: "principle", name: "Perpendicular", statement: "Gradients multiply to $-1$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\left(\\frac{1+5}{2},\\frac{2+6}{2}\\right)=(3,4)$.", working: "(3,4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the midpoint.", working: "(3,4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$AB=\\sqrt{(5-1)^2+(6-2)^2}=\\sqrt{16+16}=\\sqrt{32}=4\\sqrt{2}$.", working: "4\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the length.", working: "4\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$m_{AB}=\\frac{6-2}{5-1}=1$; $m_{AC}=\\frac{2-2}{7-1}=0$.", working: "m_{AB}=1,\\ m_{AC}=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both gradients.", working: "1\\text{ and }0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For a right angle, some pair of side gradients must multiply to $-1$.", working: "m_1m_2=-1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$m_{BC}=\\frac{2-6}{7-5}=-2$; products are $1\\times0=0$, $1\\times(-2)=-2$, $0\\times(-2)=0$ — none equals $-1$, so the triangle is not right-angled.", working: "\\text{no product }=-1", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(3,4)$ (b) $4\\sqrt{2}$ (c) $m_{AB}=1$, $m_{AC}=0$ (d) not right-angled — no pair of gradients multiplies to $-1$",
            commonErrors: ["Only checking one pair of sides."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 R1 for (d).",
          },
        },
        {
          id: "mypms4-u3-coord-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the midpoint of $(0,0)$ and $(4,8)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4,8)$" },
              { id: "b", text: "$(2,8)$" },
              { id: "c", text: "$(2,4)$" },
              { id: "d", text: "$(0,4)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "Average the coordinates." },
            ],
            steps: [
              { reasoning: "$\\left(\\frac{0+4}{2},\\frac{0+8}{2}\\right)=(2,4)$.", working: "(2,4)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $(2,4)$",
            commonErrors: ["Adding without dividing by 2."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms4-u3-coord-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the distance between $(0,0)$ and $(3,4)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$d$", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{9+16}=\\sqrt{25}=5$.", working: "\\sqrt{25}=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Adding 3 and 4 to get 7."],
            examinerNote: "B1 for 5.",
          },
        },
        {
          id: "mypms4-u3-coord-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between $(1,1)$ and $(4,5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25" },
              { id: "b", text: "5" },
              { id: "c", text: "$\\sqrt{7}$" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
            ],
            steps: [
              { reasoning: "$d=\\sqrt{(4-1)^2+(5-1)^2}=\\sqrt{9+16}=\\sqrt{25}$.", working: "\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "$d=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Forgetting to take the square root."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of $(-2,6)$ and $(4,-2)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$-coordinate", answer: 1 }, { label: "$y$-coordinate", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "Average each coordinate separately." },
            ],
            steps: [
              { reasoning: "$x=\\frac{-2+4}{2}=1$; $y=\\frac{6+(-2)}{2}=2$.", working: "(1,2)", marks: 1, markCode: "M" },
              { reasoning: "State both coordinates.", working: "x=1,\\ y=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1,2)$",
            commonErrors: ["Sign error when averaging the negative coordinates."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the gradient of the line $y=-4x+9$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-4" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "4" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear form", statement: "In $y=mx+c$, $m$ is the gradient." },
            ],
            steps: [
              { reasoning: "$m=-4$.", working: "m=-4", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4$",
            commonErrors: ["Dropping the negative sign."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the equation of the line through $(0,0)$ and $(6,-3)$ in the form $y=mx+c$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=-\\frac{1}{2}x+3$" },
              { id: "b", text: "$y=-6x+3$" },
              { id: "c", text: "$y=2x$" },
              { id: "d", text: "$y=-\\frac{1}{2}x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{-3-0}{6-0}=-\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "$m=-\\frac{1}{2}$; through $(0,0)$ means $c=0$.", working: "m=-\\frac{1}{2},\\ c=0", marks: 1, markCode: "M" },
              { reasoning: "Verify with $(6,-3)$: $-\\frac{1}{2}\\times6=-3$. ✓", working: "y=-\\frac{1}{2}x", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=-\\frac{1}{2}x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-\\frac{1}{2}x$",
            commonErrors: ["Inverting the gradient to get $-2$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(2,3)$ and $(8,9)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$m$", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
            ],
            steps: [
              { reasoning: "$m=\\frac{9-3}{8-2}=\\frac{6}{6}=1$.", working: "m=1", marks: 1, markCode: "M" },
              { reasoning: "State the gradient.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=1$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the line segment joining $(1,-2)$ and $(7,4)$, find the midpoint and the gradient.",
          response: {
            type: "numeric",
            parts: [{ label: "Midpoint $x$-coordinate", answer: 4 }, { label: "Midpoint $y$-coordinate", answer: 1 }, { label: "Gradient", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint and gradient", statement: "Midpoint averages coordinates; gradient $=\\frac{\\Delta y}{\\Delta x}$." },
            ],
            steps: [
              { reasoning: "Midpoint: $\\left(\\frac{1+7}{2},\\frac{-2+4}{2}\\right)=(4,1)$.", working: "(4,1)", marks: 1, markCode: "M" },
              { reasoning: "Gradient: $m=\\frac{4-(-2)}{7-1}=\\frac{6}{6}=1$.", working: "m=1", marks: 1, markCode: "M" },
              { reasoning: "State both results.", working: "(4,1),\\ m=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Midpoint $(4,1)$, gradient $1$",
            commonErrors: ["Sign error on $-2$ in the midpoint $y$-coordinate."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Points $A(0,0)$, $B(6,0)$ and $C(3,4)$ form a triangle.",
          parts: [
            { label: "a", prompt: "Find the midpoint of $AC$.", marks: 2 },
            { label: "b", prompt: "Find the length of $AC$.", marks: 2 },
            { label: "c", prompt: "Determine whether triangle $ABC$ is right-angled, justifying your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "Average coordinates." },
              { kind: "formula", name: "Distance", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
              { kind: "principle", name: "Perpendicular", statement: "Right angle requires two gradients multiplying to $-1$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\left(\\frac{0+3}{2},\\frac{0+4}{2}\\right)=(1.5,2)$.", working: "(1.5,2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the midpoint.", working: "(1.5,2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$AC=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.", working: "5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the length.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$m_{AB}=0$, $m_{AC}=\\frac{4}{3}$, $m_{BC}=\\frac{4-0}{3-6}=-\\frac{4}{3}$; no pair of gradients multiplies to $-1$.", working: "\\text{no product }=-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Therefore the triangle is not right-angled.", working: "\\text{not right-angled}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(1.5,2)$ (b) $5$ (c) not right-angled — no pair of gradients multiplies to $-1$",
            commonErrors: ["Checking only one pair of sides."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 R1 for (c).",
          },
        },
        {
          id: "mypms4-u3-coord-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A line passes through $(1,5)$ with gradient $-2$. Find the value of $y$ when $x=4$.",
          response: {
            type: "numeric",
            parts: [{ label: "$y$", answer: -1 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point and gradient", statement: "Find $c$ first, then substitute $x=4$." },
            ],
            steps: [
              { reasoning: "$5=-2(1)+c$, so $c=7$; equation $y=-2x+7$.", working: "y=-2x+7", marks: 1, markCode: "M" },
              { reasoning: "At $x=4$: $y=-2(4)+7=-1$.", working: "y=-1", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-1$",
            commonErrors: ["Sign error when solving for $c$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the distance formula $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ follows from Pythagoras' theorem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "Horizontal and vertical differences form the two legs of a right triangle." },
            ],
            steps: [
              { reasoning: "The horizontal distance is $x_2-x_1$ and the vertical distance is $y_2-y_1$.", working: "\\Delta x,\\ \\Delta y", marks: 1, markCode: "M" },
              { reasoning: "These are perpendicular, forming a right triangle with hypotenuse $d$.", working: "\\text{right triangle}", marks: 1, markCode: "M" },
              { reasoning: "Pythagoras gives $d^2=(x_2-x_1)^2+(y_2-y_1)^2$, so $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.", working: "d=\\sqrt{\\Delta x^2+\\Delta y^2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The coordinate differences are the legs of a right triangle; Pythagoras gives the hypotenuse (distance) formula.",
            commonErrors: ["No geometric justification."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms4-u3-coord-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these points lies on the line $y=3x-4$? State the coordinates of the point.",
          response: {
            type: "numeric",
            parts: [{ label: "$x$", answer: 2 }, { label: "$y$", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point on a line", statement: "A point lies on the line if substituting its coordinates satisfies the equation." },
            ],
            steps: [
              { reasoning: "Check (a): $3(2)-4=2$. ✓", working: "3(2)-4=2", marks: 1, markCode: "M" },
              { reasoning: "Check others: $(4,6)$: $3(4)-4=8\\ne6$; $(1,1)$: $3(1)-4=-1\\ne1$; $(5,10)$: $3(5)-4=11\\ne10$.", working: "\\text{fail}", marks: 1, markCode: "M" },
              { reasoning: "Only $(2,2)$ satisfies the equation.", working: "(2,2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(2,2)$",
            commonErrors: ["Choosing (d) — $3(5)-4=11$, not 10."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
