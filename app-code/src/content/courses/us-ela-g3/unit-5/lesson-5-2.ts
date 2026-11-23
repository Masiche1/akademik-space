import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ela3-u5-lesson-5-2",
  code: "5-2",
  title: "Parts of a Narrative",
  goal: "I CAN include characters, setting and events.",
  standards: ["W.3.3", "W.3.4"],
  vocabulary: [
    { term: "Character", definition: "Who is in story." },
    { term: "Setting", definition: "Where and when." },
    { term: "Event", definition: "Something that happens." },
    { term: "Detail", definition: "Extra information." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Describe", definition: "Tell what like." },
    { term: "Sensory", definition: "Using senses." },
    { term: "Add", definition: "Put in." },
  ],
  concepts: [
    {
      id: "ela3-u5-narrative-parts",
      title: "Parts of a narrative",
      skill: "Include characters, setting, events and details in narratives.",
      lesson: {
        sections: [
          {
            heading: "Who, where, what",
            body: "A good narrative includes **characters** (who), **setting** (where/when), and **events** (what happens). Add **details** to make it interesting.",
          },
          {
            heading: "Describe with senses",
            body: "Use **sensory details** — what you see, hear, feel — to make your narrative vivid. 'The warm sun felt nice.'",
          },
        ],
        keyFormulas: [
          { name: "Narrative parts", statement: "Characters + setting + events + details = complete story." },
        ],
        workedExample: {
          problem: "Add setting and details to 'I played.'",
          solution: "'I played **in the park on a sunny day**. The swings creaked.'",
        },
      },
      questions: [
        {
          id: "ela3-u5-narrative-parts-q1",
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
          id: "ela3-u5-narrative-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Sensory details' help by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making it boring"
                    },
                    {
                              "id": "b",
                              "text": "describing what we see, hear, feel"
                    },
                    {
                              "id": "c",
                              "text": "adding numbers"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Sensory details describe senses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensory details describe senses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**describe senses**",
          "commonErrors": [
                    "Thinks details are pointless."
          ]
},
        },
        {
          id: "ela3-u5-narrative-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a narrative with a character, setting and two events. Add one sensory detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative parts",
                              "statement": "Character + setting + 2 events + detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes all parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'My dog Rex played in the yard. He ran fast. His tail wagged.'**",
          "commonErrors": [
                    "Missing parts.",
                    "No sensory detail."
          ]
},
        },
        {
          id: "ela3-u5-narrative-parts-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'event' in a narrative is...",
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
          id: "ela3-u5-narrative-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a narrative about a pretend adventure with character, setting, beginning-middle-end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "Pretend story + all parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes character + setting.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Has beginning-middle-end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'A dragon flew over mountains, found treasure, brought it home.'**",
          "commonErrors": [
                    "Missing parts.",
                    "No sequence."
          ]
},
        },
        {
          id: "ela3-u5-narrative-parts-q6",
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
                              "text": "Extra information."
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
          id: "ela3-u5-narrative-parts-q7",
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
                              "text": "Extra information."
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
          id: "ela3-u5-narrative-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Event\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Extra information."
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
                              "text": "Tell what like."
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
