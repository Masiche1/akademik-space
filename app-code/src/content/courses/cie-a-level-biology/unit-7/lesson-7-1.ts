import type { Lesson } from "../../../types.ts";

export const lesson711: Lesson = {
  id: "cial-b-u7-lesson-7-1",
  code: "7-1",
  title: "Monohybrid inheritance",
  goal: "I CAN solve monohybrid genetic crosses and interpret Punnett squares.",
  standards: ["9700 14.1: monohybrid inheritance"],
  vocabulary: [
    { term: "Allele", definition: "Alternative form of a gene at the same locus." },
    { term: "Homozygous", definition: "Two identical alleles (AA or aa)." },
    { term: "Heterozygous", definition: "Two different alleles (Aa)." },
    { term: "Genotype", definition: "Genetic makeup, e.g. Tt." },
    { term: "Phenotype", definition: "Observable characteristic, e.g. tall." },
    { term: "Dominant/recessive", definition: "Dominant allele expressed in heterozygote; recessive only when homozygous." },
  ],
  concepts: [
    {
      id: "cial-b-u7-monohybrid",
      title: "Monohybrid crosses",
      skill: "Set up and solve single-gene crosses including test crosses.",
      lesson: {
        sections: [
          {
            heading: "Setting up a cross",
            body: "Choose letters for alleles (dominant capital). Write parental genotypes, gametes, then Punnett square. Genotype ratio from square; phenotype ratio depends on dominance. E.g. Tt × Tt → 1 TT : 2 Tt : 1 tt genotype, 3 tall : 1 dwarf phenotype.",
          },
          {
            heading: "Test cross",
            body: "Cross dominant-phenotype individual of unknown genotype with homozygous recessive. If any recessive offspring appear, parent was heterozygous; if all dominant, parent was homozygous dominant.",
          },
          {
            heading: "Calculating probabilities",
            body: "For independent events multiply probabilities (e.g. P(two recessive) = 1/4 × 1/4 = 1/16 for two separate offspring). Expected numbers = probability × total offspring.",
          },
        ],
        keyFormulas: [
          { name: "Monohybrid ratio", statement: "Tt×Tt → 3:1 phenotype, 1:2:1 genotype" },
          { name: "Test cross", statement: "Dominant phenotype × aa reveals genotype" },
        ],
        workedExample: {
          problem: "Two heterozygous tall plants (Tt) are crossed. What proportion of offspring are dwarf (tt)?",
          solution: "Punnett: Tt×Tt → 1 TT, 2 Tt, 1 tt. tt = 1/4 = 25%.",
        },
      },
      questions: [
        {
          id: "cial-b-u7-mh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the phenotype ratio for a Tt × Tt cross (complete dominance)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3:1" },
              { id: "b", text: "1:1" },
              { id: "c", text: "1:2:1" },
              { id: "d", text: "9:3:3:1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Monohybrid ratio", statement: "Tt×Tt → 3 dominant : 1 recessive phenotype." }],
            steps: [{ reasoning: "3:1 phenotype ratio for heterozygous cross.", marks: 1, markCode: "A" }],
            finalAnswer: "3:1",
          },
        },
        {
          id: "cial-b-u7-mh-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A homozygous dominant plant (TT) is crossed with a heterozygous plant (Tt). What fraction of offspring are homozygous recessive?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Punnett square", statement: "TT gametes all T; Tt gives T or t." }],
            steps: [
              { reasoning: "Offspring: TT or Tt only — no tt possible.", marks: 1, markCode: "M" },
              { reasoning: "Fraction homozygous recessive = 0.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0$",
          },
        },
        {
          id: "cial-b-u7-mh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a test cross determines whether a dominant-phenotype plant is homozygous or heterozygous.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Test cross", statement: "Cross with aa reveals hidden recessive allele." }],
            steps: [
              { reasoning: "Cross unknown (TT or Tt) with homozygous recessive aa.", marks: 1, markCode: "M" },
              { reasoning: "If parent TT: all offspring dominant phenotype.", marks: 1, markCode: "M" },
              { reasoning: "If parent Tt: half offspring recessive phenotype.", marks: 1, markCode: "M" },
              { reasoning: "Presence of recessive offspring proves heterozygous.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Recessive offspring = heterozygous",
          },
        },
        {
          id: "cial-b-u7-mh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Monohybrid inheritance.",
          parts: [
            { label: "a", prompt: "Define genotype and phenotype.", marks: 2 },
            { label: "b", prompt: "For a Tt × Tt cross, give the genotype ratio.", marks: 2 },
            { label: "c", prompt: "What is the probability that two offspring from Tt × Tt are both recessive?", marks: 2 },
            { label: "d", prompt: "Describe a test cross and its outcome for a heterozygous parent.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Inheritance", statement: "Genotype→phenotype via dominance; independent assortment." }],
            steps: [
              { part: "a", reasoning: "Genotype = alleles present; phenotype = observable trait.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "1 TT : 2 Tt : 1 tt.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "P(recessive)=1/4 each; both = 1/16.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$1/16$ or $6.25\\%$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cross dominant phenotype with homozygous recessive.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Heterozygous parent gives 1:1 dominant:recessive offspring.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Recessive offspring reveal the hidden allele.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) alleles vs trait (b) 1:2:1 (c) 1/16 (d) test cross 1:1",
          },
        },
      ],
    },
    {
      id: "cial-b-u7-dihybrid",
      title: "Dihybrid inheritance and extensions",
      skill: "Solve dihybrid crosses and recognise codominance, incomplete dominance and sex linkage.",
      lesson: {
        sections: [
          {
            heading: "Dihybrid crosses",
            body: "Two genes assort independently. Dihybrid cross (AaBb × AaBb) gives 9:3:3:1 phenotype ratio and 1:2:1:2:4:2:1:2:1 genotype ratio. Use a 4×4 Punnett square or multiply single-gene probabilities.",
          },
          {
            heading: "Non-Mendelian patterns",
            body: "Codominance: both alleles expressed (e.g. AB blood group → A and B antigens). Incomplete dominance: heterozygote intermediate (e.g. snapdragon flower colour — pink from red×white). Multiple alleles: more than two forms (ABO blood: I$^A$, I$^B$, I$^O$).",
          },
          {
            heading: "Sex linkage",
            body: "Genes on sex chromosomes show different inheritance in males/females. X-linked recessive (e.g. colour blindness, haemophilia): males affected if X carries allele (XY), females need two copies (XX). Father passes X-linked allele to all daughters, none to sons.",
          },
        ],
        keyFormulas: [
          { name: "Dihybrid ratio", statement: "AaBb×AaBb → 9:3:3:1 phenotype" },
          { name: "X-linked", statement: "Males XY express recessive X allele directly" },
        ],
        workedExample: {
          problem: "In ABO blood groups, I$^A$ and I$^B$ are codominant, I$^O$ recessive. What are the possible genotypes for blood group AB?",
          solution: "Only I$^A$I$^B$ — both antigens expressed (codominance).",
        },
      },
      questions: [
        {
          id: "cial-b-u7-dh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the phenotype ratio for a dihybrid cross AaBb × AaBb (complete dominance)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9:3:3:1" },
              { id: "b", text: "3:1" },
              { id: "c", text: "1:2:1" },
              { id: "d", text: "1:1:1:1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Dihybrid ratio", statement: "Independent assortment → 9:3:3:1." }],
            steps: [{ reasoning: "Dihybrid cross gives 9:3:3:1.", marks: 1, markCode: "A" }],
            finalAnswer: "9:3:3:1",
          },
        },
        {
          id: "cial-b-u7-dh-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between codominance and incomplete dominance.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Non-Mendelian", statement: "Codominance: both expressed; incomplete: intermediate." }],
            steps: [
              { reasoning: "Codominance: heterozygote shows both alleles (AB blood).", marks: 1, markCode: "M" },
              { reasoning: "Incomplete dominance: heterozygote intermediate phenotype (pink snapdragon).", marks: 1, markCode: "M" },
              { reasoning: "Both give 1:2:1 ratio but different heterozygote appearance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Both expressed vs intermediate",
          },
        },
        {
          id: "cial-b-u7-dh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are X-linked recessive disorders (e.g. colour blindness) more common in males than females?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "X-linkage", statement: "Males have one X — allele always expressed." }],
            steps: [
              { reasoning: "Males are XY — only one X chromosome.", marks: 1, markCode: "M" },
              { reasoning: "A recessive allele on that X is expressed (no second X to mask it).", marks: 1, markCode: "M" },
              { reasoning: "Females XX need both X's affected to show disorder.", marks: 1, markCode: "M" },
              { reasoning: "Hence males affected far more often.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Males have single X — allele always expressed",
          },
        },
        {
          id: "cial-b-u7-dh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Extended inheritance.",
          parts: [
            { label: "a", prompt: "Give the phenotype ratio for AaBb × AaBb.", marks: 1 },
            { label: "b", prompt: "Distinguish codominance from incomplete dominance.", marks: 3 },
            { label: "c", prompt: "What is sex linkage? Give an example disorder.", marks: 2 },
            { label: "d", prompt: "In ABO groups, what genotype gives blood group O?", marks: 1 },
            { label: "e", prompt: "A colour-blind man marries a non-carrier woman. What proportion of sons are colour blind?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Inheritance", statement: "Dihybrid 9:3:3:1; X-linked males express recessive allele." }],
            steps: [
              { part: "a", reasoning: "9:3:3:1.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Codominance: both alleles expressed (AB).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Incomplete: heterozygote intermediate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Example each or clear distinction.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Gene on sex chromosome — different inheritance in males/females.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Example: colour blindness or haemophilia.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "I$^O$I$^O$ (homozygous recessive).", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Father passes Y to sons — sons get normal X from mother.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "0% of sons colour blind (all daughters carriers).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 9:3:3:1 (b) both vs intermediate (c) X-linked e.g. colour blindness (d) IOIO (e) 0%",
          },
        },
      ],
    },
    {
      id: "cial-b-u7-evolution",
      title: "Evolution and natural selection",
      skill: "Explain variation, natural selection, speciation and selective breeding.",
      lesson: {
        sections: [
          {
            heading: "Variation and selection",
            body: "Variation arises from mutation and meiosis (independent assortment, crossing over). Natural selection: individuals with favourable alleles survive/reproduce more → allele frequency changes → population evolves. Requires: variation, heritability, differential survival, reproduction.",
          },
          {
            heading: "Evidence for evolution",
            body: "Fossil record (transitional forms), comparative anatomy (homologous structures — same origin different function), DNA/protein similarities, observed selection (antibiotic resistance, peppered moth).",
          },
          {
            heading: "Speciation and selective breeding",
            body: "Speciation: populations isolated (geographic/ecological) → no gene flow → divergence → new species. Selective breeding: humans choose parents for desired traits (crops, livestock) — artificial selection, much faster than natural.",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "Variation + heritability + differential survival → evolution" },
          { name: "Speciation", statement: "Isolation + divergence → new species" },
        ],
        workedExample: {
          problem: "Antibiotic resistance in bacteria is an example of which evolutionary mechanism?",
          solution: "Natural selection — bacteria with resistance genes survive antibiotic exposure and reproduce, increasing resistant allele frequency.",
        },
      },
      questions: [
        {
          id: "cial-b-u7-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is natural selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individuals with favourable traits survive and reproduce more" },
              { id: "b", text: "The strongest organism always wins" },
              { id: "c", text: "Random changes in DNA" },
              { id: "d", text: "Humans choosing traits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural selection", statement: "Differential survival/reproduction of variants." }],
            steps: [{ reasoning: "Selection favours advantageous heritable traits.", marks: 1, markCode: "A" }],
            finalAnswer: "Favourable traits survive/reproduce",
          },
        },
        {
          id: "cial-b-u7-ev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three pieces of evidence for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Evidence", statement: "Fossils, homologous structures, DNA similarity, observed selection." }],
            steps: [
              { reasoning: "Fossil record with transitional forms.", marks: 1, markCode: "A" },
              { reasoning: "Comparative anatomy: homologous structures.", marks: 1, markCode: "A" },
              { reasoning: "DNA/protein similarity or observed selection (antibiotic resistance).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fossils, homologous structures, DNA",
          },
        },
        {
          id: "cial-b-u7-ev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how antibiotic resistance in bacteria demonstrates natural selection.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Selection", statement: "Variation + differential survival → allele frequency change." }],
            steps: [
              { reasoning: "Bacterial population has genetic variation — some resist antibiotic.", marks: 1, markCode: "M" },
              { reasoning: "Antibiotic kills susceptible bacteria; resistant survive.", marks: 1, markCode: "M" },
              { reasoning: "Resistant bacteria reproduce — resistance gene spreads.", marks: 1, markCode: "M" },
              { reasoning: "Allele frequency changes — population evolves resistance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Resistant survive → reproduce → spread",
          },
        },
        {
          id: "cial-b-u7-ev-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evolution.",
          parts: [
            { label: "a", prompt: "Define natural selection.", marks: 2 },
            { label: "b", prompt: "Give two sources of genetic variation.", marks: 2 },
            { label: "c", prompt: "What conditions are needed for natural selection to occur?", marks: 3 },
            { label: "d", prompt: "Distinguish natural selection from selective breeding.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evolution", statement: "Selection requires variation+heritability+selection pressure." }],
            steps: [
              { part: "a", reasoning: "Differential survival/reproduction of heritable variants.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Mutation and meiosis (independent assortment/crossing over).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two valid sources.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Variation in population.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Trait is heritable.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Differential survival/reproduction (selection pressure).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Natural: environment selects; selective breeding: humans select.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Breeding is faster/artificial, natural is slower/environmental.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) differential survival (b) mutation/meiosis (c) variation+heritability+pressure (d) env vs human",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u7-inheritance-evolution-notes",
      title: "Inheritance and evolution — revision notes",
      summary: "Genetic crosses, non-Mendelian patterns and natural selection.",
      sections: [
        {
          heading: "Inheritance",
          body: "Monohybrid Tt×Tt → 3:1 phenotype, 1:2:1 genotype. Dihybrid → 9:3:3:1. Test cross: dominant phenotype × aa reveals genotype. Codominance = both expressed (AB blood); incomplete dominance = intermediate (pink); X-linked recessive affects males more (single X).",
        },
        {
          heading: "Evolution",
          body: "Variation (mutation + meiosis) → natural selection → allele frequency change. Needs: variation, heritability, differential survival. Evidence: fossils, homologous structures, DNA similarity. Speciation via isolation; selective breeding = artificial selection.",
        },
        {
          heading: "Exam checklist",
          body: "For crosses state parent genotypes and gametes explicitly. For selection questions always link back to allele frequency change — that's the definition of evolution.",
        },
      ],
    },
  ],
};
