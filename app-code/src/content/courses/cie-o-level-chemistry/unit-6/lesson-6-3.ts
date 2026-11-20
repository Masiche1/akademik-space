import type { Lesson } from "../../../types.ts";

export const lesson163: Lesson = {
  id: "olchem-u6-lesson-6-3",
  code: "6-3",
  title: "Dynamic Equilibrium and Industrial Processes",
  goal: "I CAN explain dynamic equilibrium and apply Le Chatelier's principle to industrial processes.",
  standards: ["5070 6.3"],
  vocabulary: [
    { term: "Dynamic equilibrium", definition: "Forward and reverse reactions continue at equal rates — concentrations constant." },
    { term: "Le Chatelier's principle", definition: "System counteracts imposed change to restore equilibrium." },
    { term: "Haber process", definition: "N₂ + 3H₂ ⇌ 2NH₃ — industrial ammonia production." },
    { term: "Contact process", definition: "2SO₂ + O₂ ⇌ 2SO₃ — industrial sulphuric acid production." },
    { term: "Compromise conditions", definition: "Temperature/pressure chosen for yield vs rate vs cost." },
    { term: "Equilibrium constant", definition: "Kc = [products]/[reactants] at equilibrium — depends only on T." },
    { term: "Catalyst in equilibrium", definition: "Speeds attainment of equilibrium but does not shift position." },
    { term: "Yield", definition: "Amount of product at equilibrium — maximised by conditions." },
  ],
  concepts: [
    {
      id: "olchem-u6-dyn-eq",
      title: "Dynamic equilibrium",
      skill: "Explain dynamic equilibrium and Le Chatelier's principle.",
      lesson: {
        sections: [
          {
            heading: "Dynamic equilibrium",
            body: "In a reversible reaction at equilibrium:\n- Forward and reverse reactions continue at **equal rates**\n- Concentrations of reactants and products stay **constant**\n- 'Dynamic' = reactions still happening, not stopped",
          },
          {
            heading: "Le Chatelier's principle",
            body: "If a system at equilibrium is disturbed, it shifts to counteract the change:\n\n- **Concentration ↑** of reactant → shifts right (more product)\n- **Pressure ↑** (gas) → shifts to fewer moles of gas\n- **Temperature ↑** → shifts in endothermic direction\n- **Catalyst** → no shift, just faster equilibrium",
          },
          {
            heading: "Examples",
            body: "N₂ + 3H₂ ⇌ 2NH₃ (exothermic forward):\n- Pressure ↑ → right (4 mol gas → 2 mol)\n- Temperature ↓ → right (exothermic favoured)\n- But lower T slows rate → compromise ~450°C",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "For N₂ + 3H₂ ⇌ 2NH₃, what happens to equilibrium if pressure increases?",
          solution: "Shifts right — 4 moles gas reactants → 2 moles gas product; higher pressure favours fewer gas molecules.",
        },
      },
      questions: [
        {
          id: "olchem-u6-dyn-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'dynamic' mean in dynamic equilibrium?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reactions have stopped" }, { id: "b", text: "Forward and reverse continue at equal rates" }, { id: "c", text: "Concentrations are zero" }, { id: "d", text: "Only forward occurs" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dynamic equilibrium", statement: "Equal rates, constant concentrations." }],
            steps: [{ reasoning: "Recall.", working: "\\text{equal rates}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Forward and reverse continue at equal rates",
            commonErrors: ["Thinking reactions stop at equilibrium."],
          },
        },
        {
          id: "olchem-u6-dyn-eq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Le Chatelier's principle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Le Chatelier", statement: "System counteracts imposed change." }],
            steps: [
              { reasoning: "State principle.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "If a system at equilibrium is subjected to a change, it will shift to counteract that change and restore equilibrium.",
            commonErrors: ["Saying 'system stops change' — it counteracts."],
          },
        },
        {
          id: "olchem-u6-dyn-eq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃ (exothermic), predict the effect of increasing pressure and decreasing temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Le Chatelier", statement: "P↑ → fewer moles; T↓ → exothermic favoured." }],
            steps: [
              { reasoning: "Pressure ↑: 4 mol gas → 2 mol gas.", marks: 1, markCode: "M" },
              { reasoning: "Shifts right (fewer moles).", marks: 1, markCode: "A" },
              { reasoning: "T ↓: exothermic direction favoured.", marks: 1, markCode: "M" },
              { reasoning: "Shifts right.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both shifts favour more NH₃ — pressure increase favours fewer gas moles (right); temperature decrease favours exothermic direction (right).",
            commonErrors: ["Temperature effect reversed — lower T favours exothermic."],
          },
        },
        {
          id: "olchem-u6-dyn-eq-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain dynamic equilibrium and Le Chatelier's principle.",
          parts: [
            { label: "a", prompt: "Define dynamic equilibrium.", marks: 3 },
            { label: "b", prompt: "State Le Chatelier's principle.", marks: 3 },
            { label: "c", prompt: "Apply to N₂ + 3H₂ ⇌ 2NH₃.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Equilibrium", statement: "Equal rates; system counteracts changes." }],
            steps: [
              { part: "a", reasoning: "Reversible reaction at constant concentrations.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Forward/reverse rates equal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reactions continue.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Counteracts imposed change.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Restores equilibrium.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "P↑ → right (fewer moles).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "T↓ → right (exothermic).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Catalyst → no shift.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) equal rates const conc (b) counteract change (c) P↑T↓ right, catalyst no shift",
            commonErrors: ["In (c) saying catalyst shifts equilibrium."],
          },
        },
      ],
    },
    {
      id: "olchem-u6-industrial-proc",
      title: "Industrial equilibrium processes",
      skill: "Describe the Haber and Contact processes and compromise conditions.",
      lesson: {
        sections: [
          {
            heading: "Haber process",
            body: "N₂ + 3H₂ ⇌ 2NH₃ (exothermic, fewer moles gas)\nConditions: ~450°C, ~200 atm, Fe catalyst\n- High P → more NH₃ (fewer moles)\n- Moderate T → compromise rate vs yield\n- Fe catalyst → faster equilibrium",
          },
          {
            heading: "Contact process",
            body: "2SO₂ + O₂ ⇌ 2SO₃ (exothermic, fewer moles)\nConditions: ~450°C, ~1-2 atm, V₂O₅ catalyst\nSO₃ + H₂O → H₂SO₄ (via oleum intermediate)",
          },
          {
            heading: "Compromise conditions",
            body: "High yield needs low T (exothermic) but low T = slow rate. Solution: moderate T + catalyst for rate, high P for yield. Economic balance: yield × rate vs energy cost.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does the Haber process use 450°C not lower?",
          solution: "Lower T would give more NH₃ (exothermic) but too slow without impractical energy input; 450°C balances yield and rate.",
        },
      },
      questions: [
        {
          id: "olchem-u6-industrial-proc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Haber process used to make?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sulphuric acid" }, { id: "b", text: "Ammonia" }, { id: "c", text: "Nitric acid" }, { id: "d", text: "Hydrogen" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Haber process", statement: "Makes NH₃." }],
            steps: [{ reasoning: "Recall.", working: "\\text{NH}_3", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Ammonia",
            commonErrors: ["Confusing with Contact process (H₂SO₄)."],
          },
        },
        {
          id: "olchem-u6-industrial-proc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What catalyst is used in the Haber process?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Haber catalyst", statement: "Iron (Fe)." }],
            steps: [
              { reasoning: "State catalyst.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Iron (Fe) — often with promoters like Al₂O₃/K₂O.",
            commonErrors: ["Saying V₂O₅ — that's Contact process."],
          },
        },
        {
          id: "olchem-u6-industrial-proc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Haber process uses high pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Le Chatelier", statement: "P↑ favours fewer moles gas." }],
            steps: [
              { reasoning: "4 mol gas → 2 mol gas.", marks: 1, markCode: "M" },
              { reasoning: "High P shifts right.", marks: 1, markCode: "M" },
              { reasoning: "More NH₃ yield.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High pressure shifts equilibrium toward fewer gas molecules — N₂+3H₂ (4 mol) → 2NH₃ (2 mol) — increasing ammonia yield.",
            commonErrors: ["Saying 'pressure speeds it up' — it's yield not rate."],
          },
        },
        {
          id: "olchem-u6-industrial-proc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the conditions and reasoning for the Haber process.",
          parts: [
            { label: "a", prompt: "State the reaction and conditions.", marks: 3 },
            { label: "b", prompt: "Explain temperature choice.", marks: 3 },
            { label: "c", prompt: "Explain pressure and catalyst choice.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Haber", statement: "N₂+3H₂⇌2NH₃, 450°C, 200atm, Fe." }],
            steps: [
              { part: "a", reasoning: "N₂+3H₂⇌2NH₃.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "~450°C, ~200 atm.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fe catalyst.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Exothermic → low T favours yield.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "But too low = slow rate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "450°C compromise.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High P → fewer moles → more NH₃.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fe catalyst speeds rate.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No shift in equilibrium.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) eqn+450°C+200atm+Fe (b) compromise T (c) high P yield, Fe rate",
            commonErrors: ["In (b) saying 'highest possible T'."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u6-dyn-eq-notes",
      title: "Dynamic equilibrium and industrial processes — revision notes",
      summary: "Dynamic equilibrium, Le Chatelier, Haber and Contact processes.",
      sections: [
        {
          heading: "Key facts",
          body: "Dynamic eq: equal rates, constant concs. Le Chatelier: system counteracts change. Haber: N₂+3H₂⇌2NH₃, 450°C/200atm/Fe. Contact: 2SO₂+O₂⇌2SO₃, V₂O₅. Catalyst no shift.",
        },
        {
          heading: "Exam technique",
          body: "- P↑ → fewer moles gas; T↓ → exothermic direction.\n- Compromise T: yield vs rate.\n- Catalyst affects rate not position.",
        },
      ],
    },
  ],
};
