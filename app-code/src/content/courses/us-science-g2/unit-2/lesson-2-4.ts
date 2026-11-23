import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "sci2-u2-lesson-2-4",
  code: "2-4",
  title: "Materials and Their Uses",
  goal: "I CAN describe why materials are chosen for different purposes.",
  standards: ["NGSS 2-PS1-2"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Wood", definition: "From trees." },
    { term: "Metal", definition: "Strong material." },
    { term: "Plastic", definition: "Light, flexible." },
    { term: "Glass", definition: "Transparent, hard." },
    { term: "Fabric", definition: "Cloth material." },
    { term: "Purpose", definition: "What it's for." },
    { term: "Choose", definition: "Pick the right one." },
  ],
  concepts: [
    {
      id: "sci2-u2-materials-use",
      title: "Materials and their uses",
      skill: "Describe why different materials are chosen for different purposes.",
      lesson: {
        sections: [
          {
            heading: "Right material for the job",
            body: "Different **materials** have different **properties** that make them good for different **purposes**. Wood is strong and light; metal is very strong; glass is transparent.",
          },
          {
            heading: "Why choose?",
            body: "We choose materials based on what we need: a **window** needs to be **transparent** (glass), a **bridge** needs to be **strong** (metal/concrete), a **raincoat** needs to be **waterproof** (plastic/fabric).",
          },
        ],
        keyFormulas: [
          { name: "Choose material", statement: "Need -> property -> material = right choice." },
        ],
        workedExample: {
          problem: "Why is glass used for windows instead of wood?",
          solution: "Because glass is **transparent** — you can see through it; wood is **opaque**.",
        },
      },
      questions: [
        {
          id: "sci2-u2-materials-use-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Glass is chosen for windows because it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soft"
                    },
                    {
                              "id": "b",
                              "text": "transparent"
                    },
                    {
                              "id": "c",
                              "text": "flexible"
                    },
                    {
                              "id": "d",
                              "text": "light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Glass is transparent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glass is transparent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**transparent**",
          "commonErrors": [
                    "Picks wrong property."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Metal is used for bridges because it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soft"
                    },
                    {
                              "id": "b",
                              "text": "strong"
                    },
                    {
                              "id": "c",
                              "text": "transparent"
                    },
                    {
                              "id": "d",
                              "text": "light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Metal is strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metal is strong.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**strong**",
          "commonErrors": [
                    "Picks wrong property."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a material for: a raincoat, a window, a spoon. Explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "Need -> property -> material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses 3 materials + reasons.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Raincoat: waterproof plastic. Window: transparent glass. Spoon: hard metal.'**",
          "commonErrors": [
                    "Wrong choices.",
                    "No reasons."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Purpose' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "what something is for"
                    },
                    {
                              "id": "c",
                              "text": "a size"
                    },
                    {
                              "id": "d",
                              "text": "a shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Purpose = what it's for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose = what it's for.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**what it's for**",
          "commonErrors": [
                    "Confuses with property."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two materials and explain why each is good for its use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "Material -> property -> use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes first material.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes second material.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Wood for pencils: easy to write. Plastic for bottles: waterproof.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No reasons."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From trees."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "Strong material."
                    },
                    {
                              "id": "d",
                              "text": "Light, flexible."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Material\" means What something is made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What something is made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What something is made of.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wood\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strong material."
                    },
                    {
                              "id": "b",
                              "text": "Light, flexible."
                    },
                    {
                              "id": "c",
                              "text": "Transparent, hard."
                    },
                    {
                              "id": "d",
                              "text": "From trees."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wood\" means From trees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wood\" means From trees.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wood** = From trees.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-materials-use-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Metal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light, flexible."
                    },
                    {
                              "id": "b",
                              "text": "Strong material."
                    },
                    {
                              "id": "c",
                              "text": "Transparent, hard."
                    },
                    {
                              "id": "d",
                              "text": "Cloth material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Metal\" means Strong material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Metal\" means Strong material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Metal** = Strong material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
