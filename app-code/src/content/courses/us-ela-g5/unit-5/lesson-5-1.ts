import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ela5-u5-lesson-5-1",
  code: "5-1",
  title: "Opinion Writing",
  goal: "I CAN write an opinion piece with reasons and examples.",
  standards: ["W.5.1"],
  vocabulary: [
    { term: "Opinion", definition: "What you think." },
    { term: "Reason", definition: "Why you think it." },
    { term: "Evidence", definition: "Proof/support." },
    { term: "Example", definition: "Specific case." },
    { term: "Introduce", definition: "Start your opinion." },
    { term: "Conclusion", definition: "End your opinion." },
    { term: "Linking words", definition: "Words that connect ideas." },
    { term: "Persuade", definition: "Convince others." },
  ],
  concepts: [
    {
      id: "ela5-u5-opinion-writing",
      title: "Opinion writing",
      skill: "Write an opinion piece that states your view with reasons and examples.",
      lesson: {
        sections: [
          {
            heading: "Your view",
            body: "An **opinion** piece states what **you think** about a topic, then gives **reasons** (why) and **examples** (proof).",
          },
          {
            heading: "Structure",
            body: "**Introduce** your opinion -> give **reasons** with **evidence** -> **conclude**. Use **linking words**: 'first', 'also', 'for example'.",
          },
        ],
        keyFormulas: [
          { name: "Opinion", statement: "State view + reasons + examples + conclusion = opinion piece." },
        ],
        workedExample: {
          problem: "Write an opinion: Should students have homework?",
          solution: "**Intro: I think homework is helpful. Reason 1: it practices skills. Reason 2: it prepares for tests. Conclusion: homework helps learning.**",
        },
      },
      questions: [
        {
          id: "ela5-u5-opinion-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'opinion' piece should include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "your view + reasons + examples"
                    },
                    {
                              "id": "c",
                              "text": "only examples"
                    },
                    {
                              "id": "d",
                              "text": "only reasons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "View + reasons + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "View + reasons + examples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "your view + reasons + examples",
          "commonErrors": [
                    "Missing parts."
          ]
},
        },
        {
          id: "ela5-u5-opinion-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Reasons' in opinion writing are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "facts only"
                    },
                    {
                              "id": "b",
                              "text": "why you think what you think"
                    },
                    {
                              "id": "c",
                              "text": "examples only"
                    },
                    {
                              "id": "d",
                              "text": "opinions of others"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Why you think it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Why you think it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "why you think what you think",
          "commonErrors": [
                    "Confuses with evidence."
          ]
},
        },
        {
          id: "ela5-u5-opinion-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a 5-sentence opinion piece on a topic you care about. Include your opinion, two reasons, and an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Opinion",
                              "statement": "Complete piece."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "States opinion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives reasons + example.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'I think [topic] is important because [reason 1] and [reason 2]. For example, [example].'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not opinionated."
          ]
},
        },
        {
          id: "ela5-u5-opinion-writing-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Linking words' help...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make text longer"
                    },
                    {
                              "id": "b",
                              "text": "connect ideas smoothly"
                    },
                    {
                              "id": "c",
                              "text": "confuse readers"
                    },
                    {
                              "id": "d",
                              "text": "add details"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connect ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connect ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "connect ideas smoothly",
          "commonErrors": [
                    "Thinks they're filler."
          ]
},
        },
        {
          id: "ela5-u5-opinion-writing-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an opinion piece and explain how your reasons and examples support your view.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Opinion",
                              "statement": "Piece + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes piece.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains support.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Piece with opinion + reasons; Explanation: reasons prove why view is correct.**",
          "commonErrors": [
                    "Cannot write.",
                    "No explanation."
          ]
},
        },
        {
          id: "ela5-u5-opinion-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why you think it."
                    },
                    {
                              "id": "b",
                              "text": "What you think."
                    },
                    {
                              "id": "c",
                              "text": "Proof/support."
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
          id: "ela5-u5-opinion-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Proof/support."
                    },
                    {
                              "id": "b",
                              "text": "Specific case."
                    },
                    {
                              "id": "c",
                              "text": "Start your opinion."
                    },
                    {
                              "id": "d",
                              "text": "Why you think it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why you think it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why you think it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why you think it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u5-opinion-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evidence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Specific case."
                    },
                    {
                              "id": "b",
                              "text": "Proof/support."
                    },
                    {
                              "id": "c",
                              "text": "Start your opinion."
                    },
                    {
                              "id": "d",
                              "text": "End your opinion."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Evidence\" means Proof/support."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evidence\" means Proof/support.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Evidence** = Proof/support.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
