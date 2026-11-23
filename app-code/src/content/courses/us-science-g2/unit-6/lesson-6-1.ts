import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "sci2-u6-lesson-6-1",
  code: "6-1",
  title: "Types of Weather",
  goal: "I CAN describe different types of weather.",
  standards: ["NGSS 2-ESS1-1"],
  vocabulary: [
    { term: "Weather", definition: "Conditions outside." },
    { term: "Sunny", definition: "Bright with sun." },
    { term: "Cloudy", definition: "Covered with clouds." },
    { term: "Rainy", definition: "Water falling." },
    { term: "Snowy", definition: "Frozen water falling." },
    { term: "Windy", definition: "Air moving fast." },
    { term: "Storm", definition: "Severe weather." },
    { term: "Temperature", definition: "How hot or cold." },
    { term: "Season", definition: "Time of year." },
    { term: "Forecast", definition: "Weather prediction." },
  ],
  concepts: [
    {
      id: "sci2-u6-weather-types",
      title: "Types of weather",
      skill: "Describe different types of weather and their characteristics.",
      lesson: {
        sections: [
          {
            heading: "Weather types",
            body: "Weather includes **sunny**, **cloudy**, **rainy**, **snowy**, **windy**, and **stormy** conditions. Weather changes from day to day and season to season.",
          },
          {
            heading: "Weather vs climate",
            body: "**Weather** is what happens day to day; **climate** is the usual weather pattern over a long time.",
          },
        ],
        keyFormulas: [
          { name: "Weather types", statement: "Sunny, cloudy, rainy, snowy, windy, stormy = types of weather." },
        ],
        workedExample: {
          problem: "What type of weather is it when water falls from clouds?",
          solution: "It's **rainy** (or snowy if frozen).",
        },
      },
      questions: [
        {
          id: "sci2-u6-weather-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weather' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a season"
                    },
                    {
                              "id": "b",
                              "text": "conditions outside on a given day"
                    },
                    {
                              "id": "c",
                              "text": "a climate"
                    },
                    {
                              "id": "d",
                              "text": "a forecast only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weather = daily conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather = daily conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**daily conditions**",
          "commonErrors": [
                    "Confuses with climate."
          ]
},
        },
        {
          id: "sci2-u6-weather-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a type of weather?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spring"
                    },
                    {
                              "id": "b",
                              "text": "rainy"
                    },
                    {
                              "id": "c",
                              "text": "Monday"
                    },
                    {
                              "id": "d",
                              "text": "January"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rainy is weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rainy is weather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rainy**",
          "commonErrors": [
                    "Picks season/time."
          ]
},
        },
        {
          id: "sci2-u6-weather-types-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe three types of weather and what you see/feel in each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather types",
                              "statement": "Sunny, rainy, windy etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3 types.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny: bright. Rainy: water falling. Windy: air moving.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Fewer than 3."
          ]
},
        },
        {
          id: "sci2-u6-weather-types-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Temperature' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wind speed"
                    },
                    {
                              "id": "b",
                              "text": "how hot or cold it is"
                    },
                    {
                              "id": "c",
                              "text": "rain amount"
                    },
                    {
                              "id": "d",
                              "text": "cloud type"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Temperature = hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature = hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**hot or cold**",
          "commonErrors": [
                    "Confuses with wind."
          ]
},
        },
        {
          id: "sci2-u6-weather-types-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare sunny and rainy weather. How do they feel different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather types",
                              "statement": "Sunny vs rainy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes sunny.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes rainy.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny: warm, bright. Rainy: wet, cool.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same description."
          ]
},
        },
        {
          id: "sci2-u6-weather-types-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bright with sun."
                    },
                    {
                              "id": "b",
                              "text": "Conditions outside."
                    },
                    {
                              "id": "c",
                              "text": "Covered with clouds."
                    },
                    {
                              "id": "d",
                              "text": "Water falling."
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
          id: "sci2-u6-weather-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunny\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Covered with clouds."
                    },
                    {
                              "id": "b",
                              "text": "Water falling."
                    },
                    {
                              "id": "c",
                              "text": "Frozen water falling."
                    },
                    {
                              "id": "d",
                              "text": "Bright with sun."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunny\" means Bright with sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunny\" means Bright with sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunny** = Bright with sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-types-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloudy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falling."
                    },
                    {
                              "id": "b",
                              "text": "Covered with clouds."
                    },
                    {
                              "id": "c",
                              "text": "Frozen water falling."
                    },
                    {
                              "id": "d",
                              "text": "Air moving fast."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cloudy\" means Covered with clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cloudy\" means Covered with clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cloudy** = Covered with clouds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
