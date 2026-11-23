import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ela1-u2-lesson-2-3",
  code: "2-3",
  title: "Character Actions",
  goal: "I CAN describe what characters do and say.",
  standards: ["RL.1.3"],
  vocabulary: [
    { term: "Action", definition: "What a character does." },
    { term: "Say", definition: "What a character says." },
    { term: "Do", definition: "What a character does." },
    { term: "Describe", definition: "Tell what happens." },
    { term: "Event", definition: "Something that happens." },
    { term: "Dialogue", definition: "What characters say." },
    { term: "Act", definition: "Do something." },
    { term: "Response", definition: "React to something." },
  ],
  concepts: [
    {
      id: "ela1-u2-character-actions",
      title: "Character actions",
      skill: "Describe what characters do and say in stories.",
      lesson: {
        sections: [
          {
            heading: "What characters do",
            body: "Characters **act** (do things) and **say** things (**dialogue**). Describing their **actions** and **words** helps us understand the story.",
          },
          {
            heading: "Actions show traits",
            body: "What a character **does** often shows their **traits** — a kind character shares, a brave character faces fears.",
          },
        ],
        keyFormulas: [
          { name: "Actions", statement: "What characters do + say = understanding characters." },
        ],
        workedExample: {
          problem: "Story: 'Sam shared his snack with his friend.' What did Sam do? What trait does this show?",
          solution: "Sam **shared** — this shows he is **kind**.",
        },
      },
      questions: [
        {
          id: "ela1-u2-character-actions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Dialogue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what characters do"
                    },
                    {
                              "id": "b",
                              "text": "what characters say"
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
                              "statement": "Dialogue = what characters say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dialogue = what characters say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what they say**",
          "commonErrors": [
                    "Confuses with action."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a character faces a fear, they are probably...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "scared forever"
                    },
                    {
                              "id": "b",
                              "text": "brave"
                    },
                    {
                              "id": "c",
                              "text": "mean"
                    },
                    {
                              "id": "d",
                              "text": "silly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Facing fear = brave."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facing fear = brave.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**brave**",
          "commonErrors": [
                    "Picks wrong trait."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Describe one thing a character does and one thing they say.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Actions",
                              "statement": "Action + dialogue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes action + dialogue.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sam ran to the park; he said \"Let's play!\"'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Only one type."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'action' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what they say"
                    },
                    {
                              "id": "b",
                              "text": "what they do"
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
                              "statement": "Action = what they do."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Action = what they do.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what they do**",
          "commonErrors": [
                    "Confuses with dialogue."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell a story and describe two actions a character takes. What traits do these actions show?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Actions",
                              "statement": "2 actions + traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 2 actions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names traits shown.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Shared toy (kind), helped friend (helpful).'**",
          "commonErrors": [
                    "Fewer than 2.",
                    "No traits."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Action\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What a character says."
                    },
                    {
                              "id": "b",
                              "text": "What a character does."
                    },
                    {
                              "id": "c",
                              "text": "Tell what happens."
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
                              "statement": "\"Action\" means What a character does."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Action\" means What a character does.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Action** = What a character does.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Say\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What a character does."
                    },
                    {
                              "id": "b",
                              "text": "Tell what happens."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "What a character says."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Say\" means What a character says."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Say\" means What a character says.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Say** = What a character says.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u2-character-actions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Do\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell what happens."
                    },
                    {
                              "id": "b",
                              "text": "What a character does."
                    },
                    {
                              "id": "c",
                              "text": "Something that happens."
                    },
                    {
                              "id": "d",
                              "text": "What characters say."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Do\" means What a character does."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Do\" means What a character does.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Do** = What a character does.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
