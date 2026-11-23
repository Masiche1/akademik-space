import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "spk-u2-lesson-2-1",
  code: "2-1",
  title: "Weather Today",
  goal: "I CAN observe and describe today's weather.",
  standards: ["ELOF-PK.SCI.WEATHER.1"],
  vocabulary: [
    { term: "Weather", definition: "What the sky and air are like right now." },
    { term: "Sunny", definition: "Bright with sunshine." },
    { term: "Cloudy", definition: "Covered with clouds." },
    { term: "Rainy", definition: "Water falling from clouds." },
    { term: "Windy", definition: "Air moving fast." },
    { term: "Temperature", definition: "How hot or cold it is." },
  ],
  concepts: [
    {
      id: "spk-u2-weather-today",
      title: "Weather today",
      skill: "Observe and describe current weather conditions.",
      lesson: {
        sections: [
          {
            heading: "What is weather?",
            body: "**Weather** is what the sky and air are like right now: sunny, cloudy, rainy, windy, snowy. Weather can change from day to day.",
          },
          {
            heading: "Describe it",
            body: "Look outside and describe: 'Today it is **sunny** and **warm**. I see **blue sky** and a few **white clouds**.'",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Current conditions: sunny, cloudy, rainy, windy, snowy + temperature." },
        ],
        workedExample: {
          problem: "It is bright, the sky is blue, and it is warm. Describe the weather.",
          solution: "The weather is **sunny** and **warm**.",
        },
      },
      questions: [
        {
          id: "spk-u2-weather-today-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which describes 'rainy' weather?",
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
                              "text": "strong wind"
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
                              "statement": "Rainy = water falling from clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rainy = water falling from clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water falling**",
          "commonErrors": [
                    "Confuses rainy with sunny."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Windy' weather means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no air movement"
                    },
                    {
                              "id": "b",
                              "text": "air moving fast"
                    },
                    {
                              "id": "c",
                              "text": "heavy rain"
                    },
                    {
                              "id": "d",
                              "text": "very cold"
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
          "finalAnswer": "**Air moving fast**",
          "commonErrors": [
                    "Thinks windy means still."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look outside (or imagine). Describe today's weather using two weather words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Describe weather",
                              "statement": "Use weather words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes weather with 2 words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'It is sunny and warm.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong weather words."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Temperature' tells you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the color of the sky"
                    },
                    {
                              "id": "b",
                              "text": "how hot or cold it is"
                    },
                    {
                              "id": "c",
                              "text": "how windy it is"
                    },
                    {
                              "id": "d",
                              "text": "the time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Temperature = how hot or cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Temperature = how hot or cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hot or cold**",
          "commonErrors": [
                    "Confuses with wind."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a weather journal for 3 days. Each day, draw the sky and write two weather words. How did the weather change?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather journal",
                              "statement": "Observe daily, compare changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records 3 days of weather.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Describes how weather changed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Day 1 sunny, Day 2 cloudy, Day 3 rainy — it got wetter.'**",
          "commonErrors": [
                    "Cannot record.",
                    "No comparison."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bright with sunshine."
                    },
                    {
                              "id": "b",
                              "text": "What the sky and air are like right now."
                    },
                    {
                              "id": "c",
                              "text": "Covered with clouds."
                    },
                    {
                              "id": "d",
                              "text": "Water falling from clouds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means What the sky and air are like right now."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means What the sky and air are like right now.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = What the sky and air are like right now.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sunny\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Covered with clouds."
                    },
                    {
                              "id": "b",
                              "text": "Water falling from clouds."
                    },
                    {
                              "id": "c",
                              "text": "Air moving fast."
                    },
                    {
                              "id": "d",
                              "text": "Bright with sunshine."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sunny\" means Bright with sunshine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sunny\" means Bright with sunshine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sunny** = Bright with sunshine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-today-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cloudy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falling from clouds."
                    },
                    {
                              "id": "b",
                              "text": "Covered with clouds."
                    },
                    {
                              "id": "c",
                              "text": "Air moving fast."
                    },
                    {
                              "id": "d",
                              "text": "How hot or cold it is."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cloudy\" means Covered with clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cloudy\" means Covered with clouds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cloudy** = Covered with clouds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
