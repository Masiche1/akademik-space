import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "bio10-u4-lesson-4-2",
  code: "4-2",
  title: "Speciation and Genetic Variation",
  goal: "I CAN explain how new species form, describe sources of genetic variation, and discuss mechanisms of reproductive isolation.",
  standards: ["HS-LS4-3", "HS-LS4-6"],
  vocabulary: [
    { term: "Speciation", definition: "Formation of new species from existing populations." },
    { term: "Allopatric speciation", definition: "Speciation due to geographic isolation." },
    { term: "Sympatric speciation", definition: "Speciation without geographic isolation (e.g., polyploidy)." },
    { term: "Reproductive isolation", definition: "Barriers preventing interbreeding between populations." },
    { term: "Prezygotic barrier", definition: "Barrier preventing fertilization (habitat, temporal, behavioral, mechanical, gametic)." },
    { term: "Postzygotic barrier", definition: "Barrier after fertilization (hybrid inviability, sterility, breakdown)." },
    { term: "Polyploidy", definition: "Having more than two sets of chromosomes; common in plants." },
    { term: "Genetic drift", definition: "Random change in allele frequencies, especially in small populations." },
  ],
  concepts: [
    {
      id: "bio10-u4-speciation",
      title: "Speciation",
      skill: "Explain how geographic isolation leads to new species.",
      lesson: {
        sections: [
          {
            heading: "Allopatric speciation",
            body: "1. Population is geographically separated (river, mountain, island)\n2. No gene flow between groups\n3. Each group accumulates different mutations and adaptations\n4. Over time, populations become genetically distinct\n5. If reunited, they can't interbreed → new species\n\nExample: Darwin's finches on different Galápagos Islands.",
          },
          {
            heading: "Sympatric speciation",
            body: "Speciation without geographic isolation:\n- **Polyploidy**: chromosome duplication creates instant reproductive isolation (common in plants)\n- **Habitat isolation**: same area, different niches\n- **Temporal isolation**: reproduce at different times",
          },
          {
            heading: "Reproductive isolation",
            body: "**Prezygotic** (before fertilization):\n- Habitat isolation (different areas)\n- Temporal isolation (different seasons)\n- Behavioral isolation (different mating rituals)\n- Mechanical isolation (incompatible anatomy)\n- Gametic isolation (sperm can't fertilize egg)\n\n**Postzygotic** (after fertilization):\n- Hybrid inviability (embryo dies)\n- Hybrid sterility (mule can't reproduce)\n- Hybrid breakdown (F2 generation fails)",
          },
        ],
        keyFormulas: [
          { name: "Allopatric", statement: "Geographic isolation → divergence → new species" },
          { name: "Reproductive isolation", statement: "Prezygotic (before) or postzygotic (after) barriers" },
        ],
        workedExample: {
          problem: "A river splits a squirrel population. After 100 generations, the two groups can't interbreed. What happened?",
          solution: "Allopatric speciation: geographic isolation prevented gene flow; groups accumulated genetic differences; reproductive isolation developed → new species.",
        },
      },
      questions: [
        {
          id: "bio10-u4-speciation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is speciation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extinction of a species" },
              { id: "b", text: "Formation of new species from existing populations" },
              { id: "c", text: "Migration of organisms" },
              { id: "d", text: "Mutation of a single organism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Speciation", statement: "Formation of new species." }],
            steps: [{ reasoning: "Speciation is the process of new species formation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Formation of new species",
            commonErrors: ["Confusing speciation with extinction."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u4-speciation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between prezygotic and postzygotic barriers? Give one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Prezygotic", statement: "Prevents fertilization." },
              { kind: "principle", name: "Postzygotic", statement: "After fertilization." },
            ],
            steps: [
              { reasoning: "Prezygotic: prevents fertilization (e.g., behavioral — different mating rituals).", marks: 1, markCode: "B" },
              { reasoning: "Postzygotic: after fertilization (e.g., hybrid sterility — mule can't reproduce).", marks: 1, markCode: "B" },
              { reasoning: "Prezygotic acts before zygote forms; postzygotic acts on hybrid offspring.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Prezygotic before fertilization; postzygotic after.",
            commonErrors: ["Confusing the timing."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u4-speciation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how polyploidy causes instant speciation in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Polyploidy", statement: "Extra chromosome sets create reproductive isolation." },
              { kind: "principle", name: "Instant isolation", statement: "Polyploid can't breed with diploid parent." },
            ],
            steps: [
              { reasoning: "Polyploidy = more than two sets of chromosomes (e.g., tetraploid 4n).", marks: 1, markCode: "B" },
              { reasoning: "Meiosis produces gametes with wrong chromosome numbers.", marks: 1, markCode: "R" },
              { reasoning: "Polyploid can't produce viable gametes with diploid (2n) → reproductive isolation.", marks: 1, markCode: "B" },
              { reasoning: "Two polyploids of same type can breed → instant new species.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polyploidy creates instant reproductive isolation → new species.",
            commonErrors: ["Thinking polyploidy requires gradual change."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio10-u4-speciation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A mainland population of mice is separated by a glacier into two groups.",
          parts: [
            { label: "a", prompt: "Describe the steps of allopatric speciation that could occur.", marks: 4 },
            { label: "b", prompt: "What mechanisms could cause reproductive isolation?", marks: 3 },
            { label: "c", prompt: "If the glacier melts and groups meet, what determines if they're separate species?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Allopatric speciation", statement: "Geographic isolation → genetic divergence → reproductive isolation." },
              { kind: "principle", name: "Reproductive isolation", statement: "Prezygotic or postzygotic barriers." },
            ],
            steps: [
              { reasoning: "Glacier separates population → no gene flow.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Each group accumulates different mutations and adaptations.", marks: 1, markCode: "R", part: "a" },
              { reasoning: "Genetic drift and natural selection cause divergence.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Over generations, populations become genetically distinct.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Prezygotic: different mating behaviors or timing.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Mechanical: incompatible anatomy.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Postzygotic: hybrid sterility or inviability.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "If they can't produce viable fertile offspring, they're separate species.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "If they can interbreed and produce fertile offspring, they're same species.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "The biological species concept defines species by reproductive isolation.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) isolation→divergence→speciation (b) pre/postzygotic barriers (c) reproductive isolation determines species status.",
            commonErrors: ["Thinking geographic separation alone creates species."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "bio10-u4-genetic-variation",
      title: "Sources of genetic variation",
      skill: "Describe mutation, recombination, and gene flow as sources of genetic variation.",
      lesson: {
        sections: [
          {
            heading: "Mutation",
            body: "**Mutation** is the ultimate source of new alleles:\n- Point mutations (single nucleotide changes)\n- Insertions/deletions\n- Chromosomal rearrangements\n\nMost mutations are neutral or harmful; rare beneficial mutations drive evolution.",
          },
          {
            heading: "Recombination",
            body: "**Genetic recombination** shuffles existing alleles:\n- Crossing over during meiosis\n- Independent assortment of chromosomes\n- Random fertilization\n\nCreates new combinations but doesn't create new alleles.",
          },
          {
            heading: "Gene flow",
            body: "**Gene flow** is movement of alleles between populations via migration. It can introduce new alleles and reduce differences between populations — counteracts speciation.",
          },
        ],
        keyFormulas: [
          { name: "Mutation", statement: "New alleles (ultimate source)" },
          { name: "Recombination", statement: "New combinations of existing alleles" },
        ],
        workedExample: {
          problem: "What's the difference between mutation and recombination?",
          solution: "Mutation creates new alleles; recombination shuffles existing alleles into new combinations.",
        },
      },
      questions: [
        {
          id: "bio10-u4-genetic-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ultimate source of new alleles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recombination" },
              { id: "b", text: "Mutation" },
              { id: "c", text: "Gene flow" },
              { id: "d", text: "Natural selection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Mutation", statement: "Creates new alleles." }],
            steps: [{ reasoning: "Mutation is the only source of truly new alleles.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Mutation",
            commonErrors: ["Thinking recombination creates new alleles."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio10-u4-genetic-variation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two mechanisms of genetic recombination during meiosis.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Recombination", statement: "Crossing over and independent assortment." }],
            steps: [
              { reasoning: "Crossing over: homologous chromosomes exchange segments during prophase I.", marks: 1, markCode: "B" },
              { reasoning: "Independent assortment: chromosomes align randomly at metaphase I.", marks: 1, markCode: "B" },
              { reasoning: "Both create new allele combinations in gametes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Crossing over and independent assortment.",
            commonErrors: ["Confusing with mutation."],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio10-u4-genetic-variation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why most mutations are not beneficial but are still important for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mutation effects", statement: "Most are neutral or harmful." },
              { kind: "principle", name: "Raw material", statement: "Mutations provide variation for selection." },
            ],
            steps: [
              { reasoning: "Random changes to DNA usually disrupt function → harmful or neutral.", marks: 1, markCode: "R" },
              { reasoning: "Beneficial mutations are rare but provide adaptive potential.", marks: 1, markCode: "B" },
              { reasoning: "Natural selection acts on this variation — without mutation, no evolution.", marks: 1, markCode: "B" },
              { reasoning: "Even neutral mutations contribute to genetic diversity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mutations provide raw material; rare beneficial ones drive adaptation.",
            commonErrors: ["Thinking all mutations are bad."],
            examinerNote: "R1, B2, A1.",
          },
        },
        {
          id: "bio10-u4-genetic-variation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare mutation, recombination and gene flow as sources of genetic variation.",
          parts: [
            { label: "a", prompt: "Define each mechanism.", marks: 3 },
            { label: "b", prompt: "Which creates new alleles vs new combinations?", marks: 3 },
            { label: "c", prompt: "How does each affect population diversity?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mutation", statement: "Creates new alleles." },
              { kind: "principle", name: "Recombination", statement: "New combinations of existing alleles." },
              { kind: "principle", name: "Gene flow", statement: "Alleles move between populations." },
            ],
            steps: [
              { reasoning: "Mutation: random change in DNA sequence.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Recombination: shuffling during meiosis.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Gene flow: migration between populations.", marks: 1, markCode: "B", part: "a" },
              { reasoning: "Only mutation creates new alleles; recombination and gene flow redistribute existing ones.", marks: 2, markCode: "R", part: "b" },
              { reasoning: "Gene flow introduces alleles from other populations.", marks: 1, markCode: "B", part: "b" },
              { reasoning: "Mutation increases diversity within population.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Recombination increases diversity within population.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Gene flow increases diversity within populations but decreases between populations (homogenizing effect).", marks: 2, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) defined (b) mutation=new alleles, others=redistribution (c) all increase diversity, gene flow homogenizes populations.",
            commonErrors: ["Thinking recombination creates new alleles."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
  ],
};
