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
            { id: "a", text: "$180°$" }, { id: "b", text: "$90°$" }, { id: "c", text: "$360°$" }, { id: "d", text: "They are equal" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "The angle in the alternate segment" }, { id: "b", text: "The angle at the centre" }, { id: "c", text: "$90°$" }, { id: "d", text: "The reflex angle" },
          ], correctChoiceId: "a" },
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
