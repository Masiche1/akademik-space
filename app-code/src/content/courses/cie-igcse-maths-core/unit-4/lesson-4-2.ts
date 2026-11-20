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
            { id: "a", text: "13" }, { id: "b", text: "17" }, { id: "c", text: "7" }, { id: "d", text: "10" },
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
            { id: "a", text: "90°" }, { id: "b", text: "60°" }, { id: "c", text: "45°" }, { id: "d", text: "180°" },
          ], correctChoiceId: "a" },
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
