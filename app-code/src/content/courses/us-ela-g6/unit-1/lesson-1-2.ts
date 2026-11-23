import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ela6-u1-lesson-1-2",
  code: "1-2",
  title: "Theme Development",
  goal: "I CAN explain how a theme develops over the course of a story.",
  standards: ["RL.6.2"],
  vocabulary: [
    { term: "Develop", definition: "Grow or change." },
    { term: "Arc", definition: "Character's journey." },
    { term: "Change", definition: "Becomes different." },
    { term: "Realization", definition: "Understanding." },
    { term: "Turning point", definition: "Key moment." },
    { term: "Resolution", definition: "Ending." },
    { term: "Evidence", definition: "Details supporting." },
    { term: "Trace", definition: "Follow through." },
  ],
  concepts: [
    {
      id: "ela6-u1-theme-development",
      title: "Theme development",
      skill: "Explain how a theme develops through character growth and plot events.",
      lesson: {
        sections: [
          {
            heading: "How themes develop",
            body: "Themes often **develop** as characters grow and change. Look for **turning points** where the character learns something important.",
          },
          {
            heading: "Tracing",
            body: "Follow the character's **arc**: where they start, what challenges they face, and what they learn by the end.",
          },
        ],
        keyFormulas: [
          { name: "Theme development", statement: "Character growth + plot events = theme emerges." },
        ],
        workedExample: {
          problem: "A character starts selfish, loses friends because of it, learns to share, and gains friends. How does the theme develop?",
          solution: "**Theme develops as character learns that sharing builds friendship.**",
        },
      },
      questions: [
        {
          id: "ela6-u1-theme-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A theme often develops through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "character growth and plot events"
                    },
                    {
                              "id": "c",
                              "text": "the illustrations"
                    },
                    {
                              "id": "d",
                              "text": "the author's name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Character growth + plot."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Character growth + plot.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "character growth and plot events",
          "commonErrors": [
                    "Wrong source."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'turning point' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "a key moment where character changes"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the setting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Key moment of change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key moment of change.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a key moment where character changes",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how the theme 'hard work pays off' might develop in a story about a student who struggles but succeeds.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme dev",
                              "statement": "Development explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes development.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Student starts struggling, works hard through challenges, finally succeeds — theme emerges from their growth.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No connection."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Character arc' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the plot"
                    },
                    {
                              "id": "b",
                              "text": "the character's growth and change"
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
                              "statement": "Character's growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Character's growth.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the character's growth and change",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Trace how a theme develops in a story, citing specific plot events.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme dev",
                              "statement": "Development traced."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites events.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Theme: Courage; Event 1: afraid to speak; Event 2: speaks up; Event 3: becomes confident.'**",
          "commonErrors": [
                    "Cannot trace.",
                    "No events cited."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Develop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Character's journey."
                    },
                    {
                              "id": "b",
                              "text": "Grow or change."
                    },
                    {
                              "id": "c",
                              "text": "Becomes different."
                    },
                    {
                              "id": "d",
                              "text": "Understanding."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Develop\" means Grow or change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Develop\" means Grow or change.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Develop** = Grow or change.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Arc\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Becomes different."
                    },
                    {
                              "id": "b",
                              "text": "Understanding."
                    },
                    {
                              "id": "c",
                              "text": "Key moment."
                    },
                    {
                              "id": "d",
                              "text": "Character's journey."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Arc\" means Character's journey."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Arc\" means Character's journey.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Arc** = Character's journey.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-theme-development-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Understanding."
                    },
                    {
                              "id": "b",
                              "text": "Becomes different."
                    },
                    {
                              "id": "c",
                              "text": "Key moment."
                    },
                    {
                              "id": "d",
                              "text": "Ending."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Change\" means Becomes different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Becomes different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Change** = Becomes different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
