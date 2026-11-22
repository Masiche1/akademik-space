import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "cieb-u10-lesson-10-2",
  code: "10-2",
  title: "Ecology",
  goal: "I CAN describe energy flow in ecosystems, food chains and nutrient cycles, and factors affecting populations.",
  standards: ["0653 10.3"],
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
      id: "cieb-u10-energy-flow",
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
          id: "cieb-u10-energy-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ultimate source of energy in most ecosystems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil" },
              { id: "b", text: "Water" },
              { id: "c", text: "Sunlight" },
              { id: "d", text: "Producers themselves" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy source", statement: "Sunlight → photosynthesis → food chain." },
            ],
            steps: [
              { reasoning: "Recall the source.", working: "\\text{sunlight}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Sunlight",
            commonErrors: ["Choosing 'producers' — they capture energy, don't create it."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q2",
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
          id: "cieb-u10-energy-flow-q3",
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
          id: "cieb-u10-energy-flow-q4",
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
          id: "cieb-u10-energy-flow-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is a producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fungus" },
              { id: "b", text: "Grass" },
              { id: "c", text: "Rabbit" },
              { id: "d", text: "Fox" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producer", statement: "Makes own food via photosynthesis." },
            ],
            steps: [
              { reasoning: "Recall what a producer is.", working: "\\text{photosynthesis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Grass",
            commonErrors: ["Choosing fungus — that's a decomposer."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the food chain grass → rabbit → fox, the fox is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decomposer" },
              { id: "b", text: "Producer" },
              { id: "c", text: "Primary consumer" },
              { id: "d", text: "Secondary consumer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Trophic levels", statement: "Producer → primary → secondary → tertiary consumer." },
            ],
            steps: [
              { reasoning: "Count levels from producer.", working: "\\text{producer} \\to \\text{primary} \\to \\text{secondary}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Secondary consumer",
            commonErrors: ["Counting the rabbit as producer — only grass produces."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the role of decomposers in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce food by photosynthesis" },
              { id: "b", text: "Hunt and eat other animals" },
              { id: "c", text: "Break down dead matter and recycle nutrients" },
              { id: "d", text: "Absorb sunlight for energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposers", statement: "Bacteria/fungi recycling nutrients from dead organic matter." },
            ],
            steps: [
              { reasoning: "Recall their function.", working: "\\text{recycle nutrients}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Break down dead matter and recycle nutrients",
            commonErrors: ["Confusing decomposers with consumers — they feed on dead matter."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A food web is more stable than a food chain because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy flows faster through it" },
              { id: "b", text: "If one food source is removed, organisms can feed on alternatives" },
              { id: "c", text: "It only has one trophic level" },
              { id: "d", text: "It contains fewer organisms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Food web stability", statement: "Multiple feeding links give resilience to change." },
            ],
            steps: [
              { reasoning: "Link structure to stability.", working: "\\text{alternative food sources}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** If one food source is removed, organisms can feed on alternatives",
            commonErrors: ["Saying 'more arrows = more energy' — the point is resilience."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a food chain, arrows point from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The largest to the smallest organism" },
              { id: "b", text: "The predator to its prey" },
              { id: "c", text: "The producer to the decomposer" },
              { id: "d", text: "The organism that is eaten to the organism that eats it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Food chain arrows", statement: "Arrows show energy flow direction (food → eater)." },
            ],
            steps: [
              { reasoning: "Recall arrow convention.", working: "\\text{food} \\to \\text{eater}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** The organism that is eaten to the organism that eats it",
            commonErrors: ["Reversing arrows — they point prey → predator, not predator → prey."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to most of the energy at each trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is returned to the sun" },
              { id: "b", text: "It is stored forever in the organism" },
              { id: "c", text: "It is lost as heat through respiration and other processes" },
              { id: "d", text: "It is converted into matter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy loss", statement: "~90% lost as heat, movement, waste, undigested food." },
            ],
            steps: [
              { reasoning: "Recall where energy goes.", working: "\\text{heat loss}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** It is lost as heat through respiration and other processes",
            commonErrors: ["Saying 'energy is destroyed' — it's lost as unusable heat."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Producers capture 20 000 kJ of energy. Assuming the 10% rule, calculate the energy available to herbivores (primary consumers).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2000, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "$E_{n+1} = 0.1 \\times E_n$" },
            ],
            steps: [
              { reasoning: "Take 10% of producer energy.", working: "20000 \\times 0.1 = 2000", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2000 kJ",
            commonErrors: ["Multiplying by 10 instead of 0.1."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Primary consumers receive 800 kJ of energy. Calculate the percentage of the producers' 8000 kJ that this represents.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage transfer", statement: "$\\frac{800}{8000} \\times 100 = 10\\%$" },
            ],
            steps: [
              { reasoning: "Compute the percentage.", working: "\\frac{800}{8000} \\times 100 = 10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "10%",
            commonErrors: ["Inverting the ratio — 8000/800 gives 1000%."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Producers capture 50 000 units of energy. Using the 10% rule, estimate the energy reaching tertiary consumers (three transfers up).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50, unit: "units" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "10% rule", statement: "$E_{n+1} = 0.1 \\times E_n$ applied three times." },
            ],
            steps: [
              { reasoning: "Apply 0.1 three times.", working: "50000 \\times 0.1 \\times 0.1 \\times 0.1 = 50", marks: 1, markCode: "M" },
            ],
            finalAnswer: "50 units",
            commonErrors: ["Applying only two transfers — tertiary consumers are three levels above producers."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If only 8% of energy is transferred between levels, calculate the energy reaching herbivores from producers capturing 30 000 kJ.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2400, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy transfer", statement: "$E_{n+1} = 0.08 \\times E_n$" },
            ],
            steps: [
              { reasoning: "Take 8% of producer energy.", working: "30000 \\times 0.08 = 2400", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2400 kJ",
            commonErrors: ["Using 10% instead of the stated 8%."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why food chains rarely have more than 4 or 5 trophic levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food chain length", statement: "~10% energy transfer limits chain length." },
            ],
            steps: [
              { reasoning: "Only ~10% energy passes each level.", working: "10\\% \\text{ transfer}", marks: 1, markCode: "M" },
              { reasoning: "Rest lost as heat, respiration, waste.", working: "\\text{heat/waste}", marks: 1, markCode: "M" },
              { reasoning: "Energy available becomes too small for more levels.", marks: 1, markCode: "M" },
              { reasoning: "Conclude: insufficient energy for longer chains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Only about 10% of energy transfers between trophic levels; the rest is lost as heat and waste. After a few levels so little energy remains that it cannot support another population, so chains stay short.",
            commonErrors: ["Saying 'organisms run out of food' — the limit is energy transfer efficiency."],
          },
        },
        {
          id: "cieb-u10-energy-flow-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the role of each feeding group in an ecosystem.",
          parts: [
            { label: "a", prompt: "State the role of producers.", marks: 3 },
            { label: "b", prompt: "State the role of consumers.", marks: 3 },
            { label: "c", prompt: "State the role of decomposers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Feeding groups", statement: "Producers capture energy; consumers transfer it; decomposers recycle nutrients." },
            ],
            steps: [
              { part: "a", reasoning: "Capture sunlight via photosynthesis.", working: "\\text{photosynthesis}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Produce organic food/biomass.", working: "\\text{biomass}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Base of all food chains.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Eat other organisms for energy.", working: "\\text{eat organisms}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Transfer energy up trophic levels.", working: "\\text{energy transfer}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Classified as primary/secondary/tertiary.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Break down dead matter and waste.", working: "\\text{decompose}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Release nutrients back to soil/water.", working: "\\text{nutrient release}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete nutrient cycles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) capture sunlight, produce food, base of food chains (b) transfer energy by eating other organisms (c) break down dead matter, recycle nutrients",
            commonErrors: ["In (c) saying decomposers 'produce energy' — they recycle nutrients, not capture energy."],
          },
        },
      ],
    },
    {
      id: "cieb-u10-nutrient-cycles",
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
          id: "cieb-u10-nutrient-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air pollution" },
              { id: "b", text: "Soil erosion" },
              { id: "c", text: "Increase in water temperature" },
              { id: "d", text: "Excess nutrients causing algal blooms and deoxygenation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eutrophication", statement: "Nutrient overload → algal bloom → O₂ depletion." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{nutrients} \\to \\text{algae} \\to \\text{O}_2 \\downarrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Excess nutrients causing algal blooms and deoxygenation",
            commonErrors: ["Choosing 'soil erosion' — that's a different impact."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q2",
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
          id: "cieb-u10-nutrient-cycles-q3",
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
          id: "cieb-u10-nutrient-cycles-q4",
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
          id: "cieb-u10-nutrient-cycles-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What role does photosynthesis play in the carbon cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It breaks down dead organic matter" },
              { id: "b", text: "It removes carbon dioxide from the atmosphere" },
              { id: "c", text: "It converts nitrogen gas into nitrates" },
              { id: "d", text: "It releases carbon dioxide into the atmosphere" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carbon cycle", statement: "Photosynthesis removes CO₂; respiration/decomposition return it." },
            ],
            steps: [
              { reasoning: "Recall the direction of the cycle.", working: "\\text{CO}_2 \\downarrow \\text{ via photosynthesis}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It removes carbon dioxide from the atmosphere",
            commonErrors: ["Choosing respiration — that releases CO₂."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organisms convert atmospheric nitrogen gas (N₂) into usable nitrates in the nitrogen cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Herbivores" },
              { id: "b", text: "Nitrogen-fixing bacteria" },
              { id: "c", text: "Decomposers" },
              { id: "d", text: "Top predators" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen cycle", statement: "N₂ → nitrates by nitrogen-fixing bacteria → plants." },
            ],
            steps: [
              { reasoning: "Recall which group fixes nitrogen.", working: "\\text{nitrogen-fixing bacteria}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nitrogen-fixing bacteria",
            commonErrors: ["Choosing decomposers — they release nitrates but do not fix N₂."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do decomposers release back into the soil and atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only oxygen" },
              { id: "b", text: "Sunlight energy" },
              { id: "c", text: "Glucose" },
              { id: "d", text: "Carbon dioxide and mineral nutrients such as nitrates" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Decomposers", statement: "Release CO₂ and mineral nutrients via respiration and decay." },
            ],
            steps: [
              { reasoning: "Recall their outputs.", working: "\\text{CO}_2 + \\text{mineral nutrients}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Carbon dioxide and mineral nutrients such as nitrates",
            commonErrors: ["Choosing oxygen — decomposers consume oxygen during respiration."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the FIRST step in the process of eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excess nitrates or phosphates enter the water" },
              { id: "b", text: "Water temperature rises" },
              { id: "c", text: "Fish die from lack of oxygen" },
              { id: "d", text: "Plants turn yellow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Nutrient enrichment → algal bloom → O₂ depletion → fish deaths." },
            ],
            steps: [
              { reasoning: "Recall the trigger.", working: "\\text{nutrient enrichment}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Excess nitrates or phosphates enter the water",
            commonErrors: ["Choosing fish deaths — that is the final outcome, not the first step."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is nitrogen often a limiting factor for plant growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen is poisonous to all plants" },
              { id: "b", text: "Plants cannot use atmospheric N₂ directly and rely on nitrates in soil" },
              { id: "c", text: "Nitrogen is too abundant in soil" },
              { id: "d", text: "Plants do not need nitrogen at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen limitation", statement: "Plants use nitrate/nitrite forms, not atmospheric N₂." },
            ],
            steps: [
              { reasoning: "Recall why nitrogen limits growth.", working: "\\text{N}_2 \\text{ unusable by plants}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Plants cannot use atmospheric N₂ directly and rely on nitrates in soil",
            commonErrors: ["Saying 'plants need no nitrogen' — nitrogen is essential for proteins/DNA."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an abiotic factor affecting a plant population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competition for space" },
              { id: "b", text: "Disease spread" },
              { id: "c", text: "Number of herbivores" },
              { id: "d", text: "Light intensity" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Abiotic factors", statement: "Non-living: light, temperature, water, pH, space." },
            ],
            steps: [
              { reasoning: "Identify the non-living factor.", working: "\\text{non-living}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Light intensity",
            commonErrors: ["Choosing herbivores — that's a biotic factor."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A habitat's carrying capacity is 5000 rabbits. The current population is 2000. How many more rabbits could the habitat support?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3000, unit: "rabbits" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Carrying capacity", statement: "$\\text{headroom} = K - N$" },
            ],
            steps: [
              { reasoning: "Subtract current from capacity.", working: "5000 - 2000 = 3000", marks: 1, markCode: "M" },
            ],
            finalAnswer: "3000 rabbits",
            commonErrors: ["Answering 5000 — that's the total capacity, not the remaining space."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quadrat divided into 50 small squares shows a plant covering 20 squares. Calculate the percentage cover.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage cover", statement: "$\\%\\text{ cover} = \\dfrac{\\text{covered}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Compute covered fraction as a percentage.", working: "\\frac{20}{50} \\times 100 = 40", marks: 1, markCode: "M" },
            ],
            finalAnswer: "40%",
            commonErrors: ["Giving 20/50 = 0.4 without converting to a percentage."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A species is present in 7 out of 10 quadrats placed. Calculate its frequency as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Frequency", statement: "$\\%\\text{ frequency} = \\dfrac{\\text{quadrats with species}}{\\text{total quadrats}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Compute frequency.", working: "\\frac{7}{10} \\times 100 = 70", marks: 1, markCode: "M" },
            ],
            finalAnswer: "70%",
            commonErrors: ["Confusing frequency with percentage cover — frequency counts quadrats occupied."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Quadrat sampling gives a mean of 12 daisies per m² quadrat. Estimate the total number of daisies in a field of 2000 m².",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 24000, unit: "daisies" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population estimate", statement: "$\\text{estimate} = \\text{mean per quadrat} \\times \\text{total area}$" },
            ],
            steps: [
              { reasoning: "Scale up from the mean density.", working: "12 \\times 2000 = 24000", marks: 1, markCode: "M" },
            ],
            finalAnswer: "24000 daisies",
            commonErrors: ["Multiplying by the number of quadrats instead of the field area."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the main stages of the nitrogen cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nitrogen cycle", statement: "N₂ → nitrates → plants → animals → decomposers → N₂." },
            ],
            steps: [
              { reasoning: "Nitrogen-fixing bacteria convert N₂ to nitrates.", working: "\\text{N}_2 \\to \\text{nitrates}", marks: 1, markCode: "M" },
              { reasoning: "Plants absorb nitrates and incorporate nitrogen.", working: "\\text{plants absorb}", marks: 1, markCode: "M" },
              { reasoning: "Animals eat plants, passing nitrogen along.", working: "\\text{food chain}", marks: 1, markCode: "M" },
              { reasoning: "Decomposers/nitrifying bacteria return N₂ to atmosphere.", working: "\\text{N}_2 \\text{ released}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nitrogen-fixing bacteria convert atmospheric N₂ to nitrates; plants absorb nitrates; animals obtain nitrogen by eating plants; decomposers and denitrifying bacteria return nitrogen to the atmosphere, completing the cycle.",
            commonErrors: ["Saying 'plants fix nitrogen' — bacteria do the fixing."],
          },
        },
        {
          id: "cieb-u10-nutrient-cycles-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain how eutrophication damages an aquatic ecosystem.",
          parts: [
            { label: "a", prompt: "State the cause of eutrophication.", marks: 3 },
            { label: "b", prompt: "Describe the sequence of events that follows.", marks: 3 },
            { label: "c", prompt: "State the consequences for aquatic life.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Eutrophication", statement: "Nutrients → algal bloom → decomposition uses O₂ → fish deaths." },
            ],
            steps: [
              { part: "a", reasoning: "Excess nitrates/phosphates enter water (fertiliser runoff).", working: "\\text{nutrient runoff}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Usually from fertilisers/sewage.", working: "\\text{fertiliser/sewage}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Concentrations rise above natural levels.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Algae multiply rapidly (bloom).", working: "\\text{algal bloom}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Algae die and decomposers respire.", working: "\\text{decomposition}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Respiration depletes dissolved oxygen.", working: "\\text{O}_2 \\downarrow", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fish and aquatic organisms suffocate.", working: "\\text{fish deaths}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Biodiversity decreases.", working: "\\text{biodiversity loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ecosystem becomes degraded.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) excess nitrates/phosphates from fertiliser runoff or sewage (b) algal bloom → decomposition consumes dissolved oxygen (c) fish and aquatic organisms die; biodiversity falls",
            commonErrors: ["In (b) omitting the decomposition step — the O₂ depletion comes from bacterial respiration."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u10-ecology-notes",
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
