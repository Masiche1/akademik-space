import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "ela5-u2-lesson-2-4",
  code: "2-4",
  title: "Story Structure",
  goal: "I CAN analyze how parts of a story fit together (exposition, rising action, climax, resolution).",
  standards: ["RL.5.5"],
  vocabulary: [
    { term: "Exposition", definition: "Beginning/setup." },
    { term: "Rising action", definition: "Events building tension." },
    { term: "Climax", definition: "Turning point." },
    { term: "Falling action", definition: "Events after climax." },
    { term: "Resolution", definition: "Ending." },
    { term: "Plot", definition: "Sequence of events." },
    { term: "Conflict", definition: "Problem." },
    { term: "Structure", definition: "How story is organized." },
  ],
  concepts: [
    {
      id: "ela5-u2-story-structure",
      title: "Story structure",
      skill: "Identify the parts of a story's plot structure.",
      lesson: {
        sections: [
          {
            heading: "Story arc",
            body: "Most stories follow a pattern: **exposition** (setup) -> **rising action** (problems build) -> **climax** (turning point) -> **falling action** -> **resolution** (ending).",
          },
          {
            heading: "Why it matters",
            body: "Understanding structure helps you see **how events connect** and **why the story unfolds** the way it does.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Exposition -> rising -> climax -> falling -> resolution." },
        ],
        workedExample: {
          problem: "Identify the climax of: 'The hero fights the dragon and wins.'",
          solution: "**The fight with the dragon** is the climax — the most intense, turning-point moment.",
        },
      },
      questions: [
        {
          id: "ela5-u2-story-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'climax' of a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "the turning point or most intense moment"
                    },
                    {
                              "id": "c",
                              "text": "the ending"
                    },
                    {
                              "id": "d",
                              "text": "the setup"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Climax = turning point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Climax = turning point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the turning point or most intense moment",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Rising action' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "events that build tension before the climax"
                    },
                    {
                              "id": "c",
                              "text": "the setup"
                    },
                    {
                              "id": "d",
                              "text": "the resolution"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Events building tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Events building tension.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "events that build tension before the climax",
          "commonErrors": [
                    "Wrong part."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or describe the story arc of a story: exposition, rising action, climax, resolution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "All four parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Exposition: setup; Rising: problems; Climax: turning point; Resolution: ending.**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong order."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'resolution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "how the story ends"
                    },
                    {
                              "id": "c",
                              "text": "the climax"
                    },
                    {
                              "id": "d",
                              "text": "the conflict"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Resolution = ending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resolution = ending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "how the story ends",
          "commonErrors": [
                    "Confuses with climax."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how the climax affects what happens after it in a story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Climax -> falling action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies climax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains connection.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**After climax, tension decreases; characters deal with consequences (falling action -> resolution).**",
          "commonErrors": [
                    "Cannot explain.",
                    "No connection."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exposition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Events building tension."
                    },
                    {
                              "id": "b",
                              "text": "Beginning/setup."
                    },
                    {
                              "id": "c",
                              "text": "Turning point."
                    },
                    {
                              "id": "d",
                              "text": "Events after climax."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Exposition\" means Beginning/setup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exposition\" means Beginning/setup.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Exposition** = Beginning/setup.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rising action\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Turning point."
                    },
                    {
                              "id": "b",
                              "text": "Events after climax."
                    },
                    {
                              "id": "c",
                              "text": "Ending."
                    },
                    {
                              "id": "d",
                              "text": "Events building tension."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rising action\" means Events building tension."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rising action\" means Events building tension.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rising action** = Events building tension.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u2-story-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climax\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Events after climax."
                    },
                    {
                              "id": "b",
                              "text": "Turning point."
                    },
                    {
                              "id": "c",
                              "text": "Ending."
                    },
                    {
                              "id": "d",
                              "text": "Sequence of events."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Climax\" means Turning point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climax\" means Turning point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Climax** = Turning point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
