import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypb4-u3-lesson-3-3",
  code: "3-3",
  title: "Ecosystem Balance and Human Impact",
  goal: "I CAN describe ecosystem balance, factors affecting biodiversity, and the impact of human activities with conservation strategies.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Biodiversity", definition: "The variety of life — species diversity, genetic diversity, and ecosystem diversity." },
    { term: "Habitat", definition: "The natural environment where an organism lives — provides food, shelter, water." },
    { term: "Niche", definition: "An organism's role in ecosystem — how it obtains food, interacts, reproduces." },
    { term: "Deforestation", definition: "Clearing of forests — reduces habitat, increases CO₂, causes soil erosion." },
    { term: "Sustainable development", definition: "Meeting present needs without compromising future generations' ability to meet theirs." },
    { term: "Conservation", definition: "Protection and sustainable management of natural resources and biodiversity." },
  ],
  concepts: [
    {
      id: "mypb4-u3-biodiversity",
      title: "Biodiversity and ecosystem services",
      skill: "Explain the importance of biodiversity and ecosystem services for humans.",
      lesson: {
        sections: [
          {
            heading: "Levels of biodiversity",
            body: "**Species diversity**: number and abundance of species. **Genetic diversity**: variation within species (e.g. crop varieties). **Ecosystem diversity**: variety of habitats (forests, wetlands, deserts). High biodiversity = resilient ecosystems.",
          },
          {
            heading: "Ecosystem services",
            body: "**Provisioning**: food, water, timber, medicines. **Regulating**: climate control, pollination, water purification, flood control. **Cultural**: recreation, spiritual value. **Supporting**: nutrient cycling, soil formation. All free but invaluable.",
          },
          {
            heading: "Why biodiversity matters",
            body: "Redundancy = stability: if one species lost, others can fill role. Keystone species maintain balance. Genetic diversity enables adaptation to change. Loss reduces resilience to disease, climate change, pests.",
          },
        ],
        keyFormulas: [
          { name: "Biodiversity", statement: "Species + genetic + ecosystem diversity" },
          { name: "Services", statement: "Provisioning, regulating, cultural, supporting" },
          { name: "Stability", statement: "Diversity → redundancy → resilience" },
        ],
        workedExample: {
          problem: "Why is a forest more stable than a single-species plantation?",
          solution: "Multiple species provide redundancy — if one fails, others maintain ecosystem functions like pollination and pest control.",
        },
      },
      questions: [
        {
          id: "mypb4-u3-bio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does biodiversity measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The variety of life — species, genetic and ecosystem diversity" },
              { id: "b", text: "The number of animals only" },
              { id: "c", text: "The size of habitat" },
              { id: "d", text: "The number of predators" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Variety at species, genetic and ecosystem levels." },
            ],
            steps: [
              { reasoning: "Biodiversity = variety of life at multiple levels.", working: "\\text{biodiversity}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Variety of life",
            commonErrors: ["Only counting species."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-bio-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of a regulating ecosystem service?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pollination of crops by insects" },
              { id: "b", text: "Timber for building" },
              { id: "c", text: "Food from fishing" },
              { id: "d", text: "Medicines from plants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Regulating services", statement: "Processes regulating conditions — pollination, climate, water." },
            ],
            steps: [
              { reasoning: "Pollination regulates plant reproduction — a regulating service.", working: "\\text{pollination}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{regulating}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollination",
            commonErrors: ["Choosing provisioning services."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how high biodiversity increases ecosystem resilience.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple species can perform similar functions; if one is lost others compensate — redundancy provides stability" },
              { id: "b", text: "More species always mean more food" },
              { id: "c", text: "Biodiversity prevents all disease" },
              { id: "d", text: "Species never compete" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resilience", statement: "Functional redundancy → ecosystem maintains services despite disturbance." },
            ],
            steps: [
              { reasoning: "Different species perform similar ecosystem roles.", working: "\\text{redundancy}", marks: 1, markCode: "M" },
              { reasoning: "If one species lost, others can compensate.", working: "\\text{compensation}", marks: 1, markCode: "M" },
              { reasoning: "State the mechanism.", working: "\\text{resilience}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Functional redundancy provides stability",
            commonErrors: ["Saying biodiversity guarantees no change."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A tropical rainforest is cleared for palm oil plantation.",
          parts: [
            { label: "a", prompt: "List three consequences for biodiversity.", marks: 2 },
            { label: "b", prompt: "Explain the effect on carbon cycle.", marks: 2 },
            { label: "c", prompt: "Describe two ecosystem services lost.", marks: 2 },
            { label: "d", prompt: "Suggest two conservation strategies.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deforestation impact", statement: "Habitat loss → biodiversity decline → service loss." },
            ],
            steps: [
              { part: "a", reasoning: "Species extinction, habitat fragmentation, loss of genetic diversity.", working: "\\text{biodiversity loss}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three consequences.", working: "\\text{3 effects}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Trees removed → less photosynthesis → more CO₂ released (burning/decomposition).", working: "\\text{CO\\_2 up}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Carbon sink lost → climate change contribution.", working: "\\text{sink lost}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pollination and climate regulation lost.", working: "\\text{pollination,climate}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Second service.", working: "\\text{2 services}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sustainable palm oil certification; reforestation/protected areas.", working: "\\text{sustainable}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Second strategy.", working: "\\text{conservation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) extinction, fragmentation, genetic loss (b) CO₂ increases (c) pollination, climate regulation lost (d) sustainable palm, reforestation",
            commonErrors: ["In (b), saying deforestation absorbs CO₂."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u3-bio-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which three levels make up biodiversity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species, genetic and ecosystem diversity" },
              { id: "b", text: "Animal, plant and fungal diversity" },
              { id: "c", text: "Large, medium and small diversity" },
              { id: "d", text: "Land, sea and air diversity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity levels", statement: "Species diversity + genetic diversity + ecosystem diversity." },
            ],
            steps: [
              { reasoning: "Biodiversity is measured at three levels.", working: "3\\text{ levels}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Species, genetic and ecosystem",
            commonErrors: ["Listing habitat types instead of diversity levels."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-bio-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is an example of a PROVISIONING ecosystem service?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Timber from forests" },
              { id: "b", text: "Pollination of crops" },
              { id: "c", text: "Climate regulation" },
              { id: "d", text: "Nutrient cycling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Provisioning services", statement: "Products harvested from ecosystems — food, water, timber, medicines." },
            ],
            steps: [
              { reasoning: "Timber is a product extracted from ecosystems = provisioning.", working: "\\text{timber}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{provisioning}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Timber from forests",
            commonErrors: ["Choosing pollination — that's regulating."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does high biodiversity make an ecosystem more resilient to disturbance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple species can perform similar functions — if one is lost, others compensate (functional redundancy)" },
              { id: "b", text: "More species means the ecosystem never changes" },
              { id: "c", text: "Biodiversity prevents all disease" },
              { id: "d", text: "Species never compete with each other" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resilience", statement: "Functional redundancy → ecosystem maintains services despite species loss." },
            ],
            steps: [
              { reasoning: "Different species share similar ecosystem roles.", working: "\\text{redundancy}", marks: 1, markCode: "M" },
              { reasoning: "Loss of one species → others compensate → stability maintained.", working: "\\text{compensate}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Functional redundancy",
            commonErrors: ["Saying biodiversity guarantees stability."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many levels of biodiversity are recognised? (b) How many categories of ecosystem services are recognised?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity and services", statement: "3 biodiversity levels; 4 service categories (provisioning, regulating, cultural, supporting)." },
            ],
            steps: [
              { reasoning: "Species + genetic + ecosystem = 3 levels.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Provisioning, regulating, cultural, supporting = 4.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 4",
            commonErrors: ["Listing service examples instead of categories."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A forest provides: timber (provisioning), insect pollination (regulating), recreation (cultural) and nutrient cycling (supporting). (a) How many ecosystem service categories are represented? (b) How many examples are provisioning services? (c) How many are non-provisioning services?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 1 },
              { label: "c", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Service categories", statement: "Provisioning = products; regulating/cultural/supporting = processes and values." },
            ],
            steps: [
              { reasoning: "All four categories represented.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Only timber is provisioning = 1.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Pollination + recreation + nutrient cycling = 3.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 4, b) 1, c) 3",
            commonErrors: ["Counting pollination as provisioning."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Site A has 50 species and Site B has 20 species. (a) What is the ratio of species richness A:B? (b) What is the difference in species count? (c) What percentage of the combined species total (70) is Site A? (d) What percentage is Site B?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.5 },
              { label: "b", answer: 30 },
              { label: "c", answer: 71.4286 },
              { label: "d", answer: 28.5714 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Species richness", statement: "Ratio = A/B; percentage = count/total x 100." },
            ],
            steps: [
              { reasoning: "Ratio $= 50/20 = 2.5$.", working: "2.5", marks: 1, markCode: "M" },
              { reasoning: "Difference $= 50 - 20 = 30$.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "A % $= 50/70 \\times 100 \\approx 71.4\\%$.", working: "71.4", marks: 1, markCode: "M" },
              { reasoning: "B % $= 20/70 \\times 100 \\approx 28.6\\%$.", working: "28.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 2.5, b) 30, c) 71.4%, d) 28.6%",
            commonErrors: ["In (a), giving 30 (the difference) instead of ratio."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many levels of biodiversity are there?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Species, genetic and ecosystem diversity = 3 levels." },
            ],
            steps: [
              { reasoning: "Three recognised levels.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting habitat types."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u3-bio-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A biodiversity survey counts 100 species: 80 plant species and 20 animal species. (a) What percentage are plants? (b) How many are animals?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Species percentage", statement: "Percentage = group/total x 100." },
            ],
            steps: [
              { reasoning: "$80/100 \\times 100 = 80\\%$ plants.", working: "80\\%", marks: 1, markCode: "M" },
              { reasoning: "Animals = 20 (given count).", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 80%, b) 20",
            commonErrors: ["In (b), giving 20% instead of count."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Field A grows 1 crop variety; Field B grows 8 varieties with 10 plants each. (a) What is the ratio of varieties B:A? (b) How many plants does Field B contain? (c) By what percentage did variety count increase from A to B?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 80 },
              { label: "c", answer: 700 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Genetic diversity", statement: "Ratio = B/A; total = varieties x plants; % increase = (new-old)/old x 100." },
            ],
            steps: [
              { reasoning: "Ratio $= 8/1 = 8$.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "Plants $= 8 \\times 10 = 80$.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "Increase $= (8-1)/1 \\times 100 = 700\\%$.", working: "700\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 8, b) 80, c) 700%",
            commonErrors: ["In (c), giving 8 (ratio) not 700%."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-bio-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the levels of biodiversity.",
          parts: [
            { label: "a", prompt: "Species diversity", marks: 1 },
            { label: "b", prompt: "Genetic diversity", marks: 1 },
            { label: "c", prompt: "Ecosystem diversity", marks: 1 },
            { label: "d", prompt: "Biodiversity", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Biodiversity", statement: "Variety at species, genetic and ecosystem levels." },
            ],
            steps: [
              { part: "a", reasoning: "Number and abundance of species in an area.", working: "\\text{species}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Variation within a species (alleles, varieties).", working: "\\text{genes}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Variety of habitats/ecosystems in a region.", working: "\\text{habitats}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Overall variety of life at all levels.", working: "\\text{variety}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Species=number of species; genetic=variation within; ecosystem=habitat variety; biodiversity=all combined",
            commonErrors: ["Conflating species and genetic diversity."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-bio-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain the four categories of ecosystem services with examples.",
          parts: [
            { label: "a", prompt: "Provisioning", marks: 1 },
            { label: "b", prompt: "Regulating", marks: 1 },
            { label: "c", prompt: "Cultural", marks: 1 },
            { label: "d", prompt: "Supporting", marks: 1 },
            { label: "e", prompt: "Give one example for each category", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecosystem services", statement: "Provisioning=products; regulating=processes; cultural=values; supporting=underlying processes." },
            ],
            steps: [
              { part: "a", reasoning: "Products extracted: food, water, timber, medicines.", working: "\\text{products}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Regulation of conditions: pollination, climate, water purification.", working: "\\text{regulate}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Non-material benefits: recreation, spiritual, aesthetic.", working: "\\text{values}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Underlying processes: nutrient cycling, soil formation, photosynthesis.", working: "\\text{processes}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "One correct example for each of the four categories.", working: "\\text{examples}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Second example or complete coverage.", working: "\\text{complete}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Provisioning=products; regulating=conditions; cultural=values; supporting=processes; e.g. timber, pollination, recreation, nutrient cycling",
            commonErrors: ["Classifying pollination as provisioning."],
            examinerNote: "A1 for each category, M1 A1 for examples.",
          },
        },
        {
          id: "mypb4-u3-bio-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is genetic diversity within a crop species important for food security?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different varieties have different resistances — some survive pests/disease/climate that would wipe out a uniform crop" },
              { id: "b", text: "It makes crops grow faster always" },
              { id: "c", text: "It reduces the need for water" },
              { id: "d", text: "It prevents all pests" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genetic diversity value", statement: "Varied genotypes → some resist threats → insurance against crop failure." },
            ],
            steps: [
              { reasoning: "Different varieties carry different resistance genes.", working: "\\text{resistance}", marks: 1, markCode: "M" },
              { reasoning: "Uniform crop = all vulnerable to same threat.", working: "\\text{uniform risk}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Varied resistance protects against failure",
            commonErrors: ["Saying diversity guarantees higher yield."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u3-conservation",
      title: "Conservation and Sustainable Management",
      skill: "Describe conservation strategies and sustainable resource management in practice.",
      lesson: {
        sections: [
          {
            heading: "In-situ conservation",
            body: "Protect species in natural habitats: **national parks**, **wildlife reserves**, **marine protected areas**. Advantages: protects entire ecosystems, allows natural behaviors, maintains genetic diversity. Challenges: needs enforcement, poaching, habitat connectivity.",
          },
          {
            heading: "Ex-situ conservation",
            body: "Protect species outside natural habitat: **zoos**, **botanical gardens**, **seed banks**, **breeding programs**. Advantages: protects endangered species from immediate threats; research/education. Limitations: can't protect whole ecosystems; animals may not thrive.",
          },
          {
            heading: "Sustainable management",
            body: "**Sustainable fishing**: quotas, mesh sizes, closed seasons. **Forestry**: selective logging, replanting, certification (FSC). **Agriculture**: crop rotation, organic farming, reduced pesticides. **Water**: treatment, efficient use, pollution control. Goal: meet needs without depleting resources.",
          },
        ],
        keyFormulas: [
          { name: "In-situ", statement: "National parks, reserves — protect in natural habitat" },
          { name: "Ex-situ", statement: "Zoos, seed banks — protect outside habitat" },
          { name: "Sustainability", statement: "Use without depletion" },
        ],
        workedExample: {
          problem: "Compare in-situ and ex-situ conservation for an endangered bird.",
          solution: "In-situ: protect its forest habitat + anti-poaching. Ex-situ: captive breeding + release. Both needed — ex-situ for immediate safety, in-situ for long-term survival.",
        },
      },
      questions: [
        {
          id: "mypb4-u3-cons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is in-situ conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protecting species in their natural habitat" },
              { id: "b", text: "Keeping species in zoos" },
              { id: "c", text: "Storing seeds in banks" },
              { id: "d", text: "Breeding in captivity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "In-situ", statement: "Protection within natural habitat — parks, reserves." },
            ],
            steps: [
              { reasoning: "In-situ = in place, natural habitat.", working: "\\text{in-situ}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Natural habitat",
            commonErrors: ["Confusing with ex-situ."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-cons-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an advantage of ex-situ conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protects species immediately from threats like poaching and habitat loss" },
              { id: "b", text: "Protects entire ecosystems" },
              { id: "c", text: "Is always cheaper" },
              { id: "d", text: "Requires no management" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ex-situ advantage", statement: "Immediate protection from external threats." },
            ],
            steps: [
              { reasoning: "Zoos/breeding programs protect from immediate dangers.", working: "\\text{immediate protection}", marks: 1, markCode: "M" },
              { reasoning: "State the advantage.", working: "\\text{ex-situ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Immediate protection from threats",
            commonErrors: ["Claiming it protects whole ecosystems."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why both in-situ and ex-situ conservation are needed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In-situ protects ecosystems and genetic diversity long-term; ex-situ provides immediate safety and breeding programs — complementary" },
              { id: "b", text: "Only one is ever needed" },
              { id: "c", text: "In-situ is always better" },
              { id: "d", text: "Ex-situ replaces in-situ" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary conservation", statement: "In-situ = ecosystem protection; ex-situ = emergency backup." },
            ],
            steps: [
              { reasoning: "In-situ protects whole ecosystems and natural behaviors.", working: "\\text{ecosystem}", marks: 1, markCode: "M" },
              { reasoning: "Ex-situ protects from immediate threats + enables breeding.", working: "\\text{emergency}", marks: 1, markCode: "M" },
              { reasoning: "State why both needed.", working: "\\text{complementary}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complementary — ecosystem + emergency protection",
            commonErrors: ["Saying they are alternatives."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A fishery is overexploited and fish stocks collapse.",
          parts: [
            { label: "a", prompt: "Explain how overfishing caused the collapse.", marks: 2 },
            { label: "b", prompt: "Describe two sustainable fishing practices.", marks: 2 },
            { label: "c", prompt: "Explain the role of quotas and closed seasons.", marks: 2 },
            { label: "d", prompt: "Suggest how the fishery could recover.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable fisheries", statement: "Harvest below reproduction rate → stocks recover." },
            ],
            steps: [
              { part: "a", reasoning: "Catch rate exceeds reproduction → fewer fish each year.", working: "\\text{overexploitation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Eventually below minimum viable population.", working: "\\text{collapse}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mesh size limits (allow juveniles to escape); selective fishing gear.", working: "\\text{mesh size}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second practice.", working: "\\text{2 practices}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Quotas limit total catch; closed seasons protect spawning.", working: "\\text{quota+season}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Allow population recovery.", working: "\\text{recovery}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reduce quotas, enforce regulations, protected areas, aquaculture.", working: "\\text{recovery plan}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Allow time for stocks to rebuild.", working: "\\text{time}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) catch>reproduction (b) mesh size, selective gear (c) quota+season protect stocks (d) reduce catch, protected areas, time",
            commonErrors: ["In (c), thinking quotas are permanent bans."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u3-cons-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ex-situ conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protecting species outside their natural habitat — zoos, seed banks, breeding programmes" },
              { id: "b", text: "Protecting species in national parks" },
              { id: "c", text: "Leaving habitats completely alone" },
              { id: "d", text: "Hunting endangered species legally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ex-situ", statement: "'Out of place' — protection outside natural habitat." },
            ],
            steps: [
              { reasoning: "Ex-situ = zoos, botanical gardens, seed banks, captive breeding.", working: "\\text{ex-situ}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Outside natural habitat",
            commonErrors: ["Confusing with in-situ."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u3-cons-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is an example of IN-SITU conservation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A national park protecting a rainforest" },
              { id: "b", text: "A zoo breeding programme" },
              { id: "c", text: "A seed bank storing crop seeds" },
              { id: "d", text: "A botanical garden" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "In-situ", statement: "Protection within natural habitat — parks, reserves, marine protected areas." },
            ],
            steps: [
              { reasoning: "National park protects species in natural habitat.", working: "\\text{park}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{in-situ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "National park",
            commonErrors: ["Choosing zoo — that's ex-situ."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are BOTH in-situ and ex-situ conservation strategies needed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In-situ protects whole ecosystems long-term; ex-situ provides immediate safety and breeding backup — they complement each other" },
              { id: "b", text: "Only one strategy is ever sufficient" },
              { id: "c", text: "Ex-situ completely replaces in-situ" },
              { id: "d", text: "In-situ is only for plants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary conservation", statement: "In-situ = ecosystem protection; ex-situ = emergency backup and research." },
            ],
            steps: [
              { reasoning: "In-situ maintains ecosystems, genetic diversity and natural behavior.", working: "\\text{ecosystem}", marks: 1, markCode: "M" },
              { reasoning: "Ex-situ protects from immediate threats + enables captive breeding.", working: "\\text{emergency}", marks: 1, markCode: "M" },
              { reasoning: "State why both needed.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Complementary strategies",
            commonErrors: ["Saying they are alternatives."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many main types of in-situ conservation are listed (national parks, wildlife reserves, marine protected areas)? (b) How many main types of ex-situ conservation are listed (zoos, botanical gardens, seed banks/breeding programmes)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservation types", statement: "In-situ: parks, reserves, MPAs (3); ex-situ: zoos, gardens, seed banks/breeding (3)." },
            ],
            steps: [
              { reasoning: "National parks, reserves, MPAs = 3.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Zoos, botanical gardens, seed banks = 3.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 3",
            commonErrors: ["Counting breeding programmes separately from seed banks."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A wildlife reserve of 200 km² protects 60 species evenly distributed. (a) How many species per km²? (b) If the reserve expands to 400 km² at the same density, how many species could it protect? (c) By what percentage did species capacity increase?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.3 },
              { label: "b", answer: 120 },
              { label: "c", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Species density", statement: "Density = species/area; new count = density x new area." },
            ],
            steps: [
              { reasoning: "Density $= 60/200 = 0.3$ species per km².", working: "0.3", marks: 1, markCode: "M" },
              { reasoning: "New $= 0.3 \\times 400 = 120$ species.", working: "120", marks: 1, markCode: "M" },
              { reasoning: "Increase $= (120-60)/60 \\times 100 = 100\\%$.", working: "100\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 0.3, b) 120, c) 100%",
            commonErrors: ["In (b), doubling 60 to 120 is coincidentally correct but reasoning is density-based."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A fish stock is estimated at 10,000 tonnes. A sustainable quota allows 10% of the stock to be caught per year. (a) What is the annual quota in tonnes? (b) If fishers catch 800 tonnes legally and 200 tonnes illegally, what is the total catch? (c) By how much does the total catch exceed the quota? (d) What percentage over quota is the total catch?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000 },
              { label: "b", answer: 1000 },
              { label: "c", answer: 0 },
              { label: "d", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fishing quota", statement: "Quota = %/100 x stock; excess = total - quota." },
            ],
            steps: [
              { reasoning: "Quota $= 0.10 \\times 10000 = 1000$ tonnes.", working: "1000", marks: 1, markCode: "M" },
              { reasoning: "Total catch $= 800 + 200 = 1000$ tonnes.", working: "1000", marks: 1, markCode: "M" },
              { reasoning: "Excess $= 1000 - 1000 = 0$ tonnes.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "Over quota $= 0\\%$ — exactly at quota.", working: "0\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 1000, b) 1000, c) 0, d) 0%",
            commonErrors: ["In (c), computing 1000-800 forgetting illegal catch."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main approaches to conservation are there (in-situ and ex-situ)?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservation approaches", statement: "In-situ + ex-situ = 2 main strategies." },
            ],
            steps: [
              { reasoning: "Two recognised approaches.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting sustainable management as a third approach."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u3-cons-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A seed bank stores 1000 seed varieties. In a germination test, 250 seeds successfully germinate. (a) What percentage germinated? (b) How many seeds failed to germinate?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25 },
              { label: "b", answer: 750 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Germination percentage", statement: "Germinated % = success/total x 100; failures = total - success." },
            ],
            steps: [
              { reasoning: "$250/1000 \\times 100 = 25\\%$.", working: "25\\%", marks: 1, markCode: "M" },
              { reasoning: "Failures $= 1000 - 250 = 750$.", working: "750", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 25%, b) 750",
            commonErrors: ["In (b), giving 250 instead of failures."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An endangered animal population of 1000 declines by 5% per year due to poaching. (a) Population after 1 year? (b) After 2 years? (c) After 10 years?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 950 },
              { label: "b", answer: 902.5 },
              { label: "c", answer: 598.74 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Decline rate", statement: "Each year x 0.95 (compound decline)." },
            ],
            steps: [
              { reasoning: "$1000 \\times 0.95 = 950$.", working: "950", marks: 1, markCode: "M" },
              { reasoning: "$950 \\times 0.95 = 902.5$.", working: "902.5", marks: 1, markCode: "M" },
              { reasoning: "$1000 \\times 0.95^{10} \\approx 598.7$.", working: "598.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 950, b) 902.5, c) ~599",
            commonErrors: ["Subtracting 50 each year (simple decline error)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u3-cons-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following conservation terms.",
          parts: [
            { label: "a", prompt: "In-situ conservation", marks: 1 },
            { label: "b", prompt: "Ex-situ conservation", marks: 1 },
            { label: "c", prompt: "Sustainable development", marks: 1 },
            { label: "d", prompt: "Conservation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conservation terms", statement: "In-situ=natural habitat; ex-situ=outside; sustainable=without depletion; conservation=protection." },
            ],
            steps: [
              { part: "a", reasoning: "Protecting species in natural habitat.", working: "\\text{habitat}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Protecting species outside natural habitat.", working: "\\text{outside}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Meeting needs without compromising future generations.", working: "\\text{future}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Protection and sustainable management of resources/biodiversity.", working: "\\text{protection}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In-situ=natural habitat; ex-situ=outside; sustainable=without depletion; conservation=protection",
            commonErrors: ["Swapping in-situ and ex-situ."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u3-cons-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Compare in-situ and ex-situ conservation strategies.",
          parts: [
            { label: "a", prompt: "Define each strategy", marks: 1 },
            { label: "b", prompt: "Give one example of each", marks: 1 },
            { label: "c", prompt: "State one advantage of in-situ", marks: 1 },
            { label: "d", prompt: "State one advantage of ex-situ", marks: 1 },
            { label: "e", prompt: "State one limitation of each", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "In-situ vs ex-situ", statement: "In-situ protects ecosystems; ex-situ protects individuals — complementary." },
            ],
            steps: [
              { part: "a", reasoning: "In-situ = natural habitat; ex-situ = outside habitat.", working: "\\text{definitions}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. national park vs zoo/seed bank.", working: "\\text{examples}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Protects whole ecosystems, genetic diversity, natural behaviour.", working: "\\text{ecosystem}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Immediate protection from threats; enables breeding programmes.", working: "\\text{immediate}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "In-situ: needs enforcement/land; ex-situ: can't protect ecosystems.", working: "\\text{limits}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Second limitation for each.", working: "\\text{2 limits}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In-situ=natural habitat/ecosystem protection; ex-situ=outside/immediate safety; complementary",
            commonErrors: ["Claiming ex-situ replaces in-situ."],
            examinerNote: "A1 for (a)-(d), M1 A1 for (e).",
          },
        },
        {
          id: "mypb4-u3-cons-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is sustainable management of resources (e.g. fishing quotas, selective logging) better than a total ban for local communities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It allows continued use at levels that don't deplete stocks — balancing human needs with conservation" },
              { id: "b", text: "Bans are always better" },
              { id: "c", text: "Sustainable use increases resource stocks" },
              { id: "d", text: "Quotas eliminate all fishing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable management", statement: "Harvest below reproduction rate → resource persists + communities benefit." },
            ],
            steps: [
              { reasoning: "Quotas/limits keep harvest within sustainable yield.", working: "\\text{quota}", marks: 1, markCode: "M" },
              { reasoning: "Communities keep livelihoods while stocks recover/persist.", working: "\\text{balance}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Balances use with conservation",
            commonErrors: ["Saying sustainable management eliminates resource use."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
