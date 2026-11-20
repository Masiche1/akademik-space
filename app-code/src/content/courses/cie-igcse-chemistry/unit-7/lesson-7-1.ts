import type { Lesson } from "../../../types.ts";

export const lesson171: Lesson = {
  id: "ciecy-u7-lesson-7-1",
  code: "7-1",
  title: "Acids, Bases and Salts",
  goal: "I CAN describe acids and bases, pH, neutralisation and the preparation of salts.",
  standards: ["0654 7.1", "0654 7.2", "0654 7.3"],
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
      id: "ciecy-u7-acids-bases",
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
          id: "ciecy-u7-acids-bases-q1",
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
          id: "ciecy-u7-acids-bases-q2",
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
          id: "ciecy-u7-acids-bases-q3",
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
          id: "ciecy-u7-acids-bases-q4",
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
          id: "ciecy-u7-acids-bases-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which solution has the highest pH?",
          response: { type: "mcq", choices: [
            { id: "a", text: "pH 2" }, { id: "b", text: "pH 6" }, { id: "c", text: "pH 9" }, { id: "d", text: "pH 13" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "pH scale", statement: "Higher pH = more alkaline." }],
            steps: [{ reasoning: "Recall.", working: "\\text{pH 13 most alkaline}", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** pH 13",
            commonErrors: ["Confusing highest pH with most acidic."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which indicator is colourless in acid and pink in alkali?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Litmus" }, { id: "b", text: "Methyl orange" }, { id: "c", text: "Phenolphthalein" }, { id: "d", text: "Universal indicator only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Indicators", statement: "Phenolphthalein: colourless → pink above pH ~8." }],
            steps: [{ reasoning: "Recall indicator colours.", working: "\\text{phenolphthalein}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Phenolphthalein",
            commonErrors: ["Choosing litmus — it is red/blue, not colourless/pink."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products when an acid reacts with a metal carbonate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Salt and hydrogen" }, { id: "b", text: "Salt, water and carbon dioxide" }, { id: "c", text: "Salt and oxygen" }, { id: "d", text: "Hydrogen and carbon dioxide only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Carbonate + acid", statement: "Salt + water + CO₂." }],
            steps: [{ reasoning: "Recall.", working: "\\text{salt} + \\text{water} + \\text{CO}_2", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Salt, water and carbon dioxide",
            commonErrors: ["Giving hydrogen — that is the product with metals, not carbonates."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution of pH 4 is compared with one of pH 6. How many times greater is the H⁺ ion concentration in the pH 4 solution?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 100 },
          ] },
          markscheme: {
            principles: [{ kind: "property", name: "pH scale", statement: "Each pH unit = factor of 10 in [H⁺]." }],
            steps: [
              { reasoning: "Difference in pH = 6 − 4 = 2 units; 10² = 100.", working: "10^2 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100",
            commonErrors: ["Answering 2 — pH is logarithmic, not linear."],
            examinerNote: "Only 100 scores; 10^2 = 100.",
          },
        },
        {
          id: "ciecy-u7-acids-bases-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "25.0 cm³ of NaOH solution is neutralised by 20.0 cm³ of 0.15 mol/dm³ HCl. Calculate the concentration of the NaOH solution in mol/dm³.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.12, unit: "mol/dm³" },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "n(acid) = n(base) at endpoint (1:1); c = n/V." }],
            steps: [
              { reasoning: "n(HCl) = 0.15 × 0.0200 = 0.0030 mol; n(NaOH) = 0.0030 mol.", working: "n = cV = 0.15 \\times 0.0200", marks: 1, markCode: "M" },
              { reasoning: "c(NaOH) = 0.0030 ÷ 0.0250 = 0.12 mol/dm³.", working: "c = 0.0030 / 0.0250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.12 mol/dm³",
            commonErrors: ["Using cm³ without converting to dm³."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two uses of neutralisation reactions in everyday life or industry.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Neutralisation uses", statement: "Antacids, soil treatment, wastewater, toothpaste." }],
            steps: [
              { reasoning: "Any two valid uses.", marks: 1, markCode: "M" },
              { reasoning: "Second valid use stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two: antacids for indigestion, adding lime/calcium hydroxide to acidic soil, neutralising acidic industrial waste, toothpaste neutralising acid in the mouth.",
            commonErrors: ["Repeating the same example twice."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why universal indicator is more useful than litmus for measuring pH.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Indicators", statement: "Universal indicator gives a colour for each pH; litmus only red/blue." }],
            steps: [
              { reasoning: "Litmus only distinguishes acid vs alkali.", marks: 1, markCode: "M" },
              { reasoning: "Universal indicator shows many colours across pH 0–14.", marks: 1, markCode: "M" },
              { reasoning: "Allows approximate numerical pH to be read.", marks: 1, markCode: "M" },
              { reasoning: "Conclude it is more informative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Litmus only shows whether a solution is acidic or alkaline, while universal indicator produces a different colour at each pH, allowing an approximate numerical pH value to be determined.",
            commonErrors: ["Saying litmus is 'wrong' — it is just less informative."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which solution is the most acidic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "pH 1" }, { id: "b", text: "pH 4" }, { id: "c", text: "pH 7" }, { id: "d", text: "pH 10" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "pH scale", statement: "Lowest pH = strongest acid." }],
            steps: [{ reasoning: "Recall.", working: "\\text{pH 1 lowest}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** pH 1",
            commonErrors: ["Choosing the highest number."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the ionic equation for the neutralisation of H⁺ ions by OH⁻ ions and explain what it shows.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Neutralisation ionic", statement: "H⁺ + OH⁻ → H₂O." }],
            steps: [
              { reasoning: "Equation H⁺ + OH⁻ → H₂O.", marks: 1, markCode: "M" },
              { reasoning: "Shows the actual reacting species.", marks: 1, markCode: "M" },
              { reasoning: "Water is the only product of the ionic reaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H⁺ + OH⁻ → H₂O. It shows that neutralisation is the reaction between hydrogen ions and hydroxide ions to form water.",
            commonErrors: ["Writing a full equation with spectator ions instead of the ionic equation."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "50.0 cm³ of 0.10 mol/dm³ NaOH is exactly neutralised by hydrochloric acid of concentration 0.25 mol/dm³. Calculate the volume of acid required in cm³.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20, unit: "cm³" },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "n = cV; at endpoint n(acid) = n(base)." }],
            steps: [
              { reasoning: "n(NaOH) = 0.10 × 0.0500 = 0.0050 mol = n(HCl).", working: "n = 0.10 \\times 0.0500", marks: 1, markCode: "M" },
              { reasoning: "V(HCl) = 0.0050 ÷ 0.25 = 0.0200 dm³ = 20 cm³.", working: "V = n/c = 0.0050/0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 cm³",
            commonErrors: ["Giving the answer in dm³ without converting."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a weak acid and a strong acid of the same concentration have different pH values.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Weak vs strong acid", statement: "Weak acids only partially ionise → lower [H⁺]." }],
            steps: [
              { reasoning: "Strong acid fully ionises in water.", marks: 1, markCode: "M" },
              { reasoning: "Weak acid only partially ionises (equilibrium).", marks: 1, markCode: "M" },
              { reasoning: "Lower [H⁺] in weak acid → higher pH.", marks: 1, markCode: "M" },
              { reasoning: "Conclude pH differs despite same concentration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A strong acid ionises completely giving a higher H⁺ concentration, while a weak acid only partially ionises; the weak acid therefore has a lower [H⁺] and a higher pH.",
            commonErrors: ["Saying the solution concentration differs — it is the degree of ionisation."],
          },
        },
        {
          id: "ciecy-u7-acids-bases-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the role of indicators and the endpoint in acid–alkali titrations.",
          parts: [
            { label: "a", prompt: "Define the endpoint.", marks: 2 },
            { label: "b", prompt: "Explain how an indicator is chosen for a titration.", marks: 3 },
            { label: "c", prompt: "State why titration is more accurate than adding alkali until the solution 'looks neutral'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Titration", statement: "Indicator change near equivalence gives accurate endpoint." }],
            steps: [
              { part: "a", reasoning: "Point where indicator changes colour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Signals reaction just complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Indicator must change colour close to equivalence point.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Within the steep part of the pH curve.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So endpoint ≈ equivalence point.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "'Looks neutral' is subjective/imprecise.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Indicator gives sharp, repeatable endpoint.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Allows exact volume measurement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) indicator colour change (b) change near equivalence/steep curve region (c) subjective vs sharp repeatable endpoint",
            commonErrors: ["In (b) choosing an indicator by colour preference alone."],
          },
        },
      ],
    },
    {
      id: "ciecy-u7-salts",
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
          id: "ciecy-u7-salts-q1",
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
          id: "ciecy-u7-salts-q2",
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
          id: "ciecy-u7-salts-q3",
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
          id: "ciecy-u7-salts-q4",
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
      id: "ciecy-u7-acids-salts-notes",
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
