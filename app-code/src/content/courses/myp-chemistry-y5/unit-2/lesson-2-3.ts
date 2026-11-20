import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypc5-u2-lesson-2-3",
  code: "2-3",
  title: "Electrochemistry and Electrolysis",
  goal: "I CAN describe electrochemical cells, write half-equations, explain redox reactions, and detail electrolysis products.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Electrochemical cell", definition: "Device converting chemical energy to electrical energy; two half-cells joined by salt bridge." },
    { term: "Half-equation", definition: "Equation showing oxidation or reduction at one electrode with electron transfer shown." },
    { term: "Oxidation", definition: "Loss of electrons (OIL RIG); species oxidised is the reducing agent." },
    { term: "Reduction", definition: "Gain of electrons; species reduced is the oxidising agent." },
    { term: "Electrolysis", definition: "Using electrical energy to drive a non-spontaneous chemical reaction." },
    { term: "Anode/cathode", definition: "Anode = oxidation (positive in electrolysis, negative in cells); cathode = reduction." },
  ],
  concepts: [
    {
      id: "mypc5-u2-cells",
      title: "Electrochemical cells and redox",
      skill: "Explain cell operation, write half-equations, and identify oxidation and reduction.",
      lesson: {
        sections: [
          {
            heading: "How a cell works",
            body: "A **voltaic (galvanic) cell** converts chemical energy to electricity. Two half-cells (e.g. Zn in ZnSO₄, Cu in CuSO₄) joined by a **salt bridge** (completes circuit, prevents charge build-up). More reactive metal (Zn) is the **anode** → oxidised, loses electrons. Less reactive (Cu) is the **cathode** → reduced, gains electrons. Electrons flow through external wire from anode to cathode → current.",
          },
          {
            heading: "Half-equations",
            body: "Anode (oxidation): Zn → Zn²⁺ + 2e⁻. Cathode (reduction): Cu²⁺ + 2e⁻ → Cu. Overall: Zn + Cu²⁺ → Zn²⁺ + Cu. **OIL RIG**: Oxidation Is Loss, Reduction Is Gain of electrons. The species oxidised (Zn) is the **reducing agent**; species reduced (Cu²⁺) is the **oxidising agent**.",
          },
          {
            heading: "Redox series and uses",
            body: "Reactivity series predicts cell voltage: bigger difference in reactivity → higher voltage. Cells power batteries (dry cells, lead-acid, lithium-ion), corrosion protection, and electroplating. Corrosion is unwanted oxidation — sacrificial anodes (zinc on ships) protect iron.",
          },
        ],
        keyFormulas: [
          { name: "Cell", statement: "Anode oxidised (e^- lost); cathode reduced (e^- gained)" },
          { name: "OIL RIG", statement: "Oxidation = loss of e^-; Reduction = gain of e^-" },
          { name: "Cell reaction", statement: "Zn + Cu^2+ -> Zn^2+ + Cu; electrons flow anode to cathode" },
        ],
        workedExample: {
          problem: "For a Zn/Cu cell, which electrode is positive and what happens there?",
          solution: "Cu is cathode (positive terminal in the cell). Cu²⁺ ions gain electrons at the cathode and are reduced to Cu metal: Cu²⁺ + 2e⁻ → Cu.",
        },
      },
      questions: [
        {
          id: "mypc5-u2-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a voltaic cell, electrons flow through the external wire from...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anode to cathode" },
              { id: "b", text: "Cathode to anode" },
              { id: "c", text: "Salt bridge to anode" },
              { id: "d", text: "Solution to solution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electron flow", statement: "e⁻ released at anode travel through wire to cathode." },
            ],
            steps: [
              { reasoning: "Oxidation at anode releases electrons → flow to cathode.", working: "\\text{anode}\\to\\text{cathode}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Anode to cathode",
            commonErrors: ["Reversing direction — electrons flow opposite to conventional current."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-cells-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of the salt bridge in an electrochemical cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Completes the circuit and maintains charge balance by allowing ion flow" },
              { id: "b", text: "Increases the voltage" },
              { id: "c", text: "Provides the reactants" },
              { id: "d", text: "Cools the cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salt bridge", statement: "Ion conductor completing circuit; prevents charge imbalance." },
            ],
            steps: [
              { reasoning: "Electrons cannot pass through solutions — ions must balance charge.", working: "\\text{ion flow}", marks: 1, markCode: "M" },
              { reasoning: "Salt bridge carries ions to keep half-cells neutral.", working: "\\text{neutral}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Completes circuit, maintains charge balance",
            commonErrors: ["Saying it conducts electrons."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, identify what is oxidised, what is reduced, and the oxidising agent.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zn is oxidised; Cu²⁺ is reduced; Cu²⁺ is the oxidising agent" },
              { id: "b", text: "Cu²⁺ is oxidised; Zn is reduced; Zn is the oxidising agent" },
              { id: "c", text: "Both are oxidised" },
              { id: "d", text: "No redox occurs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Redox identification", statement: "Oxidation = e⁻ loss; reduced species = oxidising agent." },
            ],
            steps: [
              { reasoning: "Zn → Zn²⁺ loses 2e⁻ → oxidised.", working: "Zn\\to Zn^{2+}", marks: 1, markCode: "M" },
              { reasoning: "Cu²⁺ → Cu gains 2e⁻ → reduced.", working: "Cu^{2+}\\to Cu", marks: 1, markCode: "M" },
              { reasoning: "Cu²⁺ causes oxidation of Zn → oxidising agent.", working: "\\text{oxidising agent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn oxidised, Cu²⁺ reduced, Cu²⁺ = oxidising agent",
            commonErrors: ["Calling Zn the oxidising agent — it is the reducing agent."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A galvanic cell uses magnesium and copper half-cells: Mg in MgSO₄ and Cu in CuSO₄.",
          parts: [
            { label: "a", prompt: "Write half-equations for both electrodes, labelling anode and cathode.", marks: 3 },
            { label: "b", prompt: "Write the overall cell reaction.", marks: 2 },
            { label: "c", prompt: "Explain why the magnesium electrode is the negative terminal in this cell.", marks: 1 },
            { label: "d", prompt: "Evaluate why galvanic cells are preferred over disposable batteries for some applications, and one drawback.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cell equations", statement: "Anode: metal → ion + e⁻; cathode: ion + e⁻ → metal." },
            ],
            steps: [
              { part: "a", reasoning: "Anode (Mg, more reactive): Mg -> Mg^2+ + 2e^-.", working: "Mg\\to Mg^{2+}+2e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cathode (Cu): Cu^2+ + 2e^- -> Cu.", working: "Cu^{2+}+2e^-\\to Cu", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both labelled correctly with electron balance.", working: "\\text{labels}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Overall: Mg + Cu^2+ -> Mg^2+ + Cu.", working: "Mg+Cu^{2+}\\to Mg^{2+}+Cu", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Electrons cancel when half-equations added.", working: "\\text{cancelled}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mg is oxidised at anode releasing electrons → negative terminal (electron source).", working: "\\text{electron source}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: reusable/rechargeable, lower long-term cost, less waste than disposable cells.", working: "\\text{reusable}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Drawback: heavier, self-discharge, or specific charging requirements.", working: "\\text{drawback}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg→Mg²⁺+2e⁻ anode; Cu²⁺+2e⁻→Cu cathode (b) Mg+Cu²⁺→Mg²⁺+Cu (c) anode = electron source = negative (d) rechargeable but heavier/self-discharge",
            commonErrors: ["In (a), swapping anode/cathode assignments."],
            examinerNote: "M1 M1 A1 for (a); M1 A1 for (b); A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u2-cells-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a voltaic (galvanic) cell, the anode is the electrode where...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxidation occurs and electrons are released" },
              { id: "b", text: "Reduction occurs and electrons are gained" },
              { id: "c", text: "No reaction occurs" },
              { id: "d", text: "The salt bridge is located" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anode", statement: "Anode = oxidation (loss of e⁻); cathode = reduction." },
            ],
            steps: [
              { reasoning: "OIL RIG: oxidation = loss of electrons at the anode.", working: "\\text{OIL}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxidation, electrons released",
            commonErrors: ["Confusing anode with cathode."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-cells-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the half-equation Zn → Zn²⁺ + 2e⁻, how many electrons are released per zinc atom?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons", answer: 2, unit: "e⁻" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron balance", statement: "Charge must balance: Zn loses 2 electrons to become Zn²⁺." },
            ],
            steps: [
              { reasoning: "Zn atom (0) → Zn²⁺ (+2) requires loss of 2 electrons.", working: "2e^-", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\ \\text{e}^-$",
            commonErrors: ["Writing 1 electron — charge not conserved."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc5-u2-cells-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which half-equation correctly describes what happens at the cathode of a copper half-cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cu²⁺ + 2e⁻ → Cu" },
              { id: "b", text: "Cu → Cu²⁺ + 2e⁻" },
              { id: "c", text: "Cu²⁺ → Cu + 2e⁻" },
              { id: "d", text: "Cu + 2e⁻ → Cu²⁺" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Half-equations", statement: "Cathode: ion + e⁻ → metal (reduction); anode: metal → ion + e⁻." },
            ],
            steps: [
              { reasoning: "Cathode is reduction — Cu²⁺ gains electrons to form Cu metal.", working: "Cu^{2+}+2e^-\\to Cu", marks: 1, markCode: "M" },
              { reasoning: "Charge balanced: +2 − 2 = 0 on both sides.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cu²⁺ + 2e⁻ → Cu",
            commonErrors: ["Reversing — that's the anode half-equation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, how many electrons are transferred per Zn atom oxidised?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons", answer: 2, unit: "e⁻" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Redox electron count", statement: "Electrons lost = electrons gained in overall reaction." },
            ],
            steps: [
              { reasoning: "Zn → Zn²⁺ loses 2 electrons; same 2 gained by Cu²⁺.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$ electrons per Zn atom.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{e}^-$",
            commonErrors: ["Counting total electrons in the cell instead of per atom."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the reaction Fe + Cu²⁺ → Fe²⁺ + Cu, which species is the reducing agent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fe — it is oxidised (loses electrons)" },
              { id: "b", text: "Cu²⁺ — it is reduced" },
              { id: "c", text: "Cu — the product" },
              { id: "d", text: "No reducing agent exists" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reducing agent", statement: "Species oxidised = electron donor = reducing agent." },
            ],
            steps: [
              { reasoning: "Fe → Fe²⁺ loses 2e⁻ → oxidised → Fe is reducing agent.", working: "Fe\\to Fe^{2+}", marks: 1, markCode: "M" },
              { reasoning: "Cu²⁺ gains electrons → reduced → oxidising agent, not reducing.", working: "Cu^{2+}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fe — the reducing agent",
            commonErrors: ["Calling Cu²⁺ the reducing agent — it's the oxidising agent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For Mg + Cu²⁺ → Mg²⁺ + Cu, how many electrons are transferred in the overall reaction?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons", answer: 2, unit: "e⁻" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron transfer", statement: "Electrons lost at anode = electrons gained at cathode." },
            ],
            steps: [
              { reasoning: "Mg → Mg²⁺ releases 2e⁻; Cu²⁺ + 2e⁻ → Cu consumes 2e⁻.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "Net transfer = $2$ electrons per formula unit.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{e}^-$",
            commonErrors: ["Adding electrons from both half-equations → 4."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Iron structures are protected by attaching zinc blocks (sacrificial anodes). Explain how this prevents rusting.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zinc is more reactive than iron, so it is oxidised preferentially — it corrodes instead of the iron, which is protected" },
              { id: "b", text: "Zinc makes iron magnetic" },
              { id: "c", text: "Zinc seals the surface completely" },
              { id: "d", text: "Zinc lowers the iron's density" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sacrificial anode", statement: "More reactive metal oxidises preferentially, protecting the less reactive metal." },
            ],
            steps: [
              { reasoning: "Zinc higher in reactivity series → oxidised before iron.", working: "\\text{Zn first}", marks: 1, markCode: "M" },
              { reasoning: "Electrons from Zn oxidation protect Fe from oxidising (rusting).", working: "\\text{protected}", marks: 1, markCode: "M" },
              { reasoning: "Zinc 'sacrifices' itself — corrodes while iron stays intact.", working: "\\text{sacrificial}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zinc oxidises preferentially, protecting iron",
            commonErrors: ["Saying zinc physically blocks oxygen — it's electrochemical."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the cell Al | Al³⁺ || Cu²⁺ | Cu, the half-equations are Al → Al³⁺ + 3e⁻ and Cu²⁺ + 2e⁻ → Cu. How many electrons are transferred per Al atom in the overall reaction?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons", answer: 3, unit: "e⁻" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron balance", statement: "Multiply half-equations by LCM of electron counts to balance." },
            ],
            steps: [
              { reasoning: "Al loses 3e⁻; to balance, 3 Cu²⁺ each gain 2e⁻ → need 2 Al (6e⁻) and 3 Cu²⁺ (6e⁻).", working: "2Al;3Cu", marks: 1, markCode: "M" },
              { reasoning: "Per Al atom: $3$ electrons lost.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3$ electrons per Al atom.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\ \\text{e}^-$ per Al atom",
            commonErrors: ["Answering 6 — that's total for 2 Al atoms."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does a magnesium–copper cell produce a higher voltage than a zinc–copper cell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mg is more reactive than Zn, so the difference in reactivity (electrode potential) between the two metals is greater → higher voltage" },
              { id: "b", text: "Mg is heavier" },
              { id: "c", text: "Cu reacts differently" },
              { id: "d", text: "Voltage is always the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity and voltage", statement: "Greater reactivity difference → larger cell potential." },
            ],
            steps: [
              { reasoning: "Mg higher in reactivity series than Zn → bigger potential difference with Cu.", working: "\\text{Mg}>\\text{Zn}", marks: 1, markCode: "M" },
              { reasoning: "Larger driving force for electron transfer → higher voltage.", working: "\\text{voltage}", marks: 1, markCode: "M" },
              { reasoning: "Cu electrode same in both → difference comes from anode metal.", working: "\\text{anode}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Greater reactivity difference → higher voltage",
            commonErrors: ["Saying all cells have the same voltage."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the half-equations and overall equation for a cell made from zinc in ZnSO₄ and silver in AgNO₃ (Ag⁺ + e⁻ → Ag).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cell equations", statement: "Anode: metal → ion + e⁻; cathode: ion + e⁻ → metal." },
            ],
            steps: [
              { reasoning: "Anode (Zn, more reactive): Zn -> Zn^{2+} + 2e^-.", working: "Zn\\to Zn^{2+}+2e^-", marks: 1, markCode: "M" },
              { reasoning: "Cathode (Ag): Ag^+ + e^- -> Ag.", working: "Ag^++e^-\\to Ag", marks: 1, markCode: "M" },
              { reasoning: "Balance electrons: 2 Ag^+ + 2e^- -> 2Ag.", working: "2Ag^+", marks: 1, markCode: "A" },
              { reasoning: "Overall: Zn + 2Ag^+ -> Zn^{2+} + 2Ag.", working: "Zn+2Ag^+\\to Zn^{2+}+2Ag", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zn→Zn²⁺+2e⁻; 2Ag⁺+2e⁻→2Ag; Zn+2Ag⁺→Zn²⁺+2Ag",
            commonErrors: ["Unbalanced electron count between half-equations."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the process of corrosion of iron and how sacrificial anodes or galvanising protect iron structures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corrosion", statement: "Iron oxidises in presence of water and oxygen → rust (hydrated iron(III) oxide)." },
            ],
            steps: [
              { reasoning: "Corrosion = unwanted oxidation of iron by O₂ and H₂O → hydrated Fe₂O₃ (rust).", working: "\\text{rust}", marks: 1, markCode: "M" },
              { reasoning: "Sacrificial anode (Zn/Mg attached): more reactive metal oxidises preferentially → iron protected.", working: "\\text{sacrificial}", marks: 1, markCode: "M" },
              { reasoning: "Galvanising (Zn coating): zinc layer oxidises first, forming protective barrier; even scratches self-heal.", working: "\\text{galvanise}", marks: 1, markCode: "A" },
              { reasoning: "Both methods exploit reactivity series — Zn/Mg higher than Fe.", working: "\\text{series}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fe oxidises to rust; sacrificial/galvanised Zn oxidises first, protecting Fe",
            commonErrors: ["Saying paint alone is the only protection — focus on electrochemical methods asked."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-cells-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the advantages and disadvantages of electrochemical cells (batteries) compared with other energy sources for portable devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell applications", statement: "Cells convert chemical → electrical energy efficiently and portably." },
            ],
            steps: [
              { reasoning: "Advantage: direct chemical→electrical conversion, high efficiency, no moving parts, portable.", working: "\\text{efficient}", marks: 1, markCode: "M" },
              { reasoning: "Advantage: instant power, long shelf life, scalable from watch batteries to car batteries.", working: "\\text{portable}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: finite reactants → need recharging/replacement; heavy for energy stored.", working: "\\text{finite}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: some chemistries use toxic/heavy metals (Pb, Cd) → disposal issues; lithium cost/safety.", working: "\\text{toxicity}", marks: 1, markCode: "A" },
              { reasoning: "Disadvantage: voltage drops as reactants deplete; self-discharge over time.", working: "\\text{voltage}", marks: 1, markCode: "A" },
              { reasoning: "Overall: dominant for portability despite limitations — improving with Li-ion and recycling.", working: "\\text{overall}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Efficient portable power vs finite capacity, weight and toxicity drawbacks",
            commonErrors: ["One-sided answer without evaluation."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
    {
      id: "mypc5-u2-electrolysis",
      title: "Electrolysis in detail",
      skill: "Predict electrolysis products of aqueous solutions, write half-equations, and explain industrial electrolysis.",
      lesson: {
        sections: [
          {
            heading: "Electrolysis basics",
            body: "**Electrolysis** uses a DC supply to drive a non-spontaneous reaction. Positive ions (**cations**) move to the **cathode** (reduction); negative ions (**anions**) move to the **anode** (oxidation). For **molten** ionic compounds the products are straightforward: e.g. molten NaCl → Na at cathode, Cl₂ at anode.",
          },
          {
            heading: "Aqueous solutions",
            body: "In water, both the ions and H⁺/OH⁻ compete. Rules: at cathode, the **less reactive metal** is NOT discharged — instead H₂ forms (2H⁺ + 2e⁻ → H₂) unless the metal is very reactive (Na, K, Ca → metal instead). At anode, **halides** (Cl⁻, Br⁻, I⁻) discharge to halogen; otherwise OH⁻ → O₂. E.g. electrolysis of aqueous NaCl: cathode H₂, anode Cl₂ (not O₂, since Cl⁻ preferred).",
          },
          {
            heading: "Industrial uses",
            body: "Electrolysis of brine produces **chlorine, hydrogen and NaOH** — all valuable chemicals. Aluminium extraction from molten Al₂O₃ (with cryolite to lower mp) uses carbon anodes. Copper purification: impure Cu anode dissolves, pure Cu deposits at cathode. Electroplating deposits thin metal layers for protection or decoration.",
          },
        ],
        keyFormulas: [
          { name: "Cathode", statement: "Cations reduced; H_2 unless very reactive metal" },
          { name: "Anode", statement: "Anions oxidised; halides -> halogen, else O_2" },
          { name: "Brine", statement: "NaCl(aq) -> Cl_2 + H_2 + NaOH" },
        ],
        workedExample: {
          problem: "What forms at each electrode when aqueous copper(II) sulfate is electrolysed with inert electrodes?",
          solution: "Cathode: Cu²⁺ reduced → Cu metal deposits. Anode: water's OH⁻ oxidised → O₂ gas (sulfate not discharged).",
        },
      },
      questions: [
        {
          id: "mypc5-u2-electrolysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During electrolysis, which ion moves to the cathode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive ions (cations)" },
              { id: "b", text: "Negative ions (anions)" },
              { id: "c", text: "Neutral atoms" },
              { id: "d", text: "Electrons only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electrode migration", statement: "Cations → cathode (−); anions → anode (+)." },
            ],
            steps: [
              { reasoning: "Cathode is negative → attracts positive cations.", working: "\\text{cations}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Positive ions",
            commonErrors: ["Mixing up anode/cathode attraction."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is produced at the cathode during electrolysis of molten lead(II) bromide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lead metal" },
              { id: "b", text: "Bromine gas" },
              { id: "c", text: "Oxygen gas" },
              { id: "d", text: "Hydrogen gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molten electrolysis", statement: "Only compound ions present → straightforward products." },
            ],
            steps: [
              { reasoning: "Pb²⁺ reduced at cathode → Pb metal.", working: "Pb^{2+}+2e^-\\to Pb", marks: 1, markCode: "M" },
              { reasoning: "(Br₂ forms at anode, not cathode.)", working: "\\text{Pb}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lead metal",
            commonErrors: ["Choosing bromine — that forms at the anode."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Predict the products at each electrode for the electrolysis of aqueous sodium chloride (brine).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cathode: H₂; anode: Cl₂" },
              { id: "b", text: "Cathode: Na; anode: O₂" },
              { id: "c", text: "Cathode: Cl₂; anode: H₂" },
              { id: "d", text: "Cathode: O₂; anode: Cl₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aqueous rules", statement: "Cathode: H₂ unless very reactive metal; anode: halogen preferred over O₂." },
            ],
            steps: [
              { reasoning: "Na⁺ too reactive → H⁺ reduced instead: 2H^+ + 2e^- -> H_2.", working: "H_2", marks: 1, markCode: "M" },
              { reasoning: "Cl⁻ discharged preferentially over OH⁻: 2Cl^- -> Cl_2 + 2e^-.", working: "Cl_2", marks: 1, markCode: "M" },
              { reasoning: "Overall: NaCl + H_2O -> NaOH + H_2 + Cl_2.", working: "\\text{brine}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode H₂, anode Cl₂",
            commonErrors: ["Choosing Na metal at cathode — water wins for reactive metals."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company electrolyses brine to produce chlorine, hydrogen and sodium hydroxide.",
          parts: [
            { label: "a", prompt: "Write half-equations for both electrodes.", marks: 2 },
            { label: "b", prompt: "Explain why the cathode produces H₂ rather than Na metal.", marks: 2 },
            { label: "c", prompt: "Write the overall equation for electrolysis of brine.", marks: 2 },
            { label: "d", prompt: "Evaluate whether electrolysis of brine is a sustainable process, considering energy use and product value.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Brine electrolysis", statement: "NaCl(aq): cathode H₂, anode Cl₂, solution gains NaOH." },
            ],
            steps: [
              { part: "a", reasoning: "Cathode: 2H^+ + 2e^- -> H_2; anode: 2Cl^- -> Cl_2 + 2e^-.", working: "2H^++2e^-\\to H_2;2Cl^-\\to Cl_2+2e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both balanced with correct species.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Na⁺ is very reactive — H⁺/water is preferentially reduced; Na metal would react violently with water anyway.", working: "\\text{H}^+\\text{ preferred}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains aqueous rule for reactive metals.", working: "\\text{reactive metal}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2NaCl + 2H_2O -> Cl_2 + H_2 + 2NaOH (electrolysis).", working: "2NaCl+2H_2O\\to Cl_2+H_2+2NaOH", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equation balanced and atoms conserved.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: three valuable products (Cl₂, H₂, NaOH) from abundant brine; drawback: very high electricity demand → carbon footprint.", working: "\\text{trade-off}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sustainability depends on electricity source (renewables improve it).", working: "\\text{renewables}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2H⁺+2e⁻→H₂; 2Cl⁻→Cl₂+2e⁻ (b) H⁺ reduced instead of Na⁺ (c) 2NaCl+2H₂O→Cl₂+H₂+2NaOH (d) valuable products vs high energy use",
            commonErrors: ["In (c), omitting NaOH or writing Na metal product."],
            examinerNote: "M1 A1 for (a); M1 A1 for (b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During electrolysis of aqueous copper(II) sulfate with inert electrodes, what forms at the cathode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper metal deposits" },
              { id: "b", text: "Oxygen gas" },
              { id: "c", text: "Hydrogen gas" },
              { id: "d", text: "Sulphur dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aqueous cathode rule", statement: "Less reactive metal ions (Cu²⁺) are reduced to metal." },
            ],
            steps: [
              { reasoning: "Cu²⁺ is less reactive than H⁺ → Cu²⁺ + 2e⁻ → Cu at cathode.", working: "Cu^{2+}\\to Cu", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Copper metal",
            commonErrors: ["Choosing H₂ — that's for very reactive metals like Na⁺."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the half-equation 2Cl⁻ → Cl₂ + 2e⁻, how many electrons are released per Cl₂ molecule formed?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons", answer: 2, unit: "e⁻" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Charge balance", statement: "2 Cl⁻ (−2) → Cl₂ (0) + 2e⁻ balances charge." },
            ],
            steps: [
              { reasoning: "Two chloride ions lose one electron each → 2e⁻ released.", working: "2e^-", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2\\ \\text{e}^-$",
            commonErrors: ["Answering 1 — each Cl⁻ loses one electron, two ions total."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products at each electrode when molten sodium chloride is electrolysed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cathode: Na metal; anode: Cl₂ gas" },
              { id: "b", text: "Cathode: Cl₂; anode: Na" },
              { id: "c", text: "Cathode: H₂; anode: O₂" },
              { id: "d", text: "Both electrodes produce NaCl" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molten electrolysis", statement: "Only compound ions present → simple products: metal at cathode, non-metal at anode." },
            ],
            steps: [
              { reasoning: "Na⁺ reduced at cathode → Na; Cl⁻ oxidised at anode → Cl₂.", working: "Na;Cl_2", marks: 1, markCode: "M" },
              { reasoning: "No water present → no competition from H⁺/OH⁻.", working: "\\text{molten}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode Na, anode Cl₂",
            commonErrors: ["Applying aqueous rules — molten has no H₂O competition."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Electrolysis of brine (aqueous NaCl) produces three useful products. Name them.",
          response: {
            type: "numeric",
            parts: [{ label: "Products", answer: 3, unit: "products" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Brine electrolysis", statement: "NaCl(aq) → Cl₂ + H₂ + NaOH." },
            ],
            steps: [
              { reasoning: "Products: chlorine gas, hydrogen gas and sodium hydroxide — three in total.", working: "Cl_2;H_2;NaOH", marks: 1, markCode: "M" },
              { reasoning: "Count = $3$.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chlorine, hydrogen, sodium hydroxide — $3$ products",
            commonErrors: ["Listing Na metal instead of NaOH."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is hydrogen gas, not sodium metal, produced at the cathode during electrolysis of aqueous NaCl?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Na⁺ is a very reactive metal — H⁺/water is preferentially reduced instead" },
              { id: "b", text: "Sodium cannot form ions" },
              { id: "c", text: "Hydrogen is lighter" },
              { id: "d", text: "The cathode attracts water only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aqueous cathode rule", statement: "Very reactive metals (Na, K, Ca) → H₂ at cathode; less reactive → metal." },
            ],
            steps: [
              { reasoning: "Na⁺ too reactive → H⁺ reduced: 2H^+ + 2e^- -> H_2.", working: "H_2", marks: 1, markCode: "M" },
              { reasoning: "Also Na metal would react violently with water anyway.", working: "\\text{reactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H⁺ reduced preferentially over Na⁺",
            commonErrors: ["Choosing Na metal — rule for aqueous solutions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the cathode half-equation 2H⁺ + 2e⁻ → H₂, how many electrons are consumed per H₂ molecule?",
          response: {
            type: "numeric",
            parts: [{ label: "Electrons", answer: 2, unit: "e⁻" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Half-equation balance", statement: "2 H⁺ (+2) + 2e⁻ (−2) → H₂ (0) balances charge." },
            ],
            steps: [
              { reasoning: "Two protons each need one electron → 2e⁻ per H₂.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$ electrons.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{e}^-$",
            commonErrors: ["Answering 1 electron per H₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "At the anode during electrolysis of an aqueous solution, which anion is preferentially discharged: a halide (Cl⁻, Br⁻, I⁻) or OH⁻? Explain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Halides are preferentially discharged → halogen gas; only when no halide is present does OH⁻ → O₂" },
              { id: "b", text: "OH⁻ always wins" },
              { id: "c", text: "Both discharge equally" },
              { id: "d", text: "Neither discharges" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anode discharge rules", statement: "Halides preferred over OH⁻; otherwise OH⁻ → O₂." },
            ],
            steps: [
              { reasoning: "Halide ions discharge preferentially: 2Cl^- -> Cl_2 + 2e^-.", working: "Cl^-", marks: 1, markCode: "M" },
              { reasoning: "Without halides, OH⁻ oxidised → O₂: 4OH^- -> O_2 + 2H_2O + 4e^-.", working: "OH^-", marks: 1, markCode: "M" },
              { reasoning: "This explains brine giving Cl₂ but CuSO₄(aq) giving O₂ at anode.", working: "\\text{examples}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Halides preferred; OH⁻ → O₂ only without halides",
            commonErrors: ["Always choosing O₂ regardless of anion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "During electrolysis of aqueous copper(II) sulfate: Cu²⁺ + 2e⁻ → Cu at cathode; 4OH⁻ → O₂ + 2H₂O + 4e⁻ at anode. How many moles of electrons flow per mole of Cu deposited?",
          response: {
            type: "numeric",
            parts: [{ label: "Moles e⁻", answer: 2, unit: "mol" }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stoichiometry of electrolysis", statement: "1 mol Cu²⁺ needs 2 mol e⁻ to form 1 mol Cu." },
            ],
            steps: [
              { reasoning: "Each Cu²⁺ gains 2 electrons → 1 mol Cu requires 2 mol e⁻.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "At anode 4e⁻ per O₂ — ratio balances overall.", working: "\\text{balance}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$ mol e⁻ per mol Cu.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\ \\text{mol e}^-$ per mol Cu",
            commonErrors: ["Answering 4 — confusing with O₂ stoichiometry."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How is electrolysis used to purify impure copper metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impure Cu is the anode and dissolves; pure Cu deposits at the cathode, leaving impurities behind" },
              { id: "b", text: "Copper is evaporated and condensed" },
              { id: "c", text: "Impurities are filtered out" },
              { id: "d", text: "Copper is melted and cast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Copper purification", statement: "Anode dissolves, cathode plates pure Cu — electrolytic refining." },
            ],
            steps: [
              { reasoning: "Impure Cu anode: Cu -> Cu^{2+} + 2e^- dissolves into solution.", working: "\\text{anode}", marks: 1, markCode: "M" },
              { reasoning: "Cathode: Cu^{2+} + 2e^- -> Cu deposits as pure copper.", working: "\\text{cathode}", marks: 1, markCode: "M" },
              { reasoning: "Less reactive impurities fall as anode sludge; more reactive dissolve but don't plate.", working: "\\text{sludge}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anode dissolves, pure Cu plates at cathode",
            commonErrors: ["Describing electroplating instead — purification uses Cu electrodes."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between electrolysis of a molten ionic compound and electrolysis of an aqueous solution of the same compound.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Molten vs aqueous", statement: "Water introduces H⁺/OH⁻ competition affecting products." },
            ],
            steps: [
              { reasoning: "Molten: only compound ions present → straightforward products (e.g. NaCl → Na + Cl₂).", working: "\\text{molten}", marks: 1, markCode: "M" },
              { reasoning: "Aqueous: water provides H⁺ and OH⁻ which compete with compound ions.", working: "\\text{competition}", marks: 1, markCode: "M" },
              { reasoning: "Cathode rule: very reactive metals → H₂ instead of metal; anode rule: halides → halogen, else O₂.", working: "\\text{rules}", marks: 1, markCode: "A" },
              { reasoning: "Example: molten NaCl gives Na metal but aqueous NaCl gives H₂ + NaOH + Cl₂.", working: "\\text{example}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Molten: direct products; aqueous: H⁺/OH⁻ compete → different products",
            commonErrors: ["Assuming same products for both."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how electroplating works and give two reasons why it is used industrially.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electroplating", statement: "Cathode object coated with metal ions reduced onto its surface." },
            ],
            steps: [
              { reasoning: "Object to be plated is made the cathode; metal ions in solution reduced onto its surface.", working: "\\text{cathode}", marks: 1, markCode: "M" },
              { reasoning: "Anode is the plating metal which dissolves to replenish ions.", working: "\\text{anode}", marks: 1, markCode: "M" },
              { reasoning: "Use 1: corrosion protection — e.g. chromium/nickel plating on steel.", working: "\\text{protection}", marks: 1, markCode: "A" },
              { reasoning: "Use 2: decoration/appearance — silver/gold plating on cutlery and jewellery.", working: "\\text{decoration}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metal ions reduced onto cathode object; protects and decorates",
            commonErrors: ["Saying electroplating is only for decoration."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypc5-u2-electrolysis-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the sustainability of electrolysis as an industrial process for producing metals and chemicals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrolysis sustainability", statement: "Enables extraction of reactive metals but demands large electrical energy." },
            ],
            steps: [
              { reasoning: "Advantage: only method to extract very reactive metals (Al, Na, Mg) from compounds.", working: "\\text{extraction}", marks: 1, markCode: "M" },
              { reasoning: "Advantage: produces high-purity products (pure Cu, NaOH, Cl₂) with precise control.", working: "\\text{purity}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: very high electricity consumption → large carbon footprint if fossil-powered.", working: "\\text{energy}", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: some processes consume consumable electrodes (C anodes in Al extraction) → waste.", working: "\\text{consumables}", marks: 1, markCode: "A" },
              { reasoning: "Improvement: use renewable electricity → dramatically lowers environmental impact.", working: "\\text{renewables}", marks: 1, markCode: "A" },
              { reasoning: "Overall: essential but energy-intensive — sustainability depends on electricity source.", working: "\\text{overall}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Essential for reactive metals; high energy use mitigated by renewables",
            commonErrors: ["One-sided answer ignoring energy cost."],
            examinerNote: "M1 M1 M1 A1 A1 A1.",
          },
        },
      ],
    },
  ],
};
