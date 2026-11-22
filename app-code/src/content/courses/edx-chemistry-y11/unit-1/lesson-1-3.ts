import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ech11-u1-lesson-1-3",
  code: "1-3",
  title: "Equilibrium",
  goal: "I CAN describe reversible reactions and dynamic equilibrium and predict how changing conditions affects the position of equilibrium and the conditions used in the Haber process.",
  standards: ["4CH1 3.15", "4CH1 3.16", "4CH1 3.17", "4CH1 3.18", "4CH1 3.19"],
  vocabulary: [
    { term: "Reversible reaction", definition: "A reaction in which the products can react to re-form the reactants. It is shown with the symbol $\\rightleftharpoons$." },
    { term: "Dynamic equilibrium", definition: "The state in a closed system where the rate of the forward reaction equals the rate of the reverse reaction, so the amounts of reactants and products stay constant." },
    { term: "Position of equilibrium", definition: "Whether the mixture at equilibrium contains more products (to the right) or more reactants (to the left)." },
    { term: "Le Chatelier's principle", definition: "If a change is made to a system at equilibrium, the position of equilibrium shifts to oppose the change." },
    { term: "Yield", definition: "The amount of product obtained, often given as a percentage of the maximum possible amount." },
    { term: "Haber process", definition: "The industrial manufacture of ammonia from nitrogen and hydrogen using an iron catalyst." },
  ],
  concepts: [
    {
      id: "ech11-u1-reversible-equilibrium",
      title: "Reversible reactions and equilibrium",
      skill: "Describe reversible reactions, explain dynamic equilibrium and do reacting-mass and yield calculations.",
      lesson: {
        sections: [
          {
            heading: "Reversible reactions",
            body: "Some reactions can go in both directions. The forward and reverse reactions are shown with $\\rightleftharpoons$. If the forward reaction is exothermic, the reverse reaction is endothermic by the same amount of energy.\n\nExample: heating blue hydrated copper(II) sulfate drives off the water to give white anhydrous copper(II) sulfate. Adding water reverses the change, with a temperature rise.\n\n$$\\text{CuSO}_4\\cdot5\\text{H}_2\\text{O} \\rightleftharpoons \\text{CuSO}_4 + 5\\text{H}_2\\text{O}$$\n\nAnother example is ammonium chloride, which decomposes on heating into ammonia and hydrogen chloride that recombine on cooling.",
          },
          {
            heading: "Dynamic equilibrium",
            body: "In a **closed system** (nothing can escape) a reversible reaction reaches **dynamic equilibrium**. At equilibrium:\n\n- the rate of the forward reaction equals the rate of the reverse reaction\n- the concentrations of reactants and products stay **constant** (but not necessarily equal)\n- both reactions are still happening, which is why it is called dynamic.",
          },
          {
            heading: "Yield calculations",
            body: "Because reversible reactions do not go to completion, the actual yield is less than the theoretical yield.\n\n$$\\text{percentage yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$\n\nUse the balanced equation and $\\text{moles} = \\frac{\\text{mass}}{M_r}$ to find the theoretical yield.",
          },
        ],
        keyFormulas: [
          { name: "Dynamic equilibrium", statement: "Rate of forward reaction = rate of reverse reaction; concentrations constant; closed system" },
          { name: "Percentage yield", statement: "$\\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$" },
          { name: "Moles", statement: "$n = \\frac{\\text{mass}}{M_r}$" },
        ],
        workedExample: {
          problem: "Calculate the maximum mass of ammonia that can form from $28\\text{ g}$ of nitrogen in $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$. ($A_r$: N = 14, H = 1.)",
          solution: "Moles of $\\text{N}_2 = \\frac{28}{28} = 1.0\\text{ mol}$. Ratio $\\text{N}_2 : \\text{NH}_3 = 1 : 2$, so $2.0\\text{ mol}$ of $\\text{NH}_3$. $M_r(\\text{NH}_3) = 17$, so mass $= 2.0 \\times 17 = 34\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "ech11-u1-reversible-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes a reversible reaction at dynamic equilibrium in a closed system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The forward and reverse reactions have both stopped" },
              { id: "b", text: "All of the reactants have been used up" },
              { id: "c", text: "The concentrations of reactants and products are equal" },
              { id: "d", text: "The forward and reverse reactions happen at the same rate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "The rate of the forward reaction equals the rate of the reverse reaction, so concentrations stay constant." },
            ],
            steps: [
              { reasoning: "At equilibrium both reactions continue at equal rates. The reactions have not stopped, and the concentrations are constant but not necessarily equal.", working: "\\text{rate}_{\\text{forward}} = \\text{rate}_{\\text{reverse}}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The forward and reverse reactions happen at the same rate",
            commonErrors: ["Thinking the reactions stop at equilibrium.", "Thinking the concentrations must be equal."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ech11-u1-reversible-equilibrium-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the Haber process, a reaction vessel produces $6.8\\text{ g}$ of ammonia. The maximum possible mass from the nitrogen supplied is $34\\text{ g}$. Calculate the percentage yield.",
          response: { type: "numeric", parts: [{ label: "Percentage yield", answer: 20, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage yield", statement: "$\\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Identify the actual yield (6.8 g) and theoretical yield (34 g).", working: "\\text{actual} = 6.8\\text{ g},\\ \\text{theoretical} = 34\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "Divide actual by theoretical and multiply by 100.", working: "\\frac{6.8}{34} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20\\%$",
            commonErrors: ["Dividing theoretical by actual, giving $500\\%$."],
            examinerNote: "A1 cao. Allow 20.0.",
          },
        },
        {
          id: "ech11-u1-reversible-equilibrium-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Hydrated copper(II) sulfate decomposes on heating: $\\text{CuSO}_4\\cdot5\\text{H}_2\\text{O} \\rightleftharpoons \\text{CuSO}_4 + 5\\text{H}_2\\text{O}$. Calculate the mass of water driven off when $12.5\\text{ g}$ of hydrated copper(II) sulfate is heated until it is completely anhydrous. ($A_r$: Cu = 64, S = 32, O = 16, H = 1.)",
          response: { type: "numeric", parts: [{ label: "Mass of water", answer: 4.5, tolerance: 0.05, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$n = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { reasoning: "Find $M_r$ of the hydrated salt and the moles used.", working: "M_r = 160 + 5(18) = 250,\\quad n = \\frac{12.5}{250} = 0.050\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio is 1 mole of salt to 5 moles of water.", working: "0.050 \\times 5 = 0.25\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Convert moles of water to mass.", working: "0.25 \\times 18 = 4.5\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.5\\text{ g}$",
            commonErrors: ["Using only one mole of water per mole of salt, giving $0.9\\text{ g}$.", "Forgetting to include the water in $M_r$ of the hydrated salt."],
            examinerNote: "Allow ecf from a wrong $M_r$. Accept 4.5 g only with correct working.",
          },
        },
        {
          id: "ech11-u1-reversible-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "White anhydrous copper(II) sulfate turns blue when water is added, and the mixture becomes warm. Heating the blue solid turns it white again.\n\nThe equation is $\\text{CuSO}_4 + 5\\text{H}_2\\text{O} \\rightleftharpoons \\text{CuSO}_4\\cdot5\\text{H}_2\\text{O}$.",
          parts: [
            { label: "a", prompt: "State what the symbol $\\rightleftharpoons$ shows.", marks: 1 },
            { label: "b", prompt: "State whether the forward reaction is exothermic or endothermic. Give a reason.", marks: 2 },
            { label: "c", prompt: "State the energy change for the reverse reaction.", marks: 1 },
            { label: "d", prompt: "Describe what is meant by dynamic equilibrium.", marks: 3 },
            { label: "e", prompt: "Explain why a reversible reaction in an open container cannot reach equilibrium.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reversible reaction", statement: "The products can react to re-form the reactants, so the reaction can go in either direction." },
              { kind: "definition", name: "Dynamic equilibrium", statement: "In a closed system, the forward and reverse reaction rates are equal and the concentrations are constant." },
            ],
            steps: [
              { part: "a", reasoning: "The reaction is reversible: it can go in both directions.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The forward reaction is exothermic.", working: "\\text{exothermic}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The temperature rises (the mixture becomes warm), so energy is transferred to the surroundings.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The reverse reaction is endothermic, taking in the same amount of energy.", working: "\\text{endothermic}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It happens in a closed system, where nothing can enter or leave.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The rate of the forward reaction equals the rate of the reverse reaction.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So the concentrations of reactants and products stay constant, although both reactions are still taking place.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "In an open container, a product or reactant (for example water vapour or gas) can escape.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "So the amounts cannot remain constant and the reverse reaction cannot balance the forward reaction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) reversible reaction (b) exothermic, temperature rises (c) endothermic (d) closed system, equal rates, constant concentrations (e) substances escape",
            commonErrors: ["Saying that the reactions stop at equilibrium.", "Saying that the amounts of reactants and products are equal."],
            examinerNote: "In (d) reject 'the reactions stop' and 'concentrations are equal'. Allow 'heat' for energy.",
          },
        },
      ],
    },
    {
      id: "ech11-u1-le-chatelier-haber",
      title: "Le Chatelier's principle and the Haber process",
      skill: "Predict shifts in equilibrium and explain the conditions chosen for the Haber process.",
      lesson: {
        sections: [
          {
            heading: "Le Chatelier's principle",
            body: "If a system at equilibrium is disturbed, the position of equilibrium moves to **oppose** the change.\n\n- **Pressure** (gases): increasing pressure shifts the equilibrium towards the side with **fewer gas molecules**. Decreasing pressure shifts it to the side with more gas molecules.\n- **Temperature**: increasing temperature shifts the equilibrium in the **endothermic** direction. Decreasing temperature favours the exothermic direction.\n- **Concentration**: increasing the concentration of a reactant shifts the equilibrium towards the products, and removing a product also shifts it towards the products.\n- **Catalyst**: no change in the position of equilibrium. It speeds up the forward and reverse reactions equally, so equilibrium is reached faster.",
          },
          {
            heading: "The Haber process",
            body: "$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\qquad \\Delta H = -92\\text{ kJ/mol}$$\n\nNitrogen comes from the air and hydrogen from natural gas (methane). Typical conditions are about $450^\\circ\\text{C}$, $200\\text{ atm}$ and an **iron** catalyst. Unreacted nitrogen and hydrogen are recycled, and the ammonia is liquefied and removed, which pulls the equilibrium to the right.",
          },
          {
            heading: "Why these conditions?",
            body: "The forward reaction is exothermic and has 4 molecules of gas on the left but 2 on the right.\n\n- **Pressure**: high pressure favours ammonia (fewer molecules) and increases rate, but very high pressure is expensive (strong pipes, much energy) and unsafe, so about $200\\text{ atm}$ is a compromise.\n- **Temperature**: a low temperature would give a higher yield, but the rate would be too slow. $450^\\circ\\text{C}$ is a compromise between yield and rate.\n- **Catalyst**: iron increases the rate at a lower temperature, saving energy.",
          },
        ],
        keyFormulas: [
          { name: "Le Chatelier's principle", statement: "A change to a system at equilibrium shifts the position to oppose the change" },
          { name: "Haber process", statement: "$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$, $\\Delta H = -92\\text{ kJ/mol}$" },
          { name: "Haber conditions", statement: "$450^\\circ\\text{C}$, $200\\text{ atm}$, iron catalyst" },
        ],
        workedExample: {
          problem: "Predict the effect of increasing the pressure on the yield of ammonia in the Haber process.",
          solution: "Left side: $1 + 3 = 4$ molecules of gas. Right side: 2 molecules of gas. Increasing pressure shifts the equilibrium towards the side with fewer gas molecules, so the position moves right and the yield of ammonia increases.",
        },
      },
      questions: [
        {
          id: "ech11-u1-le-chatelier-haber-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the Haber process, what is the catalyst?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Manganese(IV) oxide" },
              { id: "c", text: "Platinum" },
              { id: "d", text: "Vanadium(V) oxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Haber process catalyst", statement: "The Haber process uses an iron catalyst." },
            ],
            steps: [
              { reasoning: "Iron is the catalyst for ammonia manufacture. Vanadium(V) oxide is used in the Contact process.", working: "\\text{iron}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Iron",
            commonErrors: ["Choosing vanadium(V) oxide, the catalyst in the Contact process."],
            examinerNote: "B1 for iron.",
          },
        },
        {
          id: "ech11-u1-le-chatelier-haber-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Consider the equilibrium $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$. State and explain the effect of increasing the pressure on the position of equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "Increasing pressure shifts the equilibrium to the side with fewer gas molecules." },
            ],
            steps: [
              { reasoning: "The equilibrium shifts to the right (towards ammonia).", marks: 1, markCode: "B" },
              { reasoning: "There are fewer molecules of gas on the right (2) than on the left (4), so the change is opposed by reducing the pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Shifts to the right, because there are 2 molecules of gas on the right and 4 on the left.",
            commonErrors: ["Saying it shifts to the left because ammonia is a gas.", "Saying that the rate decreases at higher pressure."],
            examinerNote: "The second mark needs a comparison of the numbers of gas molecules (or moles). Allow 'more ammonia is made' for the first mark.",
          },
        },
        {
          id: "ech11-u1-le-chatelier-haber-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The forward reaction in the Haber process is exothermic. A temperature of $450^\\circ\\text{C}$ is used. Explain why this temperature is used instead of a much lower temperature such as $100^\\circ\\text{C}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "Lower temperature shifts the equilibrium in the exothermic direction." },
              { kind: "principle", name: "Collision theory", statement: "Lower temperature gives a lower rate because fewer collisions have energy of at least the activation energy." },
            ],
            steps: [
              { reasoning: "The forward reaction is exothermic, so a lower temperature shifts the equilibrium right and increases the yield of ammonia.", marks: 1, markCode: "B" },
              { reasoning: "At a low temperature the particles have less energy and collide less often.", marks: 1, markCode: "B" },
              { reasoning: "Fewer collisions have energy of at least the activation energy, so the rate is very slow.", marks: 1, markCode: "B" },
              { reasoning: "At $450^\\circ\\text{C}$ equilibrium is reached much more quickly, but the yield is lower.", marks: 1, markCode: "B" },
              { reasoning: "So $450^\\circ\\text{C}$ is a compromise giving an acceptable yield at an economical rate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A low temperature gives a higher yield but a rate that is too slow; $450^\\circ\\text{C}$ is a compromise between yield and rate.",
            commonErrors: ["Saying that a higher temperature increases the yield of ammonia.", "Mentioning only rate or only yield."],
            examinerNote: "Both yield and rate must be addressed for full marks. Allow 'slower' oe for the second and third marks.",
          },
        },
        {
          id: "ech11-u1-le-chatelier-haber-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Ammonia is made by the Haber process: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H = -92\\text{ kJ/mol}$. The conditions are $450^\\circ\\text{C}$, $200\\text{ atm}$ and an iron catalyst.",
          parts: [
            { label: "a", prompt: "Calculate the mass of hydrogen needed to make $34\\text{ g}$ of ammonia, assuming complete reaction. ($A_r$: N = 14, H = 1.) Give your answer in grams.", marks: 3 },
            { label: "b", prompt: "A student suggests using a pressure of $1000\\text{ atm}$. State the effect on the yield and give one disadvantage.", marks: 2 },
            { label: "c", prompt: "Explain what happens to the position of equilibrium if the temperature is raised.", marks: 2 },
            { label: "d", prompt: "State the effect of the iron catalyst on the yield and on the rate, and explain why it is used.", marks: 2 },
            { label: "e", prompt: "Explain why the ammonia is cooled and removed as a liquid and the unreacted gases are recycled.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "The position of equilibrium shifts to oppose any change in conditions." },
              { kind: "formula", name: "Moles", statement: "$n = \\frac{\\text{mass}}{M_r}$ and the balanced equation gives the mole ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Find the moles of ammonia, $M_r = 17$.", working: "n(\\text{NH}_3) = \\frac{34}{17} = 2.0\\text{ mol}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Use the ratio $\\text{NH}_3 : \\text{H}_2 = 2 : 3$.", working: "n(\\text{H}_2) = 2.0 \\times \\frac{3}{2} = 3.0\\text{ mol}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mass of hydrogen, $M_r(\\text{H}_2) = 2$.", working: "3.0 \\times 2 = 6.0\\text{ g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The yield of ammonia increases, because there are fewer gas molecules on the right.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Disadvantage: very expensive equipment (strong pipes and vessels) and high energy costs, or a greater safety risk.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The forward reaction is exothermic, so the equilibrium shifts to the left (the endothermic direction) to oppose the temperature rise.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So the yield of ammonia decreases.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The catalyst has no effect on the yield (position of equilibrium) but increases the rate at which equilibrium is reached.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It lets the reaction be fast enough at a lower temperature, which saves energy and cost.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Removing ammonia shifts the equilibrium to the right, and recycling the reactants gives a higher overall yield and reduces waste.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6.0\\text{ g}$ (b) yield increases; expensive or unsafe (c) shifts left, yield falls (d) no effect on yield, faster rate, lower temperature possible (e) higher overall yield",
            commonErrors: ["Using $M_r(\\text{H}_2) = 1$ giving 3 g.", "Using the ratio 1:1 for ammonia and hydrogen.", "Saying that a catalyst increases the yield."],
            examinerNote: "In (a) allow ecf from the moles of ammonia. In (b) reject 'the reaction will be slower'. In (d) both effects are required for the first mark.",
          },
        },
      ],
    },
  ],
};
