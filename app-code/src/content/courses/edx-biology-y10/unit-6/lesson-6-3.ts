import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "ebi10-u6-lesson-6-3",
  code: "6-3",
  title: "DNA, Inheritance, Variation and Evolution",
  goal: "I CAN describe DNA and protein synthesis, use genetic diagrams, distinguish mitosis and meiosis and explain variation and natural selection.",
  standards: ["4BI1 3.14", "4BI1 3.15", "4BI1 3.16B", "4BI1 3.17B", "4BI1 3.18B", "4BI1 3.19", "4BI1 3.20", "4BI1 3.21B", "4BI1 3.22", "4BI1 3.23", "4BI1 3.24", "4BI1 3.25", "4BI1 3.26", "4BI1 3.27", "4BI1 3.28", "4BI1 3.29", "4BI1 3.30", "4BI1 3.31", "4BI1 3.32", "4BI1 3.33", "4BI1 3.34", "4BI1 3.35B", "4BI1 3.36B", "4BI1 3.37B", "4BI1 3.38", "4BI1 3.39"],
  
  vocabulary: [
    { term: "Genome", definition: "The complete set of genetic material of an organism." },
    { term: "Gene", definition: "A section of DNA that codes for a particular protein or characteristic." },
    { term: "Allele", definition: "A different form of a gene." },
    { term: "Genotype", definition: "The genetic make-up of an organism, shown by alleles." },
    { term: "Phenotype", definition: "The observable characteristics of an organism." },
    { term: "Mitosis", definition: "Cell division producing two genetically identical diploid cells." },
    { term: "Meiosis", definition: "Cell division producing four genetically different haploid gametes." },
  ],
  concepts: [
    {
      id: "ebi10-u6-dna-protein",
      title: "DNA and protein synthesis",
      skill: "Describe DNA structure, base pairing and the roles of transcription, mRNA, tRNA and ribosomes.",
      lesson: {
        sections: [
          {
            heading: "DNA structure",
            body: "The **genome** is all the genetic material of an organism. **Genes** are sections of DNA on chromosomes in the nucleus. DNA is a **double helix** made of two strands with paired bases: **adenine pairs with thymine** and **cytosine pairs with guanine**. RNA is usually single stranded and contains **uracil** instead of thymine.",
          },
          {
            heading: "Protein synthesis",
            body: "In **transcription**, a gene's DNA code is copied into **mRNA**. mRNA leaves the nucleus and attaches to a **ribosome**. In **translation**, **tRNA** molecules carry amino acids and match **codons** on mRNA using **anticodons**. The ribosome joins amino acids into a protein. The sequence of codons therefore determines the protein and the characteristic it controls.",
          },
        ],
        keyFormulas: [
          { name: "Base pairing DNA", statement: "A–T and C–G" },
          { name: "RNA", statement: "single strand; uracil pairs with adenine" },
          { name: "Protein synthesis", statement: "DNA → mRNA → ribosome/tRNA → protein" },
          { name: "Codon", statement: "three mRNA bases code for one amino acid" },
        ],
        workedExample: {
          problem: "A gene has the DNA sequence ATG GCA TTT. Write the mRNA codons and state how many amino acids are coded.",
          solution: "mRNA replaces T with U: AUG GCA UUU. There are 3 codons, so 3 amino acids are coded.",
        },
      },
      questions: [
        {
          id: "ebi10-u6-dna-protein-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which base pairs with adenine in DNA?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thymine"
                    },
                    {
                              "id": "b",
                              "text": "Cytosine"
                    },
                    {
                              "id": "c",
                              "text": "Uracil"
                    },
                    {
                              "id": "d",
                              "text": "Guanine"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNA base pairing",
                              "statement": "A pairs with T; C pairs with G."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adenine pairs with thymine in DNA; uracil is in RNA.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Thymine",
          "commonErrors": [
                    "Choosing uracil, which pairs with adenine in RNA."
          ]
},
        },
        {
          id: "ebi10-u6-dna-protein-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A section of mRNA has 9 bases. State the number of codons and amino acids it can code for.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Codons",
                              "answer": 3
                    },
                    {
                              "label": "Amino acids",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Codon",
                              "statement": "Three bases code for one amino acid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each codon has 3 bases, so 9 bases make 3 codons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each codon codes for one amino acid, so 3 amino acids are coded.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3 codons; 3 amino acids.",
          "commonErrors": [
                    "Dividing by 2 or treating each base as one amino acid."
          ]
},
        },
        {
          id: "ebi10-u6-dna-protein-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the roles of transcription and translation in protein synthesis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Protein synthesis",
                              "statement": "DNA → mRNA → protein."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transcription copies the DNA gene sequence into mRNA in the nucleus.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Translation occurs at ribosomes using mRNA codons and tRNA anticodons.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Amino acids are joined to form a protein.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Transcription copies DNA to mRNA; translation builds protein at ribosomes.",
          "commonErrors": [
                    "Saying DNA itself leaves the nucleus or proteins are made directly from DNA."
          ]
},
        },
        {
          id: "ebi10-u6-dna-protein-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A mutation changes one base in a gene.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what is meant by mutation.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Explain how the mutation could change the protein produced.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why some mutations may have no effect.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mutation",
                              "statement": "A change in DNA sequence."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mutation is a change in the DNA base sequence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The codon sequence may change, so a different amino acid is inserted.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This can alter the protein's shape or function.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Some base changes are silent because the same amino acid is coded.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Others may occur in non-coding regions or not affect the protein's function.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) DNA sequence change (b) different codon/amino acid/protein (c) silent or non-functional changes.",
          "commonErrors": [
                    "Assuming every mutation is harmful."
          ]
},
        },
        {
          id: "ebi10-u6-dna-protein-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A gene codes for a protein enzyme. A student compares normal and mutant DNA.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe how the DNA sequence is used to make the enzyme.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how a mutation in the gene could reduce enzyme activity.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Gene to protein",
                              "statement": "DNA sequence determines protein structure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The gene is transcribed into mRNA.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "mRNA is translated at ribosomes using tRNA anticodons.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The amino acid sequence folds into the enzyme protein.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "A mutation may change a codon and insert a different amino acid.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This can alter the protein's three-dimensional shape.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The active site may no longer match the substrate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Therefore enzyme activity decreases or is lost.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) DNA→mRNA→protein (b) mutation changes amino acid/shape/active site → less activity.",
          "commonErrors": [
                    "Saying the enzyme is made directly by DNA without mRNA and ribosomes."
          ]
},
        },
        {
          id: "ebi10-u6-dna-protein-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A researcher studies a gene with the sequence ATG CGT GAA TAA.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the mRNA sequence using the correct base pairing.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State how many codons and amino acids are coded.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain the roles of mRNA, tRNA and ribosomes in producing the protein.",
                    "marks": 3
          },
          {
                    "label": "d",
                    "prompt": "Explain why a mutation in the third codon might not always change the protein.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "DNA to protein",
                              "statement": "Transcription and translation convert DNA code to protein."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Treating the sequence as the coding strand, replace T with U: AUG CGU GAA UAA.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "There are 4 codons in the sequence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "UAA is a stop codon, so translation terminates after three amino acids.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "mRNA carries the code from nucleus to ribosome.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "tRNA brings amino acids and matches anticodons to mRNA codons.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Ribosomes join amino acids into the protein chain.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Some codons code for the same amino acid due to degeneracy.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "A change may produce a synonymous codon.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Alternatively the changed amino acid may not affect protein function.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) AUG CGU GAA UAA (b) 4 codons; UAA is a stop codon after 3 amino acids (c) mRNA code, tRNA amino acids, ribosome assembly (d) degeneracy or neutral change.",
          "commonErrors": [
                    "Leaving thymine in mRNA or pairing A with G."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u6-inheritance-evolution",
      title: "Inheritance, meiosis, variation and evolution",
      skill: "Use genetic terms and diagrams, distinguish mitosis and meiosis, and explain natural selection and antibiotic resistance.",
      lesson: {
        sections: [
          {
            heading: "Inheritance and cell division",
            body: "An **allele** is a form of a gene. A **homozygote** has two identical alleles; a **heterozygote** has two different alleles. **Dominant** alleles are expressed even if a recessive allele is present; **recessive** alleles are expressed only when homozygous. **Genotype** is the alleles; **phenotype** is the characteristic. Most features are **polygenic**, controlled by several genes.\n\n**Mitosis** produces two identical diploid cells for growth and repair. **Meiosis** produces four genetically different haploid gametes. Random fertilisation adds further variation. **Sex** in humans is determined by X and Y chromosomes: females are XX and males XY.",
          },
          {
            heading: "Variation and natural selection",
            body: "**Genetic variation** arises from meiosis, random fertilisation and mutation. **Environmental variation** is caused by conditions such as nutrition. Mutations may be harmful, neutral or beneficial.\n\nDarwin's **natural selection** states that individuals with advantageous inherited characteristics survive longer and reproduce more, so their alleles become more common. **Antibiotic resistance** is an example: a random mutation makes a bacterium resistant; antibiotics kill non-resistant bacteria; resistant bacteria survive, reproduce and pass on the allele.",
          },
        ],
        keyFormulas: [
          { name: "Genotype", statement: "alleles present, e.g. Tt" },
          { name: "Phenotype", statement: "observable characteristic, e.g. tall" },
          { name: "Mitosis", statement: "2 identical diploid cells" },
          { name: "Meiosis", statement: "4 different haploid gametes" },
          { name: "Sex determination", statement: "XX female; XY male" },
          { name: "Natural selection", statement: "advantageous inherited traits → greater survival/reproduction" },
        ],
        workedExample: {
          problem: "A heterozygous tall plant (Tt) is crossed with another heterozygous tall plant. Assuming tall is dominant, what is the expected phenotype ratio?",
          solution: "Genotypes: TT, Tt, Tt, tt. Three tall and one short, so phenotype ratio is 3 tall : 1 short.",
        },
      },
      questions: [
        {
          id: "ebi10-u6-inheritance-evolution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An organism with two different alleles for a gene is described as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Homozygous"
                    },
                    {
                              "id": "b",
                              "text": "Heterozygous"
                    },
                    {
                              "id": "c",
                              "text": "Haploid"
                    },
                    {
                              "id": "d",
                              "text": "Recessive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Heterozygous",
                              "statement": "Two different alleles for a gene."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heterozygous means two different alleles; homozygous means identical alleles.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Heterozygous",
          "commonErrors": [
                    "Confusing heterozygous with recessive phenotype."
          ]
},
        },
        {
          id: "ebi10-u6-inheritance-evolution-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A Tt plant is crossed with another Tt plant. If tall is dominant, calculate the expected number of tall offspring from 80 offspring.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Tall offspring",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Monohybrid cross",
                              "statement": "Tt × Tt gives 3 tall : 1 short."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genotypes are TT, Tt, Tt, tt, so 3/4 are tall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "3/4 of 80 = 60 tall offspring.",
                              "working": "80 \\times \\frac{3}{4} = 60",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "60",
          "commonErrors": [
                    "Using 1/2 instead of 3/4 dominant phenotype."
          ]
},
        },
        {
          id: "ebi10-u6-inheritance-evolution-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between genotype and phenotype, giving one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Genotype vs phenotype",
                              "statement": "Genotype is alleles; phenotype is characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genotype is the genetic make-up, such as Tt.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Phenotype is the observable characteristic, such as tall.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "A heterozygous tall plant has genotype Tt and phenotype tall.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Genotype Tt; phenotype tall.",
          "commonErrors": [
                    "Writing phenotype as letters instead of observed trait."
          ]
},
        },
        {
          id: "ebi10-u6-inheritance-evolution-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "In a species, allele R causes red flowers and is dominant to allele r for white flowers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the phenotype of RR, Rr and rr plants.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "An Rr plant is crossed with an rr plant. Predict the phenotypic ratio of offspring.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dominance",
                              "statement": "Dominant allele expressed in heterozygote."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "RR is red because two dominant alleles.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Rr is red because R is dominant.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "rr is white because only recessive alleles.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cross gives Rr and rr offspring, so 1 red : 1 white.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) RR red, Rr red, rr white (b) 1 red : 1 white.",
          "commonErrors": [
                    "Calling Rr white because r is present."
          ]
},
        },
        {
          id: "ebi10-u6-inheritance-evolution-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Human somatic cells have 46 chromosomes; sperm and ova have 23.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why gametes have half the chromosome number of body cells.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how fertilisation restores the diploid chromosome number.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the chromosome combination that determines female and male sex.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Meiosis and fertilisation",
                              "statement": "Meiosis halves chromosomes; fertilisation restores diploid number."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Gametes are produced by meiosis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Meiosis separates homologous chromosome pairs, producing haploid cells.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each gamete therefore has half the body cell chromosome number.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sperm and ovum each contribute 23 chromosomes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Fusion forms a zygote with 46 chromosomes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Females are XX; males are XY.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) meiosis halves chromosomes (b) 23+23=46 (c) XX female, XY male.",
          "commonErrors": [
                    "Saying mitosis produces gametes."
          ]
},
        },
        {
          id: "ebi10-u6-inheritance-evolution-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bacterium population is treated with an antibiotic. A few bacteria survive and later cause an infection that is hard to treat.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how antibiotic resistance can arise by natural selection.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why resistance becomes more common in the population.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two ways to reduce the spread of resistant bacteria.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Antibiotic resistance",
                              "statement": "Random mutation → selection → resistant survivors reproduce."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A random mutation may produce a bacterium resistant to the antibiotic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The antibiotic kills non-resistant bacteria.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Resistant bacteria survive and reproduce.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "They pass the resistance allele to offspring.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each generation has more resistant bacteria because they are selected.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Non-resistant bacteria are removed, so resistance frequency rises.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Over time most bacteria may be resistant.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use antibiotics only when necessary and complete the course.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Practice good hygiene and infection control to reduce transmission.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Develop new antibiotics or use alternative treatments.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) mutation→selection→survival/reproduction (b) resistant allele frequency rises (c) responsible antibiotic use, hygiene, new treatments.",
          "commonErrors": [
                    "Saying bacteria deliberately evolve resistance in response to the antibiotic; mutation is random."
          ]
},
        },
      ],
    },
  ],

};
