import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "s1-u8-lesson-8-1",
  code: "8-1",
  title: "Plants and Animals Review",
  goal: "I CAN review plant and animal needs, parts, growth and habitats.",
  standards: ["1-LS1-1", "1-LS1-2"],
  vocabulary: [
    { term: "Plant", definition: "Makes food from sun." },
    { term: "Animal", definition: "Moves and eats." },
    { term: "Need", definition: "Required for life." },
    { term: "Sunlight", definition: "Plant food." },
    { term: "Water", definition: "Needed by all." },
    { term: "Root", definition: "Takes water." },
    { term: "Habitat", definition: "Where lives." },
    { term: "Life cycle", definition: "Seed->plant->flower->seed." },
  ],
  concepts: [
    {
      id: "s1-u8-review-plants-animals",
      title: "Plants and animals review",
      skill: "Combine plant and animal needs, parts, growth and habitats.",
      lesson: {
        sections: [
          {
            heading: "All life science",
            body: "**Plants** need sunlight/water/air/soil and grow through life cycles. **Animals** need food/water/air/shelter and live in habitats.",
          },
          {
            heading: "Put it together",
            body: "Describe plants and animals fully: needs, parts, growth, habitats.",
          },
        ],
        keyFormulas: [
          { name: "Life science", statement: "Plant needs+parts+cycle + animal needs+parts+habitat = life science." },
        ],
        workedExample: {
          problem: "Compare plants and animals: needs, parts, growth.",
          solution: "Plants: sun/water/air/soil, roots/leaves, seed->plant->flower. Animals: food/water/air/shelter, body parts, live in habitats.",
        },
      },
      questions: [
        {
          id: "s1-u8-review-plants-animals-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Life science includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only plants"
                    },
                    {
                              "id": "b",
                              "text": "plant needs/parts/cycle + animal needs/parts/habitat"
                    },
                    {
                              "id": "c",
                              "text": "only animals"
                    },
                    {
                              "id": "d",
                              "text": "only habitats"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All life science topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All life science topics.",
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
          id: "s1-u8-review-plants-animals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare a plant and an animal: what each needs, their parts, and how they grow/live.",
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
                                                  "Life science",
                                                  "Plant vs animal comparison."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Life science",
                                                  "Plant vs animal comparison."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Compares all aspects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Plant needs sun, has roots; animal needs food, has legs; both grow.'**"
          ]
},
        },
        {
          id: "s1-u8-review-plants-animals-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plants and animals both need...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only food"
                    },
                    {
                              "id": "b",
                              "text": "water and air"
                    },
                    {
                              "id": "c",
                              "text": "only sunlight"
                    },
                    {
                              "id": "d",
                              "text": "only soil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Both need water + air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both need water + air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water + air**",
          "commonErrors": [
                    "Picks one need."
          ]
},
        },
        {
          id: "s1-u8-review-plants-animals-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moves and eats."
                    },
                    {
                              "id": "b",
                              "text": "Makes food from sun."
                    },
                    {
                              "id": "c",
                              "text": "Required for life."
                    },
                    {
                              "id": "d",
                              "text": "Plant food."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Makes food from sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Makes food from sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Makes food from sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-plants-animals-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Required for life."
                    },
                    {
                              "id": "b",
                              "text": "Plant food."
                    },
                    {
                              "id": "c",
                              "text": "Needed by all."
                    },
                    {
                              "id": "d",
                              "text": "Moves and eats."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means Moves and eats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means Moves and eats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = Moves and eats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-plants-animals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plant food."
                    },
                    {
                              "id": "b",
                              "text": "Required for life."
                    },
                    {
                              "id": "c",
                              "text": "Needed by all."
                    },
                    {
                              "id": "d",
                              "text": "Takes water."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "s1-u8-review-plants-animals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunlight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Needed by all."
                    },
                    {
                              "id": "b",
                              "text": "Takes water."
                    },
                    {
                              "id": "c",
                              "text": "Where lives."
                    },
                    {
                              "id": "d",
                              "text": "Plant food."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunlight\" means Plant food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunlight\" means Plant food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunlight** = Plant food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-review-plants-animals-q8",
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
                              "text": "Needed by all."
                    },
                    {
                              "id": "c",
                              "text": "Where lives."
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
                              "statement": "\"Water\" means Needed by all."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means Needed by all.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = Needed by all.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
