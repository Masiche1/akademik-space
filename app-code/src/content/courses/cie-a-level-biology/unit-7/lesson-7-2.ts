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
              { id: "a", text: "Unaffected female" },
              { id: "b", text: "Deceased" },
              { id: "c", text: "Carrier" },
              { id: "d", text: "Affected male" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-b-u7-pd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a pedigree chart, what does a square symbol represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Female" },
              { id: "b", text: "Unaffected" },
              { id: "c", text: "Carrier" },
              { id: "d", text: "Male" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Pedigree symbols", statement: "Square = male, circle = female." }],
            steps: [{ reasoning: "Squares represent males.", marks: 1, markCode: "A" }],
            finalAnswer: "Male",
          },
        },
        {
          id: "cial-b-u7-pd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pedigree shows the disorder affecting every generation, with males and females equally affected. What is the most likely inheritance pattern?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Y-linked" },
              { id: "b", text: "X-linked recessive" },
              { id: "c", text: "Autosomal recessive" },
              { id: "d", text: "Autosomal dominant" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Pedigree interpretation", statement: "Every generation + both sexes = autosomal dominant." }],
            steps: [{ reasoning: "No skipping generations and equal sex ratio suggest dominant.", marks: 1, markCode: "A" }],
            finalAnswer: "Autosomal dominant",
          },
        },
        {
          id: "cial-b-u7-pd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two carrier parents (Aa × Aa) for an autosomal recessive disorder have four children. How many children are expected to show the disorder?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1, unit: "child" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Recessive cross", statement: "Aa × Aa → 1/4 affected (aa)." }],
            steps: [
              { reasoning: "P(affected) = 1/4.", marks: 1, markCode: "M" },
              { reasoning: "$4 \\times \\frac{1}{4} = 1$ child.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 child",
          },
        },
        {
          id: "cial-b-u7-pd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Unaffected siblings of a child with an autosomal recessive disorder have carrier parents (Aa × Aa). What is the probability that a randomly chosen UNAFFECTED sibling is a carrier (Aa)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.6667 }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Carrier probability", statement: "Of unaffected offspring (AA or Aa), 2/3 are carriers." }],
            steps: [{ reasoning: "Unaffected = AA or Aa; carriers = 2 of the 3 unaffected genotypes → 2/3 ≈ 0.6667.", marks: 1, markCode: "A" }],
            finalAnswer: "0.6667",
          },
        },
        {
          id: "cial-b-u7-pd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In X-linked recessive inheritance, an affected father passes his allele to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All his sons" },
              { id: "b", text: "All his daughters (as carriers) but no sons" },
              { id: "c", text: "Half his daughters and half his sons" },
              { id: "d", text: "Neither sons nor daughters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "X-linkage", statement: "Father gives X to daughters, Y to sons." }],
            steps: [{ reasoning: "All daughters receive father's X; sons receive his Y.", marks: 1, markCode: "A" }],
            finalAnswer: "All daughters, no sons",
          },
        },
        {
          id: "cial-b-u7-pd-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In genetics, a 'carrier' is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A heterozygous individual with a recessive allele who is unaffected" },
              { id: "b", text: "An individual showing the dominant phenotype" },
              { id: "c", text: "Any male in a pedigree" },
              { id: "d", text: "An affected homozygous recessive individual" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Carrier", statement: "Heterozygous, unaffected, carries recessive allele." }],
            steps: [{ reasoning: "Carrier = Aa, unaffected.", marks: 1, markCode: "A" }],
            finalAnswer: "Heterozygous unaffected individual",
          },
        },
        {
          id: "cial-b-u7-pd-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would distinguish autosomal dominant from autosomal recessive inheritance using a pedigree.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pedigree interpretation", statement: "Dominant: every generation; recessive: skips generations." }],
            steps: [
              { reasoning: "Check whether the trait appears in every generation — dominant traits rarely skip.", marks: 1, markCode: "M" },
              { reasoning: "Recessive traits can skip generations and unaffected parents can have affected children.", marks: 1, markCode: "M" },
              { reasoning: "Compare sexes affected — both patterns affect sexes equally on autosomes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Dominant=every generation; recessive=skips generations",
          },
        },
        {
          id: "cial-b-u7-pd-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A carrier mother (X$^CX^c$) and a man with normal vision (X$^CY$) have three sons. How many of the sons are expected to be colour blind?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.5, unit: "sons" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "X-linkage", statement: "Sons get Y from father and X$^C$ or X$^c$ from mother." }],
            steps: [
              { reasoning: "P(colour-blind son) = 1/2 per son.", marks: 1, markCode: "M" },
              { reasoning: "$3 \\times \\frac{1}{2} = 1.5$ sons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5 sons",
          },
        },
        {
          id: "cial-b-u7-pd-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pedigree feature most strongly suggests X-linked recessive inheritance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mostly males affected and no father-to-son transmission" },
              { id: "b", text: "Every generation affected" },
              { id: "c", text: "Trait skips generations in both sexes equally" },
              { id: "d", text: "Only females affected" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Pedigree interpretation", statement: "More males + no father→son = X-linked recessive." }],
            steps: [{ reasoning: "Male bias and no father-to-son transmission indicate X-linkage.", marks: 1, markCode: "A" }],
            finalAnswer: "More males, no father-to-son",
          },
        },
        {
          id: "cial-b-u7-pd-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "If two unaffected parents have a child affected by a genetic disorder, the disorder must be...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sex-linked dominant" },
              { id: "b", text: "Recessive" },
              { id: "c", text: "Caused by the environment" },
              { id: "d", text: "Dominant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Recessive inheritance", statement: "Unaffected parents of affected child must both be carriers." }],
            steps: [{ reasoning: "Both parents contributed a recessive allele → recessive disorder.", marks: 1, markCode: "A" }],
            finalAnswer: "Recessive",
          },
        },
        {
          id: "cial-b-u7-pd-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a population in Hardy-Weinberg equilibrium, 1 in 100 individuals is affected by an autosomal recessive disorder (aa). What is the frequency of the recessive allele a in the population?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.1 }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Hardy-Weinberg", statement: "$q^2$ = frequency of affected (aa)." }],
            steps: [
              { reasoning: "$q^2 = \\frac{1}{100} = 0.01$.", marks: 1, markCode: "M" },
              { reasoning: "$q = \\sqrt{0.01} = 0.1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.1",
          },
        },
        {
          id: "cial-b-u7-pd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Unaffected parents have a son affected by haemophilia (X-linked recessive). Give the parents' genotypes and the probability that their next child is an affected son.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "X-linkage", statement: "Affected son gets X$^h$ from carrier mother and Y from father." }],
            steps: [
              { reasoning: "Father is unaffected: X$^HY$.", marks: 1, markCode: "M" },
              { reasoning: "Mother must be a carrier: X$^HX^h$.", marks: 1, markCode: "M" },
              { reasoning: "P(son) = 1/2 and P(transmit X$^h$ | son) = 1/2.", marks: 1, markCode: "M" },
              { reasoning: "P(affected son) = $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$ of all children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mother X$^HX^h$, father X$^HY$; P(affected son) = 1/4",
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
              { id: "c", text: "The environment" },
              { id: "d", text: "An individual's DNA" },
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
        {
          id: "cial-b-u7-gp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The gene pool of a population refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The largest individual in the population" },
              { id: "b", text: "The total number of organisms" },
              { id: "c", text: "The most common phenotype" },
              { id: "d", text: "All the alleles of all genes in the population" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gene pool", statement: "All alleles at all loci in a population." }],
            steps: [{ reasoning: "Gene pool = all alleles in the population.", marks: 1, markCode: "A" }],
            finalAnswer: "All alleles of all genes",
          },
        },
        {
          id: "cial-b-u7-gp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Allele frequency is best defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The proportion of a particular allele among all copies of that gene" },
              { id: "b", text: "The number of species in a habitat" },
              { id: "c", text: "The number of genes in an organism" },
              { id: "d", text: "The rate of mutation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency", statement: "Copies of allele / total copies of gene." }],
            steps: [{ reasoning: "Frequency is a proportion of the gene pool.", marks: 1, markCode: "A" }],
            finalAnswer: "Proportion of allele copies",
          },
        },
        {
          id: "cial-b-u7-gp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A population of 500 diploid individuals has 1000 gene copies at one locus, of which 400 are allele A. What is the frequency of allele A?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.4 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency", statement: "Frequency = copies of allele / total copies." }],
            steps: [
              { reasoning: "$\\frac{400}{1000}$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.4",
          },
        },
        {
          id: "cial-b-u7-gp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the frequency of allele A in a population is 0.7, what is the frequency of allele a?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency", statement: "Allele frequencies sum to 1." }],
            steps: [{ reasoning: "$a = 1 - 0.7 = 0.3$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.3",
          },
        },
        {
          id: "cial-b-u7-gp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Genetic drift (random change in allele frequency) has the strongest effect in...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climax communities" },
              { id: "b", text: "Very large populations" },
              { id: "c", text: "Populations with no predators" },
              { id: "d", text: "Small populations" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Genetic drift", statement: "Random sampling effects dominate in small populations." }],
            steps: [{ reasoning: "Drift is strongest when population size is small.", marks: 1, markCode: "A" }],
            finalAnswer: "Small populations",
          },
        },
        {
          id: "cial-b-u7-gp-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The founder effect occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A population crashes to near extinction" },
              { id: "b", text: "Two species interbreed" },
              { id: "c", text: "A small group colonises a new area carrying only a subset of the original alleles" },
              { id: "d", text: "A dominant allele spreads" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Founder effect", statement: "Small founding group → limited alleles → divergence." }],
            steps: [{ reasoning: "Founders carry a subset of alleles to the new area.", marks: 1, markCode: "A" }],
            finalAnswer: "Subset of alleles in new colony",
          },
        },
        {
          id: "cial-b-u7-gp-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a population bottleneck reduces genetic diversity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Bottleneck effect", statement: "Population crash → loss of alleles by chance." }],
            steps: [
              { reasoning: "A bottleneck is a drastic, sudden reduction in population size.", marks: 1, markCode: "M" },
              { reasoning: "Survivors carry only a subset of the original alleles.", marks: 1, markCode: "M" },
              { reasoning: "Rebuilding population from few survivors → reduced genetic diversity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Crash → subset of alleles → less diversity",
          },
        },
        {
          id: "cial-b-u7-gp-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An island population becomes isolated from the mainland. Allele A has frequency 0.5 on the island and 0.8 on the mainland. After isolation, the island frequency changes to 0.6. By how much did the island allele frequency change?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.1 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency change", statement: "Change = final − initial frequency (genetic drift)." }],
            steps: [
              { reasoning: "$0.6 - 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.1",
          },
        },
        {
          id: "cial-b-u7-gp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of the following does NOT change allele frequencies in a population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An individual's learning during its lifetime" },
              { id: "b", text: "Gene flow" },
              { id: "c", text: "Mutation" },
              { id: "d", text: "Natural selection" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Evolution", statement: "Only heritable changes affect allele frequencies." }],
            steps: [{ reasoning: "Learning is not heritable — it cannot change the gene pool.", marks: 1, markCode: "A" }],
            finalAnswer: "Individual learning",
          },
        },
        {
          id: "cial-b-u7-gp-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of reproductive isolation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two populations with different colours" },
              { id: "b", text: "Two populations living at different altitudes" },
              { id: "c", text: "Two populations breeding in different seasons (temporal isolation)" },
              { id: "d", text: "Two populations eating different foods" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Reproductive isolation", statement: "Prevents interbreeding — geographic, ecological, temporal, behavioural." }],
            steps: [{ reasoning: "Different breeding times = temporal isolation.", marks: 1, markCode: "A" }],
            finalAnswer: "Temporal isolation",
          },
        },
        {
          id: "cial-b-u7-gp-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The frequency of allele a in a population rises from 0.10 to 0.30 over several generations. What is the absolute change in allele frequency?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.2 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency change", statement: "Change = final − initial." }],
            steps: [
              { reasoning: "$0.30 - 0.10$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.2",
          },
        },
        {
          id: "cial-b-u7-gp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how geographic isolation can lead to speciation, using the concepts of gene flow and allele frequency.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Speciation", statement: "No gene flow → allele frequencies diverge → reproductive isolation." }],
            steps: [
              { reasoning: "A geographic barrier physically separates one population into two.", marks: 1, markCode: "M" },
              { reasoning: "Gene flow between the groups stops completely.", marks: 1, markCode: "M" },
              { reasoning: "Different selection and drift make allele frequencies diverge in each group.", marks: 1, markCode: "M" },
              { reasoning: "Eventually reproductive isolation evolves → they can no longer interbreed → new species.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Barrier → no gene flow → divergence → speciation",
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
