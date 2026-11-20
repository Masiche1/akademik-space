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
              { id: "a", text: "$70^\\circ$" },
              { id: "b", text: "$35^\\circ$" },
              { id: "c", text: "$17.5^\\circ$" },
              { id: "d", text: "$140^\\circ$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$90^\\circ$" },
              { id: "b", text: "$45^\\circ$" },
              { id: "c", text: "$60^\\circ$" },
              { id: "d", text: "$0^\\circ$" },
            ],
            correctChoiceId: "a",
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
