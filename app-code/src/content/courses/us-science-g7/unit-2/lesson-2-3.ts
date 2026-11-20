import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "s7-u2-lesson-2-3",
  code: "2-3",
  title: "Chemical Reactions",
  goal: "I CAN use conservation of mass to count atoms and balance simple equations, and I CAN explain endothermic and exothermic processes and design a hot or cold pack.",
  standards: ["MS-PS1-5", "MS-PS1-6", "SEP: Developing and Using Models", "SEP: Constructing Explanations and Designing Solutions"],
  vocabulary: [
    { term: "Reactant", definition: "A substance that is present at the start of a chemical reaction and is used up." },
    { term: "Product", definition: "A new substance formed in a chemical reaction." },
    { term: "Conservation of mass", definition: "In a closed system, the total mass of the reactants equals the total mass of the products because atoms are rearranged, not created or destroyed." },
    { term: "Coefficient", definition: "The number written in front of a formula in an equation to show how many units of that substance take part." },
    { term: "Exothermic", definition: "A process that releases thermal energy to the surroundings, so the surroundings get warmer." },
    { term: "Endothermic", definition: "A process that absorbs thermal energy from the surroundings, so the surroundings get cooler." },
    { term: "Closed system", definition: "A system in which no matter can enter or leave." },
  ],
  concepts: [
    {
      id: "s7-u2-conservation-balancing",
      title: "Conservation of mass and balancing equations",
      skill: "Use conservation of mass to count atoms and balance simple chemical equations.",
      lesson: {
        sections: [
          {
            heading: "Atoms are rearranged, not lost",
            body: "In a chemical reaction the atoms of the **reactants** break apart and join in new ways to make the **products**. No atoms are created or destroyed, so the total mass stays the same in a **closed system**. This is the **law of conservation of mass**.\n\nIf a reaction seems to lose or gain mass, matter has usually entered or left the system. When baking soda reacts with vinegar in an open cup, the gas escapes into the air, so the cup gets lighter. In a sealed bag the mass stays the same.",
          },
          {
            heading: "Writing and balancing equations",
            body: "A chemical equation uses formulas to show a reaction. A small number after a symbol (a subscript) is part of the formula: $\\text{H}_2\\text{O}$ has 2 hydrogen atoms and 1 oxygen atom. A large number in front (a coefficient) multiplies the whole formula: $2\\text{H}_2\\text{O}$ means 2 molecules, so 4 hydrogen atoms and 2 oxygen atoms.\n\nTo balance an equation:\n\n- Count each kind of atom on both sides.\n- Change only coefficients, never the subscripts.\n- Repeat until every kind of atom is equal on both sides.\n\nExample: $2\\text{H}_2+\\text{O}_2\\rightarrow2\\text{H}_2\\text{O}$ has 4 H and 2 O on each side, so it is balanced.",
          },
        ],
        keyFormulas: [
          { name: "Conservation of mass", statement: "Total mass of reactants = total mass of products (closed system)" },
          { name: "Balanced equation", statement: "Each kind of atom has the same count on both sides" },
          { name: "Water formation", statement: "$2\\text{H}_2+\\text{O}_2\\rightarrow2\\text{H}_2\\text{O}$" },
        ],
        workedExample: {
          problem: "Balance the equation for burning methane: $\\text{CH}_4+\\text{O}_2\\rightarrow\\text{CO}_2+\\text{H}_2\\text{O}$.",
          solution: "Count atoms on the left: 1 C, 4 H, 2 O. Right: 1 C, 2 H, 3 O. Balance H by writing $2\\text{H}_2\\text{O}$, which gives 4 H and 2 O in the water, so the right side has 1 C, 4 H, 4 O. Balance O by writing $2\\text{O}_2$, which gives 4 O on the left. Final equation: $\\text{CH}_4+2\\text{O}_2\\rightarrow\\text{CO}_2+2\\text{H}_2\\text{O}$ with 1 C, 4 H, 4 O on each side.",
        },
      },
      questions: [
        {
          id: "s7-u2-conservation-balancing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many hydrogen atoms are shown in $3\\text{H}_2\\text{O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "5" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Coefficient and subscript", statement: "A coefficient multiplies the whole formula; a subscript counts atoms within one unit." },
            ],
            steps: [
              { reasoning: "Each water molecule has 2 hydrogen atoms and there are 3 molecules, so the count is the product.", working: "3\\times2=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 6",
            commonErrors: ["Choosing 2, ignoring the coefficient.", "Choosing 5 by adding the 3 and the 2."],
            examinerNote: "B1 for 6.",
          },
        },
        {
          id: "s7-u2-conservation-balancing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a sealed container, 12 g of magnesium burns completely with 8 g of oxygen to form magnesium oxide only.\n\nCalculate the mass of magnesium oxide formed.",
          response: { type: "numeric", parts: [{ label: "Mass of magnesium oxide", answer: 20, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "In a closed system the mass of the products equals the mass of the reactants." },
            ],
            steps: [
              { reasoning: "The total mass of products equals the total mass of reactants, so add the reactant masses.", working: "12+8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with a unit.", working: "20\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 g",
            commonErrors: ["Subtracting the masses to get 4 g.", "Thinking some mass disappears when the metal burns."],
            examinerNote: "M1 for 12 + 8. A1 for 20 g.",
          },
        },
        {
          id: "s7-u2-conservation-balancing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Hydrogen and nitrogen react to make ammonia: $\\text{N}_2+3\\text{H}_2\\rightarrow2\\text{NH}_3$.\n\nUse atom counts to explain why this equation is balanced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are rearranged, not created or destroyed, so each kind of atom must have the same count on both sides." },
            ],
            steps: [
              { reasoning: "Left side nitrogen: one $\\text{N}_2$ molecule has 2 N atoms.", marks: 1, markCode: "B" },
              { reasoning: "Left side hydrogen: $3\\text{H}_2$ has $3\\times2=6$ H atoms.", marks: 1, markCode: "B" },
              { reasoning: "Right side: $2\\text{NH}_3$ has 2 N atoms and $2\\times3=6$ H atoms.", marks: 1, markCode: "B" },
              { reasoning: "The counts are equal (2 N and 6 H on each side), so no atoms are lost or gained, in agreement with conservation of mass.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Both sides have 2 nitrogen atoms and 6 hydrogen atoms, so the equation is balanced.",
            commonErrors: ["Counting only the molecules (4 on the left, 2 on the right) instead of atoms.", "Forgetting to multiply the coefficient by the subscript."],
            examinerNote: "B1 for each correct atom count on the left and right (N and H). R1 for a conclusion linked to equal numbers and conservation of mass.",
          },
        },
        {
          id: "s7-u2-conservation-balancing-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student places 50.0 g of vinegar and 5.0 g of baking soda in a flask on a balance. The total mass is 155.0 g, including the flask. The student mixes them and the mixture fizzes. After the fizzing stops, the balance reads 152.8 g. The flask was open to the air.\n\nThe student then plans to repeat the experiment in a sealed flask.",
          parts: [
            { label: "a", prompt: "Calculate the mass lost.", marks: 2 },
            { label: "b", prompt: "Explain why the mass decreased, using the law of conservation of mass.", marks: 3 },
            { label: "c", prompt: "Predict the reading on the balance in a sealed flask, and explain why.", marks: 2 },
            { label: "d", prompt: "Balance the equation $\\text{Mg}+\\text{O}_2\\rightarrow\\text{MgO}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "In a closed system, total mass stays the same during a chemical reaction." },
              { kind: "principle", name: "Balancing", statement: "Change only coefficients so each kind of atom has the same count on both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the final mass from the starting mass.", working: "155.0-152.8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with a unit.", working: "2.2\\text{ g}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A gas (carbon dioxide) was produced in the reaction.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The flask was open, so the gas escaped into the air and its mass was not measured.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mass was not destroyed: the atoms were only rearranged, and the total mass is conserved if the gas is included.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The reading would stay at 155.0 g.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "In a sealed flask no gas can escape, so it is a closed system and total mass is conserved.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Balance oxygen by writing 2 MgO, which gives 2 O on each side.", working: "\\text{Mg}+\\text{O}_2\\rightarrow2\\text{MgO}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Balance magnesium by writing 2 Mg, giving 2 Mg and 2 O on each side.", working: "2\\text{Mg}+\\text{O}_2\\rightarrow2\\text{MgO}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2.2 g (b) Gas escaped from the open flask, so mass is conserved in total (c) 155.0 g, as the gas stays in the closed system (d) $2\\text{Mg}+\\text{O}_2\\rightarrow2\\text{MgO}$",
            commonErrors: ["Saying the reaction destroyed 2.2 g of matter.", "In (d) changing the formula to $\\text{MgO}_2$ instead of changing coefficients."],
            examinerNote: "(a) Allow 2.2 without unit if unit appears in working. (c) Allow 'about 155 g' oe. (d) Allow multiples of the coefficients only if the equation is correct in lowest terms for B marks.",
          },
        },
      ],
    },
    {
      id: "s7-u2-endo-exothermic",
      title: "Endothermic and exothermic processes",
      skill: "Classify processes as endothermic or exothermic using temperature data, and design a hot or cold pack.",
      lesson: {
        sections: [
          {
            heading: "Energy changes in reactions",
            body: "Chemical reactions and dissolving often transfer thermal energy between the substances and their surroundings.\n\n- In an **exothermic** process, thermal energy is released to the surroundings. The temperature of the surroundings goes **up**. Burning fuels, hand warmers and many neutralizations are exothermic.\n- In an **endothermic** process, thermal energy is absorbed from the surroundings. The temperature of the surroundings goes **down**. Instant cold packs and photosynthesis are endothermic.\n\nEnergy is conserved: it moves between the substances and the surroundings but is not created or destroyed.",
          },
          {
            heading: "Measuring and comparing",
            body: "To find out whether a process is endothermic or exothermic, measure the temperature of the water or solution before and after.\n\n$$\\Delta T=T_{\\text{final}}-T_{\\text{initial}}$$\n\nA positive $\\Delta T$ means exothermic. A negative $\\Delta T$ means endothermic. Repeat trials, calculate a mean and treat any result far from the others as an **anomaly** that should not be included.",
          },
          {
            heading: "Designing a hot or cold pack",
            body: "A hot or cold pack has an inner bag of a solid salt and an outer bag of water. Squeezing breaks the inner bag so the salt dissolves. Calcium chloride dissolving is exothermic (hot pack). Ammonium nitrate dissolving is endothermic (cold pack).\n\nWhen designing a pack, state the criteria (target temperature change, safety, cost) and constraints (amount of salt and water), then test designs by changing one variable at a time, such as the mass of salt, while keeping the volume of water, starting temperature and container the same.",
          },
        ],
        keyFormulas: [
          { name: "Temperature change", statement: "$\\Delta T=T_{\\text{final}}-T_{\\text{initial}}$" },
          { name: "Exothermic", statement: "Releases energy; $\\Delta T>0$" },
          { name: "Endothermic", statement: "Absorbs energy; $\\Delta T<0$" },
        ],
        workedExample: {
          problem: "A student dissolves a salt in 100 mL of water. The temperature changes from $21.0^\\circ\\text{C}$ to $33.5^\\circ\\text{C}$. Calculate $\\Delta T$ and state whether the process is endothermic or exothermic.",
          solution: "$\\Delta T=33.5-21.0=12.5^\\circ\\text{C}$. The temperature of the water increased, so energy was released to the surroundings. The process is **exothermic**, and the salt could be used in a hot pack.",
        },
      },
      questions: [
        {
          id: "s7-u2-endo-exothermic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A process makes the temperature of its surroundings **decrease**. What type of process is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exothermic, because it releases energy" },
              { id: "b", text: "Exothermic, because it absorbs energy" },
              { id: "c", text: "Endothermic, because it releases energy" },
              { id: "d", text: "Endothermic, because it absorbs energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic", statement: "An endothermic process absorbs thermal energy from the surroundings, which get cooler." },
            ],
            steps: [
              { reasoning: "The surroundings cool because energy moves from them into the process, so it is endothermic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Endothermic, because it absorbs energy",
            commonErrors: ["Thinking a cold feeling means energy is released.", "Mixing up the meaning of the two terms."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "s7-u2-endo-exothermic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student dissolves a salt in water. The temperature of the water falls from $22.0^\\circ\\text{C}$ to $9.0^\\circ\\text{C}$.\n\nCalculate the temperature change $\\Delta T$ (final minus initial) in $^\\circ\\text{C}$.",
          response: { type: "numeric", parts: [{ label: "Temperature change", answer: -13, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T=T_{\\text{final}}-T_{\\text{initial}}$" },
            ],
            steps: [
              { reasoning: "Subtract the initial temperature from the final temperature.", working: "\\Delta T=9.0-22.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The negative sign shows the process is endothermic.", working: "\\Delta T=-13.0^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-13^\\circ\\text{C}$ (endothermic)",
            commonErrors: ["Giving +13 and missing that the temperature fell.", "Subtracting in the wrong order."],
            examinerNote: "M1 for 9.0 - 22.0 (oe). A1 for -13. Allow a decrease of 13 degrees if the sign is explained.",
          },
        },
        {
          id: "s7-u2-endo-exothermic-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student measures the temperature rise when a salt dissolves in water in four trials: $12.1^\\circ\\text{C}$, $11.9^\\circ\\text{C}$, $15.8^\\circ\\text{C}$ and $12.0^\\circ\\text{C}$. The third result is an anomaly.\n\nCalculate the mean temperature rise, leaving out the anomaly.",
          response: { type: "numeric", parts: [{ label: "Mean temperature rise", answer: 12, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Handling anomalies", statement: "An anomalous result is excluded before calculating a mean." },
            ],
            steps: [
              { reasoning: "Ignore the anomaly (15.8) and add the remaining three values.", working: "12.1+11.9+12.0=36.0", marks: 1, markCode: "M" },
              { reasoning: "Divide by the number of remaining trials.", working: "\\frac{36.0}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12.0^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.0^\\circ\\text{C}$",
            commonErrors: ["Including 15.8 in the mean, giving 12.95.", "Dividing 36.0 by 4."],
            examinerNote: "M1 for excluding 15.8 and adding. M1 for dividing by 3. A1 for 12.0. Using all four values scores 0 for the first M mark and a maximum of 1 for the second (ecf not allowed to A).",
          },
        },
        {
          id: "s7-u2-endo-exothermic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company designs a pack for a first-aid kit. Students test two salts. For each, 10 g of the salt is dissolved in 100 mL of water in an insulated cup.\n\n| Salt | Initial temperature ($^\\circ\\text{C}$) | Final temperature ($^\\circ\\text{C}$) |\n| --- | --- | --- |\n| A | 20.0 | 32.0 |\n| B | 20.0 | 9.0 |",
          parts: [
            { label: "a", prompt: "Calculate the temperature change for Salt A.", marks: 2 },
            { label: "b", prompt: "State whether dissolving Salt B is endothermic or exothermic and give a reason.", marks: 2 },
            { label: "c", prompt: "Choose which salt to use for (i) a hot pack and (ii) a cold pack.", marks: 2 },
            { label: "d", prompt: "A student wants to find how the mass of Salt B affects the temperature change. Design a test: state the independent variable, the dependent variable and **two** control variables.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T=T_{\\text{final}}-T_{\\text{initial}}$" },
              { kind: "definition", name: "Endothermic and exothermic", statement: "Exothermic processes raise the temperature of the surroundings; endothermic processes lower it." },
              { kind: "skill", name: "Controlling variables", statement: "Change only the independent variable and keep all others the same." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the initial temperature from the final temperature.", working: "\\Delta T=32.0-20.0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "+12.0^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Salt B is endothermic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The temperature decreased from $20.0^\\circ\\text{C}$ to $9.0^\\circ\\text{C}$, so energy was absorbed from the water.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Salt A is used for the hot pack because it releases energy and warms the water.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Salt B is used for the cold pack because it absorbs energy and cools the water.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Independent variable: the mass of Salt B.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Dependent variable: the temperature change of the water.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Two controls from: volume of water, initial temperature, type of cup, stirring method.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) +12.0 $^\\circ\\text{C}$ (b) Endothermic, temperature fell by 11.0 $^\\circ\\text{C}$ (c) Hot pack: A; cold pack: B (d) Independent: mass of salt B; dependent: temperature change; controls: volume of water and starting temperature.",
            commonErrors: ["Swapping the hot and cold pack salts.", "Listing the mass of the salt as a control variable when it is the independent variable."],
            examinerNote: "(a) Allow 12 without a sign. (d) The control mark needs two correct controls; allow 'same amount of water' oe.",
          },
        },
      ],
    },
  ],
};
