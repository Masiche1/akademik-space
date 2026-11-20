import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edialphys-u4-lesson-4-2",
  code: "4-2",
  title: "Momentum, Energy and Circular Motion",
  goal: "I CAN apply conservation of momentum and the impulse–momentum equation, use the work–energy theorem, and analyse circular motion including banked tracks.",
  standards: [
    "WPH14 Further Mechanics, Fields and Particles",
    "Further mechanics",
  ],
  vocabulary: [
    {
      term: "Momentum",
      definition: "Mass × velocity; a vector quantity measured in kg m/s.",
    },
    {
      term: "Impulse",
      definition: "Force × time, equal to the change in momentum.",
    },
    {
      term: "Elastic collision",
      definition: "Collision in which total kinetic energy is conserved.",
    },
    {
      term: "Centripetal force",
      definition:
        "The resultant force directed toward the centre of a circular path.",
    },
  ],
  concepts: [
    {
      id: "edialphys-u4-momentum",
      title: "Momentum and collisions",
      skill:
        "Apply p = mv, FΔt = Δp and conservation of momentum to collision problems.",
      lesson: {
        sections: [
          {
            heading: "Momentum and impulse",
            body: "Momentum p = mv (kg m/s). Newton's second law in momentum form: F = Δp/Δt, so impulse FΔt equals change in momentum. An impulse–time graph's area gives impulse; a force–time graph's area also gives impulse. For a constant force F acting for time t on mass m from rest, final momentum p = Ft and v = Ft/m.",
          },
          {
            heading: "Conservation of momentum",
            body: "In any interaction between two objects with no external force, total momentum is conserved: p_before = p_after. This applies to explosions (one object becomes two) and collisions alike. Momentum is a vector, so direction matters — use signs for opposite directions.",
          },
          {
            heading: "Collisions and energy",
            body: "In an elastic collision total kinetic energy is also conserved (billiard balls, gas molecules). In an inelastic collision some KE becomes heat, sound and deformation — maximum KE loss occurs when objects stick together (perfectly inelastic).",
          },
        ],
        keyFormulas: [
          { name: "Momentum", statement: "p = mv" },
          { name: "Impulse", statement: "FΔt = Δp" },
          {
            name: "Conservation of momentum",
            statement: "Σp_before = Σp_after",
          },
        ],
        workedExample: {
          problem:
            "A 0.50 kg trolley moving at 3.0 m/s collides with a stationary 0.25 kg trolley and they move together. Find the common velocity.",
          solution:
            "Conservation of momentum: 0.50 × 3.0 = (0.50 + 0.25)v, so v = 1.5/0.75 = 2.0 m/s.",
        },
      },
      questions: [
        {
          id: "edialphys-u4-momentum-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of momentum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kg m/s²" },
              { id: "b", text: "N s" },
              { id: "c", text: "J s" },
              { id: "d", text: "kg m/s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Momentum", statement: "p = mv." },
            ],
            steps: [
              {
                reasoning: "Momentum is mass × velocity, unit kg m/s.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** kg m/s",
            commonErrors: ["Choosing N s, which is the unit of impulse."],
          },
        },
        {
          id: "edialphys-u4-momentum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A constant force of 60 N acts on a 1.5 kg mass initially at rest for 0.40 s. Calculate the final momentum of the mass.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Momentum",
                answer: 24,
                tolerance: 0.01,
                unit: "kg m/s",
              },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Impulse", statement: "FΔt = Δp." },
            ],
            steps: [
              {
                reasoning: "Impulse = FΔt = 60 × 0.40 = 24 N s.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Δp = impulse = 24 kg m/s; initial momentum is zero.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "p = 24 kg m/s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 kg m/s",
            commonErrors: [
              "Dividing by mass — the question asks for momentum, not velocity.",
            ],
          },
        },
        {
          id: "edialphys-u4-momentum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how conservation of momentum applies to the recoil of a rifle when it fires a bullet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation of momentum",
                statement: "Σp_before = Σp_after when no external force acts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Before firing, rifle and bullet are at rest: total momentum = 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After firing, bullet momentum forwards must be balanced by rifle momentum backwards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The rifle recoils with equal and opposite momentum (Mv = mv).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Total momentum remains zero; the large rifle mass gives a small recoil velocity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Equal and opposite momenta; total momentum stays zero",
            commonErrors: ["Claiming momentum is created by the explosion."],
          },
        },
        {
          id: "edialphys-u4-momentum-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A 0.30 kg trolley moving at 4.0 m/s collides with a stationary 0.60 kg trolley. After the collision they move together at 1.33 m/s.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that the total momentum before the collision is 1.2 kg m/s.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the total kinetic energy before and after the collision and state whether the collision is elastic or inelastic.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain what happens to the kinetic energy that is lost.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Momentum and energy",
                statement:
                  "p = mv; KE = ½mv²; momentum always conserved, KE only in elastic collisions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Only the moving trolley has momentum: p = mv.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "p = 0.30 × 4.0.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "p = 1.2 kg m/s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "KE before = ½mv² = ½ × 0.30 × 4.0² = 2.4 J.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "KE after = ½ × 0.90 × 1.33² ≈ 0.80 J (accept 0.79–0.81 J).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "KE before ≠ KE after.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Collision is inelastic (objects stick together).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Lost KE ≈ 1.6 J is transferred to other energy forms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Deformation of trolleys, sound and heat in the surroundings.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Energy is conserved overall even though KE is not.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "p = 1.2 kg m/s; KE falls from 2.4 J to 0.80 J; inelastic — KE becomes heat, sound and deformation",
            commonErrors: ["Assuming KE is conserved in every collision."],
          },
        },
      ],
    },
    {
      id: "edialphys-u4-energy-motion",
      title: "Energy and circular motion",
      skill:
        "Use the work–energy theorem and analyse objects moving in a circle, including banked tracks.",
      lesson: {
        sections: [
          {
            heading: "Kinetic energy, work and power",
            body: "Translational KE = ½mv². Work done by a force W = Fs cosθ; for motion along the force W = Fs. The work–energy theorem states net work done equals change in KE: W = ΔKE. Power P = W/t = Fv for constant force. Because KE ∝ v², doubling speed quadruples KE — so braking distance roughly quadruples.",
          },
          {
            heading: "Circular motion",
            body: "An object in uniform circular motion has constant speed but changing velocity, so it accelerates toward the centre. The required centripetal force is F = mv²/r, provided by tension, friction, gravity or the normal reaction depending on the situation. No outward 'centrifugal force' acts on the object itself.",
          },
          {
            heading: "Banked tracks",
            body: "On a banked curve the horizontal component of the normal reaction alone can supply the centripetal force, so no friction is needed at the design speed: tanθ = v²/(rg). If the car is too slow it slides down the bank; too fast and it slides up.",
          },
        ],
        keyFormulas: [
          { name: "Kinetic energy", statement: "KE = ½mv²" },
          { name: "Work–energy theorem", statement: "W = ΔKE" },
          { name: "Power", statement: "P = Fv" },
          { name: "Centripetal force", statement: "F = mv²/r" },
          { name: "Banked track", statement: "tanθ = v²/(rg)" },
        ],
        workedExample: {
          problem:
            "A car of mass 900 kg travels around a bend of radius 60 m at 15 m/s. Calculate the centripetal force required.",
          solution: "F = mv²/r = 900 × 15²/60 = 900 × 225/60 = 3375 N.",
        },
      },
      questions: [
        {
          id: "edialphys-u4-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression gives the kinetic energy of a mass m moving at speed v?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mv" },
              { id: "b", text: "mv²" },
              { id: "c", text: "½mv²" },
              { id: "d", text: "2mv²" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "KE", statement: "KE = ½mv²." },
            ],
            steps: [
              {
                reasoning: "Translational kinetic energy is ½mv².",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** ½mv²",
            commonErrors: ["Omitting the factor of ½."],
          },
        },
        {
          id: "edialphys-u4-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the kinetic energy of a 1500 kg car travelling at 20 m/s.",
          response: {
            type: "numeric",
            parts: [{ label: "KE", answer: 300000, tolerance: 1, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "KE", statement: "KE = ½mv²." },
            ],
            steps: [
              {
                reasoning: "Substitute: KE = ½ × 1500 × 20².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "v² = 400; ½ × 1500 × 400.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "KE = 300 000 J = 3.0 × 10⁵ J.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3.0 × 10⁵ J",
            commonErrors: ["Using v instead of v²."],
          },
        },
        {
          id: "edialphys-u4-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use the work–energy theorem to explain why a car's braking distance increases much more than proportionally with its speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Work–energy theorem",
                statement: "Net work done = change in KE.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Braking force is roughly constant (friction), so work done = F × d.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Work done must equal KE lost = ½mv².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since KE ∝ v², doubling v quadruples the KE to be dissipated.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "With the same braking force, distance d must increase fourfold — distance ∝ v².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "d ∝ v² because KE ∝ v² and work = Fd",
            commonErrors: [
              "Claiming braking distance is proportional to speed.",
            ],
          },
        },
        {
          id: "edialphys-u4-energy-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A car travels around a horizontal bend of radius 200 m.",
          parts: [
            {
              label: "a",
              prompt:
                "The car has mass 1000 kg and speed 25 m/s. Calculate the centripetal force needed.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The bend is banked at angle θ with tanθ = v²/(rg). Calculate θ for v = 25 m/s and r = 200 m.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain how banking reduces the reliance on friction between tyres and road.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circular motion",
                statement: "F = mv²/r; tanθ = v²/(rg).",
              },
            ],
            steps: [
              { part: "a", reasoning: "F = mv²/r.", marks: 1, markCode: "M" },
              {
                part: "a",
                reasoning: "F = 1000 × 25²/200 = 1000 × 625/200.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "F = 3125 N ≈ 3.1 × 10³ N.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "tanθ = v²/(rg) = 625/(9.81 × 200) = 625/1962.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "tanθ = 0.319.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "θ = tan⁻¹(0.319) ≈ 17.7°.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Accept 17–18°.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "On a bank, the normal reaction has a horizontal component toward the centre.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "At the design speed this component alone supplies the centripetal force.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Less friction needed → safer cornering, especially when wet.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "F ≈ 3.1 × 10³ N; θ ≈ 17.7°; banking lets the normal reaction supply centripetal force",
            commonErrors: ["Using degrees inside tanθ without converting."],
          },
        },
      ],
    },
  ],
};
