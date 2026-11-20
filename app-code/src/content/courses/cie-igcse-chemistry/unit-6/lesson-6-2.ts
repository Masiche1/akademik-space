import type { Lesson } from "../../../types.ts";

export const lesson162: Lesson = {
  id: "ciecy-u6-lesson-6-2",
  code: "6-2",
  title: "Collision Theory and Catalysts",
  goal: "I CAN explain reaction rates using collision theory and describe catalyst action.",
  standards: ["0654 6.2"],
  vocabulary: [
    { term: "Collision theory", definition: "Reactions occur when particles collide with sufficient energy and correct orientation." },
    { term: "Activation energy", definition: "Minimum energy particles need in collision to react." },
    { term: "Effective collision", definition: "Collision with enough energy and correct orientation to react." },
    { term: "Catalyst", definition: "Substance that increases rate by lowering Ea, unchanged at end." },
    { term: "Enzyme", definition: "Biological catalyst (protein) — very specific." },
    { term: "Surface area", definition: "Smaller particles → more surface → more collisions per second." },
    { term: "Concentration", definition: "More particles per volume → more frequent collisions." },
    { term: "Temperature", definition: "Higher T → faster particles → more energetic collisions." },
  ],
  concepts: [
    {
      id: "ciecy-u6-collision-theory",
      title: "Collision theory",
      skill: "Explain rate changes using collision theory.",
      lesson: {
        sections: [
          {
            heading: "The theory",
            body: "For a reaction to occur, particles must collide with:\n1. **Sufficient energy** (≥ Ea)\n2. **Correct orientation**\n\nOnly effective collisions lead to products. Rate ∝ number of effective collisions per second.",
          },
          {
            heading: "Factors",
            body: "| Factor | Effect | Reason |\n|---|---|---|\n| Concentration ↑ | faster | more particles → more collisions |\n| Pressure ↑ (gas) | faster | same effect as concentration |\n| Temperature ↑ | much faster | faster + more energetic particles |\n| Surface area ↑ | faster | more particles exposed |",
          },
          {
            heading: "Temperature detail",
            body: "Temperature has the biggest effect — a 10°C rise can double rate because:\n- Particles move faster → collide more often\n- More particles exceed Ea → more effective collisions",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does powdered calcium carbonate react faster with acid than large lumps?",
          solution: "Powder has greater surface area → more particles exposed to acid → more frequent effective collisions per second.",
        },
      },
      questions: [
        {
          id: "ciecy-u6-collision-theory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What two conditions must a collision meet for reaction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "High pressure and temperature" }, { id: "b", text: "Sufficient energy and correct orientation" }, { id: "c", text: "Large particles and high concentration" }, { id: "d", text: "Catalyst present and light" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Effective collision", statement: "Enough energy + correct orientation." }],
            steps: [{ reasoning: "Recall.", working: "\\text{energy + orientation}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Sufficient energy and correct orientation",
            commonErrors: ["Only mentioning energy — orientation also needed."],
          },
        },
        {
          id: "ciecy-u6-collision-theory-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why increasing temperature increases reaction rate more than increasing concentration.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Temperature", statement: "Affects both collision frequency AND energy." }],
            steps: [
              { reasoning: "Faster particles → more collisions.", marks: 1, markCode: "M" },
              { reasoning: "More exceed Ea → bigger effect than concentration alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature increases both collision frequency and the proportion of particles with energy ≥ Ea — concentration only increases frequency, so temperature has a greater effect.",
            commonErrors: ["Saying 'temperature makes particles bigger'."],
          },
        },
        {
          id: "ciecy-u6-collision-theory-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a catalyst speeds up a reaction using collision theory.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Catalyst", statement: "Lowers Ea → more effective collisions." }],
            steps: [
              { reasoning: "Provides alternative pathway.", marks: 1, markCode: "M" },
              { reasoning: "Lower Ea needed.", marks: 1, markCode: "M" },
              { reasoning: "More collisions exceed Ea.", marks: 1, markCode: "M" },
              { reasoning: "Rate increases; catalyst unchanged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A catalyst provides an alternative reaction pathway with lower activation energy, so more collisions have sufficient energy to react — rate increases without the catalyst being consumed.",
            commonErrors: ["Saying catalyst is 'used up'."],
          },
        },
        {
          id: "ciecy-u6-collision-theory-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Use collision theory to explain how each factor affects reaction rate.",
          parts: [
            { label: "a", prompt: "Explain concentration effect.", marks: 3 },
            { label: "b", prompt: "Explain surface area effect.", marks: 3 },
            { label: "c", prompt: "Explain temperature effect.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Collision theory", statement: "Rate ∝ effective collisions/s." }],
            steps: [
              { part: "a", reasoning: "More particles per volume.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More frequent collisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Faster rate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Smaller particles → more surface.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "More particles exposed to collide.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Faster rate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Faster particles → more collisions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More have energy ≥ Ea.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Much faster rate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) more particles→more collisions (b) more surface→more exposure (c) faster+energetic→more effective",
            commonErrors: ["In (c) only mentioning speed, not energy."],
          },
        },
      ],
    },
    {
      id: "ciecy-u6-catalysts",
      title: "Catalysts in detail",
      skill: "Describe catalyst action, types and industrial uses.",
      lesson: {
        sections: [
          {
            heading: "How catalysts work",
            body: "Catalyst provides alternative pathway with lower Ea. It is regenerated unchanged — not consumed.\n\nOn energy profile: lower peak, same ΔH, faster rate.",
          },
          {
            heading: "Types",
            body: "- **Heterogeneous**: different phase (e.g. Fe in Haber, Pt in Contact)\n- **Homogeneous**: same phase (e.g. acid in esterification)\n- **Enzymes**: biological catalysts, highly specific, optimum pH/temp",
          },
          {
            heading: "Industrial uses",
            body: "- Haber process: Fe catalyst for NH₃\n- Contact process: V₂O₅ for H₂SO₄\n- Catalytic converters: Pt/Pd/Rh for car exhaust\n- Cracking: zeolites for hydrocarbons",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a catalyst not appear in the overall equation?",
          solution: "It participates but is regenerated unchanged — same amount at start and end, so not consumed.",
        },
      },
      questions: [
        {
          id: "ciecy-u6-catalysts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a catalyst do to activation energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increases it" }, { id: "b", text: "Lowers it" }, { id: "c", text: "No effect" }, { id: "d", text: "Eliminates it" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Catalyst", statement: "Lowers Ea." }],
            steps: [{ reasoning: "Recall.", working: "E_a \\downarrow", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Lowers it",
            commonErrors: ["Saying 'no effect' — it doesn't change ΔH but lowers Ea."],
          },
        },
        {
          id: "ciecy-u6-catalysts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a catalyst not included in the overall chemical equation?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Catalyst", statement: "Regenerated unchanged." }],
            steps: [
              { reasoning: "Catalyst is regenerated.", marks: 1, markCode: "M" },
              { reasoning: "Not consumed → same before/after.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A catalyst is regenerated unchanged at the end of the reaction — it is not consumed, so it does not appear in the overall equation.",
            commonErrors: ["Saying 'it's not a reactant' — it is, temporarily."],
          },
        },
        {
          id: "ciecy-u6-catalysts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why enzymes are described as specific catalysts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Enzyme specificity", statement: "Active site fits one substrate." }],
            steps: [
              { reasoning: "Enzyme has specific active site.", marks: 1, markCode: "M" },
              { reasoning: "Only complementary substrate fits.", marks: 1, markCode: "M" },
              { reasoning: "Like lock and key.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzymes have a specific active site shape that only fits its complementary substrate — like a lock and key — so each enzyme catalyses only one type of reaction.",
            commonErrors: ["Saying enzymes are 'general catalysts'."],
          },
        },
        {
          id: "ciecy-u6-catalysts-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the role of catalysts in industrial processes.",
          parts: [
            { label: "a", prompt: "Explain how catalysts work.", marks: 3 },
            { label: "b", prompt: "Give two industrial examples.", marks: 3 },
            { label: "c", prompt: "State why catalysts are economically important.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Industrial catalysts", statement: "Lower Ea → faster rate at lower T → cheaper." }],
            steps: [
              { part: "a", reasoning: "Lower Ea pathway.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "More effective collisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Faster rate, unchanged catalyst.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Haber: Fe for NH₃.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contact: V₂O₅ for H₂SO₄.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct examples.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Allows lower temperatures.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Saves energy cost.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Higher yield/faster production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lower Ea→faster (b) Haber Fe/Contact V₂O₅ (c) lower T saves energy",
            commonErrors: ["In (b) only one example given."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u6-collision-notes",
      title: "Collision theory and catalysts — revision notes",
      summary: "Effective collisions, rate factors, catalyst action and uses.",
      sections: [
        {
          heading: "Key facts",
          body: "Effective collision = enough energy + correct orientation. Factors: concentration, pressure, temperature, surface area. Catalyst lowers Ea, not ΔH, not consumed. Enzymes specific.",
        },
        {
          heading: "Exam technique",
          body: "- Temperature has biggest effect (frequency + energy).\n- Catalyst: lower peak on profile, same ΔH.\n- Industrial: Haber Fe, Contact V₂O₅, converters Pt.",
        },
      ],
    },
  ],
};
