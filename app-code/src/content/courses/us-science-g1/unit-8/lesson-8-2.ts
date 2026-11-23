import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "s1-u8-lesson-8-2",
  code: "8-2",
  title: "Physical Science Review",
  goal: "I CAN review pushes/pulls, matter, properties and engineering.",
  standards: ["1-PS1-1", "1-PS1-2", "1-ETS1-1", "1-ETS1-2", "1-ETS1-3"],
  vocabulary: [
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Matter", definition: "Takes up space." },
    { term: "Solid", definition: "Keeps shape." },
    { term: "Liquid", definition: "Container shape." },
    { term: "Property", definition: "Quality of matter." },
    { term: "Problem", definition: "Needs solving." },
    { term: "Design", definition: "Plan solution." },
  ],
  concepts: [
    {
      id: "s1-u8-review-physical",
      title: "Physical science review",
      skill: "Combine pushes/pulls, states of matter, properties and engineering.",
      lesson: {
        sections: [
          {
            heading: "All physical science",
            body: "**Pushes/pulls** affect motion. **Matter** has states (solid/liquid/gas) and properties. **Engineering** solves problems through design process.",
          },
          {
            heading: "Put it together",
            body: "Identify forces, states, properties and solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Physical science", statement: "Push/pull + states + properties + engineering = physical science." },
        ],
        workedExample: {
          problem: "Describe physical science: forces, matter, engineering.",
          solution: "Pushes/pulls change motion; solids/liquids/gases; design solves problems.",
        },
      },
      questions: [
        {
          id: "s1-u8-review-physical-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Physical science includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only forces"
                    },
                    {
                              "id": "b",
                              "text": "forces, matter states, properties, engineering"
                    },
                    {
                              "id": "c",
                              "text": "only matter"
                    },
                    {
                              "id": "d",
                              "text": "only engineering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All physical science topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All physical science topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all topics**",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "s1-u8-review-physical-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a push or pull, describe a state of matter, sort by property, and solve a problem using design process.",
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
                                                  "Physical science",
                                                  "Force + state + property + design."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Physical science",
                                                  "Force + state + property + design."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Covers all aspects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Push ball; water is liquid; sorted by color; designed holder.'**"
          ]
},
        },
        {
          id: "s1-u8-review-physical-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Engineering solves...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "math problems"
                    },
                    {
                              "id": "b",
                              "text": "real-world problems"
                    },
                    {
                              "id": "c",
                              "text": "reading problems"
                    },
                    {
                              "id": "d",
                              "text": "art problems"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Engineering solves real problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Engineering solves real problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**real problems**",
          "commonErrors": [
                    "Picks wrong problem type."
          ]
},
        },
        {
          id: "s1-u8-review-physical-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force toward."
                    },
                    {
                              "id": "b",
                              "text": "Force away."
                    },
                    {
                              "id": "c",
                              "text": "Takes up space."
                    },
                    {
                              "id": "d",
                              "text": "Keeps shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-physical-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Takes up space."
                    },
                    {
                              "id": "b",
                              "text": "Keeps shape."
                    },
                    {
                              "id": "c",
                              "text": "Container shape."
                    },
                    {
                              "id": "d",
                              "text": "Force toward."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force toward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-physical-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keeps shape."
                    },
                    {
                              "id": "b",
                              "text": "Takes up space."
                    },
                    {
                              "id": "c",
                              "text": "Container shape."
                    },
                    {
                              "id": "d",
                              "text": "Quality of matter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Takes up space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-physical-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Container shape."
                    },
                    {
                              "id": "b",
                              "text": "Quality of matter."
                    },
                    {
                              "id": "c",
                              "text": "Needs solving."
                    },
                    {
                              "id": "d",
                              "text": "Keeps shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Keeps shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Keeps shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Keeps shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-physical-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality of matter."
                    },
                    {
                              "id": "b",
                              "text": "Container shape."
                    },
                    {
                              "id": "c",
                              "text": "Needs solving."
                    },
                    {
                              "id": "d",
                              "text": "Plan solution."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Container shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Container shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
