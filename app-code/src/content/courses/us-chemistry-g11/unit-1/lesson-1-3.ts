import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "chem11-u1-lesson-1-3",
  code: "1-3",
  title: "IMF and Physical Properties",
  goal: "I CAN apply intermolecular force theory to predict and explain trends in boiling points, solubility, surface tension and viscosity, and connect these properties to molecular structure.",
  standards: ["HS-PS1-3", "HS-PS2-6", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Boiling point", definition: "The temperature at which a liquid's vapor pressure equals atmospheric pressure; stronger IMF raise it." },
    { term: "Vapor pressure", definition: "The pressure exerted by a vapor in equilibrium with its liquid; higher IMF lower vapor pressure." },
    { term: "Surface tension", definition: "The tendency of a liquid's surface to resist stretching, caused by unbalanced cohesive forces at the surface." },
    { term: "Viscosity", definition: "A liquid's resistance to flow; stronger IMF and larger molecules increase viscosity." },
    { term: "Miscibility", definition: "The ability of two liquids to mix in all proportions; governed by whether their IMF are compatible." },
    { term: "Hydration", definition: "The attraction of polar water molecules to ions or polar solute molecules, stabilizing them in solution." },
    { term: "Capillary action", definition: "The movement of liquid through narrow spaces due to adhesion to the walls competing with cohesion." },
  ],
  concepts: [
    {
      id: "chem11-u1-imf-trends",
      title: "Boiling points and IMF trends",
      skill: "Predict boiling point order from molecular structure using IMF strength, molar mass and hydrogen bonding.",
      lesson: {
        sections: [
          {
            heading: "Why boiling points differ",
            body: "Boiling requires separating molecules from the liquid, so the energy needed depends on the strength of intermolecular forces. Stronger IMF mean higher boiling points and lower vapor pressure.\n\nFor a homologous series (same IMF type, growing chain length), boiling point rises with molar mass because London dispersion forces increase with the number of electrons and surface area. Compare propane, butane and pentane: more carbons means more electrons means stronger London forces.",
          },
          {
            heading: "Hydrogen bonding is the exception",
            body: "Hydrogen bonding occurs only when H is bonded to N, O or F. It is strong enough to produce dramatic anomalies:\n\n- Water ($\\text{H}_2\\text{O}$, $\\text{MM} = 18$) boils at $100^\\circ\\text{C}$, far above hydrogen sulfide ($\\text{H}_2\\text{S}$, $\\text{MM} = 34$, $\\text{b.p.} = -60^\\circ\\text{C}$) and hydrogen chloride ($\\text{HCl}$, $\\text{b.p.} = -85^\\circ\\text{C}$).\n- HF boils at $19.5^\\circ\\text{C}$, far above HCl despite similar molar masses.\n- Alcohols and carboxylic acids boil much higher than ethers or alkanes of similar mass because of O-H hydrogen bonding.",
          },
          {
            heading: "Reading IMF data",
            body: "When given a table of boiling points, look for the pattern: smooth increase suggests same IMF type (London scaling); a large jump suggests a new, stronger IMF such as hydrogen bonding. Compare molecules of similar molar mass first to isolate the effect of IMF type before comparing size effects.",
          },
        ],
        keyFormulas: [
          { name: "Boiling point order", statement: "Stronger IMF $\\rightarrow$ higher boiling point; within a series, larger molar mass $\\rightarrow$ higher boiling point" },
          { name: "Hydrogen bond condition", statement: "H covalently bonded to N, O or F" },
        ],
        workedExample: {
          problem: "Rank these by boiling point from lowest to highest: $\\text{CH}_4$ (16 g/mol), $\\text{H}_2\\text{O}$ (18 g/mol), $\\text{HF}$ (20 g/mol), $\\text{C}_2\\text{H}_6$ (30 g/mol).",
          solution: "$\\text{CH}_4$ (nonpolar, weak London, b.p. $-161^\\circ\\text{C}$) is lowest. $\\text{H}_2\\text{O}$ and $\\text{HF}$ both hydrogen bond; HF's H-F bond gives slightly stronger H-bonds per bond but water forms more H-bonds per molecule, so $\\text{H}_2\\text{O}$ (b.p. $100^\\circ\\text{C}$) > $\\text{HF}$ ($19.5^\\circ\\text{C}$). $\\text{C}_2\\text{H}_6$ is nonpolar London only but heavier; its b.p. is $-89^\\circ\\text{C}$, still below HF because hydrogen bonding beats London forces at these sizes. Order: $\\text{CH}_4 < \\text{C}_2\\text{H}_6 < \\text{HF} < \\text{H}_2\\text{O}$.",
        },
      },
      questions: [
        {
          id: "chem11-u1-imf-trends-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which has the highest boiling point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{H}_2\\text{S}$" },
              { id: "b", text: "$\\text{H}_2\\text{O}$" },
              { id: "c", text: "$\\text{HCl}$" },
              { id: "d", text: "$\\text{HF}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "comparison", name: "H-bonding", statement: "Water hydrogen bonds strongly and forms multiple H-bonds per molecule, giving it the highest boiling point of the group." }],
            steps: [{ reasoning: "$\\text{H}_2\\text{O}$ boils at $100^\\circ\\text{C}$; the others cannot hydrogen bond (S and Cl are not N/O/F acceptors with H in the same way) and have much lower boiling points.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $\\text{H}_2\\text{O}$",
            commonErrors: ["Choosing HF; HF hydrogen bonds but water's network is stronger overall.", "Ranking by molar mass alone."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u1-imf-trends-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The boiling points of the noble gases are: He $-269^\\circ\\text{C}$, Ne $-246^\\circ\\text{C}$, Ar $-186^\\circ\\text{C}$, Kr $-153^\\circ\\text{C}$. Explain the trend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "London dispersion scaling", statement: "London forces increase with the number of electrons and molar mass, which increase down the group." }],
            steps: [
              { reasoning: "Noble gases have only London dispersion forces; going down the group each atom has more electrons and larger molar mass.", marks: 1, markCode: "B" },
              { reasoning: "Stronger London forces need more energy to overcome, so boiling points rise from He to Kr.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Boiling points increase down the group because London dispersion forces strengthen with increasing electron count and molar mass.",
            commonErrors: ["Invoking hydrogen bonding or dipole forces; noble gases are nonpolar monatomics.", "Saying atoms 'attract more' without linking to electron cloud size."],
            examinerNote: "B1 trend explanation, R1 link to electron count.",
          },
        },
        {
          id: "chem11-u1-imf-trends-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The table shows boiling points:\n\n| Substance | Formula | Boiling point |\n|---|---|---|\n| Methane | $\\text{CH}_4$ | $-161^\\circ\\text{C}$ |\n| Methanol | $\\text{CH}_3\\text{OH}$ | $65^\\circ\\text{C}$ |\n| Ethane | $\\text{C}_2\\text{H}_6$ | $-89^\\circ\\text{C}$ |\n| Dimethyl ether | $\\text{CH}_3\\text{OCH}_3$ | $-24^\\circ\\text{C}$ |\n\nExplain the ordering, paying attention to isomers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Isomers and IMF", statement: "Isomers have the same formula and molar mass but different structures, so their IMF (and boiling points) differ." },
              { kind: "principle", name: "H-bonding", statement: "O-H bonds enable hydrogen bonding, greatly raising boiling points." },
            ],
            steps: [
              { reasoning: "Methane is smallest and nonpolar: weakest London forces, lowest b.p.", marks: 1, markCode: "B" },
              { reasoning: "Ethane is heavier but still nonpolar London only: b.p. rises to $-89^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { reasoning: "Dimethyl ether is polar (asymmetric) so it has dipole-dipole forces in addition to London: b.p. $-24^\\circ\\text{C}$, higher than ethane despite similar mass.", marks: 1, markCode: "B" },
              { reasoning: "Methanol has an O-H bond, so it hydrogen bonds: b.p. $65^\\circ\\text{C}$, far above its isomer dimethyl ether ($-24^\\circ\\text{C}$) — same formula $\\text{C}_2\\text{H}_6\\text{O}$, different IMF.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\text{CH}_4 < \\text{C}_2\\text{H}_6 < \\text{CH}_3\\text{OCH}_3 < \\text{CH}_3\\text{OH}$; hydrogen bonding in methanol and dipole forces in the ether raise their boiling points over the nonpolar hydrocarbons.",
            commonErrors: ["Assuming isomers have identical properties.", "Forgetting dimethyl ether is polar and has dipole-dipole forces."],
            examinerNote: "B3 data interpretation, R1 isomer explanation.",
          },
        },
        {
          id: "chem11-u1-imf-trends-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student measures the surface tension and viscosity of four liquids: water, ethanol, hexane ($\\text{C}_6\\text{H}_{14}$) and glycerol ($\\text{C}_3\\text{H}_8\\text{O}_3$, three O-H groups).",
          parts: [
            { label: "a", prompt: "Rank the four liquids by expected surface tension from highest to lowest, justifying with IMF.", marks: 3 },
            { label: "b", prompt: "Rank them by expected viscosity from highest to lowest, justifying.", marks: 3 },
            { label: "c", prompt: "Explain why hexane floats on water and does not mix with it, but ethanol mixes completely with both.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface tension", statement: "Surface tension reflects cohesive IMF strength at the surface." },
              { kind: "principle", name: "Viscosity", statement: "Viscosity increases with IMF strength and molecular size/shape." },
              { kind: "principle", name: "Miscibility", statement: "Miscibility depends on IMF compatibility: polar with polar, nonpolar with nonpolar; some amphiphilic molecules bridge both." },
            ],
            steps: [
              { reasoning: "Surface tension: glycerol highest (3 O-H groups, many H-bonds), then water (strong H-bond network), then ethanol (one O-H, weaker H-bonds), then hexane lowest (nonpolar London only).", marks: 3, markCode: "R", part: "a" },
              { reasoning: "Viscosity: glycerol highest (large polar molecule, strong H-bonding), water next, ethanol next, hexane lowest (small nonpolar, weakest IMF).", marks: 3, markCode: "R", part: "b" },
              { reasoning: "Hexane is nonpolar and less dense, so it floats; its London-only IMF are incompatible with water's H-bonds, so they don't mix.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Ethanol has both a nonpolar hydrocarbon part and a polar O-H group; it can interact with both water (H-bonding) and hexane (London), making it miscible with each.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Like dissolves like: ethanol is amphiphilic, bridging polar and nonpolar phases.", marks: 1, markCode: "B", part: "c" },
            ],
            finalAnswer: "(a) glycerol > water > ethanol > hexane (b) glycerol > water > ethanol > hexane (c) hexane is nonpolar and floats; ethanol is amphiphilic and miscible with both.",
            commonErrors: ["Ranking water above glycerol for viscosity; glycerol's three -OH groups make it more viscous.", "Saying ethanol 'dissolves' hexane chemically; it's an IMF compatibility effect."],
            examinerNote: "3+3+3 = 9. Accept reasonable orderings with correct IMF justification.",
          },
        },
      ],
    },
    {
      id: "chem11-u1-solutions-imf",
      title: "Solutions and solubility",
      skill: "Explain solubility using IMF, distinguish hydration from dissolution of nonpolar solutes, and predict miscibility.",
      lesson: {
        sections: [
          {
            heading: "What 'dissolving' means",
            body: "When an ionic or polar solute dissolves in water, two processes compete: the IMF holding the solute together (lattice energy or IMF between solute molecules) must be overcome, and new solute-water attractions (**hydration**) must form. Dissolution is favorable when the energy released forming solute-water interactions is comparable to or greater than the energy needed to separate solute particles.\n\nIons are surrounded by oriented water molecules: the partially negative oxygen side of water points toward cations and the partially positive hydrogens point toward anions.",
          },
          {
            heading: "Like dissolves like",
            body: "Polar solutes (ionic compounds, polar molecules) dissolve in polar solvents like water. Nonpolar solutes (oils, waxes, $\\text{I}_2$, $\\text{CCl}_4$) do not dissolve in water because water's H-bond network cannot interact favorably with them — inserting a nonpolar molecule actually strengthens water-water interactions (the hydrophobic effect).\n\nNonpolar solutes dissolve in nonpolar solvents because London dispersion forces can form between them.",
          },
          {
            heading: "Exceptions and amphiphiles",
            body: "Some molecules are **amphiphilic**: they have both polar and nonpolar parts. Soap and detergent molecules have a polar ionic head and a long nonpolar hydrocarbon tail. In water they form micelles: tails cluster inside away from water, heads face outward. This is why soap can dissolve grease (nonpolar) in water.",
          },
        ],
        keyFormulas: [
          { name: "Like dissolves like", statement: "Polar/ionic $\\leftrightarrow$ polar solvent; nonpolar $\\leftrightarrow$ nonpolar solvent" },
          { name: "Hydration", statement: "Polar water molecules orient around ions: $\\text{O}^{\\delta-}$ toward cations, $\\text{H}^{\\delta+}$ toward anions" },
        ],
        workedExample: {
          problem: "Explain why table salt dissolves in water but cooking oil does not, and why salt does not dissolve in gasoline.",
          solution: "Salt is ionic; water's polar molecules hydrate the Na+ and Cl- ions, releasing enough energy to overcome the lattice. Oil is nonpolar; water's H-bond network excludes it. Gasoline is nonpolar; it cannot hydrate ions, so the strong ionic lattice of salt is not overcome.",
        },
      },
      questions: [
        {
          id: "chem11-u1-solutions-imf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which solute would dissolve in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vegetable oil" },
              { id: "b", text: "Sugar ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$)" },
              { id: "c", text: "Wax" },
              { id: "d", text: "$\\text{I}_2$ crystals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Like dissolves like", statement: "Polar solutes dissolve in polar solvents like water." }],
            steps: [{ reasoning: "Sugar is polar (many O-H groups) and hydrogen bonds with water; oil, wax and $\\text{I}_2$ are nonpolar.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Sugar",
            commonErrors: ["Choosing iodine because it is a solid; nonpolar $\\text{I}_2$ does not dissolve in water."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem11-u1-solutions-imf-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how water molecules arrange around a sodium ion ($\\text{Na}^+$) in solution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hydration", statement: "Polar water molecules orient their partial charges toward ions: the negative (oxygen) end toward cations." }],
            steps: [
              { reasoning: "Water is polar: oxygen carries $\\delta^-$, hydrogens carry $\\delta^+$.", marks: 1, markCode: "B" },
              { reasoning: "Around $\\text{Na}^+$, the $\\delta^-$ oxygen ends of several water molecules point toward the ion, forming a hydration shell.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Water molecules orient with their partially negative oxygen atoms facing the $\\text{Na}^+$ ion, forming a hydration shell.",
            commonErrors: ["Saying hydrogens point toward the cation; the positive ends would be repelled.", "Describing covalent bonding to the ion instead of ion-dipole attraction."],
            examinerNote: "B1 polarity, B1 orientation.",
          },
        },
        {
          id: "chem11-u1-solutions-imf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why adding salt to water releases energy (the solution feels slightly warm), while adding ammonium nitrate makes the solution cold.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy balance in dissolving", statement: "Dissolving involves breaking solute-solute and solvent-solvent IMF (endothermic) and forming solute-solvent interactions (exothermic); net sign depends on which dominates." },
              { kind: "principle", name: "Lattice vs hydration energy", statement: "If hydration energy exceeds lattice energy, dissolving is exothermic; if less, endothermic." },
            ],
            steps: [
              { reasoning: "For NaCl, the energy released when water hydrates the ions is greater than the energy needed to separate the ions from the lattice, so the net process releases heat.", marks: 2, markCode: "B" },
              { reasoning: "For $\\text{NH}_4\\text{NO}_3$, separating the ions from the crystal and breaking water's H-bonds costs more energy than hydration releases, so heat is absorbed from surroundings.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "NaCl dissolving is exothermic because hydration energy exceeds lattice energy; ammonium nitrate dissolving is endothermic because the energy cost of separating ions exceeds hydration energy.",
            commonErrors: ["Saying all dissolving is exothermic or all endothermic.", "Ignoring that both lattice breaking and solvent separation cost energy."],
            examinerNote: "B2 energy comparison each, R1 net sign reasoning.",
          },
        },
        {
          id: "chem11-u1-solutions-imf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider four solute-solvent pairs: (1) ethanol in water, (2) ethanol in hexane, (3) sodium chloride in water, (4) sodium chloride in hexane.",
          parts: [
            { label: "a", prompt: "Predict which pairs form homogeneous solutions and which do not. Justify each using IMF.", marks: 4 },
            { label: "b", prompt: "Explain why ethanol dissolves in both water and hexane while NaCl dissolves only in water.", marks: 3 },
            { label: "c", prompt: "A detergent molecule has a negatively charged head and a long hydrocarbon tail. Explain, in terms of micelles, how it removes grease from fabric in water.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Like dissolves like", statement: "Miscibility requires compatible IMF between solute and solvent." },
              { kind: "principle", name: "Amphiphilic molecules", statement: "Molecules with both polar and nonpolar regions can interact with both polar and nonpolar solvents." },
              { kind: "context", name: "Micelles", statement: "Surfactants form spherical aggregates with tails inward and heads outward in water." },
            ],
            steps: [
              { reasoning: "Ethanol in water: yes — ethanol's O-H hydrogen bonds with water. Ethanol in hexane: yes — ethanol's hydrocarbon part has London interactions with hexane.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "NaCl in water: yes — ions are hydrated. NaCl in hexane: no — hexane cannot hydrate ions and cannot overcome the ionic lattice.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Ethanol is amphiphilic: polar -OH group plus nonpolar ethyl group, so it interacts with both polar water and nonpolar hexane.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "NaCl is ionic; only a polar solvent like water can supply hydration energy to overcome the lattice.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Hexane is nonpolar; ion-dipole attractions are absent, so the lattice energy is not compensated.", marks: 1, markCode: "R", part: "b" },
              { reasoning: "Detergent heads face outward into water (ion-dipole/H-bonding) while hydrocarbon tails point inward, surrounding and trapping nonpolar grease inside the micelle so it can be rinsed away.", marks: 2, markCode: "B", part: "c" },
              { reasoning: "The micelle is water-soluble outside and grease-soluble inside, emulsifying the oil.", marks: 1, markCode: "R", part: "c" },
            ],
            finalAnswer: "(a) Pairs 1, 2, 3 form solutions; pair 4 does not (b) ethanol is amphiphilic; NaCl needs a polar solvent to hydrate ions (c) micelles trap grease with tails inside and polar heads outside.",
            commonErrors: ["Saying ethanol is 'both polar and nonpolar' as a whole rather than having both regions.", "Forgetting detergent heads are charged/polar and tails nonpolar."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
