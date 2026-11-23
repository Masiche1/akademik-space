import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ela6-u5-lesson-5-1",
  code: "5-1",
  title: "Claims and Evidence",
  goal: "I CAN write a claim supported by evidence.",
  standards: ["W.6.1"],
  vocabulary: [
    { term: "Claim", definition: "Main argument." },
    { term: "Evidence", definition: "Facts supporting." },
    { term: "Reasoning", definition: "Why it matters." },
    { term: "Support", definition: "Back up." },
    { term: "Fact", definition: "True information." },
    { term: "Example", definition: "Specific case." },
    { term: "Quote", definition: "Exact words." },
    { term: "Explain", definition: "Make clear." },
  ],
  concepts: [
    {
      id: "ela6-u5-claims-evidence",
      title: "Claims and evidence",
      skill: "Write a clear claim and support it with strong evidence and reasoning.",
      lesson: {
        sections: [
          {
            heading: "Claim",
            body: "A **claim** is your main argument — what you believe or want to prove. It should be clear and specific.",
          },
          {
            heading: "Evidence",
            body: "**Evidence** = facts, examples, quotes that support your claim. **Reasoning** = explain WHY the evidence supports your claim.",
          },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Claim + evidence + reasoning = strong argument." },
        ],
        workedExample: {
          problem: "Write a claim and evidence: 'Should schools have longer recess?'",
          solution: "**Claim: Schools should have longer recess because it improves focus and health. Evidence: Studies show exercise improves concentration; Students need physical activity.**",
        },
      },
      questions: [
        {
          id: "ela6-u5-claims-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'claim' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fact"
                    },
                    {
                              "id": "b",
                              "text": "your main argument"
                    },
                    {
                              "id": "c",
                              "text": "a quote"
                    },
                    {
                              "id": "d",
                              "text": "a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Main argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main argument.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "your main argument",
          "commonErrors": [
                    "Confuses with fact."
          ]
},
        },
        {
          id: "ela6-u5-claims-evidence-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Evidence' in an argument is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your opinion"
                    },
                    {
                              "id": "b",
                              "text": "facts/examples supporting your claim"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "your name"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Facts/examples supporting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Facts/examples supporting.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "facts/examples supporting your claim",
          "commonErrors": [
                    "Confuses with opinion."
          ]
},
        },
        {
          id: "ela6-u5-claims-evidence-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a claim about whether students should have homework, and provide two pieces of evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument",
                              "statement": "Claim + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes claim.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Provides evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Claim: Students should have less homework because it causes stress; Evidence: studies show stress affects health; students need time for family/activities.**",
          "commonErrors": [
                    "No claim.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela6-u5-claims-evidence-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Reasoning' connects evidence to claim by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "just stating facts"
                    },
                    {
                              "id": "b",
                              "text": "explaining WHY evidence supports claim"
                    },
                    {
                              "id": "c",
                              "text": "ignoring evidence"
                    },
                    {
                              "id": "d",
                              "text": "adding opinions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Explains why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "explaining WHY evidence supports claim",
          "commonErrors": [
                    "Confuses with fact."
          ]
},
        },
        {
          id: "ela6-u5-claims-evidence-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a claim with two pieces of evidence and explain the reasoning for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Argument",
                              "statement": "Claim + evidence + reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes claim.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Provides reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Claim: Pets improve mental health; Evidence 1: therapy animals help patients (reasoning: interaction reduces anxiety); Evidence 2: pet owners report less stress (reasoning: companionship provides comfort).'**",
          "commonErrors": [
                    "No claim.",
                    "No reasoning."
          ]
},
        },
        {
          id: "ela6-u5-claims-evidence-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Claim\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Facts supporting."
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
          id: "ela6-u5-claims-evidence-q7",
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
                              "text": "Back up."
                    },
                    {
                              "id": "c",
                              "text": "True information."
                    },
                    {
                              "id": "d",
                              "text": "Facts supporting."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Evidence\" means Facts supporting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evidence\" means Facts supporting.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Evidence** = Facts supporting.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-claims-evidence-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reasoning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back up."
                    },
                    {
                              "id": "b",
                              "text": "Why it matters."
                    },
                    {
                              "id": "c",
                              "text": "True information."
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
      ],
    },
  ],
};
