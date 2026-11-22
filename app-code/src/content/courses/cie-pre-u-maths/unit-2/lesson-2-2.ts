import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipum-u2-lesson-2-2",
  code: "2-2",
  title: "Trigonometry and Circular Measure",
  goal: "I CAN apply radian measure, trig identities and equations at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Pure Mathematics: trigonometry",
  ],
  vocabulary: [
    { term: "Radian", definition: "Angle where arc length equals radius." },
    {
      term: "Arc length",
      definition: "$s = r\\theta$ with $\\theta$ in radians.",
    },
    {
      term: "Sector area",
      definition: "$A = \\frac{1}{2}r^2\\theta$ with $\\theta$ in radians.",
    },
    {
      term: "Trigonometric identity",
      definition: "Equation true for all values in the domain.",
    },
    {
      term: "Principal value",
      definition: "The standard inverse trig output range.",
    },
  ],
  concepts: [
    {
      id: "cipum-u2-s2-trig",
      title: "Radians and trig equations",
      skill: "Work in radians and solve trigonometric equations rigorously.",
      lesson: {
        sections: [
          {
            heading: "Radians",
            body: "At Pre-U, all angle work is in radians: $180^\\circ = \\pi$ rad. Arc length $s = r\\theta$, sector area $A = \\frac{1}{2}r^2\\theta$, and the small-angle approximations $\\sin\\theta \\approx \\tan\\theta \\approx \\theta$ apply for small $\\theta$.",
          },
          {
            heading: "Trig equations",
            body: "Solve by isolating the trig function then finding all angles in $[0, 2\\pi)$ satisfying it — not just the principal value. For $\\sin\\theta = k$, solutions are $\\theta = \\arcsin k$ and $\\pi - \\arcsin k$ in $[0, 2\\pi)$. Check the domain carefully.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$s = r\\theta$" },
          { name: "Sector area", statement: "$A = \\frac{1}{2}r^2\\theta$" },
          {
            name: "Trig solutions",
            statement: "find all angles in the required interval",
          },
        ],
        workedExample: {
          problem: "Solve $2\\sin\\theta = 1$ for $0 \\leq \\theta < 2\\pi$.",
          solution:
            "$\\sin\\theta = \\frac{1}{2}$; $\\theta = \\frac{\\pi}{6}$ or $\\frac{5\\pi}{6}$.",
        },
      },
      questions: [
        {
          id: "cipum-u2-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has radius 5 cm and a sector angle of $0.8$ rad. What is the arc length?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.25 cm" },
              { id: "b", text: "4 cm" },
              { id: "c", text: "20 cm" },
              { id: "d", text: "12.5 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Arc length", statement: "$s = r\\theta$." },
            ],
            steps: [
              {
                reasoning: "$s = 5 \\times 0.8 = 4$ cm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 cm",
          },
        },
        {
          id: "cipum-u2-tr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a sector of radius 6 cm with angle $\\frac{\\pi}{3}$ rad.",
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
                  "$A = \\frac{1}{2}(36)(\\frac{\\pi}{3}) = 6\\pi$ cm².",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$6\\pi$ cm²",
          },
        },
        {
          id: "cipum-u2-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\cos\\theta = -\\frac{1}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trig equations",
                statement: "Find all angles in the interval.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reference angle: $\\arccos(1/2) = \\frac{\\pi}{3}$; cosine negative in QII and QIII.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ and $\\theta = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solutions: $\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$",
          },
        },
        {
          id: "cipum-u2-tr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\tan 2\\theta = \\sqrt{3}$ for $0 \\leq \\theta < \\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composite angle",
                statement: "Solve for $2\\theta$ then halve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\tan 2\\theta = \\sqrt{3} \\Rightarrow 2\\theta = \\frac{\\pi}{3} + k\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In range $0 \\leq 2\\theta < 2\\pi$: $2\\theta = \\frac{\\pi}{3}, \\frac{4\\pi}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = \\frac{\\pi}{6}, \\frac{2\\pi}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both satisfy $0 \\leq \\theta < \\pi$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{6}, \\frac{2\\pi}{3}$",
          },
        },
        {
          id: "cipum-u2-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sector has radius 3 cm and angle 2 rad. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6 cm²" },
              { id: "b", text: "18 cm²" },
              { id: "c", text: "3 cm²" },
              { id: "d", text: "9 cm²" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Sector area",
                statement: "$A = \\frac{1}{2}r^2\\theta$ with $\\theta$ in radians.",
              },
            ],
            steps: [
              {
                reasoning: "$A = \\frac{1}{2}(9)(2) = 9$ cm².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9 cm²",
          },
        },
        {
          id: "cipum-u2-tr-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the arc length of a sector of radius 8 cm subtending an angle of $\\frac{\\pi}{4}$ rad.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6.283185, tolerance: 0.001 }],
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
                reasoning: "$s = 8 \\times \\frac{\\pi}{4} = 2\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$s \\approx 6.2832$ cm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2\\pi \\approx 6.283$ cm",
          },
        },
        {
          id: "cipum-u2-tr-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trig equations",
                statement: "Find all angles in the interval, not just the principal value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reference angle: $\\arcsin\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$; sine positive in QI and QII.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\theta = \\frac{\\pi}{3}$ and $\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solutions: $\\frac{\\pi}{3}, \\frac{2\\pi}{3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
          },
        },
        {
          id: "cipum-u2-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $\\cos\\theta = 0$ for $0 \\leq \\theta < 2\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$" },
              { id: "b", text: "No solutions" },
              { id: "c", text: "$\\theta = 0, \\pi$" },
              { id: "d", text: "$\\theta = \\frac{\\pi}{2}$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trig equations",
                statement: "Cosine is zero on the $y$-axis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\cos\\theta = 0$ at $\\theta = \\frac{\\pi}{2}$ and $\\frac{3\\pi}{2}$ in the interval.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$",
          },
        },
        {
          id: "cipum-u2-tr-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\tan\\theta = 1$ for $0 \\leq \\theta < \\pi$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.785398, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tangent equation",
                statement: "$\\tan\\theta = 1$ has period $\\pi$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\theta = \\arctan 1 = \\frac{\\pi}{4}$; next solution $+\\pi$ is outside the interval.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = \\frac{\\pi}{4} \\approx 0.7854$ rad.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{\\pi}{4}$",
          },
        },
        {
          id: "cipum-u2-tr-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\sin 2\\theta = \\frac{1}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composite angle",
                statement: "Solve for $2\\theta$ over the doubled interval, then halve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sin 2\\theta = \\frac{1}{2}$ with $0 \\leq 2\\theta < 4\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$2\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, \\frac{17\\pi}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\theta = \\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{13\\pi}{12}, \\frac{17\\pi}{12}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four satisfy $0 \\leq \\theta < 2\\pi$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\theta = \\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{13\\pi}{12}, \\frac{17\\pi}{12}$",
          },
        },
        {
          id: "cipum-u2-tr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Express $150^\\circ$ in radians.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5\\pi}{6}$" },
              { id: "b", text: "$\\frac{7\\pi}{6}$" },
              { id: "c", text: "$\\frac{\\pi}{6}$" },
              { id: "d", text: "$\\frac{\\pi}{3}$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Degree-radian conversion",
                statement: "$180^\\circ = \\pi$ rad.",
              },
            ],
            steps: [
              {
                reasoning: "$150^\\circ = \\frac{150}{180}\\pi = \\frac{5\\pi}{6}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5\\pi}{6}$",
          },
        },
        {
          id: "cipum-u2-tr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sector has radius 5 cm and angle 1.2 rad. What is its perimeter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11 cm" },
              { id: "b", text: "16 cm" },
              { id: "c", text: "6 cm" },
              { id: "d", text: "31 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sector perimeter",
                statement: "Perimeter $= 2r + r\\theta$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arc $= 5 \\times 1.2 = 6$; perimeter $= 10 + 6 = 16$ cm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "16 cm",
          },
        },
        {
          id: "cipum-u2-tr-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $\\sin\\theta = -\\frac{1}{2}$ for $0 \\leq \\theta < 2\\pi$.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "a", answer: 3.665191, tolerance: 0.001 },
              { label: "b", answer: 5.759587, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trig equations",
                statement: "Negative sine occurs in QIII and QIV.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reference angle $\\frac{\\pi}{6}$; solutions in QIII and QIV.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\theta = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$ and $\\theta = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\theta \\approx 3.6652, 5.7596$ rad.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$",
          },
        },
        {
          id: "cipum-u2-tr-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many solutions does $\\sin\\theta = 0.5$ have in the interval $0 \\leq \\theta < 2\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "1" },
              { id: "c", text: "3" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trig equations",
                statement: "Positive sine occurs in two quadrants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\theta = \\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ — two solutions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipum-u2-tr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sector has area 24 cm² and radius 6 cm. Find its angle in radians.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.333333, tolerance: 0.001 }],
          },
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
                reasoning: "$24 = \\frac{1}{2}(36)\\theta = 18\\theta$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\theta = \\frac{24}{18} = \\frac{4}{3} \\approx 1.333$ rad.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\theta = \\frac{4}{3}$ rad",
          },
        },
        {
          id: "cipum-u2-tr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\sin^2\\theta - \\sin\\theta - 1 = 0$ for $0 \\leq \\theta < 2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quadratic in trig function",
                statement: "Treat $\\sin\\theta$ as the variable, solve, then solve each trig equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Factorise: $(\\sin\\theta - 1)(2\\sin\\theta + 1) = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sin\\theta = 1 \\Rightarrow \\theta = \\frac{\\pi}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\sin\\theta = -\\frac{1}{2} \\Rightarrow \\theta = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solutions: $\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\theta = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u2-trig-notes",
      title: "Trigonometry — revision notes",
      summary: "Radian formulas, all-angle solutions, composite angles.",
      sections: [
        {
          heading: "Key skills",
          body: "Always work in radians; find ALL solutions in the interval, not just principal values; for $\\tan n\\theta$ solve for $n\\theta$ first.",
        },
        {
          heading: "Exam tips",
          body: "Sketch the unit circle to identify which quadrants give solutions — prevents missing angles.",
        },
      ],
    },
  ],
};
