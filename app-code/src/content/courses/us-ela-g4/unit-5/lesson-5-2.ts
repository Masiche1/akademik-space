import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ela4-u5-lesson-5-2",
  code: "5-2",
  title: "Reasons and Evidence",
  goal: "I CAN support claims with reasons and evidence.",
  standards: ["W.4.1b"],
  vocabulary: [
    { term: "Reason", definition: "Why you believe it." },
    { term: "Evidence", definition: "Proof that supports." },
    { term: "Fact", definition: "True thing." },
    { term: "Example", definition: "Specific case." },
    { term: "Statistic", definition: "Number fact." },
    { term: "Source", definition: "Where it came from." },
    { term: "Support", definition: "Back it up." },
    { term: "Detail", definition: "Small fact." },
  ],
  concepts: [
    {
      id: "ela4-u5-reasons-evidence",
      title: "Reasons and evidence",
      skill: "Support claims with reasons backed by facts, examples and evidence.",
      lesson: {
        sections: [
          {
            heading: "Reason + evidence",
            body: "A **reason** says **why** you believe something; **evidence** is the **proof** — facts, examples, statistics, or quotes that support the reason.",
          },
          {
            heading: "Example",
            body: "Claim: 'Reading is important.' Reason: 'It builds vocabulary.' Evidence: 'A study found readers know 20% more words.'",
          },
        ],
        keyFormulas: [
          { name: "Evidence", statement: "Claim + reason + evidence = strong argument." },
        ],
        workedExample: {
          problem: "Claim: 'Exercise is good for you.' Give a reason and evidence.",
          solution: "Reason: 'It makes muscles stronger.' Evidence: 'Doctors recommend 60 minutes of exercise daily.'",
        },
      },
      questions: [
        {
          id: "ela4-u5-reasons-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evidence' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your opinion"
                    },
                    {
                              "id": "b",
                              "text": "proof that supports a reason"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Evidence = proof."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence = proof.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**proof that supports a reason**",
          "commonErrors": [
                    "Confuses with opinion."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Strong evidence includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only feelings"
                    },
                    {
                              "id": "b",
                              "text": "facts, examples, statistics"
                    },
                    {
                              "id": "c",
                              "text": "only guesses"
                    },
                    {
                              "id": "d",
                              "text": "only opinions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Facts/examples/stats = strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facts/examples/stats = strong.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**facts, examples, statistics**",
          "commonErrors": [
                    "Uses weak evidence."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Take a claim. Give one reason and two pieces of evidence that support it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence",
                              "statement": "Reason + two evidence pieces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives reason + two evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Claim: reading helps; Reason: vocabulary; Evidence: study + example.'**",
          "commonErrors": [
                    "No evidence.",
                    "Opinion only."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'reason' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the claim"
                    },
                    {
                              "id": "b",
                              "text": "why you believe the claim"
                    },
                    {
                              "id": "c",
                              "text": "the evidence"
                    },
                    {
                              "id": "d",
                              "text": "the conclusion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Reason = why you believe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason = why you believe.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**why you believe the claim**",
          "commonErrors": [
                    "Confuses with evidence."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a claim, one reason, and three pieces of evidence. How does each piece strengthen the argument?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence",
                              "statement": "Claim + reason + 3 evidence + effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes all parts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains effects.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Claim: exercise good; Reason: health; Evidence: doctor advice, study, personal experience.'**",
          "commonErrors": [
                    "Missing parts.",
                    "No effects."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Proof that supports."
                    },
                    {
                              "id": "b",
                              "text": "Why you believe it."
                    },
                    {
                              "id": "c",
                              "text": "True thing."
                    },
                    {
                              "id": "d",
                              "text": "Specific case."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why you believe it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why you believe it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why you believe it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evidence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "True thing."
                    },
                    {
                              "id": "b",
                              "text": "Specific case."
                    },
                    {
                              "id": "c",
                              "text": "Number fact."
                    },
                    {
                              "id": "d",
                              "text": "Proof that supports."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Evidence\" means Proof that supports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evidence\" means Proof that supports.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Evidence** = Proof that supports.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u5-reasons-evidence-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Specific case."
                    },
                    {
                              "id": "b",
                              "text": "True thing."
                    },
                    {
                              "id": "c",
                              "text": "Number fact."
                    },
                    {
                              "id": "d",
                              "text": "Where it came from."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means True thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means True thing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = True thing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
