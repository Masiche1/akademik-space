import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "ela5-u8-lesson-8-4",
  code: "8-4",
  title: "Speaking/Listening Review",
  goal: "I CAN use all speaking and listening skills.",
  standards: ["SL.5.1", "SL.5.2", "SL.5.3", "SL.5.4"],
  vocabulary: [
    { term: "Speaking", definition: "Talk to audience." },
    { term: "Listening", definition: "Pay attention." },
    { term: "Presenting", definition: "Share info." },
    { term: "Active", definition: "Fully engaged." },
    { term: "Clarify", definition: "Ask questions." },
    { term: "Collaborate", definition: "Work together." },
    { term: "Organize", definition: "Arrange." },
    { term: "Engage", definition: "Connect with audience." },
  ],
  concepts: [
    {
      id: "ela5-u8-speaking-listening-review",
      title: "Speaking/listening review",
      skill: "Combine speaking, presenting, listening and collaboration skills.",
      lesson: {
        sections: [
          {
            heading: "All communication skills",
            body: "**Speak** clearly, **present** effectively, **listen** actively, **clarify** with questions, and **collaborate** in discussions.",
          },
          {
            heading: "Put it together",
            body: "Use all communication skills for effective interaction.",
          },
        ],
        keyFormulas: [
          { name: "Communication", statement: "Speak + present + listen + clarify + collaborate = all skills." },
        ],
        workedExample: {
          problem: "Use all communication skills.",
          solution: "All skills = complete communication understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u8-speaking-listening-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Communication skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only speaking"
                    },
                    {
                              "id": "b",
                              "text": "speaking, presenting, listening, clarifying, collaborating"
                    },
                    {
                              "id": "c",
                              "text": "only listening"
                    },
                    {
                              "id": "d",
                              "text": "only presenting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All communication skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All communication skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "speaking, presenting, listening, clarifying, collaborating",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give a presentation, listen actively to feedback, ask a clarifying question, and participate in a discussion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All communication",
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
                                                  "All communication",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
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
                    "**e.g., 'Present topic; Listen to questions; Ask: ...; Discuss: build on ideas.'**"
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Communication skills are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're required"
                    },
                    {
                              "id": "b",
                              "text": "they help us share ideas and learn from each other"
                    },
                    {
                              "id": "c",
                              "text": "they're easy"
                    },
                    {
                              "id": "d",
                              "text": "they're short"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Share ideas/learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Share ideas/learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "they help us share ideas and learn from each other",
          "commonErrors": [
                    "Thinks they're just required."
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speaking\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pay attention."
                    },
                    {
                              "id": "b",
                              "text": "Talk to audience."
                    },
                    {
                              "id": "c",
                              "text": "Share info."
                    },
                    {
                              "id": "d",
                              "text": "Fully engaged."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Speaking\" means Talk to audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speaking\" means Talk to audience.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Speaking** = Talk to audience.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Listening\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Share info."
                    },
                    {
                              "id": "b",
                              "text": "Fully engaged."
                    },
                    {
                              "id": "c",
                              "text": "Ask questions."
                    },
                    {
                              "id": "d",
                              "text": "Pay attention."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Listening\" means Pay attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Listening\" means Pay attention.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listening** = Pay attention.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Presenting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fully engaged."
                    },
                    {
                              "id": "b",
                              "text": "Share info."
                    },
                    {
                              "id": "c",
                              "text": "Ask questions."
                    },
                    {
                              "id": "d",
                              "text": "Work together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Presenting\" means Share info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Presenting\" means Share info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Presenting** = Share info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Active\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask questions."
                    },
                    {
                              "id": "b",
                              "text": "Work together."
                    },
                    {
                              "id": "c",
                              "text": "Arrange."
                    },
                    {
                              "id": "d",
                              "text": "Fully engaged."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Active\" means Fully engaged."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Active\" means Fully engaged.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Active** = Fully engaged.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-speaking-listening-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clarify\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Work together."
                    },
                    {
                              "id": "b",
                              "text": "Ask questions."
                    },
                    {
                              "id": "c",
                              "text": "Arrange."
                    },
                    {
                              "id": "d",
                              "text": "Connect with audience."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Clarify\" means Ask questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clarify\" means Ask questions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Clarify** = Ask questions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
