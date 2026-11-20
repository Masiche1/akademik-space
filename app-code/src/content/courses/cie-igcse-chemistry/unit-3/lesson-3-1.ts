import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "ciecy-u3-lesson-3-1",
  code: "3-1",
  title: "Moles, Equations and Titrations",
  goal: "I CAN use the mole concept, balance equations, calculate reacting masses and perform titration calculations.",
  standards: ["0654 3.1", "0654 3.2", "0654 3.3"],
  vocabulary: [
    { term: "Mole", definition: "Amount of substance containing 6.02 × 10²³ particles (Avogadro constant)." },
    { term: "Relative formula mass (Mr)", definition: "Sum of Ar values in a formula." },
    { term: "Limiting reactant", definition: "Reactant completely used up first; determines product amount." },
    { term: "Titration", definition: "Accurate volume measurement to find unknown concentration." },
    { term: "Endpoint", definition: "Point where indicator changes colour — end of neutralisation." },
    { term: "Empirical formula", definition: "Simplest whole-number ratio of atoms in a compound." },
    { term: "Percentage yield", definition: "Actual yield ÷ theoretical yield × 100%." },
    { term: "Atom economy", definition: "Useful product mass ÷ total reactant mass × 100%." },
  ],
  concepts: [
    {
      id: "ciecy-u3-moles",
      title: "The mole concept and equations",
      skill: "Calculate moles, masses and use balanced equations for reacting mass calculations.",
      lesson: {
        sections: [
          {
            heading: "The mole",
            body: "1 mole = 6.02 × 10²³ particles. **n = m ÷ Mr** (moles = mass / Mr). For gases at RTP: 1 mole = 24 dm³.",
          },
          {
            heading: "Balanced equations",
            body: "Coefficients give mole ratios: 2H₂ + O₂ → 2H₂O means 2 mol H₂ : 1 mol O₂ : 2 mol H₂O. Use ratios to convert between substances.",
          },
          {
            heading: "Limiting reactant",
            body: "Calculate moles of each reactant → compare ratio needed → the one that runs out first is limiting; it sets the maximum product.",
          },
        ],
        keyFormulas: [
          { name: "Moles from mass", statement: "$n = \\dfrac{m}{M_r}$" },
          { name: "Moles of gas at RTP", statement: "$V = n \\times 24\\ \\text{dm}^3$" },
        ],
        workedExample: {
          problem: "How many moles are in 4.0 g of NaOH (Mr = 40)?",
          solution: "n = 4.0 / 40 = 0.1 mol.",
        },
      },
      questions: [
        {
          id: "ciecy-u3-moles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is one mole of a substance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6.02 × 10²³ particles" }, { id: "b", text: "1 gram of substance" }, { id: "c", text: "1 dm³ of gas" }, { id: "d", text: "1 mole of electrons" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mole", statement: "6.02×10²³ particles (Avogadro)." }],
            steps: [{ reasoning: "Recall definition.", working: "N_A = 6.02 \\times 10^{23}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 6.02 × 10²³ particles",
            commonErrors: ["Confusing mole with gram."],
          },
        },
        {
          id: "ciecy-u3-moles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the moles in 8.0 g of NaOH (Mr = 40).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "n = m/Mr", statement: "n = 8/40 = 0.2 mol." }],
            steps: [
              { reasoning: "Apply formula.", working: "n = \\frac{8}{40}", marks: 1, markCode: "M" },
              { reasoning: "Answer.", working: "n = 0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2 mol",
            commonErrors: ["Using Mr=23 (Na only) instead of 40 (NaOH)."],
          },
        },
        {
          id: "ciecy-u3-moles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In 2H₂ + O₂ → 2H₂O, how many moles of O₂ are needed to react with 4 mol of H₂?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Equation ratios", statement: "2H₂ : 1O₂ ratio." }],
            steps: [
              { reasoning: "Read ratio 2:1.", working: "2:1", marks: 1, markCode: "M" },
              { reasoning: "4 mol H₂ → half as much O₂.", working: "4 \\times \\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "= 2 mol.", marks: 1, markCode: "A" },
              { reasoning: "State answer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 mol O₂",
            commonErrors: ["Using 2:2 ratio — coefficient of O₂ is 1."],
          },
        },
        {
          id: "ciecy-u3-moles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Calculate the mass of water produced when 2 mol of H₂ burns in excess O₂.",
          parts: [
            { label: "a", prompt: "Write the balanced equation.", marks: 1 },
            { label: "b", prompt: "Find the mole ratio H₂ : H₂O.", marks: 2 },
            { label: "c", prompt: "Calculate moles of H₂O produced.", marks: 2 },
            { label: "d", prompt: "Calculate the mass of H₂O (Mr = 18).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Stoichiometry", statement: "Equation ratios → moles → mass via Mr." }],
            steps: [
              { part: "a", reasoning: "2H₂ + O₂ → 2H₂O.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "2:2 simplifies to 1:1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State ratio.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2 mol H₂ → 2 mol H₂O.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "m = n × Mr.", working: "m = 2 \\times 18", marks: 1, markCode: "M" },
              { part: "d", reasoning: "= 36 g.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Complete with units.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Final answer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2H₂+O₂→2H₂O (b) 1:1 (c) 2 mol (d) 36 g",
            commonErrors: ["In (d) forgetting units or using Mr=16 (O only)."],
          },
        },
        {
          id: "ciecy-u3-moles-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many moles are in 18 g of water? (H₂O = 18 g/mol)",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.5 mol" }, { id: "b", text: "1 mol" }, { id: "c", text: "2 mol" }, { id: "d", text: "18 mol" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "n = m/Mr", statement: "n = 18/18 = 1 mol." }],
            steps: [{ reasoning: "Divide mass by Mr.", working: "n = \\frac{18}{18} = 1", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1 mol",
            commonErrors: ["Using Mr=16 (O only) instead of 18."],
          },
        },
        {
          id: "ciecy-u3-moles-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the number of moles in 7.3 g of HCl. (Mr = 36.5)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.2, unit: "mol" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "n = m/Mr", statement: "n = 7.3/36.5 = 0.2 mol." }],
            steps: [
              { reasoning: "Apply formula.", working: "n = \\frac{7.3}{36.5}", marks: 1, markCode: "M" },
              { reasoning: "Answer with unit.", working: "n = 0.2\\ \\text{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2 mol",
            commonErrors: ["Rounding too early or forgetting the decimal point."],
          },
        },
        {
          id: "ciecy-u3-moles-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Balance the equation: CH₄ + O₂ → CO₂ + H₂O",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Balancing", statement: "Same number of each atom on both sides." }],
            steps: [
              { reasoning: "Balance C and H first, then O.", working: "CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O", marks: 1, markCode: "M" },
              { reasoning: "State balanced equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CH₄ + 2O₂ → CO₂ + 2H₂O",
            commonErrors: ["Writing CH₄ + O₂ → CO₂ + 2H₂O — oxygen not balanced."],
          },
        },
        {
          id: "ciecy-u3-moles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For 2Mg + O₂ → 2MgO, what is the mole ratio of Mg to O₂?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2 : 1" }, { id: "b", text: "1 : 2" }, { id: "c", text: "2 : 2" }, { id: "d", text: "1 : 1" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Equation ratios", statement: "Coefficients give mole ratio." }],
            steps: [{ reasoning: "Read coefficients 2 and 1.", working: "2:1", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 2 : 1",
            commonErrors: ["Including the coefficient of MgO instead of O₂."],
          },
        },
        {
          id: "ciecy-u3-moles-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For CaCO₃ → CaO + CO₂, calculate the volume of CO₂ produced at RTP when 0.5 mol of CaCO₃ decomposes completely.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mol" },
              { label: "b", answer: 12, unit: "dm³" },
            ],
          },
          markscheme: {
            principles: [{ kind: "property", name: "Gas volumes", statement: "1:1 mole ratio; 1 mol gas = 24 dm³ at RTP." }],
            steps: [
              { reasoning: "Mole ratio CaCO₃ : CO₂ is 1 : 1.", working: "1:1", marks: 1, markCode: "M" },
              { reasoning: "n(CO₂) = 0.5 mol.", working: "n = 0.5", marks: 1, markCode: "A" },
              { reasoning: "V = n × 24.", working: "V = 0.5 \\times 24", marks: 1, markCode: "M" },
              { reasoning: "V = 12 dm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5 mol (b) 12 dm³",
            commonErrors: ["Using 22.4 dm³ (STP) instead of 24 dm³ (RTP)."],
          },
        },
        {
          id: "ciecy-u3-moles-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the mass of NaCl produced when 4.6 g of sodium reacts with excess chlorine. (Na = 23, Cl = 35.5; 2Na + Cl₂ → 2NaCl)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Stoichiometry", statement: "n = m/Mr; mole ratio 2:2 = 1:1." }],
            steps: [
              { reasoning: "n(Na) = 4.6/23.", working: "n = \\frac{4.6}{23} = 0.2", marks: 1, markCode: "M" },
              { reasoning: "Ratio 2Na : 2NaCl → n(NaCl) = 0.2 mol.", marks: 1, markCode: "M" },
              { reasoning: "m = n × Mr = 0.2 × 58.5.", working: "m = 0.2 \\times 58.5", marks: 1, markCode: "M" },
              { reasoning: "= 11.7 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11.7 g",
            commonErrors: ["Using Mr = 23 for NaCl instead of 58.5."],
          },
        },
        {
          id: "ciecy-u3-moles-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which quantity is the same for 1 mole of any gas at RTP?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mass" }, { id: "b", text: "Volume" }, { id: "c", text: "Mr" }, { id: "d", text: "Density" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Avogadro's law", statement: "Equal moles of gas occupy equal volumes at same T and P." }],
            steps: [{ reasoning: "Recall molar volume.", working: "V_m = 24\\ \\text{dm}^3", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Volume",
            commonErrors: ["Confusing mass (varies) with volume (fixed)."],
          },
        },
        {
          id: "ciecy-u3-moles-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the mass of 0.25 mol of calcium carbonate. (Mr = 100)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "g" }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "m = n × Mr", statement: "m = 0.25 × 100 = 25 g." }],
            steps: [
              { reasoning: "Apply m = n × Mr.", working: "m = 0.25 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 25 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25 g",
            commonErrors: ["Dividing by Mr instead of multiplying."],
          },
        },
        {
          id: "ciecy-u3-moles-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the formula n = m/Mr, what does Mr represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Relative molecular mass" }, { id: "b", text: "Mass in grams" }, { id: "c", text: "Number of moles" }, { id: "d", text: "Concentration" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mr", statement: "Sum of Ar values in the formula." }],
            steps: [{ reasoning: "Recall definition.", working: "M_r = \\sum A_r", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Relative molecular mass",
            commonErrors: ["Confusing Mr with actual mass m."],
          },
        },
        {
          id: "ciecy-u3-moles-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One mole of any substance contains how many particles?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6.02 × 10²³" }, { id: "b", text: "6.02 × 10²²" }, { id: "c", text: "3.01 × 10²³" }, { id: "d", text: "1.20 × 10²⁴" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Avogadro constant", statement: "6.02 × 10²³ mol⁻¹." }],
            steps: [{ reasoning: "Recall value.", working: "N_A = 6.02 \\times 10^{23}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 6.02 × 10²³",
            commonErrors: ["Mixing up powers of ten."],
          },
        },
        {
          id: "ciecy-u3-moles-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For 2H₂ + O₂ → 2H₂O: (a) calculate the moles of O₂ needed to react with 6 mol of H₂; (b) calculate the mass of water formed. (Mr H₂O = 18)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "mol" },
              { label: "b", answer: 108, unit: "g" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Equation ratios", statement: "2H₂ : 1O₂ : 2H₂O." }],
            steps: [
              { reasoning: "Ratio 2:1 → half as much O₂.", working: "6 \\times \\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "n(O₂) = 3 mol.", marks: 1, markCode: "A" },
              { reasoning: "Ratio 2:2 → n(H₂O) = 6 mol; m = 6 × 18.", working: "m = 6 \\times 18", marks: 1, markCode: "M" },
              { reasoning: "m = 108 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 mol (b) 108 g",
            commonErrors: ["In (b) using 3 mol instead of 6 mol of water."],
          },
        },
        {
          id: "ciecy-u3-moles-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "10 g of calcium carbonate decomposes completely: CaCO₃ → CaO + CO₂. Calculate the mass of CO₂ produced. (CaCO₃ = 100, CO₂ = 44)",
          parts: [
            { label: "a", prompt: "Write the balanced equation.", marks: 1 },
            { label: "b", prompt: "Calculate moles of CaCO₃.", marks: 2 },
            { label: "c", prompt: "Calculate moles of CO₂ formed.", marks: 2 },
            { label: "d", prompt: "Calculate mass of CO₂.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Stoichiometry", statement: "1:1 ratio; m = n × Mr." }],
            steps: [
              { part: "a", reasoning: "CaCO₃ → CaO + CO₂ already balanced.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "n = 10/100.", working: "n = \\frac{10}{100}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "= 0.1 mol.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ratio 1:1 → 0.1 mol CO₂.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "m = n × Mr.", working: "m = 0.1 \\times 44", marks: 1, markCode: "M" },
              { part: "d", reasoning: "= 4.4 g.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Units g.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Final answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CaCO₃ → CaO + CO₂ (b) 0.1 mol (c) 0.1 mol (d) 4.4 g",
            commonErrors: ["Using Mr of CaO (56) instead of CO₂ (44) in (d)."],
          },
        },
      ],
    },
    {
      id: "ciecy-u3-titration",
      title: "Titrations and percentage yield",
      skill: "Perform titration calculations and calculate percentage yield.",
      lesson: {
        sections: [
          {
            heading: "Titration calculation",
            body: "1. Balanced equation → mole ratio.\n2. n = c × V (c in mol/dm³, V in dm³).\n3. Find unknown concentration or volume.\n\nIndicator (phenolphthalein/methyl orange) shows endpoint.",
          },
          {
            heading: "Percentage yield",
            body: "**% yield = (actual yield ÷ theoretical yield) × 100**. Always < 100% due to losses, side reactions, incomplete reaction.",
          },
          {
            heading: "Limiting reactant example",
            body: "5 mol H₂ + 2 mol O₂ → need 2.5 O₂ per 5 H₂ but only 2 available → **O₂ limiting** → produces 4 mol H₂O, leaves 1 mol H₂ unused.",
          },
        ],
        keyFormulas: [
          { name: "Moles from concentration", statement: "$n = c \\times V$ ($V$ in dm³)" },
          { name: "Percentage yield", statement: "$\\%\\text{yield} = \\dfrac{\\text{actual}}{\\text{theoretical}} \\times 100$" },
        ],
        workedExample: {
          problem: "25 cm³ of 0.1 mol/dm³ NaOH neutralises 20 cm³ HCl. Find HCl concentration (1:1 ratio).",
          solution: "n(NaOH) = 0.1 × 0.025 = 0.0025 mol = n(HCl). c(HCl) = 0.0025/0.020 = 0.125 mol/dm³.",
        },
      },
      questions: [
        {
          id: "ciecy-u3-titration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the indicator show in a titration?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The start of the reaction" }, { id: "b", text: "The endpoint of neutralisation" }, { id: "c", text: "The concentration of acid" }, { id: "d", text: "The temperature" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Indicator", statement: "Colour change = endpoint." }],
            steps: [{ reasoning: "Recall purpose.", working: "\\text{endpoint}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The endpoint of neutralisation",
            commonErrors: ["Saying 'start' — it marks completion."],
          },
        },
        {
          id: "ciecy-u3-titration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate moles in 50 cm³ of 0.2 mol/dm³ solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "n = cV", statement: "n = 0.2 × 0.050 = 0.01 mol." }],
            steps: [
              { reasoning: "Convert cm³ to dm³.", working: "50 \\text{cm}^3 = 0.050 \\text{dm}^3", marks: 1, markCode: "M" },
              { reasoning: "Calculate.", working: "n = 0.2 \\times 0.050 = 0.01", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.01 mol",
            commonErrors: ["Using 50 instead of 0.050 — cm³ must convert to dm³."],
          },
        },
        {
          id: "ciecy-u3-titration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A reaction has theoretical yield 20 g but actual yield 15 g. Calculate percentage yield.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "% yield", statement: "(actual/theoretical) × 100." }],
            steps: [
              { reasoning: "Apply formula.", working: "\\frac{15}{20} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 75%.", marks: 1, markCode: "A" },
              { reasoning: "State with %." , marks: 1, markCode: "B" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Inverting the ratio → 133%."],
          },
        },
        {
          id: "ciecy-u3-titration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "20 cm³ of 0.5 mol/dm³ NaOH is neutralised by HCl. Calculate the HCl concentration if 25 cm³ is needed (1:1 ratio).",
          parts: [
            { label: "a", prompt: "Calculate moles of NaOH.", marks: 3 },
            { label: "b", prompt: "State the mole ratio NaOH : HCl.", marks: 1 },
            { label: "c", prompt: "Calculate moles of HCl.", marks: 2 },
            { label: "d", prompt: "Calculate HCl concentration.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Titration", statement: "n = cV; 1:1 ratio; c = n/V." }],
            steps: [
              { part: "a", reasoning: "Convert volume.", working: "20 \\text{cm}^3 = 0.020 \\text{dm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "n = 0.5 × 0.020.", working: "n = 0.01", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "1:1 ratio.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "n(HCl) = 0.01 mol.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert HCl volume.", working: "25 \\text{cm}^3 = 0.025 \\text{dm}^3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "c = n/V = 0.01/0.025.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "= 0.4 mol/dm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.01 mol (b) 1:1 (c) 0.01 mol (d) 0.4 mol/dm³",
            commonErrors: ["In (d) forgetting to convert cm³ to dm³."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u3-stoichiometry-notes",
      title: "Moles, equations and titrations — revision notes",
      summary: "n = m/Mr, n = cV, equation ratios, limiting reactant, % yield.",
      sections: [
        {
          heading: "Key formulas",
          body: "n = m/Mr; n = cV (V in dm³); gas at RTP: V = 24n dm³. Equation coefficients = mole ratios. % yield = actual/theoretical × 100.",
        },
        {
          heading: "Exam technique",
          body: "- Always convert cm³ → dm³ before n = cV.\n- Identify limiting reactant by comparing moles to equation ratio.",
        },
      ],
    },
  ],
};
