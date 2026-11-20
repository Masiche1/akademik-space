import type { Lesson } from "../../../types.ts";

export const lesson712: Lesson = {
  id: "cial-b-u7-lesson-7-2",
  code: "7-2",
  title: "Pedigree analysis and gene pools",
  goal: "I CAN interpret pedigrees and explain allele frequencies and speciation.",
  standards: ["9700 14.2: pedigree analysis, 15.2: speciation"],
  vocabulary: [
    { term: "Pedigree", definition: "Family tree showing inheritance of a trait across generations." },
    { term: "Proband", definition: "First affected individual through whom family is studied." },
    { term: "Carrier", definition: "Heterozygous individual with recessive allele, unaffected." },
    { term: "Gene pool", definition: "All alleles of all genes in a population." },
    { term: "Allele frequency", definition: "Proportion of a particular allele in the gene pool." },
    { term: "Gene flow", definition: "Movement of alleles between populations via migration." },
  ],
  concepts: [
    {
      id: "cial-b-u7-pedigree",
      title: "Pedigree analysis",
      skill: "Interpret pedigrees to deduce inheritance patterns.",
      lesson: {
        sections: [
          {
            heading: "Reading a pedigree",
            body: "Squares = males, circles = females; filled = affected, half-filled = carrier; horizontal line = mating, vertical drops = children. Autosomal dominant: every generation affected, no skipping. Autosomal recessive: can skip generations, unaffected parents can have affected children. X-linked recessive: more males affected, no father-to-son transmission.",
          },
          {
            heading: "Deducing the pattern",
            body: "Ask: does it skip generations? Are both sexes equally affected? Can an affected father transmit to son? Equal sexes + skipping → autosomal recessive. Unequal (more males) + no father→son → X-linked recessive. Every generation + both sexes → autosomal dominant.",
          },
          {
            heading: "Carrier probability",
            body: "For autosomal recessive, unaffected parents of an affected child are both carriers (Aa × Aa). Each unaffected sibling has 2/3 chance of being a carrier (excluding aa). For X-linked, mother of affected son is typically a carrier.",
          },
        ],
        keyFormulas: [
          { name: "Recessive cross", statement: "Aa × Aa → 1/4 affected (aa)" },
          { name: "X-linked", statement: "Affected son gets allele from carrier mother" },
        ],
        workedExample: {
          problem: "Unaffected parents have an affected child with cystic fibrosis (autosomal recessive). What are the parents' genotypes?",
          solution: "Both must be carriers Aa — affected child is aa, so each parent contributed a.",
        },
      },
      questions: [
        {
          id: "cial-b-u7-pd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a pedigree, what does a half-filled symbol represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carrier" },
              { id: "b", text: "Affected male" },
              { id: "c", text: "Unaffected female" },
              { id: "d", text: "Deceased" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Pedigree symbols", statement: "Half-filled = heterozygous carrier." }],
            steps: [{ reasoning: "Half-filled symbol denotes carrier.", marks: 1, markCode: "A" }],
            finalAnswer: "Carrier",
          },
        },
        {
          id: "cial-b-u7-pd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Unaffected parents have a child with an autosomal recessive disorder. What are the parents' genotypes?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Recessive inheritance", statement: "Affected aa needs a from each parent." }],
            steps: [
              { reasoning: "Child is aa — needs one recessive allele from each parent.", marks: 1, markCode: "M" },
              { reasoning: "Unaffected parents must both be carriers (Aa).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both Aa (carriers)",
          },
        },
        {
          id: "cial-b-u7-pd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pedigree shows a disorder affecting mostly males, with no father-to-son transmission. Identify the likely inheritance pattern and justify.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pedigree interpretation", statement: "More males + no father→son = X-linked recessive." }],
            steps: [
              { reasoning: "More males affected suggests sex-linked.", marks: 1, markCode: "M" },
              { reasoning: "No father-to-son transmission fits X-linkage (sons get Y from father).", marks: 1, markCode: "M" },
              { reasoning: "Recessive because unaffected carrier mothers pass to sons.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: X-linked recessive.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "X-linked recessive",
          },
        },
        {
          id: "cial-b-u7-pd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Pedigrees and gene pools.",
          parts: [
            { label: "a", prompt: "What do squares, circles and half-filled symbols show in a pedigree?", marks: 3 },
            { label: "b", prompt: "Unaffected parents have an affected child (autosomal recessive). Give parent genotypes.", marks: 2 },
            { label: "c", prompt: "Define allele frequency.", marks: 1 },
            { label: "d", prompt: "Explain how gene flow affects populations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Genetics", statement: "Pedigree symbols; carriers Aa; gene flow moves alleles." }],
            steps: [
              { part: "a", reasoning: "Square=male, circle=female, filled=affected, half=carrier.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Lines show mating and descent.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All symbols correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both parents are carriers (Aa).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Child must be aa.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Proportion of a given allele in the gene pool.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Migration moves alleles between populations.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Increases variation, reduces differences between populations.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Can prevent speciation / introduce new alleles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) symbols (b) Aa×Aa (c) allele proportion (d) moves alleles, ↑variation",
          },
        },
      ],
    },
    {
      id: "cial-b-u7-gene-pool",
      title: "Gene pools and speciation",
      skill: "Explain allele frequency change, isolation and speciation.",
      lesson: {
        sections: [
          {
            heading: "Allele frequencies",
            body: "Evolution = change in allele frequencies in a population's gene pool over time. Causes: mutation (new alleles), selection (differential survival), gene flow (migration), genetic drift (random change, especially in small populations).",
          },
          {
            heading: "Isolation and speciation",
            body: "Speciation requires reproductive isolation: geographic (physical barrier), ecological (different habitats), temporal (different breeding times), behavioural (different courtship). Isolated populations diverge genetically → can no longer interbreed → new species.",
          },
          {
            heading: "Bottlenecks and founder effect",
            body: "Genetic drift strongest in small populations. Bottleneck: population crash reduces diversity (e.g. cheetahs). Founder effect: small group colonises new area carrying subset of alleles (e.g. island populations).",
          },
        ],
        keyFormulas: [
          { name: "Evolution", statement: "Change in allele frequencies over generations" },
          { name: "Speciation", statement: "Reproductive isolation → genetic divergence → new species" },
        ],
        workedExample: {
          problem: "A few birds are blown to an island. Their descendants differ genetically from mainland birds. What is this called?",
          solution: "Founder effect — small founding population carries limited alleles; drift causes divergence → potential speciation.",
        },
      },
      questions: [
        {
          id: "cial-b-u7-gp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evolution can be defined as a change in...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Allele frequencies in a population" },
              { id: "b", text: "The number of species" },
              { id: "c", text: "An individual's DNA" },
              { id: "d", text: "The environment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evolution", statement: "Change in allele frequencies." }],
            steps: [{ reasoning: "Evolution = allele frequency change in population.", marks: 1, markCode: "A" }],
            finalAnswer: "Allele frequencies",
          },
        },
        {
          id: "cial-b-u7-gp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two causes of genetic drift.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Genetic drift", statement: "Random allele frequency change, esp. small populations." }],
            steps: [
              { reasoning: "Bottleneck effect or founder effect (either).", marks: 1, markCode: "M" },
              { reasoning: "Small population size amplifies random changes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Bottleneck/founder effect",
          },
        },
        {
          id: "cial-b-u7-gp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how geographic isolation can lead to speciation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Speciation", statement: "Barrier → no gene flow → divergence → reproductive isolation." }],
            steps: [
              { reasoning: "Physical barrier splits population — no gene flow.", marks: 1, markCode: "M" },
              { reasoning: "Each group faces different selection/drift — alleles diverge.", marks: 1, markCode: "M" },
              { reasoning: "Over time populations become genetically distinct.", marks: 1, markCode: "M" },
              { reasoning: "If they can no longer interbreed successfully → separate species.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Isolation → divergence → speciation",
          },
        },
        {
          id: "cial-b-u7-gp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Gene pools and speciation.",
          parts: [
            { label: "a", prompt: "Define allele frequency.", marks: 1 },
            { label: "b", prompt: "List four factors that change allele frequencies.", marks: 4 },
            { label: "c", prompt: "What is the founder effect?", marks: 2 },
            { label: "d", prompt: "Explain why reproductive isolation is needed for speciation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Population genetics", statement: "Mutation, selection, gene flow, drift change allele frequencies." }],
            steps: [
              { part: "a", reasoning: "Proportion of an allele in the gene pool.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mutation, natural selection, gene flow, genetic drift.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All four listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each factor named correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bonus: non-random mating.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Small group colonises new area with subset of alleles.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Descendants differ from source population.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Without isolation gene flow keeps populations genetically similar.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Isolation allows divergence until interbreeding fails.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) allele proportion (b) mutation/selection/flow/drift (c) subset alleles (d) prevents gene flow",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u7-pedigree-genes-pool-notes",
      title: "Pedigree analysis and gene pools — revision notes",
      summary: "Reading pedigrees, allele frequencies and speciation.",
      sections: [
        {
          heading: "Pedigrees",
          body: "Square=male, circle=female; filled=affected, half=carrier. Autosomal recessive skips generations; dominant affects every generation; X-linked recessive hits more males with no father→son transmission. Unaffected parents of affected child (recessive) are both carriers.",
        },
        {
          heading: "Gene pools",
          body: "Evolution = allele frequency change. Drivers: mutation, selection, gene flow, genetic drift (bottleneck/founder effects in small populations). Speciation needs reproductive isolation — geographic, ecological, temporal or behavioural.",
        },
        {
          heading: "Exam checklist",
          body: "For pedigree questions identify the pattern first (skip generations? sex bias?) then deduce genotypes. For speciation always mention the isolation mechanism.",
        },
      ],
    },
  ],
};
