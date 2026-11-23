import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "sci2-u6-lesson-6-4",
  code: "6-4",
  title: "Weather and Living Things",
  goal: "I CAN describe how weather affects plants and animals.",
  standards: ["NGSS 2-ESS1-1", "NGSS 2-LS2-1"],
  vocabulary: [
    { term: "Weather", definition: "Conditions outside." },
    { term: "Affect", definition: "Change or influence." },
    { term: "Adapt", definition: "Change to survive." },
    { term: "Migration", definition: "Move to better place." },
    { term: "Hibernate", definition: "Sleep through winter." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Dormant", definition: "Inactive." },
    { term: "Season", definition: "Time of year." },
    { term: "Survive", definition: "Stay alive." },
    { term: "Shelter", definition: "Protection." },
  ],
  concepts: [
    {
      id: "sci2-u6-weather-animals",
      title: "Weather and living things",
      skill: "Describe how weather affects plants and animals and how they adapt.",
      lesson: {
        sections: [
          {
            heading: "Weather affects life",
            body: "Weather **affects** plants and animals: **cold** slows growth, **heat** can dry plants, **rain** helps them grow. Animals **adapt** — migrate, hibernate, or change behavior.",
          },
          {
            heading: "Animal responses",
            body: "Some animals **migrate** (move south for winter), some **hibernate** (sleep through winter), some **adapt** with thick fur or change eating habits.",
          },
        ],
        keyFormulas: [
          { name: "Weather effects", statement: "Weather -> affects plants/animals -> adapt/migrate/hibernate." },
        ],
        workedExample: {
          problem: "How do bears survive winter?",
          solution: "They **hibernate** — sleep through the cold months when food is scarce.",
        },
      },
      questions: [
        {
          id: "sci2-u6-weather-animals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Hibernate' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "move south"
                    },
                    {
                              "id": "b",
                              "text": "sleep through winter"
                    },
                    {
                              "id": "c",
                              "text": "grow faster"
                    },
                    {
                              "id": "d",
                              "text": "eat more"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hibernate = sleep through winter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hibernate = sleep through winter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sleep through winter**",
          "commonErrors": [
                    "Confuses with migrate."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Birds fly south in winter because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they are lost"
                    },
                    {
                              "id": "b",
                              "text": "they migrate to find food/warmer places"
                    },
                    {
                              "id": "c",
                              "text": "they want to fly"
                    },
                    {
                              "id": "d",
                              "text": "they are scared"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Migration = move to better conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Migration = move to better conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**find food/warmer**",
          "commonErrors": [
                    "Picks wrong reason."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how weather affects plants and how animals adapt.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather effects",
                              "statement": "Affects plants + animals adapt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes plant effect.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes animal adaptation.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cold slows plants; bears hibernate, birds migrate.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Only one group."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Migration' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sleeping"
                    },
                    {
                              "id": "b",
                              "text": "moving to a different place seasonally"
                    },
                    {
                              "id": "c",
                              "text": "growing"
                    },
                    {
                              "id": "d",
                              "text": "hiding"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Migration = seasonal movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Migration = seasonal movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seasonal movement**",
          "commonErrors": [
                    "Confuses with hibernate."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name two ways animals respond to seasonal weather changes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather effects",
                              "statement": "Migrate + hibernate + adapt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names first response.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Names second response.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Birds migrate south; bears hibernate.'**",
          "commonErrors": [
                    "Cannot name.",
                    "Only one response."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change or influence."
                    },
                    {
                              "id": "b",
                              "text": "Conditions outside."
                    },
                    {
                              "id": "c",
                              "text": "Change to survive."
                    },
                    {
                              "id": "d",
                              "text": "Move to better place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Conditions outside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Conditions outside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Conditions outside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Affect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change to survive."
                    },
                    {
                              "id": "b",
                              "text": "Move to better place."
                    },
                    {
                              "id": "c",
                              "text": "Sleep through winter."
                    },
                    {
                              "id": "d",
                              "text": "Change or influence."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Affect\" means Change or influence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Affect\" means Change or influence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Affect** = Change or influence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-animals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adapt\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move to better place."
                    },
                    {
                              "id": "b",
                              "text": "Change to survive."
                    },
                    {
                              "id": "c",
                              "text": "Sleep through winter."
                    },
                    {
                              "id": "d",
                              "text": "Get bigger."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adapt\" means Change to survive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adapt\" means Change to survive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adapt** = Change to survive.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
