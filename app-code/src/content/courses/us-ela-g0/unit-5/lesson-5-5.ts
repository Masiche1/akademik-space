import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "ela0-u5-lesson-5-5",
  code: "5-5",
  title: "Narrative Writing Review",
  goal: "I CAN write narratives with all parts and sequence.",
  standards: ["W.K.3", "W.K.4"],
  vocabulary: [
    { term: "Narrative", definition: "A story." },
    { term: "Character", definition: "Who is in it." },
    { term: "Setting", definition: "Where/when." },
    { term: "Event", definition: "What happens." },
    { term: "Sequence", definition: "Order." },
    { term: "Beginning", definition: "First." },
    { term: "End", definition: "Last." },
    { term: "Detail", definition: "Extra info." },
  ],
  concepts: [
    {
      id: "ela0-u5-narrative-review",
      title: "Narrative writing review",
      skill: "Combine characters, setting, events, sequence and details.",
      lesson: {
        sections: [
          {
            heading: "All of narrative",
            body: "A narrative has **characters**, **setting**, **events** in **sequence** (beginning-middle-end), and **details** to make it vivid. It can be real or imagined.",
          },
          {
            heading: "Put it together",
            body: "Write a complete story with all parts in order.",
          },
        ],
        keyFormulas: [
          { name: "Narrative review", statement: "Characters + setting + events + sequence + details = complete story." },
        ],
        workedExample: {
          problem: "Write a complete narrative about your favorite memory.",
          solution: "Character: me; Setting: park; Events: played, ate, went home; Sequence: beginning-middle-end.",
        },
      },
      questions: [
        {
          id: "ela0-u5-narrative-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A complete narrative has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only characters"
                    },
                    {
                              "id": "b",
                              "text": "characters, setting, events, sequence, details"
                    },
                    {
                              "id": "c",
                              "text": "only facts"
                    },
                    {
                              "id": "d",
                              "text": "only an ending"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All narrative parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All narrative parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all parts**",
          "commonErrors": [
                    "Lists one part."
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete narrative about something you did or imagined. Include all parts.",
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
                                                  "Narrative",
                                                  "All parts in order."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Narrative",
                                                  "All parts in order."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes complete narrative.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'My dog and I played at the park. We ran, fetched, and went home.'**"
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sequence words like 'first', 'then', 'finally' help...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count"
                    },
                    {
                              "id": "b",
                              "text": "show event order"
                    },
                    {
                              "id": "c",
                              "text": "spell"
                    },
                    {
                              "id": "d",
                              "text": "rhyme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "They show event order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They show event order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**show order**",
          "commonErrors": [
                    "Thinks they're unrelated."
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in it."
                    },
                    {
                              "id": "b",
                              "text": "A story."
                    },
                    {
                              "id": "c",
                              "text": "Where/when."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Narrative\" means A story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means A story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = A story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Order."
                    },
                    {
                              "id": "d",
                              "text": "Who is in it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Where/when."
                    },
                    {
                              "id": "c",
                              "text": "Order."
                    },
                    {
                              "id": "d",
                              "text": "First."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where/when."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where/when.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where/when.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Event\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order."
                    },
                    {
                              "id": "b",
                              "text": "First."
                    },
                    {
                              "id": "c",
                              "text": "Last."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Event\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Event\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Event** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First."
                    },
                    {
                              "id": "b",
                              "text": "Order."
                    },
                    {
                              "id": "c",
                              "text": "Last."
                    },
                    {
                              "id": "d",
                              "text": "Extra info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = Order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
