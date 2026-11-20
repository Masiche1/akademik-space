import type { Lesson } from "../../../types.ts";

export const lesson183: Lesson = {
  id: "ciecy-u8-lesson-8-3",
  code: "8-3",
  title: "Extraction in Detail: Iron and Aluminium",
  goal: "I CAN describe the blast furnace for iron and electrolysis for aluminium extraction.",
  standards: ["0654 8.3"],
  vocabulary: [
    { term: "Blast furnace", definition: "Tall furnace reducing iron ore with coke and limestone." },
    { term: "Coke", definition: "Carbon fuel/reducing agent in blast furnace." },
    { term: "Limestone (CaCO₃)", definition: "Added to remove silica impurities as slag." },
    { term: "Slag", definition: "Calcium silicate waste product floating on molten iron." },
    { term: "Cast iron", definition: "Iron from blast furnace — high carbon, brittle." },
    { term: "Steel", definition: "Iron + controlled carbon (0.1-1.5%) — stronger, less brittle." },
    { term: "Electrolytic extraction", definition: "Using electricity to reduce metal ions (Al, Na, Mg)." },
    { term: "Cryolite", definition: "AlF₃/Na₃AlF₆ mixture lowering Al₂O₃ melting point in electrolysis." },
  ],
  concepts: [
    {
      id: "ciecy-u8-blast-furnace",
      title: "The blast furnace",
      skill: "Describe iron extraction, reactions and products.",
      lesson: {
        sections: [
          {
            heading: "Inputs",
            body: "- Iron ore (haematite, Fe₂O₃)\n- Coke (C) — fuel + reducing agent\n- Limestone (CaCO₃) — removes silica impurities\n- Hot air — provides oxygen",
          },
          {
            heading: "Key reactions",
            body: "1. C + O₂ → CO₂ (heat)\n2. CO₂ + C → 2CO (reducing agent)\n3. Fe₂O₃ + 3CO → 2Fe + 3CO₂ (reduction)\n4. CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag)",
          },
          {
            heading: "Products",
            body: "- Molten iron (cast iron, ~4% C) — tapped at bottom\n- Slag (CaSiO₃) — floats on top, removed\n- Waste gases (CO₂, CO) — top",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the role of limestone in the blast furnace?",
          solution: "It decomposes to CaO which reacts with silica (SiO₂) impurity to form slag (CaSiO₃), which floats on the iron and is removed.",
        },
      },
      questions: [
        {
          id: "ciecy-u8-blast-furnace-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the reducing agent in the blast furnace?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Limestone" }, { id: "b", text: "Carbon monoxide" }, { id: "c", text: "Oxygen" }, { id: "d", text: "Iron ore" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Blast furnace", statement: "CO reduces Fe₂O₃." }],
            steps: [{ reasoning: "Recall.", working: "\\text{CO}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Carbon monoxide",
            commonErrors: ["Coke is fuel; CO is actual reducer."],
          },
        },
        {
          id: "ciecy-u8-blast-furnace-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation for reduction of iron(III) oxide in the blast furnace.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Blast furnace", statement: "Fe₂O₃ + 3CO → 2Fe + 3CO₂." }],
            steps: [
              { reasoning: "Equation.", marks: 1, markCode: "M" },
              { reasoning: "Balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
            commonErrors: ["Using C instead of CO as reducer."],
          },
        },
        {
          id: "ciecy-u8-blast-furnace-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of limestone in iron extraction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Limestone", statement: "Removes silica as slag." }],
            steps: [
              { reasoning: "CaCO₃ → CaO + CO₂.", marks: 1, markCode: "M" },
              { reasoning: "CaO + SiO₂ → CaSiO₃ slag.", marks: 1, markCode: "M" },
              { reasoning: "Slag floats and removed.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limestone decomposes to CaO which reacts with silica impurities to form calcium silicate slag, which floats on the molten iron and is removed.",
            commonErrors: ["Saying 'adds carbon' — it's for impurity removal."],
          },
        },
        {
          id: "ciecy-u8-blast-furnace-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the blast furnace process for extracting iron.",
          parts: [
            { label: "a", prompt: "List the raw materials.", marks: 2 },
            { label: "b", prompt: "Describe the key reactions.", marks: 4 },
            { label: "c", prompt: "Describe the products.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Blast furnace", statement: "Ore+coke+limestone+air → Fe+slag." }],
            steps: [
              { part: "a", reasoning: "Fe₂O₃ ore, coke, limestone, air.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "C burns → CO₂; CO₂+C→2CO.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "CO reduces Fe₂O₃.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Limestone removes silica.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Molten iron bottom.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Slag floats top.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Waste gases escape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ore/coke/limestone/air (b) CO₂→CO→reduce Fe₂O₃ (c) Fe+slag+gases",
            commonErrors: ["In (b) missing CO formation step."],
          },
        },
      ],
    },
    {
      id: "ciecy-u8-aluminium-extraction",
      title: "Electrolytic extraction of aluminium",
      skill: "Describe electrolysis of alumina and why cryolite is used.",
      lesson: {
        sections: [
          {
            heading: "Why electrolysis",
            body: "Aluminium is more reactive than carbon — cannot be reduced by coke in a furnace. Must use **electrolysis** of molten Al₂O₃.",
          },
          {
            heading: "The process",
            body: "Al₂O₃ dissolved in **cryolite** (lowers mp from 2050°C to ~950°C — saves energy).\n\nElectrolysis:\n- Cathode (−): Al³⁺ + 3e⁻ → Al (molten aluminium collected)\n- Anode (+): 2O²⁻ → O₂ + 4e⁻ (anodes are carbon, burn away → replaced)",
          },
          {
            heading: "Half equations",
            body: "Cathode: Al³⁺ + 3e⁻ → Al\nAnode: 2O²⁻ − 4e⁻ → O₂ (or C + 2O²⁻ → CO₂ + 4e⁻)",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is cryolite added in aluminium extraction?",
          solution: "It lowers the melting point of Al₂O₃ from ~2050°C to ~950°C, reducing energy costs for electrolysis.",
        },
      },
      questions: [
        {
          id: "ciecy-u8-aluminium-extraction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why can't aluminium be extracted by heating with carbon?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It's too light" }, { id: "b", text: "It's too reactive — above carbon" }, { id: "c", text: "It's too expensive" }, { id: "d", text: "It melts too easily" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Extraction", statement: "Above C needs electrolysis." }],
            steps: [{ reasoning: "Recall.", working: "\\text{above C}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** It's too reactive — above carbon in the series",
            commonErrors: ["Saying 'too expensive' — it's reactivity."],
          },
        },
        {
          id: "ciecy-u8-aluminium-extraction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of cryolite in aluminium extraction?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Cryolite", statement: "Lowers melting point." }],
            steps: [
              { reasoning: "Lowers mp of Al₂O₃.", marks: 1, markCode: "M" },
              { reasoning: "Saves energy cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cryolite dissolves Al₂O₃ and lowers its melting point from ~2050°C to ~950°C, reducing the energy needed for electrolysis.",
            commonErrors: ["Saying 'speeds reaction' — it's mp reduction."],
          },
        },
        {
          id: "ciecy-u8-aluminium-extraction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write half-equations for aluminium extraction by electrolysis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Al electrolysis", statement: "Cathode: Al³⁺+3e⁻→Al; anode: O²⁻→O₂." }],
            steps: [
              { reasoning: "Cathode: Al³⁺ + 3e⁻ → Al.", marks: 1, markCode: "M" },
              { reasoning: "Anode: 2O²⁻ → O₂ + 4e⁻.", marks: 1, markCode: "M" },
              { reasoning: "Label electrodes.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻",
            commonErrors: ["Swapping cathode/anode products."],
          },
        },
        {
          id: "ciecy-u8-aluminium-extraction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the extraction of aluminium by electrolysis.",
          parts: [
            { label: "a", prompt: "Explain why electrolysis is needed.", marks: 3 },
            { label: "b", prompt: "Describe the electrolyte and its preparation.", marks: 3 },
            { label: "c", prompt: "Describe electrode reactions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Al extraction", statement: "Al₂O₃ in cryolite, electrolysis." }],
            steps: [
              { part: "a", reasoning: "Al above C in series.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Carbon can't reduce it.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Need electrolysis.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Al₂O₃ + cryolite.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cryolite lowers mp.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Molten electrolyte.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cathode: Al³⁺→Al.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Anode: O²⁻→O₂.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Anodes burn away.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) above C→electrolysis (b) Al₂O₃+cryolite molten (c) Al³⁺→Al cathode, O²⁻→O₂ anode",
            commonErrors: ["In (c) wrong half-equation at anode."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u8-extraction-notes",
      title: "Extraction detail — revision notes",
      summary: "Blast furnace for iron, electrolysis for aluminium.",
      sections: [
        {
          heading: "Key facts",
          body: "Blast furnace: Fe₂O₃+3CO→2Fe+3CO₂; limestone→slag; coke fuel/CO source. Al: above C→electrolysis of Al₂O₃ in cryolite; cathode Al³⁺+3e⁻→Al.",
        },
        {
          heading: "Exam technique",
          body: "- Below C → blast furnace; above C → electrolysis.\n- Cryolite = mp reducer not catalyst.\n- Anodes in Al electrolysis are consumed.",
        },
      ],
    },
  ],
};
