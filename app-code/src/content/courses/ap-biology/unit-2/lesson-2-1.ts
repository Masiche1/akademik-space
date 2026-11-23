import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apbio-u2-lesson-2-1",
  code: "2-1",
  title: "Meiosis and Mendelian Inheritance",
  goal: "I CAN predict offspring ratios and explain the sources of genetic variation.",
  standards: ["GEN-1"],
  vocabulary: [
    { term: "Meiosis", definition: "Two divisions producing four haploid gametes with half the chromosomes." },
    { term: "Crossing over", definition: "Exchange of chromosome segments in prophase I creating new allele combinations." },
    { term: "Independent assortment", definition: "Random alignment of homologous pairs in metaphase I." },
    { term: "Homozygous", definition: "Two identical alleles ($AA$ or $aa$)." },
    { term: "Heterozygous", definition: "Two different alleles ($Aa$)." },
    { term: "Punnett square", definition: "Grid predicting offspring genotypes from parental alleles." },
  ],
  concepts: [
    {
      id: "apbio-u2-meiosis-inheritance",
      title: "Meiosis and inheritance",
      skill: "Predict genetic outcomes and explain variation sources.",
      lesson: {
        sections: [
          {
            heading: "Meiosis",
            body: "Diploid cells ($2n$) divide twice to produce four haploid ($n$) gametes. Crossing over in prophase I and independent assortment in metaphase I shuffle alleles — together with random fertilization, these generate nearly infinite genetic variation.",
          },
          {
            heading: "Mendelian genetics",
            body: "Dominant alleles mask recessive ones in heterozygotes. A monohybrid cross $Aa \\times Aa$ yields $1 AA : 2 Aa : 1 aa$ — the classic $3:1$ phenotype ratio when $A$ is dominant. Test crosses ($Aa \\times aa$) reveal hidden recessive alleles via $1:1$ ratios.",
          },
        ],
        keyFormulas: [
          { name: "Monohybrid ratio", statement: "$Aa \\times Aa \\to 1:2:1$ genotype, $3:1$ phenotype" },
          { name: "Dihybrid ratio", statement: "$AaBb \\times AaBb \\to 9:3:3:1$ phenotype" },
        ],
        workedExample: {
          problem: "Tall ($T$) is dominant to short ($t$). Two heterozygous parents cross. What fraction of offspring are short?",
          solution: "$Tt \\times Tt \\to 1 TT : 2 Tt : 1 tt$. Only $tt$ is short: fraction $= \\frac{1}{4} = 25\\%$.",
        },
      },
      questions: [
        {
          id: "apbio-u2-meiosis-inheritance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Crossing over occurs during ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "anaphase II"
                    },
                    {
                              "id": "b",
                              "text": "prophase I of meiosis"
                    },
                    {
                              "id": "c",
                              "text": "metaphase II"
                    },
                    {
                              "id": "d",
                              "text": "interphase"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Crossing over",
                              "statement": "Homologous chromosomes exchange segments early in meiosis I."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crossing over happens in prophase I when homologs pair as tetrads.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Prophase I",
          "commonErrors": [
                    "Placing crossing over in meiosis II where no homologs exist."
          ]
},
        },
        {
          id: "apbio-u2-meiosis-inheritance-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$Aa \\times Aa$ where $A$ is dominant. What fraction shows the dominant phenotype?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{1}{4}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{1}{2}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{3}{4}$"
                    },
                    {
                              "id": "d",
                              "text": "$1$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Punnett ratio",
                              "statement": "$AA + Aa$ show dominant = $1 + 2 = 3$ of $4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dominant phenotype appears in $AA$ and $Aa$ — $\\frac{3}{4} = 75\\%$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$\\frac{3}{4}$",
          "commonErrors": [
                    "Counting only $AA$ as dominant phenotype."
          ]
},
        },
        {
          id: "apbio-u2-meiosis-inheritance-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a dihybrid cross $AaBb \\times AaBb$, what fraction of offspring show both dominant traits? Enter as a decimal.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Fraction",
                              "answer": 0.5625
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Dihybrid ratio",
                              "statement": "Both dominant = $\\frac{3}{4} \\times \\frac{3}{4}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{9}{16} = 0.5625$ — the $9$ in the $9:3:3:1$ ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$0.5625$ or $\\frac{9}{16}$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.5625$",
          "commonErrors": [
                    "Adding probabilities instead of multiplying independent traits."
          ]
},
        },
        {
          id: "apbio-u2-meiosis-inheritance-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain three mechanisms that generate genetic variation in sexually reproducing organisms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Crossing over",
                              "statement": "New allele combinations on chromosomes."
                    },
                    {
                              "kind": "concept",
                              "name": "Independent assortment",
                              "statement": "Random homolog alignment."
                    },
                    {
                              "kind": "concept",
                              "name": "Random fertilization",
                              "statement": "Any sperm can meet any egg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crossing over in prophase I creates recombinant chromosomes with novel allele combinations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Independent assortment in metaphase I gives $2^n$ possible gamete combinations for $n$ chromosome pairs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Random fertilization ensures each zygote gets a unique combination of parental gametes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Crossing over, independent assortment, random fertilization",
          "commonErrors": [
                    "Listing only one mechanism or confusing them with mutation."
          ]
},
        },
      ],
    },
  ],
};
