import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "sci5-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Earth and Engineering",
  goal: "I CAN use all Earth and engineering skills.",
  standards: ["ESS1.A", "ESS1.C", "ESS2.C", "ESS2.D", "ESS2.E", "ETS1.A", "ETS1.B"],
  vocabulary: [
    { term: "Fossil", definition: "Preserved remains." },
    { term: "Layer", definition: "Earth level." },
    { term: "Water cycle", definition: "Water movement." },
    { term: "System", definition: "Interacting parts." },
    { term: "Climate", definition: "Long-term." },
    { term: "Design process", definition: "Steps." },
    { term: "Criteria", definition: "Requirements." },
    { term: "Iterate", definition: "Improve." },
  ],
  concepts: [
    {
      id: "sci5-u8-review-earth-engineering",
      title: "Earth and engineering review",
      skill: "Combine Earth's systems, history and engineering design.",
      lesson: {
        sections: [
          {
            heading: "All Earth/engineering skills",
            body: "Describe **fossils**, **Earth's layers**, **water cycle**, **Earth's systems**, **climate**, and **engineering design**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand Earth and solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Earth/engineering", statement: "Earth systems + history + design = all skills." },
        ],
        workedExample: {
          problem: "Use all Earth and engineering skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u8-review-earth-engineering-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth/engineering skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only Earth"
                    },
                    {
                              "id": "b",
                              "text": "Earth systems/history, engineering design"
                    },
                    {
                              "id": "c",
                              "text": "only engineering"
                    },
                    {
                              "id": "d",
                              "text": "only climate"
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
          "finalAnswer": "Earth systems/history, engineering design",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u8-review-earth-engineering-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe Earth's systems, name a fossil type, explain the water cycle, and follow the design process for a problem.",
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
                                                  "All Earth/engineering",
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
                                                  "All Earth/engineering",
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
                    "**e.g., 'Systems: atmosphere/hydrosphere; Fossil: imprint; Water cycle: evap->precip; Design: problem->criteria->test->iterate.'**"
          ]
},
        },
        {
          id: "sci5-u8-review-earth-engineering-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth science and engineering help us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only learn"
                    },
                    {
                              "id": "b",
                              "text": "understand our planet and solve real problems"
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
                              "statement": "Understand planet/solve problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand planet/solve problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand our planet and solve real problems",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci5-u8-review-earth-engineering-q4",
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
                              "text": "Water movement."
                    },
                    {
                              "id": "d",
                              "text": "Interacting parts."
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
          id: "sci5-u8-review-earth-engineering-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Layer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water movement."
                    },
                    {
                              "id": "b",
                              "text": "Interacting parts."
                    },
                    {
                              "id": "c",
                              "text": "Long-term."
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
          id: "sci5-u8-review-earth-engineering-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Interacting parts."
                    },
                    {
                              "id": "b",
                              "text": "Water movement."
                    },
                    {
                              "id": "c",
                              "text": "Long-term."
                    },
                    {
                              "id": "d",
                              "text": "Steps."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water cycle\" means Water movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water cycle\" means Water movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water cycle** = Water movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-earth-engineering-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"System\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Long-term."
                    },
                    {
                              "id": "b",
                              "text": "Steps."
                    },
                    {
                              "id": "c",
                              "text": "Requirements."
                    },
                    {
                              "id": "d",
                              "text": "Interacting parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"System\" means Interacting parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"System\" means Interacting parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**System** = Interacting parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-earth-engineering-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Climate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steps."
                    },
                    {
                              "id": "b",
                              "text": "Long-term."
                    },
                    {
                              "id": "c",
                              "text": "Requirements."
                    },
                    {
                              "id": "d",
                              "text": "Improve."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Climate\" means Long-term."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Climate\" means Long-term.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Climate** = Long-term.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
