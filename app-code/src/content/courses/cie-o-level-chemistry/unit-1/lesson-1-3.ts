import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "olchem-u1-lesson-1-3",
  code: "1-3",
  title: "Separating Mixtures",
  goal: "I CAN choose and describe methods for separating mixtures: filtration, crystallisation, distillation and chromatography.",
  standards: ["5070 1.3"],
  vocabulary: [
    { term: "Filtration", definition: "Separating insoluble solid from liquid using filter paper." },
    { term: "Crystallisation", definition: "Obtaining pure solid by evaporating solvent from solution." },
    { term: "Simple distillation", definition: "Separating a solvent from a dissolved solid by boiling and condensing." },
    { term: "Fractional distillation", definition: "Separating liquids with different boiling points using a fractionating column." },
    { term: "Chromatography", definition: "Separating dissolved substances by different rates of movement through a medium." },
    { term: "Rf value", definition: "Ratio of distance moved by substance to distance moved by solvent front." },
    { term: "Evaporation", definition: "Removing liquid solvent by heating." },
    { term: "Residue", definition: "Insoluble solid left on filter paper." },
  ],
  concepts: [
    {
      id: "olchem-u1-separating-methods",
      title: "Filtration, crystallisation and distillation",
      skill: "Choose the correct separation method for a given mixture.",
      lesson: {
        sections: [
          {
            heading: "Choosing a method",
            body: "| Mixture | Method |\n|---|---|\n| Insoluble solid + liquid | Filtration |\n| Dissolved solid + liquid (recover solid) | Crystallisation |\n| Dissolved solid + liquid (recover liquid) | Simple distillation |\n| Two miscible liquids | Fractional distillation |\n| Coloured dissolved substances | Chromatography |",
          },
          {
            heading: "Filtration and crystallisation",
            body: "**Filtration**: insoluble residue stays on filter paper; filtrate passes through.\n**Crystallisation**: heat solution → evaporate some solvent → cool → crystals form → filter and dry. Works because solubility decreases on cooling.",
          },
          {
            heading: "Distillation",
            body: "**Simple**: boil solution → vapour condenses in cooler → pure liquid solvent collected.\n**Fractional**: fractionating column lets vapours separate by boiling point; each fraction condenses at its own temperature. Used to separate crude oil and air gases.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How would you obtain pure water from salty water?",
          solution: "Simple distillation: heat salty water, water vapour condenses as pure water (distillate); salt remains as residue.",
        },
      },
      questions: [
        {
          id: "olchem-u1-separating-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method separates an insoluble solid from a liquid?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Distillation" }, { id: "b", text: "Filtration" }, { id: "c", text: "Chromatography" }, { id: "d", text: "Crystallisation" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Filtration", statement: "Insoluble solid + liquid." }],
            steps: [{ reasoning: "Recall.", working: "\\text{filtration}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Filtration",
            commonErrors: ["Crystallisation recovers dissolved solids, not insoluble."],
          },
        },
        {
          id: "olchem-u1-separating-methods-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish simple from fractional distillation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Distillation", statement: "Simple: solvent from solution. Fractional: liquids with different b.p." }],
            steps: [
              { reasoning: "Simple distillation use.", marks: 1, markCode: "M" },
              { reasoning: "Fractional distillation use.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Simple distillation separates a solvent from a dissolved solid; fractional distillation separates two or more miscible liquids with different boiling points using a fractionating column.",
            commonErrors: ["Saying fractional needs a solid — it separates liquids."],
          },
        },
        {
          id: "olchem-u1-separating-methods-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you would obtain dry crystals of copper(II) sulfate from a solution containing sand.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Separation scheme", statement: "Filter insoluble, then crystallise dissolved solid." }],
            steps: [
              { reasoning: "Filter to remove insoluble sand.", marks: 1, markCode: "M" },
              { reasoning: "Heat filtrate to evaporate water.", marks: 1, markCode: "M" },
              { reasoning: "Cool to crystallise CuSO₄.", marks: 1, markCode: "M" },
              { reasoning: "Filter and dry crystals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Filter off sand → heat filtrate to evaporate water → cool → filter and dry copper(II) sulfate crystals.",
            commonErrors: ["Skipping filtration — sand would contaminate crystals."],
          },
        },
        {
          id: "olchem-u1-separating-methods-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how fractional distillation separates crude oil into fractions.",
          parts: [
            { label: "a", prompt: "Describe the apparatus.", marks: 3 },
            { label: "b", prompt: "Explain how fractions separate.", marks: 3 },
            { label: "c", prompt: "State two properties of fractions that change across the range.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fractional distillation", statement: "Heat crude oil; vapours condense at different heights by boiling point." }],
            steps: [
              { part: "a", reasoning: "Fractionating column + condenser.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Crude oil heated at bottom.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collection outlets at different heights.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vapours rise; lower b.p. rises higher.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each condenses where column cool enough.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collected as separate fractions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Boiling point increases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Viscosity increases.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Flammability decreases (or chain length increases).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) column+condenser+outlets (b) vapours condense by b.p. height (c) b.p./viscosity up, flammability down",
            commonErrors: ["In (c) not giving two properties."],
          },
        },
      ],
    },
    {
      id: "olchem-u1-chromatography",
      title: "Chromatography",
      skill: "Describe paper chromatography and calculate Rf values.",
      lesson: {
        sections: [
          {
            heading: "How it works",
            body: "A sample is spotted near the base of chromatography paper. Solvent rises by capillary action, carrying dissolved substances at different rates depending on their solubility and attraction to the paper. Each substance forms a separate **spot**.",
          },
          {
            heading: "Rf value",
            body: "**Rf = distance moved by spot ÷ distance moved by solvent front** (both measured from the baseline). Rf is constant for a substance in a given solvent — used to identify unknowns.",
          },
          {
            heading: "Uses",
            body: "Identify coloured substances (inks, food dyes), check purity, separate amino acids and sugars.",
          },
        ],
        keyFormulas: [
          { name: "Rf value", statement: "$R_f = \\dfrac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$" },
        ],
        workedExample: {
          problem: "A spot moves 3.2 cm and the solvent front moves 8.0 cm. Calculate Rf.",
          solution: "Rf = 3.2/8.0 = 0.40.",
        },
      },
      questions: [
        {
          id: "olchem-u1-chromatography-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the Rf value measure?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Spot colour intensity" }, { id: "b", text: "Spot distance ÷ solvent front distance" }, { id: "c", text: "Paper length" }, { id: "d", text: "Solvent volume" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rf", statement: "Spot distance / solvent distance." }],
            steps: [{ reasoning: "Recall.", working: "R_f = \\frac{d_{spot}}{d_{solvent}}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Spot distance ÷ solvent front distance",
            commonErrors: ["Reversing numerator and denominator."],
          },
        },
        {
          id: "olchem-u1-chromatography-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two reasons substances separate during chromatography.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Chromatography", statement: "Different solubility and adsorption to paper." }],
            steps: [
              { reasoning: "Different solubility in solvent.", marks: 1, markCode: "M" },
              { reasoning: "Different attraction to paper.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Substances move at different rates because they have different solubilities in the solvent and different attractions to the chromatography paper.",
            commonErrors: ["Saying 'different colours' — colour is detection, not separation cause."],
          },
        },
        {
          id: "olchem-u1-chromatography-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A substance travels 4.5 cm while the solvent front travels 9.0 cm. Calculate Rf and explain what it tells you.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Rf", statement: "Rf = spot distance / solvent distance." }],
            steps: [
              { reasoning: "Rf = 4.5/9.0.", working: "R_f = \\frac{4.5}{9.0}", marks: 1, markCode: "M" },
              { reasoning: "= 0.5.", marks: 1, markCode: "A" },
              { reasoning: "Rf identifies substance (constant for given solvent).", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rf = 0.50 — a constant identifier for that substance in that solvent, used to compare with known samples.",
            commonErrors: ["Giving Rf > 1 — spot can never move beyond solvent front."],
          },
        },
        {
          id: "olchem-u1-chromatography-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to separate and identify the components of a black ink using paper chromatography.",
          parts: [
            { label: "a", prompt: "Describe the procedure.", marks: 4 },
            { label: "b", prompt: "Explain how separation occurs.", marks: 2 },
            { label: "c", prompt: "Explain how components are identified.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chromatography", statement: "Spot ink, develop in solvent, measure Rf values." }],
            steps: [
              { part: "a", reasoning: "Spot ink near base of paper.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Place in solvent (below spot).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solvent rises by capillary action.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Remove before solvent reaches top; dry.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Components dissolve and move at different rates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Form separate spots.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Measure spot and solvent distances.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Calculate Rf for each.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare with known Rf values / run reference inks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) spot→develop→dry (b) different rates→spots (c) Rf values→identify",
            commonErrors: ["In (a) letting solvent reach the top of paper."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u1-separating-notes",
      title: "Separating mixtures — revision notes",
      summary: "Filtration, crystallisation, distillation, chromatography and Rf.",
      sections: [
        {
          heading: "Key facts",
          body: "Insoluble solid+liquid → filtration. Dissolved solid → crystallisation (solid) or simple distillation (liquid). Miscible liquids → fractional distillation. Coloured dissolved substances → chromatography. Rf = spot/solvent distance.",
        },
        {
          heading: "Exam technique",
          body: "- Match method to what you want to recover.\n- Rf always between 0 and 1.\n- Fractional distillation: vapours condense at heights matching boiling points.",
        },
      ],
    },
  ],
};
