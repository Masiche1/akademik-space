import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "phys11-u7-lesson-7-3",
  code: "7-3",
  title: "Gravitation and Circular Orbits",
  goal: "I CAN apply Newton's law of gravitation and analyze orbital motion.",
  standards: [
    "HS-PS2-4",
    "HS-PS2-5",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Developing and Using Models",
  ],
  vocabulary: [
    {
      term: "Universal gravitation",
      definition: "Every mass attracts every other mass.",
    },
    { term: "Gravitational constant", definition: "G = 6.67×10⁻¹¹ N·m²/kg²." },
    {
      term: "Orbital velocity",
      definition: "Speed needed for circular orbit.",
    },
    {
      term: "Escape velocity",
      definition: "Speed to escape gravitational field.",
    },
    {
      term: "Inverse square law",
      definition: "Force decreases with distance squared.",
    },
    {
      term: "Weight vs mass",
      definition: "Weight = gravitational force; mass = amount of matter.",
    },
    {
      term: "Free fall orbit",
      definition: "Orbit where gravity provides centripetal force.",
    },
  ],
  concepts: [
    {
      id: "phys11-u7-gravitation",
      title: "Newton's law of gravitation",
      skill: "Apply F = Gm₁m₂/r² to gravitational problems.",
      lesson: {
        sections: [
          {
            heading: "Universal gravitation",
            body: "$$F = \\frac{Gm_1m_2}{r^2}$$\n\nEvery mass attracts every other mass. G = 6.67×10⁻¹¹ N·m²/kg².",
          },
          {
            heading: "Inverse square law",
            body: "Force decreases with distance squared: double distance → quarter force.",
          },
          {
            heading: "Weight vs mass",
            body: "- **Mass**: amount of matter (kg), constant.\n- **Weight**: gravitational force (N), varies with location.",
          },
        ],
        keyFormulas: [
          { name: "Gravitation", statement: "$F = Gm_1m_2/r^2$" },
          { name: "G", statement: "6.67×10⁻¹¹ N·m²/kg²" },
          { name: "Weight", statement: "$W = mg$" },
        ],
        workedExample: {
          problem: "Two 1000 kg masses 2 m apart. Gravitational force?",
          solution:
            "$F = (6.67×10^{-11})(1000)(1000)/(2^2) = 6.67×10^{-11}×10^6/4 = 1.67×10^{-5}$ N.",
        },
      },
      questions: [
        {
          id: "phys11-u7-grav-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Newton's law of gravitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = ma" },
              { id: "b", text: "F = Gm₁m₂/r²" },
              { id: "c", text: "F = mv" },
              { id: "d", text: "F = mg" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gravitation",
                statement: "$F = Gm_1m_2/r^2$.",
              },
            ],
            steps: [{ reasoning: "F = Gm₁m₂/r².", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** F = Gm₁m₂/r²",
            commonErrors: ["F = ma."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-grav-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "If distance doubles, what happens to gravitational force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inverse square",
                statement: "F ∝ 1/r².",
              },
            ],
            steps: [
              { reasoning: "$F \\propto 1/r^2$.", marks: 1, markCode: "R" },
              {
                reasoning: "Double r → 2² = 4 → F/4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: force becomes 1/4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Force becomes 1/4.",
            commonErrors: ["Becomes 1/2."],
            examinerNote: "R1, M1, A1.",
          },
        },
        {
          id: "phys11-u7-grav-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What's the difference between mass and weight?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass vs weight",
                statement: "Mass = matter; weight = gravitational force.",
              },
            ],
            steps: [
              {
                reasoning: "Mass: amount of matter, constant, kg.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Weight: F = mg, varies with g, Newtons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Weight changes on Moon; mass doesn't.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: mass constant, weight varies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mass = matter; weight = gravitational force.",
            commonErrors: ["Same thing."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-grav-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Earth mass 6×10²⁴ kg, radius 6.4×10⁶ m. G = 6.67×10⁻¹¹.",
          parts: [
            { label: "a", prompt: "g at surface?", marks: 4 },
            { label: "b", prompt: "Weight of 70 kg person?", marks: 2 },
            { label: "c", prompt: "Weight on Moon (g=1.6)?", marks: 2 },
            { label: "d", prompt: "Mass on Moon?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "g = GM/r²",
                statement: "Surface gravity.",
              },
            ],
            steps: [
              {
                reasoning: "$g = (6.67×10^{-11})(6×10^{24})/(6.4×10^6)^2$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$= 4×10^{14}/4.1×10^{13} \\approx 9.8$ m/s².",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: ~9.8 m/s².",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$W = 70 \\times 9.8 = 686$ N.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$W = 70 \\times 1.6 = 112$ N.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Mass still 70 kg (unchanged).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) ~9.8 (b) 686N (c) 112N (d) 70kg.",
            commonErrors: ["Mass changes on Moon."],
            examinerNote: "4+2+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-orbits",
      title: "Orbital motion",
      skill: "Analyze satellites and orbital mechanics.",
      lesson: {
        sections: [
          {
            heading: "Orbital motion",
            body: "Gravity provides centripetal force: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$\n\nSolve for orbital velocity: $v = \\sqrt{\\frac{GM}{r}}$",
          },
          {
            heading: "Escape velocity",
            body: "$v_{escape} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\times v_{orbital}$\n\nNeed √2 times orbital velocity to escape.",
          },
        ],
        keyFormulas: [
          { name: "Orbital velocity", statement: "$v = \\sqrt{GM/r}$" },
          { name: "Escape velocity", statement: "$v_e = \\sqrt{2GM/r}$" },
          { name: "Period", statement: "$T = 2\\pi\\sqrt{r^3/GM}$" },
        ],
        workedExample: {
          problem:
            "Satellite at r = 7000 km from Earth's center. Orbital velocity?",
          solution:
            "$v = \\sqrt{(6.67×10^{-11})(6×10^{24})/(7×10^6)} = \\sqrt{5.7×10^7} \\approx 7500$ m/s.",
        },
      },
      questions: [
        {
          id: "phys11-u7-orbits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What provides centripetal force for satellites?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Friction" },
              { id: "b", text: "Gravity" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Air resistance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbit",
                statement: "Gravity = centripetal force.",
              },
            ],
            steps: [
              {
                reasoning: "Gravity provides centripetal force.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Gravity",
            commonErrors: ["Friction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u7-orbits-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens to orbital velocity as orbit radius increases?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "v = √(GM/r)",
                statement: "v decreases as r increases.",
              },
            ],
            steps: [
              { reasoning: "$v = \\sqrt{GM/r}$.", marks: 1, markCode: "M" },
              { reasoning: "Larger r → smaller v.", marks: 1, markCode: "R" },
              { reasoning: "Answer: decreases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decreases — v ∝ 1/√r.",
            commonErrors: ["Increases."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "phys11-u7-orbits-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are satellites in orbit weightless?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Orbit",
                statement: "Free fall — gravity provides centripetal force.",
              },
            ],
            steps: [
              {
                reasoning: "Satellite in free fall around Earth.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Gravity provides centripetal acceleration.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "No normal force → weightless.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: free fall orbit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Free fall — gravity provides centripetal force.",
            commonErrors: ["No gravity."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-orbits-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Earth: M = 6×10²⁴ kg, R = 6.4×10⁶ m. Satellite orbit at r = 1.28×10⁷ m.",
          parts: [
            { label: "a", prompt: "Orbital velocity?", marks: 4 },
            { label: "b", prompt: "Orbital period?", marks: 3 },
            { label: "c", prompt: "Escape velocity?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Orbital mechanics",
                statement:
                  "$v = \\sqrt{GM/r}$; $T = 2\\pi\\sqrt{r^3/GM}$; $v_e = \\sqrt{2GM/r}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$v = \\sqrt{(6.67×10^{-11})(6×10^{24})/(1.28×10^7)} = \\sqrt{3.13×10^7} \\approx 5600$ m/s.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: ~5600 m/s.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$T = 2\\pi\\sqrt{(1.28×10^7)^3/(6.67×10^{-11} \\times 6×10^{24})} = 2\\pi\\sqrt{2.1×10^{21}/4×10^{14}} = 2\\pi\\sqrt{5.25×10^6} = 2\\pi \\times 2291 = 14400$ s ≈ 4 hours.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: ~4 hours.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$v_e = \\sqrt{2} \\times 5600 = 7900$ m/s.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: ~7900 m/s.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) ~5600m/s (b) ~4hr (c) ~7900m/s.",
            commonErrors: ["Wrong formulas."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u7-fields",
      title: "Gravitational fields and applications",
      skill: "Analyze gravitational fields and their effects.",
      lesson: {
        sections: [
          {
            heading: "Gravitational field",
            body: "Field strength: $g = \\frac{GM}{r^2}$\n\nField lines point toward mass (attractive).",
          },
          {
            heading: "Applications",
            body: "- Tides: differential gravity.\n- Orbital mechanics: satellites, planets.\n- Weight variation: altitude, latitude.",
          },
        ],
        keyFormulas: [
          { name: "Field strength", statement: "$g = GM/r^2$" },
          { name: "Tides", statement: "Differential gravity" },
          { name: "Weight variation", statement: "g varies with location" },
        ],
        workedExample: {
          problem: "Why do tides occur?",
          solution:
            "Moon's gravity stronger on near side → differential pull → tides.",
        },
      },
      questions: [
        {
          id: "phys11-u7-fields-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is gravitational field strength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Force per unit mass" },
              { id: "b", text: "Mass per unit volume" },
              { id: "c", text: "Energy per unit time" },
              { id: "d", text: "Velocity per unit distance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Field strength",
                statement: "g = GM/r² = force per unit mass.",
              },
            ],
            steps: [
              {
                reasoning: "Field strength = force per unit mass.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Force per unit mass",
            commonErrors: ["Mass per volume."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u7-fields-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does g vary with altitude?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "g variation",
                statement: "$g = GM/r^2$ — decreases with r.",
              },
            ],
            steps: [
              { reasoning: "$g = GM/r^2$.", marks: 1, markCode: "M" },
              {
                reasoning: "Higher altitude → larger r → smaller g.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: g decreases with altitude.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "g decreases with altitude (inverse square).",
            commonErrors: ["Constant g."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "phys11-u7-fields-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do tides occur twice daily?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tides",
                statement: "Differential gravity creates bulges.",
              },
            ],
            steps: [
              {
                reasoning: "Moon's gravity stronger on near side.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Weaker on far side → Earth 'pulled away'.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Two bulges → two high tides per day.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: differential gravity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Differential gravity — near side pulled more.",
            commonErrors: ["Uniform gravity."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u7-fields-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "g at Earth's surface = 9.8 m/s². Find g at altitude h = 2R (R = Earth radius).",
          parts: [
            { label: "a", prompt: "Formula for g?", marks: 2 },
            { label: "b", prompt: "New distance from center?", marks: 2 },
            { label: "c", prompt: "New g?", marks: 3 },
            { label: "d", prompt: "Weight change for 70 kg?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "g = GM/r²",
                statement: "Inverse square with distance.",
              },
            ],
            steps: [
              {
                reasoning: "$g = GM/r^2$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "New r = R + 2R = 3R = 3×6.4×10⁶ m.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "$g_{new} = g_{old} \\times (R/3R)^2 = 9.8/9 = 1.09$ m/s².",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: ~1.09 m/s².",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "$W = 70 \\times 1.09 = 76.3$ N (was 686 N).",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: ~76 N.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) GM/r² (b) 3R (c) 1.09 m/s² (d) 76N.",
            commonErrors: ["Linear not inverse square."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
