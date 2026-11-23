import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "s0-u5-lesson-5-5",
  code: "5-5",
  title: "Plants Review",
  goal: "I CAN identify plant parts, needs, life cycle and changes.",
  standards: ["K-LS1-1", "K-LS1-2"],
  vocabulary: [
    { term: "Plant", definition: "Living thing in soil." },
    { term: "Root", definition: "Holds + takes water." },
    { term: "Stem", definition: "Holds up + carries water." },
    { term: "Leaf", definition: "Makes food." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Need", definition: "Water/sun/soil/air." },
    { term: "Lifecycle", definition: "Stages of life." },
    { term: "Grow", definition: "Get bigger." },
  ],
  concepts: [
    {
      id: "s0-u5-plants-review",
      title: "Plants review",
      skill: "Combine plant parts, needs, life cycle and changes.",
      lesson: {
        sections: [
          {
            heading: "All about plants",
            body: "Plants have **parts** (roots, stem, leaves, flowers, seeds), **need** water/sunlight/soil/air to grow, go through a **lifecycle** (seed->adult), and **change** over time and seasons.",
          },
          {
            heading: "Put it together",
            body: "Identify plant parts, describe needs, life cycle stages and how plants change.",
          },
        ],
        keyFormulas: [
          { name: "Plants", statement: "Parts + needs + lifecycle + changes = understanding plants." },
        ],
        workedExample: {
          problem: "Describe a plant fully: parts, needs, life cycle stage, and changes.",
          solution: "Parts: root/stem/leaf/flower; Needs: water/sun/soil/air; Stage: seedling; Changes: growing taller.",
        },
      },
      questions: [
        {
          id: "s0-u5-plants-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plant skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only naming"
                    },
                    {
                              "id": "b",
                              "text": "parts, needs, lifecycle, changes"
                    },
                    {
                              "id": "c",
                              "text": "only watering"
                    },
                    {
                              "id": "d",
                              "text": "only seeds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All plant skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All plant skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all plant skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "s0-u5-plants-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a plant fully: name its parts, what it needs, its life cycle stage, and how it changes.",
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
                                                  "All plants",
                                                  "Parts + needs + stage + changes."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All plants",
                                                  "Parts + needs + stage + changes."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all aspects.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Flowering plant: roots/stem/leaves; needs water/sun; adult stage; blooms in summer.'**"
          ]
},
        },
        {
          id: "s0-u5-plants-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants make food in their...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "roots"
                    },
                    {
                              "id": "b",
                              "text": "leaves"
                    },
                    {
                              "id": "c",
                              "text": "flowers"
                    },
                    {
                              "id": "d",
                              "text": "seeds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Leaves make food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leaves make food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**leaves**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "s0-u5-plants-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Holds + takes water."
                    },
                    {
                              "id": "b",
                              "text": "Living thing in soil."
                    },
                    {
                              "id": "c",
                              "text": "Holds up + carries water."
                    },
                    {
                              "id": "d",
                              "text": "Makes food."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Living thing in soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Living thing in soil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Living thing in soil.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plants-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Holds up + carries water."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Holds + takes water."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Holds + takes water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Holds + takes water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Holds + takes water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plants-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Holds up + carries water."
                    },
                    {
                              "id": "c",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Water/sun/soil/air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stem\" means Holds up + carries water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stem\" means Holds up + carries water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stem** = Holds up + carries water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plants-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leaf\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "b",
                              "text": "Water/sun/soil/air."
                    },
                    {
                              "id": "c",
                              "text": "Stages of life."
                    },
                    {
                              "id": "d",
                              "text": "Makes food."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leaf\" means Makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leaf\" means Makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leaf** = Makes food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u5-plants-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Flower\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water/sun/soil/air."
                    },
                    {
                              "id": "b",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "c",
                              "text": "Stages of life."
                    },
                    {
                              "id": "d",
                              "text": "Get bigger."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Flower\" means Makes seeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Flower\" means Makes seeds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Flower** = Makes seeds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
