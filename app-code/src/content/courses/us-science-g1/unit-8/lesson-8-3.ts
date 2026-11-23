import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "s1-u8-lesson-8-3",
  code: "8-3",
  title: "Earth Science Review",
  goal: "I CAN review weather, seasons, sun/moon/stars and patterns.",
  standards: ["1-ESS1-1", "1-ESS1-2"],
  vocabulary: [
    { term: "Weather", definition: "Sky/air conditions." },
    { term: "Season", definition: "Time of year." },
    { term: "Sun", definition: "Daily light/heat." },
    { term: "Moon", definition: "Monthly phases." },
    { term: "Star", definition: "Night light." },
    { term: "Pattern", definition: "Regular change." },
    { term: "Day", definition: "Sun up." },
    { term: "Night", definition: "Sun down." },
  ],
  concepts: [
    {
      id: "s1-u8-review-earth",
      title: "Earth science review",
      skill: "Combine weather, seasons, day/night and sun/moon/stars patterns.",
      lesson: {
        sections: [
          {
            heading: "All earth science",
            body: "**Weather** has types and tools. **Seasons** cycle. **Day/night** alternates daily. **Sun/moon/stars** follow patterns.",
          },
          {
            heading: "Put it together",
            body: "Observe and describe all earth science patterns.",
          },
        ],
        keyFormulas: [
          { name: "Earth science", statement: "Weather + seasons + day/night + sun/moon/stars = earth science." },
        ],
        workedExample: {
          problem: "Describe earth science: weather, seasons, day/night, sky patterns.",
          solution: "Weather types + tools; 4 seasons; day/night; sun daily/moon monthly/stars nightly.",
        },
      },
      questions: [
        {
          id: "s1-u8-review-earth-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth science includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only weather"
                    },
                    {
                              "id": "b",
                              "text": "weather, seasons, day/night, sun/moon/stars"
                    },
                    {
                              "id": "c",
                              "text": "only seasons"
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
          id: "s1-u8-review-earth-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe all earth science patterns: weather types, seasons, day/night, and sun/moon/stars.",
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
                                                  "Earth science",
                                                  "All patterns."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Earth science",
                                                  "All patterns."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Covers all patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Sunny/rainy; spring/summer/fall/winter; day/night; sun daily/moon monthly/stars nightly.'**"
          ]
},
        },
        {
          id: "s1-u8-review-earth-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The moon's phases repeat about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "daily"
                    },
                    {
                              "id": "b",
                              "text": "monthly"
                    },
                    {
                              "id": "c",
                              "text": "yearly"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Monthly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Monthly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**monthly**",
          "commonErrors": [
                    "Picks wrong frequency."
          ]
},
        },
        {
          id: "s1-u8-review-earth-q4",
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
                              "text": "Sky/air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Daily light/heat."
                    },
                    {
                              "id": "d",
                              "text": "Monthly phases."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Sky/air conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Sky/air conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Sky/air conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-earth-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Daily light/heat."
                    },
                    {
                              "id": "b",
                              "text": "Monthly phases."
                    },
                    {
                              "id": "c",
                              "text": "Night light."
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
          id: "s1-u8-review-earth-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Monthly phases."
                    },
                    {
                              "id": "b",
                              "text": "Daily light/heat."
                    },
                    {
                              "id": "c",
                              "text": "Night light."
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
                              "statement": "\"Sun\" means Daily light/heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Daily light/heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Daily light/heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-earth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Night light."
                    },
                    {
                              "id": "b",
                              "text": "Regular change."
                    },
                    {
                              "id": "c",
                              "text": "Sun up."
                    },
                    {
                              "id": "d",
                              "text": "Monthly phases."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Monthly phases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Monthly phases.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Monthly phases.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-earth-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Regular change."
                    },
                    {
                              "id": "b",
                              "text": "Night light."
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
                              "statement": "\"Star\" means Night light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means Night light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = Night light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
