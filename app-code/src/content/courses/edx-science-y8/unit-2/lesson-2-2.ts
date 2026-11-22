import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "esc8-u2-lesson-2-2",
  code: "2-2",
  title: "Elements, Compounds and Mixtures",
  goal: "I CAN distinguish elements, compounds and mixtures, interpret simple formulae, and choose a method to separate a mixture.",
  standards: ["KS3 Chemistry", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Element", definition: "A substance made of only one type of atom. Elements cannot be broken down into simpler substances by chemical methods." },
    { term: "Compound", definition: "A substance made of two or more different elements chemically joined together in a fixed ratio." },
    { term: "Mixture", definition: "Two or more substances that are not chemically joined and can be separated by physical methods." },
    { term: "Filtrate", definition: "The liquid or solution that passes through the filter paper during filtration." },
    { term: "Residue", definition: "The solid left behind on the filter paper during filtration." },
    { term: "Distillation", definition: "A method that separates a liquid from a solution or a mixture of liquids by evaporating it and condensing the vapour." },
    { term: "Chromatography", definition: "A method that separates substances in a mixture because they dissolve in a solvent and move up paper at different rates." },
  ],
  concepts: [
    {
      id: "esc8-u2-atoms-elements-compounds",
      title: "Atoms, elements and compounds",
      skill: "Classify substances as elements, compounds or mixtures and read simple chemical formulae.",
      lesson: {
        sections: [
          {
            heading: "Atoms and elements",
            body: "All substances are made of **atoms**. An **element** contains only one type of atom, for example oxygen, iron or carbon. Each element has a chemical symbol of one or two letters, such as O, Fe and C. There are about 118 known elements, arranged in the periodic table.",
          },
          {
            heading: "Compounds and their formulae",
            body: "A **compound** forms when atoms of different elements join chemically, and it has properties different from the elements it is made of. A chemical **formula** shows which elements are present and how many atoms of each. In $\\text{H}_2\\text{O}$ there are 2 hydrogen atoms and 1 oxygen atom. In $\\text{CO}_2$ there is 1 carbon atom and 2 oxygen atoms. The small number applies only to the symbol before it. Compounds made of non-metals often have names ending in -ide (sodium chloride) or -ate (copper sulfate).",
          },
          {
            heading: "Compounds compared with mixtures",
            body: "In a compound the elements are chemically joined in a fixed ratio and cannot be separated by physical methods. In a mixture the substances are not chemically joined, can be present in any amount, and keep their own properties. Air is a mixture of gases, mainly nitrogen and oxygen. Sea water is a mixture of water and dissolved salts.",
          },
        ],
        keyFormulas: [
          { name: "Element", statement: "One type of atom only, for example $\\text{O}_2$, Fe, C" },
          { name: "Compound", statement: "Different elements chemically joined in a fixed ratio, for example $\\text{H}_2\\text{O}$, $\\text{CO}_2$, NaCl" },
          { name: "Counting atoms", statement: "The small number after a symbol gives the number of atoms of that element; no number means 1" },
        ],
        workedExample: {
          problem: "Methane has the formula $\\text{CH}_4$. Name the elements in methane and work out the total number of atoms in 3 molecules of methane.",
          solution: "Methane contains carbon (C) and hydrogen (H). One molecule has $1 + 4 = 5$ atoms. Three molecules have $3 \\times 5 = 15$ atoms.",
        },
      },
      questions: [
        {
          id: "esc8-u2-atoms-elements-compounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these substances is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen, $\\text{O}_2$" },
              { id: "b", text: "Carbon dioxide, $\\text{CO}_2$" },
              { id: "c", text: "Iron, Fe" },
              { id: "d", text: "Air" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "A substance containing two or more different elements chemically joined in a fixed ratio." },
            ],
            steps: [
              { reasoning: "$\\text{CO}_2$ contains two different elements, carbon and oxygen, chemically joined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide, $\\text{CO}_2$",
            commonErrors: ["Choosing oxygen because its formula has a subscript 2; $\\text{O}_2$ contains only one type of atom, so it is an element.", "Choosing air, which is a mixture of gases."],
            examinerNote: "B1 for (b) only.",
          },
        },
        {
          id: "esc8-u2-atoms-elements-compounds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sulfuric acid has the formula $\\text{H}_2\\text{SO}_4$. Calculate the total number of atoms in 2 formula units of sulfuric acid.",
          response: { type: "numeric", parts: [{ label: "Total atoms", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading a formula", statement: "The small number after a symbol gives the number of atoms of that element; no number means one atom." },
            ],
            steps: [
              { reasoning: "Count the atoms in one formula unit: 2 hydrogen, 1 sulfur, 4 oxygen.", working: "2 + 1 + 4 = 7", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the number of formula units.", working: "2 \\times 7 = 14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Forgetting that S has one atom, giving 6 per unit and 12 in total.", "Giving 7, the number in one formula unit."],
            examinerNote: "M1 for 7 atoms in one formula unit. A1 cao.",
          },
        },
        {
          id: "esc8-u2-atoms-elements-compounds-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Iron filings and sulfur powder are stirred together. A magnet picks up the iron filings. The mixture is then heated strongly and iron sulfide forms. A magnet no longer picks up the product. Explain why the product is a compound but the original stirred mixture is not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound and mixture", statement: "A compound has elements chemically joined in a fixed ratio; a mixture is not chemically joined and its parts keep their properties." },
            ],
            steps: [
              { reasoning: "In the stirred mixture the iron and sulfur are not chemically joined, so the iron keeps its magnetic property and can be separated with a magnet.", marks: 1, markCode: "B" },
              { reasoning: "On heating, the iron and sulfur atoms react and join chemically to form a new substance, iron sulfide.", marks: 1, markCode: "B" },
              { reasoning: "Iron sulfide has different properties from iron (it is not magnetic), and the elements are in a fixed ratio and cannot be separated by a magnet.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The mixture is not chemically joined, so the iron can be separated magnetically; the product has iron and sulfur chemically joined in a fixed ratio with new properties.",
            commonErrors: ["Saying that the iron has disappeared or been used up.", "Not referring to chemical joining or new properties."],
            examinerNote: "Allow 'chemical bonds' for 'chemically joined' (oe). Reject 'the atoms are mixed together'.",
          },
        },
        {
          id: "esc8-u2-atoms-elements-compounds-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A teacher shows a student four samples: sodium chloride (NaCl), oxygen ($\\text{O}_2$), sulfuric acid ($\\text{H}_2\\text{SO}_4$) and air.",
          parts: [
            { label: "a", prompt: "State which sample is a mixture.", marks: 1 },
            { label: "b", prompt: "Name the elements in sodium chloride.", marks: 2 },
            { label: "c", prompt: "Calculate the total number of atoms in 2 formula units of sulfuric acid.", marks: 2 },
            { label: "d", prompt: "Explain, in terms of atoms, why oxygen is an element but sulfuric acid is a compound.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixture", statement: "Substances not chemically joined, such as the gases in air." },
              { kind: "definition", name: "Element and compound", statement: "An element has one type of atom; a compound has different elements chemically joined in a fixed ratio." },
              { kind: "principle", name: "Reading a formula", statement: "The small number after a symbol gives the number of atoms of that element." },
            ],
            steps: [
              { part: "a", reasoning: "Air contains nitrogen, oxygen and other gases that are not chemically joined.", working: "\\text{air}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Na is the symbol for sodium.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Cl is the symbol for chlorine.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "One unit of $\\text{H}_2\\text{SO}_4$ has 2 + 1 + 4 atoms.", working: "2 + 1 + 4 = 7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by 2.", working: "2 \\times 7 = 14", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Oxygen contains only one type of atom (oxygen atoms), so it is an element.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Sulfuric acid contains atoms of three different elements: hydrogen, sulfur and oxygen.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "These atoms are chemically joined in a fixed ratio (2 : 1 : 4), which makes it a compound.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) air (b) sodium and chlorine (c) 14 atoms (d) oxygen has one type of atom; sulfuric acid has hydrogen, sulfur and oxygen atoms chemically joined in a fixed ratio",
            commonErrors: ["Naming chloride or 'salt' instead of chlorine.", "Counting 6 atoms per unit by missing the single sulfur atom.", "Saying oxygen is a compound because it has the subscript 2."],
            examinerNote: "(b) allow 'chloride' for chlorine. (c) allow ecf from an incorrect count in one unit. (d) allow 'molecule of $\\text{O}_2$ contains two atoms of the same element' (oe).",
          },
        },
      ],
    },
    {
      id: "esc8-u2-separating-mixtures",
      title: "Separating mixtures",
      skill: "Choose and describe filtration, evaporation, distillation and chromatography, and calculate $R_f$ values.",
      lesson: {
        sections: [
          {
            heading: "Filtration and evaporation",
            body: "**Filtration** separates an insoluble solid from a liquid. The mixture is poured through filter paper in a funnel. The solid stays on the paper as the **residue**, and the liquid that passes through is the **filtrate**. **Evaporation** separates a dissolved solid from its solution. The solution is heated until the solvent has evaporated and the solid remains. To obtain crystals, heat until about half the solvent is gone, then leave the solution to cool.",
          },
          {
            heading: "Distillation",
            body: "**Simple distillation** separates a solvent from a solution, for example pure water from salt water. The solution is heated until the water boils. The steam passes into a condenser, where it cools and condenses to pure liquid water, and the salt stays behind. **Fractional distillation** separates a mixture of liquids with different boiling points, such as ethanol (boiling point $78^\\circ\\text{C}$) and water ($100^\\circ\\text{C}$). The liquid with the lower boiling point evaporates first.",
          },
          {
            heading: "Chromatography",
            body: "In **paper chromatography** a spot of the mixture is placed on a pencil line near the bottom of the paper. The paper stands in a solvent, which must be below the line. The solvent rises up the paper, carrying the substances different distances. A pure substance gives one spot. The ratio $R_f$ identifies a substance: $R_f = \\frac{\\text{distance moved by the substance}}{\\text{distance moved by the solvent}}$. $R_f$ has no units and is always between 0 and 1.",
          },
        ],
        keyFormulas: [
          { name: "Filtration", statement: "Insoluble solid from a liquid" },
          { name: "Evaporation", statement: "Dissolved solid from a solution" },
          { name: "Distillation", statement: "Solvent from a solution, or liquids with different boiling points" },
          { name: "$R_f$ value", statement: "$R_f = \\frac{\\text{distance moved by the substance}}{\\text{distance moved by the solvent}}$" },
        ],
        workedExample: {
          problem: "In a chromatography experiment the solvent moves 8.0 cm up the paper. A dye spot moves 2.0 cm. Calculate the $R_f$ value of the dye.",
          solution: "$R_f = \\frac{2.0}{8.0} = 0.25$. There are no units because it is a ratio of two distances.",
        },
      },
      questions: [
        {
          id: "esc8-u2-separating-mixtures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method would separate sand from a mixture of sand and water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Chromatography" },
              { id: "c", text: "Distillation" },
              { id: "d", text: "Filtration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filtration", statement: "Filtration separates an insoluble solid from a liquid because the solid particles are too large to pass through the filter paper." },
            ],
            steps: [
              { reasoning: "Sand is insoluble in water, so it stays on the filter paper.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Filtration",
            commonErrors: ["Choosing evaporation or distillation, which are used for dissolved substances.", "Choosing chromatography, which separates coloured dissolved substances."],
            examinerNote: "B1 for (a) only.",
          },
        },
        {
          id: "esc8-u2-separating-mixtures-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a chromatography experiment the solvent travels 12.0 cm up the paper. A yellow dye travels 4.8 cm. Calculate the $R_f$ value of the yellow dye. Give your answer to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "$R_f$", answer: 0.4, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f = \\frac{\\text{distance moved by the substance}}{\\text{distance moved by the solvent}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance moved by the dye by the distance moved by the solvent.", working: "R_f = \\frac{4.8}{12.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "R_f = 0.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.40$",
            commonErrors: ["Inverting the fraction to get 2.5; an $R_f$ cannot be more than 1.", "Adding a unit such as cm."],
            examinerNote: "M1 for 4.8 / 12.0. A1 for 0.40 or 0.4. Ignore units.",
          },
        },
        {
          id: "esc8-u2-separating-mixtures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you would obtain pure water from salt water, using simple distillation. Include the role of the condenser.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simple distillation", statement: "A solvent is evaporated from a solution, then condensed to a pure liquid, leaving the dissolved solid behind." },
            ],
            steps: [
              { reasoning: "Heat the salt water in a flask until it boils.", marks: 1, markCode: "B" },
              { reasoning: "Water evaporates to form steam (water vapour) and the salt stays in the flask because it does not evaporate.", marks: 1, markCode: "B" },
              { reasoning: "The steam passes into a condenser, which is kept cool, for example with a flow of cold water around it.", marks: 1, markCode: "B" },
              { reasoning: "The steam condenses back into liquid water, which is collected in a beaker as the distillate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Boil the salt water; steam leaves, salt stays behind; steam cools and condenses in the condenser; pure water is collected.",
            commonErrors: ["Describing only evaporation, which loses the pure water.", "Saying the salt evaporates too.", "Forgetting to say that the condenser is cooled."],
            examinerNote: "Allow 'water vapour' for steam. Allow a labelled diagram showing flask, condenser and collection beaker (oe).",
          },
        },
        {
          id: "esc8-u2-separating-mixtures-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student has a sample of ink and uses paper chromatography to find out which dyes it contains. She draws a pencil line 1.5 cm from the bottom of the paper and puts a spot of the ink and spots of three known dyes P, Q and R on the line. The solvent front reaches 10.0 cm above the pencil line. The ink separates into two spots, 3.0 cm and 6.5 cm above the pencil line. Dye P travels 3.0 cm, dye Q travels 5.0 cm and dye R travels 6.5 cm above the pencil line.",
          parts: [
            { label: "a", prompt: "Explain why the line is drawn in pencil and not in ink.", marks: 1 },
            { label: "b", prompt: "State why the solvent level in the beaker must be below the pencil line at the start.", marks: 1 },
            { label: "c", prompt: "Calculate the $R_f$ value of the lower spot of the ink. Give your answer to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "Calculate the $R_f$ value of the upper spot of the ink. Give your answer to 2 decimal places.", marks: 2 },
            { label: "e", prompt: "Identify which of the dyes P, Q and R are in the ink and explain your answer.", marks: 2 },
            { label: "f", prompt: "Suggest one way to check that the ink contains no other dyes that are not visible.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f = \\frac{\\text{distance moved by the substance}}{\\text{distance moved by the solvent}}$" },
              { kind: "principle", name: "Identifying substances", statement: "Spots that travel the same distance in the same solvent are the same substance." },
            ],
            steps: [
              { part: "a", reasoning: "Pencil is insoluble in the solvent, so the line does not run or form extra spots (ink would dissolve and move).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "If the solvent were above the line the sample would dissolve into the beaker instead of travelling up the paper.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Measure from the pencil line: distance for the lower spot divided by distance of the solvent.", working: "R_f = \\frac{3.0}{10.0}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "R_f = 0.30", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the distance of the upper spot by the solvent distance.", working: "R_f = \\frac{6.5}{10.0}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "R_f = 0.65", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The ink contains P and R, because these dyes travelled the same distances (3.0 cm and 6.5 cm) as the two ink spots.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Dye Q travelled 5.0 cm, which matches neither ink spot, so Q is not in the ink.", marks: 1, markCode: "R" },
              { part: "f", reasoning: "Repeat using a different solvent, since other dyes could have the same $R_f$ in the first solvent.", marks: 1, markCode: "B" },
              { part: "f", reasoning: "Check that the ink still separates into only two spots (or view under UV light / spray with a locating agent).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) pencil does not dissolve (b) so the sample does not dissolve in the solvent (c) $0.30$ (d) $0.65$ (e) P and R (f) repeat with a different solvent or view under UV light",
            commonErrors: ["Measuring from the bottom of the paper instead of the pencil line.", "Inverting the $R_f$ fraction.", "Concluding that Q is present because it lies between the ink spots."],
            examinerNote: "(a) reject 'pencil is easier to see'. (c), (d) allow 0.3 and 0.65. (e) both P and R needed for the first mark. (f) allow any sensible check (oe).",
          },
        },
      ],
    },
  ],
};
