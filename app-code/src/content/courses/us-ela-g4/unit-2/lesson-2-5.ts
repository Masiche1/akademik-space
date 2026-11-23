import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ela4-u2-lesson-2-5",
  code: "2-5",
  title: "Craft and Structure Review",
  goal: "I CAN use all craft skills: POV, structure, figurative language, word choice.",
  standards: ["RL.4.4", "RL.4.5", "RL.4.6"],
  vocabulary: [
    { term: "Point of view", definition: "Who tells the story." },
    { term: "Structure", definition: "How organized." },
    { term: "Figurative language", definition: "Non-literal meaning." },
    { term: "Word choice", definition: "Which words." },
    { term: "Simile", definition: "Like or as." },
    { term: "Metaphor", definition: "Is/are." },
    { term: "Tone", definition: "Feeling." },
    { term: "Connotation", definition: "Word feeling." },
  ],
  concepts: [
    {
      id: "ela4-u2-craft-structure-review",
      title: "Craft and structure review",
      skill: "Combine point of view, structure, figurative language and word choice.",
      lesson: {
        sections: [
          {
            heading: "All craft skills",
            body: "Identify **point of view**, **structure**, **figurative language** (simile/metaphor), and analyze **word choice** and **tone**.",
          },
          {
            heading: "Put it together",
            body: "Use all craft skills to understand how authors create meaning.",
          },
        ],
        keyFormulas: [
          { name: "Craft", statement: "POV + structure + figurative + word choice = author's craft." },
        ],
        workedExample: {
          problem: "Use all craft skills on a passage.",
          solution: "All skills = complete craft analysis.",
        },
      },
      questions: [
        {
          id: "ela4-u2-craft-structure-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Craft skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only POV"
                    },
                    {
                              "id": "b",
                              "text": "POV, structure, figurative, word choice"
                    },
                    {
                              "id": "c",
                              "text": "only figurative"
                    },
                    {
                              "id": "d",
                              "text": "only structure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All craft skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All craft skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**POV, structure, figurative, word choice**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify POV, structure, one figurative language example, and analyze word choice in a passage.",
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
                                                  "All craft",
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
                                                  "All craft",
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
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Third person; sequence; simile: busy as bees; 'tiny' = negative connotation.'**"
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Author's craft is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's pretty"
                    },
                    {
                              "id": "b",
                              "text": "it shows how meaning is created"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
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
                              "statement": "Craft shows how meaning is made."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Craft shows how meaning is made.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**it shows how meaning is created**",
          "commonErrors": [
                    "Thinks craft is decorative."
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Point of view\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How organized."
                    },
                    {
                              "id": "b",
                              "text": "Who tells the story."
                    },
                    {
                              "id": "c",
                              "text": "Non-literal meaning."
                    },
                    {
                              "id": "d",
                              "text": "Which words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Point of view\" means Who tells the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Point of view\" means Who tells the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Point of view** = Who tells the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Non-literal meaning."
                    },
                    {
                              "id": "b",
                              "text": "Which words."
                    },
                    {
                              "id": "c",
                              "text": "Like or as."
                    },
                    {
                              "id": "d",
                              "text": "How organized."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Structure\" means How organized."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Structure\" means How organized.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Structure** = How organized.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Figurative language\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Which words."
                    },
                    {
                              "id": "b",
                              "text": "Non-literal meaning."
                    },
                    {
                              "id": "c",
                              "text": "Like or as."
                    },
                    {
                              "id": "d",
                              "text": "Is/are."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Figurative language\" means Non-literal meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Figurative language\" means Non-literal meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Figurative language** = Non-literal meaning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word choice\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Like or as."
                    },
                    {
                              "id": "b",
                              "text": "Is/are."
                    },
                    {
                              "id": "c",
                              "text": "Feeling."
                    },
                    {
                              "id": "d",
                              "text": "Which words."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Word choice\" means Which words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word choice\" means Which words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Word choice** = Which words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-craft-structure-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Simile\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Is/are."
                    },
                    {
                              "id": "b",
                              "text": "Like or as."
                    },
                    {
                              "id": "c",
                              "text": "Feeling."
                    },
                    {
                              "id": "d",
                              "text": "Word feeling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Simile\" means Like or as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Simile\" means Like or as.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Simile** = Like or as.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
