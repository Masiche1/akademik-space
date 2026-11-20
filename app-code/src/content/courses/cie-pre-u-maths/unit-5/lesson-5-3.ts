import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cipum-u5-lesson-5-3",
  code: "5-3",
  title: "Mechanics: Forces, Moments and Motion",
  goal: "I CAN resolve forces, apply equilibrium conditions and solve problems involving moments and motion.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Applications of Mathematics: mechanics",
  ],
  vocabulary: [
    {
      term: "Force",
      definition: "Push or pull measured in newtons — vector quantity.",
    },
    {
      term: "Resolution",
      definition: "Breaking a force into horizontal and vertical components.",
    },
    {
      term: "Equilibrium",
      definition: "State where net force and net moment are both zero.",
    },
    {
      term: "Moment",
      definition:
        "Turning effect of a force — force × perpendicular distance from pivot.",
    },
    {
      term: "Friction",
      definition:
        "Force opposing motion — F ≤ μR where μ is coefficient of friction.",
    },
    {
      term: "Projectile",
      definition: "Object moving under gravity alone — parabolic trajectory.",
    },
  ],
  concepts: [
    {
      id: "cipum-u5-s1-mechanics",
      title: "Statics and dynamics",
      skill:
        "Resolve forces, apply equilibrium and moments, solve projectile problems.",
      lesson: {
        sections: [
          {
            heading: "Force resolution and equilibrium",
            body: "Any force F at angle θ resolves into Fcosθ (horizontal) and Fsinθ (vertical). For equilibrium: ΣFx = 0 and ΣFy = 0. Draw a free-body diagram — identify all forces including weight (mg) and normal reaction. Lami's theorem relates three forces in equilibrium via sines of angles between them.",
          },
          {
            heading: "Moments",
            body: "Moment about a point = force × perpendicular distance. For equilibrium: Σmoments = 0 about any chosen pivot — choose a pivot where unknown forces act to eliminate them. Couples are pairs of equal opposite forces producing pure rotation. Moment of a couple = force × perpendicular distance between forces.",
          },
          {
            heading: "Projectile motion",
            body: "Projectile launched with velocity u at angle θ: horizontal vx = ucosθ (constant, no air resistance); vertical vy = usinθ − gt. Position: x = ucosθ·t, y = usinθ·t − ½gt². Time of flight T = 2usinθ/g; range R = u²sin2θ/g — maximum at 45°. Trajectory is parabolic.",
          },
        ],
        keyFormulas: [
          {
            name: "Resolution",
            statement:
              "$F_x = F\\cos\\theta$; $F_y = F\\sin\\theta$; equilibrium: $\\sum F_x = \\sum F_y = 0$",
          },
          {
            name: "Projectile",
            statement:
              "$R = \\frac{u^2\\sin 2\\theta}{g}$; $T = \\frac{2u\\sin\\theta}{g}$; max range at $\\theta = 45°$",
          },
        ],
        workedExample: {
          problem:
            "A particle is projected at 20 m/s at 30° to the horizontal. Find its range (g = 9.8).",
          solution:
            "$R = \\frac{20^2 \\sin 60°}{9.8} = \\frac{400 \\times 0.866}{9.8} \\approx 35.3$ m.",
        },
      },
      questions: [
        {
          id: "cipum-u5-mec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force of 10 N acts at 60° to the horizontal. Its horizontal component is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 N" },
              { id: "b", text: "8.66 N" },
              { id: "c", text: "10 N" },
              { id: "d", text: "5.77 N" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Force resolution",
                statement: "$F_x = F\\cos\\theta$; $F_y = F\\sin\\theta$.",
              },
            ],
            steps: [
              {
                reasoning: "$F_x = 10\\cos 60° = 10 \\times 0.5 = 5$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 N",
          },
        },
        {
          id: "cipum-u5-mec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three forces act on a particle in equilibrium: 3 N east, 4 N north, and a third force. Find the third force.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Equilibrium",
                statement:
                  "$\\sum F_x = \\sum F_y = 0$ — third force balances the resultant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Resultant of known forces: $\\sqrt{3^2 + 4^2} = 5$ N at $\\tan^{-1}(4/3) = 53.1°$ north of east.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Third force = 5 N at 53.1° south of west (opposite direction).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 N at 53.1° south of west",
          },
        },
        {
          id: "cipum-u5-mec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A uniform beam AB of length 4 m and weight 200 N is supported at A and B. A load of 300 N hangs at the midpoint. Find the reactions at A and B.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Moments",
                statement:
                  "Σmoments = 0 about pivot; choose pivot to eliminate unknowns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "By symmetry, reactions equal: each supports half of total 500 N = 250 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Verify with moments about A: $R_B \\times 4 = 200 \\times 2 + 300 \\times 2 = 1000$, so $R_B = 250$ N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$R_A = 500 - 250 = 250$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$R_A = R_B = 250$ N",
          },
        },
        {
          id: "cipum-u5-mec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A projectile is fired at 30 m/s at 45°. Find (a) time of flight, (b) maximum height, (c) range. Take g = 9.8 m/s².",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Projectile motion",
                statement:
                  "Separate horizontal (constant) and vertical (accelerated) components.",
              },
            ],
            steps: [
              {
                reasoning: "$u_x = u_y = 30\\sin 45° \\approx 21.21$ m/s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(a) $T = 2u_y/g = 2 \\times 21.21/9.8 \\approx 4.33$ s; (b) $H = u_y^2/2g = 21.21^2/19.6 \\approx 22.96$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) $R = u_x \\times T = 21.21 \\times 4.33 \\approx 91.8$ m (or $u^2\\sin 90°/g = 900/9.8$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answers: T ≈ 4.33 s, H ≈ 23.0 m, R ≈ 91.8 m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "T ≈ 4.33 s; H ≈ 23.0 m; R ≈ 91.8 m",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u5-mechanics-notes",
      title: "Mechanics — revision notes",
      summary: "Force resolution, equilibrium, moments, projectile motion.",
      sections: [
        {
          heading: "Key skills",
          body: "Always draw a free-body diagram first. For moments, choose a pivot at an unknown force to simplify. For projectiles, treat horizontal and vertical motion independently — only vertical has acceleration.",
        },
        {
          heading: "Exam tips",
          body: "Check units throughout — forces in N, distances in m, g = 9.8 or 9.81. For equilibrium problems, both ΣF = 0 and ΣM = 0 must hold — don't forget either condition.",
        },
      ],
    },
  ],
};
