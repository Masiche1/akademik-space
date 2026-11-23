import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "ela5-u6-lesson-6-5",
  code: "6-5",
  title: "Writing Review",
  goal: "I CAN use all narrative and informative writing skills.",
  standards: ["W.5.2", "W.5.3"],
  vocabulary: [
    { term: "Narrative", definition: "Story." },
    { term: "Descriptive", definition: "Detailed." },
    { term: "Informative", definition: "Teaches facts." },
    { term: "Character", definition: "Person in story." },
    { term: "Sensory", definition: "Five senses." },
    { term: "Fact", definition: "True info." },
    { term: "Dialogue", definition: "Character speech." },
    { term: "Sequence", definition: "Order of events." },
  ],
  concepts: [
    {
      id: "ela5-u6-writing-review",
      title: "Writing review",
      skill: "Combine narrative, descriptive and informative/explanatory writing.",
      lesson: {
        sections: [
          {
            heading: "All writing skills",
            body: "Write **narratives** with characters and events, **descriptive** pieces with sensory details, and **informative** pieces with facts.",
          },
          {
            heading: "Put it together",
            body: "Use all writing skills for different purposes.",
          },
        ],
        keyFormulas: [
          { name: "Writing", statement: "Narrative + descriptive + informative = all skills." },
        ],
        workedExample: {
          problem: "Use all writing skills.",
          solution: "All skills = complete writing understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u6-writing-review-q1",
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
                              "text": "narrative, descriptive, informative"
                    },
                    {
                              "id": "c",
                              "text": "only informative"
                    },
                    {
                              "id": "d",
                              "text": "only descriptive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All writing skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All writing skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "narrative, descriptive, informative",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u6-writing-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a narrative, a descriptive paragraph, and an informative piece on different topics.",
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
                                                  "All three types."
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
                                                  "All three types."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Narrative: story; Descriptive: sensory details; Informative: facts.'**"
          ]
},
        },
        {
          id: "ela5-u6-writing-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Different writing types serve different...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lengths"
                    },
                    {
                              "id": "b",
                              "text": "purposes"
                    },
                    {
                              "id": "c",
                              "text": "audiences"
                    },
                    {
                              "id": "d",
                              "text": "genres"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Purposes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purposes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "purposes",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "ela5-u6-writing-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Detailed."
                    },
                    {
                              "id": "b",
                              "text": "Story."
                    },
                    {
                              "id": "c",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "d",
                              "text": "Person in story."
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
          id: "ela5-u6-writing-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Descriptive\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "Five senses."
                    },
                    {
                              "id": "d",
                              "text": "Detailed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Descriptive\" means Detailed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Descriptive\" means Detailed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Descriptive** = Detailed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-writing-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Five senses."
                    },
                    {
                              "id": "d",
                              "text": "True info."
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
        {
          id: "ela5-u6-writing-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Five senses."
                    },
                    {
                              "id": "b",
                              "text": "True info."
                    },
                    {
                              "id": "c",
                              "text": "Character speech."
                    },
                    {
                              "id": "d",
                              "text": "Person in story."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela5-u6-writing-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sensory\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "True info."
                    },
                    {
                              "id": "b",
                              "text": "Five senses."
                    },
                    {
                              "id": "c",
                              "text": "Character speech."
                    },
                    {
                              "id": "d",
                              "text": "Order of events."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sensory\" means Five senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sensory\" means Five senses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sensory** = Five senses.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
