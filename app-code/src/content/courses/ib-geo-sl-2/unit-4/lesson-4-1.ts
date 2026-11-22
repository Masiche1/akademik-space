import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "geo-u4-lesson-4-1",
  code: "4-1",
  title: "Ecosystem Structure and Functioning",
  goal: "I CAN describe ecosystem structure and explain energy flows and nutrient cycles that sustain ecosystems.",
  standards: ["Paper 1", "Paper 2", "Ecosystems"],
  vocabulary: [
    { term: "Ecosystem", definition: "A community of living organisms interacting with each other and their physical environment." },
    { term: "Producer", definition: "An organism that makes its own food by photosynthesis — the base of food chains." },
    { term: "Consumer", definition: "An organism that obtains energy by eating other organisms — primary, secondary or tertiary." },
    { term: "Decomposer", definition: "Organisms (bacteria, fungi) that break down dead matter, recycling nutrients." },
    { term: "Trophic level", definition: "A feeding position in an ecosystem — producers, primary, secondary or tertiary consumers." },
    { term: "Nutrient cycle", definition: "The movement of essential elements (carbon, nitrogen, phosphorus) through living and non-living parts of an ecosystem." },
  ],
  concepts: [
    {
      id: "geo-u4-ecosystem-structure",
      title: "Ecosystem structure",
      skill: "Describe the components of an ecosystem and the structure of food chains, webs and pyramids.",
      lesson: {
        sections: [
          {
            heading: "Components",
            body: "An ecosystem has **biotic** components (producers, consumers, decomposers) and **abiotic** components (sunlight, water, soil, temperature, nutrients). **Producers** (plants, algae) capture solar energy via photosynthesis. **Consumers** eat other organisms at successive **trophic levels**. **Decomposers** break down dead organic matter, returning nutrients to the soil.",
          },
          {
            heading: "Food chains, webs and pyramids",
            body: "A **food chain** shows linear energy transfer: grass → grasshopper → frog → snake. Real ecosystems form **food webs** with interconnections. **Ecological pyramids** show numbers, biomass or energy per trophic level — always decreasing upward because ~90% of energy is lost as heat at each transfer.",
          },
          {
            heading: "Energy flow",
            body: "Energy flows one way: sunlight → producers → consumers → decomposers, with losses as heat at each step. Only ~10% transfers between trophic levels. This explains why top predators are rare and why ecosystems need constant solar input — energy does not recycle.",
          },
        ],
        keyFormulas: [
          { name: "Trophic levels", statement: "Producers → primary consumers → secondary consumers → tertiary consumers" },
          { name: "Energy transfer", statement: "~10% of energy passes to next trophic level; ~90% lost as heat" },
          { name: "Pyramid of energy", statement: "Always upright — energy decreases at each level" },
        ],
        workedExample: {
          problem: "Why are there fewer top predators than herbivores in an ecosystem?",
          solution: "Because only ~10% of energy transfers between trophic levels. Producers capture all solar energy; herbivores get ~10% of that; carnivores get ~10% of herbivore energy; top predators get ~1% of the original. The energy 'pyramid' narrows steeply, so each higher level supports fewer individuals.",
        },
      },
      questions: [
        {
          id: "geo-u4-esq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an ecosystem, decomposers:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hunt other animals for energy" },
              { id: "b", text: "Absorb sunlight directly" },
              { id: "c", text: "Break down dead matter and recycle nutrients" },
              { id: "d", text: "Produce food by photosynthesis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposer", statement: "Organism (bacteria, fungi) that breaks down dead organic matter, recycling nutrients." },
            ],
            steps: [
              { reasoning: "Decomposers recycle nutrients from dead matter back to the soil.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Break down dead matter, recycle nutrients",
            commonErrors: ["Confusing decomposers with consumers — they don't eat living prey."],
          },
        },
        {
          id: "geo-u4-esq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the trophic levels in a food chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Trophic levels", statement: "Producers → primary consumers (herbivores) → secondary consumers (carnivores) → tertiary consumers (top predators)." },
            ],
            steps: [
              { reasoning: "Producers (plants) form the base, capturing solar energy.", marks: 1, markCode: "M" },
              { reasoning: "Primary consumers eat producers; secondary consumers eat primary consumers.", marks: 1, markCode: "M" },
              { reasoning: "Tertiary/top consumers occupy the highest trophic level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Producers → herbivores → carnivores → top predators, each level losing ~90% energy.",
            commonErrors: ["Reversing the order — producers are always at the base."],
          },
        },
        {
          id: "geo-u4-esq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why energy pyramids are always upright while biomass pyramids may be inverted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pyramid shapes", statement: "Energy always decreases upward (~10% transfer); biomass can invert if lower levels turn over rapidly." },
            ],
            steps: [
              { reasoning: "Energy flows one way with ~90% loss as heat at each level — always decreasing.", marks: 1, markCode: "M" },
              { reasoning: "Biomass can be inverted if producers reproduce faster than they're eaten (e.g. phytoplankton).", marks: 1, markCode: "M" },
              { reasoning: "Phytoplankton have huge productivity but tiny individual biomass at any instant.", marks: 1, markCode: "R" },
              { reasoning: "So a pond can have more consumer biomass than producer biomass at one moment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy always decreases (~10% rule); biomass can invert when lower levels turn over rapidly.",
            commonErrors: ["Claiming all pyramids have the same shape — only energy pyramids are always upright."],
          },
        },
        {
          id: "geo-u4-esq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the structure and functioning of a named ecosystem.",
          parts: [
            { label: "a", prompt: "Identify the named ecosystem and its key components.", marks: 2 },
            { label: "b", prompt: "Explain its energy flow and nutrient cycling.", marks: 3 },
            { label: "c", prompt: "Evaluate threats to the ecosystem's functioning.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ecosystem functioning", statement: "Ecosystems depend on energy flow (one-way) and nutrient cycling (recycled); disruption of either threatens function." },
            ],
            steps: [
              { part: "a", reasoning: "Named ecosystem (e.g. tropical rainforest, coral reef, wetland) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Key biotic and abiotic components described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy flow: producers → consumers → decomposers with losses explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Nutrient cycle: carbon/nitrogen/phosphorus recycled via decomposers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Processes accurately described for the named ecosystem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Threat: deforestation, pollution, climate change, invasive species.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mechanism: how threat disrupts energy flow or nutrient cycling.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on severity and reversibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named ecosystem + components. (b) Energy flow + nutrient cycling. (c) Threats evaluated.",
            commonErrors: ["Generic ecosystem description without specific detail."],
          },
        },
        {
          id: "geo-u4-esq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the food chain grass → grasshopper → frog → snake, the snake occupies which trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producer" },
              { id: "b", text: "Secondary consumer" },
              { id: "c", text: "Primary consumer" },
              { id: "d", text: "Tertiary consumer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic level", statement: "Feeding position: producers → primary → secondary → tertiary consumers." },
            ],
            steps: [
              { reasoning: "Grass is the producer; grasshopper is primary, frog is secondary, so snake is tertiary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Tertiary consumer",
            commonErrors: ["Counting the producer as a consumer level."],
          },
        },
        {
          id: "geo-u4-esq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A food web differs from a food chain because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excludes decomposers entirely" },
              { id: "b", text: "Shows only one feeding path" },
              { id: "c", text: "Only applies to marine ecosystems" },
              { id: "d", text: "Includes interconnections between multiple feeding paths" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food web", statement: "Interconnected feeding relationships showing many food chains in an ecosystem." },
            ],
            steps: [
              { reasoning: "Real ecosystems have many overlapping feeding relationships.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Interconnected feeding paths",
            commonErrors: ["Thinking food webs are simpler than chains — they are more complex."],
          },
        },
        {
          id: "geo-u4-esq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Energy in an ecosystem moves in only one direction because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is lost as heat at each trophic transfer and cannot be reused" },
              { id: "b", text: "Energy is recycled by decomposers back to producers" },
              { id: "c", text: "Producers only photosynthesise at night" },
              { id: "d", text: "Consumers store all energy permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy flow", statement: "Energy flows one way; ~90% is lost as heat at each transfer and cannot be recycled." },
            ],
            steps: [
              { reasoning: "Unlike nutrients, energy is not recycled — it degrades to heat.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Energy lost as heat, cannot be reused",
            commonErrors: ["Confusing energy flow with nutrient cycling — nutrients recycle, energy does not."],
          },
        },
        {
          id: "geo-u4-esq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best explains why top predators are rare compared with herbivores?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Herbivores have no predators at all" },
              { id: "b", text: "Only ~1% of original producer energy reaches the top level" },
              { id: "c", text: "Top predators reproduce faster but die younger" },
              { id: "d", text: "Predators need no energy to hunt" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "10% rule", statement: "~10% of energy transfers between trophic levels; top predators get ~1% of original energy." },
            ],
            steps: [
              { reasoning: "Repeated ~90% losses shrink the energy available at higher levels.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ~1% of producer energy reaches top level",
            commonErrors: ["Ignoring the cumulative losses across multiple trophic levels."],
          },
        },
        {
          id: "geo-u4-esq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A pyramid of numbers can be inverted (wider at the top) in which situation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lake supporting many phytoplankton" },
              { id: "b", text: "A grassland supporting many herbivores" },
              { id: "c", text: "An ocean supporting many fish" },
              { id: "d", text: "A single tree supporting many insects and birds" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Pyramid of numbers", statement: "Can invert when one large producer supports many small consumers (e.g. tree → insects)." },
            ],
            steps: [
              { reasoning: "One tree (one producer) can support thousands of insects — more consumers than producers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** One tree supporting many insects",
            commonErrors: ["Assuming all pyramids are upright — only energy pyramids always are."],
          },
        },
        {
          id: "geo-u4-esq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Producers capture $10{,}000$ kJ of solar energy. Using the $\\sim 10\\%$ transfer rule, how much energy reaches secondary consumers?",
          response: { type: "numeric", parts: [{ label: "Energy at secondary consumers (kJ)", answer: 100, tolerance: 0, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trophic transfer", statement: "$E_{next}=0.10 \\times E_{current}$ at each level." },
            ],
            steps: [
              { reasoning: "Primary consumers receive $10\\%$ of $10{,}000 = 1{,}000$ kJ.", working: "0.10 \\times 10{,}000 = 1{,}000", marks: 1, markCode: "M" },
              { reasoning: "Secondary consumers receive $10\\%$ of $1{,}000 = 100$ kJ.", working: "0.10 \\times 1{,}000 = 100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ kJ",
            commonErrors: ["Applying the 10% rule only once instead of twice."],
          },
        },
        {
          id: "geo-u4-esq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Herbivores consume $5{,}000$ kJ of producer energy. How much energy is lost as heat at this trophic transfer (assuming the standard rule)?",
          response: { type: "numeric", parts: [{ label: "Energy lost as heat (kJ)", answer: 4500, tolerance: 0, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy loss", statement: "$\\sim 90\\%$ of energy is lost as heat at each trophic transfer." },
            ],
            steps: [
              { reasoning: "Only $10\\%$ is transferred, so $90\\%$ is lost.", working: "0.90 \\times 5{,}000 = 4{,}500", marks: 1, markCode: "M" },
              { reasoning: "Heat loss $= 4{,}500$ kJ.", working: "5{,}000 - 500 = 4{,}500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4{,}500$ kJ",
            commonErrors: ["Calculating the transferred amount (500 kJ) instead of the loss."],
          },
        },
        {
          id: "geo-u4-esq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A food chain is algae → zooplankton → small fish → tuna. How many trophic levels does it contain?",
          response: { type: "numeric", parts: [{ label: "Number of trophic levels", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trophic level", statement: "Each feeding position in a food chain counts as one level, including producers." },
            ],
            steps: [
              { reasoning: "Algae (producer) = level 1, zooplankton = 2, small fish = 3, tuna = 4.", working: "1 \\to 2 \\to 3 \\to 4", marks: 1, markCode: "M" },
              { reasoning: "Four levels in total.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ trophic levels",
            commonErrors: ["Counting only consumers and excluding the producer."],
          },
        },
        {
          id: "geo-u4-esq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a grassland, producers capture $20{,}000$ kJ. Herbivores transfer energy to carnivores with the standard rule. How much energy reaches tertiary consumers?",
          response: { type: "numeric", parts: [{ label: "Energy at tertiary consumers (kJ)", answer: 20, tolerance: 0, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trophic transfer", statement: "$E_{next}=0.10 \\times E_{current}$ at each level." },
            ],
            steps: [
              { reasoning: "Producers → herbivores: $0.10 \\times 20{,}000 = 2{,}000$ kJ.", working: "0.10 \\times 20{,}000 = 2{,}000", marks: 1, markCode: "M" },
              { reasoning: "Herbivores → carnivores: $0.10 \\times 2{,}000 = 200$ kJ.", working: "0.10 \\times 2{,}000 = 200", marks: 1, markCode: "M" },
              { reasoning: "Carnivores → tertiary: $0.10 \\times 200 = 20$ kJ.", working: "0.10 \\times 200 = 20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ kJ",
            commonErrors: ["Stopping after two transfers or applying 10% only once."],
          },
        },
        {
          id: "geo-u4-esq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A meadow has $1{,}000{,}000$ grass plants supporting $10{,}000$ rabbits. What is the ratio of producers to primary consumers (producers per consumer)?",
          response: { type: "numeric", parts: [{ label: "Producers per primary consumer", answer: 100, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Population ratio", statement: "Ratio $=$ number of producers $\\div$ number of consumers at the next level." },
            ],
            steps: [
              { reasoning: "Divide producers by primary consumers.", working: "1{,}000{,}000 \\div 10{,}000", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 100$ producers per consumer.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100 : 1$ (producers : consumers)",
            commonErrors: ["Inverting the ratio — the question asks producers per consumer."],
          },
        },
        {
          id: "geo-u4-esq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A pond's producers fix $50{,}000$ kJ of energy per year. Decomposers receive dead organic matter but cannot return energy to the living pyramid. If $4{,}000$ kJ is stored as biomass in herbivores, what percentage of producer energy was transferred to herbivores?",
          response: { type: "numeric", parts: [{ label: "Percentage transferred (%)", answer: 8, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Transfer efficiency", statement: "Efficiency $= \\frac{\\text{energy at next level}}{\\text{energy at current level}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Divide herbivore biomass energy by producer fixation.", working: "\\frac{4{,}000}{50{,}000} = 0.08", marks: 1, markCode: "M" },
              { reasoning: "Convert the decimal to a percentage.", working: "0.08 \\times 100 = 8\\%", marks: 1, markCode: "M" },
              { reasoning: "Transfer efficiency is $8\\%$ — below the typical $10\\%$ rule.", working: "8\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8\\%$",
            commonErrors: ["Forgetting to multiply by 100 to express the answer as a percentage."],
          },
        },
        {
          id: "geo-u4-esq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the structure and functioning of a food web in a named habitat.",
          parts: [
            { label: "a", prompt: "Identify the habitat and describe its trophic structure.", marks: 2 },
            { label: "b", prompt: "Explain energy flow and the role of decomposers.", marks: 3 },
            { label: "c", prompt: "Evaluate the resilience of the food web to the removal of a key species.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food web resilience", statement: "Interconnected webs buffer species loss better than simple chains; keystone species removal can cascade." },
            ],
            steps: [
              { part: "a", reasoning: "Named habitat (e.g. kelp forest, savanna) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Trophic levels and feeding relationships described accurately.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Energy flows one way with ~10% transfer and ~90% heat loss.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Decomposers break down dead matter, recycling nutrients (not energy).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Roles accurately applied to the named habitat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interconnections provide alternative pathways — buffering loss.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Keystone species or trophic cascades may still cause collapse.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on overall resilience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Habitat + trophic structure. (b) Energy flow + decomposers. (c) Resilience evaluated.",
            commonErrors: ["Describing a simple chain when the question asks about a web."],
          },
        },
      ],
    },
    {
      id: "geo-u4-nutrient-cycles",
      title: "Nutrient cycles",
      skill: "Explain the carbon, nitrogen and phosphorus cycles and how human activity disrupts them.",
      lesson: {
        sections: [
          {
            heading: "Carbon cycle",
            body: "Carbon moves between atmosphere (CO2), oceans, biomass and soil through **photosynthesis** (uptake), **respiration** and **decomposition** (release), and **combustion** (fossil fuels). Human burning of fossil fuels adds carbon faster than natural sinks can absorb — driving climate change.",
          },
          {
            heading: "Nitrogen cycle",
            body: "Atmospheric nitrogen (78%) is unusable directly. **Nitrogen fixation** (bacteria, lightning) converts it to nitrates; plants absorb nitrates; animals get nitrogen by eating plants; **denitrification** returns it to the atmosphere. Human **fertiliser production** (Haber process) adds reactive nitrogen — causing eutrophication when runoff reaches water.",
          },
          {
            heading: "Phosphorus cycle and disruption",
            body: "Phosphorus cycles through rocks → soil → plants → animals → decomposers, with no gaseous phase. Mining of phosphate rock for fertiliser short-circuits the slow natural cycle. Excess phosphorus runoff causes **eutrophication** — algal blooms that deplete oxygen and kill aquatic life.",
          },
        ],
        keyFormulas: [
          { name: "Carbon cycle", statement: "Photosynthesis absorbs CO2; respiration/decomposition/combustion release it" },
          { name: "Nitrogen fixation", statement: "Bacteria/lightning convert N2 to usable nitrates" },
          { name: "Eutrophication", statement: "Excess N/P → algal bloom → deoxygenation → fish kills" },
        ],
        workedExample: {
          problem: "Explain how fertiliser use disrupts nutrient cycles.",
          solution: "Synthetic fertilisers add reactive nitrogen and mined phosphate to soils far faster than natural cycles supply them. Rain washes excess into rivers and lakes, causing eutrophication — algal blooms that deplete oxygen, kill fish and create dead zones. This is a classic example of human activity overwhelming a natural cycle.",
        },
      },
      questions: [
        {
          id: "geo-u4-nq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Nitrogen fixation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The burning of fossil fuels releasing nitrogen" },
              { id: "b", text: "Absorption of nitrogen by animal lungs" },
              { id: "c", text: "The release of nitrogen gas to the atmosphere" },
              { id: "d", text: "Conversion of atmospheric N2 to usable nitrates by bacteria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nitrogen fixation", statement: "Conversion of atmospheric nitrogen gas to usable nitrates by bacteria or lightning." },
            ],
            steps: [
              { reasoning: "Nitrogen fixation makes atmospheric N2 available to plants.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** N2 → nitrates by bacteria",
            commonErrors: ["Confusing fixation with denitrification — one adds, the other removes nitrogen."],
          },
        },
        {
          id: "geo-u4-nq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the role of decomposers in nutrient cycling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Decomposer role", statement: "Break down dead organic matter, releasing nutrients (carbon, nitrogen, phosphorus) back to soil/water." },
            ],
            steps: [
              { reasoning: "Decomposers (bacteria, fungi) digest dead plants and animals.", marks: 1, markCode: "M" },
              { reasoning: "They release inorganic nutrients back into soil and water for reuse by producers.", marks: 1, markCode: "M" },
              { reasoning: "Without decomposers, nutrients would remain locked in dead matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decomposers break down dead matter, returning nutrients to the environment for reuse.",
            commonErrors: ["Thinking decomposers destroy nutrients — they recycle them."],
          },
        },
        {
          id: "geo-u4-nq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how human activity disrupts the nitrogen cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nitrogen disruption", statement: "Fertiliser production and fossil fuel burning add reactive nitrogen far faster than natural cycles can process it." },
            ],
            steps: [
              { reasoning: "Haber process fixes nitrogen industrially for fertiliser — doubling natural fixation rates.", marks: 1, markCode: "M" },
              { reasoning: "Fossil fuel combustion releases nitrogen oxides into the atmosphere.", marks: 1, markCode: "M" },
              { reasoning: "Excess nitrogen runs off into water bodies → eutrophication → algal blooms → dead zones.", marks: 1, markCode: "R" },
              { reasoning: "Also contributes to air pollution (smog) and greenhouse gas (N2O) emissions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Industrial nitrogen fixation and combustion overload natural cycles, causing eutrophication and pollution.",
            commonErrors: ["Ignoring the scale — human nitrogen fixation now exceeds natural rates."],
          },
        },
        {
          id: "geo-u4-nq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the carbon cycle and how human activity has altered it.",
          parts: [
            { label: "a", prompt: "Describe the main processes of the natural carbon cycle.", marks: 2 },
            { label: "b", prompt: "Explain how human activity has disrupted the cycle.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of this disruption.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carbon cycle disruption", statement: "Fossil fuel combustion and deforestation add CO2 faster than sinks can absorb — driving climate change." },
            ],
            steps: [
              { part: "a", reasoning: "Photosynthesis absorbs CO2; respiration/decomposition release it — natural balance.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Oceans and forests act as carbon sinks storing carbon long-term.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fossil fuel combustion releases stored carbon rapidly into atmosphere.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deforestation removes sinks and releases stored carbon via burning/decay.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Result: atmospheric CO2 rising faster than sinks can absorb.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consequence: enhanced greenhouse effect → global warming → climate change.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Secondary: ocean acidification, ecosystem shifts, extreme weather.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on severity and reversibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Natural carbon processes. (b) Fossil fuels + deforestation disruption. (c) Climate change consequences.",
            commonErrors: ["Treating the carbon cycle as only natural — human disruption is the key point."],
          },
        },
        {
          id: "geo-u4-nq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which process removes carbon dioxide from the atmosphere in the carbon cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combustion of fossil fuels" },
              { id: "b", text: "Decomposition of dead matter" },
              { id: "c", text: "Animal respiration" },
              { id: "d", text: "Photosynthesis by plants" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Photosynthesis", statement: "Process by which plants absorb CO2 and convert it into organic compounds using sunlight." },
            ],
            steps: [
              { reasoning: "Photosynthesis is the main biological sink for atmospheric CO2.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Photosynthesis",
            commonErrors: ["Confusing carbon uptake (photosynthesis) with release (respiration, combustion)."],
          },
        },
        {
          id: "geo-u4-nq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Denitrification is the process by which:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lightning fixes atmospheric nitrogen into nitrates" },
              { id: "b", text: "Bacteria convert nitrates back to atmospheric nitrogen gas" },
              { id: "c", text: "Animals release nitrogen through urine" },
              { id: "d", text: "Plants absorb nitrates from soil" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denitrification", statement: "Bacterial conversion of soil nitrates back to atmospheric N2, completing the nitrogen cycle." },
            ],
            steps: [
              { reasoning: "Denitrification returns nitrogen to the atmosphere as N2 gas.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Nitrates → N2 gas by bacteria",
            commonErrors: ["Confusing denitrification with nitrogen fixation — opposite directions."],
          },
        },
        {
          id: "geo-u4-nq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The phosphorus cycle differs from the carbon and nitrogen cycles because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is driven mainly by lightning" },
              { id: "b", text: "Cannot be absorbed by plants" },
              { id: "c", text: "Moves entirely through the atmosphere" },
              { id: "d", text: "Has no gaseous phase — it cycles through rocks, soil and organisms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Phosphorus cycle", statement: "No atmospheric phase; phosphorus moves slowly through rocks → soil → plants → animals → decomposers." },
            ],
            steps: [
              { reasoning: "Phosphorus lacks a gaseous phase, cycling slowly through the lithosphere and biosphere.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** No gaseous phase; cycles via rocks and soil",
            commonErrors: ["Assuming all nutrient cycles have an atmospheric phase."],
          },
        },
        {
          id: "geo-u4-nq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Eutrophication of a lake is most directly caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduced sunlight reaching the lake bed" },
              { id: "b", text: "Introduction of top predators" },
              { id: "c", text: "Increased water temperature alone" },
              { id: "d", text: "Excess nitrogen and phosphorus entering the water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eutrophication", statement: "Excess nutrients (N/P) → algal bloom → decomposition → oxygen depletion → fish kills." },
            ],
            steps: [
              { reasoning: "Nutrient enrichment triggers algal blooms that deplete oxygen.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Excess N and P",
            commonErrors: ["Describing the algal bloom without identifying the nutrient cause."],
          },
        },
        {
          id: "geo-u4-nq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does burning fossil fuels disrupt the carbon cycle more than a volcanic eruption of similar CO2 volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fossil fuels release nitrogen instead of carbon" },
              { id: "b", text: "Fossil fuel carbon was stored for millions of years, overwhelming current sinks" },
              { id: "c", text: "Volcanic CO2 is absorbed instantly by oceans" },
              { id: "d", text: "Volcanoes emit no carbon dioxide at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carbon sink capacity", statement: "Fossil carbon stored over geological time is released faster than natural sinks (forests, oceans) can absorb it." },
            ],
            steps: [
              { reasoning: "Geologically stored carbon enters the atmosphere far faster than sinks can remove it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rate exceeds sink capacity",
            commonErrors: ["Focusing on total CO2 rather than the rate of release vs absorption."],
          },
        },
        {
          id: "geo-u4-nq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Atmospheric nitrogen makes up approximately what percentage of the air?",
          response: { type: "numeric", parts: [{ label: "Percentage of N2 in air (%)", answer: 78, tolerance: 1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Atmospheric composition", statement: "Nitrogen gas comprises ~78% of the atmosphere." },
            ],
            steps: [
              { reasoning: "Recall the standard atmospheric composition figure.", working: "78\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer approximately $78\\%$.", working: "78", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 78\\%$",
            commonErrors: ["Confusing nitrogen with oxygen (~21%) or CO2 (~0.04%)."],
          },
        },
        {
          id: "geo-u4-nq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A lake receives $60$ tonnes of nitrogen and $20$ tonnes of phosphorus from fertiliser runoff in one year. What is the ratio of nitrogen to phosphorus (by mass)?",
          response: { type: "numeric", parts: [{ label: "N : P ratio", answer: 3, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mass ratio", statement: "Ratio $=$ mass of N $\\div$ mass of P." },
            ],
            steps: [
              { reasoning: "Set up the ratio of the two nutrient inputs.", working: "60 : 20", marks: 1, markCode: "M" },
              { reasoning: "Simplify by dividing both by 20.", working: "60 \\div 20 = 3", marks: 1, markCode: "M" },
              { reasoning: "The simplified ratio is $3 : 1$.", working: "3 : 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 : 1$ (N : P)",
            commonErrors: ["Leaving the ratio unsimplified as $60:20$ without recognising $3:1$."],
          },
        },
        {
          id: "geo-u4-nq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what share of global freshwater withdrawals does agriculture use?",
          response: { type: "numeric", parts: [{ label: "Share of freshwater used by agriculture (%)", answer: 70, tolerance: 5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Agricultural water use", statement: "Agriculture accounts for ~70% of global freshwater withdrawals." },
            ],
            steps: [
              { reasoning: "Recall the dominant share of agricultural water use.", working: "70\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 70\\%$.", working: "70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 70\\%$",
            commonErrors: ["Underestimating agriculture's share of water use."],
          },
        },
        {
          id: "geo-u4-nq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A forest ecosystem absorbs $120$ million tonnes of CO2 per year, but deforestation and combustion add $150$ million tonnes. What is the annual net change in atmospheric carbon (in million tonnes CO2)?",
          response: { type: "numeric", parts: [{ label: "Net atmospheric change (million tonnes CO2)", answer: 30, tolerance: 0, unit: "million tonnes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Net carbon flux", statement: "$\\text{Net} = \\text{emissions} - \\text{uptake}$; positive means atmospheric CO2 rises." },
            ],
            steps: [
              { reasoning: "Emissions exceed uptake by the difference.", working: "150 - 120", marks: 1, markCode: "M" },
              { reasoning: "Net change is $+30$ million tonnes.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "Atmospheric CO2 increases by 30 million tonnes that year.", working: "+30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+30$ million tonnes CO2 (atmosphere gains)",
            commonErrors: ["Subtracting in the wrong order or ignoring the sign convention."],
          },
        },
        {
          id: "geo-u4-nq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Roughly what percentage of the food produced globally is estimated to be wasted?",
          response: { type: "numeric", parts: [{ label: "Share of food wasted (%)", answer: 33, tolerance: 5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Food waste", statement: "About one-third (~33%) of food produced is wasted." },
            ],
            steps: [
              { reasoning: "Recall the commonly cited food waste figure.", working: "\\frac{1}{3} \\approx 33\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 33\\%$ (accept $\\sim 30\\%$).", working: "33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 33\\%$ (about one-third)",
            commonErrors: ["Confusing food waste with food loss in supply chains."],
          },
        },
        {
          id: "geo-u4-nq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A region's nitrogen fixation (natural + industrial) totals $12$ million tonnes of N per year, while denitrification returns $9$ million tonnes. By how much does the reactive nitrogen pool grow annually?",
          response: { type: "numeric", parts: [{ label: "Annual growth of reactive N pool (million tonnes)", answer: 9, tolerance: 0, unit: "million tonnes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Nitrogen balance", statement: "$\\text{Pool change} = \\text{fixation} - \\text{denitrification}$." },
            ],
            steps: [
              { reasoning: "Subtract denitrification losses from fixation inputs.", working: "12 - 9", marks: 1, markCode: "M" },
              { reasoning: "The reactive nitrogen pool grows by $3$ million tonnes per year.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "A net positive balance indicates accumulation of reactive nitrogen.", working: "3 \\text{ million tonnes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ million tonnes N per year",
            commonErrors: ["Reversing the subtraction and reporting a negative growth."],
          },
        },
        {
          id: "geo-u4-nq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the phosphorus cycle and the consequences of human disruption.",
          parts: [
            { label: "a", prompt: "Describe how phosphorus moves through a natural ecosystem.", marks: 2 },
            { label: "b", prompt: "Explain how phosphate mining and fertiliser use alter the cycle.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences for aquatic ecosystems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phosphorus disruption", statement: "Mining short-circuits the slow rock-based cycle; excess P causes eutrophication." },
            ],
            steps: [
              { part: "a", reasoning: "Phosphorus weathers from rocks into soil, is absorbed by plants, passed to animals and returned by decomposers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No gaseous phase — cycle is slow and sediment-based.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Phosphate mining extracts rock phosphorus at rates far exceeding natural weathering.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fertiliser application adds soluble P to soils, much of which runs off to water.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Result: phosphorus inputs exceed the slow natural supply rate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Excess P triggers algal blooms that block light and deplete oxygen.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Decomposition of blooms creates dead zones and fish kills.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on severity and reversibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rock→soil→plants→animals→decomposers. (b) Mining + fertiliser accelerate inputs. (c) Eutrophication consequences.",
            commonErrors: ["Describing eutrophication without linking it to disrupted phosphorus inputs."],
          },
        },
      ],
    },
  ],
};
