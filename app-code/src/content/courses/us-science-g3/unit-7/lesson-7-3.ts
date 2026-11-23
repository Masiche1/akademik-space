import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "sci3-u7-lesson-7-3",
  code: "7-3",
  title: "Minerals",
  goal: "I CAN describe minerals and how they differ from rocks.",
  standards: ["ESS2.A", "ESS2.B"],
  vocabulary: [
    { term: "Mineral", definition: "Natural solid substance." },
    { term: "Crystal", definition: "Regular shape." },
    { term: "Hardness", definition: "How hard it is." },
    { term: "Color", definition: "What it looks like." },
    { term: "Luster", definition: "How it shines." },
    { term: "Rock", definition: "Made of minerals." },
    { term: "Identify", definition: "Tell which mineral." },
    { term: "Property", definition: "Quality to test." },
  ],
  concepts: [
    {
      id: "sci3-u7-minerals",
      title: "Minerals",
      skill: "Describe minerals and how to identify them by properties.",
      lesson: {
        sections: [
          {
            heading: "Minerals vs rocks",
            body: "A **mineral** is a natural solid with specific properties. A **rock** is made of one or more minerals. Minerals have **color**, **hardness**, **luster** (shine), and **crystal** shape.",
          },
          {
            heading: "Identifying minerals",
            body: "We identify minerals by testing **properties**: scratch test (hardness), color, shine, shape. Different minerals have different properties.",
          },
        ],
        keyFormulas: [
          { name: "Mineral", statement: "Natural solid + properties (color, hardness, luster) = mineral." },
          { name: "Rock", statement: "Made of minerals." },
        ],
        workedExample: {
          problem: "Is a diamond a mineral or a rock?",
          solution: "Diamond is a **mineral** — it's a pure natural solid with specific properties.",
        },
      },
      questions: [
        {
          id: "sci3-u7-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'mineral' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a rock"
                    },
                    {
                              "id": "b",
                              "text": "a natural solid with specific properties"
                    },
                    {
                              "id": "c",
                              "text": "a plant"
                    },
                    {
                              "id": "d",
                              "text": "a liquid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mineral = natural solid with properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mineral = natural solid with properties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a natural solid with specific properties",
          "commonErrors": [
                    "Thinks mineral is a rock."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rocks are made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only one mineral"
                    },
                    {
                              "id": "b",
                              "text": "one or more minerals"
                    },
                    {
                              "id": "c",
                              "text": "plants"
                    },
                    {
                              "id": "d",
                              "text": "water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rocks made of minerals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rocks made of minerals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one or more minerals",
          "commonErrors": [
                    "Thinks rocks aren't minerals."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two properties used to identify minerals and explain how.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Minerals",
                              "statement": "2 properties + identification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 properties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains identification.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Hardness: scratch test. Color: visual check.'**",
          "commonErrors": [
                    "Cannot name properties.",
                    "No identification."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Luster' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color"
                    },
                    {
                              "id": "b",
                              "text": "how a mineral shines"
                    },
                    {
                              "id": "c",
                              "text": "hardness"
                    },
                    {
                              "id": "d",
                              "text": "size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Luster = shine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Luster = shine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how a mineral shines",
          "commonErrors": [
                    "Thinks luster is color."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a mineral and a rock. How are they different? Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Minerals",
                              "statement": "Mineral vs rock + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares mineral vs rock.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Mineral: quartz (pure). Rock: granite (made of minerals).'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No examples."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mineral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Regular shape."
                    },
                    {
                              "id": "b",
                              "text": "Natural solid substance."
                    },
                    {
                              "id": "c",
                              "text": "How hard it is."
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
                              "statement": "\"Mineral\" means Natural solid substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mineral\" means Natural solid substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mineral** = Natural solid substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Crystal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How hard it is."
                    },
                    {
                              "id": "b",
                              "text": "What it looks like."
                    },
                    {
                              "id": "c",
                              "text": "How it shines."
                    },
                    {
                              "id": "d",
                              "text": "Regular shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Crystal\" means Regular shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Crystal\" means Regular shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Crystal** = Regular shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-minerals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hardness\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it looks like."
                    },
                    {
                              "id": "b",
                              "text": "How hard it is."
                    },
                    {
                              "id": "c",
                              "text": "How it shines."
                    },
                    {
                              "id": "d",
                              "text": "Made of minerals."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hardness\" means How hard it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hardness\" means How hard it is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hardness** = How hard it is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
