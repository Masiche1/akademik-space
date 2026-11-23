import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ela4-u2-lesson-2-1",
  code: "2-1",
  title: "Point of View",
  goal: "I CAN identify the narrator's point of view (first, second, third person).",
  standards: ["RL.4.6"],
  vocabulary: [
    { term: "Point of view", definition: "Who tells the story." },
    { term: "First person", definition: "I, me, my." },
    { term: "Second person", definition: "You, your." },
    { term: "Third person", definition: "He, she, they." },
    { term: "Narrator", definition: "Who tells the story." },
    { term: "Pronoun", definition: "I, you, he, she, they." },
    { term: "Perspective", definition: "How it's told." },
    { term: "Voice", definition: "Narrator's style." },
  ],
  concepts: [
    {
      id: "ela4-u2-point-of-view",
      title: "Point of view",
      skill: "Identify first, second and third person narration.",
      lesson: {
        sections: [
          {
            heading: "Who tells the story?",
            body: "**Point of view** = **who is telling** the story. Look at the **pronouns**: 'I' = first person, 'you' = second, 'he/she/they' = third.",
          },
          {
            heading: "Why it matters",
            body: "Point of view affects what we know. First person gives one character's view; third person can show multiple views.",
          },
        ],
        keyFormulas: [
          { name: "POV", statement: "I/me/my = 1st; you/your = 2nd; he/she/they = 3rd." },
        ],
        workedExample: {
          problem: "'I walked to school. My friend waited for me.' What POV?",
          solution: "**First person** — uses 'I' and 'my'.",
        },
      },
      questions: [
        {
          id: "ela4-u2-point-of-view-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'I went to the store' is written in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "third person"
                    },
                    {
                              "id": "b",
                              "text": "first person"
                    },
                    {
                              "id": "c",
                              "text": "second person"
                    },
                    {
                              "id": "d",
                              "text": "no person"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'I' = first person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I' = first person.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**first person**",
          "commonErrors": [
                    "Thinks it's third."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'You should try the cake' is written in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "first person"
                    },
                    {
                              "id": "b",
                              "text": "second person"
                    },
                    {
                              "id": "c",
                              "text": "third person"
                    },
                    {
                              "id": "d",
                              "text": "plural"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'You' = second person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'You' = second person.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**second person**",
          "commonErrors": [
                    "Wrong person."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a short passage. Identify the point of view and cite two pronouns that prove it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "POV",
                              "statement": "POV + pronoun evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies POV.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cites pronouns.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Third person: uses he/she/they throughout.'**",
          "commonErrors": [
                    "Wrong POV.",
                    "No pronouns."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'She ran to the park. He followed her.' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "first person"
                    },
                    {
                              "id": "b",
                              "text": "second person"
                    },
                    {
                              "id": "c",
                              "text": "third person"
                    },
                    {
                              "id": "d",
                              "text": "second plural"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'She/he' = third person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'She/he' = third person.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**third person**",
          "commonErrors": [
                    "Wrong person."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Rewrite a first-person sentence in third person. Explain what changed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "POV",
                              "statement": "Rewrite + explain change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rewrites correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains pronoun change.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I went home' -> 'She went home'; I->she, my->her.'**",
          "commonErrors": [
                    "Cannot rewrite.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Point of view\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "I, me, my."
                    },
                    {
                              "id": "b",
                              "text": "Who tells the story."
                    },
                    {
                              "id": "c",
                              "text": "You, your."
                    },
                    {
                              "id": "d",
                              "text": "He, she, they."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Point of view\" means Who tells the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Point of view\" means Who tells the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Point of view** = Who tells the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First person\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "You, your."
                    },
                    {
                              "id": "b",
                              "text": "He, she, they."
                    },
                    {
                              "id": "c",
                              "text": "Who tells the story."
                    },
                    {
                              "id": "d",
                              "text": "I, me, my."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"First person\" means I, me, my."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"First person\" means I, me, my.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**First person** = I, me, my.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u2-point-of-view-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Second person\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "He, she, they."
                    },
                    {
                              "id": "b",
                              "text": "You, your."
                    },
                    {
                              "id": "c",
                              "text": "Who tells the story."
                    },
                    {
                              "id": "d",
                              "text": "I, you, he, she, they."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Second person\" means You, your."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Second person\" means You, your.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Second person** = You, your.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
