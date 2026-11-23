import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "ela4-u5-lesson-5-5",
  code: "5-5",
  title: "Writing Argument Review",
  goal: "I CAN write a complete argument with claim, reasons, evidence and linkers.",
  standards: ["W.4.1a", "W.4.1b", "W.4.1c"],
  vocabulary: [
    { term: "Claim", definition: "Position." },
    { term: "Reason", definition: "Why." },
    { term: "Evidence", definition: "Proof." },
    { term: "Linking word", definition: "Connector." },
    { term: "Argument", definition: "Reasoned position." },
    { term: "Support", definition: "Back it up." },
    { term: "Conclusion", definition: "End point." },
    { term: "Topic", definition: "What it's about." },
  ],
  concepts: [
    {
      id: "ela4-u5-argument-review",
      title: "Writing argument review",
      skill: "Combine claim, reasons, evidence and linking words into a complete argument.",
      lesson: {
        sections: [
          {
            heading: "All argument skills",
            body: "**Introduce topic**, **state claim**, **support with reasons and evidence**, use **linking words**, and **conclude**.",
          },
          {
            heading: "Put it together",
            body: "All parts = complete, convincing argument.",
          },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Topic + claim + reasons + evidence + linkers + conclusion = complete." },
        ],
        workedExample: {
          problem: "Write a complete argument.",
          solution: "All parts = convincing argument.",
        },
      },
      questions: [
        {
          id: "ela4-u5-argument-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Argument skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only claims"
                    },
                    {
                              "id": "b",
                              "text": "claim, reasons, evidence, linkers, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "only evidence"
                    },
                    {
                              "id": "d",
                              "text": "only linkers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All argument skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All argument skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**claim, reasons, evidence, linkers, conclusion**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete argument: introduce topic, state claim, give two reasons with evidence, use linking words, and conclude.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All argument",
                                                  "All parts present."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All argument",
                                                  "All parts present."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes complete argument.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Topic: recess. Claim: longer recess. Reasons: health + focus. Evidence: studies. Linkers: because, for example. Conclusion: schools should act.'**"
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A strong argument needs...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only opinion"
                    },
                    {
                              "id": "b",
                              "text": "claim + reasons + evidence + linkers"
                    },
                    {
                              "id": "c",
                              "text": "only evidence"
                    },
                    {
                              "id": "d",
                              "text": "only a claim"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All parts needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All parts needed.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**claim + reasons + evidence + linkers**",
          "commonErrors": [
                    "Missing parts."
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Claim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why."
                    },
                    {
                              "id": "b",
                              "text": "Position."
                    },
                    {
                              "id": "c",
                              "text": "Proof."
                    },
                    {
                              "id": "d",
                              "text": "Connector."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Claim\" means Position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Claim\" means Position.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Claim** = Position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Proof."
                    },
                    {
                              "id": "b",
                              "text": "Connector."
                    },
                    {
                              "id": "c",
                              "text": "Reasoned position."
                    },
                    {
                              "id": "d",
                              "text": "Why."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evidence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connector."
                    },
                    {
                              "id": "b",
                              "text": "Proof."
                    },
                    {
                              "id": "c",
                              "text": "Reasoned position."
                    },
                    {
                              "id": "d",
                              "text": "Back it up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Evidence\" means Proof."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evidence\" means Proof.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Evidence** = Proof.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Linking word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reasoned position."
                    },
                    {
                              "id": "b",
                              "text": "Back it up."
                    },
                    {
                              "id": "c",
                              "text": "End point."
                    },
                    {
                              "id": "d",
                              "text": "Connector."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Linking word\" means Connector."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Linking word\" means Connector.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Linking word** = Connector.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-argument-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Argument\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back it up."
                    },
                    {
                              "id": "b",
                              "text": "Reasoned position."
                    },
                    {
                              "id": "c",
                              "text": "End point."
                    },
                    {
                              "id": "d",
                              "text": "What it's about."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Argument\" means Reasoned position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Argument\" means Reasoned position.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Argument** = Reasoned position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
