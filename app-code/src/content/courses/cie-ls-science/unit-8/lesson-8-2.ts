import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "cils-u8-lesson-8-2",
  code: "8-2",
  title: "Ecosystems and environmental issues",
  goal: "I CAN describe ecosystems, food webs, human impact and sustainability.",
  standards: ["0893 Biology: ecology"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms + their environment interacting." },
    { term: "Habitat", definition: "Place where organism lives." },
    { term: "Biodiversity", definition: "Variety of life in an ecosystem." },
    { term: "Food web", definition: "Interconnected food chains showing energy flow." },
    { term: "Decomposer", definition: "Breaks down dead matter — bacteria, fungi." },
    { term: "Sustainability", definition: "Using resources without depleting them for future." },
  ],
  concepts: [
    {
      id: "cils-u8-ecosystems",
      title: "Ecosystems",
      skill: "Describe ecosystem components, energy flow and biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem components",
            body: "Producers (plants) → consumers (herbivores, carnivores, omnivores) → decomposers (bacteria, fungi). Abiotic: sunlight, water, soil, air.",
          },
          {
            heading: "Energy flow",
            body: "Sun → producers (photosynthesis) → herbivores → carnivores. ~10% energy transferred each level — pyramid shape.",
          },
          {
            heading: "Biodiversity",
            body: "Variety of species, genes, ecosystems. Higher biodiversity = more stable ecosystem — resistant to change.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Producers→consumers→decomposers; ~10% energy per level; biodiversity = stability." },
        ],
        workedExample: {
          problem: "Why are top predators rare?",
          solution: "Only ~10% energy transfers each level — need huge energy input to support few predators.",
        },
      },
      questions: [
        {
          id: "cils-u8-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just animals" },
              { id: "b", text: "Community of organisms + environment" },
              { id: "c", text: "Only plants" },
              { id: "d", text: "Weather system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecosystem", statement: "Organisms + environment interacting." },
            ],
            steps: [
              { reasoning: "Ecosystem = biotic + abiotic.", working: "ecosystem", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Community of organisms + environment",
            commonErrors: ["Choosing (b) — includes plants, fungi, environment."],
          },
        },
        {
          id: "cils-u8-eco-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is biodiversity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Variety of life — species, genes, ecosystems." },
            ],
            steps: [
              { reasoning: "Variety of species/life forms.", working: "variety", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Variety of life in an ecosystem — species, genes, ecosystems.",
            commonErrors: ["Saying 'number of animals' — includes all life."],
          },
        },
        {
          id: "cils-u8-eco-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how energy flows through an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy flow", statement: "Sun→producers→consumers→decomposers; ~10% per level." },
            ],
            steps: [
              { reasoning: "Sun provides energy; producers capture via photosynthesis.", working: "producers", marks: 1, markCode: "M" },
              { reasoning: "Consumers eat producers/each other — energy transfers.", working: "consumers", marks: 1, markCode: "M" },
              { reasoning: "~90% lost as heat each level — only ~10% transfers.", working: "10%", marks: 1, markCode: "M" },
              { reasoning: "Flow explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sun→producers→consumers→decomposers; ~10% energy per level.",
            commonErrors: ["Saying 'energy cycles' — it flows one way."],
          },
        },
        {
          id: "cils-u8-eco-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate an ecosystem.",
          parts: [
            { label: "a", prompt: "Define ecosystem and habitat.", marks: 2 },
            { label: "b", prompt: "Describe trophic levels.", marks: 3 },
            { label: "c", prompt: "Explain role of decomposers.", marks: 2 },
            { label: "d", prompt: "Why is biodiversity important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ecosystems", statement: "Producers/consumers/decomposers; biodiversity=stability." },
            ],
            steps: [
              { part: "a", reasoning: "Ecosystem=organisms+environment; habitat=where organism lives.", working: "definitions", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Producers→herbivores→carnivores→top predators; decomposers recycle.", working: "levels", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Break down dead matter → release nutrients → recycle elements.", working: "decomposers", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "More species = more stable, resistant to change, more resources.", working: "importance", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ecosystem/habitat (b) trophic levels (c) recycle nutrients (d) stability/resilience",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Levels correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Decomposers as 'waste' — they recycle nutrients."],
          },
        },
        {
          id: "cils-u8-eco-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organisms are producers in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Worms" },
              { id: "b", text: "Plants" },
              { id: "c", text: "Lions" },
              { id: "d", text: "Fungi" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Producers", statement: "Plants make food via photosynthesis — base of food chains." }],
            steps: [{ reasoning: "Producers = plants.", working: "plants", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Plants",
          },
        },
        {
          id: "cils-u8-eco-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Decomposers include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bacteria and fungi" },
              { id: "b", text: "Trees and grass" },
              { id: "c", text: "Eagles and sharks" },
              { id: "d", text: "Deer and rabbits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Decomposers", statement: "Bacteria and fungi break down dead matter." }],
            steps: [{ reasoning: "Bacteria/fungi decompose.", working: "bacteria+fungi", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Bacteria and fungi",
          },
        },
        {
          id: "cils-u8-eco-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An herbivore is an animal that eats:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Other animals" },
              { id: "b", text: "Plants only" },
              { id: "c", text: "Dead matter" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Herbivore", statement: "Eats plants — primary consumer." }],
            steps: [{ reasoning: "Herbivore = plant-eater.", working: "plants", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Plants only",
          },
        },
        {
          id: "cils-u8-eco-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "About what percentage of energy transfers from one trophic level to the next?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1%" },
              { id: "b", text: "50%" },
              { id: "c", text: "10%" },
              { id: "d", text: "100%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Energy transfer", statement: "~10% energy passes to next level; ~90% lost as heat." }],
            steps: [{ reasoning: "Only ~10% transfers.", working: "10%", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 10%",
          },
        },
        {
          id: "cils-u8-eco-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A food web differs from a food chain because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excludes predators" },
              { id: "b", text: "Shows interconnected feeding relationships" },
              { id: "c", text: "Only has one path" },
              { id: "d", text: "Shows only plants" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Food web", statement: "Multiple intersecting food chains." }],
            steps: [{ reasoning: "Web = interconnected chains.", working: "interconnected", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Interconnected feeding relationships",
          },
        },
        {
          id: "cils-u8-eco-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is an abiotic factor in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rabbit" },
              { id: "b", text: "A fungus" },
              { id: "c", text: "A tree" },
              { id: "d", text: "Sunlight" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Abiotic", statement: "Non-living factors: sunlight, water, soil, temperature." }],
            steps: [{ reasoning: "Abiotic = non-living.", working: "sunlight", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sunlight",
          },
        },
        {
          id: "cils-u8-eco-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why are top predators usually few in number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They reproduce fastest" },
              { id: "b", text: "They are lazy" },
              { id: "c", text: "They have no food" },
              { id: "d", text: "Little energy reaches the top of the pyramid" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Energy pyramid", statement: "~10% per level → little energy for top predators." }],
            steps: [{ reasoning: "Energy loss limits top predators.", working: "energy", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Little energy reaches top",
          },
        },
        {
          id: "cils-u8-eco-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'biotic' mean? Enter the number only — count how many biotic groups exist in an ecosystem: producers, consumers, decomposers.",
          response: { type: "numeric", parts: [{ label: "Groups", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Biotic groups", statement: "Producers, consumers, decomposers — three groups." }],
            steps: [
              { reasoning: "Count biotic groups.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three groups.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-eco-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 10,000 J of energy reaches plants, roughly how many J reach herbivores (at 10% transfer)? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Energy", answer: 1000, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Energy transfer", statement: "10% of energy passes up each level." }],
            steps: [
              { reasoning: "$10000 \\times 0.10$.", working: "10000 × 0.1", marks: 1, markCode: "M" },
              { reasoning: "$1000\\ \\text{J}$.", working: "1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1000\\ \\text{J}$",
          },
        },
        {
          id: "cils-u8-eco-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A carnivore that eats only other carnivores is at which trophic level counting producers as level 1? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Level", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Trophic levels", statement: "Level 1 producers, 2 herbivores, 3 carnivores, 4 top predators." }],
            steps: [
              { reasoning: "Top predator = level 4.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Level 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u8-eco-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a food chain grass → rabbit → fox, how many links connect producers to top predator? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Links", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Food chain", statement: "Arrows show energy flow: grass→rabbit→fox = 2 transfers." }],
            steps: [
              { reasoning: "Two feeding steps: grass→rabbit, rabbit→fox.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Two links.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u8-eco-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why an ecosystem with high biodiversity is more stable than one with low biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Biodiversity", statement: "More species → more food web links → resistance to change and recovery from disturbance." }],
            steps: [
              { reasoning: "More species = more feeding options in food web.", working: "options", marks: 1, markCode: "M" },
              { reasoning: "If one species declines, others can fill its role.", working: "resilience", marks: 1, markCode: "M" },
              { reasoning: "Ecosystem resists disease, climate change, disturbance better.", working: "stable", marks: 1, markCode: "M" },
              { reasoning: "Clear reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High biodiversity gives backup species and feeding links → greater stability and recovery.",
          },
        },
      ],
    },
    {
      id: "cils-u8-human-impact",
      title: "Human impact and sustainability",
      skill: "Describe human effects on environment and sustainable practices.",
      lesson: {
        sections: [
          {
            heading: "Human impacts",
            body: "Deforestation, pollution (air/water/land), climate change, habitat loss, overfishing, waste. Each affects biodiversity and ecosystems.",
          },
          {
            heading: "Climate change",
            body: "Greenhouse gases (CO₂, methane) trap heat → global warming → sea level rise, extreme weather, species loss.",
          },
          {
            heading: "Sustainability",
            body: "Renewable energy, recycling, reducing waste, sustainable farming, conservation. Meet needs without compromising future.",
          },
        ],
        keyFormulas: [
          { name: "Sustainability", statement: "Meet present needs without harming future — reduce, reuse, recycle." },
        ],
        workedExample: {
          problem: "How does deforestation affect climate?",
          solution: "Trees absorb CO₂ — cutting them reduces carbon sink AND releases stored carbon → more greenhouse gases.",
        },
      },
      questions: [
        {
          id: "cils-u8-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is deforestation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recycling" },
              { id: "b", text: "Clearing forests" },
              { id: "c", text: "Planting trees" },
              { id: "d", text: "Building houses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deforestation", statement: "Clearing/removing forests." },
            ],
            steps: [
              { reasoning: "Deforestation = forest removal.", working: "clearing", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Clearing forests",
            commonErrors: ["Choosing (b) — that's reforestation."],
          },
        },
        {
          id: "cils-u8-impact-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two greenhouse gases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Greenhouse gases", statement: "CO₂, methane, water vapour, nitrous oxide." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "gases", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO₂, methane, water vapour, nitrous oxide (any two).",
            commonErrors: ["Saying 'oxygen' — that's not a greenhouse gas."],
          },
        },
        {
          id: "cils-u8-impact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how climate change affects ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Climate change", statement: "Rising temps → habitat loss, species extinction, disrupted food chains." },
            ],
            steps: [
              { reasoning: "Higher temps → habitats change/disappear (polar ice melt).", working: "habitat", marks: 1, markCode: "M" },
              { reasoning: "Species can't adapt fast enough → extinction risk.", working: "extinction", marks: 1, markCode: "M" },
              { reasoning: "Food chains disrupted — timing mismatches (e.g. flowers bloom before pollinators arrive).", working: "food chains", marks: 1, markCode: "M" },
              { reasoning: "Multiple effects explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitat loss, species extinction, disrupted food chains — multiple impacts.",
            commonErrors: ["Only mentioning temperature — need ecosystem effects."],
          },
        },
        {
          id: "cils-u8-impact-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate sustainability practices.",
          parts: [
            { label: "a", prompt: "Define sustainability.", marks: 1 },
            { label: "b", prompt: "Name two human environmental impacts.", marks: 2 },
            { label: "c", prompt: "Describe two sustainable practices.", marks: 3 },
            { label: "d", prompt: "Why is sustainability important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustainability", statement: "Meet needs without compromising future — reduce/reuse/recycle." },
            ],
            steps: [
              { part: "a", reasoning: "Using resources without depleting for future generations.", working: "definition", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deforestation, pollution, climate change, habitat loss.", working: "impacts", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two+ valid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Renewable energy, recycling, sustainable farming, conservation.", working: "practices", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two+ valid.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ensures resources for future, protects biodiversity, reduces pollution.", working: "importance", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple reasons.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) meet needs without depleting (b) deforestation/pollution (c) renewables/recycling/conservation (d) future resources/biodiversity",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two+ impacts.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Two+ practices.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple reasons.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Sustainability = just recycling — broader concept."],
          },
        },
        {
          id: "cils-u8-impact-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is the main contributor to the greenhouse effect from human activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen" },
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Greenhouse gases", statement: "CO₂ from burning fossil fuels is the main human greenhouse gas." }],
            steps: [{ reasoning: "CO₂ is main culprit.", working: "CO2", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Carbon dioxide",
          },
        },
        {
          id: "cils-u8-impact-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Overfishing means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growing fish farms" },
              { id: "b", text: "Catching fish faster than they can reproduce" },
              { id: "c", text: "Cleaning oceans" },
              { id: "d", text: "Releasing fish back" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Overfishing", statement: "Harvesting fish beyond sustainable levels." }],
            steps: [{ reasoning: "Overfishing = unsustainable catch.", working: "overfishing", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Catching faster than reproduction",
          },
        },
        {
          id: "cils-u8-impact-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plastic pollution mainly harms marine life by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being ingested or entangling animals" },
              { id: "b", text: "Feeding fish" },
              { id: "c", text: "Adding oxygen" },
              { id: "d", text: "Cooling water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Plastic pollution", statement: "Animals eat or get trapped in plastic debris." }],
            steps: [{ reasoning: "Ingestion/entanglement harm wildlife.", working: "ingest", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Ingested or entangled",
          },
        },
        {
          id: "cils-u8-impact-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar power" },
              { id: "b", text: "Natural gas" },
              { id: "c", text: "Coal" },
              { id: "d", text: "Oil" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Renewable energy", statement: "Solar, wind, hydro, geothermal — naturally replenished." }],
            steps: [{ reasoning: "Solar is renewable.", working: "solar", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Solar power",
          },
        },
        {
          id: "cils-u8-impact-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Cutting down forests increases CO₂ because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil heats up" },
              { id: "b", text: "Trees absorb CO₂ and fewer trees means less absorption plus burning releases CO₂" },
              { id: "c", text: "It makes rain" },
              { id: "d", text: "Forests produce oxygen only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Deforestation", statement: "Loss of carbon sink + burning releases stored carbon." }],
            steps: [{ reasoning: "Two effects: less absorption + release.", working: "carbon", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Less absorption + released CO₂",
          },
        },
        {
          id: "cils-u8-impact-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "'Reduce, reuse, recycle' are principles of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fossil fuels" },
              { id: "b", text: "Pollution" },
              { id: "c", text: "Deforestation" },
              { id: "d", text: "Sustainable waste management" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "3 Rs", statement: "Reduce, reuse, recycle minimise waste." }],
            steps: [{ reasoning: "3 Rs = waste reduction.", working: "3Rs", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sustainable waste management",
          },
        },
        {
          id: "cils-u8-impact-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which human activity releases the MOST greenhouse gases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Walking to school" },
              { id: "b", text: "Planting trees" },
              { id: "c", text: "Recycling paper" },
              { id: "d", text: "Burning fossil fuels for energy and transport" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Fossil fuels", statement: "Combustion of coal/oil/gas releases CO₂." }],
            steps: [{ reasoning: "Fossil fuel burning = biggest source.", working: "fossil", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Burning fossil fuels",
          },
        },
        {
          id: "cils-u8-impact-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of pollution. Enter them separated by a comma.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Pollution types", statement: "Air, water, land/soil pollution." }],
            steps: [
              { reasoning: "Any two of air/water/land.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. air, water",
          },
        },
        {
          id: "cils-u8-impact-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Roughly what percentage of Earth's surface is covered by oceans? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 70 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Oceans", statement: "Oceans cover ~70% of Earth's surface." }],
            steps: [
              { reasoning: "Oceans ≈ 70%.", working: "70", marks: 1, markCode: "M" },
              { reasoning: "Answer ≈ 70%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 70\\%$",
          },
        },
        {
          id: "cils-u8-impact-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many of these are renewable: coal, solar, wind, oil? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Renewables", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Renewables", statement: "Solar and wind are renewable; coal and oil are fossil fuels." }],
            steps: [
              { reasoning: "Solar + wind = 2.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Coal/oil non-renewable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u8-impact-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If a forest has 1000 trees and 200 are cut down, what percentage of trees remain? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 80 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage", statement: "$800/1000 \\times 100 = 80\\%$." }],
            steps: [
              { reasoning: "$800$ remain of $1000$.", working: "800/1000", marks: 1, markCode: "M" },
              { reasoning: "$80\\%$.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\%$",
          },
        },
        {
          id: "cils-u8-impact-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe two ways humans can reduce their environmental impact and make life more sustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sustainability", statement: "Renewable energy, reduce/reuse/recycle, conservation, sustainable transport, waste reduction." }],
            steps: [
              { reasoning: "Use renewable energy instead of fossil fuels.", working: "renewables", marks: 1, markCode: "M" },
              { reasoning: "Reduce/reuse/recycle to cut waste.", working: "waste", marks: 1, markCode: "M" },
              { reasoning: "Conserve habitats, sustainable farming/transport.", working: "conservation", marks: 1, markCode: "M" },
              { reasoning: "Two+ valid practices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. renewable energy + recycling; conservation + sustainable transport.",
          },
        },
      ],
    },
    {
      id: "cils-u8-review",
      title: "Science review and exam skills",
      skill: "Apply scientific knowledge to exam-style questions and practical skills.",
      lesson: {
        sections: [
          {
            heading: "Exam strategy",
            body: "Read questions carefully, show working, check units, use markscheme keywords. For practicals: control variables, repeat readings, analyse data.",
          },
          {
            heading: "Key concepts recap",
            body: "Working scientifically, cells, plants, human body, materials, energy, forces, electricity, Earth, ecosystems — core syllabus coverage.",
          },
          {
            heading: "Practical skills",
            body: "Plan fair tests, identify variables, use equipment safely, record data, draw conclusions, evaluate methods.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Fair tests, variables, data analysis, conclusions — apply scientific method." },
        ],
        workedExample: {
          problem: "How to answer 'explain' questions?",
          solution: "Use scientific terms, give mechanism/reason, link cause to effect, be specific.",
        },
      },
      questions: [
        {
          id: "cils-u8-rev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three types of variables in an experiment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Independent, dependent, controlled" },
              { id: "b", text: "Big, small, medium" },
              { id: "c", text: "Fast, slow, medium" },
              { id: "d", text: "Hot, cold, warm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Variables", statement: "Independent, dependent, controlled." },
            ],
            steps: [
              { reasoning: "Three variable types.", working: "variables", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Independent, dependent, controlled",
            commonErrors: ["Missing controlled — all three needed."],
          },
        },
        {
          id: "cils-u8-rev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do when writing scientific explanations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam technique", statement: "Use scientific terms, explain mechanism, link cause-effect." },
            ],
            steps: [
              { reasoning: "Use correct terminology.", working: "terms", marks: 1, markCode: "M" },
              { reasoning: "Explain mechanism and link cause to effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Use scientific terms, explain mechanism, link cause to effect.",
            commonErrors: ["Just stating facts — need explanation."],
          },
        },
        {
          id: "cils-u8-rev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to evaluate an experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Check reliability, validity, identify errors, suggest improvements." },
            ],
            steps: [
              { reasoning: "Reliability: repeat results consistent?", working: "reliability", marks: 1, markCode: "M" },
              { reasoning: "Validity: did it test what intended?", working: "validity", marks: 1, markCode: "M" },
              { reasoning: "Identify errors/improvements: control variables, better equipment, more repeats.", working: "improvements", marks: 1, markCode: "M" },
              { reasoning: "Evaluation comprehensive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check reliability/validity, identify errors, suggest improvements.",
            commonErrors: ["Only saying 'it worked' — need critical evaluation."],
          },
        },
        {
          id: "cils-u8-rev-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply scientific skills to a practical question.",
          parts: [
            { label: "a", prompt: "How to design a fair test?", marks: 3 },
            { label: "b", prompt: "What data to collect?", marks: 2 },
            { label: "c", prompt: "How to analyse results?", marks: 2 },
            { label: "d", prompt: "How to draw conclusions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific method", statement: "Control variables, collect data, analyse, conclude — systematic approach." },
            ],
            steps: [
              { part: "a", reasoning: "Identify variables, control others, repeat trials, use same equipment.", working: "design", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Method valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Controlled.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dependent variable measurements, repeats, units, table format.", working: "data", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Look for patterns/trends, calculate averages, compare groups.", working: "analysis", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Link results to hypothesis, explain mechanism, acknowledge limitations.", working: "conclusions", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) control variables (b) measure dependent (c) find patterns (d) link to hypothesis",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Design good.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["No controls — unfair test."],
          },
        },
        {
          id: "cils-u8-rev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an experiment, the variable you deliberately change is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Controlled variable" },
              { id: "b", text: "Independent variable" },
              { id: "c", text: "Constant" },
              { id: "d", text: "Dependent variable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Variables", statement: "Independent = what you change; dependent = what you measure." }],
            steps: [{ reasoning: "Independent is changed.", working: "independent", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Independent variable",
          },
        },
        {
          id: "cils-u8-rev-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Repeating an experiment several times improves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost" },
              { id: "b", text: "Reliability" },
              { id: "c", text: "Validity only" },
              { id: "d", text: "Speed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Reliability", statement: "Repeats check consistency of results." }],
            steps: [{ reasoning: "Repeats → reliability.", working: "reliability", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Reliability",
          },
        },
        {
          id: "cils-u8-rev-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A fair test requires that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No measurements are taken" },
              { id: "b", text: "Only the independent variable changes" },
              { id: "c", text: "Everything changes" },
              { id: "d", text: "Results are guessed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Fair test", statement: "Control all variables except the independent one." }],
            steps: [{ reasoning: "Fair = only one variable changes.", working: "one variable", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Only independent variable changes",
          },
        },
        {
          id: "cils-u8-rev-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "When analysing data, you should look for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Patterns and trends" },
              { id: "b", text: "Only the highest value" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "Random noise" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Data analysis", statement: "Identify trends, patterns, averages." }],
            steps: [{ reasoning: "Look for trends.", working: "trends", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Patterns and trends",
          },
        },
        {
          id: "cils-u8-rev-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A conclusion should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the question" },
              { id: "b", text: "Be supported by the data collected" },
              { id: "c", text: "Be a guess" },
              { id: "d", text: "Ignore the results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "Draw from evidence, link to hypothesis." }],
            steps: [{ reasoning: "Conclusion backed by data.", working: "evidence", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Supported by data",
          },
        },
        {
          id: "cils-u8-rev-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which improves an experiment's validity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Measuring what the question actually asks" },
              { id: "b", text: "Guessing results" },
              { id: "c", text: "Using different equipment each time" },
              { id: "d", text: "Changing everything" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Validity", statement: "Test measures what it intends to measure." }],
            steps: [{ reasoning: "Validity = right test.", working: "right test", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Measure what's asked",
          },
        },
        {
          id: "cils-u8-rev-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Anomalous results in data should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hidden" },
              { id: "b", text: "Added without comment" },
              { id: "c", text: "Identified and possibly excluded with justification" },
              { id: "d", text: "Ignored entirely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Anomalies", statement: "Outliers noted; excluded only if justified." }],
            steps: [{ reasoning: "Identify and justify anomalies.", working: "anomaly", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Identified, justify exclusion",
          },
        },
        {
          id: "cils-u8-rev-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many types of variables are there in a controlled experiment? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Variables", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Variables", statement: "Independent, dependent, controlled — three types." }],
            steps: [
              { reasoning: "Count variable types.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-rev-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student repeats an experiment 3 times. What is the minimum number of results? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Results", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Repeats", statement: "Each repeat gives one result — 3 repeats = 3 results minimum." }],
            steps: [
              { reasoning: "3 trials → 3 results.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u8-rev-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Results: 10, 11, 12, 40. What is the anomalous value? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Anomaly", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Anomaly", statement: "40 is far from the cluster 10–12." }],
            steps: [
              { reasoning: "40 stands out from 10–12.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "Anomaly = 40.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
          },
        },
        {
          id: "cils-u8-rev-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If mean of 4 readings is 8, what is their total sum? Enter the number only.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 32 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "$\\text{mean} = \\text{sum} \\div n \\Rightarrow \\text{sum} = 8 \\times 4 = 32$." }],
            steps: [
              { reasoning: "$8 \\times 4$.", working: "8 × 4", marks: 1, markCode: "M" },
              { reasoning: "$32$.", working: "32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32$",
          },
        },
        {
          id: "cils-u8-rev-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between reliability and validity in an experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reliability vs validity", statement: "Reliability = consistent/repeatable; validity = measures what it should." }],
            steps: [
              { reasoning: "Reliability: repeat results are consistent.", working: "reliability", marks: 1, markCode: "M" },
              { reasoning: "Validity: experiment tests the intended variable/question.", working: "validity", marks: 1, markCode: "M" },
              { reasoning: "Give example or clarification of each.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reliability = consistent repeats; validity = tests what it claims to test.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u8-impact-notes",
      title: "Ecosystems and review — revision notes",
      summary: "Ecosystems, human impact, sustainability, exam skills.",
      sections: [
        {
          heading: "Ecosystems",
          body: "Producers→consumers→decomposers; ~10% energy per level. Biodiversity=stability. Humans impact: deforestation, pollution, climate change.",
        },
        {
          heading: "Exam skills",
          body: "Fair tests, variables, data analysis, conclusions. Use scientific terms, explain mechanisms, evaluate methods.",
        },
      ],
    },
  ],
};
