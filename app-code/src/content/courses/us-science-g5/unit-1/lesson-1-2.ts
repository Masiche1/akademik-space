import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "sci5-u1-lesson-1-2",
  code: "1-2",
  title: "States of Matter",
  goal: "I CAN identify and explain the three states of matter.",
  standards: ["PS1.A"],
  vocabulary: [
    { term: "Solid", definition: "Fixed shape and volume." },
    { term: "Liquid", definition: "Fixed volume, takes container shape." },
    { term: "Gas", definition: "No fixed shape or volume." },
    { term: "Particle", definition: "Tiny piece of matter." },
    { term: "Vibrate", definition: "Move in place." },
    { term: "Flow", definition: "Move freely." },
    { term: "Spread", definition: "Fill container." },
    { term: "State", definition: "Form of matter." },
  ],
  concepts: [
    {
      id: "sci5-u1-states-of-matter",
      title: "States of matter",
      skill: "Describe the three states of matter and how particles behave.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "**Solid**: fixed shape/volume, particles vibrate in place. **Liquid**: fixed volume, takes container shape, particles flow. **Gas**: no fixed shape/volume, particles spread out.",
          },
          {
            heading: "Particle behavior",
            body: "Particles in solids are **packed tightly** and **vibrate**; in liquids they **flow**; in gases they **move freely** and **spread**.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid = packed/vibrate; Liquid = flow; Gas = spread." },
        ],
        workedExample: {
          problem: "Describe the state of steam.",
          solution: "**Gas** — no fixed shape/volume, particles spread to fill container.",
        },
      },
      questions: [
        {
          id: "sci5-u1-states-of-matter-q1",
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
                              "text": "takes container shape"
                    },
                    {
                              "id": "d",
                              "text": "spreads out"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fixed shape and volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed shape and volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fixed shape and volume",
          "commonErrors": [
                    "Confuses with liquid."
          ]
},
        },
        {
          id: "sci5-u1-states-of-matter-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a gas, particles...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "vibrate in place"
                    },
                    {
                              "id": "b",
                              "text": "move freely and spread out"
                    },
                    {
                              "id": "c",
                              "text": "are packed tightly"
                    },
                    {
                              "id": "d",
                              "text": "cannot move"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Move freely and spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Move freely and spread.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "move freely and spread out",
          "commonErrors": [
                    "Confuses with solid."
          ]
},
        },
        {
          id: "sci5-u1-states-of-matter-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the particle behavior in each state: solid, liquid, gas.",
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
          "finalAnswer": "**Solid: packed/vibrate; Liquid: flow/slide; Gas: spread/move freely.**",
          "commonErrors": [
                    "Missing states.",
                    "Wrong behavior."
          ]
},
        },
        {
          id: "sci5-u1-states-of-matter-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'liquid' takes the shape of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "itself"
                    },
                    {
                              "id": "b",
                              "text": "its container"
                    },
                    {
                              "id": "c",
                              "text": "the air"
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
                              "statement": "Container."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Container.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "its container",
          "commonErrors": [
                    "Wrong shape."
          ]
},
        },
        {
          id: "sci5-u1-states-of-matter-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why a gas fills its entire container but a solid doesn't.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "States",
                              "statement": "Particle explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains gas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains solid.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Gas particles move freely and spread; solid particles are packed and vibrate in place.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Missing explanation."
          ]
},
        },
        {
          id: "sci5-u1-states-of-matter-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed volume, takes container shape."
                    },
                    {
                              "id": "b",
                              "text": "Fixed shape and volume."
                    },
                    {
                              "id": "c",
                              "text": "No fixed shape or volume."
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
          id: "sci5-u1-states-of-matter-q7",
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
                              "text": "Tiny piece of matter."
                    },
                    {
                              "id": "c",
                              "text": "Move in place."
                    },
                    {
                              "id": "d",
                              "text": "Fixed volume, takes container shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Fixed volume, takes container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Fixed volume, takes container shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Fixed volume, takes container shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-states-of-matter-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gas\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tiny piece of matter."
                    },
                    {
                              "id": "b",
                              "text": "No fixed shape or volume."
                    },
                    {
                              "id": "c",
                              "text": "Move in place."
                    },
                    {
                              "id": "d",
                              "text": "Move freely."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gas\" means No fixed shape or volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gas\" means No fixed shape or volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gas** = No fixed shape or volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
