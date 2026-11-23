import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "spk-u2-lesson-2-3",
  code: "2-3",
  title: "Weather and Animals",
  goal: "I CAN describe how weather affects animals.",
  standards: ["ELOF-PK.SCI.WEATHER.2"],
  vocabulary: [
    { term: "Affect", definition: "To influence or change something." },
    { term: "Adapt", definition: "Change to fit a situation." },
    { term: "Migrate", definition: "Move to a different place for the season." },
    { term: "Hibernate", definition: "Sleep through winter." },
    { term: "Shelter", definition: "A safe place to stay." },
    { term: "Season", definition: "Part of the year." },
  ],
  concepts: [
    {
      id: "spk-u2-weather-animals",
      title: "Weather and animals",
      skill: "Describe how weather and seasons affect animals.",
      lesson: {
        sections: [
          {
            heading: "Animals and weather",
            body: "Weather **affects** animals: birds **migrate** south for winter, bears **hibernate** (sleep), some animals grow thick fur for cold, others shed it for summer.",
          },
          {
            heading: "Adaptations",
            body: "Animals **adapt** — they change to fit their environment. A polar bear's white fur helps it blend into snow. A camel stores water for deserts.",
          },
        ],
        keyFormulas: [
          { name: "Adapt", statement: "Animals change to fit weather: migrate, hibernate, grow fur, shed fur." },
        ],
        workedExample: {
          problem: "Why do some birds fly south in fall?",
          solution: "They **migrate** south to find food and warmer weather for **winter**.",
        },
      },
      questions: [
        {
          id: "spk-u2-weather-animals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Migrate' means animals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sleep all winter"
                    },
                    {
                              "id": "b",
                              "text": "move to a different place for the season"
                    },
                    {
                              "id": "c",
                              "text": "grow bigger"
                    },
                    {
                              "id": "d",
                              "text": "change color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Migrate = move to a different place seasonally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Migrate = move to a different place seasonally.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Move seasonally**",
          "commonErrors": [
                    "Confuses migrate with hibernate."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bears that sleep through winter are said to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "migrate"
                    },
                    {
                              "id": "b",
                              "text": "hibernate"
                    },
                    {
                              "id": "c",
                              "text": "adapt"
                    },
                    {
                              "id": "d",
                              "text": "shed"
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
          "finalAnswer": "**Hibernate**",
          "commonErrors": [
                    "Confuses with migrate."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name an animal and describe how it adapts to cold or hot weather.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Adapt",
                              "statement": "How animal fits weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names animal + adaptation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Polar bear has thick white fur for cold snow.'**",
          "commonErrors": [
                    "Cannot name adaptation.",
                    "Wrong animal-weather match."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Adapt' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stay exactly the same"
                    },
                    {
                              "id": "b",
                              "text": "change to fit a situation"
                    },
                    {
                              "id": "c",
                              "text": "disappear"
                    },
                    {
                              "id": "d",
                              "text": "become a plant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adapt = change to fit environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adapt = change to fit environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Change to fit**",
          "commonErrors": [
                    "Thinks adapt means stay same."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick two animals. How does each adapt to its weather — fur, migration, hibernation, or other? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Adaptations",
                              "statement": "Name adaptation + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 animals with adaptations.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how each fits weather.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Penguin has feathers+fat for cold; camel stores water for desert heat.'**",
          "commonErrors": [
                    "Cannot name adaptations.",
                    "No explanation."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Affect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change to fit a situation."
                    },
                    {
                              "id": "b",
                              "text": "To influence or change something."
                    },
                    {
                              "id": "c",
                              "text": "Move to a different place for the season."
                    },
                    {
                              "id": "d",
                              "text": "Sleep through winter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Affect\" means To influence or change something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Affect\" means To influence or change something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Affect** = To influence or change something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adapt\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move to a different place for the season."
                    },
                    {
                              "id": "b",
                              "text": "Sleep through winter."
                    },
                    {
                              "id": "c",
                              "text": "A safe place to stay."
                    },
                    {
                              "id": "d",
                              "text": "Change to fit a situation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adapt\" means Change to fit a situation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adapt\" means Change to fit a situation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adapt** = Change to fit a situation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-animals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Migrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sleep through winter."
                    },
                    {
                              "id": "b",
                              "text": "Move to a different place for the season."
                    },
                    {
                              "id": "c",
                              "text": "A safe place to stay."
                    },
                    {
                              "id": "d",
                              "text": "Part of the year."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Migrate\" means Move to a different place for the season."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Migrate\" means Move to a different place for the season.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Migrate** = Move to a different place for the season.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
