import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cialfm-u3-lesson-3-3",
  code: "3-3",
  title: "Polar coordinates and polar curves",
  goal: "I CAN convert between polar and Cartesian coordinates and sketch polar curves.",
  standards: ["9231 P1: polar coordinates"],
  vocabulary: [
    { term: "Polar coordinates", definition: "Point given by $(r, \\theta)$: distance and angle." },
    { term: "Pole", definition: "Origin of polar system, equivalent to Cartesian origin." },
    { term: "Polar curve", definition: "Graph of $r = f(\\theta)$." },
    { term: "Rose curve", definition: "Polar curve $r = a\\cos n\\theta$ producing petals." },
    { term: "Cardioid", definition: "Heart-shaped curve $r = a(1+\\cos\\theta)$." },
  ],
  concepts: [
    {
      id: "cialfm-u3-s3-convert",
      title: "Converting coordinates",
      skill: "Convert between polar and Cartesian at A Level.",
      lesson: {
        sections: [
          {
            heading: "Polar to Cartesian",
            body: "$x = r\\cos\\theta$, $y = r\\sin\\theta$. Also $r = \\sqrt{x^2+y^2}$, $\\theta = \\tan^{-1}(y/x)$ (check quadrant).",
          },
          {
            heading: "Cartesian to polar",
            body: "Substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$ into equation and simplify, often using $x^2+y^2=r^2$ and $y/x = \\tan\\theta$.",
          },
        ],
        keyFormulas: [
          { name: "Conversion", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$" },
        ],
        workedExample: {
          problem: "Convert $r = 2$ to Cartesian.",
          solution: "$r^2 = x^2+y^2 = 4$ — circle radius 2.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-s3-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In polar coordinates $(r,\\theta)$, $r$ represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Distance from pole" }, { id: "b", text: "Angle from x-axis" }, { id: "c", text: "x-coordinate" }, { id: "d", text: "y-coordinate" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Polar coords", statement: "$r$ = distance." }],
            steps: [{ reasoning: "$r$ is radial distance.", marks: 1, markCode: "A" }],
            finalAnswer: "Distance from pole",
          },
        },
        {
          id: "cialfm-u3-s3-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert polar $(2, \\frac{\\pi}{3})$ to Cartesian.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Use formulas." }],
            steps: [
              { reasoning: "$x = 2\\cos\\frac{\\pi}{3} = 1$; $y = 2\\sin\\frac{\\pi}{3} = \\sqrt3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $(1, \\sqrt3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(1, \\sqrt3)$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert the circle $x^2 + y^2 = 9$ to polar form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian→polar", statement: "Use $r^2=x^2+y^2$." }],
            steps: [
              { reasoning: "$r^2 = 9$ → $r = 3$ (take positive root).", marks: 1, markCode: "M" },
              { reasoning: "Answer: $r = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Circle centred at pole.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 3$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Convert $r = \\frac{4}{1+\\cos\\theta}$ to Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Multiply by denominator, substitute." }],
            steps: [
              { reasoning: "$r(1+\\cos\\theta) = 4$ → $r + r\\cos\\theta = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$r = \\sqrt{x^2+y^2}$, $r\\cos\\theta = x$ → $\\sqrt{x^2+y^2} + x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{x^2+y^2} = 4-x$; square: $x^2+y^2 = 16 - 8x + x^2$ → $y^2 = 16 - 8x$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y^2 = 16 - 8x$ (parabola).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y^2 = 16 - 8x$",
          },
        },
      ],
    },
    {
      id: "cialfm-u3-s3-curves",
      title: "Polar curves",
      skill: "Sketch and interpret common polar curves.",
      lesson: {
        sections: [
          {
            heading: "Common curves",
            body: "$r = a$: circle. $r = a\\cos\\theta$ or $a\\sin\\theta$: circle through origin. $r = a\\cos n\\theta$: rose with $n$ petals (n odd) or $2n$ petals (n even). $r = a(1+\\cos\\theta)$: cardioid.",
          },
          {
            heading: "Sketching",
            body: "Tabulate $\\theta$ and $r$, plot points. Note symmetry about axes. Negative $r$ means reflect through pole.",
          },
        ],
        keyFormulas: [
          { name: "Rose", statement: "$r = a\\cos n\\theta$" },
        ],
        workedExample: {
          problem: "Sketch $r = 2\\cos\\theta$.",
          solution: "Circle: $r^2 = 2r\\cos\\theta$ → $x^2+y^2 = 2x$ → $(x-1)^2+y^2=1$.",
        },
      },
      questions: [
        {
          id: "cialfm-u3-s3-cu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$r = a\\cos\\theta$ produces…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Circle through origin" }, { id: "b", text: "Rose curve" }, { id: "c", text: "Straight line" }, { id: "d", text: "Cardioid" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Polar curves", statement: "$r=a\\cos\\theta$ is circle." }],
            steps: [{ reasoning: "Gives circle through origin.", marks: 1, markCode: "A" }],
            finalAnswer: "Circle through origin",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many petals does $r = \\cos 3\\theta$ have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Rose petals", statement: "n odd → n petals." }],
            steps: [
              { reasoning: "$n=3$ odd → 3 petals.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert $r = 2\\sin\\theta$ to Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Multiply by $r$." }],
            steps: [
              { reasoning: "$r^2 = 2r\\sin\\theta$ → $x^2+y^2 = 2y$.", marks: 1, markCode: "M" },
              { reasoning: "$(x)^2 + (y-1)^2 = 1$ — circle centre $(0,1)$ radius 1.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + (y-1)^2 = 1$",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the Cartesian equation of $r = \\frac{3}{2-\\cos\\theta}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Isolate and substitute." }],
            steps: [
              { reasoning: "$2r - r\\cos\\theta = 3$ → $2\\sqrt{x^2+y^2} - x = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$2\\sqrt{x^2+y^2} = x+3$; square: $4(x^2+y^2) = x^2+6x+9$.", marks: 1, markCode: "M" },
              { reasoning: "$3x^2 - 6x + 4y^2 = 9$ → $3(x-1)^2 + 4y^2 = 12$ → ellipse.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ellipse equation shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3(x-1)^2 + 4y^2 = 12$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u3-s3-polar-notes",
      title: "Polar coordinates — revision notes",
      summary: "Conversions and common polar curves.",
      sections: [
        { heading: "Convert", body: "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$. Multiply by $r$ to eliminate." },
        { heading: "Curves", body: "$r=a$ circle; $r=a\\cos\\theta$ circle through origin; $r=a\\cos n\\theta$ rose; $r=a(1+\\cos\\theta)$ cardioid." },
      ],
    },
  ],
};
