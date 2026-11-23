import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "s1-u5-lesson-5-5",
  code: "5-5",
  title: "Weather Review",
  goal: "I CAN describe weather, use tools and explain seasons and day/night.",
  standards: ["1-ESS1-1", "1-ESS1-2"],
  vocabulary: [
    { term: "Weather", definition: "Sky and air conditions." },
    { term: "Season", definition: "Time of year." },
    { term: "Day", definition: "Sun up." },
    { term: "Night", definition: "Sun down." },
    { term: "Thermometer", definition: "Measures temp." },
    { term: "Pattern", definition: "Regular change." },
    { term: "Change", definition: "Becomes different." },
    { term: "Cycle", definition: "Repeating." },
  ],
  concepts: [
    {
      id: "s1-u5-weather-review",
      title: "Weather and seasons review",
      skill: "Combine weather types, tools, seasons and day/night patterns.",
      lesson: {
        sections: [
          {
            heading: "All weather/earth knowledge",
            body: "**Weather** has types (sunny, rainy, etc.) measured by **tools**. **Seasons** change in a cycle; **day and night** alternate every 24 hours.",
          },
          {
            heading: "Put it together",
            body: "Observe weather, use tools, describe seasons and day/night patterns.",
          },
        ],
        keyFormulas: [
          { name: "Weather/Earth", statement: "Weather types + tools + seasons + day/night = earth science." },
        ],
        workedExample: {
          problem: "Describe weather completely: types, tools, seasons, day/night.",
          solution: "Types of weather + tools + 4 seasons + day/night cycle.",
        },
      },
      questions: [
        {
          id: "s1-u5-weather-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth science knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only weather"
                    },
                    {
                              "id": "b",
                              "text": "weather types, tools, seasons, day/night"
                    },
                    {
                              "id": "c",
                              "text": "only seasons"
                    },
                    {
                              "id": "d",
                              "text": "only day/night"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All earth science topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All earth science topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all topics**",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "s1-u5-weather-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe today's weather using tools, then explain how seasons and day/night create patterns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "Weather/Earth",
                                                  "Weather + tools + seasons + day/night."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Weather/Earth",
                                                  "Weather + tools + seasons + day/night."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Covers all aspects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Today cloudy (thermometer 65F); seasons cycle; day/night every 24h.'**"
          ]
},
        },
        {
          id: "s1-u5-weather-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Seasons change because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weather is random"
                    },
                    {
                              "id": "b",
                              "text": "Earth's position causes temperature and daylight changes"
                    },
                    {
                              "id": "c",
                              "text": "the moon moves"
                    },
                    {
                              "id": "d",
                              "text": "it rains"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Earth's orbit causes seasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth's orbit causes seasons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Earth's position**",
          "commonErrors": [
                    "Thinks random."
          ]
},
        },
        {
          id: "s1-u5-weather-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Time of year."
                    },
                    {
                              "id": "b",
                              "text": "Sky and air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Sun up."
                    },
                    {
                              "id": "d",
                              "text": "Sun down."
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
          id: "s1-u5-weather-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sun up."
                    },
                    {
                              "id": "b",
                              "text": "Sun down."
                    },
                    {
                              "id": "c",
                              "text": "Measures temp."
                    },
                    {
                              "id": "d",
                              "text": "Time of year."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Season\" means Time of year."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Season\" means Time of year.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Season** = Time of year.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Day\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sun down."
                    },
                    {
                              "id": "b",
                              "text": "Sun up."
                    },
                    {
                              "id": "c",
                              "text": "Measures temp."
                    },
                    {
                              "id": "d",
                              "text": "Regular change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Day\" means Sun up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Day\" means Sun up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Day** = Sun up.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Night\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Measures temp."
                    },
                    {
                              "id": "b",
                              "text": "Regular change."
                    },
                    {
                              "id": "c",
                              "text": "Becomes different."
                    },
                    {
                              "id": "d",
                              "text": "Sun down."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Night\" means Sun down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Night\" means Sun down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Night** = Sun down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thermometer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Regular change."
                    },
                    {
                              "id": "b",
                              "text": "Measures temp."
                    },
                    {
                              "id": "c",
                              "text": "Becomes different."
                    },
                    {
                              "id": "d",
                              "text": "Repeating."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Thermometer\" means Measures temp."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Thermometer\" means Measures temp.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Thermometer** = Measures temp.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
