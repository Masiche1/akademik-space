import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "s1-u5-lesson-5-1",
  code: "5-1",
  title: "Types of Weather",
  goal: "I CAN identify different types of weather.",
  standards: ["1-ESS1-1", "1-ESS1-2"],
  vocabulary: [
    { term: "Weather", definition: "What the sky and air are like." },
    { term: "Sunny", definition: "Bright, sun out." },
    { term: "Cloudy", definition: "Many clouds." },
    { term: "Rainy", definition: "Water falling." },
    { term: "Snowy", definition: "Frozen water falling." },
    { term: "Windy", definition: "Air moving fast." },
    { term: "Stormy", definition: "Strong weather." },
    { term: "Pattern", definition: "Regular change." },
  ],
  concepts: [
    {
      id: "s1-u5-weather-types",
      title: "Types of weather",
      skill: "Weather includes sunny, cloudy, rainy, snowy, windy and stormy conditions.",
      lesson: {
        sections: [
          {
            heading: "Many kinds of weather",
            body: "**Weather** describes what the sky and air are like: **sunny** (bright), **cloudy** (many clouds), **rainy** (water falling), **snowy** (frozen water), **windy** (air moving fast), **stormy** (strong weather).",
          },
          {
            heading: "Weather changes",
            body: "Weather **changes** from day to day. We observe and describe the **pattern** of weather over time.",
          },
        ],
        keyFormulas: [
          { name: "Weather types", statement: "Sunny, cloudy, rainy, snowy, windy, stormy." },
        ],
        workedExample: {
          problem: "Describe the weather if there are many clouds and no sun.",
          solution: "It's **cloudy**.",
        },
      },
      questions: [
        {
          id: "s1-u5-weather-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which describes rainy weather?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bright sun"
                    },
                    {
                              "id": "b",
                              "text": "water falling from clouds"
                    },
                    {
                              "id": "c",
                              "text": "snow falling"
                    },
                    {
                              "id": "d",
                              "text": "strong wind only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rainy = water falling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rainy = water falling.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water falling**",
          "commonErrors": [
                    "Picks sunny/snowy."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Windy' weather means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lots of rain"
                    },
                    {
                              "id": "b",
                              "text": "air moving fast"
                    },
                    {
                              "id": "c",
                              "text": "many clouds only"
                    },
                    {
                              "id": "d",
                              "text": "hot sun"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Windy = air moving fast."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Windy = air moving fast.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**air moving fast**",
          "commonErrors": [
                    "Picks rain."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe today's weather using two weather words. How does it differ from yesterday?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather types",
                              "statement": "2 weather words + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes weather with 2 words.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares to yesterday.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Today is cloudy and cool; yesterday was sunny and warm.'**",
          "commonErrors": [
                    "Fewer than 2 words.",
                    "No comparison."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a type of weather?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "purple"
                    },
                    {
                              "id": "b",
                              "text": "windy"
                    },
                    {
                              "id": "c",
                              "text": "big"
                    },
                    {
                              "id": "d",
                              "text": "soft"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Windy is weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Windy is weather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**windy**",
          "commonErrors": [
                    "Picks non-weather."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a weather chart for a week. Record the weather each day and describe the pattern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather",
                              "statement": "Record + pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records daily weather.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny most days, rainy on Wednesday — pattern: mostly sunny.'**",
          "commonErrors": [
                    "No records.",
                    "No pattern."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bright, sun out."
                    },
                    {
                              "id": "b",
                              "text": "What the sky and air are like."
                    },
                    {
                              "id": "c",
                              "text": "Many clouds."
                    },
                    {
                              "id": "d",
                              "text": "Water falling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means What the sky and air are like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means What the sky and air are like.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = What the sky and air are like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunny\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Many clouds."
                    },
                    {
                              "id": "b",
                              "text": "Water falling."
                    },
                    {
                              "id": "c",
                              "text": "Frozen water falling."
                    },
                    {
                              "id": "d",
                              "text": "Bright, sun out."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunny\" means Bright, sun out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunny\" means Bright, sun out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunny** = Bright, sun out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-types-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloudy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falling."
                    },
                    {
                              "id": "b",
                              "text": "Many clouds."
                    },
                    {
                              "id": "c",
                              "text": "Frozen water falling."
                    },
                    {
                              "id": "d",
                              "text": "Air moving fast."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cloudy\" means Many clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cloudy\" means Many clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cloudy** = Many clouds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
