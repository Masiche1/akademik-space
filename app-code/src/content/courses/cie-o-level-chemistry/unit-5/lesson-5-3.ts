import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "olchem-u5-lesson-5-3",
  code: "5-3",
  title: "Energy Profiles and Applications",
  goal: "I CAN interpret energy profile diagrams and explain everyday exothermic/endothermic processes.",
  standards: ["5070 5.3"],
  vocabulary: [
    { term: "Energy profile diagram", definition: "Graph of energy vs reaction progress showing activation energy and ΔH." },
    { term: "Activation energy (Ea)", definition: "Minimum energy needed for reaction to start." },
    { term: "Catalyst", definition: "Substance that lowers Ea without being consumed." },
    { term: "Transition state", definition: "High-energy intermediate at peak of profile diagram." },
    { term: "Hand warmer", definition: "Exothermic oxidation of iron filings — practical heat source." },
    { term: "Self-heating can", definition: "Exothermic reaction (e.g. CaO + H₂O) heats drink." },
    { term: "Cold pack", definition: "Endothermic dissolution/ammonium nitrate absorbs heat." },
    { term: "Thermal decomposition", definition: "Endothermic breakdown of compound by heat." },
  ],
  concepts: [
    {
      id: "olchem-u5-energy-profiles",
      title: "Energy profile diagrams",
      skill: "Interpret energy profile diagrams for exothermic and endothermic reactions.",
      lesson: {
        sections: [
          {
            heading: "Reading the diagram",
            body: "Y-axis = energy, X-axis = reaction progress.\n- **Peak** = transition state; height above reactants = Ea\n- **ΔH** = energy difference products − reactants\n- Exothermic: products lower than reactants (ΔH < 0)\n- Endothermic: products higher (ΔH > 0)",
          },
          {
            heading: "Catalyst effect",
            body: "A catalyst provides an alternative pathway with **lower Ea** — the peak is lower but ΔH is unchanged. More particles have sufficient energy → faster reaction.",
          },
          {
            heading: "Everyday examples",
            body: "Exothermic: combustion, respiration, neutralisation, hand warmers (Fe oxidation), self-heating cans (CaO+H₂O).\nEndothermic: thermal decomposition, photosynthesis, cold packs (NH₄NO₃ dissolving), instant ice packs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sketch the energy profile for an exothermic reaction with and without catalyst.",
          solution: "Reactants higher than products; peak above reactants = Ea; catalyst curve has lower peak, same ΔH.",
        },
      },
      questions: [
        {
          id: "olchem-u5-energy-profiles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On an energy profile diagram, what does the peak represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Products" }, { id: "b", text: "Transition state / activation energy" }, { id: "c", text: "Reactants" }, { id: "d", text: "ΔH" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Ea", statement: "Peak = transition state; height = Ea." }],
            steps: [{ reasoning: "Recall.", working: "\\text{peak} = E_a", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Transition state / activation energy",
            commonErrors: ["Confusing peak height with ΔH."],
          },
        },
        {
          id: "olchem-u5-energy-profiles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does a catalyst affect an energy profile diagram?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Catalyst", statement: "Lowers Ea, not ΔH." }],
            steps: [
              { reasoning: "Lowers activation energy (lower peak).", marks: 1, markCode: "M" },
              { reasoning: "ΔH unchanged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A catalyst provides a pathway with lower activation energy (lower peak) but does not change ΔH.",
            commonErrors: ["Saying catalyst changes ΔH — it doesn't."],
          },
        },
        {
          id: "olchem-u5-energy-profiles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a hand warmer feels hot using energy profile ideas.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Exothermic", statement: "Products lower energy → heat released." }],
            steps: [
              { reasoning: "Iron oxidation is exothermic.", marks: 1, markCode: "M" },
              { reasoning: "ΔH negative → energy released as heat.", marks: 1, markCode: "M" },
              { reasoning: "Heat warms contents.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The oxidation of iron in the hand warmer is exothermic (ΔH < 0); the energy released heats the contents, so it feels warm.",
            commonErrors: ["Saying 'creates heat' — energy is released from chemical stores."],
          },
        },
        {
          id: "olchem-u5-energy-profiles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Interpret an energy profile diagram for an exothermic reaction.",
          parts: [
            { label: "a", prompt: "Identify reactants, products, Ea and ΔH.", marks: 4 },
            { label: "b", prompt: "Explain the effect of a catalyst.", marks: 3 },
            { label: "c", prompt: "Give an everyday example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy profile", statement: "Peak=Ea, level difference=ΔH, catalyst lowers peak." }],
            steps: [
              { part: "a", reasoning: "Reactants start level; products end lower.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Peak = Ea above reactants.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "ΔH = products − reactants < 0.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct labels.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lower peak = lower Ea.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Same ΔH.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faster rate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any exothermic example.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) labels correct (b) lower Ea, same ΔH, faster (c) e.g. combustion",
            commonErrors: ["In (b) saying ΔH becomes more negative."],
          },
        },
      ],
    },
    {
      id: "olchem-u5-applications",
      title: "Everyday energy changes",
      skill: "Classify everyday processes as exothermic or endothermic.",
      lesson: {
        sections: [
          {
            heading: "Classification",
            body: "| Exothermic (ΔH<0) | Endothermic (ΔH>0) |\n|---|---|\n| Combustion | Thermal decomposition |\n| Respiration | Photosynthesis |\n| Neutralisation | Dissolving NH₄NO₃ |\n| Hand warmers | Cold packs |\n| CaO + H₂O | Electrolysis |",
          },
          {
            heading: "Practical uses",
            body: "- Hand warmers: Fe oxidation releases heat\n- Self-heating cans: CaO + H₂O → Ca(OH)₂ exothermic\n- Cold packs: NH₄NO₃ dissolves endothermically\n- Thermal decomposition: CaCO₃ → CaO + CO₂ needs heat",
          },
          {
            heading: "Key idea",
            body: "Exothermic = feels warm, ΔH negative. Endothermic = feels cold, ΔH positive. Always check: does the process release or absorb heat?",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is dissolving ammonium nitrate in water exothermic or endothermic?",
          solution: "Endothermic — the solution gets cold because heat is absorbed from surroundings.",
        },
      },
      questions: [
        {
          id: "olchem-u5-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process is endothermic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Combustion" }, { id: "b", text: "Neutralisation" }, { id: "c", text: "Photosynthesis" }, { id: "d", text: "Respiration" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Endothermic", statement: "Absorbs heat: photosynthesis, decomposition." }],
            steps: [{ reasoning: "Recall.", working: "\\text{photosynthesis}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Photosynthesis",
            commonErrors: ["Respiration is exothermic (releases energy)."],
          },
        },
        {
          id: "olchem-u5-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does a cold pack feel cold?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Endothermic", statement: "Absorbs heat from surroundings." }],
            steps: [
              { reasoning: "Dissolution is endothermic.", marks: 1, markCode: "M" },
              { reasoning: "Absorbs heat from skin/surroundings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The dissolving reaction inside the cold pack is endothermic — it absorbs heat from your skin and surroundings, so it feels cold.",
            commonErrors: ["Saying 'creates cold' — heat is absorbed."],
          },
        },
        {
          id: "olchem-u5-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why CaO + H₂O is used in self-heating cans.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Exothermic", statement: "CaO + H₂O releases heat." }],
            steps: [
              { reasoning: "Reaction is exothermic.", marks: 1, markCode: "M" },
              { reasoning: "Releases heat energy.", marks: 1, markCode: "M" },
              { reasoning: "Heats drink contents.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CaO + H₂O → Ca(OH)₂ is strongly exothermic; the heat released warms the drink without external heating.",
            commonErrors: ["Not identifying it as exothermic."],
          },
        },
        {
          id: "olchem-u5-applications-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Classify processes and explain the energy changes.",
          parts: [
            { label: "a", prompt: "Classify combustion, photosynthesis, neutralisation.", marks: 3 },
            { label: "b", prompt: "Explain an endothermic example.", marks: 3 },
            { label: "c", prompt: "Explain an exothermic example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy changes", statement: "Exo: releases heat; endo: absorbs heat." }],
            steps: [
              { part: "a", reasoning: "Combustion exo.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Photosynthesis endo.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Neutralisation exo.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any endothermic example.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Absorbs heat → surroundings cool.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "ΔH positive.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any exothermic example.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Releases heat → surroundings warm.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "ΔH negative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) exo/endo/exo (b) absorbs heat, ΔH>0 (c) releases heat, ΔH<0",
            commonErrors: ["In (a) mixing up photosynthesis and respiration."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u5-profiles-apps-notes",
      title: "Energy profiles and applications — revision notes",
      summary: "Energy profile diagrams, catalysts, everyday exo/endo processes.",
      sections: [
        {
          heading: "Key facts",
          body: "Peak=Ea, level difference=ΔH. Catalyst lowers Ea not ΔH. Exothermic: combustion, respiration, neutralisation, hand warmers. Endothermic: photosynthesis, decomposition, cold packs.",
        },
        {
          heading: "Exam technique",
          body: "- Exothermic ΔH<0, products lower on diagram.\n- Endothermic ΔH>0, products higher.\n- Catalyst: lower peak, same ΔH.",
        },
      ],
    },
  ],
};
