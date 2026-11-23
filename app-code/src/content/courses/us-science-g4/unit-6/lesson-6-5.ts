import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "sci4-u6-lesson-6-5",
  code: "6-5",
  title: "Earth's Surface Review",
  goal: "I CAN use all surface skills.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Rock", definition: "Solid material." },
    { term: "Igneous", definition: "From magma." },
    { term: "Sedimentary", definition: "From sediments." },
    { term: "Metamorphic", definition: "From heat/pressure." },
    { term: "Weathering", definition: "Break rocks." },
    { term: "Erosion", definition: "Move material." },
    { term: "Landform", definition: "Natural feature." },
    { term: "Change", definition: "Over time." },
  ],
  concepts: [
    {
      id: "sci4-u6-surface-review",
      title: "Earth's surface review",
      skill: "Combine rocks, weathering/erosion, landforms and changes.",
      lesson: {
        sections: [
          {
            heading: "All surface skills",
            body: "Classify **rocks**, explain **weathering/erosion**, identify **landforms**, and describe **Earth's changes**.",
          },
          {
            heading: "Put it together",
            body: "Use all surface skills to understand Earth's dynamics.",
          },
        ],
        keyFormulas: [
          { name: "Surface", statement: "Rocks + weathering + landforms + changes = complete understanding." },
        ],
        workedExample: {
          problem: "Use all surface skills.",
          solution: "All skills = complete surface understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u6-surface-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Surface skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rocks"
                    },
                    {
                              "id": "b",
                              "text": "rocks, weathering, landforms, changes"
                    },
                    {
                              "id": "c",
                              "text": "only landforms"
                    },
                    {
                              "id": "d",
                              "text": "only weathering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All surface skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All surface skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rocks, weathering, landforms, changes",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify rocks, explain weathering/erosion, identify landforms, and describe Earth's changes.",
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
                                                  "All surface",
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
                                                  "All surface",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
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
                    "**e.g., 'Igneous/sedimentary/metamorphic; weathering=break, erosion=move; canyon=landform; slow+fast changes.'**"
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth's surface is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's pretty"
                    },
                    {
                              "id": "b",
                              "text": "it changes and shapes our world"
                    },
                    {
                              "id": "c",
                              "text": "it's math"
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
                              "statement": "Shapes our world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shapes our world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it changes and shapes our world",
          "commonErrors": [
                    "Thinks it's static."
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From magma."
                    },
                    {
                              "id": "b",
                              "text": "Solid material."
                    },
                    {
                              "id": "c",
                              "text": "From sediments."
                    },
                    {
                              "id": "d",
                              "text": "From heat/pressure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Solid material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Solid material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Solid material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Igneous\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From sediments."
                    },
                    {
                              "id": "b",
                              "text": "From heat/pressure."
                    },
                    {
                              "id": "c",
                              "text": "Break rocks."
                    },
                    {
                              "id": "d",
                              "text": "From magma."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Igneous\" means From magma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Igneous\" means From magma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Igneous** = From magma.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sedimentary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From heat/pressure."
                    },
                    {
                              "id": "b",
                              "text": "From sediments."
                    },
                    {
                              "id": "c",
                              "text": "Break rocks."
                    },
                    {
                              "id": "d",
                              "text": "Move material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sedimentary\" means From sediments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sedimentary\" means From sediments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sedimentary** = From sediments.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Metamorphic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break rocks."
                    },
                    {
                              "id": "b",
                              "text": "Move material."
                    },
                    {
                              "id": "c",
                              "text": "Natural feature."
                    },
                    {
                              "id": "d",
                              "text": "From heat/pressure."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Metamorphic\" means From heat/pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Metamorphic\" means From heat/pressure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Metamorphic** = From heat/pressure.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-surface-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weathering\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move material."
                    },
                    {
                              "id": "b",
                              "text": "Break rocks."
                    },
                    {
                              "id": "c",
                              "text": "Natural feature."
                    },
                    {
                              "id": "d",
                              "text": "Over time."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weathering\" means Break rocks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weathering\" means Break rocks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weathering** = Break rocks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
