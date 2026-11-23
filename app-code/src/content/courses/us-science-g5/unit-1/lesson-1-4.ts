import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "sci5-u1-lesson-1-4",
  code: "1-4",
  title: "Chemical Changes",
  goal: "I CAN identify and describe chemical changes in matter.",
  standards: ["PS1.B"],
  vocabulary: [
    { term: "Chemical change", definition: "New substance formed." },
    { term: "Reaction", definition: "Process of change." },
    { term: "Product", definition: "New substance." },
    { term: "Reactant", definition: "Starting substance." },
    { term: "Evidence", definition: "Signs of change." },
    { term: "Bubble", definition: "Gas released." },
    { term: "Color change", definition: "New color." },
    { term: "Permanent", definition: "Cannot undo." },
  ],
  concepts: [
    {
      id: "sci5-u1-chemical-changes",
      title: "Chemical changes",
      skill: "Identify chemical changes where new substances form.",
      lesson: {
        sections: [
          {
            heading: "New substance",
            body: "In a **chemical change**, a **new substance** forms. It's usually **permanent** and shows **evidence**: bubbles, color change, temperature change, odor.",
          },
          {
            heading: "Examples",
            body: "Burning wood (ash forms), rusting iron (iron oxide), cooking eggs (protein changes), mixing vinegar and baking soda (CO₂ gas).",
          },
        ],
        keyFormulas: [
          { name: "Chemical change", statement: "New substance formed = chemical." },
        ],
        workedExample: {
          problem: "Is burning a chemical change? Why?",
          solution: "**Yes** — wood becomes ash (new substance), can't be undone.",
        },
      },
      questions: [
        {
          id: "sci5-u1-chemical-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'chemical change' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "same substance"
                    },
                    {
                              "id": "b",
                              "text": "new substance formed"
                    },
                    {
                              "id": "c",
                              "text": "only color"
                    },
                    {
                              "id": "d",
                              "text": "only shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "New substance formed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New substance formed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "new substance formed",
          "commonErrors": [
                    "Confuses with physical."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is evidence of a chemical change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "melting"
                    },
                    {
                              "id": "b",
                              "text": "bubbles forming"
                    },
                    {
                              "id": "c",
                              "text": "freezing"
                    },
                    {
                              "id": "d",
                              "text": "dissolving"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Bubbles = gas released."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bubbles = gas released.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "bubbles forming",
          "commonErrors": [
                    "Confuses with physical."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify chemical changes and their evidence: burning paper, mixing vinegar+baking soda, melting butter, rusting nail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Chemical",
                              "statement": "All four identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Chemical: burning paper (ash), vinegar+baking soda (bubbles), rusting nail (color change). Physical: melting butter.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Chemical changes are usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reversible"
                    },
                    {
                              "id": "b",
                              "text": "permanent"
                    },
                    {
                              "id": "c",
                              "text": "invisible"
                    },
                    {
                              "id": "d",
                              "text": "slow"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Permanent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Permanent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "permanent",
          "commonErrors": [
                    "Confuses with physical."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why mixing vinegar and baking soda is a chemical change. What evidence do you see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Chemical",
                              "statement": "New substance + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains new substance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**New substance (CO₂ gas) forms; evidence: bubbles/fizzing.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No evidence."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chemical change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Process of change."
                    },
                    {
                              "id": "b",
                              "text": "New substance formed."
                    },
                    {
                              "id": "c",
                              "text": "New substance."
                    },
                    {
                              "id": "d",
                              "text": "Starting substance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Chemical change\" means New substance formed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Chemical change\" means New substance formed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Chemical change** = New substance formed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reaction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "New substance."
                    },
                    {
                              "id": "b",
                              "text": "Starting substance."
                    },
                    {
                              "id": "c",
                              "text": "Signs of change."
                    },
                    {
                              "id": "d",
                              "text": "Process of change."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reaction\" means Process of change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reaction\" means Process of change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reaction** = Process of change.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-chemical-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Starting substance."
                    },
                    {
                              "id": "b",
                              "text": "New substance."
                    },
                    {
                              "id": "c",
                              "text": "Signs of change."
                    },
                    {
                              "id": "d",
                              "text": "Gas released."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Product\" means New substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Product\" means New substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Product** = New substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
