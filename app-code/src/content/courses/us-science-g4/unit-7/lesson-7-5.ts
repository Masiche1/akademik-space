import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "sci4-u7-lesson-7-5",
  code: "7-5",
  title: "Water Cycle and Weather Review",
  goal: "I CAN use all water cycle and weather skills.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Water cycle", definition: "Water movement." },
    { term: "Evaporation", definition: "Water -> vapor." },
    { term: "Condensation", definition: "Vapor -> droplets." },
    { term: "Precipitation", definition: "Water falls." },
    { term: "Weather", definition: "Current conditions." },
    { term: "Climate", definition: "Long-term." },
    { term: "Severe weather", definition: "Dangerous." },
    { term: "Safety", definition: "Protect yourself." },
  ],
  concepts: [
    {
      id: "sci4-u7-weather-review",
      title: "Water cycle and weather review",
      skill: "Combine water cycle, weather patterns and severe weather.",
      lesson: {
        sections: [
          {
            heading: "All weather skills",
            body: "Explain **water cycle**, **weather vs climate**, **weather patterns**, and **severe weather safety**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand Earth's water and atmosphere.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Water cycle + weather + severe = complete understanding." },
        ],
        workedExample: {
          problem: "Use all weather skills.",
          solution: "All skills = complete weather understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u7-weather-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weather skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only water cycle"
                    },
                    {
                              "id": "b",
                              "text": "water cycle, weather, severe"
                    },
                    {
                              "id": "c",
                              "text": "only weather"
                    },
                    {
                              "id": "d",
                              "text": "only severe"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All weather skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All weather skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "water cycle, weather, severe",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain the water cycle, describe weather vs climate, identify weather patterns, and describe severe weather safety.",
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
                                                  "All weather",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All weather",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Evap->cond->precip; weather=current, climate=long-term; temp+precip+wind; tornado=shelter.'**"
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Weather is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's pretty"
                    },
                    {
                              "id": "b",
                              "text": "it affects our daily lives and safety"
                    },
                    {
                              "id": "c",
                              "text": "it's math"
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
                              "statement": "Affects lives/safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Affects lives/safety.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it affects our daily lives and safety",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water -> vapor."
                    },
                    {
                              "id": "b",
                              "text": "Water movement."
                    },
                    {
                              "id": "c",
                              "text": "Vapor -> droplets."
                    },
                    {
                              "id": "d",
                              "text": "Water falls."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water cycle\" means Water movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water cycle\" means Water movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water cycle** = Water movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evaporation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vapor -> droplets."
                    },
                    {
                              "id": "b",
                              "text": "Water falls."
                    },
                    {
                              "id": "c",
                              "text": "Current conditions."
                    },
                    {
                              "id": "d",
                              "text": "Water -> vapor."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Evaporation\" means Water -> vapor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evaporation\" means Water -> vapor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Evaporation** = Water -> vapor.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Condensation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falls."
                    },
                    {
                              "id": "b",
                              "text": "Vapor -> droplets."
                    },
                    {
                              "id": "c",
                              "text": "Current conditions."
                    },
                    {
                              "id": "d",
                              "text": "Long-term."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Condensation\" means Vapor -> droplets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Condensation\" means Vapor -> droplets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Condensation** = Vapor -> droplets.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Precipitation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Current conditions."
                    },
                    {
                              "id": "b",
                              "text": "Long-term."
                    },
                    {
                              "id": "c",
                              "text": "Dangerous."
                    },
                    {
                              "id": "d",
                              "text": "Water falls."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Precipitation\" means Water falls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Precipitation\" means Water falls.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Precipitation** = Water falls.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-weather-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Long-term."
                    },
                    {
                              "id": "b",
                              "text": "Current conditions."
                    },
                    {
                              "id": "c",
                              "text": "Dangerous."
                    },
                    {
                              "id": "d",
                              "text": "Protect yourself."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Current conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Current conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Current conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
