import type { Lesson } from "../../../types.ts";

export const lesson171: Lesson = {
  id: "olchem-u7-lesson-7-1",
  code: "7-1",
  title: "Acids, Bases and Salts",
  goal: "I CAN describe acids and bases, pH, neutralisation and the preparation of salts.",
  standards: ["5070 7.1", "5070 7.2", "5070 7.3"],
  vocabulary: [
    { term: "Acid", definition: "Substance producing H⁺ ions in water; pH < 7; turns litmus red." },
    { term: "Base", definition: "Substance that neutralises acid; soluble bases are alkalis." },
    { term: "Alkali", definition: "Soluble base producing OH⁻ ions; pH > 7; turns litmus blue." },
    { term: "pH scale", definition: "0-14 scale; 7 neutral, <7 acid, >7 alkali." },
    { term: "Neutralisation", definition: "Acid + base → salt + water." },
    { term: "Salt", definition: "Ionic compound from acid + base (e.g. NaCl, CuSO₄)." },
    { term: "Titration", definition: "Accurate neutralisation to find concentrations." },
    { term: "Indicator", definition: "Substance changing colour with pH (litmus, phenolphthalein, universal indicator)." },
  ],
  concepts: [
    {
      id: "olchem-u7-acids-bases",
      title: "Acids, bases and pH",
      skill: "Describe acids and alkalis, interpret pH and explain neutralisation.",
      lesson: {
        sections: [
          {
            heading: "Acids vs alkalis",
            body: "| | Acid | Alkali |\n|---|---|---|\n| pH | <7 | >7 |\n| Ions | H⁺ | OH⁻ |\n| Litmus | red | blue |\n| Examples | HCl, H₂SO₄ | NaOH, KOH |",
          },
          {
            heading: "Neutralisation",
            body: "Acid + base → **salt + water**. Ionic equation: H⁺ + OH⁻ → H₂O. Exothermic. Used in antacids, soil treatment, wastewater.",
          },
          {
            heading: "pH measurement",
            body: "pH = −log[H⁺]. Indicators: universal indicator (full range), litmus (red/blue), phenolphthalein (colourless→pink), methyl orange (red→yellow).",
          },
        ],
        keyFormulas: [
          { name: "Neutralisation", statement: "$\\text{acid} + \\text{base} \\rightarrow \\text{salt} + \\text{water}$" },
        ],
        workedExample: {
          problem: "What are the products when hydrochloric acid reacts with sodium hydroxide?",
          solution: "HCl + NaOH → NaCl + H₂O (sodium chloride + water).",
        },
      },
      questions: [
        {
          id: "olchem-u7-acids-bases-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What pH range indicates an acidic solution?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Above 7" }, { id: "b", text: "Below 7" }, { id: "c", text: "Exactly 7" }, { id: "d", text: "Above 14" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "pH", statement: "Acid <7, neutral 7, alkali >7." }],
            steps: [{ reasoning: "Recall.", working: "pH < 7", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Below 7",
            commonErrors: ["Reversing acid/alkali ranges."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the word equation for neutralisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Neutralisation", statement: "Acid + base → salt + water." }],
            steps: [
              { reasoning: "State reactants.", marks: 1, markCode: "M" },
              { reasoning: "State products.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acid + base → salt + water",
            commonErrors: ["Writing 'acid + alkali → salt' only — water is essential."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a solution with pH 3 is more acidic than one with pH 5.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "pH scale", statement: "Lower pH = higher [H⁺] = stronger acid." }],
            steps: [
              { reasoning: "pH is logarithmic — each unit = 10× difference.", marks: 1, markCode: "M" },
              { reasoning: "pH 3 has 100× more H⁺ than pH 5.", marks: 1, markCode: "M" },
              { reasoning: "Lower pH = stronger acid.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "pH is logarithmic — pH 3 has 100 times more H⁺ ions than pH 5, making it a stronger acid.",
            commonErrors: ["Saying 'only 2 units different' — pH is logarithmic, not linear."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the preparation of a soluble salt by titration.",
          parts: [
            { label: "a", prompt: "State the reactants needed.", marks: 2 },
            { label: "b", prompt: "Describe the procedure.", marks: 3 },
            { label: "c", prompt: "Explain how to obtain pure crystals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Salt prep", statement: "Acid + alkali → salt + water; evaporate for crystals." }],
            steps: [
              { part: "a", reasoning: "Acid + soluble alkali (e.g. HCl + NaOH).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State pair.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Titrate with indicator to endpoint.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeat without indicator.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete procedure.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat to evaporate water.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cool to crystallise.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Filter/dry crystals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) acid+alkali (b) titrate→endpoint→repeat w/o indicator (c) evaporate→crystallise→filter",
            commonErrors: ["In (b) using indicator in final mixture — it contaminates salt."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which indicator is colourless in acid and pink in alkali?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Litmus" }, { id: "b", text: "Methyl orange" }, { id: "c", text: "Phenolphthalein" }, { id: "d", text: "Universal indicator" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Indicators", statement: "Phenolphthalein: colourless→pink in alkali." }],
            steps: [{ reasoning: "Recall.", working: "\\text{phenolphthalein}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Phenolphthalein",
            commonErrors: ["Litmus is red/blue, not colourless/pink."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of pure water at room temperature?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" }, { id: "b", text: "7" }, { id: "c", text: "14" }, { id: "d", text: "1" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "pH", statement: "Pure water is neutral, pH 7." }],
            steps: [{ reasoning: "Recall.", working: "pH = 7", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 7",
            commonErrors: ["Thinking water is acidic or alkaline."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution has $[\\text{H}^+] = 1 \\times 10^{-4}$ mol/dm³. What is its pH?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4 },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "pH", statement: "$pH = -\\log[\\text{H}^+]$" }],
            steps: [{ reasoning: "$-\\log(10^{-4}) = 4$.", working: "pH = -\\log(10^{-4}) = 4", marks: 1, markCode: "M" }],
            finalAnswer: "4",
            commonErrors: ["Answering -4 instead of 4."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the ionic equation for neutralisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Ionic neutralisation", statement: "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$" }],
            steps: [
              { reasoning: "Reactants H⁺ and OH⁻.", marks: 1, markCode: "M" },
              { reasoning: "Product H₂O, balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$",
            commonErrors: ["Including spectator ions like Na⁺ and Cl⁻."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance is an alkali?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hydrochloric acid" }, { id: "b", text: "Sodium hydroxide" }, { id: "c", text: "Copper(II) oxide" }, { id: "d", text: "Carbon dioxide" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Alkali", statement: "Soluble base producing OH⁻." }],
            steps: [{ reasoning: "Recall.", working: "\\text{NaOH soluble}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Sodium hydroxide",
            commonErrors: ["CuO is a base but insoluble — not an alkali."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the pH of $0.001$ mol/dm³ hydrochloric acid?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "pH of strong acid", statement: "Strong acid fully ionises: $[\\text{H}^+] = c$" }],
            steps: [{ reasoning: "$[\\text{H}^+] = 10^{-3}$, so $pH = 3$.", working: "pH = -\\log(10^{-3}) = 3", marks: 1, markCode: "M" }],
            finalAnswer: "3",
            commonErrors: ["Thinking dilute acid has pH near 7 — strong acid still fully ionises."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why neutralisation is exothermic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Exothermic", statement: "Bond formation releases energy." }],
            steps: [
              { reasoning: "H⁺ and OH⁻ react to form H–O bonds.", marks: 1, markCode: "M" },
              { reasoning: "Bond formation releases energy as heat.", marks: 1, markCode: "M" },
              { reasoning: "Net energy released → exothermic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H⁺ and OH⁻ ions combine to form water; forming the new H–O bonds releases more energy than is needed to break the original bonds, so energy is released as heat — the reaction is exothermic.",
            commonErrors: ["Saying 'acids are hot' — it's bond energy, not temperature of reactants."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What colour does universal indicator show for a solution of pH 2?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Blue" }, { id: "b", text: "Green" }, { id: "c", text: "Red/orange" }, { id: "d", text: "Purple" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Universal indicator", statement: "Low pH = red/orange." }],
            steps: [{ reasoning: "Recall.", working: "pH 2 \\to \\text{red}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Red/orange",
            commonErrors: ["Reversing the colour scale."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A solution of pH 4 and a solution of pH 6 are both acids. Compare their hydrogen ion concentrations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "pH scale", statement: "Each pH unit = factor of 10 in $[\\text{H}^+]$." }],
            steps: [
              { reasoning: "pH difference = 2 units.", marks: 1, markCode: "M" },
              { reasoning: "$10^2 = 100$ times more H⁺ in pH 4.", marks: 1, markCode: "M" },
              { reasoning: "pH 4 is the stronger acid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The pH 4 solution has $10^2 = 100$ times more H⁺ ions than the pH 6 solution — it is a stronger acid despite the small pH difference.",
            commonErrors: ["Saying only 'twice as acidic' — pH is logarithmic."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An unknown colourless solution is tested to find out if it is acidic.",
          parts: [
            { label: "a", prompt: "Describe how litmus paper is used and what result indicates an acid.", marks: 3 },
            { label: "b", prompt: "Describe how universal indicator is used and what result indicates an acid.", marks: 3 },
            { label: "c", prompt: "State one limitation of each method.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Acid tests", statement: "Indicators change colour with pH." }],
            steps: [
              { part: "a", reasoning: "Dip litmus paper into solution.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Red colour = acid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add few drops universal indicator.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Colour matched to pH chart; <7 = acid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Litmus only gives yes/no, no pH value.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Universal indicator approximate, not exact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) litmus turns red (b) UI colour matched to chart, pH<7 (c) litmus no pH value / UI approximate",
            commonErrors: ["In (c) saying indicators measure concentration precisely."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle is responsible for the acidic properties of an acid in water?",
          response: { type: "mcq", choices: [
            { id: "a", text: "OH⁻ ions" }, { id: "b", text: "H⁺ ions" }, { id: "c", text: "Na⁺ ions" }, { id: "d", text: "Cl₂ molecules" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Acid", statement: "Produces H⁺ ions in water." }],
            steps: [{ reasoning: "Recall.", working: "\\text{H}^+", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** H⁺ ions",
            commonErrors: ["OH⁻ is the alkaline ion."],
          },
        },
        {
          id: "olchem-u7-acids-bases-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write balanced equations for the reactions of hydrochloric acid with calcium carbonate and with magnesium.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Acid reactions", statement: "Acid + carbonate → salt + water + CO₂; acid + metal → salt + H₂." }],
            steps: [
              { reasoning: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.", marks: 1, markCode: "M" },
              { reasoning: "Mg + 2HCl → MgCl₂ + H₂.", marks: 1, markCode: "M" },
              { reasoning: "Both balanced.", marks: 1, markCode: "M" },
              { reasoning: "Both correct products.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; Mg + 2HCl → MgCl₂ + H₂",
            commonErrors: [ "Carbonate reaction missing CO₂ or water."],
          },
        },
      ],
    },
    {
      id: "olchem-u7-salts",
      title: "Salt preparation methods",
      skill: "Describe methods for preparing soluble and insoluble salts.",
      lesson: {
        sections: [
          {
            heading: "Soluble salts",
            body: "- **Acid + alkali**: titration (e.g. NaCl).\n- **Acid + metal**: add excess metal, filter (e.g. CuSO₄ from Cu + H₂SO₄).\n- **Acid + insoluble base/carbonate**: add excess solid until no more dissolves, filter (e.g. CuSO₄ from CuO + H₂SO₄).",
          },
          {
            heading: "Insoluble salts",
            body: "**Precipitation**: mix two solutions containing the ions → insoluble salt precipitates → filter, wash, dry. E.g. BaSO₄ from BaCl₂ + Na₂SO₄; PbI₂ from Pb(NO₃)₂ + KI.",
          },
          {
            heading: "Choosing method",
            body: "Soluble salt from acid+metal needs excess solid removed; from acid+alkali needs exact volumes (titration); insoluble always via precipitation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How would you prepare insoluble barium sulfate?",
          solution: "Mix barium chloride and sodium sulfate solutions → BaSO₄ precipitates → filter, wash, dry.",
        },
      },
      questions: [
        {
          id: "olchem-u7-salts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How are insoluble salts typically prepared?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Titration" }, { id: "b", text: "Precipitation" }, { id: "c", text: "Evaporation only" }, { id: "d", text: "Combustion" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Insoluble salts", statement: "Prepared by precipitation." }],
            steps: [{ reasoning: "Recall.", working: "\\text{precipitation}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Precipitation",
            commonErrors: ["Saying titration — that's for soluble salts."],
          },
        },
        {
          id: "olchem-u7-salts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State why excess solid is used when preparing a salt from acid + insoluble base.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Excess reactant", statement: "Ensures all acid reacts; excess filtered off." }],
            steps: [
              { reasoning: "Excess ensures complete reaction.", marks: 1, markCode: "M" },
              { reasoning: "Excess removed by filtration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Excess insoluble base ensures all the acid reacts; the unreacted excess is then removed by filtration.",
            commonErrors: ["Saying 'to make more salt' — it's to ensure completion."],
          },
        },
        {
          id: "olchem-u7-salts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to prepare copper(II) sulfate crystals from copper(II) oxide and sulfuric acid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Salt prep", statement: "Acid + insoluble base → salt + water; filter excess, crystallise." }],
            steps: [
              { reasoning: "Warm acid, add CuO until no more dissolves.", marks: 1, markCode: "M" },
              { reasoning: "Filter excess CuO.", marks: 1, markCode: "M" },
              { reasoning: "Evaporate/crystallise filtrate.", marks: 1, markCode: "M" },
              { reasoning: "Complete method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Warm dilute H₂SO₄, add excess CuO until no reaction, filter off excess, evaporate filtrate to crystallise CuSO₄.",
            commonErrors: ["Not filtering excess — crystals contaminated."],
          },
        },
        {
          id: "olchem-u7-salts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare preparing a soluble salt by titration vs acid + excess metal.",
          parts: [
            { label: "a", prompt: "State the reactants for each method.", marks: 3 },
            { label: "b", prompt: "Explain why titration gives purer product.", marks: 3 },
            { label: "c", prompt: "State one disadvantage of the metal method.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Salt methods", statement: "Titration: exact volumes → pure. Metal: excess → needs filtration." }],
            steps: [
              { part: "a", reasoning: "Titration: acid + alkali.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Metal: acid + metal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exact volumes → no excess.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No solid to filter → purer.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Excess metal may contaminate if not filtered well.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Slower/imprecise volumes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) titration: acid+alkali; metal: acid+metal (b) exact volumes→no excess→purer (c) contamination risk/less precise",
            commonErrors: ["In (b) saying titration is 'faster' — it's about purity."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u7-acids-salts-notes",
      title: "Acids, bases and salts — revision notes",
      summary: "pH scale, neutralisation, soluble vs insoluble salt preparation.",
      sections: [
        {
          heading: "Key facts",
          body: "Acid pH<7 (H⁺), alkali pH>7 (OH⁻). Neutralisation: acid+base→salt+water. Soluble salts: titration (acid+alkali), excess metal/base + filter. Insoluble: precipitation + filter.",
        },
        {
          heading: "Exam technique",
          body: "- pH is logarithmic — each unit is 10× difference.\n- Soluble salt needs crystallisation; insoluble needs filtration.",
        },
      ],
    },
  ],
};
