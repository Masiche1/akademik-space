import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "sci3-u1-lesson-1-5",
  code: "1-5",
  title: "Types of Plants",
  goal: "I CAN describe different types of plants and their characteristics.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Flowering plant", definition: "Plant with flowers." },
    { term: "Tree", definition: "Tall plant with trunk." },
    { term: "Grass", definition: "Short plant." },
    { term: "Vine", definition: "Climbing plant." },
    { term: "Herb", definition: "Small leafy plant." },
    { term: "Fruit", definition: "Food from plant." },
    { term: "Vegetable", definition: "Edible plant part." },
    { term: "Bark", definition: "Outer covering of tree." },
  ],
  concepts: [
    {
      id: "sci3-u1-plant-types",
      title: "Types of plants",
      skill: "Describe different plant types: trees, grass, vines, flowers, herbs.",
      lesson: {
        sections: [
          {
            heading: "Many kinds",
            body: "Plants come in many types: **trees** (tall with trunk), **grass** (short), **vines** (climb), **flowers** (colorful), **herbs** (small leafy).",
          },
          {
            heading: "What we use",
            body: "We eat **fruit** and **vegetables** from plants. Trees give us **wood** and **oxygen**.",
          },
        ],
        keyFormulas: [
          { name: "Plant types", statement: "Trees + grass + vines + flowers + herbs = many kinds of plants." },
        ],
        workedExample: {
          problem: "Is a rose bush a tree, grass, vine or flower?",
          solution: "A rose bush is a **flowering plant** — it grows flowers.",
        },
      },
      questions: [
        {
          id: "sci3-u1-plant-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tree is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a small plant"
                    },
                    {
                              "id": "b",
                              "text": "a tall plant with a trunk"
                    },
                    {
                              "id": "c",
                              "text": "a grass"
                    },
                    {
                              "id": "d",
                              "text": "a flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tree = tall with trunk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tree = tall with trunk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a tall plant with a trunk",
          "commonErrors": [
                    "Thinks it's grass."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a vegetable?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "apple"
                    },
                    {
                              "id": "b",
                              "text": "carrot"
                    },
                    {
                              "id": "c",
                              "text": "grape"
                    },
                    {
                              "id": "d",
                              "text": "banana"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Carrot is a vegetable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carrot is a vegetable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "carrot",
          "commonErrors": [
                    "Thinks all are fruit."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two types of plants and describe how they are different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant types",
                              "statement": "2 types + differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 types + differences.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Tree=tall with trunk; grass=short and covers ground.'**",
          "commonErrors": [
                    "Cannot name types.",
                    "No differences."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'vine' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a tree"
                    },
                    {
                              "id": "b",
                              "text": "a plant that climbs"
                    },
                    {
                              "id": "c",
                              "text": "a grass"
                    },
                    {
                              "id": "d",
                              "text": "a flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Vine = climbing plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vine = climbing plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a plant that climbs",
          "commonErrors": [
                    "Thinks it's a tree."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find a plant in your home or school. What type is it? How do you know?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Plant types",
                              "statement": "Identify type + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies plant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names type + evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'It's a flower — it has colorful petals and blooms.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No evidence."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Flowering plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tall plant with trunk."
                    },
                    {
                              "id": "b",
                              "text": "Plant with flowers."
                    },
                    {
                              "id": "c",
                              "text": "Short plant."
                    },
                    {
                              "id": "d",
                              "text": "Climbing plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Flowering plant\" means Plant with flowers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Flowering plant\" means Plant with flowers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Flowering plant** = Plant with flowers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tree\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Short plant."
                    },
                    {
                              "id": "b",
                              "text": "Climbing plant."
                    },
                    {
                              "id": "c",
                              "text": "Small leafy plant."
                    },
                    {
                              "id": "d",
                              "text": "Tall plant with trunk."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tree\" means Tall plant with trunk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tree\" means Tall plant with trunk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tree** = Tall plant with trunk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u1-plant-types-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grass\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Climbing plant."
                    },
                    {
                              "id": "b",
                              "text": "Short plant."
                    },
                    {
                              "id": "c",
                              "text": "Small leafy plant."
                    },
                    {
                              "id": "d",
                              "text": "Food from plant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Grass\" means Short plant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grass\" means Short plant.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Grass** = Short plant.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
