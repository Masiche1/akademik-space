import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m0-u6-lesson-6-3",
  code: "6-3",
  title: "Classify Objects",
  goal: "I CAN sort objects into groups by a rule.",
  standards: ["K.MD.B.3"],
  vocabulary: [
    { term: "Classify", definition: "Sort objects into groups." },
    { term: "Group", definition: "Objects that share a feature." },
    { term: "Sort", definition: "Put things in order or groups." },
    { term: "Attribute", definition: "A feature like color, shape or size." },
    { term: "Category", definition: "A group with the same feature." },
    { term: "Rule", definition: "What determines the groups." },
  ],
  concepts: [
    {
      id: "m0-u6-classify",
      title: "Classifying objects",
      skill: "Sort objects into groups based on an attribute.",
      lesson: {
        sections: [
          {
            heading: "Sorting by features",
            body: "To **classify**, pick a feature (**attribute**) like color, shape or size, and put objects with that feature in the same **group**.",
          },
          {
            heading: "Choose a rule",
            body: "The **rule** is what you sort by: 'sort by color' puts all reds together, all blues together. A good sort has one clear rule.",
          },
        ],
        keyFormulas: [
          { name: "Classify", statement: "Pick an attribute (color/shape/size), group objects by it." },
        ],
        workedExample: {
          problem: "Sort these shapes by number of sides: triangle, square, triangle, circle.",
          solution: "Triangles (3 sides): 2. Square (4 sides): 1. Circle (0 sides): 1 — **sorted by sides**.",
        },
      },
      questions: [
        {
          id: "m0-u6-classify-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To classify objects, you sort them by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random"
                    },
                    {
                              "id": "b",
                              "text": "a shared feature or attribute"
                    },
                    {
                              "id": "c",
                              "text": "size only"
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
                              "statement": "Classify = sort by a shared feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classify = sort by a shared feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**shared feature**",
          "commonErrors": [
                    "Thinks sorting is random."
          ]
},
        },
        {
          id: "m0-u6-classify-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you sort blocks 'by color', all red blocks go...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everywhere"
                    },
                    {
                              "id": "b",
                              "text": "together in the red group"
                    },
                    {
                              "id": "c",
                              "text": "with blue"
                    },
                    {
                              "id": "d",
                              "text": "in the trash"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same color = same group."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same color = same group.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**together in red**",
          "commonErrors": [
                    "Doesn't group by rule."
          ]
},
        },
        {
          id: "m0-u6-classify-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort a set of objects (buttons, blocks, shapes) into two groups. What rule did you use?",
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
                                                  "Classify",
                                                  "Group by attribute."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Classify",
                                                  "Group by attribute."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Sorts into groups + names rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'By color: red group and blue group.'**"
          ]
},
        },
        {
          id: "m0-u6-classify-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'attribute' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a number"
                    },
                    {
                              "id": "b",
                              "text": "a feature like color, shape or size"
                    },
                    {
                              "id": "c",
                              "text": "a name"
                    },
                    {
                              "id": "d",
                              "text": "a place"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Attribute = a feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Attribute = a feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**a feature**",
          "commonErrors": [
                    "Confuses attribute with name."
          ]
},
        },
        {
          id: "m0-u6-classify-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort objects two different ways: once by color, once by shape. Did you get different groups? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Classify",
                              "statement": "Different rules give different groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Sorts two ways.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Explains different groups.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Yes — color groups by color, shape groups by shape; different rules = different groups.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Cannot sort two ways.",
                    "No explanation."
          ]
},
        },
        {
          id: "m0-u6-classify-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Classify\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Objects that share a feature."
                    },
                    {
                              "id": "b",
                              "text": "Sort objects into groups."
                    },
                    {
                              "id": "c",
                              "text": "Put things in order or groups."
                    },
                    {
                              "id": "d",
                              "text": "A feature like color, shape or size."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Classify\" means Sort objects into groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Classify\" means Sort objects into groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Classify** = Sort objects into groups.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-classify-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put things in order or groups."
                    },
                    {
                              "id": "b",
                              "text": "A feature like color, shape or size."
                    },
                    {
                              "id": "c",
                              "text": "A group with the same feature."
                    },
                    {
                              "id": "d",
                              "text": "Objects that share a feature."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means Objects that share a feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Objects that share a feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = Objects that share a feature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-classify-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A feature like color, shape or size."
                    },
                    {
                              "id": "b",
                              "text": "Put things in order or groups."
                    },
                    {
                              "id": "c",
                              "text": "A group with the same feature."
                    },
                    {
                              "id": "d",
                              "text": "What determines the groups."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Put things in order or groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Put things in order or groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Put things in order or groups.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
