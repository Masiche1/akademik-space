import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "sci2-u8-lesson-8-4",
  code: "8-4",
  title: "Choosing Materials",
  goal: "I CAN choose materials that meet design needs.",
  standards: ["NGSS K-2-ETS1-3"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Choose", definition: "Pick the right one." },
    { term: "Property", definition: "Characteristic." },
    { term: "Strength", definition: "How strong." },
    { term: "Flexibility", definition: "Can bend." },
    { term: "Weight", definition: "How heavy." },
    { term: "Durability", definition: "Lasts long." },
    { term: "Cost", definition: "How expensive." },
    { term: "Available", definition: "Can get it." },
    { term: "Purpose", definition: "What it's for." },
  ],
  concepts: [
    {
      id: "sci2-u8-design-materials",
      title: "Choosing materials",
      skill: "Choose materials based on properties needed for the design.",
      lesson: {
        sections: [
          {
            heading: "Materials matter",
            body: "The **material** you choose affects how well your design works. A bridge needs **strong** material; a boat needs **waterproof** material; a kite needs **light** material.",
          },
          {
            heading: "Match properties to needs",
            body: "Think about **properties**: **strength**, **flexibility**, **weight**, **durability**, **cost**, **availability**. Choose the material that best meets your needs.",
          },
        ],
        keyFormulas: [
          { name: "Choose material", statement: "Need -> property -> best material = good choice." },
        ],
        workedExample: {
          problem: "You need to build a boat that floats. What material properties do you need?",
          solution: "Need: **waterproof** and **light** — plastic or wood sealed.",
        },
      },
      questions: [
        {
          id: "sci2-u8-design-materials-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a bridge, you need material that is...",
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
                              "statement": "Bridge needs strong material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bridge needs strong material.",
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
          id: "sci2-u8-design-materials-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When choosing materials, consider...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only color"
                    },
                    {
                              "id": "b",
                              "text": "properties like strength, weight, flexibility"
                    },
                    {
                              "id": "c",
                              "text": "only cost"
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
                              "statement": "Consider properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consider properties.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**properties**",
          "commonErrors": [
                    "Picks one factor."
          ]
},
        },
        {
          id: "sci2-u8-design-materials-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a material for a specific design need and explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choose materials",
                              "statement": "Need -> property -> material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses material + reason.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Umbrella: waterproof fabric because it keeps rain off.'**",
          "commonErrors": [
                    "Wrong choice.",
                    "No reason."
          ]
},
        },
        {
          id: "sci2-u8-design-materials-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Durability' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how heavy"
                    },
                    {
                              "id": "b",
                              "text": "how long it lasts"
                    },
                    {
                              "id": "c",
                              "text": "how strong"
                    },
                    {
                              "id": "d",
                              "text": "how flexible"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Durability = lasts long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Durability = lasts long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**lasts long**",
          "commonErrors": [
                    "Confuses with strength."
          ]
},
        },
        {
          id: "sci2-u8-design-materials-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two materials for a design. Which is better and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Choose materials",
                              "statement": "Two materials + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes first material.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes second + better choice.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Paper: light but weak. Cardboard: stronger, still light — better for tower.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No better choice."
          ]
},
        },
        {
          id: "sci2-u8-design-materials-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pick the right one."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "Characteristic."
                    },
                    {
                              "id": "d",
                              "text": "How strong."
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
          id: "sci2-u8-design-materials-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Choose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Characteristic."
                    },
                    {
                              "id": "b",
                              "text": "How strong."
                    },
                    {
                              "id": "c",
                              "text": "Can bend."
                    },
                    {
                              "id": "d",
                              "text": "Pick the right one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Choose\" means Pick the right one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Choose\" means Pick the right one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Choose** = Pick the right one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-design-materials-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How strong."
                    },
                    {
                              "id": "b",
                              "text": "Characteristic."
                    },
                    {
                              "id": "c",
                              "text": "Can bend."
                    },
                    {
                              "id": "d",
                              "text": "How heavy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Characteristic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
