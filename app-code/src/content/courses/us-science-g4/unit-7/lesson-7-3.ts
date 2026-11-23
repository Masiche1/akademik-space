import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "sci4-u7-lesson-7-3",
  code: "7-3",
  title: "Severe Weather",
  goal: "I CAN identify severe weather and safety measures.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Severe weather", definition: "Dangerous conditions." },
    { term: "Hurricane", definition: "Strong tropical storm." },
    { term: "Tornado", definition: "Spinning column." },
    { term: "Thunderstorm", definition: "Lightning + rain." },
    { term: "Flood", definition: "Water overflow." },
    { term: "Warning", definition: "Alert." },
    { term: "Safety", definition: "Protect yourself." },
    { term: "Shelter", definition: "Safe place." },
  ],
  concepts: [
    {
      id: "sci4-u7-severe-weather",
      title: "Severe weather",
      skill: "Identify severe weather types and appropriate safety measures.",
      lesson: {
        sections: [
          {
            heading: "Dangerous weather",
            body: "**Severe weather** includes **hurricanes** (tropical storms), **tornadoes** (spinning columns), **thunderstorms** (lightning), and **floods** (water overflow).",
          },
          {
            heading: "Safety",
            body: "Follow **warnings**, go to **shelter** (basement for tornadoes, interior room for hurricanes), and never drive through floodwater.",
          },
        ],
        keyFormulas: [
          { name: "Safety", statement: "Warning + shelter + avoid hazards = safety." },
        ],
        workedExample: {
          problem: "What should you do during a tornado warning?",
          solution: "Go to a **basement** or **interior room** on lowest floor; stay away from windows.",
        },
      },
      questions: [
        {
          id: "sci4-u7-severe-weather-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'tornado' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a hurricane"
                    },
                    {
                              "id": "b",
                              "text": "a spinning column of air"
                    },
                    {
                              "id": "c",
                              "text": "a flood"
                    },
                    {
                              "id": "d",
                              "text": "a thunderstorm"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tornado = spinning column."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tornado = spinning column.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a spinning column of air",
          "commonErrors": [
                    "Confuses with other storms."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "During a tornado warning, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "go outside"
                    },
                    {
                              "id": "b",
                              "text": "go to basement/interior room"
                    },
                    {
                              "id": "c",
                              "text": "drive away"
                    },
                    {
                              "id": "d",
                              "text": "open windows"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Basement/interior room."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Basement/interior room.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "go to basement/interior room",
          "commonErrors": [
                    "Unsafe action."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two types of severe weather and the safety measure for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Severe weather",
                              "statement": "Two types + safety."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names two + safety.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Tornado: basement; Hurricane: interior room, stay inside.**",
          "commonErrors": [
                    "Only one type.",
                    "No safety."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'hurricane' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a tornado"
                    },
                    {
                              "id": "b",
                              "text": "a strong tropical storm"
                    },
                    {
                              "id": "c",
                              "text": "a flood only"
                    },
                    {
                              "id": "d",
                              "text": "lightning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hurricane = tropical storm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hurricane = tropical storm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a strong tropical storm",
          "commonErrors": [
                    "Confuses with tornado."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why driving through floodwater is dangerous. What should you do instead?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Severe weather",
                              "statement": "Danger + alternative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains danger.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives alternative.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Water can sweep cars away; turn around, find higher ground.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No alternative."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Severe weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strong tropical storm."
                    },
                    {
                              "id": "b",
                              "text": "Dangerous conditions."
                    },
                    {
                              "id": "c",
                              "text": "Spinning column."
                    },
                    {
                              "id": "d",
                              "text": "Lightning + rain."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Severe weather\" means Dangerous conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Severe weather\" means Dangerous conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Severe weather** = Dangerous conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hurricane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Spinning column."
                    },
                    {
                              "id": "b",
                              "text": "Lightning + rain."
                    },
                    {
                              "id": "c",
                              "text": "Water overflow."
                    },
                    {
                              "id": "d",
                              "text": "Strong tropical storm."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hurricane\" means Strong tropical storm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hurricane\" means Strong tropical storm.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hurricane** = Strong tropical storm.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-severe-weather-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tornado\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lightning + rain."
                    },
                    {
                              "id": "b",
                              "text": "Spinning column."
                    },
                    {
                              "id": "c",
                              "text": "Water overflow."
                    },
                    {
                              "id": "d",
                              "text": "Alert."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tornado\" means Spinning column."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tornado\" means Spinning column.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tornado** = Spinning column.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
