import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eph11-u4-lesson-4-1",
  code: "4-1",
  title: "Investigating Thermal Physics and Gases",
  goal: "I CAN investigate heat transfer, specific heat capacity and gas laws.",
  standards: ["Edexcel IGCSE Physics 4PH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Specific heat capacity",
      definition: "Energy needed to raise 1 kg by 1°C — c = E/(mΔT).",
    },
    {
      term: "Latent heat",
      definition: "Energy for state change at constant temperature.",
    },
    {
      term: "Pressure law",
      definition: "P/T constant for fixed mass and volume.",
    },
    {
      term: "Boyle's law",
      definition: "P×V constant for fixed mass and temperature.",
    },
  ],
  concepts: [
    {
      id: "eph11-u4-thermal",
      title: "Investigating Heat Transfer",
      skill:
        "Measure specific heat capacity and investigate conduction/convection.",
      lesson: {
        sections: [
          {
            heading: "Specific heat capacity",
            body: "**Method**: heater in liquid, thermometer, joulemeter/power supply, insulation. Measure temperature rise over fixed time — c = Pt/(mΔT). **Improvements**: lid to reduce heat loss, insulation, stir continuously, use larger temperature rise.\n\n**Heat loss**: significant error source — correct by plotting cooling curve or using two-power method. **Materials**: different liquids have different c — water high (4186 J/kg°C), metals lower.",
          },
          {
            heading: "Conduction and convection",
            body: "**Conduction**: metal bar with thermometers at intervals, heat one end — plot temp vs distance, gradient = thermal conductivity. **Convection**: observe particles in heated fluid — hot rises, cold sinks (density change).\n\n**Insulation**: compare heat loss through different materials — measure cooling rate. **Safety**: hot liquids — handle carefully, electrical heater insulation.",
          },
        ],
        keyFormulas: [
          {
            name: "Specific heat capacity",
            statement: "c = Pt/(mΔT) or E/(mΔT).",
          },
          { name: "Heat energy", statement: "E = mcΔT." },
        ],
        workedExample: {
          problem: "100g water heated by 100W for 60s rises 14°C. c?",
          solution: "c = 100×60 ÷ (0.1×14) = 4286 J/kg°C ≈ 4186.",
        },
      },
      questions: [
        {
          id: "eph11-u4-thermal-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is specific heat capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature change" },
              { id: "b", text: "Heat per kg" },
              { id: "c", text: "Heat loss rate" },
              { id: "d", text: "Energy to raise 1kg by 1°C" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SHC",
                statement: "Energy per kg per °C.",
              },
            ],
            steps: [
              {
                reasoning: "Energy to raise 1kg by 1°C.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Energy/1kg/1°C",
            commonErrors: ["Total heat confused."],
          },
        },
        {
          id: "eph11-u4-thermal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is water's high specific heat capacity important for cooking?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SHC applications",
                statement:
                  "Water absorbs lots of heat without much temp change — coolant.",
              },
            ],
            steps: [
              {
                reasoning: "High c = needs lots of energy per °C.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Water heats slowly — stable temperature.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Good coolant — car radiators, cooking.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "High c = absorbs heat without big temp change — stable coolant.",
            commonErrors: ["Heats fast assumed.", "No application."],
          },
        },
        {
          id: "eph11-u4-thermal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a SHC experiment, temperature rises 10°C in 2 min at 50W. Calculate c for 200g liquid.",
          response: {
            type: "numeric",
            parts: [{ label: "c (J/kg°C)", answer: 3000 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "SHC", statement: "c = Pt/(mΔT)." },
            ],
            steps: [
              {
                reasoning: "c = 50×120 ÷ (0.2×10) = 6000/2 = 3000 J/kg°C.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "3000 J/kg°C",
            commonErrors: ["Time in seconds forgotten.", "Mass in g not kg."],
          },
        },
        {
          id: "eph11-u4-thermal-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Measuring specific heat capacity of an unknown liquid.",
          parts: [
            { label: "a", prompt: "Describe apparatus and setup.", marks: 3 },
            {
              label: "b",
              prompt: "Describe procedure and measurements.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Identify main error and improvement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SHC experiment",
                statement: "c = Pt/(mΔT) — control heat loss.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Heater, thermometer, joulemeter, insulated container, stirrer.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Measure mass of liquid.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Heat for fixed time, record temp rise, calculate c.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Repeat, average results.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Heat loss to surroundings — insulate, lid, stir.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) heater+thermometer+insulation (b) heat+measure+calculate (c) heat loss→insulate",
            commonErrors: ["No insulation.", "No repeats."],
          },
        },
      ],
    },
    {
      id: "eph11-u4-gases",
      title: "Investigating Gas Laws",
      skill:
        "Investigate pressure, volume and temperature relationships in gases.",
      lesson: {
        sections: [
          {
            heading: "Boyle's law experiment",
            body: "**Apparatus**: gas syringe or pressure vessel with pressure gauge, pump/weights. **Method**: trap fixed mass of air, vary volume (push piston), record pressure at each volume. **Graph**: P vs 1/V = straight line through origin → P×V constant.\n\n**Pressure law**: heat gas at constant volume — pressure increases with temperature. **Combined gas law**: PV/T constant for fixed mass.",
          },
          {
            heading: "Kinetic theory link",
            body: "**Pressure** = force from particle collisions per area. **Temperature** = average KE of particles. **Volume** = space for particles to move. **Boyle's**: smaller volume → more frequent collisions → higher pressure.\n\n**Safety**: pressure vessels can explode — check for damage, don't exceed rated pressure, release slowly.",
          },
        ],
        keyFormulas: [
          { name: "Boyle's law", statement: "P₁V₁ = P₂V₂ (constant T, mass)." },
          {
            name: "Pressure law",
            statement: "P₁/T₁ = P₂/T₂ (constant V, mass).",
          },
        ],
        workedExample: {
          problem: "P₁=100kPa, V₁=200cm³. V₂=100cm³. P₂?",
          solution: "P₂ = P₁V₁/V₂ = 100×200/100 = 200 kPa.",
        },
      },
      questions: [
        {
          id: "eph11-u4-gases-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Boyle's law states P×V is constant when...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume changes" },
              { id: "b", text: "Temperature changes" },
              { id: "c", text: "Pressure changes" },
              { id: "d", text: "Mass and temperature constant" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Boyle's law",
                statement: "P×V constant for fixed mass and temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Constant mass + temperature.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Fixed mass and temperature",
            commonErrors: ["Only temperature."],
          },
        },
        {
          id: "eph11-u4-gases-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does pressure increase when gas volume decreases (Boyle's law)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kinetic theory",
                statement:
                  "Smaller volume → more frequent collisions → higher pressure.",
              },
            ],
            steps: [
              {
                reasoning: "Same particles in smaller space.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Collide with walls more often.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Greater force per area = higher pressure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "More frequent collisions in smaller volume → higher pressure.",
            commonErrors: ["Slower assumed.", "No collision link."],
          },
        },
        {
          id: "eph11-u4-gases-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Gas at 200 kPa, 300 cm³. Compressed to 150 cm³ at same temperature. New pressure?",
          response: {
            type: "numeric",
            parts: [{ label: "P₂ (kPa)", answer: 400 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Boyle's law",
                statement: "P₁V₁ = P₂V₂.",
              },
            ],
            steps: [
              {
                reasoning: "P₂ = 200×300/150 = 400 kPa.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "400 kPa",
            commonErrors: ["Inverse wrong — P×V constant."],
          },
        },
        {
          id: "eph11-u4-gases-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating Boyle's law with a gas syringe.",
          parts: [
            { label: "a", prompt: "Describe apparatus and setup.", marks: 3 },
            {
              label: "b",
              prompt: "Describe procedure and measurements.",
              marks: 3,
            },
            { label: "c", prompt: "What graph proves Boyle's law?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boyle's law experiment",
                statement: "Vary volume, measure pressure — P×V constant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Gas syringe, pressure gauge, fixed mass of air.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Seal, ensure constant temperature.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Push piston slowly, record P at each V.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Repeat, allow temperature to stabilise.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) P vs 1/V straight line through origin.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) syringe+gauge+seal (b) vary V record P (c) P vs 1/V linear",
            commonErrors: ["Temperature varies.", "Wrong graph."],
          },
        },
      ],
    },
  ],
};
