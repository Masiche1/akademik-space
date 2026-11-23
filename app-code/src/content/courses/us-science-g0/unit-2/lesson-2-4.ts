import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "s0-u2-lesson-2-4",
  code: "2-4",
  title: "Weather and the Sky",
  goal: "I CAN connect weather with what we see in the sky.",
  standards: ["K-ESS2-1", "K-ESS1-1"],
  vocabulary: [
    { term: "Weather", definition: "Sky and air conditions." },
    { term: "Cloud", definition: "White or gray mass in sky." },
    { term: "Sun", definition: "Gives light and warmth." },
    { term: "Rain", definition: "Water falling from clouds." },
    { term: "Wind", definition: "Moving air." },
    { term: "Snow", definition: "Frozen rain." },
    { term: "Sky", definition: "Space above us." },
    { term: "Observe", definition: "Watch carefully." },
  ],
  concepts: [
    {
      id: "s0-u2-weather-sky",
      title: "Weather and the sky",
      skill: "Connect weather conditions with what we see in the sky.",
      lesson: {
        sections: [
          {
            heading: "Sky tells weather",
            body: "What we see in the **sky** tells us about **weather**: **clouds** mean rain might come, the **sun** means sunny, **wind** means moving air, **snow** means cold.",
          },
          {
            heading: "Observe and connect",
            body: "**Observe** the sky and connect what you see to the weather: dark clouds -> rain coming; bright sun -> sunny day; white sky -> possibly snow.",
          },
        ],
        keyFormulas: [
          { name: "Sky/weather", statement: "Clouds->rain, Sun->sunny, Wind->moving air, Snow->cold." },
        ],
        workedExample: {
          problem: "You see dark gray clouds gathering. What weather might be coming?",
          solution: "**Rain** — dark clouds often mean rain is coming.",
        },
      },
      questions: [
        {
          id: "s0-u2-weather-sky-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Dark clouds in the sky often mean...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sunny day"
                    },
                    {
                              "id": "b",
                              "text": "rain might come"
                    },
                    {
                              "id": "c",
                              "text": "snow always"
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
                              "statement": "Dark clouds often mean rain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dark clouds often mean rain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rain might come**",
          "commonErrors": [
                    "Thinks clouds mean sun."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bright sun in a clear sky means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rain"
                    },
                    {
                              "id": "b",
                              "text": "sunny weather"
                    },
                    {
                              "id": "c",
                              "text": "snow"
                    },
                    {
                              "id": "d",
                              "text": "storm"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Bright sun + clear sky = sunny."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bright sun + clear sky = sunny.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sunny**",
          "commonErrors": [
                    "Picks wrong weather."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look at today's sky. What weather does it suggest? Explain how the sky tells you.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sky/weather",
                              "statement": "Sky observation -> weather prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes sky + connects to weather.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'I see clouds, so it might rain.'**",
          "commonErrors": [
                    "Cannot connect.",
                    "No observation."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Wind' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water falling"
                    },
                    {
                              "id": "b",
                              "text": "moving air"
                    },
                    {
                              "id": "c",
                              "text": "a cloud"
                    },
                    {
                              "id": "d",
                              "text": "the sun"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wind = moving air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wind = moving air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**moving air**",
          "commonErrors": [
                    "Confuses with rain."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe today's sky and predict the weather. How does the sky help you know?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sky/weather",
                              "statement": "Describe sky + predict weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes sky.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Predicts weather + explains.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Gray clouds -> rain likely.'**",
          "commonErrors": [
                    "Cannot predict.",
                    "No explanation."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "White or gray mass in sky."
                    },
                    {
                              "id": "b",
                              "text": "Sky and air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Gives light and warmth."
                    },
                    {
                              "id": "d",
                              "text": "Water falling from clouds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Sky and air conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Sky and air conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Sky and air conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloud\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gives light and warmth."
                    },
                    {
                              "id": "b",
                              "text": "Water falling from clouds."
                    },
                    {
                              "id": "c",
                              "text": "Moving air."
                    },
                    {
                              "id": "d",
                              "text": "White or gray mass in sky."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cloud\" means White or gray mass in sky."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cloud\" means White or gray mass in sky.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cloud** = White or gray mass in sky.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-weather-sky-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falling from clouds."
                    },
                    {
                              "id": "b",
                              "text": "Gives light and warmth."
                    },
                    {
                              "id": "c",
                              "text": "Moving air."
                    },
                    {
                              "id": "d",
                              "text": "Frozen rain."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Gives light and warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Gives light and warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Gives light and warmth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
