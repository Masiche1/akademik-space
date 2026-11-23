import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ela0-u5-lesson-5-1",
  code: "5-1",
  title: "What Is a Narrative?",
  goal: "I CAN tell the difference between a story and a narrative I write.",
  standards: ["W.K.3"],
  vocabulary: [
    { term: "Narrative", definition: "A story we write or tell." },
    { term: "Beginning", definition: "How it starts." },
    { term: "Middle", definition: "What happens." },
    { term: "End", definition: "How it finishes." },
    { term: "Event", definition: "Something that happens." },
    { term: "Character", definition: "Who is in the story." },
    { term: "Setting", definition: "Where it happens." },
  ],
  concepts: [
    {
      id: "ela0-u5-narrative-intro",
      title: "What is a narrative?",
      skill: "Understand that a narrative is a story with beginning, middle and end.",
      lesson: {
        sections: [
          {
            heading: "Tell a story",
            body: "A **narrative** is a story — it can be about something **real** (what you did) or **imagined** (make-believe). It has a **beginning**, **middle** and **end**.",
          },
          {
            heading: "Parts of a story",
            body: "Every narrative has **characters** (who), a **setting** (where), and **events** (what happens). These parts make a complete story.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Story with beginning, middle, end; characters, setting, events." },
        ],
        workedExample: {
          problem: "Is 'I went to the park' a narrative? What parts does it need?",
          solution: "It could be — add a **beginning** (woke up), **middle** (played), **end** (went home) to make it a full narrative.",
        },
      },
      questions: [
        {
          id: "ela0-u5-narrative-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'narrative' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a list of facts"
                    },
                    {
                              "id": "b",
                              "text": "a story with beginning, middle and end"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a poem only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Narrative = a story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Narrative = a story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a story**",
          "commonErrors": [
                    "Thinks narrative is facts."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The three parts of a narrative are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start, stop, finish"
                    },
                    {
                              "id": "b",
                              "text": "beginning, middle, end"
                    },
                    {
                              "id": "c",
                              "text": "who, what, where only"
                    },
                    {
                              "id": "d",
                              "text": "title, picture, name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Beginning, middle, end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beginning, middle, end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**beginning, middle, end**",
          "commonErrors": [
                    "Picks wrong parts."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell a short story about something you did. Include a beginning, middle and end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "Beginning + middle + end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells story with 3 parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I woke up (beginning), played outside (middle), ate dinner (end).'**",
          "commonErrors": [
                    "No clear parts.",
                    "Cannot tell story."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'character' in a narrative is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the setting"
                    },
                    {
                              "id": "b",
                              "text": "who is in the story"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "a fact"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Character = who is in the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Character = who is in the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**who is in it**",
          "commonErrors": [
                    "Confuses with setting."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a narrative about a real event (like your morning) with a beginning, middle and end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "Real event + 3 parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes beginning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Writes middle and end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Woke up -> ate breakfast -> went to school.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not a real event."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How it starts."
                    },
                    {
                              "id": "b",
                              "text": "A story we write or tell."
                    },
                    {
                              "id": "c",
                              "text": "What happens."
                    },
                    {
                              "id": "d",
                              "text": "How it finishes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Narrative\" means A story we write or tell."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means A story we write or tell.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = A story we write or tell.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Beginning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "How it finishes."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "How it starts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Beginning\" means How it starts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Beginning\" means How it starts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginning** = How it starts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u5-narrative-intro-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Middle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How it finishes."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "Who is in the story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Middle\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Middle\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Middle** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
