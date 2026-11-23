import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "ela4-u6-lesson-6-5",
  code: "6-5",
  title: "Narrative Writing Review",
  goal: "I CAN write complete narratives with structure, dialogue and conclusions.",
  standards: ["W.4.3a", "W.4.3b", "W.4.3c", "W.4.3d"],
  vocabulary: [
    { term: "Orient", definition: "Set up scene." },
    { term: "Structure", definition: "B-M-E." },
    { term: "Dialogue", definition: "What they say." },
    { term: "Pacing", definition: "Story speed." },
    { term: "Conclusion", definition: "Ending." },
    { term: "Conflict", definition: "Problem." },
    { term: "Resolution", definition: "Solution." },
    { term: "Show", definition: "Demonstrate." },
  ],
  concepts: [
    {
      id: "ela4-u6-narrative-review",
      title: "Narrative writing review",
      skill: "Combine orientation, structure, dialogue/pacing and conclusions.",
      lesson: {
        sections: [
          {
            heading: "All narrative skills",
            body: "**Orient** readers, structure with **B-M-E**, use **dialogue** and **pacing**, and write **conclusions** that resolve conflict.",
          },
          {
            heading: "Put it together",
            body: "All parts = complete, engaging narrative.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Orient + structure + dialogue + conclusion = complete story." },
        ],
        workedExample: {
          problem: "Write a complete narrative.",
          solution: "All parts = engaging story.",
        },
      },
      questions: [
        {
          id: "ela4-u6-narrative-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Narrative skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only structure"
                    },
                    {
                              "id": "b",
                              "text": "orient, structure, dialogue, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "only dialogue"
                    },
                    {
                              "id": "d",
                              "text": "only conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All narrative skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All narrative skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**orient, structure, dialogue, conclusion**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete narrative: orient the reader, structure with B-M-E, use dialogue, and write a conclusion.",
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
                                                  "All narrative",
                                                  "All parts present."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All narrative",
                                                  "All parts present."
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
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Opening orients; B-M-E structure; dialogue reveals character; conclusion resolves.'**"
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A complete narrative needs...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only a plot"
                    },
                    {
                              "id": "b",
                              "text": "orientation, structure, dialogue, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "only characters"
                    },
                    {
                              "id": "d",
                              "text": "only setting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All parts needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All parts needed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**orientation, structure, dialogue, conclusion**",
          "commonErrors": [
                    "Missing parts."
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Orient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "B-M-E."
                    },
                    {
                              "id": "b",
                              "text": "Set up scene."
                    },
                    {
                              "id": "c",
                              "text": "What they say."
                    },
                    {
                              "id": "d",
                              "text": "Story speed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Orient\" means Set up scene."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Orient\" means Set up scene.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Orient** = Set up scene.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they say."
                    },
                    {
                              "id": "b",
                              "text": "Story speed."
                    },
                    {
                              "id": "c",
                              "text": "Ending."
                    },
                    {
                              "id": "d",
                              "text": "B-M-E."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Structure\" means B-M-E."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Structure\" means B-M-E.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Structure** = B-M-E.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dialogue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story speed."
                    },
                    {
                              "id": "b",
                              "text": "What they say."
                    },
                    {
                              "id": "c",
                              "text": "Ending."
                    },
                    {
                              "id": "d",
                              "text": "Problem."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Dialogue\" means What they say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dialogue\" means What they say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Dialogue** = What they say.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pacing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ending."
                    },
                    {
                              "id": "b",
                              "text": "Problem."
                    },
                    {
                              "id": "c",
                              "text": "Solution."
                    },
                    {
                              "id": "d",
                              "text": "Story speed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Pacing\" means Story speed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pacing\" means Story speed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pacing** = Story speed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u6-narrative-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conclusion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Problem."
                    },
                    {
                              "id": "b",
                              "text": "Ending."
                    },
                    {
                              "id": "c",
                              "text": "Solution."
                    },
                    {
                              "id": "d",
                              "text": "Demonstrate."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conclusion\" means Ending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conclusion\" means Ending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conclusion** = Ending.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
