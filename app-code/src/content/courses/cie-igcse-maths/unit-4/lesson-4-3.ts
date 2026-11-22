import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ciem-u4-lesson-4-3",
  code: "4-3",
  title: "Circle Theorems",
  goal: "I CAN apply circle theorems: angle at centre is twice angle at circumference, angles in the same segment are equal, opposite angles of a cyclic quadrilateral sum to 180 degrees, and the tangent is perpendicular to the radius.",
  standards: ["0580 4.7", "0580 4.8"],
  vocabulary: [
    { term: "Circumference", definition: "The curved boundary of a circle; the set of all points at distance $r$ from the centre." },
    { term: "Chord", definition: "A straight line joining two points on the circumference." },
    { term: "Tangent", definition: "A line touching the circle at exactly one point; perpendicular to the radius at that point." },
    { term: "Segment", definition: "The region between a chord and the circumference." },
    { term: "Cyclic quadrilateral", definition: "A quadrilateral whose four vertices all lie on a circle." },
  ],
  concepts: [
    {
      id: "ciem-u4-circle-angles",
      title: "Angles in circles",
      skill: "Apply theorems relating angles at the centre, circumference, in segments and in cyclic quadrilaterals.",
      lesson: {
        sections: [
          {
            heading: "Angle at the centre",
            body: "The **angle at the centre is twice the angle at the circumference** subtended by the same arc. If arc $AB$ subtends $70^\\circ$ at the circumference, it subtends $140^\\circ$ at the centre — provided both angles stand on the **same arc** $AB$.",
          },
          {
            heading: "Angles in the same segment",
            body: "Angles subtended by the same chord from the **same segment** (same side of the chord) are equal. Angles in **opposite segments** are supplementary (sum to $180^\\circ$).",
          },
          {
            heading: "Cyclic quadrilaterals",
            body: "Opposite angles of a cyclic quadrilateral sum to $180^\\circ$. The exterior angle of a cyclic quadrilateral equals the interior **opposite** angle.",
          },
        ],
        keyFormulas: [
          { name: "Centre vs circumference", statement: "$\\angle\\text{ at centre} = 2 \\times \\angle\\text{ at circumference}$ (same arc)" },
          { name: "Same segment", statement: "Angles subtended by the same chord in the same segment are equal" },
          { name: "Cyclic quadrilateral", statement: "Opposite angles sum to $180^\\circ$" },
        ],
        workedExample: {
          problem: "Chord $AB$ subtends an angle of $48^\\circ$ at a point $C$ on the major arc. Find the angle subtended at the centre.",
          solution: "Angle at centre $=2\\times48^\\circ=96^\\circ$, standing on the same arc $AB$.",
        },
      },
      questions: [
        {
          id: "ciem-u4-circle-angles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An arc subtends an angle of $35^\\circ$ at the circumference. What is the angle subtended at the centre by the same arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17.5^\\circ$" },
              { id: "b", text: "$70^\\circ$" },
              { id: "c", text: "$140^\\circ$" },
              { id: "d", text: "$35^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre angle", statement: "Angle at centre $=2\\times$ angle at circumference for the same arc." },
            ],
            steps: [
              { reasoning: "Double the circumference angle.", working: "2\\times35^\\circ=70^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $70^\\circ$",
            commonErrors: ["Halving instead of doubling."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a cyclic quadrilateral, one angle is $105^\\circ$. Find the opposite angle.",
          response: { type: "numeric", parts: [{ label: "Opposite angle", answer: 75, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles of a cyclic quadrilateral sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Apply the theorem.", working: "180^\\circ-105^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=75^\\circ", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75^\\circ$",
            commonErrors: ["Subtracting from $360^\\circ$ (that's for angles at a point)."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Points $A$, $B$, $C$ and $D$ lie on a circle in that order. Angle $BAC=40^\\circ$ and angle $ABD=65^\\circ$. Find angle $BCD$.",
          response: { type: "numeric", parts: [{ label: "Angle BCD", answer: 115, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angles in same segment", statement: "Angles subtended by chord $BC$ from the same segment are equal." },
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Angle $BDC$ equals angle $BAC$ (same segment, chord $BC$).", working: "\\angle BDC=40^\\circ", marks: 1, markCode: "M" },
              { reasoning: "In triangle $BCD$, angles sum to $180^\\circ$.", working: "\\angle BCD=180^\\circ-65^\\circ-40^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=75^\\circ", marks: 1, markCode: "A" },
              { reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75^\\circ$",
            commonErrors: ["Using $360^\\circ$ somewhere or assuming $ABCD$ is a rectangle."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "$O$ is the centre of a circle and $A$, $B$, $C$ are points on the circumference. Angle $AOB=84^\\circ$ where $O$ is the centre.",
          parts: [
            { label: "a", prompt: "Find angle $ACB$, the angle subtended by chord $AB$ at the circumference.", marks: 3 },
            { label: "b", prompt: "Point $D$ is on the major arc $AB$. Find angle $ADB$.", marks: 2 },
            { label: "c", prompt: "Explain why angle $ACB$ and angle $ADB$ are equal.", marks: 2 },
            { label: "d", prompt: "If $OA=OB=5$ cm, find the length of chord $AB$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Centre angle", statement: "Angle at centre $=2\\times$ angle at circumference for the same arc." },
              { kind: "theorem", name: "Same segment", statement: "Angles in the same segment are equal." },
              { kind: "formula", name: "Chord length", statement: "$AB=2r\\sin\\frac{\\theta}{2}$ or use the isosceles triangle $OAB$." },
            ],
            steps: [
              { part: "a", reasoning: "Angle at centre is twice angle at circumference for arc $AB$.", working: "\\angle ACB=\\frac{84^\\circ}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute.", working: "=42^\\circ", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State the answer.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Angles in the same segment (both on major arc $AB$) are equal.", working: "\\angle ADB=\\angle ACB", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "=42^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both angles are subtended by the same chord $AB$ from the same segment.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the theorem.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Triangle $OAB$ is isosceles with $OA=OB=5$ and vertex angle $84^\\circ$; drop perpendicular from $O$ to $AB$ bisecting both angle and chord.", working: "AB=2\\times5\\sin42^\\circ", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compute.", working: "=10\\times0.6691\\approx6.69", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the length.", working: "AB\\approx6.69\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $42^\\circ$ (b) $42^\\circ$ (c) same segment theorem (d) $\\approx6.69$ cm",
            commonErrors: ["In (a) doubling instead of halving.", "In (d) forgetting that the perpendicular from centre bisects the chord."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An arc subtends an angle of $70^\\circ$ at the centre of a circle. What is the angle subtended at the circumference by the same arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$35^\\circ$" },
              { id: "b", text: "$140^\\circ$" },
              { id: "c", text: "$70^\\circ$" },
              { id: "d", text: "$20^\\circ$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "The angle at the centre is twice the angle at the circumference subtended by the same arc." },
            ],
            steps: [
              { reasoning: "Circumference angle $=\\frac{1}{2}\\times70^\\circ=35^\\circ$.", working: "35^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $35^\\circ$",
            commonErrors: ["Doubling to get $140^\\circ$ — the centre angle is the larger one."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a cyclic quadrilateral, one angle is $115^\\circ$. Find the opposite angle.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$245^\\circ$" },
              { id: "b", text: "$75^\\circ$" },
              { id: "c", text: "$115^\\circ$" },
              { id: "d", text: "$65^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles of a cyclic quadrilateral sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "Opposite angle $=180^\\circ-115^\\circ=65^\\circ$.", working: "65^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $65^\\circ$",
            commonErrors: ["Answering $115^\\circ$ — opposite angles are supplementary, not equal."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two angles subtend the same arc of a circle. One angle is at the centre and one at the circumference. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The centre angle is twice the circumference angle" },
              { id: "b", text: "They are equal" },
              { id: "c", text: "The circumference angle is twice the centre angle" },
              { id: "d", text: "They sum to $180^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Angle at centre $=2\\times$ angle at circumference for the same arc." },
            ],
            steps: [
              { reasoning: "By the angle-at-centre theorem, the centre angle is double.", working: "\\text{centre}=2\\times\\text{circumference}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** The centre angle is twice the circumference angle",
            commonErrors: ["Confusing this with angles in the same segment, which are equal."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An arc subtends an angle of $48^\\circ$ at the circumference of a circle. Find the angle subtended at the centre by the same arc. Enter the angle in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle", answer: 96, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Centre angle $=2\\times$ circumference angle for the same arc." },
            ],
            steps: [
              { reasoning: "Double the circumference angle.", working: "2\\times48^\\circ=96^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "96^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96^\\circ$",
            commonErrors: ["Halving instead of doubling to get $24^\\circ$."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a cyclic quadrilateral $ABCD$, angle $A=80^\\circ$ and angle $B=100^\\circ$. Find angle $C$. Enter the angle in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle C", answer: 100, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "$C$ is opposite $A$: $C=180^\\circ-80^\\circ$.", working: "C=100^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Check with $B$: $D=180^\\circ-100^\\circ=80^\\circ$ and $A+C=80+100=180^\\circ$ ✓.", working: "\\text{consistent}", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "100^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100^\\circ$",
            commonErrors: ["Finding $D$ instead of $C$ — read which angle is opposite which."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Points $A$, $B$ and $C$ lie on a circle with centre $O$. Angle $AOB=100^\\circ$ where $O$ is the centre. Find angle $ACB$, the angle subtended at the circumference. Enter the angle in degrees.",
          response: { type: "numeric", parts: [{ label: "Angle ACB", answer: 50, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Centre angle $=2\\times$ circumference angle for the same arc $AB$." },
            ],
            steps: [
              { reasoning: "Angles $AOB$ and $ACB$ subtend the same arc $AB$.", working: "\\text{same arc }AB", marks: 1, markCode: "M" },
              { reasoning: "Halve the centre angle.", working: "ACB=\\frac{100^\\circ}{2}=50^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "50^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50^\\circ$",
            commonErrors: ["Doubling to get $200^\\circ$ — the centre angle is the double."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "$O$ is the centre of a circle and $A$, $B$, $C$, $D$ are points on the circumference in order. Angle $AOB=80^\\circ$ (centre angle for arc $AB$) and angle $BCD=110^\\circ$.",
          parts: [
            { label: "a", prompt: "Find angle $ACB$, the angle subtended by arc $AB$ at the circumference.", marks: 2 },
            { label: "b", prompt: "Find angle $BAD$ using the cyclic quadrilateral property.", marks: 2 },
            { label: "c", prompt: "Find angle $ADC$.", marks: 3 },
            { label: "d", prompt: "Verify that the angles of quadrilateral $ABCD$ sum to $360^\\circ$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) angle ACB", answer: 40, unit: "degrees" },
              { label: "(b) angle BAD", answer: 70, unit: "degrees" },
              { label: "(c) angle ADC", answer: 140, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Centre angle $=2\\times$ circumference angle for the same arc." },
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "$ACB$ subtends arc $AB$ at the circumference; halve the centre angle.", working: "ACB=\\frac{80^\\circ}{2}=40^\\circ", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the angle.", working: "40^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$BAD$ is opposite $BCD$ in cyclic quadrilateral $ABCD$.", working: "BAD=180^\\circ-110^\\circ", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=70^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First find $ABC$ from triangle $ABC$: angles $BAC=70^\\circ$ and $ACB=40^\\circ$, so $ABC=180^\\circ-70^\\circ-40^\\circ=70^\\circ$.", working: "ABC=70^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$ADC$ is opposite $ABC$ in the cyclic quadrilateral: $ADC=180^\\circ-70^\\circ=110^\\circ$.", working: "ADC=110^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "110^\\circ", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the four interior angles of $ABCD$: $70^\\circ+70^\\circ+110^\\circ+110^\\circ$.", working: "70+70+110+110", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The sum is $360^\\circ$, confirming the angles are consistent.", working: "=360^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40^\\circ$ (b) $70^\\circ$ (c) $110^\\circ$",
            commonErrors: ["In (c) using the wrong opposite angle — $ADC$ is opposite $ABC$, not $BCD$."],
            examinerNote: "Part (d) verification: $40+70+110+110=330$? Recheck — correct sum should be $360^\\circ$: $ACB$ is part of angle $BCD$? Angles: $BAD=70$, $ABC=70$, $BCD=110$, $CDA=110$ sums to $360$ ✓. $ACB=40$ is an interior split, not a quadrilateral angle.",
          },
        },
        {
          id: "ciem-u4-circle-angles-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between the angle at the centre and the angle at the circumference when both subtend the same arc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Centre angle $=2\\times$ circumference angle for the same arc." },
            ],
            steps: [
              { reasoning: "Both angles stand on the same arc but from different positions — centre vs circumference.", marks: 1, markCode: "M" },
              { reasoning: "The centre angle is always twice the circumference angle.", marks: 1, markCode: "M" },
              { reasoning: "This holds only when both subtend the same arc; different arcs give unrelated angles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The centre angle is twice the circumference angle for the same arc.",
            commonErrors: ["Claiming the angles are always equal — that is the same-segment theorem for two circumference angles."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Points $A$, $B$, $C$ and $D$ lie on a circle in that order. Angle $BAC=35^\\circ$ and angle $ABD=80^\\circ$. Find angle $BCD$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angles in the same segment", statement: "Angles subtended by the same chord from the same segment are equal." },
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles sum to $180^\\circ$." },
            ],
            steps: [
              { reasoning: "$BAC$ and $BDC$ subtend chord $BC$ from the same segment, so $BDC=BAC=35^\\circ$.", working: "BDC=35^\\circ", marks: 1, markCode: "M" },
              { reasoning: "In triangle $BCD$: $BCD=180^\\circ-35^\\circ-80^\\circ$.", working: "BCD=180-35-80", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=65^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "65^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^\\circ$",
            commonErrors: ["Assuming $BCD=180^\\circ-35^\\circ-80^\\circ$ directly without first finding $BDC$ via the same-segment theorem."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "$ABCD$ is a cyclic quadrilateral. Angle $A=2x^\\circ$, angle $C=3x^\\circ$ and angle $B=110^\\circ$.",
          parts: [
            { label: "a", prompt: "Form an equation using the opposite angles of the cyclic quadrilateral.", marks: 2 },
            { label: "b", prompt: "Solve for $x$.", marks: 2 },
            { label: "c", prompt: "Find angle $D$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cyclic quadrilateral", statement: "Opposite angles sum to $180^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "$A$ and $C$ are opposite: $2x+3x=180$.", working: "2x+3x=180", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "5x=180", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "x=36", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State $x$.", working: "x=36", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$D$ is opposite $B$: $D=180^\\circ-110^\\circ=70^\\circ$.", working: "D=70^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5x=180$ (b) $x=36$ (c) $D=70^\\circ$",
            commonErrors: ["Using $A+B=180$ — $A$ is opposite $C$, not $B$."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two angles subtend the same chord $XY$ of a circle, with both vertices on the major arc. What can you say about the two angles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing can be said" },
              { id: "b", text: "One is twice the other" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "They sum to $180^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Same segment theorem", statement: "Angles in the same segment subtended by the same chord are equal." },
            ],
            steps: [
              { reasoning: "Both vertices lie on the same arc (major), so the angles are in the same segment — equal.", working: "\\text{equal}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** They are equal",
            commonErrors: ["Answering 'sum to $180^\\circ$' — that applies to opposite angles of a cyclic quadrilateral, i.e. vertices on opposite arcs."],
          },
        },
        {
          id: "ciem-u4-circle-angles-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a circle, the angle at the centre subtended by an arc is $120^\\circ$. What is the angle at the circumference subtended by the **major** arc (the rest of the circle)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120^\\circ$" },
              { id: "b", text: "$240^\\circ$" },
              { id: "c", text: "$60^\\circ$" },
              { id: "d", text: "$30^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle at centre", statement: "Centre angle $=2\\times$ circumference angle for the same arc; the major arc has centre angle $360^\\circ-120^\\circ=240^\\circ$." },
            ],
            steps: [
              { reasoning: "The vertex on the major arc intercepts the minor arc. Minor arc centre angle $=120^\\circ$, so the circumference angle $=\\frac{120^\\circ}{2}=60^\\circ$.", working: "60^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $60^\\circ$",
            commonErrors: ["Answering $120^\\circ$ — halving $240^\\circ$ is wrong because the inscribed angle intercepts the opposite (minor) arc."],
            examinerNote: "An angle at the circumference equals half the angle at the centre subtended by the same arc — here the vertex on the major arc intercepts the minor arc with centre angle $120^\\circ$.",
          },
        },
      ],
    },
    {
      id: "ciem-u4-tangents",
      title: "Tangents and circle properties",
      skill: "Use the tangent-radius perpendicularity and the equal-tangent lengths from an external point.",
      lesson: {
        sections: [
          {
            heading: "Tangent perpendicular to radius",
            body: "A tangent touches the circle at exactly one point $T$. The radius $OT$ is **perpendicular** to the tangent at $T$, so angle $OTP=90^\\circ$. This lets you use Pythagoras in triangle $OTP$.",
          },
          {
            heading: "Two tangents from a point",
            body: "If two tangents are drawn from an external point $P$ to a circle, touching at $A$ and $B$, then $PA=PB$. Also $OP$ bisects angle $APB$ and angle $AOB$.",
          },
          {
            heading: "Combining with other theorems",
            body: "Tangent problems often combine the $90^\\circ$ tangent-radius angle with Pythagoras or angle sums. Look for right-angled triangles formed by the tangent, radius and centre.",
          },
        ],
        keyFormulas: [
          { name: "Tangent-radius", statement: "$OT \\perp$ tangent at $T$" },
          { name: "Two tangents", statement: "$PA=PB$ from external point $P$" },
          { name: "Pythagoras in tangent triangle", statement: "$PT^2+r^2=OP^2$" },
        ],
        workedExample: {
          problem: "A tangent from $P$ touches the circle (centre $O$, radius $5$ cm) at $T$. $OP=13$ cm. Find $PT$.",
          solution: "Triangle $OTP$ is right-angled at $T$: $PT=\\sqrt{13^2-5^2}=\\sqrt{144}=12$ cm.",
        },
      },
      questions: [
        {
          id: "ciem-u4-tangents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tangent touches a circle at point $T$. What is the angle between the tangent and the radius $OT$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60^\\circ$" },
              { id: "b", text: "$0^\\circ$" },
              { id: "c", text: "$90^\\circ$" },
              { id: "d", text: "$45^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius", statement: "The radius to the point of contact is perpendicular to the tangent." },
            ],
            steps: [
              { reasoning: "State the theorem.", working: "90^\\circ", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $90^\\circ$",
            commonErrors: ["Assuming the tangent is parallel to the radius."],
          },
        },
        {
          id: "ciem-u4-tangents-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "From an external point $P$, two tangents $PA$ and $PB$ are drawn to a circle. $PA=9$ cm. Find $PB$.",
          response: { type: "numeric", parts: [{ label: "PB", answer: 9, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Equal tangents", statement: "Tangents from the same external point are equal in length." },
            ],
            steps: [
              { reasoning: "Apply the theorem.", working: "PB=PA", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "=9\\text{ cm}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$9$ cm",
            commonErrors: ["Trying to compute with Pythagoras unnecessarily."],
          },
        },
        {
          id: "ciem-u4-tangents-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circle has centre $O$ and radius $6$ cm. A tangent from $P$ touches at $T$, and $OP=10$ cm. Find the length of $PT$.",
          response: { type: "numeric", parts: [{ label: "PT", answer: 8, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius", statement: "$OT \\perp PT$, so triangle $OTP$ is right-angled at $T$." },
              { kind: "formula", name: "Pythagoras", statement: "$PT^2=OP^2-OT^2$" },
            ],
            steps: [
              { reasoning: "Set up Pythagoras in right-angled triangle $OTP$.", working: "PT^2=10^2-6^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=100-36=64", marks: 1, markCode: "M" },
              { reasoning: "Square root.", working: "PT=8", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ cm",
            commonErrors: ["Adding squares instead of subtracting (using $OP$ as a leg)."],
          },
        },
        {
          id: "ciem-u4-tangents-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "From point $P$, tangents $PA$ and $PB$ touch a circle (centre $O$) at $A$ and $B$. $PA=PB=12$ cm and $AB=14.4$ cm.",
          parts: [
            { label: "a", prompt: "Explain why $OP$ is the perpendicular bisector of $AB$.", marks: 3 },
            { label: "b", prompt: "Find $OA$, the radius of the circle.", marks: 3 },
            { label: "c", prompt: "Find $OP$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Equal tangents", statement: "$PA=PB$ from external point." },
              { kind: "theorem", name: "Tangent-radius", statement: "$OA \\perp PA$ and $OB \\perp PB$." },
            ],
            steps: [
              { part: "a", reasoning: "Triangles $OAP$ and $OBP$ are congruent (RHS: right angles at $A$ and $B$, common hypotenuse $OP$, equal sides $OA=OB$).", working: "\\triangle OAP \\cong \\triangle OBP", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Therefore $AP=BP$ and angle $APO=$ angle $BPO$, so $OP$ bisects angle $APB$.", working: "OP\\text{ bisects }\\angle APB", marks: 1, markCode: "M" },
              { part: "a", reasoning: "In isosceles triangle $APB$, the bisector from $P$ is also the perpendicular bisector of $AB$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Let $M$ be the midpoint of $AB$, so $AM=7.2$ cm. In right-angled triangle $AMP$, $PM=\\sqrt{12^2-7.2^2}=\\sqrt{92.16}=9.6$ cm.", working: "PM=\\sqrt{144-51.84}=9.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Since $OA=OB$, $O$ also lies on the perpendicular bisector of $AB$, so $O$, $M$, $P$ are collinear with $OM \\perp AB$. Let $OM=x$; then $x^2+7.2^2=r^2$ and $(x+9.6)^2=r^2+12^2$.", working: "x^2+51.84=r^2,\\ (x+9.6)^2=r^2+144", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solving gives $x=5.4$ and hence $r^2=5.4^2+51.84=81$, so $OA=9$ cm.", working: "OA=9\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$O$, $M$ and $P$ are collinear with $M$ between $O$ and $P$.", working: "OP=OM+MP", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute $OM=5.4$ and $PM=9.6$.", working: "OP=5.4+9.6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute and verify: $OP=15$ cm, and $\\sqrt{OA^2+PA^2}=\\sqrt{81+144}=15$ ✓.", working: "OP=15\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) explained (b) $OA=9$ cm (c) $OP=15$ cm",
            commonErrors: ["In (b) assuming triangle $OMP$ is right-angled — $O$, $M$ and $P$ are collinear, so it is degenerate.", "Using $AB=14.4$ as $AM$ instead of halving it."],
            examinerNote: "Accept the direct route: from $OA^2=OM^2+AM^2$ and $OP^2=OA^2+PA^2$ with $OP=OM+PM$ and $PM=9.6$, solving yields $OA=9$, $OP=15$.",
          },
        },
        {
          id: "ciem-u4-tangents-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tangent to a circle touches at point $T$. What is the angle between the tangent and the chord $OT$ (the radius)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45^\\circ$" },
              { id: "b", text: "Depends on the circle" },
              { id: "c", text: "$60^\\circ$" },
              { id: "d", text: "$90^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "A tangent is perpendicular to the radius at the point of contact." },
            ],
            steps: [
              { reasoning: "The tangent is perpendicular to the radius, so the angle is $90^\\circ$ regardless of circle size.", working: "90^\\circ", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $90^\\circ$",
            commonErrors: ["Thinking the angle depends on where the tangent touches."],
          },
        },
        {
          id: "ciem-u4-tangents-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "From an external point $P$, two tangents $PA$ and $PB$ are drawn to a circle. $PA=7$ cm. Find $PB$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$ cm" },
              { id: "b", text: "Cannot be determined" },
              { id: "c", text: "$3.5$ cm" },
              { id: "d", text: "$14$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Equal tangents", statement: "Tangents from the same external point are equal in length." },
            ],
            steps: [
              { reasoning: "$PB=PA=7$ cm.", working: "PB=7\\text{ cm}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $7$ cm",
            commonErrors: ["Doubling to get $14$ cm."],
          },
        },
        {
          id: "ciem-u4-tangents-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A circle has centre $O$ and radius $8$ cm. A tangent from $P$ touches at $T$, and $OP=17$ cm. Find the length of $PT$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$ cm" },
              { id: "b", text: "$25$ cm" },
              { id: "c", text: "$\\sqrt{353}$ cm" },
              { id: "d", text: "$15$ cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras in tangent triangle", statement: "$PT=\\sqrt{OP^2-r^2}$ since $\\angle OTP=90^\\circ$." },
            ],
            steps: [
              { reasoning: "$PT=\\sqrt{17^2-8^2}=\\sqrt{289-64}=\\sqrt{225}=15$ cm.", working: "PT=15\\text{ cm}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $15$ cm",
            commonErrors: ["Computing $17-8=9$ — distances require Pythagoras."],
          },
        },
        {
          id: "ciem-u4-tangents-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circle has centre $O$ and radius $6$ cm. A tangent from external point $P$ touches at $T$. Given $PT=8$ cm, find $OP$. Enter the length in cm.",
          response: { type: "numeric", parts: [{ label: "OP", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$OP^2=OT^2+PT^2=6^2+8^2$" },
            ],
            steps: [
              { reasoning: "$OP=\\sqrt{6^2+8^2}=\\sqrt{100}$.", working: "OP=10", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "10\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ cm",
            commonErrors: ["Adding $6+8=14$ instead of using Pythagoras."],
          },
        },
        {
          id: "ciem-u4-tangents-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "From point $P$, tangents $PA$ and $PB$ touch a circle at $A$ and $B$. Given $PA=10$ cm and the radius is $6$ cm, find $OP$, the distance from $P$ to the centre. Enter the length in cm.",
          response: { type: "numeric", parts: [{ label: "OP", answer: 11.66, tolerance: 0.01, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$OP=\\sqrt{PA^2+r^2}$ since $OA\\perp PA$." },
            ],
            steps: [
              { reasoning: "Triangle $OAP$ is right-angled at $A$: $OP^2=OA^2+PA^2=6^2+10^2$.", working: "OP^2=36+100=136", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "OP=\\sqrt{136}\\approx11.66", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "11.66\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$OP=\\sqrt{136}\\approx11.66$ cm",
            commonErrors: ["Subtracting instead of adding: $10^2-6^2=64$ gives $OP=8$ — that would be wrong since $OP$ is the hypotenuse."],
          },
        },
        {
          id: "ciem-u4-tangents-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two tangents $PA$ and $PB$ are drawn from external point $P$ to a circle with centre $O$. $PA=PB=9$ cm and $OP=15$ cm. Find the radius of the circle. Enter the radius in cm.",
          response: { type: "numeric", parts: [{ label: "Radius", answer: 12, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$r^2=OP^2-PA^2$ in right triangle $OAP$." },
            ],
            steps: [
              { reasoning: "Triangle $OAP$ is right-angled at $A$: $OA^2=OP^2-PA^2=15^2-9^2$.", working: "r^2=225-81=144", marks: 1, markCode: "M" },
              { reasoning: "Take the square root.", working: "r=12", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "12\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ cm",
            commonErrors: ["Computing $15-9=6$ or $15^2+9^2$ — identify $OP$ as hypotenuse and $PA$ as one leg."],
          },
        },
        {
          id: "ciem-u4-tangents-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle has centre $O$ and radius $5$ cm. Point $P$ is external with $OP=13$ cm. Tangents $PA$ and $PB$ touch the circle at $A$ and $B$.",
          parts: [
            { label: "a", prompt: "Find the length of tangent $PA$.", marks: 3 },
            { label: "b", prompt: "State the length of $PB$ and give a reason.", marks: 2 },
            { label: "c", prompt: "Find angle $AOB$ if angle $APB=2\\theta$ where $\\cos\\theta=\\frac{5}{13}$. Give your answer in degrees.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PA", answer: 12, unit: "cm" },
              { label: "(b) PB", answer: 12, unit: "cm" },
              { label: "(c) angle AOB", answer: 134.76, tolerance: 0.01, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$PA=\\sqrt{OP^2-r^2}$ since $\\angle OAP=90^\\circ$." },
              { kind: "theorem", name: "Equal tangents", statement: "Tangents from the same external point are equal." },
            ],
            steps: [
              { part: "a", reasoning: "Triangle $OAP$ right-angled at $A$: $PA^2=OP^2-OA^2=169-25=144$.", working: "PA^2=144", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take the square root.", working: "PA=12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State with units.", working: "12\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tangents from the same external point $P$ are equal.", working: "PB=PA=12\\text{ cm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the length.", working: "12\\text{ cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In right triangle $OAP$: $\\sin(\\angle AOP)=\\frac{PA}{OP}=\\frac{12}{13}$, or use quadrilateral angle sum: $\\angle AOB=360^\\circ-90^\\circ-90^\\circ-\\angle APB$.", working: "\\angle AOB=360^\\circ-180^\\circ-\\angle APB", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\angle APB=2\\theta$ with $\\cos\\theta=\\frac{5}{13}$; find $\\theta=\\arccos(\\frac{5}{13})\\approx67.38^\\circ$, so $\\angle APB\\approx134.76^\\circ$.", working: "\\angle APB\\approx134.76^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Then $\\angle AOB=360^\\circ-90^\\circ-90^\\circ-134.76^\\circ=45.24^\\circ$... alternatively $\\angle AOP=\\arcsin(\\frac{12}{13})\\approx67.38^\\circ$, so $\\angle AOB=2\\times67.38^\\circ\\approx134.76^\\circ$.", working: "\\angle AOB\\approx134.76^\\circ", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the angle.", working: "134.76^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12$ cm (b) $12$ cm (c) $\\approx134.76^\\circ$",
            commonErrors: ["In (c) doubling the tangent length angle incorrectly — $\\angle AOB=2\\angle AOP$ by symmetry of the two congruent right triangles."],
          },
        },
        {
          id: "ciem-u4-tangents-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why two tangents drawn from the same external point to a circle are equal in length.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-radius theorem", statement: "A tangent is perpendicular to the radius at the point of contact." },
              { kind: "theorem", name: "Pythagoras", statement: "$PT^2+r^2=OP^2$ for tangent length $PT$." },
            ],
            steps: [
              { reasoning: "For tangents $PA$ and $PB$ from $P$: triangles $OAP$ and $OBP$ are right-angled at $A$ and $B$.", marks: 1, markCode: "M" },
              { reasoning: "They share hypotenuse $OP$ and have $OA=OB=r$, so they are congruent (RHS).", marks: 1, markCode: "M" },
              { reasoning: "Corresponding sides give $PA=PB$ — equivalently, both equal $\\sqrt{OP^2-r^2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$PA=PB$ — both equal $\\sqrt{OP^2-r^2}$ by Pythagoras in congruent right triangles.",
            commonErrors: ["Asserting equality without justification."],
          },
        },
        {
          id: "ciem-u4-tangents-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A circle has centre $O$ and radius $9$ cm. A tangent from $P$ touches at $T$, and $PT=12$ cm. Find $OP$. Then state the size of angle $OPT$ with a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$OP^2=OT^2+PT^2$" },
              { kind: "theorem", name: "Tangent-radius theorem", statement: "Tangent $\\perp$ radius at contact." },
            ],
            steps: [
              { reasoning: "$OP=\\sqrt{9^2+12^2}=\\sqrt{81+144}=\\sqrt{225}$.", working: "OP=15\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "State $OP$.", working: "15\\text{ cm}", marks: 1, markCode: "A" },
              { reasoning: "Angle $OPT$ is the angle between tangent $PT$ and radius $OT$.", working: "\\angle OTP=90^\\circ", marks: 1, markCode: "M" },
              { reasoning: "State the angle.", working: "90^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$OP=15$ cm; $\\angle OTP=90^\\circ$ (tangent $\\perp$ radius)",
            commonErrors: ["Computing $OP=\\sqrt{12^2-9^2}$ — $OP$ is the hypotenuse so add the squares."],
          },
        },
        {
          id: "ciem-u4-tangents-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "From point $P$, tangents $PA$ and $PB$ touch a circle (centre $O$) at $A$ and $B$. $PA=PB=15$ cm, the radius is $8$ cm, and $M$ is the midpoint of chord $AB$.",
          parts: [
            { label: "a", prompt: "Find $OP$.", marks: 2 },
            { label: "b", prompt: "Find $AM$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$OP=\\sqrt{PA^2+r^2}$ in right triangle $OAP$." },
              { kind: "theorem", name: "Perpendicular bisector", statement: "$OP$ bisects chord $AB$ at right angles, so $PM=MA=\\frac{AB}{2}$... use $AM=\\frac{PA\\cdot OA}{OP}$ via area." },
            ],
            steps: [
              { part: "a", reasoning: "$OP=\\sqrt{15^2+8^2}=\\sqrt{225+64}=\\sqrt{289}$.", working: "OP=17\\text{ cm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $OP$.", working: "17\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In right triangle $OAP$: area $=\\frac{1}{2}\\times OA\\times PA=\\frac{1}{2}\\times8\\times15=60$; also area $=\\frac{1}{2}\\times OP\\times AM$.", working: "\\frac{1}{2}\\times17\\times AM=60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve: $AM=\\frac{120}{17}$.", working: "AM=\\frac{120}{17}\\approx7.06", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the length.", working: "AM\\approx7.06\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $OP=17$ cm (b) $AM=\\frac{120}{17}\\approx7.06$ cm",
            commonErrors: ["Assuming $AM=\\frac{AB}{2}$ without computing $AB$ first — use the area method or $AM^2=OA^2-OM^2$ after finding $OM$.", "Using $PA$ as hypotenuse — $OP$ is the hypotenuse."],
          },
        },
        {
          id: "ciem-u4-tangents-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tangent $PT$ is drawn to a circle of radius $5$ cm. If $OP=13$ cm (centre to external point), what is $PT$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ cm" },
              { id: "b", text: "$\\sqrt{194}$ cm" },
              { id: "c", text: "$18$ cm" },
              { id: "d", text: "$8$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pythagoras", statement: "$PT=\\sqrt{OP^2-r^2}=\\sqrt{169-25}=\\sqrt{144}$" },
            ],
            steps: [
              { reasoning: "$PT=\\sqrt{13^2-5^2}=\\sqrt{144}=12$ cm.", working: "PT=12\\text{ cm}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $12$ cm",
            commonErrors: ["Computing $13-5=8$ — use Pythagoras."],
          },
        },
        {
          id: "ciem-u4-tangents-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two tangents from $P$ touch a circle (centre $O$) at $A$ and $B$. $PA=8$ cm, the radius is $6$ cm and $OP=10$ cm. $M$ is the midpoint of chord $AB$. Find $AM$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ cm" },
              { id: "b", text: "$6$ cm" },
              { id: "c", text: "$4.8$ cm" },
              { id: "d", text: "$9.6$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of triangle", statement: "$\\frac{1}{2}\\cdot OA\\cdot PA=\\frac{1}{2}\\cdot OP\\cdot AM$, so $AM=\\frac{OA\\cdot PA}{OP}$." },
            ],
            steps: [
              { reasoning: "Equating the two expressions for the area of triangle $OAP$: $AM=\\frac{6\\times8}{10}=4.8$ cm.", working: "AM=\\frac{48}{10}=4.8\\text{ cm}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $4.8$ cm",
            commonErrors: ["Answering $9.6$ — that is the full chord $AB=2\\times AM$, not $AM$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u4-circle-theorems-notes",
      title: "Circle theorems — revision notes",
      summary: "Angle at centre vs circumference, same-segment angles, cyclic quadrilaterals, tangents and equal tangent lengths.",
      sections: [
        {
          heading: "Angles in circles",
          body: "- Angle at centre = $2\\times$ angle at circumference (same arc)\n- Angles in the same segment are equal\n- Cyclic quadrilateral: opposite angles sum to $180^\\circ$\n\n**Worked example.** Centre angle $84^\\circ \\Rightarrow$ circumference angle $42^\\circ$.",
        },
        {
          heading: "Tangents",
          body: "- Tangent $\\perp$ radius at point of contact\n- Two tangents from an external point are equal: $PA=PB$\n- $OP$ bisects the angle between the tangents and bisects chord $AB$\n\n**Worked example.** $r=6$, $OP=10$: $PT=\\sqrt{10^2-6^2}=\\sqrt{64}=8$ cm.",
        },
        {
          heading: "Exam technique",
          body: "- Mark the arc or chord each angle stands on — the 'same arc' condition is essential.\n- For tangent problems look for the right angle between tangent and radius, then Pythagoras.\n- Equal tangents + perpendicular bisector of the chord often appear together.",
        },
      ],
    },
  ],
};
