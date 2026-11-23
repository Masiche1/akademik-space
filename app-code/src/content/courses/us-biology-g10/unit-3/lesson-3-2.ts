import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "bio10-u3-lesson-3-2",
  code: "3-2",
  title: "Cellular Respiration",
  goal: "I CAN describe glycolysis, the Krebs cycle and oxidative phosphorylation, and compare aerobic and anaerobic respiration.",
  standards: ["HS-LS1-6", "HS-LS1-7"],
  vocabulary: [
    { term: "Cellular respiration", definition: "Process breaking down glucose to release energy as ATP." },
    { term: "Glycolysis", definition: "First stage breaking glucose into pyruvate in the cytoplasm." },
    { term: "Krebs cycle", definition: "Second stage in mitochondria producing NADH, FADH2 and CO2." },
    { term: "Oxidative phosphorylation", definition: "Third stage using electron transport chain to make most ATP." },
    { term: "Aerobic respiration", definition: "Respiration with oxygen; produces ~36-38 ATP per glucose." },
    { term: "Anaerobic respiration", definition: "Respiration without oxygen; produces only 2 ATP per glucose." },
    { term: "ATP", definition: "Adenosine triphosphate; the cell's energy currency." },
  ],
  concepts: [
    {
      id: "bio10-u3-aerobic-respiration",
      title: "Aerobic respiration",
      skill: "Describe the three stages of aerobic respiration and their ATP yields.",
      lesson: {
        sections: [
          {
            heading: "Overall equation",
            body: "$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{ATP (energy)}$$\n\nAerobic respiration extracts energy from glucose using oxygen. It's essentially the reverse of photosynthesis.",
          },
          {
            heading: "Three stages",
            body: "1. **Glycolysis** (cytoplasm): glucose → 2 pyruvate, net 2 ATP + 2 NADH\n2. **Krebs cycle** (mitochondrial matrix): pyruvate → CO2, produces NADH, FADH2, ATP\n3. **Oxidative phosphorylation** (inner mitochondrial membrane): NADH/FADH2 → electron transport chain → ~34 ATP via chemiosmosis",
          },
          {
            heading: "ATP yield",
            body: "Total ~36-38 ATP per glucose:\n- Glycolysis: 2 ATP\n- Krebs cycle: 2 ATP\n- Oxidative phosphorylation: ~32-34 ATP\n\nMost energy is captured in stage 3.",
          },
        ],
        keyFormulas: [
          { name: "Overall", statement: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$" },
          { name: "ATP yield", statement: "~36-38 ATP per glucose (aerobic)" },
        ],
        workedExample: {
          problem: "Where do the three stages of aerobic respiration occur?",
          solution: "Glycolysis: cytoplasm; Krebs cycle: mitochondrial matrix; oxidative phosphorylation: inner mitochondrial membrane.",
        },
      },
      questions: [
        {
          id: "bio10-u3-aerobic-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the overall equation for aerobic cellular respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$" },
              { id: "b", text: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$" },
              { id: "c", text: "$C_6H_{12}O_6 \\rightarrow 2C_2H_5OH + 2CO_2$" },
              { id: "d", text: "$6O_2 + 6CO_2 \\rightarrow C_6H_{12}O_6 + 6H_2O$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Respiration", statement: "Glucose + O2 → CO2 + H2O + ATP." }],
            steps: [{ reasoning: "Aerobic respiration breaks glucose with oxygen to release energy.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$",
            commonErrors: ["Confusing with photosynthesis."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u3-aerobic-respiration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which stage of aerobic respiration produces the most ATP?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Oxidative phosphorylation", statement: "Electron transport chain produces ~32-34 ATP." }],
            steps: [
              { reasoning: "Oxidative phosphorylation produces the most ATP (~32-34).", marks: 1, markCode: "B" },
              { reasoning: "It uses NADH and FADH2 from earlier stages to drive electron transport and chemiosmosis.", marks: 1, markCode: "R" },
              { reasoning: "Glycolysis and Krebs produce only ~4 ATP total directly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxidative phosphorylation (~32-34 ATP).",
            commonErrors: ["Thinking glycolysis produces most ATP."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio10-u3-aerobic-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why oxidative phosphorylation requires oxygen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Oxygen as final acceptor", statement: "O2 accepts electrons at end of ETC." },
              { kind: "principle", name: "Chemiosmosis", statement: "ETC pumps H+ to create gradient for ATP." },
            ],
            steps: [
              { reasoning: "Oxygen is the final electron acceptor in the electron transport chain.", marks: 1, markCode: "R" },
              { reasoning: "Without O2, electrons can't be removed from the chain.", marks: 1, markCode: "B" },
              { reasoning: "ETC stops pumping H+, gradient collapses, ATP synthesis stops.", marks: 1, markCode: "R" },
              { reasoning: "This is why anaerobic respiration only yields 2 ATP.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O2 is final electron acceptor; without it, ETC and ATP production stop.",
            commonErrors: ["Thinking O2 is a reactant in glycolysis."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "bio10-u3-aerobic-respiration-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A muscle cell is respiring aerobically during exercise.",
          parts: [
            { label: "a", prompt: "Write the overall equation.", marks: 2 },
            { label: "b", prompt: "Name the three stages and their locations.", marks: 3 },
            { label: "c", prompt: "What are the products of glycolysis?", marks: 2 },
            { label: "d", prompt: "If oxygen becomes limited during intense exercise, what happens to ATP production?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Respiration", statement: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$" },
              { kind: "principle", name: "Anaerobic fallback", statement: "Without O2, glycolysis continues but only 2 ATP." },
            ],
            steps: [
              { reasoning: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + ATP$.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Glycolysis: cytoplasm.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Krebs cycle: mitochondrial matrix.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Oxidative phosphorylation: inner mitochondrial membrane.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Glycolysis produces 2 pyruvate, 2 ATP, 2 NADH.", marks: 2, markCode: "B", part: "c" },
              { reasoning: "Oxygen limitation stops oxidative phosphorylation.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Cell switches to anaerobic respiration (fermentation) producing lactate.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "ATP production drops from ~36 to 2 per glucose, causing fatigue.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) equation (b) glycolysis/Krebs/oxphos locations (c) pyruvate+ATP+NADH (d) drops to 2 ATP via fermentation.",
            commonErrors: ["Thinking glycolysis needs oxygen."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u3-anaerobic",
      title: "Anaerobic respiration",
      skill: "Compare aerobic and anaerobic respiration and describe fermentation.",
      lesson: {
        sections: [
          {
            heading: "Anaerobic respiration",
            body: "When oxygen is unavailable, cells use **anaerobic respiration**:\n\n- Glycolysis still occurs (2 ATP per glucose)\n- Pyruvate is converted to lactate (animals) or ethanol + CO2 (yeast) instead of entering Krebs cycle\n- No oxidative phosphorylation → only 2 ATP per glucose",
          },
          {
            heading: "Fermentation types",
            body: "- **Lactic acid fermentation** (muscle cells, some bacteria): pyruvate → lactate\n- **Alcoholic fermentation** (yeast, some bacteria): pyruvate → ethanol + CO2\n\nBoth regenerate NAD+ so glycolysis can continue.",
          },
          {
            heading: "Why it matters",
            body: "Fermentation allows cells to produce ATP without oxygen — important for muscles during exercise, yeast in baking/brewing, and bacteria in anaerobic environments.",
          },
        ],
        keyFormulas: [
          { name: "Anaerobic ATP", statement: "2 ATP per glucose (vs ~36 aerobic)" },
          { name: "Fermentation", statement: "Pyruvate → lactate OR ethanol + CO2" },
        ],
        workedExample: {
          problem: "Why do muscles feel sore after intense exercise?",
          solution: "During intense exercise, oxygen demand exceeds supply. Cells switch to anaerobic respiration producing lactate. Lactate buildup contributes to muscle fatigue and soreness.",
        },
      },
      questions: [
        {
          id: "bio10-u3-anaerobic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main difference between aerobic and anaerobic respiration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anaerobic produces more ATP" },
              { id: "b", text: "Aerobic uses oxygen; anaerobic doesn't" },
              { id: "c", text: "Anaerobic occurs in mitochondria" },
              { id: "d", text: "Aerobic doesn't use glucose" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Aerobic vs anaerobic", statement: "Aerobic uses O2; anaerobic doesn't." }],
            steps: [{ reasoning: "Aerobic respiration requires oxygen; anaerobic doesn't.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Oxygen use",
            commonErrors: ["Thinking anaerobic is more efficient."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u3-anaerobic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the two types of fermentation and what organisms use them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lactic acid", statement: "Pyruvate → lactate; muscle cells, some bacteria." },
              { kind: "principle", name: "Alcoholic", statement: "Pyruvate → ethanol + CO2; yeast, some bacteria." },
            ],
            steps: [
              { reasoning: "Lactic acid fermentation: pyruvate → lactate; used by muscle cells and some bacteria.", marks: 1, markCode: "B" },
              { reasoning: "Alcoholic fermentation: pyruvate → ethanol + CO2; used by yeast.", marks: 1, markCode: "B" },
              { reasoning: "Both regenerate NAD+ to keep glycolysis running.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Lactic acid (muscle/bacteria) and alcoholic (yeast).",
            commonErrors: ["Forgetting NAD+ regeneration purpose."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u3-anaerobic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does anaerobic respiration produce so much less ATP than aerobic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "No ETC", statement: "Without O2, no oxidative phosphorylation." },
              { kind: "principle", name: "Only glycolysis", statement: "Only 2 ATP from glycolysis." },
            ],
            steps: [
              { reasoning: "Anaerobic respiration only performs glycolysis (2 ATP).", marks: 1, markCode: "B" },
              { reasoning: "Krebs cycle and oxidative phosphorylation require oxygen.", marks: 1, markCode: "R" },
              { reasoning: "No electron transport chain = no chemiosmosis = no bulk ATP.", marks: 1, markCode: "B" },
              { reasoning: "Aerobic yields ~36 ATP vs anaerobic 2 ATP — 18x difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Only glycolysis (2 ATP) vs full aerobic (~36 ATP).",
            commonErrors: ["Thinking fermentation produces ATP directly."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u3-anaerobic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Yeast is used in bread-making and brewing.",
          parts: [
            { label: "a", prompt: "What type of fermentation does yeast perform?", marks: 1 },
            { label: "b", prompt: "Write the equation for alcoholic fermentation.", marks: 3 },
            { label: "c", prompt: "Why does bread dough rise?", marks: 3 },
            { label: "d", prompt: "Why is oxygen excluded from brewing?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Alcoholic fermentation", statement: "Pyruvate → ethanol + CO2." },
              { kind: "principle", name: "Anaerobic", statement: "No O2 → fermentation instead of respiration." },
            ],
            steps: [
              { reasoning: "Yeast performs alcoholic fermentation.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "C6H12O6 → 2C2H5OH + 2CO2 (or with NAD+ regenerated).", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Answer: glucose → ethanol + CO2.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "CO2 gas produced during fermentation gets trapped in dough.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Gas bubbles expand the dough, making bread rise.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Heat during baking kills yeast and evaporates ethanol.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Oxygen would allow aerobic respiration, producing more ATP but no ethanol.", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Brewers want ethanol, so they exclude O2 to force fermentation.", marks: 1, markCode: "B", part: "d" },
              { reasoning: "Anaerobic conditions also prevent spoilage by other organisms.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) alcoholic (b) glucose→ethanol+CO2 (c) CO2 bubbles expand dough (d) O2 would prevent ethanol production.",
            commonErrors: ["Thinking yeast needs oxygen for fermentation."],
            examinerNote: "1+3+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
