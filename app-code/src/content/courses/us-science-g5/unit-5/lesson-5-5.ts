import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "sci5-u5-lesson-5-5",
  code: "5-5",
  title: "Weather and Climate Review",
  goal: "I CAN use all weather and climate skills.",
  standards: ["ESS2.C", "ESS2.D", "ESS2.E"],
  vocabulary: [
    { term: "Weather", definition: "Short-term." },
    { term: "Climate", definition: "Long-term." },
    { term: "Water cycle", definition: "Water movement." },
    { term: "System", definition: "Interacting parts." },
    { term: "Atmosphere", definition: "Air." },
    { term: "Hydrosphere", definition: "Water." },
    { term: "Latitude", definition: "Distance from equator." },
    { term: "Zone", definition: "Climate region." },
  ],
  concepts: [
    {
      id: "sci5-u5-weather-climate-review",
      title: "Weather and climate review",
      skill: "Combine weather, water cycle, Earth's systems and climate zones.",
      lesson: {
        sections: [
          {
            heading: "All weather/climate skills",
            body: "Describe **weather**, **water cycle**, **Earth's systems**, and **climate zones**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand Earth's systems.",
          },
        ],
        keyFormulas: [
          { name: "Weather/climate", statement: "Weather + water cycle + systems + zones = all skills." },
        ],
        workedExample: {
          problem: "Use all weather and climate skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u5-weather-climate-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weather/climate skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only weather"
                    },
                    {
                              "id": "b",
                              "text": "weather, water cycle, systems, zones"
                    },
                    {
                              "id": "c",
                              "text": "only climate"
                    },
                    {
                              "id": "d",
                              "text": "only water cycle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "weather, water cycle, systems, zones",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u5-weather-climate-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe today's weather, explain the water cycle, identify Earth's systems, and name two climate zones.",
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
                                                  "All weather/climate",
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
                                                  "All weather/climate",
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
                    "**e.g., 'Weather: 70°F; Water cycle: evap->cond->precip; Systems: atmosphere/hydrosphere/lithosphere/biosphere; Zones: tropical/polar.'**"
          ]
},
        },
        {
          id: "sci5-u5-weather-climate-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding Earth's systems helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only predict"
                    },
                    {
                              "id": "b",
                              "text": "understand how our planet works and affects our lives"
                    },
                    {
                              "id": "c",
                              "text": "only test"
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
                              "statement": "Understand planet/lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand planet/lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand how our planet works and affects our lives",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci5-u5-weather-climate-review-q4",
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
                              "text": "Short-term."
                    },
                    {
                              "id": "c",
                              "text": "Water movement."
                    },
                    {
                              "id": "d",
                              "text": "Interacting parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Short-term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Short-term.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Short-term.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-weather-climate-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water movement."
                    },
                    {
                              "id": "b",
                              "text": "Interacting parts."
                    },
                    {
                              "id": "c",
                              "text": "Air."
                    },
                    {
                              "id": "d",
                              "text": "Long-term."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Climate\" means Long-term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climate\" means Long-term.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Climate** = Long-term.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-weather-climate-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Interacting parts."
                    },
                    {
                              "id": "b",
                              "text": "Water movement."
                    },
                    {
                              "id": "c",
                              "text": "Air."
                    },
                    {
                              "id": "d",
                              "text": "Water."
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
          id: "sci5-u5-weather-climate-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"System\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Air."
                    },
                    {
                              "id": "b",
                              "text": "Water."
                    },
                    {
                              "id": "c",
                              "text": "Distance from equator."
                    },
                    {
                              "id": "d",
                              "text": "Interacting parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"System\" means Interacting parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"System\" means Interacting parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**System** = Interacting parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-weather-climate-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Atmosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water."
                    },
                    {
                              "id": "b",
                              "text": "Air."
                    },
                    {
                              "id": "c",
                              "text": "Distance from equator."
                    },
                    {
                              "id": "d",
                              "text": "Climate region."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Atmosphere\" means Air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Atmosphere\" means Air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Atmosphere** = Air.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
