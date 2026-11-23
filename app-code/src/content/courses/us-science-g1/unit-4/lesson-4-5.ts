import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "s1-u4-lesson-4-5",
  code: "4-5",
  title: "Matter Review",
  goal: "I CAN describe states of matter, sort by properties and link materials to uses.",
  standards: ["1-PS1-1", "1-PS1-2"],
  vocabulary: [
    { term: "Matter", definition: "Takes up space." },
    { term: "Solid", definition: "Keeps shape." },
    { term: "Liquid", definition: "Container shape." },
    { term: "Gas", definition: "Fills space." },
    { term: "Property", definition: "Quality of matter." },
    { term: "Sort", definition: "Group by property." },
    { term: "Material", definition: "What it's made of." },
    { term: "Use", definition: "What it's for." },
  ],
  concepts: [
    {
      id: "s1-u4-matter-review",
      title: "Matter review",
      skill: "Combine states of matter, properties, sorting and material uses.",
      lesson: {
        sections: [
          {
            heading: "All matter knowledge",
            body: "**Matter** exists as **solids** (own shape), **liquids** (container shape), **gases** (fill space). We **sort** by **properties** and choose **materials** for their **uses**.",
          },
          {
            heading: "Put it together",
            body: "Identify states, sort objects, link materials to uses.",
          },
        ],
        keyFormulas: [
          { name: "Matter", statement: "States + properties + sorting + materials/uses = matter knowledge." },
        ],
        workedExample: {
          problem: "Describe matter completely: states, properties, sorting, material uses.",
          solution: "Solid/liquid/gas; sort by color/size; materials chosen for uses.",
        },
      },
      questions: [
        {
          id: "s1-u4-matter-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Matter knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only names"
                    },
                    {
                              "id": "b",
                              "text": "states, properties, sorting, material uses"
                    },
                    {
                              "id": "c",
                              "text": "only colors"
                    },
                    {
                              "id": "d",
                              "text": "only size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All matter topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All matter topics.",
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
          id: "s1-u4-matter-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort objects by a property, identify each object's state of matter, and explain why a material is used for a purpose.",
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
                                                  "Matter",
                                                  "Sort + states + material-use."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Matter",
                                                  "Sort + states + material-use."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Sorts + identifies states + links material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Sorted by color; water is liquid; umbrella waterproof for rain.'**"
          ]
},
        },
        {
          id: "s1-u4-matter-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solids, liquids and gases differ by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color"
                    },
                    {
                              "id": "b",
                              "text": "how they take up space and shape"
                    },
                    {
                              "id": "c",
                              "text": "price"
                    },
                    {
                              "id": "d",
                              "text": "name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "States differ by shape/space behavior."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States differ by shape/space behavior.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**shape/space**",
          "commonErrors": [
                    "Confuses with color."
          ]
},
        },
        {
          id: "s1-u4-matter-review-q4",
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
                              "text": "Fills space."
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
          id: "s1-u4-matter-review-q5",
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
                              "text": "Fills space."
                    },
                    {
                              "id": "c",
                              "text": "Quality of matter."
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
          id: "s1-u4-matter-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fills space."
                    },
                    {
                              "id": "b",
                              "text": "Container shape."
                    },
                    {
                              "id": "c",
                              "text": "Quality of matter."
                    },
                    {
                              "id": "d",
                              "text": "Group by property."
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
        {
          id: "s1-u4-matter-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gas\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality of matter."
                    },
                    {
                              "id": "b",
                              "text": "Group by property."
                    },
                    {
                              "id": "c",
                              "text": "What it's made of."
                    },
                    {
                              "id": "d",
                              "text": "Fills space."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gas\" means Fills space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gas\" means Fills space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gas** = Fills space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-matter-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group by property."
                    },
                    {
                              "id": "b",
                              "text": "Quality of matter."
                    },
                    {
                              "id": "c",
                              "text": "What it's made of."
                    },
                    {
                              "id": "d",
                              "text": "What it's for."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Quality of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Quality of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Quality of matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
