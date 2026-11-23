import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "sci5-u5-lesson-5-1",
  code: "5-1",
  title: "Weather Basics",
  goal: "I CAN describe weather patterns and measurements.",
  standards: ["ESS2.D"],
  vocabulary: [
    { term: "Weather", definition: "Short-term atmospheric conditions." },
    { term: "Climate", definition: "Long-term patterns." },
    { term: "Temperature", definition: "How hot/cold." },
    { term: "Precipitation", definition: "Rain, snow, etc." },
    { term: "Wind", definition: "Moving air." },
    { term: "Humidity", definition: "Water in air." },
    { term: "Atmosphere", definition: "Air layer." },
    { term: "Forecast", definition: "Weather prediction." },
  ],
  concepts: [
    {
      id: "sci5-u5-weather-basics",
      title: "Weather basics",
      skill: "Describe weather patterns and measurements.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "**Weather** is **short-term** (today's conditions); **climate** is **long-term** patterns (average over years).",
          },
          {
            heading: "Measurements",
            body: "We measure **temperature**, **precipitation** (rain/snow), **wind**, and **humidity** to describe weather.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Temperature + precipitation + wind + humidity = weather." },
        ],
        workedExample: {
          problem: "Is 'hot and sunny today' weather or climate?",
          solution: "**Weather** — it's a short-term condition.",
        },
      },
      questions: [
        {
          id: "sci5-u5-weather-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weather' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "long-term patterns"
                    },
                    {
                              "id": "b",
                              "text": "short-term atmospheric conditions"
                    },
                    {
                              "id": "c",
                              "text": "climate"
                    },
                    {
                              "id": "d",
                              "text": "seasons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Short-term conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Short-term conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "short-term atmospheric conditions",
          "commonErrors": [
                    "Confuses with climate."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Climate' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "today's weather"
                    },
                    {
                              "id": "b",
                              "text": "long-term average patterns"
                    },
                    {
                              "id": "c",
                              "text": "one storm"
                    },
                    {
                              "id": "d",
                              "text": "wind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Long-term patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Long-term patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "long-term average patterns",
          "commonErrors": [
                    "Confuses with weather."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe today's weather using temperature, precipitation, wind and humidity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather",
                              "statement": "All four described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., '70°F, light rain, 10 mph wind, 80% humidity.'**",
          "commonErrors": [
                    "Missing measurements.",
                    "Wrong measurements."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Precipitation' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rain"
                    },
                    {
                              "id": "b",
                              "text": "rain, snow, sleet, hail"
                    },
                    {
                              "id": "c",
                              "text": "only snow"
                    },
                    {
                              "id": "d",
                              "text": "wind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rain, snow, sleet, hail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rain, snow, sleet, hail.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rain, snow, sleet, hail",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between weather and climate with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather",
                              "statement": "Difference + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Weather: today's rain; Climate: average rainfall in region over years.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Long-term patterns."
                    },
                    {
                              "id": "b",
                              "text": "Short-term atmospheric conditions."
                    },
                    {
                              "id": "c",
                              "text": "How hot/cold."
                    },
                    {
                              "id": "d",
                              "text": "Rain, snow, etc."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Short-term atmospheric conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Short-term atmospheric conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Short-term atmospheric conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How hot/cold."
                    },
                    {
                              "id": "b",
                              "text": "Rain, snow, etc."
                    },
                    {
                              "id": "c",
                              "text": "Moving air."
                    },
                    {
                              "id": "d",
                              "text": "Long-term patterns."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Climate\" means Long-term patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climate\" means Long-term patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Climate** = Long-term patterns.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-weather-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rain, snow, etc."
                    },
                    {
                              "id": "b",
                              "text": "How hot/cold."
                    },
                    {
                              "id": "c",
                              "text": "Moving air."
                    },
                    {
                              "id": "d",
                              "text": "Water in air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means How hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means How hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = How hot/cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
