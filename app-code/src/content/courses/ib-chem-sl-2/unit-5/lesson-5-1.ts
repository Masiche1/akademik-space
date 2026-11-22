import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "chemsl-u5-lesson-5-1",
  code: "5-1",
  title: "Enthalpy Changes and Hess's Law",
  goal: "I CAN interpret enthalpy changes and energy profiles, and use Hess's law and enthalpies of formation to calculate enthalpy changes of reactions.",
  standards: ["Paper 1", "Paper 2", "Topic 5.1", "Topic 5.2"],
  vocabulary: [
    { term: "Enthalpy change ($\\Delta H$)", definition: "The heat energy change of a reaction at constant pressure, $H_{\\text{products}} - H_{\\text{reactants}}$; negative for exothermic, positive for endothermic." },
    { term: "Exothermic reaction", definition: "A reaction that releases energy to the surroundings, so $\\Delta H < 0$; products are lower in energy than reactants." },
    { term: "Endothermic reaction", definition: "A reaction that absorbs energy from the surroundings, so $\\Delta H > 0$; products are higher in energy than reactants." },
    { term: "Standard conditions", definition: "298 K (25 °C), pressure of 100 kPa, and, for solutions, concentration of 1 mol dm$^{-3}$; denoted by the superscript $\\theta$." },
    { term: "Standard enthalpy of formation ($\\Delta H_f^\\theta$)", definition: "The enthalpy change when one mole of a compound is formed from its elements in their standard states." },
    { term: "Hess's law", definition: "The enthalpy change of a reaction is the same regardless of the route taken, provided the initial and final states are the same." },
  ],
  concepts: [
    {
      id: "chemsl-u5-enthalpy",
      title: "Enthalpy changes and energy profiles",
      skill: "Interpret the sign and meaning of enthalpy changes, identify exothermic and endothermic reactions, and read energy profiles.",
      lesson: {
        sections: [
          {
            heading: "Enthalpy and its sign",
            body: "Enthalpy $H$ is the heat content of a system at constant pressure. The **enthalpy change** of a reaction is $\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$. In an **exothermic** reaction energy flows out to the surroundings, so $\\Delta H$ is negative (products lower in energy). In an **endothermic** reaction energy is absorbed, so $\\Delta H$ is positive (products higher in energy). Examples: combustion and neutralisation are exothermic; thermal decomposition of calcium carbonate and photosynthesis are endothermic.",
          },
          {
            heading: "Standard enthalpy changes",
            body: "Standard enthalpy changes are measured under **standard conditions**: $298$ K, $100$ kPa and $1$ mol dm$^{-3}$ for solutions. Key types include $\\Delta H_c^\\theta$ (combustion of one mole of fuel in oxygen), $\\Delta H_f^\\theta$ (formation of one mole of compound from its elements) and $\\Delta H_n^\\theta$ (neutralisation of one mole of $\\mathrm{H}^+$ by one mole of $\\mathrm{OH}^-$). For elements in their standard states, $\\Delta H_f^\\theta = 0$.",
          },
          {
            heading: "Energy profiles",
            body: "An **energy profile** plots energy against the progress of the reaction. Reactants start at their energy level and must climb to an **activation energy** $E_a$ peak before products form. For an exothermic reaction the products sit below the reactants and $\\Delta H$ is the downward difference; for an endothermic reaction they sit above and $\\Delta H$ is the upward difference. $E_a$ is measured from the reactant level to the peak.",
          },
        ],
        keyFormulas: [
          { name: "Enthalpy change", statement: "$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$" },
          { name: "Sign convention", statement: "Exothermic: $\\Delta H < 0$; endothermic: $\\Delta H > 0$" },
          { name: "Enthalpy from calorimetry", statement: "$\\Delta H = -\\dfrac{q}{n}$, where $q = mc\\Delta T$ is heat released" },
        ],
        workedExample: {
          problem: "The combustion of methane has $\\Delta H_c^\\theta = -890$ kJ mol$^{-1}$, while the thermal decomposition of calcium carbonate, $\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2$, has $\\Delta H = +178$ kJ mol$^{-1}$. For each reaction state whether it is exothermic or endothermic and describe the relative positions of reactants and products on an energy profile.",
          solution: "Combustion of methane: $\\Delta H < 0$, exothermic — products sit below reactants and energy is released. Decomposition of calcium carbonate: $\\Delta H > 0$, endothermic — products sit above reactants and energy is absorbed.",
        },
      },
      questions: [
        {
          id: "chemsl-u5-enthalpy-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For an exothermic reaction, which statement about the enthalpy change $\\Delta H$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta H$ is positive because energy is released to the surroundings" },
              { id: "b", text: "$\\Delta H$ is negative because energy is released to the surroundings" },
              { id: "c", text: "$\\Delta H$ is negative because energy is absorbed from the surroundings" },
              { id: "d", text: "$\\Delta H$ is always zero for combustion reactions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "Releases energy to the surroundings, so $\\Delta H = H_{\\text{products}} - H_{\\text{reactants}} < 0$." },
            ],
            steps: [
              { reasoning: "Exothermic means energy leaves the system, so the products have lower enthalpy than the reactants.", working: "\\Delta H < 0", marks: 1, markCode: "M" },
              { reasoning: "Option (c) describes an endothermic reaction; option (d) is false since combustion has a large negative $\\Delta H$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** $\\Delta H$ is negative because energy is released to the surroundings",
            commonErrors: ["Reversing the sign convention — thinking exothermic means positive $\\Delta H$."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which statement correctly defines the standard enthalpy of combustion, $\\Delta H_c^\\theta$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enthalpy change when any amount of fuel burns in any conditions" },
              { id: "b", text: "The enthalpy change when one mole of a substance is formed from its elements in their standard states" },
              { id: "c", text: "The enthalpy change when one mole of water is formed from $\\mathrm{H}^+$ and $\\mathrm{OH}^-$ ions" },
              { id: "d", text: "The enthalpy change when one mole of a substance reacts completely with oxygen under standard conditions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard enthalpy of combustion", statement: "Enthalpy change when one mole of a substance burns completely in oxygen at $298$ K and $100$ kPa." },
              { kind: "definition", name: "Standard enthalpy of formation", statement: "Enthalpy change forming one mole of compound from its elements in standard states — this is option (b)." },
            ],
            steps: [
              { reasoning: "The definition requires complete combustion in oxygen, one mole of fuel, and standard conditions.", working: "\\text{1 mol fuel} + \\mathrm{O}_2 \\rightarrow \\text{oxides},\\ 298\\ \\text{K},\\ 100\\ \\text{kPa}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) defines $\\Delta H_f^\\theta$; option (c) defines enthalpy of neutralisation.", marks: 1, markCode: "R" },
              { reasoning: "Option (d) omits the standard conditions and the per-mole requirement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The enthalpy change when one mole of a substance reacts completely with oxygen under standard conditions",
            commonErrors: ["Confusing enthalpy of combustion with enthalpy of formation."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For a certain reaction, the activation energy is $80$ kJ mol$^{-1}$ and the enthalpy change is $\\Delta H = +30$ kJ mol$^{-1}$. Which statement about the energy profile is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enthalpy change equals $80$ kJ mol$^{-1}$ because that is the activation energy" },
              { id: "b", text: "The products are $30$ kJ mol$^{-1}$ above the reactants, and the peak of the profile is $80$ kJ mol$^{-1}$ above the reactants" },
              { id: "c", text: "The products are $30$ kJ mol$^{-1}$ below the reactants, and the peak is $80$ kJ mol$^{-1}$ above the reactants" },
              { id: "d", text: "The activation energy equals $30$ kJ mol$^{-1}$ because that is the enthalpy change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy profile", statement: "$E_a$ is the energy from the reactant level to the peak; $\\Delta H$ is the energy difference between products and reactants." },
            ],
            steps: [
              { reasoning: "$\\Delta H = +30$ kJ mol$^{-1}$ is positive, so products are higher than reactants — an endothermic reaction.", working: "\\Delta H > 0 \\Rightarrow \\text{products above reactants}", marks: 1, markCode: "M" },
              { reasoning: "The activation energy is measured from the reactant level to the highest point of the profile.", working: "E_a = 80\\ \\text{kJ mol}^{-1}\\ \\text{above reactants}", marks: 1, markCode: "M" },
              { reasoning: "$E_a$ and $\\Delta H$ are independent quantities; neither equals the other here.", marks: 1, markCode: "R" },
              { reasoning: "Only option (a) states both positions correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Products $30$ kJ mol$^{-1}$ above reactants; peak $80$ kJ mol$^{-1}$ above reactants",
            commonErrors: ["Confusing $E_a$ with $\\Delta H$.", "Thinking a positive $\\Delta H$ means products are lower in energy."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A chemist studies three reactions: (i) the combustion of methane, (ii) the thermal decomposition of calcium carbonate $\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2$, and (iii) the neutralisation of hydrochloric acid by sodium hydroxide.",
          parts: [
            { label: "a", prompt: "Define enthalpy change $\\Delta H$ and state the sign convention for exothermic and endothermic reactions.", marks: 2 },
            { label: "b", prompt: "For each of the three reactions, state whether it is exothermic or endothermic.", marks: 2 },
            { label: "c", prompt: "Describe the positions of reactants, the activation energy peak and the products on the energy profile of an endothermic reaction.", marks: 2 },
            { label: "d", prompt: "Explain why the enthalpy of neutralisation is approximately the same for any strong acid reacting with any strong base.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enthalpy change", statement: "$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$ at constant pressure." },
              { kind: "definition", name: "Energy profile", statement: "Reactants climb to an $E_a$ peak; products sit above (endothermic) or below (exothermic) reactants." },
              { kind: "principle", name: "Neutralisation", statement: "Strong acids and bases are fully ionised, so neutralisation is essentially $\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O}$ in every case." },
            ],
            steps: [
              { part: "a", reasoning: "$\\Delta H$ is the heat energy change at constant pressure, products minus reactants.", working: "\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Exothermic $\\Delta H < 0$; endothermic $\\Delta H > 0$.", working: "\\text{exo} < 0 < \\text{endo}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Combustion and neutralisation release heat; decomposition of calcium carbonate absorbs heat.", working: "\\text{(i) exo, (ii) endo, (iii) exo}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Reactants at a lower level, a peak $E_a$ above them, and products above the reactant level.", working: "\\text{reactants} \\rightarrow E_a \\text{ peak} \\rightarrow \\text{products higher than reactants}", marks: 2, markCode: "R" },
              { part: "d", reasoning: "In strong acid–strong base neutralisation the only species reacting are $\\mathrm{H}^+$ and $\\mathrm{OH}^-$ ions; the spectator ions differ but do not affect the energy change.", working: "\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Hence $\\Delta H_n^\\theta \\approx -57$ kJ mol$^{-1}$ regardless of which strong acid and base are used.", working: "\\Delta H_n^\\theta \\approx -57\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$; exothermic negative, endothermic positive (b) (i) exothermic (ii) endothermic (iii) exothermic (c) products above reactants with an $E_a$ peak between (d) all strong acid–base neutralisations are effectively $\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H}_2\\mathrm{O}$",
            commonErrors: ["Classifying decomposition of calcium carbonate as exothermic.", "Claiming different strong acids give different neutralisation enthalpies because of the spectator ions."],
            examinerNote: "Award M1 for the definition and A1 for both signs in (a); A1 for two correct classifications and A1 for all three in (b); R1 for each correct feature of the profile in (c); M1 for identifying the net ionic equation and A1 for the constant value in (d).",
          },
        },
        {
          id: "chemsl-u5-enthalpy-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction absorbs $25$ kJ of energy from the surroundings for each mole of reaction as written. What are the sign of $\\Delta H$ and the direction of energy transfer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\Delta H$ is positive and energy is absorbed from the surroundings" },
              { id: "b", text: "$\\Delta H$ is negative and energy is absorbed from the surroundings" },
              { id: "c", text: "$\\Delta H$ is positive and energy is released to the surroundings" },
              { id: "d", text: "$\\Delta H$ is negative and energy is released to the surroundings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enthalpy change", statement: "$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$; positive for endothermic reactions." },
            ],
            steps: [
              { reasoning: "Absorbing energy from the surroundings makes the reaction endothermic.", working: "\\Delta H > 0", marks: 1, markCode: "M" },
              { reasoning: "Energy must flow into the system for an endothermic reaction.", working: "q_{\\text{system}} > 0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\Delta H$ is positive and energy is absorbed from the surroundings",
            commonErrors: ["Confusing energy absorbed by the system with energy released to the surroundings."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When $0.50$ mol of a fuel burns completely it releases $445$ kJ of energy to the surroundings. Calculate the molar enthalpy of combustion of the fuel.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_c$", answer: -890, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enthalpy of combustion", statement: "$\\Delta H_c$ is the enthalpy change when one mole of fuel burns completely in oxygen; exothermic values are negative." },
            ],
            steps: [
              { reasoning: "Divide the energy released by the amount of fuel.", working: "\\Delta H_c = -\\frac{445}{0.50}", marks: 1, markCode: "M" },
              { reasoning: "The combustion is exothermic, so the answer is negative.", working: "\\Delta H_c = -890\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-890$ kJ mol$^{-1}$",
            commonErrors: ["Omitting the negative sign for an exothermic reaction.", "Dividing $0.50$ by $445$ instead of $445$ by $0.50$."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process is endothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Freezing of water" },
              { id: "b", text: "Melting of ice" },
              { id: "c", text: "Condensation of steam onto a cold surface" },
              { id: "d", text: "Complete combustion of methane" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endothermic", statement: "A process that absorbs energy from the surroundings has $\\Delta H > 0$." },
            ],
            steps: [
              { reasoning: "Melting requires energy to overcome the intermolecular forces holding the solid together.", working: "\\text{ice} \\rightarrow \\text{water},\\ \\Delta H > 0", marks: 1, markCode: "M" },
              { reasoning: "Freezing, condensation and combustion all release energy to the surroundings and are exothermic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Melting of ice",
            commonErrors: ["Thinking any change of state is endothermic — freezing and condensation are exothermic."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An energy profile for a reaction shows reactants at $0$ kJ mol$^{-1}$, a peak at $+95$ kJ mol$^{-1}$ and products at $-40$ kJ mol$^{-1}$. State the activation energy and the enthalpy change of the reaction.",
          response: {
            type: "numeric",
            parts: [
              { label: "$E_a$", answer: 95, unit: "kJ/mol" },
              { label: "$\\Delta H$", answer: -40, unit: "kJ/mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy profile", statement: "$E_a$ is measured from the reactant level to the peak; $\\Delta H$ is the difference between products and reactants." },
            ],
            steps: [
              { reasoning: "The activation energy is the height of the peak above the reactant level.", working: "E_a = 95 - 0 = 95\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "The enthalpy change is products minus reactants.", working: "\\Delta H = -40 - 0 = -40\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "The negative sign means the reaction is exothermic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E_a = 95$ kJ mol$^{-1}$; $\\Delta H = -40$ kJ mol$^{-1}$ (exothermic)",
            commonErrors: ["Measuring $E_a$ from the products instead of the reactants.", "Giving $\\Delta H = +40$ by subtracting in the wrong order."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The thermal decomposition of calcium carbonate, $\\mathrm{CaCO}_3 \\rightarrow \\mathrm{CaO} + \\mathrm{CO}_2$, has $\\Delta H = +178$ kJ mol$^{-1}$. Calculate the energy absorbed when $0.25$ mol of calcium carbonate decomposes.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy absorbed", answer: 44.5, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy per mole", statement: "Energy change for $n$ moles $= \\Delta H \\times n$." },
            ],
            steps: [
              { reasoning: "Multiply the molar enthalpy change by the amount decomposed.", working: "q = 178 \\times 0.25", marks: 1, markCode: "M" },
              { reasoning: "The reaction is endothermic so energy is absorbed, not released.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "q = 44.5\\ \\text{kJ absorbed}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$44.5$ kJ absorbed",
            commonErrors: ["Dividing by $0.25$ instead of multiplying.", "Giving a negative sign for an endothermic process."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For an exothermic reaction, which statement about the energy profile is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The products are higher in energy than the reactants, and $\\Delta H$ is the upward difference" },
              { id: "b", text: "The products are lower in energy than the reactants, and $\\Delta H$ is the downward difference between the two levels" },
              { id: "c", text: "The activation energy equals the enthalpy change" },
              { id: "d", text: "The peak of the profile lies below the level of the reactants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy profile", statement: "Exothermic: products below reactants, $\\Delta H < 0$; the peak ($E_a$) is always above the reactant level." },
            ],
            steps: [
              { reasoning: "In an exothermic reaction energy is released, so products sit below reactants on the profile.", working: "\\Delta H = H_{\\text{products}} - H_{\\text{reactants}} < 0", marks: 1, markCode: "M" },
              { reasoning: "Options (c) and (d) confuse $E_a$ with $\\Delta H$ and misplace the peak.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Products lower than reactants; $\\Delta H$ is the downward difference",
            commonErrors: ["Confusing the position of the activation energy peak with the enthalpy change."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Three processes have these enthalpy changes: combustion of ethanol, $\\Delta H_c^\\theta = -1367$ kJ mol$^{-1}$; decomposition of liquid water into hydrogen and oxygen gases, $\\Delta H = +286$ kJ mol$^{-1}$ per mole of water decomposed; and neutralisation of a strong acid by a strong base, $\\Delta H_n^\\theta \\approx -57$ kJ mol$^{-1}$.",
          parts: [
            { label: "a", prompt: "Define the standard enthalpy of combustion, $\\Delta H_c^\\theta$.", marks: 2 },
            { label: "b", prompt: "For each of the three processes, state whether it is exothermic or endothermic.", marks: 2 },
            { label: "c", prompt: "For the endothermic process, state the relative positions of reactants and products on an energy profile.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard enthalpy of combustion", statement: "Enthalpy change when one mole of a substance burns completely in oxygen at $298$ K and $100$ kPa." },
              { kind: "principle", name: "Sign of $\\Delta H$", statement: "$\\Delta H < 0$ exothermic (products lower); $\\Delta H > 0$ endothermic (products higher)." },
            ],
            steps: [
              { part: "a", reasoning: "Must state one mole of fuel, complete combustion in oxygen, and standard conditions.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Combustion and neutralisation have negative $\\Delta H$ (exothermic); decomposition of water has positive $\\Delta H$ (endothermic).", working: "\\text{exo, endo, exo}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "For the endothermic decomposition the products lie above the reactants, with an activation energy peak between them.", working: "\\text{products above reactants}", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) enthalpy change for complete combustion of one mole of fuel in oxygen under standard conditions (b) combustion exothermic, water decomposition endothermic, neutralisation exothermic (c) products above reactants with an $E_a$ peak between",
            commonErrors: ["Classifying the decomposition of water as exothermic.", "Omitting standard conditions in the definition in (a)."],
            examinerNote: "Award M1 for each correct feature of the definition in (a); A1 for two correct classifications and A1 for all three in (b); B1 for the correct profile description in (c).",
          },
        },
        {
          id: "chemsl-u5-enthalpy-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The enthalpy of combustion of methane is $\\Delta H_c^\\theta = -890$ kJ mol$^{-1}$ for the reaction $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}$. Calculate the enthalpy change for the reaction $2\\mathrm{CH}_4 + 4\\mathrm{O}_2 \\rightarrow 2\\mathrm{CO}_2 + 4\\mathrm{H}_2\\mathrm{O}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -1780, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law scaling", statement: "Multiplying a balanced equation by $k$ multiplies its enthalpy change by $k$." },
            ],
            steps: [
              { reasoning: "The second equation is exactly twice the first, so $\\Delta H$ doubles.", working: "k = 2", marks: 1, markCode: "M" },
              { reasoning: "Multiply the molar enthalpy of combustion by 2, keeping the negative sign.", working: "\\Delta H = 2 \\times (-890)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with correct sign and units.", working: "\\Delta H = -1780\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
              { reasoning: "The value is per mole of the equation as written; doubling the equation doubles the energy released.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$-1780$ kJ mol$^{-1}$",
            commonErrors: ["Giving $-890$ because the 'per mole' value is quoted.", "Forgetting that the sign stays negative when scaling."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which set of conditions defines standard conditions for measuring enthalpy changes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$298$ K, $100$ kPa and $1$ mol dm$^{-3}$ for solutions" },
              { id: "b", text: "$0$ °C, $100$ kPa and $1$ mol dm$^{-3}$ solutions" },
              { id: "c", text: "$298$ K, $100$ kPa and any reactant concentration" },
              { id: "d", text: "$273$ K, $101.3$ kPa and pure solids only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard conditions", statement: "$298$ K ($25$ °C), $100$ kPa, and $1$ mol dm$^{-3}$ for solutions; denoted by $\\theta$." },
            ],
            steps: [
              { reasoning: "Standard conditions fix temperature, pressure and solution concentration.", working: "298\\ \\text{K},\\ 100\\ \\text{kPa},\\ 1\\ \\text{mol dm}^{-3}", marks: 1, markCode: "M" },
              { reasoning: "Option (c) ignores the concentration requirement; options (b) and (d) use wrong temperatures or pressures.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $298$ K, $100$ kPa and $1$ mol dm$^{-3}$ for solutions",
            commonErrors: ["Using $273$ K ($0$ °C) instead of $298$ K.", "Forgetting the $1$ mol dm$^{-3}$ condition for solutions."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction has $\\Delta H = +84$ kJ mol$^{-1}$. What is the enthalpy change for the reverse reaction?",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_{\\text{reverse}}$", answer: -84, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Reversing a reaction", statement: "The reverse of a reaction has $\\Delta H_{\\text{reverse}} = -\\Delta H$." },
            ],
            steps: [
              { reasoning: "Reversing swaps reactants and products, so the sign of $\\Delta H$ changes.", working: "\\Delta H_{\\text{reverse}} = -(+84)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H_{\\text{reverse}} = -84\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-84$ kJ mol$^{-1}$",
            commonErrors: ["Keeping the same sign — reversing a reaction must flip the sign of $\\Delta H$."],
          },
        },
        {
          id: "chemsl-u5-enthalpy-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Methane burns according to $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}(l)$ with $\\Delta H = -890$ kJ mol$^{-1}$.",
          parts: [
            { label: "a", prompt: "State the sign of $\\Delta H$ and what it tells you about the energy of the products relative to the reactants.", marks: 2 },
            { label: "b", prompt: "Define the activation energy $E_a$ and state where it is measured on an energy profile.", marks: 2 },
            { label: "c", prompt: "Explain why this reaction is exothermic in terms of the relative stability of bonds in reactants and products.", marks: 2 },
            { label: "d", prompt: "State two conditions that must be met for an enthalpy change to be described as a standard enthalpy change.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enthalpy change", statement: "$\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$ at constant pressure." },
              { kind: "definition", name: "Activation energy", statement: "Minimum energy needed for a successful collision; measured from reactant level to the profile peak." },
              { kind: "definition", name: "Standard conditions", statement: "$298$ K, $100$ kPa and $1$ mol dm$^{-3}$ for solutions." },
            ],
            steps: [
              { part: "a", reasoning: "$\\Delta H$ is negative, so the reaction is exothermic and the products have lower enthalpy than the reactants.", working: "\\Delta H < 0 \\Rightarrow \\text{products lower}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "$E_a$ is the minimum energy particles need to react; it is the vertical distance from the reactant level to the peak of the profile.", working: "E_a = \\text{peak} - \\text{reactants}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "More energy is released forming the bonds in $\\mathrm{CO}_2$ and $\\mathrm{H}_2\\mathrm{O}$ than is needed to break the bonds in $\\mathrm{CH}_4$ and $\\mathrm{O}_2$, so the products are more stable.", working: "\\sum E_{\\text{formed}} > \\sum E_{\\text{broken}} \\Rightarrow \\Delta H < 0", marks: 2, markCode: "B" },
              { part: "d", reasoning: "Any two of: temperature $298$ K, pressure $100$ kPa, solution concentration $1$ mol dm$^{-3}$.", working: "298\\ \\text{K};\\ 100\\ \\text{kPa};\\ 1\\ \\text{mol dm}^{-3}", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) $\\Delta H < 0$; products lower in energy than reactants (b) minimum collision energy, reactant level to profile peak (c) stronger bonds formed in products release more energy than breaking reactant bonds requires (d) e.g. $298$ K and $100$ kPa (and $1$ mol dm$^{-3}$ for solutions)",
            commonErrors: ["Describing $E_a$ as the energy difference between products and reactants.", "Listing only one standard condition when two are required."],
            examinerNote: "Award M1 for the sign and A1 for the correct energy comparison in (a); M1 for the definition and A1 for the measurement in (b); B1 for the bond-energy explanation and B1 for the stability conclusion in (c); A1 for each correct condition up to 2 marks in (d).",
          },
        },
        {
          id: "chemsl-u5-enthalpy-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "For the formation of ammonia, $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$, the enthalpy change for the equation as written is $\\Delta H = -92$ kJ mol$^{-1}$.",
          parts: [
            { label: "a", prompt: "Calculate the enthalpy change when $0.50$ mol of $\\mathrm{NH}_3$ is formed.", marks: 3 },
            { label: "b", prompt: "State whether this scaled-down reaction is exothermic or endothermic and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Enthalpy scales with amount", statement: "The enthalpy change for a fraction of the equation as written scales by the same fraction." },
              { kind: "definition", name: "Exothermic", statement: "$\\Delta H < 0$; energy is released to the surroundings." },
            ],
            steps: [
              { part: "a", reasoning: "The equation produces $2$ mol of $\\mathrm{NH}_3$, so forming $0.50$ mol is one quarter of the reaction as written.", working: "\\frac{0.50}{2} = 0.25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Scale the enthalpy change by $0.25$.", working: "\\Delta H = 0.25 \\times (-92)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate with the correct sign.", working: "\\Delta H = -23\\ \\text{kJ}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The scaled enthalpy is still negative, so the process remains exothermic and releases energy.", working: "\\Delta H = -23\\ \\text{kJ} < 0", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) $-23$ kJ (b) exothermic, because $\\Delta H$ remains negative",
            commonErrors: ["Using $0.50$ mol directly instead of recognising the equation makes $2$ mol of $\\mathrm{NH}_3$.", "Dropping the negative sign."],
            examinerNote: "Award M1 for the $0.25$ ratio, M1 for the multiplication and A1 for $-23$ kJ in (a); B1 for the correct classification and B1 for linking it to the negative sign in (b).",
          },
        },
      ],
    },
    {
      id: "chemsl-u5-hess",
      title: "Hess's law and enthalpies of formation",
      skill: "Construct Hess cycles and calculate reaction enthalpies from enthalpies of formation and combustion.",
      lesson: {
        sections: [
          {
            heading: "Hess's law",
            body: "**Hess's law** states that the enthalpy change of a reaction depends only on the initial and final states, not on the path taken. This allows an indirect route to be used: if reaction A has $\\Delta H_1$ and reaction B has $\\Delta H_2$, a third reaction can be found by adding, reversing or scaling known equations. Reversing a reaction reverses the sign of $\\Delta H$; multiplying an equation by $k$ multiplies $\\Delta H$ by $k$.",
          },
          {
            heading: "Enthalpies of formation",
            body: "The enthalpy change of any reaction can be calculated from standard enthalpies of formation: $\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$, with each $\\Delta H_f^\\theta$ multiplied by its coefficient in the balanced equation. Elements in their standard states have $\\Delta H_f^\\theta = 0$, which is why oxygen, nitrogen and carbon (graphite) often drop out of the calculation.",
          },
          {
            heading: "Enthalpies of combustion in cycles",
            body: "A Hess cycle using combustion enthalpies works because every substance can be burned to the same products (usually $\\mathrm{CO}_2$ and $\\mathrm{H}_2\\mathrm{O}$). For example, to find $\\Delta H$ for $\\mathrm{C}(s) + \\tfrac{1}{2}\\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}(g)$: burn carbon to $\\mathrm{CO}_2$ ($\\Delta H = -394$ kJ mol$^{-1}$), then reverse the combustion of CO ($+283$ kJ mol$^{-1}$) to go from $\\mathrm{CO}_2$ back to CO. Adding gives $-394 + 283 = -111$ kJ mol$^{-1}$.",
          },
        ],
        keyFormulas: [
          { name: "Hess's law", statement: "$\\Delta H$ is independent of the reaction path between the same initial and final states" },
          { name: "From enthalpies of formation", statement: "$\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$" },
          { name: "Sign and scale rules", statement: "Reverse reaction: $-\\Delta H$; multiply equation by $k$: $\\Delta H \\times k$" },
        ],
        workedExample: {
          problem: "Given $\\Delta H_c^\\theta$ values: $\\mathrm{C}(s) + \\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}_2(g)$, $\\Delta H = -394$ kJ mol$^{-1}$; $\\mathrm{CO}(g) + \\tfrac{1}{2}\\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}_2(g)$, $\\Delta H = -283$ kJ mol$^{-1}$. Calculate $\\Delta H$ for $\\mathrm{C}(s) + \\tfrac{1}{2}\\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}(g)$.",
          solution: "Target = (carbon combustion) − (CO combustion), because the target burns carbon only as far as CO. $\\Delta H = -394 - (-283) = -111$ kJ mol$^{-1}$.",
        },
      },
      questions: [
        {
          id: "chemsl-u5-hess-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What does Hess's law state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All exothermic reactions have the same enthalpy change" },
              { id: "b", text: "The enthalpy change depends on the number of steps in the reaction mechanism" },
              { id: "c", text: "The enthalpy change equals the activation energy of the reaction" },
              { id: "d", text: "The enthalpy change of a reaction is the same regardless of the route taken between the same initial and final states" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law", statement: "$\\Delta H$ depends only on initial and final states, not on the path." },
            ],
            steps: [
              { reasoning: "Hess's law is a consequence of enthalpy being a state function.", working: "\\Delta H_{\\text{path 1}} = \\Delta H_{\\text{path 2}}", marks: 1, markCode: "M" },
              { reasoning: "Option (d) confuses $\\Delta H$ with $E_a$; option (b) contradicts the law.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(d)** $\\Delta H$ is the same regardless of the route between the same states",
            commonErrors: ["Believing the mechanism or number of steps changes $\\Delta H$."],
          },
        },
        {
          id: "chemsl-u5-hess-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $\\Delta H_c^\\theta$ for $\\mathrm{C}(s) + \\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2$ is $-394$ kJ mol$^{-1}$ and for $\\mathrm{CO} + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2$ is $-283$ kJ mol$^{-1}$, what is $\\Delta H$ for $\\mathrm{C}(s) + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{CO}(g)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$+111$ kJ mol$^{-1}$" },
              { id: "b", text: "$-394$ kJ mol$^{-1}$" },
              { id: "c", text: "$-111$ kJ mol$^{-1}$" },
              { id: "d", text: "$-677$ kJ mol$^{-1}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law", statement: "Target $\\Delta H$ = (C combustion) + reverse of (CO combustion)." },
            ],
            steps: [
              { reasoning: "Burn carbon all the way to $\\mathrm{CO}_2$, then convert $\\mathrm{CO}_2$ back to CO by reversing the CO combustion.", working: "\\Delta H = -394 + (+283)", marks: 1, markCode: "M" },
              { reasoning: "Reversing a reaction changes the sign of its $\\Delta H$.", working: "-(-283) = +283", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -111\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $-111$ kJ mol$^{-1}$",
            commonErrors: ["Adding the two combustion enthalpies without reversing one, giving $-677$ kJ mol$^{-1}$.", "Subtracting in the wrong order or forgetting to reverse the sign of the CO combustion."],
            examinerNote: "The correct manipulation is $\\Delta H = \\Delta H_c(\\mathrm{C}) - \\Delta H_c(\\mathrm{CO})$.",
          },
        },
        {
          id: "chemsl-u5-hess-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Standard enthalpies of formation (kJ mol$^{-1}$): $\\mathrm{CH}_4(g) = -75$, $\\mathrm{CO}_2(g) = -394$, $\\mathrm{H}_2\\mathrm{O}(l) = -286$. Calculate the standard enthalpy of combustion of methane for the reaction $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}(l)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-605$ kJ mol$^{-1}$" },
              { id: "b", text: "$-819$ kJ mol$^{-1}$" },
              { id: "c", text: "$-966$ kJ mol$^{-1}$" },
              { id: "d", text: "$-891$ kJ mol$^{-1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy from formation enthalpies", statement: "$\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$." },
            ],
            steps: [
              { reasoning: "Sum the formation enthalpies of the products with their coefficients; oxygen is an element in its standard state so contributes zero.", working: "\\sum \\Delta H_f^\\theta(\\text{products}) = -394 + 2(-286) = -966", marks: 1, markCode: "M" },
              { reasoning: "Subtract the formation enthalpy of methane.", working: "\\sum \\Delta H_f^\\theta(\\text{reactants}) = -75", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "\\Delta H = -966 - (-75)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -891\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $-891$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting to multiply $\\Delta H_f^\\theta(\\mathrm{H}_2\\mathrm{O})$ by $2$ ($-605$).", "Adding instead of subtracting the reactant term ($-966$).", "Omitting the formation enthalpy of methane entirely."],
            examinerNote: "Award M1 for each correct sum, M1 for the correct subtraction and A1 for -891.",
          },
        },
        {
          id: "chemsl-u5-hess-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Standard enthalpies of formation (kJ mol$^{-1}$): $\\mathrm{CH}_4(g) = -75$, $\\mathrm{CO}_2(g) = -394$, $\\mathrm{H}_2\\mathrm{O}(l) = -286$, $\\mathrm{H}_2\\mathrm{O}(g) = -242$.",
          parts: [
            { label: "a", prompt: "Write the balanced equation for the complete combustion of methane in oxygen.", marks: 2 },
            { label: "b", prompt: "State the formula used to calculate $\\Delta H^\\theta$ from standard enthalpies of formation.", marks: 2 },
            { label: "c", prompt: "Calculate $\\Delta H_c^\\theta$ for methane when the product water is liquid.", marks: 2 },
            { label: "d", prompt: "Calculate $\\Delta H_c^\\theta$ for methane when the product water is water vapour, and state which value is more negative and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combustion products", statement: "Complete combustion of a hydrocarbon gives $\\mathrm{CO}_2$ and $\\mathrm{H}_2\\mathrm{O}$." },
              { kind: "formula", name: "Enthalpy from formation enthalpies", statement: "$\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$." },
            ],
            steps: [
              { part: "a", reasoning: "Balance carbon to $\\mathrm{CO}_2$, hydrogen to $\\mathrm{H}_2\\mathrm{O}$, then oxygen.", working: "\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "State the formation-enthalpy formula with products minus reactants.", working: "\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})", marks: 2, markCode: "R" },
              { part: "c", reasoning: "Products: $-394 + 2(-286) = -966$; reactants: $-75$; subtract.", working: "\\Delta H = -966 - (-75) = -891\\ \\text{kJ mol}^{-1}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "With water vapour, products are $-394 + 2(-242) = -878$, giving $\\Delta H = -878 - (-75) = -803$ kJ mol$^{-1}$. The liquid-water value is more negative because condensation of water vapour to liquid releases additional energy.", working: "-878 - (-75) = -803;\\quad -891 < -803", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}$ (b) $\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$ (c) $-891$ kJ mol$^{-1}$ (d) $-803$ kJ mol$^{-1}$; liquid water gives the more negative value because condensation releases energy",
            commonErrors: ["Using $\\Delta H_f^\\theta(\\mathrm{H}_2\\mathrm{O}, g)$ in part (c).", "Adding the formation enthalpies of reactants instead of subtracting."],
            examinerNote: "Award M1 for each correct balanced equation feature and A1 for the fully balanced equation in (a); R1 for the formula and R1 for stating products minus reactants in (b); A1 for each correct calculation in (c) and (d), with the explanation in (d) earning the second mark.",
          },
        },
        {
          id: "chemsl-u5-hess-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A reaction R has $\\Delta H = -150$ kJ mol$^{-1}$. What is the enthalpy change for the reverse reaction?",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_{\\text{reverse}}$", answer: 150, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Reversing a reaction", statement: "$\\Delta H_{\\text{reverse}} = -\\Delta H$ for the same amounts." },
            ],
            steps: [
              { reasoning: "Reversing the reaction swaps reactants and products, so the sign of $\\Delta H$ reverses.", working: "\\Delta H_{\\text{reverse}} = -(-150)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — the reverse reaction is endothermic.", working: "\\Delta H_{\\text{reverse}} = +150\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+150$ kJ mol$^{-1}$",
            commonErrors: ["Leaving the sign unchanged when reversing the reaction."],
          },
        },
        {
          id: "chemsl-u5-hess-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Given $\\Delta H_c^\\theta$ values: $\\mathrm{C}(s) + \\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}_2(g)$ is $-394$ kJ mol$^{-1}$ and $\\mathrm{CO}(g) + \\tfrac{1}{2}\\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}_2(g)$ is $-283$ kJ mol$^{-1}$. Calculate $\\Delta H$ for $2\\mathrm{C}(s) + \\mathrm{O}_2(g) \\rightarrow 2\\mathrm{CO}(g)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H$", answer: -222, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law", statement: "Target $\\Delta H = 2 \\times [\\Delta H_c(\\mathrm{C}) - \\Delta H_c(\\mathrm{CO})]$ for the doubled equation." },
            ],
            steps: [
              { reasoning: "For one mole of CO formed, subtract the CO combustion from the carbon combustion.", working: "\\Delta H(\\mathrm{C} + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{CO}) = -394 - (-283) = -111", marks: 1, markCode: "M" },
              { reasoning: "The target equation produces $2$ mol of CO, so double the value.", working: "2 \\times (-111)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -222\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-222$ kJ mol$^{-1}$",
            commonErrors: ["Forgetting to double the result for the equation producing $2\\mathrm{CO}$.", "Adding the combustion enthalpies instead of subtracting."],
          },
        },
        {
          id: "chemsl-u5-hess-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In Hess's law calculations using standard enthalpies of formation, what is the value of $\\Delta H_f^\\theta$ for an element in its standard state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Always positive" },
              { id: "c", text: "Equal to its enthalpy of combustion" },
              { id: "d", text: "Always negative" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard enthalpy of formation", statement: "Enthalpy change forming one mole of a compound from its elements in standard states; elements themselves have $\\Delta H_f^\\theta = 0$." },
            ],
            steps: [
              { reasoning: "By definition, forming an element from itself involves no energy change.", working: "\\Delta H_f^\\theta(\\text{element}) = 0", marks: 1, markCode: "M" },
              { reasoning: "This is why $\\mathrm{O}_2$, $\\mathrm{N}_2$ and graphite often drop out of formation-enthalpy calculations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Zero",
            commonErrors: ["Assigning non-zero formation enthalpies to $\\mathrm{O}_2$ or graphite."],
          },
        },
        {
          id: "chemsl-u5-hess-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The standard enthalpy of formation of ammonia is $\\Delta H_f^\\theta(\\mathrm{NH}_3) = -46$ kJ mol$^{-1}$. Calculate the standard enthalpy change for $\\mathrm{N}_2 + 3\\mathrm{H}_2 \\rightarrow 2\\mathrm{NH}_3$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H^\\theta$", answer: -92, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy from formation enthalpies", statement: "$\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$; elements contribute zero." },
            ],
            steps: [
              { reasoning: "Nitrogen and hydrogen are elements in their standard states, so their formation enthalpies are zero.", working: "\\sum \\Delta H_f^\\theta(\\text{reactants}) = 0", marks: 1, markCode: "M" },
              { reasoning: "Two moles of ammonia are formed, so double its formation enthalpy.", working: "\\sum \\Delta H_f^\\theta(\\text{products}) = 2 \\times (-46) = -92", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "\\Delta H^\\theta = -92 - 0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the correct sign.", working: "\\Delta H^\\theta = -92\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-92$ kJ mol$^{-1}$",
            commonErrors: ["Using $-46$ instead of doubling for $2\\mathrm{NH}_3$.", "Subtracting the product term from the reactant term."],
          },
        },
        {
          id: "chemsl-u5-hess-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Hess's law allows an indirect route to be used to find an enthalpy change. Which property of enthalpy makes this possible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enthalpy is a state function — it depends only on the initial and final states" },
              { id: "b", text: "All reactions have the same enthalpy change" },
              { id: "c", text: "Enthalpy equals the activation energy" },
              { id: "d", text: "Enthalpy depends on the number of steps in the mechanism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law", statement: "Because enthalpy is a state function, $\\Delta H$ is independent of the path between the same states." },
            ],
            steps: [
              { reasoning: "Enthalpy is a state function: only initial and final states matter, not the route.", working: "\\Delta H_{\\text{path 1}} = \\Delta H_{\\text{path 2}}", marks: 1, markCode: "M" },
              { reasoning: "Options (b), (c) and (d) contradict the law or confuse $\\Delta H$ with $E_a$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Enthalpy is a state function depending only on initial and final states",
            commonErrors: ["Believing the reaction mechanism changes the overall $\\Delta H$."],
          },
        },
        {
          id: "chemsl-u5-hess-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Standard enthalpies of formation: $\\Delta H_f^\\theta(\\mathrm{CO}_2) = -394$ kJ mol$^{-1}$ and $\\Delta H_f^\\theta(\\mathrm{CO}) = -111$ kJ mol$^{-1}$. Calculate $\\Delta H^\\theta$ for $\\mathrm{CO} + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H^\\theta$", answer: -283, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy from formation enthalpies", statement: "$\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$." },
            ],
            steps: [
              { reasoning: "Oxygen is an element in its standard state and contributes zero.", working: "\\Delta H_f^\\theta(\\mathrm{O}_2) = 0", marks: 1, markCode: "M" },
              { reasoning: "Apply products minus reactants.", working: "\\Delta H^\\theta = (-394) - (-111)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H^\\theta = -283\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-283$ kJ mol$^{-1}$",
            commonErrors: ["Adding the formation enthalpies instead of subtracting.", "Assigning a non-zero value to $\\mathrm{O}_2$."],
          },
        },
        {
          id: "chemsl-u5-hess-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Standard enthalpies of formation (kJ mol$^{-1}$): $\\mathrm{CH}_4(g) = -75$, $\\mathrm{CO}_2(g) = -394$, $\\mathrm{H}_2\\mathrm{O}(g) = -242$. Calculate $\\Delta H^\\theta$ for $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}(g)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H^\\theta$", answer: -803, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enthalpy from formation enthalpies", statement: "$\\Delta H^\\theta = \\sum \\Delta H_f^\\theta(\\text{products}) - \\sum \\Delta H_f^\\theta(\\text{reactants})$, coefficients included." },
            ],
            steps: [
              { reasoning: "Sum product formation enthalpies with coefficients; oxygen contributes zero.", working: "\\sum \\Delta H_f^\\theta(\\text{products}) = -394 + 2(-242) = -878", marks: 1, markCode: "M" },
              { reasoning: "Identify the reactant contribution — only methane is a compound.", working: "\\sum \\Delta H_f^\\theta(\\text{reactants}) = -75", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "\\Delta H^\\theta = -878 - (-75)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate — less negative than the liquid-water value because condensation energy is not released.", working: "\\Delta H^\\theta = -803\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-803$ kJ mol$^{-1}$",
            commonErrors: ["Using $\\Delta H_f^\\theta(\\mathrm{H}_2\\mathrm{O}, l) = -286$ instead of the gaseous value $-242$.", "Forgetting the coefficient of $2$ on water."],
          },
        },
        {
          id: "chemsl-u5-hess-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A student wants to find $\\Delta H$ for $\\mathrm{C}(s) + \\tfrac{1}{2}\\mathrm{O}_2(g) \\rightarrow \\mathrm{CO}(g)$ using combustion data: $\\Delta H_c^\\theta(\\mathrm{C}) = -394$ kJ mol$^{-1}$ for $\\mathrm{C} + \\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2$ and $\\Delta H_c^\\theta(\\mathrm{CO}) = -283$ kJ mol$^{-1}$ for $\\mathrm{CO} + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2$.",
          parts: [
            { label: "a", prompt: "Describe the Hess cycle route that uses the two combustion enthalpies to reach the target reaction.", marks: 2 },
            { label: "b", prompt: "Write the enthalpy calculation for the target reaction.", marks: 2 },
            { label: "c", prompt: "State the final value of $\\Delta H$ and whether the reaction is exothermic or endothermic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law", statement: "Both reactants can be combusted to the common product $\\mathrm{CO}_2$; the difference gives the target $\\Delta H$." },
            ],
            steps: [
              { part: "a", reasoning: "Burn carbon completely to $\\mathrm{CO}_2$, then convert $\\mathrm{CO}_2$ back to CO by reversing the CO combustion.", working: "\\mathrm{C} \\xrightarrow{-394} \\mathrm{CO}_2 \\xrightarrow{+283} \\mathrm{CO}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Target = carbon combustion minus CO combustion (reverse changes the sign).", working: "\\Delta H = -394 - (-283) = -394 + 283", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Evaluate and classify.", working: "\\Delta H = -111\\ \\text{kJ mol}^{-1},\\ \\text{exothermic}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) combust C to $\\mathrm{CO}_2$, then reverse CO combustion (b) $\\Delta H = -394 + 283$ (c) $-111$ kJ mol$^{-1}$, exothermic",
            commonErrors: ["Adding the two combustion enthalpies without reversing the CO combustion.", "Forgetting that reversing a reaction changes the sign of $\\Delta H$."],
            examinerNote: "Award M1 for the correct cycle direction and A1 for identifying $\\mathrm{CO}_2$ as the common intermediate in (a); M1 for the correct manipulation and A1 for the arithmetic in (b); A1 for the value and A1 for the correct classification in (c).",
          },
        },
        {
          id: "chemsl-u5-hess-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When a balanced equation in a Hess cycle is multiplied by $2$, what happens to its enthalpy change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is halved" },
              { id: "b", text: "Its sign changes" },
              { id: "c", text: "It stays the same because enthalpy is per mole" },
              { id: "d", text: "It is multiplied by $2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Scaling rule", statement: "Multiplying a balanced equation by $k$ multiplies $\\Delta H$ by $k$." },
            ],
            steps: [
              { reasoning: "The enthalpy change is proportional to the amount of reaction as written.", working: "k = 2 \\Rightarrow \\Delta H \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Only reversing a reaction changes the sign; scaling changes the magnitude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** It is multiplied by $2$",
            commonErrors: ["Thinking $\\Delta H$ is fixed per mole regardless of the equation's scale."],
          },
        },
        {
          id: "chemsl-u5-hess-q14",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "For a two-step process: $\\mathrm{A} \\rightarrow \\mathrm{B}$ has $\\Delta H_1 = +30$ kJ mol$^{-1}$ and $\\mathrm{B} \\rightarrow \\mathrm{C}$ has $\\Delta H_2 = -80$ kJ mol$^{-1}$. Calculate $\\Delta H$ for $\\mathrm{A} \\rightarrow \\mathrm{C}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_{\\mathrm{A} \\rightarrow \\mathrm{C}}$", answer: -50, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Hess's law addition", statement: "Enthalpy changes of consecutive steps add: $\\Delta H_{\\text{overall}} = \\Delta H_1 + \\Delta H_2$." },
            ],
            steps: [
              { reasoning: "Recognise that B is an intermediate — the two steps sum to the overall reaction.", working: "\\mathrm{A} \\rightarrow \\mathrm{B} \\rightarrow \\mathrm{C}", marks: 1, markCode: "M" },
              { reasoning: "Add the two enthalpy changes, keeping signs.", working: "\\Delta H = (+30) + (-80)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\Delta H = -50\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "The overall process is exothermic since the result is negative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-50$ kJ mol$^{-1}$",
            commonErrors: ["Subtracting the second enthalpy instead of adding.", "Ignoring the sign of $\\Delta H_2$."],
          },
        },
        {
          id: "chemsl-u5-hess-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the standard enthalpy of formation, $\\Delta H_f^\\theta$, of $\\mathrm{O}_2(g)$ at standard conditions?",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta H_f^\\theta(\\mathrm{O}_2)$", answer: 0, unit: "kJ/mol" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard enthalpy of formation", statement: "Zero for any element in its standard state, including $\\mathrm{O}_2(g)$." },
            ],
            steps: [
              { reasoning: "Oxygen gas is the standard state of the element oxygen.", working: "\\mathrm{O}_2(g) \\text{ is an element in standard state}", marks: 1, markCode: "M" },
              { reasoning: "Forming an element from itself requires no energy change.", working: "\\Delta H_f^\\theta = 0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$ kJ mol$^{-1}$",
            commonErrors: ["Assigning a non-zero formation enthalpy to $\\mathrm{O}_2$ because it appears in combustion equations."],
          },
        },
        {
          id: "chemsl-u5-hess-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Standard enthalpies of combustion (kJ mol$^{-1}$): $\\mathrm{H}_2 + \\tfrac{1}{2}\\mathrm{O}_2 \\rightarrow \\mathrm{H}_2\\mathrm{O}(l)$, $\\Delta H_c = -286$; $\\mathrm{C}(s) + \\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2$, $\\Delta H_c = -394$; $\\mathrm{CH}_4 + 2\\mathrm{O}_2 \\rightarrow \\mathrm{CO}_2 + 2\\mathrm{H}_2\\mathrm{O}(l)$, $\\Delta H_c = -890$.",
          parts: [
            { label: "a", prompt: "Write the target equation for the standard enthalpy of formation of methane.", marks: 2 },
            { label: "b", prompt: "Explain the Hess cycle steps needed to find $\\Delta H_f^\\theta(\\mathrm{CH}_4)$ from the combustion data.", marks: 2 },
            { label: "c", prompt: "Calculate $\\Delta H_f^\\theta(\\mathrm{CH}_4)$.", marks: 2 },
            { label: "d", prompt: "State why $\\Delta H_f^\\theta$ is zero for $\\mathrm{O}_2(g)$ and for carbon in graphite.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard enthalpy of formation", statement: "Enthalpy change forming one mole of compound from its elements in standard states." },
              { kind: "law", name: "Hess's law", statement: "Combustion of elements and of the compound share the same final products, giving a Hess cycle." },
            ],
            steps: [
              { part: "a", reasoning: "Formation of one mole of methane from its elements.", working: "\\mathrm{C}(s) + 2\\mathrm{H}_2(g) \\rightarrow \\mathrm{CH}_4(g)", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Burn the elements (C and H2) to the same products as methane combustion, then subtract the methane combustion enthalpy.", working: "\\Delta H_f = [\\Delta H_c(\\mathrm{C}) + 2\\Delta H_c(\\mathrm{H}_2)] - \\Delta H_c(\\mathrm{CH}_4)", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Substitute and evaluate.", working: "\\Delta H_f = [-394 + 2(-286)] - (-890) = -394 - 572 + 890", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Final value.", working: "\\Delta H_f^\\theta(\\mathrm{CH}_4) = -76\\ \\text{kJ mol}^{-1}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both are elements in their standard states, so forming them from themselves involves no energy change.", working: "\\Delta H_f^\\theta(\\text{element, standard state}) = 0", marks: 2, markCode: "B" },
            ],
            finalAnswer: "(a) $\\mathrm{C}(s) + 2\\mathrm{H}_2(g) \\rightarrow \\mathrm{CH}_4(g)$ (b) combust elements to $\\mathrm{CO}_2$ and $\\mathrm{H}_2\\mathrm{O}$, subtract methane combustion (c) $-76$ kJ mol$^{-1}$ (d) they are elements in standard states, so $\\Delta H_f^\\theta = 0$",
            commonErrors: ["Adding the methane combustion enthalpy instead of subtracting it.", "Using $2\\Delta H_c(\\mathrm{H}_2)$ with the wrong coefficient for water."],
            examinerNote: "Award M1 for carbon and A1 for balanced equation with $2\\mathrm{H}_2$ in (a); M1 for the elements-to-products route and A1 for the subtraction in (b); M1 for correct substitution and A1 for $-76$ in (c); B1 for the standard-state reasoning in (d).",
          },
        },
      ],
    },
  ],
};
