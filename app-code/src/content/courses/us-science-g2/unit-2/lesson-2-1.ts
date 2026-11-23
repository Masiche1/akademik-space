import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "sci2-u2-lesson-2-1",
  code: "2-1",
  title: "States of Matter",
  goal: "I CAN identify solids, liquids and gases.",
  standards: ["NGSS 2-PS1-1"],
  vocabulary: [
    { term: "Matter", definition: "Everything that takes up space." },
    { term: "Solid", definition: "Has fixed shape." },
    { term: "Liquid", definition: "Takes shape of container." },
    { term: "Gas", definition: "Fills all space." },
    { term: "State", definition: "Solid, liquid or gas." },
    { term: "Shape", definition: "What it looks like." },
    { term: "Container", definition: "Holds liquids/gases." },
    { term: "Molecule", definition: "Tiny particle of matter." },
  ],
  concepts: [
    {
      id: "sci2-u2-states-of-matter",
      title: "States of matter",
      skill: "Identify and describe solids, liquids and gases.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "**Matter** exists as **solids** (fixed shape), **liquids** (takes container shape), or **gases** (fills all space). Water can be ice (solid), water (liquid), or steam (gas).",
          },
          {
            heading: "How to tell",
            body: "A **solid** keeps its shape. A **liquid** flows and takes the shape of its container. A **gas** spreads out to fill any space.",
          },
        ],
        keyFormulas: [
          { name: "Solid", statement: "Fixed shape." },
          { name: "Liquid", statement: "Takes container shape." },
          { name: "Gas", statement: "Fills all space." },
        ],
        workedExample: {
          problem: "Is water in a glass a solid, liquid or gas?",
          solution: "It's a **liquid** — it takes the shape of the glass.",
        },
      },
      questions: [
        {
          id: "sci2-u2-states-of-matter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'solid' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no shape"
                    },
                    {
                              "id": "b",
                              "text": "a fixed shape"
                    },
                    {
                              "id": "c",
                              "text": "no weight"
                    },
                    {
                              "id": "d",
                              "text": "no volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solid = fixed shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solid = fixed shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fixed shape**",
          "commonErrors": [
                    "Confuses with liquid."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water poured into a glass becomes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a solid"
                    },
                    {
                              "id": "b",
                              "text": "a liquid taking the glass shape"
                    },
                    {
                              "id": "c",
                              "text": "a gas"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Liquid takes container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liquid takes container shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**liquid**",
          "commonErrors": [
                    "Picks solid or gas."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give one example of a solid, one liquid, one gas.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States of matter",
                              "statement": "Solid + liquid + gas examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives all three examples.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Solid: ice. Liquid: water. Gas: steam.'**",
          "commonErrors": [
                    "Missing a state.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'gas' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a solid"
                    },
                    {
                              "id": "b",
                              "text": "something that fills all available space"
                    },
                    {
                              "id": "c",
                              "text": "a liquid"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gas fills all space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gas fills all space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fills all space**",
          "commonErrors": [
                    "Confuses with liquid."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find examples of all three states of matter around you. Describe each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States of matter",
                              "statement": "Find solid + liquid + gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds solid example.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds liquid + gas examples.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Solid: pencil. Liquid: water. Gas: air.'**",
          "commonErrors": [
                    "Cannot find.",
                    "Only one state."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Has fixed shape."
                    },
                    {
                              "id": "b",
                              "text": "Everything that takes up space."
                    },
                    {
                              "id": "c",
                              "text": "Takes shape of container."
                    },
                    {
                              "id": "d",
                              "text": "Fills all space."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Everything that takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Everything that takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Everything that takes up space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q7",
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
                              "text": "Fills all space."
                    },
                    {
                              "id": "c",
                              "text": "Solid, liquid or gas."
                    },
                    {
                              "id": "d",
                              "text": "Has fixed shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Has fixed shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Has fixed shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Has fixed shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-states-of-matter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fills all space."
                    },
                    {
                              "id": "b",
                              "text": "Takes shape of container."
                    },
                    {
                              "id": "c",
                              "text": "Solid, liquid or gas."
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
      ],
    },
  ],
};
