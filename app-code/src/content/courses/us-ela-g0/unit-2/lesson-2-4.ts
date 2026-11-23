import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "ela0-u2-lesson-2-4",
  code: "2-4",
  title: "Story Parts",
  goal: "I CAN name the parts of a story: characters, setting and events.",
  standards: ["RL.K.3"],
  vocabulary: [
    { term: "Character", definition: "Who is in the story." },
    { term: "Setting", definition: "Where and when it happens." },
    { term: "Event", definition: "Something that happens." },
    { term: "Plot", definition: "What happens in the story." },
    { term: "Main character", definition: "The most important character." },
    { term: "Problem", definition: "A challenge in the story." },
    { term: "Solution", definition: "How the problem is fixed." },
  ],
  concepts: [
    {
      id: "ela0-u2-story-parts",
      title: "Parts of a story",
      skill: "Identify characters, setting, events and problems in stories.",
      lesson: {
        sections: [
          {
            heading: "Story parts",
            body: "A story has **characters** (who), a **setting** (where/when), and **events** (what happens — the **plot**). Many stories have a **problem** and a **solution**.",
          },
          {
            heading: "Find the parts",
            body: "Ask: Who is in the story? Where does it happen? What happens? Is there a problem? How is it solved?",
          },
        ],
        keyFormulas: [
          { name: "Story parts", statement: "Characters + setting + events (plot) + problem/solution." },
        ],
        workedExample: {
          problem: "Story: 'The bear lost his honey in the forest and found it by following the bees.' Name the parts.",
          solution: "Character: bear; Setting: forest; Event: lost and found honey; Problem: lost honey; Solution: followed bees.",
        },
      },
      questions: [
        {
          id: "ela0-u2-story-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'setting' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "who is in it"
                    },
                    {
                              "id": "b",
                              "text": "where and when it happens"
                    },
                    {
                              "id": "c",
                              "text": "what happens"
                    },
                    {
                              "id": "d",
                              "text": "the ending only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Setting = where/when."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Setting = where/when.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**where and when**",
          "commonErrors": [
                    "Confuses with character."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'plot' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the characters"
                    },
                    {
                              "id": "b",
                              "text": "what happens in the story"
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
                              "statement": "Plot = what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plot = what happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what happens**",
          "commonErrors": [
                    "Confuses with setting."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the parts of a story you know: characters, setting, events, problem and solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story parts",
                              "statement": "Name all story parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names characters, setting, events.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names problem and solution.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Characters: pig; Setting: house; Events: built house; Problem: wolf; Solution: brick house.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'problem' in a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "a challenge the character faces"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "a character"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Problem = a challenge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem = a challenge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a challenge**",
          "commonErrors": [
                    "Confuses with solution."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell a story and name its characters, setting, and the problem it solves.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story parts",
                              "statement": "Story + parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells story.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names characters, setting, problem.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Lost puppy found its way home; characters: puppy, owner; setting: neighborhood; problem: lost; solution: found.'**",
          "commonErrors": [
                    "No story.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where and when it happens."
                    },
                    {
                              "id": "b",
                              "text": "Who is in the story."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "What happens in the story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something that happens."
                    },
                    {
                              "id": "b",
                              "text": "What happens in the story."
                    },
                    {
                              "id": "c",
                              "text": "The most important character."
                    },
                    {
                              "id": "d",
                              "text": "Where and when it happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where and when it happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where and when it happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where and when it happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-story-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Event\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens in the story."
                    },
                    {
                              "id": "b",
                              "text": "Something that happens."
                    },
                    {
                              "id": "c",
                              "text": "The most important character."
                    },
                    {
                              "id": "d",
                              "text": "A challenge in the story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Event\" means Something that happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Event\" means Something that happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Event** = Something that happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
