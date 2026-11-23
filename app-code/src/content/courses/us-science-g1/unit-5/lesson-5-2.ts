import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "s1-u5-lesson-5-2",
  code: "5-2",
  title: "Weather Tools",
  goal: "I CAN use tools to measure weather.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Thermometer", definition: "Measures temperature." },
    { term: "Rain gauge", definition: "Measures rainfall." },
    { term: "Weather vane", definition: "Shows wind direction." },
    { term: "Barometer", definition: "Measures air pressure." },
    { term: "Observe", definition: "Watch carefully." },
    { term: "Measure", definition: "Find how much." },
    { term: "Record", definition: "Write down." },
    { term: "Data", definition: "Information collected." },
  ],
  concepts: [
    {
      id: "s1-u5-weather-tools",
      title: "Weather tools",
      skill: "Weather tools measure temperature, rainfall, wind direction and air pressure.",
      lesson: {
        sections: [
          {
            heading: "Tools help us know",
            body: "**Weather tools** help us measure weather: **thermometer** (temperature), **rain gauge** (rainfall), **weather vane** (wind direction), **barometer** (air pressure).",
          },
          {
            heading: "Record data",
            body: "We **observe** weather, **measure** it with tools, and **record** the **data** to see patterns.",
          },
        ],
        keyFormulas: [
          { name: "Weather tools", statement: "Thermometer=temp, rain gauge=rain, vane=wind direction, barometer=pressure." },
        ],
        workedExample: {
          problem: "You want to know if it will rain. Which tool helps?",
          solution: "A **barometer** measures air pressure — falling pressure often means rain. A **rain gauge** measures how much rain fell.",
        },
      },
      questions: [
        {
          id: "s1-u5-weather-tools-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'thermometer' measures...",
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
                              "text": "air pressure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Thermometer = temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thermometer = temperature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**temperature**",
          "commonErrors": [
                    "Picks rainfall/pressure."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'rain gauge' measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "temperature"
                    },
                    {
                              "id": "b",
                              "text": "how much rain fell"
                    },
                    {
                              "id": "c",
                              "text": "wind direction"
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
                              "statement": "Rain gauge = rainfall amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rain gauge = rainfall amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rainfall**",
          "commonErrors": [
                    "Picks temperature."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a weather tool. What does it measure? How would you use it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather tools",
                              "statement": "Tool + what it measures + use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names tool + measures + use.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Thermometer measures temperature; I check it each morning.'**",
          "commonErrors": [
                    "Cannot name tool.",
                    "Wrong measurement."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'weather vane' shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "temperature"
                    },
                    {
                              "id": "b",
                              "text": "wind direction"
                    },
                    {
                              "id": "c",
                              "text": "rainfall"
                    },
                    {
                              "id": "d",
                              "text": "pressure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weather vane = wind direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weather vane = wind direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**wind direction**",
          "commonErrors": [
                    "Picks temperature."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use two weather tools to measure today's weather. Record your data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather tools",
                              "statement": "2 tools + data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses 2 tools correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Records data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Thermometer: 72F; rain gauge: 0.2 inches.'**",
          "commonErrors": [
                    "Fewer than 2 tools.",
                    "No data recorded."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thermometer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Measures rainfall."
                    },
                    {
                              "id": "b",
                              "text": "Measures temperature."
                    },
                    {
                              "id": "c",
                              "text": "Shows wind direction."
                    },
                    {
                              "id": "d",
                              "text": "Measures air pressure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Thermometer\" means Measures temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Thermometer\" means Measures temperature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Thermometer** = Measures temperature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rain gauge\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows wind direction."
                    },
                    {
                              "id": "b",
                              "text": "Measures air pressure."
                    },
                    {
                              "id": "c",
                              "text": "Watch carefully."
                    },
                    {
                              "id": "d",
                              "text": "Measures rainfall."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rain gauge\" means Measures rainfall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rain gauge\" means Measures rainfall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rain gauge** = Measures rainfall.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-weather-tools-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather vane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Measures air pressure."
                    },
                    {
                              "id": "b",
                              "text": "Shows wind direction."
                    },
                    {
                              "id": "c",
                              "text": "Watch carefully."
                    },
                    {
                              "id": "d",
                              "text": "Find how much."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather vane\" means Shows wind direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather vane\" means Shows wind direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather vane** = Shows wind direction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
