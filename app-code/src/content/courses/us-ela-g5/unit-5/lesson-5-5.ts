import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "ela5-u5-lesson-5-5",
  code: "5-5",
  title: "Argument and Opinion Review",
  goal: "I CAN use all argument and opinion skills.",
  standards: ["W.5.1"],
  vocabulary: [
    { term: "Opinion", definition: "What you think." },
    { term: "Argument", definition: "Reasoned case." },
    { term: "Claim", definition: "What you argue." },
    { term: "Evidence", definition: "Proof." },
    { term: "Counterclaim", definition: "Opposing view." },
    { term: "Linking words", definition: "Connectors." },
    { term: "Reason", definition: "Why." },
    { term: "Conclusion", definition: "End." },
  ],
  concepts: [
    {
      id: "ela5-u5-argument-review",
      title: "Argument and opinion review",
      skill: "Combine opinion writing, argument writing and linking words.",
      lesson: {
        sections: [
          {
            heading: "All writing skills",
            body: "Write **opinions** with reasons, **arguments** with evidence and counterclaims, using **linking words**.",
          },
          {
            heading: "Put it together",
            body: "Use all argument/opinion skills for persuasive writing.",
          },
        ],
        keyFormulas: [
          { name: "Argument/opinion", statement: "Opinion + argument + linking = all skills." },
        ],
        workedExample: {
          problem: "Use all argument and opinion skills.",
          solution: "All skills = complete persuasive writing.",
        },
      },
      questions: [
        {
          id: "ela5-u5-argument-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Argument and opinion skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only opinion"
                    },
                    {
                              "id": "b",
                              "text": "opinion, argument, linking words"
                    },
                    {
                              "id": "c",
                              "text": "only argument"
                    },
                    {
                              "id": "d",
                              "text": "only linking"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "opinion, argument, linking words",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u5-argument-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an opinion piece, an argument with counterclaim, and use linking words to connect ideas.",
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
                                                  "All writing",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All writing",
                                                  "All three skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Opinion: ...; Argument: claim + evidence + counterclaim; Linking: first, however, therefore.'**"
          ]
},
        },
        {
          id: "ela5-u5-argument-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Persuasive writing is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's required"
                    },
                    {
                              "id": "b",
                              "text": "it helps you convince others of your view"
                    },
                    {
                              "id": "c",
                              "text": "it's easy"
                    },
                    {
                              "id": "d",
                              "text": "it's short"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Convince others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convince others.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "it helps you convince others of your view",
          "commonErrors": [
                    "Thinks it's just required."
          ]
},
        },
        {
          id: "ela5-u5-argument-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reasoned case."
                    },
                    {
                              "id": "b",
                              "text": "What you think."
                    },
                    {
                              "id": "c",
                              "text": "What you argue."
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
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What you think."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What you think.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What you think.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-argument-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Argument\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you argue."
                    },
                    {
                              "id": "b",
                              "text": "Proof."
                    },
                    {
                              "id": "c",
                              "text": "Opposing view."
                    },
                    {
                              "id": "d",
                              "text": "Reasoned case."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Argument\" means Reasoned case."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Argument\" means Reasoned case.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Argument** = Reasoned case.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-argument-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Claim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Proof."
                    },
                    {
                              "id": "b",
                              "text": "What you argue."
                    },
                    {
                              "id": "c",
                              "text": "Opposing view."
                    },
                    {
                              "id": "d",
                              "text": "Connectors."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Claim\" means What you argue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Claim\" means What you argue.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Claim** = What you argue.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-argument-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evidence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposing view."
                    },
                    {
                              "id": "b",
                              "text": "Connectors."
                    },
                    {
                              "id": "c",
                              "text": "Why."
                    },
                    {
                              "id": "d",
                              "text": "Proof."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela5-u5-argument-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Counterclaim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connectors."
                    },
                    {
                              "id": "b",
                              "text": "Opposing view."
                    },
                    {
                              "id": "c",
                              "text": "Why."
                    },
                    {
                              "id": "d",
                              "text": "End."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Counterclaim\" means Opposing view."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Counterclaim\" means Opposing view.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Counterclaim** = Opposing view.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
