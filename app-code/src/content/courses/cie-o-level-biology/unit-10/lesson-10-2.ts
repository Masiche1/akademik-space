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
              { id: "a", text: "Water" },
              { id: "b", text: "Sunlight" },
              { id: "c", text: "Producers themselves" },
              { id: "d", text: "Soil" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olbio-u10-energy-flow-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The position of an organism in a food chain" },
              { id: "b", text: "The soil depth in a habitat" },
              { id: "c", text: "The number of species present" },
              { id: "d", text: "The temperature of an ecosystem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic level", statement: "Feeding position such as producer, primary consumer or top carnivore." },
            ],
            steps: [
              { reasoning: "Recall the definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The position of an organism in a food chain",
            commonErrors: ["Confusing trophic level with habitat."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of producers in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They break down dead matter" },
              { id: "b", text: "They eat other organisms" },
              { id: "c", text: "They make their own food by photosynthesis" },
              { id: "d", text: "They release oxygen only at night" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Producers", statement: "Producers capture light energy by photosynthesis." },
            ],
            steps: [
              { reasoning: "Recall the producer role.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They make their own food by photosynthesis",
            commonErrors: ["Choosing consumers — producers do not eat other organisms."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do decomposers do in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hunt live prey" },
              { id: "b", text: "Break down dead organisms and waste" },
              { id: "c", text: "Produce food by photosynthesis" },
              { id: "d", text: "Only produce oxygen" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Decomposers", statement: "Bacteria and fungi break down dead matter and recycle nutrients." },
            ],
            steps: [
              { reasoning: "Recall the decomposer role.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Break down dead organisms and waste",
            commonErrors: ["Choosing producers — decomposers do not photosynthesise."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct order of a food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fox → rabbit → grass" },
              { id: "b", text: "Fox → grass → rabbit" },
              { id: "c", text: "Rabbit → grass → fox" },
              { id: "d", text: "Grass → rabbit → fox" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Food chain order", statement: "Energy flows producer → herbivore → carnivore." },
            ],
            steps: [
              { reasoning: "Arrange from producer to top consumer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Grass → rabbit → fox",
            commonErrors: ["Reversing arrows — energy flows from food to eater."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are food chains usually only 3–5 trophic levels long?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is lost at each transfer, leaving too little for more levels" },
              { id: "b", text: "Predators refuse to eat at higher levels" },
              { id: "c", text: "There are only three kinds of organisms" },
              { id: "d", text: "Decomposers stop all recycling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy transfer", statement: "Only about 10% of energy passes to the next level." },
            ],
            steps: [
              { reasoning: "Recall why chains are short.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Energy is lost at each transfer, leaving too little for more levels",
            commonErrors: ["Choosing 'not enough organisms' — the limit is energy."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A producer level contains 10 000 units of energy. Assuming 10% transfer at each level, enter the energy reaching the primary, secondary and tertiary consumers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "units" },
              { label: "b", answer: 100, unit: "units" },
              { label: "c", answer: 10, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "Energy transferred = 10% of the previous level." },
            ],
            steps: [
              { reasoning: "Apply 10% for the first transfer.", working: "10000 × 0.10 = 1000", marks: 1, markCode: "M" },
              { reasoning: "Apply 10% for the second transfer.", working: "1000 × 0.10 = 100", marks: 1, markCode: "M" },
              { reasoning: "Apply 10% for the third transfer.", working: "100 × 0.10 = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary = 1000; secondary = 100; tertiary = 10",
            commonErrors: ["Using 100% transfer — only about 10% passes each level."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A producer has 5000 units of energy. Enter the energy reaching the primary and secondary consumers after 10% transfers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500, unit: "units" },
              { label: "b", answer: 50, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "Each trophic level receives 10% of the energy below it." },
            ],
            steps: [
              { reasoning: "First transfer to primary consumer.", working: "5000 × 0.10 = 500", marks: 1, markCode: "M" },
              { reasoning: "Second transfer to secondary consumer.", working: "500 × 0.10 = 50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Primary = 500; secondary = 50",
            commonErrors: ["Stopping after one transfer when two are required."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A producer level has 100 000 units of energy. Enter the energy reaching the second, third and fourth consumers after successive 10% transfers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "units" },
              { label: "b", answer: 100, unit: "units" },
              { label: "c", answer: 10, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "Energy decreases by a factor of 10 at each trophic level." },
            ],
            steps: [
              { reasoning: "After two transfers from producer.", working: "100000 × (0.10)^2 = 1000", marks: 1, markCode: "M" },
              { reasoning: "After three transfers from producer.", working: "100000 × (0.10)^3 = 100", marks: 1, markCode: "M" },
              { reasoning: "After four transfers from producer.", working: "100000 × (0.10)^4 = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Second consumer = 1000; third = 100; fourth = 10",
            commonErrors: ["Counting the producer as the first consumer."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A top predator receives only 8 units of energy after four 10% transfers from the producer. Estimate the producer's energy.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80000, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reverse 10% rule", statement: "Producer energy = top energy ÷ (0.10)^4." },
            ],
            steps: [
              { reasoning: "Divide by the product of four transfer factors.", working: "8 / (0.10)^4 = 80000", marks: 1, markCode: "M" },
            ],
            finalAnswer: "80000 units",
            commonErrors: ["Multiplying by 0.10 — work backwards by dividing."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A primary consumer receives 600 units of energy. How many units reach the secondary consumer if transfer is 10%?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "Next level receives 10% of the current level." },
            ],
            steps: [
              { reasoning: "Apply one 10% transfer.", working: "600 × 0.10 = 60", marks: 1, markCode: "M" },
            ],
            finalAnswer: "60 units",
            commonErrors: ["Using 90% loss as the transferred amount."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a food chain, arrows point:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In both directions equally" },
              { id: "b", text: "Always downward to the soil" },
              { id: "c", text: "From predator to prey" },
              { id: "d", text: "From prey to predator, showing energy flow" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food chain arrows", statement: "Arrows show the direction of energy transfer." },
            ],
            steps: [
              { reasoning: "Recall arrow convention.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** From prey to predator, showing energy flow",
            commonErrors: ["Reversing the arrows to show 'who eats whom' incorrectly."],
          },
        },
        {
          id: "olbio-u10-energy-flow-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why top predators are usually few in number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy pyramid", statement: "Only ~10% of energy reaches each higher trophic level." },
            ],
            steps: [
              { reasoning: "Energy is lost as heat, movement and waste at each level.", working: "\\text{energy losses}", marks: 1, markCode: "M" },
              { reasoning: "Only about 10% is transferred to the next trophic level.", working: "10\\%", marks: 1, markCode: "M" },
              { reasoning: "By the top level very little energy remains.", working: "\\text{little energy}", marks: 1, markCode: "M" },
              { reasoning: "Conclude few top predators can be supported.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Because only about 10% of energy is transferred between trophic levels and most is lost as heat, movement and waste, the energy available at the top is small, so only a few top predators can be supported.",
            commonErrors: ["Saying predators are rare because they are hunted — the main limit is energy."],
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
              { id: "a", text: "Increase in water temperature" },
              { id: "b", text: "Excess nutrients causing algal blooms and deoxygenation" },
              { id: "c", text: "Air pollution" },
              { id: "d", text: "Soil erosion" },
            ],
            correctChoiceId: "b",
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
        {
          id: "olbio-u10-nutrient-cycles-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a producer in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An organism that makes its own food" },
              { id: "b", text: "An organism that eats other organisms" },
              { id: "c", text: "A bacterium that decomposes waste" },
              { id: "d", text: "A predator at the top of a food chain" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "Producers such as plants make organic matter by photosynthesis." },
            ],
            steps: [
              { reasoning: "Recall the producer definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An organism that makes its own food",
            commonErrors: ["Choosing consumers — producers do not eat other organisms."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main role of decomposers in nutrient cycles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They break down dead matter and return nutrients to the soil" },
              { id: "b", text: "They hunt herbivores" },
              { id: "c", text: "They remove carbon dioxide from the air" },
              { id: "d", text: "They produce seeds" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Decomposers", statement: "Decomposers recycle nutrients from dead organisms and waste." },
            ],
            steps: [
              { reasoning: "Recall the nutrient-cycling role.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** They break down dead matter and return nutrients to the soil",
            commonErrors: ["Choosing photosynthesis — that is producers."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the carbon cycle, which process removes carbon dioxide from the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combustion" },
              { id: "b", text: "Respiration" },
              { id: "c", text: "Photosynthesis" },
              { id: "d", text: "Decomposition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carbon cycle", statement: "Photosynthesis fixes CO₂ into organic compounds." },
            ],
            steps: [
              { reasoning: "Identify the CO₂-removing process.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Photosynthesis",
            commonErrors: ["Choosing respiration — that releases CO₂."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do nitrogen-fixing bacteria convert atmospheric nitrogen into?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrates usable by plants" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Glucose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen fixation", statement: "Nitrogen-fixing bacteria convert N₂ to nitrates/nitrogen compounds plants can use." },
            ],
            steps: [
              { reasoning: "Recall the product of nitrogen fixation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nitrates usable by plants",
            commonErrors: ["Choosing oxygen — that is not part of nitrogen fixation."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a biotic factor affecting population size?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temperature" },
              { id: "b", text: "Competition for food" },
              { id: "c", text: "Light intensity" },
              { id: "d", text: "Soil pH" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Biotic factors", statement: "Biotic factors are living influences such as competition and predation." },
            ],
            steps: [
              { reasoning: "Choose the living factor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Competition for food",
            commonErrors: ["Choosing temperature/pH/light — those are abiotic."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In one year, 1000 units of CO₂ are fixed by photosynthesis and 900 units return to the atmosphere by respiration and decomposition. Calculate the net carbon stored in biomass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Net carbon storage", statement: "Net stored = fixed CO₂ − returned CO₂." },
            ],
            steps: [
              { reasoning: "Subtract returned carbon from fixed carbon.", working: "1000 - 900 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 units",
            commonErrors: ["Adding the values — storage is the difference."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plants absorb 200 nitrate ions and decomposers later return 50 of them to the soil. Calculate the percentage of nitrate returned.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = returned / absorbed × 100." },
            ],
            steps: [
              { reasoning: "Calculate the percentage returned.", working: "50/200 × 100 = 25", marks: 1, markCode: "M" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Using 200/50 — the returned amount is the numerator."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An environment has a carrying capacity of 500 individuals and currently supports 300. How many more individuals could be added before the carrying capacity is reached?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "individuals" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carrying capacity", statement: "Room for growth = carrying capacity − current population." },
            ],
            steps: [
              { reasoning: "Subtract current population from capacity.", working: "500 - 300 = 200", marks: 1, markCode: "M" },
            ],
            finalAnswer: "200 individuals",
            commonErrors: ["Answering 500 — that is the capacity, not the remaining space."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A population grows from 250 to 500 individuals. Enter the absolute increase and the percentage increase.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 250, unit: "individuals" },
              { label: "b", answer: 100, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population increase", statement: "Increase = final − initial; percentage = increase / initial × 100." },
            ],
            steps: [
              { reasoning: "Calculate the absolute increase.", working: "500 - 250 = 250", marks: 1, markCode: "M" },
              { reasoning: "Calculate the percentage increase.", working: "250/250 × 100 = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increase = 250 individuals; percentage = 100%",
            commonErrors: ["Using 500 as the initial value in the percentage calculation."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Fertiliser runoff contains 250 kg of nitrate and 40% of it enters a lake. Calculate the mass of nitrate entering the lake.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of mass", statement: "Mass entering = total × percentage." },
            ],
            steps: [
              { reasoning: "Calculate 40% of 250 kg.", working: "250 × 0.40 = 100", marks: 1, markCode: "M" },
            ],
            finalAnswer: "100 kg",
            commonErrors: ["Answering 40 kg — that is 16%, not 40%."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an abiotic factor affecting population size?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competition" },
              { id: "b", text: "Predation" },
              { id: "c", text: "Temperature" },
              { id: "d", text: "Disease" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Abiotic factors", statement: "Abiotic factors are non-living, such as temperature and water." },
            ],
            steps: [
              { reasoning: "Choose the non-living factor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Temperature",
            commonErrors: ["Choosing disease/competition — those are biotic."],
          },
        },
        {
          id: "olbio-u10-nutrient-cycles-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the nitrogen cycle and the role of decomposers in it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen cycle", statement: "N₂ → nitrates → plants → animals → decomposers → N₂." },
            ],
            steps: [
              { reasoning: "Nitrogen-fixing bacteria convert N₂ to nitrates.", working: "N_2 \\to \\text{nitrates}", marks: 1, markCode: "M" },
              { reasoning: "Plants absorb nitrates and animals eat plants.", working: "\\text{plants/animals}", marks: 1, markCode: "M" },
              { reasoning: "Decomposers break down dead matter and return nitrogen compounds.", working: "\\text{decomposers}", marks: 1, markCode: "M" },
              { reasoning: "Denitrifying bacteria return N₂ to the atmosphere.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nitrogen-fixing bacteria convert atmospheric N₂ into nitrates; plants absorb nitrates and are eaten by animals; decomposers break down dead matter returning nitrogen compounds to soil, and denitrifying bacteria release N₂ back to the atmosphere.",
            commonErrors: ["Omitting decomposers or denitrification — the cycle is not complete without them."],
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
