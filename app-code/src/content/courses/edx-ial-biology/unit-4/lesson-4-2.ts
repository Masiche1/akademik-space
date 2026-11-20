import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edialbio-u4-lesson-4-2",
  code: "4-2",
  title: "Photosynthesis and Respiration",
  goal: "I CAN describe photosynthesis, aerobic/anaerobic respiration and their relationship.",
  standards: ["IB4 Metabolism, homeostasis and response", "Respiration"],
  vocabulary: [
    { term: "Photosynthesis", definition: "Process converting light energy to chemical energy in glucose." },
    { term: "Aerobic respiration", definition: "Glucose + oxygen → CO₂ + water + ATP (38 molecules)." },
    { term: "Anaerobic respiration", definition: "Glucose → lactic acid (animals) or ethanol + CO₂ (plants/yeast)." },
    { term: "Calvin cycle", definition: "Light-independent reactions fixing CO₂ into glucose." },
  ],
  concepts: [
    {
      id: "edialbio-u4-photosynthesis",
      title: "Photosynthesis",
      skill: "Describe light-dependent and light-independent reactions and limiting factors.",
      lesson: {
        sections: [
          {
            heading: "Light-dependent reactions",
            body: "In thylakoid membranes of chloroplasts. Chlorophyll absorbs light → splits water (photolysis) → O₂ released; generates ATP and NADPH. Occurs in photosystems II and I (Z-scheme).",
          },
          {
            heading: "Light-independent (Calvin cycle)",
            body: "In stroma. CO₂ fixed by RuBisCO onto RuBP → reduced using ATP + NADPH → glucose formed. Cycle regenerates RuBP. Net: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (overall).",
          },
          {
            heading: "Limiting factors",
            body: "Light intensity, CO₂ concentration, temperature each limit rate. At low light: more light → faster; CO₂-limited plateaus; temperature affects enzyme rate (optimum ~25-30°C). Greenhouses optimise all three.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy)" },
        ],
        workedExample: {
          problem: "Why do plants release oxygen during photosynthesis?",
          solution: "Photolysis of water in light-dependent reactions releases O₂ as byproduct — water provides electrons for the electron transport chain.",
        },
      },
      questions: [
        {
          id: "edialbio-photo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do light-dependent reactions occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stroma" },
              { id: "b", text: "Thylakoid membranes" },
              { id: "c", text: "Cytoplasm" },
              { id: "d", text: "Mitochondria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Light-dependent", statement: "Thylakoid membranes." }],
            steps: [{ reasoning: "Photosystems in thylakoids.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Thylakoid membranes",
          },
        },
        {
          id: "edialbio-photo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the products of the light-dependent reactions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Light-dependent", statement: "ATP, NADPH, O₂." }],
            steps: [
              { reasoning: "ATP produced (phosphorylation).", marks: 1, markCode: "M" },
              { reasoning: "NADPH produced (reduced NADP⁺).", marks: 1, markCode: "M" },
              { reasoning: "O₂ released from water photolysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "ATP + NADPH + O₂",
            commonErrors: ["Saying glucose is made here."],
          },
        },
        {
          id: "edialbio-photo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the effect of increasing CO₂ concentration on photosynthesis rate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Limiting factor", statement: "CO₂ is substrate for Calvin cycle." }],
            steps: [
              { reasoning: "CO₂ is fixed by RuBisCO in Calvin cycle.", marks: 1, markCode: "M" },
              { reasoning: "More CO₂ → faster carbon fixation → more glucose.", marks: 1, markCode: "M" },
              { reasoning: "Rate rises until another factor limits (light/temperature).", marks: 1, markCode: "A" },
              { reasoning: "Plateaus at saturation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More CO₂ → faster until other factor limits",
            commonErrors: ["Saying CO₂ has no effect."],
          },
        },
        {
          id: "edialbio-photo-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the light-independent reactions of photosynthesis.",
          parts: [
            { label: "a", prompt: "Location and overall purpose.", marks: 2 },
            { label: "b", prompt: "Carbon fixation.", marks: 4 },
            { label: "c", prompt: "Role of ATP and NADPH.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Calvin cycle", statement: "Fix CO₂ → glucose using ATP/NADPH." }],
            steps: [
              { part: "a", reasoning: "Occurs in stroma of chloroplast.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Converts CO₂ to organic molecules (glucose).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO₂ combines with RuBP (5C) via RuBisCO.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Forms unstable 6C compound → splits into 2×3C (GP).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "GP reduced to triose phosphate using ATP + NADPH.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Some TP → glucose; rest → regenerate RuBP.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "ATP provides energy for reduction steps.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "NADPH provides hydrogen/reducing power.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both produced in light-dependent reactions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cycle needs light products but not light itself.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Calvin cycle: CO₂ + RuBP → glucose using ATP/NADPH",
            commonErrors: ["Saying it needs light directly."],
          },
        },
      ],
    },
    {
      id: "edialbio-u4-respiration",
      title: "Aerobic and anaerobic respiration",
      skill: "Describe glycolysis, aerobic respiration stages and anaerobic pathways.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "Glycolysis (cytoplasm): glucose → 2 pyruvate, net 2 ATP + 2 NADH. Link reaction: pyruvate → acetyl-CoA + CO₂. Krebs cycle (mitochondrial matrix): produces CO₂, NADH, FADH₂, ATP. Oxidative phosphorylation (inner membrane): electron transport chain → ~34 ATP. Total ~38 ATP.",
          },
          {
            heading: "Anaerobic respiration",
            body: "When O₂ absent, glycolysis continues but pyruvate can't enter mitochondria. Animals: pyruvate → lactate (lactic acid) — regenerates NAD⁺ for glycolysis, only 2 ATP. Yeast/plants: pyruvate → ethanol + CO₂ (fermentation). Lactate causes muscle fatigue; oxygen debt repaid after exercise.",
          },
          {
            heading: "Comparison",
            body: "Aerobic: complete oxidation, ~38 ATP, needs O₂. Anaerobic: partial oxidation, 2 ATP, no O₂. Anaerobic is inefficient but allows ATP production without oxygen — crucial for short bursts of activity.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~38 ATP" },
        ],
        workedExample: {
          problem: "Why is aerobic respiration more efficient?",
          solution: "Fully oxidises glucose extracting all energy (~38 ATP vs 2 ATP anaerobic) using oxygen as final electron acceptor in oxidative phosphorylation.",
        },
      },
      questions: [
        {
          id: "edialbio-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does glycolysis occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondrial matrix" },
              { id: "b", text: "Cytoplasm" },
              { id: "c", text: "Inner mitochondrial membrane" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Glycolysis", statement: "Cytoplasm." }],
            steps: [{ reasoning: "First stage in cytoplasm.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Cytoplasm",
          },
        },
        {
          id: "edialbio-resp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the products of anaerobic respiration in animal muscle?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Anaerobic", statement: "Lactate + 2 ATP." }],
            steps: [
              { reasoning: "Pyruvate converted to lactate (lactic acid).", marks: 1, markCode: "M" },
              { reasoning: "Net 2 ATP only.", marks: 1, markCode: "A" },
              { reasoning: "NAD⁺ regenerated to continue glycolysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lactate + 2 ATP",
            commonErrors: ["Saying ethanol in animals."],
          },
        },
        {
          id: "edialbio-resp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why anaerobic respiration produces fewer ATP than aerobic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Respiration efficiency", statement: "Only glycolysis → 2 ATP vs full oxidation." }],
            steps: [
              { reasoning: "Anaerobic only glycolysis → pyruvate not fully oxidised.", marks: 1, markCode: "M" },
              { reasoning: "No Krebs cycle or oxidative phosphorylation without O₂.", marks: 1, markCode: "M" },
              { reasoning: "Only net 2 ATP vs ~38 ATP aerobic.", marks: 1, markCode: "A" },
              { reasoning: "Most energy remains in lactate/ethanol.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Only glycolysis → 2 ATP vs 38",
            commonErrors: ["Saying anaerobic doesn't use oxygen."],
          },
        },
        {
          id: "edialbio-resp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the stages of aerobic respiration.",
          parts: [
            { label: "a", prompt: "Glycolysis.", marks: 3 },
            { label: "b", prompt: "Link reaction and Krebs cycle.", marks: 4 },
            { label: "c", prompt: "Oxidative phosphorylation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Aerobic respiration", statement: "Glycolysis → Krebs → ETC." }],
            steps: [
              { part: "a", reasoning: "Glucose → 2 pyruvate in cytoplasm.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Net 2 ATP + 2 NADH produced.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Doesn't need oxygen.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pyruvate → acetyl-CoA + CO₂ (link).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acetyl-CoA enters Krebs cycle in matrix.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Produces CO₂, NADH, FADH₂, small ATP.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cycle turns twice per glucose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "NADH/FADH₂ donate electrons to ETC on inner membrane.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "O₂ is final electron acceptor → water formed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Energy pumps H⁺ → ATP synthase makes ~34 ATP.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Glycolysis→Krebs→ETC; ~38 ATP total",
            commonErrors: ["Wrong location of Krebs cycle."],
          },
        },
      ],
    },
  ],
};
