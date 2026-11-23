import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ela6-u1-lesson-1-1",
  code: "1-1",
  title: "Theme Basics",
  goal: "I CAN identify the theme of a story.",
  standards: ["RL.6.2"],
  vocabulary: [
    { term: "Theme", definition: "Main lesson or message." },
    { term: "Central idea", definition: "Main point." },
    { term: "Lesson", definition: "What we learn." },
    { term: "Message", definition: "What author wants us to know." },
    { term: "Plot", definition: "What happens." },
    { term: "Character", definition: "Person in story." },
    { term: "Setting", definition: "Where/when." },
    { term: "Conflict", definition: "Problem." },
  ],
  concepts: [
    {
      id: "ela6-u1-theme-basics",
      title: "Theme basics",
      skill: "Identify the theme (main lesson or message) of a story.",
      lesson: {
        sections: [
          {
            heading: "What is theme?",
            body: "**Theme** is the main lesson or message of a story — what the author wants us to learn. It's usually a complete sentence about life.",
          },
          {
            heading: "Finding theme",
            body: "Ask: What did the character learn? What message does the story send? Themes often relate to universal truths like friendship, courage, or perseverance.",
          },
        ],
        keyFormulas: [
          { name: "Theme", statement: "Main lesson or message of story." },
        ],
        workedExample: {
          problem: "A story about a boy who never gives up and finally wins a race. What is the theme?",
          solution: "**Perseverance pays off** — keep trying even when it's hard.",
        },
      },
      questions: [
        {
          id: "ela6-u1-theme-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Theme' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the plot"
                    },
                    {
                              "id": "b",
                              "text": "the main lesson or message"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the characters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Main lesson or message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main lesson or message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the main lesson or message",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good theme is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one word"
                    },
                    {
                              "id": "b",
                              "text": "a complete sentence about life"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "a character name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Complete sentence about life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete sentence about life.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a complete sentence about life",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read this scenario and identify the theme: 'Maria practiced piano every day for a year. She failed her first recital but kept practicing. At the second recital, she played beautifully.' What is the theme?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme",
                              "statement": "Perseverance pays off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies theme.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Perseverance pays off — keep practicing even when you fail.**",
          "commonErrors": [
                    "Wrong theme.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Theme is different from plot because theme is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what happens"
                    },
                    {
                              "id": "b",
                              "text": "what we learn from what happens"
                    },
                    {
                              "id": "c",
                              "text": "who is in story"
                    },
                    {
                              "id": "d",
                              "text": "where story takes place"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "What we learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What we learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "what we learn from what happens",
          "commonErrors": [
                    "Confuses with plot."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify the theme of a story and explain how the plot supports it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme",
                              "statement": "Theme + plot connection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies theme.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connects to plot.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Theme: Honesty matters; Plot: Character lies and loses friendship.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No plot connection."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main point."
                    },
                    {
                              "id": "b",
                              "text": "Main lesson or message."
                    },
                    {
                              "id": "c",
                              "text": "What we learn."
                    },
                    {
                              "id": "d",
                              "text": "What author wants us to know."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Main lesson or message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Main lesson or message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Main lesson or message.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Central idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we learn."
                    },
                    {
                              "id": "b",
                              "text": "What author wants us to know."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Main point."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Central idea\" means Main point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Central idea\" means Main point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Central idea** = Main point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-theme-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lesson\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What author wants us to know."
                    },
                    {
                              "id": "b",
                              "text": "What we learn."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "Person in story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Lesson\" means What we learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Lesson\" means What we learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Lesson** = What we learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
