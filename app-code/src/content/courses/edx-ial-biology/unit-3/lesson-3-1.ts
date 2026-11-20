import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edialbio-u3-lesson-3-1",
  code: "3-1",
  title: "Classification and Biodiversity",
  goal: "I CAN describe classification systems, biodiversity measures and evolutionary relationships.",
  standards: ["IB3 Biodiversity, evolution and disease", "Classification"],
  vocabulary: [
    { term: "Taxonomy", definition: "Science of naming and classifying organisms (Kingdom → Species)." },
    { term: "Binomial nomenclature", definition: "Two-part Latin name: genus + species (Homo sapiens)." },
    { term: "Biodiversity", definition: "Variety of life — species richness, genetic diversity, habitat diversity." },
    { term: "Phylogeny", definition: "Evolutionary history/relationships between organisms." },
  ],
  concepts: [
    {
      id: "edialbio-u3-classification",
      title: "Classification and species",
      skill: "Describe taxonomic ranks, binomial nomenclature and species concepts.",
      lesson: {
        sections: [
          {
            heading: "Taxonomic hierarchy",
            body: "Kingdom → Phylum → Class → Order → Family → Genus → Species. Each level groups organisms by shared features. Modern systems use DNA evidence (cladistics). Five/six kingdoms: animals, plants, fungi, protists, prokaryotes (and sometimes archaea separately).",
          },
          {
            heading: "Binomial nomenclature",
            body: "Linnaean system: genus (capitalised) + species (lowercase), italicised/binary. Homo sapiens. Advantages: universal, unambiguous, shows relatedness — species in same genus closely related.",
          },
          {
            heading: "Species concept",
            body: "Biological species: group of organisms that can interbreed to produce fertile offspring. Asexual organisms, fossils can't be classified this way → alternative concepts (morphological, genetic).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is binomial nomenclature better than common names?",
          solution: "Common names vary by region/language and can be ambiguous; binomial names are universal and standardised.",
        },
      },
      questions: [
        {
          id: "edialbio-class-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of taxonomic ranks (largest to smallest)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species, Genus, Family, Order" },
              { id: "b", text: "Kingdom, Phylum, Class, Order, Family, Genus, Species" },
              { id: "c", text: "Genus, Species, Kingdom" },
              { id: "d", text: "Order, Class, Phylum" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Taxonomy", statement: "Kingdom→Species hierarchy." }],
            steps: [{ reasoning: "Standard Linnaean order.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Kingdom→Species",
          },
        },
        {
          id: "edialbio-class-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of binomial nomenclature.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binomial", statement: "Genus + species, universal." }],
            steps: [
              { reasoning: "Universal — same name worldwide regardless of language.", marks: 1, markCode: "A" },
              { reasoning: "Unambiguous — avoids confusion of common names.", marks: 1, markCode: "A" },
              { reasoning: "Shows relatedness — same genus = closely related.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Universal, unambiguous, shows relatedness",
            commonErrors: ["Saying it describes appearance."],
          },
        },
        {
          id: "edialbio-class-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Define the biological species concept and state one limitation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Species", statement: "Interbreed → fertile offspring." }],
            steps: [
              { reasoning: "Species: organisms that can interbreed producing fertile offspring.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: asexual organisms don't interbreed — can't apply.", marks: 1, markCode: "A" },
              { reasoning: "Also can't apply to fossils or extinct species.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fertile offspring; fails for asexual/fossils",
            commonErrors: ["Saying hybrids prove species."],
          },
        },
        {
          id: "edialbio-class-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the Linnaean classification system.",
          parts: [
            { label: "a", prompt: "Name the hierarchical ranks.", marks: 3 },
            { label: "b", prompt: "Explain binomial nomenclature.", marks: 3 },
            { label: "c", prompt: "Give one advantage over earlier systems.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Linnaeus", statement: "Nested hierarchy + binomial names." }],
            steps: [
              { part: "a", reasoning: "Kingdom, Phylum, Class, Order, Family, Genus, Species.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each level nested within previous.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Species most specific.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Genus + species, italicised, genus capitalised.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "E.g. Homo sapiens.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Universal scientific name.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Earlier systems used long descriptive names (polynomial).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Binomial is shorter, clearer, unambiguous.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Easier to learn and communicate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "7 ranks; genus+species; unambiguous",
            commonErrors: ["Wrong order of ranks."],
          },
        },
      ],
    },
    {
      id: "edialbio-u3-biodiversity",
      title: "Biodiversity and conservation",
      skill: "Explain measures of biodiversity, threats and conservation strategies.",
      lesson: {
        sections: [
          {
            heading: "Measures of biodiversity",
            body: "Species richness (number of species), species evenness (relative abundance), genetic diversity (within species), habitat diversity. Simpson's index combines richness and evenness. High biodiversity → ecosystem stability and services.",
          },
          {
            heading: "Threats",
            body: "Habitat loss/destruction (deforestation, urbanisation), pollution, overexploitation (hunting/fishing), invasive species, climate change. Causes extinction — current rate far exceeds natural background rate.",
          },
          {
            heading: "Conservation",
            body: "In situ: protected areas (national parks, reserves), sustainable management. Ex situ: zoos, botanical gardens, seed banks, captive breeding. CITES regulates trade; IUCN Red List assesses threat. Sustainable development balances human needs and conservation.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Biodiversity = richness + evenness + genetic diversity" },
        ],
        workedExample: {
          problem: "Why is high biodiversity important for ecosystem stability?",
          solution: "More species → greater chance some survive disturbance; different species perform overlapping roles → redundancy; more genetic diversity → adaptation to change.",
        },
      },
      questions: [
        {
          id: "edialbio-bio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a measure of biodiversity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species richness" },
              { id: "b", text: "Genetic diversity" },
              { id: "c", text: "Population density" },
              { id: "d", text: "Habitat diversity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Biodiversity", statement: "Richness, evenness, genetic, habitat." }],
            steps: [{ reasoning: "Density isn't a biodiversity measure.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Population density",
          },
        },
        {
          id: "edialbio-bio-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between in situ and ex situ conservation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conservation", statement: "In situ=natural habitat; ex situ=outside." }],
            steps: [
              { reasoning: "In situ: protect in natural habitat — national parks, reserves.", marks: 1, markCode: "A" },
              { reasoning: "Ex situ: outside natural habitat — zoos, botanical gardens, seed banks.", marks: 1, markCode: "A" },
              { reasoning: "In situ preferred — maintains whole ecosystem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In situ: protected areas; ex situ: zoos/seed banks",
            commonErrors: ["Reversing the terms."],
          },
        },
        {
          id: "edialbio-bio-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how habitat destruction leads to loss of biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Habitat loss", statement: "Remove habitat → species decline." }],
            steps: [
              { reasoning: "Deforestation/urbanisation removes habitat completely.", marks: 1, markCode: "M" },
              { reasoning: "Species lose food, shelter, breeding sites → populations decline.", marks: 1, markCode: "M" },
              { reasoning: "Habitat fragmentation isolates populations → reduced gene flow, inbreeding.", marks: 1, markCode: "A" },
              { reasoning: "Extinction follows if populations can't recover.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitat loss → population decline → extinction",
            commonErrors: ["Only mentioning direct killing."],
          },
        },
        {
          id: "edialbio-bio-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss strategies for conserving biodiversity.",
          parts: [
            { label: "a", prompt: "In situ methods.", marks: 3 },
            { label: "b", prompt: "Ex situ methods.", marks: 3 },
            { label: "c", prompt: "International agreements.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Conservation", statement: "Protected areas + captive programmes + laws." }],
            steps: [
              { part: "a", reasoning: "National parks, nature reserves, wildlife corridors.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Sustainable management of forests/fisheries.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Maintains whole ecosystem.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zoos, botanical gardens, aquaria.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Seed banks, gene banks, captive breeding.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Insurance against extinction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CITES: regulates international trade in endangered species.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "IUCN Red List: assesses extinction risk.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convention on Biological Diversity: global framework.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sustainable development balances needs.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "In situ + ex situ + international agreements",
            commonErrors: ["Only zoos without habitat protection."],
          },
        },
      ],
    },
  ],
};
