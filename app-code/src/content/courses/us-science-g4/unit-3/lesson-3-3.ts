import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "sci4-u3-lesson-3-3",
  code: "3-3",
  title: "Organisms and Tissues",
  goal: "I CAN explain how tissues form organs and organ systems.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Tissue", definition: "Group of similar cells." },
    { term: "Organ", definition: "Group of tissues." },
    { term: "Organ system", definition: "Group of organs." },
    { term: "Organism", definition: "Complete living thing." },
    { term: "Specialize", definition: "Have specific jobs." },
    { term: "Muscle tissue", definition: "Moves body." },
    { term: "Nervous tissue", definition: "Sends signals." },
    { term: "Epithelial", definition: "Covers surfaces." },
  ],
  concepts: [
    {
      id: "sci4-u3-organisms-tissues",
      title: "Organisms and tissues",
      skill: "Explain how cells specialize into tissues, organs and organ systems.",
      lesson: {
        sections: [
          {
            heading: "Cells work together",
            body: "**Cells specialize** — they have specific jobs. Similar cells form **tissues** (muscle, nervous, epithelial); tissues form **organs** (heart, brain); organs form **organ systems** (circulatory, nervous).",
          },
          {
            heading: "Levels of organization",
            body: "Cell -> tissue -> organ -> system -> organism. Each level builds on the one below.",
          },
        ],
        keyFormulas: [
          { name: "Organization", statement: "Cells -> tissues -> organs -> systems -> organism." },
        ],
        workedExample: {
          problem: "What level is the heart?",
          solution: "The heart is an **organ** — made of cardiac muscle tissue, blood vessels, etc.",
        },
      },
      questions: [
        {
          id: "sci4-u3-organisms-tissues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'tissue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one cell"
                    },
                    {
                              "id": "b",
                              "text": "a group of similar cells"
                    },
                    {
                              "id": "c",
                              "text": "an organ"
                    },
                    {
                              "id": "d",
                              "text": "a system"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tissue = group of cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tissue = group of cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a group of similar cells",
          "commonErrors": [
                    "Confuses with other levels."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cells 'specialize' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're all the same"
                    },
                    {
                              "id": "b",
                              "text": "they have specific jobs"
                    },
                    {
                              "id": "c",
                              "text": "they're dead"
                    },
                    {
                              "id": "d",
                              "text": "they reproduce"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Specialize = specific jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialize = specific jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they have specific jobs",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trace the organization from cells to organism. Name each level.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Organization",
                              "statement": "All levels in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all levels.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Cells -> tissues -> organs -> organ systems -> organism.**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing levels."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'organ' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one cell"
                    },
                    {
                              "id": "b",
                              "text": "a group of tissues"
                    },
                    {
                              "id": "c",
                              "text": "a system"
                    },
                    {
                              "id": "d",
                              "text": "a tissue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Organ = group of tissues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organ = group of tissues.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a group of tissues",
          "commonErrors": [
                    "Confuses with tissue."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why specialization is important for complex organisms. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialization",
                              "statement": "Why + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Specialization lets cells do specific jobs efficiently; heart cells pump blood, nerve cells send signals.'**",
          "commonErrors": [
                    "No explanation.",
                    "No example."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tissue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of tissues."
                    },
                    {
                              "id": "b",
                              "text": "Group of similar cells."
                    },
                    {
                              "id": "c",
                              "text": "Group of organs."
                    },
                    {
                              "id": "d",
                              "text": "Complete living thing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tissue\" means Group of similar cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tissue\" means Group of similar cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tissue** = Group of similar cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Organ\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of organs."
                    },
                    {
                              "id": "b",
                              "text": "Complete living thing."
                    },
                    {
                              "id": "c",
                              "text": "Have specific jobs."
                    },
                    {
                              "id": "d",
                              "text": "Group of tissues."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Organ\" means Group of tissues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Organ\" means Group of tissues.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Organ** = Group of tissues.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-organisms-tissues-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Organ system\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Complete living thing."
                    },
                    {
                              "id": "b",
                              "text": "Group of organs."
                    },
                    {
                              "id": "c",
                              "text": "Have specific jobs."
                    },
                    {
                              "id": "d",
                              "text": "Moves body."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Organ system\" means Group of organs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Organ system\" means Group of organs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Organ system** = Group of organs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
