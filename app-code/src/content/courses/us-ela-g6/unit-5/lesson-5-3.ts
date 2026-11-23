import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ela6-u5-lesson-5-3",
  code: "5-3",
  title: "Argument Structure",
  goal: "I CAN organize an argument effectively.",
  standards: ["W.6.1"],
  vocabulary: [
    { term: "Introduction", definition: "Hook + claim." },
    { term: "Body", definition: "Evidence + reasoning." },
    { term: "Conclusion", definition: "Summary + call." },
    { term: "Transition", definition: "Connect ideas." },
    { term: "Paragraph", definition: "Section." },
    { term: "Organization", definition: "Structure." },
    { term: "Flow", definition: "Smooth movement." },
    { term: "Clear", definition: "Easy to follow." },
  ],
  concepts: [
    {
      id: "ela6-u5-argument-structure",
      title: "Argument structure",
      skill: "Organize an argument with clear introduction, body and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Three parts",
            body: "**Introduction** (hook + claim), **Body** (evidence + reasoning + counterclaim), **Conclusion** (summary + call to action).",
          },
          {
            heading: "Transitions",
            body: "Use **transitions** to connect ideas smoothly: 'furthermore', 'however', 'in addition'.",
          },
        ],
        keyFormulas: [
          { name: "Argument structure", statement: "Intro + body + conclusion = organized argument." },
        ],
        workedExample: {
          problem: "Outline an argument for 'Students should learn to cook'.",
          solution: "**Intro: hook + claim; Body: health benefits, life skills, evidence; Counterclaim: takes time away from academics; Conclusion: cooking is valuable education.**",
        },
      },
      questions: [
        {
          id: "ela6-u5-argument-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A strong argument should have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only one paragraph"
                    },
                    {
                              "id": "b",
                              "text": "clear intro, body, and conclusion"
                    },
                    {
                              "id": "c",
                              "text": "no organization"
                    },
                    {
                              "id": "d",
                              "text": "only evidence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Intro + body + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intro + body + conclusion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "clear intro, body, and conclusion",
          "commonErrors": [
                    "Too simple."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Transitions' help arguments by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making them longer"
                    },
                    {
                              "id": "b",
                              "text": "connecting ideas smoothly"
                    },
                    {
                              "id": "c",
                              "text": "adding facts"
                    },
                    {
                              "id": "d",
                              "text": "changing topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Connecting ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connecting ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "connecting ideas smoothly",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Outline the structure of an argument for 'Students should have longer lunch periods'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "All three parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Outlines structure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Intro: hook + claim (longer lunch improves focus); Body: evidence (studies show benefits, more time for socializing/relaxation); Counterclaim: less instructional time; Conclusion: benefits outweigh costs.**",
          "commonErrors": [
                    "Incomplete outline.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'introduction' of an argument should include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only evidence"
                    },
                    {
                              "id": "b",
                              "text": "hook and claim"
                    },
                    {
                              "id": "c",
                              "text": "only conclusion"
                    },
                    {
                              "id": "d",
                              "text": "only counterclaim"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Hook + claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hook + claim.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "hook and claim",
          "commonErrors": [
                    "Missing elements."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an outline for an argument, including introduction, body paragraphs, and conclusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Structure",
                              "statement": "Complete outline."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes outline.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Includes all parts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Intro: claim about recess; Body P1: health evidence; Body P2: academic benefits; Body P3: counterclaim rebuttal; Conclusion: call for change.'**",
          "commonErrors": [
                    "Incomplete.",
                    "Missing parts."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Introduction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Evidence + reasoning."
                    },
                    {
                              "id": "b",
                              "text": "Hook + claim."
                    },
                    {
                              "id": "c",
                              "text": "Summary + call."
                    },
                    {
                              "id": "d",
                              "text": "Connect ideas."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Introduction\" means Hook + claim."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Introduction\" means Hook + claim.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Introduction** = Hook + claim.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Body\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Summary + call."
                    },
                    {
                              "id": "b",
                              "text": "Connect ideas."
                    },
                    {
                              "id": "c",
                              "text": "Section."
                    },
                    {
                              "id": "d",
                              "text": "Evidence + reasoning."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Body\" means Evidence + reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Body\" means Evidence + reasoning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Body** = Evidence + reasoning.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u5-argument-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conclusion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connect ideas."
                    },
                    {
                              "id": "b",
                              "text": "Summary + call."
                    },
                    {
                              "id": "c",
                              "text": "Section."
                    },
                    {
                              "id": "d",
                              "text": "Structure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conclusion\" means Summary + call."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conclusion\" means Summary + call.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conclusion** = Summary + call.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
