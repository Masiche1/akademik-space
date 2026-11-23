import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "sci4-u7-lesson-7-2",
  code: "7-2",
  title: "Weather Patterns",
  goal: "I CAN identify and describe weather patterns.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Weather", definition: "Current conditions." },
    { term: "Climate", definition: "Long-term patterns." },
    { term: "Temperature", definition: "Hot/cold." },
    { term: "Precipitation", definition: "Rain/snow." },
    { term: "Wind", definition: "Air movement." },
    { term: "Humidity", definition: "Moisture in air." },
    { term: "Front", definition: "Weather boundary." },
    { term: "Season", definition: "Time of year." },
  ],
  concepts: [
    {
      id: "sci4-u7-weather-patterns",
      title: "Weather patterns",
      skill: "Identify weather patterns including temperature, precipitation, wind and fronts.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "**Weather** = current conditions (today's rain); **climate** = long-term patterns (desert is always dry).",
          },
          {
            heading: "Patterns",
            body: "**Temperature**, **precipitation**, **wind**, and **humidity** create weather. **Fronts** (boundaries between air masses) bring changes.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Temperature + precipitation + wind + humidity = weather." },
        ],
        workedExample: {
          problem: "What's the difference between weather and climate?",
          solution: "Weather = today's conditions; Climate = average over many years.",
        },
      },
      questions: [
        {
          id: "sci4-u7-weather-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weather' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "long-term"
                    },
                    {
                              "id": "b",
                              "text": "current conditions"
                    },
                    {
                              "id": "c",
                              "text": "climate"
                    },
                    {
                              "id": "d",
                              "text": "seasons only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weather = current."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather = current.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "current conditions",
          "commonErrors": [
                    "Confuses with climate."
          ]
},
        },
        {
          id: "sci4-u7-weather-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Climate' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "today's weather"
                    },
                    {
                              "id": "b",
                              "text": "long-term patterns"
                    },
                    {
                              "id": "c",
                              "text": "one storm"
                    },
                    {
                              "id": "d",
                              "text": "current conditions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Climate = long-term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Climate = long-term.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "long-term patterns",
          "commonErrors": [
                    "Confuses with weather."
          ]
},
        },
        {
          id: "sci4-u7-weather-patterns-q3",
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
                              "statement": "Four components."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., '72°F, sunny, light breeze, low humidity.'**",
          "commonErrors": [
                    "Only one component.",
                    "Missing elements."
          ]
},
        },
        {
          id: "sci4-u7-weather-patterns-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'front' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a storm"
                    },
                    {
                              "id": "b",
                              "text": "a boundary between air masses"
                    },
                    {
                              "id": "c",
                              "text": "a season"
                    },
                    {
                              "id": "d",
                              "text": "a cloud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Front = boundary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Front = boundary.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a boundary between air masses",
          "commonErrors": [
                    "Confuses with storm."
          ]
},
        },
        {
          id: "sci4-u7-weather-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare weather and climate. Give an example of each for the same location.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather",
                              "statement": "Comparison + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares concepts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Weather: rainy today; Climate: this region averages 40 inches rain/year.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No examples."
          ]
},
        },
        {
          id: "sci4-u7-weather-patterns-q6",
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
                              "text": "Current conditions."
                    },
                    {
                              "id": "c",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "d",
                              "text": "Rain/snow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Current conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Current conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Current conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-weather-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "b",
                              "text": "Rain/snow."
                    },
                    {
                              "id": "c",
                              "text": "Air movement."
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
          id: "sci4-u7-weather-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rain/snow."
                    },
                    {
                              "id": "b",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "c",
                              "text": "Air movement."
                    },
                    {
                              "id": "d",
                              "text": "Moisture in air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means Hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means Hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = Hot/cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
