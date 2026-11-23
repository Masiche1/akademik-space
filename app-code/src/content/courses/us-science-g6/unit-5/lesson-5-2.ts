import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "sci6-u5-lesson-5-2",
  code: "5-2",
  title: "Food Webs",
  goal: "I CAN describe food webs and ecosystem relationships.",
  standards: ["LS2.B"],
  vocabulary: [
    { term: "Food web", definition: "Multiple chains." },
    { term: "Interconnected", definition: "Linked together." },
    { term: "Predator", definition: "Hunts prey." },
    { term: "Prey", definition: "Hunted." },
    { term: "Niche", definition: "Role in ecosystem." },
    { term: "Competition", definition: "Same resources." },
    { term: "Balance", definition: "Ecosystem stability." },
    { term: "Remove", definition: "Take out species." },
  ],
  concepts: [
    {
      id: "sci6-u5-food-webs",
      title: "Food webs",
      skill: "Describe how food chains connect into food webs and the importance of each species.",
      lesson: {
        sections: [
          {
            heading: "Web vs chain",
            body: "A **food web** shows multiple interconnected food chains — most organisms eat multiple things and are eaten by multiple things.",
          },
          {
            heading: "Balance",
            body: "Removing one species can affect the whole web — predators control prey populations, prey feed predators.",
          },
        ],
        keyFormulas: [
          { name: "Food web", statement: "Multiple food chains interconnected = complex ecosystem." },
        ],
        workedExample: {
          problem: "What happens if all the foxes are removed from a food web?",
          solution: "**Rabbit population may explode (no predator), eating all grass, affecting other herbivores — ecosystem imbalance.**",
        },
      },
      questions: [
        {
          id: "sci6-u5-food-webs-q1",
          difficulty: "foundation",
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
                              "text": "multiple interconnected chains"
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
                              "statement": "Multiple chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiple interconnected chains",
          "commonErrors": [
                    "Confuses with chain."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Predator' is an organism that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is hunted"
                    },
                    {
                              "id": "b",
                              "text": "hunts other organisms"
                    },
                    {
                              "id": "c",
                              "text": "makes food"
                    },
                    {
                              "id": "d",
                              "text": "breaks down"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hunts others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hunts others.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hunts other organisms",
          "commonErrors": [
                    "Confuses with prey."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why a food web is more accurate than a single food chain for describing an ecosystem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food web",
                              "statement": "Explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains web.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Food webs show that organisms eat multiple things and are eaten by multiple things — more realistic than single chain.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong reasoning."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Niche' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "where organism lives"
                    },
                    {
                              "id": "b",
                              "text": "its role in ecosystem"
                    },
                    {
                              "id": "c",
                              "text": "its size"
                    },
                    {
                              "id": "d",
                              "text": "its color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Role in ecosystem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Role in ecosystem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "its role in ecosystem",
          "commonErrors": [
                    "Confuses with habitat."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe what happens to a food web when one species is removed, giving an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food web",
                              "statement": "Effect + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Removing foxes -> rabbits multiply -> grass depleted -> other herbivores affected; shows interconnectedness.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No example."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food web\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Linked together."
                    },
                    {
                              "id": "b",
                              "text": "Multiple chains."
                    },
                    {
                              "id": "c",
                              "text": "Hunts prey."
                    },
                    {
                              "id": "d",
                              "text": "Hunted."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food web\" means Multiple chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food web\" means Multiple chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food web** = Multiple chains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interconnected\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hunts prey."
                    },
                    {
                              "id": "b",
                              "text": "Hunted."
                    },
                    {
                              "id": "c",
                              "text": "Role in ecosystem."
                    },
                    {
                              "id": "d",
                              "text": "Linked together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interconnected\" means Linked together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interconnected\" means Linked together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interconnected** = Linked together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-food-webs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Predator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hunted."
                    },
                    {
                              "id": "b",
                              "text": "Hunts prey."
                    },
                    {
                              "id": "c",
                              "text": "Role in ecosystem."
                    },
                    {
                              "id": "d",
                              "text": "Same resources."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
