import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "geo-u4-lesson-4-3",
  code: "4-3",
  title: "Biodiversity, Its Value and Conservation",
  goal: "I CAN explain biodiversity and its value, and evaluate conservation strategies at local and global scales.",
  standards: ["Paper 1", "Paper 2", "Ecosystems"],
  vocabulary: [
    { term: "Biodiversity", definition: "The variety of life at genetic, species and ecosystem levels." },
    { term: "Species richness", definition: "The number of different species in an area." },
    { term: "Endemic species", definition: "Species found nowhere else on Earth — e.g. lemurs in Madagascar." },
    { term: "Hotspot", definition: "A region with high biodiversity and high threat of loss — e.g. tropical rainforests, coral reefs." },
    { term: "In-situ conservation", definition: "Protecting species in their natural habitat — reserves, national parks." },
    { term: "Ex-situ conservation", definition: "Protecting species outside their habitat — zoos, seed banks, captive breeding." },
  ],
  concepts: [
    {
      id: "geo-u4-biodiversity-value",
      title: "Biodiversity and its value",
      skill: "Explain biodiversity's components, its ecological and economic value, and threats to its survival.",
      lesson: {
        sections: [
          {
            heading: "Components of biodiversity",
            body: "Biodiversity operates at three levels: **genetic diversity** (variation within species), **species diversity** (number and abundance of species) and **ecosystem diversity** (variety of habitats). Tropical rainforests hold ~half of all known species on ~7% of land area — the greatest concentration on Earth.",
          },
          {
            heading: "Value of biodiversity",
            body: "**Ecological value**: biodiversity maintains ecosystem services — pollination, pest control, nutrient cycling, resilience to disturbance. **Economic value**: food, medicine (many drugs derive from wild species), timber, tourism. **Ethical value**: intrinsic right of species to exist; future generations' option value.",
          },
          {
            heading: "Threats",
            body: "The main drivers of biodiversity loss (HIPPO): **Habitat loss** (deforestation, agriculture), **Invasive species**, **Pollution**, **Population growth** and **Overexploitation**. Climate change is an accelerating threat. Species extinction rates are now ~100-1000x background rates — a mass extinction event.",
          },
        ],
        keyFormulas: [
          { name: "Biodiversity levels", statement: "Genetic, species, ecosystem diversity" },
          { name: "HIPPO threats", statement: "Habitat loss, Invasive species, Pollution, Population, Overexploitation" },
          { name: "Rainforest share", statement: "~50% of species on ~7% of land" },
        ],
        workedExample: {
          problem: "Explain why biodiversity loss threatens ecosystem services.",
          solution: "Ecosystems depend on diverse species performing different functions — pollinators fertilise crops, predators control pests, decomposers recycle nutrients. Losing species removes these functions; simplified ecosystems are less resilient to drought, disease and climate change. Biodiversity is thus insurance for ecosystem stability.",
        },
      },
      questions: [
        {
          id: "geo-u4-bq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Species richness refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of different species in an area" },
              { id: "b", text: "The genetic variety within a species" },
              { id: "c", text: "The total biomass of all organisms" },
              { id: "d", text: "The number of ecosystems in a region" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Species richness", statement: "The number of different species present in an area." },
            ],
            steps: [
              { reasoning: "Species richness counts distinct species, not genetic variety or biomass.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Number of species in an area",
            commonErrors: ["Confusing species richness with genetic diversity."],
          },
        },
        {
          id: "geo-u4-bq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two threats to biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Biodiversity threats", statement: "HIPPO: Habitat loss, Invasive species, Pollution, Population growth, Overexploitation." },
            ],
            steps: [
              { reasoning: "Habitat loss: deforestation and agriculture destroy the environments species need.", marks: 1, markCode: "M" },
              { reasoning: "Invasive species outcompete natives; pollution (pesticides, plastics) kills organisms.", marks: 1, markCode: "M" },
              { reasoning: "Overexploitation (hunting, fishing, logging) removes species faster than they reproduce.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitat loss, invasive species, pollution, overexploitation (or population pressure).",
            commonErrors: ["Listing only one threat or describing symptoms rather than causes."],
          },
        },
        {
          id: "geo-u4-bq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why tropical rainforests have such high biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tropical diversity", statement: "Stable climate, high productivity, complex structure and long evolutionary history create conditions for high speciation." },
            ],
            steps: [
              { reasoning: "Year-round warmth and moisture support continuous growth and high productivity.", marks: 1, markCode: "M" },
              { reasoning: "Complex vertical structure (canopy, understory) creates many microhabitats/niches.", marks: 1, markCode: "M" },
              { reasoning: "Long undisturbed evolutionary history allowed extensive speciation.", marks: 1, markCode: "R" },
              { reasoning: "High productivity supports many individuals and species simultaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stable warm/wet climate, complex structure, high productivity and long evolutionary history drive tropical diversity.",
            commonErrors: ["Saying rainforests are diverse only because they're large — microhabitats and stability matter more."],
          },
        },
        {
          id: "geo-u4-bq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the value of biodiversity to people and the economy.",
          parts: [
            { label: "a", prompt: "Identify two ecological values of biodiversity.", marks: 2 },
            { label: "b", prompt: "Explain two economic values of biodiversity.", marks: 3 },
            { label: "c", prompt: "Evaluate the ethical arguments for conserving biodiversity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biodiversity value", statement: "Biodiversity provides ecosystem services, economic resources and intrinsic ethical worth — all arguments for conservation." },
            ],
            steps: [
              { part: "a", reasoning: "Ecosystem services: pollination, pest control, nutrient cycling, resilience.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Second ecological value: climate regulation or habitat provision.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Economic value 1: food, timber, medicine from wild species.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Economic value 2: tourism/ecotourism revenue from biodiversity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Links values to real economic flows.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ethical argument: species have intrinsic right to exist.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Weighs intrinsic vs instrumental (use) value arguments.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on conservation justification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ecological values. (b) Economic values. (c) Ethical arguments evaluated.",
            commonErrors: ["Only citing economic value — ecological and ethical arguments are equally important."],
          },
        },
        {
          id: "geo-u4-bq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Genetic diversity refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The variety of habitats present" },
              { id: "b", text: "The number of species in an ecosystem" },
              { id: "c", text: "Variation in genes within a species" },
              { id: "d", text: "The total biomass of all organisms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Genetic diversity", statement: "Variation in genes within a species — the smallest scale of biodiversity." },
            ],
            steps: [
              { reasoning: "Genetic diversity is variation within species populations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Variation within a species",
            commonErrors: ["Confusing genetic diversity with species diversity."],
          },
        },
        {
          id: "geo-u4-bq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which level of biodiversity describes the variety of habitats such as forests, wetlands and grasslands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species diversity" },
              { id: "b", text: "Genetic diversity" },
              { id: "c", text: "Ecosystem diversity" },
              { id: "d", text: "Functional diversity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecosystem diversity", statement: "Variety of habitats and ecosystems within a region." },
            ],
            steps: [
              { reasoning: "Habitats correspond to ecosystem diversity — the largest scale.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Ecosystem diversity",
            commonErrors: ["Confusing habitat variety with species counts."],
          },
        },
        {
          id: "geo-u4-bq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The acronym HIPPO summarises the main drivers of biodiversity loss. Which letter stands for habitat loss?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "O" },
              { id: "b", text: "H" },
              { id: "c", text: "P" },
              { id: "d", text: "I" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "HIPPO", statement: "Habitat loss, Invasive species, Pollution, Population growth, Overexploitation." },
            ],
            steps: [
              { reasoning: "H stands for Habitat loss — the leading driver.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** H — Habitat loss",
            commonErrors: ["Misremembering the acronym order."],
          },
        },
        {
          id: "geo-u4-bq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Tropical rainforests are especially rich in biodiversity because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are the oldest ecosystems on Earth" },
              { id: "b", text: "Combine stable warm, wet conditions with high productivity over long periods" },
              { id: "c", text: "Have very low human population density only" },
              { id: "d", text: "Cover most of Earth's land surface" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Rainforest biodiversity", statement: "~50% of species on ~7% of land; stable warm/wet climate and high productivity drive speciation." },
            ],
            steps: [
              { reasoning: "Stable tropical conditions and high productivity support exceptional diversity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stable climate + high productivity",
            commonErrors: ["Attributing richness only to area rather than environmental stability."],
          },
        },
        {
          id: "geo-u4-bq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why does high biodiversity increase ecosystem resilience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Functional redundancy allows other species to compensate when one declines" },
              { id: "b", text: "More species means less competition overall" },
              { id: "c", text: "Species diversity directly increases sunlight capture" },
              { id: "d", text: "Diverse ecosystems never experience disturbance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insurance hypothesis", statement: "Species performing similar functions provide redundancy, buffering ecosystems against disturbance." },
            ],
            steps: [
              { reasoning: "If one species fails, others can perform its ecological function.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Functional redundancy",
            commonErrors: ["Claiming diversity prevents disturbance rather than buffering its effects."],
          },
        },
        {
          id: "geo-u4-bq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately how many known species exist on Earth?",
          response: { type: "numeric", parts: [{ label: "Estimated known species (millions)", answer: 1.5, tolerance: 0.5, unit: "million" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Species estimate", statement: "About 1.5–2 million species have been formally described; total estimates run to ~8–10 million." },
            ],
            steps: [
              { reasoning: "The described-species figure is roughly $1.5$ million.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 1.5$ million described species.", working: "1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 1.5$ million described (estimates to $\\sim 8$–$10$ million total)",
            commonErrors: ["Confusing described species with total estimated species."],
          },
        },
        {
          id: "geo-u4-bq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rainforest reserve of $500$ km² is proposed to protect ~50% of regional species. If the region contains $2{,}000$ known species, approximately how many species would the reserve protect?",
          response: { type: "numeric", parts: [{ label: "Species protected", answer: 1000, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Species share", statement: "Protected species $=$ total species $\\times$ protected share." },
            ],
            steps: [
              { reasoning: "Apply the 50% share to the 2,000 species.", working: "0.50 \\times 2{,}000", marks: 1, markCode: "M" },
              { reasoning: "Protected species $= 1{,}000$.", working: "1{,}000", marks: 1, markCode: "M" },
              { reasoning: "Approximately $1{,}000$ species protected.", working: "1{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1{,}000$ species",
            commonErrors: ["Using the area ($500$ km²) instead of the species share."],
          },
        },
        {
          id: "geo-u4-bq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Species extinction rates today are estimated at roughly what multiple of background (natural) rates?",
          response: { type: "numeric", parts: [{ label: "Multiple of background rate (lower bound)", answer: 100, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Extinction rate", statement: "Current extinction rates are ~100–1,000 times the background rate — a mass extinction." },
            ],
            steps: [
              { reasoning: "The commonly cited range is 100–1,000× background.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Lower bound $= 100$ times background.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sim 100$–$1{,}000$ times background",
            commonErrors: ["Quoting only the upper bound or a single figure without the range."],
          },
        },
        {
          id: "geo-u4-bq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A survey finds a habitat has 60 plant species, 40 bird species and 25 mammal species. What is the total species richness recorded?",
          response: { type: "numeric", parts: [{ label: "Total species richness", answer: 125, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Species richness", statement: "Richness $=$ total number of species recorded in a community." },
            ],
            steps: [
              { reasoning: "Sum species across the three groups.", working: "60 + 40 + 25", marks: 1, markCode: "M" },
              { reasoning: "Total $= 125$ species.", working: "125", marks: 1, markCode: "M" },
              { reasoning: "Species richness is $125$.", working: "125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$125$ species",
            commonErrors: ["Averaging rather than summing the counts."],
          },
        },
        {
          id: "geo-u4-bq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Approximately what percentage of Earth's land area do tropical rainforests occupy?",
          response: { type: "numeric", parts: [{ label: "Share of land area (%)", answer: 7, tolerance: 1, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Rainforest area", statement: "Tropical rainforests cover ~7% of land but hold ~50% of species." },
            ],
            steps: [
              { reasoning: "Recall the land-area share figure.", working: "7\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 7\\%$.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 7\\%$ of land",
            commonErrors: ["Confusing the 7% land share with the ~50% species share."],
          },
        },
        {
          id: "geo-u4-bq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If a region loses habitat at 2% per year compounded, what percentage of the original habitat remains after 10 years (using $(1-0.02)^{10}$)?",
          response: { type: "numeric", parts: [{ label: "Remaining habitat (%)", answer: 81.7, tolerance: 0.5, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compounded decline", statement: "Remaining $= (1 - r)^t$ where $r$ is annual loss rate and $t$ years." },
            ],
            steps: [
              { reasoning: "Apply the compounding formula with $r = 0.02$, $t = 10$.", working: "(1 - 0.02)^{10} = 0.98^{10}", marks: 1, markCode: "M" },
              { reasoning: "$0.98^{10} \\approx 0.817$.", working: "0.817", marks: 1, markCode: "M" },
              { reasoning: "About $81.7\\%$ of original habitat remains.", working: "81.7\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 81.7\\%$ remaining",
            commonErrors: ["Using linear decline ($100 - 2 \\times 10 = 80\\%$) instead of compounding."],
          },
        },
        {
          id: "geo-u4-bq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the levels and value of biodiversity using a named ecosystem.",
          parts: [
            { label: "a", prompt: "Describe biodiversity at genetic, species and ecosystem levels in the named ecosystem.", marks: 3 },
            { label: "b", prompt: "Explain one ecological and one economic value of its biodiversity.", marks: 3 },
            { label: "c", prompt: "Evaluate the threats facing this biodiversity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biodiversity value and threat", statement: "Biodiversity operates at three scales, delivers ecological/economic/ethical value, and faces HIPPO-driven threats." },
            ],
            steps: [
              { part: "a", reasoning: "Genetic diversity described (variation within species).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Species diversity described (number/abundance of species).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ecosystem diversity described (habitat variety).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ecological value: ecosystem services such as pollination or nutrient cycling.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Economic value: food, medicine, timber or tourism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Values accurately linked to the named ecosystem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "HIPPO threat identified for the named ecosystem.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned judgement on severity of threats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three biodiversity levels. (b) Ecological + economic value. (c) Threats evaluated.",
            commonErrors: ["Describing only species diversity and ignoring genetic and ecosystem levels."],
          },
        },
      ],
    },
    {
      id: "geo-u4-conservation",
      title: "Biodiversity conservation",
      skill: "Compare in-situ and ex-situ conservation strategies and evaluate their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "In-situ conservation",
            body: "Protecting species in their natural habitat: **national parks**, **nature reserves**, **wildlife corridors**, community conservancies. In-situ is preferred because it protects entire ecosystems and allows natural processes — but requires land, enforcement and funding. Example: Yellowstone National Park (1872) pioneered the model.",
          },
          {
            heading: "Ex-situ conservation",
            body: "Protecting species outside their habitat: **zoos**, **botanical gardens**, **seed banks** (Svalbard Global Seed Vault stores crop diversity), **captive breeding** programmes. Useful for critically endangered species facing imminent extinction — e.g. California condor recovery — but expensive and doesn't protect ecosystems.",
          },
          {
            heading: "Integrated approaches",
            body: "Effective conservation combines both: reserves protect habitats while seed banks and captive breeding provide insurance. **CITES** regulates international wildlife trade; the **Convention on Biological Diversity** (CBD) sets global targets. Community-based conservation engages local people as stewards rather than excluding them.",
          },
        ],
        keyFormulas: [
          { name: "In-situ", statement: "Protect in natural habitat — parks, reserves, corridors" },
          { name: "Ex-situ", statement: "Protect outside habitat — zoos, seed banks, captive breeding" },
          { name: "CBD", statement: "Convention on Biological Diversity — global conservation framework" },
        ],
        workedExample: {
          problem: "Compare in-situ and ex-situ conservation for a critically endangered species.",
          solution: "In-situ (reserves) protects the species in its ecosystem, preserving behaviour and ecological relationships, but requires large protected areas and faces poaching pressure. Ex-situ (captive breeding, seed banks) provides insurance against extinction and can rebuild populations, but is expensive and loses wild behaviour. Best practice combines both.",
        },
      },
      questions: [
        {
          id: "geo-u4-cq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ex-situ conservation involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Community-based forest management" },
              { id: "b", text: "Creating wildlife corridors between reserves" },
              { id: "c", text: "Protecting species in national parks" },
              { id: "d", text: "Protecting species outside their natural habitat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ex-situ conservation", statement: "Protecting species outside their natural habitat — zoos, seed banks, captive breeding." },
            ],
            steps: [
              { reasoning: "Ex-situ means 'outside the place' — zoos, seed banks, captive breeding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Outside natural habitat",
            commonErrors: ["Confusing ex-situ with in-situ — one is captive, the other is wild."],
          },
        },
        {
          id: "geo-u4-cq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two in-situ conservation strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "In-situ strategies", statement: "National parks, nature reserves, wildlife corridors, community conservancies." },
            ],
            steps: [
              { reasoning: "National parks and reserves protect habitats from development and exploitation.", marks: 1, markCode: "M" },
              { reasoning: "Wildlife corridors connect fragmented habitats, allowing gene flow and migration.", marks: 1, markCode: "M" },
              { reasoning: "Community conservancies engage local people as stewards, combining conservation with livelihoods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "National parks/reserves, wildlife corridors, community conservancies.",
            commonErrors: ["Listing ex-situ methods like zoos as in-situ."],
          },
        },
        {
          id: "geo-u4-cq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a combination of in-situ and ex-situ conservation is often most effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combined conservation", statement: "In-situ protects ecosystems; ex-situ provides insurance — together they maximise survival chances." },
            ],
            steps: [
              { reasoning: "In-situ preserves whole ecosystems and natural behaviours but faces ongoing threats.", marks: 1, markCode: "M" },
              { reasoning: "Ex-situ (seed banks, captive breeding) provides backup populations against extinction.", marks: 1, markCode: "M" },
              { reasoning: "Combined approach hedges against failure of either method alone.", marks: 1, markCode: "R" },
              { reasoning: "Example: Svalbard Seed Vault backs up crop diversity while reserves protect wild habitats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In-situ protects ecosystems; ex-situ insures against extinction — combined they are most robust.",
            commonErrors: ["Arguing one method is always superior — they are complementary."],
          },
        },
        {
          id: "geo-u4-cq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the effectiveness of conservation strategies in a named biodiversity hotspot.",
          parts: [
            { label: "a", prompt: "Identify the named hotspot and its biodiversity.", marks: 2 },
            { label: "b", prompt: "Explain two conservation strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate their effectiveness.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation evaluation", statement: "Effectiveness depends on threat severity, strategy fit, funding, enforcement and community support." },
            ],
            steps: [
              { part: "a", reasoning: "Named hotspot (e.g. Madagascar, Amazon, Coral Triangle) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific biodiversity (endemics, species counts) described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: in-situ (reserves, corridors) with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: ex-situ or community-based with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies appropriate to the hotspot's threats.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: species protected, habitat preserved, community benefits.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: funding gaps, poaching, land pressure, climate change.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named hotspot + biodiversity. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Generic conservation discussion without hotspot-specific detail."],
          },
        },
        {
          id: "geo-u4-cq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In-situ conservation means protecting species:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Through captive breeding programmes" },
              { id: "b", text: "In their natural habitats" },
              { id: "c", text: "In zoos and botanical gardens" },
              { id: "d", text: "In seed banks only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "In-situ conservation", statement: "Protecting species within their natural habitats — parks, reserves, corridors." },
            ],
            steps: [
              { reasoning: "In-situ literally means 'on site' — protection in natural habitat.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** In natural habitats",
            commonErrors: ["Confusing in-situ with ex-situ (outside habitat) methods."],
          },
        },
        {
          id: "geo-u4-cq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Svalbard Global Seed Vault is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ex-situ conservation" },
              { id: "b", text: "Community conservancy" },
              { id: "c", text: "Wildlife corridor" },
              { id: "d", text: "In-situ conservation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Seed vault", statement: "Svalbard stores crop seeds outside natural habitats — ex-situ insurance against extinction." },
            ],
            steps: [
              { reasoning: "Seeds stored away from natural habitats = ex-situ.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ex-situ",
            commonErrors: ["Classifying seed banks as in-situ because they preserve wild species."],
          },
        },
        {
          id: "geo-u4-cq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Yellowstone National Park (1872) is significant in conservation history because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduced the first seed bank" },
              { id: "b", text: "Was the largest zoo ever built" },
              { id: "c", text: "Banned all human activity in the region" },
              { id: "d", text: "Was the first national park, pioneering the protected-area model" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Yellowstone", statement: "Established 1872 as the world's first national park — model for in-situ protection." },
            ],
            steps: [
              { reasoning: "Yellowstone pioneered the national park concept.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** First national park",
            commonErrors: ["Describing it as a zoo rather than a protected wilderness area."],
          },
        },
        {
          id: "geo-u4-cq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "CITES is an international agreement that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Funds national park creation worldwide" },
              { id: "b", text: "Regulates international trade in endangered species" },
              { id: "c", text: "Bans all wildlife trade unconditionally" },
              { id: "d", text: "Requires all nations to protect 30% of land" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "CITES", statement: "Convention on International Trade in Endangered Species — regulates wildlife trade via permits." },
            ],
            steps: [
              { reasoning: "CITES controls trade rather than banning it outright.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Regulates endangered species trade",
            commonErrors: ["Describing CITES as a blanket ban rather than a permit system."],
          },
        },
        {
          id: "geo-u4-cq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why is in-situ conservation generally preferred over ex-situ for most species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires no ongoing management" },
              { id: "b", text: "It is always cheaper to implement" },
              { id: "c", text: "It eliminates the risk of poaching entirely" },
              { id: "d", text: "It protects entire ecosystems and natural behaviours and processes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "In-situ advantage", statement: "Preserves whole ecosystems, natural selection and ecological relationships — not just the species." },
            ],
            steps: [
              { reasoning: "In-situ protects ecosystems and natural processes, which ex-situ cannot replicate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Protects ecosystems and natural processes",
            commonErrors: ["Claiming in-situ is cheaper — it often requires more land and enforcement."],
          },
        },
        {
          id: "geo-u4-cq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Captive breeding programmes aim to:",
          response: { type: "numeric", parts: [{ label: "Primary aim category (1=ex-situ, 2=in-situ)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Captive breeding", statement: "Breeding endangered species in controlled environments outside natural habitat — ex-situ." },
            ],
            steps: [
              { reasoning: "Captive breeding occurs outside natural habitats.", working: "ex-situ", marks: 1, markCode: "M" },
              { reasoning: "Category = ex-situ (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ex-situ (1)",
            commonErrors: ["Classifying captive breeding as in-situ because it aims at eventual release."],
          },
        },
        {
          id: "geo-u4-cq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A conservation programme protects 3,200 km² across 12 reserves. What is the average reserve size in km²?",
          response: { type: "numeric", parts: [{ label: "Average reserve size (km²)", answer: 266.7, tolerance: 1, unit: "km²" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Average size", statement: "Average $=$ total protected area $\\div$ number of reserves." },
            ],
            steps: [
              { reasoning: "Divide total area by number of reserves.", working: "3{,}200 \\div 12", marks: 1, markCode: "M" },
              { reasoning: "Average $\\approx 266.7$ km².", working: "266.7", marks: 1, markCode: "M" },
              { reasoning: "Average reserve size $\\approx 267$ km².", working: "266.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 267$ km²",
            commonErrors: ["Dividing reserves by area instead of area by reserves."],
          },
        },
        {
          id: "geo-u4-cq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Convention on Biological Diversity (CBD) is best described as:",
          response: { type: "numeric", parts: [{ label: "Year CBD opened for signature (last two digits)", answer: 92, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "CBD", statement: "Convention on Biological Diversity opened for signature at the 1992 Rio Earth Summit." },
            ],
            steps: [
              { reasoning: "CBD was adopted at the 1992 Rio Earth Summit.", working: "1992", marks: 1, markCode: "M" },
              { reasoning: "Last two digits: $92$.", working: "92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1992$ (Rio Earth Summit)",
            commonErrors: ["Confusing CBD with CITES or the Kyoto Protocol."],
          },
        },
        {
          id: "geo-u4-cq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A species recovery programme releases 40 captive-bred individuals into the wild each year for 5 years. If annual mortality in the wild is 25%, how many individuals from the first year's release survive after 5 years (assuming no reproduction)?",
          response: { type: "numeric", parts: [{ label: "Survivors from first release", answer: 9.5, tolerance: 0.2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Survival decay", statement: "Survivors $= N \\times (1 - m)^t$ where $m$ is annual mortality and $t$ years." },
            ],
            steps: [
              { reasoning: "Survival rate per year is $1 - 0.25 = 0.75$.", working: "0.75", marks: 1, markCode: "M" },
              { reasoning: "Survivors $= 40 \\times 0.75^5$.", working: "40 \\times 0.75^5 = 40 \\times 0.2373", marks: 1, markCode: "M" },
              { reasoning: "Approximately $9.5$ individuals survive.", working: "9.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 9.5$ individuals",
            commonErrors: ["Using linear mortality ($40 - 5 \\times 25\\%$) instead of compounding."],
          },
        },
        {
          id: "geo-u4-cq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Community-based conservation differs from fortress conservation because it:",
          response: { type: "numeric", parts: [{ label: "Number of groups community conservation engages (1=local people, 2=only rangers)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Community conservation", statement: "Engages local communities as stewards rather than excluding them from protected areas." },
            ],
            steps: [
              { reasoning: "Community-based approaches involve local people in management.", working: "local people", marks: 1, markCode: "M" },
              { reasoning: "Group = local people (1).", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Local people (1)",
            commonErrors: ["Describing community conservation as exclusionary fortress protection."],
          },
        },
        {
          id: "geo-u4-cq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A wildlife corridor of $8$ km connects two reserves of $50$ km² and $30$ km². If the corridor costs $\\$200{,}000$ per km to build and maintain, what is the total cost over its length (in $\\$$ thousands)?",
          response: { type: "numeric", parts: [{ label: "Total corridor cost ($ thousand)", answer: 1600, tolerance: 0, unit: "$ thousand" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cost calculation", statement: "Total cost $=$ cost per km $\\times$ corridor length." },
            ],
            steps: [
              { reasoning: "Multiply length by cost per km.", working: "8 \\times 200{,}000", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$1{,}600{,}000 = \\$1{,}600$ thousand.", working: "1{,}600{,}000", marks: 1, markCode: "M" },
              { reasoning: "Total corridor cost is $\\$1.6$ million.", working: "1{,}600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$1{,}600$ thousand ($\\$1.6$ million)",
            commonErrors: ["Adding reserve areas to the calculation — only corridor length matters for cost."],
          },
        },
        {
          id: "geo-u4-cq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine in-situ and ex-situ conservation strategies for a named endangered species.",
          parts: [
            { label: "a", prompt: "Identify the species and describe the threats it faces.", marks: 2 },
            { label: "b", prompt: "Compare one in-situ and one ex-situ strategy for it.", marks: 3 },
            { label: "c", prompt: "Evaluate which strategy (or combination) is most effective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "In-situ vs ex-situ", statement: "In-situ protects ecosystems and natural processes; ex-situ provides insurance for critically endangered species." },
            ],
            steps: [
              { part: "a", reasoning: "Named endangered species identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Threats (poaching, habitat loss, climate) described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In-situ strategy described (reserve, corridor, anti-poaching).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ex-situ strategy described (captive breeding, seed bank).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear comparison of strengths/limitations for this species.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Most effective approach identified (often combined).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justification referencing species' specific situation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Species + threats. (b) In-situ vs ex-situ compared. (c) Effectiveness evaluated.",
            commonErrors: ["Describing strategies generically without species-specific application."],
          },
        },
      ],
    },
  ],
};
