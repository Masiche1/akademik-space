import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "chem10-u8-lesson-8-1",
  code: "8-1",
  title: "Gas and Solution Stoichiometry",
  goal: "I CAN apply stoichiometry to gases and solutions using molar volume and molarity.",
  standards: [
    "HS-PS1-7",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Molar volume",
      definition: "Volume of 1 mole of gas at STP = 22.4 L.",
    },
    {
      term: "STP",
      definition: "Standard Temperature and Pressure (0°C, 1 atm).",
    },
    { term: "Molarity", definition: "Moles of solute per liter of solution." },
    {
      term: "Gas stoichiometry",
      definition: "Using gas volumes/moles in reaction ratios.",
    },
    {
      term: "Solution stoichiometry",
      definition: "Using molarity to find moles in reactions.",
    },
    {
      term: "Avogadro's law",
      definition: "Equal volumes of gases contain equal moles at same T,P.",
    },
  ],
  concepts: [
    {
      id: "chem10-u8-gas-stoich",
      title: "Gas stoichiometry",
      skill: "Use molar volume and mole ratios to solve gas reaction problems.",
      lesson: {
        sections: [
          {
            heading: "Molar volume",
            body: "At STP (0°C, 1 atm): 1 mole of any gas = **22.4 L**.\n\n- Use for gas volume ↔ moles conversion.\n- Non-STP: use PV = nRT instead.",
          },
          {
            heading: "Gas stoichiometry steps",
            body: "1. Balance equation.\n2. Convert given quantity to moles.\n3. Use mole ratio.\n4. Convert to desired units.\n\nExample: 2H₂ + O₂ → 2H₂O. 44.8 L H₂ = 2 mol H₂ → produces 2 mol H₂O.",
          },
        ],
        keyFormulas: [
          { name: "Molar volume", statement: "22.4 L/mol at STP" },
          { name: "Gas moles", statement: "$n = V/22.4$ at STP" },
          {
            name: "Mole ratio",
            statement: "From balanced equation coefficients",
          },
        ],
        workedExample: {
          problem:
            "How many liters of O₂ at STP react with 6.0 mol H₂? (2H₂ + O₂ → 2H₂O)",
          solution:
            "6 mol H₂ × (1 mol O₂/2 mol H₂) = 3 mol O₂ → 3 × 22.4 = 67.2 L.",
        },
      },
      questions: [
        {
          id: "chem10-u8-gas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the molar volume of a gas at STP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11.2 L" },
              { id: "b", text: "22.4 L" },
              { id: "c", text: "44.8 L" },
              { id: "d", text: "224 L" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molar volume",
                statement: "22.4 L/mol at STP.",
              },
            ],
            steps: [
              {
                reasoning: "1 mol gas = 22.4 L at STP.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 22.4 L",
            commonErrors: ["Confusing with molar mass."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-gas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many moles of gas occupy 44.8 L at STP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = V/22.4$" },
            ],
            steps: [
              { reasoning: "$n = 44.8/22.4$.", marks: 1, markCode: "M" },
              { reasoning: "= 2.0 mol.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.0 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.0 mol.",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u8-gas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "2H₂ + O₂ → 2H₂O. If 11.2 L O₂ at STP reacts, how many liters of H₂ are needed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gas stoichiometry",
                statement: "Volume ratio = mole ratio.",
              },
            ],
            steps: [
              { reasoning: "11.2 L O₂ = 0.5 mol O₂.", marks: 1, markCode: "M" },
              {
                reasoning: "0.5 mol O₂ needs 1.0 mol H₂ (2:1 ratio).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "1.0 mol H₂ = 22.4 L.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 22.4 L H₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22.4 L H₂.",
            commonErrors: ["Wrong mole ratio."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u8-gas-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "CH₄ + 2O₂ → CO₂ + 2H₂O. 4.0 g CH₄ burns completely.",
          parts: [
            { label: "a", prompt: "Moles of CH₄ (M=16)?", marks: 2 },
            { label: "b", prompt: "Moles of O₂ needed?", marks: 3 },
            { label: "c", prompt: "Volume of O₂ at STP?", marks: 2 },
            { label: "d", prompt: "Volume of CO₂ produced at STP?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stoichiometry",
                statement: "Moles → ratio → target.",
              },
              {
                kind: "formula",
                name: "Gas volume",
                statement: "V = n × 22.4 at STP.",
              },
            ],
            steps: [
              {
                reasoning: "$n = 4.0/16 = 0.25$ mol CH₄.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "0.25 × 2 = 0.50 mol O₂.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.50 mol O₂.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$V = 0.50 \\times 22.4 = 11.2$ L O₂.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "0.25 mol CO₂ × 22.4 = 5.6 L.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 5.6 L CO₂.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 0.25 mol (b) 0.50 mol (c) 11.2 L (d) 5.6 L.",
            commonErrors: ["Wrong mole ratios."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u8-solution-stoich",
      title: "Solution stoichiometry",
      skill: "Use molarity to solve reactions in solution.",
      lesson: {
        sections: [
          {
            heading: "Molarity",
            body: "$$M = \frac{\text{moles solute}}{\text{liters solution}}$$\n\nTo find moles: $n = M \times V$ (V in liters).",
          },
          {
            heading: "Solution stoichiometry",
            body: "1. Convert volumes to liters.\n2. Calculate moles of each reactant ($n = MV$).\n3. Use mole ratio from equation.\n4. Convert to desired units.",
          },
        ],
        keyFormulas: [
          { name: "Molarity", statement: "$M = n/V$" },
          { name: "Moles", statement: "$n = M \times V$" },
          { name: "Dilution", statement: "$M_1V_1 = M_2V_2$" },
        ],
        workedExample: {
          problem: "How many moles of HCl in 250 mL of 0.50 M solution?",
          solution: "$n = 0.50 \\times 0.250 = 0.125$ mol.",
        },
      },
      questions: [
        {
          id: "chem10-u8-solution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is molarity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grams per liter" },
              { id: "b", text: "Moles per liter" },
              { id: "c", text: "Liters per mole" },
              { id: "d", text: "Percent by mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Molarity",
                statement: "Moles solute/L solution.",
              },
            ],
            steps: [{ reasoning: "M = mol/L.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Moles per liter",
            commonErrors: ["Confusing with molality."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-solution-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many moles of NaOH are in 500 mL of 0.20 M solution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles",
                statement: "$n = M \\times V$",
              },
            ],
            steps: [
              { reasoning: "V = 0.500 L.", marks: 1, markCode: "M" },
              {
                reasoning: "$n = 0.20 \\times 0.500 = 0.10$ mol.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.10 mol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.10 mol.",
            commonErrors: ["Using mL instead of L."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u8-solution-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "25.0 mL of 0.200 M HCl reacts with NaOH. How many moles of NaOH needed? (1:1)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution stoichiometry",
                statement: "$n = MV$ then ratio.",
              },
            ],
            steps: [
              {
                reasoning: "$n_{HCl} = 0.200 \\times 0.0250 = 0.00500$ mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1:1 ratio → 0.00500 mol NaOH.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.00500 mol.", marks: 1, markCode: "M" },
              { reasoning: "Or 5.00 mmol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.00500 mol NaOH.",
            commonErrors: ["Volume unit error."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u8-solution-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "100 mL of 0.50 M H₂SO₄ reacts with excess NaOH.",
          parts: [
            { label: "a", prompt: "Moles H₂SO₄?", marks: 2 },
            { label: "b", prompt: "Balanced equation?", marks: 2 },
            { label: "c", prompt: "Moles NaOH needed?", marks: 3 },
            {
              label: "d",
              prompt: "If NaOH is 0.80 M, what volume needed?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stoichiometry",
                statement: "n=MV, then ratio.",
              },
            ],
            steps: [
              {
                reasoning: "$n = 0.50 \\times 0.100 = 0.050$ mol H₂SO₄.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "0.050 × 2 = 0.100 mol NaOH.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 0.100 mol.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "$V = n/M = 0.100/0.80 = 0.125$ L = 125 mL.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 125 mL.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 0.050 mol (b) 2NaOH (c) 0.100 mol (d) 125 mL.",
            commonErrors: ["Wrong stoichiometric ratio."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u8-formulas",
      title: "Empirical and molecular formulas",
      skill:
        "Determine empirical and molecular formulas from composition data.",
      lesson: {
        sections: [
          {
            heading: "Empirical formula",
            body: "Simplest whole-number ratio of atoms.\n\nSteps:\n1. Assume 100 g sample → mass % = grams.\n2. Convert to moles ($n = m/M$).\n3. Divide by smallest.\n4. Round to whole numbers.",
          },
          {
            heading: "Molecular formula",
            body: "Actual atom ratio = empirical formula × n.\n\n$n = \frac{\text{molar mass}}{\text{empirical mass}}$\n\nMolecular formula may be multiple of empirical.",
          },
        ],
        keyFormulas: [
          { name: "Empirical", statement: "Simplest ratio" },
          { name: "Molecular", statement: "Empirical × n" },
          {
            name: "Molar mass",
            statement: "$n = M_{molecular}/M_{empirical}$",
          },
        ],
        workedExample: {
          problem:
            "Compound is 40% C, 6.7% H, 53.3% O (M=180). Find molecular formula.",
          solution: "Empirical: CH₂O (30 g/mol). n=180/30=6 → C₆H₁₂O₆.",
        },
      },
      questions: [
        {
          id: "chem10-u8-formula-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an empirical formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Actual atom ratio" },
              { id: "b", text: "Simplest whole-number ratio" },
              { id: "c", text: "Molecular formula" },
              { id: "d", text: "Structural formula" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical",
                statement: "Simplest ratio.",
              },
            ],
            steps: [
              {
                reasoning: "Empirical = reduced ratio.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Simplest whole-number ratio",
            commonErrors: ["Confusing with molecular."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-formula-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A compound is 85.7% C and 14.3% H. Find empirical formula.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Empirical",
                statement: "Assume 100g → moles → ratio.",
              },
            ],
            steps: [
              {
                reasoning: "C: 85.7/12 = 7.14 mol; H: 14.3/1 = 14.3 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by 7.14: C=1, H=2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Empirical = CH₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CH₂.",
            commonErrors: ["Wrong molar masses."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u8-formula-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Empirical formula CH₂O has molar mass 30 g/mol. Molecular formula mass is 180 g/mol. What's the molecular formula?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molecular",
                statement: "Empirical × n.",
              },
            ],
            steps: [
              { reasoning: "$n = 180/30 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "CH₂O × 6 = C₆H₁₂O₆.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: C₆H₁₂O₆ (glucose).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: 6×12 + 12×1 + 6×16 = 180.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "C₆H₁₂O₆.",
            commonErrors: ["Wrong multiplier."],
            examinerNote: "M2, A1, R1.",
          },
        },
        {
          id: "chem10-u8-formula-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A compound contains 40.0% C, 6.67% H, 53.3% O by mass. Molar mass = 180 g/mol.",
          parts: [
            { label: "a", prompt: "Find empirical formula.", marks: 5 },
            { label: "b", prompt: "Find molecular formula.", marks: 3 },
            { label: "c", prompt: "Verify molar mass.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Empirical→Molecular",
                statement: "Ratio → multiplier → formula.",
              },
            ],
            steps: [
              {
                reasoning: "C: 40/12=3.33; H: 6.67/1=6.67; O: 53.3/16=3.33.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Divide by 3.33: C=1, H=2, O=1 → CH₂O.",
                marks: 2,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Empirical mass = 30; n = 180/30 = 6.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Molecular = C₆H₁₂O₆.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "6(12)+12(1)+6(16) = 72+12+96 = 180 ✓.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Molar mass verified.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) CH₂O (b) C₆H₁₂O₆ (c) 180 verified.",
            commonErrors: ["Not finding empirical first."],
            examinerNote: "5+3+2 = 10.",
          },
        },
      ],
    },
  ],
};
