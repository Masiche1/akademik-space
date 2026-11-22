import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ebi10-u2-lesson-2-2",
  code: "2-2",
  title: "Diet, Digestion and Energy in Food",
  goal: "I CAN explain a balanced diet, describe how enzymes and bile digest food, explain how the small intestine absorbs it and calculate the energy in a food sample.",
  standards: ["4BI1 2.24", "4BI1 2.25", "4BI1 2.26", "4BI1 2.27", "4BI1 2.28", "4BI1 2.29", "4BI1 2.30", "4BI1 2.31", "4BI1 2.32"],
  vocabulary: [
    { term: "Balanced diet", definition: "A diet containing the right amounts of carbohydrate, protein, lipid, vitamins, minerals, fibre and water for the energy needs of the person." },
    { term: "Digestion", definition: "The breakdown of large insoluble food molecules into small soluble molecules that can be absorbed, using enzymes." },
    { term: "Bile", definition: "An alkaline liquid made in the liver and stored in the gall bladder that neutralises stomach acid and emulsifies fats." },
    { term: "Emulsification", definition: "Breaking large fat droplets into many smaller droplets, giving a larger surface area for lipase to act on." },
    { term: "Villus", definition: "A finger-like projection of the small intestine lining that increases the surface area for absorption." },
    { term: "Absorption", definition: "The movement of digested food molecules from the small intestine into the blood or lymph." },
    { term: "Calorimetry", definition: "Measuring the energy released when a substance burns, by the temperature rise of a known mass of water." },
  ],
  concepts: [
    {
      id: "ebi10-u2-human-diet-digestion",
      title: "Human diet and digestion",
      skill: "Link nutrients to their functions and deficiency diseases, and describe the digestive enzymes, their sites and products, and the role of bile and stomach acid.",
      lesson: {
        sections: [
          {
            heading: "A balanced diet",
            body: "A balanced diet supplies the right amount of each nutrient. Energy needs depend on age, gender, activity level and pregnancy.\n\n- **Carbohydrates**: source of energy.\n- **Lipids**: energy store, insulation and cell membranes.\n- **Proteins**: growth and repair of tissues, and making enzymes.\n- **Vitamin C**: needed for healthy skin and gums; lack causes **scurvy**.\n- **Vitamin D** and **calcium**: needed for strong bones and teeth; lack causes **rickets** in children.\n- **Iron**: needed to make haemoglobin; lack causes **anaemia**.\n- **Fibre**: provides bulk for the muscles of the gut to push food along, preventing constipation.\n- **Water**: a solvent in cells and for transport in the blood.",
          },
          {
            heading: "Digestive enzymes",
            body: "Digestion turns large insoluble molecules into small soluble ones. Each enzyme is specific to its substrate.\n\n- **Amylase** (carbohydrase) breaks down **starch** to **maltose**. It is made in the salivary glands and pancreas and works in the mouth and small intestine. Maltase then breaks maltose into **glucose** in the small intestine.\n- **Protease** breaks down **protein** to **amino acids**. It is made in the stomach, pancreas and small intestine.\n- **Lipase** breaks down **lipids** (fats and oils) into **fatty acids and glycerol**. It is made in the pancreas and works in the small intestine.\n\nThe stomach produces hydrochloric acid, giving a pH of about $2$. This kills bacteria and gives the optimum pH for stomach protease. Protease in the small intestine has a different optimum pH, near neutral or slightly alkaline.",
          },
          {
            heading: "The role of bile",
            body: "Bile is made in the **liver** and stored in the **gall bladder**. It flows into the small intestine and has two jobs:\n\n- it is **alkaline**, so it neutralises the acid from the stomach and gives the optimum pH for the enzymes of the small intestine\n- it **emulsifies** fats, breaking large droplets into smaller ones. This increases the surface area, so lipase digests the fat faster.\n\nBile contains no enzymes, so it does not chemically digest fat.",
          },
        ],
        keyFormulas: [
          { name: "Starch digestion", statement: "starch $\\xrightarrow{\\text{amylase}}$ maltose $\\xrightarrow{\\text{maltase}}$ glucose" },
          { name: "Protein digestion", statement: "protein $\\xrightarrow{\\text{protease}}$ amino acids" },
          { name: "Lipid digestion", statement: "lipid $\\xrightarrow{\\text{lipase}}$ fatty acids + glycerol" },
          { name: "Bile", statement: "Made in the liver, stored in the gall bladder; alkaline and emulsifies fats" },
        ],
        workedExample: {
          problem: "A snack contains $10\\text{ g}$ protein, $30\\text{ g}$ carbohydrate and $12\\text{ g}$ lipid. The energy values are $17\\text{ kJ/g}$ for protein and carbohydrate and $37\\text{ kJ/g}$ for lipid. Calculate the total energy.",
          solution: "Protein and carbohydrate: $(10 + 30) \\times 17 = 680\\text{ kJ}$. Lipid: $12 \\times 37 = 444\\text{ kJ}$. Total $= 680 + 444 = 1124\\text{ kJ}$.",
        },
      },
      questions: [
        {
          id: "ebi10-u2-human-diet-digestion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which row correctly matches an enzyme with the substrate it digests and the product it makes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipase: protein to amino acids" },
              { id: "b", text: "Amylase: starch to glucose only" },
              { id: "c", text: "Protease: protein to fatty acids" },
              { id: "d", text: "Lipase: lipid to fatty acids and glycerol" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enzyme specificity", statement: "Each digestive enzyme acts on one type of substrate: amylase on starch, protease on protein, lipase on lipid." },
            ],
            steps: [
              { reasoning: "Lipase digests lipids into fatty acids and glycerol.", working: "\\text{lipid} \\rightarrow \\text{fatty acids} + \\text{glycerol}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a): amylase makes maltose, which maltase then breaks down to glucose.", "Mixing up the products of protease and lipase."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi10-u2-human-diet-digestion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the functions of bile in digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bile", statement: "Bile is alkaline and emulsifies fats, but contains no enzymes." },
            ],
            steps: [
              { reasoning: "Bile is alkaline, so it neutralises the hydrochloric acid that enters the small intestine from the stomach.", marks: 1, markCode: "B" },
              { reasoning: "This gives the optimum (alkaline) pH for the enzymes in the small intestine.", marks: 1, markCode: "B" },
              { reasoning: "It emulsifies fat, breaking large droplets into smaller droplets, which increases the surface area for lipase to digest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Neutralises stomach acid, giving optimum pH for enzymes; emulsifies fat to increase surface area for lipase.",
            commonErrors: ["Saying that bile is an enzyme that digests fat.", "Saying that bile is made in the gall bladder (it is made in the liver and stored in the gall bladder).", "Saying that emulsification breaks fat into fatty acids and glycerol."],
            examinerNote: "Allow 'neutralises acid' oe. Reject 'bile breaks down fat' with no mention of emulsification or surface area.",
          },
        },
        {
          id: "ebi10-u2-human-diet-digestion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cereal bar contains $6.0\\text{ g}$ protein, $22\\text{ g}$ carbohydrate and $9.0\\text{ g}$ lipid. The energy released is $17\\text{ kJ}$ per gram of protein, $17\\text{ kJ}$ per gram of carbohydrate and $37\\text{ kJ}$ per gram of lipid. Calculate the total energy in the bar, in kilojoules (kJ).",
          response: { type: "numeric", parts: [{ label: "Total energy", answer: 809, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in food", statement: "$\\text{energy} = \\text{mass of nutrient} \\times \\text{energy per gram}$, summed for each nutrient." },
            ],
            steps: [
              { reasoning: "Find the energy from each nutrient.", working: "6.0 \\times 17 = 102,\\quad 22 \\times 17 = 374,\\quad 9.0 \\times 37 = 333", marks: 1, markCode: "M" },
              { reasoning: "Add the three energies.", working: "102 + 374 + 333", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "809\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$809\\text{ kJ}$",
            commonErrors: ["Multiplying total mass by one energy value.", "Adding the masses and the energy values rather than multiplying."],
            examinerNote: "M1 for any two correct products. M1 for adding. A1 cao.",
          },
        },
        {
          id: "ebi10-u2-human-diet-digestion-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student investigates the digestion of starch by amylase. She mixes $5\\text{ cm}^3$ of starch solution with $1\\text{ cm}^3$ of amylase solution in a water bath. Every 30 seconds she removes a drop and adds it to iodine solution on a spotting tile. She records the time taken for the iodine to stay orange-brown, which shows that all the starch has been digested.\n\n| Temperature ($^\\circ\\text{C}$) | Time for starch to disappear (s) |\n| --- | --- |\n| 20 | 240 |\n| 37 | 120 |\n| 80 | Not digested after 900 |",
          parts: [
            { label: "a", prompt: "Name the product of the digestion of starch by amylase, and the enzyme that converts this product to glucose.", marks: 2 },
            { label: "b", prompt: "Calculate how many times faster starch is digested at $37^\\circ\\text{C}$ than at $20^\\circ\\text{C}$.", marks: 2 },
            { label: "c", prompt: "Explain why starch was not digested at $80^\\circ\\text{C}$.", marks: 2 },
            { label: "d", prompt: "State one variable the student must control.", marks: 1 },
            { label: "e", prompt: "Explain why bile is needed for enzymes in the small intestine to work effectively on food that has left the stomach.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enzyme action", statement: "Enzyme activity rises with temperature up to the optimum, then the enzyme is denatured as the shape of the active site changes." },
              { kind: "principle", name: "Optimum pH", statement: "Each enzyme works best at its own pH. Stomach contents are acidic and small intestine enzymes work best in alkaline conditions." },
            ],
            steps: [
              { part: "a", reasoning: "Amylase digests starch to maltose.", working: "\\text{maltose}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Maltose is converted to glucose by maltase.", working: "\\text{maltase}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Compare the times: rate is inversely proportional to time.", working: "\\frac{240}{120}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "2\\text{ times faster}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The high temperature changes the shape of the active site of the enzyme, so it is denatured.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The starch (substrate) no longer fits the active site, so it cannot be digested.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Any one of: concentration or volume of starch, concentration or volume of amylase, pH.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Food from the stomach is acidic (stomach acid, pH about 2) and bile is alkaline, so it neutralises the acid.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "This gives the optimum pH for the enzymes in the small intestine, which would otherwise be denatured or work slowly.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Bile also emulsifies fat, increasing its surface area so lipase can digest it faster.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) maltose; maltase (b) $2$ times faster (c) enzyme denatured, substrate no longer fits (d) volume of amylase (e) bile neutralises the acid, giving optimum pH; emulsifies fat.",
            commonErrors: ["Saying that the enzyme is killed (enzymes are not alive).", "Saying that the product of amylase is glucose.", "Dividing 120 by 240 to give 0.5."],
            examinerNote: "In (b) allow ecf for $120/240 = 0.5$ for M1 only. In (d) reject temperature. In (c) reject 'the enzyme dies'.",
          },
        },
      ],
    },
    {
      id: "ebi10-u2-absorption-energy-food",
      title: "Absorption and energy in food",
      skill: "Explain how villi are adapted for absorption and calculate the energy content of food from a calorimetry experiment.",
      lesson: {
        sections: [
          {
            heading: "Absorption in the small intestine",
            body: "Digested food is absorbed in the **small intestine** (mainly the ileum) into the blood. The inner wall is covered in **villi**, which are adapted for efficient absorption:\n\n- a **large surface area**, from the villi and the microvilli on the surface cells\n- a wall that is **one cell thick**, giving a short diffusion distance\n- a dense network of **capillaries**, giving a rich blood supply that carries absorbed food away and keeps the concentration gradient steep\n- a **lacteal** (a lymph vessel) in the middle that absorbs fatty acids and glycerol\n\nGlucose and amino acids move by **diffusion** and by **active transport**, which moves them against a concentration gradient. Water is absorbed in the small intestine and the large intestine. The large intestine mainly absorbs water.",
          },
          {
            heading: "Measuring the energy in food",
            body: "To find the energy in a food, burn a known mass of the food and use the flame to heat a known mass of water in a boiling tube. The energy transferred to the water is\n\n$$E = m \\times c \\times \\Delta T$$\n\nwhere $m$ is the mass of water in grams, $c = 4.2\\text{ J/g}^\\circ\\text{C}$ is the specific heat capacity of water and $\\Delta T$ is the temperature rise in $^\\circ\\text{C}$. Divide by the mass of food burnt to find the energy per gram:\n\n$$\\text{energy per gram} = \\frac{\\text{energy transferred}}{\\text{mass of food}}$$\n\nDivide joules by $1000$ to give kilojoules.",
          },
          {
            heading: "Evaluating the method",
            body: "The result is usually lower than the true value on a food label because:\n\n- some heat is **lost to the surroundings** and to the boiling tube\n- the food may **burn incompletely**\n- some food may be left unburnt\n\nImprovements: use a **draught shield** or insulation, put the flame closer to the tube, stir the water to spread the heat evenly, and repeat the experiment to calculate a mean. The independent variable is the type of food; control variables are the volume of water, the starting temperature and the distance from the flame.",
          },
        ],
        keyFormulas: [
          { name: "Energy transferred to water", statement: "$E = m \\times c \\times \\Delta T$, with $c = 4.2\\text{ J/g}^\\circ\\text{C}$" },
          { name: "Energy in food", statement: "$\\text{energy per gram} = \\frac{E}{\\text{mass of food}}$" },
          { name: "Adaptations of villi", statement: "Large surface area, thin wall, good blood supply, lacteal" },
          { name: "Conversion", statement: "$1\\text{ kJ} = 1000\\text{ J}$" },
        ],
        workedExample: {
          problem: "A student burns $0.80\\text{ g}$ of crisps and heats $30\\text{ g}$ of water from $18^\\circ\\text{C}$ to $48^\\circ\\text{C}$. Calculate the energy per gram of crisps in $\\text{kJ/g}$.",
          solution: "$\\Delta T = 48 - 18 = 30^\\circ\\text{C}$. $E = 30 \\times 4.2 \\times 30 = 3780\\text{ J}$. Energy per gram $= \\frac{3780}{0.80} = 4725\\text{ J/g} = 4.725\\text{ kJ/g}$, which is $4.7\\text{ kJ/g}$ to 2 significant figures.",
        },
      },
      questions: [
        {
          id: "ebi10-u2-absorption-energy-food-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the digestive system is the main site of absorption of digested food molecules into the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small intestine" },
              { id: "b", text: "Oesophagus" },
              { id: "c", text: "Stomach" },
              { id: "d", text: "Large intestine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absorption", statement: "Absorption is the movement of digested food molecules into the blood; it happens mainly through the villi of the small intestine." },
            ],
            steps: [
              { reasoning: "The small intestine has villi that provide a large surface area for absorbing digested food.", working: "\\text{small intestine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Small intestine",
            commonErrors: ["Choosing the large intestine, which mainly absorbs water.", "Choosing the stomach, where protein digestion begins but little is absorbed."],
            examinerNote: "B1 for small intestine. Allow ileum.",
          },
        },
        {
          id: "ebi10-u2-absorption-energy-food-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student burns a sample of food and uses it to heat $25\\text{ g}$ of water. The temperature of the water rises from $18^\\circ\\text{C}$ to $38^\\circ\\text{C}$. The specific heat capacity of water is $4.2\\text{ J/g}^\\circ\\text{C}$. Calculate the energy transferred to the water, in joules.",
          response: { type: "numeric", parts: [{ label: "Energy transferred", answer: 2100, unit: "J" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$E = m \\times c \\times \\Delta T$" },
            ],
            steps: [
              { reasoning: "Find the temperature rise.", working: "\\Delta T = 38 - 18 = 20^\\circ\\text{C}", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $E = mc\\Delta T$.", working: "E = 25 \\times 4.2 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "E = 2100\\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2100\\text{ J}$",
            commonErrors: ["Using the final temperature (38) instead of the temperature change.", "Forgetting to multiply by 4.2."],
            examinerNote: "M1 for $\\Delta T = 20$. M1 for correct substitution. A1 cao with unit. Allow 2.1 kJ.",
          },
        },
        {
          id: "ebi10-u2-absorption-energy-food-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student burns $0.75\\text{ g}$ of a snack and uses it to heat $50\\text{ g}$ of water. The temperature of the water rises by $15^\\circ\\text{C}$. Calculate the energy released per gram of snack, in $\\text{kJ/g}$. The specific heat capacity of water is $4.2\\text{ J/g}^\\circ\\text{C}$.",
          response: { type: "numeric", parts: [{ label: "Energy per gram", answer: 4.2, tolerance: 0.01, unit: "kJ/g" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$E = m \\times c \\times \\Delta T$" },
              { kind: "formula", name: "Energy per gram", statement: "$\\text{energy per gram} = \\frac{E}{\\text{mass of food}}$" },
            ],
            steps: [
              { reasoning: "Substitute into $E = mc\\Delta T$.", working: "E = 50 \\times 4.2 \\times 15", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the energy transferred to the water.", working: "E = 3150\\text{ J}", marks: 1, markCode: "A" },
              { reasoning: "Divide by the mass of food burnt.", working: "\\frac{3150}{0.75} = 4200\\text{ J/g}", marks: 1, markCode: "M" },
              { reasoning: "Convert joules to kilojoules by dividing by 1000.", working: "4.2\\text{ kJ/g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.2\\text{ kJ/g}$",
            commonErrors: ["Dividing by the mass of water instead of the mass of food.", "Not converting to kJ, giving 4200.", "Using the mass of food in the energy equation."],
            examinerNote: "M1 for substitution, A1 for 3150 J. M1 for dividing by 0.75, allow ecf. A1 for 4.2 kJ/g. Allow 4200 J/g for M1 only, since the stem asks for kJ/g."
          },
        },
        {
          id: "ebi10-u2-absorption-energy-food-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student burns $0.50\\text{ g}$ of a peanut under a boiling tube containing $20\\text{ g}$ of water. The water temperature rises from $20^\\circ\\text{C}$ to $52^\\circ\\text{C}$. The specific heat capacity of water is $4.2\\text{ J/g}^\\circ\\text{C}$. The energy value given on the packet is $24\\text{ kJ/g}$.",
          parts: [
            { label: "a", prompt: "Calculate the energy transferred to the water, in joules.", marks: 2 },
            { label: "b", prompt: "Calculate the energy released per gram of peanut, in $\\text{kJ/g}$. Give your answer to 2 significant figures.", marks: 2 },
            { label: "c", prompt: "The result is much lower than the value on the packet. Suggest two reasons why.", marks: 2 },
            { label: "d", prompt: "Suggest one change to the apparatus that would improve the accuracy of the result.", marks: 1 },
            { label: "e", prompt: "Describe how the structure of a villus makes absorption of digested food efficient.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transferred", statement: "$E = m \\times c \\times \\Delta T$" },
              { kind: "principle", name: "Villus adaptations", statement: "A large surface area, a thin wall and a good blood supply give fast diffusion and absorption." },
            ],
            steps: [
              { part: "a", reasoning: "Find the temperature rise and substitute into $E = mc\\Delta T$.", working: "\\Delta T = 32^\\circ\\text{C},\\quad E = 20 \\times 4.2 \\times 32", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "E = 2688\\text{ J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by the mass of food and convert to kJ.", working: "\\frac{2688}{0.50} = 5376\\text{ J/g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to kJ and round to 2 significant figures.", working: "5.376\\text{ kJ/g} \\approx 5.4\\text{ kJ/g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat was lost to the surroundings (air) and to the boiling tube, so not all the energy heated the water.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The peanut burned incompletely or not all of it burned, so less energy was released.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Use a draught shield or insulation around the tube, or place the flame closer to the tube, to reduce heat loss.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Villi give the small intestine a large surface area for absorption.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "The wall is one cell thick, so the diffusion distance is short.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A dense network of capillaries gives a good blood supply, carrying absorbed food away and maintaining a steep concentration gradient.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $2688\\text{ J}$ (b) $5.4\\text{ kJ/g}$ (c) heat loss; incomplete combustion (d) draught shield (e) large surface area, thin wall, good blood supply.",
            commonErrors: ["Forgetting to convert from J to kJ and giving 5400.", "Dividing by the mass of water (20 g) instead of the mass of peanut.", "Giving human error as a reason without a specific cause."],
            examinerNote: "In (a) allow 2.7 kJ. In (b) allow 5.4 only for A1; accept 5376 J/g with unit for M1 only. In (c) reject 'human error'. In (e) allow lacteal for absorption of fats as an extra point."
          },
        },
      ],
    },
  ],
};
