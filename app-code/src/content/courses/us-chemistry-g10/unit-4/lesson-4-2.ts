import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "chem10-u4-lesson-4-2",
  code: "4-2",
  title: "Energy, Rates and Equilibrium",
  goal: "I CAN classify reactions as exothermic or endothermic, calculate heat with $q = mc\\Delta T$, explain reaction rates with collision theory and predict shifts in equilibrium using Le Chatelier's principle.",
  standards: ["HS-PS1-4", "HS-PS1-5", "HS-PS1-6", "SEP: Developing and Using Models", "CCC: Energy and Matter"],
  vocabulary: [
    { term: "Enthalpy change", definition: "The heat energy absorbed or released by a reaction at constant pressure, $\\Delta H$." },
    { term: "Exothermic", definition: "A reaction that releases heat to the surroundings; $\\Delta H$ is negative." },
    { term: "Endothermic", definition: "A reaction that absorbs heat from the surroundings; $\\Delta H$ is positive." },
    { term: "Activation energy", definition: "The minimum energy colliding particles need for a reaction to occur, $E_a$." },
    { term: "Catalyst", definition: "A substance that speeds up a reaction by providing a lower activation energy path and is not used up." },
    { term: "Dynamic equilibrium", definition: "A state in a closed system where forward and reverse reaction rates are equal, so concentrations stay constant." },
    { term: "Le Chatelier's principle", definition: "If a stress is applied to a system at equilibrium, the system shifts to partly oppose the stress." },
  ],
  concepts: [
    {
      id: "chem10-u4-enthalpy-calorimetry",
      title: "Enthalpy, energy diagrams and calorimetry",
      skill: "Interpret energy diagrams and calculate heat transfer and enthalpy change with $q = mc\\Delta T$.",
      lesson: {
        sections: [
          {
            heading: "Exothermic and endothermic reactions",
            body: "Breaking bonds absorbs energy and forming bonds releases energy. The enthalpy change is $\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$.\n\n- **Exothermic:** products have lower enthalpy, $\\Delta H < 0$, the surroundings get warmer (combustion, neutralization).\n- **Endothermic:** products have higher enthalpy, $\\Delta H > 0$, the surroundings get cooler (dissolving ammonium nitrate, photosynthesis).\n\nOn an energy diagram, the height from the reactants to the peak is the **activation energy** $E_a$, and the difference between reactant and product levels is $\\Delta H$. A catalyst lowers the peak but does not change the reactant or product levels, so $\\Delta H$ is unchanged.",
          },
          {
            heading: "Calorimetry",
            body: "A calorimeter measures heat by the temperature change of water. The heat gained or lost is\n\n$$q = mc\\Delta T$$\n\nwhere $m$ is the mass of water in grams, $c = 4.18\\ \\text{J/(g·°C)}$ for water and $\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$. Assume the heat released by the reaction is absorbed by the water, so $q_{\\text{reaction}} = -q_{\\text{water}}$.\n\nTo find the molar enthalpy change, divide by the moles that reacted: $\\Delta H = -\\dfrac{q_{\\text{water}}}{n}$. If the water warms up the reaction is exothermic and $\\Delta H$ is negative.",
          },
        ],
        keyFormulas: [
          { name: "Heat transfer", statement: "$q = mc\\Delta T$, $c_{\\text{water}} = 4.18\\ \\text{J/(g·°C)}$" },
          { name: "Enthalpy change", statement: "$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$" },
          { name: "Activation energy", statement: "$E_a = H_{\\text{peak}} - H_{\\text{reactants}}$" },
        ],
        workedExample: {
          problem: "A 75.0 g sample of water is heated from 21.0 °C to 36.0 °C. Calculate the heat absorbed by the water.",
          solution: "$\\Delta T = 36.0 - 21.0 = 15.0\\ \\text{°C}$. $q = mc\\Delta T = 75.0 \\times 4.18 \\times 15.0 = 4702.5\\ \\text{J} \\approx 4.70\\ \\text{kJ}$.",
        },
      },
      questions: [
        {
          id: "chem10-u4-enthalpy-calorimetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes an exothermic reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta H$ is positive and the surroundings get cooler" },
              { id: "b", text: "$\\Delta H$ is negative and the surroundings get cooler" },
              { id: "c", text: "$\\Delta H$ is positive and the surroundings get warmer" },
              { id: "d", text: "$\\Delta H$ is negative and the surroundings get warmer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Exothermic reaction", statement: "Releases heat to the surroundings; products have lower enthalpy so $\\Delta H < 0$." }],
            steps: [{ reasoning: "Energy leaves the system as heat, so the surroundings warm up and $\\Delta H$ is negative.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $\\Delta H$ is negative and the surroundings get warmer",
            commonErrors: ["Choosing (a), which describes an endothermic reaction.", "Thinking a negative $\\Delta H$ means the surroundings get cooler."],
            examinerNote: "B1 for negative $\\Delta H$ with warmer surroundings.",
          },
        },
        {
          id: "chem10-u4-enthalpy-calorimetry-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 50.0 g sample of water is heated from 20.0 °C to 35.0 °C. The specific heat capacity of water is $4.18\\ \\text{J/(g·°C)}$.\n\nCalculate the heat absorbed by the water. Give your answer in joules.",
          response: { type: "numeric", parts: [{ label: "Heat absorbed", answer: 3135, unit: "J", tolerance: 1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Heat transfer", statement: "$q = mc\\Delta T$" }],
            steps: [
              { reasoning: "Find the temperature change.", working: "\\Delta T = 35.0 - 20.0 = 15.0\\ ^\\circ\\text{C}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $q = mc\\Delta T$.", working: "q = 50.0 \\times 4.18 \\times 15.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "q = 3135\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3135\\ \\text{J}$ (3.14 kJ)",
            commonErrors: ["Using the final temperature (35.0) instead of the change in temperature.", "Leaving out the mass of the water."],
            examinerNote: "M1 for $\\Delta T = 15.0$, M1 for substitution, A1 for 3135 J. Allow 3140 J or 3.14 kJ.",
          },
        },
        {
          id: "chem10-u4-enthalpy-calorimetry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a coffee-cup calorimeter, 0.0500 mol of a solid dissolves in 100.0 g of water. The temperature of the water rises from 22.0 °C to 28.5 °C. Assume all the heat is transferred to the water and use $c = 4.18\\ \\text{J/(g·°C)}$.\n\nCalculate the enthalpy change $\\Delta H$ for the reaction in $\\text{kJ/mol}$. Include the sign. Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "ΔH", answer: -54.3, unit: "kJ/mol", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat transfer", statement: "$q = mc\\Delta T$" },
              { kind: "principle", name: "Conservation of energy", statement: "Heat released by the reaction equals heat gained by the water, so $\\Delta H = -q_{\\text{water}} / n$." },
            ],
            steps: [
              { reasoning: "Calculate the heat gained by the water, $\\Delta T = 6.5\\ ^\\circ\\text{C}$.", working: "q = 100.0 \\times 4.18 \\times 6.5 = 2717\\text{ J} = 2.717\\text{ kJ}", marks: 2, markCode: "M" },
              { reasoning: "Divide by the moles that reacted.", working: "\\frac{2.717}{0.0500} = 54.3\\text{ kJ/mol}", marks: 1, markCode: "M" },
              { reasoning: "The water warmed, so the reaction released heat: the sign is negative.", working: "\\Delta H = -54.3\\text{ kJ/mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta H = -54.3\\ \\text{kJ/mol}$",
            commonErrors: ["Giving a positive value even though the water got warmer.", "Not converting J to kJ, giving -54 340.", "Forgetting to divide by the moles."],
            examinerNote: "M2 for q = 2717 J (M1 for $\\Delta T = 6.5$, M1 for the product). M1 for dividing by 0.0500. A1 for -54.3 including the sign. Allow -54.34.",
          },
        },
        {
          id: "chem10-u4-enthalpy-calorimetry-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The energy diagram for a reaction shows the following enthalpies: reactants 50 kJ, the peak of the energy barrier 130 kJ, and products 20 kJ.",
          parts: [
            { label: "a", prompt: "Determine the activation energy of the forward reaction in kJ.", marks: 1 },
            { label: "b", prompt: "Calculate $\\Delta H$ for the reaction and state whether it is exothermic or endothermic.", marks: 2 },
            { label: "c", prompt: "In a separate experiment, a 150.0 g sample of water cools from 60.0 °C to 25.0 °C. Calculate the heat lost by the water in kJ ($c = 4.18\\ \\text{J/(g·°C)}$). Give your answer to 3 significant figures.", marks: 3 },
            { label: "d", prompt: "A catalyst is added. State the effect on the activation energy and on $\\Delta H$, and explain why the rate increases.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$" },
              { kind: "formula", name: "Heat transfer", statement: "$q = mc\\Delta T$" },
              { kind: "principle", name: "Catalyst", statement: "A catalyst lowers $E_a$ but does not change $\\Delta H$." },
            ],
            steps: [
              { part: "a", reasoning: "Peak minus reactants.", working: "E_a = 130 - 50 = 80\\text{ kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Products minus reactants.", working: "\\Delta H = 20 - 50 = -30\\text{ kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Negative $\\Delta H$ means energy is released: exothermic.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Temperature change magnitude.", working: "\\Delta T = 60.0 - 25.0 = 35.0\\ ^\\circ\\text{C}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute into $q = mc\\Delta T$.", working: "q = 150.0 \\times 4.18 \\times 35.0 = 21\\,945\\text{ J}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to kJ and round to 3 significant figures.", working: "q = 21.9\\text{ kJ}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The catalyst lowers the activation energy; $\\Delta H$ stays the same (-30 kJ).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A larger fraction of collisions have enough energy to react, so the rate increases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 80 kJ (b) $-30\\ \\text{kJ}$, exothermic (c) $21.9\\ \\text{kJ}$ (d) $E_a$ decreases, $\\Delta H$ unchanged; more collisions are successful",
            commonErrors: ["In (b) subtracting the other way and giving +30 kJ.", "In (a) using the peak height 130 kJ as the activation energy.", "In (d) saying a catalyst changes $\\Delta H$ or is used up."],
            examinerNote: "(a) Accept 80. (b) Allow ecf for the sign statement from a wrong value. (c) Allow 21.94 and 22 only with working shown. (d) Allow 'provides an alternative pathway with lower activation energy'.",
          },
        },
      ],
    },
    {
      id: "chem10-u4-rates-equilibrium",
      title: "Collision theory, rates and Le Chatelier's principle",
      skill: "Explain how conditions change reaction rate and predict how a system at equilibrium shifts when disturbed.",
      lesson: {
        sections: [
          {
            heading: "Collision theory and rates",
            body: "For a reaction to happen, particles must **collide** with enough energy (at least $E_a$) and the correct orientation. The rate increases when there are more successful collisions per second.\n\n- **Higher concentration or pressure (gases):** more particles in the same volume, so more frequent collisions.\n- **Higher temperature:** particles move faster, collide more often, and a much larger fraction have energy $\\ge E_a$.\n- **Larger surface area (smaller pieces):** more particles exposed to collisions.\n- **Catalyst:** lowers $E_a$, so more collisions are successful.",
          },
          {
            heading: "Equilibrium and Le Chatelier's principle",
            body: "In a reversible reaction in a closed system, a **dynamic equilibrium** is reached when the forward and reverse rates are equal. The reaction has not stopped, but the concentrations no longer change.\n\n**Le Chatelier's principle:** if a stress is applied, the system shifts to partly oppose it.\n\n- **Add reactant (or remove product):** shifts toward products. Remove reactant (or add product): shifts toward reactants.\n- **Increase pressure (smaller volume):** shifts toward the side with fewer moles of gas.\n- **Increase temperature:** shifts in the endothermic direction. Decrease temperature: shifts in the exothermic direction.\n- **Catalyst:** no shift; equilibrium is reached faster.\n\nExample: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H = -92\\ \\text{kJ}$. The forward reaction is exothermic and goes from 4 mol of gas to 2 mol, so high pressure and low temperature favor ammonia.",
          },
        ],
        keyFormulas: [
          { name: "Collision theory", statement: "Reaction needs collisions with energy $\\ge E_a$ and correct orientation" },
          { name: "Pressure effect", statement: "Increasing pressure shifts toward fewer moles of gas" },
          { name: "Temperature effect", statement: "Heating shifts toward the endothermic direction" },
        ],
        workedExample: {
          problem: "For $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$, $\\Delta H = -198\\ \\text{kJ}$, predict the shift when (i) pressure is increased and (ii) temperature is increased.",
          solution: "(i) Left side has 3 mol of gas and right side has 2 mol, so higher pressure shifts right toward $\\text{SO}_3$. (ii) The forward reaction is exothermic, so the reverse is endothermic. Raising the temperature shifts left, giving less $\\text{SO}_3$.",
        },
      },
      questions: [
        {
          id: "chem10-u4-rates-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does increasing the temperature increase the rate of a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the reaction more exothermic" },
              { id: "b", text: "More particles have at least the activation energy, and collisions are more frequent" },
              { id: "c", text: "It lowers the activation energy of the reaction" },
              { id: "d", text: "It increases the number of reactant particles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Collision theory", statement: "Rate depends on the number of successful collisions per second, those with energy $\\ge E_a$." }],
            steps: [{ reasoning: "Heating makes particles faster, so collisions are more frequent and a greater fraction have enough energy to react.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** More particles have at least the activation energy, and collisions are more frequent",
            commonErrors: ["Choosing (a): only a catalyst lowers the activation energy.", "Choosing (c): heating does not add particles."],
            examinerNote: "B1 for more energetic and more frequent collisions.",
          },
        },
        {
          id: "chem10-u4-rates-equilibrium-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The reaction $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ is exothermic ($\\Delta H = -92\\ \\text{kJ}$) and is at equilibrium.\n\nPredict the shift in equilibrium position if (i) the pressure is increased and (ii) the temperature is increased. Explain each prediction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "A system at equilibrium shifts to oppose an applied change." },
            ],
            steps: [
              { reasoning: "Increasing pressure shifts the equilibrium right (toward ammonia): the right has 2 mol of gas compared with 4 mol on the left, so the shift reduces pressure.", marks: 2, markCode: "B" },
              { reasoning: "Increasing temperature shifts the equilibrium left (toward $\\text{N}_2$ and $\\text{H}_2$), because the reverse reaction is endothermic and absorbs the extra heat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) Shifts right, to the side with fewer gas moles (2 versus 4). (ii) Shifts left, in the endothermic direction.",
            commonErrors: ["Saying that raising the temperature favors the exothermic forward reaction.", "Counting moles of gas on the wrong side."],
            examinerNote: "B1 right, B1 fewer moles of gas oe; B1 left with reason (endothermic reverse reaction). Award the explanation mark only with the correct direction.",
          },
        },
        {
          id: "chem10-u4-rates-equilibrium-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In the Haber process ($\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H = -92\\ \\text{kJ}$) a temperature of about 450 °C is used, although the equilibrium yield of ammonia would be higher at a lower temperature.\n\nExplain why a moderate temperature is used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Le Chatelier's principle", statement: "Lowering the temperature shifts an exothermic equilibrium toward products." },
              { kind: "principle", name: "Collision theory", statement: "Lower temperature means fewer particles with energy $\\ge E_a$, so a lower rate." },
            ],
            steps: [
              { reasoning: "The forward reaction is exothermic, so a lower temperature shifts the equilibrium right and increases the yield of ammonia.", marks: 1, markCode: "B" },
              { reasoning: "At low temperature, particles have less energy and fewer collisions exceed the activation energy, so the rate is very slow.", marks: 1, markCode: "B" },
              { reasoning: "A moderate temperature is a compromise between a reasonable yield and an acceptable rate.", marks: 1, markCode: "R" },
              { reasoning: "An iron catalyst is also used to increase the rate without changing the equilibrium position.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Low temperature favors the exothermic forward reaction (higher yield) but makes the rate too slow; about 450 °C with an iron catalyst is a compromise between yield and rate.",
            commonErrors: ["Saying the temperature is raised to improve the yield.", "Saying a catalyst increases the yield."],
            examinerNote: "Allow 'economic compromise' oe. Reject a catalyst that 'shifts the equilibrium to the right'.",
          },
        },
        {
          id: "chem10-u4-rates-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Nitrogen dioxide (brown) and dinitrogen tetroxide (colorless) form an equilibrium in a sealed syringe: $2\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, $\\Delta H = -57\\ \\text{kJ}$ (forward reaction).",
          parts: [
            { label: "a", prompt: "State **two** features of a dynamic equilibrium.", marks: 2 },
            { label: "b", prompt: "The syringe is placed in hot water. Predict the color change and explain it.", marks: 2 },
            { label: "c", prompt: "The syringe plunger is pushed in, decreasing the volume at constant temperature. Predict the shift in equilibrium position and explain it.", marks: 2 },
            { label: "d", prompt: "A catalyst is added to the equilibrium mixture. State the effect on the position of equilibrium and on the time taken to reach equilibrium.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Forward and reverse rates are equal and concentrations are constant in a closed system." },
              { kind: "principle", name: "Le Chatelier's principle", statement: "The system shifts to oppose an applied change." },
            ],
            steps: [
              { part: "a", reasoning: "The forward and reverse reaction rates are equal.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The concentrations of reactants and products stay constant (in a closed system, with both reactions still occurring).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The mixture becomes darker brown.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Heating shifts the equilibrium in the endothermic direction, the reverse reaction, forming more $\\text{NO}_2$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The equilibrium shifts right, toward $\\text{N}_2\\text{O}_4$.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The right side has 1 mol of gas compared with 2 mol on the left, so the shift reduces the pressure.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "No change in the position of equilibrium.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Equilibrium is reached faster because the catalyst speeds up the forward and reverse reactions equally.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Equal forward and reverse rates; constant concentrations (b) Darker brown, shift left (endothermic) (c) Shifts right, fewer moles of gas (d) No change in position; reached sooner",
            commonErrors: ["In (b) saying the mixture lightens because the reaction is exothermic.", "In (c) confusing the immediate darker color (all gas concentrations rise when the volume shrinks) with the shift, which then makes the mixture lighter.", "In (d) saying the catalyst favors the products."],
            examinerNote: "(a) Reject 'the reaction has stopped'. (b) Do not award the explanation mark without 'darker brown'. (c) Allow ecf for explanation if the direction is correct. (d) Allow 'faster' for the time.",
          },
        },
      ],
    },
  ],
};
