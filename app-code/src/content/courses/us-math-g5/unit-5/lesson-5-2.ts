import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m5-u5-lesson-5-2",
  code: "5-2",
  title: "Volume Unit Conversion",
  goal: "I CAN convert between cubic units.",
  standards: ["5.MD.C.5"],
  vocabulary: [
    { term: "Volume", definition: "Space inside." },
    { term: "Cubic centimeter", definition: "cm³." },
    { term: "Cubic meter", definition: "m³." },
    { term: "Liter", definition: "Liquid volume." },
    { term: "Milliliter", definition: "Small liquid." },
    { term: "Convert", definition: "Change units." },
    { term: "Cubic", definition: "Three dimensions." },
    { term: "Capacity", definition: "How much it holds." },
  ],
  concepts: [
    {
      id: "m5-u5-volume-conversion",
      title: "Volume unit conversion",
      skill: "Convert between cubic units (cm³, m³) and liters/milliliters.",
      lesson: {
        sections: [
          {
            heading: "Cubic units",
            body: "**1 cm³ = 1 mL**; **1 m³ = 1,000 L = 1,000,000 cm³**. Cubic units measure volume in 3D.",
          },
          {
            heading: "Converting",
            body: "To convert cubic units, remember each dimension is 10x: 1 m = 100 cm, so 1 m³ = 100 x 100 x 100 = 1,000,000 cm³.",
          },
        ],
        keyFormulas: [
          { name: "Convert", statement: "1 cm³ = 1 mL; 1 m³ = 1,000,000 cm³ = 1,000 L." },
        ],
        workedExample: {
          problem: "Convert 2,500 cm³ to liters.",
          solution: "$2,500 \\text{ cm}^3 = 2,500 \\text{ mL} = 2.5$ L.",
        },
      },
      questions: [
        {
          id: "m5-u5-volume-conversion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "1 cubic centimeter equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 liter"
                    },
                    {
                              "id": "b",
                              "text": "1 milliliter"
                    },
                    {
                              "id": "c",
                              "text": "10 mL"
                    },
                    {
                              "id": "d",
                              "text": "100 mL"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 cm³ = 1 mL."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 cm³ = 1 mL.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1 milliliter",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "1 cubic meter equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1000 cm³"
                    },
                    {
                              "id": "b",
                              "text": "1,000,000 cm³"
                    },
                    {
                              "id": "c",
                              "text": "100 cm³"
                    },
                    {
                              "id": "d",
                              "text": "10,000 cm³"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 m³ = 1,000,000 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 m³ = 1,000,000 cm³.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1,000,000 cm³",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert 5,000 cm³ to liters AND 3 m³ to cubic centimeters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Convert",
                              "statement": "5 L and 3,000,000 cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**5,000 cm³ = 5 L; 3 m³ = 3,000,000 cm³**",
          "commonErrors": [
                    "Wrong conversions.",
                    "Only one done."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is 1 m³ = 1,000,000 cm³?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random"
                    },
                    {
                              "id": "b",
                              "text": "1m = 100cm, so 100x100x100 = 1,000,000"
                    },
                    {
                              "id": "c",
                              "text": "1m = 10cm"
                    },
                    {
                              "id": "d",
                              "text": "it's the same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "100 cubed = 1,000,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "100 cubed = 1,000,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "100x100x100 = 1,000,000",
          "commonErrors": [
                    "Wrong reasoning."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A pool is 10 m long, 5 m wide, 2 m deep. What volume in cubic meters and liters?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Convert",
                              "statement": "100 m³ = 100,000 L."
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
          "finalAnswer": "**10 x 5 x 2 = 100 m³ = 100,000 L**",
          "commonErrors": [
                    "Wrong volume.",
                    "No conversion."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cm³."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "m³."
                    },
                    {
                              "id": "d",
                              "text": "Liquid volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Volume\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Volume** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cubic centimeter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "m³."
                    },
                    {
                              "id": "b",
                              "text": "Liquid volume."
                    },
                    {
                              "id": "c",
                              "text": "Small liquid."
                    },
                    {
                              "id": "d",
                              "text": "cm³."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cubic centimeter\" means cm³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cubic centimeter\" means cm³.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cubic centimeter** = cm³.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u5-volume-conversion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cubic meter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid volume."
                    },
                    {
                              "id": "b",
                              "text": "m³."
                    },
                    {
                              "id": "c",
                              "text": "Small liquid."
                    },
                    {
                              "id": "d",
                              "text": "Change units."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cubic meter\" means m³."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cubic meter\" means m³.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cubic meter** = m³.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
