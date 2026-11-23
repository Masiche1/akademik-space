import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ela6-u3-lesson-3-1",
  code: "3-1",
  title: "Setting Analysis",
  goal: "I CAN analyze how setting affects the story.",
  standards: ["RL.6.3"],
  vocabulary: [
    { term: "Setting", definition: "Where/when story happens." },
    { term: "Time", definition: "When." },
    { term: "Place", definition: "Where." },
    { term: "Atmosphere", definition: "Mood/feeling." },
    { term: "Mood", definition: "Emotional tone." },
    { term: "Effect", definition: "How it matters." },
    { term: "Context", definition: "Background." },
    { term: "Symbolism", definition: "Meaning beyond literal." },
  ],
  concepts: [
    {
      id: "ela6-u3-setting-analysis",
      title: "Setting analysis",
      skill: "Analyze setting and explain how it affects mood and plot.",
      lesson: {
        sections: [
          {
            heading: "Where and when",
            body: "**Setting** = time and place of story. It creates **atmosphere** (mood) and can **symbolize** themes.",
          },
          {
            heading: "Effect",
            body: "Ask: How does the setting affect the characters? How would the story be different in a different setting?",
          },
        ],
        keyFormulas: [
          { name: "Setting", statement: "Time + place = atmosphere and mood." },
        ],
        workedExample: {
          problem: "A story is set in a dark, stormy forest at night. How does this setting affect the mood?",
          solution: "**Creates suspense and fear — dark and stormy suggests danger.**",
        },
      },
      questions: [
        {
          id: "ela6-u3-setting-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Setting' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the characters"
                    },
                    {
                              "id": "b",
                              "text": "the time and place of the story"
                    },
                    {
                              "id": "c",
                              "text": "the plot"
                    },
                    {
                              "id": "d",
                              "text": "the theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Time and place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Time and place.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the time and place of the story",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Setting affects the story by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only providing backdrop"
                    },
                    {
                              "id": "b",
                              "text": "creating mood and influencing plot"
                    },
                    {
                              "id": "c",
                              "text": "only naming characters"
                    },
                    {
                              "id": "d",
                              "text": "only setting time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Creating mood + influencing plot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creating mood + influencing plot.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "creating mood and influencing plot",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe a setting and explain how it creates a specific mood in a story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Setting",
                              "statement": "Setting + mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes setting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains mood.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Setting: abandoned house at midnight; Mood: eerie and suspenseful; dark, quiet, shadows create fear.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No mood explained."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Atmosphere' in setting refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the air"
                    },
                    {
                              "id": "b",
                              "text": "the mood or feeling created"
                    },
                    {
                              "id": "c",
                              "text": "the weather"
                    },
                    {
                              "id": "d",
                              "text": "the temperature"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Mood or feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mood or feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the mood or feeling created",
          "commonErrors": [
                    "Confuses with literal."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyze how the setting of a story affects its mood and plot. Cite specific details.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Setting",
                              "statement": "Effect + details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analyzes effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites details.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Setting: small town during drought; Effect: creates tension and desperation; Details: cracked earth, worried faces.'**",
          "commonErrors": [
                    "Cannot analyze.",
                    "No details."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When."
                    },
                    {
                              "id": "b",
                              "text": "Where/when story happens."
                    },
                    {
                              "id": "c",
                              "text": "Where."
                    },
                    {
                              "id": "d",
                              "text": "Mood/feeling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where/when story happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where/when story happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where/when story happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Time\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where."
                    },
                    {
                              "id": "b",
                              "text": "Mood/feeling."
                    },
                    {
                              "id": "c",
                              "text": "Emotional tone."
                    },
                    {
                              "id": "d",
                              "text": "When."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Time\" means When."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Time\" means When.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Time** = When.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-setting-analysis-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mood/feeling."
                    },
                    {
                              "id": "b",
                              "text": "Where."
                    },
                    {
                              "id": "c",
                              "text": "Emotional tone."
                    },
                    {
                              "id": "d",
                              "text": "How it matters."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Place\" means Where."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place\" means Where.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Place** = Where.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
