import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "biosl-u6-lesson-6-3",
  code: "6-3",
  title: "Human Impacts and Conservation",
  goal: "I CAN describe how human activities affect ecosystems and evaluate strategies for conserving biodiversity.",
  standards: ["Topic A.4", "Topic A.4.2", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Eutrophication", definition: "Excess nutrient enrichment of water causing algal blooms, oxygen depletion and loss of aquatic life." },
    { term: "Deforestation", definition: "The clearing of forests for agriculture, logging or development, causing habitat loss and increased CO2." },
    { term: "Invasive species", definition: "A non-native species that spreads rapidly and harms native biodiversity or ecosystems." },
    { term: "Endangered species", definition: "A species at high risk of extinction, often due to small population size and restricted range." },
    { term: "In situ conservation", definition: "Protecting species in their natural habitat, e.g. national parks and reserves." },
    { term: "Ex situ conservation", definition: "Protecting species outside their natural habitat, e.g. zoos, botanical gardens and seed banks." },
  ],
  concepts: [
    {
      id: "biosl-u6-human-impacts",
      title: "Human impacts on ecosystems",
      skill: "Describe and evaluate the effects of habitat destruction, pollution, climate change, invasive species and overexploitation.",
      lesson: {
        sections: [
          {
            heading: "Habitat destruction and pollution",
            body: "**Deforestation** removes habitat and reduces biodiversity, releases stored carbon and can cause soil erosion and flooding. **Pollution** takes many forms: nitrates and phosphates cause **eutrophication** in water; pesticides poison non-target organisms; plastics and heavy metals accumulate in food chains; greenhouse gases drive **climate change**, shifting habitats faster than species can adapt.",
          },
          {
            heading: "Invasive species and overexploitation",
            body: "Introduced species with no natural predators — such as rabbits in Australia or kudzu in the USA — can outcompete natives and collapse ecosystems. **Overexploitation** through hunting, fishing and logging can drive species to extinction even when habitat remains, e.g. the passenger pigeon and many fish stocks.",
          },
          {
            heading: "Measuring impact",
            body: "Impact is often assessed through species richness, population trends, carbon footprint and indices of ecosystem health. Sustainable practices — reduced consumption, protected areas, pollution control — aim to meet human needs while maintaining biodiversity and ecosystem services.",
          },
        ],
        keyFormulas: [
          { name: "Eutrophication sequence", statement: "Nutrient input → algal bloom → decomposition → oxygen depletion → loss of aerobic life" },
          { name: "Deforestation effects", statement: "Habitat loss + carbon release + soil erosion + reduced rainfall" },
          { name: "Invasive species", statement: "No natural predators → rapid spread → competition/predation on natives" },
        ],
        workedExample: {
          problem: "Explain, step by step, how fertiliser runoff can lead to fish deaths in a lake.",
          solution: "Fertiliser adds nitrate and phosphate → algae bloom → algae die → decomposers respire and consume dissolved oxygen → oxygen falls below fish requirements → fish die (eutrophication).",
        },
      },
      questions: [
        {
          id: "biosl-u6-human-impacts-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which human activity is the leading direct cause of habitat loss for most threatened species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recycling programmes" },
              { id: "b", text: "Deforestation and land conversion for agriculture" },
              { id: "c", text: "Reforestation" },
              { id: "d", text: "National park creation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Habitat loss", statement: "Conversion of natural habitat for farming, logging and development is the main direct driver of species decline." },
            ],
            steps: [
              { reasoning: "Deforestation and land conversion remove the habitat species need to survive and reproduce.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Deforestation and land conversion",
            commonErrors: ["Choosing pollution — serious, but habitat loss is the larger direct driver."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u6-human-impacts-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is eutrophication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The enrichment of water with nutrients leading to algal blooms and oxygen depletion" },
              { id: "b", text: "The process of photosynthesis in plants" },
              { id: "c", text: "The loss of soil through erosion" },
              { id: "d", text: "The introduction of non-native species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eutrophication", statement: "Nutrient enrichment causing algal blooms, decomposition-driven oxygen depletion and loss of aquatic life." },
            ],
            steps: [
              { reasoning: "Eutrophication is specifically about nutrient enrichment of water bodies.", working: "nutrients → algae → O2 depletion", marks: 1, markCode: "M" },
              { reasoning: "The end result is harm to aquatic ecosystems through oxygen depletion.", working: "harm to aquatic life", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Nutrient enrichment → algal blooms → oxygen depletion",
            commonErrors: ["Confusing eutrophication with general pollution or erosion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Rabbits were introduced to Australia in 1859. With no natural predators, they multiplied to hundreds of millions and caused severe damage to native vegetation and soils. What does this illustrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Successful biological control" },
              { id: "b", text: "How invasive species without natural predators can devastate native ecosystems" },
              { id: "c", text: "The benefits of introducing new species" },
              { id: "d", text: "Natural selection working normally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Invasive species", statement: "A non-native species that spreads rapidly and harms native biodiversity or ecosystems." },
            ],
            steps: [
              { reasoning: "Introduced species often escape the predators, diseases and competitors that controlled them at home.", working: "release from natural enemies", marks: 1, markCode: "M" },
              { reasoning: "Rapid population growth lets them outcompete or overgraze natives, collapsing ecosystem function.", working: "overpopulation → damage", marks: 1, markCode: "M" },
              { reasoning: "This is the classic mechanism of invasive species damage.", working: "invasive species impact", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Invasive species can devastate ecosystems",
            commonErrors: ["Framing it as a conservation success — it is a major ecological problem."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A lake near farmland shows seasonal fish kills each August. Dissolved oxygen falls to 2 mg/L in late summer. Fertiliser runoff enters the lake each spring, and the surrounding land is heavily farmed.",
          parts: [
            { label: "a", prompt: "Name the process responsible for the fish kills and explain the mechanism.", marks: 2 },
            { label: "b", prompt: "Suggest two sources of the nutrients causing the problem.", marks: 2 },
            { label: "c", prompt: "Explain why oxygen levels are lowest in late summer rather than in winter.", marks: 2 },
            { label: "d", prompt: "Evaluate two management strategies that could reduce the problem.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eutrophication", statement: "Nutrient enrichment → algal bloom → decomposition consumes oxygen → fish kills." },
            ],
            steps: [
              { part: "a", reasoning: "Eutrophication: nutrients fuel algal blooms; algae die and decomposers respire, consuming dissolved oxygen.", working: "nutrients → algae → decomposition → low O2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Oxygen falls below the level fish need, causing the kills.", working: "hypoxia kills fish", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two valid sources: fertiliser runoff, sewage discharge, animal waste, erosion of fertilised soil.", working: "e.g. fertiliser, sewage", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two distinct sources identified.", working: "two sources", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Warm water holds less dissolved oxygen and speeds decomposition and respiration.", working: "warm water → less O2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Algal biomass and microbial activity peak in summer, maximising oxygen demand.", working: "summer algal peak", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any two valid strategies: buffer strips, reduced fertiliser use, constructed wetlands, sewage treatment, riparian planting.", working: "e.g. buffer strips + reduced fertiliser", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both strategies evaluated for effectiveness and feasibility.", working: "evaluation given", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Eutrophication — algal bloom and decomposition deplete oxygen. (b) Fertiliser runoff, sewage/waste. (c) Warm water holds less O2 and summer algal/microbial activity peaks. (d) Buffer strips and reduced fertiliser use (or wetlands, treatment) — evaluated for cost and effectiveness.",
            commonErrors: ["Suggesting aeration alone solves it — it treats symptoms, not nutrient input.", "Ignoring seasonality in the mechanism."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept any two valid strategies in (d).",
          },
        },
        {
          id: "biosl-u6-human-impacts-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which two nutrients are most directly responsible for eutrophication of freshwater systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen and carbon dioxide" },
              { id: "b", text: "Nitrates and phosphates" },
              { id: "c", text: "Sodium and potassium" },
              { id: "d", text: "Calcium and magnesium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eutrophication", statement: "Excess nitrate and phosphate nutrients fuel algal blooms that deplete oxygen." },
            ],
            steps: [
              { reasoning: "Nitrates (from fertilisers and sewage) and phosphates are the limiting nutrients for algal growth.", working: "NO3− and PO4−", marks: 1, markCode: "M" },
              { reasoning: "Their enrichment triggers the algal bloom that starts eutrophication.", working: "→ algal bloom", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Nitrates and phosphates",
            commonErrors: ["Choosing oxygen — oxygen is depleted as a consequence, not a cause."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In an eutrophic lake, why do fish die even though there is plenty of algae?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The algae produce a toxin that kills fish directly" },
              { id: "b", text: "Decomposition of dead algae by bacteria consumes dissolved oxygen below fish requirements" },
              { id: "c", text: "The algae eat the fish" },
              { id: "d", text: "The water becomes too salty for fish" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Eutrophication mechanism", statement: "Algal die-off → microbial decomposition → oxygen depletion → fish kills." },
            ],
            steps: [
              { reasoning: "When algae die, decomposer bacteria respire aerobically and consume dissolved oxygen.", working: "decomposers use O2", marks: 1, markCode: "M" },
              { reasoning: "Oxygen falls below the level fish need, causing the kills — despite abundant algae.", working: "hypoxia", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decomposition depletes dissolved oxygen",
            commonErrors: ["Thinking the algae directly poison fish — it is oxygen depletion that kills them."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Why do invasive species often spread more rapidly in a new habitat than in their native range?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They reproduce more slowly without competitors" },
              { id: "b", text: "They escape the predators, parasites and diseases that controlled them at home" },
              { id: "c", text: "They have more food available everywhere" },
              { id: "d", text: "They are always larger than native species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Invasive species", statement: "Release from natural enemies allows exponential spread and damage to natives." },
            ],
            steps: [
              { reasoning: "In the new habitat the species lacks its evolved predators, parasites and pathogens.", working: "enemy release", marks: 1, markCode: "M" },
              { reasoning: "With nothing controlling numbers, populations explode and outcompete or prey on natives.", working: "uncontrolled growth", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Escape from natural enemies",
            commonErrors: ["Assuming invasive species are inherently stronger — it is the release from enemies that matters."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A river ecosystem had 120 recorded species before agricultural development. After fertiliser runoff and habitat clearing, only 90 species remain. Calculate: (a) the number of species lost; (b) the percentage decrease in species richness.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Species lost", answer: 30 },
              { label: "(b) Percentage decrease (%)", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "Decrease % = (original − new) / original × 100." },
            ],
            steps: [
              { reasoning: "Species lost = 120 − 90 = 30.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "(a) 30 species lost.", marks: 1, markCode: "A" },
              { reasoning: "(b) 30 / 120 × 100 = 25%.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30; (b) 25%",
            commonErrors: ["Dividing by 90 (the new value) instead of 120 (the original)."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A fish stock was estimated at 20 000 tonnes. After five years of heavy trawling it fell to 8 000 tonnes. Calculate: (a) the absolute decline; (b) the percentage decline; (c) the average annual decline if it fell at a constant rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Absolute decline (tonnes)", answer: 12000 },
              { label: "(b) Percentage decline (%)", answer: 60 },
              { label: "(c) Average annual decline (tonnes)", answer: 2400 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of decline", statement: "Decline = initial − final; percentage = decline / initial × 100; annual = total / years." },
            ],
            steps: [
              { reasoning: "Decline = 20 000 − 8 000 = 12 000 tonnes.", working: "12000", marks: 1, markCode: "M" },
              { reasoning: "(a) 12 000 tonnes.", marks: 1, markCode: "A" },
              { reasoning: "(b) 12 000 / 20 000 × 100 = 60%.", working: "60", marks: 1, markCode: "A" },
              { reasoning: "(c) 12 000 / 5 = 2400 tonnes per year.", working: "2400", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 000 tonnes; (b) 60%; (c) 2400 tonnes/year",
            commonErrors: ["Calculating percentage relative to the final stock instead of the initial stock."],
            examinerNote: "M1 A1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Deforestation is often described as having multiple ecological effects beyond simple habitat loss. Which combination best describes its effects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Release of stored carbon, soil erosion, reduced rainfall and loss of habitat" },
              { id: "b", text: "Increased biodiversity and improved soil fertility" },
              { id: "c", text: "Only the removal of trees with no wider effects" },
              { id: "d", text: "Reduced carbon dioxide and increased oxygen in the atmosphere" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deforestation impacts", statement: "Forest loss releases carbon, erodes soil, disrupts water cycles and removes habitat." },
            ],
            steps: [
              { reasoning: "Trees store carbon; clearing releases it as CO2 and reduces future uptake.", working: "carbon release", marks: 1, markCode: "M" },
              { reasoning: "Root systems no longer hold soil, causing erosion and flooding; reduced transpiration can reduce rainfall.", working: "erosion + rainfall", marks: 1, markCode: "M" },
              { reasoning: "All listed effects together describe deforestation's cascade of impacts.", working: "all effects", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Carbon release, erosion, reduced rainfall, habitat loss",
            commonErrors: ["Thinking deforestation only removes habitat — it also drives climate and soil effects."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A coastal city is building a new harbour. Dredged sediment containing heavy metals and nutrients will be dumped at sea, and construction runoff may carry fertiliser into nearby seagrass beds.",
          parts: [
            { label: "a", prompt: "Explain two ways heavy metal pollution can harm marine ecosystems.", marks: 2 },
            { label: "b", prompt: "Describe the sequence by which nutrient pollution could cause a fish kill in the seagrass beds.", marks: 2 },
            { label: "c", prompt: "Suggest two mitigation measures for the project.", marks: 2 },
            { label: "d", prompt: "Evaluate the trade-off between economic development and marine conservation in this scenario.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Marine pollution", statement: "Heavy metals accumulate in food chains; nutrients drive eutrophication." },
            ],
            steps: [
              { part: "a", reasoning: "Heavy metals accumulate up food chains (biomagnification), reaching toxic levels in top predators.", working: "biomagnification", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They can poison organisms directly and damage enzymes and reproduction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Nutrients → algal bloom → algae die → decomposers consume oxygen → hypoxia → fish kill.", working: "eutrophication sequence", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct causal sequence described in order.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any two valid measures: silt curtains, contained disposal sites, nutrient stripping, timing work to avoid runoff, monitoring.", working: "e.g. silt curtains + stripping", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two distinct mitigation measures identified.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Development provides jobs and infrastructure but damages ecosystems and fisheries; mitigation reduces but may not eliminate harm.", working: "trade-off stated", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A balanced evaluation with a justified conclusion is given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Biomagnification and direct toxicity. (b) Nutrients → bloom → decomposition → hypoxia → fish kill. (c) Silt curtains, disposal controls, nutrient stripping, monitoring. (d) Development benefits vs ecosystem damage — mitigate and weigh costs.",
            commonErrors: ["Skipping the decomposition step in the eutrophication chain.", "Suggesting measures unrelated to pollution sources."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 A1 (d).",
          },
        },
        {
          id: "biosl-u6-human-impacts-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A tropical rainforest is being cleared for palm oil plantations. Local orangutan and hornbill populations are declining.",
          parts: [
            { label: "a", prompt: "Explain why habitat fragmentation (rather than total clearance) is particularly damaging to large mammals like orangutans.", marks: 2 },
            { label: "b", prompt: "Discuss two ways climate change could further threaten rainforest species.", marks: 2 },
            { label: "c", prompt: "Evaluate the claim that sustainable palm oil certification can balance production and conservation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Habitat fragmentation", statement: "Isolated patches reduce effective population size, gene flow and resource access." },
            ],
            steps: [
              { part: "a", reasoning: "Large mammals need big territories; fragments may be too small and isolated for viable populations.", working: "small isolated patches", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reduced gene flow and increased edge effects (predation, fire) further endanger them.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two valid ways: shifting climate zones outpace migration, altered rainfall patterns, increased fire risk, phenology mismatches with food sources.", working: "e.g. shifting zones + fire", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two distinct climate threats identified with explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Certification can reduce deforestation and promote best practice but enforcement and 'greenwashing' are concerns.", working: "benefits vs enforcement", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A balanced judgement on effectiveness is given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fragments too small/isolated — gene flow loss and edge effects. (b) Climate shifts, rainfall change, fire, phenology mismatch. (c) Certification helps but depends on enforcement and genuine compliance.",
            commonErrors: ["Confusing fragmentation with total habitat loss — the patch dynamics are the key point.", "Ignoring enforcement in the certification evaluation."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u6-human-impacts-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A survey counts 45 species of plants in a meadow. After drainage for agriculture, 30 species remain. What is the species richness after drainage?",
          response: {
            type: "numeric",
            parts: [
              { label: "Species richness", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Species richness", statement: "The number of different species present in an area." },
            ],
            steps: [
              { reasoning: "Species richness is simply the count of species; after drainage 30 remain.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 species.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
            commonErrors: ["Reporting the percentage loss instead of the richness count."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is overexploitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Harvesting a species faster than it can reproduce, leading to decline" },
              { id: "b", text: "Protecting a species in a reserve" },
              { id: "c", text: "Introducing a species to a new habitat" },
              { id: "d", text: "Studying a species in the wild" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Overexploitation", statement: "Removal of individuals at a rate exceeding the population's ability to replenish itself." },
            ],
            steps: [
              { reasoning: "Overexploitation means taking more than the population can replace through reproduction.", working: "harvest > recruitment", marks: 1, markCode: "M" },
              { reasoning: "Sustained overexploitation drives populations to decline or extinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Harvesting faster than reproduction",
            commonErrors: ["Confusing overexploitation with habitat destruction — it can occur even with intact habitat."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How does climate change threaten species whose habitats are shifting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species can always move to new habitats instantly" },
              { id: "b", text: "Suitable conditions may shift faster than species can migrate or adapt" },
              { id: "c", text: "Climate change only affects polar regions" },
              { id: "d", text: "All species benefit from warmer temperatures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Climate change impact", statement: "Rapid environmental change can outpace migration and adaptation, causing range loss and extinction." },
            ],
            steps: [
              { reasoning: "Species track suitable climate zones, but barriers (cities, farmland, oceans) and speed of change limit movement.", working: "migration limits", marks: 1, markCode: "M" },
              { reasoning: "If conditions shift faster than adaptation or dispersal, populations decline.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Change may outpace migration and adaptation",
            commonErrors: ["Assuming species can simply move — dispersal barriers and generation times matter."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-human-impacts-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A wetland supported 80 bird species. After drainage, 50 remain. An invasive plant then spreads through the remaining wetland. Calculate: (a) the percentage of bird species lost through drainage; (b) the number of species remaining before the invasive plant arrived.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percentage lost (%)", answer: 37.5 },
              { label: "(b) Species remaining", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "Percentage lost = (original − new) / original × 100." },
            ],
            steps: [
              { reasoning: "Loss = 80 − 50 = 30; percentage = 30 / 80 × 100 = 37.5%.", working: "30/80 = 0.375", marks: 1, markCode: "M" },
              { reasoning: "(a) 37.5%.", working: "37.5", marks: 1, markCode: "A" },
              { reasoning: "(b) 50 species remained after drainage — the invasive plant affects this number but the question asks for the count before it arrived.", working: "50", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 species.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 37.5%; (b) 50",
            commonErrors: ["Rounding 37.5% to 38% — the exact value is acceptable.", "Answering with the number lost rather than remaining."],
            examinerNote: "M1 A1 M1 A1. Accept 37.5 or 37.50.",
          },
        },
      ],
    },
    {
      id: "biosl-u6-conservation",
      title: "Conservation and sustainable use",
      skill: "Describe in situ and ex situ conservation strategies and evaluate sustainable approaches to biodiversity.",
      lesson: {
        sections: [
          {
            heading: "In situ conservation",
            body: "**In situ** conservation protects species where they live: national parks, nature reserves, wildlife corridors and sustainable-use areas. International agreements such as CITES regulate trade in endangered species. Habitat protection also conserves the ecosystem services — pollination, water purification, carbon storage — that humans depend on.",
          },
          {
            heading: "Ex situ conservation",
            body: "**Ex situ** methods protect species outside their habitat: zoos and aquaria for animals, botanical gardens and seed banks for plants. Captive breeding programmes aim to release animals back into the wild; seed banks store genetic material for future reintroduction or research. Ex situ is a safety net, not a substitute for habitat protection.",
          },
          {
            heading: "Sustainable use and evaluation",
            body: "Sustainable practices — controlled fishing quotas, ecotourism, agroforestry, reduced consumption — meet human needs while preserving biodiversity. Effective conservation combines protection, law enforcement, community involvement and public awareness. Every strategy has trade-offs: cost, land use, genetic diversity loss in captivity, and the risk that protection may fail if underlying pressures continue.",
          },
        ],
        keyFormulas: [
          { name: "In situ", statement: "Protect in natural habitat — reserves, parks, corridors, CITES" },
          { name: "Ex situ", statement: "Protect outside habitat — zoos, botanical gardens, seed banks, captive breeding" },
          { name: "Sustainable use", statement: "Meet needs while maintaining biodiversity — quotas, ecotourism, reduced consumption" },
        ],
        workedExample: {
          problem: "A critically endangered frog exists only in one small cloud forest. Suggest a conservation strategy and justify it.",
          solution: "Protect the cloud forest in situ to preserve its habitat and the frog's niche, combined with captive breeding in a zoo or lab as an ex situ backup against extinction. Monitor the population and control invasive predators.",
        },
      },
      questions: [
        {
          id: "biosl-u6-conservation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "Which is an example of in situ conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A seed bank storing rare plant seeds" },
              { id: "b", text: "A national park protecting a rainforest and its species" },
              { id: "c", text: "A zoo breeding programme for tigers" },
              { id: "d", text: "A botanical garden growing rare orchids" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "In situ conservation", statement: "Protecting species in their natural habitat." },
            ],
            steps: [
              { reasoning: "A national park protects species in their natural habitat; seed banks, zoos and botanical gardens are ex situ.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A national park protecting a rainforest",
            commonErrors: ["Confusing in situ (in place) with ex situ (outside habitat)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "biosl-u6-conservation-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main advantage of ex situ conservation such as seed banks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It preserves species' genetic material as a backup against extinction" },
              { id: "b", text: "It is always cheaper than protecting habitat" },
              { id: "c", text: "It maintains natural ecosystems" },
              { id: "d", text: "It requires no management" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ex situ conservation", statement: "Protection outside natural habitat; preserves genetic material as a safety net." },
            ],
            steps: [
              { reasoning: "Seed banks and zoos store genetic material that can be used for reintroduction or research if wild populations fail.", working: "genetic backup", marks: 1, markCode: "M" },
              { reasoning: "This is a safety net, not a replacement for habitat protection.", working: "safety net role", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Preserves genetic material as a backup",
            commonErrors: ["Claiming ex situ replaces in situ — it complements it."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A fishery has collapsed because fishing quotas were not enforced and fish were caught faster than they could reproduce. Which strategy best addresses the root cause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stocking the sea with fish from a hatchery" },
              { id: "b", text: "Enforcing sustainable quotas and protecting breeding grounds" },
              { id: "c", text: "Banning all fishing permanently" },
              { id: "d", text: "Introducing a predator to control fish numbers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable use", statement: "Harvest rates must not exceed the population's ability to reproduce." },
            ],
            steps: [
              { reasoning: "The root cause is overexploitation — harvesting faster than reproduction.", working: "overexploitation is the cause", marks: 1, markCode: "M" },
              { reasoning: "Enforcing quotas limits catch to sustainable levels; protecting breeding grounds supports recovery.", working: "quotas + breeding protection", marks: 1, markCode: "M" },
              { reasoning: "Stocking treats symptoms; banning all fishing ignores livelihoods; predators worsen the problem.", working: "root cause addressed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Enforce sustainable quotas and protect breeding grounds",
            commonErrors: ["Choosing stocking — it does not fix the overexploitation that caused the collapse."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The Sumatran orangutan is critically endangered, with fewer than 15,000 individuals in fragmented rainforest. Its habitat is being cleared for palm oil plantations, and some individuals are captured for the pet trade.",
          parts: [
            { label: "a", prompt: "Identify two threats to the orangutan described in the scenario.", marks: 2 },
            { label: "b", prompt: "Suggest one in situ and one ex situ conservation strategy for this species.", marks: 2 },
            { label: "c", prompt: "Explain why protecting the rainforest benefits species other than the orangutan.", marks: 2 },
            { label: "d", prompt: "Evaluate the challenges of conserving the orangutan effectively.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "In situ / ex situ conservation", statement: "In situ protects habitat; ex situ protects species outside habitat as a backup." },
            ],
            steps: [
              { part: "a", reasoning: "Any two valid threats: habitat loss from palm oil, fragmentation, pet trade, hunting, low genetic diversity.", working: "e.g. habitat loss + pet trade", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two distinct threats identified.", working: "two threats", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In situ: protect rainforest reserves and corridors, enforce anti-logging laws.", working: "in situ = habitat protection", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ex situ: captive breeding in zoos or sanctuaries as a backup population.", working: "ex situ = captive breeding", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The rainforest supports many other species — protecting it preserves the whole community and ecosystem services.", working: "whole ecosystem protected", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Habitat protection is more efficient than protecting single species.", working: "umbrella protection", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Challenges: economic pressure for palm oil, enforcement difficulties, small fragmented population, genetic diversity loss, cost of long-term protection.", working: "multiple challenges", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Effective conservation requires community involvement, sustainable alternatives and international cooperation — not just reserves.", working: "holistic approach needed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Habitat loss and pet trade (or fragmentation, low diversity). (b) In situ: protect rainforest reserves; ex situ: captive breeding. (c) Protecting rainforest preserves the whole community and ecosystem services. (d) Economic pressure, enforcement, small fragmented population — needs community involvement and sustainable alternatives.",
            commonErrors: ["Listing only one threat.", "Suggesting ex situ alone — it cannot replace habitat protection."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 R1 (d). Accept any valid pair in (a).",
          },
        },
        {
          id: "biosl-u6-conservation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is an example of ex situ conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A national park" },
              { id: "b", text: "A seed bank storing frozen seeds of rare plants" },
              { id: "c", text: "A wildlife corridor between reserves" },
              { id: "d", text: "A marine protected area" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ex situ conservation", statement: "Protecting species or their genetic material outside their natural habitat." },
            ],
            steps: [
              { reasoning: "Seed banks store genetic material away from the wild — ex situ.", working: "ex situ = outside habitat", marks: 1, markCode: "M" },
              { reasoning: "Parks, corridors and marine reserves protect species in place — in situ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A seed bank",
            commonErrors: ["Confusing in situ (in place) with ex situ (outside the habitat)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main advantage of in situ conservation over ex situ conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It protects the whole ecosystem and its services, not just one species" },
              { id: "b", text: "It is always cheaper" },
              { id: "c", text: "It guarantees species never go extinct" },
              { id: "d", text: "It requires no management or enforcement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "In situ conservation", statement: "Protecting habitats preserves entire communities and ecosystem services like pollination and carbon storage." },
            ],
            steps: [
              { reasoning: "Habitat protection conserves all species in the community, not only the target species.", working: "whole community", marks: 1, markCode: "M" },
              { reasoning: "It also maintains ecosystem services that humans depend on.", working: "ecosystem services", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Protects whole ecosystem and services",
            commonErrors: ["Claiming in situ is always cheaper or needs no management."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What does CITES do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It funds zoos around the world" },
              { id: "b", text: "It regulates international trade in endangered species" },
              { id: "c", text: "It bans all hunting worldwide" },
              { id: "d", text: "It creates national parks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "CITES", statement: "Convention on International Trade in Endangered Species — controls trade to prevent overexploitation." },
            ],
            steps: [
              { reasoning: "CITES is an international agreement controlling trade in threatened species.", working: "trade regulation", marks: 1, markCode: "M" },
              { reasoning: "It does not ban hunting or fund zoos — it specifically addresses trade.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Regulates international trade in endangered species",
            commonErrors: ["Thinking CITES protects habitat — it regulates trade."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A captive breeding programme for a rare bird starts with 8 individuals taken from the wild. Calculate: (a) the percentage of the wild population removed if the wild population was 200 birds; (b) the number of breeding pairs if all 8 are paired.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percentage removed (%)", answer: 4 },
              { label: "(b) Breeding pairs", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage calculation", statement: "Percentage = part / whole × 100." },
            ],
            steps: [
              { reasoning: "8 / 200 × 100 = 4% of the wild population removed.", working: "8/200 = 0.04", marks: 1, markCode: "M" },
              { reasoning: "(a) 4%.", marks: 1, markCode: "A" },
              { reasoning: "(b) 8 individuals form 8 / 2 = 4 pairs.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4%; (b) 4 pairs",
            commonErrors: ["Forgetting that pairs need two individuals."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A fish stock is estimated at 120 000 tonnes. Sustainable management allows a catch of at most 15% of the stock per year. Calculate: (a) the maximum sustainable annual catch in tonnes; (b) the stock remaining after one year if exactly that catch is taken and the stock does not grow.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Max annual catch (tonnes)", answer: 18000 },
              { label: "(b) Stock remaining (tonnes)", answer: 102000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sustainable yield", statement: "Catch = percentage × stock; remaining = stock − catch." },
            ],
            steps: [
              { reasoning: "Maximum catch = 15% × 120 000 = 18 000 tonnes.", working: "0.15 × 120000", marks: 1, markCode: "M" },
              { reasoning: "(a) 18 000 tonnes.", marks: 1, markCode: "A" },
              { reasoning: "(b) 120 000 − 18 000 = 102 000 tonnes.", working: "102000", marks: 1, markCode: "M" },
              { reasoning: "Remaining stock is 102 000 tonnes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18 000 tonnes; (b) 102 000 tonnes",
            commonErrors: ["Using 15 tonnes instead of 15%, or subtracting incorrectly."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A zoo proposes cloning a rare antelope to boost its captive population. Which is the strongest objection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clones reduce genetic diversity, making the population vulnerable to disease" },
              { id: "b", text: "Cloning is too expensive to ever be useful" },
              { id: "c", text: "Clones cannot eat or reproduce" },
              { id: "d", text: "Zoos should never keep animals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genetic diversity", statement: "Captive and cloned populations with low diversity are vulnerable to disease and environmental change." },
            ],
            steps: [
              { reasoning: "Cloning produces genetically identical individuals, so the population lacks variation.", working: "no genetic variation", marks: 1, markCode: "M" },
              { reasoning: "Low diversity means one disease or environmental shift could wipe out the whole population.", working: "vulnerability", marks: 1, markCode: "M" },
              { reasoning: "This is the strongest conservation objection to cloning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Clones reduce genetic diversity",
            commonErrors: ["Focusing only on cost — the genetic argument is the core conservation issue."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The Amur leopard is critically endangered with fewer than 100 individuals in the wild. Its habitat is fragmented across the Russian-Chinese border, and poaching continues.",
          parts: [
            { label: "a", prompt: "Identify two reasons why a population of fewer than 100 individuals is at high extinction risk.", marks: 2 },
            { label: "b", prompt: "Suggest an in situ conservation strategy for this species.", marks: 2 },
            { label: "c", prompt: "Suggest an ex situ conservation strategy and explain its role as a 'safety net'.", marks: 2 },
            { label: "d", prompt: "Evaluate the challenges of reintroducing captive-bred leopards to the wild.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endangered species", statement: "Small populations face genetic drift, inbreeding and demographic risks." },
            ],
            steps: [
              { part: "a", reasoning: "Small populations lose genetic diversity through drift and inbreeding, reducing adaptability.", working: "genetic risks", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Demographic risks: few breeding pairs, chance events (disease, disaster) can eliminate the whole population.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any valid in situ strategy: anti-poaching patrols, habitat corridors, protected reserves, community involvement.", working: "e.g. patrols + corridors", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy correctly identified as protecting the species in its habitat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ex situ: captive breeding in zoos/sanctuaries maintains a backup population preserving genetic material.", working: "captive breeding backup", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Safety net: if wild population collapses, captive stock can be used for reintroduction or research.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Challenges: captive animals may lack survival skills, low genetic diversity, poaching still threatens released animals, habitat must be secure first.", working: "reintroduction challenges", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluation: reintroduction works only alongside habitat protection and anti-poaching — not as a standalone fix.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Genetic drift/inbreeding and demographic vulnerability. (b) Anti-poaching + habitat corridors in situ. (c) Captive breeding as genetic backup. (d) Needs secure habitat, survival skills and genetic diversity — supplementary only.",
            commonErrors: ["Suggesting captive breeding alone solves the problem.", "Ignoring that reintroduction requires protected habitat."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c); M1 A1 (d).",
          },
        },
        {
          id: "biosl-u6-conservation-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Compare in situ and ex situ conservation as strategies for protecting biodiversity.",
          parts: [
            { label: "a", prompt: "Define each strategy and give one example.", marks: 2 },
            { label: "b", prompt: "State one advantage of each strategy.", marks: 2 },
            { label: "c", prompt: "Explain why the two strategies are best used together.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "In situ vs ex situ", statement: "In situ protects species in natural habitat; ex situ protects them outside it." },
            ],
            steps: [
              { part: "a", reasoning: "In situ = protection in natural habitat (e.g. national park); ex situ = protection outside habitat (e.g. zoo, seed bank).", working: "definitions + examples", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both definitions and examples correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In situ advantage: preserves whole ecosystems and services; ex situ advantage: provides a genetic backup against extinction.", working: "one advantage each", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both advantages correctly stated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ex situ is a safety net while in situ addresses the root cause (habitat loss); together they provide both immediate protection and long-term security.", working: "complementary roles", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear explanation of complementary value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) In situ protects in habitat (parks); ex situ outside habitat (zoos, seed banks). (b) In situ preserves ecosystems; ex situ gives genetic backup. (c) Ex situ is a safety net; in situ tackles root causes — complementary.",
            commonErrors: ["Listing examples without definitions, or treating the strategies as interchangeable."],
            examinerNote: "M1 A1 (a); M1 A1 (b); M1 A1 (c).",
          },
        },
        {
          id: "biosl-u6-conservation-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A nature reserve covers 250 km² of a region that originally had 1000 km² of forest. What percentage of the original forest is protected?",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage protected (%)", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / whole × 100." },
            ],
            steps: [
              { reasoning: "250 / 1000 × 100 = 25%.", working: "0.25 × 100", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Dividing 1000 by 250 instead of 250 by 1000."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is meant by sustainable use of natural resources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using resources so they are not depleted for future generations" },
              { id: "b", text: "Using as many resources as possible now" },
              { id: "c", text: "Never using any natural resources" },
              { id: "d", text: "Replacing all resources with synthetic ones" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sustainable use", statement: "Meeting present needs without compromising the ability of future generations to meet theirs." },
            ],
            steps: [
              { reasoning: "Sustainable use means harvest rates do not exceed regeneration rates.", working: "use ≤ renewal", marks: 1, markCode: "M" },
              { reasoning: "It ensures resources remain available long-term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Use without depleting for the future",
            commonErrors: ["Confusing sustainability with complete non-use."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the purpose of wildlife corridors in conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To allow animals to move between habitat fragments, maintaining gene flow" },
              { id: "b", text: "To keep animals inside reserves" },
              { id: "c", text: "To provide water for animals" },
              { id: "d", text: "To attract tourists" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wildlife corridors", statement: "Connecting habitat patches allows dispersal and gene flow between isolated populations." },
            ],
            steps: [
              { reasoning: "Corridors link fragments so animals can move between them.", working: "connects fragments", marks: 1, markCode: "M" },
              { reasoning: "Movement maintains genetic exchange and reduces inbreeding in small populations.", working: "gene flow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Allow movement and gene flow",
            commonErrors: ["Thinking corridors trap animals — they connect habitats."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biosl-u6-conservation-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A captive breeding programme for a deer has 24 animals: 12 males and 12 females. Each female produces on average 1.5 offspring per year that survive to breeding age. Calculate: (a) the total offspring produced per year; (b) the population after one year if no deaths occur.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Offspring per year", answer: 18 },
              { label: "(b) Population after 1 year", answer: 42 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Population growth", statement: "New population = current + offspring produced." },
            ],
            steps: [
              { reasoning: "Only females produce offspring: 12 females × 1.5 = 18 offspring.", working: "12 × 1.5", marks: 1, markCode: "M" },
              { reasoning: "(a) 18 offspring.", marks: 1, markCode: "A" },
              { reasoning: "(b) 24 + 18 = 42 animals.", working: "42", marks: 1, markCode: "M" },
              { reasoning: "Population after one year is 42.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18; (b) 42",
            commonErrors: ["Multiplying by all 24 animals instead of only the 12 females."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
      ],
    },
  ],
};
