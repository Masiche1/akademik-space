import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ebi11-u4-lesson-4-2",
  code: "4-2",
  title: "Investigating Reproduction and Inheritance",
  goal: "I CAN investigate reproductive processes and genetic inheritance patterns.",
  standards: ["Edexcel IGCSE Biology 4BI1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Genetic cross",
      definition: "Breeding experiment tracking trait inheritance.",
    },
    {
      term: "Phenotype ratio",
      definition: "Observable trait proportions in offspring.",
    },
    {
      term: "Fertilisation rate",
      definition: "Percentage of eggs successfully fertilised.",
    },
    {
      term: "Germination",
      definition: "Seed sprouting — affected by water, oxygen, temperature.",
    },
  ],
  concepts: [
    {
      id: "ebi11-u4-germination",
      title: "Investigating Germination",
      skill: "Design experiments on factors affecting seed germination.",
      lesson: {
        sections: [
          {
            heading: "Germination experiments",
            body: "**Variables**: water (present/absent), oxygen (air vs boiled water), temperature (ice/warm/hot), light (dark/light). **Controls**: same seed type, same age, same number of seeds, same container.\n\n**Method**: place seeds in Petri dishes with different conditions, count germinated daily for 7-14 days. Calculate germination % = (germinated ÷ total) × 100. **Data**: germination curves over time.",
          },
          {
            heading: "Inheritance crosses",
            body: "**Genetic crosses**: can't do with humans ethically — use plants/insects (fast generation). Drosophila (fruit flies) classic — quick breeding, visible traits. Mustard/fast plants for school.\n\n**Data analysis**: count phenotypes, calculate ratios, chi-squared test (advanced) for significance. Mendelian ratios expected: 3:1 dominant:recessive, 1:1 test cross, 9:3:3:1 dihybrid.",
          },
        ],
        keyFormulas: [
          {
            name: "Germination %",
            statement: "(germinated ÷ total seeds) × 100.",
          },
          {
            name: "Mendelian ratios",
            statement: "3:1 monohybrid; 9:3:3:1 dihybrid.",
          },
        ],
        workedExample: {
          problem: "50 seeds, 42 germinate. Percentage?",
          solution: "42/50 × 100 = 84%.",
        },
      },
      questions: [
        {
          id: "ebi11-u4-germination-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three essential conditions for germination?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water, oxygen, warmth" },
              { id: "b", text: "Oxygen, light, warmth" },
              { id: "c", text: "Water, light, soil" },
              { id: "d", text: "Soil, water, light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Germination",
                statement: "Needs water, oxygen, suitable temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Water+oxygen+warmth essential.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Water, oxygen, warmth",
            commonErrors: ["Light/soil confused — not essential."],
          },
        },
        {
          id: "ebi11-u4-germination-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use the same type and number of seeds in germination experiments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Standardisation",
                statement:
                  "Same seeds = fair comparison — only condition varies.",
              },
            ],
            steps: [
              {
                reasoning: "Different seeds have different viability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same number = fair statistical comparison.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Controls eliminate seed variables.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Same seeds eliminate genetic/age differences — only tested condition affects results.",
            commonErrors: ["Any seeds fine.", "No control link."],
          },
        },
        {
          id: "ebi11-u4-germination-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests water vs no water but uses different seed types. Critique.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Confounding variables",
                statement:
                  "Different seeds = different baseline germination rates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Different seed types have different germination rates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can't tell if difference is water or seeds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Use same seed type for both conditions.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Or test multiple seed types separately.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Different seeds confound results — use same type so only water presence varies.",
            commonErrors: ["No flaw identified.", "Vague fix."],
          },
        },
        {
          id: "ebi11-u4-germination-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design an experiment: effect of temperature on germination rate.",
          parts: [
            { label: "a", prompt: "State variables.", marks: 2 },
            { label: "b", prompt: "Describe method.", marks: 3 },
            { label: "c", prompt: "Predict and explain results.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germination temp",
                statement: "Optimum ~20-30°C; extremes inhibit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Independent: temperature; dependent: germination %.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Same seeds, water, Petri dishes at different temps (incubators/fridge).",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Count germinated daily for 7-14 days.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning:
                  "(c) Optimum temp → fastest germination; too cold/hot → slow/none.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning:
                  "(c) Enzymes work best at optimum; extremes denature.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) temp/germination% (b) same seeds+water, different temps, daily count (c) optimum→fast, extremes→slow",
            commonErrors: ["No controls.", "No optimum prediction."],
          },
        },
      ],
    },
    {
      id: "ebi11-u4-microbiology",
      title: "Microbiology Practical Skills",
      skill: "Use aseptic technique and investigate microbial growth.",
      lesson: {
        sections: [
          {
            heading: "Aseptic technique",
            body: "**Purpose**: prevent contamination — only target organism grows. **Methods**: sterilise equipment (autoclave/pressure cooker), flame bottle necks, work near flame, never touch culture with bare hands, dispose in disinfectant.\n\n**Culture media**: agar plates/broth — nutrient gel for growth. **Incubation**: 25-30°C (school safe) or 37°C (body temp) — inverted plates prevent condensation dripping. **Colony counting**: mark colonies, count grid squares, calculate per plate.",
          },
          {
            heading: "Investigating microbial growth",
            body: "**Antibacterial tests**: paper discs soaked in different substances ( Dettol, antibiotics, soap) on bacterial lawn — measure zone of inhibition (clear ring). Larger zone = more effective.\n\n**Variables**: antibiotic type/concentration, temperature, nutrients, light. **Controls**: untreated disc, sterile disc. **Data**: zone diameter measurements, compare effectiveness.",
          },
        ],
        keyFormulas: [
          {
            name: "Zone of inhibition",
            statement:
              "Clear ring around disc — larger = stronger antibacterial effect.",
          },
          {
            name: "Colony count",
            statement:
              "Count colonies × dilution factor = original concentration.",
          },
        ],
        workedExample: {
          problem:
            "Disc A: 15mm zone, Disc B: 8mm zone. Which is more effective?",
          solution:
            "A — larger inhibition zone means stronger antibacterial action.",
        },
      },
      questions: [
        {
          id: "ebi11-u4-microbiology-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is aseptic technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Killing all bacteria" },
              { id: "b", text: "Measuring colonies" },
              { id: "c", text: "Preventing contamination" },
              { id: "d", text: "Growing bacteria fast" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aseptic technique",
                statement: "Methods preventing unwanted contamination.",
              },
            ],
            steps: [
              {
                reasoning: "Prevents contamination.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Preventing contamination",
            commonErrors: ["Sterilisation confused."],
          },
        },
        {
          id: "ebi11-u4-microbiology-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are agar plates incubated upside down?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverted plates",
                statement: "Prevents condensation dripping onto culture.",
              },
            ],
            steps: [
              {
                reasoning: "Condensation forms on lid.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Upside down = drops fall away from agar.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents contamination/spreading.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Prevents condensation dripping onto agar — keeps culture uncontaminated.",
            commonErrors: ["Faster growth assumed.", "No condensation link."],
          },
        },
        {
          id: "ebi11-u4-microbiology-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a zone of inhibition tells you about an antibacterial agent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Zone of inhibition",
                statement:
                  "Larger zone = more effective antibacterial — bacteria can't grow near disc.",
              },
            ],
            steps: [
              {
                reasoning: "Clear zone = bacteria killed/prevented.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Larger zone = agent diffuses further/kills more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Smaller/no zone = less effective or resistant.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compare zones to rank effectiveness.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Zone size shows antibacterial strength — larger = more effective; compare between agents.",
            commonErrors: ["Zone = growth assumed.", "No comparison."],
          },
        },
        {
          id: "ebi11-u4-microbiology-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Testing effectiveness of three disinfectants on E. coli.",
          parts: [
            { label: "a", prompt: "Describe method with controls.", marks: 4 },
            {
              label: "b",
              prompt: "Explain how to measure effectiveness.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disinfectant test",
                statement:
                  "Paper discs on bacterial lawn — measure inhibition zones.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Spread E. coli lawn on agar; place discs with each disinfectant + control.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(a) Controls: sterile disc, water disc.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Incubate inverted at 25-30°C for 24-48h.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Measure zone of inhibition diameter for each disc.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Larger zone = more effective; compare means.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) lawn+discs+controls+incubate (b) measure zones, larger=better",
            commonErrors: ["No controls.", "No measurement."],
          },
        },
      ],
    },
  ],
};
