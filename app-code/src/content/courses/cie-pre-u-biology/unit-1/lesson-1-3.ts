import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipub-u1-lesson-1-3",
  code: "1-3",
  title: "Enzymes and Energy Transfer",
  goal: "I CAN explain enzyme action, aerobic respiration and photosynthesis at Pre-U standard.",
  standards: ["Cambridge Pre-U Biology 9769", "Enzymes and energy"],
  vocabulary: [
    { term: "Activation energy", definition: "Minimum energy needed for a reaction to proceed — lowered by enzymes." },
    { term: "Active site", definition: "Region of an enzyme where substrate binds — shape specificity." },
    { term: "Denaturation", definition: "Permanent loss of enzyme shape/function due to extreme pH or temperature." },
    { term: "Aerobic respiration", definition: "Complete oxidation of glucose to CO₂ and H₂O releasing ~36 ATP." },
    { term: "Photosynthesis", definition: "Conversion of light energy to chemical energy in glucose — 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂." },
    { term: "Calvin cycle", definition: "Light-independent reactions fixing CO₂ into organic molecules using ATP and NADPH." },
  ],
  concepts: [
    {
      id: "cipub-u1-s1-enzymes",
      title: "Enzymes and energy transfer",
      skill: "Explain enzyme kinetics, aerobic respiration stages and photosynthesis light/dark reactions.",
      lesson: {
        sections: [
          {
            heading: "Enzyme action",
            body: "Enzymes are globular proteins that lower activation energy — they do NOT change ΔG or equilibrium, only speed. **Lock-and-key** vs **induced fit** models describe substrate binding at the active site. Factors affecting rate: temperature (optimum ~37°C for human enzymes; denatures above), pH (each enzyme has an optimum — pepsin ~2, trypsin ~8), substrate concentration (saturates at Vmax when all active sites occupied), enzyme concentration (linear until limiting). Inhibitors: competitive (compete for active site, reversible) vs non-competitive (bind elsewhere, change shape).",
          },
          {
            heading: "Aerobic respiration",
            body: "**Glycolysis** (cytoplasm): glucose → 2 pyruvate, net 2 ATP + 2 NADH. **Link reaction** (mitochondrial matrix): pyruvate → acetyl-CoA + CO₂ + NADH. **Krebs cycle** (matrix): acetyl-CoA oxidised → 2 CO₂, 1 ATP, 3 NADH, 1 FADH₂ per turn (×2). **Oxidative phosphorylation** (inner membrane): NADH/FADH₂ donate electrons to electron transport chain → H⁺ pumped into intermembrane space → chemiosmosis drives ATP synthase → ~34 ATP. Total ~36-38 ATP per glucose. Anaerobic: lactate in animals, ethanol+CO₂ in yeast — only 2 ATP.",
          },
          {
            heading: "Photosynthesis",
            body: "**Light-dependent reactions** (thylakoid membranes): chlorophyll absorbs light → photolysis of water → O₂ released; ATP and NADPH produced via photophosphorylation and NADP⁺ reduction. **Calvin cycle** (stroma): CO₂ fixed by RuBP (RuBisCO) → glycerate-3-phosphate → reduced to triose phosphate using ATP+NADPH → glucose precursors. Limiting factors: light intensity, CO₂ concentration, temperature. Compensation point: photosynthesis = respiration rate.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement: "$6CO_2 + 6H_2O \\xrightarrow{light} C_6H_{12}O_6 + 6O_2$",
          },
          {
            name: "Respiration",
            statement: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\sim 36\\ ATP$",
          },
        ],
        workedExample: {
          problem: "Explain why the rate of an enzyme-catalysed reaction plateaus at high substrate concentration.",
          solution:
            "At high [S], all active sites are occupied — the enzyme is saturated (Vmax). Adding more substrate cannot increase rate; only more enzyme would.",
        },
      },
      questions: [
        {
          id: "cipub-u1-enz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an enzyme lower in a chemical reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free energy change ΔG" },
              { id: "b", text: "Activation energy" },
              { id: "c", text: "Equilibrium constant" },
              { id: "d", text: "Product concentration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Activation energy",
                statement: "Minimum energy to start a reaction — enzymes lower it without changing ΔG or equilibrium.",
              },
            ],
            steps: [{ reasoning: "Enzymes lower activation energy only.", marks: 1, markCode: "A" }],
            finalAnswer: "Activation energy",
          },
        },
        {
          id: "cipub-u1-enz-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the net ATP yield of glycolysis and where it occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycolysis",
                statement: "Cytoplasm; glucose → 2 pyruvate; net 2 ATP + 2 NADH.",
              },
            ],
            steps: [
              {
                reasoning: "Occurs in cytoplasm, net yield 2 ATP per glucose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also produces 2 NADH and 2 pyruvate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 ATP net, cytoplasm, 2 pyruvate + 2 NADH.",
          },
        },
        {
          id: "cipub-u1-enz-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why photosynthesis rate decreases above the optimum temperature even though light and CO₂ remain constant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Enzyme denaturation",
                statement: "Above optimum temperature, enzyme active sites lose shape — rate falls.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis depends on enzymes (RuBisCO, Calvin cycle enzymes).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High temperature denatures enzymes — active site shape lost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate decreases despite constant light/CO₂ because enzyme activity is limiting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Enzyme denaturation above optimum temperature.",
          },
        },
        {
          id: "cipub-u1-enz-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the light-dependent reactions and the Calvin cycle in photosynthesis: location, inputs, outputs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis stages",
                statement: "Light reactions on thylakoids produce ATP/NADPH/O₂; Calvin cycle in stroma fixes CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Light-dependent: thylakoid membranes; inputs light + H₂O; outputs O₂, ATP, NADPH.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calvin cycle: stroma; inputs CO₂, ATP, NADPH; outputs glucose precursors (triose phosphate).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Light reactions require light directly; Calvin cycle uses the products but not light directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Comparison complete — both stages needed for net photosynthesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Thylakoid vs stroma; O₂/ATP/NADPH vs CO₂ fixation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipub-u1-enzymes-notes",
      title: "Enzymes and energy — revision notes",
      summary: "Enzyme kinetics, respiration stages, photosynthesis stages.",
      sections: [
        {
          heading: "Key skills",
          body: "For enzyme graphs, identify which factor is limiting at each region. For respiration, know the location and yield of each stage — oxidative phosphorylation makes most ATP.",
        },
        {
          heading: "Exam tips",
          body: "Enzymes lower activation energy ONLY — never say they change ΔG or equilibrium. For photosynthesis, separate light-dependent (thylakoid) from Calvin cycle (stroma) clearly.",
        },
      ],
    },
  ],
};
