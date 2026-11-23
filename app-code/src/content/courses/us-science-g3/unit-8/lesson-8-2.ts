import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "sci3-u8-lesson-8-2",
  code: "8-2",
  title: "Severe Weather",
  goal: "I CAN describe severe weather and how to stay safe.",
  standards: ["ESS3.B"],
  vocabulary: [
    { term: "Severe", definition: "Dangerous/extreme." },
    { term: "Hurricane", definition: "Strong storm with wind/rain." },
    { term: "Tornado", definition: "Spinning column of air." },
    { term: "Thunderstorm", definition: "Storm with thunder/lightning." },
    { term: "Flood", definition: "Too much water." },
    { term: "Warning", definition: "Danger alert." },
    { term: "Safe", definition: "Protected." },
    { term: "Shelter", definition: "Safe place." },
  ],
  concepts: [
    {
      id: "sci3-u8-severe-weather",
      title: "Severe weather",
      skill: "Describe severe weather types and safety measures.",
      lesson: {
        sections: [
          {
            heading: "Dangerous weather",
            body: "**Severe weather** includes **hurricanes** (strong wind/rain), **tornadoes** (spinning air), **thunderstorms** (thunder/lightning), and **floods** (too much water).",
          },
          {
            heading: "Staying safe",
            body: "When there's a **warning**, go to a **safe** place or **shelter**. Stay indoors during storms, away from windows during tornadoes.",
          },
        ],
        keyFormulas: [
          { name: "Severe weather", statement: "Hurricane + tornado + thunderstorm + flood = dangerous weather." },
        ],
        workedExample: {
          problem: "What should you do during a tornado warning?",
          solution: "Go to a **safe** place — lowest level of building, away from windows.",
        },
      },
      questions: [
        {
          id: "sci3-u8-severe-weather-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'tornado' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rain"
                    },
                    {
                              "id": "b",
                              "text": "a spinning column of air"
                    },
                    {
                              "id": "c",
                              "text": "snow"
                    },
                    {
                              "id": "d",
                              "text": "wind only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tornado = spinning air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tornado = spinning air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a spinning column of air",
          "commonErrors": [
                    "Thinks tornado is rain."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "During a severe weather warning, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "go outside"
                    },
                    {
                              "id": "b",
                              "text": "go to a safe place or shelter"
                    },
                    {
                              "id": "c",
                              "text": "ignore it"
                    },
                    {
                              "id": "d",
                              "text": "play outside"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Go to safe place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Go to safe place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "go to a safe place or shelter",
          "commonErrors": [
                    "Thinks it's safe to go out."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of severe weather and one safety rule for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Severe weather",
                              "statement": "2 types + safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives safety rules.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Tornado: shelter low. Flood: move to higher ground.'**",
          "commonErrors": [
                    "Cannot name types.",
                    "No safety."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'hurricane' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light rain"
                    },
                    {
                              "id": "b",
                              "text": "a strong storm with wind and rain"
                    },
                    {
                              "id": "c",
                              "text": "snow"
                    },
                    {
                              "id": "d",
                              "text": "wind only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hurricane = strong storm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hurricane = strong storm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a strong storm with wind and rain",
          "commonErrors": [
                    "Thinks hurricane is light rain."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it important to pay attention to weather warnings? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Severe weather",
                              "statement": "Warnings = safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains importance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Warnings tell us dangerous weather is coming so we can get to safety.'**",
          "commonErrors": [
                    "Says warnings don't matter.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Severe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strong storm with wind/rain."
                    },
                    {
                              "id": "b",
                              "text": "Dangerous/extreme."
                    },
                    {
                              "id": "c",
                              "text": "Spinning column of air."
                    },
                    {
                              "id": "d",
                              "text": "Storm with thunder/lightning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Severe\" means Dangerous/extreme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Severe\" means Dangerous/extreme.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Severe** = Dangerous/extreme.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hurricane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spinning column of air."
                    },
                    {
                              "id": "b",
                              "text": "Storm with thunder/lightning."
                    },
                    {
                              "id": "c",
                              "text": "Too much water."
                    },
                    {
                              "id": "d",
                              "text": "Strong storm with wind/rain."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hurricane\" means Strong storm with wind/rain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hurricane\" means Strong storm with wind/rain.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hurricane** = Strong storm with wind/rain.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-severe-weather-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tornado\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Storm with thunder/lightning."
                    },
                    {
                              "id": "b",
                              "text": "Spinning column of air."
                    },
                    {
                              "id": "c",
                              "text": "Too much water."
                    },
                    {
                              "id": "d",
                              "text": "Danger alert."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tornado\" means Spinning column of air."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tornado\" means Spinning column of air.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tornado** = Spinning column of air.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
