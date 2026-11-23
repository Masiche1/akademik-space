import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "bio11-u2-lesson-2-3",
  code: "2-3",
  title: "Genetic Variation",
  goal: "I CAN explain sources of genetic variation and their evolutionary importance.",
  standards: ["HS-LS3-2", "HS-LS4-4", "HS-LS4-5"],
  vocabulary: [
    { term: "Variation", definition: "Differences among individuals." },
    { term: "Crossing over", definition: "Chromosome segment swap in meiosis." },
    { term: "Independent assortment", definition: "Random chromosome alignment." },
    { term: "Mutation", definition: "New allele source." },
    { term: "Gene pool", definition: "All alleles in population." },
  ],
  concepts: [
    {
      id: "bio11-u2-genetic-variation",
      title: "Genetic variation",
      skill: "Explain sources of variation and their role in evolution.",
      lesson: {
        sections: [
          {
            heading: "Sources of variation",
            body: "Three main sources: mutation (new alleles), crossing over (segments swap between homologous chromosomes in meiosis), and independent assortment (chromosomes align randomly). Together they make every gamete genetically unique.",
          },
          {
            heading: "Variation and evolution",
            body: "Genetic variation is the raw material for natural selection. Populations with more variation adapt better to changing environments. The gene pool — all alleles in a population — changes over generations.",
          },
        ],
        keyFormulas: [
          { name: "Mutation", statement: "New alleles." },
          { name: "Crossing over", statement: "Segment swap." },
          { name: "Assortment", statement: "Random alignment." },
          { name: "Gene pool", statement: "Population alleles." },
        ],
        workedExample: {
          problem: "Name two sources of genetic variation in sexually reproducing organisms.",
          solution: "Crossing over during meiosis and independent assortment of chromosomes.",
        },
      },
      questions: [
        {
          id: "bio11-u2-genetic-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Crossing over occurs during ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mitosis"
                    },
                    {
                              "id": "b",
                              "text": "meiosis"
                    },
                    {
                              "id": "c",
                              "text": "fertilization"
                    },
                    {
                              "id": "d",
                              "text": "translation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Crossing over",
                              "statement": "Meiosis chromosome swap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crossing over happens during meiosis when homologous chromosomes exchange segments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** meiosis",
          "commonErrors": [
                    "Choosing mitosis."
          ]
},
        },
        {
          id: "bio11-u2-genetic-variation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The gene pool refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one organism's genes"
                    },
                    {
                              "id": "b",
                              "text": "all alleles in a population"
                    },
                    {
                              "id": "c",
                              "text": "DNA in water"
                    },
                    {
                              "id": "d",
                              "text": "a single chromosome"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gene pool",
                              "statement": "All alleles in population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The gene pool is the complete set of alleles in a population.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** all alleles in a population",
          "commonErrors": [
                    "Thinking it's individual-level."
          ]
},
        },
        {
          id: "bio11-u2-genetic-variation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 3 main sources of genetic variation. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sources",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Mutation, crossing over, assortment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 sources.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Missing one source."
          ]
},
        },
        {
          id: "bio11-u2-genetic-variation-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why genetic variation is essential for evolution by natural selection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Variation",
                              "statement": "Raw material for selection."
                    },
                    {
                              "kind": "definition",
                              "name": "Natural selection",
                              "statement": "Advantageous traits survive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Natural selection needs variation to act on — individuals with advantageous traits survive and reproduce more, shifting the population's gene pool. Without variation, no population could adapt to environmental change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links variation to selection clearly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variation = raw material for selection.**",
          "commonErrors": [
                    "Not connecting variation to adaptation."
          ]
},
        },
      ],
    },
  ],
};
