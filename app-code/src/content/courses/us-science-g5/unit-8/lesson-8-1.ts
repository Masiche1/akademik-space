import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "sci5-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Matter and Energy",
  goal: "I CAN use all matter and energy skills.",
  standards: ["PS1.A", "PS1.B", "PS3.A", "PS4.A"],
  vocabulary: [
    { term: "Matter", definition: "Has mass/space." },
    { term: "Physical", definition: "Observable." },
    { term: "Chemical", definition: "New substance." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Kinetic", definition: "Motion." },
    { term: "Potential", definition: "Stored." },
    { term: "Heat", definition: "Thermal." },
    { term: "Conservation", definition: "Never destroyed." },
  ],
  concepts: [
    {
      id: "sci5-u8-review-matter-energy",
      title: "Matter and energy review",
      skill: "Combine matter properties/changes and energy forms/conservation.",
      lesson: {
        sections: [
          {
            heading: "All matter/energy skills",
            body: "Classify **physical/chemical properties and changes**, identify **energy forms**, and explain **conservation**.",
          },
          {
            heading: "Put it together",
            body: "Use all matter and energy skills.",
          },
        ],
        keyFormulas: [
          { name: "Matter/energy", statement: "Properties + changes + energy + conservation = all skills." },
        ],
        workedExample: {
          problem: "Use all matter and energy skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u8-review-matter-energy-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Matter/energy skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only matter"
                    },
                    {
                              "id": "b",
                              "text": "matter properties/changes, energy forms/conservation"
                    },
                    {
                              "id": "c",
                              "text": "only energy"
                    },
                    {
                              "id": "d",
                              "text": "only changes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "matter properties/changes, energy forms/conservation",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify 2 changes as physical/chemical, identify 2 energy forms, and explain conservation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All matter/energy",
                                                  "All skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All matter/energy",
                                                  "All skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all skills.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Melting=physical, burning=chemical; KE+PE; Conservation: transforms not destroyed.'**"
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Matter and energy are fundamental because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're required"
                    },
                    {
                              "id": "b",
                              "text": "they explain how the physical world works"
                    },
                    {
                              "id": "c",
                              "text": "they're math"
                    },
                    {
                              "id": "d",
                              "text": "they're easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Explain physical world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explain physical world.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they explain how the physical world works",
          "commonErrors": [
                    "Thinks they're just required."
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Observable."
                    },
                    {
                              "id": "b",
                              "text": "Has mass/space."
                    },
                    {
                              "id": "c",
                              "text": "New substance."
                    },
                    {
                              "id": "d",
                              "text": "Ability to do work."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Has mass/space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Has mass/space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Has mass/space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "New substance."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "Motion."
                    },
                    {
                              "id": "d",
                              "text": "Observable."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical\" means Observable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical\" means Observable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical** = Observable.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chemical\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "b",
                              "text": "New substance."
                    },
                    {
                              "id": "c",
                              "text": "Motion."
                    },
                    {
                              "id": "d",
                              "text": "Stored."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Chemical\" means New substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Chemical\" means New substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Chemical** = New substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Motion."
                    },
                    {
                              "id": "b",
                              "text": "Stored."
                    },
                    {
                              "id": "c",
                              "text": "Thermal."
                    },
                    {
                              "id": "d",
                              "text": "Ability to do work."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-matter-energy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kinetic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stored."
                    },
                    {
                              "id": "b",
                              "text": "Motion."
                    },
                    {
                              "id": "c",
                              "text": "Thermal."
                    },
                    {
                              "id": "d",
                              "text": "Never destroyed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kinetic\" means Motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kinetic\" means Motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kinetic** = Motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
