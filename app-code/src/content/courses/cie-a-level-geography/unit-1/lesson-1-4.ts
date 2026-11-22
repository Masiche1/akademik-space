import type { Lesson } from "../../../types.ts";

export const lesson514: Lesson = {
  id: "ciealgeo-u1-lesson-1-4",
  code: "1-4",
  title: "Ecosystems and Biodiversity",
  goal: "I CAN explain ecosystem structure, succession and conservation.",
  standards: ["Cambridge A Level Geography 9696", "Paper 1: ecosystems"],

  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms + environment." },
    { term: "Food chain", definition: "Sequence of who eats whom." },
    { term: "Food web", definition: "Interconnected food chains." },
    { term: "Succession", definition: "Change in ecosystem over time." },
    { term: "Biodiversity", definition: "Variety of life in ecosystem." },
    {
      term: "Carrying capacity",
      definition: "Max population environment supports.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u1-s4-eco",
      title: "Ecosystems",
      skill: "Analyse ecosystem structure and conservation.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem structure",
            body: "Producers → primary consumers → secondary consumers → decomposers. Energy flow through trophic levels. Nutrient cycles (carbon, nitrogen).",
          },
          {
            heading: "Succession",
            body: "Pioneer species → intermediate → climax community. Primary (new land) vs secondary (after disturbance).",
          },
          {
            heading: "Biodiversity",
            body: "Species richness, evenness, genetic diversity. Hotspots: tropical rainforests, coral reefs. Threats: habitat loss, climate change, invasive species.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "organisms + environment" },
          { name: "Succession", statement: "ecosystem change" },
          { name: "Biodiversity", statement: "life variety" },
        ],
        workedExample: {
          problem: "Why is biodiversity important for ecosystem stability?",
          solution:
            "More species = more redundancy, better resistance to disturbance, greater ecosystem services.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u1-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of climate",
              },
              {
                id: "b",
                text: "Just animals",
              },
              {
                id: "c",
                text: "Community of organisms + environment",
              },
              {
                id: "d",
                text: "Just plants",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecosystem",
                statement: "Organisms + environment.",
              },
            ],
            steps: [
              {
                reasoning: "Ecosystem = organisms + environment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Organisms + environment",
          },
        },
        {
          id: "ciealgeo-u1-eco-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is succession?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Succession",
                statement: "Ecosystem change.",
              },
            ],
            steps: [
              {
                reasoning: "Change in ecosystem over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pioneer → climax community.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ecosystem change",
          },
        },
        {
          id: "ciealgeo-u1-eco-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is biodiversity important?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Biodiversity",
                statement: "Importance.",
              },
            ],
            steps: [
              {
                reasoning: "Ecosystem stability/resilience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ecosystem services (pollination, water).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Genetic resources, potential medicines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stability, services, resources",
          },
        },
        {
          id: "ciealgeo-u1-eco-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ecosystem, food chain, food web, succession, biodiversity, carrying capacity. (b) What is ecosystem? (c) What is succession? (d) What is biodiversity? (e) Why is biodiversity important? (f) What are ecosystem services? (g) What threatens biodiversity? (h) Evaluate conservation strategies.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ecosystems",
                statement: "Analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Organisms + environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Ecosystem change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Life variety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Stability, services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Pollination, water, climate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Habitat loss, climate, invasive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Protected areas, sustainable use effective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ecosystem analysis.",
          },
        },
        {
          id: "ciealgeo-u1-eco-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an ecosystem, producers are organisms that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Live only in oceans" },
              { id: "b", text: "Eat only other animals" },
              { id: "c", text: "Make their own food through photosynthesis" },
              { id: "d", text: "Break down dead matter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Producers", statement: "Autotrophs that convert light energy into food." },
            ],
            steps: [{ reasoning: "Producers form the base of food chains through photosynthesis.", marks: 1, markCode: "M" }],
            finalAnswer: "They produce their own food by photosynthesis.",
          },
        },
        {
          id: "ciealgeo-u1-eco-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a simple food chain, producers contain 1000 kcal of energy and about 10% is transferred to each higher trophic level. (a) How much energy reaches primary consumers? (b) How much reaches secondary consumers?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100, unit: "kcal" },
              { label: "b", answer: 10, unit: "kcal" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transfer", statement: "Only about 10% of energy passes to the next trophic level." },
            ],
            steps: [
              { part: "a", reasoning: "1000 x 0.10 = 100 kcal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "100 x 0.10 = 10 kcal.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 100 kcal; b) 10 kcal",
            commonErrors: ["Assuming all energy is transferred."],
          },
        },
        {
          id: "ciealgeo-u1-eco-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A food web differs from a food chain because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contains only producers" },
              { id: "b", text: "Describes nutrient cycles only" },
              { id: "c", text: "Always has exactly four levels" },
              { id: "d", text: "Shows many interconnected feeding relationships" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Food web", statement: "A network of interconnected food chains." },
            ],
            steps: [{ reasoning: "Food webs show multiple feeding links and alternative food sources.", marks: 1, markCode: "M" }],
            finalAnswer: "It shows interconnected feeding relationships.",
          },
        },
        {
          id: "ciealgeo-u1-eco-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how energy and nutrients move through an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ecosystem flows", statement: "Energy flows one way while nutrients cycle." },
            ],
            steps: [
              { reasoning: "Producers capture solar energy through photosynthesis.", marks: 1, markCode: "M" },
              { reasoning: "Consumers transfer energy by feeding, with losses at each level.", marks: 1, markCode: "M" },
              { reasoning: "Decomposers release nutrients back into soil and water for reuse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy flows from producers to consumers and is lost as heat; nutrients cycle through decomposers.",
            commonErrors: ["Saying nutrients flow in only one direction."],
          },
        },
        {
          id: "ciealgeo-u1-eco-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pioneer species in primary succession are usually:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Top predators only" },
              { id: "b", text: "Species dependent on mature forest shade" },
              { id: "c", text: "Large trees requiring deep soil" },
              { id: "d", text: "Hardy organisms able to colonise bare rock or soil" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pioneer species", statement: "First colonisers of newly exposed or disturbed surfaces." },
            ],
            steps: [{ reasoning: "Pioneers tolerate harsh conditions and begin soil formation.", marks: 1, markCode: "M" }],
            finalAnswer: "Hardy colonisers of bare surfaces.",
          },
        },
        {
          id: "ciealgeo-u1-eco-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A quadrat survey records 12 individuals of species A, 8 of species B and 4 of species C. (a) What is the total species richness? (b) What percentage of all individuals belong to species A?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "species" },
              { label: "b", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Biodiversity survey", statement: "Richness counts species; percentage uses individuals." },
            ],
            steps: [
              { part: "a", reasoning: "Species A, B and C give richness = 3.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "12 / (12 + 8 + 4) x 100 = 50%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 3 species; b) 50%",
            commonErrors: ["Counting individuals instead of species for richness."],
          },
        },
        {
          id: "ciealgeo-u1-eco-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the general sequence of primary succession on newly exposed rock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Succession", statement: "Conditions and species change as soil and biomass accumulate." },
            ],
            steps: [
              { reasoning: "Pioneer lichens and mosses colonise bare rock.", marks: 1, markCode: "M" },
              { reasoning: "They weather rock and add organic matter, allowing grasses and shrubs.", marks: 1, markCode: "M" },
              { reasoning: "Eventually trees establish and a more stable climax community develops.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lichens/mosses → grasses/shrubs → trees and climax community.",
            commonErrors: ["Starting with mature forest species."],
          },
        },
        {
          id: "ciealgeo-u1-eco-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Secondary succession differs from primary succession because it begins:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On completely bare volcanic rock only" },
              { id: "b", text: "With no previous ecosystem disturbance" },
              { id: "c", text: "After the first pioneer lichen" },
              { id: "d", text: "On soil that already contains seeds and nutrients" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Secondary succession", statement: "Recovery on disturbed land where soil remains." },
            ],
            steps: [{ reasoning: "Secondary succession starts after disturbance with existing soil and propagules.", marks: 1, markCode: "M" }],
            finalAnswer: "On existing soil after disturbance.",
          },
        },
        {
          id: "ciealgeo-u1-eco-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reserve has a carrying capacity of 200 animals. The current population is 160 animals. (a) What percentage of carrying capacity is currently occupied? (b) How many more animals could be supported?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80, unit: "%" },
              { label: "b", answer: 40, unit: "animals" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Carrying capacity", statement: "Compare population with maximum sustainable population." },
            ],
            steps: [
              { part: "a", reasoning: "160 / 200 x 100 = 80%.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "200 - 160 = 40 animals.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 80%; b) 40 animals",
            commonErrors: ["Exceeding capacity is assumed rather than calculated."],
          },
        },
        {
          id: "ciealgeo-u1-eco-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate protected areas as a strategy for conserving biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation", statement: "Protection can preserve habitat but must be managed and resourced." },
            ],
            steps: [
              { reasoning: "They reduce habitat loss, hunting and disturbance.", marks: 1, markCode: "M" },
              { reasoning: "They can support ecotourism and research.", marks: 1, markCode: "M" },
              { reasoning: "Funding, enforcement and community support may be limited.", marks: 1, markCode: "A" },
              { reasoning: "Effectiveness depends on location, management and surrounding land use.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protected areas are valuable but need effective management and community support.",
            commonErrors: ["Assuming designation alone guarantees conservation."],
          },
        },
        {
          id: "ciealgeo-u1-eco-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Decomposers are important in ecosystems mainly because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capture sunlight for producers" },
              { id: "b", text: "Always occupy the top trophic level" },
              { id: "c", text: "Pollinate flowering plants" },
              { id: "d", text: "Break down dead organic matter and release nutrients" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decomposers", statement: "Organisms that recycle nutrients from dead matter." },
            ],
            steps: [{ reasoning: "Decomposers return nutrients to the environment for reuse.", marks: 1, markCode: "M" }],
            finalAnswer: "They recycle nutrients from dead matter.",
          },
        },
        {
          id: "ciealgeo-u1-eco-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why tropical rainforests and coral reefs are described as biodiversity hotspots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Biodiversity hotspots", statement: "Hotspots contain exceptional species richness and face major threats." },
            ],
            steps: [
              { reasoning: "Warm, stable environments support many specialised species.", marks: 1, markCode: "M" },
              { reasoning: "Complex habitats provide many ecological niches.", marks: 1, markCode: "M" },
              { reasoning: "High endemism and rapid habitat loss make conservation urgent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They contain exceptional diversity and many unique species under threat.",
            commonErrors: ["Confusing hotspots with high human population areas."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u1-eco-notes",
      title: "Ecosystems — notes",
      summary:
        "Ecosystem=organisms+environment. Succession=pioneer→climax. Biodiversity crucial.",
      sections: [
        {
          heading: "Key idea",
          body: "Biodiversity provides ecosystem services and resilience.",
        },
        {
          heading: "Threats",
          body: "Habitat loss, climate change, invasive species reduce biodiversity.",
        },
      ],
    },
  ],
};
