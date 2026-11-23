import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ela6-u2-lesson-2-2",
  code: "2-2",
  title: "Point of View",
  goal: "I CAN determine point of view and how it affects the story.",
  standards: ["RL.6.4"],
  vocabulary: [
    { term: "Point of view", definition: "Who tells story." },
    { term: "First person", definition: "I, me, my." },
    { term: "Third person", definition: "He, she, they." },
    { term: "Limited", definition: "One character's view." },
    { term: "Omniscient", definition: "All-knowing." },
    { term: "Narrator", definition: "Storyteller." },
    { term: "Reliable", definition: "Trustworthy." },
    { term: "Bias", definition: "Slanted view." },
  ],
  concepts: [
    {
      id: "ela6-u2-point-of-view",
      title: "Point of view",
      skill: "Determine point of view and analyze how it affects the reader's understanding.",
      lesson: {
        sections: [
          {
            heading: "Who's telling?",
            body: "**Point of view** = who is telling the story. **First person** uses 'I'; **third person** uses 'he/she/they'.",
          },
          {
            heading: "Types",
            body: "**Limited**: one character's perspective. **Omniscient**: knows all characters' thoughts. **Unreliable**: narrator may not tell the whole truth.",
          },
        ],
        keyFormulas: [
          { name: "Point of view", statement: "First person (I) vs third person (he/she)." },
        ],
        workedExample: {
          problem: "'I ran as fast as I could, my heart pounding.' What point of view?",
          solution: "**First person** — narrator uses 'I'.",
        },
      },
      questions: [
        {
          id: "ela6-u2-point-of-view-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Point of view' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the setting"
                    },
                    {
                              "id": "b",
                              "text": "who is telling the story"
                    },
                    {
                              "id": "c",
                              "text": "the plot"
                    },
                    {
                              "id": "d",
                              "text": "the theme"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Who tells story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Who tells story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "who is telling the story",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u2-point-of-view-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "First person point of view uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "he/she"
                    },
                    {
                              "id": "b",
                              "text": "I/me/my"
                    },
                    {
                              "id": "c",
                              "text": "they"
                    },
                    {
                              "id": "d",
                              "text": "you"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "I/me/my."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "I/me/my.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "I/me/my",
          "commonErrors": [
                    "Wrong pronouns."
          ]
},
        },
        {
          id: "ela6-u2-point-of-view-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read: 'Maria watched from the window as her brother rode his bike down the street. She wondered if he would fall.' What point of view is this? How does it affect our understanding?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "POV",
                              "statement": "Third person limited."
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
          "finalAnswer": "**Third person limited (Maria's view); we only know what she sees and thinks, not brother's feelings.**",
          "commonErrors": [
                    "Wrong POV.",
                    "No effect explained."
          ]
},
        },
        {
          id: "ela6-u2-point-of-view-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Omniscient' point of view means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one character's view"
                    },
                    {
                              "id": "b",
                              "text": "all-knowing narrator"
                    },
                    {
                              "id": "c",
                              "text": "no narrator"
                    },
                    {
                              "id": "d",
                              "text": "second person"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All-knowing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All-knowing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "all-knowing narrator",
          "commonErrors": [
                    "Confuses with limited."
          ]
},
        },
        {
          id: "ela6-u2-point-of-view-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Determine the point of view of a story and explain how it shapes the reader's experience.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "POV",
                              "statement": "POV + effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Determines POV.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'First person limited; reader only knows narrator's thoughts, creating mystery.'**",
          "commonErrors": [
                    "Cannot determine.",
                    "No effect."
          ]
},
        },
        {
          id: "ela6-u2-point-of-view-q6",
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
                              "text": "Who tells story."
                    },
                    {
                              "id": "c",
                              "text": "He, she, they."
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
                              "statement": "\"Point of view\" means Who tells story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Point of view\" means Who tells story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Point of view** = Who tells story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-point-of-view-q7",
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
                              "text": "One character's view."
                    },
                    {
                              "id": "c",
                              "text": "All-knowing."
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
          id: "ela6-u2-point-of-view-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Third person\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One character's view."
                    },
                    {
                              "id": "b",
                              "text": "He, she, they."
                    },
                    {
                              "id": "c",
                              "text": "All-knowing."
                    },
                    {
                              "id": "d",
                              "text": "Storyteller."
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
