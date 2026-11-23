import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ela4-u1-lesson-1-2",
  code: "1-2",
  title: "Determining Themes",
  goal: "I CAN identify the theme (central message) of a story.",
  standards: ["RL.4.2"],
  vocabulary: [
    { term: "Theme", definition: "Central message." },
    { term: "Message", definition: "What the story teaches." },
    { term: "Lesson", definition: "What we learn." },
    { term: "Character", definition: "Who is in story." },
    { term: "Plot", definition: "What happens." },
    { term: "Setting", definition: "Where/when." },
    { term: "Moral", definition: "The lesson." },
    { term: "Main idea", definition: "Big idea." },
  ],
  concepts: [
    {
      id: "ela4-u1-themes",
      title: "Determining themes",
      skill: "Identify the theme or central message of a story.",
      lesson: {
        sections: [
          {
            heading: "What is theme?",
            body: "The **theme** is the story's **central message** — what it teaches about life, like 'honesty pays off' or 'friends help each other.'",
          },
          {
            heading: "How to find it",
            body: "Ask: 'What did the character learn?' or 'What is this story really about?' The theme is bigger than the plot — it's the **lesson**.",
          },
        ],
        keyFormulas: [
          { name: "Theme", statement: "What the story teaches = lesson + message." },
        ],
        workedExample: {
          problem: "Story: 'The boy lied and lost his friend's trust.' Theme?",
          solution: "**Honesty matters** — lying hurts relationships.",
        },
      },
      questions: [
        {
          id: "ela4-u1-themes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'theme' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the plot"
                    },
                    {
                              "id": "b",
                              "text": "the central message or lesson"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Theme = central message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Theme = central message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the central message or lesson**",
          "commonErrors": [
                    "Confuses with plot."
          ]
},
        },
        {
          id: "ela4-u1-themes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find the theme, ask...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how many pages"
                    },
                    {
                              "id": "b",
                              "text": "what did the character learn?"
                    },
                    {
                              "id": "c",
                              "text": "who wrote it"
                    },
                    {
                              "id": "d",
                              "text": "is it long"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Ask what the character learned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ask what the character learned.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what did the character learn?**",
          "commonErrors": [
                    "Asks wrong question."
          ]
},
        },
        {
          id: "ela4-u1-themes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a story. State its theme in one sentence and cite two details that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme",
                              "statement": "Theme + supporting details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States theme.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cites two details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Theme: kindness wins; details: she shared her lunch, helped the lost dog.'**",
          "commonErrors": [
                    "No theme.",
                    "No details."
          ]
},
        },
        {
          id: "ela4-u1-themes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The theme is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one word"
                    },
                    {
                              "id": "b",
                              "text": "a sentence or phrase about a life lesson"
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
                              "statement": "Theme = life lesson statement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Theme = life lesson statement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a sentence or phrase about a life lesson**",
          "commonErrors": [
                    "Thinks theme is a word."
          ]
},
        },
        {
          id: "ela4-u1-themes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the themes of two stories. How are they similar or different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme",
                              "statement": "Two themes + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States both themes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compares them.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Story A theme: perseverance; Story B theme: friendship; both about helping others.'**",
          "commonErrors": [
                    "Only one theme.",
                    "No comparison."
          ]
},
        },
        {
          id: "ela4-u1-themes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What the story teaches."
                    },
                    {
                              "id": "b",
                              "text": "Central message."
                    },
                    {
                              "id": "c",
                              "text": "What we learn."
                    },
                    {
                              "id": "d",
                              "text": "Who is in story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Central message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Central message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Central message.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-themes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Message\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we learn."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "What the story teaches."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Message\" means What the story teaches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Message\" means What the story teaches.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Message** = What the story teaches.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-themes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lesson\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
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
                              "text": "Where/when."
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
