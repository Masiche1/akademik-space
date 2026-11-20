import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cieb-u2-lesson-2-3",
  code: "2-3",
  title: "Water and pH",
  goal: "I CAN explain the properties of water important to living organisms and interpret the pH scale.",
  standards: ["0653 2.1"],
  vocabulary: [
    { term: "Solvent", definition: "Liquid in which substances dissolve — water is the universal solvent." },
    { term: "Cohesion", definition: "Water molecules sticking to each other via hydrogen bonds." },
    { term: "Adhesion", definition: "Water molecules sticking to other surfaces." },
    { term: "Hydrogen bond", definition: "Weak attraction between water molecules; gives water its properties." },
    { term: "pH", definition: "Scale measuring acidity/alkalinity; 7 = neutral, <7 acid, >7 alkali." },
    { term: "Buffer", definition: "Substance resisting pH change; maintains stable conditions." },
    { term: "Metabolic reactions", definition: "Chemical reactions occurring in living organisms." },
  ],
  concepts: [
    {
      id: "cieb-u2-water-properties",
      title: "Water and its importance",
      skill: "Explain how water's properties support life: solvent, cohesion, temperature stability.",
      lesson: {
        sections: [
          {
            heading: "Water as solvent",
            body: "Water dissolves many substances (ions, sugars, amino acids) because it's polar. Most metabolic reactions occur in aqueous solution — cells are ~70–90% water.",
          },
          {
            heading: "Cohesion and adhesion",
            body: "Hydrogen bonds make water molecules stick (cohesion) and cling to surfaces (adhesion). This enables:\n- **Transpiration stream**: continuous water column in xylem.\n- **Capillary action**: water rising in narrow tubes.\n- **Surface tension**: insects walking on water.",
          },
          {
            heading: "Thermal properties",
            body: "Water has a **high specific heat capacity** — it warms/cools slowly, buffering organisms against temperature change. It also expands when freezing (ice floats) — insulating water bodies.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is water called the 'universal solvent'?",
          solution: "Its polar nature allows it to dissolve a wide range of ionic and polar substances needed for metabolism.",
        },
      },
      questions: [
        {
          id: "cieb-u2-water-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What property of water allows it to dissolve many substances?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is polar" },
              { id: "b", text: "It is non-polar" },
              { id: "c", text: "It is a metal" },
              { id: "d", text: "It has no hydrogen bonds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water polarity", statement: "Polar water dissolves ionic/polar substances." },
            ],
            steps: [
              { reasoning: "Recall the property.", working: "\\text{polar}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is polar",
            commonErrors: ["Choosing non-polar — polarity is what makes it a good solvent."],
          },
        },
        {
          id: "cieb-u2-water-properties-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two properties of water important for living organisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water properties", statement: "Solvent, cohesion/adhesion, high specific heat." },
            ],
            steps: [
              { reasoning: "Give two properties.", working: "\\text{solvent, cohesion, heat capacity}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Universal solvent (dissolves substances), cohesion/adhesion (transpiration, capillary action), high specific heat capacity (temperature buffering).",
            commonErrors: ["Saying 'water is flammable' — obviously wrong."],
          },
        },
        {
          id: "cieb-u2-water-properties-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how cohesion and adhesion enable the transpiration stream.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cohesion/adhesion", statement: "Water molecules stick together and to xylem walls → continuous column pulled up." },
            ],
            steps: [
              { reasoning: "Cohesion: water molecules stick.", working: "\\text{cohesion}", marks: 1, markCode: "M" },
              { reasoning: "Adhesion: sticks to xylem walls.", working: "\\text{adhesion}", marks: 1, markCode: "M" },
              { reasoning: "Creates continuous column under tension.", working: "\\text{continuous column}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: water transported up.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cohesion holds water molecules together and adhesion sticks them to xylem walls, forming a continuous column that can be pulled upward by transpiration.",
            commonErrors: ["Saying 'water is pumped up' — it's pulled by transpiration, held by cohesion."],
          },
        },
        {
          id: "cieb-u2-water-properties-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain why water is essential for life.",
          parts: [
            { label: "a", prompt: "State three properties of water.", marks: 3 },
            { label: "b", prompt: "Explain how water acts as a solvent in cells.", marks: 2 },
            { label: "c", prompt: "Explain how water's thermal properties help organisms.", marks: 2 },
            { label: "d", prompt: "Give one example of cohesion/adhesion in action.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water importance", statement: "Solvent, transport, temperature buffer, structural support (turgor)." },
            ],
            steps: [
              { part: "a", reasoning: "List three properties.", working: "\\text{solvent, cohesion, heat}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State them.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dissolves reactants/products for metabolism.", working: "\\text{dissolves}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High specific heat → stable temperature.", working: "\\text{heat capacity}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Buffers against temperature change.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Example: transpiration stream or capillary action.", working: "\\text{example}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State example.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) solvent/cohesion/heat (b) dissolves for metabolism (c) buffers temperature (d) transpiration",
            commonErrors: ["In (b) saying 'water is food' — it's a medium, not nutrition."],
          },
        },
      ],
    },
    {
      id: "cieb-u2-ph",
      title: "pH and buffers",
      skill: "Interpret the pH scale and explain why pH must be controlled in organisms.",
      lesson: {
        sections: [
          {
            heading: "pH scale",
            body: "- **pH 0–6**: acidic\n- **pH 7**: neutral (pure water)\n- **pH 8–14**: alkaline\n\nEach unit = 10× difference in H⁺ concentration. Blood pH ~7.4; enzymes have optimum pH.",
          },
          {
            heading: "Why pH matters",
            body: "pH affects enzyme shape/activity and protein structure. Blood pH must stay 7.35–7.45 — small changes denature proteins and disrupt metabolism.",
          },
          {
            heading: "Buffers",
            body: "Buffers resist pH change — e.g. hydrogen carbonate in blood neutralises excess acid/base, maintaining pH. Kidneys also excrete excess H⁺/HCO₃⁻.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is a solution of pH 3 acidic or alkaline?",
          solution: "Acidic — pH below 7 indicates acid; lower = more acidic.",
        },
      },
      questions: [
        {
          id: "cieb-u2-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of pure water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "0" },
              { id: "c", text: "14" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Neutral pH", statement: "Pure water = pH 7." },
            ],
            steps: [
              { reasoning: "Recall neutral value.", working: "\\text{pH } 7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 7",
            commonErrors: ["Choosing 0 — that's strong acid."],
          },
        },
        {
          id: "cieb-u2-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the approximate pH of human blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood pH", statement: "~7.4 — slightly alkaline." },
            ],
            steps: [
              { reasoning: "Give value.", working: "\\sim 7.4", marks: 1, markCode: "M" },
              { reasoning: "State it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximately pH 7.4 (slightly alkaline).",
            commonErrors: ["Saying pH 7 — blood is slightly alkaline."],
          },
        },
        {
          id: "cieb-u2-ph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why pH must be controlled in the human body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "pH control", statement: "Enzymes/proteins sensitive to pH; blood pH must stay ~7.4." },
            ],
            steps: [
              { reasoning: "Enzymes have optimum pH.", working: "\\text{enzyme optimum}", marks: 1, markCode: "M" },
              { reasoning: "pH change → enzyme denaturation.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { reasoning: "Proteins lose shape/function.", working: "\\text{protein shape}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: metabolic disruption.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "pH affects enzyme shape and protein structure; deviations from ~7.4 denature proteins and disrupt metabolism, so buffers maintain blood pH.",
            commonErrors: ["Saying 'pH doesn't matter' — it's critical for enzyme function."],
          },
        },
        {
          id: "cieb-u2-ph-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how the body maintains blood pH.",
          parts: [
            { label: "a", prompt: "State the normal blood pH range.", marks: 1 },
            { label: "b", prompt: "Describe what happens if blood becomes too acidic.", marks: 3 },
            { label: "c", prompt: "Explain the role of buffers in maintaining pH.", marks: 3 },
            { label: "d", prompt: "State the role of the kidney in pH control.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "pH regulation", statement: "Blood pH ~7.4; buffers neutralise; kidney excretes excess H⁺/HCO₃⁻." },
            ],
            steps: [
              { part: "a", reasoning: "pH ~7.35–7.45.", working: "\\text{7.35-7.45}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Excess H⁺ accumulates.", working: "\\text{H}^+ \\uparrow", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Buffers neutralise acid.", working: "\\text{buffer}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "If unbuffered → protein/enzyme damage.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Buffers absorb excess H⁺ or OH⁻.", working: "\\text{absorb ions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Resist pH change → stability.", working: "\\text{resist change}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Example: hydrogen carbonate in blood.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Kidney excretes excess H⁺/HCO₃⁻ in urine.", working: "\\text{kidney excretion}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Long-term pH regulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 7.35-7.45 (b) H⁺↑→buffer→damage if unbuffered (c) buffers absorb ions (d) kidney excretes excess",
            commonErrors: ["In (c) saying 'kidney does everything' — buffers act first (fast), kidney is slower."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u2-water-ph-notes",
      title: "Water and pH — revision notes",
      summary: "Water properties, pH scale, buffers and pH regulation.",
      sections: [
        {
          heading: "Water",
          body: "Polar → universal solvent. Cohesion/adhesion → transpiration stream, capillary action. High specific heat → temperature buffering.",
        },
        {
          heading: "pH",
          body: "pH 7 neutral, <7 acid, >7 alkali. Blood ~7.4. Buffers (hydrogen carbonate) resist pH change; kidney excretes excess H⁺/HCO₃⁻.",
        },
        {
          heading: "Exam technique",
          body: "- pH questions: always state the scale interpretation (acid/alkali/neutral).\n- Water: link property → biological function.",
        },
      ],
    },
  ],
};
