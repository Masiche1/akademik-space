import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ela5-u6-lesson-6-1",
  code: "6-1",
  title: "Narrative Writing",
  goal: "I CAN write a narrative with a clear sequence of events.",
  standards: ["W.5.3"],
  vocabulary: [
    { term: "Narrative", definition: "Story." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Character", definition: "Person in story." },
    { term: "Setting", definition: "Where/when." },
    { term: "Conflict", definition: "Problem." },
    { term: "Resolution", definition: "Ending." },
    { term: "Dialogue", definition: "Character speech." },
    { term: "Pacing", definition: "Speed of story." },
  ],
  concepts: [
    {
      id: "ela5-u6-narrative-writing",
      title: "Narrative writing",
      skill: "Write a narrative story with clear sequence, characters and resolution.",
      lesson: {
        sections: [
          {
            heading: "Story structure",
            body: "A **narrative** tells a **story**: introduce **characters** and **setting**, build **events** in **sequence**, include **conflict**, and give **resolution**.",
          },
          {
            heading: "Key elements",
            body: "Use **dialogue** (character speech), **pacing** (how fast events unfold), and **descriptive details** to make the story vivid.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Characters + setting + events + conflict + resolution = story." },
        ],
        workedExample: {
          problem: "Write a narrative: A lost puppy finds its way home.",
          solution: "**Introduce puppy + setting; events: gets lost, meets animals, finds home; conflict: being lost; resolution: reunited with owner.**",
        },
      },
      questions: [
        {
          id: "ela5-u6-narrative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'narrative' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fact list"
                    },
                    {
                              "id": "b",
                              "text": "a story with characters and events"
                    },
                    {
                              "id": "c",
                              "text": "an argument"
                    },
                    {
                              "id": "d",
                              "text": "a description"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Story with characters/events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Story with characters/events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a story with characters and events",
          "commonErrors": [
                    "Confuses with other types."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Narrative writing should include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "characters, setting, events, conflict and resolution"
                    },
                    {
                              "id": "c",
                              "text": "only dialogue"
                    },
                    {
                              "id": "d",
                              "text": "only description"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All story elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All story elements.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "characters, setting, events, conflict and resolution",
          "commonErrors": [
                    "Missing elements."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a short narrative (5-7 sentences) with a clear beginning, middle and end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "Complete story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Has beginning/middle/end.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes characters + conflict.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Once [setting], [character] [begins]. Then [events]. Finally [resolution].'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not a story."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dialogue' in a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the narrator's voice"
                    },
                    {
                              "id": "b",
                              "text": "what characters say to each other"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "the conflict"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Character speech."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Character speech.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "what characters say to each other",
          "commonErrors": [
                    "Confuses with narration."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a narrative and explain how your pacing and dialogue make the story engaging.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Narrative",
                              "statement": "Story + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes story.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains techniques.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Story with pacing/dialogue; Explanation: pacing builds tension; dialogue reveals character.**",
          "commonErrors": [
                    "Cannot write.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Order of events."
                    },
                    {
                              "id": "b",
                              "text": "Story."
                    },
                    {
                              "id": "c",
                              "text": "Person in story."
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
                              "statement": "\"Narrative\" means Story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means Story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = Story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sequence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "Where/when."
                    },
                    {
                              "id": "c",
                              "text": "Problem."
                    },
                    {
                              "id": "d",
                              "text": "Order of events."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sequence\" means Order of events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sequence\" means Order of events.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sequence** = Order of events.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u6-narrative-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "Problem."
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
                              "statement": "\"Character\" means Person in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
