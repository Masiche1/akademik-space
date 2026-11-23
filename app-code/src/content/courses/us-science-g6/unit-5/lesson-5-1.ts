import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "sci6-u5-lesson-5-1",
  code: "5-1",
  title: "Food Chains",
  goal: "I CAN construct food chains and describe energy flow.",
  standards: ["LS2.B"],
  vocabulary: [
    { term: "Food chain", definition: "Who eats whom." },
    { term: "Producer", definition: "Makes own food." },
    { term: "Consumer", definition: "Eats others." },
    { term: "Decomposer", definition: "Breaks down." },
    { term: "Energy", definition: "Flows through." },
    { term: "Arrow", definition: "Energy direction." },
    { term: "Trophic level", definition: "Feeding level." },
    { term: "Biomass", definition: "Total living matter." },
  ],
  concepts: [
    {
      id: "sci6-u5-food-chains",
      title: "Food chains",
      skill: "Construct food chains and describe how energy flows through ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Energy flow",
            body: "**Producers** (plants) make food via photosynthesis -> **consumers** (herbivores, carnivores) eat them -> **decomposers** break down dead matter. Energy flows through the chain.",
          },
          {
            heading: "Arrows",
            body: "Arrows point in direction of **energy flow** (who gets eaten -> who eats).",
          },
        ],
        keyFormulas: [
          { name: "Food chain", statement: "Producer -> consumer -> decomposer = energy flow." },
        ],
        workedExample: {
          problem: "Construct a food chain: grass, rabbit, fox, decomposer.",
          solution: "**Grass -> Rabbit -> Fox -> Decomposer** (energy flows this way).",
        },
      },
      questions: [
        {
          id: "sci6-u5-food-chains-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'producer' is an organism that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eats others"
                    },
                    {
                              "id": "b",
                              "text": "makes own food"
                    },
                    {
                              "id": "c",
                              "text": "breaks down"
                    },
                    {
                              "id": "d",
                              "text": "only moves"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Makes own food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes own food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "makes own food",
          "commonErrors": [
                    "Confuses with consumer."
          ]
},
        },
        {
          id: "sci6-u5-food-chains-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a food chain, arrows point in the direction of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "movement"
                    },
                    {
                              "id": "b",
                              "text": "energy flow"
                    },
                    {
                              "id": "c",
                              "text": "growth"
                    },
                    {
                              "id": "d",
                              "text": "time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Energy flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy flow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy flow",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "sci6-u5-food-chains-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Construct a food chain with a producer, herbivore, carnivore, and decomposer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food chain",
                              "statement": "Complete chain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constructs chain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Grass -> Rabbit -> Fox -> Fungi/Decomposer.**",
          "commonErrors": [
                    "Incomplete chain.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci6-u5-food-chains-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Decomposers' are organisms that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make food"
                    },
                    {
                              "id": "b",
                              "text": "break down dead matter"
                    },
                    {
                              "id": "c",
                              "text": "eat plants"
                    },
                    {
                              "id": "d",
                              "text": "eat animals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Break down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Break down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "break down dead matter",
          "commonErrors": [
                    "Confuses with producers."
          ]
},
        },
        {
          id: "sci6-u5-food-chains-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Build a food chain and explain how energy flows through each level.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food chain",
                              "statement": "Chain + energy flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains flow.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Grass -> Rabbit -> Fox; Energy: sun -> grass (photosynthesis) -> rabbit (eats grass) -> fox (eats rabbit).**",
          "commonErrors": [
                    "Cannot build.",
                    "No flow explained."
          ]
},
        },
        {
          id: "sci6-u5-food-chains-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food chain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes own food."
                    },
                    {
                              "id": "b",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "c",
                              "text": "Eats others."
                    },
                    {
                              "id": "d",
                              "text": "Breaks down."
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
          id: "sci6-u5-food-chains-q7",
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
                              "text": "Breaks down."
                    },
                    {
                              "id": "c",
                              "text": "Flows through."
                    },
                    {
                              "id": "d",
                              "text": "Makes own food."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Producer\" means Makes own food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Producer\" means Makes own food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Producer** = Makes own food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-food-chains-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Consumer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breaks down."
                    },
                    {
                              "id": "b",
                              "text": "Eats others."
                    },
                    {
                              "id": "c",
                              "text": "Flows through."
                    },
                    {
                              "id": "d",
                              "text": "Energy direction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Consumer\" means Eats others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Consumer\" means Eats others.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Consumer** = Eats others.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
