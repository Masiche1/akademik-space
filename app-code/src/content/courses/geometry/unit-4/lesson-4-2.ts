import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "geo-u4-lesson-4-2",
  code: "4-2",
  title: "Tangents and Secants",
  goal: "I CAN use tangent and secant angle theorems and segment-length relationships to solve circle problems.",
  standards: ["HSG-C.A.2", "HSG-C.A.4"],
  vocabulary: [
    { term: "Tangent", definition: "A line that intersects a circle at exactly one point, called the point of tangency." },
    { term: "Secant", definition: "A line that intersects a circle at two points." },
    { term: "Point of tangency", definition: "The single point where a tangent line touches a circle." },
    { term: "External segment", definition: "The part of a secant from an exterior point to the nearer point of intersection with the circle." },
    { term: "Tangent-secant theorem", definition: "From an exterior point, the tangent length squared equals the external secant segment times the entire secant length." },
    { term: "Intersecting chords theorem", definition: "When two chords intersect inside a circle, the products of the two segments of each chord are equal." },
  ],
  concepts: [
    {
      id: "geo-u4-tangent-properties-angles",
      title: "Tangent properties and circle angles",
      skill: "Apply radius-tangent perpendicularity, equal tangent segments, and angle relationships inside and outside a circle.",
      lesson: {
        sections: [
          {
            heading: "Tangent lines and radii",
            body: "A radius drawn to a point of tangency is perpendicular to the tangent line. This forms a right triangle with any other radius or segment to that point. From the same exterior point, the two tangent segments to a circle are congruent. For example, if point $P$ has tangent segments $PA$ and $PB$, then $PA = PB$.",
          },
          {
            heading: "Angles formed inside a circle",
            body: "When two chords intersect inside a circle, the angle measure is half the **sum** of the measures of the arcs intercepted by the angle and its vertical angle. The two arcs are the ones cut off by the angle's sides and the opposite angle's sides; together they need not form a semicircle.",
          },
          {
            heading: "Angles formed outside a circle",
            body: "For an angle with vertex outside the circle formed by two secants, a tangent and a secant, or two tangents, the angle measure is half the **positive difference** of the larger and smaller intercepted arcs. In a two-tangent diagram, the larger arc and minor arc share the two points of tangency. For a tangent-secant diagram, the larger and smaller arcs are intercepted between the tangent point and the two secant intersections.",
          },
        ],
        keyFormulas: [
          { name: "Radius and tangent", statement: "Radius to point of tangency $\\perp$ tangent line." },
          { name: "Two tangent segments", statement: "$PA = PB$ for tangents from the same exterior point $P$." },
          { name: "Intersecting-chords angle", statement: "$m\\angle = \\frac{1}{2}(m\\text{arc}_1 + m\\text{arc}_2)$." },
          { name: "Exterior circle angle", statement: "$m\\angle = \\frac{1}{2}(m\\text{larger arc} - m\\text{smaller arc})$." },
        ],
        workedExample: {
          problem: "Two tangents from exterior point $P$ touch a circle at $A$ and $B$. The minor arc $AB$ measures $112^\\circ$. Find the angle between the tangents.",
          solution: "The major arc $AB$ measures $360^\\circ - 112^\\circ = 248^\\circ$. The exterior angle is half the difference of those arcs: $m\\angle APB = \\frac{1}{2}(248^\\circ - 112^\\circ) = 68^\\circ$.",
        },
      },
      questions: [
        {
          id: "geo-u4-tangent-angle-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A circle has center $O$, and line $\\ell$ is tangent to the circle at $T$. The diagram shows radius $OT$ ending at the point of tangency $T$, with $\\ell$ passing through $T$. What is the angle between $OT$ and $\\ell$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$180^\\circ$" },
              { id: "b", text: "$0^\\circ$" },
              { id: "c", text: "$90^\\circ$" },
              { id: "d", text: "$45^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Radius-tangent theorem", statement: "A radius drawn to the point of tangency is perpendicular to the tangent line." },
            ],
            steps: [
              { reasoning: "Identify $OT$ as the radius to the point where the tangent touches the circle.", working: "OT \\perp \\ell", marks: 1, markCode: "M" },
              { reasoning: "Perpendicular lines form a right angle.", working: "m\\angle(OT, \\ell) = 90^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $90^\\circ$",
            commonErrors: ["Confusing perpendicularity with parallelism or a straight angle."],
          },
        },
        {
          id: "geo-u4-tangent-angle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two tangents from exterior point $P$ touch a circle at $A$ and $B$. The minor arc $AB$ measures $128^\\circ$. The diagram shows the two tangent segments $PA$ and $PB$ meeting at $P$. Find $m\\angle APB$.",
          response: { type: "numeric", parts: [{ label: "$m\\angle APB$", answer: 52, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Exterior angle formed by two tangents", statement: "The angle formed by two tangents is half the difference of the intercepted major and minor arcs." },
              { kind: "property", name: "Full circle measure", statement: "The major and minor arcs between the same two points total $360^\\circ$." },
            ],
            steps: [
              { reasoning: "Find the major arc between the points of tangency.", working: "360^\\circ - 128^\\circ = 232^\\circ", marks: 1, markCode: "M" },
              { reasoning: "An exterior angle is half the difference of the larger and smaller arcs.", working: "m\\angle APB = \\frac{1}{2}(232^\\circ - 128^\\circ)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the difference and divide by two.", working: "m\\angle APB = 52^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m\\angle APB = 52^\\circ$",
            commonErrors: ["Adding the arcs instead of subtracting them.", "Using the minor arc alone as the angle measure."],
          },
        },
        {
          id: "geo-u4-tangent-angle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two chords intersect at an interior point $E$. The diagram shows chord $AC$ crossing chord $BD$ at $E$; the rays $EA$ and $EB$ form one angle, and the opposite rays $EC$ and $ED$ form its vertical angle. The intercepted arcs for this pair of vertical angles measure $94^\\circ$ and $142^\\circ$. Find the measure of the angle formed by $EA$ and $EB$.",
          response: { type: "numeric", parts: [{ label: "Interior angle", answer: 118, unit: "degrees" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Intersecting chords angle theorem", statement: "The measure of an angle formed by two chords intersecting inside a circle is half the sum of the measures of the arcs intercepted by the angle and its vertical angle." },
            ],
            steps: [
              { reasoning: "The chords intersect inside the circle, so use the half-sum theorem.", working: "m\\angle AEB = \\frac{1}{2}(94^\\circ + 142^\\circ)", marks: 2, markCode: "M" },
              { reasoning: "Add the intercepted arc measures.", working: "94^\\circ + 142^\\circ = 236^\\circ", marks: 1, markCode: "A" },
              { reasoning: "Take half of the sum to find the interior angle.", working: "236^\\circ \\div 2 = 118^\\circ", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m\\angle AEB = 118^\\circ$",
            commonErrors: ["Subtracting the arcs as for an exterior angle.", "Forgetting to include the arc intercepted by the vertical angle."],
          },
        },
        {
          id: "geo-u4-tangent-angle-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A circle has two secants from exterior point $P$. The first secant meets the circle at nearer point $A$ and farther point $B$; the second meets it at nearer point $C$ and farther point $D$. The larger intercepted arc $BD$ measures $204^\\circ$, and the smaller intercepted arc $AC$ measures $76^\\circ$. From a second exterior point $R$, tangent $RG$ and secant $RHI$ are drawn; $H$ is the nearer secant intersection and $I$ the farther one. The larger intercepted arc $GI$ measures $184^\\circ$ and the smaller arc $GH$ measures $64^\\circ$. A separate point $Q$ has two tangents touching at $E$ and $F$, with minor arc $EF$ measuring $108^\\circ$. Find each requested angle or length.",
          parts: [
            { label: "a", prompt: "Find $m\\angle APC$, the angle formed by the two secants at $P$.", marks: 2 },
            { label: "b", prompt: "Find the angle between tangent $RG$ and secant $RHI$.", marks: 2 },
            { label: "c", prompt: "Find the angle between the two tangents from $Q$.", marks: 2 },
            { label: "d", prompt: "If $QE = 11$ units, find $QF$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) secant angle", answer: 64, unit: "degrees" },
              { label: "(b) tangent-secant angle", answer: 60, unit: "degrees" },
              { label: "(c) tangent angle", answer: 72, unit: "degrees" },
              { label: "(d) $QF$", answer: 11, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Exterior secant angle theorem", statement: "An angle formed by two secants outside a circle is half the positive difference of its intercepted arcs." },
              { kind: "property", name: "Full circle measure", statement: "The two arcs between the same endpoints total $360^\\circ$." },
              { kind: "theorem", name: "Two tangent segments", statement: "Tangent segments from the same exterior point are congruent." },
            ],
            steps: [
              { part: "a", reasoning: "The two secants meet outside the circle, so subtract the smaller arc from the larger and halve.", working: "m\\angle APC = \\frac{1}{2}(204^\\circ - 76^\\circ) = 64^\\circ", marks: 2, markCode: "A" },
              { part: "b", reasoning: "The angle between a tangent and a secant outside the circle is half the difference of the larger and smaller intercepted arcs.", working: "m\\angle GRI = \\frac{1}{2}(184^\\circ - 64^\\circ) = 60^\\circ", marks: 2, markCode: "A" },
              { part: "c", reasoning: "First find the major arc, then take half the difference of the two arcs intercepted by the tangents.", working: "m\\widehat{EF}_{\\text{major}} = 360^\\circ - 108^\\circ = 252^\\circ;\\quad m\\angle EQF = \\frac{1}{2}(252^\\circ - 108^\\circ) = 72^\\circ", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Both segments from exterior point $Q$ to the points of tangency have equal length.", working: "QF = QE = 11", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $64^\\circ$ (b) $60^\\circ$ (c) $72^\\circ$ (d) $11$ units",
            commonErrors: ["Using the sum of arcs for an exterior angle.", "Calling arc $EF$ of $252^\\circ$ the minor arc.", "Assuming equal tangent lengths apply to tangent lines from different exterior points."],
          },
        },
      ],
    },
    {
      id: "geo-u4-segment-length-relationships",
      title: "Segment length relationships",
      skill: "Solve intersecting-chord, secant-secant, and tangent-secant length problems using products of segments.",
      lesson: {
        sections: [
          {
            heading: "Intersecting chords inside a circle",
            body: "When two chords cross inside a circle, each chord is divided into two segments. Multiply the two segments of one chord and set the product equal to the product of the two segments of the other chord. For chords $AB$ and $CD$ intersecting at $E$, $AE \\cdot EB = CE \\cdot ED$.",
          },
          {
            heading: "Two secants from an exterior point",
            body: "From the same exterior point, a secant's external part multiplied by its entire length equals the corresponding product for another secant. If the external and internal portions are $e_1, i_1$ and $e_2, i_2$, then $e_1(e_1+i_1) = e_2(e_2+i_2)$. The entire secant length includes both its external and internal portions.",
          },
          {
            heading: "A tangent and a secant",
            body: "For a tangent and a secant from the same exterior point, the tangent length squared equals the external secant segment times the entire secant length. In the diagram, point $P$ lies outside; $PT$ is tangent, and a secant from $P$ meets the circle first at $A$ then at $B$, so $PT^2 = PA \\cdot PB$.",
          },
        ],
        keyFormulas: [
          { name: "Intersecting chords", statement: "$AE \\cdot EB = CE \\cdot ED$." },
          { name: "Two secants", statement: "$e_1(e_1+i_1) = e_2(e_2+i_2)$." },
          { name: "Tangent-secant", statement: "$PT^2 = PA \\cdot PB$, where $PA$ is external and $PB$ is the entire secant." },
        ],
        workedExample: {
          problem: "From exterior point $P$, a tangent has length $12$ and a secant has external segment $8$ and entire length $x$. Find $x$.",
          solution: "Use tangent-secant equality: $12^2 = 8x$. Thus $144 = 8x$, so $x = 18$. The internal part of the secant would be $18 - 8 = 10$ units.",
        },
      },
      questions: [
        {
          id: "geo-u4-segment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two chords intersect inside a circle at $E$. The diagram labels the segments of one chord as $AE = 3$ and $EB = 8$, and the segments of the other chord as $CE = 4$ and $ED = x$. Find $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$24$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Intersecting chords theorem", statement: "The products of the two segment lengths of intersecting chords are equal." },
            ],
            steps: [
              { reasoning: "Set the product along one chord equal to the product along the other.", working: "AE \\cdot EB = CE \\cdot ED", marks: 1, markCode: "M" },
              { reasoning: "Substitute and solve for the unknown segment.", working: "3 \\cdot 8 = 4x \\implies x = 6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $x = 6$",
            commonErrors: ["Adding the segments rather than multiplying the two parts of each chord."],
          },
        },
        {
          id: "geo-u4-segment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two secants are drawn from exterior point $P$. On the first, the external segment is $4$ units and the internal segment is $5$ units. On the second, the external segment is $x$ units and the internal segment is $9$ units. The diagram shows each secant beginning at $P$, entering the circle at its nearer intersection, and leaving at its farther intersection. Find the positive value of $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Secant-secant theorem", statement: "For two secants from one exterior point, external segment times entire secant length is equal for both secants." },
            ],
            steps: [
              { reasoning: "Write each entire secant as its external length plus its internal length.", working: "4(4 + 5) = x(x + 9)", marks: 1, markCode: "M" },
              { reasoning: "Multiply and rearrange to form a quadratic equation.", working: "36 = x^2 + 9x \\implies x^2 + 9x - 36 = 0", marks: 1, markCode: "M" },
              { reasoning: "Factor and use the positive segment length; the other root is not geometrically valid.", working: "(x + 12)(x - 3) = 0 \\implies x = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 3$ units",
            commonErrors: ["Multiplying external length by internal length instead of entire length.", "Accepting the negative quadratic root as a segment length."],
          },
        },
        {
          id: "geo-u4-segment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "From exterior point $P$, a tangent segment $PT$ touches the circle at $T$ and has length $15$ units. A secant from $P$ meets the circle first at $A$ and then at $B$. The external segment $PA$ is $9$ units and the internal segment $AB$ is $x$ units. Find $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 16, unit: "units" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tangent-secant theorem", statement: "Tangent length squared equals external secant segment times entire secant length." },
            ],
            steps: [
              { reasoning: "The entire secant length is the external part plus the internal part.", working: "PB = 9 + x", marks: 1, markCode: "M" },
              { reasoning: "Apply the tangent-secant relationship using the whole secant length.", working: "15^2 = 9(9 + x)", marks: 1, markCode: "M" },
              { reasoning: "Compute the square and isolate the parenthesized expression.", working: "225 = 9(9 + x) \\implies 25 = 9 + x", marks: 1, markCode: "A" },
              { reasoning: "Subtract the external segment length to find the internal length.", working: "x = 16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$AB = x = 16$ units",
            commonErrors: ["Using the external length as the whole secant length.", "Reporting the entire secant length $25$ instead of the internal segment $16$."],
          },
        },
        {
          id: "geo-u4-segment-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle has two chords $AB$ and $CD$ intersecting inside at $E$. The diagram labels $AE = 6$, $EB = x$, $CE = 4$, and $ED = 12$. From a separate exterior point $P$, two secants are drawn: the first has external segment $3$ and internal segment $y$; the second has external segment $6$ and internal segment $5$. Find the unknown lengths and state which segment theorem is used for each relationship.",
          parts: [
            { label: "a", prompt: "Write an equation using the intersecting-chords theorem.", marks: 2 },
            { label: "b", prompt: "Solve for $x$.", marks: 2 },
            { label: "c", prompt: "Write the secant-secant equation using external and entire lengths.", marks: 2 },
            { label: "d", prompt: "Solve for the positive value of $y$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$", answer: 8, unit: "units" },
              { label: "(d) $y$", answer: 19, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Intersecting chords theorem", statement: "The products of the two segments of each intersecting chord are equal." },
              { kind: "theorem", name: "Secant-secant theorem", statement: "For two secants from the same exterior point, each external length times its entire length gives equal products." },
            ],
            steps: [
              { part: "a", reasoning: "The chords cross at interior point $E$, so equate their segment products.", working: "AE \\cdot EB = CE \\cdot ED \\implies 6x = 4(12)", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Divide the product $48$ by $6$ to isolate $x$.", working: "6x = 48 \\implies x = 8", marks: 2, markCode: "A" },
              { part: "c", reasoning: "For each exterior secant, multiply the external piece by the entire length, external plus internal.", working: "3(3 + y) = 6(6 + 5)", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Evaluate the known secant product and solve the resulting linear equation.", working: "3(3 + y) = 66 \\implies 3 + y = 22 \\implies y = 19", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) Intersecting-chords equation $6x=48$; (b) $x=8$ units; (c) secant-secant equation $3(3+y)=66$; (d) $y=19$ units.",
            commonErrors: ["Writing the secant-secant equation as external times internal.", "Stopping at the entire second secant length rather than finding the internal segment."],
          },
        },
      ],
    },
  ],
};
