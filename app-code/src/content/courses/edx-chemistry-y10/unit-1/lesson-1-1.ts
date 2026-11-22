import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ech10-u1-lesson-1-1",
  code: "1-1",
  title: "States of Matter and Separating Mixtures",
  goal: "I CAN explain the properties of solids, liquids and gases and diffusion using particles, and choose and explain methods to separate mixtures, including calculating Rf values.",
  standards: ["4CH1 1.1", "4CH1 1.2", "4CH1 1.3", "4CH1 1.4", "4CH1 1.5", "4CH1 1.6", "4CH1 1.7"],
  vocabulary: [
    { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration, caused by their random motion." },
    { term: "Melting point", definition: "The temperature at which a solid changes to a liquid. A pure substance has a sharp, fixed melting point." },
    { term: "Boiling point", definition: "The temperature at which a liquid changes to a gas throughout the liquid." },
    { term: "Filtration", definition: "A method of separating an insoluble solid from a liquid using filter paper." },
    { term: "Crystallisation", definition: "A method of obtaining a soluble solid from its solution by evaporating some solvent and cooling so that crystals form." },
    { term: "Distillation", definition: "A method of separating a liquid from a solution or from other liquids by evaporating it and condensing the vapour." },
    { term: "Rf value", definition: "In chromatography, the distance moved by a spot divided by the distance moved by the solvent front, both measured from the baseline." },
  ],
  concepts: [
    {
      id: "ech10-u1-states-of-matter-diffusion",
      title: "States of matter and diffusion",
      skill: "Describe the arrangement and motion of particles in solids, liquids and gases, explain changes of state and explain diffusion.",
      lesson: {
        sections: [
          {
            heading: "Solids, liquids and gases",
            body: "Matter is made of tiny particles. How the particles are arranged and how they move decides the state.\n\n| State | Arrangement | Movement | Forces between particles |\n| --- | --- | --- | --- |\n| Solid | Close together, regular pattern | Vibrate about fixed positions | Strong |\n| Liquid | Close together, irregular | Move around each other | Weaker |\n| Gas | Far apart, irregular | Move quickly and randomly in all directions | Very weak |\n\nSolids and liquids cannot be compressed because there is almost no space between the particles. Gases can be compressed because there are large gaps between the particles.",
          },
          {
            heading: "Changes of state",
            body: "When a solid is heated, the particles gain energy and vibrate more. At the **melting point** they have enough energy to overcome some of the forces of attraction between them and move out of their fixed positions. At the **boiling point** the particles gain enough energy to overcome the forces completely and escape as a gas.\n\nDuring a change of state the temperature stays constant. The energy supplied is used to overcome the forces between the particles, not to make them move faster. A pure substance melts and boils at fixed temperatures. An impure substance melts over a range of temperatures and the melting point is lowered, while its boiling point is raised.",
          },
          {
            heading: "Diffusion",
            body: "Particles in liquids and gases move randomly. **Diffusion** is the net movement of particles from where they are in a higher concentration to where they are in a lower concentration. It happens until the particles are evenly spread out.\n\nGas particles with a lower relative formula mass move faster at the same temperature, so lighter gases diffuse faster than heavier gases. When ammonia gas and hydrogen chloride gas diffuse towards each other along a tube, they react to form a white ring of ammonium chloride. The ring forms nearer the end where the hydrogen chloride was placed, because ammonia ($M_r = 17$) diffuses faster than hydrogen chloride ($M_r = 36.5$).",
          },
        ],
        keyFormulas: [
          { name: "Solid", statement: "Close together, regular, vibrating about fixed positions" },
          { name: "Liquid", statement: "Close together, irregular, particles move around each other" },
          { name: "Gas", statement: "Far apart, irregular, fast random motion" },
          { name: "Diffusion", statement: "Net movement from higher concentration to lower concentration" },
        ],
        workedExample: {
          problem: "Explain, in terms of particles, why the temperature of water stays at $100^\\circ\\text{C}$ while it boils.",
          solution: "The energy supplied is used to overcome the forces of attraction between the water molecules so that they separate to form steam. It is not used to increase the kinetic energy of the particles, so the temperature does not rise until all the liquid has boiled.",
        },
      },
      questions: [
        {
          id: "ech10-u1-states-of-matter-diffusion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement describes the particles in a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are close together in a regular pattern and move freely around each other." },
              { id: "b", text: "They are close together in a regular pattern and vibrate about fixed positions." },
              { id: "c", text: "They are far apart and move quickly in random directions." },
              { id: "d", text: "They are close together in an irregular arrangement and move around each other." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Particles in a liquid", statement: "Liquid particles are close together, irregularly arranged, and able to move past one another." },
            ],
            steps: [
              { reasoning: "Liquid particles touch each other but are not held in a lattice, so they can slide past one another.", working: "\\text{close, irregular, moving around each other}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a), which describes a solid.", "Choosing (c), which describes a gas.", "Choosing (d), which combines a regular pattern with free movement, which no state has."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech10-u1-states-of-matter-diffusion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sealed syringe containing air can be compressed easily. A sealed syringe containing water cannot. Explain this difference in terms of particles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Spacing of particles", statement: "Gas particles are far apart with large spaces between them. Liquid particles are close together with almost no space between them." },
            ],
            steps: [
              { reasoning: "In a gas the particles are far apart, so there are large gaps between them.", marks: 1, markCode: "B" },
              { reasoning: "The particles can be pushed closer together, so the gas can be compressed.", marks: 1, markCode: "B" },
              { reasoning: "In a liquid the particles are already close together (touching), so there is no space for them to move closer and it cannot be compressed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Gas particles are far apart and can be pushed closer; liquid particles are already touching so cannot be pushed closer.",
            commonErrors: ["Saying the particles in a gas are smaller. The particles are the same size; they are further apart.", "Saying the particles in a liquid are not moving."],
            examinerNote: "Allow 'a lot of space' for 'large gaps' oe. Reject any suggestion that the particles themselves change size.",
          },
        },
        {
          id: "ech10-u1-states-of-matter-diffusion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Cotton wool soaked in concentrated ammonia solution is placed in one end of a long glass tube. At the same moment, cotton wool soaked in concentrated hydrochloric acid is placed in the other end. After a few minutes a white ring forms in the tube, closer to the hydrochloric acid end. The relative formula masses are $M_r(\\text{NH}_3) = 17$ and $M_r(\\text{HCl}) = 36.5$.\n\nExplain these observations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Gas particles move randomly and spread from a region of higher concentration to a region of lower concentration." },
              { kind: "principle", name: "Particle speed and mass", statement: "At the same temperature, particles with a lower relative formula mass move faster, so they diffuse faster." },
            ],
            steps: [
              { reasoning: "Ammonia and hydrogen chloride gases are given off and diffuse along the tube, moving from higher to lower concentration.", marks: 1, markCode: "B" },
              { reasoning: "Where the gases meet they react to form solid ammonium chloride, seen as the white ring.", working: "\\text{NH}_3(\\text{g}) + \\text{HCl}(\\text{g}) \\rightarrow \\text{NH}_4\\text{Cl}(\\text{s})", marks: 1, markCode: "B" },
              { reasoning: "Ammonia has the lower relative formula mass (17 compared with 36.5), so its particles are lighter and move faster.", marks: 1, markCode: "B" },
              { reasoning: "Ammonia therefore travels further in the same time, so the gases meet nearer the hydrochloric acid end.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Gases diffuse and react to form white $\\text{NH}_4\\text{Cl}$; ammonia is lighter so diffuses faster and travels further, so the ring is nearer the HCl end.",
            commonErrors: ["Saying the ring forms nearer the HCl end because HCl diffuses faster. The ring forms where the gases meet, which is closer to the slower gas.", "Writing that ammonia is more reactive rather than faster-moving."],
            examinerNote: "Allow ammonium chloride for the white solid. Allow 'molecules' for 'particles'. Reject 'ammonia is lighter so it floats'.",
          },
        },
        {
          id: "ech10-u1-states-of-matter-diffusion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The table gives the melting point and boiling point of three pure substances.\n\n| Substance | Melting point ($^\\circ\\text{C}$) | Boiling point ($^\\circ\\text{C}$) |\n| --- | --- | --- |\n| X | $-219$ | $-183$ |\n| Y | $801$ | $1413$ |\n| Z | $-7$ | $59$ |",
          parts: [
            { label: "a", prompt: "State the physical state of X, Y and Z at $25^\\circ\\text{C}$.", marks: 3 },
            { label: "b", prompt: "Describe, in terms of particles, what happens as a solid is heated to its melting point and then melts.", marks: 2 },
            { label: "c", prompt: "Explain why the temperature of Z stays at $59^\\circ\\text{C}$ while it boils.", marks: 2 },
            { label: "d", prompt: "A sample of Z is found to boil over the range $59^\\circ\\text{C}$ to $63^\\circ\\text{C}$. Suggest what this shows about the sample.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "State from temperature", statement: "A substance is a solid below its melting point, a liquid between its melting and boiling points, and a gas above its boiling point." },
              { kind: "principle", name: "Energy during a change of state", statement: "Energy supplied during a change of state overcomes forces between particles, so the temperature stays constant." },
              { kind: "property", name: "Purity", statement: "A pure substance has a sharp melting point and boiling point; an impure substance changes state over a range." },
            ],
            steps: [
              { part: "a", reasoning: "$25^\\circ\\text{C}$ is above the boiling point of X ($-183^\\circ\\text{C}$), so X is a gas.", working: "\\text{X: gas}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$25^\\circ\\text{C}$ is below the melting point of Y ($801^\\circ\\text{C}$), so Y is a solid.", working: "\\text{Y: solid}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$25^\\circ\\text{C}$ is between $-7^\\circ\\text{C}$ and $59^\\circ\\text{C}$, so Z is a liquid.", working: "\\text{Z: liquid}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "As the solid is heated the particles gain energy and vibrate more strongly about their fixed positions.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "At the melting point the particles have enough energy to overcome the forces between them, leave their fixed positions and move around each other.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The energy supplied is used to overcome the forces of attraction between the particles so that they separate into a gas.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It is not used to increase the kinetic energy (speed) of the particles, so the temperature does not rise.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Pure substances boil at one fixed temperature, so a boiling range shows that the sample is impure (a mixture).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) X gas, Y solid, Z liquid (b) particles vibrate more, then overcome forces and move past each other (c) energy overcomes forces between particles, not increasing speed (d) the sample is impure.",
            commonErrors: ["Saying X is a solid because its melting point is negative.", "Saying the temperature stays constant because no energy is being supplied.", "Saying the particles themselves melt or expand."],
            examinerNote: "In (a) all three correct for 3 marks, two correct for 2 marks, one for 1 mark. In (b) allow 'bonds' for 'forces' but reject 'covalent bonds break'. In (d) allow 'mixture' oe.",
          },
        },
      ],
    },
    {
      id: "ech10-u1-separating-mixtures-rf",
      title: "Separating mixtures and chromatography",
      skill: "Choose a method to separate a mixture and use chromatography and Rf values to identify substances.",
      lesson: {
        sections: [
          {
            heading: "Choosing a separation method",
            body: "The method depends on the properties of the substances in the mixture.\n\n- **Filtration**: separates an insoluble solid from a liquid, for example sand from water. The solid stays in the filter paper as the **residue** and the liquid passes through as the **filtrate**.\n- **Evaporation and crystallisation**: obtain a soluble solid from its solution. Heat to evaporate some of the solvent, then cool the saturated solution so crystals form.\n- **Simple distillation**: separates a solvent from a solution, for example pure water from salt water. The solution is boiled, the vapour is cooled in a condenser and the liquid collected.\n- **Fractional distillation**: separates a mixture of liquids with different boiling points, such as ethanol and water. The liquid with the lower boiling point reaches the top of the column and is collected first.",
          },
          {
            heading: "Paper chromatography",
            body: "Chromatography separates substances that dissolve in the same solvent, such as the dyes in an ink. A pencil line (the **baseline**) is drawn near the bottom of the paper and spots of the samples are placed on it. The baseline is drawn in pencil because pencil does not dissolve in the solvent, whereas ink would. The paper stands in a solvent with the baseline **above** the solvent level so the spots do not dissolve into the solvent.\n\nThe solvent rises up the paper and carries the substances with it. Substances that are more soluble in the solvent, or less strongly attracted to the paper, travel further. A pure substance gives one spot. Spots from an unknown mixture that match a known sample in distance moved contain that substance.",
          },
          {
            heading: "Rf values",
            body: "The $R_f$ value compares the distance moved by a substance with the distance moved by the solvent. Both are measured from the baseline, and the solvent distance is measured to the **solvent front**, the highest point reached by the solvent.\n\n$$R_f = \\frac{\\text{distance moved by the spot}}{\\text{distance moved by the solvent front}}$$\n\nAn $R_f$ value has no units and is always between 0 and 1. A given substance has the same $R_f$ value in the same solvent, so the value can be used to identify it.",
          },
        ],
        keyFormulas: [
          { name: "Rf value", statement: "$R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$" },
          { name: "Insoluble solid and liquid", statement: "Filtration" },
          { name: "Soluble solid from solution", statement: "Evaporation and crystallisation" },
          { name: "Miscible liquids", statement: "Fractional distillation" },
        ],
        workedExample: {
          problem: "In a chromatography experiment a spot moves $4.2\\text{ cm}$ from the baseline and the solvent front moves $7.0\\text{ cm}$. Calculate the $R_f$ value.",
          solution: "$R_f = \\frac{4.2}{7.0} = 0.60$. There is no unit because the distances are in the same unit and cancel.",
        },
      },
      questions: [
        {
          id: "ech10-u1-separating-mixtures-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method is used to separate sand from a mixture of sand and water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fractional distillation" },
              { id: "b", text: "Filtration" },
              { id: "c", text: "Crystallisation" },
              { id: "d", text: "Simple distillation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filtration", statement: "Filtration separates an insoluble solid from a liquid because the solid particles are too large to pass through the filter paper." },
            ],
            steps: [
              { reasoning: "Sand is insoluble in water, so it is trapped by the filter paper as the residue while the water passes through.", working: "\\text{filtration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Filtration",
            commonErrors: ["Choosing distillation methods, which are used to separate liquids or collect a solvent, not to remove an insoluble solid.", "Choosing crystallisation, which is for a dissolved solid."],
            examinerNote: "B1 for filtration.",
          },
        },
        {
          id: "ech10-u1-separating-mixtures-rf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a chromatography experiment, a spot of dye moves $3.6\\text{ cm}$ from the baseline. The solvent front moves $9.0\\text{ cm}$ from the baseline. Calculate the $R_f$ value of the dye. Give your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Rf value", answer: 0.4, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rf value", statement: "$R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance moved by the spot by the distance moved by the solvent front.", working: "R_f = \\frac{3.6}{9.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. There is no unit.", working: "R_f = 0.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R_f = 0.40$",
            commonErrors: ["Dividing the solvent distance by the spot distance to get 2.5.", "Adding a unit such as cm."],
            examinerNote: "M1 for $3.6 \\div 9.0$. A1 for 0.40 or 0.4. Allow 40% only if no other answer is given.",
          },
        },
        {
          id: "ech10-u1-separating-mixtures-rf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A chromatography paper is $15.0\\text{ cm}$ tall. The pencil baseline is drawn $1.5\\text{ cm}$ above the bottom edge. After the experiment, the solvent front is $13.5\\text{ cm}$ above the bottom edge. A dye has an $R_f$ value of $0.45$ in this solvent.\n\nCalculate (i) the distance moved by the dye from the baseline, and (ii) the height of the dye spot above the bottom edge of the paper.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Distance moved by the dye from the baseline", answer: 5.4, tolerance: 0.05, unit: "cm" },
              { label: "(ii) Height of the spot above the bottom edge", answer: 6.9, tolerance: 0.05, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rf value", statement: "$R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$, with both distances measured from the baseline." },
            ],
            steps: [
              { reasoning: "The solvent distance must be measured from the baseline, not the bottom edge.", working: "13.5 - 1.5 = 12.0\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange the $R_f$ formula: distance moved = $R_f$ multiplied by the solvent distance.", working: "0.45 \\times 12.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5.4\\text{ cm}", marks: 1, markCode: "A" },
              { reasoning: "The spot started at the baseline, $1.5\\text{ cm}$ above the bottom edge, so add this on.", working: "5.4 + 1.5 = 6.9\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $5.4\\text{ cm}$ (ii) $6.9\\text{ cm}$",
            commonErrors: ["Using 13.5 cm as the solvent distance, giving 6.1 cm.", "Forgetting to add the 1.5 cm for the baseline height in part (ii)."],
            examinerNote: "M1 for 12.0 cm. M1 for $0.45 \\times$ their distance. A1 for 5.4. A1 for 6.9 (ecf from their (i) + 1.5).",
          },
        },
        {
          id: "ech10-u1-separating-mixtures-rf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student uses paper chromatography to find which of three dyes P, Q and R are in an unknown food colouring X. Spots of each dye and of X are placed on a baseline and the paper is placed in a solvent. When the solvent front has moved $10.0\\text{ cm}$ from the baseline, the paper is removed. The spots are at these distances from the baseline.\n\n| Sample | Distances moved by spots (cm) |\n| --- | --- |\n| P | 2.5 |\n| Q | 4.0 |\n| R | 6.0 |\n| X | 2.5 and 6.0 |",
          parts: [
            { label: "a", prompt: "Explain why the baseline is drawn in pencil and not in ink.", marks: 1 },
            { label: "b", prompt: "Explain why the baseline must be above the level of the solvent at the start.", marks: 1 },
            { label: "c", prompt: "Calculate the $R_f$ value of dye R. Give your answer to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "State which dyes are present in X and justify your answer.", marks: 2 },
            { label: "e", prompt: "Explain why the different dyes in a mixture travel different distances up the paper.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rf value", statement: "$R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$" },
              { kind: "principle", name: "Chromatography", statement: "Substances separate because they differ in solubility in the solvent and in how strongly they are attracted to the paper." },
            ],
            steps: [
              { part: "a", reasoning: "Pencil is insoluble in the solvent, so it does not move up the paper. Ink would dissolve and run, giving extra spots.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "If the baseline were below the solvent level, the dyes would dissolve into the solvent in the container instead of travelling up the paper.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the distance moved by R by the distance moved by the solvent front.", working: "R_f = \\frac{6.0}{10.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "R_f = 0.60", marks: 1, markCode: "A" },
              { part: "d", reasoning: "X contains dyes P and R.", working: "\\text{P and R}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "X has spots at the same distances (2.5 cm and 6.0 cm) as P and R, and no spot at 4.0 cm, so Q is absent.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The dyes have different solubilities in the solvent.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The dyes are attracted to the paper with different strengths.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "More soluble, less strongly attracted dyes are carried further by the solvent, so the dyes separate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Pencil does not dissolve (b) otherwise dyes dissolve into the solvent (c) $R_f = 0.60$ (d) P and R, spots match (e) different solubility and attraction to the paper.",
            commonErrors: ["Saying the pencil line is easier to see.", "Including dye Q in part (d) because it is a food dye.", "Giving the $R_f$ value as 6 or 60 cm."],
            examinerNote: "In (c) allow 0.6. In (e) allow 'adsorption' or 'stick to the paper' for attraction. Reject 'lighter dyes travel further' without reference to solubility or attraction.",
          },
        },
      ],
    },
  ],
};
