import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "s0-u4-lesson-4-1",
  code: "4-1",
  title: "Types of Materials",
  goal: "I CAN identify different materials and their uses.",
  standards: ["K-PS1-1", "K-PS1-2"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Wood", definition: "Hard material from trees." },
    { term: "Plastic", definition: "Light, bendy material." },
    { term: "Metal", definition: "Hard, shiny material." },
    { term: "Fabric", definition: "Soft cloth material." },
    { term: "Glass", definition: "Hard, see-through material." },
    { term: "Paper", definition: "Thin material for writing/drawing." },
    { term: "Use", definition: "What something is for." },
  ],
  concepts: [
    {
      id: "s0-u4-material-types",
      title: "Types of materials",
      skill: "Identify common materials (wood, plastic, metal, fabric, glass, paper) and their uses.",
      lesson: {
        sections: [
          {
            heading: "What is a material?",
            body: "A **material** is what something is **made of**. Common materials include **wood** (trees), **plastic**, **metal**, **fabric** (cloth), **glass**, and **paper**.",
          },
          {
            heading: "Materials have uses",
            body: "Each material has a **use** — wood for furniture, metal for strength, fabric for clothing, glass for windows, paper for writing.",
          },
        ],
        keyFormulas: [
          { name: "Materials", statement: "Wood, plastic, metal, fabric, glass, paper — each has uses." },
        ],
        workedExample: {
          problem: "What material is a window made of? Why?",
          solution: "**Glass** — because it is **hard** and **see-through**, so we can see outside.",
        },
      },
      questions: [
        {
          id: "s0-u4-material-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'material' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "what something is made of"
                    },
                    {
                              "id": "c",
                              "text": "a shape"
                    },
                    {
                              "id": "d",
                              "text": "a size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Material = what it's made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Material = what it's made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**what it's made of**",
          "commonErrors": [
                    "Confuses with property."
          ]
},
        },
        {
          id: "s0-u4-material-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A window is usually made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wood"
                    },
                    {
                              "id": "b",
                              "text": "glass"
                    },
                    {
                              "id": "c",
                              "text": "fabric"
                    },
                    {
                              "id": "d",
                              "text": "paper"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Windows are made of glass (see-through)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Windows are made of glass (see-through).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**glass**",
          "commonErrors": [
                    "Picks wrong material."
          ]
},
        },
        {
          id: "s0-u4-material-types-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three materials you see around you and what each is used for.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "3 materials + uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 materials + uses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Wood=furniture, Metal=pots, Fabric=clothes.'**",
          "commonErrors": [
                    "Cannot name materials.",
                    "No uses."
          ]
},
        },
        {
          id: "s0-u4-material-types-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Fabric' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hard metal"
                    },
                    {
                              "id": "b",
                              "text": "soft cloth material"
                    },
                    {
                              "id": "c",
                              "text": "glass"
                    },
                    {
                              "id": "d",
                              "text": "paper"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fabric = cloth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fabric = cloth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**soft cloth**",
          "commonErrors": [
                    "Confuses with metal."
          ]
},
        },
        {
          id: "s0-u4-material-types-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose an object (like a chair or cup). What material is it made of? Why is that material good for it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "Object + material + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names material.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains why good choice.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Chair=wood; strong and lasts long.'**",
          "commonErrors": [
                    "Cannot identify material.",
                    "No reason."
          ]
},
        },
        {
          id: "s0-u4-material-types-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hard material from trees."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "Light, bendy material."
                    },
                    {
                              "id": "d",
                              "text": "Hard, shiny material."
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
          id: "s0-u4-material-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wood\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Light, bendy material."
                    },
                    {
                              "id": "b",
                              "text": "Hard, shiny material."
                    },
                    {
                              "id": "c",
                              "text": "Soft cloth material."
                    },
                    {
                              "id": "d",
                              "text": "Hard material from trees."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wood\" means Hard material from trees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wood\" means Hard material from trees.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wood** = Hard material from trees.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u4-material-types-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plastic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hard, shiny material."
                    },
                    {
                              "id": "b",
                              "text": "Light, bendy material."
                    },
                    {
                              "id": "c",
                              "text": "Soft cloth material."
                    },
                    {
                              "id": "d",
                              "text": "Hard, see-through material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plastic\" means Light, bendy material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plastic\" means Light, bendy material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plastic** = Light, bendy material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
