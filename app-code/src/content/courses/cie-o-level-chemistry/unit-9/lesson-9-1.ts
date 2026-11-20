import type { Lesson } from "../../../types.ts";

export const lesson191: Lesson = {
  id: "olchem-u9-lesson-9-1",
  code: "9-1",
  title: "Air and Water",
  goal: "I CAN describe the composition of air, water pollution and water treatment.",
  standards: ["5070 9.1", "5070 9.2", "5070 9.3"],
  vocabulary: [
    { term: "Air composition", definition: "~78% N₂, ~21% O₂, ~1% argon, ~0.04% CO₂, variable water vapour." },
    { term: "Greenhouse effect", definition: "Greenhouse gases trap heat → global warming." },
    { term: "Carbon footprint", definition: "Total CO₂-equivalent emissions caused by an activity." },
    { term: "Sulphur dioxide", definition: "SO₂ from burning sulphur-containing fuels → acid rain." },
    { term: "Hard water", definition: "Water containing dissolved Ca²⁺/Mg²⁺ ions (hydrogencarbonates/sulphates)." },
    { term: "Temporary hardness", definition: "Caused by Ca(HCO₃)₂; removed by boiling." },
    { term: "Permanent hardness", definition: "Caused by CaSO₄; needs ion exchange/resin." },
    { term: "Water treatment", definition: "Coagulation, filtration, chlorination to make water safe." },
  ],
  concepts: [
    {
      id: "olchem-u9-air",
      title: "Composition of air and pollution",
      skill: "Describe air composition and the effects of major pollutants.",
      lesson: {
        sections: [
          {
            heading: "Composition of air",
            body: "Nitrogen ~78%, oxygen ~21%, argon ~1%, carbon dioxide ~0.04%, water vapour variable. Tests: glowing splint → O₂ (relights), limewater → CO₂ (milky), hot copper → O₂ (black CuO).",
          },
          {
            heading: "Air pollution",
            body: "| Pollutant | Source | Effect |\n|---|---|---|\n| CO₂ | burning fossil fuels | greenhouse effect |\n| SO₂ | sulphur in fuels | acid rain |\n| NOₓ | high-temp combustion (engines) | acid rain, smog |\n| CO | incomplete combustion | toxic gas |\n| Particulates | soot, dust | respiratory damage |",
          },
          {
            heading: "Reducing pollution",
            body: "Catalytic converters (CO/NOₓ→less harmful), low-sulphur fuels, scrubbers, renewable energy, carbon capture.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does burning coal cause acid rain?",
          solution: "Coal contains sulphur → SO₂ released → reacts with water vapour → sulphuric acid → falls as acid rain (pH<5.6).",
        },
      },
      questions: [
        {
          id: "olchem-u9-air-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of air is approximately nitrogen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "21%" }, { id: "b", text: "78%" }, { id: "c", text: "1%" }, { id: "d", text: "50%" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Air composition", statement: "N₂ ~78%, O₂ ~21%." }],
            steps: [{ reasoning: "Recall.", working: "N_2 = 78\\%", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 78%",
            commonErrors: ["Confusing N₂ with O₂ percentages."],
          },
        },
        {
          id: "olchem-u9-air-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the test for oxygen gas.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "O₂ test", statement: "Glowing splint relights." }],
            steps: [
              { reasoning: "Method.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A glowing splint relights in oxygen.",
            commonErrors: ["Using limewater — that's CO₂."],
          },
        },
        {
          id: "olchem-u9-air-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sulphur dioxide causes acid rain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Acid rain", statement: "SO₂ + H₂O → H₂SO₄ → pH<5.6 rain." }],
            steps: [
              { reasoning: "SO₂ released from sulphur fuels.", marks: 1, markCode: "M" },
              { reasoning: "Reacts with water vapour.", marks: 1, markCode: "M" },
              { reasoning: "Forms sulphuric acid.", marks: 1, markCode: "M" },
              { reasoning: "Falls as acid rain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂ from burning sulphur-containing fuels reacts with atmospheric water vapour to form sulphuric acid, which falls as acid rain with pH below 5.6.",
            commonErrors: ["Missing the water vapour step."],
          },
        },
        {
          id: "olchem-u9-air-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the composition of air and tests for its components.",
          parts: [
            { label: "a", prompt: "Give the main components of air.", marks: 3 },
            { label: "b", prompt: "Describe the test for oxygen.", marks: 2 },
            { label: "c", prompt: "Describe the test for carbon dioxide.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Air tests", statement: "O₂ relights splint; CO₂ milks limewater." }],
            steps: [
              { part: "a", reasoning: "N₂ ~78%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "O₂ ~21%.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ar ~1%, CO₂ ~0.04%.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Glowing splint.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Relights.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bubble through limewater.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Turns milky.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) N₂78/O₂21/Ar1/CO₂0.04 (b) splint relights (c) limewater milky",
            commonErrors: ["In (c) saying 'turns blue' — it's milky/white precipitate."],
          },
        },
      ],
    },
    {
      id: "olchem-u9-water",
      title: "Water: hardness and treatment",
      skill: "Distinguish hard/soft water, describe hardness types and water treatment.",
      lesson: {
        sections: [
          {
            heading: "Hard vs soft water",
            body: "Hard water contains dissolved **Ca²⁺/Mg²⁺**.\n- **Temporary**: Ca(HCO₃)₂ — removed by boiling (decomposes to CaCO₃).\n- **Permanent**: CaSO₄ — needs ion exchange/resin.\n\nProblems: doesn't lather with soap, scale in kettles/pipes.",
          },
          {
            heading: "Water treatment",
            body: "1. **Coagulation**: alum makes particles clump.\n2. **Sedimentation**: clumps settle.\n3. **Filtration**: removes solids.\n4. **Chlorination**: kills microbes.",
          },
          {
            heading: "Making hard water soft",
            body: "- Boiling (temporary only).\n- Ion exchange column: Na⁺/K⁺ resin swaps for Ca²⁺/Mg²⁺.\n- Adding washing soda (Na₂CO₃) precipitates CaCO₃.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does hard water not lather easily with soap?",
          solution: "Ca²⁺/Mg²⁺ ions react with soap to form scum (insoluble precipitate) instead of lather.",
        },
      },
      questions: [
        {
          id: "olchem-u9-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What ions make water hard?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Na⁺ and K⁺" }, { id: "b", text: "Ca²⁺ and Mg²⁺" }, { id: "c", text: "Cl⁻ and SO₄²⁻" }, { id: "d", text: "H⁺ and OH⁻" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Hard water", statement: "Ca²⁺/Mg²⁺ ions." }],
            steps: [{ reasoning: "Recall.", working: "Ca^{2+}, Mg^{2+}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Ca²⁺ and Mg²⁺",
            commonErrors: ["Naming the anions — it's the cations."],
          },
        },
        {
          id: "olchem-u9-water-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one difference between temporary and permanent hardness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Hardness types", statement: "Temporary: Ca(HCO₃)₂, removed by boiling. Permanent: CaSO₄, needs resin." }],
            steps: [
              { reasoning: "Temporary vs permanent cause.", marks: 1, markCode: "M" },
              { reasoning: "Different removal methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temporary hardness is caused by calcium hydrogencarbonate and removed by boiling; permanent hardness (sulphate) requires ion exchange.",
            commonErrors: ["Saying both removed by boiling."],
          },
        },
        {
          id: "olchem-u9-water-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why hard water is a problem for washing and heating.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Hard water problems", statement: "Scum with soap, scale in pipes/kettles." }],
            steps: [
              { reasoning: "Ca²⁺/Mg²⁺ react with soap → scum.", marks: 1, markCode: "M" },
              { reasoning: "Less lather → more soap needed.", marks: 1, markCode: "M" },
              { reasoning: "Heating precipitates CaCO₃ scale.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ca²⁺/Mg²⁺ form scum with soap (wasted soap, less cleaning) and precipitate as scale in kettles/pipes when heated, reducing efficiency.",
            commonErrors: ["Only mentioning one problem."],
          },
        },
        {
          id: "olchem-u9-water-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the treatment of water to make it safe to drink.",
          parts: [
            { label: "a", prompt: "Describe the four stages of treatment.", marks: 4 },
            { label: "b", prompt: "Explain why each stage is needed.", marks: 3 },
            { label: "c", prompt: "State why chlorine is added.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Water treatment", statement: "Coagulate→settle→filter→chlorinate." }],
            steps: [
              { part: "a", reasoning: "Alum coagulation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sedimentation + filtration.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Chlorination.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete stages.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Remove suspended solids.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Kill pathogens.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete reasons.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chlorine kills bacteria/microbes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Makes water safe.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) coagulate→settle→filter→chlorinate (b) remove solids, kill microbes (c) chlorine disinfects",
            commonErrors: ["In (a) missing a stage or wrong order."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u9-air-water-notes",
      title: "Air and water — revision notes",
      summary: "Air composition, pollutants, acid rain, hard/soft water, water treatment.",
      sections: [
        {
          heading: "Key facts",
          body: "Air: N₂78/O₂21/Ar1/CO₂0.04%. Pollutants: CO₂→greenhouse, SO₂/NOₓ→acid rain, CO→toxic. Hard water: Ca²⁺/Mg²⁺; temporary (boils away) vs permanent (resin). Treatment: coagulate→settle→filter→chlorinate.",
        },
        {
          heading: "Exam technique",
          body: "- Gas tests: O₂ relights splint, CO₂ milks limewater.\n- Hard water problems: scum + scale.",
        },
      ],
    },
  ],
};
