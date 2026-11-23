import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "s1-u1-lesson-1-5",
  code: "1-5",
  title: "Plants Review",
  goal: "I CAN describe plant needs, parts, growth and life cycle.",
  standards: ["1-LS1-1", "1-LS1-2"],
  vocabulary: [
    { term: "Plant", definition: "Living thing making food from sun." },
    { term: "Need", definition: "Required for life." },
    { term: "Sunlight", definition: "For food." },
    { term: "Water", definition: "For growth." },
    { term: "Root", definition: "Takes water." },
    { term: "Leaf", definition: "Makes food." },
    { term: "Flower", definition: "Makes seeds." },
    { term: "Life cycle", definition: "Seed->plant->flower->seed." },
  ],
  concepts: [
    {
      id: "s1-u1-plants-review",
      title: "Plants review",
      skill: "Combine plant needs, parts, growth and life cycle.",
      lesson: {
        sections: [
          {
            heading: "All plant knowledge",
            body: "Plants **need** sunlight, water, air and soil. They have **parts** (roots, stems, leaves, flowers) each with a job. They **grow** through stages in a repeating **life cycle**.",
          },
          {
            heading: "Put it together",
            body: "Describe a plant fully: needs, parts, growth, life cycle.",
          },
        ],
        keyFormulas: [
          { name: "Plants", statement: "Needs + parts + growth + life cycle = plant knowledge." },
        ],
        workedExample: {
          problem: "Write everything you know about a plant: needs, parts, growth, cycle.",
          solution: "Needs sun/water/air/soil; parts root/stem/leaf/flower; grows seed->plant->flower->seed.",
        },
      },
      questions: [
        {
          id: "s1-u1-plants-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plant knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only names"
                    },
                    {
                              "id": "b",
                              "text": "needs, parts, growth, life cycle"
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
                              "statement": "All plant topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All plant topics.",
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
          id: "s1-u1-plants-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a plant completely: what it needs, its parts, how it grows, and its life cycle.",
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
                                                  "Plants",
                                                  "Needs + parts + growth + cycle."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Plants",
                                                  "Needs + parts + growth + cycle."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Covers all four aspects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Needs sun/water; has roots/leaves; grows seed->plant; cycle repeats.'**"
          ]
},
        },
        {
          id: "s1-u1-plants-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The plant life cycle repeats because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "plants never grow"
                    },
                    {
                              "id": "b",
                              "text": "seeds grow into plants that make more seeds"
                    },
                    {
                              "id": "c",
                              "text": "flowers die"
                    },
                    {
                              "id": "d",
                              "text": "leaves fall"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Seeds -> plants -> flowers -> seeds = cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Seeds -> plants -> flowers -> seeds = cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**seeds grow into plants**",
          "commonErrors": [
                    "Thinks cycle doesn't repeat."
          ]
},
        },
        {
          id: "s1-u1-plants-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Required for life."
                    },
                    {
                              "id": "b",
                              "text": "Living thing making food from sun."
                    },
                    {
                              "id": "c",
                              "text": "For food."
                    },
                    {
                              "id": "d",
                              "text": "For growth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Living thing making food from sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Living thing making food from sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Living thing making food from sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plants-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "For food."
                    },
                    {
                              "id": "b",
                              "text": "For growth."
                    },
                    {
                              "id": "c",
                              "text": "Takes water."
                    },
                    {
                              "id": "d",
                              "text": "Required for life."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means Required for life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means Required for life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = Required for life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plants-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "For growth."
                    },
                    {
                              "id": "b",
                              "text": "For food."
                    },
                    {
                              "id": "c",
                              "text": "Takes water."
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
                              "statement": "\"Sunlight\" means For food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means For food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = For food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plants-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Takes water."
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
                              "text": "For growth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means For growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means For growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = For growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u1-plants-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Root\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Takes water."
                    },
                    {
                              "id": "c",
                              "text": "Makes seeds."
                    },
                    {
                              "id": "d",
                              "text": "Seed->plant->flower->seed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Root\" means Takes water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Root\" means Takes water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Root** = Takes water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
