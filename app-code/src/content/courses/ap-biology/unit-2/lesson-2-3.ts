import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apbio-u2-lesson-2-3",
  code: "2-3",
  title: "Evolution and Natural Selection",
  goal: "I CAN explain mechanisms of evolution and interpret evidence.",
  standards: ["EVO-1"],
  vocabulary: [
    { term: "Evolution", definition: "Change in allele frequencies in a population over generations." },
    { term: "Natural selection", definition: "Differential survival/reproduction of phenotypes better suited to the environment." },
    { term: "Genetic drift", definition: "Random change in allele frequencies, especially strong in small populations." },
    { term: "Gene flow", definition: "Transfer of alleles between populations via migration." },
    { term: "Speciation", definition: "Formation of new species, typically via reproductive isolation." },
    { term: "Evidence", definition: "Fossil record, comparative anatomy, embryology, molecular biology, observed selection." },
  ],
  concepts: [
    {
      id: "apbio-u2-evolution-natural-selection",
      title: "Mechanisms of evolution",
      skill: "Distinguish evolutionary mechanisms and evaluate evidence.",
      lesson: {
        sections: [
          {
            heading: "Mechanisms",
            body: "**Natural selection** favors advantageous alleles systematically. **Genetic drift** changes frequencies randomly — bottlenecks and founder effects are extreme cases. **Gene flow** homogenizes populations. **Mutation** and **recombination** supply new variation. Non-random mating (assortative, inbreeding) changes genotype frequencies without changing allele frequencies.",
          },
          {
            heading: "Evidence and speciation",
            body: "The fossil record shows transitional forms; homologous structures (same bones, different functions) reveal common ancestry; DNA similarities confirm relationships; observed cases like antibiotic resistance and Darwin's finches demonstrate selection in action. Speciation requires reproductive isolation — geographic, behavioral, or temporal barriers.",
          },
        ],
        keyFormulas: [
          { name: "Hardy-Weinberg", statement: "$p^2 + 2pq + q^2 = 1$ — no evolution when allele frequencies stable" },
          { name: "Selection", statement: "Fitness differences change allele frequencies over time" },
        ],
        workedExample: {
          problem: "In a population, $p = 0.6$ (dominant allele). Under Hardy-Weinberg, what fraction is heterozygous?",
          solution: "$2pq = 2(0.6)(0.4) = 0.48$ — $48\\%$ of the population is heterozygous.",
        },
      },
      questions: [
        {
          id: "apbio-u2-evolution-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Antibiotic resistance spreading in bacteria is an example of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "genetic drift"
                    },
                    {
                              "id": "b",
                              "text": "natural selection"
                    },
                    {
                              "id": "c",
                              "text": "gene flow"
                    },
                    {
                              "id": "d",
                              "text": "speciation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Natural selection",
                              "statement": "Antibiotic creates selective pressure favoring resistant variants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resistant bacteria survive and reproduce more — classic directional selection.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Natural selection",
          "commonErrors": [
                    "Calling it random drift — selection is directional, not random."
          ]
},
        },
        {
          id: "apbio-u2-evolution-natural-selection-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A population crashes from $10{,}000$ to $50$ individuals, then recovers. Allele frequencies change randomly. This is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the bottleneck effect"
                    },
                    {
                              "id": "b",
                              "text": "gene flow"
                    },
                    {
                              "id": "c",
                              "text": "natural selection"
                    },
                    {
                              "id": "d",
                              "text": "adaptive radiation"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bottleneck",
                              "statement": "Severe population reduction amplifies drift."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The crash is a bottleneck — surviving alleles are a random sample, shifting frequencies drastically.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Bottleneck effect",
          "commonErrors": [
                    "Attributing frequency shifts to selection when they're random."
          ]
},
        },
        {
          id: "apbio-u2-evolution-natural-selection-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Under Hardy-Weinberg, $q = 0.3$ for a recessive allele. What fraction shows the recessive phenotype? Enter the decimal.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Fraction",
                              "answer": 0.09
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "H-W",
                              "statement": "Recessive phenotype = $q^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$q^2 = 0.3^2 = 0.09$ — $9\\%$ show the recessive trait.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$0.09$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$0.09$",
          "commonErrors": [
                    "Using $2pq$ (heterozygotes) instead of $q^2$."
          ]
},
        },
        {
          id: "apbio-u2-evolution-natural-selection-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how geographic isolation can lead to speciation, naming the key steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Reproductive isolation",
                              "statement": "Barrier prevents gene flow."
                    },
                    {
                              "kind": "concept",
                              "name": "Divergence",
                              "statement": "Populations evolve independently."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A physical barrier (river, mountain) splits a population into two groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "With no gene flow, mutations, drift, and different selection pressures cause the groups' allele frequencies to diverge independently.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Over time they become so different that even if the barrier disappears, they cannot interbreed successfully — new species formed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Isolation $\\to$ divergence $\\to$ reproductive incompatibility",
          "commonErrors": [
                    "Skipping the divergence step or assuming instant speciation."
          ]
},
        },
      ],
    },
  ],
};
