import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cialfm-u3-lesson-3-1",
  code: "3-1",
  title: "Complex numbers and Argand diagrams",
  goal: "I CAN represent and manipulate complex numbers on an Argand diagram.",
  standards: ["9231 P1: complex numbers"],
  vocabulary: [
    { term: "Complex number", definition: "$z = x + iy$ where $i^2 = -1$." },
    { term: "Real part", definition: "$\\operatorname{Re}(z) = x$." },
    { term: "Imaginary part", definition: "$\\operatorname{Im}(z) = y$." },
    { term: "Argand diagram", definition: "Complex plane with real axis horizontal, imaginary vertical." },
    { term: "Conjugate", definition: "$\\bar{z} = x - iy$." },
  ],
  concepts: [
    {
      id: "cialfm-u3-s1-argand",
      title: "Argand diagrams and conjugates",
      skill: "Plot complex numbers and use conjugates.",
      lesson: {
        sections: [
          {
            heading: "Argand diagram",
            body: "Plot $z=x+iy$ at point $(x,y)$. Real axis horizontal, imaginary vertical. Conjugate $\\bar{z}$ is reflection in real axis.",
          },
          {
            heading: "Modulus and argument",
            body: "$|z| = \\sqrt{x^2+y^2}$. Argument $\\arg z$ = angle from positive real axis, $-\\pi < \\arg z \\leq \\pi$.",
          },
        ],
        keyFormulas: [
          { name: "Modulus", statement: "$|z| = \\sqrt{x^2+y^2}$" },
          { name: "Argument", statement: "$\\arg z = \\tan^{-1}(y/x)$ (check quadrant)" },
        ],
        workedExample: {
          problem: "Find $|3+4i|$ and $\\arg(3+4i)$.",
          solution: "$|z|=5$; $\\arg z = \\tan^{-1}(4/3) \\approx 0.927$ rad.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-s1-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The complex number $z = 3 + 4i$ is plotted at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3, 4)$" }, { id: "b", text: "$(4, 3)$" }, { id: "c", text: "$(3, -4)$" }, { id: "d", text: "$(0, 0)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Argand", statement: "$(x,y)$ for $x+iy$." }],
            steps: [{ reasoning: "Real part 3, imaginary 4 → point $(3,4)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(3, 4)$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $|2 + 2i|$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.83, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Modulus", statement: "$\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$\\sqrt{4+4} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.83$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{2} \\approx 2.83$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the conjugate of $z = -1 + 5i$ and state $|z|$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conjugate", statement: "Flip imaginary sign." }],
            steps: [
              { reasoning: "$\\bar{z} = -1 - 5i$.", marks: 1, markCode: "M" },
              { reasoning: "$|z| = \\sqrt{1+25} = \\sqrt{26}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\bar{z}=-1-5i$, $|z|=\\sqrt{26}$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Express $z = -2 + 2i$ in modulus-argument form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mod-arg form", statement: "$z = r(\\cos\\theta + i\\sin\\theta)$." }],
            steps: [
              { reasoning: "$r = \\sqrt{4+4} = 2\\sqrt{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\theta = \\tan^{-1}(2/-2)$ in Q2 $= \\frac{3\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$z = 2\\sqrt{2}(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4})$.", marks: 1, markCode: "M" },
              { reasoning: "Check quadrant — negative real, positive imag.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{2}\\operatorname{cis}\\frac{3\\pi}{4}$",
          },
        },
      ],
    },
    {
      id: "cialfm-u3-s1-loci",
      title: "Complex loci",
      skill: "Identify loci on Argand diagrams.",
      lesson: {
        sections: [
          {
            heading: "Common loci",
            body: "$|z - a| = r$: circle centre $a$, radius $r$. $|z - a| = |z - b|$: perpendicular bisector of $AB$. $\\arg(z - a) = \\theta$: ray from $a$.",
          },
          {
            heading: "Inequalities",
            body: "$|z - a| < r$: interior of circle. $|z-a| > |z-b|$: half-plane.",
          },
        ],
        keyFormulas: [
          { name: "Circle locus", statement: "$|z - a| = r$" },
        ],
        workedExample: {
          problem: "Describe the locus $|z - 2i| = 3$.",
          solution: "Circle centre $(0,2)$, radius 3.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-s1-lo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$|z - 1| = 2$ represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Circle centre $(1,0)$ radius 2" }, { id: "b", text: "Line $x=1$" }, { id: "c", text: "Circle centre $(0,1)$ radius 2" }, { id: "d", text: "Perpendicular bisector" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Locus", statement: "$|z-a|=r$ is circle." }],
            steps: [{ reasoning: "Centre at $z=1$ i.e. $(1,0)$, radius 2.", marks: 1, markCode: "A" }],
            finalAnswer: "Circle centre (1,0) r=2",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Describe the locus $|z - 2i| = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Locus", statement: "Identify centre/radius." }],
            steps: [
              { reasoning: "Centre $(0,2)$, radius 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circle centre (0,2), r=3",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the locus $|z - 1| = |z + 1|$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perpendicular bisector", statement: "Equidistant locus." }],
            steps: [
              { reasoning: "Points equidistant from $(1,0)$ and $(-1,0)$.", marks: 1, markCode: "M" },
              { reasoning: "Perpendicular bisector of segment joining them = imaginary axis ($x=0$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: the imaginary axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imaginary axis",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Sketch/describe the region $|z - 1 - i| \\leq 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inequality locus", statement: "Interior of circle." }],
            steps: [
              { reasoning: "Centre $(1,1)$, radius 2.", marks: 1, markCode: "M" },
              { reasoning: "$\\leq$ means include boundary (shaded disk).", marks: 1, markCode: "M" },
              { reasoning: "Region is closed disc.", marks: 1, markCode: "M" },
              { reasoning: "Answer described.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Closed disc centre (1,1) r=2",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u3-s1-cplx-notes",
      title: "Complex numbers — revision notes",
      summary: "Argand diagram, modulus, argument, loci.",
      sections: [
        { heading: "Basics", body: "$z=x+iy$ at $(x,y)$. $|z|=\\sqrt{x^2+y^2}$. $\\arg z$ from real axis, watch quadrant." },
        { heading: "Loci", body: "$|z-a|=r$ circle; $|z-a|=|z-b|$ perpendicular bisector; inequalities shade regions." },
      ],
    },
  ],
};
