import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela6-u3-lesson-3-4",
  code: "3-4",
  title: "Symbolism in Setting",
  goal: "I CAN analyze how setting symbolizes themes.",
  standards: ["RL.6.3"],
  vocabulary: [
    { term: "Symbolism", definition: "Meaning beyond literal." },
    { term: "Setting", definition: "Where/when." },
    { term: "Theme", definition: "Lesson." },
    { term: "Metaphor", definition: "Comparison." },
    { term: "Foreshadow", definition: "Hints at future." },
    { term: "Atmosphere", definition: "Mood." },
    { term: "Context", definition: "Background." },
    { term: "Interpret", definition: "Understand meaning." },
  ],
  concepts: [
    {
      id: "ela6-u3-symbolism-setting",
      title: "Symbolism in setting",
      skill: "Analyze how setting elements symbolize deeper meanings and themes.",
      lesson: {
        sections: [
          {
            heading: "Beyond literal",
            body: "**Symbolism** means something represents something else. Setting can symbolize themes — a storm might represent turmoil.",
          },
          {
            heading: "Finding symbols",
            body: "Ask: Does this setting detail mean more than literal? How does it connect to the theme?",
          },
        ],
        keyFormulas: [
          { name: "Symbolism", statement: "Setting detail represents deeper meaning/theme." },
        ],
        workedExample: {
          problem: "A story set in a dark, decaying house. What might this symbolize?",
          solution: "**Could symbolize decay, secrets, or hidden dangers — depends on theme.**",
        },
      },
      questions: [
        {
          id: "ela6-u3-symbolism-setting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Symbolism' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "literal meaning"
                    },
                    {
                              "id": "b",
                              "text": "meaning beyond literal"
                    },
                    {
                              "id": "c",
                              "text": "only setting"
                    },
                    {
                              "id": "d",
                              "text": "only theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Beyond literal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beyond literal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "meaning beyond literal",
          "commonErrors": [
                    "Confuses with literal."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Setting can symbolize themes by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only describing place"
                    },
                    {
                              "id": "b",
                              "text": "representing deeper meanings"
                    },
                    {
                              "id": "c",
                              "text": "only naming location"
                    },
                    {
                              "id": "d",
                              "text": "only telling time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Deeper meanings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deeper meanings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "representing deeper meanings",
          "commonErrors": [
                    "Too literal."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe a setting element and explain how it might symbolize a theme.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Symbolism",
                              "statement": "Setting + symbol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes setting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains symbol.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Setting: abandoned house; Symbolizes: neglected family relationships or hidden secrets.'**",
          "commonErrors": [
                    "No symbolism.",
                    "Literal only."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Foreshadowing' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "hints at future events"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
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
                              "statement": "Hints at future."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hints at future.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "hints at future events",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify a symbolic setting element and explain how it connects to the story's theme.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Symbolism",
                              "statement": "Symbol + theme."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies symbol.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connects to theme.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Symbol: storm approaching; Theme: impending danger/conflict; Connection: storm mirrors character's turmoil.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No theme connection."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Symbolism\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "Meaning beyond literal."
                    },
                    {
                              "id": "c",
                              "text": "Lesson."
                    },
                    {
                              "id": "d",
                              "text": "Comparison."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Symbolism\" means Meaning beyond literal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Symbolism\" means Meaning beyond literal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Symbolism** = Meaning beyond literal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lesson."
                    },
                    {
                              "id": "b",
                              "text": "Comparison."
                    },
                    {
                              "id": "c",
                              "text": "Hints at future."
                    },
                    {
                              "id": "d",
                              "text": "Where/when."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where/when."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where/when.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where/when.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u3-symbolism-setting-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Comparison."
                    },
                    {
                              "id": "b",
                              "text": "Lesson."
                    },
                    {
                              "id": "c",
                              "text": "Hints at future."
                    },
                    {
                              "id": "d",
                              "text": "Mood."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Lesson."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Lesson.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
