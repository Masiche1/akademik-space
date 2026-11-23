import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ela0-u1-lesson-1-3",
  code: "1-3",
  title: "Retell Stories",
  goal: "I CAN retell a story with its beginning, middle and end.",
  standards: ["RL.K.2", "RL.K.3"],
  vocabulary: [
    { term: "Retell", definition: "Tell the story again in your own words." },
    { term: "Beginning", definition: "How the story starts." },
    { term: "Middle", definition: "What happens in the story." },
    { term: "End", definition: "How the story finishes." },
    { term: "Sequence", definition: "The order events happen." },
    { term: "Key events", definition: "The important things that happen." },
  ],
  concepts: [
    {
      id: "ela0-u1-retell",
      title: "Retelling stories",
      skill: "Retell a story with beginning, middle and end in order.",
      lesson: {
        sections: [
          {
            heading: "Tell it again",
            body: "To **retell**, say the story again in your own words. Keep the **sequence** — beginning first, then middle, then end.",
          },
          {
            heading: "The three parts",
            body: "Every story has a **beginning** (how it starts), **middle** (what happens), and **end** (how it finishes). Retelling in order helps you understand.",
          },
        ],
        keyFormulas: [
          { name: "Retell", statement: "Beginning + middle + end, in order, in your own words." },
        ],
        workedExample: {
          problem: "Story: 'A bunny hops to the garden, finds a carrot, and eats it happily.' Retell it.",
          solution: "**Beginning:** bunny hops to garden. **Middle:** finds a carrot. **End:** eats it happily.",
        },
      },
      questions: [
        {
          id: "ela0-u1-retell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a story?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start, stop, finish"
                    },
                    {
                              "id": "b",
                              "text": "Beginning, middle, end"
                    },
                    {
                              "id": "c",
                              "text": "Left, right, center"
                    },
                    {
                              "id": "d",
                              "text": "Up, down, sideways"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stories have beginning, middle and end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stories have beginning, middle and end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**beginning, middle, end**",
          "commonErrors": [
                    "Cannot name parts."
          ]
},
        },
        {
          id: "ela0-u1-retell-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Retell' a story means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read it again"
                    },
                    {
                              "id": "b",
                              "text": "tell it again in your own words"
                    },
                    {
                              "id": "c",
                              "text": "write it down"
                    },
                    {
                              "id": "d",
                              "text": "act it out only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Retell = tell again in your own words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retell = tell again in your own words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**tell it again**",
          "commonErrors": [
                    "Confuses retell with reread."
          ]
},
        },
        {
          id: "ela0-u1-retell-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Listen to a short story. Retell the beginning, middle and end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Retell",
                              "statement": "Beginning, middle, end in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retells all three parts in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Beginning: X; Middle: Y; End: Z.'**",
          "commonErrors": [
                    "Out of order.",
                    "Cannot retell."
          ]
},
        },
        {
          id: "ela0-u1-retell-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'middle' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how it starts"
                    },
                    {
                              "id": "b",
                              "text": "what happens in the story"
                    },
                    {
                              "id": "c",
                              "text": "how it ends"
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
                              "statement": "Middle = what happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle = what happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what happens**",
          "commonErrors": [
                    "Confuses with beginning/end."
          ]
},
        },
        {
          id: "ela0-u1-retell-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Retell a familiar story (like a fairy tale) from beginning to end.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Retell",
                              "statement": "Tell story in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retells beginning correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Retells middle and end in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'First X, then Y, finally Z.'**",
          "commonErrors": [
                    "Out of order.",
                    "Cannot retell."
          ]
},
        },
        {
          id: "ela0-u1-retell-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Retell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How the story starts."
                    },
                    {
                              "id": "b",
                              "text": "Tell the story again in your own words."
                    },
                    {
                              "id": "c",
                              "text": "What happens in the story."
                    },
                    {
                              "id": "d",
                              "text": "How the story finishes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Retell\" means Tell the story again in your own words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Retell\" means Tell the story again in your own words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Retell** = Tell the story again in your own words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-retell-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Beginning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens in the story."
                    },
                    {
                              "id": "b",
                              "text": "How the story finishes."
                    },
                    {
                              "id": "c",
                              "text": "The order events happen."
                    },
                    {
                              "id": "d",
                              "text": "How the story starts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Beginning\" means How the story starts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Beginning\" means How the story starts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Beginning** = How the story starts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-retell-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Middle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How the story finishes."
                    },
                    {
                              "id": "b",
                              "text": "What happens in the story."
                    },
                    {
                              "id": "c",
                              "text": "The order events happen."
                    },
                    {
                              "id": "d",
                              "text": "The important things that happen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Middle\" means What happens in the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Middle\" means What happens in the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Middle** = What happens in the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
