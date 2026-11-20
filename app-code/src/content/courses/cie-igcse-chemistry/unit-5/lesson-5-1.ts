import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "ciecy-u5-lesson-5-1",
  code: "5-1",
  title: "Exothermic and Endothermic Reactions",
  goal: "I CAN distinguish exothermic and endothermic reactions and describe energy changes and calorimetry.",
  standards: ["0654 5.1", "0654 5.2"],
  vocabulary: [
    { term: "Exothermic", definition: "Releases energy to surroundings (ΔH negative)." },
    { term: "Endothermic", definition: "Absorbs energy from surroundings (ΔH positive)." },
    { term: "Enthalpy change (ΔH)", definition: "Heat energy change in a reaction at constant pressure." },
    { term: "Activation energy", definition: "Minimum energy needed to start a reaction." },
    { term: "Calorimetry", definition: "Measuring heat energy changes using temperature change." },
    { term: "Bond energy", definition: "Energy needed to break one mole of bonds (endothermic) or released forming them (exothermic)." },
    { term: "Energy level diagram", definition: "Shows energy of reactants/products and activation energy." },
    { term: "Catalyst", definition: "Speeds up reaction by lowering activation energy; not consumed." },
  ],
  concepts: [
    {
      id: "ciecy-u5-exo-endo",
      title: "Energy changes in reactions",
      skill: "Distinguish exothermic and endothermic reactions using energy level diagrams.",
      lesson: {
        sections: [
          {
            heading: "Exothermic vs endothermic",
            body: "| | Exothermic | Endothermic |\n|---|---|---|\n| Energy flow | released to surroundings | absorbed from surroundings |\n| ΔH | negative | positive |\n| Examples | combustion, respiration, neutralisation | thermal decomposition, photosynthesis |\n| Temperature | surroundings warm up | surroundings cool down |",
          },
          {
            heading: "Energy level diagram",
            body: "Exothermic: products **lower** energy than reactants (energy released = drop).\nEndothermic: products **higher** energy (energy absorbed = rise).\nActivation energy = peak − reactants, always positive.",
          },
        ],
        keyFormulas: [
          { name: "Calorimetry", statement: "$q = mc\\Delta T$ ($m$ = mass, $c$ = specific heat capacity 4.18 J/g°C for water)" },
        ],
        workedExample: {
          problem: "Classify: burning methane; thermal decomposition of calcium carbonate.",
          solution: "Burning methane: exothermic (combustion releases energy). Thermal decomposition of CaCO₃: endothermic (absorbs heat to break down).",
        },
      },
      questions: [
        {
          id: "ciecy-u5-exo-endo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of reaction releases energy to the surroundings?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Endothermic" }, { id: "b", text: "Exothermic" }, { id: "c", text: "Both equally" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Exothermic", statement: "Energy released (exo = out)." }],
            steps: [{ reasoning: "Recall.", working: "\\text{exo = out}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Exothermic",
            commonErrors: ["Confusing 'exo' prefix meaning."],
          },
        },
        {
          id: "ciecy-u5-exo-endo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the sign of ΔH for an exothermic reaction and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Exothermic", statement: "ΔH negative; e.g. combustion/neutralisation." }],
            steps: [
              { reasoning: "Negative sign.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ΔH is negative; e.g. combustion of methane or neutralisation.",
            commonErrors: ["Positive sign — that's endothermic."],
          },
        },
        {
          id: "ciecy-u5-exo-endo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why photosynthesis is endothermic using an energy level diagram description.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Endothermic", statement: "Products higher energy; energy absorbed." }],
            steps: [
              { reasoning: "Photosynthesis stores energy in glucose.", marks: 1, markCode: "M" },
              { reasoning: "Energy absorbed from light → ΔH positive.", marks: 1, markCode: "M" },
              { reasoning: "Products higher than reactants on diagram.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Photosynthesis absorbs light energy to build glucose, so products have higher energy than reactants — ΔH positive (endothermic).",
            commonErrors: ["Saying plants 'create' energy — they absorb it."],
          },
        },
        {
          id: "ciecy-u5-exo-endo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how to measure the energy released in a reaction using calorimetry.",
          parts: [
            { label: "a", prompt: "Describe the experimental setup.", marks: 3 },
            { label: "b", prompt: "State the formula for heat energy.", marks: 2 },
            { label: "c", prompt: "List two sources of error.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Calorimetry", statement: "q = mcΔT; measure temp rise of water." }],
            steps: [
              { part: "a", reasoning: "Reactants in insulated container with thermometer.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Measure temp before/after.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete setup.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "q = mcΔT.", working: "q = mc\\Delta T", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State with variables.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat loss to surroundings.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Incomplete reaction / impurities.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid error.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) insulated reaction, thermometer, ΔT (b) q=mcΔT (c) heat loss, incomplete reaction",
            commonErrors: ["In (c) only one error — need two."],
          },
        },
      ],
    },
    {
      id: "ciecy-u5-bond-energies",
      title: "Bond energies and activation energy",
      skill: "Explain how bond breaking/forming determines energy changes and how catalysts work.",
      lesson: {
        sections: [
          {
            heading: "Bond energies",
            body: "Breaking bonds = **endothermic** (absorbs energy).\nForming bonds = **exothermic** (releases energy).\n\nNet ΔH = (energy to break bonds) − (energy released forming bonds). Exothermic if more energy released than absorbed.",
          },
          {
            heading: "Activation energy and catalysts",
            body: "**Activation energy (Ea)** = energy needed to start reaction — the 'hump' on the energy diagram.\n**Catalyst** provides alternative pathway with **lower Ea** → more particles have enough energy → faster rate. Catalyst not consumed, doesn't change ΔH.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a catalyst speed up a reaction without being used up?",
          solution: "It provides an alternative pathway with lower activation energy; more particles can react per second, but the catalyst itself is regenerated unchanged.",
        },
      },
      questions: [
        {
          id: "ciecy-u5-bond-energies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is breaking a chemical bond endothermic or exothermic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Exothermic" }, { id: "b", text: "Endothermic" }, { id: "c", text: "Neither" }, { id: "d", text: "Depends on bond" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Bond breaking", statement: "Always endothermic." }],
            steps: [{ reasoning: "Recall.", working: "\\text{break = endo}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Endothermic",
            commonErrors: ["Reversing — forming bonds is exothermic."],
          },
        },
        {
          id: "ciecy-u5-bond-energies-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State how a catalyst affects activation energy and reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Catalyst", statement: "Lowers Ea → faster rate; not consumed." }],
            steps: [
              { reasoning: "Lowers Ea.", marks: 1, markCode: "M" },
              { reasoning: "Rate increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A catalyst lowers activation energy, so more particles have sufficient energy to react — increasing rate without being consumed.",
            commonErrors: ["Saying catalyst changes ΔH — it doesn't."],
          },
        },
        {
          id: "ciecy-u5-bond-energies-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a reaction is exothermic in terms of bond energies.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Bond energies", statement: "Exothermic when bonds formed release more than breaking absorbs." }],
            steps: [
              { reasoning: "Breaking bonds absorbs energy.", marks: 1, markCode: "M" },
              { reasoning: "Forming bonds releases energy.", marks: 1, markCode: "M" },
              { reasoning: "Released > absorbed → net exothermic.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When the energy released forming new bonds exceeds the energy absorbed breaking old bonds, the net energy change is released — exothermic.",
            commonErrors: ["Only mentioning one side of the energy balance."],
          },
        },
        {
          id: "ciecy-u5-bond-energies-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the energy profile of an exothermic reaction with and without a catalyst.",
          parts: [
            { label: "a", prompt: "Describe reactants, products and ΔH on the diagram.", marks: 3 },
            { label: "b", prompt: "Label activation energy.", marks: 2 },
            { label: "c", prompt: "Explain the effect of a catalyst on the diagram.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy profile", statement: "Exothermic: products lower; catalyst lowers Ea peak." }],
            steps: [
              { part: "a", reasoning: "Products lower energy than reactants.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "ΔH negative (downward).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ea = reactants to peak.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Label correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Catalyst gives lower peak.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Same ΔH (start/end unchanged).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Faster rate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) products lower, ΔH negative (b) Ea=reactants→peak (c) catalyst lowers peak, same ΔH, faster",
            commonErrors: ["In (c) showing different ΔH — catalyst doesn't change it."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u5-energetics-notes",
      title: "Chemical energetics — revision notes",
      summary: "Exothermic (ΔH<0) vs endothermic (ΔH>0), bond energies, activation energy, calorimetry.",
      sections: [
        {
          heading: "Key facts",
          body: "Exothermic: releases energy, ΔH negative (combustion, neutralisation). Endothermic: absorbs, ΔH positive (photosynthesis, thermal decomposition). Break bonds = endo; form = exo. Catalyst lowers Ea, not ΔH. q = mcΔT.",
        },
        {
          heading: "Exam technique",
          body: "- Energy level diagram: exothermic = products lower than reactants.\n- Catalyst: lower peak, same overall energy change.",
        },
      ],
    },
  ],
};
