import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olm-u4-lesson-4-2",
  code: "4-2",
  title: "Pythagoras and Circle Theorems",
  goal: "I CAN apply Pythagoras' theorem and basic circle theorems.",
  standards: ["4024: geometry"],
  vocabulary: [
    { term: "Hypotenuse", definition: "Longest side of right-angled triangle." },
    { term: "Radius", definition: "Distance from centre to circumference." },
    { term: "Diameter", definition: "Chord through centre, $2r$." },
    { term: "Tangent", definition: "Line touching circle at one point." },
  ],
  concepts: [
    {
      id: "olm-u4-s2-pythagoras",
      title: "Pythagoras' theorem",
      skill: "Apply Pythagoras' theorem at O Level.",
      lesson: {
        sections: [
          { heading: "The theorem", body: "In a right-angled triangle, $a^2+b^2=c^2$ where $c$ is the hypotenuse. Use it to find a missing side, or to test whether a triangle is right-angled (check if $a^2+b^2=c^2$). For 3D problems, apply Pythagoras twice — first on the base to get a diagonal, then in the vertical plane." },
          { heading: "Special triples", body: "Memorise common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, and multiples (6-8-10, 9-12-15). These appear constantly in exams — spotting them saves time and avoids messy radicals. Also know: isosceles right triangle is $1:1:\\sqrt2$; equilateral is $1:1:1$ with height $\\frac{\\sqrt3}{2}\\times$ side." },
        ],
        keyFormulas: [
          { name: "Pythagoras", statement: "$a^2+b^2=c^2$" },
        ],
        workedExample: { problem: "A ladder 5 m long leans against a wall with base 3 m from the wall. How high does it reach?", solution: "$3^2+h^2=5^2$ → $h^2=25-9=16$ → $h=4$ m." },
      },
      questions: [
        {
          id: "olm-u4-s2-py-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a right triangle with legs 6 and 8, the hypotenuse is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" },
            { id: "b", text: "$\\sqrt{28}$" },
            { id: "c", text: "12" },
            { id: "d", text: "10" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "3-4-5 family." }], steps: [{ reasoning: "$\\sqrt{36+64}=\\sqrt{100}=10$.", marks: 1, markCode: "A" }], finalAnswer: "10" },
        },
        {
          id: "olm-u4-s2-py-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the missing side: legs 5 and 12.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "5-12-13." }], steps: [
            { reasoning: "$\\sqrt{25+144}=\\sqrt{169}=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 13.", marks: 1, markCode: "A" },
          ], finalAnswer: "13" },
        },
        {
          id: "olm-u4-s2-py-q3", difficulty: "core", totalMarks: 3,
          stem: "A rectangle is 9 cm by 12 cm. Find the diagonal.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Diagonal", statement: "Pythagoras on rectangle." }], steps: [
            { reasoning: "$d=\\sqrt{81+144}=\\sqrt{225}=15$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 cm.", marks: 1, markCode: "M" },
            { reasoning: "9-12-15 is 3-4-5 scaled by 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 cm" },
        },
        {
          id: "olm-u4-s2-py-q4", difficulty: "core", totalMarks: 4,
          stem: "A vertical pole 8 m tall is supported by a wire from its top to a point 6 m from the base. Find the wire length.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Real-world Pythagoras", statement: "Right triangle formed." }], steps: [
            { reasoning: "Right triangle: legs 8 m and 6 m; hypotenuse is wire.", marks: 1, markCode: "M" },
            { reasoning: "$w=\\sqrt{64+36}=\\sqrt{100}=10$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 m.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $8^2+6^2=64+36=100=10^2$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 m" },
        },
        {
          id: "olm-u4-s2-py-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. The other leg is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "12 cm" },
            { id: "b", text: "18 cm" },
            { id: "c", text: "8 cm" },
            { id: "d", text: "$\\sqrt{194}$ cm" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "$a^2+b^2=c^2$." }], steps: [{ reasoning: "$\\sqrt{169-25}=\\sqrt{144}=12$.", marks: 1, markCode: "A" }], finalAnswer: "12 cm" },
        },
        {
          id: "olm-u4-s2-py-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the hypotenuse of a right triangle with legs 7 cm and 24 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "7-24-25 triple." }], steps: [
            { reasoning: "$c=\\sqrt{49+576}=\\sqrt{625}=25$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 25 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 cm" },
        },
        {
          id: "olm-u4-s2-py-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A right triangle has hypotenuse 17 m and one leg 8 m. Find the other leg.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "8-15-17 triple." }], steps: [
            { reasoning: "$a=\\sqrt{289-64}=\\sqrt{225}=15$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 m" },
        },
        {
          id: "olm-u4-s2-py-q8", difficulty: "core", totalMarks: 1,
          stem: "Which set of lengths forms a right-angled triangle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4, 5, 6" },
            { id: "b", text: "5, 12, 13" },
            { id: "c", text: "7, 8, 9" },
            { id: "d", text: "2, 3, 4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "Check $a^2+b^2=c^2$." }], steps: [{ reasoning: "$25+144=169$ ✓.", marks: 1, markCode: "A" }], finalAnswer: "5, 12, 13" },
        },
        {
          id: "olm-u4-s2-py-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the hypotenuse of a right triangle whose legs are 8 cm and 15 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "8-15-17 triple." }], steps: [
            { reasoning: "$c=\\sqrt{64+225}=\\sqrt{289}$.", marks: 1, markCode: "M" },
            { reasoning: "$c=17$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 17 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "17 cm" },
        },
        {
          id: "olm-u4-s2-py-q10", difficulty: "core", totalMarks: 3,
          stem: "A right triangle has legs 20 cm and 21 cm. Find the length of the hypotenuse.",
          response: { type: "numeric", parts: [{ label: "a", answer: 29 }] },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "20-21-29 triple." }], steps: [
            { reasoning: "$c=\\sqrt{400+441}=\\sqrt{841}$.", marks: 1, markCode: "M" },
            { reasoning: "$c=29$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 29 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "29 cm" },
        },
        {
          id: "olm-u4-s2-py-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The space diagonal of a cuboid measuring 3 cm × 4 cm × 12 cm is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "13 cm" },
            { id: "b", text: "$\\sqrt{153}$ cm" },
            { id: "c", text: "17 cm" },
            { id: "d", text: "12 cm" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "3D Pythagoras", statement: "Apply twice." }], steps: [{ reasoning: "Base diagonal $=5$; $\\sqrt{25+144}=13$.", marks: 1, markCode: "A" }], finalAnswer: "13 cm" },
        },
        {
          id: "olm-u4-s2-py-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A cuboid has dimensions 6 cm, 8 cm and 24 cm. Find the length of its space diagonal, showing two applications of Pythagoras' theorem.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "3D Pythagoras", statement: "Base diagonal then vertical." }], steps: [
            { reasoning: "Base diagonal $=\\sqrt{36+64}=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Space diagonal $=\\sqrt{10^2+24^2}=\\sqrt{100+576}=\\sqrt{676}$.", marks: 1, markCode: "M" },
            { reasoning: "$=26$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 26 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "26 cm" },
        },
        {
          id: "olm-u4-s2-py-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Find the hypotenuse of a right triangle with legs 9 cm and 12 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "9-12-15 triple." }], steps: [
            { reasoning: "$c=\\sqrt{81+144}=\\sqrt{225}=15$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "15 cm" },
        },
        {
          id: "olm-u4-s2-py-q14", difficulty: "core", totalMarks: 3,
          stem: "A triangle has sides 7 cm, 24 cm and 25 cm. Show that it is right-angled.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Testing for right angle", statement: "Check $a^2+b^2=c^2$." }], steps: [
            { reasoning: "$7^2+24^2=49+576=625$.", marks: 1, markCode: "M" },
            { reasoning: "$25^2=625$, so $7^2+24^2=25^2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: the triangle is right-angled (25 cm is the hypotenuse).", marks: 1, markCode: "A" },
          ], finalAnswer: "Right-angled" },
        },
        {
          id: "olm-u4-s2-py-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A rectangle has diagonal 25 cm and one side 7 cm. Find the length of the other side.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Pythagoras rearranged", statement: "Diagonal is hypotenuse." }], steps: [
            { reasoning: "Right triangle with hypotenuse 25 and one leg 7.", marks: 1, markCode: "M" },
            { reasoning: "$a=\\sqrt{625-49}=\\sqrt{576}=24$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Check: $7^2+24^2=49+576=625=25^2$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 24 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "24 cm" },
        },
        {
          id: "olm-u4-s2-py-q16", difficulty: "core", totalMarks: 1,
          stem: "The diagonal of a rectangle measuring 8 cm by 15 cm is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "23 cm" },
            { id: "b", text: "$\\sqrt{209}$ cm" },
            { id: "c", text: "17 cm" },
            { id: "d", text: "12 cm" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Pythagoras", statement: "8-15-17 triple." }], steps: [{ reasoning: "$\\sqrt{64+225}=\\sqrt{289}=17$.", marks: 1, markCode: "A" }], finalAnswer: "17 cm" },
        },
      ],
    },
    {
      id: "olm-u4-s2-circle",
      title: "Circle theorems",
      skill: "Apply basic circle theorems at O Level.",
      lesson: {
        sections: [
          { heading: "Key theorems", body: "Angle in a semicircle is $90°$ — any triangle inscribed with the diameter as one side is right-angled at the third vertex. Angle at centre = twice angle at circumference standing on the same arc. Angles in the same segment are equal. The perpendicular from centre to a chord bisects the chord. Tangent is perpendicular to radius at point of contact." },
          { heading: "Problem approach", body: "Draw radii to create isosceles triangles — radii are equal, so base angles match. Combine with triangle angle sums. For tangent problems, use the $90°$ angle between tangent and radius to set up right triangles, often needing Pythagoras." },
        ],
        keyFormulas: [
          { name: "Semicircle", statement: "Angle in semicircle = $90°$" },
          { name: "Centre angle", statement: "Centre = $2\\times$ circumference" },
        ],
        workedExample: { problem: "A chord subtends $50°$ at the circumference. Find the angle at the centre.", solution: "Centre angle = $2\\times50°=100°$ (same arc)." },
      },
      questions: [
        {
          id: "olm-u4-s2-ci-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The angle in a semicircle is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$180°$" },
            { id: "b", text: "$60°$" },
            { id: "c", text: "$45°$" },
            { id: "d", text: "$90°$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Semicircle", statement: "$90°$." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "$90°$" },
        },
        {
          id: "olm-u4-s2-ci-q2", difficulty: "foundation", totalMarks: 2,
          stem: "An angle at the circumference is $35°$. Find the angle at the centre on the same arc.",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Double." }], steps: [
            { reasoning: "$2\\times35=70°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $70°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$70°$" },
        },
        {
          id: "olm-u4-s2-ci-q3", difficulty: "core", totalMarks: 3,
          stem: "A tangent touches a circle at point P. The radius OP is 5 cm. Find the distance from the centre to an external point 13 cm away along the tangent line.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent-radius", statement: "Perpendicular." }], steps: [
            { reasoning: "Tangent ⊥ radius at P → right triangle with legs $r=5$ and tangent length $t$.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\sqrt{13^2-5^2}=\\sqrt{144}=12$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 cm" },
        },
        {
          id: "olm-u4-s2-ci-q4", difficulty: "core", totalMarks: 4,
          stem: "Two tangents from an external point touch a circle of radius 6 cm. The distance from external point to centre is 10 cm. Find the length of each tangent.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent-radius", statement: "Right triangle." }], steps: [
            { reasoning: "Right triangle: hypotenuse 10 (centre to external point), one leg 6 (radius).", marks: 1, markCode: "M" },
            { reasoning: "Tangent length $=\\sqrt{10^2-6^2}=\\sqrt{64}=8$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Both tangents equal: 8 cm each.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 cm" },
        },
        {
          id: "olm-u4-s2-ci-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Angles in the same segment of a circle are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Complementary" },
            { id: "b", text: "Supplementary" },
            { id: "c", text: "Right angles" },
            { id: "d", text: "Equal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "theorem", name: "Same segment", statement: "Equal angles." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olm-u4-s2-ci-q6", difficulty: "foundation", totalMarks: 2,
          stem: "An angle subtended at the circumference is 28°. Find the angle subtended at the centre by the same arc.",
          response: { type: "numeric", parts: [{ label: "a", answer: 56 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Double the circumference angle." }], steps: [
            { reasoning: "$2\\times28=56°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $56°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$56°$" },
        },
        {
          id: "olm-u4-s2-ci-q7", difficulty: "foundation", totalMarks: 2,
          stem: "An angle at the centre subtending an arc is 110°. Find the angle subtended by the same arc at a point on the circumference.",
          response: { type: "numeric", parts: [{ label: "a", answer: 55 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Circumference angle is half." }], steps: [
            { reasoning: "$110\\div2=55°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $55°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$55°$" },
        },
        {
          id: "olm-u4-s2-ci-q8", difficulty: "core", totalMarks: 1,
          stem: "The perpendicular drawn from the centre of a circle to a chord…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Doubles the chord" },
            { id: "b", text: "Is parallel to the chord" },
            { id: "c", text: "Bisects the chord" },
            { id: "d", text: "Has length equal to the radius" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "theorem", name: "Chord bisect", statement: "Perpendicular from centre bisects chord." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Bisects the chord" },
        },
        {
          id: "olm-u4-s2-ci-q9", difficulty: "core", totalMarks: 3,
          stem: "In a circle of radius 5 cm, a chord is 3 cm from the centre. Find the length of the chord.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chord and radius", statement: "Right triangle with hypotenuse $r$." }], steps: [
            { reasoning: "Half-chord $h$: $h^2+3^2=5^2$ → $h^2=16$ → $h=4$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Chord length $=2\\times4=8$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 cm" },
        },
        {
          id: "olm-u4-s2-ci-q10", difficulty: "core", totalMarks: 3,
          stem: "An angle at the centre is 110°. Find the angle subtended by the same arc at a point on the major arc of the circumference.",
          response: { type: "numeric", parts: [{ label: "a", answer: 55 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Half at circumference." }], steps: [
            { reasoning: "Circumference angle $=\\frac{110}{2}=55°$.", marks: 1, markCode: "M" },
            { reasoning: "The point is on the major arc, so it subtends the minor arc of $110°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $55°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$55°$" },
        },
        {
          id: "olm-u4-s2-ci-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Two tangents drawn to a circle from the same external point are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "At 60° to each other" },
            { id: "b", text: "Perpendicular to each other" },
            { id: "c", text: "Equal in length" },
            { id: "d", text: "Parallel" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "theorem", name: "Two tangents", statement: "Equal lengths." }], steps: [{ reasoning: "Tangents from an external point are equal.", marks: 1, markCode: "A" }], finalAnswer: "Equal in length" },
        },
        {
          id: "olm-u4-s2-ci-q12", difficulty: "challenge", totalMarks: 4,
          stem: "AB is a diameter of a circle. Point C lies on the circumference with AC = 6 cm and BC = 8 cm. Find the length of AB.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Semicircle + Pythagoras", statement: "Right angle at C." }], steps: [
            { reasoning: "Angle ACB = $90°$ (angle in a semicircle).", marks: 1, markCode: "M" },
            { reasoning: "$AB^2=6^2+8^2=36+64=100$.", marks: 1, markCode: "M" },
            { reasoning: "$AB=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 cm" },
        },
        {
          id: "olm-u4-s2-ci-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which statement about a tangent to a circle is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It passes through the centre" },
            { id: "b", text: "It is parallel to the radius" },
            { id: "c", text: "It is perpendicular to the radius at the point of contact" },
            { id: "d", text: "It bisects the circle" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent-radius", statement: "Perpendicular at contact." }], steps: [{ reasoning: "Standard theorem.", marks: 1, markCode: "A" }], finalAnswer: "Perpendicular to radius" },
        },
        {
          id: "olm-u4-s2-ci-q14", difficulty: "core", totalMarks: 3,
          stem: "Two tangents are drawn from an external point to a circle of radius 9 cm. The distance from the external point to the centre is 15 cm. Find the length of each tangent.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent-radius", statement: "Right triangle." }], steps: [
            { reasoning: "Right triangle: hypotenuse 15, one leg 9 (radius), other leg = tangent.", marks: 1, markCode: "M" },
            { reasoning: "$t=\\sqrt{225-81}=\\sqrt{144}=12$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 cm" },
        },
        {
          id: "olm-u4-s2-ci-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A circle has radius 13 cm. A chord is 12 cm from the centre. Find the length of the chord.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Chord and radius", statement: "Pythagoras on half-chord." }], steps: [
            { reasoning: "Half-chord $h$: $h^2+12^2=13^2$ → $h^2=169-144=25$ → $h=5$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Chord length $=2\\times5=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 cm.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $5^2+12^2=25+144=169=13^2$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 cm" },
        },
        {
          id: "olm-u4-s2-ci-q16", difficulty: "core", totalMarks: 2,
          stem: "An angle at the centre subtending an arc is 130°. Find the angle subtended by the same arc at a point on the circumference.",
          response: { type: "numeric", parts: [{ label: "a", answer: 65 }] },
          markscheme: { principles: [{ kind: "theorem", name: "Centre angle", statement: "Half at circumference." }], steps: [
            { reasoning: "$130\\div2=65°$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $65°$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$65°$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u4-s2-geo-notes", title: "Pythagoras & circles — notes", summary: "Right triangles and circle theorems.",
      sections: [
        { heading: "Pythagoras", body: "$a^2+b^2=c^2$; triples 3-4-5, 5-12-13; use twice for 3D." },
        { heading: "Circles", body: "Semicircle $90°$; centre = $2×$ circumference; tangent ⊥ radius; radii equal → isosceles." },
      ] },
  ],
};
