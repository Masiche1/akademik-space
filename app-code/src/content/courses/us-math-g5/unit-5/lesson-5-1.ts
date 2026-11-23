import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m5-u5-lesson-5-1",
  code: "5-1",
  title: "Volume Basics",
  goal: "I CAN find the volume of rectangular prisms.",
  standards: ["5.MD.C.4", "5.MD.C.5"],
  vocabulary: [
    { term: "Volume", definition: "Space inside 3D shape." },
    { term: "Rectangular prism", definition: "Box shape." },
    { term: "Length", definition: "How long." },
    { term: "Width", definition: "How wide." },
    { term: "Height", definition: "How tall." },
    { term: "Cubic unit", definition: "Unit of volume." },
    { term: "Formula", definition: "V = l x w x h." },
    { term: "Layer", definition: "One level." },
  ],
  concepts: [
    {
      id: "m5-u5-volume-basics",
      title: "Volume basics",
      skill: "Find the volume of rectangular prisms using V = l x w x h.",
      lesson: {
        sections: [
          {
            heading: "Space inside",
            body: "**Volume** is the amount of **space inside** a 3D shape, measured in **cubic units** (cm³, m³). For a rectangular prism: $V = l \\times w \\times h$.",
          },
          {
            heading: "Layers",
            body: "You can also think of volume as **layers** of unit cubes: length x width = one layer, times height = total.",
          },
        ],
        keyFormulas: [
          { name: "Volume", statement: "V = l x w x h." },
          { name: "Cubic units", statement: "cm³, m³, in³." },
        ],
        workedExample: {
          problem: "A box is 5 cm long, 3 cm wide, 2 cm tall. What's its volume?",
          solution: "$V = 5 \\times 3 \\times 2 = 30$ cm³.",
        },
      },
      questions: [
        {
          id: "m5-u5-volume-basics-q1",
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
          id: "m5-u5-volume-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The formula for volume of a rectangular prism is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "V = l + w + h"
                    },
                    {
                              "id": "b",
                              "text": "V = l x w x h"
                    },
                    {
                              "id": "c",
                              "text": "V = l x w"
                    },
                    {
                              "id": "d",
                              "text": "V = l x h"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "V = l x w x h."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "V = l x w x h.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "V = l x w x h",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m5-u5-volume-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the volume of a prism 6 cm x 4 cm x 3 cm AND a cube with side 5 cm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volume",
                              "statement": "72 cm³ and 125 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds both volumes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Prism: 6x4x3 = 72 cm³; Cube: 5x5x5 = 125 cm³**",
          "commonErrors": [
                    "Wrong volumes.",
                    "Only one found."
          ]
},
        },
        {
          id: "m5-u5-volume-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'cubic unit' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a square"
                    },
                    {
                              "id": "b",
                              "text": "a cube-shaped unit"
                    },
                    {
                              "id": "c",
                              "text": "a line"
                    },
                    {
                              "id": "d",
                              "text": "a point"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cubic unit = cube."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cubic unit = cube.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a cube-shaped unit",
          "commonErrors": [
                    "Confuses with square unit."
          ]
},
        },
        {
          id: "m5-u5-volume-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A fish tank is 30 cm long, 15 cm wide, 20 cm tall. What volume of water can it hold?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volume",
                              "statement": "30 x 15 x 20 = 9,000 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interprets answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**30 x 15 x 20 = 9,000 cm³ = 9 liters**",
          "commonErrors": [
                    "Wrong volume.",
                    "No interpretation."
          ]
},
        },
        {
          id: "m5-u5-volume-basics-q6",
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
                              "text": "How long."
                    },
                    {
                              "id": "d",
                              "text": "How wide."
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
          id: "m5-u5-volume-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangular prism\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How long."
                    },
                    {
                              "id": "b",
                              "text": "How wide."
                    },
                    {
                              "id": "c",
                              "text": "How tall."
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
          id: "m5-u5-volume-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How wide."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "How tall."
                    },
                    {
                              "id": "d",
                              "text": "Unit of volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
