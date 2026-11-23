import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "sci2-u3-lesson-3-5",
  code: "3-5",
  title: "Light and Sound Review",
  goal: "I CAN describe light travel, reflection, vibration and uses.",
  standards: ["NGSS 2-PS4-1", "NGSS 2-PS4-2", "NGSS 2-PS4-3"],
  vocabulary: [
    { term: "Light", definition: "What lets us see." },
    { term: "Reflect", definition: "Bounce off." },
    { term: "Mirror", definition: "Reflects clearly." },
    { term: "Sound", definition: "What we hear." },
    { term: "Vibration", definition: "Creates sound." },
    { term: "Loud", definition: "Strong sound." },
    { term: "Quiet", definition: "Soft sound." },
    { term: "Use", definition: "How we use it." },
  ],
  concepts: [
    {
      id: "sci2-u3-light-sound-review",
      title: "Light and sound review",
      skill: "Combine light travel, reflection, vibration and uses.",
      lesson: {
        sections: [
          {
            heading: "All light/sound skills",
            body: "Light travels **straight**, **reflects** off surfaces, and is used to **see** and **signal**. Sound is made by **vibrations**, can be **loud** or **quiet**, and is used to **hear** and **warn**.",
          },
          {
            heading: "Put it together",
            body: "Describe how light and sound work and how we use them.",
          },
        ],
        keyFormulas: [
          { name: "Light/sound review", statement: "Light travel + reflection + vibration + uses = all skills." },
        ],
        workedExample: {
          problem: "Explain how a flashlight works and how a drum makes sound.",
          solution: "Flashlight: light source + travels straight. Drum: vibration creates sound.",
        },
      },
      questions: [
        {
          id: "sci2-u3-light-sound-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light and sound skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only colors"
                    },
                    {
                              "id": "b",
                              "text": "travel, reflection, vibration, uses"
                    },
                    {
                              "id": "c",
                              "text": "only sounds"
                    },
                    {
                              "id": "d",
                              "text": "only lights"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All light/sound skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All light/sound skills.",
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
          id: "sci2-u3-light-sound-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how light travels, how it reflects, and how sound is made.",
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
                                                  "All light/sound",
                                                  "Light travel + reflection + vibration."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All light/sound",
                                                  "Light travel + reflection + vibration."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all three.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Light travels straight, reflects off surfaces; sound made by vibrations.'**"
          ]
},
        },
        {
          id: "sci2-u3-light-sound-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is made by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light"
                    },
                    {
                              "id": "b",
                              "text": "vibration"
                    },
                    {
                              "id": "c",
                              "text": "color"
                    },
                    {
                              "id": "d",
                              "text": "heat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Vibration creates sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vibration creates sound.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**vibration**",
          "commonErrors": [
                    "Picks wrong cause."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bounce off."
                    },
                    {
                              "id": "b",
                              "text": "What lets us see."
                    },
                    {
                              "id": "c",
                              "text": "Reflects clearly."
                    },
                    {
                              "id": "d",
                              "text": "What we hear."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means What lets us see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means What lets us see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = What lets us see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reflect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reflects clearly."
                    },
                    {
                              "id": "b",
                              "text": "What we hear."
                    },
                    {
                              "id": "c",
                              "text": "Creates sound."
                    },
                    {
                              "id": "d",
                              "text": "Bounce off."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reflect\" means Bounce off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reflect\" means Bounce off.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reflect** = Bounce off.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mirror\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we hear."
                    },
                    {
                              "id": "b",
                              "text": "Reflects clearly."
                    },
                    {
                              "id": "c",
                              "text": "Creates sound."
                    },
                    {
                              "id": "d",
                              "text": "Strong sound."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mirror\" means Reflects clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mirror\" means Reflects clearly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mirror** = Reflects clearly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Creates sound."
                    },
                    {
                              "id": "b",
                              "text": "Strong sound."
                    },
                    {
                              "id": "c",
                              "text": "Soft sound."
                    },
                    {
                              "id": "d",
                              "text": "What we hear."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sound\" means What we hear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means What we hear.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = What we hear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strong sound."
                    },
                    {
                              "id": "b",
                              "text": "Creates sound."
                    },
                    {
                              "id": "c",
                              "text": "Soft sound."
                    },
                    {
                              "id": "d",
                              "text": "How we use it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vibration\" means Creates sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vibration\" means Creates sound.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vibration** = Creates sound.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
