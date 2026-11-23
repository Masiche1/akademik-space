import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "bio9-u9-lesson-9-3",
  code: "9-3",
  title: "Evolution and Ecosystems",
  goal: "I CAN explain natural selection, evidence for evolution, and ecosystem dynamics.",
  standards: [
    "HS-LS4-1",
    "HS-LS4-2",
    "HS-LS4-3",
    "HS-LS4-4",
    "HS-LS2-1",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Natural selection",
      definition: "Process where advantageous traits increase in frequency.",
    },
    {
      term: "Fitness",
      definition: "Reproductive success in a given environment.",
    },
    {
      term: "Adaptation",
      definition: "Inherited trait increasing survival/reproduction.",
    },
    { term: "Speciation", definition: "Formation of new species." },
    {
      term: "Ecosystem",
      definition: "Community of organisms + their environment.",
    },
    { term: "Biodiversity", definition: "Variety of life in an ecosystem." },
    { term: "Trophic level", definition: "Position in food chain." },
    {
      term: "Carrying capacity",
      definition: "Maximum population size environment can sustain.",
    },
  ],
  concepts: [
    {
      id: "bio9-u9-natural-selection",
      title: "Natural selection",
      skill:
        "Explain natural selection mechanism and predict evolutionary outcomes.",
      lesson: {
        sections: [
          {
            heading: "Natural selection steps",
            body: "1. **Variation**: population has genetic variation.\n2. **Selection pressure**: environment favors certain traits.\n3. **Differential survival**: advantageous traits survive/reproduce more.\n4. **Allele frequency change**: advantageous alleles become more common.\n\nEvolution = change in allele frequencies over generations.",
          },
          {
            heading: "Key points",
            body: "- Acts on populations, not individuals.\n- Doesn't create perfect organisms — just better-adapted.\n- Selection pressure can change.\n- Requires variation, heritability, differential reproduction.",
          },
        ],
        keyFormulas: [
          {
            name: "Natural selection",
            statement:
              "Variation → selection → differential survival → allele change.",
          },
          { name: "Fitness", statement: "Reproductive success." },
          { name: "Evolution", statement: "Change in allele frequencies." },
        ],
        workedExample: {
          problem: "How does antibiotic resistance evolve?",
          solution:
            "Mutation → antibiotic selection → resistant survive → spread.",
        },
      },
      questions: [
        {
          id: "bio9-u9-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random change" },
              { id: "b", text: "Survival of the fittest" },
              { id: "c", text: "Purposeful adaptation" },
              { id: "d", text: "Migration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement:
                  "Organisms with advantageous traits survive/reproduce more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural selection = differential survival based on traits.",
                evidence: "differential",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Survival of the fittest.",
            commonErrors: ["Choosing (c): organisms don't adapt on purpose."],
          },
        },
        {
          id: "bio9-u9-selection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the requirements for natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Selection requirements",
                statement:
                  "Variation + heritability + differential reproduction.",
              },
            ],
            steps: [
              {
                reasoning: "Variation in population.",
                evidence: "variation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Traits must be heritable.",
                evidence: "heritable",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Differential reproduction based on traits.",
                evidence: "differential",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Variation + heritability + differential reproduction.",
            commonErrors: ["Missing a requirement."],
          },
        },
        {
          id: "bio9-u9-selection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how antibiotic resistance is an example of natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Antibiotic resistance",
                statement: "Natural selection in bacteria.",
              },
            ],
            steps: [
              {
                reasoning: "Random mutation creates resistance gene.",
                evidence: "mutation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Antibiotic kills susceptible bacteria.",
                evidence: "selection pressure",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Resistant bacteria survive and reproduce.",
                evidence: "survive",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Resistance allele frequency increases → evolution.",
                evidence: "evolution",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Mutation → antibiotic selection → resistant survive → resistance spreads.",
            commonErrors: ["Saying antibiotic creates resistance."],
          },
        },
        {
          id: "bio9-u9-selection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A population of beetles varies in color (green vs brown). Environment has brown soil.",
          parts: [
            { label: "a", prompt: "Selective pressure?", marks: 2 },
            { label: "b", prompt: "Which color favored? Why?", marks: 2 },
            { label: "c", prompt: "What happens over generations?", marks: 2 },
            { label: "d", prompt: "Is this evolution?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Natural selection",
                statement: "Camouflage advantage → higher survival.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Predators hunting beetles — visual detection.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Brown camouflages on brown soil → less predation.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Brown allele frequency increases; green decreases.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Yes — allele frequency change = evolution.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Predation (b) Brown camouflages (c) Brown increases (d) Yes, evolution.",
            commonErrors: ["Saying green is favored."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-evidence",
      title: "Evidence for Evolution",
      skill: "Identify and evaluate evidence supporting evolution.",
      lesson: {
        sections: [
          {
            heading: "Types of evidence",
            body: "- **Fossil record**: transitional forms, extinction events.\n- **Comparative anatomy**: homologous structures (same bones, different functions).\n- **Embryology**: similar early development.\n- **Biogeography**: species distribution matches evolutionary history.\n- **Molecular biology**: DNA similarities show relatedness.",
          },
          {
            heading: "Homologous vs analogous",
            body: "- **Homologous**: same structure, different function → common ancestry (human arm, bat wing).\n- **Analogous**: same function, different structure → convergent evolution (bird wing, insect wing).",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence types",
            statement: "Fossils, anatomy, embryology, biogeography, DNA.",
          },
          {
            name: "Homologous",
            statement: "Same structure, different function → common ancestry.",
          },
          {
            name: "Analogous",
            statement: "Same function, different structure → convergent.",
          },
        ],
        workedExample: {
          problem: "Why are homologous structures evidence for evolution?",
          solution:
            "Same bone pattern in different species suggests common ancestor.",
        },
      },
      questions: [
        {
          id: "bio9-u9-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are homologous structures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same function, different structure" },
              { id: "b", text: "Same structure, different function" },
              { id: "c", text: "Identical structures" },
              { id: "d", text: "Vestigial organs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous",
                statement: "Same structure, different function.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homologous = same structure, different function (arm vs wing).",
                evidence: "same structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Same structure, different function.",
            commonErrors: ["Choosing (a): that's analogous."],
          },
        },
        {
          id: "bio9-u9-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three types of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evolution evidence",
                statement: "Fossils, anatomy, DNA, embryology, biogeography.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil record: transitional forms.",
                evidence: "fossils",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Comparative anatomy: homologous structures.",
                evidence: "anatomy",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Molecular biology: DNA similarities.",
                evidence: "DNA",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Fossils, anatomy, DNA (or embryology/biogeography).",
            commonErrors: ["Listing only one type."],
          },
        },
        {
          id: "bio9-u9-evidence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how DNA evidence supports evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Molecular evidence",
                statement: "Similar DNA = common ancestry.",
              },
            ],
            steps: [
              {
                reasoning: "DNA sequences can be compared between species.",
                evidence: "compare",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "More similar DNA = more recent common ancestor.",
                evidence: "similarity",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Humans share ~98% DNA with chimps — close relatives.",
                evidence: "98%",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Molecular clock estimates divergence times.",
                evidence: "molecular clock",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "DNA similarity shows relatedness and evolutionary history.",
            commonErrors: ["Saying DNA proves evolution directly."],
          },
        },
        {
          id: "bio9-u9-evidence-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare homologous and analogous structures.",
          parts: [
            { label: "a", prompt: "Define each?", marks: 2 },
            { label: "b", prompt: "Example of each?", marks: 2 },
            { label: "c", prompt: "What does each suggest?", marks: 2 },
            { label: "d", prompt: "Which is stronger evidence?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous vs analogous",
                statement:
                  "Homologous = common ancestry; analogous = convergent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Homologous: same structure, different function. Analogous: same function, different structure.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Homologous: arm/wing. Analogous: bird/insect wing.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Homologous → common ancestry; analogous → convergent evolution.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Homologous is stronger evidence for common ancestry.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Same structure vs same function (b) Arm/wing vs bird/insect (c) Ancestry vs convergent (d) Homologous.",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-ecosystems",
      title: "Ecosystems and Biodiversity",
      skill:
        "Describe ecosystem structure, energy flow, and biodiversity importance.",
      lesson: {
        sections: [
          {
            heading: "Ecosystem structure",
            body: "An **ecosystem** = community of organisms + abiotic environment.\n\n- **Producers**: autotrophs (plants, algae) — convert sunlight to chemical energy.\n- **Consumers**: heterotrophs — eat other organisms (herbivores, carnivores, omnivores).\n- **Decomposers**: break down dead matter (fungi, bacteria).\n\n**Trophic levels**: producer → primary consumer → secondary consumer → tertiary consumer.",
          },
          {
            heading: "Energy flow",
            body: "- Only ~10% energy transfers between trophic levels (10% rule).\n- ~90% lost as heat at each level.\n- Energy flows one way: sun → producers → consumers → heat.\n- Matter cycles: carbon, nitrogen, water recycled.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Community + environment." },
          {
            name: "Trophic levels",
            statement: "Producer → herbivore → carnivore.",
          },
          {
            name: "10% rule",
            statement: "~10% energy transfers between levels.",
          },
          {
            name: "Biodiversity",
            statement: "Variety of life — higher = more stable.",
          },
        ],
        workedExample: {
          problem: "Why are top predators rare?",
          solution:
            "10% energy rule — each level gets only 10% of previous level's energy.",
        },
      },
      questions: [
        {
          id: "bio9-u9-ecosystem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are producers in an ecosystem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Animals that eat plants" },
              { id: "b", text: "Organisms that make their own food" },
              { id: "c", text: "Decomposers" },
              { id: "d", text: "Predators" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producers",
                statement: "Autotrophs making their own food.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Producers = autotrophs (plants, algae) via photosynthesis.",
                evidence: "autotrophs",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Organisms that make their own food.",
            commonErrors: ["Choosing (a): that's herbivores."],
          },
        },
        {
          id: "bio9-u9-ecosystem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the trophic levels in a food chain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Trophic levels",
                statement:
                  "Producer → primary → secondary → tertiary consumer.",
              },
            ],
            steps: [
              {
                reasoning: "Producer (plant).",
                evidence: "producer",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Primary consumer (herbivore).",
                evidence: "herbivore",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Secondary/tertiary consumers (carnivores).",
                evidence: "carnivores",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Producer → herbivore → carnivore → top predator.",
            commonErrors: ["Missing a level."],
          },
        },
        {
          id: "bio9-u9-ecosystem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the 10% rule and its implications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "10% rule",
                statement: "Only ~10% energy transfers between levels.",
              },
            ],
            steps: [
              {
                reasoning: "Only ~10% of energy passes to next trophic level.",
                evidence: "10%",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "~90% lost as heat at each level.",
                evidence: "90% heat",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explains why top predators are rare.",
                evidence: "rare predators",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Limits food chain length (~4-5 levels max).",
                evidence: "length",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "10% energy transfer → top predators rare, food chains short.",
            commonErrors: ["Not explaining implications."],
          },
        },
        {
          id: "bio9-u9-ecosystem-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Why is biodiversity important for ecosystem stability?",
          parts: [
            { label: "a", prompt: "What is biodiversity?", marks: 2 },
            { label: "b", prompt: "How does it affect stability?", marks: 3 },
            {
              label: "c",
              prompt: "What happens if species are lost?",
              marks: 2,
            },
            { label: "d", prompt: "Example?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Biodiversity",
                statement: "Variety of life → ecosystem resilience.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Variety of species, genes, ecosystems.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "More species = more redundancy = better resistance to disturbance.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Species loss → reduced resilience → ecosystem collapse risk.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Keystone species loss → trophic cascade.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Variety of life (b) Redundancy/resilience (c) Collapse risk (d) Keystone species.",
            commonErrors: ["Not linking to stability."],
          },
        },
      ],
    },
    {
      id: "bio9-u9-population",
      title: "Population Dynamics",
      skill:
        "Describe population growth patterns and factors affecting populations.",
      lesson: {
        sections: [
          {
            heading: "Population growth",
            body: "**Exponential growth**: unlimited resources → rapid increase (J-curve).\n**Logistic growth**: limited resources → growth slows near carrying capacity (S-curve).\n\n**Carrying capacity (K)**: maximum population environment can sustain.",
          },
          {
            heading: "Limiting factors",
            body: "- **Density-dependent**: competition, predation, disease (worse at high density).\n- **Density-independent**: natural disasters, weather (affect all densities).",
          },
        ],
        keyFormulas: [
          { name: "Exponential", statement: "Unlimited growth (J-curve)." },
          {
            name: "Logistic",
            statement: "Limited growth → carrying capacity (S-curve).",
          },
          {
            name: "Carrying capacity",
            statement: "Max sustainable population.",
          },
        ],
        workedExample: {
          problem: "Why do populations rarely grow exponentially forever?",
          solution: "Resource limits → logistic growth → carrying capacity.",
        },
      },
      questions: [
        {
          id: "bio9-u9-population-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carrying capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum population size" },
              { id: "b", text: "Minimum population size" },
              { id: "c", text: "Growth rate" },
              { id: "d", text: "Birth rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement: "Max population environment can sustain.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carrying capacity = maximum sustainable population.",
                evidence: "max",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Maximum population size.",
            commonErrors: ["Choosing (b): that's minimum."],
          },
        },
        {
          id: "bio9-u9-population-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between exponential and logistic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Growth patterns",
                statement: "Exponential = unlimited; logistic = limited.",
              },
            ],
            steps: [
              {
                reasoning: "Exponential: unlimited resources → J-curve.",
                evidence: "exponential",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Logistic: limited resources → S-curve → carrying capacity.",
                evidence: "logistic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Most real populations show logistic growth.",
                evidence: "realistic",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Exponential = unlimited (J); logistic = limited (S).",
            commonErrors: ["Confusing the curves."],
          },
        },
        {
          id: "bio9-u9-population-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between density-dependent and density-independent limiting factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limiting factors",
                statement: "Density-dependent vs independent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Density-dependent: competition, predation, disease — worse at high density.",
                evidence: "dependent",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Density-independent: natural disasters, weather — affect all densities.",
                evidence: "independent",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Density-dependent factors regulate population near carrying capacity.",
                evidence: "regulate",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Density-independent can cause crashes regardless of density.",
                evidence: "crash",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Density-dependent = competition/predation/disease; independent = disasters.",
            commonErrors: ["Confusing the two types."],
          },
        },
        {
          id: "bio9-u9-population-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A deer population grows rapidly after predators are removed.",
          parts: [
            { label: "a", prompt: "What growth pattern initially?", marks: 2 },
            {
              label: "b",
              prompt: "What happens as resources deplete?",
              marks: 3,
            },
            { label: "c", prompt: "What is carrying capacity here?", marks: 2 },
            { label: "d", prompt: "What if predators return?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Population dynamics",
                statement: "Exponential → logistic → carrying capacity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Exponential growth (J-curve) initially.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Resources deplete → growth slows → logistic (S-curve).",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Max deer food/environment can sustain.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Predation increases → population decreases toward new equilibrium.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Exponential (b) Logistic slowdown (c) Max sustainable (d) Population decreases.",
            commonErrors: ["Not recognizing carrying capacity."],
          },
        },
      ],
    },
  ],
};
