import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m6-u4-lesson-4-3",
  code: "4-3",
  title: "Volume",
  goal: "I CAN find the volume of prisms and pyramids.",
  standards: ["6.G.A.2"],
  vocabulary: [
    { term: "Volume", definition: "Space inside 3D." },
    { term: "Prism", definition: "V = Bh." },
    { term: "Pyramid", definition: "V = 1/3 Bh." },
    { term: "Base", definition: "Bottom area." },
    { term: "Height", definition: "Perpendicular." },
    { term: "Cubic unit", definition: "cm³, m³." },
    { term: "Composite", definition: "Combined shapes." },
    { term: "Displace", definition: "Water displacement." },
  ],
  concepts: [
    {
      id: "m6-u4-volume",
      title: "Volume",
      skill: "Find volume of prisms, pyramids and composite shapes.",
      lesson: {
        sections: [
          {
            heading: "Formulas",
            body: "**Prism**: $V = Bh$ (base area x height). **Pyramid**: $V = \\frac{1}{3}Bh$ (one-third of prism).",
          },
          {
            heading: "Composite",
            body: "For combined shapes, find volume of each part and **add** or **subtract**.",
          },
        ],
        keyFormulas: [
          { name: "Prism", statement: "V = B x h." },
          { name: "Pyramid", statement: "V = 1/3 x B x h." },
        ],
        workedExample: {
          problem: "Find V of prism with base area 20, height 5.",
          solution: "$V = 20 \\times 5 = 100$ cubic units.",
        },
      },
      questions: [
        {
          id: "m6-u4-volume-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Volume of a prism is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "surface area"
                    },
                    {
                              "id": "b",
                              "text": "base area x height"
                    },
                    {
                              "id": "c",
                              "text": "length x width"
                    },
                    {
                              "id": "d",
                              "text": "height only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "B x h."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B x h.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "base area x height",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m6-u4-volume-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Volume of a pyramid is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "same as prism"
                    },
                    {
                              "id": "b",
                              "text": "1/3 of prism volume"
                    },
                    {
                              "id": "c",
                              "text": "2x prism"
                    },
                    {
                              "id": "d",
                              "text": "half prism"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/3 of prism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/3 of prism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/3 of prism volume",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m6-u4-volume-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the volume of: prism (B=15,h=4), pyramid (B=12,h=9), composite (two prisms: 10x3x2 and 5x3x2).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volume",
                              "statement": "60, 36, 90."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Prism: 15x4=60; Pyramid: 1/3x12x9=36; Composite: 60+30=90.**",
          "commonErrors": [
                    "Wrong volumes.",
                    "Missing shapes."
          ]
},
        },
        {
          id: "m6-u4-volume-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a pyramid, volume is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "B x h"
                    },
                    {
                              "id": "b",
                              "text": "1/3 x B x h"
                    },
                    {
                              "id": "c",
                              "text": "2 x B x h"
                    },
                    {
                              "id": "d",
                              "text": "B + h"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/3 x B x h."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/3 x B x h.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/3 x B x h",
          "commonErrors": [
                    "Wrong formula."
          ]
},
        },
        {
          id: "m6-u4-volume-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the volume of a composite shape and explain how you broke it into parts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Volume",
                              "statement": "Volume + parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds volume.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains parts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'L-shape = two prisms; V1 + V2 = total.'**",
          "commonErrors": [
                    "Cannot find.",
                    "No parts."
          ]
},
        },
        {
          id: "m6-u4-volume-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "V = Bh."
                    },
                    {
                              "id": "b",
                              "text": "Space inside 3D."
                    },
                    {
                              "id": "c",
                              "text": "V = 1/3 Bh."
                    },
                    {
                              "id": "d",
                              "text": "Bottom area."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Volume\" means Space inside 3D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means Space inside 3D.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Volume** = Space inside 3D.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-volume-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Prism\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "V = 1/3 Bh."
                    },
                    {
                              "id": "b",
                              "text": "Bottom area."
                    },
                    {
                              "id": "c",
                              "text": "Perpendicular."
                    },
                    {
                              "id": "d",
                              "text": "V = Bh."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Prism\" means V = Bh."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Prism\" means V = Bh.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Prism** = V = Bh.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-volume-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pyramid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom area."
                    },
                    {
                              "id": "b",
                              "text": "V = 1/3 Bh."
                    },
                    {
                              "id": "c",
                              "text": "Perpendicular."
                    },
                    {
                              "id": "d",
                              "text": "cm³, m³."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pyramid\" means V = 1/3 Bh."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pyramid\" means V = 1/3 Bh.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pyramid** = V = 1/3 Bh.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
