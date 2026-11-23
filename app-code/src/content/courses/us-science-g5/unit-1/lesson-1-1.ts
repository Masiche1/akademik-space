import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "sci5-u1-lesson-1-1",
  code: "1-1",
  title: "Physical Properties",
  goal: "I CAN describe physical properties of matter.",
  standards: ["PS1.A"],
  vocabulary: [
    { term: "Matter", definition: "Anything that has mass and takes up space." },
    { term: "Physical property", definition: "Observable without changing substance." },
    { term: "Mass", definition: "Amount of matter." },
    { term: "Volume", definition: "Amount of space." },
    { term: "Density", definition: "Mass per volume." },
    { term: "Color", definition: "Visual property." },
    { term: "Texture", definition: "How it feels." },
    { term: "Solubility", definition: "Dissolves in liquid." },
  ],
  concepts: [
    {
      id: "sci5-u1-physical-properties",
      title: "Physical properties",
      skill: "Identify and describe physical properties of matter.",
      lesson: {
        sections: [
          {
            heading: "Observable",
            body: "**Physical properties** can be observed **without changing** the substance: color, texture, mass, volume, density, solubility.",
          },
          {
            heading: "Examples",
            body: "Ice is **colorless**, **hard**, **less dense** than water. Sugar is **sweet**, **soluble** in water.",
          },
        ],
        keyFormulas: [
          { name: "Physical properties", statement: "Observable without changing substance." },
        ],
        workedExample: {
          problem: "List 3 physical properties of a rock.",
          solution: "Hard, gray, heavy (high density), rough texture.",
        },
      },
      questions: [
        {
          id: "sci5-u1-physical-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'physical property' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how it reacts"
                    },
                    {
                              "id": "b",
                              "text": "observable without changing the substance"
                    },
                    {
                              "id": "c",
                              "text": "only color"
                    },
                    {
                              "id": "d",
                              "text": "only size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Observable without changing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observable without changing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "observable without changing the substance",
          "commonErrors": [
                    "Confuses with chemical."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a physical property?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flammability"
                    },
                    {
                              "id": "b",
                              "text": "color"
                    },
                    {
                              "id": "c",
                              "text": "reactivity"
                    },
                    {
                              "id": "d",
                              "text": "acidity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Color is physical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Color is physical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "color",
          "commonErrors": [
                    "Confuses with chemical."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe 3 physical properties of an object (e.g., a pencil, rock, or water).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Physical",
                              "statement": "3 properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists 3 properties.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., Rock: hard, gray, heavy, rough.**",
          "commonErrors": [
                    "Fewer than 3.",
                    "Wrong properties."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Solubility' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how hard it is"
                    },
                    {
                              "id": "b",
                              "text": "whether it dissolves in liquid"
                    },
                    {
                              "id": "c",
                              "text": "its color"
                    },
                    {
                              "id": "d",
                              "text": "its weight"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dissolves in liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dissolves in liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "whether it dissolves in liquid",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the physical properties of two different materials. How are they similar/different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Physical",
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
          "finalAnswer": "**e.g., 'Ice: hard, cold, less dense; Water: liquid, flows, denser. Both same substance, different state.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Missing properties."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Observable without changing."
                    },
                    {
                              "id": "b",
                              "text": "Has mass and takes up space."
                    },
                    {
                              "id": "c",
                              "text": "Amount of matter."
                    },
                    {
                              "id": "d",
                              "text": "Amount of space."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Has mass and takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Has mass and takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Has mass and takes up space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Amount of matter."
                    },
                    {
                              "id": "b",
                              "text": "Amount of space."
                    },
                    {
                              "id": "c",
                              "text": "Mass per volume."
                    },
                    {
                              "id": "d",
                              "text": "Observable without changing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical property\" means Observable without changing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical property\" means Observable without changing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical property** = Observable without changing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-physical-properties-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mass\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Amount of space."
                    },
                    {
                              "id": "b",
                              "text": "Amount of matter."
                    },
                    {
                              "id": "c",
                              "text": "Mass per volume."
                    },
                    {
                              "id": "d",
                              "text": "Visual property."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mass\" means Amount of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mass\" means Amount of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mass** = Amount of matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
