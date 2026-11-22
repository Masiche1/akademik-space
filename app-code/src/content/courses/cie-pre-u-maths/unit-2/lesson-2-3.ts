import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipum-u2-lesson-2-3",
  code: "2-3",
  title: "Vectors and Polar Coordinates",
  goal: "I CAN work with vectors and polar coordinates at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: vectors, polar",
  ],
  vocabulary: [
    { term: "Vector", definition: "Quantity with magnitude and direction." },
    { term: "Position vector", definition: "Vector from origin to a point." },
    {
      term: "Polar coordinates",
      definition: "Point described by $(r, \\theta)$ — distance and angle.",
    },
    {
      term: "Cartesian coordinates",
      definition: "Point described by $(x, y)$.",
    },
    {
      term: "Scalar product",
      definition:
        "Dot product giving $|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$.",
    },
  ],
  concepts: [
    {
      id: "cipum-u2-s3-vectors",
      title: "Vectors and polar form",
      skill: "Convert between coordinate systems and apply vector operations.",
      lesson: {
        sections: [
          {
            heading: "Polar coordinates",
            body: "Convert $(r, \\theta)$ to Cartesian: $x = r\\cos\\theta$, $y = r\\sin\\theta$. Convert back: $r = \\sqrt{x^2+y^2}$, $\\theta = \\arctan(y/x)$ (adjusting for quadrant). Polar is natural for circles and rotations.",
          },
          {
            heading: "Vector operations",
            body: "Vectors add component-wise. Scalar (dot) product: $\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$ — zero means perpendicular. Vector equation of a line: $\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Polar to Cartesian",
            statement: "$x = r\\cos\\theta$, $y = r\\sin\\theta$",
          },
          {
            name: "Dot product",
            statement: "$\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1 + a_2b_2$",
          },
        ],
        workedExample: {
          problem:
            "Convert the point $(2, \\frac{\\pi}{3})$ from polar to Cartesian.",
          solution:
            "$x = 2\\cos\\frac{\\pi}{3} = 1$; $y = 2\\sin\\frac{\\pi}{3} = \\sqrt{3}$. Point: $(1, \\sqrt{3})$.",
        },
      },
      questions: [
        {
          id: "cipum-u2-ve-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $(4, \\frac{\\pi}{2})$ from polar to Cartesian coordinates.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 2\\sqrt{3})$" },
              { id: "b", text: "$(4, 0)$" },
              { id: "c", text: "$(0, -4)$" },
              { id: "d", text: "$(0, 4)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Polar conversion",
                statement: "$x = r\\cos\\theta$, $y = r\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x = 4\\cos\\frac{\\pi}{2} = 0$; $y = 4\\sin\\frac{\\pi}{2} = 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(0, 4)$",
          },
        },
        {
          id: "cipum-u2-ve-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the Cartesian coordinates of the point with polar coordinates $(3, \\frac{\\pi}{6})$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Polar conversion",
                statement: "$x = r\\cos\\theta$, $y = r\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x = 3\\cos\\frac{\\pi}{6} = \\frac{3\\sqrt{3}}{2}$; $y = 3\\sin\\frac{\\pi}{6} = \\frac{3}{2}$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\left(\\frac{3\\sqrt{3}}{2}, \\frac{3}{2}\\right)$",
          },
        },
        {
          id: "cipum-u2-ve-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the angle between vectors $\\mathbf{a} = (3, 4)$ and $\\mathbf{b} = (1, 0)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Dot product",
                statement:
                  "$\\cos\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{a}\\cdot\\mathbf{b} = 3$; $|\\mathbf{a}| = 5$, $|\\mathbf{b}| = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\cos\\theta = \\frac{3}{5}$, so $\\theta = \\arccos\\frac{3}{5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta \\approx 53.1^\\circ$ or $0.927$ rad.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\arccos\\frac{3}{5} \\approx 0.927$ rad",
          },
        },
        {
          id: "cipum-u2-ve-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the polar equation of the circle $x^2 + y^2 = 9$ and state its centre and radius in polar terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Polar equations",
                statement:
                  "Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$r^2\\cos^2\\theta + r^2\\sin^2\\theta = 9 \\Rightarrow r^2 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r = 3$ (taking positive root).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Centre at origin, radius 3 — polar form reveals circular symmetry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polar equation: $r = 3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$r = 3$; centre at origin, radius 3",
          },
        },
        {
          id: "cipum-u2-ve-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point $(0, 3)$ in Cartesian coordinates is represented in polar coordinates $(r, \\theta)$ as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3, \\pi)$" },
              { id: "b", text: "$(3, 0)$" },
              { id: "c", text: "$(3, \\frac{\\pi}{2})$" },
              { id: "d", text: "$(3, -\\frac{\\pi}{2})$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Polar coordinates",
                statement: "$r = \\sqrt{x^2+y^2}$, $\\theta = \\arctan(y/x)$ adjusted for quadrant.",
              },
            ],
            steps: [
              {
                reasoning: "$r = 3$; the point is on the positive $y$-axis, so $\\theta = \\frac{\\pi}{2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3, \\frac{\\pi}{2})$",
          },
        },
        {
          id: "cipum-u2-ve-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A point has polar coordinates $(6, \\frac{\\pi}{6})$. Find its distance from the origin.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar coordinates",
                statement: "$r$ is the distance from the origin.",
              },
            ],
            steps: [
              {
                reasoning: "In polar form $(r, \\theta)$, $r$ is already the distance from the origin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distance $= 6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipum-u2-ve-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the value of $k$ for which the vectors $(2, k)$ and $(4, -1)$ are perpendicular.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Perpendicular vectors",
                statement: "$\\mathbf{a} \\perp \\mathbf{b}$ iff $\\mathbf{a} \\cdot \\mathbf{b} = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$(2, k) \\cdot (4, -1) = 2(4) + k(-1) = 8 - k$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set $8 - k = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$k = 8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k = 8$",
          },
        },
        {
          id: "cipum-u2-ve-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the angle between the vectors $(1, 0)$ and $(0, 1)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$180^\\circ$" },
              { id: "b", text: "$0^\\circ$" },
              { id: "c", text: "$45^\\circ$" },
              { id: "d", text: "$90^\\circ$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Dot product",
                statement: "Unit basis vectors are perpendicular.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(1,0) \\cdot (0,1) = 0$, so the vectors are perpendicular: $90^\\circ$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$90^\\circ$",
          },
        },
        {
          id: "cipum-u2-ve-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the magnitude of the vector $\\mathbf{v} = (5, 12)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vector magnitude",
                statement: "$|\\mathbf{v}| = \\sqrt{v_1^2 + v_2^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$|\\mathbf{v}| = \\sqrt{25 + 144} = \\sqrt{169}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$|\\mathbf{v}| = 13$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "cipum-u2-ve-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the polar equation of the circle $x^2 + y^2 = 2x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Polar equations",
                statement: "Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$r^2\\cos^2\\theta + r^2\\sin^2\\theta = 2r\\cos\\theta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r^2 = 2r\\cos\\theta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $r$ (excluding the origin point $r=0$, which still satisfies the result): $r = 2\\cos\\theta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polar equation: $r = 2\\cos\\theta$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$r = 2\\cos\\theta$",
          },
        },
        {
          id: "cipum-u2-ve-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The scalar (dot) product of $(2, 3)$ and $(4, -1)$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-5" },
              { id: "b", text: "5" },
              { id: "c", text: "11" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Dot product",
                statement: "$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2$.",
              },
            ],
            steps: [
              {
                reasoning: "$2(4) + 3(-1) = 8 - 3 = 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipum-u2-ve-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the distance between the points $(1, 2)$ and $(4, 6)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Distance formula",
                statement: "$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$d = 5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipum-u2-ve-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\mathbf{a} \\cdot \\mathbf{b} = 0$ for two non-zero vectors, then the vectors are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perpendicular" },
              { id: "b", text: "Equal in magnitude" },
              { id: "c", text: "Equal vectors" },
              { id: "d", text: "Parallel" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Dot product and angle",
                statement: "$\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$; zero dot product means $\\theta = 90^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\Rightarrow \\cos\\theta = 0 \\Rightarrow \\theta = 90^\\circ$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perpendicular",
          },
        },
        {
          id: "cipum-u2-ve-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the polar coordinates $(r, \\theta)$ of the point $(-3, -3)$, giving $\\theta$ in the range $0 \\leq \\theta < 2\\pi$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4.242641, tolerance: 0.001 },
              { label: "b", answer: 3.926991, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Cartesian to polar",
                statement: "$r = \\sqrt{x^2+y^2}$, $\\theta$ adjusted for the correct quadrant.",
              },
            ],
            steps: [
              {
                reasoning: "$r = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2} \\approx 4.243$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\arctan\\frac{-3}{-3} = \\frac{\\pi}{4}$, but the point is in QIII, so $\\theta = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4} \\approx 3.927$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polar coordinates: $(3\\sqrt{2}, \\frac{5\\pi}{4})$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3\\sqrt{2}, \\frac{5\\pi}{4})$",
          },
        },
        {
          id: "cipum-u2-ve-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the polar equation of the vertical line $x = 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Polar equations",
                statement: "Substitute $x = r\\cos\\theta$ and rearrange.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $x = r\\cos\\theta$ into $x = 2$: $r\\cos\\theta = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $\\cos\\theta$: $r = \\frac{2}{\\cos\\theta}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write as $r = 2\\sec\\theta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Polar equation: $r = 2\\sec\\theta$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$r = 2\\sec\\theta$",
          },
        },
        {
          id: "cipum-u2-ve-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In polar coordinates, the equation $r = 4$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A straight line" },
              { id: "b", text: "A circle centred at the origin with radius 4" },
              { id: "c", text: "A parabola" },
              { id: "d", text: "A circle of radius 2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar equation",
                statement: "Constant $r$ means constant distance from the origin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$r = 4$ is a circle centred at the origin with radius 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Circle centred at origin, radius 4",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u2-vectors-notes",
      title: "Vectors and polar — revision notes",
      summary: "Polar↔Cartesian conversion, dot product, polar equations.",
      sections: [
        {
          heading: "Key skills",
          body: "Memorise $x = r\\cos\\theta$, $y = r\\sin\\theta$; dot product gives angles; polar forms simplify circles and rotations.",
        },
        {
          heading: "Exam tips",
          body: "When converting back to polar, check the quadrant — $\\arctan(y/x)$ alone may give the wrong angle.",
        },
      ],
    },
  ],
};
