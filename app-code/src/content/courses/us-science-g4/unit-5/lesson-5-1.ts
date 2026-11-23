import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "sci4-u5-lesson-5-1",
  code: "5-1",
  title: "What is an Ecosystem?",
  goal: "I CAN explain what an ecosystem is and its components.",
  standards: ["LS2.A"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Biotic", definition: "Living things." },
    { term: "Abiotic", definition: "Non-living things." },
    { term: "Community", definition: "All organisms." },
    { term: "Environment", definition: "Surroundings." },
    { term: "Habitat", definition: "Where organism lives." },
    { term: "Population", definition: "Group of same species." },
    { term: "Interaction", definition: "How they relate." },
  ],
  concepts: [
    {
      id: "sci4-u5-ecosystem-basics",
      title: "What is an ecosystem?",
      skill: "Explain that an ecosystem includes living and non-living components.",
      lesson: {
        sections: [
          {
            heading: "Living + non-living",
            body: "An **ecosystem** includes all **living things** (**biotic**: plants, animals) and **non-living things** (**abiotic**: water, soil, air, sunlight) interacting in an **environment**.",
          },
          {
            heading: "Components",
            body: "**Community** = all organisms; **population** = group of same species; **habitat** = where they live; **environment** = surroundings.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Biotic + abiotic = ecosystem." },
        ],
        workedExample: {
          problem: "Is a pond an ecosystem? Why?",
          solution: "Yes — it has fish/frogs (biotic) and water/soil/sunlight (abiotic) interacting.",
        },
      },
      questions: [
        {
          id: "sci4-u5-ecosystem-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'ecosystem' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only animals"
                    },
                    {
                              "id": "b",
                              "text": "living and non-living things"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "only water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Living + non-living."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Living + non-living.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "living and non-living things",
          "commonErrors": [
                    "Only living."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Abiotic' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "living"
                    },
                    {
                              "id": "b",
                              "text": "non-living"
                    },
                    {
                              "id": "c",
                              "text": "animals"
                    },
                    {
                              "id": "d",
                              "text": "plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Abiotic = non-living."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Abiotic = non-living.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "non-living",
          "commonErrors": [
                    "Confuses with biotic."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "List the biotic and abiotic components of a forest ecosystem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ecosystem",
                              "statement": "Biotic + abiotic lists."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists both types.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Biotic: trees, animals, fungi. Abiotic: soil, water, air, sunlight.**",
          "commonErrors": [
                    "Only one type.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an organism"
                    },
                    {
                              "id": "b",
                              "text": "where an organism lives"
                    },
                    {
                              "id": "c",
                              "text": "a community"
                    },
                    {
                              "id": "d",
                              "text": "a population"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat = where lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat = where lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "where an organism lives",
          "commonErrors": [
                    "Confuses with other terms."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two ecosystems (e.g., desert vs rainforest). How do their components differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ecosystem",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares ecosystems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies component differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Desert: few plants, dry soil; Rainforest: many plants, wet soil, more species.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong facts."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ecosystem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Living things."
                    },
                    {
                              "id": "b",
                              "text": "Community + environment."
                    },
                    {
                              "id": "c",
                              "text": "Non-living things."
                    },
                    {
                              "id": "d",
                              "text": "All organisms."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ecosystem\" means Community + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ecosystem\" means Community + environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ecosystem** = Community + environment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Biotic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Non-living things."
                    },
                    {
                              "id": "b",
                              "text": "All organisms."
                    },
                    {
                              "id": "c",
                              "text": "Surroundings."
                    },
                    {
                              "id": "d",
                              "text": "Living things."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Biotic\" means Living things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Biotic\" means Living things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Biotic** = Living things.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-ecosystem-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Abiotic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All organisms."
                    },
                    {
                              "id": "b",
                              "text": "Non-living things."
                    },
                    {
                              "id": "c",
                              "text": "Surroundings."
                    },
                    {
                              "id": "d",
                              "text": "Where organism lives."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Abiotic\" means Non-living things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Abiotic\" means Non-living things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Abiotic** = Non-living things.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
