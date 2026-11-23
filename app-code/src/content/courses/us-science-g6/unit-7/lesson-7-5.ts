import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "sci6-u7-lesson-7-5",
  code: "7-5",
  title: "Space Review",
  goal: "I CAN use all space science skills.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Solar system", definition: "Sun + planets." },
    { term: "Planet", definition: "Orbits Sun." },
    { term: "Moon", definition: "Orbits planet." },
    { term: "Rotation", definition: "Spin." },
    { term: "Revolution", definition: "Orbit." },
    { term: "Phase", definition: "How much lit." },
    { term: "Eclipse", definition: "Shadow blocking." },
    { term: "Exploration", definition: "Space travel." },
  ],
  concepts: [
    {
      id: "sci6-u7-space-review",
      title: "Space review",
      skill: "Combine solar system, Earth's motion, moon phases, and space exploration.",
      lesson: {
        sections: [
          {
            heading: "All space skills",
            body: "Describe **solar system**, explain **Earth's motion** (rotation/revolution), **moon phases/eclipses**, and **space exploration**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand our place in the universe.",
          },
        ],
        keyFormulas: [
          { name: "Space", statement: "Solar system + Earth's motion + moon + exploration = all skills." },
        ],
        workedExample: {
          problem: "Use all space skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u7-space-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Space skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only solar system"
                    },
                    {
                              "id": "b",
                              "text": "solar system, Earth's motion, moon, exploration"
                    },
                    {
                              "id": "c",
                              "text": "only moon"
                    },
                    {
                              "id": "d",
                              "text": "only exploration"
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
          "finalAnswer": "solar system, Earth's motion, moon, exploration",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u7-space-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe solar system objects, explain Earth's rotation/revolution, describe moon phases, and explain space exploration.",
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
                                                  "All space",
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
                                                  "All space",
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
                    "**e.g., 'Sun+8 planets; Rotation=day/night, Revolution=year/seasons; Phases cycle; Rockets/satellites explore.'**"
          ]
},
        },
        {
          id: "sci6-u7-space-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Space science is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's just science"
                    },
                    {
                              "id": "b",
                              "text": "it helps us understand our place in the universe"
                    },
                    {
                              "id": "c",
                              "text": "it's only in textbooks"
                    },
                    {
                              "id": "d",
                              "text": "it's optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Understand universe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand universe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it helps us understand our place in the universe",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci6-u7-space-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solar system\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits Sun."
                    },
                    {
                              "id": "b",
                              "text": "Sun + planets."
                    },
                    {
                              "id": "c",
                              "text": "Orbits planet."
                    },
                    {
                              "id": "d",
                              "text": "Spin."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solar system\" means Sun + planets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solar system\" means Sun + planets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solar system** = Sun + planets.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-space-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Planet\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits planet."
                    },
                    {
                              "id": "b",
                              "text": "Spin."
                    },
                    {
                              "id": "c",
                              "text": "Orbit."
                    },
                    {
                              "id": "d",
                              "text": "Orbits Sun."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Planet\" means Orbits Sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Planet\" means Orbits Sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Planet** = Orbits Sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-space-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spin."
                    },
                    {
                              "id": "b",
                              "text": "Orbits planet."
                    },
                    {
                              "id": "c",
                              "text": "Orbit."
                    },
                    {
                              "id": "d",
                              "text": "How much lit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Orbits planet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Orbits planet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Orbits planet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-space-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rotation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbit."
                    },
                    {
                              "id": "b",
                              "text": "How much lit."
                    },
                    {
                              "id": "c",
                              "text": "Shadow blocking."
                    },
                    {
                              "id": "d",
                              "text": "Spin."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rotation\" means Spin."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rotation\" means Spin.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rotation** = Spin.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-space-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Revolution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How much lit."
                    },
                    {
                              "id": "b",
                              "text": "Orbit."
                    },
                    {
                              "id": "c",
                              "text": "Shadow blocking."
                    },
                    {
                              "id": "d",
                              "text": "Space travel."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Revolution\" means Orbit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Revolution\" means Orbit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Revolution** = Orbit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
