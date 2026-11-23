import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "s1-u2-lesson-2-5",
  code: "2-5",
  title: "Animals Review",
  goal: "I CAN describe animal needs, body parts, movement and habitats.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Animal", definition: "Living thing that moves and eats." },
    { term: "Need", definition: "Required for life." },
    { term: "Food", definition: "What they eat." },
    { term: "Water", definition: "What they drink." },
    { term: "Air", definition: "What they breathe." },
    { term: "Shelter", definition: "Safe place." },
    { term: "Habitat", definition: "Where they live." },
    { term: "Move", definition: "Walk, fly, swim, etc." },
  ],
  concepts: [
    {
      id: "s1-u2-animals-review",
      title: "Animals review",
      skill: "Combine animal needs, body parts, movement and habitats.",
      lesson: {
        sections: [
          {
            heading: "All animal knowledge",
            body: "Animals **need** food, water, air, shelter. They have **body parts** for moving/sensing/eating, **move** in different ways, and live in **habitats** that meet their needs.",
          },
          {
            heading: "Put it together",
            body: "Describe an animal fully: needs, body parts, movement, habitat.",
          },
        ],
        keyFormulas: [
          { name: "Animals", statement: "Needs + body parts + movement + habitat = animal knowledge." },
        ],
        workedExample: {
          problem: "Describe a bird fully: needs, body parts, movement, habitat.",
          solution: "Needs food/water/air/shelter; wings/legs/eyes; flies/walks; nests in trees.",
        },
      },
      questions: [
        {
          id: "s1-u2-animals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animal knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only names"
                    },
                    {
                              "id": "b",
                              "text": "needs, body parts, movement, habitat"
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
                              "statement": "All animal topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All animal topics.",
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
          id: "s1-u2-animals-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe an animal completely: what it needs, body parts, how it moves, and its habitat.",
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
                                                  "Animals",
                                                  "Needs + parts + movement + habitat."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Animals",
                                                  "Needs + parts + movement + habitat."
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
                    "**e.g., 'Bird needs food/water; has wings/eyes; flies; lives in nest.'**"
          ]
},
        },
        {
          id: "s1-u2-animals-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals need shelter because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they like toys"
                    },
                    {
                              "id": "b",
                              "text": "it keeps them safe"
                    },
                    {
                              "id": "c",
                              "text": "they need pictures"
                    },
                    {
                              "id": "d",
                              "text": "it makes them fly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Shelter = safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shelter = safety.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**safety**",
          "commonErrors": [
                    "Thinks shelter is for fun."
          ]
},
        },
        {
          id: "s1-u2-animals-review-q4",
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
                              "text": "Living thing that moves and eats."
                    },
                    {
                              "id": "c",
                              "text": "What they eat."
                    },
                    {
                              "id": "d",
                              "text": "What they drink."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means Living thing that moves and eats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means Living thing that moves and eats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = Living thing that moves and eats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animals-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they eat."
                    },
                    {
                              "id": "b",
                              "text": "What they drink."
                    },
                    {
                              "id": "c",
                              "text": "What they breathe."
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
          id: "s1-u2-animals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they drink."
                    },
                    {
                              "id": "b",
                              "text": "What they eat."
                    },
                    {
                              "id": "c",
                              "text": "What they breathe."
                    },
                    {
                              "id": "d",
                              "text": "Safe place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food\" means What they eat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food\" means What they eat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food** = What they eat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they breathe."
                    },
                    {
                              "id": "b",
                              "text": "Safe place."
                    },
                    {
                              "id": "c",
                              "text": "Where they live."
                    },
                    {
                              "id": "d",
                              "text": "What they drink."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water\" means What they drink."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water\" means What they drink.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water** = What they drink.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Air\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Safe place."
                    },
                    {
                              "id": "b",
                              "text": "What they breathe."
                    },
                    {
                              "id": "c",
                              "text": "Where they live."
                    },
                    {
                              "id": "d",
                              "text": "Walk, fly, swim, etc."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Air\" means What they breathe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Air\" means What they breathe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Air** = What they breathe.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
