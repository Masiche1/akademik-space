import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypb4-u1-lesson-1-2",
  code: "1-2",
  title: "Membrane Transport and Enzymes",
  goal: "I CAN explain diffusion, osmosis and active transport, and describe how enzymes catalyse reactions and are affected by temperature and pH.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Diffusion", definition: "Net movement of particles from high to low concentration down a concentration gradient; no energy required." },
    { term: "Osmosis", definition: "Diffusion of water across a partially permeable membrane from high to low water concentration." },
    { term: "Active transport", definition: "Movement of substances against a concentration gradient using energy from ATP." },
    { term: "Enzyme", definition: "A protein that acts as a biological catalyst, lowering activation energy." },
    { term: "Active site", definition: "The region of an enzyme where the substrate binds; shape is specific to its substrate." },
    { term: "Denaturation", definition: "Permanent change in enzyme shape (usually by high temperature or extreme pH) that destroys its function." },
  ],
  concepts: [
    {
      id: "mypb4-u1-transport",
      title: "Diffusion, osmosis and active transport",
      skill: "Distinguish the three transport mechanisms and predict movement of substances across membranes.",
      lesson: {
        sections: [
          {
            heading: "Diffusion",
            body: "Particles move randomly and spread from **high to low concentration** until equilibrium. Factors increasing rate: higher temperature, larger concentration gradient, larger surface area. No energy or membrane protein needed. Examples: oxygen into cells, CO₂ out.",
          },
          {
            heading: "Osmosis",
            body: "Water diffuses across a **partially permeable membrane** from high water concentration (dilute solution) to low water concentration (concentrated solution). In animal cells: water in → swell/lyse; water out → shrink (crenation). Plant cells: water in → turgid (cell wall prevents bursting); water out → plasmolysis.",
          },
          {
            heading: "Active transport",
            body: "Movement **against** the gradient requires energy (ATP) and carrier proteins. Example: root hair cells absorbing mineral ions from soil where concentration is lower inside the cell than outside... actually soil water often has lower ion concentration than cell sap — ions must be pumped in.",
          },
        ],
        keyFormulas: [
          { name: "Diffusion", statement: "High → low concentration, no energy" },
          { name: "Osmosis", statement: "Water across partially permeable membrane, high → low water concentration" },
          { name: "Active transport", statement: "Against gradient, needs ATP + carrier protein" },
        ],
        workedExample: {
          problem: "A red blood cell is placed in pure water. Predict and explain what happens.",
          solution: "Water enters by osmosis (pure water = highest water concentration). Cell swells and may burst (lysis) — no cell wall.",
        },
      },
      questions: [
        {
          id: "mypb4-u1-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What drives diffusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Osmotic pressure only" },
              { id: "b", text: "Active transport proteins" },
              { id: "c", text: "A concentration gradient" },
              { id: "d", text: "ATP energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diffusion", statement: "Net movement down a concentration gradient." },
            ],
            steps: [
              { reasoning: "Diffusion occurs from high to low concentration — the gradient drives it.", working: "\\text{gradient}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A concentration gradient",
            commonErrors: ["Thinking energy is required."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u1-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to an animal cell placed in a concentrated salt solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — membrane is impermeable" },
              { id: "b", text: "Salt enters by active transport" },
              { id: "c", text: "Water enters; cell swells and bursts" },
              { id: "d", text: "Water leaves by osmosis; cell shrinks (crenates)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Osmosis", statement: "Concentrated solution has low water concentration → water leaves cell." },
            ],
            steps: [
              { reasoning: "Salt solution has lower water concentration than cell → water diffuses out → cell shrinks.", working: "\\text{water out}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "\\text{crenation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water leaves; cell shrinks (crenates)",
            commonErrors: ["Confusing with hypotonic (dilute) solution."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Root hair cells absorb mineral ions from soil where the ion concentration is often lower than inside the cell. How is this possible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By osmosis" },
              { id: "b", text: "By active transport using ATP and carrier proteins" },
              { id: "c", text: "By diffusion down the gradient" },
              { id: "d", text: "It is not possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Active transport", statement: "Movement against gradient requires energy and carrier proteins." },
            ],
            steps: [
              { reasoning: "Ions move against concentration gradient → active transport needed.", working: "\\text{against gradient}", marks: 1, markCode: "M" },
              { reasoning: "ATP provides energy; carrier proteins transport ions.", working: "ATP+\\text{carrier}", marks: 1, markCode: "M" },
              { reasoning: "State the mechanism.", working: "\\text{active transport}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active transport",
            commonErrors: ["Saying diffusion can move against gradient."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A plant cell is placed in distilled water, then transferred to concentrated sucrose solution.",
          parts: [
            { label: "a", prompt: "Describe what happens in distilled water.", marks: 2 },
            { label: "b", prompt: "Describe what happens in sucrose solution.", marks: 2 },
            { label: "c", prompt: "Name the process in each case.", marks: 1 },
            { label: "d", prompt: "Explain why the plant cell doesn't burst in distilled water but an animal cell would.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Osmosis in plant cells", statement: "Water moves toward lower water concentration; cell wall prevents bursting." },
            ],
            steps: [
              { part: "a", reasoning: "Water enters by osmosis → vacuole swells → cell becomes turgid; wall prevents bursting.", working: "\\text{turgid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "\\text{turgid}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water leaves by osmosis → vacuole shrinks → cytoplasm pulls away from wall = plasmolysis.", working: "\\text{plasmolysed}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "\\text{plasmolysis}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both are osmosis.", working: "\\text{osmosis}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cell wall is rigid and resists pressure; animal cells lack wall → membrane bursts (lysis).", working: "\\text{cell wall}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explain turgor vs lysis.", working: "\\text{wall prevents burst}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State conclusion.", working: "\\text{animal cell lyses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) turgid (b) plasmolysed (c) osmosis (d) cell wall prevents bursting",
            commonErrors: ["In (b), saying cell 'bursts' — plant cells plasmolyse instead."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u1-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process requires ATP and carrier proteins to move substances?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Osmosis" },
              { id: "b", text: "Diffusion" },
              { id: "c", text: "Active transport" },
              { id: "d", text: "Facilitated diffusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active transport", statement: "Movement against the concentration gradient using ATP and carrier proteins." },
            ],
            steps: [
              { reasoning: "Only active transport needs energy and carrier proteins.", working: "\\text{active transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Active transport",
            commonErrors: ["Confusing with facilitated diffusion which needs no ATP."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypb4-u1-trans-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant cell is placed in distilled water. What happens to it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water leaves; cell becomes plasmolysed" },
              { id: "b", text: "Cell bursts immediately" },
              { id: "c", text: "Water enters; cell becomes turgid but does not burst" },
              { id: "d", text: "Nothing changes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Osmosis in plants", statement: "Distilled water = highest water concentration → water enters → turgid; cell wall prevents bursting." },
            ],
            steps: [
              { reasoning: "Water enters by osmosis down the water concentration gradient.", working: "\\text{water in}", marks: 1, markCode: "M" },
              { reasoning: "Cell wall resists pressure → turgid, not burst.", working: "\\text{turgid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters; cell becomes turgid",
            commonErrors: ["Saying it bursts — plant cell wall prevents lysis."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "At the alveoli, oxygen moves from inhaled air into the blood and carbon dioxide moves from blood into the air. Explain why this happens without any energy input.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active transport pumps them across" },
              { id: "b", text: "Both gases diffuse down their concentration gradients across thin alveolar walls" },
              { id: "c", text: "The heart pushes them through capillaries" },
              { id: "d", text: "Osmosis draws them across" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas exchange by diffusion", statement: "O₂ high in alveoli → low in blood; CO₂ high in blood → low in alveoli." },
            ],
            steps: [
              { reasoning: "O₂ concentration higher in alveolar air than blood → diffuses in.", working: "O_2\\downarrow", marks: 1, markCode: "M" },
              { reasoning: "CO₂ higher in blood than alveolar air → diffuses out.", working: "CO_2\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Diffusion needs no energy — down concentration gradients.", working: "\\text{diffusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diffusion down concentration gradients",
            commonErrors: ["Mentioning active transport — gas exchange is passive."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Consider the three transport processes: diffusion, osmosis, active transport. (a) How many of them require ATP? (b) How many move substances DOWN a concentration gradient?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transport comparison", statement: "Diffusion and osmosis are passive (down gradient, no ATP); active transport uses ATP against gradient." },
            ],
            steps: [
              { reasoning: "Only active transport requires ATP = 1.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Diffusion and osmosis move down gradient = 2.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 1, b) 2",
            commonErrors: ["Counting osmosis as requiring ATP."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cell placed in distilled water gains 0.2 g of water per minute by osmosis. (a) How much water does it gain in 15 minutes? (b) If its initial mass was 2.5 g, what is its final mass? (c) What is the percentage increase in mass?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 5.5 },
              { label: "c", answer: 120 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage increase = (change / original) x 100." },
            ],
            steps: [
              { reasoning: "Water gained $= 0.2 \\times 15 = 3$ g.", working: "0.2\\times15=3", marks: 1, markCode: "M" },
              { reasoning: "Final mass $= 2.5 + 3 = 5.5$ g.", working: "2.5+3=5.5", marks: 1, markCode: "M" },
              { reasoning: "Increase $= \\frac{3}{2.5} \\times 100 = 120\\%$.", working: "120\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3 g, b) 5.5 g, c) 120%",
            commonErrors: ["Using final mass instead of initial mass in the percentage."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cell membrane performs 200 transport events per minute. 30% of these are active transport. (a) How many active transport events occur per minute? (b) How many passive events occur per minute? (c) If each active event uses 1 ATP, how many ATP are needed per minute? (d) What percentage of events are passive?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 140 },
              { label: "c", answer: 60 },
              { label: "d", answer: 70 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage calculations", statement: "Part = percentage / 100 x total; passive = 100 - active %." },
            ],
            steps: [
              { reasoning: "Active events $= 0.30 \\times 200 = 60$.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Passive $= 200 - 60 = 140$.", working: "140", marks: 1, markCode: "M" },
              { reasoning: "ATP needed $= 60 \\times 1 = 60$ per minute.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Passive percentage $= \\frac{140}{200} \\times 100 = 70\\%$.", working: "70\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 60, b) 140, c) 60 ATP, d) 70%",
            commonErrors: ["In (d), answering 30% — that is the active percentage."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many of these substances cross the cell membrane by osmosis: water, glucose, oxygen, salt ions?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmosis", statement: "Osmosis is the diffusion of WATER only across a partially permeable membrane." },
            ],
            steps: [
              { reasoning: "Only water moves by osmosis; other substances diffuse or use transport proteins.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1 (water only)",
            commonErrors: ["Counting glucose or ions — osmosis is water-specific."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u1-trans-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A potato cylinder loses 0.8 g in concentrated sucrose solution and gains 0.6 g when placed in distilled water. (a) What is the net mass change across both experiments? (b) What is the total absolute mass change (ignoring direction)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -0.2 },
              { label: "b", answer: 1.4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Net vs absolute change", statement: "Net = sum with signs; absolute = sum of magnitudes." },
            ],
            steps: [
              { reasoning: "Net $= -0.8 + 0.6 = -0.2$ g.", working: "-0.8+0.6=-0.2", marks: 1, markCode: "M" },
              { reasoning: "Absolute $= 0.8 + 0.6 = 1.4$ g.", working: "0.8+0.6=1.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) -0.2 g, b) 1.4 g",
            commonErrors: ["Answering 0.2 for (a) — direction matters (net loss)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The rate of diffusion of a substance doubles for every 10°C rise in temperature. At 10°C the rate is 5 units per minute. (a) What is the rate at 20°C? (b) What is the rate at 30°C? (c) If the trend continued, what would the rate be at 40°C?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 20 },
              { label: "c", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Doubling rate", statement: "Each +10°C doubles the rate: $r = 5 \\times 2^{(T-10)/10}$." },
            ],
            steps: [
              { reasoning: "At 20°C: $5 \\times 2 = 10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "At 30°C: $10 \\times 2 = 20$.", working: "20", marks: 1, markCode: "M" },
              { reasoning: "At 40°C: $20 \\times 2 = 40$.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 10, b) 20, c) 40 units/min",
            commonErrors: ["Adding 5 per step instead of doubling."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-trans-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Distinguish between diffusion, osmosis and active transport.",
          parts: [
            { label: "a", prompt: "Define diffusion.", marks: 1 },
            { label: "b", prompt: "Define osmosis.", marks: 1 },
            { label: "c", prompt: "Define active transport.", marks: 1 },
            { label: "d", prompt: "State which process requires energy.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transport definitions", statement: "Diffusion = particles down gradient; osmosis = water diffusion; active = against gradient with ATP." },
            ],
            steps: [
              { part: "a", reasoning: "Net movement of particles high → low concentration.", working: "\\text{high to low}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Diffusion of water across partially permeable membrane.", working: "\\text{water}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Movement against gradient using ATP + carrier proteins.", working: "\\text{ATP}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Active transport only.", working: "\\text{active}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Diffusion: particles down gradient; osmosis: water across membrane; active: against gradient + ATP",
            commonErrors: ["Defining osmosis as any solute movement."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-trans-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A plant cell is placed successively in distilled water, then in a concentrated sucrose solution.",
          parts: [
            { label: "a", prompt: "Describe what happens in distilled water.", marks: 2 },
            { label: "b", prompt: "Describe what happens in sucrose solution.", marks: 2 },
            { label: "c", prompt: "Name the process occurring in both cases.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Osmosis outcomes", statement: "Water moves toward lower water concentration; cell wall determines turgor vs plasmolysis." },
            ],
            steps: [
              { part: "a", reasoning: "Water enters → vacuole swells → cell turgid; wall prevents bursting.", working: "\\text{turgid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State result.", working: "\\text{turgor}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water leaves → vacuole shrinks → cytoplasm pulls from wall = plasmolysis.", working: "\\text{plasmolysis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State result.", working: "\\text{plasmolysed}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both are osmosis — water diffusion across partially permeable membrane.", working: "\\text{osmosis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Name and define.", working: "\\text{water diffusion}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) turgid (b) plasmolysed (c) osmosis",
            commonErrors: ["Saying the cell bursts in distilled water."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-trans-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A marine alga is placed in fresh water. Predict what happens and explain the mechanism.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water enters by osmosis; alga swells — cell wall prevents bursting" },
              { id: "b", text: "Salt enters by active transport; alga shrivels" },
              { id: "c", text: "Oxygen leaves by diffusion; alga dies" },
              { id: "d", text: "Nothing happens — membranes are impermeable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Osmosis across tonicity", statement: "Fresh water has higher water concentration than cell sap → water enters." },
            ],
            steps: [
              { reasoning: "Fresh water = hypotonic → water enters by osmosis.", working: "\\text{water in}", marks: 1, markCode: "M" },
              { reasoning: "Cell wall resists pressure → turgid, does not burst.", working: "\\text{wall}", marks: 1, markCode: "M" },
              { reasoning: "State prediction.", working: "\\text{swells/turgid}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water enters; alga becomes turgid",
            commonErrors: ["Predicting bursting — plant/algal cell walls prevent lysis."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u1-enzymes",
      title: "Enzymes",
      skill: "Explain enzyme action, the lock-and-key model, and factors affecting enzyme activity.",
      lesson: {
        sections: [
          {
            heading: "How enzymes work",
            body: "Enzymes are protein catalysts that lower **activation energy** — the energy needed to start a reaction. The **lock-and-key** model: substrate fits the active site like a key in a lock; enzyme-substrate complex forms, reaction occurs, products released, enzyme unchanged and reusable.",
          },
          {
            heading: "Factors affecting activity",
            body: "**Temperature**: rate increases up to optimum (~37°C for human enzymes), then denatures. **pH**: each enzyme has optimum pH; extremes denature. **Substrate concentration**: rate increases until all active sites saturated (Vmax).",
          },
          {
            heading: "Specificity and regulation",
            body: "Each enzyme is specific to its substrate(s). Cells regulate enzyme activity via inhibitors, cofactors, and feedback mechanisms — e.g. end-product inhibition in metabolic pathways.",
          },
        ],
        keyFormulas: [
          { name: "Catalyst", statement: "Lowers activation energy; unchanged after reaction" },
          { name: "Optimum", statement: "Peak activity at specific temperature and pH" },
          { name: "Denaturation", statement: "Shape change destroys active site" },
        ],
        workedExample: {
          problem: "Why does amylase in saliva work best near pH 7 but pepsin in stomach needs pH 2?",
          solution: "Each enzyme evolved for its environment; pepsin's active site shape only fits substrate at low pH.",
        },
      },
      questions: [
        {
          id: "mypb4-u1-enz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A protein that catalyses biological reactions" },
              { id: "b", text: "A lipid that forms membranes" },
              { id: "c", text: "A carbohydrate that stores energy" },
              { id: "d", text: "A nucleic acid that carries genetic info" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enzyme", statement: "Protein catalyst lowering activation energy." },
            ],
            steps: [
              { reasoning: "Enzymes are proteins that speed up reactions.", working: "\\text{protein catalyst}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Protein catalyst",
            commonErrors: ["Thinking enzymes are used up in reactions."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u1-enz-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to an enzyme when temperature exceeds its optimum?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "It stops temporarily then resumes" },
              { id: "c", text: "It works faster" },
              { id: "d", text: "It denatures — active site shape changes permanently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Denaturation", statement: "High temperature breaks bonds maintaining 3D shape → permanent loss of function." },
            ],
            steps: [
              { reasoning: "Excess heat disrupts bonds → active site deforms → denaturation.", working: "\\text{denaturation}", marks: 1, markCode: "M" },
              { reasoning: "State the effect.", working: "\\text{permanent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Denatures — permanent loss of function",
            commonErrors: ["Thinking enzyme just slows down temporarily."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why increasing substrate concentration initially increases reaction rate but eventually plateaus.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enzyme runs out of energy" },
              { id: "b", text: "More substrate molecules collide with free active sites; eventually all active sites are occupied (saturated)" },
              { id: "c", text: "Substrate inhibits the enzyme" },
              { id: "d", text: "Temperature increases automatically" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enzyme kinetics", statement: "Rate limited by available active sites; saturation at Vmax." },
            ],
            steps: [
              { reasoning: "More substrate → more collisions with active sites → faster rate.", working: "\\text{more collisions}", marks: 1, markCode: "M" },
              { reasoning: "Eventually every active site occupied → rate constant = Vmax.", working: "\\text{saturation}", marks: 1, markCode: "M" },
              { reasoning: "State the explanation.", working: "\\text{active site saturation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active site saturation",
            commonErrors: ["Saying enzyme is 'used up'."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Catalase breaks down hydrogen peroxide into water and oxygen.",
          parts: [
            { label: "a", prompt: "Write the word equation for this reaction.", marks: 1 },
            { label: "b", prompt: "Explain how catalase lowers activation energy.", marks: 2 },
            { label: "c", prompt: "Predict the effect of doubling catalase concentration on initial rate (substrate in excess).", marks: 2 },
            { label: "d", prompt: "Liver cells contain many peroxisomes rich in catalase. Explain why this is advantageous.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enzyme action", statement: "Catalase provides alternative pathway with lower activation energy." },
            ],
            steps: [
              { part: "a", reasoning: "Hydrogen peroxide → water + oxygen.", working: "H_2O_2\\to H_2O+O_2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Active site binds H₂O₂, strains bonds, stabilises transition state → less energy needed.", working: "\\text{transition state}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain mechanism.", working: "\\text{lower Ea}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Doubling enzyme doubles available active sites → roughly doubles initial rate (if substrate saturating).", working: "\\text{rate doubles}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State effect.", working: "2\\times", marks: 1, markCode: "A" },
              { part: "d", reasoning: "H₂O₂ is toxic byproduct of metabolism; catalase rapidly destroys it preventing cell damage.", working: "\\text{detoxifies}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Link to peroxisome function.", working: "\\text{H\\_2O\\_2 removal}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State advantage.", working: "\\text{protects cells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) H₂O₂ → H₂O + O₂ (b) lowers activation energy (c) rate roughly doubles (d) detoxifies H₂O₂",
            commonErrors: ["In (c), thinking rate always doubles — only true when substrate saturates enzyme."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u1-enz-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do enzymes lower in a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Activation energy" },
              { id: "c", text: "Substrate concentration" },
              { id: "d", text: "pH" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enzyme action", statement: "Enzymes are catalysts that lower activation energy so reactions proceed faster." },
            ],
            steps: [
              { reasoning: "Enzymes reduce the energy needed to start a reaction.", working: "E_a", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Activation energy",
            commonErrors: ["Thinking enzymes are consumed or change the products."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u1-enz-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the lock-and-key model, what fits into the enzyme's active site?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any molecule" },
              { id: "b", text: "The substrate" },
              { id: "c", text: "A coenzyme only" },
              { id: "d", text: "The product" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lock-and-key", statement: "Substrate shape is complementary to the active site; forms enzyme-substrate complex." },
            ],
            steps: [
              { reasoning: "The substrate binds the active site like a key in a lock.", working: "\\text{substrate}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{active site}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The substrate",
            commonErrors: ["Thinking products bind the active site."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Pepsin in the stomach works best at pH 2, while amylase in saliva works best near pH 7. Explain why each enzyme has a different optimum pH.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All enzymes share the same optimum" },
              { id: "b", text: "Enzymes change their substrate depending on pH" },
              { id: "c", text: "Each enzyme's active site shape is maintained only within a narrow pH range matching its environment" },
              { id: "d", text: "pH determines which enzyme is produced" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH optimum", statement: "Extreme pH denatures enzymes; optimum pH matches the enzyme's environment." },
            ],
            steps: [
              { reasoning: "Pepsin evolved for acidic stomach — active site stable at pH 2.", working: "\\text{pH 2}", marks: 1, markCode: "M" },
              { reasoning: "Amylase evolved for near-neutral mouth — optimum ~pH 7.", working: "\\text{pH 7}", marks: 1, markCode: "M" },
              { reasoning: "Wrong pH → denaturation → loss of function.", working: "\\text{denaturation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each enzyme is adapted to its environment's pH",
            commonErrors: ["Saying enzymes work at any pH."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Enzyme activity is affected by three main factors. (a) Name how many of these factors: temperature, pH, substrate concentration, light colour? (b) What is the approximate optimum temperature for human enzymes in °C?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 37 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Factors affecting enzymes", statement: "Temperature, pH and substrate concentration; human enzymes optimum ~37°C." },
            ],
            steps: [
              { reasoning: "Temperature, pH and substrate concentration = 3 factors (light colour is not one).", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Human body temperature ~37°C.", working: "37", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 37°C",
            commonErrors: ["Counting light colour as a factor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An enzyme's reaction rate doubles for every 10°C rise up to its optimum. At 20°C the rate is 4 units per minute. (a) What is the rate at 30°C? (b) What is the rate at 40°C? (c) If the optimum is 40°C, by what factor has the rate increased from 20°C?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 16 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate doubling", statement: "Rate doubles per 10°C: $r = 4 \\times 2^{(T-20)/10}$ up to optimum." },
            ],
            steps: [
              { reasoning: "At 30°C: $4 \\times 2 = 8$.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "At 40°C: $8 \\times 2 = 16$.", working: "16", marks: 1, markCode: "M" },
              { reasoning: "Factor $= 16 / 4 = 4$.", working: "16/4=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 8, b) 16, c) 4-fold",
            commonErrors: ["Ignoring that doubling stops at optimum."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An enzyme solution contains 500 active sites. Each active site can catalyse 4 substrate molecules per second when saturated. (a) How many substrate molecules can be processed per second at saturation? (b) How many in 10 seconds? (c) If substrate supply is only 100 molecules per second, what limits the rate? (d) What is the maximum rate per active site per second?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2000 },
              { label: "b", answer: 20000 },
              { label: "c", answer: 100 },
              { label: "d", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Enzyme rate", statement: "Max rate = active sites x turnover per site; limited by substrate when in short supply." },
            ],
            steps: [
              { reasoning: "Max rate $= 500 \\times 4 = 2000$ per second.", working: "500\\times4=2000", marks: 1, markCode: "M" },
              { reasoning: "In 10 s: $2000 \\times 10 = 20000$.", working: "20000", marks: 1, markCode: "M" },
              { reasoning: "Substrate supply (100/s) becomes limiting — rate cannot exceed supply.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Per site: 4 molecules per second.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2000, b) 20000, c) substrate supply limits at 100/s, d) 4",
            commonErrors: ["Assuming rate stays 2000/s when only 100 substrate/s available."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Catalase breaks down hydrogen peroxide. How many products does this reaction produce?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Catalase reaction", statement: "Hydrogen peroxide → water + oxygen (2 products)." },
            ],
            steps: [
              { reasoning: "H₂O₂ → H₂O + O₂ — water and oxygen = 2 products.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 (water and oxygen)",
            commonErrors: ["Counting ATP or energy as a product."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u1-enz-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Amylase works best near pH 7 and pepsin works best near pH 2. (a) What is the difference between their optimum pH values? (b) What is the midpoint pH between the two optima?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Optimum pH", statement: "Each enzyme has an optimum pH where activity peaks." },
            ],
            steps: [
              { reasoning: "Difference $= 7 - 2 = 5$ pH units.", working: "7-2=5", marks: 1, markCode: "M" },
              { reasoning: "Midpoint $= \\frac{7 + 2}{2} = 4.5$.", working: "4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 5, b) 4.5",
            commonErrors: ["Subtracting incorrectly in (a) or averaging wrongly in (b)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Doubling the enzyme concentration doubles the initial reaction rate when substrate is in excess. The initial rate is 8 units per minute. (a) What is the rate if enzyme concentration is doubled? (b) What is the rate if enzyme concentration is quadrupled? (c) What is the rate if enzyme concentration is halved?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 32 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Enzyme concentration", statement: "Rate proportional to enzyme concentration when substrate saturates active sites." },
            ],
            steps: [
              { reasoning: "Doubled: $8 \\times 2 = 16$.", working: "16", marks: 1, markCode: "M" },
              { reasoning: "Quadrupled: $8 \\times 4 = 32$.", working: "32", marks: 1, markCode: "M" },
              { reasoning: "Halved: $8 \\times 0.5 = 4$.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 16, b) 32, c) 4 units/min",
            commonErrors: ["Assuming rate always doubles regardless of substrate availability."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u1-enz-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following enzyme terms.",
          parts: [
            { label: "a", prompt: "Enzyme", marks: 1 },
            { label: "b", prompt: "Active site", marks: 1 },
            { label: "c", prompt: "Substrate", marks: 1 },
            { label: "d", prompt: "Catalyst", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enzyme terminology", statement: "Enzyme = protein catalyst; active site = binding region; substrate = reactant; catalyst = speeds reaction unchanged." },
            ],
            steps: [
              { part: "a", reasoning: "Protein that catalyses biological reactions.", working: "\\text{protein catalyst}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Region where substrate binds.", working: "\\text{binding site}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The molecule the enzyme acts on.", working: "\\text{reactant}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substance speeding reaction without being consumed.", working: "\\text{unchanged}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Enzyme=protein catalyst; active site=binding region; substrate=reactant; catalyst=speeds reaction unchanged",
            commonErrors: ["Defining substrate as the product."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-enz-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain how temperature, pH and substrate concentration each affect enzyme activity.",
          parts: [
            { label: "a", prompt: "Temperature", marks: 2 },
            { label: "b", prompt: "pH", marks: 2 },
            { label: "c", prompt: "Substrate concentration", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factors affecting enzymes", statement: "Each factor shifts activity away from optimum; denaturation at extremes." },
            ],
            steps: [
              { part: "a", reasoning: "Rate rises to optimum (~37°C) as kinetic energy increases collisions.", working: "\\text{optimum}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Above optimum, bonds break → denaturation → activity falls permanently.", working: "\\text{denature}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each enzyme has optimum pH; deviations distort active site.", working: "\\text{optimum pH}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Extreme pH denatures enzyme permanently.", working: "\\text{denaturation}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate rises as more substrate collides with free active sites.", working: "\\text{collisions}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Plateaus at Vmax when all active sites saturated.", working: "\\text{Vmax}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temp: rises to optimum then denatures; pH: optimum then denatures; substrate: rises to saturation plateau",
            commonErrors: ["Saying rate rises forever with substrate concentration."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypb4-u1-enz-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An enzyme is boiled for 10 minutes and then cooled to its optimum temperature. Predict its activity and explain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activity permanently lost — high temperature denatured the enzyme by changing its active site shape" },
              { id: "b", text: "Activity halved but reversible" },
              { id: "c", text: "Activity fully restored once cooled" },
              { id: "d", text: "Activity increases because heat activates enzymes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Denaturation", statement: "High temperature permanently disrupts the bonds maintaining 3D shape — cooling cannot refold the enzyme." },
            ],
            steps: [
              { reasoning: "Boiling breaks bonds maintaining tertiary structure.", working: "\\text{bonds break}", marks: 1, markCode: "M" },
              { reasoning: "Active site deforms permanently = denaturation.", working: "\\text{denatured}", marks: 1, markCode: "M" },
              { reasoning: "Cooling does not restore shape → activity lost.", working: "\\text{permanent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Activity permanently lost (denaturation)",
            commonErrors: ["Thinking cooling reverses denaturation."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
