import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "ela6-u2-lesson-2-4",
  code: "2-4",
  title: "Character Change",
  goal: "I CAN analyze how characters change over time.",
  standards: ["RL.6.3"],
  vocabulary: [
    { term: "Change", definition: "Becomes different." },
    { term: "Growth", definition: "Develops." },
    { term: "Arc", definition: "Journey." },
    { term: "Static", definition: "Stays same." },
    { term: "Dynamic", definition: "Changes." },
    { term: "Motivation", definition: "Why." },
    { term: "Events", definition: "What happens." },
    { term: "Evidence", definition: "Proof." },
  ],
  concepts: [
    {
      id: "ela6-u2-character-change",
      title: "Character change",
      skill: "Analyze how characters change or stay the same throughout a story.",
      lesson: {
        sections: [
          {
            heading: "Dynamic vs static",
            body: "**Dynamic** characters change and grow; **static** characters stay the same. Most stories feature dynamic characters who learn lessons.",
          },
          {
            heading: "Tracking change",
            body: "Look for **before and after**: how does the character act differently at the end vs beginning? What events caused the change?",
          },
        ],
        keyFormulas: [
          { name: "Character change", statement: "Dynamic characters grow through events; static stay same." },
        ],
        workedExample: {
          problem: "A character starts selfish and ends generous. Is this dynamic or static?",
          solution: "**Dynamic — character changed through story events.**",
        },
      },
      questions: [
        {
          id: "ela6-u2-character-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'dynamic character' is one who...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stays the same"
                    },
                    {
                              "id": "b",
                              "text": "changes and grows"
                    },
                    {
                              "id": "c",
                              "text": "is static"
                    },
                    {
                              "id": "d",
                              "text": "is minor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Changes and grows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Changes and grows.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "changes and grows",
          "commonErrors": [
                    "Confuses with static."
          ]
},
        },
        {
          id: "ela6-u2-character-change-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To track character change, you should look for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the beginning"
                    },
                    {
                              "id": "b",
                              "text": "before and after differences"
                    },
                    {
                              "id": "c",
                              "text": "only the ending"
                    },
                    {
                              "id": "d",
                              "text": "only dialogue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Before and after."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Before and after.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "before and after differences",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u2-character-change-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how a character might change in a story and what events would cause that change.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Character change",
                              "statement": "Change described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes change.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Starts fearful, faces challenge, learns courage, becomes confident.'**",
          "commonErrors": [
                    "No change described.",
                    "Missing events."
          ]
},
        },
        {
          id: "ela6-u2-character-change-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'static character' is one who...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "changes a lot"
                    },
                    {
                              "id": "b",
                              "text": "stays the same"
                    },
                    {
                              "id": "c",
                              "text": "is dynamic"
                    },
                    {
                              "id": "d",
                              "text": "is minor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stays the same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stays the same.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "stays the same",
          "commonErrors": [
                    "Confuses with dynamic."
          ]
},
        },
        {
          id: "ela6-u2-character-change-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a dynamic and static character in a story and explain the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Character change",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares characters.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Dynamic: learns lesson and changes; Static: remains same throughout.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No difference explained."
          ]
},
        },
        {
          id: "ela6-u2-character-change-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Develops."
                    },
                    {
                              "id": "b",
                              "text": "Becomes different."
                    },
                    {
                              "id": "c",
                              "text": "Journey."
                    },
                    {
                              "id": "d",
                              "text": "Stays same."
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
          id: "ela6-u2-character-change-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Growth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Journey."
                    },
                    {
                              "id": "b",
                              "text": "Stays same."
                    },
                    {
                              "id": "c",
                              "text": "Changes."
                    },
                    {
                              "id": "d",
                              "text": "Develops."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Growth\" means Develops."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Growth\" means Develops.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Growth** = Develops.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-change-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Arc\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stays same."
                    },
                    {
                              "id": "b",
                              "text": "Journey."
                    },
                    {
                              "id": "c",
                              "text": "Changes."
                    },
                    {
                              "id": "d",
                              "text": "Why."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Arc\" means Journey."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Arc\" means Journey.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Arc** = Journey.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
