import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ediasbio-u6-lesson-6-1",
  code: "6-1",
  title: "Inheritance and Genetics",
  goal: "I CAN describe chromosomes, genes and monohybrid inheritance including sex determination and mutations.",
  standards: ["WBI15 Coordination and heredity", "Inheritance"],
  
  vocabulary: [
    { term: "Chromosome", definition: "Thread-like structure of DNA and protein carrying genes; humans have 46 (23 pairs)." },
    { term: "Gene", definition: "Section of DNA that codes for a protein and determines a characteristic." },
    { term: "Allele", definition: "Different form of a gene (e.g. B for brown eyes, b for blue)." },
    { term: "Genotype / phenotype", definition: "Genetic makeup (e.g. Bb) / observable characteristic (e.g. brown eyes)." },
    { term: "Homozygous / heterozygous", definition: "Two same alleles (BB) / two different alleles (Bb)." },
    { term: "Dominant / recessive", definition: "Allele expressed in heterozygote (B) / only expressed when homozygous (bb)." },
    { term: "Mutation", definition: "Permanent change in DNA sequence that may alter the protein made." },
    { term: "Sex chromosome", definition: "X or Y chromosome determining sex; females XX, males XY." },
  ],
  concepts: [
    {
      id: "ediasbio-u6-gene",
      title: "Genes, chromosomes and monohybrid inheritance",
      skill: "Use Punnett squares to predict monohybrid crosses and explain genotype/phenotype ratios.",
      lesson: {
        sections: [
          {
            heading: "Chromosomes and genes",
            body: "Body cells are diploid (2n = 46 in humans): 23 pairs of homologous chromosomes. Gametes are haploid (n = 23). A gene is a DNA sequence on a chromosome; alleles are alternative forms. Humans have ~20 000 genes.",
          },
          {
            heading: "Dominance and Punnett squares",
            body: "Dominant alleles are expressed even with one copy (Bb shows dominant trait); recessive alleles need two copies (bb). A Punnett square shows gametes from each parent and the possible offspring genotypes: Bb × Bb → 1 BB : 2 Bb : 1 bb → phenotype 3 dominant : 1 recessive.",
          },
          {
            heading: "Carriers and ratios",
            body: "A carrier is heterozygous for a recessive allele (Bb) — unaffected but can pass it on. Test crosses determine unknown genotypes: crossing with a homozygous recessive reveals the ratio. Di-hybrid and codominance go beyond IAS.",
          },
        ],
        keyFormulas: [
          { name: "Humans", statement: "2n = 46 (23 pairs); gametes n = 23" },
          { name: "Bb × Bb", statement: "Genotypes 1 BB : 2 Bb : 1 bb; phenotypes 3 : 1" },
          { name: "Bb × bb", statement: "Genotypes 1 Bb : 1 bb; phenotypes 1 : 1" },
        ],
        workedExample: {
          problem: "Two heterozygous brown-eyed parents (Bb × Bb) have children. What are the expected genotype and phenotype ratios?",
          solution: "Gametes: B or b from each parent. Punnett gives 1 BB : 2 Bb : 1 bb. Phenotypes: 3 brown-eyed : 1 blue-eyed (bb).",
        },
      },
      questions: [
        {
          id: "ediasbio-u6-gen-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many chromosomes are in a human body cell?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "23"
                    },
                    {
                              "id": "b",
                              "text": "46"
                    },
                    {
                              "id": "c",
                              "text": "92"
                    },
                    {
                              "id": "d",
                              "text": "44"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chromosome number",
                              "statement": "Humans have 46 chromosomes (2n)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Body cells are diploid with 46 chromosomes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** 46"
},
        },
        {
          id: "ediasbio-u6-gen-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish between genotype and phenotype.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Genotype vs phenotype",
                              "statement": "Genes vs appearance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genotype: genetic makeup, e.g. Bb.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phenotype: observable characteristic, e.g. brown eyes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Genotype = alleles; phenotype = appearance"
},
        },
        {
          id: "ediasbio-u6-gen-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A heterozygous brown-eyed person (Bb) marries a blue-eyed person (bb). What are the expected offspring genotypes and phenotypes?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Monohybrid cross",
                              "statement": "Punnett square predicts ratios."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Parent gametes: B,b × b,b → offspring Bb or bb.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Genotypes: 1 Bb : 1 bb (50% each).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phenotypes: 1 brown-eyed : 1 blue-eyed.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Bb shows dominant brown; bb shows recessive blue.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1 Bb : 1 bb → 1 brown : 1 blue"
},
        },
        {
          id: "ediasbio-u6-gen-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two heterozygous parents (Bb × Bb) have four children. Explain the expected phenotypic ratio and the probability that all four are brown-eyed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Punnett ratios",
                              "statement": "3:1 phenotype; independent assortment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bb × Bb gives genotypes 1 BB : 2 Bb : 1 bb.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phenotypes: 3 dominant (brown) : 1 recessive (blue).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each child has 3/4 chance of brown eyes independently.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "All four brown: (3/4)^4 = 81/256 ≈ 0.32 (about 32%).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Small samples vary from expected ratios.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "3:1 ratio; P(all brown) ≈ 0.32"
},
        },
        {
          id: "ediasbio-u6-gen-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define carrier in the context of recessive alleles.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give the genotype ratio for Bb × Bb.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain what a test cross is used for.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inheritance",
                              "statement": "Carriers, ratios, test crosses."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Heterozygous (Bb) for a recessive allele.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Unaffected but can pass recessive allele to offspring.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "1 BB : 2 Bb : 1 bb.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Correct ratio stated.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Cross with homozygous recessive to reveal unknown genotype.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ratio of offspring shows whether parent was homo/heterozygous.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Carrier, 1:2:1 ratio, test cross purpose"
},
        },
        {
          id: "ediasbio-u6-gen-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define chromosome, gene and allele. (b) How many chromosomes do human gametes have? (c) Distinguish homozygous from heterozygous. (d) Distinguish dominant from recessive allele. (e) Define genotype and phenotype. (f) What is a Punnett square used for? (g) Give the phenotype ratio for Bb × Bb. (h) Define carrier.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define chromosome, gene, allele.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Gamete chromosome number.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Homozygous vs heterozygous.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Dominant vs recessive.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Genotype vs phenotype.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Purpose of Punnett square.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Bb × Bb phenotype ratio.",
                    "marks": 1
          },
          {
                    "label": "h",
                    "prompt": "Define carrier.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inheritance terms",
                              "statement": "Chromosomes → genes → alleles."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Chromosome: DNA+protein thread; gene: DNA section coding protein; allele: gene variant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "All three defined.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "a",
                              "reasoning": "Clear hierarchy stated.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "23 (haploid, n).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Homozygous: same alleles; heterozygous: different alleles.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Dominant expressed with one copy; recessive needs two.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Genotype = alleles; phenotype = observable trait.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Predicts offspring genotypes/phenotypes from a cross.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "3 dominant : 1 recessive.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Heterozygote carrying a recessive allele.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Genetic terminology and Punnett squares",
          "commonErrors": [
                    "Confusing genotype with phenotype."
          ]
},
        },
      ],
    },
    {
      id: "ediasbio-u6-sexmut",
      title: "Sex determination, mutations and genetic disorders",
      skill: "Explain sex determination and describe mutations and inherited disorders.",
      lesson: {
        sections: [
          {
            heading: "Sex determination",
            body: "Humans have 22 pairs of autosomes + 1 pair of sex chromosomes. Females are XX; males XY. The sperm determines sex: X-bearing sperm → female (XX); Y-bearing sperm → male (XY).",
          },
          {
            heading: "Mutations",
            body: "A mutation is a change in DNA sequence — from copying errors, radiation, chemicals or viruses. Gene mutations alter one gene; chromosome mutations alter chromosome number/structure (e.g. Down syndrome = trisomy 21). Mutations may be harmful, neutral or beneficial.",
          },
          {
            heading: "Genetic disorders",
            body: "Sickle-cell anaemia: recessive allele producing abnormal haemoglobin (resistance to malaria in carriers). Cystic fibrosis: recessive, thick mucus. Haemophilia and red-green colour blindness: X-linked recessive — more common in males who have only one X.",
          },
        ],
        keyFormulas: [
          { name: "Sex", statement: "XX = female; XY = male — sperm determines sex" },
          { name: "X-linked", statement: "Recessive alleles on X affect males more (one X)" },
          { name: "Down syndrome", statement: "Trisomy 21 — three copies of chromosome 21" },
        ],
        workedExample: {
          problem: "A carrier mother (XᴴXʰ) and normal father (XᴴY) have a son. What is the probability he has haemophilia?",
          solution: "Sons get Y from father and X from mother: Xᴴ or Xʰ each 50%. P(son affected XʰY) = 1/2 = 50%.",
        },
      },
      questions: [
        {
          id: "ediasbio-u6-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which parent determines the sex of a human baby?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mother only"
                    },
                    {
                              "id": "b",
                              "text": "Father (sperm)"
                    },
                    {
                              "id": "c",
                              "text": "Both equally"
                    },
                    {
                              "id": "d",
                              "text": "Neither"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sex determination",
                              "statement": "Sperm carries X or Y."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sperm determines XY sex.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Father (sperm)"
},
        },
        {
          id: "ediasbio-u6-sm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the sex chromosomes of a male and a female human.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sex chromosomes",
                              "statement": "XX female, XY male."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Female: XX; male: XY.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both stated.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "XX (female) and XY (male)"
},
        },
        {
          id: "ediasbio-u6-sm-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Define a mutation and give two causes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mutation",
                              "statement": "Permanent change in DNA."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mutation: permanent change in DNA sequence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Causes: copying errors during cell division.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Radiation/UV, chemicals, viruses can also cause mutations.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Effects may be harmful, neutral or beneficial.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "DNA change; causes: errors, radiation, chemicals"
},
        },
        {
          id: "ediasbio-u6-sm-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why X-linked recessive disorders are more common in males than females.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "X-linked inheritance",
                              "statement": "One X in males exposes recessive alleles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Males are XY — they have only one X chromosome.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A recessive allele on that X is expressed with no second X to mask it.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Females XX need two recessive alleles (homozygous) to show the disorder.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Carriers (heterozygous females) are usually unaffected.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Examples: haemophilia, red-green colour blindness.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Males have one X → recessive X alleles always expressed"
},
        },
        {
          id: "ediasbio-u6-sm-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the father determines sex.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two examples of genetic disorders.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the advantage of sickle-cell carriers.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sex and disorders",
                              "statement": "Sperm sex chromosomes; inherited conditions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Sperm carries X or Y; egg always X.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Y sperm → male; X sperm → female.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any two: sickle-cell anaemia, cystic fibrosis, haemophilia, Down syndrome.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second example.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Carriers resist malaria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Heterozygote advantage in malaria regions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sex by sperm; disorder examples; sickle-cell advantage"
},
        },
        {
          id: "ediasbio-u6-sm-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "(a) Define sex chromosome. (b) Give female and male sex chromosome pairs. (c) Explain why sperm determine sex. (d) Define mutation. (e) Give two causes of mutation. (f) Name two genetic disorders. (g) Explain X-linked recessive inheritance. (h) What is Down syndrome?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define sex chromosome.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Female and male pairs.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Why sperm determine sex.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Define mutation.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Two causes.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Two disorders.",
                    "marks": 1
          },
          {
                    "label": "g",
                    "prompt": "Explain X-linked recessive.",
                    "marks": 2
          },
          {
                    "label": "h",
                    "prompt": "What is Down syndrome.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sex and mutation",
                              "statement": "XY system; DNA changes; disorders."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "X or Y chromosome determining sex.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "XX female; XY male.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Egg always X; sperm X or Y decides.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Permanent change in DNA sequence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Copying errors; radiation/chemicals/viruses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Second cause.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Sickle-cell/cystic fibrosis/haemophilia/Down.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Allele on X; males XY express with one copy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "g",
                              "reasoning": "Females need two copies (or are carriers).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "h",
                              "reasoning": "Trisomy 21 — extra chromosome 21.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sex determination, mutations, X-linked disorders",
          "commonErrors": [
                    "Saying the mother determines sex."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ediasbio-u6-inherit-notes",
      title: "Inheritance — notes",
      summary: "46 chromosomes (23 pairs); Punnett squares predict ratios; XY determines sex; mutations cause genetic disorders; X-linked recessives affect males more.",
      sections: [
        { heading: "Punnett", body: "Bb × Bb → 1 BB : 2 Bb : 1 bb → 3:1 phenotype. Carriers are heterozygous." },
        { heading: "Sex", body: "XX female, XY male; sperm carries X or Y so father determines sex." },
        { heading: "Mutations", body: "DNA changes → gene/chromosome mutations; examples: sickle-cell, cystic fibrosis, Down syndrome (trisomy 21), X-linked haemophilia." },
      ],
    },
  ],
};
