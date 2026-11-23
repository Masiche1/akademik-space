import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "sci4-u1-lesson-1-3",
  code: "1-3",
  title: "Measuring Temperature",
  goal: "I CAN measure temperature and understand thermometers.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Thermometer", definition: "Measures temperature." },
    { term: "Degrees", definition: "Unit of temperature." },
    { term: "Celsius", definition: "Metric temperature." },
    { term: "Fahrenheit", definition: "US temperature." },
    { term: "Scale", definition: "Numbered markings." },
    { term: "Read", definition: "Get the measurement." },
    { term: "Hot/cold", definition: "Temperature range." },
    { term: "Change", definition: "How much it differs." },
  ],
  concepts: [
    {
      id: "sci4-u1-temperature-measure",
      title: "Measuring temperature",
      skill: "Use thermometers to measure temperature in Celsius or Fahrenheit.",
      lesson: {
        sections: [
          {
            heading: "Thermometers",
            body: "A **thermometer** measures **temperature**. In the US we often use **Fahrenheit** (°F); scientists use **Celsius** (°C). Water freezes at 32°F/0°C and boils at 212°F/100°C.",
          },
          {
            heading: "Reading",
            body: "Read the number where the liquid level is on the **scale**. Higher number = hotter.",
          },
        ],
        keyFormulas: [
          { name: "Temperature", statement: "Thermometer reading = degrees (°F or °C)." },
          { name: "Reference", statement: "Water: 32°F/0°C freeze; 212°F/100°C boil." },
        ],
        workedExample: {
          problem: "A thermometer shows 75°F. Is that hot or cold?",
          solution: "75°F is warm — between freezing (32°F) and boiling (212°F), closer to room temperature.",
        },
      },
      questions: [
        {
          id: "sci4-u1-temperature-measure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A thermometer measures...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mass"
                    },
                    {
                              "id": "b",
                              "text": "temperature"
                    },
                    {
                              "id": "c",
                              "text": "volume"
                    },
                    {
                              "id": "d",
                              "text": "length"
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
          "finalAnswer": "temperature",
          "commonErrors": [
                    "Confuses with other measures."
          ]
},
        },
        {
          id: "sci4-u1-temperature-measure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water freezes at...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "100°C"
                    },
                    {
                              "id": "b",
                              "text": "0°C or 32°F"
                    },
                    {
                              "id": "c",
                              "text": "50°C"
                    },
                    {
                              "id": "d",
                              "text": "212°F"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Water freezes at 0°C/32°F."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water freezes at 0°C/32°F.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0°C or 32°F",
          "commonErrors": [
                    "Wrong reference point."
          ]
},
        },
        {
          id: "sci4-u1-temperature-measure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a thermometer showing a temperature. Is it above or below freezing? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Temperature",
                              "statement": "Reading + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reads temperature.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares to freezing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '45°F is above freezing (32°F) but cool.'**",
          "commonErrors": [
                    "Cannot read.",
                    "No comparison."
          ]
},
        },
        {
          id: "sci4-u1-temperature-measure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Celsius and Fahrenheit are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the same"
                    },
                    {
                              "id": "b",
                              "text": "two different temperature scales"
                    },
                    {
                              "id": "c",
                              "text": "types of thermometers"
                    },
                    {
                              "id": "d",
                              "text": "units of length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Two different scales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two different scales.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "two different temperature scales",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "sci4-u1-temperature-measure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert between Celsius and Fahrenheit: if it's 20°C outside, is that hot or cold? Explain using reference points.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Temperature",
                              "statement": "Conversion + judgment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts/compares.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Judges hot/cold.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '20°C = 68°F, which is mild — above freezing, below boiling, comfortable.'**",
          "commonErrors": [
                    "Wrong conversion.",
                    "No judgment."
          ]
},
        },
        {
          id: "sci4-u1-temperature-measure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thermometer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unit of temperature."
                    },
                    {
                              "id": "b",
                              "text": "Measures temperature."
                    },
                    {
                              "id": "c",
                              "text": "Metric temperature."
                    },
                    {
                              "id": "d",
                              "text": "US temperature."
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
          id: "sci4-u1-temperature-measure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Degrees\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Metric temperature."
                    },
                    {
                              "id": "b",
                              "text": "US temperature."
                    },
                    {
                              "id": "c",
                              "text": "Numbered markings."
                    },
                    {
                              "id": "d",
                              "text": "Unit of temperature."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Degrees\" means Unit of temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Degrees\" means Unit of temperature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Degrees** = Unit of temperature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-temperature-measure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Celsius\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "US temperature."
                    },
                    {
                              "id": "b",
                              "text": "Metric temperature."
                    },
                    {
                              "id": "c",
                              "text": "Numbered markings."
                    },
                    {
                              "id": "d",
                              "text": "Get the measurement."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Celsius\" means Metric temperature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Celsius\" means Metric temperature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Celsius** = Metric temperature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
