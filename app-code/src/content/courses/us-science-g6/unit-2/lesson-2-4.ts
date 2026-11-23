import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "sci6-u2-lesson-2-4",
  code: "2-4",
  title: "Energy in Daily Life",
  goal: "I CAN identify energy use in everyday objects.",
  standards: ["MS-PS3-1"],
  vocabulary: [
    { term: "Energy", definition: "Ability to do work." },
    { term: "Appliance", definition: "Device using energy." },
    { term: "Battery", definition: "Stores chemical energy." },
    { term: "Solar", definition: "Sun energy." },
    { term: "Wind", definition: "Moving air energy." },
    { term: "Hydro", definition: "Water energy." },
    { term: "Renewable", definition: "Never runs out." },
    { term: "Non-renewable", definition: "Runs out." },
  ],
  concepts: [
    {
      id: "sci6-u2-energy-in-daily-life",
      title: "Energy in daily life",
      skill: "Identify how energy is used in everyday objects and where it comes from.",
      lesson: {
        sections: [
          {
            heading: "Energy sources",
            body: "Energy comes from **renewable** sources (solar, wind, hydro) and **non-renewable** sources (fossil fuels, nuclear).",
          },
          {
            heading: "Everyday use",
            body: "Appliances, vehicles, and devices all use energy — identify the source and form of energy used.",
          },
        ],
        keyFormulas: [
          { name: "Energy sources", statement: "Renewable (solar/wind/hydro) + non-renewable (fossil/nuclear) = energy sources." },
        ],
        workedExample: {
          problem: "What energy source powers a solar panel? What form does it produce?",
          solution: "**Solar energy -> electrical energy.**",
        },
      },
      questions: [
        {
          id: "sci6-u2-energy-in-daily-life-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Renewable energy' is energy that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "runs out"
                    },
                    {
                              "id": "b",
                              "text": "never runs out"
                    },
                    {
                              "id": "c",
                              "text": "only fossil fuels"
                    },
                    {
                              "id": "d",
                              "text": "only nuclear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Never runs out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Never runs out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "never runs out",
          "commonErrors": [
                    "Confuses with non-renewable."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'solar panel' converts...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wind to electricity"
                    },
                    {
                              "id": "b",
                              "text": "sunlight to electricity"
                    },
                    {
                              "id": "c",
                              "text": "water to electricity"
                    },
                    {
                              "id": "d",
                              "text": "heat to electricity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sunlight to electricity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sunlight to electricity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "sunlight to electricity",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the energy source and form for: a wind turbine, a battery-powered phone, a hydroelectric dam.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "All three identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies sources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Wind turbine: wind -> mechanical/electrical; Phone battery: chemical -> electrical; Dam: water/gravity -> mechanical/electrical.**",
          "commonErrors": [
                    "Wrong sources.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Fossil fuels' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "renewable"
                    },
                    {
                              "id": "b",
                              "text": "non-renewable"
                    },
                    {
                              "id": "c",
                              "text": "clean energy"
                    },
                    {
                              "id": "d",
                              "text": "solar energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Non-renewable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-renewable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "non-renewable",
          "commonErrors": [
                    "Confuses with renewable."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Describe three renewable energy sources and explain why they're important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "Three sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes sources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Solar (sunlight), Wind (moving air), Hydro (water flow); Important: clean, sustainable, reduce fossil fuel use.**",
          "commonErrors": [
                    "Fewer than three.",
                    "No importance."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Device using energy."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "Stores chemical energy."
                    },
                    {
                              "id": "d",
                              "text": "Sun energy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Appliance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stores chemical energy."
                    },
                    {
                              "id": "b",
                              "text": "Sun energy."
                    },
                    {
                              "id": "c",
                              "text": "Moving air energy."
                    },
                    {
                              "id": "d",
                              "text": "Device using energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Appliance\" means Device using energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Appliance\" means Device using energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Appliance** = Device using energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-in-daily-life-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Battery\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sun energy."
                    },
                    {
                              "id": "b",
                              "text": "Stores chemical energy."
                    },
                    {
                              "id": "c",
                              "text": "Moving air energy."
                    },
                    {
                              "id": "d",
                              "text": "Water energy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Battery\" means Stores chemical energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Battery\" means Stores chemical energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Battery** = Stores chemical energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
