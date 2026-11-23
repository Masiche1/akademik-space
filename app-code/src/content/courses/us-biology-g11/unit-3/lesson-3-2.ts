import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "bio11-u3-lesson-3-2",
  code: "3-2",
  title: "Speciation and Classification",
  goal: "I CAN explain how species form and how organisms are classified.",
  standards: ["HS-LS4-1", "HS-LS4-6"],
  vocabulary: [
    { term: "Species", definition: "Organisms that can interbreed." },
    { term: "Speciation", definition: "New species formation." },
    { term: "Reproductive isolation", definition: "Can't interbreed." },
    { term: "Classification", definition: "Grouping by traits." },
    { term: "Phylogeny", definition: "Evolutionary tree." },
  ],
  concepts: [
    {
      id: "bio11-u3-speciation",
      title: "Speciation",
      skill: "Explain speciation mechanisms and classification.",
      lesson: {
        sections: [
          {
            heading: "How species form",
            body: "Speciation occurs when populations become reproductively isolated — geographically (allopatric, separated by barrier) or behaviorally/ecologically (sympatric, same area). Over time, genetic differences accumulate until they can no longer interbreed.",
          },
          {
            heading: "Classification and phylogeny",
            body: "Taxonomy groups organisms by shared traits: domain, kingdom, phylum, class, order, family, genus, species. Phylogenetic trees show evolutionary relationships — DNA evidence now guides classification more than appearance.",
          },
        ],
        keyFormulas: [
          { name: "Species", statement: "Can interbreed." },
          { name: "Isolation", statement: "Barrier to interbreeding." },
          { name: "Taxonomy", statement: "Domain→species." },
        ],
        workedExample: {
          problem: "How does a mountain range cause speciation?",
          solution: "It separates a population (allopatric isolation) → the two groups evolve independently → genetic differences accumulate → they can no longer interbreed = new species.",
        },
      },
      questions: [
        {
          id: "bio11-u3-speciation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Speciation is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "extinction"
                    },
                    {
                              "id": "b",
                              "text": "formation of new species"
                    },
                    {
                              "id": "c",
                              "text": "cell division"
                    },
                    {
                              "id": "d",
                              "text": "migration"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Speciation",
                              "statement": "New species formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speciation is the formation of new species through reproductive isolation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** formation of new species",
          "commonErrors": [
                    "Confusing with extinction."
          ]
},
        },
        {
          id: "bio11-u3-speciation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reproductive isolation means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "organisms can't reproduce at all"
                    },
                    {
                              "id": "b",
                              "text": "populations can't successfully interbreed"
                    },
                    {
                              "id": "c",
                              "text": "no genes exist"
                    },
                    {
                              "id": "d",
                              "text": "extinction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Isolation",
                              "statement": "Barrier to interbreeding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reproductive isolation prevents gene flow between populations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** populations can't successfully interbreed",
          "commonErrors": [
                    "Thinking it means no reproduction."
          ]
},
        },
        {
          id: "bio11-u3-speciation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Taxonomy has 8 levels from domain to species. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Levels",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Taxonomy",
                              "statement": "Domain, kingdom, phylum, class, order, family, genus, species."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 levels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Missing domain level."
          ]
},
        },
        {
          id: "bio11-u3-speciation-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Distinguish allopatric from sympatric speciation and give one example of each mechanism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Allopatric",
                              "statement": "Geographic separation."
                    },
                    {
                              "kind": "definition",
                              "name": "Sympatric",
                              "statement": "Same area, other barriers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Allopatric: geographic barrier separates populations (e.g., river splits a species). Sympatric: populations stay together but become isolated by behavior, diet or polyploidy (e.g., plant speciation without geographic split).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both mechanisms distinguished with examples.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Allopatric = geographic; sympatric = same-area isolation.**",
          "commonErrors": [
                    "Reversing the definitions."
          ]
},
        },
      ],
    },
  ],
};
