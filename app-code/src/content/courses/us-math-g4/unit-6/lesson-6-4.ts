import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m4-u6-lesson-6-4",
  code: "6-4",
  title: "Mass and Liquid Volume",
  goal: "I CAN measure mass and liquid volume.",
  standards: ["4.MD.A.1", "4.MD.A.2"],
  vocabulary: [
    { term: "Mass", definition: "How heavy." },
    { term: "Gram", definition: "Small mass unit." },
    { term: "Kilogram", definition: "1000 grams." },
    { term: "Liter", definition: "Liquid volume unit." },
    { term: "Milliliter", definition: "Small liquid unit." },
    { term: "Scale", definition: "Measures mass." },
    { term: "Balance", definition: "Compares mass." },
    { term: "Convert", definition: "Change units." },
  ],
  concepts: [
    {
      id: "m4-u6-mass-and-volume",
      title: "Mass and liquid volume",
      skill: "Measure mass (grams/kilograms) and liquid volume (liters/milliliters).",
      lesson: {
        sections: [
          {
            heading: "Mass",
            body: "**Mass** is how heavy something is. Customary: ounces/pounds. Metric: **grams** (small) and **kilograms** (1000 g = 1 kg).",
          },
          {
            heading: "Liquid volume",
            body: "**Liquid volume** is how much space a liquid takes. Metric: **milliliters** (small) and **liters** (1000 mL = 1 L).",
          },
        ],
        keyFormulas: [
          { name: "Mass", statement: "1000 g = 1 kg; 16 oz = 1 lb." },
          { name: "Volume", statement: "1000 mL = 1 L." },
        ],
        workedExample: {
          problem: "Convert 3 kilograms to grams AND 2500 milliliters to liters.",
          solution: "$3 \\times 1000 = 3,000$ g; $2500 \\div 1000 = 2.5$ L.",
        },
      },
      questions: [
        {
          id: "m4-u6-mass-and-volume-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many grams in 1 kilogram?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "100"
                    },
                    {
                              "id": "b",
                              "text": "1000"
                    },
                    {
                              "id": "c",
                              "text": "10000"
                    },
                    {
                              "id": "d",
                              "text": "500"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1000 g = 1 kg."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1000 g = 1 kg.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1000",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many milliliters in 1 liter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "100"
                    },
                    {
                              "id": "c",
                              "text": "1000"
                    },
                    {
                              "id": "d",
                              "text": "500"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1000 mL = 1 L."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1000 mL = 1 L.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1000",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 5 kilograms to grams AND 3500 milliliters to liters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mass/volume",
                              "statement": "5,000 g and 3.5 L."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts kg to g.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Converts mL to L.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**5 kg = 5,000 g; 3500 mL = 3.5 L**",
          "commonErrors": [
                    "Wrong conversions.",
                    "Only one done."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Mass' measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "length"
                    },
                    {
                              "id": "b",
                              "text": "how heavy something is"
                    },
                    {
                              "id": "c",
                              "text": "volume"
                    },
                    {
                              "id": "d",
                              "text": "temperature"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mass = how heavy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mass = how heavy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how heavy something is",
          "commonErrors": [
                    "Confuses with other measures."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert 2.5 kilograms to grams and 750 milliliters to liters. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mass/volume",
                              "statement": "2,500 g and 0.75 L."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows work.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2.5 kg = 2,500 g; 750 mL = 0.75 L**",
          "commonErrors": [
                    "Wrong conversions.",
                    "No work."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mass\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small mass unit."
                    },
                    {
                              "id": "b",
                              "text": "How heavy."
                    },
                    {
                              "id": "c",
                              "text": "1000 grams."
                    },
                    {
                              "id": "d",
                              "text": "Liquid volume unit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mass\" means How heavy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mass\" means How heavy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mass** = How heavy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1000 grams."
                    },
                    {
                              "id": "b",
                              "text": "Liquid volume unit."
                    },
                    {
                              "id": "c",
                              "text": "Small liquid unit."
                    },
                    {
                              "id": "d",
                              "text": "Small mass unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gram\" means Small mass unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gram\" means Small mass unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gram** = Small mass unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-mass-and-volume-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kilogram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid volume unit."
                    },
                    {
                              "id": "b",
                              "text": "1000 grams."
                    },
                    {
                              "id": "c",
                              "text": "Small liquid unit."
                    },
                    {
                              "id": "d",
                              "text": "Measures mass."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kilogram\" means 1000 grams."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kilogram\" means 1000 grams.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kilogram** = 1000 grams.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
