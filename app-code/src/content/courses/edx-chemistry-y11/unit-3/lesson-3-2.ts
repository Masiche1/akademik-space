import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ech11-u3-lesson-3-2",
  code: "3-2",
  title: "Alkanes, Alkenes and Isomers",
  goal: "I CAN compare alkanes and alkenes, use the bromine water test, and name simple isomers using IUPAC rules.",
  standards: ["4CH1 4.5", "4CH1 4.6", "4CH1 4.7", "4CH1 4.8"],
  vocabulary: [
    { term: "Homologous series", definition: "A family of compounds with the same functional group and general formula, in which each member differs from the next by a $\\text{CH}_2$ unit." },
    { term: "Saturated", definition: "Containing only single bonds between carbon atoms, so no more atoms can be added to the carbon chain." },
    { term: "Unsaturated", definition: "Containing at least one carbon-carbon double bond, so other atoms can be added across it." },
    { term: "Addition reaction", definition: "A reaction in which two reactants join to form one product, for example a molecule adding across a $\\text{C=C}$ double bond." },
    { term: "Functional group", definition: "The atom or group of atoms that gives a compound its characteristic reactions." },
    { term: "Structural isomers", definition: "Compounds with the same molecular formula but different structural formulae." },
    { term: "Displayed formula", definition: "A formula that shows every atom and every bond in a molecule." },
  ],
  concepts: [
    {
      id: "ech11-u3-alkanes-alkenes-bromine-water",
      title: "Alkanes, alkenes and the bromine water test",
      skill: "Compare the structure and reactions of alkanes and alkenes and use bromine water to distinguish them.",
      lesson: {
        sections: [
          {
            heading: "Alkanes: saturated hydrocarbons",
            body: "**Alkanes** form a homologous series with the general formula $\\text{C}_n\\text{H}_{2n+2}$. All the carbon-carbon bonds are single bonds, so alkanes are **saturated**.\n\n| Alkane | Formula | Carbon atoms |\n| --- | --- | --- |\n| methane | $\\text{CH}_4$ | 1 |\n| ethane | $\\text{C}_2\\text{H}_6$ | 2 |\n| propane | $\\text{C}_3\\text{H}_8$ | 3 |\n| butane | $\\text{C}_4\\text{H}_{10}$ | 4 |\n\nAlkanes are fairly unreactive. They burn in oxygen and are used as fuels.",
          },
          {
            heading: "Alkenes: unsaturated hydrocarbons",
            body: "**Alkenes** have the general formula $\\text{C}_n\\text{H}_{2n}$ and contain one carbon-carbon **double bond**, $\\text{C=C}$, which is their functional group. They are **unsaturated**. The first members are ethene ($\\text{C}_2\\text{H}_4$), propene ($\\text{C}_3\\text{H}_6$) and butene ($\\text{C}_4\\text{H}_8$).\n\nThe double bond makes alkenes much more reactive than alkanes. They take part in **addition reactions**, where one bond of the double bond breaks and two new atoms are added:\n\n- with hydrogen (nickel catalyst, about $150^\\circ\\text{C}$): $\\text{C}_2\\text{H}_4 + \\text{H}_2 \\rightarrow \\text{C}_2\\text{H}_6$\n- with bromine: $\\text{C}_2\\text{H}_4 + \\text{Br}_2 \\rightarrow \\text{C}_2\\text{H}_4\\text{Br}_2$ (1,2-dibromoethane)\n- with steam (phosphoric acid catalyst, $300^\\circ\\text{C}$, about 60 to 70 atmospheres): $\\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{C}_2\\text{H}_5\\text{OH}$",
          },
          {
            heading: "The bromine water test",
            body: "To test whether a hydrocarbon is an alkene, add a few drops of **bromine water** (orange-brown) and shake.\n\n- **Alkene**: bromine water changes from orange-brown to **colourless** because the bromine adds across the double bond.\n- **Alkane**: the bromine water stays **orange-brown**, because there is no double bond for it to react with.\n\nThe word to use is **decolourises**, not 'clear'. A colourless solution is clear but may still be coloured, so always say colourless.",
          },
        ],
        keyFormulas: [
          { name: "Alkane general formula", statement: "$\\text{C}_n\\text{H}_{2n+2}$ (saturated)" },
          { name: "Alkene general formula", statement: "$\\text{C}_n\\text{H}_{2n}$ (unsaturated, contains $\\text{C=C}$)" },
          { name: "Test for an alkene", statement: "Bromine water changes from orange-brown to colourless" },
          { name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
        ],
        workedExample: {
          problem: "An alkene has the molecular formula $\\text{C}_6\\text{H}_x$. Work out the value of $x$.",
          solution: "Alkenes have the general formula $\\text{C}_n\\text{H}_{2n}$. With $n = 6$, the number of hydrogen atoms is $2 \\times 6 = 12$, so $x = 12$ and the alkene is $\\text{C}_6\\text{H}_{12}$ (hexene).",
        },
      },
      questions: [
        {
          id: "ech11-u3-alkanes-alkenes-bromine-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the general formula of the alkenes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{C}_n\\text{H}_{2n-2}$" },
              { id: "b", text: "$\\text{C}_n\\text{H}_{2n}$" },
              { id: "c", text: "$\\text{C}_n\\text{H}_{n}$" },
              { id: "d", text: "$\\text{C}_n\\text{H}_{2n+2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Alkene general formula", statement: "Alkenes have one $\\text{C=C}$ bond, so they have two fewer hydrogen atoms than the alkane with the same number of carbon atoms: $\\text{C}_n\\text{H}_{2n}$." },
            ],
            steps: [
              { reasoning: "Alkanes are $\\text{C}_n\\text{H}_{2n+2}$. The double bond removes two hydrogen atoms, giving $\\text{C}_n\\text{H}_{2n}$. For example ethene is $\\text{C}_2\\text{H}_4$.", working: "\\text{C}_n\\text{H}_{2n}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{C}_n\\text{H}_{2n}$",
            commonErrors: ["Choosing (a), which is the formula for alkanes.", "Choosing (c), the formula for alkynes, which is not needed at this level."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u3-alkanes-alkenes-bromine-water-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student has two colourless gases. One is ethane and the other is ethene. Describe how the student could use bromine water to identify the ethene and state what is seen with each gas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bromine water test", statement: "Bromine adds across a $\\text{C=C}$ bond, so an alkene decolourises bromine water. Alkanes do not react." },
            ],
            steps: [
              { reasoning: "Add (a few drops of) bromine water to each gas (or shake each gas with bromine water).", marks: 1, markCode: "B" },
              { reasoning: "Ethene: the bromine water changes from orange-brown to colourless.", marks: 1, markCode: "B" },
              { reasoning: "Ethane: the bromine water stays orange-brown (no change).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Shake each gas with bromine water; ethene turns it from orange-brown to colourless, ethane leaves it orange-brown.",
            commonErrors: ["Saying that bromine water goes 'clear' for ethene.", "Saying that ethane turns bromine water colourless."],
            examinerNote: "Allow 'orange' or 'brown' or 'yellow' for the original colour. Reject 'clear' without 'colourless'.",
          },
        },
        {
          id: "ech11-u3-alkanes-alkenes-bromine-water-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An alkene has a relative formula mass ($M_r$) of 70. ($A_r$: C = 12, H = 1) Work out the number of carbon atoms and the number of hydrogen atoms in one molecule of the alkene.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms", answer: 5 },
              { label: "Hydrogen atoms", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Alkene general formula", statement: "$\\text{C}_n\\text{H}_{2n}$, so $M_r = 12n + 2n = 14n$." },
            ],
            steps: [
              { reasoning: "Write $M_r$ in terms of $n$: each $\\text{CH}_2$ unit has a mass of 14.", working: "14n = 70", marks: 1, markCode: "M" },
              { reasoning: "Solve for $n$, the number of carbon atoms.", working: "n = \\frac{70}{14} = 5", marks: 1, markCode: "A" },
              { reasoning: "Hydrogen atoms $= 2n$. Check: $5\\times12 + 10\\times1 = 70$.", working: "2 \\times 5 = 10,\\quad \\text{C}_5\\text{H}_{10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 carbon atoms and 10 hydrogen atoms: $\\text{C}_5\\text{H}_{10}$ (pentene)",
            commonErrors: ["Using the alkane formula $\\text{C}_n\\text{H}_{2n+2}$, which gives $14n + 2 = 70$ and a non-integer $n$.", "Dividing 70 by 12 only."],
            examinerNote: "Allow the trial-and-error method with a correct check. A mark for hydrogen can be awarded for $2\\times$ the carbon figure (ecf).",
          },
        },
        {
          id: "ech11-u3-alkanes-alkenes-bromine-water-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "Ethene, $\\text{C}_2\\text{H}_4$, is an alkene made by cracking. It reacts with bromine in an addition reaction to form 1,2-dibromoethane, $\\text{C}_2\\text{H}_4\\text{Br}_2$. ($A_r$: C = 12, H = 1, Br = 80)",
          parts: [
            { label: "a", prompt: "State the colour change seen when ethene is bubbled through bromine water.", marks: 2 },
            { label: "b", prompt: "Write a balanced equation for the reaction of ethene with bromine.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of 1,2-dibromoethane formed when $2.8\\text{ g}$ of ethene reacts completely with an excess of bromine.", marks: 3 },
            { label: "d", prompt: "Explain why ethene decolourises bromine water but ethane does not.", marks: 2 },
            { label: "e", prompt: "Ethene reacts with hydrogen to make ethane. Name the catalyst used and write the balanced equation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Addition reaction", statement: "An alkene adds atoms across its $\\text{C=C}$ double bond, forming a single saturated product." },
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "law", name: "Conservation of mass", statement: "Equations must have the same number of each type of atom on both sides." },
            ],
            steps: [
              { part: "a", reasoning: "The bromine water starts orange-brown.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "It ends colourless.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Correct formulas for the reactants and the product.", working: "\\text{C}_2\\text{H}_4,\\ \\text{Br}_2,\\ \\text{C}_2\\text{H}_4\\text{Br}_2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The equation balances as written (2 C, 4 H and 2 Br on each side).", working: "\\text{C}_2\\text{H}_4 + \\text{Br}_2 \\rightarrow \\text{C}_2\\text{H}_4\\text{Br}_2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$M_r(\\text{C}_2\\text{H}_4) = 28$. Find moles of ethene.", working: "\\frac{2.8}{28} = 0.10\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ratio is 1 : 1. $M_r(\\text{C}_2\\text{H}_4\\text{Br}_2) = 24 + 4 + 160 = 188$.", working: "0.10 \\times 188", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "18.8\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ethene is unsaturated: it contains a $\\text{C=C}$ double bond, so bromine can add across it.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Ethane is saturated (only single bonds), so no addition reaction occurs and the bromine water stays orange-brown.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The catalyst is nickel.", working: "\\text{nickel}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Hydrogen adds across the double bond.", working: "\\text{C}_2\\text{H}_4 + \\text{H}_2 \\rightarrow \\text{C}_2\\text{H}_6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) orange-brown to colourless (b) $\\text{C}_2\\text{H}_4 + \\text{Br}_2 \\rightarrow \\text{C}_2\\text{H}_4\\text{Br}_2$ (c) $18.8\\text{ g}$ (d) ethene has a $\\text{C=C}$ bond, ethane is saturated (e) nickel, $\\text{C}_2\\text{H}_4 + \\text{H}_2 \\rightarrow \\text{C}_2\\text{H}_6$",
            commonErrors: ["Writing $\\text{Br}$ instead of $\\text{Br}_2$ in the equation.", "Using $M_r = 108$ for the product, forgetting that two bromine atoms are added.", "Writing 'ethane is not reactive' without referring to saturation."],
            examinerNote: "In (a) reject 'clear' alone. In (c) A1 cao 18.8 with unit; allow ecf from a wrong $M_r$. In (e) allow platinum, but nickel is the one in the specification.",
          },
        },
      ],
    },
    {
      id: "ech11-u3-isomers-naming",
      title: "Isomers and naming",
      skill: "Recognise structural isomers and name alkanes and alkenes with branches or double bonds using IUPAC rules.",
      lesson: {
        sections: [
          {
            heading: "Naming rules",
            body: "The stem of the name shows the longest carbon chain: meth- (1), eth- (2), prop- (3), but- (4), pent- (5), hex- (6). The ending shows the homologous series: **-ane** for alkanes and **-ene** for alkenes.\n\n- Number the carbon atoms along the longest chain from the end that gives the **lowest numbers** to the double bond (alkenes) or to the branches (alkanes).\n- A one-carbon branch is a **methyl** group. Put its number in front: 2-methylbutane.\n- For alkenes, the number shows where the double bond starts: but-1-ene is $\\text{CH}_2\\text{=CHCH}_2\\text{CH}_3$ and but-2-ene is $\\text{CH}_3\\text{CH=CHCH}_3$.\n- With two identical branches use di-: 2,2-dimethylpropane.",
          },
          {
            heading: "Structural isomers",
            body: "**Structural isomers** have the **same molecular formula** but **different structural formulae** (the atoms are joined in a different order). Examples:\n\n- $\\text{C}_4\\text{H}_{10}$: butane, $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$, and 2-methylpropane, $\\text{CH}_3\\text{CH(CH}_3\\text{)CH}_3$\n- $\\text{C}_5\\text{H}_{12}$: pentane, 2-methylbutane, 2,2-dimethylpropane\n- $\\text{C}_4\\text{H}_8$: but-1-ene, but-2-ene and 2-methylpropene\n\nEach isomer has its own name and its own physical properties. Always check the molecular formula is the same by counting atoms.",
          },
          {
            heading: "Isomers and boiling points",
            body: "Isomers of the same alkane have the same relative formula mass but different boiling points. A **straight-chain** molecule can pack closely, giving a larger area of contact between molecules and **stronger intermolecular forces**. A **branched** molecule is more compact, so there is less contact and the intermolecular forces are weaker. Branched isomers therefore have **lower boiling points** than the straight-chain isomer. Remember that it is the weak intermolecular forces that are overcome, not the covalent bonds.",
          },
        ],
        keyFormulas: [
          { name: "Structural isomers", statement: "Same molecular formula, different structural formula" },
          { name: "Prefixes", statement: "meth- 1, eth- 2, prop- 3, but- 4, pent- 5, hex- 6" },
          { name: "Branched isomers", statement: "Less contact between molecules, weaker intermolecular forces, lower boiling point" },
        ],
        workedExample: {
          problem: "Name the compound $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3\\text{)CH}_3$.",
          solution: "The longest chain has 4 carbon atoms (butane) with a $\\text{CH}_3$ branch. Numbering from the end nearer the branch puts the branch on carbon 2. The name is 2-methylbutane. The molecular formula is $\\text{C}_5\\text{H}_{12}$.",
        },
      },
      questions: [
        {
          id: "ech11-u3-isomers-naming-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes structural isomers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same number of carbon atoms but different elements" },
              { id: "b", text: "Same molecular formula, different structural formula" },
              { id: "c", text: "Same physical properties, different chemical properties" },
              { id: "d", text: "Same structural formula, different molecular formula" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structural isomers", statement: "Compounds with the same molecular formula but different structural formulae." },
            ],
            steps: [
              { reasoning: "Isomers contain the same atoms in the same numbers but joined in a different arrangement.", working: "\\text{same molecular formula, different structure}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a), reversing the two parts of the definition."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u3-isomers-naming-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the name of $\\text{CH}_3\\text{CH(CH}_3\\text{)CH}_2\\text{CH}_3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2-methylpropane" },
              { id: "b", text: "Pentane" },
              { id: "c", text: "2-methylbutane" },
              { id: "d", text: "3-methylbutane" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "IUPAC naming", statement: "Find the longest chain, name it, then number from the end that gives the branch the lowest number." },
            ],
            steps: [
              { reasoning: "The longest carbon chain has 4 carbon atoms: $\\text{CH}_3$, $\\text{CH}$, $\\text{CH}_2$, $\\text{CH}_3$, so the stem is butane.", working: "\\text{butane}", marks: 1, markCode: "B" },
              { reasoning: "There is a methyl branch on carbon 2 (numbering from the end that gives the lowest number).", working: "\\text{2-methylbutane}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 2-methylbutane",
            commonErrors: ["Choosing pentane because there are 5 carbon atoms in total, but the longest chain has only 4.", "Choosing 3-methylbutane by numbering from the wrong end.", "Choosing 2-methylpropane by miscounting the chain."],
            examinerNote: "B1 for butane as the stem, B1 for the position of the methyl group.",
          },
        },
        {
          id: "ech11-u3-isomers-naming-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "But-1-ene, $\\text{CH}_2\\text{=CHCH}_2\\text{CH}_3$, and but-2-ene, $\\text{CH}_3\\text{CH=CHCH}_3$, are alkenes. Explain why they are structural isomers and state the molecular formula of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structural isomers", statement: "Same molecular formula, different structural formulae." },
              { kind: "formula", name: "Alkene general formula", statement: "$\\text{C}_n\\text{H}_{2n}$, so four carbon atoms means $\\text{C}_4\\text{H}_8$." },
            ],
            steps: [
              { reasoning: "Counting the atoms in each molecule gives 4 carbon atoms and 8 hydrogen atoms.", working: "\\text{C}_4\\text{H}_8", marks: 1, markCode: "B" },
              { reasoning: "Both have the same molecular formula, $\\text{C}_4\\text{H}_8$.", marks: 1, markCode: "B" },
              { reasoning: "The position of the double bond is different: between carbons 1 and 2 in but-1-ene, but between carbons 2 and 3 in but-2-ene.", marks: 1, markCode: "B" },
              { reasoning: "So the atoms are joined in a different arrangement (different structural formula), which makes them isomers.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Both are $\\text{C}_4\\text{H}_8$ but the $\\text{C=C}$ bond is in a different position, so they are structural isomers.",
            commonErrors: ["Saying that they are isomers because they are both alkenes.", "Saying that they have different molecular formulae."],
            examinerNote: "Allow 'same molecular formula and different structural formula' as a single statement for the two marks if the formula is given. Reject 'different molecular formula'.",
          },
        },
        {
          id: "ech11-u3-isomers-naming-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Pentane, 2-methylbutane and 2,2-dimethylpropane are isomers with the same molecular formula. Their boiling points are shown.\n\n| Compound | Boiling point ($^\\circ\\text{C}$) |\n| --- | --- |\n| pentane | 36 |\n| 2-methylbutane | 28 |\n| 2,2-dimethylpropane | 9.5 |",
          parts: [
            { label: "a", prompt: "State the meaning of the term isomers.", marks: 1 },
            { label: "b", prompt: "Give the molecular formula of the three compounds.", marks: 1 },
            { label: "c", prompt: "Write the structural formula of 2,2-dimethylpropane.", marks: 2 },
            { label: "d", prompt: "Explain the trend in boiling points as the amount of branching increases.", marks: 3 },
            { label: "e", prompt: "An alkene has the structural formula $\\text{CH}_3\\text{CH=CHCH}_2\\text{CH}_3$. Name it and give its molecular formula.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structural isomers", statement: "Same molecular formula, different structural formulae." },
              { kind: "property", name: "Branching and boiling point", statement: "More branching reduces contact between molecules, weakening intermolecular forces and lowering the boiling point." },
              { kind: "formula", name: "Alkane and alkene formulae", statement: "Alkanes $\\text{C}_n\\text{H}_{2n+2}$; alkenes $\\text{C}_n\\text{H}_{2n}$." },
            ],
            steps: [
              { part: "a", reasoning: "Isomers have the same molecular formula but different structural formulae.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Pentane has 5 carbon atoms, so the alkane formula gives $2\\times5+2 = 12$ hydrogen atoms.", working: "\\text{C}_5\\text{H}_{12}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A central carbon atom is bonded to four methyl groups (a propane chain with two methyl groups on carbon 2).", working: "\\text{C(CH}_3\\text{)}_4", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Check: 5 carbon atoms and 12 hydrogen atoms, which matches $\\text{C}_5\\text{H}_{12}$.", working: "\\text{CH}_3\\text{C(CH}_3\\text{)}_2\\text{CH}_3", marks: 1, markCode: "B" },
              { part: "d", reasoning: "As branching increases, the molecules become more compact and have less surface contact with each other.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So the intermolecular forces between the molecules are weaker.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Less energy is needed to overcome the forces, so the boiling point decreases. Covalent bonds are not broken.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Five carbon atoms in the longest chain, with the double bond starting at carbon 2 (numbering from the left gives the lowest number).", working: "\\text{pent-2-ene}", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Alkene with $n = 5$: $\\text{C}_n\\text{H}_{2n}$.", working: "\\text{C}_5\\text{H}_{10}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) same molecular formula, different structural formula (b) $\\text{C}_5\\text{H}_{12}$ (c) $\\text{C(CH}_3\\text{)}_4$ (d) more branching, less contact, weaker intermolecular forces, lower boiling point (e) pent-2-ene, $\\text{C}_5\\text{H}_{10}$",
            commonErrors: ["Saying that covalent bonds are weaker in branched molecules.", "Naming the alkene pent-3-ene by numbering from the wrong end.", "Giving $\\text{C}_5\\text{H}_{12}$ for the alkene."],
            examinerNote: "In (c) allow a displayed formula showing every atom and bond. In (d) reject 'weaker covalent bonds' or 'bonds break'. Allow 'smaller surface area' for the first mark.",
          },
        },
      ],
    },
  ],
};
