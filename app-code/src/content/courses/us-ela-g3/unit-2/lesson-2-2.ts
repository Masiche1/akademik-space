import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ela3-u2-lesson-2-2",
  code: "2-2",
  title: "Story Elements",
  goal: "I CAN identify characters, setting and events in a story.",
  standards: ["RL.3.3"],
  vocabulary: [
    { term: "Character", definition: "Who is in story." },
    { term: "Setting", definition: "Where and when." },
    { term: "Event", definition: "Something that happens." },
    { term: "Plot", definition: "What happens." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Beginning", definition: "How it starts." },
    { term: "Middle", definition: "What happens." },
    { term: "End", definition: "How it finishes." },
  ],
  concepts: [
    {
      id: "ela3-u2-story-elements",
      title: "Story elements",
      skill: "Identify characters, setting, events and sequence in stories.",
      lesson: {
        sections: [
          {
            heading: "Story elements",
            body: "A story has **characters** (who), **setting** (where/when), and **events** (what happens). Events happen in a **sequence** — beginning, middle, end.",
          },
          {
            heading: "Putting it together",
            body: "To understand a story, identify all elements: who is in it, where it happens, and what happens in order.",
          },
        ],
        keyFormulas: [
          { name: "Story elements", statement: "Characters + setting + events + sequence = complete story." },
        ],
        workedExample: {
          problem: "Story: 'At the park, Sam and Mia played on the swings.' Identify elements.",
          solution: "Characters: Sam, Mia. Setting: park. Events: played on swings.",
        },
      },
      questions: [
        {
          id: "ela3-u2-story-elements-q1",
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
                              "text": "the ending"
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
          id: "ela3-u2-story-elements-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'event' in a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a character"
                    },
                    {
                              "id": "b",
                              "text": "something that happens"
                    },
                    {
                              "id": "c",
                              "text": "a setting"
                    },
                    {
                              "id": "d",
                              "text": "a detail only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Event = something that happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Event = something that happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**something that happens**",
          "commonErrors": [
                    "Confuses with character."
          ]
},
        },
        {
          id: "ela3-u2-story-elements-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Identify the characters, setting and two events.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story elements",
                              "statement": "Characters + setting + events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all elements.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Characters: dog; Setting: backyard; Events: ran, fetched.'**",
          "commonErrors": [
                    "Missing elements.",
                    "Cannot identify."
          ]
},
        },
        {
          id: "ela3-u2-story-elements-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Sequence' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the characters"
                    },
                    {
                              "id": "b",
                              "text": "the order of events"
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
                              "statement": "Sequence = order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sequence = order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**order of events**",
          "commonErrors": [
                    "Confuses with setting."
          ]
},
        },
        {
          id: "ela3-u2-story-elements-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell a story and identify its characters, setting, and sequence of events.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story elements",
                              "statement": "All elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells story.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identifies all elements.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Characters: cat; Setting: house; Events: slept, ate, played.'**",
          "commonErrors": [
                    "No story.",
                    "Missing elements."
          ]
},
        },
        {
          id: "ela3-u2-story-elements-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where and when."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u2-story-elements-q7",
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
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Where and when."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where and when."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where and when.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where and when.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u2-story-elements-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Event\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Something that happens."
                    },
                    {
                              "id": "c",
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "How it starts."
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
