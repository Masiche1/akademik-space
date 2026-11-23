import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "sci6-u3-lesson-3-1",
  code: "3-1",
  title: "States of Matter",
  goal: "I CAN describe the three states of matter.",
  standards: ["MS-PS1-1"],
  vocabulary: [
    { term: "Matter", definition: "Has mass/volume." },
    { term: "Solid", definition: "Fixed shape/volume." },
    { term: "Liquid", definition: "Fixed volume, takes shape." },
    { term: "Gas", definition: "No fixed shape/volume." },
    { term: "Particle", definition: "Tiny piece." },
    { term: "Phase", definition: "State." },
    { term: "Melt", definition: "Solid to liquid." },
    { term: "Evaporate", definition: "Liquid to gas." },
  ],
  concepts: [
    {
      id: "sci6-u3-states-of-matter",
      title: "States of matter",
      skill: "Describe solids, liquids and gases and how they differ.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "**Solid**: fixed shape/volume, particles tightly packed. **Liquid**: fixed volume, takes container shape. **Gas**: no fixed shape/volume, particles spread out.",
          },
          {
            heading: "Changes",
            body: "Matter can **change states**: melting (solid->liquid), evaporation (liquid->gas), condensation (gas->liquid), freezing (liquid->solid).",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid + liquid + gas = three phases of matter." },
        ],
        workedExample: {
          problem: "Ice melts into water, then boils into steam. Describe each state change.",
          solution: "**Solid -> liquid (melting); Liquid -> gas (evaporation/boiling).**",
        },
      },
      questions: [
        {
          id: "sci6-u3-states-of-matter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'solid' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no fixed shape"
                    },
                    {
                              "id": "b",
                              "text": "fixed shape and volume"
                    },
                    {
                              "id": "c",
                              "text": "no fixed volume"
                    },
                    {
                              "id": "d",
                              "text": "only fixed volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fixed shape/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed shape/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fixed shape and volume",
          "commonErrors": [
                    "Confuses with other states."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'gas' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fixed shape"
                    },
                    {
                              "id": "b",
                              "text": "no fixed shape or volume"
                    },
                    {
                              "id": "c",
                              "text": "fixed volume"
                    },
                    {
                              "id": "d",
                              "text": "fixed shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "No fixed shape/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No fixed shape/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "no fixed shape or volume",
          "commonErrors": [
                    "Confuses with other states."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these as solid, liquid, or gas: ice cube, water in a glass, air in a balloon, steam.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States",
                              "statement": "All four classified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Ice cube: solid; Water: liquid; Air: gas; Steam: gas.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evaporation' is the change from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "solid to liquid"
                    },
                    {
                              "id": "b",
                              "text": "liquid to gas"
                    },
                    {
                              "id": "c",
                              "text": "gas to liquid"
                    },
                    {
                              "id": "d",
                              "text": "liquid to solid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Liquid to gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liquid to gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "liquid to gas",
          "commonErrors": [
                    "Wrong change."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Describe the differences between solid, liquid, and gas states of matter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States",
                              "statement": "All three described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Solid: fixed shape/volume; Liquid: fixed volume, takes shape; Gas: no fixed shape/volume.**",
          "commonErrors": [
                    "Missing states.",
                    "Vague descriptions."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed shape/volume."
                    },
                    {
                              "id": "b",
                              "text": "Has mass/volume."
                    },
                    {
                              "id": "c",
                              "text": "Fixed volume, takes shape."
                    },
                    {
                              "id": "d",
                              "text": "No fixed shape/volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Has mass/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Has mass/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Has mass/volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed volume, takes shape."
                    },
                    {
                              "id": "b",
                              "text": "No fixed shape/volume."
                    },
                    {
                              "id": "c",
                              "text": "Tiny piece."
                    },
                    {
                              "id": "d",
                              "text": "Fixed shape/volume."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Fixed shape/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Fixed shape/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Fixed shape/volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-states-of-matter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No fixed shape/volume."
                    },
                    {
                              "id": "b",
                              "text": "Fixed volume, takes shape."
                    },
                    {
                              "id": "c",
                              "text": "Tiny piece."
                    },
                    {
                              "id": "d",
                              "text": "State."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Fixed volume, takes shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Fixed volume, takes shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Fixed volume, takes shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
