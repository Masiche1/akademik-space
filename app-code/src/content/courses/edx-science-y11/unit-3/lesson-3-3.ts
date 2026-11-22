import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "esc11-u3-lesson-3-3",
  code: "3-3",
  title: "Pressure, Density and Floating",
  goal: "I CAN calculate pressure in fluids, density and buoyancy.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Physics (Y11)"],
  vocabulary: [
    {
      term: "Hydrostatic pressure",
      definition: "Pressure in fluid increases with depth — P = ρgh.",
    },
    {
      term: "Buoyancy",
      definition:
        "Upward force on submerged object = weight of displaced fluid.",
    },
    { term: "Density", definition: "Mass per unit volume — kg/m³." },
    {
      term: "Atmospheric pressure",
      definition: "Pressure from air weight — ~101 kPa at sea level.",
    },
  ],
  concepts: [
    {
      id: "esc11-u3-pressure-fluid",
      title: "Pressure in Fluids",
      skill: "Calculate hydrostatic pressure and explain fluid behaviour.",
      lesson: {
        sections: [
          {
            heading: "Fluid pressure",
            body: "**Pressure in liquids**: P = ρgh — increases with depth (density × gravity × depth). Acts equally in all directions at a point. Deeper = more pressure — why dams thicker at bottom, why ears 'pop' diving.\n\n**Atmospheric pressure**: ~101 kPa at sea level — air weight pressing down. Decreases with altitude (less air above). Measured with barometer (mercury column ~760 mm). **Pascal's principle**: pressure applied to enclosed fluid transmitted equally — hydraulic systems multiply force (car brakes, lifts, cranes).",
          },
          {
            heading: "Density and flotation",
            body: "**Density** = mass ÷ volume (kg/m³). Object floats if density < fluid; sinks if >; neutral if =. **Buoyancy** (Archimedes): upthrust = weight of displaced fluid — explains floating, swimming, hot-air balloons.\n\n**Applications**: ships (steel hulls with air pockets reduce average density), submarines (ballast tanks change density), hydrometers (measure liquid density), life jackets (low-density foam increases buoyancy).",
          },
        ],
        keyFormulas: [
          {
            name: "Fluid pressure",
            statement: "P = ρgh — pressure increases with depth.",
          },
          {
            name: "Buoyancy",
            statement:
              "Floats if density < fluid; upthrust = displaced fluid weight.",
          },
        ],
        workedExample: {
          problem: "Calculate pressure at 10 m depth in water (ρ=1000, g=10).",
          solution: "P = 1000 × 10 × 10 = 100,000 Pa = 100 kPa.",
        },
      },
      questions: [
        {
          id: "esc11-u3-pressure-fluid-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens to pressure in a liquid as depth increases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases" },
              { id: "b", text: "Stays same" },
              { id: "c", text: "Depends on container" },
              { id: "d", text: "Decreases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "P = ρgh",
                statement: "Pressure proportional to depth.",
              },
            ],
            steps: [
              {
                reasoning: "Pressure increases with depth.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Increases",
            commonErrors: ["Constant assumed."],
          },
        },
        {
          id: "esc11-u3-pressure-fluid-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do dams have thicker bases than tops?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fluid pressure",
                statement:
                  "Pressure increases with depth — needs stronger structure.",
              },
            ],
            steps: [
              {
                reasoning: "Water pressure greatest at bottom.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Thicker base withstands higher pressure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "P = ρgh — depth increases pressure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Pressure increases with depth (P=ρgh) — thicker base resists greater force.",
            commonErrors: ["Aesthetics assumed.", "No pressure link."],
          },
        },
        {
          id: "esc11-u3-pressure-fluid-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a steel ship floats despite steel being denser than water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Buoyancy",
                statement: "Average density matters — air pockets reduce it.",
              },
            ],
            steps: [
              {
                reasoning: "Hull encloses air — low density.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Average density (steel+air) < water.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Displaces water weighing more than ship.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Buoyancy supports it — Archimedes.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Air pockets lower average density below water — displaced water weighs more than ship → floats.",
            commonErrors: ["Steel floats view.", "No displacement."],
          },
        },
        {
          id: "esc11-u3-pressure-fluid-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A submarine dives deeper and surfaces.",
          parts: [
            { label: "a", prompt: "How does it control depth?", marks: 3 },
            {
              label: "b",
              prompt: "Why does pressure increase as it descends?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate pressure at 50 m (ρ=1025, g=10).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "P = ρgh",
                statement: "Pressure ∝ depth; ballast tanks control density.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Ballast tanks flood/surface — density changes.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Denser = sink; lighter = rise.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) More water above → greater weight pressing down.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) P = ρgh increases with depth.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) P = 1025 × 10 × 50 = 512,500 Pa ≈ 513 kPa.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) ballast tanks (b) water weight above, P=ρgh (c) ~513 kPa",
            commonErrors: ["Thrust only assumed.", "Calculation wrong."],
          },
        },
      ],
    },
    {
      id: "esc11-u3-forces-context",
      title: "Forces in Context: Braking and Circular Motion",
      skill: "Describe braking forces, circular motion and orbital mechanics.",
      lesson: {
        sections: [
          {
            heading: "Braking and friction",
            body: "**Braking distance** = thinking distance + braking distance. Thinking = reaction time × speed; braking = speed² ÷ (2 × friction × g) — doubles with speed. **Friction** converts KE to heat — brake pads/discs, tyres.\n\n**Stopping factors**: speed (dominant), road surface (wet/ice reduces friction), tyres (tread, pressure), brakes (condition), vehicle mass. ABS prevents wheel lock → maintains steering control. **Air resistance** increases with speed² — significant at high speeds.",
          },
          {
            heading: "Circular motion and orbits",
            body: "**Circular motion**: needs centripetal force toward centre — gravity (orbits), tension (string), friction (car turning). Without it → object moves straight (tangent). Faster = more force needed.\n\n**Satellites**: orbit when velocity balances gravity — too slow falls, too fast escapes. Geostationary satellites stay over same point (weather, comms). **Gravitational field strength** g ≈ 9.8-10 N/kg varies with planet mass/distance. Weight = mg varies; mass constant.",
          },
        ],
        keyFormulas: [
          {
            name: "Braking distance",
            statement: "Thinking + braking; braking ∝ speed².",
          },
          {
            name: "Centripetal force",
            statement: "Force toward centre maintains circular motion.",
          },
        ],
        workedExample: {
          problem:
            "Why does braking distance increase dramatically with speed?",
          solution:
            "KE ∝ v² — double speed = 4× energy to dissipate = much longer braking.",
        },
      },
      questions: [
        {
          id: "esc11-u3-forces-context-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What two distances make up total stopping distance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reaction + skid" },
              { id: "b", text: "Brake + tyre" },
              { id: "c", text: "Speed + friction" },
              { id: "d", text: "Thinking + braking" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stopping distance",
                statement: "Thinking distance + braking distance.",
              },
            ],
            steps: [
              { reasoning: "Thinking + braking.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Thinking + braking",
            commonErrors: ["Only braking distance."],
          },
        },
        {
          id: "esc11-u3-forces-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does doubling speed roughly quadruple braking distance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kinetic energy",
                statement: "KE = ½mv² — energy to dissipate ∝ v².",
              },
            ],
            steps: [
              {
                reasoning: "KE depends on speed squared.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Double speed = 4× KE.", marks: 1, markCode: "AO2" },
              {
                reasoning: "More energy = longer braking distance.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "KE ∝ v² — double speed = 4× energy to dissipate = ~4× braking distance.",
            commonErrors: ["Linear assumed.", "No KE link."],
          },
        },
        {
          id: "esc11-u3-forces-context-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what provides the centripetal force for a car turning a corner.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Centripetal force",
                statement:
                  "Friction between tyres and road pushes car toward centre.",
              },
            ],
            steps: [
              {
                reasoning: "Tyres grip road — friction acts sideways.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Friction provides inward force.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Without it → car continues straight.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Tyre-road friction provides centripetal force — without it car goes straight.",
            commonErrors: ["Engine force assumed.", "No friction link."],
          },
        },
        {
          id: "esc11-u3-forces-context-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A satellite orbits Earth at constant speed.",
          parts: [
            { label: "a", prompt: "Why doesn't it fall to Earth?", marks: 3 },
            {
              label: "b",
              prompt: "What would happen if it moved slower?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What would happen if it moved faster?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbits",
                statement: "Gravity = centripetal; balance of speed/inertia.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Gravity pulls inward = centripetal force.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Forward velocity balances fall — continuous orbit.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Falls toward Earth but misses — curved path.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Slower → gravity wins → spirals inward/crashes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Faster → escapes gravity → leaves orbit.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Needs escape velocity to break free.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) gravity=centripetal, velocity balances (b) falls (c) escapes orbit",
            commonErrors: [
              "No gravity-velocity balance.",
              "Faster = tighter orbit assumed.",
            ],
          },
        },
      ],
    },
  ],
};
