import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m5-u5-lesson-5-4",
  code: "5-4",
  title: "Volume Practice",
  goal: "I CAN solve volume problems with rectangular prisms.",
  standards: ["5.MD.C.4", "5.MD.C.5"],
  vocabulary: [
    { term: "Volume", definition: "Space inside 3D shape." },
    { term: "Rectangular prism", definition: "Box shape." },
    { term: "Cubic unit", definition: "cm³, m³, etc." },
    { term: "Layer", definition: "One level of cubes." },
    { term: "Formula", definition: "V = l x w x h." },
    { term: "Capacity", definition: "How much it holds." },
    { term: "Cube", definition: "All sides equal." },
    { term: "Edge", definition: "Side of cube." },
  ],
  concepts: [
    {
      id: "m5-u5-volume-practice",
      title: "Volume Practice",
      skill: "Find volume of rectangular prisms and solve volume word problems.",
      lesson: {
        sections: [
          {
            heading: "Volume",
            body: "l x w x h = space inside.",
          },
          {
            heading: "Layers",
            body: "l x w = one layer; x h = total.",
          },
        ],
        keyFormulas: [
          { name: "Volume", statement: "V = l x w x h" },
        ],
        workedExample: {
          problem: "A box is 8 cm x 6 cm x 4 cm. Volume? How many 2 cm cubes fit?",
          solution: "8 x 6 x 4 = 192 cm³. Each cube is 8 cm³, so 192/8 = 24 cubes.",
        },
      },
      questions: [
        {
          id: "m5-u5-volume-practice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A box is 10 cm x 5 cm x 2 cm. Volume?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "100 cm³"
                    },
                    {
                              "id": "b",
                              "text": "17 cm³"
                    },
                    {
                              "id": "c",
                              "text": "50 cm³"
                    },
                    {
                              "id": "d",
                              "text": "200 cm³"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 x 5 x 2 = 100 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 x 5 x 2 = 100 cm³.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100 cm³",
          "commonErrors": [
                    "Wrong volume."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cube has edge 4 cm. Volume?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "16 cm³"
                    },
                    {
                              "id": "b",
                              "text": "64 cm³"
                    },
                    {
                              "id": "c",
                              "text": "12 cm³"
                    },
                    {
                              "id": "d",
                              "text": "48 cm³"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 x 4 x 4 = 64 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 x 4 x 4 = 64 cm³.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "64 cm³",
          "commonErrors": [
                    "Wrong volume."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the volume of a prism 9 cm x 7 cm x 5 cm AND a cube with edge 6 cm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volume",
                              "statement": "315 cm³ and 216 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds both volumes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Prism: 9x7x5 = 315 cm³; Cube: 6x6x6 = 216 cm³**",
          "commonErrors": [
                    "Wrong volumes.",
                    "Only one found."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Volume is measured in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square units"
                    },
                    {
                              "id": "b",
                              "text": "cubic units"
                    },
                    {
                              "id": "c",
                              "text": "linear units"
                    },
                    {
                              "id": "d",
                              "text": "units"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Volume = cubic units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Volume = cubic units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cubic units",
          "commonErrors": [
                    "Confuses with area."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fish tank is 40 cm long, 20 cm wide, 25 cm tall. How many liters of water can it hold?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volume",
                              "statement": "20,000 cm³ = 20 L."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates volume.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Converts to liters.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**40 x 20 x 25 = 20,000 cm³ = 20,000 mL = 20 L**",
          "commonErrors": [
                    "Wrong volume.",
                    "No conversion."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Box shape."
                    },
                    {
                              "id": "b",
                              "text": "Space inside 3D shape."
                    },
                    {
                              "id": "c",
                              "text": "cm³, m³, etc."
                    },
                    {
                              "id": "d",
                              "text": "One level of cubes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Volume\" means Space inside 3D shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means Space inside 3D shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Volume** = Space inside 3D shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangular prism\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cm³, m³, etc."
                    },
                    {
                              "id": "b",
                              "text": "One level of cubes."
                    },
                    {
                              "id": "c",
                              "text": "V = l x w x h."
                    },
                    {
                              "id": "d",
                              "text": "Box shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangular prism\" means Box shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangular prism\" means Box shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangular prism** = Box shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-volume-practice-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cubic unit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One level of cubes."
                    },
                    {
                              "id": "b",
                              "text": "cm³, m³, etc."
                    },
                    {
                              "id": "c",
                              "text": "V = l x w x h."
                    },
                    {
                              "id": "d",
                              "text": "How much it holds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cubic unit\" means cm³, m³, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cubic unit\" means cm³, m³, etc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cubic unit** = cm³, m³, etc.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
