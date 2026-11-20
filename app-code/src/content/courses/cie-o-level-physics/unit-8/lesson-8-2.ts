import type { Lesson } from "../../../types.ts";

export const lessonp82: Lesson = {
  id: "olphys-u8-lesson-8-2",
  code: "8-2",
  title: "Specific Heat Capacity",
  goal: "I CAN calculate heat energy using specific heat capacity and thermal properties.",
  standards: ["5054 8.2"],
  vocabulary: [
    { term: "Specific heat capacity (c)", definition: "Energy to raise 1 kg by 1°C (J/kg°C)." },
    { term: "Thermal capacity", definition: "Energy to raise whole object 1°C." },
    { term: "Latent heat", definition: "Energy for state change without temperature change." },
    { term: "Specific latent heat (L)", definition: "Energy per kg for state change (J/kg)." },
    { term: "Fusion", definition: "Melting — solid to liquid." },
    { term: "Vaporisation", definition: "Boiling — liquid to gas." },
    { term: "Water anomaly", definition: "Water expands when freezing — ice floats." },
    { term: "Insulation", definition: "Materials reducing heat transfer." },
  ],
  concepts: [
    {
      id: "olphys-u8-specific-heat",
      title: "Specific heat capacity calculations",
      skill: "Calculate heat energy using Q = mcΔT.",
      lesson: {
        sections: [
          {
            heading: "Specific heat capacity",
            body: "**Q = mcΔT** — energy = mass × specific heat capacity × temperature change.\n\n- c in J/kg°C; water = 4200 J/kg°C (high!)\n- Higher c → more energy needed for same ΔT\n- Water's high c: moderates climate, cooking",
          },
          {
            heading: "Latent heat",
            body: "State changes need energy **without temperature change**.\n\n- **Fusion** (melting): L_f specific latent heat of fusion\n- **Vaporisation** (boiling): L_v specific latent heat of vaporisation\n- L_v > L_f (more energy to separate completely)",
          },
          {
            heading: "Energy calculations",
            body: "Q = mcΔT for temperature change.\nQ = mL for state change.\n\nCombined problems: heat to raise temp + change state.",
          },
        ],
        keyFormulas: [
          { name: "Specific heat", statement: "$Q = mc\\Delta T$" },
          { name: "Latent heat", statement: "$Q = mL$" },
        ],
        workedExample: {
          problem: "Energy to heat 2 kg water from 20°C to 80°C? (c=4200)",
          solution: "Q = mcΔT = 2 × 4200 × 60 = 504,000 J = 504 kJ.",
        },
      },
      questions: [
        {
          id: "olphys-u8-specific-heat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is specific heat capacity?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Energy to melt 1kg" }, { id: "b", text: "Energy to raise 1kg by 1°C" }, { id: "c", text: "Heat per second" }, { id: "d", text: "Total heat stored" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "SHC", statement: "J/kg°C." }],
            steps: [{ reasoning: "Recall.", working: "\\text{J/kg°C}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Energy to raise 1 kg by 1°C",
            commonErrors: ["Confusing with latent heat."],
          },
        },
        {
          id: "olphys-u8-specific-heat-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does water have high specific heat capacity?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Water", statement: "4200 J/kg°C — moderates climate." }],
            steps: [
              { reasoning: "High c value.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water needs lots of energy to heat (4200 J/kg°C) — this moderates coastal climates and makes it useful for cooling/heating.",
            commonErrors: ["Not linking to applications."],
          },
        },
        {
          id: "olphys-u8-specific-heat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate energy to heat 0.5 kg water from 25°C to 75°C. (c=4200 J/kg°C)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "SHC", statement: "Q = mcΔT." }],
            steps: [
              { reasoning: "Q = 0.5 × 4200 × 50.", marks: 1, markCode: "M" },
              { reasoning: "= 105,000 J.", marks: 1, markCode: "M" },
              { reasoning: "= 105 kJ.", marks: 1, markCode: "A" },
              { reasoning: "Unit J/kJ.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "105 kJ",
            commonErrors: ["Wrong ΔT (75-25=50)."],
          },
        },
        {
          id: "olphys-u8-specific-heat-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain specific heat capacity and latent heat.",
          parts: [
            { label: "a", prompt: "Define SHC and formula.", marks: 3 },
            { label: "b", prompt: "Define latent heat.", marks: 3 },
            { label: "c", prompt: "Why temperature constant during boiling?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Thermal", statement: "Q=mcΔT; Q=mL; state change no temp change." }],
            steps: [
              { part: "a", reasoning: "Energy per kg per °C.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Q=mcΔT.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy for state change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Q=mL.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy breaks bonds.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Not raising KE.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) c, Q=mcΔT (b) state change energy (c) bonds not KE",
            commonErrors: ["In (c) saying 'no energy needed'."],
          },
        },
      ],
    },
    {
      id: "olphys-u8-heat-mechanisms",
      title: "Heat transfer mechanisms",
      skill: "Describe conduction, convection and radiation.",
      lesson: {
        sections: [
          {
            heading: "Conduction",
            body: "Heat transfer through solids by particle collisions.\n\n- Best in metals (free electrons)\n- Insulators: wood, plastic, air\n- Used in cooking pans, soldering",
          },
          {
            heading: "Convection",
            body: "Heat transfer in fluids by density differences.\n\n- Hot fluid rises (less dense), cold sinks\n- Convection currents\n- Used in heating systems, sea breezes",
          },
          {
            heading: "Radiation",
            body: "Heat transfer by infrared waves — no medium needed.\n\n- Best in dark, matt surfaces\n- Worst in shiny, white surfaces\n- Sun warms Earth by radiation",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are saucepans metal but handles plastic?",
          solution: "Metal conducts heat well to food; plastic insulates handle.",
        },
      },
      questions: [
        {
          id: "olphys-u8-heat-mechanisms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which mechanism transfers heat without a medium?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Conduction" }, { id: "b", text: "Convection" }, { id: "c", text: "Radiation" }, { id: "d", text: "All" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Heat transfer", statement: "Radiation needs no medium." }],
            steps: [{ reasoning: "Recall.", working: "\\text{radiation}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Radiation",
            commonErrors: ["Conduction/convection need medium."],
          },
        },
        {
          id: "olphys-u8-heat-mechanisms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are metals good conductors of heat?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Conduction", statement: "Free electrons transfer energy." }],
            steps: [
              { reasoning: "Free electrons.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metals have free electrons that rapidly transfer thermal energy through the material.",
            commonErrors: ["Saying 'dense' — it's electrons."],
          },
        },
        {
          id: "olphys-u8-heat-mechanisms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how convection currents form in a heated fluid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Convection", statement: "Density differences drive currents." }],
            steps: [
              { reasoning: "Heating → expansion → less dense.", marks: 1, markCode: "M" },
              { reasoning: "Hot rises, cold sinks.", marks: 1, markCode: "M" },
              { reasoning: "Current circulates.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heating makes fluid expand and become less dense — it rises; cooler denser fluid sinks to replace it, creating convection currents.",
            commonErrors: ["Not mentioning density change."],
          },
        },
        {
          id: "olphys-u8-heat-mechanisms-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the three heat transfer mechanisms.",
          parts: [
            { label: "a", prompt: "Conduction description.", marks: 3 },
            { label: "b", prompt: "Convection description.", marks: 3 },
            { label: "c", prompt: "Radiation description.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Heat transfer", statement: "Conduction/convection/radiation differences." }],
            steps: [
              { part: "a", reasoning: "Solids particle collisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Metals best.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fluids density currents.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hot rises cold sinks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "IR waves no medium.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dark matt best.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) conduction solids (b) convection fluids (c) radiation EM",
            commonErrors: ["In (c) saying needs air."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u8-heat-mechanisms-notes",
      title: "Thermal physics — revision notes",
      summary: "Q=mcΔT, latent heat, conduction/convection/radiation.",
      sections: [
        {
          heading: "Key facts",
          body: "Q=mcΔT; Q=mL for state change. Conduction=solids, convection=fluids, radiation=EM waves. Water c=4200.",
        },
        {
          heading: "Exam technique",
          body: "- Temperature constant during state change.\n- Metals conduct, fluids convect, all radiate.\n- Dark matt surfaces radiate best.",
        },
      ],
    },
  ],
};
