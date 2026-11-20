import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipup-u1-lesson-1-1",
  code: "1-1",
  title: "Mechanics: Kinematics and Dynamics",
  goal: "I CAN solve suvat problems, apply Newton's laws and analyse circular motion at Pre-U standard.",
  standards: ["Cambridge Pre-U Physics 9792", "Mechanics"],
  vocabulary: [
    {
      term: "Suvat equations",
      definition:
        "Five equations relating displacement s, initial velocity u, final velocity v, acceleration a and time t for constant acceleration.",
    },
    {
      term: "Free-body diagram",
      definition:
        "Diagram showing all forces acting on an object as vectors — essential for Newton's second law problems.",
    },
    {
      term: "Terminal velocity",
      definition:
        "Constant velocity reached when drag equals weight — zero resultant force, zero acceleration.",
    },
    {
      term: "Circular motion",
      definition:
        "Motion at constant speed along a circle — requires centripetal acceleration toward the centre.",
    },
    {
      term: "Work–energy principle",
      definition:
        "Net work done equals change in kinetic energy: W = ΔEk = ½mv² − ½mu².",
    },
    {
      term: "Impulse",
      definition:
        "Force × time = change in momentum: Ft = mv − mu; also equals area under F–t graph.",
    },
  ],
  concepts: [
    {
      id: "cipup-u1-s1-mechanics",
      title: "Kinematics, dynamics and circular motion",
      skill:
        "Apply suvat equations, resolve forces and analyse rotational motion.",
      lesson: {
        sections: [
          {
            heading: "Kinematics",
            body: "For constant acceleration, the **suvat equations** relate five variables — pick the equation containing your three knowns and one unknown: v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t; s = vt − ½at². Free fall: a = g = 9.81 m/s² downward (ignore air resistance unless stated). Projectiles split into independent horizontal (constant velocity) and vertical (constant acceleration g) components — solve separately then combine. Displacement-time graphs: gradient = velocity, area under v–t = displacement.",
          },
          {
            heading: "Newton's laws and forces",
            body: "First law: object stays at rest/uniform motion unless resultant force acts. Second law: F = ma — resolve forces into perpendicular components, find resultant, then a. Third law: forces come in equal opposite pairs on different bodies. Common forces: weight mg (down), normal reaction (perpendicular to surface), tension, friction f = μN opposing motion, drag ∝ v or v². Connected objects: same tension accelerates both — use F = (m₁+m₂)a for the system then isolate. Inclined planes: resolve mg into mg sinθ (down slope) and mg cosθ (into slope).",
          },
          {
            heading: "Circular motion and momentum",
            body: "Circular motion at constant speed has centripetal acceleration a = v²/r toward the centre — caused by resultant force F = mv²/r. Vertical circles: tension varies — minimum speed at top √(gr) for a string. Horizontal circles (conical pendulum, banked track) involve tension/normal components. **Momentum** p = mv is conserved in isolated systems — collisions: elastic (KE conserved), inelastic (KE not conserved, objects stick). Impulse Ft = Δp — safety features increase impact time to reduce force. Work done W = Fd cosθ; power P = W/t = Fv.",
          },
        ],
        keyFormulas: [
          {
            name: "Suvat",
            statement:
              "$v = u + at$; $s = ut + \\frac{1}{2}at^2$; $v^2 = u^2 + 2as$",
          },
          {
            name: "Circular motion",
            statement: "$a = \\frac{v^2}{r}$; $F = \\frac{mv^2}{r}$",
          },
          {
            name: "Momentum and impulse",
            statement:
              "$p = mv$; $Ft = \\Delta p$; conservation in isolated systems",
          },
        ],
        workedExample: {
          problem:
            "A car accelerates uniformly from 10 m/s to 25 m/s in 8 s. Find displacement.",
          solution: "s = ½(u+v)t = ½(10+25)(8) = 140 m.",
        },
      },
      questions: [
        {
          id: "cipup-u1-mech-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ball is dropped from rest. What is its velocity after 2.0 s? (g = 9.81 m/s²)",
          response: {
            type: "numeric",
            parts: [
              { label: "Velocity", answer: 19.6, tolerance: 0.05, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Free fall",
                statement: "$v = u + at$ with $u=0$, $a=g$.",
              },
            ],
            steps: [
              {
                reasoning: "v = 0 + 9.81 × 2.0 = 19.6 m/s.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "19.6 m/s",
          },
        },
        {
          id: "cipup-u1-mech-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 4.0 kg box on a rough horizontal floor is pulled by a 20 N horizontal force. The friction is 8.0 N. Calculate its acceleration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Newton's second law",
                statement: "$F_{net} = ma$; friction opposes motion.",
              },
            ],
            steps: [
              {
                reasoning: "Net force = 20 − 8.0 = 12 N.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "a = F/m = 12/4.0 = 3.0 m/s².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3.0 m/s²",
          },
        },
        {
          id: "cipup-u1-mech-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 0.50 kg mass on a string moves in a horizontal circle of radius 0.80 m at 4.0 m/s. Calculate the tension in the string.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Centripetal force",
                statement: "Horizontal circle: tension provides F = mv²/r.",
              },
            ],
            steps: [
              {
                reasoning: "Tension is the only horizontal force → T = mv²/r.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v² = 16, so mv² = 0.50 × 16 = 8.0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "T = 8.0/0.80 = 10 N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10 N",
          },
        },
        {
          id: "cipup-u1-mech-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 1200 kg car travelling at 15 m/s stops in 30 m. Calculate the average braking force.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Work–energy",
                statement: "Work done by braking = loss of KE: Fd = ½mv².",
              },
            ],
            steps: [
              {
                reasoning: "KE = ½ × 1200 × 15² = ½ × 1200 × 225 = 135 000 J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Work done = F × d = F × 30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set equal: 30F = 135 000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = 4500 N.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4500 N",
          },
        },
        {
          id: "cipup-u1-mech-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car accelerates uniformly from rest to $20\\ \\text{m s}^{-1}$ in $5.0\\ \\text{s}$. Calculate its displacement.",
          response: {
            type: "numeric",
            parts: [
              { label: "Displacement", answer: 50, tolerance: 0.5, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Suvat",
                statement: "$s = \\frac{1}{2}(u+v)t$.",
              },
            ],
            steps: [
              {
                reasoning: "$s = \\frac{1}{2}(0+20)(5.0) = 50$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50 m",
          },
        },
        {
          id: "cipup-u1-mech-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A projectile is launched horizontally. Neglecting air resistance, which component of its velocity remains constant during flight?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical component" },
              { id: "b", text: "Horizontal component" },
              { id: "c", text: "Both components" },
              { id: "d", text: "Neither component" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Projectile motion",
                statement:
                  "Horizontal and vertical motions are independent; no horizontal acceleration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "No horizontal force → horizontal velocity constant; vertical velocity changes due to g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-mech-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $5.0\\ \\text{kg}$ block slides down a smooth plane inclined at $30^\\circ$ to the horizontal. Calculate its acceleration down the plane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inclined plane",
                statement: "$mg\\sin\\theta = ma$ for a smooth slope.",
              },
            ],
            steps: [
              {
                reasoning: "Component of weight down the slope = $mg\\sin 30^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$a = g\\sin 30^\\circ = 9.81 \\times 0.5 = 4.9\\ \\text{m s}^{-2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4.9 m/s²",
          },
        },
        {
          id: "cipup-u1-mech-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $0.15\\ \\text{kg}$ ball travelling at $20\\ \\text{m s}^{-1}$ strikes a wall and rebounds at $15\\ \\text{m s}^{-1}$ in the opposite direction. The contact lasts $0.050\\ \\text{s}$. Calculate the average force exerted on the ball.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Impulse",
                statement: "$Ft = \\Delta p = m(v - u)$.",
              },
            ],
            steps: [
              {
                reasoning: "Change in velocity = $20 - (-15) = 35\\ \\text{m s}^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta p = 0.15 \\times 35 = 5.25\\ \\text{kg m s}^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$F = \\Delta p/t = 5.25/0.050 = 105\\ \\text{N}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "105 N",
          },
        },
        {
          id: "cipup-u1-mech-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An object falling through a fluid eventually reaches terminal velocity. At this point which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weight is zero" },
              { id: "b", text: "Drag equals weight" },
              { id: "c", text: "Drag is zero" },
              { id: "d", text: "Acceleration is $g$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Terminal velocity",
                statement: "Zero resultant force → drag upward equals weight downward.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At terminal velocity a = 0 → resultant force = 0 → drag = weight.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipup-u1-mech-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $2.0\\ \\text{kg}$ trolley moving at $3.0\\ \\text{m s}^{-1}$ collides with a stationary $1.0\\ \\text{kg}$ trolley. They couple together. Calculate their common velocity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Velocity", answer: 2, tolerance: 0.02, unit: "m/s" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Momentum conservation",
                statement: "$m_1u_1 + m_2u_2 = (m_1+m_2)v$ for a perfectly inelastic collision.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = (2.0 \\times 3.0)/3.0 = 2.0\\ \\text{m s}^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Momentum conserved; KE is not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 m/s",
          },
        },
        {
          id: "cipup-u1-mech-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $0.20\\ \\text{kg}$ mass on a string of length $0.50\\ \\text{m}$ moves in a vertical circle with speed $4.0\\ \\text{m s}^{-1}$ at the highest point. Calculate the tension in the string at this point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Vertical circle",
                statement: "At top: $T + mg = mv^2/r$.",
              },
            ],
            steps: [
              {
                reasoning: "Both tension and weight act downward toward the centre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$mv^2/r = 0.20 \\times 16/0.50 = 6.4\\ \\text{N}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$mg = 0.20 \\times 9.81 = 1.96\\ \\text{N}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$T = 6.4 - 1.96 = 4.4\\ \\text{N}$ (accept 4.44).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ 4.4 N",
          },
        },
        {
          id: "cipup-u1-mech-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An object is dropped from rest from a height of $20\\ \\text{m}$. Calculate the time taken to reach the ground.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Free fall",
                statement: "$s = \\frac{1}{2}gt^2$ with $u = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "$20 = \\frac{1}{2}(9.81)t^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$t = \\sqrt{40/9.81} = 2.0\\ \\text{s}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 s",
          },
        },
        {
          id: "cipup-u1-mech-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A horizontal force of $50\\ \\text{N}$ pulls a crate $10\\ \\text{m}$ along the ground, but the rope makes an angle of $60^\\circ$ to the horizontal. Calculate the work done by the force.",
          response: {
            type: "numeric",
            parts: [
              { label: "Work done", answer: 250, tolerance: 2, unit: "J" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Work",
                statement: "$W = Fs\\cos\\theta$ — use the component along the displacement.",
              },
            ],
            steps: [
              {
                reasoning: "$W = 50 \\times 10 \\times \\cos 60^\\circ = 250\\ \\text{J}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only the horizontal component of the force does work.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "250 J",
          },
        },
        {
          id: "cipup-u1-mech-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An object moves with constant speed in a horizontal circle. Which statement about its acceleration is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acceleration is zero because speed is constant" },
              { id: "b", text: "Acceleration is directed away from the centre" },
              { id: "c", text: "Acceleration is directed toward the centre" },
              { id: "d", text: "Acceleration is tangential to the circle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centripetal acceleration",
                statement: "$a = v^2/r$ is always directed toward the centre.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Direction of velocity changes continuously → acceleration exists and points to the centre.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipup-u1-mech-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $10\\ \\text{N}$ horizontal force pulls a $3.0\\ \\text{kg}$ block on a smooth table, which is attached by a light inextensible string to a $2.0\\ \\text{kg}$ block. Calculate the acceleration of the system and the tension in the string.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Connected objects",
                statement: "$a = F/(m_1+m_2)$; tension from $F = m_2 a$ on the trailing mass.",
              },
            ],
            steps: [
              {
                reasoning: "$a = 10/(3.0+2.0) = 2.0\\ \\text{m s}^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tension accelerates only the $2.0\\ \\text{kg}$ block: $T = 2.0 \\times 2.0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$T = 4.0\\ \\text{N}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.0 m/s²; tension 4.0 N",
          },
        },
        {
          id: "cipup-u1-mech-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A projectile is launched at $20\\ \\text{m s}^{-1}$ at $30^\\circ$ above the horizontal. Calculate its horizontal range on level ground.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Projectile range",
                statement:
                  "$R = u^2\\sin 2\\theta/g$; or resolve components and use time of flight.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$u_x = 20\\cos 30^\\circ = 17.3\\ \\text{m s}^{-1}$; $u_y = 20\\sin 30^\\circ = 10\\ \\text{m s}^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Time of flight $= 2u_y/g = 20/9.81 = 2.04\\ \\text{s}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$R = u_x \\times t = 17.3 \\times 2.04 = 35.3\\ \\text{m}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accept $R = u^2\\sin 60^\\circ/g = 35.3\\ \\text{m}$ by the range formula.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35 m (accept 35.3 m)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipup-u1-mechanics-notes",
      title: "Mechanics — revision notes",
      summary: "Suvat, Newton's laws, circular motion, momentum.",
      sections: [
        {
          heading: "Key skills",
          body: "Draw free-body diagrams first — list every force, resolve parallel/perpendicular to motion, then apply F = ma. For suvat, identify which 3 of 5 variables you know.",
        },
        {
          heading: "Exam tips",
          body: "Circular motion: acceleration is centripetal regardless of speed being constant. Momentum problems: check if collision is elastic (KE conserved) or inelastic.",
        },
      ],
    },
  ],
};
