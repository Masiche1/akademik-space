import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "sci5-u4-lesson-4-2",
  code: "4-2",
  title: "Food Chains and Webs",
  goal: "I CAN construct and interpret food chains and food webs.",
  standards: ["LS2.B"],
  vocabulary: [
    { term: "Food chain", definition: "Who eats whom." },
    { term: "Food web", definition: "Connected chains." },
    { term: "Producer", definition: "Makes food." },
    { term: "Consumer", definition: "Eats others." },
    { term: "Herbivore", definition: "Eats plants." },
    { term: "Carnivore", definition: "Eats animals." },
    { term: "Omnivore", definition: "Eats both." },
    { term: "Energy flow", definition: "Food provides energy." },
  ],
  concepts: [
    {
      id: "sci5-u4-food-chains",
      title: "Food chains and webs",
      skill: "Construct and interpret food chains and food webs.",
      lesson: {
        sections: [
          {
            heading: "Chain vs web",
            body: "A **food chain** is a simple line: grass -> rabbit -> fox. A **food web** is multiple connected chains showing all feeding relationships.",
          },
          {
            heading: "Energy flow",
            body: "**Energy** flows from **producers** to **consumers**. **Herbivores** eat plants, **carnivores** eat animals, **omnivores** eat both.",
          },
        ],
        keyFormulas: [
          { name: "Food chain", statement: "Producer -> herbivore -> carnivore = energy flow." },
        ],
        workedExample: {
          problem: "Construct a food chain: grass, rabbit, fox.",
          solution: "**Grass -> Rabbit -> Fox** (grass is producer, rabbit herbivore, fox carnivore).",
        },
      },
      questions: [
        {
          id: "sci5-u4-food-chains-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'food chain' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all relationships"
                    },
                    {
                              "id": "b",
                              "text": "a simple line of who eats whom"
                    },
                    {
                              "id": "c",
                              "text": "only producers"
                    },
                    {
                              "id": "d",
                              "text": "only consumers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Simple line of feeding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Simple line of feeding.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a simple line of who eats whom",
          "commonErrors": [
                    "Confuses with web."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'food web' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one chain"
                    },
                    {
                              "id": "b",
                              "text": "multiple connected food chains"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "only animals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Multiple connected chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple connected chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiple connected food chains",
          "commonErrors": [
                    "Confuses with chain."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Construct a food chain with 3-4 organisms and identify each as producer/herbivore/carnivore/omnivore.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food chain",
                              "statement": "Chain + roles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constructs chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies roles.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Grass (producer) -> Rabbit (herbivore) -> Fox (carnivore).'**",
          "commonErrors": [
                    "Cannot construct.",
                    "Wrong roles."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Herbivores' eat...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "meat"
                    },
                    {
                              "id": "b",
                              "text": "plants"
                    },
                    {
                              "id": "c",
                              "text": "both"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "plants",
          "commonErrors": [
                    "Confuses with carnivore."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why food webs are more realistic than food chains.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food web",
                              "statement": "Realism explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains web.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains realism.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Food webs show all connections; real ecosystems have multiple feeding relationships, not just one chain.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No realism."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food chain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connected chains."
                    },
                    {
                              "id": "b",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "c",
                              "text": "Makes food."
                    },
                    {
                              "id": "d",
                              "text": "Eats others."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food chain\" means Who eats whom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food chain\" means Who eats whom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food chain** = Who eats whom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food web\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Eats others."
                    },
                    {
                              "id": "c",
                              "text": "Eats plants."
                    },
                    {
                              "id": "d",
                              "text": "Connected chains."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food web\" means Connected chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food web\" means Connected chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food web** = Connected chains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-food-chains-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Producer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Eats others."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Eats plants."
                    },
                    {
                              "id": "d",
                              "text": "Eats animals."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Producer\" means Makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Producer\" means Makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Producer** = Makes food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
