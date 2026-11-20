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
            { id: "a", text: "10" }, { id: "b", text: "14" }, { id: "c", text: "$\\sqrt{28}$" }, { id: "d", text: "12" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "$90°$" }, { id: "b", text: "$45°$" }, { id: "c", text: "$180°$" }, { id: "d", text: "$60°$" },
          ], correctChoiceId: "a" },
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
