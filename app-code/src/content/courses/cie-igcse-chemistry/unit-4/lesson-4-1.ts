import type { Lesson } from "../../../types.ts";

export const lesson141: Lesson = {
  id: "ciecy-u4-lesson-4-1",
  code: "4-1",
  title: "Electrolysis and Electrochemical Cells",
  goal: "I CAN describe electrolysis, predict products and explain simple cells and the reactivity series.",
  standards: ["0654 4.1", "0654 4.2", "0654 4.3"],
  vocabulary: [
    { term: "Electrolysis", definition: "Decomposition of a compound by electric current through molten/aqueous electrolyte." },
    { term: "Electrolyte", definition: "Ionic compound in molten or aqueous state conducting electricity." },
    { term: "Anode", definition: "Positive electrode; oxidation occurs." },
    { term: "Cathode", definition: "Negative electrode; reduction occurs." },
    { term: "Oxidation", definition: "Loss of electrons." },
    { term: "Reduction", definition: "Gain of electrons." },
    { term: "Galvanic cell", definition: "Cell producing electricity from a spontaneous redox reaction." },
    { term: "Reactivity series", definition: "Metals ordered by tendency to lose electrons." },
  ],
  concepts: [
    {
      id: "ciecy-u4-electrolysis",
      title: "Electrolysis",
      skill: "Describe electrolysis and predict the products at each electrode.",
      lesson: {
        sections: [
          {
            heading: "How electrolysis works",
            body: "Ionic compound melted or dissolved → ions free to move → **cations (+) attracted to cathode (−)**, **anions (−) attracted to anode (+)**. Cations reduced, anions oxidised.",
          },
          {
            heading: "Products",
            body: "- **Molten NaCl**: cathode → Na metal; anode → Cl₂ gas.\n- **Aqueous solutions**: less reactive metal/ H₂ at cathode; halide/ OH⁻/ SO₄²⁻ at anode (priority rules).\n- **Electroplating**: object as cathode, metal anode → coating.",
          },
          {
            heading: "Uses",
            body: "Extraction of aluminium, electroplating (chromium, silver), purification of copper, production of chlorine/NaOH.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What forms at each electrode during electrolysis of molten lead(II) bromide?",
          solution: "Cathode: Pb²⁺ + 2e⁻ → Pb metal. Anode: 2Br⁻ → Br₂ + 2e⁻.",
        },
      },
      questions: [
        {
          id: "ciecy-u4-electrolysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What must an electrolyte be for electrolysis to occur?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Molten or aqueous ionic compound" }, { id: "b", text: "Solid ionic crystal" }, { id: "c", text: "Any metal" }, { id: "d", text: "Pure water" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Electrolyte", statement: "Ions must be free to move." }],
            steps: [{ reasoning: "Recall requirement.", working: "\\text{molten/aqueous}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Molten or aqueous ionic compound",
            commonErrors: ["Solid ionic — ions fixed in lattice, can't conduct."],
          },
        },
        {
          id: "ciecy-u4-electrolysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what happens at the cathode during electrolysis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Cathode", statement: "Negative electrode; cations gain electrons (reduction)." }],
            steps: [
              { reasoning: "Cathode is negative.", marks: 1, markCode: "M" },
              { reasoning: "Cations reduced there.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The cathode is the negative electrode where cations gain electrons (are reduced) to form elements or compounds.",
            commonErrors: ["Saying oxidation occurs at cathode — that's the anode."],
          },
        },
        {
          id: "ciecy-u4-electrolysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict the products of electrolysis of molten sodium chloride.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Molten NaCl", statement: "Cathode: Na; anode: Cl₂." }],
            steps: [
              { reasoning: "Na⁺ → cathode → Na metal.", marks: 1, markCode: "M" },
              { reasoning: "Cl⁻ → anode → Cl₂ gas.", marks: 1, markCode: "M" },
              { reasoning: "State both correctly.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sodium metal at the cathode and chlorine gas at the anode.",
            commonErrors: ["Writing NaCl reforms — electrolysis decomposes it."],
          },
        },
        {
          id: "ciecy-u4-electrolysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the process of electrolysis and the movement of ions.",
          parts: [
            { label: "a", prompt: "Explain why the electrolyte must be molten or aqueous.", marks: 3 },
            { label: "b", prompt: "Describe ion movement during electrolysis.", marks: 3 },
            { label: "c", prompt: "State one industrial use of electrolysis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Electrolysis", statement: "Free ions conduct; cations→cathode, anions→anode." }],
            steps: [
              { part: "a", reasoning: "Solid ions fixed in lattice.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Molten/aqueous frees ions to move.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclude conduction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cations move to cathode (−).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Anions move to anode (+).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete movement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Aluminium extraction / electroplating / Cu purification.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid use.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) ions must be free to move (b) cations→cathode, anions→anode (c) Al extraction etc.",
            commonErrors: ["In (b) reversing electrode signs."],
          },
        },
      ],
    },
    {
      id: "ciecy-u4-cells-reactivity",
      title: "Cells and the reactivity series",
      skill: "Explain simple cells, electrode potentials and the reactivity series of metals.",
      lesson: {
        sections: [
          {
            heading: "Simple cell",
            body: "Two different metals in electrolyte → spontaneous electron flow → electrical current. More reactive metal = negative electrode (anode, loses e⁻); less reactive = positive (cathode).",
          },
          {
            heading: "Reactivity series",
            body: "K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au (most → least reactive).\n\n- More reactive metal displaces less reactive from compounds.\n- Higher in series = stronger reducing agent.",
          },
          {
            heading: "Uses",
            body: "Predict displacement reactions, choose metals for batteries/cells, explain corrosion (more reactive corrode faster).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Will zinc displace copper from copper(II) sulfate?",
          solution: "Zn is above Cu in the reactivity series → yes, Zn + CuSO₄ → ZnSO₄ + Cu.",
        },
      },
      questions: [
        {
          id: "ciecy-u4-cells-reactivity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a simple cell, which metal becomes the negative electrode?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The more reactive metal" }, { id: "b", text: "The less reactive metal" }, { id: "c", text: "Either one" }, { id: "d", text: "The electrolyte" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Cell electrodes", statement: "More reactive = anode (−), loses e⁻." }],
            steps: [{ reasoning: "Recall rule.", working: "\\text{more reactive}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The more reactive metal",
            commonErrors: ["Reversing — less reactive is positive."],
          },
        },
        {
          id: "ciecy-u4-cells-reactivity-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what the reactivity series shows.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reactivity series", statement: "Metals ordered by tendency to lose electrons/react." }],
            steps: [
              { reasoning: "Order of reactivity.", marks: 1, markCode: "M" },
              { reasoning: "Used to predict displacement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The reactivity series orders metals from most to least reactive, predicting which metals displace others from their compounds.",
            commonErrors: ["Thinking it's alphabetical or by density."],
          },
        },
        {
          id: "ciecy-u4-cells-reactivity-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why magnesium ribbon fizzes in copper(II) sulfate but copper doesn't react with magnesium sulfate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Displacement", statement: "More reactive metal displaces less reactive." }],
            steps: [
              { reasoning: "Mg above Cu in series.", marks: 1, markCode: "M" },
              { reasoning: "Mg displaces Cu → reaction.", marks: 1, markCode: "M" },
              { reasoning: "Cu below Mg → can't displace.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mg is more reactive than Cu so it displaces Cu from CuSO₄; Cu is less reactive than Mg so it cannot displace Mg from MgSO₄.",
            commonErrors: ["Not referencing the reactivity series."],
          },
        },
        {
          id: "ciecy-u4-cells-reactivity-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how a simple cell produces electricity.",
          parts: [
            { label: "a", prompt: "Describe the cell setup.", marks: 3 },
            { label: "b", prompt: "Explain electron flow.", marks: 3 },
            { label: "c", prompt: "Relate electrode identity to reactivity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Galvanic cell", statement: "Two metals + electrolyte → electron flow → current." }],
            steps: [
              { part: "a", reasoning: "Two different metals in electrolyte.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Connected by wire + voltmeter.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete setup.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More reactive metal loses e⁻.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Electrons flow through wire to other metal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conventional current opposite.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "More reactive = negative/anode.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less reactive = positive/cathode.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 metals+electrolyte+wires (b) e⁻ flow more→less reactive metal (c) reactive=anode, less=cathode",
            commonErrors: ["In (c) swapping electrode signs."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u4-electrochem-notes",
      title: "Electrolysis and cells — revision notes",
      summary: "Electrolysis products, anode/cathode rules, reactivity series, simple cells.",
      sections: [
        {
          heading: "Key facts",
          body: "Electrolysis: molten/aqueous electrolyte; cations→cathode (−, reduction), anions→anode (+, oxidation). Reactivity series: K>Na>Ca>Mg>Al>Zn>Fe>Pb>Cu>Ag>Au. More reactive metal = negative electrode in cells.",
        },
        {
          heading: "Exam technique",
          body: "- Identify electrode by charge first, then what arrives there.\n- Displacement: higher in series displaces lower.",
        },
      ],
    },
  ],
};
