import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "olchem-u3-lesson-3-2",
  code: "3-2",
  title: "Reacting Masses and Concentration",
  goal: "I CAN calculate reacting masses from equations and work with solution concentration.",
  standards: ["5070 3.2"],
  vocabulary: [
    { term: "Molar mass", definition: "Mass of one mole of a substance in g/mol — sum of Ar values." },
    { term: "Ar", definition: "Relative atomic mass from the periodic table." },
    { term: "Concentration", definition: "Amount of solute per volume of solution, mol/dm³." },
    { term: "Concentration (g/dm³)", definition: "Mass of solute per volume, g/dm³." },
    { term: "Solution", definition: "Homogeneous mixture of solute dissolved in solvent." },
    { term: "Stoichiometry", definition: "Calculating quantities from balanced equations." },
    { term: "dm³", definition: "Decimetre cubed = litre = 1000 cm³." },
    { term: "Mole ratio", definition: "Ratio of moles of reactants to products from the equation." },
  ],
  concepts: [
    {
      id: "olchem-u3-reacting-masses",
      title: "Reacting masses",
      skill: "Calculate masses of reactants and products from balanced equations.",
      lesson: {
        sections: [
          {
            heading: "Molar mass",
            body: "Molar mass = sum of Ar values.\n- H₂O: 2(1) + 16 = 18 g/mol\n- CO₂: 12 + 2(16) = 44 g/mol\n- H₂SO₄: 2(1) + 32 + 4(16) = 98 g/mol",
          },
          {
            heading: "Mass calculations",
            body: "From a balanced equation, the mole ratio gives mass ratio:\n\n**2H₂ + O₂ → 2H₂O**\n2 mol H₂ (4 g) + 1 mol O₂ (32 g) → 2 mol H₂O (36 g)\n\nSo 4 g H₂ reacts with 32 g O₂ to give 36 g H₂O.",
          },
          {
            heading: "Method",
            body: "1. Write balanced equation.\n2. Find moles of known substance (mass ÷ molar mass).\n3. Use mole ratio to find moles of unknown.\n4. Convert to mass (moles × molar mass).",
          },
        ],
        keyFormulas: [
          { name: "Moles", statement: "$n = \\dfrac{m}{M}$" },
          { name: "Mass", statement: "$m = n \\times M$" },
        ],
        workedExample: {
          problem: "What mass of water forms when 4 g of hydrogen burns in oxygen? (H₂=2, O₂=32, H₂O=18)",
          solution: "Moles H₂ = 4/2 = 2 mol. Equation 2H₂+O₂→2H₂O gives 2 mol H₂O. Mass = 2 × 18 = 36 g.",
        },
      },
      questions: [
        {
          id: "olchem-u3-reacting-masses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the molar mass of CO₂? (C=12, O=16)",
          response: { type: "mcq", choices: [
            { id: "a", text: "28 g/mol" }, { id: "b", text: "32 g/mol" }, { id: "c", text: "44 g/mol" }, { id: "d", text: "46 g/mol" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Molar mass", statement: "M = sum of Ar values." }],
            steps: [{ reasoning: "12 + 2(16) = 44.", working: "12 + 32", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 44 g/mol",
            commonErrors: ["Using 2×12 for oxygen — it's 2×16."],
          },
        },
        {
          id: "olchem-u3-reacting-masses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the moles in 18 g of water. (H₂O = 18 g/mol)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Moles", statement: "n = m/M." }],
            steps: [
              { reasoning: "n = 18/18.", working: "n = \\frac{18}{18}", marks: 1, markCode: "M" },
              { reasoning: "= 1 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 mol",
            commonErrors: ["Dividing M by m instead of m by M."],
          },
        },
        {
          id: "olchem-u3-reacting-masses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the mass of oxygen needed to burn 3 g of carbon completely. (C + O₂ → CO₂; C=12, O₂=32)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Stoichiometry", statement: "1 mol C needs 1 mol O₂ = 32 g." }],
            steps: [
              { reasoning: "Moles C = 3/12 = 0.25 mol.", working: "n = \\frac{3}{12}", marks: 1, markCode: "M" },
              { reasoning: "Mole ratio 1:1 → 0.25 mol O₂.", marks: 1, markCode: "M" },
              { reasoning: "Mass O₂ = 0.25 × 32.", working: "m = 0.25 \\times 32", marks: 1, markCode: "A" },
              { reasoning: "= 8 g.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "8 g",
            commonErrors: ["Using 16 g/mol for O₂ — it's diatomic, 32 g/mol."],
          },
        },
        {
          id: "olchem-u3-reacting-masses-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "For the reaction 2H₂ + O₂ → 2H₂O, calculate the mass of water produced from 8 g of hydrogen.",
          parts: [
            { label: "a", prompt: "Find moles of H₂.", marks: 2 },
            { label: "b", prompt: "Use mole ratio to find moles of H₂O.", marks: 3 },
            { label: "c", prompt: "Calculate mass of water.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Stoichiometry", statement: "n=m/M; mole ratio 2:2." }],
            steps: [
              { part: "a", reasoning: "n(H₂) = 8/2.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 4 mol.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ratio 2H₂:2H₂O = 1:1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "n(H₂O) = 4 mol.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "M(H₂O) = 18 g/mol.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "m = 4 × 18.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "= 72 g.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Unit g.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 mol (b) 4 mol (c) 72 g",
            commonErrors: ["In (b) using 2:1 ratio — check equation carefully."],
          },
        },
      ],
    },
    {
      id: "olchem-u3-concentration",
      title: "Concentration of solutions",
      skill: "Calculate and use concentration in mol/dm³ and g/dm³.",
      lesson: {
        sections: [
          {
            heading: "Concentration",
            body: "**c = n/V** where c in mol/dm³, n in mol, V in dm³.\n\n1 dm³ = 1 litre = 1000 cm³. Convert cm³ → dm³ by ÷1000.",
          },
          {
            heading: "Mass concentration",
            body: "**c = m/V** where c in g/dm³, m in g, V in dm³.",
          },
          {
            heading: "Converting between them",
            body: "mol/dm³ × molar mass = g/dm³.\nE.g. 1 mol/dm³ NaCl (M=58.5) = 58.5 g/dm³.",
          },
        ],
        keyFormulas: [
          { name: "Concentration", statement: "$c = \\dfrac{n}{V}$" },
          { name: "Mass concentration", statement: "$c = \\dfrac{m}{V}$" },
        ],
        workedExample: {
          problem: "What is the concentration of 0.5 mol NaCl in 250 cm³ solution?",
          solution: "V = 250/1000 = 0.25 dm³. c = 0.5/0.25 = 2 mol/dm³.",
        },
      },
      questions: [
        {
          id: "olchem-u3-concentration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the units of concentration in mol/dm³?",
          response: { type: "mcq", choices: [
            { id: "a", text: "mol/cm³" }, { id: "b", text: "mol/dm³" }, { id: "c", text: "g/dm³" }, { id: "d", text: "mol/g" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Concentration", statement: "mol of solute per dm³ solution." }],
            steps: [{ reasoning: "Recall.", working: "\\text{mol/dm}^3", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** mol/dm³",
            commonErrors: ["Using cm³ without converting."],
          },
        },
        {
          id: "olchem-u3-concentration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the concentration of 2 mol of solute in 500 cm³ of solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Concentration", statement: "c = n/V; V in dm³." }],
            steps: [
              { reasoning: "Convert 500 cm³ = 0.5 dm³.", marks: 1, markCode: "M" },
              { reasoning: "c = 2/0.5 = 4 mol/dm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 mol/dm³",
            commonErrors: ["Forgetting cm³→dm³ conversion."],
          },
        },
        {
          id: "olchem-u3-concentration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What mass of NaCl is needed to make 250 cm³ of 0.5 mol/dm³ solution? (NaCl = 58.5 g/mol)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Concentration", statement: "n = c×V; m = n×M." }],
            steps: [
              { reasoning: "V = 0.25 dm³.", marks: 1, markCode: "M" },
              { reasoning: "n = 0.5 × 0.25 = 0.125 mol.", marks: 1, markCode: "M" },
              { reasoning: "m = 0.125 × 58.5.", working: "m = 0.125 \\times 58.5", marks: 1, markCode: "A" },
              { reasoning: "= 7.31 g.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "7.31 g (accept 7.3 g)",
            commonErrors: ["Using cm³ directly in c=n/V."],
          },
        },
        {
          id: "olchem-u3-concentration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to prepare 250 cm³ of 0.1 mol/dm³ sodium chloride solution from solid.",
          parts: [
            { label: "a", prompt: "Calculate mass of NaCl needed.", marks: 3 },
            { label: "b", prompt: "Describe the procedure.", marks: 4 },
            { label: "c", prompt: "State why solution is made up to the mark.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solution prep", statement: "Weigh solute, dissolve, dilute to mark." }],
            steps: [
              { part: "a", reasoning: "n = c×V = 0.1 × 0.25.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 0.025 mol.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "m = 0.025 × 58.5 = 1.46 g.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weigh 1.46 g NaCl.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dissolve in some distilled water.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transfer to 250 cm³ volumetric flask.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add water to mark, invert to mix.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ensures exact volume.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct concentration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1.46 g (b) weigh→dissolve→flask→mark→mix (c) exact volume→correct c",
            commonErrors: ["In (b) filling to mark before dissolving."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u3-masses-conc-notes",
      title: "Reacting masses and concentration — revision notes",
      summary: "Molar mass, mass calculations from equations, c=n/V.",
      sections: [
        {
          heading: "Key facts",
          body: "Molar mass = sum of Ar. n = m/M. Use equation mole ratio. c = n/V (V in dm³). 1 dm³ = 1000 cm³. Always convert cm³→dm³.",
        },
        {
          heading: "Exam technique",
          body: "- Write balanced equation first.\n- Mole ratio comes from equation coefficients.\n- g/dm³ = mol/dm³ × molar mass.",
        },
      ],
    },
  ],
};
