import type { Lesson } from "../../../types.ts";

export const lesson143: Lesson = {
  id: "bio10-u4-lesson-4-3",
  code: "4-3",
  title: "Ecology: Communities and Ecosystems",
  goal: "I CAN describe trophic levels, energy flow, and biogeochemical cycles in ecosystems.",
  standards: ["HS-LS2-1", "HS-LS2-4", "HS-LS2-6", "HS-LS4-6"],
  vocabulary: [
    { term: "Ecology", definition: "Study of interactions between organisms and their environment." },
    { term: "Trophic level", definition: "Position in food chain (producer, consumer, decomposer)." },
    { term: "Food chain", definition: "Linear sequence of who eats whom." },
    { term: "Food web", definition: "Interconnected food chains showing complex feeding relationships." },
    { term: "Biomass", definition: "Total mass of organisms at a trophic level." },
    { term: "Energy pyramid", definition: "Shows ~10% energy transfer between trophic levels." },
    { term: "Biogeochemical cycle", definition: "Cycling of elements (C, N, P, water) through ecosystems." },
    { term: "Decomposer", definition: "Organism breaking down dead matter (bacteria, fungi)." },
  ],
  concepts: [
    {
      id: "bio10-u4-trophic-levels",
      title: "Trophic levels and energy flow",
      skill: "Describe trophic levels and the 10% energy transfer rule.",
      lesson: {
        sections: [
          {
            heading: "Trophic levels",
            body: "1. **Producers** (autotrophs): make their own food (plants, algae)\n2. **Primary consumers** (herbivores): eat producers\n3. **Secondary consumers** (carnivores): eat herbivores\n4. **Tertiary consumers**: eat secondary consumers\n5. **Decomposers**: break down dead matter at all levels",
          },
          {
            heading: "Energy flow",
            body: "Only ~10% of energy transfers between trophic levels; ~90% is lost as heat/metabolic waste. This limits food chain length to ~4-5 levels.",
          },
          {
            heading: "Food webs",
            body: "Real ecosystems have complex **food webs**, not simple chains. Organisms often occupy multiple trophic levels, making ecosystems resilient but interconnected.",
          },
        ],
        keyFormulas: [
          { name: "10% rule", statement: "~10% energy transfers to next trophic level" },
          { name: "Producers", statement: "Base of food web; capture solar energy" },
        ],
        workedExample: {
          problem: "If producers capture 10,000 kJ of energy, how much reaches tertiary consumers?",
          solution: "Producers→primary (1,000)→secondary (100)→tertiary (10 kJ). Only 10 kJ reaches tertiary consumers.",
        },
      },
      questions: [
        {
          id: "bio10-u4-trophic-levels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Level of competition" },
              { id: "b", text: "Position in food chain" },
              { id: "c", text: "Amount of water" },
              { id: "d", text: "Type of habitat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Trophic level", statement: "Position in food chain." }],
            steps: [{ reasoning: "Trophic levels describe feeding positions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Position in food chain",
            commonErrors: ["Confusing with habitat."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u4-trophic-levels-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why only ~10% of energy transfers between trophic levels.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy loss", statement: "90% lost as heat and metabolic processes." }],
            steps: [
              { reasoning: "Organisms use energy for metabolism, movement, reproduction.", marks: 1, markCode: "R" },
              { reasoning: "Most energy lost as heat; not all biomass consumed.", marks: 1, markCode: "B" },
              { reasoning: "Only ~10% stored as biomass for next level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90% lost as heat/metabolic waste; only 10% transferred.",
            commonErrors: ["Thinking energy is recycled."],
            examinerNote: "R1, B1, A1.",
          },
        },
        {
          id: "bio10-u4-trophic-levels-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are food chains typically limited to 4-5 trophic levels?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy pyramid", statement: "10% transfer limits chain length." },
              { kind: "principle", name: "Insufficient energy", statement: "Too little energy at top levels." },
            ],
            steps: [
              { reasoning: "Each level loses ~90% energy.", marks: 1, markCode: "B" },
              { reasoning: "After 4-5 levels, insufficient energy remains to support another level.", marks: 1, markCode: "R" },
              { reasoning: "Organisms at top need large amounts of energy for survival.", marks: 1, markCode: "B" },
              { reasoning: "Energy pyramid narrows to a point — can't support more levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy loss limits chains to ~4-5 levels.",
            commonErrors: ["Thinking food chains can be infinite."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u4-trophic-levels-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A grassland ecosystem has the following food chain: Grass → Grasshopper → Frog → Snake → Hawk.",
          parts: [
            { label: "a", prompt: "Identify each trophic level.", marks: 2 },
            { label: "b", prompt: "If grass captures 100,000 kJ, calculate energy at each level.", marks: 4 },
            { label: "c", prompt: "Why can't there be a 6th trophic level?", marks: 2 },
            { label: "d", prompt: "What happens if snakes are removed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trophic levels", statement: "Producer→primary→secondary→tertiary→quaternary." },
              { kind: "principle", name: "10% rule", statement: "Each level gets 10% of previous." },
            ],
            steps: [
              { reasoning: "Grass: producer; Grasshopper: primary; Frog: secondary; Snake: tertiary; Hawk: quaternary.", marks: 2, markCode: "B", part: "a" },
              { reasoning: "Grasshopper: 10,000 kJ.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Frog: 1,000 kJ.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Snake: 100 kJ.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Hawk: 10 kJ.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Only 10 kJ at hawk level; not enough for another predator.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Energy insufficient to support viable population.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Hawk population increases (less predation).", marks: 1, markCode: "R", part: "d" },
              { reasoning: "Frog population decreases (more predation by hawks).", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) levels identified (b) 10k/1k/100/10 kJ (c) insufficient energy (d) hawks up, frogs down.",
            commonErrors: ["Thinking energy is conserved."],
            examinerNote: "2+4+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u4-biogeochemical",
      title: "Biogeochemical cycles",
      skill: "Describe the carbon, nitrogen and water cycles in ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Carbon cycle",
            body: "Carbon moves through:\n- **Atmosphere**: CO2\n- **Photosynthesis**: CO2 → glucose (producers)\n- **Respiration**: glucose → CO2 (all organisms)\n- **Decomposition**: dead matter → CO2\n- **Fossil fuels**: ancient carbon → combustion → CO2",
          },
          {
            heading: "Nitrogen cycle",
            body: "Nitrogen moves through:\n- **Atmosphere**: N2 (78%, unusable directly)\n- **Nitrogen fixation**: bacteria convert N2 → NH3/nitrates\n- **Assimilation**: plants absorb nitrates → proteins\n- **Ammonification**: decomposers → NH3\n- **Denitrification**: bacteria → N2 (returns to atmosphere)",
          },
          {
            heading: "Water cycle",
            body: "Water moves through:\n- **Evaporation**: liquid → vapor\n- **Condensation**: vapor → clouds\n- **Precipitation**: rain/snow\n- **Infiltration/runoff**: water returns to ground/surface\n- **Transpiration**: plants release water vapor",
          },
        ],
        keyFormulas: [
          { name: "Carbon", statement: "Photosynthesis removes CO2; respiration adds it" },
          { name: "Nitrogen", statement: "Fixation converts N2 → usable forms" },
        ],
        workedExample: {
          problem: "Why can't plants use atmospheric N2 directly?",
          solution: "N2 is very stable; plants need nitrates/ammonia. Nitrogen-fixing bacteria convert N2 to usable forms.",
        },
      },
      questions: [
        {
          id: "bio10-u4-biogeochemical-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a biogeochemical cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cycle of rocks" },
              { id: "b", text: "Cycling of elements through living and non-living parts of ecosystem" },
              { id: "c", text: "Movement of water only" },
              { id: "d", text: "Cycle of energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Biogeochemical", statement: "Elements cycle through ecosystem." }],
            steps: [{ reasoning: "Biogeochemical cycles move elements between living and non-living components.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Elements cycling through ecosystem",
            commonErrors: ["Confusing with energy flow."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u4-biogeochemical-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of decomposers in the carbon cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Decomposers", statement: "Break down dead matter, releasing CO2." }],
            steps: [
              { reasoning: "Decomposers break down dead organic matter.", marks: 1, markCode: "B" },
              { reasoning: "They release CO2 through respiration.", marks: 1, markCode: "B" },
              { reasoning: "This returns carbon to atmosphere for reuse by producers.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Decomposers release CO2, recycling carbon.",
            commonErrors: ["Thinking decomposers only exist in food webs."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u4-biogeochemical-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is nitrogen fixation important for ecosystems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nitrogen fixation", statement: "Converts unusable N2 to usable nitrates." },
              { kind: "principle", name: "Limiting nutrient", statement: "Nitrogen often limits plant growth." },
            ],
            steps: [
              { reasoning: "Atmospheric N2 is unusable by most organisms.", marks: 1, markCode: "B" },
              { reasoning: "Nitrogen-fixing bacteria convert N2 → NH3/nitrates.", marks: 1, markCode: "B" },
              { reasoning: "Plants absorb nitrates to make proteins and nucleic acids.", marks: 1, markCode: "R" },
              { reasoning: "Without fixation, nitrogen cycle stops; ecosystems collapse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fixation makes N2 usable; essential for plant growth and ecosystem function.",
            commonErrors: ["Thinking plants can use N2 directly."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u4-biogeochemical-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare the carbon and nitrogen cycles.",
          parts: [
            { label: "a", prompt: "What are the main reservoirs for each?", marks: 2 },
            { label: "b", prompt: "What processes move carbon vs nitrogen?", marks: 4 },
            { label: "c", prompt: "How do human activities affect each cycle?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carbon cycle", statement: "Atmosphere CO2, biomass, fossil fuels." },
              { kind: "principle", name: "Nitrogen cycle", statement: "Atmosphere N2, soil nitrates, biomass." },
            ],
            steps: [
              { reasoning: "Carbon: atmosphere (CO2), biomass, fossil fuels.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Nitrogen: atmosphere (N2), soil (nitrates), biomass.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Carbon: photosynthesis removes CO2; respiration/decomposition add it.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Nitrogen: fixation, assimilation, ammonification, denitrification.", marks: 2, markCode: "B", part: "b" },
              { reasoning: "Burning fossil fuels adds CO2 → greenhouse effect.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Deforestation reduces CO2 uptake → more CO2 remains.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Fertilizers add excess nitrates → eutrophication.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Both cycles are disrupted by human activity → environmental problems.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) reservoirs differ (b) different processes (c) fossil fuels→CO2, fertilizers→eutrophication.",
            commonErrors: ["Confusing the two cycles."],
            examinerNote: "2+4+4 = 10.",
          },
        },
      ],
    },
  ],
};
