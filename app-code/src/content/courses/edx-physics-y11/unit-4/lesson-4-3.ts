import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "eph11-u4-lesson-4-3",
  code: "4-3",
  title: "Investigating Energy and Domestic Electricity",
  goal: "I CAN investigate energy transfers, efficiency and domestic circuits.",
  standards: ["Edexcel IGCSE Physics 4PH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Energy transfer",
      definition: "Energy changes form — e.g., electrical to heat.",
    },
    {
      term: "Efficiency",
      definition: "Useful energy out ÷ total energy in — as percentage.",
    },
    {
      term: "Kilowatt-hour",
      definition: "Unit of electrical energy — 1 kWh = 3.6 MJ.",
    },
    {
      term: "Fuse",
      definition: "Safety device — melts when current too high.",
    },
  ],
  concepts: [
    {
      id: "eph11-u4-energy",
      title: "Investigating Energy Transfers",
      skill: "Measure energy transfers and calculate efficiency.",
      lesson: {
        sections: [
          {
            heading: "Efficiency experiments",
            body: "**Method**: electric motor lifting mass — measure electrical energy in (VI×t) and useful energy out (mgh). Efficiency = useful ÷ input × 100%. **Improvements**: reduce friction, use efficient motor, minimise heat loss.\n\n**Other examples**: torch bulb (electrical → light + heat), kettle (electrical → heat in water), solar panel (light → electrical). Always some energy wasted as heat/sound.",
          },
          {
            heading: "Energy calculations",
            body: "**Electrical energy**: E = VIt (joules) or E = Pt (power × time). **Kilowatt-hour**: E = P(kW) × t(h) — used for billing. **Cost**: energy × price per kWh.\n\n**Energy stores**: kinetic, gravitational PE, elastic, thermal, chemical, nuclear. Transfers between stores — efficiency always < 100% due to dissipation.",
          },
        ],
        keyFormulas: [
          {
            name: "Efficiency",
            statement: "(useful energy out ÷ total energy in) × 100%.",
          },
          { name: "Electrical energy", statement: "E = VIt or E = Pt." },
        ],
        workedExample: {
          problem:
            "Motor uses 120J electrical, lifts 1kg through 8m. Efficiency?",
          solution: "Useful = mgh = 1×10×8 = 80J. Efficiency = 80/120 = 67%.",
        },
      },
      questions: [
        {
          id: "eph11-u4-energy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is efficiency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed" },
              { id: "b", text: "Energy lost" },
              { id: "c", text: "Useful ÷ total × 100%" },
              { id: "d", text: "Total energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Efficiency",
                statement: "Useful energy out ÷ total energy in.",
              },
            ],
            steps: [
              {
                reasoning: "Useful ÷ total × 100%.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Useful ÷ total",
            commonErrors: ["Lost energy confused."],
          },
        },
        {
          id: "eph11-u4-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can efficiency never be 100%?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy dissipation",
                statement:
                  "Some energy always lost as heat/sound — second law.",
              },
            ],
            steps: [
              {
                reasoning: "Friction, air resistance, heat losses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Energy dissipates to surroundings.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No perfectly efficient machine exists.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Energy always lost as heat/sound — can't be 100% efficient.",
            commonErrors: ["Perfect possible assumed.", "No loss link."],
          },
        },
        {
          id: "eph11-u4-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An appliance uses 2 kW for 3 hours. Calculate energy in kWh and joules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy",
                statement: "E = Pt — kWh × 3.6 = MJ.",
              },
            ],
            steps: [
              { reasoning: "E = 2 kW × 3 h = 6 kWh.", marks: 2, markCode: "M" },
              { reasoning: "6 kWh × 3.6 = 21.6 MJ.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "6 kWh = 21.6 MJ",
            commonErrors: ["Wrong conversion.", "Units mixed."],
          },
        },
        {
          id: "eph11-u4-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating efficiency of an electric motor lifting a mass.",
          parts: [
            {
              label: "a",
              prompt: "Describe apparatus and measurements.",
              marks: 3,
            },
            { label: "b", prompt: "Describe calculation method.", marks: 3 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency experiment",
                statement: "Efficiency = mgh ÷ VIt × 100%.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Motor, mass, pulley, voltmeter, ammeter, ruler.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Measure V, I, mass, height.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Useful = mgh; input = VIt; efficiency = ratio.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Repeat for reliability.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) Reduce friction, use efficient motor.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) motor+meters+measure (b) mgh/VIt (c) reduce friction/efficient motor",
            commonErrors: ["Wrong formula.", "No repeats."],
          },
        },
      ],
    },
    {
      id: "eph11-u4-domestic",
      title: "Investigating Domestic Electricity",
      skill: "Investigate domestic circuits, safety devices and energy use.",
      lesson: {
        sections: [
          {
            heading: "Domestic circuits",
            body: "**Live, neutral, earth**: live carries current, neutral returns, earth safety wire. **Fuse**: melts if current too high — protects wiring. **Circuit breaker**: switches off on fault. **Earthing**: metal case connected to earth — fault current flows to ground, trips fuse.\n\n**Appliances**: power = VI. **Kilowatt-hour**: billing unit. **Safety**: don't overload sockets, check cable insulation, use RCDs for wet areas.",
          },
          {
            heading: "Safety investigations",
            body: "**Fuse testing**: measure current rating, test with known currents — fuse blows at correct value. **Insulation testing**: check appliance resistance — should be high (megaohms). **Earth continuity**: verify earth connection — low resistance.\n\n**Energy audits**: measure appliance power, calculate running cost, suggest efficient alternatives (LED vs filament, A+++ rated).",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "P = VI — watts." },
          { name: "Cost", statement: "Energy (kWh) × price per kWh." },
        ],
        workedExample: {
          problem:
            "60W bulb runs 10h/day for 30 days. Energy? Cost at 20p/kWh?",
          solution: "Energy = 0.06kW × 300h = 18 kWh. Cost = 18 × 20p = £3.60.",
        },
      },
      questions: [
        {
          id: "eph11-u4-domestic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of the earth wire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Save energy" },
              { id: "b", text: "Increase voltage" },
              { id: "c", text: "Safety — fault current to ground" },
              { id: "d", text: "Carry current" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth wire",
                statement: "Safety — carries fault current to ground.",
              },
            ],
            steps: [
              {
                reasoning: "Safety — fault current to ground.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Safety",
            commonErrors: ["Current carrier confused — that's live."],
          },
        },
        {
          id: "eph11-u4-domestic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do fuses have different ratings?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fuse rating",
                statement:
                  "Different appliances need different protection levels.",
              },
            ],
            steps: [
              {
                reasoning: "Different appliances use different currents.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fuse melts at specific current — protects appliance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Too high = no protection; too low = nuisance blowing.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Match appliance current — protects without nuisance blowing.",
            commonErrors: ["All same assumed.", "No current link."],
          },
        },
        {
          id: "eph11-u4-domestic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 2kW kettle runs for 5 minutes. Energy used? Cost at 25p/kWh?",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy (kWh)", answer: 0.167 },
              { label: "Cost (p)", answer: 4.2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy cost",
                statement: "E = Pt — cost = kWh × price.",
              },
            ],
            steps: [
              {
                reasoning: "E = 2kW × (5/60)h = 0.167 kWh.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Cost = 0.167 × 25p = 4.2p.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "0.167 kWh, 4.2p",
            commonErrors: ["Minutes not hours.", "kW not kWh."],
          },
        },
        {
          id: "eph11-u4-domestic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Planning a home energy audit.",
          parts: [
            { label: "a", prompt: "What equipment needed?", marks: 2 },
            { label: "b", prompt: "How to measure appliance power?", marks: 3 },
            { label: "c", prompt: "How to calculate annual cost?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy audit",
                statement: "Measure power, calculate kWh × time × price.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Plug-in power meter or multimeter, appliance list.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Measure V and I or read meter display.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) P = VI or meter gives kW directly.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) kWh = P(kW) × hours used per year.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Cost = kWh × tariff.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) power meter (b) V×I or meter (c) kWh×hours×tariff",
            commonErrors: ["No meter.", "Wrong formula."],
          },
        },
      ],
    },
  ],
};
