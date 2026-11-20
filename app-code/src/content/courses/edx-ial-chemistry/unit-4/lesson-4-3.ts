import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edialchem-u4-lesson-4-3",
  code: "4-3",
  title: "Organic Synthesis",
  goal: "I CAN plan and describe multi-step organic synthesis routes.",
  standards: ["IC4 Organic chemistry II", "Organic synthesis"],
  vocabulary: [
    { term: "Synthesis", definition: "Building complex molecules from simpler ones via reactions." },
    { term: "Route", definition: "Sequence of reactions converting starting material to product." },
    { term: "Protecting group", definition: "Temporary group preventing unwanted reaction at site." },
    { term: "Retrosynthesis", definition: "Working backwards from target to plan synthesis." },
  ],
  concepts: [
    {
      id: "edialchem-u4-synthesis",
      title: "Planning organic syntheses",
      skill: "Identify functional group interconversions and design synthesis routes.",
      lesson: {
        sections: [
          {
            heading: "Functional group interconversions",
            body: "Key transformations: alkane → alkene (cracking) → alcohol (hydration) → aldehyde/acid (oxidation) → ester (esterification). Alcohol → alkene (dehydration). Alkene → halogenoalkane (addition). Haloalkane → alcohol (hydrolysis). Each step changes one functional group.",
          },
          {
            heading: "Multi-step synthesis",
            body: "Plan backwards from target: identify needed functional groups → work back to available starting material. E.g. make propanoic acid from propene: propene → propan-2-ol (hydration) → propanone (oxidation) → ... or propene → 1-bromopropane → propan-1-ol → propanoic acid.",
          },
          {
            heading: "Green chemistry",
            body: "Minimise waste, use renewable feedstocks, atom economy (mass of desired product/total mass). Industrial synthesis optimised for yield, cost, environmental impact. Catalysts reduce waste vs stoichiometric reagents.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Atom economy = (M_r desired product / Σ M_r all products) × 100%" },
        ],
        workedExample: {
          problem: "Plan synthesis of ethyl ethanoate from ethene.",
          solution: "Ethene → ethanol (hydration) → ethanoic acid (oxidation) → esterification with ethanol → ethyl ethanoate.",
        },
      },
      questions: [
        {
          id: "edialchem-syn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is retrosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making polymers" },
              { id: "b", text: "Planning backwards from target molecule" },
              { id: "c", text: "Breaking down molecules" },
              { id: "d", text: "Measuring yield" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Retrosynthesis", statement: "Work backwards to plan route." }],
            steps: [{ reasoning: "Identify target → work back to starting material.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Planning backwards",
          },
        },
        {
          id: "edialchem-syn-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What reagent converts an alkene to an alcohol?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Hydration", statement: "Alkene + steam/H₃PO₄ → alcohol." }],
            steps: [
              { reasoning: "Steam with H₃PO₄ catalyst.", marks: 1, markCode: "M" },
              { reasoning: "Addition across C=C → alcohol.", marks: 1, markCode: "M" },
              { reasoning: "Ethene → ethanol industrially.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steam + H₃PO₄ → alcohol",
            commonErrors: ["Saying H₂ only."],
          },
        },
        {
          id: "edialchem-syn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a synthesis of ethanoic acid from ethanol.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Oxidation", statement: "Primary alcohol → carboxylic acid." }],
            steps: [
              { reasoning: "Ethanol + oxidising agent (K₂Cr₂O₇/H₂SO₄ or KMnO₄).", marks: 1, markCode: "M" },
              { reasoning: "Ethanol → ethanal → ethanoic acid.", marks: 1, markCode: "M" },
              { reasoning: "Reflux to ensure complete oxidation.", marks: 1, markCode: "A" },
              { reasoning: "Distillation separates product.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethanol →(oxidation)→ ethanoic acid",
            commonErrors: ["Stopping at aldehyde."],
          },
        },
        {
          id: "edialchem-syn-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plan a synthesis of propyl ethanoate from ethene.",
          parts: [
            { label: "a", prompt: "Identify target functional groups.", marks: 2 },
            { label: "b", prompt: "Plan steps for alcohol precursor.", marks: 4 },
            { label: "c", prompt: "Complete synthesis route.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Synthesis planning", statement: "Ester needs alcohol + acid." }],
            steps: [
              { part: "a", reasoning: "Target: ester propyl ethanoate = propanol + ethanoic acid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Need to make both components.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Propan-1-ol from propene: propene → 1-bromopropane → propan-1-ol.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Or propene → propan-2-ol (hydration) → ... need 1-ol.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hydrolysis of halogenoalkane gives alcohol.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Propene + HBr → 1-bromopropane (Markovnikov gives 2-bromo actually).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethanol from ethene hydration.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethanol → ethanoic acid oxidation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Propan-1-ol + ethanoic acid → propyl ethanoate (esterification).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conc. H₂SO₄ catalyst.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethene→ethanol→ethanoic acid; propene→propanol; esterify",
            commonErrors: ["Wrong alcohol position."],
          },
        },
      ],
    },
    {
      id: "edialchem-u4-green",
      title: "Green chemistry and yield",
      skill: "Calculate percentage yield and atom economy and discuss green chemistry principles.",
      lesson: {
        sections: [
          {
            heading: "Percentage yield",
            body: "Yield = (actual mass/theoretical mass) × 100%. Always less than 100% due to side reactions, incomplete reaction, product loss during purification. High yield = efficient process.",
          },
          {
            heading: "Atom economy",
            body: "Atom economy = (M_r desired product / Σ M_r all products) × 100%. 100% = all atoms in desired product, no waste. Addition reactions have 100%; substitution/elimination less. Green chemistry prefers high atom economy.",
          },
          {
            heading: "Green chemistry principles",
            body: "12 principles: prevent waste, atom economy, less hazardous synthesis, renewable feedstocks, catalysis, energy efficiency, safer solvents, reduce derivatives, catalysis, degradation, real-time pollution prevention, accident prevention. Industrial chemistry balancing cost, yield, environment.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "%yield = (actual/theoretical) × 100%" },
          { name: "Key formula", statement: "Atom economy = M_r(product)/ΣM_r(products) × 100%" },
        ],
        workedExample: {
          problem: "Calculate atom economy for CH₄ + Cl₂ → CH₃Cl + HCl.",
          solution: "M_r products: CH₃Cl=50.5, HCl=36.5, total=87. Atom economy = 50.5/87 = 58%.",
        },
      },
      questions: [
        {
          id: "edialchem-green-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 100% atom economy mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100% yield" },
              { id: "b", text: "All atoms in desired product, no waste" },
              { id: "c", text: "Fastest reaction" },
              { id: "d", text: "Cheapest process" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Atom economy", statement: "All atoms → desired product." }],
            steps: [{ reasoning: "No byproduct waste.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** All atoms → product",
          },
        },
        {
          id: "edialchem-green-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate percentage yield if 8 g expected but 6 g obtained.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 75, tolerance: 0.1, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "method", name: "Yield", statement: "actual/theoretical × 100%." }],
            steps: [
              { reasoning: "%yield = 6/8 × 100.", marks: 1, markCode: "M" },
              { reasoning: "= 75%.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Inverting ratio."],
          },
        },
        {
          id: "edialchem-green-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why addition reactions have 100% atom economy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Atom economy", statement: "All atoms incorporated into product." }],
            steps: [
              { reasoning: "Addition: all reactant atoms end up in single product.", marks: 1, markCode: "M" },
              { reasoning: "No byproduct formed.", marks: 1, markCode: "M" },
              { reasoning: "E.g. C₂H₄ + Br₂ → C₂H₄Br₂ — all atoms used.", marks: 1, markCode: "A" },
              { reasoning: "Contrast substitution producing HX waste.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "All atoms → product; no waste",
            commonErrors: ["Saying yield = atom economy."],
          },
        },
        {
          id: "edialchem-green-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss green chemistry principles in industrial synthesis.",
          parts: [
            { label: "a", prompt: "Atom economy.", marks: 3 },
            { label: "b", prompt: "Catalysis.", marks: 3 },
            { label: "c", prompt: "Other principles.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Green chemistry", statement: "Reduce waste, energy, hazard." }],
            steps: [
              { part: "a", reasoning: "Maximise atom economy → less waste.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Choose reactions with few byproducts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reduces disposal costs/environmental impact.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Catalysts speed reactions without being consumed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lower activation energy → less energy needed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Often more selective → fewer side products.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Renewable feedstocks (biomass vs petroleum).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Safer solvents (water vs organic).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy efficiency — room temp vs high temp/pressure.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Design for degradation — biodegradable products.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Atom economy + catalysis + renewable + safe solvents",
            commonErrors: ["Only mentioning recycling."],
          },
        },
      ],
    },
  ],
};
