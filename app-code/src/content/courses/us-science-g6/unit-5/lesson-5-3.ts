import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "sci6-u5-lesson-5-3",
  code: "5-3",
  title: "Ecosystem Balance",
  goal: "I CAN explain how ecosystems maintain balance.",
  standards: ["LS2.C"],
  vocabulary: [
    { term: "Balance", definition: "Stable ecosystem." },
    { term: "Population", definition: "Number of organisms." },
    { term: "Limiting factor", definition: "Restricts growth." },
    { term: "Carrying capacity", definition: "Max population." },
    { term: "Competition", definition: "Fight for resources." },
    { term: "Predation", definition: "Hunting." },
    { term: "Symbiosis", definition: "Living together." },
    { term: "Mutualism", definition: "Both benefit." },
  ],
  concepts: [
    {
      id: "sci6-u5-ecosystem-balance",
      title: "Ecosystem balance",
      skill: "Explain how populations are regulated and ecosystems maintain balance.",
      lesson: {
        sections: [
          {
            heading: "Regulation",
            body: "Populations are regulated by **predation**, **competition**, **disease**, and **limiting factors** (food, water, space).",
          },
          {
            heading: "Carrying capacity",
            body: "**Carrying capacity** = maximum population an ecosystem can support. When exceeded, resources become scarce.",
          },
        ],
        keyFormulas: [
          { name: "Balance", statement: "Predation + competition + limiting factors = population control." },
        ],
        workedExample: {
          problem: "Why don't rabbit populations grow forever in a grassland?",
          solution: "**Limited by food (grass), predators (foxes), and disease — carrying capacity prevents unlimited growth.**",
        },
      },
      questions: [
        {
          id: "sci6-u5-ecosystem-balance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Carrying capacity' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "minimum population"
                    },
                    {
                              "id": "b",
                              "text": "maximum population ecosystem can support"
                    },
                    {
                              "id": "c",
                              "text": "only food"
                    },
                    {
                              "id": "d",
                              "text": "only space"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Max population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Max population.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "maximum population ecosystem can support",
          "commonErrors": [
                    "Confuses with minimum."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Limiting factors' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "things that help growth"
                    },
                    {
                              "id": "b",
                              "text": "things that restrict population growth"
                    },
                    {
                              "id": "c",
                              "text": "only predators"
                    },
                    {
                              "id": "d",
                              "text": "only food"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Restrict growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Restrict growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "things that restrict population growth",
          "commonErrors": [
                    "Confuses with help."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain three factors that keep rabbit populations in check in a grassland ecosystem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balance",
                              "statement": "Three factors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains factors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1. Predators (foxes hunt rabbits); 2. Food availability (grass limited); 3. Disease/competition for resources.**",
          "commonErrors": [
                    "Fewer than three.",
                    "Wrong factors."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Symbiosis' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "organisms fighting"
                    },
                    {
                              "id": "b",
                              "text": "organisms living together"
                    },
                    {
                              "id": "c",
                              "text": "organisms dying"
                    },
                    {
                              "id": "d",
                              "text": "organisms alone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Living together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Living together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "organisms living together",
          "commonErrors": [
                    "Confuses with competition."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how predation helps maintain ecosystem balance, giving an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Balance",
                              "statement": "Predation + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains predation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Predators control prey populations (prevents overpopulation); Example: foxes keep rabbits in check.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Balance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number of organisms."
                    },
                    {
                              "id": "b",
                              "text": "Stable ecosystem."
                    },
                    {
                              "id": "c",
                              "text": "Restricts growth."
                    },
                    {
                              "id": "d",
                              "text": "Max population."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Balance\" means Stable ecosystem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Balance\" means Stable ecosystem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Balance** = Stable ecosystem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Population\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Restricts growth."
                    },
                    {
                              "id": "b",
                              "text": "Max population."
                    },
                    {
                              "id": "c",
                              "text": "Fight for resources."
                    },
                    {
                              "id": "d",
                              "text": "Number of organisms."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Population\" means Number of organisms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Population\" means Number of organisms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Population** = Number of organisms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-ecosystem-balance-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Limiting factor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Max population."
                    },
                    {
                              "id": "b",
                              "text": "Restricts growth."
                    },
                    {
                              "id": "c",
                              "text": "Fight for resources."
                    },
                    {
                              "id": "d",
                              "text": "Hunting."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Limiting factor\" means Restricts growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Limiting factor\" means Restricts growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Limiting factor** = Restricts growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
