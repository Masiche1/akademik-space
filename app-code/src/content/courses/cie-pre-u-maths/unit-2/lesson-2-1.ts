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
              { id: "a", text: "$(0, 2)$" },
              { id: "b", text: "$(2, 0)$" },
              { id: "c", text: "$(8, 0)$" },
              { id: "d", text: "$(4, 0)$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cipum-u2-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the equation of the directrix of the parabola $y^2 = 8x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = -2$" },
              { id: "b", text: "$x = 2$" },
              { id: "c", text: "$y = -2$" },
              { id: "d", text: "$x = 4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Parabola",
                statement: "$y^2 = 4ax$ has directrix $x = -a$.",
              },
            ],
            steps: [
              {
                reasoning: "$4a = 8 \\Rightarrow a = 2$; directrix $x = -2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = -2$",
          },
        },
        {
          id: "cipum-u2-co-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the ellipse $\\frac{x^2}{40} + \\frac{y^2}{24} = 1$, find the distance between the two foci.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Ellipse foci",
                statement: "$c^2 = a^2 - b^2$; foci at $(\\pm c, 0)$.",
              },
            ],
            steps: [
              {
                reasoning: "$a^2 = 40$, $b^2 = 24$; $c^2 = 16$, so $c = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distance between foci $= 2c = 8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipum-u2-co-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the hyperbola with vertices $(\\pm 4, 0)$ and asymptotes $y = \\pm \\frac{3}{4}x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hyperbola",
                statement:
                  "Vertices give $a$; asymptotes give $\\frac{b}{a}$.",
              },
            ],
            steps: [
              {
                reasoning: "Vertices $(\\pm 4, 0)$ give $a = 4$, so $a^2 = 16$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{b}{a} = \\frac{3}{4} \\Rightarrow b = 3$, so $b^2 = 9$.",
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
          id: "cipum-u2-co-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The curve $x^2 + y^2 - 4x + 6y = 3$ is a circle. What is its radius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "3" },
              { id: "c", text: "6" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Circle completion",
                statement: "Complete the square in $x$ and $y$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$(x-2)^2 + (y+3)^2 = 3 + 4 + 9 = 16$; radius $= 4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipum-u2-co-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the length of the latus rectum of the parabola $y^2 = 16x$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 16 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Parabola",
                statement: "Latus rectum length $= 4a$.",
              },
            ],
            steps: [
              {
                reasoning: "$4a = 16 \\Rightarrow a = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Latus rectum $= 4a = 16$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "cipum-u2-co-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the eccentricity of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Ellipse eccentricity",
                statement: "$e^2 = 1 - \\frac{b^2}{a^2}$ with $a > b$.",
              },
            ],
            steps: [
              {
                reasoning: "$a^2 = 25$, $b^2 = 9$, so $a = 5$, $b = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$c^2 = a^2 - b^2 = 16$, so $c = 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$e = \\frac{c}{a} = \\frac{4}{5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Eccentricity is $0.8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$e = \\frac{4}{5}$",
          },
        },
        {
          id: "cipum-u2-co-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The eccentricity of an ellipse always satisfies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$e = 0$" },
              { id: "b", text: "$e = 1$" },
              { id: "c", text: "$0 < e < 1$" },
              { id: "d", text: "$e > 1$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Eccentricity",
                statement:
                  "Circle $e=0$, ellipse $0<e<1$, parabola $e=1$, hyperbola $e>1$.",
              },
            ],
            steps: [
              {
                reasoning: "An ellipse has $0 < e < 1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0 < e < 1$",
          },
        },
        {
          id: "cipum-u2-co-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the parabola $y^2 = 12x$, find the distance between the focus and the directrix.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Parabola",
                statement: "Focus $(a,0)$; directrix $x = -a$.",
              },
            ],
            steps: [
              {
                reasoning: "$4a = 12 \\Rightarrow a = 3$; focus $(3,0)$, directrix $x = -3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distance $= 3 - (-3) = 6$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipum-u2-co-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$, what is the sum of the lengths of the major and minor axes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Ellipse axes",
                statement: "Major axis $2a$, minor axis $2b$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$a = 3$, $b = 2$; $2a + 2b = 6 + 4 = 10$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipum-u2-co-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The asymptotes of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = \\pm \\frac{4}{3}x$" },
              { id: "b", text: "$y = \\pm \\frac{16}{9}x$" },
              { id: "c", text: "$y = \\pm \\frac{3}{4}x$" },
              { id: "d", text: "$y = \\pm \\frac{9}{16}x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hyperbola asymptotes",
                statement: "Asymptotes are $y = \\pm \\frac{b}{a}x$.",
              },
            ],
            steps: [
              {
                reasoning: "$a = 4$, $b = 3$; asymptotes $y = \\pm \\frac{3}{4}x$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$y = \\pm \\frac{3}{4}x$",
          },
        },
        {
          id: "cipum-u2-co-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, what is the distance between the foci?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "5" },
              { id: "c", text: "25" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Hyperbola foci",
                statement: "$c^2 = a^2 + b^2$; foci at $(\\pm c, 0)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$c^2 = 9 + 16 = 25$, so $c = 5$; distance $= 2c = 10$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipum-u2-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the coordinates of the point where the line $y = x + 2$ meets the parabola $y^2 = 8x$, and show that the line is a tangent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Curve-line intersection",
                statement: "Substitute the line into the curve and solve.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $y = x + 2$ into $y^2 = 8x$: $(x+2)^2 = 8x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x^2 + 4x + 4 = 8x \\Rightarrow x^2 - 4x + 4 = 0 \\Rightarrow (x-2)^2 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Repeated root $x = 2$ gives $y = 4$; point $(2, 4)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A repeated root means the line touches the curve once — it is a tangent at $(2, 4)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tangent at $(2, 4)$",
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
