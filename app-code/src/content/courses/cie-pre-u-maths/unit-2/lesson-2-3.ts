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
              { id: "a", text: "$(4, 0)$" },
              { id: "b", text: "$(0, 4)$" },
              { id: "c", text: "$(2, 2\\sqrt{3})$" },
              { id: "d", text: "$(0, -4)$" },
            ],
            correctChoiceId: "b",
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
