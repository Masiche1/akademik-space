import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "cial-p-u3-lesson-3-1",
  code: "3-1",
  title: "Temperature and thermal energy",
  goal: "I CAN explain temperature scales, heat transfer mechanisms and specific heat capacity.",
  standards: ["9702 17: thermal physics"],
  vocabulary: [
    { term: "Temperature", definition: "Measure of average kinetic energy of particles — °C or K." },
    { term: "Heat", definition: "Energy transferred due to temperature difference — J." },
    { term: "Specific heat capacity", definition: "Energy to raise 1 kg by 1 K — $c$ (J/kg/K)." },
    { term: "Latent heat", definition: "Energy for phase change without temperature change — $L$ (J/kg)." },
    { term: "Thermal conductivity", definition: "Rate of heat conduction through material." },
    { term: "Black body", definition: "Perfect emitter/absorber of radiation." },
  ],
  concepts: [
    {
      id: "cial-p-u3-temperature",
      title: "Temperature and heat transfer",
      skill: "Calculate heat energy and explain conduction, convection and radiation.",
      lesson: {
        sections: [
          {
            heading: "Temperature scales",
            body: "Celsius: 0°C = freezing, 100°C = boiling water. Kelvin: absolute scale — 0 K = absolute zero, $T(K) = t(°C) + 273$. Temperature measures average KE of particles; heat is energy transfer.",
          },
          {
            heading: "Heat transfer mechanisms",
            body: "Conduction: particles collide — best in solids (metals). Convection: fluid movement — requires gravity. Radiation: EM waves — needs no medium, fastest (light speed). All objects emit radiation proportional to $T^4$ (Stefan-Boltzmann).",
          },
          {
            heading: "Specific heat and latent heat",
            body: "$Q = mc\\Delta T$ for temperature change. $Q = mL$ for phase change (no temp change). Water: high $c$ (4180 J/kg/K) and high $L$ — good coolant/heat store. Metals: low $c$ — heat up quickly.",
          },
        ],
        keyFormulas: [
          { name: "Specific heat", statement: "$Q = mc\\Delta T$" },
          { name: "Latent heat", statement: "$Q = mL$" },
          { name: "Kelvin", statement: "$T = t + 273$" },
        ],
        workedExample: {
          problem: "How much energy is needed to raise 2 kg of water from 20°C to 80°C? ($c = 4180$)",
          solution: "$Q = mc\\Delta T = 2 \\times 4180 \\times 60 = 501,600\\ J \\approx 502\\ kJ$.",
        },
      },
      questions: [
        {
          id: "cial-p-u3-th-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Kelvin equivalent of 27°C?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$300\\ K$" },
              { id: "b", text: "$27\\ K$" },
              { id: "c", text: "$246\\ K$" },
              { id: "d", text: "$300°C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Kelvin", statement: "$T = t + 273$." }],
            steps: [{ reasoning: "$27 + 273 = 300\\ K$.", marks: 1, markCode: "A" }],
            finalAnswer: "$300\\ K$",
          },
        },
        {
          id: "cial-p-u3-th-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate energy to heat 1 kg of aluminium ($c = 900$) from 20°C to 100°C.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Specific heat", statement: "$Q = mc\\Delta T$." }],
            steps: [
              { reasoning: "$Q = 1 \\times 900 \\times 80$.", marks: 1, markCode: "M" },
              { reasoning: "$Q = 72,000\\ J = 72\\ kJ$.", marks: 1, markCode: "M" },
              { reasoning: "Units correct (J).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q = 72\\ kJ$",
          },
        },
        {
          id: "cial-p-u3-th-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does water have a high specific heat capacity compared to metals?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Specific heat", statement: "Strong hydrogen bonds require more energy to break." }],
            steps: [
              { reasoning: "Water molecules have hydrogen bonds.", marks: 1, markCode: "M" },
              { reasoning: "Breaking these bonds requires significant energy.", marks: 1, markCode: "M" },
              { reasoning: "Metals have delocalised electrons — weaker bonding.", marks: 1, markCode: "M" },
              { reasoning: "Hence water heats/cools slowly — good heat store.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Hydrogen bonds require more energy",
          },
        },
        {
          id: "cial-p-u3-th-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Thermal physics basics.",
          parts: [
            { label: "a", prompt: "Convert 100°C to Kelvin.", marks: 1 },
            { label: "b", prompt: "Define specific heat capacity.", marks: 2 },
            { label: "c", prompt: "Name three heat transfer mechanisms.", marks: 3 },
            { label: "d", prompt: "Why does a metal spoon feel hotter than a wooden spoon in hot soup?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Thermal", statement: "Q=mcΔT; conduction/convection/radiation." }],
            steps: [
              { part: "a", reasoning: "$373\\ K$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy to raise 1 kg by 1 K.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Units J/kg/K.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conduction, convection, radiation.", marks: 3, markCode: "A" },
              { part: "d", reasoning: "Metal conducts heat faster to hand.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Delocalised electrons carry energy.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Wood insulates — poor conductor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 373K (b) energy/kg/K (c) 3 mechanisms (d) metal conducts",
          },
        },
      ],
    },
    {
      id: "cial-p-u3-gases",
      title: "Kinetic theory and ideal gases",
      skill: "Apply ideal gas law $PV = nRT$ and explain gas behaviour.",
      lesson: {
        sections: [
          {
            heading: "Kinetic theory",
            body: "Gas particles in constant random motion; collisions elastic; negligible volume; no intermolecular forces (ideal). Temperature ∝ average KE of particles. Pressure = force per unit area from particle collisions.",
          },
          {
            heading: "Ideal gas law",
            body: "$PV = nRT$ where $P$ = pressure (Pa), $V$ = volume (m³), $n$ = moles, $T$ = temperature (K), $R = 8.31\\ J\\ K^{-1}\\ mol^{-1}$. Combined gas law: $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$.",
          },
          {
            heading: "Gas laws",
            body: "Boyle's law: $P \\propto 1/V$ (constant T). Charles's law: $V \\propto T$ (constant P). Pressure law: $P \\propto T$ (constant V). All combine into ideal gas law.",
          },
        ],
        keyFormulas: [
          { name: "Ideal gas", statement: "$PV = nRT$" },
          { name: "Combined", statement: "$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$" },
          { name: "R", statement: "$8.31\\ J\\ K^{-1}\\ mol^{-1}$" },
        ],
        workedExample: {
          problem: "A gas occupies 2 m³ at 300 K and 100 kPa. Find volume at 600 K and same pressure.",
          solution: "Charles's law: $V_2 = V_1 \\times T_2/T_1 = 2 \\times 600/300 = 4\\ m^3$.",
        },
      },
      questions: [
        {
          id: "cial-p-u3-gas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the ideal gas law $PV = nRT$ relate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pressure, volume, moles and temperature" },
              { id: "b", text: "Force, mass and acceleration" },
              { id: "c", text: "Density and velocity" },
              { id: "d", text: "Heat and work only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Ideal gas", statement: "$PV = nRT$." }],
            steps: [{ reasoning: "Relates P, V, n, T for ideal gas.", marks: 1, markCode: "A" }],
            finalAnswer: "P, V, n, T",
          },
        },
        {
          id: "cial-p-u3-gas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gas at 200 kPa, 3 m³, 300 K is compressed to 1.5 m³ at same temperature. Find new pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$ at constant T." }],
            steps: [
              { reasoning: "$P_2 = P_1V_1/V_2 = 200 \\times 3/1.5$.", marks: 1, markCode: "M" },
              { reasoning: "$P_2 = 400\\ kPa$.", marks: 1, markCode: "M" },
              { reasoning: "Pressure doubles as volume halves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P_2 = 400\\ kPa$",
          },
        },
        {
          id: "cial-p-u3-gas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gas pressure increases when temperature rises at constant volume.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Kinetic theory", statement: "Higher T → faster particles → more frequent/harder collisions." }],
            steps: [
              { reasoning: "Temperature ∝ average KE of particles.", marks: 1, markCode: "M" },
              { reasoning: "Higher T → particles move faster.", marks: 1, markCode: "M" },
              { reasoning: "More frequent and harder wall collisions.", marks: 1, markCode: "M" },
              { reasoning: "Greater force per unit area → higher pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Faster particles → more collisions → higher P",
          },
        },
        {
          id: "cial-p-u3-gas-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ideal gases.",
          parts: [
            { label: "a", prompt: "State the ideal gas law.", marks: 2 },
            { label: "b", prompt: "State Boyle's, Charles's and pressure laws.", marks: 3 },
            { label: "c", prompt: "Why can't real gases perfectly obey the ideal gas law?", marks: 2 },
            { label: "d", prompt: "A gas at 100 kPa, 2 m³, 300 K is heated to 600 K at constant pressure. Find new volume.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Gas laws", statement: "$PV=nRT$; combined gas law." }],
            steps: [
              { part: "a", reasoning: "$PV = nRT$; R = 8.31.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Boyle: P∝1/V; Charles: V∝T; Pressure: P∝T.", marks: 3, markCode: "A" },
              { part: "c", reasoning: "Real gases have intermolecular forces and finite volume.", marks: 2, markCode: "B" },
              { part: "d", reasoning: "$V_2 = V_1 \\times T_2/T_1 = 2 \\times 600/300 = 4\\ m^3$.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) PV=nRT (b) 3 laws (c) real gases deviate (d) 4 m³",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u3-thermal-notes",
      title: "Thermal physics — revision notes",
      summary: "Temperature scales, heat transfer, specific/latent heat, ideal gas law.",
      sections: [
        {
          heading: "Heat & temperature",
          body: "$Q = mc\\Delta T$; $Q = mL$; $T = t + 273$. Conduction (solids), convection (fluids), radiation (EM). Water: high c and L — good heat store.",
        },
        {
          heading: "Ideal gases",
          body: "$PV = nRT$; $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$. Boyle: P∝1/V; Charles: V∝T; Pressure: P∝T. Temperature ∝ average KE.",
        },
        {
          heading: "Exam checklist",
          body: "Use Kelvin in gas laws. For heat problems distinguish temperature change (mcΔT) from phase change (mL).",
        },
      ],
    },
  ],
};
