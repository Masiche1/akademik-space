import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "chem11-u3-lesson-3-2",
  code: "3-2",
  title: "Buffers and Titrations",
  goal: "I CAN explain how buffers resist pH change, interpret titration curves, perform titration calculations, and apply neutralization reactions to real-world problems.",
  standards: ["HS-PS1-2", "SEP: Planning and Carrying Out Investigations"],
  vocabulary: [
    { term: "Buffer", definition: "A solution that resists pH change, containing a weak acid and its conjugate base (or weak base and conjugate acid) in similar amounts." },
    { term: "Titration", definition: "A technique measuring the volume of solution of known concentration needed to react exactly with a sample of unknown concentration." },
    { term: "Equivalence point", definition: "The point in a titration where moles of acid equal moles of base." },
    { term: "Endpoint", definition: "The point where the indicator changes color, signaling the equivalence point has been reached." },
    { term: "Indicator", definition: "A substance that changes color near the equivalence point, such as phenolphthalein or methyl orange." },
    { term: "Antacid", definition: "A base (or basic salt) used to neutralize excess stomach acid." },
    { term: "Net ionic equation", definition: "A chemical equation showing only the species that actually react, omitting spectator ions." },
  ],
  concepts: [
    {
      id: "chem11-u3-buffers-titrations",
      title: "Buffers and titration curves",
      skill: "Explain buffer action, interpret titration curves, and perform titration calculations.",
      lesson: {
        sections: [
          {
            heading: "What is a buffer?",
            body: "A **buffer** is a solution that resists pH change when small amounts of acid or base are added. It contains a weak acid and its conjugate base (or weak base and conjugate acid) in similar amounts.\n\nExample: $\\text{CH}_3\\text{COOH}/\\text{CH}_3\\text{COO}^-$ buffer.\n- Add acid ($\\text{H}^+$): the conjugate base $\\text{CH}_3\\text{COO}^-$ accepts it, forming more acetic acid.\n- Add base ($\\text{OH}^-$): the weak acid $\\text{CH}_3\\text{COOH}$ donates a proton, neutralizing the base.\n\nBlood is buffered at pH ~7.4 by the bicarbonate system; this is why blood pH stays stable despite metabolism.",
          },
          {
            heading: "Titration curves",
            body: "A **titration** measures the volume of a solution of known concentration needed to react exactly with a sample of unknown concentration.\n\nPlotting pH vs volume gives a characteristic curve:\n- **Strong acid vs strong base**: steep jump near equivalence point, pH 7 at equivalence.\n- **Weak acid vs strong base**: equivalence point above 7; buffer region before it.\n- **Strong acid vs weak base**: equivalence point below 7.\n\nThe **equivalence point** is where moles of acid = moles of base. Indicators change color near this point.",
          },
          {
            heading: "Titration calculation",
            body: "At equivalence: $n_{\\text{acid}} = n_{\\text{base}}$, i.e. $c_a V_a = c_b V_b$ for 1:1 reactions. For non-1:1 stoichiometry, include the mole ratio from the balanced equation. Always convert volumes to dm³ ($\\text{cm}^3 \\div 1000$).",
          },
        ],
        keyFormulas: [
          { name: "Buffer components", statement: "Weak acid + conjugate base (or weak base + conjugate acid)" },
          { name: "Titration", statement: "$c_a V_a = c_b V_b$ for 1:1; include mole ratio otherwise" },
        ],
        workedExample: {
          problem: "25.0 cm³ of 0.10 mol/dm³ NaOH is titrated with 0.20 mol/dm³ HCl. Calculate the volume of HCl needed for equivalence.",
          solution: "$n_{\\text{NaOH}} = 0.10 \\times 0.0250 = 0.0025\\ \\text{mol}$. Since 1:1, $n_{\\text{HCl}} = 0.0025\\ \\text{mol}$. $V_{\\text{HCl}} = 0.0025/0.20 = 0.0125\\ \\text{dm}^3 = 12.5\\ \\text{cm}^3$.",
        },
      },
      questions: [
        {
          id: "chem11-u3-buffers-titrations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair makes a buffer solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HCl and NaCl" },
              { id: "b", text: "CH3COOH and CH3COONa" },
              { id: "c", text: "NaOH and NaCl" },
              { id: "d", text: "HCl and NaOH" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Buffer", statement: "A buffer contains a weak acid and its conjugate base (or vice versa)." }],
            steps: [{ reasoning: "Acetic acid (weak acid) + sodium acetate (conjugate base) is a classic buffer; the others are strong acid/base or salts.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CH3COOH and CH3COONa",
            commonErrors: ["Choosing strong acid + strong base; they neutralize rather than buffer."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u3-buffers-titrations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A buffer contains acetic acid and acetate ions. Explain what happens when:\n\n(a) a small amount of HCl is added,\n(b) a small amount of NaOH is added.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Buffer action", statement: "Acetate ions neutralize added acid; acetic acid neutralizes added base." },
            ],
            steps: [
              { reasoning: "Added H+ reacts with CH3COO- to form CH3COOH, consuming the extra acid and keeping pH stable.", marks: 1, markCode: "B" },
              { reasoning: "Added OH- reacts with CH3COOH to form CH3COO- and water, consuming the base.", marks: 1, markCode: "B" },
              { reasoning: "In both cases the buffer components are consumed/produced in a way that resists the pH change.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) acetate consumes H+ forming acetic acid (b) acetic acid consumes OH- forming acetate.",
            commonErrors: ["Thinking buffer 'absorbs' acid without chemical reaction.", "Forgetting the conjugate pair relationship."],
            examinerNote: "B2 mechanism, R1 buffer principle.",
          },
        },
        {
          id: "chem11-u3-buffers-titrations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a titration, 30.0 cm³ of 0.15 mol/dm³ NaOH requires 22.5 cm³ of HCl to reach the equivalence point.\n\n(a) Calculate the concentration of the HCl.\n(b) The titration uses phenolphthalein indicator. State what color change marks the endpoint and why this indicator is chosen for strong acid-strong base.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Titration", statement: "$c_a V_a = c_b V_b$ for 1:1" },
              { kind: "context", name: "Indicators", statement: "Phenolphthalein is colorless in acid and pink in base; its transition range suits strong acid-base titrations." },
            ],
            steps: [
              { reasoning: "$n_{\\text{NaOH}} = 0.15 \\times 0.0300 = 0.0045\\ \\text{mol}$; equal moles of HCl needed.", marks: 1, markCode: "M" },
              { reasoning: "$c_{\\text{HCl}} = 0.0045/0.0225 = 0.20\\ \\text{mol dm}^{-3}$.", working: "0.0045/0.0225=0.20", marks: 2, markCode: "M" },
              { reasoning: "Phenolphthalein changes from colorless to pink near pH 8-10, close to the steep equivalence point of strong acid-strong base.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $0.20\\ \\text{mol dm}^{-3}$ (b) colorless to pink; transition range matches the steep equivalence point.",
            commonErrors: ["Forgetting to convert cm³ to dm³.", "Using the wrong indicator for weak acid titrations."],
            examinerNote: "M3 calculation, B1 indicator.",
          },
        },
        {
          id: "chem11-u3-buffers-titrations-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Blood is buffered by the bicarbonate system: $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{HCO}_3^- + \\text{H}^+$.",
          parts: [
            { label: "a", prompt: "Explain what happens to blood pH when excess CO2 builds up (e.g. during exercise).", marks: 3 },
            { label: "b", prompt: "Explain how the bicarbonate buffer resists this change.", marks: 3 },
            { label: "c", prompt: "A patient hyperventilates, blowing off CO2. Predict the effect on blood pH and explain.", marks: 2 },
            { label: "d", prompt: "Suggest one way the body compensates if the buffer is overwhelmed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Buffer action", statement: "HCO3- accepts H+; H2CO3 donates H+ to neutralize base." },
              { kind: "principle", name: "Respiratory compensation", statement: "Breathing rate adjusts CO2 levels, shifting the buffer equilibrium." },
              { kind: "context", name: "Blood pH", statement: "Normal blood pH ~7.4; deviation beyond ~7.0-7.8 is dangerous." },
            ],
            steps: [
              { reasoning: "Extra CO2 shifts the equilibrium $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCO}_3^- + \\text{H}^+$ to the right, producing more H+.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "This tends to lower blood pH (acidosis), though the buffer limits the change.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "HCO3- accepts the extra H+ to form H2CO3/CO2, consuming the acid and resisting the pH drop.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "The buffer components are consumed/produced in a way that holds pH near 7.4.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Hyperventilation removes CO2, shifting the equilibrium left, consuming H+ and raising blood pH (alkalosis).", marks: 2, markCode: "B", part: "c" },
              { reasoning: "If overwhelmed, the kidneys excrete or retain HCO3- and H+ to restore balance (renal compensation).", marks: 2, markCode: "B", part: "d" },
            ],
            finalAnswer: "(a) extra CO2 produces more H+, lowering pH (b) HCO3- neutralizes the acid (c) hyperventilation removes CO2, raises pH (d) kidneys adjust HCO3- and H+ excretion.",
            commonErrors: ["Thinking buffer 'absorbs' CO2 without equilibrium reasoning.", "Forgetting hyperventilation removes CO2 gas."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem11-u3-neutralization",
      title: "Neutralization reactions and applications",
      skill: "Write and balance neutralization equations, perform stoichiometric calculations, and apply them to antacids, soil treatment and industrial processes.",
      lesson: {
        sections: [
          {
            heading: "Neutralization stoichiometry",
            body: "Neutralization is an acid-base reaction producing salt and water. For strong acid-strong base, the net ionic equation is $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$. For weak acids/bases, write the molecular equation or show the proton transfer.\n\nTo calculate how much base is needed to neutralize an acid, use moles: $n = c \\times V$ (in dm³). The mole ratio comes from the balanced equation. For example, $\\text{H}_2\\text{SO}_4$ has 2 ionizable protons, so it needs 2 mol NaOH per mole.",
          },
          {
            heading: "Antacids",
            body: "Antacids neutralize excess stomach acid ($\\text{HCl}$). Common active ingredients:\n\n- $\\text{NaHCO}_3$ (baking soda): $\\text{NaHCO}_3 + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$\n- $\\text{CaCO}_3$ (calcium carbonate): $\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$\n- $\\text{Mg(OH)}_2$ (milk of magnesia): $\\text{Mg(OH)}_2 + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + 2\\text{H}_2\\text{O}$\n\nEach provides a base that consumes H+ ions.",
          },
          {
            heading: "Other applications",
            body: "- **Soil treatment**: farmers add lime (CaO or Ca(OH)2) to acidic soil to raise pH for crops.\n- **Industrial**: neutralizing acidic wastewater before discharge; producing salts like ammonium sulfate fertilizer via $\\text{NH}_3 + \\text{H}_2\\text{SO}_4$.\n- **Household**: oven cleaners (NaOH) dissolve grease; drain cleaners use bases.",
          },
        ],
        keyFormulas: [
          { name: "Moles", statement: "$n = c \\times V$ (V in dm³)" },
          { name: "Net ionic", statement: "$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ for strong acid-base" },
        ],
        workedExample: {
          problem: "How many moles of NaOH are needed to neutralize 0.050 mol of H2SO4?",
          solution: "$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$. The mole ratio is 1:2, so 0.050 mol H2SO4 needs $2 \\times 0.050 = 0.100\\ \\text{mol NaOH}$.",
        },
      },
      questions: [
        {
          id: "chem11-u3-neutralization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of the neutralization of HCl by NaOH?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NaCl and H2O" },
              { id: "b", text: "NaCl and H2" },
              { id: "c", text: "NaOH and HCl" },
              { id: "d", text: "Cl2 and NaOH" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Neutralization", statement: "Acid + base produces salt + water." }],
            steps: [{ reasoning: "HCl + NaOH → NaCl + H2O; the salt is sodium chloride.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** NaCl and H2O",
            commonErrors: ["Forgetting water is produced.", "Writing H2 instead of H2O."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem11-u3-neutralization-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the balanced equation for the reaction between calcium carbonate (CaCO3) and hydrochloric acid, and identify the gas produced.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Balancing", statement: "Balance atoms; carbonate + acid produces CO2 gas." }],
            steps: [
              { reasoning: "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$; Ca balances, C balances, Cl needs 2, H needs 2.", marks: 2, markCode: "M" },
              { reasoning: "The gas produced is carbon dioxide ($\\text{CO}_2$).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$; gas = CO2.",
            commonErrors: ["Forgetting the coefficient 2 on HCl.", "Writing H2CO3 instead of CO2 + H2O."],
            examinerNote: "M2 balancing, B1 gas ID.",
          },
        },
        {
          id: "chem11-u3-neutralization-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student titrates 25.0 cm³ of stomach acid (HCl) with 0.10 mol/dm³ NaOH. It takes 18.0 cm³ to reach the endpoint.\n\n(a) Calculate the concentration of the stomach acid.\n(b) Explain why this is a reasonable concentration for stomach acid (normal is about 0.1 mol/dm³).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Titration", statement: "$c_a V_a = c_b V_b$ for 1:1" },
            ],
            steps: [
              { reasoning: "$n_{\\text{NaOH}} = 0.10 \\times 0.0180 = 0.0018\\ \\text{mol}$; equal moles HCl.", marks: 1, markCode: "M" },
              { reasoning: "$c_{\\text{HCl}} = 0.0018/0.0250 = 0.072\\ \\text{mol dm}^{-3}$.", working: "0.0018/0.0250=0.072", marks: 2, markCode: "M" },
              { reasoning: "0.072 mol/dm³ is close to the typical 0.1 mol/dm³ range for stomach acid, confirming the measurement is reasonable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.072\\ \\text{mol dm}^{-3}$ (b) close to normal ~0.1 mol/dm³.",
            commonErrors: ["Volume unit errors.", "Forgetting 1:1 stoichiometry is fine here."],
            examinerNote: "M3 calculation, R1 reasonableness.",
          },
        },
        {
          id: "chem11-u3-neutralization-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An antacid tablet contains 0.50 g of CaCO3 (molar mass 100 g/mol).",
          parts: [
            { label: "a", prompt: "Calculate the moles of CaCO3 in the tablet.", marks: 2 },
            { label: "b", prompt: "Write the balanced equation for its reaction with HCl.", marks: 2 },
            { label: "c", prompt: "Calculate how many moles of HCl the tablet can neutralize.", marks: 3 },
            { label: "d", prompt: "Explain why CaCO3 is a less preferred antacid than Mg(OH)2 for patients with kidney problems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = m/M$" },
              { kind: "method", name: "Stoichiometry", statement: "Use balanced equation mole ratios." },
              { kind: "context", name: "Antacid safety", statement: "CaCO3 produces Ca2+ which can accumulate in kidney disease; Mg(OH)2 is gentler." },
            ],
            steps: [
              { reasoning: "$n = 0.50/100 = 0.0050\\ \\text{mol CaCO}_3$.", working: "0.50/100=0.0050", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "1 mol CaCO3 neutralizes 2 mol HCl, so 0.0050 mol neutralizes $2 \\times 0.0050 = 0.010\\ \\text{mol HCl}$.", working: "2\\times0.0050=0.010", marks: 3, markCode: "M", part: "c" },
              { reasoning: "CaCO3 releases Ca2+ ions; in kidney disease Ca2+ cannot be excreted properly and may form kidney stones or worsen function.", marks: 2, markCode: "B", part: "d" },
              { reasoning: "Mg(OH)2 also provides Mg2+ but is generally better tolerated; alternatively Al(OH)3 is used. Accept explanation of Ca2+ accumulation risk.", marks: 1, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) 0.0050 mol (b) CaCO3 + 2HCl → CaCl2 + H2O + CO2 (c) 0.010 mol HCl (d) Ca2+ accumulation risk in kidney disease.",
            commonErrors: ["Using 1:1 mole ratio instead of 1:2.", "Forgetting units in mole calculation."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};