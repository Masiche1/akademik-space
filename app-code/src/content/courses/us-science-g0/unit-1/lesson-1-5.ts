import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "s0-u1-lesson-1-5",
  code: "1-5",
  title: "Weather Review",
  goal: "I CAN observe, describe, name seasons and notice weather patterns.",
  standards: ["K-ESS2-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Weather", definition: "Sky and air conditions." },
    { term: "Observe", definition: "Watch carefully." },
    { term: "Describe", definition: "Tell what it is like." },
    { term: "Season", definition: "Time of year." },
    { term: "Pattern", definition: "Repeating event." },
    { term: "Sunny", definition: "Bright sun." },
    { term: "Rainy", definition: "Water falling." },
    { term: "Windy", definition: "Air moving." },
  ],
  concepts: [
    {
      id: "s0-u1-weather-review",
      title: "Weather review",
      skill: "Combine observing, describing, seasons and patterns.",
      lesson: {
        sections: [
          {
            heading: "All about weather",
            body: "Weather is what the sky/air is like. We **observe** it, **describe** it with words, notice **seasons** (spring, summer, fall, winter), and find **patterns** over time.",
          },
          {
            heading: "Put it together",
            body: "Look outside, describe the weather, name the season, and think about patterns.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Observe + describe + seasons + patterns = understanding weather." },
        ],
        workedExample: {
          problem: "Describe today's weather, name the season, and think of a pattern.",
          solution: "Weather: sunny/windy; Season: summer; Pattern: hot afternoons.",
        },
      },
      questions: [
        {
          id: "s0-u1-weather-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weather skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only temperature"
                    },
                    {
                              "id": "b",
                              "text": "observe, describe, seasons, patterns"
                    },
                    {
                              "id": "c",
                              "text": "only rain"
                    },
                    {
                              "id": "d",
                              "text": "only sun"
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
          "finalAnswer": "**all weather skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "s0-u1-weather-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe today's weather, name the current season, and describe one weather pattern you have noticed.",
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
                                                  "Describe + season + pattern."
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
                                                  "Describe + season + pattern."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Sunny and warm; Summer; hot afternoons repeat.'**"
          ]
},
        },
        {
          id: "s0-u1-weather-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The four seasons are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spring, summer, fall, winter"
                    },
                    {
                              "id": "b",
                              "text": "January, February, March"
                    },
                    {
                              "id": "c",
                              "text": "morning, afternoon, night"
                    },
                    {
                              "id": "d",
                              "text": "rain, snow, wind, sun"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Spring, summer, fall, winter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spring, summer, fall, winter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**spring, summer, fall, winter**",
          "commonErrors": [
                    "Picks wrong list."
          ]
},
        },
        {
          id: "s0-u1-weather-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Watch carefully."
                    },
                    {
                              "id": "b",
                              "text": "Sky and air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "d",
                              "text": "Time of year."
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
          id: "s0-u1-weather-review-q5",
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
                              "text": "Time of year."
                    },
                    {
                              "id": "c",
                              "text": "Repeating event."
                    },
                    {
                              "id": "d",
                              "text": "Watch carefully."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Observe\" means Watch carefully."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Observe\" means Watch carefully.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Observe** = Watch carefully.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-weather-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Describe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Time of year."
                    },
                    {
                              "id": "b",
                              "text": "Tell what it is like."
                    },
                    {
                              "id": "c",
                              "text": "Repeating event."
                    },
                    {
                              "id": "d",
                              "text": "Bright sun."
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
        {
          id: "s0-u1-weather-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeating event."
                    },
                    {
                              "id": "b",
                              "text": "Bright sun."
                    },
                    {
                              "id": "c",
                              "text": "Water falling."
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
          id: "s0-u1-weather-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bright sun."
                    },
                    {
                              "id": "b",
                              "text": "Repeating event."
                    },
                    {
                              "id": "c",
                              "text": "Water falling."
                    },
                    {
                              "id": "d",
                              "text": "Air moving."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Repeating event."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Repeating event.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Repeating event.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
