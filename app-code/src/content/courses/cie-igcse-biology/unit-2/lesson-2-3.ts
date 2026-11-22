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
              { id: "b", text: "It has no hydrogen bonds" },
              { id: "c", text: "It is non-polar" },
              { id: "d", text: "It is a metal" },
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
        {
          id: "cieb-u2-water-properties-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of hydrogen bonds a single water molecule can form?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "bonds" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Hydrogen bonding", statement: "Each water molecule can form up to 4 hydrogen bonds (2 donated, 2 accepted)." },
            ],
            steps: [
              { reasoning: "Recall the maximum number.", working: "4 \\text{ hydrogen bonds}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "4 bonds",
            commonErrors: ["Answering 2 — water can both donate and accept hydrogen bonds."],
          },
        },
        {
          id: "cieb-u2-water-properties-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cohesion in water refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water molecules sticking to each other via hydrogen bonds" },
              { id: "b", text: "Water freezing into ice" },
              { id: "c", text: "Water dissolving salts" },
              { id: "d", text: "Water evaporating from leaves" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cohesion", statement: "Water molecules attracted to each other." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{molecules stick together}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water molecules sticking to each other via hydrogen bonds",
            commonErrors: ["Confusing with adhesion — adhesion is sticking to other surfaces."],
          },
        },
        {
          id: "cieb-u2-water-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water's high specific heat capacity means that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warms up and cools down slowly, buffering temperature changes" },
              { id: "b", text: "Heats up instantly" },
              { id: "c", text: "Always stays at 100°C" },
              { id: "d", text: "Cannot store heat energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Specific heat capacity", statement: "Water resists temperature change → thermal buffer." },
            ],
            steps: [
              { reasoning: "Recall the property.", working: "\\text{slow temp change}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Warms up and cools down slowly, buffering temperature changes",
            commonErrors: ["Choosing (c) — high specific heat means it stores a LOT of heat."],
          },
        },
        {
          id: "cieb-u2-water-properties-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how adhesion contributes to water transport in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Adhesion", statement: "Water clings to xylem walls, helping the continuous column rise." },
            ],
            steps: [
              { reasoning: "Adhesion = water sticks to xylem walls.", working: "\\text{sticks to walls}", marks: 1, markCode: "M" },
              { reasoning: "Combined with cohesion → continuous column.", working: "\\text{cohesion + adhesion}", marks: 1, markCode: "M" },
              { reasoning: "Column can be pulled upward by transpiration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adhesion makes water molecules cling to the walls of xylem vessels; together with cohesion this forms a continuous water column that can be pulled upward as transpiration draws water from the leaves.",
            commonErrors: ["Describing only cohesion and ignoring adhesion to the walls."],
          },
        },
        {
          id: "cieb-u2-water-properties-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ice floats on water and why this is important for aquatic life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ice floats", statement: "Water expands on freezing → ice less dense → floats and insulates." },
            ],
            steps: [
              { reasoning: "Water expands when it freezes.", working: "\\text{expands on freezing}", marks: 1, markCode: "M" },
              { reasoning: "Ice is therefore less dense and floats.", working: "\\text{less dense}", marks: 1, markCode: "M" },
              { reasoning: "Floating ice insulates water below.", working: "\\text{insulation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: aquatic organisms survive winter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water expands when it freezes so ice is less dense and floats; the floating ice layer insulates the water beneath, preventing it from freezing solid and allowing aquatic organisms to survive winter.",
            commonErrors: ["Saying ice sinks — it floats because it is less dense."],
          },
        },
        {
          id: "cieb-u2-water-properties-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Surface tension of water allows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water to dissolve fats" },
              { id: "b", text: "Some insects to walk on water" },
              { id: "c", text: "Cells to divide faster" },
              { id: "d", text: "Water to conduct electricity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Surface tension", statement: "Cohesion creates a 'skin' on water supporting small objects." },
            ],
            steps: [
              { reasoning: "Recall the example of surface tension.", working: "\\text{insects on water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Some insects to walk on water",
            commonErrors: ["Choosing (d) — pure water is a poor conductor."],
          },
        },
        {
          id: "cieb-u2-water-properties-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The specific heat capacity of water is approximately 4.2 J/g°C. Calculate the energy needed to raise the temperature of 10 g of water by 5°C.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 210, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Specific heat", statement: "$E = mc\\Delta T = 4.2 \\times 10 \\times 5$" },
            ],
            steps: [
              { reasoning: "Multiply specific heat capacity by mass and temperature change.", working: "4.2 \\times 10 \\times 5 = 210", marks: 1, markCode: "M" },
              { reasoning: "State the answer with units.", working: "210 \\text{ J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "210 J",
            commonErrors: ["Multiplying by 100 instead of 10, or forgetting the mass."],
          },
        },
        {
          id: "cieb-u2-water-properties-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how water contributes to turgor in plant cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Turgor", statement: "Water enters by osmosis → presses membrane against cell wall → support." },
            ],
            steps: [
              { reasoning: "Water enters the cell by osmosis.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { reasoning: "Cell contents swell, pressing membrane against wall.", working: "\\text{pressure on wall}", marks: 1, markCode: "M" },
              { reasoning: "Turgor gives rigidity/support to non-woody plants.", working: "\\text{support}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: water maintains plant shape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters plant cells by osmosis, making the cell contents swell and press the cell membrane against the rigid cell wall; this turgor pressure keeps non-woody plants upright and supported.",
            commonErrors: ["Saying water 'feeds' the plant — it provides turgor pressure, not nutrition."],
          },
        },
        {
          id: "cieb-u2-water-properties-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about water is NOT correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It forms hydrogen bonds between molecules" },
              { id: "b", text: "It is a poor solvent for ionic substances" },
              { id: "c", text: "It has a high specific heat capacity" },
              { id: "d", text: "It expands when it freezes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water properties", statement: "Polar → good solvent; high SHC; expands on freezing; H-bonds." },
            ],
            steps: [
              { reasoning: "Identify the false statement.", working: "\\text{good solvent}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It is a poor solvent for ionic substances",
            commonErrors: ["Choosing a true statement — the question asks for the incorrect one."],
          },
        },
        {
          id: "cieb-u2-water-properties-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how water's thermal properties help organisms survive in changing environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermal properties", statement: "High specific heat buffers temperature; ice floats and insulates." },
            ],
            steps: [
              { reasoning: "High specific heat capacity → warms/cools slowly.", working: "\\text{SHC}", marks: 1, markCode: "M" },
              { reasoning: "Buffers organisms against temperature fluctuations.", working: "\\text{buffer}", marks: 1, markCode: "M" },
              { reasoning: "Ice floats → insulates water below in winter.", working: "\\text{ice insulation}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: stable internal environment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water's high specific heat capacity means it absorbs and releases heat slowly, buffering organisms against temperature swings; floating ice insulates water bodies in winter so aquatic life survives — together maintaining stable conditions.",
            commonErrors: ["Only mentioning one thermal property — both SHC and ice insulation are relevant."],
          },
        },
        {
          id: "cieb-u2-water-properties-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Capillary action in narrow tubes is caused by the combined effect of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wind blowing" },
              { id: "b", text: "Adhesion and cohesion" },
              { id: "c", text: "Gravity alone" },
              { id: "d", text: "Water's colour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Capillary action", statement: "Adhesion to tube walls + cohesion between molecules → water rises." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{adhesion + cohesion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Adhesion and cohesion",
            commonErrors: ["Choosing gravity — capillary rise works against gravity."],
          },
        },
        {
          id: "cieb-u2-water-properties-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A cell is approximately 80% water by mass. If a cell has a mass of 50 g, calculate the mass of water in the cell.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$0.8 \\times 50 = 40 \\text{ g}$" },
            ],
            steps: [
              { reasoning: "Calculate 80% of the cell mass.", working: "0.8 \\times 50 = 40", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "40 \\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 g",
            commonErrors: ["Using 50% instead of 80% of the cell mass."],
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
              { id: "c", text: "1" },
              { id: "d", text: "14" },
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
        {
          id: "cieb-u2-ph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pH of 7 indicates a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral solution" },
              { id: "b", text: "Strong alkali" },
              { id: "c", text: "Strong acid" },
              { id: "d", text: "Weak acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Neutral pH", statement: "pH 7 = neutral; <7 acid; >7 alkali." },
            ],
            steps: [
              { reasoning: "Recall the scale.", working: "pH = 7 \\to \\text{neutral}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Neutral solution",
            commonErrors: ["Choosing (d) — pH 7 is neutral, not weakly acidic."],
          },
        },
        {
          id: "cieb-u2-ph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution with a pH below 7 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A salt only" },
              { id: "b", text: "Alkaline" },
              { id: "c", text: "Neutral" },
              { id: "d", text: "Acidic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "pH < 7 = acidic; > 7 = alkaline." },
            ],
            steps: [
              { reasoning: "Recall the scale interpretation.", working: "pH < 7 \\to \\text{acid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Acidic",
            commonErrors: ["Reversing the scale — below 7 is acid, above is alkali."],
          },
        },
        {
          id: "cieb-u2-ph-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Each decrease of one pH unit means the H⁺ concentration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays the same" },
              { id: "b", text: "Doubles" },
              { id: "c", text: "Increases tenfold" },
              { id: "d", text: "Decreases tenfold" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each unit = 10× difference in H⁺ concentration." },
            ],
            steps: [
              { reasoning: "Recall the scale rule.", working: "10\\times", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increases tenfold",
            commonErrors: ["Choosing (d) — lower pH means MORE H⁺, not less."],
          },
        },
        {
          id: "cieb-u2-ph-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of buffers in maintaining blood pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Buffers", statement: "Resist pH change by absorbing excess H⁺ or OH⁻." },
            ],
            steps: [
              { reasoning: "Buffers absorb excess H⁺ when acid rises.", working: "\\text{absorb H}^+", marks: 1, markCode: "M" },
              { reasoning: "Buffers absorb excess OH⁻ when alkali rises.", working: "\\text{absorb OH}^-", marks: 1, markCode: "M" },
              { reasoning: "Result: pH stays stable ~7.4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Buffers (e.g. hydrogen carbonate in blood) absorb excess H⁺ or OH⁻, resisting pH change so blood pH stays stable around 7.4.",
            commonErrors: ["Saying buffers 'create' acid/base — they neutralise it."],
          },
        },
        {
          id: "cieb-u2-ph-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the kidneys help regulate blood pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Kidney pH role", statement: "Excretes excess H⁺ and HCO₃⁻ in urine for long-term pH control." },
            ],
            steps: [
              { reasoning: "Kidneys filter blood and excrete excess H⁺ in urine.", working: "\\text{excrete H}^+", marks: 1, markCode: "M" },
              { reasoning: "They also excrete/reabsorb HCO₃⁻ as needed.", working: "\\text{HCO}_3^-", marks: 1, markCode: "M" },
              { reasoning: "This is slower than buffers — long-term regulation.", working: "\\text{slow, long-term}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: kidneys maintain pH balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The kidneys excrete excess hydrogen ions (and regulate hydrogen carbonate) in the urine, providing slower, long-term control of blood pH to complement the rapid action of buffers.",
            commonErrors: ["Confusing kidney role with buffer role — buffers act first and fast."],
          },
        },
        {
          id: "cieb-u2-ph-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution with a pH of 9 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alkaline" },
              { id: "b", text: "A strong acid" },
              { id: "c", text: "Acidic" },
              { id: "d", text: "Neutral" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "pH > 7 = alkaline." },
            ],
            steps: [
              { reasoning: "Interpret the pH value.", working: "9 > 7 \\to \\text{alkaline}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alkaline",
            commonErrors: ["Choosing acidic — pH 9 is above neutral."],
          },
        },
        {
          id: "cieb-u2-ph-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solution A has pH 5 and solution B has pH 3. Given each pH unit = tenfold difference in H⁺ concentration, calculate how many times more H⁺ solution B contains compared to A.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "times" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Each unit = 10×; 2 units → 10² = 100." },
            ],
            steps: [
              { reasoning: "Find difference then apply tenfold rule.", working: "5 - 3 = 2 \\to 10^2 = 100", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "100 \\text{ times}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 times",
            commonErrors: ["Answering 2 — must apply the tenfold rule per unit."],
          },
        },
        {
          id: "cieb-u2-ph-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the buffer system in blood responds when excess acid enters the bloodstream.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Buffer response", statement: "Hydrogen carbonate neutralises excess H⁺ → carbonic acid → CO₂ + water." },
            ],
            steps: [
              { reasoning: "Excess H⁺ lowers blood pH.", working: "\\text{H}^+ \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "HCO₃⁻ accepts the H⁺ forming carbonic acid.", working: "\\text{HCO}_3^- + \\text{H}^+", marks: 1, markCode: "M" },
              { reasoning: "Carbonic acid breaks down to CO₂ + water, exhaled.", working: "\\text{CO}_2 \\text{ exhaled}", marks: 1, markCode: "M" },
              { reasoning: "pH returns to normal ~7.4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When excess acid enters blood, hydrogen ions are absorbed by the hydrogen carbonate buffer forming carbonic acid, which decomposes to CO₂ and water; the CO₂ is exhaled and blood pH returns to ~7.4.",
            commonErrors: ["Saying the kidney handles it first — buffers act rapidly; kidneys are slower."],
          },
        },
        {
          id: "cieb-u2-ph-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which substance is alkaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lemon juice" },
              { id: "b", text: "Stomach acid" },
              { id: "c", text: "Soap solution" },
              { id: "d", text: "Vinegar" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Alkaline substances", statement: "Soaps and detergents are alkaline; acids like vinegar/lemon are acidic." },
            ],
            steps: [
              { reasoning: "Identify the alkaline substance.", working: "\\text{soap}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Soap solution",
            commonErrors: ["Choosing vinegar — that is acidic."],
          },
        },
        {
          id: "cieb-u2-ph-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Acid rain has a pH of 4.8 while clean rain has a pH of 5.6. Calculate the difference in pH.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8, unit: "pH" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH difference", statement: "$5.6 - 4.8 = 0.8$" },
            ],
            steps: [
              { reasoning: "Subtract the two pH values.", working: "5.6 - 4.8 = 0.8", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "0.8 \\text{ pH units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.8 pH units",
            commonErrors: ["Giving a negative answer — take the larger pH minus the smaller."],
          },
        },
        {
          id: "cieb-u2-ph-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two mechanisms the body uses to regulate blood pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "pH regulation", statement: "Buffers (fast) + kidney excretion (slow)." },
            ],
            steps: [
              { reasoning: "Give the two mechanisms.", working: "\\text{buffers + kidney}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Buffer systems in the blood (fast, e.g. hydrogen carbonate) and the kidneys excreting excess H⁺/HCO₃⁻ in urine (slower, long-term).",
            commonErrors: ["Listing only one mechanism — the body uses both buffers and kidneys."],
          },
        },
        {
          id: "cieb-u2-ph-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Of the following pH values — 2, 5, 9 and 12 — how many indicate acidic solutions?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "solutions" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "Acidic = pH < 7." },
            ],
            steps: [
              { reasoning: "Count values below 7.", working: "2 \\text{ and } 5 \\text{ are acidic} = 2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2 solutions",
            commonErrors: ["Counting pH 9 and 12 — those are alkaline."],
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
