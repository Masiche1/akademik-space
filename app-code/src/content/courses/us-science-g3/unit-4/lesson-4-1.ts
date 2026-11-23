import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "sci3-u4-lesson-4-1",
  code: "4-1",
  title: "Three States of Matter",
  goal: "I CAN identify solids, liquids and gases.",
  standards: ["PS1.A"],
  vocabulary: [
    { term: "Matter", definition: "Anything that takes up space." },
    { term: "Solid", definition: "Fixed shape and volume." },
    { term: "Liquid", definition: "Fixed volume, takes shape of container." },
    { term: "Gas", definition: "No fixed shape or volume." },
    { term: "State", definition: "Form of matter." },
    { term: "Particle", definition: "Tiny piece of matter." },
    { term: "Shape", definition: "What it looks like." },
    { term: "Volume", definition: "How much space it takes." },
  ],
  concepts: [
    {
      id: "sci3-u4-states-intro",
      title: "Three states of matter",
      skill: "Identify solids (fixed shape/volume), liquids (fixed volume, takes container shape), gases (no fixed shape/volume).",
      lesson: {
        sections: [
          {
            heading: "Matter has states",
            body: "All **matter** is in one of three states: **solid** (fixed shape and volume), **liquid** (fixed volume but takes container shape), **gas** (no fixed shape or volume).",
          },
          {
            heading: "Examples",
            body: "Ice = solid; water = liquid; steam = gas. Rock = solid; milk = liquid; air = gas.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid (fixed shape+volume) + Liquid (fixed volume) + Gas (no fixed) = 3 states." },
        ],
        workedExample: {
          problem: "Is steam a solid, liquid or gas?",
          solution: "Steam is a **gas** — it has no fixed shape or volume.",
        },
      },
      questions: [
        {
          id: "sci3-u4-states-intro-q1",
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
                              "text": "fixed volume only"
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
                              "statement": "Solid = fixed shape + volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solid = fixed shape + volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fixed shape and volume",
          "commonErrors": [
                    "Thinks solids take container shape."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'liquid' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fixed shape"
                    },
                    {
                              "id": "b",
                              "text": "fixed volume but takes container shape"
                    },
                    {
                              "id": "c",
                              "text": "no volume"
                    },
                    {
                              "id": "d",
                              "text": "a gas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Liquid = fixed volume, container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liquid = fixed volume, container shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fixed volume but takes container shape",
          "commonErrors": [
                    "Thinks liquids have fixed shape."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name one solid, one liquid and one gas. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States",
                              "statement": "Solid + liquid + gas + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all 3 states + examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Solid: ice; Liquid: water; Gas: steam.'**",
          "commonErrors": [
                    "Missing states.",
                    "No examples."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q4",
          difficulty: "foundation",
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
                              "text": "a container"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gas = no fixed shape/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gas = no fixed shape/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "no fixed shape or volume",
          "commonErrors": [
                    "Thinks gases have fixed shape."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Classify these: ice cube, milk, air, rock, water, steam.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States",
                              "statement": "Solid/liquid/gas classification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all 6.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Ice cube=solid, milk=liquid, air=gas, rock=solid, water=liquid, steam=gas**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Cannot classify."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed shape and volume."
                    },
                    {
                              "id": "b",
                              "text": "Anything that takes up space."
                    },
                    {
                              "id": "c",
                              "text": "Fixed volume, takes shape of container."
                    },
                    {
                              "id": "d",
                              "text": "No fixed shape or volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Anything that takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Anything that takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Anything that takes up space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed volume, takes shape of container."
                    },
                    {
                              "id": "b",
                              "text": "No fixed shape or volume."
                    },
                    {
                              "id": "c",
                              "text": "Form of matter."
                    },
                    {
                              "id": "d",
                              "text": "Fixed shape and volume."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Fixed shape and volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Fixed shape and volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Fixed shape and volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-states-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No fixed shape or volume."
                    },
                    {
                              "id": "b",
                              "text": "Fixed volume, takes shape of container."
                    },
                    {
                              "id": "c",
                              "text": "Form of matter."
                    },
                    {
                              "id": "d",
                              "text": "Tiny piece of matter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Fixed volume, takes shape of container."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Fixed volume, takes shape of container.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Fixed volume, takes shape of container.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
