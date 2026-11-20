import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "s7-u2-lesson-2-1",
  code: "2-1",
  title: "Structure of Matter",
  goal: "I CAN use models of atoms and molecules to classify matter as elements, compounds or mixtures, and I CAN calculate density to identify substances by their properties.",
  standards: ["MS-PS1-1", "MS-PS1-2", "SEP: Developing and Using Models", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Atom", definition: "The smallest unit of an element that still has the properties of that element." },
    { term: "Element", definition: "A pure substance made of only one kind of atom, such as oxygen or gold." },
    { term: "Molecule", definition: "Two or more atoms joined together by chemical bonds." },
    { term: "Compound", definition: "A pure substance made of two or more different elements chemically bonded in a fixed ratio." },
    { term: "Mixture", definition: "Two or more substances that are physically combined, not chemically bonded, and can be in any proportion." },
    { term: "Density", definition: "The mass of a substance per unit of volume, found by dividing mass by volume." },
    { term: "Characteristic property", definition: "A property, such as density, that stays the same for a pure substance no matter how much of it you have." },
  ],
  concepts: [
    {
      id: "s7-u2-atoms-molecules-mixtures",
      title: "Atoms, elements, molecules, compounds and mixtures",
      skill: "Use particle models to classify matter as an element, a compound or a mixture.",
      lesson: {
        sections: [
          {
            heading: "Atoms and elements",
            body: "All matter is made of tiny particles called **atoms**. An **element** is a pure substance made of only one kind of atom. Gold, aluminum, oxygen and carbon are elements. There are about 118 known elements, and each has its own symbol, such as $\\text{Au}$ for gold and $\\text{O}$ for oxygen.\n\nAtoms can join together. Two or more atoms bonded together form a **molecule**. Oxygen gas is made of molecules with two oxygen atoms, written $\\text{O}_2$. It is still an element because both atoms are the same kind.",
          },
          {
            heading: "Compounds",
            body: "A **compound** is made of atoms of two or more different elements that are chemically bonded in a fixed ratio. Water, $\\text{H}_2\\text{O}$, always has 2 hydrogen atoms for every 1 oxygen atom. Carbon dioxide, $\\text{CO}_2$, always has 1 carbon atom for every 2 oxygen atoms.\n\nA compound has properties that are different from the elements it is made from. Hydrogen is a flammable gas and oxygen helps things burn, but water is a liquid that can put out a fire. A compound can only be broken down by a chemical change.",
          },
          {
            heading: "Mixtures",
            body: "A **mixture** is two or more substances that are only physically combined. Air is a mixture of nitrogen, oxygen and other gases. The parts keep their own properties, can be present in any amounts, and can be separated by physical methods such as filtering, evaporating or using a magnet.\n\nTo classify a particle model, ask two questions. Are all the particles the same? If yes, it is a pure substance. If the pure substance has only one kind of atom it is an element; if it has more than one kind it is a compound. If the model shows different kinds of particles that are not bonded in a set pattern, it is a mixture.",
          },
        ],
        keyFormulas: [
          { name: "Element", statement: "One kind of atom only (e.g. $\\text{Fe}$, $\\text{O}_2$)" },
          { name: "Compound", statement: "Different atoms bonded in a fixed ratio (e.g. $\\text{H}_2\\text{O}$, $\\text{CO}_2$)" },
          { name: "Mixture", statement: "Substances physically combined, any ratio, separable by physical methods" },
        ],
        workedExample: {
          problem: "A model of sample Q shows many identical particles. Each particle is made of 1 sodium atom joined to 1 chlorine atom. A model of sample R shows sodium atoms and chlorine atoms mixed together but not joined. Classify Q and R.",
          solution: "In Q all the particles are identical, so it is a pure substance. Each particle contains two different kinds of atoms bonded together in a 1:1 ratio, so Q is a **compound** (sodium chloride, $\\text{NaCl}$). In R the atoms are not bonded and are simply mixed, so R is a **mixture**.",
        },
      },
      questions: [
        {
          id: "s7-u2-atoms-molecules-mixtures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these substances is a **compound**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen gas, $\\text{O}_2$" },
              { id: "b", text: "Water, $\\text{H}_2\\text{O}$" },
              { id: "c", text: "Air" },
              { id: "d", text: "Gold, $\\text{Au}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "A compound is a pure substance made of different elements chemically bonded in a fixed ratio." },
            ],
            steps: [
              { reasoning: "Water has hydrogen and oxygen atoms bonded in a fixed 2:1 ratio, so it is a compound.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water, $\\text{H}_2\\text{O}$",
            commonErrors: ["Choosing oxygen gas because it is made of molecules; both atoms in $\\text{O}_2$ are the same, so it is an element.", "Choosing air, which is a mixture of several gases."],
            examinerNote: "B1 for water.",
          },
        },
        {
          id: "s7-u2-atoms-molecules-mixtures-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify each substance as an **element**, a **compound** or a **mixture**.\n\n- Aluminum foil\n- Carbon dioxide, $\\text{CO}_2$\n- Air",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classifying matter", statement: "Elements have one kind of atom, compounds have different atoms bonded in a fixed ratio, mixtures are physically combined substances." },
            ],
            steps: [
              { reasoning: "Aluminum is made of only aluminum atoms, so it is an element.", marks: 1, markCode: "B" },
              { reasoning: "Carbon dioxide has carbon and oxygen atoms bonded in a 1:2 ratio, so it is a compound.", marks: 1, markCode: "B" },
              { reasoning: "Air is made of several gases (nitrogen, oxygen and others) that are not chemically bonded, so it is a mixture.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Aluminum foil: element. Carbon dioxide: compound. Air: mixture.",
            commonErrors: ["Calling carbon dioxide a mixture because it contains two kinds of atoms; the atoms are bonded in a fixed ratio.", "Calling air a compound because it is mostly one thing."],
            examinerNote: "B1 for each correct classification.",
          },
        },
        {
          id: "s7-u2-atoms-molecules-mixtures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: \"Water is a mixture of hydrogen and oxygen because it contains both elements.\"\n\nUse evidence to evaluate the student's claim.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "Atoms of different elements are chemically bonded in a fixed ratio, forming a substance with new properties." },
              { kind: "property", name: "Mixture", statement: "The parts of a mixture keep their own properties, can be in any ratio and can be separated physically." },
            ],
            steps: [
              { reasoning: "Claim: the student is incorrect; water is a compound, not a mixture.", marks: 1, markCode: "R" },
              { reasoning: "Evidence: water always contains hydrogen and oxygen in a fixed 2:1 atom ratio, but the parts of a mixture can be in any amounts.", marks: 1, markCode: "B" },
              { reasoning: "Evidence: water has different properties from hydrogen and oxygen. For example, hydrogen is a flammable gas and oxygen supports burning, but water is a liquid that can put out fires.", marks: 1, markCode: "B" },
              { reasoning: "Reasoning: the atoms are chemically bonded, so water cannot be separated by physical methods such as filtering; a chemical change is needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is incorrect. Water is a compound: fixed 2:1 ratio of atoms, new properties, and its atoms are chemically bonded so it cannot be separated physically.",
            commonErrors: ["Agreeing with the claim because two elements are present.", "Saying a compound is just a mixture that is hard to separate."],
            examinerNote: "R1 for stating water is a compound. B1 for fixed ratio. B1 for a valid property difference. R1 for chemical bonding or needing a chemical change to separate. Allow 'oe' for any correct property comparison.",
          },
        },
        {
          id: "s7-u2-atoms-molecules-mixtures-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A chemist studies three samples using particle models.\n\n- **Sample X:** every particle is identical and is a single atom of one kind.\n- **Sample Y:** every particle is identical. Each particle is made of 1 carbon atom bonded to 2 oxygen atoms.\n- **Sample Z:** contains $\\text{O}_2$ molecules and $\\text{N}_2$ molecules mixed together in no set ratio.",
          parts: [
            { label: "a", prompt: "Classify X, Y and Z as an element, a compound or a mixture.", marks: 3 },
            { label: "b", prompt: "State the number of atoms in one particle of Y.", marks: 1 },
            { label: "c", prompt: "Explain why Z is not a compound.", marks: 2 },
            { label: "d", prompt: "Z can be separated by physical methods. Explain why separating Y into carbon and oxygen is different.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Classifying matter", statement: "Elements have one kind of atom, compounds have different atoms bonded in a fixed ratio, mixtures are physically combined substances." },
              { kind: "principle", name: "Chemical versus physical separation", statement: "Mixtures can be separated by physical methods; compounds can only be broken down by chemical changes." },
            ],
            steps: [
              { part: "a", reasoning: "X has only one kind of atom: element.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Y has two kinds of atoms bonded in a fixed ratio: compound.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Z has two different substances physically combined: mixture.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the atoms in one particle.", working: "1+2=3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The $\\text{O}_2$ and $\\text{N}_2$ molecules are not chemically bonded to each other.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "They are present in no set ratio, and each keeps its own properties.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In Y the carbon and oxygen atoms are chemically bonded.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Breaking those bonds requires a chemical change (a chemical reaction), not just a physical method.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The separated elements have different properties from the compound, showing that new substances form.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) X element, Y compound, Z mixture (b) 3 atoms (c) Not chemically bonded and no fixed ratio (d) Y's atoms are chemically bonded, so a chemical change is needed, and the products have different properties.",
            commonErrors: ["Calling X a compound because it is a single particle.", "In (b) answering 2 (the number of oxygen atoms) or 12.", "In (d) suggesting filtering or evaporating can separate a compound."],
            examinerNote: "(a) Accept 'pure element' oe. (c) Allow 'no chemical reaction between them' oe. (d) Allow 'chemical reaction' or 'chemical change' for the second mark.",
          },
        },
      ],
    },
    {
      id: "s7-u2-density",
      title: "Density and identifying substances",
      skill: "Calculate density from mass and volume and use it to identify substances.",
      lesson: {
        sections: [
          {
            heading: "What is density?",
            body: "**Density** tells you how much mass is packed into a given volume. A block of lead and a block of wood can be the same size, but the lead block has far more mass, so lead has a higher density.\n\n$$\\rho=\\frac{m}{V}$$\n\nHere $\\rho$ (the Greek letter rho) is density, $m$ is mass and $V$ is volume. Mass is measured in grams (g) or kilograms (kg). Volume is measured in cubic centimeters ($\\text{cm}^3$) or milliliters (mL). Density is then in $\\text{g/cm}^3$. Note that $1\\text{ mL}=1\\text{ cm}^3$.",
          },
          {
            heading: "Finding mass and volume",
            body: "Mass is measured with a balance. The volume of a regular solid is found with a formula: for a rectangular block, $V=\\text{length}\\times\\text{width}\\times\\text{height}$. The volume of an irregular solid, like a stone, is found by **displacement**: place it in a measuring cylinder of water and subtract the starting water level from the new level.",
          },
          {
            heading: "Density as a characteristic property",
            body: "Density is a **characteristic property**: it is the same for any sample of a pure substance, whatever its size. Cutting an iron block in half halves its mass and its volume, but the density stays $7.9\\text{ g/cm}^3$. This lets scientists identify unknown substances by comparing a calculated density to a table of known values.\n\nDensity also predicts floating and sinking. Water has a density of $1.0\\text{ g/cm}^3$. An object with a lower density than the liquid floats; one with a higher density sinks.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho=\\dfrac{m}{V}$" },
          { name: "Volume of a rectangular block", statement: "$V=l\\times w\\times h$" },
          { name: "Volume units", statement: "$1\\text{ mL}=1\\text{ cm}^3$" },
        ],
        workedExample: {
          problem: "A metal cube has sides of 3.0 cm and a mass of 243 g. Calculate its density and decide whether it could be aluminum (density $2.7\\text{ g/cm}^3$) or iron (density $7.9\\text{ g/cm}^3$).",
          solution: "Volume: $V=3.0\\times3.0\\times3.0=27\\text{ cm}^3$. Density: $\\rho=\\dfrac{m}{V}=\\dfrac{243}{27}=9.0\\text{ g/cm}^3$. This matches neither aluminum nor iron, so the cube is a different metal. (Copper has a density of about $9.0\\text{ g/cm}^3$.)",
        },
      },
      questions: [
        {
          id: "s7-u2-density-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation correctly shows how to calculate density $\\rho$ from mass $m$ and volume $V$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\rho=m\\times V$" },
              { id: "b", text: "$\\rho=\\dfrac{V}{m}$" },
              { id: "c", text: "$\\rho=\\dfrac{m}{V}$" },
              { id: "d", text: "$\\rho=m-V$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho=\\dfrac{m}{V}$" },
            ],
            steps: [
              { reasoning: "Density is mass per unit volume, so divide mass by volume.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\rho=\\dfrac{m}{V}$",
            commonErrors: ["Inverting the equation, which gives volume per unit mass.", "Multiplying mass and volume."],
            examinerNote: "B1 for mass divided by volume.",
          },
        },
        {
          id: "s7-u2-density-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A piece of metal has a mass of 135 g and a volume of $50\\text{ cm}^3$.\n\nCalculate the density of the metal in $\\text{g/cm}^3$.",
          response: { type: "numeric", parts: [{ label: "Density", answer: 2.7, unit: "g/cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho=\\dfrac{m}{V}$" },
            ],
            steps: [
              { reasoning: "Substitute the mass and volume into the density equation.", working: "\\rho=\\frac{m}{V}=\\frac{135}{50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and include the unit.", working: "\\rho=2.7\\text{ g/cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.7\\text{ g/cm}^3$",
            commonErrors: ["Dividing volume by mass, giving 0.37.", "Omitting the unit."],
            examinerNote: "M1 for 135 / 50. A1 for 2.7 with a correct unit. Allow 2.7 without unit if the unit is given elsewhere.",
          },
        },
        {
          id: "s7-u2-density-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular block of metal is 5.0 cm long, 4.0 cm wide and 2.0 cm high. Its mass is 315 g.\n\nCalculate the density of the metal in $\\text{g/cm}^3$. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Density", answer: 7.9, tolerance: 0.05, unit: "g/cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a block", statement: "$V=l\\times w\\times h$" },
              { kind: "formula", name: "Density", statement: "$\\rho=\\dfrac{m}{V}$" },
            ],
            steps: [
              { reasoning: "Multiply length, width and height to find the volume.", working: "V=5.0\\times4.0\\times2.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the volume.", working: "V=40\\text{ cm}^3", marks: 1, markCode: "A" },
              { reasoning: "Substitute into the density equation.", working: "\\rho=\\frac{315}{40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to 2 significant figures.", working: "\\rho=7.875\\approx7.9\\text{ g/cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.9\\text{ g/cm}^3$ (consistent with iron)",
            commonErrors: ["Adding the three lengths (11 cm) instead of multiplying.", "Using the area of one face instead of the volume.", "Dividing volume by mass."],
            examinerNote: "M1 for 5.0 x 4.0 x 2.0. A1 for 40. M1 for 315 / 40 (ecf). A1 for 7.9 (accept 7.875). Full marks for correct answer without working.",
          },
        },
        {
          id: "s7-u2-density-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student finds the density of an irregular stone. The stone has a mass of 78 g. The student pours 50 mL of water into a measuring cylinder, lowers the stone in so it is completely covered, and reads the new water level as 80 mL.\n\nThe student compares the result with this table of densities.\n\n| Material | Density ($\\text{g/cm}^3$) |\n| --- | --- |\n| Wood (pine) | 0.6 |\n| Water | 1.0 |\n| Quartz | 2.6 |\n| Basalt | 3.0 |\n| Iron | 7.9 |",
          parts: [
            { label: "a", prompt: "Calculate the volume of the stone in $\\text{cm}^3$.", marks: 2 },
            { label: "b", prompt: "Calculate the density of the stone in $\\text{g/cm}^3$.", marks: 2 },
            { label: "c", prompt: "Use the table to identify the material the stone is most likely made of. Explain your choice.", marks: 2 },
            { label: "d", prompt: "Predict whether a piece of pine wood would float or sink in water. Use evidence from the table to support your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "The volume of an irregular solid equals the rise in water level when it is fully submerged. $1\\text{ mL}=1\\text{ cm}^3$." },
              { kind: "formula", name: "Density", statement: "$\\rho=\\dfrac{m}{V}$" },
              { kind: "principle", name: "Floating and sinking", statement: "An object floats in a liquid if its density is lower than the liquid's density." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the starting water level from the final level.", working: "80-50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate. Since $1\\text{ mL}=1\\text{ cm}^3$, the volume is 30 $\\text{cm}^3$.", working: "V=30\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the mass by the volume from (a).", working: "\\rho=\\frac{78}{30}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with units.", working: "\\rho=2.6\\text{ g/cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The stone is most likely quartz.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Its calculated density of $2.6\\text{ g/cm}^3$ matches the density of quartz, and density is a characteristic property of a substance.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Pine wood would float.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Its density, $0.6\\text{ g/cm}^3$, is less than that of water, $1.0\\text{ g/cm}^3$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $30\\text{ cm}^3$ (b) $2.6\\text{ g/cm}^3$ (c) Quartz, since its density matches (d) Floats, because $0.6<1.0\\text{ g/cm}^3$",
            commonErrors: ["In (a) using 80 mL as the volume of the stone, forgetting the water already in the cylinder.", "In (c) choosing basalt because 3.0 is the closest value above 2.6.", "In (d) saying wood floats because it is light, without comparing densities."],
            examinerNote: "(b) Allow ecf from (a). (c) Mark the explanation only if the identification is consistent with the calculated density (ecf). (d) Need both the prediction and the comparison of densities for full marks.",
          },
        },
      ],
    },
  ],
};
