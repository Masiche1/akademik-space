import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "chem10-u3-lesson-3-2",
  code: "3-2",
  title: "The Mole",
  goal: "I CAN convert between mass, moles and number of particles, and use percent composition to find empirical and molecular formulas.",
  standards: ["HS-PS1-7", "SEP: Using Mathematics and Computational Thinking", "CCC: Scale, Proportion, and Quantity"],
  vocabulary: [
    { term: "Mole", definition: "The SI unit for amount of substance: $6.02 \\times 10^{23}$ particles of a substance." },
    { term: "Avogadro's number", definition: "$6.02 \\times 10^{23}$, the number of particles in one mole." },
    { term: "Molar mass", definition: "The mass in grams of one mole of a substance, in $\\text{g/mol}$." },
    { term: "Percent composition", definition: "The percent by mass of each element in a compound." },
    { term: "Empirical formula", definition: "The simplest whole-number ratio of atoms of each element in a compound." },
    { term: "Molecular formula", definition: "The actual number of atoms of each element in one molecule; a whole-number multiple of the empirical formula." },
  ],
  concepts: [
    {
      id: "chem10-u3-mole-molar-mass",
      title: "The mole, Avogadro's number and molar mass",
      skill: "Convert between mass, moles and number of particles using molar mass and Avogadro's number.",
      lesson: {
        sections: [
          {
            heading: "Counting by weighing",
            body: "Atoms and molecules are far too small to count one by one, so chemists count them in groups called **moles**. One mole of any substance contains $6.02 \\times 10^{23}$ particles (**Avogadro's number**).\n\nThe **molar mass** of a substance is the mass of one mole, in $\\text{g/mol}$. It equals the sum of the atomic masses on the periodic table. For water, $\\text{H}_2\\text{O}$: $2(1.0) + 16.0 = 18.0\\ \\text{g/mol}$.",
          },
          {
            heading: "Mole conversions",
            body: "Use molar mass to go between mass and moles, and Avogadro's number to go between moles and particles.\n\n$$n = \\frac{m}{M} \\qquad N = n \\times 6.02 \\times 10^{23}$$\n\nwhere $n$ is moles, $m$ is mass in grams, $M$ is molar mass and $N$ is the number of particles. The mole is the bridge: to go from mass to particles, convert mass to moles first, then moles to particles.",
          },
        ],
        keyFormulas: [
          { name: "Moles from mass", statement: "$n = \\dfrac{m}{M}$" },
          { name: "Particles from moles", statement: "$N = n \\times 6.02 \\times 10^{23}$" },
          { name: "Molar mass", statement: "sum of the atomic masses in the formula, in $\\text{g/mol}$" },
        ],
        workedExample: {
          problem: "How many moles are in $90.0\\ \\text{g}$ of water? (H 1.0, O 16.0)",
          solution: "Molar mass of $\\text{H}_2\\text{O} = 2(1.0) + 16.0 = 18.0\\ \\text{g/mol}$. Then $n = \\dfrac{90.0}{18.0} = 5.00\\ \\text{mol}$.",
        },
      },
      questions: [
        {
          id: "chem10-u3-mole-molar-mass-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many particles are in one mole of a substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.02 \\times 10^{23}$" },
              { id: "b", text: "$6.02 \\times 10^{32}$" },
              { id: "c", text: "$1.66 \\times 10^{24}$" },
              { id: "d", text: "$6.02 \\times 10^{-23}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Avogadro's number", statement: "One mole contains $6.02 \\times 10^{23}$ particles." },
            ],
            steps: [
              { reasoning: "Avogadro's number is $6.02 \\times 10^{23}$, a very large positive power of ten.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $6.02 \\times 10^{23}$",
            commonErrors: ["Choosing the negative exponent, which is a tiny number.", "Swapping the digits of the exponent."],
            examinerNote: "B1 for $6.02 \\times 10^{23}$.",
          },
        },
        {
          id: "chem10-u3-mole-molar-mass-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the mass of $2.50\\ \\text{mol}$ of sodium chloride, NaCl. (Na 23.0, Cl 35.5.) Give your answer in grams.",
          response: { type: "numeric", parts: [{ label: "Mass of NaCl", answer: 146.25, unit: "g", tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles and mass", statement: "$m = n \\times M$" },
            ],
            steps: [
              { reasoning: "Find the molar mass of NaCl.", working: "M = 23.0 + 35.5 = 58.5\\text{ g/mol}", marks: 1, markCode: "M" },
              { reasoning: "Multiply moles by molar mass.", working: "m = 2.50 \\times 58.5 = 146.25 \\approx 146\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$146\\ \\text{g}$ (146.25 g)",
            commonErrors: ["Dividing 58.5 by 2.50 instead of multiplying.", "Using 23.0 + 35.5 + 2 for the molar mass."],
            examinerNote: "M1 for 58.5 g/mol. A1 for 146 (allow 146.25 or 146.3).",
          },
        },
        {
          id: "chem10-u3-mole-molar-mass-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A beaker contains $36.0\\ \\text{g}$ of water, $\\text{H}_2\\text{O}$. (H 1.0, O 16.0; Avogadro's number $6.02 \\times 10^{23}$.)\n\nCalculate the number of water molecules in the beaker. Give your answer in units of $10^{23}$ molecules (for example, enter $1.5$ for $1.5 \\times 10^{23}$).",
          response: { type: "numeric", parts: [{ label: "Molecules", answer: 12.04, unit: "× 10^23 molecules", tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles from mass", statement: "$n = \\dfrac{m}{M}$" },
              { kind: "formula", name: "Particles from moles", statement: "$N = n \\times 6.02 \\times 10^{23}$" },
            ],
            steps: [
              { reasoning: "Find moles of water using molar mass $18.0\\ \\text{g/mol}$.", working: "n = \\frac{36.0}{18.0} = 2.00\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by Avogadro's number.", working: "N = 2.00 \\times 6.02 \\times 10^{23}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "N = 12.04 \\times 10^{23} = 1.20 \\times 10^{24}\\text{ molecules}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.20 \\times 10^{24}$ molecules, which is $12.0$ in units of $10^{23}$",
            commonErrors: ["Multiplying mass by Avogadro's number without converting to moles first.", "Counting atoms (three per molecule) instead of molecules."],
            examinerNote: "M1 for 2.00 mol. M1 for multiplying by $6.02 \\times 10^{23}$. A1 for 12.0 (or $1.20 \\times 10^{24}$). Allow ecf from an incorrect molar mass.",
          },
        },
        {
          id: "chem10-u3-mole-molar-mass-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sample of carbon dioxide, $\\text{CO}_2$, has a mass of $22.0\\ \\text{g}$. (C 12.0, O 16.0; Avogadro's number $6.02 \\times 10^{23}$.)",
          parts: [
            { label: "a", prompt: "Calculate the molar mass of $\\text{CO}_2$ in g/mol.", marks: 2 },
            { label: "b", prompt: "Calculate the number of moles in the sample.", marks: 2 },
            { label: "c", prompt: "Calculate the number of molecules in the sample, in units of $10^{23}$ molecules.", marks: 2 },
            { label: "d", prompt: "Calculate the mass in grams of $1.50\\ \\text{mol}$ of $\\text{CO}_2$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 44.0, unit: "g/mol", tolerance: 0.05 },
              { label: "b", answer: 0.5, unit: "mol", tolerance: 0.005 },
              { label: "c", answer: 3.01, unit: "× 10^23 molecules", tolerance: 0.02 },
              { label: "d", answer: 66.0, unit: "g", tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles from mass", statement: "$n = \\dfrac{m}{M}$" },
              { kind: "formula", name: "Particles from moles", statement: "$N = n \\times 6.02 \\times 10^{23}$" },
            ],
            steps: [
              { part: "a", reasoning: "Add the atomic masses: one carbon and two oxygens.", working: "M = 12.0 + 2(16.0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "M = 44.0\\text{ g/mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide mass by molar mass.", working: "n = \\frac{22.0}{44.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "n = 0.500\\text{ mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply moles by Avogadro's number.", working: "N = 0.500 \\times 6.02 \\times 10^{23}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "N = 3.01 \\times 10^{23}\\text{ molecules}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply moles by molar mass.", working: "m = 1.50 \\times 44.0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "m = 66.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $44.0\\ \\text{g/mol}$ (b) $0.500\\ \\text{mol}$ (c) $3.01 \\times 10^{23}$ molecules (d) $66.0\\ \\text{g}$",
            commonErrors: ["Using 28.0 for the molar mass (counting only one oxygen).", "Multiplying mass by molar mass in (b)."],
            examinerNote: "Allow ecf in (b), (c) from an incorrect (a). (c) Enter 3.01 for $3.01 \\times 10^{23}$.",
          },
        },
      ],
    },
    {
      id: "chem10-u3-formulas-composition",
      title: "Percent composition, empirical and molecular formulas",
      skill: "Calculate percent composition and determine empirical and molecular formulas from mass data.",
      lesson: {
        sections: [
          {
            heading: "Percent composition",
            body: "The **percent composition** of a compound is the percent of its mass contributed by each element:\n\n$$\\% \\text{ element} = \\frac{\\text{mass of element in one mole of compound}}{\\text{molar mass of compound}} \\times 100$$\n\nFor $\\text{CO}_2$ (molar mass 44.0), carbon is $\\dfrac{12.0}{44.0} \\times 100 = 27.3\\%$.",
          },
          {
            heading: "Empirical and molecular formulas",
            body: "The **empirical formula** is the simplest whole-number ratio of atoms. To find it from percentages or masses:\n\n1. Assume 100 g, so percentages become grams.\n2. Convert each mass to moles.\n3. Divide all mole values by the smallest.\n4. If a ratio is not a whole number (for example 1.5), multiply all by a small integer (here 2).\n\nThe **molecular formula** is a whole-number multiple of the empirical formula: $\\text{multiple} = \\dfrac{\\text{molar mass of compound}}{\\text{empirical formula mass}}$.",
          },
        ],
        keyFormulas: [
          { name: "Percent by mass", statement: "$\\dfrac{\\text{mass of element}}{\\text{mass of compound}} \\times 100$" },
          { name: "Molecular formula multiple", statement: "$\\dfrac{\\text{molar mass}}{\\text{empirical formula mass}}$" },
        ],
        workedExample: {
          problem: "A compound is 85.7% C and 14.3% H by mass, with a molar mass of $42.0\\ \\text{g/mol}$. Find the empirical and molecular formulas. (C 12.0, H 1.0)",
          solution: "In 100 g: C $= 85.7/12.0 = 7.14$ mol; H $= 14.3/1.0 = 14.3$ mol. Divide by 7.14: C $= 1$, H $= 2.00$. Empirical formula $\\text{CH}_2$ (mass 14.0). Multiple $= 42.0/14.0 = 3$, so the molecular formula is $\\text{C}_3\\text{H}_6$.",
        },
      },
      questions: [
        {
          id: "chem10-u3-formulas-composition-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes the empirical formula of a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mass of one mole of the compound" },
              { id: "b", text: "The actual number of atoms in one molecule" },
              { id: "c", text: "The percent of each element by volume" },
              { id: "d", text: "The simplest whole-number ratio of atoms of each element" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms of each element in a compound." },
            ],
            steps: [
              { reasoning: "The empirical formula gives the simplest ratio, not the actual numbers; that is the molecular formula.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The simplest whole-number ratio of atoms of each element",
            commonErrors: ["Choosing (a), which describes the molecular formula.", "Confusing it with molar mass."],
            examinerNote: "B1 for simplest whole-number ratio.",
          },
        },
        {
          id: "chem10-u3-formulas-composition-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the percent by mass of oxygen in carbon dioxide, $\\text{CO}_2$. (C 12.0, O 16.0.) Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "% oxygen", answer: 72.7, unit: "%", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent composition", statement: "% element = (mass of element in one mole ÷ molar mass) × 100" },
            ],
            steps: [
              { reasoning: "Molar mass is 44.0 g/mol and the oxygen in one mole has mass $2 \\times 16.0 = 32.0\\ \\text{g}$.", working: "\\frac{32.0}{44.0} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 72.7\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72.7\\%$",
            commonErrors: ["Using 16.0 rather than 32.0 for oxygen (gives 36.4%).", "Calculating the percent of carbon (27.3%)."],
            examinerNote: "M1 for 32.0/44.0. A1 for 72.7.",
          },
        },
        {
          id: "chem10-u3-formulas-composition-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A compound is 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass, and its molar mass is $180.0\\ \\text{g/mol}$. (C 12.0, H 1.0, O 16.0.) Its empirical formula is $\\text{CH}_2\\text{O}$.\n\nCalculate the number of **carbon atoms** in one molecule of the compound.",
          response: { type: "numeric", parts: [{ label: "Carbon atoms per molecule", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Empirical formula mass", statement: "Add the atomic masses in the empirical formula." },
              { kind: "principle", name: "Molecular formula", statement: "molecular formula = empirical formula × (molar mass ÷ empirical formula mass)" },
            ],
            steps: [
              { reasoning: "Find the empirical formula mass of $\\text{CH}_2\\text{O}$.", working: "12.0 + 2(1.0) + 16.0 = 30.0\\text{ g/mol}", marks: 1, markCode: "M" },
              { reasoning: "Divide the molar mass by the empirical formula mass.", working: "\\frac{180.0}{30.0} = 6", marks: 1, markCode: "M" },
              { reasoning: "The molecular formula is $(\\text{CH}_2\\text{O})_6 = \\text{C}_6\\text{H}_{12}\\text{O}_6$.", marks: 1, markCode: "A" },
              { reasoning: "It contains 6 carbon atoms.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 carbon atoms (molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_6$)",
            commonErrors: ["Giving 30.0 or 180.0 as the answer.", "Dividing 180.0 by 12.0 to get 15."],
            examinerNote: "M1 for 30.0. M1 for 180.0/30.0. A1 for $\\text{C}_6\\text{H}_{12}\\text{O}_6$. A1 for 6.",
          },
        },
        {
          id: "chem10-u3-formulas-composition-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A hydrocarbon sample contains $6.0\\ \\text{g}$ of carbon and $1.0\\ \\text{g}$ of hydrogen. Its molar mass is $56.0\\ \\text{g/mol}$. (C 12.0, H 1.0.)",
          parts: [
            { label: "a", prompt: "Calculate the moles of carbon in the sample.", marks: 2 },
            { label: "b", prompt: "Calculate the moles of hydrogen in the sample.", marks: 2 },
            { label: "c", prompt: "Divide both mole values by the smaller one. What is the whole-number subscript of hydrogen in the empirical formula when carbon is 1?", marks: 1 },
            { label: "d", prompt: "Calculate the empirical formula mass in g/mol.", marks: 1 },
            { label: "e", prompt: "Calculate the number of hydrogen atoms in one molecule of the compound.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5, unit: "mol", tolerance: 0.005 },
              { label: "b", answer: 1, unit: "mol", tolerance: 0.01 },
              { label: "c", answer: 2 },
              { label: "d", answer: 14, unit: "g/mol", tolerance: 0.05 },
              { label: "e", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles from mass", statement: "$n = \\dfrac{m}{M}$" },
              { kind: "principle", name: "Empirical formula", statement: "Convert to moles and divide by the smallest to get the simplest whole-number ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the mass of carbon by its atomic mass.", working: "n_{\\text{C}} = \\frac{6.0}{12.0}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.50\\text{ mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the mass of hydrogen by its atomic mass.", working: "n_{\\text{H}} = \\frac{1.0}{1.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "1.0\\text{ mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide by 0.50: carbon is 1 and hydrogen is 2, so the empirical formula is $\\text{CH}_2$.", working: "\\frac{1.0}{0.50} = 2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add atomic masses in $\\text{CH}_2$.", working: "12.0 + 2(1.0) = 14.0\\text{ g/mol}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Divide the molar mass by the empirical formula mass.", working: "\\frac{56.0}{14.0} = 4", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The molecular formula is $\\text{C}_4\\text{H}_8$, so there are 8 hydrogen atoms: $4 \\times 2 = 8$.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.50\\ \\text{mol}$ (b) $1.0\\ \\text{mol}$ (c) 2 (d) $14.0\\ \\text{g/mol}$ (e) 8 (molecular formula $\\text{C}_4\\text{H}_8$)",
            commonErrors: ["Using the masses 6.0 and 1.0 directly as the ratio.", "Giving 4 as the number of hydrogen atoms (the multiple) instead of 8."],
            examinerNote: "Allow ecf in (c), (d) and (e) from earlier errors.",
          },
        },
      ],
    },
  ],
};
