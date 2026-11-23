import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ela6-u5-lesson-5-2",
  code: "5-2",
  title: "Counterclaims",
  goal: "I CAN address counterclaims in my argument.",
  standards: ["W.6.1"],
  vocabulary: [
    { term: "Counterclaim", definition: "Opposing argument." },
    { term: "Rebuttal", definition: "Response to counter." },
    { term: "Address", definition: "Deal with." },
    { term: "Opposing", definition: "Against you." },
    { term: "Concede", definition: "Acknowledge point." },
    { term: "Refute", definition: "Disprove." },
    { term: "Strengthen", definition: "Make stronger." },
    { term: "Balance", definition: "Fair view." },
  ],
  concepts: [
    {
      id: "ela6-u5-counterclaims",
      title: "Counterclaims",
      skill: "Acknowledge and refute counterclaims to strengthen your argument.",
      lesson: {
        sections: [
          {
            heading: "Opposing view",
            body: "A **counterclaim** is the opposing argument. Strong writers **acknowledge** it, then **refute** it with evidence.",
          },
          {
            heading: "Why?",
            body: "Addressing counterclaims shows you've considered all sides and makes your argument **stronger** and more credible.",
          },
        ],
        keyFormulas: [
          { name: "Counterclaim", statement: "Acknowledge opposing view + refute with evidence = stronger argument." },
        ],
        workedExample: {
          problem: "Claim: School uniforms should be required. Counterclaim: Uniforms limit self-expression. How to address?",
          solution: "**Acknowledge uniforms limit some expression, but refute: uniforms promote equality and reduce distractions; students can express through accessories/hairstyles.**",
        },
      },
      questions: [
        {
          id: "ela6-u5-counterclaims-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'counterclaim' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your main argument"
                    },
                    {
                              "id": "b",
                              "text": "the opposing argument"
                    },
                    {
                              "id": "c",
                              "text": "your evidence"
                    },
                    {
                              "id": "d",
                              "text": "your conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opposing argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposing argument.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the opposing argument",
          "commonErrors": [
                    "Confuses with claim."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Addressing counterclaims makes your argument...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weaker"
                    },
                    {
                              "id": "b",
                              "text": "stronger and more credible"
                    },
                    {
                              "id": "c",
                              "text": "longer only"
                    },
                    {
                              "id": "d",
                              "text": "unchanged"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Stronger/credible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stronger/credible.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "stronger and more credible",
          "commonErrors": [
                    "Wrong effect."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a claim and a counterclaim, then provide a rebuttal to the counterclaim.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Counterclaim",
                              "statement": "Claim + counter + rebuttal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes claim.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Addresses counter.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Claim: Recess should be longer; Counterclaim: Recess wastes learning time; Rebuttal: Studies show exercise improves focus and learning.**",
          "commonErrors": [
                    "No counterclaim.",
                    "No rebuttal."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'rebuttal' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your claim"
                    },
                    {
                              "id": "b",
                              "text": "your response to the counterclaim"
                    },
                    {
                              "id": "c",
                              "text": "your evidence"
                    },
                    {
                              "id": "d",
                              "text": "your conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Response to counter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Response to counter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "your response to the counterclaim",
          "commonErrors": [
                    "Confuses with claim."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a claim, state a counterclaim, and provide a strong rebuttal with evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Counterclaim",
                              "statement": "All three parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes claim.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Provides rebuttal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Claim: Online learning is effective; Counterclaim: lacks social interaction; Rebuttal: Online platforms now offer virtual collaboration and social features.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Weak rebuttal."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Counterclaim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Response to counter."
                    },
                    {
                              "id": "b",
                              "text": "Opposing argument."
                    },
                    {
                              "id": "c",
                              "text": "Deal with."
                    },
                    {
                              "id": "d",
                              "text": "Against you."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Counterclaim\" means Opposing argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Counterclaim\" means Opposing argument.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Counterclaim** = Opposing argument.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rebuttal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Deal with."
                    },
                    {
                              "id": "b",
                              "text": "Against you."
                    },
                    {
                              "id": "c",
                              "text": "Acknowledge point."
                    },
                    {
                              "id": "d",
                              "text": "Response to counter."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Rebuttal\" means Response to counter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rebuttal\" means Response to counter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Rebuttal** = Response to counter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-counterclaims-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Address\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Against you."
                    },
                    {
                              "id": "b",
                              "text": "Deal with."
                    },
                    {
                              "id": "c",
                              "text": "Acknowledge point."
                    },
                    {
                              "id": "d",
                              "text": "Disprove."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Address\" means Deal with."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Address\" means Deal with.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Address** = Deal with.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
