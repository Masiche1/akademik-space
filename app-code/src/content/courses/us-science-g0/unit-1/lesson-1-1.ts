import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "s0-u1-lesson-1-1",
  code: "1-1",
  title: "Observing Weather",
  goal: "I CAN observe and describe the weather each day.",
  standards: ["K-ESS2-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Weather", definition: "What the sky and air are like." },
    { term: "Observe", definition: "Watch carefully and notice." },
    { term: "Describe", definition: "Tell what it is like." },
    { term: "Sunny", definition: "Bright with the sun out." },
    { term: "Cloudy", definition: "Many clouds in the sky." },
    { term: "Rainy", definition: "Water falling from clouds." },
    { term: "Windy", definition: "Air moving fast." },
    { term: "Snowy", definition: "Frozen water falling." },
  ],
  concepts: [
    {
      id: "s0-u1-weather-observe",
      title: "Observing weather",
      skill: "Observe and describe daily weather conditions.",
      lesson: {
        sections: [
          {
            heading: "What is weather?",
            body: "**Weather** is what the sky and air are like — sunny, cloudy, rainy, windy, snowy. It can change from day to day.",
          },
          {
            heading: "How to observe",
            body: "To **observe** weather, look outside and **describe** what you see: Is the sun out? Are there clouds? Is it raining or snowing? Is the wind blowing?",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Sunny, cloudy, rainy, windy, snowy — describe what you see and feel." },
        ],
        workedExample: {
          problem: "Describe today's weather: sun is out, a few clouds, no rain.",
          solution: "It is **sunny with a few clouds** — bright sun, some clouds, dry.",
        },
      },
      questions: [
        {
          id: "s0-u1-weather-observe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weather' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the temperature only"
                    },
                    {
                              "id": "b",
                              "text": "what the sky and air are like"
                    },
                    {
                              "id": "c",
                              "text": "the season only"
                    },
                    {
                              "id": "d",
                              "text": "the time of day"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weather = sky and air conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather = sky and air conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sky and air**",
          "commonErrors": [
                    "Thinks weather is just temperature."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the sun is shining and there are no clouds, the weather is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cloudy"
                    },
                    {
                              "id": "b",
                              "text": "sunny"
                    },
                    {
                              "id": "c",
                              "text": "rainy"
                    },
                    {
                              "id": "d",
                              "text": "snowy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sun out + no clouds = sunny."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun out + no clouds = sunny.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sunny**",
          "commonErrors": [
                    "Picks wrong condition."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look outside and describe today's weather. Use at least two weather words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe weather",
                              "statement": "Describe with weather words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes weather with 2+ words.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'It is sunny and windy.'**",
          "commonErrors": [
                    "Vague description.",
                    "Not weather."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Rainy' weather means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sun is out"
                    },
                    {
                              "id": "b",
                              "text": "water is falling from clouds"
                    },
                    {
                              "id": "c",
                              "text": "snow is falling"
                    },
                    {
                              "id": "d",
                              "text": "wind is blowing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rainy = water falling from clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rainy = water falling from clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water falling**",
          "commonErrors": [
                    "Confuses with snowy."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe two different weather days you have seen. What was different about each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Describe weather",
                              "statement": "Two weather descriptions + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two weather conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names the difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny day: bright, warm. Rainy day: dark, wet.'**",
          "commonErrors": [
                    "Same description twice.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Watch carefully and notice."
                    },
                    {
                              "id": "b",
                              "text": "What the sky and air are like."
                    },
                    {
                              "id": "c",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "d",
                              "text": "Bright with the sun out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means What the sky and air are like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means What the sky and air are like.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = What the sky and air are like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Observe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "b",
                              "text": "Bright with the sun out."
                    },
                    {
                              "id": "c",
                              "text": "Many clouds in the sky."
                    },
                    {
                              "id": "d",
                              "text": "Watch carefully and notice."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Observe\" means Watch carefully and notice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Observe\" means Watch carefully and notice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Observe** = Watch carefully and notice.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-weather-observe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Describe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bright with the sun out."
                    },
                    {
                              "id": "b",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "c",
                              "text": "Many clouds in the sky."
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
                              "statement": "\"Describe\" means Tell what it is like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Describe\" means Tell what it is like.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Describe** = Tell what it is like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
