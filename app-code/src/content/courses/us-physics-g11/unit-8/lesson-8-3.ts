import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "phys11-u8-lesson-8-3",
  code: "8-3",
  title: "Thermal Energy and Heat Transfer",
  goal: "I CAN analyze heat transfer mechanisms and thermal energy changes.",
  standards: [
    "HS-PS3-4",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Thermal energy",
      definition: "Total kinetic energy of particles.",
    },
    { term: "Temperature", definition: "Average kinetic energy of particles." },
    { term: "Heat", definition: "Thermal energy transfer." },
    { term: "Conduction", definition: "Heat transfer through direct contact." },
    { term: "Convection", definition: "Heat transfer through fluid movement." },
    {
      term: "Radiation",
      definition: "Heat transfer through electromagnetic waves.",
    },
    {
      term: "Specific heat",
      definition: "Energy needed to raise temperature.",
    },
  ],
  concepts: [
    {
      id: "phys11-u8-thermal",
      title: "Thermal energy and temperature",
      skill: "Distinguish thermal energy, temperature, and heat.",
      lesson: {
        sections: [
          {
            heading: "Thermal energy vs temperature vs heat",
            body: "- **Thermal energy**: total KE of all particles.\n- **Temperature**: average KE per particle.\n- **Heat**: thermal energy transfer between objects.",
          },
          {
            heading: "Heat transfer",
            body: "- **Conduction**: direct contact (metal spoon in hot soup).\n- **Convection**: fluid movement (boiling water, wind).\n- **Radiation**: electromagnetic waves (sunlight, fire).",
          },
        ],
        keyFormulas: [
          { name: "Thermal energy", statement: "Total particle KE" },
          { name: "Temperature", statement: "Average particle KE" },
          { name: "Heat", statement: "Energy transfer" },
        ],
        workedExample: {
          problem: "Why does metal feel colder than wood at same temperature?",
          solution: "Metal conducts heat away from hand faster → feels colder.",
        },
      },
      questions: [
        {
          id: "phys11-u8-thermal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the difference between thermal energy and temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "Energy = total KE; temp = average KE" },
              { id: "c", text: "Temp = total KE; energy = average" },
              { id: "d", text: "Energy is heat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermal vs temp",
                statement: "Total vs average KE.",
              },
            ],
            steps: [
              {
                reasoning: "Thermal energy = total; temperature = average.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Total vs average KE",
            commonErrors: ["Same thing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u8-thermal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the three methods of heat transfer?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Heat transfer",
                statement: "Conduction, convection, radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Conduction: direct contact.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Convection: fluid movement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Radiation: electromagnetic waves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Conduction, convection, radiation.",
            commonErrors: ["Missing one."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u8-thermal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a metal spoon feel hotter than a wooden spoon in hot soup?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conduction",
                statement: "Metal conducts heat better.",
              },
            ],
            steps: [
              {
                reasoning: "Metal is better conductor.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Transfers heat to hand faster.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Wood insulates → slower heat transfer.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: conduction rate difference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Metal conducts heat faster.",
            commonErrors: ["Metal is hotter."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u8-thermal-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare heat transfer: metal rod in flame, water boiling, sunlight on skin.",
          parts: [
            { label: "a", prompt: "Metal rod — mechanism?", marks: 2 },
            { label: "b", prompt: "Boiling water — mechanism?", marks: 2 },
            { label: "c", prompt: "Sunlight — mechanism?", marks: 2 },
            { label: "d", prompt: "Which is fastest? Why?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Heat transfer",
                statement: "Conduction, convection, radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Metal rod: conduction (direct contact).",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Boiling water: convection (fluid movement).",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Sunlight: radiation (EM waves).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Radiation fastest (no medium needed, travels at light speed).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "Conduction fastest in solids; convection in fluids.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) conduction (b) convection (c) radiation (d) radiation.",
            commonErrors: ["Wrong mechanisms."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-calorimetry",
      title: "Calorimetry and specific heat",
      skill: "Calculate heat transfer and temperature changes.",
      lesson: {
        sections: [
          {
            heading: "Specific heat",
            body: "$$Q = mc\\Delta T$$\n\nHeat needed = mass × specific heat × temperature change.",
          },
          {
            heading: "Calorimetry",
            body: "When hot object touches cold object: heat lost = heat gained.\n\n$Q_{lost} = Q_{gained}$",
          },
          {
            heading: "Specific heat values",
            body: "- Water: 4186 J/(kg·°C) — high!\n- Metal: ~500 J/(kg·°C) — low.\n- Sand: ~840 J/(kg·°C).",
          },
        ],
        keyFormulas: [
          { name: "Heat", statement: "$Q = mc\\Delta T$" },
          { name: "Calorimetry", statement: "$Q_{lost} = Q_{gained}$" },
          { name: "Specific heat", statement: "J/(kg·°C)" },
        ],
        workedExample: {
          problem: "1 kg water heated from 20°C to 80°C. Heat needed?",
          solution: "$Q = 1 \\times 4186 \\times 60 = 251160$ J ≈ 251 kJ.",
        },
      },
      questions: [
        {
          id: "phys11-u8-cal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is specific heat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy to raise temp by 1°C per kg" },
              { id: "b", text: "Total heat content" },
              { id: "c", text: "Temperature of object" },
              { id: "d", text: "Heat transfer rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Specific heat",
                statement: "Energy per kg per °C.",
              },
            ],
            steps: [
              {
                reasoning: "Specific heat = J/(kg·°C).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Energy to raise temp by 1°C per kg",
            commonErrors: ["Total heat."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u8-cal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "1 kg water heated from 20°C to 50°C. Heat needed? (c=4186)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Q = mcΔT", statement: "Q = 1×4186×30" },
            ],
            steps: [
              {
                reasoning: "$Q = 1 \\times 4186 \\times 30$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 125580 J.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ~126 kJ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "125580 J ≈ 126 kJ.",
            commonErrors: ["Wrong ΔT."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u8-cal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does water have high specific heat?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water",
                statement: "High specific heat → temperature buffer.",
              },
            ],
            steps: [
              {
                reasoning: "Water absorbs lots of heat per degree.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Temperature changes slowly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Regulates climate, cooling systems.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: high c → thermal stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High specific heat → slow temp change.",
            commonErrors: ["Low specific heat."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u8-cal-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Hot water 80°C (0.5 kg) mixed with cold water 20°C (1 kg). Final temp? (c=4186)",
          parts: [
            { label: "a", prompt: "Heat lost by hot water?", marks: 3 },
            { label: "b", prompt: "Heat gained by cold water?", marks: 3 },
            { label: "c", prompt: "Final temperature?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Calorimetry",
                statement: "$Q_{lost} = Q_{gained}$",
              },
            ],
            steps: [
              {
                reasoning: "$Q_{hot} = 0.5 \\times 4186 \\times (80 - T_f)$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$Q_{cold} = 1 \\times 4186 \\times (T_f - 20)$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Set equal: $0.5(80-T_f) = 1(T_f-20)$ → $40 - 0.5T_f = T_f - 20$ → $60 = 1.5T_f$ → $T_f = 40$°C.",
                marks: 3,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 40°C.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 0.5×4186×(80−Tf) (b) 1×4186×(Tf−20) (c) 40°C.",
            commonErrors: ["Wrong heat balance."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u8-phase",
      title: "Phase changes and latent heat",
      skill: "Analyze phase changes and latent heat.",
      lesson: {
        sections: [
          {
            heading: "Phase changes",
            body: "- **Melting/freezing**: solid ↔ liquid.\n- **Vaporization/condensation**: liquid ↔ gas.\n- **Sublimation**: solid ↔ gas.",
          },
          {
            heading: "Latent heat",
            body: "$$Q = mL$$\n\nEnergy for phase change without temperature change.\nL = latent heat (J/kg).",
          },
        ],
        keyFormulas: [
          { name: "Latent heat", statement: "$Q = mL$" },
          { name: "Melting", statement: "L_f = 334000 J/kg (water)" },
          { name: "Vaporization", statement: "L_v = 2260000 J/kg (water)" },
        ],
        workedExample: {
          problem: "1 kg ice at 0°C melts. Heat needed?",
          solution: "$Q = 1 \\times 334000 = 334000$ J.",
        },
      },
      questions: [
        {
          id: "phys11-u8-phase-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is latent heat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat for phase change" },
              { id: "b", text: "Heat for temperature change" },
              { id: "c", text: "Total heat content" },
              { id: "d", text: "Heat transfer rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Latent heat",
                statement: "Energy for phase change.",
              },
            ],
            steps: [
              {
                reasoning: "Latent heat = phase change energy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Heat for phase change",
            commonErrors: ["Temperature change."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u8-phase-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why doesn't temperature change during melting?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Phase change",
                statement: "Energy goes to breaking bonds, not KE.",
              },
            ],
            steps: [
              {
                reasoning: "Heat breaks intermolecular bonds.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "No KE increase → no temp change.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: energy used for phase change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Energy used to break bonds, not raise KE.",
            commonErrors: ["Temperature should rise."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u8-phase-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is steam burn worse than boiling water burn?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Latent heat",
                statement: "Steam releases latent heat on condensation.",
              },
            ],
            steps: [
              {
                reasoning: "Steam at 100°C same temp as boiling water.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Steam condenses → releases latent heat.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Much more energy transferred.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: latent heat release.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Steam releases latent heat on condensation.",
            commonErrors: ["Steam is hotter."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u8-phase-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ice 2 kg at −10°C heated to steam 100°C. Calculate total heat. (c_ice=2100, L_f=334000, c_water=4186, L_v=2260000)",
          parts: [
            { label: "a", prompt: "Heat ice to 0°C?", marks: 2 },
            { label: "b", prompt: "Melt ice?", marks: 2 },
            { label: "c", prompt: "Heat water to 100°C?", marks: 2 },
            { label: "d", prompt: "Vaporize water?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Phase changes",
                statement: "Q = mcΔT + mL for each stage.",
              },
            ],
            steps: [
              {
                reasoning: "$Q_1 = 2 \\times 2100 \\times 10 = 42000$ J.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$Q_2 = 2 \\times 334000 = 668000$ J.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$Q_3 = 2 \\times 4186 \\times 100 = 837200$ J.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$Q_4 = 2 \\times 2260000 = 4520000$ J.",
                marks: 3,
                markCode: "M",
                part: "d",
              },
              {
                reasoning:
                  "Total = 42000+668000+837200+4520000 = 6063200$ J ≈ 6.06 MJ.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 42kJ (b) 668kJ (c) 837kJ (d) 4520kJ; total ~6.06MJ.",
            commonErrors: ["Missing latent heat."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
  ],
};
