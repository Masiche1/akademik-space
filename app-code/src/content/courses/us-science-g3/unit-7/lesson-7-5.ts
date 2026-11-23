import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "sci3-u7-lesson-7-5",
  code: "7-5",
  title: "Earth's Surface Review",
  goal: "I CAN describe soil, rocks, minerals and surface changes.",
  standards: ["ESS2.A", "ESS2.B", "ESS3.A"],
  vocabulary: [
    { term: "Soil", definition: "Dirt on surface." },
    { term: "Rock", definition: "Hard material." },
    { term: "Mineral", definition: "Natural solid." },
    { term: "Igneous", definition: "From magma." },
    { term: "Sedimentary", definition: "From sediment." },
    { term: "Metamorphic", definition: "From heat/pressure." },
    { term: "Weathering", definition: "Breaking down." },
    { term: "Erosion", definition: "Moving pieces." },
  ],
  concepts: [
    {
      id: "sci3-u7-earth-review",
      title: "Earth's surface review",
      skill: "Combine soil, rocks, minerals and surface changes.",
      lesson: {
        sections: [
          {
            heading: "All Earth surface",
            body: "Earth's surface has **soil** (sand/clay/silt/humus), **rocks** (igneous/sedimentary/metamorphic), **minerals** (natural solids), and changes through **weathering** and **erosion**.",
          },
          {
            heading: "Put it together",
            body: "Describe soil, rocks, minerals and surface changes.",
          },
        ],
        keyFormulas: [
          { name: "Earth surface", statement: "Soil + rocks + minerals + weathering/erosion = complete knowledge." },
        ],
        workedExample: {
          problem: "Describe Earth's surface: soil, rock types, minerals, and how surface changes.",
          solution: "Soil=sand/clay/silt/humus; rocks=3 types; minerals=natural solids; changes=weathering+erosion.",
        },
      },
      questions: [
        {
          id: "sci3-u7-earth-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth surface knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only soil"
                    },
                    {
                              "id": "b",
                              "text": "soil, rocks, minerals, changes"
                    },
                    {
                              "id": "c",
                              "text": "only rocks"
                    },
                    {
                              "id": "d",
                              "text": "only minerals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Earth skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Earth skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "soil, rocks, minerals, changes",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u7-earth-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe Earth's surface: soil composition, three rock types, what a mineral is, and weathering vs erosion.",
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
                                                  "All Earth",
                                                  "Soil + rocks + minerals + changes."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All Earth",
                                                  "Soil + rocks + minerals + changes."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Soil: sand/clay/silt/humus. Rocks: 3 types. Mineral: natural solid. Weathering: break; erosion: move.'**"
          ]
},
        },
        {
          id: "sci3-u7-earth-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth's surface is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's flat"
                    },
                    {
                              "id": "b",
                              "text": "we live on it and need soil for food"
                    },
                    {
                              "id": "c",
                              "text": "it's boring"
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
                              "statement": "We live on it; need soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "We live on it; need soil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "we live on it and need soil for food",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci3-u7-earth-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soil\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hard material."
                    },
                    {
                              "id": "b",
                              "text": "Dirt on surface."
                    },
                    {
                              "id": "c",
                              "text": "Natural solid."
                    },
                    {
                              "id": "d",
                              "text": "From magma."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soil\" means Dirt on surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soil\" means Dirt on surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soil** = Dirt on surface.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-earth-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Natural solid."
                    },
                    {
                              "id": "b",
                              "text": "From magma."
                    },
                    {
                              "id": "c",
                              "text": "From sediment."
                    },
                    {
                              "id": "d",
                              "text": "Hard material."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Hard material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Hard material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Hard material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-earth-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mineral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From magma."
                    },
                    {
                              "id": "b",
                              "text": "Natural solid."
                    },
                    {
                              "id": "c",
                              "text": "From sediment."
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
                              "statement": "\"Mineral\" means Natural solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mineral\" means Natural solid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mineral** = Natural solid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-earth-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Igneous\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From sediment."
                    },
                    {
                              "id": "b",
                              "text": "From heat/pressure."
                    },
                    {
                              "id": "c",
                              "text": "Breaking down."
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
          id: "sci3-u7-earth-review-q8",
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
                              "text": "From sediment."
                    },
                    {
                              "id": "c",
                              "text": "Breaking down."
                    },
                    {
                              "id": "d",
                              "text": "Moving pieces."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sedimentary\" means From sediment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sedimentary\" means From sediment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sedimentary** = From sediment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
