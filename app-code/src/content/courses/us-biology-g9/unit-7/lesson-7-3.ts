import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "bio9-u7-lesson-7-3",
  code: "7-3",
  title: "Energy Budget and Metabolic Integration",
  goal: "I CAN calculate energy yields from food molecules and integrate respiration and photosynthesis concepts.",
  standards: [
    "HS-LS1-6",
    "HS-LS1-7",
    "HS-LS2-4",
    "CCC: Energy and Matter",
    "SEP: Mathematical and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Energy budget",
      definition: "Balance of energy intake, storage and expenditure.",
    },
    {
      term: "Basal metabolic rate",
      definition: "Energy needed for basic functions at rest.",
    },
    {
      term: "Fuel molecule",
      definition: "Carbohydrate, lipid or protein used for energy.",
    },
    {
      term: "Beta-oxidation",
      definition: "Breakdown of fatty acids to acetyl-CoA for the Krebs cycle.",
    },
    {
      term: "Gluconeogenesis",
      definition: "Synthesis of glucose from non-carbohydrate precursors.",
    },
    {
      term: "Metabolic water",
      definition: "Water produced during aerobic respiration.",
    },
  ],
  concepts: [
    {
      id: "bio9-u7-fuel-molecules",
      title: "Fuel molecules and energy yield",
      skill: "Compare energy yield from carbohydrates, fats and proteins.",
      lesson: {
        sections: [
          {
            heading: "Energy content",
            body: "Different fuel molecules yield different energy:\n\n- **Carbohydrates**: ~4 kcal/g; glucose → pyruvate enters respiration directly.\n- **Lipids**: ~9 kcal/g; broken into glycerol + fatty acids (beta-oxidation → acetyl-CoA → Krebs).\n- **Proteins**: ~4 kcal/g; deaminated → carbon skeletons enter respiration at various points.",
          },
          {
            heading: "Why fats store more energy",
            body: "Lipids are hydrophobic and highly reduced (more C–H bonds). Oxidation of C–H bonds releases more energy than C–O bonds in carbohydrates. Fats also store without water — efficient long-term energy storage.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy density",
            statement: "Carbohydrate/protein ~4 kcal/g; lipid ~9 kcal/g.",
          },
          {
            name: "Beta-oxidation",
            statement: "Fatty acids → acetyl-CoA → Krebs cycle.",
          },
          {
            name: "Storage efficiency",
            statement: "Fats store more energy per gram, no water needed.",
          },
        ],
        workedExample: {
          problem:
            "Why do organisms store energy as fat rather than carbohydrate?",
          solution:
            "Fat yields ~9 kcal/g vs ~4 for carbs, and stores without water — more efficient.",
        },
      },
      questions: [
        {
          id: "bio9-u7-fuel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fuel molecule yields the most energy per gram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbohydrate" },
              { id: "b", text: "Protein" },
              { id: "c", text: "Lipid" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy density",
                statement: "Lipids ~9 kcal/g > carbs/proteins ~4 kcal/g.",
              },
            ],
            steps: [
              {
                reasoning: "Lipids yield ~9 kcal/g — highest energy density.",
                evidence: "9 kcal/g",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Lipid.",
            commonErrors: ["Choosing (a): carbs yield less."],
          },
        },
        {
          id: "bio9-u7-fuel-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does beta-oxidation feed into cellular respiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Beta-oxidation",
                statement: "Fatty acids → acetyl-CoA → Krebs cycle.",
              },
            ],
            steps: [
              {
                reasoning: "Fatty acids are broken into 2-carbon units.",
                evidence: "2C units",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each unit forms acetyl-CoA.",
                evidence: "acetyl-CoA",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Acetyl-CoA enters Krebs cycle → NADH/FADH₂ → ETC → ATP.",
                evidence: "Krebs",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Fatty acids → acetyl-CoA → Krebs → ATP.",
            commonErrors: ["Not connecting to Krebs cycle."],
          },
        },
        {
          id: "bio9-u7-fuel-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why proteins are not ideal primary fuel sources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Protein metabolism",
                statement: "Proteins serve structural/functional roles first.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proteins have structural and functional roles (enzymes, receptors).",
                evidence: "roles",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "They must be deaminated before entering respiration.",
                evidence: "deamination",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Deamination produces toxic ammonia → must be processed (urea).",
                evidence: "ammonia",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Carbs and fats are more efficient primary fuels.",
                evidence: "efficiency",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Structural roles + deamination cost + ammonia toxicity.",
            commonErrors: ["Saying proteins can't be used for energy."],
          },
        },
        {
          id: "bio9-u7-fuel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Calculate energy from a meal: 50 g carbs, 20 g fat, 30 g protein.",
          parts: [
            { label: "a", prompt: "Energy from carbs?", marks: 2 },
            { label: "b", prompt: "Energy from fat?", marks: 2 },
            { label: "c", prompt: "Energy from protein?", marks: 2 },
            { label: "d", prompt: "Total energy?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy calculation",
                statement: "mass × kcal/g.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$50 \\times 4 = 200$ kcal.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$20 \\times 9 = 180$ kcal.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$30 \\times 4 = 120$ kcal.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$200 + 180 + 120 = 500$ kcal.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 200 (b) 180 (c) 120 (d) 500 kcal.",
            commonErrors: ["Using wrong kcal values."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-metabolic-water",
      title: "Metabolic Water and Byproducts",
      skill:
        "Explain metabolic water production and waste products of respiration.",
      lesson: {
        sections: [
          {
            heading: "Metabolic water",
            body: "Aerobic respiration produces **metabolic water**:\n\n$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O + ATP$\n\nThe water produced contributes to an organism's water balance — significant in some animals (e.g., kangaroo rats get most water from metabolism).",
          },
          {
            heading: "Waste products",
            body: "Respiration produces:\n- **CO₂**: waste gas, exhaled.\n- **H₂O**: metabolic water.\n- **Heat**: released energy warms organism.\n\nFermentation produces lactate or ethanol+CO₂ instead of water.",
          },
        ],
        keyFormulas: [
          {
            name: "Metabolic water",
            statement: "H₂O produced during aerobic respiration.",
          },
          { name: "Respiration wastes", statement: "CO₂, H₂O, heat." },
          {
            name: "Kangaroo rat",
            statement: "Gets most water from metabolism.",
          },
        ],
        workedExample: {
          problem: "How do desert animals survive without drinking water?",
          solution:
            "Metabolic water from respiration + water conservation adaptations.",
        },
      },
      questions: [
        {
          id: "bio9-u7-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is metabolic water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water consumed" },
              { id: "b", text: "Water produced during respiration" },
              { id: "c", text: "Water in food" },
              { id: "d", text: "Water lost in urine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metabolic water",
                statement: "Water produced as byproduct of respiration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Metabolic water = H₂O produced when glucose is oxidized.",
                evidence: "produced",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Water produced during respiration.",
            commonErrors: ["Choosing (a): that's consumed water."],
          },
        },
        {
          id: "bio9-u7-water-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the waste products of aerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Respiration wastes",
                statement: "CO₂, H₂O, heat.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ — waste gas exhaled.",
                evidence: "CO₂",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "H₂O — metabolic water.",
                evidence: "H₂O",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Heat — released energy.",
                evidence: "heat",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "CO₂, H₂O (metabolic water), heat.",
            commonErrors: ["Missing heat."],
          },
        },
        {
          id: "bio9-u7-water-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does metabolic water help desert animals survive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Metabolic water",
                statement: "Water from respiration reduces drinking need.",
              },
            ],
            steps: [
              {
                reasoning: "Desert animals can't find standing water.",
                evidence: "desert",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Aerobic respiration produces water as byproduct.",
                evidence: "byproduct",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "This contributes significantly to water balance.",
                evidence: "balance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Combined with water conservation (concentrated urine, dry feces), enables survival.",
                evidence: "conservation",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Metabolic water + conservation adaptations → survival without drinking.",
            commonErrors: ["Saying they don't need water."],
          },
        },
        {
          id: "bio9-u7-water-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare waste products of aerobic respiration vs fermentation.",
          parts: [
            { label: "a", prompt: "Aerobic products?", marks: 2 },
            {
              label: "b",
              prompt: "Lactic acid fermentation products?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Alcoholic fermentation products?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why does fermentation produce less water?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Waste comparison",
                statement: "Aerobic fully oxidizes; fermentation partially.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "CO₂ + H₂O + heat + ATP.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Lactate + ATP (2/glucose).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Ethanol + CO₂ + ATP (2/glucose).",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Glucose not fully oxidized — energy remains in organic products.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) CO₂+H₂O+heat (b) Lactate+ATP (c) Ethanol+CO₂+ATP (d) Incomplete oxidation.",
            commonErrors: ["Not noting incomplete oxidation."],
          },
        },
      ],
    },
    {
      id: "bio9-u7-integration",
      title: "Integrating Photosynthesis and Respiration",
      skill:
        "Connect photosynthesis and respiration in terms of matter cycling and energy flow.",
      lesson: {
        sections: [
          {
            heading: "Matter vs energy",
            body: "Photosynthesis and respiration illustrate the difference between **matter cycling** and **energy flow**:\n\n- **Matter** (C, O, H): cycles — photosynthesis fixes CO₂ into sugar; respiration releases it back.\n- **Energy**: flows one way — sunlight → chemical energy → heat (lost).\n\nThe same atoms are reused; energy is degraded.",
          },
          {
            heading: "Global cycles",
            body: "- **Carbon cycle**: photosynthesis removes CO₂; respiration adds it.\n- **Oxygen cycle**: photosynthesis releases O₂; respiration consumes it.\n- **Water cycle**: both processes involve water.\n\nThese cycles maintain atmospheric composition and climate.",
          },
        ],
        keyFormulas: [
          {
            name: "Matter cycles",
            statement:
              "C, O, H recycled between photosynthesis and respiration.",
          },
          {
            name: "Energy flows",
            statement: "Sun → chemical → heat; not recycled.",
          },
          {
            name: "Global cycles",
            statement: "Carbon, oxygen, water cycles maintained.",
          },
        ],
        workedExample: {
          problem: "Why can't energy be recycled like carbon?",
          solution:
            "Energy degrades to heat (2nd law of thermodynamics) — can't be reused.",
        },
      },
      questions: [
        {
          id: "bio9-u7-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the key difference between matter and energy flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are recycled" },
              { id: "b", text: "Matter cycles, energy flows one way" },
              { id: "c", text: "Energy cycles, matter flows" },
              { id: "d", text: "Neither changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matter vs energy",
                statement: "Matter cycles; energy degrades to heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atoms are recycled; energy is lost as heat and not reused.",
                evidence: "cycles vs flows",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Matter cycles, energy flows one way.",
            commonErrors: ["Thinking energy is recycled."],
          },
        },
        {
          id: "bio9-u7-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do photosynthesis and respiration contribute to the carbon cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Carbon cycle",
                statement: "Photo fixes CO₂; respiration releases it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosynthesis removes CO₂ from atmosphere → fixes into glucose.",
                evidence: "CO₂ removal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Respiration releases CO₂ back to atmosphere.",
                evidence: "CO₂ release",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Together they balance atmospheric CO₂ over time.",
                evidence: "balance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Photo removes CO₂; respiration adds it — balances cycle.",
            commonErrors: ["Saying only photosynthesis affects CO₂."],
          },
        },
        {
          id: "bio9-u7-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why energy cannot be recycled like matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy degradation",
                statement: "Energy converts to unusable heat (2nd law).",
              },
            ],
            steps: [
              {
                reasoning: "Energy transformations always produce some heat.",
                evidence: "heat",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Heat disperses and becomes unusable for work.",
                evidence: "dispersed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Matter atoms can be reassembled; energy can't be reclaimed.",
                evidence: "matter vs energy",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This is why ecosystems need constant energy input (sunlight).",
                evidence: "input needed",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Energy degrades to heat; matter cycles but energy flows one way.",
            commonErrors: ["Not citing 2nd law."],
          },
        },
        {
          id: "bio9-u7-int-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sealed terrarium contains plants and animals.",
          parts: [
            {
              label: "a",
              prompt: "Why doesn't it need external CO₂/O₂?",
              marks: 3,
            },
            { label: "b", prompt: "What provides energy?", marks: 2 },
            { label: "c", prompt: "Why does it still need light?", marks: 2 },
            {
              label: "d",
              prompt: "What happens if light is removed?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Terrarium",
                statement: "Matter cycles internally; energy flows from sun.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Plants photosynthesize using animal CO₂; animals respire using plant O₂.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sunlight → photosynthesis → chemical energy → food chain.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Light needed for photosynthesis — energy input.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Plants die → food chain collapses → ecosystem fails.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Gas exchange between plants/animals (b) Sunlight (c) Photosynthesis needs light (d) Collapse.",
            commonErrors: ["Thinking matter needs replacement."],
          },
        },
      ],
    },
  ],
};
