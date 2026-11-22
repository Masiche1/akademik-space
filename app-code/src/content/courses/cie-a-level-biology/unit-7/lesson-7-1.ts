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
              { id: "b", text: "9:3:3:1" },
              { id: "c", text: "1:2:1" },
              { id: "d", text: "1:1" },
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
        {
          id: "cial-b-u7-mh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the genotype ratio produced by a Tt × Tt cross?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9 : 3 : 3 : 1" },
              { id: "b", text: "1 TT : 2 Tt : 1 tt" },
              { id: "c", text: "3 : 1" },
              { id: "d", text: "1 : 1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Monohybrid ratio", statement: "Tt×Tt → 1:2:1 genotype." }],
            steps: [{ reasoning: "Genotype ratio is 1:2:1.", marks: 1, markCode: "A" }],
            finalAnswer: "1:2:1",
          },
        },
        {
          id: "cial-b-u7-mh-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gametes can be produced by an individual with genotype Tt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TT and tt" },
              { id: "b", text: "Tt only" },
              { id: "c", text: "T and t" },
              { id: "d", text: "T only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gametes", statement: "Gametes are haploid — one allele each." }],
            steps: [{ reasoning: "Tt produces both T and t gametes.", marks: 1, markCode: "A" }],
            finalAnswer: "T and t",
          },
        },
        {
          id: "cial-b-u7-mh-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A Tt × Tt cross produces 800 offspring. How many offspring are expected to show the recessive phenotype?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "offspring" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Monohybrid ratio", statement: "Tt×Tt → 1/4 recessive phenotype." }],
            steps: [
              { reasoning: "P(recessive phenotype) = 1/4.", marks: 1, markCode: "M" },
              { reasoning: "$800 \\times \\frac{1}{4} = 200$ offspring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 offspring",
          },
        },
        {
          id: "cial-b-u7-mh-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For an Aa × Aa cross, what is the probability that a randomly chosen offspring is heterozygous (Aa)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5 }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Monohybrid ratio", statement: "Aa×Aa → 1/2 heterozygous." }],
            steps: [{ reasoning: "P(Aa) = 2/4 = 1/2 = 0.5.", marks: 1, markCode: "A" }],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cial-b-u7-mh-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A plant showing the dominant phenotype is crossed with a homozygous recessive plant to determine its genotype. What is this procedure called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A reciprocal cross" },
              { id: "b", text: "A test cross" },
              { id: "c", text: "A back cross" },
              { id: "d", text: "A dihybrid cross" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Test cross", statement: "Dominant phenotype × homozygous recessive reveals genotype." }],
            steps: [{ reasoning: "This is a test cross.", marks: 1, markCode: "A" }],
            finalAnswer: "Test cross",
          },
        },
        {
          id: "cial-b-u7-mh-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which genotype is homozygous dominant for a trait controlled by allele T?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TT" },
              { id: "b", text: "T" },
              { id: "c", text: "tt" },
              { id: "d", text: "Tt" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Homozygous", statement: "Two identical alleles; dominant allele is capital T." }],
            steps: [{ reasoning: "TT is homozygous dominant.", marks: 1, markCode: "A" }],
            finalAnswer: "TT",
          },
        },
        {
          id: "cial-b-u7-mh-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the phenotype ratio for a Tt × Tt cross is 3:1 while the genotype ratio is 1:2:1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Dominance", statement: "Under complete dominance, TT and Tt have the same phenotype." }],
            steps: [
              { reasoning: "Both TT and Tt show the dominant phenotype.", marks: 1, markCode: "M" },
              { reasoning: "Only tt shows the recessive phenotype — 1 of 4 offspring.", marks: 1, markCode: "M" },
              { reasoning: "Three dominant phenotypes to one recessive → 3:1.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "TT and Tt share the dominant phenotype",
          },
        },
        {
          id: "cial-b-u7-mh-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the probability that two randomly chosen offspring from a Tt × Tt cross are BOTH homozygous dominant (TT)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0625 }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Independent events", statement: "Multiply probabilities of independent events." }],
            steps: [
              { reasoning: "P(TT) = 1/4 for each offspring independently.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16} = 0.0625$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.0625",
          },
        },
        {
          id: "cial-b-u7-mh-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which cross would produce offspring that are ALL heterozygous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TT × TT" },
              { id: "b", text: "Tt × Tt" },
              { id: "c", text: "TT × tt" },
              { id: "d", text: "tt × tt" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Monohybrid cross", statement: "TT×tt → all Tt." }],
            steps: [{ reasoning: "TT×tt gives only Tt offspring.", marks: 1, markCode: "A" }],
            finalAnswer: "TT × tt",
          },
        },
        {
          id: "cial-b-u7-mh-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a test cross, the unknown parent is heterozygous (Tt) and the other parent is tt. What fraction of the offspring show the recessive phenotype?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/4" },
              { id: "b", text: "1/4" },
              { id: "c", text: "0" },
              { id: "d", text: "1/2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Test cross", statement: "Tt × tt → 1/2 recessive." }],
            steps: [{ reasoning: "Half the offspring receive t from both parents.", marks: 1, markCode: "A" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cial-b-u7-mh-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A Tt × Tt cross produces 500 offspring. How many are expected to be homozygous (TT or tt)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 250, unit: "offspring" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Monohybrid ratio", statement: "TT + tt = 1/4 + 1/4 = 1/2 homozygous." }],
            steps: [
              { reasoning: "Homozygous fraction = $\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$500 \\times \\frac{1}{2} = 250$ offspring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "250 offspring",
          },
        },
        {
          id: "cial-b-u7-mh-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A dominant-phenotype plant is test-crossed with a homozygous recessive plant. Of 48 offspring, 24 show the recessive phenotype. Deduce the genotype of the unknown plant and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Test cross", statement: "Recessive offspring reveal hidden recessive allele." }],
            steps: [
              { reasoning: "Test cross with aa reveals the hidden allele.", marks: 1, markCode: "M" },
              { reasoning: "24 of 48 = 1/2 offspring recessive.", marks: 1, markCode: "M" },
              { reasoning: "A Tt parent gives 1:1 dominant:recessive; a TT parent would give none.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the unknown plant is heterozygous Tt.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Unknown plant is Tt (heterozygous)",
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
              { id: "a", text: "3:1" },
              { id: "b", text: "1:1:1:1" },
              { id: "c", text: "9:3:3:1" },
              { id: "d", text: "1:2:1" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-b-u7-dh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the phenotype ratio for a dihybrid cross AaBb × AaBb with complete dominance for both genes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1:2:1" },
              { id: "b", text: "1:1:1:1" },
              { id: "c", text: "9:3:3:1" },
              { id: "d", text: "3:1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Dihybrid ratio", statement: "Independent assortment → 9:3:3:1." }],
            steps: [{ reasoning: "Dihybrid cross gives 9:3:3:1.", marks: 1, markCode: "A" }],
            finalAnswer: "9:3:3:1",
          },
        },
        {
          id: "cial-b-u7-dh-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gametes can be produced by an individual with genotype AaBb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aa, Bb" },
              { id: "b", text: "AA, aa" },
              { id: "c", text: "AB only" },
              { id: "d", text: "AB, Ab, aB, ab" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gametes", statement: "Each gamete carries one allele per gene." }],
            steps: [{ reasoning: "Four gamete types from independent assortment.", marks: 1, markCode: "A" }],
            finalAnswer: "AB, Ab, aB, ab",
          },
        },
        {
          id: "cial-b-u7-dh-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "An AaBb × AaBb cross produces 1600 offspring. How many offspring are expected to show both dominant phenotypes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 900, unit: "offspring" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Dihybrid ratio", statement: "9/16 show both dominant phenotypes." }],
            steps: [
              { reasoning: "P(both dominant) = $\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "$1600 \\times \\frac{9}{16} = 900$ offspring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "900 offspring",
          },
        },
        {
          id: "cial-b-u7-dh-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What fraction of offspring from an AaBb × AaBb cross are homozygous recessive for both genes (aabb)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0625 }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Dihybrid ratio", statement: "aabb = 1/16." }],
            steps: [{ reasoning: "$\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16} = 0.0625$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.0625",
          },
        },
        {
          id: "cial-b-u7-dh-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person with blood group AB has both A and B antigens on their red blood cells. Which inheritance pattern does this demonstrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple alleles only" },
              { id: "b", text: "Incomplete dominance — intermediate phenotype" },
              { id: "c", text: "Sex linkage" },
              { id: "d", text: "Codominance — both alleles are expressed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Codominance", statement: "Both alleles expressed in heterozygote." }],
            steps: [{ reasoning: "Both antigens expressed = codominance.", marks: 1, markCode: "A" }],
            finalAnswer: "Codominance",
          },
        },
        {
          id: "cial-b-u7-dh-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A red-flowered plant crossed with a white-flowered plant produces only pink-flowered offspring. What pattern of inheritance is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Incomplete dominance" },
              { id: "b", text: "Sex linkage" },
              { id: "c", text: "Complete dominance" },
              { id: "d", text: "Codominance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Incomplete dominance", statement: "Heterozygote shows intermediate phenotype." }],
            steps: [{ reasoning: "Pink is intermediate between red and white.", marks: 1, markCode: "A" }],
            finalAnswer: "Incomplete dominance",
          },
        },
        {
          id: "cial-b-u7-dh-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how independent assortment of two genes produces the 9:3:3:1 phenotype ratio in a dihybrid cross.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Independent assortment", statement: "Each gene segregates independently → phenotypes multiply." }],
            steps: [
              { reasoning: "Each gene alone gives a 3:1 phenotype ratio.", marks: 1, markCode: "M" },
              { reasoning: "Combined probability of both dominant = $\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "Recessive for one gene = 3/16 each; both recessive = 1/16 → 9:3:3:1.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Independent 3:1 ratios multiply to 9:3:3:1",
          },
        },
        {
          id: "cial-b-u7-dh-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a test cross AaBb × aabb, what fraction of the offspring are expected to show both dominant phenotypes?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.25 }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Test cross", statement: "AaBb gives 4 gamete types; aabb gives only ab." }],
            steps: [
              { reasoning: "Only the AB gamete from AaBb gives both dominant phenotypes.", marks: 1, markCode: "M" },
              { reasoning: "P = 1/4 = 0.25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.25",
          },
        },
        {
          id: "cial-b-u7-dh-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A colour-blind man (X$^c$Y) marries a woman who is a carrier for colour blindness (X$^CX^c$). What proportion of their DAUGHTERS will be colour blind?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "1/2" },
              { id: "c", text: "All of them" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "X-linkage", statement: "Father gives X$^c$ to all daughters; mother gives X$^C$ or X$^c$." }],
            steps: [{ reasoning: "Half of daughters get X$^c$ from both parents → affected.", marks: 1, markCode: "A" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cial-b-u7-dh-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which genotype gives blood group O in the ABO system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I$^A$I$^A$" },
              { id: "b", text: "I$^A$I$^B$" },
              { id: "c", text: "I$^O$I$^O$" },
              { id: "d", text: "I$^A$I$^O$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "ABO blood groups", statement: "I$^O$ is recessive to I$^A$ and I$^B$." }],
            steps: [{ reasoning: "Group O requires two recessive I$^O$ alleles.", marks: 1, markCode: "A" }],
            finalAnswer: "I$^O$I$^O$",
          },
        },
        {
          id: "cial-b-u7-dh-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An AaBb × AaBb cross produces 400 offspring. How many offspring are expected to show the recessive phenotype for gene A but the dominant phenotype for gene B?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "offspring" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Dihybrid ratio", statement: "Recessive A + dominant B = 3/16." }],
            steps: [
              { reasoning: "P = $\\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "$400 \\times \\frac{3}{16} = 75$ offspring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75 offspring",
          },
        },
        {
          id: "cial-b-u7-dh-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A woman is a carrier for X-linked colour blindness (X$^CX^c$) and her partner has normal vision (X$^CY$). Explain the expected genotypes and phenotypes of their children with respect to colour blindness.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "X-linkage", statement: "Daughters get father's only X; sons get Y from father." }],
            steps: [
              { reasoning: "Father passes X$^C$ to all daughters and Y to all sons.", marks: 1, markCode: "M" },
              { reasoning: "Daughters: X$^CX^C$ or X$^CX^c$ — carriers or normal, none colour blind.", marks: 1, markCode: "M" },
              { reasoning: "Sons get Y from father and X$^C$ or X$^c$ from mother.", marks: 1, markCode: "M" },
              { reasoning: "Half of sons are X$^c$Y — colour blind.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No daughters affected; half of sons affected",
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
              { id: "a", text: "Random changes in DNA" },
              { id: "b", text: "Individuals with favourable traits survive and reproduce more" },
              { id: "c", text: "The strongest organism always wins" },
              { id: "d", text: "Humans choosing traits" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-b-u7-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which two processes are the main sources of genetic variation in a population?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mutation and meiosis" },
              { id: "b", text: "Extinction and speciation" },
              { id: "c", text: "Fertilisation and growth" },
              { id: "d", text: "Natural selection and genetic drift" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Variation", statement: "Mutation creates new alleles; meiosis shuffles them." }],
            steps: [{ reasoning: "Mutation and meiosis generate variation.", marks: 1, markCode: "A" }],
            finalAnswer: "Mutation and meiosis",
          },
        },
        {
          id: "cial-b-u7-ev-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a condition required for natural selection to occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heritable traits" },
              { id: "b", text: "A very large population size" },
              { id: "c", text: "Variation in a population" },
              { id: "d", text: "Differential survival and reproduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Natural selection", statement: "Needs variation, heritability and differential survival — not large size." }],
            steps: [{ reasoning: "Large population size is not required; selection works in small populations too.", marks: 1, markCode: "A" }],
            finalAnswer: "Large population size",
          },
        },
        {
          id: "cial-b-u7-ev-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A diploid population contains 4000 gene copies at a locus, of which 1200 are allele A. What is the frequency of allele A in the gene pool?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency", statement: "Frequency = copies of allele / total gene copies." }],
            steps: [
              { reasoning: "$\\frac{1200}{4000}$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.3",
          },
        },
        {
          id: "cial-b-u7-ev-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a population, the frequency of the recessive allele a is 0.2. What is the frequency of the dominant allele A?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency", statement: "Allele frequencies sum to 1." }],
            steps: [{ reasoning: "$p = 1 - q = 1 - 0.2 = 0.8$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.8",
          },
        },
        {
          id: "cial-b-u7-ev-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The forelimbs of a bat, a whale and a human have similar bone structure but very different functions. These structures are evidence of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artificial selection" },
              { id: "b", text: "Lamarckian inheritance" },
              { id: "c", text: "Common ancestry (homologous structures)" },
              { id: "d", text: "Convergent evolution only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Evidence for evolution", statement: "Homologous structures indicate shared ancestry." }],
            steps: [{ reasoning: "Same origin, different function = homologous → common ancestor.", marks: 1, markCode: "A" }],
            finalAnswer: "Common ancestry",
          },
        },
        {
          id: "cial-b-u7-ev-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The increase in frequency of dark-coloured peppered moths in industrialised areas is a classic example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lamarckian evolution" },
              { id: "b", text: "Genetic drift" },
              { id: "c", text: "Artificial selection" },
              { id: "d", text: "Natural selection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Observed selection", statement: "Peppered moth shows directional selection." }],
            steps: [{ reasoning: "Dark moths survived better on soot-darkened trees.", marks: 1, markCode: "A" }],
            finalAnswer: "Natural selection",
          },
        },
        {
          id: "cial-b-u7-ev-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between natural selection and genetic drift as mechanisms of evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Evolutionary mechanisms", statement: "Selection is adaptive; drift is random." }],
            steps: [
              { reasoning: "Natural selection is non-random — favours alleles giving survival/reproduction advantage.", marks: 1, markCode: "M" },
              { reasoning: "Genetic drift is random change in allele frequency, strongest in small populations.", marks: 1, markCode: "M" },
              { reasoning: "Selection is directional/adaptive; drift can reduce diversity without benefit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Selection adaptive vs drift random",
          },
        },
        {
          id: "cial-b-u7-ev-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The frequency of an allele increases from 0.30 to 0.45 over 10 generations. What is the absolute change in allele frequency?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.15 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency change", statement: "Change = final − initial frequency." }],
            steps: [
              { reasoning: "$0.45 - 0.30$.", marks: 1, markCode: "M" },
              { reasoning: "= 0.15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.15",
          },
        },
        {
          id: "cial-b-u7-ev-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is an example of artificial selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humans breeding crop plants for higher yield" },
              { id: "b", text: "Peppered moths changing colour" },
              { id: "c", text: "Bacteria evolving antibiotic resistance" },
              { id: "d", text: "Galápagos finches adapting their beaks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Artificial selection", statement: "Humans choose parents for desired traits." }],
            steps: [{ reasoning: "Crop breeding is human-directed selection.", marks: 1, markCode: "A" }],
            finalAnswer: "Crop breeding for yield",
          },
        },
        {
          id: "cial-b-u7-ev-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Speciation is most likely to occur when populations become...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More mobile" },
              { id: "b", text: "Identical genetically" },
              { id: "c", text: "Larger in size" },
              { id: "d", text: "Reproductively isolated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Speciation", statement: "Reproductive isolation prevents gene flow." }],
            steps: [{ reasoning: "Isolation stops gene flow → divergence → new species.", marks: 1, markCode: "A" }],
            finalAnswer: "Reproductively isolated",
          },
        },
        {
          id: "cial-b-u7-ev-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two populations merge into one. Population 1 (300 individuals) has allele A frequency 0.6; population 2 (100 individuals) has frequency 0.2. What is the combined allele frequency of A?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Allele frequency", statement: "Combined frequency = weighted mean by population size." }],
            steps: [
              { reasoning: "$\\frac{(0.6 \\times 300) + (0.2 \\times 100)}{400} = \\frac{180 + 20}{400}$.", marks: 1, markCode: "M" },
              { reasoning: "= $\\frac{200}{400} = 0.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.5",
          },
        },
        {
          id: "cial-b-u7-ev-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how geographic isolation can lead to speciation, referring to allele frequencies and gene flow.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Speciation", statement: "Barrier → no gene flow → divergence → reproductive isolation." }],
            steps: [
              { reasoning: "A physical barrier splits the population — gene flow between groups stops.", marks: 1, markCode: "M" },
              { reasoning: "Different selection pressures and genetic drift change allele frequencies differently in each group.", marks: 1, markCode: "M" },
              { reasoning: "Over generations the populations become genetically distinct.", marks: 1, markCode: "M" },
              { reasoning: "Eventually they can no longer interbreed successfully → separate species.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Isolation → divergence → reproductive isolation → speciation",
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
