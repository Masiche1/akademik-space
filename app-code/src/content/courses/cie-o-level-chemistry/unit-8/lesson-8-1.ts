import type { Lesson } from "../../../types.ts";

export const lesson181: Lesson = {
  id: "olchem-u8-lesson-8-1",
  code: "8-1",
  title: "Metals: Properties, Extraction and Corrosion",
  goal: "I CAN describe metal properties, extraction methods and corrosion.",
  standards: ["5070 8.1", "5070 8.2", "5070 8.3"],
  vocabulary: [
    { term: "Metal", definition: "Element forming positive ions; lustrous, conducts heat/electricity, malleable." },
    { term: "Ore", definition: "Rock containing enough metal to be worth extracting." },
    { term: "Extraction", definition: "Removing metal from ore — method depends on reactivity." },
    { term: "Electrolysis", definition: "Extraction of very reactive metals (Al, Na)." },
    { term: "Blast furnace", definition: "Extracts iron from haematite using coke and limestone." },
    { term: "Alloy", definition: "Mixture of metals (or metal+non-metal) with improved properties." },
    { term: "Corrosion", definition: "Gradual destruction of metal by reaction with environment (e.g. rusting of iron)." },
    { term: "Galvanising", definition: "Coating iron/steel with zinc to prevent rusting." },
  ],
  concepts: [
    {
      id: "olchem-u8-extraction",
      title: "Metal extraction",
      skill: "Explain how extraction method depends on metal reactivity and describe the blast furnace.",
      lesson: {
        sections: [
          {
            heading: "Extraction by reactivity",
            body: "| Reactivity | Method | Examples |\n|---|---|---|\n| Very high (K–Al) | electrolysis of molten compound | Al, Na, Mg |\n| Middle (Zn–Cu) | reduction with carbon/coke | Fe, Zn, Pb, Cu |\n| Low (Cu, Ag, Au) | found native / simple heating | Au, Ag |",
          },
          {
            heading: "Blast furnace (iron)",
            body: "Haematite (Fe₂O₃) + coke (C) + limestone (CaCO₃) + hot air.\n- C + O₂ → CO₂; CO₂ + C → 2CO\n- 3CO + Fe₂O₃ → 2Fe + 3CO₂\n- CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag)",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is aluminium extracted by electrolysis but iron by carbon reduction?",
          solution: "Aluminium is very reactive — carbon can't reduce it; needs electrolysis. Iron is less reactive — carbon can reduce its oxide in the blast furnace.",
        },
      },
      questions: [
        {
          id: "olchem-u8-extraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method extracts aluminium from its ore?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Carbon reduction" }, { id: "b", text: "Electrolysis" }, { id: "c", text: "Heating alone" }, { id: "d", text: "Filtering" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Extraction", statement: "Very reactive metals need electrolysis." }],
            steps: [{ reasoning: "Recall.", working: "\\text{Al = electrolysis}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Electrolysis",
            commonErrors: ["Carbon reduction — Al too reactive for that."],
          },
        },
        {
          id: "olchem-u8-extraction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three raw materials used in the blast furnace.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Blast furnace", statement: "Iron ore, coke, limestone." }],
            steps: [
              { reasoning: "Haematite/iron ore.", marks: 1, markCode: "M" },
              { reasoning: "Coke + limestone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Iron ore (haematite), coke (carbon) and limestone.",
            commonErrors: ["Including air — it's needed but not a 'raw material' in the usual sense."],
          },
        },
        {
          id: "olchem-u8-extraction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of limestone in the blast furnace.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Limestone role", statement: "Removes silica impurities as slag." }],
            steps: [
              { reasoning: "CaCO₃ decomposes to CaO + CO₂.", marks: 1, markCode: "M" },
              { reasoning: "CaO reacts with SiO₂ → CaSiO₃ slag.", marks: 1, markCode: "M" },
              { reasoning: "Slag floats and is removed.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limestone decomposes to CaO which reacts with silica impurities to form slag (calcium silicate), removed from the furnace.",
            commonErrors: ["Saying it 'adds iron' — it's a flux removing impurities."],
          },
        },
        {
          id: "olchem-u8-extraction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the extraction of iron in the blast furnace.",
          parts: [
            { label: "a", prompt: "Name the iron ore and reducing agent.", marks: 2 },
            { label: "b", prompt: "Describe the reduction reaction.", marks: 3 },
            { label: "c", prompt: "Explain the role of limestone and hot air.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Blast furnace", statement: "Fe₂O₃ + CO → Fe; CaCO₃ removes impurities; hot air sustains combustion." }],
            steps: [
              { part: "a", reasoning: "Haematite Fe₂O₃.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Coke/CO reducing agent.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "CO reduces Fe₂O₃.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "3CO + Fe₂O₃ → 2Fe + 3CO₂.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete equation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limestone → slag removes SiO₂.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hot air burns coke → heat + CO.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "CO is the actual reductant.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fe₂O₃+coke (b) 3CO+Fe₂O₃→2Fe+3CO₂ (c) limestone→slag, air→heat+CO",
            commonErrors: ["In (b) using C directly — CO is the reductant."],
          },
        },
      ],
    },
    {
      id: "olchem-u8-corrosion",
      title: "Corrosion and alloys",
      skill: "Explain rusting, prevention methods and the properties of alloys.",
      lesson: {
        sections: [
          {
            heading: "Rusting",
            body: "Iron + oxygen + water → hydrated iron(III) oxide (rust). Needs **both O₂ and H₂O**. Faster with salts, scratches. Only iron/rust — aluminium forms protective oxide layer so doesn't rust visibly.",
          },
          {
            heading: "Prevention",
            body: "- **Barrier**: paint, oil, plastic coating.\n- **Galvanising**: zinc coating (sacrificial — Zn oxidises first).\n- **Sacrificial protection**: attach more reactive metal (Mg/Zn).\n- **Tin plating**: only works if coating intact.",
          },
          {
            heading: "Alloys",
            body: "Mixture of metals → different sized atoms disrupt lattice → harder/stronger. Steel (Fe+C) harder than pure Fe; brass (Cu+Zn); duralumin (Al+Cu+Mg).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does galvanised iron resist rusting even when scratched?",
          solution: "Zinc is more reactive than iron — it oxidises preferentially (sacrificial protection), protecting the iron underneath even at scratches.",
        },
      },
      questions: [
        {
          id: "olchem-u8-corrosion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What two conditions are needed for iron to rust?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Oxygen and water" }, { id: "b", text: "Oxygen only" }, { id: "c", text: "Water only" }, { id: "d", text: "Heat and light" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Rusting", statement: "Needs O₂ + H₂O." }],
            steps: [{ reasoning: "Recall.", working: "O_2 + H_2O", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Oxygen and water",
            commonErrors: ["Only one — both required."],
          },
        },
        {
          id: "olchem-u8-corrosion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how galvanising prevents rusting.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Galvanising", statement: "Zinc coating; Zn oxidises preferentially." }],
            steps: [
              { reasoning: "Zinc coating barrier.", marks: 1, markCode: "M" },
              { reasoning: "Zn more reactive → sacrificial.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Iron is coated with zinc; zinc is more reactive so it oxidises preferentially, protecting the iron even at scratches (sacrificial protection).",
            commonErrors: ["Saying it just 'covers' — the sacrificial aspect is key."],
          },
        },
        {
          id: "olchem-u8-corrosion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alloys are harder than pure metals.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alloys", statement: "Different sized atoms disrupt lattice → harder." }],
            steps: [
              { reasoning: "Alloy = mixture of atoms.", marks: 1, markCode: "M" },
              { reasoning: "Different sizes disrupt regular lattice.", marks: 1, markCode: "M" },
              { reasoning: "Layers can't slide easily → harder.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alloy atoms of different sizes disrupt the regular lattice, preventing layers from sliding past each other — making the material harder and stronger.",
            commonErrors: ["Saying 'more atoms = harder' — it's the lattice disruption."],
          },
        },
        {
          id: "olchem-u8-corrosion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the rusting of iron and methods to prevent it.",
          parts: [
            { label: "a", prompt: "State the conditions needed for rusting.", marks: 2 },
            { label: "b", prompt: "Write the word equation for rusting.", marks: 2 },
            { label: "c", prompt: "Describe two prevention methods.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Rusting", statement: "Fe + O₂ + H₂O → hydrated iron(III) oxide; prevent via barrier/sacrificial." }],
            steps: [
              { part: "a", reasoning: "Oxygen.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Water.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Iron + oxygen + water → rust.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hydrated iron(III) oxide.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Galvanising (zinc).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sacrificial (Mg/Zn anode).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Painting/oiling barrier.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid method.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Complete two methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) O₂+H₂O (b) Fe+O₂+H₂O→rust (c) galvanise, sacrificial, paint",
            commonErrors: ["In (c) only listing methods without explanation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u8-metals-notes",
      title: "Metals — revision notes",
      summary: "Extraction by reactivity, blast furnace, rusting, prevention, alloys.",
      sections: [
        {
          heading: "Key facts",
          body: "Very reactive (Al,Na) → electrolysis; middle (Fe,Zn) → carbon reduction; low (Au,Ag) → native. Blast furnace: Fe₂O₃+coke+limestone+air. Rust needs O₂+H₂O. Prevent: galvanise, sacrificial, paint. Alloys harder (lattice disruption).",
        },
        {
          heading: "Exam technique",
          body: "- Match extraction method to reactivity position.\n- Galvanising = sacrificial (Zn oxidises first).",
        },
      ],
    },
  ],
};
