import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "s0-u2-lesson-2-5",
  code: "2-5",
  title: "Sky Review",
  goal: "I CAN describe day/night, sun/moon/stars and weather in the sky.",
  standards: ["K-ESS1-1", "K-ESS2-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Day", definition: "Light, sun out." },
    { term: "Night", definition: "Dark, moon/stars." },
    { term: "Sun", definition: "Star giving light." },
    { term: "Moon", definition: "Orbits Earth." },
    { term: "Star", definition: "Distant light point." },
    { term: "Cloud", definition: "Sky mass." },
    { term: "Weather", definition: "Sky/air conditions." },
    { term: "Pattern", definition: "Repeating change." },
  ],
  concepts: [
    {
      id: "s0-u2-sky-review",
      title: "Sky review",
      skill: "Combine day/night, sun/moon/stars and weather observations.",
      lesson: {
        sections: [
          {
            heading: "All about the sky",
            body: "The sky shows **day** (sun, light) and **night** (moon, stars, dark). The **sun** is a star, the **moon** orbits Earth, and **weather** (clouds, rain, wind) shows in the sky.",
          },
          {
            heading: "Put it together",
            body: "Describe what you see in the sky, whether it's day or night, and what weather it suggests.",
          },
        ],
        keyFormulas: [
          { name: "Sky", statement: "Day/night + sun/moon/stars + weather = understanding the sky." },
        ],
        workedExample: {
          problem: "Describe the sky right now: day or night? What do you see? What weather?",
          solution: "Day; sun and clouds; partly cloudy.",
        },
      },
      questions: [
        {
          id: "s0-u2-sky-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The sky shows us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sun"
                    },
                    {
                              "id": "b",
                              "text": "day/night, sun/moon/stars, weather"
                    },
                    {
                              "id": "c",
                              "text": "only stars"
                    },
                    {
                              "id": "d",
                              "text": "only clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All sky observations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All sky observations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all sky skills**",
          "commonErrors": [
                    "Lists one thing."
          ]
},
        },
        {
          id: "s0-u2-sky-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the sky right now: is it day or night? What objects do you see? What weather does it suggest?",
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
                                                  "All sky",
                                                  "Day/night + objects + weather."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All sky",
                                                  "Day/night + objects + weather."
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
                    "**e.g., 'Day; sun and clouds; partly cloudy.'**"
          ]
},
        },
        {
          id: "s0-u2-sky-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At night we see...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the sun"
                    },
                    {
                              "id": "b",
                              "text": "the moon and stars"
                    },
                    {
                              "id": "c",
                              "text": "blue sky"
                    },
                    {
                              "id": "d",
                              "text": "clouds only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Night = moon + stars."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Night = moon + stars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**moon + stars**",
          "commonErrors": [
                    "Picks day objects."
          ]
},
        },
        {
          id: "s0-u2-sky-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Day\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dark, moon/stars."
                    },
                    {
                              "id": "b",
                              "text": "Light, sun out."
                    },
                    {
                              "id": "c",
                              "text": "Star giving light."
                    },
                    {
                              "id": "d",
                              "text": "Orbits Earth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Day\" means Light, sun out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Day\" means Light, sun out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Day** = Light, sun out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sky-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Night\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Star giving light."
                    },
                    {
                              "id": "b",
                              "text": "Orbits Earth."
                    },
                    {
                              "id": "c",
                              "text": "Distant light point."
                    },
                    {
                              "id": "d",
                              "text": "Dark, moon/stars."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Night\" means Dark, moon/stars."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Night\" means Dark, moon/stars.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Night** = Dark, moon/stars.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sky-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits Earth."
                    },
                    {
                              "id": "b",
                              "text": "Star giving light."
                    },
                    {
                              "id": "c",
                              "text": "Distant light point."
                    },
                    {
                              "id": "d",
                              "text": "Sky mass."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Star giving light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Star giving light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Star giving light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sky-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distant light point."
                    },
                    {
                              "id": "b",
                              "text": "Sky mass."
                    },
                    {
                              "id": "c",
                              "text": "Sky/air conditions."
                    },
                    {
                              "id": "d",
                              "text": "Orbits Earth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Orbits Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Orbits Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Orbits Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sky-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sky mass."
                    },
                    {
                              "id": "b",
                              "text": "Distant light point."
                    },
                    {
                              "id": "c",
                              "text": "Sky/air conditions."
                    },
                    {
                              "id": "d",
                              "text": "Repeating change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Star\" means Distant light point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means Distant light point.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = Distant light point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
