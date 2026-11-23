import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "ela2-u1-lesson-1-5",
  code: "1-5",
  title: "Author's Purpose",
  goal: "I CAN identify why an author wrote a story.",
  standards: ["RL.2.5", "RL.2.6"],
  vocabulary: [
    { term: "Author", definition: "Who wrote it." },
    { term: "Purpose", definition: "Why they wrote it." },
    { term: "To entertain", definition: "Make us laugh/happy." },
    { term: "To inform", definition: "Teach us facts." },
    { term: "To persuade", definition: "Convince us." },
    { term: "Message", definition: "What author wants us to learn." },
    { term: "Lesson", definition: "Moral of story." },
    { term: "Feeling", definition: "Emotion it creates." },
  ],
  concepts: [
    {
      id: "ela2-u1-author-purpose",
      title: "Author's purpose",
      skill: "Identify why an author wrote a story — to entertain, inform or persuade.",
      lesson: {
        sections: [
          {
            heading: "Why did they write it?",
            body: "Every author writes for a **purpose**: to **entertain** (make us laugh or feel something), to **inform** (teach us facts), or to **persuade** (convince us of something).",
          },
          {
            heading: "The message",
            body: "Stories often have a **message** or **lesson** — what the author wants us to learn or feel.",
          },
        ],
        keyFormulas: [
          { name: "Author's purpose", statement: "Entertain + inform + persuade = why authors write." },
        ],
        workedExample: {
          problem: "Why did the author write 'The Very Hungry Caterpillar'?",
          solution: "To **inform** — it teaches about caterpillars and their life cycle.",
        },
      },
      questions: [
        {
          id: "ela2-u1-author-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Author's purpose' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "why the author wrote it"
                    },
                    {
                              "id": "c",
                              "text": "the characters"
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
                              "statement": "Purpose = why they wrote."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose = why they wrote.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**why they wrote**",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If an author writes to make us laugh, their purpose is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "inform"
                    },
                    {
                              "id": "b",
                              "text": "entertain"
                    },
                    {
                              "id": "c",
                              "text": "persuade"
                    },
                    {
                              "id": "d",
                              "text": "teach math"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Make us laugh = entertain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make us laugh = entertain.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**entertain**",
          "commonErrors": [
                    "Picks wrong purpose."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Why do you think the author wrote it? To entertain, inform or persuade?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Purpose",
                              "statement": "Identify purpose."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names purpose + reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'To inform — it teaches about animals.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No reason."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'To persuade' means the author wants to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make us laugh"
                    },
                    {
                              "id": "b",
                              "text": "convince us of something"
                    },
                    {
                              "id": "c",
                              "text": "teach facts"
                    },
                    {
                              "id": "d",
                              "text": "tell a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Persuade = convince."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Persuade = convince.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**convince**",
          "commonErrors": [
                    "Confuses with entertain."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose a story. Identify its purpose (entertain/inform/persuade) and explain what message or lesson it has.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Purpose",
                              "statement": "Purpose + message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names purpose.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains message/lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Purpose: entertain; message: be kind to others.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No message."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Author\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why they wrote it."
                    },
                    {
                              "id": "b",
                              "text": "Who wrote it."
                    },
                    {
                              "id": "c",
                              "text": "Make us laugh/happy."
                    },
                    {
                              "id": "d",
                              "text": "Teach us facts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Author\" means Who wrote it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Author\" means Who wrote it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Author** = Who wrote it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Purpose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make us laugh/happy."
                    },
                    {
                              "id": "b",
                              "text": "Teach us facts."
                    },
                    {
                              "id": "c",
                              "text": "Convince us."
                    },
                    {
                              "id": "d",
                              "text": "Why they wrote it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Purpose\" means Why they wrote it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Purpose\" means Why they wrote it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Purpose** = Why they wrote it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u1-author-purpose-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"To entertain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teach us facts."
                    },
                    {
                              "id": "b",
                              "text": "Make us laugh/happy."
                    },
                    {
                              "id": "c",
                              "text": "Convince us."
                    },
                    {
                              "id": "d",
                              "text": "What author wants us to learn."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"To entertain\" means Make us laugh/happy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"To entertain\" means Make us laugh/happy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**To entertain** = Make us laugh/happy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
