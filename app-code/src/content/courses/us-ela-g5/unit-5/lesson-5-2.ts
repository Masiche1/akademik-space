import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ela5-u5-lesson-5-2",
  code: "5-2",
  title: "Argument Writing",
  goal: "I CAN write an argument supporting a claim with evidence.",
  standards: ["W.5.1"],
  vocabulary: [
    { term: "Argument", definition: "Reasoned case." },
    { term: "Claim", definition: "What you argue." },
    { term: "Evidence", definition: "Proof." },
    { term: "Counterclaim", definition: "Opposing view." },
    { term: "Refute", definition: "Disprove." },
    { term: "Support", definition: "Back up." },
    { term: "Logical", definition: "Makes sense." },
    { term: "Reasoning", definition: "Why it's true." },
  ],
  concepts: [
    {
      id: "ela5-u5-argument-writing",
      title: "Argument writing",
      skill: "Write an argument that supports a claim with evidence and addresses counterclaims.",
      lesson: {
        sections: [
          {
            heading: "Claim + evidence",
            body: "An **argument** makes a **claim** (what you believe) and supports it with **evidence** (facts, examples, reasoning). It's more formal than opinion.",
          },
          {
            heading: "Counterclaims",
            body: "Strong arguments **address counterclaims** — what the other side might say — and **refute** (disprove) them. This shows you've thought it through.",
          },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Claim + evidence + refute counterclaim = strong argument." },
        ],
        workedExample: {
          problem: "Write an argument: Should schools have longer recess?",
          solution: "**Claim: yes. Evidence: exercise improves focus. Counterclaim: less class time. Refute: short breaks actually increase learning.**",
        },
      },
      questions: [
        {
          id: "ela5-u5-argument-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'argument' differs from opinion because it...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "has no reasons"
                    },
                    {
                              "id": "b",
                              "text": "uses evidence and reasoning to support a claim"
                    },
                    {
                              "id": "c",
                              "text": "is shorter"
                    },
                    {
                              "id": "d",
                              "text": "is emotional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Uses evidence/reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses evidence/reasoning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "uses evidence and reasoning to support a claim",
          "commonErrors": [
                    "Just states opinion."
          ]
},
        },
        {
          id: "ela5-u5-argument-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'counterclaim' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your main claim"
                    },
                    {
                              "id": "b",
                              "text": "the opposing view you address"
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
                              "statement": "Opposing view."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposing view.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "the opposing view you address",
          "commonErrors": [
                    "Confuses with claim."
          ]
},
        },
        {
          id: "ela5-u5-argument-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a short argument supporting a claim. Include your claim, two pieces of evidence, and address one counterclaim.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument",
                              "statement": "Claim + evidence + counterclaim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States claim.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives evidence + counterclaim.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Claim: [position]; Evidence: [fact/example]; Counterclaim: [opposing]; Refute: [why you're right].**",
          "commonErrors": [
                    "Missing parts.",
                    "No counterclaim."
          ]
},
        },
        {
          id: "ela5-u5-argument-writing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To 'refute' a counterclaim means to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "agree with it"
                    },
                    {
                              "id": "b",
                              "text": "disprove or counter it"
                    },
                    {
                              "id": "c",
                              "text": "ignore it"
                    },
                    {
                              "id": "d",
                              "text": "repeat it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Disprove/counter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Disprove/counter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "disprove or counter it",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela5-u5-argument-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an argument and explain how your evidence and counterclaim-refutation strengthen it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument",
                              "statement": "Argument + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains strength.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Argument with claim/evidence/counterclaim; Evidence proves claim; Refutation shows you've considered other side.**",
          "commonErrors": [
                    "Cannot write.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u5-argument-writing-q6",
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
                              "text": "Reasoned case."
                    },
                    {
                              "id": "c",
                              "text": "Proof."
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
          id: "ela5-u5-argument-writing-q7",
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
                              "text": "Opposing view."
                    },
                    {
                              "id": "c",
                              "text": "Disprove."
                    },
                    {
                              "id": "d",
                              "text": "What you argue."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela5-u5-argument-writing-q8",
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
                              "text": "Proof."
                    },
                    {
                              "id": "c",
                              "text": "Disprove."
                    },
                    {
                              "id": "d",
                              "text": "Back up."
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
      ],
    },
  ],
};
