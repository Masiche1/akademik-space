import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipum-u2-lesson-2-1",
  code: "2-1",
  title: "Coordinate Geometry and Conic Sections",
  goal: "I CAN work with conic sections and coordinate geometry at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: coordinate geometry",
  ],
  vocabulary: [
    {
      term: "Conic section",
      definition:
        "Curve from slicing a cone — circle, ellipse, parabola, hyperbola.",
    },
    { term: "Focus", definition: "Fixed point defining a conic's shape." },
    { term: "Directrix", definition: "Fixed line defining a conic's shape." },
    {
      term: "Eccentricity",
      definition: "Measure of how 'flattened' a conic is.",
    },
    {
      term: "Parametric equations",
      definition: "Coordinates expressed via a parameter.",
    },
  ],
  concepts: [
    {
      id: "cipum-u2-s1-conics",
      title: "Conic sections",
      skill:
        "Identify and work with circles, parabolas, ellipses and hyperbolas.",
      lesson: {
        sections: [
          {
            heading: "Conics at Pre-U",
            body: "Beyond IGCSE circles, Pre-U covers parabolas $y^2 = 4ax$ (focus $(a,0)$, directrix $x = -a$), ellipses $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, and hyperbolas $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Eccentricity $e$: circle $e=0$, ellipse $0<e<1$, parabola $e=1$, hyperbola $e>1$.",
          },
          {
            heading: "Key results",
            body: "Parabola: any point equidistant from focus and directrix. Ellipse: sum of distances to two foci is constant $2a$. Hyperbola: difference of distances is constant $2a$. These definitions generate the standard equations.",
          },
        ],
        keyFormulas: [
          {
            name: "Parabola",
            statement: "$y^2 = 4ax$; focus $(a,0)$; directrix $x=-a$",
          },
          {
            name: "Ellipse",
            statement:
              "$\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$; foci $(\\pm c,0)$, $c^2=a^2-b^2$",
          },
          {
            name: "Hyperbola",
            statement:
              "$\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$; asymptotes $y=\\pm\\frac{b}{a}x$",
          },
        ],
        workedExample: {
          problem: "Find the focus of the parabola $y^2 = 12x$.",
          solution: "$4a = 12 \\Rightarrow a = 3$; focus is $(3, 0)$.",
        },
      },
      questions: [
        {
          id: "cipum-u2-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the focus of the parabola $y^2 = 8x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2, 0)$" },
              { id: "b", text: "$(4, 0)$" },
              { id: "c", text: "$(8, 0)$" },
              { id: "d", text: "$(0, 2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Parabola",
                statement: "$y^2 = 4ax$ has focus $(a,0)$.",
              },
            ],
            steps: [
              {
                reasoning: "$4a = 8 \\Rightarrow a = 2$; focus $(2,0)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2, 0)$",
          },
        },
        {
          id: "cipum-u2-co-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, find the distance between the foci.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Ellipse foci",
                statement: "$c^2 = a^2 - b^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$a^2 = 25$, $b^2 = 9$; $c^2 = 16$, $c = 4$; foci $(\\pm 4, 0)$; distance $= 8$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipum-u2-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the hyperbola with foci $(\\pm 5, 0)$ and asymptotes $y = \\pm \\frac{3}{4}x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hyperbola",
                statement:
                  "$c^2 = a^2 + b^2$; asymptotes $y = \\pm\\frac{b}{a}x$.",
              },
            ],
            steps: [
              {
                reasoning: "$c = 5$, so $a^2 + b^2 = 25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{b}{a} = \\frac{3}{4}$, so $b = \\frac{3}{4}a$; $a^2 + \\frac{9}{16}a^2 = 25 \\Rightarrow a^2 = 16$, $b^2 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$",
          },
        },
        {
          id: "cipum-u2-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A point $P$ on the parabola $y^2 = 12x$ has $x$-coordinate 3. Find the coordinates of $P$ and the length of the focal chord through $P$ perpendicular to the axis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Parabola points",
                statement: "Substitute $x$ into $y^2 = 4ax$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$y^2 = 12(3) = 36$, so $y = \\pm 6$; $P = (3, 6)$ or $(3, -6)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Focal chord perpendicular to axis is the latus rectum, length $4a = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Verify: chord through $(3,\\pm6)$ and focus $(3,0)$ has length $12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coordinates $(3, \\pm 6)$; focal chord length 12.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(3, \\pm 6)$; length 12",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u2-conics-notes",
      title: "Conic sections — revision notes",
      summary: "Parabola, ellipse, hyperbola equations and focal properties.",
      sections: [
        {
          heading: "Key skills",
          body: "Memorise standard forms and focal distances; use $c^2 = a^2 \\pm b^2$ to locate foci.",
        },
        {
          heading: "Exam tips",
          body: "Identify the conic by the sign structure: one squared term + constant = parabola; both positive = ellipse; opposite signs = hyperbola.",
        },
      ],
    },
  ],
};
