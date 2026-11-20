import type { Lesson } from "../../../types.ts";

export const lesson152: Lesson = {
  id: "ciecy-u5-lesson-5-2",
  code: "5-2",
  title: "Calorimetry and Enthalpy Changes",
  goal: "I CAN measure and calculate enthalpy changes using calorimetry.",
  standards: ["0654 5.2"],
  vocabulary: [
    { term: "Enthalpy change (ΔH)", definition: "Heat energy change at constant pressure." },
    { term: "Exothermic", definition: "ΔH negative — releases heat to surroundings." },
    { term: "Endothermic", definition: "ΔH positive — absorbs heat from surroundings." },
    { term: "Calorimetry", definition: "Measuring heat changes using temperature rise/fall." },
    { term: "Specific heat capacity", definition: "Energy to raise 1 kg by 1°C — water = 4200 J/kg°C." },
    { term: "Heat loss", definition: "Energy escaping to surroundings — makes measured ΔH smaller." },
    { term: "ΔHc", definition: "Enthalpy of combustion — per mole of fuel burned." },
    { term: "ΔHn", definition: "Enthalpy of neutralisation — per mole of water formed." },
  ],
  concepts: [
    {
      id: "ciecy-u5-calorimetry",
      title: "Calorimetry experiments",
      skill: "Calculate enthalpy changes from temperature measurements.",
      lesson: {
        sections: [
          {
            heading: "The method",
            body: "Measure temperature change of known mass of water: **q = mcΔT**.\n- Exothermic: temperature rises → ΔH negative\n- Endothermic: temperature falls → ΔH positive",
          },
          {
            heading: "Enthalpy of neutralisation",
            body: "HCl + NaOH → NaCl + H₂O. Measure temp rise of mixed solutions.\nΔHn = −(mcΔT)/moles of water formed. Always ≈ −57 kJ/mol for strong acid + strong base.",
          },
          {
            heading: "Enthalpy of combustion",
            body: "Burn fuel to heat known mass of water. ΔHc = −(mcΔT)/moles of fuel. Compare fuels: higher magnitude = more energy per mole.",
          },
        ],
        keyFormulas: [
          { name: "Heat energy", statement: "$q = mc\\Delta T$" },
          { name: "Enthalpy", statement: "$\\Delta H = -\\dfrac{q}{n}$" },
        ],
        workedExample: {
          problem: "50 cm³ of 1 mol/dm³ HCl + 50 cm³ of 1 mol/dm³ NaOH raises temp by 6.8°C. Calculate ΔHn. (c=4.2 J/g°C, assume density 1 g/cm³)",
          solution: "m = 100 g. q = 100 × 4.2 × 6.8 = 2856 J. n(H₂O) = 0.05 mol. ΔHn = −2856/0.05 = −57,120 J/mol ≈ −57 kJ/mol.",
        },
      },
      questions: [
        {
          id: "ciecy-u5-calorimetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to temperature in an exothermic reaction measured by calorimetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It falls" }, { id: "b", text: "It rises" }, { id: "c", text: "It stays constant" }, { id: "d", text: "It doubles" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Exothermic", statement: "Releases heat → temperature rises." }],
            steps: [{ reasoning: "Recall.", working: "\\Delta T > 0", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** It rises",
            commonErrors: ["Confusing exo (heat out) with temperature falling."],
          },
        },
        {
          id: "ciecy-u5-calorimetry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the formula for heat energy absorbed by water in calorimetry.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "q=mcΔT", statement: "q = mcΔT." }],
            steps: [
              { reasoning: "State formula.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "q = mcΔT",
            commonErrors: ["Using c=4200 for mass in grams — need 4.2 J/g°C."],
          },
        },
        {
          id: "ciecy-u5-calorimetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "100 g of water warms from 20°C to 27°C. Calculate heat absorbed. (c=4.2 J/g°C)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "q=mcΔT", statement: "q = mcΔT." }],
            steps: [
              { reasoning: "q = 100 × 4.2 × (27−20).", marks: 1, markCode: "M" },
              { reasoning: "= 100 × 4.2 × 7.", marks: 1, markCode: "M" },
              { reasoning: "= 2940 J.", marks: 1, markCode: "A" },
              { reasoning: "Unit J.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2940 J",
            commonErrors: ["Using 4200 instead of 4.2 with grams."],
          },
        },
        {
          id: "ciecy-u5-calorimetry-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to measure the enthalpy of neutralisation of HCl and NaOH.",
          parts: [
            { label: "a", prompt: "Describe the procedure.", marks: 4 },
            { label: "b", prompt: "State the calculation.", marks: 3 },
            { label: "c", prompt: "State two sources of error.", marks:2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Calorimetry", statement: "Mix equal volumes, measure ΔT, calculate per mole." }],
            steps: [
              { part: "a", reasoning: "Measure equal volumes of acid and alkali.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Record initial temperatures.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mix, record max temp.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Calculate ΔT.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "q = mcΔT.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "ΔHn = −q/n(H₂O).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "n = c×V.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat loss to surroundings.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Incomplete mixing / temp reading timing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mix+measure ΔT (b) ΔHn=−mcΔT/n (c) heat loss/mixing",
            commonErrors: ["In (c) only one error given."],
          },
        },
      ],
    },
    {
      id: "ciecy-u5-hess-law",
      title: "Hess's law",
      skill: "Use Hess's law to calculate enthalpy changes indirectly.",
      lesson: {
        sections: [
          {
            heading: "Hess's law",
            body: "The enthalpy change of a reaction is the same whether it occurs in one step or several steps.\n\n**ΔH(reaction) = ΣΔH(products path) − ΣΔH(reactants path)**\n\nUse formation enthalpies or combustion enthalpies to find unknown ΔH.",
          },
          {
            heading: "Formation enthalpies",
            body: "ΔHf = enthalpy change forming 1 mol compound from elements.\n\nΔH(reaction) = ΣΔHf(products) − ΣΔHf(reactants).\n\nExample: ΔHf(CO₂) = −394, ΔHf(H₂O) = −286, ΔHf(C) = 0, ΔHf(H₂) = 0.",
          },
          {
            heading: "Cycle method",
            body: "Draw energy cycle: reactants → products directly (ΔH = ?) and via alternative route (sum of steps). Set equal and solve.",
          },
        ],
        keyFormulas: [
          { name: "Hess's law", statement: "$\\Delta H_{rxn} = \\sum \\Delta H_f(\\text{products}) - \\sum \\Delta H_f(\\text{reactants})$" },
        ],
        workedExample: {
          problem: "Given ΔHf: C=0, H₂=0, CO₂=−394, H₂O=−286 kJ/mol. Find ΔH for C + O₂ → CO₂.",
          solution: "ΔH = ΔHf(CO₂) − ΔHf(C) − ΔHf(O₂) = −394 − 0 − 0 = −394 kJ/mol.",
        },
      },
      questions: [
        {
          id: "ciecy-u5-hess-law-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Hess's law state?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Enthalpy depends on path taken" }, { id: "b", text: "Enthalpy change is same regardless of route" }, { id: "c", text: "Energy cannot be created" }, { id: "d", text: "Catalysts change ΔH" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Hess's law", statement: "ΔH same for any route." }],
            steps: [{ reasoning: "Recall.", working: "\\Delta H \\text{ path-independent}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Enthalpy change is the same regardless of the route taken",
            commonErrors: ["Thinking ΔH depends on steps — it's path-independent."],
          },
        },
        {
          id: "ciecy-u5-hess-law-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the formula for ΔH using formation enthalpies.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Hess", statement: "ΔH = ΣΔHf(products) − ΣΔHf(reactants)." }],
            steps: [
              { reasoning: "State formula.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ΔH = ΣΔHf(products) − ΣΔHf(reactants)",
            commonErrors: ["Reversing products/reactants."],
          },
        },
        {
          id: "ciecy-u5-hess-law-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Given ΔHf: CH₄=−75, CO₂=−394, H₂O=−286 kJ/mol. Calculate ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Hess", statement: "ΔH = products − reactants." }],
            steps: [
              { reasoning: "Products: −394 + 2(−286) = −966.", marks: 1, markCode: "M" },
              { reasoning: "Reactants: −75 + 0 = −75.", marks: 1, markCode: "M" },
              { reasoning: "ΔH = −966 − (−75) = −891.", marks: 1, markCode: "A" },
              { reasoning: "kJ/mol.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "−891 kJ/mol",
            commonErrors: ["Subtracting wrong direction: −75 − (−966) = +891 error."],
          },
        },
        {
          id: "ciecy-u5-hess-law-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how Hess's law allows calculation of enthalpy changes that cannot be measured directly.",
          parts: [
            { label: "a", prompt: "State Hess's law.", marks: 3 },
            { label: "b", prompt: "Describe the cycle method.", marks: 3 },
            { label: "c", prompt: "Give an example use.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Hess's law", statement: "ΔH path-independent → indirect calculation." }],
            steps: [
              { part: "a", reasoning: "ΔH same for any route.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Draw reactants→products two ways.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "One direct ΔH=?; other sum of steps.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Set equal, solve.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "E.g. ΔHf of compounds not directly measurable.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use combustion data.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ΔH path-independent (b) cycle: direct=indirect (c) unmeasurable ΔH via combustion",
            commonErrors: ["In (c) example must be something not directly measurable."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u5-calorimetry-hess-notes",
      title: "Calorimetry and Hess's law — revision notes",
      summary: "q=mcΔT, enthalpy of neutralisation/combustion, Hess's law cycles.",
      sections: [
        {
          heading: "Key facts",
          body: "q=mcΔT (c=4.2 J/g°C for water). Exothermic: ΔT rises, ΔH<0. ΔHn≈−57 kJ/mol. Hess: ΔH = ΣΔHf(products) − ΣΔHf(reactants).",
        },
        {
          heading: "Exam technique",
          body: "- Convert cm³→g using density 1 g/cm³.\n- Watch units: J vs kJ.\n- Hess: products minus reactants, elements = 0.",
        },
      ],
    },
  ],
};
