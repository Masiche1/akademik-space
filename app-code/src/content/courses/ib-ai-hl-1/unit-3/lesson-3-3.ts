import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "aihl-u3-lesson-3-3",
  code: "3-3",
  title: "Radians and Matrix Transformations",
  goal: "I CAN work in radians on the unit circle with trigonometric identities, and use matrices to describe, combine and invert 2D transformations.",
  standards: ["AHL 3.7", "AHL 3.8", "AHL 3.9"],
  vocabulary: [
    {
      term: "Radian",
      definition:
        "The angle subtended at the centre of a circle by an arc equal in length to the radius. $\\pi$ radians $=180^\\circ$.",
    },
    {
      term: "Unit circle",
      definition:
        "The circle of radius 1 centred at the origin; the point at angle $\\theta$ is $(\\cos\\theta,\\sin\\theta)$.",
    },
    {
      term: "Transformation matrix",
      definition:
        "A $2\\times2$ matrix $M$ that sends the point $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ to $M\\begin{pmatrix} x \\\\ y \\end{pmatrix}$.",
    },
    {
      term: "Area scale factor",
      definition:
        "The factor by which a transformation multiplies areas; it equals $|\\det M|$.",
    },
    {
      term: "Rotation matrix",
      definition:
        "$\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$, an anticlockwise rotation by $\\theta$ about the origin.",
    },
  ],
  concepts: [
    {
      id: "aihl-u3-radians-identities",
      title: "Radians, the unit circle and identities",
      skill:
        "Convert between degrees and radians, use arc length and sector area, and apply $\\sin^2\\theta+\\cos^2\\theta=1$ and double angle identities.",
      lesson: {
        sections: [
          {
            heading: "Radian measure",
            body: "Convert with $\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\times\\frac{\\pi}{180}$. In radians an arc has length $s=r\\theta$ and a sector has area $A=\\frac12r^2\\theta$. These are simpler than the degree versions. Set the GDC to radian mode when working with radians; most errors come from the wrong mode.",
          },
          {
            heading: "Identities",
            body: "On the unit circle $\\sin^2\\theta+\\cos^2\\theta=1$ and $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$. The double angle identities are $\\sin2\\theta=2\\sin\\theta\\cos\\theta$ and $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=1-2\\sin^2\\theta=2\\cos^2\\theta-1$. The sign of $\\sin\\theta$ or $\\cos\\theta$ is decided by the quadrant, so state it before taking a square root.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$s=r\\theta$" },
          { name: "Sector area", statement: "$A=\\tfrac12r^2\\theta$" },
          {
            name: "Pythagorean identity",
            statement: "$\\sin^2\\theta+\\cos^2\\theta=1$",
          },
          {
            name: "Double angle",
            statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$",
          },
        ],
        workedExample: {
          problem:
            "A sector of a circle of radius 6 cm has angle $\\frac{\\pi}{3}$. Find its arc length and area.",
          solution:
            "Arc length $s=6\\times\\frac\\pi3=2\\pi\\approx6.28$ cm. Area $A=\\frac12(36)\\frac\\pi3=6\\pi\\approx18.8$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "aihl-u3-radians-identities-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Convert $150^\\circ$ to radians.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5\\pi}{3}$" },
              { id: "b", text: "$\\frac{2\\pi}{3}$" },
              { id: "c", text: "$\\frac{5\\pi}{6}$" },
              { id: "d", text: "$\\frac{3\\pi}{4}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Degrees to radians",
                statement:
                  "$\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\times\\frac{\\pi}{180}$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply by $\\frac{\\pi}{180}$ and simplify.",
                working: "150\\times\\frac{\\pi}{180}=\\frac{5\\pi}{6}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $\\frac{5\\pi}{6}$",
            commonErrors: ["Using $\\frac{180}{\\pi}$ the wrong way round."],
          },
        },
        {
          id: "aihl-u3-radians-identities-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sector of a circle of radius $8$ cm has angle $0.75$ radians. Find the perimeter of the sector, in cm.",
          response: {
            type: "numeric",
            parts: [{ label: "Perimeter (cm)", answer: 22, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arc length",
                statement: "$s=r\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "Arc length.",
                working: "s=8\\times0.75=6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The perimeter includes the two radii.",
                working: "P=6+8+8",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Add.", working: "P=22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$22$ cm",
            commonErrors: ["Giving the arc length 6 as the perimeter."],
          },
        },
        {
          id: "aihl-u3-radians-identities-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The angle $\\theta$ satisfies $\\sin\\theta=\\dfrac{3}{5}$ and $\\dfrac{\\pi}{2}<\\theta<\\pi$. Find the value of $\\sin2\\theta$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\sin2\\theta$", answer: -0.96 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement: "$\\sin^2\\theta+\\cos^2\\theta=1$",
              },
              {
                kind: "law",
                name: "Double angle",
                statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$",
              },
            ],
            steps: [
              {
                reasoning: "Find $\\cos^2\\theta$.",
                working: "\\cos^2\\theta=1-\\frac{9}{25}=\\frac{16}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In the second quadrant cosine is negative.",
                working: "\\cos\\theta=-\\frac45",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Use the double angle formula.",
                working:
                  "\\sin2\\theta=2\\left(\\frac35\\right)\\left(-\\frac45\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\sin2\\theta=-\\frac{24}{25}=-0.96",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sin2\\theta=-0.96$",
            commonErrors: [
              "Using $\\cos\\theta=+\\frac45$ and getting $+0.96$.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A circular garden has radius 12 m. A path is built along a chord $AB$ of the garden, where $O$ is the centre and angle $AOB=\\dfrac{2\\pi}{3}$ radians. The region between the chord and the arc $AB$ (the minor segment) is planted with flowers.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the length of the minor arc $AB$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the area of the sector $AOB$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the area of triangle $AOB$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Hence find the area planted with flowers, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Find the length of the chord $AB$ using the cosine rule, to 3 significant figures.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) arc length (m)", answer: 25.1, tolerance: 0.05 },
              { label: "(b) sector area (m$^2$)", answer: 151, tolerance: 0.5 },
              {
                label: "(c) triangle area (m$^2$)",
                answer: 62.4,
                tolerance: 0.05,
              },
              {
                label: "(d) flower area (m$^2$)",
                answer: 88.4,
                tolerance: 0.05,
              },
              { label: "(e) chord length (m)", answer: 20.8, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arc and sector",
                statement:
                  "$s=r\\theta$, $A=\\frac12r^2\\theta$ for $\\theta$ in radians.",
              },
              {
                kind: "formula",
                name: "Triangle area",
                statement: "$A=\\frac12ab\\sin C$",
              },
              {
                kind: "formula",
                name: "Cosine rule",
                statement: "$c^2=a^2+b^2-2ab\\cos C$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Arc length in radians.",
                working: "s=12\\times\\frac{2\\pi}{3}=8\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "25.1\\text{ m}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sector area.",
                working: "A=\\tfrac12(144)\\frac{2\\pi}{3}=48\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "151\\text{ m}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Use $\\frac12r^2\\sin\\theta$ with $\\sin\\frac{2\\pi}{3}=\\frac{\\sqrt3}{2}$.",
                working: "A=\\tfrac12(144)\\sin\\tfrac{2\\pi}{3}=36\\sqrt3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "62.4\\text{ m}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Segment = sector minus triangle.",
                working: "48\\pi-36\\sqrt3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate: $150.80-62.35$.",
                working: "88.4\\text{ m}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Cosine rule with $\\cos\\frac{2\\pi}{3}=-\\frac12$.",
                working: "AB^2=144+144-2(144)\\left(-\\tfrac12\\right)=432",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Take the root.",
                working: "AB=\\sqrt{432}=20.8\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 25.1 m. (b) 151 m$^2$. (c) 62.4 m$^2$. (d) 88.4 m$^2$. (e) 20.8 m.",
            commonErrors: [
              "Having the GDC in degree mode when evaluating $\\sin\\frac{2\\pi}{3}$.",
              "Using $\\frac12r^2\\theta$ for the triangle.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Convert $\\frac{\\pi}{4}$ radians to degrees.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30^\\circ$" },
              { id: "b", text: "$90^\\circ$" },
              { id: "c", text: "$45^\\circ$" },
              { id: "d", text: "$60^\\circ$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Radians to degrees",
                statement:
                  "$\\theta_{\\text{deg}}=\\theta_{\\text{rad}}\\times\\frac{180}{\\pi}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply by $\\frac{180}{\\pi}$; the $\\pi$ cancels.",
                working: "\\frac{\\pi}{4}\\times\\frac{180}{\\pi}=45",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer in degrees.",
                working: "45^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $45^\\circ$",
            commonErrors: [
              "Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The length of an arc of a circle of radius $r$ subtending an angle $\\theta$ radians at the centre is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$s=\\frac{r\\theta}{2}$" },
              { id: "b", text: "$s=\\frac{\\theta}{r}$" },
              { id: "c", text: "$s=\\frac12r^2\\theta$" },
              { id: "d", text: "$s=r\\theta$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arc length",
                statement: "$s=r\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In radian measure arc length is radius times angle.",
                working: "s=r\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The formula $\\frac12r^2\\theta$ is the sector area, not the arc length.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $s=r\\theta$",
            commonErrors: [
              "Confusing the arc length and sector area formulas.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A sector of a circle has radius $10$ cm and angle $1.2$ radians. Find the area of the sector, in cm$^2$.",
          response: {
            type: "numeric",
            parts: [{ label: "Area (cm$^2$)", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sector area",
                statement: "$A=\\frac12r^2\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "Write down the sector area formula.",
                working: "A=\\tfrac12r^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $r=10$ and $\\theta=1.2$.",
                working: "A=\\tfrac12(100)(1.2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "A=60\\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$A=60$ cm$^2$",
            commonErrors: [
              "Using $\\pi$ in the formula when the angle is already in radians.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $\\cos\\theta=-\\frac{3}{5}$ and $\\pi<\\theta<\\frac{3\\pi}{2}$, find the value of $\\sin\\theta$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\sin\\theta$", answer: -0.8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement: "$\\sin^2\\theta+\\cos^2\\theta=1$",
              },
            ],
            steps: [
              {
                reasoning: "Find $\\sin^2\\theta$.",
                working: "\\sin^2\\theta=1-\\frac{9}{25}=\\frac{16}{25}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In the third quadrant sine is negative.",
                working: "\\sin\\theta<0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the negative root.",
                working: "\\sin\\theta=-\\frac45=-0.8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sin\\theta=-0.8$",
            commonErrors: [
              "Taking the positive root and ignoring the quadrant.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given that $\\tan\\theta=\\frac{3}{4}$ and $0<\\theta<\\frac{\\pi}{2}$, find $\\sin\\theta$ and $\\cos\\theta$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\sin\\theta$", answer: 0.6 },
              { label: "$\\cos\\theta$", answer: 0.8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement:
                  "$\\sin^2\\theta+\\cos^2\\theta=1$ with $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the first quadrant both sine and cosine are positive, and $\\sin\\theta:\\cos\\theta=3:4$.",
                working: "\\sin\\theta=\\tfrac35k,\\;\\cos\\theta=\\tfrac45k",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use the identity to find $k$: $\\frac{9}{25}+\\frac{16}{25}=1$ gives $k=1$.",
                working: "k=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both values.",
                working: "\\sin\\theta=0.6,\\;\\cos\\theta=0.8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sin\\theta=0.6$, $\\cos\\theta=0.8$",
            commonErrors: ["Swapping sine and cosine."],
          },
        },
        {
          id: "aihl-u3-radians-identities-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Given that $\\sin\\theta=\\frac{5}{13}$ and $\\frac{\\pi}{2}<\\theta<\\pi$, find the exact value of $\\cos2\\theta$, giving your answer as a decimal to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\cos2\\theta$", answer: 0.704 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Double angle",
                statement: "$\\cos2\\theta=1-2\\sin^2\\theta$",
              },
              {
                kind: "law",
                name: "Pythagorean identity",
                statement: "$\\sin^2\\theta+\\cos^2\\theta=1$",
              },
            ],
            steps: [
              {
                reasoning: "Square the given sine.",
                working: "\\sin^2\\theta=\\frac{25}{169}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use the double angle form $\\cos2\\theta=1-2\\sin^2\\theta$.",
                working: "\\cos2\\theta=1-\\frac{50}{169}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate exactly.",
                working: "\\cos2\\theta=\\frac{119}{169}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Convert to a decimal.",
                working: "\\approx0.704",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\cos2\\theta=\\frac{119}{169}\\approx0.704$",
            commonErrors: [
              "Using $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$ with the wrong sign for $\\cos\\theta$, or computing $2\\sin\\theta\\cos\\theta$ instead.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Consider the equation $\\sin\\theta=\\frac{\\sqrt3}{2}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Find all values of $\\theta$ in the interval $0\\le\\theta\\le2\\pi$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Hence find all values of $\\theta$ in the interval $0\\le\\theta\\le4\\pi$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Write down the smallest positive solution in degrees.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Unit circle",
                statement:
                  "$\\sin\\theta=\\frac{\\sqrt3}{2}$ at the reference angle $\\frac{\\pi}{3}$ in quadrants I and II.",
              },
              {
                kind: "property",
                name: "Periodicity",
                statement:
                  "Sine has period $2\\pi$, so solutions repeat every $2\\pi$ radians.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The reference angle is $\\frac{\\pi}{3}$ since $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt3}{2}$.",
                working: "\\theta=\\tfrac{\\pi}{3}\\text{ (Q1)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Sine is also positive in quadrant II.",
                working: "\\theta=\\pi-\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "No solutions in quadrants III and IV since sine is negative there.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Add $2\\pi$ to each solution.",
                working:
                  "\\tfrac{\\pi}{3}+2\\pi=\\tfrac{7\\pi}{3},\\;\\tfrac{2\\pi}{3}+2\\pi=\\tfrac{8\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State all four solutions.",
                working:
                  "\\tfrac{\\pi}{3},\\;\\tfrac{2\\pi}{3},\\;\\tfrac{7\\pi}{3},\\;\\tfrac{8\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Convert $\\frac{\\pi}{3}$ to degrees.",
                working: "60^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac{\\pi}{3},\\frac{2\\pi}{3}$. (b) add $\\frac{7\\pi}{3},\\frac{8\\pi}{3}$. (c) $60^\\circ$.",
            commonErrors: [
              "Missing the quadrant II solution.",
              "Adding $\\pi$ instead of $2\\pi$ for the second period.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A point $P$ on the unit circle has angle $\\theta$ with $\\cos\\theta=-\\frac{1}{3}$ and $\\frac{\\pi}{2}<\\theta<\\pi$.",
          parts: [
            {
              label: "a",
              prompt: "Find the exact value of $\\sin\\theta$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Hence find $\\tan\\theta$, giving your answer in simplest surd form.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the exact value of $\\sin2\\theta$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement: "$\\sin^2\\theta+\\cos^2\\theta=1$",
              },
              {
                kind: "law",
                name: "Double angle",
                statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Find $\\sin^2\\theta$.",
                working: "\\sin^2\\theta=1-\\frac19=\\frac89",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "In quadrant II sine is positive.",
                working: "\\sin\\theta=\\frac{2\\sqrt2}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Use $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$.",
                working: "\\tan\\theta=\\frac{2\\sqrt2/3}{-1/3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify; tangent is negative in quadrant II.",
                working: "\\tan\\theta=-2\\sqrt2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the double angle formula.",
                working:
                  "\\sin2\\theta=2\\left(\\frac{2\\sqrt2}{3}\\right)\\left(-\\frac13\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\sin2\\theta=-\\frac{4\\sqrt2}{9}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac{2\\sqrt2}{3}$. (b) $-2\\sqrt2$. (c) $-\\frac{4\\sqrt2}{9}$.",
            commonErrors: [
              "Taking $\\sin\\theta$ negative in quadrant II.",
              "Forgetting that $\\cos\\theta$ is negative when computing $\\tan\\theta$ and $\\sin2\\theta$.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "For any angle $\\theta$, $\\sin^2\\theta+\\cos^2\\theta=$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$2\\sin\\theta\\cos\\theta$" },
              { id: "d", text: "$\\sin2\\theta$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Pythagorean identity",
                statement: "$\\sin^2\\theta+\\cos^2\\theta=1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "This is the Pythagorean identity on the unit circle.",
                working: "\\sin^2\\theta+\\cos^2\\theta=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: [
              "Confusing the identity with the double angle formula $\\sin2\\theta=2\\sin\\theta\\cos\\theta$.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\cos2\\theta$ is equal to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\sin\\theta\\cos\\theta$" },
              { id: "b", text: "$\\cos^2\\theta-\\sin^2\\theta$" },
              { id: "c", text: "$1+2\\sin^2\\theta$" },
              { id: "d", text: "$\\sin^2\\theta-\\cos^2\\theta$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Double angle",
                statement:
                  "$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=1-2\\sin^2\\theta=2\\cos^2\\theta-1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The first form of the cosine double angle identity is $\\cos^2\\theta-\\sin^2\\theta$.",
                working: "\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) is $\\sin2\\theta$, and (d) is its negative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Confusing $\\sin2\\theta$ with $\\cos2\\theta$."],
          },
        },
        {
          id: "aihl-u3-radians-identities-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A circle has radius $6$ cm. What is the length of the arc subtended by an angle of $\\frac{\\pi}{3}$ radians at the centre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\pi$ cm" },
              { id: "b", text: "$\\pi$ cm" },
              { id: "c", text: "$2\\pi$ cm" },
              { id: "d", text: "$6\\pi$ cm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arc length",
                statement: "$s=r\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply radius by angle.",
                working: "s=6\\times\\frac{\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "s=2\\pi\\text{ cm}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $2\\pi$ cm",
            commonErrors: [
              "Using the sector area formula $\\frac12r^2\\theta$.",
            ],
          },
        },
        {
          id: "aihl-u3-radians-identities-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{3}+\\cos\\frac{\\pi}{6}\\sin\\frac{\\pi}{3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$\\frac{\\sqrt3}{2}$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Compound angle",
                statement: "$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$",
              },
            ],
            steps: [
              {
                reasoning:
                  "The expression is $\\sin\\left(\\frac{\\pi}{6}+\\frac{\\pi}{3}\\right)=\\sin\\frac{\\pi}{2}$.",
                working:
                  "\\sin\\tfrac{\\pi}{6}\\cos\\tfrac{\\pi}{3}+\\cos\\tfrac{\\pi}{6}\\sin\\tfrac{\\pi}{3}=\\sin\\tfrac{\\pi}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\sin\\tfrac{\\pi}{2}=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $1$",
            commonErrors: [
              "Adding the angles to get $\\frac{\\pi}{2}$ but then evaluating $\\cos\\frac{\\pi}{2}$ instead of $\\sin\\frac{\\pi}{2}$.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u3-matrix-transformations",
      title: "2D transformations with matrices",
      skill:
        "Use matrices for reflections, rotations, stretches, shears and enlargements, and find area scale factors and compositions.",
      lesson: {
        sections: [
          {
            heading: "Matrices as transformations",
            body: "The image of a point is $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}=M\\begin{pmatrix} x \\\\ y \\end{pmatrix}$. The columns of $M$ are the images of $(1,0)$ and $(0,1)$. Standard matrices: reflection in the $x$-axis $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, reflection in $y=x$ $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, horizontal stretch factor $k$ $\\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix}$, enlargement factor $k$ $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$, and rotation by $\\theta$ above.",
          },
          {
            heading: "Compositions and area",
            body: "If $B$ is applied first and then $A$, the combined matrix is $AB$ (the first transformation is on the right). Areas are multiplied by $|\\det M|$. A negative determinant means that orientation is reversed, as in a reflection. The inverse matrix $M^{-1}$ undoes the transformation, and exists only if $\\det M\\ne0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Rotation",
            statement:
              "$R_\\theta=\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$",
          },
          { name: "Composition", statement: "$B$ then $A$: matrix $AB$" },
          {
            name: "Area scale factor",
            statement: "$\\text{new area}=|\\det M|\\times\\text{old area}$",
          },
        ],
        workedExample: {
          problem:
            "Find the image of $(2,3)$ under a rotation of $90^\\circ$ anticlockwise about the origin.",
          solution:
            "$R=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, so the image is $\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$.",
        },
      },
      questions: [
        {
          id: "aihl-u3-matrix-transformations-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which matrix represents a reflection in the $x$-axis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Columns are images",
                statement:
                  "Column 1 is the image of $(1,0)$ and column 2 the image of $(0,1)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reflection in the $x$-axis leaves $(1,0)$ fixed and sends $(0,1)$ to $(0,-1)$.",
                working: "\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)**",
            commonErrors: ["Choosing the reflection in the $y$-axis (a)."],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The transformation $T$ has matrix $M=\\begin{pmatrix} 3 & 1 \\\\ 2 & 2 \\end{pmatrix}$. A triangle of area $5$ is transformed by $T$. Find the area of the image.",
          response: {
            type: "numeric",
            parts: [{ label: "Area of image", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Area scale factor",
                statement: "Area is multiplied by $|\\det M|$.",
              },
            ],
            steps: [
              {
                reasoning: "Find the determinant.",
                working: "\\det M=6-2=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply the area by $|\\det M|$.",
                working: "5\\times4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Adding the determinant to the area."],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The point $P(2,1)$ is first reflected in the $x$-axis and then rotated $90^\\circ$ anticlockwise about the origin. Find the single matrix for the combined transformation and the coordinates of the image of $P$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Image $x$", answer: 1 },
              { label: "Image $y$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Composition order",
                statement:
                  "If $B$ is applied first and then $A$, the combined matrix is $AB$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reflection $B$ is applied first, rotation $A$ second.",
                working:
                  "A=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix},\\;B=\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combined matrix is $AB$.",
                working: "AB=\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Apply to $P$.",
                working:
                  "\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate. Check: reflect to $(2,-1)$, rotate to $(1,2)$.",
                working: "(1,2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ (a reflection in $y=x$); image $(1,2)$",
            commonErrors: [
              "Writing $BA$, which reverses the order and gives $(-1,-2)$.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "The unit square $OABC$ has vertices $O(0,0)$, $A(1,0)$, $B(1,1)$ and $C(0,1)$. Investigate the family of transformations with matrix $S_k=\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$, called a horizontal shear, where $k$ is a real constant.",
          parts: [
            {
              label: "a",
              prompt: "Find the images of $A$, $B$ and $C$ under $S_2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the area of the image of the unit square under $S_k$, and explain your answer.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that $S_aS_b=S_{a+b}$, and hence write down $S_3^{-1}$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find the matrix of the transformation obtained by applying $S_2$ and then a stretch $T=\\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$, and the area scale factor of the combination.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Show that $S_k$ has repeated eigenvalue 1 for every $k$, and find the corresponding eigenvector direction for $k\\ne0$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) image of $B$, $x$-coordinate", answer: 3 },
              { label: "(b) area of image", answer: 1 },
              { label: "(c) top-right entry of $S_3^{-1}$", answer: -3 },
              { label: "(d) area scale factor", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Area scale factor",
                statement: "Area is multiplied by $|\\det M|$.",
              },
              {
                kind: "principle",
                name: "Composition",
                statement: "$B$ then $A$ has matrix $AB$.",
              },
              {
                kind: "definition",
                name: "Eigenvector",
                statement:
                  "$M\\boldsymbol v=\\lambda\\boldsymbol v$ with $\\boldsymbol v\\ne\\boldsymbol0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Multiply each point by $S_2=\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$.",
                working: "A'=(1,0),\\;C'=(2,1)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "$B'=(1+2,\\,1)$.",
                working: "B'=(3,1)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The determinant of $S_k$.",
                working: "\\det S_k=1\\times1-k\\times0=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Area is multiplied by 1: the image is a parallelogram of the same area as the square (same base and same height).",
                working: "\\text{area}=1",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Multiply the matrices.",
                working:
                  "S_aS_b=\\begin{pmatrix} 1 & b+a \\\\ 0 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "So $S_aS_b=S_{a+b}$ (AG). Taking $a=3,b=-3$ gives $S_0=I$, so $S_3^{-1}=S_{-3}$.",
                working: "S_3S_{-3}=S_0=I",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Write the inverse.",
                working:
                  "S_3^{-1}=\\begin{pmatrix} 1 & -3 \\\\ 0 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$S_2$ first, so the combined matrix is $TS_2$.",
                working:
                  "TS_2=\\begin{pmatrix} 3 & 6 \\\\ 0 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Determinant of the product is $3\\times1$.",
                working: "\\det=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The characteristic equation is $(1-\\lambda)^2=0$, so $\\lambda=1$ is repeated.",
                working: "\\det(S_k-\\lambda I)=(1-\\lambda)^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "$(S_k-I)\\boldsymbol v=\\begin{pmatrix} 0 & k \\\\ 0 & 0 \\end{pmatrix}\\boldsymbol v=\\boldsymbol0$ forces $y=0$, so the eigenvector is $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ (the $x$-axis), and there is only one eigenvector direction.",
                working:
                  "\\boldsymbol v=\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $A'(1,0)$, $B'(3,1)$, $C'(2,1)$. (b) 1. (c) shown; $S_3^{-1}=\\begin{pmatrix} 1 & -3 \\\\ 0 & 1 \\end{pmatrix}$. (d) $\\begin{pmatrix} 3 & 6 \\\\ 0 & 1 \\end{pmatrix}$, factor 3. (e) $\\lambda=1$, eigenvector $(1,0)$.",
            commonErrors: [
              "Using $S_2T$ instead of $TS_2$.",
              "Believing a shear can change the area.",
            ],
            examinerNote:
              "Points on the $x$-axis are fixed by every shear, which links to the eigenvector found in (e).",
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which matrix represents an enlargement of scale factor $3$ about the origin?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} -3 & 0 \\\\ 0 & -3 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Columns are images",
                statement:
                  "Column 1 is the image of $(1,0)$ and column 2 the image of $(0,1)$; an enlargement multiplies both by $k$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An enlargement of scale factor $k$ sends $(x,y)$ to $(kx,ky)$.",
                working: "\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With $k=3$ the matrix is as in (a); (b) and (c) are stretches in one direction only.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)**",
            commonErrors: [
              "Confusing an enlargement with a stretch in one direction only.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the image of the point $(2,5)$ under a reflection in the $y$-axis.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5,2)$" },
              { id: "b", text: "$(2,-5)$" },
              { id: "c", text: "$(-2,-5)$" },
              { id: "d", text: "$(-2,5)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reflection in the $y$-axis",
                statement:
                  "Reflection in the $y$-axis maps $(x,y)$ to $(-x,y)$.",
              },
            ],
            steps: [
              {
                reasoning: "Change the sign of the $x$-coordinate only.",
                working: "(2,5)\\mapsto(-2,5)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The $y$-coordinate is unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $(-2,5)$",
            commonErrors: [
              "Changing the sign of the $y$-coordinate instead (that is reflection in the $x$-axis).",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the image of the point $(1,2)$ under a rotation of $90^\\circ$ anticlockwise about the origin.",
          response: {
            type: "numeric",
            parts: [
              { label: "Image $x$", answer: -2 },
              { label: "Image $y$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotation matrix",
                statement:
                  "$R_{90^\\circ}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
              },
            ],
            steps: [
              {
                reasoning: "Write the rotation matrix for $\\theta=90^\\circ$.",
                working:
                  "R=\\begin{pmatrix} \\cos90^\\circ & -\\sin90^\\circ \\\\ \\sin90^\\circ & \\cos90^\\circ \\end{pmatrix}=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the point.",
                working:
                  "\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "(-2,\\,1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(-2,\\,1)$",
            commonErrors: [
              "Using a clockwise rotation matrix, which gives $(2,-1)$.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A shape of area $7$ is transformed by the matrix $M=\\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$. Find the area of the image.",
          response: {
            type: "numeric",
            parts: [{ label: "Area of image", answer: 35 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Area scale factor",
                statement: "Area is multiplied by $|\\det M|$.",
              },
            ],
            steps: [
              {
                reasoning: "Find the determinant.",
                working: "\\det M=1(1)-2(3)=-5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the absolute value as the scale factor.",
                working: "|\\det M|=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply the area.",
                working: "7\\times5=35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$35$",
            commonErrors: [
              "Using $\\det M=-5$ without the absolute value, or adding 5 to the area.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Find the matrix of the reflection in the line $y=-x$, and hence find the image of the point $(3,1)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Image $x$", answer: -1 },
              { label: "Image $y$", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Columns are images",
                statement:
                  "Column 1 is the image of $(1,0)$ and column 2 the image of $(0,1)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The line $y=-x$ swaps coordinates and changes both signs: $(1,0)\\mapsto(0,-1)$ and $(0,1)\\mapsto(-1,0)$.",
                working: "\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the matrix.",
                working: "M=\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Multiply by the point.",
                working:
                  "\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}=\\begin{pmatrix} -1 \\\\ -3 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the image.",
                working: "(-1,\\,-3)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$M=\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$, image $(-1,-3)$",
            commonErrors: [
              "Using the reflection in $y=x$ matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ instead.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The point $(1,2)$ is first stretched horizontally by factor $2$ and then reflected in the $x$-axis. Find the final image of the point.",
          response: {
            type: "numeric",
            parts: [
              { label: "Image $x$", answer: 2 },
              { label: "Image $y$", answer: -2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stretch",
                statement:
                  "Horizontal stretch factor $k$: $\\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix}$",
              },
              {
                kind: "principle",
                name: "Composition order",
                statement:
                  "If $B$ is applied first and then $A$, the combined matrix is $AB$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write the two matrices: stretch $H$ first, reflection $X$ second.",
                working:
                  "H=\\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix},\\;X=\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The combined matrix is $XH$ since the stretch is applied first.",
                working: "XH=\\begin{pmatrix} 2 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the point.",
                working:
                  "\\begin{pmatrix} 2 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "(2,\\,-2)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(2,\\,-2)$",
            commonErrors: [
              "Using $HX$ instead of $XH$, which gives the same answer here only because the matrices commute; check the order in general.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Let $M=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ be the matrix of a rotation of $90^\\circ$ anticlockwise about the origin.",
          parts: [
            { label: "a", prompt: "Find $M^2$.", marks: 2 },
            {
              label: "b",
              prompt: "Describe the transformation $M^2$ geometrically.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the image of $(3,1)$ under $M^2$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotation matrix",
                statement:
                  "$R_{180^\\circ}=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
              },
              {
                kind: "principle",
                name: "Composition",
                statement: "Applying $M$ twice has matrix $M^2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Multiply the matrix by itself.",
                working:
                  "M^2=\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate the product.",
                working:
                  "M^2=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Compare with the rotation matrix for $180^\\circ$.",
                working:
                  "R_{180^\\circ}=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the geometric description.",
                working:
                  "\\text{rotation of }180^\\circ\\text{ anticlockwise about the origin (equivalently, point reflection through }O\\text{)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Multiply the point by $M^2$.",
                working:
                  "\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "(-3,\\,-1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $M^2=\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$. (b) rotation of $180^\\circ$ about the origin. (c) $(-3,-1)$.",
            commonErrors: ["Computing $2M$ instead of $M^2$."],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The triangle with vertices $O(0,0)$, $A(2,0)$ and $B(0,1)$ is transformed by the matrix $M=\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, a horizontal shear.",
          parts: [
            {
              label: "a",
              prompt: "Find the images of $O$, $A$ and $B$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the area of the image triangle and explain why it is unchanged.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Find the inverse matrix $M^{-1}$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Area scale factor",
                statement: "Area is multiplied by $|\\det M|$.",
              },
              {
                kind: "definition",
                name: "Inverse matrix",
                statement:
                  "$MM^{-1}=M^{-1}M=I$; the transformation is invertible when $\\det M\\ne0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The transformation sends $(x,y)$ to $(x+y,y)$.",
                working: "O'=(0,0),\\;A'=(2,0),\\;B'=(1,1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the three image points.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The determinant of $M$.",
                working: "\\det M=1(1)-1(0)=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Area is multiplied by $|\\det M|=1$: the image triangle has the same base $OA$ and the same vertical height as the original, so its area is still $1$.",
                working: "\\text{area}=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For this shear the inverse shifts in the opposite direction.",
                working:
                  "M^{-1}=\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Verify: the product is the identity.",
                working:
                  "\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}=\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $O'(0,0)$, $A'(2,0)$, $B'(1,1)$. (b) area $=1$, unchanged since $|\\det M|=1$. (c) $M^{-1}=\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}$.",
            commonErrors: [
              "Thinking a shear changes area; it does not because $|\\det M|=1$.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the determinant of $\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$-10$" },
              { id: "c", text: "$14$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Determinant",
                statement:
                  "$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}=ad-bc$",
              },
            ],
            steps: [
              {
                reasoning: "Compute $ad-bc$.",
                working: "3(4)-2(1)=12-2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $10$",
            commonErrors: ["Computing $bc-ad$ and getting $-10$."],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A transformation has matrix $M$ with $\\det M<0$. What does this tell you about the transformation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is not invertible." },
              { id: "b", text: "It preserves orientation, like a rotation." },
              { id: "c", text: "It has zero area scale factor." },
              { id: "d", text: "It reverses orientation, like a reflection." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Determinant and orientation",
                statement:
                  "A negative determinant means orientation is reversed; a zero determinant means the transformation is not invertible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sign of the determinant records whether orientation is preserved or reversed.",
                working: "\\det M<0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reflections have negative determinant; rotations, stretches and shears have positive determinant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)**",
            commonErrors: [
              "Thinking a negative determinant means areas shrink; only the absolute value matters for area.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which matrix represents a rotation of $180^\\circ$ about the origin?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
              },
              {
                id: "b",
                text: "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
              },
              {
                id: "c",
                text: "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
              },
              {
                id: "d",
                text: "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotation matrix",
                statement:
                  "$R_\\theta=\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "For $\\theta=180^\\circ$, $\\cos\\theta=-1$ and $\\sin\\theta=0$.",
                working: "\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (d) is a rotation of $90^\\circ$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)**",
            commonErrors: [
              "Confusing $180^\\circ$ rotation with a reflection.",
            ],
          },
        },
        {
          id: "aihl-u3-matrix-transformations-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The transformation $B$ is applied first and then the transformation $A$. The single matrix for the combined transformation is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A+B$" },
              { id: "b", text: "$BA$" },
              { id: "c", text: "$B^{-1}A$" },
              { id: "d", text: "$AB$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Composition order",
                statement:
                  "If $B$ is applied first and then $A$, the combined matrix is $AB$; the first transformation acts on the right.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a point $\\boldsymbol p$, $B$ acts first giving $B\\boldsymbol p$, then $A$ gives $AB\\boldsymbol p$.",
                working: "A(B\\boldsymbol p)=(AB)\\boldsymbol p",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The combined matrix is $AB$, not $BA$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $AB$",
            commonErrors: [
              "Writing $BA$, which reverses the order of application.",
            ],
          },
        },
      ],
    },
  ],
};
