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
              { id: "a", text: "4 cm" },
              { id: "b", text: "6.25 cm" },
              { id: "c", text: "20 cm" },
              { id: "d", text: "12.5 cm" },
            ],
            correctChoiceId: "a",
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
