import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "spk-u1-lesson-1-2",
  code: "1-2",
  title: "Notice Details",
  goal: "I CAN look closely and describe what I notice.",
  standards: ["ELOF-PK.SCI.OBSERVE.1"],
  vocabulary: [
    { term: "Observe", definition: "Notice and look closely." },
    { term: "Detail", definition: "A small thing you notice." },
    { term: "Describe", definition: "Say what something is like." },
    { term: "Look closely", definition: "Watch carefully for details." },
    { term: "Notice", definition: "See or pay attention to." },
  ],
  concepts: [
    {
      id: "spk-u1-notice-details",
      title: "Noticing details",
      skill: "Observe carefully and describe details.",
      lesson: {
        sections: [
          {
            heading: "Look closely",
            body: "**Observing** means looking closely and noticing details. A leaf is not just green — it has veins, edges and a stem.",
          },
          {
            heading: "Describe what you see",
            body: "Use describing words: 'The rock is **smooth** and **gray**. The leaf is **pointy** and **green**.' Details help scientists describe the world.",
          },
        ],
        keyFormulas: [
          { name: "Observe", statement: "Look closely, notice details, describe with adjectives." },
        ],
        workedExample: {
          problem: "Look at a leaf. Describe two details you notice.",
          solution: "The leaf is **green** and has **pointy edges** / **veins**.",
        },
      },
      questions: [
        {
          id: "spk-u1-notice-details-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Observe' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "look quickly"
                    },
                    {
                              "id": "b",
                              "text": "look closely and notice details"
                    },
                    {
                              "id": "c",
                              "text": "close your eyes"
                    },
                    {
                              "id": "d",
                              "text": "ignore things"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Observe = look closely and notice details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observe = look closely and notice details.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Look closely**",
          "commonErrors": [
                    "Thinks observe means glance."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a 'detail' you might notice on a leaf?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It is a plant"
                    },
                    {
                              "id": "b",
                              "text": "It has veins and pointed edges"
                    },
                    {
                              "id": "c",
                              "text": "It grows"
                    },
                    {
                              "id": "d",
                              "text": "It is green only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Veins and pointed edges are details you observe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Veins and pointed edges are details you observe.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Veins, pointed edges**",
          "commonErrors": [
                    "Picks a general fact not detail."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look closely at an object near you. Describe two details you notice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe",
                              "statement": "Notice and describe details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 2 real details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The cup is blue and has a handle.'**",
          "commonErrors": [
                    "Vague description.",
                    "Cannot observe."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describing words like 'smooth', 'rough', 'pointy' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "numbers"
                    },
                    {
                              "id": "b",
                              "text": "adjectives that describe details"
                    },
                    {
                              "id": "c",
                              "text": "names"
                    },
                    {
                              "id": "d",
                              "text": "actions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adjectives describe details — smooth, rough, pointy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adjectives describe details — smooth, rough, pointy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adjectives**",
          "commonErrors": [
                    "Confuses with nouns."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Observe a natural object (leaf, rock, flower) for one minute. List three details, then sort them by sense (sight/touch/etc.).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Observe",
                              "statement": "List details, sort by sense."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists 3 details.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sorts by sense correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'green (sight), rough (touch), smells earthy (smell)'**",
          "commonErrors": [
                    "Fewer than 3 details.",
                    "Cannot sort."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Observe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A small thing you notice."
                    },
                    {
                              "id": "b",
                              "text": "Notice and look closely."
                    },
                    {
                              "id": "c",
                              "text": "Say what something is like."
                    },
                    {
                              "id": "d",
                              "text": "Watch carefully for details."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Observe\" means Notice and look closely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Observe\" means Notice and look closely.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Observe** = Notice and look closely.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say what something is like."
                    },
                    {
                              "id": "b",
                              "text": "Watch carefully for details."
                    },
                    {
                              "id": "c",
                              "text": "See or pay attention to."
                    },
                    {
                              "id": "d",
                              "text": "A small thing you notice."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Detail\" means A small thing you notice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means A small thing you notice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Detail** = A small thing you notice.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u1-notice-details-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Describe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Watch carefully for details."
                    },
                    {
                              "id": "b",
                              "text": "Say what something is like."
                    },
                    {
                              "id": "c",
                              "text": "See or pay attention to."
                    },
                    {
                              "id": "d",
                              "text": "Notice and look closely."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Describe\" means Say what something is like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Describe\" means Say what something is like.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Describe** = Say what something is like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
