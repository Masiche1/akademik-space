import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ebi10-u4-lesson-4-2",
  code: "4-2",
  title: "Biology Practical Skills II: Enzymes and Ecology",
  goal: "I CAN investigate enzyme activity and carry out ecological sampling.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Quadrat",
      definition: "Square frame for sampling species in a defined area.",
    },
    {
      term: "Transect",
      definition: "Line along which samples are taken systematically.",
    },
    {
      term: "Biodiversity",
      definition:
        "Variety of species in an area — measured by Simpson's index.",
    },
    {
      term: "Rate of reaction",
      definition: "How quickly product forms — e.g., time for colour change.",
    },
  ],
  concepts: [
    {
      id: "ebi10-u4-enzyme-exp",
      title: "Investigating Enzyme Activity",
      skill:
        "Design and carry out experiments on factors affecting enzyme activity.",
      lesson: {
        sections: [
          {
            heading: "Enzyme experiments",
            body: "**Variables**: independent (temperature, pH, substrate concentration), dependent (rate — time for colour change/disappearance of cross), controls (enzyme volume, substrate amount, pH if not testing it).\n\n**Methods**: amylase + starch (iodine test timing — when starch gone), catalase + H₂O₂ (gas syringe volume vs time), lipase + milk (colour change). **Temperature**: water bath at set temps, measure rate at each. **pH**: buffer solutions at different pH.",
          },
          {
            heading: "Data handling",
            body: "Record time for reaction at each condition → calculate rate = 1/time. Plot rate vs temperature/pH — expect optimum curve. **Errors**: temperature drift, timing consistency (same person or light gate), substrate freshness.\n\n**Interpretation**: low rate at extremes (denaturation), peak at optimum. Compare to human body conditions (~37°C, pH ~7).",
          },
        ],
        keyFormulas: [
          {
            name: "Rate",
            statement: "rate = 1 ÷ time (or volume ÷ time for gas).",
          },
          {
            name: "Enzyme optimum",
            statement: "Rate peaks at optimum temp/pH; extremes denature.",
          },
        ],
        workedExample: {
          problem:
            "Amylase test: starch gone at 60s (40°C), 30s (37°C), 120s (20°C). Rates?",
          solution:
            "1/60, 1/30, 1/120 = 0.017, 0.033, 0.008 s⁻¹ — fastest at 37°C.",
        },
      },
      questions: [
        {
          id: "ebi10-u4-enzyme-exp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an amylase-starch experiment, how is rate measured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time for starch to disappear" },
              { id: "b", text: "Temperature change" },
              { id: "c", text: "Volume of gas" },
              { id: "d", text: "Mass of product" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Enzyme rate",
                statement: "Time for substrate disappearance = rate measure.",
              },
            ],
            steps: [
              {
                reasoning: "Time for starch gone measures rate.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Time for starch to disappear",
            commonErrors: ["Gas confused — that's catalase."],
          },
        },
        {
          id: "ebi10-u4-enzyme-exp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a water bath used for temperature experiments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water bath",
                statement: "Maintains constant temperature — prevents drift.",
              },
            ],
            steps: [
              {
                reasoning: "Holds temperature constant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents temperature drift during experiment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ensures fair comparison across temps.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Maintains constant temperature — prevents drift and ensures fair test.",
            commonErrors: ["Heats only.", "No constancy link."],
          },
        },
        {
          id: "ebi10-u4-enzyme-exp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why enzyme rate drops at very high temperatures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Denaturation",
                statement:
                  "Heat breaks bonds holding enzyme shape — active site deforms.",
              },
            ],
            steps: [
              {
                reasoning: "Heat disrupts bonds in enzyme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Active site shape changes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Substrate can't bind — reaction stops.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Permanent — cooling doesn't restore.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "High temp denatures enzyme — active site deforms, substrate can't bind; permanent.",
            commonErrors: ["Rate just slows.", "No denaturation."],
          },
        },
        {
          id: "ebi10-u4-enzyme-exp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an experiment: effect of pH on amylase activity.",
          parts: [
            { label: "a", prompt: "State variables.", marks: 2 },
            { label: "b", prompt: "Describe method.", marks: 3 },
            { label: "c", prompt: "Predict expected results.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "pH experiment",
                statement:
                  "Buffer solutions at different pH; measure starch disappearance time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: pH; dependent: rate (time for starch to disappear).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Buffer solutions pH 4-9; same enzyme/substrate volumes; time with iodine tests.",
                marks: 3,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Optimum ~pH 7; lower rates at extremes (denaturation).",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Bell-shaped curve.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) pH/rate (b) buffers+same volumes+iodine timing (c) optimum ~7, bell curve",
            commonErrors: ["No buffers.", "No optimum prediction."],
          },
        },
      ],
    },
    {
      id: "ebi10-u4-ecology",
      title: "Ecological Fieldwork",
      skill: "Carry out sampling and measure biodiversity in ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Sampling methods",
            body: "**Quadrat**: 0.5m×0.5m or 1m×1m frame — place randomly (throw/numbered grid) to avoid bias. Count species inside — frequency (% quadrats containing species), density (count per m²), abundance. **Transect**: line across habitat — place quadrats at intervals (systematic sampling).\n\n**Sample size**: enough quadrats to represent habitat — minimum 10-20 for reliability. **Randomisation**: use random numbers for placement — prevents cherry-picking.",
          },
          {
            heading: "Biodiversity measurement",
            body: "**Simpson's index**: D = Σ(n/N)² where n = individuals of species, N = total. Lower D = higher biodiversity. **Species richness**: number of different species. **Evenness**: how equal abundances are.\n\n**Data presentation**: species-frequency tables, bar charts (abundance per species), comparison between sites. **Limitations**: sampling error, seasonal variation, observer bias in identification.",
          },
        ],
        keyFormulas: [
          {
            name: "Quadrat sampling",
            statement: "Random placement; count species for frequency/density.",
          },
          {
            name: "Simpson's index",
            statement: "D = Σ(n/N)² — lower = more diverse.",
          },
        ],
        workedExample: {
          problem:
            "10 quadrats: species A in 8, B in 5, C in 2. Frequency of A?",
          solution: "8/10 × 100 = 80%.",
        },
      },
      questions: [
        {
          id: "ebi10-u4-ecology-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why are quadrats placed randomly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More species" },
              { id: "b", text: "Easier counting" },
              { id: "c", text: "Faster sampling" },
              { id: "d", text: "Avoids bias" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Random sampling",
                statement:
                  "Prevents cherry-picking — represents whole habitat.",
              },
            ],
            steps: [
              {
                reasoning: "Random = unbiased sampling.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Avoids bias",
            commonErrors: ["Speed assumed."],
          },
        },
        {
          id: "ebi10-u4-ecology-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does Simpson's index measure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simpson's index",
                statement: "Biodiversity — combines richness and evenness.",
              },
            ],
            steps: [
              {
                reasoning: "Measures biodiversity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Considers species richness AND abundance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower value = higher diversity.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Biodiversity — lower index = more diverse (richness + evenness).",
            commonErrors: ["Species count only.", "Higher = better assumed."],
          },
        },
        {
          id: "ebi10-u4-ecology-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student places all quadrats in the sunnier part of a meadow. Critique this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sampling bias",
                statement: "Non-random placement → unrepresentative results.",
              },
            ],
            steps: [
              {
                reasoning: "Only sunny area sampled — biased.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shady areas may have different species.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Results don't represent whole meadow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Use random placement across whole area.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Biased sampling — only sunny area, misses shade species; use random placement.",
            commonErrors: ["No bias identified.", "Vague fix."],
          },
        },
        {
          id: "ebi10-u4-ecology-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare biodiversity between woodland and grassland using quadrats.",
          parts: [
            { label: "a", prompt: "Describe the sampling method.", marks: 3 },
            {
              label: "b",
              prompt: "Explain how to calculate and compare diversity.",
              marks: 3,
            },
            { label: "c", prompt: "State one limitation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biodiversity comparison",
                statement: "Same method both sites → fair comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Random quadrats in each habitat, count species.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(a) Same quadrat size, same number per site.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Calculate Simpson's index for each.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Lower D = more diverse; compare values.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Seasonal variation / small sample / observer bias.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) random quadrats same size/number (b) Simpson's index compare (c) season/sample/observer",
            commonErrors: ["Different methods.", "No index used."],
          },
        },
      ],
    },
  ],
};
