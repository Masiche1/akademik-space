import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "olbio-u10-lesson-10-2",
  code: "10-2",
  title: "Ecology",
  goal: "I CAN describe energy flow in ecosystems, food chains and nutrient cycles, and factors affecting populations.",
  standards: ["5090 10.3"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms interacting with each other and their environment." },
    { term: "Producer", definition: "Organism making its own food (plants via photosynthesis)." },
    { term: "Consumer", definition: "Organism eating other organisms for energy." },
    { term: "Food chain", definition: "Sequence showing energy transfer: producer → consumer → consumer." },
    { term: "Food web", definition: "Interconnected food chains showing multiple feeding relationships." },
    { term: "Trophic level", definition: "Position in food chain (producer, primary consumer, etc.)." },
    { term: "Decomposer", definition: "Organism (bacteria/fungi) breaking down dead matter, recycling nutrients." },
    { term: "Biomass", definition: "Total mass of living organisms at a trophic level." },
  ],
  concepts: [
    {
      id: "olbio-u10-energy-flow",
      title: "Energy flow and food chains",
      skill: "Describe energy flow through ecosystems and construct food chains/webs.",
      lesson: {
        sections: [
          {
            heading: "Energy source",
            body: "Sunlight → producers (photosynthesis) → consumers (eat producers/each other) → decomposers (break down waste/dead).",
          },
          {
            heading: "Food chain example",
            body: "Grass → grasshopper → frog → snake → eagle\n\nArrows show **energy flow** direction (who gets eaten by whom).",
          },
          {
            heading: "Energy transfer",
            body: "Only ~10% of energy passes to next trophic level — rest lost as heat, movement, waste. This is why food chains are short (usually 3–5 levels).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why are food chains usually only 3–5 levels long?",
          solution: "Only ~10% of energy transfers between levels, so insufficient energy remains to support more levels.",
        },
      },
      questions: [
        {
          id: "olbio-u10-energy-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ultimate source of energy in most ecosystems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sunlight" },
              { id: "b", text: "Soil" },
              { id: "c", text: "Water" },
              { id: "d", text: "Producers themselves" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy source", statement: "Sunlight → photosynthesis → food chain." },
            ],
            steps: [
              { reasoning: "Recall the source.", working: "\\text{sunlight}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sunlight",
            commonErrors: ["Choosing 'producers' — they capture energy, don't create it."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do arrows in a food chain represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food chain arrows", statement: "Direction of energy flow (who is eaten by whom)." },
            ],
            steps: [
              { reasoning: "State what arrows show.", working: "\\text{energy flow}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrows show the direction of energy flow — from the organism that is eaten to the one that eats it.",
            commonErrors: ["Saying 'predator to prey' — it's prey to predator (energy flows up)."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why only about 10% of energy is transferred between trophic levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy transfer", statement: "Most energy lost as heat, movement, waste, undigested food." },
            ],
            steps: [
              { reasoning: "Energy lost as heat (respiration).", working: "\\text{heat loss}", marks: 1, markCode: "M" },
              { reasoning: "Energy used for movement/growth.", working: "\\text{movement/growth}", marks: 1, markCode: "M" },
              { reasoning: "Energy in waste/undigested food.", working: "\\text{waste}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: only ~10% available for next level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Most energy is lost as heat from respiration, used for movement/growth, or passed out in waste — only ~10% is incorporated into biomass for the next trophic level.",
            commonErrors: ["Saying 'energy is destroyed' — it's lost as unusable heat."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Construct and analyse a food chain.",
          parts: [
            { label: "a", prompt: "Write a food chain with 4 trophic levels.", marks: 2 },
            { label: "b", prompt: "Label each trophic level (producer, primary consumer, etc.).", marks: 3 },
            { label: "c", prompt: "Explain why the chain cannot have many more levels.", marks: 2 },
            { label: "d", prompt: "State what happens to energy at each transfer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food chain", statement: "Producer→herbivore→carnivore→top carnivore; ~10% energy transfer." },
            ],
            steps: [
              { part: "a", reasoning: "Give a valid 4-level chain.", working: "\\text{grass} \\to \\text{rabbit} \\to \\text{fox} \\to \\text{eagle}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct format.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Label producer.", working: "\\text{producer}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Label consumers.", working: "\\text{primary/secondary/tertiary}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete labels.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only ~10% energy passes each level.", working: "\\text{10\\%}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Insufficient energy for more levels.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Energy lost as heat/waste.", working: "\\text{heat/waste}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only ~10% becomes biomass.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. grass→rabbit→fox→eagle (b) producer/primary/secondary/tertiary (c) ~10% energy per level (d) heat+waste lost",
            commonErrors: ["In (a) putting arrows backwards (eagle→fox)."],
          },
        },
      ],
    },
    {
      id: "olbio-u10-nutrient-cycles",
      title: "Nutrient cycles and populations",
      skill: "Describe nutrient cycling, population size factors, and human impacts on ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Nutrient cycles",
            body: "- **Carbon cycle**: CO₂ → photosynthesis → organic matter → respiration/decomposition → CO₂.\n- **Nitrogen cycle**: N₂ → (nitrogen-fixing bacteria) → nitrates → plants → animals → decomposers → N₂.",
          },
          {
            heading: "Population size",
            body: "Factors affecting populations:\n- **Biotic**: food availability, predators, disease, competition.\n- **Abiotic**: temperature, water, light, soil pH.\n\nPopulations grow exponentially until resources limit them.",
          },
          {
            heading: "Human impacts",
            body: "- **Deforestation**: habitat loss, soil erosion, CO₂ increase.\n- **Pollution**: eutrophication, acid rain, air pollution.\n- **Overfishing/hunting**: species decline.\n- **Climate change**: habitat shift, extinction risk.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is eutrophication?",
          solution: "Excess nutrients (e.g. nitrate from fertilisers) in water → algal bloom → deoxygenation → fish deaths.",
        },
      },
      questions: [
        {
          id: "olbio-u10-nutrient-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excess nutrients causing algal blooms and deoxygenation" },
              { id: "b", text: "Increase in water temperature" },
              { id: "c", text: "Soil erosion" },
              { id: "d", text: "Air pollution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eutrophication", statement: "Nutrient overload → algal bloom → O₂ depletion." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{nutrients} \\to \\text{algae} \\to \\text{O}_2 \\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Excess nutrients causing algal blooms and deoxygenation",
            commonErrors: ["Choosing 'soil erosion' — that's a different impact."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two abiotic factors affecting population size.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Abiotic factors", statement: "Temperature, water, light, soil pH, space." },
            ],
            steps: [
              { reasoning: "Give two abiotic factors.", working: "\\text{temp, water, light, pH}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Temperature, water availability, light, soil pH, or space (any two).",
            commonErrors: ["Choosing 'predators' — that's biotic, not abiotic."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deforestation affects an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Deforestation", statement: "Habitat loss, soil erosion, CO₂ increase, biodiversity loss." },
            ],
            steps: [
              { reasoning: "Loss of habitat → species decline.", working: "\\text{habitat loss}", marks: 1, markCode: "M" },
              { reasoning: "Soil exposed → erosion.", working: "\\text{soil erosion}", marks: 1, markCode: "M" },
              { reasoning: "Less photosynthesis → more CO₂.", working: "\\text{CO}_2 \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Conclude: ecosystem destabilised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deforestation removes habitat (species decline), exposes soil to erosion, reduces photosynthesis increasing CO₂, and decreases biodiversity — destabilising the ecosystem.",
            commonErrors: ["Only mentioning 'trees are gone' without ecosystem effects."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the carbon cycle and how human activity affects it.",
          parts: [
            { label: "a", prompt: "Describe the natural carbon cycle.", marks: 4 },
            { label: "b", prompt: "State two human activities that add CO₂.", marks: 2 },
            { label: "c", prompt: "Explain the consequence of increased CO₂.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Carbon cycle", statement: "CO₂→photosynthesis→organic matter→respiration/decomposition→CO₂." },
              { kind: "property", name: "Human impact", statement: "Fossil fuels + deforestation → CO₂↑ → greenhouse effect." },
            ],
            steps: [
              { part: "a", reasoning: "Photosynthesis removes CO₂.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Organisms respire/decompose → CO₂.", working: "\\text{respiration}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cycle maintains balance.", working: "\\text{cycle}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fossil fuel burning.", working: "\\text{fossil fuels}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deforestation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CO₂ is greenhouse gas → traps heat.", working: "\\text{greenhouse}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Global warming → climate change.", working: "\\text{warming}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Effects: sea level rise, habitat loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CO₂→photosynthesis→organic→respiration→CO₂ (b) fossil fuels, deforestation (c) greenhouse effect → warming",
            commonErrors: ["In (a) omitting decomposition as a CO₂ source."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u10-ecology-notes",
      title: "Ecology — revision notes",
      summary: "Energy flow, food chains, nutrient cycles, population factors, human impacts.",
      sections: [
        {
          heading: "Energy flow",
          body: "Sunlight → producers → consumers → decomposers. Arrows = energy flow. Only ~10% transfers per level → short food chains.",
        },
        {
          heading: "Cycles and impacts",
          body: "Carbon: CO₂↔photosynthesis/respiration. Nitrogen: N₂→nitrates→plants→animals. Human impacts: deforestation, pollution (eutrophication), climate change.",
        },
        {
          heading: "Exam technique",
          body: "- Food chain arrows point from food TO eater (energy direction).\n- Eutrophication: nutrients → algae → O₂ depletion → fish die.\n- Abiotic factors: temperature, water, light, pH — biotic: food, predators, disease.",
        },
      ],
    },
  ],
};
