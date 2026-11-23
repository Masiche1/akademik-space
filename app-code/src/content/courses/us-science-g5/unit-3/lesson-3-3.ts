import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "sci5-u3-lesson-3-3",
  code: "3-3",
  title: "Life Cycles",
  goal: "I CAN describe life cycles of plants and animals.",
  standards: ["LS1.C"],
  vocabulary: [
    { term: "Life cycle", definition: "Stages of life." },
    { term: "Stage", definition: "Phase of development." },
    { term: "Birth", definition: "Coming into life." },
    { term: "Growth", definition: "Developing." },
    { term: "Reproduction", definition: "Making offspring." },
    { term: "Death", definition: "End of life." },
    { term: "Metamorphosis", definition: "Complete change." },
    { term: "Offspring", definition: "Young ones." },
  ],
  concepts: [
    {
      id: "sci5-u3-life-cycles",
      title: "Life cycles",
      skill: "Describe life cycles of different organisms.",
      lesson: {
        sections: [
          {
            heading: "Stages",
            body: "Most organisms have **life cycles**: **birth** -> **growth** -> **reproduction** -> **death**. Some have **metamorphosis** (complete change, like butterfly).",
          },
          {
            heading: "Examples",
            body: "**Butterfly**: egg -> caterpillar -> chrysalis -> butterfly. **Frog**: egg -> tadpole -> froglet -> frog. **Plant**: seed -> seedling -> adult -> flower/fruit.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "Birth -> growth -> reproduction -> death = life cycle." },
        ],
        workedExample: {
          problem: "Describe a butterfly's life cycle.",
          solution: "**Egg -> caterpillar -> chrysalis -> butterfly (adult).**",
        },
      },
      questions: [
        {
          id: "sci5-u3-life-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'life cycle' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only birth"
                    },
                    {
                              "id": "b",
                              "text": "birth, growth, reproduction, death"
                    },
                    {
                              "id": "c",
                              "text": "only growth"
                    },
                    {
                              "id": "d",
                              "text": "only reproduction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "birth, growth, reproduction, death",
          "commonErrors": [
                    "Missing stages."
          ]
},
        },
        {
          id: "sci5-u3-life-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Metamorphosis' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "slow growth"
                    },
                    {
                              "id": "b",
                              "text": "complete change in form"
                    },
                    {
                              "id": "c",
                              "text": "reproduction"
                    },
                    {
                              "id": "d",
                              "text": "birth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Complete change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "complete change in form",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u3-life-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the life cycle of a butterfly or frog, naming each stage.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "All stages named."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Butterfly: egg -> caterpillar -> chrysalis -> butterfly.**",
          "commonErrors": [
                    "Missing stages.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci5-u3-life-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Offspring' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "parents"
                    },
                    {
                              "id": "b",
                              "text": "young ones"
                    },
                    {
                              "id": "c",
                              "text": "eggs"
                    },
                    {
                              "id": "d",
                              "text": "adults"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Young ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Young ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "young ones",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u3-life-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the life cycles of a butterfly and a frog. How are they similar/different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Both metamorphosis; Butterfly: egg-caterpillar-chrysalis-butterfly; Frog: egg-tadpole-froglet-frog.**",
          "commonErrors": [
                    "Cannot compare.",
                    "Missing stages."
          ]
},
        },
        {
          id: "sci5-u3-life-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Phase of development."
                    },
                    {
                              "id": "b",
                              "text": "Stages of life."
                    },
                    {
                              "id": "c",
                              "text": "Coming into life."
                    },
                    {
                              "id": "d",
                              "text": "Developing."
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
          id: "sci5-u3-life-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stage\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Coming into life."
                    },
                    {
                              "id": "b",
                              "text": "Developing."
                    },
                    {
                              "id": "c",
                              "text": "Making offspring."
                    },
                    {
                              "id": "d",
                              "text": "Phase of development."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stage\" means Phase of development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stage\" means Phase of development.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stage** = Phase of development.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-life-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Birth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Developing."
                    },
                    {
                              "id": "b",
                              "text": "Coming into life."
                    },
                    {
                              "id": "c",
                              "text": "Making offspring."
                    },
                    {
                              "id": "d",
                              "text": "End of life."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
