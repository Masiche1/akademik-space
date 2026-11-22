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
            { id: "a", text: "y-coordinate" },
            { id: "b", text: "Distance from pole" },
            { id: "c", text: "x-coordinate" },
            { id: "d", text: "Angle from x-axis" },
          ], correctChoiceId: "b" },
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
        {
          id: "cialfm-u3-s3-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In polar coordinates $(r,\\theta)$, $\\theta$ is measured from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The negative $x$-axis" },
            { id: "b", text: "The line $y=x$" },
            { id: "c", text: "The positive $x$-axis (polar axis)" },
            { id: "d", text: "The $y$-axis" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Polar angle", statement: "Measured anticlockwise from polar axis." }],
            steps: [{ reasoning: "Standard convention: from positive $x$-axis.", marks: 1, markCode: "A" }],
            finalAnswer: "Positive x-axis",
          },
        },
        {
          id: "cialfm-u3-s3-co-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert the polar point $(3, \\frac{\\pi}{2})$ to Cartesian coordinates.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0 }, { label: "b", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$." }],
            steps: [
              { reasoning: "$x = 3\\cos\\frac{\\pi}{2} = 0$; $y = 3\\sin\\frac{\\pi}{2} = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Point: $(0,3)$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(0, 3)$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert the Cartesian point $(0, -2)$ to polar coordinates $(r,\\theta)$, giving $r$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian→polar", statement: "$r=\\sqrt{x^2+y^2}$." }],
            steps: [
              { reasoning: "$r = \\sqrt{0+4} = 2$ (and $\\theta = -\\frac{\\pi}{2}$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: $r=2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$r = 2$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Convert $r = 4\\cos\\theta$ to Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Multiply by $r$ and substitute." }],
            steps: [
              { reasoning: "$r^2 = 4r\\cos\\theta$ → $x^2+y^2 = 4x$.", marks: 1, markCode: "M" },
              { reasoning: "Complete the square: $(x-2)^2 + y^2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Circle centre $(2,0)$ radius 2.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$(x-2)^2 + y^2 = 4$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In polar coordinates, $r\\sin\\theta$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y$" },
            { id: "b", text: "$x$" },
            { id: "c", text: "$r$" },
            { id: "d", text: "$x^2+y^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conversion", statement: "$y = r\\sin\\theta$." }],
            steps: [{ reasoning: "Standard conversion identity.", marks: 1, markCode: "A" }],
            finalAnswer: "$y$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The polar point $(2, \\pi)$ converts to the Cartesian point…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,0)$" },
            { id: "b", text: "$(0,2)$" },
            { id: "c", text: "$(-2,0)$" },
            { id: "d", text: "$(-2,-2)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$." }],
            steps: [{ reasoning: "$x = 2\\cos\\pi = -2$, $y = 2\\sin\\pi = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "$(-2,0)$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert $r = \\frac{2}{1-\\sin\\theta}$ to Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Isolate $r$, substitute $r\\sin\\theta=y$." }],
            steps: [
              { reasoning: "$r(1-\\sin\\theta) = 2$ → $r - y = 2$ → $\\sqrt{x^2+y^2} = y+2$.", marks: 1, markCode: "M" },
              { reasoning: "Square: $x^2+y^2 = y^2+4y+4$ → $x^2 = 4y+4$.", marks: 1, markCode: "M" },
              { reasoning: "$y = \\frac{x^2-4}{4}$ — parabola opening upwards.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^2 = 4y + 4$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert the curve $y = x^2$ to polar form, giving $r$ in terms of $\\theta$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.414, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian→polar", statement: "$r\\sin\\theta = r^2\\cos^2\\theta$ → $r = \\tan\\theta\\sec\\theta$." }],
            steps: [
              { reasoning: "$r\\sin\\theta = (r\\cos\\theta)^2$ → $\\sin\\theta = r\\cos^2\\theta$ → $r = \\frac{\\sin\\theta}{\\cos^2\\theta}$.", marks: 1, markCode: "M" },
              { reasoning: "At $\\theta=\\frac{\\pi}{4}$: $r = \\frac{\\sin\\frac{\\pi}{4}}{\\cos^2\\frac{\\pi}{4}} = \\frac{\\frac{\\sqrt2}{2}}{\\frac12} = \\sqrt2 \\approx 1.414$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 1.414$.", marks: 1, markCode: "A" }],
            finalAnswer: "$r = \\sqrt{2}$ at $\\theta=\\frac{\\pi}{4}$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The circle $(x-1)^2 + y^2 = 4$ is converted to polar form. Find the value of $r$ when $\\theta = 0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cartesian→polar", statement: "Expand and substitute $x=r\\cos\\theta$." }],
            steps: [
              { reasoning: "$x^2-2x+1+y^2 = 4$ → $r^2 - 2r\\cos\\theta - 3 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "At $\\theta=0$: $r^2-2r-3=0$ → $(r-3)(r+1)=0$ → $r=3$ (positive).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cialfm-u3-s3-co-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "$r^2$ in polar coordinates equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\tan\\theta$" },
            { id: "b", text: "$x^2+y^2$" },
            { id: "c", text: "$xy$" },
            { id: "d", text: "$x-y$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conversion", statement: "$r^2 = x^2+y^2$." }],
            steps: [{ reasoning: "Pythagoras in polar form.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^2+y^2$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The polar equation $r = \\sec\\theta$ converts to the Cartesian equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x = 1$" },
            { id: "b", text: "$x^2+y^2 = 1$" },
            { id: "c", text: "$y = x$" },
            { id: "d", text: "$y = 1$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "$r\\cos\\theta = x$." }],
            steps: [{ reasoning: "$r = \\sec\\theta$ → $r\\cos\\theta = 1$ → $x = 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x=1$",
          },
        },
        {
          id: "cialfm-u3-s3-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider the point $(0,4)$ and the circle $x^2+y^2 = 2x$.",
          parts: [
            { label: "a", prompt: "Write $(0,4)$ in polar coordinates.", marks: 1 },
            { label: "b", prompt: "Convert the circle to polar form.", marks: 2 },
            { label: "c", prompt: "State the Cartesian centre and radius of the circle.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinate conversion", statement: "Use $r$, $\\theta$, $r^2$ identities." }],
            steps: [
              { reasoning: "$(0,4)$: $r=4$, $\\theta=\\frac{\\pi}{2}$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$r^2 = 2r\\cos\\theta$ → $r = 2\\cos\\theta$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): $r=2\\cos\\theta$.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$(x-1)^2+y^2=1$: centre $(1,0)$, radius 1.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "$(4,\\frac{\\pi}{2})$; $r=2\\cos\\theta$; centre $(1,0)$, $r=1$",
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
            { id: "a", text: "Circle through origin" },
            { id: "b", text: "Cardioid" },
            { id: "c", text: "Rose curve" },
            { id: "d", text: "Straight line" },
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
        {
          id: "cialfm-u3-s3-cu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The curve $r = a(1 + \\cos\\theta)$ is called a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Circle" },
            { id: "b", text: "Rose" },
            { id: "c", text: "Cardioid" },
            { id: "d", text: "Lemniscate" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "convention", name: "Cardioid", statement: "$r=a(1\\pm\\cos\\theta)$ or $\\sin$ variant." }],
            steps: [{ reasoning: "Heart-shaped curve.", marks: 1, markCode: "A" }],
            finalAnswer: "Cardioid",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many petals does $r = \\cos 4\\theta$ have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Rose petals", statement: "$n$ even → $2n$ petals." }],
            steps: [
              { reasoning: "$n=4$ even → $2n = 8$ petals.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 8.", marks: 1, markCode: "A" }],
            finalAnswer: "8",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $r = 2 + 2\\cos\\theta$, find the maximum value of $r$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Maximise $r$", statement: "Maximise $\\cos\\theta = 1$." }],
            steps: [
              { reasoning: "Maximum when $\\cos\\theta=1$: $r = 2+2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Convert $r = 2\\cos\\theta$ to Cartesian form and identify the curve.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar→Cartesian", statement: "Multiply by $r$." }],
            steps: [
              { reasoning: "$r^2 = 2r\\cos\\theta$ → $x^2+y^2 = 2x$.", marks: 1, markCode: "M" },
              { reasoning: "$(x-1)^2 + y^2 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Circle centre $(1,0)$ radius 1, passing through origin.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$(x-1)^2+y^2=1$, circle",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The curve $r = a\\sin 2\\theta$ is a rose with how many petals?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "1" },
            { id: "c", text: "2" },
            { id: "d", text: "8" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Rose petals", statement: "$n$ even → $2n$ petals." }],
            steps: [{ reasoning: "$n=2$ even → 4 petals.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $r = 3\\cos\\theta$, the value of $r$ when $\\theta = \\frac{\\pi}{2}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3$" },
            { id: "b", text: "3" },
            { id: "c", text: "0" },
            { id: "d", text: "1.5" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate $r$", statement: "Substitute $\\theta$." }],
            steps: [{ reasoning: "$\\cos\\frac{\\pi}{2}=0$ → $r=0$.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe the shape and orientation of $r = 1 - \\sin\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Cardioid", statement: "$r=a(1\\pm\\sin\\theta)$ opens along the axis." }],
            steps: [
              { reasoning: "Cardioid (heart shape).", marks: 1, markCode: "M" },
              { reasoning: "$r$ is maximum when $\\sin\\theta=-1$, i.e. $\\theta=-\\frac{\\pi}{2}$: cusp at pole, lobe pointing down.", marks: 1, markCode: "M" },
              { reasoning: "Orientation: symmetric about the negative imaginary axis (opens downward).", marks: 1, markCode: "A" }],
            finalAnswer: "Cardioid opening downward",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "When plotting a polar curve, a negative value of $r$ means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Use $|r|$ only" },
            { id: "b", text: "Reflect the point through the pole" },
            { id: "c", text: "The curve stops" },
            { id: "d", text: "The point is not plotted" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Negative $r$", statement: "Plot at angle $\\theta+\\pi$." }],
            steps: [{ reasoning: "Negative $r$ plots in the opposite direction.", marks: 1, markCode: "A" }],
            finalAnswer: "Reflect through pole",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For $r = 2\\cos 2\\theta$ (a four-petalled rose), find $r$ when $\\theta = \\frac{\\pi}{8}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.414, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaluate $r$", statement: "Substitute into $r=f(\\theta)$." }],
            steps: [
              { reasoning: "$r = 2\\cos(2\\times\\frac{\\pi}{8}) = 2\\cos\\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2\\times\\frac{\\sqrt2}{2} = \\sqrt2 \\approx 1.414$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\sqrt{2}$",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $r = 2 + 2\\sin\\theta$, find the maximum value of $r$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Maximise $r$", statement: "Max when $\\sin\\theta=1$." }],
            steps: [
              { reasoning: "Max at $\\theta=\\frac{\\pi}{2}$: $r = 2+2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these polar equations produces a rose curve?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$r = 2$" },
            { id: "b", text: "$r = \\theta$" },
            { id: "c", text: "$r = 1+\\cos\\theta$" },
            { id: "d", text: "$r = \\cos 3\\theta$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Rose form", statement: "$r=a\\cos n\\theta$ or $\\sin$ variant." }],
            steps: [{ reasoning: "Only $r=\\cos3\\theta$ has the rose form.", marks: 1, markCode: "A" }],
            finalAnswer: "$r=\\cos3\\theta$",
          },
        },
        {
          id: "cialfm-u3-s3-cu-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Consider $r = 3\\sin\\theta$.",
          parts: [
            { label: "a", prompt: "Identify the type of curve.", marks: 1 },
            { label: "b", prompt: "Convert it to Cartesian form.", marks: 2 },
            { label: "c", prompt: "State its centre and radius.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polar curve analysis", statement: "$r=a\\sin\\theta$ is a circle through origin." }],
            steps: [
              { reasoning: "Circle through the pole.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$r^2 = 3r\\sin\\theta$ → $x^2+y^2 = 3y$ → $x^2+(y-\\frac32)^2 = \\frac94$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Cartesian form shown.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Centre $(0,\\frac32)$, radius $\\frac32$.", marks: 1, markCode: "A", part: "c" }],
            finalAnswer: "Circle; $x^2+(y-\\frac32)^2=\\frac94$; centre $(0,\\frac32)$, $r=\\frac32$",
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
