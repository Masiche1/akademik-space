import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipub-u2-lesson-2-3",
  code: "2-3",
  title: "Evolution, Natural Selection and Ecology",
  goal: "I CAN explain natural selection, speciation, ecosystem dynamics and human impacts at Pre-U standard.",
  standards: ["Cambridge Pre-U Biology 9769", "Evolution and ecology"],
  vocabulary: [
    { term: "Natural selection", definition: "Differential survival/reproduction of variants — those better adapted leave more offspring." },
    { term: "Speciation", definition: "Formation of new species — via geographical isolation (allopatric) or ecological/behavioural barriers (sympatric)." },
    { term: "Gene pool", definition: "All alleles of all genes in an interbreeding population." },
    { term: "Carrying capacity", definition: "Maximum population size an environment can sustain — K in logistic growth." },
    { term: "Succession", definition: "Directional change in community over time — pioneer → climax community." },
    { term: "Biodiversity", definition: "Variety of life — species richness, genetic diversity and ecosystem diversity." },
  ],
  concepts: [
    {
      id: "cipub-u2-s1-evolution",
      title: "Evolution and ecology",
      skill: "Explain natural selection and speciation; describe energy flow, population dynamics and conservation.",
      lesson: {
        sections: [
          {
            heading: "Natural selection and speciation",
            body: "Darwin's mechanism: (1) variation exists in populations, (2) overproduction → struggle for existence, (3) differential survival — better-adapted variants reproduce more, (4) advantageous alleles increase in frequency over generations. Evidence: fossil record, comparative anatomy (homologous vs analogous structures), embryology, molecular biology (DNA/protein similarities). **Speciation**: allopatric (geographic barrier splits population → reproductive isolation) vs sympatric (ecological/behavioural isolation without physical separation). Reproductive isolation mechanisms: prezygotic (mating behaviour, gamete incompatibility) vs postzygotic (hybrid sterility — mules).",
          },
          {
            heading: "Population and community ecology",
            body: "Populations grow exponentially (J-curve) until resources limit → logistic growth (S-curve) approaching carrying capacity K. Density-dependent factors (disease, competition) and density-independent factors (weather, fire) regulate populations. Communities show succession: pioneer species (lichens, mosses) → shrubs → trees → climax community. Energy flows one-way through food chains/webs (~10% transfer efficiency between trophic levels); matter cycles (carbon, nitrogen, water). Decomposers return nutrients.",
          },
          {
            heading: "Human impacts and conservation",
            body: "Human activities reduce biodiversity: habitat destruction (deforestation, urbanisation), overexploitation (overfishing, hunting), pollution (eutrophication, acid rain, plastics), invasive species, climate change. Eutrophication: fertiliser runoff → algal bloom → deoxygenation → fish kills. Conservation strategies: protected areas, sustainable harvesting, reforestation, captive breeding, CITES trade regulation, reducing carbon footprint. Ecosystem services: pollination, water purification, climate regulation — often undervalued economically.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy transfer",
            statement: "~10% of energy passes between trophic levels — pyramids of biomass narrow upward",
          },
          {
            name: "Logistic growth",
            statement: "$\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$ — S-shaped curve to carrying capacity $K$",
          },
        ],
        workedExample: {
          problem: "Explain why only ~10% of energy transfers between trophic levels and the implications for food chain length.",
          solution:
            "Most energy is lost as heat via respiration, egestion and excretion at each level. Energy loss limits chain length — typically only 3-4 trophic levels supported per ecosystem.",
        },
      },
      questions: [
        {
          id: "cipub-u2-evo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ultimate source of all genetic variation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crossing over" },
              { id: "b", text: "Mutation" },
              { id: "c", text: "Independent assortment" },
              { id: "d", text: "Random fertilisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutation",
                statement: "Random DNA changes create new alleles — the only source of genuinely new variation.",
              },
            ],
            steps: [{ reasoning: "Mutation creates new alleles; other mechanisms only reshuffle existing ones.", marks: 1, markCode: "A" }],
            finalAnswer: "Mutation",
          },
        },
        {
          id: "cipub-u2-evo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between allopatric and sympatric speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speciation modes",
                statement: "Allopatric = geographic barrier; sympatric = ecological/behavioural isolation.",
              },
            ],
            steps: [
              {
                reasoning: "Allopatric: physical barrier (river, mountain) splits population → isolated gene pools evolve separately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sympatric: no physical barrier — ecological niches or mating behaviours diverge within same area.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Geographic vs non-geographic isolation.",
          },
        },
        {
          id: "cipub-u2-evo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why energy transfer between trophic levels is only about 10% efficient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "Energy lost as heat via respiration, egestion, excretion, uneaten parts.",
              },
            ],
            steps: [
              {
                reasoning: "Most energy lost as heat through respiration — only ~10% incorporated into biomass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Further losses: egestion (undigested), excretion (waste), parts not eaten.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consequence: food chains limited to ~3-4 trophic levels; top predators rare.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Heat + waste losses → ~10% transfer → short food chains.",
          },
        },
        {
          id: "cipub-u2-evo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the process of eutrophication and its effects on aquatic ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eutrophication",
                statement: "Nutrient enrichment → algal bloom → decomposition → deoxygenation.",
              },
            ],
            steps: [
              {
                reasoning: "Nitrates/phosphates from fertilisers enter water bodies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Algal bloom — rapid growth blocks light, uses dissolved oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Algae die → decomposers (bacteria) multiply → consume more oxygen.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dissolved oxygen falls → fish and other organisms die — ecosystem collapse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fertiliser → algal bloom → bacterial decomposition → deoxygenation → fish kills.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipub-u2-evolution-notes",
      title: "Evolution and ecology — revision notes",
      summary: "Natural selection, speciation, population dynamics, human impacts.",
      sections: [
        {
          heading: "Key skills",
          body: "For selection questions, explain the mechanism step-by-step (variation → selection → inheritance). For ecology, trace causal chains — eutrophication especially.",
        },
        {
          heading: "Exam tips",
          body: "Distinguish density-dependent vs density-independent factors. Know prezygotic vs postzygotic isolation. Energy flows one-way; matter cycles.",
        },
      ],
    },
  ],
};
