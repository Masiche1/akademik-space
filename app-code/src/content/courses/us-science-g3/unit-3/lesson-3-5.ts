import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "sci3-u3-lesson-3-5",
  code: "3-5",
  title: "Life Cycles Review",
  goal: "I CAN describe life cycles of plants, animals and insects.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Life cycle", definition: "Stages of life." },
    { term: "Birth", definition: "Coming into life." },
    { term: "Growth", definition: "Getting bigger." },
    { term: "Adult", definition: "Fully grown." },
    { term: "Reproduction", definition: "Making offspring." },
    { term: "Metamorphosis", definition: "Big change." },
    { term: "Complete", definition: "Egg->larva->pupa->adult." },
    { term: "Incomplete", definition: "Egg->nymph->adult." },
  ],
  concepts: [
    {
      id: "sci3-u3-cycles-review",
      title: "Life cycles review",
      skill: "Combine plant, animal and insect life cycles.",
      lesson: {
        sections: [
          {
            heading: "All life cycles",
            body: "All living things have **life cycles**: **plants** (seed->mature->seed), **animals** (born->adult->babies), **insects** (complete or incomplete metamorphosis).",
          },
          {
            heading: "Put it together",
            body: "Describe life cycles of different organisms.",
          },
        ],
        keyFormulas: [
          { name: "Life cycles", statement: "Plant + animal + insect = all life cycles." },
        ],
        workedExample: {
          problem: "Describe life cycles of a plant, a dog, and a butterfly.",
          solution: "Plant: seed->mature->seed. Dog: born->pup->adult->pups. Butterfly: egg->caterpillar->chrysalis->butterfly.",
        },
      },
      questions: [
        {
          id: "sci3-u3-cycles-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Life cycles include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only animals"
                    },
                    {
                              "id": "b",
                              "text": "plants, animals, insects"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "only insects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All life cycles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All life cycles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "plants, animals, insects",
          "commonErrors": [
                    "Lists one type."
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the life cycle of a plant, an animal, and an insect.",
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
                                                  "All cycles",
                                                  "Plant + animal + insect."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All cycles",
                                                  "Plant + animal + insect."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Plant: seed->mature. Dog: born->adult->pups. Butterfly: egg->caterpillar->chrysalis->butterfly.'**"
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Metamorphosis' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dying"
                    },
                    {
                              "id": "b",
                              "text": "a big change in body form"
                    },
                    {
                              "id": "c",
                              "text": "growing"
                    },
                    {
                              "id": "d",
                              "text": "sleeping"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Metamorphosis = big body change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metamorphosis = big body change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a big change in body form",
          "commonErrors": [
                    "Thinks it's just growth."
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Coming into life."
                    },
                    {
                              "id": "b",
                              "text": "Stages of life."
                    },
                    {
                              "id": "c",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "d",
                              "text": "Fully grown."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means Stages of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages of life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Birth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "b",
                              "text": "Fully grown."
                    },
                    {
                              "id": "c",
                              "text": "Making offspring."
                    },
                    {
                              "id": "d",
                              "text": "Coming into life."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Birth\" means Coming into life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Birth\" means Coming into life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Birth** = Coming into life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Growth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fully grown."
                    },
                    {
                              "id": "b",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "c",
                              "text": "Making offspring."
                    },
                    {
                              "id": "d",
                              "text": "Big change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Growth\" means Getting bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Growth\" means Getting bigger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Growth** = Getting bigger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adult\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Making offspring."
                    },
                    {
                              "id": "b",
                              "text": "Big change."
                    },
                    {
                              "id": "c",
                              "text": "Egg->larva->pupa->adult."
                    },
                    {
                              "id": "d",
                              "text": "Fully grown."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adult\" means Fully grown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adult\" means Fully grown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adult** = Fully grown.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-cycles-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reproduction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Big change."
                    },
                    {
                              "id": "b",
                              "text": "Making offspring."
                    },
                    {
                              "id": "c",
                              "text": "Egg->larva->pupa->adult."
                    },
                    {
                              "id": "d",
                              "text": "Egg->nymph->adult."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reproduction\" means Making offspring."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reproduction\" means Making offspring.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reproduction** = Making offspring.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
