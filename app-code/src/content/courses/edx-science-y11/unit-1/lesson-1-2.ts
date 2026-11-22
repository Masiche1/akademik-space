import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "esc11-u1-lesson-1-2",
  code: "1-2",
  title: "Reproduction",
  goal: "I CAN compare asexual and sexual reproduction and describe human reproduction.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Biology (Y11)"],
  vocabulary: [
    {
      term: "Asexual reproduction",
      definition: "One parent → genetically identical offspring (cloning).",
    },
    {
      term: "Sexual reproduction",
      definition:
        "Two parents → genetically varied offspring via gametes and fertilisation.",
    },
    {
      term: "Gamete",
      definition: "Sex cell — sperm or egg — haploid (half chromosomes).",
    },
    {
      term: "Fertilisation",
      definition: "Fusion of gamete nuclei → zygote → embryo.",
    },
  ],
  concepts: [
    {
      id: "esc11-u1-repro-types",
      title: "Asexual and Sexual Reproduction",
      skill: "Compare reproduction types and describe advantages of each.",
      lesson: {
        sections: [
          {
            heading: "Asexual vs sexual",
            body: "**Asexual**: one parent, mitosis, identical offspring — bacteria, fungi, plants (runners, bulbs), some animals. Fast, no mate needed, but no variation → disease vulnerability.\n\n**Sexual**: two parents, meiosis → gametes → fertilisation → zygote. Genetic variation via independent assortment + crossing over. Slower, needs mate, but variation → adaptation. **Meiosis**: two divisions → 4 haploid cells; chromosomes shuffle each time. **Fertilisation**: haploid + haploid → diploid zygote.",
          },
          {
            heading: "Plants and animals",
            body: "**Flower**: stamen (male — anther produces pollen), carpel (female — stigma, style, ovary with ovules). Pollination: wind/insect → pollen on stigma → pollen tube → fertilisation → seed + fruit.\n\n**Human**: testes produce sperm + testosterone; ovaries produce eggs + oestrogen. Menstrual cycle ~28 days — egg released (ovulation), uterus lining thickens, if no fertilisation lining sheds (period). Fertilisation in oviduct → embryo → implants in uterus → placenta exchanges nutrients/waste → birth via cervix/vagina.",
          },
        ],
        keyFormulas: [
          {
            name: "Asexual vs sexual",
            statement:
              "Asexual: fast, identical, no variation. Sexual: varied, adaptive, needs mate.",
          },
          {
            name: "Meiosis",
            statement: "Two divisions → 4 haploid gametes — creates variation.",
          },
        ],
        workedExample: {
          problem: "Why do farmers prefer sexual reproduction for crops?",
          solution:
            "Genetic variation → some plants resist disease/pests → healthier crops.",
        },
      },
      questions: [
        {
          id: "esc11-u1-repro-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which produces genetically identical offspring?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meiosis alone" },
              { id: "b", text: "Sexual reproduction" },
              { id: "c", text: "Asexual reproduction" },
              { id: "d", text: "Fertilisation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asexual",
                statement: "One parent → identical offspring.",
              },
            ],
            steps: [
              { reasoning: "Asexual = clones.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Asexual reproduction",
            commonErrors: ["Sexual confused."],
          },
        },
        {
          id: "esc11-u1-repro-types-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of sexual reproduction over asexual.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sexual advantages",
                statement:
                  "Variation → adaptation; repair via meiosis diversity.",
              },
            ],
            steps: [
              {
                reasoning: "Genetic variation produced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Variation → survival advantage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Population adapts over generations.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Variation produced; offspring better adapted to changing environments/disease.",
            commonErrors: [
              "Speed cited — that's asexual's advantage.",
              "Vague answers.",
            ],
          },
        },
        {
          id: "esc11-u1-repro-types-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how meiosis creates genetic variation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meiosis variation",
                statement:
                  "Independent assortment + crossing over shuffle alleles.",
              },
            ],
            steps: [
              {
                reasoning: "Independent assortment of chromosomes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Crossing over exchanges segments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Random fertilisation adds more variation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Independent assortment + crossing over during meiosis + random fertilisation → unique gametes → varied offspring.",
            commonErrors: ["Only one mechanism.", "Mitosis confused."],
          },
        },
        {
          id: "esc11-u1-repro-types-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the journey of a sperm from production to fertilisation.",
          parts: [
            {
              label: "a",
              prompt: "Where are sperm produced and what hormone controls it?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Describe the path to the egg and fertilisation.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human reproduction",
                statement:
                  "Testes → sperm → vagina → uterus → oviduct → fertilisation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Testes produce sperm + testosterone.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Sperm mature in epididymis.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Ejaculated into vagina during intercourse.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Swim through cervix into uterus.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Up into oviduct toward egg.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Fertilisation in oviduct → zygote.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Zygote implants in uterus → embryo.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) testes/testosterone (b) vagina→uterus→oviduct→fertilisation→implantation",
            commonErrors: ["Fertilisation in uterus.", "Incomplete path."],
          },
        },
      ],
    },
    {
      id: "esc11-u1-inheritance",
      title: "Inheritance and Variation",
      skill: "Describe genes, alleles, inheritance patterns and variation.",
      lesson: {
        sections: [
          {
            heading: "Genes and alleles",
            body: "**Gene**: DNA section coding for a trait. **Allele**: gene version — dominant (expressed, capital letter) or recessive (only with two copies, lowercase). **Genotype**: allele combination (TT, Tt, tt). **Phenotype**: physical appearance. **Homozygous**: same alleles; **heterozygous**: different.\n\n**Punnett square** predicts offspring: Tt × Tt → 25% TT, 50% Tt, 25% tt. Dominant allele masks recessive in heterozygote — carrier can pass hidden recessive.",
          },
          {
            heading: "Variation and disorders",
            body: "**Variation sources**: genetic (inherited), environmental (diet, exercise), both. Continuous (height, weight — range) vs discontinuous (blood group, sex — distinct).\n\n**Inherited disorders**: cystic fibrosis (recessive — thick mucus), sickle cell (recessive — malformed RBCs), haemophilia (X-linked recessive — blood doesn't clot), Huntington's (dominant — late-onset). Genetic testing + selective breeding apply inheritance knowledge.",
          },
        ],
        keyFormulas: [
          {
            name: "Genotype/phenotype",
            statement:
              "Genotype = alleles; phenotype = appearance. Dominant masks recessive.",
          },
          {
            name: "Punnett square",
            statement: "Tt × Tt → 1:2:1 genotype ratio (TT:Tt:tt).",
          },
        ],
        workedExample: {
          problem:
            "Both parents are carriers (Tt) for a recessive trait. What's the chance of affected child?",
          solution: "25% — only tt genotype expresses the trait.",
        },
      },
      questions: [
        {
          id: "esc11-u1-inheritance-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a Punnett square predict?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environmental effects" },
              { id: "b", text: "DNA sequence" },
              { id: "c", text: "Possible offspring genotypes" },
              { id: "d", text: "Mutation rates" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Punnett square",
                statement:
                  "Grid showing possible allele combinations in offspring.",
              },
            ],
            steps: [
              {
                reasoning: "Predicts genotype probabilities.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Possible offspring genotypes",
            commonErrors: ["Phenotype assumed — genotypes predicted."],
          },
        },
        {
          id: "esc11-u1-inheritance-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two carriers (Tt × Tt) for a recessive disorder. What fraction of offspring are affected?",
          response: {
            type: "numeric",
            parts: [{ label: "Fraction affected", answer: 0.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punnett",
                statement:
                  "Tt × Tt → 25% tt affected, 50% carriers, 25% unaffected.",
              },
            ],
            steps: [
              {
                reasoning: "tt needed for expression.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "25% = 1/4.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "25% (1/4)",
            commonErrors: ["50% confused — that's carriers.", "100% assumed."],
          },
        },
        {
          id: "esc11-u1-inheritance-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a person with cystic fibrosis must have inherited two recessive alleles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recessive inheritance",
                statement:
                  "Recessive trait needs two copies — one dominant masks it.",
              },
            ],
            steps: [
              {
                reasoning: "CF is recessive disorder.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "One normal allele produces enough protein.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both alleles defective → no working protein.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Recessive trait needs two defective alleles — one working copy suffices, so affected = homozygous recessive.",
            commonErrors: ["One allele enough view.", "Dominant assumed."],
          },
        },
        {
          id: "esc11-u1-inheritance-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A woman is a carrier for haemophilia (X-linked recessive).",
          parts: [
            {
              label: "a",
              prompt: "Explain what 'carrier' means for X-linked traits.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the chance her son is affected if father is unaffected.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why daughters are rarely affected.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "X-linked inheritance",
                statement:
                  "Males XY — one defective X = affected; females XX need two.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Carrier has one defective X + one normal.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Normal allele masks it — no symptoms.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Can pass defective X to children.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Son gets Y from father + X from mother.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) 50% chance defective X → affected.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "(c) Daughters get father's normal X — need two defective.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) one defective X masked (b) 50% sons affected (c) daughters get normal X from father",
            commonErrors: ["Daughters equally affected.", "No Y explanation."],
          },
        },
      ],
    },
    {
      id: "esc11-u1-ecology",
      title: "Ecology and Ecosystems",
      skill: "Describe food chains/webs, nutrient cycles and human impacts.",
      lesson: {
        sections: [
          {
            heading: "Ecosystems and food chains",
            body: "**Ecosystem**: organisms + environment interacting. **Food chain**: producer → consumer → predator (energy flow one way). Producers (plants/algae) capture sunlight via photosynthesis — base of all chains.\n\n**Food web**: interlinked chains — more realistic. **Energy pyramid**: ~10% energy transfers up each level — limits chain length to ~4 levels. Biomass decreases upward. Decomposers (bacteria/fungi) recycle nutrients.",
          },
          {
            heading: "Cycles and human impact",
            body: "**Carbon cycle**: photosynthesis removes CO₂ → food → respiration/decomposition returns CO₂. **Nitrogen cycle**: nitrogen fixation (bacteria/lightning) → nitrates → plants → animals → decomposition → denitrification. Humans add fertilisers → eutrophication.\n\n**Human impacts**: deforestation (habitat loss, CO₂), pollution (plastics, chemicals, smog), overfishing, climate change. **Conservation**: protected areas, sustainable fishing, reforestation, reducing emissions.",
          },
        ],
        keyFormulas: [
          {
            name: "10% rule",
            statement: "~10% energy transfers between trophic levels.",
          },
          {
            name: "Food chain",
            statement:
              "Producer → primary consumer → secondary consumer → tertiary consumer.",
          },
        ],
        workedExample: {
          problem:
            "Grass → rabbit → fox. If grass has 10,000 kJ, how much reaches fox?",
          solution: "10,000 × 0.1 × 0.1 = 100 kJ (two transfers).",
        },
      },
      questions: [
        {
          id: "esc11-u1-ecology-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which organism is always at the base of a food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carnivore" },
              { id: "b", text: "Decomposer" },
              { id: "c", text: "Omnivore" },
              { id: "d", text: "Producer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producer",
                statement:
                  "Base of food chain — captures energy via photosynthesis.",
              },
            ],
            steps: [
              { reasoning: "Producers at base.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Producer",
            commonErrors: ["Predator at base assumed."],
          },
        },
        {
          id: "esc11-u1-ecology-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are food chains usually limited to 4-5 levels?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "10% rule",
                statement: "Only ~10% energy transfers up each level.",
              },
            ],
            steps: [
              {
                reasoning: "Most energy lost as heat/respiration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Only 10% reaches next level.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Too little energy beyond ~4 levels.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Energy decreases ~90% per level — insufficient energy supports top predators after 4-5 levels.",
            commonErrors: ["Space limitation assumed.", "No energy loss link."],
          },
        },
        {
          id: "esc11-u1-ecology-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how fertiliser runoff causes eutrophication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eutrophication",
                statement:
                  "Nutrients → algal bloom → oxygen depletion → fish kills.",
              },
            ],
            steps: [
              {
                reasoning: "Nitrates enter water from fertiliser.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Algae bloom — block light, die, decompose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decomposers use oxygen — levels drop.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fish/other organisms suffocate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Fertiliser nitrates → algal bloom → decomposition depletes oxygen → aquatic life dies.",
            commonErrors: ["Algae 'eat' fish view.", "No oxygen link."],
          },
        },
        {
          id: "esc11-u1-ecology-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare food chain and food web.",
          parts: [
            { label: "a", prompt: "Define each.", marks: 2 },
            {
              label: "b",
              prompt: "Explain why food webs are more realistic.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Describe one effect of removing a top predator.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food webs",
                statement:
                  "Interconnected chains — species have multiple food sources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Chain = linear sequence; web = interconnected chains.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Real organisms eat multiple things.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Webs show redundancy — one loss less catastrophic.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shows actual energy flow complexity.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Prey population increases.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Overgrazing → ecosystem imbalance.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "(c) Example: wolves removed → deer overpopulate.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) linear vs interconnected (b) realistic multiple pathways (c) prey explosion → imbalance",
            commonErrors: ["No removal effect.", "Webs = chains view."],
          },
        },
      ],
    },
  ],
};
