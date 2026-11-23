import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ela1-u1-lesson-1-2",
  code: "1-2",
  title: "Retell Stories",
  goal: "I CAN retell stories with beginning, middle and end.",
  standards: ["RL.1.2"],
  vocabulary: [
    { term: "Retell", definition: "Tell story again." },
    { term: "Beginning", definition: "How it starts." },
    { term: "Middle", definition: "What happens." },
    { term: "End", definition: "How it finishes." },
    { term: "Sequence", definition: "Order of events." },
    { term: "Key events", definition: "Important things." },
    { term: "Detail", definition: "Small fact." },
    { term: "Story", definition: "A tale." },
  ],
  concepts: [
    {
      id: "ela1-u1-retell-stories",
      title: "Retelling stories",
      skill: "Retell a story with beginning, middle and end in order.",
      lesson: {
        sections: [
          {
            heading: "Tell it again",
            body: "To **retell**, say the story again in your own words. Keep the **sequence** — beginning, middle, end.",
          },
          {
            heading: "Three parts",
            body: "Every story has a **beginning** (how it starts), **middle** (what happens), and **end** (how it finishes). Retell in order.",
          },
        ],
        keyFormulas: [
          { name: "Retell", statement: "Beginning + middle + end, in order, in your own words." },
        ],
        workedExample: {
          problem: "Story: 'A bunny hops to the garden, finds a carrot, eats it.' Retell it.",
          solution: "**Beginning:** bunny hops to garden. **Middle:** finds carrot. **End:** eats it.",
        },
      },
      questions: [
        {
          id: "ela1-u1-retell-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a story?",
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
                              "text": "left, right, center"
                    },
                    {
                              "id": "d",
                              "text": "up, down, sideways"
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
          id: "ela1-u1-retell-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Retell' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read again"
                    },
                    {
                              "id": "b",
                              "text": "tell the story again in your own words"
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
                              "statement": "Retell = tell again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Retell = tell again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**tell again**",
          "commonErrors": [
                    "Confuses with reread."
          ]
},
        },
        {
          id: "ela1-u1-retell-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Listen to a story. Retell the beginning, middle and end in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Retell",
                              "statement": "Beginning + middle + end."
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
          id: "ela1-u1-retell-stories-q4",
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
          id: "ela1-u1-retell-stories-q5",
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
                              "reasoning": "Retells beginning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Retells middle + end.",
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
          id: "ela1-u1-retell-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Retell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How it starts."
                    },
                    {
                              "id": "b",
                              "text": "Tell story again."
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
                              "statement": "\"Retell\" means Tell story again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Retell\" means Tell story again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Retell** = Tell story again.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u1-retell-stories-q7",
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
          id: "ela1-u1-retell-stories-q8",
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
                              "text": "Important things."
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
