import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edialchem-u3-lesson-3-1",
  code: "3-1",
  title: "Organic Chemistry — Introduction and Alkanes",
  goal: "I CAN describe organic compounds, homologous series and reactions of alkanes.",
  standards: ["IC3 Organic chemistry I", "Introduction to organic"],
  vocabulary: [
    { term: "Homologous series", definition: "Family of compounds with same general formula and similar chemistry, differing by CH₂." },
    { term: "Saturated / unsaturated", definition: "Only single C–C bonds / contains C=C or C≡C." },
    { term: "Functional group", definition: "Atom/group determining chemical properties of a molecule." },
    { term: "Isomerism", definition: "Same molecular formula, different structural arrangement." },
  ],
  concepts: [
    {
      id: "edialchem-u3-organic-intro",
      title: "Organic compounds and alkanes",
      skill: "Identify functional groups, name simple organic compounds and describe alkane reactions.",
      lesson: {
        sections: [
          {
            heading: "Introduction to organic chemistry",
            body: "Organic = carbon compounds (except CO, CO₂, carbonates). Carbon forms 4 bonds → chains, branches, rings. Structural formulae: displayed (all atoms/bonds), skeletal (lines = bonds, carbons at ends/corners implied). Homologous series: same general formula, similar reactions, trend in properties.",
          },
          {
            heading: "Alkanes",
            body: "General formula CₙH₂ₙ₊₂. Saturated — only single bonds. Names: methane, ethane, propane, butane… (first 10). Low reactivity (non-polar C–C/C–H bonds). Reactions: combustion (complete → CO₂+H₂O; incomplete → CO/C), substitution with halogens (UV light). Boiling point increases with chain length.",
          },
          {
            heading: "Isomerism",
            body: "Structural isomers: same formula different arrangement — chain (butane vs 2-methylpropane), position (propan-1-ol vs propan-2-ol), functional group. Stereoisomers: same connectivity, different 3D arrangement (cis/trans for C=C).",
          },
        ],
        keyFormulas: [
          { name: "Alkanes", statement: "CₙH₂ₙ₊₂" },
          { name: "Complete combustion", statement: "CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → nCO₂ + (n+1)H₂O" },
        ],
        workedExample: {
          problem: "Write the equation for complete combustion of propane.",
          solution: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
        },
      },
      questions: [
        {
          id: "edialchem-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of alkanes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CₙH₂ₙ" },
              { id: "b", text: "CₙH₂ₙ₊₂" },
              { id: "c", text: "CₙHₙ" },
              { id: "d", text: "CₙH₂ₙ₋₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Alkanes", statement: "Saturated CₙH₂ₙ₊₂." }],
            steps: [{ reasoning: "Direct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CₙH₂ₙ₊₂",
          },
        },
        {
          id: "edialchem-org-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two properties of a homologous series.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Homologous series", statement: "Same general formula + similar chemistry." }],
            steps: [
              { reasoning: "Same general molecular formula.", marks: 1, markCode: "A" },
              { reasoning: "Similar chemical properties/reactions.", marks: 1, markCode: "A" },
              { reasoning: "Gradual trend in physical properties (bp rises with chain length).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same formula, similar reactions, trend in bp",
            commonErrors: ["Saying identical properties."],
          },
        },
        {
          id: "edialchem-org-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alkanes are relatively unreactive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alkane reactivity", statement: "Non-polar bonds, no functional group." }],
            steps: [
              { reasoning: "C–C and C–H bonds are strong and non-polar.", marks: 1, markCode: "M" },
              { reasoning: "No functional group or polar bonds → few reaction sites.", marks: 1, markCode: "M" },
              { reasoning: "Only react under harsh conditions (UV for substitution, high T for combustion).", marks: 1, markCode: "A" },
              { reasoning: "Conclude low reactivity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-polar strong bonds → low reactivity",
            commonErrors: ["Saying alkanes don't react at all."],
          },
        },
        {
          id: "edialchem-org-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the reactions of alkanes.",
          parts: [
            { label: "a", prompt: "Complete and incomplete combustion.", marks: 4 },
            { label: "b", prompt: "Free radical substitution.", marks: 3 },
            { label: "c", prompt: "Why UV light is needed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Alkane reactions", statement: "Combustion + substitution." }],
            steps: [
              { part: "a", reasoning: "Complete: excess O₂ → CO₂ + H₂O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Incomplete: limited O₂ → CO or C (soot) + H₂O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Combustion exothermic → fuels.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Equation example: CH₄ + 2O₂ → CO₂ + 2H₂O.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Halogen (Cl₂/Br₂) substitutes H under UV.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chain reaction: initiation, propagation, termination.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Produces halogenoalkane + HX.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "UV provides energy to break Cl–Cl bond homolytically.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Generates Cl· radicals initiating chain.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Without UV substitution doesn't occur.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combustion + UV substitution",
            commonErrors: ["Saying substitution needs heat not UV."],
          },
        },
      ],
    },
    {
      id: "edialchem-u3-alkenes",
      title: "Alkenes and unsaturation",
      skill: "Describe alkene structure, addition reactions and test for unsaturation.",
      lesson: {
        sections: [
          {
            heading: "Alkenes",
            body: "General formula CₙH₂ₙ. Contain C=C double bond → unsaturated. More reactive than alkanes — π bond is weak. Names: ethene, propene, but-1-ene, but-2-ene (position of double bond indicated).",
          },
          {
            heading: "Addition reactions",
            body: "Electrophilic addition: π bond breaks, two atoms/groups add across C=C. With Br₂: orange bromine water decolourised (test for unsaturation). With H₂ (Ni catalyst): hydrogenation → alkane. With steam (H₃PO₄): hydration → alcohol. With HBr: Markovnikov's rule — H adds to C with more H.",
          },
          {
            heading: "Cis-trans isomerism",
            body: "C=C is rigid — groups can be same side (cis/Z) or opposite (trans/E). Only when each C has two different groups. Different physical properties; cis/trans affect biological activity (e.g. oestrogen vs diethylstilbestrol).",
          },
        ],
        keyFormulas: [
          { name: "Alkenes", statement: "CₙH₂ₙ" },
          { name: "Addition", statement: "C=C + X₂ → C–C with X on each C" },
        ],
        workedExample: {
          problem: "What happens when ethene reacts with bromine water?",
          solution: "Orange Br₂ adds across C=C → colourless 1,2-dibromoethane — test for unsaturation.",
        },
      },
      questions: [
        {
          id: "edialchem-alk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of alkenes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CₙH₂ₙ₊₂" },
              { id: "b", text: "CₙH₂ₙ" },
              { id: "c", text: "CₙH₂ₙ₋₂" },
              { id: "d", text: "CₙHₙ" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Alkenes", statement: "Unsaturated CₙH₂ₙ." }],
            steps: [{ reasoning: "One C=C reduces H count by 2 vs alkane.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** CₙH₂ₙ",
          },
        },
        {
          id: "edialchem-alk-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the test for unsaturation using bromine water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Bromine test", statement: "Orange → colourless = unsaturation." }],
            steps: [
              { reasoning: "Add orange bromine water to compound.", marks: 1, markCode: "M" },
              { reasoning: "If unsaturated (C=C), Br₂ adds across double bond.", marks: 1, markCode: "M" },
              { reasoning: "Orange colour disappears → positive test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Orange bromine water decolourised = unsaturation",
            commonErrors: ["Saying colour turns brown."],
          },
        },
        {
          id: "edialchem-alk-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alkenes are more reactive than alkanes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Alkene reactivity", statement: "Weak π bond breaks easily." }],
            steps: [
              { reasoning: "C=C has σ + π bond; π bond is weak.", marks: 1, markCode: "M" },
              { reasoning: "π electrons exposed → attacked by electrophiles.", marks: 1, markCode: "M" },
              { reasoning: "Addition reactions break π bond → new σ bonds form.", marks: 1, markCode: "A" },
              { reasoning: "Alkanes lack π bond → only substitution under harsh conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak π bond → electrophilic addition",
            commonErrors: ["Saying alkenes are saturated."],
          },
        },
        {
          id: "edialchem-alk-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the addition reactions of alkenes.",
          parts: [
            { label: "a", prompt: "With bromine.", marks: 3 },
            { label: "b", prompt: "With hydrogen (hydrogenation).", marks: 3 },
            { label: "c", prompt: "With steam (hydration).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Alkene addition", statement: "π bond breaks → atoms add across C=C." }],
            steps: [
              { part: "a", reasoning: "Br₂ adds across C=C → 1,2-dibromoalkane.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mechanism: Br₂ polarised → Br⁺ attacks → carbocation → Br⁻ adds.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Test for unsaturation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "H₂ + Ni catalyst → alkane.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hydrogenation — used to harden oils.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Syn addition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Steam + H₃PO₄ catalyst → alcohol.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethene → ethanol (industrial).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Markovnikov: OH adds to more substituted C.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Propene → propan-2-ol (major).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Addition across C=C: Br₂, H₂, H₂O",
            commonErrors: ["Saying substitution occurs."],
          },
        },
      ],
    },
  ],
};
