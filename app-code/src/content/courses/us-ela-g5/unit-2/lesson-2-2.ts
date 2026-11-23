import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ela5-u2-lesson-2-2",
  code: "2-2",
  title: "Point of View",
  goal: "I CAN identify first-person, third-person and omniscient narration.",
  standards: ["RL.5.6"],
  vocabulary: [
    { term: "Point of view", definition: "Who tells the story." },
    { term: "First person", definition: "I, me, my." },
    { term: "Third person", definition: "He, she, they." },
    { term: "Omniscient", definition: "All-knowing narrator." },
    { term: "Narrator", definition: "Story teller." },
    { term: "Limited", definition: "One character's view." },
    { term: "Perspective", definition: "Way of seeing." },
    { term: "Voice", definition: "How it sounds." },
  ],
  concepts: [
    {
      id: "ela5-u2-point-of-view",
      title: "Point of view",
      skill: "Identify who is telling the story and how it affects the reader.",
      lesson: {
        sections: [
          {
            heading: "Who tells it",
            body: "**First person**: 'I went to the store' (character tells own story). **Third person**: 'She went to the store' (outside observer). **Omniscient**: knows everything about everyone.",
          },
          {
            heading: "Effect",
            body: "Point of view affects what you **know** and how you **feel**. First person is personal; omniscient is all-knowing.",
          },
        ],
        keyFormulas: [
          { name: "Point of view", statement: "I/me = first; he/she/they = third; all-knowing = omniscient." },
        ],
        workedExample: {
          problem: "Identify: 'I couldn't believe my eyes when I saw the dragon.'",
          solution: "**First person** — narrator uses 'I'.",
        },
      },
      questions: [
        {
          id: "ela5-u2-point-of-view-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "First-person narration uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "he/she/they"
                    },
                    {
                              "id": "b",
                              "text": "I, me, my"
                    },
                    {
                              "id": "c",
                              "text": "you"
                    },
                    {
                              "id": "d",
                              "text": "we"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "First person = I/me/my."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First person = I/me/my.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "I, me, my",
          "commonErrors": [
                    "Confuses with other POV."
          ]
},
        },
        {
          id: "ela5-u2-point-of-view-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'omniscient' narrator...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only knows one character's thoughts"
                    },
                    {
                              "id": "b",
                              "text": "knows everything about all characters"
                    },
                    {
                              "id": "c",
                              "text": "is a character in the story"
                    },
                    {
                              "id": "d",
                              "text": "doesn't tell the story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Omniscient = all-knowing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Omniscient = all-knowing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "knows everything about all characters",
          "commonErrors": [
                    "Wrong definition."
          ]
},
        },
        {
          id: "ela5-u2-point-of-view-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the point of view in a passage and explain how it affects what the reader knows.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Point of view",
                              "statement": "POV + effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies POV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Third person limited: reader only knows what one character knows.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No effect."
          ]
},
        },
        {
          id: "ela5-u2-point-of-view-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Third-person narration uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "I, me, my"
                    },
                    {
                              "id": "b",
                              "text": "he, she, they"
                    },
                    {
                              "id": "c",
                              "text": "you"
                    },
                    {
                              "id": "d",
                              "text": "we"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Third person = he/she/they."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Third person = he/she/they.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "he, she, they",
          "commonErrors": [
                    "Confuses with first person."
          ]
},
        },
        {
          id: "ela5-u2-point-of-view-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare first-person and third-person narration. How does each affect the reader's experience?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Point of view",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares POVs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**First person: personal, immediate; Third person: more distant, can show multiple characters.**",
          "commonErrors": [
                    "Cannot compare.",
                    "No effect."
          ]
},
        },
        {
          id: "ela5-u2-point-of-view-q6",
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
                              "text": "He, she, they."
                    },
                    {
                              "id": "d",
                              "text": "All-knowing narrator."
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
          id: "ela5-u2-point-of-view-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"First person\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "He, she, they."
                    },
                    {
                              "id": "b",
                              "text": "All-knowing narrator."
                    },
                    {
                              "id": "c",
                              "text": "Story teller."
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
          id: "ela5-u2-point-of-view-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Third person\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All-knowing narrator."
                    },
                    {
                              "id": "b",
                              "text": "He, she, they."
                    },
                    {
                              "id": "c",
                              "text": "Story teller."
                    },
                    {
                              "id": "d",
                              "text": "One character's view."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Third person\" means He, she, they."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Third person\" means He, she, they.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Third person** = He, she, they.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
