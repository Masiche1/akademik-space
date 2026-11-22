import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypc4-u3-lesson-3-1",
  code: "3-1",
  title: "Electrochemistry and Electrolysis",
  goal: "I CAN describe simple cells, electrolysis, and the reactivity of metals with regard to extraction.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Electrolysis", definition: "Decomposition of a substance using electricity; ions move to electrodes." },
    { term: "Electrode", definition: "Conductor where current enters/leaves electrolyte; anode (+), cathode (-)." },
    { term: "Oxidation", definition: "Loss of electrons; occurs at anode." },
    { term: "Reduction", definition: "Gain of electrons; occurs at cathode." },
    { term: "Galvanic cell", definition: "Chemical reaction producing electricity (battery)." },
    { term: "Electrolyte", definition: "Ionic substance (molten or aqueous) conducting electricity." },
  ],
  concepts: [
    {
      id: "mypc4-u3-electrolysis",
      title: "Electrolysis",
      skill: "Describe electrolysis setup, electrode reactions, and applications.",
      lesson: {
        sections: [
          {
            heading: "How electrolysis works",
            body: "Ionic compound (electrolyte) conducts when molten/aqueous. **Cathode (-)**: positive ions gain electrons → reduced. **Anode (+)**: negative ions lose electrons → oxidised. Example: molten NaCl → Na at cathode, Cl₂ at anode.",
          },
          {
            heading: "Electrolysis of water",
            body: "Acidified water: H⁺ reduced at cathode → H₂ gas (bubbles); OH⁻ oxidised at anode → O₂ gas. Ratio H₂:O₂ = 2:1 by volume. Demonstrates water = H₂O.",
          },
          {
            heading: "Applications",
            body: "Extraction of reactive metals (Al from bauxite), purification of copper, electroplating, production of chlorine/NaOH, hydrogen fuel. Electrolysis only works on ionic compounds.",
          },
        ],
        keyFormulas: [
          { name: "Cathode", statement: "Reduction: gains electrons" },
          { name: "Anode", statement: "Oxidation: loses electrons" },
          { name: "Water", statement: "2H₂O → 2H₂ + O₂ (acidified)" },
        ],
        workedExample: {
          problem: "What forms at each electrode in electrolysis of molten lead bromide?",
          solution: "Cathode: Pb²⁺ + 2e⁻ → Pb (metal). Anode: 2Br⁻ → Br₂ + 2e⁻ (bromine gas).",
        },
      },
      questions: [
        {
          id: "mypc4-u3-elec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is electrolysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dissolving in water" },
              { id: "b", text: "Decomposition of an ionic compound using electricity" },
              { id: "c", text: "Burning in oxygen" },
              { id: "d", text: "Combining elements to form compounds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electrolysis", statement: "Electrical decomposition of ionic substance." },
            ],
            steps: [
              { reasoning: "Electricity splits ionic compound into elements.", working: "\\text{electrolysis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Electrical decomposition",
            commonErrors: ["Confusing with electroplating."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-elec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "At which electrode does reduction occur during electrolysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both equally" },
              { id: "b", text: "Anode (positive)" },
              { id: "c", text: "Cathode (negative)" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrode reactions", statement: "Cathode = reduction (gain e⁻); anode = oxidation (lose e⁻)." },
            ],
            steps: [
              { reasoning: "Reduction at cathode (negative electrode).", working: "\\text{cathode}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{reduction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode",
            commonErrors: ["Reversing cathode/anode."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why electrolysis of water produces hydrogen and oxygen in a 2:1 ratio.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random chance" },
              { id: "b", text: "Each water molecule has 2 H atoms and 1 O atom → 2H₂O → 2H₂ + O₂" },
              { id: "c", text: "Oxygen dissolves in water" },
              { id: "d", text: "Hydrogen is lighter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water electrolysis", statement: "Stoichiometry: 2H₂O → 2H₂ + O₂ gives 2:1 gas ratio." },
            ],
            steps: [
              { reasoning: "Each H₂O has 2H, 1O.", working: "2H,1O", marks: 1, markCode: "M" },
              { reasoning: "2 molecules needed for O₂ (needs 2 O atoms) → 2H₂ formed.", working: "2H_2O\\to2H_2+O_2", marks: 1, markCode: "M" },
              { reasoning: "State ratio reason.", working: "2:1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2:1 from water's H:O ratio",
            commonErrors: ["Saying gases dissolve differently."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Molten sodium chloride is electrolysed.",
          parts: [
            { label: "a", prompt: "Write half-equations at cathode and anode.", marks: 3 },
            { label: "b", prompt: "State the overall reaction.", marks: 1 },
            { label: "c", prompt: "Explain why molten NaCl conducts but solid doesn't.", marks: 2 },
            { label: "d", prompt: "Give two industrial uses of electrolysis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Electrolysis of NaCl", statement: "Na⁺ reduced at cathode; Cl⁻ oxidised at anode." },
            ],
            steps: [
              { part: "a", reasoning: "Cathode: Na⁺ + e⁻ → Na.", working: "Na^++e^-\\to Na", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Anode: 2Cl⁻ → Cl₂ + 2e⁻.", working: "2Cl^-\\to Cl_2+2e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct with electrons balanced.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "2NaCl → 2Na + Cl₂.", working: "2NaCl\\to2Na+Cl_2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Molten = ions free to move; solid = ions fixed in lattice.", working: "\\text{ions mobile}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain difference.", working: "\\text{conduct}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Extraction of aluminum; purification of copper (or electroplating).", working: "\\text{Al,Cu}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Second use.", working: "\\text{2 uses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na⁺+e⁻→Na; 2Cl⁻→Cl₂+2e⁻ (b) 2NaCl→2Na+Cl₂ (c) molten ions mobile (d) Al extraction, Cu purification",
            commonErrors: ["In (a), writing Cl⁻→Cl (atom) not Cl₂."],
            examinerNote: "M1 M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-elec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During electrolysis, the cathode is the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral electrode" },
              { id: "b", text: "Container wall" },
              { id: "c", text: "Positive electrode where oxidation occurs" },
              { id: "d", text: "Negative electrode where reduction occurs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cathode", statement: "Negative electrode; reduction (gain e⁻)." },
            ],
            steps: [
              { reasoning: "Cathode = negative, reduction occurs.", working: "\\text{cathode}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Negative, reduction",
            commonErrors: ["Confusing with anode."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-elec-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reduction is defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gain of electrons" },
              { id: "b", text: "Loss of neutrons" },
              { id: "c", text: "Loss of electrons" },
              { id: "d", text: "Gain of protons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reduction", statement: "Gain of electrons; occurs at cathode." },
            ],
            steps: [
              { reasoning: "Reduction = electron gain.", working: "+e^-", marks: 1, markCode: "M" },
              { reasoning: "State definition.", working: "\\text{gain e}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gain of electrons",
            commonErrors: ["Confusing with oxidation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many electrons are needed to reduce one Na⁺ ion to Na during electrolysis?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Half-equations", statement: "Na⁺ + e⁻ → Na needs 1 electron." },
            ],
            steps: [
              { reasoning: "Na⁺ + 1e⁻ → Na.", working: "1e^-", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 2."],
            examinerNote: "B1 for 1.",
          },
        },
        {
          id: "mypc4-u3-elec-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Acidified water is electrolysed, producing hydrogen and oxygen. If 40 cm³ of H₂ is collected, what volume of O₂ is produced?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20, unit: "cm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Water electrolysis", statement: "2H₂O → 2H₂ + O₂ gives H₂:O₂ = 2:1." },
            ],
            steps: [
              { reasoning: "Ratio 2:1 → O₂ = 40/2.", working: "40/2=20", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "20\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 cm³",
            commonErrors: ["Doubling instead of halving."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does solid sodium chloride not conduct electricity, but molten NaCl does?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid NaCl has no ions" },
              { id: "b", text: "In the solid, ions are fixed in the lattice; when molten, ions are free to move" },
              { id: "c", text: "Electricity creates the ions" },
              { id: "d", text: "Molten NaCl has more ions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electrolyte", statement: "Ions must be mobile to carry current." },
            ],
            steps: [
              { reasoning: "Solid: ions locked in lattice; molten: ions free.", working: "\\text{mobile}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{conduct}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Molten ions are mobile",
            commonErrors: ["Saying solid NaCl has no ions."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "During electrolysis of molten lead bromide, Pb²⁺ + 2e⁻ → Pb. How many electrons are gained per Pb²⁺ ion?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Half-equations", statement: "Pb²⁺ needs 2 electrons to become neutral Pb." },
            ],
            steps: [
              { reasoning: "Charge +2 → needs 2 electrons.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is aluminium extracted by electrolysis rather than by reduction with carbon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon reacts with aluminium" },
              { id: "b", text: "Aluminium is very reactive — carbon cannot reduce its oxide, so electrolysis is needed" },
              { id: "c", text: "Aluminium is cheap" },
              { id: "d", text: "Electrolysis is always easier" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extraction", statement: "Very reactive metals need electrolysis." },
            ],
            steps: [
              { reasoning: "Al is above carbon in reactivity → carbon can't reduce Al₂O₃.", working: "\\text{too reactive}", marks: 1, markCode: "M" },
              { reasoning: "Electrolysis provides strong enough reduction.", working: "\\text{electrolysis}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{reason}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Too reactive for carbon reduction",
            commonErrors: ["Saying carbon works for all metals."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Molten MgCl₂ is electrolysed. How many moles of Cl₂ gas are produced from 4.0 mol of Cl⁻ ions? (2Cl⁻ → Cl₂ + 2e⁻)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.0, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Half-equation ratio", statement: "2Cl⁻ → 1Cl₂; ratio 2:1." },
            ],
            steps: [
              { reasoning: "4.0 mol Cl⁻ ÷ 2 = 2.0 mol Cl₂.", working: "4.0/2=2.0", marks: 1, markCode: "M" },
              { reasoning: "Apply ratio correctly.", working: "\\text{2:1}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2.0\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.0 mol",
            commonErrors: ["Answering 4.0 mol."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the charge on the anode during electrolysis?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anode", statement: "Positive electrode; oxidation occurs." },
            ],
            steps: [
              { reasoning: "Anode is positive (+1).", working: "+", marks: 1, markCode: "B" },
            ],
            finalAnswer: "+1 (positive)",
            commonErrors: ["Answering negative."],
            examinerNote: "B1 for positive.",
          },
        },
        {
          id: "mypc4-u3-elec-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Complete the half-equation: Cu²⁺ + ? e⁻ → Cu. How many electrons are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Half-equations", statement: "Cu²⁺ + 2e⁻ → Cu balances charge." },
            ],
            steps: [
              { reasoning: "+2 charge needs 2 electrons.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-elec-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Electrolysis basics.",
          parts: [
            { label: "a", prompt: "Define electrolysis.", marks: 1 },
            { label: "b", prompt: "State what forms at the cathode and anode during electrolysis of molten NaCl.", marks: 2 },
            { label: "c", prompt: "Write the overall equation for electrolysis of molten NaCl.", marks: 2 },
            { label: "d", prompt: "Give one industrial use of electrolysis.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Electrolysis", statement: "Ionic compound decomposed by electricity; cations→cathode, anions→anode." },
            ],
            steps: [
              { part: "a", reasoning: "Decomposition of ionic compound using electricity.", working: "\\text{def}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cathode: Na metal; anode: Cl₂ gas.", working: "Na,Cl_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both correct.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2NaCl → 2Na + Cl₂.", working: "2NaCl\\to2Na+Cl_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. extraction of aluminium / copper purification / electroplating.", working: "\\text{use}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) electrical decomposition (b) Na at cathode, Cl₂ at anode (c) 2NaCl→2Na+Cl₂ (d) Al extraction",
            commonErrors: ["In (b), swapping products."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-elec-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Molten calcium chloride is electrolysed.",
          parts: [
            { label: "a", prompt: "Write the half-equations at the cathode and anode.", marks: 2 },
            { label: "b", prompt: "Write the overall equation.", marks: 1 },
            { label: "c", prompt: "Explain why aqueous NaCl gives different products at the anode than molten NaCl.", marks:2 },
            { label: "d", prompt: "Give two industrial uses of electrolysis.", marks: 2 },
            { label: "e", prompt: "State why chlorine gas must be handled carefully.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Electrolysis", statement: "Cations reduced at cathode; anions oxidised at anode." },
            ],
            steps: [
              { part: "a", reasoning: "Cathode: Ca²⁺ + 2e⁻ → Ca; anode: 2Cl⁻ → Cl₂ + 2e⁻.", working: "Ca^{2+}+2e^-\\to Ca;\\ 2Cl^-\\to Cl_2+2e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both half-equations correct.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CaCl₂ → Ca + Cl₂.", working: "CaCl_2\\to Ca+Cl_2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In water, OH⁻ competes with Cl⁻ at anode → O₂ forms instead of Cl₂.", working: "OH^-\\text{ competes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct explanation.", working: "\\text{O}_2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. Al extraction; Cu purification (or electroplating).", working: "\\text{uses}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Second use.", working: "\\text{2 uses}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Chlorine is toxic/irritating gas.", working: "\\text{toxic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ca²⁺+2e⁻→Ca; 2Cl⁻→Cl₂+2e⁻ (b) CaCl₂→Ca+Cl₂ (c) OH⁻ competes→O₂ (d) Al,Cu (e) toxic gas",
            commonErrors: ["In (a), writing Cl atoms not Cl₂."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 A1 for (d), A1 for (e).",
          },
        },
      ],
    },
    {
      id: "mypc4-u3-cells",
      title: "Simple Cells and Metal Extraction",
      skill: "Describe galvanic cells and relate reactivity to extraction methods.",
      lesson: {
        sections: [
          {
            heading: "Simple cells",
            body: "Two different metals in electrolyte → voltage. More reactive metal = anode (oxidised, loses e⁻); less reactive = cathode (reduced). Electrons flow through external circuit → current. Example: Zn-Cu cell produces ~1.1V.",
          },
          {
            heading: "Metal extraction",
            body: "Reactivity determines method: **very reactive** (K,Na,Ca,Mg,Al): electrolysis. **Middle** (Zn,Fe,Sn,Pb,Cu): reduction with carbon/CO or displacement. **Unreactive** (Ag,Au): found native or simple heating.",
          },
          {
            heading: "Blast furnace",
            body: "Iron extraction: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Coke provides CO and heat; limestone removes impurities as slag. Shows carbon's reducing power.",
          },
        ],
        keyFormulas: [
          { name: "Cell", statement: "More reactive = anode (-), less = cathode (+)" },
          { name: "Extraction", statement: "Reactive→electrolysis; middle→carbon; unreactive→native" },
          { name: "Blast furnace", statement: "Fe₂O₃ + CO → Fe + CO₂" },
        ],
        workedExample: {
          problem: "Why is aluminum extracted by electrolysis not carbon reduction?",
          solution: "Al is very reactive — carbon can't reduce it; needs electrolysis of molten Al₂O₃.",
        },
      },
      questions: [
        {
          id: "mypc4-u3-cell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a Zn-Cu simple cell, which metal is the anode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zinc (more reactive)" },
              { id: "b", text: "Copper" },
              { id: "c", text: "Neither" },
              { id: "d", text: "Both" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell electrodes", statement: "More reactive metal oxidised = anode." },
            ],
            steps: [
              { reasoning: "Zn more reactive than Cu → Zn is anode.", working: "Zn", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Zinc",
            commonErrors: ["Choosing copper — less reactive = cathode."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-cell-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is aluminum extracted by electrolysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's very reactive — carbon can't reduce its oxide" },
              { id: "b", text: "It conducts electricity" },
              { id: "c", text: "It's cheap to extract" },
              { id: "d", text: "It's found in seawater" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extraction method", statement: "Very reactive metals need electrolysis." },
            ],
            steps: [
              { reasoning: "Al too reactive for carbon reduction → electrolysis required.", working: "\\text{reactive}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{electrolysis}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Too reactive for carbon reduction",
            commonErrors: ["Saying carbon works for all metals."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the role of coke and limestone in the blast furnace.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coke burns to heat furnace + provides CO for reduction; limestone removes impurities as slag" },
              { id: "b", text: "Both are fuels only" },
              { id: "c", text: "Limestone produces iron" },
              { id: "d", text: "Coke is the iron ore" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Blast furnace", statement: "Coke = fuel+reductant; limestone = flux removes impurities." },
            ],
            steps: [
              { reasoning: "Coke burns → heat + CO reduces Fe₂O₃.", working: "\\text{coke}", marks: 1, markCode: "M" },
              { reasoning: "Limestone reacts with silica impurities → slag.", working: "\\text{limestone}", marks: 1, markCode: "M" },
              { reasoning: "State roles.", working: "\\text{roles}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coke=heat+CO; limestone=slag",
            commonErrors: ["Saying limestone is fuel."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Magnesium, iron and gold need different extraction methods.",
          parts: [
            { label: "a", prompt: "State extraction method for each.", marks: 3 },
            { label: "b", prompt: "Explain why methods differ.", marks: 2 },
            { label: "c", prompt: "Write equation for iron reduction in blast furnace.", marks: 2 },
            { label: "d", prompt: "Suggest why recycling metals is beneficial.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extraction by reactivity", statement: "Reactivity determines reduction method." },
            ],
            steps: [
              { part: "a", reasoning: "Mg: electrolysis; Fe: carbon/CO reduction; Au: native/unreactive.", working: "\\text{3 methods}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More reactive = harder to reduce → needs stronger method.", working: "\\text{reactivity}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain link.", working: "\\text{method varies}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fe₂O₃ + 3CO → 2Fe + 3CO₂.", working: "Fe_2O_3+3CO\\to2Fe+3CO_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Saves energy, reduces mining, preserves resources.", working: "\\text{saves energy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg electrolysis, Fe carbon, Au native (b) reactivity determines method (c) Fe₂O₃+3CO→2Fe+3CO₂ (d) saves energy/resources",
            commonErrors: ["In (a), using same method for all."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-cell-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a zinc-copper simple cell, electrons flow through the wire from...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copper to zinc" },
              { id: "b", text: "They do not flow" },
              { id: "c", text: "Both directions equally" },
              { id: "d", text: "Zinc to copper" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell", statement: "Electrons flow from more reactive (anode) to less reactive (cathode)." },
            ],
            steps: [
              { reasoning: "Zn is anode (loses e⁻) → electrons flow to Cu.", working: "Zn\\to Cu", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Zinc to copper",
            commonErrors: ["Reversing electron flow."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-cell-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a simple cell, the more reactive metal acts as the...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both electrodes equally" },
              { id: "b", text: "Anode (oxidised, loses electrons)" },
              { id: "c", text: "Electrolyte" },
              { id: "d", text: "Cathode (reduced, gains electrons)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cell electrodes", statement: "More reactive metal → anode (oxidation)." },
            ],
            steps: [
              { reasoning: "More reactive metal loses electrons → oxidised → anode.", working: "\\text{anode}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{oxidised}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Anode",
            commonErrors: ["Choosing cathode."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many of these metals — K, Na, Ca, Mg, Al — are extracted by electrolysis?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extraction", statement: "Very reactive metals (K,Na,Ca,Mg,Al) need electrolysis." },
            ],
            steps: [
              { reasoning: "All 5 listed are very reactive → electrolysis.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Excluding aluminium."],
            examinerNote: "B1 for 5.",
          },
        },
        {
          id: "mypc4-u3-cell-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Reactivity order: Zn > Fe > Cu. How many of these pairs would react: Zn + CuSO₄, Cu + ZnSO₄, Fe + CuSO₄?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "Higher metal displaces lower: Zn>Cu yes, Cu<Zn no, Fe>Cu yes." },
            ],
            steps: [
              { reasoning: "Zn+CuSO₄ reacts; Cu+ZnSO₄ doesn't; Fe+CuSO₄ reacts → 2 reactions.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting all 3."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the blast furnace, iron oxide is reduced mainly by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Carbon monoxide (CO)" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Blast furnace", statement: "CO reduces Fe₂O₃ → Fe + CO₂." },
            ],
            steps: [
              { reasoning: "CO is the reducing agent.", working: "CO", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{CO}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Carbon monoxide",
            commonErrors: ["Saying oxygen reduces it."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "For Fe₂O₃ + 3CO → 2Fe + 3CO₂, how many moles of Fe are produced from 3 mol of Fe₂O₃?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "1 Fe₂O₃ : 2 Fe ratio." },
            ],
            steps: [
              { reasoning: "3 mol Fe₂O₃ × 2 = 6 mol Fe.", working: "3\\times2=6", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "6\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 mol",
            commonErrors: ["Answering 3."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is gold often found native (as the pure metal) rather than combined in ores?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gold is the most reactive" },
              { id: "b", text: "Gold is always molten" },
              { id: "c", text: "Gold reacts only with acids" },
              { id: "d", text: "Gold is the least reactive metal, so it doesn't form compounds easily" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity", statement: "Least reactive metals found native; reactive ones found as compounds." },
            ],
            steps: [
              { reasoning: "Au is least reactive → doesn't combine with other elements easily.", working: "\\text{least reactive}", marks: 1, markCode: "M" },
              { reasoning: "Therefore found as pure metal.", working: "\\text{native}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{reason}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Least reactive → found native",
            commonErrors: ["Reversing reactivity."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the blast furnace reaction Fe₂O₃ + 3CO → 2Fe + 3CO₂, 4.0 mol of CO is available. How many moles of Fe are produced?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.67, unit: "mol", tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "3CO : 1Fe₂O₃ : 2Fe." },
            ],
            steps: [
              { reasoning: "4.0 mol CO ÷ 3 = 1.333 mol Fe₂O₃ reacted.", working: "4.0/3", marks: 1, markCode: "M" },
              { reasoning: "Fe = 1.333 × 2 = 2.67 mol.", working: "\\times2=2.67", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2.67\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.67 mol",
            commonErrors: ["Using 3:2 ratio directly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many metals are LESS reactive than iron in the reactivity series (below Fe)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reactivity series", statement: "Ni,Sn,Pb,Cu,Ag,Au are below Fe = 6." },
            ],
            steps: [
              { reasoning: "Below Fe: Ni,Sn,Pb,Cu,Ag,Au = 6 metals.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Including zinc (above Fe)."],
            examinerNote: "B1 for 6.",
          },
        },
        {
          id: "mypc4-u3-cell-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "When Zn → Zn²⁺ + 2e⁻ occurs at the anode of a cell, how many electrons are released per zinc atom?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Half-equations", statement: "Zn loses 2 electrons to form Zn²⁺." },
            ],
            steps: [
              { reasoning: "Zn → Zn²⁺ releases 2 electrons.", working: "2e^-", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-cell-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Simple cells and metal extraction.",
          parts: [
            { label: "a", prompt: "Describe the roles of the two electrodes in a simple cell.", marks: 2 },
            { label: "b", prompt: "Explain why zinc is the anode in a zinc-copper cell.", marks: 2 },
            { label: "c", prompt: "State the extraction method for copper and for magnesium.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cells and extraction", statement: "Reactant metal = anode; reactivity determines extraction method." },
            ],
            steps: [
              { part: "a", reasoning: "Anode: more reactive, oxidised, loses e⁻; cathode: less reactive, reduced, gains e⁻.", working: "\\text{anode/cathode}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both described.", working: "\\text{roles}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zn more reactive than Cu → loses electrons more easily → anode.", working: "Zn>Cu", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct explanation.", working: "\\text{anode}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cu: carbon reduction/displacement (middle reactivity); Mg: electrolysis (very reactive).", working: "\\text{Cu,Mg}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both correct.", working: "\\text{both}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) anode=oxidised, cathode=reduced (b) Zn more reactive (c) Cu carbon, Mg electrolysis",
            commonErrors: ["In (c), using electrolysis for copper."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u3-cell-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Metals sodium, zinc and gold each require different extraction methods.",
          parts: [
            { label: "a", prompt: "State the extraction method for each metal.", marks: 3 },
            { label: "b", prompt: "Explain how reactivity determines the method.", marks: 2 },
            { label: "c", prompt: "Write the equation for iron reduction in the blast furnace.", marks: 2 },
            { label: "d", prompt: "Explain why recycling metals saves energy.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Extraction by reactivity", statement: "Very reactive→electrolysis; middle→carbon; unreactive→native." },
            ],
            steps: [
              { part: "a", reasoning: "Na: electrolysis; Zn: carbon reduction; Au: native/unreactive.", working: "\\text{3 methods}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More reactive = harder to reduce → needs stronger method.", working: "\\text{reactivity}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain link.", working: "\\text{method}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fe₂O₃ + 3CO → 2Fe + 3CO₂.", working: "Fe_2O_3+3CO\\to2Fe+3CO_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Remelting scrap needs far less energy than extracting from ore.", working: "\\text{saves energy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na electrolysis, Zn carbon, Au native (b) reactivity→method (c) Fe₂O₃+3CO→2Fe+3CO₂ (d) less energy",
            commonErrors: ["In (a), same method for all."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
      ],
    },
  ],
};
