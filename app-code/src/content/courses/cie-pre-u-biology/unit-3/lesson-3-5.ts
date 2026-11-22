import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cipub-u3-lesson-3-5",
  code: "3-5",
  title: "Evolution and ecology",
  goal: "I CAN explain natural selection, speciation, and ecological relationships.",
  standards: ["Cambridge Pre-U Biology 9769", "Paper 1: Evolution and ecology"],
  vocabulary: [
    {
      term: "Natural selection",
      definition: "Differential survival/reproduction of variants.",
    },
    {
      term: "Evolution",
      definition: "Change in allele frequencies over generations.",
    },
    {
      term: "Speciation",
      definition: "Formation of new species.",
    },
    {
      term: "Adaptive radiation",
      definition: "Rapid diversification from common ancestor.",
    },
    {
      term: "Population",
      definition: "Group of organisms of same species in area.",
    },
    {
      term: "Community",
      definition: "All populations in an ecosystem.",
    },
    {
      term: "Ecosystem",
      definition: "Community + environment.",
    },
    {
      term: "Niche",
      definition: "Role/position of species in ecosystem.",
    },
    {
      term: "Carrying capacity",
      definition: "Maximum population size environment supports.",
    },
    {
      term: "Succession",
      definition: "Community change over time.",
    },
    {
      term: "Biodiversity",
      definition: "Variety of life in ecosystem.",
    },
    {
      term: "Conservation",
      definition: "Protection of species and habitats.",
    },
  ],
  concepts: [
    {
      id: "cipub-u3-evolution",
      title: "Evolution and natural selection",
      skill:
        "Explain natural selection, evidence for evolution, and speciation.",
      lesson: {
        sections: [
          {
            heading: "Natural selection",
            body: "**Natural selection**: individuals with advantageous traits survive and reproduce more — allele frequencies change over generations. **Mechanisms**: mutation creates variation → selection acts on variation → advantageous alleles increase. **Types**: directional (one extreme favoured), stabilising (middle favoured), disruptive (both extremes favoured).",
          },
          {
            heading: "Evidence for evolution",
            body: "**Fossil record**: shows change over time. **Comparative anatomy**: homologous structures (same origin, different function), vestigial structures. **Molecular evidence**: DNA/protein similarities. **Biogeography**: species distribution patterns. **Observed evolution**: antibiotic resistance, peppered moth.",
          },
          {
            heading: "Speciation",
            body: "**Speciation**: formation of new species. **Allopatric**: geographic isolation → populations diverge. **Sympatric**: same area — e.g., polyploidy in plants. **Adaptive radiation**: rapid diversification — e.g., Darwin's finches. **Reproductive isolation**: prevents gene flow — prezygotic (behavioural, mechanical) and postzygotic (hybrid inviability, sterility).",
          },
        ],
        keyFormulas: [
          {
            name: "Natural selection",
            statement: "Variation → selection → adaptation",
          },
          {
            name: "Speciation",
            statement: "Geographic or reproductive isolation",
          },
          {
            name: "Adaptive radiation",
            statement: "Rapid diversification",
          },
          {
            name: "Evidence",
            statement: "Fossils, anatomy, DNA, biogeography",
          },
        ],
        workedExample: {
          problem: "How does antibiotic resistance demonstrate evolution?",
          solution:
            "Bacteria with resistance genes survive antibiotics — resistant population increases.",
        },
      },
      questions: [
        {
          id: "cipub-u3-evo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Natural selection is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random change" },
              {
                id: "b",
                text: "Differential survival/reproduction of variants",
              },
              { id: "c", text: "Lamarckian inheritance" },
              { id: "d", text: "No selection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural selection",
                statement: "Differential survival.",
              },
            ],
            steps: [
              {
                reasoning: "Natural selection = differential survival.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Differential survival/reproduction.",
          },
        },
        {
          id: "cipub-u3-evo-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evolution refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Change in allele frequencies over generations",
              },
              { id: "b", text: "No change" },
              { id: "c", text: "Individual change" },
              { id: "d", text: "Random change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evolution",
                statement: "Allele frequency change.",
              },
            ],
            steps: [
              {
                reasoning: "Evolution = allele frequency change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Allele frequency change.",
          },
        },
        {
          id: "cipub-u3-evo-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Speciation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Formation of new species" },
              { id: "c", text: "Migration" },
              { id: "d", text: "Extinction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speciation",
                statement: "New species formation.",
              },
            ],
            steps: [
              {
                reasoning: "Speciation = new species.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Formation of new species.",
          },
        },
        {
          id: "cipub-u3-evo-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Adaptive radiation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Extinction" },
              { id: "c", text: "Slow change" },
              { id: "d", text: "Rapid diversification from common ancestor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptive radiation",
                statement: "Rapid diversification.",
              },
            ],
            steps: [
              {
                reasoning: "Adaptive radiation = rapid diversification.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rapid diversification.",
          },
        },
        {
          id: "cipub-u3-evo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A population is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One organism" },
              { id: "b", text: "Group of organisms of same species in area" },
              { id: "c", text: "No organisms" },
              { id: "d", text: "All species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Population",
                statement: "Same species in area.",
              },
            ],
            steps: [
              {
                reasoning: "Population = same species.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same species in area.",
          },
        },
        {
          id: "cipub-u3-evo-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A community is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environment only" },
              { id: "b", text: "One species" },
              { id: "c", text: "All populations in ecosystem" },
              { id: "d", text: "No organisms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Community",
                statement: "All populations.",
              },
            ],
            steps: [
              {
                reasoning: "Community = all populations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) All populations in ecosystem.",
          },
        },
        {
          id: "cipub-u3-evo-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ecosystem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One organism" },
              { id: "b", text: "Community only" },
              { id: "c", text: "Community + environment" },
              { id: "d", text: "Environment only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecosystem",
                statement: "Community + environment.",
              },
            ],
            steps: [
              {
                reasoning: "Ecosystem = community + environment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Community + environment.",
          },
        },
        {
          id: "cipub-u3-evo-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A niche is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population size" },
              { id: "b", text: "No role" },
              { id: "c", text: "Physical habitat only" },
              { id: "d", text: "Role/position of species in ecosystem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Niche",
                statement: "Role in ecosystem.",
              },
            ],
            steps: [{ reasoning: "Niche = role.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Role/position in ecosystem.",
          },
        },
        {
          id: "cipub-u3-evo-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Carrying capacity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population growth" },
              { id: "b", text: "Minimum population" },
              { id: "c", text: "Maximum population environment supports" },
              { id: "d", text: "No limit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement: "Max population.",
              },
            ],
            steps: [
              {
                reasoning: "Carrying capacity = max.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Maximum population.",
          },
        },
        {
          id: "cipub-u3-evo-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Succession is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Community change over time" },
              { id: "b", text: "Migration" },
              { id: "c", text: "Extinction" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Succession",
                statement: "Community change.",
              },
            ],
            steps: [
              { reasoning: "Succession = change.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Community change over time.",
          },
        },
        {
          id: "cipub-u3-evo-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Biodiversity refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No life" },
              { id: "b", text: "One species" },
              { id: "c", text: "Population size" },
              { id: "d", text: "Variety of life in ecosystem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biodiversity",
                statement: "Variety of life.",
              },
            ],
            steps: [
              { reasoning: "Biodiversity = variety.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Variety of life.",
          },
        },
        {
          id: "cipub-u3-evo-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Allopatric speciation involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyploidy" },
              { id: "b", text: "Same area" },
              { id: "c", text: "No isolation" },
              { id: "d", text: "Geographic isolation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allopatric",
                statement: "Geographic isolation.",
              },
            ],
            steps: [
              {
                reasoning: "Allopatric = geographic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Geographic isolation.",
          },
        },
        {
          id: "cipub-u3-evo-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sympatric speciation involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same geographic area" },
              { id: "b", text: "Extinction" },
              { id: "c", text: "Geographic isolation" },
              { id: "d", text: "No speciation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sympatric",
                statement: "Same area.",
              },
            ],
            steps: [
              { reasoning: "Sympatric = same area.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Same geographic area.",
          },
        },
        {
          id: "cipub-u3-evo-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reproductive isolation prevents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mutation" },
              { id: "b", text: "Evolution" },
              { id: "c", text: "Selection" },
              { id: "d", text: "Gene flow between populations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reproductive isolation",
                statement: "Prevents gene flow.",
              },
            ],
            steps: [
              {
                reasoning: "Reproductive = prevents gene flow.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Prevents gene flow.",
          },
        },
        {
          id: "cipub-u3-evo-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Prezygotic isolation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After fertilisation" },
              {
                id: "b",
                text: "Before fertilisation — behavioural, mechanical",
              },
              { id: "c", text: "No isolation" },
              { id: "d", text: "Extinction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prezygotic",
                statement: "Before fertilisation.",
              },
            ],
            steps: [
              {
                reasoning: "Prezygotic = before fertilisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Before fertilisation.",
          },
        },
        {
          id: "cipub-u3-evo-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Postzygotic isolation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extinction" },
              { id: "b", text: "Before fertilisation" },
              { id: "c", text: "No isolation" },
              {
                id: "d",
                text: "After fertilisation — hybrid inviability/sterility",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Postzygotic",
                statement: "After fertilisation.",
              },
            ],
            steps: [
              {
                reasoning: "Postzygotic = after fertilisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) After fertilisation.",
          },
        },
        {
          id: "cipub-u3-evo-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Directional selection favours:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One extreme phenotype" },
              { id: "b", text: "No phenotype" },
              { id: "c", text: "Middle phenotype" },
              { id: "d", text: "Both extremes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Directional selection",
                statement: "One extreme favoured.",
              },
            ],
            steps: [
              {
                reasoning: "Directional = one extreme.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One extreme phenotype.",
          },
        },
        {
          id: "cipub-u3-evo-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Stabilising selection favours:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both extremes" },
              { id: "b", text: "No phenotype" },
              { id: "c", text: "Intermediate phenotype" },
              { id: "d", text: "One extreme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stabilising",
                statement: "Intermediate favoured.",
              },
            ],
            steps: [
              {
                reasoning: "Stabilising = intermediate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Intermediate phenotype.",
          },
        },
        {
          id: "cipub-u3-evo-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Disruptive selection favours:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No phenotype" },
              { id: "b", text: "One extreme" },
              { id: "c", text: "Both extreme phenotypes" },
              { id: "d", text: "Intermediate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disruptive",
                statement: "Both extremes favoured.",
              },
            ],
            steps: [
              {
                reasoning: "Disruptive = both extremes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Both extreme phenotypes.",
          },
        },
        {
          id: "cipub-u3-evo-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between natural selection and evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Selection vs evolution",
                statement: "Mechanism vs result.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural selection: mechanism — differential survival.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evolution: result — allele frequency change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Selection = mechanism; evolution = result.",
          },
        },
        {
          id: "cipub-u3-evo-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two types of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evolution evidence",
                statement: "Fossils, anatomy, DNA.",
              },
            ],
            steps: [
              {
                reasoning: "Fossil record.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Comparative anatomy or molecular evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fossils, anatomy, DNA, biogeography.",
          },
        },
        {
          id: "cipub-u3-evo-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how antibiotic resistance demonstrates natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antibiotic resistance",
                statement: "Selection in action.",
              },
            ],
            steps: [
              {
                reasoning: "Variation: some bacteria have resistance genes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Antibiotic kills susceptible bacteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Resistant bacteria survive and reproduce — allele frequency increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Variation → selection → resistance increases.",
          },
        },
        {
          id: "cipub-u3-evo-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how geographic isolation leads to speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Allopatric speciation",
                statement: "Isolation → divergence.",
              },
            ],
            steps: [
              {
                reasoning: "Population split by geographic barrier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No gene flow between populations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different selection pressures → divergence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reproductive isolation develops — new species.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Isolation → divergence → reproductive isolation → speciation.",
          },
        },
        {
          id: "cipub-u3-evo-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Vestigial structures are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No structures" },
              { id: "b", text: "Useful structures" },
              { id: "c", text: "New structures" },
              { id: "d", text: "Reduced/modified structures from ancestors" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vestigial",
                statement: "Reduced ancestor structures.",
              },
            ],
            steps: [
              {
                reasoning: "Vestigial = reduced structures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reduced ancestor structures.",
          },
        },
        {
          id: "cipub-u3-evo-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is homologous structures? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous",
                statement: "Same origin, different function.",
              },
            ],
            steps: [
              {
                reasoning: "Same evolutionary origin but different function.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., human arm, bat wing, whale flipper.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Same origin, different function — arm, wing, flipper.",
          },
        },
        {
          id: "cipub-u3-evo-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the peppered moth demonstrates natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Peppered moth",
                statement: "Industrial melanism.",
              },
            ],
            steps: [
              {
                reasoning: "Variation: light and dark moths.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pollution darkened trees — dark moths camouflaged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dark moths survived better — frequency increased.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Camouflage → differential survival → frequency change.",
          },
        },
        {
          id: "cipub-u3-evo-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Darwin's finches are an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extinction" },
              { id: "b", text: "No evolution" },
              { id: "c", text: "Adaptive radiation" },
              { id: "d", text: "Migration" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Darwin's finches",
                statement: "Adaptive radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Finches = adaptive radiation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Adaptive radiation.",
          },
        },
        {
          id: "cipub-u3-evo-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is reproductive isolation? Give two types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reproductive isolation",
                statement: "Prevents interbreeding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prevents successful reproduction between populations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prezygotic (before) and postzygotic (after).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prevents interbreeding — prezygotic and postzygotic.",
          },
        },
        {
          id: "cipub-u3-evo-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why evolution is not goal-directed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Non-directional evolution",
                statement: "No foresight.",
              },
            ],
            steps: [
              {
                reasoning: "Mutations are random — not directed toward goal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Selection acts on existing variation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No organism 'wants' to evolve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evolution is retrospective — describes past change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Random mutations + selection = no goal direction.",
          },
        },
        {
          id: "cipub-u3-evo-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is gene flow?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gene flow",
                statement: "Movement of alleles between populations.",
              },
            ],
            steps: [
              {
                reasoning: "Movement of genetic material between populations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces genetic differences between populations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Allele movement between populations.",
          },
        },
      ],
    },
    {
      id: "cipub-u3-ecology",
      title: "Ecology: populations, communities, ecosystems",
      skill:
        "Explain population dynamics, ecological relationships, and conservation.",
      lesson: {
        sections: [
          {
            heading: "Population ecology",
            body: "**Population growth**: exponential (J-curve) vs logistic (S-curve). **Carrying capacity (K)**: maximum population environment supports — limited by resources. **Density-dependent factors**: disease, competition, predation. **Density-independent**: climate, disasters. **Population structure**: age pyramids, sex ratios.",
          },
          {
            heading: "Community ecology",
            body: "**Ecological relationships**: competition (same resource), predation (one eats another), mutualism (both benefit), commensalism (one benefits, other unaffected), parasitism (one benefits, other harmed). **Succession**: primary (bare rock) vs secondary (after disturbance). **Biodiversity**: species richness + evenness.",
          },
          {
            heading: "Ecosystems and conservation",
            body: "**Energy flow**: producers → consumers → decomposers. **Food chains/webs**: trophic levels. **Biogeochemical cycles**: carbon, nitrogen, water. **Conservation**: protected areas, sustainable use, captive breeding. **Threats**: habitat loss, pollution, climate change, invasive species.",
          },
        ],
        keyFormulas: [
          {
            name: "Population growth",
            statement: "Exponential → logistic → carrying capacity",
          },
          {
            name: "Ecological relationships",
            statement: "Competition, predation, mutualism, parasitism",
          },
          {
            name: "Succession",
            statement: "Primary (bare) → secondary (disturbed)",
          },
          {
            name: "Energy flow",
            statement: "Producers → consumers → decomposers",
          },
        ],
        workedExample: {
          problem:
            "What's the difference between primary and secondary succession?",
          solution:
            "Primary: starts on bare rock/no soil. Secondary: starts after disturbance with existing soil.",
        },
      },
      questions: [
        {
          id: "cipub-u3-eco-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Exponential population growth shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "S-shaped curve" },
              { id: "b", text: "J-shaped curve — unlimited growth" },
              { id: "c", text: "Decline" },
              { id: "d", text: "No growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exponential growth",
                statement: "J-curve unlimited.",
              },
            ],
            steps: [
              { reasoning: "Exponential = J-curve.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) J-shaped curve.",
          },
        },
        {
          id: "cipub-u3-eco-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Logistic population growth shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No growth" },
              { id: "b", text: "Decline" },
              { id: "c", text: "J-shaped curve" },
              {
                id: "d",
                text: "S-shaped curve — limited by carrying capacity",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logistic growth",
                statement: "S-curve limited.",
              },
            ],
            steps: [
              { reasoning: "Logistic = S-curve.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) S-shaped curve.",
          },
        },
        {
          id: "cipub-u3-eco-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Density-dependent factors include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disasters" },
              { id: "b", text: "Climate only" },
              { id: "c", text: "No factors" },
              { id: "d", text: "Disease, competition, predation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Density-dependent",
                statement: "Disease, competition.",
              },
            ],
            steps: [
              {
                reasoning: "Density-dependent = competition etc.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Disease, competition, predation.",
          },
        },
        {
          id: "cipub-u3-eco-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Density-independent factors include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Predation" },
              { id: "b", text: "Climate, disasters" },
              { id: "c", text: "Competition" },
              { id: "d", text: "Disease" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Density-independent",
                statement: "Climate, disasters.",
              },
            ],
            steps: [
              {
                reasoning: "Density-independent = climate etc.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Climate, disasters.",
          },
        },
        {
          id: "cipub-u3-eco-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Competition is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One benefits" },
              { id: "b", text: "Both species harmed — same resource" },
              { id: "c", text: "Both benefit" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competition",
                statement: "Both harmed.",
              },
            ],
            steps: [
              {
                reasoning: "Competition = both harmed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Both harmed — same resource.",
          },
        },
        {
          id: "cipub-u3-eco-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Predation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both benefit" },
              { id: "b", text: "Both harmed" },
              { id: "c", text: "One organism eats another" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Predation",
                statement: "One eats another.",
              },
            ],
            steps: [
              { reasoning: "Predation = one eats.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) One organism eats another.",
          },
        },
        {
          id: "cipub-u3-eco-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mutualism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No effect" },
              { id: "b", text: "Both organisms benefit" },
              { id: "c", text: "One benefits" },
              { id: "d", text: "Both harmed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutualism",
                statement: "Both benefit.",
              },
            ],
            steps: [
              {
                reasoning: "Mutualism = both benefit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Both benefit.",
          },
        },
        {
          id: "cipub-u3-eco-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Commensalism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both benefit equally" },
              { id: "b", text: "Both benefit" },
              { id: "c", text: "One benefits, other unaffected" },
              { id: "d", text: "Both harmed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commensalism",
                statement: "One benefits, other unaffected.",
              },
            ],
            steps: [
              {
                reasoning: "Commensalism = one benefits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One benefits, other unaffected.",
          },
        },
        {
          id: "cipub-u3-eco-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Parasitism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both benefit" },
              { id: "b", text: "One benefits, other unaffected" },
              { id: "c", text: "Both harmed" },
              { id: "d", text: "One benefits, other harmed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parasitism",
                statement: "One benefits, other harmed.",
              },
            ],
            steps: [
              {
                reasoning: "Parasitism = one benefits, other harmed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One benefits, other harmed.",
          },
        },
        {
          id: "cipub-u3-eco-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Primary succession starts on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Existing soil" },
              { id: "b", text: "Bare rock — no soil" },
              { id: "c", text: "Water" },
              { id: "d", text: "Forest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary succession",
                statement: "Bare rock.",
              },
            ],
            steps: [
              { reasoning: "Primary = bare rock.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Bare rock.",
          },
        },
        {
          id: "cipub-u3-eco-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Secondary succession starts on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No soil" },
              { id: "b", text: "Bare rock" },
              { id: "c", text: "Water" },
              { id: "d", text: "Disturbed area with existing soil" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary succession",
                statement: "Disturbed with soil.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary = disturbed soil.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Disturbed area with soil.",
          },
        },
        {
          id: "cipub-u3-eco-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A climax community is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Early stage" },
              { id: "b", text: "Stable, mature community" },
              { id: "c", text: "No community" },
              { id: "d", text: "Disturbed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax community",
                statement: "Stable mature.",
              },
            ],
            steps: [{ reasoning: "Climax = stable.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Stable mature community.",
          },
        },
        {
          id: "cipub-u3-eco-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pioneer species are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No species" },
              { id: "b", text: "First to colonise bare area" },
              { id: "c", text: "Climax species" },
              { id: "d", text: "Final species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pioneer species",
                statement: "First colonisers.",
              },
            ],
            steps: [{ reasoning: "Pioneer = first.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) First to colonise.",
          },
        },
        {
          id: "cipub-u3-eco-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Producers in an ecosystem are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Autotrophs — make own food" },
              { id: "b", text: "Carnivores" },
              { id: "c", text: "Herbivores" },
              { id: "d", text: "Decomposers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producers",
                statement: "Autotrophs.",
              },
            ],
            steps: [
              { reasoning: "Producers = autotrophs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Autotrophs.",
          },
        },
        {
          id: "cipub-u3-eco-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Consumers in an ecosystem are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producers" },
              { id: "b", text: "Autotrophs" },
              { id: "c", text: "Decomposers only" },
              { id: "d", text: "Heterotrophs — eat other organisms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consumers",
                statement: "Heterotrophs.",
              },
            ],
            steps: [
              {
                reasoning: "Consumers = heterotrophs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Heterotrophs.",
          },
        },
        {
          id: "cipub-u3-eco-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decomposers in an ecosystem are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producers" },
              { id: "b", text: "Bacteria and fungi — break down dead matter" },
              { id: "c", text: "Carnivores" },
              { id: "d", text: "Herbivores" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposers",
                statement: "Break down dead matter.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposers = bacteria/fungi.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Bacteria and fungi.",
          },
        },
        {
          id: "cipub-u3-eco-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "A trophic level is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Species type" },
              { id: "b", text: "Population size" },
              { id: "c", text: "Position in food chain" },
              { id: "d", text: "Habitat" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trophic level",
                statement: "Position in food chain.",
              },
            ],
            steps: [
              { reasoning: "Trophic = position.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Position in food chain.",
          },
        },
        {
          id: "cipub-u3-eco-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Energy flow in ecosystem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random" },
              {
                id: "b",
                text: "Unidirectional — producers → consumers → decomposers",
              },
              { id: "c", text: "Cyclic" },
              { id: "d", text: "Bidirectional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy flow",
                statement: "Unidirectional.",
              },
            ],
            steps: [
              {
                reasoning: "Energy = unidirectional.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unidirectional.",
          },
        },
        {
          id: "cipub-u3-eco-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A food web is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interconnected food chains" },
              { id: "b", text: "Single chain" },
              { id: "c", text: "Population size" },
              { id: "d", text: "No feeding" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food web",
                statement: "Interconnected chains.",
              },
            ],
            steps: [
              {
                reasoning: "Food web = interconnected.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Interconnected food chains.",
          },
        },
        {
          id: "cipub-u3-eco-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between density-dependent and density-independent factors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Density factors",
                statement: "Depends on population vs independent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Density-dependent: disease, competition — depend on population size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Density-independent: climate, disasters — regardless of population.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dependent = population-related; independent = not.",
          },
        },
        {
          id: "cipub-u3-eco-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two examples of mutualism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutualism examples",
                statement: "Bees/flowers, mycorrhizae.",
              },
            ],
            steps: [
              {
                reasoning: "Bees and flowers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mycorrhizal fungi and plant roots.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Bees/flowers, mycorrhizae.",
          },
        },
        {
          id: "cipub-u3-eco-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between primary and secondary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Succession types",
                statement: "Bare rock vs disturbed.",
              },
            ],
            steps: [
              {
                reasoning: "Primary: starts on bare rock/no soil — slower.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Secondary: starts after disturbance with soil — faster.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both lead to climax community over time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Primary = bare rock; secondary = disturbed soil.",
          },
        },
        {
          id: "cipub-u3-eco-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how carrying capacity limits population growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Carrying capacity",
                statement: "Resource limitation.",
              },
            ],
            steps: [
              {
                reasoning: "Population grows exponentially initially.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Resources (food, space) become limiting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Growth slows as population approaches K.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Population stabilises at carrying capacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Resources limit → growth slows → stabilises at K.",
          },
        },
        {
          id: "cipub-u3-eco-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Herbivores are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary consumers" },
              { id: "b", text: "Decomposers" },
              { id: "c", text: "Secondary consumers" },
              { id: "d", text: "Producers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herbivores",
                statement: "Primary consumers.",
              },
            ],
            steps: [
              { reasoning: "Herbivores = primary.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Primary consumers.",
          },
        },
        {
          id: "cipub-u3-eco-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a keystone species?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Keystone species",
                statement: "Disproportionate impact.",
              },
            ],
            steps: [
              {
                reasoning: "Species with disproportionate effect on ecosystem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Removal causes major ecosystem change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Disproportionate ecosystem impact.",
          },
        },
        {
          id: "cipub-u3-eco-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how invasive species affect ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Invasive species",
                statement: "Disrupt native ecosystems.",
              },
            ],
            steps: [
              {
                reasoning: "No natural predators — population explodes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Outcompete native species for resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduce biodiversity — ecosystem damage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Explode → outcompete → reduce biodiversity.",
          },
        },
        {
          id: "cipub-u3-eco-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A food chain shows:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All relationships" },
              { id: "b", text: "Population size" },
              { id: "c", text: "No feeding" },
              { id: "d", text: "Linear feeding relationship" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food chain",
                statement: "Linear feeding.",
              },
            ],
            steps: [
              { reasoning: "Food chain = linear.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Linear feeding relationship.",
          },
        },
        {
          id: "cipub-u3-eco-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is biodiversity and why is it important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biodiversity importance",
                statement: "Ecosystem stability.",
              },
            ],
            steps: [
              {
                reasoning: "Variety of species in ecosystem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher biodiversity = more stable ecosystem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Variety → stability.",
          },
        },
        {
          id: "cipub-u3-eco-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how habitat destruction leads to species extinction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Habitat loss",
                statement: "Extinction cascade.",
              },
            ],
            steps: [
              {
                reasoning: "Habitat destroyed — species lose home/resources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Population declines — less food/space.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small populations vulnerable to extinction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Loss of species reduces biodiversity — ecosystem damage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Habitat loss → decline → extinction → biodiversity loss.",
          },
        },
        {
          id: "cipub-u3-eco-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a biogeochemical cycle? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biogeochemical cycle",
                statement: "Element cycling.",
              },
            ],
            steps: [
              {
                reasoning: "Movement of elements through biotic and abiotic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., carbon cycle, nitrogen cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Element cycling — carbon, nitrogen.",
          },
        },
      ],
    },
  ],
};
