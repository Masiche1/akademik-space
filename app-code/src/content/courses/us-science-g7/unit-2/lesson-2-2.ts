import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "s7-u2-lesson-2-2",
  code: "2-2",
  title: "States and Changes",
  goal: "I CAN use the particle model to explain states of matter and changes in thermal energy, and I CAN use evidence to tell physical changes from chemical changes.",
  standards: ["MS-PS1-4", "MS-PS1-2", "SEP: Developing and Using Models", "SEP: Constructing Explanations and Designing Solutions"],
  vocabulary: [
    { term: "Kinetic energy", definition: "The energy of motion. Particles that move faster have more kinetic energy." },
    { term: "Thermal energy", definition: "The total kinetic energy of all the particles in a sample of matter." },
    { term: "Temperature", definition: "A measure of the average kinetic energy of the particles in a substance." },
    { term: "Melting point", definition: "The temperature at which a solid changes into a liquid." },
    { term: "Physical change", definition: "A change in which the substance keeps its identity, such as a change of state or shape." },
    { term: "Chemical change", definition: "A change in which atoms are rearranged and one or more new substances with new properties form." },
    { term: "Precipitate", definition: "A solid that forms from a reaction between substances in a solution." },
  ],
  concepts: [
    {
      id: "s7-u2-particle-motion-states",
      title: "Particle motion, states of matter and thermal energy",
      skill: "Use the particle model to describe solids, liquids and gases and explain what happens when thermal energy is added or removed.",
      lesson: {
        sections: [
          {
            heading: "Particles in solids, liquids and gases",
            body: "All matter is made of particles that are always moving.\n\n- In a **solid**, particles are packed closely in a fixed pattern. They vibrate in place, so a solid keeps its shape and volume.\n- In a **liquid**, particles are close together but can slide past each other. A liquid keeps its volume but takes the shape of its container.\n- In a **gas**, particles are far apart and move quickly in all directions. A gas fills its container, so its shape and volume both change.",
          },
          {
            heading: "Temperature and thermal energy",
            body: "The faster particles move, the more kinetic energy they have. **Temperature** measures the average kinetic energy of the particles. **Thermal energy** is the total kinetic energy of all the particles, so it depends on both the temperature and the amount of matter. A bathtub of warm water has more thermal energy than a cup of boiling water, even though the cup has the higher temperature.\n\nWhen thermal energy is added, particles move faster and the temperature rises. Thermal energy moves from a warmer object to a cooler one.",
          },
          {
            heading: "Changes of state",
            body: "During a change of state, added energy is used to pull particles apart instead of making them move faster, so the **temperature stays constant** until the change is complete. This shows up as a flat section on a heating graph.\n\n- Melting: solid to liquid (energy added)\n- Boiling or evaporating: liquid to gas (energy added)\n- Freezing: liquid to solid (energy removed)\n- Condensing: gas to liquid (energy removed)\n\nThe number and type of particles stay the same in a change of state, so mass is conserved.",
          },
        ],
        keyFormulas: [
          { name: "Temperature", statement: "Average kinetic energy of particles" },
          { name: "Adding thermal energy", statement: "Particles move faster (temperature rises) or the state changes (temperature stays constant)" },
          { name: "Flat section on a heating graph", statement: "Energy breaks attractions between particles during melting or boiling" },
        ],
        workedExample: {
          problem: "Ice at $-10^\\circ\\text{C}$ is heated steadily. The temperature rises to $0^\\circ\\text{C}$, stays at $0^\\circ\\text{C}$ for several minutes, then rises again. Explain why the temperature stays at $0^\\circ\\text{C}$ although energy is still being added.",
          solution: "At $0^\\circ\\text{C}$ the ice is melting. The added thermal energy is used to overcome the attractions holding the particles in a fixed pattern, so the particles can slide past each other. It does not increase their average kinetic energy, so the temperature stays constant until all the ice has melted.",
        },
      },
      questions: [
        {
          id: "s7-u2-particle-motion-states-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which description matches the particles in a **liquid**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Packed closely in a fixed pattern, vibrating in place" },
              { id: "b", text: "Close together but able to slide past each other" },
              { id: "c", text: "Far apart and moving quickly in all directions" },
              { id: "d", text: "Not moving at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Particle model", statement: "Liquid particles are close together but free to move past one another." },
            ],
            steps: [
              { reasoning: "Liquid particles touch but are not fixed in position, so a liquid flows and takes the shape of its container.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Close together but able to slide past each other",
            commonErrors: ["Choosing (a), which describes a solid.", "Choosing (c), which describes a gas.", "Believing that particles in a solid or liquid stop moving."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u2-particle-motion-states-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sealed container holds a gas. The gas is heated and its temperature rises.\n\nDescribe what happens to the motion of the gas particles and explain what this shows about their kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Temperature", statement: "Temperature measures the average kinetic energy of the particles in a substance." },
            ],
            steps: [
              { reasoning: "The particles move faster as the gas is heated.", marks: 1, markCode: "B" },
              { reasoning: "Faster particles have more kinetic energy, so the average kinetic energy increases as temperature rises.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The particles move faster, so their average kinetic energy increases.",
            commonErrors: ["Saying the particles expand or get bigger when heated.", "Saying the particles start moving, as if they were still before."],
            examinerNote: "B1 for faster movement. B1 for more (average) kinetic energy. Reject 'the particles get bigger'.",
          },
        },
        {
          id: "s7-u2-particle-motion-states-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cup of boiling water at $100^\\circ\\text{C}$ holds 200 g of water. A bathtub holds 100 000 g of water at $40^\\circ\\text{C}$.\n\nConstruct an explanation for which one has the higher temperature and which one has the greater thermal energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Temperature", statement: "Temperature measures the average kinetic energy of the particles." },
              { kind: "definition", name: "Thermal energy", statement: "Thermal energy is the total kinetic energy of all the particles in a sample." },
            ],
            steps: [
              { reasoning: "Claim: the cup has the higher temperature, but the bathtub has the greater thermal energy.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: the cup is at $100^\\circ\\text{C}$ and the bathtub at $40^\\circ\\text{C}$, so the average kinetic energy of each particle is greater in the cup.", marks: 1, markCode: "B" },
              { reasoning: "Evidence: the bathtub contains far more water (100 000 g compared with 200 g), so it has many more particles.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: thermal energy is the total kinetic energy of all the particles, so many particles at a lower temperature can have more total energy than a few particles at a higher temperature.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The cup has the higher temperature (faster average particle motion); the bathtub has more thermal energy because it contains far more particles.",
            commonErrors: ["Saying the hotter object always has more thermal energy.", "Confusing temperature with thermal energy."],
            examinerNote: "R1 for both correct claims. B1 for temperature linked to average kinetic energy. B1 for more water or particles in the bathtub. R1 for total energy depending on both amount and temperature.",
          },
        },
        {
          id: "s7-u2-particle-motion-states-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student heats a solid wax steadily with a hot plate and records its temperature every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| Temperature ($^\\circ\\text{C}$) | 20 | 40 | 60 | 60 | 60 | 60 | 75 | 90 |\n\nThe temperature rises, stays constant from 4 to 10 minutes, then rises again.",
          parts: [
            { label: "a", prompt: "State the melting point of the wax.", marks: 1 },
            { label: "b", prompt: "State the state of matter of the wax at 7 minutes.", marks: 1 },
            { label: "c", prompt: "Explain why the temperature stays constant from 4 to 10 minutes even though the wax is still being heated.", marks: 3 },
            { label: "d", prompt: "Describe how the arrangement and motion of the particles at 14 minutes differ from those at 0 minutes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Change of state", statement: "During melting, added energy overcomes the attractions between particles and the temperature stays constant." },
              { kind: "principle", name: "Particle model", statement: "Solid particles vibrate in fixed positions; liquid particles are close but can move past each other." },
            ],
            steps: [
              { part: "a", reasoning: "The flat section of the graph is at $60^\\circ\\text{C}$, so this is the melting point.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "At 7 minutes the wax is melting, so it is a mixture of solid and liquid.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The wax is melting during this time.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The added thermal energy is used to overcome the attractions between the particles.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is not used to speed the particles up, so their average kinetic energy and the temperature do not change until melting is complete.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "At 0 minutes the wax is solid, with particles in a fixed pattern vibrating in place.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "At 14 minutes the wax is liquid, with particles still close together but able to slide past one another.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The particles at 14 minutes move faster and have more kinetic energy because the temperature is higher.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $60^\\circ\\text{C}$ (b) Solid and liquid together (c) Energy breaks attractions between particles during melting, not increasing kinetic energy (d) Solid: fixed pattern, vibrating; liquid: close, sliding past, moving faster.",
            commonErrors: ["In (b) saying only liquid or only solid.", "In (c) saying the heat is not reaching the wax or the heater turned off.", "In (d) saying liquid particles are farther apart than in a gas, or that particles get bigger."],
            examinerNote: "(a) Accept 60 without unit. (b) Allow 'solid and liquid' or 'melting' oe. (c) Reject 'heat stops'. (d) Allow 'more random' for liquid arrangement.",
          },
        },
      ],
    },
    {
      id: "s7-u2-physical-chemical-changes",
      title: "Physical and chemical changes",
      skill: "Use evidence to decide whether a physical or a chemical change has happened.",
      lesson: {
        sections: [
          {
            heading: "Physical changes",
            body: "In a **physical change** the substance keeps its identity. Particles may be rearranged or separated, but no new substance forms. Melting ice, dissolving sugar in water, crushing a can and boiling water are all physical changes. Physical changes can often be reversed, for example by freezing the water again, though not always.",
          },
          {
            heading: "Chemical changes and evidence",
            body: "In a **chemical change** (a chemical reaction) atoms are rearranged to form one or more **new substances** with different properties. Burning wood, rusting iron, baking a cake and an antacid tablet fizzing in water are chemical changes.\n\nEvidence that a chemical reaction may have happened includes:\n\n- a gas is produced (bubbles that are not boiling)\n- a solid precipitate forms in a liquid\n- a permanent color change\n- a temperature change not caused by heating or cooling from outside\n- light or a new odor is given off",
          },
          {
            heading: "Be careful with evidence",
            body: "One sign alone is not always proof. Boiling water makes bubbles, but they are water vapor, a physical change. A color change can also be physical, such as mixing paints. The best proof of a chemical change is that a new substance with **different properties** has formed. For example, when iron rusts, the orange-brown solid is brittle and not attracted to a magnet in the way iron is.",
          },
        ],
        keyFormulas: [
          { name: "Physical change", statement: "No new substance forms (same substance, different state, shape or size)" },
          { name: "Chemical change", statement: "New substance(s) with different properties form" },
          { name: "Evidence of a reaction", statement: "Gas produced, precipitate, permanent color change, energy change, odor or light" },
        ],
        workedExample: {
          problem: "A student mixes two clear liquids and a cloudy white solid forms that settles to the bottom. Is this a chemical change? Give evidence.",
          solution: "Yes, it is most likely a chemical change. A solid (a precipitate) formed from two liquids, which is evidence that a new substance with different properties was made. The student could confirm by testing whether the solid has properties, such as solubility, different from both liquids.",
        },
      },
      questions: [
        {
          id: "s7-u2-physical-chemical-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a **chemical** change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice melting into water" },
              { id: "b", text: "Sugar dissolving in tea" },
              { id: "c", text: "A piece of iron rusting" },
              { id: "d", text: "Water boiling to make steam" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "A chemical change forms new substances with different properties." },
            ],
            steps: [
              { reasoning: "Rusting forms iron oxide, a new substance with different properties from iron.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A piece of iron rusting",
            commonErrors: ["Choosing boiling water because bubbles form; it is still water, so it is a physical change.", "Choosing dissolving because the sugar seems to disappear; it can be recovered by evaporating the water."],
            examinerNote: "B1 for rusting.",
          },
        },
        {
          id: "s7-u2-physical-chemical-changes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student drops an antacid tablet into a glass of water. The tablet fizzes and the glass feels slightly cooler.\n\nIdentify **two** pieces of evidence that a chemical reaction has happened.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence of a reaction", statement: "Gas production and an unexpected temperature change suggest a chemical reaction." },
            ],
            steps: [
              { reasoning: "Fizzing shows a gas is being produced, which is a new substance.", marks: 1, markCode: "B" },
              { reasoning: "The temperature change (cooling) shows an energy change not caused by outside heating or cooling.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A gas is produced (fizzing) and the temperature decreases.",
            commonErrors: ["Saying the tablet dissolving is evidence of a reaction; dissolving can be a physical change."],
            examinerNote: "B1 for gas or bubbles formed. B1 for temperature change. Reject 'the tablet disappears'.",
          },
        },
        {
          id: "s7-u2-physical-chemical-changes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student sees bubbles forming in a pot of water on a stove and says, \"A chemical reaction is happening because gas is being produced.\"\n\nConstruct an explanation that evaluates this claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical change", statement: "A physical change does not form a new substance." },
              { kind: "principle", name: "Evidence of a reaction", statement: "Gas production is evidence of a reaction only if the gas is a new substance." },
            ],
            steps: [
              { reasoning: "Claim: the student is incorrect; boiling is a physical change.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: the bubbles are water vapor, which is water in the gas state, not a new substance.", marks: 1, markCode: "B" },
              { reasoning: "Evidence: when the vapor cools it condenses back into liquid water with the same properties.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: gas production only indicates a chemical change when the gas is a different substance from the starting materials.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is incorrect. The bubbles are water vapor, the same substance as the liquid, and it condenses back to water, so boiling is a physical change.",
            commonErrors: ["Saying all bubbles show a reaction.", "Saying boiling water breaks down into hydrogen and oxygen."],
            examinerNote: "R1 for physical change. B1 for the gas being water vapor. B1 for condensing back or same substance. R1 for general principle about new substance.",
          },
        },
        {
          id: "s7-u2-physical-chemical-changes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student carries out three tests and records the observations.\n\n- **Test 1:** A piece of magnesium ribbon is placed in dilute acid. It fizzes, the ribbon gets smaller and the test tube feels warm.\n- **Test 2:** Salt is stirred into water. It disappears and the liquid stays clear. The mass of the salt solution equals the mass of the salt plus the water.\n- **Test 3:** A piece of paper is torn into small pieces.",
          parts: [
            { label: "a", prompt: "Identify which test is a chemical change.", marks: 1 },
            { label: "b", prompt: "Give **two** pieces of evidence for your answer to (a).", marks: 2 },
            { label: "c", prompt: "Classify Tests 2 and 3 as physical or chemical changes and explain how the student could show that the salt in Test 2 is still present.", marks: 3 },
            { label: "d", prompt: "The student has 5.0 g of salt and 95.0 g of water. Calculate the mass of the salt solution formed, and state which law this shows.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "A chemical change forms new substances with different properties." },
              { kind: "law", name: "Conservation of mass", statement: "In a closed system, the total mass stays the same during any change." },
            ],
            steps: [
              { part: "a", reasoning: "Test 1, magnesium in acid, shows several signs of a reaction.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A gas is produced (fizzing).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The temperature increases (test tube feels warm) and the ribbon disappears as it reacts.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Test 2 (dissolving) and Test 3 (tearing) are both physical changes because no new substance forms.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "To show the salt is still there, evaporate the water.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The salt crystals are left behind, which shows the salt kept its identity.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Add the masses of the salt and the water.", working: "5.0+95.0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the mass of the solution.", working: "100.0\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "This shows the conservation of mass: no matter is lost when salt dissolves.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Test 1 (b) Gas produced; temperature rise (c) Both physical; evaporate the water to recover the salt (d) 100.0 g; conservation of mass",
            commonErrors: ["Calling dissolving a chemical change because the salt seems to vanish.", "Saying mass is lost when the salt dissolves."],
            examinerNote: "(b) Allow 'ribbon gets smaller' as one piece of evidence. (c) Allow boiling off the water. (d) Allow 100 without unit for A1 if the unit appears in the working.",
          },
        },
      ],
    },
  ],
};
