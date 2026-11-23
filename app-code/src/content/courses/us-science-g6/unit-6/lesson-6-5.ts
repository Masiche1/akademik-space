import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "sci6-u6-lesson-6-5",
  code: "6-5",
  title: "Earth Systems Review",
  goal: "I CAN use all earth system skills.",
  standards: ["ESS2.A", "ESS2.C"],
  vocabulary: [
    { term: "Geosphere", definition: "Solid Earth." },
    { term: "Hydrosphere", definition: "Water." },
    { term: "Atmosphere", definition: "Air." },
    { term: "Biosphere", definition: "Life." },
    { term: "Water cycle", definition: "Continuous process." },
    { term: "Rock cycle", definition: "Rock changes." },
    { term: "Interaction", definition: "How connected." },
    { term: "Climate", definition: "Long-term weather." },
  ],
  concepts: [
    {
      id: "sci6-u6-earth-systems-review",
      title: "Earth systems review",
      skill: "Combine Earth's systems, water cycle, rock cycle, and interactions.",
      lesson: {
        sections: [
          {
            heading: "All earth skills",
            body: "Describe **Earth's systems**, explain **water/rock cycles**, and analyze **interactions/human impact**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand our dynamic planet.",
          },
        ],
        keyFormulas: [
          { name: "Earth systems", statement: "Systems + cycles + interactions = all skills." },
        ],
        workedExample: {
          problem: "Use all earth skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u6-earth-systems-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth system skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only systems"
                    },
                    {
                              "id": "b",
                              "text": "systems, water cycle, rock cycle, interactions"
                    },
                    {
                              "id": "c",
                              "text": "only cycles"
                    },
                    {
                              "id": "d",
                              "text": "only interactions"
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
          "finalAnswer": "systems, water cycle, rock cycle, interactions",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name Earth's systems, describe water cycle stages, explain rock cycle types, and describe system interactions.",
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
                                                  "All earth",
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
                                                  "All earth",
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
                    "**e.g., 'Geosphere/hydrosphere/atmosphere/biosphere; Evaporation->condensation->precipitation->collection; Igneous/sedimentary/metamorphic; Systems interact.'**"
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth systems are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're just science"
                    },
                    {
                              "id": "b",
                              "text": "they support all life and regulate climate"
                    },
                    {
                              "id": "c",
                              "text": "they're only in textbooks"
                    },
                    {
                              "id": "d",
                              "text": "they're optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Support life/climate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Support life/climate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they support all life and regulate climate",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Geosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water."
                    },
                    {
                              "id": "b",
                              "text": "Solid Earth."
                    },
                    {
                              "id": "c",
                              "text": "Air."
                    },
                    {
                              "id": "d",
                              "text": "Life."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Geosphere\" means Solid Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Geosphere\" means Solid Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Geosphere** = Solid Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hydrosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Air."
                    },
                    {
                              "id": "b",
                              "text": "Life."
                    },
                    {
                              "id": "c",
                              "text": "Continuous process."
                    },
                    {
                              "id": "d",
                              "text": "Water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hydrosphere\" means Water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hydrosphere\" means Water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hydrosphere** = Water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Atmosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Life."
                    },
                    {
                              "id": "b",
                              "text": "Air."
                    },
                    {
                              "id": "c",
                              "text": "Continuous process."
                    },
                    {
                              "id": "d",
                              "text": "Rock changes."
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
        {
          id: "sci6-u6-earth-systems-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Biosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Continuous process."
                    },
                    {
                              "id": "b",
                              "text": "Rock changes."
                    },
                    {
                              "id": "c",
                              "text": "How connected."
                    },
                    {
                              "id": "d",
                              "text": "Life."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Biosphere\" means Life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Biosphere\" means Life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Biosphere** = Life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rock changes."
                    },
                    {
                              "id": "b",
                              "text": "Continuous process."
                    },
                    {
                              "id": "c",
                              "text": "How connected."
                    },
                    {
                              "id": "d",
                              "text": "Long-term weather."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water cycle\" means Continuous process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water cycle\" means Continuous process.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water cycle** = Continuous process.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
