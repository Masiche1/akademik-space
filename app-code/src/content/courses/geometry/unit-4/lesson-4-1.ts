import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "geo-u4-lesson-4-1",
  code: "4-1",
  title: "Arcs, Chords and Angles",
  goal: "I CAN use central and inscribed angle relationships to find arc measures, chord measures, and angles in circles.",
  standards: ["HSG-C.A.2", "HSG-C.A.3"],
  vocabulary: [
    { term: "Central angle", definition: "An angle whose vertex is the center of a circle and whose sides are radii." },
    { term: "Minor arc", definition: "The shorter arc between two distinct points on a circle; its measure is less than $180^\\circ$." },
    { term: "Chord", definition: "A segment whose endpoints lie on a circle." },
    { term: "Inscribed angle", definition: "An angle whose vertex lies on a circle and whose sides are chords." },
    { term: "Inscribed quadrilateral", definition: "A quadrilateral whose four vertices lie on one circle." },
    { term: "Perpendicular bisector", definition: "A line perpendicular to a segment at its midpoint; for a circle, a radius perpendicular to a chord bisects that chord." },
  ],
  concepts: [
    {
      id: "geo-u4-central-angles-arcs-chords",
      title: "Central angles, arcs and chords",
      skill: "Relate central-angle and arc measures, use congruent chords, and apply the perpendicular-bisector property.",
      lesson: {
        sections: [
          {
            heading: "Central angles measure their intercepted arcs",
            body: "A **central angle** has its vertex at the circle's center. Its measure equals the measure of its intercepted minor arc. If central angle $\\angle AOB$ measures $74^\\circ$, then minor arc $AB$ measures $74^\\circ$ and the major arc $AB$ measures $360^\\circ - 74^\\circ = 286^\\circ$. The two arcs between the same endpoints sum to $360^\\circ$.",
          },
          {
            heading: "Congruent chords and arcs",
            body: "In the same circle (or in congruent circles), **congruent chords intercept congruent arcs**, and the converse is true. A larger central angle intercepts a larger minor arc and a longer chord. For equal chords in the same circle, the perpendicular distances from the center to those chords are equal.",
          },
          {
            heading: "A perpendicular from the center bisects a chord",
            body: "If a radius or diameter from center $O$ is perpendicular to chord $AB$ at $M$, then $AM = MB$. This creates a right triangle: if the radius is $r$ and the distance from $O$ to the chord is $d$, then half the chord has length $\\sqrt{r^2-d^2}$. The diagram can be read as a circle centered at $O$, chord $AB$, and segment $OM$ meeting $AB$ at a right angle at its midpoint $M$.",
          },
        ],
        keyFormulas: [
          { name: "Central angle and arc", statement: "$m\\angle AOB = m\\widehat{AB}$ for the intercepted minor arc." },
          { name: "Arc measures", statement: "$m(\\text{major arc}) = 360^\\circ - m(\\text{minor arc})$." },
          { name: "Chord bisected by a perpendicular radius", statement: "$OM \\perp AB \\implies AM = MB$." },
          { name: "Right-triangle chord relationship", statement: "$\\left(\\frac{AB}{2}\\right)^2 + d^2 = r^2$." },
        ],
        workedExample: {
          problem: "A circle has radius $13$ cm. A chord is $5$ cm from the center. Find the chord length.",
          solution: "A perpendicular from the center bisects the chord. Let $x$ be half its length. The radius, the perpendicular distance, and half-chord form a right triangle: $x^2 + 5^2 = 13^2$. Thus $x^2 = 144$, so $x = 12$. The full chord is $2x = 24$ cm.",
        },
      },
      questions: [
        {
          id: "geo-u4-central-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a circle centered at $O$, central angle $\\angle AOB$ measures $64^\\circ$. The diagram is a circle with radii $OA$ and $OB$ forming the central angle; the minor arc from $A$ to $B$ lies between the radii. What is the measure of minor arc $AB$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$32^\\circ$" },
              { id: "b", text: "$64^\\circ$" },
              { id: "c", text: "$116^\\circ$" },
              { id: "d", text: "$296^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Central angle theorem", statement: "The measure of a central angle equals the measure of its intercepted minor arc." },
            ],
            steps: [
              { reasoning: "Identify the minor arc intercepted by the given central angle.", working: "m\\widehat{AB} = m\\angle AOB", marks: 1, markCode: "M" },
              { reasoning: "Substitute the central angle measure; no halving or supplement is needed.", working: "m\\widehat{AB} = 64^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $64^\\circ$",
            commonErrors: ["Halving the central angle as if it were an inscribed angle.", "Giving the major arc measure rather than the minor arc."],
          },
        },
        {
          id: "geo-u4-central-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a circle centered at $O$, chord $AB$ has length $18$ units. The diagram shows radius $OM$ meeting chord $AB$ at a right angle at point $M$. Find $AM$.",
          response: { type: "numeric", parts: [{ label: "$AM$", answer: 9, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Radius perpendicular to a chord", statement: "A radius perpendicular to a chord bisects the chord." },
            ],
            steps: [
              { reasoning: "Since $OM$ is perpendicular to chord $AB$, point $M$ is its midpoint.", working: "AM = MB", marks: 1, markCode: "M" },
              { reasoning: "The two equal halves together make the given chord length.", working: "AM + MB = 18", marks: 1, markCode: "M" },
              { reasoning: "Divide the chord length equally between its two halves.", working: "AM = \\frac{18}{2} = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$AM = 9$ units",
            commonErrors: ["Reporting the whole chord length as $AM$.", "Assuming a radius bisects every chord; the perpendicular condition is essential."],
          },
        },
        {
          id: "geo-u4-central-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circle has radius $13$ units. Chord $CD$ is $5$ units from the center. Chord $EF$ is congruent to $CD$. The diagram description is: the center is $O$; a perpendicular segment from $O$ meets $CD$ at its midpoint and has length $5$; a second chord $EF$ is marked congruent to $CD$. Find the length of $EF$ and the perpendicular distance from $O$ to $EF$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Length of $EF$", answer: 24, unit: "units" },
              { label: "Distance from $O$ to $EF$", answer: 5, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Perpendicular bisector of a chord", statement: "A perpendicular from the center to a chord bisects the chord." },
              { kind: "theorem", name: "Congruent chords", statement: "Congruent chords in the same circle are equidistant from the center." },
              { kind: "law", name: "Pythagorean theorem", statement: "For a right triangle, the sum of the squares of the legs equals the square of the hypotenuse." },
            ],
            steps: [
              { reasoning: "Use the right triangle formed by the radius, the distance to the chord, and half of $CD$.", working: "(CD/2)^2 + 5^2 = 13^2", marks: 1, markCode: "M" },
              { reasoning: "Solve for half the chord, then double because the perpendicular bisects the chord.", working: "(CD/2)^2 = 144 \\implies CD/2 = 12 \\implies CD = 24", marks: 1, markCode: "A" },
              { reasoning: "Congruent chords have the same length.", working: "EF = CD = 24", marks: 1, markCode: "A" },
              { reasoning: "Congruent chords in the same circle are equally distant from its center.", working: "d(O, EF) = d(O, CD) = 5", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$EF = 24$ units; the distance from $O$ to $EF$ is $5$ units.",
            commonErrors: ["Using $5$ as half the chord instead of the distance from the center to the chord.", "Assuming congruent chords have different distances from the center."],
          },
        },
        {
          id: "geo-u4-central-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A circle is centered at $O$ and has radius $10$ units. The diagram shows radii $OA$ and $OB$ forming central angle $\\angle AOB = 120^\\circ$, with minor arc $AB$ between them. A different chord $EF$ has a perpendicular from $O$ meeting it at midpoint $M$, and $OM = 6$ units. Chord $CD$ is marked congruent to $EF$. Find each quantity.",
          parts: [
            { label: "a", prompt: "Find the measure of minor arc $AB$.", marks: 2 },
            { label: "b", prompt: "Find the measure of major arc $AB$.", marks: 2 },
            { label: "c", prompt: "Find the length of chord $EF$.", marks: 2 },
            { label: "d", prompt: "Find the distance from $O$ to chord $CD$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) minor arc $AB$", answer: 120, unit: "degrees" },
              { label: "(b) major arc $AB$", answer: 240, unit: "degrees" },
              { label: "(c) length of $EF$", answer: 16, unit: "units" },
              { label: "(d) distance to $CD$", answer: 6, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Central angle theorem", statement: "A central angle equals the measure of its intercepted minor arc." },
              { kind: "property", name: "Full circle measure", statement: "The measures of the major and minor arcs with the same endpoints sum to $360^\\circ$." },
              { kind: "theorem", name: "Radius perpendicular to a chord", statement: "A perpendicular from the center bisects the chord." },
              { kind: "theorem", name: "Congruent chords", statement: "Congruent chords in the same circle are equidistant from the center." },
            ],
            steps: [
              { part: "a", reasoning: "The central angle intercepts minor arc $AB$ directly.", working: "m\\widehat{AB} = 120^\\circ", marks: 2, markCode: "A" },
              { part: "b", reasoning: "The major and minor arcs together make one full circle.", working: "360^\\circ - 120^\\circ = 240^\\circ", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The perpendicular from the center bisects $EF$, and the radius and distance form a right triangle.", working: "(EF/2)^2 + 6^2 = 10^2 \\implies EF/2 = 8 \\implies EF = 16", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Congruent chords in the same circle are equidistant from the center.", working: "d(O, CD) = d(O, EF) = 6", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $120^\\circ$ (b) $240^\\circ$ (c) $16$ units (d) $6$ units",
            commonErrors: ["Taking the major arc to equal the central angle.", "Forgetting to double the half-chord in part (c)."],
          },
        },
      ],
    },
    {
      id: "geo-u4-inscribed-angles-quadrilaterals",
      title: "Inscribed angles and quadrilaterals",
      skill: "Use intercepted arcs, semicircles, and supplementary opposite angles to solve inscribed-angle problems.",
      lesson: {
        sections: [
          {
            heading: "An inscribed angle is half its intercepted arc",
            body: "An **inscribed angle** has its vertex on the circle, and its sides are chords. Its measure is half the measure of the arc it intercepts. Therefore, if the intercepted arc measures $126^\\circ$, the inscribed angle measures $63^\\circ$. Inscribed angles intercepting the same arc are congruent.",
          },
          {
            heading: "Angles in an inscribed quadrilateral",
            body: "If all four vertices of a quadrilateral lie on a circle, opposite angles are supplementary: each opposite pair sums to $180^\\circ$. This follows because the two opposite angles intercept arcs that together make the full $360^\\circ$ circle, and each angle is half its intercepted arc.",
          },
          {
            heading: "A diameter subtends a right angle",
            body: "An inscribed angle that intercepts a semicircle measures half of $180^\\circ$, so it is a right angle. The diagram is a circle with diameter $AB$ and a point $C$ elsewhere on the circle; chords $CA$ and $CB$ form $\\angle ACB = 90^\\circ$. This is often called the angle-in-a-semicircle theorem.",
          },
        ],
        keyFormulas: [
          { name: "Inscribed angle theorem", statement: "$m\\angle ACB = \\frac{1}{2}m\\widehat{AB}$ for the intercepted arc $AB$ not containing $C$." },
          { name: "Cyclic quadrilateral", statement: "Opposite angles in an inscribed quadrilateral sum to $180^\\circ$." },
          { name: "Angle in a semicircle", statement: "An inscribed angle that intercepts a diameter measures $90^\\circ$." },
        ],
        workedExample: {
          problem: "In a circle, inscribed angle $\\angle ACB$ intercepts arc $AB$ measuring $148^\\circ$. Find $m\\angle ACB$.",
          solution: "An inscribed angle is half the measure of its intercepted arc. Thus $m\\angle ACB = \\frac{1}{2}(148^\\circ) = 74^\\circ$.",
        },
      },
      questions: [
        {
          id: "geo-u4-inscribed-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An inscribed angle in a circle intercepts an arc measuring $110^\\circ$. The diagram description is: points $A$ and $B$ are the endpoints of the intercepted arc, and the angle's vertex $C$ lies on the opposite part of the circle; chords $CA$ and $CB$ form the angle. What is the angle measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$55^\\circ$" },
              { id: "b", text: "$110^\\circ$" },
              { id: "c", text: "$220^\\circ$" },
              { id: "d", text: "$70^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Inscribed angle theorem", statement: "An inscribed angle measures half its intercepted arc." },
            ],
            steps: [
              { reasoning: "The vertex is on the circle, so apply the inscribed-angle theorem.", working: "m\\angle ACB = \\frac{1}{2}m\\widehat{AB}", marks: 1, markCode: "M" },
              { reasoning: "Take half of the given intercepted arc measure.", working: "\\frac{110^\\circ}{2} = 55^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $55^\\circ$",
            commonErrors: ["Using the central-angle rule and reporting $110^\\circ$.", "Doubling instead of halving the intercepted arc."],
          },
        },
        {
          id: "geo-u4-inscribed-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Quadrilateral $ABCD$ is inscribed in a circle, with vertices in that order around the circle. The diagram labels opposite angles $\\angle A = 68^\\circ$ and $\\angle C = x^\\circ$. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 112, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Opposite angles in a cyclic quadrilateral", statement: "Opposite angles of a quadrilateral inscribed in a circle are supplementary." },
            ],
            steps: [
              { reasoning: "Angles $A$ and $C$ are opposite because the vertices are named in order.", working: "m\\angle A + m\\angle C = 180^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Substitute the known angle and isolate $x$.", working: "68^\\circ + x = 180^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Subtract to find the supplementary angle.", working: "x = 180^\\circ - 68^\\circ = 112^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 112^\\circ$",
            commonErrors: ["Treating opposite angles as congruent rather than supplementary."],
          },
        },
        {
          id: "geo-u4-inscribed-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a circle, $AB$ is a diameter and $C$ lies on the circle. Chords $CA$ and $CB$ form triangle $ACB$. The diagram labels $\\angle CAB = 34^\\circ$ and marks $AB$ as a diameter. Find $\\angle ABC$ and the measure of minor arc $BC$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m\\angle ABC$", answer: 56, unit: "degrees" },
              { label: "Minor arc $BC$", answer: 68, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Angle in a semicircle", statement: "An inscribed angle subtending a diameter is $90^\\circ$." },
              { kind: "law", name: "Triangle angle sum", statement: "The interior angles of a triangle sum to $180^\\circ$." },
              { kind: "theorem", name: "Inscribed angle theorem", statement: "An inscribed angle measures half its intercepted arc." },
            ],
            steps: [
              { reasoning: "Since $AB$ is a diameter, the angle at $C$ subtends a semicircle.", working: "m\\angle ACB = 90^\\circ", marks: 1, markCode: "B" },
              { reasoning: "Use the triangle angle sum to find the angle at $B$.", working: "m\\angle ABC = 180^\\circ - 90^\\circ - 34^\\circ = 56^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Angle $CAB$ intercepts the minor arc $BC$.", working: "m\\widehat{BC} = 2m\\angle CAB", marks: 1, markCode: "M" },
              { reasoning: "Double the inscribed angle to obtain its intercepted arc.", working: "m\\widehat{BC} = 2(34^\\circ) = 68^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m\\angle ABC = 56^\\circ$; minor arc $BC = 68^\\circ$",
            commonErrors: ["Assigning the right angle to $A$ or $B$ rather than the angle subtending diameter $AB$ at $C$.", "Halving the angle instead of doubling it to find the intercepted arc."],
          },
        },
        {
          id: "geo-u4-inscribed-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Quadrilateral $ABCD$ is inscribed in a circle, with vertices in order $A$, $B$, $C$, $D$ around the circle. The diagram labels $\\angle A = 78^\\circ$ and $\\angle B = 103^\\circ$. The arc $BCD$ runs from $B$ to $D$ through $C$ and does not contain $A$; arc $BAD$ is the other arc from $B$ to $D$ and contains $A$. Find the requested angle and arc measures.",
          parts: [
            { label: "a", prompt: "Find $m\\angle C$.", marks: 2 },
            { label: "b", prompt: "Find $m\\angle D$.", marks: 2 },
            { label: "c", prompt: "Find $m\\widehat{BCD}$.", marks: 2 },
            { label: "d", prompt: "Find $m\\widehat{BAD}$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $m\\angle C$", answer: 102, unit: "degrees" },
              { label: "(b) $m\\angle D$", answer: 77, unit: "degrees" },
              { label: "(c) $m\\widehat{BCD}$", answer: 156, unit: "degrees" },
              { label: "(d) $m\\widehat{BAD}$", answer: 204, unit: "degrees" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Cyclic quadrilateral angle theorem", statement: "Opposite angles in a cyclic quadrilateral sum to $180^\\circ$." },
              { kind: "theorem", name: "Inscribed angle theorem", statement: "An inscribed angle measures half its intercepted arc." },
              { kind: "property", name: "Arc addition", statement: "The two arcs with the same endpoints sum to $360^\\circ$." },
            ],
            steps: [
              { part: "a", reasoning: "Angles $A$ and $C$ are opposite angles in the inscribed quadrilateral.", working: "m\\angle C = 180^\\circ - 78^\\circ = 102^\\circ", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Angles $B$ and $D$ are the other opposite pair.", working: "m\\angle D = 180^\\circ - 103^\\circ = 77^\\circ", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Angle $A$ intercepts arc $BCD$, so the arc is twice the inscribed angle.", working: "m\\widehat{BCD} = 2(78^\\circ) = 156^\\circ", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The two arcs from $B$ to $D$ make a full circle.", working: "m\\widehat{BAD} = 360^\\circ - 156^\\circ = 204^\\circ", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $102^\\circ$ (b) $77^\\circ$ (c) $156^\\circ$ (d) $204^\\circ$",
            commonErrors: ["Pairing adjacent rather than opposite angles in the cyclic quadrilateral.", "Using the inscribed angle as equal to its intercepted arc."],
          },
        },
      ],
    },
  ],
};
