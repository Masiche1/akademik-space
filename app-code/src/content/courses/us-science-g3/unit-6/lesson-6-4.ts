import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "sci3-u6-lesson-6-4",
  code: "6-4",
  title: "Light and Sound Review",
  goal: "I CAN describe light, shadows and sound energy.",
  standards: ["PS3.B", "PS4.A", "PS4.B"],
  vocabulary: [
    { term: "Light", definition: "Energy we see." },
    { term: "Shadow", definition: "Blocked light." },
    { term: "Opaque", definition: "Blocks light." },
    { term: "Sound", definition: "Energy we hear." },
    { term: "Vibration", definition: "Back-and-forth." },
    { term: "Source", definition: "Where energy comes from." },
    { term: "Reflect", definition: "Bounce back." },
    { term: "Travel", definition: "Move through." },
  ],
  concepts: [
    {
      id: "sci3-u6-light-sound-review",
      title: "Light and sound review",
      skill: "Combine light, shadows and sound energy.",
      lesson: {
        sections: [
          {
            heading: "Light and sound",
            body: "**Light** is energy we see — it travels from sources and creates **shadows** when blocked. **Sound** is energy we hear — produced by **vibrations** and travels through media.",
          },
          {
            heading: "Put it together",
            body: "Describe how light and sound work.",
          },
        ],
        keyFormulas: [
          { name: "Light+Sound", statement: "Light->see/shadows; Sound->hear/vibrations = energy forms." },
        ],
        workedExample: {
          problem: "Describe light and sound: what they are, how they travel, what they do.",
          solution: "Light: energy we see, travels, makes shadows. Sound: energy we hear, vibrations, travels through media.",
        },
      },
      questions: [
        {
          id: "sci3-u6-light-sound-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light and sound knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only light"
                    },
                    {
                              "id": "b",
                              "text": "light, shadows, sound"
                    },
                    {
                              "id": "c",
                              "text": "only sound"
                    },
                    {
                              "id": "d",
                              "text": "only shadows"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All energy skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All energy skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "light, shadows, sound",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe light and sound: what each is, how each travels, what each does.",
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
                                                  "Light+Sound",
                                                  "Light + sound descriptions."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Light+Sound",
                                                  "Light + sound descriptions."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Light: see/shadows. Sound: hear/vibrations.'**"
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's fun"
                    },
                    {
                              "id": "b",
                              "text": "it lets us see, hear, and do work"
                    },
                    {
                              "id": "c",
                              "text": "it's invisible"
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
                              "statement": "Energy lets us see, hear, do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy lets us see, hear, do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it lets us see, hear, and do work",
          "commonErrors": [
                    "Thinks energy is useless."
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Blocked light."
                    },
                    {
                              "id": "b",
                              "text": "Energy we see."
                    },
                    {
                              "id": "c",
                              "text": "Blocks light."
                    },
                    {
                              "id": "d",
                              "text": "Energy we hear."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Energy we see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Energy we see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Energy we see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shadow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Blocks light."
                    },
                    {
                              "id": "b",
                              "text": "Energy we hear."
                    },
                    {
                              "id": "c",
                              "text": "Back-and-forth."
                    },
                    {
                              "id": "d",
                              "text": "Blocked light."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shadow\" means Blocked light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shadow\" means Blocked light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shadow** = Blocked light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opaque\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy we hear."
                    },
                    {
                              "id": "b",
                              "text": "Blocks light."
                    },
                    {
                              "id": "c",
                              "text": "Back-and-forth."
                    },
                    {
                              "id": "d",
                              "text": "Where energy comes from."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Opaque\" means Blocks light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opaque\" means Blocks light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Opaque** = Blocks light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back-and-forth."
                    },
                    {
                              "id": "b",
                              "text": "Where energy comes from."
                    },
                    {
                              "id": "c",
                              "text": "Bounce back."
                    },
                    {
                              "id": "d",
                              "text": "Energy we hear."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sound\" means Energy we hear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means Energy we hear.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = Energy we hear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-light-sound-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where energy comes from."
                    },
                    {
                              "id": "b",
                              "text": "Back-and-forth."
                    },
                    {
                              "id": "c",
                              "text": "Bounce back."
                    },
                    {
                              "id": "d",
                              "text": "Move through."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vibration\" means Back-and-forth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vibration\" means Back-and-forth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vibration** = Back-and-forth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
