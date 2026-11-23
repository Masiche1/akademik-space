import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "m3-u8-lesson-8-5",
  code: "8-5",
  title: "Geometry Review",
  goal: "I CAN use all geometry skills.",
  standards: ["3.G.A.1", "3.MD.C.5", "3.MD.C.6", "3.MD.C.7", "3.MD.D.8"],
  vocabulary: [
    { term: "Shape", definition: "Closed figure." },
    { term: "Attribute", definition: "Characteristic." },
    { term: "Area", definition: "Space inside." },
    { term: "Perimeter", definition: "Distance around." },
    { term: "Square unit", definition: "1x1 square." },
    { term: "Side", definition: "Edge." },
    { term: "Vertex", definition: "Corner." },
    { term: "Polygon", definition: "Closed shape." },
  ],
  concepts: [
    {
      id: "m3-u8-geometry-review",
      title: "Geometry review",
      skill: "Combine shape attributes, area and perimeter.",
      lesson: {
        sections: [
          {
            heading: "All geometry skills",
            body: "Describe **shapes** by **attributes**, find **area** (inside, square units), and **perimeter** (around, linear units).",
          },
          {
            heading: "Put it together",
            body: "Use all geometry skills together.",
          },
        ],
        keyFormulas: [
          { name: "Geometry", statement: "Attributes + area + perimeter = all skills." },
        ],
        workedExample: {
          problem: "Describe a shape, find its area and perimeter.",
          solution: "All geometry skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m3-u8-geometry-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Geometry skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only area"
                    },
                    {
                              "id": "b",
                              "text": "attributes, area, perimeter"
                    },
                    {
                              "id": "c",
                              "text": "only perimeter"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All geometry skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All geometry skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a rectangle's attributes, find its area, and find its perimeter.",
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
                                                  "All geometry",
                                                  "Attributes + area + perimeter."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All geometry",
                                                  "Attributes + area + perimeter."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '4 sides, 4 right angles; area=20; perimeter=18'**"
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'polygon' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a circle"
                    },
                    {
                              "id": "b",
                              "text": "a closed shape with straight sides"
                    },
                    {
                              "id": "c",
                              "text": "a curve"
                    },
                    {
                              "id": "d",
                              "text": "a point"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Polygon = closed straight sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Polygon = closed straight sides.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "closed shape",
          "commonErrors": [
                    "Confuses with circle."
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Characteristic."
                    },
                    {
                              "id": "b",
                              "text": "Closed figure."
                    },
                    {
                              "id": "c",
                              "text": "Space inside."
                    },
                    {
                              "id": "d",
                              "text": "Distance around."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape\" means Closed figure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape\" means Closed figure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape** = Closed figure.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Attribute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Space inside."
                    },
                    {
                              "id": "b",
                              "text": "Distance around."
                    },
                    {
                              "id": "c",
                              "text": "1x1 square."
                    },
                    {
                              "id": "d",
                              "text": "Characteristic."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Attribute\" means Characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Attribute\" means Characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Attribute** = Characteristic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance around."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "1x1 square."
                    },
                    {
                              "id": "d",
                              "text": "Edge."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Perimeter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1x1 square."
                    },
                    {
                              "id": "b",
                              "text": "Edge."
                    },
                    {
                              "id": "c",
                              "text": "Corner."
                    },
                    {
                              "id": "d",
                              "text": "Distance around."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Perimeter\" means Distance around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Perimeter\" means Distance around.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Perimeter** = Distance around.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u8-geometry-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Square unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Edge."
                    },
                    {
                              "id": "b",
                              "text": "1x1 square."
                    },
                    {
                              "id": "c",
                              "text": "Corner."
                    },
                    {
                              "id": "d",
                              "text": "Closed shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Square unit\" means 1x1 square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Square unit\" means 1x1 square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square unit** = 1x1 square.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
