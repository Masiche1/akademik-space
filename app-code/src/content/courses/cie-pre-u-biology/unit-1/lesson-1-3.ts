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
              { id: "a", text: "Product concentration" },
              { id: "b", text: "Equilibrium constant" },
              { id: "c", text: "Activation energy" },
              { id: "d", text: "Free energy change ΔG" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cipub-u1-enz-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the approximate optimum temperature for most human enzymes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100 °C" },
              { id: "b", text: "25 °C" },
              { id: "c", text: "37 °C" },
              { id: "d", text: "0 °C" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Enzyme optimum temperature",
                statement: "Human enzymes work best near body temperature, about 37 °C.",
              },
            ],
            steps: [{ reasoning: "Body temperature ~37 °C is the optimum for human enzymes.", marks: 1, markCode: "A" }],
            finalAnswer: "37 °C",
          },
        },
        {
          id: "cipub-u1-enz-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Complete oxidation of one glucose molecule by aerobic respiration yields about 36 ATP. Glycolysis alone yields a net 2 ATP. How many ATP are produced by the remaining stages (link reaction, Krebs cycle and oxidative phosphorylation) combined?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 34, unit: "ATP" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Aerobic respiration yield",
                statement: "$\\sim$36 ATP per glucose; glycolysis contributes 2.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract glycolysis yield from the total: $36 - 2 = 34$.",
                working: "36 - 2 = 34\\ \\text{ATP}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "34 ATP",
          },
        },
        {
          id: "cipub-u1-enz-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A competitive inhibitor reduces the rate of an enzyme-catalysed reaction. How does it act?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It lowers the pH of the reaction mixture" },
              { id: "b", text: "It hydrolyses the substrate before it reaches the enzyme" },
              { id: "c", text: "It binds away from the active site and changes its shape" },
              { id: "d", text: "It binds to the active site, competing with the substrate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competitive inhibition",
                statement: "Inhibitor resembles substrate and blocks the active site — reversible; can be overcome by more substrate.",
              },
            ],
            steps: [{ reasoning: "Competitive inhibitors compete directly for the active site.", marks: 1, markCode: "A" }],
            finalAnswer: "(a) binds the active site, competing with substrate",
          },
        },
        {
          id: "cipub-u1-enz-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the rate of an enzyme-catalysed reaction reaches a maximum (Vmax) when substrate concentration is very high.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme saturation",
                statement: "At high [S] all active sites are occupied — rate cannot rise further without more enzyme.",
              },
            ],
            steps: [
              {
                reasoning: "As substrate concentration rises, more active sites are occupied and rate increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Eventually every active site is occupied at any instant — the enzyme is saturated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adding more substrate cannot increase the rate; only increasing enzyme concentration raises Vmax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "All active sites saturated → Vmax plateau.",
          },
        },
        {
          id: "cipub-u1-enz-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In photosynthesis, how many molecules of carbon dioxide are fixed to produce one molecule of glucose?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photosynthesis equation",
                statement: "$6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$",
              },
            ],
            steps: [
              {
                reasoning: "Glucose has six carbon atoms, so six CO₂ molecules must be fixed.",
                working: "C_6H_{12}O_6 \\Rightarrow 6\\ CO_2",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipub-u1-enz-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which part of the chloroplast does the Calvin cycle take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grana" },
              { id: "b", text: "Stroma" },
              { id: "c", text: "Inner membrane of mitochondrion" },
              { id: "d", text: "Thylakoid membrane" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Calvin cycle location",
                statement: "Light-independent reactions occur in the stroma; light-dependent reactions on thylakoid membranes.",
              },
            ],
            steps: [{ reasoning: "The Calvin cycle runs in the stroma, using ATP and NADPH from the thylakoids.", marks: 1, markCode: "A" }],
            finalAnswer: "Stroma",
          },
        },
        {
          id: "cipub-u1-enz-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the events of the light-dependent reactions of photosynthesis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light-dependent reactions",
                statement: "On thylakoid membranes: light splits water (photolysis), releasing O₂; ATP and NADPH are generated.",
              },
            ],
            steps: [
              {
                reasoning: "Chlorophyll absorbs light energy on the thylakoid membranes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Water is split by photolysis — releasing oxygen, protons and electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The energy is used to make ATP (photophosphorylation) and reduce NADP⁺ to NADPH.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Light + H₂O → O₂ + ATP + NADPH on thylakoids.",
          },
        },
        {
          id: "cipub-u1-enz-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An enzyme-catalysed reaction has a rate of 8 units at 20 °C. Assuming a Q₁₀ of 2 (the rate doubles for every 10 °C rise), what is the expected rate at 30 °C?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 16, unit: "units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Q₁₀ temperature coefficient",
                statement: "Rate doubles for each 10 °C increase within the optimum range.",
              },
            ],
            steps: [
              {
                reasoning: "One 10 °C rise doubles the rate: $8 \\times 2 = 16$.",
                working: "8 \\times 2 = 16",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "16 units",
          },
        },
        {
          id: "cipub-u1-enz-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What gas is released when water molecules are split during the light-dependent reactions of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Hydrogen" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photolysis",
                statement: "Splitting of water releases O₂, H⁺ ions and electrons.",
              },
            ],
            steps: [{ reasoning: "Photolysis of water releases oxygen gas.", marks: 1, markCode: "A" }],
            finalAnswer: "Oxygen",
          },
        },
        {
          id: "cipub-u1-enz-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare aerobic and anaerobic respiration in terms of ATP yield and end products.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Aerobic vs anaerobic respiration",
                statement: "Aerobic: ~36 ATP, CO₂ + H₂O. Anaerobic: 2 ATP, lactate or ethanol + CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Aerobic respiration fully oxidises glucose — about 36 ATP per glucose, producing CO₂ and water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anaerobic respiration stops at glycolysis — only 2 ATP net per glucose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "End products differ: lactate in animals, ethanol + CO₂ in yeast — organic molecules remain, so energy is trapped.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "~36 ATP + CO₂/H₂O vs 2 ATP + lactate or ethanol/CO₂.",
          },
        },
        {
          id: "cipub-u1-enz-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What are the products of the link reaction between glycolysis and the Krebs cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acetyl-CoA, carbon dioxide and NADH" },
              { id: "b", text: "Pyruvate and ATP" },
              { id: "c", text: "Lactate and NAD⁺" },
              { id: "d", text: "Glucose and oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Link reaction",
                statement: "Pyruvate → acetyl-CoA + CO₂ + NADH in the mitochondrial matrix.",
              },
            ],
            steps: [{ reasoning: "The link reaction produces acetyl-CoA, CO₂ and NADH from each pyruvate.", marks: 1, markCode: "A" }],
            finalAnswer: "(a) Acetyl-CoA, CO₂ and NADH",
          },
        },
        {
          id: "cipub-u1-enz-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how chemiosmosis produces most of the ATP during aerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chemiosmosis",
                statement: "Electron transport chain pumps H⁺ into the intermembrane space; ATP synthase uses the gradient to make ATP.",
              },
            ],
            steps: [
              {
                reasoning: "NADH and FADH₂ donate electrons to the electron transport chain on the inner mitochondrial membrane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy released pumps protons (H⁺) into the intermembrane space, creating a proton gradient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protons flow back through ATP synthase down their gradient — the flow drives phosphorylation of ADP to ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This oxidative phosphorylation yields about 34 ATP — the majority of the ~36 ATP total per glucose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "H⁺ gradient → ATP synthase → ~34 ATP.",
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
