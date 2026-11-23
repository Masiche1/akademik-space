import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ela6-u2-lesson-2-5",
  code: "2-5",
  title: "Character/POV Review",
  goal: "I CAN use all character and point of view skills.",
  standards: ["RL.6.3", "RL.6.4"],
  vocabulary: [
    { term: "Character", definition: "Person in story." },
    { term: "Trait", definition: "Personality quality." },
    { term: "Motivation", definition: "Why they act." },
    { term: "Point of view", definition: "Who tells story." },
    { term: "First person", definition: "I, me, my." },
    { term: "Third person", definition: "He, she, they." },
    { term: "Evidence", definition: "Details proving." },
    { term: "Analyze", definition: "Break down." },
  ],
  concepts: [
    {
      id: "ela6-u2-character-viewpoint-review",
      title: "Character/POV review",
      skill: "Combine character analysis with point of view determination.",
      lesson: {
        sections: [
          {
            heading: "All character/POV skills",
            body: "Analyze **character traits**, **motivation**, and **point of view**; use **evidence** to support analysis.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to deeply understand characters and narration.",
          },
        ],
        keyFormulas: [
          { name: "Character/POV", statement: "Traits + motivation + POV = all skills." },
        ],
        workedExample: {
          problem: "Use all character/POV skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela6-u2-character-viewpoint-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Character/POV skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only traits"
                    },
                    {
                              "id": "b",
                              "text": "traits, motivation, point of view, evidence"
                    },
                    {
                              "id": "c",
                              "text": "only POV"
                    },
                    {
                              "id": "d",
                              "text": "only motivation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "traits, motivation, point of view, evidence",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a character trait, explain motivation, determine point of view, and cite evidence.",
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
                                                  "All char/POV",
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
                                                  "All char/POV",
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
                    "**e.g., 'Trait: brave; Motivation: protect friend; POV: first person; Evidence: faces danger to save friend.'**"
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Character analysis helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand why characters act and how stories are told"
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
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Understand characters/stories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand characters/stories.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "understand why characters act and how stories are told",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Personality quality."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "Why they act."
                    },
                    {
                              "id": "d",
                              "text": "Who tells story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why they act."
                    },
                    {
                              "id": "b",
                              "text": "Who tells story."
                    },
                    {
                              "id": "c",
                              "text": "I, me, my."
                    },
                    {
                              "id": "d",
                              "text": "Personality quality."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Trait\" means Personality quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Personality quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Trait** = Personality quality.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motivation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who tells story."
                    },
                    {
                              "id": "b",
                              "text": "Why they act."
                    },
                    {
                              "id": "c",
                              "text": "I, me, my."
                    },
                    {
                              "id": "d",
                              "text": "He, she, they."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Motivation\" means Why they act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motivation\" means Why they act.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Motivation** = Why they act.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Point of view\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "I, me, my."
                    },
                    {
                              "id": "b",
                              "text": "He, she, they."
                    },
                    {
                              "id": "c",
                              "text": "Details proving."
                    },
                    {
                              "id": "d",
                              "text": "Who tells story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Point of view\" means Who tells story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Point of view\" means Who tells story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Point of view** = Who tells story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-viewpoint-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First person\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "He, she, they."
                    },
                    {
                              "id": "b",
                              "text": "I, me, my."
                    },
                    {
                              "id": "c",
                              "text": "Details proving."
                    },
                    {
                              "id": "d",
                              "text": "Break down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"First person\" means I, me, my."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"First person\" means I, me, my.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**First person** = I, me, my.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
