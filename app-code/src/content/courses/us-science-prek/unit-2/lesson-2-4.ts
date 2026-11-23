import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "spk-u2-lesson-2-4",
  code: "2-4",
  title: "Weather Tools",
  goal: "I CAN use simple tools to measure weather.",
  standards: ["ELOF-PK.SCI.WEATHER.3"],
  vocabulary: [
    { term: "Thermometer", definition: "Tool that measures temperature." },
    { term: "Rain gauge", definition: "Tool that measures rainfall." },
    { term: "Wind vane", definition: "Tool that shows wind direction." },
    { term: "Measure", definition: "Find out how much." },
    { term: "Observe", definition: "Watch and notice." },
  ],
  concepts: [
    {
      id: "spk-u2-weather-tools",
      title: "Weather tools",
      skill: "Use thermometers, rain gauges and wind vanes to observe weather.",
      lesson: {
        sections: [
          {
            heading: "Tools for weather",
            body: "A **thermometer** measures **temperature** (hot/cold). A **rain gauge** collects and measures **rainfall**. A **wind vane** shows **wind direction**.",
          },
          {
            heading: "Measure the weather",
            body: "Scientists use tools to **measure** weather so they can predict it. Checking the thermometer tells you if it's hot or cold outside.",
          },
        ],
        keyFormulas: [
          { name: "Thermometer", statement: "Measures temperature." },
          { name: "Rain gauge", statement: "Measures rainfall." },
          { name: "Wind vane", statement: "Shows wind direction." },
        ],
        workedExample: {
          problem: "You want to know if it's raining and how much. What tool?",
          solution: "A **rain gauge** collects and measures rainfall.",
        },
      },
      questions: [
        {
          id: "spk-u2-weather-tools-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermometer measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rainfall"
                    },
                    {
                              "id": "b",
                              "text": "temperature"
                    },
                    {
                              "id": "c",
                              "text": "wind speed"
                    },
                    {
                              "id": "d",
                              "text": "humidity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Thermometer measures temperature (hot/cold)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thermometer measures temperature (hot/cold).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature**",
          "commonErrors": [
                    "Confuses with rain gauge."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rain gauge is used to measure...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "temperature"
                    },
                    {
                              "id": "b",
                              "text": "how much rain falls"
                    },
                    {
                              "id": "c",
                              "text": "wind direction"
                    },
                    {
                              "id": "d",
                              "text": "clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rain gauge measures rainfall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rain gauge measures rainfall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rainfall**",
          "commonErrors": [
                    "Confuses with thermometer."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which weather tool would you use to check if it's hot or cold outside? Why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather tools",
                              "statement": "Thermometer for temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says thermometer + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Thermometer — it measures temperature.'**",
          "commonErrors": [
                    "Wrong tool.",
                    "No reason."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A wind vane shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "temperature"
                    },
                    {
                              "id": "b",
                              "text": "which way the wind blows"
                    },
                    {
                              "id": "c",
                              "text": "rainfall"
                    },
                    {
                              "id": "d",
                              "text": "time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wind vane shows wind direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wind vane shows wind direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wind direction**",
          "commonErrors": [
                    "Confuses with other tools."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Match three weather tools (thermometer, rain gauge, wind vane) to what they measure. Then pick one and explain why it helps predict weather.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather tools",
                              "statement": "Match tools to measurements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches all 3 tools correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains how tool helps predict.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Thermometer=temp, rain gauge=rain, wind vane=direction; thermometer shows if it'll be hot/cold.'**",
          "commonErrors": [
                    "Wrong matches.",
                    "No explanation."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thermometer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tool that measures rainfall."
                    },
                    {
                              "id": "b",
                              "text": "Tool that measures temperature."
                    },
                    {
                              "id": "c",
                              "text": "Tool that shows wind direction."
                    },
                    {
                              "id": "d",
                              "text": "Find out how much."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Thermometer\" means Tool that measures temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Thermometer\" means Tool that measures temperature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Thermometer** = Tool that measures temperature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rain gauge\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tool that shows wind direction."
                    },
                    {
                              "id": "b",
                              "text": "Find out how much."
                    },
                    {
                              "id": "c",
                              "text": "Watch and notice."
                    },
                    {
                              "id": "d",
                              "text": "Tool that measures rainfall."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rain gauge\" means Tool that measures rainfall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rain gauge\" means Tool that measures rainfall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rain gauge** = Tool that measures rainfall.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-tools-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wind vane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find out how much."
                    },
                    {
                              "id": "b",
                              "text": "Tool that shows wind direction."
                    },
                    {
                              "id": "c",
                              "text": "Watch and notice."
                    },
                    {
                              "id": "d",
                              "text": "Tool that measures temperature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wind vane\" means Tool that shows wind direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wind vane\" means Tool that shows wind direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wind vane** = Tool that shows wind direction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
