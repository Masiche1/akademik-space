import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "sci5-u1-lesson-1-3",
  code: "1-3",
  title: "Physical Changes",
  goal: "I CAN identify and describe physical changes in matter.",
  standards: ["PS1.A"],
  vocabulary: [
    { term: "Physical change", definition: "Change in appearance, not substance." },
    { term: "Reversible", definition: "Can be undone." },
    { term: "Melting", definition: "Solid to liquid." },
    { term: "Freezing", definition: "Liquid to solid." },
    { term: "Evaporation", definition: "Liquid to gas." },
    { term: "Condensation", definition: "Gas to liquid." },
    { term: "Dissolving", definition: "Mixing into liquid." },
    { term: "Shape", definition: "Form of matter." },
  ],
  concepts: [
    {
      id: "sci5-u1-physical-changes",
      title: "Physical changes",
      skill: "Identify physical changes where substance stays the same.",
      lesson: {
        sections: [
          {
            heading: "Same substance",
            body: "In a **physical change**, the substance **stays the same** — only its **appearance** or **state** changes. It's **reversible**.",
          },
          {
            heading: "Examples",
            body: "Melting ice (solid->liquid), freezing water (liquid->solid), evaporation (liquid->gas), dissolving sugar (still sugar).",
          },
        ],
        keyFormulas: [
          { name: "Physical change", statement: "Same substance, different appearance = physical." },
        ],
        workedExample: {
          problem: "Is melting a physical or chemical change?",
          solution: "**Physical** — ice becomes water but it's still H₂O.",
        },
      },
      questions: [
        {
          id: "sci5-u1-physical-changes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'physical change' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "new substance formed"
                    },
                    {
                              "id": "b",
                              "text": "change in appearance, same substance"
                    },
                    {
                              "id": "c",
                              "text": "only color"
                    },
                    {
                              "id": "d",
                              "text": "only size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same substance, different appearance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same substance, different appearance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "change in appearance, same substance",
          "commonErrors": [
                    "Confuses with chemical."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a physical change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "burning wood"
                    },
                    {
                              "id": "b",
                              "text": "melting ice"
                    },
                    {
                              "id": "c",
                              "text": "rusting iron"
                    },
                    {
                              "id": "d",
                              "text": "cooking eggs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Melting ice is physical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Melting ice is physical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "melting ice",
          "commonErrors": [
                    "Confuses with chemical."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify whether each is a physical or chemical change: melting ice, burning wood, dissolving salt, rusting iron.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Physical",
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
          "finalAnswer": "**Physical: melting ice, dissolving salt. Chemical: burning wood, rusting iron.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Physical changes are usually...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "permanent"
                    },
                    {
                              "id": "b",
                              "text": "reversible"
                    },
                    {
                              "id": "c",
                              "text": "dangerous"
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
                              "statement": "Reversible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reversible.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "reversible",
          "commonErrors": [
                    "Wrong characteristic."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why dissolving sugar in water is a physical change, not chemical.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Physical",
                              "statement": "Same substance explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains same substance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains reversibility.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Sugar is still sugar; can be recovered by evaporation — no new substance.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong reasoning."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Can be undone."
                    },
                    {
                              "id": "b",
                              "text": "Change in appearance, not substance."
                    },
                    {
                              "id": "c",
                              "text": "Solid to liquid."
                    },
                    {
                              "id": "d",
                              "text": "Liquid to solid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical change\" means Change in appearance, not substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical change\" means Change in appearance, not substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical change** = Change in appearance, not substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reversible\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid to liquid."
                    },
                    {
                              "id": "b",
                              "text": "Liquid to solid."
                    },
                    {
                              "id": "c",
                              "text": "Liquid to gas."
                    },
                    {
                              "id": "d",
                              "text": "Can be undone."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reversible\" means Can be undone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reversible\" means Can be undone.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reversible** = Can be undone.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-physical-changes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Melting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid to solid."
                    },
                    {
                              "id": "b",
                              "text": "Solid to liquid."
                    },
                    {
                              "id": "c",
                              "text": "Liquid to gas."
                    },
                    {
                              "id": "d",
                              "text": "Gas to liquid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Melting\" means Solid to liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Melting\" means Solid to liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Melting** = Solid to liquid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
