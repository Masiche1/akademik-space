import type { Lesson } from "../../../types.ts";

export const lesson812: Lesson = {
  id: "cial-b-u8-lesson-8-2",
  code: "8-2",
  title: "Ecosystems and energy flow",
  goal: "I CAN describe trophic levels, food chains/webs, pyramids and nutrient cycles.",
  standards: ["9700 15.1: ecosystems and energy flow"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms interacting with their abiotic environment." },
    { term: "Trophic level", definition: "Feeding position in a food chain (producer→primary→secondary consumer)." },
    { term: "Food chain", definition: "Linear sequence of who eats whom." },
    { term: "Food web", definition: "Interconnected food chains showing real feeding relationships." },
    { term: "Producer/consumer", definition: "Producers make food (photosynthesis); consumers eat others." },
    { term: "Decomposer", definition: "Breaks down dead matter releasing nutrients (bacteria, fungi)." },
  ],
  concepts: [
    {
      id: "cial-b-u8-food",
      title: "Food chains and trophic pyramids",
      skill: "Construct food chains/webs and interpret pyramids of numbers, biomass and energy.",
      lesson: {
        sections: [
          {
            heading: "Trophic levels",
            body: "Producers (autotrophs — plants, algae) → primary consumers (herbivores) → secondary consumers (carnivores) → tertiary consumers (top predators). Decomposers break down all levels, returning nutrients to soil.",
          },
          {
            heading: "Food chains and webs",
            body: "Food chain: single linear path (grass→rabbit→fox). Food web: multiple chains interlinked — more realistic, shows how species affect each other. Arrows point from food source to consumer (direction of energy flow).",
          },
          {
            heading: "Pyramids",
            body: "Pyramid of numbers: organism count per level — usually decreases but can invert (one tree supports many insects). Pyramid of biomass: dry mass — always decreases upward (~10% transferred). Pyramid of energy: energy flow — always decreases (~10% efficiency at each transfer).",
          },
        ],
        keyFormulas: [
          { name: "10% rule", statement: "Only ~10% of energy/biomass transfers between trophic levels" },
          { name: "Energy pyramid", statement: "Always decreases upward — never inverts" },
        ],
        workedExample: {
          problem: "If producers capture 10,000 kJ of energy, how much reaches tertiary consumers?",
          solution: "10,000 → 1,000 (primary) → 100 (secondary) → 10 kJ (tertiary). Three transfers × 10%.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-fd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain, what do the arrows represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direction of energy flow" },
              { id: "b", text: "Direction of nutrient flow" },
              { id: "c", text: "Size of organism" },
              { id: "d", text: "Lifespan" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Food chain", statement: "Arrows show energy transfer direction." }],
            steps: [{ reasoning: "Arrows point food→consumer = energy flow.", marks: 1, markCode: "A" }],
            finalAnswer: "Direction of energy flow",
          },
        },
        {
          id: "cial-b-u8-fd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between a food chain and a food web?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Food web", statement: "Chain=linear; web=interconnected chains." }],
            steps: [
              { reasoning: "Chain: single linear feeding path.", marks: 1, markCode: "M" },
              { reasoning: "Web: multiple interconnected chains — more realistic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Linear vs interconnected",
          },
        },
        {
          id: "cial-b-u8-fd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does the pyramid of energy always decrease upward while the pyramid of numbers can invert?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Trophic transfer", statement: "~90% energy lost as heat/respiration at each level." }],
            steps: [
              { reasoning: "Energy lost as heat, respiration, waste at each transfer.", marks: 1, markCode: "M" },
              { reasoning: "Only ~10% passes to next level — always decreasing.", marks: 1, markCode: "M" },
              { reasoning: "Numbers can invert: one large producer supports many small consumers.", marks: 1, markCode: "M" },
              { reasoning: "Energy/biomass reflect this but numbers don't necessarily.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Energy always ↓ (10% rule); numbers can invert",
          },
        },
        {
          id: "cial-b-u8-fd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Food chains and pyramids.",
          parts: [
            { label: "a", prompt: "Define trophic level and give an example of each level.", marks: 3 },
            { label: "b", prompt: "What is the difference between a food chain and a food web?", marks: 2 },
            { label: "c", prompt: "State the 10% rule.", marks: 1 },
            { label: "d", prompt: "Why does the pyramid of numbers sometimes invert?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Trophic levels", statement: "Producer→herbivore→carnivore→top predator." }],
            steps: [
              { part: "a", reasoning: "Trophic level = feeding position.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Examples: producer=grass, primary=rabbit, secondary=fox.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All levels named correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Chain linear; web interconnected.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "~10% energy/biomass transfers up.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "One producer can support many consumers (tree→insects).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Numbers don't have to decrease.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Biomass/energy still decrease.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) levels (b) chain vs web (c) 10% (d) one→many",
          },
        },
      ],
    },
    {
      id: "cial-b-u8-nutrient",
      title: "Nutrient cycles",
      skill: "Describe the carbon and nitrogen cycles and their human impacts.",
      lesson: {
        sections: [
          {
            heading: "Carbon cycle",
            body: "Carbon moves: atmosphere (CO$_2$) → photosynthesis → organic matter → respiration/decomposition → CO$_2$. Also: fossil fuels (ancient organic matter) burned → CO$_2$; oceans absorb CO$_2$ (carbon sink); volcanoes release it. Human impact: burning fossil fuels + deforestation → rising CO$_2$ → greenhouse effect → climate change.",
          },
          {
            heading: "Nitrogen cycle",
            body: "Atmosphere N$_2$ is unusable by most organisms. Nitrogen fixation (lightning, Rhizobium bacteria in legume root nodules, industrial Haber process) converts N$_2$ → nitrates/ammonia. Plants absorb nitrates → proteins → animals eat → waste/death → decomposers → ammonification → nitrification → denitrification returns N$_2$. Humans add fertiliser → eutrophication.",
          },
          {
            heading: "Human impacts on cycles",
            body: "Carbon: fossil fuels, deforestation → climate change. Nitrogen: fertilisers → nitrate runoff → eutrophication (algal blooms → deoxygenation → dead zones). Phosphorus: detergent/fertiliser runoff → similar eutrophication.",
          },
        ],
        keyFormulas: [
          { name: "Carbon cycle", statement: "Photosynthesis↔respiration; fossil fuels+deforestation→CO₂ rise" },
          { name: "Nitrogen fixation", statement: "N₂→nitrates via bacteria/lightning/Haber" },
        ],
        workedExample: {
          problem: "Why can't plants use atmospheric nitrogen directly?",
          solution: "N$_2$ triple bond is very stable — plants need nitrates/ammonia produced by nitrogen-fixing bacteria.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-nc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process converts atmospheric nitrogen into usable nitrates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen fixation" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Denitrification" },
              { id: "d", text: "Respiration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nitrogen fixation", statement: "N₂→nitrates via bacteria/lightning/Haber." }],
            steps: [{ reasoning: "Nitrogen fixation converts N₂ to usable forms.", marks: 1, markCode: "A" }],
            finalAnswer: "Nitrogen fixation",
          },
        },
        {
          id: "cial-b-u8-nc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two human activities that increase atmospheric CO$_2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Carbon emissions", statement: "Fossil fuels and deforestation release CO₂." }],
            steps: [
              { reasoning: "Burning fossil fuels.", marks: 1, markCode: "A" },
              { reasoning: "Deforestation (less photosynthesis + burning).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fossil fuels, deforestation",
          },
        },
        {
          id: "cial-b-u8-nc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how fertiliser runoff causes eutrophication.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Eutrophication", statement: "Nitrate/phosphate runoff → algal bloom → deoxygenation." }],
            steps: [
              { reasoning: "Fertiliser nitrates/phosphates wash into water bodies.", marks: 1, markCode: "M" },
              { reasoning: "Algae bloom — rapid growth using nutrients.", marks: 1, markCode: "M" },
              { reasoning: "Algae die → decomposers consume oxygen decomposing them.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen depleted → fish/aquatic life die — dead zone.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Nutrients→algae→decomposition→O₂ loss→dead zone",
          },
        },
        {
          id: "cial-b-u8-nc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nutrient cycles.",
          parts: [
            { label: "a", prompt: "Describe the carbon cycle in four steps.", marks: 4 },
            { label: "b", prompt: "Why can't plants use atmospheric N₂ directly?", marks: 2 },
            { label: "c", prompt: "Name two nitrogen-fixing agents.", marks: 2 },
            { label: "d", prompt: "What is eutrophication?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cycles", statement: "Carbon: photosynthesis↔respiration; nitrogen needs fixation." }],
            steps: [
              { part: "a", reasoning: "CO₂ → photosynthesis → organic matter.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Respiration/decomposition → CO₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fossil fuels/deforestation → extra CO₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Oceans absorb CO₂ (sink).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "N₂ triple bond very stable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plants need nitrates/ammonia from fixation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rhizobium bacteria, lightning, Haber process (any two).", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Excess nutrients → algal bloom → deoxygenation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 steps (b) stable N₂ (c) Rhizobium/lightning/Haber (d) algal bloom+O₂ loss",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u8-ecosystems-notes",
      title: "Ecosystems and nutrient cycles — revision notes",
      summary: "Food chains, trophic pyramids, carbon and nitrogen cycles.",
      sections: [
        {
          heading: "Food chains",
          body: "Producer→primary→secondary→tertiary consumers; decomposers recycle. Food web = interconnected chains. Arrows show energy flow. Only ~10% energy transfers up (10% rule) — energy pyramid always decreases.",
        },
        {
          heading: "Cycles",
          body: "Carbon: photosynthesis↔respiration; fossil fuels+deforestation→CO₂ rise→climate change. Nitrogen: N₂ unusable → fixation (Rhizobium, lightning, Haber) → nitrates→proteins→waste→denitrification. Fertiliser runoff→eutrophication.",
        },
        {
          heading: "Exam checklist",
          body: "For pyramid questions remember numbers can invert but energy/biomass always decrease. For cycles trace the full loop including human impacts.",
        },
      ],
    },
  ],
};
