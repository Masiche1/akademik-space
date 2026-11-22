import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ech10-u2-lesson-2-1",
  code: "2-1",
  title: "The Mole and Reacting Quantities",
  goal: "I CAN use the mole to calculate reacting masses, find empirical and molecular formulae and calculate percentage yield.",
  standards: ["4CH1 1.40", "4CH1 1.41", "4CH1 1.42", "4CH1 1.43"],
  vocabulary: [
    { term: "Mole", definition: "The unit for amount of substance. One mole of a substance contains $6.02 \\times 10^{23}$ particles and has a mass in grams equal to its relative formula mass." },
    { term: "Relative formula mass ($M_r$)", definition: "The sum of the relative atomic masses of all the atoms in the formula of a substance." },
    { term: "Empirical formula", definition: "The simplest whole-number ratio of atoms of each element in a compound." },
    { term: "Molecular formula", definition: "The actual number of atoms of each element in one molecule of a compound." },
    { term: "Theoretical yield", definition: "The maximum mass of product that could be made, calculated from the balanced equation." },
    { term: "Percentage yield", definition: "The actual mass of product obtained divided by the theoretical yield, multiplied by 100." },
  ],
  concepts: [
    {
      id: "ech10-u2-mole-reacting-masses",
      title: "The mole and reacting masses",
      skill: "Convert between mass and moles and use a balanced equation to calculate the mass of a reactant or product.",
      lesson: {
        sections: [
          {
            heading: "Moles, mass and relative formula mass",
            body: "Atoms are far too small to count, so chemists count them in **moles**. The mass of one mole of a substance in grams is numerically equal to its relative atomic mass ($A_r$) or relative formula mass ($M_r$).\n\nFor example, $M_r$ of $\\text{CaCO}_3 = 40 + 12 + (3 \\times 16) = 100$, so one mole of calcium carbonate has a mass of $100\\text{ g}$.\n\nThe amount in moles is found using:\n\n$$\\text{moles} = \\frac{\\text{mass (g)}}{M_r}$$\n\nRearranged, $\\text{mass} = \\text{moles} \\times M_r$.",
          },
          {
            heading: "Using a balanced equation",
            body: "The coefficients in a balanced equation give the **ratio of moles** of reactants and products. In $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$, one mole of magnesium reacts with two moles of hydrochloric acid and makes one mole of magnesium chloride.\n\nTo find a reacting mass:\n\n- work out the moles of the substance you are given\n- use the equation ratio to find the moles of the substance you want\n- convert those moles to a mass using $M_r$\n\nMass is conserved in every reaction, so the total mass of reactants equals the total mass of products.",
          },
        ],
        keyFormulas: [
          { name: "Moles from mass", statement: "$\\text{moles} = \\frac{\\text{mass (g)}}{M_r}$" },
          { name: "Mass from moles", statement: "$\\text{mass (g)} = \\text{moles} \\times M_r$" },
          { name: "Avogadro constant", statement: "$1\\text{ mol} = 6.02 \\times 10^{23}$ particles" },
        ],
        workedExample: {
          problem: "Calculate the mass of sodium chloride made when $2.3\\text{ g}$ of sodium reacts completely with chlorine. $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$. ($A_r$: Na = 23, Cl = 35.5)",
          solution: "Moles of Na $= \\frac{2.3}{23} = 0.10\\text{ mol}$. The ratio Na : NaCl is $2 : 2$, so $0.10\\text{ mol}$ of NaCl is made. $M_r$ of NaCl $= 23 + 35.5 = 58.5$. Mass $= 0.10 \\times 58.5 = 5.85\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "ech10-u2-mole-reacting-masses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the amount, in moles, in $8.0\\text{ g}$ of sodium hydroxide, NaOH. ($A_r$: Na = 23, O = 16, H = 1)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$48\\text{ mol}$" },
              { id: "b", text: "$320\\text{ mol}$" },
              { id: "c", text: "$5\\text{ mol}$" },
              { id: "d", text: "$0.2\\text{ mol}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { reasoning: "$M_r$ of NaOH is $23 + 16 + 1 = 40$. Divide the mass by $M_r$.", working: "\\frac{8.0}{40} = 0.2\\text{ mol}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $0.2\\text{ mol}$",
            commonErrors: ["Dividing $M_r$ by the mass to get 5.", "Multiplying mass by $M_r$ to get 320.", "Adding the mass and $M_r$ to get 48."],
            examinerNote: "B1 for 0.2.",
          },
        },
        {
          id: "ech10-u2-mole-reacting-masses-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the mass of $0.25\\text{ mol}$ of calcium carbonate, $\\text{CaCO}_3$. ($A_r$: Ca = 40, C = 12, O = 16)",
          response: { type: "numeric", parts: [{ label: "Mass", answer: 25, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass from moles", statement: "$\\text{mass} = \\text{moles} \\times M_r$" },
            ],
            steps: [
              { reasoning: "Add the relative atomic masses to find $M_r$.", working: "M_r = 40 + 12 + 3 \\times 16 = 100", marks: 1, markCode: "M" },
              { reasoning: "Multiply moles by $M_r$.", working: "0.25 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "25\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\text{ g}$",
            commonErrors: ["Using only one oxygen atom, giving $M_r = 68$ and a mass of 17 g.", "Dividing $0.25$ by $M_r$ instead of multiplying."],
            examinerNote: "M1 for $M_r = 100$. M1 for moles $\\times M_r$, allow ecf. A1 for 25 with unit g.",
          },
        },
        {
          id: "ech10-u2-mole-reacting-masses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Magnesium reacts with hydrochloric acid: $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$. Calculate the mass of magnesium chloride made when $1.2\\text{ g}$ of magnesium reacts completely with excess acid. ($A_r$: Mg = 24, Cl = 35.5)",
          response: { type: "numeric", parts: [{ label: "Mass of magnesium chloride", answer: 4.75, tolerance: 0.01, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "law", name: "Conservation of mass", statement: "The balanced equation gives the mole ratio in which substances react and are produced." },
            ],
            steps: [
              { reasoning: "Find the moles of magnesium.", working: "\\frac{1.2}{24} = 0.05\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio Mg : $\\text{MgCl}_2$ is $1 : 1$, so the moles of $\\text{MgCl}_2$ are the same.", working: "n(\\text{MgCl}_2) = 0.05\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Find $M_r$ of $\\text{MgCl}_2$ and multiply by moles.", working: "M_r = 24 + 2 \\times 35.5 = 95,\\quad 0.05 \\times 95", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "4.75\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.75\\text{ g}$",
            commonErrors: ["Using $M_r = 59.5$ for $\\text{MgCl}_2$ by counting only one chlorine atom.", "Using the 1 : 2 ratio of Mg to HCl for the product.", "Giving 1.2 g because mass is conserved, ignoring the chlorine that joins the magnesium."],
            examinerNote: "M1 for 0.05 mol. M1 for the 1:1 ratio used. M1 for $M_r = 95$ used. A1 for 4.75 (allow 4.8 with correct working).",
          },
        },
        {
          id: "ech10-u2-mole-reacting-masses-q4",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "Calcium carbonate decomposes when heated strongly: $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$. A student heats $20.0\\text{ g}$ of calcium carbonate in an open crucible until the reaction is complete. ($A_r$: Ca = 40, C = 12, O = 16)",
          parts: [
            { label: "a", prompt: "Calculate the relative formula mass of calcium carbonate.", marks: 2 },
            { label: "b", prompt: "Calculate the amount, in moles, of calcium carbonate in $20.0\\text{ g}$.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of calcium oxide made.", marks: 3 },
            { label: "d", prompt: "Calculate the mass of carbon dioxide made, and show that mass is conserved in the reaction.", marks: 3 },
            { label: "e", prompt: "The student finds that the solid left in the crucible has a smaller mass than the calcium carbonate at the start. Explain this result.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "law", name: "Conservation of mass", statement: "The total mass of the products equals the total mass of the reactants." },
            ],
            steps: [
              { part: "a", reasoning: "Add the relative atomic masses.", working: "40 + 12 + 3 \\times 16", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "M_r = 100", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide mass by $M_r$.", working: "\\frac{20.0}{100}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.200\\text{ mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The ratio $\\text{CaCO}_3 : \\text{CaO}$ is $1 : 1$, so $0.200\\text{ mol}$ of CaO is made.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$M_r$ of CaO is $40 + 16 = 56$. Multiply by moles.", working: "0.200 \\times 56", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "11.2\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The ratio $\\text{CaCO}_3 : \\text{CO}_2$ is $1 : 1$. $M_r$ of $\\text{CO}_2$ is $12 + 32 = 44$.", working: "0.200 \\times 44", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "8.8\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the masses of the products and compare with the reactant.", working: "11.2 + 8.8 = 20.0\\text{ g}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Carbon dioxide is a gas and escapes from the open crucible.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Only the calcium oxide ($11.2\\text{ g}$) remains, so the mass of solid decreases.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $100$ (b) $0.200\\text{ mol}$ (c) $11.2\\text{ g}$ (d) $8.8\\text{ g}$; $11.2 + 8.8 = 20.0\\text{ g}$ (e) carbon dioxide gas escapes",
            commonErrors: ["Using $M_r = 28$ for CaO by using 12 instead of 40 for calcium.", "Saying mass is lost or destroyed in the reaction.", "Using $M_r$ of $\\text{CO}_2$ as 28 or 32."],
            examinerNote: "In (d) the B1 requires both masses added to give 20.0 g. In (e) allow 'gas lost to the air' for the first mark. Reject 'the mass is destroyed'.",
          },
        },
      ],
    },
    {
      id: "ech10-u2-empirical-formulae-yield",
      title: "Empirical formulae and percentage yield",
      skill: "Find empirical and molecular formulae from masses or percentages and calculate percentage yield.",
      lesson: {
        sections: [
          {
            heading: "Finding an empirical formula",
            body: "The **empirical formula** is the simplest whole-number ratio of atoms in a compound. To find it from masses or percentages:\n\n- divide each mass (or percentage) by the $A_r$ of that element to get moles\n- divide all the answers by the smallest\n- if needed, multiply to get whole numbers\n\nTo find the **molecular formula**, divide the $M_r$ of the compound by the empirical formula mass. The answer is the number of times the empirical formula is repeated.",
          },
          {
            heading: "Percentage yield",
            body: "Reactions rarely give all the product that the equation predicts. The **theoretical yield** is the maximum mass calculated from the equation. The **actual yield** is the mass really obtained.\n\n$$\\text{percentage yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$\n\nThe yield is below $100\\%$ because the reaction may be reversible, some reactants may form other products, or some product may be lost when separating, filtering and transferring it.",
          },
        ],
        keyFormulas: [
          { name: "Empirical formula method", statement: "mass $\\div A_r$, then divide by the smallest, then whole numbers" },
          { name: "Molecular formula", statement: "$\\text{multiple} = \\frac{M_r \\text{ of compound}}{M_r \\text{ of empirical formula}}$" },
          { name: "Percentage yield", statement: "$\\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A compound contains $1.2\\text{ g}$ of carbon and $0.4\\text{ g}$ of hydrogen. Find its empirical formula. ($A_r$: C = 12, H = 1)",
          solution: "Moles of C $= \\frac{1.2}{12} = 0.1$. Moles of H $= \\frac{0.4}{1} = 0.4$. Divide by the smallest (0.1): C = 1, H = 4. The empirical formula is $\\text{CH}_4$.",
        },
      },
      questions: [
        {
          id: "ech10-u2-empirical-formulae-yield-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Glucose has the molecular formula $\\text{C}_6\\text{H}_{12}\\text{O}_6$. What is its empirical formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{CHO}$" },
              { id: "b", text: "$\\text{CH}_2\\text{O}$" },
              { id: "c", text: "$\\text{C}_6\\text{H}_{12}\\text{O}_6$" },
              { id: "d", text: "$\\text{C}_3\\text{H}_6\\text{O}_3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms of each element in the compound." },
            ],
            steps: [
              { reasoning: "The ratio C : H : O is $6 : 12 : 6$. Divide by 6 to get $1 : 2 : 1$.", working: "\\text{CH}_2\\text{O}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{CH}_2\\text{O}$",
            commonErrors: ["Choosing the molecular formula (b).", "Choosing (d), which is a simpler ratio but not the simplest."],
            examinerNote: "B1 for $\\text{CH}_2\\text{O}$.",
          },
        },
        {
          id: "ech10-u2-empirical-formulae-yield-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an experiment the theoretical yield of a product is $6.0\\text{ g}$ and the student obtains $4.2\\text{ g}$. Calculate the percentage yield.",
          response: { type: "numeric", parts: [{ label: "Percentage yield", answer: 70, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage yield", statement: "$\\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the actual yield by the theoretical yield and multiply by 100.", working: "\\frac{4.2}{6.0} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70\\%$",
            commonErrors: ["Inverting the fraction to get 143%.", "Giving 1.8 g, the mass lost."],
            examinerNote: "M1 for correct fraction. A1 for 70.",
          },
        },
        {
          id: "ech10-u2-empirical-formulae-yield-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An oxide of iron contains $1.12\\text{ g}$ of iron combined with $0.48\\text{ g}$ of oxygen. Determine the empirical formula of the oxide. ($A_r$: Fe = 56, O = 16)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{A_r}$" },
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms of each element." },
            ],
            steps: [
              { reasoning: "Find the moles of iron.", working: "\\frac{1.12}{56} = 0.02", marks: 1, markCode: "M" },
              { reasoning: "Find the moles of oxygen atoms.", working: "\\frac{0.48}{16} = 0.03", marks: 1, markCode: "M" },
              { reasoning: "Write the ratio. Dividing by the smallest gives $1 : 1.5$, so multiply by 2 to get whole numbers.", working: "0.02 : 0.03 = 2 : 3", marks: 1, markCode: "M" },
              { reasoning: "State the formula.", working: "\\text{Fe}_2\\text{O}_3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{Fe}_2\\text{O}_3$",
            commonErrors: ["Rounding the ratio $1 : 1.5$ to $\\text{FeO}$ or $\\text{Fe}_{1.5}\\text{O}$ instead of doubling.", "Dividing by $M_r$ of $\\text{O}_2$ (32) instead of $A_r$ of oxygen atoms."],
            examinerNote: "M1 for each moles value. M1 for ratio 2 : 3 (or 1 : 1.5 then doubled). A1 for $\\text{Fe}_2\\text{O}_3$.",
          },
        },
        {
          id: "ech10-u2-empirical-formulae-yield-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hydrocarbon contains $85.7\\%$ carbon and $14.3\\%$ hydrogen by mass. Its relative formula mass is $56$. ($A_r$: C = 12, H = 1)",
          parts: [
            { label: "a", prompt: "State what is meant by the term empirical formula.", marks: 1 },
            { label: "b", prompt: "Calculate the empirical formula of the hydrocarbon.", marks: 3 },
            { label: "c", prompt: "Determine the molecular formula of the hydrocarbon.", marks: 2 },
            { label: "d", prompt: "A student makes this hydrocarbon in a reaction where the theoretical yield is $3.50\\text{ g}$. She obtains $2.45\\text{ g}$. Calculate the percentage yield.", marks: 2 },
            { label: "e", prompt: "Give one reason why the percentage yield is less than $100\\%$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Empirical formula", statement: "The simplest whole-number ratio of atoms of each element in a compound." },
              { kind: "formula", name: "Percentage yield", statement: "$\\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "The empirical formula is the simplest whole-number ratio of atoms of each element in the compound.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide each percentage by its $A_r$.", working: "\\text{C: } \\frac{85.7}{12} = 7.14,\\quad \\text{H: } \\frac{14.3}{1} = 14.3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by the smallest value.", working: "7.14 : 14.3 = 1 : 2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the formula.", working: "\\text{CH}_2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Empirical formula mass is $12 + 2 = 14$. Divide $M_r$ by this.", working: "\\frac{56}{14} = 4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply the empirical formula by 4.", working: "\\text{C}_4\\text{H}_8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Actual divided by theoretical, times 100.", working: "\\frac{2.45}{3.50} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "70\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any one: the reaction is reversible; some reactant formed other products; product was lost during separation or transfer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) simplest whole-number ratio of atoms (b) $\\text{CH}_2$ (c) $\\text{C}_4\\text{H}_8$ (d) $70\\%$ (e) e.g. product lost in transfer",
            commonErrors: ["Dividing percentages by $M_r$ of the compound instead of $A_r$.", "Giving $\\text{CH}_2$ as the molecular formula without using $M_r$.", "Giving 'human error' as the reason in (e)."],
            examinerNote: "In (b) allow 7.14 or 7.1 for carbon. In (e) reject 'some mass was lost' without a cause, and reject 'measuring mistakes'.",
          },
        },
      ],
    },
  ],
};
