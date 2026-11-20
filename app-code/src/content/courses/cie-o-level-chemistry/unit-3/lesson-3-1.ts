import type { Lesson } from "../../../types.ts";

export const lesson131: Lesson = {
  id: "olchem-u3-lesson-3-1",
  code: "3-1",
  title: "Moles, Equations and Titrations",
  goal: "I CAN use the mole concept, balance equations, calculate reacting masses and perform titration calculations.",
  standards: ["5070 3.1", "5070 3.2", "5070 3.3"],
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
      id: "olchem-u3-moles",
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
          id: "olchem-u3-moles-q1",
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
          id: "olchem-u3-moles-q2",
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
          id: "olchem-u3-moles-q3",
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
          id: "olchem-u3-moles-q4",
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
      ],
    },
    {
      id: "olchem-u3-titration",
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
          id: "olchem-u3-titration-q1",
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
          id: "olchem-u3-titration-q2",
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
          id: "olchem-u3-titration-q3",
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
          id: "olchem-u3-titration-q4",
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
      id: "olchem-u3-stoichiometry-notes",
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
