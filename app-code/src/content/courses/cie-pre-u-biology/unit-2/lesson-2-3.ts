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
              { id: "a", text: "Independent assortment" },
              { id: "b", text: "Random fertilisation" },
              { id: "c", text: "Crossing over" },
              { id: "d", text: "Mutation" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cipub-u2-evo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homologous structures, such as the wing of a bat and the arm of a human, provide evidence for evolution because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are examples of convergent evolution" },
              { id: "b", text: "Show that the species share a common ancestor" },
              { id: "c", text: "Result from similar environmental pressures only" },
              { id: "d", text: "Prove the structures have identical functions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative anatomy",
                statement: "Homologous structures share the same basic plan despite different functions — evidence of descent from a common ancestor.",
              },
            ],
            steps: [{ reasoning: "Same underlying bone structure in different species indicates inheritance from a common ancestor that was modified by selection.", marks: 1, markCode: "A" }],
            finalAnswer: "(a) Common ancestry",
          },
        },
        {
          id: "cipub-u2-evo-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Producers in a food chain fix $20\\ 000\\ \\text{kJ}$ of energy. Assuming $10\\%$ energy transfer between trophic levels, calculate the energy available to (a) primary consumers and (b) secondary consumers.",
          response: {
            type: "numeric",
            parts: [
              { label: "Primary consumers (kJ)", answer: 2000, unit: "kJ" },
              { label: "Secondary consumers (kJ)", answer: 200, unit: "kJ" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy transfer",
                statement: "About $10\\%$ of energy passes to the next trophic level; the rest is lost as heat, egestion and excretion.",
              },
            ],
            steps: [
              {
                reasoning: "Primary consumers receive $10\\%$ of producer energy: $0.10 \\times 20\\ 000$.",
                working: "0.10 \\times 20\\ 000 = 2\\ 000\\ \\text{kJ}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Secondary consumers receive $10\\%$ of the primary consumer energy: $0.10 \\times 2\\ 000$.",
                working: "0.10 \\times 2\\ 000 = 200\\ \\text{kJ}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $2000\\ \\text{kJ}$; (b) $200\\ \\text{kJ}$",
          },
        },
        {
          id: "cipub-u2-evo-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between prezygotic and postzygotic reproductive isolation, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reproductive isolation",
                statement: "Prezygotic barriers prevent fertilisation; postzygotic barriers act after the zygote forms.",
              },
            ],
            steps: [
              {
                reasoning: "Prezygotic isolation prevents mating or fertilisation — e.g. different mating calls, flowering at different times, or gamete incompatibility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Postzygotic isolation acts after fertilisation — e.g. hybrid inviability or sterility such as mules being unable to reproduce.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Before vs after fertilisation barriers.",
          },
        },
        {
          id: "cipub-u2-evo-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organism is a typical pioneer species in primary succession on bare rock?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oak tree" },
              { id: "b", text: "Seaweed" },
              { id: "c", text: "Redwood" },
              { id: "d", text: "Lichen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pioneer species",
                statement: "The first colonisers of a barren habitat — lichens and mosses can survive on bare rock and begin soil formation.",
              },
            ],
            steps: [{ reasoning: "Lichens tolerate harsh, nutrient-poor conditions and secrete acids that weather rock — classic pioneers.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) Lichen",
          },
        },
        {
          id: "cipub-u2-evo-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bacterial population of 300 cells doubles every hour. Assuming unlimited resources, calculate the population size after 4 hours.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4800, unit: "cells" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exponential growth",
                statement: "$N = N_0 \\times 2^{t}$ for a population that doubles every time unit.",
              },
            ],
            steps: [
              {
                reasoning: "Each hour doubles the population: $N = 300 \\times 2^4$.",
                working: "300 \\times 2^4 = 300 \\times 16",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This gives $4800$ cells — exponential (J-shaped) growth with no resource limit.",
                working: "= 4800",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4800 cells",
          },
        },
        {
          id: "cipub-u2-evo-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how natural selection can produce evolutionary change in a population over many generations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Natural selection",
                statement: "Variation → struggle for existence → differential survival and reproduction → change in allele frequencies.",
              },
            ],
            steps: [
              {
                reasoning: "Variation exists within the population because of mutation and meiosis — individuals differ in their alleles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Organisms overproduce offspring, so more are born than can survive — creating a struggle for existence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Individuals better adapted to the environment survive and reproduce more successfully than less well adapted ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Advantageous alleles are therefore passed on more often and increase in frequency over generations — the population evolves.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Variation + selection + inheritance → allele frequencies change.",
          },
        },
        {
          id: "cipub-u2-evo-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a density-dependent factor that can limit population growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Frost" },
              { id: "b", text: "Drought" },
              { id: "c", text: "Disease" },
              { id: "d", text: "Flood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Density-dependent factors",
                statement: "Factors whose effect intensifies as population density rises — disease, competition, predation.",
              },
            ],
            steps: [{ reasoning: "Disease spreads faster in crowded populations; frost, flood and drought affect populations regardless of density.", marks: 1, markCode: "A" }],
            finalAnswer: "(a) Disease",
          },
        },
        {
          id: "cipub-u2-evo-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The herbivores in an ecosystem contain $900\\ \\text{kJ}$ of energy. Assuming $10\\%$ transfer efficiency, what is the minimum energy the producers must have fixed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9000, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy transfer",
                statement: "Herbivore energy $= 0.10 \\times$ producer energy, so producer energy $= \\frac{\\text{herbivore energy}}{0.10}$.",
              },
            ],
            steps: [
              {
                reasoning: "Work backwards through the transfer: producer energy $= \\frac{900}{0.10}$.",
                working: "\\frac{900}{0.10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This gives $9000\\ \\text{kJ}$ — ten times the herbivore energy.",
                working: "= 9000\\ \\text{kJ}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9000\\ \\text{kJ}$",
          },
        },
        {
          id: "cipub-u2-evo-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two conservation strategies used to protect biodiversity and explain how each one works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "Strategies reduce threats (habitat loss, overexploitation, pollution) or rebuild populations directly.",
              },
            ],
            steps: [
              {
                reasoning: "Name two valid strategies, e.g. protected areas/reserves and sustainable harvesting or captive breeding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explain the first strategy's mechanism — e.g. reserves exclude exploitation so habitats and populations can recover.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explain the second strategy's mechanism — e.g. quotas/CITES limit trade, or captive breeding plus reintroduction rebuilds numbers of endangered species.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Any two strategies with mechanisms, e.g. reserves + sustainable harvesting.",
          },
        },
        {
          id: "cipub-u2-evo-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which line of evidence most directly demonstrates that two species share a recent common ancestor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Similar DNA and protein sequences" },
              { id: "b", text: "Both species living in the same habitat" },
              { id: "c", text: "Similar body sizes" },
              { id: "d", text: "Analogous structures with similar functions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Molecular evidence",
                statement: "Closely related species share more similar DNA and protein sequences; the degree of similarity tracks evolutionary relatedness.",
              },
            ],
            steps: [{ reasoning: "Molecular similarity is inherited and accumulates predictably — the strongest direct evidence of common descent.", marks: 1, markCode: "A" }],
            finalAnswer: "(a) Similar DNA and protein sequences",
          },
        },
        {
          id: "cipub-u2-evo-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Producers fix $60\\ 000\\ \\text{kJ}$ of energy in an ecosystem. How much energy reaches tertiary consumers (the fourth trophic level)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy transfer",
                statement: "Each trophic level receives about $10\\%$ of the energy of the level below it.",
              },
            ],
            steps: [
              {
                reasoning: "Three transfers of $10\\%$ each: $60\\ 000 \\times 0.10^3$.",
                working: "60\\ 000 \\times 0.001 = 60\\ \\text{kJ}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$60\\ \\text{kJ}$",
          },
        },
        {
          id: "cipub-u2-evo-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "In logistic population growth, the population size stabilises at the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exponential growth phase" },
              { id: "b", text: "Maximum birth rate" },
              { id: "c", text: "J-shaped curve asymptote" },
              { id: "d", text: "Carrying capacity $K$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement: "$K$ is the maximum population size an environment can sustain; logistic growth produces an S-shaped curve approaching $K$.",
              },
            ],
            steps: [{ reasoning: "As $N$ approaches $K$, resource limits slow growth until births balance deaths — the population stabilises at carrying capacity.", marks: 1, markCode: "A" }],
            finalAnswer: "(b) Carrying capacity $K$",
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
