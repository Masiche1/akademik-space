import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "sci2-u5-lesson-5-5",
  code: "5-5",
  title: "Animals Review",
  goal: "I CAN describe animal needs, groups, life cycles and habitats.",
  standards: ["NGSS 2-LS2-2", "NGSS 2-LS4-1"],
  vocabulary: [
    { term: "Animal", definition: "Living thing that moves." },
    { term: "Need", definition: "What it requires." },
    { term: "Group", definition: "Classification." },
    { term: "Life cycle", definition: "Stages of growth." },
    { term: "Habitat", definition: "Where it lives." },
    { term: "Adapt", definition: "Change to survive." },
    { term: "Survive", definition: "Stay alive." },
    { term: "Trait", definition: "Characteristic." },
  ],
  concepts: [
    {
      id: "sci2-u5-animals-review",
      title: "Animals review",
      skill: "Combine animal needs, groups, life cycles and habitats.",
      lesson: {
        sections: [
          {
            heading: "All animal skills",
            body: "Animals need **food, water, shelter, air, space**; are **grouped** by traits; have **life cycles**; and **adapt** to their **habitats**.",
          },
          {
            heading: "Put it together",
            body: "Describe needs, groups, cycles and habitats.",
          },
        ],
        keyFormulas: [
          { name: "Animals review", statement: "Needs + groups + life cycles + habitats = all animal skills." },
        ],
        workedExample: {
          problem: "Describe an animal fully: needs, group, life cycle, habitat, adaptation.",
          solution: "All animal skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci2-u5-animals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animal skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only feeding"
                    },
                    {
                              "id": "b",
                              "text": "needs, groups, life cycles, habitats"
                    },
                    {
                              "id": "c",
                              "text": "only groups"
                    },
                    {
                              "id": "d",
                              "text": "only cycles"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All animal skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All animal skills.",
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
          id: "sci2-u5-animals-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe an animal: its needs, its group, its life cycle, and its habitat adaptation.",
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
                                                  "All animals",
                                                  "Needs + group + cycle + habitat."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All animals",
                                                  "Needs + group + cycle + habitat."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Dog: mammal; needs food/water/shelter; life cycle puppy->adult; habitat: den.'**"
          ]
},
        },
        {
          id: "sci2-u5-animals-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Animals are grouped by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "size only"
                    },
                    {
                              "id": "b",
                              "text": "traits"
                    },
                    {
                              "id": "c",
                              "text": "color only"
                    },
                    {
                              "id": "d",
                              "text": "sound only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Group by traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Group by traits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**traits**",
          "commonErrors": [
                    "Picks wrong criteria."
          ]
},
        },
        {
          id: "sci2-u5-animals-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it requires."
                    },
                    {
                              "id": "b",
                              "text": "Living thing that moves."
                    },
                    {
                              "id": "c",
                              "text": "Classification."
                    },
                    {
                              "id": "d",
                              "text": "Stages of growth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal\" means Living thing that moves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal\" means Living thing that moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal** = Living thing that moves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animals-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Classification."
                    },
                    {
                              "id": "b",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "c",
                              "text": "Where it lives."
                    },
                    {
                              "id": "d",
                              "text": "What it requires."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means What it requires."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means What it requires.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = What it requires.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "b",
                              "text": "Classification."
                    },
                    {
                              "id": "c",
                              "text": "Where it lives."
                    },
                    {
                              "id": "d",
                              "text": "Change to survive."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means Classification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Classification.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = Classification.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where it lives."
                    },
                    {
                              "id": "b",
                              "text": "Change to survive."
                    },
                    {
                              "id": "c",
                              "text": "Stay alive."
                    },
                    {
                              "id": "d",
                              "text": "Stages of growth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means Stages of growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages of growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages of growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change to survive."
                    },
                    {
                              "id": "b",
                              "text": "Where it lives."
                    },
                    {
                              "id": "c",
                              "text": "Stay alive."
                    },
                    {
                              "id": "d",
                              "text": "Characteristic."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat\" means Where it lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat\" means Where it lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat** = Where it lives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
