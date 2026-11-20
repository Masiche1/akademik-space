import type { Lesson } from "../../../types.ts";

export const lesson1102: Lesson = {
  id: "ciecy-u10-lesson-10-2",
  code: "10-2",
  title: "Alkanes, Alkenes and Cracking",
  goal: "I CAN describe alkanes and alkenes, their properties and cracking.",
  standards: ["0654 10.2"],
  vocabulary: [
    { term: "Alkane", definition: "Saturated hydrocarbon CₙH₂ₙ₊₂ — single bonds only." },
    { term: "Alkene", definition: "Unsaturated hydrocarbon CₙH₂ₙ — contains C=C double bond." },
    { term: "Saturated", definition: "All single bonds — no C=C." },
    { term: "Unsaturated", definition: "Contains C=C or C≡C." },
    { term: "Cracking", definition: "Breaking long-chain hydrocarbons into shorter ones using heat/catalyst." },
    { term: "Addition reaction", definition: "Alkene + reagent → single product (e.g. +Br₂, +H₂)." },
    { term: "Bromine water test", definition: "Alkenes decolourise bromine water — test for unsaturation." },
    { term: "Fractional distillation", definition: "Separating crude oil by boiling point." },
  ],
  concepts: [
    {
      id: "ciecy-u10-alkanes-alkenes",
      title: "Alkanes and alkenes",
      skill: "Compare alkanes and alkenes properties and reactions.",
      lesson: {
        sections: [
          {
            heading: "Comparison",
            body: "| Property | Alkane | Alkene |\n|---|---|---|\n| Formula | CₙH₂ₙ₊₂ | CₙH₂ₙ |\n| Bonds | single only | C=C double |\n| Saturation | saturated | unsaturated |\n| Combustion | clean (CO₂+H₂O) | sooty (incomplete) |\n| Bromine water | no change | decolourises |\n| Addition | no | yes |",
          },
          {
            heading: "Examples",
            body: "Alkanes: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀.\nAlkenes: ethene C₂H₄, propene C₃H₆, butene C₄H₈.",
          },
          {
            heading: "Reactions",
            body: "Alkanes: substitution (with halogens, UV light).\nAlkenes: addition reactions — C₂H₄ + Br₂ → C₂H₄Br₂; C₂H₄ + H₂ → C₂H₆ (hydrogenation); C₂H₄ + H₂O → C₂H₅OH (hydration).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How would you distinguish ethane from ethene?",
          solution: "Add bromine water — ethene decolourises it (addition reaction); ethane does not.",
        },
      },
      questions: [
        {
          id: "ciecy-u10-alkanes-alkenes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of alkenes?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CₙH₂ₙ₊₂" }, { id: "b", text: "CₙH₂ₙ" }, { id: "c", text: "CₙHₙ" }, { id: "d", text: "CₙH₂ₙ₋₂" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Alkenes", statement: "CₙH₂ₙ." }],
            steps: [{ reasoning: "Recall.", working: "C_nH_{2n}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CₙH₂ₙ",
            commonErrors: ["CₙH₂ₙ₊₂ is alkanes."],
          },
        },
        {
          id: "ciecy-u10-alkanes-alkenes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What test distinguishes alkenes from alkanes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bromine test", statement: "Alkenes decolourise bromine water." }],
            steps: [
              { reasoning: "Bromine water test.", marks: 1, markCode: "M" },
              { reasoning: "Alkene decolourises; alkane doesn't.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bromine water — alkenes decolourise it (addition across C=C); alkanes do not react.",
            commonErrors: ["Limewater — that's CO₂ test."],
          },
        },
        {
          id: "ciecy-u10-alkanes-alkenes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the equation for ethene reacting with bromine water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Addition", statement: "C₂H₄ + Br₂ → C₂H₄Br₂." }],
            steps: [
              { reasoning: "C₂H₄ + Br₂ → C₂H₄Br₂.", marks: 1, markCode: "M" },
              { reasoning: "Addition across double bond.", marks: 1, markCode: "M" },
              { reasoning: "Balanced.", marks: 1, markCode: "M" },
              { reasoning: "State.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane)",
            commonErrors: ["Writing substitution — alkenes do addition."],
          },
        },
        {
          id: "ciecy-u10-alkanes-alkenes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare alkanes and alkenes.",
          parts: [
            { label: "a", prompt: "Compare formulas and bonding.", marks: 3 },
            { label: "b", prompt: "Compare reactions.", marks: 3 },
            { label: "c", prompt: "Describe a test to distinguish them.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alkane vs alkene", statement: "Saturated CₙH₂ₙ₊₂ vs unsaturated CₙH₂ₙ." }],
            steps: [
              { part: "a", reasoning: "Alkane CₙH₂ₙ₊₂ single bonds.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Alkene CₙH₂ₙ has C=C.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Saturated vs unsaturated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alkane: substitution/combustion.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alkene: addition reactions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bromine water test.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alkene decolourises.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Alkane no change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CₙH₂ₙ₊₂ vs CₙH₂ₙ (b) substitution vs addition (c) Br₂ water test",
            commonErrors: ["In (b) saying alkenes do substitution."],
          },
        },
      ],
    },
    {
      id: "ciecy-u10-cracking",
      title: "Cracking hydrocarbons",
      skill: "Describe cracking and its industrial importance.",
      lesson: {
        sections: [
          {
            heading: "What is cracking",
            body: "Breaking long-chain hydrocarbons into shorter, more useful ones.\n\nConditions: heat (~400-700°C) + catalyst (alumina/zeolites) or high pressure.\n\nC₁₀H₂₂ → C₆H₁₄ + C₄H₈ (example)",
          },
          {
            heading: "Why needed",
            body: "Crude oil fractions: long chains = high viscosity, high b.p., not very useful. Cracking produces:\n- Shorter alkanes (petrol)\n- Alkenes (for polymers, chemicals)\n\nDemand for petrol > supply of light fractions → cracking essential.",
          },
          {
            heading: "Types",
            body: "- **Thermal cracking**: high T, high pressure, no catalyst\n- **Catalytic cracking**: lower T, catalyst (zeolites) — gives more alkenes",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is cracking important for the oil industry?",
          solution: "It converts abundant long-chain hydrocarbons into shorter, more valuable products like petrol and alkenes for plastics.",
        },
      },
      questions: [
        {
          id: "ciecy-u10-cracking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is cracking?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Combining small molecules" }, { id: "b", text: "Breaking long hydrocarbons into shorter ones" }, { id: "c", text: "Distilling crude oil" }, { id: "d", text: "Making polymers" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cracking", statement: "Long→short hydrocarbons." }],
            steps: [{ reasoning: "Recall.", working: "\\text{long} \\to \\text{short}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Breaking long hydrocarbons into shorter ones",
            commonErrors: ["Confusing with fractional distillation."],
          },
        },
        {
          id: "ciecy-u10-cracking-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two conditions needed for catalytic cracking.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cracking", statement: "Heat + catalyst." }],
            steps: [
              { reasoning: "Heat (~400-700°C).", marks: 1, markCode: "M" },
              { reasoning: "Catalyst (zeolite/alumina).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High temperature (~400-700 °C) and a catalyst (e.g. zeolites/alumina).",
            commonErrors: ["Saying 'needs oxygen' — cracking is thermal/catalytic."],
          },
        },
        {
          id: "ciecy-u10-cracking-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cracking is economically important.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Cracking", statement: "Makes valuable short products." }],
            steps: [
              { reasoning: "Long chains abundant in crude oil.", marks: 1, markCode: "M" },
              { reasoning: "Short chains = petrol/chemicals.", marks: 1, markCode: "M" },
              { reasoning: "Demand exceeds natural supply.", marks: 1, markCode: "M" },
              { reasoning: "Conclude economic value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crude oil contains mostly long-chain hydrocarbons of limited use; cracking converts them into shorter, more valuable products (petrol, alkenes for plastics) matching market demand.",
            commonErrors: ["Saying 'makes oil cheaper' — it's about product value."],
          },
        },
        {
          id: "ciecy-u10-cracking-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the cracking process and its importance.",
          parts: [
            { label: "a", prompt: "Define cracking.", marks: 2 },
            { label: "b", prompt: "State conditions.", marks: 3 },
            { label: "c", prompt: "Explain economic importance.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cracking", statement: "Long→short, heat+catalyst, makes valuable products." }],
            steps: [
              { part: "a", reasoning: "Long hydrocarbons→shorter.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Heat ~400-700°C.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Catalyst zeolite.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Or high pressure thermal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Abundant long chains.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Short = petrol/alkenes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Demand exceeds supply.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) long→short (b) heat+catalyst (c) makes valuable products",
            commonErrors: ["In (b) omitting catalyst for catalytic cracking."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u10-alkanes-cracking-notes",
      title: "Alkanes, alkenes and cracking — revision notes",
      summary: "Alkane vs alkene comparison, bromine test, cracking conditions.",
      sections: [
        {
          heading: "Key facts",
          body: "Alkane CₙH₂ₙ₊₂ saturated; alkene CₙH₂ₙ unsaturated C=C. Alkenes: addition reactions, decolourise Br₂ water. Cracking: heat+catalyst, long→short hydrocarbons.",
        },
        {
          heading: "Exam technique",
          body: "- Distinguish: bromine water test.\n- Cracking ≠ distillation (breaking bonds vs separating).\n- Alkenes sooty flame (incomplete combustion).",
        },
      ],
    },
  ],
};
