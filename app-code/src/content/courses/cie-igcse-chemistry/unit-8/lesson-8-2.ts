import type { Lesson } from "../../../types.ts";

export const lesson182: Lesson = {
  id: "ciecy-u8-lesson-8-2",
  code: "8-2",
  title: "Reactions of Metals",
  goal: "I CAN describe how metals react with oxygen, water and acids, and relate reactivity to position in the series.",
  standards: ["0654 8.2"],
  vocabulary: [
    { term: "Metal + oxygen", definition: "Forms metal oxide; reactivity determines vigour." },
    { term: "Metal + water", definition: "Alkali metals react violently; others slowly or not at all." },
    { term: "Metal + acid", definition: "Forms salt + hydrogen (only metals above H)." },
    { term: "Metal + steam", definition: "Less reactive metals react with steam → oxide + H₂." },
    { term: "Metal hydroxide", definition: "Alkali metals form soluble hydroxides (NaOH); others insoluble." },
    { term: "Displacement", definition: "More reactive metal takes electrons from less reactive ion." },
    { term: "Hydrogen test", definition: "Squeaky pop with lighted splint confirms H₂." },
    { term: "Patina", definition: "Green layer on copper — protective corrosion product." },
  ],
  concepts: [
    {
      id: "ciecy-u8-metal-reactions",
      title: "Metal reactions with oxygen, water and acid",
      skill: "Predict and describe reactions of metals with common reagents.",
      lesson: {
        sections: [
          {
            heading: "With oxygen",
            body: "All metals form oxides when heated in oxygen:\n- Mg burns brightly: 2Mg + O₂ → 2MgO\n- Fe → Fe₃O₄ (or Fe₂O₃)\n- Cu → black CuO (slow)\n- Au does not react\n\nReactivity ↓ down series.",
          },
          {
            heading: "With water",
            body: "- K, Na: react violently with cold water → hydroxide + H₂\n- Ca: reacts with cold water moderately\n- Mg: reacts with steam only\n- Zn, Fe: react with steam\n- Cu, Ag, Au: no reaction with water",
          },
          {
            heading: "With dilute acid",
            body: "Metals above H react: metal + acid → salt + H₂.\n- Mg + 2HCl → MgCl₂ + H₂↑ (fast, squeaky pop)\n- Zn + H₂SO₄ → ZnSO₄ + H₂↑\n- Cu + HCl → no reaction (Cu below H)",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Predict products when zinc reacts with dilute sulfuric acid.",
          solution: "Zn + H₂SO₄ → ZnSO₄ + H₂ (Zn is above H, so reacts; H₂ evolved).",
        },
      },
      questions: [
        {
          id: "ciecy-u8-metal-reactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is produced when a metal reacts with dilute acid?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Oxygen" }, { id: "b", text: "Hydrogen" }, { id: "c", text: "Chlorine" }, { id: "d", text: "Carbon dioxide" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Metal+acid", statement: "Salt + H₂." }],
            steps: [{ reasoning: "Recall.", working: "H_2", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Hydrogen",
            commonErrors: ["CO₂ is for carbonates."],
          },
        },
        {
          id: "ciecy-u8-metal-reactions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the equation for magnesium reacting with dilute hydrochloric acid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Mg+HCl", statement: "Mg + 2HCl → MgCl₂ + H₂." }],
            steps: [
              { reasoning: "Equation.", marks: 1, markCode: "M" },
              { reasoning: "Balanced with H₂.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mg + 2HCl → MgCl₂ + H₂",
            commonErrors: ["Wrong salt formula — MgCl₂ not MgCl."],
          },
        },
        {
          id: "ciecy-u8-metal-reactions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why copper does not react with dilute hydrochloric acid but zinc does.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reactivity series", statement: "Only metals above H displace H⁺." }],
            steps: [
              { reasoning: "Zn above H in series.", marks: 1, markCode: "M" },
              { reasoning: "Zn displaces H⁺ → H₂.", marks: 1, markCode: "M" },
              { reasoning: "Cu below H → cannot displace.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Zinc is above hydrogen in the reactivity series so it can displace H⁺ from acid to form H₂; copper is below hydrogen so cannot displace H⁺ — no reaction.",
            commonErrors: ["Saying 'copper doesn't react at all' — it reacts with other things."],
          },
        },
        {
          id: "ciecy-u8-metal-reactions-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare how different metals react with water.",
          parts: [
            { label: "a", prompt: "Describe alkali metal reaction.", marks: 3 },
            { label: "b", prompt: "Describe less reactive metal reaction.", marks: 3 },
            { label: "c", prompt: "Explain trend with reactivity series.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Metal+water", statement: "Reactivity determines vigour." }],
            steps: [
              { part: "a", reasoning: "K/Na violent with cold water.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hydroxide + H₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mg/Zn/Fe need steam.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Oxide/hydroxide + H₂.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "More reactive = faster/with water.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less reactive needs steam or none.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cu/Ag/Au no reaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) K/Na violent cold→hydroxide+H₂ (b) Mg+steam→oxide+H₂ (c) trend=reactivity",
            commonErrors: ["In (b) saying 'cold water' for all metals."],
          },
        },
      ],
    },
    {
      id: "ciecy-u8-metal-uses",
      title: "Uses of metals and protection",
      skill: "Relate metal properties to uses and describe protection methods.",
      lesson: {
        sections: [
          {
            heading: "Uses by property",
            body: "| Property | Metal | Use |\n|---|---|---|\n| Good conductor | Cu | electrical wiring |\n| Light + strong | Al | aircraft, cans |\n| Hard + cheap | Fe/steel | construction |\n| Corrosion resistant | Au, Pt | jewellery, catalysts |\n| Low density | Mg | car parts |",
          },
          {
            heading: "Corrosion protection",
            body: "- **Barrier**: paint, oil, plastic coating, tin plating\n- **Galvanising**: zinc coating on iron — zinc corrodes preferentially\n- **Sacrificial**: attach more reactive metal (Zn/Mg) to protect iron\n- **Electroplating**: coat with thin layer of another metal",
          },
          {
            heading: "Why protect",
            body: "Rusting = iron + oxygen + water → hydrated iron(III) oxide. Costs billions in damage; protection extends life.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does galvanised iron last longer than unprotected iron?",
          solution: "Zinc coating acts as barrier AND sacrificial metal — it corrodes preferentially, protecting the iron beneath.",
        },
      },
      questions: [
        {
          id: "ciecy-u8-metal-uses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is copper used for electrical wiring?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It's cheapest" }, { id: "b", text: "Good conductor, ductile" }, { id: "c", text: "Very hard" }, { id: "d", text: "Doesn't corrode" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Cu properties", statement: "Conductor + ductile." }],
            steps: [{ reasoning: "Recall.", working: "\\text{conduct + ductile}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Good conductor, ductile",
            commonErrors: ["Cheap isn't the main reason — conductivity is."],
          },
        },
        {
          id: "ciecy-u8-metal-uses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is galvanising?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Galvanising", statement: "Zinc coating on iron." }],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coating iron/steel with a layer of zinc to prevent rusting — zinc acts as barrier and sacrificial metal.",
            commonErrors: ["Saying 'any coating' — specifically zinc."],
          },
        },
        {
          id: "ciecy-u8-metal-uses-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sacrificial protection works with magnesium on iron.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Sacrificial", statement: "More reactive metal corrodes preferentially." }],
            steps: [
              { reasoning: "Mg more reactive than Fe.", marks: 1, markCode: "M" },
              { reasoning: "Mg oxidises first.", marks: 1, markCode: "M" },
              { reasoning: "Fe protected underneath.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnesium is more reactive than iron, so it oxidises/corrodes preferentially when attached — electrons flow to protect the iron, which doesn't rust.",
            commonErrors: ["Saying 'Mg is stronger' — it's reactivity not strength."],
          },
        },
        {
          id: "ciecy-u8-metal-uses-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe methods of protecting iron from rusting.",
          parts: [
            { label: "a", prompt: "Describe barrier methods.", marks: 3 },
            { label: "b", prompt: "Describe galvanising.", marks: 3 },
            { label: "c", prompt: "Describe sacrificial protection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Corrosion protection", statement: "Barrier/galvanise/sacrificial." }],
            steps: [
              { part: "a", reasoning: "Paint/oil/plastic blocks O₂+H₂O.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tin plating barrier.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zinc coating.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Barrier + sacrificial.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zn corrodes preferentially.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Attach Zn/Mg to iron.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More reactive corrodes first.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fe protected.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) paint/oil barrier (b) Zn coat barrier+sacrificial (c) Zn/Mg preferential corrosion",
            commonErrors: ["In (c) attaching less reactive metal — must be MORE reactive."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u8-reactions-uses-notes",
      title: "Metal reactions and uses — revision notes",
      summary: "Metal reactions with O₂/H₂O/acid, uses by property, corrosion protection.",
      sections: [
        {
          heading: "Key facts",
          body: "Metal+acid→salt+H₂ (above H only). K/Na violent with water; Mg+ steam. Cu uses: conductor. Galvanise=Zn coat; sacrificial=more reactive metal attached.",
        },
        {
          heading: "Exam technique",
          body: "- Check position vs H for acid reactions.\n- Reactivity determines water vigour.\n- Protection: barrier vs sacrificial vs galvanising.",
        },
      ],
    },
  ],
};
