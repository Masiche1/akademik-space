import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ela5-u1-lesson-1-2",
  code: "1-2",
  title: "Determining Theme",
  goal: "I CAN determine the theme of a story using details.",
  standards: ["RL.5.2"],
  vocabulary: [
    { term: "Theme", definition: "Main message." },
    { term: "Central idea", definition: "What it's really about." },
    { term: "Lesson", definition: "What you learn." },
    { term: "Moral", definition: "Right/wrong message." },
    { term: "Detail", definition: "Specific fact." },
    { term: "Infer", definition: "Read between lines." },
    { term: "Summary", definition: "Short version." },
    { term: "Message", definition: "What author wants you to know." },
  ],
  concepts: [
    {
      id: "ela5-u1-determining-theme",
      title: "Determining theme",
      skill: "Find the theme (main message) of a story using text details.",
      lesson: {
        sections: [
          {
            heading: "What is theme",
            body: "The **theme** is the **main message** or **lesson** the author wants you to learn. It's not just what happens — it's what it **means**.",
          },
          {
            heading: "Finding theme",
            body: "Look at what the character **learns** or how they **change**. The theme is usually a **life lesson** like 'honesty is important' or 'don't judge by appearances'.",
          },
        ],
        keyFormulas: [
          { name: "Theme", statement: "What the character learns = theme." },
        ],
        workedExample: {
          problem: "A story about a boy who lies and loses friends. What's the theme?",
          solution: "**Honesty matters** — lying has consequences.",
        },
      },
      questions: [
        {
          id: "ela5-u1-determining-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'theme' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what happens"
                    },
                    {
                              "id": "b",
                              "text": "the main message or lesson"
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
                              "statement": "Main message/lesson."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main message/lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the main message or lesson",
          "commonErrors": [
                    "Confuses with plot."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find the theme, you should look at...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title only"
                    },
                    {
                              "id": "b",
                              "text": "what the character learns or how they change"
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
                              "statement": "What character learns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What character learns.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "what the character learns or how they change",
          "commonErrors": [
                    "Looks at wrong things."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a short story. State the theme and cite two details that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme",
                              "statement": "Theme + 2 details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States theme.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites details.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Theme: friendship is important. Details: character helps friend, shares toys.**",
          "commonErrors": [
                    "No theme.",
                    "No details."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A theme is usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fact"
                    },
                    {
                              "id": "b",
                              "text": "a life lesson or message"
                    },
                    {
                              "id": "c",
                              "text": "a description"
                    },
                    {
                              "id": "d",
                              "text": "an opinion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Life lesson/message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Life lesson/message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a life lesson or message",
          "commonErrors": [
                    "Thinks it's factual."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the themes of two different stories. How are they similar or different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Theme",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States both themes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares them.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Story A: honesty matters; Story B: kindness matters. Both teach moral lessons.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Missing themes."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's really about."
                    },
                    {
                              "id": "b",
                              "text": "Main message."
                    },
                    {
                              "id": "c",
                              "text": "What you learn."
                    },
                    {
                              "id": "d",
                              "text": "Right/wrong message."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Main message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Main message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Main message.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Central idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you learn."
                    },
                    {
                              "id": "b",
                              "text": "Right/wrong message."
                    },
                    {
                              "id": "c",
                              "text": "Specific fact."
                    },
                    {
                              "id": "d",
                              "text": "What it's really about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Central idea\" means What it's really about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Central idea\" means What it's really about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Central idea** = What it's really about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-determining-theme-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Lesson\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Right/wrong message."
                    },
                    {
                              "id": "b",
                              "text": "What you learn."
                    },
                    {
                              "id": "c",
                              "text": "Specific fact."
                    },
                    {
                              "id": "d",
                              "text": "Read between lines."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Lesson\" means What you learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Lesson\" means What you learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Lesson** = What you learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
