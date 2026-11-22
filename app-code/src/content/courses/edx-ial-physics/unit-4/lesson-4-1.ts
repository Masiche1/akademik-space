import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edialphys-u4-lesson-4-1",
  code: "4-1",
  title: "Gravitational and Electric Fields",
  goal: "I CAN describe gravitational and electric fields, field strength and potential.",
  standards: ["WPH14 Further Mechanics, Fields and Particles", "Fields"],
  vocabulary: [
    {
      term: "Field",
      definition: "Region where a force acts on a mass/charge without contact.",
    },
    {
      term: "Field strength",
      definition:
        "Force per unit mass (gravitational) or per unit charge (electric).",
    },
    {
      term: "Field lines",
      definition: "Arrows showing direction of force; density shows strength.",
    },
    {
      term: "Equipotential",
      definition:
        "Surface where potential is constant — no work done moving along it.",
    },
  ],
  concepts: [
    {
      id: "edialphys-u4-gravity",
      title: "Gravitational fields",
      skill:
        "Describe gravitational field strength, orbital motion and escape velocity.",
      lesson: {
        sections: [
          {
            heading: "Gravitational field",
            body: "g = GM/r² — field strength decreases with distance squared. Near Earth's surface g ≈ 9.81 N/kg ≈ 9.81 m/s². Field lines point toward mass. Work done moving mass in field = mgh (uniform) or involves potential energy change.",
          },
          {
            heading: "Orbital motion",
            body: "Satellite in orbit: gravity provides centripetal force. v² = GM/r for circular orbit. Orbital period T² = 4π²r³/GM (Kepler's third law). Geostationary orbit: period = 24 h, fixed position above equator — used for communications.",
          },
          {
            heading: "Escape velocity",
            body: "Minimum speed to escape gravitational pull entirely: v = √(2GM/r). Earth: ~11.2 km/s. Independent of direction — must be achieved regardless of launch angle.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "g = GM/r²" },
          { name: "Key formula", statement: "v_orbit² = GM/r" },
          { name: "Key formula", statement: "v_escape = √(2GM/r)" },
        ],
        workedExample: {
          problem:
            "Calculate g at Earth's surface using M = 6×10²⁴ kg, r = 6.4×10⁶ m, G = 6.67×10⁻¹¹.",
          solution:
            "g = (6.67×10⁻¹¹ × 6×10²⁴)/(6.4×10⁶)² = 4×10¹⁴/4.1×10¹³ ≈ 9.8 N/kg.",
        },
      },
      questions: [
        {
          id: "edialphys-grav-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Earth's gravitational field strength near surface?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.81 J/kg" },
              { id: "b", text: "9.81 m/s" },
              { id: "c", text: "9.81 N/kg" },
              { id: "d", text: "9.81 Pa" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "g",
                statement: "9.81 N/kg ≈ 9.81 m/s².",
              },
            ],
            steps: [
              {
                reasoning: "Field strength = force per mass.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 9.81 N/kg",
          },
        },
        {
          id: "edialphys-grav-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how gravity keeps a satellite in orbit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Orbit",
                statement: "Gravity = centripetal force.",
              },
            ],
            steps: [
              {
                reasoning: "Satellite moving forward at constant speed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gravity pulls toward Earth centre → acts as centripetal force.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Perfect balance: falls toward Earth but misses → orbit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gravity provides centripetal force",
            commonErrors: ["Saying no gravity in space."],
          },
        },
        {
          id: "edialphys-grav-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State two factors affecting escape velocity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Escape velocity",
                statement: "v = √(2GM/r).",
              },
            ],
            steps: [
              {
                reasoning: "Mass of planet — larger M → higher v_escape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Radius of planet — larger r → lower v_escape.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "v = √(2GM/r).", marks: 1, markCode: "A" },
              {
                reasoning: "Independent of projectile mass/direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Planet mass ↑ → v↑; planet radius ↑ → v↓",
            commonErrors: ["Saying it depends on launch mass."],
          },
        },
        {
          id: "edialphys-grav-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the gravitational field around a planet.",
          parts: [
            { label: "a", prompt: "Field strength variation.", marks: 3 },
            { label: "b", prompt: "Orbital motion.", marks: 4 },
            { label: "c", prompt: "Escape velocity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gravitational field",
                statement: "g = GM/r².",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "g = GM/r² — inverse square law.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Decreases with distance from centre.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Near surface ~9.81 N/kg.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Satellite: gravity = centripetal force.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "v² = GM/r for circular orbit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Higher orbit → slower speed, longer period.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Geostationary: T = 24h above equator.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "v_escape = √(2GM/r).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Earth: ~11.2 km/s.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Must reach to escape completely.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "g=GM/r²; orbits; escape = √(2GM/r)",
            commonErrors: ["Linear field fall-off."],
          },
        },
      ],
    },
    {
      id: "edialphys-u4-electric",
      title: "Electric fields and potential",
      skill:
        "Describe electric field strength, field lines and potential difference.",
      lesson: {
        sections: [
          {
            heading: "Electric field",
            body: "E = F/q = kq/r² (point charge). Field lines radiate from + to −. Uniform field between parallel plates: E = V/d. Field strength decreases with distance squared from point charge.",
          },
          {
            heading: "Potential and potential difference",
            body: "Electric potential V = work done per unit charge. Potential difference ΔV = energy per charge. For point charge: V = kq/r. Equipotential surfaces: no work moving along them. Field lines perpendicular to equipotentials.",
          },
          {
            heading: "Capacitors",
            body: "Store charge: Q = CV. Capacitance C in farads. Parallel plate: C = ε₀A/d. Energy stored = ½CV². Used in electronics, power supplies, camera flashes.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "E = F/q = kq/r²" },
          { name: "Key formula", statement: "V = kq/r" },
          { name: "Key formula", statement: "Q = CV" },
          { name: "Key formula", statement: "E = V/d" },
        ],
        workedExample: {
          problem:
            "A point charge q = 2 μC is 0.1 m away. Calculate field strength (k = 9×10⁹).",
          solution: "E = kq/r² = 9×10⁹ × 2×10⁻⁶ / 0.01 = 1.8×10⁶ N/C.",
        },
      },
      questions: [
        {
          id: "edialphys-elec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is electric field strength?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Charge per unit volume" },
              { id: "b", text: "Force per unit charge" },
              { id: "c", text: "Energy per unit charge" },
              { id: "d", text: "Force per unit mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "E field", statement: "E = F/q." },
            ],
            steps: [
              { reasoning: "Force per unit charge.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Force per unit charge",
          },
        },
        {
          id: "edialphys-elec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the direction of electric field lines around a positive charge.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Field lines",
                statement: "Radiate outward from + charge.",
              },
            ],
            steps: [
              {
                reasoning: "Field lines radiate outward from positive charge.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Toward negative charge.", marks: 1, markCode: "M" },
              {
                reasoning: "Density shows strength — closer = stronger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Radiate outward from + charge",
            commonErrors: ["Toward positive charge."],
          },
        },
        {
          id: "edialphys-elec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what an equipotential surface is and its relationship to field lines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equipotential",
                statement: "Constant potential surface.",
              },
            ],
            steps: [
              {
                reasoning: "Surface where potential is constant everywhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No work done moving charge along it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Field lines perpendicular to equipotentials.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Closer spacing = stronger field.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Constant V; perpendicular to field lines",
            commonErrors: ["Saying field lines parallel to equipotentials."],
          },
        },
        {
          id: "edialphys-elec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the electric field between two parallel plates.",
          parts: [
            { label: "a", prompt: "Field uniformity.", marks: 3 },
            { label: "b", prompt: "Field strength and potential.", marks: 4 },
            { label: "c", prompt: "Effect of plate separation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Parallel plates",
                statement: "Uniform field E = V/d.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Uniform field between large plates (ignore edge effects).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Field lines straight, parallel, evenly spaced.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Direction + to −.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "E = V/d — field strength = p.d./separation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "V = Ed — potential difference = field × distance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Equipotentials parallel to plates.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Potential decreases linearly from + to −.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Decrease d → E increases (V constant).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Decrease d → field lines closer → stronger.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Used in oscilloscopes, CRTs.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Uniform field E = V/d between plates",
            commonErrors: ["Field varies with distance."],
          },
        },
      ],
    },
  ],
};
