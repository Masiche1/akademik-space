import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "sci4-u5-lesson-5-3",
  code: "5-3",
  title: "Food Webs",
  goal: "I CAN explain food webs showing interconnected relationships.",
  standards: ["LS2.B"],
  vocabulary: [
    { term: "Food web", definition: "Interconnected chains." },
    { term: "Network", definition: "Many connections." },
    { term: "Interconnected", definition: "Linked together." },
    { term: "Complex", definition: "Many parts." },
    { term: "Stable", definition: "Resists change." },
    { term: "Remove", definition: "Take away." },
    { term: "Effect", definition: "What happens." },
    { term: "Balance", definition: "Equilibrium." },
  ],
  concepts: [
    {
      id: "sci4-u5-food-webs",
      title: "Food webs",
      skill: "Explain that food webs show interconnected food chains for ecosystem stability.",
      lesson: {
        sections: [
          {
            heading: "More than chains",
            body: "A **food web** is a network of **interconnected food chains**. Most organisms eat and are eaten by multiple species — creating a complex web.",
          },
          {
            heading: "Stability",
            body: "Food webs make ecosystems **stable** — if one species is **removed**, others can still find food. Simple chains are fragile.",
          },
        ],
        keyFormulas: [
          { name: "Food web", statement: "Multiple chains + connections = ecosystem stability." },
        ],
        workedExample: {
          problem: "Why are food webs more stable than food chains?",
          solution: "If one food source disappears, organisms in a web have **other options**; in a chain, they starve.",
        },
      },
      questions: [
        {
          id: "sci4-u5-food-webs-q1",
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
                              "text": "interconnected food chains"
                    },
                    {
                              "id": "c",
                              "text": "a single organism"
                    },
                    {
                              "id": "d",
                              "text": "a habitat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Food web = interconnected chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Food web = interconnected chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "interconnected food chains",
          "commonErrors": [
                    "Thinks it's one chain."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Food webs make ecosystems...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fragile"
                    },
                    {
                              "id": "b",
                              "text": "more stable"
                    },
                    {
                              "id": "c",
                              "text": "simpler"
                    },
                    {
                              "id": "d",
                              "text": "smaller"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Webs = more stable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Webs = more stable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "more stable",
          "commonErrors": [
                    "Thinks they're fragile."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why removing one species has less impact in a food web than a food chain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food web",
                              "statement": "Stability explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains web stability.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Webs have backup food sources; chains have single dependencies.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong concept."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food web, most organisms...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eat one thing"
                    },
                    {
                              "id": "b",
                              "text": "eat and are eaten by multiple species"
                    },
                    {
                              "id": "c",
                              "text": "are producers"
                    },
                    {
                              "id": "d",
                              "text": "are decomposers only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Multiple connections."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiple connections.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "eat and are eaten by multiple species",
          "commonErrors": [
                    "Thinks they have one connection."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw a simple food web with 5 organisms. How does it differ from a food chain?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Food web",
                              "statement": "Web drawing + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws web.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Chain: A->B->C; Web: A->B->C, A->D->C, B->E->C — multiple paths.'**",
          "commonErrors": [
                    "Only one path.",
                    "No difference."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food web\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Many connections."
                    },
                    {
                              "id": "b",
                              "text": "Interconnected chains."
                    },
                    {
                              "id": "c",
                              "text": "Linked together."
                    },
                    {
                              "id": "d",
                              "text": "Many parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food web\" means Interconnected chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food web\" means Interconnected chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food web** = Interconnected chains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Network\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Linked together."
                    },
                    {
                              "id": "b",
                              "text": "Many parts."
                    },
                    {
                              "id": "c",
                              "text": "Resists change."
                    },
                    {
                              "id": "d",
                              "text": "Many connections."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Network\" means Many connections."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Network\" means Many connections.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Network** = Many connections.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-food-webs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interconnected\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Many parts."
                    },
                    {
                              "id": "b",
                              "text": "Linked together."
                    },
                    {
                              "id": "c",
                              "text": "Resists change."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
