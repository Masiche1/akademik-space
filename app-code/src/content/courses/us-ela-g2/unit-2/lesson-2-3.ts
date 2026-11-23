import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ela2-u2-lesson-2-3",
  code: "2-3",
  title: "Character Changes",
  goal: "I CAN describe how characters change in a story.",
  standards: ["RL.2.3"],
  vocabulary: [
    { term: "Change", definition: "Becomes different." },
    { term: "Grow", definition: "Get bigger/better." },
    { term: "Learn", definition: "Gain knowledge." },
    { term: "Before", definition: "How they were." },
    { term: "After", definition: "How they are now." },
    { term: "Lesson", definition: "What they learn." },
    { term: "Mature", definition: "Grow up." },
    { term: "Develop", definition: "Change over time." },
  ],
  concepts: [
    {
      id: "ela2-u2-character-change",
      title: "Character changes",
      skill: "Describe how characters change (grow, learn) from beginning to end.",
      lesson: {
        sections: [
          {
            heading: "Characters change",
            body: "Characters often **change** during a story — they **learn** lessons and **grow**. Compare who they were **before** and who they are **after**.",
          },
          {
            heading: "Growth",
            body: "A character might be **scared** at first but **brave** at the end, or **mean** but learn to be **kind**.",
          },
        ],
        keyFormulas: [
          { name: "Character change", statement: "Before -> events -> after = character growth." },
        ],
        workedExample: {
          problem: "Story: 'The shy girl finally speaks in front of class.' How does she change?",
          solution: "She goes from **shy** (before) to **confident** (after) — she **learned** to speak up.",
        },
      },
      questions: [
        {
          id: "ela2-u2-character-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character 'changes' when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they stay the same"
                    },
                    {
                              "id": "b",
                              "text": "they grow or learn something new"
                    },
                    {
                              "id": "c",
                              "text": "they leave"
                    },
                    {
                              "id": "d",
                              "text": "they die"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Change = grow/learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Change = grow/learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**grow/learn**",
          "commonErrors": [
                    "Thinks change means leaving."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To describe character change, compare...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the end"
                    },
                    {
                              "id": "b",
                              "text": "who they were before and after"
                    },
                    {
                              "id": "c",
                              "text": "only the beginning"
                    },
                    {
                              "id": "d",
                              "text": "only the middle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Compare before + after."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare before + after.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**before and after**",
          "commonErrors": [
                    "Picks only one point."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. How does the main character change from beginning to end?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Change",
                              "statement": "Before + after."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes before and after.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Was scared of water, now swims — grew braver.'**",
          "commonErrors": [
                    "Cannot describe change.",
                    "Only one point."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Learn' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "forget"
                    },
                    {
                              "id": "b",
                              "text": "gain knowledge or a lesson"
                    },
                    {
                              "id": "c",
                              "text": "play"
                    },
                    {
                              "id": "d",
                              "text": "sleep"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Learn = gain knowledge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Learn = gain knowledge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**gain knowledge**",
          "commonErrors": [
                    "Confuses with forget."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell about a character who changes in a story. What do they learn? How are they different at the end?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Change",
                              "statement": "Change + lesson + after."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes change.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names lesson learned.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Was selfish, learned to share; now kind.'**",
          "commonErrors": [
                    "No change.",
                    "No lesson."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get bigger/better."
                    },
                    {
                              "id": "b",
                              "text": "Becomes different."
                    },
                    {
                              "id": "c",
                              "text": "Gain knowledge."
                    },
                    {
                              "id": "d",
                              "text": "How they were."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Change\" means Becomes different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Becomes different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Change** = Becomes different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gain knowledge."
                    },
                    {
                              "id": "b",
                              "text": "How they were."
                    },
                    {
                              "id": "c",
                              "text": "How they are now."
                    },
                    {
                              "id": "d",
                              "text": "Get bigger/better."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Grow\" means Get bigger/better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grow\" means Get bigger/better.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Grow** = Get bigger/better.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u2-character-change-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Learn\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How they were."
                    },
                    {
                              "id": "b",
                              "text": "Gain knowledge."
                    },
                    {
                              "id": "c",
                              "text": "How they are now."
                    },
                    {
                              "id": "d",
                              "text": "What they learn."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Learn\" means Gain knowledge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Learn\" means Gain knowledge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Learn** = Gain knowledge.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
