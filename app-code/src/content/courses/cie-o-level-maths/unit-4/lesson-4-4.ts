import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "olm-u4-lesson-4-4",
  code: "4-4",
  title: "Extended Circle Theorems",
  goal: "I CAN apply advanced circle theorems including cyclic quadrilaterals and tangent-chord angles.",
  standards: ["4024: geometry"],
  vocabulary: [
    { term: "Cyclic quadrilateral", definition: "Quadrilateral inscribed in a circle." },
    { term: "Alternate segment", definition: "Angle between tangent and chord equals angle in alternate segment." },
    { term: "Chord", definition: "Line segment joining two points on circle." },
    { term: "Major/minor arc", definition: "Long/short arc between two points." },
  ],
  concepts: [
    {
      id: "olm-u4-s4-cyclic",
      title: "Cyclic quadrilaterals",
      skill: "Apply cyclic quadrilateral theorems at O Level.",
      lesson: {
        sections: [
          { heading: "Cyclic quadrilateral rules", body: "A cyclic quadrilateral has all four vertices on a circle. Key theorems: opposite angles sum to $180°$; the exterior angle equals the interior opposite angle; angles subtended by the same chord in the same segment are equal. These combine powerfully with the centre/circumference angle theorem — often a problem requires two or three theorems chained together." },
          { heading: "Problem solving", body: "Label all angles systematically. Find the angle at centre first (double the circumference angle), use it to get arc-related angles, then apply cyclic rules for the rest. For cyclic quadrilaterals, setting opposite angles as supplementary gives a linear equation — solve for the unknown angle, then chase around the quadrilateral." },
        ],
        keyFormulas: [
          { name: "Cyclic", statement: "Opposite angles sum to $180°$" },
          { name: "Exterior", statement: "Exterior angle = interior opposite" },
        ],
        workedExample: { problem: "ABCD is cyclic with angle A = 75° and angle B = 105°. Find angle C.", solution: "Opposite angles supplementary: C = $180-75=105°$, D = $180-105=75°$." },
      },
      questions: [
        {
          id: "olm-u4-s4-cy-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Opposite angles of a cyclic quadrilateral sum to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$90°$" },
            { id: "b", text: "$180°$" },
            { id: "c", text: "They are equal" },
            { id: "d", text: "$360°$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "Supplementary." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "$180°$" },
        },
        {
          id: "olm-u4-s4-cy-q2", difficulty: "foundation", totalMarks: 2,
          stem: "In a cyclic quadrilateral, angle A = 80°. Find angle C.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "$180°$ sum." }], steps: [
            { reasoning: "$C=180-80=100°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $100°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$100°$" },
        },
        {
          id: "olm-u4-s4-cy-q3", difficulty: "core", totalMarks: 3,
          stem: "The exterior angle of a cyclic quadrilateral is $110°$. Find the interior opposite angle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Exterior angle", statement: "Equals interior opposite." }], steps: [
            { reasoning: "Exterior = interior opposite = $110°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $110°$.", marks: 1, markCode: "M" },
            { reasoning: "Check: interior angle adjacent to exterior is $70°$; opposite is $110°$ → sums to $180$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$110°$" },
        },
        {
          id: "olm-u4-s4-cy-q4", difficulty: "core", totalMarks: 4,
          stem: "ABCD is cyclic. Angle A = 2x, angle C = 3x+10, angle B = y. Given angle A + angle C = 180°, find x and y if angle B = 95°.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cyclic solve", statement: "Set up equations." }], steps: [
            { reasoning: "$2x+3x+10=180$ → $5x=170$ → $x=34$; A=$68°$, C=$112°$.", marks: 1, markCode: "M" },
            { reasoning: "Opposite B+D=180 → D=$85°$.", marks: 1, markCode: "M" },
            { reasoning: "Check sum: $68+95+112+85=360$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: x=34, y=95.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=34, y=95$" },
        },
        {
          id: "olm-u4-s4-cy-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An exterior angle of a cyclic quadrilateral is equal to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The angle at the centre" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "The adjacent interior angle" },
            { id: "d", text: "The interior opposite angle" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Exterior angle", statement: "Equals interior opposite." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Interior opposite angle" },
        },
        {
          id: "olm-u4-s4-cy-q6", difficulty: "foundation", totalMarks: 1,
          stem: "In a cyclic quadrilateral, angle A = 80°. Angle C is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$20°$" },
            { id: "b", text: "$90°$" },
            { id: "c", text: "$80°$" },
            { id: "d", text: "$100°$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "Opposite angles supplementary." }], steps: [{ reasoning: "$C=180-80=100°$.", marks: 1, markCode: "A" }], finalAnswer: "$100°$" },
        },
        {
          id: "olm-u4-s4-cy-q7", difficulty: "foundation", totalMarks: 2,
          stem: "In a cyclic quadrilateral, one pair of opposite angles are 110° and x°. Find x.",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "Sum = $180°$." }], steps: [
            { reasoning: "$x=180-110=70$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 70.", marks: 1, markCode: "A" },
          ], finalAnswer: "$70°$" },
        },
        {
          id: "olm-u4-s4-cy-q8", difficulty: "core", totalMarks: 1,
          stem: "Angles subtended by the same chord in the same segment are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "In the ratio 2 : 1" },
            { id: "b", text: "Supplementary" },
            { id: "c", text: "Right angles" },
            { id: "d", text: "Equal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Same segment", statement: "Equal angles." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olm-u4-s4-cy-q9", difficulty: "core", totalMarks: 2,
          stem: "ABCD is a cyclic quadrilateral with angle A = 85° and angle B = 100°. Find angle C.",
          response: { type: "numeric", parts: [{ label: "a", answer: 95 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "Opposite angles supplementary." }], steps: [
            { reasoning: "$C=180-85=95°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $95°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$95°$" },
        },
        {
          id: "olm-u4-s4-cy-q10", difficulty: "core", totalMarks: 2,
          stem: "The exterior angle of a cyclic quadrilateral at vertex B is 130°. Find the interior angle ABC.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: { principles: [{ kind: "property", name: "Exterior angle", statement: "Exterior + interior adjacent = $180°$." }], steps: [
            { reasoning: "Interior $=180-130=50°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $50°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$50°$" },
        },
        {
          id: "olm-u4-s4-cy-q11", difficulty: "challenge", totalMarks: 1,
          stem: "In a cyclic quadrilateral PQRS, angles P and R are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Supplementary" },
            { id: "b", text: "Complementary" },
            { id: "c", text: "Right angles" },
            { id: "d", text: "Equal" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "Opposite angles sum to $180°$." }], steps: [{ reasoning: "P and R are opposite → supplementary.", marks: 1, markCode: "A" }], finalAnswer: "Supplementary" },
        },
        {
          id: "olm-u4-s4-cy-q12", difficulty: "challenge", totalMarks: 4,
          stem: "PQRS is a cyclic quadrilateral. Angle P = 2x + 20°, angle R = x + 40°, angle Q = 2y and angle S = y + 30°. Find x and y.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cyclic solve", statement: "Set opposite pairs to $180°$." }], steps: [
            { reasoning: "P + R = $180°$: $2x+20+x+40=180$ → $3x=120$ → $x=40$.", marks: 1, markCode: "M" },
            { reasoning: "Q + S = $180°$: $2y+y+30=180$ → $3y=150$ → $y=50$.", marks: 1, markCode: "M" },
            { reasoning: "Angles: P=$100°$, R=$80°$, Q=$100°$, S=$80°$; sum $=360°$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=40$, $y=50$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=40, y=50$" },
        },
        {
          id: "olm-u4-s4-cy-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain briefly why opposite angles of a cyclic quadrilateral are supplementary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Cyclic quad", statement: "Arcs sum to $360°$." }], steps: [
            { reasoning: "Opposite angles subtend arcs that together make the whole circle ($360°$).", marks: 1, markCode: "M" },
            { reasoning: "Each angle is half its arc, so the angles sum to $\\frac{360°}{2}=180°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Arcs sum to 360°, half gives 180°" },
        },
        {
          id: "olm-u4-s4-cy-q14", difficulty: "core", totalMarks: 3,
          stem: "Chord XY subtends an angle of 50° at the centre O of the circle. Find the angle subtended by XY at a point Z on the major arc.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Circumference angle is half." }], steps: [
            { reasoning: "Angle at centre on minor arc = $50°$.", marks: 1, markCode: "M" },
            { reasoning: "Z on major arc subtends minor arc → angle $=\\frac{50}{2}=25°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $25°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$25°$" },
        },
        {
          id: "olm-u4-s4-cy-q15", difficulty: "challenge", totalMarks: 4,
          stem: "ABCD is a cyclic quadrilateral. Angle A = 3x, angle C = x + 40, angle B = 2y and angle D = y + 30. Find x and y.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cyclic solve", statement: "Opposite pairs supplementary." }], steps: [
            { reasoning: "A + C = $180°$: $3x+x+40=180$ → $4x=140$ → $x=35$.", marks: 1, markCode: "M" },
            { reasoning: "B + D = $180°$: $2y+y+30=180$ → $3y=150$ → $y=50$.", marks: 1, markCode: "M" },
            { reasoning: "Angles: A=$105°$, C=$75°$, B=$100°$, D=$80°$; sum $=360°$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=35$, $y=50$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=35, y=50$" },
        },
        {
          id: "olm-u4-s4-cy-q16", difficulty: "core", totalMarks: 2,
          stem: "Three angles of a cyclic quadrilateral are 95°, 85° and 105°. Find the fourth angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 75 }] },
          markscheme: { principles: [{ kind: "property", name: "Quadrilateral sum", statement: "$360°$." }], steps: [
            { reasoning: "$360-(95+85+105)=360-285=75°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $75°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$75°$" },
        },
      ],
    },
    {
      id: "olm-u4-s4-tangent",
      title: "Tangent-chord and chord theorems",
      skill: "Apply tangent-chord and chord angle theorems at O Level.",
      lesson: {
        sections: [
          { heading: "Alternate segment theorem", body: "The angle between a tangent and a chord through the point of contact equals the angle in the alternate segment — the angle subtended by that chord at any point on the circle in the opposite segment. This is one of the most powerful circle theorems: it converts tangent problems into inscribed-angle problems." },
          { heading: "Chord properties", body: "The perpendicular from the centre to a chord bisects the chord and the chord's arc. Equal chords are equidistant from the centre. The angle subtended by a chord at the centre is twice that at the circumference. For two intersecting chords, the products of the segments are equal (intersecting chords theorem)." },
        ],
        keyFormulas: [
          { name: "Alternate segment", statement: "Tangent-chord angle = angle in alternate segment" },
          { name: "Perpendicular to chord", statement: "Bisects chord and arc" },
        ],
        workedExample: { problem: "A tangent at P makes 50° with chord PQ. Find the angle subtended by PQ at the circumference in the alternate segment.", solution: "Alternate segment theorem: angle = $50°$." },
      },
      questions: [
        {
          id: "olm-u4-s4-ta-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The alternate segment theorem states that the tangent-chord angle equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$90°$" },
            { id: "b", text: "The angle at the centre" },
            { id: "c", text: "The angle in the alternate segment" },
            { id: "d", text: "The reflex angle" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "theorem", name: "Alternate segment", statement: "Equal to segment angle." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Angle in alternate segment" },
        },
        {
          id: "olm-u4-s4-ta-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The perpendicular from the centre to a chord…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Chord bisect", statement: "Bisects chord and arc." }], steps: [
            { reasoning: "Bisects the chord (and its arc).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Bisects the chord" },
        },
        {
          id: "olm-u4-s4-ta-q3", difficulty: "core", totalMarks: 3,
          stem: "A tangent touches a circle at P. Chord PQ makes 40° with the tangent. Find the angle subtended by PQ at a point R on the major arc.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Alternate segment", statement: "Direct application." }], steps: [
            { reasoning: "By alternate segment theorem, angle PRQ = tangent-chord angle = $40°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $40°$.", marks: 1, markCode: "M" },
            { reasoning: "R must be on the arc opposite the tangent-chord angle's segment.", marks: 1, markCode: "A" },
          ], finalAnswer: "$40°$" },
        },
        {
          id: "olm-u4-s4-ta-q4", difficulty: "core", totalMarks: 4,
          stem: "Two chords AB and CD intersect at E inside a circle. AE=3, EB=6, CE=4. Find ED.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Intersecting chords", statement: "Products of segments equal." }], steps: [
            { reasoning: "$AE\\times EB=CE\\times ED$ → $3\\times6=4\\times ED$.", marks: 1, markCode: "M" },
            { reasoning: "$18=4ED$ → $ED=4.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.5.", marks: 1, markCode: "M" },
            { reasoning: "Check: $18=18$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "4.5" },
        },
        {
          id: "olm-u4-s4-ta-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Two tangents drawn from the same external point to a circle are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perpendicular to each other" },
            { id: "b", text: "Equal in length" },
            { id: "c", text: "At 45° to each other" },
            { id: "d", text: "Parallel" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Two tangents", statement: "Equal lengths." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Equal in length" },
        },
        {
          id: "olm-u4-s4-ta-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Equal chords of a circle are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tangents to the circle" },
            { id: "b", text: "Always perpendicular" },
            { id: "c", text: "Always parallel" },
            { id: "d", text: "Equidistant from the centre" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Equal chords", statement: "Equidistant from centre." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Equidistant from the centre" },
        },
        {
          id: "olm-u4-s4-ta-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A chord of length 10 cm is bisected by the perpendicular drawn from the centre of the circle. Find the length of each half of the chord.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Chord bisect", statement: "Perpendicular bisects chord." }], steps: [
            { reasoning: "$10\\div2=5$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 cm" },
        },
        {
          id: "olm-u4-s4-ta-q8", difficulty: "core", totalMarks: 1,
          stem: "The angle subtended by a chord at the centre of a circle is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twice the angle subtended at the circumference" },
            { id: "b", text: "Supplementary to the angle at the circumference" },
            { id: "c", text: "Half the angle at the circumference" },
            { id: "d", text: "Equal to the angle at the circumference" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Centre = 2 × circumference." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Twice the circumference angle" },
        },
        {
          id: "olm-u4-s4-ta-q9", difficulty: "core", totalMarks: 3,
          stem: "A chord is 24 cm long and is 5 cm from the centre of the circle. Find the radius.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chord and radius", statement: "Right triangle." }], steps: [
            { reasoning: "Half-chord $=12$ cm; radius $r$: $r^2=12^2+5^2=144+25=169$.", marks: 1, markCode: "M" },
            { reasoning: "$r=13$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "13 cm" },
        },
        {
          id: "olm-u4-s4-ta-q10", difficulty: "core", totalMarks: 3,
          stem: "Two chords AB and CD intersect at E inside a circle. AE = 4, EB = 6 and CE = 3. Find ED.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Intersecting chords", statement: "Products of segments equal." }], steps: [
            { reasoning: "$AE\\times EB=CE\\times ED$ → $4\\times6=3\\times ED$ → $24=3ED$.", marks: 1, markCode: "M" },
            { reasoning: "$ED=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u4-s4-ta-q11", difficulty: "challenge", totalMarks: 1,
          stem: "When two chords intersect inside a circle, the products of the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Perpendicular distances are equal" },
            { id: "b", text: "Angles subtended are equal" },
            { id: "c", text: "Arcs are equal" },
            { id: "d", text: "Lengths of the segments are equal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Intersecting chords", statement: "$AE\\times EB=CE\\times ED$." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Products of segment lengths" },
        },
        {
          id: "olm-u4-s4-ta-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A tangent touches the circle at P. Chord PQ makes an angle of 55° with the tangent. Point R lies on the circumference in the alternate segment. Find angle PRQ and the angle subtended by PQ at the centre.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Alternate segment", statement: "Tangent-chord = segment angle." }], steps: [
            { reasoning: "By alternate segment theorem, angle PRQ = $55°$.", marks: 1, markCode: "M" },
            { reasoning: "Angle subtended at centre = $2\\times55°=110°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: PRQ = $55°$, centre angle = $110°$.", marks: 1, markCode: "M" },
            { reasoning: "Both values stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "$55°$ and $110°$" },
        },
        {
          id: "olm-u4-s4-ta-q13", difficulty: "core", totalMarks: 2,
          stem: "A chord is 14 cm long. The perpendicular from the centre of the circle bisects it. Find the distance from the centre to one end of half the chord.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Chord bisect", statement: "Bisects chord." }], steps: [
            { reasoning: "Half-chord $=14\\div2=7$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "7 cm" },
        },
        {
          id: "olm-u4-s4-ta-q14", difficulty: "core", totalMarks: 3,
          stem: "Two chords intersect at X: AX = 2, XB = 9, CX = x and XD = 6. Find x.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Intersecting chords", statement: "Products equal." }], steps: [
            { reasoning: "$AX\\times XB=CX\\times XD$ → $2\\times9=x\\times6$ → $18=6x$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u4-s4-ta-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Chord PQ subtends an angle of 80° at the centre of a circle. Find the angle between the tangent at P and the chord PQ.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Alternate segment", statement: "Tangent-chord = segment angle = half centre angle." }], steps: [
            { reasoning: "Angle subtended at circumference $=\\frac{80}{2}=40°$.", marks: 1, markCode: "M" },
            { reasoning: "By alternate segment theorem, tangent-chord angle = $40°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $40°$.", marks: 1, markCode: "M" },
            { reasoning: "Value stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "$40°$" },
        },
        {
          id: "olm-u4-s4-ta-q16", difficulty: "core", totalMarks: 2,
          stem: "Chords AB and CD intersect at E with AE = 8, EB = 3 and CE = 4. Find ED.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Intersecting chords", statement: "Products equal." }], steps: [
            { reasoning: "$8\\times3=4\\times ED$ → $24=4ED$ → $ED=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u4-s4-circ-notes", title: "Circle theorems — notes", summary: "Cyclic quadrilaterals and tangent-chord angles.",
      sections: [
        { heading: "Cyclic", body: "Opposite angles $180°$; exterior = interior opposite." },
        { heading: "Tangent/chord", body: "Alternate segment theorem; perpendicular to chord bisects it; intersecting chords: products equal." },
      ] },
  ],
};
