import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ech11-u1-lesson-1-1",
  code: "1-1",
  title: "Energetics",
  goal: "I CAN classify reactions as exothermic or endothermic, interpret energy profiles and calculate energy changes using calorimetry and bond energies.",
  standards: ["4CH1 3.1", "4CH1 3.2", "4CH1 3.3", "4CH1 3.4", "4CH1 3.5"],
  vocabulary: [
    { term: "Exothermic reaction", definition: "A reaction that transfers energy to the surroundings, so the temperature of the surroundings rises. $\\Delta H$ is negative." },
    { term: "Endothermic reaction", definition: "A reaction that takes in energy from the surroundings, so the temperature of the surroundings falls. $\\Delta H$ is positive." },
    { term: "Activation energy", definition: "The minimum energy that colliding particles must have for a reaction to occur." },
    { term: "Enthalpy change, $\\Delta H$", definition: "The energy change of a reaction at constant pressure, in $\\text{kJ/mol}$. Products minus reactants." },
    { term: "Calorimetry", definition: "Measuring the energy transferred in a reaction from the temperature change of a known mass of water." },
    { term: "Bond energy", definition: "The energy needed to break one mole of a particular covalent bond in gaseous molecules, in $\\text{kJ/mol}$." },
  ],
  concepts: [
    {
      id: "ech11-u1-energy-profiles",
      title: "Exothermic and endothermic reactions, energy profiles",
      skill: "Classify reactions, draw and interpret energy profiles and explain energy changes in terms of bonds.",
      lesson: {
        sections: [
          {
            heading: "Energy changes in reactions",
            body: "Every chemical reaction involves a transfer of energy between the reacting system and its surroundings.\n\n- **Exothermic**: energy is transferred **to** the surroundings, so the temperature **rises**. Examples: combustion, neutralisation, respiration, reactions of metals with acids.\n- **Endothermic**: energy is taken **in from** the surroundings, so the temperature **falls**. Examples: thermal decomposition of calcium carbonate, photosynthesis, citric acid with sodium hydrogencarbonate.\n\nThe enthalpy change $\\Delta H$ is negative for an exothermic reaction and positive for an endothermic reaction.",
          },
          {
            heading: "Energy profiles",
            body: "An energy profile plots the energy of the reactants and products. Reactants start at one level, rise to a peak and finish at the level of the products.\n\n- The **activation energy** $E_a$ is the height from the reactants to the peak.\n- $\\Delta H = \\text{energy of products} - \\text{energy of reactants}$.\n- Exothermic: products are **lower** than reactants, so $\\Delta H < 0$.\n- Endothermic: products are **higher** than reactants, so $\\Delta H > 0$.\n\nEven exothermic reactions need activation energy to start, which is why a fuel needs a flame or spark to ignite.",
          },
          {
            heading: "Bonds and energy",
            body: "Breaking bonds is **endothermic** (energy must be supplied). Making bonds is **exothermic** (energy is released). A reaction is exothermic overall if more energy is released making the new bonds in the products than is needed to break the bonds in the reactants.",
          },
        ],
        keyFormulas: [
          { name: "Enthalpy change", statement: "$\\Delta H = \\text{energy of products} - \\text{energy of reactants}$" },
          { name: "Activation energy", statement: "$E_a = \\text{energy at peak} - \\text{energy of reactants}$" },
          { name: "Exothermic", statement: "Temperature rises, $\\Delta H < 0$, products lower than reactants" },
          { name: "Endothermic", statement: "Temperature falls, $\\Delta H > 0$, products higher than reactants" },
        ],
        workedExample: {
          problem: "On an energy profile the reactants are at $200\\text{ kJ/mol}$, the peak is at $340\\text{ kJ/mol}$ and the products are at $150\\text{ kJ/mol}$. Find $E_a$ and $\\Delta H$ and state the type of reaction.",
          solution: "$E_a = 340 - 200 = 140\\text{ kJ/mol}$. $\\Delta H = 150 - 200 = -50\\text{ kJ/mol}$. The products are lower than the reactants and $\\Delta H$ is negative, so the reaction is exothermic.",
        },
      },
      questions: [
        {
          id: "ech11-u1-energy-profiles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student mixes two solutions in a beaker. The temperature of the mixture rises from $21^\\circ\\text{C}$ to $35^\\circ\\text{C}$. Which statement describes the reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endothermic, because energy is transferred to the surroundings" },
              { id: "b", text: "Exothermic, because energy is transferred to the surroundings" },
              { id: "c", text: "Exothermic, because $\\Delta H$ is positive" },
              { id: "d", text: "Endothermic, because $\\Delta H$ is negative" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic reaction", statement: "An exothermic reaction transfers energy to the surroundings, so the temperature rises and $\\Delta H$ is negative." },
            ],
            steps: [
              { reasoning: "A temperature rise means energy has been released to the surroundings, so the reaction is exothermic.", working: "\\text{temperature rises} \\Rightarrow \\text{exothermic}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Exothermic, because energy is transferred to the surroundings",
            commonErrors: ["Thinking a temperature rise means the reaction has taken in energy.", "Mixing up the signs: exothermic reactions have a negative $\\Delta H$."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u1-energy-profiles-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "The energy profile for a reaction shows the reactants at $120\\text{ kJ/mol}$, the highest point (peak) at $310\\text{ kJ/mol}$ and the products at $45\\text{ kJ/mol}$. Calculate the activation energy and the enthalpy change $\\Delta H$ for the reaction.",
          response: {
            type: "numeric",
            parts: [
              { label: "Activation energy", answer: 190, unit: "kJ/mol" },
              { label: "Enthalpy change, $\\Delta H$", answer: -75, unit: "kJ/mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Activation energy", statement: "$E_a = \\text{peak} - \\text{reactants}$" },
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H = \\text{products} - \\text{reactants}$" },
            ],
            steps: [
              { reasoning: "Activation energy is the rise from the reactants to the peak.", working: "E_a = 310 - 120", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "E_a = 190\\text{ kJ/mol}", marks: 1, markCode: "A" },
              { reasoning: "$\\Delta H$ is the energy of the products minus the energy of the reactants.", working: "\\Delta H = 45 - 120", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The negative sign shows the reaction is exothermic.", working: "\\Delta H = -75\\text{ kJ/mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E_a = 190\\text{ kJ/mol}$, $\\Delta H = -75\\text{ kJ/mol}$",
            commonErrors: ["Measuring activation energy from zero (giving 310).", "Calculating $\\Delta H$ as reactants minus products, giving $+75$."],
            examinerNote: "Allow ecf from a wrong $E_a$ or $\\Delta H$ only for the method marks. The sign of $\\Delta H$ is required for the final A mark.",
          },
        },
        {
          id: "ech11-u1-energy-profiles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Methane burns in oxygen in an exothermic reaction. Explain, in terms of the breaking and making of bonds, why the reaction is exothermic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bond breaking and making", statement: "Breaking bonds takes in energy (endothermic). Making bonds releases energy (exothermic)." },
            ],
            steps: [
              { reasoning: "Energy must be supplied to break the bonds in the reactants.", marks: 1, markCode: "B" },
              { reasoning: "Energy is released when the new bonds in the products form.", marks: 1, markCode: "B" },
              { reasoning: "The energy released making bonds is greater than the energy needed to break bonds.", marks: 1, markCode: "B" },
              { reasoning: "So there is a net transfer of energy to the surroundings, and the temperature rises.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Energy released making bonds in the products is greater than the energy taken in to break bonds in the reactants, so energy is transferred to the surroundings.",
            commonErrors: ["Saying that bond breaking releases energy.", "Saying that no energy is needed to start the reaction because it is exothermic."],
            examinerNote: "Reject 'bonds make energy'. Allow 'more energy given out than taken in' oe for the third mark. Allow 'heat' for energy.",
          },
        },
        {
          id: "ech11-u1-energy-profiles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student adds solid sodium hydrogencarbonate to citric acid solution. The mixture fizzes and the temperature falls from $21.0^\\circ\\text{C}$ to $12.0^\\circ\\text{C}$.",
          parts: [
            { label: "a", prompt: "State whether the reaction is exothermic or endothermic and give the sign of $\\Delta H$.", marks: 2 },
            { label: "b", prompt: "Describe the energy profile for this reaction. Refer to the levels of the reactants and products and to the activation energy.", marks: 3 },
            { label: "c", prompt: "Explain what the activation energy represents.", marks: 2 },
            { label: "d", prompt: "The student repeats the experiment twice. The falls in temperature are $9.0^\\circ\\text{C}$, $9.5^\\circ\\text{C}$ and $8.5^\\circ\\text{C}$. Calculate the mean fall in temperature, in $^\\circ\\text{C}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic reaction", statement: "Energy is taken in from the surroundings, the temperature falls and $\\Delta H$ is positive." },
              { kind: "definition", name: "Activation energy", statement: "The minimum energy that colliding particles need for a reaction to occur." },
            ],
            steps: [
              { part: "a", reasoning: "The temperature of the mixture falls, so energy is taken in from the surroundings.", working: "\\text{endothermic}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Endothermic reactions have a positive enthalpy change.", working: "\\Delta H > 0", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The products are at a higher energy level than the reactants.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The curve rises from the reactants to a peak above both the reactants and the products.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The activation energy is the height from the reactants to the peak (and $\\Delta H$ is the difference between products and reactants).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is the minimum energy that colliding particles must have.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Particles with less energy than this collide but do not react.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Add the three falls and divide by three.", working: "\\frac{9.0 + 9.5 + 8.5}{3} = \\frac{27.0}{3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "9.0^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Endothermic, $\\Delta H$ positive (b) products higher than reactants, curve rises to a peak, $E_a$ shown from reactants to peak (c) minimum energy for a successful collision (d) $9.0^\\circ\\text{C}$",
            commonErrors: ["Describing a profile in which the products are lower than the reactants.", "Saying the reaction is exothermic because it fizzes.", "Measuring the activation energy from the products."],
            examinerNote: "In (a) the sign mark depends on a sensible type, allow ecf. In (d) allow 9. In (c) allow 'energy needed to start the reaction' for one mark only.",
          },
        },
      ],
    },
    {
      id: "ech11-u1-calorimetry-bond-energy",
      title: "Calorimetry and bond energy calculations",
      skill: "Calculate energy transferred using $Q = mc\\Delta T$, molar enthalpy changes and bond energies.",
      lesson: {
        sections: [
          {
            heading: "Calorimetry",
            body: "To find the energy transferred by a reaction in solution, or by a burning fuel, we measure the temperature change of a known mass of water.\n\n$$Q = mc\\Delta T$$\n\nwhere $Q$ is the energy transferred in joules, $m$ is the mass of water in grams, $c$ is the specific heat capacity of water ($4.18\\text{ J/g}^\\circ\\text{C}$) and $\\Delta T$ is the temperature change in $^\\circ\\text{C}$. For dilute solutions, $1\\text{ cm}^3$ has a mass of $1\\text{ g}$.\n\nThe **molar enthalpy change** is the energy change per mole:\n\n$$\\Delta H = -\\frac{Q}{n}$$\n\nwith $Q$ in kJ and $n$ in mol. The negative sign applies when the temperature rises (exothermic).",
          },
          {
            heading: "Sources of error",
            body: "School experiments give values less exothermic than data-book values because of **heat loss** to the surroundings, incomplete combustion of the fuel and heat absorbed by the container. Insulating the calorimeter with a lid and lagging, and using a draught shield, reduces heat loss. Repeating the experiment and calculating a mean improves reliability.",
          },
          {
            heading: "Bond energy calculations",
            body: "Bond energies allow $\\Delta H$ to be estimated for reactions between gases:\n\n$$\\Delta H = \\sum(\\text{bonds broken}) - \\sum(\\text{bonds made})$$\n\nAdd the bond energies of all bonds broken in the reactants, add those of all bonds made in the products and subtract. A negative answer means the reaction is exothermic. Remember to multiply by the number of each type of bond, using the balanced equation.",
          },
        ],
        keyFormulas: [
          { name: "Energy transferred", statement: "$Q = mc\\Delta T$ with $c = 4.18\\text{ J/g}^\\circ\\text{C}$" },
          { name: "Molar enthalpy change", statement: "$\\Delta H = -\\frac{Q}{n}$ (exothermic), $Q$ in kJ" },
          { name: "Bond energies", statement: "$\\Delta H = \\sum(\\text{bonds broken}) - \\sum(\\text{bonds made})$" },
          { name: "Moles", statement: "$n = \\frac{\\text{mass}}{M_r}$" },
        ],
        workedExample: {
          problem: "In a neutralisation, $100\\text{ g}$ of solution rises in temperature by $5.0^\\circ\\text{C}$. The reaction used $0.0100\\text{ mol}$ of acid. Calculate $\\Delta H$ in $\\text{kJ/mol}$.",
          solution: "$Q = 100 \\times 4.18 \\times 5.0 = 2090\\text{ J} = 2.09\\text{ kJ}$. $\\Delta H = -\\frac{2.09}{0.0100} = -209\\text{ kJ/mol}$.",
        },
      },
      questions: [
        {
          id: "ech11-u1-calorimetry-bond-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation is used to calculate the energy transferred to water in a calorimetry experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$Q = \\frac{m\\Delta T}{c}$" },
              { id: "b", text: "$Q = mc\\Delta T$" },
              { id: "c", text: "$Q = \\frac{mc}{\\Delta T}$" },
              { id: "d", text: "$Q = m + c + \\Delta T$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$Q = mc\\Delta T$: energy = mass $\\times$ specific heat capacity $\\times$ temperature change." },
            ],
            steps: [
              { reasoning: "The energy transferred is the product of mass, specific heat capacity and temperature change.", working: "Q = mc\\Delta T", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $Q = mc\\Delta T$",
            commonErrors: ["Dividing by the temperature change or the specific heat capacity instead of multiplying."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u1-calorimetry-bond-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student reacts two solutions with a total mass of $50\\text{ g}$. The temperature rises from $21.0^\\circ\\text{C}$ to $29.0^\\circ\\text{C}$. The specific heat capacity of the solution is $4.18\\text{ J/g}^\\circ\\text{C}$. Calculate the energy transferred, in joules.",
          response: { type: "numeric", parts: [{ label: "Energy transferred", answer: 1672, unit: "J" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$Q = mc\\Delta T$" },
            ],
            steps: [
              { reasoning: "Find the temperature change.", working: "\\Delta T = 29.0 - 21.0 = 8.0^\\circ\\text{C}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $Q = mc\\Delta T$.", working: "Q = 50 \\times 4.18 \\times 8.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "Q = 1672\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1672\\text{ J}$",
            commonErrors: ["Using the final temperature $29.0$ instead of the change.", "Forgetting the unit, or converting to kJ without saying."],
            examinerNote: "A1 for 1672 or 1670 with the unit J. Allow ecf from a wrong $\\Delta T$.",
          },
        },
        {
          id: "ech11-u1-calorimetry-bond-energy-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student burns $0.50\\text{ g}$ of ethanol, $\\text{C}_2\\text{H}_5\\text{OH}$, under a beaker containing $100\\text{ g}$ of water. The temperature of the water rises by $12.0^\\circ\\text{C}$. ($A_r$: C = 12, H = 1, O = 16; $c = 4.18\\text{ J/g}^\\circ\\text{C}$.) Calculate the molar enthalpy change of combustion of ethanol in $\\text{kJ/mol}$. Give your answer to the nearest whole number, with its sign.",
          response: { type: "numeric", parts: [{ label: "Molar enthalpy change", answer: -461, tolerance: 1, unit: "kJ/mol" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$Q = mc\\Delta T$" },
              { kind: "formula", name: "Molar enthalpy change", statement: "$\\Delta H = -\\frac{Q}{n}$ with $Q$ in kJ" },
            ],
            steps: [
              { reasoning: "Calculate the energy absorbed by the water.", working: "Q = 100 \\times 4.18 \\times 12.0 = 5016\\text{ J} = 5.016\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Find the relative formula mass and the moles of ethanol.", working: "M_r = 2(12) + 6(1) + 16 = 46,\\quad n = \\frac{0.50}{46} = 0.01087\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "Divide the energy in kJ by the moles to get the energy per mole.", working: "\\frac{5.016}{0.01087}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest whole number.", working: "461.47\\ldots \\approx 461\\text{ kJ/mol}", marks: 1, markCode: "A" },
              { reasoning: "The temperature of the water rose, so the combustion is exothermic and $\\Delta H$ is negative.", working: "\\Delta H = -461\\text{ kJ/mol}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\Delta H = -461\\text{ kJ/mol}$",
            commonErrors: ["Not converting J to kJ, giving $-461000$.", "Using the mass of ethanol instead of moles.", "Omitting the negative sign for an exothermic reaction."],
            examinerNote: "Allow 460 to 462 (rounding). Allow ecf from a wrong $Q$ or $M_r$. Reject a positive value for the B mark.",
          },
        },
        {
          id: "ech11-u1-calorimetry-bond-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Hydrogen reacts with chlorine to form hydrogen chloride: $\\text{H}_2 + \\text{Cl}_2 \\rightarrow 2\\text{HCl}$. Average bond energies are: $\\text{H-H}$ $436\\text{ kJ/mol}$, $\\text{Cl-Cl}$ $243\\text{ kJ/mol}$ and $\\text{H-Cl}$ $432\\text{ kJ/mol}$.",
          parts: [
            { label: "a", prompt: "Calculate the total energy needed to break the bonds in the reactants, in $\\text{kJ/mol}$.", marks: 2 },
            { label: "b", prompt: "Calculate the total energy released when the bonds in the products form, in $\\text{kJ/mol}$.", marks: 2 },
            { label: "c", prompt: "Calculate the enthalpy change $\\Delta H$ for the reaction, in $\\text{kJ/mol}$.", marks: 2 },
            { label: "d", prompt: "State whether the reaction is exothermic or endothermic, giving a reason.", marks: 1 },
            { label: "e", prompt: "A school calorimetry experiment gives a molar enthalpy change of combustion for ethanol of $-461\\text{ kJ/mol}$. The data book value is $-1367\\text{ kJ/mol}$. Suggest two reasons for the difference.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Bond energy calculation", statement: "$\\Delta H = \\sum(\\text{bonds broken}) - \\sum(\\text{bonds made})$" },
              { kind: "principle", name: "Heat loss", statement: "In calorimetry some energy is lost to the surroundings, so the measured temperature rise is smaller than expected." },
            ],
            steps: [
              { part: "a", reasoning: "One H-H bond and one Cl-Cl bond are broken.", working: "436 + 243", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "679\\text{ kJ/mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two H-Cl bonds are made.", working: "2 \\times 432", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "864\\text{ kJ/mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bonds broken minus bonds made.", working: "\\Delta H = 679 - 864", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate, keeping the sign.", working: "\\Delta H = -185\\text{ kJ/mol}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\Delta H$ is negative (more energy released making bonds than taken in breaking bonds), so the reaction is exothermic.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Energy is lost to the surroundings (the air, the beaker, the apparatus) instead of heating the water.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Incomplete combustion of the ethanol, or evaporation of ethanol, so less energy is released.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $679\\text{ kJ/mol}$ (b) $864\\text{ kJ/mol}$ (c) $-185\\text{ kJ/mol}$ (d) exothermic, $\\Delta H$ negative (e) heat loss; incomplete combustion",
            commonErrors: ["Using bonds made minus bonds broken, giving $+185$.", "Using only one H-Cl bond (432) rather than two.", "Stating that the school value is lower because of 'human error' without a specific cause."],
            examinerNote: "In (c) allow ecf from (a) and (b). In (e) allow 'no lid', 'no insulation', 'heat absorbed by the container' oe. Reject 'energy is destroyed'.",
          },
        },
      ],
    },
  ],
};
