import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cipub-u3-lesson-3-4",
  code: "3-4",
  title: "Genetics and inheritance",
  goal: "I CAN explain inheritance patterns, genetic crosses, and gene interactions.",
  standards: [
    "Cambridge Pre-U Biology 9769",
    "Paper 1: Genetics and inheritance",
  ],
  vocabulary: [
    {
      term: "Allele",
      definition: "Alternative form of a gene.",
    },
    {
      term: "Genotype",
      definition: "Genetic makeup — combination of alleles.",
    },
    {
      term: "Phenotype",
      definition: "Observable characteristics.",
    },
    {
      term: "Homozygous",
      definition: "Two identical alleles (AA or aa).",
    },
    {
      term: "Heterozygous",
      definition: "Two different alleles (Aa).",
    },
    {
      term: "Dominant",
      definition: "Allele expressed in heterozygote.",
    },
    {
      term: "Recessive",
      definition: "Allele only expressed in homozygote.",
    },
    {
      term: "Monohybrid cross",
      definition: "Cross involving one gene.",
    },
    {
      term: "Dihybrid cross",
      definition: "Cross involving two genes.",
    },
    {
      term: "Punnett square",
      definition: "Grid predicting offspring genotypes.",
    },
    {
      term: "Carrier",
      definition: "Heterozygote for recessive allele.",
    },
    {
      term: "Sex-linked",
      definition: "Gene on sex chromosome (X or Y).",
    },
  ],
  concepts: [
    {
      id: "cipub-u3-inherit",
      title: "Mendelian inheritance",
      skill:
        "Explain monohybrid and dihybrid crosses, dominance, and Punnett squares.",
      lesson: {
        sections: [
          {
            heading: "Basic genetics",
            body: "**Allele**: alternative form of gene. **Genotype**: genetic makeup (AA, Aa, aa). **Phenotype**: observable trait. **Homozygous**: identical alleles; **heterozygous**: different alleles. **Dominant**: expressed in heterozygote; **recessive**: only in homozygote. **Carrier**: heterozygote for recessive — doesn't show trait but can pass on.",
          },
          {
            heading: "Monohybrid cross",
            body: "Cross involving one gene. **Example**: Aa × Aa → 1 AA : 2 Aa : 1 aa (genotypic ratio 1:2:1). Phenotypic ratio 3:1 if A dominant. **Punnett square**: grid showing possible offspring genotypes. **Test cross**: unknown genotype crossed with homozygous recessive to determine genotype.",
          },
          {
            heading: "Dihybrid cross",
            body: "Cross involving two genes. **Example**: AaBb × AaBb → 9:3:3:1 phenotypic ratio (if both dominant). Independent assortment — genes on different chromosomes assort independently. **Linked genes**: on same chromosome — don't assort independently, closer together = less likely to recombine.",
          },
        ],
        keyFormulas: [
          {
            name: "Monohybrid ratio",
            statement: "Genotypic 1:2:1 · Phenotypic 3:1",
          },
          {
            name: "Dihybrid ratio",
            statement: "Phenotypic 9:3:3:1",
          },
          {
            name: "Punnett square",
            statement: "Predicts offspring genotypes",
          },
          {
            name: "Carrier",
            statement: "Heterozygote for recessive allele",
          },
        ],
        workedExample: {
          problem: "Aa × Aa — what's the phenotypic ratio?",
          solution:
            "1 AA : 2 Aa : 1 aa genotypically. Phenotypically 3 dominant : 1 recessive = 3:1.",
        },
      },
      questions: [
        {
          id: "cipub-u3-inh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An allele is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alternative form of a gene" },
              { id: "b", text: "A chromosome" },
              { id: "c", text: "A protein" },
              { id: "d", text: "A trait" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allele",
                statement: "Alternative gene form.",
              },
            ],
            steps: [
              { reasoning: "Allele = gene variant.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Alternative form of gene.",
          },
        },
        {
          id: "cipub-u3-inh-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Genotype refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Genetic makeup" },
              { id: "b", text: "Observable traits" },
              { id: "c", text: "Physical appearance" },
              { id: "d", text: "Environment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genotype",
                statement: "Genetic makeup.",
              },
            ],
            steps: [
              {
                reasoning: "Genotype = genetic makeup.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Genetic makeup.",
          },
        },
        {
          id: "cipub-u3-inh-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Phenotype refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Observable characteristics" },
              { id: "b", text: "Genetic makeup" },
              { id: "c", text: "Alleles" },
              { id: "d", text: "Genes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phenotype",
                statement: "Observable traits.",
              },
            ],
            steps: [
              { reasoning: "Phenotype = observable.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Observable characteristics.",
          },
        },
        {
          id: "cipub-u3-inh-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homozygous means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two identical alleles" },
              { id: "b", text: "Two different alleles" },
              { id: "c", text: "One allele" },
              { id: "d", text: "No alleles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homozygous",
                statement: "Identical alleles.",
              },
            ],
            steps: [
              { reasoning: "Homozygous = identical.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Two identical alleles.",
          },
        },
        {
          id: "cipub-u3-inh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heterozygous means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two different alleles" },
              { id: "b", text: "Two identical alleles" },
              { id: "c", text: "One allele" },
              { id: "d", text: "No alleles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Heterozygous",
                statement: "Different alleles.",
              },
            ],
            steps: [
              {
                reasoning: "Heterozygous = different.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Two different alleles.",
          },
        },
        {
          id: "cipub-u3-inh-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dominant allele is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expressed in heterozygote" },
              { id: "b", text: "Only in homozygote" },
              { id: "c", text: "Never expressed" },
              { id: "d", text: "Recessive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant",
                statement: "Expressed in heterozygote.",
              },
            ],
            steps: [
              { reasoning: "Dominant = expressed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Expressed in heterozygote.",
          },
        },
        {
          id: "cipub-u3-inh-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recessive allele is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only expressed in homozygote" },
              { id: "b", text: "Always expressed" },
              { id: "c", text: "Dominant" },
              { id: "d", text: "Never expressed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recessive",
                statement: "Only in homozygote.",
              },
            ],
            steps: [
              {
                reasoning: "Recessive = homozygote only.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Only in homozygote.",
          },
        },
        {
          id: "cipub-u3-inh-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monohybrid cross involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One gene" },
              { id: "b", text: "Two genes" },
              { id: "c", text: "Three genes" },
              { id: "d", text: "All genes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monohybrid",
                statement: "One gene.",
              },
            ],
            steps: [
              { reasoning: "Monohybrid = 1 gene.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) One gene.",
          },
        },
        {
          id: "cipub-u3-inh-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dihybrid cross involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two genes" },
              { id: "b", text: "One gene" },
              { id: "c", text: "Three genes" },
              { id: "d", text: "No genes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dihybrid", statement: "Two genes." },
            ],
            steps: [
              { reasoning: "Dihybrid = 2 genes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Two genes.",
          },
        },
        {
          id: "cipub-u3-inh-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A Punnett square is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Predict offspring genotypes" },
              { id: "b", text: "Count chromosomes" },
              { id: "c", text: "Measure traits" },
              { id: "d", text: "Identify alleles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Punnett square",
                statement: "Predicts genotypes.",
              },
            ],
            steps: [
              { reasoning: "Punnett = predict.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Predict offspring genotypes.",
          },
        },
        {
          id: "cipub-u3-inh-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A carrier is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heterozygote for recessive allele" },
              { id: "b", text: "Homozygous dominant" },
              { id: "c", text: "Homozygous recessive" },
              { id: "d", text: "No allele" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrier",
                statement: "Heterozygote for recessive.",
              },
            ],
            steps: [
              { reasoning: "Carrier = heterozygous.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Heterozygote for recessive.",
          },
        },
        {
          id: "cipub-u3-inh-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Aa × Aa, the genotypic ratio is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1:2:1" },
              { id: "b", text: "3:1" },
              { id: "c", text: "1:1" },
              { id: "d", text: "9:3:3:1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monohybrid ratio",
                statement: "1:2:1 genotypic.",
              },
            ],
            steps: [{ reasoning: "Aa×Aa = 1:2:1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 1:2:1.",
          },
        },
        {
          id: "cipub-u3-inh-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Aa × Aa (A dominant), phenotypic ratio is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3:1" },
              { id: "b", text: "1:2:1" },
              { id: "c", text: "1:1" },
              { id: "d", text: "9:3:3:1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phenotypic ratio",
                statement: "3:1 dominant.",
              },
            ],
            steps: [{ reasoning: "Aa×Aa = 3:1.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 3:1.",
          },
        },
        {
          id: "cipub-u3-inh-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Independent assortment means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Genes on different chromosomes assort independently",
              },
              { id: "b", text: "Genes always together" },
              { id: "c", text: "No variation" },
              { id: "d", text: "Always dominant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independent assortment",
                statement: "Genes assort independently.",
              },
            ],
            steps: [
              {
                reasoning: "Independent = separate assortment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Genes assort independently.",
          },
        },
        {
          id: "cipub-u3-inh-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Linked genes are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On same chromosome" },
              { id: "b", text: "On different chromosomes" },
              { id: "c", text: "Always dominant" },
              { id: "d", text: "Always recessive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linked genes",
                statement: "Same chromosome.",
              },
            ],
            steps: [
              {
                reasoning: "Linked = same chromosome.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) On same chromosome.",
          },
        },
        {
          id: "cipub-u3-inh-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sex-linked genes are on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sex chromosomes (X or Y)" },
              { id: "b", text: "Autosomes" },
              { id: "c", text: "All chromosomes" },
              { id: "d", text: "No chromosomes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sex-linked",
                statement: "On sex chromosomes.",
              },
            ],
            steps: [
              { reasoning: "Sex-linked = X/Y.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Sex chromosomes.",
          },
        },
        {
          id: "cipub-u3-inh-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "A test cross is used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Determine unknown genotype" },
              { id: "b", text: "Count chromosomes" },
              { id: "c", text: "Measure traits" },
              { id: "d", text: "Identify alleles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Test cross",
                statement: "Determines genotype.",
              },
            ],
            steps: [
              {
                reasoning: "Test cross = determine genotype.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Determine genotype.",
          },
        },
        {
          id: "cipub-u3-inh-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a dihybrid cross AaBb × AaBb, phenotypic ratio is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9:3:3:1" },
              { id: "b", text: "3:1" },
              { id: "c", text: "1:2:1" },
              { id: "d", text: "1:1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dihybrid ratio",
                statement: "9:3:3:1.",
              },
            ],
            steps: [
              { reasoning: "Dihybrid = 9:3:3:1.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 9:3:3:1.",
          },
        },
        {
          id: "cipub-u3-inh-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Incomplete dominance means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heterozygote shows intermediate phenotype" },
              { id: "b", text: "Dominant always wins" },
              { id: "c", text: "No phenotype" },
              { id: "d", text: "Both alleles expressed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete dominance",
                statement: "Intermediate phenotype.",
              },
            ],
            steps: [
              {
                reasoning: "Incomplete = intermediate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Intermediate phenotype.",
          },
        },
        {
          id: "cipub-u3-inh-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between genotype and phenotype.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genotype vs phenotype",
                statement: "Genetic vs observable.",
              },
            ],
            steps: [
              {
                reasoning: "Genotype = genetic makeup (alleles).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phenotype = observable traits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Genotype = alleles; phenotype = observable.",
          },
        },
        {
          id: "cipub-u3-inh-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors affecting phenotype besides genotype.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phenotype factors",
                statement: "Environment + other genes.",
              },
            ],
            steps: [
              {
                reasoning: "Environmental factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other genes (epistasis).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Environment + other genes.",
          },
        },
        {
          id: "cipub-u3-inh-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a Punnett square predicts offspring genotypes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Punnett square",
                statement: "Combines parental alleles.",
              },
            ],
            steps: [
              {
                reasoning: "Parental alleles placed on axes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each box shows possible offspring genotype.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ratios calculated from box frequencies.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Axes + boxes + ratios.",
          },
        },
        {
          id: "cipub-u3-inh-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two heterozygous parents (Aa × Aa) have a child. What's the probability of homozygous recessive child?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Probability calculation",
                statement: "Punnett square analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Aa × Aa → 1 AA : 2 Aa : 1 aa.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "aa = 1 out of 4 boxes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Probability = 1/4 = 25%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "25% chance of homozygous recessive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25% (1/4).",
          },
        },
        {
          id: "cipub-u3-inh-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Codominance means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both alleles fully expressed" },
              { id: "b", text: "One allele dominates" },
              { id: "c", text: "Intermediate phenotype" },
              { id: "d", text: "No expression" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Codominance",
                statement: "Both alleles expressed.",
              },
            ],
            steps: [
              {
                reasoning: "Codominance = both expressed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Both alleles expressed.",
          },
        },
        {
          id: "cipub-u3-inh-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a carrier in genetics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrier",
                statement: "Heterozygote for recessive.",
              },
            ],
            steps: [
              {
                reasoning: "Heterozygote carrying recessive allele.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Doesn't show trait but can pass on.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Heterozygote for recessive — doesn't show trait.",
          },
        },
        {
          id: "cipub-u3-inh-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how sex-linked inheritance differs from autosomal inheritance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sex-linked vs autosomal",
                statement: "Sex chromosomes vs autosomes.",
              },
            ],
            steps: [
              {
                reasoning: "Sex-linked: on X or Y chromosome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Autosomal: on non-sex chromosomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sex-linked shows different patterns in males/females.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sex-linked = sex chromosomes, different male/female patterns.",
          },
        },
        {
          id: "cipub-u3-inh-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Autosomes are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-sex chromosomes" },
              { id: "b", text: "Sex chromosomes" },
              { id: "c", text: "All chromosomes" },
              { id: "d", text: "Gametes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Autosome",
                statement: "Non-sex chromosome.",
              },
            ],
            steps: [
              { reasoning: "Autosome = non-sex.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Non-sex chromosomes.",
          },
        },
        {
          id: "cipub-u3-inh-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are males more likely to show X-linked recessive traits?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "X-linked recessive males",
                statement: "One X = hemizygous.",
              },
            ],
            steps: [
              {
                reasoning: "Males have one X — only one allele needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Females need two recessive alleles — less likely.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Males hemizygous — one allele expresses trait.",
          },
        },
        {
          id: "cipub-u3-inh-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A woman is a carrier for haemophilia (X-linked recessive). Her partner is unaffected. What's the probability of an affected son?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sex-linked probability",
                statement: "X-linked cross analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Mother: X^H X^h; father: X^H Y.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sons get Y from father, X from mother — 50% X^h.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affected son = X^h Y — 50% of sons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "50% of sons affected (25% of all offspring).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50% of sons (25% of all offspring).",
          },
        },
        {
          id: "cipub-u3-inh-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is epistasis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Epistasis",
                statement: "One gene masks another.",
              },
            ],
            steps: [
              {
                reasoning: "One gene's expression masks another gene.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alters expected phenotypic ratios.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "One gene masks another — alters ratios.",
          },
        },
      ],
    },
    {
      id: "cipub-u3-geneint",
      title: "Gene interactions and mutations",
      skill: "Explain gene interactions, mutations, and their consequences.",
      lesson: {
        sections: [
          {
            heading: "Gene interactions",
            body: "**Epistasis**: one gene masks another — e.g., coat colour in mice. **Polygenic inheritance**: multiple genes control one trait — e.g., height, skin colour — produces continuous variation. **Pleiotropy**: one gene affects multiple traits — e.g., PKU affects multiple systems. **Codominance**: both alleles expressed — e.g., ABO blood groups.",
          },
          {
            heading: "Types of mutations",
            body: "**Point mutations**: single base change — silent, missense, nonsense. **Frameshift**: insertion/deletion — shifts reading frame. **Chromosomal mutations**: deletions, duplications, translocations, inversions. **Gene mutations**: affect single gene. **Chromosomal mutations**: affect large DNA segments.",
          },
          {
            heading: "Mutation consequences",
            body: "Mutations can be: **beneficial** (rare — e.g., antibiotic resistance), **neutral** (no effect — silent mutations), **harmful** (disease — cystic fibrosis, sickle cell). **Germline mutations**: inherited — passed to offspring. **Somatic mutations**: body cells only — not inherited. Mutations drive evolution — raw material for natural selection.",
          },
        ],
        keyFormulas: [
          {
            name: "Epistasis",
            statement: "One gene masks another",
          },
          {
            name: "Polygenic",
            statement: "Multiple genes → one trait",
          },
          {
            name: "Pleiotropy",
            statement: "One gene → multiple traits",
          },
          {
            name: "Mutation types",
            statement: "Point · frameshift · chromosomal",
          },
        ],
        workedExample: {
          problem:
            "What's the difference between a silent and missense mutation?",
          solution:
            "Silent: no amino acid change. Missense: changes one amino acid.",
        },
      },
      questions: [
        {
          id: "cipub-u3-gint-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Epistasis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One gene masks another" },
              { id: "b", text: "Multiple genes one trait" },
              { id: "c", text: "One gene multiple traits" },
              { id: "d", text: "No gene interaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Epistasis",
                statement: "One gene masks another.",
              },
            ],
            steps: [
              { reasoning: "Epistasis = masking.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) One gene masks another.",
          },
        },
        {
          id: "cipub-u3-gint-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Polygenic inheritance means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple genes control one trait" },
              { id: "b", text: "One gene multiple traits" },
              { id: "c", text: "One gene masks another" },
              { id: "d", text: "No genes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polygenic",
                statement: "Multiple genes → one trait.",
              },
            ],
            steps: [
              { reasoning: "Polygenic = many genes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Multiple genes → one trait.",
          },
        },
        {
          id: "cipub-u3-gint-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pleiotropy means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One gene affects multiple traits" },
              { id: "b", text: "Multiple genes one trait" },
              { id: "c", text: "One gene masks another" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pleiotropy",
                statement: "One gene → multiple traits.",
              },
            ],
            steps: [
              {
                reasoning: "Pleiotropy = one gene many traits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) One gene → multiple traits.",
          },
        },
        {
          id: "cipub-u3-gint-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A point mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single base change" },
              { id: "b", text: "Large deletion" },
              { id: "c", text: "Chromosome loss" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Point mutation",
                statement: "Single base change.",
              },
            ],
            steps: [
              { reasoning: "Point = single base.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Single base change.",
          },
        },
        {
          id: "cipub-u3-gint-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A frameshift mutation is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insertion or deletion of bases" },
              { id: "b", text: "Substitution" },
              { id: "c", text: "No change" },
              { id: "d", text: "Silent change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frameshift",
                statement: "Insertion/deletion.",
              },
            ],
            steps: [
              { reasoning: "Frameshift = indel.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Insertion/deletion.",
          },
        },
        {
          id: "cipub-u3-gint-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A germline mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inherited — in gametes" },
              { id: "b", text: "Body cells only" },
              { id: "c", text: "Not inherited" },
              { id: "d", text: "Temporary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Germline mutation",
                statement: "Inherited via gametes.",
              },
            ],
            steps: [
              { reasoning: "Germline = inherited.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Inherited — in gametes.",
          },
        },
        {
          id: "cipub-u3-gint-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A somatic mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Body cells only — not inherited" },
              { id: "b", text: "Inherited" },
              { id: "c", text: "In gametes" },
              { id: "d", text: "Permanent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Somatic mutation",
                statement: "Body cells only.",
              },
            ],
            steps: [
              { reasoning: "Somatic = body cells.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Body cells only.",
          },
        },
        {
          id: "cipub-u3-gint-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Height is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polygenic trait" },
              { id: "b", text: "Single gene" },
              { id: "c", text: "Sex-linked" },
              { id: "d", text: "Mutation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polygenic example",
                statement: "Height.",
              },
            ],
            steps: [
              { reasoning: "Height = polygenic.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Polygenic trait.",
          },
        },
        {
          id: "cipub-u3-gint-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "PKU is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pleiotropy" },
              { id: "b", text: "Polygenic" },
              { id: "c", text: "Epistasis" },
              { id: "d", text: "Codominance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PKU",
                statement: "Pleiotropic disorder.",
              },
            ],
            steps: [
              { reasoning: "PKU = pleiotropy.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Pleiotropy.",
          },
        },
        {
          id: "cipub-u3-gint-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "ABO blood groups show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Codominance and multiple alleles" },
              { id: "b", text: "Simple dominance" },
              { id: "c", text: "Polygenic" },
              { id: "d", text: "Pleiotropy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ABO blood",
                statement: "Codominance + multiple alleles.",
              },
            ],
            steps: [
              { reasoning: "ABO = codominance.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Codominance and multiple alleles.",
          },
        },
        {
          id: "cipub-u3-gint-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A chromosomal mutation affects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large DNA segments" },
              { id: "b", text: "Single gene only" },
              { id: "c", text: "No DNA" },
              { id: "d", text: "Proteins only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chromosomal mutation",
                statement: "Large DNA segments.",
              },
            ],
            steps: [
              {
                reasoning: "Chromosomal = large segments.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Large DNA segments.",
          },
        },
        {
          id: "cipub-u3-gint-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A gene mutation affects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single gene" },
              { id: "b", text: "Whole chromosome" },
              { id: "c", text: "All DNA" },
              { id: "d", text: "No DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gene mutation",
                statement: "Single gene.",
              },
            ],
            steps: [
              {
                reasoning: "Gene mutation = single gene.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Single gene.",
          },
        },
        {
          id: "cipub-u3-gint-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A deletion mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loss of DNA segment" },
              { id: "b", text: "Addition of DNA" },
              { id: "c", text: "No change" },
              { id: "d", text: "Substitution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deletion",
                statement: "Loss of DNA.",
              },
            ],
            steps: [{ reasoning: "Deletion = loss.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Loss of DNA segment.",
          },
        },
        {
          id: "cipub-u3-gint-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A duplication mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extra copy of DNA segment" },
              { id: "b", text: "Loss of DNA" },
              { id: "c", text: "No change" },
              { id: "d", text: "Substitution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Duplication",
                statement: "Extra DNA copy.",
              },
            ],
            steps: [
              {
                reasoning: "Duplication = extra copy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Extra copy of DNA.",
          },
        },
        {
          id: "cipub-u3-gint-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A translocation mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA segment moves to different chromosome" },
              { id: "b", text: "DNA lost" },
              { id: "c", text: "DNA duplicated" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Translocation",
                statement: "DNA moves chromosomes.",
              },
            ],
            steps: [
              { reasoning: "Translocation = moves.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) DNA moves to different chromosome.",
          },
        },
        {
          id: "cipub-u3-gint-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "An inversion mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA segment reversed within chromosome" },
              { id: "b", text: "DNA lost" },
              { id: "c", text: "DNA duplicated" },
              { id: "d", text: "DNA moved" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inversion",
                statement: "Segment reversed.",
              },
            ],
            steps: [
              { reasoning: "Inversion = reversed.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Segment reversed.",
          },
        },
        {
          id: "cipub-u3-gint-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "A beneficial mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases survival/reproduction" },
              { id: "b", text: "Decreases survival" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Lethal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Beneficial mutation",
                statement: "Increases fitness.",
              },
            ],
            steps: [
              {
                reasoning: "Beneficial = increases fitness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Increases survival/reproduction.",
          },
        },
        {
          id: "cipub-u3-gint-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A neutral mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No effect on phenotype" },
              { id: "b", text: "Beneficial" },
              { id: "c", text: "Harmful" },
              { id: "d", text: "Lethal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neutral mutation",
                statement: "No phenotype effect.",
              },
            ],
            steps: [
              { reasoning: "Neutral = no effect.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) No effect on phenotype.",
          },
        },
        {
          id: "cipub-u3-gint-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A harmful mutation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreases survival/reproduction" },
              { id: "b", text: "Increases survival" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Beneficial" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Harmful mutation",
                statement: "Decreases fitness.",
              },
            ],
            steps: [
              {
                reasoning: "Harmful = decreases fitness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Decreases survival/reproduction.",
          },
        },
        {
          id: "cipub-u3-gint-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between gene mutation and chromosomal mutation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gene vs chromosomal",
                statement: "Single gene vs large segments.",
              },
            ],
            steps: [
              {
                reasoning: "Gene mutation: affects single gene.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Chromosomal: affects large DNA segments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gene = single; chromosomal = large segments.",
          },
        },
        {
          id: "cipub-u3-gint-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two examples of polygenic traits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polygenic examples",
                statement: "Height, skin colour.",
              },
            ],
            steps: [
              {
                reasoning: "Height.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Skin colour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Height, skin colour.",
          },
        },
        {
          id: "cipub-u3-gint-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how mutations provide raw material for evolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutation and evolution",
                statement: "Source of variation.",
              },
            ],
            steps: [
              {
                reasoning: "Mutations create new alleles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New alleles = genetic variation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Natural selection acts on variation → evolution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mutations → variation → selection → evolution.",
          },
        },
        {
          id: "cipub-u3-gint-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A point mutation changes codon from GAA to GAG. Explain why this might be silent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Silent mutation analysis",
                statement: "Degenerate code.",
              },
            ],
            steps: [
              {
                reasoning: "GAA and GAG both code for glutamic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same amino acid = same protein.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No phenotypic change — silent mutation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Degenerate code allows silent mutations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same amino acid — silent mutation.",
          },
        },
        {
          id: "cipub-u3-gint-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sickle cell anaemia is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Point mutation in haemoglobin gene" },
              { id: "b", text: "Chromosomal deletion" },
              { id: "c", text: "No mutation" },
              { id: "d", text: "Environmental factor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sickle cell",
                statement: "Point mutation.",
              },
            ],
            steps: [
              {
                reasoning: "Sickle cell = point mutation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Point mutation.",
          },
        },
        {
          id: "cipub-u3-gint-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a frameshift mutation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frameshift",
                statement: "Shifts reading frame.",
              },
            ],
            steps: [
              {
                reasoning: "Insertion/deletion not multiple of 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Changes all downstream codons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shifts reading frame — changes all downstream codons.",
          },
        },
        {
          id: "cipub-u3-gint-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why most mutations are harmful or neutral.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutation effects",
                statement: "Most disrupt function.",
              },
            ],
            steps: [
              {
                reasoning: "Genetic code is finely tuned — changes disrupt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Silent mutations are neutral — no amino acid change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Beneficial mutations are rare.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Most disrupt function — beneficial rare.",
          },
        },
        {
          id: "cipub-u3-gint-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cystic fibrosis is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deletion mutation" },
              { id: "b", text: "Point mutation" },
              { id: "c", text: "No mutation" },
              { id: "d", text: "Environmental" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cystic fibrosis",
                statement: "Deletion mutation.",
              },
            ],
            steps: [{ reasoning: "CF = deletion.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Deletion mutation.",
          },
        },
        {
          id: "cipub-u3-gint-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between germline and somatic mutations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germline vs somatic",
                statement: "Inherited vs body cells.",
              },
            ],
            steps: [
              {
                reasoning: "Germline: in gametes — inherited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Somatic: body cells — not inherited.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Germline = inherited; somatic = body cells.",
          },
        },
        {
          id: "cipub-u3-gint-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how epistasis alters expected phenotypic ratios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Epistasis ratios",
                statement: "Masking changes ratios.",
              },
            ],
            steps: [
              {
                reasoning: "One gene masks another's expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Masked genotypes show same phenotype.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alters expected 9:3:3:1 ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., 9:3:4 or 9:7 ratios possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Masking changes expected ratios.",
          },
        },
        {
          id: "cipub-u3-gint-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a multiple allele system?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiple alleles",
                statement: "More than two alleles.",
              },
            ],
            steps: [
              {
                reasoning: "Gene has more than two alleles in population.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Individual still has only two alleles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "More than two alleles per gene.",
          },
        },
      ],
    },
  ],
};
