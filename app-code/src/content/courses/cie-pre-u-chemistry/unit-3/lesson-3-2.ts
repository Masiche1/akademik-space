import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cipuc-u3-lesson-3-2",
  code: "3-2",
  title: "Stoichiometry and quantitative chemistry",
  goal: "I CAN perform mole calculations, balance equations, and calculate yields.",
  standards: ["Cambridge Pre-U Chemistry 9791", "Paper 1: Stoichiometry"],
  vocabulary: [
    {
      term: "Mole",
      definition: "6.02 × 10²³ particles — Avogadro's number.",
    },
    {
      term: "Molar mass",
      definition: "Mass of one mole of substance in grams.",
    },
    {
      term: "Avogadro's constant",
      definition: "6.02 × 10²³ particles per mole.",
    },
    {
      term: "Empirical formula",
      definition: "Simplest whole-number ratio of elements.",
    },
    {
      term: "Molecular formula",
      definition: "Actual number of atoms in molecule.",
    },
    {
      term: "Limiting reagent",
      definition: "Reactant completely consumed first.",
    },
    {
      term: "Excess reagent",
      definition: "Reactant not completely consumed.",
    },
    {
      term: "Theoretical yield",
      definition: "Maximum product from limiting reagent.",
    },
    {
      term: "Actual yield",
      definition: "Product actually obtained.",
    },
    {
      term: "Percentage yield",
      definition: "(Actual/theoretical) × 100.",
    },
    {
      term: "Concentration",
      definition: "Amount of solute per volume of solution.",
    },
    {
      term: "Molarity",
      definition: "Moles of solute per litre of solution.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u3-mole",
      title: "The mole concept and calculations",
      skill:
        "Perform mole calculations, empirical/molecular formulas, and stoichiometric calculations.",
      lesson: {
        sections: [
          {
            heading: "The mole concept",
            body: "**Mole**: amount of substance containing 6.02 × 10²³ particles. **Avogadro's constant**: number of particles per mole. **Molar mass**: mass of one mole in grams — numerically equal to atomic/molecular mass. **Relationships**: moles = mass / molar mass = particles / Avogadro's number = volume (gas at RTP) / 24 dm³.",
          },
          {
            heading: "Empirical and molecular formulas",
            body: "**Empirical formula**: simplest whole-number ratio. Steps: % or mass → moles → divide by smallest → whole numbers. **Molecular formula**: actual atoms — empirical × n where n = molecular mass / empirical mass. Example: CH₂O (empirical) → C₆H₁₂O₆ (molecular, n=6).",
          },
          {
            heading: "Stoichiometry",
            body: "**Balanced equation**: shows mole ratios. **Limiting reagent**: completely consumed — determines product. **Excess**: left over. **Theoretical yield**: max product from limiting reagent. **Percentage yield**: (actual/theoretical) × 100. **Concentration**: moles/volume — mol dm⁻³.",
          },
        ],
        keyFormulas: [
          {
            name: "Mole relationships",
            statement: "n = m/M = N/NA = V/24",
          },
          {
            name: "Empirical formula",
            statement: "Simplest ratio",
          },
          {
            name: "Molecular formula",
            statement: "Empirical × n",
          },
          {
            name: "Percentage yield",
            statement: "(actual/theoretical) × 100",
          },
        ],
        workedExample: {
          problem: "What is empirical formula of C₂H₆O₂?",
          solution: "Divide by 2: CH₃O — empirical formula.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-mol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One mole contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.02 × 10²³ particles" },
              { id: "b", text: "1 particle" },
              { id: "c", text: "1 gram" },
              { id: "d", text: "1 litre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mole",
                statement: "6.02 × 10²³ particles.",
              },
            ],
            steps: [
              {
                reasoning: "Mole = Avogadro's number.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 6.02 × 10²³.",
          },
        },
        {
          id: "cipuc-u3-mol-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Molar mass is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass of one mole in grams" },
              { id: "b", text: "Number of particles" },
              { id: "c", text: "Volume of gas" },
              { id: "d", text: "Concentration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Molar mass",
                statement: "Mass of one mole.",
              },
            ],
            steps: [
              { reasoning: "Molar mass = g/mol.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Mass of one mole.",
          },
        },
        {
          id: "cipuc-u3-mol-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Avogadro's constant is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6.02 × 10²³" },
              { id: "b", text: "1.6 × 10⁻¹⁹" },
              { id: "c", text: "8.31" },
              { id: "d", text: "6.02" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Avogadro's",
                statement: "6.02 × 10²³.",
              },
            ],
            steps: [
              { reasoning: "Avogadro = 6.02 × 10²³.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 6.02 × 10²³.",
          },
        },
        {
          id: "cipuc-u3-mol-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Moles = mass ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Molar mass" },
              { id: "b", text: "Volume" },
              { id: "c", text: "Concentration" },
              { id: "d", text: "Particles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole calculation",
                statement: "n = m/M.",
              },
            ],
            steps: [
              {
                reasoning: "Moles = mass/molar mass.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Molar mass.",
          },
        },
        {
          id: "cipuc-u3-mol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An empirical formula is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simplest whole-number ratio" },
              { id: "b", text: "Actual atoms" },
              { id: "c", text: "Molecular formula" },
              { id: "d", text: "No formula" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical formula",
                statement: "Simplest ratio.",
              },
            ],
            steps: [
              { reasoning: "Empirical = simplest.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Simplest ratio.",
          },
        },
        {
          id: "cipuc-u3-mol-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A molecular formula shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actual number of atoms" },
              { id: "b", text: "Simplest ratio" },
              { id: "c", text: "No atoms" },
              { id: "d", text: "Empirical only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Molecular formula",
                statement: "Actual atoms.",
              },
            ],
            steps: [
              { reasoning: "Molecular = actual.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Actual atoms.",
          },
        },
        {
          id: "cipuc-u3-mol-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A limiting reagent is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Completely consumed first" },
              { id: "b", text: "Left over" },
              { id: "c", text: "Not consumed" },
              { id: "d", text: "Catalyst" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting reagent",
                statement: "Consumed first.",
              },
            ],
            steps: [
              {
                reasoning: "Limiting = consumed first.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Consumed first.",
          },
        },
        {
          id: "cipuc-u3-mol-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Percentage yield = (actual ÷ theoretical) ×:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100" },
              { id: "b", text: "10" },
              { id: "c", text: "1000" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage yield",
                statement: "× 100.",
              },
            ],
            steps: [{ reasoning: "Yield % = × 100.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 100.",
          },
        },
        {
          id: "cipuc-u3-mol-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Concentration is measured in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mol dm⁻³" },
              { id: "b", text: "g dm⁻³" },
              { id: "c", text: "mol cm⁻³" },
              { id: "d", text: "g cm⁻³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Concentration",
                statement: "mol dm⁻³.",
              },
            ],
            steps: [{ reasoning: "Conc = mol dm⁻³.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) mol dm⁻³.",
          },
        },
        {
          id: "cipuc-u3-mol-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At RTP, one mole of gas occupies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 dm³" },
              { id: "b", text: "22.4 dm³" },
              { id: "c", text: "10 dm³" },
              { id: "d", text: "1 dm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume",
                statement: "24 dm³ at RTP.",
              },
            ],
            steps: [{ reasoning: "RTP = 24 dm³.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 24 dm³.",
          },
        },
        {
          id: "cipuc-u3-mol-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Molar mass of H₂O is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18 g/mol" },
              { id: "b", text: "16 g/mol" },
              { id: "c", text: "20 g/mol" },
              { id: "d", text: "10 g/mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "H₂O molar mass",
                statement: "18 g/mol.",
              },
            ],
            steps: [{ reasoning: "H₂O = 18.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 18 g/mol.",
          },
        },
        {
          id: "cipuc-u3-mol-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Moles of particles = particles ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avogadro's constant" },
              { id: "b", text: "Molar mass" },
              { id: "c", text: "Volume" },
              { id: "d", text: "Mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Particle to mole",
                statement: "÷ Avogadro's.",
              },
            ],
            steps: [
              {
                reasoning: "Particles → moles = ÷ NA.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Avogadro's constant.",
          },
        },
        {
          id: "cipuc-u3-mol-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Moles of gas = volume ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 dm³ (at RTP)" },
              { id: "b", text: "22.4 dm³" },
              { id: "c", text: "10 dm³" },
              { id: "d", text: "1 dm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas to mole",
                statement: "÷ 24 dm³.",
              },
            ],
            steps: [
              { reasoning: "Gas → moles = ÷ 24.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 24 dm³.",
          },
        },
        {
          id: "cipuc-u3-mol-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Moles of solute = concentration ×:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concentration calc",
                statement: "n = c × V.",
              },
            ],
            steps: [{ reasoning: "Moles = c × V.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Volume.",
          },
        },
        {
          id: "cipuc-u3-mol-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "An excess reagent is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not completely consumed" },
              { id: "b", text: "Consumed first" },
              { id: "c", text: "Catalyst" },
              { id: "d", text: "Product" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Excess reagent",
                statement: "Left over.",
              },
            ],
            steps: [
              { reasoning: "Excess = left over.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Not consumed.",
          },
        },
        {
          id: "cipuc-u3-mol-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Theoretical yield is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum product from limiting reagent" },
              { id: "b", text: "Actual product" },
              { id: "c", text: "No product" },
              { id: "d", text: "Catalyst" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theoretical yield",
                statement: "Max product.",
              },
            ],
            steps: [
              { reasoning: "Theoretical = max.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Maximum product.",
          },
        },
        {
          id: "cipuc-u3-mol-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Actual yield is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Product actually obtained" },
              { id: "b", text: "Maximum product" },
              { id: "c", text: "No product" },
              { id: "d", text: "Reactant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Actual yield",
                statement: "Product obtained.",
              },
            ],
            steps: [
              { reasoning: "Actual = obtained.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Product obtained.",
          },
        },
        {
          id: "cipuc-u3-mol-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A balanced equation shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mole ratios of reactants and products" },
              { id: "b", text: "Mass ratios only" },
              { id: "c", text: "Volume ratios" },
              { id: "d", text: "No ratios" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balanced equation",
                statement: "Mole ratios.",
              },
            ],
            steps: [
              { reasoning: "Balanced = mole ratios.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Mole ratios.",
          },
        },
        {
          id: "cipuc-u3-mol-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Empirical formula of CH₄O is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CH₄O" },
              { id: "b", text: "CH₂O" },
              { id: "c", text: "C₂H₈O₂" },
              { id: "d", text: "CHO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CH₄O empirical",
                statement: "Already simplest.",
              },
            ],
            steps: [{ reasoning: "CH₄O = simplest.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) CH₄O.",
          },
        },
        {
          id: "cipuc-u3-mol-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between empirical and molecular formula.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Empirical vs molecular",
                statement: "Simplest vs actual.",
              },
            ],
            steps: [
              {
                reasoning: "Empirical: simplest whole-number ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Molecular: actual number of atoms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Empirical = simplest; molecular = actual.",
          },
        },
        {
          id: "cipuc-u3-mol-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways to calculate moles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mole calculations",
                statement: "Mass/molarmass, particles/NA.",
              },
            ],
            steps: [
              {
                reasoning: "Moles = mass ÷ molar mass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moles = particles ÷ Avogadro's constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mass/M or particles/NA.",
          },
        },
        {
          id: "cipuc-u3-mol-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to find empirical formula from percentage composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Empirical calculation",
                statement: "% → moles → ratio.",
              },
            ],
            steps: [
              {
                reasoning: "Convert % to mass (assume 100g).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert mass to moles (÷ atomic mass).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by smallest → whole number ratio.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "% → mass → moles → ratio.",
          },
        },
        {
          id: "cipuc-u3-mol-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate moles in 18g of water (H₂O).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mole calculation",
                statement: "n = m/M.",
              },
            ],
            steps: [
              {
                reasoning: "Molar mass H₂O = 18 g/mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "n = mass ÷ molar mass = 18 ÷ 18 = 1 mole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1 mole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contains 6.02 × 10²³ molecules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1 mole.",
          },
        },
        {
          id: "cipuc-u3-mol-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Molar mass of CO₂ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "44 g/mol" },
              { id: "b", text: "32 g/mol" },
              { id: "c", text: "28 g/mol" },
              { id: "d", text: "18 g/mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CO₂ molar mass",
                statement: "44 g/mol.",
              },
            ],
            steps: [{ reasoning: "CO₂ = 44.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 44 g/mol.",
          },
        },
        {
          id: "cipuc-u3-mol-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is molarity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Molarity",
                statement: "Moles per litre.",
              },
            ],
            steps: [
              {
                reasoning: "Amount of solute per litre of solution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Units: mol dm⁻³.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Moles per litre — mol dm⁻³.",
          },
        },
        {
          id: "cipuc-u3-mol-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how limiting reagent determines product amount.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting reagent",
                statement: "Consumed first → stops reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Limiting reagent completely consumed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reaction stops — no more product can form.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Determines theoretical yield.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Consumed first → determines yield.",
          },
        },
        {
          id: "cipuc-u3-mol-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Moles of gas at RTP = volume ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 dm³" },
              { id: "b", text: "22.4 dm³" },
              { id: "c", text: "10 dm³" },
              { id: "d", text: "1 dm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas volume", statement: "÷ 24 dm³." },
            ],
            steps: [
              { reasoning: "Gas → moles = ÷ 24.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 24 dm³.",
          },
        },
        {
          id: "cipuc-u3-mol-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between theoretical and actual yield?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Yield types",
                statement: "Max vs obtained.",
              },
            ],
            steps: [
              {
                reasoning: "Theoretical: calculated maximum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Actual: experimentally obtained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Theoretical = max; actual = obtained.",
          },
        },
        {
          id: "cipuc-u3-mol-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "2H₂ + O₂ → 2H₂O. How many moles of water from 4 moles H₂?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stoichiometric calculation",
                statement: "Mole ratios from equation.",
              },
            ],
            steps: [
              {
                reasoning: "Ratio: 2 H₂ : 2 H₂O = 1:1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "4 moles H₂ → 4 moles H₂O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need 2 moles O₂ for 4 moles H₂.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 4 moles H₂O.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 moles H₂O.",
          },
        },
        {
          id: "cipuc-u3-mol-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is percentage yield always less than 100%?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Yield < 100%",
                statement: "Losses occur.",
              },
            ],
            steps: [
              {
                reasoning: "Product lost during transfer/purification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Side reactions may occur.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Losses + side reactions → <100%.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-quant",
      title: "Quantitative chemistry: solutions and titrations",
      skill:
        "Calculate concentrations, perform titrations, and solve quantitative problems.",
      lesson: {
        sections: [
          {
            heading: "Solution chemistry",
            body: "**Concentration**: moles of solute per litre — mol dm⁻³. **Preparation**: dissolve in solvent, transfer to volumetric flask, make up to mark. **Dilution**: c₁V₁ = c₂V₂ — concentration decreases, volume increases. **Units**: mol dm⁻³ = M.",
          },
          {
            heading: "Titrations",
            body: "**Titration**: determine concentration of unknown using known solution. **Endpoint**: indicator changes colour — equivalence point. **Calculation**: moles acid = moles base (1:1) or ratio from equation. **Burette**: delivers known volume; **pipette**: delivers fixed volume; **flask**: receives solution.",
          },
          {
            heading: "Gas volumes and ideal gas",
            body: "**Gas at RTP**: 1 mole = 24 dm³. **Avogadro's law**: equal volumes = equal moles. **Molar volume**: V/n = 24 dm³/mol at RTP. **Ideal gas**: PV = nRT — pressure × volume = moles × gas constant × temperature.",
          },
        ],
        keyFormulas: [
          {
            name: "Concentration",
            statement: "c = n/V — mol dm⁻³",
          },
          {
            name: "Dilution",
            statement: "c₁V₁ = c₂V₂",
          },
          {
            name: "Titration",
            statement: "Moles acid = moles base",
          },
          {
            name: "Gas volume",
            statement: "1 mole = 24 dm³ at RTP",
          },
        ],
        workedExample: {
          problem: "What volume of 0.1 M HCl contains 0.02 moles?",
          solution: "V = n/c = 0.02/0.1 = 0.2 dm³ = 200 cm³.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-quant-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Concentration = moles ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concentration",
                statement: "c = n/V.",
              },
            ],
            steps: [
              { reasoning: "Conc = moles/volume.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Volume.",
          },
        },
        {
          id: "cipuc-u3-quant-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A titration determines:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concentration of unknown solution" },
              { id: "b", text: "Mass of solid" },
              { id: "c", text: "Volume of gas" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Titration",
                statement: "Finds concentration.",
              },
            ],
            steps: [
              {
                reasoning: "Titration = concentration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Concentration of unknown.",
          },
        },
        {
          id: "cipuc-u3-quant-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The endpoint in titration is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When indicator changes colour" },
              { id: "b", text: "When solution boils" },
              { id: "c", text: "When solid forms" },
              { id: "d", text: "When gas evolves" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endpoint",
                statement: "Indicator colour change.",
              },
            ],
            steps: [
              {
                reasoning: "Endpoint = colour change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Indicator colour change.",
          },
        },
        {
          id: "cipuc-u3-quant-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A burette is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deliver known volume of solution" },
              { id: "b", text: "Measure mass" },
              { id: "c", text: "Heat solution" },
              { id: "d", text: "Filter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Burette",
                statement: "Delivers volume.",
              },
            ],
            steps: [
              {
                reasoning: "Burette = volume delivery.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Deliver known volume.",
          },
        },
        {
          id: "cipuc-u3-quant-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pipette is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deliver fixed volume of solution" },
              { id: "b", text: "Measure mass" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Filter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pipette",
                statement: "Fixed volume.",
              },
            ],
            steps: [
              { reasoning: "Pipette = fixed volume.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Fixed volume.",
          },
        },
        {
          id: "cipuc-u3-quant-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dilution follows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "c₁V₁ = c₂V₂" },
              { id: "b", text: "c₁V₂ = c₂V₁" },
              { id: "c", text: "c₁ + c₂ = V" },
              { id: "d", text: "No formula" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dilution",
                statement: "c₁V₁ = c₂V₂.",
              },
            ],
            steps: [
              { reasoning: "Dilution = c₁V₁ = c₂V₂.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) c₁V₁ = c₂V₂.",
          },
        },
        {
          id: "cipuc-u3-quant-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a 1:1 acid-base titration, moles of acid equal:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moles of base" },
              { id: "b", text: "Twice moles of base" },
              { id: "c", text: "Half moles of base" },
              { id: "d", text: "No relation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Titration stoichiometry",
                statement: "1:1 = equal moles.",
              },
            ],
            steps: [
              { reasoning: "1:1 = equal moles.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Moles of base.",
          },
        },
        {
          id: "cipuc-u3-quant-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ideal gas law is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PV = nRT" },
              { id: "b", text: "P = nRT" },
              { id: "c", text: "V = nRT" },
              { id: "d", text: "PV = RT" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ideal gas", statement: "PV = nRT." },
            ],
            steps: [
              { reasoning: "Ideal gas = PV=nRT.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) PV = nRT.",
          },
        },
        {
          id: "cipuc-u3-quant-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Units of concentration are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "mol dm⁻³" },
              { id: "b", text: "g dm⁻³" },
              { id: "c", text: "mol cm⁻³" },
              { id: "d", text: "g cm⁻³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Concentration units",
                statement: "mol dm⁻³.",
              },
            ],
            steps: [{ reasoning: "Conc = mol dm⁻³.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) mol dm⁻³.",
          },
        },
        {
          id: "cipuc-u3-quant-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A volumetric flask is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prepare solution to exact volume" },
              { id: "b", text: "Measure mass" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Filter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Volumetric flask",
                statement: "Exact volume.",
              },
            ],
            steps: [
              {
                reasoning: "Volumetric = exact volume.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Exact volume.",
          },
        },
        {
          id: "cipuc-u3-quant-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Moles = concentration ×:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moles from conc",
                statement: "n = cV.",
              },
            ],
            steps: [{ reasoning: "Moles = c × V.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Volume.",
          },
        },
        {
          id: "cipuc-u3-quant-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Volume = moles ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concentration" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volume from moles",
                statement: "V = n/c.",
              },
            ],
            steps: [{ reasoning: "V = n/c.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Concentration.",
          },
        },
        {
          id: "cipuc-u3-quant-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Concentration = moles ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Pressure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Concentration",
                statement: "c = n/V.",
              },
            ],
            steps: [{ reasoning: "c = n/V.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Volume.",
          },
        },
        {
          id: "cipuc-u3-quant-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In titration, equivalence point is when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moles acid = moles base" },
              { id: "b", text: "Volumes equal" },
              { id: "c", text: "Concentrations equal" },
              { id: "d", text: "pH = 7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equivalence point",
                statement: "Stoichiometric amounts.",
              },
            ],
            steps: [
              {
                reasoning: "Equivalence = stoichiometric.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Moles acid = moles base.",
          },
        },
        {
          id: "cipuc-u3-quant-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A standard solution has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Known concentration" },
              { id: "b", text: "Unknown concentration" },
              { id: "c", text: "No concentration" },
              { id: "d", text: "Variable concentration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard solution",
                statement: "Known concentration.",
              },
            ],
            steps: [
              { reasoning: "Standard = known.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Known concentration.",
          },
        },
        {
          id: "cipuc-u3-quant-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "An indicator in titration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changes colour at endpoint" },
              { id: "b", text: "Reacts with acid only" },
              { id: "c", text: "Reacts with base only" },
              { id: "d", text: "No function" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indicator",
                statement: "Colour change.",
              },
            ],
            steps: [
              {
                reasoning: "Indicator = colour change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Changes colour.",
          },
        },
        {
          id: "cipuc-u3-quant-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Molar volume at RTP is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 dm³/mol" },
              { id: "b", text: "22.4 dm³/mol" },
              { id: "c", text: "10 dm³/mol" },
              { id: "d", text: "1 dm³/mol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molar volume",
                statement: "24 dm³/mol.",
              },
            ],
            steps: [
              { reasoning: "RTP = 24 dm³/mol.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 24 dm³/mol.",
          },
        },
        {
          id: "cipuc-u3-quant-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Avogadro's law states:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal volumes = equal moles (same T,P)" },
              { id: "b", text: "Equal masses" },
              { id: "c", text: "Equal temperatures" },
              { id: "d", text: "Equal pressures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avogadro's law",
                statement: "V ∝ n.",
              },
            ],
            steps: [
              { reasoning: "Avogadro = V ∝ n.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Equal volumes = equal moles.",
          },
        },
        {
          id: "cipuc-u3-quant-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A conical flask is used in titration to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mix solutions during titration" },
              { id: "b", text: "Measure volume" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Filter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conical flask",
                statement: "Mixing vessel.",
              },
            ],
            steps: [
              { reasoning: "Conical = mixing.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Mix solutions.",
          },
        },
        {
          id: "cipuc-u3-quant-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between endpoint and equivalence point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Endpoint vs equivalence",
                statement: "Observed vs theoretical.",
              },
            ],
            steps: [
              {
                reasoning: "Equivalence: stoichiometric amounts (theoretical).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Endpoint: when indicator changes (observed).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Equivalence = theoretical; endpoint = observed.",
          },
        },
        {
          id: "cipuc-u3-quant-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two uses of titration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Titration uses",
                statement: "Concentration, purity.",
              },
            ],
            steps: [
              {
                reasoning: "Determine concentration of unknown.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Determine purity of substance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Concentration + purity.",
          },
        },
        {
          id: "cipuc-u3-quant-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how dilution affects concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dilution",
                statement: "More solvent → lower concentration.",
              },
            ],
            steps: [
              {
                reasoning: "Adding solvent increases volume.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moles of solute unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "c = n/V — higher V = lower c.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "More solvent → lower concentration.",
          },
        },
        {
          id: "cipuc-u3-quant-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "25 cm³ of 0.1 M NaOH neutralises 20 cm³ HCl. Calculate HCl concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Titration calculation",
                statement: "n = cV.",
              },
            ],
            steps: [
              {
                reasoning: "Moles NaOH = 0.1 × 0.025 = 0.0025 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1:1 ratio → moles HCl = 0.0025 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "c = n/V = 0.0025/0.020 = 0.125 mol dm⁻³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "HCl concentration = 0.125 M.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.125 mol dm⁻³.",
          },
        },
        {
          id: "cipuc-u3-quant-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Phenolphthalein is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An acid-base indicator" },
              { id: "b", text: "A catalyst" },
              { id: "c", text: "A reactant" },
              { id: "d", text: "A product" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phenolphthalein",
                statement: "Acid-base indicator.",
              },
            ],
            steps: [
              {
                reasoning: "Phenolphthalein = indicator.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Indicator.",
          },
        },
        {
          id: "cipuc-u3-quant-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a standard solution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard solution",
                statement: "Known concentration.",
              },
            ],
            steps: [
              {
                reasoning: "Solution with accurately known concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used as reference in titrations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Known concentration solution.",
          },
        },
        {
          id: "cipuc-u3-quant-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the steps in performing a titration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Titration procedure",
                statement: "Standard + unknown + indicator.",
              },
            ],
            steps: [
              {
                reasoning: "Pipette known volume of one solution into flask.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add indicator + other solution from burette.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read volume at endpoint — calculate concentration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pipette + indicator + burette + endpoint.",
          },
        },
        {
          id: "cipuc-u3-quant-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Moles of gas at RTP = volume ÷:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 dm³" },
              { id: "b", text: "22.4 dm³" },
              { id: "c", text: "10 dm³" },
              { id: "d", text: "1 dm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas volume", statement: "÷ 24 dm³." },
            ],
            steps: [
              { reasoning: "Gas → moles = ÷ 24.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 24 dm³.",
          },
        },
        {
          id: "cipuc-u3-quant-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the relationship between volume and moles for gases at constant T,P?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gas volume-moles",
                statement: "V ∝ n.",
              },
            ],
            steps: [
              {
                reasoning: "Avogadro's law: equal volumes = equal moles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "V ∝ n at constant T and P.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "V ∝ n — Avogadro's law.",
          },
        },
        {
          id: "cipuc-u3-quant-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate moles in 2.0 dm³ of 0.5 M HCl.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Concentration calculation",
                statement: "n = cV.",
              },
            ],
            steps: [
              {
                reasoning: "c = 0.5 mol dm⁻³, V = 2.0 dm³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "n = c × V = 0.5 × 2.0 = 1.0 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1.0 mole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contains 6.02 × 10²³ HCl molecules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1.0 mole.",
          },
        },
        {
          id: "cipuc-u3-quant-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why must solutions be made up to the mark in volumetric flask?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volumetric flask",
                statement: "Exact volume needed.",
              },
            ],
            steps: [
              {
                reasoning: "Concentration depends on exact volume.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mark ensures accurate concentration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Exact volume → accurate concentration.",
          },
        },
      ],
    },
  ],
};
