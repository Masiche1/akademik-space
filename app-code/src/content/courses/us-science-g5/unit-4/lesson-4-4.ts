import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "sci5-u4-lesson-4-4",
  code: "4-4",
  title: "Organism Interactions",
  goal: "I CAN describe how organisms interact (predator/prey, competition, symbiosis).",
  standards: ["LS2.C"],
  vocabulary: [
    { term: "Interaction", definition: "How organisms affect each other." },
    { term: "Predator", definition: "Hunts prey." },
    { term: "Prey", definition: "Is hunted." },
    { term: "Competition", definition: "Fight for resources." },
    { term: "Symbiosis", definition: "Close relationship." },
    { term: "Mutualism", definition: "Both benefit." },
    { term: "Commensalism", definition: "One benefits, other neutral." },
    { term: "Parasitism", definition: "One benefits, other harmed." },
  ],
  concepts: [
    {
      id: "sci5-u4-organism-interactions",
      title: "Organism interactions",
      skill: "Describe predator/prey, competition and symbiotic relationships.",
      lesson: {
        sections: [
          {
            heading: "Types",
            body: "**Predator/prey**: one hunts another. **Competition**: fight for resources. **Symbiosis**: close relationship — **mutualism** (both benefit), **commensalism** (one benefits, one neutral), **parasitism** (one benefits, one harmed).",
          },
          {
            heading: "Balance",
            body: "These interactions keep ecosystems **balanced** — populations stay in check.",
          },
        ],
        keyFormulas: [
          { name: "Interactions", statement: "Predator/prey + competition + symbiosis = relationships." },
        ],
        workedExample: {
          problem: "Describe mutualism between bees and flowers.",
          solution: "**Bees get nectar (food); flowers get pollinated (reproduction) — both benefit.**",
        },
      },
      questions: [
        {
          id: "sci5-u4-organism-interactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Predator/prey' relationship is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "both benefit"
                    },
                    {
                              "id": "b",
                              "text": "one hunts the other"
                    },
                    {
                              "id": "c",
                              "text": "competition"
                    },
                    {
                              "id": "d",
                              "text": "symbiosis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "One hunts other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One hunts other.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one hunts the other",
          "commonErrors": [
                    "Confuses with symbiosis."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Mutualism' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one benefits"
                    },
                    {
                              "id": "b",
                              "text": "both organisms benefit"
                    },
                    {
                              "id": "c",
                              "text": "one harmed"
                    },
                    {
                              "id": "d",
                              "text": "competition"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Both benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both benefit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "both organisms benefit",
          "commonErrors": [
                    "Confuses with parasitism."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe predator/prey, competition and one type of symbiosis with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interactions",
                              "statement": "All three described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Predator/prey: lion/zebra; Competition: lions for food; Mutualism: bees/flowers.**",
          "commonErrors": [
                    "Missing types.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Parasitism' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "both benefit"
                    },
                    {
                              "id": "b",
                              "text": "one benefits, other is harmed"
                    },
                    {
                              "id": "c",
                              "text": "both harmed"
                    },
                    {
                              "id": "d",
                              "text": "no relationship"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "One benefits, other harmed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One benefits, other harmed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one benefits, other is harmed",
          "commonErrors": [
                    "Confuses with mutualism."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how predator/prey relationships help keep ecosystems balanced.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interactions",
                              "statement": "Balance explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains relationship.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains balance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Predators control prey populations; prey populations support predators — balance maintained.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No balance."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interaction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hunts prey."
                    },
                    {
                              "id": "b",
                              "text": "How organisms affect each other."
                    },
                    {
                              "id": "c",
                              "text": "Is hunted."
                    },
                    {
                              "id": "d",
                              "text": "Fight for resources."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interaction\" means How organisms affect each other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interaction\" means How organisms affect each other.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interaction** = How organisms affect each other.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Predator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Is hunted."
                    },
                    {
                              "id": "b",
                              "text": "Fight for resources."
                    },
                    {
                              "id": "c",
                              "text": "Close relationship."
                    },
                    {
                              "id": "d",
                              "text": "Hunts prey."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Predator\" means Hunts prey."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Predator\" means Hunts prey.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Predator** = Hunts prey.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-organism-interactions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Prey\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fight for resources."
                    },
                    {
                              "id": "b",
                              "text": "Is hunted."
                    },
                    {
                              "id": "c",
                              "text": "Close relationship."
                    },
                    {
                              "id": "d",
                              "text": "Both benefit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Prey\" means Is hunted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Prey\" means Is hunted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Prey** = Is hunted.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
