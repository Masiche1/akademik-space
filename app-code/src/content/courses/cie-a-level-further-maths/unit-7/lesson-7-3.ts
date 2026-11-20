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
            { id: "a", text: "mass × velocity" }, { id: "b", text: "mass × acceleration" }, { id: "c", text: "force × time" }, { id: "d", text: "½mv²" },
          ], correctChoiceId: "a" },
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
