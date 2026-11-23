import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "bio11-u2-lesson-2-2",
  code: "2-2",
  title: "Inheritance Patterns",
  goal: "I CAN predict inheritance using Punnett squares and explain patterns.",
  standards: ["HS-LS3-1", "HS-LS3-2", "HS-LS3-3"],
  vocabulary: [
    { term: "Dominant", definition: "Masks recessive allele." },
    { term: "Recessive", definition: "Expressed only if homozygous." },
    { term: "Homozygous", definition: "Two same alleles." },
    { term: "Heterozygous", definition: "Two different alleles." },
    { term: "Punnett square", definition: "Offspring probability grid." },
  ],
  concepts: [
    {
      id: "bio11-u2-inheritance",
      title: "Inheritance patterns",
      skill: "Predict offspring genotypes and phenotypes.",
      lesson: {
        sections: [
          {
            heading: "Alleles and dominance",
            body: "Each gene has alleles — variants. Dominant alleles mask recessive ones. Genotype is the allele combination (e.g., Bb); phenotype is the expressed trait. Homozygous = two same alleles (BB or bb); heterozygous = two different (Bb).",
          },
          {
            heading: "Punnett squares",
            body: "A Punnett square shows all possible offspring combinations. Cross Bb × Bb gives: 1 BB, 2 Bb, 1 bb → 3 dominant phenotype, 1 recessive (3:1 ratio).",
          },
        ],
        keyFormulas: [
          { name: "Dominant", statement: "Masks recessive." },
          { name: "Genotype", statement: "Allele combo." },
          { name: "Phenotype", statement: "Expressed trait." },
          { name: "Bb×Bb", statement: "3:1 ratio." },
        ],
        workedExample: {
          problem: "Cross two heterozygous parents (Bb × Bb) for a dominant trait B. What phenotypic ratio results?",
          solution: "1 BB : 2 Bb : 1 bb → 3 dominant : 1 recessive = 3:1.",
        },
      },
      questions: [
        {
          id: "bio11-u2-inheritance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A dominant allele ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is always expressed"
                    },
                    {
                              "id": "b",
                              "text": "masks the recessive allele"
                    },
                    {
                              "id": "c",
                              "text": "is rare"
                    },
                    {
                              "id": "d",
                              "text": "only appears in males"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dominant",
                              "statement": "Masks recessive when present."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A dominant allele masks the recessive allele's expression.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** masks the recessive allele",
          "commonErrors": [
                    "Thinking dominant = more common."
          ]
},
        },
        {
          id: "bio11-u2-inheritance-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cross Aa × Aa. What is the expected phenotypic ratio (A dominant)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1:1"
                    },
                    {
                              "id": "b",
                              "text": "3:1"
                    },
                    {
                              "id": "c",
                              "text": "1:2:1"
                    },
                    {
                              "id": "d",
                              "text": "4:0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Punnett",
                              "statement": "Aa×Aa → 3 dominant : 1 recessive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Offspring: 1 AA, 2 Aa, 1 aa → 3 show dominant, 1 shows recessive = 3:1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** 3:1",
          "commonErrors": [
                    "Giving the genotypic 1:2:1 ratio."
          ]
},
        },
        {
          id: "bio11-u2-inheritance-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Punnett square for Bb × Bb has 4 boxes. How many offspring genotypes are possible?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Genotypes",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genotypes",
                              "statement": "BB, Bb, bb = 3 types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 distinct genotypes: BB, Bb, bb.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counting 4 boxes instead of distinct genotypes."
          ]
},
        },
        {
          id: "bio11-u2-inheritance-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A couple are both carriers (Bb) for a recessive disease allele b. What is the probability their child is affected (bb)? Use a Punnett square.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Punnett",
                              "statement": "Bb×Bb → 1/4 bb."
                    },
                    {
                              "kind": "definition",
                              "name": "Recessive",
                              "statement": "Affected only if bb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Punnett: 1 BB, 2 Bb, 1 bb. Only bb is affected → probability 1/4 = 25%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct probability with square reasoning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**1/4 (25%) chance of affected child.**",
          "commonErrors": [
                    "Answering 1/2 or 3/4."
          ]
},
        },
      ],
    },
  ],
};
