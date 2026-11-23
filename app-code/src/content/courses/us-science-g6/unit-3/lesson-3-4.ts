import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "sci6-u3-lesson-3-4",
  code: "3-4",
  title: "Physical and Chemical Changes",
  goal: "I CAN distinguish physical and chemical changes.",
  standards: ["MS-PS1-1"],
  vocabulary: [
    { term: "Physical change", definition: "Form changes, substance same." },
    { term: "Chemical change", definition: "Substance changes." },
    { term: "Reversible", definition: "Can undo." },
    { term: "Irreversible", definition: "Cannot undo." },
    { term: "Evidence", definition: "Signs of change." },
    { term: "New substance", definition: "Different material." },
    { term: "Melting", definition: "Physical change." },
    { term: "Burning", definition: "Chemical change." },
  ],
  concepts: [
    {
      id: "sci6-u3-physical-chemical-changes",
      title: "Physical and chemical changes",
      skill: "Distinguish between physical changes (form only) and chemical changes (new substance).",
      lesson: {
        sections: [
          {
            heading: "Physical",
            body: "**Physical change**: form changes but substance stays the same (melting ice, tearing paper, dissolving salt). **Reversible**.",
          },
          {
            heading: "Chemical",
            body: "**Chemical change**: new substance forms (burning wood, rusting iron, baking bread). Often **irreversible**. Evidence: color change, gas, heat, precipitate.",
          },
        ],
        keyFormulas: [
          { name: "Physical", statement: "Form changes, same substance." },
          { name: "Chemical", statement: "New substance forms." },
        ],
        workedExample: {
          problem: "Is burning wood a physical or chemical change? Is melting ice?",
          solution: "**Burning: chemical (new substances: ash, CO2); Melting: physical (still water).**",
        },
      },
      questions: [
        {
          id: "sci6-u3-physical-chemical-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'physical change' is one where...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "new substance forms"
                    },
                    {
                              "id": "b",
                              "text": "form changes but substance stays same"
                    },
                    {
                              "id": "c",
                              "text": "cannot be undone"
                    },
                    {
                              "id": "d",
                              "text": "always produces gas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Form changes only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Form changes only.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "form changes but substance stays same",
          "commonErrors": [
                    "Confuses with chemical."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'chemical change' is one where...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only shape changes"
                    },
                    {
                              "id": "b",
                              "text": "new substance forms"
                    },
                    {
                              "id": "c",
                              "text": "always reversible"
                    },
                    {
                              "id": "d",
                              "text": "no new substance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "New substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "new substance forms",
          "commonErrors": [
                    "Confuses with physical."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these as physical or chemical: melting ice, burning paper, dissolving sugar, rusting iron, tearing cloth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Changes",
                              "statement": "All five classified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all five.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Physical: melting ice, dissolving sugar, tearing cloth; Chemical: burning paper, rusting iron.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evidence of a chemical change includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only melting"
                    },
                    {
                              "id": "b",
                              "text": "color change, gas, heat, precipitate"
                    },
                    {
                              "id": "c",
                              "text": "only freezing"
                    },
                    {
                              "id": "d",
                              "text": "only dissolving"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Color/gas/heat/precipitate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Color/gas/heat/precipitate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "color change, gas, heat, precipitate",
          "commonErrors": [
                    "Wrong evidence."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Give an example of a physical change and a chemical change, explaining the difference.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Changes",
                              "statement": "Both examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives physical example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives chemical example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Physical: melting ice (still water); Chemical: burning wood (ash + CO2 formed).**",
          "commonErrors": [
                    "Only one example.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Substance changes."
                    },
                    {
                              "id": "b",
                              "text": "Form changes, substance same."
                    },
                    {
                              "id": "c",
                              "text": "Can undo."
                    },
                    {
                              "id": "d",
                              "text": "Cannot undo."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical change\" means Form changes, substance same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical change\" means Form changes, substance same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical change** = Form changes, substance same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chemical change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Can undo."
                    },
                    {
                              "id": "b",
                              "text": "Cannot undo."
                    },
                    {
                              "id": "c",
                              "text": "Signs of change."
                    },
                    {
                              "id": "d",
                              "text": "Substance changes."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Chemical change\" means Substance changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Chemical change\" means Substance changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Chemical change** = Substance changes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-physical-chemical-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reversible\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cannot undo."
                    },
                    {
                              "id": "b",
                              "text": "Can undo."
                    },
                    {
                              "id": "c",
                              "text": "Signs of change."
                    },
                    {
                              "id": "d",
                              "text": "Different material."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reversible\" means Can undo."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reversible\" means Can undo.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reversible** = Can undo.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
