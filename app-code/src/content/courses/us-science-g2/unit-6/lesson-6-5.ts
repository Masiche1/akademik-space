import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "sci2-u6-lesson-6-5",
  code: "6-5",
  title: "Weather and Seasons Review",
  goal: "I CAN describe weather types, seasons, patterns and effects.",
  standards: ["NGSS 2-ESS1-1"],
  vocabulary: [
    { term: "Weather", definition: "Daily conditions." },
    { term: "Season", definition: "Time of year." },
    { term: "Pattern", definition: "Repeats." },
    { term: "Precipitation", definition: "Rain/snow." },
    { term: "Temperature", definition: "Hot/cold." },
    { term: "Affect", definition: "Influence." },
    { term: "Adapt", definition: "Change to survive." },
    { term: "Forecast", definition: "Prediction." },
  ],
  concepts: [
    {
      id: "sci2-u6-weather-review",
      title: "Weather and seasons review",
      skill: "Combine weather types, seasons, patterns and effects on living things.",
      lesson: {
        sections: [
          {
            heading: "All weather skills",
            body: "Weather has **types** (sunny, rainy, etc.), **seasons** (spring-summer-fall-winter), **patterns** (water cycle), and **effects** on living things.",
          },
          {
            heading: "Put it together",
            body: "Describe weather, seasons, patterns, and how they affect life.",
          },
        ],
        keyFormulas: [
          { name: "Weather review", statement: "Types + seasons + patterns + effects = all weather skills." },
        ],
        workedExample: {
          problem: "Describe the four seasons and how they affect plants/animals.",
          solution: "All weather skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci2-u6-weather-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weather skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rain"
                    },
                    {
                              "id": "b",
                              "text": "types, seasons, patterns, effects"
                    },
                    {
                              "id": "c",
                              "text": "only seasons"
                    },
                    {
                              "id": "d",
                              "text": "only effects"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci2-u6-weather-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe weather types, the four seasons, one weather pattern, and one effect on living things.",
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
                                                  "Types + seasons + pattern + effect."
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
                                                  "Types + seasons + pattern + effect."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Types: sunny/rainy. Seasons: 4. Pattern: water cycle. Effect: winter -> hibernate.'**"
          ]
},
        },
        {
          id: "sci2-u6-weather-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Seasons repeat because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they don't"
                    },
                    {
                              "id": "b",
                              "text": "Earth's orbit creates a yearly pattern"
                    },
                    {
                              "id": "c",
                              "text": "it's random"
                    },
                    {
                              "id": "d",
                              "text": "the sun moves"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Yearly pattern from Earth's orbit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Yearly pattern from Earth's orbit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**yearly pattern**",
          "commonErrors": [
                    "Thinks random."
          ]
},
        },
        {
          id: "sci2-u6-weather-review-q4",
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
                              "text": "Daily conditions."
                    },
                    {
                              "id": "c",
                              "text": "Repeats."
                    },
                    {
                              "id": "d",
                              "text": "Rain/snow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Daily conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Daily conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Daily conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeats."
                    },
                    {
                              "id": "b",
                              "text": "Rain/snow."
                    },
                    {
                              "id": "c",
                              "text": "Hot/cold."
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
          id: "sci2-u6-weather-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rain/snow."
                    },
                    {
                              "id": "b",
                              "text": "Repeats."
                    },
                    {
                              "id": "c",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "d",
                              "text": "Influence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Repeats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Repeats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Repeats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Precipitation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "b",
                              "text": "Influence."
                    },
                    {
                              "id": "c",
                              "text": "Change to survive."
                    },
                    {
                              "id": "d",
                              "text": "Rain/snow."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Precipitation\" means Rain/snow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Precipitation\" means Rain/snow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Precipitation** = Rain/snow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-weather-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Influence."
                    },
                    {
                              "id": "b",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "c",
                              "text": "Change to survive."
                    },
                    {
                              "id": "d",
                              "text": "Prediction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means Hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means Hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = Hot/cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
