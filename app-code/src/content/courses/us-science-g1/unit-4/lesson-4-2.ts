import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "s1-u4-lesson-4-2",
  code: "4-2",
  title: "Solids, Liquids and Gases",
  goal: "I CAN identify solids, liquids and gases.",
  standards: ["1-PS1-1"],
  vocabulary: [
    { term: "Solid", definition: "Keeps its shape." },
    { term: "Liquid", definition: "Takes shape of container." },
    { term: "Gas", definition: "Fills space, can't see." },
    { term: "Shape", definition: "What it looks like." },
    { term: "Container", definition: "What holds it." },
    { term: "Flow", definition: "Move like liquid." },
    { term: "Pour", definition: "Let liquid flow." },
    { term: "State", definition: "Solid, liquid or gas." },
  ],
  concepts: [
    {
      id: "s1-u4-solid-liquid-gas",
      title: "Solids, liquids and gases",
      skill: "Solids keep shape, liquids take container shape, gases fill space.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "A **solid** keeps its own **shape** (a rock). A **liquid** takes the **shape of its container** (water in a cup). A **gas** spreads out to **fill space** (air).",
          },
          {
            heading: "How to tell",
            body: "Solids don't **pour**; liquids **flow** and take container shape; gases are invisible and spread out.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid=own shape, Liquid=container shape, Gas=fills space." },
        ],
        workedExample: {
          problem: "Is water in a glass a solid, liquid or gas?",
          solution: "It's a **liquid** — it takes the shape of the glass.",
        },
      },
      questions: [
        {
          id: "s1-u4-solid-liquid-gas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a solid?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water"
                    },
                    {
                              "id": "b",
                              "text": "a rock"
                    },
                    {
                              "id": "c",
                              "text": "air"
                    },
                    {
                              "id": "d",
                              "text": "juice"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rock keeps its shape = solid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rock keeps its shape = solid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rock**",
          "commonErrors": [
                    "Picks liquid/gas."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A liquid...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "keeps its own shape"
                    },
                    {
                              "id": "b",
                              "text": "takes the shape of its container"
                    },
                    {
                              "id": "c",
                              "text": "is invisible"
                    },
                    {
                              "id": "d",
                              "text": "cannot be poured"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Liquid = container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liquid = container shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**container shape**",
          "commonErrors": [
                    "Confuses with solid."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give one example each of a solid, liquid and gas. Describe each one's state.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States",
                              "statement": "Solid+liquid+gas examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives 3 examples + states.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Solid: pencil (own shape). Liquid: milk (container shape). Gas: air (fills space).'**",
          "commonErrors": [
                    "Fewer than 3 examples.",
                    "Wrong states."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A gas...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "keeps shape"
                    },
                    {
                              "id": "b",
                              "text": "takes container shape"
                    },
                    {
                              "id": "c",
                              "text": "fills all available space"
                    },
                    {
                              "id": "d",
                              "text": "can be held"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gas fills space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gas fills space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fills space**",
          "commonErrors": [
                    "Picks solid/liquid."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pour water from one cup to another. Describe what happens to its shape and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Liquid",
                              "statement": "Takes container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes shape change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains liquid property.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Water takes the shape of each cup because it's a liquid.'**",
          "commonErrors": [
                    "No change described.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Takes shape of container."
                    },
                    {
                              "id": "b",
                              "text": "Keeps its shape."
                    },
                    {
                              "id": "c",
                              "text": "Fills space, can't see."
                    },
                    {
                              "id": "d",
                              "text": "What it looks like."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Keeps its shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Keeps its shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Keeps its shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fills space, can't see."
                    },
                    {
                              "id": "b",
                              "text": "What it looks like."
                    },
                    {
                              "id": "c",
                              "text": "What holds it."
                    },
                    {
                              "id": "d",
                              "text": "Takes shape of container."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Takes shape of container."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Takes shape of container.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Takes shape of container.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-solid-liquid-gas-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gas\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it looks like."
                    },
                    {
                              "id": "b",
                              "text": "Fills space, can't see."
                    },
                    {
                              "id": "c",
                              "text": "What holds it."
                    },
                    {
                              "id": "d",
                              "text": "Move like liquid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gas\" means Fills space, can't see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gas\" means Fills space, can't see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gas** = Fills space, can't see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
