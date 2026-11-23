import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "ela6-u6-lesson-6-5",
  code: "6-5",
  title: "Narrative/Informative Review",
  goal: "I CAN use all narrative and informative writing skills.",
  standards: ["W.6.3", "W.6.5"],
  vocabulary: [
    { term: "Narrative", definition: "Story." },
    { term: "Character", definition: "Person." },
    { term: "Setting", definition: "Where/when." },
    { term: "Plot", definition: "What happens." },
    { term: "Informative", definition: "Teaches facts." },
    { term: "Research", definition: "Find info." },
    { term: "Revise", definition: "Improve." },
    { term: "Structure", definition: "Organization." },
  ],
  concepts: [
    {
      id: "ela6-u6-narrative-informative-review",
      title: "Narrative/informative review",
      skill: "Combine narrative and informative writing skills with research and revision.",
      lesson: {
        sections: [
          {
            heading: "All writing skills",
            body: "Write **narratives** with developed elements, **informative texts** with clear organization, **research** from reliable sources, and **revise** effectively.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to write compelling stories and informative texts.",
          },
        ],
        keyFormulas: [
          { name: "Writing", statement: "Narrative + informative + research + revision = all skills." },
        ],
        workedExample: {
          problem: "Use all writing skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela6-u6-narrative-informative-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Writing skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only narrative"
                    },
                    {
                              "id": "b",
                              "text": "narrative, informative, research, revision"
                    },
                    {
                              "id": "c",
                              "text": "only informative"
                    },
                    {
                              "id": "d",
                              "text": "only research"
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
          "finalAnswer": "narrative, informative, research, revision",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u6-narrative-informative-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a narrative opening, an informative paragraph, describe your research process, and explain how you would revise.",
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
                                                  "All writing",
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
                                                  "All writing",
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
                    "**e.g., 'Narrative: character in storm; Informative: how storms form; Research: weather websites; Revise: add details, check facts.'**"
          ]
},
        },
        {
          id: "ela6-u6-narrative-informative-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Strong writing combines...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "storytelling and information with research"
                    },
                    {
                              "id": "c",
                              "text": "only opinions"
                    },
                    {
                              "id": "d",
                              "text": "only description"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Story + info + research."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Story + info + research.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "storytelling and information with research",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u6-narrative-informative-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person."
                    },
                    {
                              "id": "b",
                              "text": "Story."
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
                              "statement": "\"Narrative\" means Story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means Story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = Story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-narrative-informative-review-q5",
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
                              "text": "Teaches facts."
                    },
                    {
                              "id": "d",
                              "text": "Person."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-narrative-informative-review-q6",
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
                              "text": "Teaches facts."
                    },
                    {
                              "id": "d",
                              "text": "Find info."
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
          id: "ela6-u6-narrative-informative-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "b",
                              "text": "Find info."
                    },
                    {
                              "id": "c",
                              "text": "Improve."
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
                              "statement": "\"Plot\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plot\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Plot** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u6-narrative-informative-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find info."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Improve."
                    },
                    {
                              "id": "d",
                              "text": "Organization."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informative\" means Teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informative\" means Teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informative** = Teaches facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
