import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "ela0-u4-lesson-4-5",
  code: "4-5",
  title: "Opinion Writing Review",
  goal: "I CAN write an opinion piece with reasons.",
  standards: ["W.K.1"],
  vocabulary: [
    { term: "Opinion", definition: "What we think or like." },
    { term: "Fact", definition: "Something true." },
    { term: "Reason", definition: "Why we think it." },
    { term: "Because", definition: "Gives reason." },
    { term: "Introduction", definition: "States opinion." },
    { term: "Conclusion", definition: "Wraps up." },
    { term: "Strong", definition: "Well-supported." },
  ],
  concepts: [
    {
      id: "ela0-u4-opinion-review",
      title: "Opinion writing review",
      skill: "Combine opinion, reasons and structure.",
      lesson: {
        sections: [
          {
            heading: "All of opinion writing",
            body: "An opinion piece states what you **like** or **think**, gives **reasons** with 'because', and has **structure** (intro, reasons, conclusion).",
          },
          {
            heading: "Put it together",
            body: "Write a clear opinion, support it with reasons, and organize it well.",
          },
        ],
        keyFormulas: [
          { name: "Opinion review", statement: "Opinion + reasons + structure = strong opinion piece." },
        ],
        workedExample: {
          problem: "Write a complete opinion piece about your favorite season.",
          solution: "Intro: 'Summer is my favorite.' Reasons: 'because I can swim and play outside.' Conclusion: 'That is why I love summer.'",
        },
      },
      questions: [
        {
          id: "ela0-u4-opinion-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A strong opinion piece has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no reasons"
                    },
                    {
                              "id": "b",
                              "text": "opinion + reasons + structure"
                    },
                    {
                              "id": "c",
                              "text": "only facts"
                    },
                    {
                              "id": "d",
                              "text": "no conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opinion + reasons + structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion + reasons + structure.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all three**",
          "commonErrors": [
                    "Missing elements."
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete opinion piece about something you like. Include an opinion, a reason, and a conclusion.",
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
                                                  "Opinion piece",
                                                  "Opinion + reason + conclusion."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Opinion piece",
                                                  "Opinion + reason + conclusion."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes complete opinion piece.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'I like cats. They are soft and playful. Cats are my favorite!'**"
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An opinion differs from a fact because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's always true"
                    },
                    {
                              "id": "b",
                              "text": "it's what we think or like"
                    },
                    {
                              "id": "c",
                              "text": "it's longer"
                    },
                    {
                              "id": "d",
                              "text": "it's a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opinion = what we think/like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion = what we think/like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what we think**",
          "commonErrors": [
                    "Confuses with fact."
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'conclusion' in an opinion piece...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "states the opinion"
                    },
                    {
                              "id": "b",
                              "text": "wraps up the writing at the end"
                    },
                    {
                              "id": "c",
                              "text": "gives reasons"
                    },
                    {
                              "id": "d",
                              "text": "is the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Conclusion = wrap up at end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conclusion = wrap up at end.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**wraps up**",
          "commonErrors": [
                    "Confuses with introduction."
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "What we think or like."
                    },
                    {
                              "id": "c",
                              "text": "Why we think it."
                    },
                    {
                              "id": "d",
                              "text": "Gives reason."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What we think or like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What we think or like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What we think or like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why we think it."
                    },
                    {
                              "id": "b",
                              "text": "Gives reason."
                    },
                    {
                              "id": "c",
                              "text": "States opinion."
                    },
                    {
                              "id": "d",
                              "text": "Something true."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means Something true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Something true.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = Something true.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gives reason."
                    },
                    {
                              "id": "b",
                              "text": "Why we think it."
                    },
                    {
                              "id": "c",
                              "text": "States opinion."
                    },
                    {
                              "id": "d",
                              "text": "Wraps up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why we think it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why we think it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why we think it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u4-opinion-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Because\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "States opinion."
                    },
                    {
                              "id": "b",
                              "text": "Wraps up."
                    },
                    {
                              "id": "c",
                              "text": "Well-supported."
                    },
                    {
                              "id": "d",
                              "text": "Gives reason."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Because\" means Gives reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Because\" means Gives reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Because** = Gives reason.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
