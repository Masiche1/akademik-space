import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "chem10-u2-lesson-2-2",
  code: "2-2",
  title: "Intermolecular Forces",
  goal: "I CAN identify intermolecular forces, use them to explain boiling point, solubility and surface tension, and interpret phase diagrams and heating curves.",
  standards: ["HS-PS1-3", "HS-PS2-6", "SEP: Constructing Explanations", "CCC: Structure and Function"],
  vocabulary: [
    { term: "Intermolecular force", definition: "An attraction between separate molecules. It is much weaker than a covalent or ionic bond." },
    { term: "London dispersion force", definition: "A weak attraction caused by temporary uneven electron distribution; present between all molecules and stronger in larger molecules." },
    { term: "Dipole-dipole force", definition: "An attraction between the positive end of one polar molecule and the negative end of another." },
    { term: "Hydrogen bond", definition: "A strong dipole-dipole attraction between H bonded to N, O or F and a lone pair on N, O or F of another molecule." },
    { term: "Triple point", definition: "The single temperature and pressure at which solid, liquid and gas are in equilibrium." },
    { term: "Heat of fusion", definition: "The energy needed to melt one gram (or mole) of a solid at its melting point. For water, $334\\ \\text{J/g}$." },
    { term: "Heat of vaporization", definition: "The energy needed to vaporize one gram (or mole) of a liquid at its boiling point. For water, $2260\\ \\text{J/g}$." },
  ],
  concepts: [
    {
      id: "chem10-u2-intermolecular-forces",
      title: "London dispersion, dipole-dipole and hydrogen bonding",
      skill: "Identify the intermolecular forces in a substance and explain boiling point, solubility and surface tension.",
      lesson: {
        sections: [
          {
            heading: "Three kinds of intermolecular force",
            body: "Intermolecular forces (IMFs) act **between** molecules. They are weaker than the bonds **within** molecules, which is why boiling a liquid does not break its molecules apart.\n\n- **London dispersion forces**: present in every substance. Electrons shift randomly and create temporary dipoles. They get stronger as the number of electrons (molar mass and size) increases. They are the only IMF in nonpolar molecules such as $\\text{CH}_4$, $\\text{I}_2$ and the noble gases.\n- **Dipole-dipole forces**: between permanently polar molecules such as $\\text{HCl}$ and $\\text{CH}_3\\text{Cl}$.\n- **Hydrogen bonding**: an especially strong dipole-dipole attraction. It needs H bonded directly to N, O or F. Examples: $\\text{H}_2\\text{O}$, $\\text{NH}_3$, $\\text{HF}$, alcohols.",
          },
          {
            heading: "Effects on physical properties",
            body: "**Boiling point**: stronger IMFs mean more energy is needed to separate molecules, so the boiling point is higher. Compare molecules of similar size by IMF type; for the same IMF type, the larger molecule boils higher. Water ($100\\ ^\\circ\\text{C}$) boils far higher than $\\text{H}_2\\text{S}$ ($-60\\ ^\\circ\\text{C}$) because of hydrogen bonding.\n\n**Solubility**: \"like dissolves like.\" Polar and ionic substances dissolve in polar solvents such as water; nonpolar substances dissolve in nonpolar solvents such as hexane. Oil and water do not mix.\n\n**Surface tension**: molecules at the surface of a liquid are pulled inward by their neighbors. Strong IMFs, such as hydrogen bonds in water, give high surface tension, which lets small insects walk on water and makes droplets bead up.",
          },
        ],
        keyFormulas: [
          { name: "Strength order", statement: "dispersion (weakest, all molecules) < dipole-dipole < hydrogen bonding" },
          { name: "Hydrogen bond requirement", statement: "H bonded to N, O or F" },
          { name: "Solubility rule", statement: "like dissolves like" },
        ],
        workedExample: {
          problem: "Identify the strongest intermolecular force in each of $\\text{CH}_3\\text{OH}$ and $\\text{CH}_4$, and say which has the higher boiling point.",
          solution: "$\\text{CH}_3\\text{OH}$ has an H bonded to O, so it forms hydrogen bonds. $\\text{CH}_4$ is nonpolar, so it has only London dispersion forces. Hydrogen bonds are much stronger, so $\\text{CH}_3\\text{OH}$ has the higher boiling point (about $65\\ ^\\circ\\text{C}$ compared with $-162\\ ^\\circ\\text{C}$).",
        },
      },
      questions: [
        {
          id: "chem10-u2-intermolecular-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance can form hydrogen bonds with other molecules of the same substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{CH}_4$" },
              { id: "b", text: "$\\text{HCl}$" },
              { id: "c", text: "$\\text{NH}_3$" },
              { id: "d", text: "$\\text{CH}_3\\text{Cl}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrogen bond", statement: "Requires H bonded directly to N, O or F." },
            ],
            steps: [
              { reasoning: "Only $\\text{NH}_3$ has hydrogen bonded directly to nitrogen. In $\\text{HCl}$ the H is bonded to Cl, and $\\text{CH}_4$ and $\\text{CH}_3\\text{Cl}$ have H bonded only to C.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\text{NH}_3$",
            commonErrors: ["Choosing $\\text{HCl}$ because it contains hydrogen; the hydrogen must be bonded to N, O or F.", "Choosing $\\text{CH}_3\\text{Cl}$ because it is polar."],
            examinerNote: "B1 for $\\text{NH}_3$.",
          },
        },
        {
          id: "chem10-u2-intermolecular-forces-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the strongest intermolecular force between molecules of each substance.\n\n(i) $\\text{Br}_2$\n\n(ii) $\\text{HBr}$\n\n(iii) $\\text{HF}$",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Identifying IMFs", statement: "Nonpolar: dispersion only. Polar: dipole-dipole. H bonded to N, O or F: hydrogen bonding." },
            ],
            steps: [
              { reasoning: "$\\text{Br}_2$ is nonpolar, so only London dispersion forces.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{HBr}$ is polar but the H is not bonded to N, O or F: dipole-dipole.", marks: 1, markCode: "B" },
              { reasoning: "$\\text{HF}$ has H bonded to F: hydrogen bonding.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(i) London dispersion (ii) dipole-dipole (iii) hydrogen bonding",
            commonErrors: ["Saying $\\text{Br}_2$ has no intermolecular forces.", "Giving hydrogen bonding for $\\text{HBr}$."],
            examinerNote: "B1 each. Allow 'van der Waals' for dispersion in (i) only.",
          },
        },
        {
          id: "chem10-u2-intermolecular-forces-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The boiling points of the Group 17 hydrogen halides are: $\\text{HCl}$ $-85\\ ^\\circ\\text{C}$, $\\text{HBr}$ $-67\\ ^\\circ\\text{C}$, $\\text{HI}$ $-35\\ ^\\circ\\text{C}$, but $\\text{HF}$ is $+20\\ ^\\circ\\text{C}$.\n\nExplain (i) the trend from $\\text{HCl}$ to $\\text{HI}$ and (ii) why $\\text{HF}$ does not follow it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dispersion strength", statement: "London dispersion forces increase with the number of electrons." },
              { kind: "definition", name: "Hydrogen bond", statement: "Strong attraction between H bonded to F, O or N and a lone pair on a neighboring molecule." },
            ],
            steps: [
              { reasoning: "From $\\text{HCl}$ to $\\text{HI}$ the molecules have more electrons, so London dispersion forces get stronger.", marks: 1, markCode: "B" },
              { reasoning: "Stronger forces need more energy to separate the molecules, so the boiling point rises.", marks: 1, markCode: "R" },
              { reasoning: "$\\text{HF}$ has H bonded to the very electronegative F, so molecules form hydrogen bonds.", marks: 1, markCode: "B" },
              { reasoning: "Hydrogen bonds are stronger than the dispersion and dipole forces in the others, so $\\text{HF}$ has an unexpectedly high boiling point.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(i) More electrons in larger molecules give stronger dispersion forces. (ii) HF forms hydrogen bonds, which are stronger.",
            commonErrors: ["Saying that covalent bonds break when a liquid boils.", "Saying that HF has the largest molar mass."],
            examinerNote: "Allow 'larger electron cloud / more polarizable'. Reject any answer saying the H-F bond is broken on boiling.",
          },
        },
        {
          id: "chem10-u2-intermolecular-forces-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates substances with similar molar masses.\n\n| Substance | Molar mass (g/mol) | Boiling point (degrees C) |\n| --- | --- | --- |\n| Butane, $\\text{C}_4\\text{H}_{10}$ | 58 | $-1$ |\n| Propanone, $\\text{CH}_3\\text{COCH}_3$ | 58 | 56 |\n| Propan-1-ol, $\\text{C}_3\\text{H}_7\\text{OH}$ | 60 | 97 |",
          parts: [
            { label: "a", prompt: "Name the strongest intermolecular force in butane.", marks: 1 },
            { label: "b", prompt: "Explain why propan-1-ol has a higher boiling point than propanone.", marks: 3 },
            { label: "c", prompt: "Predict, with a reason, whether butane or propan-1-ol is more soluble in water.", marks: 2 },
            { label: "d", prompt: "Suggest why the student compared substances with similar molar masses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "IMF strength", statement: "dispersion < dipole-dipole < hydrogen bonding, for molecules of similar size." },
              { kind: "principle", name: "Like dissolves like", statement: "Polar or hydrogen-bonding substances dissolve in water; nonpolar substances do not." },
              { kind: "skill", name: "Control variables", statement: "To compare the effect of one factor, keep other factors that affect the result constant." },
            ],
            steps: [
              { part: "a", reasoning: "Butane is nonpolar: London dispersion forces.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Propan-1-ol has an O-H group, so its molecules form hydrogen bonds.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Propanone has no H bonded to O, N or F, so it has only dipole-dipole and dispersion forces.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Hydrogen bonds are stronger, so more energy is needed to separate the molecules, giving a higher boiling point.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Propan-1-ol is more soluble in water.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Its O-H group forms hydrogen bonds with water, whereas butane is nonpolar and cannot (like dissolves like).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "London dispersion forces depend on molecular size and number of electrons.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Keeping molar mass similar controls this variable, so differences in boiling point are due to the type of force.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) London dispersion (b) Propan-1-ol forms hydrogen bonds, which are stronger than propanone's dipole-dipole forces (c) Propan-1-ol; it can hydrogen bond with water (d) To keep dispersion forces similar so the effect of IMF type is isolated.",
            commonErrors: ["Saying hydrogen bonds are bonds within the molecule.", "Saying propanone cannot be polar; its C=O bond is polar."],
            examinerNote: "(b) Allow 'stronger intermolecular forces' for the final mark if hydrogen bonding is already credited.",
          },
        },
      ],
    },
    {
      id: "chem10-u2-states-phase-diagrams",
      title: "Solids, liquids, gases, phase diagrams and heating curves",
      skill: "Describe the states of matter, read phase diagrams and calculate heat for each segment of a heating curve.",
      lesson: {
        sections: [
          {
            heading: "Properties of the states",
            body: "- **Solid**: particles vibrate in fixed positions; definite shape and volume; almost incompressible.\n- **Liquid**: particles are close together but slide past each other; definite volume, shape of the container; almost incompressible.\n- **Gas**: particles are far apart and move freely; no fixed shape or volume; compressible.\n\nThe stronger the IMFs, the higher the melting and boiling points.",
          },
          {
            heading: "Phase diagrams",
            body: "A phase diagram plots pressure (vertical) against temperature (horizontal). Regions show the stable phase. Lines show where two phases are in equilibrium (melting, boiling and sublimation lines). At the **triple point** all three phases coexist; for water this is $0.01\\ ^\\circ\\text{C}$ and $0.006\\ \\text{atm}$. At the **critical point** (water: $374\\ ^\\circ\\text{C}$, $218\\ \\text{atm}$) the liquid and gas become a single supercritical fluid.\n\nFor most substances the solid-liquid line slopes up and to the right. Water is unusual: its line slopes slightly up and to the **left**, because ice is less dense than liquid water, so raising pressure can melt ice.",
          },
          {
            heading: "Heating curves",
            body: "On a heating curve (temperature against energy added), sloped sections are one phase warming and flat sections are phase changes, where energy goes into overcoming IMFs and the temperature stays constant.\n\nSloped section: $q = mc\\Delta T$. Flat section: $q = m\\Delta H$.\n\nFor water: $c_{\\text{ice}} = 2.09\\ \\text{J/(g·°C)}$, $c_{\\text{water}} = 4.18\\ \\text{J/(g·°C)}$, $\\Delta H_{\\text{fus}} = 334\\ \\text{J/g}$, $\\Delta H_{\\text{vap}} = 2260\\ \\text{J/g}$.",
          },
        ],
        keyFormulas: [
          { name: "Heating one phase", statement: "$q = mc\\Delta T$" },
          { name: "Phase change", statement: "$q = m\\Delta H_{\\text{fus}}$ or $q = m\\Delta H_{\\text{vap}}$ (temperature constant)" },
          { name: "Water constants", statement: "$334\\ \\text{J/g}$ fusion; $2260\\ \\text{J/g}$ vaporization; $4.18\\ \\text{J/(g·°C)}$ liquid" },
        ],
        workedExample: {
          problem: "How much energy is needed to melt 50.0 g of ice at $0\\ ^\\circ\\text{C}$ and then warm the liquid to $20.0\\ ^\\circ\\text{C}$?",
          solution: "Melting: $q_1 = m\\Delta H_{\\text{fus}} = 50.0 \\times 334 = 16\\,700\\ \\text{J}$. Warming: $q_2 = mc\\Delta T = 50.0 \\times 4.18 \\times 20.0 = 4180\\ \\text{J}$. Total: $16\\,700 + 4180 = 20\\,880\\ \\text{J}$, about $2.09 \\times 10^4\\ \\text{J}$.",
        },
      },
      questions: [
        {
          id: "chem10-u2-states-phase-diagrams-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a heating curve, what is happening to the particles during a flat (horizontal) section?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The kinetic energy of the particles is increasing." },
              { id: "b", text: "Energy is overcoming intermolecular forces during a phase change." },
              { id: "c", text: "Covalent bonds within the molecules are breaking." },
              { id: "d", text: "The substance is not absorbing any energy." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phase change", statement: "During a phase change the added energy changes potential energy by overcoming IMFs, so temperature stays constant." },
            ],
            steps: [
              { reasoning: "The temperature is constant, so average kinetic energy is not changing. The energy absorbed is used to overcome intermolecular forces.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Energy is overcoming intermolecular forces during a phase change.",
            commonErrors: ["Choosing (a): kinetic energy changes only on the sloped sections.", "Choosing (d): energy is still being added."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u2-states-phase-diagrams-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the energy needed to melt 25.0 g of ice at $0\\ ^\\circ\\text{C}$ (the heat of fusion of water is $334\\ \\text{J/g}$). Give your answer in joules to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Energy", answer: 8350, tolerance: 5, unit: "J" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heat of fusion", statement: "$q = m\\Delta H_{\\text{fus}}$" },
            ],
            steps: [
              { reasoning: "Use the phase-change equation, since the temperature stays at $0\\ ^\\circ\\text{C}$.", working: "q = m\\Delta H_{\\text{fus}}", marks: 1, markCode: "M" },
              { reasoning: "Substitute.", working: "q = 25.0 \\times 334", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "q = 8350\\ \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8350\\ \\text{J}$ ($8.35\\ \\text{kJ}$)",
            commonErrors: ["Using $mc\\Delta T$, which does not apply at a constant temperature.", "Using the heat of vaporization."],
            examinerNote: "Allow $8.35 \\times 10^3\\ \\text{J}$ or 8.35 kJ. Allow ecf for the substitution mark.",
          },
        },
        {
          id: "chem10-u2-states-phase-diagrams-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sample of water is at a pressure of $0.0030\\ \\text{atm}$, below the triple point pressure of $0.006\\ \\text{atm}$. The temperature is raised from $-20\\ ^\\circ\\text{C}$ to $+20\\ ^\\circ\\text{C}$.\n\nDescribe what happens to the sample and explain why liquid water is never seen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phase diagram", statement: "Below the triple point pressure, a solid can change directly to a gas (sublimation) and the liquid region is not crossed." },
            ],
            steps: [
              { reasoning: "At $-20\\ ^\\circ\\text{C}$ and this low pressure the sample is a solid (ice).", marks: 1, markCode: "B" },
              { reasoning: "As temperature rises, it crosses the sublimation line and turns directly into a gas.", marks: 1, markCode: "B" },
              { reasoning: "The liquid region exists only at pressures at or above the triple point pressure.", marks: 1, markCode: "R" },
              { reasoning: "The path at $0.0030\\ \\text{atm}$ lies below the triple point, so it passes from the solid region to the gas region without entering the liquid region.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Ice sublimes to water vapor; because the pressure is below the triple point, the path never enters the liquid region.",
            commonErrors: ["Saying ice melts at $0\\ ^\\circ\\text{C}$ regardless of pressure.", "Confusing sublimation with boiling."],
            examinerNote: "Allow 'solid to gas without becoming liquid' for sublimation. Reject 'the ice melts then evaporates'.",
          },
        },
        {
          id: "chem10-u2-states-phase-diagrams-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A 20.0 g sample of ice at $-10.0\\ ^\\circ\\text{C}$ is heated at constant pressure of 1 atm until it becomes steam at $100\\ ^\\circ\\text{C}$. Use: $c_{\\text{ice}} = 2.09\\ \\text{J/(g·°C)}$, $c_{\\text{water}} = 4.18\\ \\text{J/(g·°C)}$, $\\Delta H_{\\text{fus}} = 334\\ \\text{J/g}$, $\\Delta H_{\\text{vap}} = 2260\\ \\text{J/g}$.",
          parts: [
            { label: "a", prompt: "Calculate the energy needed to warm the ice from $-10.0\\ ^\\circ\\text{C}$ to $0\\ ^\\circ\\text{C}$, in joules.", marks: 2 },
            { label: "b", prompt: "Calculate the energy needed to melt the ice, in joules.", marks: 1 },
            { label: "c", prompt: "Calculate the energy needed to warm the liquid water from $0\\ ^\\circ\\text{C}$ to $100\\ ^\\circ\\text{C}$, in joules.", marks: 2 },
            { label: "d", prompt: "Calculate the energy needed to vaporize the water at $100\\ ^\\circ\\text{C}$, in joules.", marks: 1 },
            { label: "e", prompt: "Calculate the total energy, in joules, and state which stage needs the most energy and why.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Heating one phase", statement: "$q = mc\\Delta T$" },
              { kind: "formula", name: "Phase change", statement: "$q = m\\Delta H$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute into $q = mc\\Delta T$ with $\\Delta T = 10.0$.", working: "q = 20.0 \\times 2.09 \\times 10.0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "q = 418\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Melting at $0\\ ^\\circ\\text{C}$.", working: "q = 20.0 \\times 334 = 6680\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute with $\\Delta T = 100$.", working: "q = 20.0 \\times 4.18 \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "q = 8360\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Vaporizing at $100\\ ^\\circ\\text{C}$.", working: "q = 20.0 \\times 2260 = 45\\,200\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Add the four stages.", working: "418 + 6680 + 8360 + 45\\,200", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Total.", working: "= 60\\,658\\ \\text{J}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Vaporization needs the most energy because the molecules must be completely separated, overcoming essentially all intermolecular (hydrogen) bonds.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 418 J (b) 6680 J (c) 8360 J (d) 45 200 J (e) 60 658 J (about $6.07 \\times 10^4$ J); vaporization needs the most because all the hydrogen bonds between molecules are overcome.",
            commonErrors: ["Using $c_{\\text{water}}$ for the ice stage.", "Using $mc\\Delta T$ for the phase changes.", "Forgetting a stage when adding."],
            examinerNote: "Allow ecf for the total from incorrect stages. In (e) accept the total to 3 significant figures (60 700 J).",
          },
        },
      ],
    },
  ],
};
