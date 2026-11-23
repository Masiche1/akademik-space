import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ela4-u8-lesson-8-3",
  code: "8-3",
  title: "Speaking and Listening",
  goal: "I CAN speak clearly and listen actively in discussions.",
  standards: ["SL.4.1", "SL.4.3"],
  vocabulary: [
    { term: "Speak", definition: "Talk clearly." },
    { term: "Listen", definition: "Pay attention." },
    { term: "Discussion", definition: "Group talk." },
    { term: "Take turns", definition: "One at a time." },
    { term: "Active listening", definition: "Really hearing." },
    { term: "Clarify", definition: "Ask to understand." },
    { term: "Respond", definition: "Answer back." },
    { term: "Respect", definition: "Be kind." },
  ],
  concepts: [
    {
      id: "ela4-u8-speaking-listening",
      title: "Speaking and listening",
      skill: "Speak clearly, take turns and listen actively in discussions.",
      lesson: {
        sections: [
          {
            heading: "Good discussion",
            body: "**Take turns** speaking, **listen actively** (don't interrupt), **respond** to others, **clarify** if confused, and show **respect**.",
          },
          {
            heading: "Active listening",
            body: "**Active listening** = paying attention, making eye contact, nodding, and asking questions to show you understand.",
          },
        ],
        keyFormulas: [
          { name: "Discussion", statement: "Take turns + listen + respond + respect = good discussion." },
        ],
        workedExample: {
          problem: "How should you behave in a group discussion?",
          solution: "Take turns, listen without interrupting, respond to others' ideas, ask questions if confused, be respectful.",
        },
      },
      questions: [
        {
          id: "ela4-u8-speaking-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Active listening' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "not paying attention"
                    },
                    {
                              "id": "b",
                              "text": "paying attention and showing understanding"
                    },
                    {
                              "id": "c",
                              "text": "interrupting"
                    },
                    {
                              "id": "d",
                              "text": "ignoring others"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Active = really listening."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Active = really listening.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**paying attention and showing understanding**",
          "commonErrors": [
                    "Passive listening."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a discussion, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "interrupt often"
                    },
                    {
                              "id": "b",
                              "text": "take turns and listen"
                    },
                    {
                              "id": "c",
                              "text": "talk over others"
                    },
                    {
                              "id": "d",
                              "text": "ignore others"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Take turns + listen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take turns + listen.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**take turns and listen**",
          "commonErrors": [
                    "Interrupts."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how to have a good discussion: what you should do and what you shouldn't.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion",
                              "statement": "Do's + don'ts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists do's and don'ts.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**Do: take turns, listen, respond, respect. Don't: interrupt, ignore, be rude.**",
          "commonErrors": [
                    "Only do's.",
                    "No don'ts."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Clarify' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "confuse"
                    },
                    {
                              "id": "b",
                              "text": "ask questions to understand"
                    },
                    {
                              "id": "c",
                              "text": "ignore"
                    },
                    {
                              "id": "d",
                              "text": "argue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Clarify = ask to understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clarify = ask to understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**ask questions to understand**",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Role-play a discussion: one person speaks, the other listens actively and responds. Show both skills.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Discussion",
                              "statement": "Speaking + listening shown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows speaking.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shows listening.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Speaker: states idea clearly. Listener: nods, asks 'What do you mean?', responds.'**",
          "commonErrors": [
                    "Only speaking.",
                    "No listening."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speak\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pay attention."
                    },
                    {
                              "id": "b",
                              "text": "Talk clearly."
                    },
                    {
                              "id": "c",
                              "text": "Group talk."
                    },
                    {
                              "id": "d",
                              "text": "One at a time."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Speak\" means Talk clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speak\" means Talk clearly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Speak** = Talk clearly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Listen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group talk."
                    },
                    {
                              "id": "b",
                              "text": "One at a time."
                    },
                    {
                              "id": "c",
                              "text": "Really hearing."
                    },
                    {
                              "id": "d",
                              "text": "Pay attention."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Listen\" means Pay attention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Listen\" means Pay attention.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Listen** = Pay attention.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-speaking-listening-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Discussion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One at a time."
                    },
                    {
                              "id": "b",
                              "text": "Group talk."
                    },
                    {
                              "id": "c",
                              "text": "Really hearing."
                    },
                    {
                              "id": "d",
                              "text": "Ask to understand."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Discussion\" means Group talk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Discussion\" means Group talk.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Discussion** = Group talk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
