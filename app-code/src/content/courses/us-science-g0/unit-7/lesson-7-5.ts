import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "s0-u7-lesson-7-5",
  code: "7-5",
  title: "Habitats Review",
  goal: "I CAN describe habitats, match animals and care for them.",
  standards: ["K-ESS2-2", "K-LS1-1"],
  vocabulary: [
    { term: "Habitat", definition: "Living place." },
    { term: "Provide", definition: "Give needs." },
    { term: "Match", definition: "Fit together." },
    { term: "Need", definition: "What animal requires." },
    { term: "Adapt", definition: "Fit conditions." },
    { term: "Change", definition: "Different happens." },
    { term: "Care", definition: "Protect habitat." },
    { term: "Survive", definition: "Stay alive." },
  ],
  concepts: [
    {
      id: "s0-u7-habitats-review",
      title: "Habitats review",
      skill: "Combine habitat definition, matching, changes and care.",
      lesson: {
        sections: [
          {
            heading: "All about habitats",
            body: "A **habitat** is where a living thing lives and gets its **needs**. Animals **match** habitats to their needs, habitats **change**, and we can **care** for habitats to help living things **survive**.",
          },
          {
            heading: "Put it together",
            body: "Describe habitats, match animals, describe changes, and explain how to care for habitats.",
          },
        ],
        keyFormulas: [
          { name: "Habitats", statement: "Define + match + changes + care = understanding habitats." },
        ],
        workedExample: {
          problem: "Describe a habitat fully: what it is, what it provides, how animals fit, how it can change, and how to care for it.",
          solution: "Habitat=place; provides needs; animals adapted; changes with seasons; care=keep clean/protect.",
        },
      },
      questions: [
        {
          id: "s0-u7-habitats-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Habitat skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only naming"
                    },
                    {
                              "id": "b",
                              "text": "define, match, changes, care"
                    },
                    {
                              "id": "c",
                              "text": "only animals"
                    },
                    {
                              "id": "d",
                              "text": "only plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All habitat skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All habitat skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all habitat skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a habitat. Describe: what it provides, one animal that lives there, how that habitat can change, and one way to care for it.",
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
                                                  "All habitats",
                                                  "Provides + animal + change + care."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All habitats",
                                                  "Provides + animal + change + care."
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
                    "**e.g., 'Forest: trees/food; squirrel; fires change it; protect from litter.'**"
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A habitat is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a food"
                    },
                    {
                              "id": "b",
                              "text": "the place where a living thing lives"
                    },
                    {
                              "id": "c",
                              "text": "a toy"
                    },
                    {
                              "id": "d",
                              "text": "a pet only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat = living place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat = living place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**living place**",
          "commonErrors": [
                    "Confuses with food."
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Give needs."
                    },
                    {
                              "id": "b",
                              "text": "Living place."
                    },
                    {
                              "id": "c",
                              "text": "Fit together."
                    },
                    {
                              "id": "d",
                              "text": "What animal requires."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat\" means Living place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat\" means Living place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat** = Living place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Provide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fit together."
                    },
                    {
                              "id": "b",
                              "text": "What animal requires."
                    },
                    {
                              "id": "c",
                              "text": "Fit conditions."
                    },
                    {
                              "id": "d",
                              "text": "Give needs."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Provide\" means Give needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Provide\" means Give needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Provide** = Give needs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Match\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What animal requires."
                    },
                    {
                              "id": "b",
                              "text": "Fit together."
                    },
                    {
                              "id": "c",
                              "text": "Fit conditions."
                    },
                    {
                              "id": "d",
                              "text": "Different happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Match\" means Fit together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Match\" means Fit together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Match** = Fit together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Need\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fit conditions."
                    },
                    {
                              "id": "b",
                              "text": "Different happens."
                    },
                    {
                              "id": "c",
                              "text": "Protect habitat."
                    },
                    {
                              "id": "d",
                              "text": "What animal requires."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Need\" means What animal requires."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Need\" means What animal requires.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Need** = What animal requires.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u7-habitats-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adapt\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Different happens."
                    },
                    {
                              "id": "b",
                              "text": "Fit conditions."
                    },
                    {
                              "id": "c",
                              "text": "Protect habitat."
                    },
                    {
                              "id": "d",
                              "text": "Stay alive."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adapt\" means Fit conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adapt\" means Fit conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adapt** = Fit conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
