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
            { id: "a", text: "$(4, 3)$" },
            { id: "b", text: "$(3, -4)$" },
            { id: "c", text: "$(0, 0)$" },
            { id: "d", text: "$(3, 4)$" },
          ], correctChoiceId: "d" },
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
        {
          id: "cialfm-u3-s1-ar-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $z = -2 + 7i$, $\\operatorname{Re}(z)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "5" },
            { id: "d", text: "-2" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Real part", statement: "$\\operatorname{Re}(x+iy)=x$." }],
            steps: [{ reasoning: "Real part is $-2$.", marks: 1, markCode: "A" }],
            finalAnswer: "-2",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $|-3 + 4i|$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Modulus", statement: "$|z|=\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$\\sqrt{(-3)^2+4^2} = \\sqrt{25} = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $|1 - i|$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.414, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Modulus", statement: "$|z|=\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$\\sqrt{1+1} = \\sqrt{2} \\approx 1.414$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt{2}$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $z = (3+4i)(1-i)$, find $\\operatorname{Re}(z)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Complex product", statement: "Expand using $i^2=-1$." }],
            steps: [
              { reasoning: "$z = 3-3i+4i-4i^2 = 3+i+4 = 7+i$.", marks: 1, markCode: "M" },
              { reasoning: "$\\operatorname{Re}(z)=7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" }],
            finalAnswer: "7",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\arg(-1)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\pi$" },
            { id: "b", text: "$\\pi$" },
            { id: "c", text: "$0$" },
            { id: "d", text: "$\\frac{\\pi}{2}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Principal argument", statement: "$-\\pi < \\arg z \\leq \\pi$." }],
            steps: [{ reasoning: "Negative real axis: $\\arg = \\pi$ (principal value).", marks: 1, markCode: "A" }],
            finalAnswer: "$\\pi$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $|-5 + 12i|$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 13 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Modulus", statement: "$\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$\\sqrt{25+144} = \\sqrt{169} = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13.", marks: 1, markCode: "A" }],
            finalAnswer: "13",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $z = -1 - i$ in modulus-argument form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mod-arg form", statement: "$z=r\\operatorname{cis}\\theta$." }],
            steps: [
              { reasoning: "$r = \\sqrt{1+1} = \\sqrt{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Third quadrant: $\\theta = -\\frac{3\\pi}{4}$ (or $\\frac{5\\pi}{4}$ excluded).", marks: 1, markCode: "M" },
              { reasoning: "$z = \\sqrt{2}\\operatorname{cis}(-\\frac{3\\pi}{4})$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt{2}\\operatorname{cis}(-\\frac{3\\pi}{4})$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\arg(i)=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0$" },
            { id: "b", text: "$-\\frac{\\pi}{2}$" },
            { id: "c", text: "$\\pi$" },
            { id: "d", text: "$\\frac{\\pi}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Argument", statement: "Angle from positive real axis." }],
            steps: [{ reasoning: "$i$ is on the positive imaginary axis: $\\pi/2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{\\pi}{2}$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "For any complex number $z$, $z\\bar{z}=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\operatorname{Re}(z)$" },
            { id: "b", text: "$|z|^2$" },
            { id: "c", text: "$z^2$" },
            { id: "d", text: "$\\bar{z}^2$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Conjugate product", statement: "$(x+iy)(x-iy)=x^2+y^2$." }],
            steps: [{ reasoning: "$z\\bar{z}=|z|^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$|z|^2$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For complex numbers $z_1, z_2$, which inequality always holds?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$|z_1 z_2| = |z_1|+|z_2|$" },
            { id: "b", text: "$|z_1+z_2| \\leq |z_1|+|z_2|$" },
            { id: "c", text: "$|z_1| \\leq |z_2|$ always" },
            { id: "d", text: "$|z_1+z_2| = |z_1|+|z_2|$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Triangle inequality", statement: "$|z_1+z_2| \\leq |z_1|+|z_2|$." }],
            steps: [{ reasoning: "Triangle inequality for complex moduli.", marks: 1, markCode: "A" }],
            finalAnswer: "$|z_1+z_2| \\leq |z_1|+|z_2|$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $|z|=2$ and $\\arg z = \\frac{\\pi}{3}$, find $z$ in Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mod-arg to Cartesian", statement: "$z = r\\cos\\theta + ir\\sin\\theta$." }],
            steps: [
              { reasoning: "$z = 2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}) = 2(\\frac12 + i\\frac{\\sqrt3}{2})$.", marks: 1, markCode: "M" },
              { reasoning: "$= 1 + \\sqrt{3}\\,i$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $z = 1+\\sqrt{3}i$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1+\\sqrt{3}i$",
          },
        },
        {
          id: "cialfm-u3-s1-ar-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $z = \\sqrt{3} + i$.",
          parts: [
            { label: "a", prompt: "Find $|z|$.", marks: 1 },
            { label: "b", prompt: "Find $\\arg z$.", marks: 1 },
            { label: "c", prompt: "Write $z$ in modulus-argument form.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mod-arg analysis", statement: "Compute $r$, $\\theta$, then combine." }],
            steps: [
              { reasoning: "$|z| = \\sqrt{3+1} = 2$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "$\\arg z = \\tan^{-1}(1/\\sqrt{3}) = \\frac{\\pi}{6}$ (first quadrant).", marks: 1, markCode: "M", part: "b" },
              { reasoning: "$z = 2\\cos\\frac{\\pi}{6} + 2i\\sin\\frac{\\pi}{6} = \\sqrt{3}+i$ ✓.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "$z = 2\\operatorname{cis}\\frac{\\pi}{6}$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$|z|=2$, $\\arg z=\\frac{\\pi}{6}$, $z=2\\operatorname{cis}\\frac{\\pi}{6}$",
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
            { id: "a", text: "Line $x=1$" },
            { id: "b", text: "Perpendicular bisector" },
            { id: "c", text: "Circle centre $(1,0)$ radius 2" },
            { id: "d", text: "Circle centre $(0,1)$ radius 2" },
          ], correctChoiceId: "c" },
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
        {
          id: "cialfm-u3-s1-lo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The locus $\\arg(z-1) = \\frac{\\pi}{2}$ represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A circle" },
            { id: "b", text: "A ray from $(1,0)$ vertically upwards" },
            { id: "c", text: "A perpendicular bisector" },
            { id: "d", text: "The real axis" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Argument locus", statement: "$\\arg(z-a)=\\theta$ is a ray from $a$." }],
            steps: [{ reasoning: "Fixed argument gives a ray from the point $z=1$ at angle $\\pi/2$.", marks: 1, markCode: "A" }],
            finalAnswer: "Vertical ray from (1,0)",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The locus $|z - 3i| = 2$ has centre…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,0)$" },
            { id: "b", text: "$(0,-3)$" },
            { id: "c", text: "$(0,3)$" },
            { id: "d", text: "$(3,0)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Circle locus", statement: "Centre at the point $a$ in $|z-a|=r$." }],
            steps: [{ reasoning: "$3i$ corresponds to $(0,3)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(0,3)$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The locus $|z - 2i| = 3$ meets the imaginary axis at two points. Find the larger $y$-coordinate.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Circle-axis intersection", statement: "Centre $(0,2)$, radius 3." }],
            steps: [
              { reasoning: "On imaginary axis: $|iy - 2i| = |y-2| = 3$ → $y = 5$ or $y = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Larger value: 5.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the locus $|z + 1| = |z - i|$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perpendicular bisector", statement: "Equidistant from two points." }],
            steps: [
              { reasoning: "Equidistant from $(-1,0)$ and $(0,1)$.", marks: 1, markCode: "M" },
              { reasoning: "$(x+1)^2+y^2 = x^2+(y-1)^2$ → $2x = -2y$ → $x+y=0$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: the line $x+y=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x+y=0$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The region $|z - 1| > |z + 1|$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The half-plane $x < 0$" },
            { id: "b", text: "The half-plane $x > 0$" },
            { id: "c", text: "The whole plane" },
            { id: "d", text: "A circle" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Bisector inequality", statement: "Closer to $z=1$ ⇒ $x>0$." }],
            steps: [{ reasoning: "Points nearer $(1,0)$ than $(-1,0)$ lie in $x>0$.", marks: 1, markCode: "A" }],
            finalAnswer: "Half-plane $x>0$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between the centres of the loci $|z-1|=2$ and $|z-i|=1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.414, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Centre distance", statement: "Distance between $(1,0)$ and $(0,1)$." }],
            steps: [
              { reasoning: "$\\sqrt{(1-0)^2+(0-1)^2} = \\sqrt{2} \\approx 1.414$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt{2}$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the region defined by $|z - 1| < 2$ and $\\operatorname{Im}(z) > 0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Combined loci", statement: "Intersect conditions." }],
            steps: [
              { reasoning: "$|z-1|<2$: open disc centre $(1,0)$ radius 2.", marks: 1, markCode: "M" },
              { reasoning: "$\\operatorname{Im}(z)>0$: upper half-plane.", marks: 1, markCode: "M" },
              { reasoning: "Region: part of disc above the real axis (boundary excluded on both).", marks: 1, markCode: "M" },
              { reasoning: "Answer described.", marks: 1, markCode: "A" }],
            finalAnswer: "Upper half of open disc centre (1,0) r=2",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The locus $|z - 2i| = |z + 2i|$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The real axis" },
            { id: "b", text: "A circle" },
            { id: "c", text: "A ray" },
            { id: "d", text: "The imaginary axis" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Bisector", statement: "Equidistant from $(0,2)$ and $(0,-2)$." }],
            steps: [{ reasoning: "Perpendicular bisector of a vertical segment is horizontal: $y=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "Real axis",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The locus $|z - 2| = |z - i|$ is a straight line. Find its $y$-intercept.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1.5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Bisector equation", statement: "Expand equidistance." }],
            steps: [
              { reasoning: "$(x-2)^2+y^2 = x^2+(y-1)^2$ → $-4x+4 = -2y+1$ → $y = 2x - \\frac32$.", marks: 1, markCode: "M" },
              { reasoning: "$y$-intercept: $x=0$ → $y = -\\frac32$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-\\frac32$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-\\frac{3}{2}$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The circle $|z - (1+i)| = 2$ has centre $1+i$. Find the modulus of its centre.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.414, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Modulus", statement: "$|x+iy|=\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$|1+i| = \\sqrt{2} \\approx 1.414$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt{2}$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The locus $\\arg z = -\\frac{\\pi}{4}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A circle" },
            { id: "b", text: "A ray in the fourth quadrant at $-45°$ to the real axis" },
            { id: "c", text: "A ray in the first quadrant" },
            { id: "d", text: "The line $y=-x$ extended both ways" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Argument locus", statement: "Ray from origin." }],
            steps: [{ reasoning: "Negative argument: ray below positive real axis at $-\\pi/4$.", marks: 1, markCode: "A" }],
            finalAnswer: "Ray at $-\\pi/4$",
          },
        },
        {
          id: "cialfm-u3-s1-lo-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Consider the loci $L_1: |z-2|=2$, $L_2: |z+1|=|z-1|$ and $L_3: |z|<1$.",
          parts: [
            { label: "a", prompt: "Describe $L_1$.", marks: 1 },
            { label: "b", prompt: "Describe $L_2$.", marks: 2 },
            { label: "c", prompt: "Describe $L_3$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Locus identification", statement: "Circle, bisector, disc." }],
            steps: [
              { reasoning: "$L_1$: circle centre $(2,0)$ radius 2.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$L_2$: equidistant from $(-1,0)$ and $(1,0)$ → imaginary axis $x=0$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): the imaginary axis.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$L_3$: $|z|<1$ is the open unit disc centred at origin.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Boundary excluded (strict inequality).", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$L_1$: circle (2,0) r=2; $L_2$: imaginary axis; $L_3$: open unit disc",
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
