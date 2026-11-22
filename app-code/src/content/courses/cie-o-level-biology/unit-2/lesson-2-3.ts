import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olbio-u2-lesson-2-3",
  code: "2-3",
  title: "Water and pH",
  goal: "I CAN explain the properties of water important to living organisms and interpret the pH scale.",
  standards: ["5090 2.1"],
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
      id: "olbio-u2-water-properties",
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
          id: "olbio-u2-water-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What property of water allows it to dissolve many substances?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is a metal" },
              { id: "b", text: "It is non-polar" },
              { id: "c", text: "It has no hydrogen bonds" },
              { id: "d", text: "It is polar" },
            ],
            correctChoiceId: "d",
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
          id: "olbio-u2-water-properties-q2",
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
          id: "olbio-u2-water-properties-q3",
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
          id: "olbio-u2-water-properties-q4",
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
        {
          id: "olbio-u2-water-properties-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Water is called the 'universal solvent' mainly because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-polar" },
              { id: "b", text: "Gaseous at room temperature" },
              { id: "c", text: "Polar" },
              { id: "d", text: "A metal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water polarity", statement: "Polar water dissolves ionic and polar substances." },
            ],
            steps: [
              { reasoning: "Recall the property.", working: "\\text{polar}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Polar",
            commonErrors: ["Choosing non-polar — polarity enables dissolving."],
          },
        },
        {
          id: "olbio-u2-water-properties-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cohesion of water refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water dissolving substances" },
              { id: "b", text: "Water molecules sticking to each other" },
              { id: "c", text: "Water molecules sticking to other surfaces" },
              { id: "d", text: "Water freezing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cohesion", statement: "Water molecules sticking to each other via hydrogen bonds." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{water-water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water molecules sticking to each other",
            commonErrors: ["Confusing cohesion with adhesion — adhesion is sticking to other surfaces."],
          },
        },
        {
          id: "olbio-u2-water-properties-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why does water's high specific heat capacity benefit living organisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It causes ice to float" },
              { id: "b", text: "It warms up and cools down quickly" },
              { id: "c", text: "It resists temperature change, buffering organisms against fluctuations" },
              { id: "d", text: "It makes water a good solvent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Specific heat capacity", statement: "Water warms/cools slowly → stable internal temperature for organisms." },
            ],
            steps: [
              { reasoning: "Interpret the property.", working: "\\text{slow temp change}", marks: 1, markCode: "M" },
              { reasoning: "Link to biological benefit.", working: "\\text{temperature buffer}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It resists temperature change, buffering organisms against fluctuations",
            commonErrors: ["Choosing 'warms quickly' — high specific heat means the opposite."],
          },
        },
        {
          id: "olbio-u2-water-properties-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cell has a mass of 50 g and is 80% water by mass. Calculate the mass of water in the cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x whole." },
            ],
            steps: [
              { reasoning: "Calculate 80% of 50.", working: "0.80 \\times 50 = 40", marks: 1, markCode: "M" },
              { reasoning: "State the mass.", working: "40 \\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 g",
            commonErrors: ["Multiplying by 80 instead of 0.80."],
          },
        },
        {
          id: "olbio-u2-water-properties-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two tissue samples are analysed: sample A has mass 60 g and is 80% water; sample B has mass 40 g and is 90% water. (a) Calculate the mass of water in sample A. (b) Calculate the mass of water in sample B.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 48, unit: "g" },
              { label: "b", answer: 36, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Water mass", statement: "Water mass = percentage / 100 x tissue mass." },
            ],
            steps: [
              { reasoning: "Sample A: 0.80 x 60 = 48 g.", working: "0.80 \\times 60 = 48", marks: 1, markCode: "M" },
              { reasoning: "Sample B: 0.90 x 40 = 36 g.", working: "0.90 \\times 40 = 36", marks: 1, markCode: "M" },
              { reasoning: "State both masses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 48 g; (b) 36 g",
            commonErrors: ["Using the wrong percentage for each sample."],
          },
        },
        {
          id: "olbio-u2-water-properties-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The density of water is 1.0 g cm$^{-3}$ and the density of ice is 0.92 g cm$^{-3}$. Calculate the percentage by which ice is less dense than water.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage difference", statement: "Percentage less dense = (1.0 - 0.92) / 1.0 x 100." },
            ],
            steps: [
              { reasoning: "Calculate the difference and percentage.", working: "\\frac{0.08}{1.0} \\times 100 = 8\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "8\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8% less dense",
            commonErrors: ["Dividing by 0.92 instead of 1.0 — percentage is relative to water."],
          },
        },
        {
          id: "olbio-u2-water-properties-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is NOT a property of water important to living organisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is non-polar" },
              { id: "b", text: "It is a universal solvent" },
              { id: "c", text: "It has a high specific heat capacity" },
              { id: "d", text: "It has cohesion and adhesion" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water properties", statement: "Water is polar — not non-polar — which is why it dissolves substances." },
            ],
            steps: [
              { reasoning: "Identify the false statement.", working: "\\text{polar}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It is non-polar",
            commonErrors: ["Choosing a real property — the question asks which is NOT true."],
          },
        },
        {
          id: "olbio-u2-water-properties-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'solvent'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solvent", statement: "The liquid in which substances dissolve." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{dissolving liquid}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The liquid in which a substance dissolves — water is the universal solvent in cells.",
            commonErrors: ["Confusing solvent with solute — the solute is what dissolves."],
          },
        },
        {
          id: "olbio-u2-water-properties-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how water's high specific heat capacity helps organisms survive in changing environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermal buffering", statement: "Water absorbs/releases large amounts of heat with little temperature change." },
            ],
            steps: [
              { reasoning: "Water requires much energy to warm up.", working: "\\text{high energy needed}", marks: 1, markCode: "M" },
              { reasoning: "Temperature of water changes slowly.", working: "\\text{slow change}", marks: 1, markCode: "M" },
              { reasoning: "Organisms are mostly water → internal temperature stable.", working: "\\text{stable temp}", marks: 1, markCode: "M" },
              { reasoning: "Buffers against external temperature swings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water's high specific heat capacity means it warms and cools slowly; since organisms are mostly water, their internal temperature stays stable despite external changes.",
            commonErrors: ["Saying water 'produces heat' — it stores heat energy."],
          },
        },
        {
          id: "olbio-u2-water-properties-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of surface tension in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water dissolving salt" },
              { id: "b", text: "Ice floating on water" },
              { id: "c", text: "Water rising in xylem" },
              { id: "d", text: "An insect walking on the surface of a pond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Surface tension", statement: "Cohesion at the surface lets small objects/insects rest on water." },
            ],
            steps: [
              { reasoning: "Match example to property.", working: "\\text{surface}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** An insect walking on the surface of a pond",
            commonErrors: ["Choosing xylem — that is cohesion/adhesion capillary action, not surface tension."],
          },
        },
        {
          id: "olbio-u2-water-properties-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the roles of cohesion and adhesion in water transport in plants.",
          parts: [
            { label: "a", prompt: "Define cohesion and adhesion.", marks: 2 },
            { label: "b", prompt: "Explain how they work together in the transpiration stream.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cohesion/adhesion", statement: "Cohesion = water-water; adhesion = water-xylem walls; together maintain continuous column." },
            ],
            steps: [
              { part: "a", reasoning: "Cohesion: water sticks to water.", working: "\\text{cohesion}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Adhesion: water sticks to other surfaces (xylem walls).", working: "\\text{adhesion}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cohesion keeps the column continuous.", working: "\\text{continuous column}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Adhesion prevents the column breaking away from walls.", working: "\\text{wall grip}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Together allow water to be pulled up to leaves.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cohesion = water-water attraction; adhesion = water-surface attraction (b) together maintain a continuous water column pulled up xylem",
            commonErrors: ["Swapping the definitions — cohesion is water-water, adhesion is water-surface."],
          },
        },
        {
          id: "olbio-u2-water-properties-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain why water is essential for all living organisms.",
          parts: [
            { label: "a", prompt: "Explain water's role as a solvent in cells.", marks: 2 },
            { label: "b", prompt: "Explain how cohesion and adhesion aid transport.", marks: 3 },
            { label: "c", prompt: "Explain how water's thermal properties help organisms.", marks: 2 },
            { label: "d", prompt: "Explain why ice floating on water is important for aquatic life.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Water importance", statement: "Solvent for metabolism, transport medium, temperature buffer, ice insulation." },
            ],
            steps: [
              { part: "a", reasoning: "Dissolves reactants and products.", working: "\\text{dissolves}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Allows metabolic reactions in solution.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cohesion holds water column together.", working: "\\text{cohesion}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Adhesion sticks column to xylem walls.", working: "\\text{adhesion}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Enables transpiration stream/water uptake.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High specific heat → stable temperature.", working: "\\text{heat capacity}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Buffers against temperature change.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ice is less dense → floats on top.", working: "\\text{ice floats}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Insulates water below → aquatic organisms survive winter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) solvent for metabolic reactions (b) cohesion+adhesion enable water transport (c) thermal buffer (d) floating ice insulates water below",
            commonErrors: ["In (d) saying ice sinks — water expands on freezing so ice floats."],
          },
        },
      ],
    },
    {
      id: "olbio-u2-ph",
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
          id: "olbio-u2-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of pure water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14" },
              { id: "b", text: "0" },
              { id: "c", text: "1" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "d",
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
          id: "olbio-u2-ph-q2",
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
          id: "olbio-u2-ph-q3",
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
          id: "olbio-u2-ph-q4",
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
        {
          id: "olbio-u2-ph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution with pH 7 is described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A buffer" },
              { id: "b", text: "Acidic" },
              { id: "c", text: "Alkaline" },
              { id: "d", text: "Neutral" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "pH 7 = neutral; <7 acidic; >7 alkaline." },
            ],
            steps: [
              { reasoning: "Recall the scale.", working: "\\text{pH } 7 = \\text{neutral}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Neutral",
            commonErrors: ["Choosing acidic — that's pH below 7."],
          },
        },
        {
          id: "olbio-u2-ph-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution with pH 4 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acidic" },
              { id: "b", text: "Neutral" },
              { id: "c", text: "A buffer" },
              { id: "d", text: "Alkaline" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "pH below 7 = acidic." },
            ],
            steps: [
              { reasoning: "Interpret pH 4.", working: "4 < 7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Acidic",
            commonErrors: ["Choosing alkaline — that's pH above 7."],
          },
        },
        {
          id: "olbio-u2-ph-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "On the pH scale, each unit represents a tenfold difference in hydrogen ion concentration. A solution of pH 3 has how many times more H⁺ ions than a solution of pH 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1000 times" },
              { id: "b", text: "2 times" },
              { id: "c", text: "100 times" },
              { id: "d", text: "10 times" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each pH unit = 10x difference in H⁺ concentration." },
            ],
            steps: [
              { reasoning: "Difference is 2 pH units.", working: "5 - 3 = 2", marks: 1, markCode: "M" },
              { reasoning: "10² = 100 times more H⁺.", working: "10^2 = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 100 times",
            commonErrors: ["Answering 10 — that is for a 1-unit difference."],
          },
        },
        {
          id: "olbio-u2-ph-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solution A has pH 3 and solution B has pH 5. Calculate how many times greater the H⁺ ion concentration is in solution A than in solution B.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each pH unit = 10x H⁺ difference." },
            ],
            steps: [
              { reasoning: "Difference = 2 pH units → 10².", working: "10^{5-3} = 10^2", marks: 1, markCode: "M" },
              { reasoning: "Compute: 100 times.", working: "100 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 times",
            commonErrors: ["Answering 2 — pH difference is logarithmic, not linear."],
          },
        },
        {
          id: "olbio-u2-ph-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare hydrogen ion concentrations on the pH scale: (a) pH 3 vs pH 4 — how many times more H⁺ in pH 3? (b) pH 2 vs pH 5 — how many times more H⁺ in pH 2?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "times" },
              { label: "b", answer: 1000, unit: "times" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each pH unit = factor of 10 in H⁺ concentration." },
            ],
            steps: [
              { reasoning: "(a) 1 unit difference → 10¹ = 10.", working: "10^1 = 10", marks: 1, markCode: "M" },
              { reasoning: "(b) 3 unit difference → 10³ = 1000.", working: "10^3 = 1000", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 times; (b) 1000 times",
            commonErrors: ["Multiplying by the pH difference instead of using powers of 10."],
          },
        },
        {
          id: "olbio-u2-ph-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Human blood has a pH of about 7.4 and stomach acid has a pH of about 2. Calculate the difference in pH between them.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5.4, unit: "pH units", tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH values", statement: "Blood ~7.4, stomach acid ~2." },
            ],
            steps: [
              { reasoning: "Subtract the pH values.", working: "7.4 - 2 = 5.4", marks: 1, markCode: "M" },
              { reasoning: "State the difference.", working: "5.4 \\text{ pH units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5.4 pH units",
            commonErrors: ["Giving 2.4 by subtracting incorrectly."],
          },
        },
        {
          id: "olbio-u2-ph-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A buffer is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A substance that resists changes in pH" },
              { id: "b", text: "A type of enzyme" },
              { id: "c", text: "A strong acid" },
              { id: "d", text: "A blood cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Buffer", statement: "Substance that resists pH change by absorbing excess H⁺ or OH⁻." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{resists pH change}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A substance that resists changes in pH",
            commonErrors: ["Choosing enzyme — buffers are chemical systems, not proteins."],
          },
        },
        {
          id: "olbio-u2-ph-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'buffer'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Buffer", statement: "Substance/system that resists changes in pH." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{resists pH change}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A substance or system that resists changes in pH by neutralising excess acid or alkali.",
            commonErrors: ["Saying it 'changes pH' — buffers prevent change."],
          },
        },
        {
          id: "olbio-u2-ph-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of buffers in maintaining blood pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood buffer", statement: "Hydrogen carbonate buffer neutralises excess H⁺/OH⁻ to keep blood pH ~7.4." },
            ],
            steps: [
              { reasoning: "Buffers absorb excess H⁺ ions.", working: "\\text{absorb H}^+", marks: 1, markCode: "M" },
              { reasoning: "Or absorb excess OH⁻.", working: "\\text{absorb OH}^-", marks: 1, markCode: "M" },
              { reasoning: "This keeps pH near 7.4.", working: "\\text{stable pH}", marks: 1, markCode: "M" },
              { reasoning: "Protects enzymes/proteins from denaturation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Buffers such as hydrogen carbonate neutralise excess H⁺ or OH⁻ in blood, keeping pH near 7.4 and protecting proteins/enzymes from denaturation.",
            commonErrors: ["Saying buffers produce H⁺ — they consume excess ions."],
          },
        },
        {
          id: "olbio-u2-ph-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which solution is alkaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pH 7" },
              { id: "b", text: "pH 5" },
              { id: "c", text: "pH 9" },
              { id: "d", text: "pH 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "pH above 7 = alkaline." },
            ],
            steps: [
              { reasoning: "Identify pH > 7.", working: "9 > 7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** pH 9",
            commonErrors: ["Choosing pH 7 — that is neutral."],
          },
        },
        {
          id: "olbio-u2-ph-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how to interpret values on the pH scale.",
          parts: [
            { label: "a", prompt: "State the pH ranges for acidic, neutral and alkaline solutions.", marks: 2 },
            { label: "b", prompt: "Explain what a difference of 2 pH units means for H⁺ concentration.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "<7 acid, 7 neutral, >7 alkali; each unit = 10x H⁺." },
            ],
            steps: [
              { part: "a", reasoning: "Acidic <7, neutral 7, alkaline >7.", working: "\\text{ranges}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each unit = factor of 10.", working: "\\text{10x per unit}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "2 units → 10² = 100 times.", working: "10^2 = 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So H⁺ concentration differs 100-fold.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) acid <7, neutral 7, alkali >7 (b) 2 units = 100x difference in H⁺",
            commonErrors: ["Saying 2 units = 2x — the scale is logarithmic."],
          },
        },
        {
          id: "olbio-u2-ph-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A patient has a blood pH that has fallen to 7.0. Explain the consequences and how the body responds.",
          parts: [
            { label: "a", prompt: "State the normal blood pH range.", marks: 1 },
            { label: "b", prompt: "Explain two problems caused by blood becoming too acidic.", marks: 3 },
            { label: "c", prompt: "Describe the immediate response of buffers.", marks: 3 },
            { label: "d", prompt: "Describe the longer-term response of the kidney.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Acidosis response", statement: "Low pH → enzyme/protein damage; buffers neutralise; kidney excretes excess H⁺." },
            ],
            steps: [
              { part: "a", reasoning: "Normal range ~7.35–7.45.", working: "7.35-7.45", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Enzymes lose optimum shape → slower metabolism.", working: "\\text{enzyme damage}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Proteins denature → loss of function.", working: "\\text{protein denaturation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Can be life-threatening if uncorrected.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Buffers absorb excess H⁺.", working: "\\text{absorb H}^+", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hydrogen carbonate acts as the buffer.", working: "\\text{HCO}_3^-", marks: 1, markCode: "M" },
              { part: "c", reasoning: "pH restored toward normal quickly.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Kidney excretes excess H⁺ in urine.", working: "\\text{excrete H}^+", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Long-term regulation of pH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 7.35-7.45 (b) enzyme/protein damage (c) buffers neutralise excess H⁺ (d) kidney excretes H⁺",
            commonErrors: ["In (b) only giving one problem — two distinct consequences needed."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u2-water-ph-notes",
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
