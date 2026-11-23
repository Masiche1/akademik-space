import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ela5-u8-lesson-8-3",
  code: "8-3",
  title: "Collaborative Discussion",
  goal: "I CAN participate in collaborative discussions.",
  standards: ["SL.5.1", "SL.5.2"],
  vocabulary: [
    { term: "Discussion", definition: "Talk together." },
    { term: "Collaborative", definition: "Working together." },
    { term: "Build on", definition: "Add to ideas." },
    { term: "Respect", definition: "Value others' views." },
    { term: "Evidence", definition: "Support with details." },
    { term: "Turn", definition: "Take a turn." },
    { term: "Question", definition: "Ask for clarification." },
    { term: "Agree/disagree", definition: "Share view." },
  ],
  concepts: [
    {
      id: "ela5-u8-collaborative-discussion",
      title: "Collaborative discussion",
      skill: "Participate in group discussions by building on ideas and respecting others.",
      lesson: {
        sections: [
          {
            heading: "Talking together",
            body: "In a **collaborative discussion**, you **take turns**, **build on** others' ideas (add to them), **ask questions**, and **respect** different views.",
          },
          {
            heading: "Good discussion",
            body: "Use **evidence** to support your ideas, **agree or disagree** politely, and help the group **reach understanding**.",
          },
        ],
        keyFormulas: [
          { name: "Discussion", statement: "Turns + build + questions + respect = good discussion." },
        ],
        workedExample: {
          problem: "In a group discussion about a book, how can you contribute effectively?",
          solution: "**Share your ideas, ask questions about others' views, build on their points, and cite evidence from the text.**",
        },
      },
      questions: [
        {
          id: "ela5-u8-collaborative-discussion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a collaborative discussion, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dominate the talk"
                    },
                    {
                              "id": "b",
                              "text": "take turns, build on ideas, ask questions"
                    },
                    {
                              "id": "c",
                              "text": "stay silent"
                    },
                    {
                              "id": "d",
                              "text": "disagree always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Turns + build + questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Turns + build + questions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "take turns, build on ideas, ask questions",
          "commonErrors": [
                    "Poor participation."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Building on' someone's idea means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignoring it"
                    },
                    {
                              "id": "b",
                              "text": "adding to or extending it"
                    },
                    {
                              "id": "c",
                              "text": "changing the subject"
                    },
                    {
                              "id": "d",
                              "text": "disagreeing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Adding/extending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adding/extending.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "adding to or extending it",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Participate in a group discussion. Describe how you built on someone's idea and asked a clarifying question.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion",
                              "statement": "Contribution + question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds on idea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Asks question.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'I added to [name]'s point by [idea]; I asked: [question].'**",
          "commonErrors": [
                    "Cannot contribute.",
                    "No question."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Respecting others in discussion means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "always agreeing"
                    },
                    {
                              "id": "b",
                              "text": "valuing different views even if you disagree"
                    },
                    {
                              "id": "c",
                              "text": "ignoring others"
                    },
                    {
                              "id": "d",
                              "text": "arguing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Value different views."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Value different views.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "valuing different views even if you disagree",
          "commonErrors": [
                    "Thinks respect = agreeing."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how collaborative discussions help groups learn better than individual work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion",
                              "statement": "Benefit explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains benefit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Different perspectives, shared ideas, questions clarify understanding — richer learning.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No reasoning."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Discussion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Working together."
                    },
                    {
                              "id": "b",
                              "text": "Talk together."
                    },
                    {
                              "id": "c",
                              "text": "Add to ideas."
                    },
                    {
                              "id": "d",
                              "text": "Value others' views."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Discussion\" means Talk together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Discussion\" means Talk together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Discussion** = Talk together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Collaborative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Add to ideas."
                    },
                    {
                              "id": "b",
                              "text": "Value others' views."
                    },
                    {
                              "id": "c",
                              "text": "Support with details."
                    },
                    {
                              "id": "d",
                              "text": "Working together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Collaborative\" means Working together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Collaborative\" means Working together.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Collaborative** = Working together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-collaborative-discussion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Build on\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Value others' views."
                    },
                    {
                              "id": "b",
                              "text": "Add to ideas."
                    },
                    {
                              "id": "c",
                              "text": "Support with details."
                    },
                    {
                              "id": "d",
                              "text": "Take a turn."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Build on\" means Add to ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Build on\" means Add to ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Build on** = Add to ideas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
