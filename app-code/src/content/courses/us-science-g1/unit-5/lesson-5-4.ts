import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "s1-u5-lesson-5-4",
  code: "5-4",
  title: "Day and Night",
  goal: "I CAN describe the pattern of day and night.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Day", definition: "When sun is up." },
    { term: "Night", definition: "When sun is down." },
    { term: "Sun", definition: "Star that gives light." },
    { term: "Light", definition: "What we see by." },
    { term: "Dark", definition: "No light." },
    { term: "Pattern", definition: "Regular change." },
    { term: "24 hours", definition: "One full day+night." },
    { term: "Morning", definition: "Start of day." },
  ],
  concepts: [
    {
      id: "s1-u5-day-night",
      title: "Day and night",
      skill: "Day and night alternate in a repeating pattern caused by Earth's rotation.",
      lesson: {
        sections: [
          {
            heading: "Day then night",
            body: "The **sun** gives us **light**. When the sun is up it's **day**; when it's down it's **night** (dark). This pattern repeats every **24 hours**.",
          },
          {
            heading: "Morning to night",
            body: "The day starts in the **morning**, goes through afternoon and evening, then becomes **night**. Then it repeats.",
          },
        ],
        keyFormulas: [
          { name: "Day/Night", statement: "Day=sun up, Night=sun down; repeats every 24 hours." },
        ],
        workedExample: {
          problem: "What causes night?",
          solution: "Night happens when the **sun** is on the other side — we can't see its light.",
        },
      },
      questions: [
        {
          id: "s1-u5-day-night-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes day and night?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rain"
                    },
                    {
                              "id": "b",
                              "text": "the sun moving across the sky"
                    },
                    {
                              "id": "c",
                              "text": "clouds only"
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
                              "statement": "Sun's position causes day/night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun's position causes day/night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sun's position**",
          "commonErrors": [
                    "Picks weather cause."
          ]
},
        },
        {
          id: "s1-u5-day-night-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How long is one full day and night cycle?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12 hours"
                    },
                    {
                              "id": "b",
                              "text": "24 hours"
                    },
                    {
                              "id": "c",
                              "text": "48 hours"
                    },
                    {
                              "id": "d",
                              "text": "1 hour"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "24 hours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "24 hours.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**24 hours**",
          "commonErrors": [
                    "Picks wrong duration."
          ]
},
        },
        {
          id: "s1-u5-day-night-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what you see during the day vs at night. What causes the difference?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Day/Night",
                              "statement": "Day vs night + cause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes day + night.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains sun cause.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Day: bright, sun up. Night: dark, sun down — caused by sun's position.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No cause."
          ]
},
        },
        {
          id: "s1-u5-day-night-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Night' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sun is up"
                    },
                    {
                              "id": "b",
                              "text": "sun is down and it's dark"
                    },
                    {
                              "id": "c",
                              "text": "it's raining"
                    },
                    {
                              "id": "d",
                              "text": "morning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Night = sun down, dark."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Night = sun down, dark.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sun down/dark**",
          "commonErrors": [
                    "Confuses with day."
          ]
},
        },
        {
          id: "s1-u5-day-night-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Track when the sun rises and sets for a week. Describe the pattern of day length.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Day/Night",
                              "statement": "Track sunrise/sunset + pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tracks sunrise/sunset.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes day length pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun rises ~6am, sets ~6pm — days about 12 hours.'**",
          "commonErrors": [
                    "No tracking.",
                    "No pattern."
          ]
},
        },
        {
          id: "s1-u5-day-night-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Day\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When sun is down."
                    },
                    {
                              "id": "b",
                              "text": "When sun is up."
                    },
                    {
                              "id": "c",
                              "text": "Star that gives light."
                    },
                    {
                              "id": "d",
                              "text": "What we see by."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Day\" means When sun is up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Day\" means When sun is up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Day** = When sun is up.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-day-night-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Night\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Star that gives light."
                    },
                    {
                              "id": "b",
                              "text": "What we see by."
                    },
                    {
                              "id": "c",
                              "text": "No light."
                    },
                    {
                              "id": "d",
                              "text": "When sun is down."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Night\" means When sun is down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Night\" means When sun is down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Night** = When sun is down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-day-night-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we see by."
                    },
                    {
                              "id": "b",
                              "text": "Star that gives light."
                    },
                    {
                              "id": "c",
                              "text": "No light."
                    },
                    {
                              "id": "d",
                              "text": "Regular change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Star that gives light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Star that gives light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Star that gives light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
