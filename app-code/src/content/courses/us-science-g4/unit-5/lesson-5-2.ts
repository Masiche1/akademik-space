import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "sci4-u5-lesson-5-2",
  code: "5-2",
  title: "Food Chains",
  goal: "I CAN explain food chains and energy flow.",
  standards: ["LS2.B"],
  vocabulary: [
    { term: "Food chain", definition: "Who eats whom." },
    { term: "Producer", definition: "Makes own food." },
    { term: "Consumer", definition: "Eats others." },
    { term: "Decomposer", definition: "Breaks down dead." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Transfer", definition: "Move between levels." },
    { term: "Trophic level", definition: "Position in chain." },
    { term: "Arrow", definition: "Shows energy flow." },
  ],
  concepts: [
    {
      id: "sci4-u5-food-chains",
      title: "Food chains",
      skill: "Explain food chains showing energy flow from producers to consumers.",
      lesson: {
        sections: [
          {
            heading: "Who eats whom",
            body: "A **food chain** shows **energy flow**: **producers** (plants) make food -> **consumers** (herbivores, carnivores) eat -> **decomposers** break down dead matter.",
          },
          {
            heading: "Arrows",
            body: "**Arrows** point from **food to eater** — showing energy transfer direction.",
          },
        ],
        keyFormulas: [
          { name: "Food chain", statement: "Producer -> herbivore -> carnivore -> decomposer." },
        ],
        workedExample: {
          problem: "Draw a food chain: grass -> rabbit -> fox.",
          solution: "Grass (producer) -> Rabbit (herbivore) -> Fox (carnivore). Arrows show energy flow.",
        },
      },
      questions: [
        {
          id: "sci4-u5-food-chains-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'producer' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eats plants"
                    },
                    {
                              "id": "b",
                              "text": "makes its own food"
                    },
                    {
                              "id": "c",
                              "text": "breaks down dead"
                    },
                    {
                              "id": "d",
                              "text": "hunts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Producer = makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Producer = makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "makes its own food",
          "commonErrors": [
                    "Confuses with consumer."
          ]
},
        },
        {
          id: "sci4-u5-food-chains-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a food chain, arrows point...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "from eater to food"
                    },
                    {
                              "id": "b",
                              "text": "from food to eater"
                    },
                    {
                              "id": "c",
                              "text": "both ways"
                    },
                    {
                              "id": "d",
                              "text": "nowhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Arrows = energy flow direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arrows = energy flow direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "from food to eater",
          "commonErrors": [
                    "Reverses arrows."
          ]
},
        },
        {
          id: "sci4-u5-food-chains-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Create a food chain with 4 organisms. Label each as producer, consumer or decomposer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food chain",
                              "statement": "Chain + labels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Labels correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Grass -> Grasshopper -> Frog -> Snake -> Hawk; Snake = carnivore.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Wrong labels."
          ]
},
        },
        {
          id: "sci4-u5-food-chains-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'decomposer' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eats live prey"
                    },
                    {
                              "id": "b",
                              "text": "breaks down dead matter"
                    },
                    {
                              "id": "c",
                              "text": "makes food"
                    },
                    {
                              "id": "d",
                              "text": "hunts"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Decomposer = breaks down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposer = breaks down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "breaks down dead matter",
          "commonErrors": [
                    "Confuses with consumer."
          ]
},
        },
        {
          id: "sci4-u5-food-chains-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why energy decreases at each trophic level in a food chain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food chain",
                              "statement": "Energy loss explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains energy loss.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connects to levels.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Only ~10% energy transfers; rest lost as heat/waste at each level.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong concept."
          ]
},
        },
        {
          id: "sci4-u5-food-chains-q6",
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
                              "text": "Breaks down dead."
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
          id: "sci4-u5-food-chains-q7",
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
                              "text": "Breaks down dead."
                    },
                    {
                              "id": "c",
                              "text": "Ability to do work."
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
          id: "sci4-u5-food-chains-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Consumer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breaks down dead."
                    },
                    {
                              "id": "b",
                              "text": "Eats others."
                    },
                    {
                              "id": "c",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "d",
                              "text": "Move between levels."
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
