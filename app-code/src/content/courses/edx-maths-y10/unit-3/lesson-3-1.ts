import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edm10-u3-lesson-3-1",
  code: "3-1",
  title: "Polygons and Circle Theorems",
  goal: "I CAN find unknown angles in polygons and circles and give a correct geometrical reason for each step.",
  standards: ["4MA1 4.1", "4MA1 4.2", "4MA1 4.7H"],
  vocabulary: [
    { term: "Interior angle", definition: "An angle inside a polygon, between two adjacent sides." },
    { term: "Exterior angle", definition: "The angle between one side of a polygon and the extension of the adjacent side. The exterior angles of any polygon add up to $360^\\circ$." },
    { term: "Regular polygon", definition: "A polygon with all sides equal and all interior angles equal." },
    { term: "Cyclic quadrilateral", definition: "A quadrilateral whose four vertices all lie on the circumference of a circle." },
    { term: "Tangent", definition: "A straight line that touches a circle at exactly one point. It is perpendicular to the radius at that point." },
    { term: "Chord", definition: "A straight line joining two points on the circumference of a circle." },
    { term: "Alternate segment", definition: "The segment of a circle on the opposite side of a chord from the angle between a tangent and that chord." },
  ],
  concepts: [
    {
      id: "edm10-u3-polygon-angles",
      title: "Angles in polygons with reasons",
      skill: "Use interior and exterior angle sums, and the properties of regular polygons, to find angles and give reasons.",
      lesson: {
        sections: [
          {
            heading: "Interior and exterior angles",
            body: "A polygon with $n$ sides can be split into $n-2$ triangles from one vertex, so the interior angles add up to $(n-2)\\times 180^\\circ$. At each vertex, the interior and exterior angles lie on a straight line, so they add up to $180^\\circ$. The exterior angles of any polygon always add up to $360^\\circ$.",
          },
          {
            heading: "Regular polygons",
            body: "In a regular polygon with $n$ sides, every exterior angle equals $\\frac{360^\\circ}{n}$ and every interior angle equals $180^\\circ-\\frac{360^\\circ}{n}$. To find the number of sides, work out the exterior angle first and divide it into $360^\\circ$. The result must be a whole number, otherwise no such regular polygon exists.",
          },
          {
            heading: "Giving reasons",
            body: "In Edexcel questions, each angle statement needs a reason in words, such as 'angles in a triangle add up to $180^\\circ$', 'base angles of an isosceles triangle are equal' or 'exterior angles of a polygon add up to $360^\\circ$'. Write the reason straight after each angle you find.",
          },
        ],
        keyFormulas: [
          { name: "Sum of interior angles", statement: "$(n-2)\\times 180^\\circ$" },
          { name: "Exterior angle of a regular polygon", statement: "$\\frac{360^\\circ}{n}$" },
          { name: "Interior plus exterior", statement: "$\\text{interior}+\\text{exterior}=180^\\circ$" },
        ],
        workedExample: {
          problem: "Work out the size of one interior angle of a regular decagon (10 sides).",
          solution: "Exterior angle $=\\frac{360}{10}=36^\\circ$. Interior angle $=180-36=144^\\circ$. Check: $(10-2)\\times180=1440$ and $1440\\div10=144$.",
        },
      },
      questions: [
        {
          id: "edm10-u3-polygon-angles-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "What is the sum of the interior angles of a hexagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$540^\\circ$" },
              { id: "b", text: "$720^\\circ$" },
              { id: "c", text: "$360^\\circ$" },
              { id: "d", text: "$900^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior angle sum", statement: "The interior angles of an $n$-sided polygon add up to $(n-2)\\times180^\\circ$." }],
            steps: [
              { reasoning: "A hexagon has 6 sides, so substitute $n=6$.", working: "(6-2)\\times180", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4\\times180=720", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $720^\\circ$",
            commonErrors: ["Using $n-1$ triangles and getting $900^\\circ$.", "Using $n-3$ triangles and getting $540^\\circ$."],
          },
        },
        {
          id: "edm10-u3-polygon-angles-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Each interior angle of a regular polygon is $156^\\circ$. Work out the number of sides of the polygon.",
          response: { type: "numeric", parts: [{ label: "Number of sides", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Interior and exterior angles", statement: "Interior angle + exterior angle $=180^\\circ$ at each vertex." },
              { kind: "theorem", name: "Exterior angle sum", statement: "The exterior angles of a polygon add up to $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Find the exterior angle from the straight line at a vertex.", working: "180-156=24", marks: 1, markCode: "M" },
              { reasoning: "All exterior angles are equal and add up to $360^\\circ$, so divide.", working: "360\\div24", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ sides",
            commonErrors: ["Dividing $360$ by the interior angle $156$.", "Dividing $180$ by the exterior angle."],
            examinerNote: "Award M1 for $360\\div(180-156)$ oe. Full marks for 15 cao.",
          },
        },
        {
          id: "edm10-u3-polygon-angles-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A pentagon has interior angles of $x^\\circ$, $(x+10)^\\circ$, $2x^\\circ$, $(2x+20)^\\circ$ and $120^\\circ$.\n\nWork out the size of the largest interior angle of the pentagon.",
          response: { type: "numeric", parts: [{ label: "Largest angle (degrees)", answer: 150, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior angle sum", statement: "The interior angles of a pentagon add up to $(5-2)\\times180^\\circ=540^\\circ$." }],
            steps: [
              { reasoning: "State the angle sum for a pentagon.", working: "(5-2)\\times180=540", marks: 1, markCode: "B" },
              { reasoning: "Form and simplify an equation by adding all five angles.", working: "x+(x+10)+2x+(2x+20)+120=540 \\Rightarrow 6x+150=540", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "6x=390 \\Rightarrow x=65", marks: 1, markCode: "A" },
              { reasoning: "The angles are $65, 75, 130, 150, 120$. The largest is $2x+20$.", working: "2(65)+20=150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150^\\circ$",
            commonErrors: ["Using $360^\\circ$ as the angle sum.", "Stopping at $x=65$ without finding the largest angle."],
          },
        },
        {
          id: "edm10-u3-polygon-angles-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "$ABCDEFGH$ is a regular octagon. The diagonal $AC$ is drawn.",
          parts: [
            { label: "a", prompt: "Work out the size of one interior angle of the octagon.", marks: 2 },
            { label: "b", prompt: "Work out the size of angle $BAC$. Give a reason for each step.", marks: 2 },
            { label: "c", prompt: "Work out the size of angle $CAH$. Give a reason for your answer.", marks: 2 },
            { label: "d", prompt: "Explain why there is no regular polygon with an interior angle of $130^\\circ$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Exterior angle sum", statement: "Exterior angles of a polygon add up to $360^\\circ$." },
              { kind: "property", name: "Isosceles triangle", statement: "Base angles of an isosceles triangle are equal." },
              { kind: "theorem", name: "Angle sum of a triangle", statement: "Angles in a triangle add up to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Exterior angle of a regular octagon.", working: "360\\div8=45", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Interior angle is on a straight line with the exterior angle.", working: "180-45=135", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Triangle $ABC$ is isosceles with $AB=BC$ and angle $ABC=135^\\circ$, so the base angles are equal and the angles add up to $180^\\circ$.", working: "(180-135)\\div2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "22.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angle $HAB=135^\\circ$ is split by $AC$ into angles $BAC$ and $CAH$.", working: "135-22.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and state the reason (angles at a point on a vertex add up to the interior angle).", working: "112.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The exterior angle would be $180-130=50^\\circ$, and the number of sides would be $360\\div50$.", working: "360\\div50=7.2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The number of sides must be a whole number, but 7.2 is not, so no such regular polygon exists.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $135^\\circ$ (b) $22.5^\\circ$ (c) $112.5^\\circ$ (d) $360\\div50=7.2$ is not a whole number.",
            commonErrors: ["Forgetting that triangle $ABC$ is isosceles.", "Giving angle answers without reasons."],
            examinerNote: "In (b) and (c) a reason is needed for the final A mark: oe wording is accepted.",
          },
        },
      ],
    },
    {
      id: "edm10-u3-circle-theorems",
      title: "Circle theorems with reasons",
      skill: "Apply the circle theorems to find angles and give the correct reason for each step.",
      lesson: {
        sections: [
          {
            heading: "Angles in circles",
            body: "The angle at the centre is twice the angle at the circumference when both stand on the same arc. The angle in a semicircle is $90^\\circ$. Angles in the same segment, standing on the same chord, are equal. Opposite angles of a cyclic quadrilateral add up to $180^\\circ$.",
          },
          {
            heading: "Tangents",
            body: "A tangent is perpendicular to the radius at the point of contact. Two tangents drawn from the same external point are equal in length, which makes the triangle formed with the two points of contact isosceles. The angle between a tangent and a chord equals the angle in the alternate segment.",
          },
          {
            heading: "Writing the reason",
            body: "Always name the theorem in full, for example 'the angle at the centre is twice the angle at the circumference'. Mark equal radii on the diagram: they create isosceles triangles with equal base angles, which many questions rely on.",
          },
        ],
        keyFormulas: [
          { name: "Centre and circumference", statement: "$\\text{angle at centre}=2\\times\\text{angle at circumference}$" },
          { name: "Cyclic quadrilateral", statement: "$\\text{opposite angles}=180^\\circ$" },
          { name: "Semicircle", statement: "$\\text{angle in a semicircle}=90^\\circ$" },
        ],
        workedExample: {
          problem: "$A$, $B$, $C$ lie on a circle with centre $O$. Angle $ACB=41^\\circ$. Work out angle $AOB$.",
          solution: "The angle at the centre is twice the angle at the circumference (both stand on arc $AB$). Angle $AOB=2\\times41=82^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm10-u3-circle-theorems-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "$A$, $B$ and $C$ are points on the circumference of a circle with centre $O$. Angle $ACB=35^\\circ$ and both angles stand on the arc $AB$. What is the size of angle $AOB$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$70^\\circ$" },
              { id: "b", text: "$17.5^\\circ$" },
              { id: "c", text: "$145^\\circ$" },
              { id: "d", text: "$35^\\circ$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angle at the centre", statement: "The angle at the centre is twice the angle at the circumference on the same arc." }],
            steps: [
              { reasoning: "Double the angle at the circumference.", working: "2\\times35", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $70^\\circ$",
            commonErrors: ["Halving instead of doubling, giving $17.5^\\circ$.", "Using $180-35=145$."],
          },
        },
        {
          id: "edm10-u3-circle-theorems-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "$ABCD$ is a cyclic quadrilateral. Angle $ABC=112^\\circ$.\n\nWork out the size of angle $ADC$ and give a reason for your answer.",
          response: { type: "numeric", parts: [{ label: "Angle ADC (degrees)", answer: 68, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles in a cyclic quadrilateral add up to $180^\\circ$." }],
            steps: [
              { reasoning: "$B$ and $D$ are opposite vertices, so the angles sum to $180^\\circ$.", working: "180-112", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "68", marks: 1, markCode: "A" },
              { reasoning: "State the reason: opposite angles of a cyclic quadrilateral add up to $180^\\circ$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$68^\\circ$, because opposite angles of a cyclic quadrilateral add up to $180^\\circ$.",
            commonErrors: ["Using the angle at the centre rule.", "Omitting the reason."],
          },
        },
        {
          id: "edm10-u3-circle-theorems-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "$O$ is the centre of a circle. $PA$ and $PB$ are tangents to the circle at $A$ and $B$. Angle $APB=40^\\circ$.\n\nWork out the size of angle $OAB$.",
          response: { type: "numeric", parts: [{ label: "Angle OAB (degrees)", answer: 20, unit: "°" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Equal tangents", statement: "Tangents from an external point are equal in length." },
              { kind: "theorem", name: "Tangent and radius", statement: "A tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "$PA=PB$, so triangle $PAB$ is isosceles with equal base angles.", working: "(180-40)\\div2=70", marks: 1, markCode: "M" },
              { reasoning: "Angle $PAB=70^\\circ$.", marks: 1, markCode: "A" },
              { reasoning: "Angle $OAP=90^\\circ$ because the tangent is perpendicular to the radius.", working: "90-70", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20^\\circ$",
            commonErrors: ["Assuming angle $OAB=70^\\circ$.", "Forgetting the $90^\\circ$ between tangent and radius."],
            examinerNote: "Alternative: quadrilateral $OAPB$ gives $AOB=140^\\circ$, then base angles $(180-140)\\div2=20$. Accept oe.",
          },
        },
        {
          id: "edm10-u3-circle-theorems-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "$A$, $B$, $C$ and $D$ lie, in that order, on a circle with centre $O$. $AC$ is a diameter of the circle. Angle $CAB=32^\\circ$. The tangent to the circle at $C$ is drawn, and it meets the line $AB$ extended at $T$.",
          parts: [
            { label: "a", prompt: "Work out the size of angle $ABC$. Give a reason.", marks: 2 },
            { label: "b", prompt: "Work out the size of angle $ACB$.", marks: 2 },
            { label: "c", prompt: "Work out the size of angle $ADB$. Give a reason.", marks: 2 },
            { label: "d", prompt: "Write down the size of angle $TCB$ and give a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle in a semicircle", statement: "The angle in a semicircle is $90^\\circ$." },
              { kind: "theorem", name: "Angles in the same segment", statement: "Angles in the same segment standing on the same chord are equal." },
              { kind: "theorem", name: "Alternate segment theorem", statement: "The angle between a tangent and a chord equals the angle in the alternate segment." },
            ],
            steps: [
              { part: "a", reasoning: "$AC$ is a diameter and $B$ is on the circumference.", working: "ABC=90^\\circ", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Reason: the angle in a semicircle is $90^\\circ$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Angles in triangle $ABC$ add up to $180^\\circ$.", working: "180-90-32", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "58", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Angles $ADB$ and $ACB$ stand on chord $AB$ in the same segment.", working: "ADB=58^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reason: angles in the same segment are equal.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Angle between tangent $CT$ and chord $CB$ equals the angle in the alternate segment, $CAB$.", working: "TCB=32^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reason: alternate segment theorem.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $90^\\circ$ (b) $58^\\circ$ (c) $58^\\circ$ (d) $32^\\circ$",
            commonErrors: ["Using the wrong chord for the same-segment theorem.", "Naming the angle in the wrong segment in (d)."],
            examinerNote: "Reasons must be correct for the B marks. Wording such as 'angles in the same segment' is accepted oe.",
          },
        },
      ],
    },
  ],
};
