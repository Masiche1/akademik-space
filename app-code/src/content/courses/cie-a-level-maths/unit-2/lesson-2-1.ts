import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "cial-m-u2-lesson-2-1",
  code: "2-1",
  title: "Radians and arc length",
  goal: "I CAN convert between degrees and radians and use arc length and sector area formulae.",
  standards: ["9709 P1: trigonometry"],
  vocabulary: [
    {
      term: "Radian",
      definition:
        "The angle subtended at the centre of a circle by an arc equal to the radius; $180^\\circ = \\pi$ rad.",
    },
    {
      term: "Arc length",
      definition: "$s = r\\theta$ where $\\theta$ is in radians.",
    },
    {
      term: "Sector area",
      definition:
        "$A = \\tfrac{1}{2}r^2\\theta$ where $\\theta$ is in radians.",
    },
    {
      term: "Angular speed",
      definition:
        "Rate of change of angle, $\\omega = \\frac{d\\theta}{dt}$, in rad/s.",
    },
    {
      term: "Linear speed",
      definition:
        "$v = r\\omega$ — tangential speed of a point on a rotating object.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u2-radians",
      title: "Radians and conversion",
      skill: "Convert angles between degrees and radians.",
      lesson: {
        sections: [
          {
            heading: "Why radians",
            body: "Radians measure angles by arc length: one radian is the angle where the arc equals the radius. A full circle is $2\\pi$ radians. Radians make calculus and physics formulas simpler — always convert before using trig formulae in calculus.",
          },
          {
            heading: "Conversion",
            body: "$180^\\circ = \\pi$ rad. To convert degrees to radians: multiply by $\\frac{\\pi}{180}$. To convert radians to degrees: multiply by $\\frac{180}{\\pi}$. E.g. $60^\\circ = 60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}$ rad; $\\frac{\\pi}{4}$ rad $= 45^\\circ$.",
          },
          {
            heading: "Common values",
            body: "Memorise: $30^\\circ = \\frac{\\pi}{6}$, $45^\\circ = \\frac{\\pi}{4}$, $60^\\circ = \\frac{\\pi}{3}$, $90^\\circ = \\frac{\\pi}{2}$, $180^\\circ = \\pi$, $360^\\circ = 2\\pi$.",
          },
        ],
        keyFormulas: [
          {
            name: "Conversion",
            statement:
              "degrees $\\times \\frac{\\pi}{180}$ = radians; radians $\\times \\frac{180}{\\pi}$ = degrees.",
          },
        ],
        workedExample: {
          problem: "Convert $135^\\circ$ to radians.",
          solution:
            "$135 \\times \\frac{\\pi}{180} = \\frac{135\\pi}{180} = \\frac{3\\pi}{4}$ rad.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many radians is $180^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi$" },
              { id: "b", text: "$2\\pi$" },
              { id: "c", text: "$\\frac{\\pi}{2}$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Radian",
                statement: "$180^\\circ = \\pi$ rad by definition.",
              },
            ],
            steps: [
              {
                reasoning: "$180^\\circ$ is half a turn $= \\pi$ rad.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$\\pi$ rad",
            commonErrors: ["Confusing with $360^\\circ = 2\\pi$."],
          },
        },
        {
          id: "cial-m-u2-ra-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $60^\\circ$ to radians, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "degrees $\\times \\frac{\\pi}{180}$ = radians.",
              },
            ],
            steps: [
              {
                reasoning: "$60 \\times \\frac{\\pi}{180}$.",
                working: "60 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{\\pi}{3}$ rad.",
                working: "\\frac{\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi}{3}$ rad",
            commonErrors: ["Answering $60\\pi$ — forgetting to divide by 180."],
          },
        },
        {
          id: "cial-m-u2-ra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert $\\frac{5\\pi}{6}$ radians to degrees.",
          response: {
            type: "numeric",
            parts: [{ label: "degrees", answer: 150, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement: "radians $\\times \\frac{180}{\\pi}$ = degrees.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{5\\pi}{6} \\times \\frac{180}{\\pi}$.",
                working: "\\frac{5\\pi}{6} \\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel $\\pi$: $\\frac{5 \\times 180}{6}$.",
                working: "\\frac{5 \\times 180}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{900}{6} = 150$.",
                working: "150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$150^\\circ$.",
                working: "150^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150^\\circ$",
            commonErrors: [
              "Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$.",
            ],
          },
        },
        {
          id: "cial-m-u2-ra-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Radians and conversion.",
          parts: [
            {
              label: "a",
              prompt: "How many radians in $180^\\circ$?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Convert $60^\\circ$ to radians (in terms of $\\pi$).",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Convert $\\frac{5\\pi}{6}$ rad to degrees.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Convert $210^\\circ$ to radians (in terms of $\\pi$).",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conversion",
                statement:
                  "degrees $\\times \\frac{\\pi}{180}$; radians $\\times \\frac{180}{\\pi}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\pi$ rad.",
                working: "\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$60 \\times \\frac{\\pi}{180}$.",
                working: "60 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= \\frac{\\pi}{3}$.",
                working: "\\frac{\\pi}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\frac{5\\pi}{6} \\times \\frac{180}{\\pi}$.",
                working: "\\times \\frac{180}{\\pi}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= \\frac{5 \\times 180}{6} = \\frac{900}{6}$.",
                working: "900/6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 150^\\circ$.",
                working: "150^\\circ",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$210 \\times \\frac{\\pi}{180}$.",
                working: "210 \\times \\frac{\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= \\frac{210\\pi}{180}$.",
                working: "\\frac{210\\pi}{180}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Simplify: divide by 30: $\\frac{7\\pi}{6}$.",
                working: "\\frac{7\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) π (b) π/3 (c) 150° (d) 7π/6",
          },
        },
      ],
    },
    {
      id: "cial-m-u2-arc-sector",
      title: "Arc length and sector area",
      skill:
        "Apply $s = r\\theta$ and $A = \\tfrac{1}{2}r^2\\theta$ in radians.",
      lesson: {
        sections: [
          {
            heading: "Arc length",
            body: "For a circle of radius $r$ and angle $\\theta$ (in radians): $s = r\\theta$. This is the same as $s = r \\times \\theta$ — remember radians are dimensionless, so $s$ has units of length.",
          },
          {
            heading: "Sector area",
            body: "$A = \\frac{1}{2}r^2\\theta$ — the sector is the fraction $\\frac{\\theta}{2\\pi}$ of the full circle's area $\\pi r^2$. For $\\theta = \\frac{\\pi}{2}$ (quarter turn): $A = \\frac{1}{2}r^2 \\cdot \\frac{\\pi}{2} = \\frac{\\pi r^2}{4}$.",
          },
          {
            heading: "Perimeter of a sector",
            body: "Sector perimeter = arc length + two radii: $P = r\\theta + 2r = r(\\theta + 2)$. Common exam trap — students forget the straight edges.",
          },
        ],
        keyFormulas: [
          {
            name: "Arc length",
            statement: "$s = r\\theta$ ($\\theta$ in radians).",
          },
          {
            name: "Sector area",
            statement: "$A = \\frac{1}{2}r^2\\theta$ ($\\theta$ in radians).",
          },
          { name: "Sector perimeter", statement: "$P = r(\\theta + 2)$." },
        ],
        workedExample: {
          problem:
            "A sector has radius 8 cm and angle $\\frac{\\pi}{4}$ rad. Find its arc length and area.",
          solution:
            "$s = 8 \\times \\frac{\\pi}{4} = 2\\pi$ cm. $A = \\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4} = 8\\pi$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "cial-m-u2-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has radius 5 cm and an arc subtends $1.2$ rad at the centre. What is the arc length?",
          response: {
            type: "numeric",
            parts: [
              { label: "arc length", answer: 6, unit: "cm", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc length",
                statement: "$s = r\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "$s = 5 \\times 1.2 = 6$.",
                working: "5 \\times 1.2 = 6",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$6$ cm",
            commonErrors: ["Using degrees — must be radians."],
          },
        },
        {
          id: "cial-m-u2-as-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector has radius 8 cm and angle $\\frac{\\pi}{4}$ rad. Find its area, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector area",
                statement: "$A = \\frac{1}{2}r^2\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A = \\frac{1}{2} \\times 8^2 \\times \\frac{\\pi}{4}$.",
                working: "\\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{64\\pi}{8} = 8\\pi$.",
                working: "8\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A = 8\\pi$ cm$^2$.",
                working: "8\\pi \\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8\\pi$ cm$^2$",
            commonErrors: [
              "Forgetting the $\\frac{1}{2}$ factor or using $\\pi r^2$ directly.",
            ],
          },
        },
        {
          id: "cial-m-u2-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sector has radius 10 cm and perimeter 25 cm. Find the angle $\\theta$ in radians.",
          response: {
            type: "numeric",
            parts: [
              { label: "theta", answer: 0.5, unit: "rad", tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector perimeter",
                statement: "$P = r\\theta + 2r = r(\\theta + 2)$.",
              },
            ],
            steps: [
              {
                reasoning: "$25 = 10\\theta + 20$.",
                working: "25 = 10\\theta + 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$10\\theta = 5$.",
                working: "10\\theta = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = 0.5$ rad.",
                working: "\\theta = 0.5",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta = 0.5$ rad",
            commonErrors: [
              "Forgetting the two radii in perimeter — using $P = r\\theta$ only.",
            ],
          },
        },
        {
          id: "cial-m-u2-as-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Arc length and sector area.",
          parts: [
            {
              label: "a",
              prompt: "Arc length: $r=5$, $\\theta=1.2$ rad.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Sector area: $r=8$, $\\theta=\\frac{\\pi}{4}$ rad (in terms of $\\pi$).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Sector perimeter: $r=10$, $\\theta=0.5$ rad.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A wheel of radius 0.4 m rotates through $3$ rad. How far does a point on the rim travel?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Arc/sector",
                statement:
                  "$s=r\\theta$; $A=\\frac{1}{2}r^2\\theta$; $P=r(\\theta+2)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$s = 5 \\times 1.2 = 6$.",
                working: "6",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Units cm.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning:
                  "$A = \\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}$.",
                working: "\\frac{1}{2} \\times 64 \\times \\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$= 8\\pi$.",
                working: "8\\pi",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$P = 10(0.5 + 2) = 25$.",
                working: "10 \\times 2.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= 25$ cm.",
                working: "25",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Distance = arc length $= r\\theta = 0.4 \\times 3$.",
                working: "0.4 \\times 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$= 1.2$ m.",
                working: "1.2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 6 cm (b) 8π cm² (c) 25 cm (d) 1.2 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u2-radians-arc-length-notes",
      title: "Radians and arc length — revision notes",
      summary:
        "Degree–radian conversion, arc length $s=r\\theta$, and sector area $A=\\frac12 r^2\\theta$.",
      sections: [
        {
          heading: "Radians",
          body: "$180^\\circ=\\pi$ radians, so $x^\\circ=\\frac{\\pi x}{180}$ and $\\theta$ rad $=\\frac{180\\theta}{\\pi}$ degrees. Keep $\\theta$ in radians inside $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$ and the arc formulae — this is the most common error.",
        },
        {
          heading: "Arc and sector",
          body: "For a circle of radius $r$ and angle $\\theta$ (radians): arc length $s=r\\theta$; sector area $A=\\frac12 r^2\\theta$. Segment area $=$ sector $-$ triangle $=\\frac12r^2(\\theta-\\sin\\theta)$. Perimeter of a sector includes both radii: $2r+s$.",
        },
        {
          heading: "Worked pattern",
          body: "Given $s$ and $r$, find $\\theta=\\frac{s}{r}$ then $A=\\frac12rs$. Given degrees, convert first — e.g. $60^\\circ=\\frac{\\pi}{3}$.",
        },
        {
          heading: "Exam checklist",
          body: "Check whether the question asks for arc length, perimeter or area. Convert degrees to radians before substituting. Give answers to 3 s.f. unless told otherwise.",
        },
      ],
    },
  ],
};
