import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "sci3-u8-lesson-8-1",
  code: "8-1",
  title: "Weather",
  goal: "I CAN describe weather and how it changes.",
  standards: ["ESS2.D", "ESS3.B"],
  vocabulary: [
    { term: "Weather", definition: "Daily conditions." },
    { term: "Temperature", definition: "How hot or cold." },
    { term: "Precipitation", definition: "Rain, snow, sleet." },
    { term: "Wind", definition: "Moving air." },
    { term: "Cloud", definition: "Water in sky." },
    { term: "Sunny", definition: "Bright and warm." },
    { term: "Rainy", definition: "Water falling." },
    { term: "Snowy", definition: "Frozen water falling." },
  ],
  concepts: [
    {
      id: "sci3-u8-weather-intro",
      title: "Weather",
      skill: "Describe weather: temperature, precipitation, wind, clouds.",
      lesson: {
        sections: [
          {
            heading: "Weather is daily",
            body: "**Weather** is the **daily** conditions — **temperature** (hot/cold), **precipitation** (rain/snow), **wind**, and **clouds**. Weather **changes** from day to day.",
          },
          {
            heading: "Weather vs climate",
            body: "**Weather** is short-term (today); **climate** is long-term (average over years).",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Temperature + precipitation + wind + clouds = daily conditions." },
        ],
        workedExample: {
          problem: "Is 'rainy with 60 degrees and wind' weather or climate?",
          solution: "It's **weather** — it describes current daily conditions.",
        },
      },
      questions: [
        {
          id: "sci3-u8-weather-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Weather is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "climate"
                    },
                    {
                              "id": "b",
                              "text": "daily conditions like temperature and rain"
                    },
                    {
                              "id": "c",
                              "text": "a season only"
                    },
                    {
                              "id": "d",
                              "text": "a year"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weather = daily conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather = daily conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "daily conditions like temperature and rain",
          "commonErrors": [
                    "Thinks weather is climate."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Precipitation' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wind"
                    },
                    {
                              "id": "b",
                              "text": "rain, snow, sleet or hail"
                    },
                    {
                              "id": "c",
                              "text": "clouds"
                    },
                    {
                              "id": "d",
                              "text": "sunshine"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Precipitation = falling water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Precipitation = falling water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rain, snow, sleet or hail",
          "commonErrors": [
                    "Thinks precipitation is wind."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe today's weather using temperature, precipitation, wind, and clouds.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather",
                              "statement": "Temp + precip + wind + clouds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Cool and cloudy with light rain and breeze.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Missing parts."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The difference between weather and climate is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "none"
                    },
                    {
                              "id": "b",
                              "text": "weather=daily, climate=long-term average"
                    },
                    {
                              "id": "c",
                              "text": "weather=year, climate=day"
                    },
                    {
                              "id": "d",
                              "text": "climate=daily"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weather=daily, climate=long-term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather=daily, climate=long-term.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "weather=daily, climate=long-term average",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Predict tomorrow's weather based on today's. Explain your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather",
                              "statement": "Predict + reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Makes prediction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'If clouds are building and wind picks up, rain likely tomorrow.'**",
          "commonErrors": [
                    "Cannot predict.",
                    "No reasoning."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How hot or cold."
                    },
                    {
                              "id": "b",
                              "text": "Daily conditions."
                    },
                    {
                              "id": "c",
                              "text": "Rain, snow, sleet."
                    },
                    {
                              "id": "d",
                              "text": "Moving air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Daily conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Daily conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Daily conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rain, snow, sleet."
                    },
                    {
                              "id": "b",
                              "text": "Moving air."
                    },
                    {
                              "id": "c",
                              "text": "Water in sky."
                    },
                    {
                              "id": "d",
                              "text": "How hot or cold."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means How hot or cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means How hot or cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = How hot or cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-weather-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Precipitation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moving air."
                    },
                    {
                              "id": "b",
                              "text": "Rain, snow, sleet."
                    },
                    {
                              "id": "c",
                              "text": "Water in sky."
                    },
                    {
                              "id": "d",
                              "text": "Bright and warm."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Precipitation\" means Rain, snow, sleet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Precipitation\" means Rain, snow, sleet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Precipitation** = Rain, snow, sleet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
