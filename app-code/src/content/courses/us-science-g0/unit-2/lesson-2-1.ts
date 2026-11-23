import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "s0-u2-lesson-2-1",
  code: "2-1",
  title: "Day and Night",
  goal: "I CAN describe how day and night change.",
  standards: ["K-ESS1-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Day", definition: "When the sun is out and it is light." },
    { term: "Night", definition: "When it is dark and we see stars/moon." },
    { term: "Sun", definition: "The star that gives us light and warmth." },
    { term: "Moon", definition: "The object we see at night." },
    { term: "Star", definition: "A point of light in the night sky." },
    { term: "Light", definition: "What lets us see." },
    { term: "Dark", definition: "No light." },
    { term: "Sky", definition: "What is above us." },
  ],
  concepts: [
    {
      id: "s0-u2-day-night",
      title: "Day and night",
      skill: "Describe how day and night change and what we see in each.",
      lesson: {
        sections: [
          {
            heading: "Day vs night",
            body: "**Day** is when the **sun** is out and it is **light**. **Night** is when it is **dark** and we see the **moon** and **stars**.",
          },
          {
            heading: "What we see",
            body: "In the **day** sky we see the sun, clouds and blue sky. In the **night** sky we see the moon, stars and sometimes planets.",
          },
        ],
        keyFormulas: [
          { name: "Day/Night", statement: "Day=sun+light; Night=dark+moon/stars." },
        ],
        workedExample: {
          problem: "What can you see in the sky during the day? At night?",
          solution: "Day: **sun, clouds, blue sky**. Night: **moon, stars**.",
        },
      },
      questions: [
        {
          id: "s0-u2-day-night-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During the day, the sky is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dark"
                    },
                    {
                              "id": "b",
                              "text": "light"
                    },
                    {
                              "id": "c",
                              "text": "full of stars"
                    },
                    {
                              "id": "d",
                              "text": "black"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Day = light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Day = light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**light**",
          "commonErrors": [
                    "Confuses with night."
          ]
},
        },
        {
          id: "s0-u2-day-night-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "We see the moon and stars in the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "day"
                    },
                    {
                              "id": "b",
                              "text": "night"
                    },
                    {
                              "id": "c",
                              "text": "morning only"
                    },
                    {
                              "id": "d",
                              "text": "afternoon only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Moon and stars are seen at night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moon and stars are seen at night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**night**",
          "commonErrors": [
                    "Picks day."
          ]
},
        },
        {
          id: "s0-u2-day-night-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe what you see in the sky during the day and at night.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Day/night",
                              "statement": "Day objects + night objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes day + night sky.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Day: sun and clouds. Night: moon and stars.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Same for both."
          ]
},
        },
        {
          id: "s0-u2-day-night-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'sun' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a planet"
                    },
                    {
                              "id": "b",
                              "text": "a star that gives us light and warmth"
                    },
                    {
                              "id": "c",
                              "text": "the moon"
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
                              "statement": "Sun = a star giving light/warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun = a star giving light/warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**a star**",
          "commonErrors": [
                    "Confuses with moon."
          ]
},
        },
        {
          id: "s0-u2-day-night-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the day sky and night sky. What is different? What can you see in each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Day/night",
                              "statement": "Day vs night differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes day sky.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes night sky + difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Day: sun, blue; Night: moon, stars, dark.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No difference."
          ]
},
        },
        {
          id: "s0-u2-day-night-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Day\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When it is dark and we see stars/moon."
                    },
                    {
                              "id": "b",
                              "text": "When the sun is out and it is light."
                    },
                    {
                              "id": "c",
                              "text": "The star that gives us light and warmth."
                    },
                    {
                              "id": "d",
                              "text": "The object we see at night."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Day\" means When the sun is out and it is light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Day\" means When the sun is out and it is light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Day** = When the sun is out and it is light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-day-night-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Night\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The star that gives us light and warmth."
                    },
                    {
                              "id": "b",
                              "text": "The object we see at night."
                    },
                    {
                              "id": "c",
                              "text": "A point of light in the night sky."
                    },
                    {
                              "id": "d",
                              "text": "When it is dark and we see stars/moon."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Night\" means When it is dark and we see stars/moon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Night\" means When it is dark and we see stars/moon.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Night** = When it is dark and we see stars/moon.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-day-night-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The object we see at night."
                    },
                    {
                              "id": "b",
                              "text": "The star that gives us light and warmth."
                    },
                    {
                              "id": "c",
                              "text": "A point of light in the night sky."
                    },
                    {
                              "id": "d",
                              "text": "What lets us see."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means The star that gives us light and warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means The star that gives us light and warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = The star that gives us light and warmth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
