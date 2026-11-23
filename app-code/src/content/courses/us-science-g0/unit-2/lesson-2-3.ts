import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "s0-u2-lesson-2-3",
  code: "2-3",
  title: "Changes in the Sky",
  goal: "I CAN describe how the sky changes from day to night.",
  standards: ["K-ESS1-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Sky", definition: "Space above us." },
    { term: "Change", definition: "Something different happens." },
    { term: "Rise", definition: "Come up." },
    { term: "Set", definition: "Go down." },
    { term: "Appear", definition: "Show up." },
    { term: "Disappear", definition: "Go away." },
    { term: "Pattern", definition: "Repeats over time." },
    { term: "Daily", definition: "Every day." },
  ],
  concepts: [
    {
      id: "s0-u2-sky-changes",
      title: "Changes in the sky",
      skill: "Describe how the sky changes from day to night and back.",
      lesson: {
        sections: [
          {
            heading: "Sky changes",
            body: "The sky **changes** every day — the sun **rises** (comes up), moves across, and **sets** (goes down). Stars and the moon **appear** at night and **disappear** in the day.",
          },
          {
            heading: "A daily pattern",
            body: "These changes follow a **daily pattern** — every day the sun rises and sets, and day becomes night and night becomes day.",
          },
        ],
        keyFormulas: [
          { name: "Sky changes", statement: "Sun rises -> sets; day -> night -> day; daily pattern." },
        ],
        workedExample: {
          problem: "Describe what happens to the sun during the day.",
          solution: "The sun **rises** in the morning, moves across the sky, and **sets** in the evening.",
        },
      },
      questions: [
        {
          id: "s0-u2-sky-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Rise' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "go down"
                    },
                    {
                              "id": "b",
                              "text": "come up"
                    },
                    {
                              "id": "c",
                              "text": "stay still"
                    },
                    {
                              "id": "d",
                              "text": "disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rise = come up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rise = come up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**come up**",
          "commonErrors": [
                    "Confuses with set."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The sun 'sets' when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it rises"
                    },
                    {
                              "id": "b",
                              "text": "it goes down below the horizon"
                    },
                    {
                              "id": "c",
                              "text": "it appears at night"
                    },
                    {
                              "id": "d",
                              "text": "it stays all day"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Set = goes down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Set = goes down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**goes down**",
          "commonErrors": [
                    "Confuses with rise."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the daily pattern: what happens to the sun and sky from morning to night.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sky changes",
                              "statement": "Sun rise -> set -> night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes daily pattern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun rises, crosses sky, sets; day becomes night.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong order."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stars 'appear' in the sky...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "during the day"
                    },
                    {
                              "id": "b",
                              "text": "at night"
                    },
                    {
                              "id": "c",
                              "text": "at noon"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stars appear at night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stars appear at night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**at night**",
          "commonErrors": [
                    "Picks day."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how the sky changes from morning to night. What do you see at each time?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sky changes",
                              "statement": "Morning -> day -> night changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes morning/day.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes night + changes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Morning: sun rises. Day: blue sky. Night: stars and moon.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No changes."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sky\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something different happens."
                    },
                    {
                              "id": "b",
                              "text": "Space above us."
                    },
                    {
                              "id": "c",
                              "text": "Come up."
                    },
                    {
                              "id": "d",
                              "text": "Go down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sky\" means Space above us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sky\" means Space above us.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sky** = Space above us.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Come up."
                    },
                    {
                              "id": "b",
                              "text": "Go down."
                    },
                    {
                              "id": "c",
                              "text": "Show up."
                    },
                    {
                              "id": "d",
                              "text": "Something different happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Change\" means Something different happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Something different happens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Change** = Something different happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sky-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rise\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Go down."
                    },
                    {
                              "id": "b",
                              "text": "Come up."
                    },
                    {
                              "id": "c",
                              "text": "Show up."
                    },
                    {
                              "id": "d",
                              "text": "Go away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rise\" means Come up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rise\" means Come up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rise** = Come up.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
