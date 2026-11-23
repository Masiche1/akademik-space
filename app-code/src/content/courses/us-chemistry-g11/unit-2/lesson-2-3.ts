import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "chem11-u2-lesson-2-3",
  code: "2-3",
  title: "Le Chatelier's Principle",
  goal: "I CAN apply Le Chatelier's principle to predict how changes in concentration, pressure and temperature shift a chemical equilibrium, and evaluate the compromises involved in industrial processes.",
  standards: ["HS-PS1-6", "SEP: Developing and Using Models"],
  vocabulary: [
    { term: "Le Chatelier's principle", definition: "When a system at equilibrium is disturbed by changing conditions, it shifts in the direction that partially opposes the change." },
    { term: "Stress", definition: "Any change applied to an equilibrium system: concentration change, pressure change, temperature change or adding a catalyst." },
    { term: "Shift", definition: "The movement of an equilibrium toward products (right) or reactants (left) in response to a stress." },
    { term: "Gas mole count", definition: "The total moles of gaseous species on each side of a reaction; used to predict pressure effects." },
    { term: "Trade-off", definition: "An industrial compromise where conditions favor yield but slow the rate, or vice versa." },
    { term: "Inert gas", definition: "A gas added to a system that does not participate in the reaction; at constant volume it changes total pressure but not partial pressures or equilibrium." },
  ],
  concepts: [
    {
      id: "chem11-u2-le-chatelier-concentration-pressure",
      title: "Le Chatelier: concentration and pressure",
      skill: "Predict equilibrium shifts caused by changing concentrations or pressure, including the role of gas mole counts and inert gases.",
      lesson: {
        sections: [
          {
            heading: "Concentration changes",
            body: "If you add a reactant or remove a product, the system shifts to **replace what was lost**:\n\n- Add reactant $\\rightarrow$ shift right (toward products)\n- Remove reactant $\\rightarrow$ shift left (toward reactants)\n- Add product $\\rightarrow$ shift left\n- Remove product $\\rightarrow$ shift right\n\nThe system 'tries' to undo the change. This is why continuously removing a product (e.g. distilling off a liquid) drives a reaction to completion.",
          },
          {
            heading: "Pressure changes (gases only)",
            body: "Pressure only affects equilibria involving gases. Compare the **total moles of gas** on each side:\n\n- If products have fewer gas moles than reactants, increasing pressure shifts toward products (fewer moles = lower pressure).\n- If reactants have fewer gas moles, increasing pressure shifts toward reactants.\n- If both sides have equal gas moles, pressure has no effect.\n\nExample: $\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$ has 4 mol gas on the left, 2 on the right. Increasing pressure shifts right toward $\\text{NH}_3$.",
          },
          {
            heading: "Inert gases and catalysts",
            body: "Adding an **inert gas** (like helium) at constant volume does not change partial pressures of reactants/products, so equilibrium does not shift — it only raises total pressure. At constant pressure it does change things slightly.\n\nA **catalyst** speeds both forward and reverse rates equally; it does not shift equilibrium or change K.",
          },
        ],
        keyFormulas: [
          { name: "Pressure rule", statement: "Higher pressure favors the side with fewer moles of gas" },
          { name: "Concentration rule", statement: "Add reactant/remove product $\\rightarrow$ shift right; add product/remove reactant $\\rightarrow$ shift left" },
        ],
        workedExample: {
          problem: "For $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$ (all gases), predict the effect of (a) adding more $\\text{O}_2$, (b) doubling the pressure, (c) adding an inert gas at constant volume.",
          solution: "(a) Adding a reactant shifts right toward $\\text{SO}_3$. (b) Reactants have 3 mol gas, products 2 mol; higher pressure favors fewer moles, so shifts right. (c) Inert gas at constant volume does not change partial pressures, so no shift.",
        },
      },
      questions: [
        {
          id: "chem11-u2-le-chatelier-concentration-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$, what happens if more C is added to the equilibrium mixture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifts toward products" },
              { id: "b", text: "Shifts toward reactants" },
              { id: "c", text: "No change" },
              { id: "d", text: "K increases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Le Chatelier", statement: "Adding a product shifts equilibrium toward reactants to oppose the change." }],
            steps: [{ reasoning: "Adding product C makes Q > K, so the system shifts left toward reactants.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Shifts toward reactants",
            commonErrors: ["Thinking adding product pushes forward; it actually drives the reverse reaction.", "Confusing position shift with K change."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u2-le-chatelier-concentration-pressure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $\\text{N}_2O_4(g) \\rightleftharpoons 2\\text{NO}_2(g)$, predict the effect on the equilibrium position of:\n\n(a) increasing the pressure,\n(b) adding an inert gas at constant volume,\n(c) removing some $\\text{NO}_2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure and gas moles", statement: "Higher pressure favors the side with fewer gas moles." },
              { kind: "principle", name: "Inert gas", statement: "Inert gas at constant volume does not change partial pressures, so no shift." },
            ],
            steps: [
              { reasoning: "Left has 1 mol gas, right has 2 mol; higher pressure favors fewer moles, so shifts left toward $\\text{N}_2\\text{O}_4$.", marks: 1, markCode: "B" },
              { reasoning: "Inert gas at constant volume does not change partial pressures of reacting gases; no shift.", marks: 1, markCode: "B" },
              { reasoning: "Removing product $\\text{NO}_2$ shifts right to replace it, producing more $\\text{NO}_2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) shifts left (fewer gas moles) (b) no change (c) shifts right.",
            commonErrors: ["Thinking inert gas always increases pressure effect; at constant volume it doesn't change partial pressures.", "Reversing the pressure rule."],
            examinerNote: "B1 each.",
          },
        },
        {
          id: "chem11-u2-le-chatelier-concentration-pressure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$:\n\n(a) State the effect of increasing pressure on the position of equilibrium.\n(b) Explain why, in terms of gas moles.\n(c) A chemist wants to maximize $\\text{PCl}_5$ yield. Suggest two conditions (other than pressure) and explain each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure and gas moles", statement: "Higher pressure favors fewer gas moles." },
              { kind: "principle", name: "Le Chatelier concentration", statement: "Removing product or adding reactant shifts toward products." },
            ],
            steps: [
              { reasoning: "Reactants: 1 mol gas ($\\text{PCl}_5$); products: 2 mol gas ($\\text{PCl}_3 + \\text{Cl}_2$). Higher pressure favors fewer moles, so shifts left toward $\\text{PCl}_5$.", marks: 2, markCode: "B" },
              { reasoning: "Increasing pressure compresses the system; shifting toward the side with fewer gas molecules reduces pressure, opposing the stress.", marks: 1, markCode: "R" },
              { reasoning: "Remove $\\text{Cl}_2$ or $\\text{PCl}_3$ as they form (e.g. condense $\\text{Cl}_2$), shifting right to replace them.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) shifts left toward PCl5 (b) fewer gas moles on left (c) remove Cl2 product or add excess PCl5.",
            commonErrors: ["Counting atoms instead of molecules/moles of gas.", "Forgetting pressure only matters for gases."],
            examinerNote: "B2 pressure, R1 explanation, B1 removal strategy.",
          },
        },
        {
          id: "chem11-u2-le-chatelier-concentration-pressure-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The contact process: $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, $\\Delta H = -198\\ \\text{kJ/mol}$.",
          parts: [
            { label: "a", prompt: "Predict the effect on equilibrium position of: (i) increasing pressure, (ii) increasing temperature, (iii) adding a catalyst, (iv) adding inert gas at constant volume.", marks: 4 },
            { label: "b", prompt: "Explain why the process uses a moderate temperature (~450°C) rather than a low temperature that would give higher yield.", marks: 3 },
            { label: "c", prompt: "Explain why the $\\text{SO}_3$ is continuously removed (absorbed) as it forms.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure and gas moles", statement: "Higher pressure favors fewer gas moles: 3 mol reactants $\\to$ 2 mol products." },
              { kind: "principle", name: "Exothermic and T", statement: "Exothermic: higher T shifts left and lowers K; lower T favors yield but slows rate." },
              { kind: "principle", name: "Product removal", statement: "Removing product drives equilibrium forward (Le Chatelier)." },
            ],
            steps: [
              { reasoning: "(i) Higher pressure favors fewer gas moles (2 vs 3), shifts right toward $\\text{SO}_3$.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "(ii) Exothermic reaction: higher T shifts left toward reactants.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "(iii) Catalyst does not change position or K; only speeds attainment.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "(iv) Inert gas at constant volume: no change in partial pressures, no shift.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Lower T would increase yield (exothermic) but make the reaction too slow to be economical.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "450°C is a compromise between rate and yield, aided by the catalyst (higher T speeds the reaction but lowers equilibrium yield for this exothermic process).", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Removing $\\text{SO}_3$ lowers its concentration, making Q < K, so the system shifts right to produce more $\\text{SO}_3$.", marks: 2, markCode: "B", part: "c" },
              { reasoning: "Continuous removal effectively drives the reaction toward completion, increasing overall yield.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) (i) right (ii) left (iii) no change (iv) no change (b) compromise rate vs yield (c) removing SO3 shifts equilibrium right.",
            commonErrors: ["Thinking catalyst increases yield.", "Forgetting inert gas at constant volume has no effect."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem11-u2-temperature-equilibrium",
      title: "Temperature and equilibrium position",
      skill: "Relate the sign of ΔH to how temperature changes K and equilibrium position, and distinguish temperature effects from concentration/pressure effects.",
      lesson: {
        sections: [
          {
            heading: "Why only temperature changes K",
            body: "The equilibrium constant K is a function of temperature only. Changing concentration or pressure shifts the position but the system re-establishes equilibrium with the **same** K value — the ratio of products to reactants returns to the same number.\n\nTemperature changes K because it changes the relative energies of reactants and products. For an exothermic reaction ($\\Delta H < 0$), products are lower in energy; raising T gives molecules more energy, favoring the endothermic reverse direction, so K decreases. For endothermic ($\\Delta H > 0$), raising T favors products and K increases.",
          },
          {
            heading: "Van't Hoff reasoning (qualitative)",
            body: "Think of heat as a 'product' of an exothermic reaction: $\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D} + \\text{heat}$. Adding heat (raising T) is like adding a product, so equilibrium shifts left. For an endothermic reaction, heat is a 'reactant': $\\text{heat} + \\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$; adding heat shifts right.",
          },
          {
            heading: "Industrial compromises",
            body: "Real processes balance yield against rate:\n\n- **Haber process** ($\\Delta H < 0$): high pressure favors yield; moderate T (~450°C) balances yield vs rate; catalyst speeds attainment.\n- **Contact process** (exothermic): similar compromise at ~450°C.\n- **Endothermic processes** (e.g. thermal decomposition of limestone): high T needed for both yield and rate.",
          },
        ],
        keyFormulas: [
          { name: "T and K", statement: "Exothermic: T↑ → K↓; Endothermic: T↑ → K↑" },
          { name: "Heat as reactant/product", statement: "Exothermic: heat is a product; endothermic: heat is a reactant" },
        ],
        workedExample: {
          problem: "For $\\text{N}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{NO}$, $\\Delta H = +180\\ \\text{kJ/mol}$. Predict the effect of raising temperature on K and equilibrium position.",
          solution: "The reaction is endothermic ($\\Delta H > 0$). Raising temperature favors the forward (endothermic) direction, shifting equilibrium toward NO and increasing K.",
        },
      },
      questions: [
        {
          id: "chem11-u2-temperature-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For an exothermic reaction at equilibrium, what happens to K when temperature is decreased?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "K increases" },
              { id: "b", text: "K decreases" },
              { id: "c", text: "K stays the same" },
              { id: "d", text: "K becomes zero" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "T and K", statement: "Exothermic: lowering T favors products and increases K." }],
            steps: [{ reasoning: "Exothermic reaction: decreasing T shifts toward products, so K increases.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** K increases",
            commonErrors: ["Reversing the rule; cooling an exothermic system favors products."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem11-u2-temperature-equilibrium-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$ with $\\Delta H = -40\\ \\text{kJ/mol}$:\n\n(a) State whether the reaction is exothermic or endothermic.\n(b) Predict the effect on K of increasing temperature.\n(c) Explain your answer in terms of the position of equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "$\\Delta H < 0$ means exothermic; heat is released." },
              { kind: "principle", name: "T and K", statement: "Exothermic: T↑ → K↓." },
            ],
            steps: [
              { reasoning: "$\\Delta H = -40 < 0$, so exothermic.", marks: 1, markCode: "B" },
              { reasoning: "K decreases when temperature increases.", marks: 1, markCode: "B" },
              { reasoning: "Higher T supplies heat, which the system 'uses' by shifting in the endothermic (reverse) direction, reducing product concentration and lowering K.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) exothermic (b) K decreases (c) heat favors reverse reaction.",
            commonErrors: ["Saying K increases because 'more energy'.", "Confusing exothermic with endothermic."],
            examinerNote: "B1 classification, B1 K direction, R1 explanation.",
          },
        },
        {
          id: "chem11-u2-temperature-equilibrium-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two reactions are studied:\n\nReaction 1: $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$, $\\Delta H = -30\\ \\text{kJ/mol}$\nReaction 2: $\\text{D} + \\text{E} \\rightleftharpoons \\text{F}$, $\\Delta H = +50\\ \\text{kJ/mol}$\n\n(a) For each reaction, state whether increasing temperature increases or decreases K.\n(b) Explain the difference using Le Chatelier's principle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "T and K", statement: "Exothermic: T↑ → K↓; endothermic: T↑ → K↑." },
              { kind: "principle", name: "Le Chatelier", statement: "Heat acts like a product (exothermic) or reactant (endothermic)." },
            ],
            steps: [
              { reasoning: "Reaction 1 is exothermic ($\\Delta H < 0$): increasing T decreases K.", marks: 1, markCode: "B" },
              { reasoning: "Reaction 2 is endothermic ($\\Delta H > 0$): increasing T increases K.", marks: 1, markCode: "B" },
              { reasoning: "For exothermic, heat is a product: adding heat shifts left, lowering K. For endothermic, heat is a reactant: adding heat shifts right, raising K.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) Reaction 1: K decreases; Reaction 2: K increases (b) heat acts as product for exothermic, reactant for endothermic.",
            commonErrors: ["Applying the same rule to both reactions.", "Saying K is unchanged by temperature."],
            examinerNote: "B1 each direction, R2 explanation.",
          },
        },
        {
          id: "chem11-u2-temperature-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The decomposition of calcium carbonate: $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, $\\Delta H = +178\\ \\text{kJ/mol}$.",
          parts: [
            { label: "a", prompt: "State whether the reaction is endothermic or exothermic and predict the effect of increasing temperature on K and equilibrium position.", marks: 3 },
            { label: "b", prompt: "Explain why only $\\text{CO}_2(g)$ appears in the Kc expression.", marks: 2 },
            { label: "c", prompt: "A kiln operator wants to maximize CaO yield. Suggest two conditions and explain each using Le Chatelier's principle.", marks: 3 },
            { label: "d", prompt: "Explain the industrial trade-off between temperature and rate for this endothermic decomposition.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic", statement: "$\\Delta H > 0$: heat is absorbed; higher T favors products and increases K." },
              { kind: "principle", name: "Heterogeneous equilibrium", statement: "Pure solids are omitted from K expressions." },
              { kind: "principle", name: "Le Chatelier", statement: "Removing product gas shifts equilibrium forward." },
            ],
            steps: [
              { reasoning: "$\\Delta H = +178 > 0$, so the reaction is endothermic.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "For endothermic reactions, increasing T favors products, shifts right, and increases K.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "CaCO3(s) and CaO(s) are pure solids with constant 'concentration', so they are omitted; only the gaseous CO2 appears.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "High temperature favors products (endothermic) and also speeds the rate — both favor yield.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Removing CO2 gas (e.g. drawing it off) shifts equilibrium right to replace it, increasing CaO yield.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Operating at very high T costs fuel and may decompose equipment; a balance is struck between yield, rate and cost.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "For this endothermic reaction, higher T increases both yield and rate, so the trade-off is mainly energy cost vs yield rather than rate vs yield.", marks: 2, markCode: "R", part: "d" },
            ],
            finalAnswer: "(a) endothermic; T up shifts right, K up (b) solids omitted from K (c) high T and remove CO2 gas (d) high T helps both yield and rate but costs energy.",
            commonErrors: ["Including solids in the K expression.", "Thinking endothermic reactions have a rate-yield trade-off like exothermic ones."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
  ],
};