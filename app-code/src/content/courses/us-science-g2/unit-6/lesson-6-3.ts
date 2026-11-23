import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "sci2-u6-lesson-6-3",
  code: "6-3",
  title: "Weather Patterns",
  goal: "I CAN describe patterns in weather over time.",
  standards: ["NGSS 2-ESS1-1"],
  vocabulary: [
    { term: "Pattern", definition: "Repeats over time." },
    { term: "Forecast", definition: "Weather prediction." },
    { term: "Cloud", definition: "Made of water drops." },
    { term: "Precipitation", definition: "Rain, snow, hail." },
    { term: "Evaporate", definition: "Water to gas." },
    { term: "Condense", definition: "Gas to liquid." },
    { term: "Cycle", definition: "Repeats." },
    { term: "Observe", definition: "Watch carefully." },
    { term: "Record", definition: "Write down data." },
    { term: "Predict", definition: "Guess what comes next." },
  ],
  concepts: [
    {
      id: "sci2-u6-weather-patterns",
      title: "Weather patterns",
      skill: "Describe patterns in weather and how to predict them.",
      lesson: {
        sections: [
          {
            heading: "Weather patterns",
            body: "Weather follows **patterns** — it **changes** but in predictable ways. **Clouds** form when water **evaporates** and **condenses**. **Precipitation** (rain, snow) falls when clouds get heavy.",
          },
          {
            heading: "Predicting weather",
            body: "We can **predict** weather by **observing** patterns: dark clouds often mean rain; wind shifts can signal storms. A **forecast** uses these observations.",
          },
        ],
        keyFormulas: [
          { name: "Weather patterns", statement: "Evaporate -> condense -> clouds -> precipitation = water cycle." },
        ],
        workedExample: {
          problem: "Why does rain fall from clouds?",
          solution: "Water **evaporates**, **condenses** into clouds, and falls as **precipitation** when heavy.",
        },
      },
      questions: [
        {
          id: "sci2-u6-weather-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Precipitation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "evaporation"
                    },
                    {
                              "id": "b",
                              "text": "rain, snow, or hail"
                    },
                    {
                              "id": "c",
                              "text": "clouds"
                    },
                    {
                              "id": "d",
                              "text": "wind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Precipitation = rain/snow/hail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Precipitation = rain/snow/hail.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rain/snow/hail**",
          "commonErrors": [
                    "Confuses with evaporation."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dark clouds often mean...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sunny"
                    },
                    {
                              "id": "b",
                              "text": "rain is coming"
                    },
                    {
                              "id": "c",
                              "text": "snow"
                    },
                    {
                              "id": "d",
                              "text": "wind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dark clouds = rain likely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dark clouds = rain likely.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rain**",
          "commonErrors": [
                    "Picks wrong prediction."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the water cycle: evaporation, condensation, precipitation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather patterns",
                              "statement": "Evaporate -> condense -> precipitate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Water evaporates, condenses into clouds, falls as rain.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing steps."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Condensation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "liquid to gas"
                    },
                    {
                              "id": "b",
                              "text": "gas to liquid"
                    },
                    {
                              "id": "c",
                              "text": "solid to liquid"
                    },
                    {
                              "id": "d",
                              "text": "liquid to solid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Condensation = gas to liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Condensation = gas to liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**gas to liquid**",
          "commonErrors": [
                    "Confuses with evaporation."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Observe the sky today. Describe clouds, predict what weather might come.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather patterns",
                              "statement": "Observe + predict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes clouds.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Makes prediction.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dark clouds -> might rain.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "No prediction."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weather prediction."
                    },
                    {
                              "id": "b",
                              "text": "Repeats over time."
                    },
                    {
                              "id": "c",
                              "text": "Made of water drops."
                    },
                    {
                              "id": "d",
                              "text": "Rain, snow, hail."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Repeats over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Repeats over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Repeats over time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Forecast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Made of water drops."
                    },
                    {
                              "id": "b",
                              "text": "Rain, snow, hail."
                    },
                    {
                              "id": "c",
                              "text": "Water to gas."
                    },
                    {
                              "id": "d",
                              "text": "Weather prediction."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Forecast\" means Weather prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Forecast\" means Weather prediction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Forecast** = Weather prediction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloud\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rain, snow, hail."
                    },
                    {
                              "id": "b",
                              "text": "Made of water drops."
                    },
                    {
                              "id": "c",
                              "text": "Water to gas."
                    },
                    {
                              "id": "d",
                              "text": "Gas to liquid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cloud\" means Made of water drops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cloud\" means Made of water drops.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cloud** = Made of water drops.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
