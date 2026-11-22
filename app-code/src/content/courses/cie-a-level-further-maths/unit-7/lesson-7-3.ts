import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cialfm-u7-lesson-7-3",
  code: "7-3",
  title: "Momentum, Energy and Circular Motion",
  goal: "I CAN use conservation laws and analyse circular motion.",
  standards: ["Cambridge A Level Further Mathematics 9231 Paper 4: Mechanics"],
  vocabulary: [
    { term: "Momentum", definition: "Mass × velocity; conserved in isolated systems." },
    { term: "Impulse", definition: "Force × time = change in momentum." },
    { term: "Kinetic energy", definition: "$\\tfrac12 mv^2$; energy of motion." },
    { term: "Centripetal force", definition: "Force directed toward the centre of a circle." },
    { term: "Angular velocity", definition: "Rate of rotation, ω = v/r." },
  ],
  concepts: [
    {
      id: "cialfm-u7-s3-momentum-energy",
      title: "Conservation laws and circular motion",
      skill: "Apply momentum/energy conservation and centripetal force equations.",
      lesson: {
        sections: [
          {
            heading: "Momentum and impulse",
            body: "In the absence of external forces, total momentum is conserved — useful for collisions. Impulse $J = F\\Delta t = \\Delta p$ links force and contact time; a larger force over a shorter time gives the same impulse.",
          },
          {
            heading: "Energy and circular motion",
            body: "Kinetic energy $\\tfrac12 mv^2$ and work–energy principles handle energy problems. For circular motion at speed v and radius r, the centripetal acceleration is $v^2/r$ toward the centre; the required force is $mv^2/r$, supplied by tension, friction or gravity.",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "$p = mv$; conservation: $\\Sigma p_{\\text{before}} = \\Sigma p_{\\text{after}}$" },
          { name: "Impulse", statement: "$J = F\\Delta t = \\Delta(mv)$" },
          { name: "Centripetal", statement: "$F = \\dfrac{mv^2}{r}$" },
        ],
        workedExample: {
          problem: "A 1000 kg car rounds a bend of radius 50 m at 20 m/s. What friction force is needed to prevent skidding?",
          solution: "Friction supplies centripetal force: $F = mv^2/r = 1000 \\times 400/50 = 8000$ N.",
        },
      },
      questions: [
        {
          id: "cialfm-u7-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Momentum is defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "½mv²" },
            { id: "b", text: "mass × velocity" },
            { id: "c", text: "mass × acceleration" },
            { id: "d", text: "force × time" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Momentum", statement: "$p = mv$." }],
            steps: [{ reasoning: "p = mv.", marks: 1, markCode: "A" }],
            finalAnswer: "mass × velocity",
          },
        },
        {
          id: "cialfm-u7-me-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 2 kg object moving at 3 m/s has momentum…",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "p = mv", statement: "Multiply mass by velocity." }],
            steps: [
              { reasoning: "$p = 2 \\times 3 = 6$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6 kg m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 kg m/s",
          },
        },
        {
          id: "cialfm-u7-me-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A 1200 kg car travels at 15 m/s. Find its kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "KE = ½mv²", statement: "Apply formula." }],
            steps: [
              { reasoning: "$KE = \\tfrac12 \\times 1200 \\times 15^2$.", marks: 1, markCode: "M" },
              { reasoning: "$= 600 \\times 225 = 135000$ J.", marks: 1, markCode: "M" },
              { reasoning: "= 135 kJ.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "135 kJ",
          },
        },
        {
          id: "cialfm-u7-me-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A mass on a string of length 2 m moves in a horizontal circle at 4 m/s. Find the tension in the string (take g as negligible / string horizontal).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Centripetal", statement: "Tension supplies $mv^2/r$." }],
            steps: [
              { reasoning: "Tension is the centripetal force: $T = mv^2/r$.", marks: 1, markCode: "M" },
              { reasoning: "$T = m \\times 16/2 = 8m$.", marks: 1, markCode: "M" },
              { reasoning: "For m = 0.5 kg: $T = 4$ N.", marks: 1, markCode: "M" },
              { reasoning: "State assumption that mass is 0.5 kg.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 N (for 0.5 kg mass).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T = mv^2/r$; e.g. 4 N for 0.5 kg",
          },
        },
        {
          id: "cialfm-u7-me-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Impulse is defined as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "mass × velocity" },
            { id: "b", text: "½mv²" },
            { id: "c", text: "force × distance" },
            { id: "d", text: "force × time" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Impulse", statement: "$J = F\\Delta t = \\Delta p$." }],
            steps: [{ reasoning: "Impulse equals force multiplied by the time it acts.", marks: 1, markCode: "A" }],
            finalAnswer: "force × time",
          },
        },
        {
          id: "cialfm-u7-me-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 3 kg trolley moving at 10 m/s has kinetic energy…",
          response: { type: "numeric", parts: [{ label: "a", answer: 150 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "KE", statement: "$KE = \\tfrac12 mv^2$." }],
            steps: [
              { reasoning: "$KE = \\tfrac12 \\times 3 \\times 10^2 = 150$ J.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 150 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 J",
          },
        },
        {
          id: "cialfm-u7-me-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 2 kg ball moving at 4 m/s collides with a stationary 3 kg ball and they stick together. Find their common velocity after the collision.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1.6 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Momentum conservation", statement: "$\\Sigma p_{\\text{before}} = \\Sigma p_{\\text{after}}$." }],
            steps: [
              { reasoning: "Before: $p = 2 \\times 4 + 3 \\times 0 = 8$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "After: $8 = (2+3)v$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 8/5 = 1.6$ m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.6 m/s",
          },
        },
        {
          id: "cialfm-u7-me-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a car rounding a flat (horizontal) bend at constant speed, the centripetal force is supplied by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the normal reaction alone" },
            { id: "b", text: "gravity alone" },
            { id: "c", text: "friction between tyres and road" },
            { id: "d", text: "the engine" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Centripetal force", statement: "Identify the real force pointing to the centre." }],
            steps: [{ reasoning: "On a flat bend, friction provides the horizontal centripetal force.", marks: 1, markCode: "A" }],
            finalAnswer: "friction between tyres and road",
          },
        },
        {
          id: "cialfm-u7-me-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "A force of 600 N acts on a 0.4 kg ball for 0.05 s. Find (a) the impulse and (b) the change in velocity of the ball.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 30 },
            { label: "b", answer: 75 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Impulse", statement: "$J = F\\Delta t = \\Delta p = m\\Delta v$." }],
            steps: [
              { reasoning: "$J = 600 \\times 0.05 = 30$ Ns.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta p = 30$ kg m/s.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta v = \\Delta p/m = 30/0.4 = 75$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answers: (a) 30 Ns, (b) 75 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 Ns; (b) 75 m/s",
          },
        },
        {
          id: "cialfm-u7-me-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 900 kg car travels at 22 m/s around a bend of radius 55 m on a flat road. Find the minimum friction force needed to prevent skidding.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7920 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Centripetal", statement: "Friction $= mv^2/r$." }],
            steps: [
              { reasoning: "$F = 900 \\times 22^2/55 = 900 \\times 484/55$.", marks: 1, markCode: "M" },
              { reasoning: "$= 435600/55 = 7920$ N.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7920 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7920 N",
          },
        },
        {
          id: "cialfm-u7-me-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For a particle moving in a vertical circle at constant speed, the tension in the string is greatest…",
          response: { type: "mcq", choices: [
            { id: "a", text: "it is constant throughout" },
            { id: "b", text: "at the same height as the centre" },
            { id: "c", text: "at the lowest point" },
            { id: "d", text: "at the highest point" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Vertical circle", statement: "Tension supports weight plus centripetal force." }],
            steps: [{ reasoning: "At the bottom, tension must both support mg and supply $mv^2/r$; at the top it is least.", marks: 1, markCode: "A" }],
            finalAnswer: "at the lowest point",
          },
        },
        {
          id: "cialfm-u7-me-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "A 0.5 kg ball moving at 8 m/s strikes a vertical wall and rebounds at 6 m/s in the opposite direction. Find the impulse exerted on the ball by the wall, taking the initial direction of motion as positive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Impulse = change in momentum", statement: "$J = m(v - u)$ with sign convention." }],
            steps: [
              { reasoning: "Take initial direction as positive: $u = 8$, $v = -6$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "$J = m(v-u) = 0.5 \\times (-6 - 8) = 0.5 \\times (-14)$.", marks: 1, markCode: "M" },
              { reasoning: "$J = -7$ Ns.", marks: 1, markCode: "M" },
              { reasoning: "Negative sign means the impulse acts opposite to the initial motion.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7 Ns opposite to the initial direction of motion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$J = -7$ Ns, i.e. 7 Ns opposite to the initial motion",
          },
        },
        {
          id: "cialfm-u7-me-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The kinetic energy of a mass $m$ moving at speed $v$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$mv^2$" },
            { id: "b", text: "$mv$" },
            { id: "c", text: "$\\tfrac12 mv^2$" },
            { id: "d", text: "$\\tfrac12 mv$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Kinetic energy", statement: "$KE = \\tfrac12 mv^2$." }],
            steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\tfrac12 mv^2$",
          },
        },
        {
          id: "cialfm-u7-me-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car negotiates a banked bend of radius 30 m banked at an angle $\\theta$ where $\\tan\\theta = 0.2$. Find its speed (g = 9.8).",
          response: { type: "numeric", parts: [{ label: "a", answer: 7.67, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Banked curve", statement: "$v^2 = rg\\tan\\theta$ when no friction is needed." }],
            steps: [
              { reasoning: "$v^2 = rg\\tan\\theta = 30 \\times 9.8 \\times 0.2 = 58.8$.", marks: 1, markCode: "M" },
              { reasoning: "$v = \\sqrt{58.8} \\approx 7.67$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 7.67 m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 7.67 m/s",
          },
        },
        {
          id: "cialfm-u7-me-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The angular velocity $\\omega$ of a particle moving in a circle of radius $r$ at speed $v$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$rv$" },
            { id: "b", text: "$r/v$" },
            { id: "c", text: "$v^2/r$" },
            { id: "d", text: "$v/r$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Angular velocity", statement: "$\\omega = v/r$." }],
            steps: [{ reasoning: "Speed equals angular velocity times radius: $v = \\omega r$.", marks: 1, markCode: "A" }],
            finalAnswer: "$v/r$",
          },
        },
        {
          id: "cialfm-u7-me-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A particle of mass 0.2 kg is whirled in a vertical circle of radius 1.2 m. Find (a) the minimum possible speed at the highest point and (b) the tension when the particle is at the lowest point moving at 5 m/s (g = 9.8).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Vertical circle", statement: "At the top tension ≥ 0 requires $mv^2/r \\ge mg$; at the bottom $T - mg = mv^2/r$." }],
            steps: [
              { reasoning: "Minimum speed at top when tension = 0: $mv^2/r = mg$.", marks: 1, markCode: "M" },
              { reasoning: "$v^2 = gr = 9.8 \\times 1.2 = 11.76$, so $v \\approx 3.43$ m/s.", marks: 1, markCode: "M" },
              { reasoning: "At the bottom: $T - mg = mv^2/r = 0.2 \\times 25/1.2 \\approx 4.17$ N.", marks: 1, markCode: "M" },
              { reasoning: "$T = 0.2 \\times 9.8 + 4.17 = 1.96 + 4.17 \\approx 6.13$ N.", marks: 1, markCode: "M" },
              { reasoning: "Answers: (a) ≈ 3.43 m/s, (b) ≈ 6.13 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ≈ 3.43 m/s; (b) ≈ 6.13 N",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u7-me-notes",
      title: "Momentum, energy, circular motion — notes",
      summary: "p=mv conserved; J=FΔt; KE=½mv²; F=mv²/r.",
      sections: [
        { heading: "Laws", body: "Momentum conserved without external force; impulse = change in momentum." },
        { heading: "Circular", body: "Centripetal force $mv^2/r$ always points to the centre — identify what supplies it." },
      ],
    },
  ],
};
