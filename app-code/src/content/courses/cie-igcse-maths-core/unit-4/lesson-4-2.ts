import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cimg-u4-lesson-4-2",
  code: "4-2",
  title: "Pythagoras and Circles",
  goal: "I CAN use Pythagoras' theorem and circle theorems.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: geometry"],
  vocabulary: [
    { term: "Pythagoras' theorem", definition: "$a^2 + b^2 = c^2$ for right-angled triangles." },
    { term: "Hypotenuse", definition: "The longest side, opposite the right angle." },
    { term: "Radius", definition: "Distance from centre to edge of circle." },
    { term: "Diameter", definition: "Distance across circle through centre." },
    { term: "Chord", definition: "A line joining two points on a circle." },
  ],
  concepts: [
    {
      id: "cimg-u4-s2-pythagoras",
      title: "Pythagoras' theorem",
      skill: "Find missing sides using Pythagoras at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "The theorem",
            body: "In a right-angled triangle: $a^2 + b^2 = c^2$ where $c$ is the hypotenuse. Rearrange to find any side.",
          },
          {
            heading: "Using it",
            body: "To find hypotenuse: $c = \\sqrt{a^2 + b^2}$. To find a shorter side: $a = \\sqrt{c^2 - b^2}$.",
          },
        ],
        keyFormulas: [
          { name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
        ],
        workedExample: {
          problem: "Find the hypotenuse of a right triangle with sides 3 and 4.",
          solution: "$c = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
        },
      },
      questions: [
        {
          id: "cimg-u4-s2-py-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a right triangle with legs 5 and 12, what is the hypotenuse?",
          response: { type: "mcq", choices: [
            { id: "a", text: "13" },
            { id: "b", text: "10" },
            { id: "c", text: "7" },
            { id: "d", text: "17" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "$a^2+b^2=c^2$." }],
            steps: [{ reasoning: "$c = \\sqrt{25+144} = \\sqrt{169} = 13$.", marks: 1, markCode: "A" }],
            finalAnswer: "13",
          },
        },
        {
          id: "cimg-u4-s2-py-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the hypotenuse of a right triangle with legs 6 and 8.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "Apply theorem." }],
            steps: [
              { reasoning: "$c = \\sqrt{36+64} = \\sqrt{100}$.", marks: 1, markCode: "M" },
              { reasoning: "$c = 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cimg-u4-s2-py-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the missing leg of a right triangle with hypotenuse 13 and one leg 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "Rearrange." }],
            steps: [
              { reasoning: "$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144}$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u4-s2-py-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: " leans against a wall, reaching 4 m up. How far is the base from the wall?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pythagoras in context", statement: "Model the triangle." }],
            steps: [
              { reasoning: "Right triangle: ladder = hypotenuse = 5, height = 4.", marks: 1, markCode: "M" },
              { reasoning: "$d = \\sqrt{25 - 16} = \\sqrt{9} = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 m",
          },
        },
        {
          id: "cimg-u4-s2-py-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Pythagoras' theorem $a^2 + b^2 = c^2$, the side $c$ is always…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The hypotenuse" },
            { id: "b", text: "The base" },
            { id: "c", text: "The shortest side" },
            { id: "d", text: "A leg" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hypotenuse", statement: "Longest side, opposite the right angle." }],
            steps: [{ reasoning: "$c$ is the hypotenuse.", marks: 1, markCode: "A" }],
            finalAnswer: "The hypotenuse",
          },
        },
        {
          id: "cimg-u4-s2-py-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the hypotenuse of a right triangle with legs 9 and 12.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "Apply theorem." }],
            steps: [
              { reasoning: "$c = \\sqrt{81 + 144} = \\sqrt{225}$.", marks: 1, markCode: "M" },
              { reasoning: "$c = 15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u4-s2-py-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the hypotenuse of a right triangle with legs 8 and 15.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "Apply theorem." }],
            steps: [
              { reasoning: "$c = \\sqrt{64 + 225} = \\sqrt{289}$.", marks: 1, markCode: "M" },
              { reasoning: "$c = 17$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "cimg-u4-s2-py-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the missing leg of a right triangle with hypotenuse 25 and one leg 7.",
          response: { type: "numeric", parts: [{ label: "a", answer: 24 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "Rearrange." }],
            steps: [
              { reasoning: "$a = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576}$.", marks: 1, markCode: "M" },
              { reasoning: "$a = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
          },
        },
        {
          id: "cimg-u4-s2-py-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a Pythagorean triple?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6, 7, 8" },
            { id: "b", text: "4, 5, 6" },
            { id: "c", text: "7, 8, 10" },
            { id: "d", text: "5, 12, 13" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "$a^2+b^2=c^2$." }],
            steps: [{ reasoning: "$5^2 + 12^2 = 25 + 144 = 169 = 13^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "5, 12, 13",
          },
        },
        {
          id: "cimg-u4-s2-py-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle measures 9 cm by 12 cm. Use Pythagoras' theorem to find the length of its diagonal, showing all steps.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pythagoras in context", statement: "Diagonal is hypotenuse." }],
            steps: [
              { reasoning: "The diagonal splits the rectangle into a right triangle with legs 9 and 12.", marks: 1, markCode: "M" },
              { reasoning: "$d = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $d = 15$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 cm",
          },
        },
        {
          id: "cimg-u4-s2-py-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A right triangle has hypotenuse 10 cm and one leg 6 cm. Find the other leg, showing your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "Rearrange." }],
            steps: [
              { reasoning: "$a = \\sqrt{c^2 - b^2}$.", marks: 1, markCode: "M" },
              { reasoning: "$a = \\sqrt{100 - 36} = \\sqrt{64}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a = 8$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 cm",
          },
        },
        {
          id: "cimg-u4-s2-py-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ladder 5 m long reaches 3 m up a vertical wall. How far is the base of the ladder from the wall?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 m" },
            { id: "b", text: "4 m" },
            { id: "c", text: "5.8 m" },
            { id: "d", text: "2 m" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pythagoras in context", statement: "Model the triangle." }],
            steps: [{ reasoning: "$d = \\sqrt{25 - 9} = \\sqrt{16} = 4$ m.", marks: 1, markCode: "A" }],
            finalAnswer: "4 m",
          },
        },
        {
          id: "cimg-u4-s2-py-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a right-angled triangle, the hypotenuse is 2 cm longer than one of the legs, and the other leg is 6 cm. Find the length of the hypotenuse.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pythagoras algebra", statement: "Set up equation." }],
            steps: [
              { reasoning: "Let hypotenuse be $h$; leg is $h - 2$. Then $(h-2)^2 + 6^2 = h^2$.", marks: 1, markCode: "M" },
              { reasoning: "$h^2 - 4h + 4 + 36 = h^2$ → $-4h + 40 = 0$ → $h = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $8^2 + 6^2 = 64 + 36 = 100 = 10^2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hypotenuse $= 10$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 cm",
          },
        },
        {
          id: "cimg-u4-s2-py-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Triangle ABC is right-angled at B, with AB = 8 cm and BC = 15 cm. Find AC and hence the area of the triangle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "$a^2+b^2=c^2$." }],
            steps: [
              { reasoning: "$AC = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289}$.", marks: 1, markCode: "M" },
              { reasoning: "$AC = 17$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Area $= \\frac{1}{2} \\times 8 \\times 15 = 60$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: $AC = 17$ cm, area $= 60$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17 cm, 60 cm²",
          },
        },
        {
          id: "cimg-u4-s2-py-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which set of numbers is NOT a Pythagorean triple?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7, 8, 9" },
            { id: "b", text: "3, 4, 5" },
            { id: "c", text: "6, 8, 10" },
            { id: "d", text: "5, 12, 13" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "$a^2+b^2=c^2$." }],
            steps: [{ reasoning: "$7^2 + 8^2 = 113 \\neq 81 = 9^2$; the others all satisfy the theorem.", marks: 1, markCode: "A" }],
            finalAnswer: "7, 8, 9",
          },
        },
        {
          id: "cimg-u4-s2-py-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An isosceles right-angled triangle has legs of length 7 cm. What is the length of its hypotenuse?",
          response: { type: "mcq", choices: [
            { id: "a", text: "14 cm" },
            { id: "b", text: "10 cm" },
            { id: "c", text: "$7\\sqrt{2}$ cm" },
            { id: "d", text: "$49$ cm" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Pythagoras", statement: "$a^2+b^2=c^2$." }],
            steps: [{ reasoning: "$c = \\sqrt{49 + 49} = \\sqrt{98} = 7\\sqrt{2}$ cm ($\\approx 9.9$ cm).", marks: 1, markCode: "A" }],
            finalAnswer: "$7\\sqrt{2}$ cm",
          },
        },
      ],
    },
    {
      id: "cimg-u4-s2-circles",
      title: "Circle facts",
      skill: "Apply basic circle theorems at IGCSE Core level.",
      lesson: {
        sections: [
          {
            heading: "Basic circle facts",
            body: "Angle in a semicircle = 90°. Angle at centre = twice angle at circumference on same arc. Radius perpendicular to tangent.",
          },
          {
            heading: "Chord and arc",
            body: "The perpendicular from centre to chord bisects the chord. Equal chords are equidistant from centre.",
          },
        ],
        keyFormulas: [
          { name: "Semicircle", statement: "$90°$" },
          { name: "Centre angle", statement: "$2 \\times$ circumference angle" },
        ],
        workedExample: {
          problem: "An angle at the circumference is 40°. Find the angle at the centre on the same arc.",
          solution: "$2 \\times 40° = 80°$.",
        },
      },
      questions: [
        {
          id: "cimg-u4-s2-ci-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angle in a semicircle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "60°" },
            { id: "b", text: "180°" },
            { id: "c", text: "45°" },
            { id: "d", text: "90°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Semicircle theorem", statement: "$90°$." }],
            steps: [{ reasoning: "Angle in semicircle is 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An angle at circumference is 30°. Find the angle at the centre.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Centre angle", statement: "Double the circumference angle." }],
            steps: [
              { reasoning: "$2 \\times 30 = 60°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle is inscribed in a circle with one side as diameter. What is the angle opposite the diameter?",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Semicircle theorem", statement: "Diameter subtends 90°." }],
            steps: [
              { reasoning: "Diameter → semicircle → 90°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90°.", marks: 1, markCode: "M" },
              { reasoning: "This is a right-angled triangle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "In a circle, the angle at the centre subtending the minor arc is 110°. Find the angle at the circumference on the major arc.",
          response: { type: "numeric", parts: [{ label: "a", answer: 125 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflex angle", statement: "Major arc uses reflex." }],
            steps: [
              { reasoning: "Minor arc: centre angle $= 110°$; circumference angle $= 110 \\div 2 = 55°$.", marks: 1, markCode: "M" },
              { reasoning: "Major arc: reflex centre angle $= 360 - 110 = 250°$; circumference angle $= 250 \\div 2 = 125°$.", marks: 1, markCode: "M" },
              { reasoning: "The question says 'major arc', so use $125°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 125°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "125°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The angle subtended by a diameter at any point on the circumference is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "45°" },
            { id: "b", text: "180°" },
            { id: "c", text: "60°" },
            { id: "d", text: "90°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Semicircle theorem", statement: "$90°$." }],
            steps: [{ reasoning: "Angle in a semicircle is 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An angle at the circumference is 25°. Find the angle at the centre on the same arc.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Centre angle", statement: "Double the circumference angle." }],
            steps: [
              { reasoning: "$2 \\times 25 = 50°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "The angle at the centre subtending the minor arc of a circle is 140°. Find the angle at the circumference standing on the minor arc.",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Centre angle", statement: "Centre = 2 × circumference." }],
            steps: [
              { reasoning: "Circumference angle $= 140 \\div 2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 70°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 70°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tangent touches a circle at point T, and OT is a radius. What is the angle between the tangent and the radius?",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" },
            { id: "b", text: "60°" },
            { id: "c", text: "45°" },
            { id: "d", text: "180°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Tangent", statement: "Radius perpendicular to tangent." }],
            steps: [{ reasoning: "Radius is perpendicular to tangent: 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A chord of length 16 cm is 6 cm from the centre of a circle. Find the radius.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Chord and radius", statement: "Perpendicular bisects chord." }],
            steps: [
              { reasoning: "Half chord $= 8$; right triangle with legs 8 and 6, hypotenuse = radius.", marks: 1, markCode: "M" },
              { reasoning: "$r = \\sqrt{64 + 36} = \\sqrt{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $r = 10$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 cm",
          },
        },
        {
          id: "cimg-u4-s2-ci-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The angle at the centre of a circle subtending an arc is 80°. Find the angle at the circumference standing on the same arc, stating the theorem you use.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Centre angle", statement: "Centre = 2 × circumference." }],
            steps: [
              { reasoning: "Angle at centre is twice the angle at the circumference on the same arc.", marks: 1, markCode: "M" },
              { reasoning: "$80 \\div 2 = 40°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 40°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Angles in the same segment of a circle are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twice the centre angle" },
            { id: "b", text: "Equal" },
            { id: "c", text: "Complementary" },
            { id: "d", text: "Supplementary" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Same segment", statement: "Angles are equal." }],
            steps: [{ reasoning: "Angles in the same segment are equal.", marks: 1, markCode: "A" }],
            finalAnswer: "Equal",
          },
        },
        {
          id: "cimg-u4-s2-ci-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An angle at the circumference standing on the minor arc of a circle is 35°. Find the angle at the circumference standing on the major arc.",
          response: { type: "numeric", parts: [{ label: "a", answer: 145 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Major arc", statement: "Use reflex centre angle." }],
            steps: [
              { reasoning: "Minor arc centre angle $= 2 \\times 35 = 70°$.", marks: 1, markCode: "M" },
              { reasoning: "Major arc reflex centre angle $= 360 - 70 = 290°$.", marks: 1, markCode: "M" },
              { reasoning: "Circumference angle on major arc $= 290 \\div 2 = 145°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 145°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "145°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how to find the angle at the centre of a circle when you know the angle at the circumference on the same arc, and use it to find the centre angle when the circumference angle is 28°.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Centre angle", statement: "Centre = 2 × circumference." }],
            steps: [
              { reasoning: "The angle at the centre is twice the angle at the circumference on the same arc.", marks: 1, markCode: "M" },
              { reasoning: "$2 \\times 28 = 56°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 56°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "56°",
          },
        },
        {
          id: "cimg-u4-s2-ci-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The perpendicular drawn from the centre of a circle to a chord…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is parallel to the chord" },
            { id: "b", text: "Doubles the chord" },
            { id: "c", text: "Makes the chord a diameter" },
            { id: "d", text: "Bisects the chord" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Chord", statement: "Perpendicular from centre bisects chord." }],
            steps: [{ reasoning: "The perpendicular from the centre bisects the chord.", marks: 1, markCode: "A" }],
            finalAnswer: "Bisects the chord",
          },
        },
        {
          id: "cimg-u4-s2-ci-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A chord of length 24 cm is 5 cm from the centre of a circle. Find the radius.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Chord and radius", statement: "Perpendicular bisects chord." }],
            steps: [
              { reasoning: "Half chord $= 12$; $r = \\sqrt{12^2 + 5^2}$.", marks: 1, markCode: "M" },
              { reasoning: "$r = \\sqrt{144 + 25} = \\sqrt{169}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $r = 13$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13 cm",
          },
        },
        {
          id: "cimg-u4-s2-ci-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The angle at the centre of a circle is 150°. Find the angle at the circumference standing on the major arc.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Major arc", statement: "Use reflex centre angle." }],
            steps: [
              { reasoning: "Major arc reflex centre angle $= 360 - 150 = 210°$.", marks: 1, markCode: "M" },
              { reasoning: "Circumference angle $= 210 \\div 2 = 105°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 105°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "105°",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u4-s2-pyt-notes",
      title: "Pythagoras and circles — revision notes",
      summary: "$a^2+b^2=c^2$, circle theorems.",
      sections: [
        { heading: "Pythagoras", body: "Right triangles only. $c$ is hypotenuse. Rearrange for any side." },
        { heading: "Circles", body: "Semicircle = 90°. Centre = 2× circumference. Check which arc you're on." },
      ],
    },
  ],
};
