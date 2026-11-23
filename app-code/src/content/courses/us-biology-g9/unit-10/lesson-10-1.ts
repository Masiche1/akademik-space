import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "bio9-u10-lesson-10-1",
  code: "10-1",
  title: "Integrated Biology Capstone",
  goal: "I CAN synthesize genetics, evolution, and ecosystem concepts to analyze real-world biological scenarios.",
  standards: [
    "HS-LS3-1",
    "HS-LS3-2",
    "HS-LS4-1",
    "HS-LS4-5",
    "HS-LS4-6",
    "HS-LS2-7",
    "SEP: Engaging in Argument from Evidence",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    { term: "Gene pool", definition: "All alleles in a population." },
    {
      term: "Genetic drift",
      definition:
        "Random allele frequency change, especially in small populations.",
    },
    {
      term: "Gene flow",
      definition: "Allele movement between populations via migration.",
    },
    {
      term: "Founder effect",
      definition:
        "New population from small group has limited genetic diversity.",
    },
    {
      term: "Bottleneck effect",
      definition: "Population crash reduces genetic diversity.",
    },
    {
      term: "Conservation",
      definition: "Protection and management of biodiversity.",
    },
    {
      term: "Sustainable use",
      definition: "Using resources without depleting them.",
    },
  ],
  concepts: [
    {
      id: "bio9-u10-microevolution",
      title: "Microevolution mechanisms",
      skill:
        "Distinguish between selection, drift, gene flow, and mutation as evolutionary mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Mechanisms of evolution",
            body: "- **Natural selection**: non-random; advantageous traits increase.\n- **Genetic drift**: random allele frequency changes; strongest in small populations.\n- **Gene flow**: alleles move between populations via migration.\n- **Mutation**: source of new genetic variation.",
          },
          {
            heading: "Drift vs selection",
            body: "- Selection is directional — favors specific traits.\n- Drift is random — can fix or lose alleles regardless of advantage.\n- Both change allele frequencies = evolution.",
          },
        ],
        keyFormulas: [
          {
            name: "Microevolution",
            statement: "Allele frequency change within a population.",
          },
          {
            name: "Drift",
            statement: "Random frequency change; strongest in small pops.",
          },
          {
            name: "Gene flow",
            statement: "Allele movement between populations.",
          },
        ],
        workedExample: {
          problem: "Why is genetic drift more important in small populations?",
          solution:
            "Fewer individuals → random events have larger relative effect on allele frequencies.",
        },
      },
      questions: [
        {
          id: "bio9-u10-microevo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is genetic drift?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Advantageous traits increase" },
              { id: "b", text: "Random allele frequency change" },
              { id: "c", text: "Gene movement between populations" },
              { id: "d", text: "New mutation arises" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genetic drift",
                statement: "Random allele frequency change.",
              },
            ],
            steps: [
              {
                reasoning: "Drift = random changes in allele frequencies.",
                evidence: "random",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Random allele frequency change.",
            commonErrors: ["Choosing (a): that's natural selection."],
          },
        },
        {
          id: "bio9-u10-microevo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between natural selection and genetic drift.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection vs drift",
                statement: "Non-random vs random allele frequency change.",
              },
            ],
            steps: [
              {
                reasoning: "Selection: non-random; favors advantageous traits.",
                evidence: "selection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Drift: random; can fix/lost alleles regardless of advantage.",
                evidence: "drift",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both change allele frequencies = microevolution.",
                evidence: "microevolution",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Selection = non-random advantage; drift = random change.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "bio9-u10-microevo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain founder effect and bottleneck effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Founder/bottleneck",
                statement: "Reduced genetic diversity from small population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Founder: small group establishes new population → limited alleles.",
                evidence: "founder",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Bottleneck: population crash → survivors have subset of alleles.",
                evidence: "bottleneck",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both reduce genetic diversity → increased drift.",
                evidence: "diversity loss",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: cheetahs have low diversity from bottleneck.",
                evidence: "cheetahs",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Both reduce genetic diversity through population reduction.",
            commonErrors: ["Not distinguishing founder vs bottleneck."],
          },
        },
        {
          id: "bio9-u10-microevo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A small island population of lizards shows unusual allele frequencies.",
          parts: [
            {
              label: "a",
              prompt: "Which mechanism likely caused this?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does small population size matter?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Could selection also be involved?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How would you test the hypothesis?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Population genetics",
                statement: "Small populations → drift dominates.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Genetic drift — random frequency changes in small population.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Fewer individuals → each individual's alleles have larger relative effect → drift stronger.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Yes — if traits confer advantage, selection also operates.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Compare allele frequencies over generations; test for selection signatures.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Drift (b) Small pop = stronger drift (c) Yes, possible (d) Track frequencies.",
            commonErrors: ["Ignoring small population effect."],
          },
        },
      ],
    },
    {
      id: "bio9-u10-human-impact",
      title: "Human Impact on Biodiversity",
      skill:
        "Analyze human activities affecting biodiversity and evaluate conservation strategies.",
      lesson: {
        sections: [
          {
            heading: "Human impacts",
            body: "- **Habitat destruction**: deforestation, urbanization → species loss.\n- **Overexploitation**: overfishing, hunting → population decline.\n- **Pollution**: chemicals, plastics → ecosystem damage.\n- **Climate change**: habitat shifts, extinction risk.\n- **Invasive species**: outcompete natives.",
          },
          {
            heading: "Conservation strategies",
            body: "- **Protected areas**: national parks, reserves.\n- **Sustainable use**: managed harvesting.\n- **Captive breeding**: zoos, seed banks.\n- **Restoration**: habitat rehabilitation.\n- **Policy**: CITES, Endangered Species Act.",
          },
        ],
        keyFormulas: [
          {
            name: "Biodiversity loss",
            statement: "Human activities reduce species diversity.",
          },
          {
            name: "Conservation",
            statement: "Strategies to protect biodiversity.",
          },
          {
            name: "Sustainable use",
            statement: "Using resources without depletion.",
          },
        ],
        workedExample: {
          problem: "How does habitat fragmentation affect biodiversity?",
          solution:
            "Smaller patches → less diversity per patch, more edge effects, reduced gene flow.",
        },
      },
      questions: [
        {
          id: "bio9-u10-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is habitat destruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building new habitats" },
              { id: "b", text: "Destroying natural habitats" },
              { id: "c", text: "Protecting habitats" },
              { id: "d", text: "Restoring habitats" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitat destruction",
                statement: "Loss of natural habitats.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Habitat destruction = loss of natural habitats (deforestation, urbanization).",
                evidence: "loss",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Destroying natural habitats.",
            commonErrors: ["Choosing (a): that's creation."],
          },
        },
        {
          id: "bio9-u10-impact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three human activities that reduce biodiversity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Human impacts",
                statement:
                  "Habitat destruction, overexploitation, pollution, climate change.",
              },
            ],
            steps: [
              {
                reasoning: "Habitat destruction (deforestation).",
                evidence: "habitat",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Overexploitation (overfishing).",
                evidence: "overexploitation",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Pollution or climate change or invasive species.",
                evidence: "pollution/climate/invasive",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Habitat destruction, overexploitation, pollution/climate change/invasive species.",
            commonErrors: ["Listing only one."],
          },
        },
        {
          id: "bio9-u10-impact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does habitat fragmentation affect biodiversity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Habitat fragmentation",
                statement:
                  "Smaller patches → less diversity, more edge effects.",
              },
            ],
            steps: [
              {
                reasoning: "Habitats split into smaller isolated patches.",
                evidence: "patches",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Smaller patches support fewer species (species-area relationship).",
                evidence: "fewer species",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Increased edge effects expose species to predators/disturbance.",
                evidence: "edge effects",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reduced gene flow between patches → isolation.",
                evidence: "gene flow",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fragmentation → fewer species per patch, edge effects, reduced gene flow.",
            commonErrors: ["Not explaining mechanism."],
          },
        },
        {
          id: "bio9-u10-impact-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate conservation strategies for an endangered species.",
          parts: [
            { label: "a", prompt: "Name two strategies?", marks: 2 },
            { label: "b", prompt: "How does each work?", marks: 3 },
            { label: "c", prompt: "What are limitations?", marks: 2 },
            { label: "d", prompt: "Which is most effective? Why?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conservation",
                statement:
                  "Protected areas, captive breeding, sustainable use.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Protected areas; captive breeding; habitat restoration; sustainable use.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Protected areas preserve habitat; captive breeding increases numbers; restoration rebuilds habitat.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Protected areas need enforcement; captive breeding costly; restoration slow.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Protected areas most effective — addresses root cause (habitat loss).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Protected areas+captive breeding (b) Preserve habitat+increase numbers (c) Enforcement/cost/time (d) Protected areas.",
            commonErrors: ["Not addressing limitations."],
          },
        },
      ],
    },
    {
      id: "bio9-u10-coevolution",
      title: "Coevolution and Speciation",
      skill: "Explain coevolutionary relationships and speciation mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Coevolution",
            body: "**Coevolution**: two species evolve in response to each other.\n\n- **Predator-prey**: prey develop defenses; predators develop better hunting.\n- **Mutualism**: both benefit (flowers + pollinators).\n- **Parasite-host**: parasite evades host defenses; host develops resistance.",
          },
          {
            heading: "Speciation",
            body: "**Speciation**: formation of new species.\n\n- **Allopatric**: geographic barrier separates populations → divergence.\n- **Sympatric**: same area, but reproductive isolation (e.g., polyploidy in plants).\n- Requires reproductive isolation to maintain separate gene pools.",
          },
        ],
        keyFormulas: [
          {
            name: "Coevolution",
            statement: "Two species evolve in response to each other.",
          },
          {
            name: "Allopatric",
            statement: "Geographic isolation → speciation.",
          },
          {
            name: "Sympatric",
            statement: "Reproductive isolation without geographic barrier.",
          },
        ],
        workedExample: {
          problem: "How do flowers and pollinators coevolve?",
          solution:
            "Flowers develop attractive features; pollinators develop matching traits → mutual benefit.",
        },
      },
      questions: [
        {
          id: "bio9-u10-coevo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is coevolution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single species evolution" },
              { id: "b", text: "Two species evolve in response to each other" },
              { id: "c", text: "Random evolution" },
              { id: "d", text: "Extinction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coevolution",
                statement: "Two species evolve in response to each other.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Coevolution = reciprocal evolutionary change between species.",
                evidence: "reciprocal",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Two species evolve in response to each other.",
            commonErrors: ["Choosing (a): that's single-species evolution."],
          },
        },
        {
          id: "bio9-u10-coevo-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between allopatric and sympatric speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allopatric vs sympatric",
                statement: "Geographic vs reproductive isolation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Allopatric: geographic barrier separates populations.",
                evidence: "allopatric",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sympatric: same area; reproductive isolation (polyploidy).",
                evidence: "sympatric",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Allopatric more common; sympatric rarer.",
                evidence: "frequency",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Allopatric = geographic isolation; sympatric = reproductive isolation.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "bio9-u10-coevo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain predator-prey coevolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Predator-prey",
                statement: "Prey defenses vs predator hunting.",
              },
            ],
            steps: [
              {
                reasoning: "Prey evolve defenses (camouflage, toxins, speed).",
                evidence: "defenses",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Predators evolve better hunting (senses, strategies).",
                evidence: "hunting",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Constant evolutionary arms race.",
                evidence: "arms race",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Example: cheetahs vs gazelles speed.",
                evidence: "example",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Prey defenses vs predator hunting → evolutionary arms race.",
            commonErrors: ["Not mentioning arms race."],
          },
        },
        {
          id: "bio9-u10-coevo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A population is split by a river.",
          parts: [
            { label: "a", prompt: "What speciation mechanism?", marks: 2 },
            { label: "b", prompt: "How do populations diverge?", marks: 3 },
            { label: "c", prompt: "What if river disappears?", marks: 2 },
            { label: "d", prompt: "Are they separate species?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Allopatric speciation",
                statement: "Geographic isolation → divergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Allopatric speciation — geographic barrier.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "No gene flow; different selection pressures; genetic drift.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "If they can still interbreed → no speciation; if not → separate species.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Yes if reproductively isolated; no if can interbreed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Allopatric (b) No gene flow + drift/selection (c) Depends on interbreeding (d) If isolated.",
            commonErrors: ["Assuming automatic speciation."],
          },
        },
      ],
    },
    {
      id: "bio9-u10-synthesis",
      title: "Biology Synthesis and Application",
      skill:
        "Integrate genetics, evolution, and ecology to solve complex biological problems.",
      lesson: {
        sections: [
          {
            heading: "Integration",
            body: "Biology connects at multiple levels:\n- **Molecular**: DNA → genes → proteins.\n- **Cellular**: organelles → metabolism → homeostasis.\n- **Organismal**: cells → tissues → organs → systems.\n- **Population**: individuals → gene pools → evolution.\n- **Ecosystem**: populations → communities → energy/matter flow.\n\nUnderstanding one level informs others.",
          },
          {
            heading: "Applications",
            body: "- **Medicine**: genetic testing, antibiotics, vaccines.\n- **Agriculture**: selective breeding, GMO crops.\n- **Conservation**: protected areas, captive breeding.\n- **Biotechnology**: PCR, sequencing, gene editing.",
          },
        ],
        keyFormulas: [
          {
            name: "Biological levels",
            statement:
              "Molecular → cellular → organismal → population → ecosystem.",
          },
          {
            name: "Emergent properties",
            statement:
              "Higher levels have properties not predictable from lower levels.",
          },
          {
            name: "Applications",
            statement: "Medicine, agriculture, conservation, biotech.",
          },
        ],
        workedExample: {
          problem: "How does understanding DNA help medicine?",
          solution:
            "Genetic testing diagnoses disorders; gene therapy targets mutations; PCR amplifies DNA for forensics.",
        },
      },
      questions: [
        {
          id: "bio9-u10-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are emergent properties?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Properties of individual cells" },
              {
                id: "b",
                text: "Properties arising at higher organizational levels",
              },
              { id: "c", text: "Genetic traits" },
              { id: "d", text: "Molecular properties" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Emergent properties",
                statement:
                  "Properties at higher levels not predictable from lower levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Emergent = new properties at higher organizational levels.",
                evidence: "higher levels",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Properties arising at higher organizational levels.",
            commonErrors: ["Choosing (a): that's cellular."],
          },
        },
        {
          id: "bio9-u10-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List biological organizational levels from smallest to largest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Organization levels",
                statement:
                  "Molecular → cellular → organismal → population → ecosystem.",
              },
            ],
            steps: [
              {
                reasoning: "Molecular (DNA, proteins).",
                evidence: "molecular",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Cellular → organismal.",
                evidence: "cellular/organismal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Population → ecosystem.",
                evidence: "population/ecosystem",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Molecular → cellular → organismal → population → ecosystem.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "bio9-u10-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does evolution connect genetics and ecology?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Evolution connection",
                statement:
                  "Genetic variation + selection pressure = adaptation.",
              },
            ],
            steps: [
              {
                reasoning: "Genetics provides variation (alleles).",
                evidence: "genetics",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ecology provides selection pressure (environment).",
                evidence: "ecology",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Natural selection links them → adaptation → evolution.",
                evidence: "selection",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: antibiotic resistance (genetics + ecology).",
                evidence: "example",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Genetic variation + ecological selection → evolution.",
            commonErrors: ["Not connecting the two."],
          },
        },
        {
          id: "bio9-u10-synthesis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a conservation plan for an endangered species.",
          parts: [
            { label: "a", prompt: "What biological info needed?", marks: 2 },
            { label: "b", prompt: "What strategies would you use?", marks: 3 },
            { label: "c", prompt: "How would you measure success?", marks: 2 },
            { label: "d", prompt: "What could go wrong?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conservation planning",
                statement: "Integrated approach to species protection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Population size, genetic diversity, habitat needs, threats.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Protected areas, captive breeding, habitat restoration, anti-poaching.",
                marks: 3,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "Population growth, genetic diversity increase, breeding success.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Disease, poaching, habitat loss, climate change.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Pop size+genetics+habitat (b) Protected areas+captive breeding (c) Pop growth+diversity (d) Disease/poaching/climate.",
            commonErrors: ["Not considering genetic diversity."],
          },
        },
      ],
    },
  ],
};
