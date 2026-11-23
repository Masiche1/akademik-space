import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "ela6-u5-lesson-5-5",
  code: "5-5",
  title: "Argument Review",
  goal: "I CAN use all argument writing skills.",
  standards: ["W.6.1"],
  vocabulary: [
    { term: "Claim", definition: "Main argument." },
    { term: "Evidence", definition: "Supporting facts." },
    { term: "Reasoning", definition: "Why it matters." },
    { term: "Counterclaim", definition: "Opposing view." },
    { term: "Rebuttal", definition: "Response." },
    { term: "Introduction", definition: "Hook + claim." },
    { term: "Conclusion", definition: "Summary." },
    { term: "Structure", definition: "Organization." },
  ],
  concepts: [
    {
      id: "ela6-u5-argument-review",
      title: "Argument review",
      skill: "Combine claims, evidence, counterclaims and structure.",
      lesson: {
        sections: [
          {
            heading: "All argument skills",
            body: "Write **claims** supported by **evidence** and **reasoning**, **address counterclaims**, and **organize** effectively.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to write convincing arguments.",
          },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Claim + evidence + reasoning + counterclaim + structure = complete argument." },
        ],
        workedExample: {
          problem: "Use all argument skills.",
          solution: "All skills = complete argument.",
        },
      },
      questions: [
        {
          id: "ela6-u5-argument-review-q1",
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
                              "text": "claims, evidence, reasoning, counterclaims, structure"
                    },
                    {
                              "id": "c",
                              "text": "only evidence"
                    },
                    {
                              "id": "d",
                              "text": "only structure"
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
          "finalAnswer": "claims, evidence, reasoning, counterclaims, structure",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u5-argument-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a claim, provide evidence and reasoning, address a counterclaim, and organize into intro/body/conclusion.",
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
                                                  "All argument",
                                                  "All skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
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
                    "**e.g., 'Claim: recess longer; Evidence: studies; Reasoning: improves focus; Counterclaim: less time; Rebuttal: benefits outweigh; Structure: intro/body/conclusion.'**"
          ]
},
        },
        {
          id: "ela6-u5-argument-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Argument writing helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only test"
                    },
                    {
                              "id": "b",
                              "text": "persuade others with reasoned arguments"
                    },
                    {
                              "id": "c",
                              "text": "only memorize"
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
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Persuade with reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Persuade with reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "persuade others with reasoned arguments",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "ela6-u5-argument-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Claim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "b",
                              "text": "Main argument."
                    },
                    {
                              "id": "c",
                              "text": "Why it matters."
                    },
                    {
                              "id": "d",
                              "text": "Opposing view."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Claim\" means Main argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Claim\" means Main argument.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Claim** = Main argument.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-argument-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evidence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why it matters."
                    },
                    {
                              "id": "b",
                              "text": "Opposing view."
                    },
                    {
                              "id": "c",
                              "text": "Response."
                    },
                    {
                              "id": "d",
                              "text": "Supporting facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Evidence\" means Supporting facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evidence\" means Supporting facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Evidence** = Supporting facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-argument-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reasoning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposing view."
                    },
                    {
                              "id": "b",
                              "text": "Why it matters."
                    },
                    {
                              "id": "c",
                              "text": "Response."
                    },
                    {
                              "id": "d",
                              "text": "Hook + claim."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reasoning\" means Why it matters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reasoning\" means Why it matters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reasoning** = Why it matters.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-argument-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Counterclaim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Response."
                    },
                    {
                              "id": "b",
                              "text": "Hook + claim."
                    },
                    {
                              "id": "c",
                              "text": "Summary."
                    },
                    {
                              "id": "d",
                              "text": "Opposing view."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela6-u5-argument-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rebuttal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hook + claim."
                    },
                    {
                              "id": "b",
                              "text": "Response."
                    },
                    {
                              "id": "c",
                              "text": "Summary."
                    },
                    {
                              "id": "d",
                              "text": "Organization."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rebuttal\" means Response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rebuttal\" means Response.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rebuttal** = Response.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
