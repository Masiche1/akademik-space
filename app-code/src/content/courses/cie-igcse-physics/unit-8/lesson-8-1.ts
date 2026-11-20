import type { Lesson } from "../../../types.ts";

export const lessonp81: Lesson = {
  id: "ciep-u8-lesson-8-1",
  code: "8-1",
  title: "Thermal Physics",
  goal: "I CAN describe temperature, heat transfer and gas laws.",
  standards: ["0655 8.1", "0655 8.2", "0655 8.3"],
  vocabulary: [
    { term: "Temperature", definition: "Measure of average kinetic energy (°C/K)." },
    { term: "Heat", definition: "Energy transferred due to temperature difference (J)." },
    { term: "Conduction", definition: "Heat transfer through solids via particle collisions." },
    { term: "Convection", definition: "Heat transfer in fluids by circulation currents." },
    { term: "Radiation", definition: "Heat transfer by electromagnetic waves; no medium needed." },
    { term: "Specific heat capacity", definition: "Energy to raise 1 kg by 1°C (J/kg°C)." },
    { term: "Boyle's law", definition: "P ∝ 1/V at constant temperature." },
    { term: "Charles's law", definition: "V ∝ T at constant pressure." },
  ],
  concepts: [
    {
      id: "ciep-u8-heat-transfer",
      title: "Heat transfer",
      skill: "Describe conduction, convection, radiation and specific heat capacity.",
      lesson: {
        sections: [
          {
            heading: "Three methods",
            body: "| Method | Mechanism | Medium |\n|---|---|---|\n| Conduction | particle collisions | solids |\n| Convection | fluid circulation | liquids/gases |\n| Radiation | EM waves | none needed |",
          },
          {
            heading: "Specific heat capacity",
            body: "**Q = mcΔT** — energy = mass × c × temp change. Water c=4200 J/kg°C (high → good coolant/heat store).",
          },
          {
            heading: "Radiation",
            body: "Best emitters/absorbers: dull black surfaces. Worst: shiny white. Greenhouse effect: atmosphere traps IR radiation.",
          },
        ],
        keyFormulas: [
          { name: "Heat energy", statement: "$Q = mc\\Delta T$" },
          { name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$" },
          { name: "Charles's law", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$" },
        ],
        workedExample: {
          problem: "How much energy heats 2 kg water by 10°C? (c=4200)",
          solution: "Q = mcΔT = 2 × 4200 × 10 = 84,000 J.",
        },
      },
      questions: [
        {
          id: "ciep-u8-heat-transfer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which heat transfer method needs no medium?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Conduction" }, { id: "b", text: "Convection" }, { id: "c", text: "Radiation" }, { id: "d", text: "All need medium" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Radiation", statement: "EM waves — no medium." }],
            steps: [{ reasoning: "Recall.", working: "\\text{radiation}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Radiation",
            commonErrors: ["Convection needs fluid."],
          },
        },
        {
          id: "ciep-u8-heat-transfer-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the formula for heat energy transferred.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Q=mcΔT", statement: "Q = mcΔT." }],
            steps: [
              { reasoning: "Formula.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Q = mcΔT",
            commonErrors: ["Missing ΔT or using wrong variables."],
          },
        },
        {
          id: "ciep-u8-heat-transfer-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a metal spoon gets hot in hot soup but a wooden one doesn't.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Conduction", statement: "Metals conduct well; wood insulates." }],
            steps: [
              { reasoning: "Metal = good conductor.", marks: 1, markCode: "M" },
              { reasoning: "Free electrons transfer heat fast.", marks: 1, markCode: "M" },
              { reasoning: "Wood = poor conductor/insulator.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metals are good thermal conductors (free electrons transfer heat quickly), while wood is a poor conductor/insulator — so metal spoon heats up, wooden doesn't.",
            commonErrors: ["Saying 'metal absorbs more heat' — it's conduction rate."],
          },
        },
        {
          id: "ciep-u8-heat-transfer-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the three methods of heat transfer.",
          parts: [
            { label: "a", prompt: "Describe conduction.", marks: 3 },
            { label: "b", prompt: "Describe convection.", marks: 3 },
            { label: "c", prompt: "Describe radiation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Heat transfer", statement: "Conduction: particles; convection: fluids; radiation: EM waves." }],
            steps: [
              { part: "a", reasoning: "Particle collisions in solids.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Best in metals.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fluid circulation currents.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Warm rises, cool sinks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "EM waves, no medium.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Best emitters dull black.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) collisions/solids (b) circulation/fluids (c) EM waves/no medium",
            commonErrors: ["In (c) saying 'needs air' — radiation works in vacuum."],
          },
        },
      ],
    },
    {
      id: "ciep-u8-gas-laws",
      title: "Gas laws",
      skill: "Apply Boyle's and Charles's laws to gas behaviour.",
      lesson: {
        sections: [
          {
            heading: "Boyle's law",
            body: "At constant temperature: **P ∝ 1/V** → P₁V₁ = P₂V₂. Compress gas → pressure rises.",
          },
          {
            heading: "Charles's law",
            body: "At constant pressure: **V ∝ T** (absolute temp in K). Heat gas → expands.",
          },
          {
            heading: "Ideal gas",
            body: "PV = nRT. Pressure × volume = moles × gas constant × temperature.",
          },
        ],
        keyFormulas: [
          { name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$" },
          { name: "Charles's law", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$" },
        ],
        workedExample: {
          problem: "Gas at 200 cm³, 100 kPa compressed to 100 cm³. Find new pressure (constant T).",
          solution: "P₂ = P₁V₁/V₂ = 100×200/100 = 200 kPa.",
        },
      },
      questions: [
        {
          id: "ciep-u8-gas-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Boyle's law state?",
          response: { type: "mcq", choices: [
            { id: "a", text: "P ∝ V" }, { id: "b", text: "P ∝ 1/V" }, { id: "c", text: "V ∝ T" }, { id: "d", text: "P ∝ T" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Boyle's", statement: "P ∝ 1/V at constant T." }],
            steps: [{ reasoning: "Recall.", working: "P \\propto \\frac{1}{V}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** P ∝ 1/V",
            commonErrors: ["Confusing with Charles's law."],
          },
        },
        {
          id: "ciep-u8-gas-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Charles's law.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Charles's", statement: "V ∝ T at constant P." }],
            steps: [
              { reasoning: "State law.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At constant pressure, volume is proportional to absolute temperature (V ∝ T).",
            commonErrors: ["Using °C — must use Kelvin."],
          },
        },
        {
          id: "ciep-u8-gas-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gas at 300 cm³, 100 kPa is compressed to 150 cm³ at constant temperature. Calculate new pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Boyle's", statement: "P₁V₁=P₂V₂." }],
            steps: [
              { reasoning: "P₂ = P₁V₁/V₂.", working: "P_2 = \\frac{100 \\times 300}{150}", marks: 1, markCode: "M" },
              { reasoning: "= 200 kPa.", marks: 1, markCode: "A" },
              { reasoning: "State with units.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "200 kPa",
            commonErrors: ["Halving pressure — should double (volume halved)."],
          },
        },
        {
          id: "ciep-u8-gas-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain gas behaviour using the kinetic particle model.",
          parts: [
            { label: "a", prompt: "Explain Boyle's law with particles.", marks: 4 },
            { label: "b", prompt: "Explain Charles's law with particles.", marks: 3 },
            { label: "c", prompt: "State what happens to pressure when temperature rises.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gas laws", statement: "Smaller V→more collisions→higher P; higher T→faster particles→higher P." }],
            steps: [
              { part: "a", reasoning: "Compress → same particles in less space.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More frequent wall collisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Higher pressure.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heat → faster particles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "More force per collision + faster.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand if P constant.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pressure increases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reason: faster particles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) less space→more collisions→higher P (b) faster→expand (c) P rises with T",
            commonErrors: ["In (b) saying particles 'expand' — they move faster."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u8-thermal-notes",
      title: "Thermal physics — revision notes",
      summary: "Conduction/convection/radiation, Q=mcΔT, Boyle's and Charles's laws.",
      sections: [
        {
          heading: "Key facts",
          body: "Conduction: solids/collisions; convection: fluids/currents; radiation: EM waves/no medium. Q=mcΔT. Boyle: P∝1/V; Charles: V∝T (K). Pressure rises with temperature.",
        },
        {
          heading: "Exam technique",
          body: "- Charles's law needs Kelvin not °C.\n- Dull black = best radiator/absorber.",
        },
      ],
    },
  ],
};
