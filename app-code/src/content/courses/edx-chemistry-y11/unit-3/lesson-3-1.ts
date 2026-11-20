import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ech11-u3-lesson-3-1",
  code: "3-1",
  title: "Crude Oil, Fuels and Cracking",
  goal: "I CAN explain how crude oil is separated into fractions, and describe cracking and the products of complete and incomplete combustion.",
  standards: ["4CH1 4.1", "4CH1 4.2", "4CH1 4.3", "4CH1 4.4"],
  vocabulary: [
    { term: "Hydrocarbon", definition: "A compound that contains hydrogen and carbon atoms only." },
    { term: "Crude oil", definition: "A mixture of many hydrocarbons, mostly alkanes, formed over millions of years from the remains of ancient marine organisms." },
    { term: "Fraction", definition: "A group of hydrocarbons with similar boiling points, collected together during fractional distillation." },
    { term: "Fractional distillation", definition: "Separating a mixture of liquids by their different boiling points, using a fractionating column." },
    { term: "Cracking", definition: "The thermal decomposition of long-chain alkanes into shorter, more useful alkanes and alkenes." },
    { term: "Complete combustion", definition: "Burning in a plentiful supply of oxygen, producing carbon dioxide and water only." },
    { term: "Incomplete combustion", definition: "Burning in a limited supply of oxygen, producing carbon monoxide and/or carbon (soot) as well as water." },
  ],
  concepts: [
    {
      id: "ech11-u3-crude-oil-fractional-distillation",
      title: "Crude oil, fractional distillation and fuels",
      skill: "Describe how fractional distillation separates crude oil and link the properties of fractions to chain length and use.",
      lesson: {
        sections: [
          {
            heading: "What crude oil is",
            body: "**Crude oil** is a mixture of hydrocarbons. Most of them are **alkanes**, which are saturated hydrocarbons with the general formula $\\text{C}_n\\text{H}_{2n+2}$. The molecules range from very small (methane, $\\text{CH}_4$) to chains with more than 70 carbon atoms. Because the hydrocarbons are only mixed together and not chemically joined, they keep their own properties and can be separated.",
          },
          {
            heading: "Fractional distillation",
            body: "Crude oil is heated until most of it vaporises and the vapour enters the bottom of a **fractionating column**. The column is **hot at the bottom and cooler at the top**. Vapours rise, and each hydrocarbon condenses when it reaches a height where the temperature is below its boiling point. Each group of hydrocarbons with similar boiling points is a **fraction**.\n\n- **Top**: small molecules, low boiling points, collected as refinery gas\n- **Middle**: petrol, kerosene, diesel\n- **Bottom**: very large molecules with high boiling points, such as bitumen, which stay as liquids or condense almost immediately",
          },
          {
            heading: "Trends down the column and uses",
            body: "As the number of carbon atoms in the chain increases:\n\n- the boiling point **increases** (stronger intermolecular forces between larger molecules)\n- the **viscosity** increases (the liquid is thicker and flows less easily)\n- the **flammability** decreases (the fuel is harder to ignite)\n\nSmall fractions are used as fuels (refinery gas for heating and cooking, petrol for cars, kerosene for aircraft, diesel for lorries and trains). Bitumen is used to surface roads, and some fractions are raw materials for the chemical industry.",
          },
        ],
        keyFormulas: [
          { name: "Alkane general formula", statement: "$\\text{C}_n\\text{H}_{2n+2}$" },
          { name: "Hydrocarbon", statement: "A compound containing hydrogen and carbon only" },
          { name: "Trend down the column", statement: "Longer chains: higher boiling point, more viscous, less flammable" },
          { name: "Percentage of a total", statement: "$\\text{mass of fraction} = \\frac{\\text{percentage}}{100} \\times \\text{total mass}$" },
        ],
        workedExample: {
          problem: "A fractionating column produces two fractions. Fraction X has molecules with 6 carbon atoms and fraction Y has molecules with 25 carbon atoms. State which fraction is collected nearer the top of the column and explain why.",
          solution: "Fraction X is collected nearer the top. Its molecules are smaller, so the intermolecular forces are weaker and its boiling point is lower. It stays as a vapour until it reaches the cooler upper part of the column, whereas fraction Y, with its higher boiling point, condenses lower down where it is hotter.",
        },
      },
      questions: [
        {
          id: "ech11-u3-crude-oil-fractional-distillation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about crude oil is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a single compound made of carbon and hydrogen" },
              { id: "b", text: "It is a mixture of hydrocarbons" },
              { id: "c", text: "It is an element found underground" },
              { id: "d", text: "It is a mixture of alkenes only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crude oil", statement: "Crude oil is a mixture of many hydrocarbons, mostly alkanes, which are not chemically bonded to each other." },
            ],
            steps: [
              { reasoning: "Crude oil contains many different hydrocarbon molecules mixed together, which is why it can be separated by boiling point.", working: "\\text{mixture of hydrocarbons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is a mixture of hydrocarbons",
            commonErrors: ["Choosing (a) because hydrocarbons contain carbon and hydrogen, but crude oil contains many different molecules, so it is not a single compound.", "Choosing (d): crude oil is mostly alkanes, not alkenes."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u3-crude-oil-fractional-distillation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how fractional distillation separates crude oil into fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fractional distillation", statement: "Hydrocarbons in a mixture are separated by their different boiling points, because each condenses at a different temperature in the column." },
            ],
            steps: [
              { reasoning: "The crude oil is heated so that it vaporises and the vapours enter the column.", marks: 1, markCode: "B" },
              { reasoning: "The column is hotter at the bottom and cooler at the top, so the vapours rise and cool.", marks: 1, markCode: "B" },
              { reasoning: "Each hydrocarbon condenses where the temperature is just below its boiling point, so fractions with similar boiling points are collected at different heights. Large molecules (high boiling point) condense near the bottom and small molecules near the top.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Oil is vaporised; vapours rise up a column that is hot at the bottom and cool at the top; fractions condense at different heights according to their boiling points.",
            commonErrors: ["Saying that the column is hotter at the top.", "Saying that the hydrocarbons are separated by their melting points or by chemical reactions."],
            examinerNote: "Allow 'evaporated' for vaporised. Reject 'the oil is burned'. Allow 'temperature gradient in the column' for the second mark.",
          },
        },
        {
          id: "ech11-u3-crude-oil-fractional-distillation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Bitumen has molecules with more than 70 carbon atoms. Petrol has molecules with between 5 and 10 carbon atoms. Compare bitumen and petrol, and explain the differences in their boiling points and in how easily they ignite.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Trends in fractions", statement: "As chain length increases, intermolecular forces increase, so the boiling point and viscosity rise and the flammability falls." },
            ],
            steps: [
              { reasoning: "Bitumen has much longer chains (larger molecules) than petrol.", marks: 1, markCode: "B" },
              { reasoning: "Longer molecules have stronger intermolecular forces between them.", marks: 1, markCode: "B" },
              { reasoning: "More energy is needed to overcome these forces, so bitumen has a much higher boiling point than petrol.", marks: 1, markCode: "B" },
              { reasoning: "Petrol is more volatile and flammable (ignites more easily) and less viscous than bitumen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Bitumen: longer chains, stronger intermolecular forces, higher boiling point, more viscous and harder to ignite. Petrol: shorter chains, lower boiling point, more flammable.",
            commonErrors: ["Saying that covalent bonds break when a hydrocarbon boils. Only the weak intermolecular forces are overcome.", "Saying that bigger molecules are more flammable."],
            examinerNote: "Reject 'stronger covalent bonds' or 'bonds break' for the third mark. Allow 'more volatile' oe for the last mark.",
          },
        },
        {
          id: "ech11-u3-crude-oil-fractional-distillation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A refinery separates crude oil into fractions. The table shows the approximate number of carbon atoms per molecule in some fractions.\n\n| Fraction | Carbon atoms per molecule |\n| --- | --- |\n| Refinery gas | 1 to 4 |\n| Petrol | 5 to 10 |\n| Kerosene | 10 to 16 |\n| Diesel | 14 to 20 |\n| Bitumen | more than 70 |\n\nThe refinery processes 5000 tonnes of crude oil each day. Of this, $18\\%$ is collected as petrol.",
          parts: [
            { label: "a", prompt: "Name the process used to separate crude oil into fractions.", marks: 1 },
            { label: "b", prompt: "State which fraction is collected at the top of the column and explain why.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of petrol collected each day, in tonnes.", marks: 2 },
            { label: "d", prompt: "Explain why kerosene is used as a fuel for aircraft but bitumen is not used as a fuel.", marks: 2 },
            { label: "e", prompt: "State what is meant by the term hydrocarbon.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fractional distillation", statement: "Hydrocarbons separate by boiling point; the smallest molecules have the lowest boiling points and rise highest in the column." },
              { kind: "formula", name: "Percentage of a total", statement: "$\\text{part} = \\frac{\\text{percentage}}{100} \\times \\text{total}$" },
            ],
            steps: [
              { part: "a", reasoning: "Fractions are separated by their different boiling points in a column.", working: "\\text{fractional distillation}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Refinery gas has the smallest molecules (1 to 4 carbon atoms).", working: "\\text{refinery gas}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It has the lowest boiling point, so it stays as a gas until it reaches the coolest part of the column at the top.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Find 18% of the 5000 tonnes.", working: "\\frac{18}{100} \\times 5000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "900\\text{ tonnes}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Kerosene has fairly small molecules, so it is volatile, flows easily and ignites easily.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Bitumen has very large molecules, so it is very viscous, has a high boiling point and is difficult to ignite.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Hydrocarbons contain only hydrogen and carbon.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Fractional distillation (b) Refinery gas, lowest boiling point (c) $900$ tonnes (d) kerosene flammable and runny, bitumen viscous and hard to ignite (e) a compound of hydrogen and carbon only",
            commonErrors: ["Saying that refinery gas is collected at the bottom because it is the lightest.", "In (e), saying that a hydrocarbon is a compound with hydrogen, carbon and oxygen."],
            examinerNote: "In (b) allow 'smallest molecules' or 'weakest intermolecular forces' for the explanation. In (c) allow 900 without a unit for A1 only if the unit is in the stem. In (e) reject 'mixture of hydrogen and carbon'.",
          },
        },
      ],
    },
    {
      id: "ech11-u3-cracking-combustion",
      title: "Cracking and combustion products",
      skill: "Describe and write equations for cracking, and explain the products and pollution from complete and incomplete combustion.",
      lesson: {
        sections: [
          {
            heading: "Cracking",
            body: "Demand for short-chain hydrocarbons (such as petrol) is greater than the supply from crude oil, and long-chain fractions are less useful. **Cracking** breaks long-chain alkanes into shorter, more useful alkanes and **alkenes**. It is a **thermal decomposition** reaction.\n\n- Industrially, the hydrocarbon vapour is passed over a hot catalyst (such as aluminium oxide or silica) at about $600$ to $700^\\circ\\text{C}$, or mixed with steam at a higher temperature.\n- In the laboratory, paraffin or liquid paraffin on mineral wool is heated, and the vapour is passed over hot broken porcelain (the catalyst). The gaseous product is collected over water.\n\nExample: $\\text{C}_{10}\\text{H}_{22} \\rightarrow \\text{C}_8\\text{H}_{18} + \\text{C}_2\\text{H}_4$. The atoms on each side must balance, so a cracking equation always has the same total carbon and hydrogen on both sides.\n\nThe alkenes made are used to make polymers and other chemicals.",
          },
          {
            heading: "Combustion of hydrocarbons",
            body: "In a plentiful supply of oxygen, hydrocarbons burn by **complete combustion** to form carbon dioxide and water:\n\n$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$\n\nWith a limited oxygen supply, **incomplete combustion** produces **carbon monoxide** (and/or carbon, seen as black soot) as well as water:\n\n$$2\\text{CH}_4 + 3\\text{O}_2 \\rightarrow 2\\text{CO} + 4\\text{H}_2\\text{O}$$\n\nCarbon monoxide is a toxic gas that binds to haemoglobin in red blood cells and reduces the oxygen they can carry. It is colourless and has no smell.",
          },
          {
            heading: "Other pollutants",
            body: "- **Carbon dioxide** is a greenhouse gas that contributes to global warming.\n- **Sulfur dioxide** forms when sulfur impurities in fuels burn. It dissolves in rainwater to form acid rain.\n- **Oxides of nitrogen** form in hot engines, when nitrogen and oxygen from the air react. They cause acid rain and breathing problems.\n- **Particulates** (soot) cause lung damage and global dimming.\n\nA **catalytic converter** in a car exhaust converts harmful gases into less harmful ones, for example $2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2$.",
          },
        ],
        keyFormulas: [
          { name: "Complete combustion", statement: "hydrocarbon + oxygen $\\rightarrow$ carbon dioxide + water" },
          { name: "Incomplete combustion", statement: "hydrocarbon + limited oxygen $\\rightarrow$ carbon monoxide and/or carbon + water" },
          { name: "Cracking", statement: "long-chain alkane $\\rightarrow$ shorter alkane + alkene" },
          { name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
        ],
        workedExample: {
          problem: "Propane burns completely: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Calculate the mass of carbon dioxide formed when $22\\text{ g}$ of propane burns completely. ($A_r$: C = 12, H = 1, O = 16)",
          solution: "$M_r$ of propane $= 3\\times12 + 8 = 44$. Moles of propane $= \\frac{22}{44} = 0.5$. From the equation, 1 mol of propane gives 3 mol of $\\text{CO}_2$, so moles of $\\text{CO}_2 = 1.5$. $M_r$ of $\\text{CO}_2 = 44$. Mass $= 1.5 \\times 44 = 66\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "ech11-u3-cracking-combustion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which toxic gas is produced when a hydrocarbon burns in a limited supply of oxygen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Water vapour" },
              { id: "c", text: "Carbon monoxide" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete combustion", statement: "Burning in limited oxygen forms carbon monoxide and/or carbon instead of only carbon dioxide." },
            ],
            steps: [
              { reasoning: "Carbon monoxide is the toxic product of incomplete combustion. Carbon dioxide and water are the products of complete combustion, and nitrogen is not a product of burning a hydrocarbon.", working: "\\text{CO}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon monoxide",
            commonErrors: ["Choosing carbon dioxide because it is the gas most associated with burning fuels. It is not toxic in the way CO is."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech11-u3-cracking-combustion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Dodecane, $\\text{C}_{12}\\text{H}_{26}$, is cracked. One molecule of dodecane forms one molecule of propene, $\\text{C}_3\\text{H}_6$, and one molecule of an alkane X only. Work out the number of carbon atoms and the number of hydrogen atoms in one molecule of X.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms in X", answer: 9 },
              { label: "Hydrogen atoms in X", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are not created or destroyed, so the atoms of each element are the same on both sides of an equation." },
            ],
            steps: [
              { reasoning: "Subtract the atoms in propene from the atoms in dodecane.", working: "\\text{C}: 12 - 3,\\quad \\text{H}: 26 - 6", marks: 1, markCode: "M" },
              { reasoning: "Carbon atoms in X.", working: "12 - 3 = 9", marks: 1, markCode: "A" },
              { reasoning: "Hydrogen atoms in X. This fits $\\text{C}_n\\text{H}_{2n+2}$ for an alkane: $2\\times9+2 = 20$.", working: "26 - 6 = 20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 carbon atoms and 20 hydrogen atoms: X is $\\text{C}_9\\text{H}_{20}$ (nonane).",
            commonErrors: ["Adding the atoms in propene to those in dodecane.", "Giving $\\text{C}_9\\text{H}_{18}$ by forgetting that an alkane has $2n+2$ hydrogen atoms."],
            examinerNote: "Allow A marks independently. Allow ecf from a wrong subtraction for one A mark only if the method is shown.",
          },
        },
        {
          id: "ech11-u3-cracking-combustion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Methane burns completely in oxygen: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. Calculate the mass of carbon dioxide formed when $8.0\\text{ g}$ of methane burns completely. ($A_r$: C = 12, H = 1, O = 16)",
          response: { type: "numeric", parts: [{ label: "Mass of carbon dioxide", answer: 22, tolerance: 0.1, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$, so $\\text{mass} = \\text{moles} \\times M_r$" },
              { kind: "principle", name: "Mole ratio", statement: "The coefficients in a balanced equation give the ratio of moles of reactants and products." },
            ],
            steps: [
              { reasoning: "Find the moles of methane. $M_r(\\text{CH}_4) = 12 + 4 = 16$.", working: "\\frac{8.0}{16} = 0.50\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio $\\text{CH}_4 : \\text{CO}_2$ is 1 : 1, so moles of $\\text{CO}_2$ equal moles of methane. $M_r(\\text{CO}_2) = 12 + 32 = 44$.", working: "0.50 \\times 44", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "22\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$22\\text{ g}$",
            commonErrors: ["Using 8.0 g as if it were the moles.", "Using $M_r = 16$ for carbon dioxide."],
            examinerNote: "M1 for 0.5 mol. M1 for multiplying moles of $\\text{CO}_2$ by 44 (allow ecf). A1 cao, unit required.",
          },
        },
        {
          id: "ech11-u3-cracking-combustion-q4",
          difficulty: "challenge",
          totalMarks: 11,
          stem: "Octane, $\\text{C}_8\\text{H}_{18}$, is a component of petrol. In a car engine it burns in air. When there is plenty of oxygen, the equation for the reaction is:\n\n$$2\\text{C}_8\\text{H}_{18} + 25\\text{O}_2 \\rightarrow 16\\text{CO}_2 + 18\\text{H}_2\\text{O}$$\n\n($A_r$: C = 12, H = 1, O = 16)",
          parts: [
            { label: "a", prompt: "When the oxygen supply is limited, carbon monoxide is formed. Name the effect of carbon monoxide on the blood that makes it poisonous.", marks: 2 },
            { label: "b", prompt: "Write a balanced equation for the incomplete combustion of octane to form carbon monoxide and water only.", marks: 2 },
            { label: "c", prompt: "Calculate the mass of carbon dioxide formed when $57\\text{ g}$ of octane burns completely.", marks: 3 },
            { label: "d", prompt: "Explain how oxides of nitrogen are formed in a car engine and state one environmental problem they cause.", marks: 2 },
            { label: "e", prompt: "Describe how a catalytic converter reduces the pollution from the exhaust gases.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Incomplete combustion", statement: "Limited oxygen produces carbon monoxide, which is toxic." },
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "law", name: "Conservation of mass", statement: "Atoms are conserved, so the equation must balance." },
            ],
            steps: [
              { part: "a", reasoning: "Carbon monoxide combines with haemoglobin in red blood cells.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "This reduces the amount of oxygen the blood can carry (so cells are starved of oxygen).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Correct formulas for all substances: octane, oxygen, carbon monoxide and water.", working: "\\text{C}_8\\text{H}_{18}, \\text{O}_2, \\text{CO}, \\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Balanced: 16 C, 36 H and 34 O atoms on each side.", working: "2\\text{C}_8\\text{H}_{18} + 17\\text{O}_2 \\rightarrow 16\\text{CO} + 18\\text{H}_2\\text{O}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$M_r(\\text{C}_8\\text{H}_{18}) = 8\\times12 + 18 = 114$. Find the moles of octane.", working: "\\frac{57}{114} = 0.5\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "From the equation, 2 mol of octane give 16 mol of $\\text{CO}_2$, a ratio of 1 : 8.", working: "0.5 \\times 8 = 4\\text{ mol}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$M_r(\\text{CO}_2) = 44$, so find the mass.", working: "4 \\times 44 = 176\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The high temperature in the engine allows nitrogen and oxygen from the air to react.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any one problem: acid rain, or breathing difficulties (respiratory problems), or photochemical smog.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The catalyst converts carbon monoxide and oxides of nitrogen into carbon dioxide and nitrogen.", working: "2\\text{CO} + 2\\text{NO} \\rightarrow 2\\text{CO}_2 + \\text{N}_2", marks: 1, markCode: "B" },
              { part: "e", reasoning: "These products are much less harmful: nitrogen is already 78% of the air and carbon dioxide is not toxic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) CO combines with haemoglobin and reduces oxygen transport (b) $2\\text{C}_8\\text{H}_{18} + 17\\text{O}_2 \\rightarrow 16\\text{CO} + 18\\text{H}_2\\text{O}$ (c) $176\\text{ g}$ (d) high temperature lets N$_2$ and O$_2$ react; acid rain (e) converts CO and NO into CO$_2$ and N$_2$",
            commonErrors: ["Writing $\\text{C}_8\\text{H}_{18} + 9\\text{O}_2 \\rightarrow 8\\text{CO} + 9\\text{H}_2\\text{O}$, which has 18 oxygen atoms on the left but only 17 on the right.", "Using the ratio 2 : 16 as 1 : 16, giving 8 mol of carbon dioxide.", "Saying that oxides of nitrogen come from nitrogen in the fuel."],
            examinerNote: "In (b) allow multiples, for example $\\text{C}_8\\text{H}_{18} + \\tfrac{17}{2}\\text{O}_2 \\rightarrow 8\\text{CO} + 9\\text{H}_2\\text{O}$. In (c) A1 cao 176, unit required; allow ecf. In (d) reject sulfur dioxide, which comes from sulfur impurities and not from the air.",
          },
        },
      ],
    },
  ],
};
