import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ech10-u1-lesson-1-3",
  code: "1-3",
  title: "Formulae, Equations and Relative Formula Mass",
  goal: "I CAN write chemical formulae, balance equations with state symbols, and calculate relative formula mass and percentage composition.",
  standards: ["4CH1 1.15", "4CH1 1.16", "4CH1 1.17", "4CH1 1.18", "4CH1 1.19", "4CH1 1.20", "4CH1 1.21"],
  vocabulary: [
    { term: "Chemical formula", definition: "A way of showing the number and type of atoms or ions in a substance using chemical symbols and numbers." },
    { term: "Balanced equation", definition: "An equation with the same number of atoms of each element on both sides, showing that mass is conserved." },
    { term: "State symbol", definition: "A letter in brackets after a formula showing its state: (s) solid, (l) liquid, (g) gas, (aq) dissolved in water." },
    { term: "Relative atomic mass ($A_r$)", definition: "The average mass of an atom of an element compared with one-twelfth of the mass of a carbon-12 atom." },
    { term: "Relative formula mass ($M_r$)", definition: "The sum of the relative atomic masses of all the atoms shown in the formula of a substance." },
    { term: "Percentage composition", definition: "The percentage by mass of an element in a compound." },
    { term: "Conservation of mass", definition: "In a chemical reaction no atoms are created or destroyed, so the total mass of the products equals the total mass of the reactants." },
  ],
  concepts: [
    {
      id: "ech10-u1-formulae-balanced-equations",
      title: "Chemical formulae and balanced equations",
      skill: "Deduce formulae from ion charges, write balanced symbol equations with state symbols and explain conservation of mass.",
      lesson: {
        sections: [
          {
            heading: "Writing formulae",
            body: "The formula of an ionic compound is found by balancing the charges so that the compound has no overall charge. Common ions include $\\text{Na}^+$, $\\text{Mg}^{2+}$, $\\text{Ca}^{2+}$, $\\text{Al}^{3+}$, $\\text{Cl}^-$, $\\text{O}^{2-}$, $\\text{OH}^-$, $\\text{NO}_3^-$, $\\text{SO}_4^{2-}$ and $\\text{CO}_3^{2-}$.\n\nFor calcium chloride, one $\\text{Ca}^{2+}$ needs two $\\text{Cl}^-$ so the formula is $\\text{CaCl}_2$. For aluminium oxide, two $\\text{Al}^{3+}$ (charge $+6$) balance three $\\text{O}^{2-}$ (charge $-6$) so the formula is $\\text{Al}_2\\text{O}_3$. When more than one polyatomic ion is needed, use brackets, for example $\\text{Ca(OH)}_2$ and $\\text{Al}_2(\\text{SO}_4)_3$.",
          },
          {
            heading: "Balancing equations",
            body: "Atoms are not created or destroyed in a chemical reaction, so a balanced equation has the same number of atoms of each element on both sides. To balance an equation, write the correct formulae first, then change the **coefficients** (the big numbers in front). Never change the small numbers inside a formula.\n\nExample: $4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$. Left: 4 Al, 6 O. Right: $2 \\times 2 = 4$ Al and $2 \\times 3 = 6$ O. The equation is balanced.",
          },
          {
            heading: "State symbols and conservation of mass",
            body: "State symbols are written after each formula: (s) solid, (l) liquid, (g) gas and (aq) aqueous (dissolved in water).\n\nThe total mass of the reactants equals the total mass of the products. If a reaction in an open container appears to lose mass, a gas has escaped. If a metal appears to gain mass when heated in air, it has combined with oxygen from the air.",
          },
        ],
        keyFormulas: [
          { name: "Ionic formula", statement: "Total positive charge = total negative charge" },
          { name: "Balancing", statement: "Change coefficients only, never the small numbers in a formula" },
          { name: "State symbols", statement: "(s) solid, (l) liquid, (g) gas, (aq) aqueous solution" },
        ],
        workedExample: {
          problem: "Balance: $\\text{Mg} + \\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$.",
          solution: "Right: 1 Mg, 2 Cl, 2 H. Put 2 in front of HCl to give 2 H and 2 Cl on the left. $\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$. Left: 1 Mg, 2 H, 2 Cl. Right: 1 Mg, 2 Cl, 2 H. Balanced.",
        },
      },
      questions: [
        {
          id: "ech10-u1-formulae-balanced-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calcium ions are $\\text{Ca}^{2+}$ and chloride ions are $\\text{Cl}^-$. What is the formula of calcium chloride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{Ca}_2\\text{Cl}$" },
              { id: "b", text: "$\\text{Ca}_2\\text{Cl}_2$" },
              { id: "c", text: "$\\text{CaCl}$" },
              { id: "d", text: "$\\text{CaCl}_2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing charges", statement: "The formula of an ionic compound has equal total positive and negative charge." },
            ],
            steps: [
              { reasoning: "One $\\text{Ca}^{2+}$ has charge $+2$, so two $\\text{Cl}^-$ ($2 \\times -1 = -2$) are needed to balance it.", working: "(+2) + 2(-1) = 0 \\Rightarrow \\text{CaCl}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\text{CaCl}_2$",
            commonErrors: ["Choosing (a), ignoring the charges.", "Choosing (b), putting the number against the wrong ion."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech10-u1-formulae-balanced-equations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance the equation $\\_\\_\\text{Al} + \\_\\_\\text{O}_2 \\rightarrow \\_\\_\\text{Al}_2\\text{O}_3$. Give the whole-number coefficients in the order shown, in the simplest ratio.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of Al", answer: 4 },
              { label: "Coefficient of O$_2$", answer: 3 },
              { label: "Coefficient of Al$_2$O$_3$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "A balanced equation has the same number of atoms of each element on both sides." },
            ],
            steps: [
              { reasoning: "Oxygen: $\\text{O}_2$ gives an even number of atoms and $\\text{Al}_2\\text{O}_3$ has 3, so the lowest common multiple is 6 oxygen atoms: 3 $\\text{O}_2$ and 2 $\\text{Al}_2\\text{O}_3$.", working: "3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3", marks: 1, markCode: "M" },
              { reasoning: "Two $\\text{Al}_2\\text{O}_3$ contain 4 Al atoms, so 4 Al are needed.", working: "4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3", marks: 1, markCode: "M" },
              { reasoning: "Check: left 4 Al and 6 O; right $2 \\times 2 = 4$ Al and $2 \\times 3 = 6$ O.", working: "4, 3, 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$",
            commonErrors: ["Writing $\\text{Al}_2\\text{O}_3$ as $\\text{AlO}_3$ or changing the formula to balance.", "Giving 2, 3, 2, which has 4 oxygen atoms on the left but 6 on the right."],
            examinerNote: "A1 for all three correct. Allow M marks for a partially correct balance. Reject any answer other than 4, 3, 2 because the simplest ratio was requested.",
          },
        },
        {
          id: "ech10-u1-formulae-balanced-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Aluminium reacts with dilute sulfuric acid to form aqueous aluminium sulfate and hydrogen gas. Write a balanced symbol equation, including state symbols. Aluminium ions are $\\text{Al}^{3+}$ and sulfate ions are $\\text{SO}_4^{2-}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balancing charges", statement: "Two $\\text{Al}^{3+}$ ($+6$) balance three $\\text{SO}_4^{2-}$ ($-6$), giving $\\text{Al}_2(\\text{SO}_4)_3$." },
              { kind: "law", name: "Conservation of mass", statement: "A balanced equation has equal numbers of each type of atom on both sides." },
            ],
            steps: [
              { reasoning: "Correct formulae for the reactants: Al, $\\text{H}_2\\text{SO}_4$.", working: "\\text{Al} + \\text{H}_2\\text{SO}_4", marks: 1, markCode: "B" },
              { reasoning: "Correct formulae for the products: $\\text{Al}_2(\\text{SO}_4)_3$ and $\\text{H}_2$.", working: "\\text{Al}_2(\\text{SO}_4)_3 + \\text{H}_2", marks: 1, markCode: "B" },
              { reasoning: "Balance: 3 sulfate groups need 3 $\\text{H}_2\\text{SO}_4$ (6 H, giving 3 $\\text{H}_2$) and 2 Al.", working: "2\\text{Al} + 3\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Al}_2(\\text{SO}_4)_3 + 3\\text{H}_2", marks: 1, markCode: "B" },
              { reasoning: "Add correct state symbols.", working: "2\\text{Al(s)} + 3\\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{Al}_2(\\text{SO}_4)_3\\text{(aq)} + 3\\text{H}_2\\text{(g)}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\text{Al(s)} + 3\\text{H}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{Al}_2(\\text{SO}_4)_3\\text{(aq)} + 3\\text{H}_2\\text{(g)}$",
            commonErrors: ["Writing aluminium sulfate as $\\text{AlSO}_4$.", "Writing hydrogen as H rather than $\\text{H}_2$.", "Omitting brackets around the sulfate group."],
            examinerNote: "The balancing mark requires correct formulae. Allow multiples. Reject (g) for aluminium sulfate. Check left: 2 Al, 6 H, 3 S, 12 O; right: 2 Al, 3 S, 12 O, 6 H.",
          },
        },
        {
          id: "ech10-u1-formulae-balanced-equations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student adds marble chips (calcium carbonate, $\\text{CaCO}_3$) to dilute hydrochloric acid in an open conical flask on a balance. The equation is\n\n$\\text{CaCO}_3\\text{(s)} + \\_\\_\\text{HCl(aq)} \\rightarrow \\text{CaCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}$\n\nThe total mass of the flask and its contents is $150.00\\text{ g}$ at the start and $148.24\\text{ g}$ at the end of the reaction.",
          parts: [
            { label: "a", prompt: "Give the number needed in front of HCl to balance the equation.", marks: 1 },
            { label: "b", prompt: "Describe the test for carbon dioxide and the positive result.", marks: 2 },
            { label: "c", prompt: "Explain why the mass shown on the balance decreases, even though mass is conserved in the reaction.", marks: 2 },
            { label: "d", prompt: "Calculate the mass of carbon dioxide that escaped from the flask.", marks: 2 },
            { label: "e", prompt: "Calcium ions are $\\text{Ca}^{2+}$. Explain why the formula of calcium chloride is $\\text{CaCl}_2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants = total mass of products. In an open container a gas product can escape." },
              { kind: "principle", name: "Balancing charges", statement: "An ionic compound has no overall charge." },
            ],
            steps: [
              { part: "a", reasoning: "Right side: 2 Cl and 2 H (in $\\text{H}_2\\text{O}$), so 2 HCl are needed.", working: "2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Bubble the gas through limewater (calcium hydroxide solution).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Carbon dioxide turns limewater cloudy (milky).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Carbon dioxide gas is produced and escapes into the air from the open flask.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The mass of the gas is no longer measured by the balance, but the total mass of reactants still equals the total mass of products including the gas.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The mass lost is the mass of carbon dioxide: initial mass minus final mass.", working: "150.00 - 148.24", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "1.76\\text{ g}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Each $\\text{Ca}^{2+}$ ion has a charge of $+2$ and each chloride ion $\\text{Cl}^-$ has a charge of $-1$.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Two chloride ions are needed to balance one calcium ion, so that the overall charge is zero: $\\text{CaCl}_2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 2 (b) limewater turns cloudy (c) $\\text{CO}_2$ escapes (d) $1.76\\text{ g}$ (e) $+2$ balanced by two $-1$ ions.",
            commonErrors: ["Saying the mass is lost because the reaction destroys matter.", "Saying hydrogen escapes (the gas is carbon dioxide).", "Giving 298.24 g by adding the masses."],
            examinerNote: "In (d) allow 1.76 with the unit g; reject a negative value. In (c) allow 'a gas is given off' for the first mark.",
          },
        },
      ],
    },
    {
      id: "ech10-u1-relative-formula-mass",
      title: "Relative formula mass and percentage composition",
      skill: "Calculate relative formula mass and the percentage by mass of an element in a compound.",
      lesson: {
        sections: [
          {
            heading: "Relative formula mass",
            body: "The **relative formula mass**, $M_r$, of a substance is the sum of the relative atomic masses ($A_r$) of all the atoms in its formula. It has no units. For simple molecules it is called the relative molecular mass.\n\nUse these $A_r$ values: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35.5, Ca 40, Fe 56, Cu 63.5.\n\nExample: $\\text{Mg(OH)}_2$: $24 + 2 \\times (16 + 1) = 24 + 34 = 58$. A number outside brackets multiplies everything inside the brackets.",
          },
          {
            heading: "Percentage composition",
            body: "The percentage by mass of an element in a compound is\n\n$$\\text{percentage of element} = \\frac{A_r \\times \\text{number of atoms of the element}}{M_r \\text{ of the compound}} \\times 100\\%$$\n\nFor $\\text{CO}_2$: $M_r = 12 + 32 = 44$, so the percentage of carbon is $\\frac{12}{44} \\times 100 = 27.3\\%$ and of oxygen is $\\frac{32}{44} \\times 100 = 72.7\\%$. The percentages of all the elements add up to $100\\%$, which is a useful check.",
          },
          {
            heading: "Using percentage composition",
            body: "The mass of an element in a sample of a compound is the percentage multiplied by the mass of the sample. This is used to compare ores and fertilisers, for example to decide which contains more iron or nitrogen per kilogram.",
          },
        ],
        keyFormulas: [
          { name: "Relative formula mass", statement: "$M_r = \\sum A_r$ of all atoms in the formula" },
          { name: "Percentage by mass", statement: "$\\frac{A_r \\times \\text{number of atoms}}{M_r} \\times 100\\%$" },
          { name: "Mass of element in a sample", statement: "$\\text{mass of element} = \\text{percentage} \\times \\text{mass of sample}$" },
        ],
        workedExample: {
          problem: "Calculate the percentage by mass of calcium in calcium carbonate, $\\text{CaCO}_3$.",
          solution: "$M_r = 40 + 12 + (3 \\times 16) = 100$. Percentage of calcium $= \\frac{40}{100} \\times 100 = 40\\%$.",
        },
      },
      questions: [
        {
          id: "ech10-u1-relative-formula-mass-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the relative formula mass of carbon dioxide, $\\text{CO}_2$? (Relative atomic masses: C = 12, O = 16.)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$44$" },
              { id: "b", text: "$28$" },
              { id: "c", text: "$32$" },
              { id: "d", text: "$60$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative formula mass", statement: "$M_r$ is the sum of the $A_r$ values of all atoms in the formula." },
            ],
            steps: [
              { reasoning: "One carbon atom and two oxygen atoms.", working: "12 + (2 \\times 16) = 12 + 32 = 44", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $44$",
            commonErrors: ["Choosing (a) by using only one oxygen atom, $12 + 16 = 28$.", "Choosing (c) by multiplying instead of adding, or adding 12 + 16 + 32."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech10-u1-relative-formula-mass-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the relative formula mass of calcium hydroxide, $\\text{Ca(OH)}_2$. (Relative atomic masses: H = 1, O = 16, Ca = 40.)",
          response: { type: "numeric", parts: [{ label: "$M_r$ of Ca(OH)$_2$", answer: 74 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative formula mass", statement: "$M_r$ is the sum of the $A_r$ values of all atoms in the formula; the 2 multiplies everything in the brackets." },
            ],
            steps: [
              { reasoning: "One Ca, two O and two H atoms.", working: "40 + 2 \\times (16 + 1) = 40 + 34", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "M_r = 74", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$M_r = 74$",
            commonErrors: ["Giving 57 by multiplying only the hydrogen by 2.", "Giving 56 by ignoring the brackets."],
            examinerNote: "M1 for correct number of each atom. A1 for 74. No unit required.",
          },
        },
        {
          id: "ech10-u1-relative-formula-mass-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ammonium nitrate, $\\text{NH}_4\\text{NO}_3$, is used as a fertiliser. Calculate the percentage by mass of nitrogen in ammonium nitrate. (Relative atomic masses: H = 1, N = 14, O = 16.)",
          response: { type: "numeric", parts: [{ label: "Percentage of nitrogen", answer: 35, tolerance: 0.1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage by mass", statement: "$\\frac{A_r \\times \\text{number of atoms}}{M_r} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Add the atomic masses: 2 N, 4 H, 3 O.", working: "M_r = (2 \\times 14) + (4 \\times 1) + (3 \\times 16) = 28 + 4 + 48 = 80", marks: 1, markCode: "M" },
              { reasoning: "There are two nitrogen atoms in the formula, so the mass of nitrogen is $2 \\times 14 = 28$.", working: "\\frac{28}{80} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "35\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35\\%$",
            commonErrors: ["Using only one nitrogen atom: $\\frac{14}{80} = 17.5\\%$.", "Using $M_r = 52$ by missing atoms."],
            examinerNote: "M1 for $M_r = 80$. M1 for $28/80$ (oe) with the correct mass of nitrogen. A1 for 35. Allow ecf for the second M mark from an incorrect $M_r$.",
          },
        },
        {
          id: "ech10-u1-relative-formula-mass-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Iron is extracted from iron ore. One ore contains iron(III) oxide, $\\text{Fe}_2\\text{O}_3$. Another contains iron(II,III) oxide, $\\text{Fe}_3\\text{O}_4$. (Relative atomic masses: O = 16, Fe = 56.)",
          parts: [
            { label: "a", prompt: "Calculate the relative formula mass of $\\text{Fe}_2\\text{O}_3$.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage by mass of iron in $\\text{Fe}_2\\text{O}_3$.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of iron in $400\\text{ kg}$ of pure $\\text{Fe}_2\\text{O}_3$.", marks: 2 },
            { label: "d", prompt: "Calculate the percentage by mass of iron in $\\text{Fe}_3\\text{O}_4$ to 1 decimal place, and state which compound contains the higher percentage of iron.", marks: 3 },
            { label: "e", prompt: "Explain why relative formula mass has no units.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative formula mass", statement: "$M_r = \\sum A_r$ of all atoms in the formula." },
              { kind: "formula", name: "Percentage by mass", statement: "$\\frac{A_r \\times \\text{number of atoms}}{M_r} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Two iron atoms and three oxygen atoms.", working: "(2 \\times 56) + (3 \\times 16) = 112 + 48", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "M_r = 160", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The mass of iron in one formula unit is 112.", working: "\\frac{112}{160} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "70\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the percentage of iron by the mass of the sample.", working: "0.70 \\times 400", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "280\\text{ kg}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$M_r$ of $\\text{Fe}_3\\text{O}_4 = (3 \\times 56) + (4 \\times 16) = 168 + 64 = 232$; iron is $168$.", working: "\\frac{168}{232} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate to 1 decimal place.", working: "72.4\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$72.4\\% > 70\\%$, so $\\text{Fe}_3\\text{O}_4$ has the higher percentage of iron.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "It is a ratio of masses (each atom's mass compared with one-twelfth of a carbon-12 atom), so the units cancel.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 160 (b) $70\\%$ (c) $280\\text{ kg}$ (d) $72.4\\%$, $\\text{Fe}_3\\text{O}_4$ (e) it is a ratio, so units cancel.",
            commonErrors: ["Using only one iron atom in the percentage calculation.", "Giving $M_r$ as 72 by adding 56 + 16.", "Giving the mass of iron in (c) as 70 kg by forgetting to multiply."],
            examinerNote: "In (c) allow ecf from their percentage in (b). In (d) the R mark is for a correct comparison with their values (ecf). In (e) allow 'it is relative to carbon-12' or 'it is a comparison'.",
          },
        },
      ],
    },
  ],
};
