import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "ela2-u4-lesson-4-4",
  code: "4-4",
  title: "Opinion Writing Structure",
  goal: "I CAN write an opinion piece with intro, reasons and conclusion.",
  standards: ["W.2.1"],
  vocabulary: [
    { term: "Introduction", definition: "Beginning that states opinion." },
    { term: "Reason", definition: "Why we think it." },
    { term: "Conclusion", definition: "Ending that wraps up." },
    { term: "Structure", definition: "How writing is organized." },
    { term: "Paragraph", definition: "Group of sentences." },
    { term: "Strong", definition: "Well-supported." },
    { term: "Wrap up", definition: "Finish writing." },
    { term: "Order", definition: "Logical sequence." },
  ],
  concepts: [
    {
      id: "ela2-u4-opinion-structure",
      title: "Opinion writing structure",
      skill: "Organize an opinion piece: introduction, reasons, conclusion.",
      lesson: {
        sections: [
          {
            heading: "Three parts",
            body: "An opinion piece has **introduction** (state opinion), **reasons** (give why with 'because'), and **conclusion** (wrap it up).",
          },
          {
            heading: "Strong opinions",
            body: "A **strong** opinion is clear and has good reasons. 'I think dogs are the best pets because they are friendly, loyal and fun.'",
          },
        ],
        keyFormulas: [
          { name: "Opinion structure", statement: "Introduction + reasons + conclusion." },
        ],
        workedExample: {
          problem: "Write the three parts of an opinion about your favorite fruit.",
          solution: "Intro: 'My favorite fruit is apple.' Reasons: 'because it is crunchy and sweet.' Conclusion: 'That is why apples are my favorite.'",
        },
      },
      questions: [
        {
          id: "ela2-u4-opinion-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The three parts of an opinion piece are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start, middle, end only"
                    },
                    {
                              "id": "b",
                              "text": "introduction, reasons, conclusion"
                    },
                    {
                              "id": "c",
                              "text": "title, picture, name"
                    },
                    {
                              "id": "d",
                              "text": "question, answer, question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Intro + reasons + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intro + reasons + conclusion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**intro, reasons, conclusion**",
          "commonErrors": [
                    "Picks wrong structure."
          ]
},
        },
        {
          id: "ela2-u4-opinion-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'introduction' of an opinion piece...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ends the writing"
                    },
                    {
                              "id": "b",
                              "text": "states the opinion at the beginning"
                    },
                    {
                              "id": "c",
                              "text": "gives reasons only"
                    },
                    {
                              "id": "d",
                              "text": "is optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Introduction states opinion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction states opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**states opinion**",
          "commonErrors": [
                    "Confuses with conclusion."
          ]
},
        },
        {
          id: "ela2-u4-opinion-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a short opinion piece: state opinion, give one reason, wrap it up.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Opinion structure",
                              "statement": "Intro + reason + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes all three parts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like dogs. They are friendly. Dogs are my favorite!'**",
          "commonErrors": [
                    "Missing parts.",
                    "Not opinion."
          ]
},
        },
        {
          id: "ela2-u4-opinion-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'conclusion' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the beginning"
                    },
                    {
                              "id": "b",
                              "text": "the ending that wraps up"
                    },
                    {
                              "id": "c",
                              "text": "a reason"
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
                              "statement": "Conclusion = ending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conclusion = ending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**ending/wrap up**",
          "commonErrors": [
                    "Confuses with intro."
          ]
},
        },
        {
          id: "ela2-u4-opinion-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write an opinion piece with intro, two reasons and conclusion about your favorite activity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Opinion structure",
                              "statement": "Intro + 2 reasons + conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes intro + conclusion.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives 2 reasons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like swimming. It is fun and keeps me healthy. Swimming is my favorite!'**",
          "commonErrors": [
                    "Missing structure.",
                    "No reasons."
          ]
},
        },
        {
          id: "ela2-u4-opinion-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Introduction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why we think it."
                    },
                    {
                              "id": "b",
                              "text": "Beginning that states opinion."
                    },
                    {
                              "id": "c",
                              "text": "Ending that wraps up."
                    },
                    {
                              "id": "d",
                              "text": "How writing is organized."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Introduction\" means Beginning that states opinion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Introduction\" means Beginning that states opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Introduction** = Beginning that states opinion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u4-opinion-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ending that wraps up."
                    },
                    {
                              "id": "b",
                              "text": "How writing is organized."
                    },
                    {
                              "id": "c",
                              "text": "Group of sentences."
                    },
                    {
                              "id": "d",
                              "text": "Why we think it."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela2-u4-opinion-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conclusion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How writing is organized."
                    },
                    {
                              "id": "b",
                              "text": "Ending that wraps up."
                    },
                    {
                              "id": "c",
                              "text": "Group of sentences."
                    },
                    {
                              "id": "d",
                              "text": "Well-supported."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Conclusion\" means Ending that wraps up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conclusion\" means Ending that wraps up.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Conclusion** = Ending that wraps up.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
