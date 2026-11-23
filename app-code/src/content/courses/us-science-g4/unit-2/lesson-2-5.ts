import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "sci4-u2-lesson-2-5",
  code: "2-5",
  title: "Waves and Energy Review",
  goal: "I CAN use all wave and energy skills.",
  standards: ["PS4.A", "PS4.B", "PS4.C"],
  vocabulary: [
    { term: "Wave", definition: "Energy moving." },
    { term: "Light", definition: "Visible energy." },
    { term: "Sound", definition: "Vibrations." },
    { term: "Reflect", definition: "Bounce." },
    { term: "Refract", definition: "Bend." },
    { term: "Vibration", definition: "Motion." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Transform", definition: "Change form." },
  ],
  concepts: [
    {
      id: "sci4-u2-waves-review",
      title: "Waves and energy review",
      skill: "Combine wave basics, light, sound and energy transfer.",
      lesson: {
        sections: [
          {
            heading: "All wave skills",
            body: "Explain **waves**, **light** interactions, **sound** production, and **energy transfer/transformation**.",
          },
          {
            heading: "Put it together",
            body: "Use all wave skills to understand energy movement.",
          },
        ],
        keyFormulas: [
          { name: "Waves", statement: "Basics + light + sound + energy = complete understanding." },
        ],
        workedExample: {
          problem: "Use all wave skills.",
          solution: "All skills = complete wave understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u2-waves-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Wave skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only light"
                    },
                    {
                              "id": "b",
                              "text": "waves, light, sound, energy"
                    },
                    {
                              "id": "c",
                              "text": "only sound"
                    },
                    {
                              "id": "d",
                              "text": "only energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All wave skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All wave skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "waves, light, sound, energy",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain waves, describe light interaction with materials, explain sound production, and trace energy transfer.",
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
                                                  "All waves",
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
                                                  "All waves",
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
                    "**e.g., 'Waves=vibration; Light=reflect/refract; Sound=vibration; Energy=transfer/transform.'**"
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Waves are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're pretty"
                    },
                    {
                              "id": "b",
                              "text": "they transfer energy that powers our world"
                    },
                    {
                              "id": "c",
                              "text": "they're math"
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
                              "statement": "They power our world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They power our world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they transfer energy that powers our world",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wave\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visible energy."
                    },
                    {
                              "id": "b",
                              "text": "Energy moving."
                    },
                    {
                              "id": "c",
                              "text": "Vibrations."
                    },
                    {
                              "id": "d",
                              "text": "Bounce."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wave\" means Energy moving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wave\" means Energy moving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wave** = Energy moving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vibrations."
                    },
                    {
                              "id": "b",
                              "text": "Bounce."
                    },
                    {
                              "id": "c",
                              "text": "Bend."
                    },
                    {
                              "id": "d",
                              "text": "Visible energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Visible energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Visible energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Visible energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bounce."
                    },
                    {
                              "id": "b",
                              "text": "Vibrations."
                    },
                    {
                              "id": "c",
                              "text": "Bend."
                    },
                    {
                              "id": "d",
                              "text": "Motion."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sound\" means Vibrations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means Vibrations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = Vibrations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reflect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bend."
                    },
                    {
                              "id": "b",
                              "text": "Motion."
                    },
                    {
                              "id": "c",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "d",
                              "text": "Bounce."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reflect\" means Bounce."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reflect\" means Bounce.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reflect** = Bounce.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-waves-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Refract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Motion."
                    },
                    {
                              "id": "b",
                              "text": "Bend."
                    },
                    {
                              "id": "c",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "d",
                              "text": "Change form."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Refract\" means Bend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Refract\" means Bend.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Refract** = Bend.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
