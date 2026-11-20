import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "olchem-u4-lesson-4-2",
  code: "4-2",
  title: "Redox Reactions and Half-Equations",
  goal: "I CAN identify oxidation and reduction and write half-equations for redox reactions.",
  standards: ["5070 4.2"],
  vocabulary: [
    { term: "Oxidation", definition: "Loss of electrons or gain of oxygen / loss of hydrogen." },
    { term: "Reduction", definition: "Gain of electrons or loss of oxygen / gain of hydrogen." },
    { term: "Redox", definition: "Reaction involving both oxidation and reduction." },
    { term: "OILRIG", definition: "Mnemonic: Oxidation Is Loss, Reduction Is Gain (of electrons)." },
    { term: "Half-equation", definition: "Shows only oxidation or only reduction half of a redox reaction." },
    { term: "Oxidising agent", definition: "Species that oxidises another (itself reduced)." },
    { term: "Reducing agent", definition: "Species that reduces another (itself oxidised)." },
    { term: "Displacement reaction", definition: "More reactive element displaces less reactive from compound." },
  ],
  concepts: [
    {
      id: "olchem-u4-redox",
      title: "Oxidation and reduction",
      skill: "Identify oxidation/reduction using OILRIG and electron transfer.",
      lesson: {
        sections: [
          {
            heading: "OILRIG",
            body: "**O**xidation **I**s **L**oss (of electrons); **R**eduction **I**s **G**ain (of electrons).\n\nAlso: oxidation = gain of oxygen or loss of hydrogen; reduction = loss of oxygen or gain of hydrogen.",
          },
          {
            heading: "Examples",
            body: "- Mg + Cl₂ → MgCl₂: Mg loses 2e⁻ (oxidised); Cl₂ gains 2e⁻ (reduced).\n- CuO + H₂ → Cu + H₂O: CuO loses oxygen (reduced); H₂ gains oxygen (oxidised).\n- Fe²⁺ → Fe³⁺ + e⁻: oxidation (electron lost).",
          },
          {
            heading: "Agents",
            body: "The species **oxidised** is the **reducing agent**; the species **reduced** is the **oxidising agent**. In every redox reaction, one species is oxidised and another reduced.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "In Zn + Cu²⁺ → Zn²⁺ + Cu, what is oxidised and reduced?",
          solution: "Zn loses electrons → Zn²⁺ (oxidised); Cu²⁺ gains electrons → Cu (reduced). Zn is reducing agent, Cu²⁺ is oxidising agent.",
        },
      },
      questions: [
        {
          id: "olchem-u4-redox-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does OILRIG stand for?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Oxidation Is Loss, Reduction Is Gain" }, { id: "b", text: "Only Ionic Loss Results In Gain" }, { id: "c", text: "Oxidation Involves Light, Reduction Involves Gas" }, { id: "d", text: "Oxygen Is Lost, Reduction Is Gained" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "OILRIG", statement: "Oxidation Is Loss, Reduction Is Gain of electrons." }],
            steps: [{ reasoning: "Recall.", working: "\\text{OILRIG}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Oxidation Is Loss, Reduction Is Gain",
            commonErrors: ["Remembering backwards — oxidation = loss."],
          },
        },
        {
          id: "olchem-u4-redox-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In Mg + 2HCl → MgCl₂ + H₂, identify what is oxidised and reduced.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Redox", statement: "Mg loses e⁻; H⁺ gains e⁻." }],
            steps: [
              { reasoning: "Mg → Mg²⁺ loses electrons (oxidised).", marks: 1, markCode: "M" },
              { reasoning: "H⁺ → H₂ gains electrons (reduced).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mg is oxidised (loses electrons); hydrogen ions are reduced (gain electrons to form H₂).",
            commonErrors: ["Saying MgCl₂ is oxidised — track the element, not compound."],
          },
        },
        {
          id: "olchem-u4-redox-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the oxidising and reducing agents in Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Redox agents", statement: "Oxidised species = reducing agent; reduced = oxidising agent." }],
            steps: [
              { reasoning: "Fe₂O₃ loses oxygen → Fe reduced.", marks: 1, markCode: "M" },
              { reasoning: "CO gains oxygen → CO₂ oxidised.", marks: 1, markCode: "M" },
              { reasoning: "Fe₂O₃ = oxidising agent; CO = reducing agent.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fe₂O₃ is the oxidising agent (Fe reduced); CO is the reducing agent (C oxidised to CO₂).",
            commonErrors: ["Swapping agent and species — agent is what causes change in the OTHER."],
          },
        },
        {
          id: "olchem-u4-redox-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain oxidation and reduction in the reaction CuO + H₂ → Cu + H₂O.",
          parts: [
            { label: "a", prompt: "Identify which species gains and loses oxygen.", marks: 3 },
            { label: "b", prompt: "State which is oxidised and which reduced.", marks: 3 },
            { label: "c", prompt: "Identify oxidising and reducing agents.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Redox", statement: "Loss of O = reduction; gain of O = oxidation." }],
            steps: [
              { part: "a", reasoning: "CuO loses oxygen.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "H₂ gains oxygen → H₂O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CuO reduced (loss of O).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "H₂ oxidised (gain of O).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CuO oxidises H₂ → oxidising agent.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "H₂ reduces CuO → reducing agent.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CuO loses O, H₂ gains O (b) CuO reduced, H₂ oxidised (c) CuO=oxidising, H₂=reducing",
            commonErrors: ["In (b) reversing oxidation/reduction."],
          },
        },
      ],
    },
    {
      id: "olchem-u4-half-equations",
      title: "Half-equations",
      skill: "Write and balance half-equations for oxidation and reduction.",
      lesson: {
        sections: [
          {
            heading: "Writing half-equations",
            body: "Show electron loss/gain for one species at a time.\n\nOxidation (lose e⁻): Mg → Mg²⁺ + 2e⁻\nReduction (gain e⁻): Cl₂ + 2e⁻ → 2Cl⁻\n\nBalance atoms first, then charge with electrons.",
          },
          {
            heading: "Examples",
            body: "Zn → Zn²⁺ + 2e⁻ (oxidation)\nCu²⁺ + 2e⁻ → Cu (reduction)\n2Cl⁻ → Cl₂ + 2e⁻ (oxidation, reversed)\nO₂ + 4e⁻ → 2O²⁻ (reduction)",
          },
          {
            heading: "Combining halves",
            body: "Multiply half-equations so electrons cancel, then add.\nZn → Zn²⁺ + 2e⁻\nCu²⁺ + 2e⁻ → Cu\nOverall: Zn + Cu²⁺ → Zn²⁺ + Cu",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write half-equations for Mg reacting with Cl₂.",
          solution: "Mg → Mg²⁺ + 2e⁻ (oxidation); Cl₂ + 2e⁻ → 2Cl⁻ (reduction). Overall: Mg + Cl₂ → MgCl₂.",
        },
      },
      questions: [
        {
          id: "olchem-u4-half-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an oxidation half-equation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cu²⁺ + 2e⁻ → Cu" }, { id: "b", text: "Zn → Zn²⁺ + 2e⁻" }, { id: "c", text: "Cl₂ + 2e⁻ → 2Cl⁻" }, { id: "d", text: "Na⁺ + e⁻ → Na" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Oxidation half-eqn", statement: "Electrons on product side (lost)." }],
            steps: [{ reasoning: "Recall.", working: "\\text{e}^- \\text{ on right}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Zn → Zn²⁺ + 2e⁻",
            commonErrors: ["Picking reduction — electrons on wrong side."],
          },
        },
        {
          id: "olchem-u4-half-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the reduction half-equation for Cl₂.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half-equation", statement: "Balance atoms then charge." }],
            steps: [
              { reasoning: "Cl₂ + 2e⁻ → 2Cl⁻.", marks: 1, markCode: "M" },
              { reasoning: "Charge balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cl₂ + 2e⁻ → 2Cl⁻",
            commonErrors: ["Writing Cl₂ → 2Cl + 2e⁻ — that's oxidation."],
          },
        },
        {
          id: "olchem-u4-half-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write half-equations for the reaction Zn + Cu²⁺ → Zn²⁺ + Cu.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half-equations", statement: "Zn→Zn²⁺+2e⁻; Cu²⁺+2e⁻→Cu." }],
            steps: [
              { reasoning: "Zn → Zn²⁺ + 2e⁻.", marks: 1, markCode: "M" },
              { reasoning: "Cu²⁺ + 2e⁻ → Cu.", marks: 1, markCode: "M" },
              { reasoning: "Both balanced.", marks: 1, markCode: "M" },
              { reasoning: "State both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxidation: Zn → Zn²⁺ + 2e⁻; Reduction: Cu²⁺ + 2e⁻ → Cu",
            commonErrors: ["Reversing which half is oxidation."],
          },
        },
        {
          id: "olchem-u4-half-equations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how to write balanced half-equations for a redox reaction.",
          parts: [
            { label: "a", prompt: "State the steps for an oxidation half-equation.", marks: 3 },
            { label: "b", prompt: "State the steps for a reduction half-equation.", marks: 3 },
            { label: "c", prompt: "Explain how electrons cancel when combining.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half-equations", statement: "Balance atoms, then charge with e⁻." }],
            steps: [
              { part: "a", reasoning: "Write species → products.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balance atoms.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add e⁻ to products to balance charge.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write species → products.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balance atoms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add e⁻ to reactants to balance charge.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply halves to equal e⁻ numbers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add halves; e⁻ cancel.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overall equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) atoms→charge→e⁻ products (b) atoms→charge→e⁻ reactants (c) equalise+cancel",
            commonErrors: ["Forgetting to balance charge after atoms."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u4-redox-notes",
      title: "Redox and half-equations — revision notes",
      summary: "OILRIG, oxidation/reduction identification, writing half-equations.",
      sections: [
        {
          heading: "Key facts",
          body: "Oxidation = lose e⁻/gain O/lose H. Reduction = gain e⁻/lose O/gain H. Oxidised species = reducing agent. Half-eqn: balance atoms then charge with e⁻.",
        },
        {
          heading: "Exam technique",
          body: "- Track the element changing, not whole compound.\n- Electrons on right = oxidation; left = reduction.\n- Combine halves so e⁻ cancel.",
        },
      ],
    },
  ],
};
