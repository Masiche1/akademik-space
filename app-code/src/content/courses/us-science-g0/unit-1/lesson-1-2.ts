import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "s0-u1-lesson-1-2",
  code: "1-2",
  title: "Weather Words",
  goal: "I CAN use weather words to describe conditions.",
  standards: ["K-ESS2-1"],
  vocabulary: [
    { term: "Sunny", definition: "Bright sun, few clouds." },
    { term: "Cloudy", definition: "Many clouds." },
    { term: "Partly cloudy", definition: "Some sun, some clouds." },
    { term: "Rainy", definition: "Water falling." },
    { term: "Drizzly", definition: "Light rain." },
    { term: "Stormy", definition: "Thunder and lightning." },
    { term: "Foggy", definition: "Hard to see far." },
    { term: "Clear", definition: "No clouds, bright." },
  ],
  concepts: [
    {
      id: "s0-u1-weather-words",
      title: "Weather words",
      skill: "Use precise weather words to describe conditions.",
      lesson: {
        sections: [
          {
            heading: "More weather words",
            body: "Beyond sunny and rainy, we have **partly cloudy**, **drizzly** (light rain), **stormy** (thunder/lightning), **foggy** (hard to see), and **clear** (no clouds).",
          },
          {
            heading: "Be specific",
            body: "The more specific your weather word, the better your description. 'Partly cloudy with light rain' is more precise than just 'cloudy'.",
          },
        ],
        keyFormulas: [
          { name: "Weather words", statement: "Sunny, cloudy, partly cloudy, rainy, drizzly, stormy, foggy, clear." },
        ],
        workedExample: {
          problem: "Describe: sun out, some clouds, light rain.",
          solution: "**Partly cloudy with light rain** (drizzly).",
        },
      },
      questions: [
        {
          id: "s0-u1-weather-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Partly cloudy' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no clouds"
                    },
                    {
                              "id": "b",
                              "text": "some sun and some clouds"
                    },
                    {
                              "id": "c",
                              "text": "all clouds"
                    },
                    {
                              "id": "d",
                              "text": "rain"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Partly cloudy = some sun, some clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Partly cloudy = some sun, some clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**some sun, some clouds**",
          "commonErrors": [
                    "Confuses with cloudy."
          ]
},
        },
        {
          id: "s0-u1-weather-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Stormy' weather includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sun"
                    },
                    {
                              "id": "b",
                              "text": "thunder and lightning"
                    },
                    {
                              "id": "c",
                              "text": "only snow"
                    },
                    {
                              "id": "d",
                              "text": "only wind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stormy = thunder + lightning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stormy = thunder + lightning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**thunder + lightning**",
          "commonErrors": [
                    "Picks wrong condition."
          ]
},
        },
        {
          id: "s0-u1-weather-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the best weather word: the sky is gray, hard to see far, like a cloud on the ground.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather words",
                              "statement": "Gray + can't see = foggy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says 'foggy'.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Foggy**",
          "commonErrors": [
                    "Wrong word.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u1-weather-words-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Drizzly' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "heavy rain"
                    },
                    {
                              "id": "b",
                              "text": "light rain"
                    },
                    {
                              "id": "c",
                              "text": "no rain"
                    },
                    {
                              "id": "d",
                              "text": "snow"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Drizzly = light rain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drizzly = light rain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**light rain**",
          "commonErrors": [
                    "Confuses with heavy rain."
          ]
},
        },
        {
          id: "s0-u1-weather-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe today's weather using two specific weather words (like 'partly cloudy and drizzly').",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather words",
                              "statement": "Two specific words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses two weather words.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Description is accurate.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny and windy'**",
          "commonErrors": [
                    "Generic words only.",
                    "Inaccurate."
          ]
},
        },
        {
          id: "s0-u1-weather-words-q6",
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
                              "text": "Bright sun, few clouds."
                    },
                    {
                              "id": "c",
                              "text": "Some sun, some clouds."
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
                              "statement": "\"Sunny\" means Bright sun, few clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunny\" means Bright sun, few clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunny** = Bright sun, few clouds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-weather-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloudy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Some sun, some clouds."
                    },
                    {
                              "id": "b",
                              "text": "Water falling."
                    },
                    {
                              "id": "c",
                              "text": "Light rain."
                    },
                    {
                              "id": "d",
                              "text": "Many clouds."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "s0-u1-weather-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Partly cloudy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falling."
                    },
                    {
                              "id": "b",
                              "text": "Some sun, some clouds."
                    },
                    {
                              "id": "c",
                              "text": "Light rain."
                    },
                    {
                              "id": "d",
                              "text": "Thunder and lightning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Partly cloudy\" means Some sun, some clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Partly cloudy\" means Some sun, some clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Partly cloudy** = Some sun, some clouds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
