import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "physhl-u1-lesson-1-2",
  code: "1-2",
  title: "Rigid Body Mechanics: Torque and Moment of Inertia",
  goal: "I CAN calculate torque and moment of inertia, apply the rotational analogue of Newton's second law, and solve problems involving rotational equilibrium and angular acceleration.",
  standards: ["Paper 1", "Paper 2", "AHL A2"],
  vocabulary: [
    {
      term: "Rigid body",
      definition:
        "A body that does not deform under forces — all parts maintain fixed distances from each other.",
    },
    {
      term: "Torque ($\\tau$)",
      definition:
        "The turning effect of a force about a pivot: $\\tau = Fd\\sin\\theta$ where $d$ is the perpendicular distance (moment arm) and $\\theta$ is the angle between force and lever arm.",
    },
    {
      term: "Moment of inertia ($I$)",
      definition:
        "The rotational equivalent of mass — a body's resistance to angular acceleration: $I = \\sum mr^2$ for point masses.",
    },
    {
      term: "Rotational equilibrium",
      definition:
        "When net torque about any pivot is zero: $\\sum \\tau = 0$ — no angular acceleration.",
    },
    {
      term: "Moment arm",
      definition:
        "The perpendicular distance from the pivot to the line of action of the force.",
    },
    {
      term: "Couple",
      definition:
        "A pair of equal and opposite forces that produce rotation without translation.",
    },
  ],
  concepts: [
    {
      id: "physhl-u1-torque-I",
      title: "Torque, moment of inertia and rotational dynamics",
      skill:
        "Calculate torque, determine moments of inertia for standard shapes, and apply $\\tau = I\\alpha$ to rotational motion problems.",
      lesson: {
        sections: [
          {
            heading: "Torque",
            body: "**Torque** is the turning effect of a force about a pivot: $\\tau = Fd\\sin\\theta$, where $d$ is the distance from pivot to the force's line of action and $\\theta$ the angle between force and lever arm. Equivalently $\\tau = F \\times$ (perpendicular distance = moment arm). The SI unit is the newton-metre (N m). Clockwise and anticlockwise torques have opposite signs — take a consistent sign convention. A **couple** produces pure rotation (two equal opposite forces, no net force).",
          },
          {
            heading: "Moment of inertia",
            body: "**Moment of inertia** $I$ measures resistance to angular acceleration — the rotational analogue of mass. For point masses $I = \\sum mr^2$. Standard results: hoop/ring about centre $I = MR^2$; solid cylinder/disc $I = \\frac{1}{2}MR^2$; solid sphere $I = \\frac{2}{5}MR^2$; rod about centre $I = \\frac{1}{12}ML^2$; rod about end $I = \\frac{1}{3}ML^2$. Mass distributed further from the axis increases $I$.",
          },
          {
            heading: "Newton's second law for rotation",
            body: "The rotational analogue of $F = ma$ is $\\tau = I\\alpha$, where $\\alpha$ is angular acceleration. Combined with kinematics: $\\omega = \\omega_0 + \\alpha t$, $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$, $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$. For **rotational equilibrium** (static balance), net torque about ANY pivot must be zero: $\\sum \\tau = 0$.",
          },
        ],
        keyFormulas: [
          { name: "Torque", statement: "$\\tau = Fd\\sin\\theta$ — N m" },
          {
            name: "Moment of inertia",
            statement:
              "$I = \\sum mr^2$; disc $\\frac{1}{2}MR^2$, hoop $MR^2$, sphere $\\frac{2}{5}MR^2$",
          },
          { name: "Rotational 2nd law", statement: "$\\tau = I\\alpha$" },
          { name: "Rotational equilibrium", statement: "$\\sum \\tau = 0$" },
        ],
        workedExample: {
          problem:
            "A 50 N force is applied perpendicular to a spanner at 0.30 m from the nut. Calculate the torque.",
          solution:
            "$\\tau = Fd = 50 \\times 0.30 = 15$ N m. Since force is perpendicular, $\\sin 90° = 1$.",
        },
      },
      questions: [
        {
          id: "physhl-u1-torque-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A force of 20 N is applied perpendicular to a lever arm of 0.50 m. The torque produced is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.025$ N m" },
              { id: "b", text: "$40$ N m" },
              { id: "c", text: "$100$ N m" },
              { id: "d", text: "$10$ N m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Torque",
                statement:
                  "$\\tau = Fd\\sin\\theta$; perpendicular force $\\sin\\theta = 1$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\tau = 20 \\times 0.50 \\times 1 = 10$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 10 N m",
            commonErrors: [
              "Dividing instead of multiplying — torque = force × moment arm.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A solid disc ($I = \\frac{1}{2}MR^2$) and a hoop ($I = MR^2$) have the same mass and radius. Which has the larger moment of inertia and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moment of inertia",
                statement:
                  "Mass further from axis → larger I; hoop has all mass at rim.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hoop has larger $I$ — all its mass is at distance $R$ from the axis.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Disc has mass distributed from centre to rim — average distance smaller.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "For same $M$ and $R$: hoop $I = MR^2$ > disc $I = \\frac{1}{2}MR^2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hoop — all mass at maximum radius.",
            commonErrors: [
              "Saying 'same mass = same inertia' — distribution matters.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A uniform metre rule of weight 2.0 N is pivoted at the 30 cm mark. A 5.0 N weight hangs at the 80 cm mark. Calculate the weight that must be placed at the 0 cm mark to restore balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotational equilibrium",
                statement: "$\\sum \\tau = 0$ about any pivot.",
              },
            ],
            steps: [
              {
                reasoning: "Take moments about pivot at 30 cm.",
                working:
                  "Anticlockwise: rule weight 2.0 N at 20 cm left → 2.0 \\times 0.20 = 0.40 N m",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "5.0 N at 50 cm right → 5.0 \\times 0.50 = 2.50 N m clockwise.",
                working: "Clockwise: 5.0 \\times 0.50 = 2.50 N m",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unknown W at 30 cm left must balance: $W \\times 0.30 + 0.40 = 2.50$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "$W = (2.50 - 0.40)/0.30 = 7.0$ N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$W = 7.0$ N",
            commonErrors: [
              "Ignoring the rule's own weight — it contributes torque about the pivot.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A solid disc of mass 5.0 kg and radius 0.40 m ($I = \\frac{1}{2}MR^2$) is free to rotate about its centre. A constant tangential force of 20 N is applied at the rim.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the moment of inertia of the disc.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the torque produced by the force.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the angular acceleration.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the angular velocity after 3.0 s (starting from rest).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotational dynamics",
                statement:
                  "$\\tau = I\\alpha$ links torque to angular acceleration.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$I = \\frac{1}{2} \\times 5.0 \\times 0.40^2 = \\frac{1}{2} \\times 5.0 \\times 0.16 = 0.40$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = 0.40$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Force tangential → $\\tau = F \\times R = 20 \\times 0.40 = 8.0$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\tau = 8.0$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\alpha = \\tau/I = 8.0/0.40 = 20$ rad s$^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\alpha = 20$ rad s$^{-2}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$\\omega = \\omega_0 + \\alpha t = 0 + 20 \\times 3.0 = 60$ rad s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\omega = 60$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.40 kg m². (b) 8.0 N m. (c) 20 rad/s². (d) 60 rad/s.",
            commonErrors: [
              "Using diameter instead of radius in $I = \\frac{1}{2}MR^2$.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The SI unit of torque is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "newton metre (N m)" },
              { id: "b", text: "joule (J)" },
              { id: "c", text: "newton (N)" },
              { id: "d", text: "watt (W)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Torque",
                statement: "$\\tau = Fd\\sin\\theta$ has units of N m.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Torque is force times perpendicular distance, so its unit is N m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** newton metre",
            commonErrors: [
              "Confusing N m with J — torque is not energy; N m and J are dimensionally equal but torque is not work.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A force of 10 N is applied at $0.50$ m from a pivot, at $30°$ to the line joining pivot and force. The torque is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5.0$ N m" },
              { id: "b", text: "$0$ N m" },
              { id: "c", text: "$2.5$ N m" },
              { id: "d", text: "$8.7$ N m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Torque",
                statement: "$\\tau = Fd\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\tau = 10 \\times 0.50 \\times \\sin 30° = 5.0 \\times 0.5 = 2.5$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 2.5 N m",
            commonErrors: [
              "Ignoring $\\sin\\theta$ — torque is only maximal when force is perpendicular.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A couple consists of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "two equal and opposite forces that produce rotation without translation",
              },
              { id: "b", text: "a force and a torque acting together" },
              { id: "c", text: "a single force through the pivot" },
              { id: "d", text: "two forces acting at the same point" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Couple",
                statement:
                  "Equal and opposite forces separated by a distance — pure rotation, zero net force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A couple has zero resultant force but non-zero resultant torque.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** equal opposite forces, pure rotation",
            commonErrors: [
              "Thinking a couple produces translation — the net force cancels.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a system of point masses, the moment of inertia about an axis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$I = \\sum mr^2$" },
              { id: "b", text: "$I = \\frac{1}{2}MR^2$ always" },
              { id: "c", text: "$I = \\sum m^2 r$" },
              { id: "d", text: "$I = \\sum m/r^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moment of inertia",
                statement: "$I = \\sum mr^2$ for point masses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each mass contributes $mr^2$ about the axis; sum over all masses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $I = \\sum mr^2$",
            commonErrors: [
              "Using $mr$ instead of $mr^2$ — distance enters squared.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A force of 40 N is applied perpendicular to a spanner at a distance of 0.25 m from the nut. Calculate the torque produced.",
          parts: [{ label: "a", prompt: "Torque in N m.", marks: 3 }],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "N m", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Torque",
                statement:
                  "$\\tau = Fd\\sin\\theta$; perpendicular force gives $\\sin\\theta = 1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Force is perpendicular so $\\tau = Fd$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau = 40 \\times 0.25$.",
                working: "\\tau = 40 \\times 0.25 = 10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau = 10$ N m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10 N m",
            commonErrors: [
              "Forgetting the unit is N m, not J — torque is not energy.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A uniform rod of mass 2.0 kg and length 1.5 m rotates about an axis through one end, perpendicular to the rod. Calculate its moment of inertia ($I = \\frac{1}{3}ML^2$ for a rod about its end).",
          parts: [
            { label: "a", prompt: "Moment of inertia in kg m$^2$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, unit: "kg m^2", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moment of inertia of rod",
                statement: "$I = \\frac{1}{3}ML^2$ about one end.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identify $M = 2.0$ kg and $L = 1.5$ m in the formula.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = \\frac{1}{3} \\times 2.0 \\times 1.5^2$.",
                working: "I = (1/3) \\times 2.0 \\times 2.25 = 1.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = 1.5$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$I = 1.5$ kg m$^2$",
            commonErrors: [
              "Using $\\frac{1}{12}ML^2$ (centre axis) instead of $\\frac{1}{3}ML^2$ (end axis).",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A solid disc of mass 4.0 kg and radius 0.50 m ($I = \\frac{1}{2}MR^2$) is free to rotate about its centre. A constant tangential force of 12 N is applied at the rim.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the moment of inertia of the disc.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the torque produced by the force.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Calculate the angular acceleration.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "kg m^2", tolerance: 0.01 },
              { label: "b", answer: 6, unit: "N m", tolerance: 0.01 },
              { label: "c", answer: 12, unit: "rad s^-2", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotational dynamics",
                statement:
                  "$I = \\frac{1}{2}MR^2$; $\\tau = Fd\\sin\\theta$; $\\tau = I\\alpha$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$I = \\frac{1}{2} \\times 4.0 \\times 0.50^2 = \\frac{1}{2} \\times 4.0 \\times 0.25 = 0.50$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = 0.50$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Tangential force: $\\tau = F \\times R = 12 \\times 0.50 = 6.0$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\alpha = \\tau/I = 6.0/0.50 = 12$ rad s$^{-2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.50 kg m². (b) 6.0 N m. (c) 12 rad s⁻².",
            commonErrors: [
              "Using diameter in $I = \\frac{1}{2}MR^2$ — the formula needs radius.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "On a see-saw pivoted at the centre, a child of weight 300 N sits 1.2 m to the left of the pivot. A second child of weight 400 N must sit on the right side to balance the see-saw.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the anticlockwise torque produced by the 300 N child.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the distance from the pivot at which the 400 N child must sit.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 360, unit: "N m", tolerance: 0.01 },
              { label: "b", answer: 0.9, unit: "m", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotational equilibrium",
                statement:
                  "$\\sum \\tau = 0$ — clockwise and anticlockwise torques balance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Anticlockwise torque $= Fd = 300 \\times 1.2$.",
                working: "\\tau = 300 \\times 1.2 = 360 N m",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau = 360$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For balance, clockwise torque must equal 360 N m: $400 \\times d = 360$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$d = 360/400$.",
                working: "d = 360/400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$d = 0.90$ m to the right of the pivot.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 360 N m. (b) 0.90 m.",
            commonErrors: [
              "Forgetting torques must balance — forces alone need not be equal.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A constant torque of 24 N m acts on a wheel with moment of inertia 3.0 kg m$^2$. Calculate the angular acceleration of the wheel.",
          parts: [
            {
              label: "a",
              prompt: "Angular acceleration in rad s$^{-2}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "rad s^-2", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rotational 2nd law",
                statement: "$\\tau = I\\alpha$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rearrange $\\tau = I\\alpha$ to $\\alpha = \\tau/I$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\alpha = 24/3.0$.",
                working: "\\alpha = 24/3.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\alpha = 8$ rad s$^{-2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\alpha = 8$ rad s⁻²",
            commonErrors: [
              "Multiplying instead of dividing — larger $I$ means smaller $\\alpha$ for same torque.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Two forces act on a door hinged at one edge. Force $F_1 = 30$ N acts perpendicular to the door at 0.80 m from the hinge, tending to open it. Force $F_2 = 20$ N acts perpendicular at 1.0 m from the hinge on the same side, tending to close it.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the magnitude of the torque due to $F_1$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the magnitude of the net torque on the door.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 24, unit: "N m", tolerance: 0.01 },
              { label: "b", answer: 4, unit: "N m", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Net torque",
                statement:
                  "Opposing torques subtract; net torque determines angular acceleration.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\tau_1 = F_1 d_1 = 30 \\times 0.80$.",
                working: "\\tau_1 = 30 \\times 0.80 = 24 N m",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\tau_1 = 24$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\tau_2 = 20 \\times 1.0 = 20$ N m opposite direction; net $= 24 - 20$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Net torque $= 4$ N m in the opening direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 24 N m. (b) 4 N m (opening direction).",
            commonErrors: [
              "Adding the torques — they act in opposite rotational senses.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why a longer spanner makes it easier to undo a tight nut, and why pushing directly towards the pivot produces no turning effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Torque",
                statement:
                  "$\\tau = F \\times$ moment arm — larger moment arm gives larger torque for same force.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Torque is force times perpendicular distance (moment arm) from pivot.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A longer spanner increases the moment arm $d$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For the same applied force, torque $\\tau = Fd$ is larger — easier to exceed the nut's resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alternatively the same torque can be produced with less force.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "A force directed along the line through the pivot has zero perpendicular distance — moment arm = 0.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Therefore $\\tau = F \\times 0 = 0$ — no rotation regardless of force magnitude.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Torque $= F \\times$ moment arm: longer arm → more torque; force through pivot → zero arm → zero torque.",
            commonErrors: [
              "Thinking force alone matters — only the perpendicular distance counts.",
            ],
          },
        },
        {
          id: "physhl-u1-torque-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A hoop of mass 2.0 kg and radius 0.30 m ($I = MR^2$) is free to rotate about its centre. A constant tangential force of 15 N is applied at the rim for 2.0 s.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the moment of inertia of the hoop.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the torque produced by the force.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the angular acceleration.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the angular velocity after 2.0 s, starting from rest.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rotational dynamics",
                statement:
                  "$\\tau = I\\alpha$; $\\omega = \\omega_0 + \\alpha t$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$I = MR^2 = 2.0 \\times 0.30^2 = 2.0 \\times 0.09 = 0.18$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I = 0.18$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Tangential force: $\\tau = F \\times R = 15 \\times 0.30 = 4.5$ N m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\tau = 4.5$ N m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$\\alpha = \\tau/I = 4.5/0.18 = 25$ rad s$^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\alpha = 25$ rad s$^{-2}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$\\omega = \\omega_0 + \\alpha t = 0 + 25 \\times 2.0$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\omega = 50$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 0.18 kg m². (b) 4.5 N m. (c) 25 rad s⁻². (d) 50 rad s⁻¹.",
            commonErrors: [
              "Using $\\frac{1}{2}MR^2$ (disc) instead of $MR^2$ (hoop).",
            ],
          },
        },
      ],
    },
    {
      id: "physhl-u1-angular-momentum",
      title: "Angular momentum and its conservation",
      skill:
        "Define angular momentum, apply conservation of angular momentum to collapsing stars and spinning objects, and relate torque to rate of change of angular momentum.",
      lesson: {
        sections: [
          {
            heading: "Angular momentum",
            body: "**Angular momentum** $L$ is the rotational analogue of linear momentum: $L = I\\omega$ for a rigid body (or $L = mvr$ for a point mass moving in a circle). It is a vector — its direction follows the right-hand rule (curl fingers in direction of rotation, thumb points along $L$). The SI unit is kg m² s⁻¹.",
          },
          {
            heading: "Torque and angular momentum",
            body: "Just as force changes linear momentum ($F = \\frac{dp}{dt}$), **torque changes angular momentum**: $\\tau = \\frac{dL}{dt}$. If net external torque is zero, angular momentum is conserved — the same principle as conservation of linear momentum. This is why a spinning ice skater speeds up when pulling arms in: $I$ decreases, so $\\omega$ must increase to keep $L = I\\omega$ constant.",
          },
          {
            heading: "Conservation applications",
            body: "Angular momentum conservation explains: collapsing stars spinning faster as they contract (like a skater); planets moving faster at perihelion (smaller $r$ → larger $v$ to conserve $L = mvr$); gyroscopes maintaining orientation; and figure skaters' spins. The principle holds when no external torque acts — friction and air resistance are usually negligible over short times.",
          },
        ],
        keyFormulas: [
          {
            name: "Angular momentum",
            statement:
              "$L = I\\omega$ (rigid body) or $L = mvr$ (point mass in circle)",
          },
          {
            name: "Torque-angular momentum",
            statement: "$\\tau = \\frac{dL}{dt}$",
          },
          {
            name: "Conservation",
            statement:
              "If $\\sum \\tau = 0$ then $L$ is constant: $I_1\\omega_1 = I_2\\omega_2$",
          },
        ],
        workedExample: {
          problem:
            "A skater spins at 2.0 rev/s with arms outstretched ($I = 4.0$ kg m²). She pulls her arms in ($I = 1.5$ kg m²). Calculate her new angular speed.",
          solution:
            "Conservation: $I_1\\omega_1 = I_2\\omega_2$. $\\omega_2 = (4.0 \\times 2.0)/1.5 = 5.3$ rev/s. She spins faster.",
        },
      },
      questions: [
        {
          id: "physhl-u1-am-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Angular momentum $L$ for a rigid body is given by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$L = I\\omega$" },
              { id: "b", text: "$L = Fd$" },
              { id: "c", text: "$L = mv$" },
              { id: "d", text: "$L = mvr^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angular momentum",
                statement: "$L = I\\omega$ for rigid body.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$L = I\\omega$ is the rotational analogue of $p = mv$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $L = I\\omega$",
            commonErrors: [
              "Confusing angular momentum with linear momentum $mv$.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A spinning figure skater pulls her arms in and spins faster. Explain this using conservation of angular momentum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement:
                  "No external torque → $I\\omega$ constant; smaller $I$ → larger $\\omega$.",
              },
            ],
            steps: [
              {
                reasoning: "Pulling arms in reduces moment of inertia $I$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "No external torque → angular momentum $L = I\\omega$ conserved.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Smaller $I$ → larger $\\omega$ → spins faster.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$I$ decreases, $\\omega$ increases to conserve $L$.",
            commonErrors: [
              "Saying 'she pushes harder' — it's conservation of angular momentum.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A planet orbits the Sun in an elliptical orbit. Explain why the planet moves faster at perihelion (closest approach) than at aphelion (farthest point), using angular momentum conservation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kepler's 2nd law",
                statement:
                  "Equal areas in equal times — angular momentum conserved in orbit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gravity provides centripetal force but exerts no torque about the Sun (central force).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "No external torque → angular momentum $L = mvr$ conserved.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "At perihelion $r$ is small → $v$ must be large to keep $L$ constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At aphelion $r$ is large → $v$ is smaller.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Central force → no torque → $mvr$ constant → faster at smaller $r$.",
            commonErrors: [
              "Thinking gravity 'pulls' the planet faster — it's angular momentum conservation.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A merry-go-round (initially at rest, $I = 200$ kg m²) has a child of mass 30 kg standing at the rim (radius 2.0 m). The child walks to a point 0.5 m from the centre.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the initial moment of inertia of the system.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the new moment of inertia when the child moves in.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If the merry-go-round was initially spinning at 0.50 rad/s, calculate its new angular speed.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement:
                  "No external torque → $I_1\\omega_1 = I_2\\omega_2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$I_1 = 200 + 30 \\times 2.0^2 = 200 + 120 = 320$ kg m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I_1 = 320$ kg m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$I_2 = 200 + 30 \\times 0.5^2 = 200 + 7.5 = 207.5$ kg m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$I_2 = 207.5$ kg m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Conservation: $I_1\\omega_1 = I_2\\omega_2$ → $\\omega_2 = (320 \\times 0.50)/207.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\omega_2 = 160/207.5 = 0.77$ rad/s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Angular speed increases because $I$ decreased.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "No external torque during walk → $L$ conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 320 kg m². (b) 207.5 kg m². (c) $\\omega_2 = 0.77$ rad/s.",
            commonErrors: [
              "Forgetting child's contribution to $I$ — use parallel axis theorem ($mr^2$).",
            ],
          },
        },
        {
          id: "physhl-u1-am-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The angular momentum of a point mass $m$ moving in a circle of radius $r$ with speed $v$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$L = mv^2/r$" },
              { id: "b", text: "$L = I\\omega$" },
              { id: "c", text: "$L = mvr$" },
              { id: "d", text: "$L = mgr$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angular momentum",
                statement: "$L = mvr$ for a point mass in circular motion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$L = mvr$ is the point-mass form; $L = I\\omega$ applies to extended rigid bodies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $L = mvr$",
            commonErrors: [
              "Using $I\\omega$ for a point mass — that requires a moment of inertia about the axis.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The rotational analogue of Newton's second law states that torque equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\tau = \\frac{dL}{dt}$" },
              { id: "b", text: "$\\tau = L\\omega$" },
              { id: "c", text: "$\\tau = mvr$" },
              { id: "d", text: "$\\tau = I\\omega$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Torque and angular momentum",
                statement:
                  "Torque is the rate of change of angular momentum: $\\tau = dL/dt$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Just as $F = dp/dt$, torque changes angular momentum: $\\tau = dL/dt$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\tau = dL/dt$",
            commonErrors: [
              "Confusing $\\tau = dL/dt$ with $\\tau = I\\alpha$ — both are correct but the former is the more general form.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The direction of the angular momentum vector of a rotating body is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "always vertically downwards" },
              {
                id: "b",
                text: "along the axis of rotation, given by the right-hand rule",
              },
              { id: "c", text: "opposite to the direction of motion" },
              { id: "d", text: "tangent to the rim of rotation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum vector",
                statement:
                  "$\\vec{L}$ points along the rotation axis; direction by right-hand rule.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Angular momentum is a vector along the axis of rotation — curl fingers with rotation, thumb gives $L$ direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** along the axis, right-hand rule",
            commonErrors: [
              "Thinking $L$ points along the velocity — it is perpendicular to the plane of rotation.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Angular momentum of a system is conserved when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the system is at rest" },
              { id: "b", text: "the moment of inertia is constant" },
              {
                id: "c",
                text: "the net external torque on the system is zero",
              },
              { id: "d", text: "no forces act on the system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation of angular momentum",
                statement: "If $\\sum \\tau_{ext} = 0$ then $L$ is constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "From $\\tau = dL/dt$, zero net external torque means $L$ does not change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** net external torque is zero",
            commonErrors: [
              "Thinking forces must be zero — only net TORQUE matters for angular momentum.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "A flywheel has moment of inertia 0.50 kg m$^2$ and spins at 20 rad s$^{-1}$. Calculate its angular momentum.",
          parts: [
            {
              label: "a",
              prompt: "Angular momentum in kg m$^2$ s$^{-1}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "kg m^2 s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Angular momentum",
                statement: "$L = I\\omega$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Apply $L = I\\omega$ with $I = 0.50$ kg m$^2$ and $\\omega = 20$ rad s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$L = 0.50 \\times 20$.",
                working: "L = 0.50 \\times 20",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$L = 10$ kg m$^2$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$L = 10$ kg m² s⁻¹",
            commonErrors: [
              "Using $L = I/\\omega$ — angular momentum is $I$ times $\\omega$.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A figure skater spins at 1.5 rad s$^{-1}$ with moment of inertia 5.0 kg m$^2$. She pulls her arms in, reducing her moment of inertia to 2.0 kg m$^2$. Calculate her new angular speed.",
          parts: [
            {
              label: "a",
              prompt: "New angular speed in rad s$^{-1}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.75, unit: "rad s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement: "No external torque: $I_1\\omega_1 = I_2\\omega_2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Conservation gives $\\omega_2 = I_1\\omega_1/I_2 = 5.0 \\times 1.5/2.0$.",
                working: "\\omega_2 = 7.5/2.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide to find the new angular speed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$\\omega_2 = 3.75$ rad s$^{-1}$ — she spins faster.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\omega_2 = 3.75$ rad s⁻¹",
            commonErrors: [
              "Using the ratio of $I$ incorrectly — $\\omega$ must increase when $I$ decreases.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A merry-go-round has moment of inertia 150 kg m$^2$ and spins at 0.80 rad s$^{-1}$. A child of mass 40 kg stands at the rim (radius 1.5 m) and walks in to a radius of 0.40 m.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the initial moment of inertia of the system (merry-go-round + child).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the final moment of inertia.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Calculate the final angular speed of the system.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 240, unit: "kg m^2", tolerance: 0.01 },
              { label: "b", answer: 156.4, unit: "kg m^2", tolerance: 0.01 },
              { label: "c", answer: 1.23, unit: "rad s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement:
                  "No external torque while child walks: $I_1\\omega_1 = I_2\\omega_2$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Child contributes $mr^2 = 40 \\times 1.5^2 = 90$ kg m$^2$; total $I_1 = 150 + 90 = 240$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I_1 = 240$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$I_2 = 150 + 40 \\times 0.40^2 = 150 + 6.4 = 156.4$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\omega_2 = I_1\\omega_1/I_2 = 240 \\times 0.80/156.4$.",
                working: "\\omega_2 = 192/156.4 = 1.23 rad/s",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\omega_2 = 1.23$ rad s$^{-1}$ — angular speed increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 240 kg m². (b) 156.4 kg m². (c) 1.23 rad s⁻¹.",
            commonErrors: [
              "Forgetting the child's $mr^2$ contribution at each radius.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A satellite moves in a circular orbit. At radius $7.0 \\times 10^6$ m its speed is 7500 m/s. Calculate its speed when its orbital radius changes to $1.4 \\times 10^7$ m, assuming angular momentum is conserved.",
          parts: [
            {
              label: "a",
              prompt: "Speed at the new radius in m s$^{-1}$.",
              marks: 4,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3750, unit: "m s^-1", tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement:
                  "For a central force $mvr$ is constant: $v \\propto 1/r$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Gravity exerts no torque about the centre, so $mvr$ is conserved: $v_1 r_1 = v_2 r_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Rearrange $v_2 = v_1 r_1/r_2 = 7500 \\times 7.0 \\times 10^6/1.4 \\times 10^7$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify the radius ratio: $7.0/14 = 0.5$.",
                working: "v_2 = 7500 \\times 0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$v_2 = 3750$ m s$^{-1}$ — speed halves when radius doubles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3750 m s⁻¹",
            commonErrors: [
              "Doubling the speed instead of halving it — $v$ is inversely proportional to $r$.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A constant torque of 50 N m acts on a wheel of moment of inertia 2.0 kg m$^2$ for 0.40 s. Calculate the change in angular velocity of the wheel.",
          parts: [
            {
              label: "a",
              prompt: "Change in angular velocity in rad s$^{-1}$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "rad s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular impulse",
                statement:
                  "$\\Delta L = \\tau\\Delta t$; $\\Delta L = I\\Delta\\omega$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Change in angular momentum $\\Delta L = \\tau\\Delta t = 50 \\times 0.40 = 20$ kg m$^2$ s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta\\omega = \\Delta L/I = 20/2.0$.",
                working: "\\Delta\\omega = 20/2.0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\Delta\\omega = 10$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta\\omega = 10$ rad s⁻¹",
            commonErrors: [
              "Using $\\tau = I\\alpha$ with $\\alpha = \\Delta\\omega/t$ inconsistently — angular impulse is cleaner.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A disc of moment of inertia 0.80 kg m$^2$ spins at 25 rad s$^{-1}$. A braking torque of 16 N m acts opposite to the rotation for 0.50 s.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the change in angular momentum produced by the torque.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the final angular velocity of the disc.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "kg m^2 s^-1", tolerance: 0.01 },
              { label: "b", answer: 15, unit: "rad s^-1", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular impulse",
                statement:
                  "$\\Delta L = \\tau\\Delta t$ reduces $L = I\\omega$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\Delta L = \\tau\\Delta t = 16 \\times 0.50 = 8.0$ kg m$^2$ s$^{-1}$ opposite to $L$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$|\\Delta L| = 8.0$ kg m$^2$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Initial $L = I\\omega = 0.80 \\times 25 = 20$ kg m$^2$ s$^{-1}$; final $L = 20 - 8.0 = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\omega_2 = L_2/I = 12/0.80$.",
                working: "\\omega_2 = 12/0.80",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\omega_2 = 15$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 8.0 kg m² s⁻¹. (b) 15 rad s⁻¹.",
            commonErrors: [
              "Adding the torque impulse instead of subtracting — braking torque opposes rotation.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A satellite in circular orbit experiences a small drag force that slowly reduces its orbital radius. Explain, using conservation of angular momentum, what happens to its orbital speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement:
                  "Drag is tangential (small torque), so $mvr$ is approximately conserved.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drag acts opposite to motion — a small torque that slowly removes energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drag has a negligible moment arm about the centre compared with gravity, so $mvr$ stays approximately constant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "As radius $r$ decreases, $v$ must increase to keep $mvr$ constant.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The satellite speeds up as it spirals inward — the same effect as a planet at perihelion.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Kinetic energy actually increases; the lost orbital energy goes into heat via drag.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Smaller $r$ → larger $v$ (conservation of $mvr$); satellite speeds up while spiralling in.",
            commonErrors: [
              "Thinking drag slows the satellite down — angular momentum conservation makes it speed up.",
            ],
          },
        },
        {
          id: "physhl-u1-am-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A person of mass 60 kg stands on a rotating stool of moment of inertia 3.0 kg m$^2$, initially spinning at 1.0 rad s$^{-1}$. The person holds masses at arm's length (radius 0.80 m) and then pulls them in to radius 0.20 m.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the initial moment of inertia of the system.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the final moment of inertia of the system.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate the final angular speed.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why the rotational kinetic energy increases even though angular momentum is conserved.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angular momentum conservation",
                statement:
                  "No external torque: $I_1\\omega_1 = I_2\\omega_2$; $E_k = \\frac{1}{2}I\\omega^2$ is not conserved when $I$ changes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Person contributes $mr^2 = 60 \\times 0.80^2 = 38.4$; $I_1 = 3.0 + 38.4 = 41.4$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$I_1 = 41.4$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$I_2 = 3.0 + 60 \\times 0.20^2 = 3.0 + 2.4 = 5.4$ kg m$^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$I_2 = 5.4$ kg m$^2$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\omega_2 = I_1\\omega_1/I_2 = 41.4 \\times 1.0/5.4 = 7.67$ rad s$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\omega_2 = 7.67$ rad s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$E_k = \\frac{1}{2}L\\omega$ increases because $\\omega$ rises faster than $I$ falls.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "The person does work pulling the masses inward — internal work adds kinetic energy while $L$ stays constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 41.4 kg m². (b) 5.4 kg m². (c) 7.67 rad s⁻¹. (d) Work done pulling masses in increases KE.",
            commonErrors: [
              "Assuming KE is conserved — only angular momentum is conserved here.",
            ],
          },
        },
      ],
    },
  ],
};
