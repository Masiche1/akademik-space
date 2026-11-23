import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "sci5-u6-lesson-6-5",
  code: "6-5",
  title: "Earth's History Review",
  goal: "I CAN use all Earth's history skills.",
  standards: ["ESS1.A", "ESS1.C", "LS4.B"],
  vocabulary: [
    { term: "Fossil", definition: "Preserved remains." },
    { term: "Layer", definition: "Earth level." },
    { term: "Rock", definition: "Solid material." },
    { term: "Mineral", definition: "Natural substance." },
    { term: "Natural selection", definition: "Survival of best." },
    { term: "Adaptation", definition: "Helpful feature." },
    { term: "Evolution", definition: "Change over time." },
    { term: "Evidence", definition: "Proof." },
  ],
  concepts: [
    {
      id: "sci5-u6-earth-history-review",
      title: "Earth's history review",
      skill: "Combine fossils, Earth's layers, rocks and natural selection.",
      lesson: {
        sections: [
          {
            heading: "All Earth history skills",
            body: "Describe **fossils**, **Earth's layers**, **rocks/minerals**, and **natural selection**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand Earth's history and life.",
          },
        ],
        keyFormulas: [
          { name: "Earth history", statement: "Fossils + layers + rocks + selection = all skills." },
        ],
        workedExample: {
          problem: "Use all Earth's history skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u6-earth-history-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth's history skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only fossils"
                    },
                    {
                              "id": "b",
                              "text": "fossils, layers, rocks, natural selection"
                    },
                    {
                              "id": "c",
                              "text": "only rocks"
                    },
                    {
                              "id": "d",
                              "text": "only selection"
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
          "finalAnswer": "fossils, layers, rocks, natural selection",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a fossil, name Earth's layers, classify a rock, and explain natural selection.",
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
                                                  "All Earth history",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All Earth history",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Fossil: preserved remains; Layers: crust/mantle/core; Rock: igneous; Selection: best adapted survive.'**"
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding Earth's history helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand how Earth and life evolved"
                    },
                    {
                              "id": "c",
                              "text": "only test"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Understand evolution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand evolution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand how Earth and life evolved",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fossil\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Earth level."
                    },
                    {
                              "id": "b",
                              "text": "Preserved remains."
                    },
                    {
                              "id": "c",
                              "text": "Solid material."
                    },
                    {
                              "id": "d",
                              "text": "Natural substance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fossil\" means Preserved remains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fossil\" means Preserved remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fossil** = Preserved remains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Layer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid material."
                    },
                    {
                              "id": "b",
                              "text": "Natural substance."
                    },
                    {
                              "id": "c",
                              "text": "Survival of best."
                    },
                    {
                              "id": "d",
                              "text": "Earth level."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Layer\" means Earth level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Layer\" means Earth level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Layer** = Earth level.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Natural substance."
                    },
                    {
                              "id": "b",
                              "text": "Solid material."
                    },
                    {
                              "id": "c",
                              "text": "Survival of best."
                    },
                    {
                              "id": "d",
                              "text": "Helpful feature."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Solid material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Solid material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Solid material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mineral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Survival of best."
                    },
                    {
                              "id": "b",
                              "text": "Helpful feature."
                    },
                    {
                              "id": "c",
                              "text": "Change over time."
                    },
                    {
                              "id": "d",
                              "text": "Natural substance."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mineral\" means Natural substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mineral\" means Natural substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mineral** = Natural substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-earth-history-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Natural selection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Helpful feature."
                    },
                    {
                              "id": "b",
                              "text": "Survival of best."
                    },
                    {
                              "id": "c",
                              "text": "Change over time."
                    },
                    {
                              "id": "d",
                              "text": "Proof."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Natural selection\" means Survival of best."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Natural selection\" means Survival of best.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Natural selection** = Survival of best.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
