import type { Lesson } from "../../../types.ts";

export const lesson811: Lesson = {
  id: "cial-b-u8-lesson-8-1",
  code: "8-1",
  title: "Biodiversity and classification",
  goal: "I CAN describe levels of classification, binomial nomenclature and methods of classifying organisms.",
  standards: ["9700 16.1: biodiversity and classification"],
  vocabulary: [
    { term: "Biodiversity", definition: "Variety of life — species richness and evenness in an area." },
    { term: "Species", definition: "Group of organisms that can interbreed to produce fertile offspring." },
    { term: "Binomial nomenclature", definition: "Two-part scientific name: Genus species (italicised)." },
    { term: "Taxonomy", definition: "Science of naming and classifying organisms." },
    { term: "Dichotomous key", definition: "Tool using paired statements to identify organisms." },
    { term: "Phylogeny", definition: "Evolutionary history/relationships between species." },
  ],
  concepts: [
    {
      id: "cial-b-u8-classification",
      title: "Classification systems",
      skill: "Use taxonomic ranks, binomial names and dichotomous keys.",
      lesson: {
        sections: [
          {
            heading: "Taxonomic hierarchy",
            body: "Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species. Each level groups organisms by shared features; species is the most specific. Humans: Animalia, Chordata, Mammalia, Primates, Hominidae, Homo, sapiens.",
          },
          {
            heading: "Binomial nomenclature",
            body: "Linnaean system: two Latin names — Genus (capitalised) + species (lowercase), italicised or underlined: *Homo sapiens*. Universal, avoids confusion of common names. Named after discoverer sometimes (e.g. *Rosa*).",
          },
          {
            heading: "Dichotomous keys and phylogeny",
            body: "Dichotomous key: series of either/or statements leading to identification. Modern classification (cladistics/phylogenetics) groups by evolutionary relatedness — DNA/protein evidence. Five-kingdom system: Prokaryotae, Protoctista, Fungi, Plantae, Animalia.",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "Domain→Kingdom→Phylum→Class→Order→Family→Genus→Species" },
          { name: "Binomial", statement: "Genus species (italicised, e.g. Homo sapiens)" },
        ],
        workedExample: {
          problem: "Write the binomial name for humans and list three taxonomic ranks.",
          solution: "*Homo sapiens*. Ranks: Kingdom Animalia, Phylum Chordata, Class Mammalia.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of taxonomic ranks from broadest to most specific?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kingdom → Phylum → Class → Order → Family → Genus → Species" },
              { id: "b", text: "Species → Genus → Family → Order → Class → Phylum → Kingdom" },
              { id: "c", text: "Phylum → Kingdom → Class → Order → Family → Genus → Species" },
              { id: "d", text: "Class → Kingdom → Phylum → Order → Family → Genus → Species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Taxonomy", statement: "Kingdom broadest → species most specific." }],
            steps: [{ reasoning: "Correct order: Kingdom→...→Species.", marks: 1, markCode: "A" }],
            finalAnswer: "Kingdom→Phylum→Class→Order→Family→Genus→Species",
          },
        },
        {
          id: "cial-b-u8-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is binomial nomenclature? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binomial", statement: "Genus + species, two Latin names." }],
            steps: [
              { reasoning: "Two-part name: Genus (capital) + species (lowercase), italicised.", marks: 1, markCode: "M" },
              { reasoning: "Example: *Homo sapiens* or *Felis catus*.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genus species e.g. Homo sapiens",
          },
        },
        {
          id: "cial-b-u8-cl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a dichotomous key is used to identify an organism.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dichotomous key", statement: "Paired statements progressively narrow identification." }],
            steps: [
              { reasoning: "Series of paired either/or statements.", marks: 1, markCode: "M" },
              { reasoning: "Each choice leads to next pair until identification.", marks: 1, markCode: "M" },
              { reasoning: "Used for plants, insects, etc. — simple and systematic.", marks: 1, markCode: "M" },
              { reasoning: "Correct procedure described.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paired statements → identification",
          },
        },
        {
          id: "cial-b-u8-cl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Classification.",
          parts: [
            { label: "a", prompt: "List the taxonomic ranks in order.", marks: 3 },
            { label: "b", prompt: "What is binomial nomenclature? Give an example.", marks: 2 },
            { label: "c", prompt: "What is a dichotomous key?", marks: 2 },
            { label: "d", prompt: "Why is *Homo sapiens* written in italics?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Taxonomy", statement: "Ranks, binomial names, keys." }],
            steps: [
              { part: "a", reasoning: "Kingdom, Phylum, Class, Order, Family, Genus, Species.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All seven in correct order.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Domain may precede Kingdom.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Genus + species two-part Latin name.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example given.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Series of paired statements leading to ID.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Italicised to show scientific name convention.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Distinguishes from common names.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 7 ranks (b) Genus species (c) paired statements (d) scientific convention",
          },
        },
      ],
    },
    {
      id: "cial-b-u8-biodiversity",
      title: "Biodiversity and conservation",
      skill: "Explain biodiversity measurement and threats to biodiversity.",
      lesson: {
        sections: [
          {
            heading: "Measuring biodiversity",
            body: "Species richness = number of different species; species evenness = relative abundance. Simpson's index combines both (higher = more diverse). Genetic diversity within species also matters. Hotspots: high diversity + high threat.",
          },
          {
            heading: "Threats",
            body: "Habitat destruction (deforestation, urbanisation), pollution, overexploitation (overfishing, poaching), invasive species, climate change. Loss of habitat → loss of species → loss of ecosystem services.",
          },
          {
            heading: "Conservation",
            body: "In situ: protected areas (national parks, reserves), sustainable management. Ex situ: zoos, botanical gardens, seed banks, captive breeding. CITES regulates trade in endangered species. Sustainable development balances use and protection.",
          },
        ],
        keyFormulas: [
          { name: "Species richness", statement: "Number of different species in an area" },
          { name: "Threats", statement: "Habitat loss, pollution, overexploitation, invasives, climate change" },
        ],
        workedExample: {
          problem: "Why is tropical rainforest biodiversity higher than tundra?",
          solution: "Stable warm climate, high productivity, complex habitats support more species — but it's also more threatened by deforestation.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-bd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'species richness' measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of different species in an area" },
              { id: "b", text: "Total number of organisms" },
              { id: "c", text: "Size of the largest species" },
              { id: "d", text: "Genetic variety within one species" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Species richness", statement: "Count of different species." }],
            steps: [{ reasoning: "Richness = number of species present.", marks: 1, markCode: "A" }],
            finalAnswer: "Number of species",
          },
        },
        {
          id: "cial-b-u8-bd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two threats to biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Threats", statement: "Habitat loss, pollution, overexploitation, invasives, climate change." }],
            steps: [
              { reasoning: "Any two valid threats.", marks: 1, markCode: "A" },
              { reasoning: "Two correct threats named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Habitat loss, pollution, overexploitation, etc.",
          },
        },
        {
          id: "cial-b-u8-bd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between in situ and ex situ conservation with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conservation", statement: "In situ=on-site; ex situ=off-site." }],
            steps: [
              { reasoning: "In situ: protect in natural habitat (national parks, reserves).", marks: 1, markCode: "M" },
              { reasoning: "Ex situ: outside natural habitat (zoos, seed banks, captive breeding).", marks: 1, markCode: "M" },
              { reasoning: "In situ preserves whole ecosystem; ex situ protects species directly.", marks: 1, markCode: "M" },
              { reasoning: "Both correctly distinguished with examples.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "In situ=habitat; ex situ=off-site",
          },
        },
        {
          id: "cial-b-u8-bd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Biodiversity and conservation.",
          parts: [
            { label: "a", prompt: "Define species richness and species evenness.", marks: 2 },
            { label: "b", prompt: "Name three threats to biodiversity.", marks: 3 },
            { label: "c", prompt: "Distinguish in situ and ex situ conservation.", marks: 2 },
            { label: "d", prompt: "Why is habitat destruction the biggest threat?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Biodiversity", statement: "Richness+evenness; threats; conservation strategies." }],
            steps: [
              { part: "a", reasoning: "Richness=number of species; evenness=relative abundance.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Any three: habitat loss, pollution, overexploitation, invasives, climate change.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Three valid threats.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bonus correct threat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In situ=protect in place; ex situ=off-site.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Examples given.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Destroys habitats → species lose homes → extinction cascade.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Affects whole ecosystems and food webs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) richness/evenness (b) 3 threats (c) in/ex situ (d) habitat loss cascade",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u8-biodiversity-notes",
      title: "Biodiversity and classification — revision notes",
      summary: "Taxonomy, binomial nomenclature, biodiversity measurement and conservation.",
      sections: [
        {
          heading: "Classification",
          body: "Ranks: Kingdom→Phylum→Class→Order→Family→Genus→Species. Binomial name = Genus + species italicised (*Homo sapiens*). Dichotomous keys use paired statements. Modern classification uses evolutionary relationships (cladistics).",
        },
        {
          heading: "Biodiversity",
          body: "Species richness = number of species; evenness = abundance distribution. Threats: habitat destruction, pollution, overexploitation, invasive species, climate change. Conservation: in situ (protected areas) vs ex situ (zoos, seed banks).",
        },
        {
          heading: "Exam checklist",
          body: "For classification questions use the correct rank order. For biodiversity distinguish richness from evenness — they're different measures.",
        },
      ],
    },
  ],
};
