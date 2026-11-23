import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "s0-u4-lesson-4-5",
  code: "4-5",
  title: "Materials Review",
  goal: "I CAN identify materials, describe properties and choose for a purpose.",
  standards: ["K-PS1-1", "K-PS1-2", "K-PS2-1"],
  vocabulary: [
    { term: "Material", definition: "What it's made of." },
    { term: "Property", definition: "Observable quality." },
    { term: "Hard", definition: "Doesn't bend." },
    { term: "Soft", definition: "Easy to bend." },
    { term: "Bendy", definition: "Bends without breaking." },
    { term: "Float", definition: "Stays on water." },
    { term: "Sink", definition: "Goes down." },
    { term: "Purpose", definition: "What it's for." },
  ],
  concepts: [
    {
      id: "s0-u4-materials-review",
      title: "Materials review",
      skill: "Combine identifying materials, properties, float/sink and choosing for purpose.",
      lesson: {
        sections: [
          {
            heading: "All about materials",
            body: "Materials have **properties** (hard, soft, bendy, smooth), some **float** and some **sink**, and we **choose** materials based on their properties for a **purpose**.",
          },
          {
            heading: "Put it together",
            body: "Identify a material, describe its properties, predict float/sink, and choose materials for purposes.",
          },
        ],
        keyFormulas: [
          { name: "Materials", statement: "Identify + properties + float/sink + choose = understanding materials." },
        ],
        workedExample: {
          problem: "Choose a material for a boat. What properties does it need?",
          solution: "Needs to **float** and be **waterproof** — plastic or wood work.",
        },
      },
      questions: [
        {
          id: "s0-u4-materials-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Material skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only naming"
                    },
                    {
                              "id": "b",
                              "text": "identify, properties, float/sink, choose"
                    },
                    {
                              "id": "c",
                              "text": "only color"
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
                              "statement": "All material skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All material skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all material skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "s0-u4-materials-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a material for a purpose. Identify it, describe two properties, and predict if it floats or sinks.",
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
                                                  "All materials",
                                                  "Material + properties + float/sink."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All materials",
                                                  "Material + properties + float/sink."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Plastic cup: light, waterproof; floats.'**"
          ]
},
        },
        {
          id: "s0-u4-materials-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To choose the right material, match...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color to color"
                    },
                    {
                              "id": "b",
                              "text": "properties to purpose"
                    },
                    {
                              "id": "c",
                              "text": "size to size"
                    },
                    {
                              "id": "d",
                              "text": "price to price"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Match properties to purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Match properties to purpose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**properties to purpose**",
          "commonErrors": [
                    "Thinks color matters."
          ]
},
        },
        {
          id: "s0-u4-materials-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Observable quality."
                    },
                    {
                              "id": "b",
                              "text": "What it's made of."
                    },
                    {
                              "id": "c",
                              "text": "Doesn't bend."
                    },
                    {
                              "id": "d",
                              "text": "Easy to bend."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Material\" means What it's made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What it's made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What it's made of.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-materials-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Doesn't bend."
                    },
                    {
                              "id": "b",
                              "text": "Easy to bend."
                    },
                    {
                              "id": "c",
                              "text": "Bends without breaking."
                    },
                    {
                              "id": "d",
                              "text": "Observable quality."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Observable quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Observable quality.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Observable quality.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-materials-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hard\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to bend."
                    },
                    {
                              "id": "b",
                              "text": "Doesn't bend."
                    },
                    {
                              "id": "c",
                              "text": "Bends without breaking."
                    },
                    {
                              "id": "d",
                              "text": "Stays on water."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hard\" means Doesn't bend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hard\" means Doesn't bend.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hard** = Doesn't bend.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-materials-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soft\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bends without breaking."
                    },
                    {
                              "id": "b",
                              "text": "Stays on water."
                    },
                    {
                              "id": "c",
                              "text": "Goes down."
                    },
                    {
                              "id": "d",
                              "text": "Easy to bend."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soft\" means Easy to bend."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soft\" means Easy to bend.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soft** = Easy to bend.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-materials-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bendy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stays on water."
                    },
                    {
                              "id": "b",
                              "text": "Bends without breaking."
                    },
                    {
                              "id": "c",
                              "text": "Goes down."
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
                              "statement": "\"Bendy\" means Bends without breaking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bendy\" means Bends without breaking.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bendy** = Bends without breaking.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
