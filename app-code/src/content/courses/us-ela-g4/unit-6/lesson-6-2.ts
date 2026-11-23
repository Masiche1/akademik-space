import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ela4-u6-lesson-6-2",
  code: "6-2",
  title: "Narrative Structure",
  goal: "I CAN structure stories with beginning, middle, end and events in order.",
  standards: ["W.4.3b"],
  vocabulary: [
    { term: "Narrative", definition: "Story." },
    { term: "Beginning", definition: "How it starts." },
    { term: "Middle", definition: "What happens." },
    { term: "End", definition: "How it finishes." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Event", definition: "Something that happens." },
    { term: "Conflict", definition: "Problem in story." },
    { term: "Resolution", definition: "How it's solved." },
  ],
  concepts: [
    {
      id: "ela4-u6-narrative-structure",
      title: "Narrative structure",
      skill: "Structure stories with beginning, middle, end and events in order.",
      lesson: {
        sections: [
          {
            heading: "Story shape",
            body: "Every **narrative** has **beginning** (introduce characters/setting), **middle** (events happen, conflict arises), **end** (conflict resolved). Keep **events in order**.",
          },
          {
            heading: "Conflict",
            body: "The **conflict** is the problem the character faces; the **resolution** is how it's solved.",
          },
        ],
        keyFormulas: [
          { name: "Narrative", statement: "Beginning + middle + end, events in order, with conflict + resolution." },
        ],
        workedExample: {
          problem: "Outline a story about finding a lost pet.",
          solution: "B: Max loses dog. M: Searches everywhere, asks neighbors. E: Finds dog hiding in shed.",
        },
      },
      questions: [
        {
          id: "ela4-u6-narrative-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Narrative structure is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random order"
                    },
                    {
                              "id": "b",
                              "text": "beginning, middle, end in order"
                    },
                    {
                              "id": "c",
                              "text": "only ending"
                    },
                    {
                              "id": "d",
                              "text": "no order"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "B-M-E in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B-M-E in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**beginning, middle, end in order**",
          "commonErrors": [
                    "Thinks it's random."
          ]
},
        },
        {
          id: "ela4-u6-narrative-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'conflict' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the setting"
                    },
                    {
                              "id": "b",
                              "text": "the problem the character faces"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
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
                              "statement": "Conflict = problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conflict = problem.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the problem the character faces**",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela4-u6-narrative-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Outline a 3-part story: beginning (setup), middle (conflict), end (resolution).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "B + M + E with conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Outlines all three.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'B: Mia wants to perform; M: stage fright; E: she succeeds with practice.'**",
          "commonErrors": [
                    "Missing parts.",
                    "No conflict."
          ]
},
        },
        {
          id: "ela4-u6-narrative-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Resolution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the problem"
                    },
                    {
                              "id": "b",
                              "text": "how the conflict is solved"
                    },
                    {
                              "id": "c",
                              "text": "the beginning"
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
                              "statement": "Resolution = solves conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolution = solves conflict.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**how the conflict is solved**",
          "commonErrors": [
                    "Confuses with conflict."
          ]
},
        },
        {
          id: "ela4-u6-narrative-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a story outline with beginning, middle, end. Make sure events happen in logical order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Outline + logical order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Outlines all three.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Logical order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'B: discovers map; M: follows clues; E: finds treasure.'**",
          "commonErrors": [
                    "Out of order.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela4-u6-narrative-structure-q6",
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
                              "text": "Story."
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
          id: "ela4-u6-narrative-structure-q7",
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
                              "text": "Order of events."
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
          id: "ela4-u6-narrative-structure-q8",
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
                              "text": "Order of events."
                    },
                    {
                              "id": "d",
                              "text": "Something that happens."
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
