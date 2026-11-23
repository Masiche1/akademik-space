import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "s1-u4-lesson-4-4",
  code: "4-4",
  title: "Materials and Their Uses",
  goal: "I CAN describe how material properties determine uses.",
  standards: ["1-PS1-1"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Property", definition: "Quality of material." },
    { term: "Use", definition: "What it's for." },
    { term: "Waterproof", definition: "Keeps water out." },
    { term: "Transparent", definition: "Light passes through." },
    { term: "Flexible", definition: "Bends easily." },
    { term: "Rigid", definition: "Doesn't bend." },
    { term: "Match", definition: "Fit together well." },
  ],
  concepts: [
    {
      id: "s1-u4-material-uses",
      title: "Materials and uses",
      skill: "Objects are made of materials chosen for their properties to fit their use.",
      lesson: {
        sections: [
          {
            heading: "Right material for the job",
            body: "Objects are made of **materials** chosen for their **properties**. A raincoat is **waterproof**; a window is **transparent**; a rubber band is **flexible**.",
          },
          {
            heading: "Properties determine use",
            body: "A material's **properties** determine what it's good for — **rigid** materials for support, **flexible** for bending, **waterproof** for rain.",
          },
        ],
        keyFormulas: [
          { name: "Materials", statement: "Property determines use: waterproof=rain, transparent=window, flexible=bend." },
        ],
        workedExample: {
          problem: "Why is a raincoat made of waterproof material?",
          solution: "Because raincoats need to keep water out — **waterproof** material does that.",
        },
      },
      questions: [
        {
          id: "s1-u4-material-uses-q1",
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
                              "text": "a use"
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
                    "Confuses with property/use."
          ]
},
        },
        {
          id: "s1-u4-material-uses-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a window made of glass?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's cheap"
                    },
                    {
                              "id": "b",
                              "text": "glass is transparent so light passes through"
                    },
                    {
                              "id": "c",
                              "text": "it's flexible"
                    },
                    {
                              "id": "d",
                              "text": "it's heavy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Glass is transparent = lets light through."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glass is transparent = lets light through.",
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
          id: "s1-u4-material-uses-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an object. What material is it made of? What property makes it good for its use?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "Material + property + use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names material + property + use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Umbrella: waterproof fabric keeps rain out.'**",
          "commonErrors": [
                    "Cannot identify material.",
                    "No property-use link."
          ]
},
        },
        {
          id: "s1-u4-material-uses-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Waterproof' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "transparent"
                    },
                    {
                              "id": "b",
                              "text": "keeps water out"
                    },
                    {
                              "id": "c",
                              "text": "flexible"
                    },
                    {
                              "id": "d",
                              "text": "heavy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Waterproof = keeps water out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Waterproof = keeps water out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**keeps water out**",
          "commonErrors": [
                    "Confuses with transparent."
          ]
},
        },
        {
          id: "s1-u4-material-uses-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose two objects made of different materials. Explain how each material's properties fit its use.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials",
                              "statement": "2 objects + property-use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 2 objects + materials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links properties to uses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Shirt: cotton (soft, breathable). Boot: rubber (waterproof).'**",
          "commonErrors": [
                    "Fewer than 2 objects.",
                    "No property-use link."
          ]
},
        },
        {
          id: "s1-u4-material-uses-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality of material."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "What it's for."
                    },
                    {
                              "id": "d",
                              "text": "Keeps water out."
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
          id: "s1-u4-material-uses-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's for."
                    },
                    {
                              "id": "b",
                              "text": "Keeps water out."
                    },
                    {
                              "id": "c",
                              "text": "Light passes through."
                    },
                    {
                              "id": "d",
                              "text": "Quality of material."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Quality of material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Quality of material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Quality of material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u4-material-uses-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Use\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keeps water out."
                    },
                    {
                              "id": "b",
                              "text": "What it's for."
                    },
                    {
                              "id": "c",
                              "text": "Light passes through."
                    },
                    {
                              "id": "d",
                              "text": "Bends easily."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Use\" means What it's for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Use\" means What it's for.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Use** = What it's for.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
