import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "ciecy-u3-lesson-3-3",
  code: "3-3",
  title: "Limiting Reactants and Chemical Formulae",
  goal: "I CAN identify limiting reactants and determine empirical and molecular formulae.",
  standards: ["0654 3.3"],
  vocabulary: [
    { term: "Limiting reactant", definition: "Reactant completely used up first — determines product amount." },
    { term: "Excess reactant", definition: "Reactant present in more than needed — remains after reaction." },
    { term: "Empirical formula", definition: "Simplest whole-number ratio of atoms in a compound." },
    { term: "Molecular formula", definition: "Actual number of atoms in a molecule (multiple of empirical)." },
    { term: "Avogadro's law", definition: "Equal volumes of gases at same T and P contain equal moles." },
    { term: "Molar volume", definition: "Volume of 1 mol of gas = 24 dm³ at room temperature and pressure." },
    { term: "Percentage composition", definition: "Percentage by mass of each element in a compound." },
    { term: "Hydrated salt", definition: "Salt with water of crystallisation, e.g. CuSO₄·5H₂O." },
  ],
  concepts: [
    {
      id: "ciecy-u3-limiting-reactants",
      title: "Limiting reactants",
      skill: "Identify the limiting reactant and calculate product yield.",
      lesson: {
        sections: [
          {
            heading: "The concept",
            body: "The reaction stops when one reactant runs out. That reactant is the **limiting reactant** — it sets the maximum product. The other is in **excess**.",
          },
          {
            heading: "Identifying it",
            body: "Compare moles of each reactant against the equation ratio. The one that would run out first is limiting.\n\nExample: 2H₂ + O₂ → 2H₂O. If you have 4 mol H₂ and 1 mol O₂: H₂ needs 2 mol O₂ per 4 mol H₂, but only 1 available → O₂ limiting.",
          },
          {
            heading: "Product calculation",
            body: "Only the limiting reactant determines product. Calculate moles of product from limiting reactant's mole ratio.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "In 2H₂ + O₂ → 2H₂O, 2 mol H₂ reacts with 2 mol O₂. Which is limiting and how much H₂O forms?",
          solution: "2 mol H₂ needs 1 mol O₂; 2 mol O₂ available — O₂ in excess. H₂ limiting → 2 mol H₂O = 36 g.",
        },
      },
      questions: [
        {
          id: "ciecy-u3-limiting-reactants-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the limiting reactant?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reactant in excess" }, { id: "b", text: "Reactant used up first" }, { id: "c", text: "Product formed" }, { id: "d", text: "Catalyst" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Limiting reactant", statement: "Used up first, sets product yield." }],
            steps: [{ reasoning: "Recall.", working: "\\text{runs out first}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Reactant used up first",
            commonErrors: ["Confusing with excess reactant."],
          },
        },
        {
          id: "ciecy-u3-limiting-reactants-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For N₂ + 3H₂ → 2NH₃, identify the limiting reactant when 1 mol N₂ reacts with 3 mol H₂.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Limiting", statement: "Compare mole ratio to equation." }],
            steps: [
              { reasoning: "Ratio needed: 1 N₂ : 3 H₂.", marks: 1, markCode: "M" },
              { reasoning: "Exact ratio → neither in excess; both fully used.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neither is in excess — the amounts match the 1:3 ratio exactly, so both are fully consumed (stoichiometric mixture).",
            commonErrors: ["Picking one arbitrarily — exact ratio means no excess."],
          },
        },
        {
          id: "ciecy-u3-limiting-reactants-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For 2H₂ + O₂ → 2H₂O, 8 g H₂ reacts with 64 g O₂. Identify the limiting reactant. (H₂=2, O₂=32)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Limiting", statement: "Convert to moles, compare ratio." }],
            steps: [
              { reasoning: "n(H₂) = 8/2 = 4 mol.", marks: 1, markCode: "M" },
              { reasoning: "n(O₂) = 64/32 = 2 mol.", marks: 1, markCode: "M" },
              { reasoning: "4 mol H₂ needs 2 mol O₂ — exact match; both limiting.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both reactants are exactly in the 2:1 ratio — neither is in excess (stoichiometric mixture).",
            commonErrors: ["Assuming H₂ always limiting — check moles."],
          },
        },
        {
          id: "ciecy-u3-limiting-reactants-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "For CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, 10 g CaCO₃ reacts with excess HCl. Calculate mass of CO₂ produced. (CaCO₃=100, CO₂=44)",
          parts: [
            { label: "a", prompt: "Find moles of CaCO₃.", marks: 2 },
            { label: "b", prompt: "Use mole ratio to find moles of CO₂.", marks: 3 },
            { label: "c", prompt: "Calculate mass of CO₂.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Stoichiometry", statement: "1:1 mole ratio CaCO₃:CO₂." }],
            steps: [
              { part: "a", reasoning: "n = 10/100.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 0.1 mol.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ratio 1:1 → 0.1 mol CO₂.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "m = 0.1 × 44.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "= 4.4 g.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Unit g.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.1 mol (b) 0.1 mol (c) 4.4 g",
            commonErrors: ["In (b) using wrong coefficient ratio."],
          },
        },
      ],
    },
    {
      id: "ciecy-u3-formulae",
      title: "Empirical and molecular formulae",
      skill: "Determine empirical and molecular formulae from composition data.",
      lesson: {
        sections: [
          {
            heading: "Empirical formula",
            body: "Simplest whole-number ratio of atoms.\n\nMethod: % composition → moles of each element → divide by smallest → whole numbers.\n\nExample: 40% C, 6.7% H, 53.3% O\nC: 40/12=3.33; H: 6.7/1=6.7; O: 53.3/16=3.33\nRatio 1:2:1 → CH₂O.",
          },
          {
            heading: "Molecular formula",
            body: "Actual atoms in molecule = empirical formula × n.\n\nFind n = molar mass ÷ empirical formula mass.\nCH₂O empirical mass = 30; if molar mass = 60 → n=2 → C₂H₄O₂.",
          },
          {
            heading: "Avogadro's law and gas volumes",
            body: "Equal volumes of gases at same T,P contain equal moles. At RTP, 1 mol gas = 24 dm³.\n\nFrom equation gas ratios: 2H₂ + O₂ → 2H₂O means 2 vols H₂ + 1 vol O₂ → 2 vols H₂O(g).",
          },
        ],
        keyFormulas: [
          { name: "Empirical formula", statement: "$\\text{moles} = \\dfrac{\\% \\text{ mass}}{Ar}$" },
          { name: "Molar volume", statement: "$V_m = 24\\ \\text{dm}^3\\ \\text{mol}^{-1}\\ \\text{at RTP}$" },
        ],
        workedExample: {
          problem: "A compound is 85.7% C and 14.3% H with molar mass 56. Find molecular formula.",
          solution: "C: 85.7/12=7.14; H: 14.3/1=14.3. Ratio 1:2 → CH₂ (empirical mass 14). n=56/14=4 → C₄H₈.",
        },
      },
      questions: [
        {
          id: "ciecy-u3-formulae-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the empirical formula of C₂H₆?",
          response: { type: "mcq", choices: [
            { id: "a", text: "C₂H₆" }, { id: "b", text: "CH₃" }, { id: "c", text: "CH₂" }, { id: "d", text: "C₃H₉" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Empirical formula", statement: "Simplest whole-number ratio." }],
            steps: [{ reasoning: "C₂H₆ ÷ 2 = CH₃.", working: "C_2H_6 \\div 2", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CH₃",
            commonErrors: ["Keeping C₂H₆ — not simplest ratio."],
          },
        },
        {
          id: "ciecy-u3-formulae-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the empirical formula mass of CH₂O? (C=12, H=1, O=16)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Empirical mass", statement: "Sum of Ar in empirical formula." }],
            steps: [
              { reasoning: "12 + 2(1) + 16.", working: "12 + 2 + 16", marks: 1, markCode: "M" },
              { reasoning: "= 30.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
            commonErrors: ["Using molecular mass instead."],
          },
        },
        {
          id: "ciecy-u3-formulae-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A compound is 40.0% C, 6.7% H and 53.3% O. Determine its empirical formula.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Empirical formula", statement: "%→moles→simplest ratio." }],
            steps: [
              { reasoning: "Moles: C=40/12=3.33, H=6.7/1=6.7, O=53.3/16=3.33.", marks: 1, markCode: "M" },
              { reasoning: "Divide by smallest (3.33): 1 : 2 : 1.", marks: 1, markCode: "M" },
              { reasoning: "Ratio.", marks: 1, markCode: "A" },
              { reasoning: "Empirical formula CH₂O.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CH₂O",
            commonErrors: ["Not dividing by smallest mole value."],
          },
        },
        {
          id: "ciecy-u3-formulae-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hydrocarbon is 85.7% carbon and 14.3% hydrogen by mass. Its molar mass is 56 g/mol. Determine molecular formula.",
          parts: [
            { label: "a", prompt: "Find empirical formula.", marks: 4 },
            { label: "b", prompt: "Find empirical formula mass.", marks: 2 },
            { label: "c", prompt: "Find molecular formula.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Formula determination", statement: "%→empirical→×n→molecular." }],
            steps: [
              { part: "a", reasoning: "C: 85.7/12=7.14; H: 14.3/1=14.3.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ratio 1:2 → CH₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "14 g/mol.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "n = 56/14 = 4.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Molecular = CH₂ × 4.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "C₄H₈.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CH₂ (b) 14 (c) C₄H₈",
            commonErrors: ["In (c) forgetting to multiply all subscripts by n."],
          },
        },
      ],
    },
    {
      id: "ciecy-u3-gas-volumes",
      title: "Gas volumes and Avogadro's law",
      skill: "Use gas volume relationships in reactions at RTP.",
      lesson: {
        sections: [
          {
            heading: "Avogadro's law",
            body: "Equal volumes of gases at the same temperature and pressure contain equal numbers of moles.\n\nAt RTP (room temp, pressure): **1 mol gas = 24 dm³ = 24000 cm³**.",
          },
          {
            heading: "Applying to equations",
            body: "Gas volumes in a reaction follow the mole ratio: coefficients = volume ratio.\n\n**2H₂ + O₂ → 2H₂O(g)**\n2 vols H₂ + 1 vol O₂ → 2 vols H₂O\n\nIf 50 cm³ H₂ reacts completely: needs 25 cm³ O₂, produces 50 cm³ H₂O vapour.",
          },
          {
            heading: "Calculations",
            body: "Moles of gas = volume ÷ 24 dm³ (at RTP). Or use volume ratios directly from equation.",
          },
        ],
        keyFormulas: [
          { name: "Molar volume", statement: "$n = \\dfrac{V}{24}\\ \\text{mol (at RTP)}$" },
          { name: "Gas volume ratio", statement: "$\\text{volumes} \\propto \\text{moles}$" },
        ],
        workedExample: {
          problem: "What volume of CO₂ forms when 2 mol CaCO₃ decomposes? CaCO₃ → CaO + CO₂",
          solution: "1:1 ratio → 2 mol CO₂. At RTP: 2 × 24 = 48 dm³.",
        },
      },
      questions: [
        {
          id: "ciecy-u3-gas-volumes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the molar volume of a gas at RTP?",
          response: { type: "mcq", choices: [
            { id: "a", text: "22.4 dm³" }, { id: "b", text: "24 dm³" }, { id: "c", text: "10 dm³" }, { id: "d", text: "1 dm³" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Molar volume", statement: "24 dm³/mol at RTP." }],
            steps: [{ reasoning: "Recall.", working: "24\\ \\text{dm}^3", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 24 dm³",
            commonErrors: ["Using STP value 22.4 — IGCSE uses RTP 24 dm³."],
          },
        },
        {
          id: "ciecy-u3-gas-volumes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Avogadro's law.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Avogadro's law", statement: "Equal gas volumes → equal moles at same T,P." }],
            steps: [
              { reasoning: "State law.", marks: 1, markCode: "M" },
              { reasoning: "Mention same T and P.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Equal volumes of gases at the same temperature and pressure contain equal numbers of moles.",
            commonErrors: ["Omitting 'same T and P'."],
          },
        },
        {
          id: "ciecy-u3-gas-volumes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For 2H₂ + O₂ → 2H₂O(g), 40 cm³ H₂ reacts completely. Calculate volumes of O₂ needed and H₂O formed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gas ratios", statement: "Volume ratio = mole ratio 2:1:2." }],
            steps: [
              { reasoning: "Ratio 2 vols H₂ : 1 vol O₂ : 2 vols H₂O.", marks: 1, markCode: "M" },
              { reasoning: "40 cm³ H₂ → 20 cm³ O₂.", marks: 1, markCode: "M" },
              { reasoning: "→ 40 cm³ H₂O.", marks: 1, markCode: "A" },
              { reasoning: "Units cm³.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "20 cm³ O₂ and 40 cm³ H₂O",
            commonErrors: ["Using mass ratio instead of volume/mole ratio."],
          },
        },
        {
          id: "ciecy-u3-gas-volumes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how gas volumes relate to moles in chemical reactions.",
          parts: [
            { label: "a", prompt: "State Avogadro's law.", marks: 2 },
            { label: "b", prompt: "State the molar volume at RTP.", marks: 2 },
            { label: "c", prompt: "Apply to N₂ + O₂ → 2NO with 60 cm³ N₂.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Avogadro", statement: "Equal volumes → equal moles at same T,P." }],
            steps: [
              { part: "a", reasoning: "State law.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Same T and P condition.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "24 dm³/mol at RTP.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ratio 1:1:2 volumes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "60 cm³ N₂ → 60 cm³ O₂.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "→ 120 cm³ NO.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Units.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) equal vols→equal moles (b) 24 dm³/mol (c) 60 O₂, 120 NO",
            commonErrors: ["In (c) doubling N₂ volume wrongly."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u3-formulae-notes",
      title: "Limiting reactants and formulae — revision notes",
      summary: "Limiting reactant, empirical/molecular formulae, gas volumes at RTP.",
      sections: [
        {
          heading: "Key facts",
          body: "Limiting = used up first, sets yield. Empirical = simplest ratio; molecular = empirical × n. 1 mol gas = 24 dm³ at RTP. Gas volumes ∝ moles.",
        },
        {
          heading: "Exam technique",
          body: "- Empirical: %→moles→÷smallest→whole numbers.\n- n = molar mass ÷ empirical mass.\n- Gas problems: use volume ratios from equation.",
        },
      ],
    },
  ],
};
