import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "chemsl-u3-lesson-3-3",
  code: "3-3",
  title: "Structure–Property Relationships, Energetics and Kinetics",
  goal: "I CAN relate bonding and structure to physical properties, classify reactions as exothermic or endothermic, and explain how conditions affect reaction rate and equilibrium.",
  standards: ["Topic 4.1", "Topic 4.3", "Topic 5.1", "Topic 5.2", "Topic 6.1", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings, so $\\Delta H<0$ and the products have lower energy than the reactants." },
    { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings, so $\\Delta H>0$ and the products have higher energy than the reactants." },
    { term: "Activation energy", definition: "$E_a$: the minimum energy particles must have in a collision for a reaction to occur." },
    { term: "Collision theory", definition: "The explanation that reactions occur when particles collide with sufficient energy and correct orientation." },
    { term: "Rate of reaction", definition: "The speed at which reactants are consumed or products formed, usually measured as change in amount/concentration per unit time." },
    { term: "Dynamic equilibrium", definition: "The state in a reversible reaction where the forward and reverse rates are equal, so concentrations remain constant in a closed system." },
  ],
  concepts: [
    {
      id: "chemsl-u3-structure-property",
      title: "Structure–property relationships",
      skill: "Use bonding and structure to explain and predict the physical properties of ionic, covalent, metallic and giant covalent substances.",
      lesson: {
        sections: [
          {
            heading: "From structure to property",
            body: "A substance's properties follow directly from its bonding and structure. Ionic lattices give high melting points, brittleness and conductivity when molten or dissolved. Metallic lattices give conductivity, malleability and ductility. Giant covalent networks give extreme hardness and very high melting points. Simple covalent molecules give low melting points and no conductivity because only weak intermolecular forces act between molecules.",
          },
          {
            heading: "Solubility and miscibility",
            body: "Ionic compounds often dissolve in polar solvents such as water because the solvent molecules surround and stabilise the ions (hydration). Covalent molecular substances dissolve in non-polar solvents such as oil because 'like dissolves like' — the intermolecular forces in the solute and solvent are similar. This explains why salt dissolves in water but not in oil, while grease dissolves in oil but not in water.",
          },
          {
            heading: "Using structure to identify substances",
            body: "A set of observations can identify the bonding type: high melting point + conducts when molten $\\Rightarrow$ ionic; conducts as a solid $\\Rightarrow$ metal (or graphite); very high melting point + does not conduct $\\Rightarrow$ giant covalent; low melting point + does not conduct $\\Rightarrow$ simple covalent molecule. Exam questions often give such a property set and ask you to deduce the structure.",
          },
        ],
        keyFormulas: [
          { name: "Property table", statement: "$\\text{ionic}: \\text{high mp, brittle, conducts molten};\\ \\text{metal}: \\text{conducts solid, malleable};\\ \\text{giant covalent}: \\text{very high mp};\\ \\text{molecular}: \\text{low mp, no conduction}$" },
          { name: "Solubility rule", statement: "$\\text{'like dissolves like'}$" },
        ],
        workedExample: {
          problem: "A white solid melts at $800\\ \\mathrm{^\\circ C}$, does not conduct as a solid but conducts when molten, and dissolves in water. Identify the bonding type and justify each observation.",
          solution: "Ionic bonding. High mp: strong ionic attractions in the lattice. No conduction as solid: ions are fixed. Conducts when molten: ions become mobile. Dissolves in water: polar water molecules hydrate and separate the ions.",
        },
      },
      questions: [
        {
          id: "chemsl-u3-structure-property-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Why do ionic compounds dissolve in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules are polar and surround and stabilise the ions (hydration)" },
              { id: "b", text: "Water is a non-polar solvent" },
              { id: "c", text: "The ions evaporate" },
              { id: "d", text: "Ionic bonds are weak" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hydration", statement: "Polar solvent molecules stabilise separated ions." },
            ],
            steps: [
              { reasoning: "Water is polar; its molecules orient around cations and anions, weakening the ionic attractions.", working: "\\text{polar water hydrates ions}", marks: 1, markCode: "M" },
              { reasoning: "The ions are then free to move in solution.", working: "\\text{ions separated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Polar water molecules surround and stabilise the ions",
            commonErrors: ["Saying ionic bonds 'break' — the lattice is overcome by solvation, not covalent bond breaking."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why are metals malleable and ductile?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metals contain free molecules" },
              { id: "b", text: "The ionic bonds break and reform" },
              { id: "c", text: "Layers of positive ions can slide over each other while the delocalised electron sea maintains the bonding" },
              { id: "d", text: "The atoms are not bonded at all" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic bonding", statement: "The electron sea is not tied to specific ion pairs, so layers can slide without fracturing." },
            ],
            steps: [
              { reasoning: "In an ionic crystal, sliding brings like charges together and the crystal shatters; in a metal the electron sea adjusts.", working: "\\text{electron sea adjusts}", marks: 1, markCode: "M" },
              { reasoning: "The metal–electron attraction persists during sliding, so the material deforms rather than breaks.", working: "\\text{bonding maintained}", marks: 1, markCode: "R" },
              { reasoning: "Select the correct statement.", working: "\\text{layers slide}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Ion layers slide while the delocalised electron sea maintains bonding",
            commonErrors: ["Applying the ionic 'brittle' explanation to metals."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Three substances are tested: substance P is a soft grey solid that conducts electricity; substance Q is a colourless gas that does not conduct; substance R is a white crystalline solid that conducts only when molten. Identify the likely bonding type of each and justify your identifications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property signatures", statement: "Conducts as solid → metal/graphite; conducts only molten → ionic; low mp gas, no conduction → molecular covalent." },
            ],
            steps: [
              { reasoning: "P conducts as a solid, so it must have mobile charge carriers in the solid state — a metal (delocalised electrons) or graphite.", working: "\\text{P: metallic}", marks: 1, markCode: "M" },
              { reasoning: "Q is a gas with no conduction: discrete covalent molecules with only weak IMFs.", working: "\\text{Q: molecular covalent}", marks: 1, markCode: "A" },
              { reasoning: "R conducts only when molten: ions become mobile on melting — ionic lattice.", working: "\\text{R: ionic}", marks: 1, markCode: "R" },
              { reasoning: "State all three identifications with the property used for each.", working: "\\text{P metal, Q molecular, R ionic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P: metallic (conducts solid); Q: simple covalent molecular (gas, no conduction); R: ionic (conducts only molten)",
            commonErrors: ["Identifying P as ionic because it is a solid conductor (ionic solids do not conduct)."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Three substances are compared: copper (a metal), carbon dioxide (a gas) and sodium chloride (a white crystalline solid).",
          parts: [
            { label: "a", prompt: "State the bonding and structure of each substance.", marks: 2 },
            { label: "b", prompt: "Predict the order of melting points from lowest to highest and justify your answer.", marks: 2 },
            { label: "c", prompt: "Predict which substances conduct electricity in the solid state and explain.", marks: 2 },
            { label: "d", prompt: "Explain why sodium chloride dissolves in water but not in oil, while carbon dioxide dissolves in oil but not in water.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bonding types", statement: "Metallic, molecular covalent and ionic lattice respectively." },
              { kind: "principle", name: "Like dissolves like", statement: "Polar solutes dissolve in polar solvents; non-polar in non-polar." },
            ],
            steps: [
              { part: "a", reasoning: "Copper: metallic lattice with delocalised electrons. CO2: discrete molecules with double bonds. NaCl: giant ionic lattice.", working: "\\text{metal / molecular / ionic}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correctly identified.", working: "\\mathrm{Cu},\\mathrm{CO_2},\\mathrm{NaCl}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO2 lowest (only weak IMFs between molecules), copper next (metallic bonds), NaCl highest (ionic lattice).", working: "\\mathrm{CO_2}<\\mathrm{Cu}<\\mathrm{NaCl}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Justification: melting requires overcoming the strongest bonding throughout the structure.", working: "\\text{bond strength}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only copper conducts as a solid, via delocalised electrons; NaCl ions are fixed and CO2 is molecular.", working: "\\text{only Cu}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "NaCl conducts when molten/aqueous; CO2 never conducts.", working: "\\text{NaCl molten only}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "NaCl is ionic: polar water molecules hydrate the ions, but non-polar oil cannot stabilise them. CO2 is non-polar molecular: it dissolves in non-polar oil via similar dispersion forces, but polar water cannot interact favourably.", working: "\\text{like dissolves like}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "State both solubility behaviours correctly.", working: "\\text{NaCl-water, CO2-oil}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cu metallic, CO2 molecular covalent, NaCl ionic (b) CO2 < Cu < NaCl melting points (c) only Cu conducts solid (d) 'like dissolves like' — ionic/polar in water, non-polar in oil",
            commonErrors: ["In (b) putting NaCl below Cu because 'ionic is weaker than metallic'."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The phrase 'like dissolves like' means that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "gases never dissolve in liquids" },
              { id: "b", text: "all solutes dissolve in water" },
              { id: "c", text: "ionic compounds dissolve in oil" },
              { id: "d", text: "polar solutes dissolve in polar solvents and non-polar solutes dissolve in non-polar solvents" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like dissolves like", statement: "Similar intermolecular forces between solute and solvent favour dissolving." },
            ],
            steps: [
              { reasoning: "Polar water molecules interact favourably with ions/polar solutes; non-polar solvents interact favourably with non-polar solutes.", working: "\\text{similar IMF}", marks: 1, markCode: "M" },
              { reasoning: "This explains salt in water but grease in oil.", working: "\\text{salt-H}_2\\text{O, grease-oil}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Polar solutes in polar solvents; non-polar in non-polar",
            commonErrors: ["Thinking 'like' refers to size rather than polarity/type of intermolecular forces."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A white solid melts at $801\\ \\mathrm{^\\circ C}$, conducts electricity when molten but not as a solid, and is brittle. Its bonding is most likely...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "covalent molecular" },
              { id: "b", text: "metallic" },
              { id: "c", text: "ionic" },
              { id: "d", text: "giant covalent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property signatures", statement: "High mp + conducts only when molten + brittle $\\Rightarrow$ ionic lattice." },
            ],
            steps: [
              { reasoning: "Conducting only when molten means ions become mobile on melting — the signature of an ionic compound.", working: "\\text{molten conductor} \\Rightarrow \\text{ionic}", marks: 1, markCode: "M" },
              { reasoning: "Metals would conduct as solids; covalent molecular solids have low melting points; giant covalent do not conduct when molten.", working: "\\text{eliminate others}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Ionic",
            commonErrors: ["Choosing (b) metallic because it conducts — but metals conduct as solids, not only when molten."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which substance conducts electricity in the solid state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{CO_2}$" },
              { id: "b", text: "$\\mathrm{NaCl}$" },
              { id: "c", text: "Copper" },
              { id: "d", text: "Diamond" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conduction signatures", statement: "Solid-state conduction requires mobile charge carriers: delocalised electrons in metals/graphite." },
            ],
            steps: [
              { reasoning: "Copper is a metal with a sea of delocalised electrons that carry charge through the solid.", working: "\\mathrm{Cu}: \\text{delocalised }e^-", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{NaCl}$ ions are fixed, diamond has localised electrons, and $\\mathrm{CO_2}$ is molecular — none conducts as a solid.", working: "\\text{others do not conduct solid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Copper",
            commonErrors: ["Choosing $\\mathrm{NaCl}$ because it 'contains ions' — ions must be mobile to conduct."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A substance has a very high melting point and does not conduct electricity even when molten. It is most likely...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{SiO_2}$" },
              { id: "b", text: "$\\mathrm{H_2O}$" },
              { id: "c", text: "Copper" },
              { id: "d", text: "$\\mathrm{NaCl}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property signatures", statement: "Very high mp + no conduction even molten $\\Rightarrow$ giant covalent network." },
            ],
            steps: [
              { reasoning: "A giant covalent network requires breaking strong covalent bonds throughout, giving a very high melting point.", working: "\\text{giant covalent: very high mp}", marks: 1, markCode: "M" },
              { reasoning: "With no ions or delocalised electrons, it cannot conduct even when molten — unlike $\\mathrm{NaCl}$ or copper.", working: "\\text{no charge carriers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{SiO_2}$",
            commonErrors: ["Choosing $\\mathrm{NaCl}$: it conducts when molten because ions become mobile."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Grease dissolves in oil but not in water because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "oil conducts electricity" },
              { id: "b", text: "water is a non-polar solvent" },
              { id: "c", text: "oil and grease are both non-polar with similar intermolecular forces" },
              { id: "d", text: "grease is an ionic compound" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like dissolves like", statement: "Non-polar solutes dissolve in non-polar solvents with similar dispersion forces." },
            ],
            steps: [
              { reasoning: "Grease and oil are both non-polar hydrocarbons-type substances with similar London dispersion forces.", working: "\\text{non-polar in non-polar}", marks: 1, markCode: "M" },
              { reasoning: "Water is polar, so it cannot stabilise non-polar grease molecules effectively.", working: "\\text{water polar}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Oil and grease are both non-polar with similar intermolecular forces",
            commonErrors: ["Saying grease is ionic — grease is a covalent molecular substance."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A giant covalent solid melts at $1500\\ \\mathrm{^\\circ C}$. Give its melting point in kelvin.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) melting point in $\\mathrm{K}$", answer: 1773 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature conversion", statement: "$T(\\mathrm{K})=t(\\mathrm{^\\circ C})+273$" },
            ],
            steps: [
              { reasoning: "Add 273: $1500+273=1773\\ \\mathrm{K}$.", working: "1500+273=1773", marks: 1, markCode: "M" },
              { reasoning: "State the temperature in kelvin.", working: "1773\\ \\mathrm{K}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1773\\ \\mathrm{K}$",
            commonErrors: ["Forgetting the +273 conversion."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The sodium ion, $\\mathrm{Na^+}$, forms when a sodium atom loses one electron. Find (a) the number of protons in $\\mathrm{Na^+}$ and (b) the number of electrons in $\\mathrm{Na^+}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) number of protons", answer: 11 },
              { label: "(b) number of electrons", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ion formation", statement: "Losing electrons does not change the number of protons; sodium has 11 protons." },
            ],
            steps: [
              { part: "a", reasoning: "Sodium (atomic number 11) has 11 protons; the charge does not alter the proton count.", working: "Z=11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of protons.", working: "11", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A neutral Na atom has 11 electrons; losing 1 gives $11-1=10$ electrons.", working: "11-1=10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $11$ protons (b) $10$ electrons",
            commonErrors: ["Answering 11 for (b) by forgetting the electron was lost."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Diamond melts at approximately $3550\\ \\mathrm{^\\circ C}$. Find (a) the melting point in kelvin and (b) the number of $\\mathrm{C-C}$ bonds formed by each carbon atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) melting point in $\\mathrm{K}$", answer: 3823 },
              { label: "(b) $\\mathrm{C-C}$ bonds per C atom", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diamond structure", statement: "Each carbon is tetrahedrally bonded to four others." },
            ],
            steps: [
              { part: "a", reasoning: "Convert: $3550+273=3823\\ \\mathrm{K}$.", working: "3550+273=3823", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the temperature in kelvin.", working: "3823\\ \\mathrm{K}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diamond's tetrahedral network gives each carbon four covalent bonds.", working: "4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the number of bonds.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3823\\ \\mathrm{K}$ (b) $4$ bonds per carbon",
            commonErrors: ["Answering 2 bonds by assuming a linear structure like $\\mathrm{CO_2}$."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In magnesium metal each atom contributes two delocalised electrons to the metallic lattice. For $0.50\\ \\mathrm{mol}$ of magnesium atoms, find (a) the amount, in moles, of delocalised electrons and (b) the charge on each $\\mathrm{Mg^{2+}}$ ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) moles of delocalised electrons", answer: 1 },
              { label: "(b) charge on each $\\mathrm{Mg^{2+}}$ ion", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic bonding", statement: "Group 2 metals contribute 2 valence electrons each to the delocalised sea." },
            ],
            steps: [
              { part: "a", reasoning: "Two electrons per Mg atom: $0.50\\times2=1.00\\ \\mathrm{mol}$ of electrons.", working: "0.50\\times2=1.00", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount.", working: "1.00\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Losing two electrons leaves each ion with charge $+2$.", working: "+2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the charge magnitude.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.00\\ \\mathrm{mol}$ of electrons (b) charge $+2$",
            commonErrors: ["Answering 0.50 for (a) by counting one electron per atom."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Consider a molecule of water, $\\mathrm{H_2O}$. Find (a) the number of $\\mathrm{O-H}$ bonds in the molecule and (b) the molar mass of water in $\\mathrm{g\\,mol^{-1}}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{O-H}$ bonds per molecule", answer: 2 },
              { label: "(b) molar mass of $\\mathrm{H_2O}$", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass", statement: "$M(\\mathrm{H_2O})=2(1.0)+16.0=18.0\\ \\mathrm{g\\,mol^{-1}}$." },
            ],
            steps: [
              { part: "a", reasoning: "Oxygen forms two single bonds, one to each hydrogen.", working: "2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number of bonds.", working: "2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Molar mass $=2(1)+16=18\\ \\mathrm{g\\,mol^{-1}}$.", working: "2+16=18", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) $2$ bonds (b) $18\\ \\mathrm{g\\,mol^{-1}}$",
            commonErrors: ["Answering 16 for (b) by using only oxygen's mass."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A white crystalline solid X melts at $770\\ \\mathrm{^\\circ C}$, does not conduct electricity as a solid but conducts when molten, and dissolves in water to give a solution that conducts electricity.",
          parts: [
            { label: "a", prompt: "Identify the bonding and structure of X and justify your answer using two observations.", marks: 2 },
            { label: "b", prompt: "Explain why X conducts when molten but not as a solid.", marks: 2 },
            { label: "c", prompt: "Explain why X dissolves in water.", marks: 2 },
            { label: "d", prompt: "Predict whether X would dissolve in oil and justify your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Property signatures", statement: "High mp + conducts only molten + dissolves in water $\\Rightarrow$ ionic lattice." },
              { kind: "principle", name: "Like dissolves like", statement: "Ionic X dissolves in polar water, not non-polar oil." },
            ],
            steps: [
              { part: "a", reasoning: "X is ionic: a giant lattice of ions (e.g. like $\\mathrm{NaCl}$).", working: "\\text{ionic lattice}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Justified by high melting point (strong lattice attractions) and conduction only when ions are mobile.", working: "\\text{high mp + molten conduction}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "As a solid the ions are fixed in the lattice so charge cannot move; when molten the ions are free to move and carry current.", working: "\\text{fixed vs mobile ions}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both states correctly explained.", working: "\\text{solid no, molten yes}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Polar water molecules surround and stabilise the ions (hydration), overcoming the ionic attractions.", working: "\\text{hydration}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The separated ions in solution are mobile, so the solution conducts.", working: "\\text{aqueous ions conduct}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "X would not dissolve in oil: oil is non-polar and cannot stabilise charged ions.", working: "\\text{no dissolution in oil}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justification via 'like dissolves like' — polar solvent needed for ionic solute.", working: "\\text{like dissolves like}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ionic lattice — high mp, conducts only when molten (b) solid ions fixed, molten ions mobile (c) polar water hydrates and separates ions (d) no — non-polar oil cannot stabilise ions",
            commonErrors: ["In (d) predicting dissolution in oil because 'oil dissolves things'."],
          },
        },
        {
          id: "chemsl-u3-structure-property-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student claims: 'The properties of a substance depend only on the types of atoms it contains.' Evaluate this statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure determines property", statement: "Bonding arrangement, not just composition, controls physical properties." },
            ],
            steps: [
              { reasoning: "The claim is partly true: the type of bonding (ionic, metallic, covalent) depends on the elements present.", working: "\\text{bonding type from elements}", marks: 1, markCode: "M" },
              { reasoning: "It is false as stated: diamond and graphite are both pure carbon yet have completely different properties — diamond is hard, transparent and non-conducting; graphite is soft, slippery and conducts along layers.", working: "\\text{C allotropes differ}", marks: 1, markCode: "A" },
              { reasoning: "The difference arises from bonding and structure: 3D tetrahedral network vs layered sheets with delocalised electrons.", working: "\\text{structure differs}", marks: 1, markCode: "R" },
              { reasoning: "Similarly, $\\mathrm{CO_2}$ (molecular) and $\\mathrm{SiO_2}$ (giant covalent) show composition alone does not fix properties.", working: "\\text{composition not enough}", marks: 1, markCode: "M" },
              { reasoning: "A correct statement would be: properties depend on the types of atoms AND the bonding/structure they form.", working: "\\text{atoms + structure}", marks: 1, markCode: "A" },
              { reasoning: "Conclude the claim is an overgeneralisation.", working: "\\text{overgeneralisation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The claim is an overgeneralisation: properties depend on both the elements present and, crucially, the bonding and structure — diamond and graphite (both pure C) have completely different properties because of their different structures.",
            commonErrors: ["Agreeing fully with the statement without a counterexample."],
          },
        },
      ],
    },
    {
      id: "chemsl-u3-energetics-kinetics-equilibrium",
      title: "Energetics, kinetics and equilibrium",
      skill: "Classify reactions as exothermic or endothermic, explain rate in terms of collision theory, and describe dynamic equilibrium.",
      lesson: {
        sections: [
          {
            heading: "Energy changes in reactions",
            body: "Reactions are classified by the energy change $\\Delta H$. In an exothermic reaction energy is released to the surroundings ($\\Delta H<0$); combustion and neutralisation are examples, and the surroundings warm. In an endothermic reaction energy is absorbed ($\\Delta H>0$); thermal decomposition and photosynthesis are examples, and the surroundings cool. On an energy profile diagram, reactants and products are shown as energy levels joined by an activation-energy hump; the energy released or absorbed is the difference between the levels.",
          },
          {
            heading: "Collision theory and rate",
            body: "Rate depends on how often effective collisions occur. Increasing concentration gives more particles per unit volume and more collisions. Increasing temperature increases both the fraction of particles with energy above $E_a$ and the collision frequency, so rate rises sharply. Increasing surface area (e.g. powdered rather than lump reactants) exposes more particles to collision. A catalyst provides an alternative pathway with lower $E_a$, increasing rate without being consumed. Any factor that increases the frequency or energy of effective collisions increases the rate.",
          },
          {
            heading: "Dynamic equilibrium",
            body: "A reversible reaction in a closed system reaches dynamic equilibrium when the forward and reverse rates become equal. Reactant and product concentrations then stay constant, but both reactions continue — molecules are still interconverting. Equilibrium can only be reached in a closed system (no reactants or products escape). Changing conditions shifts the position of equilibrium, which is studied quantitatively later in the course.",
          },
        ],
        keyFormulas: [
          { name: "Exothermic", statement: "$\\Delta H<0$, energy released" },
          { name: "Endothermic", statement: "$\\Delta H>0$, energy absorbed" },
          { name: "Rate factors", statement: "$\\text{concentration},\\ \\text{temperature},\\ \\text{surface area},\\ \\text{catalyst}$" },
          { name: "Dynamic equilibrium", statement: "$\\text{forward rate}=\\text{reverse rate}$ in a closed system" },
        ],
        workedExample: {
          problem: "Hydrogen and iodine react reversibly: $\\mathrm{H_2}+\\mathrm{I_2}\\rightleftharpoons2\\mathrm{HI}$. Explain what is meant by dynamic equilibrium in this system.",
          solution: "In a closed vessel the forward reaction $\\mathrm{H_2}+\\mathrm{I_2}\\to2\\mathrm{HI}$ and the reverse reaction $2\\mathrm{HI}\\to\\mathrm{H_2}+\\mathrm{I_2}$ proceed at equal rates, so the concentrations of all three species remain constant even though molecules continue to react and decompose.",
        },
      },
      questions: [
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction releases $120\\ \\mathrm{kJ}$ of energy to the surroundings. What is the sign of $\\Delta H$ and what type of reaction is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta H>0$, exothermic" },
              { id: "b", text: "$\\Delta H<0$, exothermic" },
              { id: "c", text: "$\\Delta H=0$, neither" },
              { id: "d", text: "$\\Delta H>0$, endothermic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "Energy released to surroundings; $\\Delta H<0$." },
            ],
            steps: [
              { reasoning: "Energy released to surroundings means the system loses energy, so $\\Delta H$ is negative.", working: "\\Delta H<0", marks: 1, markCode: "M" },
              { reasoning: "A reaction releasing energy is exothermic.", working: "\\text{exothermic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\Delta H<0$, exothermic",
            commonErrors: ["Choosing (a): that describes energy absorbed."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Which change would NOT increase the rate of a reaction between two solutions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the temperature" },
              { id: "b", text: "Decreasing the surface area of a solid reactant" },
              { id: "c", text: "Adding a catalyst" },
              { id: "d", text: "Increasing the concentration of a reactant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Rate increases with more frequent or more energetic effective collisions." },
            ],
            steps: [
              { reasoning: "Options a, b and c all increase collision frequency or energy: concentration, temperature, catalyst.", working: "\\text{a,b,c increase rate}", marks: 1, markCode: "M" },
              { reasoning: "Decreasing surface area reduces the exposed area and therefore decreases the rate.", working: "\\text{less SA} \\Rightarrow \\text{slower}", marks: 1, markCode: "R" },
              { reasoning: "Select the option that does not increase rate.", working: "\\text{d}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decreasing the surface area",
            commonErrors: ["Thinking a catalyst is 'used up' and therefore slows the reaction later."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Marble chips ($\\mathrm{CaCO_3}$) react with dilute hydrochloric acid to produce carbon dioxide. Explain, using collision theory, why the reaction is faster when the marble is powdered and the acid is warm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Rate depends on the frequency and energy of effective collisions." },
            ],
            steps: [
              { reasoning: "Powdering increases the surface area of the solid, exposing more $\\mathrm{CaCO_3}$ particles to the acid.", working: "\\text{more surface area}", marks: 1, markCode: "M" },
              { reasoning: "More surface area means more particles can collide with acid particles per unit time, so collisions are more frequent.", working: "\\text{more collisions}", marks: 1, markCode: "R" },
              { reasoning: "Warming increases the kinetic energy of particles, so a greater fraction have energy above $E_a$ and collide more often.", working: "\\text{warmer} \\Rightarrow \\text{more energetic collisions}", marks: 1, markCode: "R" },
              { reasoning: "Both changes increase the rate of effective collisions, so the reaction is faster.", working: "\\text{rate increases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Powdered marble has more surface area (more frequent collisions); warm acid gives particles more energy (more collisions exceed $E_a$) — both increase the rate.",
            commonErrors: ["Saying warming 'creates more particles'.", "Saying powdering 'weakens the bonds'."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student investigates the reversible reaction $\\mathrm{N_2}+3\\mathrm{H_2}\\rightleftharpoons2\\mathrm{NH_3}$ in a sealed vessel.",
          parts: [
            { label: "a", prompt: "Define dynamic equilibrium and state the condition required for it to be reached.", marks: 2 },
            { label: "b", prompt: "Describe what happens to the concentrations of $\\mathrm{N_2}$, $\\mathrm{H_2}$ and $\\mathrm{NH_3}$ once equilibrium is reached.", marks: 2 },
            { label: "c", prompt: "Explain, using collision theory, why increasing the temperature increases the rate of both the forward and reverse reactions.", marks: 2 },
            { label: "d", prompt: "Evaluate whether the reaction can reach equilibrium if the vessel is opened and ammonia escapes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Forward and reverse rates equal in a closed system; concentrations constant." },
              { kind: "principle", name: "Collision theory", statement: "Higher temperature gives more particles energy above $E_a$ and increases collision frequency." },
            ],
            steps: [
              { part: "a", reasoning: "Dynamic equilibrium is the state where forward and reverse reaction rates are equal.", working: "\\text{rates equal}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It requires a closed system so no reactants or products escape.", working: "\\text{closed system}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All three concentrations remain constant (though not necessarily equal).", working: "\\text{concentrations constant}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Molecular reactions continue — it is dynamic, not static.", working: "\\text{reactions continue}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher temperature increases particle kinetic energy, so more collisions have energy above $E_a$ for both directions.", working: "\\text{more collisions} > E_a", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collision frequency also increases with temperature, speeding both forward and reverse rates equally in principle.", working: "\\text{frequency up}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "If ammonia escapes, the reverse reaction is starved of product while the forward reaction continues — the system cannot reach a steady state.", working: "\\text{open system}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The reaction proceeds essentially to completion instead; equilibrium requires a closed system.", working: "\\text{no equilibrium}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) equal forward/reverse rates in a closed system (b) concentrations constant but reactions continue (c) higher T gives more energetic and more frequent collisions in both directions (d) no equilibrium — escaping product prevents steady state",
            commonErrors: ["In (b) saying the reaction 'stops' at equilibrium.", "In (d) thinking equilibrium still occurs because rates are 'equal enough'."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following processes is endothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Respiration" },
              { id: "b", text: "Neutralisation of an acid by a base" },
              { id: "c", text: "Combustion of methane" },
              { id: "d", text: "Photosynthesis" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic", statement: "A reaction that absorbs energy from the surroundings, $\\Delta H>0$." },
            ],
            steps: [
              { reasoning: "Photosynthesis absorbs light energy to build glucose, so $\\Delta H>0$.", working: "\\text{photosynthesis absorbs energy}", marks: 1, markCode: "M" },
              { reasoning: "Combustion, neutralisation and respiration all release energy and are exothermic.", working: "\\text{others exothermic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Photosynthesis",
            commonErrors: ["Choosing combustion because it 'uses' oxygen — it releases energy."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A catalyst increases the rate of a reaction by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "providing an alternative pathway with a lower activation energy" },
              { id: "b", text: "increasing the concentration of reactants" },
              { id: "c", text: "raising the temperature of the mixture" },
              { id: "d", text: "being consumed in the reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Catalysis", statement: "A catalyst lowers $E_a$ by offering an alternative pathway; it is not consumed and does not change $\\Delta H$." },
            ],
            steps: [
              { reasoning: "Lowering the activation energy means a greater fraction of collisions are effective, so the rate increases.", working: "\\text{lower }E_a", marks: 1, markCode: "M" },
              { reasoning: "The catalyst is unchanged at the end and does not alter the energy difference between reactants and products.", working: "\\text{not consumed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Lower activation energy via an alternative pathway",
            commonErrors: ["Saying a catalyst 'speeds up molecules' or is used up — it is regenerated unchanged."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Dynamic equilibrium in a reversible reaction can only be established in...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "an open system" },
              { id: "b", text: "a system at very high temperature" },
              { id: "c", text: "any system regardless of conditions" },
              { id: "d", text: "a closed system" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Equal forward and reverse rates with constant concentrations, possible only in a closed system." },
            ],
            steps: [
              { reasoning: "If reactants or products escape, the reverse or forward reaction is favoured and steady concentrations cannot be maintained.", working: "\\text{closed system needed}", marks: 1, markCode: "M" },
              { reasoning: "Only in a closed system can forward and reverse rates become equal.", working: "\\text{rates equal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A closed system",
            commonErrors: ["Thinking equilibrium requires the reaction to stop — it continues dynamically."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Increasing the concentration of a reactant increases the rate of reaction because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the temperature of the mixture rises automatically" },
              { id: "b", text: "there are more particles per unit volume, so collisions are more frequent" },
              { id: "c", text: "the covalent bonds within the molecules become weaker" },
              { id: "d", text: "the activation energy decreases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory", statement: "Rate depends on the frequency and energy of effective collisions." },
            ],
            steps: [
              { reasoning: "Higher concentration means more reactant particles in the same volume, so they collide more often.", working: "\\text{more particles} \\Rightarrow \\text{more collisions}", marks: 1, markCode: "M" },
              { reasoning: "Concentration does not change $E_a$, temperature or bond strengths.", working: "\\text{frequency only}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** More particles per unit volume means more frequent collisions",
            commonErrors: ["Claiming concentration changes activation energy — it does not."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Activation energy, $E_a$, is best defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the energy released to the surroundings" },
              { id: "b", text: "the energy stored in the covalent bonds of the products" },
              { id: "c", text: "the minimum energy particles must have in a collision for a reaction to occur" },
              { id: "d", text: "the energy difference between products and reactants" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activation energy", statement: "$E_a$ is the minimum kinetic energy required for an effective collision." },
            ],
            steps: [
              { reasoning: "Particles colliding with energy below $E_a$ do not react, regardless of orientation.", working: "E \\ge E_a \\text{ needed}", marks: 1, markCode: "M" },
              { reasoning: "This is distinct from $\\Delta H$, which is the overall energy change.", working: "\\Delta H \\ne E_a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Minimum energy for an effective collision",
            commonErrors: ["Confusing $E_a$ with $\\Delta H$ — they are different quantities on the energy profile."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a reaction, the reactants have an energy content of $200\\ \\mathrm{kJ}$ and the products have an energy content of $80\\ \\mathrm{kJ}$. Find (a) the value of $\\Delta H$ and (b) the energy released to the surroundings.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\Delta H$ in $\\mathrm{kJ}$", answer: -120 },
              { label: "(b) energy released in $\\mathrm{kJ}$", answer: 120 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy change", statement: "$\\Delta H=H_{\\text{products}}-H_{\\text{reactants}}$; negative means exothermic." },
            ],
            steps: [
              { part: "a", reasoning: "$\\Delta H=80-200=-120\\ \\mathrm{kJ}$.", working: "80-200=-120", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $\\Delta H$ with sign.", working: "-120\\ \\mathrm{kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy released equals the magnitude of $\\Delta H$: $120\\ \\mathrm{kJ}$.", working: "|-120|=120", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the energy released.", working: "120\\ \\mathrm{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\Delta H=-120\\ \\mathrm{kJ}$ (b) $120\\ \\mathrm{kJ}$ released",
            commonErrors: ["Answering +120 for $\\Delta H$ — products are lower in energy so $\\Delta H$ is negative."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A reaction produces $0.050\\ \\mathrm{mol}$ of a product in $25\\ \\mathrm{s}$. Assuming the rate stays constant, find (a) the rate of reaction in $\\mathrm{mol\\,s^{-1}}$ and (b) the amount of product formed after $100\\ \\mathrm{s}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) rate in $\\mathrm{mol\\,s^{-1}}$", answer: 0.002 },
              { label: "(b) amount after $100\\ \\mathrm{s}$ in $\\mathrm{mol}$", answer: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of reaction", statement: "$\\text{rate}=\\text{amount of product}/\\text{time}$" },
            ],
            steps: [
              { part: "a", reasoning: "Rate $=0.050/25=0.0020\\ \\mathrm{mol\\,s^{-1}}$.", working: "0.050/25=0.0020", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the rate.", working: "0.0020\\ \\mathrm{mol\\,s^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Amount $=\\text{rate}\\times\\text{time}=0.0020\\times100=0.20\\ \\mathrm{mol}$ (or $0.050\\times4$).", working: "0.0020\\times100=0.20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the amount.", working: "0.20\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.0020\\ \\mathrm{mol\\,s^{-1}}$ (b) $0.20\\ \\mathrm{mol}$",
            commonErrors: ["Dividing time by amount instead of amount by time."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An energy profile diagram for a reaction shows the reactants at $50\\ \\mathrm{kJ}$, the peak (transition state) at $130\\ \\mathrm{kJ}$ and the products at $20\\ \\mathrm{kJ}$. Find (a) the activation energy and (b) $\\Delta H$ for the reaction.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) activation energy in $\\mathrm{kJ}$", answer: 80 },
              { label: "(b) $\\Delta H$ in $\\mathrm{kJ}$", answer: -30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy profile", statement: "$E_a$ is measured from reactants to the peak; $\\Delta H$ from reactants to products." },
            ],
            steps: [
              { part: "a", reasoning: "$E_a=130-50=80\\ \\mathrm{kJ}$.", working: "130-50=80", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the activation energy.", working: "80\\ \\mathrm{kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\Delta H=20-50=-30\\ \\mathrm{kJ}$.", working: "20-50=-30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State $\\Delta H$ with sign.", working: "-30\\ \\mathrm{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $E_a=80\\ \\mathrm{kJ}$ (b) $\\Delta H=-30\\ \\mathrm{kJ}$ (exothermic)",
            commonErrors: ["Measuring $E_a$ from products or from zero instead of from the reactant level."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For the reaction $\\mathrm{N_2}+3\\mathrm{H_2}\\rightleftharpoons2\\mathrm{NH_3}$, $0.20\\ \\mathrm{mol}$ of $\\mathrm{N_2}$ reacts completely. Find (a) the amount, in moles, of $\\mathrm{H_2}$ needed and (b) the amount, in moles, of $\\mathrm{NH_3}$ formed.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) moles of $\\mathrm{H_2}$ needed", answer: 0.6 },
              { label: "(b) moles of $\\mathrm{NH_3}$ formed", answer: 0.4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mole ratios", statement: "From the equation: 1 $\\mathrm{N_2}$ : 3 $\\mathrm{H_2}$ : 2 $\\mathrm{NH_3}$." },
            ],
            steps: [
              { part: "a", reasoning: "$0.20\\times3=0.60\\ \\mathrm{mol}$ of $\\mathrm{H_2}$.", working: "0.20\\times3=0.60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount of $\\mathrm{H_2}$.", working: "0.60\\ \\mathrm{mol}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$0.20\\times2=0.40\\ \\mathrm{mol}$ of $\\mathrm{NH_3}$.", working: "0.20\\times2=0.40", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the amount of $\\mathrm{NH_3}$.", working: "0.40\\ \\mathrm{mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.60\\ \\mathrm{mol}$ $\\mathrm{H_2}$ (b) $0.40\\ \\mathrm{mol}$ $\\mathrm{NH_3}$",
            commonErrors: ["Using a 1:1 ratio instead of the stoichiometric coefficients."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On an energy profile, the reactants are at $40\\ \\mathrm{kJ}$ and the peak of the curve is at $90\\ \\mathrm{kJ}$. What is the activation energy?",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) activation energy in $\\mathrm{kJ}$", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Activation energy", statement: "$E_a$ is the energy difference between reactants and the transition state peak." },
            ],
            steps: [
              { reasoning: "$E_a=90-40=50\\ \\mathrm{kJ}$.", working: "90-40=50", marks: 1, markCode: "M" },
              { reasoning: "State the activation energy.", working: "50\\ \\mathrm{kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $50\\ \\mathrm{kJ}$",
            commonErrors: ["Answering 90 by reading the peak value rather than the difference."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The thermal decomposition of calcium carbonate, $\\mathrm{CaCO_3}\\to\\mathrm{CaO}+\\mathrm{CO_2}$, is an endothermic reaction.",
          parts: [
            { label: "a", prompt: "Describe the energy profile for this reaction, identifying the reactants, products, activation energy and $\\Delta H$.", marks: 2 },
            { label: "b", prompt: "Explain the sign and meaning of $\\Delta H$ for this reaction.", marks: 2 },
            { label: "c", prompt: "Explain how the addition of a catalyst would affect the energy profile and the rate of reaction.", marks: 2 },
            { label: "d", prompt: "Compare this profile with that of an exothermic reaction such as combustion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic profile", statement: "Products are higher in energy than reactants; $\\Delta H>0$." },
              { kind: "principle", name: "Catalysis", statement: "A catalyst provides a lower-$E_a$ pathway without changing $\\Delta H$." },
            ],
            steps: [
              { part: "a", reasoning: "The profile shows reactants at a lower energy level than products, with a peak (transition state) above both representing $E_a$.", working: "\\text{products higher than reactants}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All four features ($E_a$ hump, reactant level, higher product level, $\\Delta H>0$) correctly identified.", working: "\\text{profile features}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\Delta H$ is positive because the products have higher energy than the reactants — energy is absorbed from the surroundings.", working: "\\Delta H>0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The surroundings cool as the decomposition proceeds.", working: "\\text{surroundings cool}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A catalyst provides an alternative pathway with a lower activation energy, so the peak is lower.", working: "\\text{lower peak}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The rate increases because more collisions exceed the lower $E_a$; $\\Delta H$ is unchanged.", working: "\\text{rate up, }\\Delta H\\text{ same}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "An exothermic profile has products lower than reactants ($\\Delta H<0$) and energy released to the surroundings.", working: "\\text{exo: products lower}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both still show an activation-energy hump between reactants and products.", working: "\\text{both have }E_a\\text{ hump}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) products higher than reactants with Ea hump (b) ΔH>0 — energy absorbed (c) catalyst lowers Ea peak, speeds rate, ΔH unchanged (d) exothermic has products lower, ΔH<0",
            commonErrors: ["Drawing the endothermic profile with products below reactants."],
          },
        },
        {
          id: "chemsl-u3-energetics-kinetics-equilibrium-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student claims: 'Once a reversible reaction reaches dynamic equilibrium, the reaction has stopped.' Evaluate this statement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic equilibrium", statement: "Forward and reverse rates are equal, so concentrations stay constant — but both reactions continue." },
            ],
            steps: [
              { reasoning: "The claim is incorrect: 'dynamic' equilibrium means the forward and reverse reactions continue at equal rates.", working: "\\text{reactions continue}", marks: 1, markCode: "M" },
              { reasoning: "Molecules are still reacting and being formed; only the net concentrations remain constant.", working: "\\text{net change zero}", marks: 1, markCode: "A" },
              { reasoning: "At equilibrium the forward rate equals the reverse rate, not zero.", working: "v_{\\text{fwd}}=v_{\\text{rev}}\\ne0", marks: 1, markCode: "M" },
              { reasoning: "Equilibrium also requires a closed system so no species escape and concentrations can stabilise.", working: "\\text{closed system}", marks: 1, markCode: "A" },
              { reasoning: "A correct statement: at equilibrium the rates are equal and concentrations are constant, but the reaction has not stopped.", working: "\\text{corrected claim}", marks: 1, markCode: "A" },
              { reasoning: "Conclude the student's claim confuses constant concentrations with no reaction.", working: "\\text{constant} \\ne \\text{stopped}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The claim is false: at dynamic equilibrium the forward and reverse reactions continue at equal rates, so concentrations remain constant even though molecular processes never stop.",
            commonErrors: ["Agreeing that equilibrium means the reaction stops — that is the common misconception this question targets."],
          },
        },
      ],
    },
  ],
};
