import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "epk-u7-lesson-7-2",
  code: "7-2",
  title: "Ask Questions",
  goal: "I CAN ask questions to learn more and show I am curious.",
  standards: ["ELOF-PK.LL.SPEAK.3"],
  vocabulary: [
    { term: "Ask", definition: "Say a question to find out." },
    { term: "Question", definition: "Something you ask to learn." },
    { term: "Curious", definition: "Wanting to know more." },
    { term: "Answer", definition: "What someone says back." },
    { term: "Wonder", definition: "Think about what you want to know." },
  ],
  concepts: [
    {
      id: "epk-u7-ask-questions",
      title: "Asking questions",
      skill: "Ask questions to learn and show curiosity.",
      lesson: {
        sections: [
          {
            heading: "Questions help you learn",
            body: "When you **ask a question**, you find out something new. 'Why is the sky blue?' 'How do birds fly?' Questions show you are **curious**.",
          },
          {
            heading: "Good questions",
            body: "Start with question words: who, what, where, when, why, how. 'Why do we sleep?' 'How do plants grow?' 'Where do birds go in winter?'",
          },
        ],
        keyFormulas: [
          { name: "Ask questions", statement: "Use who/what/where/when/why/how to learn and show curiosity." },
        ],
        workedExample: {
          problem: "Form a question about animals.",
          solution: "'Why do birds have feathers?' or 'How do fish breathe underwater?'",
        },
      },
      questions: [
        {
          id: "epk-u7-ask-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do we ask questions?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To confuse people"
                    },
                    {
                              "id": "b",
                              "text": "To learn and show curiosity"
                    },
                    {
                              "id": "c",
                              "text": "To be loud"
                    },
                    {
                              "id": "d",
                              "text": "No reason"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Questions help us learn and show curiosity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Questions help us learn and show curiosity.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**To learn**",
          "commonErrors": [
                    "Thinks questions are pointless."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a 'why' question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where is the park?"
                    },
                    {
                              "id": "b",
                              "text": "Why do we sleep?"
                    },
                    {
                              "id": "c",
                              "text": "What is your name?"
                    },
                    {
                              "id": "d",
                              "text": "When is lunch?"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Why do we sleep?' asks for a reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Why do we sleep?' asks for a reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Why do we sleep?**",
          "commonErrors": [
                    "Picks wrong question word."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ask a question about something you wonder about (animals, weather, space, etc.).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ask questions",
                              "statement": "Use question word to ask."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks a real question.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Why is the ocean salty?'**",
          "commonErrors": [
                    "Not a question.",
                    "Cannot think of one."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Curious' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "angry"
                    },
                    {
                              "id": "b",
                              "text": "wanting to know more"
                    },
                    {
                              "id": "c",
                              "text": "tired"
                    },
                    {
                              "id": "d",
                              "text": "happy only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Curious = wanting to know more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Curious = wanting to know more.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Wanting to know more**",
          "commonErrors": [
                    "Confuses curious with angry."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Think of three questions you wonder about. Ask one to someone.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ask questions",
                              "statement": "Use question words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thinks of 3 questions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Asks one aloud clearly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Why do leaves change color?'**",
          "commonErrors": [
                    "No questions.",
                    "Cannot ask aloud."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ask\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something you ask to learn."
                    },
                    {
                              "id": "b",
                              "text": "Say a question to find out."
                    },
                    {
                              "id": "c",
                              "text": "Wanting to know more."
                    },
                    {
                              "id": "d",
                              "text": "What someone says back."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Ask\" means Say a question to find out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ask\" means Say a question to find out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Ask** = Say a question to find out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Wanting to know more."
                    },
                    {
                              "id": "b",
                              "text": "What someone says back."
                    },
                    {
                              "id": "c",
                              "text": "Think about what you want to know."
                    },
                    {
                              "id": "d",
                              "text": "Something you ask to learn."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question\" means Something you ask to learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means Something you ask to learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question** = Something you ask to learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u7-ask-questions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Curious\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What someone says back."
                    },
                    {
                              "id": "b",
                              "text": "Wanting to know more."
                    },
                    {
                              "id": "c",
                              "text": "Think about what you want to know."
                    },
                    {
                              "id": "d",
                              "text": "Say a question to find out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Curious\" means Wanting to know more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Curious\" means Wanting to know more.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Curious** = Wanting to know more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
