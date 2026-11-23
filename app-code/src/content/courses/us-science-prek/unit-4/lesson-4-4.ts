import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "spk-u4-lesson-4-4",
  code: "4-4",
  title: "Moon Phases",
  goal: "I CAN describe how the moon changes shape.",
  standards: ["ELOF-PK.SCI.EARTH.4"],
  vocabulary: [
    { term: "Phase", definition: "A stage or shape the moon appears to have." },
    { term: "Full moon", definition: "When the whole face of the moon is lit." },
    { term: "New moon", definition: "When the moon is dark and hard to see." },
    { term: "Crescent", definition: "A thin curved sliver of moon." },
    { term: "Half moon", definition: "When half the moon is lit." },
    { term: "Change", definition: "The moon's shape appears to change over ~29 days." },
  ],
  concepts: [
    {
      id: "spk-u4-moon-phases",
      title: "Moon phases",
      skill: "Describe how the moon's appearance changes over time.",
      lesson: {
        sections: [
          {
            heading: "Moon phases",
            body: "The moon does not change shape — its **appearance** changes because we see different amounts of its sunlit side. This cycle is called **phases**.",
          },
          {
            heading: "The cycle",
            body: "Over about **29 days**, the moon goes from **new moon** (dark) to **full moon** (fully lit) and back. In between are **crescent**, **half** and **gibbous** phases.",
          },
        ],
        keyFormulas: [
          { name: "Moon phases", statement: "New -> crescent -> half -> gibbous -> full -> back to new, over ~29 days." },
        ],
        workedExample: {
          problem: "When is the whole face of the moon lit?",
          solution: "At **full moon** — the entire sunlit face is visible.",
        },
      },
      questions: [
        {
          id: "spk-u4-moon-phases-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'full moon' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the moon is invisible"
                    },
                    {
                              "id": "b",
                              "text": "the whole face of the moon is lit"
                    },
                    {
                              "id": "c",
                              "text": "half the moon is lit"
                    },
                    {
                              "id": "d",
                              "text": "the moon is a thin sliver"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Full moon = entire sunlit face visible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Full moon = entire sunlit face visible.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Whole face lit**",
          "commonErrors": [
                    "Confuses with new moon."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'crescent' moon looks like...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a full circle"
                    },
                    {
                              "id": "b",
                              "text": "a thin curved sliver"
                    },
                    {
                              "id": "c",
                              "text": "half a circle"
                    },
                    {
                              "id": "d",
                              "text": "a square"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Crescent = thin curved sliver."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crescent = thin curved sliver.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Thin sliver**",
          "commonErrors": [
                    "Picks wrong shape."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or describe what the moon looks like during a full moon vs a crescent moon.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Moon phases",
                              "statement": "Full=whole lit, crescent=thin sliver."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both phases correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Full: whole circle lit; Crescent: thin curve like a banana.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong shapes."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The moon's phases repeat about every...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7 days"
                    },
                    {
                              "id": "b",
                              "text": "29 days"
                    },
                    {
                              "id": "c",
                              "text": "365 days"
                    },
                    {
                              "id": "d",
                              "text": "1 day"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Moon phases cycle about every 29 days."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moon phases cycle about every 29 days.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**29 days**",
          "commonErrors": [
                    "Wrong cycle length."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a moon journal for 2 weeks. Draw the moon's shape each night. Did you see different phases? Which was easiest to see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Moon phases",
                              "statement": "Observe + record phases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records moon over 2 weeks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Notes phase changes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Saw crescent -> half -> full; full was easiest.'**",
          "commonErrors": [
                    "Cannot observe.",
                    "No phase notes."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Phase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When the whole face of the moon is lit."
                    },
                    {
                              "id": "b",
                              "text": "A stage or shape the moon appears to have."
                    },
                    {
                              "id": "c",
                              "text": "When the moon is dark and hard to see."
                    },
                    {
                              "id": "d",
                              "text": "A thin curved sliver of moon."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Phase\" means A stage or shape the moon appears to have."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Phase\" means A stage or shape the moon appears to have.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Phase** = A stage or shape the moon appears to have.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Full moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When the moon is dark and hard to see."
                    },
                    {
                              "id": "b",
                              "text": "A thin curved sliver of moon."
                    },
                    {
                              "id": "c",
                              "text": "When half the moon is lit."
                    },
                    {
                              "id": "d",
                              "text": "When the whole face of the moon is lit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Full moon\" means When the whole face of the moon is lit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Full moon\" means When the whole face of the moon is lit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Full moon** = When the whole face of the moon is lit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u4-moon-phases-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"New moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A thin curved sliver of moon."
                    },
                    {
                              "id": "b",
                              "text": "When the moon is dark and hard to see."
                    },
                    {
                              "id": "c",
                              "text": "When half the moon is lit."
                    },
                    {
                              "id": "d",
                              "text": "The moon's shape appears to change over ~29 days."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"New moon\" means When the moon is dark and hard to see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"New moon\" means When the moon is dark and hard to see.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**New moon** = When the moon is dark and hard to see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
